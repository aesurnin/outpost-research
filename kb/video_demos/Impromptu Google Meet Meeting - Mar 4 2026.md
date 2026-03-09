---
id: impromptu-google-meet-meeting-mar-4-2026
date: 2026-03-08
type: video_demo
tags: [video, transcription, processed]
participants: ["Eugene Tymchenko / Taylor Post / Eugene Tymchyshyn", "Taylor Post / Mike Grishchenko / Alexander Sur... / Eugene Tymchenko / Mike Grishche... / Alexander Surmin", "Mike Grishchenko / Eugene Tymchenko / Taylor Post / Eugene / Eugene Tymch... / Alexander / Eugene Tymch", "Mike Grishche... / Mike Grishchenko", "Eugene Tymchyshyn", "Taylor Post", "Alexander / Alexander Sur...", "Mike Grishchenko", "Eugene Tymchenko", "Alexander Surmin", "Oleksii Surnin", "Alexander"]
status: processed
---

# Разбор видео: Impromptu Google Meet Meeting - Mar 4 2026

## 🎯 TL;DR (Executive Summary)
Здесь обсуждались процессы и интерфейсы. Разобрано 285 реплик, найдено 36 экранов и 21 UI-действий.

## 📌 Озвученные Бизнес-правила (Business Rules)
- **Правило**: Все лиды (с сайта, Google Ads, сторонних платформ) попадают в единый централизованный рабочий процесс (workflow) в HubSpot.
  - *Контекст*: Обсуждение источников лидов и их первоначальной обработки.
- **Правило**: В workflow есть проверки для фильтрации нежелательных лидов (например, по block-листу), которые попадают в 'no man's land'.
  - *Контекст*: Объяснение логики фильтрации лидов.
- **Правило**: Основное ветвление в workflow происходит по типу клиента: долгосрочный (long-term) или краткосрочный (short-term).
  - *Контекст*: Объяснение структуры рабочего процесса.
- **Правило**: Для распределения лидов между агентами используется стороннее ПО 'Distributely', которое позволяет настраивать взвешенное распределение.
  - *Контекст*: Объяснение процесса распределения лидов. В этом фрагменте ПО только упоминается, но не показывается.
- **Правило**: A lead is exclusively assigned to a specific agent for a period of 7 days.
  - *Контекст*: Discussion of the lead assignment and exclusivity period.
- **Правило**: After 7 days, if an agent has not established a connection, a returning lead can be reassigned to a new agent upon re-application.
  - *Контекст*: Explaining why leads are removed from the workflow after 7 days.
- **Правило**: Agents are required to make their first contact with a new lead within a 4-hour window.
  - *Контекст*: Answering a question about a 4-hour delay in the workflow.
- **Правило**: An automated task is created for an admin to verify that the first contact was made after the 4-hour window expires.
  - *Контекст*: Explaining the purpose of the 4-hour delay.
- **Правило**: If the assigned agent fails to make contact within 4 hours, the lead can be claimed by another agent.
  - *Контекст*: Clarification on the consequences of the 4-hour first contact rule.
- **Правило**: Many agents use their own automations to send an initial text message within 2 minutes of a lead being assigned.
  - *Контекст*: Explaining that the 4-hour rule is a fail-safe, not the standard response time.
- **Правило**: A deal is automatically created when a new client enters the system through the workflow.
  - *Контекст*: Describing the initial lead intake process.
- **Правило**: Leads with a planned move-in date within 3 to 5 months are categorized as 'short-term' and follow a specific workflow branch.
  - *Контекст*: Explaining the branching logic in the workflow.
- **Правило**: Leads with a planned move-in date beyond 5 months are considered 'long-term' and are routed to a different workflow branch.
  - *Контекст*: Explaining the branching logic in the workflow.
- **Правило**: When a contact reaches the end of this workflow, they are released. If they reapply, they will re-enter the same workflow.
  - *Контекст*: Explaining the end state of the lead nurturing workflow.
- **Правило**: A 7-day delay is used to keep a lead in a 'pending deal' state, preventing them from being immediately re-enrolled or redistributed.
  - *Контекст*: Explaining the purpose of the final 'Delay' step in the workflow.
- **Правило**: A deal is considered 'won' once the contract is signed.
  - *Контекст*: Defining the trigger for a successful deal.
- **Правило**: Contract management and signing happens in a separate PMS system called Neevo, not within this specific HubSpot workflow.
  - *Контекст*: Clarifying system integrations and process boundaries.
- **Правило**: This workflow covers the very beginning of the sales funnel: from a website interest form submission to the initial engagement by an agent.
  - *Контекст*: Defining the scope of the process being discussed.
- **Правило**: Agents use automated, templated SMS messages for initial contact. These messages reference data from the lead's form submission and ask clarifying questions about budget, move-in date, and location.
  - *Контекст*: Demonstrating the agent's follow-up process on a real contact record.
- **Правило**: A longer lease term (e.g., 12 months) results in a better (cheaper) monthly rate for the client.
  - *Контекст*: The content of the automated SMS mentions this as a selling point.
- **Правило**: The 7-day delay prevents leads who submit multiple interest forms on the website from being assigned to multiple different agents, ensuring a single point of contact.
  - *Контекст*: Explaining the practical reason for the delay, prompted by seeing a lead who submitted two different forms.
- **Правило**: If a lead is unresponsive after initial contact attempts (calls/offer email), they should be enrolled in an email sequence.
  - *Контекст*: Describing the process for handling unresponsive leads.
- **Правило**: The standard follow-up is a 7-day automated email sequence ('2025 Offer Sequence').
  - *Контекст*: Explaining the main tool for nurturing unresponsive leads.
- **Правило**: The automated sequence ends with a task for the agent to make a final call and update the lead status to 'Won' or 'Lost'.
  - *Контекст*: Detailing the final step of the automated follow-up process.
- **Правило**: If a lead replies to an email from a sequence, they are automatically unenrolled from it.
  - *Контекст*: Explaining the automation logic to prevent sending follow-ups to a responsive lead.
- **Правило**: If an agent connects with a lead via a call while the lead is in a sequence, the agent must manually unenroll them.
  - *Контекст*: Clarifying the agent's responsibility for managing the sequence during offline interactions.
- **Правило**: Agents are trained on standard processes but can develop their own approaches, like using custom email templates instead of standard sequences.
  - *Контекст*: Highlighting the flexibility and different styles among sales agents.
- **Правило**: While a lead can be closed solely via email, most customers require a phone call or text to feel they are dealing with a real person.
  - *Контекст*: Discussion on communication methods with leads.
- **Правило**: The primary trigger for an agent to call a lead is when the lead stops responding to emails or texts.
  - *Контекст*: Clarifying when a call is necessary.
- **Правило**: Calling is an effective way to capture a lead's immediate attention, as emails can be easily deferred.
  - *Контекст*: Explaining the benefits of phone calls over email.
- **Правило**: Some agents prefer to call leads upfront to gauge their seriousness and re-engage them, as leads often apply to many listings and forget which ones they've contacted.
  - *Контекст*: Discussion of agent-specific sales strategies.
- **Правило**: The decision on when and how to call a lead is ultimately at the agent's discretion; there is no strict company-wide rule.
  - *Контекст*: Clarifying the level of autonomy agents have in their communication strategy.
- **Правило**: A 'capping system' is in place to limit the number of active leads an agent can own at one time.
  - *Контекст*: Discussion on lead management capacity.
- **Правило**: The lead cap is variable and depends on the agent's performance.
  - *Контекст*: Discussion on lead distribution rules.
- **Правило**: Top-performing agents can handle up to 90 active leads simultaneously during the high season (May-September).
  - *Контекст*: Defining the upper limit for lead capacity.
- **Правило**: An average agent might have a cap of 30 active leads.
  - *Контекст*: Defining a typical lead capacity.
- **Правило**: 'Active' leads are new incoming leads or leads in specific pipeline stages like 'Application filed', 'Offer Sent', 'First Contact Attempt', and 'Cool Lead'.
  - *Контекст*: Defining what counts towards an agent's lead cap.
- **Правило**: When a lead's status is changed to 'Closed Won' or 'Closed Lost', it is removed from the agent's active lead count, freeing up capacity.
  - *Контекст*: Explaining the lifecycle of a lead within the capping system.
- **Правило**: A lot of agent communication (calls/texts) occurs on personal phone numbers and is not tracked in the CRM.
  - *Контекст*: A pain point regarding data tracking and visibility into agent activity.
- **Правило**: Taylor's team consists of 9 agents.
  - *Контекст*: Discussion on team size.
- **Правило**: The New York team consists of 7 agents.
  - *Контекст*: Discussion on team size.
- **Правило**: Agents are commission-based, not salaried, and spend most of their time in the field doing tours.
  - *Контекст*: Discussion of agent work structure.
- **Правило**: The company receives approximately 1500 new leads per month.
  - *Контекст*: Discussion of monthly lead volume.
- **Правило**: Pain Point: The biggest bottleneck is managing 'shoppers' - leads who are not yet serious and require long-term, low-priority follow-up.
  - *Контекст*: Discussion of process challenges.
- **Правило**: Process Flaw: Agents tend to mark 'shopper' leads as 'lost' prematurely because they are not ready to convert, classifying them as 'cool leads'.
  - *Контекст*: Discussion of lead management issues.
- **Правило**: There is a re-engagement workflow for cold or lost leads.
  - *Контекст*: Discussion of lead nurturing process.
- **Правило**: When a lead is marked as 'lost', a task is created for an admin to verify the reason. If the reason is 'no response', the admin must attempt to contact the lead again.
  - *Контекст*: Discussion of the process for handling lost leads.
- **Правило**: Internal Terminology: Initial website interest forms are called 'applications', but they function as standard leads.
  - *Контекст*: Clarification of company-specific language.
- **Правило**: The key conversion funnel metrics are 'Lead to Application Rate' and 'Application to Closure Rate'.
  - *Контекст*: Discussion of which metrics are most important for tracking success.
