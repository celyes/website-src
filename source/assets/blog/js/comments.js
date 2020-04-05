var $disqusThreadDiv = document.getElementById('disqus_thread');
var $commentsButton = document.getElementsByClassName('js-disqus-button')[0];

if (!$disqusThreadDiv || !$commentsButton) {return};

var disqus_config = function () {
  this.page.url = window.location.href; // use your page url here
  this.page.identifier = "{{post.id}}"; // use your page identifier here
};

$commentsButton.addEventListener('click', function(event) {
  var d = document, s = d.createElement('script');
  s.src = 'https://celyes-blog.disqus.com/embed.js'; 
  s.setAttribute('data-timestamp', + new Date());
  (d.head || d.body).appendChild(s);

  event.target.parentElement.removeChild(event.target);
})