'use strict';

const fbRef = firebase.database().ref();
const fbDoGood = fbRef.child("doGood");


fbDoGood.on('value', (snapshot) => {

function whatToDonateBar () {

  // var svgtest = d3.select('body').select('.pie');
  //
  // if (!svgtest.empty()) {
  //   svgtest.remove();
  // }

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
      let printedCategory = ['Food/Beverage', 'Beauty', 'Clothing/Accesories', 'Enertainment', 'Service', 'Other']
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
    .range([0, width]);

  let xAxis = d3.axisBottom(x);

  let svg = d3.select("#whatDonateChartDiv").append("svg")
    .attr("height", height)
    .attr("width", width)

  svg.selectAll("rect")
    .data(finalData)
    .enter().append("rect")
      .attr("height", function (d) {
          console.log(d.total);
          return d.total * 15;
      })
      .attr("width", "50")
      .attr("x",function (d,i) {return 60 * i;})
      .attr("y", function (d,i) {return 300 - (d.total * 15)})
      .attr("fill", "red");



}

d3.select(window).on("resize", whatToDonateBar);
whatToDonateBar();
});
