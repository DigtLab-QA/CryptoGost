---
slug: "/post8"
title: "Получение сертификата через сервис УЦ"
sort: "08"
---

Для создания запроса и выпуска сертификата нужно добавить сервис подключения к КриптоПро УЦ 2.0. А потом, используя это подключение, создать запрос на сертификат.

## Добавление нового сервиса

Создать подключение можно, выбрав опцию **Получить сертификат через сервис УЦ,** в списке **Личных сертификатов** или в списке **Запросов** при добавлении сертификата.

![uc2_menu.png](./images/uc2_menu.png "Добавление подключения в списке Личных сертификатов")

Создать подключение можно, выбрав опцию **Подключить сервис УЦ,** при добавлении сертификата в списке **Доверенных корневых сертификатов**.

![uc2_root.png](./images/uc2_root.png "Добавление подключения в списке Корневых сертификатов")

В открывшемся окне установить флаг **Добавление нового сервиса** и нажать кнопку **Готово**.

![uc2_new.png](./images/uc2_new.png "Добавление нового сервиса")

Открывается форма ввода полей для регистрации сервиса.

![uc2_register.png](./images/uc2_register.png "Форма ввода полей для создания сервиса")

Если пользователь ранее не был не зарегистрирован в УЦ, то для добавления подключения нужно установить галку в поле **Регистрация нового пользователя** и нажать кнопку **Подключить**.

На следующем шаге нужно ввести данные для регистрации и нажать **Подключить**.

![uc2_new_user.png](./images/uc2_new_user.png "Форма регистрации нового пользователя для подключения к УЦ")

Если пользователь уже был зарегистрирован в УЦ, и у него есть логин и пароль для авторизации на сервисе, то для добавления подключения нужно снять галку в поле **Регистрация нового пользователя** и нажать кнопку **Подключить**.

![uc2_user.png](./images/uc2_user.png "Форма подключения к УЦ без регистрации пользователя")

На следующем шаге нужно ввести данные для авторизации и нажать **Подключить**.

![uc2_login.png](./images/uc2_login.png "Авторизация на сервисе УЦс помощью логина и пароля")

После успешной регистрации или авторизации созданное подключение УЦ появляется в списке сервисов, когда выбирается опция **Получение сертификата через сервис УЦ**.

![uc2_sevises.png](./images/uc2_servises.png "Список подключенных сервисов")

На основе созданного подключения можно создать запрос на сертификат.

Если подключение в списке с иконкой ![uc2_cloud](./images/uc2_cloud.png), то соединение с сервисом по указанному пользователем адресу успешно создано.

Если подключение в списке с иконкой ![uc2_cloud_warning.png](./images/uc2_cloud_warning.png), то соединение с сервисом по указанному пользователем адресу успешно создано, но, или нет аутентификации на сервисе, или запрос по регистрации на сервисе еще не подтвержден. Пользователю следует подождать подтверждения регистрации.

## Создание запроса на сертификат

Для создания запроса на сертификат нужно выбрав опцию **Получить сертификат через сервис УЦ** при добавлении сертификата в списке **Личных сертификатов** или в списке **Запросов**. В открывшемся окне выбрать подключение.

![uc2.png](./images/uc2.png "Выбор подключения к сервису УЦ")

Выбрать тип владельца сертификата

![uc2_type.png](./images/uc2_type.png "Выбор типа владельца сертификата")

По нажатию на кнопку **Готово** открывается форма для заполнения полей запроса на сертификат, соответствующих выбранному шаблону. Поля, заполненные при регистрации пользователя на сервисе УЦ, подставляются в соответствующие поля на форме запроса.

Следует заполнить необходимые поля в запросе на вкладках **Сведения о владельце сертификата.**

![uc2_user_info.png](./images/uc2_user_info.png "Форма создания запроса на сертификат")

И **Параметры ключа,** выбрав **Шаблон сертификата (УЦ)**.

![uc2_cert_template.png](./images/uc2_cert_template.png "Выбор шаблона сертификата (УЦ)")

После заполнения всех обязательных полей становится доступна кнопка **Готово.**

![uc2_key_parameters.png](./images/uc2_key_parameters.png "Параметры ключа на форме созданя запроса")

Для сертификата нужно выбрать ключевой носитель для хранения контейнера (Реестр, диск, токен). На запрос системы - установить пароль на данный контейнер и подтвердить его. После завершения операции возникнет окно с информацией об ее результатах.

Запрос сохраняется в раздел **Запросы** на вкладке управления сертификатами.

## Управление запросами на сертификат, созданными через сервис УЦ 

Запрос, созданный через подключенный сервис УЦ, сохраняется в раздел **Запросы**.

![uc2_requests_waiting.png](./images/uc2_requests_waiting.png "Список запросов")

Для отображения статуса запроса применяются следующие обозначения:

 ![req_status_ok](./images/req_status_ok.png) - Для данного запроса сертификат выпущен и установлен в хранилище КриптоПро. 
 ![req_status_false.png](./images/req_status_false.png) - Запрос отклонен Удостоверяющим Центром.                                    
 ![req_status_wait.png](./images/req_status_wait.png) - Запрос находится в обработке Удостоверяющим центром.                       
 ![req_status_warning.png](./images/req_status_warning.png) - Проблемы с соединением, не позволяющие актуализировать статус запроса.     

Когда запрос будет обработан Удостоверяющим Центром и выпущен сертификат, при выделении запроса в списке, его статус измениться на ![req_status_ok.png](./images/req_status_ok.png).

![uc2_requests_ok.png](./images/uc2_requests_ok.png "Статус запроса, когда сертификат выпущен и установлен в хранилище")

Сертификат установится в **Личное хранилище**.

![uc2_cert_list.png](./images/uc2_cert_list.png "Список личных сертификатов")
