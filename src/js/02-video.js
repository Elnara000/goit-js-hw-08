
import throttle from "lodash.throttle";
import Player from '@vimeo/player';
const player = new Player("vimeo-player", {});

let currentTime = 0;
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {

    currentTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));    
    
}
const savedSettings = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(JSON.parse(savedSettings));


