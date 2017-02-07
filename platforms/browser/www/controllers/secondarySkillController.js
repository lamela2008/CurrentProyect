$(document).ready(function(){
	
	var sSkills = JSON.parse(sessionStorage.getItem("secondary-skills"));

	var primaryID = sessionStorage.getItem("primaryID")

	var primarySkills = JSON.parse(sessionStorage.getItem("primary-skills"));

	$("textarea[name=note]").val(primarySkills.primaryConfiguration[primaryID].note)

	$("div#secondary-skills").empty();
	$.each(sSkills, function(id, key) {
		if (key.value == "date"){
			$("div#secondary-skills")
			.append($('<div class="input-field col s12">')
				.append($('<label>')
					.append(key.name)
				)
				.append($('<input type="date" class="datepicker" name="skill" placeholder="Date">'))

			)
			$("input:last").val(key.selected)
		}else{
			var values = JSON.parse(key.value);
			$("div#secondary-skills")
			.append($('<div class="input-field col s12">')
				.append($('<select name="skill">'))
				.append($('<label>')
					.append(key.name)
				)
			)

			$.each(values, function(key, value) {
				$('<option>').val(key).text(value).appendTo($("select:last"));
			})

			$("select:last").val(key.selected)
		}

	})

	$('.datepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 15, // Creates a dropdown of 15 years to control year
		format: 'yyyy-mm-dd'
	});

	$('select').material_select();

	$("a[name=save]").on('click', function(){

		//$("div.loading").css("display", "");
		var skills = [];
		var elements = document.getElementsByName("skill");
		for (var i = 0; i < elements.length; i++) {
			skills.push(elements[i].value)
		}

		params = {}
		params["client_id"] = sessionStorage.getItem("clientID");
		params["primaryID"] = sessionStorage.getItem("primaryID");
		params["skills"] = skills;
		params["note"] = $("textarea[name=note]").val();
		json_params = JSON.stringify(params);

	    var URL = sessionStorage.getItem("ipServicio")+"updateSkillByPrimaryID";
		$.ajax({
			type: 'POST',
			crossOrigin: true,
			url: URL,
			contentType: 'application/json',
			dataType: "json",
			cache : false,   
			data: json_params,
			success: function(response, textStatus, jqXHR){
				console.log(response)
				sessionStorage.setItem("primary-skills", JSON.stringify(response));
	    		location.href='primary-skills.html';
			}
		})
	})
})