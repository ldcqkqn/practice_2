var textMessageLeft;
var textMessageRight;

function textSendLeft(){
  var sendMessage = $('.text_area_left').val();
  textMessageLeft = sendMessage;
  chattingMessageReceive(textMessageLeft);
}

function textSendRight(){
  var sendMessage = $('.text_area_right').val();
  textMessageRight = sendMessage;
  chattingMessageReceive(textMessageRight);
}

function chattingMessageReceive(message){
  var chattingMessage = new Array();
  for (var i = 0; i <chattingMessage.length; i++){
    chattingMessage[i] = message;
  }
  console.log(chattingMessage);
}