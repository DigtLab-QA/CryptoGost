---
slug: "/post05"
title: "Как отправить подписанное и зашифрованное сообщение"
sort: "05"
---

**ВАЖНО!**  Чтобы подписывать или зашифровывать почтовые сообщения у вас на рабочем месте должен быть установлен криптопровайдер КриптоПро CSP.

1. Перейдите в раздел **Почта**.
2. Подключите почтовый аккаунт, если он не был подключен.
3. На левой боковой панели нажмите кнопку ![new-mail.png](./images/new-mail.png "Новое сообщение").  
    Форма создания сообщения открывается в новой вкладке.  
4. Укажите тему.   
5. Выберите получателей ("Кому", "Копия" или "Скрытая копия").   
    В поле установите курсор или начните вводить первые буквы имени/фамилии/адреса электронной почты. Открывается выпадающий список с контактами. Если подходящих контактов нет в списке, нажмите **Показать все контакты**.  Открывается  правая боковая панель со списком всех контактов, имеющих e-mail. Выберите контакт, нажав на него.  
    Адреса получателей вводятся через запятую или точку с запятой. 
6. Заполните содержимое письма.
7. Настройте добавление электронной подписи к письму и/или шифрование писем.
8. Для отправки сообщения нажмите  кнопку ![send-button.png](./images/send-button.png "Отправить"). 

# Как настроить добавление электронной подписи к письму

Чтобы подписывать письма электронной подписью нужно в настройках почты выбрать сертификат подписи и включить подпись писем.
При отправке письма будут подписываться.

**Как выбрать сертификат подписи**  
1. Откройте форму редактирования настроек почты и выберите раздел **Безопасность**.  
2. В разделе **Сертификат подписи** нажмите **Выбрать сертификат**.  
 Если сертификат выбран, его можно заменить. 
3. В открывшейся правой боковой панели выберите сертификат подписи из списка, нажав на иконку сертификата.  
 Сертификат добавляется в раздел **Сертификат подписи**.  
 Если в правой боковой панели в списке нет сертификатов, то вы можете его импортировать, создать или установить сертификат.  
4. После выбора сертификата закройте правую боковую панель.
5. Нажмите **Сохранить** для фиксации изменений в настройках аккаунта.  

**Как включить подпись писем**  

Настройку подписи писем вы можете включить при создании нового сообщения, выбрав опцию **Подписать** по кнопке **Безопасность** ![safety-button.png](./images/safety-button.png "Безопасность").  

Вы можете настроить подпись писем по умолчанию для каждого нового письма, для этого:
1. Откройте форму редактирования настроек почты и выберите вкладку **Безопасность**.
2. В разделе **Безопасность электронной почты** установите флаг **Добавлять электронную подпись к исходящим сообщениям**.
3. Нажмите **Сохранить** для фиксации изменений в настройках аккаунта.  
    В таком случае в новом сообщение опция **Подписать** по кнопке **Безопасность** будет включена.

# Как настроить шифрование письма и вложений  

Чтобы шифровать письма и вложения нужно в получателях письма ("Кому", "Копия" или "Скрытая копия") выбрать контакты, у которых добавлен сертификат и включить шифрование писем. 

Если письмо содержит вложения, то они будут зашифрованы вместе с письмом.  

**Как добавить сертификат к контакту** читайте в [инструкции](https://docs.cryptoarm.ru/06-v3.1-Beta/006-contacts/link-contact-cert).

**Как включить шифрование писем**    

Настройку шифрования писем вы можете включить при создании нового сообщения, выбрав опцию **Зашифровать** по кнопке **Безопасность** ![safety-button.png](./images/safety-button.png "Безопасность").  

Вы можете настроить шифрование писем по умолчанию для каждого нового письма, для этого:
1. Откройте форму редактирования настроек почты и выберите вкладку **Безопасность**.  
2. В разделе  **Безопасность электронной почты** установите флаг **Шифровать содержимое и вложения исходящих сообщений**.  
3. Нажмите **Сохранить** для фиксации изменений в настройках аккаунта.
    В таком случае в новом сообщение опция **Зашифровать** по кнопке **Безопасность** будет включена.

# Как настроить подпись и шифрование письма 

Если вам требуется отправить подписанное электронной подписью и зашифрованное письмо:
- настройте **добавление электронной подписи к письму**.
- настройте **шифрование письма и вложений**.

***Примечание:*** если в списке получателей письма контакты или адреса электронной почты подсвечиваются красным цветом, проверьте, есть ли у этих получателей привязанные сертификаты.

**ВОЗМОЖНЫЕ УВЕДОМЛЕНИЯ:**   

1. Укажите получателей письма в полях Кому, Копия или Скрытая копия  - проверьте заполнение указанных полей. 
3. Адреса user@aa не распознаны. Проверьте правильность ввода адресов - проверьте электронные адреса получателей на корректность.
4. Не найден личный сертификат электронной подписи - вы можете отправить неподписанное письмо или вернуться к письму и выбрать сертификат подписи в настройках почты, а затем отправить письмо снова.
5. Личный сертификат недействителен - вы можете подписать письмо недействительным сертификатом или  вернуться к письму и заменить сертификат подписи в настройках почты, а затем отправить письмо снова.
6. Один или несколько сертификатов отсутствуют -  проверьте наличие сертификатов у получателей, добавьте сертификаты к контактам и повторите отправку письма.
7. Не удалось отправить сообщение - проверьте подключение к Интернету.


**ИНСТРУКЦИИ ПО ТЕМЕ:**  
1. [Установка КриптоПро CSP на платформу Windows.](https://docs.cryptoarm.ru/06-v3.1-Beta/002-mail/install-cryptopro-windows)    
2. [Как установить личный сертификат.](https://docs.cryptoarm.ru/06-v3.1-Beta/005-certs/import-my-cert)  
4. [Как привязать сертификат к контакту.](https://docs.cryptoarm.ru/06-v3.1-Beta/006-contacts/link-contact-cert)  
5. [Как отправлять электронные письма.](https://docs.cryptoarm.ru/06-v3.1-Beta/003-mail/send-mail)  
6. [Как редактировать настройки почты.](https://docs.cryptoarm.ru/06-v3.1-Beta/003-mail/edit-account)  
7. [Как настроить отправку писем с уведомлениями о доставке и прочтении.](https://docs.cryptoarm.ru/06-v3.1-Beta/003-mail/send-mail-notify)  

