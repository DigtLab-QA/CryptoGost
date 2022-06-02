---
slug: "/post19"
title: "Как проверить подпись документа"
sort: "19"
---

**ВАЖНО!**  Чтобы проверять подпись документов, у вас на рабочем месте должен быть установлен криптопровайдер КриптоПро CSP.  

Для проверки подписи достаточно выделить файл расширением .sig, который содержит электронную подпись. Никаких дополнительных настроек при проверке подписи производить не нужно.

***Примечание:*** для корректной проверки подписи у вас должны быть установлены корневой и промежуточные сертификаты подписанта документа. 


# Как посмотреть информацию о подписи документа во вкладке Архив

1. Перейдите во вкладку **Архив**.
2. Выделите в списке подписанный документ (с расширением .sig).
3. Нажмите на иконку просмотра ![view-button.jpg](./images/view-button.jpg "Кнопка быстрого просмотра"). 
4. На правой боковой панели отображается информация о свойствах подписи и о документе.

# Как посмотреть информацию о подписи документа в мастерах

1. Перейдите во вкладку **Архив**.
2. Выберите в списке файлы, подпись которых нужно проверить, или ничего не выбирайте, если хотите добавить файлы из системы.
3. Перейдите в мастер **Проверка и расшифрование** через левое боковое меню  или с помощью кнопки **Добавить в**.
4. При необходимости добавьте документы в список.
5. Выделите один подписанный файл (с расширением .sig).
6. Нажмите на иконку просмотра ![view-button.jpg](./images/view-button.jpg "Кнопка быстрого просмотра"). 
7. На правой боковой панели отображается информация о свойствах подписи и о документе.

# Статус проверки подписи списка документов

1. Перейдите во вкладку **Архив**.
2. Выберите в списке файлы, подпись которых нужно проверить, или ничего не выбирайте, если хотите добавить файлы из системы.
3. Перейдите в мастер **Проверка и расшифрование** через левое боковое меню  или с помощью кнопки **Добавить в**.
4. При необходимости добавьте документы в список.
5. В списке документов отображается общий статус проверки подписи, ктоорый дублируется в виде иконок: подпись действительна,  подпись недействительна, не удалось проверить подпись.
6. Для более подробной информацию подписи откройте информацию о файле.

# Как посмотреть информацию о подписи документа с соподписями

Если документ подписан несколькими подписями (имеет соподписи), то для просмотра конкретной подписи в правой боковой панели в информации о подписи выберите подпись из списка.

# Как посмотреть информацию о подписи документа с штампами времени

Если документ подписан подписью со штампом времени, то для просмотра параметров штампа:
1. Разверните информацию, нажав на иконку ![tsp-button.jpg](./images/tsp-button.jpg "Информация об ответе службы штампов времени").
2. Выберите в выпадающем списке тип штампа времени.

# Как посмотреть информацию об усовершенствованной подписи

Если документ подписан усовершенствованной подписью, то для просмотра сведений о штампах времени в усовершенствованной подписи:  
1. Разверните информацию, нажав на иконку ![tsp-button.jpg](./images/tsp-button.jpg "Информация об ответе службы штампов времени").  
2. Выберите в выпадающем списке тип штампа времени.  

Также в информации о подписи вы можете посмотреть информацию о OCSP ответе усовершенствованной подписи.

Если при проверке отделенной подписи исходный файл не будет найден автоматически, то возникнет уведомление об этом, которое вы можете посмотреть, нажав на иконку ![notifications-button.jpg](./images/notifications-button.jpg "События"). Для выбора исходного файла в правой боковой панели нажмите **Указать путь к файлу**. Откроется файловый менеджер для выбора.

**ВОЗМОЖНЫЕ УВЕДОМЛЕНИЯ:**

1. Не удалось открыть файл — добавленные в мастер документы были удалены или по какой-то причине доступны.
2. Не удалось найти исходный файл для подписи — в мастер добавлен файл с отсоединённой подписью без исходного документа.


**ИНСТРУКЦИИ ПО ТЕМЕ:**

1. [Как добавить документы в мастер.](https://docs.cryptoarm.ru/06-v3.2/004-documents/12-add-docs)  
2. [Как посмотреть уведомления.](https://docs.cryptoarm.ru/06-v3.2/007-cryptoarm/02-notifications)  
3. [Как установить корневой и промежуточный сертификаты.](https://docs.cryptoarm.ru/06-v3.2/008-certs/05-import-UC-certs)  
4. [Действия с результатами операций.](https://docs.cryptoarm.ru/06-v3.2/004-documents/23-operations-result)  
