var countDownDate = new Date("Apr 11, 2026 8:00:00").getTime();

            var x = setInterval(function() {

            var now = new Date().getTime();

            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            var day_text = " dni ";
            if (days === 1) day_text = " dzień" ;
            var hours_text = " godzin ";
            if (hours === 1) hours_text = " godzina ";
            document.getElementById("time").innerHTML = days + " dni " + hours + " godzin "
            + minutes + " minut " + seconds + " sekund ";

            if (distance < 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
            }
            }, 1000);