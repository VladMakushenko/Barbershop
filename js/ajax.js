$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "../mail.php",
			data: $(this).serialize()
		}).done(function() {
			// $(this).find("input").val("");
			// alert("Спасибо за обращение! Скоро мы с вами свяжемся.");
			$('.success').css('display', 'block').addClass('active');
			setTimeout(function() {
				$("#form").trigger("reset");
				$('.success').css('display', 'none').removeClass('active');
			}, 2000);
		});
		return false;
	});
	
});

