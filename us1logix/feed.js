$(document).ready(function(){
  $('.twitter-feed').socialfeed({
    twitter:{
      accounts: ['@us1logix'],
      limit: 10,
      consumer_key: 'fFCAJM2CPRQHq8cVaYOS1jqmf',
      consumer_secret: 'QDeGNpMW2PY3kwyz7cfdEIILcgwVyVE31oNe1m0at6qwBrArGP'
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
    getPosts: function(json) {
        if (json) {
            // fix callback render
            if(json.length<options.twitter.limit) posts_to_load_count -= options.twitter.limit - json.length;
            $.each(json, function() {
                var element = this;
                var post = new SocialFeedPost('twitter', Feed.twitter.utility.unifyPostData(element));
                post.render();
            });
            $('.loading-tweets').hide();
        }
    }
  });
});
