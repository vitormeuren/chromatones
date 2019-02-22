var wrapper = document.getElementById('pedals'),
    pedals = wrapper.getElementsByTagName('div');

for (i=0; i < pedals.length; i++) {

    pedals[i].onclick = function() {
        this.getElementsByTagName("audio")[0].play();
    }
}