- **Правило**: The manager's primary KPIs are total bookings (conversion) and total revenue.
  - *Контекст*: Clarifying the main performance indicators for the sales team manager.
- **Правило**: Lead distribution among agents is adjusted based on performance.
  - *Контекст*: Explaining how leads are assigned to different salespeople.
- **Правило**: Agent performance is reviewed at least twice a month to re-balance lead distribution.
  - *Контекст*: Detailing the frequency of performance management for the sales team.
- **Правило**: Performance evaluation includes conversion rates from the last two weeks and general responsiveness. An agent slow to respond to the manager will have their lead distribution reduced.
  - *Контекст*: Describing the criteria used to evaluate agent performance and adjust their workload.
- **Правило**: A prospect stating 'I'm ready to book' is officially classified as an 'Application' in the CRM.
  - *Контекст*: Defining a key stage in the sales workflow.
- **Правило**: Agents are allowed to use their personal phones for client communication.
  - *Контекст*: Discussing the rationale for communication policies with commission-based agents who are often out of the office.
- **Правило**: It is not feasible to force commission-based agents to exclusively use company-provided communication tools like Ringostat, as they may not adopt them, and their high performance justifies their current methods.
  - *Контекст*: Pain point and business reality of managing a mobile, commission-based sales team.
- **Правило**: Tracking communication (points of contact) is impossible because agents use personal phone numbers.
  - *Контекст*: Identifying a major data gap and operational pain point in the sales process.
- **Правило**: Pain Point: A major challenge is receiving unqualified leads, defined as leads who don't completely fill out information forms.
  - *Контекст*: Discussion on barriers to increasing conversion rates.
- **Правило**: Pain Point: Lack of timely information on whether current tenants will extend their lease creates uncertainty about unit availability for new prospects.
  - *Контекст*: Discussion on operational challenges.
- **Правило**: Pain Point: Leads with move-in dates far in the future are difficult to convert because they have ample time to consider other options.
  - *Контекст*: Discussion on lead quality and market behavior.
- **Правило**: Market Behavior: Renters tend to book very close to their move-in date (e.g., the day before), similar to booking an Airbnb, which makes sales forecasting unpredictable.
  - *Контекст*: Discussion on market trends affecting sales cycles.
- **Правило**: KPI Tracking: The primary conversion metric tracked is from 'application to closure'.
  - *Контекст*: Clarification on how conversion rate is measured.
- **Правило**: Pain Point: Data integration between the CRM and another system ('Nebo') is flawed, leading to data quality issues.
  - *Контекст*: Discussion on data accuracy.
- **Правило**: Pain Point: The system receives many duplicate or spam leads (e.g., from apartments.com) that are counted as contacts, skewing lead quality metrics and conversion rates.
  - *Контекст*: Discussion on data accuracy and its impact on performance measurement.
- **Правило**: Data for conversion metrics is unreliable and needs to be manually investigated.
  - *Контекст*: Taylor explains that the current system integration creates multiple deals for a single applicant if they apply multiple times, which skews the data.
- **Правило**: Top-performing agents can achieve conversion rates of 40-47%.
  - *Контекст*: Taylor mentions the rates of her best agents during the high season.
- **Правило**: The average year-to-date conversion rate (application to deal) is 24.92% (stated as ~25%).
  - *Контекст*: Taylor provides the company-wide average conversion rate.
- **Правило**: The target ('dream') conversion rate is 33%.
  - *Контекст*: Taylor states what she believes would be a very good company-wide conversion rate.
- **Правило**: Agents sometimes submit applications for unqualified leads, negatively impacting conversion metrics.
  - *Контекст*: Taylor describes a 'throw it against the wall and hope it sticks' mentality, especially during certain seasons.
- **Правило**: Examples of unqualified leads include those with bad credit scores (e.g., 600) or insufficient funds without a solid guarantor.
  - *Контекст*: Taylor provides specific examples of what constitutes a 'not good file'.
- **Правило**: Besides commission, the main operational cost for agents is their HubSpot Sales Professional seat.
  - *Контекст*: Discussion of agent-related costs.
- **Правило**: The number of HubSpot seats is limited and managed on a rotating basis among agents.
  - *Контекст*: Explanation of how agent seats are handled to manage costs.
- **Правило**: Other operational costs include email domains and automated phone numbers, but these are considered nominal compared to a salary.
  - *Контекст*: Further breakdown of operational expenses.
- **Правило**: The main performance metric is the 'application to closure' conversion rate.
  - *Контекст*: Eugene is summarizing the key business objectives.
- **Правило**: The current 'application to closure' conversion rate is approximately 25% on average.
  - *Контекст*: Eugene states the current performance of the key metric.
- **Правило**: The primary strategy to increase the conversion rate is to better filter non-qualified and non-active leads before they reach the application stage.
  - *Контекст*: Eugene summarizes the proposed solution to the low conversion rate, which Taylor confirms.
- **Правило**: The process of preparing lead data for analysis is manual and time-consuming, requiring about 4 hours of an admin's time per batch.
  - *Контекст*: Taylor explains the current workflow for analyzing lost leads.
- **Правило**: This manual lead analysis process is so inefficient that it is not performed every month.
  - *Контекст*: Taylor expresses her reluctance to do the task frequently due to the effort involved.
- **Правило**: The number of leads analyzed in a single batch can range from 50 to 500, with a recent example being around 250 leads.
  - *Контекст*: Taylor describes the scale of the lead analysis task.
- **Правило**: A key business challenge is a data synchronization gap between their CRM (HubSpot) and another system called 'Nebo'.
  - *Контекст*: Taylor mentions this as a barrier to having up-to-date, automated dashboards.
- **Правило**: An employee named 'Jack' is actively working on improving the data integration between the CRM and 'Nebo'.
  - *Контекст*: Taylor mentions an ongoing internal project to solve the data gap issue.
- **Правило**: Onboarding documentation (guides, files) exists for agents, but it is likely outdated.
  - *Контекст*: Discussion about training materials for new agents.
- **Правило**: The lead management process is handled within HubSpot.
  - *Контекст*: Explanation of the sales funnel.
- **Правило**: There is a separate, extensive FAQ document in a system called 'Nebo' that covers operational processes like making bookings.
  - *Контекст*: Clarifying where different types of process documentation are stored.
- **Правило**: An agent's end-to-end workflow needs to be recorded, from when a new lead enters the system until it is closed and no longer part of the sales process.
  - *Контекст*: Defining the next steps and requirements for the analysis.

## 🎬 Полный лог (Аудио + Интерфейсы)


### [00:00:00]
- [00:00:00] **🗣 SPEAKER_A**: Yeah yeah, this one. At least this one. Let's see what's happening with mine.
- [00:00:14] **🗣 SPEAKER_B**: Maybe I declined it initially, I don't know. Sorry for that.
- [00:00:33] **🗣 SPEAKER_B**: Read AI, right?
- [00:00:37] **🗣 SPEAKER_B**: Eugene, is it Read AI? I don't hear you. You're muted, muted.
- [00:00:44] **🗣 SPEAKER_A**: Yes.
- [00:00:45] **🗣 SPEAKER_B**: Okay, now it works. Thank you so much.
- [00:00:51] **🗣 SPEAKER_A**: So yeah, lead management process from where it was created, uh, and what do you do from there?
- [00:00:59] **🗣 SPEAKER_C**: Yeah. So, um, sorry, I'm answering an agent. Uh, cool. Um, so, I realistically, all of like top funnel, right? Any lead that, whether it's a website, Google AdWords, whatever it is, a third-party platform.

### [00:01:00]
- [00:01:48] **🗣 SPEAKER_C**: Um, they hit our uh, CRM, which I'm sure you're already aware, we use uh HubSpot.

### [00:02:00]
- [00:02:09] **👁 Экран**: Видео-звонок в Google Meet с 6 участниками: Eugene Tymchenko, Taylor Post, Oleksii Surnin, Mike Grishchenko, Alexander Surnin, и бот-ассистент Fathom. 
  - *Текст на экране*: Eugene Tymchenko
Taylor Post
Oleksii Surnin
Mike Grishchenko
Alexander Surnin
Recording and taking notes
Alexander's Fathom Notetaker
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0009.jpg)
- [00:02:10] **🗣 SPEAKER_C**: Um, the main the main part of all of it is it goes through a massive workflow. Now, this workflow has a couple checks along the way, depending.
- [00:02:22] **🗣 SPEAKER_C**: Biggest thing is, is it someone that we don't want to sell to, and then they kind of go in a no man's land, right? Um, from there. Do you mind if I just share my screen? Sorry, it's going to be a lot easier for me.
- [00:02:36] **🗣 SPEAKER_A**: Yeah, yeah, of course.
- [00:02:37] **🗣 SPEAKER_C**: Amazing.

### [00:03:00]
- [00:03:30] **👁 Экран**: Taylor Post начинает демонстрацию экрана. На экране открыт HubSpot, страница контакта 'Carolina Pallio'. 
  - *Текст на экране*: Search HubSpot
Carolina Pallio
About this contact
Automation
Overview
Workflows
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0015.jpg)
- [00:03:31] **🖱 UI-Действие**: Taylor кликает на 'Workflows' в меню навигации слева на странице контакта в HubSpot.
  - *Результат*: Открывается страница со списком всех рабочих процессов (workflows).
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0015.jpg)
- [00:03:35] **🗣 SPEAKER_C**: So, all right. Any any lead that comes through any like paid search, anything of that nature, directly even on our website, third-party platforms, hit this workflow. Um, so what happens is contact comes in.
- [00:03:38] **👁 Экран**: Taylor переходит на страницу со списком Workflows (рабочих процессов) в HubSpot. 
  - *Текст на экране*: Automation
Workflows
Search workflows
Name
Description
NYC Application Completed -> Deal Creation -> Claim Lead
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0015.jpg)
- [00:03:38] **🖱 UI-Действие**: Taylor кликает на workflow с названием, начинающимся на 'NYC Application...'.
  - *Результат*: Открывается редактор этого workflow, отображающий его логику в виде блок-схемы.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0015.jpg)
