function fn0(){
    let previous = document.getElementById("calculation").innerHTML;
    document.getElementById("calculation").innerHTML = previous + 0;
}

function fn1(){
    let previous = document.getElementById("calculation").innerHTML;
    document.getElementById("calculation").innerHTML = previous + 1;
}

function fn2(){
    let previous = document.getElementById("calculation").innerHTML;
    document.getElementById("calculation").innerHTML = previous + 2;
}

function fn3(){
    let previous = document.getElementById("calculation").innerHTML;
    document.getElementById("calculation").innerHTML = previous + 3;
}

function fn4(){
    let previous = document.getElementById("calculation").innerHTML;
    document.getElementById("calculation").innerHTML = previous + 4;
}

function fn5(){
    let previous = document.getElementById("calculation").innerHTML;
    document.getElementById("calculation").innerHTML = previous + 5;
}

function fn6(){
    let previous = document.getElementById("calculation").innerHTML;
    document.getElementById("calculation").innerHTML = previous + 6;
}

function fn7(){
    let previous = document.getElementById("calculation").innerHTML;
    document.getElementById("calculation").innerHTML = previous + 7;
}

function fn8(){
    let previous = document.getElementById("calculation").innerHTML;
    document.getElementById("calculation").innerHTML = previous + 8;
}

function fn9(){
    let previous = document.getElementById("calculation").innerHTML;
    document.getElementById("calculation").innerHTML = previous + 9;
}

let fNum;
let op;

function fnPlus(){
    fNum = document.getElementById("calculation").innerHTML;
    document.getElementById("calculation").innerHTML = 0;
    op = 1;
}

function fnMin(){
    fNum = document.getElementById("calculation").innerHTML;
    document.getElementById("calculation").innerHTML = 0;
    op = 2;
}

function fnSub(){
    fNum = document.getElementById("calculation").innerHTML;
    document.getElementById("calculation").innerHTML = 0;
    op = 3;
}

function fnDiv(){
    fNum = document.getElementById("calculation").innerHTML;
    document.getElementById("calculation").innerHTML = 0;
    op = 4;
}

function fnSqr(){
    fNum = document.getElementById("calculation").innerHTML;
    document.getElementById("calculation").innerHTML = 0;
    op = 5;
}
function fnMem(){
    document.getElementById("answer").innerHTML = fNum;
}
function fnEq(){
    let sNum = document.getElementById("calculation").innerHTML;

    if(op == 1){
        document.getElementById("answer").innerHTML = parseFloat(fNum) + parseFloat(sNum);
    }
    else if(op == 2){
        document.getElementById("answer").innerHTML = parseFloat(fNum) - parseFloat(sNum);
    }
    else if(op == 3){
        document.getElementById("answer").innerHTML = parseFloat(fNum) * parseFloat(sNum);
    }
    else if(op == 4){
        document.getElementById("answer").innerHTML = parseFloat(fNum) / parseFloat(sNum);
    }
    else if(op == 5){
        document.getElementById("answer").innerHTML = Math.pow(parseFloat(fNum), parseFloat(sNum));
    }
    else{
        document.getElementById("answer").innerHTML = "invalid !";
    }
}

function fnDel(){
    let previous = document.getElementById("calculation").innerHTML;
    let after = previous.slice(0,-1);
    document.getElementById("calculation").innerHTML = after;
}

function fnAC(){
    document.getElementById("calculation").innerHTML = 0;
    document.getElementById("answer").innerHTML = 0;
    op = null;
    fNum = null;
    sNum = null;
}