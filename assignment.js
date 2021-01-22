function kilometerToMeter(kilometer) {
    if (kilometer <= 0) {
        return "Error: Distance can not be Negative or Zero";
    } else {
        var meter = kilometer * 1000;
    }
    return meter;
}
var result1 = kilometerToMeter(5);
console.log(result1);
//===========Convert Kilometer to Meter Part End================


function budgetCalculator(watch, phone, laptop) {
    if (watch <= 0 || phone <= 0 || laptop <= 0) {
        return "Error: Negative value or Zero can not be accepted";
    } else {
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var total = watchPrice + phonePrice + laptopPrice;
    }
    return total;
}
var result2 = budgetCalculator(6, 7, 6);
console.log(result2);
//===========Budget Calculator Part End================


function hotelCost(days) {
    if (days <= 0) {
        return "Error: Negative value or Zero can not be accepted";
    }
    if (days <= 10) {
        var totalTk = days * 100;
    } else if (days <= 20) {
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        totalTk = firstPart + secondPart;
    } else {
        firstPart = 10 * 100;
        secondPart = 10 * 80;
        remaining = days - 20;
        var thirdPart = remaining * 50;
        totalTk = firstPart + secondPart + thirdPart;
    }
    return totalTk;
}
var totalHotelCost = hotelCost(25);
console.log(totalHotelCost);
//===========Hotet Cost Part End================


function megaFriend(friends) {
    var length = 0;
    if(friends.length==0||friends===undefined){
        return "Error: Your array box is Empty";
    }
    for (var i = 0; i < friends.length; i++) {
        var max = friends[i].length;
        if (max > length) {
            length = max;
            var result = friends[i];
        }
    }
    return result;
}
var names = ['Azizul','Islam','Milton','Firoj','Apu','Abir','Saykat'];
var bigName = megaFriend(names);
console.log(bigName);
//===========Mega Friend Part End================