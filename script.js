function make(b){
 var a =document.getElementById(b)
 if(a=== null){
   var a="000"
 }
 else{
   var a=a.innerText
 }
 return a
}
function total(){
  var num=document.getElementsByClassName('quantity');
  var p1=make("price1");
  var p2 = make("price2");
  var p3 = make("price3");
  var x =
    parseFloat(p1.substr(2))*num[0].value +
    parseFloat(p2.substr(2))*num[1].value +
    parseFloat(p3.substr(2))*num[2].value;
  var tab = document.getElementsByClassName("total");
  Array.from(tab).forEach((el) => {
    el.innerText = "€ " + x.toFixed(2);
  });
}
function rem(a){
  let d = document.querySelector(".cart");
  d.removeChild(a);
  return total()
  
}
function lol(){
  let tab=document.querySelectorAll(".rem");
  let r1= tab[0];
  let r2= tab[1];
  let r3= tab[2];
  document.getElementById("close1").addEventListener("click", function() { rem(r1);});
  document.getElementById("close2").addEventListener("click", function() { rem(r2);});
  document.getElementById("close3").addEventListener("click", function() { rem(r3);});
  
}
function plus(a){
 var x=parseInt(document.getElementsByClassName('quantity')[a].value)+1;
 document.getElementsByClassName('quantity')[a].value=x;
 return total()
}
function mines(a){
  let tab=document.querySelectorAll(".rem");
  if(document.getElementsByClassName('quantity')[a].value>0){
  var x=parseInt(document.getElementsByClassName('quantity')[a].value)-1;
  document.getElementsByClassName('quantity')[a].value=x;
  return total()
}
if(document.getElementsByClassName('quantity')[a].value<1){
  return rem(tab[a])
}

}
function adjust(){
var tabplus=document.querySelectorAll('.plus');
var tabmines=document.querySelectorAll('.mines');
tabplus[0].addEventListener("click", function() { plus(0);});
tabmines[0].addEventListener("click", function() { mines(0);});
tabplus[1].addEventListener("click", function() { plus(1);});
tabmines[1].addEventListener("click", function() { mines(1);});
tabplus[2].addEventListener("click", function() { plus(2);});
tabmines[2].addEventListener("click", function() { mines(2);});

}