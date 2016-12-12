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

  let fbData = snapshot.val();
  let dataArr = Object.values(fbData);
  let selectWhat = [];

  dataArr.map((c) => {
    selectWhat.push(c.selectWhat);
  })

  console.log(selectWhat);

  let maxTotal = function () {
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

  let finalData = maxTotal();

  let width = $(window).innerWidth() * 0.30,
  height = $(window).innerWidth() * 0.30;

  // let y = d3.scaleLinear()
  //   .domain([0, dataArr.length])
  //   .range()

}

d3.select(window).on("resize", whatToDonateBar);
whatToDonateBar();
});
