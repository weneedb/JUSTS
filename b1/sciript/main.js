$(function(){
    // gnb
    $(".gnb").hover(
        function(){
            $(".gnb ul").stop().slideDown()
        },
        function(){
            $(".gnb ul").stop().slideUp()
        }
    )
    // tab
    $(".tabTitle h4").click(function(){
        $(".tabTitle h4").removeClass("active")
        $(this).addClass("active")

        var idx = $(this).index()                

        $(".tabContents ul").hide()
        $(".tabContents ul").eq(idx).show()                
    })

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