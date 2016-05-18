window.onload = function () {
    'use strict';

    // var canvas = document.getElementById('canvas');
    // var screenSize = window.innerHeight;
    // canvas.height = screenSize;
    var text = document.getElementById('fade-text');
    var dummyText = document.getElementById('anim-dummyText');
    var section = document.getElementById('anim-section');
    var artificialOpacity = 0;
    var dummyOpacity = 0;

    function FadeInOpacity() {
        if(artificialOpacity < 1) {
            artificialOpacity += .005;
            setTimeout(function(){FadeInOpacity();}, 100);       
        }
        text.style.opacity = artificialOpacity;
    }

    function FadeInOpacity2() {
        if(dummyOpacity < 1) {
            dummyOpacity += .005;
            setTimeout(function(){FadeInOpacity2();}, 100);       
        }
        dummyText.style.opacity = dummyOpacity;
    }

    window.addEventListener('scroll', function() {
        var sectionBottom = section.getBoundingClientRect().bottom;
        if(sectionBottom >= 100) {
            FadeInOpacity();
            FadeInOpacity2();
        }
    },false);

    // window.addEventListener('scroll', function() {
    //     var sectionTop = section.getBoundingClientRect().top;
    //     if(sectionTop <= 100) {
    //         FadeInOpacity();
    //     }
    //     console.log('testing') },false);
    
    

    

};
