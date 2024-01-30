"use strict";

// HTMLのonclickで呼び出す関数
function seeResult(){
    // テスト用
    // alert("hello");
    document.getElementById('result').innerHTML = '<h1>Test<h1>'
    revealResult();
}

// 表示非表示の切り替えを行う関数
function revealResult() {
    // テスト用
    alert("hello");
    document.getElementById('home').classList.remove('d-block');
    document.getElementById('home').classList.add('d-none');
    document.getElementById('result').classList.remove('d-none');
    document.getElementById('result').classList.add('d-block');
}