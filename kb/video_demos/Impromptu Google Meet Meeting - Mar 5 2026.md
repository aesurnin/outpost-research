---
id: impromptu-google-meet-meeting-mar-5-2026
date: 2026-03-08
type: video_demo
tags: [video, transcription, processed]
participants: ["Andreas Efthymiou / Alexander Surmin / Alexander Surnin / Mike Grishchenko", "Eugene Tymchenko / Alex Patsalo / Andreas Efthymiou", "Alexander Surnin / Eugene Tymchenko / Alexander Surmin / Alex Patsalo / Andreas Efthymiou / Mike Grishchenko", "Andreas Efthymiou", "Alexander Surmin", "Eugene Tymchenko", "Alex Patsalo", "Mike Grishchenko"]
status: processed
---

# Разбор видео: Impromptu Google Meet Meeting - Mar 5 2026

## 🎯 TL;DR (Executive Summary)
Здесь обсуждались процессы и интерфейсы. Разобрано 244 реплик, найдено 36 экранов и 9 UI-действий.

## 📌 Озвученные Бизнес-правила (Business Rules)
- **Правило**: Основной канал продаж — входящие заявки (inbound).
  - *Контекст*: Обсуждение процесса продаж.
- **Правило**: Существует проблема с лидами низкого качества, у которых отсутствуют ключевые данные.
  - *Контекст*: Описание типов лидов.
- **Правило**: К лидам низкого качества относятся те, у которых не указаны даты заезда/выезда или тип жилья (общая комната или целая квартира).
  - *Контекст*: Описание типов лидов.
- **Правило**: Пропущенные звонки автоматически создают 'холодный' лид в системе только с номером телефона, что требует дополнительной обработки.
  - *Контекст*: Описание источников лидов низкого качества.
- **Правило**: Лиды делятся на два основных статуса: 'Details Completed' (полные данные) и 'Lacking Details' (неполные данные).
  - *Контекст*: Описание процесса квалификации лидов.
- **Правило**: 'Details Completed' лиды считаются 'теплыми' и сразу передаются в отдел продаж (Sales Team) для прямой связи.
  - *Контекст*: Описание процесса квалификации лидов.
- **Правило**: Ранее существовала специальная 'Call Team', которая занималась 'прогревом' (nurturing) лидов со статусом 'Lacking Details'.
  - *Контекст*: Описание изменений в процессе продаж.
- **Правило**: Команда 'Call Team' была расформирована на этой неделе из-за сезонного снижения объема лидов.
  - *Контекст*: Описание изменений в процессе продаж.
- **Правило**: Бизнес имеет ярко выраженную сезонность: высокий сезон длится с апреля по конец октября.
  - *Контекст*: Планирование загрузки отдела продаж.
- **Правило**: Конверсия лидов со статусом 'Lacking Details' в реальных арендаторов составляет менее 1%.
  - *Контекст*: Обоснование приоритезации лидов.
- **Правило**: Pain Point: Ожидается, что в высокий сезон текущая команда продаж не сможет обрабатывать все лиды с неполными данными, и их придется деприоритезировать.
  - *Контекст*: Обсуждение узких мест процесса.
- **Правило**: Pain Point (Technical): Все входящие лиды, даже с полными данными, на несколько миллисекунд получают статус 'Lacking Details', что искажает статистику и мешает отделить действительно 'плохие' лиды от 'хороших'.
  - *Контекст*: Обсуждение проблем с данными.
- **Правило**: Pain Point (Data): Все лиды с платформы 'apartments.com' приходят с неполными данными по умолчанию. Один и тот же человек с одинаковым намерением может создать лиды разного качества в зависимости от сайта-источника (например, SpareRoom vs apartments.com).
  - *Контекст*: Обсуждение проблем с данными.
- **Правило**: Leads from the 'Furnished Finder' source never convert, despite generating thousands of leads per year.
  - *Контекст*: Discussion about the importance of lead source for predicting conversion.
- **Правило**: If a lead's status changes from 'Lacking Details' to 'Details Completed' within 7 days, its conversion rate is much higher.
  - *Контекст*: Analysis of lead behavior and quality.
- **Правило**: The most common missing piece of information for potentially high-quality 'Lacking Details' leads is the 'move-out date'.
  - *Контекст*: Identifying specific data gaps that affect lead classification.
- **Правило**: The system requires a specific move-out date from the customer to calculate price and availability.
  - *Контекст*: Explanation of system constraints for lead processing.
- **Правило**: During peak season (e.g., June), pricing is not flexible and depends heavily on the exact dates provided.
  - *Контекст*: Explanation of business logic for pricing.
- **Правило**: The lead nurturing process for 'Lacking Details' leads is multi-channel: active follow-ups (calls, SMS, personal emails) happen in parallel with automated email flows.
  - *Контекст*: Description of the lead nurturing strategy.
- **Правило**: For leads with a phone number, the first active follow-up step is a call. If there is no response, an SMS is sent.
  - *Контекст*: Detailing the sequence of the active follow-up process.
- **Правило**: Previously, a dedicated 'cold team' handled nurturing for 'Lacking Details' leads. Now, during the low season, sales agents perform this task due to available capacity.
  - *Контекст*: Explaining the organizational change in handling low-priority leads.
- **Правило**: Если лид после нескольких попыток follow-up не предоставляет недостающие данные (например, дату выезда), он вручную переводится в статус 'Lost'.
  - *Контекст*: Обсуждение процесса работы с лидами в статусе 'Lacking Details'.
- **Правило**: Маркетинг запускает кампании по 'реанимации' лидов со статусом 'Lost', обычно через 7 или 14 дней после их перехода в этот статус.
  - *Контекст*: Обсуждение работы с потерянными лидами.
- **Правило**: Уровень успешности (success rate) кампаний по 'реанимации' потерянных лидов оценивается как низкий.
  - *Контекст*: Обсуждение эффективности маркетинговых кампаний.
- **Правило**: Процесс закрытия сделки начинается с заполнения клиентом заявки (application), предоставления документов и оплаты сбора за рассмотрение заявки.
  - *Контекст*: Обсуждение процесса закрытия сделки (closure process).
- **Правило**: Исключение: в Бостоне сбор за рассмотрение заявки с клиентов не взимается.
  - *Контекст*: Обсуждение процесса оплаты.
- **Правило**: Специальная команда (Leasing/KYC) проверяет все заявки.
  - *Контекст*: Обсуждение процесса верификации клиентов.
- **Правило**: Если заявка не проходит проверку KYC, клиенту могут предложить предоставить дополнительные документы или найти поручителя (guarantor).
  - *Контекст*: Обсуждение процесса верификации клиентов.
- **Правило**: Если клиент не проходит KYC и не может предоставить поручителя/доп. документы, он переводится в статус 'Lost'.
  - *Контекст*: Обсуждение процесса верификации клиентов.
- **Правило**: После успешной проверки KYC клиенту отправляется договор на подпись и выставляется счет на предоплату (депозит и т.д.).
  - *Контекст*: Обсуждение финальных шагов сделки.
- **Правило**: Процесс генерации контракта является полу-автоматическим: данные из лид-карточки подтягиваются автоматически, но отправка требует ручного нажатия кнопки.
  - *Контекст*: Обсуждение отличий от полностью автоматизированных систем конкурентов.
- **Правило**: Ручная отправка контракта сохранена намеренно, чтобы иметь возможность вносить изменения по запросу клиента (другой юнит, даты заезда/выезда) на этапе проверки KYC.
  - *Контекст*: Обоснование, почему процесс не полностью автоматизирован.
- **Правило**: Вся коммуникация с клиентом (email, SMS, телефонные звонки) отслеживается в собственной системе "Juno OS", которая функционирует как CRM.
  - *Контекст*: Ответ на вопрос об отслеживании коммуникаций.
- **Правило**: Все входящие и исходящие телефонные звонки записываются и транскрибируются с помощью сервиса Amazon.
  - *Контекст*: Описание возможностей системы "Juno OS".
- **Правило**: Сейлз-менеджеры ежедневно проводят 10 выборочных проверок качества (QA) коммуникаций агентов.
  - *Контекст*: Обсуждение процесса анализа собранных данных о коммуникациях.
- **Правило**: Результаты QA-проверок фиксируются в таблице с комментариями и метками (например, 'поздняя коммуникация' при нарушении SLA).
  - *Контекст*: Процесс контроля качества работы агентов.
- **Правило**: Менеджеры тратят 30-40 минут в день на QA-проверки звонков.
  - *Контекст*: Обсуждение текущего процесса контроля качества.
- **Правило**: Процесс QA-проверок основан на случайной выборке, что делает его субъективным.
  - *Контекст*: Андреас описывает ограничения текущей системы.
- **Правило**: Из-за неполноты данных невозможно рассчитать упущенную конверсию или потенциал для улучшения.
  - *Контекст*: Андреас отвечает на вопрос о количественной оценке упущенных возможностей.
- **Правило**: До 28 февраля основным KPI было количество сделок в месяц, а не выручка.
  - *Контекст*: Андреас начинает рассказывать о метриках (продолжение в следующем фрагменте).
- **Правило**: Изначально в June Homes отслеживали только количество сделок, но не их среднюю стоимость, выручку или срок аренды.
  - *Контекст*: Обсуждение эволюции отслеживания целей.
- **Правило**: Существует два типа сделок: новые сделки (первичная конверсия лида) и продления (существующие арендаторы).
  - *Контекст*: Классификация сделок.
- **Правило**: Компания Outpost всегда отслеживала выручку, в то время как June Homes начала отслеживать выручку только с 1 марта.
  - *Контекст*: Различия в отслеживании метрик между проектами.
- **Правило**: KPI 1: Конверсия из 'получена полная заявка' в 'заявка завершена'.
  - *Контекст*: Описание KPI для отдела продаж.
- **Правило**: Процесс KYC (проверка клиента), где могут потребоваться доп. документы или поручитель, находится между этапами заявки. Отдел продаж не имеет прямого влияния на этот этап, поэтому он не является их KPI.
  - *Контекст*: Описание процесса и ограничений влияния отдела продаж.
- **Правило**: KPI 2: Конверсия из 'лид одобрен' в 'контракт подписан'.
  - *Контекст*: Описание KPI для отдела продаж.
- **Правило**: KPI 3: Процент писем, на которые ответили в течение 45 минут.
  - *Контекст*: Описание KPI для отдела продаж.
