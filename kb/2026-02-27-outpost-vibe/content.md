# 2026-02-27 - Outpost+Vibe

## 🎯 TL;DR (Executive Summary)
Встреча была посвящена обсуждению процессов продаж и маркетинга после слияния Outpost и Juno с целью выявления возможностей для AI-автоматизации. Ключевые проблемы, которые обсуждались: низкое качество и недостаточная верификация лидов, неэффективное распределение заявок и высокий (до 9%) отток клиентов на финальном этапе оплаты. Было принято решение сфокусироваться на внедрении скоринга и умной маршрутизации лидов, объединении каналов коммуникации в единую систему и создании дашбордов для мониторинга эффективности. Запланированы следующие шаги, включая переход на сервис Obligo для депозитов, подготовку демо пользовательских потоков и проведение «тайного шоппинга» для выявления слабых мест.

## 🛠 Упомянутые системы (Entities)
- **CRM/Tools**: HubSpot, Stripe, Obligo, apartments.com
- **Метрики**: response time, conversion rate, lead qualification, drop-off rate (отток клиентов), sales performance

## 📌 Ключевые решения и инсайты
- **Проблема качества лидов**: Три основные проблемы в продажах — необходимость верификации и сбора недостающих данных, неквалифицированные лиды и лиды, не выходящие на связь (non-responsive). AI может помочь в автоматизации сбора данных и расширении окна для follow-up.
- **"Умное" распределение лидов**: Текущие системы распределения лидов неэффективны. Необходимо внедрить «smart»-дистрибуцию, которая учитывает перформанс сейлзов, их специализацию (короткие vs. длинные сделки) и загрузку, чтобы повысить общую конверсию.
- **Отток на этапе оплаты**: На финальном шаге воронки отваливается ~9% клиентов, особенно в процессе Junna, где нет предварительного депозита. Практика Outpost по раннему сбору депозита является более эффективной; планируется внедрение сервиса Obligo для унификации и улучшения этого процесса.
- **Единый центр коммуникаций**: Коммуникация с клиентами ведётся через множество каналов (SMS, email, звонки), что создаёт разрывы в общении. Объединение всех взаимодействий в единую ленту внутри CRM является ключевой точкой роста.
- **Прозрачность и мониторинг**: Для эффективного управления командами продаж необходимы прозрачные дашборды в реальном времени, отслеживающие ключевые метрики, такие как время ответа (response time) и активность сейлз-менеджеров.
- **Различия в Customer Journey**: Процессы Outpost и Junna значительно отличаются. Outpost имеет sales-driven модель с самого начала, в то время как Junna позволяет пользователям проходить верификацию без выбора конкретного жилья, что требует разных подходов к квалификации и дальнейшей работе с лидом.

## 📄 Полный контент
# 2026-02-27 - Outpost+Vibe

**Meeting:** [Outpost+Vibe](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06)  
**Event time:** 2026-02-27 11:00 AM - 12:00 PM (PST)  
**Platform:** Meet  
**Participants:** Alex Kos, Alex Patsalo, Alexander Surnin, Eugene Tymchenko, Mike Grishchenko, Oleksii Surnin, Jack Molchanov

## ✨ Summary

Встреча была посвящена состоянию и задачам по продажам и маркетингу после слияния Outpost и Juno с фокусом на возможностях автоматизации с помощью AI. Участники представили роли и команды — продуктовый и клиентский менеджмент (Женя Тимченко), команда AI/automation (Алекс, Леша) и представители Outpost/Juno по маркетингу и сейлзу (Алекс, Миша, Саша) — и описали текущую структуру продаж: около 35 человек, три команды (две в Нью‑Йорке, одна в Бостоне), каждый менеджер подчинён VP of Sales Андреасу.  
Дискуссия сосредоточилась на трёх ключевых проблемах: недостаточная верификация лидов и сбор данных, неквалифицированные/non‑responsive лиды и большой отток на финальном этапе бронирования. Обсуждали скоринг и маршрутизацию лидов по датам заезда, «smart» распределение с учётом перформанса, объединение коммуникаций (SMS, email, звонки) в единую систему и прозрачные дашборды для мониторинга response‑time и активности сейлзов. На примере customer journey Outpost прошли конверсию от лидов (сайт/платформы) через HubSpot и CRM до бронирования, оплаты, проверки документов и доступа клиента. Сравнение с Junna выявило преимущество практики взимания депозита у Outpost; был запланирован переход на сервис Obligo с 1 марта, а также подготовка демонстраций пользовательских потоков и «тайный шоппинг» для проверки текущих точек трения.

## 💬 Chapters & Topics

### Приветствие и проверка участников [(01:14)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Участники здравствовали и уточнили присутствующих, отмечено, что Женя опоздает; затем предложено начинать встречу без полного состава.

