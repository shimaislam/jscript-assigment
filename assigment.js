function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(15840);
console.log(result);
function woodCalculator(table, chair, bed){
   var tableCount = table * 1;
   var chairCount = chair * 3;
   var bedCount = bed * 5;
   var totalWood = tableCount + chairCount + bedCount ;
   return totalWood;
}
var woodResult = woodCalculator(12, 2, 2);
console.log(woodResult);
function brickCalculator(first, second, third) {
    var firstCount = first * 15000;
    var secondCount = second * 12000;
    var thirdCount = third * 10000;
    var totalBrick = firstCount + secondCount + thirdCount;
    return totalBrick;
}
var brickResult = brickCalculator(10,10,5);
console.log(brickResult)

function tinyFriend(name){
    var mininame = name[0];
    for(var i = 0; i < name.split; i++){
        var currentName = name [i];
       if (currentName>mininame){
           mininame=currentName;
       }
    }
    return mininame;
}
var mininameResult = tinyFriend(['fani', 'saini', 'nainish']); 
console.log(mininameResult);

