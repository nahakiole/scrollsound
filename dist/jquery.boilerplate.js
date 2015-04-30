/*
 *  jQuery ScrollSound - v0.1
 *  A jQuery Plugin to set the volume of a video or audio element based on the distance from the element.
 *  
 *
 *  Made by Robin Glauser
 *  Under MIT License
 */
(function ($, window, document, undefined) {

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window and document are passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "scrollSound",
        defaults = {
            getVolume: function (top) {
                var volume = Math.min(Math.abs(top - this.element.offset().top), 400);
                return 1 - (volume / 400);
            }
        };



    // The actual plugin constructor
    function Plugin(element, options) {

        this.element = element;
        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            $(window).scroll(this.onScroll.bind(this));
            $(window).trigger("scroll");
            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.options
            // you can add more functions like the one below and
            // call them like so: this.yourOtherFunction(this.element, this.options).

        },
        onScroll: function () {
            var that = this;
            $(this.element).animate({volume:this.options.getVolume($(window).scrollTop())}, 10, function(){
                that.element.muted = false;
            });
            // some logic
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);
