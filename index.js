function id(id) {
    return document.getElementById(id);
}

function clss(cls) {
    return document.getElementsByClassName(cls);
}
get();

addclosefunction();

function addclosefunction() {
    var close = document.getElementsByClassName("closebtn");
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            var listt = JSON.parse(localStorage.getItem('todoapp'));
            for (var i = 0; i < listt.length; i++) {
                if (listt[i].stamp == this.id) {

                    listt.splice(i, 1);
                    localStorage.setItem('todoapp', JSON.stringify(listt));
                }
            }


        }
    }
}

function addtodo() {
    var cat = id("formcategory").value;
    var txt = id("Enterfield").value;
    var time = id("Timefield").value;
    if (txt == '') {
        alert("Enter the subject");
        return;
    }

    if (time == '') {
        alert("Enter time");
        return;
    }
    const d = new Date();
    let timenw = d.getTime();
    id("entries").innerHTML += '  <div class="slots" id="' + txt + timenw + '"> <div class=" cat ">' + cat + '</div><div class=" txt ">' + txt + '</div><div class=" time ">' + time + '</div><div class=" closebtn">X</div></div>'
    save(cat, txt, time, timenw);
    id("formcategory").value = '';
    id("Enterfield").value = '';
    id("Timefield").value = '';

}

function save(cat, txt, time, timenw) {
    var listt = JSON.parse(localStorage.getItem('todoapp'));
    if (listt == null) {
        listt = [];
    }
    var data = {
        category: cat,
        text: txt,
        tme: time,
        stamp: timenw
    };
    listt.push(data);
    localStorage.setItem("todoapp", JSON.stringify(listt));


}

function get() {
    var listt = JSON.parse(localStorage.getItem('todoapp'));
    if (listt == null) {
        listt = [];
    }
    for (var i = 0; i < listt.length; i++) {
        id("entries").innerHTML += '  <div class="slots"> <div class="cat">' + listt[i].category + '</div><div class="txt">' + listt[i].text + '</div><div class="time">' + listt[i].tme + '</div><div class="closebtn" id="' + listt[i].stamp + '">X</div></div>'
    }
}
