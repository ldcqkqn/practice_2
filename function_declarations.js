function test(){
    alert("테스트 였습니다.");
}
//함수 선언식 함수호출은 선언전이나 선언후에해도된다.
function test2(){
    alert("두 번째 테스트 입니다.");
}
test2();
//함수 표현식 함수호출은 함수 선언후에 해야한다
var test3 = function(){
    alert("3번째 테스트 입니다.");
}
test3();

function test4(fun1,fun2){
    alert("나이는 :"+fun1+"성별은 :"+fun2);
}
test4('14','남');
test4('25','여');
test4('37','남');