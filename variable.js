function vTest(){
    //자바스크립트는 어떤자료형의 값도 담을수 있다.
    var test = 10;
    test = "ten";
    alert(test);

    //전역변수와 지역변수
    var test1 = "와우";
    function varscope(){
        var test1 = "yes";
        alert(test1);
    }
    varscope();
    alert(test1);

    //var 키워드 없이 변수를 선언하게된다면 전역변수가 된다.
    var test2 = "이럴수가";
    function keyword(){
        name = "전역변수가되어버림";
        name2 = "전역변수다";
        alert(name);
        alert(name2);
    }
    keyword();

    //중첩함수에서 내부 함수는 그것이 담긴 함수의 변수에 접근할 수 있다.
    function test3(haha){
        function amazing(){
            haha = haha + "amazing";
            function oops(){
                haha = haha + "oops";
            }
            oops();
        }
        amazing();
        return haha;
    }
    alert(test3("wow"));
    //블록 유효범위가 없다.
    {
        var blockscope = 10;
    }
    alert(blockscope);

    //let은 {}로 변수의 범위를 지정한다.
    let sum = 0;
    for (let i = 1; i <=5; i++){
        sum = sum + i;
    }
    alert(sum);
    alert(i);// for문밖에 벗어나서 에러가 난다.

    //const 한번 선언한 값에 대해서 변경할 수 없다.
    const a = 10;
    a = 20;// 에러가 난다.

    //객체나 배열의 내부는 변경이 가능하다
    //객체
    const b = {};
    b.test = 20;
    alert(b);
    //배열
    const c = [];
    c.push(25);
    alert(c);
}


