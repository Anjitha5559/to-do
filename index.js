function id(id) {
    return document.getElementById(id);
}

function clss(cls) {
    return document.getElementsByClassName(cls);
}

function log(val) {
    console.log(val);
}


function addtodo() {
    var cat = id("formcategory").value;
    var txt = id("Enterfield").value;
    var time = id("Timefield").value;
    console.log(cat + ":" + txt + ":" + time);
    id("entries").innerHTML += '  <div class="slots"> <div class="cat">' + cat + '</div><div class="txt">' + txt + '</div><div class="time">' + time + '</div><div class="closebtn">X</div></div>'
}