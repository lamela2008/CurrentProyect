$(document).ready(function(){

	params = {}
	json_params = JSON.stringify(params);
    var URL = sessionStorage.getItem("ipServicio")+"clients";

    $.ajax({
		type: 'POST',
		crossOrigin: true,
		url: URL,
		contentType: 'application/json',
		dataType: "json",
		cache : false,   
		data: json_params,
		success: function(response, textStatus, jqXHR){
	    	if(response.status == 0){ 
	    		$("div.home ul.collection").empty();
				sessionStorage.setItem("cities", JSON.stringify(response.cities))
				sessionStorage.setItem("poolType", JSON.stringify(response.poolType))

	    		$.each(response.clients, function(id,key) {
	    			$("div.home ul.collection")
    				.append($('<li class="collection-item avatar">')
    					.append($('<i class="material-icons circle">')
    						.append((key.percent) ? key.percent : 0 +'%')
    					)
    					.append($('<span class="title">')
    						.append('<strong>' + key.name + '</strong>')
    					)
    					.append($('<p>')
    						.append(key.address)
    						.append('<br>')
    						.append('Last Update: ' + key.lastUpdate)
    					)
    					.append($('<a class="secondary-content">')
    						.append($('<i class="fa fa-chevron-right">'))
    					)
	    				.on('click', function(){
	    					params = {}
	    					params["client_id"] = key.id;
							json_params = JSON.stringify(params);

						    var URL = sessionStorage.getItem("ipServicio")+"activitiesByProjectID";
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
									sessionStorage.setItem("clientID", key.id)
									sessionStorage.setItem("client", JSON.stringify(response.client))
									sessionStorage.setItem("primary-skills", JSON.stringify(response));
						    		location.href='primary-skills.html';
								}
							})

	    					return false;
	    				})
    				)
	    		})
	    	}
		},
		error: function(jqXHR, textStatus, errorThrown){

		    if(jqXHR.status==500){
				swal({   
					title: sessionStorage.getItem("nameProduct"),   
					text: "Internal Error",     
					confirmButtonColor: "#8DC03E !important",   
					confirmButtonText: "Ok",   
					closeOnConfirm: true }, function(){});          
		    } else { 
		    	swal(sessionStorage.getItem("nameProduct"),'Network Error');
		    }
	  	}

	});

	$("button[name=btn_add]").on('click', function(){
		location.href='add-customer.html';
	})
})