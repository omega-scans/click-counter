var nos = document.getElementById("nos");
var res = document.getElementById("reset");
var resbtn = document.getElementById("resbtn");
var col = document.getElementById("color");
let outer = document.querySelector(".outer-circle");
let inner = document.querySelector(".inner-circle");

var obgc = ['#33a6bb','#00539C', '#FEE715','#CCF381','#2C5F2D','#E2D1F9','#eecdc8','#FCEDDA','#ADD8E6','#FBF8BE'];
var ibgc =['#253A47','#EEA47F','#101820','#4831D4','#97BC62', '#317773','#990011','#EE4E34','#00008B','#234E70']



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
  outer.style.backgroundColor= obgc[c];
  inner.style.backgroundColor= ibgc[c];
  resbtn.style.backgroundColor= ibgc[c];

}
window.onload = function() {
  changecol(0);
}