- [00:03:43] **👁 Экран**: Открыт редактор workflow в HubSpot. Показана сложная блок-схема с множеством ветвлений и шагов. 
  - *Текст на экране*: NYC Application Completed -> Deal Creation -> Claim Lead E...
Show minimap panel
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0015.jpg)
- [00:03:52] **🗣 SPEAKER_C**: Um, it goes through a couple branches. Uh, one is, is it a block list? Is it someone's original source? Um, and then eventually what's going to happen is we've also had a lot of copies just through third-party platforms recently. So we have a branch for that.

### [00:04:00]
- [00:04:13] **🗣 SPEAKER_C**: offline source, hold on. Uh, influencer things, specific agents get specific, um, leads depending on the source itself. And eventually, and this is what actually matters. Um, after it's hit all of these if-then branches and whether or not we actually want to talk to them, we make it to here. Um, so this is, it checks if it's both a long-term client or a short-term client. And depending on that, it goes through two separate branches.

### [00:05:00]
- [00:05:00] **🗣 SPEAKER_A**: is that is to ensure that the the client was reached out to, some way, shape or form.
- [00:05:09] **🗣 SPEAKER_A**: Um, after that, there's a delay. This delay is seven days. Uh, this is the amount of time we allow for a specific lead to be attached to a specific agent.
- [00:05:09] **👁 Экран**: The user clicks on a 'Delay' node in a complex HubSpot workflow diagram. The details panel on the left shows the delay is set for 7 days. 
  - *Текст на экране*: 7d Delay, For a set amount of time, Days: 7
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0021.jpg)
- [00:05:09] **🖱 UI-Действие**: Taylor clicks on the 'Delay' node in the workflow.
  - *Результат*: The details panel for the '7d Delay' action opens on the left.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0021.jpg)
- [00:05:20] **🗣 SPEAKER_A**: Um, after the delay is over, after that seven days, it removes from this workflow, meaning anytime they reapply, they're available to be redistributed through our system and maybe get a different agent.
- [00:05:33] **🗣 SPEAKER_A**: Um, we do this just so if, you know, the agent hasn't made like a proper connection with someone and they choose not to go directly back to this agent, then they can reapply and get a new agent and maybe, you know, different people act in different ways.
- [00:05:48] **🗣 SPEAKER_A**: Um, same idea on this other side is just for the long-term leads. Can I ask a couple of questions to this one?
- [00:05:56] **🖱 UI-Действие**: Taylor clicks the 'Back' button in the application header.
  - *Результат*: The screen begins to navigate away from the workflow editor.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0024.jpg)
- [00:05:57] **🗣 SPEAKER_B**: Um, so this is number 72 delay four hours. Why that delay exists again?
- [00:05:57] **👁 Экран**: The presenter navigates away from the workflow editor. The screen is briefly white while loading. 
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0024.jpg)

### [00:06:00]
- [00:06:05] **👁 Экран**: The screen shows the HubSpot workflow again, this time with the delay action details for 7 days visible on the left. 
  - *Текст на экране*: 7d: Delay, Delay for: For a set amount of time, Days: 7
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0025.jpg)
- [00:06:44] **🗣 SPEAKER_A**: Um, so there is a we allow for four hours for first contact to be made um with the agent and a task is created for my admin four hours after to see if that's been done.
- [00:06:58] **🗣 SPEAKER_A**: So it's actually just a delay for a for a task to be made.

### [00:07:00]
- [00:07:02] **🗣 SPEAKER_B**: Task for supervisor?
- [00:07:06] **🗣 SPEAKER_A**: Admin, but yeah. Yeah, okay, got it.
- [00:07:09] **🗣 SPEAKER_C**: And after 4 hours, a lead could be stealed by our other agent, right? Yep. Yep.
- [00:07:17] **🗣 SPEAKER_B**: So it's four hours window for someone to pick it up?
- [00:07:22] **🗣 SPEAKER_A**: Um, I wouldn't say pick it up. Uh, they are assigned, but it's four hours for them to make first contact.
- [00:07:28] **🗣 SPEAKER_A**: Now, I say this with a caveat. Um, so, really, sometimes the four hours isn't like really necessary at all. A lot of my agents have an automatic workflow that is set up that they've chosen to have set up, um that allows for a text to go out within like two minutes of the application.

### [00:08:00]
- [00:08:26] **👁 Экран**: The presenter stops sharing her screen. The view switches to a grid of the meeting participants. 
  - *Текст на экране*: Taylor Post, Eugene Tymchenko, Mike Grishchenko, Alexander Surmin, Oleksii Surmin
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0034.jpg)
- [00:08:31] **🗣 SPEAKER_A**: Um, so a text message, a first contact is made immediately. Um, this is more for agents who have opted into more of a traditional brokerage style where they're not using all of our technology. Um, it's our fail safe for those agents.
- [00:08:49] **🗣 SPEAKER_A**: Okay. Got it. Thank you. So that, I mean, that's how the the clients come into our system. Like I said, obviously, any client that comes in, a contact page is or a contact profile is generated. By going through this workflow, a deal is generated.
- [00:08:57] **👁 Экран**: The presenter resumes screen sharing, showing the same HubSpot workflow diagram. 
  - *Текст на экране*: NYC Application Completed -> Deal Creation -> Claim Lead E...
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0036.jpg)
- [00:08:57] **🖱 UI-Действие**: Taylor resumes sharing her screen.
  - *Результат*: The HubSpot workflow diagram is displayed again.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0036.jpg)

### [00:09:00]
- [00:09:06] **🖱 UI-Действие**: Eugene asks Taylor to scroll down, and she complies.
  - *Результат*: The view of the workflow diagram moves downwards.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0037.jpg)
- [00:09:08] **🗣 SPEAKER_A**: Um, now, a deal is only active for 7 days like as in if they reapply, a second deal can be made, right? So two uh deals might be associated with one contact and it's because during the first seven days, they weren't closed and maybe they reapplied.
- [00:09:42] **👁 Экран**: The presenter zooms in on the complex workflow, showing dozens of interconnected nodes representing different actions and conditions. 
  - *Текст на экране*: 4d. Delay, 1h. Create task, 1a. Branch, 2. Add record
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0039.jpg)

### [00:10:00]
- [00:10:00] **🗣 SPEAKER_A**: of this funnel means what exactly? What happens after that?
- [00:10:01] **👁 Экран**: A workflow diagram is displayed on the screen. The title is 'NYC Application Completed -> Deal Creation -> Claim Lead E...'. Taylor's cursor is near the final 'Delay' step of a workflow branch. 
  - *Текст на экране*: NYC Application Completed -> Deal Creation -> Claim Lead
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0041.jpg)
- [00:10:06] **🗣 SPEAKER_B**: After the delay?
- [00:10:08] **🗣 SPEAKER_A**: Um, other than that, that's how they enter the system. There are other things aside from that, but I don't know if you need anything else other than that at this moment. I think we can can move forward and then dig into details.
- [00:10:08] **🗣 SPEAKER_A**: Yep.
- [00:10:08] **🗣 SPEAKER_B**: Yeah.
- [00:10:09] **🗣 SPEAKER_B**: Yeah. So when they hit the end of the workflow, they're released from the workflow. Um, and all this means is that if they are to reapply after the seven days, um, they will then re-enter this workflow.
- [00:10:22] **🗣 SPEAKER_B**: This allows for people to kind of live in a stasis of like uh pending deal uh for seven days.
- [00:10:23] **🖱 UI-Действие**: Taylor clicks on a 'Delay' step in the workflow diagram.
  - *Результат*: A side panel opens, showing the details of the 7-day delay.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0042.jpg)
- [00:10:26] **🗣 SPEAKER_B**: Cool. Actually, can can you can you put it back on the screen?
- [00:10:26] **🖱 UI-Действие**: Taylor clicks the 'Contacts in action' tab in the side panel.
  - *Результат*: The panel displays a list of contacts currently in that delay step.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0042.jpg)
- [00:10:32] **🗣 SPEAKER_A**: Uh so the end of this workflow means the successful deal or unsuccessful deal?
- [00:10:34] **🗣 SPEAKER_A**: Yeah, one second.
- [00:10:37] **🗣 SPEAKER_B**: Does it depends.
- [00:10:40] **🗣 SPEAKER_A**: Depends.
- [00:10:40] **🗣 SPEAKER_B**: Yeah.
- [00:10:41] **🗣 SPEAKER_A**: So what happens if it's successful?
- [00:10:44] **🗣 SPEAKER_B**: Then the client is marked one and the deal is now completed. It's in our our PMS.
- [00:10:53] **🗣 SPEAKER_A**: in uh Neevo, right?
- [00:10:56] **🗣 SPEAKER_B**: Yeah.
- [00:10:57] **🗣 SPEAKER_A**: So from there you finish the application, right?

### [00:11:00]
- [00:11:39] **🗣 SPEAKER_B**: Can you see it? Yeah.
- [00:11:41] **🗣 SPEAKER_B**: So, um can you scroll down a little bit?
- [00:11:44] **🗣 SPEAKER_B**: So, I would consider a deal one once the contract is signed.
- [00:11:49] **🗣 SPEAKER_B**: Okay. So, the branch on the right, this is an alternative path, right?
- [00:11:51] **🗣 SPEAKER_B**: Application should be happening within the seven days.
- [00:11:55] **🗣 SPEAKER_A**: Yeah. Um, uh, you mean this one, right?
- [00:11:58] **🗣 SPEAKER_A**: And where is the contract in this workflow or is it not here?

