'use strict';

const fbRef = firebase.database().ref();
const fbDoGood = fbRef.child("doGood");



fbDoGood.on('value', (snapshot) => {

  function whereToDonateDonut () {

    let fbData = snapshot.val();
    let dataArr = Object.values(fbData);
    let selectWhere = [];

    dataArr.map((c,i,a) => {
      selectWhere.push(c.selectWhere);
    })

    console.log(selectWhere);


    let width = $(window).innerWidth() * 0.40,
        height = $(window).innerWidth() * 0.40,
        radius = Math.min(width, height) / 2;

    let color = d3.scaleOrdinal()
        .range(['rgba(30,156,150,0.2)', 'rgba(115,191,184,0.2)', 'rgba(59,102,112,0.2)', 'rgba(158,157,154,0.2)', 'rgba(80,163,153,0.2)']);

    let svg = d3.select("#whereDonateChartDiv").append("svg")
      .attr("width", width)
      .attr("height", height)

    let arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 50)

    let pie = d3.pie()
      .sort(null)
      .value(function(d) {console.log(d);})

  }

  d3.select(window).on("resize", whereToDonateDonut);
  whereToDonateDonut();
});
