$(document).ready(function() {
    var $newsTable = $('#newstable tbody');
    refreshNews();
    //阻止默认点击事件
    console.log($('#newstitle').val());
    $('#btnsubmit').click(function(e) {
        e.preventDefault();

        //判断
        if ($('#newstitle').val() === "" || $('#newstype').val() === "" || $('#newsimg').val() === "" || $('#newstime').val() === "" || $('#newssrc').val() === "") {
            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }
            if ($('#newstype').val() === "") {
                $('#newstype').parent().addClass('has-error');
            } else {
                $('#newstype').parent().removeClass('has-error');
            }
            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }
            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }
            if ($('#newssrc').val() === "") {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }

        } else {
            var jsonNews = {
                newstitle: $('#newstitle').val(),
                newstype: $('#newstype').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newssrc: $('#newssrc').val()
            }
            $.ajax({
                url: './server/insert.php',
                data: jsonNews,
                datatype: 'json',
                type: 'post',
                success: function(data) {
                    console.log(data);
                    refreshNews();
                }
            });
        };
    });
    //删除新闻
    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function() { //事件委托
        //console.log('click');
        $('#deleteModal').modal('show'); //?
        deleteId = $(this).parents('tr').children('td').eq(0).html(); //获取点击的id（数字），以确认删除项。

    });
    $('#deleteModal #confirmDelete').click(function(e) {
        if (deleteId) { //?
            $.ajax({
                url: './server/delete.php',
                datatype: 'json',
                type: 'post',
                data: { newsid: deleteId },
                success: function(data) {
                    console.log('删除成功');
                    $('#deleteModal').modal('hide');
                    refreshNews();
                }
            })
        }
    })


    //修改新闻
    var updataId = null;
    $newsTable.on('click', '.btn-default', function() { //事件委托

        $('#updataModal').modal('show'); //?
        updataId = $(this).parents('tr').children('td').eq(0).html(); //获取点击的id（数字），以确认修改项。
        console.log(updataId);

        $.ajax({
            url: './server/curnews.php',
            type: 'get',
            datatype: 'json',
            data: { newsid: updataId },
            success: function(data) {
                console.log(data);
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);
                var utime = data[0].newstime.split(' ')[0]; //拆分选取
                $('#unewstime').val(utime);
            }
        });
    });
    //修改确认按钮
    $('#updataModal #confirmUpdate').click(function(e) {
        var jsonuNews = {
            newstitle: $('#unewstitle').val(),
            newstype: $('#unewstype').val(),
            newsimg: $('#unewsimg').val(),
            newstime: $('#unewstime').val(),
            newssrc: $('#unewssrc').val(),
            id: updataId                        
        }
        $.ajax({
            url: './server/update.php',
            datatype: 'json',
            data: jsonuNews,
            type: 'post',
            success: function(data) {
            	console.log(1);
                $('#updataModal').modal('hide');
                refreshNews();
            }
        });
    });




    //重载
    function refreshNews() {
        $newsTable.empty();
        $.ajax({
            url: './server/getnews.php',
            type: 'get',
            data:{ntype:null},
            datatype: 'json',
            success: function(data) {
                console.log(data);
                data.forEach(function(item, index, array) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdtime = $('<td>').html(item.newstime);
                    var $tdctrl = $('<td>');
                    var $trow = $('<tr>');
                    var $btnup = $('<button>').addClass('btn btn-default btn-xs').html('修改');
                    var $btnde = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnup, $btnde);
                    $trow.append($tdid, $tdtype, $tdtitle, $tdtime, $tdctrl);
                    $newsTable.append($trow);
                });
            }
        });
    };
});
