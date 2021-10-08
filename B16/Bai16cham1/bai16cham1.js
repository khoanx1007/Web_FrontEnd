$(function(){
    var lightbox=$('#mylightbox')
    var lightboxIMG=$(".img-zoom")
    var Text = $(".caption")
    $('.img').click(function(){
        var picture=$(this).attr('src')
        $('#mylightbox').css({'display':'block'})
        lightboxIMG.attr('src',picture)
        Text.html(this.alt)
    });
    $(".close").click(function(){
        lightbox.css({'display':'none'})
    });
});