

var app = new Vue({
    el: "#container",
    data: {
        info: "Vue.js and Bootstrap 4",
        github: "https://github.com/celyes/vue-bs4-start",
        link: "https://celyes.github.io/vue"
    },
    methods: {
        greeting: function(){
            return "This is a simple " + this.info + " starter template."
        }
    }
});
