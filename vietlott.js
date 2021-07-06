
var btn = document.getElementById('button');
var input = document.getElementsByClassName('input');
var kq = document.getElementById('ketqua');
var luckNumber = [];
var luckNumberMe = [];

btn.onclick = function () {
    for (var i = 0; i < input.length; i++) {
    luckNumberMe.push(parseInt(input[i].value));
    }
    console.log(luckNumberMe);
    check();
}

function vietlott(i) {
    for (var i = 0; i < 5; i++) {
        var key = Math.random()*36;
        key = parseInt(key);
        luckNumber.push(key);
    }
    console.log(luckNumber)
}

vietlott();

function check () {
    var count = 0;
    for (var i = 0; i < 5; i++) {
        if(luckNumber[i] == luckNumberMe[i]) {
            count++;
        }
    }
    if (count == 0 || count == 1 || count == 2) {
        alert('Bạn còn đúng cái nịt :))');
    } else if (count == 3) {
        alert('Xin chúc mừng. Bạn đã trúng 500.000đ!');
    } else if (count == 4) {
        alert('Xin chúc mừng. Bạn đã trúng 20.000.000đ!');
    } else if (count == 5) {
        alert('Xin chúc mừng. Bạn đã trúng 10B!');
    }
    setTimeout(function reload() {
        location.reload();
    },5000)
} 
