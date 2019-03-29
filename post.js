


function _l2(e, t, n) {
    "use strict";
    function i() {
        return Math.floor(1e8 * Math.random())
    }
    var r = function(e) {
        e = e ? 1 : 0;
        try {
            return location.search.substr(e)
        } catch (i) {
            try {
                var t = document.URL
                  , n = t.indexOf("?");
                if (n >= 0)
                    return t.substr(n + e)
            } catch (i) {}
        }
        return ""
    }
      , o = {};
    !function() {
        for (var e = r(!0).split("&"), t = 0; t < e.length; t++) {
            var n = /(.*?)=(.*)/.exec(e[t]);
            n && (o[n[1]] = n[2])
        }
    }();
    return {
        href: function() {
            try {
                return location.href
            } catch (e) {
                try {
                    return document.URL
                } catch (e) {}
            }
            return ""
        },
        getQuery: function(e) {
            var t = r();
            return t = t ? t.replace(/&rand=[^&]+/, "") + "&rand=" + i() : "?rand=" + i(),
            e = e ? 1 : 0,
            t.substr(e)
        },
        queryParam: function(e) {
            return o[e]
        },
        queryMap: function() {
            return $.extend({}, o)
        },
        parse2rgb: function(e) {
            if (!e || "string" != typeof e)
                return null;
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, i) {
                return t + t + n + n + i + i
            });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t ? {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16),
                s: "#" + t[1] + t[2] + t[3]
            } : null
        }
    }
}

var l=_l2().queryMap();
window.timing.log("verify");
//i.log("verify");
function _challenge() {

    var r = function (e, t, n) {
        "use strict";

        function i(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }

        function r(e, t, n, r, o, a) {
            return i(function (e, t) {
                return e << t | e >>> 32 - t
            }(i(i(t, e), i(r, a)), o), n)
        }

        function o(e, t, n, i, o, a, s) {
            return r(t & n | ~t & i, e, t, o, a, s)
        }

        function a(e, t, n, i, o, a, s) {
            return r(t & i | n & ~i, e, t, o, a, s)
        }

        function s(e, t, n, i, o, a, s) {
            return r(t ^ n ^ i, e, t, o, a, s)
        }

        function c(e, t, n, i, o, a, s) {
            return r(n ^ (t | ~i), e, t, o, a, s)
        }

        function u(e, t) {
            e[t >> 5] |= 128 << t % 32,
                e[14 + (t + 64 >>> 9 << 4)] = t;
            var n, r, u, l, f, d = 1732584193,
                p = -271733879,
                h = -1732584194,
                m = 271733878;
            for (n = 0; n < e.length; n += 16)
                r = d,
                u = p,
                l = h,
                f = m,
                p = c(p = c(p = c(p = c(p = s(p = s(p = s(p = s(p = a(p = a(p = a(p = a(p = o(p = o(p = o(p = o(p, h = o(h, m = o(m, d = o(d, p, h, m, e[n], 7, -680876936), p, h, e[n + 1], 12, -389564586), d, p, e[n + 2], 17, 606105819), m, d, e[n + 3], 22, -1044525330), h = o(h, m = o(m, d = o(d, p, h, m, e[n + 4], 7, -176418897), p, h, e[n + 5], 12, 1200080426), d, p, e[n + 6], 17, -1473231341), m, d, e[n + 7], 22, -45705983), h = o(h, m = o(m, d = o(d, p, h, m, e[n + 8], 7, 1770035416), p, h, e[n + 9], 12, -1958414417), d, p, e[n + 10], 17, -42063), m, d, e[n + 11], 22, -1990404162), h = o(h, m = o(m, d = o(d, p, h, m, e[n + 12], 7, 1804603682), p, h, e[n + 13], 12, -40341101), d, p, e[n + 14], 17, -1502002290), m, d, e[n + 15], 22, 1236535329), h = a(h, m = a(m, d = a(d, p, h, m, e[n + 1], 5, -165796510), p, h, e[n + 6], 9, -1069501632), d, p, e[n + 11], 14, 643717713), m, d, e[n], 20, -373897302), h = a(h, m = a(m, d = a(d, p, h, m, e[n + 5], 5, -701558691), p, h, e[n + 10], 9, 38016083), d, p, e[n + 15], 14, -660478335), m, d, e[n + 4], 20, -405537848), h = a(h, m = a(m, d = a(d, p, h, m, e[n + 9], 5, 568446438), p, h, e[n + 14], 9, -1019803690), d, p, e[n + 3], 14, -187363961), m, d, e[n + 8], 20, 1163531501), h = a(h, m = a(m, d = a(d, p, h, m, e[n + 13], 5, -1444681467), p, h, e[n + 2], 9, -51403784), d, p, e[n + 7], 14, 1735328473), m, d, e[n + 12], 20, -1926607734), h = s(h, m = s(m, d = s(d, p, h, m, e[n + 5], 4, -378558), p, h, e[n + 8], 11, -2022574463), d, p, e[n + 11], 16, 1839030562), m, d, e[n + 14], 23, -35309556), h = s(h, m = s(m, d = s(d, p, h, m, e[n + 1], 4, -1530992060), p, h, e[n + 4], 11, 1272893353), d, p, e[n + 7], 16, -155497632), m, d, e[n + 10], 23, -1094730640), h = s(h, m = s(m, d = s(d, p, h, m, e[n + 13], 4, 681279174), p, h, e[n], 11, -358537222), d, p, e[n + 3], 16, -722521979), m, d, e[n + 6], 23, 76029189), h = s(h, m = s(m, d = s(d, p, h, m, e[n + 9], 4, -640364487), p, h, e[n + 12], 11, -421815835), d, p, e[n + 15], 16, 530742520), m, d, e[n + 2], 23, -995338651), h = c(h, m = c(m, d = c(d, p, h, m, e[n], 6, -198630844), p, h, e[n + 7], 10, 1126891415), d, p, e[n + 14], 15, -1416354905), m, d, e[n + 5], 21, -57434055), h = c(h, m = c(m, d = c(d, p, h, m, e[n + 12], 6, 1700485571), p, h, e[n + 3], 10, -1894986606), d, p, e[n + 10], 15, -1051523), m, d, e[n + 1], 21, -2054922799), h = c(h, m = c(m, d = c(d, p, h, m, e[n + 8], 6, 1873313359), p, h, e[n + 15], 10, -30611744), d, p, e[n + 6], 15, -1560198380), m, d, e[n + 13], 21, 1309151649), h = c(h, m = c(m, d = c(d, p, h, m, e[n + 4], 6, -145523070), p, h, e[n + 11], 10, -1120210379), d, p, e[n + 2], 15, 718787259), m, d, e[n + 9], 21, -343485551),
                d = i(d, r),
                p = i(p, u),
                h = i(h, l),
                m = i(m, f);
            return [d, p, h, m]
        }

        function l(e) {
            var t, n = "";
            for (t = 0; t < 32 * e.length; t += 8)
                n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }

        function f(e) {
            var t, n = [];
            for (n[(e.length >> 2) - 1] = void 0,
                t = 0; t < n.length; t += 1)
                n[t] = 0;
            for (t = 0; t < 8 * e.length; t += 8)
                n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
        }

        function d(e) {
            var t, n, i = "0123456789abcdef",
                r = "";
            for (n = 0; n < e.length; n += 1)
                t = e.charCodeAt(n),
                r += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
            return r
        }

        function p(e) {
            return unescape(encodeURIComponent(e))
        }

        function h(e) {
            return function (e) {
                return l(u(f(e), 8 * e.length))
            }(p(e))
        }

        function m(e, t) {
            return function (e, t) {
                var n, i, r = f(e),
                    o = [],
                    a = [];
                for (o[15] = a[15] = void 0,
                    r.length > 16 && (r = u(r, 8 * e.length)),
                    n = 0; n < 16; n += 1)
                    o[n] = 909522486 ^ r[n],
                    a[n] = 1549556828 ^ r[n];
                return i = u(o.concat(f(t)), 512 + 8 * t.length),
                    l(u(a.concat(i), 640))
            }(p(e), p(t))
        }
        var f4 = function (e, t, n) {
            return t ? n ? m(t, e) : function (e, t) {
                return d(m(e, t))
            }(t, e) : n ? h(e) : function (e) {
                return d(h(e))
            }(e)
        }
        return f4(e, t, n);
    }

    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } :
        function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
    var o = window.captchaConfig;
    var e = 0,
        t = o.capChallenge;
    if ("object" === (void 0 === t ? "undefined" : i(t)) && "string" == typeof t.randstr && ("string" == typeof t.M || "number" == typeof t.M) && "string" == typeof t.ans) {
        t.ans = t.ans.toLowerCase(),
            t.M = parseInt(t.M);
        for (var n = 0; n < t.M && n < 1e3; n++) {
            var a = t.randstr + n,
                s = r(a);
            if (t.ans === s.toLowerCase()) {
                e = n;
                break
            }
        }
    }
    return e
}

