// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return (location > 42) ? (location - 42) : (42 - location);
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    }
    else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return 2 * (distance - 400) / 100;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else {
        return "cannot travel that far"
    }
}