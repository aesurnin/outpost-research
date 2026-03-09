/**
 * Build PageIndex-compatible tree from markdown headers.
 * Each ## or ### becomes a node with node_id, title, summary (first line), line_num.
 */
import type { TreeNode } from "./tree-types.js";

export function buildTreeFromMarkdown(content: string): { structure: TreeNode[] } {
  const lines = content.split("\n");
  const structure: TreeNode[] = [];
  const stack: { node: TreeNode; level: number }[] = [];
  let nodeCounter = 0;

  function nextId(): string {
    nodeCounter++;
    return String(nodeCounter).padStart(4, "0");
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const h2 = line.match(/^##\s+(.+)$/);
    const h3 = line.match(/^###\s+(.+)$/);
    const h4 = line.match(/^####\s+(.+)$/);

    const match = h2 || h3 || h4;
    if (!match) continue;

    const level = h2 ? 2 : h3 ? 3 : 4;
    const title = match[1].trim();
    const lineNum = i + 1;

    // Get first non-empty line as summary (up to 200 chars)
    let summary = "";
    for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
      const t = lines[j].trim();
      if (t && !t.startsWith("#")) {
        summary = t.slice(0, 200);
        if (t.length > 200) summary += "...";
        break;
      }
    }

    const node: TreeNode = {
      node_id: nextId(),
      title,
      summary: summary || title,
      line_num: lineNum,
    };

    while (stack.length && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    if (stack.length === 0) {
      structure.push(node);
      stack.push({ node, level });
    } else {
      const parent = stack[stack.length - 1].node;
      if (!parent.nodes) parent.nodes = [];
      parent.nodes.push(node);
      stack.push({ node, level });
    }
  }

  return { structure };
}
