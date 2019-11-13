function backgroundColor(){
    var pClass = document.getElementsByClassName("info");
    var i;
    for (i = 0; i < pClass.length; i++){
        pClass[i].style.backgroundColor = "red";
    }
    pClass[1].style.backgroundColor = "yellow";
    pClass[2].style.backgroundColor = "green";
}
backgroundColor();
