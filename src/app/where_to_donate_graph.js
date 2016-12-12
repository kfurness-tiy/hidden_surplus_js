'use strict';

const fbRef = firebase.database().ref();
const fbDoGood = fbRef.child("doGood");



fbDoGood.on('value', (snapshot) => {

  function whereToDonateDonut () {

    var svgtest = d3.select('body').select('.pie');

    if (!svgtest.empty()) {
      svgtest.remove();
    }

    let fbData = snapshot.val();
    let dataArr = Object.values(fbData);
    let selectWhere = [];

    dataArr.map((c,i,a) => {
      selectWhere.push(c.selectWhere);
    })

    let width = $(window).innerWidth() * 0.30,
        height = $(window).innerWidth() * 0.30,
        radius = Math.min(width, height) / 2.5,
        donutWidth = 80;

    let color = d3.scaleOrdinal()
        .range(['rgba(30,156,150,0.4)', 'rgba(115,191,184,0.4)', 'rgba(59,102,112,0.4)', 'rgba(158,157,154,0.4)', 'rgba(80,163,153,0.4)', 'rgba(121,121,121,0.4)']);

    let hoverColor = d3.scaleOrdinal()
        .range(['rgb(30,156,150)', 'rgb(115,191,184)', 'rgb(59,102,112)', 'rgb(158,157,154)', 'rgb(80,163,153)', 'rgb(121,121,121)']);

    let finalData = genData();

    function genData () {
      let where = ['charity', 'family', 'school', 'fundraiser', 'other']

      let dataset = new Array();

      where.map((c,i,a) => {
        let printedCategory = ['Charity', 'Family/Friend', 'School', 'Fundraiser', 'Other']
        let total = 0;
        selectWhere.map((j) => {
          if (c === j) {
            total += 1;
          }
        })
        let obj = {"category": printedCategory[i], "total": total, "pieTotal": dataArr.length}
        dataset.push(obj);
      })
      return dataset;
      }



    let svg = d3.select("#whereDonateChartDiv")
      .append("svg")
        .classed("pie", true)
        .attr("width", width)
        .attr("height", height)
        .append("g")
          .attr("transform", "translate(" + (width / 2) + "," + (height / 2) + ")");

    let arc = d3.arc()
      .innerRadius(radius - donutWidth)
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
          })
        .on("mouseover", function(d,i){
            this.style.fill = hoverColor(i)
            d3.select(this)
              .transition()
                .attr('d', arc
                  .innerRadius(radius * 0.5)
                  .outerRadius(radius * 1.05));
            showInfo(d);
        })
        .on("mouseout", function(d,i){
            this.style.fill = color(i);
            d3.select(this)
              .transition()
                .attr('d', arc
                  .innerRadius(radius - donutWidth)
                  .outerRadius(radius));
            removeInfo(d);
        })

      let circle = svg.append("circle")
        .attr("r", radius * 0.6)
        .style("fill", "white")

      function showInfo (e) {
        let newArr = [];
      svg.append("text")
            .data(function () {
              return Object.values(e);
              })
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .style("fill", "black")
            .text(function(d,i) {
              let percent = Math.floor((d.total / d.pieTotal) * 100)
              return d.category+ " " + percent + "%"
            })
      }

      function removeInfo() {
        svg.selectAll("text")
          .style("visibility", "hidden")
      }

  }

  d3.select(window).on("resize", whereToDonateDonut);
  whereToDonateDonut();
});
