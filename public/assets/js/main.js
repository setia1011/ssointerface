$(document).ready(function(e) {
    $(document).on('click', '.card-options-remove', function(e) {
    	$(this).parent().parent().parent().parent().parent().hide();
    });
});