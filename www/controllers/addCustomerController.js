$(document).ready(function(){
	
	var cities = JSON.parse(sessionStorage.getItem("cities"));
	var poolType = JSON.parse(sessionStorage.getItem("poolType"));

	$.each(cities, function(key, value) {
		$('<option>').val(key).text(value).appendTo($("select[name=city]"));
	})

	$.each(poolType, function(key, value) {
		$('<option>').val(key).text(value).appendTo($("select[name=pool-type]"));
	})

	$('select').material_select();

	$("button[name=btn_next]").on('click', function(){

		$(this).prop("disabled", true);
		$("div.loading").css("display", "");

		params = {}
		params["customer"] = $("input[name=name]").val();
		params["email"] = $("input[name=email]").val();
		params["city"] = $("select[name=city]").val();
		params["pool-type"] = $("select[name=pool-type]").val();
		params["permit-number"] = $("input[name=permit-number]").val();
		params["process-number"] = $("input[name=process-number]").val();
		params["contract-date"] = $("input[name=contract-date]").val();
		params["excavation-date"] = $("input[name=excavation-date]").val();
		params["soil-letter-request"] = $("input[name=soil-letter-request]").val();
		params["soil-letter-received"] = $("input[name=soil-letter-received]").val();
		json_params = JSON.stringify(params);

	    var URL = sessionStorage.getItem("ipServicio")+"registerCustomer";
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