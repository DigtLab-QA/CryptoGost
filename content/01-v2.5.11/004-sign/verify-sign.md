---
slug: "/post19"
title: "Проверка электронной подписи"
sort: "08"
---

## Проверка простой подписи

Для проверки подписи достаточно выбрать файлы расширением **.sig**, которые содержат электронную подпись. Никаких дополнительных настроек при проверке подписи производить не нужно.

Результат проверки подписей отображается в виде общего сообщения и цветового индикатора на иконке для каждого файла: зеленый - подпись действительна;  красный - подпись недействительна; оранжевый – не удалось проверить подпись.

![add-signed-files.png](./images/add-signed-files.png "Результат проверки подписи файлов")

Если при проверке отделенной подписи, исходный файл не будет найден автоматически, то индикатор проверки будет оранжевого цвета. Для выбора исходного файла надо нажать иконку проверки подписи в меню файла. Откроется окно для его выбора.

![verify-icon.png](./images/verify-icon.png "Иконка вызова проверки подписи файла")

При выделении одного подписанного файла в правой области отображается информация о подписи.

![signed-info.png](./images/signed-info.png "Отображение информации о подписи")

По кнопке **Назад** информация о подписи закрывается и происходит возврат к операциям.

## Проверка соподписей

Если документ подписан несколькими подписями (имеет соподписи), то для просмотра информации нужно выбрать подпись из списка.

![select-signers.png](./images/select-signers.png "Выбор подписи для просмотра информации")

## Проверка подписи со штампом времени

Если документ подписан подписью со штампом времени, то для просмотра параметров штампа нужно нажатием на иконку развернуть информацию и выбрать в выпадающем списке тип штампа времени.

![tsp-info.png](./images/tsp-info.png "Отображение информации о подписи со штампом времени")

## Проверка усовершенствованной подписи

Если документ подписан усовершенствованной подписью, то для просмотра сведений о штампах времени в усовершенствованной подписи, нужно нажатием на иконку развернуть информацию и выбрать в выпадающем списке тип штампа времени.

![ocsp-tsp-info.png](./images/ocsp-tsp-info.png "Отображение информации о штампах времени усовершенствованной подписи")

Информация о OCSP ответе усовершенствованной подписи представлена на рисунке.

![ocsp-info.png](./images/ocsp-info.png "Отображение информации о OCSP ответе усовершенствованной подписи")
