(function($){
	/* on radio button select hide/show expected block */
	$("#workshopRadioGroup input[type='radio']").change(function(){
		if($(this).attr('id') == 'checkNotLike' && $(this).is(':checked')) {
			$('#notLikeComment').slideDown();
		} else {
			$('#notLikeComment').slideUp();
		}
	});

	$("#counselorRadioGroup input[type='radio']").change(function(){
		if($(this).attr('id') == 'checkNotLikeCounselor' && $(this).is(':checked')) {
			$('#notLikeCommentCounselor').slideDown();
		} else {
			$('#notLikeCommentCounselor').slideUp();
		}
	}); 

  	/* Improve page subject add and remove */
  	$('#changeMindSubjectListedAdd1').on('change', function(){
  		var selected = this.value;
  		var optText = selected.split('_').join(' ');
		$('#changeMindSubjectListed1').append("<li>" + optText + "<span class='btn-delete'></span></li>");
  	});

	$('#changeMindSubjectListed1').on('click', '.btn-delete', function(){
		var text = $(this).parent().contents().filter(function() {
		    return this.nodeType === 3; 
		});
		var optVal = text.text().trim();
		var optValSpace = optVal.split(' ').join('_');
        if ($('#changeMindSubjectListedAdd1 > option[value="' + optValSpace + '"]').length === 0) {
           
		   $('#changeMindSubjectListedAdd1').append("<option value=" + optValSpace + ">" +  optVal + "</option>");
		} 
		$(this).parent().remove();
	});

	$('#changeMindSubjectListedAdd2').on('change', function(){
  		var selected = this.value;
  		var optText = selected.split('_').join(' ');
		$('#changeMindSubjectListed2').append("<li>" + optText + "<span class='btn-delete'></span></li>");
  	});

	$('#changeMindSubjectListed2').on('click', '.btn-delete', function(){
		var text = $(this).parent().contents().filter(function() {
		    return this.nodeType === 3; 
		});
		var optVal = text.text().trim();
		var optValSpace = optVal.split(' ').join('_');
        if ($('#changeMindSubjectListedAdd2 > option[value="' + optValSpace + '"]').length === 0) {
           
		   $('#changeMindSubjectListedAdd2').append("<option value=" + optValSpace + ">" +  optVal + "</option>");
		} 
		$(this).parent().remove();
	});

	/* Register page add editional subject in interest */

	$('#considerSubjectRegister').on('change', function(){
		if(this.value == 'commerce_with_maths'){
			$('#defaultSubjectsRegister, #additionalSubjectRegister').show();
		} else {
			$('#defaultSubjectsRegister, #additionalSubjectRegister').hide();
		}
	});

	$('#additionalSubjectRegister').on('change', function(){
  		var selected = this.value;
  		var optText = selected.split('_').join(' ');
		$('#defaultSubjectsRegister').append("<li>" + optText + "<span class='btn-delete'></span></li>");
  	});

	$('#defaultSubjectsRegister').on('click', '.btn-delete', function(){
		var text = $(this).parent().contents().filter(function() {
		    return this.nodeType === 3; 
		});
		var optVal = text.text().trim();
		var optValSpace = optVal.split(' ').join('_');
        if ($('#additionalSubjectRegister > option[value="' + optValSpace + '"]').length === 0) {
           
		   $('#additionalSubjectRegister').append("<option value=" + optValSpace + ">" +  optVal + "</option>");
		} 
		$(this).parent().remove();
	});

	/* Code for Star Rating */
	$(".rating-block input[type='radio']").on('change', function(){
		$(this).prevAll("input[type='radio']").addClass('active');
		$(this).nextAll("input[type='radio']").removeClass('active');
	});


	/*Register Form page-1 form validation */
	$('.register-first-form-fields input, .register-first-form-fields select').on('blur change', function(){
		registerFirstFormFields();
	});

	function registerFirstFormFields(){
		var yourName = $('.register-first-form-fields #yourName');
		var classSection = $('.register-first-form-fields #classSection');
		var schoolText = $('.register-first-form-fields #schoolText');
		var considerSubjectRegister = $('.register-first-form-fields #considerSubjectRegister');
		var interestedIn = $('.register-first-form-fields #interestedIn');
		var registerFirstForm = [yourName, classSection, schoolText, considerSubjectRegister, interestedIn];
		var count = 1;
		var ratio = 7.2;
		var finalStatus = 0;
	 	for(var i=0; i<registerFirstForm.length; i++){
	 		var str = registerFirstForm[i].val();
	 		if(typeof str === 'string' && str != '') {
	 			var getStatus = ratio * count;
	 			var finalStatus = getStatus;
	 			count++;
	 		}
	 	}
	 	$('.my-bar').css('width', finalStatus + "%");
	 	finalStatus = Math.round(finalStatus);
	 	$('.my-bar').text(finalStatus + "%");
	};

	$('#registerFirstFormFieldsNext').click(function(){
		var yourName = $('.register-first-form-fields #yourName');
		var classSection = $('.register-first-form-fields #classSection');
		var schoolText = $('.register-first-form-fields #schoolText');
		var considerSubjectRegister = $('.register-first-form-fields #considerSubjectRegister');
		var interestedIn = $('.register-first-form-fields #interestedIn');
		var registerFirstForm = [yourName, classSection, schoolText, considerSubjectRegister, interestedIn];
		var count = 1;
	 	for(var i=0; i<registerFirstForm.length; i++){
	 		var str = registerFirstForm[i].val();
	 		if(typeof str === 'string' && str != '') {
	 			count++;
	 		}
	 	}
	 	if(count-1 == registerFirstForm.length){
	 		$(this).attr('href', 'register-1.html');
	 	}
		
	});
	
	/*Register Form page-2 form validation */
	$('.register-second-form-fields input, .register-second-form-fields select').on('blur change', function(){
		registerSecondFormFields();
	});

	function registerSecondFormFields(){
		var candidateNumber = $('.register-second-form-fields #candidateNumber');
		var candidateEmail = $('.register-second-form-fields #candidateEmail');
		var momPhone = $('.register-second-form-fields #momPhone');
		var momEmail = $('.register-second-form-fields #momEmail');
		var dadPhone = $('.register-second-form-fields #dadPhone');
		var dadEmail = $('.register-second-form-fields #dadEmail');
		var guardianPhone = $('.register-second-form-fields #guardianPhone');
		var guardianEmail = $('.register-second-form-fields #guardianEmail');
		var registerSecondForm = [candidateNumber, candidateEmail, momPhone, momEmail, 
		dadPhone, dadEmail, guardianPhone, guardianEmail];
		var count = 1;
		var ratio = 7.2;
		var finalStatus = 0;
	 	for(var i=0; i<registerSecondForm.length; i++){
	 		var str = registerSecondForm[i].val();
	 		if(typeof str === 'string' && str != '') {
	 			var getStatus = ratio * count;
	 			var finalStatus = finalStatus + getStatus;
	 			count++;
	 		}
	 	}
	 	finalStatus += 36;
	 	$('.my-bar').css('width', finalStatus + "%");
	 	finalStatus  = Math.round(finalStatus);
	 	$('.my-bar').text(finalStatus + "%");
	};

	$('#registerSecondFormFieldsNext').click(function(){
		var candidateNumber = $('.register-second-form-fields #candidateNumber');
		var candidateEmail = $('.register-second-form-fields #candidateEmail');
		var momPhone = $('.register-second-form-fields #momPhone');
		var momEmail = $('.register-second-form-fields #momEmail');
		var dadPhone = $('.register-second-form-fields #dadPhone');
		var dadEmail = $('.register-second-form-fields #dadEmail');
		var guardianPhone = $('.register-second-form-fields #guardianPhone');
		var guardianEmail = $('.register-second-form-fields #guardianEmail');
		var registerSecondForm = [candidateNumber, candidateEmail, momPhone, momEmail, 
		dadPhone, dadEmail, guardianPhone, guardianEmail];
		var count = 1;
	 	for(var i=0; i<registerSecondForm.length; i++){
	 		var str = registerSecondForm[i].val();
	 		if(typeof str === 'string' && str != '') {
	 			count++;
	 		}
	 	}
		if(count-1 == registerSecondForm.length){
			$(this).attr('href', 'register-2.html');
		}
	});


	/*Register Form page-3 form validation */

	$(".register-third-form-fields input[type='radio']").change(function(){
		registerThirdFormFields();
	});

	function registerThirdFormFields(){
		var videoLikeDislikRadio = $("#videoLikeDislikRadio input[type='radio']");
		var count = 1;
		var ratio = 6.4;
		var finalStatus = 0;
		if(videoLikeDislikRadio.is(':checked')){
			$('#videoLikeDislikRadio .alert-error').slideUp();
			var getStatus = ratio * count;
	 		var finalStatus = finalStatus + getStatus;
		}
		finalStatus += 93.6;
	 	$('.my-bar').css('width', finalStatus + "%");
	 	finalStatus  = Math.round(finalStatus);
	 	$('.my-bar').text(finalStatus + "%");
	};
	
	$('#videoLikeDislikRadioValidation').click(function(){
		if($("#videoLikeDislikRadio input[type='radio']").is(':checked')) {
			$(this).attr('href', 'improve.html');
			$('#videoLikeDislikRadio .alert-error').slideUp();
		} else {
			$('#videoLikeDislikRadio .alert-error').slideDown();
		}
	});


 	/*==============Improve Form page-1 form validation ==========================*/

	$('.improve-first-form-fields input, .improve-first-form-fields select').on('blur change', function(){
		improveFirstFormFields();
	});

	function improveFirstFormFields(){
		var updateYourName = $('.improve-first-form-fields #updateYourName');
		var updateClassAndSection = $('.improve-first-form-fields #updateClassAndSection');
		var updateSchoolName = $('.improve-first-form-fields #updateSchoolName');

		var allfields = [updateYourName, updateClassAndSection, updateSchoolName];
		var count = 1;
		var ratio = 11.11;
		var finalStatus = 0;
	 	for(var i=0; i<allfields.length; i++){
	 		var str = allfields[i].val();
	 		if(typeof str === 'string' && str != '') {
	 			var getStatus =  ratio * count;
	 			var finalStatus = getStatus;
	 			count++;
	 		}
	 	}
	 	$('.my-bar').css('width', finalStatus + "%");
	 	finalStatus = Math.round(finalStatus);
	 	$('.my-bar').text(finalStatus + "%");
	};

	$('#improveFirstFormFieldsNext').click(function(){
		var updateYourName = $('.improve-first-form-fields #updateYourName');
		var updateClassAndSection = $('.improve-first-form-fields #updateClassAndSection');
		var updateSchoolName = $('.improve-first-form-fields #updateSchoolName')
		var allfields = [updateYourName, updateClassAndSection, updateSchoolName];
		var count = 1;
	 	for(var i=0; i<allfields.length; i++){
	 		var str = allfields[i].val();
	 		if(typeof str === 'string' && str != '') {
	 			count++;
	 		}
	 	}
	 	if(count-1 == allfields.length){
	 		$(this).attr('href', 'improve-1.html');
	 	}
	});


	/*Improve Form page-2 form validation */
	$('.improve-second-form-fields input, .improve-second-form-fields textarea').on('blur change', function(){
		improveSecondFormFields();
	});

	function improveSecondFormFields(){
		var workshopStarRating = $(".improve-second-form-fields #workshopStarRating input[type='radio']");
		var workshopRadioGroup = $(".improve-second-form-fields #workshopRadioGroup input[type='radio']");
		var workShopOtherComment = $('.improve-second-form-fields #workShopOtherComment');
		var allfields = [workshopStarRating, workshopRadioGroup];
		var count = 1;
		var ratio = 11.11;
		var finalStatus = 0;
	 	for(var i=0; i<allfields.length; i++){
	 		var el = allfields[i];
	 		if($(el).is(':checked')){
	 			var getStatus = ratio * count;
	 			var finalStatus = getStatus;
	 			count++;
	 		}
	 	};
	 	var str = workShopOtherComment.val();
	 	if(str != '') {
	 		finalStatus += 11.11;
	 	};

	 	finalStatus += 33;
	 	$('.my-bar').css('width', finalStatus + "%");
	 	finalStatus = Math.round(finalStatus);
	 	$('.my-bar').text(finalStatus + "%");
	};

	$('#improveSecondFormFieldsNext').click(function(){
		var workshopStarRating = $(".improve-second-form-fields #workshopStarRating input[type='radio']");
		var workshopRadioGroup = $(".improve-second-form-fields #workshopRadioGroup input[type='radio']");
		var workShopOtherComment = $('.improve-second-form-fields #workShopOtherComment');
		var allfields = [workshopStarRating, workshopRadioGroup];
		var count = 1;
		var ratio = 11.11;
		var finalStatus = 0;
	 	for(var i=0; i<allfields.length; i++){
	 		var el = allfields[i];
	 		if($(el).is(':checked')){
	 			var getStatus = ratio * count;
	 			var finalStatus = getStatus;
	 			count++;
	 		}
	 	};
	 	var str = workShopOtherComment.val();
	 	if(str != '') {
	 		finalStatus += 11.11;
	 	};

	 	finalStatus += 33;
	 	if(finalStatus == 66.33){
	 		$(this).attr('href', 'improve-2.html');
	 	}
	});


	/*Improve Form page-3 form validation */
	$('.improve-third-form-fields input, .improve-third-form-fields textarea').on('blur change', function(){
		improveThirdFormFields();
	});

	function improveThirdFormFields(){
		var counselorStarRating = $(".improve-third-form-fields #counselorStarRating input[type='radio']");
		var counselorRadioGroup = $(".improve-third-form-fields #counselorRadioGroup input[type='radio']");
		var counselorOtherComment = $('.improve-third-form-fields #counselorOtherComment');
		var allfields = [counselorStarRating, counselorRadioGroup];
		var count = 1;
		var ratio = 11.11;
		var finalStatus = 0;
	 	for(var i=0; i<allfields.length; i++){
	 		var el = allfields[i];
	 		if($(el).is(':checked')){
	 			var getStatus = ratio * count;
	 			var finalStatus = getStatus;
	 			count++;
	 		}
	 	};
	 	var str = counselorOtherComment.val();
	 	if(str != '') {
	 		finalStatus += 11.11;
	 	};

	 	finalStatus += 67;
	 	$('.my-bar').css('width', finalStatus + "%");
	 	finalStatus = Math.round(finalStatus);
	 	$('.my-bar').text(finalStatus + "%");
	};

	$('#improveThirdFormFieldsNext').click(function(){
		return false
	});

	/* Input fields editable and Undo */
	$('.editable .field-edit').click(function(){
		$(this).hide();
		$(this).siblings('.field-undo').show();
		$(this).siblings('input').prop('disabled', false);
		$(this).siblings('input').focus();
	});

	$('input').focus(function(){
		this.value = this.value;
	});



})(jQuery);




