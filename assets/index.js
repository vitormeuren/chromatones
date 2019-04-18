
$(window).on('load',function() {
    var $chaosAudio = $('#chaos-audio'),
        $pedals = $('#pedals div');

    $pedals.each(function() {
        var $this = $(this),
            $audio = $this.find('audio')[0];

        if (Modernizr.touchevents) {
            $this.on('touchstart', function() {
                if ($('.active').length) {
                    var $activeAudio = $('.active').find('audio')[0];

                    $activeAudio.pause();
                    $activeAudio.currentTime = 0;
                }

                $this.toggleClass('active');
                $pedals.not($this).removeClass();

                if ($this.hasClass('active')) {
                    $audio.play();
                }
                else {
                    $audio.pause();
                    $audio.currentTime = 0;
                }
            })

            $this.find('audio').on('ended', function() {
                $this.removeClass('active');
            })
        }
        else {
            $this.on('mouseenter', function() {
                $this.addClass('active');
        
                if ($audio && $chaosAudio[0].paused) $audio.play();
            })
        
            $this.on('mouseleave', function() {
                $this.removeClass('active');
        
                $audio.pause();
                $audio.currentTime = 0;
            })
        }
    })

    // Sound-enabled button functionality

    $('#sound-enabled').on('click', function() {
        var $this = $(this),
            $audios = $('audio');

        $this.toggleClass('muted');

        $audios.each(function() {
            $(this)[0].volume = $this.hasClass('muted') ? 0 : 1; 
        })
    })


    // Chaos audio & animations

    var $gifs = $('img[src$=".gif"]'),
        $tryChaosButton = $('#try-chaos'),
        chaosPlaying = false;

    function togglePlay(audio, isPlaying) {
        if (isPlaying) {
            audio.pause();
            audio.currentTime = 0;
        }
        else {
            audio.play();
        }

        return !isPlaying;
    }

    // TODO: stop any audio and animation before playing chaos/clean audios

    $tryChaosButton.on('click', function() {
        toggleChaos();

        if (cleanAudioPlaying) {
            toggleCleanAudio();
        }
    })

    $chaosAudio.on('ended', function() {
        $chaosAudio.currentTime = 0;
        $tryChaosButton.innerHTML = 'try chaos';

        $gifs.each(function() {
            $(this).removeClass('visible');
        })
    })

    function toggleChaos() {
        $gifs.each(function() {
            $(this).toggleClass('visible');
        })

        chaosPlaying = togglePlay($chaosAudio[0], chaosPlaying);
        $tryChaosButton.html($tryChaosButton[0].innerHTML == 'try chaos' ? 'stop chaos' : 'try chaos');
    }

    // Clean guitar audio

    var $cleanGuitarButton = $('#clean-guitar'),
        $cleanAudio = $('#clean-guitar-audio'),
        cleanAudioPlaying = false;

    $cleanGuitarButton.on('click', function() {
        if (chaosPlaying) toggleChaos();

        toggleCleanAudio();
    })

    $cleanAudio.on('ended', function() {
        $cleanAudio.currentTime = 0;

        $cleanGuitarButton.html('clean guitar');
    })

    function toggleCleanAudio() {
        cleanAudioPlaying = togglePlay($cleanAudio[0], cleanAudioPlaying);
        $cleanGuitarButton.html($cleanGuitarButton[0].innerHTML == 'clean guitar' ? 'stop guitar' : 'clean guitar');
    }

    // About window functionality

    var $aboutWindow = $('#about');

    $('#open-about').on('click', function() {
        $aboutWindow.toggleClass('visible');
    })

    $('#close-button').on('click', function() {
        $aboutWindow.removeClass('visible');
    })
})