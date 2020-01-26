$(document).ready(function(){
    $('.parallax').parallax();
    $('pre code').each(function(i, e){
        hljs.highlightBlock(e);
    });
});