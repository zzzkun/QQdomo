$(function () {

//1.监听window的滚动

      var index=0, timer;
    showAndHideOtherEle(index);


        $(window).mousewheel(function (event) {
            //监听屏幕的上下滚动：1 是向上，-1是向下
            //1.取消定时器 --> 节流
            clearTimeout(timer);
            timer=setTimeout(function () {
                var deltaY=event.deltaY>0?1:-1;
                index=index-deltaY;
                if (index<=0){
                    index=0;
                }
                else if(index==$('.gps li').length-1){
                    index==$('.gps li').length-1;
                }
                console.log(event.deltaY);


                $('.gps li').eq(index).addClass('current')
                    .siblings('li').removeClass('current');
                $('section').eq(index).show().siblings('section').hide();

                //5.显示和隐藏其它的元素
                showAndHideOtherEle(index);
                //5.删除落空类  --> current
                removeLuoKongClass(index);
            },500)

        })

  $('.gps li').on('click',function () {
      var index=$(this).index();
      // alert(index);
      $(this).addClass('current').siblings('li').removeClass('current');
      $('section').eq(index).show().siblings('section').hide();
      //4.显示和隐藏其它的元素
      showAndHideOtherEle(index);
      //5.删除落空类  --> current
      removeLuoKongClass(index);
  })




    /**
     * 显示和隐藏其它的元素
     * index 当期是第几屏
     */


    function showAndHideOtherEle(index) {
        if(index==0){
            $('.header-left').hide();
            $('.scroll').show();
        }else{
            $('.header-left').show();
            $('.scroll').hide();
        }
    }
    function removeLuoKongClass(index) {
        setTimeout(function () {
            $('section').eq(index).removeClass('current').siblings('section').addClass('current');
        },10);
    }


})