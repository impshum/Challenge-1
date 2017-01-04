$(document).ready(function() {
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    $("button.showphp").click(function() {
        $("div.showphp").slideToggle();
    });
    $("button.sql").click(function() {
        $("div.sql").slideToggle();
    });
    $("a.sql").click(function() {
        $("div.sql").slideToggle();
    });
    $("button.sql1").click(function() {
        $("div.sql1").slideToggle();
    });
    $("button.sql2").click(function() {
        $("div.sql2").slideToggle();
    });
    $("button.sql3").click(function() {
        $("div.sql3").slideToggle();
    });
    $("h2.opensetup").click(function() {
        $('h2.opensetup').toggleClass('onsetup');
        $("div.opensetup").slideToggle();
    });
    $("h2.opensql").click(function() {
        $('h2.opensql').toggleClass('onsql');
        $("div.opensql").slideToggle();
    });
    $("h2.openphp").click(function() {
        $('h2.openphp').toggleClass('onphp');
        $("div.openphp").slideToggle();
    });
    $("h2.openresult").click(function() {
        $('h2.openresult').toggleClass('onresult');
        $("div.openresult").slideToggle();
    });
    $("h2.openbonus").click(function() {
        $('h2.openbonus').toggleClass('onbonus');
        $("div.openbonus").slideToggle();
    });
    $("a.php").click(function() {
        $("div.php").slideToggle();
    });
    $("button.php").click(function() {
        $("div.php").slideToggle();
    });
    $("button.php1").click(function() {
        $("div.php1").slideToggle();
    });
    $("button.php2").click(function() {
        $("div.php2").slideToggle();
    });
    $("li.php3").click(function() {
        $("div.php3").slideToggle();
    });
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

var audioElement1 = document.createElement('audio');
audioElement1.setAttribute('src', 'music/1.mp3');
//audioElement.load()
$.get();
audioElement1.addEventListener("load", function() {
    audioElement1.play();
}, true);

var audioElement2 = document.createElement('audio');
audioElement2.setAttribute('src', 'music/2.mp3');
//audioElement.load()
$.get();
audioElement2.addEventListener("load", function() {
    audioElement2.play();
}, true);

var audioElement3 = document.createElement('audio');
audioElement3.setAttribute('src', 'music/3.mp3');
//audioElement.load()
$.get();
audioElement3.addEventListener("load", function() {
    audioElement3.play();
}, true);

var audioElement4 = document.createElement('audio');
audioElement4.setAttribute('src', 'music/4.mp3');
//audioElement.load()
$.get();
audioElement4.addEventListener("load", function() {
    audioElement4.play();
}, true);

function play1() {
    audioElement1.play();
}

function play2() {
    audioElement2.play();
}

function play3() {
    audioElement3.play();
}

function play4() {
    audioElement4.play();
}

$('.nocats').click(function() {
    $("#cats").attr("data", "https://media.giphy.com/media/jUSrFvui8Pfpe/giphy.gif");
});

$('.plod').click(function() {
    audioElement1.pause();
    audioElement2.pause();
    audioElement3.pause();
    audioElement4.pause();
});

$('.plodon').click(function() {
    audioElement1.pause();
    audioElement2.pause();
    audioElement3.pause();
    audioElement4.pause();
    $('#timeout').fadeOut();
    $('body').removeClass('flow');
    $("#cats").attr("data", "");
});

$('.plodit').click(function() {
    $('#timeout').fadeOut();
    $('body').removeClass('flow');
    $("#cats").attr("data", "");
});

function timer1() {
    var counter = 290;
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            $('#timeout').fadeOut();
            $('body').removeClass('flow');
            clearInterval(counter);
        }
    }, 1000);
}

function timer2() {
    var counter = 265;
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            $('#timeout').fadeOut();
            $('body').removeClass('flow');
            clearInterval(counter);
        }
    }, 1000);
}

function timer3() {
    var counter = 666;
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            $('#timeout').fadeOut();
            $('body').removeClass('flow');
            clearInterval(counter);
        }
    }, 1000);
}

function timer4() {
    var counter = 266;
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            $('#timeout').fadeOut();
            $('body').removeClass('flow');
            clearInterval(counter);
        }
    }, 1000);
}

$("#play1").click(function() {
    play1();
    $('#timeout').fadeIn();
    $('body').addClass('flow');
    timer1();
    return false;
});

$("#play2").click(function() {
    play2();
    $('#timeout').fadeIn();
    $('body').addClass('flow');
    timer2();
    return false;
});

$("#play3").click(function() {
    play3();
    $('#timeout').fadeIn();
    $('body').addClass('flow');
    timer2();
    return false;
});

$("#play4").click(function() {
    play4();
    $('#timeout').fadeIn(2000);
    $('body').addClass('flow');
    timer2();
    return false;
});

$(".next").click(function() {
    $('#cats').hide();
    setTimeout(function() {
            $("#cats").attr("src", "http://thecatapi.com/api/images/get?format=src&type=gif");
        },
        1000);
    setTimeout(function() {
            $('#cats').show();
        },
        1500);
});

$(".break").click(function() {
    $('#cats').hide();
    $('.nocats').hide();
    $("#cats").attr("data", "http://thecatapi.com/api/images/get?format=src&type=gif");
    $('#count').hide();
    $('.next').hide();
    $('.plod').hide();
    $('.plodon').hide();
    $('.plodit').hide();
    setTimeout(function() {
            $('#count').fadeIn(1500);
        },
        1000);
    setTimeout(function() {
            $('#cats').fadeIn(1500);
        },
        7000);
    setTimeout(function() {
            $('.plod').fadeIn(1500);
        },
        3000);
    setTimeout(function() {
            $('.plodon').fadeIn(1500);
        },
        4000);
    setTimeout(function() {
            $('.plodit').fadeIn(1500);
        },
        5000);
    setTimeout(function() {
            $('.next').fadeIn(1500);
        },
        6000);
    setTimeout(function() {
            $('.nocats').fadeIn(1500);
        },
        7000);
});