var n = [
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
    [1, 0, 9],
    [-1, 0, 7],
    [-1, 0, 5],
    [-1, 0, 8],
    [-1, 0, 9],
    [-1, 0, 9],
    [-1, 0, 8],
    [-1, 0, 8],
    [-1, 0, 16],
    [1, 0, 209]
]
var f = _challenge();

var y = window.captchaConfig;
var u2 = {
    tdc: window.TDC
};


var po = [];
(function () {
    var u = {
        tdc: window.TDC
    };
    var v = {
        imgSlide: $('#slideBlock'),
        imgBg: $("#slideBg"),
        operation: $("#tcOperation")
    }
    var y = window.captchaConfig;
    var r = v.imgSlide.offset(),
        o = v.imgBg.offset(),
        s = [{
            left: Math.floor((r.left - v.operation.offset().left) / y.rate),
            top: Math.floor(parseInt(y.spt, 10))
        }];
    po = s.concat([]);


    u.tdc.setData({
        coordinate: [Math.ceil(o.left), Math.ceil(o.top), Number(y.rate.toFixed(4))]
    });

})();



console.log(po);

var k = 0;
var t = 1;
var b = 0;
n.push([0, 0, f]);
u2.tdc.setData({
    trycnt: ++k,
    refreshcnt: b,
    slideValue: n,
    dragobj: t
});
l.ans = [
    [po[0].left, po[0].top].join(','), ";"
].join(''); //坐标值
l.vsig = y.vsig;
l.cdata = f;
l.websig = y.websig;
l.subcapclass = y.subcapclass;
l[y.collectdata] = decodeURIComponent(u2.tdc.getData());
"inner" !== y.curenv && (l.asig = y.asig,
    l.buid = y.buid);
l.fpinfo = window.getFPVryData();
l.eks = u2.tdc.getInfo();
l.tlg = 1; //u2.tdc.getTlg();

console.log(l);

$.ajax({
    type: "POST",
    url: "/cap_union_new_verify",
    data: l,
    timeout: 15e3,
    dataType: "json",
    success: function (e) {
        if (e) {

            console.log(e);
            var t = parseInt(e.errorCode, 10);
            switch (t) {
                case 0:
                    m.push(48, i.logEnd("verifyDuration")),
                        h.showSuccess(w.dragDuration, function () {
                            a.verifySuccess(e.ticket, e.randstr)
                        });
                    break;

            }

        }
    },
    error: function (e, t, n) {

    }
})