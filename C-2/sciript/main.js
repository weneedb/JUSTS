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

    // slide
    setInterval(function(){
        $(".sliders").animate({top: "-100%"}, function(){
            $(this).append($(".slide").eq(0))
            $(this).css("top", 0)
        })
    }, 3000)
 
}) 