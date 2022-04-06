

document.querySelector('.NAMA').innerHTML = "Nama : <b>Muhammad Naufal Yafi'</b>";
document.querySelector('.NIM').innerHTML = "NIM : <b>21.240.0057</b>";
document.querySelector('.KELAS').innerHTML = "Kelas : <b>2P41</b>";
document.querySelector('.alert').innerHTML = "Mobile Not Compatible"

var dragValue;

function move(id){
    var element = document.getElementById("draggable");
    element.style.position = "absolute";
    element.onmousedown = function(){
        dragValue = element;
    }
}

document.onmouseup = function(e){
    dragValue = null;
}

document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;

    dragValue.style.left = x + "px";
    dragValue.style.top = y + "px";
}