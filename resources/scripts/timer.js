const countDownDate = new Date("Apr 11, 2026 8:00:00").getTime();

var x = setInterval(function () {

    const now = new Date().getTime();
    var days, hours, minutes, seconds;

    const distance = countDownDate - now;

    if (distance < 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    }
    else {
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }

    const irregularSpellingSet = new Set([2, 3, 4]);
    const irregularSpellingExceptions = new Set([12, 13, 14]);

    var dayText = " dni ";
    if (days === 1) dayText = " dzień ";

    var hoursText = " godzin ";
    if (hours === 1) hoursText = " godzina ";
    else if (irregularSpellingSet.has(hours % 10) && !irregularSpellingExceptions.has(hours)) hoursText = " godziny ";

    var minutesText = " minut ";
    if (minutes === 1) minutesText = " minuta ";
    else if (irregularSpellingSet.has(minutes % 10) && !irregularSpellingExceptions.has(minutes)) minutesText = " minuty ";

    var secondsText = " sekund ";
    if (seconds === 1) secondsText = " sekunda ";
    else if (irregularSpellingSet.has(seconds % 10) && !irregularSpellingExceptions.has(seconds)) secondsText = " sekundy ";

    document.getElementById("time").innerHTML = days + dayText + hours + hoursText
        + minutes + minutesText + seconds + secondsText;
}, 1000);