- **Правило**: Компания перестала уделять пристальное внимание метрике 'время онлайн' для агентов.
  - *Контекст*: Обсуждение того, что постоянные входящие звонки прерывают рабочий процесс агентов и снижают их конверсию. Не было найдено корреляции между высоким временем онлайн и конверсией.
- **Правило**: Пропущенные звонки автоматически перенаправляются другим доступным агентам.
  - *Контекст*: Объяснение, почему пропущенные звонки не являются критичной проблемой.
- **Правило**: Отслеживается конверсия из MQL (Marketing Qualified Lead) в 'начало заполнения заявки' (application started).
  - *Контекст*: Обсуждение метрик предварительного этапа воронки продаж.
- **Правило**: Ранее существовала специальная команда (calls team), чей KPI заключался в том, чтобы доводить лиды с неполными данными до этапа 'начало заполнения заявки'.
  - *Контекст*: Обсуждение прошлых процессов и KPI.
- **Правило**: MQL (Marketing Qualified Lead) — это лид, у которого есть: 1) хотя бы один контакт (телефон или email), 2) город, 3) желаемая дата заезда.
  - *Контекст*: Определение ключевого термина для квалификации лидов.
- **Правило**: Конверсия из 'application started' в 'application completed' в сентябре составляет 52%.
  - *Контекст*: Обсуждение данных на дашборде.
- **Правило**: Стадия 'application completed' не включает оплату ('Boston doesn't include payments').
  - *Контекст*: Уточнение определения стадий воронки.
- **Правило**: Стадия 'application completed' является точкой передачи лида в отдел KYC (Know Your Customer).
  - *Контекст*: Описание процесса обработки заявок.
- **Правило**: Good quality leads missing some documents can be conditionally approved to proceed with contract signing. They must provide the documents later, or the reservation is canceled.
  - *Контекст*: Discussion of exceptions in the lead qualification process.
- **Правило**: Leads with a very strong profile (e.g., excellent credit history) can be approved even before paying the application fee.
  - *Контекст*: Discussion of exceptions for high-quality leads.
- **Правило**: The three main conversion stages being monitored are: MQL to Application, Application to Completion, and KYC Success to Closure.
  - *Контекст*: Defining the key areas for process improvement.
- **Правило**: Pain Point (New York): There is a significant drop-off between 'Application Completed' and 'Application Paid'.
  - *Контекст*: Identifying bottlenecks in the conversion funnel.
- **Правило**: Pain Point (Boston): The approval rate (from 'Application Completed' to 'Application Approved') has dropped significantly.
  - *Контекст*: Identifying bottlenecks in the conversion funnel.
- **Правило**: Application payments are not required for Boston.
  - *Контекст*: Explaining the difference in process between cities.
- **Правило**: The drop in Boston's approval rate is attributed to the recent introduction of new requirements.
  - *Контекст*: Explaining the cause of a performance drop.
- **Правило**: Команда отслеживает, являются ли новые требования причиной снижения конверсии в одобрение.
  - *Контекст*: Обсуждение причин падения показателя одобрения заявок в Бостоне.
- **Правило**: Application fee for 'June' is $20.
  - *Контекст*: Discussion of different application processes.
- **Правило**: Application fee for 'Outpost' is $20 plus a first month's deposit, totaling around $1500-$2000.
  - *Контекст*: Discussion of different application processes.
- **Правило**: The primary bottleneck for New York is the payment of the application fee.
  - *Контекст*: Analysis of the sales funnel.
- **Правило**: The call team, which previously nurtured leads with missing information, has been removed.
  - *Контекст*: Discussion of process changes and their impact.
- **Правило**: Sales agents are now responsible for the initial nurturing of all leads, including those with missing data, increasing their workload.
  - *Контекст*: Analysis of the impact of removing the call team.
- **Правило**: The qualification process for leads with missing data needs to be automated to handle the increased volume and free up sales agents' time.
  - *Контекст*: Strategic discussion on improving the sales process.
- **Правило**: Three key challenges have been identified: 1. Converting leads with 'lacking details' to 'application started'. 2. Getting applicants to pay the fee. 3. The final approval rate.
  - *Контекст*: Summary of current business challenges.
- **Правило**: Одобренные лиды могут посетить до двух просмотров объектов недвижимости (in-person tours).
  - *Контекст*: Обсуждение этапов воронки продаж.
- **Правило**: Pain Point: Клиенты часто отказываются от сделки после просмотра, если реальность не соответствует их ожиданиям от фотографий/описания.
  - *Контекст*: Обсуждение 'узких мест' (bottlenecks) в процессе продаж.
- **Правило**: Pain Point: Финальное 'узкое место' — это внесение предоплаты. Клиенты отказываются на этом этапе, так как не имеют средств, передумали или не ожидали такой суммы (особенно при автоматическом прохождении воронки).
  - *Контекст*: Обсуждение 'узких мест' (bottlenecks) в процессе продаж.
- **Правило**: При переводе лида в статус 'Lost' (проигран) обязательно указать причину в CRM (Juno OS).
  - *Контекст*: Обсуждение процесса сбора данных об отказах.
- **Правило**: Pain Point: Часто клиенты просто перестают выходить на связь ('ghosting'), и реальную причину отказа узнать невозможно.
  - *Контекст*: Обсуждение сбора данных.
- **Правило**: Если реальная причина отказа неизвестна из-за 'ghosting', лид помечается причиной 'Not Interested' (не заинтересован).
  - *Контекст*: Обсуждение процесса сбора данных об отказах.
- **Правило**: Около 25% ('один из четырех') проигранных лидов имеют причину 'Not Interested', что часто означает невозможность выяснить настоящую причину.
  - *Контекст*: Анализ данных на дашборде.
- **Правило**: 'No Response' is the loss reason for leads who submit an inquiry but never reply to any follow-ups (phone, email, SMS).
  - *Контекст*: Clarifying the meaning of different loss reasons.
- **Правило**: 'Not Interested' is the loss reason for leads who engage in some communication but then stop responding ('ghost') without giving a specific reason.
  - *Контекст*: Clarifying the meaning of different loss reasons.
- **Правило**: 1 in 3 leads (~33%) are lost due to 'No Response'.
  - *Контекст*: Analysis of the sales funnel.
- **Правило**: 1 in 4 leads (~25%) are lost due to 'Not Interested' (ghosting).
  - *Контекст*: Analysis of the sales funnel.
- **Правило**: The business development pipeline has an 80% drop-off rate after the initial form submission from potential landlords.
  - *Контекст*: Comparing sales funnel issues with another department's pipeline.
- **Правило**: Only 7% of lost deals are explicitly attributed to 'Price'. However, the team assumes the actual number is closer to 20%, with many price-sensitive leads being hidden in the 'Not Interested' category.
  - *Контекст*: Analysis of the reasons for losing deals.
- **Правило**: 8% of lost leads are duplicates.
  - *Контекст*: Analysis of the reasons for losing deals.
- **Правило**: Предлагается 3 способа улучшить конверсию лидов, связанную с показами квартир.
  - *Контекст*: Обсуждение стратегии по работе с показами
- **Правило**: Способ 1 (краткосрочный, самый эффективный): Перенаправлять лидов на 3D-туры и высылать им актуальные, качественные фото квартир после выезда предыдущего жильца.
  - *Контекст*: Обсуждение альтернатив личным показам
- **Правило**: Способ 2 (долгосрочный): Улучшить качество самих квартир (ремонт, мебель, техника) и следить, чтобы квартира была в идеальном состоянии перед показом.
  - *Контекст*: Обсуждение улучшения продукта
- **Правило**: Способ 3 (организационный): Улучшить качество самих личных показов, изменив модель работы и мотивации агентов по показам.
  - *Контекст*: Обсуждение процесса продаж
- **Правило**: Проблема (Pain Point): Прошлый опыт с "виртуальными турами" был неэффективен; команда перестала их проводить 1.5 года назад и превратилась в службу поддержки.
  - *Контекст*: Исторический контекст
- **Правило**: Проблема (Pain Point): Личные показы, проводимые сторонними людьми ('просто открывали дверь'), снижали конверсию.
  - *Контекст*: Исторический контекст
- **Правило**: Предлагается новая модель мотивации для агентов по показам: базовая ставка за показ + высокий бонус за закрытую сделку.
  - *Контекст*: Обсуждение компенсационной модели
- **Правило**: Как бенчмарк приводится опыт компании 'Outpost', где показы проводят обученные агенты по продажам, что 'чрезвычайно помогает' конверсии.
  - *Контекст*: Обсуждение лучших практик
- **Правило**: Проблема: агенты, проводящие показы квартир, не мотивированы продавать и не заботятся о качестве клиентского опыта (например, о чистоте квартиры).
  - *Контекст*: Обсуждение неэффективности текущего процесса личных показов.
- **Правило**: Идея улучшения: ввести дифференцированную оплату для агентов, где вознаграждение за показ, приведший к сделке, значительно выше, чем за обычный показ.
  - *Контекст*: Предложение по реформированию системы мотивации агентов.
- **Правило**: Проблема: высокий 'no response rate' по лидам.
  - *Контекст*: Обсуждение ключевых бизнес-проблем.
- **Правило**: Метрика: текущий 'no response rate' составляет 1 из 3 (около 33%).
  - *Контекст*: Оценка текущей эффективности работы с лидами.
- **Правило**: Историческая метрика: ранее 'no response rate' был около 40%.
  - *Контекст*: Сравнение текущих показателей с прошлыми.
- **Правило**: Следующий шаг: необходимо получить от одного из действующих продавцов запись его полного рабочего процесса.
  - *Контекст*: Определение плана действий для анализа и оптимизации.
- **Правило**: Требования к записи: запись экрана должна охватывать весь цикл работы с лидом (от получения до закрытия сделки), показывать взаимодействие с системами (CRM и т.д.) и сопровождаться комментариями продавца о его действиях и их причинах.
  - *Контекст*: Детализация задачи для команды.

## 🎬 Полный лог (Аудио + Интерфейсы)


### [00:00:00]
- [00:00:00] **🗣 SPEAKER_C**: Nice. Yeah, it's amazing, amazing place. I've fallen in love. Totally fallen in love.
- [00:00:00] **👁 Экран**: Видеозвонок с тремя участниками в сетке. Внизу справа находится заглушка с надписью 'Recording and taking notes' и логотипом Fathom. 
  - *Текст на экране*: Alexander Surnin, Andreas Efthymiou, Eugene Tymchenko, Recording and taking notes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0001.jpg)
