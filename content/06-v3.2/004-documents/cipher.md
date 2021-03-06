---
slug: "/post16"
title: "Как зашифровать документ"
sort: "16"
---

**ВАЖНО!**  Чтобы шифровать документы, у вас на рабочем месте должен быть установлен криптопровайдер КриптоПро CSP.  

Чтобы шифровать документы нужно установить в хранилище Другие пользователи сертификат или привязать сертификат к контакту, в адрес которого будет проводится шифрование.  

Перейти в мастер **Подписи и шифрования** вы можете из раздела  **Документы**.

Вы можете зашифровать любые произвольные документы, загрузив их с помощью drag-and-drop, либо выбрать документы из раздела **Документы**.

#  Как зашифровать документ, используя профиль

1. Перейдите в раздел **Документы**.
2. Выберите в списке документы, которые нужно зашифровать, или ничего не выбирайте, если хотите добавить документы из системы.
3. Перейдите в мастер **Подписи и шифрования** через левое боковое меню  или с помощью кнопки **Добавить в**.
4. Выберите профиль, в котором заданы настройки шифрования. 
При выборе профиля в мастере автоматически заполняются **Настройки операций**, **Сертификаты шифрования**, каталоги сохранения зашифрованных файлов.
5. При необходимости, добавьте документы в список.
6. Нажмите кнопку **Выполнить**.

#  Как зашифровать документ, используя настройки операций в мастере, не изменяя выбранного профиля
Если вы хотите изменить параметры шифрования, не изменяя настройки в профиле, то воспользуйтесь настройками в открытом мастере.

1. Перейдите в раздел **Документы**.
2. Выберите в списке документы, которые нужно зашифровать, или ничего не выбирайте, если хотите добавить документы из системы.
3. Перейдите в мастер **Подписи и шифрования** через левое боковое меню  или с помощью кнопки **Добавить в**.
4. Включите на верхней панели операцию **Зашифровать**. В **Настройках операций** становятся доступны параметры шифрования.  
5. Установите параметры шифрования (алгоритм, кодировку, удаление исходных файлов после шифрования), выберите сертификаты шифрования и настройте каталоги сохранения зашифрованных файлов.  
При шифровании допускается выбор нескольких сертификатов из категории **Личные** и **Других пользователей** и **Контактов**, у которых есть привязанные сертификаты. Для этого нажмите на поле **Сертификаты шифрования**, в развернувшемся списке выберите сертификаты и/или контакты. Если в списке нет подходящих сертификатов, то нажмите **Показать все сертификаты**, и в открывшейся боковой панели на соответствующих вкладках выберите нужные сертификаты и/или контакты.
6. При необходимости, добавьте документы в список.
7. Нажмите кнопку **Выполнить**.

# Результат выполнения операции

На вкладке **Подпись и шифрование** отображаются ход и результаты выполнения операции.

При успешном выполнении операции зашифрованные файлы сохраняются в заданном каталоге, если выбран каталог для сохранения результатов. Или рядом с исходным файлом, если каталог не задан.  
Если установлен флаг **Создать копию в Документах**, то копия зашифрованного файла сохраняется в папке пользователя. Файлы из данного каталога доступны в разделе **Документы**.  
Если в параметрах шифрования была выбрана опция **Удалить файлы после шифрования**, то в результате операции будут только полученные зашифрованные файлы, промежуточные файлы и оригиналы документов удаляются.  

Если какие-то документы не удалось зашифровать, то операция считается выполненной с ошибками. Вы можете посмотреть какие файлы зашифрованы успешно, а какие с ошибками. 
Ошибки при операции выводятся как уведомления. Вы можете их посмотреть, нажав на иконку ![notifications-button.jpg](./images/notifications-button.jpg "События").  
Для просмотра подробного описания ошибки или отправки в техническую поддержку нажмите кнопку **Перейти в журнал** в правой боковой панели списка уведомлений.

**ВОЗМОЖНЫЕ УВЕДОМЛЕНИЯ:**  

1. Не удалось зашифровать файл - добавленные в мастер документы были удалены или по какой то причине доступны, добавлен пустой файл (с нулевым размером).

**ИНСТРУКЦИИ ПО ТЕМЕ:**

1. [Как создать профиль подписи.](https://docs.cryptoarm.ru/06-v3.2-Beta/004-documents/create-profile)  
2. [Как переключаться между профилями подписи.](https://docs.cryptoarm.ru/06-v3.2-Beta/004-documents/select-profile)  
3. [Как добавить документы в мастер.](https://docs.cryptoarm.ru/06-v3.2-Beta/004-documents/add-docs)  
4. [Как выбрать сертификаты шифрования.](https://docs.cryptoarm.ru/06-v3.2-Beta/004-documents/select-cipher-certs)  
5. [Как посмотреть уведомления.](https://docs.cryptoarm.ru/06-v3.2-Beta/007-cryptoarm/notifications)  
6. [Действия с результатами операций.](https://docs.cryptoarm.ru/06-v3.2-Beta/004-documents/operations-result)  
7. [Как импортировать сертификаты других пользователей.](https://docs.cryptoarm.ru/06-v3.2-Beta/008-certs/import-certs)  
8. [Как привязать сертификат к контакту.](https://docs.cryptoarm.ru/06-v3.2-Beta/006-contacts/link-contact-cert)  