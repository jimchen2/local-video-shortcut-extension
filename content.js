document.addEventListener('keydown', function(event) {
    const video = document.querySelector('video');
    if (!video) return;

    switch(event.key) {
        case 'f':
            event.preventDefault();
            document.fullscreenElement ? document.exitFullscreen() : video.requestFullscreen();
            break;
        case '<':
            event.preventDefault();
            video.playbackRate = Math.max(0.25, video.playbackRate - 0.25);
            break;
        case '>':
            event.preventDefault();
            video.playbackRate = Math.min(2, video.playbackRate + 0.25);
            break;
        case 'j':
            event.preventDefault();
            video.currentTime -= 10;
            break;
        case 'k':
            event.preventDefault();
            video.paused ? video.play() : video.pause();
            break;
        case 'l':
            event.preventDefault();
            video.currentTime += 10;
            break;
    }
});

