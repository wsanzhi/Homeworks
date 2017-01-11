//老师，这里我使用的是单例模式。

//这样做能够产生一个类的唯一实例，并且不会污染全局变量，还可暴露出接口进行扩展，用以通信。



$(document).ready(function() {
    var singletonOne = (function() {
        var instance = null;

        function pro() {
            return {
                init: function() {
                    var that = this;
                    that.render();
                    that.bind();
                },
                render: function() {
                    var that = this;
                    that.kw = $('#kw');
                    that.search = $('#search');
                    that.bri = $('#bri');
                    that.bdbri = $('.bdbri');
                },
                bind: function() {
                    var that = this;
                    that.kw.click(function() {
                        that.search.addClass('quickdelate-wrap-focus'); //边框样式
                    });
                    that.kw.mouseout(function() {
                        that.search.removeClass('quickdelate-wrap-focus'); //边框样式
                    });
                    that.bri.mousemove(function() {  //侧边栏效果
                        that.bdbri.css({
                            opacity: '1',
                            display: 'block'
                        });
                    });
                    that.bdbri.hover(function() {   //侧边栏显示时禁止滚动
                        $(this).show();
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
                        $(window).unbind('scroll'); //鼠标滑出，解除滚动事件
                    });
                }
            }
        }
        return {
            getInstance: function() {
                if (!instance) {
                    instance = pro();
                }
                return instance; //返回实例
            }
        }
    })();

    singletonOne.getInstance().init();


    var singletonTwo = (function() {
        var instance = null;

        function pro() {
            return {
                init: function() {
                    var that = this;
                    that.render();
                    that.bind();
                },
                render: function() {
                    var that = this;
                    that.nav = $('.s-code-nav');
                    that.content = $('.s-mblock-content');
                    that.beforech = $('.beforech');
                    that.btn = $('#btn');
                    that.mask = $('.icon-mask');
                    that.icon = $('#btn .icon');
                    that.select = $('#s-menu-wrapper span');
                    that.content = $('.s-content')
                    that.menu_mine = $('#s-menu-mine');
                    that.content_spaecial = $('.s-content-special');
                },
                bind: function() {                 //
                    var that = this;
                    that.nav.click(function() {  //我的关注arrow切换
                        that.content.toggle();
                        that.beforech.toggleClass('mine-title-icon-change');
                    });
                    that.btn.hover(function() {            //
                        that.mask.css('display', 'block');   
                        $('#btn .icon').css('display', 'none');
                    }, function() {
                        that.mask.css('display', 'none');
                        that.icon.css('display', 'block');
                    });
                    that.select.each(function(index, el) { //我的关注栏点击切换样式
                        $(that.select[index]).click(function() {
                            $(this).css('backgroundColor', '#e8e8e8').siblings('.s-menu-item').css('backgroundColor', '#fff');;
                            $(that.content).eq(index).css('display', 'block').siblings('.s-content').css('display', 'none');
                            $(that.menu_mine).css('backgroundColor', '#fff');
                            $(that.content_spaecial).css('display', 'none');
                        });
                    });
                    that.menu_mine.click(function() { 
                        $(this).css('backgroundColor', '#e8e8e8');
                        $(that.select).css('backgroundColor', '#fff');
                        $(that.content).css('display', 'none');
                        $(that.content_spaecial).css('display', 'block');
                    });
                }
            }
        }
        return {
            getInstance: function() {
                if (!instance) {
                    instance = pro();
                }
                return instance; //返回实例
            }
        }
    })();

    singletonTwo.getInstance().init();


    sigletonThr = (function() {
        var instance = null;

        function pro() {
            return {
                init: function() {
                    var that = this;
                    this.render();
                    this.bind();
                },
                render: function() {
                    var that = this;
                    that.s_skin = $('.s-skin');
                    that.bgimage = $('#bgimage')
                    that.changeBgImg = $('#mimage li img');
                    that.topbtn = $('#btn');
                    that.window=$(window);
                },
                bind: function() {
                    var that = this;
                    that.s_skin.click(function() {   //换肤选项显示和隐藏
                        $('#bgimage').slideToggle(300);
                    });
                    that.changeBgImg.hover(function() { //设置移出隐藏
                        $('#bgimage').show()
                    }, function() {
                        $('#bgimage').hide()
                    });
                    that.changeBgImg.each(function(index, el) { //获取点击目标
                        $(that.changeBgImg[index]).click(function() {
                            var bgImg = $(this).attr('src'); //获取路径
                            //console.log(bgImg)
                            $('body').css({
                                'background-image': 'url(' + bgImg + ')',
                                'background-size': '100% 100%'
                            });

                        });
                    });
                    that.window.scroll(function() {
                        var top = $('body').scrollTop();     //滚动条变化时，回到顶部按钮的样式改变
                        if (top >= 100) {
                            that.topbtn.css('display', 'block');
                        } else {
                            that.topbtn.css('display', 'none');
                        }
                    });
                    that.topbtn.click(function() {  
                        var backtop = $('body').scrollTop();    //点击回到顶部的动态效果
                        var timer;                  
                        timer = setInterval(function() {
                            var speedtop = backtop / 5;
                            backtop -= speedtop;
                            $('body').scrollTop(backtop);
                            if (backtop < 1) {
                                clearInterval(timer);
                            }
                        }, 30);
                    });
                }
            }
        };
        return {
            getInstance: function() {
                if (!instance) {
                    instance = pro();
                }
                return instance;
            }
        }
    })();

    sigletonThr.getInstance().init();




    //回到顶部
    // var topbtn = $('#btn');
    // var timer;
    // // console.log(backtop);
    // $(window).scroll(function() {
    //     var top = $('body').scrollTop();
    //     if (top >= 100) {
    //         topbtn.css('display', 'block');
    //     } else {
    //         topbtn.css('display', 'none');
    //     }
    // });
    // topbtn.click(function() {
    //     var backtop = $('body').scrollTop();
    //     timer = setInterval(function top() {
    //         var speedtop = backtop / 5;
    //         backtop -= speedtop;
    //         $('body').scrollTop(backtop);
    //         if (backtop < 1) {
    //             clearInterval(timer);
    //         }
    //     }, 30);
    // });
});




