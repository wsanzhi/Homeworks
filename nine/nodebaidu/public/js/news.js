$(document).ready(function() {
    //设置列表排列样式
    var deviceWidth = $('body').width(); //获取设备宽度
    var lis = $('nav li');
    lis.each(function(index, el) { //遍历li标签
        var len = $(this).children('a').html().split('').length; //拆分字符转转换数组，留以判断字符长度

        if (len > 2) {
            $(this).width(deviceWidth / 3);
        } else {
            $(this).width(deviceWidth / 6);
        }
    });

    refreshNews('精选');
    $('nav a').click(function(e) {
        e.preventDefault();
        var type=$(this).text();
        refreshNews(type);

    });
    //动态添加
    function refreshNews(type) {
        var $lists = $('article ul');
        $lists.empty(); //初始化
        $.ajax({
            url: '/news',
            type: 'get',
            datatype: "json",
            data: { newstype: type },           
            success: function(data) {
                console.log(data);
                data.forEach(function(item,index,array) {
                    var $list = $('<li></li>').addClass('news-list').prependTo($lists)
                    var $newImage = $('<div></div>').addClass('news-image').appendTo($list);
                    var $img = $('<img>').attr('src', item.newsimg).appendTo($newImage);
                    var $newsContent = $('<div></div>').addClass('news-content').appendTo($list);
                    var h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
                    var $p = $('<p></p>').appendTo($newsContent);
                    var $newsTime = $('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
                    var $newsSrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);
                })           
            }
        });
    };
});
