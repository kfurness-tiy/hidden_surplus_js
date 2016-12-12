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
    let arr = ['food', 'beauty', 'clothing', 'enertainment', 'service', 'product'];

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

  let width = $(window).innerWidth() * 0.30,
  height = $(window).innerWidth() * 0.30;

  let x = d3.scaleBand()
    .domain(printedCategory)
    .range([0, width])
    .paddingInner(0.1176);

  let xAxis = d3.axisBottom(x);

  let svg = d3.select("#whatDonateChartDiv")
    .append("svg")
      .classed("bar", true)
      .attr("height", height)
      .attr("width", width)

  svg.selectAll("rect")
    .data(finalData)
    .enter().append("rect")
      .attr("height", function (d) {
          return d.total * 15;
      })
      .attr("width", function (d,i) {
        let wide = Math.floor((width / 6) - 5)
        return wide
      })
      .attr("x",function (d,i) {return 60 * i;})
      .attr("y", function (d,i) {return (height-40) - (d.total * 15)})
      .attr("fill", function (d,i) {
        return color(i);
      });

    svg.append("g")
      .attr("class", "x axis hideAxis")
      .attr("transform", "translate(0,300)")
      .call(xAxis);


}

  d3.select(window).on("resize", whatToDonateBar);
  whatToDonateBar();
});
