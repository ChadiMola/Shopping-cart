function make(b) {
  var a = document.getElementById(b);
  if (a === null) {
    var a = "000";
  } else {
    var a = a.innerText;
  }
  return a;
}
function num(x) {
  if (document.getElementById(x) == undefined) {
    return 0;
  } else {
    return document.getElementById(x).value;
  }
}
function total() {
  var p1 = make("price1");
  var p2 = make("price2");
  var p3 = make("price3");
  var x =
    parseFloat(p1.substr(2)) * num("q1") +
    parseFloat(p2.substr(2)) * num("q2") +
    parseFloat(p3.substr(2)) * num("q3");
  var tab = document.getElementsByClassName("total");
  Array.from(tab).forEach((el) => {
    el.innerText = "€ " + x.toFixed(2);
  });
}
function rem(a) {
  let d = document.querySelector(".cart");
  d.removeChild(a);
  return total();
}
function lol() {
  let tab = document.querySelectorAll(".rem");
  let r1 = tab[0];
  let r2 = tab[1];
  let r3 = tab[2];
  document.getElementById("close1").addEventListener("click", function () {
    rem(r1);
  });
  document.getElementById("close2").addEventListener("click", function () {
    rem(r2);
  });
  document.getElementById("close3").addEventListener("click", function () {
    rem(r3);
  });
}
function plus(a) {
  var x = parseInt(document.getElementById(a).value) + 1;
  document.getElementById(a).value = x;
  return total();
}
function mines(a, b) {
  if (document.getElementById(a).value == 1) {
    return rem(b);
  }
  if (document.getElementById(a).value > 0) {
    var x = parseInt(document.getElementById(a).value) - 1;
    document.getElementById(a).value = x;
    return total();
  }
}
function adjust() {
  var tabplus = document.querySelectorAll(".plus");
  var tabmines = document.querySelectorAll(".mines");
  let tab = document.querySelectorAll(".rem");
  let r1 = tab[0];
  let r2 = tab[1];
  let r3 = tab[2];
  tabplus[0].addEventListener("click", function () {
    plus("q1");
  });
  tabmines[0].addEventListener("click", function () {
    mines("q1", r1);
  });
  tabplus[1].addEventListener("click", function () {
    plus("q2");
  });
  tabmines[1].addEventListener("click", function () {
    mines("q2", r2);
  });
  tabplus[2].addEventListener("click", function () {
    plus("q3");
  });
  tabmines[2].addEventListener("click", function () {
    mines("q3", r3);
  });
}
