$(document).ready(function() {

    var userFeed = new Instafeed({
        get: 'user',
        userId: '45852833',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '45852833.1677ed0.99dc02dc246e4d1186adf316f892398b',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


});
