//Assgnment3_task_1
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var todaysGoal = kilometerToMeter(5);

//Assgnment3_task_2
function budgetCalculator(num1, num2, num3) {
    var watchPrice = num1 * 50;
    var mobilePrice = num2 * 100;
    var laptopPrice = num3 * 500;
    var result = watchPrice + mobilePrice + laptopPrice;
    return result;
}

//Assgnment3_task_3
function hotelCost(days) {
    var cost = 0;
    if (days <= 10) {
        cost = days * 100;
    } else if (days <= 20) {
        var firstPhaseCost = 10 * 100;
        var daysLeft = days - 10;
        var secondPhaseCost = daysLeft * 80;
        var cost = firstPhaseCost + secondPhaseCost;
    } else {
        var firstPhaseCost = 10 * 100;
        var secondPhaseCost = 10 * 80;
        var daysLeft = days - 20;
        var thirdPhaseCost = daysLeft * 50;
        cost = firstPhaseCost + secondPhaseCost + thirdPhaseCost;
    }
    return cost;
}

//Assgnment3_task_4
var friend = ["bah", "ashek", "fardin", "asif"];

function megaFriend(friend) {
    var largeName = friend[0];
    for (var i = 0; i < friend.length; i++) {
        var element = friend[i];
        if (element.length > largeName.length){
            largeName = element;
        }
        
    }
    return largeName;
}
