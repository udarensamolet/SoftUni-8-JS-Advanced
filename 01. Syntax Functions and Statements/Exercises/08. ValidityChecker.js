function validityChecker(x1, y1, x2, y2) {
    let distanceTwoPoints = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    let distanceStartFirstPoint = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2));
    let distanceStartSecondPoint = Math.sqrt(Math.pow((0 - x2), 2) + Math.pow((0 - y2), 2));

    if (Number.isInteger(distanceStartFirstPoint)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(distanceStartSecondPoint)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(distanceTwoPoints)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}