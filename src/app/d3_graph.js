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

function callFunction(){

let heightPx = $(window).height() * 0.60;
let widthPx = $(window).innerWidth() * 0.75;

var svg = d3.select("svg"),
  width = svg.attr("width", widthPx),
  height = svg.attr("height", heightPx),
  radius = 20;

var tooltip = d3.select("body").append("div")
  .classed("tooltip", true)
  .style("opacity", "0")
  .style("position", "absolute");

let time = new Date();
let timeNow = time.getTime();
let day = 86400000;
let dayOld = timeNow - day;

function randomWidth() {
  let num = Math.round(Math.random() * (widthPx - radius * 2) + radius)
  return num;
}

function randomHeight() {
  let num = Math.round(Math.random() * (heightPx - radius * 2) + radius)
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
      if (dayOld <= d.postTime) {
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
    // .on("mouseover", function(){this.style.fill =
    //     "red"})
        .on("mouseover", function(d,i,a){
            this.style.fill = "red";
            tooltip.style("opacity", "5")
              .style("left",d3.event.pageX+"px")
              .style("top",d3.event.pageY+"px")
            d3.select(".tooltip").classed("hidden", false)
            tooltip.html(function () {
              if (arr[i].showNameInfo === 'true') {
                return '<span class="dispAmount"> $' + arr[i].amount + '</span><br/>' + '<span class="dispName">' + arr[i].name + '</span><br/>' + '<span class="dispTo"> donated to </span> <br/> <span class="dispToText"> ' + arr[i].donateTo + '</span><hr/>' + '<span class="dispDonated"> gave up <br/></span>' + '<span class="dispDonatedText">' + arr[i].gaveUp + '</span>'}
                else {
                  return '<span class="dispAmount"> $' + arr[i].amount + '</span><br/> <span class="dispName"> Anonymous </span><br/>'  + '<span class="dispTo"> donated to </span><br/><span class="dispToText">' + arr[i].donateTo + '</span><hr/><span class="dispDonated"> gave up <br/><span class="dispDonatedText">' + arr[i].gaveUp + '</span><br/>'
                }
              })
            })
        .on("mouseout", function(d, i) {
           d3.select(".tooltip").classed("hidden", true)
            if ($(this).hasClass("newer")) {
               this.style.fill = recentColor(i);}
             else {
               this.style.fill = color(i);
          }})

  }

  d3.select(window).on("resize",callFunction);
  callFunction();
});
