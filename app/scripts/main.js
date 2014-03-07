console.log('\'Allo \'Allo!');
 
$(function(){
  Parse.initialize("FmV3YOjLSZQxyMxjFryIo72YyLtLFgKJoXcUNDbX", "xU0AIrndO8OAcA3ZvBjjuoML4eIEBRpOdSsO3r0z");
 
  window.items = new ItemsCollection();

		setInterval(function() {

		  items.fetch({
				success: function(){
					items.each(function(item){
						new ListView({model: item});
					})	
				},

			}, 1000);

		});


	 $('.save-button').click(function(){

	  	var userName = new Item();

		userName.save({
			name: $('.js-name').val(),
			age: $('.js-age').val()
		});

		$('.js-name').val('');
		$('.js-age').val('');
	 });



});