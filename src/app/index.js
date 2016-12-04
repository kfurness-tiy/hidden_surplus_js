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
  //displays entire object

  console.log(snapshot.val());
  console.log(snapshot.key);

  let data = snapshot.val();

  let arr = Object.keys(data);



  d3.select(window).on("resize",callFunction);
  callFunction();

  function callFunction(){

    var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = 32;


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

svg.selectAll("circle")
  .data(arr)
  .enter().append("circle")
    .attr("cx", function(d) { return randomWidth() })
    .attr("cy", function(d) { return randomHeight() })
    .attr("r", radius)
    .style("fill", function(d, i) { return color(i); })
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

function dragstarted(d) {
  d3.select(this).raise().classed("active", true);
}

function dragged(d) {
  d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
}

function dragended(d) {
  d3.select(this).classed("active", false);
}
  }

});
