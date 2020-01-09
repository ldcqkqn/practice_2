function everyTime(buttonType){
  var randomObject = {
    randomNumber : parseInt(Math.random()*10+1)
  };

  var inputObject = {
    inputNumber : parseInt(document.getElementById('number_box').value)
  };

  var ranNumber = randomObject.randomNumber;
  var outputNumber = inputObject.inputNumber;
  var clearText = document.getElementById('number_box');

  if (buttonType == 1){
    selectImage(ranNumber);
  }else if(buttonType == 2){
    if (outputNumber > 0 && outputNumber < 11){
      selectImage(outputNumber);
      clearText.value = '';
    }else{
      alert("숫자범위를 확인해 주세요")
      clearText.value = '';
    }
  }else if (buttonType == 3){
    if (ranNumber){
      image_infomation(ranNumber);
    }else if(outputNumber){
      image_infomation(outputNumber);
    }
  }else{
    alert("에러입니다.");
  }
}

function randomResult(){
  everyTime(1);
}

function imageGetInput(){
  everyTime(2);
}

function imageInfo(){
  everyTime(3);
}

function selectImage(imageNumber){
  var result_text = document.getElementById('random_result_text');
  var image_change = document.getElementById('image_change');
  switch (imageNumber) {
    case 1:
      result_text.innerHTML = '태극기';
      image_change.style.backgroundImage = 'url("image/1.jpg")';
      break;
    case 2:
      result_text.innerHTML = '꽃잎';
      image_change.style.backgroundImage = 'url("image/2.jpg")';
      break;
    case 3:
      result_text.innerHTML = '복돼지';
      image_change.style.backgroundImage = 'url("image/3.jpg")';
      break;
    case 4:
      result_text.innerHTML = '고양이';
      image_change.style.backgroundImage = 'url("image/4.png")';
      break;
    case 5:
      result_text.innerHTML = '돼지';
      image_change.style.backgroundImage = 'url("image/5.png")';
      break;
    case 6:
      result_text.innerHTML = '곰';
      image_change.style.backgroundImage = 'url("image/6.png")';
      break;
    case 7:
      result_text.innerHTML = '벚꽃';
      image_change.style.backgroundImage = 'url("image/7.jpg")';
      break;
    case 8:
      result_text.innerHTML = '두발돼지';
      image_change.style.backgroundImage = 'url("image/8.jpg")';
      break;
    case 9:
      result_text.innerHTML = '사과';
      image_change.style.backgroundImage = 'url("image/9.png")';
      break;
    case 10:
      result_text.innerHTML = '복숭아';
      image_change.style.backgroundImage = 'url("image/10.jpg")';
      break;
  }
}

function image_infomation(infoNumber){
  switch (infoNumber) {
    case 1:
      document.location.href = 'https://namu.wiki/w/%ED%83%9C%EA%B7%B9%EA%B8%B0';
      break;
    case 2:
      document.location.href = 'https://namu.wiki/w/%EA%BD%83%EC%9E%8E(%EC%98%81%ED%99%94)';
      break;
    case 3:
      document.location.href = 'https://namu.wiki/w/%EB%8F%BC%EC%A7%80';
      break;
    case 4:
      document.location.href = 'https://namu.wiki/w/%EA%B3%A0%EC%96%91%EC%9D%B4';
      break;
    case 5:
      document.location.href = 'https://namu.wiki/w/%EB%8F%BC%EC%A7%80';
      break;
    case 6:
      document.location.href = 'https://namu.wiki/w/%EA%B3%B0';
      break;
    case 7:
      document.location.href = 'https://namu.wiki/w/%EB%B2%9A%EA%BD%83';
      break;
    case 8:
      document.location.href = 'https://namu.wiki/w/%EB%8F%BC%EC%A7%80';
      break;
    case 9:
      document.location.href = 'https://namu.wiki/w/%EC%82%AC%EA%B3%BC';
      break;
    case 10:
      document.location.href = 'https://namu.wiki/w/%EC%82%AC%EA%B3%BC';
      break;
  }
}
var startEndImage;
var imageCount = 0;
var imageArray = ["image/1.jpg","image/2.jpg","image/3.jpg","image/4.png","image/5.png","image/6.png","image/7.jpg","image/8.jpg","image/9.png","image/10.jpg"];
var imageArrayLength = imageArray.length + 1;

function imageAuto(){
  imageCount++;
  if (imageCount < imageArrayLength){
    selectImage(imageCount);
    startEndImage = setTimeout("imageAuto()",500);
  }else if(imageCount == imageArrayLength){
    imageCount = 0;
    selectImage(imageCount);
    startEndImage = setTimeout("imageAuto()",500);
  }else{
    alert("에러입니다.");
  }
}

var autoButtonCount = 0;
function imageAutoButton(){
  autoButtonCount++;
  var textChange = document.getElementById('image_auto');
  if (autoButtonCount%2 == 0){
    textChange.textContent = '이미지 자동재생';
    clearTimeout(startEndImage);
  }else if(autoButtonCount%2 == 1){
    textChange.textContent = '이미지 자동재생끄기';
    imageAuto();
  }

}

