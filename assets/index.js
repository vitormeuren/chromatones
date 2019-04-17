var wrapper = document.getElementById('pedals'),
    pedals = wrapper.getElementsByTagName('div'),
    chaosAudio = document.getElementById('chaos-audio');

for (i = 0; i < pedals.length; i++) {
    var pedal = pedals[i], audio;
    
    pedal.onmouseover = function() {
        audio = this.getElementsByTagName('audio')[0];

        if (audio && chaosAudio.paused) audio.play();
    }

    pedal.onmouseout = function() {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }
}

// Sound-enabled button functionality

var soundButton = document.getElementById('sound-enabled');

soundButton.onclick = function() {
    var audios = document.getElementsByTagName('audio');

    this.classList.toggle('muted');

    for (i = 0; i < audios.length; i++) {
        audios[i].volume = this.classList == 'muted' ? 0 : 1;
    }
}

// Ghost buttons audio

var gifs = document.querySelectorAll('img[src$=".gif"]'),
    pngs = document.querySelectorAll('img[src$=".png"]');

// Chaos audio & animations

var tryChaosButton = document.getElementById('try-chaos'),
    chaosPlaying = false;

function togglePlay(el, isPlaying) {
    if (isPlaying) {
        el.pause();
        el.currentTime = 0;
    }
    else {
        el.play();
    }

    return !isPlaying;
}

tryChaosButton.onclick = function() {
    toggleChaos();

    if (cleanAudioPlaying) {
        toggleCleanAudio();
    }
}

chaosAudio.addEventListener('ended', function() {
    chaosAudio.currentTime = 0;
    tryChaosButton.innerHTML = 'try chaos';

    [].forEach.call(gifs, function(gif) {
        gif.classList.remove('visible');
    });
})

function toggleChaos() {
    [].forEach.call(gifs, function(gif) {
        gif.classList.toggle('visible');
    });

    chaosPlaying = togglePlay(chaosAudio, chaosPlaying);
    tryChaosButton.innerHTML = tryChaosButton.innerHTML == 'try chaos' ? 'stop chaos' : 'try chaos';
}

// Clean guitar audio

var cleanGuitarButton = document.getElementById('clean-guitar'),
    cleanAudio = document.getElementById('clean-guitar-audio'),
    cleanAudioPlaying = false;

cleanGuitarButton.onclick = function() {
    if (chaosPlaying) {
        toggleChaos();
    }

    toggleCleanAudio();
}

cleanAudio.addEventListener('ended', function() {
    cleanAudio.currentTime = 0;

    cleanGuitarButton.innerHTML = 'clean guitar';
})

function toggleCleanAudio() {
    cleanAudioPlaying = togglePlay(cleanAudio, cleanAudioPlaying);
    cleanGuitarButton.innerHTML = cleanGuitarButton.innerHTML == 'clean guitar' ? 'stop guitar' : 'clean guitar';
}

// About functionality

var aboutButton = document.getElementById('open-about'),
    aboutWindow = document.getElementById('about'),
    closeButton = document.getElementById('close-button');

aboutButton.onclick = function() {
    aboutWindow.classList.toggle('visible');
}

closeButton.onclick = function() {
    aboutWindow.classList.remove('visible');
}