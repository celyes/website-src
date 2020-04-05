$(document).ready(function(){
    $('#searchInput').val("");
    $('.parallax').parallax();
    $('.button-collapse').sideNav();
    $('.dropdown-button').dropdown({
      belowOrigin: true, // Displays dropdown below the button
    });
    $('pre code').each(function(i, e){
        hljs.highlightBlock(e);
    });
    $('.modal').modal();
    $('#searchform').submit(function(e){
        e.preventDefault();
        var val = $('#searchInput').val();
        if(val != ""){
            var win = window.open('http://google.com/search?q='+val+'+site:celyes.now.sh', '_blank');
            win ? win.focus() : alert('Please allow popups for this website'); 
        }else{
            $('#searchInput').attr('class', 'is-invalid');
        }
    });

    // disqus
    var disqusThreadDiv = $('#disqus_thread');
    var commentsButton = $('#btn-show-comments');


    if (!disqusThreadDiv || !commentsButton) return;

    var disqus_config = function () {
      this.page.url = window.location.href; // use your page url here
      this.page.identifier = $(commentsButton).data('post-id'); // use your page identifier here
    };

    $(commentsButton).on('click', function(event) {
      var d = document, s = d.createElement('script');
      s.src = 'https://celyes-blog.disqus.com/embed.js'; // use your disqus account name here
      s.setAttribute('data-timestamp', + new Date());
      (d.head || d.body).appendChild(s);

      event.target.parentElement.removeChild(event.target);
    })
});