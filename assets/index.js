var wrapper = document.getElementById('pedals'),
    pedals = wrapper.getElementsByTagName('div');

for (i = 0; i < pedals.length; i++) {
    var pedal = pedals[i], audio;
    
    pedal.onmouseenter = function() {
        audio = this.getElementsByTagName("audio")[0];

        if (audio) audio.play();
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
    this.classList.toggle('muted');

    for (i = 0; i < pedals.length; i++) {
        var audio = pedals[i].getElementsByTagName("audio")[0];

        audio.volume = this.classList == 'muted' ? 0 : 1;
    }
}

// Ghost buttons audio

var tryChaosButton = document.getElementById('try-chaos'),
    chaosAudio = document.getElementById('chaos-audio'),
    gifs = document.querySelectorAll('img[src$=".gif"]'),
    pngs = document.querySelectorAll('img[src$=".png"');

tryChaosButton.onclick = function() {
    this.classList.toggle('playing');

    if (this.classList == 'playing') {
        chaosAudio.play();

        displayElements(gifs);
        hideElements(pngs);
    }
    else {
        chaosAudio.pause();
        chaosAudio.currentTime = 0;

        displayElements(pngs);
        hideElements(gifs);
    }
}

function displayElements(elements) {
    [].forEach.call(elements, function(element) {
        element.style.opacity = 1;
    });
}

function hideElements(elements) {
    [].forEach.call(elements, function(element) {
        element.style.opacity = 0;
    });
}