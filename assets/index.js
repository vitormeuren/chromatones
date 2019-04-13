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

var tryChaosButton = document.getElementById('try-chaos'),
    chaosAudio = document.getElementById('chaos-audio'),
    gifs = document.querySelectorAll('img[src$=".gif"]'),
    pngs = document.querySelectorAll('img[src$=".png"');

tryChaosButton.onclick = function() {
    this.classList.toggle('playing');

    [].forEach.call(gifs, function(gif) {
        gif.classList.toggle('visible');
    });

    if (isPlaying(this)) {
        chaosAudio.play();

        // displayElements(gifs);
        // hideElements(pngs);


    }
    else {
        chaosAudio.pause();
        chaosAudio.currentTime = 0;

        // displayElements(pngs);
        // hideElements(gifs);
    }
}

function displayElements(elements) {
    [].forEach.call(elements, function(element) {

        // element.classList.add('visible');
        // element.classList.remove('hidden');
    });
}

function hideElements(elements) {
    [].forEach.call(elements, function(element) {
        // element.classList.add('hidden');
        // element.classList.remove('visible');
    });
}

// Clean guitar audio

var cleanGuitarButton = document.getElementById('clean-guitar'),
    cleanAudio = document.getElementById('clean-audio');

cleanGuitarButton.onclick = function() {
    this.classList.toggle('playing');

    // togglePlay(cleanAudio);

    if (isPlaying(this)) {
        cleanAudio.play();
    }
    else {
        cleanAudio.pause();
        cleanAudio.currentTime = 0;
    }
}

function isPlaying(element) {
    return element.classList == 'playing';
}

// function togglePlay(element) {
//     if (isPlaying(element)) {
//         element.play();
//     }
//     else {
//         element.pause();
//         element.currentTime = 0;
//     }
// }