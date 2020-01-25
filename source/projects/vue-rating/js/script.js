
var vapp = new Vue({
    el: "#app", 
    data:{
        rate: 5
    },
    methods: {
        conf: function(){
            var element = document.createElement('p');
            element.setAttribute('id', 'toast');
            var text = document.createTextNode('Thanks!');
            element.appendChild(text);
            document.body.appendChild(element);
            setTimeout(function(){
                document.body.removeChild(element);
            }, 2990);
        },
    }
});