let player;
const playerWrapper = $(".player")
const play = $("#play")

let eventsInit = () => {
    $(".player__start").click(e => {
        e.preventDefault();

        if (play.hasClass("fa-pause")) {
            play.removeClass("fa-pause");
            play.addClass("fa-play");
            player.pauseVideo()
        } else {
            play.removeClass("fa-play");
            play.addClass("fa-pause");
            player.playVideo()
        }
    });

    $(".player__playback").click(e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;

        $(".player__playback-button").css({left:`${newButtonPositionPercent}%`})

        player.seekTo(newPlaybackPositionSec)
    })
}

const formatTime = timeSec => {
    const roundTime = Math.round(timeSec);
    const minutes = addZero(Math.floor(roundTime / 60));
    const seconds = addZero(roundTime - minutes * 60);

    function addZero(num) {
        return num < 10 ? `0${num}` : num
    }
    return `${minutes}:${seconds}`
}
 
const onPlayerReady = () => {
    const durationSec = player.getDuration();
    let interval;
    const volume = player.getVolume();
    
    $(".player__duration-estimate").text(formatTime(durationSec));

    if (typeof interval !== "undefined") {
        clearInterval(interval);
    };

    interval = setInterval(() => {
        const completedSec = player.getCurrentTime();
        const completedPercent = (completedSec / durationSec) * 100;

        $(".player__playback-button").css({left:`${completedPercent}%`})
        $(".player__line").css({width:`${completedPercent}%`})
        $(".player__duration-completed").text(formatTime(completedSec))
    })
    
    
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '405',
      width: '660',
      videoId: 'UkBkuj0tT50',
      events: {
        'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
      },
      playerVars: {
        controls: 0,
        disablekb: 1,
        showinfo: 0,
        rel: 0,
        autoplay: 0,
        modestbranding: 0
      }
    });
};

eventsInit()