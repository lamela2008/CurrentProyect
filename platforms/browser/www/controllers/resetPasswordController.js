$(document).ready(function(){
	var ipServicio="http://pooling.localhost/webresources/";
	//var ipServicio="http://138.197.10.74:81/webresources/";
	var  public_url = "";//http://138.197.10.74/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/";

    var appName = "Current Proyect";

	sessionStorage.setItem("ipServicio",ipServicio);
    sessionStorage.setItem("nameProduct", appName);
    sessionStorage.setItem("public_url", public_url);

    sessionStorage.setItem("ipServicio",ipServicio);

	sessionStorage.removeItem("criteria");
	
	$("button[name=btn_reset]").on('click', function(){

		if ($("input[name=email]").val()){
			params = {}
			params["email"] = $("input[name=email]").val();
			json_params = JSON.stringify(params);

		    var URL = sessionStorage.getItem("ipServicio")+"resetPassword";
			$.ajax({
				type: 'POST',
				crossOrigin: true,
				url: URL,
				contentType: 'application/json',
				dataType: "json",
				cache : false,   
				data: json_params,
				success: function(response, textStatus, jqXHR){
					if (response.result == 0)
						location.href='index.html';
				},
				error: function(jqXHR, textStatus, errorThrown){
				    if(jqXHR.status==500){
						swal(sessionStorage.getItem("nameProduct"), JSON.parse(jqXHR.responseText).error);	          
				    } else { 
						swal(sessionStorage.getItem("nameProduct"), JSON.parse(jqXHR.responseText).error);	          
				    }
			  	}
			})	
		}else{
			swal(sessionStorage.getItem("nameProduct"), 'Email is empty');	          
		}
		
	})

})