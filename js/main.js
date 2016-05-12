$(document).ready(function(){
	$("#workshopRadioGroup input[type='radio']").change(function(){
		if($(this).attr('id') == 'checkNotLike' && $(this).is(':checked')) {
			$('#notLikeComment').slideDown();
		} else {
			$('#notLikeComment').hide();
		}
	});
	$("#counselorRadioGroup input[type='radio']").change(function(){
		if($(this).attr('id') == 'checkNotLikeCounselor' && $(this).is(':checked')) {
			$('#notLikeCommentCounselor').slideDown();
		} else {
			$('#notLikeCommentCounselor').hide();
		}
	});
});