### Представления участников и роли [(01:46)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Женя Тимченко представил себя и роль PLUS Vibe в AI-имплементации, описал свою продуктовую и клиентскую функцию и техническую команду (Саша, Леша). Участники Outpost/Juno кратко описали свои обязанности в маркетинге, сейлзах и интеграции процессов (Алекс, Миша, Саша).

### Формат встречи и цель обсуждения [(05:06)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Женя пояснил цель — услышать команду по sales/marketing, описать цели и проблемы в свободной форме и далее детализировать вопросы по автоматизации и AI.

### Видение автоматизации и ограничения процесса бронирования [(05:34)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Алекс подробно изложил «мечту» об автоматическом sales-процессе без человека, но обозначил реальные ограничения: необходимость доверия клиента, офлайн-показы и потребность в коммуникации при long-term booking.

*   Команда стремится к автоматизации значительной части sales-journey с помощью AI, но признаёт, что полная автоматизация long-term booking проблематична из-за потребности клиента в общении и доверии. [(05:40)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

### Проблемы лидогенерации и обработки лидов [(09:08)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Обсуждены основные боли: неквалифицированные лиды, lacking detail leads, non-responsive leads, и идея расширить follow-up окно; отмечено, что AI может обрабатывать часть коммуникаций и реанимировать лиды.

*   Три ключевые проблемы — верификация и сбор недостающих данных, неквалифицированные лиды и non-responsive лиды — были выделены как приоритетные для AI-решений. [(09:08)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   Имеется необходимость расширить окно follow-up выше текущих 4–5 дней, чтобы избежать преждевременной квалификации лидов как мёртвых. [(11:48)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

### Скоринг, маршрутизация и дистрибуция лидов [(14:12)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Джек предложил скоринг лидов по дате заезда и автоматическое распределение дальних дат на менее ресурсоёмкие пути; обсуждалась необходимость модели дистрибуции и учёта шифтов и перформанса при распределении лидов.

*   Предложен скоринг лидов по дате заезда и перенаправление дальних дат на автоматическую коммуникацию для оптимизации ресурсов. [(14:19)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   Подчёркнута необходимость «smart»-дистрибуции лидов с учётом перформанса и типа сделок (короткие vs длинные) для повышения эффективности сейлзов. [(18:20)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

### Метрики, мотивация и мониторинг эффективности сейлзов [(19:59)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Миша и Алекс подняли вопросы smart-дистрибуции с учётом навыков закрывать длинные/короткие сделки, изменения мотивации сейлзов на результат и создание дашбордов в реальном времени для мониторинга response time и активности сотрудников.

*   Запрошены прозрачные дашборды и метрики в реальном времени для менеджеров, включая время ответа и активность сейлзов. [(21:04)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

### Организационная структура команд и численность [(22:49)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Обсуждение текущего количества сотрудников и структуры команд: подтверждён показатель около 35 человек и существование трёх сейлз‑команд. Уточнено историческое снижение числа городов/команд и распределение команд между Нью‑Йорком и Бостоном. \[167–190\]

*   В команде примерно 35 человек и формально три команды: две в Нью‑Йорке и одна в Бостоне. [(23:08)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

### Менеджмент, уровни отчётности и support [(24:37)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Прояснены уровни менеджмента (менеджеры команд, их менеджер, Саша/Андреас как VP), обсуждена роль AI и Sales Support для поддержки менеджмента, а также отдельность Customer Support и переход клиентов в операционный департамент при создании move‑in task. \[191–239\]

*   Менеджеры трёх команд подчиняются VP of Sales — Андреасу. [(25:38)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   Возможность одного человека управлять всеми тремя командами рассматривается как осуществимая при поддержке AI и sales support. [(26:45)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   Customer support и онбординг отделены от сейлз; онбординг и move‑in переходят в отдельный департамент под руководством операционного директора (Тина). [(29:19)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

### Маркетинг, прайсинг и централизованная работа [(29:53)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Подтверждено, что маркетинг и прайсинг работают под Alex и объединены с сейлз для согласованности; эта единая команда обслуживает все три сейлз‑потока и вносит изменения в воронки и сайты централизованно. \[240–261\]

*   Маркетинг и прайсинг объединены с сейлз под одной управленческой областью и централизованно обслуживают все потоки и веб‑сайты. [(30:13)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

### Путь клиента, CRM и операционные флоу (Outpost) [(31:06)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Детализирован customer journey: лиды приходят с сайта и платформ, попадают в HubSpot и CRM, sales формирует офер, создаёт бронирование и запускает sales flow с application → оплата invoice → депозит; параллельно идут проверки через Stripe и кредитные бюро, затем создание move‑in task и выдача доступа в личный кабинет перед заездом; текущая модель в основном sales‑driven. \[262–369\]

*   Основной канал лидогенерации для Outpost — сайт; данные идут в HubSpot, затем в CRM, где sales ведёт лиды вручную с частичным автоматизированным follow‑up. [(32:44)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

### Вводные и переход к sales pipeline [(45:19)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Короткие реплики участников и переход к обзору sales pipeline Junna/Outpost для формирования общей картины процесса и следующих шагов.

### Проблемы воронки и предложение AI-решений [(45:58)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Обсуждение точек трения в воронке, желания применять AI для измерения сезонных и шаговых вариаций и примера 9% оттока на последнем шаге.

*   AI следует применять для измерения и уменьшения фрикций в воронке продаж [(46:13)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   На финальном степе воронки наблюдается \~9% оттока клиентов, который нужно сократить [(46:36)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

### Причины оттока и влияние предоплат (Outpost vs Junna) [(47:13)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Сравнение практик: Outpost собирает депозиты и частичные платежи, Junna часто не собирает ничего до финала, что приводит к большему оттоку и сложностям с collection.

*   Outpost снижает отток за счёт раннего сбора депозитов и частичной предоплаты [(49:20)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   Планируется подключение сервиса Obligo с 1 марта для уменьшения проблем с депозитами [(49:49)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   У Junna отсутствие предоплаты увеличивает риск неуплаты по крупным финальным инвойсам [(50:47)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

### Коммуникации, CRM и объединение каналов [(51:24)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Описание текущих каналов (SMS, email, звонки), задача склеить их в единый поток, упоминание HubSpot как частичного решения и потребность в единой ленте коммуникаций.

*   Объединение всех каналов коммуникации в единую ленту считается ключевой точкой роста для улучшения collection-процесса [(53:11)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

### Различия пользовательских путей и логики выбора жилья [(53:25)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Обсуждение логики Junna, где пользователь может заполнить профиль без выбора опции, и как это влияет на квалификацию и рекомендации по бюджету.

### Демонстрации, «тайный шоппинг» и тестовые проходы [(57:36)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Запрос провести несколько демо-флоу и виртуальных клиентов, решение пройти воркфлоу как реальный клиент и обсуждение потенциальных затрат для тестирования.

*   Запрошены демонстрации пользовательских flow и проведение тестовых кейсов (включая тайный шоппинг) для проверки end-to-end процессов [(57:44)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

### Закрытие и дальнейшие взаимодействия [(59:36)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

Финальные уточнения по оплате тестовых действий, договорённость о дальнейшем техническом обсуждении и завершающие слова участников.

## ✅ Action Items

*   **Team (техническая команда и Саша):** Подготовьте детальное обсуждение по триггерам, ивентам и тому, что отправлять в AI-компонент для интеграции [(45:26)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   **Alex Kos / продуктовая команда:** Запустите подключение сервиса Obligo и отслеживание эффекта на депозиты, начиная с 1 марта [(49:49)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   **CRM/IT команда:** Исследуйте и предложите решение по объединению коммуникаций в одном интерфейсе (HubSpot как временный вариант) [(53:25)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   **Alexander Surnin:** Подготовь несколько демо-проходов пользовательских flow для внешнего и внутреннего просмотра [(57:44)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   **Alex Patsalo:** Организуй интервью с узловыми командами Outpost/Junna для документирования обработки лидов [(58:15)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   **Eugene Tymchenko:** Пройди полный воркфлоу как реальный клиент (тайный шоппинг) и зафиксируй точки оттока [(59:12)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

## 🔍 Key Questions

*   Сколько сейчас вообще команд и менеджеров? [(22:59)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   Кому подчиняются менеджеры этих трёх команд? [(25:30)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   Customer Support включён в сейлз или это отдельный департамент? [(29:19)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   Где находится маркетинг и как он связан с сейлз и прайсингом? [(30:09)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   Откуда клиенты начинают бронирование и как дальше идёт коммуникация? [(38:37)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   Когда клиент получает личный кабинет и как устроен онбординг? [(39:35)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   Коммуникация с клиентом всегда сейлз‑дривен или может быть полностью автоматизирована? [(44:20)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   Происходит ли 9% отвалов платежей из-за специфики Outpost или это общая проблема? [(48:55)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)
*   В какой момент в процессе Junna появляется роль sales? [(54:29)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=notes)

## 🗣 Transcript

[(01:14)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=transcript) UNKNOWN\_SPEAKER: Привет, привет.  
[(01:16)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=transcript) UNKNOWN\_SPEAKER: Окей.  
[(01:17)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=transcript) Alex Kos: Алексей. Я думал еще один Александр. Я думал такое было.  
[(01:25)](https://app.read.ai/analytics/meetings/01KJG76SWXWYHSSW2G6ETKDN06?section=transcript) UNKNOWN\_SPEAKER: Алексей сломал парадигму.  
... [and so on, full transcript included] ...