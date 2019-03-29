var _patch = function () {


    if (!window.TDC.setData3) {



        window.TDC.setData3 = window.TDC.setData;


        var _n = [
            [66, 207, 104],
            [4, 0, 7],
            [4, 0, 7],
            [6, 0, 9],
            [10, 0, 7],
            [10, 0, 9],
            [12, 0, 7],
            [12, 0, 8],
            [11, 0, 8],
            [11, 0, 9],
            [11, 0, 12],
            [4, 0, 4],
            [11, 0, 9],
            [8, 0, 7],
            [8, 0, 12],
            [7, 0, 5],
            [9, 0, 10],
            [6, 0, 6],
            [2, 0, 10],
            [5, 0, 6],
            [4, 0, 12],
            [2, 0, 4],
            [2, 0, 12],
            [1, 0, 3],
            [1, 0, 5],
            [1, 0, 11],
            [1, 0, 15],
            [1, 0, 8],
            [1, 0, 9],
            [3, 0, 9],
            [3, 0, 7],
            [4, 0, 9],
            [2, 0, 6],
            [3, 0, 9],
            [3, -1, 7],
            [2, 0, 9],
            [1, 0, 7],
            [2, 0, 8],
            [1, 0, 7],
            [1, 0, 9]
        ]

        var _patchX, _patchY = 0;
        window.TDC.setData = function (n, t) {



            
            if (n.slideValue && n.slideValue.length > 0) {
                console.log(n.slideValue );
                var lastItem = n.slideValue[n.slideValue.length - 1];
                var $slideBlock=$('#slideBlock');

                var offsetLeft=$slideBlock.offset().left;
                var offsetTop=$slideBlock.offset().top;
                _n.length=0;

                var diff=Math.floor(Math.random()*offsetLeft);
                for(var i=offsetLeft-diff;i<=offsetLeft;i++){

                    var value=Math.floor(Math.random()*offsetLeft);
                   // _n.push([value,Math.floor(offsetTop) ,i]); 
                }
               
                n.slideValue = _n.concat(lastItem);
                console.log(n.slideValue );
            }

            window.TDC.setData3(n, t);

        }
    }

}


function _patchCode() {



    if ($('#slideBg')) {



        $.post('http://127.0.0.1:8404/getCode', {
            url: $('#slideBg').attr('src').replace(/&/gi, 'guren'),
            width: $('#slideBg').width(),
            height: $('#slideBg').height()
        }, function (res) {


           
            res = JSON.parse(res);
            res.left=Math.floor(res.left);
            console.log(res);
            setTimeout(function () {
                var cssOptions = {
                    left: (res.left) + 'px'
                }
                setTimeout(function () {

                    $('#slideBlock').animate({
                        cssOptions
                    }, 300, function () {

                      $('#slideBlock').css(cssOptions);

                        setTimeout(function () {
                            $('#tcaptcha_drag_thumb').trigger('mousedown');
                            setTimeout(function () {
                                $(document).trigger('mouseleave');


                                setTimeout(function () {

                                    _patchCode();
                                },3000)
                            }, 3000);
                        }, 500);
                    });


                }, 200);

            }, 200)

        })
    } else {

        setTimeout(function () {

            _patchCode();
        }, 2000)
    }

}

$(function () {

    _patch();
    _patchCode();
})