- [00:00:06] **🗣 SPEAKER_A**: And where are you guys based?
- [00:00:09] **🗣 SPEAKER_B**: Um, I'm in San Francisco right now.
- [00:00:13] **🗣 SPEAKER_A**: Okay. Nice.
- [00:00:14] **🗣 SPEAKER_C**: I'm in Barcelona.
- [00:00:16] **🗣 SPEAKER_A**: Nice. Both good.
- [00:00:18] **🗣 SPEAKER_A**: Uh, you know, at some point in my life, I wanted to move to San Francisco, maybe for a year or two, but the family wouldn't follow. So I'm stuck.
- [00:00:29] **🗣 SPEAKER_B**: I would say pretty common situation.
- [00:00:34] **🗣 SPEAKER_B**: That's probably number one concern why people do not move here.
- [00:00:40] **🗣 SPEAKER_A**: Yeah, I wanted Iceland, I wanted San Francisco, a couple of places, but yeah, I'm stuck. And now it's too late, I guess. I have a teenage daughter, not moving anyway.
- [00:00:50] **👁 Экран**: В сетку видеозвонка добавляются еще два участника: Oleksii Surnin и Alex Patsalo (аватарка). Теперь в сетке 5 участников и заглушка Fathom. 
  - *Текст на экране*: Alexander Surnin, Andreas Efthymiou, Eugene Tymchenko, Oleksii Surnin, Alex Patsalo, Recording and taking notes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0004.jpg)
- [00:00:53] **🗣 SPEAKER_B**: Yeah, Alexey. Yeah.
- [00:00:59] **🗣 SPEAKER_B**: Not the worst place to be stuck, you know. No, no, I don't complain. I don't complain, but you know, I'd like something, you know, fresh blood, try a new place, but yeah. Maybe after I retire, we'll see.

### [00:01:00]
- [00:01:43] **🗣 SPEAKER_A**: No, no, I don't complain. I don't complain.
- [00:01:56] **🗣 SPEAKER_B**: Okay, let's let's accelerate that.

### [00:02:00]
- [00:02:00] **🗣 SPEAKER_A**: No, no, no. I'm not in a hurry. I always have, you know, white beard and everything, but I'm not, I'm not in a hurry yet.
- [00:02:08] **🗣 SPEAKER_B**: I believe with AI we can all retire faster. Let's just make some money.
- [00:02:16] **🗣 SPEAKER_B**: Okay.
- [00:02:18] **🗣 SPEAKER_B**: Um, quick intro from our side. Uh, so basically, yeah, I'm Eugene. Uh, I'm a founder of Plus Five company that, uh, implements AI. And Alex and Oleksiy, uh, my partners in this project, uh, and we are here to basically help you automate your processes with AI and apply AI where it's possible and make basically your job and the job of your people way smoother and way more pleasant and eliminate everything that is not, you know, needed, uh, to be done by humans.

### [00:03:00]
- [00:03:37] **🗣 SPEAKER_B**: So the the the primary goal of today's call is to to get a high-level understanding of the sales processes in your department. Um, also main metrics and KPIs that you follow, and of course major blockers and problems that we can automate. And a couple of work questions that were requested at the end of the call.

### [00:04:00]
- [00:04:07] **🗣 SPEAKER_B**: Uh, yeah, we can start with the high-level overview how sales work in in and what's the sales process, uh, in your team, and then we can break it down and dig deeper into metrics, problems, challenges, and so on and so forth.

### [00:05:00]
- [00:05:00] **🗣 SPEAKER_A**: either or or both. Um in which case we call them details completed. We have all the available information that we need to to make a call and start talking with them basically as a as a warm lead as we call them, right?
- [00:05:00] **👁 Экран**: Экран видеозвонка в Google Meet. Видны видеопотоки шести участников: Alexander Surmin, Andreas Efthymiou, Eugene Tymchenko, Oleksii Surmin, Alex Patsalo и 'Alexander's Fathom Notetaker'. Основной говорящий (Andreas, затем Alex) выделен синей рамкой. 
  - *Текст на экране*: Alexander Surmin, Andreas Efthymiou, Eugene Tymchenko, Oleksii Surmin, Alex Patsalo, Recording and taking notes, Alexander's Fathom Notetaker
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0021.jpg)
- [00:05:18] **🗣 SPEAKER_A**: So, once we have details completed, the sales team, um, will contact directly the the leads.
- [00:05:27] **🗣 SPEAKER_A**: Now, up until early this week, we used to have a call, a call team. It's a team that was dedicated in handling most of the lacking details, the very low intent leads. They used to call them, they would nurture them,
- [00:05:52] **🗣 SPEAKER_A**: and then once they became details completed, they would be passed automatically to the sales agents team to handle from then on. Now, as of this week, we terminated this team because the volumes right now are not that high. The sales agents teams are um are enough during this period of time to handle them.

### [00:06:00]
- [00:06:43] **🗣 SPEAKER_A**: Now, as we go towards the mid-season, which is coming April, and then May, June, July on and up until the end of October, this is what we have uh the shoulder period. So we have the mid-season coming up, then peak season and then middle season and then going back to the low season.

### [00:07:00]
- [00:07:19] **🗣 SPEAKER_A**: So during the mid and the high season, the volumes become that such that we may not be able to handle all lacking details. Um and obviously we de-prioritize this because we have data that shows that lacking details um hardly converts to members to tenants at the end of the day. Um,

### [00:08:00]
- [00:08:08] **🗣 SPEAKER_A**: Now, there is a kind of a technical thing there that Alex might also help us understand a bit better. I, I mean, high level the way I understand it is every single detail lands as a lacking detail, even for, you know, a few milliseconds before they convert to details completed, right? So everything lands as lacking details. But then, you know, within milliseconds or whatever, if they complete the rest of their details on the spot, they convert to details completed.

### [00:09:00]
- [00:09:02] **🗣 SPEAKER_A**: So from a data perspective, we don't really understand, or I mean, I haven't got any actual data which shows that how many lacking details, actual lacking details... I mean after 5 minutes or after 5 hours, they never completed the information that we need and what share of these leads actually converted or not at the end of the day. But some hard, some some very basic data that we have shows that it's under 1%.
- [00:09:47] **🗣 SPEAKER_A**: So basically, we deprioritize this once we're going to the low the mid-season and the high season from a sales perspective. As I said, we did have the call team, they handle these, but now with without them, eventually we'll have to deprioritize this once we go into the mid-season and the high season. So that's one of the challenges that we have. Um and I'm and I'm saying this because as low intent as they might sound,

### [00:10:00]
- [00:10:00] **🗣 SPEAKER_A**: it's low intense. And of course, in general, uh, we can like compare not only just like in details status, but also source of the lead.
- [00:10:13] **🗣 SPEAKER_A**: their volume is high enough not to disregard them, right? So even now even with 1%, we still make money because the volumes are really high. Um but at the same time, it's what you said in the beginning, it's not efficient for sales agents to focus there. Otherwise, we would be missing out all the high-intent leads. So that's the first uh kind of challenge that we have. Yeah, Alex.
- [00:10:14] **🗣 SPEAKER_A**: And what I found that a bunch of sources, for example, like type one source from Furnished Finder platform, they never converting. It's like thousands of leads per year.
- [00:10:31] **🗣 SPEAKER_B**: Mhm, true. True. Source is also a very important thing. Yeah, you're right, Alex.
- [00:10:32] **👁 Экран**: The video call interface shows six participants. In the bottom row, Mike Grishchenko joins the call, replacing the 'Recording and taking notes' placeholder. The layout is now 3x2, showing six video feeds. 
  - *Текст на экране*: Alexander Surmin, Andreas Efthymiou, Eugene Tymchenko, Oleksii Surmin, Alex Patsalo, Mike Grishchenko
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0043.jpg)
- [00:10:35] **🗣 SPEAKER_A**: And, yeah, I I did quite a huge analysis and I can share with you Andreas, like tomorrow. I I will send, uh, it's a lot of stuff to read, at least five minutes, but, yeah. Uh, so from this analysis, uh, what I see is that, yeah, basically I can repeat that, uh,
- [00:10:42] **🗣 SPEAKER_B**: Yeah, I just want to add that I did like quiet analysis of uh this issue like not the issue but you know with this situation with lacking details and it's not like so simple and so obvious that all lacking details are bad and all details complete are good. And lacking details status, uh, it's not like in definition of lacking details status, we always as a company said okay all these leads, uh, like, uh, have a low intent, but it's like in general it's not true.
- [00:10:56] **🗣 SPEAKER_A**: not all like in details are so bad. Even like if lead from like in details switching to details complete in seven days, it's it will be higher uh percentage uh and yeah, conversion rate will be higher, much higher.

### [00:11:00]
- [00:11:42] **🗣 SPEAKER_B**: Like, because for, for example, all apartments.com leads, they are all lacking details in the beginning. Yeah. You know, and it's just like again, the same lead on SpareRoom, uh, SpareRoom service and apartments.com service, when it when this lead lands to us, the same, the same person, one will be having like this, uh, move out date and another not, but intent is the same, it's the same person.
- [00:11:45] **👁 Экран**: The video layout briefly highlights Alexander Surmin's tile as he speaks. 
  - *Текст на экране*: Alexander Surmin
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0048.jpg)
- [00:11:55] **🗣 SPEAKER_C**: And that that uh discrepancy basically happens because the classification of leads happens on a conditional basis, which is algorithmically programmed into your system, right?

### [00:12:00]
- [00:12:10] **🗣 SPEAKER_A**: Yeah. Yeah, and like most of cases when I'm talking about like uh like in details who actually could convert and could convert with high like high potential to convert, they all missing like only move out date.
- [00:12:26] **🗣 SPEAKER_A**: Almost all. And this is because a lot of leads are thinking like, I don't know actually when I need to move out. And for example, in June, you need to like say like date, actual date.
- [00:12:35] **🗣 SPEAKER_B**: Like, so we cannot make sure like if it's just missing move out data, it's...
- [00:12:39] **🗣 SPEAKER_A**: You cannot just like say, okay, I will move out in like six months and maybe in a half, I don't know, blah, blah, blah. You need to you need to tell us date because it uh availability and price depends on it. Like mostly price, in June the price is not flexible.

