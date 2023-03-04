function timeToWalk(steps, stepsLengthMeters, speedKmH) {
    let speedMs = speedKmH * (5 / 18);
    let distanceMs = steps * stepsLengthMeters;
    let timeSeconds = distanceMs / speedMs;
    let stops = Math.floor(distanceMs / 500);
    let neededTimeSeconds = timeSeconds + (stops * 60);

    let hours = Math.floor(neededTimeSeconds / 3600);
    let minutes = Math.floor((neededTimeSeconds - (hours * 3600)) / 60);
    let seconds = Math.round(neededTimeSeconds - (hours * 3600) - (minutes * 60),2);

    if (hours < 10){
        hours = 0 + hours.toString();
    }
    if (minutes < 10) {
        minutes = 0 + minutes.toString();
    }
    if (seconds < 10) {
        seconds = 0 + seconds.toString();
    }
    console.log(`${hours}:${minutes}:${seconds}`)
}