$(document).ready(function(){
    var plus = '<i class="fa fa-plus"></i>';
	var minus = '<i class="fa fa-minus"></i>'
    $('#p1').show();
    $("#b1").click(function(){
        if($('#b1').html() == plus) {
            $('#b1').html(minus);
        }else {
            $('#b1').html(plus);
        }

        $('#b2').html(plus);
        $('#b3').html(plus);
        $('#b4').html(plus);

        $('#p1').slideToggle();
        $('#p2').hide();
        $('#p3').hide();
        $('#p4').hide();
    })
    $('#p2').hide();
	$('#b2').click(function() {
	if($('#b2').html() == plus) {
    	$('#b2').html(minus);
	}else {
    	$('#b2').html(plus);
	}

    	$('#b1').html(plus);
		$('#b4').html(plus);
		$('#b3').html(plus);

		$('#p2').slideToggle();
		$('#p1').hide();
		$('#p3').hide();
		$('#p4').hide();
	});

	$('#p3').hide();
	$('#b3').click(function() {
	    if($('#b3').html() == plus) {
			$('#b3').html(minus);
		}else {
			$('#b3').html(plus);
			}

	    	$('#b1').html(plus);
			$('#b2').html(plus);
			$('#b4').html(plus);

			$('#p3').slideToggle();
			$('#p4').hide();
			$('#p2').hide();
			$('#p1').hide();
	});

	$('#p4').hide();
	$('#b4').click(function() {
		if($('#b4').html() == plus) {
			$('#b4').html(minus);
		}else {
			$('#b4').html(plus);
		}

			$('#b1').html(plus);
			$('#b2').html(plus);
			$('#b3').html(plus);

			$('#p4').slideToggle();
			$('#p3').hide();
		    $('#p2').hide();
			$('#p1').hide();
	});
})