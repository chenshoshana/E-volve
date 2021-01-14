export const UtilService = {
    makeId,
    getRandomInt,
    formatTime
};

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min); // Min is inclusive, Max is Exclusive
}
function createTime() {
    var timeNow = new Date();
    var hours = timeNow.getHours();
    var minutes = timeNow.getMinutes();
    var seconds = timeNow.getSeconds();
    var timeString = "" + ((hours > 12) ? hours - 12 : hours);
    timeString += ((minutes < 10) ? ":0" : ":") + minutes;
    timeString += ((seconds < 10) ? ":0" : ":") + seconds;
    return timeString;
}
function formatTime(time) {
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var timeString = "" + ((hours > 12) ? hours - 12 : hours);
    timeString += ((minutes < 10) ? ":0" : ":") + minutes;
    timeString += ((seconds < 10) ? ":0" : ":") + seconds;
    return timeString;
}