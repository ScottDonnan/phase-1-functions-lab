// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    let distance = Math.abs(blocks -42);
    return distance;
}

function distanceFromHqInFeet(block) {
    let distance = Math.abs((block - 42) * 264);
    return distance;
}

function distanceTravelledInFeet (current, newBlock) {
    return Math.abs((newBlock - current) * 264);
}

function calculatesFarePrice (start, destination) {
    let distance = Math.abs((destination - start) * 264);
    if (distance <= 400) {
        return 0;
    }
        else if (distance > 400 && distance < 2000) {
            return (distance - 400) * .02;
        }
            else if (distance > 2000 && distance < 2500) {
                return 25;
            }
                else {
                    return "cannot travel that far"
                }
}