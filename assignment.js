function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Distance can not be Negative";
    } else {
        return meter = kilometer * 1000;
    }
}
var result1 = kilometerToMeter(10);
console.log(result1);
//===========Convert Kilometer to Meter Part End================


function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Negative value can not accepted";
    } else {
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var total = watchPrice + phonePrice + laptopPrice;
        return total;
    }
}
var result2 = budgetCalculator(6, 7, 6);
console.log(result2);
//===========Budget Calculator Part End================


function hotelCost(days) {
    if (days < 0) {
        return "Negative value can not be accepted";
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
var totalHotelCost = hotelCost(21);
console.log(totalHotelCost);
//===========Hotet Cost Part End================


function megaFriend(friends) {
    var length = 0;
    for (var i = 0; i < friends.length; i++) {
        var max = friends[i].length;
        if (max > length) {
            length = max;
            var result = friends[i];
        }
    }
    return result;
}
var names = ['AzizulMilton', 'Firoj', 'Salimul', 'Saykat', 'Rofikul', 'Rasel', 'Abir'];
var bigName = megaFriend(names);
console.log(bigName);
//===========Mega Friend Part End================