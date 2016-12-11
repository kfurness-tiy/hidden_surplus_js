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



    let width = $(window).innerWidth() * 0.40,
        height = $(window).innerWidth() * 0.40,
        radius = Math.min(width, height) / 2;

    let color = d3.scaleOrdinal()
        .range(['rgba(30,156,150,0.2)', 'rgba(115,191,184,0.2)', 'rgba(59,102,112,0.2)', 'rgba(158,157,154,0.2)', 'rgba(80,163,153,0.2)']);

        function genData () {
          let where = ['charity', 'family', 'school', 'fundraiser', 'other']

          let dataset = new Array();

          where.map((c,i,a) => {
            let total = 0;
            selectWhere.map((j) => {
              if (c === j) {
                total += 1;
              }
            })
            let obj = {"category": c, "total": total}
            dataset.push(obj);
          })
          console.log(dataset);
          return dataset;
        }

        genData();

    let svg = d3.select("#whereDonateChartDiv").append("svg")
      .attr("width", width)
      .attr("height", height);

    var chartGroup = svg.append("g");

    let arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 50)
      .startAngle(0)
      .endAngle(Math.PI / 2);

    let pie = d3.pie()
      .sort(null)
      .value(function(d) {console.log(d);})


    chartGroup.selectAll("arc")
        .data(pie(genData))
      .enter().append("g")
        .attr("class", "arc");

  }

  d3.select(window).on("resize", whereToDonateDonut);
  whereToDonateDonut();
});
