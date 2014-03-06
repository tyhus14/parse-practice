console.log('\'Allo \'Allo!');
 
$(function(){
  Parse.initialize("FmV3YOjLSZQxyMxjFryIo72YyLtLFgKJoXcUNDbX", "xU0AIrndO8OAcA3ZvBjjuoML4eIEBRpOdSsO3r0z");
 
  window.items = new ItemsCollection();
  items.fetch();


	 $('.save-button').click(function(){

	  	var name = new Item();

		name.save({
			name: $('.js-name').val(),
			age: $('.js-age').val()
		});

		$('.js-name').val('');
		$('.js-age').val('');
	 });

});