### [00:13:00]
- [00:13:39] **🗣 SPEAKER_B**: Okay. Yeah, whereas in platforms like apartments.com for example, you only need to register your moving date and then your email and and maybe your phone number is not mandatory after but basically. And then we receive leads that are missing the move out date, which are effectively in our system, lacking details unless we call them back.
- [00:13:40] **👁 Экран**: The video layout briefly highlights Andreas Efthymiou's tile as he speaks. 
  - *Текст на экране*: Andreas Efthymiou
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0055.jpg)

### [00:14:00]
- [00:14:01] **🗣 SPEAKER_B**: Um, and then basically, we call them back and we ask them what the move out dates and maybe if they don't have a phone number, we also ask the phone number and stuff.
- [00:14:06] **🗣 SPEAKER_B**: but um, we all these kind of leads from other platforms usually they don't have a move out date.
- [00:14:18] **🗣 SPEAKER_C**: Okay.
- [00:14:19] **🗣 SPEAKER_C**: Uh, I've got a question. So you said for all those leads that kind of fall under this category of uh incomplete data, you had or you you still have the nurturing process when the agents contact them and try to figure out the missing data. So how this contact is happening right now? Do they call them?

### [00:15:00]
- [00:15:00] **🗣 SPEAKER_A**: two follow ups, they don't convert to details completed, which means that they don't fill in their move out dates or any other important information that we're missing to to have them as warm leads, then we would switch them to lost leads.
- [00:15:02] **👁 Экран**: The video layout briefly highlights Eugene Tymchenko's tile as he speaks. 
  - *Текст на экране*: Eugene Tymchenko
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0061.jpg)
- [00:15:16] **🗣 SPEAKER_A**: Uh that was a manual process basically, right? So it wasn't done anything automatically.
- [00:15:22] **🗣 SPEAKER_A**: Um, so in any case, from when from the from the time, from the minute that this kind of leads land, uh, we always either call them or send them SMS or email or all of them.
- [00:15:25] **🗣 SPEAKER_B**: Yes, well, up until now, again, yeah, somebody calls them. Up until now, we had we had a dedicated team who we call the cold team. They would call them up and ask for as many details as possible before we can switch them to details completed in a warm, let's say, uh, status. And then the sales agents take over. Or, during the low season now that we have the capacity from the sales agents team, uh, we also call them
- [00:15:38] **🗣 SPEAKER_A**: And then after a couple of reach outs, if they don't switch to details completed, then eventually we switch them to last manually.
- [00:15:48] **🗣 SPEAKER_B**: Okay.
- [00:15:48] **🗣 SPEAKER_B**: And when they're lost, uh, to try, do you send them marketing materials trying to re-engage them?
- [00:15:53] **🗣 SPEAKER_B**: um, because the agents want to handle as many leads as possible to convert and get their commissions obviously. So since we had the capacity from the sales agents perspective, we call them as well. Um, or it always a call or uh No, no, I mean if if if there is a phone number, there's always a call. And if they don't respond, then we send an SMS. At the same time, there are um automatic email flows. Mhm. Uh, so there's automated emails that going out towards these uh leads anyway. Um, and then
- [00:15:56] **🗣 SPEAKER_A**: Yeah.
- [00:15:57] **🗣 SPEAKER_A**: Yeah, uh, there are some campaigns that marketing runs usually seven days after or for 14 days after so that, you know, they're not going complete cold. Um, so we do send out certain campaigns to try to reactivate them. If they do, uh, then usually they come in, um, as details complete because they give us the, you know, their moving and move out dates.

### [00:16:00]
- [00:16:45] **🗣 SPEAKER_B**: again, depending on the capacity, the sales agents might do an active follow-up from their side. When we had the cold team, it was at least one follow-up as well, active follow-up. That means by phone, SMS, or email with a personal email, not an automated email. Uh but at the same time, we do have automated flows from um email that go out towards these leads. Now,
- [00:16:55] **🗣 SPEAKER_A**: So these fall to the sales agents pipelines. Okay. Uh, I from I think from past attempts, I don't think the success rate is too high there to be honest.

### [00:17:00]
- [00:17:06] **🗣 SPEAKER_A**: We do have cases where, but because it doesn't cost us a lot to do that, we we we we run it regardless, but the success rates, I don't think they're too high.
- [00:17:27] **🗣 SPEAKER_B**: Success rate rates of re-engagement?
- [00:17:30] **🗣 SPEAKER_B**: if after a certain number of follow-ups, usually two,
- [00:17:30] **🗣 SPEAKER_A**: Yeah, of re-engagement trying to reactivate the lost leads.
- [00:17:34] **🗣 SPEAKER_B**: Okay. Got it.
- [00:17:41] **🗣 SPEAKER_B**: Uh, Alex, Oleksii, uh, no questions?
- [00:17:45] **🗣 SPEAKER_C**: Right now, no questions.
- [00:17:47] **🗣 SPEAKER_B**: Okay.
- [00:17:52] **🗣 SPEAKER_B**: How the process looks like, how the closure process looks like. So let's say it's a completely qualified warm lead with all the data. What happens then? How do agents work?

### [00:18:00]
- [00:18:04] **🗣 SPEAKER_A**: Right. So when we qualify the leads and we have the discussions with them, they have to fill in an application. Um, and they have to complete the application with certain documents that they have to provide and they also have to pay for the application. Now, once they provide the documents and they pay for the application, mind you, the paying the application is across all cities that we have except Boston.
- [00:18:39] **🗣 SPEAKER_A**: In Boston, we can they're not required to pay, we cannot ask for a payment for the application processing.
- [00:18:48] **🗣 SPEAKER_A**: Basically all all cities have to pay for the application as well, except Boston. So once they complete the application and pay for it, except Boston, um leasing or leasing team or KYC team takes over, they screen the application, um and if they pass, then they are approved and they're being asked to uh sign the contract.

### [00:19:00]
- [00:19:09] **🗣 SPEAKER_A**: We're sending them the contract, and then once they sign the contract, they also have to make all the upfront payments like the deposits and things like that. Uh now if they don't get approved by KYC, they will be asked, the leads will be asked either to provide extra documents or they will be provide or they will be asked to provide a guarantor.
- [00:19:31] **🗣 SPEAKER_A**: And if if they do if they can't provide a guarantor, and if they do provide all the extra documents that are required, then they might get approved and then they follow the same process again. If not, uh then they're being lost again from our side.
- [00:19:56] **🗣 SPEAKER_B**: and the contract is an automatic automatic process sending a contract for signage?

### [00:20:00]
- [00:20:00] **🗣 SPEAKER_B**: which is in our in the June Homes case. Uh So it's not fully, fully, fully automated, but we still don't need to adjust anything in the contract. The the information for the contract is taken automatically from the lead page, but we still have to push the button to send.
- [00:20:00] **👁 Экран**: Видеоконференция в Google Meet, на экране сетка с видео участников. 
  - *Текст на экране*: Alexander Surnin, Andreas Efthymiou, Eugene Tymchenko, Oleksii Surnin, Alex Patsalo, Mike Grischenko, Recording and taking notes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0081.jpg)
- [00:20:19] **🗣 SPEAKER_C**: Gotcha.
- [00:20:20] **🗣 SPEAKER_B**: Whereas in outpost, as soon as the uh, deposit is paid, I think it's sent automatically right away. The agent doesn't have to do anything. It's a, it's an automated, it's a fully automated process. In our case, it's not.
- [00:20:37] **🗣 SPEAKER_C**: Okay.
- [00:20:38] **🗣 SPEAKER_C**: Gotcha.
- [00:20:40] **🗣 SPEAKER_B**: And I'll tell you why it's not. In our case, I'll tell you why it's not because we use a kind of a different flow from the outpost. It could be the case, for example, that the lead has not finalized or they will change mind on their dates. So while they're being, their application is being processed by our KYC team, they might phone up and say, 'Look, I also saw another unit, please change it' or, um, 'I changed my move out dates'. So we leave the contract for the end and we're not sending it automatically because things might change, might be the unit, might be the move out dates, might be the move in dates. So we leave that for the end to change manually in case the leads ask for it.

### [00:22:00]
- [00:22:10] **🗣 SPEAKER_C**: Okay. Gotcha.
- [00:22:13] **🗣 SPEAKER_C**: Uh, do you track all the communication with a customer?
- [00:22:20] **🗣 SPEAKER_B**: Um, yeah. I mean, in, in our system, what we call Juno OS, Juno operating system, which is kind of a CRM, not actually a CRM, but kind of a CRM, think of it like that, is in, in every lead page, there's a communication tab where the email communication, both the automated email going out from marketing, all the incoming responses if the leads ever respond, uh the phone calls with the transcript from Amazon, all is getting uh recorded. Yeah, yeah, from Amazon. It's, it's linked with Amazon, and then the calls are recorded incoming and outgoing as well. Uh and we also have transcripts sometimes uh at the bottom. So if you don't want to listen to it or if it's too long a phone call, then you can get the transcript at the bottom and and read it. Uh and the SMSs. So basically all the outgoing and incoming communication with the leads is recorded in the communications button in the lead page.

### [00:24:00]
- [00:24:04] **🗣 SPEAKER_C**: Okay.
- [00:24:05] **🗣 SPEAKER_C**: Gotcha.
- [00:24:07] **🗣 SPEAKER_C**: Good. Thank you.
- [00:24:10] **🗣 SPEAKER_A**: Sorry, can I interrupt you a bit? Uh, how how do you work with this data? So do you have some extra step after that you do some uh analyzing step, you have someone who dig deep inside this uh calls and the communication with clients or not?
- [00:24:11] **👁 Экран**: Участник Alexander Surnin проводит рукой по волосам, начиная говорить. 
  - *Текст на экране*: Alexander Surnin, Andreas Efthymiou, Eugene Tymchenko, Oleksii Surnin, Alex Patsalo, Mike Grischenko, Recording and taking notes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0097.jpg)

