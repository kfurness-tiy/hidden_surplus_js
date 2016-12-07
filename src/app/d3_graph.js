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

  var svgtest = d3.select('body').select('svg');

  if (!svgtest.empty()) {
    svgtest.remove();
  }

  let heightPx = $(window).height() * 0.60;
  let widthPx = $(window).innerWidth() * 0.75;

  var svg = d3.select("#testness").append('svg'),
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

  function randomWidth() {
    let num = Math.round(Math.random() * (widthPx - radius * 2) + radius)
    return num;
  }

  function randomHeight() {
    let num = Math.round(Math.random() * (heightPx - radius * 2) + radius)
    return num;
  }

  var recentColor = d3.scaleOrdinal()
      .range(['rgb(30,156,150)', 'rgb(115,191,184)', 'rgb(59,102,112)', 'rgb(158,157,154)', 'rgb(80,163,153)']);

  var color = d3.scaleOrdinal()
      .range(['rgba(30,156,150,0.2)', 'rgba(115,191,184,0.2)', 'rgba(59,102,112,0.2)', 'rgba(158,157,154,0.2)', 'rgba(80,163,153,0.2)']);
      // .range(['black', 'red', 'blue', 'yellow']);


  chartGroup.selectAll("circle")
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
          .on("mouseover", function(d,i,a){
              this.style.fill = "rgb(51,51,51)"
              d3.select(this).attr("r", 15)
                  .classed("growRad", true)
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
             d3.select(this).attr("r", 12)
              .classed("growRad", false)
              if ($(this).hasClass("newer")) {
                 this.style.fill = recentColor(i);}
               else {
                 this.style.fill = color(i);
            }})
}

  d3.select(window).on("resize", callFunction);
  callFunction();
});
