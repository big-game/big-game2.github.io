
var mydate = new Date()
mydate.setDate(mydate.getDate());
var year = mydate.getYear()
if (year < 1000)
    year += 1900
var day = mydate.getDay()
var month = mydate.getMonth()
var daym = mydate.getDate()
if (daym < 10)
    daym = "0" + daym
var dayarray = new Array("nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota");
var montharray = new Array("januar", "februar", "mart", "april", "maj", "jun", "juli", "avgust", "septembar", "oktobar", "novembar", "decembar");
