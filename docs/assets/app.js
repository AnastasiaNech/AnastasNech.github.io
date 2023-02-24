export var tg = window.Telegram.WebApp;
tg.expand();




Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData("some string that we need to send"); 
});