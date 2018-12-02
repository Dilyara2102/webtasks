let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Atyrau"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

let coun = document.querySelector("#countries");

let city = document.querySelector("#cities");

for (var index = 0; index < countries.length; index++) {
    var s = document.createElement('option');
    s.append(countries[index]);
    coun.append(s);
}
var addedKZ = false;
var addedRU = false;
var addedEN = false;
var addedFR = false;
var added = false;
function c(){
    if(added==true){
        for (var index = city.length; index > 0; index--) {
            city[index]=null;
        }
         addedKZ = false;
         addedRU = false;
         addedEN = false;
         addedFR = false;
         added = false;
    }
    if(coun.value== "Kazakhstan" && addedKZ==false ){
        for (var index = 0; index < cities_by_country.Kazakhstan.length; index++) {
            var s = document.createElement('option');
            s.append(cities_by_country.Kazakhstan[index]);
            city.append(s);
            addedKZ = true;
        }

    }
    else if(coun.value=="Russia"&& addedRU==false){
        for (var index = 0; index < cities_by_country.Russia.length; index++) {
            var s = document.createElement('option');
            s.append(cities_by_country.Russia[index]);
            city.append(s);
            addedRU = true;
        }
    }
    else if(coun.value=="England"&& addedEN==false){
        for (var index = 0; index < cities_by_country.England.length; index++) {
            var s = document.createElement('option');
            s.append(cities_by_country.England[index]);
            city.append(s);
            addedEN = true;
        }
    }
    else if(coun.value=="France"&& addedFR==false){
        for (var index = 0; index < cities_by_country.France.length; index++) {
            var s = document.createElement('option');
            s.append(cities_by_country.France[index]);
            city.append(s);
            addedFR = true;
        }
    }
    added = true;
}

document.querySelector('select').addEventListener('click',c);