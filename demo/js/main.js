jQuery(function($){
	$('#fire').scrollVideo({
        getVolume: function(top){
            console.log("Top Fire"+top);
            var volume = Math.min(Math.abs(top - $('#fire-img').offset().top), $('#fire-img').height()*2);
            return 1 - (volume / ($('#fire-img').height()*2));
        }
    });

    $('#forest').scrollVideo({
        getVolume: function(top){
            console.log("Top Forest"+top);
            var volume = Math.min(Math.abs(top - $('#forest-img').offset().top), $('#forest-img').height()*2);
            return 1 - (volume / ($('#forest-img').height()*2));
        }
    });

    $('#river').scrollVideo({
        getVolume: function(top){
            console.log("Top Forest"+top);
            var volume = Math.min(Math.abs(top - $('#river-img').offset().top), $('#river-img').height()*2);
            return 1 - (volume / ($('#river-img').height()*2));
        }
    });

    $('#rain').scrollVideo({
        getVolume: function(top){
            console.log("Top Forest"+top);
            var volume = Math.min(Math.abs(top - $('#rain-img').offset().top), $('#rain-img').height()*2);
            return 1 - (volume / ($('#rain-img').height()*2));
        }
    });
});
