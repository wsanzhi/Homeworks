$(document).ready(function() {
    //搜索框边框
    $('#kw').click(function() {
        $('#search').addClass('quickdelate-wrap-focus');
    });
    $('#kw').mouseout(function(event) {
        $('#search').removeClass('quickdelate-wrap-focus');
    });

    //sidebar hide and show
    $('#bri').mouseover(function() {
        $('.bdbri').css({
            opacity: '1',
            display: 'block'
        });
    });
    $('.bdbri').hover(function() {
        $(this).show();
        //sidebar 显示，禁止滚动
        var initTop = 0;
        $(window).bind('scroll', function() {
            var scrollTop = $(document).scrollTop();
            if (scrollTop > initTop) {
                $('body').scrollTop(0);
            } else {
                $('body').scrollTop(0);
            }
            initTop = scrollTop;
        })

    }, function() {
        $(this).hide();
        $(window).unbind('scroll') //鼠标滑出，解除滚动事件

    });

    //我的关注导航显示与隐藏
    $('.s-code-nav').click(function() {
        $('.s-mblock-content').toggle();
        $('.beforech').toggleClass('mine-title-icon-change'); //切换arrow样式
    })


    //划过backtop按钮
    $('#btn').hover(function() {
        $('.icon-mask').css('display', 'block');
        $('#btn .icon').css('display', 'none');
    }, function() {
        $('.icon-mask').css('display', 'none');
        $('#btn .icon').css('display', 'block');
    });
    //定制内容title的切换
    var select = $('#s-menu-wrapper span');
    var content = $('.s-content')
        // console.log(select)
    select.each(function(index, el) { //我的关注后点击事件
        $(select[index]).click(function() {
            $(this).css('backgroundColor', '#e8e8e8').siblings('.s-menu-item').css('backgroundColor', '#fff');;
            $(content).eq(index).css('display', 'block').siblings('.s-content').css('display', 'none');
            $('#s-menu-mine').css('backgroundColor', '#fff');
            $('.s-content-special').css('display', 'none');
        });

    });
    $('#s-menu-mine').click(function() { //我的关注
        $(this).css('backgroundColor', '#e8e8e8');
        $(select).css('backgroundColor', '#fff');
        $(content).css('display', 'none');
        $('.s-content-special').css('display', 'block');
    });

    //换肤
    $('.s-skin').click(function() {
        $('#bgimage').slideToggle(300);
    });

    var changeBgImg = $('#mimage li img');
    //	console.log(changeBgImg)
    $(changeBgImg).hover(function() { //设置移出隐藏
        $('#bgimage').show()
    }, function() {
        $('#bgimage').hide()
    });
    changeBgImg.each(function(index, el) { //获取点击目标
        $(changeBgImg[index]).click(function(event) {
            var bgImg = $(this).attr('src'); //获取路径
            //console.log(bgImg)
            $('body').css({
                'background-image': 'url(' + bgImg + ')',
                'background-size': '100% 100%'
            });;
        });
    });
});


//回到顶部
window.onload = function() {
    var topbtn = document.getElementById('btn');
    var timer = null;
    window.onscroll = function() {
        var backtop = document.body.scrollTop;
        if (backtop >= 100) {
            topbtn.style.display = 'block';
        } else {
            topbtn.style.display = 'none';
        }
    }

    topbtn.onclick = function() {
        timer = setInterval(function() {
            var backtop = document.body.scrollTop;
            var speedtop = backtop / 5;
            document.body.scrollTop = backtop - speedtop;
            if (backtop == 0) {
                clearInterval(timer);
            }
        }, 30);
    }
};
