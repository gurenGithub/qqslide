$.post('http://127.0.0.1:8404/getCode', {
    url: $('#slideBg').attr('src').replace(/&/gi, 'guren'),
    width: $('#slideBg').width(),
    height: $('#slideBg').height()
}, function (res) {



    res = JSON.parse(res);
    console.log(res);



    // return;
    setTimeout(function () {



        var cssOptions = {
            left: (res.left - 1) + 'px'
        }
        setTimeout(function () {

            $('#slideBlock').animate({
                cssOptions
            }, 300, function () {

                $('#slideBlock').css(cssOptions);
                $('#tcaptcha_drag_thumb').trigger('mousedown');
                setTimeout(function () {
                    $(document).trigger('mouseleave');
                }, 300);

            });


        }, 200);

    }, 200)

})