### [00:25:00]
- [00:25:00] **🗣 Andreas Efthymiou**: half an hour to 40 minutes per day for each sales team leader. And if you ask me, I'm not too sure about the results of all of it. Um, I know that people provide feedback, city managers provide feedback, but I'm not too sure if that feedback would be provided anyway. Um, you know, during the results, given the goal attainment or anything.
- [00:25:12] **🗣 SPEAKER_B**: Um, the the sales managers, the city managers, that we can call them sales team leaders, they do 10 QAs on a daily basis. And then we record them on a spreadsheet with, you know, comments and specific labels. So if somebody didn't respond timely or within the SLAs, then we just label it as uh, late communication.
- [00:25:25] **🗣 Andreas Efthymiou**: But being remote, I mean, back in the day when we worked from an office all together, it would be easier for a sales team leader to listen next to the agent and listen to what they're saying, how they're saying, you know, if they're actively picking up all the phones and everything, or if they're making the the calls first before sending an email or an SMS to to respond to to a lead request. Now, the only actual way to do that is through QAs because then that's how you see who who's done what. But then again, this is random.
- [00:25:58] **🗣 Alexander Surmin**: Um, okay, and uh
- [00:25:59] **🗣 Alexander Surmin**: it's more a subjective question. Uh how do you think how much uh important insights you miss uh because you can handle only so small count of uh this leads. So if you for example can process 100% of this data, uh maybe it could be very useful or not? How do you think?

### [00:27:00]
- [00:27:08] **🗣 Andreas Efthymiou**: Yeah, I think it would help.
- [00:27:11] **🗣 Andreas Efthymiou**: It would help because otherwise, first of all, we wouldn't have to spend 30 minutes per day or 40 minutes per day to do that. Then this would also be available for me or for anybody who would like also to check on this data. Um, and then I think it would be a lot more structured, um, the conversations, the discussions and the feedback towards the agents would be a lot more structured. We would be able to show them, you know, specific data that is undisputed, that's how everything is being monitored objectively by a system. Now, there's a lot of, you know, subjective factor there, uh, what the sales team leaders saw, what, I mean, if we could set very objective KPIs and SLAs, which we do have, but at the same time, we're not monitoring everything as you said. So somebody might say, yeah, but this was the exception. I've done another nine that were done within the SLAs. This is the exception, you got the exception, you got me. Now, if you can have 100% then you have a much more objective picture and you can throw in, you know, a lot more effective feedback, data driven.

### [00:28:00]
- [00:28:57] **🗣 Alexander Surmin**: Yeah. And uh, how do you think, uh, how much, uh, how much conversion you, uh, lost in this, uh, in this data?

### [00:29:00]
- [00:29:11] **🗣 Andreas Efthymiou**: You cannot calculate. I don't think we can calculate this.
- [00:29:14] **🗣 Alexander Surmin**: Maybe your personal feeling?
- [00:29:17] **🗣 Andreas Efthymiou**: Uhm, you mean by spending resources and time on collecting and seeing this data or by...

### [00:30:00]
- [00:30:00] **🗣 SPEAKER_A**: we didn't we didn't track length of stay as a goal. We didn't track the the revenue and we didn't track um the average price per deal.
- [00:30:00] **👁 Экран**: Экран видеозвонка в Google Meet. В раскладке "плитка" видны 6 участников: Alexander Surmin, Andreas Efthymiou, Eugene Tymchenko, Oleksii Surmin, Alex Patsalo, Mike Grishchenko. В правом нижнем углу видна панель Fathom Notetaker. 
  - *Текст на экране*: Alexander Surmin, Andreas Efthymiou, Eugene Tymchenko, Oleksii Surmin, Alex Patsalo, Mike Grishchenko, Recording and taking notes, Alexander's Fathom Notetaker
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0121.jpg)
- [00:30:06] **🗣 Eugene Tymchenko**: He he means, uh, not because you're spending resources to collect this data, but more that because of you don't because you don't have a full picture, how how much or how important the insights that could be missed.
- [00:30:14] **🗣 SPEAKER_A**: We only tracked and the goal was the number of deals.
- [00:30:17] **🗣 SPEAKER_A**: Um, and I forgot also to mention there are two types of deals that we can have um in outpost and in June homes is the new deals from leads converting for the first time. And we also have the extensions which are current tenants who decide to extend with us.
- [00:30:23] **🗣 Andreas Efthymiou**: I get it.
- [00:30:24] **🗣 Andreas Efthymiou**: Yeah, um very hard to tell. Very hard to tell. I know it's there's that's part of the challenge here. We we don't have the data to tell you whether, you know, what we're doing right now could be developed or improved by 50% or 30%. There's not even a gauge basically to give you there.
- [00:30:42] **🗣 SPEAKER_A**: Um, so in in outpost, we've been tracking the the revenue um all the time.
- [00:30:51] **🗣 SPEAKER_A**: In June homes, we only started tracking the revenue, again as I said, as of March 1st. Uh, you know, four or five days ago. Now, these are the goals and then the KPIs to reach to the goal, at least for June homes, is um we track the conversion from the moment a full application has been received

### [00:31:00]
- [00:31:45] **🗣 SPEAKER_A**: to when it's been completed. Because you might start an application and leave it halfway through and then we'll have to follow up with the lead, tell them what they need to complete, what they need to to attach. So that's the first part of the of the KPI that we that we uh measure.

### [00:32:00]
- [00:32:27] **🗣 SPEAKER_A**: Then in the middle, so we have the application started, application completed. Then in the middle sits the KYC, which is where the leads are being asked to provide any extra documentation, maybe provide a guarantor if they if they're not don't meet all the requirements. So that's basically where the sales agent team do not have direct impact, other than, you know, following up with them to provide the the the um the extra document required. Then there's no direct impact by the sales team. If somebody doesn't meet the credit score, if somebody, you know, has a bad history, you know, all these things, we cannot directly impact.

### [00:33:00]
- [00:33:38] **🗣 SPEAKER_A**: So we don't track it there. This is not a KPI for us. And then what is what is a KPI for us is that after the the lead is being approved, uh all the way down to signing the contract, basically. So this is the second KPI that we have is from lead being approved to lead signing the contract.

### [00:34:00]
- [00:34:12] **🗣 SPEAKER_A**: So these are one of the two of the KPIs that we have. And then we also have sales response rates where we track how many emails are being answered um under 45 minutes.
- [00:34:45] **🗣 SPEAKER_B**: Say it again?
- [00:34:59] **🗣 SPEAKER_A**: Um, in we also track what share of the incoming emails that we have are answered within 45 minutes.

### [00:35:00]
- [00:35:01] **🗣 SPEAKER_A**: So being all the time or very long time logged in Amazon means you have incoming calls. If you don't respond them, then they're missed calls. Um, so basically what we did, we're not too fixated about missing these calls because they're being rerouted to other agents who are online. Um, but we don't want people to tell them, you know, you have to be 90% online because then it's always incoming calls. Uh, they don't want to break the missed calls rate, so they pick them up and then their workflow is being continuously disrupted, which drops their conversion rates. So we stopped being too fixated about it because we never found the correlation between high online Amazon time and conversion rates.
- [00:35:51] **🗣 SPEAKER_B**: Okay.
- [00:35:53] **🗣 SPEAKER_B**: Got it.
- [00:35:57] **🗣 SPEAKER_B**: And what about the pre-application conversion from basically lead created in the system to application? Do you track that conversion rate?

### [00:36:00]
- [00:36:46] **🗣 SPEAKER_A**: Um, yeah, we do have this one as well. It's what we say from um, well we have from MQL to application started. So it might be an MQL who landed, they send their request but they never even started to to complete their application.

### [00:37:00]
- [00:37:00] **👁 Экран**: Экран видеоконференции в Google Meet. Видно 6 участников в отдельных окнах и одно окно с надписью 'Recording and taking notes'. 
  - *Текст на экране*: Alexander Surmin, Andreas Efthymiou, Eugene Tymchenko, Oleksii Surmin, Alex Patsalo, Mike Grishchenko, Recording and taking notes, Alexander's Fathom Notetaker
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0149.jpg)
- [00:37:11] **🗣 SPEAKER_C**: It's also important to understand like MQL, it's details completely, correct?
- [00:37:17] **🗣 SPEAKER_A**: Uh, not always. We can have sorry. App started is application completed, yes. No, no, I'm asking about MQL, you said MQL.
- [00:37:22] **👁 Экран**: Камера участника Eugene Tymchenko выключается, вместо видео появляется синий фон с буквой 'E'. 
  - *Текст на экране*: Alexander Surmin, Andreas Efthymiou, E, Oleksii Surmin, Alex Patsalo, Mike Grishchenko, Recording and taking notes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0150.jpg)
- [00:37:29] **🗣 SPEAKER_A**: MQL, it's mostly applications completed, yes.
- [00:37:35] **🗣 SPEAKER_B**: Uh, so the the question I had, what happens before the application? So, what is the, do you track the conversion rate between the moment where whatever type of lead came to the system, whether it's uh, complete data, incomplete data to application. Yes, one the KPI of the calls team which we don't have any longer was to convert leads from lacking details to application started basically.
- [00:37:35] **👁 Экран**: Камера участника Eugene Tymchenko снова включается. 
  - *Текст на экране*: Alexander Surmin, Andreas Efthymiou, Eugene Tymchenko, Oleksii Surmin, Alex Patsalo, Mike Grishchenko, Recording and taking notes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0151.jpg)

### [00:38:00]
- [00:38:40] **🗣 SPEAKER_A**: So we wanted to have all lacking details, uh, complete their details missing and then start the application. So that was basically their KPI.

### [00:39:00]
- [00:39:02] **🗣 SPEAKER_B**: Application started. Was the end? Up there was the end for them because after that we took over.
- [00:39:12] **🗣 SPEAKER_A**: We meaning the sales agents. Um, we're starting from application started to application completed. Got it.

### [00:40:00]
- [00:40:00] **🗣 SPEAKER_C**: is 52%.
- [00:40:02] **🗣 SPEAKER_A**: 52%.
- [00:40:03] **🗣 SPEAKER_B**: Mhm.
- [00:40:05] **🗣 SPEAKER_A**: Mhm. Okay.
- [00:40:06] **🗣 SPEAKER_B**: So MQL lead, is it a, lead with full details?
- [00:40:09] **🗣 SPEAKER_A**: It's conversion between uh from uh applied form to the to the payment, yeah?
- [00:40:13] **🗣 SPEAKER_A**: MQL is basically a lead um, it can have any status. It could be lacking details, it could be It's not it's it's not a status to be honest. Is there a non-MQL leads? It could be contacts, which is I think contacts is even more bare, it could be just an email, nothing else. MQL is like as I remember correctly, it's marketing qualified lead.
- [00:40:14] **🗣 SPEAKER_C**: Yeah, to completed. Well, not payment, to completed because Boston doesn't include payments, so we go as far as completed.
- [00:40:23] **🗣 SPEAKER_A**: And if you want to check KYC?
- [00:40:25] **🗣 SPEAKER_B**: Sorry?
- [00:40:27] **🗣 SPEAKER_A**: To KYC?
- [00:40:28] **🗣 SPEAKER_C**: Yes, to KYC. That's when the KYC takes over.
- [00:40:57] **🗣 SPEAKER_A**: Yeah.
- [00:40:58] **🗣 SPEAKER_C**: And by this we uh, so we take into account we have just at least one contact details, like it could be phone or email. We are saying this lead uh has a city. So we know like it's Boston, New York or anyway and has a moving date. And a date, yeah. One date, just one first, moving date. Yeah yeah yeah. So that would be an MQL lead, right? Yeah.

