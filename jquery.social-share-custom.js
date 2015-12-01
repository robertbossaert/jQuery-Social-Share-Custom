(function ($) {
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '<insert your id>',
            xfbml      : true,
            version    : 'v2.5'
        });
    };
    $.fn.ShareTwitter = function (link, text, hashtags) {
        return this.click(function () {
            window.open(
                'https://twitter.com/share' +
                    '?url=' + encodeURIComponent(typeof link === 'function' ? link() : link) +
                    '&text=' + encodeURIComponent(typeof text === 'function' ? text() : text) +
                    '&hashtags=' + encodeURIComponent(hashtags),
                    '',
                    'width=626,height=436');
            return false;
        });
    };
    $.fn.ShareFacebook = function (link, text, picture) {
        return this.click(function () {
            FB.ui({
                method: 'feed',
                link: encodeURIComponent(typeof link === 'function' ? link() : link),
                caption: encodeURIComponent(typeof text === 'function' ? text() : text),
                picture: picture,
                display: 'popup'
            });
            return false;
        });
    };
    $.fn.ShareMail = function (text, link, subject) {
        return this.click(function () {
            document.location.href =
                'mailto:gebruiker@email.com' +
                    '?body=' + encodeURIComponent(typeof text === 'function' ? text() : text) + (typeof link === 'function' ? link() : link) +
                    '&subject=' + encodeURIComponent(subject);
                    
            return false;
        });
    };
    $.fn.ShareLinkedIn = function (link, title, summary) {
        return this.click(function () {
            window.open(
                'http://www.linkedin.com/shareArticle?mini=true' +
                    '&url=' + encodeURIComponent(typeof link === 'function' ? link() : link) +
                    '&title=' + encodeURIComponent(typeof title === 'function' ? title() : title) + 
                    '&summary=' + encodeURIComponent(typeof summary === 'function' ? summary() : summary)
                );    
            return false;
        });
    };
})(jQuery);