### [00:12:00]
- [00:12:00] **🗣 SPEAKER_B**: Branch 30 yeah, not not met.
- [00:12:04] **🗣 SPEAKER_A**: Yeah. So this is for long term. So the check here is check if it's like three to five months. Um, if it's three to five months, it goes down the short-term branch. If it's longer than that, we consider it a long-term, longer term deal and it goes down this branch.
- [00:12:04] **🗣 SPEAKER_B**: It's in Neevo. okay.
- [00:12:06] **🗣 SPEAKER_A**: Got it.
- [00:12:07] **🗣 SPEAKER_A**: So it's just um if if we try to summarize this workflow is from where to where?
- [00:12:16] **🗣 SPEAKER_B**: This workflow is from website interest form, I'm going to say instead of application because I feel like that can be confusing.
- [00:12:21] **🗣 SPEAKER_A**: The branches is generally the same. Um, but by separating it, it allows our distribution system a little bit more time to have the rules met within the system to give it to the proper agents.
- [00:12:27] **🗣 SPEAKER_B**: Um, so let's say website interest form to hopefully contract sign, but not always. Sometimes a lead just takes longer to close.
- [00:12:27] **🖱 UI-Действие**: Taylor navigates from the workflow diagram back to the main 'Workflows' list.
  - *Результат*: A table of all workflows is displayed.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0050.jpg)
- [00:12:29] **👁 Экран**: Taylor closes the workflow view and navigates to the 'Automation' -> 'Workflows' list within what appears to be HubSpot CRM. 
  - *Текст на экране*: Automation
Workflows
NYC Application Completed -> Deal Creation
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0050.jpg)
- [00:12:35] **🖱 UI-Действие**: Taylor uses the main navigation menu to go to 'CRM' -> 'Contacts'.
  - *Результат*: The 'Contacts' list view loads.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0051.jpg)
- [00:12:38] **🗣 SPEAKER_B**: Um, so it could be till application, it could be till being marked lost. Um, this is just the very entry point of our sales funnel.
- [00:12:38] **👁 Экран**: Taylor navigates to the 'Contacts' list view in HubSpot, showing a table of contacts with columns for Name, Create Date, Email, etc. 
  - *Текст на экране*: Contacts
All contacts
Name
Create Date (EST)
Email
Phone Number
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0051.jpg)
- [00:12:51] **🖱 UI-Действие**: Taylor clicks on the contact named 'Claire Giles'.
  - *Результат*: The detailed contact record for Claire Giles opens.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0052.jpg)
- [00:12:55] **👁 Экран**: Taylor opens the contact record for 'Claire Giles'. The screen shows the contact's activity timeline, contact details, and associated deals. 
  - *Текст на экране*: Claire Gilles
Activities
Deals (1)
Claire GilesNYC Coliving
Deal Stage: Application Filed
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0052.jpg)

### [00:13:00]
- [00:13:28] **🗣 SPEAKER_A**: Okay.
- [00:13:31] **🗣 SPEAKER_A**: Okay. Good. Uh, can we talk about what happens after that?
- [00:13:38] **🗣 SPEAKER_B**: Yeah. Yeah. So after that, there's a couple ways this might happen. Um, let me just pull up a contact.
- [00:13:56] **🗣 SPEAKER_B**: Um, let me get one that's like been around for a second. So hold on. Preferably not one that was just created. Um Here we go. Uh, this was earlier today but it should still apply.

### [00:14:00]
- [00:14:15] **🗣 SPEAKER_B**: Um, so this is Ashley. Um, Ashley received this lead at, you know, 1:35 p.m. Um, her, she is one of the agents who has a uh a text that goes out. This is, it's formatted funny, but this is the text that goes out.

### [00:15:00]
- [00:15:00] **🗣 SPEAKER_A**: you know, she's already asked me about this client and this particular house, so we'll see what she does there.
- [00:15:06] **🗣 SPEAKER_A**: Um, but that being said, after that, she could send an offer email.
- [00:15:13] **🗣 SPEAKER_A**: Um, she could try a couple more times to reach the lead before she sends that offer email. Um, which she probably wouldn't just because we already have Lexington house here and I know it's available.
- [00:15:17] **🗣 SPEAKER_B**: Um, she always asks a few clarifying questions.
- [00:15:22] **🗣 SPEAKER_B**: Um, she always refers back to the initial application. Um, you know, this is what you said your budget is, can I know if this is flexible? You also selected this date range, like let me know if you have, like keep in mind 12 months gets you a better rate. Um, and then is there a specific location you're looking to be near, like a commute time?
- [00:15:25] **🗣 SPEAKER_A**: And then the last thing, say she sends an offer email, they don't respond, or maybe she tries calling them a couple times and they don't respond.
- [00:15:26] **👁 Экран**: User clicks the 'Emails' tab within the contact activity view. 
  - *Текст на экране*: Activity, Notes, Emails, Calls, Tasks, Meetings
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0062.jpg)
- [00:15:26] **🖱 UI-Действие**: Clicked on 'Emails' tab in the contact record.
  - *Результат*: Email logging/composition interface is displayed.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0062.jpg)
- [00:15:33] **🗣 SPEAKER_A**: Um, most likely she would put them in an email sequence.
- [00:15:35] **👁 Экран**: User clicks the 'Create email' button. 
  - *Текст на экране*: Create email
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0063.jpg)
- [00:15:35] **🖱 UI-Действие**: Clicked 'Create email' button.
  - *Результат*: An email composition pop-up window appears.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0063.jpg)
- [00:15:37] **🗣 SPEAKER_A**: Um, now, let's see if my access is correct here. It should be.
- [00:15:40] **👁 Экран**: Within the email composition window, user clicks on the 'Sequences' tab. 
  - *Текст на экране*: Templates, Sequences, Documents, Meetings, Quotes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0063.jpg)
- [00:15:40] **🖱 UI-Действие**: Clicked on 'Sequences' tab within the email pop-up.
  - *Результат*: A modal window 'Select sequence' opens.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0063.jpg)
- [00:15:42] **👁 Экран**: A 'Select sequence' modal window appears, listing various available email sequences. 
  - *Текст на экране*: Select sequence, Search sequences, 2025 Offer Sequence, 2nd try Nyc
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0063.jpg)
- [00:15:43] **🗣 SPEAKER_A**: Uh, we have a couple sequences. This is one of the main ones from 2025.
- [00:15:44] **🗣 SPEAKER_B**: Um looks like Claire has not yet answered that which is fine, but in fact she is shopping around and she has now even submitted another form on our website, which is why we have that delay. Agents or uh clients will fill out seven forms within the same hour and then it was getting redistributed to like seven different agents. Um, this allows for it to kind of live in one place for a short amount of time.
- [00:15:49] **🗣 SPEAKER_A**: Um, this is something we are looking to revamp, but uh, just for argument's sake, I'm going to pull it up.
- [00:15:50] **🖱 UI-Действие**: Selected the '2025 Offer Sequence'.
  - *Результат*: The details and steps of the '2025 Offer Sequence' are displayed in a modal window.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0064.jpg)
- [00:15:52] **👁 Экран**: User selects the '2025 Offer Sequence' and a new modal window opens, showing the steps of this specific sequence. 
  - *Текст на экране*: 1. AUTOMATED EMAIL, 2. AUTOMATED EMAIL, 3. AUTOMATED EMAIL, ... 7. CREATE TASK
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0064.jpg)
- [00:15:57] **🗣 SPEAKER_A**: Um, and this is a range of seven days worth of automated activity, um, for like clients that are not like really being responsive. Um, so they could skip this step if they wanted, if they've already sent out that offer, or they could just send it again as another follow-up.

### [00:16:00]
- [00:16:48] **🗣 SPEAKER_A**: They can always edit these accordingly in here. Um, they would pull the offer from Nebo itself.
- [00:16:57] **🗣 SPEAKER_B**: So this text message was sent at 1:35, so about 30 minutes ago, Ashley will probably come back a little later and send a formal offer, which is why this is not moved over yet.

### [00:17:00]
- [00:17:02] **🗣 SPEAKER_A**: Um, then a day later, another email goes out, uh, asks for them to book a call if they're interested or maybe secure their spot.
- [00:17:11] **🗣 SPEAKER_B**: Um she could have gone in and gone first contact attempt, but like it's automated. So she probably just doesn't really see that as a real first attempt. Um so she'll move over the deal stage as it comes through.
- [00:17:11] **🗣 SPEAKER_A**: Another day after, um, like is a little bit of a FOMO attempt.
- [00:17:19] **🗣 SPEAKER_A**: Um, then, you know, I haven't heard back, just want to check in.
- [00:17:24] **🗣 SPEAKER_A**: And so this goes on for about seven days and it ends in a final task that is mark uh, call and then mark lead one or lost.
- [00:17:25] **👁 Экран**: The user has scrolled to the bottom of the sequence, showing the final step which is a task. 
  - *Текст на экране*: 7. Create Task - Day 7. Task title: Final call & Mark Lead Won / Lost
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0070.jpg)
- [00:17:31] **🗣 SPEAKER_B**: Now, this is Ashley, again, she has her automated workflow. Um, my guess is she will try to either call them or she might just send an offer directly for uh Lexington House because that's what they requested. Actually, I do.
- [00:17:33] **🗣 SPEAKER_A**: Um, so this is one of the options. If the client responds back within that time, it breaks the workflow or breaks, sorry, breaks the sequence uh of emails so that it doesn't keep going and then the agent can continue with the re-engaged lead. Um, alternatively, if the client calls them or if the agent like calls them and they answer and they have a conversation, they can unenroll the client from the workflow.
- [00:17:33] **🖱 UI-Действие**: Clicked 'Cancel' on the sequence modal.
  - *Результат*: The modal window closes, returning to the email composition pop-up.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0071.jpg)

### [00:18:00]
- [00:18:36] **👁 Экран**: User closes the sequence modal and is back on the contact record's 'Emails' tab. 
  - *Текст на экране*: Send emails to contact from this record. Or, log emails in HubSpot from your email client.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0075.jpg)
- [00:18:36] **🖱 UI-Действие**: Closed the email composition pop-up.
  - *Результат*: Returned to the main contact record view.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0075.jpg)
