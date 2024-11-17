<?

if (\Bitrix\Main\Loader::includeModule('bxmaker.authuserphone')) {
    //регистрируем событие, которое также вызывает модуль перед добавлением пользователя
    $eventManager = \Bitrix\Main\EventManager::getInstance();
    $eventManager->addEventHandler(
        "main",
        "OnBeforeUserRegister",
        "bxmaker_authuserphone_event_main_onBeforeUserRegister"
    );


    // непосредственно обработчик осбытия
    function bxmaker_authuserphone_event_main_onBeforeUserRegister(&$arFields)
    {
        $req = \Bitrix\Main\Application::getInstance()->getContext()->getRequest();

        // дополнитлеьные данные приходят в этом поле
        $arExpandData = $req->getPost('expandData');

        if (empty($arFields['UF_USER_TYPE'])) {
            $arFields['UF_USER_TYPE'] = 17;
        }

        if (is_array($arExpandData) && isset($arExpandData['userType']) && in_array(
                $arExpandData['userType'],
                [16, 17]
            )) {
            $arFields['UF_USER_TYPE'] = trim(htmlentities($arExpandData['userType'], ENT_QUOTES));
        } else {
            throw new \BXmaker\AuthUserPhone\Exception\BaseException(
                'Не заполнено поле обязательное - Тип пользователя', 'ERROR_USER_TYPE'
            );
        }
    }
}





?>