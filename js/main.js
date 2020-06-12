function gotoUrl(a) {
    PreventExitPop = !1,
    window.location.href = afurl;
}
var mydate = new Date, 
    year = mydate.getFullYear(), 
    month = mydate.getMonth(), 
    day = mydate.getDate(), 
    weekday = mydate.getDay(), 
    montharray = new Array("styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"),
     weekdayarray = new Array("W każdą niedzielę","W każdy poniedziałek","Każdy wtorek","W każdą środę","W każdy czwartek","W każdy piątek","W każdą sobotę"), 
    count = 1, 
    conMid = document.querySelector('.wheel-image-border'), 
    headline = document.getElementById("headline"), 
    topDate = document.getElementById("topDate"), 
    today = document.getElementById("today"), 
    con = document.getElementById("container"), 
    whCon = document.querySelector(".wheel"), 
    wheel = document.getElementById('wheel'),
    dWheel = document.querySelector(".wheel-image"), 
    button = conMid, 
    device = document.querySelector(".wheel-prize"), 
    first = document.getElementById("wheel-prize"), 
    second = document.getElementById("instructions");

var wheelHeight = wheel.offsetHeight;
conMid = wheelHeight;

function spin() {
    switch (count) {
    case 1:
        dWheel.className = "spinAround",
        setTimeout(function() {
            alert("We're sorry \n\n Please try again. You have one more chance!")
        }, 6800);
    break;
    case 2:
        dWheel.className = "spinAround2",
        setTimeout(function() {
            dWheel.className = dWheel.className + " transparent"
        }, 6800),
        setTimeout(function() {
            var w = document.querySelector('.body').offsetWidth;
            if (w < 568) {
                device.classList.add('active');
                wheel.classList.add('is-winning');
                
                device.style.left = whCon.offsetWidth / 4 + "px",
                device.style.width = '50%';
                device.style.top = conMid / 20 + "px";
            }
            else{
                device.classList.add('active');
                wheel.classList.add('is-winning');
                device.style.left = whCon.offsetWidth / 3 + "px",
                device.style.width = '34%';
                device.style.top = conMid / 6 + "px";
            }
        }, 7000),
        setTimeout(function() {
            document.querySelector('.canvas_box').classList.add('z_top');
            startConfetti();
            setTimeout(function() {
                second.style.display = "block";
            }, 1500)
        }, 9000)
    }
    count++
}

document.querySelector('.wheel-image-border').addEventListener('click',spin);