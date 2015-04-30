# Scrollsound jQuery Plugin

## Usage

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

```javascript
$('#fire').scrollSound({
        getVolume: function(top){
            console.log("Top Fire"+top);
            var volume = Math.min(Math.abs(top - $('#fire-img').offset().top), $('#fire-img').height()*2);
            return 1 - (volume / ($('#fire-img').height()*2));
        }
    });
```


## Contributing

-> CONTRIBUTING.md

## License

MIT License


http://www.freesound.org/people/juskiddink/sounds/194868/
http://www.freesound.org/people/MikaF/sounds/109976/
http://www.freesound.org/people/inchadney/sounds/56611/
http://www.freesound.org/people/RHumphries/sounds/2523/
http://www.freesound.org/people/juskiddink/sounds/65795/
http://www.freesound.org/people/mystiscool/sounds/7138/

https://unsplash.com/license

http://creativecommons.org/licenses/by/3.0/