(function (window, document, undefined) {
    var XScrollsoundPrototype = Object.create(HTMLElement.prototype);
    XScrollsoundPrototype.createdCallback = function () {
        var that, audio = document.createElement("audio");
        audio.src = this.attributes.getNamedItem("sound").nodeValue;
        audio.play();
        audio.volume = 0;
        that = this;
        function animateSound() {
            var viewportOffset = that.getBoundingClientRect(),top = viewportOffset.top,modifier = -0.01;

            if (top+that.clientHeight > 0 && top - window.innerHeight < 0){
                modifier = 0.01;
            }
            if (audio.volume+modifier >= 0 && audio.volume+modifier <= 1){
                audio.volume = audio.volume+modifier;
            }
            setTimeout(animateSound,16);
        }
        animateSound();
    };
    document.registerElement("img-singing", {prototype: XScrollsoundPrototype, extends: "img"});
})( window, document);

