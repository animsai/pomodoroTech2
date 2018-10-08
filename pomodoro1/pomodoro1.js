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

var currentTimerState = TIMER_STATES.STOPPED;
var currentPomodoroState = POMODORO_STATES.WORK;
var interval;
var currentMin=WORKING_TIME_IN_MINUTES;
var currentSec=0;

function start() {
    clearInterval(interval);
    currentTimerState = TIMER_STATES.STARTED;
    _tick();
    interval = setInterval(_tick, 1000);
}
function pause() {
    currentTimerState = TIMER_STATES.PAUSED;
    clearInterval(interval);
}

function stop() {
    currentTimerState = TIMER_STATES.STOPPED;
    clearInterval(interval);
    currentPomodoroState = POMODORO_STATES.WORK;
    currentMin = WORKING_TIME_IN_MINUTES;
    currentSec = 0;
}

function _tick() {
    //if second is 0 and minute is not 0, decrement minute and set second to 59
    if (currentSec == 0 && currentMin !== 0) {
        currentMin--;
        currentSec = 59;
    } else if (currentSec !== 0) { //if second is not 0, just decrement second
        currentSec--;
    }

    //if second is 0 and minute is 0, toggle working/resting intervals
    if (currentMin==0 && currentSec==0){
        currentPomodoroState = currentPomodoroState === POMODORO_STATES.WORK ? POMODORO_STATES.REST : POMODORO_STATES.WORK;
        if (currentPomodoroState === POMODORO_STATES.WORK) {
            currentMin = WORKING_TIME_IN_MINUTES;
        }
        else {
            currentMin = CHILLING_TIME_IN_MINUTES;
        }
    }
    document.getElementById("min").innerHTML = currentMin;
    document.getElementById("sec").innerHTML = currentSec;
    document.getElementById("pomodoroState").innerHTML = currentPomodoroState;
}