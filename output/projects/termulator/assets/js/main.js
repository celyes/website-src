var app = new Vue({
    el: "#termulator",
    data: {
        user: "celyes",
        pc: "jarvis",
        content: ''
    },
    methods: {
        focusElement(){
            document.querySelector('#caret').focus()
        }
    }
})