$(function(){
    //1.楼梯什么时候显示，800px scroll--->scrollTop
    $(window).on('scroll',function(){
        var $scroll=$(this).scrollTop();
        if($scroll>=900){
            $('#loutinav').show();
        }else{
            $('#loutinav').hide();
        }

        //4.拖动滚轮，对应的楼梯样式进行匹配
        $('.louti').each(function(){
            var $loutitop=$('.louti').eq($(this).index()).offset().top+400;
            //console.log($loutitop);
            if($loutitop>$scroll){//楼层的top大于滚动条的距离
                $('#loutinav li').removeClass('active');
                $('#loutinav li').eq($(this).index()).addClass('active');
                return false;//中断循环
            }
        });

    });
    //2.获取每个楼梯的offset().top,点击楼梯让对应的内容模块移动到对应的位置  offset().left

    var $loutili=$('#loutinav li').not('.last');
    $loutili.on('click',function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        var $loutitop=$('.louti').eq($(this).index()).offset().top;
        //获取每个楼梯的offsetTop值
        $('html,body').animate({//$('html,body')兼容问题body属于chrome
            scrollTop:$loutitop
        })
    });
    //3.回到顶部
    $('.last').on('click',function(){
        $('html,body').animate({//$('html,body')兼容问题body属于chrome
            scrollTop:0
        })
});
    /*
        效果逐渐显示
     */
    $(document).scroll(function() {
        var scroH = $(document).scrollTop();  //滚动高度
        // var viewH = $(window).height();  //可见高度
        // var contentH = $(document).height();  //内容高度

        if(scroH >100){  //距离顶部大于100px时
            $('.louti1').css({
                                'opacity':1,
                                'transition':'1.5s'
                            });
        }else{
            $('.louti1').css('opacity',0);
        }
    })

//    遮罩层
    $('.bb').hover(
        function (){
            var $bg=$(this).find('.bg');
            $bg.toggleClass('con1');
            // $(this).find('img').toggleClass('hover');
        }
    )

})