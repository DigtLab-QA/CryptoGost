---
slug: "/post7"
title: "Приложение зависает при работе"
sort: "07"
--- 

Лицензии действительные, при попытке доступа к разделам **Подписать и зашифровать**, **Сертификаты**, **Контейнеры** программа зависает на статусе **Пожалуйста, подождите…**

Возможно, установили (потом удалили или нет) другой криптопровайдер (например, VipNet). 

1. Удалить другой криптопровайдер.  
   Или в настройках VipNet установить флаг "Поддержка работы ViPNet CSP через Microsoft CryptoAPI".  
2. Удалить файл настроек приложения КриптоАРМ ГОСТ.  
    Для этого нужно:  
	- закрыть программу (**Выход** в меню или в трее),  
	- перейти в каталог пользователя в папку \.Trusted\CryptoARM GOST\ 
	- удалить файл settings.json.