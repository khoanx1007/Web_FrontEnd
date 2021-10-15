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

        $('#p1').slideToggle();
        $('#p2').hide();
        $('#p3').hide();
    })
    $('#p2').hide();
	$('#b2').click(function(){
	if($('#b2').html() == plus) {
    	$('#b2').html(minus);
	}else {
    	$('#b2').html(plus);
	}

    	$('#b1').html(plus);
		$('#b3').html(plus);

		$('#p2').slideToggle();
		$('#p1').hide();
		$('#p3').hide();
	});

	$('#p3').hide();
	$('#b3').click(function(){
	    if($('#b3').html() == plus) {
			$('#b3').html(minus);
		}else {
			$('#b3').html(plus);
			}

	    	$('#b1').html(plus);
			$('#b2').html(plus);

			$('#p3').slideToggle();
			$('#p2').hide();
			$('#p1').hide();
	});
	$("#bars").click(function(){
		$(this).toggleClass("fa-times");
		$(".navigation-menu").toggleClass("active");
	  });
})
$(document).ready(function () {
    var speed = 5000;
  	var run = setInterval(rotate, speed);
    var slides = $('.slide');
    var container = $('#slides ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width();
    var previous = 'prev';
    var next = 'next';
    slides.width(item_width);
    container.parent().width(item_width);
    container.width(slides.length * item_width);
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();  
    $('#buttons>a').click(function (e) { 
        if (container.is(':animated')) {
            return false;
        }
        if (e.target.id == previous) {
            container.stop().animate({
                'left': 0
            }, 1500, function () {
                container.find(elm + ':first').before(container.find(elm + ':last'));
                resetSlides();
            });
        }
        
        if (e.target.id == next) {
            container.stop().animate({
                'left': item_width * -2
            }, 1500, function () {
                container.find(elm + ':last').after(container.find(elm + ':first'));
                resetSlides();
            });
        }            
        return false;
        
    });
    container.parent().mouseenter(function () {
        clearInterval(run);
    }).mouseleave(function () {
        run = setInterval(rotate, speed);
    });
    function resetSlides() {
        container.css({
            'left': -1 * item_width
        });
    }
    
});
function rotate() {
    $('#next').click();
}
var submit=document.getElementById("send_but");
var errors=document.getElementsByClassName("errors");
var filtermail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var filternum = /[0-9]/;
document.getElementById('yname').addEventListener('keyup',function(){
	var name=document.getElementById('yname').value;
	if (name==''){
		errors[0].innerHTML="Tên không được để trống !";
	}
	else if(name.length<8)
	{
		errors[0].innerHTML="Tên phải lớn hơn 8 kí tự!"
	}
	else{
		errors[0].innerHTML="";
	}
})
document.getElementById('email').addEventListener('keyup',function(){
	var mail=document.getElementById("email").value;
		if (mail=='')
		{
			errors[1].innerHTML="Email không được để trống!";
		}
		else if(filtermail.test(mail)==false)
		{
			errors[1].innerHTML="Email phải đúng định dạng!"
		}
		else
		{
			errors[1].innerHTML="";
		}
})
document.getElementById('number').addEventListener('keyup',function(){
	var number=document.getElementById("number").value;
		if (number=='')
		{
			errors[2].innerHTML="Số ĐT không đc để trống!";
		}
		else if(filternum.test(number)==false)
		{
			errors[2].innerHTML="Số ĐT phải đúng định dạng!";
		}
		else
		{
			errors[2].innerHTML="";
		}
})
document.getElementById('write').addEventListener('keyup',function(){
	var mes=document.getElementById("write").value;
		if(mes=='')
		{
			errors[3].innerHTML="Vui lòng viết gì đó!"
		}
		else{
			errors[3].innerHTML="";
		}
})
submit.addEventListener('click',function(e){
	e.preventDefault();
	var name=document.getElementById('yname').value;
	if (name==''){
		errors[0].innerHTML="Tên không được để trống !";
	}
	else if(name.length<8)
	{
		errors[0].innerHTML="Tên phải lớn hơn 8 kí tự!"
	}
	else{
		errors[0].innerHTML="";
	}
	var mail=document.getElementById("email").value;
		if (mail=='')
		{
			errors[1].innerHTML="Email không được để trống!";
		}
		else if(filtermail.test(mail)==false)
		{
			errors[1].innerHTML="Email phải đúng định dạng!"
		}
		else
		{
			errors[1].innerHTML="";
		}
	var number=document.getElementById("number").value;
		if (number=='')
		{
			errors[2].innerHTML="Số ĐT không được để trống!";
		}
		else if(filternum.test(number)==false)
		{
			errors[2].innerHTML="Số ĐT phải đúng định dạng!";
		}
		else
		{
			errors[2].innerHTML="";
		}
	var mes=document.getElementById("write").value;
		if(mes=='')
		{
			errors[3].innerHTML="Vui lòng viết gì đó!"
		}
		else{
			errors[3].innerHTML="";
		}
})