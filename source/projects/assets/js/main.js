Vue.component('personal-image', {

    data: function(){
        return {
            alt: "celyes",
            classes: "",
            src: "img/photo.jpg",
        }
    },
    props: ["link", "content"],
    template: '<img :src="src" :class="classes" :alt="alt">'
});


var app = new Vue({
    el: "#root", 
    data: {
        name: "Ilyes Chouia",
        job: "Web Developer / Translator"
    }
})