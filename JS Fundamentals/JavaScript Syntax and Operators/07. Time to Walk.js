function  timeToWalk(steps, meters, speedKmH) {
    let totalMeters = Number(steps) * Number(meters);
    let speedMS = speedKmH / 3.6;

    let seconds = Math.ceil(totalMeters / speedMS);
    let secondsForBreaks = Math.floor(totalMeters / 500) * 60;

    let date = new Date(null);
    date.setSeconds(seconds + secondsForBreaks);

    console.log(date.toISOString().substr(11, 8));
}

timeToWalk(2564, 0.70, 5.5)