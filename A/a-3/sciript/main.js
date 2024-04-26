$(function(){
    // gnb
    $(".gnb li").hover(
        function() {
            $(this).find(".sub").stop().slideDown()
        },
        function() {
            $(this).find(".sub").stop().slideUp()
        }
    )    
    // modal
    $("#showModal").click(function(){
        $(".modal").show()
    })
    $("#closeModal").click(function(){
        $(".modal").hide()
    })
    // silde

    // console.log ($(".sliders"))
    // console.log ($(".slide"))
    // console.log ($(".slide").eq(0))
    // ㄴ확인용
    // .stop() 중요
    // 육각형/메소드/()마무리    

    // setInterval(function(){
    //     $(".sliders").animate({left: "-100%"}, function(){
    //         $(this).append($(".slide").eq(0))
    //         $(this).css("left", 0)  
    //     })
    //     }, 2000)

    $('.sliders a:gt(0)').hide();

    setInterval(function(){
      $('sliders a:first-child').fadeOut()
      .next('a').fadeIn()
      .end().appendTo('.slide');
    }, 3000);    
        
    // tab
    // console.log ($(".tap_title h3"))
    // console.log ($(".tab_contents .item"))

    $(".tab_title h3").click(function(){
    $(".tab_title h3").removeClass("active")
    $(this).addClass("active")

    var idx = $(this).index()
            $(".tab_contents .item").hide()
            $(".tab_contents .item").eq(idx).show()
   
   
    
    // console.log(idx)
    // console.log($(this).index())

})
})  
