---
slug: "/post33"
title: "Разархивирование и снятие подписи"
sort: "3"
---

Для разархивирования и снятия подписи достаточно выбрать подписанный и заархивированный файл (с расширением **.sig.zip)**, выбрать операцию **Расшифрование, разархивирование, снятие подписи** и нажать на кнопку **Выполнить**. Если несколько подписанных файлов были упакованы в архив, то выбирается архивный файл с расширением **.zip**.

Настройка дополнительных параметров для операции не требуется.

![unpack-unsign.png](./images/unpack-unsign.png "Разархивирование и снятие подписи")

Исходные зашифрованные и полученные файлы отображаются в отдельном мастере **Результаты операций**.

![unpack-unsign-result.png](./images/unpack-unsign-result.png "Результаты разархивирования и снятия подписи")

**Внимание!** Документы, полученные в результате обратных операций (расшифрование, разархивирование, снятие подписи), сохраняются во временную папку, расположенную в папке пользователя в каталоге ./Trusted/CryptoARM GOST/TEMP, и остаются там до выполнения следующей операции. Далее временная папка очищается.

Документы из **Результатов операций** можно **Открыть в мастере Подписи и шифрования** для выполнения других операций или **Сохранить копию в Документах**. Операция **Сохранить копию в Документах** служит для сохранения копии полученного после операции файла в специальный каталог Documents, расположенный в папке пользователя в каталоге ./Trusted/CryptoARM GOST/. Файлы из данного каталога доступны в пункте меню **Документы**.