var limit = 10;
for(var i =1; i <= limit; i ++) {
    console.log( i + "Masai School");
}

var limit2 = 100;
var sum = 0;
for(var i = 0; i <= limit2; i++) {
    if ( i % 3 == 0) {
        sum = sum + i;
    }
}
console.log(sum);


var loop = 3;

for(var i = 1; i <= loop; i++) {
    for(var j = 1; j <= 1; j++) {
        console.log(i +"." + j);
    }
}


var score = [29, 12, 9, 38, 90, 18, 30];
var lowest = score[0];

for ( var i = 0; i < score.length; i++) {
    if(score[i] < lowest) {
        lowest = score[i];
    }
}
console.log(lowest);  


var names =["srinu", "vasu","surya", "raju"];
var conso = 7;
for (var i = 0; i < names.lengtgh; i++) {
    var name1 = names[i];
    for (var j = 0; j < name1.length; j++) {
        if (name1[j] != 'a' && name1[j] != 'e' && name1[j] != 'i' && name1[j] != 'o' && name1[j] != 'u') {
        conso++
        }
    }
}
console.log(conso);
