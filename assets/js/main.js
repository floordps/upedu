$(function () {
    $('#contact-us-form').submit(function (e) {
        e.preventDefault();
        var form = $(this);
        var action = form.attr('action');
        var data = form.serialize();

        $.ajax({
            type: 'POST',
            url: action,
            data: data,
            dataType: 'xml',
            complete: function() {
                form[0].reset();
                alert('Thank you for your inquiry! We will get back to you soon.');
            }
        });
    });
});