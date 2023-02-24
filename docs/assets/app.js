var tg = window.Telegram.WebApp;

tg.expand();


var sendingObject = "";

export var objSender = function(obj){
    tg.MainButton.setText("Вернуться в Телеграмм");
    sendingObject = obj;
    tg.MainButton.show();
}

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.MainButton.setText(sendingObject);
	tg.sendData(sendingObject);
    Telegram.WebApp.sendData(sendingObject);
});