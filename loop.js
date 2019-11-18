var i = 0,j =1;
var list = ['html','css','javascript','event'];
var object = {a:'apple',b:'banana',c:'css'};

function forclick(type){
    if(type === 'while'){
        console.log(type);
        while(i < 10){
            i++;
            console.log(i);   
        }
    }else if(type === 'for'){
        for(i = 2; i < 3; i++){
            for(j = 1; j < 10; j++){
                console.log(i + '*' + j + '=' +i*j);
            }
        }
    }else if(type === 'label'){
        label_1 : 
            for(i = 0; i < 4; i++){
                label_2 :
                for(j = 0; j < 4; j++){
                    console.log(i,j);
                    if(i == 2 && j == 2){
                        continue label_1;
                    }
                }
            }
    }else if(type === 'forin'){
        for(it in list){
            console.log(it,list[it]);
        }
    }
}


var fixed = false;
$(document).scroll(function() {
    if( $(this).scrollTop() >= 100 ) {
        if( !fixed ) {
            fixed = true;
            $('#myP').css({position:'fixed', display:'visible !important'});
        }
    } else {
        if( fixed ) {
            fixed = false;
            $('#myP').css({display:'none'});
        }
    }
});​


/*
var aaa =document.getElementsByClassName("gamebutton");
$(document).ready(function(){
    $(window).scroll(function(){
        aaa[0].appendChild(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_object > bottom_of_object){
                $(this).animate({'oparcity':'1'},500);
            }
        });
    });
});
console.log(aaa);
*/
