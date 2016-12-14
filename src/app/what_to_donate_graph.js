'use strict';

const fbRef = firebase.database().ref();
const fbDoGood = fbRef.child("doGood");

fbDoGood.on('value', (snapshot) => {

function whatToDonateBar () {

  var svgtest = d3.select('body').select('.bar');

  if (!svgtest.empty()) {
    svgtest.remove();
  }

  let printedCategory = ['Food/Beverage', 'Beauty', 'Clothing/Accesories', 'Enertainment', 'Service', 'Other']

  let fbData = snapshot.val();
  let dataArr = Object.values(fbData);
  let selectWhat = [];

  dataArr.map((c) => {
    selectWhat.push(c.selectWhat);
  })

  let getData = function () {
    let arr = ['food', 'beauty', 'clothing', 'entertainment', 'service', 'product'];

    let dataset = new Array();

    arr.map((c, i) => {
      let total = 0;
      selectWhat.map((d) => {
        if (c === d) {
          total += 1;
        }
      });
      let obj = {"category": printedCategory[i], "total": total};
      dataset.push(obj);
    })
    return dataset;
  }

  let finalData = getData();

  let color = d3.scaleOrdinal()
      .range(['rgba(30,156,150,0.4)', 'rgba(115,191,184,0.4)', 'rgba(59,102,112,0.4)', 'rgba(158,157,154,0.4)', 'rgba(80,163,153,0.4)', 'rgba(121,121,121,0.4)']);

  let hoverColor = d3.scaleOrdinal()
      .range(['rgb(30,156,150)', 'rgb(115,191,184)', 'rgb(59,102,112)', 'rgb(158,157,154)', 'rgb(80,163,153)', 'rgb(121,121,121)']);

  function getYAxis () {
    let totalArr = [];
    finalData.map((c,i) => {
      totalArr.push(c.total)
    })
    let maxNum = Math.max(...totalArr);
    return maxNum;
  }

  let maxTotal = getYAxis();

  let width = function (){
    if($(window).innerWidth() > 752) {
      return $(window).innerWidth() * 0.30
    } else {
      return $(window).innerWidth() * 0.75;
      }
    };
  let height = function () {
    if($(window).innerWidth() > 752) {
      return $(window).innerWidth() * 0.30;
    } else {
      return $(window).innerWidth() * 0.50;
      }
   }

  let tooltip = d3.select("body").append("div")
    .attr("class", "tooltipBar")
    .style("opacity", "0")
    .style("position", "absolute");

  let x = d3.scaleBand()
    .domain(printedCategory)
    .range([0, width()])
    .paddingInner(0.1176);

  let xAxis = d3.axisBottom(x);

  let svg = d3.select("#whatDonateChartDiv")
    .append("svg")
      .classed("bar", true)
      .attr("height", height())
      .attr("width", width())

  let eventFocus = (d,i,a,self) => {
    self.style.fill = hoverColor(i);
    tooltip.style("opacity", "5")
      .style("left", d3.event.pageX - 50 + "px")
      .style("top", d3.event.pageY - 70 + "px")
    d3.select(".tooltipBar").classed("hidden", false)
    tooltip.html('<span class="totalBarDisp">' + d.total + ' donations' + '</span> <br/> <span class="fromDisp"> from </span> <br/> <span class="categoryDisp">' + d.category + '</span>')
  }

  let eventErase = (d,i,a,self) => {
    self.style.fill = color(i);
    d3.select(".tooltipBar").classed("hidden", true)
  }


  svg.selectAll("rect")
    .data(finalData)
    .enter().append("rect")
      .attr("height", function (d) {
          return d.total * 15;
      })
      .attr("width", function (d,i) {
        let wide = Math.floor((width() / 6) - 5)
        return wide
      })
      .attr("x", function (d,i) {return (width() / 6) * i})
      .attr("y", function (d,i) {return (height() - 20) - (d.total * 15)})
      .attr("fill", function (d,i) {
        return color(i)
        })
        .on("mouseover", function (d,i,a) {
          const self = this;
          eventFocus(d,i,a,self);
        })
        .on("touchstart", function (d,i,a) {
          const self = this;
          eventFocus(d,i,a,self);
        })
        .on("mouseout", function (d,i,a) {
          const self = this;
          eventErase(d,i,a,self)
        })
        .on("touchend", function (d,i,a) {
          const self = this;
          eventErase(d,i,a,self)
        })
      }

  $(window).resize(whatToDonateBar);
  d3.select(window).on("resize", whatToDonateBar);
  whatToDonateBar();
});