### [00:42:00]
- [00:42:08] **🗣 SPEAKER_B**: So if it's only an email, that would be not an MQL lead. No, no, no. It it will be an MQL. So just one contact detail, it could be phone either email. Okay. I got it.
- [00:42:24] **🗣 SPEAKER_B**: Okay.
- [00:42:29] **🗣 SPEAKER_B**: Gotcha.
- [00:42:33] **🗣 SPEAKER_B**: Uh, guys any questions about metrics or we can go deeper into problems and challenges?

### [00:44:00]
- [00:44:00] **👁 Экран**: На экране демонстрируется дашборд с бар-чартом, показывающим конверсию по месяцам. В сентябре (Sep 2024) значение конверсии составляет 52,0%. На графике две линии: красная (CR from mql to payment_pending) и зеленая (CR from app_started to app_completed). 
  - *Текст на экране*: Convert CR from -> to
[app_started] to [app_completed]
Sep 2024
52.0%
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0177.jpg)

### [00:45:00]
- [00:45:00] **🗣 SPEAKER_B**: is that this is a good fit, uh a good quality lead, but they don't have all the required documents readily available. We might conditionally approve them to move forward, so the leads, so sorry, so the agents can uh continue with the contract, sign the contract, and everything, and then ask the lead to provide the extra documents uh at a later stage. Um, some, you know, um and give them some time before even moving, moving in to provide these extra documents. If they don't, then we cancel the reservation.
- [00:45:43] **🗣 SPEAKER_C**: Okay. Got it.
- [00:45:45] **👁 Экран**: A dashboard with a bar chart is shown. The chart is titled 'Contact CR from <> to <>' and displays data from May 2023 to March 2024. The data includes total contacts, applications started, and applications completed. 
  - *Текст на экране*: Contact CR from <> to <>
date month year total_contacts app_started app_completed
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0184.jpg)
- [00:45:47] **🗣 SPEAKER_B**: I mean even sometimes if we see that some leads have very good credit history and their background is and their profile is very strong, then we might even proceed even before they actually pay for the uh for the application. That's an extra layer of uh of exceptions that we started using early last week. So even before going to to paying the application, if we see that their application is really interesting, they have a very strong background, we might even proceed with them even if they don't pay for the application.

### [00:46:00]
- [00:46:35] **👁 Экран**: The screen switches from the dashboard to a gallery view of the Google Meet participants. Participants visible include Alexander Surnin, Eugene Tymchenko, Andreas Efthymiou, Alex Patsalo, Mike Grishchenko, and Oleksii Surnin. 
  - *Текст на экране*: Alexander Surnin
Eugene Tymchenko
Andreas Efthymiou
Alex Patsalo
Mike Grishchenko
Oleksii Surnin
Recording and taking notes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0187.jpg)

### [00:47:00]
- [00:47:04] **🗣 SPEAKER_C**: Yeah. Got it.
- [00:47:06] **🗣 SPEAKER_C**: Okay. Uh, let's now talk about the uhm potential improvements or problems.
- [00:47:16] **🗣 SPEAKER_C**: So basically we have the global conversion rate and we have three uhm dimensions of it, right? From MQL to application, from application to completion and from KYC success to closure.
- [00:47:30] **🗣 SPEAKER_B**: Yeah.
- [00:47:31] **🗣 SPEAKER_C**: And taking out the edge cases and uh, you know, escalations like you just described. So those are the three main areas that you monitor.

### [00:48:00]
- [00:48:20] **🗣 SPEAKER_C**: So the question is, where do we see...
- [00:48:22] **🗣 SPEAKER_B**: bottlenecks.
- [00:48:26] **🗣 SPEAKER_C**: Yeah.
- [00:48:27] **🗣 SPEAKER_B**: Yeah, the main bottlenecks are... because we tracked this for New York and Boston last week specifically. So the main area of improvement for New York, let me tell you where it was...
- [00:48:58] **🗣 SPEAKER_B**: Cool. Got it.

### [00:49:00]
- [00:49:00] **🗣 SPEAKER_B**: Right. So for New York, the main issue is... comparing, we are comparing here January and February 2025 with January and February 2026.
- [00:49:17] **🗣 SPEAKER_B**: So what we see is that from applications completed to applications paid, uh, there was a drop in New York for both months, January and February. So people tend to convert less in terms of paying for their application. That was an issue for New York.
- [00:49:30] **🗣 SPEAKER_B**: And then for Boston, we don't have application payments, obviously, so there's no data there. But what we saw that there was a drop from applications completed to applications approved. So the approval rate in in in Boston dropped significantly.
- [00:49:52] **🗣 SPEAKER_D**: I think it was because we introduced new requirements.
- [00:49:58] **🗣 SPEAKER_B**: Yes. Yeah.

### [00:50:00]
- [00:50:00] **🗣 Andreas Efthymiou**: insane some requirements there. We we are monitoring if this is the case.
- [00:50:00] **👁 Экран**: Экран видеоконференции в Google Meet. Видно 7 участников, включая спикеров Александра, Андреаса и Евгения. 
  - *Текст на экране*: Alexander Surnin, Andreas Efthymiou, Eugene Tymchenko, Oleksii Surnin, Alex Patsalo, Mike Grishchenko, Recording and taking notes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0201.jpg)
- [00:50:00] **👁 Экран**: Экран видеоконференции в Google Meet. Видны участники: Alexander Surmin, Eugene Tymchenko, Andreas Efthymiou, Mike Grishchenko и другие с аватарами или выключенными камерами. Andreas Efthymiou говорит. 
  - *Текст на экране*: Alexander Surmin, Eugene Tymchenko, Andreas Efthymiou, Alex Patsalo, Mike Grishchenko, Oleksii Surmin, Recording and taking notes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0201.jpg)

### [00:55:00]
- [00:55:34] **🗣 Mike Grishchenko**: And difference between June and Outpost uh that in June site is just 20 20 bucks uh application fee for Outpost is 20 bucks plus deposit for the first month. It's a big difference. It's uh 1500, 2000 or something on top.
- [00:55:52] **🗣 Eugene Tymchenko**: I believe now we're digging deep into June's, right? stats.
- [00:55:58] **🗣 Andreas Efthymiou**: Yeah, yeah, that's that's for that's for June specifically.

### [00:56:00]
- [00:56:02] **🗣 Andreas Efthymiou**: In outpost it's it's an altogether different process. Uh it's it's completely different process because they have to pay for the they have to pay the deposit before even the application is being processed.
- [00:56:13] **🗣 Eugene Tymchenko**: Yeah, yeah. Uh let's take outpost completely out of the equation um for now. Okay, uh so getting back to the bottleneck, uh where do you see
- [00:56:26] **🗣 Andreas Efthymiou**: It's different it's different for each city. That's why I stated these these numbers because it's different for each city. In New York, our bottleneck right now seems to be uh the payment issue, the payment of the application. That's the first bottleneck that we have.
- [00:56:45] **🗣 Andreas Efthymiou**: Um again, it remains to be seen what's going to happen with the removal of the call team because up until now, the call team handled most of New York's lacking details. So all these leads that didn't have this uh this missing information, they were being they were being handled by the call team. And then only once they were nurtured and becoming warm, they were passed to the sales agents to handle them.
- [00:56:46] **👁 Экран**: A Google Meet video call interface with multiple participants in a grid view. 
  - *Текст на экране*: Eugene Tymchenko, Andreas Efthymiou, Mike Grishchenko, Alex Patsalo, Alexander Surnin, Oleksii Surnin, Recording and taking notes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0228.jpg)
- [00:56:49] **🖱 UI-Действие**: Andreas Efthymiou starts sharing his screen.
  - *Результат*: The video call interface changes to show Andreas's screen, which displays a data dashboard.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0228.jpg)
- [00:56:56] **👁 Экран**: The view changes to a screen share. Andreas Efthymiou is presenting a dashboard titled 'Contact CR from >'. The dashboard shows a bar chart of conversion rates over several months. 
  - *Текст на экране*: Contact CR from >, Andreas Efthymiou (Presenting, annotating), Jan 2024, Feb 2024...
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0228.jpg)

### [00:57:00]
- [00:57:02] **🖱 UI-Действие**: Andreas clicks on a dropdown menu on the dashboard to select a metric for the chart.
  - *Результат*: The chart updates to show the conversion rate from leads with 'lacking details' to 'application started'.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0229.jpg)
- [00:57:19] **🗣 Andreas Efthymiou**: Now it's the sales agents who have to handle them, and it's a larger volume that they need to handle, especially coming April or May. And that's why it's very important for us that this part is being automated either by an AI solution or with another solution that we had discussed with Alex in the past.
- [00:57:39] **🗣 Andreas Efthymiou**: So we can still manage this bulk volume of leads before the agents pick them up.
- [00:57:47] **🗣 Eugene Tymchenko**: So the qualification, the qualification process.
- [00:57:51] **🗣 Andreas Efthymiou**: The qualification. The qualification was actually quite good um the last couple of months. I can even show you again some uh data here.
- [00:57:59] **🖱 UI-Действие**: Andreas adjusts the date range filter on the dashboard to include data from the previous year (2024).
  - *Результат*: The chart updates to show a year-over-year comparison, highlighting an improvement in conversion rates in the current year.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0232.jpg)

