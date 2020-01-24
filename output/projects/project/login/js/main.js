
    function show() {
        var y = document.getElementById("pass");
        if (y.type === "password") {
            y.type = "text";
        }
    }

    function hide() {
        var y = document.getElementById("pass");
        if (y.type === "text") {
            y.type = "password";
        }
    }