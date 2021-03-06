---
slug: "/post10"
title: "Ключевые контейнеры"
sort: "10"
---

Данный раздел предназначен для управления контейнерами закрытых ключей на подключенных носителях или в реестре.

Установку сертификата из ключевого контейнера можно выполнить двумя способами.

В списке **Личных сертификатов** нажать **Добавить (+)** и выбрать операцию **Установить из контейнера.**

![keys_import.png](./images/keys_import.png "Установка из контейнера на списке Личных сертификатов")

Или выбрать в меню **Сертификаты** подпункт **Ключи**.

![keys_menu.png](./images/keys_menu.png "Пункт меню Ключи")

В левой области представления отображаются все подключенные хранилища контейнеров закрытых ключей. В правой области отображается информация о сертификате в выделенном контейнере.

![keys_storage.png](./images/keys_storage.png "Хранилища контейнеров закрытых ключей")

В каждом из хранилищ отображаются контейнеры закрытых ключей. В случае отсутствия контейнеров в хранилище, оно может быть скрыто как пустое.

После выбора контейнера отображается информация о находящемся в нем сертификате.

![keys_info.png](./images/keys_info.png "Информация о сертификате в контейнере")

По кнопке **Установить сертификат** происходит установка сертификата в **Личное хранилище** сертификатов. Данный сертификат становится доступен для выполнения операций подписи, шифрования и расшифрования.

Для удаления контейнера нужно нажать кнопку **Удалить контейнер** и подтвердить операцию.

![keys_delete.png](./images/keys_delete.png "Подтверждение удаления контейнера")

Если установить флаг **Удалить связанный с контейнером сертификат**, то вместе с контейнером сертификат удалится из хранилища **Личных сертификатов**.

Если флаг не установлен, сертификат останется в хранилище **Личных сертификатов** без привязки к ключевому контейнеру. Таким сертификатом нельзя выполнять операции подписи и расшифрования.

**Примечание.** Не рекомендуется удалять контейнер закрытого ключа, так как он не подлежит восстановлению.

В приложении реализован поиск контейнеров по символьному совпадению в названии контейнера.

![keys_search.png](./images/keys_search.png "Поиск контейнера")

