function circleArea(input) {
    if (typeof input == 'number') {
      let circleAreaResult = Math.pow(input, 2) * Math.PI;
      console.log(circleAreaResult.toFixed(2));
    }
    else {
        let type = typeof input;
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
  }