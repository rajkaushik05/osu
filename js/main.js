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


})(jQuery);




/* Register page add editional subject in interest */

	/*document.getElementById('additionalSubjectRegister').addEventListener("change", addSubject);
	
	var  listedItem = document.querySelectorAll('#defaultSubjectsRegister li span');
	for(var i=0; i<listedItem.length; i++){
		var thisEls = listedItem[i];
		listedItem.addEventListener('click', deleteItem);
	};

	function deleteItem(){
		el = thisEls.parentNode;
		var elsList = document.getElementById('additionalSubjectRegister');
		var opt = document.createElement("option");
		opt.text = el.childNodes[0].nodeValue;
		elsList.add(opt);
		console.log();
		el.style.display = "none";

	}*/

/*(function(){
	if(document.addEventListener){
		window.onload = workshopDislike();
		window.onload = counselorDislike();
		//window.onload = myFunction();


	} else if(document.attachEvent) {
		window.onload = workshopDislike();
		window.onload = counselorDislike();
	};
	
	function workshopDislike(){
		alert();
		var getEls = document.querySelectorAll("#workshopRadioGroup input[type='radio']");
		for(var i=0; i<getEls.length; i++){
			var thisEls = getEls[i];
			thisEls.addEventListener("change", function(){
				if(thisEls.id == "checkNotLike" && thisEls.checked == true){
					document.getElementById("notLikeComment").style.display = "block";
				} else {
					document.getElementById("notLikeComment").style.display = "none";
				};
			});
		};
	};

	function counselorDislike(){
		var getEls = document.querySelectorAll("#counselorRadioGroup input[type='radio']");
		for(var i=0; i<getEls.length; i++){
			var thisEls = getEls[i];
			thisEls.addEventListener("change", function(){
				if(thisEls.id == "checkNotLikeCounselor" && thisEls.checked == true){
					document.getElementById("notLikeCommentCounselor").style.display = "block";
				} else {
					document.getElementById("notLikeCommentCounselor").style.display = "none";
				};
			});
		};
	};

})();*/




