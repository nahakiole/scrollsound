# Scrollsound jQuery Plugin

## Usage (Simple Example)

### HTML
```html
<audio src="sound/fire.mp3" autoplay="" id="fire" loop="" muted=""></audio>
<div class="background-image-wrapper">
    <img src="img/fire.jpg" alt="Fire" id="fire-img"/>

    <div class="heading">
        <h1>Lorem Ipsum</h1>
        <p>Sit amet, consectetur adipisicing elit.</p>
    </div>
</div>
```

### Javascript
```javascript
$('#fire').scrollSound({
        getVolume: function(top){
            var volume = Math.min(Math.abs(top - $('#fire-img').offset().top), $('#fire-img').height()*2); // Calculate volume from scrollposition
            return 1 - (volume / ($('#fire-img').height()*2)); // Return volume
        }
    });
```


## Contributing

[Contributing Manual](CONTRIBUTING.md)

## License

MIT License

## Used demo images and background noise
 
### Background noise

Background noise is from freesound (not all of these are used at the moment) licensed under the Attribution License.
Some of the sound is cut and compressed for usage on the web. 

Waves on a sandy beach - juskiddink
http://www.freesound.org/people/juskiddink/sounds/194868/

natural_wind - MikaF
http://www.freesound.org/people/MikaF/sounds/109976/

Morning in the countryside - inchadney
http://www.freesound.org/people/inchadney/sounds/56611/

rbh thunder storm - RHumphries
http://www.freesound.org/people/RHumphries/sounds/2523/

Bonfire -juskiddink
http://www.freesound.org/people/juskiddink/sounds/65795/

stream2.wav mystiscool
http://www.freesound.org/people/mystiscool/sounds/7138/

### Images

Images are from https://unsplash.com/license licensed under [Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/)
