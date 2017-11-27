$(document).ready(function(){
  $('.twitter-feed').socialfeed({
    twitter:{
      accounts: ['@leaxem'],                      //Array: Specify a list of accounts from which to pull tweets
      limit: 10,                                   //Integer: max number of tweets to load
      consumer_key: 'VG0J6h6tC3KG285QT6PoF9KmJ',          //String: consumer key. make sure to have your app read-only
      consumer_secret: 'i2Oy9V7vNyVNGGG4DdlhAPJz4zV3NPkfrGtUW8jcsAdO1tXJ2U' //String: consumer secret key. make sure to have your app read-only
    },

    // GENERAL SETTINGS
    length:400,
    show_media:false,
    update_period: 5000,
    template_html:
    '<div class="tweet-wrap" dt-create="{{=it.dt_create}}" social-feed-id = "{{=it.id}}"> \
        <div class="tf-header w-clearfix"> \
            <div class="tf-head-profile w-clearfix"> \
                <a href="{{=it.author_link}}" target="_blank" class="tf-avatar-wrap w-inline-block"> \
                    <img src="{{=it.author_picture}}"> \
                </a> \
                <div class="div-block w-clearfix"> \
                    <div class="tf-profile-name">{{=it.author_name}}</div><a href="{{=it.author_link}}" target="_blank"class="tf-head-link">@us1logix</a> \
                </div> \
            </div> \
            <div class="tf-date">{{=it.time_ago}}</div> \
        </div> \
        <div class="tf-body">{{=it.text}}</a></div> \
        <div><a href="{{=it.link}}" target="_blank" class="tf-action-link"> <span class="tf-actionlink-span">Read More</span></a> \
        </div> \
    </div>',
    date_format: "ll",
    date_locale: "en",
  });
});
