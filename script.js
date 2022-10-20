function total(p1, p2, p3) {
  var p1 = document.getElementById("price1").innerText;
  var p2 = document.getElementById("price2").innerText;
  var p3 = document.getElementById("price3").innerText;
  var x =
    parseFloat(p1.substr(2)) +
    parseFloat(p2.substr(2)) +
    parseFloat(p3.substr(2));
  var tab = document.getElementsByClassName("total");
  Array.from(tab).forEach((el) => {
    el.innerText = "€ " + x;
  });
}
