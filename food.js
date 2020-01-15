function list(testNumber){
  if (testNumber == 1){
    var food = ['제육볶음','오징어볶음','가지볶음','감자볶음','멸치볶음'];
    var foodPrice = ['5900','6500','5000','5500','4900'];
    fragmentMenuList(food);
    fragmentMenuPrice(foodPrice);
  }else if (testNumber == 2){
    var food = ['순대국밥','장터국밥','소고기국밥','소머리국밥','돼지국밥'];
    var foodPrice = ['6500','6000','6500','6800','6800'];
    fragmentMenuPrice(foodPrice);
    fragmentMenuList(food);
  }else if (testNumber == 3){
    var food = ['제육덮밥','콩나물덮밥','가지덮밥','불닭덮밥','매운어묵덮밥'];
    var foodPrice = ['7000','5900','5500','7000','6500'];
    fragmentMenuList(food);
    fragmentMenuPrice(foodPrice);
  } else if (testNumber == 4){
    var food = ['우육면','밀면','쫄면','냉면','짜장면'];
    var foodPrice = ['6800','5500','5000','5500','6000'];
    fragmentMenuList(food);
    fragmentMenuPrice(foodPrice);
  } else if (testNumber == 5){
    var food = ['떡볶이','김밥','튀김','순대','어묵'];
    var foodPrice = ['4000','2500','3000','3000','2000'];
    fragmentMenuList(food);
    fragmentMenuPrice(foodPrice);
  }
}
function fragmentMenuList(foodArray){
  var list = document.getElementById('food_list');
  list.innerHTML = '';
  var foodlist = foodArray;
  foodlist.forEach(function(food){
    var li = document.createElement("li");
    li.innerHTML = food;
    li.onclick = function(){
      selectFood(li);
    }
    list.appendChild(li);
  });

}
function selectFood(li){
  var list = document.getElementById('food_list');
  var selectList = document.getElementById('food_select_list');
  selectList.appendChild(li);
}

function fragmentMenuPrice(price){
  var foodPrice = document.getElementById('food_price');
  foodPrice.innerHTML = '';
  var priceList = price;
  priceList.forEach(function(price){
    var li = document.createElement('li');
    li.innerHTML = price;
    foodPrice.appendChild(li);
  });

}


// function list(menuNumber){
//   if (menuNumber == 1){
//     var list = document.getElementById('food_list');
//     list.innerHTML = '';
//     var foodlist = ['제육볶음 5900원','오징어볶음','가지볶음','감자볶음','멸치볶음'];
//
//     var fragmentList = new DocumentFragment();
//
//     foodlist.forEach(function(food){
//       var li = document.createElement('li');
//       li.innerHTML = food;
//       fragmentList.appendChild(li)
//     });
//
//     list.appendChild(fragmentList);
//   }else if(menuNumber == 2){
//     var list = document.getElementById('food_list');
//     list.innerHTML = '';
//     var foodlist = ['순대국밥','장터국밥','소고기국밥','소머리국밥','돼지국밥'];
//
//     var fragmentList = new DocumentFragment();
//
//     foodlist.forEach(function(food){
//       var li = document.createElement('li');
//       li.innerHTML = food;
//       fragmentList.appendChild(li)
//     });
//
//     list.appendChild(fragmentList);
//   }else if (menuNumber == 3){
//     var list = document.getElementById('food_list');
//     list.innerHTML = '';
//     var foodlist = ['제육덮밥','콩나물덮밥','가지덮밥','불닭덮밥','매운어묵덮밥'];
//
//     var fragmentList = new DocumentFragment();
//
//     foodlist.forEach(function(food){
//       var li = document.createElement('li');
//       li.innerHTML = food;
//       fragmentList.appendChild(li)
//     });
//
//     list.appendChild(fragmentList);
//   }else if(menuNumber == 4){
//     var list = document.getElementById('food_list');
//     list.innerHTML = '';
//     var foodlist = ['우육면','밀면','쫄면','냉면','짜장면'];
//
//     var fragmentList = new DocumentFragment();
//
//     foodlist.forEach(function(food){
//       var li = document.createElement('li');
//       li.innerHTML = food;
//       fragmentList.appendChild(li)
//     });
//
//     list.appendChild(fragmentList);
//   }else if (menuNumber == 5){
//     var list = document.getElementById('food_list');
//     list.innerHTML = '';
//     var foodlist = ['떡볶이','김밥','튀김','순대','어묵'];
//
//     var fragmentList = new DocumentFragment();
//
//     foodlist.forEach(function(food){
//       var li = document.createElement('li');
//       li.innerHTML = food;
//       fragmentList.appendChild(li)
//     });
//
//     list.appendChild(fragmentList);
//   }
// }