### [00:58:00]
- [00:58:02] **🗣 Eugene Tymchenko**: And you uh measure the qualification quality by how much how many how many leads from uh lacking data moved to the full data, right?
- [00:58:16] **🗣 Andreas Efthymiou**: Yeah, well we will we will we were starting with uh lacking details to applications started. And it was becoming better and better. We we started, I think around here or here with a new manager, with a new team leader with a call team and we saw this this spike.
- [00:58:48] **🗣 Andreas Efthymiou**: Um I think even compared to 2024, if we take it, it might be. Yeah, you see the difference already. So this year was a lot better than it was in 2024.

### [00:59:00]
- [00:59:04] **🗣 Andreas Efthymiou**: Now, without this team in place, I'm not sure if the conversion rates can remain at this level.
- [00:59:13] **🗣 Andreas Efthymiou**: So that that might become a bottleneck.
- [00:59:17] **🗣 Andreas Efthymiou**: But if we manage to handle this uh with a with a good automation, we might still, not, you know, even even improve that.
- [00:59:29] **🗣 Andreas Efthymiou**: So that's that's one of the challenges that we have. It's not a bottleneck yet, but it's a challenge. So the first challenge is how we can uh improve the conversion of this uh of this of this sales funnel from lacking details to application started. So that's the first challenge.
- [00:59:51] **🗣 Andreas Efthymiou**: Then the second challenge is about the payment of the applications. Mhm. Uh then the third one is the approval. And then we have adjusted our SOPs again with some conditional approvals.

### [01:00:00]
- [01:00:00] **👁 Экран**: Экран видеоконференции в Google Meet. Видны 6 участников: Alexander Surnin, Andreas Efthymiou, Eugene Tymchenko, Oleksii Surnin, Alex Patsalo, Mike Grischenchenko. 
  - *Текст на экране*: Alexander Surnin, Andreas Efthymiou, Eugene Tymchenko, Oleksii Surnin, Alex Patsalo, Mike Grischenchenko, Recording and taking notes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0241.jpg)
- [01:00:01] **👁 Экран**: Экран видеоконференции в формате сетки. Видно 7 участников, включая говорящего. 
  - *Текст на экране*: Eugene Tymchenko, Andreas Efthymiou, Mike Grishchenko, Alex Patsalo, Alexander Surmin, Oleksii Surmin, Recording and taking notes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0241.jpg)
- [01:00:10] **🗣 SPEAKER_A**: another bottleneck that we have is the, is the tours.
- [01:00:17] **🗣 SPEAKER_A**: Once a lead, sorry, once a lead is approved, they are eligible to take up to two in-person tours for the unit that they're interested in.
- [01:00:37] **🗣 SPEAKER_A**: Once they visit the units, there are cases that they're, what they see in reality doesn't meet their expectations and a lot of times they drop.
- [01:00:57] **🗣 SPEAKER_A**: They've even got approved and then what they see doesn't meet their expectations and basically, you know, a lot of them drop sometimes.

### [01:01:00]
- [01:01:46] **🗣 SPEAKER_A**: That's the next bottleneck. And then the final, final bottleneck is the payment of the upfront, is the upfront payments.
- [01:01:55] **🗣 SPEAKER_A**: There are cases where people will just not pay, either because they don't have the money or they don't have the, they're not willing to pay upfront, um, they change their mind. A lot of people go through the whole process automatically without going, without speaking with an agent at all, right? So it might be the case that they went through the whole process only to realize that they have to pay that much upfront and then they say, you know, I'll drop out, I don't have the funds.

### [01:02:00]
- [01:02:31] **🗣 SPEAKER_A**: So that's the final bottleneck that we have there.
- [01:02:42] **👁 Экран**: Участник Andreas Efthymiou начал демонстрацию своего экрана. В правой части экрана видны видео участников, в основной части — окно браузера. 
  - *Текст на экране*: Andreas Efthymiou (Presenting, annotating)
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0251.jpg)
- [01:02:42] **🖱 UI-Действие**: Andreas Efthymiou начал демонстрацию экрана.
  - *Результат*: На экране появился дашборд 'Lost Reasons'.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0251.jpg)
- [01:02:44] **👁 Экран**: На экране дашборд с заголовком 'Lost Reasons'. Отображается пустой график и фильтры: Date Range, City, Channel, Lost Reason, и другие. 
  - *Текст на экране*: Lost Reasons
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0251.jpg)
- [01:02:48] **🖱 UI-Действие**: Andreas кликнул на фильтр даты и выбрал диапазон с 1 января 2023 по 31 декабря 2023.
  - *Результат*: На графике отобразились данные за выбранный период.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0252.jpg)
- [01:02:57] **🖱 UI-Действие**: Andreas кликнул на фильтр 'City' и выбрал 'New York'.
  - *Результат*: Данные на графике отфильтровались для Нью-Йорка.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0252.jpg)

### [01:03:00]
- [01:03:16] **👁 Экран**: На экране дашборд 'Lost Reasons'. Построен столбчатый график, показывающий распределение причин отказа по месяцам. 
  - *Текст на экране*: Lost Reasons, Not Interested, No availability/Not a good fit, Price, Application rejected/failed, Decided to stay at current place
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0254.jpg)
- [01:03:25] **🖱 UI-Действие**: Andreas изменил группировку данных ('Group by') на 'Lost Reason'.
  - *Результат*: График изменился на 'stacked bar chart', показывая разбивку по причинам отказа в каждом месяце.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0254.jpg)
- [01:03:33] **🗣 SPEAKER_B**: Question, how do you collect data about why something happened? For example, why they didn't pay? Do you ask them, do you reach out to them or?
- [01:03:45] **🗣 SPEAKER_A**: Yeah, we do have, we do track in Juno OS, when we switch a lead to lost, we do have to report a reason.
- [01:03:45] **🖱 UI-Действие**: Andreas изменил тип графика, чтобы отображать процентное соотношение.
  - *Результат*: График изменился на '100% stacked bar chart'.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0256.jpg)
- [01:03:46] **👁 Экран**: На экране тот же дашборд, но вид графика изменен на '100% stacked bar chart', показывающий процентное соотношение причин отказа. 
  - *Текст на экране*: Lost Reasons, Not Interested, No availability/Not a good fit, Price, Application rejected/failed, Decided to stay at current place
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0256.jpg)
- [01:03:49] **👁 Экран**: Окно участника Eugene Tymchenko выключается, вместо него отображается синий экран с буквой 'E'. 
  - *Текст на экране*: Alexander Surnin, Andreas Efthymiou, E, Oleksii Surnin, Alex Patsalo, Mike Grischenchenko, Recording and taking notes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0256.jpg)
- [01:03:56] **🗣 SPEAKER_A**: It's mandatory in the system. But as you know, or as we can all assume, most of the times people just ghost us, if they don't want to proceed, they will not answer emails, phones, let alone give us a reason.

### [01:04:00]
- [01:04:20] **🗣 SPEAKER_A**: Or if they do, we do record it. If they don't, uh, we'll we'll label it as not interested. So anything, any lead that we have had contact with them uh in the past and finally they're switched to lost without giving us a specific reason, we'll label it as not interested because there's no other reason basically to to to provide.

### [01:05:00]
- [01:05:00] **🗣 Andreas Efthymiou**: is not interested.
- [01:05:03] **🗣 Eugene Tymchenko**: Right.
- [01:05:04] **🗣 Eugene Tymchenko**: What's the difference between not interested and no response?
- [01:05:08] **🗣 Andreas Efthymiou**: No response is they we they never responded back.
- [01:05:08] **👁 Экран**: The presenter hovers his mouse over the purple-colored section of the stacked bar chart, which corresponds to the 'No response' loss reason. 
  - *Текст на экране*: Lost Reasons
Date filter: Dec 1, 2022 - Nov 30, 2023
Legend: not_interested, price_issue, no_response, duplicate_lead
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0261.jpg)
- [01:05:13] **🗣 Andreas Efthymiou**: That's that's the major issue that we have here.
- [01:05:16] **🗣 Andreas Efthymiou**: So basically people send us request, we reach out to them either by phone or by email or by SMS. We also have numerous follow ups, manual plus the automated by email, but they simply don't respond here.
- [01:05:33] **🗣 Andreas Efthymiou**: So that's one in three. And then another one in four they ghost us.
- [01:05:39] **🗣 Mike Grishchenko**: They're just shoppers. Yeah, they uh fill, I don't know, dozens, dozens of uh different applications and never return to most of them.
- [01:05:51] **🗣 Mike Grishchenko**: Even more we have in in business development, sorry, sorry, Andreas, even more uh the kind this kind of uh issues we have for business development pipeline. They feel potential landlords feel the form and maybe just 20% of them uh continue uh conversation. 80% just disappear.

### [01:06:00]
- [01:06:51] **🗣 Eugene Tymchenko**: And I'm curious to understand what what uh in this case not interested mean then.
- [01:06:53] **👁 Экран**: The presenter continues to discuss the difference between 'not interested' and 'no response', hovering over the respective orange and purple sections of the chart. 
  - *Текст на экране*: Lost Reasons
Date filter: Dec 1, 2022 - Nov 30, 2023
Legend: not_interested, price_issue, no_response, duplicate_lead
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0268.jpg)
- [01:06:57] **🗣 Andreas Efthymiou**: Well, one thing is the difference between not interested and no response, no response is that they never responded back. We never even had one touch point of discussion.

### [01:07:00]
- [01:07:08] **🗣 Andreas Efthymiou**: So and not interested is we had some conversation, we discussed and then at one point they disappeared without providing any reason.
- [01:07:18] **🗣 Andreas Efthymiou**: Now, the rest are the reasons that they provided.
- [01:07:22] **🗣 Andreas Efthymiou**: So if we take that cumulatively over the year just to make it a bit more simple.
- [01:07:22] **🖱 UI-Действие**: Presenter clicks on the chart's time-grouping setting.
  - *Результат*: The chart display changes from multiple bars (grouped by month) to a single cumulative bar showing the total distribution for the year.
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0270.jpg)
- [01:07:34] **🗣 Andreas Efthymiou**: Uh so we have, you know, only 7% told us that it was a price issue. I can only assume that out of these, one in four, maybe half of them are also price related, but that's just an assumption, right?
- [01:07:46] **👁 Экран**: The chart view has changed from a monthly breakdown to a single cumulative bar for the entire selected period, showing the overall distribution of loss reasons. 
  - *Текст на экране*: Lost Reasons
1 items
Dec 1, 2022 → Nov 30, 2023
Legend: not_interested, price_issue, no_response, duplicate_lead
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0272.jpg)

