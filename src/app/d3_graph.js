'use strict';

var config = {
   apiKey: "AIzaSyAxBPqozNv7Ra_Kn8m9E0l2BWUjMhm_pfI",
   authDomain: "hidden-surplus-js.firebaseapp.com",
   databaseURL: "https://hidden-surplus-js.firebaseio.com",
   storageBucket: "hidden-surplus-js.appspot.com",
   messagingSenderId: "393536735786"
 };
 firebase.initializeApp(config);

const fbRef = firebase.database().ref();
const fbDoGood = fbRef.child("doGood");

function addDoGood (obj) {
  let doGood = obj;
  const doGoodId = fbDoGood.push().key;

  let updates = {};
  updates['doGood/' + doGoodId] = doGood;
  fbRef.update(updates);
}

function getValue () {
  let doGood = {
    name: document.getElementById('name').value,
    amount: Number(document.getElementById('amount').value),
    donateTo: document.getElementById('donateTo').value,
    gaveUp: document.getElementById('gaveUp').value,
    selectWhat: document.getElementById("selectWhat").value,
    selectWhere: document.getElementById("selectWhere").value,
  }
  addDoGood(doGood);
}

document.getElementById('submitForm').onclick = getValue;


fbDoGood.on('value', (snapshot) => {

  let data = snapshot.val();
  let arr = Object.values(data);

  let total = 0;

  arr.map((c,i,a) => {
    total += c.amount;
    return total
  });

  document.getElementById('totalAmounts').innerHTML = "$" + total;

  d3.select(window).on("resize",callFunction);
  callFunction();

function callFunction(){

  var svg = d3.select("svg"),
  width = +svg.attr("width"),
  height = +svg.attr("height"),
  radius = 32;

var tooltip = d3.select("body").append("div")
  .style("opacity", "0").style("position", "absolute");


function randomWidth() {
  let num = Math.round(Math.random() * (width - radius * 2) + radius)
  return num;
}

function randomHeight() {
  let num = Math.round(Math.random() * (height - radius * 2) + radius)
  return num;
}

var color = d3.scaleOrdinal()
    .range(d3.schemeCategory20);
    // .range(['black', 'red', 'blue', 'yellow']);

svg.selectAll("circle")
  .data(arr)
  .enter().append("circle")
    .attr("cx", function(d) { return randomWidth() })
    .attr("cy", function(d) { return randomHeight() })
    .attr("r", radius)
    .style("fill", function(d, i) { return color(i); })
    .on("mouseover", function(){this.style.fill =
        "red"})
        .on("mouseout", function(d,i){this.style.fill = color(i)})
    .attr("d", function () {return arr})
    .on("mousemove", function(d,i,a){
        tooltip.style("opacity", "5")
          .style("left",d3.event.pageX+"px")
          .style("top",d3.event.pageY+"px")
        tooltip.html("Amount: $" + arr[i].amount + "<br/>"
          + "Donated: " + arr[i].gaveUp + "<br/>" + "Donated to: " + arr[i].donateTo)
    })


  }

});