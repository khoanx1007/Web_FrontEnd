$(document).ready(function(){
    $('#add').on('click',function(){
        if ($('#title').val()==''){
                alert("Viết gì đi bạn ei!!!")
        }
        else{
        $('ul').append('<li class="item">'+$('#title').val()+'<i class="fas fa-check"></i><i class="fas fa-times"></i> </li>');
        $('#title').val('');
        }
        $('li').hover(function(){
            $(this).toggleClass("change")
        })
    })
    $('#content').on('click','.item',function(){
        $(this).css({'text-decoration':'line-through'})
        $(this).css({'background-color':'#888888'})
        
    })
    $('#content').on('click','.fa-times',function(){
        $(this).parent().remove(); 
    })
})