//回到顶部
// $('#kw').click(function() {
//     $('#search').addClass('quickdelate-wrap-focus');
// });
// $('#kw').mouseout(function() {
//     $('#search').removeClass('quickdelate-wrap-focus');
// });

//sidebar hide and show
// $('#bri').mouseover(function() {
//     $('.bdbri').css({
//         opacity: '1',
//         display: 'block'
//     });
// });

// $('.bdbri').hover(function() {
//     $(this).show();
//     //sidebar 显示，禁止滚动
//     var initTop = 0;
//     $(window).bind('scroll', function() {
//         var scrollTop = $(document).scrollTop();
//         if (scrollTop > initTop) {
//             $('body').scrollTop(0);
//         } else {
//             $('body').scrollTop(0);
//         }
//         initTop = scrollTop;
//     })

// }, function() {
//     $(this).hide();
//     $(window).unbind('scroll'); //鼠标滑出，解除滚动事件

// });
//我的关注导航显示与隐藏
// $('.s-code-nav').click(function() {
//     $('.s-mblock-content').toggle();
//     $('.beforech').toggleClass('mine-title-icon-change'); //切换arrow样式
// })

// //划过backtop按钮
// $('#btn').hover(function() {
//     $('.icon-mask').css('display', 'block');
//     $('#btn .icon').css('display', 'none');
// }, function() {
//     $('.icon-mask').css('display', 'none');
//     $('#btn .icon').css('display', 'block');
// });

// var select = $('#s-menu-wrapper span');
// var content = $('.s-content')
//     // console.log(select)
// select.each(function(index, el) { //我的关注后点击事件
//     $(select[index]).click(function() {
//         $(this).css('backgroundColor', '#e8e8e8').siblings('.s-menu-item').css('backgroundColor', '#fff');;
//         $(content).eq(index).css('display', 'block').siblings('.s-content').css('display', 'none');
//         $('#s-menu-mine').css('backgroundColor', '#fff');
//         $('.s-content-special').css('display', 'none');
//     });
// });


// //定制内容title的切换

// $('#s-menu-mine').click(function() { //我的关注
//     $(this).css('backgroundColor', '#e8e8e8');
//     $(select).css('backgroundColor', '#fff');
//     $(content).css('display', 'none');
//     $('.s-content-special').css('display', 'block');
// });

// //换肤
// $('.s-skin').click(function() {
//     $('#bgimage').slideToggle(300);
// });

// var changeBgImg = $('#mimage li img');
// //  console.log(changeBgImg)
// $(changeBgImg).hover(function() { //设置移出隐藏
//     $('#bgimage').show()
// }, function() {
//     $('#bgimage').hide()
// });
// changeBgImg.each(function(index, el) { //获取点击目标
//     $(changeBgImg[index]).click(function() {
//         var bgImg = $(this).attr('src'); //获取路径
//         //console.log(bgImg)
//         $('body').css({
//             'background-image': 'url(' + bgImg + ')',
//             'background-size': '100% 100%'
//         });

//     });
// });
