var Jimp = require('jimp');

var imageUrl = "https://hy.captcha.qq.com/hycdn_1_937485497944645120_0?aid=1600000592&captype=0&curenv=inner&protocol=https&clientype=2&disturblevel=1&apptype=&noheader=&color=&showtype=embed&fb=1&theme=&lang=2052&ua=TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTJfNikgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzcyLjAuMzYyNi4xMjEgU2FmYXJpLzUzNy4zNg==&grayscale=1&subsid=3&sess=DMFlIlaR2_ybG7i5l3CyvrGe0mKXnq_vwqqJH5ooLj1uaICPnKNsQyQBXUdbQvMVtERQWqxJ2PY6qUwPgmd1yXs1tShSLdDNxeBJFOGGl713_c3IKjgkZB1BXHzh-jUe5EaXA25qW4CQMMI_Kcz5WP8jt_qi0t-XSdT3k_F-B47iucDciUQ_cG_8FJ9zf-heyApoFFyI8Ebi9rf0Ik044g**&fwidth=0&sid=6672942542912066722&forcestyle=undefined&wxLang=&tcScale=0&noBorder=noborder&uid=&cap_cd=&rnd=543292&TCapIframeLoadTime=27&prehandleLoadTime=35&createIframeStart=1553665506367&rand=83275960&websig=d0c29d96ecf9c0de29268fa468d63e77bf25df6680a746333e95fdcc91404ab8c7285efe126f3688878942868531b207b5525875fe354c2fa52d28f452f36ed7&vsig=c01ycnmUnL1G17UVL51MBO7jNeYIpOOkpUozQqm1yXS7U1aQ_CbCDmQOOXP9gs5Qvv7QyqDnyZiu-ay3afSvcBdXvhjydz8jGLQOMrfnx6F4YPA4Ysj4Wc3oRULLqyqM7QDhlP1S1KgS8uY1HGWUzQHbscqHWFacaKlTGBi0L-xFaE*&img_index=1";


const getCode=function(imageUrl,size,callback){



Jimp.read(imageUrl, function (err, image) {


    
    image.greyscale((err, image) => {

        
        var data = image.bitmap.data; // a Buffer of the raw bitmap data
        var width = image.bitmap.width; // the width of the image
        var height = image.bitmap.height; // the height of the image


       
        var startX = 0;
        var endY = 0;
        // width=startX+1;
        // height=endY+1;

        var time = new Date().getTime();

        for (var i = startX; i < width; i++) {

            for (var j = endY; j < height; j++) {


                var topLeft = [
                    [0, 0],
                    [7, 0],
                    [0, 7]
                ];
                var topRight = [
                    [0, 82],
                    [82, 0],
                    [88, 7]
                ];
                var bottomLeft = [
                    [0, 80],
                    [0, 85],
                    [88, 7]
                ];
                var bottomRight = [
                    [82, 88],
                    [88, 88],
                    [85, 88]
                ];

                var center = [
                    [50, 50],
                    [60, 60],
                    [70, 70],
                    [10, 10],
                    [20, 20],
                    [30, 30],
                    [40, 40],
                    [80, 80]
                ]
                var list = topLeft.concat(topRight).concat(bottomLeft).concat(bottomRight);


                var diff = 0;
                for (var k = 0; k < list.length; k++) {

                    var item = list[k];

                    var pixel = image.getPixelColor(i + item[0], j + item[1]); // returns the colour of that pixel e.g. 0xFFFFFFFF
                    //Jimp.intToRGBA(pixel); 
                    //console.log(pixel);
                    var rgba = Jimp.intToRGBA(pixel);
                    //console.log(rgba,item);
                    var colorRGB = 200;

                    if (rgba.r > colorRGB && rgba.b > colorRGB && rgba.g > colorRGB) {


                        diff++;
                    }

                }

                for (var k = 0; k < center.length; k++) {

                    var item = center[k];

                    var pixel = image.getPixelColor(i + item[0], j + item[1]); // returns the colour of that pixel e.g. 0xFFFFFFFF
                    //Jimp.intToRGBA(pixel); 
                    //console.log(pixel);
                    var rgba = Jimp.intToRGBA(pixel);
                    //console.log(rgba,item);
                    var colorRGB = 120;

                    if (rgba.r < colorRGB && rgba.b < colorRGB && rgba.g < colorRGB) {


                        diff++;
                    }
                }


            
                if (diff >= list.length + center.length) {

                    console.log((i-23)+","+(j-23)+";");

                    console.log(i/280);

console.log(size.width);


                    var options={left:(i-23)/width*parseInt(size.width),top:j-23};

                    callback(options);
                    //break;


                    image.write('temp/t_' + time + '.jpeg', function (res) {


                    });
                    image.crop(i, j, 89, 90).write('temp/t_' + time + "_" + i + "_" + j + '.jpeg', function (res) {


                    });

                    return;
                }
            }
        }

        callback({left:0,top:0});
    });
});

}


module.exports =getCode;