- [00:18:40] **🗣 SPEAKER_A**: Um, based on that, uh, they'll make a decision if it's one or lost. Sorry, did you have a question?
- [00:18:47] **🗣 SPEAKER_B**: Yeah, yeah, unenrollment goes manually, right? in this case, if they call?
- [00:18:52] **🗣 SPEAKER_A**: Uh, if if the conversation happens over the like they just call and they actually get a hold of them, that would be a manual unenrollment.

### [00:19:00]
- [00:19:01] **🗣 SPEAKER_A**: If they respond back to the email, that will break the en the enrollment.
- [00:19:06] **🗣 SPEAKER_B**: Okay, got it.
- [00:19:07] **🗣 SPEAKER_A**: Um, yeah, so that that would be kind of like a mixture of what a agent might take. Now, we are um, I wouldn't say we put our agents in a specific box. This is what we train them on on the start for like newer agents. As agents grow into their personality as a sales agent, how they do things that that creates different like outcomes, right? Different approaches.

### [00:20:00]
- [00:20:00] **🗣 SPEAKER_B**: Okay. Got it. Thank you.
- [00:20:04] **🗣 SPEAKER_B**: And what cases it's uh it falls down to the call. Can can a lead be closed through email only, for example?
- [00:20:18] **🗣 SPEAKER_A**: Yeah, yeah. It can, it can.
- [00:20:22] **🗣 SPEAKER_A**: But I would say generally, most most people are going to require some sort of phone call or even text, like something that makes them feel like it's a real person. Um, but I mean, yeah, sure, some leads do. Some leads are fine with that sort of
- [00:20:40] **🖱 UI-Действие**: Clicked 'Create Email', then 'Templates', then filtered by an agent named 'Danielle Cerrone'.
  - *Результат*: A list of Danielle's custom email templates is displayed.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0083.jpg)
- [00:20:41] **👁 Экран**: User clicks on the 'Templates' tab in the email composition window and filters by owner 'Danielle Cerrone' to show her custom templates. 
  - *Текст на экране*: Select template, Owner: Danielle Cerrone, Apartment condition, Application Process Breakdown, Client Approved Email
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0083.jpg)
- [00:20:42] **🗣 SPEAKER_B**: What is the main reason uh to call the customer?
- [00:20:47] **🗣 SPEAKER_A**: Um, do you mean in general or like at the end of the workflow?
- [00:20:53] **🗣 SPEAKER_B**: Uh, in general, let's say. We we can talk about uh a couple of them. So at what point and why agent calls the customer?

### [00:21:00]
- [00:21:45] **🗣 SPEAKER_A**: It's just a different form of communication. Sometimes people don't uh some people don't like email, some people don't like text, some people want to talk to that person on the phone as if they're a real person. Um, you have to think like at the end of the day, if you were buying or like renting an apartment, you probably want to know it's a real person renting you that apartment, right? Um, so that I would say that's the biggest reason is like, and also sometimes like when you're emailing back and forth, clients like, they're like, oh, I can answer that email later. When you're on the phone, it's kind of in the moment and the client is a little bit more like captured. Um, so, yeah, it depends. It's just another point of contact.

### [00:22:00]
- [00:22:30] **🗣 SPEAKER_B**: How do you how do they know when it's a good time to call?
- [00:22:35] **🗣 SPEAKER_A**: Oh, they just call. It's always a good time to call.

### [00:23:00]
- [00:23:21] **🗣 SPEAKER_B**: if this customer needs a call.
- [00:23:25] **🗣 SPEAKER_A**: Needs a call?
- [00:23:26] **🗣 SPEAKER_B**: Yeah.
- [00:23:27] **🗣 SPEAKER_A**: Oh, if they're not responding to the email. Like, if they're not responding to an email, they're not responding to a text, then clearly the next step is call or vice versa. Some agents like to call up front, um, just to see if they can capture them and how serious they are.
- [00:23:45] **🗣 SPEAKER_A**: Um, it is a, it is kind of a client's market right now. There's a lot of options on the internet, there's a lot of like things to apply to. Sometimes people don't even know what they've applied to. Like they've applied to 20 different like applications or apartments and like calling them and saying like, hi, like I'm Anastasia from Outpost and you filled out this form for this house, like can bring them back to reality in the big pool of applications they're filling out.

### [00:25:00]
- [00:25:00] **🗣 SPEAKER_B**: Okay. So, but I mean this is this is uh, up to the agent when to call and how to call. Basically there is no uh requirement to call them at some point of time except missing uh missing replies.
- [00:25:00] **🗣 SPEAKER_B**: topic is huge and uh how much leads one uh one employee can uh manage uh in one day, so how it looks like on the practice?
- [00:25:13] **🗣 SPEAKER_A**: Yeah, so we have a capping system. Um, different agents can handle different amounts of leads, right? Um, my highest performers in the high season could probably deal with 90 active leads at a time.
- [00:25:30] **🗣 SPEAKER_B**: What what period of time?
- [00:25:33] **🗣 SPEAKER_A**: Uh, May to September around those those months.
- [00:25:38] **🗣 SPEAKER_B**: 19 at a time. Is it a
- [00:25:41] **🗣 SPEAKER_A**: 90. like 90.
- [00:25:45] **🗣 SPEAKER_B**: Okay. For for the what period of time they are active for them?
- [00:25:52] **🗣 SPEAKER_A**: It depends. Yeah, yeah, yeah. So as soon as an agent is at like other agents they only get like 30 leads at a time, you know, like it depends on the caliber of the agent. Um, this is something we set up through our distribution platform.

### [00:26:00]
- [00:26:49] **🗣 SPEAKER_B**: My question is what what does it mean active at a time?
- [00:26:56] **🗣 SPEAKER_A**: So active is new leads. Like new leads that have come in. Um, so for instance, what happens is like usually within, I have it as a permanent window that causes them to have to go through their leads and clear out their pipeline if needed. But an agent can't hold ownership of more than X amount of leads at any given time

### [00:27:00]
- [00:27:00] **👁 Экран**: The presenter is showing a contact page for 'Care Giles' within a CRM, likely HubSpot. The main panel shows contact activity, while the right sidebar displays associated Companies, Deals, and Tickets. 
  - *Текст на экране*: Care Giles
Contacts
Activity
Notes
Emails
Calls
Tasks
Meetings
Companies
Deals
Claire GilesNYC Coliving
Deal Stage: Application Titled
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0109.jpg)
- [00:27:22] **🗣 SPEAKER_A**: in the status of either sorry, I have to pull it up here. Uh, application filed, uh, offer sent or cool lead. Like any of these, any of these stages, they can only have a certain amount of leads in those stages.
- [00:27:47] **🖱 UI-Действие**: Presenter clicks the 'Deal Stage' dropdown menu for the 'Claire GilesNYC Coliving' deal.
  - *Результат*: A dropdown list appears, showing various deal stages like 'Application filed', 'Offer Sent', 'Closed won', etc.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0112.jpg)
- [00:27:49] **👁 Экран**: The presenter has clicked on the 'Deal Stage' dropdown menu within the 'Deals' section. A list of possible deal stages is now visible. 
  - *Текст на экране*: Deal Stage: Application Titled
Application filed
First Contact Attempt
Offer Sent
Cool Lead (make a note for in the...)
Closed won (Contract signed in...)
Closed lost
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0112.jpg)

### [00:28:00]
- [00:28:25] **🗣 SPEAKER_A**: Um, once, you know, they're marked as closed one, they remove from their cap. Like the lead is one, it is good, we're fine. As soon as they're marked as closed lost, they're giving up the right to have that lead. They've decided that it's lost and it removes from their cap. So they can have never have more than X amount, again, every agent is different. So X amount of active leads at a time.
- [00:28:56] **🗣 SPEAKER_C**: Okay, and uh a bit more about the daily routine. So, how much usually uh how much usually emails or, I don't know, interaction you do per day? How much how much leads you contacting uh in one day?

### [00:29:00]
- [00:29:14] **🗣 SPEAKER_A**: Yeah, that depends on the agent and what the day looks like. I mean, like, uh, right now, give me a second.
- [00:29:59] **👁 Экран**: The presenter navigates the main left-side menu of the CRM, expanding the 'Marketing' section. 
  - *Текст на экране*: CRM
Contacts
Companies
Deals
Marketing
Campaigns
Email
Social
Ads
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0120.jpg)

### [00:30:00]
- [00:30:00] **🗣 SPEAKER_A**: My agents are all commission agents, they're not salaried. So they don't sit in front of a computer all day.
- [00:30:02] **🖱 UI-Действие**: Presenter clicks the 'Contacts' icon in the main left navigation, then clicks on 'Marketing'.
  - *Результат*: The main navigation menu expands to show different CRM modules, and then the 'Marketing' submenu is displayed.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0121.jpg)
- [00:30:08] **🗣 SPEAKER_B**: Let's let's also take sort of a an average average agent, uh, like 30, 40 leads. So this person, how much interactions with the customers they have daily? Like roughly.
- [00:30:08] **🗣 SPEAKER_A**: You know, they're out, they're doing tours, they're like doing other things. Um, June has set schedules, salaried agents or like they make some sort of minimum um and right now work on a schedule.
- [00:30:15] **🖱 UI-Действие**: Presenter clicks on 'Contacts' in the 'CRM' submenu.
  - *Результат*: The view returns to the contact page for 'Care Giles'.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0122.jpg)
- [00:30:26] **🗣 SPEAKER_B**: Okay. And uh what is the um what is the average traffic per month uh your team can uh handle?
- [00:30:27] **🗣 SPEAKER_A**: I mean, if the the again, you're asking a question like that's really dependent on like, is the person responding, right? Um, if they're responding, they could have like 200 points of contact that day because they're talking to all their lead like base level leads as well as like having a conversation back and forth with someone, right?
- [00:30:37] **🗣 SPEAKER_A**: This is more of a marketing question. Uh like I don't have that data on hand.
- [00:30:43] **🗣 SPEAKER_C**: when he says traffic, he means that how many leads process monthly.
- [00:30:51] **🗣 SPEAKER_D**: Yeah guys, I shared with you uh so dashboard, uh I can make a screenshot a bit later because uh I'm now heading to the school uh to pick up my children.
- [00:30:52] **🗣 SPEAKER_A**: Um, or maybe it's really slow. Maybe they only got two leads today. They're going through like their 30 leads and maybe they only have like 40 points of contact that day. Like it's data I would have to pull. Um, but again, I can't pull all of it because a lot of agents will work on personal phone numbers, which are not attached to our CRM.

