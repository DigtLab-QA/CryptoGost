---
slug: "/post23"
title: "Как выполнять обратные групповые операции"
sort: "23"
---

Вы можете выполнять расшифрование, разархивирование, проверку и снятие подписи. Для их выполнения предназначен мастер **Проверки и расшифрования**.

**ВАЖНО!**  Чтобы проверять подпись и расшифровывать документы, у вас на рабочем месте должен быть установлен криптопровайдер КриптоПро CSP.  
Чтобы расшифровывать документы нужно установить в Личное хранилище сертификат с закрытым ключом.  
Для корректной проверки подписи у вас должны быть установлены корневой и промежуточные сертификаты подписанта документа. 

По итогам проверки подписанных документов в списке выводится информация о подписи.  
По итогам расшифрования и разархивирования автоматически раскрывается первый уровень вложенности.  
Если вам требуется получить исходный документ, необходимо перейти на уровень ниже, нажав на кнопку ![remove-button.jpg](./images/remove-button.jpg "Перейти на уровень ниже") слева от файла. В этом случае появится текстовка совершаемой операции - "Расшифрован", "Разархивирован", "Результат проверки подписи". И по итогу выполнения операции в раскрывшейся панели станет доступным исходный документ.

Для просмотра информации о подписи выделите один документ в списке и нажмите на иконку просмотра ![view-button.jpg](./images/view-button.jpg "Кнопка быстрого просмотра").

Для выполнения обратных операций выбор профиля подписи и настройка параметров операций не требуется.

1. Откройте мастер **Проверки и расшифрования**. Перейти в мастер вы можете из раздела  **Документы** через левое боковое меню  или с помощью кнопки **Добавить в**. 
2. Добавьте документы в список, одним из способов:
   - перетащите документы или папки с документами из файлового менеджера в область формирования списка файлов. При перетаскивании папки и файлы добавляются одноуровневым списком.
   - нажмите кнопку **Загрузить с компьютера** для пустого списка файлов, или  кнопку **Добавить файлы** на панели действий, а затем в файловом менеджере выберите необходимые документы.
   - нажмите **Добавить из Документов** для пустого списка, или  кнопку **Добавить файлы** на панели действий, если в списке документы уже добавлены.
3. Нажмите кнопку **Выполнить**.

На вкладке **Проверка и расшифрование** отображаются ход и результаты выполнения операций.

При успешном выполнении операций полученные документы сохраняются во временной папке и удаляются после выполнения другой операции. Вы можете сохранить полученные документы на компьютере или в каталоге Документы, нажав **Сохранить** и выбрав действие в меню **На компьютере** или **В Документы**.  

Если какие-то документы не удалось обработать, то операция считается выполненной с ошибками. Вы можете посмотреть какие файлы обработаны успешно, а какие с ошибками.  
Ошибки при операции выводятся как уведомления. Вы можете их посмотреть, нажав на иконку ![notifications-button.jpg](./images/notifications-button.jpg "События"). Для просмотра подробного описания ошибки или отправки в техническую поддержку нажмите кнопку **Перейти в журнал** в правой боковой панели списка уведомлений.

**ВОЗМОЖНЫЕ УВЕДОМЛЕНИЯ:**

1. Не удалось открыть файл - добавленные в мастер документы были удалены или по какой-то причине доступны, добавлен пустой файл (с нулевым размером).
2. Не удалось расшифровать файл - не найден сертификат для расшифрования. 
3. Не удалось расшифровать файл - ошибки связанные с истекшими лицензиями КриптоПро CSP.
4. Нельзя снять откреплённую подпись с файла - при открепленной подписи оригинал документа и так находится в отдельном файле.

**ИНСТРУКЦИИ ПО ТЕМЕ:**  

1. [Как добавить документы в мастер.](https://docs.cryptoarm.ru/06-v3.2-Beta/004-documents/add-docs)  
4. [Как посмотреть уведомления.](https://docs.cryptoarm.ru/06-v3.2-Beta/007-cryptoarm/notifications)  
5. [Как проверить подпись.](https://docs.cryptoarm.ru/06-v3.2-Beta/004-documents/verify)  
6. [Действия с результатами операций.](https://docs.cryptoarm.ru/06-v3.2-Beta/004-documents/operations-result)  
7. [Как установить личный сертификат.](https://docs.cryptoarm.ru/06-v3.2-Beta/008-certs/import-my-cert)  
