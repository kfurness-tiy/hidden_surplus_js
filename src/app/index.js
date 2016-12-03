'use strict';

var config = {
   apiKey: "AIzaSyAxBPqozNv7Ra_Kn8m9E0l2BWUjMhm_pfI",
   authDomain: "hidden-surplus-js.firebaseapp.com",
   databaseURL: "https://hidden-surplus-js.firebaseio.com",
   storageBucket: "hidden-surplus-js.appspot.com",
   messagingSenderId: "393536735786"
 };
 firebase.initializeApp(config);

const fbRef = firebase.database().ref();
const fbDoGood = fbRef.child("doGood");

function addDoGood (obj) {
  console.log("obj",obj);
  let doGood = obj;
  const doGoodId = fbDoGood.push().key;

  let updates = {};
  updates['doGood/' + doGoodId] = doGood;
  fbRef.update(updates);
}

function getValue () {
  console.log('pizza');
  let doGood = {
    name: document.getElementById('name').value,
    amount: Number(document.getElementById('amount').value),
    donateTo: document.getElementById('donateTo').value,
    gaveUp: document.getElementById('gaveUp').value,
    selectWhat: document.getElementById("selectWhat").value,
    selectWhere: document.getElementById("selectWhere").value,
  }
  console.log(doGood);
  addDoGood(doGood);
}

document.getElementById('submitForm').onclick = getValue;


fbDoGood.on('value', (snapshot) => {
  //displays entire object

  d3.select(window).on("resize",callFunction);
  callFunction();

  function callFunction(){

    var tooltip = d3.select("svg").append("div")
      .style("opacity", "0").style("position", "absolute")

    var svgtest = d3.select('body').select('svg');

    if (!svgtest.empty()) {
      svgtest.remove();
    }

    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = 500;

      var vertices = d3.range(100).map(function(d){ return [Math.random() * width, Math.random() * height]});

      var voronoi = d3.voronoi().size([width,height]);

      var svg = d3.select('body').append('svg').attr("width", '100%').attr('height', '100%');

      var chartGroup = svg.append("g")


      //zoom with mouse wheel
      chartGroup.call(d3.zoom()
      //how far I can zoom in/out
      .scaleExtent([0.8,2])
      .on("zoom", function() {
        chartGroup.attr("transform",d3.event.transform);
      }));

      chartGroup.append('g').attr('class','polygons')
      .selectAll('path')
      .data(voronoi.polygons(vertices))
      .enter().append('path')
        .attr("d",function(d){return "M"+d.join("L")+"Z";})
        .on("mousemove", function(d){
          tooltip.style("opacity", "1")
          .style("left",d[0][0]+"px")
          .style("top",d[0][1]+"px")
          // .style("left",d3.event.pageX+"px")
          // .style("top",d3.event.pageY+"px")
          // console.log(d3.event); Good to see all properties of mouse event
          tooltip.html("Number of sides: " + d.length);
        })
        // .on("mouseover", function(){this.style.fill =
        // "red"})
        // .on("mouseout", function(){this.style.fill = "white"})




      chartGroup.append('g').attr("class", "fuel")
        .selectAll('circle')
          .data(vertices)
            .enter().append('circle')
              .attr("cx", function(d){return d[0]})
              .attr("cy", function(d){return d[1]})
              .attr("r","2.5");

    d3.select("g.polygons").select("path:nth-child(30)")
      // can have several transitions!
      // .transition().duration(1000)
      // .style("fill", "red")
      .transition().duration(2000)
        // .delay(1000)
      .style("fill","blue").style("opacity","0.7")
      .attr("transform","translate(10,10)")



    d3.select("g.polygons").select("path:nth-child(30)")
      .dispatch("mousemove");

  }

});
