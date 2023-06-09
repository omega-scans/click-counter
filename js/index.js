var nos = document.getElementById("nos");
var res = document.getElementById("reset");
var resbtn = document.getElementById("resbtn");
var col = document.getElementById("color");
let outer = document.querySelector(".outer-circle");
let inner = document.querySelector(".inner-circle");

var obgc = ['#33a6bb','#00539C', '#FEE715','#CCF381','#2C5F2D'];
var ibgc =['#253A47','#EEA47F','#101820','#4831D4','#97BC62']



var i=0;

function start(){
  if(i==0)
  {
    nos.innerHTML= "start"
    res.style.display="none";
  }
}
function resdis(){
  if(i>0)
{
  res.style.display="block";

}
}
start();



function incno(){

  i = i+1;
  resdis();

  nos.innerHTML = i;

}

function rset(){
  i =0;
  start();
}


function changecol(c)
{
  if(c==0)
  {
    outer.style.backgroundColor= obgc[0];
    inner.style.backgroundColor= ibgc[0];
    resbtn.style.backgroundColor= ibgc[0];

  }
else if(c==1)
{
  outer.style.backgroundColor= obgc[1];
  inner.style.backgroundColor= ibgc[1];
  resbtn.style.backgroundColor= ibgc[1];

}
else if (c == 2) {
  outer.style.backgroundColor= obgc[2];
  inner.style.backgroundColor= ibgc[2];
  resbtn.style.backgroundColor= ibgc[2];

}
else if (c == 3) {
  outer.style.backgroundColor= obgc[3];
  inner.style.backgroundColor= ibgc[3];
  resbtn.style.backgroundColor= ibgc[3];

}
else if (c == 4) {
  outer.style.backgroundColor= obgc[4];
  inner.style.backgroundColor= ibgc[4];
  resbtn.style.backgroundColor= ibgc[4];

}

}
window.onload = function() {
  changecol(0);
}
