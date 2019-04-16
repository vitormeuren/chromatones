var wrapper = document.getElementById('pedals'),
    pedals = wrapper.getElementsByTagName('div');

for (i = 0; i < pedals.length; i++) {
    var pedal = pedals[i], audio;
    
    pedal.onmouseenter = function() {
        audio = this.getElementsByTagName("audio")[0];

        if (audio && chaosAudio.paused) audio.play();
    }

    pedals[i].onmouseleave = function() {
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
    pngs = document.querySelectorAll('img[src$=".png"');

// Chaos audio & animations

var tryChaosButton = document.getElementById('try-chaos'),
    chaosAudio = document.getElementById('chaos-audio'),
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

function toggleChaos() {
    [].forEach.call(gifs, function(gif) {
        gif.classList.toggle('visible');
    });

    chaosPlaying = togglePlay(chaosAudio, chaosPlaying);
}

// Clean guitar audio

var cleanGuitarButton = document.getElementById('clean-guitar'),
    cleanAudio = cleanGuitarButton.getElementsByTagName('audio')[0],
    cleanAudioPlaying = false;

cleanGuitarButton.onclick = function() {
    if (chaosPlaying) {
        toggleChaos();
    }

    toggleCleanAudio();
}

function toggleCleanAudio() {
    cleanAudioPlaying = togglePlay(cleanAudio, cleanAudioPlaying);
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