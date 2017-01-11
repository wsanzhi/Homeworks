$(document).ready(function() {
    $(window).on('load', imgLocation());
});
/*$(document).ready(function() {
    $(window).on('load', function(){
    	imgLocation();             //老师，此处这样调用函数为什么不起作用？
    });
});*/
var imgLocation = function() {
    var box = $('.box'); //获取jq对象
    var boxWidth = box.eq(0).width(); //图片宽度
    var num = Math.floor($(window).width() / boxWidth); //向下取整获取容下个数
    var boxArr = []; //接收盒子高度的集合
    box.each(function(index, value) { //i为位置，v元素对象
        var boxHeight = box.eq(index).height();
        if (index < num) { //如果index<num
            boxArr[index] = boxHeight;
            //console.log(boxHeight);
        } else {
            var minBoxHeight = Math.min.apply(null, boxArr);
            var minBoxIndex = $.inArray(minBoxHeight, boxArr);

            $(value).css({ //box[index]
                'position': 'absolute',
                'top': minBoxHeight,
                'left': box.eq(minBoxIndex).position().left
            });
            boxArr[minBoxIndex] += box.eq(index).height(); //重新计算高度
        }
    });

};
