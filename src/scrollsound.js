(function (window, document, undefined) {
    var XScrollsoundPrototype = Object.create(HTMLElement.prototype);
    XScrollsoundPrototype.createdCallback = function () {
        var that = this, audio = document.createElement("audio");
        audio.src = this.attributes.getNamedItem("sound").nodeValue;
        audio.play();
        audio.loop = true;
        audio.volume = 0;
        function animateSound() {
            var viewportOffset = that.getBoundingClientRect(), top = viewportOffset.top, left = viewportOffset.left, modifier = -0.01;
            if (top + that.clientHeight > 0 && left + that.clientWidth > 0 && top - window.innerHeight < 0 && left - window.innerWidth < 0) {
                modifier = 0.01;
            }
            audio.volume = Math.min(1, Math.max(0, audio.volume + modifier));
            setTimeout(animateSound, 16);
        }

        animateSound();
    };
    document.registerElement("img-singing", {prototype: XScrollsoundPrototype, extends: "img"});
})(window, document);