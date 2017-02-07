$(document).ready(function(){
	
	var client = JSON.parse(sessionStorage.getItem("client"));

	$("input[name=name]").val(client.name)
	$("input[name=email]").val(client.user.email)
	$("input[name=city]").val(client.city.name)
	$("input[name=permit-number]").val(client.permit_number)
	$("input[name=process-number]").val(client.process_number)
	$("input[name=contract-date]").val(client.contract_date)
	$("input[name=excavation-date]").val(client.start_date)
	$("input[name=soil-letter-request]").val(client.soil_letter_request)
	$("input[name=soil-letter-received]").val(client.soil_letter_received)



	var poolType = JSON.parse(sessionStorage.getItem("poolType"));

	console.log(poolType)

	$.each(poolType, function(key, value) {
		console.log(key)
		$('<option>').val(key).text(value).appendTo($("select[name=pool-type]"));
	})

	$("select[name=pool-type]").val(client.pool_type_id)

	$('select').material_select();

	$("button[name=btn_next]").on('click', function(){
		params = {}
		params["client_id"] = client.id;
		params["name"] = $("input[name=name]").val();
		params["email"] = $("input[name=email]").val();
		params["pool-type"] = $("select[name=pool-type]").val();
		params["permit-number"] = $("input[name=permit-number]").val();
		params["process-number"] = $("input[name=process-number]").val();
		params["contract-date"] = $("input[name=contract-date]").val();
		params["excavation-date"] = $("input[name=excavation-date]").val();
		params["soil-letter-request"] = $("input[name=soil-letter-request]").val();
		params["soil-letter-received"] = $("input[name=soil-letter-received]").val();
		json_params = JSON.stringify(params);

	    var URL = sessionStorage.getItem("ipServicio")+"updateCustomer";
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
	    		location.href='address.html';
			}
		})
	})
})