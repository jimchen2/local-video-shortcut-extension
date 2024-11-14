document.addEventListener('keydown', function(event) {
    const video = document.querySelector('video');
    if (!video) return;

    switch(event.key.toLowerCase()) {
        case 'f':
        case 'а': // Russian 'f'
            event.preventDefault();
            document.fullscreenElement ? document.exitFullscreen() : video.requestFullscreen();
            break;
        case '<':
        case 'б': // Russian 'b'
            event.preventDefault();
            video.playbackRate = Math.max(0.25, video.playbackRate - 0.25);
            break;
        case '>':
        case 'ю': // Russian 'yu'
            event.preventDefault();
            video.playbackRate = Math.min(2, video.playbackRate + 0.25);
            break;
        case 'j':
        case 'о': // Russian 'o'
            event.preventDefault();
            video.currentTime -= 10;
            break;
        case 'k':
        case 'л': // Russian 'l'
            event.preventDefault();
            video.paused ? video.play() : video.pause();
            break;
        case 'l':
        case 'д': // Russian 'd'
            event.preventDefault();
            video.currentTime += 10;
            break;
    }
});
