document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');

    inputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            this.dataset.placeholder = this.placeholder;
            this.placeholder = '';
        });
        input.addEventListener('blur', function() {
            this.placeholder = this.dataset.placeholder;
        });
    });
});
