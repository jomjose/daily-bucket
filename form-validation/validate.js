var Validator = function (form) {

    this.form = $(form);

    var Elements = {
        name: {
            selector: $('#name'),
            reg: /^[a-zA-Z]{2,20}$/
        },

        email: {
            selector: $('#email'),
            reg: /^[a-z-0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,7}$/i
        },

        string: {
            selector: $('#subject'),
            reg: /^\s+|<|>|"|\$|&|\/|'|\*|#|@|\\|\.\.|\./
        },

        empty: {
            selector: $('#message'),
            reg: /^\s+$/
        }
    };

    var handleError = function (element, message) {
        element.addClass('input-error');
        var $li = element.parent('li');
        var error = $('<div class="error"></div>').text(message);
        error.appendTo($li);
        element.keyup(function () {
            $(error).fadeOut(1000, function () {
                element.removeClass('input-error');
            });
        });

    };

    this.validate = function () {

        this.form.submit(function (e) {

            for (var i in Elements) {

                var type = i;
                var validation = Elements[i];

                switch (type) {

                    case 'name':
                        if (!validation.reg.test(validation.selector.val())) {
                            handleError(validation.selector, 'Not a valid name.');
                        }
                        break;
                    case 'email':
                        if (!validation.reg.test(validation.selector.val())) {
                            handleError(validation.selector, 'Not a valid e-mail address.');
                        }
                        break;
                    case 'string':
                        if (validation.reg.test(validation.selector.val()) || validation.selector.val() === '') {
                            handleError(validation.selector, 'Special characters now allowed or empty element.');
                        }
                        break;
                    case 'empty':
                        if (validation.reg.test(validation.selector.val()) || validation.selector.val() === '') {
                            handleError(validation.selector, 'Message field cannot be empty.');
                        }
                        break;
                    default:
                        break;


                }

            }

            e.preventDefault();
        });

    };
};

var validator = new Validator('#test');
validator.validate();
