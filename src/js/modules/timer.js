function timer(deadline, parentSelector, daysSelector, hoursSelector,
    minutesSelector, secondsSelector) {
    
    function getTimeRemaining() {
        let days, hours, minutes, seconds;
        const t = new Date(deadline) - new Date();
        
        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            minutes = Math.floor(t / (1000 * 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        }

        return {'total': t, days, hours, minutes, seconds};
    }

    function getZero(num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setTimeRemaining() {
        const wrapper = document.querySelector(parentSelector),
              days = wrapper.querySelector(daysSelector),
              hours = wrapper.querySelector(hoursSelector),
              minutes = wrapper.querySelector(minutesSelector),
              seconds = wrapper.querySelector(secondsSelector);
        let idInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const t = getTimeRemaining();

            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);

            if (t.total <= 0) clearInterval(idInterval);
        }

        updateClock();
    }

    setTimeRemaining();
}

export default timer;