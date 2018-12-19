document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any nav burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }


    var animateHTML = function() {
        console.log("started");
        var elems;
        var windowHeight;
        function init() {
            elems = document.querySelectorAll('#section');
            windowHeight = window.innerHeight;
            addEventHandlers();
            checkPosition();
        }
        function addEventHandlers() {
            window.addEventListener('scroll', checkPosition);
            window.addEventListener('resize', init);
        }
        function checkPosition() {
            for (var i = 0; i < elems.length; i++) {
                var positionFromTop = elems[i].getBoundingClientRect().top;
                if (positionFromTop - windowHeight < 0) {
                    document.getElementById('navbar-home').classList.remove("is-active");
                    document.getElementById('navbar-product').classList.remove("is-active");
                    document.getElementById('navbar-contact').classList.remove("is-active");
                    document.getElementById('navbar-about').classList.remove("is-active");
                    if(i == 0) {
                        document.getElementById('navbar-home').classList.add("is-active");
                    } else if(i == 1) {
                        document.getElementById('navbar-product').classList.add("is-active");
                    } else if(i == 2) {
                        document.getElementById('navbar-contact').classList.add("is-active");
                    } else if(i == 3) {
                        document.getElementById('navbar-about').classList.add("is-active");
                    }
                }
            }
        }
        return {
            init: init
        };
    };
    animateHTML().init();


});
