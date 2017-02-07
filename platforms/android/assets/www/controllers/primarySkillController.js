$(document).ready(function(){
	
	var pSkills = JSON.parse(sessionStorage.getItem("primary-skills"));

	$("div#primary-skills ul").empty();
	$.each(pSkills.primaryConfiguration, function(id, key) {
		if (key.skillCount == key.skillUpdated){
			$("div#primary-skills ul")
			.append($('<li class="collection-item waves-effect blue-text">')
				.append($('<div>')
					.append(key.name)
					.append($('<a href="#!" class="secondary-content">')
						.append($('<i class="fa fa-chevron-right blue-text">'))
					)
				)
				.on('click', function(){
					var config = pSkills.configurationsArray[key.id]

					sessionStorage.setItem("secondary-skills", JSON.stringify(config));

					sessionStorage.setItem("primaryID", key.id);

					location.href = 'secondary-skills.html';
				})
			)
		}else{
			$("div#primary-skills ul")
			.append($('<li class="collection-item waves-effect">')
				.append($('<div>')
					.append(key.name)
					.append($('<a href="#!" class="secondary-content">')
						.append($('<i class="fa fa-chevron-right gray-text">'))
					)
				)
				.on('click', function(){
					var config = pSkills.configurationsArray[key.id]

					sessionStorage.setItem("secondary-skills", JSON.stringify(config));

					sessionStorage.setItem("primaryID", key.id);

					location.href = 'secondary-skills.html';
				})
			)
		}
	})

	$("button[name=customer]").on('click', function(){
		location.href='customer.html';
	})
})