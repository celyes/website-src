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
});