### [01:08:00]
- [01:08:30] **🗣 Andreas Efthymiou**: So I would say about 20% is price related.
- [01:08:36] **🗣 Andreas Efthymiou**: Um and then we have another, you know, this 8%, these are duplicate leads. These are basically leads that came to us twice. Uh maybe one of their lead pages converted, maybe not, but these were duplicates.
- [01:08:48] **🗣 Eugene Tymchenko**: Yeah, the retake here.
- [01:08:55] **🗣 Eugene Tymchenko**: Gotcha. Um thanks a lot. That was helpful.
- [01:08:59] **🗣 Andreas Efthymiou**: Yeah.

### [01:09:00]
- [01:09:02] **🗣 Eugene Tymchenko**: Okay.
- [01:09:02] **👁 Экран**: The screen share ends. The view switches to the participant video feeds. 
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0277.jpg)

### [01:10:00]
- [01:10:00] **🗣 SPEAKER_A**: take photographs of the unit in the new state after the checkout, when it's ready to move in for the next move in. And we can offer them to send these photographs as well if they want. So it's the the the latest photographs, actual photographs from the unit.
- [01:10:15] **🗣 SPEAKER_A**: And that's basically what we can do to avoid uh in-person tours. Now, to be completely honest and frank, the other thing that we could do is not basically remove the in-person tours, but actually improve the quality of the leads. And this is something that we are actually doing a really hard work there with the team, the operations.
- [01:10:42] **🗣 SPEAKER_A**: We, we are working on a list of units that need to be uh upgraded in terms of um the photographs. Not just the photographs, let's take it from the base. So it's it's it's also the actual state of the unit. It might be the furniture, it might be, you know, several damages, it might be, you know, painting the the walls, changing, you know, appliances or anything basically.

### [01:11:00]
- [01:11:48] **🗣 SPEAKER_A**: And then taking better photographs so that people can have a better view of what the actual unit looks like. And then when we take them on tour, um make sure that it's in a good state so that leads don't turn it down.

### [01:12:00]
- [01:12:05] **🗣 SPEAKER_A**: So these are the three things that we need to to do. If you ask me, from a reverse order, basically upgrade them, refresh them, revamp them, and then take nice photographs, and then also keep redirecting them to the 3D tour that we have online. These three things I think is what we could do um now, the most direct one and impactful, as as we speak, being redirecting people to the 3D tour that we have.
- [01:12:30] **👁 Экран**: Экран видеоконференции в Google Meet. Видны три активных участника (Andreas Efthymiou, Eugene Tymchenko, Mike Grishchenko) и несколько участников с аватарами. Также присутствует плашка от AI-помощника Fathom Notetaker. 
  - *Текст на экране*: Andreas Efthymiou, Eugene Tymchenko, Mike Grishchenko, Alex Patsalo, Alexander Surmin, Oleksii Surmin, Recording and taking notes, Alexander's Fathom Notetaker
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0291.jpg)

### [01:13:00]
- [01:13:22] **🗣 SPEAKER_B**: Okay. Got it.
- [01:13:23] **🗣 SPEAKER_C**: Can I add one moment? Yeah, sure. Anyways, are we uh we should try to redirect them to 3D to 3D tour. And before uh June Homes had uh a dedicated team for 3D tour, for 3D tours.
- [01:13:39] **🗣 SPEAKER_C**: Uh it was a manager, I don't know, you you planned visit, you you connected together and go through this apartment. You can do as a potential tenant, you can do it by yourself, but you can be guided. And uh it was so it was good, but it was uh yeah, it uh was quite costly for us. And uh yeah, last week, yeah, we terminated the...

### [01:14:00]
- [01:14:07] **🗣 SPEAKER_A**: Mike, they were not even doing that for over a year and a half already. We we used to call them virtual tour agents, but they stopped doing the virtual tours over a year and a half ago. So they basically responded to other kind of questions regarding the policies, regarding the contracts. Because we realized that it took a lot of time to do something that they could do by themselves anyway.

### [01:15:00]
- [01:15:00] **🗣 SPEAKER_A**: apartment was not clean, I don't know, and uh and nobody uh cares about uh customer experience. They just getting money for the fact that they opened the door.
- [01:15:00] **👁 Экран**: Экран видеоконференции с 7 участниками. Активный спикер - Mike Grishchenko. 
  - *Текст на экране*: Andreas Efthymiou, Eugene Tymchenko, Mike Grishchenko, Alex Patsalo, Alexander Surmin, Oleksii Surmin, Alexander's Fathom Notetaker, Recording and taking notes
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0301.jpg)
- [01:15:11] **🗣 SPEAKER_A**: One, one other thing that comes in mind that could help us and we've discussed this with Alex as well, by the way, and the rest of the city leaders, uh is giving, I mean, the compensation of the tour agents being different, and basically providing them also with a with an incentive model where if they do the tour, they will get X amount, which is less than what they get now. But if they if they manage to... close the deal... yeah, complete the tour and then we sign the deal, then obviously their compensation will be different, higher. So this is also what we're thinking about the actual in-person tours.
- [01:15:14] **🗣 SPEAKER_A**: And now, yeah, we we are trying to optimize this this solution and using uh cross uh resources from from both companies and found one guy who are responsible for for the shooting on our side and he is making photos so three in person tours for for June homes now.
- [01:15:41] **🗣 SPEAKER_A**: And we see based on feedbacks I I getting from uh June agents, so it's it's much better than before.
- [01:15:51] **🗣 SPEAKER_A**: And with this so this different compensation for just a tour or tour with a deal closure in next, I don't know, week, two weeks. I don't know. So it should be other uh level of compensation and that people must be really motivated to to sell and to yeah, close the deal and finalize all things that customer get from from sales agent by the phone.
- [01:15:52] **🗣 SPEAKER_C**: And that in-person tours uh managers, I don't know how how to uh name them, they must be trained. They should be part of sales team and uh it's uh actually in at Outpost, we use sales agents for in-person tours.

### [01:16:00]
- [01:16:51] **🗣 SPEAKER_B**: Okay. That's uh good enough, I would say.
- [01:16:52] **🗣 SPEAKER_C**: Sales agents, most of them based in New York and uh who are covering this deal, they are uh so finalizing it in person uh at the uh apartment. And uh this this is extremely helpful for uh to improving our conversion rate. What we we had in on June's side, uh it was some third-party guys who just opened the door and say and say so you can go you can go and see. And you don't find a solution if something is uh not great.
- [01:16:55] **🗣 SPEAKER_C**: I'll just add one more challenge. Uh, I, I it's a good thing that you asked because I didn't mention it.

### [01:17:00]
- [01:17:03] **🗣 SPEAKER_C**: The no response rate. It's also a very big challenge for us. I mean, one in three, no response, um, is quite high. It used to be higher, I think it used to be around 40% in 2024.
- [01:17:21] **🗣 SPEAKER_C**: So it's better than it used to be, but it's still one in three is a lot. And even if, you know, it's, it's the norm, like Mike said, it might be the norm in B business development or in other functions as well. Um, one in three is still high and if there's anything we can do there, it would be really impactful, I think.
- [01:17:28] **🗣 SPEAKER_C**: Yeah, yeah. And uh it in many cases it was even worse. So we decreased our uh conversion by uh by in-person tours because of some...
- [01:17:38] **🗣 SPEAKER_C**: It could be what could would basically move the needle, uh, in terms of goals, goal attainment. Yep. Okay. Got it. Thank you so much.

### [01:18:00]
- [01:18:30] **🗣 SPEAKER_B**: Uh, okay, it's clear enough. We are slightly off time, but that was very helpful. Thank you, Andreas for a lot of information and we'll definitely, uh, get back to you with clarifying questions for sure.
- [01:18:49] **🗣 SPEAKER_B**: A couple of quick questions. So what do we need to do from here? We need one sales, active salesperson from your end also to talk with, that's number one. And number two, we got to ask this person to record the workflow, how do they work with leads from, you know, getting in the system to the closure.

### [01:19:00]
- [01:19:16] **🗣 SPEAKER_B**: That might not be one lead because there is a delay and it's a long-term process, but we need to, uh, get the perspective of each step in a funnel. So it could be different leads from different, uh, steps, but the full funnel, uh, with potential exceptions will be very helpful for us. So I will create a write up what exactly we expect and send it over to you. Uh, and yeah, just dedicate one person who will do that and we'll then interview this person once we see the recording.
- [01:19:27] **👁 Экран**: Участник Mike Grishchenko покинул встречу. Его видео-окно заменено на аватар. 
  - *Текст на экране*: Andreas Efthymiou, Eugene Tymchenko, Alex Patsalo, Alexander Surmin, Oleksii Surmin
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0318.jpg)
- [01:19:38] **👁 Экран**: Встречу покинули все участники, кроме Alexander Surmin и Oleksii Surmin. Затем они тоже выходят. 
  - *Текст на экране*: No one else is in this meeting
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0319.jpg)
- [01:19:40] **👁 Экран**: Экран завершения встречи с уведомлением о записи. 
  - *Текст на экране*: Recording and taking notes
FATHOM Get your AI Notetaker at fathom.video
  - 🖼 *Скриншот*: ![Скриншот](../../fragments/Impromptu Google Meet Meeting - Mar 5 2026/screenshots/screen_0319.jpg)

### [01:20:00]
- [01:20:36] **🗣 SPEAKER_B**: You can use whatever platform you need to do that. It should be just a video with the commentary of the recorder, basically, what they do and how they, and why they do it, so when we look at it, we can understand what's happening.
- [01:20:52] **🗣 SPEAKER_C**: Cool. Do you need that from one person or maybe two? I mean, is it just one?
- [01:20:58] **🗣 SPEAKER_B**: It doesn't matter. Uh, whatever, we just need the, we just need the funnel overview.

### [01:21:00]
- [01:21:44] **🗣 SPEAKER_C**: Okay.
- [01:21:45] **🗣 SPEAKER_B**: Final and the most importantly, the system overview, exactly what they do, where they click, where they pull the data and so on and so forth.
- [01:21:54] **🗣 SPEAKER_C**: Mhm. Okay. All right. Cool. Thank you so much. I'll send you the write-up later today. Uh, and yeah, let's keep in touch then.

### [01:22:00]
- [01:22:03] **🗣 SPEAKER_A**: Okay. Thanks a lot. Really appreciate it. Thank you. Bye bye. Thank you.