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

    let width = $(window).innerWidth() * 0.30,
        height = $(window).innerWidth() * 0.30,
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
      return dataset;
      }

    let finalData = genData();

    let svg = d3.select("#whereDonateChartDiv")
      .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
          .attr("transform", "translate(" + (width / 2) + "," + (height / 2) + ")");

    let arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    let pie = d3.pie()
      .value(function(d) { return d.total; })
      .sort(null);

    let path = svg.selectAll('path')
      .data(pie(finalData))
      .enter().append('path')
        .attr('d', arc)
        .attr('fill', function(d, i) {
          return color(i);
      });


  }

  d3.select(window).on("resize", whereToDonateDonut);
  whereToDonateDonut();
});
