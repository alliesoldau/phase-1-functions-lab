// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    return Math.abs(42 - streetNumber);
    // Math.abs returns the absolute value
}

function distanceFromHqInFeet(streetNumber) {
    let blocks = distanceFromHqInBlocks(streetNumber);
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    let blocks = Math.abs(destination - start);
    return blocks * 264;
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    } else if (feet > 400 && feet <= 2000) {
        return (((feet - 400)*2) / 100); // must divide by 100 because it's 2 cents per foot
    } else if (feet > 200 && feet  <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}