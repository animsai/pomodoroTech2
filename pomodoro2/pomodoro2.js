const POMODORO_STATES = {
    WORK: 'work',
    REST: 'rest'
};
const TIMER_STATES = {
    STARTED: 'started',
    STOPPED: 'stopped',
    PAUSED: 'paused'
};

const WORKING_TIME_IN_MINUTES = 1;
const CHILLING_TIME_IN_MINUTES = 2;

window.onload = function(){
    var pomodoroApp = new Vue({
        el: "#pomodoroApp",
        data: {
            currentTimerState: TIMER_STATES.STOPPED,
            currentPomodoroState: POMODORO_STATES.WORK,
            interval:null,
            currentMin: WORKING_TIME_IN_MINUTES,
            currentSec: 0
        },
        computed: {
            pomodoroStateString: function () {
                return this.currentPomodoroState === POMODORO_STATES.WORK ? 'Work!' : 'Rest!'
            },
            min: function () {
                if (this.currentMin < 10) {
                    return '0' + this.currentMin;
                }

                return this.currentMin;
            },
            sec: function () {
                if (this.currentSec < 10) {
                    return '0' + this.currentSec;
                }

                return this.currentSec;
            }
        },
        methods: {
            start: function () {
                clearInterval(this.interval);
                this.currentTimerState = TIMER_STATES.STARTED;
                this._tick();
                this.interval = setInterval(this._tick, 1000);
            },
            pause: function () {
                this.currentTimerState = TIMER_STATES.PAUSED;
                clearInterval(this.interval);
            },
            stop: function () {
                this.currentTimerState = TIMER_STATES.STOPPED;
                clearInterval(this.interval);
                this.currentPomodoroState = POMODORO_STATES.WORK;
                this.currentMin = WORKING_TIME_IN_MINUTES;
                this.currentSec = 0;
            },
            _tick: function () {
                //if second is 0 and minute is not 0, decrement minute and set second to 59
                if (this.currentSec == 0 && this.currentMin !== 0) {
                    this.currentMin--;
                    this.currentSec = 59;
                } else if (this.currentSec !== 0) { //if second is not 0, just decrement second
                    this.currentSec--;
                }

                //if second is 0 and minute is 0, toggle working/resting intervals
                if (this.currentMin == 0 && this.currentSec == 0) {
                    this.currentPomodoroState = this.currentPomodoroState === POMODORO_STATES.WORK ? POMODORO_STATES.REST : POMODORO_STATES.WORK;
                    if (this.currentPomodoroState === POMODORO_STATES.WORK) {
                        this.currentMin = WORKING_TIME_IN_MINUTES;
                    }
                    else {
                        this.currentMin = CHILLING_TIME_IN_MINUTES;
                    }
                }
            }
        }
    });
}




