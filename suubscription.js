// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;

// let promptCounter = 0;
// let hasSubscribed = false;

// const ID = setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS) {
//         console.log("Stop interval");
//         clearInterval(ID)
//         return
//     }

//     console.log("Subscribe! - " + Date.now());
//     promptCounter += 1;
// }, PROMPT_DELAY)

// const data = Date.now();

// setTimeout(() => {
//     const data2 = Date.now();

//     console.log(data)
//     console.log(data2)
//     console.log(data2 - data)
// }, 3000);

const refs = {
    startBtn: document.querySelector("button[data-action-start]"),
    stopBtn: document.querySelector("button[data-action-stop]"),
    clockface: document.querySelector(".js-clockface")
};

class Timer {
    constructor({onTick}) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;

        this.init();
    };

    init() {
        const time = this.getTimeComponents(0)
        this.onTick(time)
    }

    start() {
        if (this.isActive) {
            return
        }

        const startTime = Date.now()
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const curretnTime = Date.now();
            const deltaTime = curretnTime - startTime;
            const time = this.getTimeComponents(deltaTime)
            // console.log(timeComponents)
            updateClockface(time)
            // console.log(`${hours}:${mins}:${secs}`)
            this.onTick(time)
            console.log(`${pad(new Date(deltaTime).getUTCHours())}:${pad(new Date(deltaTime).getUTCMinutes())}:${pad(new Date(deltaTime).getUTCSeconds())}
            `)
        }, 1000)
    }
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        const time = this.getTimeComponents(0)
        this.onTick(time)
    }

    getTimeComponents(time) {
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))));
    const mins = pad(Math.floor((time % (1000 * 60 * 60) / (1000 * 60))));
    const secs = pad(Math.floor((time % (1000 * 60) / 1000)))
    return {hours, mins, secs}
};
}

const timer = new Timer({
    onTick: updateClockface
})

// timer.start();

// function getTimeComponents(time) {
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60) / (1000 * 60))));
//     const secs = pad(Math.floor((time % (1000 * 60) / 1000)))
//     return {hours, mins, secs}
// };

function pad(value) {
    return String(value).padStart(2, "0");
}


refs.startBtn.addEventListener("click", timer.start.bind(timer));

refs.stopBtn.addEventListener("click", timer.stop.bind(timer))

function updateClockface({ hours, mins, secs }){
    refs.clockface.textContent = `${hours}:${mins}:${secs}`
}