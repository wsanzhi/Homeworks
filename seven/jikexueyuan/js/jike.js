$(document).ready(function() {

    //搜索框
    $('#search-btn').click(function() {
        $('#searchbox').css('opacity', '1').show(300);
    });
    $('#close-btn').click(function() {
        $('#searchbox').css('opacity', '0').hide();
    });

    //左侧边栏菜单
    var listMenu = $('.aside-cList li>div') //获取触发数组

    listMenu.each(function(index, el) {
        $(listMenu[index]).hover(function() {
            $(this).children('.list-show').show();
        }, function() {
            $(this).children('.list-show').hide();
        });
    });

    /*切换排列样式*/
    $('.kuai-icon').click(function() {
        $('#changeid').attr('class', 'lesson-list');
        var stretch = $('.lesson-list li');
    });
    $('.list-icon').click(function() {
        $('#changeid').attr('class', 'lesson-list2');
    });
    /*两种排列*/
    var stretch = $('#changeid li');
    // var liclass =$('#stretch').attr('class')
    stretch.each(function(index, el) {
        $(stretch[index]).hover(function() {
            $(this).children('.lessonimg-box').find('.lessonplay').css('opacity', '1'); //播放图
            $(this).children('.lessonimg-box').find('i').eq(0).css('display', 'block'); //收藏图
            if ($('#changeid').attr('class') == 'lesson-list') {
                $(this).children('.lesson-infor').css('height', '175px'); //伸缩
                $(this).children('.lesson-infor').find('p').slideDown('500').css('opacity', '1');;
                $(this).children('.lesson-infor').find('dd').eq(1).css('display', 'block'); //难度等级
                $(this).children('.lesson-infor').find('.learn-number').css('display', 'block'); //学习人数

                var lessoniconBox = $(this).children('.lesson-infor').find('.lessonicon-box'); //
                var cimage = $(lessoniconBox).find('img');
                lessoniconBox.css('bottom', '-2px');
                $(cimage).css('top', '30px');
            }
            /*if ($('#changeid').attr('class')=='lesson-list2') {  //测试 。。
                 $(this).children('.lesson-infor').find('p').css({
                    height: '20px',
                    display: 'block',
                    opacity: '1'
                });
            }*/
        }, function() {
            $(this).children('.lessonimg-box').find('.lessonplay').css('opacity', '0'); //播放图
            $(this).children('.lessonimg-box').find('i').eq(0).css('display', 'none'); //收藏图
            if ($('#changeid').attr('class') == 'lesson-list') {
                $(this).children('.lesson-infor').css('height', '88px'); //伸缩
                $(this).children('.lesson-infor').find('p').slideUp(400).css('opacity', '0');;
                $(this).children('.lesson-infor').find('dd').eq(1).css('display', 'none');
                $(this).children('.lesson-infor').find('.learn-number').css('display', 'none');
                var lessoniconBox = $(this).children('.lesson-infor').find('.lessonicon-box'); //
                var cimage = $(lessoniconBox).find('img');
                lessoniconBox.css('bottom', '4px');
                $(cimage).css('top', '0');

            };
        });
    });

    /*数字导航*/
    var pageNumber = $('.page-number');
    //console.log(pageNumber);
    pageNumber.each(function(index, el) {

        $(pageNumber[index]).click(function() {

            $(this).addClass('pgcurrent');
            var pageNum = parseInt($(this).html());
            if (pageNum >= 4 && pageNum <= 92) { //点击按钮时候的变化
                $(pageNumber[3]).html(pageNum).addClass('pgcurrent');
                $(pageNumber[2]).html(pageNum - 1);
                $(pageNumber[1]).html(pageNum - 2);
                $(pageNumber[0]).html(pageNum - 3);
                $(pageNumber[4]).html(pageNum + 1);
                $(pageNumber[5]).html(pageNum + 2);
                $(pageNumber[6]).html(pageNum + 3);
                $(pageNumber[3]).siblings('.page-number').removeClass('pgcurrent');
            } else if (pageNum >= 1 && pageNum <= 3) {
                $(pageNumber[0]).html(1);
                $(pageNumber[1]).html(2);
                $(pageNumber[2]).html(3);
                $(pageNumber[3]).html(4);
                $(pageNumber[4]).html(5);
                $(pageNumber[5]).html(6);
                $(pageNumber[6]).html(7);
                $(pageNumber[pageNum - 1]).addClass('pgcurrent').siblings('.page-number').removeClass('pgcurrent');
            } else {
                alert('已经没有了！')
            }

            $('.pagenow input').val(pageNum); //设置按钮数字变化
        });

        //跳转页面
        $('.go').click(function() { //输入数值时候的变化
            var goNumber = parseInt($('.pagenow input').val());
            if (goNumber >= 4 && goNumber <= 95) {
                $(pageNumber[3]).html(goNumber).addClass('pgcurrent');
                $(pageNumber[3]).html(goNumber).siblings('.page-number').removeClass('pgcurrent')
                $(pageNumber[2]).html(goNumber - 1);
                $(pageNumber[1]).html(goNumber - 2);
                $(pageNumber[0]).html(goNumber - 3);
                $(pageNumber[4]).html(goNumber + 1);
                $(pageNumber[5]).html(goNumber + 2);
                $(pageNumber[6]).html(goNumber + 3);
            } else if (goNumber >= 1 && goNumber <= 3) {
                $(pageNumber[goNumber - 1]).addClass('pgcurrent');
                $(pageNumber[goNumber - 1]).siblings('.page-number').removeClass('pgcurrent');
                $(pageNumber[0]).html(1);
                $(pageNumber[1]).html(2);
                $(pageNumber[2]).html(3);
                $(pageNumber[3]).html(4);
                $(pageNumber[4]).html(5);
                $(pageNumber[5]).html(6);
                $(pageNumber[6]).html(7);
            } else {
                alert('数值超出')
            };
        });

        //首页
        $('.pgFirst').click(function() {
            $(pageNumber[0]).addClass('pgcurrent').siblings('.page-number').removeClass('pgcurrent');
            $(pageNumber[0]).html(1);
            $(pageNumber[1]).html(2);
            $(pageNumber[2]).html(3);
            $(pageNumber[3]).html(4);
            $(pageNumber[4]).html(5);
            $(pageNumber[5]).html(6);
            $(pageNumber[6]).html(7);
            $('.pagenow input').val(1);
        });

        //末页
        $('.pgLast').click(function() {
            $(pageNumber[0]).html(88)
            $(pageNumber[0]).html(89);
            $(pageNumber[1]).html(90);
            $(pageNumber[2]).html(91);
            $(pageNumber[3]).html(92);
            $(pageNumber[4]).html(93);
            $(pageNumber[5]).html(94);
            $(pageNumber[6]).html(95).addClass('pgcurrent').siblings('.page-number').removeClass('pgcurrent');
            $('.pagenow input').val(95);

        });
        /* //上一页
        //var prevNumber = parseInt($('.pagenow input').val()-1);
        $('.pgprev').click(function() {
            var nowNum=parseInt($(pageNumber[3]).html());
            var prevNum=nowNum-1;
            console.log(prevNum);
            

        });


        //下一页*/

    });
});
