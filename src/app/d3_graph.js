'use strict';

const fbRef = firebase.database().ref();
const fbDoGood = fbRef.child("doGood");

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
  radius = 20;

var tooltip = d3.select("body").append("div")
  .style("opacity", "0").style("position", "absolute");

let time = new Date();
let timeNow = time.getTime();
let week = 604800000;
let weekOld = timeNow - week;

function randomWidth() {
  let num = Math.round(Math.random() * (width - radius * 2) + radius)
  return num;
}

function randomHeight() {
  let num = Math.round(Math.random() * (height - radius * 2) + radius)
  return num;
}

var recentColor = d3.scaleOrdinal()
    .range(['pink', 'purple', 'silver']);

var color = d3.scaleOrdinal()
    .range(d3.schemeCategory20);
    // .range(['black', 'red', 'blue', 'yellow']);

svg.selectAll("circle")
  .data(arr)
  .enter().append("circle")
    .attr("cx", function(d) { return randomWidth() })
    .attr("cy", function(d) { return randomHeight() })
    .attr("r", radius)
    .attr("class", function(d) {
      if (weekOld <= d.postTime) {
        return "newer"
      } else  {
        return "older"
      }
    })
    .style("fill", function(d, i) {
        if ($(this).hasClass("newer")) {
           return recentColor(i);}
         else {
           return color(i);
         }})
    .on("mouseover", function(){this.style.fill =
        "red"})
        .on("mouseout", function(d, i) {
            if ($(this).hasClass("newer")) {
               this.style.fill = recentColor(i);}
             else {
               this.style.fill = color(i);
             }})
    .attr("d", function () {return arr})
    .on("mousemove", function(d,i,a){
        tooltip.style("opacity", "5")
          .style("left",d3.event.pageX+"px")
          .style("top",d3.event.pageY+"px")
        tooltip.html('<span class="dispAmount"> Amount: $' + arr[i].amount + '</span><br/>'
          + '<span class="dispDonated">Donated: ' + arr[i].gaveUp + '</span><br/>' + '<span class="dispTo">Donated to: ' + arr[i].donateTo + '</span>');
    })


  }

});
