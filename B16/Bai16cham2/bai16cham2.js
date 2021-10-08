
    var bar = '<i class="fa fa-bars" aria-hidden="true"></i>';
	var cross = '<i class="fa fa-times" aria-hidden="true"></i>';
	var plus = '<i class="fa fa-plus" aria-hidden="true"></i>';
	var minus = '<i class="fa fa-minus" aria-hidden="true"></i>';
    $(function(){
    var check=true;
    $('#icon').click(function()
        {
            
            if(check == true)
            {
                
                $('#icon').html(cross).animate({  borderSpacing: -100 }, {duration:'2s'},'linear');

                $("#menu").animate({"left":"0px"}, "slow");
                check = !check;

            }else
            {   
                
                $('#icon').html(bar).animate({  borderSpacing: 200 }, {duration:'2s'},'linear');
                $("#menu").animate({"left":"-100%"}, "slow");
                check = !check;
                
            }

            });

            var check1 = true;
            $('#IONIA').click(function()
            {
                
                if(check1 == true)
            {
                
                $('#plus').html(minus).animate({  borderSpacing: 200 },{duration:'2s'},'linear');
                $('#menu ul li ul').css({'position':'static'});
                $('#menu ul li ul').css({'background':'#6f282f'});
                $('#IONIA').css({'background':' #6f282f'});
                $('#menu ul li ul').slideDown();
                check1 = !check1;

            }else
            {   
                
                $('#plus').html(plus).animate({ borderSpacing: -100 },{duration:'2s'},'linear');
                check1 = !check1;
                $('#IONIA').css({'background':'black'});
                $('#menu ul li ul').slideUp();
                
            }
            });
    })
