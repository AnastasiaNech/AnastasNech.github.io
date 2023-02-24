var tg = window.Telegram.WebApp;

tg.expand();


var sendingObject = "";

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData("some string that we need to send"); 
});

export var objSender = function(obj){
    tg.MainButton.setText("Вернуться в Телеграмм");
    sendingObject = obj;
    tg.MainButton.show();
}

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(sendingObject);
});