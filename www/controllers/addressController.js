$(document).ready(function(){
	
	var client = JSON.parse(sessionStorage.getItem("client"));


	$("button[name=btn_save]").on('click', function(){

		if ($("input#address").val()){
			
			params = {}
			params["client_id"] = client.id;
			params["address"] = $("input#address").val();
			params["latitude"] = $("input[name=latitude]").val();
			params["longitude"] = $("input[name=longitude]").val();
			json_params = JSON.stringify(params);

		    var URL = sessionStorage.getItem("ipServicio")+"updateAddresInCustomer";
			$.ajax({
				type: 'POST',
				crossOrigin: true,
				url: URL,
				contentType: 'application/json',
				dataType: "json",
				cache : false,   
				data: json_params,
				success: function(response, textStatus, jqXHR){
					sessionStorage.setItem("client", JSON.stringify(response.client))
		    		location.href='clients.html';
				}
			})			
		}else{
	    	swal(sessionStorage.getItem("nameProduct"), 'Address is Empty!');
		}
	})
})