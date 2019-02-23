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