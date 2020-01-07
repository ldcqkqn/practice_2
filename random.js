function randomResult(){
  var randomNumber = Math.random();
  var result = parseInt((randomNumber*10)+1);
  selectImage(result);
  // numberCheck(result);
}

$(document).ready(function(){
  $('.number_submit').click(function(){
    var test = parseInt($('.number_box').val());
    if (test > 0 && test < 11){
      selectImage(test);
      // numberCheck(test);
    }else{
      alert("이미지번호의 범위를 확인해주세요");
    }
  });
});

function selectImage(imageNumber){
  var result_text = document.getElementById('random_result_text').innerHTML;
  var image_change = document.getElementById('image_change').style.backgroundImage;
  var image_url = document.location.href;
  switch (imageNumber) {
    case 1:
      result_text = '태극기';
      image_change = 'url("image/1.jpg")';
      $('.image_infomation').click(function(){
        image_url = 'https://namu.wiki/w/%ED%83%9C%EA%B7%B9%EA%B8%B0';
      });
      break;
    case 2:
      result_text = '꽃잎';
      image_change = 'url("image/2.jpg")';
      $('.image_infomation').click(function(){
        image_url = 'https://namu.wiki/w/%EA%BD%83%EC%9E%8E(%EC%98%81%ED%99%94)';
      })
      break;
    case 3:
      result_text = '복돼지';
      image_change = 'url("image/3.jpg")';
      $('.image_infomation').click(function(){
        image_url = 'https://namu.wiki/w/%EB%8F%BC%EC%A7%80';
      });
    case 4:
      result_text = '고양이';
      image_change = 'url("image/4.png")';
      $('.image_infomation').click(function(){
        image_url = 'https://namu.wiki/w/%EA%B3%A0%EC%96%91%EC%9D%B4';
      });
      break;
    case 5:
      result_text = '돼지';
      image_change = 'url("image/5.jpg")';
      $('.image_infomation').click(function(){
        image_url = 'https://namu.wiki/w/%EB%8F%BC%EC%A7%80';
      });
      break;
    case 6:
      result_text = '곰';
      image_change = 'url("image/6.jpg")';
      $('.image_infomation').click(function(){
        image_url = 'https://namu.wiki/w/%EA%B3%B0';
      });
      break;
    case 7:
      result_text.innerHTML = '벚꽃';
      image_change.style.backgroundImage = 'url("image/7.jpg")';
      $('.image_infomation').click(function(){
        image_url = 'https://namu.wiki/w/%EB%B2%9A%EA%BD%83';
      });
      break;
    case 8:
      result_text.innerHTML = '두발돼지';
      image_change.style.backgroundImage = 'url("image/8.jpg")';
      $('.image_infomation').click(function(){
        image_url = 'https://namu.wiki/w/%EB%8F%BC%EC%A7%80';
      });
      break;
    case 9:
      result_text.innerHTML = '사과';
      image_change.style.backgroundImage = 'url("image/9.jpg")';
      $('.image_infomation').click(function(){
        image_url = 'https://namu.wiki/w/%EC%82%AC%EA%B3%BC';
      });
      break;
    case 10:
      result_text.innerHTML = '복숭아';
      image_change.style.backgroundImage = 'url("image/10.jpg")';
      $('.image_infomation').click(function(){
        image_url = 'https://namu.wiki/w/%EB%B3%B5%EC%88%AD%EC%95%84';
      });
      break;
  }
}