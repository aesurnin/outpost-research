/**
 * PageIndex-compatible tree node (matches outpost-main knowledge_documents.tree_index_json).
 */
export interface TreeNode {
  node_id: string;
  title: string;
  summary?: string;
  prefix_summary?: string;
  line_num?: number;
  nodes?: TreeNode[];
}
