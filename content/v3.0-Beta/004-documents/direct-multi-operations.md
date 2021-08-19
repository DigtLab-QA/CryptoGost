---
slug: "/post21"
title: "Как выполнять прямые групповые операции"
sort: "21"
---

Вы можете выполнять подпись, архивирование и шифрование за одну операцию. Это будут прямые групповые операции. Оны выполняются в мастере **Подпись и шифрование**.
Вы можете комбинировать операции. Например, выполнить только подпись и архивирование или подпись и шифрование.

Вы можете выбрать следующие комбинации операций:
- **Подпись и архивирование** – документ сначала подписывается, затем архивируется;
- **Подпись и шифрование** – документ сначала подписывается, затем шифруется.
- **Архивирование и шифрование** – документ сначала архивируется, затем шифруется.
- **Подпись, архивирование и шифрование** – документ сначала подписывается, затем архивируется, потом шифруется

1. Откройте мастер **Подписи и шифрования**. Перейти в мастер вы можете из раздела  **Документы** через левое боковое меню  или с помощью кнопки ![add-to-button.jpg](./images/add-to-button.jpg "Добавить в"). 
2. Добавьте документы в список, одним из способов:
   - перетащите документы или папки с документами из файлового менеджера в область формирования списка файлов. При перетаскивании папки  файлы добавляются одноуровневым списком.
   - нажмите кнопку **Загрузить с компьютера** для пустого приска файлов, или  кнопку ![add-file-button.jpg](./images/add-file-button.jpg "Добавить файл") на панели действий, а затем в файловом менеджере выберите необходимые документы.
   - нажмите **Добавить из Архива** для пустого списка, или  кнопку ![from-archive-button.jpg](./images/from-archive-button.jpg "Из Архива") на панели действий, если в списке документы уже добавлены.
3. Выберите профиль подписи, в котором заданы выбраны операции и заданы настройки операций.  При выборе профиля в мастере автоматически заполняются **Настройки операций**, каталоги сохранения результатов операций.
 Или включите на верхней панели необходимые операции. В зависимости от этого в **Настройках операций** становятся доступны дополнительные параметры.
4. Заполните необходимые параметры операций. Настройки операций в мастере не изменяют настройки в выбранном профиле подписи.
5. Нажмите кнопку ![execute-button.jpg](./images/execute-button.jpg "Выполнить"), которая становится доступна после выбора всех параметров.

На вкладке **Подпись и шифрование** отображаются ход и результаты выполнения операций.

При успешном выполнении операций файлы сохраняются в заданном каталоге, если выбран каталог для сохранения результатов. Или рядом с исходным файлом, если каталог не задан. Если установлен флаг **Создать копию в Архиве**, то копия документов сохраняется в специальную папку, документы которой доступны в разделе **Архив** вкладки **Документы**.

Если какие-то документы не удалось обработать, то опеация считается выполненной с ошибками. Вы можете посмотреть какие файлы обработаны успешно, а какие с ошибками. 
Ошибки при операциях выводятся как уведомления. Вы можете их посмотерть, нажав на иконку ![notifications-button.jpg](./images/notifications-button.jpg "События"). Для просмотра подробного описания ошибки или отправки в техническую поддержку нажмите ![to-log-button.jpg](./images/to-log-button.jpg "Перейти в журнал") в правой боковой панели списка уведомлений.

***Важно!*** При групповой операции подпись и шифрование, если в настройках подписи выбрана отделенная подпись, то в реузальтате создается архив, содержащий исходный файл и файл подписи, который потом шифруется.

**ВОЗМОЖНЫЕ УВЕДОМЛЕНИЯ:**

1. Не удалось открыть файл - добавленные в мастер документы были удалены или по какой то причине доступны, добавлен пустой файл (с нулевым размером).
2. Не удалось подписать файл - ошибка в адресе службы штампов времени, если подпись со штампом или усовершенствованная. Ошибка подключения к  прокси-серверу. 
3. Не удалось подписать файл - ошибки связанные с истекшими лицензиями КриптоПро TSP Client, OCSP Client, КриптоПро CSP.


**ИНСТРУКЦИИ ПО ТЕМЕ:**
1. [Как создать профиль подписи.](docs\v3.0-Beta\004-documents\create-profile.md)
2. [Как переключаться между профилями подписи.](docs\v3.0-Beta\004-documents\select-profile.md)
3. [Как добавить документы в мастер.](docs\v3.0-Beta\004-documents\add-docs.md)
4. [Как посмотреть уведомления.](docs\v3.0-Beta\007-cryptoarm\notifications.md)
5. [Действия с результатами операций.](docs\v3.0-Beta\004-documents\operations-result.md)