### [00:31:00]
- [00:31:03] **🗣 SPEAKER_D**: and but it's less, it's less than so every week we have about I don't know, so five-digit number of leads on June's side and four number uh leads on our side. I don't remember exactly.
- [00:31:17] **🗣 SPEAKER_A**: I can give you like the current month, like
- [00:31:21] **🗣 SPEAKER_C**: Yeah, that would be great.
- [00:31:23] **🗣 SPEAKER_A**: Um, in the last 30 days, we have I double check this is 30 days. Hold on. Yeah. In the last 30 days, I have about 1500 uh like applicants in our system.
- [00:31:40] **🗣 SPEAKER_A**: Like, sorry, leads that have come in. I shouldn't say applicants that says Yeah. Applicants less. Yeah. if we would have 1500 applicants.
- [00:31:52] **🗣 SPEAKER_A**: Well, they apply on our website is kind of what I mean. We call them applications. So, um but I guess lead interest forms.
- [00:31:57] **🗣 SPEAKER_C**: Okay, and uh how much agents uh works in your department in same time?
- [00:31:58] **🗣 SPEAKER_C**: Okay. Got it.

### [00:32:00]
- [00:32:00] **🗣 SPEAKER_B**: Okay.
- [00:32:01] **🗣 SPEAKER_B**: I have uh a few more questions. So, uh, let's talk about the quality of uh this uh management uh on this list. So, uh, do you have enough of time and people in general or tools or something to manage all these uh leads together or you have some uh lost leads because you don't have enough time or you maybe don't have enough time to uh follow up them or something. What is the tightest uh place in this process?
- [00:32:03] **🗣 SPEAKER_A**: You mean schedule wise?
- [00:32:06] **🗣 SPEAKER_C**: No, no, I mean how much people uh work in this uh all these
- [00:32:11] **🗣 SPEAKER_A**: So mine, my uh my team is made up of nine agents.
- [00:32:16] **🗣 SPEAKER_A**: Uh Mike, do you know the number of theirs?
- [00:32:20] **🗣 SPEAKER_A**: In New York, I think it's six for June.
- [00:32:25] **🗣 SPEAKER_D**: Uh, it's uh it's probably seven.
- [00:32:28] **🗣 SPEAKER_A**: Okay.
- [00:32:29] **🗣 SPEAKER_D**: Yeah, seven.
- [00:32:35] **🗣 SPEAKER_A**: Also something I don't know if it matters, but I think it's relevant probably.

### [00:33:00]
- [00:33:33] **🗣 SPEAKER_C**: Yeah, any bottlenecks.
- [00:33:35] **🗣 SPEAKER_A**: Yeah, so I wouldn't actually say I have any issues with like amount of agents.
- [00:33:41] **🗣 SPEAKER_A**: Um, I would say the biggest bottleneck is shoppers. Like people who aren't really serious yet, which means they require like a lot more like longevity followups. Does that make sense?

### [00:34:00]
- [00:34:03] **🗣 SPEAKER_A**: Um, that an agent might be like, hey, like, I have this for the summer, are you ready to book? And they're like, no, I'm gonna keep looking around. and like an agent would be like, okay, well, let me know when you're ready. They would probably mark them as lost. Doesn't mean they can't reapply or doesn't mean they might not come back to that, but they're not going to like put all of their energy into that person because it's a cool lead now. So I would say the cool leads is our biggest bottleneck and like where we could really improve.

### [00:35:00]
- [00:35:00] **🗣 SPEAKER_A**: Uh, we do it through Nebo, if anything. Um, so, but again,
- [00:35:14] **🗣 SPEAKER_A**: we know what is converting, um, like at the end point, right? So, um, yes, a lot of leads come in this way. Yes, like, you know, this is the start of that workflow. But what I'm actually concerned about is how many people are making it into our PMS, as in they've said, I'm ready to book. Um, and how many of those are actually being converted?
- [00:35:39] **🗣 SPEAKER_B**: What is this metric when they say, yes, I'm ready to book?
- [00:35:43] **🗣 SPEAKER_A**: Say again? What is this uh metric uh when a person... Uh, I would call that an actual application.
- [00:35:51] **🗣 SPEAKER_B**: Okay.
- [00:35:52] **🗣 SPEAKER_A**: So, um, it would be application to closure.
- [00:35:57] **🗣 SPEAKER_A**: That's... 
- [00:35:58] **🗣 SPEAKER_B**: So basically lead to application rate and application to closure.

### [00:36:00]
- [00:36:43] **🗣 SPEAKER_A**: Yeah.
- [00:36:50] **🗣 SPEAKER_C**: Taylor, do you track it for each individual agent, uh, or it's just in general for for the whole team?
- [00:36:57] **🗣 SPEAKER_A**: Uh, we we have it for each individual agent as well in uh Nebo.

### [00:37:00]
- [00:37:03] **🗣 SPEAKER_C**: Aha, okay.
- [00:37:05] **🗣 SPEAKER_B**: So it's total and per agent, right?
- [00:37:09] **🗣 SPEAKER_A**: Mhm.
- [00:37:11] **🗣 SPEAKER_B**: So it's basically three main or two main metrics you track. Uh, from lead to application rate and from application to closure, right?
- [00:37:22] **🗣 SPEAKER_A**: Mhm.
- [00:37:23] **🗣 SPEAKER_B**: Anything else?
- [00:37:25] **🗣 SPEAKER_A**: No, not at the moment. Again, uh, you're... there, I wouldn't say they're metrics, it's just things we notice. We're dealing with commission agents. There's only so much you can force them to do.
- [00:37:30] **👁 Экран**: The screen shows a contact profile for 'Claire Giles' in a CRM system, likely HubSpot. The right sidebar shows an associated deal named 'Claire Giles NYC Coliving' with the stage 'Application filled'. The left sidebar displays various contact properties such as budget, desired move-in date, and neighborhood preferences. 
  - *Текст на экране*: Contacts
Claire Giles
Create activity
Overview
Activities
Collapse all
Activity Notes Emails Calls Tasks Meetings
Thread email replies
Log email
Create Email
Deals (1)
Claire Giles NYC Coliving
Deal Stage: Application filled
Contact Type: Broker
Service Type (Deal): Add
Tickets (0)
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0151.jpg)

### [00:38:00]
- [00:38:22] **🗣 SPEAKER_A**: On like maybe, we used to try to track uh points of contact, um, but to be honest, like because agents are using personal numbers, it's like impossible to track.
- [00:38:43] **🗣 SPEAKER_B**: Mhm. Um, what else do we used to track? Um, well let me help you um, to come come to this from the from a different perspective. What's your primary KPI as a as a manager?
- [00:38:56] **🗣 SPEAKER_A**: But that's what I'm saying, it's conversion. Like, am I making bookings? Total revenue brought in.

### [00:39:00]
- [00:39:02] **🗣 SPEAKER_B**: Total revenue and conversion rate, right?
- [00:39:05] **🗣 SPEAKER_A**: Yeah.
- [00:39:10] **🗣 SPEAKER_C**: Taylor, I have two questions, uh, if you let me uh, to step in. So what what is the rationale uh to let agents using their own phones? Why we cannot uh, so be more strict and just say here's the only way to communicate with Outpost customers?

### [00:40:00]
- [00:40:00] **🗣 Eugene Tymchyshyn**: Um so now let let's get back to the problems and uh challenges and connection. So basically, you track uh conversion rate which basically proportionally impacts the amount of total revenue you bring. Uh what are the biggest challenges or problems to make it higher?
- [00:40:00] **👁 Экран**: The screen shows a contact profile for 'Claire Giles' within a CRM system, likely HubSpot. The main view is on the 'Emails' tab of the activity timeline. The right sidebar displays associated records, including a deal named 'Claire Giles NYC Coliving'. The screen remains static throughout the segment. 
  - *Текст на экране*: Contacts > Claire Giles
Actions
Overview
Activities
Customize
Collapse all
Activity Notes Emails Calls Tasks Meetings
Thread email replies
Log Email
Create Email
Deals (1)
Claire Giles NYC Coliving
Deal Stage: Application Filled
Contact Type: Broker
View all associated Deals (1)
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0161.jpg)
- [00:40:11] **🗣 SPEAKER_A**: That would be like telling my best brokerage salesperson to not do her job. Like why? Why? What's the problem?
- [00:40:20] **🗣 SPEAKER_A**: Because they're always on the move. If they're showing a million different apartments, they don't have their their laptop on them if they're like...
- [00:40:23] **🗣 Mike Grishchenko**: Guys, and I have to drop to switch on another call. Thank you, Taylor. Thank you, guys. See you.
- [00:40:28] **🗣 SPEAKER_C**: Yeah but we have Ringostat and so some mobile solutions that...
- [00:40:28] **🗣 Eugene Tymchyshyn**: Thank you.
- [00:40:29] **🗣 Taylor Post**: Thank you.
- [00:40:33] **🗣 SPEAKER_A**: Ringostat is not the same thing.
- [00:40:33] **🗣 Taylor Post**: for the agents, unqualified leads.
- [00:40:36] **🗣 SPEAKER_C**: Why?
- [00:40:37] **🗣 SPEAKER_A**: It's I'm just telling you, it's not. Like they... Ringostat A, only three agents Jack has brought on to that. Um, B is they again still now they have a separate app that they need to be tracking as opposed to just their phone numbers.
- [00:40:41] **🗣 Taylor Post**: Like quite frankly, like leads that don't fill out all of the information. Like, but like though the thing is is a lead that's not filling out all the information is usually not that serious. You know what I mean? But it is a waste of their energy to have to figure out if they're not serious. They don't really mind it, but like, you know, ideally they have more quality leads.
- [00:40:56] **🗣 SPEAKER_A**: Like, also, I mean, the alternative, yeah, sure, make them do it. They don't do it. And then what? Like, it's different with a commissioned agent. And also, you can't argue with their conversion.

