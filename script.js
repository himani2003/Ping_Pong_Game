let ball=document.querySelector(".ball");
let board=document.querySelector(".board");

let boardcord=board.getBoundingClientRect();
let booardtop=boardcord.top;
let boardleft=boardcord.left;

let leftpaddle=document.querySelector(".left");
let rightpaddle=document.querySelector(".right");

let x =true, y=true;

// user unput listen
document.addEventListener("keydown",function(e){
    // console.log(e);

    if(e.key=='w'){
        //left paddle
        movePaddle(leftpaddle,-window.innerHeight*0.1);
    }else if(e.key=='s'){
        //left paddle
        movePaddle(leftpaddle,window.innerHeight*0.1);
    }else if(e.key=='ArrowUp'){
        //right paddle
        movePaddle(rightpaddle,-window.innerHeight*0.1);
    }else if(e.key=='ArrowDown'){
        //right paddle
        movePaddle(rightpaddle,window.innerHeight*0.1);
    }
})

function movePaddle(cPaddle,change){
    let cpaddlebound=cPaddle.getBoundingClientRect();
    if(cpaddlebound.top+change>=booardtop && cpaddlebound.bottom+change<=boardcord.bottom){
        cPaddle.style.top=cpaddlebound.top+change+"px";
    }
}

function moveball(){
    let ballcord=ball.getBoundingClientRect();
    let balltop=ballcord.top;
    let ballleft=ballcord.left;

    //is in boundary of board
    //handle vertical boundary
    if(balltop<=booardtop || ballcord.bottom>=boardcord.bottom){
        //vertically outside
        y=!y;
    }
    //handle horizontal boundary
    // if(ballleft<=boardleft || ballcord.right>=boardcord.right){
    //     //horizontally outside
    //     x=!x;
    // }
    ball.style.top= y==true? balltop+8+"px" : balltop-8+"px";
    ball.style.left= x==true? ballleft+8+"px" : ballleft-8+"px";
    requestAnimationFrame(moveball);
}
// requestAnimationFrame(moveball);