---
slug: "/post18"
title: "Как проверить подпись документа"
sort: "18"
---

Для проверки подписи достаточно выделить файл расширением .sig, который содержит электронную подпись. Никаких дополнительных настроек при проверке подписи производить не нужно.

***Важно!*** Для корректной проверки подписи у вас должны быть установлены корневой и промежуточные сертификаты подписанта документа. 


# Как посмотреть информацию о подписи в разделе Документы

1. Перейдите в раздел **Документы**.
2. Выделите подписанный документ в списке (с расширением .sig).
3. Нажмите на иконку просмотра ![view-button.jpg](./images/view-button.jpg "Кнопка быстрого просмотра"). 

# Как посмотреть информацию о подписи в мастерах

1. Перейдите в раздел **Документы**.
2. Выберите в списке файлы, подпись которых нужно проверить, или ничего не выбирайте, если хотите добавить файлы из системы.
3. Перейдите в мастер **Проверка и расшифрование** через левое боковое меню  или с помощью кнопки ![add-to-button.jpg](./images/add-to-button.jpg "Добавить в").
4. При необходимости добавьте документы в список.
5. Выделите один подписанный файл (с расширением .sig).
6. Нажмите на иконку просмотра ![view-button.jpg](./images/view-button.jpg "Кнопка быстрого просмотра"). 

На правой боковой панели отображается информация о свойствах подписи и о документе.

Результат проверки подписей в списке отображается в виде общего статуса: подпись действительна,  подпись недействительна, не удалось проверить подпись.

Если при проверке отделенной подписи исходный файл не будет найден автоматически, то возникнет уведомление об этом, которое вы можете посмотерть, нажав на иконку ![notifications-button.jpg](./images/notifications-button.jpg "События"). Для выбора исходного файла в правой боковой панели нажмите **Указать путь к файлу**.  Откроется файловый менеджер для выбора.

# Как посмотреть информацию о подписи документа с соподписями

Если документ подписан несколькими подписями (имеет соподписи), то для просмотра информации выберите подпись из списка.

# Как посмотреть информацию о подписи документа с штампами времени

Если документ подписан подписью со штампом времени, то для просмотра параметров штампа нажатием на иконку ![tsp-button.jpg](./images/tsp-button.jpg "Информация об ответе службы штампов времени") разверните информацию и выберите в выпадающем списке тип штампа времени.

# Как посмотреть информацию об усовершенствованной подписи

Если документ подписан усовершенствованной подписью, то для просмотра сведений о штампах времени в усовершенствованной подписи, нажатием на иконку ![tsp-button.jpg](./images/tsp-button.jpg "Информация об ответе службы штампов времени") разверните  информацию и выберите в выпадающем списке тип штампа времени.
Также в информации о подписи вы можете посмотреть информацию о OCSP ответе усовершенствованной подписи.

# Статус проверки подписи списка документов

1. Перейдите в раздел **Документы**.
2. Выберите в списке файлы, подпись которых нужно проверить, или ничего не выбирайте, если хотите добавить файлы из системы.
3. Перейдите в мастер **Проверка и расшифрование** через левое боковое меню  или с помощью кнопки ![add-to-button.jpg](./images/add-to-button.jpg "Добавить в").
4. При необходимости добавьте документы в список.

В списке документов в виде иконок отображается общий статус проверки подписи: подпись действительна,  подпись недействительна, не удалось проверить подпись.

Для более подробной информациио подписи откройте информацию о файле.

**ВОЗМОЖНЫЕ УВЕДОМЛЕНИЯ:**

1. Не удалось открыть файл - добавленные в мастер документы были удалены или по какой то причине доступны.
2. Не удалось найти исходный файл для подписи - в мастер добавлен файл с открепленной подписью без исходного документа.


**ИНСТРУКЦИИ ПО ТЕМЕ:**

1. [Как добавить документы в мастер.](docs\v3.0-Beta\004-documents\add-docs.md)
2. [Как посмотреть уведомления.](docs\v3.0-Beta\007-cryptoarm\notifications.md)
3. [Как установить корневой и промежуточный сертификаты.](docs\v3.0-Beta\005-certs\import-UC-certs.md)
4. [Действия с результатами операций.](docs\v3.0-Beta\004-documents\operations-result.md)