### [00:41:00]
- [00:41:52] **🗣 Taylor Post**: Um, another is probably, uh, current tenants not letting us know if they're going to extend, so they don't know if something's available. Does that make sense? Um, so availability, like pain points, like what is actually happening.
- [00:41:55] **🗣 SPEAKER_C**: But if you you you said that you can track conversion separately for each agent and if you see that one agent convert deals much better than another, uh does it influence on the distribution uh system?

### [00:42:00]
- [00:42:00] **👁 Экран**: The screen displays a contact record for 'Claire Giles' within a CRM, likely HubSpot. The view remains static throughout the segment. 
  - *Текст на экране*: Contacts, Claire Giles, Overview, Activities, Intelligence, Companies, Deals, Tickets, Workflow memberships, Send emails to contact from this record, Create email, The Lefferts House, $1750 - $2500, 2 bed, 1 bath
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0169.jpg)
- [00:42:11] **🗣 SPEAKER_A**: Of course. We do this exercise at least like twice monthly.
- [00:42:16] **🗣 SPEAKER_C**: And based on their previous uh two weeks uh performance, they getting more or less leads, right?
- [00:42:23] **🗣 SPEAKER_A**: Yeah, or just general performance. Like if I'm reaching out to an agent and they're taking a long time to get back to me, I assume they're also doing that to clients. I will drop their distribution.
- [00:42:32] **🗣 Taylor Post**: Pricing maybe, but like we're very flexible. It's kind of just again, this goes back to the quality of the client, like the client doesn't want to pay that price. There's only so much you can do.
- [00:42:35] **🗣 SPEAKER_C**: Uhhuh, okay.
- [00:42:36] **🗣 SPEAKER_A**: Yeah. Okay. Thank you.

### [00:43:00]
- [00:43:26] **🗣 Taylor Post**: Right now moving dates, like uh a moving date too far in the future, there's only so much you can do. Like you can offer it but there's so much time that they're still looking around. Um I would say also the market generally right now, like consumers in the rental market or at least our style of rentals, um they work very close to the bell, almost like they're booking an Airbnb booking. Does that make sense? Where they're like, I'll do it the day before. And then they expect like immediate like moving. which they can do, it's fine. Um but it just makes it really unpredictable um as they go along.

### [00:44:00]
- [00:44:14] **🗣 Alexander Sur...**: I have one more question to this topic. So, uh, let's imagine you right now have some conversion rate. I I don't know exactly what number, but uh what is your like personal feeling, what is the uh like perfect conversion rate in the perfect world for you?

### [00:45:00]
- [00:45:00] **🗣 Taylor Post**: excuse the actual results. Or someone apply or if you wanted to take it from deal instead. Um, maybe someone applies seven times and now they have seven deals. This is one person's application, but now they're counting as seven. You know what I mean?
- [00:45:00] **👁 Экран**: The screen shows a CRM interface, likely HubSpot, displaying the contact record for 'Claire Giles'. The main panel is on the 'Activities' tab, and on the right sidebar, associated 'Deals' are visible, including one named 'Claire GilesNYC Solving'. 
  - *Текст на экране*: Contacts
Claire Giles
Create activity
Overview
Activities
Intelligence
Deals (1)
Claire GilesNYC Solving
Deal Stage: Application Filled
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0181.jpg)
- [00:45:16] **🗣 Eugene Tymch...**: Yep.
- [00:45:17] **🗣 Taylor Post**: So that connection is I can pull general numbers, um, but I wouldn't say they are law. Um, and you need to drill down to see what's happening actually with those leads. Like were they all marked lost because no one responded, okay? Did they actually do their work? You know, there's there's a lot of questions.
- [00:45:19] **🗣 Taylor Post**: Um, I mean, obviously I would say 100%, but like
- [00:45:26] **🗣 Alexander Sur...**: Yeah, but I'm saying if, for example, you have uh all your sales work every day, like and every night, so you don't have some frames what you have right now. So what is the possible, the most like biggest conversion rate that the this uh this industry can bring us?
- [00:45:38] **🗣 Eugene Tymch...**: Right, right.
- [00:45:39] **🗣 Taylor Post**: Um, back to your question about like in an ideal world. Um, in our highest season the last year, uh, I say that with a grain of salt, like sometimes, you know, um, sometimes it is, it varies, but like I have an agent at a 40% conversion, an agent at a 47% conversion. Um, and those agents submitted a lot of applications. It's not like they submitted two and then, you know, only one converted. It's like they submitted 43 applications and, you know, uh, got 20 deals out of it. Or 21 deals.
- [00:45:50] **🗣 Taylor Post**: Yeah, I mean, let me I just want to look at actual data. Let me go to a higher month.
- [00:45:59] **🗣 Eugene Tymchyshyn**: And quick question uh about the conversion rate itself. Just to clarify, do you track the conversion rate from lead to closure or is only from from application to closure?

### [00:46:00]
- [00:46:55] **🗣 Taylor Post**: Um I I track from application to closure mostly, just because it's what it's available to me.

### [00:47:00]
- [00:47:04] **🗣 Taylor Post**: Um, but I will say we've pulled the data in the past. The problem is the connection between CRM and Nebo is a little off. So, um, the CRM, like for instance, we get a bunch of copies from apartments.com, but these leads are distributed, right? So like it counts as a contact in our system, but it's not an actual lead, it's like a spam lead, you know?
- [00:47:11] **🗣 Eugene Tymch...**: And what's the average conversion rate?
- [00:47:14] **🗣 Taylor Post**: I would I would say any uh, you know, I can I can tell you actually, give me a sec. I'm just going to do it year to date if you don't mind.
- [00:47:30] **🗣 Eugene Tymch...**: Mhm.
- [00:47:31] **🗣 Taylor Post**: one Yeah, I would say 25%. It's actually 24.92, but...

### [00:48:00]
- [00:48:40] **🗣 Eugene Tymch...**: Okay.
- [00:48:46] **🗣 Alexander Sur...**: And what is the what is the dream average uh conversion rate?
- [00:48:52] **🗣 Taylor Post**: Honestly, if I could get them up to like 33%, I would be very happy. Does that make sense?

### [00:49:00]
- [00:49:03] **🗣 Alexander Sur...**: Yeah, yeah, it's super super important. And uh how how do you feel uh is this is it real to build such systems that we can bring this conversion rate?
- [00:49:19] **🗣 Taylor Post**: Um, hypothetically, someone who knows how to only send very qualified files through could get a really good conversion rate, right? Sometimes we're in a season of like, let's throw it against the wall and hope it sticks, you know what I mean?

### [00:50:00]
- [00:50:00] **🗣 SPEAKER_B**: cost for those agents for for your agents team, except paying them fees?
- [00:50:06] **🗣 SPEAKER_A**: The only other cost would be our their seat, their sales professional seat, which it is a cost, but we're always under the amount that we need. Like I remove people from the system and then I add someone new. It's kind of a rotating, always one less than I need type of seat. Um, so sometimes I don't have a seat because I give it to the agent. Um, so it just depends. This is an operational cost as well, obviously. Um, so is email domains, so is uh, um, like we have those automated numbers, um, and uh, those cost money. Um, but on the scope of like a salary versus that, it's nominal.
- [00:50:15] **👁 Экран**: The screen shows a contact record for 'Claire Giles' in HubSpot. The main view is on the 'Activities' tab, specifically for 'Notes'. The right sidebar displays associated 'Deals', including one named 'Claire Giles NYC Coliving'. The presenter is not interacting with the interface, only speaking. 
  - *Текст на экране*: Contacts,Claire Giles,Create activity,Overview,Activities,Companies (0),Deals (1),Claire Giles NYC Coliving,Deal Stage: Application Filled,Tickets (0),Workflow memberships (9)
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0202.jpg)
- [00:50:18] **🗣 Eugene Tymch...**: like sometimes you're like, I don't think this is a good file, I don't think they're going to move forward, but I'd rather try than not do it.
- [00:50:25] **🗣 Eugene Tymch...**: Um,
- [00:50:39] **🗣 Eugene Tymch...**: and when you say, uh, it's not a good file, but I'll I'll try, why is that not good?
- [00:50:50] **🗣 Taylor Post**: The credit score is really bad. Or like they're already saying, 'Hey, my credit score is like 600.' Like that's like, it's not a good score. They're probably not a qualified tenant. Or like, 'Hey, I have no funds in my account, but maybe I have this guarantor. Maybe my mom can be my guarantor.' Okay, like, you know, we'll try, but you know, it doesn't sound like it's going to go well.

### [00:51:00]
- [00:51:59] **🗣 Eugene Tymch...**: Mhm.

### [00:52:00]
- [00:52:08] **🗣 Eugene Tymch...**: Okay. So as I understand, it's a two-fold, two-fold metric. There are two, uh, aspects of it. One aspect is basically the performance of the agent, and the other other side is the quality of this, uh, lead. So if the lead is still kind of irrelevant, let's say, uh, but you will still give them the proposal and it will affect the statistics even though you know...
- [00:52:39] **🗣 Taylor Post**: Absolutely.

### [00:55:00]
- [00:55:00] **🗣 SPEAKER_A**: So, to summarize, your main metric is application to closure conversion rate, which is right now is about 25% on average.
- [00:55:13] **🗣 SPEAKER_A**: And, uh, the biggest leverage to improve this
- [00:55:15] **👁 Экран**: The screen displays a contact record for 'Claire Giles' within the HubSpot CRM. The left pane shows contact properties such as 'Borough' (Manhattan) and 'Apartment Needs' (2 bed, 1 bath). The right pane shows associated records, including one deal titled 'Claire Giles/NYC Coliving'. 
  - *Текст на экране*: Contacts
