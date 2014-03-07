console.log('\'Allo \'Allo!');

$(function() {
    Parse.initialize("FmV3YOjLSZQxyMxjFryIo72YyLtLFgKJoXcUNDbX", "xU0AIrndO8OAcA3ZvBjjuoML4eIEBRpOdSsO3r0z");

    window.items = new ItemsCollection();



    items.fetch({
        success: function() {
            items.each(function(item) {
                new ListView({
                    model: item
                });
            })
        },

    })



    $('.save-button').click(function() {

        var userName = new Item();

        userName.save({
            name: $('.js-name').val(),
            age: $('.js-age').val()
        });

        new ListView({
            model: userName
        })

        $('.js-name').val('');
        $('.js-age').val('');


    })

});