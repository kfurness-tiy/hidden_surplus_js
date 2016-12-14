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

  document.getElementById('totalAmounts').innerHTML = "$" + total.toFixed(2);

function callFunction(){

  var svgtest = d3.select('body').select('.scatter');

  if (!svgtest.empty()) {
    svgtest.remove();
  }

  let heightPx = $(window).height() * 0.40;
  let widthPx = $(window).innerWidth() * 0.75;


  var svg = d3.select("#svg")
    .append('svg')
      .classed("scatter", true),
      width = svg.attr("width", widthPx),
      height = svg.attr("height", heightPx),
      radius = 12;

  var chartGroup = svg.append("g")

  var tooltip = d3.select("body").append("div")
    .classed("tooltip", true)
    .style("opacity", "0")
    .style("position", "absolute");

  let time = new Date();
  let timeNow = time.getTime();
  let day = 86400000;
  let dayOld = timeNow - day;

  function randomSize(unit) {
    let num = Math.round(Math.random() * ((unit - radius * 2) - 5) + radius)
    return num;
  }

  var recentColor = d3.scaleOrdinal()
      .range(['rgb(30,156,150)', 'rgb(115,191,184)', 'rgb(59,102,112)', 'rgb(158,157,154)', 'rgb(80,163,153)']);

  var color = d3.scaleOrdinal()
      .range(['rgba(30,156,150,0.2)', 'rgba(115,191,184,0.2)', 'rgba(59,102,112,0.2)', 'rgba(158,157,154,0.2)', 'rgba(80,163,153,0.2)']);

  let eventFocus = (d,i,a,self) => {
      self.style.fill = "rgb(51,51,51)"
      d3.select(self).attr("r", 15)
          .classed("growRad", true)
      tooltip.style("opacity", "5")
        .style("left",d3.event.pageX+"px")
        .style("top",d3.event.pageY+"px")
      d3.select(".tooltip").classed("hidden", false)
      tooltip.html(function () {
        if (arr[i].showNameInfo === 'true') {
          return '<span class="dispAmount"> $' + arr[i].amount + '</span><br/><span class="dispTo"> donated to </span> <br/> <span class="dispToText"> ' + arr[i].donateTo + '</span><hr/>' + '<span class="dispTo">' + arr[i].name + ' gave up <br/></span>' + '<span class="dispToText">' + arr[i].gaveUp + '</span>'}
          else {
            return '<span class="dispAmount"> $' + arr[i].amount + '</span><br/><span class="dispTo"> donated to </span><br/><span class="dispToText">' + arr[i].donateTo + '</span><hr/><span class="dispTo"> Anonymous gave up <br/></span><span class="dispToText">' + arr[i].gaveUp + '</span><br/>'
          }
        })
      }

  let eventErase = (d,i,a,self) => {
    d3.select(".tooltip").classed("hidden", true)
    d3.select(self).attr("r", 12)
     .classed("growRad", false)
     if ($(self).hasClass("newer")) {
        self.style.fill = recentColor(i);}
      else {
        self.style.fill = color(i);
      }
    }

  chartGroup.selectAll("circle")
    .data(arr)
    .enter().append("circle")
      .attr("cx", function(d) { return randomSize(widthPx) })
      .attr("cy", function(d) { return randomSize(heightPx) })
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
           .on("mouseover", function (d,i,a) {
             const self = this;
            eventFocus(d,i,a,self);
          })
           .on("touchstart", function (d,i,a) {
             const self = this;
            eventFocus(d,i,a,self);
          })
          .on("mouseout", function (d,i,a){
            const self = this;
            eventErase(d,i,a,self);
          } )
          .on("touchend", function (d,i,a){
            const self = this;
            eventErase(d,i,a,self);
          } )

}

  $(window).resize(callFunction);
  d3.select(window).on("resize", callFunction);
  callFunction();
});