Claire Giles
Create activity
Overview
Activities
Companies (0)
Deals (1)
Claire Giles/NYC Coliving
Deal Stage: Application Filled
Tickets (0)
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0222.jpg)
- [00:55:18] **🗣 SPEAKER_A**: in your opinion is to filter non-qualified, non-active leads.
- [00:55:28] **🗣 SPEAKER_B**: Mhm. Correct.

### [01:00:00]
- [01:00:00] **🗣 Alexander Surmin**: so much, 10 leads, 50 leads, five leads?
- [01:00:00] **👁 Экран**: The screen displays a contact record for 'Claire Giles' within a CRM, likely HubSpot. The 'Activities' tab is selected, showing the 'Emails' section. The right-hand panel shows an associated deal named 'Claire Giles NYC Coliving'. The screen remains static throughout the segment. 
  - *Текст на экране*: Contacts > Claire Giles, Search activities, Thread email replies, Log email, Create email, Companies (0), Deals (1), Claire Giles NYC Coliving, Deal Stage: Application filled
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0241.jpg)
- [01:00:03] **🗣 Taylor Post**: All of them.
- [01:00:04] **🗣 Alexander Surmin**: All of them.
- [01:00:05] **🗣 Alexander Surmin**: And you do this as well?
- [01:00:07] **🗣 Taylor Post**: Me and an admin, yeah.
- [01:00:11] **🗣 Alexander Surmin**: And how how much time you spend for this?
- [01:00:16] **🗣 Taylor Post**: You can see why I'm not trying to do it every month.
- [01:00:20] **🗣 Taylor Post**: I mean, my admin's pretty impressive. She can get through a lot of data. Um, but I would say it takes her, you know, four hours to go through all of that.
- [01:00:33] **🗣 Taylor Post**: Unless all the information is there. If it's there, then it's easy.
- [01:00:38] **🗣 Taylor Post**: But if she's... Four hours uh in which period? Day?
- [01:00:42] **🗣 Taylor Post**: Yeah, usually in a day. She could do it in a day.
- [01:00:44] **🗣 Alexander Surmin**: Okay. Okay.
- [01:00:47] **🗣 Taylor Post**: But if I give it to her at 3:00 p.m., I'll probably get it the next day, but.
- [01:00:52] **🗣 Eugene Tymchyshyn**: So it's uh the prep work. Basically, she goes and collects the data. So after that, you're going to analyze that.
- [01:00:59] **🗣 Eugene Tymchyshyn**: So you're going to spend most probably a couple of days at least to review all 500 leads.

### [01:01:00]
- [01:01:45] **🗣 Taylor Post**: Mhm.
- [01:01:46] **🗣 Taylor Post**: If we have a more specific metric, I can do that, right? If it's like, uh, I only want to look at the ones that were marked closed lost for never responded. Like that's going to be a lower amount of leads, right? Um, so it could be 50 leads, it could be 250 leads, it could be 500 leads. I think probably the last check I did was probably like 250.

### [01:02:00]
- [01:02:16] **🗣 Eugene Tymchyshyn**: Okay.
- [01:02:17] **🗣 Alexander Surmin**: Okay. uh let's imagine you have like super powerful tools that can help you to analyze any count of leads in the minutes. Uh how much time and uh how much money you will save uh in the end if you have such a tool?
- [01:02:37] **🗣 Taylor Post**: I don't know if I could answer that question.

### [01:03:00]
- [01:03:00] **👁 Экран**: A static screen share of a CRM, likely HubSpot, shows the contact record for 'Claire Giles'. The left sidebar lists various contact properties such as 'Borough' (Manhattan) and 'How long do you plan to stay' (Six months). The main panel has tabs for 'Overview', 'Activities', etc. The right panel shows associated records like 'Companies', 'Deals' (one deal named 'Claire Giles NYC Coliving'), and 'Tickets'. 
  - *Текст на экране*: Contacts
Claire Giles
Create activity
Overview
Activities
Intelligence
Customize
Search activities
Activity
Notes
Emails
Calls
Tasks
Meetings
Thread email replies
Log email
Create Email
Companies (0)
Deals (1)
Claire Giles NYC Coliving
Deal Stage: Application Tilled
Tickets (0)
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0253.jpg)
- [01:03:20] **🗣 Taylor Post**: You're taking my time and an admin. Sometimes I'm able to just give it to her and then I quickly review everything, but I'll do the initial data pull. Um, I mean again, she's in the Philippines. It's not like that's the highest salary in the world. Um, so, I mean, yeah, I would save money.
- [01:03:43] **🗣 Taylor Post**: Uh, I know June uses something called Redash. Mhm. Um, I really love it. I would love if our data showed up that way, but it doesn't right now. Um, I would also say there are some question marks in their data that I do like the fact that I can pull actual leads and look at actual profiles, and you can't really do through theirs.

### [01:04:00]
- [01:04:07] **🗣 Eugene Tymchyshyn**: Mhm.
- [01:04:08] **🗣 Alexander Surmin**: Uh I I'm asking because I I want to uh understand, is it uh important uh like uh important thing to for automation or it's still uh not very important and still cheap for you?

### [01:05:00]
- [01:05:39] **🗣 SPEAKER_B**: the work questions
- [01:05:40] **👁 Экран**: The screen switches from a screen share of a HubSpot contact page to a grid view showing the video feeds of four participants: Eugene Tymchenko, Alexander Surmin, Taylor Post, and Oleksii Surnin. 
  - *Текст на экране*: Eugene Tymchenko, Alexander Surmin, Taylor Post, Oleksii Surnin, Recording and taking notes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0263.jpg)
- [01:05:41] **🗣 SPEAKER_B**: and yeah, and we'll we'll wrap up the call.
- [01:05:45] **🗣 SPEAKER_B**: So, what we need to do is to first, if you have guides on how the process works, for example, for a new person that comes on board.
- [01:05:57] **🗣 SPEAKER_B**: Um, do you do you actually have any guides, onboarding files, how how new person should perform, what they should do?

### [01:06:00]
- [01:06:46] **🗣 SPEAKER_A**: Like how like, it depends, like how to send an email.
- [01:06:49] **🗣 SPEAKER_A**: Like yeah, we we have that.
- [01:06:51] **🗣 SPEAKER_A**: Um, it's probably outdated at this point, to be honest. My agents have been with me for a while.
- [01:06:56] **🗣 SPEAKER_A**: Um, but like that document exists in the world.

### [01:07:00]
- [01:07:02] **🗣 SPEAKER_B**: Not on the emails, I mean, but the overall process, how do you close the lead from when it comes, you know, to to the end?
- [01:07:11] **🗣 SPEAKER_A**: Yeah, so again, we have like dealing with them through hubspot and then Jack has a huge FAQ and Nebo of like how to make a booking, how to send this, how to do that. Like that's all that does all exist, yes.
- [01:07:25] **🗣 SPEAKER_B**: Okay.
- [01:07:27] **🗣 SPEAKER_B**: Um, and the second portion of it, we you showed us the high-level funnel as a as a process, uh, in hubspot. Mhm. We didn't touch Nebo today. What we need to see is end-to-end process performed by agent on a daily basis. So, from the point where lead comes to the system and what they do with them. And looking at your process, it's probably going to be a couple of leads on the different stages because there's a delay, um, and yeah, we obviously need to see the full funnel from the, um, just from the very beginning to the closure when it's no longer part of the sales process anymore.

### [01:08:00]
- [01:08:54] **🗣 SPEAKER_B**: Um, so yeah, I will I will send you the write up what exactly we expect, but I need we we need your help, um, to to to to record, uh, video guide how that process is performed basically.

### [01:09:00]
- [01:09:14] **🗣 SPEAKER_A**: Okay.
- [01:09:15] **🗣 SPEAKER_B**: Cool. Thank you so much.
- [01:09:17] **🗣 SPEAKER_B**: So, I will send it to you like today, maybe early tomorrow. Um, and looking for for the guide, um, and FAQ. Um, yeah, as soon as you have time, send it over. Cool. Honestly, what I'll probably just end up doing is doing a uh I'm forgetting the platform. Um, there is a platform that just records your screen step-by-step. Um, is that fine for you guys? Yeah. Okay. Yeah. That's what I'll probably send over then. Uh, what what platform is that? M. One second. I have to have I'm usually used to loom. Yeah, that's it.
- [01:09:49] **👁 Экран**: As participants leave the call, the view changes to a grid of three, then two, before showing a blank screen indicating the meeting has ended for the user. 
  - *Текст на экране*: Alexander Surmin, Taylor Post, Oleksii Surnin, Recording and taking notes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0280.jpg)

### [01:10:00]
- [01:10:00] **👁 Экран**: Стартовый экран инструмента для записи встреч Fathom. На темно-сером фоне отображается текст, информирующий о начале записи. 
  - *Текст на экране*: Recording and taking notes
FATHOM FREE Get your AI Notetaker at fathom.video
Alexander's Fathom Notetaker
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 4 2026/screenshots/screen_0281.jpg)
- [01:10:29] **🗣 SPEAKER_A**: It's not Loom, that's what June uses.
- [01:10:31] **🗣 SPEAKER_A**: Um, that's why I never. Um. Yeah, that if it's if it's kind of the same. It's very similar to Loom. It's uh, if it's going to be a screen recording of each steps, that's that's exactly what we expect.
- [01:10:46] **🗣 SPEAKER_B**: Also, just as a side note, it's going to be very helpful if the person who does that, if you if you do that, uh, please, um, speak on top, uh, like commenting what you do and why you do it. Uh, it it will help us a lot to quickly analyze and break it down. Okay. Yeah, no problem. Okay, cool. Sounds good. Sounds great. Uh, then guidance and the recording and I will send you the write up of what needs to be in there and once we get come up with some ideas, we'll get back to you with clarifying questions and proposals so we can brainstorm about it. Cool. Sounds like a plan, guys. Appreciate it.

### [01:11:00]
- [01:11:52] **🗣 SPEAKER_B**: Thank you. Have a good one. Bye.