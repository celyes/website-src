var pattern = /^\/blog\/([^?\/]+){2}\/([^?\/]+){2}\//gmi; 
var p = window.location.pathname;

console.log(p.match(pattern));

var disqusThreadDiv = document.getElementById("disqus_thread"),
    commentsButton = document.getElementsByClassName("js-disqus-button")[0],
    disqus_config = function() {
        this.page.url = window.location.href, this.page.identifier = "{{post.id}}"
    };
commentsButton.addEventListener("click", function(e) {
    var t = document,
        s = t.createElement("script");
    s.src = "https://celyes-blog.disqus.com/embed.js", s.setAttribute("data-timestamp", +new Date), (t.head || t.body).appendChild(s), e.target.parentElement.removeChild(e.target)
});