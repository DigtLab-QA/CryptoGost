---
slug: "/post6"
title: "Установка КриптоПро CSP на платформу Linux"
sort: "6"
---

## Установка криптопровайдера

Установка, удаление и обновление ПО осуществляется от имени пользователя, имеющего права администратора: под учётной записью root или с использованием команды sudo.

***Примечание:*** Директория расположения утилит КриптоПро CSP
 /opt/cprocsp/bin/\<arch\>/,
  где под \<arch\> подразумеваться один из следующих идентификаторов платформы: 
  - ia32 - для 32-разрядных систем;
  - amd64 - для 64-разрядных систем.

## Установка базовых пакетов скриптом

Установку провайдера можно осуществить, запустив файл из дистрибутива **install.sh** или **install\_gui.sh**. Файлы из пакетов устанавливаются в **/opt/cprocsp**.

## Установка пакета для графического интерфейса ввода пароля

Для работы с контейнерами закрытых ключей требуется ввод пароля. Графический интерфейс диалога ввода пароля содержится в пакете **cprocsp-rdr-gui**, который можно установить командой:

**sudo dpkg -i ./cprocsp-rdr-gui-\<\>.deb**

## Установка пакетов для работы с ключевыми носителями

Для работы электронных идентификаторов Рутокен или JaCarta в deb-based системе должны быть установлены: библиотека libccid не ниже 1.3.11, пакеты pcscd и libpcsclite1.

Для работы в RPM-based системе должны быть установлены библиотеки и пакеты сcid, pcscd и pcsc-lite.

Пакеты и драйвера для работы с ключевыми носителями устанавливаются с помощью команд:

**sudo dpkg -i ./cprocsp-rdr-pcsc-\<...\>.deb**

Для ключевого носителя **Рутокен**:

**sudo dpkg -i ./cprocsp-rdr-rutoken-\<...\>.deb**

**sudo dpkg -i ./ifd-rutokens_1.0.4_1.x86_64.deb**

Для ключевого носителя **JaCarta**:

**sudo dpkg -i ./cprocsp-rdr-jacarta -\<...\>.deb**

## Установка пакета для модулей TSP и OCSP

Для создания подписи со штампом времени или усовершенствованной подписи необходимо установить библиотеки поддержки модулей TSP и OCSP.

Скачать архив **Linux 64 бита** по ссылке
<https://www.cryptopro.ru/products/cades/downloads> (требуется предварительная регистрация).

Распаковать архив.

Установить пакет:

-   **sudo dpkg –i cprocsp-pki-х.х.х-amd64-cades.deb** – для ОС на основе
    ubuntu/debian

-   **sudo rpm –i cprocsp-pki-х.х.х-amd64-cades.rpm** – для RPM ОС

Для создания подписи со штампом времени или усовершенствованной подписи необходима установка лицензии на модули TSP и/или OCSP.

Для создания классической подписи без штампа времени лицензии на данные модули устанавливать не нужно.