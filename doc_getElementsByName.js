function btnchecked(){
    var box = document.getElementsByName("check");
    
    for(var i = 0; i < box.length; i++){
        alert(box[i].value);
    }
}