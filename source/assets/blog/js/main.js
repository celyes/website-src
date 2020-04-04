$(document).ready(function(){
    $('#searchInput').val("");
    $('.parallax').parallax();
    $('.button-collapse').sideNav();
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
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