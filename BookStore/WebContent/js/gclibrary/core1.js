(function() {
    (function() {
        var g = void 0,
            aa = !0,
            h = null,
            i = !1,
            j = google_exportSymbol,
            k = document,
            ba = isNaN,
            l = google_exportProperty,
            m = Math,
            q = Array,
            r = Number,
            t = Error,
            u = parseInt,
            v = String;

        function y(a, b) {
            return a.format = b
        }

        function ca(a, b) {
            return a.type = b
        }
        var z = "push",
            da = "test",
            A = "round",
            ea = "slice",
            C = "replace",
            D = "floor",
            E = "charAt",
            F = "indexOf",
            G = "format",
            fa = "fromCharCode",
            ga = "getColumnType",
            ha = "getHours",
            ia = "getValue",
            ja = "getTime",
            ka = "getElementsByTagName",
            la = "substr",
            ma = "toString",
            na = "getNumberOfRows",
            H = "length",
            oa = "propertyIsEnumerable",
            I = "prototype",
            pa = "split",
            qa = "setFormattedValue",
            J = "call",
            ra = "setProperty",
            ta = "substring",
            ua = "apply",
            K = "join",
            va = "toLowerCase",
            wa = "getTimezoneOffset",
            L = "",
            xa = " ",
            ya = '" />',
            za = "#",
            Aa = "#$1$1$2$2$3$3",
            Ba = "$1",
            Ca = "%",
            Da =
            "'",
            Ea = "''",
            Fa = "(",
            Ga = "(\\d*)(\\D*)",
            Ha = ")",
            Ia = "+",
            Ja = ",",
            Ka = "-",
            M = ".",
            La = '.png" height="12" width="',
            Ma = "/static/modules/gviz/",
            Na = "/util/bar_",
            Oa = "/util/format.css",
            N = "0",
            Pa = "0000000000000000",
            Qa = "1",
            Ra = "1.0",
            Sa = ":",
            Ta = ";",
            Ua = "</span>\u00a0",
            Va = '<img style="padding: 0" src="',
            Wa = '<span style="padding: 0; float: left; white-space: nowrap;">',
            Xa = "E",
            Ya = "Etc/GMT",
            Za = "G",
            $a = "GMT",
            ab = "H",
            bb = "K",
            cb = "L",
            db = "LINK",
            fb = "M",
            gb = "Q",
            hb = "S",
            ib = "Too many percent/permill",
            jb = "UTC",
            kb = "Z",
            lb = "[object Array]",
            mb =
            "[object Function]",
            nb = "[object Window]",
            ob = "\\",
            pb = "_bar_format_old_value",
            qb = "a",
            rb = "addGradientRange",
            sb = "array",
            tb = "b",
            ub = "background-color:",
            vb = "body",
            wb = "boolean",
            xb = "c",
            yb = "call",
            zb = "className",
            Ab = "color:",
            Bb = "d",
            Cb = "date",
            Db = "datetime",
            Eb = "decimalSymbol",
            Fb = "false",
            O = "format",
            Gb = "formatType",
            Hb = "fractionDigits",
            Ib = "full",
            Jb = "function",
            Kb = "g",
            Lb = "google-visualization-formatters-arrow-dr",
            Mb = "google-visualization-formatters-arrow-empty",
            Nb = "google-visualization-formatters-arrow-ug",
            Ob = "google.loader.GoogleApisBase",
            Pb = "google.visualization.Version",
            Qb = "groupingSymbol",
            Rb = "h",
            Sb = "head",
            Tb = "hex",
            Ub = "html",
            Vb = "http://ajax.googleapis.com/ajax",
            Wb = "k",
            Xb = "link",
            Yb = "long",
            Zb = "m",
            $b = "medium",
            ac = "named",
            bc = "native code",
            cc = "negativeColor",
            dc = "negativeParens",
            ec = "none",
            fc = "null",
            P = "number",
            gc = "object",
            hc = "pattern",
            ic = "prefix",
            jc = "r",
            kc = "rgb",
            lc = "s",
            nc = "scaleFactor",
            oc = "short",
            pc = "splice",
            qc = "string",
            rc = "style",
            sc = "stylesheet",
            tc = "suffix",
            uc = "text/css",
            vc = "time",
            wc = "timeZone",
            xc = "timeofday",
            yc = "transparent",
            zc = "true",
            Ac = "v",
            Bc = "valueType",
            Cc = "w",
            Dc = "y",
            Ec = "z",
            Fc = "\u00a0",
            Gc = "\u00a4",
            Hc = "\u2030",
            R, S = this;

        function Ic(a, b) {
            for (var c = a[pa](M), d = b || S, e; e = c.shift();)
                if (d[e] != h) d = d[e];
                else return h;
            return d
        }

        function Jc(a) {
            var b = typeof a;
            if (b == gc)
                if (a) {
                    if (a instanceof q) return sb;
                    if (a instanceof Object) return b;
                    var c = Object[I][ma][J](a);
                    if (c == nb) return gc;
                    if (c == lb || typeof a[H] == P && "undefined" != typeof a.splice && "undefined" != typeof a[oa] && !a[oa](pc)) return sb;
                    if (c == mb || "undefined" != typeof a[J] && "undefined" != typeof a[oa] && !a[oa](yb)) return Jb
                } else return fc;
            else if (b == Jb && "undefined" == typeof a[J]) return gc;
            return b
        }

        function Kc(a) {
            var b = typeof a;
            return (b == gc && a != h || b == Jb) && typeof a.getFullYear == Jb
        }
        m[D](2147483648 * m.random())[ma](36);

        function Lc(a, b, c) {
            return a[J][ua](a.bind, arguments)
        }

        function Mc(a, b, c) {
            if (!a) throw t();
            if (2 < arguments[H]) {
                var d = q[I][ea][J](arguments, 2);
                return function() {
                    var c = q[I][ea][J](arguments);
                    q[I].unshift[ua](c, d);
                    return a[ua](b, c)
                }
            }
            return function() {
                return a[ua](b, arguments)
            }
        }

        function Nc(a, b, c) {
            Nc = Function[I].bind && -1 != Function[I].bind[ma]()[F](bc) ? Lc : Mc;
            return Nc[ua](h, arguments)
        }

        function Oc(a, b) {
            var c = q[I][ea][J](arguments, 1);
            return function() {
                var b = q[I][ea][J](arguments);
                b.unshift[ua](b, c);
                return a[ua](this, b)
            }
        };

        function Pc(a) {
            this.L = a || {};
            a: {
                for (var b = Qc() + Oa, a = k[ka](db), c = 0; c < a[H]; c++)
                    if (a[c] && a[c].href && a[c].href == b) break a;a = k.createElement(Xb);a.href = b;a.rel = sc;ca(a, uc);
                if (0 == k[ka](Sb)[H]) {
                    var b = k[ka](Ub)[0],
                        c = k[ka](vb)[0],
                        d = k.createElement(Sb);
                    b.insertBefore(d, c)
                }
                k[ka](Sb)[0].appendChild(a)
            }
        }
        y(Pc[I], function(a, b) {
            if (a[ga](b) == P)
                for (var c = this.L.base || 0, d = 0; d < a[na](); d++) {
                    var e = a[ia](d, b),
                        f = h,
                        f = e < c ? Lb : e > c ? Nb : Mb;
                    a[ra](d, b, zb, f)
                }
        });

        function T(a, b, c) {
            a = c !== g ? a.toFixed(c) : v(a);
            c = a[F](M); - 1 == c && (c = a[H]);
            b = m.max(0, b - c);
            return q(b + 1)[K](N) + a
        }

        function Rc(a, b) {
            for (var c = 0, d = v(a)[C](/^[\s\xa0]+|[\s\xa0]+$/g, L)[pa](M), e = v(b)[C](/^[\s\xa0]+|[\s\xa0]+$/g, L)[pa](M), f = m.max(d[H], e[H]), n = 0; 0 == c && n < f; n++) {
                var p = d[n] || L,
                    B = e[n] || L,
                    Q = RegExp(Ga, Kb),
                    Z = RegExp(Ga, Kb);
                do {
                    var w = Q.exec(p) || [L, L, L],
                        s = Z.exec(B) || [L, L, L];
                    if (0 == w[0][H] && 0 == s[0][H]) break;
                    c = ((0 == w[1][H] ? 0 : u(w[1], 10)) < (0 == s[1][H] ? 0 : u(s[1], 10)) ? -1 : (0 == w[1][H] ? 0 : u(w[1], 10)) > (0 == s[1][H] ? 0 : u(s[1], 10)) ? 1 : 0) || ((0 == w[2][H]) < (0 == s[2][H]) ? -1 : (0 == w[2][H]) > (0 == s[2][H]) ? 1 : 0) || (w[2] < s[2] ? -1 : w[2] > s[2] ? 1 : 0)
                } while (0 ==
                    c)
            }
            return c
        };
        var Sc = q[I],
            Tc = Sc[F] ? function(a, b, c) {
                return Sc[F][J](a, b, c)
            } : function(a, b, c) {
                c = c == h ? 0 : 0 > c ? m.max(0, a[H] + c) : c;
                if (typeof a == qc) return typeof b != qc || 1 != b[H] ? -1 : a[F](b, c);
                for (; c < a[H]; c++)
                    if (c in a && a[c] === b) return c;
                return -1
            };
        var Uc = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        };

        function Vc(a) {
            var b = {},
                a = v(a),
                c = a[E](0) == za ? a : za + a;
            if (Wc[da](c)) return b.k = Xc(c), ca(b, Tb), b;
            a: {
                var d = a.match(Yc);
                if (d) {
                    var c = r(d[1]),
                        e = r(d[2]),
                        d = r(d[3]);
                    if (0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
                        c = [c, e, d];
                        break a
                    }
                }
                c = []
            }
            if (c[H]) return b.k = Zc(c[0], c[1], c[2]), ca(b, kc), b;
            if (Uc && (c = Uc[a[va]()])) return b.k = c, ca(b, ac), b;
            throw t(a + " is not a valid color string");
        }
        var $c = /#(.)(.)(.)/;

        function Xc(a) {
            if (!Wc[da](a)) throw t(Da + a + "' is not a valid hex color");
            4 == a[H] && (a = a[C]($c, Aa));
            return a[va]()
        }

        function ad(a) {
            a = Xc(a);
            return [u(a[la](1, 2), 16), u(a[la](3, 2), 16), u(a[la](5, 2), 16)]
        }

        function Zc(a, b, c) {
            a = r(a);
            b = r(b);
            c = r(c);
            if (ba(a) || 0 > a || 255 < a || ba(b) || 0 > b || 255 < b || ba(c) || 0 > c || 255 < c) throw t('"(' + a + Ja + b + Ja + c + '") is not a valid RGB color');
            a = bd(a[ma](16));
            b = bd(b[ma](16));
            c = bd(c[ma](16));
            return za + a + b + c
        }
        var Wc = /^#(?:[0-9a-f]{3}){1,2}$/i,
            Yc = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

        function bd(a) {
            return 1 == a[H] ? N + a : a
        };
        var cd, dd, ed, fd;

        function gd() {
            return S.navigator ? S.navigator.userAgent : h
        }
        fd = ed = dd = cd = i;
        var hd;
        if (hd = gd()) {
            var id = S.navigator;
            cd = 0 == hd[F]("Opera");
            dd = !cd && -1 != hd[F]("MSIE");
            ed = !cd && -1 != hd[F]("WebKit");
            fd = !cd && !ed && "Gecko" == id.product
        }
        var jd = dd,
            kd = fd,
            ld = ed,
            md;
        a: {
            var nd = L,
                od;
            if (cd && S.opera) var pd = S.opera.version,
                nd = typeof pd == Jb ? pd() : pd;
            else if (kd ? od = /rv\:([^\);]+)(\)|;)/ : jd ? od = /MSIE\s+([^\);]+)(\)|;)/ : ld && (od = /WebKit\/(\S+)/), od) var qd = od.exec(gd()),
                nd = qd ? qd[1] : L;
            if (jd) {
                var rd, sd = S.document;
                rd = sd ? sd.documentMode : g;
                if (rd > parseFloat(nd)) {
                    md = v(rd);
                    break a
                }
            }
            md = nd
        }
        var td = md,
            ud = {},
            vd = {};

        function wd(a) {
            return vd[a] || (vd[a] = jd && !!k.documentMode && k.documentMode >= a)
        };
        !jd || wd(9);
        !kd && !jd || jd && wd(9) || kd && (ud["1.9.1"] || (ud["1.9.1"] = 0 <= Rc(td, "1.9.1")));
        jd && (ud["9"] || (ud["9"] = 0 <= Rc(td, "9")));

        function xd(a) {
            return a == ec || a == L || a == yc ? ec : Vc(a).k
        };

        function yd(a) {
            a = a || {};
            a.fill != h && this.Pa(a.fill);
            a.Q != h && this.Qa(a.Q);
            a.stroke != h && this.Sa(a.stroke);
            a.R != h && this.Ta(a.R);
            this.f = h;
            if (a.f) {
                var b = a.f,
                    c = {},
                    d;
                for (d in b) c[d] = b[d];
                this.f = c;
                this.f.Na = xd(this.f.Na);
                this.f.Oa = xd(this.f.Oa)
            }
            this.c = h;
            a.pattern && this.Ra(a.pattern)
        }
        R = yd[I];
        R.Pa = function(a) {
            xd(a)
        };
        R.Qa = function(a) {
            m.min(m.max(a, 0), 1)
        };
        R.Sa = function(a) {
            xd(a)
        };
        R.Ta = function(a) {
            m.min(m.max(a, 0), 1)
        };
        R.Ra = function(a) {
            this.c = a
        };
        new yd({
            Q: 0,
            fill: "white",
            R: 0,
            stroke: "white"
        });
        var U = {
            wb: ["BC", "AD"],
            vb: ["Before Christ", "Anno Domini"],
            $a: ["J", "F", fb, "A", fb, "J", "J", "A", hb, "O", "N", "D"],
            cb: ["J", "F", fb, "A", fb, "J", "J", "A", hb, "O", "N", "D"],
            Za: "January February March April May June July August September October November December".split(" "),
            bb: "January February March April May June July August September October November December".split(" "),
            ab: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            fb: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            Ab: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            hb: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            zb: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            gb: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            Ob: [hb, fb, "T", "W", "T", "F", hb],
            eb: [hb, fb, "T", "W", "T", "F", hb],
            yb: ["Q1", "Q2", "Q3", "Q4"],
            xb: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
            Db: ["AM", "PM"],
            Y: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
            Z: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
            Jb: 6,
            Qb: [5, 6],
            Kb: 5
        };

        function zd(a) {
            this.fa = a
        }

        function Ad(a, b, c) {
            a: {
                for (var b = b[pa](M), a = a || S, d = 0; d < b[H]; d++) {
                    var e = b[d];
                    if (a[e] != h) a = a[e];
                    else {
                        b = h;
                        break a
                    }
                }
                b = a
            }
            return b != h && Jc(c) == Jb ? c(b) : b
        }
        R = zd[I];
        R.e = function(a, b, c) {
            for (var d = h, e = 0; e < this.fa[H]; e++) {
                a: {
                    var d = this.fa[e],
                        f = a,
                        n = c;
                    if (typeof f == qc) d = Ad(d, f, n);
                    else {
                        for (var p = 0; p < f[H]; ++p) {
                            var B = Ad(d, f[p], n);
                            if (B != h) {
                                d = B;
                                break a
                            }
                        }
                        d = h
                    }
                }
                if (d != h) return d
            }
            d = b;
            return d !== g ? d : h
        };

        function Bd(a) {
            if (a == h) return h;
            if (typeof a == wb) return a;
            a = v(a);
            return a == Qa || a[va]() == zc ? aa : a == N || a[va]() == Fb ? i : h
        }
        R.la = function(a, b) {
            var c = this.Fb(a);
            if (c != h) return c;
            b !== g || (b = i);
            return b
        };
        R.Fb = function(a) {
            return this.e(a, h, Bd)
        };

        function Cd(a) {
            if (a == h) return h;
            if (typeof a == P) return a;
            var a = v(a),
                b = r(a),
                a = 0 == b && /^[\s\xa0]*$/ [da](a) ? NaN : b;
            return ba(a) ? h : a
        }
        R.na = function(a, b) {
            var c = this.U(a);
            if (c != h) return c;
            b !== g || (b = 0);
            return b
        };
        R.U = function(a) {
            return this.e(a, h, Cd)
        };

        function Dd(a) {
            a = Cd(a);
            return a != h && 0 <= a ? a : h
        }
        R.ma = function(a, b) {
            var c = this.Gb(a);
            if (c != h) return c;
            b !== g || (b = 0);
            return b
        };
        R.Gb = function(a) {
            return this.e(a, h, Dd)
        };

        function Ed(a) {
            return a == h ? h : v(a)
        }
        R.r = function(a, b) {
            b !== g || (b = L);
            return this.e(a, b, Ed)
        };
        R.pa = function(a) {
            return this.e(a, h, Ed)
        };

        function Fd(a, b) {
            var c = Ed(a);
            return !c ? h : 0 <= Tc(b || [], c) ? c : xd(c)
        }
        R.oa = function(a) {
            return this.e(a, h, Fd)
        };

        function Gd(a, b) {
            var c = Ed(b),
                d;
            a: {
                for (d in a)
                    if (a[d] == c) {
                        d = aa;
                        break a
                    }
                d = i
            }
            return d ? c : h
        }
        R.T = function(a, b) {
            return this.e(a, h, Nc(Gd, h, b))
        };

        function Qc() {
            var a = Ic(Ob);
            a != h || (a = Vb);
            var b = Ic(Pb);
            b != h || (b = Ra);
            return a + Ma + b
        };

        function Hd(a) {
            this.L = a || {};
            Id || (Id = Qc() + Na)
        }
        var Id = h,
            Jd = {
                red: jc,
                blue: tb,
                green: Kb
            };

        function V(a, b, c) {
            0 < b && c[z](Va, Id, a, La, b, ya)
        }
        y(Hd[I], function(a, b) {
            if (a[ga](b) == P) {
                var c = this.L,
                    d = c.min,
                    e = c.max,
                    f = h;
                if (d == h || e == h) f = a.getColumnRange(b), e == h && (e = f.max), d == h && (d = m.min(0, f.min));
                d >= e && (f = f || a.getColumnRange(b), e = f.max, d = f.min);
                d == e && (0 == d ? e = 1 : 0 < d ? d = 0 : e = 0);
                var f = e - d,
                    n = c.base || 0,
                    n = m.max(d, m.min(e, n)),
                    p = c.width || 100,
                    B = c.showValue;
                B == h && (B = aa);
                for (var Q = m[A]((n - d) / f * p), Z = p - Q, w = 0; w < a[na](); w++) {
                    var s = a[ia](w, b),
                        x = [],
                        s = m.max(d, m.min(e, s)),
                        sa = m.ceil((s - d) / f * p);
                    x[z](Wa);
                    V(lc, 1, x);
                    var mc = Kd(c.colorPositive, tb),
                        $d = Kd(c.colorNegative, jc),
                        eb = c.drawZeroLine ? 1 : 0;
                    0 < Q ? s < n ? (V(Cc, sa, x), V($d, Q - sa, x), 0 < eb && V(Ec, eb, x), V(Cc, Z, x)) : (V(Cc, Q, x), 0 < eb && V(Ec, eb, x), V(mc, sa - Q, x), V(Cc, p - sa, x)) : (V(mc, sa, x), V(Cc, p - sa, x));
                    V(lc, 1, x);
                    s = a.getProperty(w, b, pb);
                    s == h && (s = a.getFormattedValue(w, b), a[ra](w, b, pb, s));
                    B && (x[z](Fc), x[z](s));
                    x[z](Ua);
                    a[qa](w, b, x[K](L))
                }
            }
        });

        function Kd(a, b) {
            a = (a || L)[va]();
            return Jd[a] || b
        };

        function Ld(a, b, c, d) {
            Kc(a) && (a = a[ja]());
            Kc(b) && (b = b[ja]());
            Jc(a) == sb && (a = Md(a));
            Jc(b) == sb && (b = Md(b));
            this.X = a;
            this.tb = b;
            this.pb = c;
            this.ub = d
        }
        Ld[I].contains = function(a) {
            var b = this.X,
                c = this.tb;
            if (a == h) return b == h && c == h;
            Kc(a) ? a = a[ja]() : Jc(a) == sb && (a = Md(a));
            return (b == h || a >= b) && (c == h || a < c)
        };
        Ld[I].ca = function() {
            return this.ub
        };

        function Nd(a, b, c, d, e) {
            Ld[J](this, a, b, c, L);
            this.I = b - a;
            0 >= this.I && (this.I = 1);
            this.ib = ad(Vc(d).k);
            this.jb = ad(Vc(e).k)
        }

        function Od() {}
        Od.prototype = Ld[I];
        Nd.Rb = Ld[I];
        Nd.prototype = new Od;
        Nd[I].ca = function(a) {
            var b;
            b = this.ib;
            var c = this.jb,
                a = 1 - (a - this.X) / this.I,
                a = m.min(m.max(a, 0), 1);
            b = [m[A](a * b[0] + (1 - a) * c[0]), m[A](a * b[1] + (1 - a) * c[1]), m[A](a * b[2] + (1 - a) * c[2])];
            return Zc(b[0], b[1], b[2])
        };

        function W() {
            this.w = []
        }
        W[I].addRange = function(a, b, c, d) {
            this.w[z](new Ld(a, b, c, d))
        };
        W[I].addGradientRange = function(a, b, c, d, e) {
            this.w[z](new Nd(a, b, c, d, e))
        };
        y(W[I], function(a, b) {
            var c = a[ga](b);
            if (c == P || c == qc || c == Cb || c == Db || c == xc)
                for (c = 0; c < a[na](); c++) {
                    for (var d = a[ia](c, b), e = L, f = 0; f < this.w[H]; f++) {
                        var n = this.w[f];
                        if (n.contains(d)) {
                            f = n.pb;
                            d = n.ca(d);
                            f && (e += Ab + f + Ta);
                            d && (e += ub + d + Ta);
                            break
                        }
                    }
                    a[ra](c, b, rc, e)
                }
        });

        function Md(a) {
            return 36E5 * a[0] + 6E4 * a[1] + 1E3 * a[2] + (4 == a[H] ? a[3] : 0)
        };

        function Pd() {}

        function Qd(a) {
            if (typeof a == P) {
                var b = new Pd;
                b.$ = a;
                var c;
                c = a;
                if (0 == c) c = Ya;
                else {
                    var d = [Ya, 0 > c ? Ka : Ia];
                    c = m.abs(c);
                    d[z](m[D](c / 60) % 100);
                    c %= 60;
                    0 != c && d[z](Sa, T(c, 2));
                    c = d[K](L)
                }
                b.ba = c;
                0 == a ? a = jb : (c = [jb, 0 > a ? Ia : Ka], a = m.abs(a), c[z](m[D](a / 60) % 100), a %= 60, 0 != a && c[z](Sa, a), a = c[K](L));
                b.J = [a, a];
                b.v = [];
                return b
            }
            b = new Pd;
            b.ba = a.id;
            b.$ = -a.std_offset;
            b.J = a.names;
            b.v = a.transitions;
            return b
        }
        R = Pd[I];
        R.ea = function(a) {
            for (var a = Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes()) / 36E5, b = 0; b < this.v[H] && a >= this.v[b];) b += 2;
            return 0 == b ? 0 : this.v[b - 1]
        };
        R.qb = function(a) {
            var a = this.K(a),
                b = [$a];
            b[z](0 >= a ? Ia : Ka);
            a = m.abs(a);
            b[z](T(m[D](a / 60) % 100, 2), Sa, T(a % 60, 2));
            return b[K](L)
        };
        R.Bb = function(a) {
            return this.J[this.da(a) ? 3 : 1]
        };
        R.K = function(a) {
            return this.$ - this.ea(a)
        };
        R.rb = function(a) {
            var a = -this.K(a),
                b = [0 > a ? Ka : Ia],
                a = m.abs(a);
            b[z](T(m[D](a / 60) % 100, 2), T(a % 60, 2));
            return b[K](L)
        };
        R.Cb = function(a) {
            return this.J[this.da(a) ? 2 : 0]
        };
        R.da = function(a) {
            return 0 < this.ea(a)
        };

        function Rd(a) {
            this.u = [];
            typeof a == P ? this.q(a) : this.d(a)
        }
        var Sd = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvzZ]+/];
        R = Rd[I];
        R.d = function(a) {
            for (; a;)
                for (var b = 0; b < Sd[H]; ++b) {
                    var c = a.match(Sd[b]);
                    if (c) {
                        c = c[0];
                        a = a[ta](c[H]);
                        0 == b && (c == Ea ? c = Da : (c = c[ta](1, c[H] - 1), c = c[C](/\'\'/, Da)));
                        this.u[z]({
                            text: c,
                            type: b
                        });
                        break
                    }
                }
        };
        y(R, function(a, b) {
            var c = b ? 6E4 * (a[wa]() - b.K(a)) : 0,
                d = c ? new Date(a[ja]() + c) : a,
                e = d;
            b && d[wa]() != a[wa]() && (e = new Date(a[ja]() + (c + (0 < c ? -864E5 : 864E5))));
            for (var c = [], f = 0; f < this.u[H]; ++f) {
                var n = this.u[f].text;
                1 == this.u[f].type ? c[z](this.sb(n, a, d, e, b)) : c[z](n)
            }
            return c[K](L)
        });
        R.q = function(a) {
            if (4 > a) a = U.Y[a];
            else if (8 > a) a = U.Z[a - 4];
            else if (12 > a) a = U.Y[a - 8] + xa + U.Z[a - 8];
            else {
                this.q(10);
                return
            }
            this.d(a)
        };
        R.a = function(a) {
            if (U.Eb === g) return a;
            for (var b = [], c = 0; c < a[H]; c++) {
                var d = a.charCodeAt(c);
                b[z](48 <= d && 57 >= d ? v[fa](U.Eb + d - 48) : a[E](c))
            }
            return b[K](L)
        };
        R.Aa = function(a, b) {
            var c = 0 < b.getFullYear() ? 1 : 0;
            return 4 <= a ? U.vb[c] : U.wb[c]
        };
        R.La = function(a, b) {
            var c = b.getFullYear();
            0 > c && (c = -c);
            return this.a(2 == a ? T(c % 100, 2) : v(c))
        };
        R.Da = function(a, b) {
            var c = b.getMonth();
            switch (a) {
                case 5:
                    return U.$a[c];
                case 4:
                    return U.Za[c];
                case 3:
                    return U.ab[c];
                default:
                    return this.a(T(c + 1, a))
            }
        };
        R.wa = function(a, b) {
            return this.a(T(b[ha]() || 24, a))
        };
        R.Ba = function(a, b) {
            return this.a((b[ja]() % 1E3 / 1E3).toFixed(m.min(3, a))[la](2) + (3 < a ? T(0, a - 3) : L))
        };
        R.za = function(a, b) {
            var c = b.getDay();
            return 4 <= a ? U.Ab[c] : U.zb[c]
        };
        R.xa = function(a, b) {
            var c = b[ha]();
            return U.Db[12 <= c && 24 > c ? 1 : 0]
        };
        R.va = function(a, b) {
            return this.a(T(b[ha]() % 12 || 12, a))
        };
        R.ta = function(a, b) {
            return this.a(T(b[ha]() % 12, a))
        };
        R.ua = function(a, b) {
            return this.a(T(b[ha](), a))
        };
        R.Ga = function(a, b) {
            var c = b.getDay();
            switch (a) {
                case 5:
                    return U.eb[c];
                case 4:
                    return U.hb[c];
                case 3:
                    return U.gb[c];
                default:
                    return this.a(T(c, 1))
            }
        };
        R.Ha = function(a, b) {
            var c = b.getMonth();
            switch (a) {
                case 5:
                    return U.cb[c];
                case 4:
                    return U.bb[c];
                case 3:
                    return U.fb[c];
                default:
                    return this.a(T(c + 1, a))
            }
        };
        R.Ea = function(a, b) {
            var c = m[D](b.getMonth() / 3);
            return 4 > a ? U.yb[c] : U.xb[c]
        };
        R.ya = function(a, b) {
            return this.a(T(b.getDate(), a))
        };
        R.Ca = function(a, b) {
            return this.a(T(b.getMinutes(), a))
        };
        R.Fa = function(a, b) {
            return this.a(T(b.getSeconds(), a))
        };
        R.Ja = function(a, b, c) {
            c = c || Qd(b[wa]());
            return 4 > a ? c.rb(b) : this.a(c.qb(b))
        };
        R.Ka = function(a, b, c) {
            c = c || Qd(b[wa]());
            return 4 > a ? c.Cb(b) : c.Bb(b)
        };
        R.Ia = function(a, b) {
            b = b || Qd(a[wa]());
            return b.ba
        };
        R.sb = function(a, b, c, d, e) {
            var f = a[H];
            switch (a[E](0)) {
                case Za:
                    return this.Aa(f, c);
                case Dc:
                    return this.La(f, c);
                case fb:
                    return this.Da(f, c);
                case Wb:
                    return this.wa(f, d);
                case hb:
                    return this.Ba(f, d);
                case Xa:
                    return this.za(f, c);
                case qb:
                    return this.xa(f, d);
                case Rb:
                    return this.va(f, d);
                case bb:
                    return this.ta(f, d);
                case ab:
                    return this.ua(f, d);
                case xb:
                    return this.Ga(f, c);
                case cb:
                    return this.Ha(f, c);
                case gb:
                    return this.Ea(f, c);
                case Bb:
                    return this.ya(f, c);
                case Zb:
                    return this.Ca(f, d);
                case lc:
                    return this.Fa(f, d);
                case Ac:
                    return this.Ia(b,
                        e);
                case Ec:
                    return this.Ka(f, b, e);
                case kb:
                    return this.Ja(f, b, e);
                default:
                    return L
            }
        };

        function X(a) {
            a = new zd([a || {}, {
                formatType: oc,
                valueType: Db
            }]);
            this.c = a.e(hc);
            this.H = h;
            this.Ua = a.T(Gb, Td);
            this.Ma = a.T(Bc, Ud);
            this.V = h;
            a = a.U(wc);
            a != h && (this.V = Qd(60 * -a))
        }
        var Td = {
                Lb: Ib,
                Mb: Yb,
                Nb: $b,
                SHORT: oc
            },
            Ud = {
                Hb: Cb,
                Ib: Db,
                Pb: vc
            };

        function Vd(a, b) {
            switch (a) {
                case Cb:
                    switch (b) {
                        case Ib:
                            return 0;
                        case Yb:
                            return 1;
                        case $b:
                            return 2;
                        case oc:
                            return 3
                    }
                case Db:
                    switch (b) {
                        case Ib:
                            return 8;
                        case Yb:
                            return 9;
                        case $b:
                            return 10;
                        case oc:
                            return 11
                    }
                case vc:
                    switch (b) {
                        case Ib:
                            return 4;
                        case Yb:
                            return 5;
                        case $b:
                            return 6;
                        case oc:
                            return 7
                    }
            }
        }
        y(X[I], function(a, b) {
            var c = a[ga](b);
            if (!(c != Cb && c != Db))
                for (var c = this.aa(c), d = a[na](), e = 0; e < d; e++) {
                    var f = a[ia](e, b),
                        f = this.s(c, f);
                    a[qa](e, b, f)
                }
        });
        X[I].formatValue = function(a) {
            this.H || (this.H = this.aa(this.Ma));
            return this.s(this.H, a)
        };
        X[I].aa = function(a) {
            var b = this.c;
            b != h || (b = Vd(a, this.Ua));
            return new Rd(b)
        };
        X[I].s = function(a, b) {
            if (b === h) return L;
            var c = this.V;
            c == h && (c = Qd(b[wa]()));
            return a[G](b, c)
        };

        function Wd(a, b) {
            var c = [N],
                d = Xd[b][0] & 7;
            if (0 < d) {
                c[z](M);
                for (var e = 0; e < d; e++) c[z](N)
            }
            return a[C](/0.00/g, c[K](L))
        }
        var Xd = {
            AED: [2, "dh", "\u062f.\u0625.", "DH"],
            AUD: [2, "$", "AU$"],
            BDT: [2, "\u09f3", "Tk"],
            BRL: [2, "R$", "R$"],
            CAD: [2, "$", "C$"],
            CHF: [2, "CHF", "CHF"],
            CLP: [0, "$", "CL$"],
            CNY: [2, "\u00a5", "RMB\u00a5"],
            COP: [0, "$", "COL$"],
            CRC: [0, "\u20a1", "CR\u20a1"],
            CZK: [2, "K\u010d", "K\u010d"],
            DKK: [18, "kr", "kr"],
            DOP: [2, "$", "RD$"],
            EGP: [2, "\u00a3", "LE"],
            EUR: [18, "\u20ac", "\u20ac"],
            GBP: [2, "\u00a3", "GB\u00a3"],
            HKD: [2, "$", "HK$"],
            ILS: [2, "\u20aa", "IL\u20aa"],
            INR: [2, "\u20b9", "Rs"],
            ISK: [0, "kr", "kr"],
            JMD: [2, "$", "JA$"],
            JPY: [0, "\u00a5", "JP\u00a5"],
            KRW: [0, "\u20a9", "KR\u20a9"],
            LKR: [2, "Rs", "SLRs"],
            MNT: [0, "\u20ae", "MN\u20ae"],
            MXN: [2, "$", "Mex$"],
            MYR: [2, "RM", "RM"],
            NOK: [18, "kr", "NOkr"],
            PAB: [2, "B/.", "B/."],
            PEN: [2, "S/.", "S/."],
            PHP: [2, "\u20b1", "Php"],
            PKR: [0, "Rs", "PKRs."],
            RUB: [2, "Rup", "Rup"],
            SAR: [2, "Rial", "Rial"],
            SEK: [2, "kr", "kr"],
            SGD: [2, "$", "S$"],
            THB: [2, "\u0e3f", "THB"],
            TRY: [2, "TL", "YTL"],
            TWD: [2, "NT$", "NT$"],
            USD: [2, "$", "US$"],
            UYU: [2, "$", "UY$"],
            VND: [0, "\u20ab", "VN\u20ab"],
            YER: [0, "Rial", "Rial"],
            ZAR: [2, "R", "ZAR"]
        };
        var Yd = {
                DECIMAL_SEP: M,
                GROUP_SEP: Ja,
                mb: Ca,
                S: N,
                ob: Ia,
                lb: Ka,
                kb: Xa,
                nb: Hc,
                qa: "\u221e",
                ra: "NaN",
                DECIMAL_PATTERN: "#,##0.###",
                Ya: "#E0",
                Xa: "#,##0%",
                Wa: "\u00a4#,##0.00;(\u00a4#,##0.00)",
                ha: "USD"
            },
            Y = Yd,
            Y = Yd;

        function Zd(a, b, c) {
            this.h = b || Y.ha;
            this.ga = c || 0;
            this.p = 40;
            this.b = 1;
            this.C = 3;
            this.o = this.i = 0;
            this.M = i;
            this.A = this.z = L;
            this.l = Ka;
            this.m = L;
            this.g = 1;
            this.B = 3;
            this.n = this.N = i;
            typeof a == P ? this.q(a) : this.d(a)
        }
        var ae = i;
        R = Zd[I];
        R.d = function(a) {
            this.c = a[C](/ /g, Fc);
            var b = [0];
            this.z = this.t(a, b);
            var c = b[0];
            this.Va(a, b);
            c = b[0] - c;
            this.A = this.t(a, b);
            b[0] < a[H] && a[E](b[0]) == Ta ? (b[0]++, this.l = this.t(a, b), b[0] += c, this.m = this.t(a, b)) : (this.l = this.z + this.l, this.m += this.A)
        };
        R.q = function(a) {
            switch (a) {
                case 1:
                    this.d(Y.DECIMAL_PATTERN);
                    break;
                case 2:
                    this.d(Y.Ya);
                    break;
                case 3:
                    this.d(Y.Xa);
                    break;
                case 4:
                    this.d(Wd(Y.Wa, this.h));
                    break;
                default:
                    throw t("Unsupported pattern type.");
            }
        };
        y(R, function(a) {
            if (ba(a)) return Y.ra;
            var b = [],
                c = 0 > a || 0 == a && 0 > 1 / a;
            b[z](c ? this.l : this.z);
            if (isFinite(a)) a = a * (c ? -1 : 1) * this.g, this.n ? this.sa(a, b) : this.D(a, this.b, b);
            else b[z](Y.qa);
            b[z](c ? this.m : this.A);
            return b[K](L)
        });
        R.D = function(a, b, c) {
            var d = m.pow(10, this.C),
                e = m[A](a * d),
                f;
            isFinite(e) ? (a = m[D](e / d), f = m[D](e - a * d)) : f = 0;
            for (var n = 0 < this.i || 0 < f, p = L, e = a; 1E20 < e;) p = N + p, e = m[A](e / 10);
            var p = e + p,
                B = Y.DECIMAL_SEP,
                Q = Y.GROUP_SEP,
                e = ae ? 48 : Y.S.charCodeAt(0),
                Z = p[H];
            if (0 < a || 0 < b) {
                for (a = Z; a < b; a++) c[z](v[fa](e));
                for (a = 0; a < Z; a++) c[z](v[fa](e + 1 * p[E](a))), 1 < Z - a && (0 < this.B && 1 == (Z - a) % this.B) && c[z](Q)
            } else n || c[z](v[fa](e));
            (this.N || n) && c[z](B);
            b = L + (f + d);
            for (d = b[H]; b[E](d - 1) == N && d > this.i + 1;) d--;
            for (a = 1; a < d; a++) c[z](v[fa](e + 1 * b[E](a)))
        };
        R.W = function(a, b) {
            b[z](Y.kb);
            0 > a ? (a = -a, b[z](Y.lb)) : this.M && b[z](Y.ob);
            for (var c = L + a, d = ae ? N : Y.S, e = c[H]; e < this.o; e++) b[z](d);
            b[z](c)
        };
        R.sa = function(a, b) {
            if (0 == a) this.D(a, this.b, b), this.W(0, b);
            else {
                var c = m[D](m.log(a) / m.log(10)),
                    a = a / m.pow(10, c),
                    d = this.b;
                if (1 < this.p && this.p > this.b) {
                    for (; 0 != c % this.p;) a *= 10, c--;
                    d = 1
                } else 1 > this.b ? (c++, a /= 10) : (c -= this.b - 1, a *= m.pow(10, this.b - 1));
                this.D(a, d, b);
                this.W(c, b)
            }
        };
        R.t = function(a, b) {
            for (var c = L, d = i, e = a[H]; b[0] < e; b[0]++) {
                var f = a[E](b[0]);
                if (f == Da) b[0] + 1 < e && a[E](b[0] + 1) == Da ? (b[0]++, c += Da) : d = !d;
                else if (d) c += f;
                else switch (f) {
                    case za:
                    case N:
                    case Ja:
                    case M:
                    case Ta:
                        return c;
                    case Gc:
                        if (b[0] + 1 < e && a[E](b[0] + 1) == Gc) b[0]++, c += this.h;
                        else switch (this.ga) {
                            case 0:
                                c += Xd[this.h][1];
                                break;
                            case 2:
                                var f = this.h,
                                    n = Xd[f],
                                    c = c + (f == n[1] ? f : f + xa + n[1]);
                                break;
                            case 1:
                                c += Xd[this.h][2]
                        }
                        break;
                    case Ca:
                        if (1 != this.g) throw t(ib);
                        this.g = 100;
                        c += Y.mb;
                        break;
                    case Hc:
                        if (1 != this.g) throw t(ib);
                        this.g = 1E3;
                        c += Y.nb;
                        break;
                    default:
                        c += f
                }
            }
            return c
        };
        R.Va = function(a, b) {
            for (var c = -1, d = 0, e = 0, f = 0, n = -1, p = a[H], B = aa; b[0] < p && B; b[0]++) switch (a[E](b[0])) {
                case za:
                    0 < e ? f++ : d++;
                    0 <= n && 0 > c && n++;
                    break;
                case N:
                    if (0 < f) throw t('Unexpected "0" in pattern "' + a + '"');
                    e++;
                    0 <= n && 0 > c && n++;
                    break;
                case Ja:
                    n = 0;
                    break;
                case M:
                    if (0 <= c) throw t('Multiple decimal separators in pattern "' + a + '"');
                    c = d + e + f;
                    break;
                case Xa:
                    if (this.n) throw t('Multiple exponential symbols in pattern "' + a + '"');
                    this.n = aa;
                    this.o = 0;
                    b[0] + 1 < p && a[E](b[0] + 1) == Ia && (b[0]++, this.M = aa);
                    for (; b[0] + 1 < p && a[E](b[0] + 1) == N;) b[0]++,
                        this.o++;
                    if (1 > d + e || 1 > this.o) throw t('Malformed exponential pattern "' + a + '"');
                    B = i;
                    break;
                default:
                    b[0]--, B = i
            }
            0 == e && (0 < d && 0 <= c) && (e = c, 0 == e && e++, f = d - e, d = e - 1, e = 1);
            if (0 > c && 0 < f || 0 <= c && (c < d || c > d + e) || 0 == n) throw t('Malformed pattern "' + a + '"');
            f = d + e + f;
            this.C = 0 <= c ? f - c : 0;
            0 <= c && (this.i = d + e - c, 0 > this.i && (this.i = 0));
            this.b = (0 <= c ? c : f) - d;
            this.n && (this.p = d + this.b, 0 == this.C && 0 == this.b && (this.b = 1));
            this.B = m.max(0, n);
            this.N = 0 == c || c == f
        };

        function $(a) {
            a = new zd([a || {}, {
                decimalSymbol: be,
                groupingSymbol: ce,
                fractionDigits: 2,
                negativeParens: i,
                prefix: L,
                suffix: L,
                scaleFactor: 1
            }]);
            this.j = a.ma(Hb);
            this.ka = a.r(Eb);
            this.F = a.r(Qb);
            this.ia = a.r(ic);
            this.ja = a.r(tc);
            this.G = a.oa(cc);
            this.O = a.la(dc);
            this.c = a.pa(hc);
            this.P = a.na(nc);
            if (0 >= this.P) throw t("Scale factor must be a positive number.");
        }
        var be = Y.DECIMAL_SEP,
            ce = Y.GROUP_SEP,
            de = Y.DECIMAL_PATTERN;
        y($[I], function(a, b) {
            if (a[ga](b) == P)
                for (var c = 0; c < a[na](); c++) {
                    var d = a[ia](c, b);
                    if (d != h) {
                        var e = this.formatValue(d);
                        a[qa](c, b, e);
                        !/^[\s\xa0]*$/ [da](this.G == h ? L : v(this.G)) && 0 > d && a[ra](c, b, rc, Ab + this.G + Ta)
                    }
                }
        });
        $[I].formatValue = function(a) {
            var b = h,
                b = a / this.P;
            this.c === h ? (this.O && (b = m.abs(b)), b = this.s(b), b = this.ia + b + this.ja, this.O && 0 > a && (b = Fa + b + Ha)) : b = (new Zd(this.c))[G](b);
            return b
        };
        $[I].s = function(a) {
            0 == this.j && (a = m[A](a));
            var b = [];
            0 > a && (a = -a, b[z](Ka));
            var c = m.pow(10, this.j),
                d = m[A](a * c),
                a = v(m[D](d / c)),
                c = v(d % c);
            if (3 < a[H] && this.F) {
                d = a[H] % 3;
                0 < d && (b[z](a[ta](0, d), this.F), a = a[ta](d));
                for (; 3 < a[H];) b[z](a[ta](0, 3), this.F), a = a[ta](3)
            }
            b[z](a);
            0 < this.j && (b[z](this.ka), c[H] < this.j && (c = Pa + c), b[z](c[ta](c[H] - this.j)));
            return b[K](L)
        };

        function ee(a) {
            this.c = a || L
        }

        function fe(a, b, c, d, e, f, n) {
            return 0 < f && n[f - 1] == ob ? d : b.getFormattedValue(a, c[u(e, 10)])
        }
        y(ee[I], function(a, b, c, d) {
            var e = b[0];
            c != h && Jc(c) == P && (e = c);
            c = d || h;
            for (d = 0; d < a[na](); d++) {
                var f = this.c[C](/{(\d+)}/g, Oc(fe, d, a, b)),
                    f = f[C](/\\(.)/g, Ba);
                c ? a[ra](d, e, c, f) : a[qa](d, e, f)
            }
        });
        j("google.visualization.NumberFormat", $);
        l($[I], O, $[I][G]);
        l($[I], "formatValue", $[I].formatValue);
        j("google.visualization.NumberFormat.useNativeCharactersIfAvailable", function(a) {
            ae = !a
        });
        j("google.visualization.NumberFormat.DECIMAL_SEP", be);
        j("google.visualization.NumberFormat.GROUP_SEP", ce);
        j("google.visualization.NumberFormat.DECIMAL_PATTERN", de);
        j("google.visualization.ColorFormat", W);
        l(W[I], O, W[I][G]);
        l(W[I], "addRange", W[I].addRange);
        l(W[I], rb, W[I].addGradientRange);
        j("google.visualization.BarFormat", Hd);
        l(Hd[I], O, Hd[I][G]);
        j("google.visualization.ArrowFormat", Pc);
        l(Pc[I], O, Pc[I][G]);
        j("google.visualization.PatternFormat", ee);
        l(ee[I], O, ee[I][G]);
        j("google.visualization.DateFormat", X);
        l(X[I], O, X[I][G]);
        l(X[I], "formatValue", X[I].formatValue);
        j("google.visualization.TableNumberFormat", $);
        l($[I], O, $[I][G]);
        j("google.visualization.TableColorFormat", W);
        l(W[I], O, W[I][G]);
        l(W[I], "addRange", W[I].addRange);
        l(W[I], rb, W[I].addGradientRange);
        j("google.visualization.TableBarFormat", Hd);
        l(Hd[I], O, Hd[I][G]);
        j("google.visualization.TableArrowFormat", Pc);
        l(Pc[I], O, Pc[I][G]);
        j("google.visualization.TablePatternFormat", ee);
        l(ee[I], O, ee[I][G]);
        j("google.visualization.TableDateFormat", X);
        l(X[I], O, X[I][G]);
    })();



    (function() {
        if (window["__gvizguard__"]) return;

        function d(a) {
            throw a;
        }
        var g = void 0,
            i = !0,
            k = null,
            l = !1,
            aa = encodeURIComponent,
            m = google_exportSymbol,
            ca = window,
            da = Object,
            fa = Infinity,
            ga = document,
            ha = isNaN,
            n = google_exportProperty,
            q = Math,
            ia = Array,
            ja = Number,
            r = Error,
            ka = parseInt,
            la = parseFloat,
            ma = String,
            na = decodeURIComponent,
            oa = RegExp;

        function pa(a, b) {
            return a.width = b
        }

        function qa(a, b) {
            return a.innerHTML = b
        }

        function ra(a, b) {
            return a.currentTarget = b
        }

        function sa(a, b) {
            return a.left = b
        }

        function ta(a, b) {
            return a.screenX = b
        }

        function va(a, b) {
            return a.screenY = b
        }

        function wa(a, b) {
            return a.keyCode = b
        }

        function xa(a, b) {
            return a.handleEvent = b
        }

        function ya(a, b) {
            return a.depth = b
        }

        function za(a, b) {
            return a.type = b
        }

        function Aa(a, b) {
            return a.setContent = b
        }

        function Ba(a, b) {
            return a.getValue = b
        }

        function Ca(a, b) {
            return a.clientX = b
        }

        function Da(a, b) {
            return a.clientY = b
        }

        function Ea(a, b) {
            return a.visibility = b
        }

        function Fa(a, b) {
            return a.setState = b
        }

        function Ga(a, b) {
            return a.altKey = b
        }

        function Ha(a, b) {
            return a.length = b
        }

        function Ia(a, b) {
            return a.setValue = b
        }

        function Ja(a, b) {
            return a.className = b
        }

        function La(a, b) {
            return a.next = b
        }

        function Ma(a, b) {
            return a.visualization = b
        }

        function Na(a, b) {
            return a.clone = b
        }

        function Oa(a, b) {
            return a.target = b
        }

        function Pa(a, b) {
            return a.bottom = b
        }

        function Qa(a, b) {
            return a.display = b
        }

        function Ra(a, b) {
            return a.height = b
        }

        function Sa(a, b) {
            return a.right = b
        }
        var Ta = "appendChild",
            t = "push",
            Ua = "isCollapsed",
            Va = "getBoundingClientRect",
            Wa = "getParent",
            Xa = "open",
            Ya = "test",
            Za = "relatedTarget",
            $a = "clearTimeout",
            u = "width",
            ab = "collapse",
            bb = "slice",
            v = "replace",
            cb = "nodeType",
            db = "events",
            eb = "floor",
            fb = "getElementById",
            gb = "getOptions",
            hb = "RequestParameters",
            ib = "concat",
            jb = "charAt",
            lb = "createTextNode",
            mb = "getNumberOfColumns",
            nb = "value",
            ob = "getDataTable",
            pb = "preventDefault",
            qb = "insertBefore",
            rb = "targetTouches",
            w = "indexOf",
            sb = "metaKey",
            tb = "setEnd",
            y = "dispatchEvent",
            ub =
            "capture",
            vb = "getColumnProperties",
            wb = "nodeName",
            A = "left",
            xb = "setColumnProperties",
            yb = "screenX",
            zb = "screenY",
            Ab = "match",
            Bb = "getBoxObjectFor",
            Cb = "send",
            Eb = "getName",
            Fb = "charCode",
            Gb = "isError",
            Hb = "focus",
            Ib = "createElement",
            Jb = "getColumnLabel",
            Kb = "toDataTable",
            Lb = "scrollHeight",
            Mb = "keyCode",
            Nb = "getColumnType",
            Ob = "firstChild",
            Pb = "getSortedRows",
            Qb = "forEach",
            Rb = "clientLeft",
            Sb = "getTableRowIndex",
            Tb = "setAttribute",
            Ub = "clientTop",
            Vb = "play",
            Wb = "handleEvent",
            Xb = "getRowProperties",
            Yb = "getTableProperties",
            Zb =
            "setRefreshInterval",
            $b = "depth",
            B = "type",
            ac = "childNodes",
            bc = "defaultView",
            cc = "setCell",
            dc = "bind",
            ec = "source",
            fc = "setContent",
            gc = "name",
            C = "getValue",
            hc = "nextSibling",
            jc = "addRows",
            kc = "setActive",
            lc = "getElementsByTagName",
            mc = "clientX",
            nc = "clientY",
            oc = "documentElement",
            pc = "setState",
            qc = "scrollTop",
            rc = "stop",
            sc = "toString",
            tc = "altKey",
            uc = "getMonth",
            vc = "setStart",
            wc = "getView",
            xc = "getNumberOfRows",
            D = "length",
            yc = "propertyIsEnumerable",
            zc = "getProperties",
            Ac = "addError",
            F = "prototype",
            Bc = "toJSON",
            Cc = "setValue",
            Dc = "clientWidth",
            Ec = "abort",
            Fc = "setTimeout",
            Gc = "setDataSourceUrl",
            Hc = "document",
            Ic = "ctrlKey",
            Jc = "split",
            Kc = "getColumnProperty",
            Lc = "offsetParent",
            Mc = "constructor",
            Nc = "stopPropagation",
            Oc = "getColumnPattern",
            Pc = "location",
            G = "visualization",
            Qc = "disabled",
            Rc = "offsetLeft",
            Sc = "message",
            Tc = "hasOwnProperty",
            H = "style",
            Uc = "setView",
            Vc = "setQuery",
            Wc = "body",
            Xc = "removeChild",
            Yc = "clone",
            Zc = "getDataSourceUrl",
            $c = "target",
            ad = "lastChild",
            bd = "getOption",
            I = "call",
            cd = "isEnabled",
            dd = "setDataTable",
            ed = "removeAll",
            fd = "scrollWidth",
            gd = "lastIndexOf",
            hd = "draw",
            id = "getFullYear",
            jd = "DataView",
            kd = "getRefreshInterval",
            ld = "getState",
            md = "clientHeight",
            nd = "scrollLeft",
            od = "charCodeAt",
            pd = "getPackages",
            qd = "getContainerId",
            rd = "bottom",
            sd = "currentStyle",
            td = "href",
            ud = "substring",
            vd = "getQuery",
            wd = "rows",
            xd = "apply",
            yd = "shiftKey",
            zd = "tagName",
            Ad = "addColumn",
            Bd = "element",
            Cd = "getContainer",
            Dd = "getFormattedValue",
            Ed = "errors",
            Fd = "parentNode",
            Gd = "label",
            Hd = "offsetTop",
            J = "height",
            Id = "splice",
            Jd = "join",
            Kd = "setColumns",
            Ld = "execScript",
            Md = "toLowerCase",
            Nd = "right",
            Od = "setOption",
            K = "",
            Pd = "\n",
            Qd = "\n<\/script>",
            Rd = " ",
            Sd = " [",
            Td = " does not match type ",
            Ud = " is duplicate in sortColumns.",
            Vd = ' name="',
            Wd = ' type="',
            Xd = '"',
            Yd = '" />',
            Zd = '" src="http://www.google.com/ig/ifr?url=',
            $d = '""',
            ae = '">\n',
            be = "#",
            ce = "#$1$1$2$2$3$3",
            de = "%",
            ee = "%22",
            fe = "%27",
            ge = "&",
            he = "&amp;",
            ie = "&gt;",
            je = "&lt;",
            ke = "&quot;",
            le = "&requireauth=1&",
            me = "&up_",
            ne = "&up__table_query_url=",
            oe = "').send(\n     function(response) {\n      new ",
            pe = "']});\n\n   function drawVisualization() {\n    new google.visualization.Query('",
            qe = "(",
            re = '(\n       document.getElementById(\'visualization\')).\n        draw(response.getDataTable(), null);\n      });\n   }\n\n   google.setOnLoadCallback(drawVisualization);\n  <\/script>\n </head>\n <body>\n  <div id="visualization" style="width: 500px; height: 500px;"></div>\n </body>\n</html>',
            se = "(\\d*)(\\D*)",
            te = ")",
            ue = "*",
            ve = ",",
            we = ", ",
            xe = "-active",
            ye = "-bg",
            ze = "-buttons",
            Ae = "-caption",
            Be = "-checkbox",
            Ce = "-checked",
            De = "-content",
            Ee = "-default",
            Fe = "-disabled",
            Ge = "-dropdown",
            He = "-focused",
            Ie = "-highlight",
            Je = "-horizontal",
            Ke = "-hover",
            Le = "-inner-box",
            Me = "-moz-transform",
            Ne = "-ms-transform",
            Oe = "-o-transform",
            Pe = "-open",
            Qe = "-outer-box",
            Re = "-rtl",
            Se = "-selected",
            Te = "-title",
            Ve = "-title-close",
            We = "-title-draggable",
            Xe = "-title-text",
            Ye = "-vertical",
            Ze = "-webkit-transform",
            $e = ".",
            af = "..",
            bf = "./",
            cf = ".format",
            df = "/",
            ef = "/.",
            ff = "//",
            gf = "/chart.html",
            hf = "/chart.js",
            jf = "/static/modules/gviz/",
            kf = "/tq",
            lf = "/util/toolbar.css",
            mf = "0",
            nf = "0.5",
            of = "0.6",
            pf = "00",
            qf = "000",
            rf = "1",
            sf = "1.0",
            tf = "1.9",
            uf = "525",
            vf = "528",
            wf = "533.17.9",
            xf = "7",
            yf = "8",
            zf = ":",
            Af = ";",
            Bf = ";sig:",
            Cf = ";type:",
            Df = "<",
            Ef = '<html>\n <head>\n  <title>Google Visualization API</title>\n  <script type="text/javascript" src="http://www.google.com/jsapi"><\/script>\n  <script type="text/javascript">\n   google.load(\'visualization\', \'1\', {packages: [\'',
            Ff = '<iframe style="',
            Gf = '<script type="text/javascript" src="',
            Hf = "=",
            If = ">",
            Jf = "?",
            Kf = "@",
            Lf = "APPLET",
            Mf = "AREA",
            Nf = "Add to iGoogle",
            Of = "BASE",
            Pf = "BODY",
            Qf = "BR",
            Rf = "BUTTON",
            Sf = "BarChart",
            Tf = "BubbleChart",
            Uf = "COL",
            Vf = "COMMAND",
            Wf = "CSS1Compat",
            Xf = "Chart options",
            Yf = "Column index ",
            Zf = "Component already rendered",
            $f = "Content-Type",
            ag = "Copy-Paste this code to an HTML page",
            bg = "Dashboard",
            cg = "Date(",
            dg = "EMBED",
            eg = "End",
            fg = "EndToEnd",
            gg = "Export data as CSV",
            hg = "Export data as HTML",
            ig = "FRAME",
            jg = "GET",
            kg = "Google Visualization",
            lg = "Google_Visualization",
            mg = "HR",
            ng = "HTML",
            og = "IFRAME",
            pg = "IMG",
            qg = "INPUT",
            rg = "ISINDEX",
            sg = "Invalid DataView column type.",
            tg = "Invalid listener argument",
            ug = "JavaScript",
            vg = "Javascript code",
            wg = "KEYGEN",
            xg = "LINK",
            yg = "META",
            zg = "MSXML2.XMLHTTP",
            Ag = "MSXML2.XMLHTTP.3.0",
            Bg = "MSXML2.XMLHTTP.6.0",
            Cg = "Microsoft.XMLHTTP",
            Dg = "MozOpacity",
            Eg = "NOFRAMES",
            Fg = "NOSCRIPT",
            Gg = "Name",
            Hg = "Not a valid 2D array.",
            Ig = "OBJECT",
            Jg = "PARAM",
            Kg = "POST",
            Lg = "Publish to web page",
            Mg = "Request timed out",
            Ng = "SCRIPT",
            Og = "SELECT",
            Pg = "SOURCE",
            Qg = "STYLE",
            Rg = "ScatterChart",
            Sg = "Start",
            Tg = "StartToEnd",
            Ug = "StartToStart",
            Vg = "Style",
            Wg = "TEXTAREA",
            Xg = "TR",
            Yg = "TRACK",
            Zg = "Timed out after ",
            $g = "To",
            ah = "Type",
            bh =
            "Type mismatch. Value ",
            ch = "Unable to set parent component",
            dh = "WBR",
            eh = "Width",
            fh = "[",
            gh = "[object Array]",
            hh = "[object Function]",
            ih = "[object Window]",
            jh = "\\\\",
            kh = "\\c",
            lh = "\\s",
            mh = "\\u",
            nh = "]",
            oh = "_",
            ph = "_table_query_refresh_interval",
            qh = "_table_query_url",
            rh = "abort",
            sh = "absolute",
            th = "action",
            uh = "activate",
            vh = "activedescendant",
            wh = "addTrendLine",
            xh = "afterhide",
            yh = "aftershow",
            zh = "alpha(opacity=",
            Ah = "application/x-www-form-urlencoded;charset=utf-8",
            Bh = "aria-",
            Ch = "array",
            Dh = "auto",
            Eh = "beforedrag",
            Fh = "beforehide",
            Gh = "beforeshow",
            Hh = "block",
            Ih = "blur",
            Jh = "body",
            Kh = "boolean",
            Lh = "border-box",
            Mh = "border:0;vertical-align:bottom;",
            Nh = "borderBottom",
            Oh = "borderBottomWidth",
            Ph = "borderLeft",
            Qh = "borderLeftWidth",
            Rh = "borderRight",
            Sh = "borderRightWidth",
            Th = "borderTop",
            Uh = "borderTopWidth",
            Vh = "br",
            Wh = "button",
            Xh = "call",
            Yh = "callee",
            Zh = "change",
            $h = "character",
            ai = "chart",
            bi = "check",
            ci = "checked",
            di = "class",
            ei = "click",
            fi = "close",
            gi = "column",
            hi = "columnFilters[",
            ii = "complete",
            ji = "contextmenu",
            ki = "control",
            li = "controls",
            mi = "corechart",
            ni = "csv",
            oi = "dashboard",
            pi = "data-",
            qi = "date",
            ri = "datetime",
            si = "dblclick",
            ti = "deactivate",
            ui = "desc",
            vi = "detailed_message",
            wi = "dialogselect",
            xi = "direction",
            yi = "disable",
            zi = "disabled",
            Ai = "display",
            Bi = "display: none; padding-top: 2px",
            Ci = "div",
            Di = "domainAxis",
            Ei = "drag",
            Fi = "dragstart",
            Gi = "draw",
            Hi = "earlycancel",
            Ii = "emptyString",
            Ji = "enable",
            Ki = "end",
            Li = "enter",
            Mi = "error",
            Ni = "expanded",
            Oi = "false",
            Pi = "filter",
            Qi = "fixed",
            Ri = "focus",
            Si = "focusin",
            Ti = "focusout",
            Ui = "for",
            Vi = "full",
            Wi = "function",
            Xi = "g",
            Yi = "gadgets.io.makeRequest",
            Zi = "gadgets.io.makeRequest failed",
            $i = "getColumnIndex",
            aj = "getColumnLabel",
            bj = "getColumnPattern",
            cj = "getColumnProperties",
            dj = "getColumnProperty",
            ej = "getColumnRange",
            fj = "getContainerId",
            gj = "getDataSourceUrl",
            hj = "getDataTable",
            ij = "getDistinctValues",
            jj = "getFilteredRows",
            kj = "getFormattedValue",
            lj = "getNumberOfColumns",
            mj = "getNumberOfRows",
            nj = "getPackages",
            oj = "getQuery",
            pj = "getRefreshInterval",
            qj = "getRowProperties",
            rj = "getRowProperty",
            sj = "getSnapshot",
            tj = "getTableProperties",
            uj = "getTableProperty",
            vj = "goog-button",
            wj = "goog-container",
            xj = "goog-control",
            yj = "goog-custom-button",
            zj = "goog-inline-block ",
            Aj = "goog-menu",
            Bj = "goog-menu-button",
            Cj = "goog-menuheader",
            Dj = "goog-menuitem",
            Ej = "goog-menuitem-accel",
            Fj = "goog-menuitem-mnemonic-separator",
            Gj = "goog-menuseparator",
            Hj = "goog-modalpopup",
            Ij = "goog-option",
            Jj = "goog-option-selected",
            Kj = "google-visualization-toolbar-big-dialog",
            Lj = "google-visualization-toolbar-export-data",
            Mj = "google-visualization-toolbar-export-igoogle",
            Nj = "google-visualization-toolbar-html-code",
            Oj = "google-visualization-toolbar-html-code-explanation",
            Pj = "google-visualization-toolbar-small-dialog",
            Qj = "google-visualization-toolbar-triangle",
            Rj = "google.loader.GoogleApisBase",
            Sj = "google.visualization.",
            Tj = "google.visualization.Version",
            Uj = "hasLabelsColumn",
            Vj = "haspopup",
            Wj = "head",
            Xj = "hex",
            Yj = "hidden",
            $j = "hide",
            ak = "highlight",
            bk = "horizontal",
            ck = "html",
            dk = "htmlcode",
            ek = "http",
            fk = "http%",
            gk = "http://ajax.googleapis.com/ajax",
            hk = "http://dummy.com",
            ik = "http://www.google.com/ig/adde?moduleurl=",
            jk =
            "https",
            kk = "https%",
            lk = "identity",
            mk = "iframe",
            nk = "igoogle",
            ok = "img",
            pk = "inline",
            qk = "innerText",
            rk = "input",
            sk = "invalid_query",
            tk = 'javascript:""',
            uk = "jscode",
            vk = "json",
            wk = "key",
            xk = "keydown",
            yk = "keypress",
            zk = "keyup",
            Ak = "labelledby",
            Bk = "leave",
            Ck = "left",
            Dk = "link",
            Ek = "listbox",
            Fk = "losecapture",
            Gk = "makeRequest",
            Hk = "make_request_failed",
            Ik = "maxValue",
            Jk = "medium",
            Kk = "menu",
            Lk = "menuitem",
            Mk = "message",
            Nk = "minValue",
            Ok = "modal-dialog",
            Pk = "modifier",
            Qk = "mousedown",
            Rk = "mousemove",
            Sk = "mouseout",
            Tk = "mouseover",
            Uk =
            "mouseup",
            Vk = "ms, aborting",
            Wk = "named",
            Xk = "native code",
            Yk = "new ",
            Zk = "nodeType",
            $k = "none",
            al = "not_modified",
            bl = "null",
            cl = "number",
            dl = "o",
            el = "object",
            fl = "on",
            gl = "opacity",
            hl = "open",
            il = "option",
            jl = "options",
            kl = "out:csv;",
            ll = "out:html;",
            ml = "outerHTML",
            nl = "overflow",
            ol = "package",
            pl = "padding: 2px",
            ql = "paddingBottom",
            rl = "paddingLeft",
            sl = "paddingRight",
            tl = "paddingTop",
            ul = "percent",
            vl = "pixelLeft",
            wl = "position",
            xl = "position:fixed;width:0;height:0;left:0;top:0;",
            yl = "pre",
            zl = "pressed",
            Al = "pub",
            Bl = "px",
            Cl = "range",
            Dl = "ready",
            El = "readystatechange",
            Fl = "reason",
            Gl = "refresh",
            Hl = "relative",
            Il = "reqId:",
            Jl = "resize",
            Kl = "rgb",
            Ll = "right",
            Ml = "role",
            Nl = "rtl",
            Ol = "script",
            Pl = "scroll",
            Ql = "select",
            Rl = "selected",
            Sl = "separator",
            Tl = "series.1.lineWidth",
            Ul = "series.1.pointSize",
            Vl = "series.1.visibleInLegend",
            Wl = "setContainerId",
            Xl = "setDataSourceUrl",
            Yl = "setDataTable",
            Zl = "setOptions",
            $l = "setPackages",
            am = "setQuery",
            bm = "setRefreshInterval",
            cm = "show",
            dm = "solid",
            em = "sortColumns",
            fm = "sortColumns[",
            gm = "span",
            hm = "splice",
            im = "start",
            jm =
            "statechange",
            km = "static",
            lm = "string",
            mm = "stringify",
            nm = "style",
            om = "stylesheet",
            pm = "success",
            qm = "tabIndex",
            rm = "tabindex",
            sm = "targetAxes.0",
            tm = "targetAxes.1",
            um = "targetAxis",
            vm = "text/css",
            wm = "text/javascript",
            xm = "textContent",
            ym = "tick",
            zm = "timeofday",
            Am = "timeout",
            Bm = "toJSON",
            Cm = "touchcancel",
            Dm = "touchend",
            Em = "touchmove",
            Fm = "touchstart",
            Gm = "tqrt",
            Hm = "tqx",
            Im = "transform",
            Jm = "transparent",
            Km = "true",
            Lm = "type",
            Mm = "uncheck",
            Nm = "unhighlight",
            Om = "unselect",
            Pm = "unselectable",
            Qm = "user_not_authenticated",
            Rm =
            "vAxis",
            Sm = "value",
            Tm = "var ",
            Um = "var _et_ = 1;",
            Vm = "vertical",
            Wm = "visible",
            Xm = "visualization",
            Ym = "warning",
            Zm = "width: 700px; height: 500px;",
            $m = "window.event",
            an = "withCredentials",
            bn = "xhr",
            cn = "xhrpost",
            dn = "zx",
            en = "{",
            fn = "}",
            gn = "\u00a0",
            hn = "\u00d7",
            jn = "\u25bc",
            L, kn = kn || {},
            M = this;

        function ln(a, b) {
            for (var c = a[Jc]($e), e = b || M, f; f = c.shift();)
                if (e[f] != k) e = e[f];
                else return k;
            return e
        }

        function mn() {}

        function nn(a) {
            a.la = function() {
                return a.qh ? a.qh : a.qh = new a
            }
        }

        function on(a) {
            var b = typeof a;
            if (b == el)
                if (a) {
                    if (a instanceof ia) return Ch;
                    if (a instanceof da) return b;
                    var c = da[F][sc][I](a);
                    if (c == ih) return el;
                    if (c == gh || typeof a[D] == cl && "undefined" != typeof a[Id] && "undefined" != typeof a[yc] && !a[yc](hm)) return Ch;
                    if (c == hh || "undefined" != typeof a[I] && "undefined" != typeof a[yc] && !a[yc](Xh)) return Wi
                } else return bl;
            else if (b == Wi && "undefined" == typeof a[I]) return el;
            return b
        }

        function pn(a) {
            return a !== g
        }

        function qn(a) {
            return on(a) == Ch
        }

        function rn(a) {
            var b = on(a);
            return b == Ch || b == el && typeof a[D] == cl
        }

        function sn(a) {
            return tn(a) && typeof a[id] == Wi
        }

        function O(a) {
            return typeof a == lm
        }

        function un(a) {
            return typeof a == Kh
        }

        function vn(a) {
            return typeof a == cl
        }

        function wn(a) {
            return on(a) == Wi
        }

        function tn(a) {
            var b = typeof a;
            return b == el && a != k || b == Wi
        }

        function xn(a) {
            return a[yn] || (a[yn] = ++zn)
        }
        var yn = "closure_uid_" + q[eb](2147483648 * q.random())[sc](36),
            zn = 0;

        function An(a) {
            var b = on(a);
            if (b == el || b == Ch) {
                if (a[Yc]) return a[Yc]();
                var b = b == Ch ? [] : {},
                    c;
                for (c in a) b[c] = An(a[c]);
                return b
            }
            return a
        }

        function Bn(a, b, c) {
            return a[I][xd](a[dc], arguments)
        }

        function Cn(a, b, c) {
            a || d(r());
            if (2 < arguments[D]) {
                var e = ia[F][bb][I](arguments, 2);
                return function() {
                    var c = ia[F][bb][I](arguments);
                    ia[F].unshift[xd](c, e);
                    return a[xd](b, c)
                }
            }
            return function() {
                return a[xd](b, arguments)
            }
        }

        function Dn(a, b, c) {
            Dn = Function[F][dc] && -1 != Function[F][dc][sc]()[w](Xk) ? Bn : Cn;
            return Dn[xd](k, arguments)
        }

        function En(a, b) {
            var c = ia[F][bb][I](arguments, 1);
            return function() {
                var b = ia[F][bb][I](arguments);
                b.unshift[xd](b, c);
                return a[xd](this, b)
            }
        }
        var Fn = Date.now || function() {
            return +new Date
        };

        function Gn(a) {
            if (M[Ld]) M[Ld](a, ug);
            else if (M.eval)
                if (Hn == k && (M.eval(Um), "undefined" != typeof M._et_ ? (delete M._et_, Hn = i) : Hn = l), Hn) M.eval(a);
                else {
                    var b = M[Hc],
                        c = b[Ib](Ol);
                    za(c, wm);
                    c.defer = l;
                    c[Ta](b[lb](a));
                    b[Wc][Ta](c);
                    b[Wc][Xc](c)
                }
            else d(r("goog.globalEval not available"))
        }
        var Hn = k;

        function P(a, b) {
            function c() {}
            c.prototype = b[F];
            a.b = b[F];
            a.prototype = new c;
            a[F].constructor = a
        };

        function In(a) {
            var b;
            if (0 == ga[lc](Wj)[D]) {
                b = ga[lc](ck)[0];
                var c = ga[lc](Jh)[0],
                    e = ga[Ib](Wj);
                b[qb](e, c)
            }
            b = ga[lc](Wj)[0];
            c = ga[Ib](Ol);
            za(c, wm);
            c.src = a;
            b[Ta](c)
        }

        function Jn(a) {
            return function(b) {
                google[G][Ed][ed](a);
                var c = b[Gb]();
                c && google[G][Ed].addErrorFromQueryResponse(a, b);
                return !c
            }
        };

        function Kn(a) {
            a = ma(a);
            if (/^\s*$/ [Ya](a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/ [Ya](a[v](/\\["\\\/bfnrtu]/g, Kf)[v](/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, nh)[v](/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, K))) try {
                return eval(qe + a + te)
            } catch (b) {}
            d(r("Invalid JSON string: " + a))
        }

        function Ln(a) {
            this.Pd = a
        }
        Ln[F].Sk = function(a) {
            var b = [];
            this.rf(a, b);
            return b[Jd](K)
        };
        Ln[F].rf = function(a, b) {
            switch (typeof a) {
                case lm:
                    this.lh(a, b);
                    break;
                case cl:
                    this.nk(a, b);
                    break;
                case Kh:
                    b[t](a);
                    break;
                case "undefined":
                    b[t](bl);
                    break;
                case el:
                    if (a == k) {
                        b[t](bl);
                        break
                    }
                    if (qn(a)) {
                        this.mk(a, b);
                        break
                    }
                    this.ok(a, b);
                    break;
                case Wi:
                    break;
                default:
                    d(r("Unknown type: " + typeof a))
            }
        };
        var Mn = {
                '"': '\\"',
                "\\": jh,
                "/": "\\/",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t",
                "\x0B": "\\u000b"
            },
            Nn = /\uffff/ [Ya]("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
        Ln[F].lh = function(a, b) {
            b[t](Xd, a[v](Nn, function(a) {
                if (a in Mn) return Mn[a];
                var b = a[od](0),
                    f = mh;
                16 > b ? f += qf : 256 > b ? f += pf : 4096 > b && (f += mf);
                return Mn[a] = f + b[sc](16)
            }), Xd)
        };
        Ln[F].nk = function(a, b) {
            b[t](isFinite(a) && !ha(a) ? a : bl)
        };
        Ln[F].mk = function(a, b) {
            var c = a[D];
            b[t](fh);
            for (var e = K, f = 0; f < c; f++) b[t](e), e = a[f], this.rf(this.Pd ? this.Pd[I](a, ma(f), e) : e, b), e = ve;
            b[t](nh)
        };
        Ln[F].ok = function(a, b) {
            b[t](en);
            var c = K,
                e;
            for (e in a)
                if (da[F][Tc][I](a, e)) {
                    var f = a[e];
                    typeof f != Wi && (b[t](c), this.lh(e, b), b[t](zf), this.rf(this.Pd ? this.Pd[I](a, e, f) : f, b), c = ve)
                }
            b[t](fn)
        };

        function On(a) {
            a = Pn(a, Qn);
            return (new Ln(g)).Sk(a)
        }

        function Rn(a) {
            Kn(a);
            return Sn(a)
        }

        function Sn(a) {
            a = Tn(a);
            return eval(qe + a + te)
        }

        function Pn(a, b) {
            var a = b(a),
                c = on(a);
            if (c == el || c == Ch) {
                var c = c == Ch ? [] : {},
                    e;
                for (e in a) {
                    var f = Pn(a[e], b);
                    pn(f) && (c[e] = f)
                }
            } else c = a;
            return c
        }

        function Tn(a) {
            return a[v](/"(Date\([\d,\s]*\))"/g, function(a, c) {
                return Yk + c
            })
        }

        function Qn(a) {
            sn(a) && (a = 0 !== a.getMilliseconds() ? [a[id](), a[uc](), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()] : 0 !== a.getSeconds() || 0 !== a.getMinutes() || 0 !== a.getHours() ? [a[id](), a[uc](), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()] : [a[id](), a[uc](), a.getDate()], a = cg + a[Jd](we) + te);
            return a
        };

        function Un(a) {
            return /^[\s\xa0]*$/ [Ya](a)
        }

        function Vn(a) {
            return a[v](/[\t\r\n ]+/g, Rd)[v](/^[\t\r\n ]+|[\t\r\n ]+$/g, K)
        }

        function Wn(a) {
            return a[v](/^[\s\xa0]+|[\s\xa0]+$/g, K)
        }

        function Xn(a, b) {
            if (b) return a[v](Yn, he)[v](Zn, je)[v]($n, ie)[v](ao, ke);
            if (!bo[Ya](a)) return a; - 1 != a[w](ge) && (a = a[v](Yn, he)); - 1 != a[w](Df) && (a = a[v](Zn, je)); - 1 != a[w](If) && (a = a[v]($n, ie)); - 1 != a[w](Xd) && (a = a[v](ao, ke));
            return a
        }
        var Yn = /&/g,
            Zn = /</g,
            $n = />/g,
            ao = /\"/g,
            bo = /[&<>\"]/;

        function co(a) {
            return a == k ? K : ma(a)
        };
        var eo = ia[F],
            fo = eo[w] ? function(a, b, c) {
                return eo[w][I](a, b, c)
            } : function(a, b, c) {
                c = c == k ? 0 : 0 > c ? q.max(0, a[D] + c) : c;
                if (O(a)) return !O(b) || 1 != b[D] ? -1 : a[w](b, c);
                for (; c < a[D]; c++)
                    if (c in a && a[c] === b) return c;
                return -1
            },
            go = eo[Qb] ? function(a, b, c) {
                eo[Qb][I](a, b, c)
            } : function(a, b, c) {
                for (var e = a[D], f = O(a) ? a[Jc](K) : a, h = 0; h < e; h++) h in f && b[I](c, f[h], h, a)
            },
            ho = eo.filter ? function(a, b, c) {
                return eo.filter[I](a, b, c)
            } : function(a, b, c) {
                for (var e = a[D], f = [], h = 0, j = O(a) ? a[Jc](K) : a, p = 0; p < e; p++)
                    if (p in j) {
                        var s = j[p];
                        b[I](c, s, p, a) &&
                            (f[h++] = s)
                    }
                return f
            },
            io = eo.map ? function(a, b, c) {
                return eo.map[I](a, b, c)
            } : function(a, b, c) {
                for (var e = a[D], f = ia(e), h = O(a) ? a[Jc](K) : a, j = 0; j < e; j++) j in h && (f[j] = b[I](c, h[j], j, a));
                return f
            },
            jo = eo.every ? function(a, b, c) {
                return eo.every[I](a, b, c)
            } : function(a, b, c) {
                for (var e = a[D], f = O(a) ? a[Jc](K) : a, h = 0; h < e; h++)
                    if (h in f && !b[I](c, f[h], h, a)) return l;
                return i
            };

        function ko(a, b) {
            return 0 <= fo(a, b)
        }

        function lo(a, b) {
            var c = fo(a, b),
                e;
            (e = 0 <= c) && eo[Id][I](a, c, 1);
            return e
        }

        function mo(a) {
            return eo[ib][xd](eo, arguments)
        }

        function no(a) {
            var b = a[D];
            if (0 < b) {
                for (var c = ia(b), e = 0; e < b; e++) c[e] = a[e];
                return c
            }
            return []
        }

        function oo(a, b) {
            for (var c = 1; c < arguments[D]; c++) {
                var e = arguments[c],
                    f;
                if (qn(e) || (f = rn(e)) && e[Tc](Yh)) a[t][xd](a, e);
                else if (f)
                    for (var h = a[D], j = e[D], p = 0; p < j; p++) a[h + p] = e[p];
                else a[t](e)
            }
        }

        function po(a, b, c, e) {
            return eo[Id][xd](a, qo(arguments, 1))
        }

        function qo(a, b, c) {
            return 2 >= arguments[D] ? eo[bb][I](a, b) : eo[bb][I](a, b, c)
        }

        function ro(a, b) {
            for (var c = 0; c < a[D]; c++) a[c] = {
                index: c,
                value: a[c]
            };
            var e = b || so;
            eo.sort[I](a, function(a, b) {
                return e(a[nb], b[nb]) || a.index - b.index
            } || so);
            for (c = 0; c < a[D]; c++) a[c] = a[c][nb]
        }

        function so(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        };

        function to(a, b) {
            this.x = pn(a) ? a : 0;
            this.y = pn(b) ? b : 0
        }
        Na(to[F], function() {
            return new to(this.x, this.y)
        });

        function uo(a, b) {
            return new to(a.x - b.x, a.y - b.y)
        };

        function vo(a, b) {
            pa(this, a);
            Ra(this, b)
        }
        Na(vo[F], function() {
            return new vo(this[u], this[J])
        });
        vo[F].floor = function() {
            pa(this, q[eb](this[u]));
            Ra(this, q[eb](this[J]));
            return this
        };
        vo[F].round = function() {
            pa(this, q.round(this[u]));
            Ra(this, q.round(this[J]));
            return this
        };
        var wo, xo, yo, zo, Ao;

        function Bo() {
            return M.navigator ? M.navigator.userAgent : k
        }

        function Co() {
            return M.navigator
        }
        zo = yo = xo = wo = l;
        var Do;
        if (Do = Bo()) {
            var Eo = Co();
            wo = 0 == Do[w]("Opera");
            xo = !wo && -1 != Do[w]("MSIE");
            (yo = !wo && -1 != Do[w]("WebKit")) && Do[w]("Mobile");
            zo = !wo && !yo && "Gecko" == Eo.product
        }
        var Fo = wo,
            Q = xo,
            Go = zo,
            Ho = yo,
            Io = Co(),
            Jo = Io && Io.platform || K;
        Ao = -1 != Jo[w]("Mac");
        Jo[w]("Win");
        Jo[w]("Linux");
        var Ko = !!Co() && -1 != (Co().appVersion || K)[w]("X11"),
            Lo;
        a: {
            var Mo = K,
                No;
            if (Fo && M.opera) var Oo = M.opera.version,
                Mo = typeof Oo == Wi ? Oo() : Oo;
            else if (Go ? No = /rv\:([^\);]+)(\)|;)/ : Q ? No = /MSIE\s+([^\);]+)(\)|;)/ : Ho && (No = /WebKit\/(\S+)/), No) var Po = No.exec(Bo()),
                Mo = Po ? Po[1] : K;
            if (Q) {
                var Qo, Ro = M[Hc];
                Qo = Ro ? Ro.documentMode : g;
                if (Qo > la(Mo)) {
                    Lo = ma(Qo);
                    break a
                }
            }
            Lo = Mo
        }
        var So = Lo,
            To = {};

        function Uo(a) {
            var b;
            if (!(b = To[a])) {
                b = 0;
                for (var c = Wn(ma(So))[Jc]($e), e = Wn(ma(a))[Jc]($e), f = q.max(c[D], e[D]), h = 0; 0 == b && h < f; h++) {
                    var j = c[h] || K,
                        p = e[h] || K,
                        s = oa(se, Xi),
                        x = oa(se, Xi);
                    do {
                        var z = s.exec(j) || [K, K, K],
                            E = x.exec(p) || [K, K, K];
                        if (0 == z[0][D] && 0 == E[0][D]) break;
                        b = ((0 == z[1][D] ? 0 : ka(z[1], 10)) < (0 == E[1][D] ? 0 : ka(E[1], 10)) ? -1 : (0 == z[1][D] ? 0 : ka(z[1], 10)) > (0 == E[1][D] ? 0 : ka(E[1], 10)) ? 1 : 0) || ((0 == z[2][D]) < (0 == E[2][D]) ? -1 : (0 == z[2][D]) > (0 == E[2][D]) ? 1 : 0) || (z[2] < E[2] ? -1 : z[2] > E[2] ? 1 : 0)
                    } while (0 == b)
                }
                b = To[a] = 0 <= b
            }
            return b
        }
        var Vo = {};

        function Wo(a) {
            return Vo[a] || (Vo[a] = Q && !!ga.documentMode && ga.documentMode >= a)
        };
        var Xo = oa("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

        function Yo(a) {
            if (Zo) {
                Zo = l;
                var b = M[Pc];
                if (b) {
                    var c = b[td];
                    if (c && (c = $o(Yo(c)[3] || k)) && c != b.hostname) Zo = i, d(r())
                }
            }
            return a[Ab](Xo)
        }
        var Zo = Ho;

        function $o(a) {
            return a && na(a)
        }
        var ap = /#|$/;
        var bp = /\/spreadsheet/,
            cp = /\/(ccc|tq|pub)$/,
            dp = /^\/a\/(\w+.)*\w+/,
            ep = /^(\/a\/(\w+.)*\w+)?/,
            fp = /^spreadsheets?[0-9]?\.google\.com$/,
            gp = /^docs\.google\.com*$/,
            hp = /^(trix|spreadsheets|docs|webdrive)-[a-z]+\.corp\.google\.com/,
            ip = /^(\w*\.){1,2}corp\.google\.com$/;

        function jp(a) {
            var b = $o(Yo(a)[3] || k),
                c = fp[Ya](b),
                e = hp[Ya](b),
                f = ip[Ya](b),
                b = gp[Ya](b),
                h = $o(Yo(a)[5] || k),
                j = oa(ep[ec] + cp[ec]),
                h = (a = oa(ep[ec] + bp[ec] + cp[ec])[Ya](h)) || j[Ya](h);
            return b && a || (e || f || c) && h
        };

        function kp(a) {
            var b = [],
                c = 0,
                e;
            for (e in a) b[c++] = a[e];
            return b
        }

        function lp(a) {
            var b = [],
                c = 0,
                e;
            for (e in a) b[c++] = e;
            return b
        }

        function mp(a, b) {
            for (var c in a)
                if (a[c] == b) return i;
            return l
        }

        function np(a, b) {
            var c;
            (c = b in a) && delete a[b];
            return c
        }

        function op(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        }
        var pp = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

        function qp(a, b) {
            for (var c, e, f = 1; f < arguments[D]; f++) {
                e = arguments[f];
                for (c in e) a[c] = e[c];
                for (var h = 0; h < pp[D]; h++) c = pp[h], da[F][Tc][I](e, c) && (a[c] = e[c])
            }
        };
        var rp, sp = !Q || Wo(9);
        !Go && !Q || Q && Wo(9) || Go && Uo("1.9.1");
        var tp = Q && !Uo("9");

        function up(a) {
            a = a.className;
            return O(a) && a[Ab](/\S+/g) || []
        }

        function vp(a, b) {
            for (var c = up(a), e = qo(arguments, 1), f = c[D] + e[D], h = c, j = 0; j < e[D]; j++) ko(h, e[j]) || h[t](e[j]);
            Ja(a, c[Jd](Rd));
            return c[D] == f
        }

        function wp(a, b) {
            var c = up(a),
                e = qo(arguments, 1),
                f, h = e;
            f = ho(c, function(a) {
                return !ko(h, a)
            });
            Ja(a, f[Jd](Rd));
            return f[D] == c[D] - e[D]
        };

        function xp(a) {
            return a ? new yp(zp(a)) : rp || (rp = new yp)
        }

        function Ap(a) {
            return O(a) ? ga[fb](a) : a
        }

        function Bp(a, b) {
            function c(b, c) {
                c == nm ? a[H].cssText = b : c == di ? Ja(a, b) : c == Ui ? a.htmlFor = b : c in Cp ? a[Tb](Cp[c], b) : 0 == c[gd](Bh, 0) || 0 == c[gd](pi, 0) ? a[Tb](c, b) : a[c] = b
            }
            for (var e in b) c[I](g, b[e], e, b)
        }
        var Cp = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            role: Ml,
            rowspan: "rowSpan",
            type: Lm,
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        };

        function Dp(a) {
            a = a[Hc];
            a = Ep(a) ? a[oc] : a[Wc];
            return new vo(a[Dc], a[md])
        }

        function Fp(a) {
            return a ? a.parentWindow || a[bc] : ca
        }

        function Gp(a, b, c) {
            return Hp(ga, arguments)
        }

        function Hp(a, b) {
            var c = b[0],
                e = b[1];
            if (!sp && e && (e[gc] || e[B])) {
                c = [Df, c];
                e[gc] && c[t](Vd, Xn(e[gc]), Xd);
                if (e[B]) {
                    c[t](Wd, Xn(e[B]), Xd);
                    var f = {};
                    qp(f, e);
                    delete f[B];
                    e = f
                }
                c[t](If);
                c = c[Jd](K)
            }
            c = a[Ib](c);
            e && (O(e) ? Ja(c, e) : qn(e) ? vp[xd](k, [c][ib](e)) : Bp(c, e));
            2 < b[D] && Ip(a, c, b, 2);
            return c
        }

        function Ip(a, b, c, e) {
            function f(c) {
                c && b[Ta](O(c) ? a[lb](c) : c)
            }
            for (; e < c[D]; e++) {
                var h = c[e];
                if (rn(h) && !Jp(h)) {
                    var j = go,
                        p;
                    a: {
                        if ((p = h) && typeof p[D] == cl) {
                            if (tn(p)) {
                                p = typeof p.item == Wi || typeof p.item == lm;
                                break a
                            }
                            if (wn(p)) {
                                p = typeof p.item == Wi;
                                break a
                            }
                        }
                        p = l
                    }
                    j(p ? no(h) : h, f)
                } else f(h)
            }
        }

        function Ep(a) {
            return a.compatMode == Wf
        }

        function Kp(a, b) {
            Ip(zp(a), a, arguments, 1)
        }

        function Lp(a) {
            for (var b; b = a[Ob];) a[Xc](b)
        }

        function Mp(a, b) {
            b[Fd] && b[Fd][qb](a, b)
        }

        function Np(a) {
            return a && a[Fd] ? a[Fd][Xc](a) : k
        }

        function Jp(a) {
            return tn(a) && 0 < a[cb]
        }

        function Op(a, b) {
            if (a.contains && 1 == b[cb]) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b[Fd];
            return b == a
        }

        function zp(a) {
            return 9 == a[cb] ? a : a.ownerDocument || a[Hc]
        }

        function Pp(a) {
            if (ml in a) return a.outerHTML;
            var b = zp(a)[Ib](Ci);
            b[Ta](a.cloneNode(i));
            return b.innerHTML
        }
        var Qp = {
                SCRIPT: 1,
                STYLE: 1,
                HEAD: 1,
                IFRAME: 1,
                OBJECT: 1
            },
            Rp = {
                IMG: Rd,
                BR: Pd
            };

        function Sp(a) {
            var b = a.getAttributeNode(rm);
            return b && b.specified ? (a = a.tabIndex, vn(a) && 0 <= a && 32768 > a) : l
        }

        function Tp(a, b) {
            b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute(qm))
        }

        function Up(a) {
            var b = [];
            Vp(a, b, l);
            return b[Jd](K)
        }

        function Vp(a, b, c) {
            if (!(a[wb] in Qp))
                if (3 == a[cb]) c ? b[t](ma(a.nodeValue)[v](/(\r\n|\r|\n)/g, K)) : b[t](a.nodeValue);
                else if (a[wb] in Rp) b[t](Rp[a[wb]]);
            else
                for (a = a[Ob]; a;) Vp(a, b, c), a = a[hc]
        }

        function yp(a) {
            this.l = a || M[Hc] || ga
        }
        L = yp[F];
        L.r = xp;
        L.a = function(a) {
            return O(a) ? this.l[fb](a) : a
        };
        L.setProperties = Bp;
        L.Uj = function(a) {
            a = a || this.Sc();
            return Dp(a || ca)
        };
        L.d = function(a, b, c) {
            return Hp(this.l, arguments)
        };
        L.createElement = function(a) {
            return this.l[Ib](a)
        };
        L.createTextNode = function(a) {
            return this.l[lb](a)
        };
        L.Te = function() {
            return Ep(this.l)
        };
        L.Sc = function() {
            return this.l.parentWindow || this.l[bc]
        };
        L.Sj = function() {
            return !Ho && Ep(this.l) ? this.l[oc] : this.l[Wc]
        };
        L.Tb = function() {
            var a = this.l,
                b = !Ho && Ep(a) ? a[oc] : a[Wc],
                a = a.parentWindow || a[bc];
            return new to(a.pageXOffset || b[nd], a.pageYOffset || b[qc])
        };
        L.appendChild = function(a, b) {
            a[Ta](b)
        };
        L.og = Lp;
        L.ne = Mp;
        L.removeNode = Np;
        L.contains = Op;
        var Wp = "StopIteration" in M ? M.StopIteration : r("StopIteration");

        function Xp() {}
        La(Xp[F], function() {
            d(Wp)
        });
        Xp[F].Gh = function() {
            return this
        };

        function Yp(a) {
            if (typeof a.Ma == Wi) return a.Ma();
            if (O(a)) return a[Jc](K);
            if (rn(a)) {
                for (var b = [], c = a[D], e = 0; e < c; e++) b[t](a[e]);
                return b
            }
            return kp(a)
        }

        function Zp(a, b, c) {
            if (typeof a[Qb] == Wi) a[Qb](b, c);
            else if (rn(a) || O(a)) go(a, b, c);
            else {
                var e;
                if (typeof a.Kb == Wi) e = a.Kb();
                else if (typeof a.Ma != Wi)
                    if (rn(a) || O(a)) {
                        e = [];
                        for (var f = a[D], h = 0; h < f; h++) e[t](h)
                    } else e = lp(a);
                else e = g;
                for (var f = Yp(a), h = f[D], j = 0; j < h; j++) b[I](c, f[j], e && e[j], a)
            }
        };

        function $p(a, b) {
            this.na = {};
            this.C = [];
            var c = arguments[D];
            if (1 < c) {
                c % 2 && d(r("Uneven number of arguments"));
                for (var e = 0; e < c; e += 2) this.set(arguments[e], arguments[e + 1])
            } else a && this.Pj(a)
        }
        L = $p[F];
        L.o = 0;
        L.yb = 0;
        L.Ma = function() {
            this.yd();
            for (var a = [], b = 0; b < this.C[D]; b++) a[t](this.na[this.C[b]]);
            return a
        };
        L.Kb = function() {
            this.yd();
            return this.C[ib]()
        };
        L.Xb = function(a) {
            return aq(this.na, a)
        };
        L.clear = function() {
            this.na = {};
            Ha(this.C, 0);
            this.yb = this.o = 0
        };
        L.remove = function(a) {
            return aq(this.na, a) ? (delete this.na[a], this.o--, this.yb++, this.C[D] > 2 * this.o && this.yd(), i) : l
        };
        L.yd = function() {
            if (this.o != this.C[D]) {
                for (var a = 0, b = 0; a < this.C[D];) {
                    var c = this.C[a];
                    aq(this.na, c) && (this.C[b++] = c);
                    a++
                }
                Ha(this.C, b)
            }
            if (this.o != this.C[D]) {
                for (var e = {}, b = a = 0; a < this.C[D];) c = this.C[a], aq(e, c) || (this.C[b++] = c, e[c] = 1), a++;
                Ha(this.C, b)
            }
        };
        L.get = function(a, b) {
            return aq(this.na, a) ? this.na[a] : b
        };
        L.set = function(a, b) {
            aq(this.na, a) || (this.o++, this.C[t](a), this.yb++);
            this.na[a] = b
        };
        L.Pj = function(a) {
            var b;
            a instanceof $p ? (b = a.Kb(), a = a.Ma()) : (b = lp(a), a = kp(a));
            for (var c = 0; c < b[D]; c++) this.set(b[c], a[c])
        };
        Na(L, function() {
            return new $p(this)
        });
        L.Gh = function(a) {
            this.yd();
            var b = 0,
                c = this.C,
                e = this.na,
                f = this.yb,
                h = this,
                j = new Xp;
            La(j, function() {
                for (;;) {
                    f != h.yb && d(r("The map has changed since the iterator was created"));
                    b >= c[D] && d(Wp);
                    var j = c[b++];
                    return a ? j : e[j]
                }
            });
            return j
        };

        function aq(a, b) {
            return da[F][Tc][I](a, b)
        };

        function bq() {}
        bq[F].kc = l;
        bq[F].U = function() {
            this.kc || (this.kc = i, this.j())
        };
        bq[F].j = function() {
            this.Ck && cq[xd](k, this.Ck);
            if (this.Fh)
                for (; this.Fh[D];) this.Fh.shift()()
        };

        function dq(a) {
            a && typeof a.U == Wi && a.U()
        }

        function cq(a) {
            for (var b = 0, c = arguments[D]; b < c; ++b) {
                var e = arguments[b];
                rn(e) ? cq[xd](k, e) : dq(e)
            }
        };

        function eq(a) {
            eq[Rd](a);
            return a
        }
        eq[Rd] = mn;
        var fq = !Q || Wo(9),
            gq = !Q || Wo(9),
            hq = Q && !Uo("9");
        !Ho || Uo(vf);
        Go && Uo("1.9b") || Q && Uo(yf) || Fo && Uo("9.5") || Ho && Uo(vf);
        Go && !Uo(yf) || Q && Uo("9");

        function iq(a, b) {
            za(this, a);
            Oa(this, b);
            ra(this, this[$c])
        }
        L = iq[F];
        L.j = function() {};
        L.U = function() {};
        L.Jb = l;
        L.defaultPrevented = l;
        L.Dd = i;
        L.stopPropagation = function() {
            this.Jb = i
        };
        L.preventDefault = function() {
            this.defaultPrevented = i;
            this.Dd = l
        };

        function jq(a) {
            a[pb]()
        };

        function kq(a, b) {
            a && this.Ib(a, b)
        }
        P(kq, iq);
        var lq = [1, 4, 2];
        L = kq[F];
        Oa(L, k);
        L.relatedTarget = k;
        L.offsetX = 0;
        L.offsetY = 0;
        Ca(L, 0);
        Da(L, 0);
        ta(L, 0);
        va(L, 0);
        L.button = 0;
        wa(L, 0);
        L.charCode = 0;
        L.ctrlKey = l;
        Ga(L, l);
        L.shiftKey = l;
        L.metaKey = l;
        L.Qe = l;
        L.V = k;
        L.Ib = function(a, b) {
            var c = za(this, a[B]);
            iq[I](this, c);
            Oa(this, a[$c] || a.srcElement);
            ra(this, b);
            var e = a[Za];
            if (e) {
                if (Go) {
                    var f;
                    a: {
                        try {
                            eq(e[wb]);
                            f = i;
                            break a
                        } catch (h) {}
                        f = l
                    }
                    f || (e = k)
                }
            } else c == Tk ? e = a.fromElement : c == Sk && (e = a.toElement);
            this.relatedTarget = e;
            this.offsetX = Ho || a.offsetX !== g ? a.offsetX : a.layerX;
            this.offsetY = Ho || a.offsetY !== g ? a.offsetY : a.layerY;
            Ca(this, a[mc] !== g ? a[mc] : a.pageX);
            Da(this, a[nc] !== g ? a[nc] : a.pageY);
            ta(this, a[yb] || 0);
            va(this, a[zb] || 0);
            this.button = a.button;
            wa(this, a[Mb] || 0);
            this.charCode =
                a[Fb] || (c == yk ? a[Mb] : 0);
            this.ctrlKey = a[Ic];
            Ga(this, a[tc]);
            this.shiftKey = a[yd];
            this.metaKey = a[sb];
            this.Qe = Ao ? a[sb] : a[Ic];
            this.state = a.state;
            this.V = a;
            a.defaultPrevented && this[pb]();
            delete this.Jb
        };
        L.Nk = function(a) {
            return fq ? this.V.button == a : this[B] == ei ? 0 == a : !!(this.V.button & lq[a])
        };
        L.ge = function() {
            return this.Nk(0) && !(Ho && Ao && this[Ic])
        };
        L.stopPropagation = function() {
            kq.b[Nc][I](this);
            this.V[Nc] ? this.V[Nc]() : this.V.cancelBubble = i
        };
        L.preventDefault = function() {
            kq.b[pb][I](this);
            var a = this.V;
            if (a[pb]) a[pb]();
            else if (a.returnValue = l, hq) try {
                (a[Ic] || 112 <= a[Mb] && 123 >= a[Mb]) && wa(a, -1)
            } catch (b) {}
        };
        L.oj = function() {
            return this.V
        };
        L.j = function() {};

        function mq() {}
        var nq = 0;
        L = mq[F];
        L.key = 0;
        L.Ab = l;
        L.kf = l;
        L.Ib = function(a, b, c, e, f, h) {
            wn(a) ? this.eh = i : a && a[Wb] && wn(a[Wb]) ? this.eh = l : d(r(tg));
            this.$b = a;
            this.Jg = b;
            this.src = c;
            za(this, e);
            this.capture = !!f;
            this.qd = h;
            this.kf = l;
            this.key = ++nq;
            this.Ab = l
        };
        xa(L, function(a) {
            return this.eh ? this.$b[I](this.qd || this.src, a) : this.$b[Wb][I](this.$b, a)
        });
        var oq = {},
            pq = {},
            qq = {},
            rq = {};

        function sq(a, b, c, e, f) {
            if (b) {
                if (qn(b)) {
                    for (var h = 0; h < b[D]; h++) sq(a, b[h], c, e, f);
                    return k
                }
                var e = !!e,
                    j = pq;
                b in j || (j[b] = {
                    o: 0,
                    ga: 0
                });
                j = j[b];
                e in j || (j[e] = {
                    o: 0,
                    ga: 0
                }, j.o++);
                var j = j[e],
                    p = xn(a),
                    s;
                j.ga++;
                if (j[p]) {
                    s = j[p];
                    for (h = 0; h < s[D]; h++)
                        if (j = s[h], j.$b == c && j.qd == f) {
                            if (j.Ab) break;
                            return s[h].key
                        }
                } else s = j[p] = [], j.o++;
                var x = tq,
                    z = gq ? function(a) {
                        return x[I](z.src, z.key, a)
                    } : function(a) {
                        a = x[I](z.src, z.key, a);
                        if (!a) return a
                    },
                    h = z;
                h.src = a;
                j = new mq;
                j.Ib(c, h, a, b, e, f);
                c = j.key;
                h.key = c;
                s[t](j);
                oq[c] = j;
                qq[p] || (qq[p] = []);
                qq[p][t](j);
                a.addEventListener ? (a == M || !a.Eg) && a.addEventListener(b, h, e) : a.attachEvent(b in rq ? rq[b] : rq[b] = fl + b, h);
                return c
            }
            d(r("Invalid event type"))
        }

        function uq(a, b, c, e, f) {
            if (qn(b)) {
                for (var h = 0; h < b[D]; h++) uq(a, b[h], c, e, f);
                return k
            }
            a = sq(a, b, c, e, f);
            oq[a].kf = i;
            return a
        }

        function vq(a, b, c, e, f) {
            if (qn(b)) {
                for (var h = 0; h < b[D]; h++) vq(a, b[h], c, e, f);
                return k
            }
            e = !!e;
            a = wq(a, b, e);
            if (!a) return l;
            for (h = 0; h < a[D]; h++)
                if (a[h].$b == c && a[h][ub] == e && a[h].qd == f) return xq(a[h].key);
            return l
        }

        function xq(a) {
            if (!oq[a]) return l;
            var b = oq[a];
            if (b.Ab) return l;
            var c = b.src,
                e = b[B],
                f = b.Jg,
                h = b[ub];
            c.removeEventListener ? (c == M || !c.Eg) && c.removeEventListener(e, f, h) : c.detachEvent && c.detachEvent(e in rq ? rq[e] : rq[e] = fl + e, f);
            c = xn(c);
            qq[c] && (f = qq[c], lo(f, b), 0 == f[D] && delete qq[c]);
            b.Ab = i;
            if (b = pq[e][h][c]) b.Sg = i, yq(e, h, c, b);
            delete oq[a];
            return i
        }

        function yq(a, b, c, e) {
            if (!e.Cd && e.Sg) {
                for (var f = 0, h = 0; f < e[D]; f++) e[f].Ab ? e[f].Jg.src = k : (f != h && (e[h] = e[f]), h++);
                Ha(e, h);
                e.Sg = l;
                0 == h && (delete pq[a][b][c], pq[a][b].o--, 0 == pq[a][b].o && (delete pq[a][b], pq[a].o--), 0 == pq[a].o && delete pq[a])
            }
        }

        function zq(a, b, c) {
            var e = 0,
                f = b == k,
                h = c == k,
                c = !!c;
            if (a == k) {
                var a = function(a) {
                        for (var j = a[D] - 1; 0 <= j; j--) {
                            var p = a[j];
                            if ((f || b == p[B]) && (h || c == p[ub])) xq(p.key), e++
                        }
                    },
                    j;
                for (j in qq) a[I](g, qq[j], j, qq)
            } else if (j = xn(a), qq[j]) {
                j = qq[j];
                for (a = j[D] - 1; 0 <= a; a--) {
                    var p = j[a];
                    if ((f || b == p[B]) && (h || c == p[ub])) xq(p.key), e++
                }
            }
            return e
        }

        function wq(a, b, c) {
            var e = pq;
            return b in e && (e = e[b], c in e && (e = e[c], a = xn(a), e[a])) ? e[a] : k
        }

        function Aq(a, b, c, e, f) {
            var h = 1,
                b = xn(b);
            if (a[b]) {
                a.ga--;
                a = a[b];
                a.Cd ? a.Cd++ : a.Cd = 1;
                try {
                    for (var j = a[D], p = 0; p < j; p++) {
                        var s = a[p];
                        s && !s.Ab && (h &= Bq(s, f) !== l)
                    }
                } finally {
                    a.Cd--, yq(c, e, b, a)
                }
            }
            return Boolean(h)
        }

        function Bq(a, b) {
            a.kf && xq(a.key);
            return a[Wb](b)
        }

        function Cq(a, b) {
            var c = b[B] || b,
                e = pq;
            if (!(c in e)) return i;
            if (O(b)) b = new iq(b, a);
            else if (b instanceof iq) Oa(b, b[$c] || a);
            else {
                var f = b,
                    b = new iq(c, a);
                qp(b, f)
            }
            var f = 1,
                h, e = e[c],
                c = i in e,
                j;
            if (c) {
                h = [];
                for (j = a; j; j = j.cd) h[t](j);
                j = e[i];
                j.ga = j.o;
                for (var p = h[D] - 1; !b.Jb && 0 <= p && j.ga; p--) ra(b, h[p]), f &= Aq(j, h[p], b[B], i, b) && b.Dd != l
            }
            if (l in e)
                if (j = e[l], j.ga = j.o, c)
                    for (p = 0; !b.Jb && p < h[D] && j.ga; p++) ra(b, h[p]), f &= Aq(j, h[p], b[B], l, b) && b.Dd != l;
                else
                    for (e = a; !b.Jb && e && j.ga; e = e.cd) ra(b, e), f &= Aq(j, e, b[B], l, b) && b.Dd != l;
            return Boolean(f)
        }

        function tq(a, b) {
            if (!oq[a]) return i;
            var c = oq[a],
                e = c[B],
                f = pq;
            if (!(e in f)) return i;
            var f = f[e],
                h, j;
            if (!gq) {
                h = b || ln($m);
                var p = i in f,
                    s = l in f;
                if (p) {
                    if (0 > h[Mb] || h.returnValue != g) return i;
                    a: {
                        var x = l;
                        if (0 == h[Mb]) try {
                            wa(h, -1);
                            break a
                        } catch (z) {
                            x = i
                        }
                        if (x || h.returnValue == g) h.returnValue = i
                    }
                }
                x = new kq;
                x.Ib(h, this);
                h = i;
                try {
                    if (p) {
                        for (var E = [], ea = x.currentTarget; ea; ea = ea[Fd]) E[t](ea);
                        j = f[i];
                        j.ga = j.o;
                        for (var ba = E[D] - 1; !x.Jb && 0 <= ba && j.ga; ba--) ra(x, E[ba]), h &= Aq(j, E[ba], e, i, x);
                        if (s) {
                            j = f[l];
                            j.ga = j.o;
                            for (ba = 0; !x.Jb && ba <
                                E[D] && j.ga; ba++) ra(x, E[ba]), h &= Aq(j, E[ba], e, l, x)
                        }
                    } else h = Bq(c, x)
                } finally {
                    E && Ha(E, 0)
                }
                return h
            }
            e = new kq(b, this);
            return h = Bq(c, e)
        };

        function Dq() {}
        P(Dq, bq);
        L = Dq[F];
        L.Eg = i;
        L.cd = k;
        L.Ke = function(a) {
            this.cd = a
        };
        L.addEventListener = function(a, b, c, e) {
            sq(this, a, b, c, e)
        };
        L.removeEventListener = function(a, b, c, e) {
            vq(this, a, b, c, e)
        };
        L.dispatchEvent = function(a) {
            return Cq(this, a)
        };
        L.j = function() {
            Dq.b.j[I](this);
            zq(this);
            this.cd = k
        };

        function Eq(a, b) {
            this.Fd = a || 1;
            this.zc = b || Fq;
            this.Ye = Dn(this.ak, this);
            this.Ze = Fn()
        }
        P(Eq, Dq);
        Eq[F].enabled = l;
        var Fq = M.window;
        L = Eq[F];
        L.$ = k;
        L.ak = function() {
            if (this.enabled) {
                var a = Fn() - this.Ze;
                0 < a && a < 0.8 * this.Fd ? this.$ = this.zc[Fc](this.Ye, this.Fd - a) : (this.Qj(), this.enabled && (this.$ = this.zc[Fc](this.Ye, this.Fd), this.Ze = Fn()))
            }
        };
        L.Qj = function() {
            this[y](ym)
        };
        L.start = function() {
            this.enabled = i;
            this.$ || (this.$ = this.zc[Fc](this.Ye, this.Fd), this.Ze = Fn())
        };
        L.stop = function() {
            this.enabled = l;
            this.$ && (this.zc[$a](this.$), this.$ = k)
        };
        L.j = function() {
            Eq.b.j[I](this);
            this[rc]();
            delete this.zc
        };

        function Gq() {}
        Gq[F].Eh = k;
        Gq[F].getOptions = function() {
            return this.Eh || (this.Eh = this.Ek())
        };
        var Hq;

        function Iq() {}
        P(Iq, Gq);
        Iq[F].zh = function() {
            var a = this.Ih();
            return a ? new ActiveXObject(a) : new XMLHttpRequest
        };
        Iq[F].Ek = function() {
            var a = {};
            this.Ih() && (a[0] = i, a[1] = i);
            return a
        };
        Iq[F].Ih = function() {
            if (!this.Kh && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var a = [Bg, Ag, zg, Cg], b = 0; b < a[D]; b++) {
                    var c = a[b];
                    try {
                        return new ActiveXObject(c), this.Kh = c
                    } catch (e) {}
                }
                d(r("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
            }
            return this.Kh
        };
        Hq = new Iq;

        function Jq(a) {
            this.headers = new $p;
            this.rd = a || k
        }
        P(Jq, Dq);
        var Kq = /^https?$/i,
            Lq = [];

        function Mq(a) {
            a.U();
            lo(Lq, a)
        }
        L = Jq[F];
        L.Sa = l;
        L.s = k;
        L.nd = k;
        L.mg = K;
        L.wb = K;
        L.De = l;
        L.ed = l;
        L.ye = l;
        L.tb = l;
        L.sd = 0;
        L.Hb = k;
        L.ng = K;
        L.zi = l;
        L.Xk = function(a) {
            this.sd = q.max(0, a)
        };
        L.send = function(a, b, c, e) {
            this.s && d(r("[goog.net.XhrIo] Object is active with another request"));
            b = b ? b.toUpperCase() : jg;
            this.mg = a;
            this.wb = K;
            this.De = l;
            this.Sa = i;
            this.s = this.xi();
            this.nd = this.rd ? this.rd[gb]() : Hq[gb]();
            this.s.onreadystatechange = Dn(this.Yf, this);
            try {
                this.ye = i, this.s[Xa](b, a, i), this.ye = l
            } catch (f) {
                this.lg(5, f);
                return
            }
            var a = c || K,
                h = this.headers[Yc]();
            e && Zp(e, function(a, b) {
                h.set(b, a)
            });
            e = M.FormData && a instanceof M.FormData;
            b == Kg && (!h.Xb($f) && !e) && h.set($f, Ah);
            Zp(h, function(a, b) {
                this.s.setRequestHeader(b,
                    a)
            }, this);
            this.ng && (this.s.responseType = this.ng);
            an in this.s && (this.s.withCredentials = this.zi);
            try {
                this.Hb && (Fq[$a](this.Hb), this.Hb = k), 0 < this.sd && (this.Hb = Fq[Fc](Dn(this.yi, this), this.sd)), this.ed = i, this.s[Cb](a), this.ed = l
            } catch (j) {
                this.lg(5, j)
            }
        };
        L.xi = function() {
            return this.rd ? this.rd.zh() : Hq.zh()
        };
        L.yi = function() {
            "undefined" != typeof kn && this.s && (this.wb = Zg + this.sd + Vk, this[y](Am), this[Ec](8))
        };
        L.lg = function(a, b) {
            this.Sa = l;
            this.s && (this.tb = i, this.s[Ec](), this.tb = l);
            this.wb = b;
            this.sg();
            this.Zc()
        };
        L.sg = function() {
            this.De || (this.De = i, this[y](ii), this[y](Mi))
        };
        L.abort = function() {
            this.s && this.Sa && (this.Sa = l, this.tb = i, this.s[Ec](), this.tb = l, this[y](ii), this[y](rh), this.Zc())
        };
        L.j = function() {
            this.s && (this.Sa && (this.Sa = l, this.tb = i, this.s[Ec](), this.tb = l), this.Zc(i));
            Jq.b.j[I](this)
        };
        L.Yf = function() {
            !this.ye && !this.ed && !this.tb ? this.mf() : this.ih()
        };
        L.mf = function() {
            this.ih()
        };
        L.ih = function() {
            if (this.Sa && "undefined" != typeof kn && (!this.nd[1] || !(4 == this.Gc() && 2 == this.Ue())))
                if (this.ed && 4 == this.Gc()) Fq[Fc](Dn(this.Yf, this), 0);
                else if (this[y](El), this.sj()) {
                this.Sa = l;
                try {
                    this.Lg() ? (this[y](ii), this[y](pm)) : (this.wb = this.qj() + Sd + this.Ue() + nh, this.sg())
                } finally {
                    this.Zc()
                }
            }
        };
        L.Zc = function(a) {
            if (this.s) {
                var b = this.s,
                    c = this.nd[0] ? mn : k;
                this.nd = this.s = k;
                this.Hb && (Fq[$a](this.Hb), this.Hb = k);
                a || this[y](Dl);
                try {
                    b.onreadystatechange = c
                } catch (e) {}
            }
        };
        L.va = function() {
            return !!this.s
        };
        L.sj = function() {
            return 4 == this.Gc()
        };
        L.Lg = function() {
            var a = this.Ue(),
                b;
            a: switch (a) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    b = i;
                    break a;
                default:
                    b = l
            }
            return b || 0 === a && !this.zk()
        };
        L.zk = function() {
            var a = Yo(ma(this.mg))[1] || k;
            !a && self[Pc] && (a = self[Pc].protocol, a = a.substr(0, a[D] - 1));
            return Kq[Ya](a ? a[Md]() : K)
        };
        L.Gc = function() {
            return this.s ? this.s.readyState : 0
        };
        L.Ue = function() {
            try {
                return 2 < this.Gc() ? this.s.status : -1
            } catch (a) {
                return -1
            }
        };
        L.qj = function() {
            try {
                return 2 < this.Gc() ? this.s.statusText : K
            } catch (a) {
                return K
            }
        };
        L.uk = function() {
            try {
                return this.s ? this.s.responseText : K
            } catch (a) {
                return K
            }
        };
        L.tk = function() {
            return O(this.wb) ? this.wb : ma(this.wb)
        };
        Jq.send = function(a, b, c, e, f, h) {
            var j = new Jq;
            Lq[t](j);
            b && sq(j, ii, b);
            sq(j, Dl, En(Mq, j));
            h && j.Xk(h);
            j[Cb](a, c, e, f)
        };
        Jq.ol = function() {
            for (; Lq[D];) Lq.pop().U()
        };
        Jq.ql = function(a) {
            Jq[F].mf = a.Zk(Jq[F].mf)
        };
        Jq.pl = Mq;
        Jq.bl = $f;
        Jq.el = Ah;
        Jq.rl = Lq;

        function Nq(a, b) {
            var c;
            a instanceof Nq ? (this.ca = pn(b) ? b : a.ca, this.ld(a.Ya), this.we(a.yc), this.ue(a.wc), this.kd(a.vb), this.jd(a.Xa), this.pd(a.fa[Yc]()), this.ve(a.xc)) : a && (c = Yo(ma(a))) ? (this.ca = !!b, this.ld(c[1] || K, i), this.we(c[2] || K, i), this.ue(c[3] || K, i), this.kd(c[4]), this.jd(c[5] || K, i), this.pd(c[6] || K, i), this.ve(c[7] || K, i)) : (this.ca = !!b, this.fa = new Oq(k, k, this.ca))
        }
        L = Nq[F];
        L.Ya = K;
        L.yc = K;
        L.wc = K;
        L.vb = k;
        L.Xa = K;
        L.xc = K;
        L.Ok = l;
        L.ca = l;
        L.toString = function() {
            var a = [],
                b = this.Ya;
            b && a[t](Pq(b, Qq), zf);
            if (b = this.wc) {
                a[t](ff);
                var c = this.yc;
                c && a[t](Pq(c, Qq), Kf);
                a[t](aa(ma(b)));
                b = this.vb;
                b != k && a[t](zf, ma(b))
            }
            if (b = this.Xa) this.Be() && b[jb](0) != df && a[t](df), a[t](Pq(b, b[jb](0) == df ? Rq : Sq));
            (b = this.Tg()) && a[t](Jf, b);
            (b = this.xc) && a[t](be, Pq(b, Tq));
            return a[Jd](K)
        };
        L.Nj = function(a) {
            var b = this[Yc](),
                c = a.Fi();
            c ? b.ld(a.Ya) : c = a.Gi();
            c ? b.we(a.yc) : c = a.Be();
            c ? b.ue(a.wc) : c = a.Di();
            var e = a.Xa;
            if (c) b.kd(a.vb);
            else if (c = a.pg()) {
                if (e[jb](0) != df)
                    if (this.Be() && !this.pg()) e = df + e;
                    else {
                        var f = b.Xa[gd](df); - 1 != f && (e = b.Xa.substr(0, f + 1) + e)
                    }
                f = e;
                if (f == af || f == $e) e = K;
                else if (-1 == f[w](bf) && -1 == f[w](ef)) e = f;
                else {
                    for (var e = 0 == f[gd](df, 0), f = f[Jc](df), h = [], j = 0; j < f[D];) {
                        var p = f[j++];
                        p == $e ? e && j == f[D] && h[t](K) : p == af ? ((1 < h[D] || 1 == h[D] && h[0] != K) && h.pop(), e && j == f[D] && h[t](K)) : (h[t](p), e = i)
                    }
                    e = h[Jd](df)
                }
            }
            c ?
                b.jd(e) : c = a.Ei();
            c ? b.pd(a.Bi()) : c = a.Ci();
            c && b.ve(a.xc);
            return b
        };
        Na(L, function() {
            return new Nq(this)
        });
        L.ld = function(a, b) {
            this.La();
            if (this.Ya = b ? a ? na(a) : K : a) this.Ya = this.Ya[v](/:$/, K);
            return this
        };
        L.Fi = function() {
            return !!this.Ya
        };
        L.we = function(a, b) {
            this.La();
            this.yc = b ? a ? na(a) : K : a;
            return this
        };
        L.Gi = function() {
            return !!this.yc
        };
        L.ue = function(a, b) {
            this.La();
            this.wc = b ? a ? na(a) : K : a;
            return this
        };
        L.Be = function() {
            return !!this.wc
        };
        L.kd = function(a) {
            this.La();
            a ? (a = ja(a), (ha(a) || 0 > a) && d(r("Bad port number " + a)), this.vb = a) : this.vb = k;
            return this
        };
        L.Di = function() {
            return this.vb != k
        };
        L.jd = function(a, b) {
            this.La();
            this.Xa = b ? a ? na(a) : K : a;
            return this
        };
        L.pg = function() {
            return !!this.Xa
        };
        L.Ei = function() {
            return this.fa[sc]() !== K
        };
        L.pd = function(a, b) {
            this.La();
            a instanceof Oq ? (this.fa = a, this.fa.df(this.ca)) : (b || (a = Pq(a, Uq)), this.fa = new Oq(a, k, this.ca));
            return this
        };
        L.setQuery = function(a, b) {
            return this.pd(a, b)
        };
        L.Tg = function() {
            return this.fa[sc]()
        };
        L.Bi = function() {
            return this.fa.jk()
        };
        L.getQuery = function() {
            return this.Tg()
        };
        L.hd = function(a, b) {
            this.La();
            this.fa.set(a, b);
            return this
        };
        L.jh = function(a) {
            return this.fa.get(a)
        };
        L.ve = function(a, b) {
            this.La();
            this.xc = b ? a ? na(a) : K : a;
            return this
        };
        L.Ci = function() {
            return !!this.xc
        };
        L.Fj = function() {
            this.La();
            this.hd(dn, q[eb](2147483648 * q.random())[sc](36) + q.abs(q[eb](2147483648 * q.random()) ^ Fn())[sc](36));
            return this
        };
        L.La = function() {
            this.Ok && d(r("Tried to modify a read-only Uri"))
        };
        L.df = function(a) {
            this.ca = a;
            this.fa && this.fa.df(a);
            return this
        };

        function Pq(a, b) {
            return O(a) ? encodeURI(a)[v](b, Vq) : k
        }

        function Vq(a) {
            a = a[od](0);
            return de + (a >> 4 & 15)[sc](16) + (a & 15)[sc](16)
        }
        var Qq = /[#\/\?@]/g,
            Sq = /[\#\?:]/g,
            Rq = /[\#\?]/g,
            Uq = /[\#\?@]/g,
            Tq = /#/g;

        function Oq(a, b, c) {
            this.ab = a || k;
            this.ca = !!c
        }
        L = Oq[F];
        L.Bb = function() {
            if (!this.B && (this.B = new $p, this.o = 0, this.ab))
                for (var a = this.ab[Jc](ge), b = 0; b < a[D]; b++) {
                    var c = a[b][w](Hf),
                        e = k,
                        f = k;
                    0 <= c ? (e = a[b][ud](0, c), f = a[b][ud](c + 1)) : e = a[b];
                    e = na(e[v](/\+/g, Rd));
                    e = this.Gb(e);
                    this.add(e, f ? na(f[v](/\+/g, Rd)) : K)
                }
        };
        L.B = k;
        L.o = k;
        L.add = function(a, b) {
            this.Bb();
            this.fc();
            var a = this.Gb(a),
                c = this.B.get(a);
            c || this.B.set(a, c = []);
            c[t](b);
            this.o++;
            return this
        };
        L.remove = function(a) {
            this.Bb();
            a = this.Gb(a);
            return this.B.Xb(a) ? (this.fc(), this.o -= this.B.get(a)[D], this.B.remove(a)) : l
        };
        L.clear = function() {
            this.fc();
            this.B = k;
            this.o = 0
        };
        L.Xb = function(a) {
            this.Bb();
            a = this.Gb(a);
            return this.B.Xb(a)
        };
        L.Kb = function() {
            this.Bb();
            for (var a = this.B.Ma(), b = this.B.Kb(), c = [], e = 0; e < b[D]; e++)
                for (var f = a[e], h = 0; h < f[D]; h++) c[t](b[e]);
            return c
        };
        L.Ma = function(a) {
            this.Bb();
            var b = [];
            if (a) this.Xb(a) && (b = mo(b, this.B.get(this.Gb(a))));
            else
                for (var a = this.B.Ma(), c = 0; c < a[D]; c++) b = mo(b, a[c]);
            return b
        };
        L.set = function(a, b) {
            this.Bb();
            this.fc();
            a = this.Gb(a);
            this.Xb(a) && (this.o -= this.B.get(a)[D]);
            this.B.set(a, [b]);
            this.o++;
            return this
        };
        L.get = function(a, b) {
            var c = a ? this.Ma(a) : [];
            return 0 < c[D] ? ma(c[0]) : b
        };
        L.Bj = function(a, b) {
            this.remove(a);
            0 < b[D] && (this.fc(), this.B.set(this.Gb(a), no(b)), this.o += b[D])
        };
        L.toString = function() {
            if (this.ab) return this.ab;
            if (!this.B) return K;
            for (var a = [], b = this.B.Kb(), c = 0; c < b[D]; c++)
                for (var e = b[c], f = aa(ma(e)), e = this.Ma(e), h = 0; h < e[D]; h++) {
                    var j = f;
                    e[h] !== K && (j += Hf + aa(ma(e[h])));
                    a[t](j)
                }
            return this.ab = a[Jd](ge)
        };
        L.jk = function() {
            return this[sc]() ? na(this[sc]()) : K
        };
        L.fc = function() {
            this.ab = k
        };
        Na(L, function() {
            var a = new Oq;
            a.ab = this.ab;
            this.B && (a.B = this.B[Yc]());
            return a
        });
        L.Gb = function(a) {
            a = ma(a);
            this.ca && (a = a[Md]());
            return a
        };
        L.df = function(a) {
            a && !this.ca && (this.Bb(), this.fc(), Zp(this.B, function(a, c) {
                var e = c[Md]();
                c != e && (this.remove(c), this.Bj(e, a))
            }, this));
            this.ca = a
        };
        L.extend = function(a) {
            for (var b = 0; b < arguments[D]; b++) Zp(arguments[b], function(a, b) {
                this.add(b, a)
            }, this)
        };

        function Wq(a) {
            var b = {};
            if (on(a) == el && !sn(a)) {
                b.v = "undefined" == typeof a.v ? k : a.v;
                var c = typeof a.f;
                "undefined" == c || c == bl ? b.f = k : c == lm ? b.f = a.f : d(r("Formatted value ('f'), if specified, must be a string."));
                c = typeof a.p;
                c == el ? b.p = a.p : c != bl && "undefined" != c && d(r("Properties ('p'), if specified, must be an Object."))
            } else b.v = a != k ? a : k, b.f = k;
            return {
                v: b.v,
                f: b.f,
                p: b.p
            }
        }

        function Xq(a, b, c) {
            (typeof b != el || !(gi in b)) && d(r(c + ' must have a property "column"'));
            ui in b && typeof b.desc != Kh && d(r('Property "desc" in ' + c + " must be boolean."));
            R(a, b.column)
        }

        function Yq(a, b) {
            if (typeof b == cl) return R(a, b), [{
                column: b
            }];
            if (typeof b == el) {
                if (rn(b)) {
                    1 > b[D] && d(r("sortColumns is an empty array. Must have at least one element."));
                    var c = {};
                    if (typeof b[0] == el) {
                        for (var e = 0; e < b[D]; e++) {
                            Xq(a, b[e], fm + e + nh);
                            var f = b[e].column;
                            f in c && d(r(Yf + f + Ud));
                            c[f] = i
                        }
                        return b
                    }
                    if (typeof b[0] == cl) {
                        for (var h = [], e = 0; e < b[D]; e++) R(a, b[e]), b[e] in c && d(r(Yf + f + Ud)), c[f] = i, h[t]({
                            column: b[e]
                        });
                        return h
                    }
                    d(r("sortColumns is an array, but neither of objects nor of numbers. Must be either of those."))
                }
                Xq(a,
                    b, em);
                return [b]
            }
        }

        function Zq(a, b) {
            var c = a[xc]();
            0 < c ? (q[eb](b) !== b || 0 > b || b >= c) && d(r("Invalid row index " + b + ". Should be in the range [0-" + (c - 1) + "].")) : d(r("Table has no rows."))
        }

        function R(a, b) {
            var c = a[mb]();
            0 < c ? (q[eb](b) !== b || 0 > b || b >= c) && d(r("Invalid column index " + b + ". Should be an integer in the range [0-" + (c - 1) + "].")) : d(r("Table has no columns."))
        }

        function $q(a, b, c) {
            a = a[Nb](b);
            ar(c, a) || d(r(bh + c + Td + a + " in column index " + b))
        }

        function ar(a, b) {
            if (a == k) return i;
            var c = typeof a;
            switch (b) {
                case cl:
                    if (c == cl) return i;
                    break;
                case lm:
                    if (c == lm) return i;
                    break;
                case Kh:
                    if (c == Kh) return i;
                    break;
                case qi:
                case ri:
                    if (sn(a)) return i;
                    break;
                case zm:
                    if (rn(a) && 2 < a[D] && 5 > a[D]) {
                        for (var c = i, e = 0; e < a[D]; e++) {
                            var f = a[e];
                            if (typeof f != cl || f != q[eb](f)) {
                                c = l;
                                break
                            }
                        }
                        if (0 > a[0] || 23 < a[0] || 0 > a[1] || 59 < a[1] || 0 > a[2] || 59 < a[2]) c = l;
                        if (4 == a[D] && (0 > a[3] || 999 < a[3])) c = l;
                        if (c) return i
                    }
            }
            return l
        }

        function br(a, b, c) {
            if (b == k) return c == k ? 0 : -1;
            if (c == k) return 1;
            switch (a) {
                case Kh:
                case cl:
                case lm:
                case qi:
                case ri:
                    return b < c ? -1 : c < b ? 1 : 0;
                case zm:
                    for (a = 0; 3 > a; a++) {
                        if (b[a] < c[a]) return -1;
                        if (c[a] < b[a]) return 1
                    }
                    b = 4 > b[D] ? 0 : b[3];
                    c = 4 > c[D] ? 0 : c[3];
                    return b < c ? -1 : c < b ? 1 : 0
            }
        }

        function cr(a, b) {
            R(a, b);
            var c = a[Nb](b),
                e = k,
                f = k,
                h, j, p = a[xc]();
            for (h = 0; h < p; h++)
                if (j = a[C](h, b), j != k) {
                    f = e = j;
                    break
                }
            if (e == k) return {
                min: k,
                max: k
            };
            for (h++; h < p; h++) j = a[C](h, b), j != k && (0 > br(c, j, e) ? e = j : 0 > br(c, f, j) && (f = j));
            return {
                min: e,
                max: f
            }
        }

        function dr(a, b) {
            for (var b = Yq(a, b), c = [], e = a[xc](), f = 0; f < e; f++) c[t](f);
            ro(c, function(c, e) {
                for (var f = 0; f < b[D]; f++) {
                    var s = b[f],
                        x = s.column,
                        x = br(a[Nb](x), a[C](c, x), a[C](e, x));
                    if (0 != x) return x * (s.desc ? -1 : 1)
                }
                return 0
            });
            return c
        }

        function er(a, b) {
            R(a, b);
            var c = a[xc]();
            if (0 == c) return [];
            for (var e = [], f = 0; f < c; ++f) e[t](a[C](f, b));
            var h = a[Nb](b);
            ro(e, function(a, b) {
                return br(h, a, b)
            });
            var c = e[0],
                j = [];
            j[t](c);
            for (f = 1; f < e[D]; f++) {
                var p = e[f];
                0 != br(h, p, c) && j[t](p);
                c = p
            }
            return j
        }

        function fr(a, b) {
            (!rn(b) || 0 == b[D]) && d(r("columnFilters must be a non-empty array"));
            for (var c = {}, e = 0; e < b[D]; e++) {
                if (typeof b[e] != el || !(gi in b[e])) Sm in b[e] || Nk in b[e] || Ik in b[e] ? Sm in b[e] && (Nk in b[e] || Ik in b[e]) && d(r(hi + e + '] must specify either "value" or range properties ("minValue" and/or "maxValue"')) : d(r(hi + e + '] must have properties "column" and "value", "minValue"or "maxValue"'));
                var f = b[e].column;
                f in c && d(r(Yf + f + " is duplicate in columnFilters."));
                R(a, f);
                $q(a, f, b[e][nb]);
                c[f] = i
            }
            c = [];
            e = a[xc]();
            for (f = 0; f < e; f++) {
                var h;
                a: {
                    h = a;
                    for (var j = b, p = f, s = 0; s < j[D]; s++) {
                        var x = j[s],
                            z = x.column,
                            E = h[C](p, z),
                            z = h[Nb](z);
                        if (x.minValue != k || x.maxValue != k) {
                            if (E == k || x.minValue != k && 0 > br(z, E, x.minValue) || x.maxValue != k && 0 < br(z, E, x.maxValue)) {
                                h = l;
                                break a
                            }
                        } else if (0 != br(z, E, x[nb])) {
                            h = l;
                            break a
                        }
                    }
                    h = i
                }
                h && c[t](f)
            }
            return c
        }

        function gr(a, b) {
            var c;
            b == zm ? (c = [], c[t](a[0]), c[t]((10 > a[1] ? mf : K) + a[1]), c[t]((10 > a[2] ? mf : K) + a[2]), c = c[Jd](zf), 3 < a[D] && 0 < a[3] && (c += $e + (10 > a[3] ? pf : 100 > a[3] ? mf : K) + a[3])) : b == qi ? (c = new google[G].DateFormat({
                formatType: Jk,
                valueType: qi
            }), c = c.formatValue(a)) : b == ri ? (c = new google[G].DateFormat({
                formatType: Jk,
                valueType: ri
            }), c = c.formatValue(a)) : c = a != k ? ma(a) : K;
            return c
        }

        function hr(a, b, c, e) {
            for (var f = k, h = a[xc]();
                (e ? 0 <= b : b < h) && f === k;) f = a[C](b, c), b += e ? -1 : 1;
            return f
        };

        function S(a, b) {
            this.yb = b ? b == nf ? nf : of : of ;
            if (a) {
                if (O(a)) a = Rn(a);
                else a: for (var c = a.cols || [], e = a[wd] || [], f = c[D], h = 0; h < f; h++) {
                    var j = c[h][B];
                    if (j == qi || j == ri)
                        for (var j = e[D], p = 0; p < j; p++) {
                            var s = e[p].c[h];
                            if (s) {
                                var x = s.v;
                                if (sn(x)) break a;
                                O(x) && (s = On(s), s = Rn(s), e[p].c[h] = s)
                            }
                        }
                }
                this.z = a.cols || [];
                this.D = a[wd] || [];
                this.Na = a.p || k
            } else this.z = [], this.D = [], this.Na = k;
            this.za = []
        }
        var ir = {
            al: Kh,
            gl: cl,
            il: lm,
            cl: qi,
            jl: zm,
            dl: ri
        };
        L = S[F];
        L.z = k;
        L.yb = k;
        L.D = k;
        L.Na = k;
        L.za = k;
        L.getNumberOfRows = function() {
            return this.D[D]
        };
        L.getNumberOfColumns = function() {
            return this.z[D]
        };
        Na(L, function() {
            return new S(this[Bc]())
        });
        L.getColumnId = function(a) {
            R(this, a);
            return this.z[a].id || K
        };
        L.getColumnIndex = function(a) {
            for (var b = this.z, c = 0; c < b[D]; c++)
                if (b[c].id == a) return c;
            return -1
        };
        L.getColumnLabel = function(a) {
            R(this, a);
            return this.z[a][Gd] || K
        };
        L.getColumnPattern = function(a) {
            R(this, a);
            return this.z[a].pattern
        };
        L.getColumnRole = function(a) {
            a = this[Kc](a, Ml);
            return a = O(a) ? a : K
        };
        L.getColumnType = function(a) {
            R(this, a);
            return this.z[a][B]
        };
        Ba(L, function(a, b) {
            Zq(this, a);
            R(this, b);
            var c = this.Ka(a, b),
                e = k;
            c && (e = c.v, e = pn(e) ? e : k);
            return e
        });
        L.Ka = function(a, b) {
            return this.D[a].c[b]
        };
        L.hk = function(a, b) {
            this.za[a] = this.za[a] || [];
            var c = this.za[a],
                e = c[b] || {};
            return c[b] = e
        };
        L.Vj = function(a, b) {
            var c = this.za[a];
            c && c[b] && (c[b] = {})
        };
        L.getFormattedValue = function(a, b) {
            Zq(this, a);
            R(this, b);
            var c = this.Ka(a, b),
                e = K;
            if (c)
                if ("undefined" != typeof c.f && c.f != k) e = c.f;
                else if (c = this.hk(a, b), pn(c.oh)) e = c.oh;
            else {
                var f = this[C](a, b);
                f === k || (e = gr(f, this[Nb](b)));
                c.oh = e
            }
            return e
        };
        L.getProperty = function(a, b, c) {
            Zq(this, a);
            R(this, b);
            return (a = (a = this.Ka(a, b)) && a.p) && c in a ? a[c] : k
        };
        L.getProperties = function(a, b) {
            Zq(this, a);
            R(this, b);
            var c = this.Ka(a, b);
            c || (c = {
                v: k,
                f: k
            }, this.D[a].c[b] = c);
            c.p || (c.p = {});
            return c.p
        };
        L.getTableProperties = function() {
            return this.Na
        };
        L.getTableProperty = function(a) {
            var b = this.Na;
            return b && a in b ? b[a] : k
        };
        L.setTableProperties = function(a) {
            this.Na = a
        };
        L.setTableProperty = function(a, b) {
            this.Na || (this.Na = {});
            this.Na[a] = b
        };
        Ia(L, function(a, b, c) {
            this[cc](a, b, c, g, g)
        });
        L.setFormattedValue = function(a, b, c) {
            this[cc](a, b, g, c, g)
        };
        L.setProperties = function(a, b, c) {
            this[cc](a, b, g, g, c)
        };
        L.setProperty = function(a, b, c, e) {
            this[zc](a, b)[c] = e
        };
        L.setCell = function(a, b, c, e, f) {
            Zq(this, a);
            R(this, b);
            this.Vj(a, b);
            var h = this.Ka(a, b);
            h || (h = {}, this.D[a].c[b] = h);
            "undefined" != typeof c && ($q(this, b, c), h.v = c);
            "undefined" != typeof e && (h.f = e);
            pn(f) && (h.p = tn(f) ? f : {})
        };
        L.setRowProperties = function(a, b) {
            Zq(this, a);
            this.D[a].p = b
        };
        L.setRowProperty = function(a, b, c) {
            this[Xb](a)[b] = c
        };
        L.getRowProperty = function(a, b) {
            Zq(this, a);
            var c = this.D[a];
            return (c = c && c.p) && b in c ? c[b] : k
        };
        L.getRowProperties = function(a) {
            Zq(this, a);
            a = this.D[a];
            a.p || (a.p = {});
            return a.p
        };
        L.setColumnLabel = function(a, b) {
            R(this, a);
            this.z[a].label = b
        };
        L.setColumnProperties = function(a, b) {
            R(this, a);
            this.z[a].p = b
        };
        L.setColumnProperty = function(a, b, c) {
            this[vb](a)[b] = c
        };
        L.getColumnProperty = function(a, b) {
            R(this, a);
            var c = this.z[a];
            return (c = c && c.p) && b in c ? c[b] : k
        };
        L.getColumnProperties = function(a) {
            R(this, a);
            a = this.z[a];
            a.p || (a.p = {});
            return a.p
        };
        L.insertColumn = function(a, b, c, e) {
            a !== this.z[D] && (this.za = [], R(this, a));
            tn(b) || (b = {
                id: e || K,
                label: c || K,
                pattern: K,
                type: b
            });
            c = b[B];
            mp(ir, c) || d(r("Invalid type: " + c + $e));
            if (c = b.role) e = b.p || {}, e.role = c, b.p = e;
            this.z[Id](a, 0, b);
            for (b = 0; b < this.D[D]; b++) this.D[b].c[Id](a, 0, {
                v: k,
                f: k
            })
        };
        L.addColumn = function(a, b, c) {
            this.insertColumn(this.z[D], a, b, c);
            return this.z[D] - 1
        };
        L.vj = function(a, b) {
            var c = Wq(b);
            $q(this, a, c.v);
            return c
        };
        L.insertRows = function(a, b) {
            a !== this.D[D] && (this.za = [], Zq(this, a));
            var c;
            if (qn(b)) c = b;
            else if (typeof b == cl) {
                (b != q[eb](b) || 0 > b) && d(r("Invalid value for numOrArray: " + b + ". If numOrArray is a number it should be a nonnegative integer."));
                c = [];
                for (var e = 0; e < b; e++) c[e] = k
            } else d(r("Invalid value for numOrArray. Should be a number or an array of arrays of cells."));
            for (var e = [], f = 0; f < c[D]; f++) {
                var h = c[f],
                    j = [];
                if (h === k)
                    for (h = 0; h < this.z[D]; h++) j[t]({
                        v: k,
                        f: k
                    });
                else if (qn(h)) {
                    h[D] != this.z[D] && d(r("Row given with size different than " +
                        this.z[D] + " (the number of columns in the table)."));
                    for (var p = 0; p < h[D]; p++) j[t](this.vj(p, h[p]))
                } else d(r("Every row given must be either null or an array."));
                h = {};
                h.c = j;
                e[t](h);
                1E4 == e[D] && (j = e, En(po, this.D, a, 0)[xd](k, j), a += e[D], e = [])
            }
            En(po, this.D, a, 0)[xd](k, e);
            return a + e[D] - 1
        };
        L.addRows = function(a) {
            if (typeof a == cl || qn(a)) return this.insertRows(this.D[D], a);
            d(r("Argument given to addRows must be either a number or an array"))
        };
        L.addRow = function(a) {
            if (qn(a)) return this[jc]([a]);
            a != k && d(r("If argument is given to addRow, it must be an array, or null"));
            return this[jc](1)
        };
        L.getColumnRange = function(a) {
            return cr(this, a)
        };
        L.getSortedRows = function(a) {
            return dr(this, a)
        };
        L.sort = function(a) {
            this.za = [];
            var a = Yq(this, a),
                b = this;
            ro(this.D, function(c, e) {
                for (var f = 0; f < a[D]; f++) {
                    var h = a[f],
                        j = h.column,
                        p = c.c[j],
                        s = e.c[j],
                        p = p ? p.v : k,
                        s = s ? s.v : k,
                        j = br(b[Nb](j), p, s);
                    if (0 != j) return j * (h.desc ? -1 : 1)
                }
                return 0
            })
        };
        L.toJSON = function() {
            return On({
                cols: this.z,
                rows: this.D,
                p: this.Na
            })
        };
        L.getDistinctValues = function(a) {
            return er(this, a)
        };
        L.getFilteredRows = function(a) {
            return fr(this, a)
        };
        L.removeRows = function(a, b) {
            0 >= b || (this.za = [], Zq(this, a), a + b > this.D[D] && (b = this.D[D] - a), this.D[Id](a, b))
        };
        L.removeRow = function(a) {
            this.removeRows(a, 1)
        };
        L.removeColumns = function(a, b) {
            if (!(0 >= b)) {
                this.za = [];
                R(this, a);
                a + b > this.z[D] && (b = this.z[D] - a);
                this.z[Id](a, b);
                for (var c = 0; c < this.D[D]; c++) this.D[c].c[Id](a, b)
            }
        };
        L.removeColumn = function(a) {
            this.removeColumns(a, 1)
        };

        function jr(a) {
            var b = a.version || of ;
            this.mj = mp(kr, b) ? b : of ;
            this.Se = a.status;
            this.fb = [];
            this.gb = [];
            this.gb = a.warnings || [];
            this.fb = a[Ed] || [];
            lr(this.gb);
            lr(this.fb);
            this.Se != Mi && (this.Kg = a.sig, this.g = new S(a.table, this.mj))
        }

        function lr(a) {
            for (var b = 0; b < a[D]; b++) {
                var c = a[b].detailed_message;
                c && (a[b].detailed_message = !c ? K : c[Ab](mr) && !c[Ab](nr) ? c : c[v](/&/g, he)[v](/</g, je)[v](/>/g, ie)[v](/\"/g, ke))
            }
        }
        var mr = /^[^<]*(<a(( )+target=('_blank')?("_blank")?)?( )+(href=('[^']*')?("[^"]*")?)>[^<]*<\/a>[^<]*)*$/,
            nr = /javascript((s)?( )?)*:/,
            kr = {
                kl: nf,
                ll: of
            };
        L = jr[F];
        L.Kg = k;
        L.g = k;
        L.isError = function() {
            return this.Se == Mi
        };
        L.hasWarning = function() {
            return this.Se == Ym
        };
        L.containsReason = function(a) {
            for (var b = 0; b < this.fb[D]; b++)
                if (this.fb[b].reason == a) return i;
            for (b = 0; b < this.gb[D]; b++)
                if (this.gb[b].reason == a) return i;
            return l
        };
        L.getDataSignature = function() {
            return this.Kg
        };
        L.getDataTable = function() {
            return this.g
        };
        L.wf = function(a) {
            return this[Gb]() && this.fb && this.fb[0] && this.fb[0][a] ? this.fb[0][a] : this.hasWarning() && this.gb && this.gb[0] && this.gb[0][a] ? this.gb[0][a] : k
        };
        L.getReasons = function() {
            var a = this.wf(Fl);
            return a != k && a != K ? [a] : []
        };
        L.getMessage = function() {
            return this.wf(Mk) || K
        };
        L.getDetailedMessage = function() {
            return this.wf(vi) || K
        };

        function or(a, b) {
            var c = b || {};
            this.bf = c.sendMethod || Dh;
            mp(pr, this.bf) || d(r("Send method not supported: " + this.bf));
            this.Mg = c.makeRequestParams_ || {};
            jp(a) && (a = this.ek(a));
            var e = a,
                c = jp(e),
                e = $o(Yo(e)[5] || k),
                e = dp[Ya](e);
            this.Hj = c && e;
            this.Gj = a;
            this.Hg = qr++;
            rr[t](this)
        }
        var pr = {
                ml: bn,
                nl: cn,
                hl: "scriptInjection",
                fl: Gk,
                $k: Dh
            },
            sr = new $p({
                "X-DataSource-Auth": "a"
            }),
            qr = 0,
            tr = {};
        or[F].ph = 30;
        var rr = [],
            ur = M.gadgets;

        function vr() {
            for (var a = 0; a < rr[D]; a++) {
                var b = rr[a];
                b.gf && b.Ed()
            }
        }
        L = or[F];
        L.ek = function(a) {
            var b = new Nq(a);
            433 == b.vb && b.kd(k);
            var c = b.Xa,
                c = c[v](/\/ccc$/, kf);
            /\/pub$/ [Ya](c) && (c = c[v](/\/pub$/, kf), b.hd(Al, rf));
            b.jd(c);
            var c = $o(Yo(a)[3] || k),
                a = (ja(Yo(a)[4] || k) || k) != k,
                e = hp[Ya](c),
                c = ip[Ya](c) && !e && a;
            b.ld(c ? ek : jk);
            return b[sc]()
        };

        function wr(a) {
            a[$c].Lg() ? (a = Wn(a[$c].uk()), a[Ab](/^({.*})$/) ? (a = Sn(a), xr(a)) : Gn(Tn(a))) : d(r("google.visualization.Query: " + a[$c].tk()))
        }

        function xr(a) {
            var b = a.reqId,
                c = tr[b];
            c ? (tr[b] = k, c.Jd(a)) : d(r("Missing query for request id: " + b))
        }
        L.jf = k;
        L.Hd = k;
        L.Od = k;
        L.Ea = k;
        L.We = k;
        L.ic = k;
        L.gf = i;
        L.ub = 0;
        L.Pe = k;
        L.va = l;
        L.setRefreshInterval = function(a) {
            (typeof a != cl || 0 > a) && d(r("Refresh interval must be a non-negative number"));
            this.ub = a;
            this.rh()
        };
        L.ff = function() {
            this.Od && (ca[$a](this.Od), this.Od = k)
        };
        L.ik = function() {
            this.Lh(Am, Mg)
        };
        L.Lh = function(a, b, c) {
            this.Jd({
                version: of ,
                status: Mi,
                errors: [{
                    reason: a,
                    message: b,
                    detailed_message: c
                }]
            })
        };
        L.Lj = function(a) {
            var b = {};
            this.Ea && (b.tq = ma(this.Ea));
            var c = Il + ma(this.Hg),
                e = this.Pe;
            e && (c += Bf + e);
            this.We && (c += Cf + this.We);
            b.tqx = c;
            if (this.ic) {
                var c = [],
                    f;
                for (f in this.ic) c[t](f + zf + this.ic[f]);
                b.tqh = c[Jd](Af)
            }
            f = a;
            a = f[w](be); - 1 != a && (f = f[ud](0, a));
            c = f[w](Jf);
            e = a = K;
            e = []; - 1 == c ? a = f : (a = f[ud](0, c), e = f[ud](c + 1), e = e[Jc](ge));
            f = [];
            for (c = 0; c < e[D]; c++) {
                var h = {};
                h.name = e[c][Jc](Hf)[0];
                h.$e = e[c];
                f[t](h)
            }
            for (var j in b) {
                e = b[j];
                h = l;
                for (c = 0; c < f[D]; c++)
                    if (f[c][gc] == j) {
                        f[c].$e = j + Hf + aa(e);
                        h = i;
                        break
                    }
                h || (c = {}, c.name = j,
                    c.$e = j + Hf + aa(e), f[t](c))
            }
            b = a;
            if (0 < f[D]) {
                b += Jf;
                j = [];
                for (c = 0; c < f[D]; c++) j[t](f[c].$e);
                b += j[Jd](ge)
            }
            a = b;
            this.ub && (b = new Nq(a), Ho && b.Fj(), a = b[sc]());
            return a
        };
        L.Ed = function() {
            var a = this.Lj(this.Gj);
            tr[ma(this.Hg)] = this;
            var b = this.bf,
                c = jg;
            b == cn && (b = bn, c = Kg);
            if (b == Dh)
                if (/[?&]alt=gviz(&[^&]*)*$/ [Ya](a)) b = Gk;
                else {
                    var b = a.search(ap),
                        e;
                    b: {
                        for (e = 0; 0 <= (e = a[w](Gm, e)) && e < b;) {
                            var f = a[od](e - 1);
                            if (38 == f || 63 == f)
                                if (f = a[od](e + 4), !f || 61 == f || 38 == f || 35 == f) break b;
                            e += 5
                        }
                        e = -1
                    }
                    if (0 > e) b = k;
                    else {
                        f = a[w](ge, e);
                        if (0 > f || f > b) f = b;
                        e += 5;
                        b = na(a.substr(e, f - e)[v](/\+/g, Rd))
                    }
                    b = b || Dh;
                    mp(pr, b) || (b = Dh)
                }
            if (b == Gk) ln(Yi) ? this.Oj(a, this.Mg) : d(r("gadgets.io.makeRequest is not defined."));
            else {
                if (!(e =
                        b == bn)) {
                    if (b = b == Dh) e = (new Nq(M[Pc][td])).Nj(new Nq(a))[sc](), b = Yo(M[Pc][td]), e = Yo(e), b = b[3] == e[3] && b[1] == e[1] && b[4] == e[4];
                    e = b
                }
                e ? (b = g, e = a, c == Kg && (a = a[Jc](Jf), 1 <= a[D] && (e = a[0]), 2 <= a[D] && (b = a[1])), Jq[Cb](e, wr, c, b, sr)) : (c = ga[lc](Jh)[0], b = this.Pe === k, this.Hj && b ? (b = ga[Ib](ok), this.Mj(b, a), c[Ta](b)) : this.hf(a))
            }
        };
        L.Mj = function(a, b) {
            var c = this;
            a.onerror = function() {
                c.hf(b)
            };
            a.onload = function() {
                c.hf(b)
            };
            Qa(a[H], $k);
            a.src = b + le + (new Date).getTime()
        };
        L.Oj = function(a, b) {
            b[ur.io[hb].CONTENT_TYPE] == k && (b[ur.io[hb].CONTENT_TYPE] = ur.io.ContentType.TEXT);
            b[ur.io[hb].AUTHORIZATION] == k && (b[ur.io[hb].AUTHORIZATION] = ur.io.AuthorizationType.SIGNED);
            b.OAUTH_ENABLE_PRIVATE_NETWORK == k && (b.OAUTH_ENABLE_PRIVATE_NETWORK = i);
            b.OAUTH_ADD_EMAIL == k && (b.OAUTH_ADD_EMAIL = i);
            ur.io.makeRequest(a, Dn(this.Dk, this), b);
            this.yh()
        };
        L.Dk = function(a) {
            if (a != k && a.data) Gn(Tn(a.data));
            else {
                var b = K;
                a && a[Ed] && (b = a[Ed][Jd](Rd));
                this.Lh(Hk, Zi, b)
            }
        };
        L.hf = function(a) {
            this.yh();
            In(a);
            this.rh()
        };
        L.yh = function() {
            var a = this;
            this.ff();
            this.Od = ca[Fc](function() {
                a.ik()
            }, 1E3 * this.ph)
        };
        L.Zg = function() {
            this.Hd && (ca[$a](this.Hd), this.Hd = k)
        };
        L.rh = function() {
            this.Zg();
            if (0 != this.ub && this.gf && this.va) {
                var a = this;
                this.Hd = ca[Fc](function() {
                    a.Ed()
                }, 1E3 * this.ub)
            }
        };
        L.send = function(a) {
            this.va = i;
            this.jf = a;
            this.Ed()
        };
        L.makeRequest = function(a, b) {
            this.va = i;
            this.jf = a;
            this.Mg = b || {};
            this.Ed()
        };
        L.abort = function() {
            this.va = l;
            this.ff();
            this.Zg()
        };
        L.Jd = function(a) {
            this.ff();
            a = new jr(a);
            if (!a.containsReason(al)) {
                this.Pe = a[Gb]() ? k : a.getDataSignature();
                var b = this.jf;
                b[I](b, a)
            }
        };
        L.setTimeout = function(a) {
            (typeof a != cl || ha(a) || 0 >= a) && d(r("Timeout must be a positive number"));
            this.ph = a
        };
        L.setRefreshable = function(a) {
            typeof a != Kh && d(r("Refreshable must be a boolean"));
            return this.gf = a
        };
        L.setQuery = function(a) {
            typeof a != lm && d(r("queryString must be a string"));
            this.Ea = a
        };
        L.Uk = function(a) {
            this.We = a;
            a != k && this.Bh(Lm, a)
        };
        L.Bh = function(a, b) {
            a = a[v](/\\/g, jh);
            b = b[v](/\\/g, jh);
            a = a[v](/:/g, kh);
            b = b[v](/:/g, kh);
            a = a[v](/;/g, lh);
            b = b[v](/;/g, lh);
            this.ic || (this.ic = {});
            this.ic[a] = b
        };

        function yr() {
            var a;
            zr || (zr = i, M.IDIModule && M.IDIModule.registerListener(vr, {
                pollingInterval: 100
            }), M.gadgets && (Ar(af), this.xh()));
            a = ga;
            a = a.querySelectorAll && a.querySelector ? a.querySelectorAll(Pf) : a[lc](Pf);
            this.Fk = Jn(a[0])
        }
        var zr = l;
        yr[F].Dh = 200;

        function Br() {
            return !!M.gadgets && !!M.gadgets.rpc
        }
        yr[F].xh = function() {
            if (Br()) {
                var a = M.gadgets;
                wn(a.rpc.register) && a.rpc.register(Gl, vr)
            } else 0 < this.Dh && (this.Dh--, ca[Fc](Dn(this.xh, this), 100))
        };
        yr[F].createQueryFromPrefs = function(a) {
            var b = a.getString(qh),
                c = b[Md]();
            if (0 == c[w](fk) || 0 == c[w](kk)) b = na(b);
            b = new or(b);
            a = a.getInt(ph);
            b[Zb](a);
            return b
        };
        yr[F].validateResponse = function(a) {
            return this.Fk(a)
        };

        function Ar(a) {
            if (Br()) {
                var b = M.gadgets;
                try {
                    b.rpc.getRelayUrl(a) || b.rpc.setRelayUrl(a, hk)
                } catch (c) {
                    wn(b.rpc.setRelayUrl) && b.rpc.setRelayUrl(a, hk)
                }
            }
        }
        M.gadgets && !Br() && In("http://www.gmodules.com/gadgets/rpc/rpc.v.js");
        Ar(af);

        function Cr(a) {
            var b = a.__eventTarget;
            b == k && (b = new Dq, a.__eventTarget = b);
            return a = b
        }

        function Dr(a) {
            this.Pk = a
        }
        Dr[F].getKey = function() {
            return this.Pk
        };

        function Er(a, b) {
            iq[I](this, a);
            this.Rk = b
        }
        P(Er, iq);

        function Fr(a, b, c, e) {
            this.Ea = a;
            this.Dg = b;
            this.Za = c || {};
            this.tc = e;
            this.Fc = k;
            e && (this.Fc = this.cf = Jn(e));
            (!b || !(Gi in b) || typeof b[hd] != Wi) && d(r("Visualization must have a draw method."))
        }
        L = Fr[F];
        L.cf = k;
        L.gh = k;
        L.fh = k;
        L.g = k;
        L.setOptions = function(a) {
            this.Za = a || {}
        };
        L.draw = function() {
            this.g && this.Dg[hd](this.g, this.Za)
        };
        L.Tk = function(a) {
            var b = this.tc;
            this.Fc = a ? a : b ? this.Fc = this.cf : k
        };
        L.sendAndDraw = function() {
            this.Fc || d(r("If no container was supplied, a custom error handler must be supplied instead."));
            var a = this;
            this.Ea[Cb](function(b) {
                var c = a.gh;
                c && c(b);
                a.Jd(b);
                (c = a.fh) && c(b)
            })
        };
        L.Jd = function(a) {
            var b = this.Fc;
            b(a) && (this.g = a[ob](), this.Dg[hd](this.g, this.Za))
        };
        L.setCustomResponseHandler = function(a) {
            a != k && (typeof a != Wi && d(r("Custom response handler must be a function.")), this.gh = a)
        };
        L.setCustomPostResponseHandler = function(a) {
            a != k && (typeof a != Wi && d(r("Custom post response handler must be a function.")), this.fh = a)
        };
        L.abort = function() {
            this.Ea[Ec]()
        };

        function T(a) {
            this.g = a;
            for (var b = [], a = a[mb](), c = 0; c < a; c++) b[t](c);
            this.t = b;
            this.Ja = i;
            this.Ia = k;
            this.Fe = [];
            this.Ee = i
        }
        L = T[F];
        L.bj = function() {
            for (var a = 0; a < this.t[D]; a++) tn(this.t[a]) && (this.Fe[a] = []);
            this.Ee = l
        };
        L.Ec = function() {
            this.Ee = i
        };
        L.Xj = function() {
            for (var a = [], b = this.g[xc](), c = 0; c < b; c++) a[t](c);
            this.Ia = a;
            this.Ec()
        };
        L.setColumns = function(a) {
            for (var b = this.g, c = lp(Gr), e = 0; e < a[D]; e++) {
                var f = a[e];
                if (vn(f)) R(b, f);
                else if (tn(f)) {
                    var h = f.sourceColumn,
                        f = f.calc;
                    O(f) && ((!c || c && !ko(c, f)) && d(r('Unknown function "' + f + Xd)), h != k && R(b, h))
                } else d(r("Invalid column input, expected either a number or an object."))
            }
            this.t = An(a);
            a = this.g;
            b = this.t;
            for (c = 0; c < b[D]; c++)
                if (e = b[c], tn(e)) {
                    if (h = e.role) f = e.properties || {}, f.role = h, e.properties = f;
                    h = e.sourceColumn;
                    vn(h) && (R(a, h), e.calc = e.calc || lk, za(e, e[B] || a[Nb](h)))
                }
            this.Ec()
        };
        L.dh = function(a, b) {
            if (qn(a)) {
                pn(b) && d(r("If the first parameter is an array, no second parameter is expected"));
                for (var c = 0; c < a[D]; c++) Zq(this.g, a[c]);
                return no(a)
            }
            if (on(a) == cl) {
                !on(b) == cl && d(r("If first parameter is a number, second parameter must be specified and be a number."));
                a > b && d(r("The first parameter (min) must be smaller than or equal to the second parameter (max)."));
                Zq(this.g, a);
                Zq(this.g, b);
                for (var e = [], c = a; c <= b; c++) e[t](c);
                return e
            }
            d(r("First parameter must be a number or an array."))
        };
        L.setRows = function(a, b) {
            this.Ia = this.dh(a, b);
            this.Ja = l;
            this.Ec()
        };
        L.getViewColumns = function() {
            return An(this.t)
        };
        L.getViewRows = function() {
            if (this.Ja) {
                for (var a = [], b = this.g[xc](), c = 0; c < b; c++) a[t](c);
                return a
            }
            return no(this.Ia)
        };
        L.hideColumns = function(a) {
            this[Kd](ho(this.t, function(b) {
                return !ko(a, b)
            }));
            this.Ec()
        };
        L.hideRows = function(a, b) {
            var c = this.dh(a, b);
            this.Ja && (this.Xj(), this.Ja = l);
            this.setRows(ho(this.Ia, function(a) {
                return !ko(c, a)
            }));
            this.Ec()
        };
        L.getViewColumnIndex = function(a) {
            for (var b = 0; b < this.t[D]; b++) {
                var c = this.t[b];
                if (c == a || tn(c) && c.sourceColumn == a) return b
            }
            return -1
        };
        L.getViewRowIndex = function(a) {
            return this.Ja ? 0 > a || a >= this.g[xc]() ? -1 : a : fo(this.Ia, a)
        };
        L.getTableColumnIndex = function(a) {
            R(this, a);
            a = this.t[a];
            return vn(a) ? a : tn(a) && vn(a.sourceColumn) ? a.sourceColumn : -1
        };
        L.getUnderlyingTableColumnIndex = function(a) {
            a = this.getTableColumnIndex(a);
            if (-1 == a) return a;
            wn(this.g.getUnderlyingTableColumnIndex) && (a = this.g.getUnderlyingTableColumnIndex(a));
            return a
        };
        L.getTableRowIndex = function(a) {
            Zq(this, a);
            return this.Ja ? a : this.Ia[a]
        };
        L.getUnderlyingTableRowIndex = function(a) {
            a = this[Sb](a);
            wn(this.g.getUnderlyingTableRowIndex) && (a = this.g.getUnderlyingTableRowIndex(a));
            return a
        };
        L.getNumberOfRows = function() {
            return this.Ja ? this.g[xc]() : this.Ia[D]
        };
        L.getNumberOfColumns = function() {
            return this.t[D]
        };
        L.getColumnId = function(a) {
            R(this, a);
            a = this.t[a];
            return vn(a) ? this.g.getColumnId(a) : a.id || K
        };
        L.getColumnIndex = function(a) {
            for (var b = 0; b < this.t[D]; b++) {
                var c = this.t[b];
                if (tn(c) && c.id == a) return b
            }
            a = this.g.getColumnIndex(a);
            return this.getViewColumnIndex(a)
        };
        L.getColumnLabel = function(a) {
            R(this, a);
            a = this.t[a];
            return vn(a) ? this.g[Jb](a) : a[Gd] || K
        };
        L.getColumnPattern = function(a) {
            R(this, a);
            a = this.t[a];
            return vn(a) ? this.g[Oc](a) : k
        };
        L.getColumnRole = function(a) {
            a = this[Kc](a, Ml);
            return a = O(a) ? a : K
        };
        L.getColumnType = function(a) {
            R(this, a);
            a = this.t[a];
            return vn(a) ? this.g[Nb](a) : a[B]
        };
        L.nj = function(a, b) {
            this.Ee && this.bj();
            var c = this.Fe[b][a];
            if (pn(c)) return c;
            var c = k,
                e = this.t[b],
                f = e.calc;
            O(f) ? (f = Gr[f], c = f(this.g, a, e)) : wn(f) && (c = f[I](k, this.g, a));
            c = Wq(c);
            this.cj(c, e[B]);
            return this.Fe[b][a] = c
        };
        L.cj = function(a, b) {
            var c = a.v;
            Un(co(b)) && d(r('"type" must be specified'));
            ar(c, b) || d(r(bh + c + Td + b))
        };
        L.Ka = function(a, b) {
            R(this, b);
            var c = this.t[b],
                e = k,
                f = this[Sb](a);
            tn(c) ? (e = this.nj(f, b), e.p = tn(e.p) ? e.p : {}) : vn(c) ? e = {
                v: this.g[C](f, c),
                f: k,
                p: k
            } : d(r("Invalid column definition: " + e));
            return e
        };
        Ba(L, function(a, b) {
            return this.Ka(a, b).v
        });
        L.getFormattedValue = function(a, b) {
            var c = this.Ka(a, b);
            if (c.f == k) {
                var e = this.t[b];
                if (tn(e)) e = this[Nb](b), c.f = c.v != k ? gr(c.v, e) : K;
                else if (vn(e)) {
                    var f = this[Sb](a);
                    c.f = this.g[Dd](f, e)
                }
            }
            return c.f
        };
        L.getProperty = function(a, b, c) {
            a = this[zc](a, b)[c];
            return pn(a) ? a : k
        };
        L.getProperties = function(a, b) {
            var c = this.Ka(a, b);
            if (!c.p) {
                var c = this[Sb](a),
                    e = this.getTableColumnIndex(b);
                return this.g[zc](c, e)
            }
            return c.p
        };
        L.getColumnProperty = function(a, b) {
            R(this, a);
            var c = this.t[a];
            return vn(c) ? this.g[Kc](c, b) : this[vb](a)[b] || k
        };
        L.getColumnProperties = function(a) {
            R(this, a);
            a = this.t[a];
            return vn(a) ? this.g[vb](a) : a.properties || {}
        };
        L.getTableProperty = function(a) {
            return this.g.getTableProperty(a)
        };
        L.getTableProperties = function() {
            return this.g[Yb]()
        };
        L.getRowProperty = function(a, b) {
            var c = this[Sb](a);
            return this.g.getRowProperty(c, b)
        };
        L.getRowProperties = function(a) {
            Zq(this, a);
            a = this[Sb](a);
            return this.g[Xb](a)
        };
        L.getColumnRange = function(a) {
            return cr(this, a)
        };
        L.getDistinctValues = function(a) {
            return er(this, a)
        };
        L.getSortedRows = function(a) {
            return dr(this, a)
        };
        L.getFilteredRows = function(a) {
            return fr(this, a)
        };
        L.toDataTable = function() {
            var a = this.g;
            wn(a[Kb]) && (a = a[Kb]());
            var a = Rn(a[Bc]()),
                b = this[mb](),
                c = this[xc](),
                e, f, h, j = [],
                p = [];
            for (e = 0; e < b; e++) h = this.t[e], tn(h) ? (f = op(h), delete f.calc, delete f.sourceColumn) : vn(h) ? f = a.cols[h] : d(r(sg)), j[t](f);
            for (f = 0; f < c; f++) {
                var s = a[wd][this.Ja ? f : this.Ia[f]],
                    x = [];
                for (e = 0; e < b; e++) {
                    h = this.t[e];
                    var z;
                    tn(h) ? z = {
                        v: this[C](f, e)
                    } : vn(h) ? z = s.c[this.t[e]] : d(r(sg));
                    x[t](z)
                }
                s.c = x;
                p[t](s)
            }
            a.cols = j;
            a.rows = p;
            return a = new S(a)
        };
        L.toJSON = function() {
            for (var a = {}, b = [], c = 0; c < this.t[D]; c++) {
                var e = this.t[c];
                (!tn(e) || O(e.calc)) && b[t](e)
            }
            0 == b[D] || (a.columns = b);
            this.Ja || (a.rows = no(this.Ia));
            return On(a)
        };
        var Gr = {
            emptyString: function() {
                return K
            },
            error: function(a, b, c) {
                var e = c.sourceColumn,
                    f = c.magnitude;
                if (!vn(e) || !vn(f)) return k;
                a = a[C](b, e);
                return !vn(a) ? k : c.errorType == ul ? a + a * (f / 100) : a + f
            },
            stringify: function(a, b, c) {
                c = c.sourceColumn;
                return !vn(c) ? K : a[Dd](b, c)
            },
            fillFromTop: function(a, b, c) {
                c = c.sourceColumn;
                return !vn(c) ? k : hr(a, b, c, i)
            },
            fillFromBottom: function(a, b, c) {
                c = c.sourceColumn;
                return !vn(c) ? k : hr(a, b, c, l)
            },
            identity: function(a, b, c) {
                c = c.sourceColumn;
                return !vn(c) ? k : a[C](b, c)
            }
        };
        var V = {
            vf: "google-visualization-errors"
        };
        V.rg = V.vf + "-";
        V.uh = V.vf + zf;
        V.qf = V.vf + "-all-";
        V.Ge = V.uh + " container is null";
        V.Ki = "background-color: #c00000; color: white; padding: 2px;";
        V.Mi = "background-color: #fff4c2; color: black; white-space: nowrap; padding: 2px; border: 1px solid black;";
        V.Ni = "font: normal 0.8em arial,sans-serif; margin-bottom: 5px;";
        V.Li = "font-size: 1.1em; color: #0000cc; font-weight: bold; cursor: pointer; padding-left: 10px; color: black;text-align: right; vertical-align: top;";
        V.qg = 0;
        V.addError = function(a, b, c, e) {
            V.He(a) || d(r(V.Ge + ". message: " + b));
            var c = V.Pi(b, c, e),
                f = c.errorMessage,
                b = c.detailedMessage,
                c = c.options,
                h = c.showInTooltip != k ? !!c.showInTooltip : i,
                j = (c[B] == Ym ? Ym : Mi) == Mi ? V.Ki : V.Mi,
                j = j + (c[H] ? c[H] : K),
                p = !!c.removable,
                e = xp(),
                f = e.d(gm, {
                    style: j
                }, e[lb](f)),
                j = V.rg + V.qg++,
                s = e.d(Ci, {
                    id: j,
                    style: V.Ni
                }, f);
            b && (h ? f.title = b : (h = ga[Ib](gm), qa(h, b), e[Ta](s, e.d(Ci, {
                style: pl
            }, h))));
            p && (b = e.d(gm, {
                style: V.Li
            }, e[lb](hn)), b.onclick = En(V.Je, s), e[Ta](f, b));
            V.Oi(a, s);
            c.removeDuplicates && V.Qi(a, s);
            return j
        };
        V.removeAll = function(a) {
            V.He(a) || d(r(V.Ge));
            if (a = V.pf(a, l)) Qa(a[H], $k), Lp(a)
        };
        V.addErrorFromQueryResponse = function(a, b) {
            V.He(a) || d(r(V.Ge));
            b || d(r(V.uh + " response is null"));
            if (!b[Gb]() && !b.hasWarning()) return k;
            var c = b.getReasons(),
                e = i;
            b[Gb]() && (e = !(ko(c, Qm) || ko(c, sk)));
            var c = b.getMessage(),
                f = b.getDetailedMessage(),
                e = {
                    showInTooltip: e
                };
            za(e, b[Gb]() ? Mi : Ym);
            e.removeDuplicates = i;
            return V[Ac](a, c, f, e)
        };
        V.removeError = function(a) {
            a = ga[fb](a);
            return V.sf(a) ? (V.Je(a), i) : l
        };
        V.getContainer = function(a) {
            a = ga[fb](a);
            return V.sf(a) ? a[Fd][Fd] : k
        };
        V.createProtectedCallback = function(a, b) {
            return function() {
                try {
                    a[xd](k, arguments)
                } catch (c) {
                    wn(b) ? b(c) : google[G][Ed][Ac](b, c[Sc])
                }
            }
        };
        V.Je = function(a) {
            var b = a[Fd];
            Np(a);
            0 == b[ac][D] && Qa(b[H], $k)
        };
        V.sf = function(a) {
            return Jp(a) && a.id && 0 == a.id[gd](V.rg, 0) && (a = a[Fd]) && (a.id && 0 == a.id[gd](V.qf, 0)) && a[Fd] ? i : l
        };
        V.Pi = function(a, b, c) {
            var e = a != k && a ? a : Mi,
                f = K,
                h = {},
                j = arguments[D];
            2 == j ? b && on(b) == el ? h = b : f = b != k ? b : f : 3 == j && (f = b != k ? b : f, h = c || {});
            e = Wn(e);
            f = Wn(f);
            return {
                errorMessage: e,
                detailedMessage: f,
                options: h
            }
        };
        V.He = function(a) {
            return a != k && Jp(a)
        };
        V.pf = function(a, b) {
            for (var c = a[ac], e = k, f = xp(), h = 0; h < c[D]; h++)
                if (c[h].id && 0 == c[h].id[gd](V.qf, 0)) {
                    e = c[h];
                    f.removeNode(e);
                    break
                }!e && b && (e = V.qf + V.qg++, e = Gp(Ci, {
                id: e,
                style: Bi
            }, k));
            e && ((c = a[Ob]) ? f.ne(e, c) : f[Ta](a, e));
            return e
        };
        V.Oi = function(a, b) {
            var c = V.pf(a, i);
            Qa(c[H], Hh);
            c[Ta](b)
        };
        V.yk = function(a, b) {
            var c = V.pf(a, i);
            go(c && c[ac], function(a) {
                V.sf(a) && b(a)
            })
        };
        V.Qi = function(a, b) {
            var c = /id="?google-visualization-errors-[0-9]*"?/,
                e = Pp(b),
                e = e[v](c, K),
                f = [];
            V.yk(a, function(a) {
                if (a != b) {
                    var j = Pp(a),
                        j = j[v](c, K);
                    j == e && f[t](a)
                }
            });
            go(f, V.Je);
            return f[D]
        };
        var Hr = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        };

        function Ir(a) {
            var b = {},
                a = ma(a),
                c = a[jb](0) == be ? a : be + a;
            if (Jr[Ya](c)) return a = c, Jr[Ya](a) || d(r("'" + a + "' is not a valid hex color")), 4 == a[D] && (a = a[v](Kr, ce)), b.yf = a[Md](), za(b, Xj), b;
            a: {
                var e = a[Ab](Lr);
                if (e) {
                    var c = ja(e[1]),
                        f = ja(e[2]),
                        e = ja(e[3]);
                    if (0 <= c && 255 >= c && 0 <= f && 255 >= f && 0 <= e && 255 >= e) {
                        c = [c, f, e];
                        break a
                    }
                }
                c = []
            }
            if (c[D]) return f = c[0], a = c[1], c = c[2], f = ja(f), a = ja(a), c = ja(c), (ha(f) || 0 > f || 255 < f || ha(a) || 0 > a || 255 < a || ha(c) || 0 > c || 255 < c) && d(r('"(' + f + ve + a + ve + c + '") is not a valid RGB color')), f = Mr(f[sc](16)), a = Mr(a[sc](16)),
                c = Mr(c[sc](16)), b.yf = be + f + a + c, za(b, Kl), b;
            if (Hr && (c = Hr[a[Md]()])) return b.yf = c, za(b, Wk), b;
            d(r(a + " is not a valid color string"))
        }
        var Kr = /#(.)(.)(.)/,
            Jr = /^#(?:[0-9a-f]{3}){1,2}$/i,
            Lr = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

        function Mr(a) {
            return 1 == a[D] ? mf + a : a
        };

        function Nr(a) {
            return a == $k || a == K || a == Jm ? $k : Ir(a).yf
        };

        function Or(a, b, c, e) {
            this.top = a;
            Sa(this, b);
            Pa(this, c);
            sa(this, e)
        }
        Na(Or[F], function() {
            return new Or(this.top, this[Nd], this[rd], this[A])
        });
        Or[F].contains = function(a) {
            return !this || !a ? l : a instanceof Or ? a[A] >= this[A] && a[Nd] <= this[Nd] && a.top >= this.top && a[rd] <= this[rd] : a.x >= this[A] && a.x <= this[Nd] && a.y >= this.top && a.y <= this[rd]
        };

        function Pr(a) {
            a = a || {};
            this.wg = $k;
            a.fill != k && this.fj(a.fill);
            this.vg = 1;
            a.Ne != k && this.gj(a.Ne);
            this.ug = $k;
            a.stroke != k && this.ij(a.stroke);
            this.Cg = 1;
            a.Bg != k && this.Ig(a.Bg);
            this.Ag = 1;
            a.Oe != k && this.kj(a.Oe);
            this.zg = dm;
            a.yg != k && this.jj(a.yg);
            this.ya = k;
            a.ya && (this.ya = op(a.ya), this.ya.dj = Nr(this.ya.dj), this.ya.ej = Nr(this.ya.ej));
            this.xg = k;
            a.pattern && this.hj(a.pattern)
        }
        L = Pr[F];
        L.getProperties = function() {
            return {
                fill: this.wg,
                Ne: this.vg,
                stroke: this.ug,
                Bg: this.Cg,
                Oe: this.Ag,
                yg: this.zg,
                ya: this.ya ? op(this.ya) : k,
                pattern: this.xg
            }
        };
        Na(L, function() {
            return new Pr(this[zc]())
        });
        L.fj = function(a) {
            this.wg = Nr(a)
        };
        L.gj = function(a) {
            this.vg = q.min(q.max(a, 0), 1)
        };
        L.ij = function(a, b) {
            this.ug = Nr(a);
            b != k && this.Ig(b)
        };
        L.Ig = function(a) {
            this.Cg = a
        };
        L.kj = function(a) {
            this.Ag = q.min(q.max(a, 0), 1)
        };
        L.jj = function(a) {
            this.zg = a
        };
        L.hj = function(a) {
            this.xg = a
        };
        new Pr({
            Ne: 0,
            fill: "white",
            Oe: 0,
            stroke: "white"
        });

        function Qr(a) {
            if (sn(a)) {
                var b = new Date;
                b.setTime(a.valueOf());
                return b
            }
            var c = on(a);
            if (c == el || c == Ch) {
                if (a[Yc]) return a[Yc]();
                c = c == Ch ? [] : {};
                for (b in a) c[b] = Qr(a[b]);
                return c
            }
            return a
        };

        function Rr(a, b, c, e) {
            sa(this, a);
            this.top = b;
            pa(this, c);
            Ra(this, e)
        }
        Na(Rr[F], function() {
            return new Rr(this[A], this.top, this[u], this[J])
        });
        Rr[F].pj = function(a) {
            var b = q.max(this[A], a[A]),
                c = q.min(this[A] + this[u], a[A] + a[u]);
            if (b <= c) {
                var e = q.max(this.top, a.top),
                    a = q.min(this.top + this[J], a.top + a[J]);
                if (e <= a) return sa(this, b), this.top = e, pa(this, c - b), Ra(this, a - e), i
            }
            return l
        };
        Rr[F].contains = function(a) {
            return a instanceof Rr ? this[A] <= a[A] && this[A] + this[u] >= a[A] + a[u] && this.top <= a.top && this.top + this[J] >= a.top + a[J] : a.x >= this[A] && a.x <= this[A] + this[u] && a.y >= this.top && a.y <= this.top + this[J]
        };

        function Sr(a, b) {
            var c = zp(a);
            return c[bc] && c[bc].getComputedStyle && (c = c[bc].getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) || K : K
        }

        function Tr(a, b) {
            return Sr(a, b) || (a[sd] ? a[sd][b] : k) || a[H] && a[H][b]
        }

        function Ur(a) {
            return Tr(a, wl)
        }

        function Vr(a, b, c) {
            var e, f = Go && (Ao || Ko) && Uo(tf);
            b instanceof to ? (e = b.x, b = b.y) : (e = b, b = c);
            sa(a[H], Wr(e, f));
            a[H].top = Wr(b, f)
        }

        function Xr(a) {
            var b = a[Va]();
            Q && (a = a.ownerDocument, sa(b, b[A] - (a[oc][Rb] + a[Wc][Rb])), b.top -= a[oc][Ub] + a[Wc][Ub]);
            return b
        }

        function Yr(a) {
            if (Q && !Wo(8)) return a[Lc];
            for (var b = zp(a), c = Tr(a, wl), e = c == Qi || c == sh, a = a[Fd]; a && a != b; a = a[Fd])
                if (c = Tr(a, wl), e = e && c == km && a != b[oc] && a != b[Wc], !e && (a[fd] > a[Dc] || a[Lb] > a[md] || c == Qi || c == sh || c == Hl)) return a;
            return k
        }

        function Zr(a) {
            for (var b = new Or(0, fa, fa, 0), c = xp(a), e = c.l[Wc], f = c.l[oc], h = c.Sj(); a = Yr(a);)
                if ((!Q || 0 != a[Dc]) && (!Ho || 0 != a[md] || a != e) && a != e && a != f && Tr(a, nl) != Wm) {
                    var j = $r(a),
                        p;
                    p = a;
                    if (Go && !Uo(tf)) {
                        var s = la(Sr(p, Qh));
                        if (as(p)) var x = p.offsetWidth - p[Dc] - s - la(Sr(p, Sh)),
                            s = s + x;
                        p = new to(s, la(Sr(p, Uh)))
                    } else p = new to(p[Rb], p[Ub]);
                    j.x += p.x;
                    j.y += p.y;
                    b.top = q.max(b.top, j.y);
                    Sa(b, q.min(b[Nd], j.x + a[Dc]));
                    Pa(b, q.min(b[rd], j.y + a[md]));
                    sa(b, q.max(b[A], j.x))
                }
            e = h[nd];
            h = h[qc];
            sa(b, q.max(b[A], e));
            b.top = q.max(b.top, h);
            c = c.Uj();
            Sa(b, q.min(b[Nd], e + c[u]));
            Pa(b, q.min(b[rd], h + c[J]));
            return 0 <= b.top && 0 <= b[A] && b[rd] > b.top && b[Nd] > b[A] ? b : k
        }

        function $r(a) {
            var b, c = zp(a),
                e = Tr(a, wl),
                f = Go && c[Bb] && !a[Va] && e == sh && (b = c[Bb](a)) && (0 > b[yb] || 0 > b[zb]),
                h = new to(0, 0),
                j;
            b = c ? zp(c) : ga;
            j = Q && !Wo(9) && !xp(b).Te() ? b[Wc] : b[oc];
            if (a == j) return h;
            if (a[Va]) b = Xr(a), a = xp(c).Tb(), h.x = b[A] + a.x, h.y = b.top + a.y;
            else if (c[Bb] && !f) b = c[Bb](a), a = c[Bb](j), h.x = b[yb] - a[yb], h.y = b[zb] - a[zb];
            else {
                b = a;
                do {
                    h.x += b[Rc];
                    h.y += b[Hd];
                    b != a && (h.x += b[Rb] || 0, h.y += b[Ub] || 0);
                    if (Ho && Ur(b) == Qi) {
                        h.x += c[Wc][nd];
                        h.y += c[Wc][qc];
                        break
                    }
                    b = b[Lc]
                } while (b && b != a);
                if (Fo || Ho && e == sh) h.y -= c[Wc][Hd];
                for (b = a;
                    (b =
                        Yr(b)) && b != c[Wc] && b != j;)
                    if (h.x -= b[nd], !Fo || b[zd] != Xg) h.y -= b[qc]
            }
            return h
        }

        function bs(a, b, c) {
            b instanceof vo ? (c = b[J], b = b[u]) : c == g && d(r("missing height argument"));
            pa(a[H], Wr(b, i));
            Ra(a[H], Wr(c, i))
        }

        function Wr(a, b) {
            typeof a == cl && (a = (b ? q.round(a) : a) + Bl);
            return a
        }

        function cs(a) {
            if (Tr(a, Ai) != $k) return ds(a);
            var b = a[H],
                c = b.display,
                e = b.visibility,
                f = b.position;
            Ea(b, Yj);
            b.position = sh;
            Qa(b, pk);
            a = ds(a);
            Qa(b, c);
            b.position = f;
            Ea(b, e);
            return a
        }

        function ds(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                e = Ho && !b && !c;
            return (!pn(b) || e) && a[Va] ? (a = Xr(a), new vo(a[Nd] - a[A], a[rd] - a.top)) : new vo(b, c)
        }

        function es(a) {
            var b = $r(a),
                a = cs(a);
            return new Rr(b.x, b.y, a[u], a[J])
        }

        function fs(a, b) {
            var c = a[H];
            gl in c ? c.opacity = b : Dg in c ? c.MozOpacity = b : Pi in c && (c.filter = b === K ? K : zh + 100 * b + te)
        }

        function gs(a, b) {
            Qa(a[H], b ? K : $k)
        }

        function as(a) {
            return Nl == Tr(a, xi)
        }
        var hs = Go ? "MozUserSelect" : Ho ? "WebkitUserSelect" : k;

        function is(a, b, c) {
            c = !c ? a[lc](ue) : k;
            if (hs) {
                if (b = b ? $k : K, a[H][hs] = b, c)
                    for (var a = 0, e; e = c[a]; a++) e[H][hs] = b
            } else if (Q || Fo)
                if (b = b ? fl : K, a[Tb](Pm, b), c)
                    for (a = 0; e = c[a]; a++) e[Tb](Pm, b)
        }

        function js(a, b, c, e) {
            if (/^\d+px?$/ [Ya](b)) return ka(b, 10);
            var f = a[H][c],
                h = a.runtimeStyle[c];
            a.runtimeStyle[c] = a[sd][c];
            a[H][c] = b;
            b = a[H][e];
            a[H][c] = f;
            a.runtimeStyle[c] = h;
            return b
        }

        function ks(a, b) {
            return js(a, a[sd] ? a[sd][b] : k, Ck, vl)
        }
        var ls = {
            thin: 2,
            medium: 4,
            thick: 6
        };

        function ms(a, b) {
            if ((a[sd] ? a[sd][b + Vg] : k) == $k) return 0;
            var c = a[sd] ? a[sd][b + eh] : k;
            return c in ls ? ls[c] : js(a, c, Ck, vl)
        }

        function ns(a) {
            if (Q) {
                var b = ms(a, Ph),
                    c = ms(a, Rh),
                    e = ms(a, Th),
                    a = ms(a, Nh);
                return new Or(e, c, a, b)
            }
            b = Sr(a, Qh);
            c = Sr(a, Sh);
            e = Sr(a, Uh);
            a = Sr(a, Oh);
            return new Or(la(e), la(c), la(a), la(b))
        }
        var os = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

        function ps() {
            var a = ln(Rj);
            a != k || (a = gk);
            var b = ln(Tj);
            b != k || (b = sf);
            return a + jf + b
        }

        function qs(a) {
            var b = ln(a);
            wn(b) || (b = ln(Sj + a), wn(b) || (b = k));
            return b
        };
        var rs = {
            AnnotatedTimeLine: "annotatedtimeline",
            AreaChart: mi,
            BarChart: mi,
            BubbleChart: mi,
            CandlestickChart: mi,
            ColumnChart: mi,
            ComboChart: mi,
            Gauge: "gauge",
            GeoChart: "geochart",
            GeoMap: "geomap",
            ImageAreaChart: "imageareachart",
            ImageBarChart: "imagebarchart",
            ImageCandlestickChart: "imagechart",
            ImageChart: "imagechart",
            ImageLineChart: "imagelinechart",
            ImagePieChart: "imagepiechart",
            ImageSparkLine: "imagesparkline",
            IntensityMap: "intensitymap",
            LineChart: mi,
            Map: "map",
            MotionChart: "motionchart",
            OrgChart: "orgchart",
            PieChart: mi,
            RangeSelector: mi,
            ScatterChart: mi,
            SparklineChart: mi,
            SteppedAreaChart: mi,
            Table: "table",
            Timeline: "timeline",
            TreeMap: "treemap",
            StringFilter: li,
            NumberRangeFilter: li,
            CategoryFilter: li,
            ChartRangeFilter: li,
            Dashboard: li
        };

        function ss(a, b) {
            var c = a.useFormatFromData;
            if ((!un(c) || c) && Un(co(a.format))) {
                for (var c = b = ho(b, function(a) {
                        return !Un(co(a))
                    }), e = {}, f = 0, h = 0; h < c[D];) {
                    var j = c[h++],
                        p = tn(j) ? dl + xn(j) : (typeof j)[jb](0) + j;
                    da[F][Tc][I](e, p) || (e[p] = i, c[f++] = j)
                }
                Ha(c, f);
                1 == b[D] && (c = b[0], Un(co(c)) || (c = c[v](/\d/g, mf), c = c[v](/#{10,}/, ia(11)[Jd](be))), a.format = c)
            }
        };

        function ts(a, b) {
            var c = a[C](b, 0),
                e = a[C](b, 1);
            return c == k || e == k ? k : new to(c, e)
        };

        function us(a) {
            var b = a.ea,
                c = a[ob](),
                a = a[gb](),
                e;
            a: if (e = a.useFormatFromData, un(e) && !e) e = l;
                else {
                    e = [Rm, um, sm, tm, Di];
                    for (var f = 0; f < e[D]; f++)
                        if (ln(e[f] + cf, a)) {
                            e = l;
                            break a
                        }
                    e = i
                }
            if (e)
                if (b == Tf) 3 > c[mb]() || (b = c[Oc](1), e = a.hAxis || {}, ss(e, [b]), a.hAxis = e, c = c[Oc](2), b = a.vAxes || {}, e = b[0] || {}, ss(e, [c]), b[0] = e, a.vAxes = b);
                else {
                    e = a.vAxes || [{}, {}];
                    for (var f = a.hAxis || {}, h = e[0] || {}, j = e[1] || {}, p = [], s = [], x = c && c[mb]() || 0, z = 0; z < x; z++)
                        if (c[Nb](z) == cl) {
                            var E = c[Oc](z),
                                ea;
                            ea = z;
                            0 == ea ? ea = k : (ea--, ea = ((a.series || {})[ea] || {}).targetAxisIndex ||
                                0);
                            switch (ea) {
                                case 0:
                                    p[t](E);
                                    break;
                                case 1:
                                    s[t](E)
                            }
                        }
                    b == Sf ? ss(f, p) : (ss(h, p), ss(j, s));
                    0 < x && c[Nb](0) != lm && (b = b == Sf ? h : f, E = c[Oc](0), ss(b, [E]));
                    e[0] = h;
                    e[1] = j;
                    a.vAxes = e;
                    a.hAxis = f
                }
        }

        function vs(a) {
            if (a[bd](wh)) {
                var b = a[ob]();
                if (a.ea == Rg && 2 == b[mb]()) {
                    var c;
                    c = b[xc]();
                    for (var e = new to, f = 0; f < c; f++) {
                        var h = ts(b, f);
                        h != k && (e.x += h.x, e.y += h.y)
                    }
                    c = new to(e.x / c, e.y / c);
                    for (h = f = e = 0; h < b[xc](); h++) {
                        var j = ts(b, h);
                        j != k && (j = new to(j.x - c.x, j.y - c.y), e += j.x * j.y, f += j.x * j.x)
                    }
                    var p, s;
                    p = e / f || 1;
                    s = c.y - p * c.x;
                    c = new google[G][jd](b);
                    c[Kd]([0, 1, {
                        type: cl,
                        calc: function(a, c) {
                            var e = ts(b, c);
                            return e != k ? p * e.x + s : k
                        }
                    }]);
                    a[dd](c);
                    a[Od](Tl, 2);
                    a[Od](Ul, 0);
                    a[Od](Vl, l)
                }
                a[Od](wh, k)
            }
        }

        function ws(a) {
            var b = a[ob](),
                c = a[wc]();
            if (qn(c))
                for (var e = 0; e < c[D]; e++) b = google[G][jd].fromJSON(b, c[e]);
            else c != k && (b = google[G][jd].fromJSON(b, c));
            a[Uc](k);
            a[dd](b)
        }

        function xs(a) {
            var b = a.ea;
            if ((rs[b] || k) == mi && b != Rg) {
                var b = a[ob](),
                    c = a[bd](Uj);
                if (c != k) {
                    for (var e = [{
                            calc: c ? mm : Ii,
                            sourceColumn: 0,
                            type: lm
                        }], f = c ? 1 : 0, c = b[mb](); f < c; f++) e[t](f);
                    b = new google[G][jd](b);
                    b[Kd](e);
                    a[Od](Uj, k);
                    a[dd](b)
                }
            }
        };

        function ys(a, b) {
            var c = b || {};
            O(c) && (c = Rn(c));
            this.fg = c.containerId || k;
            this.dd = a;
            this.ea = c[a + ah] || k;
            this.hg = c[a + Gg] || k;
            Ma(this, k);
            this.od = k;
            this.gg = c.dataSourceUrl || k;
            this.g = k;
            this[dd](c.dataTable);
            this.Za = c.options || {};
            this.Fa = c.state || {};
            var e = c.packages;
            this.ig = pn(e) ? e : k;
            this.Ea = c.query || k;
            this.ub = c.refreshInterval || k;
            this.Eb = c.view || k;
            this.$f = [ws, xs, us, vs]
        }
        L = ys[F];
        L.Yg = k;
        L.Qd = k;
        L.tc = k;
        Na(L, function() {
            return new this[Mc](this[Bc]())
        });
        L.draw = function(a) {
            a = Ap(a || K);
            Jp(a) || (a = Ap(this[qd]()), Jp(a) || d(r("The container is null or not defined.")));
            this.tc = a;
            try {
                if (this.ea == k && d(r("The " + this.dd + " type is not defined.")), qs(this.ea)) this.bh(a);
                else {
                    var b = Dn(this.bh, this, a),
                        b = google[G][Ed].createProtectedCallback(b, Dn(this.af, this, a));
                    this.Rj(b)
                }
            } catch (c) {
                this.af(a, c)
            }
        };
        L.toJSON = function() {
            return this.Ch(this[ob]())
        };
        L.Ch = function(a) {
            var b = this[pd](),
                c = g;
            a === k || (c = wn(a[Kb]) ? Rn(a[Kb]()[Bc]()) : Rn(a[Bc]()));
            a = {
                containerId: this[qd]() || g,
                dataSourceUrl: this[Zc]() || g,
                dataTable: c,
                options: this[gb]() || g,
                state: this[ld]() || g,
                packages: b === k ? g : b,
                refreshInterval: this[kd]() || g,
                query: this[vd]() || g,
                view: this[wc]() || g
            };
            a[this.dd + ah] = this.ea || g;
            a[this.dd + Gg] = this[Eb]() || g;
            this.kh(a);
            return On(a)
        };
        L.kh = function() {};
        L.getDataSourceUrl = function() {
            return this.gg
        };
        L.getDataTable = function() {
            return this.g
        };
        L.Jh = function() {
            return this.ea
        };
        L.getName = function() {
            return this.hg
        };
        L.xf = function() {
            return this[G]
        };
        L.getContainerId = function() {
            return this.fg
        };
        L.getQuery = function() {
            return this.Ea
        };
        L.getRefreshInterval = function() {
            return this.ub
        };
        L.getOption = function(a, b) {
            return zs(this.Za, a, b)
        };

        function zs(a, b, c) {
            a = -1 == b[w]($e) ? a[b] : ln(b, a);
            c = pn(c) ? c : k;
            return a != k ? a : c
        }
        L.getOptions = function() {
            return this.Za
        };
        L.getState = function() {
            return this.Fa
        };
        L.setDataSourceUrl = function(a) {
            this.gg = a
        };
        L.setDataTable = function(a) {
            this.g = a == k ? k : wn(a[Yb]) ? a : qn(a) ? google[G].arrayToDataTable(a) : new google[G].DataTable(a)
        };
        L.nf = function(a) {
            this.ea = a
        };
        L.zf = function(a) {
            this.hg = a
        };
        L.setContainerId = function(a) {
            this.fg = a
        };
        L.setQuery = function(a) {
            this.Ea = a
        };
        L.setRefreshInterval = function(a) {
            this.ub = a
        };
        L.setOption = function(a, b) {
            var c = this.Za,
                e = a;
            if (b == k) {
                if (zs(c, e) !== k) {
                    var f = e[Jc]($e);
                    1 < f[D] && (e = f.pop(), c = zs(c, f[Jd]($e)));
                    delete c[e]
                }
            } else {
                e = e[Jc]($e);
                c = c || M;
                !(e[0] in c) && c[Ld] && c[Ld](Tm + e[0]);
                for (; e[D] && (f = e.shift());) !e[D] && pn(b) ? c[f] = b : c = c[f] ? c[f] : c[f] = {}
            }
        };
        L.setOptions = function(a) {
            this.Za = a || {}
        };
        Fa(L, function(a) {
            this.Fa = a || {}
        });
        L.setPackages = function(a) {
            this.ig = a
        };
        L.setView = function(a) {
            this.Eb = a
        };
        L.Yk = function(a) {
            a != this[G] && (this.od = a)
        };
        L.getSnapshot = function() {
            return new this[Mc](this.Ch(this.Yg || this[ob]()))
        };
        L.getView = function() {
            return this.Eb
        };
        L.getPackages = function() {
            return this.ig
        };
        L.af = function(a, b) {
            var c = b && b[Sc] || Mi,
                e = google[G][Ed][Ac](a, c);
            google[G][db].trigger(this, Mi, {
                id: e,
                message: c
            })
        };
        L.xk = function(a, b) {
            var c = b.getMessage(),
                e = b.getDetailedMessage(),
                f = google[G][Ed].addErrorFromQueryResponse(a, b);
            google[G][db].trigger(this, Mi, {
                id: f,
                message: c,
                detailedMessage: e
            })
        };
        L.Kk = function() {
            var a = this[pd]();
            if (a == k) {
                var b = this.ea,
                    b = b[v](Sj, K),
                    a = rs[b] || k;
                a == k && d(r("Invalid visualization type: " + b))
            }
            O(a) && (a = [a]);
            return a
        };
        L.td = function(a, b) {
            var c = qs(this.ea);
            c || d(r("Invalid " + this.dd + " type: " + this.ea));
            this.od && (this.$g(), Ma(this, this.od), this.od = k);
            !this[G] || this[G][Mc] != c || !this.Jj(a, this[G]) ? (this.$g(), c = new c(a)) : c = this[G];
            this.Ij(c);
            this.Yg = b;
            for (var e = Qr(this[gb]()), e = new W({
                    chartType: this.ea,
                    dataTable: b,
                    options: e,
                    view: this[wc]()
                }), f = 0; f < this.$f[D]; f++) this.$f[f](e);
            c[hd](e[ob](), e[gb](), this[ld]())
        };
        L.pushView = function(a) {
            qn(this.Eb) ? this.Eb[t](a) : this.Eb = this.Eb === k ? [a] : [this.Eb, a]
        };
        L.lk = function(a, b) {
            if (b[Gb]()) this.xk(a, b);
            else {
                var c = b[ob]();
                this.td(a, c)
            }
        };
        L.Ij = function(a) {
            var b = this;
            this.wk();
            var c = [];
            go([Dl, Ql, Mi, jm], function(e) {
                var f = google[G][db].addListener(a, e, function(c) {
                    e == Dl && Ma(b, a);
                    (e == Dl || e == jm) && wn(a[ld]) && b[pc](a[ld][I](a));
                    google[G][db].trigger(b, e, c)
                });
                c[t](f)
            });
            this.Qd = c
        };
        L.Rj = function(a) {
            var a = {
                    packages: this.Kk(),
                    callback: a
                },
                b = ln(Tj);
            b === k && (b = sf);
            google.load(Xm, b, a)
        };
        L.bh = function(a) {
            var b = this[ob]();
            b ? this.td(a, b) : (b = Dn(this.lk, this, a), b = google[G][Ed].createProtectedCallback(b, Dn(this.af, this, a)), this.sendQuery(b, i))
        };
        L.sendQuery = function(a, b) {
            var c = un(b) ? b : l,
                e = this[Zc]() || K,
                e = new google[G].Query(e),
                f = this[kd]();
            f && c && e[Zb](f);
            (c = this[vd]()) && e[Vc](c);
            e[Cb](a)
        };
        L.$g = function() {
            this[G] && wn(this[G].clearChart) && this[G].clearChart();
            Ma(this, k)
        };
        L.wk = function() {
            qn(this.Qd) && (go(this.Qd, function(a) {
                google[G][db].removeListener(a)
            }), this.Qd = k)
        };
        L.Jj = function(a, b) {
            return b && wn(b[Cd]) ? b[Cd]() == a : l
        };

        function W(a) {
            ys[I](this, ai, a)
        }
        P(W, ys);
        L = W[F];
        L.getChart = ys[F].xf;
        L.setChart = ys[F].Yk;
        L.setChartType = ys[F].nf;
        L.getChartType = ys[F].Jh;
        L.setChartName = ys[F].zf;
        L.getChartName = ys[F][Eb];

        function X(a) {
            ys[I](this, ki, a)
        }
        P(X, ys);
        L = X[F];
        L.getControl = ys[F].xf;
        L.setControlType = ys[F].nf;
        L.getControlType = ys[F].Jh;
        L.setControlName = ys[F].zf;
        L.getControlName = ys[F][Eb];

        function Y(a) {
            ys[I](this, oi, a);
            a = a || {};
            O(a) && (a = Rn(a));
            this.xa = a.wrappers || k;
            this.ec = a.bindings || k;
            this.nf(a.dashboardType || bg);
            this.lf()
        }
        P(Y, ys);
        L = Y[F];
        L.td = function(a, b) {
            function c(a) {
                return h[a]
            }
            dq(this[G]);
            for (var e = new google[G].Dashboard(a), f = this.ec || [], h = this.xa, j = f[D], p = 0; p < j; p++) {
                var s = io(f[p].controls, c),
                    x = io(f[p].participants, c);
                e[dc](s, x)
            }
            Ma(this, e);
            Y.b.td[I](this, a, b)
        };
        L.kh = function(a) {
            a.wrappers = this.xa ? io(this.xa, function(a) {
                return a[Bc]()
            }) : g;
            a.bindings = this.ec || g
        };
        L.setWrappers = function(a) {
            this.xa = a || k;
            this.lf()
        };
        L.getWrappers = function() {
            return this.xa
        };
        L.setBindings = function(a) {
            this.ec = a || k;
            this.lf()
        };
        L.getBindings = function() {
            return this.ec
        };
        L.getDashboard = ys[F].xf;
        L.setDashboardName = ys[F].zf;
        L.getDashboardName = ys[F][Eb];
        L.lf = function() {
            var a = this.xa,
                b = this.ec;
            if (!(qn(a) ? 0 == a[D] : 1) || !(qn(b) ? 0 == b[D] : 1)) this.xa = io(a, this.$j, this), this.ec = io(b, this.Zj, this)
        };
        L.$j = function(a) {
            this.mh(a) || (a = google[G].createWrapper(a));
            a[dd](k);
            a[Gc](k);
            return a
        };
        L.Zj = function(a) {
            var b = a.controls,
                c = a.participants;
            ((qn(b) ? 0 == b[D] : 1) || (qn(c) ? 0 == c[D] : 1)) && d(r("invalid binding: " + a));
            b = io(b, this.Hh, this);
            c = io(c, this.Hh, this);
            return {
                controls: b,
                participants: c
            }
        };
        L.Hh = function(a) {
            !/[^0-9]/ [Ya](a) && (a = ka(a, 10));
            if (vn(a)) return a;
            var b = a;
            if (this.dk(a)) return this.mh(b) || (b = google[G].createWrapper(b)), this.xa[t](b), this.xa[D] - 1;
            a = this.ck();
            a = !Un(co(b)) ? fo(a, b) : -1; - 1 == a && d(r("Invalid wrapper name: " + b));
            return a
        };
        L.mh = function(a) {
            return wn(a[Bc])
        };
        L.dk = function(a) {
            var b = /${.*}^/;
            return tn(a) || O(a) && b[Ya](a)
        };
        L.ck = function() {
            return io(this.xa, function(a) {
                return a[Eb]()
            })
        };

        function As(a, b) {
            Bs(a)[hd](b)
        }

        function Bs(a) {
            a = a || {};
            O(a) && (a = Rn(a));
            return a.controlType ? new google[G].ControlWrapper(a) : a.dashboardType ? new google[G].DashboardWrapper(a) : new google[G].ChartWrapper(a)
        };

        function Cs(a) {
            for (var b = 0, c = 0; c < a[D]; c++) b += a[c];
            return b
        };

        function Ds(a, b, c, e, f) {
            this.S = !!b;
            a && this.hc(a, e);
            ya(this, f != g ? f : this.oa || 0);
            this.S && ya(this, -1 * this[$b]);
            this.Bd = !c
        }
        P(Ds, Xp);
        L = Ds[F];
        L.ma = k;
        L.oa = 0;
        L.Ie = l;
        L.hc = function(a, b, c) {
            if (this.ma = a) this.oa = vn(b) ? b : 1 != this.ma[cb] ? 0 : this.S ? -1 : 1;
            vn(c) && ya(this, c)
        };
        L.pe = function(a) {
            this.ma = a.ma;
            this.oa = a.oa;
            ya(this, a[$b]);
            this.S = a.S;
            this.Bd = a.Bd
        };
        Na(L, function() {
            return new Ds(this.ma, this.S, !this.Bd, this.oa, this[$b])
        });
        L.Yj = function() {
            var a = this.S ? 1 : -1;
            this.oa == a && (this.oa = -1 * a, ya(this, this[$b] + this.oa * (this.S ? -1 : 1)))
        };
        La(L, function() {
            var a;
            if (this.Ie) {
                (!this.ma || this.Bd && 0 == this[$b]) && d(Wp);
                a = this.ma;
                var b = this.S ? -1 : 1;
                if (this.oa == b) {
                    var c = this.S ? a[ad] : a[Ob];
                    c ? this.hc(c) : this.hc(a, -1 * b)
                } else(c = this.S ? a.previousSibling : a[hc]) ? this.hc(c) : this.hc(a[Fd], -1 * b);
                ya(this, this[$b] + this.oa * (this.S ? -1 : 1))
            } else this.Ie = i;
            (a = this.ma) || d(Wp);
            return a
        });
        L.uj = function() {
            return 1 == this.oa
        };
        L.splice = function(a) {
            var b = this.ma;
            this.Yj();
            this.S = !this.S;
            Ds[F].next[I](this);
            this.S = !this.S;
            for (var c = rn(arguments[0]) ? arguments[0] : arguments, e = c[D] - 1; 0 <= e; e--) b[Fd] && b[Fd][qb](c[e], b[hc]);
            Np(b)
        };

        function Es(a, b) {
            Ds[I](this, a, b, i)
        }
        P(Es, Ds);

        function Fs(a, b, c, e, f) {
            var h;
            if (a && (this.H = a, this.L = b, this.A = c, this.K = e, 1 == a[cb] && a[zd] != Qf && (a = a[ac], (b = a[b]) ? (this.H = b, this.L = 0) : (a[D] && (this.H = a[a[D] - 1]), h = i)), 1 == c[cb]))(this.A = c[ac][e]) ? this.K = 0 : this.A = c;
            Ds[I](this, f ? this.A : this.H, f, i);
            if (h) try {
                this.next()
            } catch (j) {
                j != Wp && d(j)
            }
        }
        P(Fs, Es);
        L = Fs[F];
        L.H = k;
        L.A = k;
        L.L = 0;
        L.K = 0;
        L.ka = function() {
            return this.H
        };
        L.Ga = function() {
            return this.A
        };
        L.lj = function() {
            return this.Ie && this.ma == this.A && (!this.K || !this.uj())
        };
        La(L, function() {
            this.lj() && d(Wp);
            return Fs.b.next[I](this)
        });
        L.pe = function(a) {
            this.H = a.H;
            this.A = a.A;
            this.L = a.L;
            this.K = a.K;
            this.Rf = a.Rf;
            Fs.b.pe[I](this, a)
        };
        Na(L, function() {
            var a = new Fs(this.H, this.L, this.A, this.K, this.Rf);
            a.pe(this);
            return a
        });

        function Gs() {}
        Gs[F].tg = function(a, b) {
            var c = b && !a[Ua](),
                e = a.m;
            try {
                return c ? 0 <= this.da(e, 0, 1) && 0 >= this.da(e, 1, 0) : 0 <= this.da(e, 0, 0) && 0 >= this.da(e, 1, 1)
            } catch (f) {
                return Q || d(f), l
            }
        };
        Gs[F].Gh = function() {
            return new Fs(this.ka(), this.Va(), this.Ga(), this.xb())
        };

        function Hs(a) {
            this.m = a
        }
        P(Hs, Gs);

        function Is(a) {
            var b = zp(a).createRange();
            if (3 == a[cb]) b[vc](a, 0), b[tb](a, a[D]);
            else if (Js(a)) {
                for (var c, e = a;
                    (c = e[Ob]) && Js(c);) e = c;
                b[vc](e, 0);
                for (e = a;
                    (c = e[ad]) && Js(c);) e = c;
                b[tb](e, 1 == e[cb] ? e[ac][D] : e[D])
            } else c = a[Fd], a = fo(c[ac], a), b[vc](c, a), b[tb](c, a + 1);
            return b
        }

        function Ks(a, b, c, e) {
            var f = zp(a).createRange();
            f[vc](a, b);
            f[tb](c, e);
            return f
        }
        L = Hs[F];
        Na(L, function() {
            return new this[Mc](this.m.cloneRange())
        });
        L.getContainer = function() {
            return this.m.commonAncestorContainer
        };
        L.ka = function() {
            return this.m.startContainer
        };
        L.Va = function() {
            return this.m.startOffset
        };
        L.Ga = function() {
            return this.m.endContainer
        };
        L.xb = function() {
            return this.m.endOffset
        };
        L.da = function(a, b, c) {
            return this.m.compareBoundaryPoints(1 == c ? 1 == b ? M.Range.START_TO_START : M.Range.START_TO_END : 1 == b ? M.Range.END_TO_START : M.Range.END_TO_END, a)
        };
        L.isCollapsed = function() {
            return this.m.collapsed
        };
        L.select = function(a) {
            var b = Fp(zp(this.ka()));
            this.Cc(b.getSelection(), a)
        };
        L.Cc = function(a) {
            a.removeAllRanges();
            a.addRange(this.m)
        };
        L.collapse = function(a) {
            this.m[ab](a)
        };

        function Ls(a) {
            this.m = a
        }
        P(Ls, Hs);
        Ls[F].Cc = function(a, b) {
            if (!b || this[Ua]()) Ls.b.Cc[I](this, a, b);
            else a[ab](this.Ga(), this.xb()), a.extend(this.ka(), this.Va())
        };

        function Ms(a, b) {
            this.m = a;
            this.Zi = b
        }
        P(Ms, Gs);

        function Ns(a) {
            var b = zp(a)[Wc].createTextRange();
            if (1 == a[cb]) b.moveToElementText(a), Js(a) && !a[ac][D] && b[ab](l);
            else {
                for (var c = 0, e = a; e = e.previousSibling;) {
                    var f = e[cb];
                    if (3 == f) c += e[D];
                    else if (1 == f) {
                        b.moveToElementText(e);
                        break
                    }
                }
                e || b.moveToElementText(a[Fd]);
                b[ab](!e);
                c && b.move($h, c);
                b.moveEnd($h, a[D])
            }
            return b
        }

        function Os(a, b, c, e) {
            var f = a,
                h = b,
                j = c,
                p = e,
                s = l;
            1 == f[cb] && (h = f[ac][h], s = !h, f = h || f[ad] || f, h = 0);
            var x = Ns(f);
            h && x.move($h, h);
            if (f == j && h == p) x[ab](i);
            else s && x[ab](l), s = l, 1 == j[cb] && (j = (h = j[ac][p]) || j[ad] || j, p = 0, s = !h), f = Ns(j), f[ab](!s), p && f.moveEnd($h, p), x.setEndPoint(fg, f);
            p = new Ms(x, zp(a));
            p.H = a;
            p.L = b;
            p.A = c;
            p.K = e;
            return p
        }
        L = Ms[F];
        L.Ha = k;
        L.H = k;
        L.A = k;
        L.L = -1;
        L.K = -1;
        Na(L, function() {
            var a = new Ms(this.m.duplicate(), this.Zi);
            a.Ha = this.Ha;
            a.H = this.H;
            a.A = this.A;
            return a
        });
        L.getContainer = function() {
            if (!this.Ha) {
                var a = this.m.text,
                    b = this.m.duplicate(),
                    c = a[v](/ +$/, K);
                (c = a[D] - c[D]) && b.moveEnd($h, -c);
                c = b.parentElement();
                b = b.htmlText[v](/(\r\n|\r|\n)+/g, Rd)[D];
                if (this[Ua]() && 0 < b) return this.Ha = c;
                for (; b > c.outerHTML[v](/(\r\n|\r|\n)+/g, Rd)[D];) c = c[Fd];
                for (; 1 == c[ac][D] && c.innerText == (3 == c[Ob][cb] ? c[Ob].nodeValue : c[Ob].innerText) && Js(c[Ob]);) c = c[Ob];
                0 == a[D] && (c = this.Rg(c));
                this.Ha = c
            }
            return this.Ha
        };
        L.Rg = function(a) {
            for (var b = a[ac], c = 0, e = b[D]; c < e; c++) {
                var f = b[c];
                if (Js(f)) {
                    var h = Ns(f),
                        j = h.htmlText != f.outerHTML;
                    if (this[Ua]() && j ? 0 <= this.da(h, 1, 1) && 0 >= this.da(h, 1, 0) : this.m.inRange(h)) return this.Rg(f)
                }
            }
            return a
        };
        L.ka = function() {
            this.H || (this.H = this.Ac(1), this[Ua]() && (this.A = this.H));
            return this.H
        };
        L.Va = function() {
            0 > this.L && (this.L = this.Ug(1), this[Ua]() && (this.K = this.L));
            return this.L
        };
        L.Ga = function() {
            if (this[Ua]()) return this.ka();
            this.A || (this.A = this.Ac(0));
            return this.A
        };
        L.xb = function() {
            if (this[Ua]()) return this.Va();
            0 > this.K && (this.K = this.Ug(0), this[Ua]() && (this.L = this.K));
            return this.K
        };
        L.da = function(a, b, c) {
            return this.m.compareEndPoints((1 == b ? Sg : eg) + $g + (1 == c ? Sg : eg), a)
        };
        L.Ac = function(a, b) {
            var c = b || this[Cd]();
            if (!c || !c[Ob]) return c;
            for (var e = 1 == a, f = 0, h = c[ac][D]; f < h; f++) {
                var j = e ? f : h - f - 1,
                    p = c[ac][j],
                    s;
                try {
                    s = Ps(p)
                } catch (x) {
                    continue
                }
                var z = s.m;
                if (this[Ua]())
                    if (Js(p)) {
                        if (s.tg(this)) return this.Ac(a, p)
                    } else {
                        if (0 == this.da(z, 1, 1)) {
                            this.L = this.K = j;
                            break
                        }
                    }
                else {
                    if (this.tg(s)) {
                        if (!Js(p)) {
                            e ? this.L = j : this.K = j + 1;
                            break
                        }
                        return this.Ac(a, p)
                    }
                    if (0 > this.da(z, 1, 0) && 0 < this.da(z, 0, 1)) return this.Ac(a, p)
                }
            }
            return c
        };
        L.zj = function(a, b, c) {
            return this.m.compareEndPoints((1 == b ? Sg : eg) + $g + (1 == c ? Sg : eg), Ps(a).m)
        };
        L.Ug = function(a, b) {
            var c = 1 == a,
                e = b || (c ? this.ka() : this.Ga());
            if (1 == e[cb]) {
                for (var e = e[ac], f = e[D], h = c ? 1 : -1, j = c ? 0 : f - 1; 0 <= j && j < f; j += h) {
                    var p = e[j];
                    if (!Js(p) && 0 == this.zj(p, a, a)) return c ? j : j + 1
                }
                return -1 == j ? 0 : j
            }
            f = this.m.duplicate();
            h = Ns(e);
            f.setEndPoint(c ? fg : Ug, h);
            f = f.text[D];
            return c ? e[D] - f : f
        };
        L.isCollapsed = function() {
            return 0 == this.m.compareEndPoints(Tg, this.m)
        };
        L.select = function() {
            this.m.select()
        };
        L.collapse = function(a) {
            this.m[ab](a);
            a ? (this.A = this.H, this.K = this.L) : (this.H = this.A, this.L = this.K)
        };

        function Qs(a) {
            this.m = a
        }
        P(Qs, Hs);
        Qs[F].Cc = function(a) {
            a[ab](this.ka(), this.Va());
            (this.Ga() != this.ka() || this.xb() != this.Va()) && a.extend(this.Ga(), this.xb());
            0 == a.rangeCount && a.addRange(this.m)
        };

        function Rs(a) {
            this.m = a
        }
        P(Rs, Hs);
        Rs[F].da = function(a, b, c) {
            return Uo(vf) ? Rs.b.da[I](this, a, b, c) : this.m.compareBoundaryPoints(1 == c ? 1 == b ? M.Range.START_TO_START : M.Range.END_TO_START : 1 == b ? M.Range.START_TO_END : M.Range.END_TO_END, a)
        };
        Rs[F].Cc = function(a, b) {
            a.removeAllRanges();
            b ? a.setBaseAndExtent(this.Ga(), this.xb(), this.ka(), this.Va()) : a.setBaseAndExtent(this.ka(), this.Va(), this.Ga(), this.xb())
        };

        function Ps(a) {
            if (Q && !Wo(9)) {
                var b = new Ms(Ns(a), zp(a));
                if (Js(a)) {
                    for (var c, e = a;
                        (c = e[Ob]) && Js(c);) e = c;
                    b.H = e;
                    b.L = 0;
                    for (e = a;
                        (c = e[ad]) && Js(c);) e = c;
                    b.A = e;
                    b.K = 1 == e[cb] ? e[ac][D] : e[D];
                    b.Ha = a
                } else b.H = b.A = b.Ha = a[Fd], b.L = fo(b.Ha[ac], a), b.K = b.L + 1;
                a = b
            } else a = Ho ? new Rs(Is(a)) : Go ? new Ls(Is(a)) : Fo ? new Qs(Is(a)) : new Hs(Is(a));
            return a
        }

        function Js(a) {
            var b;
            a: if (1 != a[cb]) b = l;
                else {
                    switch (a[zd]) {
                        case Lf:
                        case Mf:
                        case Of:
                        case Qf:
                        case Uf:
                        case Vf:
                        case dg:
                        case ig:
                        case mg:
                        case pg:
                        case qg:
                        case og:
                        case rg:
                        case wg:
                        case xg:
                        case Eg:
                        case Fg:
                        case yg:
                        case Ig:
                        case Jg:
                        case Ng:
                        case Pg:
                        case Qg:
                        case Yg:
                        case dh:
                            b = l;
                            break a
                    }
                    b = i
                }
            return b || 3 == a[cb]
        };

        function Ss(a, b, c) {
            a[Tb](Bh + b, c)
        };

        function Ts(a, b, c, e, f) {
            if (!Q && (!Ho || !Uo(uf))) return i;
            if (Ao && f) return Us(a);
            if (f && !e || !c && (17 == b || 18 == b) || Q && e && b == a) return l;
            switch (a) {
                case 13:
                    return !(Q && Wo(9));
                case 27:
                    return !Ho
            }
            return Us(a)
        }

        function Us(a) {
            if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || Ho && 0 == a) return i;
            switch (a) {
                case 32:
                case 63:
                case 107:
                case 109:
                case 110:
                case 111:
                case 186:
                case 59:
                case 189:
                case 187:
                case 61:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                case 219:
                case 220:
                case 221:
                    return i;
                default:
                    return l
            }
        }

        function Vs(a) {
            switch (a) {
                case 61:
                    return 187;
                case 59:
                    return 186;
                case 224:
                    return 91;
                case 0:
                    return 224;
                default:
                    return a
            }
        };

        function Ws(a) {
            this.Qg = a;
            this.C = []
        }
        P(Ws, bq);
        var Xs = [];
        L = Ws[F];
        L.h = function(a, b, c, e, f) {
            qn(b) || (Xs[0] = b, b = Xs);
            for (var h = 0; h < b[D]; h++) {
                var j = sq(a, b[h], c || this, e || l, f || this.Qg || this);
                this.C[t](j)
            }
            return this
        };
        L.W = function(a, b, c, e, f) {
            if (qn(b))
                for (var h = 0; h < b[D]; h++) this.W(a, b[h], c, e, f);
            else {
                a: {
                    c = c || this;f = f || this.Qg || this;e = !!e;
                    if (a = wq(a, b, e))
                        for (b = 0; b < a[D]; b++)
                            if (!a[b].Ab && a[b].$b == c && a[b][ub] == e && a[b].qd == f) {
                                a = a[b];
                                break a
                            }
                    a = k
                }
                a && (a = a.key, xq(a), lo(this.C, a))
            }
            return this
        };
        L.removeAll = function() {
            go(this.C, xq);
            Ha(this.C, 0)
        };
        L.j = function() {
            Ws.b.j[I](this);
            this[ed]()
        };
        xa(L, function() {
            d(r("EventHandler.handleEvent not implemented"))
        });

        function Ys(a, b, c) {
            Oa(this, a);
            this.handle = b || a;
            this.Xe = c || new Rr(NaN, NaN, NaN, NaN);
            this.l = zp(a);
            this.Da = new Ws(this);
            sq(this.handle, [Fm, Qk], this.Uf, l, this)
        }
        P(Ys, Dq);
        var Zs = Q || Go && Uo("1.9.3");
        L = Ys[F];
        Ca(L, 0);
        Da(L, 0);
        ta(L, 0);
        va(L, 0);
        L.cg = 0;
        L.dg = 0;
        L.cc = 0;
        L.dc = 0;
        L.lb = i;
        L.zb = l;
        L.bg = 0;
        L.Si = l;
        L.xe = l;
        L.O = function() {
            return this.Da
        };
        L.Zf = function(a) {
            this.Xe = a || new Rr(NaN, NaN, NaN, NaN)
        };
        L.j = function() {
            Ys.b.j[I](this);
            vq(this.handle, [Fm, Qk], this.Uf, l, this);
            this.Sf();
            Oa(this, k);
            this.Da = this.handle = k
        };
        L.Pg = function() {
            pn(this.$a) || (this.$a = as(this[$c]));
            return this.$a
        };
        L.Uf = function(a) {
            var b = a[B] == Qk;
            if (this.lb && !this.zb && (!b || a.ge())) {
                this.te(a);
                if (0 == this.bg)
                    if (this.ag(a)) this.zb = i, a[pb]();
                    else return;
                else a[pb]();
                this.Hi();
                Ca(this, this.cg = a[mc]);
                Da(this, this.dg = a[nc]);
                ta(this, a[yb]);
                va(this, a[zb]);
                if (this.xe) {
                    var a = this[$c],
                        b = a[Rc],
                        c = a[Lc];
                    !c && Ur(a) == Qi && (c = zp(a)[oc]);
                    if (c) {
                        if (Go) var e = ns(c),
                            b = b + e[A];
                        else Wo(8) && (e = ns(c), b -= e[A]);
                        a = as(c) ? c[Dc] - (b + a.offsetWidth) : b
                    } else a = b
                } else a = this[$c][Rc];
                this.cc = a;
                this.dc = this[$c][Hd];
                this.Ce = xp(this.l).Tb();
                Fn()
            } else this[y](Hi)
        };
        L.Hi = function() {
            var a = this.l,
                b = a[oc],
                c = !Zs;
            this.Da.h(a, [Em, Rk], this.Ri, c);
            this.Da.h(a, [Dm, Uk], this.md, c);
            Zs ? (b.setCapture(l), this.Da.h(b, Fk, this.md)) : this.Da.h(Fp(a), Ih, this.md);
            Q && this.Si && this.Da.h(a, Fi, jq);
            this.Ui && this.Da.h(this.Ui, Pl, this.Ti, c)
        };
        L.ag = function(a) {
            return this[y](new $s(im, this, a[mc], a[nc], a))
        };
        L.Sf = function() {
            this.Da[ed]();
            Zs && this.l.releaseCapture()
        };
        L.md = function(a, b) {
            this.Sf();
            if (this.zb) {
                this.te(a);
                this.zb = l;
                var c = this.Fg(this.cc),
                    e = this.Gg(this.dc);
                this[y](new $s(Ki, this, a[mc], a[nc], a, c, e, b || a[B] == Cm))
            } else this[y](Hi);
            (a[B] == Dm || a[B] == Cm) && a[pb]()
        };
        L.te = function(a) {
            var b = a[B];
            b == Fm || b == Em ? a.Ib(a.V[rb][0], a.currentTarget) : (b == Dm || b == Cm) && a.Ib(a.V.changedTouches[0], a.currentTarget)
        };
        L.Ri = function(a) {
            if (this.lb) {
                this.te(a);
                var b = (this.xe && this.Pg() ? -1 : 1) * (a[mc] - this[mc]),
                    c = a[nc] - this[nc];
                Ca(this, a[mc]);
                Da(this, a[nc]);
                ta(this, a[yb]);
                va(this, a[zb]);
                if (!this.zb) {
                    var e = this.cg - this[mc],
                        f = this.dg - this[nc];
                    if (e * e + f * f > this.bg)
                        if (this.ag(a)) this.zb = i;
                        else {
                            this.kc || this.md(a);
                            return
                        }
                }
                c = this.Ng(b, c);
                b = c.x;
                c = c.y;
                this.zb && this[y](new $s(Eh, this, a[mc], a[nc], a, b, c)) && (this.Og(a, b, c, l), a[pb]())
            }
        };
        L.Ng = function(a, b) {
            var c = xp(this.l).Tb(),
                a = a + (c.x - this.Ce.x),
                b = b + (c.y - this.Ce.y);
            this.Ce = c;
            this.cc += a;
            this.dc += b;
            var c = this.Fg(this.cc),
                e = this.Gg(this.dc);
            return new to(c, e)
        };
        L.Ti = function(a) {
            var b = this.Ng(0, 0);
            Ca(a, this[mc]);
            Da(a, this[nc]);
            this.Og(a, b.x, b.y, i)
        };
        L.Og = function(a, b, c) {
            this.Lk(b, c);
            this[y](new $s(Ei, this, a[mc], a[nc], a, b, c))
        };
        L.Fg = function(a) {
            var b = this.Xe,
                c = !ha(b[A]) ? b[A] : k,
                b = !ha(b[u]) ? b[u] : 0;
            return q.min(c != k ? c + b : fa, q.max(c != k ? c : -fa, a))
        };
        L.Gg = function(a) {
            var b = this.Xe,
                c = !ha(b.top) ? b.top : k,
                b = !ha(b[J]) ? b[J] : 0;
            return q.min(c != k ? c + b : fa, q.max(c != k ? c : -fa, a))
        };
        L.Lk = function(a, b) {
            this.xe && this.Pg() ? Sa(this[$c][H], a + Bl) : sa(this[$c][H], a + Bl);
            this[$c][H].top = b + Bl
        };

        function $s(a, b, c, e, f, h, j) {
            iq[I](this, a);
            Ca(this, c);
            Da(this, e);
            sa(this, pn(h) ? h : b.cc);
            this.top = pn(j) ? j : b.dc
        }
        P($s, iq);

        function at(a) {
            this.i = a;
            a = Q ? Ti : Ih;
            this.mi = sq(this.i, Q ? Si : Ri, this, !Q);
            this.ni = sq(this.i, a, this, !Q)
        }
        P(at, Dq);
        xa(at[F], function(a) {
            var b = new kq(a.V);
            za(b, a[B] == Si || a[B] == Ri ? Si : Ti);
            this[y](b)
        });
        at[F].j = function() {
            at.b.j[I](this);
            xq(this.mi);
            xq(this.ni);
            delete this.i
        };

        function bt() {}
        nn(bt);
        bt[F].Qk = 0;
        bt[F].qk = function() {
            return zf + (this.Qk++)[sc](36)
        };
        bt.la();

        function ct(a) {
            this.Ta = a || xp();
            this.$a = dt
        }
        P(ct, Dq);
        ct[F].rk = bt.la();
        var dt = k;

        function et(a, b) {
            switch (a) {
                case 1:
                    return b ? yi : Ji;
                case 2:
                    return b ? ak : Nm;
                case 4:
                    return b ? uh : ti;
                case 8:
                    return b ? Ql : Om;
                case 16:
                    return b ? bi : Mm;
                case 32:
                    return b ? Ri : Ih;
                case 64:
                    return b ? hl : fi
            }
            d(r("Invalid component state"))
        }
        L = ct[F];
        L.wd = k;
        L.q = l;
        L.i = k;
        L.$a = k;
        L.de = k;
        L.ta = k;
        L.P = k;
        L.Aa = k;
        L.bi = l;
        L.Lb = function() {
            return this.wd || (this.wd = this.rk.qk())
        };
        L.a = function() {
            return this.i
        };
        L.Tf = function(a) {
            this.i = a
        };
        L.O = function() {
            return this.Ub || (this.Ub = new Ws(this))
        };
        L.Ud = function(a) {
            this == a && d(r(ch));
            a && (this.ta && this.wd && this.ta.Xd(this.wd) && this.ta != a) && d(r(ch));
            this.ta = a;
            ct.b.Ke[I](this, a)
        };
        L.getParent = function() {
            return this.ta
        };
        L.Ke = function(a) {
            this.ta && this.ta != a && d(r("Method not supported"));
            ct.b.Ke[I](this, a)
        };
        L.r = function() {
            return this.Ta
        };
        L.d = function() {
            this.i = this.Ta[Ib](Ci)
        };
        L.kb = function(a) {
            this.If(a)
        };
        L.If = function(a, b) {
            this.q && d(r(Zf));
            this.i || this.d();
            a ? a[qb](this.i, b || k) : this.Ta.l[Wc][Ta](this.i);
            (!this.ta || this.ta.q) && this.I()
        };
        L.I = function() {
            this.q = i;
            this.hb(function(a) {
                !a.q && a.a() && a.I()
            })
        };
        L.T = function() {
            this.hb(function(a) {
                a.q && a.T()
            });
            this.Ub && this.Ub[ed]();
            this.q = l
        };
        L.j = function() {
            ct.b.j[I](this);
            this.q && this.T();
            this.Ub && (this.Ub.U(), delete this.Ub);
            this.hb(function(a) {
                a.U()
            });
            !this.bi && this.i && Np(this.i);
            this.ta = this.de = this.i = this.Aa = this.P = k
        };
        L.Wk = function(a) {
            this.de = a
        };
        L.xd = function(a, b) {
            this.vc(a, this.Pa(), b)
        };
        L.vc = function(a, b, c) {
            a.q && (c || !this.q) && d(r(Zf));
            (0 > b || b > this.Pa()) && d(r("Child component index out of bounds"));
            if (!this.Aa || !this.P) this.Aa = {}, this.P = [];
            if (a[Wa]() == this) {
                var e = a.Lb();
                this.Aa[e] = a;
                lo(this.P, a)
            } else {
                var e = this.Aa,
                    f = a.Lb();
                f in e && d(r('The object already contains the key "' + f + Xd));
                e[f] = a
            }
            a.Ud(this);
            po(this.P, b, 0, a);
            a.q && this.q && a[Wa]() == this ? (c = this.N(), c[qb](a.a(), c[ac][b] || k)) : c ? (this.i || this.d(), b = this.Qa(b + 1), a.If(this.N(), b ? b.i : k)) : this.q && (!a.q && a.i && a.i[Fd]) && a.I()
        };
        L.N = function() {
            return this.i
        };
        L.fe = function() {
            this.$a == k && (this.$a = as(this.q ? this.i : this.Ta.l[Wc]));
            return this.$a
        };
        L.Wb = function(a) {
            this.q && d(r(Zf));
            this.$a = a
        };
        L.Hk = function() {
            return !!this.P && 0 != this.P[D]
        };
        L.Pa = function() {
            return this.P ? this.P[D] : 0
        };
        L.Xd = function(a) {
            return this.Aa && a ? (a in this.Aa ? this.Aa[a] : g) || k : k
        };
        L.Qa = function(a) {
            return this.P ? this.P[a] || k : k
        };
        L.hb = function(a, b) {
            this.P && go(this.P, a, b)
        };
        L.Oc = function(a) {
            return this.P && a ? fo(this.P, a) : -1
        };
        L.removeChild = function(a, b) {
            if (a) {
                var c = O(a) ? a : a.Lb(),
                    a = this.Xd(c);
                c && a && (np(this.Aa, c), lo(this.P, a), b && (a.T(), a.i && Np(a.i)), a.Ud(k))
            }
            a || d(r("Child is not in parent component"));
            return a
        };
        L.Ik = function(a, b) {
            return this[Xc](this.Qa(a), b)
        };
        L.og = function(a) {
            for (var b = []; this.Hk();) b[t](this.Ik(0, a));
            return b
        };

        function ft(a, b) {
            ct[I](this, b);
            this.oi = !!a
        }
        P(ft, ct);
        L = ft[F];
        L.Vd = k;
        L.n = l;
        L.X = k;
        L.Q = k;
        L.sa = k;
        L.w = function() {
            return Hj
        };
        L.Uc = function() {
            return this.X
        };
        L.d = function() {
            ft.b.d[I](this);
            var a = this.a();
            vp(a, this.w());
            Tp(a, i);
            gs(a, l);
            this.ei();
            this.di()
        };
        L.ei = function() {
            this.oi && !this.Q && (this.Q = this.r().d(mk, {
                frameborder: 0,
                style: Mh,
                src: tk
            }), Ja(this.Q, this.w() + ye), gs(this.Q, l), fs(this.Q, 0));
            this.X || (this.X = this.r().d(Ci, this.w() + ye), gs(this.X, l))
        };
        L.di = function() {
            this.sa || (this.sa = this.r()[Ib](gm), gs(this.sa, l), Tp(this.sa, i), this.sa[H].position = sh)
        };
        L.Xh = function() {
            this.Q && Mp(this.Q, this.a());
            Mp(this.X, this.a())
        };
        L.I = function() {
            this.Xh();
            ft.b.I[I](this);
            var a = this.a();
            a[Fd] && a[Fd][qb](this.sa, a[hc]);
            this.Vd = new at(this.r().l);
            this.O().h(this.Vd, Si, this.Wh)
        };
        L.T = function() {
            this.n && this.F(l);
            dq(this.Vd);
            ft.b.T[I](this);
            Np(this.Q);
            Np(this.X);
            Np(this.sa)
        };
        L.F = function(a) {
            a != this.n && (this.Sb && this.Sb[rc](), this.oc && this.oc[rc](), this.Vb && this.Vb[rc](), this.qc && this.qc[rc](), a ? this.tj() : this.rj())
        };
        L.tj = function() {
            this[y](Gh) && (this.le(), this.mc(), this.O().h(this.r().Sc(), Jl, this.le), this.Xf(i), this[Hb](), this.n = i, this.Sb && this.oc ? (uq(this.Sb, Ki, this.Yc, l, this), this.oc[Vb](), this.Sb[Vb]()) : this.Yc())
        };
        L.rj = function() {
            this[y](Fh) && (this.O().W(this.r().Sc(), Jl, this.le), this.n = l, this.Vb && this.qc ? (uq(this.Vb, Ki, this.$c, l, this), this.qc[Vb](), this.Vb[Vb]()) : this.$c())
        };
        L.Xf = function(a) {
            this.Q && gs(this.Q, a);
            this.X && gs(this.X, a);
            gs(this.a(), a);
            gs(this.sa, a)
        };
        L.Yc = function() {
            this[y](cm)
        };
        L.$c = function() {
            this.Xf(l);
            this[y]($j)
        };
        L.focus = function() {
            this.sh()
        };
        L.le = function() {
            this.Q && gs(this.Q, l);
            this.X && gs(this.X, l);
            var a = this.r().l,
                b = Dp(Fp(a) || ca || ca),
                c = q.max(b[u], q.max(a[Wc][fd], a[oc][fd])),
                a = q.max(b[J], q.max(a[Wc][Lb], a[oc][Lb]));
            this.Q && (gs(this.Q, i), bs(this.Q, c, a));
            this.X && (gs(this.X, i), bs(this.X, c, a))
        };
        L.mc = function() {
            var a = this.r().l,
                b = Fp(a) || ca;
            if (Ur(this.a()) == Qi) var c = a = 0;
            else c = this.r().Tb(), a = c.x, c = c.y;
            var e = cs(this.a()),
                b = Dp(b || ca),
                a = q.max(a + b[u] / 2 - e[u] / 2, 0),
                c = q.max(c + b[J] / 2 - e[J] / 2, 0);
            Vr(this.a(), a, c);
            Vr(this.sa, a, c)
        };
        L.Wh = function(a) {
            a[$c] == this.sa && (a = this.sh, wn(a) ? this && (a = Dn(a, this)) : a && typeof a[Wb] == Wi ? a = Dn(a[Wb], a) : d(r(tg)), Fq[Fc](a, 0))
        };
        L.sh = function() {
            try {
                Q && this.r().l[Wc][Hb](), this.a()[Hb]()
            } catch (a) {}
        };
        L.j = function() {
            dq(this.Sb);
            this.Sb = k;
            dq(this.Vb);
            this.Vb = k;
            dq(this.oc);
            this.oc = k;
            dq(this.qc);
            this.qc = k;
            ft.b.j[I](this)
        };

        function gt(a, b, c) {
            ft[I](this, b, c);
            this.ra = a || Ok;
            this.Ra = (new ht).Z(it, i).Z(jt, l, i)
        }
        P(gt, ft);
        L = gt[F];
        L.si = i;
        L.Cf = i;
        L.Df = i;
        L.Yh = i;
        L.Wd = 0.5;
        L.Vh = K;
        L.ha = K;
        L.Wa = k;
        L.Ji = l;
        L.Qb = k;
        L.Jc = k;
        L.Gf = k;
        L.Ic = k;
        L.lc = k;
        L.Oa = k;
        L.Mb = "dialog";
        L.w = function() {
            return this.ra
        };
        Aa(L, function(a) {
            this.ha = a;
            this.lc && qa(this.lc, a)
        });
        L.uf = function(a) {
            this.Mb = a
        };
        L.vd = function() {
            this.a() || this.kb()
        };
        L.N = function() {
            this.vd();
            return this.lc
        };
        L.Yi = function() {
            this.vd();
            return this.Jc
        };
        L.Xi = function() {
            this.vd();
            return this.Oa
        };
        L.Uc = function() {
            this.vd();
            return gt.b.Uc[I](this)
        };
        L.Uh = function(a) {
            this.Wd = a;
            this.a() && (a = this.Uc()) && fs(a, this.Wd)
        };
        L.ai = function(a) {
            this.Df = a;
            if (this.q) {
                var b = this.r(),
                    c = this.Uc(),
                    e = this.Q;
                a ? (e && b.ne(e, this.a()), b.ne(c, this.a())) : (b.removeNode(e), b.removeNode(c))
            }
        };
        L.qi = function() {
            return new Ys(this.a(), this.Qb)
        };
        L.Ef = function(a) {
            if (this.a()) {
                var b = this.Qb,
                    c = this.ra + We;
                a ? vp(b, c) : wp(b, c)
            }
            a && !this.Wa ? (this.Wa = this.qi(), vp(this.Qb, this.ra + We), sq(this.Wa, im, this.ri, l, this)) : !a && this.Wa && (this.Wa.U(), this.Wa = k)
        };
        L.d = function() {
            gt.b.d[I](this);
            var a = this.a(),
                b = this.r();
            this.Qb = b.d(Ci, {
                className: this.ra + Te,
                id: this.Lb()
            }, this.Jc = b.d(gm, this.ra + Xe, this.Vh), this.Ic = b.d(gm, this.ra + Ve));
            Kp(a, this.Qb, this.lc = b.d(Ci, this.ra + De), this.Oa = b.d(Ci, this.ra + ze));
            this.Gf = this.Qb.id;
            a[Tb](Ml, this.Mb);
            Ss(a, Ak, this.Gf || K);
            this.ha && qa(this.lc, this.ha);
            gs(this.Ic, this.Cf);
            this.Ra && this.Ra.Th(this.Oa);
            gs(this.Oa, !!this.Ra);
            this.Uh(this.Wd)
        };
        L.I = function() {
            gt.b.I[I](this);
            this.O().h(this.a(), xk, this.Jf).h(this.a(), yk, this.Jf);
            this.O().h(this.Oa, ei, this.Zh);
            this.Ef(this.Yh);
            this.O().h(this.Ic, ei, this.$h);
            this.a()[Tb](Ml, this.Mb);
            this.Jc.id !== K && Ss(this.a(), Ak, this.Jc.id);
            this.Df || this.ai(l)
        };
        L.T = function() {
            this.n && this.F(l);
            this.Ef(l);
            gt.b.T[I](this)
        };
        L.F = function(a) {
            a != this.n && (this.q || this.kb(), gt.b.F[I](this, a))
        };
        L.Yc = function() {
            gt.b.Yc[I](this);
            this[y](yh)
        };
        L.$c = function() {
            gt.b.$c[I](this);
            this[y](xh);
            this.Ji && this.U()
        };
        L.focus = function() {
            gt.b[Hb][I](this);
            if (this.Ra) {
                var a = this.Ra.Lc;
                if (a)
                    for (var b = this.r().l, c = this.Oa[lc](Wh), e = 0, f; f = c[e]; e++)
                        if (f[gc] == a) {
                            try {
                                if (Ho || Fo) {
                                    var h = b[Ib](rk);
                                    h[H].cssText = xl;
                                    this.a()[Ta](h);
                                    h[Hb]();
                                    this.a()[Xc](h)
                                }
                                f[Hb]()
                            } catch (j) {}
                            break
                        }
            }
        };
        L.ri = function() {
            var a = this.r().l,
                b = Dp(Fp(a) || ca || ca),
                c = q.max(a[Wc][fd], b[u]),
                a = q.max(a[Wc][Lb], b[J]),
                e = cs(this.a());
            Ur(this.a()) == Qi ? this.Wa.Zf(new Rr(0, 0, q.max(0, b[u] - e[u]), q.max(0, b[J] - e[J]))) : this.Wa.Zf(new Rr(0, 0, c - e[u], a - e[J]))
        };
        L.$h = function() {
            if (this.Cf) {
                var a = this.Ra,
                    b = a && a.ze;
                b ? (a = a.get(b), this[y](new kt(b, a)) && this.F(l)) : this.F(l)
            }
        };
        L.j = function() {
            this.Oa = this.Ic = k;
            gt.b.j[I](this)
        };
        L.Zh = function(a) {
            if ((a = this.Wj(a[$c])) && !a[Qc]) {
                var a = a[gc],
                    b = this.Ra.get(a);
                this[y](new kt(a, b)) && this.F(l)
            }
        };
        L.Wj = function(a) {
            for (; a != k && a != this.Oa;) {
                if (a[zd] == Rf) return a;
                a = a[Fd]
            }
            return k
        };
        L.Jf = function(a) {
            var b = l,
                c = l,
                e = this.Ra,
                f = a[$c];
            if (a[B] == xk)
                if (this.si && 27 == a[Mb]) {
                    var h = e && e.ze,
                        f = f[zd] == Og && !f[Qc];
                    h && !f ? (c = i, b = e.get(h), b = this[y](new kt(h, b))) : f || (b = i)
                } else 9 == a[Mb] && (a[yd] && f == this.a()) && (c = i);
            else if (13 == a[Mb]) {
                if (f[zd] == Rf) h = f[gc];
                else if (e) {
                    var j = e.Lc,
                        p = j && e.ti(j),
                        f = (f[zd] == Wg || f[zd] == Og) && !f[Qc];
                    p && (!p[Qc] && !f) && (h = j)
                }
                h && e && (c = i, b = this[y](new kt(h, ma(e.get(h)))))
            }
            if (b || c) a[Nc](), a[pb]();
            b && this.F(l)
        };

        function kt(a, b) {
            za(this, wi);
            this.key = a;
            this.caption = b
        }
        P(kt, iq);

        function ht(a) {
            this.Ta = a || xp();
            $p[I](this)
        }
        P(ht, $p);
        L = ht[F];
        L.ra = "goog-buttonset";
        L.Lc = k;
        L.i = k;
        L.ze = k;
        L.set = function(a, b, c, e) {
            $p[F].set[I](this, a, b);
            c && (this.Lc = a);
            e && (this.ze = a);
            return this
        };
        L.Z = function(a, b, c) {
            return this.set(a.key, a.caption, b, c)
        };
        L.Th = function(a) {
            this.i = a;
            this.kb()
        };
        L.kb = function() {
            if (this.i) {
                qa(this.i, K);
                var a = xp(this.i);
                Zp(this, function(b, c) {
                    var e = a.d(Wh, {
                        name: c
                    }, b);
                    c == this.Lc && Ja(e, this.ra + Ee);
                    this.i[Ta](e)
                }, this)
            }
        };
        L.a = function() {
            return this.i
        };
        L.r = function() {
            return this.Ta
        };
        L.ti = function(a) {
            for (var b = this.Mk(), c = 0, e; e = b[c]; c++)
                if (e[gc] == a || e.id == a) return e;
            return k
        };
        L.Mk = function() {
            return this.i[lc](Rf)
        };
        var it = {
                key: "ok",
                caption: "OK"
            },
            jt = {
                key: "cancel",
                caption: "Cancel"
            },
            lt = {
                key: "yes",
                caption: "Yes"
            },
            mt = {
                key: "no",
                caption: "No"
            },
            nt = {
                key: "save",
                caption: "Save"
            },
            ot = {
                key: "continue",
                caption: "Continue"
            };
        "undefined" != typeof ga && ((new ht).Z(it, i, i), (new ht).Z(it, i).Z(jt, l, i), (new ht).Z(lt, i).Z(mt, l, i), (new ht).Z(lt).Z(mt, i).Z(jt, l, i), (new ht).Z(ot).Z(nt).Z(jt, i, i));

        function pt(a, b) {
            a && this.Kf(a, b)
        }
        P(pt, Dq);
        L = pt[F];
        L.i = k;
        L.zd = k;
        L.Re = k;
        L.Ad = k;
        L.cb = -1;
        L.bb = -1;
        L.ef = l;
        var qt = {
                3: 13,
                12: 144,
                63232: 38,
                63233: 40,
                63234: 37,
                63235: 39,
                63236: 112,
                63237: 113,
                63238: 114,
                63239: 115,
                63240: 116,
                63241: 117,
                63242: 118,
                63243: 119,
                63244: 120,
                63245: 121,
                63246: 122,
                63247: 123,
                63248: 44,
                63272: 46,
                63273: 36,
                63275: 35,
                63276: 33,
                63277: 34,
                63289: 144,
                63302: 45
            },
            rt = {
                Up: 38,
                Down: 40,
                Left: 37,
                Right: 39,
                Enter: 13,
                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                F10: 121,
                F11: 122,
                F12: 123,
                "U+007F": 46,
                Home: 36,
                End: 35,
                PageUp: 33,
                PageDown: 34,
                Insert: 45
            },
            st = Q || Ho && Uo(uf),
            tt = Ao && Go;
        L = pt[F];
        L.xj = function(a) {
            if (Ho && (17 == this.cb && !a[Ic] || 18 == this.cb && !a[tc])) this.bb = this.cb = -1;
            if (st && !Ts(a[Mb], this.cb, a[yd], a[Ic], a[tc])) this[Wb](a);
            else this.bb = Go ? Vs(a[Mb]) : a[Mb], tt && (this.ef = a[tc])
        };
        L.yj = function(a) {
            this.bb = this.cb = -1;
            this.ef = a[tc]
        };
        xa(L, function(a) {
            var b = a.V,
                c, e, f = b[tc];
            Q && a[B] == yk ? (c = this.bb, e = 13 != c && 27 != c ? b[Mb] : 0) : Ho && a[B] == yk ? (c = this.bb, e = 0 <= b[Fb] && 63232 > b[Fb] && Us(c) ? b[Fb] : 0) : Fo ? (c = this.bb, e = Us(c) ? b[Mb] : 0) : (c = b[Mb] || this.bb, e = b[Fb] || 0, tt && (f = this.ef), Ao && (63 == e && 224 == c) && (c = 191));
            var h = c,
                j = b.keyIdentifier;
            c ? 63232 <= c && c in qt ? h = qt[c] : 25 == c && a[yd] && (h = 9) : j && j in rt && (h = rt[j]);
            a = h == this.cb;
            this.cb = h;
            b = new ut(h, e, a, b);
            Ga(b, f);
            this[y](b)
        });
        L.a = function() {
            return this.i
        };
        L.Kf = function(a, b) {
            this.Ad && this.detach();
            this.i = a;
            this.zd = sq(this.i, yk, this, b);
            this.Re = sq(this.i, xk, this.xj, b, this);
            this.Ad = sq(this.i, zk, this.yj, b, this)
        };
        L.detach = function() {
            this.zd && (xq(this.zd), xq(this.Re), xq(this.Ad), this.Ad = this.Re = this.zd = k);
            this.i = k;
            this.bb = this.cb = -1
        };
        L.j = function() {
            pt.b.j[I](this);
            this.detach()
        };

        function ut(a, b, c, e) {
            e && this.Ib(e, g);
            za(this, wk);
            wa(this, a);
            this.charCode = b;
            this.repeat = c
        }
        P(ut, kq);

        function vt() {}
        var wt;
        nn(vt);
        L = vt[F];
        L.eb = function() {};
        L.d = function(a) {
            var b = a.r().d(Ci, this.Zb(a)[Jd](Rd), a.ha);
            this.kg(a, b);
            return b
        };
        L.N = function(a) {
            return a
        };
        L.ud = function(a, b, c) {
            if (a = a.a ? a.a() : a)
                if (Q && !Uo(xf)) {
                    var e = this.jg(up(a), b);
                    e[t](b);
                    En(c ? vp : wp, a)[xd](k, e)
                } else c ? vp(a, b) : wp(a, b)
        };
        L.Wg = function(a, b, c) {
            this.ud(a, b, c)
        };
        L.Nb = function(a) {
            a.fe() && this.Wb(a.a(), i);
            a[cd]() && this.qb(a, a.n)
        };
        L.ki = function(a, b) {
            var c = b || this.eb();
            c && a[Tb](Ml, c)
        };
        L.kg = function(a, b) {
            a[cd]() || this.Ca(b, 1, i);
            a.Kj() && this.Ca(b, 8, i);
            a.R(16) && this.Ca(b, 16, a.ee());
            a.R(64) && this.Ca(b, 64, a.pc())
        };
        L.Vc = function(a, b) {
            is(a, !b, !Q && !Fo)
        };
        L.Wb = function(a, b) {
            this.ud(a, this.gc() + Re, b)
        };
        L.ib = function(a) {
            var b;
            return a.R(32) && (b = a.M()) ? Sp(b) : l
        };
        L.qb = function(a, b) {
            var c;
            if (a.R(32) && (c = a.M())) {
                if (!b && a.Xg()) {
                    try {
                        c.blur()
                    } catch (e) {}
                    a.Xg() && a.pb(k)
                }
                Sp(c) != b && Tp(c, b)
            }
        };
        L.F = function(a, b) {
            gs(a, b)
        };
        Fa(L, function(a, b, c) {
            var e = a.a();
            if (e) {
                var f = this.bd(b);
                f && this.ud(a, f, c);
                this.Ca(e, b, c)
            }
        });
        L.Ca = function(a, b, c) {
            wt || (wt = {
                1: zi,
                8: Rl,
                16: ci,
                64: Ni
            });
            (b = wt[b]) && Ss(a, b, c)
        };
        Aa(L, function(a, b) {
            var c = this.N(a);
            if (c && (Lp(c), b))
                if (O(b))
                    if (xm in c) c.textContent = b;
                    else if (c[Ob] && 3 == c[Ob][cb]) {
                for (; c[ad] != c[Ob];) c[Xc](c[ad]);
                c[Ob].data = b
            } else Lp(c), c[Ta](zp(c)[lb](b));
            else {
                var e = function(a) {
                    if (a) {
                        var b = zp(c);
                        c[Ta](O(a) ? b[lb](a) : a)
                    }
                };
                qn(b) ? go(b, e) : rn(b) && !(Zk in b) ? go(no(b), e) : e(b)
            }
        });
        L.M = function(a) {
            return a.a()
        };
        L.w = function() {
            return xj
        };
        L.gc = function() {
            return this.w()
        };
        L.Zb = function(a) {
            var b = this.w(),
                c = [b],
                e = this.gc();
            e != b && c[t](e);
            b = this.Dj(a[ld]());
            c[t][xd](c, b);
            (a = a.wa) && c[t][xd](c, a);
            Q && !Uo(xf) && c[t][xd](c, this.jg(c));
            return c
        };
        L.jg = function(a, b) {
            var c = [];
            b && (a = a[ib]([b]));
            go([], function(e) {
                jo(e, En(ko, a)) && (!b || ko(e, b)) && c[t](e[Jd](oh))
            });
            return c
        };
        L.Dj = function(a) {
            for (var b = []; a;) {
                var c = a & -a;
                b[t](this.bd(c));
                a &= ~c
            }
            return b
        };
        L.bd = function(a) {
            this.th || this.Bk();
            return this.th[a]
        };
        L.Bk = function() {
            var a = this.gc();
            this.th = {
                1: a + Fe,
                2: a + Ke,
                4: a + xe,
                8: a + Se,
                16: a + Ce,
                32: a + He,
                64: a + Pe
            }
        };

        function xt(a, b) {
            a || d(r("Invalid class name " + a));
            wn(b) || d(r("Invalid decorator function " + b))
        }
        var yt = {};

        function zt(a, b, c) {
            ct[I](this, c);
            if (!b) {
                for (var b = this[Mc], e; b;) {
                    e = xn(b);
                    if (e = yt[e]) break;
                    b = b.b ? b.b[Mc] : k
                }
                b = e ? wn(e.la) ? e.la() : new e : k
            }
            this.k = b;
            this.Pf(a)
        }
        P(zt, ct);
        L = zt[F];
        L.ha = k;
        L.Fa = 0;
        L.nc = 39;
        L.Nd = 255;
        L.Gd = 0;
        L.n = i;
        L.wa = k;
        L.Yd = i;
        L.Zd = l;
        L.Mb = k;
        L.be = function(a) {
            this.q && a != this.Yd && this.Hf(a);
            this.Yd = a
        };
        L.M = function() {
            return this.k.M(this)
        };
        L.Pc = function() {
            return this.ba || (this.ba = new pt)
        };
        L.Gk = function(a) {
            a && (this.wa ? ko(this.wa, a) || this.wa[t](a) : this.wa = [a], this.k.Wg(this, a, i))
        };
        L.Jk = function(a) {
            a && this.wa && (lo(this.wa, a), 0 == this.wa[D] && (this.wa = k), this.k.Wg(this, a, l))
        };
        L.ud = function(a, b) {
            b ? this.Gk(a) : this.Jk(a)
        };
        L.d = function() {
            var a = this.k.d(this);
            this.Tf(a);
            this.k.ki(a, this.Mb);
            this.Zd || this.k.Vc(a, l);
            this.n || this.k.F(a, l)
        };
        L.uf = function(a) {
            this.Mb = a
        };
        L.N = function() {
            return this.k.N(this.a())
        };
        L.I = function() {
            zt.b.I[I](this);
            this.k.Nb(this);
            if (this.nc & -2 && (this.Yd && this.Hf(i), this.R(32))) {
                var a = this.M();
                if (a) {
                    var b = this.Pc();
                    b.Kf(a);
                    this.O().h(b, wk, this.pa).h(a, Ri, this.Qc).h(a, Ih, this.pb)
                }
            }
        };
        L.Hf = function(a) {
            var b = this.O(),
                c = this.a();
            a ? (b.h(c, Tk, this.ke).h(c, Qk, this.jb).h(c, Uk, this.ob).h(c, Sk, this.je), this.uc != mn && b.h(c, ji, this.uc), Q && b.h(c, si, this.Qf)) : (b.W(c, Tk, this.ke).W(c, Qk, this.jb).W(c, Uk, this.ob).W(c, Sk, this.je), this.uc != mn && b.W(c, ji, this.uc), Q && b.W(c, si, this.Qf))
        };
        L.T = function() {
            zt.b.T[I](this);
            this.ba && this.ba.detach();
            this.n && this[cd]() && this.k.qb(this, l)
        };
        L.j = function() {
            zt.b.j[I](this);
            this.ba && (this.ba.U(), delete this.ba);
            delete this.k;
            this.wa = this.ha = k
        };
        Aa(L, function(a) {
            this.k[fc](this.a(), a);
            this.Pf(a)
        });
        L.Pf = function(a) {
            this.ha = a
        };
        L.rc = function() {
            var a = this.ha;
            if (!a) return K;
            if (!O(a))
                if (qn(a)) a = io(a, Up)[Jd](K);
                else {
                    if (tp && qk in a) a = a.innerText[v](/(\r\n|\r|\n)/g, Pd);
                    else {
                        var b = [];
                        Vp(a, b, i);
                        a = b[Jd](K)
                    }
                    a = a[v](/ \xAD /g, Rd)[v](/\xAD/g, K);
                    a = a[v](/\u200B/g, K);
                    tp || (a = a[v](/ +/g, Rd));
                    a != Rd && (a = a[v](/^\s*/, K))
                }
            return Vn(a)
        };
        L.Wb = function(a) {
            zt.b.Wb[I](this, a);
            var b = this.a();
            b && this.k.Wb(b, a)
        };
        L.Vc = function(a) {
            this.Zd = a;
            var b = this.a();
            b && this.k.Vc(b, a)
        };
        L.F = function(a, b) {
            if (b || this.n != a && this[y](a ? cm : $j)) {
                var c = this.a();
                c && this.k.F(c, a);
                this[cd]() && this.k.qb(this, a);
                this.n = a;
                return i
            }
            return l
        };
        L.isEnabled = function() {
            return !this.ia(1)
        };
        L.qa = function(a) {
            this.jc(2, a) && this[pc](2, a)
        };
        L.va = function() {
            return this.ia(4)
        };
        L.setActive = function(a) {
            this.jc(4, a) && this[pc](4, a)
        };
        L.Kj = function() {
            return this.ia(8)
        };
        L.Ve = function(a) {
            this.jc(8, a) && this[pc](8, a)
        };
        L.ee = function() {
            return this.ia(16)
        };
        L.wj = function(a) {
            this.jc(16, a) && this[pc](16, a)
        };
        L.Xg = function() {
            return this.ia(32)
        };
        L.nh = function(a) {
            this.jc(32, a) && this[pc](32, a)
        };
        L.pc = function() {
            return this.ia(64)
        };
        L.G = function(a) {
            this.jc(64, a) && this[pc](64, a)
        };
        L.getState = function() {
            return this.Fa
        };
        L.ia = function(a) {
            return !!(this.Fa & a)
        };
        Fa(L, function(a, b) {
            this.R(a) && b != this.ia(a) && (this.k[pc](this, a, b), this.Fa = b ? this.Fa | a : this.Fa & ~a)
        });
        L.hh = function(a) {
            this.Fa = a
        };
        L.R = function(a) {
            return !!(this.nc & a)
        };
        L.ja = function(a, b) {
            this.q && (this.ia(a) && !b) && d(r(Zf));
            !b && this.ia(a) && this[pc](a, l);
            this.nc = b ? this.nc | a : this.nc & ~a
        };
        L.Y = function(a) {
            return !!(this.Nd & a) && this.R(a)
        };
        L.fk = function(a, b) {
            this.Nd = b ? this.Nd | a : this.Nd & ~a
        };
        L.Wf = function(a, b) {
            this.Gd = b ? this.Gd | a : this.Gd & ~a
        };
        L.jc = function(a, b) {
            return this.R(a) && this.ia(a) != b && (!(this.Gd & a) || this[y](et(a, b))) && !this.kc
        };
        L.ke = function(a) {
            (!a[Za] || !Op(this.a(), a[Za])) && (this[y](Li) && this[cd]() && this.Y(2)) && this.qa(i)
        };
        L.je = function(a) {
            if ((!a[Za] || !Op(this.a(), a[Za])) && this[y](Bk)) this.Y(4) && this[kc](l), this.Y(2) && this.qa(l)
        };
        L.uc = mn;
        L.jb = function(a) {
            this[cd]() && (this.Y(2) && this.qa(i), a.ge() && (this.Y(4) && this[kc](i), this.k.ib(this) && this.M()[Hb]()));
            !this.Zd && a.ge() && a[pb]()
        };
        L.ob = function(a) {
            this[cd]() && (this.Y(2) && this.qa(i), this.va() && (this.rb(a) && this.Y(4)) && this[kc](l))
        };
        L.Qf = function(a) {
            this[cd]() && this.rb(a)
        };
        L.rb = function(a) {
            this.Y(16) && this.wj(!this.ee());
            this.Y(8) && this.Ve(i);
            this.Y(64) && this.G(!this.pc());
            var b = new iq(th, this);
            a && (Ga(b, a[tc]), b.ctrlKey = a[Ic], b.metaKey = a[sb], b.shiftKey = a[yd], b.Qe = a.Qe);
            return this[y](b)
        };
        L.Qc = function() {
            this.Y(32) && this.nh(i)
        };
        L.pb = function() {
            this.Y(4) && this[kc](l);
            this.Y(32) && this.nh(l)
        };
        L.pa = function(a) {
            return this.n && this[cd]() && this.ua(a) ? (a[pb](), a[Nc](), i) : l
        };
        L.ua = function(a) {
            return 13 == a[Mb] && this.rb(a)
        };
        wn(zt) || d(r("Invalid component class " + zt));
        wn(vt) || d(r("Invalid renderer class " + vt));
        var At = xn(zt);
        yt[At] = vt;
        xt(xj, function() {
            return new zt(k)
        });

        function Bt() {
            this.vh = []
        }
        P(Bt, vt);
        nn(Bt);
        L = Bt[F];
        L.ad = function(a) {
            var b = this.vh[a];
            if (!b) {
                switch (a) {
                    case 0:
                        b = this.gc() + Ie;
                        break;
                    case 1:
                        b = this.gc() + Be;
                        break;
                    case 2:
                        b = this.gc() + De
                }
                this.vh[a] = b
            }
            return b
        };
        L.eb = function() {
            return Lk
        };
        L.d = function(a) {
            var b = a.r().d(Ci, this.Zb(a)[Jd](Rd), this.ui(a.ha, a.r()));
            this.wi(a, b, a.R(8) || a.R(16));
            return b
        };
        L.N = function(a) {
            return a && a[Ob]
        };
        Aa(L, function(a, b) {
            var c = this.N(a),
                e = this.me(a) ? c[Ob] : k;
            Bt.b[fc][I](this, a, b);
            e && !this.me(a) && c[qb](e, c[Ob] || k)
        });
        L.ui = function(a, b) {
            var c = this.ad(2);
            return b.d(Ci, c, a)
        };
        L.me = function(a) {
            if (a = this.N(a)) {
                var a = a[Ob],
                    b = this.ad(1);
                return !!a && ko(up(a), b)
            }
            return l
        };
        L.wi = function(a, b, c) {
            if (c != this.me(b))
                if (c ? vp(b, Ij) : wp(b, Ij), b = this.N(b), c) c = this.ad(1), b[qb](a.r().d(Ci, c), b[Ob] || k);
                else b[Xc](b[Ob])
        };
        L.bd = function(a) {
            switch (a) {
                case 2:
                    return this.ad(0);
                case 16:
                case 8:
                    return Jj;
                default:
                    return Bt.b.bd[I](this, a)
            }
        };
        L.w = function() {
            return Dj
        };

        function Ct(a, b, c, e) {
            zt[I](this, a, e || Bt.la(), c);
            this[Cc](b)
        }
        P(Ct, zt);
        L = Ct[F];
        Ba(L, function() {
            var a = this.de;
            return a != k ? a : this.rc()
        });
        Ia(L, function(a) {
            this.Wk(a)
        });
        L.rc = function() {
            var a = this.ha;
            return qn(a) ? (a = io(a, function(a) {
                var c = up(a);
                return ko(c, Ej) || ko(c, Fj) ? K : Up(a)
            })[Jd](K), Vn(a)) : Ct.b.rc[I](this)
        };
        L.ob = function(a) {
            var b = this[Wa]();
            if (b) {
                var c = b.Vf;
                b.Vf = k;
                if (b = c && vn(a[mc])) b = new to(a[mc], a[nc]), b = c == b ? i : !c || !b ? l : c.x == b.x && c.y == b.y;
                if (b) return
            }
            Ct.b.ob[I](this, a)
        };
        L.ua = function(a) {
            return a[Mb] == this.eg && this.rb(a) ? i : Ct.b.ua[I](this, a)
        };
        L.vi = function() {
            return this.eg
        };
        xt(Dj, function() {
            return new Ct(k)
        });

        function Dt(a, b, c, e, f, h, j, p, s) {
            var x, z;
            if (x = c[Lc]) {
                var E = x[zd] == ng || x[zd] == Pf;
                if (!E || Ur(x) != km) z = $r(x), E || (E = (E = as(x)) && Go ? -x[nd] : E && (!Q || !Uo(yf)) ? x[fd] - x[Dc] - x[nd] : x[nd], z = uo(z, new to(E, x[qc])))
            }
            x = z || new to;
            z = es(a);
            (E = Zr(a)) && z.pj(new Rr(E[A], E.top, E[Nd] - E[A], E[rd] - E.top));
            var E = xp(a),
                ea = xp(c);
            if (E.l != ea.l) {
                var ba = E.l[Wc],
                    ea = ea.Sc(),
                    kb = new to(0, 0),
                    ua = Fp(zp(ba)),
                    Db = ba;
                do {
                    var Z;
                    if (ua == ea) Z = $r(Db);
                    else {
                        Z = Db;
                        var $ = new to;
                        if (1 == Z[cb]) {
                            if (Z[Va]) {
                                var U = Xr(Z);
                                $.x = U[A];
                                $.y = U.top
                            } else {
                                var U = xp(Z).Tb(),
                                    Ka =
                                    $r(Z);
                                $.x = Ka.x - U.x;
                                $.y = Ka.y - U.y
                            }
                            Go && !Uo(12) && (U = g, U = g, Q ? U = Ne : Ho ? U = Ze : Fo ? U = Oe : Go && (U = Me), Ka = g, U && (Ka = Tr(Z, U)), Ka || (Ka = Tr(Z, Im)), Ka ? (Z = Ka[Ab](os), U = !Z ? new to(0, 0) : new to(la(Z[1]), la(Z[2]))) : U = new to(0, 0), $ = new to($.x + U.x, $.y + U.y))
                        } else U = wn(Z.oj), Ka = Z, Z[rb] ? Ka = Z[rb][0] : U && Z.V[rb] && (Ka = Z.V[rb][0]), $.x = Ka[mc], $.y = Ka[nc];
                        Z = $
                    }
                    kb.x += Z.x;
                    kb.y += Z.y
                } while (ua && ua != ea && (Db = ua.frameElement) && (ua = ua.parent));
                ba = uo(kb, $r(ba));
                Q && !E.Te() && (ba = uo(ba, E.Tb()));
                sa(z, z[A] + ba.x);
                z.top += ba.y
            }
            a = (b & 4 && as(a) ? b ^ 2 : b) & -5;
            b = new to(a &
                2 ? z[A] + z[u] : z[A], a & 1 ? z.top + z[J] : z.top);
            b = uo(b, x);
            f && (b.x += (a & 2 ? -1 : 1) * f.x, b.y += (a & 1 ? -1 : 1) * f.y);
            var N;
            if (j)
                if (s) N = s;
                else if (N = Zr(c)) N.top -= x.y, Sa(N, N[Nd] - x.x), Pa(N, N[rd] - x.y), sa(N, N[A] - x.x);
            a: {
                s = b[Yc]();f = 0;a = (e & 4 && as(c) ? e ^ 2 : e) & -5;e = cs(c);p = p ? p[Yc]() : e[Yc]();
                if (h || 0 != a)(a & 2 ? s.x -= p[u] + (h ? h[Nd] : 0) : h && (s.x += h[A]), a & 1) ? s.y -= p[J] + (h ? h[rd] : 0) : h && (s.y += h.top);
                if (j) {
                    if (N) {
                        h = s;
                        f = 0;
                        if (65 == (j & 65) && (h.x < N[A] || h.x >= N[Nd])) j &= -2;
                        if (132 == (j & 132) && (h.y < N.top || h.y >= N[rd])) j &= -5;
                        h.x < N[A] && j & 1 && (h.x = N[A], f |= 1);
                        h.x < N[A] &&
                            (h.x + p[u] > N[Nd] && j & 16) && (pa(p, q.max(p[u] - (h.x + p[u] - N[Nd]), 0)), f |= 4);
                        h.x + p[u] > N[Nd] && j & 1 && (h.x = q.max(N[Nd] - p[u], N[A]), f |= 1);
                        j & 2 && (f |= (h.x < N[A] ? 16 : 0) | (h.x + p[u] > N[Nd] ? 32 : 0));
                        h.y < N.top && j & 4 && (h.y = N.top, f |= 2);
                        h.y >= N.top && (h.y + p[J] > N[rd] && j & 32) && (Ra(p, q.max(p[J] - (h.y + p[J] - N[rd]), 0)), f |= 8);
                        h.y + p[J] > N[rd] && j & 4 && (h.y = q.max(N[rd] - p[J], N.top), f |= 2);
                        j & 8 && (f |= (h.y < N.top ? 64 : 0) | (h.y + p[J] > N[rd] ? 128 : 0));
                        j = f
                    } else j = 256;
                    f = j;
                    if (f & 496) {
                        c = f;
                        break a
                    }
                }
                Vr(c, s);
                if (!(e == p || (!e || !p ? 0 : e[u] == p[u] && e[J] == p[J]))) h = xp(zp(c)).Te(),
                Q && (!h || !Uo(yf)) ? (j = c[H], h ? (Q ? (h = ks(c, rl), e = ks(c, sl), s = ks(c, tl), N = ks(c, ql), h = new Or(s, e, N, h)) : (h = Sr(c, rl), e = Sr(c, sl), s = Sr(c, tl), N = Sr(c, ql), h = new Or(la(s), la(e), la(N), la(h))), c = ns(c), j.pixelWidth = p[u] - c[A] - h[A] - h[Nd] - c[Nd], j.pixelHeight = p[J] - c.top - h.top - h[rd] - c[rd]) : (j.pixelWidth = p[u], j.pixelHeight = p[J])) : (c = c[H], Go ? c.MozBoxSizing = Lh : Ho ? c.WebkitBoxSizing = Lh : c.boxSizing = Lh, pa(c, q.max(p[u], 0) + Bl), Ra(c, q.max(p[J], 0) + Bl));c = f
            }
            return c
        };

        function Et() {}
        Et[F].mc = function() {};

        function Ft(a, b, c) {
            this.element = a;
            this.Xc = b;
            this.vk = c
        }
        P(Ft, Et);
        Ft[F].mc = function(a, b, c) {
            Dt(this[Bd], this.Xc, a, b, g, c, this.vk)
        };

        function Gt(a, b, c, e) {
            Ft[I](this, a, b);
            this.Id = c ? 5 : 0;
            this.of = e || g
        }
        P(Gt, Ft);
        Gt[F].kk = function() {
            return this.Id
        };
        Gt[F].Vk = function(a) {
            this.Id = a
        };
        Gt[F].mc = function(a, b, c, e) {
            var f = Dt(this[Bd], this.Xc, a, b, k, c, 10, e, this.of);
            if (f & 496) {
                var h = this.Md(f, this.Xc),
                    b = this.Md(f, b),
                    f = Dt(this[Bd], h, a, b, k, c, 10, e, this.of);
                f & 496 && (h = this.Md(f, h), b = this.Md(f, b), Dt(this[Bd], h, a, b, k, c, this.Id, e, this.of))
            }
        };
        Gt[F].Md = function(a, b) {
            a & 48 && (b ^= 2);
            a & 192 && (b ^= 1);
            return b
        };

        function Ht(a, b, c, e) {
            Gt[I](this, a, b, c || e);
            if (c || e) this.Vk(65 | (e ? 32 : 132))
        }
        P(Ht, Gt);
        var It, Jt;
        Jt = It = l;
        var Kt = Bo();
        Kt && (-1 != Kt[w]("Firefox") || -1 != Kt[w]("Camino") || (-1 != Kt[w]("iPhone") || -1 != Kt[w]("iPod") ? It = i : -1 != Kt[w]("iPad") ? Jt = i : -1 != Kt[w]("Android") || -1 != Kt[w]("Chrome") || Kt[w]("Safari")));
        var Lt = It,
            Mt = Jt;

        function Nt() {}
        P(Nt, vt);
        nn(Nt);
        L = Nt[F];
        L.eb = function() {
            return Wh
        };
        L.Ca = function(a, b, c) {
            16 == b ? Ss(a, zl, c) : Nt.b.Ca[I](this, a, b, c)
        };
        L.d = function(a) {
            var b = Nt.b.d[I](this, a),
                c = a.Wc();
            c && this.$d(b, c);
            (c = a[C]()) && this[Cc](b, c);
            a.R(16) && this.Ca(b, 16, a.ee());
            return b
        };
        Ba(L, mn);
        Ia(L, mn);
        L.Wc = function(a) {
            return a.title
        };
        L.$d = function(a, b) {
            a && (a.title = b || K)
        };
        L.w = function() {
            return vj
        };

        function Ot() {}
        P(Ot, Nt);
        nn(Ot);
        L = Ot[F];
        L.eb = function() {};
        L.d = function(a) {
            this.Ii(a);
            return a.r().d(Wh, {
                "class": this.Zb(a)[Jd](Rd),
                disabled: !a[cd](),
                title: a.Wc() || K,
                value: a[C]() || K
            }, a.rc() || K)
        };
        L.Nb = function(a) {
            a.O().h(a.a(), ei, a.rb)
        };
        L.Vc = mn;
        L.Wb = mn;
        L.ib = function(a) {
            return a[cd]()
        };
        L.qb = mn;
        Fa(L, function(a, b, c) {
            Ot.b[pc][I](this, a, b, c);
            if ((a = a.a()) && 1 == b) a.disabled = c
        });
        Ba(L, function(a) {
            return a[nb]
        });
        Ia(L, function(a, b) {
            a && (a.value = b)
        });
        L.Ca = mn;
        L.Ii = function(a) {
            a.be(l);
            a.fk(255, l);
            a.ja(32, l)
        };

        function Pt(a, b, c) {
            zt[I](this, a, b || Ot.la(), c)
        }
        P(Pt, zt);
        L = Pt[F];
        Ba(L, function() {
            return this.Nf
        });
        Ia(L, function(a) {
            this.Nf = a;
            this.k[Cc](this.a(), a)
        });
        L.Wc = function() {
            return this.Lf
        };
        L.$d = function(a) {
            this.Lf = a;
            this.k.$d(this.a(), a)
        };
        L.j = function() {
            Pt.b.j[I](this);
            delete this.Nf;
            delete this.Lf
        };
        L.I = function() {
            Pt.b.I[I](this);
            if (this.R(32)) {
                var a = this.M();
                a && this.O().h(a, zk, this.ua)
            }
        };
        L.ua = function(a) {
            return 13 == a[Mb] && a[B] == wk || 32 == a[Mb] && a[B] == zk ? this.rb(a) : 32 == a[Mb]
        };
        xt(vj, function() {
            return new Pt(k)
        });

        function Qt() {}
        P(Qt, vt);
        nn(Qt);
        Qt[F].d = function(a) {
            return a.r().d(Ci, this.w())
        };
        Aa(Qt[F], function() {});
        Qt[F].w = function() {
            return Gj
        };

        function Rt(a, b) {
            zt[I](this, k, a || Qt.la(), b);
            this.ja(1, l);
            this.ja(2, l);
            this.ja(4, l);
            this.ja(32, l);
            this.hh(1)
        }
        P(Rt, zt);
        Rt[F].I = function() {
            Rt.b.I[I](this);
            this.a()[Tb](Ml, Sl)
        };
        xt(Gj, function() {
            return new Rt
        });

        function St() {}
        nn(St);
        L = St[F];
        L.eb = function() {};
        L.Of = function(a, b) {
            a && (a.tabIndex = b ? 0 : -1)
        };
        L.d = function(a) {
            return a.r().d(Ci, this.Zb(a)[Jd](Rd))
        };
        L.N = function(a) {
            return a
        };
        L.Nb = function(a) {
            a = a.a();
            is(a, i, Go);
            Q && (a.hideFocus = i);
            var b = this.eb();
            b && a[Tb](Ml, b)
        };
        L.M = function(a) {
            return a.a()
        };
        L.w = function() {
            return wj
        };
        L.Zb = function(a) {
            var b = this.w(),
                c = [b, a.Yb == bk ? b + Je : b + Ye];
            a[cd]() || c[t](b + Fe);
            return c
        };

        function Tt(a, b, c) {
            ct[I](this, c);
            this.k = b || St.la();
            this.Yb = a || Vm
        }
        P(Tt, ct);
        L = Tt[F];
        L.ce = k;
        L.ba = k;
        L.k = k;
        L.Yb = k;
        L.n = i;
        L.lb = i;
        L.Ae = i;
        L.aa = -1;
        L.J = k;
        L.ae = l;
        L.li = l;
        L.ji = i;
        L.Ba = k;
        L.M = function() {
            return this.ce || this.k.M(this)
        };
        L.Pc = function() {
            return this.ba || (this.ba = new pt(this.M()))
        };
        L.d = function() {
            this.Tf(this.k.d(this))
        };
        L.N = function() {
            return this.k.N(this.a())
        };
        L.I = function() {
            Tt.b.I[I](this);
            this.hb(function(a) {
                a.q && this.Af(a)
            }, this);
            var a = this.a();
            this.k.Nb(this);
            this.F(this.n, i);
            this.O().h(this, Li, this.Rd).h(this, ak, this.Sd).h(this, Nm, this.Td).h(this, hl, this.Ph).h(this, fi, this.Nh).h(a, Qk, this.jb).h(zp(a), Uk, this.Oh).h(a, [Qk, Uk, Tk, Sk, ji], this.Mh);
            this.ib() && this.Bf(i)
        };
        L.Bf = function(a) {
            var b = this.O(),
                c = this.M();
            a ? b.h(c, Ri, this.Qc).h(c, Ih, this.pb).h(this.Pc(), wk, this.pa) : b.W(c, Ri, this.Qc).W(c, Ih, this.pb).W(this.Pc(), wk, this.pa)
        };
        L.T = function() {
            this.Pb(-1);
            this.J && this.J.G(l);
            this.ae = l;
            Tt.b.T[I](this)
        };
        L.j = function() {
            Tt.b.j[I](this);
            this.ba && (this.ba.U(), this.ba = k);
            this.k = this.J = this.Ba = this.ce = k
        };
        L.Rd = function() {
            return i
        };
        L.Sd = function(a) {
            var b = this.Oc(a[$c]);
            if (-1 < b && b != this.aa) {
                var c = this.Rb();
                c && c.qa(l);
                this.aa = b;
                c = this.Rb();
                this.ae && c[kc](i);
                this.ji && (this.J && c != this.J) && (c.R(64) ? c.G(i) : this.J.G(l))
            }
            Ss(this.a(), vh, a[$c].a().id)
        };
        L.Td = function(a) {
            a[$c] == this.Rb() && (this.aa = -1);
            Ss(this.a(), vh, K)
        };
        L.Ph = function(a) {
            if ((a = a[$c]) && a != this.J && a[Wa]() == this) this.J && this.J.G(l), this.J = a
        };
        L.Nh = function(a) {
            a[$c] == this.J && (this.J = k)
        };
        L.jb = function(a) {
            this.lb && this.Ob(i);
            var b = this.M();
            b && Sp(b) ? b[Hb]() : a[pb]()
        };
        L.Oh = function() {
            this.Ob(l)
        };
        L.Mh = function(a) {
            var b = this.Tj(a[$c]);
            if (b) switch (a[B]) {
                case Qk:
                    b.jb(a);
                    break;
                case Uk:
                    b.ob(a);
                    break;
                case Tk:
                    b.ke(a);
                    break;
                case Sk:
                    b.je(a);
                    break;
                case ji:
                    b.uc(a)
            }
        };
        L.Tj = function(a) {
            if (this.Ba)
                for (var b = this.a(); a && a !== b;) {
                    var c = a.id;
                    if (c in this.Ba) return this.Ba[c];
                    a = a[Fd]
                }
            return k
        };
        L.Qc = function() {};
        L.pb = function() {
            this.Pb(-1);
            this.Ob(l);
            this.J && this.J.G(l)
        };
        L.pa = function(a) {
            return this[cd]() && this.n && (0 != this.Pa() || this.ce) && this.ua(a) ? (a[pb](), a[Nc](), i) : l
        };
        L.ua = function(a) {
            var b = this.Rb();
            if (b && typeof b.pa == Wi && b.pa(a) || this.J && this.J != b && typeof this.J.pa == Wi && this.J.pa(a)) return i;
            if (a[yd] || a[Ic] || a[sb] || a[tc]) return l;
            switch (a[Mb]) {
                case 27:
                    if (this.ib()) this.M().blur();
                    else return l;
                    break;
                case 36:
                    this.Vi();
                    break;
                case 35:
                    this.Wi();
                    break;
                case 38:
                    if (this.Yb == Vm) this.Me();
                    else return l;
                    break;
                case 37:
                    if (this.Yb == bk) this.fe() ? this.Le() : this.Me();
                    else return l;
                    break;
                case 40:
                    if (this.Yb == Vm) this.Le();
                    else return l;
                    break;
                case 39:
                    if (this.Yb == bk) this.fe() ? this.Me() :
                        this.Le();
                    else return l;
                    break;
                default:
                    return l
            }
            return i
        };
        L.Af = function(a) {
            var b = a.a(),
                b = b.id || (b.id = a.Lb());
            this.Ba || (this.Ba = {});
            this.Ba[b] = a
        };
        L.xd = function(a, b) {
            Tt.b.xd[I](this, a, b)
        };
        L.vc = function(a, b, c) {
            a.Wf(2, i);
            a.Wf(64, i);
            (this.ib() || !this.li) && a.ja(32, l);
            a.be(l);
            Tt.b.vc[I](this, a, b, c);
            a.q && this.q && this.Af(a);
            b <= this.aa && this.aa++
        };
        L.removeChild = function(a, b) {
            if (a = O(a) ? this.Xd(a) : a) {
                var c = this.Oc(a); - 1 != c && (c == this.aa ? a.qa(l) : c < this.aa && this.aa--);
                (c = a.a()) && (c.id && this.Ba) && np(this.Ba, c.id)
            }
            a = Tt.b[Xc][I](this, a, b);
            a.be(i);
            return a
        };
        L.F = function(a, b) {
            if (b || this.n != a && this[y](a ? cm : $j)) {
                this.n = a;
                var c = this.a();
                c && (gs(c, a), this.ib() && this.k.Of(this.M(), this.lb && this.n), b || this[y](this.n ? yh : xh));
                return i
            }
            return l
        };
        L.isEnabled = function() {
            return this.lb
        };
        L.ib = function() {
            return this.Ae
        };
        L.qb = function(a) {
            a != this.Ae && this.q && this.Bf(a);
            this.Ae = a;
            this.lb && this.n && this.k.Of(this.M(), a)
        };
        L.Pb = function(a) {
            (a = this.Qa(a)) ? a.qa(i): -1 < this.aa && this.Rb().qa(l)
        };
        L.qa = function(a) {
            this.Pb(this.Oc(a))
        };
        L.Rb = function() {
            return this.Qa(this.aa)
        };
        L.Vi = function() {
            this.Kd(function(a, b) {
                return (a + 1) % b
            }, this.Pa() - 1)
        };
        L.Wi = function() {
            this.Kd(function(a, b) {
                a--;
                return 0 > a ? b - 1 : a
            }, 0)
        };
        L.Le = function() {
            this.Kd(function(a, b) {
                return (a + 1) % b
            }, this.aa)
        };
        L.Me = function() {
            this.Kd(function(a, b) {
                a--;
                return 0 > a ? b - 1 : a
            }, this.aa)
        };
        L.Kd = function(a, b) {
            for (var c = 0 > b ? this.Oc(this.J) : b, e = this.Pa(), c = a[I](this, c, e), f = 0; f <= e;) {
                var h = this.Qa(c);
                if (h && this.Vg(h)) return this.Cj(c), i;
                f++;
                c = a[I](this, c, e)
            }
            return l
        };
        L.Vg = function(a) {
            return a.n && a[cd]() && a.R(2)
        };
        L.Cj = function(a) {
            this.Pb(a)
        };
        L.Ob = function(a) {
            this.ae = a
        };

        function Ut() {}
        P(Ut, vt);
        nn(Ut);
        Ut[F].w = function() {
            return Cj
        };

        function Vt(a, b, c) {
            zt[I](this, a, c || Ut.la(), b);
            this.ja(1, l);
            this.ja(2, l);
            this.ja(4, l);
            this.ja(32, l);
            this.hh(1)
        }
        P(Vt, zt);
        xt(Cj, function() {
            return new Vt(k)
        });

        function Wt() {}
        P(Wt, St);
        nn(Wt);
        Wt[F].eb = function() {
            return Kk
        };
        Wt[F].sb = function(a, b) {
            return Op(a.a(), b)
        };
        Wt[F].w = function() {
            return Aj
        };
        Wt[F].Nb = function(a) {
            Wt.b.Nb[I](this, a);
            Ss(a.a(), Vj, Km)
        };
        xt(Gj, function() {
            return new Rt
        });

        function Xt(a, b) {
            Tt[I](this, Vm, b || Wt.la(), a);
            this.qb(l)
        }
        P(Xt, Tt);
        L = Xt[F];
        L.qe = i;
        L.Ej = l;
        L.w = function() {
            return this.k.w()
        };
        L.sb = function(a) {
            if (this.k.sb(this, a)) return i;
            for (var b = 0, c = this.Pa(); b < c; b++) {
                var e = this.Qa(b);
                if (typeof e.sb == Wi && e.sb(a)) return i
            }
            return l
        };
        L.Ua = function(a) {
            this.xd(a, i)
        };
        L.bc = function(a, b) {
            this.vc(a, b, i)
        };
        L.Hc = function(a) {
            return this.Qa(a)
        };
        L.tf = function() {
            return this.Pa()
        };
        L.hc = function(a, b) {
            var c = this.n;
            c || gs(this.a(), i);
            var e = this.a(),
                f = a,
                h = b,
                j = $r(e);
            f instanceof to && (h = f.y, f = f.x);
            Vr(e, e[Rc] + (f - j.x), e[Hd] + (h - j.y));
            c || gs(this.a(), l)
        };
        L.pi = function(a) {
            (this.qe = a) && this.qb(i)
        };
        L.F = function(a, b, c) {
            (b = Xt.b.F[I](this, a, b)) && (a && this.q && this.qe) && this.M()[Hb]();
            this.Vf = a && c && vn(c[mc]) ? new to(c[mc], c[nc]) : k;
            return b
        };
        L.Rd = function(a) {
            this.qe && this.M()[Hb]();
            return Xt.b.Rd[I](this, a)
        };
        L.Vg = function(a) {
            return (this.Ej || a[cd]()) && a.n && a.R(2)
        };
        L.ua = function(a) {
            var b = Xt.b.ua[I](this, a);
            b || this.hb(function(c) {
                !b && (c.vi && c.eg == a[Mb]) && (this[cd]() && this.qa(c), b = c.pa(a))
            }, this);
            return b
        };

        function Yt() {}
        P(Yt, Nt);
        nn(Yt);
        L = Yt[F];
        L.d = function(a) {
            var b = {
                    "class": zj + this.Zb(a)[Jd](Rd),
                    title: a.Wc() || K
                },
                b = a.r().d(Ci, b, this.he(a.ha, a.r()));
            this.kg(a, b);
            return b
        };
        L.eb = function() {
            return Wh
        };
        L.N = function(a) {
            return a && a[Ob][Ob]
        };
        L.he = function(a, b) {
            return b.d(Ci, zj + (this.w() + Qe), b.d(Ci, zj + (this.w() + Le), a))
        };
        L.w = function() {
            return yj
        };

        function Zt() {}
        P(Zt, Yt);
        nn(Zt);
        Go && Aa(Zt[F], function(a, b) {
            var c = Zt.b.N[I](this, a && a[Ob]);
            if (c) {
                var e = this.createCaption(b, xp(a)),
                    f = c[Fd];
                f && f.replaceChild(e, c)
            }
        });
        L = Zt[F];
        L.N = function(a) {
            a = Zt.b.N[I](this, a && a[Ob]);
            Go && (a && a.__goog_wrapper_div) && (a = a[Ob]);
            return a
        };
        L.he = function(a, b) {
            return Zt.b.he[I](this, [this.createCaption(a, b), this.$i(b)], b)
        };
        L.createCaption = function(a, b) {
            return b.d(Ci, zj + (this.w() + Ae), a)
        };
        L.$i = function(a) {
            return a.d(Ci, zj + (this.w() + Ge), gn)
        };
        L.w = function() {
            return Bj
        };

        function $t(a, b, c, e) {
            Pt[I](this, a, c || Zt.la(), e);
            this.ja(64, i);
            this.Rc = new Ht(k, 5);
            b && this.Tc(b);
            this.ci = k;
            this.$ = new Eq(500);
            (Lt || Mt) && !Uo(wf) && this.Aj(i)
        }
        P($t, Pt);
        L = $t[F];
        L.Mc = l;
        L.Sh = l;
        L.I = function() {
            $t.b.I[I](this);
            this.e && this.Nc(this.e, i);
            Ss(this.a(), Vj, Km)
        };
        L.T = function() {
            $t.b.T[I](this);
            if (this.e) {
                this.G(l);
                this.e.T();
                this.Nc(this.e, l);
                var a = this.e.a();
                a && Np(a)
            }
        };
        L.j = function() {
            $t.b.j[I](this);
            this.e && (this.e.U(), delete this.e);
            delete this.Qh;
            this.$.U()
        };
        L.jb = function(a) {
            $t.b.jb[I](this, a);
            this.va() && (this.G(!this.pc(), a), this.e && this.e.Ob(this.pc()))
        };
        L.ob = function(a) {
            $t.b.ob[I](this, a);
            this.e && !this.va() && this.e.Ob(l)
        };
        L.rb = function() {
            this[kc](l);
            return i
        };
        L.gi = function(a) {
            this.e && (this.e.n && !this.sb(a[$c])) && this.G(l)
        };
        L.sb = function(a) {
            return a && Op(this.a(), a) || this.e && this.e.sb(a) || l
        };
        L.ua = function(a) {
            if (32 == a[Mb]) {
                if (a[pb](), a[B] != zk) return i
            } else if (a[B] != wk) return l;
            if (this.e && this.e.n) {
                var b = this.e.pa(a);
                return 27 == a[Mb] ? (this.G(l), i) : b
            }
            return 40 == a[Mb] || 38 == a[Mb] || 32 == a[Mb] ? (this.G(i), i) : l
        };
        L.re = function() {
            this.G(l)
        };
        L.hi = function() {
            this.va() || this.G(l)
        };
        L.pb = function(a) {
            this.Mc || this.G(l);
            $t.b.pb[I](this, a)
        };
        L.sc = function() {
            this.e || this.Tc(new Xt(this.r()));
            return this.e || k
        };
        L.Tc = function(a) {
            var b = this.e;
            if (a != b && (b && (this.G(l), this.q && this.Nc(b, l), delete this.e), a)) this.e = a, a.Ud(this), a.F(l), a.pi(this.Mc), this.q && this.Nc(a, i);
            return b
        };
        L.Ua = function(a) {
            this.sc().xd(a, i)
        };
        L.bc = function(a, b) {
            this.sc().vc(a, b, i)
        };
        L.Hc = function(a) {
            return this.e ? this.e.Qa(a) : k
        };
        L.tf = function() {
            return this.e ? this.e.Pa() : 0
        };
        L.F = function(a, b) {
            var c = $t.b.F[I](this, a, b);
            c && !this.n && this.G(l);
            return c
        };
        L.fi = function() {
            return this.Rc.kk && !!(this.Rc.Id & 32)
        };
        L.Aj = function(a) {
            this.Mc = a
        };
        L.G = function(a, b) {
            $t.b.G[I](this, a);
            if (this.e && this.ia(64) == a) {
                if (a) this.e.q || (this.Sh ? this.e.kb(this.a()[Fd]) : this.e.kb()), this.nb = Zr(this.a()), this.mb = es(this.a()), this.Ff(), this.e.Pb(-1);
                else if (this[kc](l), this.e.Ob(l), this.a() && Ss(this.a(), vh, K), this.Kc != k) {
                    this.Kc = g;
                    var c = this.e.a();
                    c && bs(c, K, K)
                }
                this.e.F(a, l, b);
                this.kc || this.Rh(a)
            }
        };
        L.Ff = function() {
            if (this.e.q) {
                var a = this.Rc;
                this.Rc.element = this.Qh || this.a();
                var b = this.e.a();
                this.e.n || (Ea(b[H], Yj), gs(b, i));
                !this.Kc && this.fi() && (this.Kc = cs(b));
                a.mc(b, a.Xc ^ 1, this.ci, this.Kc);
                this.e.n || (gs(b, l), Ea(b[H], Wm))
            }
        };
        L.ii = function() {
            var a = es(this.a()),
                b = Zr(this.a());
            if (!(this.mb == a || (!this.mb || !a ? 0 : this.mb[A] == a[A] && this.mb[u] == a[u] && this.mb.top == a.top && this.mb[J] == a[J])) || !(this.nb == b || (!this.nb || !b ? 0 : this.nb.top == b.top && this.nb[Nd] == b[Nd] && this.nb[rd] == b[rd] && this.nb[A] == b[A]))) this.mb = a, this.nb = b, this.Ff()
        };
        L.Nc = function(a, b) {
            var c = this.O(),
                e = b ? c.h : c.W;
            e[I](c, a, th, this.re);
            e[I](c, a, ak, this.Sd);
            e[I](c, a, Nm, this.Td)
        };
        L.Sd = function(a) {
            Ss(this.a(), vh, a[$c].a().id)
        };
        L.Td = function() {
            this.e.Rb() || Ss(this.a(), vh, K)
        };
        L.Rh = function(a) {
            var b = this.O(),
                c = a ? b.h : b.W;
            c[I](b, this.r().l, Qk, this.gi, i);
            this.Mc && c[I](b, this.e, Ih, this.hi);
            c[I](b, this.$, ym, this.ii);
            a ? this.$.start() : this.$[rc]()
        };
        xt(Bj, function() {
            return new $t(k)
        });

        function au(a) {
            this.Cb = [];
            this.pk(a)
        }
        P(au, Dq);
        L = au[F];
        L.Db = k;
        L.Ah = k;
        L.tf = function() {
            return this.Cb[D]
        };
        L.sk = function(a) {
            return a ? fo(this.Cb, a) : -1
        };
        L.Hc = function(a) {
            return this.Cb[a] || k
        };
        L.pk = function(a) {
            a && (go(a, function(a) {
                this.Ld(a, l)
            }, this), oo(this.Cb, a))
        };
        L.Ua = function(a) {
            this.bc(a, this.tf())
        };
        L.bc = function(a, b) {
            a && (this.Ld(a, l), po(this.Cb, b, 0, a))
        };
        L.Bc = function() {
            return this.Db
        };
        L.Fb = function(a) {
            a != this.Db && (this.Ld(this.Db, l), this.Db = a, this.Ld(a, i));
            this[y](Ql)
        };
        L.gd = function() {
            return this.sk(this.Db)
        };
        L.wh = function(a) {
            this.Fb(this.Hc(a))
        };
        L.clear = function() {
            var a = this.Cb;
            if (!qn(a))
                for (var b = a[D] - 1; 0 <= b; b--) delete a[b];
            Ha(a, 0);
            this.Db = k
        };
        L.j = function() {
            au.b.j[I](this);
            delete this.Cb;
            this.Db = k
        };
        L.Ld = function(a, b) {
            a && (typeof this.Ah == Wi ? this.Ah(a, b) : typeof a.Ve == Wi && a.Ve(b))
        };

        function bu(a, b, c, e) {
            $t[I](this, a, b, c, e);
            this.Ak(a);
            this.uf(Ek)
        }
        P(bu, $t);
        L = bu[F];
        L.u = k;
        L.oe = k;
        L.I = function() {
            bu.b.I[I](this);
            this.ie();
            this.Mf();
            Ss(this.a(), Vj, Oi)
        };
        L.j = function() {
            bu.b.j[I](this);
            this.u && (this.u.U(), this.u = k);
            this.oe = k
        };
        L.re = function(a) {
            this.Fb(a[$c]);
            bu.b.re[I](this, a);
            a[Nc]();
            this[y](th)
        };
        L.aj = function() {
            var a = this.Bc();
            bu.b[Cc][I](this, a && a[C]());
            this.ie()
        };
        L.Tc = function(a) {
            var b = bu.b.Tc[I](this, a);
            a != b && (this.u && this.u.clear(), a && (this.u ? a.hb(function(a) {
                this.fd(a);
                this.u.Ua(a)
            }, this) : this.se(a)));
            return b
        };
        L.Ak = function(a) {
            this.oe = a;
            this.ie()
        };
        L.Ua = function(a) {
            this.fd(a);
            bu.b.Ua[I](this, a);
            this.u ? this.u.Ua(a) : this.se(this.sc())
        };
        L.bc = function(a, b) {
            this.fd(a);
            bu.b.bc[I](this, a, b);
            this.u ? this.u.bc(a, b) : this.se(this.sc())
        };
        L.Fb = function(a) {
            if (this.u) {
                var b = this.Bc();
                this.u.Fb(a);
                a != b && this[y](Zh)
            }
        };
        L.wh = function(a) {
            this.u && this.Fb(this.u.Hc(a))
        };
        Ia(L, function(a) {
            if (a != k && this.u)
                for (var b = 0, c; c = this.u.Hc(b); b++)
                    if (c && typeof c[C] == Wi && c[C]() == a) {
                        this.Fb(c);
                        return
                    }
            this.Fb(k)
        });
        L.Bc = function() {
            return this.u ? this.u.Bc() : k
        };
        L.gd = function() {
            return this.u ? this.u.gd() : -1
        };
        L.se = function(a) {
            this.u = new au;
            a && a.hb(function(a) {
                this.fd(a);
                this.u.Ua(a)
            }, this);
            this.Mf()
        };
        L.Mf = function() {
            this.u && this.O().h(this.u, Ql, this.aj)
        };
        L.ie = function() {
            var a = this.Bc();
            this[fc](a ? a.rc() : this.oe)
        };
        L.fd = function(a) {
            a.uf(a instanceof Ct ? il : Sl)
        };
        L.G = function(a, b) {
            bu.b.G[I](this, a, b);
            this.pc() && this.sc().Pb(this.gd())
        };
        xt("goog-select", function() {
            return new bu(k)
        });

        function cu(a, b) {
            this.Ta = xp();
            this.tc = a;
            this.ah = [];
            a: {
                for (var c = ps() + lf, e = ga[lc](xg), f = 0; f < e[D]; f++)
                    if (e[f] && e[f][td] && e[f][td] == c) break a;e = ga[Ib](Dk);e.href = c;e.rel = om;za(e, vm);
                if (0 == ga[lc](Wj)[D]) {
                    var c = ga[lc](ck)[0],
                        f = ga[lc](Jh)[0],
                        h = ga[Ib](Wj);
                    c[qb](h, f)
                }
                ga[lc](Wj)[0][Ta](e)
            }
            this.bk(b)
        }
        L = cu[F];
        L.ac = k;

        function du(a, b) {
            var c = xp(),
                e, f, h = k;
            switch (a) {
                case 2:
                    e = new gt(Pj);
                    h = Cl + e.Lb();
                    f = c.d(Ci, k, c.d(Ci, {
                        "class": Oj
                    }, ag), c.d(Vh, k), c.d(yl, k, c.d(Ci, {
                        id: h
                    }, b[Sc])));
                    break;
                case 3:
                    e = new gt(Kj);
                    f = c.d(Ci, k, c.d(Ci, {
                        "class": Oj
                    }, ag), c.d(Vh, k));
                    var j = c.d(Ci, k, c.d(yl, k, b[Sc]));
                    c[Ta](f, j)
            }
            e[fc](f.innerHTML);
            qa(e.Yi(), kg);
            qa(e.Xi(), K);
            e.F(i);
            h && (c = Ap(h), (Q && !Wo(9) ? Os(c, 0, c, 1) : Ho ? new Rs(Ks(c, 0, c, 1)) : Go ? new Ls(Ks(c, 0, c, 1)) : Fo ? new Qs(Ks(c, 0, c, 1)) : new Hs(Ks(c, 0, c, 1))).select())
        }
        L.bk = function(a) {
            var a = a || [],
                b = this.tc,
                c = this.Ta;
            c.og(b);
            b || d(r("Container is not defined"));
            var e = c.d(gm, k),
                f = [c.d(gm, k, Xf), c.d(Ci, {
                    "class": Qj
                }, jn)];
            this.ac = new bu(f);
            if (a)
                for (f = 0; f < a[D]; f++) {
                    var h = k,
                        j = a[f],
                        p = j.datasource,
                        s = j.gadget,
                        x = j.userprefs,
                        z = j[G],
                        E = j[ol],
                        ea = j[H] || Zm;
                    switch (j[B]) {
                        case ni:
                            h = this.Dc(f, En(function(a) {
                                ca[Xa]((new Nq(a)).hd(Hm, kl), lg)
                            }, p), gg, Lj);
                            break;
                        case dk:
                            h = this.Dc(f, En(function(a, b) {
                                du(2, {
                                    message: Ff + ea + Zd + aa(a) + ne + aa(b) + eu(x) + Yd
                                })
                            }, s, p), Lg, Nj);
                            break;
                        case uk:
                            h = this.Dc(f, En(function(a,
                                b, c) {
                                du(3, {
                                    message: Ef + aa(b) + pe + a + oe + aa(c) + re
                                })
                            }, p, E, z), vg, Nj);
                            break;
                        case ck:
                            h = this.Dc(f, En(function(a) {
                                ca[Xa]((new Nq(a)).hd(Hm, ll), lg)
                            }, p), hg, Lj);
                            break;
                        case nk:
                            h = this.Dc(f, En(function(a, b, c) {
                                ca[Xa](ik + aa(a) + ne + aa(b) + eu(c))
                            }, s, p, x), Nf, Mj);
                            break;
                        default:
                            d(r("No such toolbar component as: " + j.toSource()))
                    }
                    h && this.ac.Ua(h)
                }
            sq(this.ac, th, Dn(this.Ai, this));
            this.ac.kb(e);
            c[Ta](b, e)
        };
        L.gk = function() {
            this.ac.wh(-1)
        };
        L.Ai = function() {
            var a = this.ac.gd();
            this.ah[a]();
            this.gk()
        };
        L.Dc = function(a, b, c) {
            c = new Ct(c);
            this.ah[a] = b;
            return c
        };

        function eu(a) {
            if (!a) return K;
            var b = K,
                c;
            for (c in a) b += me + c + Hf + aa(a[c]);
            return b
        };
        m("google.visualization.drawChart", As);
        m("google.visualization.drawFromUrl", function(a, b) {
            var c = new Nq(b || ga[Pc][td]),
                e = c.jh(vk),
                f;
            e != k ? f = e : (f = {}, go(c.fa.Kb(), function(a) {
                var b = c.jh(a);
                try {
                    b != k && (b = Rn(b))
                } catch (e) {}
                f[a] = b
            }), f.options = An(f));
            As(f, a)
        });
        m("google.visualization.createUrl", function(a, b) {
            O(a) && (a = Rn(a));
            var c = [],
                e, f;
            for (f in a)
                if (f == jl) {
                    var h = a[f],
                        j;
                    for (j in h) e = h[j], O(e) || (e = On(e)), c[t](j + Hf + aa(ma(e)))
                } else e = a[f], O(e) || (e = wn(e[Bc]) ? e[Bc]() : On(e)), c[t](f + Hf + aa(ma(e)));
            e = ps() + gf;
            e = e[v](/^https?:/, K);
            c = (b || e) + Jf + c[Jd](ge);
            c = c[v](/'/g, fe);
            return c = c[v](/"/g, ee)
        });
        m("google.visualization.createSnippet", function(a) {
            var b = ps() + hf,
                b = b[v](/^https?:/, K),
                b = Gf + b + ae,
                a = Bs(a)[Bc](),
                a = a[v](/</g, je),
                a = a[v](/>/g, ie);
            return b = b + a + Qd
        });
        m("google.visualization.createWrapper", Bs);
        m("google.visualization.ChartWrapper", W);
        n(W[F], Gi, W[F][hd]);
        n(W[F], Bm, W[F][Bc]);
        n(W[F], sj, W[F].getSnapshot);
        n(W[F], gj, W[F][Zc]);
        n(W[F], hj, W[F][ob]);
        n(W[F], "getChartName", W[F].getChartName);
        n(W[F], "getChartType", W[F].getChartType);
        n(W[F], "getChart", W[F].getChart);
        n(W[F], fj, W[F][qd]);
        n(W[F], nj, W[F][pd]);
        n(W[F], oj, W[F][vd]);
        n(W[F], pj, W[F][kd]);
        n(W[F], "getView", W[F][wc]);
        n(W[F], "getOption", W[F][bd]);
        n(W[F], "getOptions", W[F][gb]);
        n(W[F], "getState", W[F][ld]);
        n(W[F], "pushView", W[F].pushView);
        n(W[F], "sendQuery", W[F].sendQuery);
        n(W[F], Xl, W[F][Gc]);
        n(W[F], Yl, W[F][dd]);
        n(W[F], "setChart", W[F].setChart);
        n(W[F], "setChartName", W[F].setChartName);
        n(W[F], "setChartType", W[F].setChartType);
        n(W[F], Wl, W[F].setContainerId);
        n(W[F], $l, W[F].setPackages);
        n(W[F], am, W[F][Vc]);
        n(W[F], bm, W[F][Zb]);
        n(W[F], "setView", W[F][Uc]);
        n(W[F], "setOption", W[F][Od]);
        n(W[F], Zl, W[F].setOptions);
        n(W[F], "setState", W[F][pc]);
        m("google.visualization.ControlWrapper", X);
        n(X[F], Gi, X[F][hd]);
        n(X[F], Bm, X[F][Bc]);
        n(X[F], sj, X[F].getSnapshot);
        n(X[F], gj, X[F][Zc]);
        n(X[F], hj, X[F][ob]);
        n(X[F], "getControlName", X[F].getControlName);
        n(X[F], "getControlType", X[F].getControlType);
        n(X[F], "getControl", X[F].getControl);
        n(X[F], fj, X[F][qd]);
        n(X[F], nj, X[F][pd]);
        n(X[F], oj, X[F][vd]);
        n(X[F], pj, X[F][kd]);
        n(X[F], "getView", X[F][wc]);
        n(X[F], "getOption", X[F][bd]);
        n(X[F], "getOptions", X[F][gb]);
        n(X[F], "getState", X[F][ld]);
        n(X[F], "sendQuery", X[F].sendQuery);
        n(X[F], Xl, X[F][Gc]);
        n(X[F], Yl, X[F][dd]);
        n(X[F], "setControlName", X[F].setControlName);
        n(X[F], "setControlType", X[F].setControlType);
        n(X[F], Wl, X[F].setContainerId);
        n(X[F], $l, X[F].setPackages);
        n(X[F], am, X[F][Vc]);
        n(X[F], bm, X[F][Zb]);
        n(X[F], "setView", X[F][Uc]);
        n(X[F], "setOption", X[F][Od]);
        n(X[F], Zl, X[F].setOptions);
        n(X[F], "setState", X[F][pc]);
        m("google.visualization.DashboardWrapper", Y);
        n(Y[F], Gi, Y[F][hd]);
        n(Y[F], Bm, Y[F][Bc]);
        n(Y[F], "getBindings", Y[F].getBindings);
        n(Y[F], gj, Y[F][Zc]);
        n(Y[F], hj, Y[F][ob]);
        n(Y[F], "getDashboard", Y[F].getDashboard);
        n(Y[F], "getDashboardName", Y[F].getDashboardName);
        n(Y[F], fj, Y[F][qd]);
        n(Y[F], nj, Y[F][pd]);
        n(Y[F], oj, Y[F][vd]);
        n(Y[F], pj, Y[F][kd]);
        n(Y[F], "getView", Y[F][wc]);
        n(Y[F], "getWrappers", Y[F].getWrappers);
        n(Y[F], "setBindings", Y[F].setBindings);
        n(Y[F], Xl, Y[F][Gc]);
        n(Y[F], Yl, Y[F][dd]);
        n(Y[F], "setDashboardName", Y[F].setDashboardName);
        n(Y[F], Wl, Y[F].setContainerId);
        n(Y[F], $l, Y[F].setPackages);
        n(Y[F], am, Y[F][Vc]);
        n(Y[F], bm, Y[F][Zb]);
        n(Y[F], "setView", Y[F][Uc]);
        n(Y[F], sj, Y[F].getSnapshot);
        n(Y[F], "setWrappers", Y[F].setWrappers);
        m("google.visualization.drawToolbar", function(a, b) {
            new cu(a, b)
        });
        m("google.visualization.data.avg", function(a) {
            return Cs(a) / a[D]
        });
        m("google.visualization.data.count", function(a) {
            return a[D]
        });
        m("google.visualization.data.group", function(a, b, c) {
            function e(a, b, c, e) {
                return b[I](k, c[C](e, a))
            }
            var f = [],
                h = [];
            go(b, function(a) {
                if (vn(a)) f[t](a);
                else if (on(a) == el) {
                    var b = a.column;
                    Pk in a && h[t]([b, {
                        calc: En(e, b, a.modifier),
                        type: a[B],
                        label: a[Gd],
                        id: a.id
                    }]);
                    f[t](b)
                }
            });
            if (0 != h[D]) {
                for (var j = new google[G][jd](a), p = j.getViewColumns(), s = a[xc](), x = 0; x < s; x++) go(h, function(a) {
                    p[a[0]] = a[1]
                });
                j[Kd](p);
                a = j
            }
            var z = new google[G].DataTable,
                E = [];
            go(f, function(c, e) {
                var f = a[Nb](c),
                    h = b[e][Gd] || a[Jb](c);
                z[Ad](f, h, b[e].id);
                E[t](f)
            });
            c = c || [];
            go(c, function(b) {
                var c = b.column,
                    c = b[Gd] || a[Jb](c);
                z[Ad](b[B], c, b.id)
            });
            var ea = [];
            go(f, function(a) {
                ea[t]({
                    column: a
                })
            });
            for (var ba = a[Pb](ea), kb = [], ua = 0; ua < c[D]; ua++) kb[t]([]);
            for (ua = 0; ua < ba[D]; ua++) {
                go(c, function(b, c) {
                    kb[c][t](a[C](ba[ua], b.column))
                });
                j = l;
                if (ua < ba[D] - 1) {
                    j = i;
                    for (s = 0; s < f[D]; s++) {
                        var x = a[C](ba[ua], f[s]),
                            Db = a[C](ba[ua + 1], f[s]);
                        if (0 != google[G].datautils.compareValues(E[s], x, Db)) {
                            j = l;
                            break
                        }
                    }
                }
                if (!j) {
                    var Z = z.addRow();
                    go(f, function(b, c) {
                        z[Cc](Z, c, a[C](ba[ua], b))
                    });
                    var $ = b[D];
                    go(c, function(a, b) {
                        var c = a.aggregation[I](k, kb[b]);
                        z[Cc](Z, $ + b, c)
                    });
                    for (j = 0; j < c[D]; j++) kb[j] = []
                }
            }
            return z
        });
        m("google.visualization.data.join", function(a, b, c, e, f, h) {
            var j = c == Ck || c == Vi,
                p = c == Ll || c == Vi,
                s = new google[G].DataTable,
                x = [];
            go(e, function(c) {
                var e = a[Nb](c[0]),
                    f = b[Nb](c[1]);
                e != f && d(r("Key types do not match:" + e + we + f));
                f = s[Ad](e, a[Jb](c[0]));
                s[xb](f, a[vb](c[0]));
                x[t](e)
            });
            var z = [],
                E = [];
            go(e, function(a) {
                z[t]({
                    column: a[0]
                });
                E[t]({
                    column: a[1]
                })
            });
            var ea = a[Pb](z),
                ba = b[Pb](E);
            go(f, function(b) {
                var c = s[Ad](a[Nb](b), a[Jb](b));
                s[xb](c, a[vb](b))
            });
            go(h, function(a) {
                var c = s[Ad](b[Nb](a), b[Jb](a));
                s[xb](c, b[vb](a))
            });
            for (var kb = l, ua = 0, Db = 0, Z = 0; ua < ea[D] || Db < ba[D];) {
                var $ = 0,
                    U = [];
                if (Db >= ba[D])
                    if (j) U[0] = ea[ua], $ = -1;
                    else break;
                else if (ua >= ea[D])
                    if (p) U[1] = ba[Db], $ = 1;
                    else break;
                else {
                    U[0] = ea[ua];
                    U[1] = ba[Db];
                    for (var Ka = 0; Ka < e[D]; Ka++) {
                        var $ = a[C](U[0], e[Ka][0]),
                            N = b[C](U[1], e[Ka][1]),
                            $ = google[G].datautils.compareValues(x[Ka], $, N);
                        if (0 != $) break
                    }
                }
                if (kb && 0 != $) kb = l, Db++;
                else {
                    if (-1 == $ && j || 1 == $ && p || 0 == $) {
                        s.addRow();
                        var Ue, ic; - 1 == $ && j || 0 == $ && c != Ll ? (Ue = a, ic = 0) : (Ue = b, ic = 1);
                        go(e, function(a, b) {
                            c == Vi ? s[Cc](Z, b, Ue[C](U[ic], a[ic])) : s[cc](Z,
                                b, Ue[C](U[ic], a[ic]), Ue[Dd](U[ic], a[ic]), Ue[zc](U[ic], a[ic]))
                        });
                        if (-1 == $ && j || 0 == $) {
                            var Zj = e[D];
                            go(f, function(b, c) {
                                s[cc](Z, c + Zj, a[C](U[0], b), a[Dd](U[0], b), a[zc](U[0], b))
                            })
                        }
                        if (1 == $ && p || 0 == $) Zj = f[D] + e[D], go(h, function(a, c) {
                            s[cc](Z, c + Zj, b[C](U[1], a), b[Dd](U[1], a), b[zc](U[1], a))
                        });
                        Z++
                    }
                    1 == $ ? Db++ : ua++;
                    0 == $ && (kb = i)
                }
            }
            return s
        });
        m("google.visualization.data.max", function(a) {
            if (0 == a[D]) return k;
            for (var b = a[0], c = 1; c < a[D]; c++) {
                var e = a[c];
                e != k && e > b && (b = e)
            }
            return b
        });
        m("google.visualization.data.min", function(a) {
            if (0 == a[D]) return k;
            for (var b = a[0], c = 1; c < a[D]; c++) {
                var e = a[c];
                e != k && e < b && (b = e)
            }
            return b
        });
        m("google.visualization.data.month", function(a) {
            return a[uc]() + 1
        });
        m("google.visualization.data.sum", Cs);
        m("__gvizguard__", i);
        m("google.visualization.Query", or);
        n(or[F], Gk, or[F].makeRequest);
        n(or[F], bm, or[F][Zb]);
        n(or[F], am, or[F][Vc]);
        n(or[F], "send", or[F][Cb]);
        n(or[F], "setRefreshable", or[F].setRefreshable);
        n(or[F], "setTimeout", or[F][Fc]);
        n(or[F], "setHandlerType", or[F].Uk);
        n(or[F], "setHandlerParameter", or[F].Bh);
        n(or, "setResponse", xr);
        n(or[F], rh, or[F][Ec]);
        m("google.visualization.QueryResponse", jr);
        n(jr[F], hj, jr[F][ob]);
        n(jr[F], "isError", jr[F][Gb]);
        n(jr[F], "hasWarning", jr[F].hasWarning);
        n(jr[F], "getReasons", jr[F].getReasons);
        n(jr[F], "getMessage", jr[F].getMessage);
        n(jr[F], "getDetailedMessage", jr[F].getDetailedMessage);
        m("google.visualization.DataTable", S);
        n(S[F], "addColumn", S[F][Ad]);
        n(S[F], "addRow", S[F].addRow);
        n(S[F], "addRows", S[F][jc]);
        n(S[F], "clone", S[F][Yc]);
        n(S[F], "getColumnId", S[F].getColumnId);
        n(S[F], $i, S[F].getColumnIndex);
        n(S[F], aj, S[F][Jb]);
        n(S[F], bj, S[F][Oc]);
        n(S[F], dj, S[F][Kc]);
        n(S[F], cj, S[F][vb]);
        n(S[F], ej, S[F].getColumnRange);
        n(S[F], "getColumnRole", S[F].getColumnRole);
        n(S[F], "getColumnType", S[F][Nb]);
        n(S[F], ij, S[F].getDistinctValues);
        n(S[F], jj, S[F].getFilteredRows);
        n(S[F], kj, S[F][Dd]);
        n(S[F], lj, S[F][mb]);
        n(S[F], mj, S[F][xc]);
        n(S[F], "getProperties", S[F][zc]);
        n(S[F], "getProperty", S[F].getProperty);
        n(S[F], rj, S[F].getRowProperty);
        n(S[F], qj, S[F][Xb]);
        n(S[F], "getSortedRows", S[F][Pb]);
        n(S[F], uj, S[F].getTableProperty);
        n(S[F], tj, S[F][Yb]);
        n(S[F], "getValue", S[F][C]);
        n(S[F], "insertColumn", S[F].insertColumn);
        n(S[F], "insertRows", S[F].insertRows);
        n(S[F], "removeColumn", S[F].removeColumn);
        n(S[F], "removeColumns", S[F].removeColumns);
        n(S[F], "removeRow", S[F].removeRow);
        n(S[F], "removeRows", S[F].removeRows);
        n(S[F], "setCell", S[F][cc]);
        n(S[F], "setColumnLabel", S[F].setColumnLabel);
        n(S[F], "setColumnProperties", S[F][xb]);
        n(S[F], "setColumnProperty", S[F].setColumnProperty);
        n(S[F], "setFormattedValue", S[F].setFormattedValue);
        n(S[F], "setProperties", S[F].setProperties);
        n(S[F], "setProperty", S[F].setProperty);
        n(S[F], "setRowProperties", S[F].setRowProperties);
        n(S[F], "setRowProperty", S[F].setRowProperty);
        n(S[F], "setTableProperties", S[F].setTableProperties);
        n(S[F], "setTableProperty", S[F].setTableProperty);
        n(S[F], "setValue", S[F][Cc]);
        n(S[F], "sort", S[F].sort);
        n(S[F], Bm, S[F][Bc]);
        m("google.visualization.DataView", T);
        n(T, "fromJSON", function(a, b) {
            O(b) && (b = Rn(b));
            var c = new T(a),
                e = b.columns,
                f = b[wd];
            e != k && c[Kd](e);
            f != k && c.setRows(f);
            return c
        });
        n(T[F], "getColumnId", T[F].getColumnId);
        n(T[F], $i, T[F].getColumnIndex);
        n(T[F], aj, T[F][Jb]);
        n(T[F], bj, T[F][Oc]);
        n(T[F], dj, T[F][Kc]);
        n(T[F], dj, T[F][Kc]);
        n(T[F], cj, T[F][vb]);
        n(T[F], ej, T[F].getColumnRange);
        n(T[F], "getColumnRole", T[F].getColumnRole);
        n(T[F], "getColumnType", T[F][Nb]);
        n(T[F], ij, T[F].getDistinctValues);
        n(T[F], jj, T[F].getFilteredRows);
        n(T[F], kj, T[F][Dd]);
        n(T[F], lj, T[F][mb]);
        n(T[F], mj, T[F][xc]);
        n(T[F], "getProperties", T[F][zc]);
        n(T[F], "getProperty", T[F].getProperty);
        n(T[F], rj, T[F].getRowProperty);
        n(T[F], qj, T[F][Xb]);
        n(T[F], "getSortedRows", T[F][Pb]);
        n(T[F], "getTableColumnIndex", T[F].getTableColumnIndex);
        n(T[F], "getUnderlyingTableColumnIndex", T[F].getUnderlyingTableColumnIndex);
        n(T[F], "getTableRowIndex", T[F][Sb]);
        n(T[F], "getUnderlyingTableRowIndex", T[F].getUnderlyingTableRowIndex);
        n(T[F], uj, T[F].getTableProperty);
        n(T[F], tj, T[F][Yb]);
        n(T[F], "getValue", T[F][C]);
        n(T[F], "getViewColumnIndex", T[F].getViewColumnIndex);
        n(T[F], "getViewColumns", T[F].getViewColumns);
        n(T[F], "getViewRowIndex", T[F].getViewRowIndex);
        n(T[F], "getViewRows", T[F].getViewRows);
        n(T[F], "hideColumns", T[F].hideColumns);
        n(T[F], "hideRows", T[F].hideRows);
        n(T[F], "setColumns", T[F][Kd]);
        n(T[F], "setRows", T[F].setRows);
        n(T[F], "toDataTable", T[F][Kb]);
        n(T[F], Bm, T[F][Bc]);
        m("google.visualization.errors", V);
        n(V, "addError", V[Ac]);
        n(V, "removeAll", V[ed]);
        n(V, "removeError", V.removeError);
        n(V, "addErrorFromQueryResponse", V.addErrorFromQueryResponse);
        n(V, "getContainer", V[Cd]);
        n(V, "createProtectedCallback", V.createProtectedCallback);
        m("google.visualization.events.addListener", function(a, b, c) {
            a = Cr(a);
            b = sq(a, b, function(a) {
                c(a.Rk)
            });
            return new Dr(b)
        });
        m("google.visualization.events.trigger", function(a, b, c) {
            a = Cr(a);
            Cq(a, new Er(b, c))
        });
        m("google.visualization.events.removeListener", function(a) {
            a = a && wn(a.getKey) && a.getKey();
            return vn(a) ? xq(a) : l
        });
        m("google.visualization.events.removeAllListeners", function(a) {
            var b = Cr(a),
                b = zq(b);
            dq(a.__eventTarget);
            a.__eventTarget = g;
            return b
        });
        m("google.visualization.QueryWrapper", Fr);
        n(Fr[F], Zl, Fr[F].setOptions);
        n(Fr[F], Gi, Fr[F][hd]);
        n(Fr[F], "setCustomErrorHandler", Fr[F].Tk);
        n(Fr[F], "sendAndDraw", Fr[F].sendAndDraw);
        n(Fr[F], "setCustomPostResponseHandler", Fr[F].setCustomPostResponseHandler);
        n(Fr[F], "setCustomResponseHandler", Fr[F].setCustomResponseHandler);
        n(Fr[F], rh, Fr[F][Ec]);
        m("google.visualization.arrayToDataTable", function(a, b) {
            var c = new S,
                e, f, h;
            qn(a) || d(r("Not an array"));
            if (0 == a[D]) return c;
            qn(a[0]) || d(r(Hg));
            var j = a[0][D];
            for (e = 1; e < a[D]; e++)(!qn(a[e]) || a[e][D] != j) && d(r(Hg));
            var p = (e = !b) ? a[0] : [],
                s = e ? a[bb](1, a[D]) : a,
                x = [];
            for (f = 0; f < j; f++) {
                var z = lm;
                for (e = 0; e < s[D]; e++)
                    if (h = s[e][f], h != k) {
                        O(h) ? z = lm : vn(h) ? z = cl : qn(h) ? z = zm : un(h) ? z = Kh : (sn(h) && d(r("Date and datetime column types are not supported")), d(r("Invalid value in " + e + ve + f)));
                        break
                    }
                x[f] = z
            }
            for (f = 0; f < j; f++) c[Ad](x[f], p[f]);
            c[jc](s);
            return c
        });
        m("google.visualization.datautils.compareValues", br);
        m("google.visualization.dataTableToCsv", function(a) {
            for (var b = K, c = 0; c < a[xc](); c++) {
                for (var e = 0; e < a[mb](); e++) {
                    0 < e && (b += ve);
                    var f = a[Dd](c, e),
                        f = f[v](oa(Xd, Xi), $d),
                        h = -1 != f[w](ve),
                        j = -1 != f[w](Pd),
                        p = -1 != f[w](Xd);
                    if (h || j || p) f = Xd + f + Xd;
                    b += f
                }
                b += Pd
            }
            return b
        });
        m("google.visualization.GadgetHelper", yr);
        n(yr[F], "createQueryFromPrefs", yr[F].createQueryFromPrefs);
        n(yr[F], "validateResponse", yr[F].validateResponse);
    })();

    (function() {
        function h(a) {
            throw a;
        }
        var aa = void 0,
            j = !0,
            l = null,
            n = !1,
            ba = google_exportSymbol,
            ca = window,
            da = Object,
            r = Infinity,
            ea = document,
            ga = isNaN,
            ha = google_exportProperty,
            s = Math,
            ia = Array,
            ja = Number,
            u = Error,
            la = parseInt,
            ma = parseFloat,
            na = String,
            oa = isFinite;

        function pa(a, b) {
            return a.width = b
        }

        function qa(a, b) {
            return a.text = b
        }

        function ra(a, b) {
            return a.round = b
        }

        function sa(a, b) {
            return a.fontFamily = b
        }

        function ta(a, b) {
            return a.data = b
        }

        function ua(a, b) {
            return a.ceil = b
        }

        function va(a, b) {
            return a.floor = b
        }

        function wa(a, b) {
            return a.stroked = b
        }

        function xa(a, b) {
            return a.color = b
        }

        function ya(a, b) {
            return a.currentTarget = b
        }

        function Aa(a, b) {
            return a.left = b
        }

        function Ba(a, b) {
            return a.format = b
        }

        function Ca(a, b) {
            return a.keyCode = b
        }

        function Da(a, b) {
            return a.type = b
        }

        function Ea(a, b) {
            return a.clear = b
        }

        function Fa(a, b) {
            return a.orientation = b
        }

        function Ha(a, b) {
            return a.getValue = b
        }

        function Ia(a, b) {
            return a.visible = b
        }

        function Ja(a, b) {
            return a.visibility = b
        }

        function Ka(a, b) {
            return a.length = b
        }

        function La(a, b) {
            return a.title = b
        }

        function Ma(a, b) {
            return a.position = b
        }

        function Na(a, b) {
            return a.cursor = b
        }

        function Oa(a, b) {
            return a.className = b
        }

        function Pa(a, b) {
            return a.index = b
        }

        function Qa(a, b) {
            return a.next = b
        }

        function Ra(a, b) {
            return a.fontSize = b
        }

        function Sa(a, b) {
            return a.clone = b
        }

        function Ta(a, b) {
            return a.target = b
        }

        function Ua(a, b) {
            return a.anchor = b
        }

        function Va(a, b) {
            return a.start = b
        }

        function Xa(a, b) {
            return a.bottom = b
        }

        function Ya(a, b) {
            return a.contains = b
        }

        function Za(a, b) {
            return a.display = b
        }

        function $a(a, b) {
            return a.height = b
        }

        function ab(a, b) {
            return a.right = b
        }
        var v = "appendChild",
            x = "push",
            bb = "direction",
            cb = "trigger",
            db = "getBoundingClientRect",
            eb = "test",
            gb = "relatedTarget",
            y = "width",
            z = "text",
            B = "round",
            hb = "slice",
            ib = "replace",
            jb = "reverse",
            kb = "nodeType",
            C = "data",
            lb = "ceil",
            mb = "events",
            D = "floor",
            nb = "content",
            ob = "getElementById",
            pb = "concat",
            qb = "charAt",
            rb = "selected",
            sb = "createTextNode",
            tb = "getNumberOfColumns",
            ub = "value",
            vb = "preventDefault",
            wb = "targetTouches",
            xb = "move",
            yb = "indexOf",
            zb = "color",
            Ab = "dispatchEvent",
            Bb = "capture",
            F = "left",
            Cb = "domain",
            Db = "screenX",
            Eb =
            "screenY",
            Fb = "format",
            Gb = "getBoxObjectFor",
            Ib = "createElement",
            Jb = "getColumnLabel",
            Kb = "atan2",
            Lb = "keyCode",
            Mb = "getColumnType",
            Nb = "firstChild",
            Ob = "clientLeft",
            Pb = "sqrt",
            H = "setAttribute",
            Qb = "clientTop",
            Rb = "handleEvent",
            Sb = "path",
            Tb = "setSelection",
            I = "type",
            Ub = "parentWindow",
            Vb = "clear",
            Wb = "orientation",
            Xb = "defaultView",
            Yb = "source",
            Zb = "offset",
            $b = "name",
            J = "getValue",
            ac = "NumberFormat",
            bc = "contentWindow",
            cc = "getBoundingBox",
            dc = "getTime",
            ec = "getElementsByTagName",
            fc = "clientX",
            gc = "clientY",
            hc = "documentElement",
            ic = "substr",
            jc = "scrollTop",
            kc = "toString",
            lc = "bold",
            mc = "getNumberOfRows",
            L = "length",
            nc = "propertyIsEnumerable",
            oc = "title",
            pc = "position",
            M = "prototype",
            qc = "cursor",
            rc = "labels",
            sc = "index",
            tc = "setChartType",
            uc = "clientWidth",
            vc = "getSelection",
            wc = "setTimeout",
            xc = "document",
            yc = "next",
            zc = "split",
            Ac = "formatValue",
            Bc = "constructor",
            Cc = "stopPropagation",
            Ec = "scope",
            Fc = "rect",
            Gc = "clearChart",
            N = "fontSize",
            Hc = "visualization",
            Ic = "rotate",
            Jc = "hasOwnProperty",
            O = "style",
            Kc = "close",
            Lc = "body",
            Mc = "background",
            Nc = "removeChild",
            Oc = "clone",
            Pc = "target",
            Qc = "dataType",
            Rc = "getUTCMonth",
            P = "call",
            Sc = "anchor",
            Tc = "removeAll",
            Q = "start",
            Uc = "lastIndexOf",
            Vc = "draw",
            Wc = "DateFormat",
            Xc = "multiple",
            Yc = "getFullYear",
            Zc = "clientHeight",
            $c = "scrollLeft",
            R = "bottom",
            ad = "currentStyle",
            bd = "documentMode",
            cd = "setTime",
            dd = "scale",
            ed = "every",
            fd = "contains",
            gd = "apply",
            hd = "tagName",
            id = "getContainer",
            jd = "contentDocument",
            kd = "getFormattedValue",
            ld = "parentNode",
            md = "areas",
            S = "height",
            nd = "compact",
            od = "splice",
            pd = "join",
            qd = "lineWidth",
            rd = "transform",
            sd = "toLowerCase",
            T = "right",
            U = "",
            td = "\n",
            ud = "\x0B",
            vd = " ",
            wd = " (",
            xd = " - ",
            yd = " / ",
            zd = " [",
            Ad = " [+]",
            Bd = " _loaded = true;",
            Cd = ' name="',
            Dd = ' onload="CHART_loaded()"',
            Ed = ' type="',
            Fd = ' xmlns:svg="http://www.w3.org/2000/svg"',
            Gd = ' xmlns:xlink="http://www.w3.org/1999/xlink">',
            Hd = '"',
            Id = "#",
            Jd = "#$1$1$2$2$3$3",
            Kd = "#000000",
            Ld = "#000020",
            Md = "#222222",
            Nd = "#666666",
            Od = "#7993ad",
            Pd = "#7f9a6b",
            Qd = "#8080ff",
            Rd = "#9bbdde",
            Sd = "#CCCCCC",
            Td = "#DDD",
            Ud = "#a2c488",
            Vd = "#a992ad",
            Wd = "#ad7d79",
            Xd = "#aea971",
            Yd = "#c991ff",
            Zd = "#ccc",
            $d = "#cdc785",
            ae = "#ce9839",
            be = "#d2feb0",
            ce = "#d6b9db",
            de = "#dea19b",
            ee = "#e0e0e0",
            fe = "#eee",
            ge = "#eeee5b",
            he = "#eeeeac",
            ie = "#ffbc46",
            je = "#ffd1c9",
            ke = "#fff",
            me = "#fff0db",
            ne = "#ffffff",
            oe = "%",
            pe = "&",
            qe = "&amp;",
            re = "&gt;",
            se = "&lt;",
            te = "&quot;",
            ue = "(",
            ve = "(\\d*)(\\D*)",
            we = ")",
            xe = ",",
            ye = ", ",
            ze = ",0,",
            Ae = "-",
            Be = "-10000px",
            Ce = "-moz-transform",
            De = "-ms-transform",
            Ee = "-o-transform",
            Fe = "-webkit-transform",
            Ge = ".",
            He = "...",
            Ie = ".annotations.",
            Je = ".color",
            Ke = ".enableInteractivity",
            Le = ".gif",
            Me = ".hole",
            Ne = ".id",
            Oe = ".offset",
            Pe = ".style",
            Qe = ".text",
            Re = ".textStyle",
            Se = ".type",
            Te = ".visibleInLegend",
            Ue = "/",
            Ve = "/core/patterns/",
            We = "/core/tooltip.css",
            Xe = "/static/modules/gviz/",
            Ye = "0",
            Ze = "0 0",
            $e = "0 0 4 4",
            af = "0%",
            bf = "00",
            cf = "000",
            df = "1",
            ef = "1.0",
            ff = "1.8",
            gf = "1.9",
            hf = "100%",
            jf = "1px",
            kf = "1px solid infotext",
            lf = "2",
            mf = "4",
            nf = "420+",
            of = "5.5",
            pf = "636363",
            qf = "6c6c6c",
            rf = "8",
            sf = "9",
            tf = "9.0",
            uf = "9e9e9e",
            vf = ":",
            wf = ";",
            xf = ";color: #333333;margin:0;font-style:",
            yf = ";font-weight:",
            zf = ";text-decoration:",
            Af = "<",
            Bf = "</body>",
            Cf = "</head>",
            Df = "</html>",
            Ef = "<\/script>",
            Ff = '<?xml version="1.0"?>',
            Gf = '<body marginwidth="0" marginheight="0"',
            Hf = '<div id="renderers"></div>',
            If = "<head>",
            Jf = '<html xmlns:v="urn:scheman-microsoft-com:vml">',
            Kf = '<html xmlns="http://www.w3.org/1999/xhtml"',
            Lf = '<script type="text/javascript">',
            Mf = "<style> v\\:* { behavior:url(#default#VML);}</style>",
            Nf = ">",
            Of = "@",
            Pf = "A",
            Qf = "AT",
            Rf = "AreaChart",
            Sf = "B",
            Tf = "BODY",
            Uf = "C",
            Vf = "CSS1Compat",
            Wf = "Click",
            Xf = "Click to expand annotations",
            Yf = "ComboChart",
            Zf = "DAY",
            $f = "Date(",
            ag = "Drawing_Frame_",
            bg = "E",
            cg = "HH:mm",
            dg = "HH:mm:ss",
            eg = "HOUR",
            fg = "HTML",
            gg = "HoverIn",
            hg = "HoverOut",
            ig = "IFRAME",
            jg = "Invalid listener argument",
            kg = "L",
            lg = "LINK",
            mg = "LineChart",
            ng = "M",
            og = "MILLISECOND",
            pg = "MINUTE",
            qg = "MMM d, y",
            rg = "MONTH",
            sg = "No data",
            tg = "Other",
            ug = "Q",
            vg = "Q yyyy",
            wg = "QUARTER",
            xg = "RightClick",
            yg = "SECOND",
            zg = "ScatterChart",
            Ag = "Style",
            Bg = "T",
            Cg = "TR",
            Dg = "WA",
            Eg = "WEEK",
            Fg = "Width",
            Gg = "X",
            Hg = "YEAR",
            Ig = "Z",
            Jg = "[",
            Kg = "[object Array]",
            Lg = "[object Function]",
            Mg = "[object Window]",
            Ng = "\\u",
            Og = "]",
            Pg = "_",
            Qg = "_ABSTRACT_RENDERER_ID_",
            Rg = "_default_",
            Sg = "absolute",
            Tg = "action",
            Ug = "actionsMenu.entries.",
            Vg = "actionsMenu.entries.length",
            Wg = "actionsMenu.textStyle",
            Xg = "actionsMenuEntry",
            Yg = "actionsMenuEntryHoverIn",
            Zg = "actionsMenuEntryHoverOut",
            $g = "allowContainerBoundaryTextCufoff",
            ah = "angle",
            bh = "animation.duration",
            ch = "animation.easing",
            dh = "animationEasing",
            eh = "animationfinish",
            fh = "animationframefinish",
            gh = "annotation",
            hh = "annotation.",
            ih = "annotationClick",
            jh = "annotationHoverIn",
            kh = "annotationHoverOut",
            lh = "annotations.datum.stemColor",
            mh = "annotations.datum.style",
            nh = "annotations.datum.textStyle",
            oh = "annotations.domain.stemColor",
            ph = "annotations.domain.style",
            qh = "annotations.domain.textStyle",
            rh = "annotations.stemColor",
            sh = "annotations.style",
            th = "annotations.textStyle",
            uh = "annotationtext",
            vh = "arc",
            wh = "area",
            xh = "areaOpacity",
            yh = "aria-",
            zh = "array",
            Ah = "attachToEnd",
            Bh = "attachToStart",
            Ch = "axisBackgroundColor",
            Dh = "axisTitlesPosition",
            Eh = "background-color:",
            Fh = "backgroundColor",
            Gh = "bar",
            Hh = "bar.groupWidth",
            Ih = "barWidth",
            Jh = "bars",
            Kh = "baseline",
            Lh = "baselineColor",
            Mh = "beforehide",
            Nh = "beforeshow",
            Oh = "black",
            Ph = "block",
            Qh = "blur",
            Rh = "body",
            Sh = "bold",
            Th = "boolean",
            Uh = "border-box",
            Vh = "borderBottom",
            Wh = "borderBottomWidth",
            Xh = "borderLeft",
            Yh = "borderLeftWidth",
            Zh = "borderRight",
            $h = "borderRightWidth",
            ai = "borderTop",
            bi = "borderTopWidth",
            ci = "both",
            di = "bottom",
            ei = "bottom-space",
            fi = "bound",
            gi = "boxWidth",
            hi = "boxes",
            ii = "br",
            ji = "bubble",
            ki = "bubble.opacity",
            li = "bubble.stroke",
            mi = "bubble.textStyle",
            ni = "bubbles",
            oi = "call",
            pi = "callee",
            qi = "candlestick",
            ri = "candlestick.fallingColor",
            si = "candlestick.hollowIsRising",
            ti = "candlestick.risingColor",
            ui = "candlesticks",
            vi = "category",
            wi = "categoryClick",
            xi = "categoryHoverIn",
            yi = "categoryHoverOut",
            zi = "categorypoint",
            Ai = "categorysensitivityarea",
            Bi = "cell",
            Ci = "center",
            Di = "centerSelectionAroundData",
            Ei = "chart",
            Fi = "chartArea.backgroundColor",
            Gi = "chartArea.height",
            Hi = "chartArea.left",
            Ii = "chartArea.top",
            Ji = "chartArea.width",
            Ki = "chartClick",
            Li = "chartHoverIn",
            Mi = "chartHoverOut",
            Ni = "chartMouseMove",
            Oi = "chartOptions",
            Pi = "chartRightClick",
            Qi = "chartType",
            Ri = "chartarea",
            Si = "circle",
            Ti = "class",
            Ui = "click",
            Vi = "clip-path",
            Wi = "clipPath",
            Xi = "clipped",
            Yi = "close",
            Zi = "closedPhase",
            $i = "col-resize",
            aj = "color",
            bj = "color2",
            cj = "colorAxis.colors",
            dj = "colorAxis.legend.numberFormat",
            ej = "colorAxis.legend.position",
            fj = "colorAxis.legend.textStyle",
            gj = "colorAxis.maxValue",
            hj = "colorAxis.minValue",
            ij = "colorAxis.values",
            jj = "colorAxis.values must not contain nulls",
            kj = "colorBar",
            lj = "colorbar",
            mj = "colors",
            nj = "column",
            oj = "columns",
            pj = "connectSteps",
            qj = "contextmenu",
            rj = "curve",
            sj = "curveType",
            tj = "cx",
            uj = "cy",
            vj = "d",
            wj = "dash",
            xj = "data",
            yj = "data-",
            zj = "date",
            Aj = "datetime",
            Bj = "datum",
            Cj = "datumClick",
            Dj = "datumHoverIn",
            Ej = "datumHoverOut",
            Fj = "deactivate",
            Gj = "default",
            Hj = "defs",
            Ij = "direction",
            Jj = "display",
            Kj = "displayTinySlicesInLenged",
            Lj = "div",
            Mj = "dive",
            Nj = "domain",
            Oj = "domainAxis",
            Pj = "draw",
            Qj = "e",
            Rj = "easing",
            Sj = "ellipse",
            Tj = "enableInteractivity",
            Uj = "end",
            Vj = "error",
            Wj = "explicit",
            Xj = "false",
            Yj = "fill",
            Zj = "fill-opacity",
            $j = "fillOpacity",
            ak = "firstVisibleText",
            bk = "fixed",
            ck = "fixedRangeSize",
            dk = "focus",
            ek = "focusTarget",
            fk = "font-family",
            gk = "font-family:",
            hk = "font-size",
            ik = "font-style",
            jk = "font-weight",
            kk = "fontName",
            lk = "fontSize",
            mk = "for",
            nk = "forceIFrame",
            ok = "format",
            pk = "formatOptions",
            qk = "formatOptions.scaleFactor",
            rk = "formatter.numDecimals",
            sk = "formatter.numSignificantDigits",
            tk = "formatter.unit",
            uk = "formatter.useMagnitudes",
            W = "function",
            vk = "function CHART_loaded() {",
            wk = "g",
            xk = "get",
            yk = "getSelection",
            zk = "google-visualization-tooltip",
            Ak = "google-visualization-tooltip-action",
            Bk = "google-visualization-tooltip-action-list",
            Ck = "google-visualization-tooltip-item",
            Dk = "google-visualization-tooltip-item-list",
            Ek = "google-visualization-tooltip-separator",
            Fk = "google-visualization-tooltip-square",
            Gk = "google.loader.GoogleApisBase",
            Hk = "google.visualization.Version",
            Ik = "gradient",
            Jk = "gradientUnits",
            Kk = "gridline",
            Lk = "gridlineColor",
            Mk = "gridlines.allowMinor",
            Nk = "gridlines.color",
            Ok = "gridlines.count",
            Pk = "gridlines.minMajorTextDistance",
            Qk = "gridlines.minMinorTextDistance",
            Rk = "gridlines.minNotchDistance",
            Sk = "gridlines.minStrongLineDistance",
            Tk = "gridlines.minStrongToWeakLineDistance",
            Uk = "gridlines.minWeakLineDistance",
            Vk = "gridlines.minorGridlineOpacity",
            Wk = "gridlines.minorTextOpacity",
            Xk = "gridlines.newTimeline",
            Yk = "gridlines.unitThreshold",
            Zk = "h:mm:ss a",
            $k = "hAxes.",
            al = "hAxis",
            bl = "hAxis#",
            cl = "head",
            dl = "height",
            el = "hex",
            fl = "hidden",
            gl = "hide",
            hl = "high",
            il = "horizontal",
            jl = "hover",
            kl = "html",
            ll = "http://ajax.googleapis.com/ajax",
            ml = "http://www.w3.org/2000/svg",
            nl = "id",
            ol = "iframe",
            pl = "image/svg+xml",
            ql = "in",
            rl = "inAndOut",
            sl = "inTextPosition",
            tl = "infobackground",
            ul = "inline",
            vl = "inside",
            wl = "interactivityModel",
            xl = "interpolateNulls",
            yl = "interval",
            zl = "interval.",
            Al = "intervals.",
            Bl = "is3D",
            Cl = "isStacked",
            Dl = "italic",
            El = "keydown",
            Fl = "keypress",
            Gl = "label",
            Hl = "labelInLegend",
            Il = "labeled",
            Jl = "left",
            Kl = "legend",
            Ll = "legend.alignment",
            Ml = "legend.labeledValueText",
            Nl = "legend.maxLines",
            Ol = "legend.pagingTextStyle",
            Pl = "legend.position",
            Ql = "legend.scrollArrows.activeColor",
            Rl = "legend.scrollArrows.inactiveColor",
            Sl = "legend.scrollArrows.orientation",
            Tl =
            "legend.showPageIndex",
            Ul = "legend.textStyle",
            Vl = "legendEntry",
            Wl = "legendEntryClick",
            Xl = "legendEntryHoverIn",
            Yl = "legendEntryHoverOut",
            Zl = "legendFontSize",
            $l = "legendScrollButton",
            am = "legendScrollButtonClick",
            bm = "legendTextColor",
            cm = "legendTextStyle",
            dm = "legendentry",
            em = "legendscrollbutton",
            fm = "letter",
            gm = "li",
            hm = "line",
            im = "lineSize",
            jm = "lineWidth",
            km = "linear",
            lm = "linearGradient",
            mm = "link",
            nm = "log",
            om = "logScale",
            pm = "logScaleX",
            qm = "low",
            rm = "ltr",
            sm = "majorAxisTextColor",
            tm = "max",
            um = "maxAlternation",
            vm =
            "maxTextLines",
            wm = "maxValue",
            xm = "maximized",
            ym = "middle",
            zm = "min",
            Am = "minRangeSize",
            Bm = "minTextSpacing",
            Cm = "minValue",
            Dm = "minorAxisTextColor",
            Em = "minorGridlines.color",
            Fm = "minorGridlines.count",
            Gm = "mirrorLog",
            Hm = "mousedown",
            Im = "mousemove",
            Jm = "mouseout",
            Km = "mouseover",
            Lm = "mouseup",
            Mm = "move",
            Nm = "move_offscreen",
            Om = "named",
            Pm = "native code",
            Qm = "new ",
            Rm = "no",
            X = "none",
            Sm = "nowrap",
            Tm = "null",
            Um = "number",
            Vm = "o",
            Wm = "object",
            Xm = "offset",
            Ym = "on",
            Zm = "onmousemove",
            $m = "onmouseout",
            an = "onmouseover",
            bn = "orientation",
            cn = "out",
            dn = "outTextPosition",
            en = "outside",
            fn = "overflow",
            gn = "paddingBottom",
            hn = "paddingLeft",
            jn = "paddingRight",
            kn = "paddingTop",
            ln = "path",
            mn = "pathinterval",
            nn = "pattern",
            on = "patternUnits",
            pn = "percentage",
            qn = "phase",
            rn = "pie",
            sn = "pieHole",
            tn = "pieResidueSliceColor",
            un = "pieResidueSliceLabel",
            vn = "pieSliceBorderColor",
            wn = "pieSliceText",
            xn = "pieSliceTextStyle",
            yn = "pieStartAngle",
            zn = "piecewiseLinear",
            An = "pixelLeft",
            Bn = "point",
            Cn = "pointSize",
            Dn = "points",
            En = "pointsensitivityarea",
            Fn = "position",
            Gn = "position: absolute; top: 0; left: 0; z-index: 1;",
            Hn = "position:absolute;display:none;",
            In = "pretty",
            Jn = "primarydiagonalstripes",
            Kn = "px",
            Ln = "r",
            Mn = "rangeChangeEventFiringRate",
            Nn = "rangechange",
            On = "ready",
            Pn = "rect",
            Qn = "rect(",
            Rn = "relative",
            Sn = "removeSerieButton",
            Tn = "removeSerieButtonClick",
            Un = "removeSerieButtonHoverIn",
            Vn = "removeSerieButtonHoverOut",
            Wn = "removeserie",
            Xn = "removeseriebutton",
            Yn = "renderers",
            Zn = "reverseAxis",
            $n = "reverseCategories",
            ao = "rgb",
            bo = "right",
            co = "right-space",
            eo = "rightclick",
            fo = "role",
            go = "rotate(",
            ho = "row",
            io = "row-resize",
            jo = "rtl",
            ko = "rx",
            lo = "ry",
            mo = "scaleType",
            no = "scatter",
            oo = "screen",
            po = "select",
            qo = "selection",
            ro = "selectionMode",
            so = "separator",
            to = "serie",
            uo = "serieClick",
            vo = "serieHoverIn",
            wo = "serieHoverOut",
            xo = "series",
            yo = "series-color",
            zo = "series-color-dark",
            Ao = "series-color-light",
            Bo = "series.",
            Co = "seriesType",
            Do = "set",
            Eo = "setSelection",
            Fo = "shortBarWidth",
            Go = "shortdash",
            Ho = "show",
            Io = "showRemoveSeriesButton",
            Jo = "showTextEvery",
            Ko = "showTextEveryMode",
            Lo = "sideScreenColor",
            Mo = "single",
            No = "sizeAxis.logScale",
            Oo = "sizeAxis.maxSize",
            Po = "sizeAxis.maxValue",
            Qo = "sizeAxis.minSize",
            Ro = "sizeAxis.minValue",
            So = "sizeAxis.scaleType",
            To = "slantedText",
            Uo = "slantedTextAngle",
            Vo = "slice",
            Wo = "sliceVisibilityThreshold",
            Xo = "slices.",
            Yo = "smoothingFactor",
            Zo = "snapToData",
            $o = "solid",
            ap = "sortBubblesBySize",
            bp = "span",
            cp = "sparkline",
            dp = "splice",
            ep = "square",
            fp = "src",
            gp = "start",
            hp = "static",
            ip = "stemColor",
            jp = "steppedArea",
            kp = "steppedareabar",
            lp = "sticks",
            mp = "stop",
            np = "stop-color:",
            op = "string",
            pp = "stroke",
            qp = "stroke-dasharray",
            rp = "stroke-linecap",
            sp = "stroke-opacity",
            tp = "stroke-width",
            up = "style",
            vp = "stylesheet",
            wp = "svg",
            xp = "targetAxes.",
            yp = "targetAxis",
            zp = "targetAxisIndex",
            Ap = "text",
            Bp = "text-anchor",
            Cp = "text-decoration",
            Dp = "text/css",
            Ep = "textColor",
            Fp = "textContent",
            Gp = "textFontSize",
            Hp = "textPosition",
            Ip = "textStyle",
            Jp = "textpathok",
            Kp = "tick",
            Lp = "tickScoringWeights",
            Mp = "ticks",
            Np = "timeGranularity",
            Op = "timeofday",
            Pp = "title",
            Qp = "titleColor",
            Rp = "titleFontSize",
            Sp = "titlePosition",
            Tp = "titleTextStyle",
            Up = "titleX",
            Vp = "titleY",
            Wp = "toggle_display",
            Xp = "tooltip",
            Yp = "tooltip.isHtml",
            Zp = "tooltip.showColorCode",
            $p = "tooltip.text",
            aq = "tooltip.textStyle",
            bq = "tooltip.trigger",
            cq = "tooltipFontSize",
            dq = "tooltipHoverIn",
            eq = "tooltipHoverOut",
            fq = "tooltipText",
            gq = "tooltipTextColor",
            hq = "tooltipTextStyle",
            iq = "tooltipTrigger",
            jq = "top",
            kq = "top-space",
            lq = "transform",
            mq = "translate(",
            nq = "transparent",
            oq = "trigger",
            pq = "true",
            qq = "type",
            rq = "ul",
            sq = "unbound",
            tq = "underline",
            uq = "url(#",
            vq = "userSpaceOnUse",
            wq = "v",
            xq = "v-text-align",
            yq = "v:fill",
            zq = "v:group",
            Aq = "v:oval",
            Bq = "v:path",
            Cq = "v:rect",
            Dq = "v:shape",
            Eq = "v:stroke",
            Fq = "v:textpath",
            Gq = "vAxes.",
            Hq = "vAxis",
            Iq = "vAxis#",
            Jq = "value",
            Kq = "valueFormatter",
            Lq = "var _loaded = false;",
            Mq = "vertical",
            Nq = "viewBox",
            Oq = "viewWindow.max",
            Pq = "viewWindow.min",
            Qq = "viewWindowMode",
            Rq = "visible",
            Sq = "visibleInLegend",
            Tq = "white",
            Uq = "width",
            Vq = "window.event",
            Wq = "x",
            Xq = "x1",
            Yq = "x2",
            Zq = "y",
            $q = "y1",
            ar = "y2",
            br = "zOrder",
            cr = "zoomAroundSelection",
            dr = "{",
            er = "}",
            Y, fr = this;

        function gr(a, b) {
            for (var c = a[zc](Ge), d = b || fr, e; e = c.shift();)
                if (d[e] != l) d = d[e];
                else return l;
            return d
        }

        function hr() {}

        function ir(a) {
            var b = typeof a;
            if (b == Wm)
                if (a) {
                    if (a instanceof ia) return zh;
                    if (a instanceof da) return b;
                    var c = da[M][kc][P](a);
                    if (c == Mg) return Wm;
                    if (c == Kg || typeof a[L] == Um && "undefined" != typeof a[od] && "undefined" != typeof a[nc] && !a[nc](dp)) return zh;
                    if (c == Lg || "undefined" != typeof a[P] && "undefined" != typeof a[nc] && !a[nc](oi)) return W
                } else return Tm;
            else if (b == W && "undefined" == typeof a[P]) return Wm;
            return b
        }

        function jr(a) {
            return a !== aa
        }

        function kr(a) {
            return a === l
        }

        function lr(a) {
            return a != l
        }

        function mr(a) {
            return ir(a) == zh
        }

        function nr(a) {
            var b = ir(a);
            return b == zh || b == Wm && typeof a[L] == Um
        }

        function or(a) {
            return pr(a) && typeof a[Yc] == W
        }

        function qr(a) {
            return typeof a == op
        }

        function rr(a) {
            return typeof a == Um
        }

        function sr(a) {
            return ir(a) == W
        }

        function pr(a) {
            var b = typeof a;
            return b == Wm && a != l || b == W
        }

        function tr(a) {
            return a[ur] || (a[ur] = ++vr)
        }
        var ur = "closure_uid_" + s[D](2147483648 * s.random())[kc](36),
            vr = 0;

        function wr(a, b, c) {
            return a[P][gd](a.bind, arguments)
        }

        function xr(a, b, c) {
            a || h(u());
            if (2 < arguments[L]) {
                var d = ia[M][hb][P](arguments, 2);
                return function() {
                    var c = ia[M][hb][P](arguments);
                    ia[M].unshift[gd](c, d);
                    return a[gd](b, c)
                }
            }
            return function() {
                return a[gd](b, arguments)
            }
        }

        function Z(a, b, c) {
            Z = Function[M].bind && -1 != Function[M].bind[kc]()[yb](Pm) ? wr : xr;
            return Z[gd](l, arguments)
        }

        function yr(a, b) {
            var c = ia[M][hb][P](arguments, 1);
            return function() {
                var b = ia[M][hb][P](arguments);
                b.unshift[gd](b, c);
                return a[gd](this, b)
            }
        }
        var zr = Date.now || function() {
            return +new Date
        };

        function Ar(a, b) {
            function c() {}
            c.prototype = b[M];
            a.lc = b[M];
            a.prototype = new c;
            a[M].constructor = a
        };

        function Br() {}
        Br[M].Rj = n;
        Br[M].pi = function() {
            this.Rj || (this.Rj = j, this.lb())
        };
        Br[M].Vm = function(a) {
            this.Jk || (this.Jk = []);
            this.Jk[x](a)
        };
        Br[M].lb = function() {
            this.Jk && Cr[gd](l, this.Jk);
            if (this.At)
                for (; this.At[L];) this.At.shift()()
        };

        function Dr(a) {
            a && typeof a.pi == W && a.pi()
        }

        function Cr(a) {
            for (var b = 0, c = arguments[L]; b < c; ++b) {
                var d = arguments[b];
                nr(d) ? Cr[gd](l, d) : Dr(d)
            }
        };

        function Er(a, b) {
            if (b) return a[ib](Fr, qe)[ib](Gr, se)[ib](Hr, re)[ib](Ir, te);
            if (!Jr[eb](a)) return a; - 1 != a[yb](pe) && (a = a[ib](Fr, qe)); - 1 != a[yb](Af) && (a = a[ib](Gr, se)); - 1 != a[yb](Nf) && (a = a[ib](Hr, re)); - 1 != a[yb](Hd) && (a = a[ib](Ir, te));
            return a
        }
        var Fr = /&/g,
            Gr = /</g,
            Hr = />/g,
            Ir = /\"/g,
            Jr = /[&<>\"]/;

        function Kr(a, b) {
            for (var c = 0, d = na(a)[ib](/^[\s\xa0]+|[\s\xa0]+$/g, U)[zc](Ge), e = na(b)[ib](/^[\s\xa0]+|[\s\xa0]+$/g, U)[zc](Ge), f = s.max(d[L], e[L]), g = 0; 0 == c && g < f; g++) {
                var i = d[g] || U,
                    k = e[g] || U,
                    m = RegExp(ve, wk),
                    p = RegExp(ve, wk);
                do {
                    var q = m.exec(i) || [U, U, U],
                        t = p.exec(k) || [U, U, U];
                    if (0 == q[0][L] && 0 == t[0][L]) break;
                    c = ((0 == q[1][L] ? 0 : la(q[1], 10)) < (0 == t[1][L] ? 0 : la(t[1], 10)) ? -1 : (0 == q[1][L] ? 0 : la(q[1], 10)) > (0 == t[1][L] ? 0 : la(t[1], 10)) ? 1 : 0) || ((0 == q[2][L]) < (0 == t[2][L]) ? -1 : (0 == q[2][L]) > (0 == t[2][L]) ? 1 : 0) || (q[2] < t[2] ? -1 : q[2] >
                        t[2] ? 1 : 0)
                } while (0 == c)
            }
            return c
        }

        function Lr(a) {
            var b = ja(a);
            return 0 == b && /^[\s\xa0]*$/ [eb](a) ? NaN : b
        };

        function Mr(a) {
            return a[a[L] - 1]
        }
        var Nr = ia[M],
            Or = Nr[yb] ? function(a, b, c) {
                return Nr[yb][P](a, b, c)
            } : function(a, b, c) {
                c = c == l ? 0 : 0 > c ? s.max(0, a[L] + c) : c;
                if (qr(a)) return !qr(b) || 1 != b[L] ? -1 : a[yb](b, c);
                for (; c < a[L]; c++)
                    if (c in a && a[c] === b) return c;
                return -1
            },
            Pr = Nr.forEach ? function(a, b, c) {
                Nr.forEach[P](a, b, c)
            } : function(a, b, c) {
                for (var d = a[L], e = qr(a) ? a[zc](U) : a, f = 0; f < d; f++) f in e && b[P](c, e[f], f, a)
            },
            Qr = Nr.filter ? function(a, b, c) {
                return Nr.filter[P](a, b, c)
            } : function(a, b, c) {
                for (var d = a[L], e = [], f = 0, g = qr(a) ? a[zc](U) : a, i = 0; i < d; i++)
                    if (i in g) {
                        var k = g[i];
                        b[P](c, k, i, a) && (e[f++] = k)
                    }
                return e
            },
            Rr = Nr.map ? function(a, b, c) {
                return Nr.map[P](a, b, c)
            } : function(a, b, c) {
                for (var d = a[L], e = ia(d), f = qr(a) ? a[zc](U) : a, g = 0; g < d; g++) g in f && (e[g] = b[P](c, f[g], g, a));
                return e
            };

        function Sr(a, b, c, d) {
            if (a.reduce) return d ? a.reduce(Z(b, d), c) : a.reduce(b, c);
            var e = c;
            Pr(a, function(c, g) {
                e = b[P](d, e, c, g, a)
            });
            return e
        }
        var Tr = Nr.some ? function(a, b, c) {
                return Nr.some[P](a, b, c)
            } : function(a, b, c) {
                for (var d = a[L], e = qr(a) ? a[zc](U) : a, f = 0; f < d; f++)
                    if (f in e && b[P](c, e[f], f, a)) return j;
                return n
            },
            Ur = Nr[ed] ? function(a, b, c) {
                return Nr[ed][P](a, b, c)
            } : function(a, b, c) {
                for (var d = a[L], e = qr(a) ? a[zc](U) : a, f = 0; f < d; f++)
                    if (f in e && !b[P](c, e[f], f, a)) return n;
                return j
            };

        function Vr(a, b, c) {
            b = Wr(a, b, c);
            return 0 > b ? l : qr(a) ? a[qb](b) : a[b]
        }

        function Wr(a, b, c) {
            for (var d = a[L], e = qr(a) ? a[zc](U) : a, f = 0; f < d; f++)
                if (f in e && b[P](c, e[f], f, a)) return f;
            return -1
        }

        function Xr(a, b, c) {
            a: {
                for (var d = qr(a) ? a[zc](U) : a, e = a[L] - 1; 0 <= e; e--)
                    if (e in d && b[P](c, d[e], e, a)) {
                        b = e;
                        break a
                    }
                b = -1
            }
            return 0 > b ? l : qr(a) ? a[qb](b) : a[b]
        }

        function Yr(a, b) {
            var c = Or(a, b),
                d;
            (d = 0 <= c) && Nr[od][P](a, c, 1);
            return d
        }

        function Zr(a) {
            return Nr[pb][gd](Nr, arguments)
        }

        function $r(a) {
            var b = a[L];
            if (0 < b) {
                for (var c = ia(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        }

        function as(a, b) {
            for (var c = 1; c < arguments[L]; c++) {
                var d = arguments[c],
                    e;
                if (mr(d) || (e = nr(d)) && d[Jc](pi)) a[x][gd](a, d);
                else if (e)
                    for (var f = a[L], g = d[L], i = 0; i < g; i++) a[f + i] = d[i];
                else a[x](d)
            }
        }

        function bs(a, b, c, d) {
            return Nr[od][gd](a, cs(arguments, 1))
        }

        function cs(a, b, c) {
            return 2 >= arguments[L] ? Nr[hb][P](a, b) : Nr[hb][P](a, b, c)
        }

        function ds(a, b, c, d, e) {
            for (var f = 0, g = a[L], i; f < g;) {
                var k = f + g >> 1,
                    m;
                m = c ? b[P](e, a[k], k, a) : b(d, a[k]);
                0 < m ? f = k + 1 : (g = k, i = !m)
            }
            return i ? f : ~f
        }

        function es(a, b) {
            Nr.sort[P](a, b || fs)
        }

        function fs(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        }

        function gs(a, b) {
            for (var c = [], d = 0; d < b; d++) c[d] = a;
            return c
        }

        function hs(a) {
            if (!arguments[L]) return [];
            for (var b = [], c = 0;; c++) {
                for (var d = [], e = 0; e < arguments[L]; e++) {
                    var f = arguments[e];
                    if (c >= f[L]) return b;
                    d[x](f[c])
                }
                b[x](d)
            }
        };

        function is(a, b, c) {
            return s.min(s.max(a, b), c)
        }

        function js(a, b) {
            var c = a % b;
            return 0 > c * b ? c + b : c
        }

        function ks(a) {
            return a * s.PI / 180
        }

        function ls(a) {
            return Sr(arguments, function(a, c) {
                return a + c
            }, 0)
        }

        function ms(a) {
            return ls[gd](l, arguments) / arguments[L]
        };

        function $(a, b) {
            this.x = jr(a) ? a : 0;
            this.y = jr(b) ? b : 0
        }
        Sa($[M], function() {
            return new $(this.x, this.y)
        });

        function ns(a, b) {
            return a == b ? j : !a || !b ? n : a.x == b.x && a.y == b.y
        }

        function os(a, b) {
            return new $(a.x - b.x, a.y - b.y)
        }

        function ps(a, b) {
            return new $(a.x + b.x, a.y + b.y)
        };

        function qs(a, b) {
            pa(this, a);
            $a(this, b)
        }
        Y = qs[M];
        Sa(Y, function() {
            return new qs(this[y], this[S])
        });
        Y.Vk = function() {
            return this[y] * this[S]
        };
        ua(Y, function() {
            pa(this, s[lb](this[y]));
            $a(this, s[lb](this[S]));
            return this
        });
        va(Y, function() {
            pa(this, s[D](this[y]));
            $a(this, s[D](this[S]));
            return this
        });
        ra(Y, function() {
            pa(this, s[B](this[y]));
            $a(this, s[B](this[S]));
            return this
        });
        Y.scale = function(a) {
            pa(this, this[y] * a);
            $a(this, this[S] * a);
            return this
        };

        function rs(a, b, c) {
            for (var d in a) b[P](c, a[d], d, a)
        }

        function ss(a, b, c) {
            var d = {},
                e;
            for (e in a) d[e] = b[P](c, a[e], e, a);
            return d
        }

        function ts(a) {
            for (var b in a) return a[b]
        }

        function us(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        }

        function vs(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        }

        function ws(a, b) {
            for (var c in a)
                if (a[c] == b) return j;
            return n
        }

        function xs(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        }

        function ys(a) {
            var b = ir(a);
            if (b == Wm || b == zh) {
                if (a[Oc]) return a[Oc]();
                var b = b == zh ? [] : {},
                    c;
                for (c in a) b[c] = ys(a[c]);
                return b
            }
            return a
        }
        var zs = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

        function As(a, b) {
            for (var c, d, e = 1; e < arguments[L]; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < zs[L]; f++) c = zs[f], da[M][Jc][P](d, c) && (a[c] = d[c])
            }
        };
        var Bs, Cs, Ds, Es, Fs;

        function Gs() {
            return fr.navigator ? fr.navigator.userAgent : l
        }

        function Hs() {
            return fr.navigator
        }
        Es = Ds = Cs = Bs = n;
        var Is;
        if (Is = Gs()) {
            var Js = Hs();
            Bs = 0 == Is[yb]("Opera");
            Cs = !Bs && -1 != Is[yb]("MSIE");
            Ds = !Bs && -1 != Is[yb]("WebKit");
            Es = !Bs && !Ds && "Gecko" == Js.product
        }
        var Ks = Bs,
            Ls = Cs,
            Ms = Es,
            Ns = Ds,
            Os = Hs();
        Fs = -1 != (Os && Os.platform || U)[yb]("Mac");
        var Ps = !!Hs() && -1 != (Hs().appVersion || U)[yb]("X11"),
            Qs;
        a: {
            var Rs = U,
                Ss;
            if (Ks && fr.opera) var Ts = fr.opera.version,
                Rs = typeof Ts == W ? Ts() : Ts;
            else if (Ms ? Ss = /rv\:([^\);]+)(\)|;)/ : Ls ? Ss = /MSIE\s+([^\);]+)(\)|;)/ : Ns && (Ss = /WebKit\/(\S+)/), Ss) var Us = Ss.exec(Gs()),
                Rs = Us ? Us[1] : U;
            if (Ls) {
                var Vs, Ws = fr[xc];
                Vs = Ws ? Ws[bd] : aa;
                if (Vs > ma(Rs)) {
                    Qs = na(Vs);
                    break a
                }
            }
            Qs = Rs
        }
        var Xs = Qs,
            Ys = {};

        function Zs(a) {
            return Ys[a] || (Ys[a] = 0 <= Kr(Xs, a))
        }
        var $s = {};

        function at(a) {
            return $s[a] || ($s[a] = Ls && !!ea[bd] && ea[bd] >= a)
        };
        var bt, ct = !Ls || at(9);
        !Ms && !Ls || Ls && at(9) || Ms && Zs("1.9.1");
        Ls && Zs(sf);

        function dt(a, b) {
            var c;
            c = a.className;
            c = qr(c) && c.match(/\S+/g) || [];
            for (var d = cs(arguments, 1), e = c[L] + d[L], f = c, g = 0; g < d[L]; g++) 0 <= Or(f, d[g]) || f[x](d[g]);
            Oa(a, c[pd](vd));
            return c[L] == e
        };

        function et(a) {
            return a ? new ft(gt(a)) : bt || (bt = new ft)
        }

        function ht(a, b) {
            rs(b, function(b, d) {
                d == up ? a[O].cssText = b : d == Ti ? Oa(a, b) : d == mk ? a.htmlFor = b : d in it ? a[H](it[d], b) : 0 == d[Uc](yh, 0) || 0 == d[Uc](yj, 0) ? a[H](d, b) : a[d] = b
            })
        }
        var it = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: dl,
            maxlength: "maxLength",
            role: fo,
            rowspan: "rowSpan",
            type: qq,
            usemap: "useMap",
            valign: "vAlign",
            width: Uq
        };

        function jt(a, b, c) {
            return kt(ea, arguments)
        }

        function kt(a, b) {
            var c = b[0],
                d = b[1];
            if (!ct && d && (d[$b] || d[I])) {
                c = [Af, c];
                d[$b] && c[x](Cd, Er(d[$b]), Hd);
                if (d[I]) {
                    c[x](Ed, Er(d[I]), Hd);
                    var e = {};
                    As(e, d);
                    delete e[I];
                    d = e
                }
                c[x](Nf);
                c = c[pd](U)
            }
            var f = a[Ib](c);
            d && (qr(d) ? Oa(f, d) : mr(d) ? dt[gd](l, [f][pb](d)) : ht(f, d));
            if (2 < b[L]) {
                d = function(b) {
                    b && f[v](qr(b) ? a[sb](b) : b)
                };
                for (c = 2; c < b[L]; c++)
                    if (e = b[c], nr(e) && !(pr(e) && 0 < e[kb])) {
                        var g = Pr,
                            i;
                        a: {
                            if ((i = e) && typeof i[L] == Um) {
                                if (pr(i)) {
                                    i = typeof i.item == W || typeof i.item == op;
                                    break a
                                }
                                if (sr(i)) {
                                    i = typeof i.item == W;
                                    break a
                                }
                            }
                            i = n
                        }
                        g(i ?
                            $r(e) : e, d)
                    } else d(e)
            }
            return f
        }

        function lt(a) {
            return a.compatMode == Vf
        }

        function mt(a) {
            for (var b; b = a[Nb];) a[Nc](b)
        }

        function nt(a) {
            return a && a[ld] ? a[ld][Nc](a) : l
        }

        function ot(a, b) {
            if (a[fd] && 1 == b[kb]) return a == b || a[fd](b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b[ld];
            return b == a
        }

        function gt(a) {
            return 9 == a[kb] ? a : a.ownerDocument || a[xc]
        }

        function pt(a, b, c, d) {
            c || (a = a[ld]);
            for (var c = d == l, e = 0; a && (c || e <= d);) {
                if (b(a)) return a;
                a = a[ld];
                e++
            }
            return l
        }

        function ft(a) {
            this.mb = a || fr[xc] || ea
        }
        Y = ft[M];
        Y.t = function(a) {
            return qr(a) ? this.mb[ob](a) : a
        };
        Y.setProperties = ht;
        Y.vA = function(a) {
            a = (a || this.at() || ca)[xc];
            a = lt(a) ? a[hc] : a[Lc];
            return new qs(a[uc], a[Zc])
        };
        Y.kk = function(a, b, c) {
            return kt(this.mb, arguments)
        };
        Y.createElement = function(a) {
            return this.mb[Ib](a)
        };
        Y.createTextNode = function(a) {
            return this.mb[sb](a)
        };
        Y.Sn = function() {
            return lt(this.mb)
        };
        Y.at = function() {
            return this.mb[Ub] || this.mb[Xb]
        };
        Y.uA = function() {
            return !Ns && lt(this.mb) ? this.mb[hc] : this.mb[Lc]
        };
        Y.tk = function() {
            var a = this.mb,
                b = !Ns && lt(a) ? a[hc] : a[Lc],
                a = a[Ub] || a[Xb];
            return new $(a.pageXOffset || b[$c], a.pageYOffset || b[jc])
        };
        Y.appendChild = function(a, b) {
            a[v](b)
        };
        Y.Dg = mt;
        Y.removeNode = nt;
        Ya(Y, ot);

        function qt(a) {
            qt[vd](a);
            return a
        }
        qt[vd] = hr;
        var rt = !Ls || at(9),
            st = !Ls || at(9),
            tt = Ls && !Zs(sf);
        !Ns || Zs("528");
        Ms && Zs("1.9b") || Ls && Zs(rf) || Ks && Zs("9.5") || Ns && Zs("528");
        Ms && !Zs(rf) || Ls && Zs(sf);

        function ut(a, b) {
            Da(this, a);
            Ta(this, b);
            ya(this, this[Pc])
        }
        Y = ut[M];
        Y.lb = function() {};
        Y.pi = function() {};
        Y.Jf = n;
        Y.defaultPrevented = n;
        Y.Bk = j;
        Y.stopPropagation = function() {
            this.Jf = j
        };
        Y.preventDefault = function() {
            this.defaultPrevented = j;
            this.Bk = n
        };

        function vt(a, b) {
            a && this.Kc(a, b)
        }
        Ar(vt, ut);
        var wt = [1, 4, 2];
        Y = vt[M];
        Ta(Y, l);
        Y.relatedTarget = l;
        Y.offsetX = 0;
        Y.offsetY = 0;
        Y.clientX = 0;
        Y.clientY = 0;
        Y.screenX = 0;
        Y.screenY = 0;
        Y.button = 0;
        Ca(Y, 0);
        Y.charCode = 0;
        Y.ctrlKey = n;
        Y.altKey = n;
        Y.shiftKey = n;
        Y.metaKey = n;
        Y.td = l;
        Y.Kc = function(a, b) {
            var c = Da(this, a[I]);
            ut[P](this, c);
            Ta(this, a[Pc] || a.srcElement);
            ya(this, b);
            var d = a[gb];
            if (d) {
                if (Ms) {
                    var e;
                    a: {
                        try {
                            qt(d.nodeName);
                            e = j;
                            break a
                        } catch (f) {}
                        e = n
                    }
                    e || (d = l)
                }
            } else c == Km ? d = a.fromElement : c == Jm && (d = a.toElement);
            this.relatedTarget = d;
            this.offsetX = Ns || a.offsetX !== aa ? a.offsetX : a.layerX;
            this.offsetY = Ns || a.offsetY !== aa ? a.offsetY : a.layerY;
            this.clientX = a[fc] !== aa ? a[fc] : a.pageX;
            this.clientY = a[gc] !== aa ? a[gc] : a.pageY;
            this.screenX = a[Db] || 0;
            this.screenY = a[Eb] || 0;
            this.button = a.button;
            Ca(this,
                a[Lb] || 0);
            this.charCode = a.charCode || (c == Fl ? a[Lb] : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.state = a.state;
            this.td = a;
            a.defaultPrevented && this[vb]();
            delete this.Jf
        };
        Y.TB = function(a) {
            return rt ? this.td.button == a : this[I] == Ui ? 0 == a : !!(this.td.button & wt[a])
        };
        Y.mz = function() {
            return this.TB(0) && !(Ns && Fs && this.ctrlKey)
        };
        Y.stopPropagation = function() {
            vt.lc[Cc][P](this);
            this.td[Cc] ? this.td[Cc]() : this.td.cancelBubble = j
        };
        Y.preventDefault = function() {
            vt.lc[vb][P](this);
            var a = this.td;
            if (a[vb]) a[vb]();
            else if (a.returnValue = n, tt) try {
                (a.ctrlKey || 112 <= a[Lb] && 123 >= a[Lb]) && Ca(a, -1)
            } catch (b) {}
        };
        Y.KA = function() {
            return this.td
        };
        Y.lb = function() {};

        function xt(a, b, c, d) {
            this.top = a;
            ab(this, b);
            Xa(this, c);
            Aa(this, d)
        }
        Sa(xt[M], function() {
            return new xt(this.top, this[T], this[R], this[F])
        });
        Ya(xt[M], function(a) {
            return !this || !a ? n : a instanceof xt ? a[F] >= this[F] && a[T] <= this[T] && a.top >= this.top && a[R] <= this[R] : a.x >= this[F] && a.x <= this[T] && a.y >= this.top && a.y <= this[R]
        });
        xt[M].PB = function(a) {
            Aa(this, s.min(this[F], a[F]));
            this.top = s.min(this.top, a.top);
            ab(this, s.max(this[T], a[T]));
            Xa(this, s.max(this[R], a[R]))
        };

        function yt(a, b) {
            return a[F] <= b[T] && b[F] <= a[T] && a.top <= b[R] && b.top <= a[R]
        };

        function zt(a, b, c, d) {
            Aa(this, a);
            this.top = b;
            pa(this, c);
            $a(this, d)
        }
        Sa(zt[M], function() {
            return new zt(this[F], this.top, this[y], this[S])
        });
        zt[M].fy = function() {
            return new xt(this.top, this[F] + this[y], this.top + this[S], this[F])
        };

        function At(a) {
            return new zt(a[F], a.top, a[T] - a[F], a[R] - a.top)
        }
        zt[M].bt = function(a) {
            var b = s.max(this[F], a[F]),
                c = s.min(this[F] + this[y], a[F] + a[y]);
            if (b <= c) {
                var d = s.max(this.top, a.top),
                    a = s.min(this.top + this[S], a.top + a[S]);
                if (d <= a) return Aa(this, b), this.top = d, pa(this, c - b), $a(this, a - d), j
            }
            return n
        };
        Ya(zt[M], function(a) {
            return a instanceof zt ? this[F] <= a[F] && this[F] + this[y] >= a[F] + a[y] && this.top <= a.top && this.top + this[S] >= a.top + a[S] : a.x >= this[F] && a.x <= this[F] + this[y] && a.y >= this.top && a.y <= this.top + this[S]
        });

        function Bt(a, b, c) {
            qr(b) ? Ct(a, c, b) : rs(b, yr(Ct, a))
        }

        function Ct(a, b, c) {
            a[O][na(c)[ib](/\-([a-z])/g, function(a, b) {
                return b.toUpperCase()
            })] = b
        }

        function Dt(a, b) {
            var c = gt(a);
            return c[Xb] && c[Xb].getComputedStyle && (c = c[Xb].getComputedStyle(a, l)) ? c[b] || c.getPropertyValue(b) || U : U
        }

        function Et(a, b) {
            return Dt(a, b) || (a[ad] ? a[ad][b] : l) || a[O] && a[O][b]
        }

        function Ft(a, b, c) {
            var d, e = Ms && (Fs || Ps) && Zs(gf);
            b instanceof $ ? (d = b.x, b = b.y) : (d = b, b = c);
            Aa(a[O], Gt(d, e));
            a[O].top = Gt(b, e)
        }

        function Ht(a) {
            a = a ? gt(a) : ea;
            return Ls && !at(9) && !et(a).Sn() ? a[Lc] : a[hc]
        }

        function It(a) {
            var b = a[db]();
            Ls && (a = a.ownerDocument, Aa(b, b[F] - (a[hc][Ob] + a[Lc][Ob])), b.top -= a[hc][Qb] + a[Lc][Qb]);
            return b
        }

        function Jt(a) {
            if (Ls && !at(8)) return a.offsetParent;
            for (var b = gt(a), c = Et(a, Fn), d = c == bk || c == Sg, a = a[ld]; a && a != b; a = a[ld])
                if (c = Et(a, Fn), d = d && c == hp && a != b[hc] && a != b[Lc], !d && (a.scrollWidth > a[uc] || a.scrollHeight > a[Zc] || c == bk || c == Sg || c == Rn)) return a;
            return l
        }

        function Kt(a) {
            for (var b = new xt(0, r, r, 0), c = et(a), d = c.mb[Lc], e = c.mb[hc], f = c.uA(); a = Jt(a);)
                if ((!Ls || 0 != a[uc]) && (!Ns || 0 != a[Zc] || a != d) && a != d && a != e && Et(a, fn) != Rq) {
                    var g = Lt(a),
                        i;
                    i = a;
                    if (Ms && !Zs(gf)) {
                        var k = ma(Dt(i, Yh));
                        if (Mt(i)) var m = i.offsetWidth - i[uc] - k - ma(Dt(i, $h)),
                            k = k + m;
                        i = new $(k, ma(Dt(i, bi)))
                    } else i = new $(i[Ob], i[Qb]);
                    g.x += i.x;
                    g.y += i.y;
                    b.top = s.max(b.top, g.y);
                    ab(b, s.min(b[T], g.x + a[uc]));
                    Xa(b, s.min(b[R], g.y + a[Zc]));
                    Aa(b, s.max(b[F], g.x))
                }
            d = f[$c];
            f = f[jc];
            Aa(b, s.max(b[F], d));
            b.top = s.max(b.top, f);
            c = c.vA();
            ab(b, s.min(b[T], d + c[y]));
            Xa(b, s.min(b[R], f + c[S]));
            return 0 <= b.top && 0 <= b[F] && b[R] > b.top && b[T] > b[F] ? b : l
        }

        function Lt(a) {
            var b, c = gt(a),
                d = Et(a, Fn),
                e = Ms && c[Gb] && !a[db] && d == Sg && (b = c[Gb](a)) && (0 > b[Db] || 0 > b[Eb]),
                f = new $(0, 0),
                g = Ht(c);
            if (a == g) return f;
            if (a[db]) b = It(a), a = et(c).tk(), f.x = b[F] + a.x, f.y = b.top + a.y;
            else if (c[Gb] && !e) b = c[Gb](a), a = c[Gb](g), f.x = b[Db] - a[Db], f.y = b[Eb] - a[Eb];
            else {
                b = a;
                do {
                    f.x += b.offsetLeft;
                    f.y += b.offsetTop;
                    b != a && (f.x += b[Ob] || 0, f.y += b[Qb] || 0);
                    if (Ns && Et(b, Fn) == bk) {
                        f.x += c[Lc][$c];
                        f.y += c[Lc][jc];
                        break
                    }
                    b = b.offsetParent
                } while (b && b != a);
                if (Ks || Ns && d == Sg) f.y -= c[Lc].offsetTop;
                for (b = a;
                    (b = Jt(b)) && b != c[Lc] &&
                    b != g;)
                    if (f.x -= b[$c], !Ks || b[hd] != Cg) f.y -= b[jc]
            }
            return f
        }

        function Nt(a, b) {
            var c = Ot(a),
                d = Ot(b);
            return new $(c.x - d.x, c.y - d.y)
        }

        function Ot(a) {
            var b = new $;
            if (1 == a[kb]) {
                if (a[db]) {
                    var c = It(a);
                    b.x = c[F];
                    b.y = c.top
                } else {
                    var c = et(a).tk(),
                        d = Lt(a);
                    b.x = d.x - c.x;
                    b.y = d.y - c.y
                }
                if (Ms && !Zs(12)) {
                    var e;
                    Ls ? e = De : Ns ? e = Fe : Ks ? e = Ee : Ms && (e = Ce);
                    var f;
                    e && (f = Et(a, e));
                    f || (f = Et(a, lq));
                    f ? (a = f.match(Pt), a = !a ? new $(0, 0) : new $(ma(a[1]), ma(a[2]))) : a = new $(0, 0);
                    b = ps(b, a)
                }
            } else e = sr(a.KA), f = a, a[wb] ? f = a[wb][0] : e && a.td[wb] && (f = a.td[wb][0]), b.x = f[fc], b.y = f[gc];
            return b
        }

        function Qt(a, b, c) {
            b instanceof qs ? (c = b[S], b = b[y]) : c == aa && h(u("missing height argument"));
            pa(a[O], Gt(b, j));
            $a(a[O], Gt(c, j))
        }

        function Gt(a, b) {
            typeof a == Um && (a = (b ? s[B](a) : a) + Kn);
            return a
        }

        function Rt(a) {
            if (Et(a, Jj) != X) return St(a);
            var b = a[O],
                c = b.display,
                d = b.visibility,
                e = b[pc];
            Ja(b, fl);
            Ma(b, Sg);
            Za(b, ul);
            a = St(a);
            Za(b, c);
            Ma(b, e);
            Ja(b, d);
            return a
        }

        function St(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = Ns && !b && !c;
            return (!jr(b) || d) && a[db] ? (a = It(a), new qs(a[T] - a[F], a[R] - a.top)) : new qs(b, c)
        }

        function Tt(a, b) {
            Za(a[O], b ? U : X)
        }

        function Mt(a) {
            return jo == Et(a, Ij)
        }

        function Ut(a, b, c, d) {
            if (/^\d+px?$/ [eb](b)) return la(b, 10);
            var e = a[O][c],
                f = a.runtimeStyle[c];
            a.runtimeStyle[c] = a[ad][c];
            a[O][c] = b;
            b = a[O][d];
            a[O][c] = e;
            a.runtimeStyle[c] = f;
            return b
        }

        function Vt(a, b) {
            return Ut(a, a[ad] ? a[ad][b] : l, Jl, An)
        }
        var Wt = {
            thin: 2,
            medium: 4,
            thick: 6
        };

        function Xt(a, b) {
            if ((a[ad] ? a[ad][b + Ag] : l) == X) return 0;
            var c = a[ad] ? a[ad][b + Fg] : l;
            return c in Wt ? Wt[c] : Ut(a, c, Jl, An)
        }
        var Pt = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

        function Yt(a) {
            return pt(a, function(a) {
                return a.referencepoint
            }, j)
        };

        function Zt() {}
        var $t = 0;
        Y = Zt[M];
        Y.key = 0;
        Y.Qg = n;
        Y.Wn = n;
        Y.Kc = function(a, b, c, d, e, f) {
            sr(a) ? this.ft = j : a && a[Rb] && sr(a[Rb]) ? this.ft = n : h(u(jg));
            this.ri = a;
            this.Is = b;
            this.src = c;
            Da(this, d);
            this.capture = !!e;
            this.En = f;
            this.Wn = n;
            this.key = ++$t;
            this.Qg = n
        };
        Y.handleEvent = function(a) {
            return this.ft ? this.ri[P](this.En || this.src, a) : this.ri[Rb][P](this.ri, a)
        };
        var au = {},
            bu = {},
            cu = {},
            du = {};

        function eu(a, b, c, d, e) {
            if (b) {
                if (mr(b)) {
                    for (var f = 0; f < b[L]; f++) eu(a, b[f], c, d, e);
                    return l
                }
                var d = !!d,
                    g = bu;
                b in g || (g[b] = {
                    bb: 0,
                    Mc: 0
                });
                g = g[b];
                d in g || (g[d] = {
                    bb: 0,
                    Mc: 0
                }, g.bb++);
                var g = g[d],
                    i = tr(a),
                    k;
                g.Mc++;
                if (g[i]) {
                    k = g[i];
                    for (f = 0; f < k[L]; f++)
                        if (g = k[f], g.ri == c && g.En == e) {
                            if (g.Qg) break;
                            return k[f].key
                        }
                } else k = g[i] = [], g.bb++;
                var m = fu,
                    p = st ? function(a) {
                        return m[P](p.src, p.key, a)
                    } : function(a) {
                        a = m[P](p.src, p.key, a);
                        if (!a) return a
                    },
                    f = p;
                f.src = a;
                g = new Zt;
                g.Kc(c, f, a, b, d, e);
                c = g.key;
                f.key = c;
                k[x](g);
                au[c] = g;
                cu[i] || (cu[i] = []);
                cu[i][x](g);
                a.addEventListener ? (a == fr || !a.Bs) && a.addEventListener(b, f, d) : a.attachEvent(b in du ? du[b] : du[b] = Ym + b, f);
                return c
            }
            h(u("Invalid event type"))
        }

        function gu(a, b, c, d, e) {
            if (mr(b)) {
                for (var f = 0; f < b[L]; f++) gu(a, b[f], c, d, e);
                return l
            }
            a = eu(a, b, c, d, e);
            au[a].Wn = j;
            return a
        }

        function hu(a, b, c, d, e) {
            if (mr(b)) {
                for (var f = 0; f < b[L]; f++) hu(a, b[f], c, d, e);
                return l
            }
            d = !!d;
            a: {
                f = bu;
                if (b in f && (f = f[b], d in f && (f = f[d], a = tr(a), f[a]))) {
                    a = f[a];
                    break a
                }
                a = l
            }
            if (!a) return n;
            for (f = 0; f < a[L]; f++)
                if (a[f].ri == c && a[f][Bb] == d && a[f].En == e) return iu(a[f].key);
            return n
        }

        function iu(a) {
            if (!au[a]) return n;
            var b = au[a];
            if (b.Qg) return n;
            var c = b.src,
                d = b[I],
                e = b.Is,
                f = b[Bb];
            c.removeEventListener ? (c == fr || !c.Bs) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in du ? du[d] : du[d] = Ym + d, e);
            c = tr(c);
            cu[c] && (e = cu[c], Yr(e, b), 0 == e[L] && delete cu[c]);
            b.Qg = j;
            if (b = bu[d][f][c]) b.Vs = j, ju(d, f, c, b);
            delete au[a];
            return j
        }

        function ju(a, b, c, d) {
            if (!d.Ak && d.Vs) {
                for (var e = 0, f = 0; e < d[L]; e++) d[e].Qg ? d[e].Is.src = l : (e != f && (d[f] = d[e]), f++);
                Ka(d, f);
                d.Vs = n;
                0 == f && (delete bu[a][b][c], bu[a][b].bb--, 0 == bu[a][b].bb && (delete bu[a][b], bu[a].bb--), 0 == bu[a].bb && delete bu[a])
            }
        }

        function ku(a, b, c) {
            var d = 0,
                e = b == l,
                f = c == l,
                c = !!c;
            if (a == l) rs(cu, function(a) {
                for (var g = a[L] - 1; 0 <= g; g--) {
                    var i = a[g];
                    if ((e || b == i[I]) && (f || c == i[Bb])) iu(i.key), d++
                }
            });
            else if (a = tr(a), cu[a])
                for (var a = cu[a], g = a[L] - 1; 0 <= g; g--) {
                    var i = a[g];
                    if ((e || b == i[I]) && (f || c == i[Bb])) iu(i.key), d++
                }
            return d
        }

        function lu(a, b, c, d, e) {
            var f = 1,
                b = tr(b);
            if (a[b]) {
                a.Mc--;
                a = a[b];
                a.Ak ? a.Ak++ : a.Ak = 1;
                try {
                    for (var g = a[L], i = 0; i < g; i++) {
                        var k = a[i];
                        k && !k.Qg && (f &= mu(k, e) !== n)
                    }
                } finally {
                    a.Ak--, ju(c, d, b, a)
                }
            }
            return Boolean(f)
        }

        function mu(a, b) {
            a.Wn && iu(a.key);
            return a[Rb](b)
        }

        function fu(a, b) {
            if (!au[a]) return j;
            var c = au[a],
                d = c[I],
                e = bu;
            if (!(d in e)) return j;
            var e = e[d],
                f, g;
            if (!st) {
                f = b || gr(Vq);
                var i = j in e,
                    k = n in e;
                if (i) {
                    if (0 > f[Lb] || f.returnValue != aa) return j;
                    a: {
                        var m = n;
                        if (0 == f[Lb]) try {
                            Ca(f, -1);
                            break a
                        } catch (p) {
                            m = j
                        }
                        if (m || f.returnValue == aa) f.returnValue = j
                    }
                }
                m = new vt;
                m.Kc(f, this);
                f = j;
                try {
                    if (i) {
                        for (var q = [], t = m.currentTarget; t; t = t[ld]) q[x](t);
                        g = e[j];
                        g.Mc = g.bb;
                        for (var w = q[L] - 1; !m.Jf && 0 <= w && g.Mc; w--) ya(m, q[w]), f &= lu(g, q[w], d, j, m);
                        if (k) {
                            g = e[n];
                            g.Mc = g.bb;
                            for (w = 0; !m.Jf && w < q[L] && g.Mc; w++) ya(m,
                                q[w]), f &= lu(g, q[w], d, n, m)
                        }
                    } else f = mu(c, m)
                } finally {
                    q && Ka(q, 0)
                }
                return f
            }
            d = new vt(b, this);
            return f = mu(c, d)
        };

        function nu(a) {
            this.$c = a;
            this.za = []
        }
        Ar(nu, Br);
        var ou = [];
        nu[M].Df = function(a, b, c, d, e) {
            mr(b) || (ou[0] = b, b = ou);
            for (var f = 0; f < b[L]; f++) {
                var g = eu(a, b[f], c || this, d || n, e || this.$c || this);
                this.za[x](g)
            }
            return this
        };
        nu[M].removeAll = function() {
            Pr(this.za, iu);
            Ka(this.za, 0)
        };
        nu[M].lb = function() {
            nu.lc.lb[P](this);
            this[Tc]()
        };
        nu[M].handleEvent = function() {
            h(u("EventHandler.handleEvent not implemented"))
        };

        function pu(a) {
            this.na = a;
            this.wc = new nu
        }
        Y = pu[M];
        Y.getContainer = function() {
            return this.na
        };
        Ea(Y, function() {
            this.wi();
            this.wc = new nu
        });
        Y.wi = function() {
            mt(this.na);
            Dr(this.wc)
        };
        Y.lb = function() {
            pu.lc.lb[P](this);
            this.wi()
        };
        Y.vn = function(a, b, c) {
            this.wc.Df(a, b, c)
        };

        function qu(a, b, c, d) {
            this.ef = a;
            this.ff = b;
            this.Qa = c;
            this.Xa = d
        }
        Y = qu[M];
        Sa(Y, function() {
            return new qu(this.ef, this.ff, this.Qa, this.Xa)
        });
        Y.Yd = function(a) {
            return this.ef == a.ef && this.ff == a.ff && this.Qa == a.Qa && this.Xa == a.Xa
        };
        Y.QB = function() {
            var a = this.Qa - this.ef,
                b = this.Xa - this.ff;
            return a * a + b * b
        };
        Y.vB = function() {
            return s[Pb](this.QB())
        };
        Y.Hn = function(a) {
            return new $(this.ef + a * (this.Qa - this.ef), this.ff + a * (this.Xa - this.ff))
        };

        function ru(a, b) {
            this.x = a;
            this.y = b
        }
        Ar(ru, $);
        Y = ru[M];
        Sa(Y, function() {
            return new ru(this.x, this.y)
        });
        Y.Nt = function() {
            return s[Pb](this.x * this.x + this.y * this.y)
        };
        Y.iv = function() {
            return this.x * this.x + this.y * this.y
        };
        Y.scale = function(a) {
            this.x *= a;
            this.y *= a;
            return this
        };
        Y.add = function(a) {
            this.x += a.x;
            this.y += a.y;
            return this
        };
        Y.Bt = function(a) {
            this.x -= a.x;
            this.y -= a.y;
            return this
        };
        Y.rotate = function(a) {
            var b = s.cos(a),
                a = s.sin(a),
                c = this.y * b + this.x * a;
            this.x = this.x * b - this.y * a;
            this.y = c;
            return this
        };
        Y.Yd = function(a) {
            return this == a || !!a && this.x == a.x && this.y == a.y
        };

        function su(a, b) {
            return new ru(a.x + b.x, a.y + b.y)
        }

        function tu(a, b) {
            return new ru(a.x - b.x, a.y - b.y)
        };

        function uu(a) {
            a = na(a);
            if (/^\s*$/ [eb](a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/ [eb](a[ib](/\\["\\\/bfnrtu]/g, Of)[ib](/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Og)[ib](/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, U))) try {
                return eval(ue + a + we)
            } catch (b) {}
            h(u("Invalid JSON string: " + a))
        }

        function vu(a) {
            this.Hk = a
        }
        vu[M].pz = function(a) {
            var b = [];
            this.ho(a, b);
            return b[pd](U)
        };
        vu[M].ho = function(a, b) {
            switch (typeof a) {
                case op:
                    this.qt(a, b);
                    break;
                case Um:
                    this.mB(a, b);
                    break;
                case Th:
                    b[x](a);
                    break;
                case "undefined":
                    b[x](Tm);
                    break;
                case Wm:
                    if (a == l) {
                        b[x](Tm);
                        break
                    }
                    if (mr(a)) {
                        this.lB(a, b);
                        break
                    }
                    this.nB(a, b);
                    break;
                case W:
                    break;
                default:
                    h(u("Unknown type: " + typeof a))
            }
        };
        var wu = {
                '"': '\\"',
                "\\": "\\\\",
                "/": "\\/",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t",
                "\x0B": "\\u000b"
            },
            xu = /\uffff/ [eb]("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
        vu[M].qt = function(a, b) {
            b[x](Hd, a[ib](xu, function(a) {
                if (a in wu) return wu[a];
                var b = a.charCodeAt(0),
                    e = Ng;
                16 > b ? e += cf : 256 > b ? e += bf : 4096 > b && (e += Ye);
                return wu[a] = e + b[kc](16)
            }), Hd)
        };
        vu[M].mB = function(a, b) {
            b[x](oa(a) && !ga(a) ? a : Tm)
        };
        vu[M].lB = function(a, b) {
            var c = a[L];
            b[x](Jg);
            for (var d = U, e = 0; e < c; e++) b[x](d), d = a[e], this.ho(this.Hk ? this.Hk[P](a, na(e), d) : d, b), d = xe;
            b[x](Og)
        };
        vu[M].nB = function(a, b) {
            b[x](dr);
            var c = U,
                d;
            for (d in a)
                if (da[M][Jc][P](a, d)) {
                    var e = a[d];
                    typeof e != W && (b[x](c), this.qt(d, b), b[x](vf), this.ho(this.Hk ? this.Hk[P](a, d, e) : e, b), c = xe)
                }
            b[x](er)
        };

        function yu(a, b) {
            for (var c = [a], d = b[L] - 1; 0 <= d; --d) c[x](typeof b[d], b[d]);
            return c[pd](ud)
        };

        function zu(a, b, c, d, e, f, g, i, k) {
            var m, p;
            if (m = c.offsetParent) {
                var q = m[hd] == fg || m[hd] == Tf;
                if (!q || Et(m, Fn) != hp) p = Lt(m), q || (q = (q = Mt(m)) && Ms ? -m[$c] : q && (!Ls || !Zs(rf)) ? m.scrollWidth - m[uc] - m[$c] : m[$c], p = os(p, new $(q, m[jc])))
            }
            m = p || new $;
            p = Lt(a);
            q = Rt(a);
            p = new zt(p.x, p.y, q[y], q[S]);
            (q = Kt(a)) && p.bt(At(q));
            var q = et(a),
                t = et(c);
            if (q.mb != t.mb) {
                var w = q.mb[Lc],
                    t = t.at(),
                    A = new $(0, 0),
                    E = gt(w) ? gt(w)[Ub] || gt(w)[Xb] : ca,
                    K = w;
                do {
                    var V = E == t ? Lt(K) : Ot(K);
                    A.x += V.x;
                    A.y += V.y
                } while (E && E != t && (K = E.frameElement) && (E = E.parent));
                w = os(A,
                    Lt(w));
                Ls && !q.Sn() && (w = os(w, q.tk()));
                Aa(p, p[F] + w.x);
                p.top += w.y
            }
            a = (b & 4 && Mt(a) ? b ^ 2 : b) & -5;
            b = new $(a & 2 ? p[F] + p[y] : p[F], a & 1 ? p.top + p[S] : p.top);
            b = os(b, m);
            e && (b.x += (a & 2 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
            var G;
            if (g)
                if (k) G = k;
                else if (G = Kt(c)) G.top -= m.y, ab(G, G[T] - m.x), Xa(G, G[R] - m.y), Aa(G, G[F] - m.x);
            return Au(b, c, d, f, G, g, i)
        }

        function Au(a, b, c, d, e, f, g) {
            var a = a[Oc](),
                i = 0,
                k = (c & 4 && Mt(b) ? c ^ 2 : c) & -5,
                c = Rt(b),
                g = g ? g[Oc]() : c[Oc]();
            if (d || 0 != k)(k & 2 ? a.x -= g[y] + (d ? d[T] : 0) : d && (a.x += d[F]), k & 1) ? a.y -= g[S] + (d ? d[R] : 0) : d && (a.y += d.top);
            if (f) {
                if (e) {
                    i = a;
                    d = 0;
                    if (65 == (f & 65) && (i.x < e[F] || i.x >= e[T])) f &= -2;
                    if (132 == (f & 132) && (i.y < e.top || i.y >= e[R])) f &= -5;
                    i.x < e[F] && f & 1 && (i.x = e[F], d |= 1);
                    i.x < e[F] && (i.x + g[y] > e[T] && f & 16) && (pa(g, s.max(g[y] - (i.x + g[y] - e[T]), 0)), d |= 4);
                    i.x + g[y] > e[T] && f & 1 && (i.x = s.max(e[T] - g[y], e[F]), d |= 1);
                    f & 2 && (d |= (i.x < e[F] ? 16 : 0) | (i.x + g[y] > e[T] ? 32 :
                        0));
                    i.y < e.top && f & 4 && (i.y = e.top, d |= 2);
                    i.y >= e.top && (i.y + g[S] > e[R] && f & 32) && ($a(g, s.max(g[S] - (i.y + g[S] - e[R]), 0)), d |= 8);
                    i.y + g[S] > e[R] && f & 4 && (i.y = s.max(e[R] - g[S], e.top), d |= 2);
                    f & 8 && (d |= (i.y < e.top ? 64 : 0) | (i.y + g[S] > e[R] ? 128 : 0));
                    i = d
                } else i = 256;
                if (i & 496) return i
            }
            Ft(b, a);
            if (!(c == g || (!c || !g ? 0 : c[y] == g[y] && c[S] == g[S])))(e = et(gt(b)).Sn(), Ls && (!e || !Zs(rf))) ? (a = b[O], e) ? (Ls ? (e = Vt(b, hn), c = Vt(b, jn), f = Vt(b, kn), d = Vt(b, gn), e = new xt(f, c, d, e)) : (e = Dt(b, hn), c = Dt(b, jn), f = Dt(b, kn), d = Dt(b, gn), e = new xt(ma(f), ma(c), ma(d), ma(e))),
                Ls ? (c = Xt(b, Xh), f = Xt(b, Zh), d = Xt(b, ai), b = Xt(b, Vh), b = new xt(d, f, b, c)) : (c = Dt(b, Yh), f = Dt(b, $h), d = Dt(b, bi), b = Dt(b, Wh), b = new xt(ma(d), ma(f), ma(b), ma(c))), a.pixelWidth = g[y] - b[F] - e[F] - e[T] - b[T], a.pixelHeight = g[S] - b.top - e.top - e[R] - b[R]) : (a.pixelWidth = g[y], a.pixelHeight = g[S]) : (b = b[O], Ms ? b.MozBoxSizing = Uh : Ns ? b.WebkitBoxSizing = Uh : b.boxSizing = Uh, pa(b, s.max(g[y], 0) + Kn), $a(b, s.max(g[S], 0) + Kn));
            return i
        };

        function Bu() {}
        Bu[M].qd = function() {};

        function Cu(a, b, c) {
            this.element = a;
            this.Dt = b;
            this.wB = c
        }
        Ar(Cu, Bu);
        Cu[M].qd = function(a, b, c) {
            zu(this.element, this.Dt, a, b, aa, c, this.wB)
        };

        function Du(a, b) {
            this.l = a instanceof $ ? a : new $(a, b)
        }
        Ar(Du, Bu);
        Du[M].qd = function(a, b, c, d) {
            zu(Ht(a), 0, a, b, this.l, c, l, d)
        };
        var Eu = "StopIteration" in fr ? fr.StopIteration : u("StopIteration");

        function Fu() {}
        Qa(Fu[M], function() {
            h(Eu)
        });
        Fu[M].Zn = function() {
            return this
        };

        function Gu(a) {
            if (typeof a.If == W) a = a.If();
            else if (nr(a) || qr(a)) a = a[L];
            else {
                var b = 0,
                    c;
                for (c in a) b++;
                a = b
            }
            return a
        }

        function Hu(a) {
            if (typeof a.Be == W) return a.Be();
            if (qr(a)) return a[zc](U);
            if (nr(a)) {
                for (var b = [], c = a[L], d = 0; d < c; d++) b[x](a[d]);
                return b
            }
            return us(a)
        };

        function Iu(a, b) {
            this.Ua = {};
            this.za = [];
            var c = arguments[L];
            if (1 < c) {
                c % 2 && h(u("Uneven number of arguments"));
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else a && this.Kn(a)
        }
        Y = Iu[M];
        Y.bb = 0;
        Y.qi = 0;
        Y.If = function() {
            return this.bb
        };
        Y.Be = function() {
            this.mi();
            for (var a = [], b = 0; b < this.za[L]; b++) a[x](this.Ua[this.za[b]]);
            return a
        };
        Y.Xn = function() {
            this.mi();
            return this.za[pb]()
        };
        Y.zA = function(a) {
            return Ju(this.Ua, a)
        };
        Y.nt = function(a) {
            for (var b = 0; b < this.za[L]; b++) {
                var c = this.za[b];
                if (Ju(this.Ua, c) && this.Ua[c] == a) return j
            }
            return n
        };
        Y.Yd = function(a, b) {
            if (this === a) return j;
            if (this.bb != a.If()) return n;
            var c = b || Ku;
            this.mi();
            for (var d, e = 0; d = this.za[e]; e++)
                if (!c(this.get(d), a.get(d))) return n;
            return j
        };

        function Ku(a, b) {
            return a === b
        }
        Ea(Y, function() {
            this.Ua = {};
            Ka(this.za, 0);
            this.qi = this.bb = 0
        });
        Y.remove = function(a) {
            return Ju(this.Ua, a) ? (delete this.Ua[a], this.bb--, this.qi++, this.za[L] > 2 * this.bb && this.mi(), j) : n
        };
        Y.mi = function() {
            if (this.bb != this.za[L]) {
                for (var a = 0, b = 0; a < this.za[L];) {
                    var c = this.za[a];
                    Ju(this.Ua, c) && (this.za[b++] = c);
                    a++
                }
                Ka(this.za, b)
            }
            if (this.bb != this.za[L]) {
                for (var d = {}, b = a = 0; a < this.za[L];) c = this.za[a], Ju(d, c) || (this.za[b++] = c, d[c] = 1), a++;
                Ka(this.za, b)
            }
        };
        Y.get = function(a, b) {
            return Ju(this.Ua, a) ? this.Ua[a] : b
        };
        Y.set = function(a, b) {
            Ju(this.Ua, a) || (this.bb++, this.za[x](a), this.qi++);
            this.Ua[a] = b
        };
        Y.Kn = function(a) {
            var b;
            a instanceof Iu ? (b = a.Xn(), a = a.Be()) : (b = vs(a), a = us(a));
            for (var c = 0; c < b[L]; c++) this.set(b[c], a[c])
        };
        Sa(Y, function() {
            return new Iu(this)
        });
        Y.Zn = function(a) {
            this.mi();
            var b = 0,
                c = this.za,
                d = this.Ua,
                e = this.qi,
                f = this,
                g = new Fu;
            Qa(g, function() {
                for (;;) {
                    e != f.qi && h(u("The map has changed since the iterator was created"));
                    b >= c[L] && h(Eu);
                    var g = c[b++];
                    return a ? g : d[g]
                }
            });
            return g
        };

        function Ju(a, b) {
            return da[M][Jc][P](a, b)
        };

        function Lu(a) {
            this.Ua = new Iu;
            a && this.Kn(a)
        }

        function Mu(a) {
            var b = typeof a;
            return b == Wm && a || b == W ? Vm + tr(a) : b[ic](0, 1) + a
        }
        Y = Lu[M];
        Y.If = function() {
            return this.Ua.If()
        };
        Y.add = function(a) {
            this.Ua.set(Mu(a), a)
        };
        Y.Kn = function(a) {
            for (var a = Hu(a), b = a[L], c = 0; c < b; c++) this.add(a[c])
        };
        Y.removeAll = function(a) {
            for (var a = Hu(a), b = a[L], c = 0; c < b; c++) this.remove(a[c])
        };
        Y.remove = function(a) {
            return this.Ua.remove(Mu(a))
        };
        Ea(Y, function() {
            this.Ua[Vb]()
        });
        Ya(Y, function(a) {
            return this.Ua.zA(Mu(a))
        });
        Y.bt = function(a) {
            for (var b = new Lu, a = Hu(a), c = 0; c < a[L]; c++) {
                var d = a[c];
                this[fd](d) && b.add(d)
            }
            return b
        };
        Y.Be = function() {
            return this.Ua.Be()
        };
        Sa(Y, function() {
            return new Lu(this)
        });
        Y.Yd = function(a) {
            return this.If() == Gu(a) && this.pB(a)
        };
        Y.pB = function(a) {
            var b = Gu(a);
            if (this.If() > b) return n;
            !(a instanceof Lu) && 5 < b && (a = new Lu(a));
            a: if (b = function(b) {
                        return typeof a[fd] == W ? a[fd](b) : typeof a.nt == W ? a.nt(b) : nr(a) || qr(a) ? 0 <= Or(a, b) : ws(a, b)
                    }, typeof this[ed] == W) b = this[ed](b, aa);
                else
            if (nr(this) || qr(this)) b = Ur(this, b, aa);
            else {
                var c;
                if (typeof this.Xn == W) c = this.Xn();
                else if (typeof this.Be != W)
                    if (nr(this) || qr(this)) {
                        c = [];
                        for (var d = this[L], e = 0; e < d; e++) c[x](e)
                    } else c = vs(this);
                else c = aa;
                for (var d = Hu(this), e = d[L], f = 0; f < e; f++)
                    if (!b[P](aa, d[f], c && c[f],
                            this)) {
                        b = n;
                        break a
                    }
                b = j
            }
            return b
        };
        Y.Zn = function() {
            return this.Ua.Zn(n)
        };

        function Nu() {}
        Ar(Nu, Br);
        Y = Nu[M];
        Y.Bs = j;
        Y.Dn = l;
        Y.addEventListener = function(a, b, c, d) {
            eu(this, a, b, c, d)
        };
        Y.removeEventListener = function(a, b, c, d) {
            hu(this, a, b, c, d)
        };
        Y.dispatchEvent = function(a) {
            var b = a[I] || a,
                c = bu;
            if (b in c) {
                if (qr(a)) a = new ut(a, this);
                else if (a instanceof ut) Ta(a, a[Pc] || this);
                else {
                    var d = a,
                        a = new ut(b, this);
                    As(a, d)
                }
                var d = 1,
                    e, c = c[b],
                    b = j in c,
                    f;
                if (b) {
                    e = [];
                    for (f = this; f; f = f.Dn) e[x](f);
                    f = c[j];
                    f.Mc = f.bb;
                    for (var g = e[L] - 1; !a.Jf && 0 <= g && f.Mc; g--) ya(a, e[g]), d &= lu(f, e[g], a[I], j, a) && a.Bk != n
                }
                if (n in c)
                    if (f = c[n], f.Mc = f.bb, b)
                        for (g = 0; !a.Jf && g < e[L] && f.Mc; g++) ya(a, e[g]), d &= lu(f, e[g], a[I], n, a) && a.Bk != n;
                    else
                        for (e = this; !a.Jf && e && f.Mc; e = e.Dn) ya(a, e), d &= lu(f, e, a[I], n, a) &&
                            a.Bk != n;
                a = Boolean(d)
            } else a = j;
            return a
        };
        Y.lb = function() {
            Nu.lc.lb[P](this);
            ku(this);
            this.Dn = l
        };

        function Ou(a, b) {
            this.Dk = a || 1;
            this.si = b || Pu;
            this.Nn = Z(this.On, this);
            this.Sg = zr()
        }
        Ar(Ou, Nu);
        Ou[M].enabled = n;
        var Pu = fr.window;
        Y = Ou[M];
        Y.Nf = l;
        Y.On = function() {
            if (this.enabled) {
                var a = zr() - this.Sg;
                0 < a && a < 0.8 * this.Dk ? this.Nf = this.si[wc](this.Nn, this.Dk - a) : (this.dA(), this.enabled && (this.Nf = this.si[wc](this.Nn, this.Dk), this.Sg = zr()))
            }
        };
        Y.dA = function() {
            this[Ab](Kp)
        };
        Va(Y, function() {
            this.enabled = j;
            this.Nf || (this.Nf = this.si[wc](this.Nn, this.Dk), this.Sg = zr())
        });
        Y.stop = function() {
            this.enabled = n;
            this.Nf && (this.si.clearTimeout(this.Nf), this.Nf = l)
        };
        Y.lb = function() {
            Ou.lc.lb[P](this);
            this.stop();
            delete this.si
        };

        function Qu(a, b, c) {
            sr(a) ? c && (a = Z(a, c)) : a && typeof a[Rb] == W ? a = Z(a[Rb], a) : h(u(jg));
            return 2147483647 < b ? -1 : Pu[wc](a, b || 0)
        };

        function Ru(a, b) {
            this.$c = new nu(this);
            this.yn(a || l);
            b && this.SA(b)
        }
        Ar(Ru, Nu);
        Y = Ru[M];
        Y.Ta = l;
        Y.Hy = j;
        Y.ct = l;
        Y.Pg = n;
        Y.GA = n;
        Y.Mt = -1;
        Y.Iy = n;
        Y.eA = j;
        Y.Gg = Wp;
        Y.SA = function(a) {
            this.Gg = a
        };
        Y.t = function() {
            return this.Ta
        };
        Y.yn = function(a) {
            this.BA();
            this.Ta = a
        };
        Y.BA = function() {
            this.Pg && h(u("Can not change this state of the popup while showing."))
        };
        Y.v = function() {
            return this.Pg
        };
        Y.Hg = function(a) {
            this.ci && this.ci.stop();
            this.ki && this.ki.stop();
            a ? this.HA() : this.zk()
        };
        Y.qd = hr;
        Y.HA = function() {
            if (!this.Pg && this.Ym()) {
                this.Ta || h(u("Caller must call setElement before trying to show the popup"));
                this.qd();
                var a = gt(this.Ta);
                this.Iy && this.$c.Df(a, El, this.Jy, j);
                if (this.Hy)
                    if (this.$c.Df(a, Hm, this.hs, j), Ls) {
                        var b;
                        try {
                            b = a.activeElement
                        } catch (c) {}
                        for (; b && b.nodeName == ig;) {
                            try {
                                var d = b[jd] || b[bc][xc]
                            } catch (e) {
                                break
                            }
                            a = d;
                            b = a.activeElement
                        }
                        this.$c.Df(a, Hm, this.hs, j);
                        this.$c.Df(a, Fj, this.gs)
                    } else this.$c.Df(a, Qh, this.gs);
                this.Gg == Wp ? this.Ky() : this.Gg == Nm && this.qd();
                this.Pg = j;
                this.ci ? (gu(this.ci,
                    Uj, this.is, n, this), this.ci.play()) : this.is()
            }
        };
        Y.zk = function(a) {
            if (!this.Pg || !this.gA(a)) return n;
            this.$c && this.$c[Tc]();
            this.Pg = n;
            zr();
            this.ki ? (gu(this.ki, Uj, yr(this.et, a), n, this), this.ki.play()) : this.et(a);
            return j
        };
        Y.et = function(a) {
            this.Gg == Wp ? this.GA ? Qu(this.tt, 0, this) : this.tt() : this.Gg == Nm && this.FA();
            this.An(a)
        };
        Y.Ky = function() {
            Ja(this.Ta[O], Rq);
            Tt(this.Ta, j)
        };
        Y.tt = function() {
            Ja(this.Ta[O], fl);
            Tt(this.Ta, n)
        };
        Y.FA = function() {
            this.Ta[O].top = Be
        };
        Y.Ym = function() {
            return this[Ab](Nh)
        };
        Y.is = function() {
            this.Mt = zr();
            this[Ab](Ho)
        };
        Y.gA = function(a) {
            return this[Ab]({
                type: Mh,
                target: a
            })
        };
        Y.An = function(a) {
            this[Ab]({
                type: gl,
                target: a
            })
        };
        Y.hs = function(a) {
            a = a[Pc];
            !ot(this.Ta, a) && ((!this.ct || ot(this.ct, a)) && !this.Zs()) && this.zk(a)
        };
        Y.Jy = function(a) {
            27 == a[Lb] && this.zk(a[Pc]) && (a[vb](), a[Cc]())
        };
        Y.gs = function(a) {
            if (this.eA) {
                var b = gt(this.Ta);
                if (Ls || Ks) {
                    if (a = b.activeElement, !a || ot(this.Ta, a) || a[hd] == Tf) return
                } else if (a[Pc] != b) return;
                this.Zs() || this.zk()
            }
        };
        Y.Zs = function() {
            return 150 > zr() - this.Mt
        };
        Y.lb = function() {
            Ru.lc.lb[P](this);
            this.$c.pi();
            Dr(this.ci);
            Dr(this.ki);
            delete this.Ta;
            delete this.$c
        };

        function Su(a, b) {
            this.vx = 4;
            this.k = b || aa;
            Ru[P](this, a)
        }
        Ar(Su, Ru);
        Su[M].nb = function() {
            return this.k || l
        };
        Su[M].fB = function(a) {
            this.k = a || aa;
            this.v() && this.qd()
        };
        Su[M].qd = function() {
            if (this.k) {
                var a = !this.v() && this.Gg != Nm,
                    b = this.t();
                a && (Ja(b[O], fl), Tt(b, j));
                this.k.qd(b, this.vx, this.cC);
                a && Tt(b, n)
            }
        };

        function Tu(a, b, c) {
            this.ak = c || (a ? et(qr(a) ? ea[ob](a) : a) : et());
            Su[P](this, this.ak.kk(Lj, {
                style: Hn
            }));
            this.Wb = new $(1, 1);
            this.yf = new Lu;
            a && this.Zz(a);
            b != l && this.aA(b)
        }
        Ar(Tu, Su);
        var Uu = [];
        Y = Tu[M];
        Y.nc = l;
        Oa(Y, "goog-tooltip");
        Y.wt = 500;
        Y.xt = 0;
        Y.Zz = function(a) {
            a = qr(a) ? ea[ob](a) : a;
            this.yf.add(a);
            eu(a, Km, this.it, n, this);
            eu(a, Jm, this.Gk, n, this);
            eu(a, Im, this.ht, n, this);
            eu(a, dk, this.gt, n, this);
            eu(a, Qh, this.Gk, n, this)
        };
        Y.detach = function(a) {
            if (a) a = qr(a) ? ea[ob](a) : a, this.st(a), this.yf.remove(a);
            else {
                for (var b = this.yf.Be(), c = 0; a = b[c]; c++) this.st(a);
                this.yf[Vb]()
            }
        };
        Y.st = function(a) {
            hu(a, Km, this.it, n, this);
            hu(a, Jm, this.Gk, n, this);
            hu(a, Im, this.ht, n, this);
            hu(a, dk, this.gt, n, this);
            hu(a, Qh, this.Gk, n, this)
        };
        Y.Iz = function(a) {
            this.wt = a
        };
        Y.Hz = function(a) {
            this.xt = a
        };
        Y.aA = function(a) {
            var b = this.t();
            if (Fp in b) b.textContent = a;
            else if (b[Nb] && 3 == b[Nb][kb]) {
                for (; b.lastChild != b[Nb];) b[Nc](b.lastChild);
                ta(b[Nb], a)
            } else mt(b), b[v](gt(b)[sb](a))
        };
        Y.yn = function(a) {
            var b = this.t();
            b && nt(b);
            Tu.lc.yn[P](this, a);
            a && (b = this.ak.mb[Lc], b.insertBefore(a, b.lastChild))
        };
        Y.getState = function() {
            return this.Rg ? this.v() ? 4 : 1 : this.ei ? 3 : this.v() ? 2 : 0
        };
        Y.Ym = function() {
            if (!Ru[M].Ym[P](this)) return n;
            if (this[Sc])
                for (var a, b = 0; a = Uu[b]; b++) ot(a.t(), this[Sc]) || a.Hg(n);
            0 <= Or(Uu, this) || Uu[x](this);
            a = this.t();
            Oa(a, this.className);
            this.ik();
            eu(a, Km, this.ks, n, this);
            eu(a, Jm, this.js, n, this);
            this.Tm();
            return j
        };
        Y.An = function() {
            Yr(Uu, this);
            for (var a = this.t(), b, c = 0; b = Uu[c]; c++) b[Sc] && ot(a, b[Sc]) && b.Hg(n);
            this.us && this.us.bn();
            hu(a, Km, this.ks, n, this);
            hu(a, Jm, this.js, n, this);
            Ua(this, aa);
            0 == this.getState() && (this.Yj = n);
            Ru[M].An[P](this)
        };
        Y.eB = function(a, b) {
            this[Sc] == a && this.yf[fd](this[Sc]) && (this.Yj || !this.dC ? (this.Hg(n), this.v() || this.wz(a, b)) : Ua(this, aa));
            this.Rg = aa
        };
        Y.wz = function(a, b) {
            Ua(this, a);
            this.fB(b || this.Os(0));
            this.Hg(j)
        };
        Y.hB = function(a) {
            this.ei = aa;
            a == this[Sc] && (this.nc == l || this.nc != this.t() && !this.yf[fd](this.nc)) && !this.kz() && this.Hg(n)
        };
        Y.kz = function() {
            return !(!this.Fs || !this.Fs.nc)
        };
        Y.Ys = function(a) {
            var b = this.ak.tk();
            this.Wb.x = a[fc] + b.x;
            this.Wb.y = a[gc] + b.y
        };
        Y.it = function(a) {
            var b = this.dk(a[Pc]);
            this.nc = b;
            this.ik();
            b != this[Sc] && (Ua(this, b), this.Us(b), this.Ts(), this.Ys(a))
        };
        Y.dk = function(a) {
            try {
                for (; a && !this.yf[fd](a);) a = a[ld];
                return a
            } catch (b) {
                return l
            }
        };
        Y.ht = function(a) {
            this.Ys(a);
            this.Yj = j
        };
        Y.gt = function(a) {
            this.nc = a = this.dk(a[Pc]);
            this.Yj = j;
            if (this[Sc] != a) {
                Ua(this, a);
                var b = this.Os(1);
                this.ik();
                this.Us(a, b);
                this.Ts()
            }
        };
        Y.Os = function(a) {
            return 0 == a ? (a = this.Wb[Oc](), new Vu(a)) : new Wu(this.nc)
        };
        Y.Ts = function() {
            if (this[Sc])
                for (var a, b = 0; a = Uu[b]; b++) ot(a.t(), this[Sc]) && (a.Fs = this, this.us = a)
        };
        Y.Gk = function(a) {
            var b = this.dk(a[Pc]),
                c = this.dk(a[gb]);
            b != c && (b == this.nc && (this.nc = l), this.Tm(), this.Yj = n, this.v() && (!a[gb] || !ot(this.t(), a[gb])) ? this.bn() : Ua(this, aa))
        };
        Y.ks = function() {
            var a = this.t();
            this.nc != a && (this.ik(), this.nc = a)
        };
        Y.js = function(a) {
            var b = this.t();
            if (this.nc == b && (!a[gb] || !ot(b, a[gb]))) this.nc = l, this.bn()
        };
        Y.Us = function(a, b) {
            this.Rg || (this.Rg = Qu(Z(this.eB, this, a, b), this.wt))
        };
        Y.Tm = function() {
            this.Rg && (Pu.clearTimeout(this.Rg), this.Rg = aa)
        };
        Y.bn = function() {
            2 == this.getState() && (this.ei = Qu(Z(this.hB, this, this[Sc]), this.xt))
        };
        Y.ik = function() {
            this.ei && (Pu.clearTimeout(this.ei), this.ei = aa)
        };
        Y.lb = function() {
            this.Hg(n);
            this.Tm();
            this.detach();
            this.t() && nt(this.t());
            this.nc = l;
            delete this.ak;
            Tu.lc.lb[P](this)
        };

        function Vu(a, b) {
            Du[P](this, a, b)
        }
        Ar(Vu, Du);
        Vu[M].qd = function(a, b, c) {
            b = Ht(a);
            b = Kt(b);
            c = c ? new xt(c.top + 10, c[T], c[R], c[F] + 10) : new xt(10, 0, 0, 10);
            Au(this.l, a, 4, c, b, 9) & 496 && Au(this.l, a, 4, c, b, 5)
        };

        function Wu(a) {
            Cu[P](this, a, 3)
        }
        Ar(Wu, Cu);
        Wu[M].qd = function(a, b, c) {
            var d = new $(10, 0);
            zu(this.element, this.Dt, a, b, d, c, 9) & 496 && zu(this.element, 2, a, 1, d, c, 5)
        };
        var Xu = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: Kd,
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: ne,
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        };

        function Yu(a) {
            var b = {},
                a = na(a),
                c = a[qb](0) == Id ? a : Id + a;
            if (Zu[eb](c)) return b.Fk = $u(c), Da(b, el), b;
            a: {
                var d = a.match(av);
                if (d) {
                    var c = ja(d[1]),
                        e = ja(d[2]),
                        d = ja(d[3]);
                    if (0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
                        c = [c, e, d];
                        break a
                    }
                }
                c = []
            }
            if (c[L]) return b.Fk = bv(c), Da(b, ao), b;
            if (Xu && (c = Xu[a[sd]()])) return b.Fk = c, Da(b, Om), b;
            h(u(a + " is not a valid color string"))
        }
        var cv = /#(.)(.)(.)/;

        function $u(a) {
            Zu[eb](a) || h(u("'" + a + "' is not a valid hex color"));
            4 == a[L] && (a = a[ib](cv, Jd));
            return a[sd]()
        }

        function dv(a) {
            a = $u(a);
            return [la(a[ic](1, 2), 16), la(a[ic](3, 2), 16), la(a[ic](5, 2), 16)]
        }

        function ev(a, b, c) {
            a = ja(a);
            b = ja(b);
            c = ja(c);
            (ga(a) || 0 > a || 255 < a || ga(b) || 0 > b || 255 < b || ga(c) || 0 > c || 255 < c) && h(u('"(' + a + xe + b + xe + c + '") is not a valid RGB color'));
            a = fv(a[kc](16));
            b = fv(b[kc](16));
            c = fv(c[kc](16));
            return Id + a + b + c
        }

        function bv(a) {
            return ev(a[0], a[1], a[2])
        }
        var Zu = /^#(?:[0-9a-f]{3}){1,2}$/i,
            av = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

        function fv(a) {
            return 1 == a[L] ? Ye + a : a
        }

        function gv(a, b, c) {
            c = is(c, 0, 1);
            return [s[B](c * a[0] + (1 - c) * b[0]), s[B](c * a[1] + (1 - c) * b[1]), s[B](c * a[2] + (1 - c) * b[2])]
        };

        function hv(a, b) {
            a && (a.logicalname = b)
        }

        function iv(a) {
            a = pt(a, function(a) {
                return a.logicalname != l
            }, j);
            return !a ? Rg : a.logicalname
        };

        function jv(a) {
            return a == X || a == U || a == nq ? X : Yu(a).Fk
        }

        function kv(a) {
            if (a == X) return X;
            a = dv(a);
            a = s[B]((a[0] + a[1] + a[2]) / 3);
            return ev(a, a, a)
        }

        function lv(a, b) {
            var c = a.kk(b[$b], b.Ud);
            a.setProperties(c, {
                style: b[O]
            });
            if (b[nb] != l) {
                var d = mr(b[nb]) ? b[nb] : [b[nb]];
                Pr(d, function(b) {
                    qr(b) ? a[v](c, a[sb](b)) : a[v](c, lv(a, b))
                })
            }
            b.id != l && hv(c, b.id);
            return c
        };

        function mv(a, b) {
            Va(this, a < b ? a : b);
            this.end = a < b ? b : a
        }
        Sa(mv[M], function() {
            return new mv(this[Q], this.end)
        });

        function nv(a, b) {
            return a[Q] <= b && a.end >= b
        };

        function ov(a, b, c) {
            return a == b || s.abs(a - b) <= (c != l ? c : 1E-5)
        }

        function pv(a, b, c) {
            return !a || a == X ? b : !b || b == X ? a : bv(gv(dv(a), dv(b), c))
        }

        function qv(a, b) {
            if (b == l) return a;
            var c = new mv(b, b);
            return a ? new mv(s.min(a[Q], c[Q]), s.max(a.end, c.end)) : c
        }

        function rv(a, b, c) {
            var d = b != l ? b : a && c != l && c < a[Q] ? c : a ? a[Q] : l,
                a = c != l ? c : a && b != l && b > a.end ? b : a ? a.end : l;
            return d != l && a != l ? new mv(d, a) : l
        }

        function sv(a) {
            if (0 == a[L]) return l;
            for (var b = a[0][Oc](), c = 1; c < a[L]; c++) b.PB(a[c]);
            return b
        }

        function tv(a, b) {
            var c = ds(a, fs, n, b);
            if (0 <= c) return b;
            c = -(c + 1);
            if (0 == c) return a[0];
            if (c == a[L]) return Mr(a);
            var d = a[c - 1],
                c = a[c];
            return s.abs(b - d) <= s.abs(b - c) ? d : c
        };

        function uv(a, b, c) {
            this.uf = a;
            this.tf = jv(b);
            this.sf = jv(c != l ? c : ne)
        }
        Sa(uv[M], function() {
            return new uv(this.uf, this.tf, this.sf)
        });
        uv[M].Eh = function() {
            return new uv(this.uf, kv(this.tf), kv(this.sf))
        };

        function vv(a) {
            a = a || {};
            this.Y = X;
            a.fill != l && this.Bm(a.fill);
            this.Ic = 1;
            a.Cb != l && this.Fl(a.Cb);
            this.Ob = X;
            a.stroke != l && this.Gc(a.stroke);
            this.I = 1;
            a.Aa != l && this.Re(a.Aa);
            this.Yc = 1;
            a.jd != l && this.Zg(a.jd);
            this.xe = $o;
            a.Im != l && this.Rq(a.Im);
            this.q = l;
            a.q && (this.q = xs(a.q), this.q.Jd = jv(this.q.Jd), this.q.Kd = jv(this.q.Kd));
            this.$a = l;
            a.pattern && this.Hm(a.pattern)
        }
        Y = vv[M];
        Y.getProperties = function() {
            return {
                fill: this.Y,
                Cb: this.Ic,
                stroke: this.Ob,
                Aa: this.I,
                jd: this.Yc,
                Im: this.xe,
                q: this.q ? xs(this.q) : l,
                pattern: this.$a
            }
        };
        Sa(Y, function() {
            return new vv(this.getProperties())
        });
        Y.Eh = function() {
            var a = this[Oc]();
            a.Bm(kv(this.Y));
            a.Gc(kv(this.Ob));
            if (this.q) {
                var b = xs(this.q);
                b.Jd = kv(this.q.Jd);
                b.Kd = kv(this.q.Kd);
                a.q = b
            }
            this.$a && a.Hm(this.$a.Eh());
            return a
        };
        Y.Bm = function(a) {
            this.Y = jv(a)
        };
        Y.Fl = function(a) {
            this.Ic = is(a, 0, 1)
        };
        Y.Gc = function(a, b) {
            this.Ob = jv(a);
            b != l && this.Re(b)
        };
        Y.Re = function(a) {
            this.I = a
        };
        Y.ar = function() {
            return this.od() ? this.I : 0
        };
        Y.Zg = function(a) {
            this.Yc = is(a, 0, 1)
        };
        Y.Rq = function(a) {
            this.xe = a
        };
        Y.Hm = function(a) {
            this.$a = a
        };
        Y.lh = function() {
            return 0 < this.Ic && (!(this.Y == l || this.Y == X) || this.q != l || this.$a != l)
        };
        Y.od = function() {
            return 0 < this.I && 0 < this.Yc && !(this.Ob == l || this.Ob == X)
        };
        Y.Pq = function() {
            return this.xe != $o
        };
        Y.dq = function() {
            return !this.lh() && !this.od()
        };
        Y.fg = function() {
            return this.lh() && 1 <= this.Ic
        };
        Y.Oq = function() {
            return this.od() && 1 <= this.Yc
        };
        var wv = new vv({
            Cb: 0,
            fill: Tq,
            jd: 0,
            stroke: Tq
        });

        function xv(a, b) {
            return new vv({
                stroke: X,
                fill: a,
                Cb: b != l ? b : 1
            })
        }

        function yv(a, b, c) {
            return new vv({
                stroke: a,
                Aa: b,
                fill: c != l && c ? ke : X
            })
        }

        function zv(a, b) {
            return a === b ? j : a == l || b == l ? n : a.Y == b.Y && a.Ic == b.Ic && a.Ob == b.Ob && a.I == b.I && a.Yc == b.Yc && a.xe == b.xe && (a.q === b.q ? j : a.q == l || b.q == l ? n : a.q.Jd == b.q.Jd && a.q.Kd == b.q.Kd && a.q.Qa == b.q.Qa && a.q.Xa == b.q.Xa && a.q.ic == b.q.ic && a.q.xc == b.q.xc) && (a.$a === b.$a ? j : a.$a == l || b.$a == l ? n : a.$a.sf == b.$a.sf && a.$a.tf == b.$a.tf && a.$a.uf == b.$a.uf)
        };

        function Av(a) {
            var b = l,
                c = l;
            sr(a) ? b = a : c = a;
            this.iA = b;
            this.Ta = c;
            this.Ek = l
        }
        Av[M].ig = function(a) {
            this.Ek = a;
            this.Sh() && hv(this.Ta, a)
        };
        Av[M].pn = function() {
            return this.Sh() ? iv(this.Ta) : this.Ek
        };
        Av[M].t = function() {
            this.Ta || (this.Ta = this.iA(), this.Ek === l || hv(this.Ta, this.Ek));
            return this.Ta
        };
        Av[M].Sh = function() {
            return !!this.Ta
        };

        function Bv() {
            this.Sa = []
        }
        Y = Bv[M];
        Y.zc = function(a) {
            this.Sa[x](a)
        };
        Y.move = function(a, b) {
            this.zc({
                type: Mm,
                data: {
                    x: a,
                    y: b
                }
            })
        };
        Y.H = function(a, b) {
            this.zc({
                type: hm,
                data: {
                    x: a,
                    y: b
                }
            })
        };
        Y.Pj = function(a, b, c, d, e, f) {
            this.zc({
                type: rj,
                data: {
                    Qa: a,
                    Xa: b,
                    ic: c,
                    xc: d,
                    x: e,
                    y: f
                }
            })
        };
        Y.yb = function(a, b, c, d, e, f, g) {
            this.zc({
                type: vh,
                data: {
                    fn: a,
                    gn: b,
                    hn: c,
                    jn: d,
                    Gr: e,
                    kn: f,
                    Hr: g
                }
            })
        };
        Y.zm = function(a, b) {
            if (0 != a[L])
                if (0 == this.Sa[L] ? this[xb](a[0].x, a[0].y) : this.H(a[0].x, a[0].y), b)
                    for (var c = 1; c < a[L]; ++c) this.Pj(b[c - 1][1].x, b[c - 1][1].y, b[c][0].x, b[c][0].y, a[c].x, a[c].y);
                else
                    for (c = 1; c < a[L]; ++c) this.H(a[c].x, a[c].y)
        };
        Y.close = function() {
            this.zc({
                type: Yi,
                data: l
            })
        };

        function Cv(a, b) {
            var c = new Bv;
            0 < a[L] && (c.zm(a), b || c[Kc]());
            return c
        };

        function Dv(a, b, c) {
            switch (c) {
                case gp:
                    c = a;
                    a += b;
                    break;
                case Uj:
                    c = a - b;
                    break;
                case Ci:
                    c = a - b / 2;
                    a += b / 2;
                    break;
                default:
                    c = a = NaN
            }
            return {
                start: c,
                end: a
            }
        }

        function Ev(a, b, c) {
            switch (c) {
                case gp:
                    return a;
                case Uj:
                    return b;
                case Ci:
                    return ms(a, b)
            }
        };

        function Fv(a, b) {
            this.Zc = a;
            this.Sr = b;
            this.Gf = et(a);
            this.mn = this.Gf.mb;
            this.Um = l;
            this.ln = [];
            this.wc = new nu;
            var c = Z(function(a, b) {
                    return this.zs(a, b)
                }, this),
                d = tr(c),
                e = function(a, b) {
                    var c = [a, b[0]];
                    rs(b[1], function(a, b) {
                        c[x](a);
                        c[x](b)
                    });
                    return c[pd](Pg)
                } || yu;
            this.np = function() {
                var a = this || fr,
                    a = a.closure_memoize_cache_ || (a.closure_memoize_cache_ = {}),
                    b = e(d, arguments);
                return a[Jc](b) ? a[b] : a[b] = c[gd](this, arguments)
            }
        }
        Ar(Fv, Br);

        function Gv() {
            fr.__googleVisualizationAbstractRendererElementsCount__ = fr.__googleVisualizationAbstractRendererElementsCount__ || 0;
            var a = Qg + fr.__googleVisualizationAbstractRendererElementsCount__[kc]();
            fr.__googleVisualizationAbstractRendererElementsCount__++;
            return a
        }
        Y = Fv[M];
        pa(Y, 0);
        $a(Y, 0);
        Y.Lo = function(a, b) {
            var c = this.vt(a, b);
            c.ig(Rg);
            return this.Um = c
        };
        Ea(Y, function() {
            this.wi();
            this.wc = new nu
        });
        Y.wi = function() {
            this.Um = l;
            Dr(this.wc);
            Pr(this.ln, function(a) {
                Dr(a)
            });
            var a = this.ln;
            if (!mr(a))
                for (var b = a[L] - 1; 0 <= b; b--) delete a[b];
            Ka(a, 0);
            this.ns(this.Zc)
        };
        Y.lb = function() {
            Fv.lc.lb[P](this);
            this.wi()
        };
        Y.getContainer = function() {
            return this.Zc
        };
        Y.ck = function(a) {
            var b = Yt(a[Pc]);
            return Nt(a, b)
        };
        Y.ig = function(a, b) {
            a && (a[Bc] == Av ? a.ig(b) : hv(a, b))
        };
        Y.pn = function(a) {
            return iv(a)
        };
        Y.vn = function(a, b, c) {
            a[Bc] == Av && (a = a.t());
            this.wc.Df(a, b, c)
        };
        Y.zv = function(a, b, c) {
            var a = new Tu(a),
                d = this.Gf.kk(Lj),
                b = b[zc](td);
            d[v](this.Gf[sb](b[0]));
            for (var e = 1; e < b[L]; ++e) d[v](this.Gf.kk(ii)), d[v](this.Gf[sb](b[e]));
            Bt(d, c);
            a.t()[v](d);
            a.Iz(100);
            a.Hz(100);
            this.ln[x](a);
            return a
        };
        Y.appendChild = function(a, b) {
            if (b) {
                var c;
                if (b[Bc] == Av) {
                    if (!b.Sh()) return;
                    c = b.t()
                } else c = b;
                a.t()[v](c)
            }
        };
        Y.replaceChild = function(a, b, c) {
            a.t().replaceChild(b, c);
            ku(c)
        };
        Y.Dg = function(a) {
            a.Sh() && this.ns(a.t())
        };
        Y.ns = function(a) {
            this.Gf.Dg(a)
        };
        Y.Ur = function(a) {
            this.Gf.removeNode(a);
            ku(a)
        };
        Y.aa = function(a) {
            var a = a != l ? a : n,
                b = new Av(Z(this.Ns, this));
            a || b.t();
            return b
        };
        Y.xg = function(a, b) {
            var c = this.xB(a);
            return this.Et(c, b)
        };
        Y.Tl = function(a, b, c, d, e) {
            a = this.pj(a, b, c, d);
            this[v](e, a);
            return a
        };
        Y.So = function(a, b, c, d, e, f) {
            a = this.It(a, b, c, d, e);
            this[v](f, a);
            return a
        };
        Y.Ga = function(a, b, c, d, e, f) {
            a = this.df(a, b, c, d, e);
            this[v](f, a);
            return a
        };
        Y.ja = function(a, b, c) {
            a = this.xg(a, b);
            this[v](c, a);
            return a
        };
        Y.Yg = function(a, b, c, d, e, f, g, i) {
            a = this.Jt(a, b, c, d, e, f, g);
            this[v](i, a);
            return a
        };
        Y.Bw = function(a, b, c, d, e, f, g, i, k) {
            a = this.Ik(a, b, c, d, e, f, g, i);
            this[v](k, a);
            return a
        };
        Y.Av = function(a, b, c, d, e, f, g, i, k) {
            a = this.Kk(a, b, c, d, e, f, g, i);
            this[v](k, a);
            return a
        };
        Y.Py = function(a, b) {
            return this.np(a, b)[y]
        };
        Y.yA = function(a, b) {
            switch (b[I]) {
                case Mm:
                    var c = b[C];
                    this.Zr(a, c.x, c.y);
                    break;
                case hm:
                    c = b[C];
                    this.Yr(a, c.x, c.y);
                    break;
                case rj:
                    c = b[C];
                    this.Xr(a, c.Qa, c.Xa, c.ic, c.xc, c.x, c.y);
                    break;
                case vh:
                    c = b[C];
                    this.Vr(a, c.fn, c.gn, c.hn, c.jn, c.Gr, c.kn, c.Hr);
                    break;
                case Yi:
                    this.Wr(a)
            }
        };
        Y.xB = function(a) {
            for (var b = [], c = 0; c < a.Sa[L]; c++) this.yA(b, a.Sa[c]);
            return b
        };
        Y.getBoundingBox = function(a) {
            var b = Yt(a),
                b = Nt(a, b),
                a = Rt(a);
            return new xt(b.y, b.x + a[y], b.y + a[S], b.x)
        };

        function Hv(a, b) {
            Fv[P](this, a, b);
            this.Ig = l;
            this.sk = {}
        }
        Ar(Hv, Fv);
        Y = Hv[M];
        Y.vt = function(a, b) {
            pa(this, a);
            $a(this, b);
            var c = this.kb(wp);
            c[H](Uq, a);
            c[H](dl, b);
            c[O].overflow = fl;
            this.Zc[v](c);
            this.Ig = this.kb(Hj);
            this.Ig[H](nl, Hj);
            this.sk = {};
            c[v](this.Ig);
            return new Av(c)
        };
        Y.Rz = function() {
            return this.Zc.innerHTML
        };
        ra(Y, function(a) {
            return s[B](100 * a) / 100
        });
        Y.pj = function(a, b, c, d) {
            var e = this.kb(Si);
            e[H](tj, a);
            e[H](uj, b);
            e[H](Ln, c);
            this.bd(e, d);
            return e
        };
        Y.It = function(a, b, c, d, e) {
            var f = this.kb(Sj);
            f[H](tj, a);
            f[H](uj, b);
            f[H](ko, c);
            f[H](lo, d);
            this.bd(f, e);
            return f
        };
        Y.df = function(a, b, c, d, e) {
            var f = this.kb(Pn);
            f[H](Wq, a);
            f[H](Zq, b);
            f[H](Uq, c);
            f[H](dl, d);
            this.bd(f, e);
            return f
        };
        Y.Et = function(a, b) {
            var c = this.kb(ln);
            c[H](vj, a[pd](U));
            this.bd(c, b);
            return c
        };
        Y.Jt = function(a, b, c, d, e, f, g) {
            return this.Kk(a, b, c, d, 0, e, f, g)
        };
        Y.Ik = function(a, b, c, d, e, f, g, i) {
            var k = Ev(b, d, f),
                m = Ev(c, e, f);
            return this.Kk(a, k, m, (new qu(b, c, d, e)).vB(), js(180 * s[Kb](e - c, d - b) / s.PI, 360), f, g, i)
        };
        Y.Kk = function(a, b, c, d, e, f, g, i) {
            var k = new vv({
                fill: i[zb]
            });
            if (i[zb] && i[zb] != X && i.fb && i.fb != X) {
                var m = new vv({
                        fill: i[zb],
                        stroke: i.fb,
                        Aa: 3
                    }),
                    p = this.aa();
                this.gi(a, b, c, d, e, f, g, i, m, p);
                this.gi(a, b, c, d, e, f, g, i, k, p);
                return p.t()
            }
            return this.fi(a, b, c, d, e, f, g, i, k)
        };
        Y.fi = function(a, b, c, d, e, f, g, i, k) {
            d = this.kb(Ap);
            g = Dv(0, i[N], g);
            g = Ev(g[Q], g.end, Uj);
            g -= 0.15 * i[N];
            g = new ru(0, g);
            g[Ic](ks(e));
            c = new ru(b, c);
            c.add(g);
            b = c.x;
            c = c.y;
            d[v](this.mn[sb](a));
            switch (f) {
                case gp:
                    d[H](Bp, gp);
                    break;
                case Ci:
                    d[H](Bp, ym);
                    break;
                case Uj:
                    d[H](Bp, Uj)
            }
            d[H](Wq, b);
            d[H](Zq, c);
            d[H](fk, i.eb);
            d[H](hk, i[N] || 0);
            i[lc] && d[H](jk, Sh);
            i.hf && d[H](ik, Dl);
            i.rm && d[H](Cp, tq);
            0 != e && d[H](lq, go + e + vd + b + vd + c + we);
            this.bd(d, k);
            return d
        };
        Y.gi = function(a, b, c, d, e, f, g, i, k, m) {
            a = this.fi(a, b, c, d, e, f, g, i, k);
            this[v](m, a);
            return a
        };
        Y.Ns = function() {
            return this.kb(wk)
        };
        Y.Ip = function(a, b, c) {
            var d = Gv(),
                e = this.kb(Wi);
            c ? (c = this.kb(Sj), c[H](tj, b[F] + b[y] / 2), c[H](uj, b.top + b[S] / 2), c[H](ko, b[y] / 2), c[H](lo, b[S] / 2)) : (c = this.kb(Pn), c[H](Wq, b[F]), c[H](Zq, b.top), c[H](Uq, b[y]), c[H](dl, b[S]));
            e[v](c);
            e[H](nl, d);
            this.Ig[v](e);
            a = a.t();
            a[H](Vi, uq + d + we);
            return a
        };
        Y.Zr = function(a, b, c) {
            a[x](ng + this[B](b) + xe + this[B](c))
        };
        Y.Yr = function(a, b, c) {
            a[x](kg + this[B](b) + xe + this[B](c))
        };
        Y.Xr = function(a, b, c, d, e, f, g) {
            a[x](Uf + this[B](b) + xe + this[B](c) + xe + this[B](d) + xe + this[B](e) + xe + this[B](f) + xe + this[B](g))
        };
        Y.Wr = function(a) {
            a[x](Ig)
        };
        Y.Vr = function(a, b, c, d, e, f, g, i) {
            var f = js(f, 360),
                g = js(g, 360),
                k = d * s.cos(ks(g - 90)),
                m = e * s.sin(ks(g - 90)),
                f = i ? g - f : f - g;
            0 > f && (f += 360);
            a[x](Pf + d + xe + e + ze + (180 < f ? 1 : 0) + xe + (i ? 1 : 0) + xe + (b + k) + xe + (c + m))
        };
        Y.Ze = function(a, b, c) {
            a[H](lq, mq + b + ye + c + we)
        };
        Y.tn = function(a, b) {
            a[H](Uq, b)
        };
        Y.qn = function(a, b) {
            a[H](dl, b)
        };
        Y.rn = function(a, b) {
            a[H](Wq, b)
        };
        Y.sn = function(a, b) {
            a[H](Zq, b)
        };
        Y.Gc = function(a, b, c) {
            a[H](tp, c);
            b && a[H](pp, b)
        };
        Y.zs = function(a, b) {
            var c = this.Sr;
            ta(c[Nb], a);
            var d = c[O];
            sa(d, b.eb);
            Ra(d, b[N] + Kn);
            d.fontWeight = b[lc] ? Sh : U;
            d.fontStyle = b.hf ? Dl : U;
            Za(d, Ph);
            var e = c[uc],
                c = c[Zc];
            Za(d, X);
            return new qs(e, c)
        };
        Y.kb = function(a) {
            return this.mn.createElementNS(ml, a)
        };
        Y.bd = function(a, b) {
            b.od() ? (a[H](pp, b.Ob), a[H](tp, b.I), b.Oq() ? a.removeAttribute(sp) : a[H](sp, b.Yc), b.Pq() ? a[H](qp, Iv(b.xe, b.I)) : a.removeAttribute(qp)) : (a[H](pp, X), a[H](tp, 0));
            b.fg() ? a.removeAttribute(Zj) : a[H](Zj, b.Ic);
            var c = b.q;
            if (c) c = this.cx(c), a[H](Yj, uq + c + we);
            else if (b.$a != l) c = this.dx(b.$a), a[H](Yj, uq + c + we);
            else a[H](Yj, b.Y)
        };
        Y.cx = function(a) {
            var b = Gv(),
                c = this.kb(lm),
                d = a.Qa,
                e = a.ic,
                f = a.Xa,
                g = a.xc;
            typeof d == op && d[qb](d[L] - 1) == oe && (d = s[B](la(d, 10) * this[y] / 100));
            typeof e == op && e[qb](e[L] - 1) == oe && (e = s[B](la(e, 10) * this[y] / 100));
            typeof f == op && f[qb](f[L] - 1) == oe && (f = s[B](la(f, 10) * this[S] / 100));
            typeof g == op && g[qb](g[L] - 1) == oe && (g = s[B](la(g, 10) * this[S] / 100));
            c[H](nl, b);
            c[H](Xq, d);
            c[H]($q, f);
            c[H](Yq, e);
            c[H](ar, g);
            c[H](Jk, vq);
            d = this.kb(mp);
            d[H](Xm, af);
            d[H](up, np + a.Jd);
            c[v](d);
            d = this.kb(mp);
            d[H](Xm, hf);
            d[H](up, np + a.Kd);
            c[v](d);
            this.Ig[v](c);
            return b
        };
        Y.dx = function(a) {
            var b = a.uf + Pg + a.tf + Pg + a.sf;
            if (!(b in this.sk)) {
                var c = l;
                switch (a.uf) {
                    case Jn:
                        c = this.$z(a)
                }
                a = Gv();
                c[H](nl, a);
                this.Ig[v](c);
                this.sk[b] = a
            }
            return this.sk[b]
        };
        Y.$z = function(a) {
            var b = this.kb(nn);
            b[H](on, vq);
            b[H](Wq, Ye);
            b[H](Zq, Ye);
            b[H](Uq, mf);
            b[H](dl, mf);
            b[H](Nq, $e);
            var c = this.kb(Pn);
            c[H](Wq, Ye);
            c[H](Zq, Ye);
            c[H](Uq, mf);
            c[H](dl, mf);
            c[H](Yj, a.sf);
            b[v](c);
            c = this.kb(wk);
            c[H](pp, a.tf);
            c[H](rp, ep);
            a = this.kb(hm);
            a[H](Xq, lf);
            a[H]($q, Ye);
            a[H](Yq, mf);
            a[H](ar, lf);
            a[H](tp, lf);
            c[v](a);
            a = this.kb(hm);
            a[H](Xq, Ye);
            a[H]($q, lf);
            a[H](Yq, lf);
            a[H](ar, mf);
            a[H](tp, lf);
            c[v](a);
            b[v](c);
            return b
        };

        function Iv(a, b) {
            switch (a) {
                case $o:
                    return Ye;
                case wj:
                    return na(4 * b) + xe + na(b);
                default:
                    return Iv($o, b)
            }
        };

        function Jv(a, b) {
            if (a == l && b == l) return a === b;
            if (a === b) return j;
            var c = ir(a),
                d = ir(b);
            if (c != d) return n;
            var d = or(a),
                e = or(b);
            if (d != e) return n;
            switch (c) {
                case Wm:
                    if (d && e) return 0 == a[dc]() - b[dc]();
                    for (var f in a)
                        if (a[Jc](f) && (!b[Jc](f) || !Jv(a[f], b[f]))) return n;
                    for (var g in b)
                        if (b[Jc](g) && !a[Jc](g)) return n;
                    return j;
                case zh:
                    if (a[L] != b[L]) return n;
                    for (c = 0; c < a[L]; ++c)
                        if (!Jv(a[c], b[c])) return n;
                    return j;
                case W:
                    return j;
                case op:
                case Um:
                case Th:
                    return n;
                default:
                    h(u("Error while comparing " + a + " and " + b + ": unexpected type of obj1 " +
                        c))
            }
        }

        function Kv(a) {
            if (or(a)) {
                var b = new Date;
                b[cd](a.valueOf());
                return b
            }
            var c = ir(a);
            if (c == Wm || c == zh) {
                if (a[Oc]) return a[Oc]();
                c = c == zh ? [] : {};
                for (b in a) c[b] = Kv(a[b]);
                return c
            }
            return a
        };

        function Lv(a) {
            this.Ie = a
        }

        function Mv(a, b, c) {
            a: {
                for (var b = b[zc](Ge), a = a || fr, d = 0; d < b[L]; d++) {
                    var e = b[d];
                    if (a[e] != l) a = a[e];
                    else {
                        b = l;
                        break a
                    }
                }
                b = a
            }
            return b != l && sr(c) ? c(b) : b
        }
        Y = Lv[M];
        Y.O = function(a, b, c) {
            for (var d = l, e = 0; e < this.Ie[L]; e++) {
                a: {
                    var d = this.Ie[e],
                        f = a,
                        g = c;
                    if (qr(f)) d = Mv(d, f, g);
                    else {
                        for (var i = 0; i < f[L]; ++i) {
                            var k = Mv(d, f[i], g);
                            if (k != l) {
                                d = k;
                                break a
                            }
                        }
                        d = l
                    }
                }
                if (d != l) return d
            }
            d = b;
            return jr(d) ? d : l
        };
        Y.Vh = function(a, b, c) {
            for (var b = b != l ? xs(b) : {}, d = this.Ie[L] - 1; 0 <= d; d--) {
                var e = b,
                    f = this.Ie[d],
                    g = a,
                    i = c;
                qr(g) && (g = [g]);
                for (var k = g[L] - 1; 0 <= k; --k) {
                    var m = Mv(f, g[k], i) || {};
                    As(e, m)
                }
            }
            return b
        };

        function Nv(a) {
            if (a == l) return l;
            if (typeof a == Th) return a;
            a = na(a);
            return a == df || a[sd]() == pq ? j : a == Ye || a[sd]() == Xj ? n : l
        }
        Y.$ = function(a, b) {
            var c = this.or(a);
            if (c != l) return c;
            jr(b) || (b = n);
            return b
        };
        Y.or = function(a) {
            return this.O(a, l, Nv)
        };

        function Ov(a) {
            if (a == l) return l;
            if (typeof a == Um) return a;
            a = Lr(na(a));
            return ga(a) ? l : a
        }
        Y.Ke = function(a, b) {
            var c = this.Hd(a);
            if (c != l) return c;
            jr(b) || (b = 0);
            return b
        };
        Y.Hd = function(a) {
            return this.O(a, l, Ov)
        };

        function Pv(a) {
            a = Ov(a);
            return a != l && 0 <= a ? a : l
        }
        Y.R = function(a, b) {
            var c = this.Uh(a);
            if (c != l) return c;
            jr(b) || (b = 0);
            return b
        };
        Y.Uh = function(a) {
            return this.O(a, l, Pv)
        };

        function Qv(a) {
            a = Pv(a);
            return a != l ? is(a, 0, 1) : l
        }
        Y.Uf = function(a, b) {
            var c = this.RB(a);
            if (c != l) return c;
            jr(b) || (b = 0);
            return b
        };
        Y.RB = function(a) {
            return this.O(a, l, Qv)
        };

        function Rv(a) {
            return a == l ? l : na(a)
        }
        Y.ud = function(a, b) {
            jr(b) || (b = U);
            return this.O(a, b, Rv)
        };
        Y.Xl = function(a) {
            return this.O(a, l, Rv)
        };

        function Sv(a, b) {
            var c = Rv(a);
            return !c ? l : 0 <= Or(b || [], c) ? c : jv(c)
        }
        Y.fd = function(a, b) {
            return this.O(a, b, Sv)
        };
        Y.Tk = function(a, b, c) {
            return this.O(a, c, function(a) {
                return Sv(a, b)
            })
        };

        function Tv(a, b) {
            var c = Rv(b);
            return ws(a, c) ? c : l
        }
        Y.U = function(a, b, c) {
            return this.O(a, c, Z(Tv, l, b))
        };
        Y.gh = function(a, b) {
            return this.O(a, l, Z(Tv, l, b))
        };
        Y.SB = function(a) {
            a = this.O(a, l);
            if (qr(a)) {
                var b = a[zc](vf);
                1 == b[L] && (b = a[zc](xe));
                if (3 == b[L]) {
                    var c = Lr(b[0]),
                        d = Lr(b[1]),
                        b = Lr(b[2]);
                    if (0 <= b && 0 <= d && 0 <= c) return [c, d, b]
                }
            }
            return !mr(a) || 3 != a[L] && 4 != a[L] ? l : a
        };
        Y.Ne = function(a, b) {
            var c = b ? b.getProperties() : l,
                c = this.Vh(a, c, function(a) {
                    pr(a) || (a = {
                        fill: a
                    });
                    var b = {},
                        c = Sv(a.fill);
                    c != l && (b.fill = c);
                    c = Qv(a.fillOpacity);
                    c != l && (b.Cb = c);
                    c = Sv(a.stroke);
                    c != l && (b.stroke = c);
                    c = Pv(a.strokeWidth);
                    c != l && (b.Aa = c);
                    c = Qv(a.strokeOpacity);
                    c != l && (b.jd = c);
                    if ((a = a.gradient) && a.color1 != l && a.color2 != l && a.x1 != l && a.y1 != l && a.x2 != l && a.y2 != l) c = {}, c.Jd = Sv(a.color1), c.Kd = Sv(a.color2), c.Qa = a.x1, c.Xa = a.y1, c.ic = a.x2, c.xc = a.y2, b.q = c;
                    return b
                }),
                c = new vv(c);
            c.lh() || (c.Bm(wv.Y), c.Fl(wv.Ic));
            c.od() ||
                (c.Gc(wv.Ob), c.Zg(wv.Yc));
            return c
        };

        function Uv(a, b) {
            var c = {},
                d = Sv(a[zb], b);
            d != l && xa(c, d);
            d = Sv(a.auraColor, b);
            d != l && (c.fb = d);
            if (d = Rv(a.fontName)) c.eb = d;
            (d = Pv(a[N])) && Ra(c, d);
            d = Nv(a[lc]);
            d != l && (c.bold = d);
            d = Nv(a.italic);
            d != l && (c.hf = d);
            d = Nv(a.underline);
            d != l && (c.rm = d);
            return c
        }
        Y.sc = function(a, b) {
            return this.Vh(a, b, function(a) {
                return Uv(a)
            })
        };
        Y.Po = function(a, b, c) {
            return this.Vh(a, c, function(a) {
                return Uv(a, b)
            })
        };

        function Vv(a, b) {
            var c = l,
                d = Ov(b);
            if (d != l) c = d;
            else if (d = Rv(b), d != l) {
                var e = d[L] - 1;
                0 <= e && d[yb](oe, e) == e && (c = d[L] - 1, e = d, 0 <= c && c < d[L] && (e = d[ic](0, c) + d[ic](c + 1, d[L] - c - 1)), c = a * Lr(e) / 100)
            }
            c != l && (c = is(c, 0, a));
            return c
        }
        Y.Mv = function(a, b, c) {
            a = this.Yh(a, b);
            if (a != l) return a;
            jr(c) || (c = 0);
            return c
        };
        Y.Yh = function(a, b) {
            return this.O(a, l, Z(Vv, l, b))
        };
        var Wv = {
                WC: "multiple",
                hD: Mo
            },
            Xv = {
                NONE: X,
                zC: dk,
                fD: qo,
                qk: ci
            };

        function Yv() {
            var a = gr(Gk);
            a != l || (a = ll);
            var b = gr(Hk);
            b != l || (b = ef);
            return a + Xe + b
        };

        function Zv(a, b) {
            Fv[P](this, a, b)
        }
        Ar(Zv, Fv);
        Y = Zv[M];
        Y.vt = function(a, b) {
            pa(this, a);
            $a(this, b);
            var c = this.Ub(Lj);
            this.Ce(c, -5E4, -5E4, this[y] + 1E5, this[S] + 1E5);
            this.Zc[v](c);
            var d = this.aa(),
                e = d.t();
            e.coordorigin = Ze;
            e.coordsize = a + vd + b;
            e[O].top = 5E4;
            Aa(e[O], 5E4);
            c[v](e);
            return d
        };
        ra(Y, function(a) {
            return s[B](a)
        });
        Y.pj = function(a, b, c, d) {
            var e = this.Ub(Aq),
                f = 2 * c;
            this.Ce(e, a - c, b - c, f, f);
            this.bd(e, d, n);
            return e
        };
        Y.It = function(a, b, c, d, e) {
            var f = this.Ub(Aq);
            this.Ce(f, a - c, b - d, 2 * c, 2 * d);
            this.bd(f, e, n);
            return f
        };
        Y.df = function(a, b, c, d, e) {
            var f = this.Ub(Cq),
                g = e.fg() && 1 <= d && 1 <= c && e.q == l;
            this.bd(f, e, g);
            if (e.od() || g) c = s.max(c - 1, 0), d = s.max(d - 1, 0);
            this.Ce(f, a, b, c, d);
            return f
        };
        Y.Et = function(a, b) {
            for (var c = this.Ub(Dq), d = this.Ub(Bq); 0 < a[L] && 0 == Mr(a)[Uc](ng, 0);) a = cs(a, 0, a[L] - 1);
            d[H](wq, a[pd](U));
            this.Ce(c, 0, 0, this[y], this[S]);
            c[v](d);
            this.bd(c, b, n);
            return c
        };
        Y.Jt = function(a, b, c, d, e, f, g) {
            b = Dv(b, d, e);
            c = Dv(c, g[N], f);
            f = Ci;
            c = Ev(c[Q], c.end, f);
            return this.Ik(a, b[Q], c, b.end, c, e, f, g)
        };
        Y.Ik = function(a, b, c, d, e, f, g, i) {
            var k = new vv({
                fill: i[zb]
            });
            if (i[zb] && i[zb] != X && i.fb && i.fb != X) {
                var m = new vv({
                        fill: i[zb],
                        stroke: i.fb,
                        Aa: 2
                    }),
                    p = this.aa();
                this.gi(a, b, c, d, e, f, g, i, m, p);
                this.gi(a, b, c, d, e, f, g, i, k, p);
                return p.t()
            }
            return this.fi(a, b, c, d, e, f, g, i, k)
        };
        Y.Kk = function(a, b, c, d, e, f, g, i) {
            var e = ks(e),
                d = Dv(b, d, f),
                b = new ru(b, c),
                k = new ru(d[Q], c),
                k = k[Oc]().Bt(b)[Ic](e).add(b),
                c = new ru(d.end, c),
                c = c[Oc]().Bt(b)[Ic](e).add(b);
            return this.Ik(a, k.x, k.y, c.x, c.y, f, g, i)
        };
        Y.fi = function(a, b, c, d, e, f, g, i, k) {
            var m = this.Ub(Dq);
            this.Ce(m, 0, 0, this[y], this[S]);
            g != Ci && (g = Dv(0, i[N], g), g = Ev(g[Q], g.end, Ci), g = new ru(0, g), g[Ic](ks(js(180 * s[Kb](e - c, d - b) / s.PI, 360))), c = new ru(b, c), e = new ru(d, e), c.add(g), e.add(g), b = c.x, c = c.y, d = e.x, e = e.y);
            b = s[B](b);
            c = s[B](c);
            d = s[B](d);
            e = s[B](e);
            g = this.Ub(Bq);
            g[H](wq, ng + b + xe + c + kg + d + xe + e + bg);
            g[H](Jp, pq);
            b = this.Ub(Fq);
            b[H](Ym, pq);
            d = b[O];
            Ra(d, i[N]);
            sa(d, i.eb);
            switch (f) {
                case gp:
                    d[H](xq, Jl);
                    break;
                case Ci:
                    d[H](xq, Ci);
                    break;
                case Uj:
                    d[H](xq, bo)
            }
            i[lc] && (d.fontWeight =
                Sh);
            i.hf && (d.fontStyle = Dl);
            b[H](op, a);
            m[v](g);
            m[v](b);
            this.bd(m, k, n);
            return m
        };
        Y.gi = function(a, b, c, d, e, f, g, i, k, m) {
            a = this.fi(a, b, c, d, e, f, g, i, k);
            this[v](m, a);
            return a
        };
        Y.Ns = function() {
            var a = this.Ub(zq);
            this.Ce(a, 0, 0, this[y], this[S]);
            return a
        };
        Y.Ip = function(a, b) {
            var c = this.Ub(Lj),
                d = [this.Yb(5E4 + b.top), this.Yb(5E4 + b[F] + b[y]), this.Yb(5E4 + b.top + b[S]), this.Yb(5E4 + b[F])];
            c[O].clip = Qn + d[pd](ye) + we;
            this.Ce(c, 0, 0, this[y] + 1E5, this[S] + 1E5);
            a.t();
            d = new Av(c);
            this[v](d, a);
            this.Ga(1, 1, 1, 1, new vv({
                fill: Tq
            }), d);
            return c
        };
        Y.Zr = function(a, b, c) {
            a[x](ng + s[B](b) + xe + s[B](c))
        };
        Y.Yr = function(a, b, c) {
            a[x](kg + s[B](b) + xe + s[B](c))
        };
        Y.Xr = function(a, b, c, d, e, f, g) {
            a[x](Uf + s[B](b) + xe + s[B](c) + xe + s[B](d) + xe + s[B](e) + xe + s[B](f) + xe + s[B](g))
        };
        Y.Wr = function(a) {
            a[x](Gg)
        };
        Y.Vr = function(a, b, c, d, e, f, g, i) {
            var f = js(f, 360),
                g = js(g, 360),
                k = s[B](d * s.cos(ks(f - 90))),
                m = s[B](e * s.sin(ks(f - 90))),
                p = s[B](d * s.cos(ks(g - 90))),
                q = s[B](e * s.sin(ks(g - 90))),
                d = s[B](d),
                e = s[B](e),
                b = s[B](b),
                c = s[B](c);
            if (!(k === p && m === q) || !(i && 180 > js(g - f, 360) || !i && 180 > js(f - g, 360))) a[x]((i ? Dg : Qf) + (b - d) + xe + (c - e) + xe + (b + d) + xe + (c + e) + xe + (b + k) + xe + (c + m) + xe + (b + p) + xe + (c + q))
        };
        Y.Ze = function(a, b, c) {
            a[O].top = this.Yb(c);
            Aa(a[O], this.Yb(b))
        };
        Y.tn = function(a, b) {
            pa(a[O], this.Yb(b))
        };
        Y.qn = function(a, b) {
            $a(a[O], this.Yb(b))
        };
        Y.rn = function(a, b) {
            Aa(a[O], this.Yb(b))
        };
        Y.sn = function(a, b) {
            a[O].top = this.Yb(b)
        };
        Y.Gc = function(a, b, c) {
            0 == c ? wa(a, n) : (wa(a, j), b && (a.strokecolor = b), a.strokeweight = c)
        };
        Y.zs = function(a, b) {
            var c = this.Sr;
            ta(c[Nb], a);
            var d = c[O];
            sa(d, b.eb);
            Ra(d, this.Yb(b[N] || 0));
            d.fontWeight = b[lc] ? Sh : U;
            d.fontStyle = b.hf ? Dl : U;
            Za(d, Ph);
            var e = c[uc],
                c = c[Zc];
            Za(d, X);
            b[lc] && (e *= 1.1);
            b.hf && (e *= 0.9);
            return new qs(e, c)
        };
        Y.Yb = function(a) {
            return s[B](a) + Kn
        };
        Y.Ub = function(a) {
            return this.mn[Ib](a)
        };
        Y.bd = function(a, b, c) {
            for (var d = a.children, e = 0; e < d[L]; e++)(a.children[e][hd] == Yj || a.children[e][hd] == pp) && a[Nc](d[e]);
            c = c != l ? c : j;
            if (b.od()) {
                if (wa(a, j), a.strokeweight = b.I, a.strokecolor = b.Ob, c = !b.Oq(), d = b.Pq(), c || d) e = this.Ub(Eq), c && (e.opacity = na(s[B](100 * b.Yc)) + oe), d && (e.dashstyle = $v(b.xe)), a[v](e)
            } else c && b.fg() ? (wa(a, j), a.strokeweight = 1, a.strokecolor = b.Y) : wa(a, n);
            jr(a.filled) && (a.filled = j);
            c = b.q;
            if (b.q != l) {
                b = this.Ub(yq);
                b[H](aj, c.Jd);
                b[H](bj, c.Kd);
                var d = c.Qa,
                    e = c.Xa,
                    f = c.ic,
                    c = c.xc;
                typeof d == op && (d = la(d,
                    10));
                typeof e == op && (e = la(e, 10));
                typeof f == op && (f = la(f, 10));
                typeof c == op && (c = la(c, 10));
                c = js(180 * s[Kb](c - e, f - d) / s.PI, 360);
                c = js(270 - c, 360);
                b[H](ah, c);
                b[H](qq, Ik);
                a[v](b)
            } else b.$a ? (b = this.rw(b.$a), a[v](b)) : b.Y == X ? a.filled = n : b.fg() ? a.fillcolor = b.Y : (c = this.Ub(yq), c.opacity = na(s[B](100 * b.Ic)) + oe, xa(c, b.Y), a[v](c))
        };
        Y.rw = function(a) {
            var b = this.Ub(yq);
            b[H](qq, nn);
            b[H](aj, a.tf);
            b[H](bj, a.sf);
            a = Yv() + Ve + a.uf + Le;
            b[H](fp, a);
            return b
        };
        Y.Ce = function(a, b, c, d, e) {
            a = a[O];
            Ma(a, Sg);
            Aa(a, this.Yb(b));
            a.top = this.Yb(c);
            pa(a, this.Yb(d));
            $a(a, this.Yb(e))
        };

        function $v(a) {
            switch (a) {
                case $o:
                    return $o;
                case wj:
                    return Go;
                default:
                    return $v($o)
            }
        };

        function aw(a, b, c, d) {
            (Ls ? 0 <= Kr(Xs, of ) : Ms ? 0 <= Kr(Xs, ff) : Ks ? 0 <= Kr(Xs, tf) : Ns && 0 <= Kr(Xs, nf)) || h(u("Graphics is not supported"));
            for (var e = s[D](1E5 * s.random()); ca.frames[ag + e];) e++;
            this.cn = ag + e;
            (a = this.na = a) && (a.referencepoint = j);
            this.na.innerHTML = U;
            this.$d = b;
            this.zf = et(this.na);
            this.ii = this.cd = l;
            this.ji = n;
            this.xn = [];
            this.nk = l;
            this.Dy = (b = !Ls ? n : ea[bd] != l ? 9 > ea[bd] : !Zs(sf)) ? Zv : Hv;
            (this.jk = b || d) && this.Oy(b);
            this.fs(c)
        }
        Ar(aw, Br);
        Y = aw[M];
        Y.fs = function(a) {
            var b = Z(this.yB, this),
                c = Z(this.AB, this);
            bw(b, c, a)
        };
        Y.AB = function() {
            if (this.jk) {
                var a = this.Gz(),
                    b = this.cd = a[ob](Yn);
                b && (b.referencepoint = j);
                this.Cs(a[Lc])
            } else this.cd = this.zf[Ib](Lj), Bt(this.cd, Fn, Rn), Qt(this.cd, this.$d), this.cd.dir = rm, this.na[v](this.cd), this.Cs(this.na);
            this.ji = j
        };
        Y.Cs = function(a) {
            var b = et(a);
            this.ii = b[Ib](Lj);
            var c = this.ii[O];
            Za(c, X);
            Ma(c, Sg);
            c.top = this.$d[S] + 10 + Kn;
            Aa(c, this.$d[y] + 10 + Kn);
            c.whiteSpace = Sm;
            b[v](this.ii, b.mb[sb](vd));
            b[v](a, this.ii)
        };
        Y.cB = function() {
            var a = et(this.cd)[Ib](Lj);
            Bt(a, Fn, Sg);
            Ft(a, 0, 0);
            Qt(a, hf, hf);
            this.cd[v](a);
            a = new this.Dy(a, this.ii);
            this.Vm(a);
            this.xn[x](a)
        };
        Y.YA = function() {
            var a = this.zf[Ib](Lj);
            this.nk = new pu(a);
            this.zf[v](this.na, this.nk[id]())
        };
        Y.yB = function() {
            if (!this.jk) return j;
            var a = this.uB();
            return a && a._loaded
        };
        Y.kj = function(a) {
            if (!this.ji) return l;
            for (a = a != l ? a : 0; this.xn[L] <= a;) this.cB();
            return this.xn[a]
        };
        Y.wp = function() {
            if (!this.ji) return l;
            this.nk || this.YA();
            return this.nk
        };
        Y.bx = function(a, b) {
            bw(Z(function() {
                return this.cd != l
            }, this), a, b)
        };
        Y.update = function(a, b) {
            this.$d = a;
            if (this.jk) {
                var c = this.Pn();
                c && (pa(c, this.$d[y][kc]()), $a(c, this.$d[S][kc]()))
            } else this.ji && Qt(this.cd, this.$d);
            this.ji || this.fs(b)
        };
        Y.Gz = function() {
            var a = this.Pn();
            return a ? a[jd] || a[bc][xc] : l
        };
        Y.uB = function() {
            var a = this.Pn();
            return a ? a[bc] || (a[jd] || a[bc][xc])[Ub] || (a[jd] || a[bc][xc])[Xb] : l
        };
        Y.Pn = function() {
            return this.zf.t(this.cn)
        };
        Y.Oy = function(a) {
            var b = this.zf[Ib](ol);
            b.name = this.cn;
            b.id = this.cn;
            pa(b, this.$d[y][kc]());
            $a(b, this.$d[S][kc]());
            b.frameBorder = 0;
            b.scrolling = Rm;
            b.marginHeight = 0;
            b.marginWidth = 0;
            b.allowTransparency = pq;
            a || Da(b, pl);
            this.zf[v](this.na, b);
            b = b[jd] || b[bc][xc];
            b.open();
            var c = [];
            a ? (c[x](Jf), c[x](If), c[x](Mf)) : (c[x](Ff), c[x](Kf), c[x](Fd), c[x](Gd), c[x](If));
            c[x](Lf);
            c[x](Lq);
            c[x](vk);
            c[x](Bd);
            c[x](er);
            c[x](Ef);
            c[x](Cf);
            c[x](Gf);
            c[x](Dd);
            c[x](Nf);
            c[x](Hf);
            c[x](Bf);
            c[x](Df);
            b.write(c[pd](td));
            b[Kc]()
        };

        function bw(a, b, c, d) {
            if (a[P]()) b[P]();
            else {
                var e = d != l ? d : 10;
                ca[wc](c(function() {
                    bw(a, b, c, e)
                }), e)
            }
        }
        Y.lb = function() {
            aw.lc.lb[P](this);
            this.zf.Dg(this.na)
        };

        function cw(a) {
            return a * a * a
        }

        function dw(a) {
            return 1 - s.pow(1 - a, 3)
        }

        function ew(a) {
            return 3 * a * a - 2 * a * a * a
        };
        var fw = {
            LINEAR: km,
            DC: ql,
            XC: cn,
            EC: rl
        };

        function gw(a) {
            switch (a) {
                case km:
                    return function(a) {
                        return a
                    };
                case ql:
                    return cw;
                case cn:
                    return dw;
                case rl:
                    return ew
            }
        };

        function hw() {
            this.qc = {};
            this.pc = {};
            this.rc = {}
        }
        Y = hw[M];
        Ea(Y, function() {
            this.qc = {};
            this.pc = {};
            this.rc = {}
        });
        Sa(Y, function() {
            var a = new hw;
            a.qc = xs(this.qc);
            a.pc = xs(this.pc);
            a.rc = xs(this.rc);
            return a
        });
        Y.Yd = function(a) {
            return Jv(this.qc, a.qc) && Jv(this.pc, a.pc) && Jv(this.rc, a.rc)
        };
        Y.Lt = function(a) {
            var a = a == ho ? this.qc : this.pc,
                b = [],
                c;
            for (c in a) b[x](la(c, 10));
            return b
        };
        Y.xm = function() {
            return this.Lt(ho)
        };
        Y.uq = function() {
            return this.Lt(nj)
        };
        Y.jj = function() {
            var a = [],
                b;
            for (b in this.rc) {
                var c = b[zc](xe);
                a[x]({
                    row: la(c[0], 10),
                    column: la(c[1], 10)
                })
            }
            return a
        };
        Y.getSelection = function() {
            for (var a = [], b = this.xm(), c = this.uq(), d = this.jj(), e = 0; e < b[L]; e++) {
                var f = {};
                f.row = b[e];
                a[x](f)
            }
            for (e = 0; e < c[L]; e++) f = {}, f.column = c[e], a[x](f);
            for (e = 0; e < d[L]; e++) f = {}, f.row = d[e].row, f.column = d[e].column, a[x](f);
            return a
        };
        Y.Wz = function(a, b) {
            return a == ho ? this.ao(b[0]) : this.$n(b[0])
        };
        Y.ao = function(a) {
            return this.qc[na(a)] != l
        };
        Y.$n = function(a) {
            return this.pc[na(a)] != l
        };
        Y.ot = function(a, b) {
            return this.rc[na(a + xe + b)] != l
        };
        Y.jo = function(a, b) {
            if (this.Wz(a, b)) return n;
            a == ho ? this.qc[b[0]] = 1 : a == nj ? this.pc[b[0]] = 1 : this.rc[na(b[0] + xe + b[1])] = 1;
            return j
        };
        Y.addRow = function(a) {
            return this.jo(ho, [a])
        };
        Y.addColumn = function(a) {
            return this.jo(nj, [a])
        };
        Y.rB = function(a, b) {
            return this.jo(Bi, [a, b])
        };
        Y.ym = function(a, b) {
            var c = this.ao(a);
            b && this[Vb]();
            c ? this.removeRow(a) : this.addRow(a);
            return !c
        };
        Y.Gq = function(a, b) {
            var c = this.$n(a);
            b && this[Vb]();
            c ? this.removeColumn(a) : this.addColumn(a);
            return !c
        };
        Y.sq = function(a, b, c) {
            var d = this.ot(a, b);
            c && this[Vb]();
            d ? this.tB(a, b) : this.rB(a, b);
            return !d
        };
        Y.removeRow = function(a) {
            if (!this.ao(a)) return n;
            delete this.qc[a];
            return j
        };
        Y.removeColumn = function(a) {
            if (!this.$n(a)) return n;
            delete this.pc[a];
            return j
        };
        Y.tB = function(a, b) {
            if (!this.ot(a, b)) return n;
            delete this.rc[na(a + xe + b)];
            return j
        };
        Y.setSelection = function(a) {
            var b = {},
                c = {},
                d = {};
            a || (a = []);
            for (var e = 0; e < a[L]; e++) {
                var f = a[e];
                f.row != l && f.column != l ? d[na(f.row + xe + f.column)] = 1 : f.row != l ? b[f.row] = 1 : f.column != l && (c[f.column] = 1)
            }
            var g = this.Tg(b, this.qc),
                i = this.Tg(c, this.pc),
                k = this.Tg(d, this.rc),
                a = this.Tg(this.qc, b),
                e = this.Tg(this.pc, c),
                f = this.Tg(this.rc, d);
            this.qc = b;
            this.pc = c;
            this.rc = d;
            b = new hw;
            b.qc = g;
            b.pc = i;
            b.rc = k;
            c = new hw;
            c.qc = a;
            c.pc = e;
            c.rc = f;
            return new iw(b, c)
        };
        Y.Tg = function(a, b) {
            var c = {},
                d;
            for (d in a) b[d] || (c[d] = 1);
            return c
        };

        function iw() {};

        function jw(a) {
            this.Ie = gs({}, a);
            this.fo = gs({}, a)
        }
        jw[M].vb = function(a, b) {
            var c = this.Ie[L];
            this.Ie[a] = b;
            for (var d = a; d < c; ++d) this.fo[d] = this.co(0 == d ? {} : this.fo[d - 1], this.Ie[d])
        };
        jw[M].Ct = function(a) {
            var b = ir(a);
            return b != Wm && b != zh || b == Wm && sr(a[Oc]) || or(a)
        };
        jw[M].co = function(a, b) {
            if (this.Ct(b) || this.Ct(a) || ir(b) == zh) return b;
            if (ir(a) == Wm) {
                var c = xs(a);
                rs(b, function(b, e) {
                    c[e] = !(e in a) || a[e] == l ? b : this.co(a[e], b)
                }, this)
            } else c = $r(a), rs(b, function(b, e) {
                c[e] = this.co(a[e], b)
            }, this);
            return c
        };
        jw[M].compact = function() {
            return Mr(this.fo)
        };

        function kw(a) {
            return a[pd](Id)
        }
        var lw = ["minorgridline", Kk, wh, kp, Gh, mn, Kh, yl, hm, qi, ji, gh, En, Bn, Pp, "axistick", "axistitle", Ai, uh, Kl, em, dm, lj, Xp, Tg];

        function mw(a) {
            return a
        };
        var nw = s.log(10);

        function ow(a, b) {
            return s.abs(a - b)
        }

        function pw(a, b, c, d) {
            if (!a || !b) return j;
            var e = d || ow;
            a: {
                var d = function(a, d) {
                        var f = b[d];
                        return !jr(b[d]) || e(a, f) <= c
                    },
                    f;
                for (f in a)
                    if (!d[P](aa, a[f], f, a)) {
                        a = n;
                        break a
                    }
                a = j
            }
            return a
        }

        function qw(a, b, c) {
            if (0 == a.x || 0 == b.x) return {
                x: 0,
                y: (0 == a.x && 0 == b.x ? 0 : 0 == a.x ? a.y : b.y) * c / 6
            };
            c = c / 3 * s.min(s.abs(a.x), s.abs(b.x));
            b = (a.y / a.x + b.y / b.x) / 2;
            return 0 < a.x ? {
                x: c,
                y: c * b
            } : {
                x: -c,
                y: -c * b
            }
        }

        function rw(a, b, c) {
            var d = a.Nt(),
                e = b.Nt();
            if (0 == d || 0 == e) return new ru(0, 0);
            d = s[Pb](d / e);
            return su(a[Oc]()[dd](1 / d), b[Oc]()[dd](d))[dd](c / 6)
        }

        function sw(a, b, c, d, e) {
            for (var c = c ? qw : rw, f = [], g = 0; g < a[L]; ++g) {
                var i, k;
                e ? (i = tw(a, g, 1, d), k = tw(a, g, -1, d)) : (i = d ? (g + 1) % a[L] : g + 1, k = d ? (a[L] + g - 1) % a[L] : g - 1);
                i != l && k != l && a[g] != l && a[k] != l && a[i] != l ? (i = c(tu(a[g], a[k]), tu(a[i], a[g]), b), f[x]([tu(a[g], i), su(a[g], i)])) : a[g] != l ? f[x]([a[g][Oc](), a[g][Oc]()]) : f[x](l)
            }
            return f
        }

        function tw(a, b, c, d) {
            var e = b + c;
            for (d && (e = (e + a[L]) % a[L]); e != b && 0 <= e && e < a[L];) {
                if (a[e] != l) return e;
                e += c;
                d && (e = (e + a[L]) % a[L])
            }
            return l
        }

        function uw(a, b, c) {
            var c = c || 0,
                d = Wr(b, function(b) {
                    return b[c] > a
                });
            return -1 == d ? b[L] - 1 : 0 == d ? 0 : b[d][c] - a < a - b[d - 1][c] ? d : d - 1
        }

        function vw(a, b, c) {
            for (var d = [], e = 0; e < a; e++) d[e] = b[P](c, e);
            return d
        }

        function ww(a) {
            return a.max != l ? a.max : a.min
        }

        function xw(a, b, c, d) {
            var e, f;
            a: {
                jr(c) || (c = 0);jr(d) || (d = a[L]);c = b - c;f = 0;e = 0 <= c ? 0 : l;
                for (var g = 0, i = 0, k = l, m = l; f < a[L];) {
                    var p = a[f].min,
                        q = ww(a[f]) - p,
                        g = g + p;
                    if (g <= c) {
                        e = f + 1;
                        var t = s.min(c - g, q),
                            i = g + t,
                            m = p + t
                    }
                    if (g > b) {
                        e = f >= d ? {
                            dd: f,
                            In: k,
                            Jn: b - (g - p)
                        } : e === l ? l : {
                            dd: e,
                            In: m,
                            Jn: c - i
                        };
                        break a
                    }
                    t = s.min(b - g, q);
                    g += t;
                    k = p + t;
                    f++
                }
                e = {
                    dd: f,
                    In: k,
                    Jn: b - g
                }
            }
            if (!e) return l;
            f = e.Jn;
            b = cs(a, 0, e.dd);
            d = Sr(b, function(a, b) {
                return s.max(a, b.T[L])
            }, 0);
            c = Rr(b, ww);
            0 < c[L] && (c[c[L] - 1] = e.In);
            for (var w = 0; w < d; w++) {
                e = Rr(b, function(a) {
                    return a.T[w] || 0
                } || mw);
                es(e);
                for (i = g = 0; i < e[L]; i++)
                    if (k = e[L] - i, m = (e[i] - g) * k, m <= f) g = e[i], f -= m;
                    else {
                        g += f / k;
                        f = 0;
                        break
                    }
                e = g;
                for (g = 0; g < c[L]; g++) c[g] += s.min(e, a[g].T[w] || 0);
                if (0 == f) break
            }
            return c
        }

        function yw(a, b, c, d) {
            var e = xw(a, b, c, d),
                f = {};
            Pr(a, function(a, b) {
                var c = a.key;
                f[c] != l || (f[c] = []);
                b < e[L] && f[c][x](e[b])
            });
            return f
        }

        function zw(a, b) {
            for (var c = cs(arguments, 1), d = [], e = 0; e < c[L]; e += 2) {
                var f = s.min(c[e], a[L]),
                    g = s.min(c[e + 1], a[L]),
                    f = cs(a, f, g);
                as(d, f)
            }
            return d
        }

        function Aw(a) {
            var b = google[Hc][ac].DECIMAL_PATTERN;
            if (0 >= a) return b[ic](0, b[Uc](Ge));
            for (var b = b[ic](0, b[Uc](Ge) + 1), c = 0; c < a; c++) b += Id;
            return b
        }

        function Bw(a, b) {
            return qr(a) ? [a + Ge + b] : Rr(a, function(a) {
                return a + Ge + b
            })
        }

        function Cw(a, b, c, d, e, f) {
            var g = [],
                i = 0 > d - 1 || 0 > e ? l : c[d - 1][e];
            i && g[x]({
                vk: i,
                Dc: i.Dc + 1,
                ui: d - 1,
                wk: l,
                vi: l,
                xk: l
            });
            (i = 0 > d || 0 > e - 1 ? l : c[d][e - 1]) && g[x]({
                vk: i,
                Dc: i.Dc + 1,
                ui: l,
                wk: l,
                vi: e - 1,
                xk: l
            });
            (c = 0 > d - 1 || 0 > e - 1 ? l : c[d - 1][e - 1]) && f(a[d - 1], b[e - 1]) && g[x]({
                vk: c,
                Dc: c.Dc,
                ui: d - 1,
                wk: e - 1,
                vi: e - 1,
                xk: d - 1
            });
            es(g, function(a, b) {
                return a.Dc - b.Dc
            });
            return 0 < g[L] ? g[0] : {
                vk: l,
                Dc: 0,
                ui: l,
                wk: l,
                vi: l,
                xk: l
            }
        }

        function Dw(a, b, c) {
            for (var d = c || function(a, b) {
                    return a == b
                }, c = [], e = 0; e <= a[L]; e++) {
                c[e] = c[e] || [];
                for (var f = 0; f <= b[L]; f++) c[e][f] = Cw(a, b, c, e, f, d)
            }
            d = {};
            e = {};
            a = c[a[L]][b[L]];
            for (b = a.Dc; a;) a.ui != l && (d[a.ui] = a.wk), a.vi != l && (e[a.vi] = a.xk), a = a.vk;
            return {
                Dc: b,
                uh: d,
                vh: e
            }
        }

        function Ew(a, b, c) {
            if (!a || !b) return l;
            var d = {};
            if (0 == a[L] || 0 == b[L]) return d;
            for (var c = c || mw, e = 0, f = 0; f < a[L]; f++) {
                var g = l,
                    i = c(a[f]);
                for (0 == f || c(a[f - 1]); e < b[L];) {
                    var k = c(b[e]);
                    0 == e || c(b[e - 1]);
                    k = s.abs(i - k);
                    if (g == l || k < g) g = k, d[f] = e, e++;
                    else if (k == g) e++;
                    else break
                }
                e--
            }
            return d
        }

        function Fw(a, b) {
            for (var c in a)
                if (!(0 <= Or(b, c))) return n;
            return j
        }

        function Gw(a, b, c, d) {
            var e = {};
            rs(a, function(f, g) {
                for (var i = f, k = 0; k < b[L]; k++) var m = (0, b[k])(a, g, d),
                    i = c(i, m);
                e[g] = i
            });
            return e
        }

        function Hw(a, b, c) {
            if (c) return Iw(Qr(a, lr), b);
            for (var d = -1, c = 0; c < a[L]; c++)
                if (a[c] === l) {
                    d = cs(a, d + 1, c);
                    d = Iw(d, b);
                    if (d !== l) return d;
                    d = c
                }
            a = cs(a, d + 1);
            return Iw(a, b)
        }

        function Iw(a, b) {
            var c = ds(a, function(a, b) {
                return fs(a, b.x)
            } || fs, n, b);
            if (0 <= c) return a[c].y;
            var d = -(c + 1);
            if (0 == d || d == a[L]) return l;
            c = a[d - 1];
            d = a[d];
            return (new qu(c.x, c.y, d.x, d.y)).Hn((b - c.x) / (d.x - c.x)).y
        };

        function Jw(a, b, c) {
            for (var d = new Date(a), e = n, f = b[L], g = [s[D], s[lb]][c], i = 0; i < f; ++i) {
                var k = a[Do + Kw[i]],
                    m = a[xk + Kw[i]][gd](a),
                    p = b[i],
                    q = Lw[i];
                if (0 == p) e = e || 0 != m && 0 != c, k[gd](d, [q]);
                else return e ? k[gd](d, [q + p * (1 + s[D]((m - q) / p))]) : k[gd](d, [q + p * g((m - q) / p)]), d
            }
        }

        function Mw(a, b, c) {
            var d = $r(a),
                e;
            for (e = 0; e < d[L] && 0 == b[e]; ++e) d[e] = 0;
            if (0 == e) return d[0] = c(a[0] / b[0]) * b[0], d;
            var f = 0;
            a[e - 1] >= Nw[e - 1] ? f = 0.7 : 0 < a[e - 1] && (f = 0.1);
            d[e] = c((a[e] + f) / b[e]) * b[e];
            return d
        }

        function Ow(a, b, c) {
            var d = Rr(b, function(a) {
                return [s.log(Pw(a))]
            });
            if (!c) return c = uw(s.log(a), d), b[c];
            var e = s.log(a),
                f = aa,
                f = f || 0,
                c = c || 0;
            if (0 < d[L] && e <= Mr(d)) c = uw(e, d, f), a = [c, d[c][f]];
            else var g = d[L] - 1 - c,
                a = Mr(d)[f],
                i = d[g][f],
                k = a - i,
                m = s[D]((e - a) / k),
                e = e - a - m * k,
                g = Rr(cs(d, g), function(a) {
                    return [a[f] - i]
                }),
                e = uw(e, g, 0),
                a = [d[L] - 1 + m * c + e, a + m * k + g[e][0]];
            c = a[0];
            return c <= d[L] - 1 ? b[c] : Mw(Qw(s.exp(a[1])), Mr(b), s[B])
        }

        function Rw(a, b, c) {
            var d = new Date(a[dc]()),
                e;
            a: {
                for (e = 0; e < b[L]; ++e)
                    if (0 != b[e]) {
                        e = n;
                        break a
                    }
                e = j
            }
            if (e) return d;
            for (e = 0; e < b[L]; ++e)
                if (0 != b[e]) {
                    var f = Kw[e],
                        g = d[Do + f],
                        f = d[xk + f][gd](d, []);
                    g[gd](d, [f + c * b[e]])
                }
            0 < c && d <= a && h("Error adding duration to date");
            0 > c && d >= a && h("Error subtracting duration from date");
            return d
        }

        function Sw(a, b, c, d) {
            this.lt = a[dc]();
            this.AA = b;
            this.qA = d;
            this.Yn = a[xk + Kw[c]][gd](a, []);
            this.rA = a[Do + Kw[c]];
            this.Ai = new Date(this.lt)
        }
        Sw[M].Am = function() {
            return this.Ai < this.AA
        };
        Qa(Sw[M], function() {
            var a = this.Ai;
            this.Ai = new Date(this.lt);
            this.Yn += this.qA;
            this.rA[gd](this.Ai, [this.Yn]);
            return a
        });
        Sw[M].Wv = function() {
            return this.Am() ? this.Ai : l
        };

        function Tw(a) {
            a = Wr(a, function(a) {
                return 0 != a
            });
            return s.max(0, a)
        }

        function Pw(a) {
            if (a == l) return -1;
            for (var b = 0, c = a[L], d = 0; d < c; ++d) b += a[d] * Uw[d];
            return b
        }

        function Qw(a) {
            for (var b = [], c = Uw[L] - 1; 0 <= c; c--) b[c] = s[D](a / Uw[c]), a -= b[c] * Uw[c];
            return b
        }

        function Vw(a) {
            var b = [],
                a = s[D](a / 1E3);
            b[x](s[D](a / 3600));
            b[x](s[D](a / 60) - 60 * b[0]);
            b[x](a - 3600 * b[0] - 60 * b[1]);
            return b
        }

        function Ww(a, b) {
            return Rr(a, function(a) {
                return a * b
            })
        }
        var Kw = "Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "),
            Lw = [0, 0, 0, 0, 1, 0, 0],
            Nw = [500, 30, 30, 12, 15, 6, 0],
            Uw = [1, 1E3, 6E4, 36E5, 864E5, 2629743830, 31556926E3];

        function Xw(a) {
            return a
        }

        function Yw(a) {
            return a
        }

        function Zw(a) {
            return a[dc]()
        }

        function $w(a) {
            return new Date(a)
        }

        function ax(a) {
            mr(a);
            return 1E3 * (60 * (60 * a[0] + a[1]) + a[2])
        }

        function bx(a) {
            return Vw(a)
        };

        function cx(a, b, c) {
            b = ds(a, function(a, b) {
                var f = c(a),
                    g = c(b);
                return f < g ? -1 : f > g ? 1 : 0
            } || fs, n, {
                source: b,
                target: b
            });
            0 > b && (b = -b - 2);
            return 0 > b ? l : a[b]
        }
        var dx = {
            $C: zn,
            LC: nm,
            QC: Gm
        };

        function ex(a, b, c) {
            return (c = a.gh(c, dx)) ? c : a.$(b) ? nm : zn
        }

        function fx(a, b, c) {
            switch (a) {
                case zn:
                    if (0 == c[L]) c = {
                        transform: function(a) {
                            return a
                        },
                        inverse: function(a) {
                            return a
                        }
                    };
                    else {
                        for (var d = [], a = 0, e = l, b = 0; b < c[L]; b++) {
                            var f = c[b],
                                g = f.mA,
                                i = f[Q],
                                f = f.end,
                                k = g / (f - i);
                            e === l || e != i ? (e = {
                                source: i,
                                target: i + a,
                                Ci: k
                            }, d[x](e)) : (e = d[d[L] - 1], e.Ci = k);
                            d[x]({
                                source: f,
                                target: i + a + g,
                                Ci: 1
                            });
                            a += g - (f - i);
                            e = f
                        }
                        c = {
                            transform: function(a) {
                                var b = cx(d, a, function(a) {
                                    return a[Yb]
                                });
                                return b === l ? a : b[Pc] + (a - b[Yb]) * b.Ci
                            },
                            inverse: function(a) {
                                var b = cx(d, a, function(a) {
                                    return a[Pc]
                                });
                                return b === l ? a : 0 ==
                                    b.Ci ? b[Yb] : b[Yb] + (a - b[Pc]) / b.Ci
                            }
                        }
                    }
                    return c;
                case nm:
                    return {
                        transform: function(a) {
                            return s.log(a) / s.LN10
                        },
                        inverse: function(a) {
                            return s.pow(10, a)
                        }
                    };
                case Gm:
                    var m = b / 2;
                    return {
                        transform: function(a) {
                            return a > m ? s.log(a / m) / s.LN10 : a < -m ? -s.log(-a / m) / s.LN10 : 0
                        },
                        inverse: function(a) {
                            return 0 < a ? s.pow(10, a) * m : 0 > a ? -s.pow(10, -a) * m : 0
                        }
                    }
            }
        };

        function gx() {}
        Y = gx[M];
        Y.Kc = function(a, b, c) {
            this.i = a;
            this.rh = b;
            this.Lb = c !== l ? c - 1 : this.Yq();
            this.A = [];
            this.X = r;
            this.da = -r;
            Ba(this, a.Xl(this.s(ok)));
            this.vw = a.O(this.s(Kq), function(a, b) {
                return b
            });
            this.Mm = l
        };
        Y.tg = function(a, b) {
            var c = ex(this.i, this.s(om), this.s(mo));
            0 != b[L] && c != zn && h(u("Non-linear scale with gaps is not supported."));
            for (var d = [], e = 0; e < b[L]; e++) {
                var f = this.ny(b[e]);
                f && d[x](f)
            }
            this.Mm = fx(c, a, d)
        };
        Y.ny = function(a) {
            var b = this.bo(a.lx),
                c = this.Bi(a.mx),
                a = this.Bi(a.kx);
            if (0 < b)
                if (c + b < a) c += b;
                else return l;
            return {
                mA: 0,
                start: c,
                end: a
            }
        };
        Y.s = function(a) {
            return Bw(this.rh, a)
        };
        Y.Yq = function() {
            return -1
        };
        Y.Gv = function(a, b, c) {
            c && (this.Pr(a), this.Pr(b));
            this.X == r && this.da == -r && (this.X = 0, this.da = 1);
            this.X == r && (this.X = this.da);
            this.da == -r && (this.da = this.X);
            this.X == this.da && (0 == this.X ? (this.X = -1, this.da = 1) : 0 < this.X ? (this.X /= 2, this.da *= 2) : (this.X *= 2, this.da /= 2));
            this.on(this.X, this.da, c);
            this.Lb = s.max(1, this.A[L] - 1)
        };
        Y.Iv = function(a) {
            var b = this.Lk(a);
            return this.vw(a, b)
        };
        Y.ha = function(a) {
            a = this.jf(a);
            if (a == l) return l;
            a = this.qB(a);
            return !oa(a) ? l : a
        };
        Y.jf = function(a) {
            return a != l ? this.Bi(a) : l
        };
        Y.V = function(a) {
            a != l && (this.X = s.min(this.X, a), this.da = s.max(this.da, a))
        };
        Y.Pr = function(a) {
            this.V(this.ha(a))
        };
        Y.Ed = function(a) {
            return this.io(this.Zl(a))
        };
        Y.qB = function(a) {
            return this.Mm[rd](a)
        };
        Y.Zl = function(a) {
            return this.Mm.inverse(a)
        };
        Y.Lk = function(a) {
            return a[kc]()
        };

        function hx(a, b, c) {
            this.Xh = a;
            this.Sj = b;
            this.zn = c
        }
        Ar(hx, gx);
        Y = hx[M];
        Y.Kc = function(a, b, c) {
            hx.lc.Kc[P](this, a, b, c);
            a = a.Vh(this.s(pk));
            b = [];
            b[x](a.millisecond);
            b[x](a.second);
            b[x](a.minute);
            b[x](a.hour);
            b[x](a.day);
            b[x](a.month);
            b[x](a.year);
            a = hs[gd](l, [b, gs(this[Fb], b[L]), this.zn]);
            this.zn = Rr(a, function(a) {
                return Vr(a, function(a) {
                    return a
                })
            })
        };
        Y.O = function(a, b) {
            return a.O(b)
        };
        Y.Bi = function(a) {
            return Zw(a)
        };
        Y.io = function(a) {
            return $w(a)
        };
        Y.bo = function(a) {
            return a
        };
        Y.Gm = function() {
            var a = new Date(0);
            a.setFullYear(0);
            return a
        };
        Y.on = function(a, b, c) {
            var d = (b - a) / 6,
                e = Ow(d, this.Xh, this.Sj);
            c ? (a = Jw(new Date(a), e, 0), b = Jw(new Date(b), e, 1)) : (a = Jw(new Date(a), e, 1), b = Jw(new Date(b), e, 0));
            d = Qw(d);
            d = Mw(d, e, s[B]);
            d = 0 < Pw(d) ? d : e;
            this.A = [];
            for (e = a; e < b;) this.A[x](e[dc]()), e = Rw(e, d, 1);
            (c || e <= b) && this.A[x](e[dc]());
            c && (this.X = a[dc](), this.da = e[dc]());
            this.ty = this.vy(d)
        };
        Y.Lk = function(a) {
            return this.ty[Ac](a)
        };
        Y.vy = function(a) {
            a = Tw(a);
            return new google[Hc][Wc]({
                pattern: this.zn[a]
            })
        };
        var ix = [
                [0, 0, 0, 0, 1],
                [0, 0, 0, 0, 2],
                [0, 0, 0, 0, 7],
                [0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 3],
                [0, 0, 0, 0, 0, 6],
                [0, 0, 0, 0, 0, 12],
                [0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 5],
                [0, 0, 0, 0, 0, 0, 10],
                [0, 0, 0, 0, 0, 0, 25],
                [0, 0, 0, 0, 0, 0, 50],
                [0, 0, 0, 0, 0, 0, 100]
            ],
            jx = [qg, qg, qg, qg, qg, "MMM y", Zq],
            kx = [
                [1],
                [2],
                [5],
                [10],
                [20],
                [50],
                [100],
                [200],
                [500],
                [0, 1],
                [0, 2],
                [0, 5],
                [0, 10],
                [0, 15],
                [0, 30],
                [0, 0, 1],
                [0, 0, 2],
                [0, 0, 5],
                [0, 0, 10],
                [0, 0, 15],
                [0, 0, 30],
                [0, 0, 0, 1],
                [0, 0, 0, 2],
                [0, 0, 0, 3],
                [0, 0, 0, 4],
                [0, 0, 0, 6],
                [0, 0, 0, 12],
                [0, 0, 0, 0, 1],
                [0, 0, 0, 0, 2],
                [0, 0, 0, 0, 7],
                [0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 3],
                [0,
                    0, 0, 0, 0, 6
                ],
                [0, 0, 0, 0, 0, 12],
                [0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 5],
                [0, 0, 0, 0, 0, 0, 10],
                [0, 0, 0, 0, 0, 0, 25],
                [0, 0, 0, 0, 0, 0, 50],
                [0, 0, 0, 0, 0, 0, 100]
            ],
            lx = [Zk, Zk, "h:mm a", "h:00 a", qg, "MMM y", Zq];

        function mx(a, b, c, d, e, f, g, i) {
            var k = b - a;
            if (0 >= k) c = l;
            else {
                for (var m = s[D](s.log(k) / s.log(10)), k = vw(5, function(a) {
                        return {
                            ti: s.pow(10, m - a),
                            uk: 5
                        }
                    }), p = [], q = n, t = 0; t < k[L]; ++t) {
                    var w = k[t],
                        A;
                    A = a / (w.ti * w.uk);
                    for (var E = b / (w.ti * w.uk), K = c, V = d, G = e, ka = f, Wa = g, fb = [], fa = E - A, za = V + ka, Hb = s[lb](fa / (1 - (K + G)) / Wa), fa = s[D](fa / (1 - za) / Wa); Hb <= fa; ++Hb) {
                        var za = Hb * Wa,
                            Ga = s[lb](s.max(A - V * za, E - (1 - G) * za)),
                            Dc = s[D](s.min(A - K * za, E - (1 - ka) * za)),
                            le = 1;
                        0 < E && 0 > A ? 1 < Wa && (Ga = s[lb](Ga / Hb) * Hb, Dc = s[D](Dc / Hb) * Hb, le = Hb) : 0 <= A ? Ga = s.max(0, Ga) : Dc = s.min(-za,
                            Dc);
                        0 <= Dc - Ga && fb[x]({
                            Pz: Hb,
                            Oz: le,
                            Nz: Ga,
                            Mz: Dc
                        })
                    }
                    A = fb;
                    p = p[pb](Rr(A, function(a) {
                        return [w, a]
                    }));
                    if (q) break;
                    q = 0 != A[L]
                }
                c = Sr(p, function(a, b) {
                    for (var c = b[0], d = b[1], e = d.Nz; e <= d.Mz; e += d.Oz) {
                        var f = s[B](c.uk * e),
                            k = s[B](c.uk * (e + g * d.Pz)),
                            m = i(f, k, c.ti);
                        m > a.Dc && (a = {
                            Dc: m,
                            Hs: {
                                fc: s[B](f) * c.ti,
                                ld: s[B](k) * c.ti
                            }
                        })
                    }
                    return a
                }, {
                    Dc: -r,
                    Hs: l
                }).Hs
            }
            c || (0 <= a || 0 >= b || 1 == g ? c = {
                fc: a,
                ld: b
            } : (c = s.max(1, s.min(g - 1, s[B](g * (b / (b - a))))), d = g - c, a = s.max(b / c, -a / d), c = {
                fc: -d * a,
                ld: c * a
            }));
            return c
        }

        function nx(a) {
            if (0 == a) return 0;
            for (0 > a && (a = -a); 0 == s[B](a % 10);) a = s[B](a / 10);
            return 1 == a || 5 == a ? 0.5 : s[D](s.log(a) / s.log(10)) + 1
        };

        function ox() {}
        Ar(ox, gx);
        Y = ox[M];
        Y.Yq = function() {
            return 4
        };
        Y.Kc = function(a, b, c) {
            ox.lc.Kc[P](this, a, b, c);
            this.pd = l;
            this.Nm = a.Hd(this.s(qk));
            this.Wd = a.O(this.s(Lp), [10, 2, 5, 1])
        };
        Y.on = function(a, b, c) {
            var d, e, f, g;
            c ? (c = Z(px, l, this.Wd, this.Lb, a, b), d = -1E-4, e = 1 / s.max(this.Lb, 3), f = d, g = e) : (d = -1 / s.max(this.Lb, 3), e = 0, f = d, g = e, this.Wd[0] *= -1, c = Z(px, l, this.Wd, this.Lb, this.X, this.da));
            c = mx(a, b, d, e, f, g, this.Lb, c);
            d = (c.ld - c.fc) / this.Lb;
            this.A = [];
            for (e = 0; e <= this.Lb; ++e) this.A[x](c.fc + d * e);
            this.X = s.min(c.fc, a);
            this.da = s.max(c.ld, b);
            a: if (a = this.Nm ? d / this.Nm : d, 0 == a) a = 0;
                else {
                    a = s.abs(a);
                    for (b = 0; 16 > b; ++b) {
                        if (s.abs(a - s[B](a)) < 1E-7 * a) {
                            a = b;
                            break a
                        }
                        a *= 10
                    }
                    a = 16
                }
            this.zx = a;
            this.pd = new google[Hc][ac]({
                pattern: this[Fb],
                fractionDigits: this[Fb] ? l : this.zx,
                scaleFactor: this.Nm
            })
        };

        function px(a, b, c, d, e, f, g) {
            c = a[0] * (d - c) / (g * (f - e));
            d = (f - e) / b;
            for (g = 1; g < b; ++g) c -= a[1] * s.pow(nx(e + g * d), 1.2);
            c -= a[2] * s.pow(nx(e), 1.2);
            c -= a[2] * s.pow(nx(f), 1.2);
            return c -= a[3] * s.pow(nx(d), 1.2)
        }
        Y.O = function(a, b) {
            return a.Hd(b)
        };
        Y.Lk = function(a) {
            return this.pd[Ac](a)
        };
        Y.Bi = function(a) {
            return a
        };
        Y.io = function(a) {
            return a
        };
        Y.bo = function(a) {
            return a
        };
        Y.Gm = function() {
            return 0
        };

        function qx() {
            this.Ot = {}
        }
        var rx = l;

        function sx() {
            return rx ? rx : rx = new qx
        }
        qx[M].gx = function(a) {
            return (a = this.Ot[a]) ? a[gd](l, []) : l
        };
        qx[M].Mk = function(a, b) {
            this.Ot[a] = b
        };

        function tx(a) {
            this.Xh = a
        }
        Ar(tx, gx);
        Y = tx[M];
        Y.Kc = function(a, b, c) {
            tx.lc.Kc[P](this, a, b, c);
            this.Wd = a.O(this.s(Lp), [10, 2, 1])
        };
        Y.O = function(a, b) {
            return a.SB(b)
        };
        Y.Bi = function(a) {
            return ax(a)
        };
        Y.io = function(a) {
            return Vw(a)
        };
        Y.bo = function(a) {
            return a
        };
        Y.Gm = function() {
            return Vw(0)
        };
        Y.on = function(a, b, c) {
            if (-1 == this.Lb) {
                var d = (b - a) / 6,
                    e = Ow(d, this.Xh, 0),
                    f = Pw(e),
                    d = s.max(1, s[B](d / f)) * f;
                c ? (a = s[D](a / d) * d, b = s[lb](b / d) * d) : (a = s[lb](a / d) * d, b = s[D](b / d) * d);
                this.A = [];
                for (f = a; f < b;) this.A[x](f), f += d;
                this.A[x](f);
                c && (this.X = a, this.da = b);
                this.Br = Tw(e)
            } else this.by(a, b, c)
        };
        Y.by = function(a, b, c) {
            var d, e, f, g;
            c ? (c = Z(ux, l, this.Wd, this.Lb, a, b), d = -1E-4, e = 1 / s.max(this.Lb, 3), f = d, g = e) : (d = -1 / s.max(this.Lb, 3), e = 0, f = d, g = e, this.Wd[0] *= -1, c = Z(ux, l, this.Wd, this.Lb, this.X, this.da));
            c = mx(a, b, d, e, f, g, this.Lb, c);
            d = (c.ld - c.fc) / this.Lb;
            this.A = [];
            for (e = 0; e <= this.Lb; ++e) this.A[x](c.fc + d * e);
            this.X = s.min(c.fc, a);
            this.da = s.max(c.ld, b);
            this.Br = 0 == d - s[D](d) ? 1 : 0
        };

        function ux(a, b, c, d, e, f) {
            c = a[0] * (d - c) / (f - e);
            f = (f - e) / b;
            for (d = 0; d <= b; ++d) c -= a[1] * nx(e + d * f);
            return c -= a[2] * nx(f)
        }
        Y.Lk = function(a) {
            return (new google[Hc][Wc]({
                pattern: this[Fb] ? this[Fb] : 1 >= this.Br ? dg : cg
            }))[Ac](new Date(1970, 0, 1, a[0], a[1], a[2], 0))
        };
        var vx = [
            [0, 1, 0, 0],
            [0, 2, 0, 0],
            [0, 5, 0, 0],
            [0, 10, 0, 0],
            [0, 20, 0, 0],
            [0, 30, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 5, 0],
            [0, 0, 10, 0],
            [0, 0, 15, 0],
            [0, 0, 30, 0],
            [0, 0, 0, 1],
            [0, 0, 0, 2],
            [0, 0, 0, 3],
            [0, 0, 0, 4],
            [0, 0, 0, 6],
            [0, 0, 0, 12]
        ];
        sx().Mk(Op, function() {
            return new tx(vx)
        });
        sx().Mk(zj, function() {
            return new hx(ix, 3, jx)
        });
        sx().Mk(Aj, function() {
            return new hx(kx, 3, lx)
        });
        sx().Mk(Um, function() {
            return new ox
        });
        var wx = {
                NONE: X,
                ZC: rn,
                IB: W,
                KB: no,
                jC: ji
            },
            xx = {
                NONE: X,
                Gt: hm,
                EB: wh,
                jD: jp,
                FB: Jh,
                lC: ui,
                KB: no,
                kC: ni
            },
            yx = {
                FB: Jh,
                kD: lp,
                iC: hi,
                POINTS: Dn,
                Gt: hm,
                EB: wh,
                NONE: X
            },
            zx = {
                rC: zo,
                JC: Ao,
                pC: yo
            },
            Ax = {
                HB: vi,
                Ht: Jq,
                mC: zi
            },
            Bx = {
                aD: In,
                NC: xm,
                yC: Wj
            },
            Cx = {
                NONE: X,
                cD: bo,
                HC: Jl,
                LB: jq,
                GB: di,
                ad: ql,
                GC: Il
            },
            Dx = {
                NONE: X,
                LB: jq,
                GB: di,
                ad: ql
            },
            Ex = {
                mD: Mq,
                BC: il
            },
            Fx = {
                iD: gp,
                nC: Ci,
                xC: Uj
            },
            Gx = {
                NONE: X,
                ad: ql,
                Af: cn
            },
            Hx = {
                hC: fi,
                lD: sq
            },
            Ix = {
                AC: hl,
                MC: qm
            },
            Jx = {
                NONE: X,
                FC: Gl,
                Ht: Jq,
                JB: pn
            },
            Kx = {
                qk: ci,
                Ht: Jq,
                JB: pn
            },
            Lx = {
                vC: Gj,
                wC: Mj
            },
            Mx = {
                sC: Bj,
                HB: vi,
                gD: xo
            },
            Nx = {
                NONE: X,
                IB: W,
                YC: qn,
                oC: Zi
            },
            Ox = {
                gC: Bh,
                fC: Ah
            },
            Px = {
                IC: fm,
                Gt: hm
            },
            Qx = [{
                    color: "#3366CC",
                    lighter: "#45AFE2"
                }, {
                    color: "#DC3912",
                    lighter: "#FF3300"
                }, {
                    color: "#FF9900",
                    lighter: "#FFCC00"
                }, {
                    color: "#109618",
                    lighter: "#14C21D"
                }, {
                    color: "#990099",
                    lighter: "#DF51FD"
                }, {
                    color: "#0099C6",
                    lighter: "#15CBFF"
                }, {
                    color: "#DD4477",
                    lighter: "#FF97D2"
                }, {
                    color: "#66AA00",
                    lighter: "#97FB00"
                }, {
                    color: "#B82E2E",
                    lighter: "#DB6651"
                }, {
                    color: "#316395",
                    lighter: "#518BC6"
                }, {
                    color: "#994499",
                    lighter: "#BD6CBD"
                }, {
                    color: "#22AA99",
                    lighter: "#35D7C2"
                }, {
                    color: "#AAAA11",
                    lighter: "#E9E91F"
                },
                {
                    color: "#6633CC",
                    lighter: "#9877DD"
                }, {
                    color: "#E67300",
                    lighter: "#FF8F20"
                }, {
                    color: "#8B0707",
                    lighter: "#D20B0B"
                }, {
                    color: "#651067",
                    lighter: "#B61DBA"
                }, {
                    color: "#329262",
                    lighter: "#40BD7E"
                }, {
                    color: "#5574A6",
                    lighter: "#6AA7C4"
                }, {
                    color: "#3B3EAC",
                    lighter: "#6D70CD"
                }, {
                    color: "#B77322",
                    lighter: "#DA9136"
                }, {
                    color: "#16D620",
                    lighter: "#2DEA36"
                }, {
                    color: "#B91383",
                    lighter: "#E81EA6"
                }, {
                    color: "#F4359E",
                    lighter: "#F558AE"
                }, {
                    color: "#9C5935",
                    lighter: "#C07145"
                }, {
                    color: "#A9C413",
                    lighter: "#D7EE53"
                }, {
                    color: "#2A778D",
                    lighter: "#3EA7C6"
                },
                {
                    color: "#668D1C",
                    lighter: "#97D129"
                }, {
                    color: "#BEA413",
                    lighter: "#E9CA1D"
                }, {
                    color: "#0C5922",
                    lighter: "#149638"
                }, {
                    color: "#743411",
                    lighter: "#C5571D"
                }
            ],
            Rx = {
                vAxis: {
                    titleTextStyle: {
                        color: Md,
                        italic: j
                    }
                },
                hAxis: {
                    titleTextStyle: {
                        color: Md,
                        italic: j
                    },
                    gridlines: {
                        minorTextOpacity: 0.7,
                        minorGridlineOpacity: 0.4,
                        newTimeline: n,
                        allowMinor: j,
                        minStrongLineDistance: 40,
                        minWeakLineDistance: 40,
                        minStrongToWeakLineDistance: 5,
                        minNotchDistance: 10,
                        minMajorTextDistance: 10,
                        minMinorTextDistance: 5,
                        unitThreshold: 1.5
                    }
                },
                sizeAxis: {
                    minSize: 5,
                    maxSize: 30
                },
                fontName: "Arial",
                titleTextStyle: {
                    color: Kd,
                    bold: j
                },
                bubble: {
                    textStyle: {
                        color: Kd
                    }
                },
                candlestick: {
                    hollowIsRising: n
                },
                annotations: {
                    datum: {
                        textStyle: {
                            color: yo
                        },
                        stemColor: "#999999"
                    },
                    domain: {
                        textStyle: {
                            color: Md
                        },
                        stemColor: "#999999"
                    }
                },
                majorAxisTextColor: Md,
                minorAxisTextColor: "#444444",
                backgroundColor: {
                    fill: ke,
                    stroke: Nd,
                    strokeWidth: 0
                },
                chartArea: {
                    backgroundColor: {
                        fill: X
                    }
                },
                tooltip: {
                    textStyle: {
                        color: Kd
                    }
                },
                baselineColor: "#333333",
                gridlineColor: "#cccccc",
                pieSliceBorderColor: ne,
                pieResidueSliceColor: "#cccccc",
                pieSliceTextStyle: {
                    color: ne
                },
                areaOpacity: 0.3,
                intervals: {
                    style: Jh,
                    color: zo,
                    lineWidth: 1,
                    fillOpacity: 0.3,
                    barWidth: 0.25,
                    shortBarWidth: 0.1,
                    boxWidth: 0.25,
                    pointSize: 6
                },
                actionsMenu: {
                    textStyle: {
                        color: Kd
                    }
                },
                legend: {
                    textStyle: {
                        color: Md
                    },
                    pagingTextStyle: {
                        color: "#0011cc"
                    },
                    scrollArrows: {
                        activeColor: "#0011cc",
                        inactiveColor: "#cccccc"
                    }
                },
                colorAxis: {
                    legend: {
                        textStyle: {
                            color: Kd
                        }
                    }
                },
                bar: {
                    groupWidth: 100 / 1.618 + oe
                }
            };

        function Sx(a) {
            var b = Rr(a.f, function(b) {
                    var d = a[Sc] ? a[Sc] : {
                            x: 0,
                            y: 0
                        },
                        e = Dv(b.x + d.x, b[L], a.Va),
                        b = Dv(b.y + d.y, a.u[N], a.Oa);
                    return e[Q] == e.end || b[Q] == b.end ? l : new xt(b[Q], e.end, b.end, e[Q])
                }),
                b = Qr(b, lr);
            return sv(b)
        };

        function Tx(a, b, c, d, e) {
            e != l || (e = 1);
            if (0 == e) return {
                f: [],
                la: n,
                ec: 0
            };
            var f = [],
                b = Ux(b, f, d, e, function(b) {
                    return a(b, c)[y]
                });
            return {
                f: f,
                la: b.Hf,
                ec: b.ec
            }
        }

        function Ux(a, b, c, d, e) {
            var f = e(a);
            if (f <= c) return a && b[x](a), {
                Hf: n,
                ec: f
            };
            if (1 < d) {
                for (var g = 0, i = 0, f = 1; f < a[L]; f++)
                    if (a[qb](f) == vd) {
                        var k = e(a[ic](0, f));
                        if (k <= c) i = k, g = f;
                        else break
                    }
                if (0 < g) return b[x](a[ic](0, g)), b = Ux(a[ic](g + 1), b, c, d - 1, e), {
                    Hf: b.Hf,
                    ec: s.max(i, b.ec)
                }
            }
            d = e(He);
            if (c < d) {
                for (f = 2; 1 <= f; f--)
                    if (a = e("..." [ic](0, f)), a <= c) return b[x]("..." [ic](0, f)), {
                        Hf: j,
                        ec: a
                    };
                return {
                    Hf: j,
                    ec: 0
                }
            }
            for (f = a[L] - 1; 1 <= f; f--)
                if (i = a[ic](0, f) + He, g = e(i), g <= c) return b[x](i), {
                    Hf: j,
                    ec: g
                };
            b[x](He);
            return {
                Hf: j,
                ec: d
            }
        };

        function Vx(a, b) {
            this.e = b;
            this.Fh = a;
            this.cf = this.Gd = this.ul = this.Pe = this.Ng = this.Ra = this.ve = l
        }
        Y = Vx[M];
        Y.drawChart = function(a, b) {
            this.$v();
            var c = new jw(2);
            c.vb(0, a);
            c.vb(1, b);
            var c = this.Pe = c[nd](),
                d = this.e,
                e = d.Lo(c[y], c[S]);
            this.Nb(e.t(), Ei);
            var f = c.Li;
            f.dq() || d.Ga(0, 0, c[y], c[S], f, e);
            c.Qf == cn && (f = this.de(c[oc], e), this.Nb(f, Pp));
            this.Gd = d.aa(j);
            f = c.o;
            this.Aq(f);
            f && f[pc] != ql && (d[v](e, this.Gd), this.Nb(this.Gd.t(), Kl));
            this.cf = d.aa(j);
            f = c.Wc;
            this.zq(f);
            f && f[pc] != ql && (d[v](e, this.cf), this.Ra.colorbar = this.cf.t());
            this.Dq(c, e) || this.aw(c, e);
            this.ul = d.aa(n);
            d[v](e, this.ul);
            this.ve = b
        };
        Y.xw = function(a, b) {
            var c = vs({
                d: l,
                r: l,
                o: l,
                vc: l,
                Wc: l
            });
            !Fw(b, c) || !Fw(this.ve, c) ? this.drawChart(a, b) : (this.Kw(a, b), this.Jw(a, b), this.er(a, b), this.ve = b)
        };
        Y.Kw = function(a, b) {
            if (!Jv(b.o, this.ve.o)) {
                this.e.Dg(this.Gd);
                var c = new jw(2);
                c.vb(0, a.o || {});
                c.vb(1, b.o || {});
                c = c[nd]();
                this.Aq(c)
            }
        };
        Y.Jw = function(a, b) {
            if (!Jv(b.Wc, this.ve.Wc)) {
                this.e.Dg(this.cf);
                var c = new jw(2);
                c.vb(0, a.Wc || {});
                c.vb(1, b.Wc || {});
                c = c[nd]();
                this.zq(c)
            }
        };
        Y.aw = function(a, b) {
            var c = {
                color: Oh,
                eb: a.ed,
                fontSize: a.Fc,
                bold: n,
                hf: n,
                rm: n
            };
            this.Cw(sg, c, a.b[y]);
            var d = a.b.top + s[B](a.b[S] / 2);
            this.e.Bw(sg, a.b[F], d, a.b[F] + a.b[y], d, Ci, Ci, c, b)
        };
        Y.Aq = function(a) {
            if (a) {
                var b = a.Vc;
                if (b) {
                    var c;
                    a.Lh ? c = a.Vk : (c = Rr(b, function(a) {
                        return this.cq(a)
                    }, this), c = sv(c));
                    c && (c = At(c), this.e.Ga(c[F], c.top, c[y], c[S], wv, this.Gd));
                    for (c = 0; c < b[L]; c++) this.Px(b[c]);
                    this.Qx(a.Lh)
                }
            }
        };
        Y.cq = function(a) {
            var b = [];
            if (a.m) {
                var c = Sx(a.m);
                c && b[x](c)
            }
            a.M && b[x](a.M.P.fy());
            return sv(b)
        };
        Y.Px = function(a) {
            if (a.v) {
                var b = this.e.aa(n),
                    c = kw([dm, a[sc]]);
                this.Nb(b.t(), c, dm);
                if (c = this.cq(a)) c = At(c), this.e.Ga(c[F], c.top, c[y], c[S], wv, b);
                a.m && this.de(a.m, b);
                a.M && this.e.Ga(a.M.P[F], a.M.P.top, a.M.P[y], a.M.P[S], a.M.a, b);
                c = l;
                a.ka && a.ka.v && (c = this.vv(a.ka.P.x, a.ka.P.y, a.ka.a, b), a = kw([Xn, a[sc]]), this.Nb(c, a));
                this.e[v](this.Gd, b)
            }
        };
        Y.Qx = function(a) {
            a && (this.$s(a.gm, -1), a.fm && this.de(a.fm, this.Gd), this.$s(a.em, 1))
        };
        Y.$s = function(a, b) {
            if (a) {
                var c = Cv(a[Sb]),
                    c = this.e.ja(c, a.a, this.Gd);
                if (a.Nd) {
                    var d = kw([em, b]);
                    this.Nb(c, d)
                }
            }
        };
        Y.vv = function(a, b, c, d) {
            var e = this.e,
                f = e.aa();
            e.Ga(a, b, 12, 12, c, f);
            e[v](d, f);
            c = new Bv;
            c[xb](a + 2, b + 2);
            c.H(a + 12 - 2, b + 12 - 2);
            c[xb](a + 12 - 2, b + 2);
            c.H(a + 2, b + 12 - 2);
            a = new vv;
            a.Gc(ne);
            a.Re(2);
            e.ja(c, a, f);
            return f.t()
        };
        Y.zq = function(a) {
            if (a) {
                for (var b = a.definition, c = this.e, d = this.cf, e = b.Zp, f = 0; f < e[L]; ++f) c.Ga(e[f].zb[F], e[f].zb.top, e[f].zb[y], e[f].zb[S], e[f].a, d);
                e = b.$p;
                for (f = 0; f < e[L]; ++f) {
                    var g = new Bv;
                    g[xb](e[f][Sb][0], e[f][Sb][1]);
                    g.H(e[f][Sb][2], e[f][Sb][3]);
                    g.H(e[f][Sb][4], e[f][Sb][5]);
                    g[Kc]();
                    c.ja(g, e[f].a, d)
                }
                b = b.aq;
                for (e = 0; e < b[L]; ++e) c.Yg(b[e][z], b[e].x, b[e].y, 1, gp, gp, b[e][O], d);
                a = this.e.Ga(a.xh[F], a.xh.top, a.xh[y], a.xh[S], wv, this.cf);
                this.Nb(a, lj)
            }
        };
        Y.Cw = function(a, b, c) {
            var d = b[N],
                a = this.e.Py(a, b);
            a > c && (d = s.max(1, s[D](b[N] * c / a)));
            return d
        };
        Y.Cg = function(a) {
            var b = this.Ra[a];
            b && (this.e.Ur(b), delete this.Ra[a])
        };
        Y.Le = function(a, b) {
            var c;
            if (a.zh) {
                var d = this.Fh[id]();
                c = a.zh;
                c = lv(et(d), c);
                d[v](c);
                a.ap && (c.innerHTML = a.zh[nb]);
                var e = a.bp,
                    d = a.$o,
                    f = a.cp,
                    g = a.margin,
                    i = new qs(c[uc], c[Zc]),
                    k = d[T] - e.x >= i[y] + g,
                    m = d[R] - e.y >= i[S] + g,
                    p = e.y - d.top >= i[S] + g,
                    q = e.y + (f + i[S] / 2) * (p || k ? -1 : 1),
                    e = is(e.x + (f + i[y] / 2) * (e.x - d[F] >= i[y] + g && !k && !m && !p ? -1 : 1) - i[y] / 2, d[F] + g, d[T] - g - i[y]),
                    d = is(q - i[S] / 2, d.top + g, d[R] - g - i[S]),
                    d = new $(e, d);
                pa(c[O], c[uc] + 1 + Kn);
                $a(c[O], c[Zc] + Kn);
                Aa(c[O], d.x + Kn);
                c[O].top = d.y + Kn
            } else {
                c = this.e;
                d = this.ul;
                g = c.aa();
                q = a.outline;
                i = new Bv;
                e = new xt(q.j.top + 0.5, q.j[T] + 0.5, q.j[R] + 0.5, q.j[F] + 0.5);
                f = q.Sb;
                i[xb](e[F] + 1, e[R]);
                i.yb(e[F] + 1, e[R] - 1, 1, 1, 180, 270, j);
                i.H(e[F], e.top + 1);
                i.yb(e[F] + 1, e.top + 1, 1, 1, 270, 0, j);
                if (f != l && f[0].y == q.j.top)
                    for (k = 0; 3 > k; ++k) i.H(f[k].x + 0.5, f[k].y + 0.5);
                i.H(e[T] - 1, e.top);
                i.yb(e[T] - 1, e.top + 1, 1, 1, 0, 90, j);
                i.H(e[T], e[R] - 1);
                i.yb(e[T] - 1, e[R] - 1, 1, 1, 90, 180, j);
                if (f != l && f[0].y == q.j[R])
                    for (k = 0; 3 > k; ++k) i.H(f[k].x + 0.5, f[k].y + 0.5);
                i[Kc]();
                q = [new vv({
                    fill: Tq,
                    stroke: Zd,
                    Aa: 1
                }), new vv({
                    fill: Zd,
                    Aa: 0,
                    Cb: 0.6
                }), new vv({
                    fill: Zd,
                    Aa: 0,
                    Cb: 0.4
                })];
                for (e = q[L] - 1; 0 <= e; --e) f = c.ja(i, q[e], g), c.Ze(f, e, e);
                i = a.Ch;
                for (q = 0; q < i.W[L]; q++) switch (k = i.W[q], f = k.ob, e = c.aa(), c[v](g, e), f[I]) {
                    case hm:
                        f = f[C];
                        k = k[C];
                        k[Mc] && c.Ga(k[Mc].j[F], k[Mc].j.top, k[Mc].j[T] - k[Mc].j[F], k[Mc].j[R] - k[Mc].j.top, f[Mc].a, e);
                        for (m = 0; m < k.gc[L]; m++) {
                            var p = f.gc[m],
                                t = k.gc[m];
                            switch (p[I]) {
                                case Ap:
                                    c.Yg(p[C][z], t.j[F], t.j.top, 1, gp, gp, p[C][O], e);
                                    break;
                                case ep:
                                    c.Ga(t.j[F], t.j.top, t.j[T] - t.j[F], t.j[R] - t.j.top, p[C].a, e)
                            }
                        }
                        f.id != l && (f = kw([Tg, f.id]), c.ig(e, f));
                        break;
                    case so:
                        f = f[C], k = k[C],
                            m = new Bv, m[xb](k.Wa.ef, k.Wa.ff), m.H(k.Wa.Qa, k.Wa.Xa), c.ja(m, f.a, e)
                }
                c[v](d, g);
                c = g.t()
            }
            this.Nb(c, b)
        };
        Y.de = function(a, b, c) {
            (a = this.yq(a, c)) && this.e[v](b, a);
            return a
        };
        Y.yq = function(a, b) {
            var c = a.f;
            if (!c || 0 == c[L]) return l;
            for (var d = this.e, e = a.u, f = a.Dd != l ? a.Dd : 0, g = a[Sc] ? a[Sc] : {
                    x: 0,
                    y: 0
                }, i = a.G, k = !!i || b || n, m = d.aa(), p = 0; p < c[L]; p++) {
                var q = c[p];
                0 == f ? d.Yg(q[z], q.x + g.x, q.y + g.y, q[L], a.Va, a.Oa, e, m) : d.Av(q[z], q.x + g.x, q.y + g.y, q[L], f, a.Va, a.Oa, e, m)
            }
            if (k) {
                k = l;
                if (0 == f)(c = Sx(a)) && (k = d.Ga(c[F], c.top, c[T] - c[F], c[R] - c.top, wv, m));
                else {
                    var t = ks(f),
                        f = ys(a);
                    f.Dd = 0;
                    p = (new ru(g.x, g.y))[Ic](-t);
                    Ua(f, {
                        x: p.x,
                        y: p.y
                    });
                    for (p = 0; p < c[L]; p++) g = (new ru(c[p].x, c[p].y))[Ic](-t), f.f[p].x = g.x, f.f[p].y =
                        g.y;
                    if (c = Sx(f)) c = [new ru(c[F], c.top), new ru(c[T], c.top), new ru(c[T], c[R]), new ru(c[F], c[R])], Pr(c, function(a) {
                        a[Ic](t)
                    }), c = Cv(c, n), k = d.ja(c, wv, m)
                }
                i && k && (c = {
                    background: tl,
                    padding: jf,
                    border: kf
                }, e[N] != l && (Ra(c, e[N] + Kn), c.margin = e[N] + Kn), e.eb != l && sa(c, e.eb), d.zv(k, i, c))
            }
            return m.t()
        };
        Y.Qc = function(a, b, c) {
            var d = this.Ra[b];
            d != l ? this.e.replaceChild(a, c, d) : this.e[v](a, c);
            this.Nb(c, b)
        };
        Y.Nb = function(a, b, c) {
            a && (this.e.ig(a, b), this.Ra[b] = a, c && this.my(c, b))
        };
        Y.Pp = function(a) {
            var b = this.Ra[a];
            b && (this.e.Ur(b), delete this.Ra[a])
        };
        Y.$v = function() {
            this.Ra = {};
            this.Ng = {};
            this.e[Vb]();
            this.Fh[Vb]()
        };
        Y.my = function(a, b) {
            this.Ng[a] || (this.Ng[a] = []);
            0 <= Or(this.Ng[a], b) || this.Ng[a][x](b)
        };
        Y.getBoundingBox = function(a) {
            var b = [];
            if (this.Ra[a]) {
                var c = this.e[cc](this.Ra[a]);
                c && b[x](c)
            }
            for (var a = this.Ng[a] || [], d = 0; d < a[L]; ++d)(c = this.e[cc](this.Ra[a[d]])) && b[x](c);
            return sv(b)
        };

        function Wx() {
            this.Sa = []
        }
        Y = Wx[M];
        Y.zc = function(a, b) {
            this.Sa[x]({
                a: a,
                Pm: b
            })
        };
        Y.move = function(a, b) {
            this.zc(l, {
                type: Mm,
                data: {
                    x: a,
                    y: b
                }
            })
        };
        Y.H = function(a, b, c) {
            this.zc(a, {
                type: hm,
                data: {
                    x: b,
                    y: c
                }
            })
        };
        Y.Pj = function(a, b, c, d, e, f, g) {
            this.zc(a, {
                type: rj,
                data: {
                    Qa: b,
                    Xa: c,
                    ic: d,
                    xc: e,
                    x: f,
                    y: g
                }
            })
        };
        Y.yb = function(a, b, c, d, e, f, g, i) {
            this.zc(a, {
                type: vh,
                data: {
                    fn: b,
                    gn: c,
                    hn: d,
                    jn: e,
                    Gr: f,
                    kn: g,
                    Hr: i
                }
            })
        };
        Y.close = function(a) {
            var b = this.Sa[0].Pm[C];
            this.H(a, b.x, b.y)
        };

        function Xx(a) {
            switch (a[I]) {
                case Mm:
                case hm:
                case rj:
                    return a = a[C], new $(a.x, a.y);
                case vh:
                    var a = a[C],
                        b = js(a.kn, 360);
                    return new $(a.fn + a.hn * s.cos(ks(b - 90)), a.gn + a.jn * s.sin(ks(b - 90)))
            }
        }
        Y.Sw = function() {
            for (var a = [], b = l, c = 0; c < this.Sa[L]; c++) {
                var d = this.Sa[c],
                    e = d.Pm;
                if (e[I] == Mm) b = Xx(e);
                else {
                    d = d.a;
                    a: {
                        for (var f = 0; f < a[L]; f++) {
                            var g = a[f];
                            if (zv(d, g.a)) {
                                d = g;
                                break a
                            }
                        }
                        g = {
                            a: d,
                            Sa: new Bv,
                            xb: l
                        };a[x](g);d = g
                    }
                    ns(d.xb, b) || d.Sa[xb](b.x, b.y);
                    d.Sa.zc(e);
                    b = d.xb = Xx(e)
                }
            }
            return a
        };
        Y.xg = function(a) {
            var b = this.Sw();
            if (0 == b[L]) a = l;
            else if (1 == b[L]) a = a.xg(b[0].Sa, b[0].a);
            else {
                for (var c = a.aa(), d = 0; d < b[L]; d++) {
                    var e = b[d],
                        e = a.xg(e.Sa, e.a);
                    a[v](c, e)
                }
                a = c.t()
            }
            return a
        };
        Y.eq = function() {
            for (var a = new Bv, b = 0; b < this.Sa[L]; b++) a.zc(this.Sa[b].Pm);
            return a
        };

        function Yx(a, b) {
            return a.h && a.h.a || a.a || b.Ko
        }

        function Zx(a) {
            return a[I] == hm || a[I] == wh || a[I] == no
        }

        function $x(a, b) {
            return a.visible != l ? a.visible : b.Do
        }

        function ay(a, b) {
            return a.h && a.h.Pb != l ? a.h.Pb : a.Pb != l ? a.Pb : b.Bu
        }

        function by(a, b) {
            return ay(a, b) + Yx(a, b).ar() / 2
        }

        function cy(a) {
            return a.vd && a.J == W && a[Wb] == il
        }

        function dy(a, b) {
            for (var c = new Wx, d = j, e = j, f = l, g = l, i = 0; i < a.c[L]; i++) {
                var k = a.c[i];
                if (!k || !k.h || k.h.x == l || k.h.y == l) e = !b || d;
                else {
                    d && (f = i, d = n);
                    var m = k.h,
                        p = k.Od === l ? l : k.Od || a.Pa;
                    e || p === l ? (c[xb](m.x, m.y), e = n) : a.Ol ? c.Pj(p, a.c[g].Qd.x, a.c[g].Qd.y, k.Pd.x, k.Pd.y, m.x, m.y) : c.H(p, m.x, m.y);
                    g = i
                }
            }!d & a.su && (d = b ? g : a.c[L] - 1, f = b ? f : 0, d != l && (f != l && a.c[d] && a.c[f]) && (p = a.c[f].Od === l ? l : a.c[f].Od || a.Pa, a.Ol ? c.Pj(p, a.c[d].Qd.x, a.c[d].Qd.y, a.c[f].Pd.x, a.c[f].Pd.y, a.c[f].h.x, a.c[f].h.y) : c[Kc](p)));
            return c
        }

        function ey(a) {
            for (var b = new Wx, c = j, d = 0; d < a.c[L]; d++) {
                var e = a.c[d].h;
                e.x == l || e.y == l ? c = j : (c || b.H(a.c[d].Od === l ? l : a.c[d].Od || a.Pa, e.Aj, e.Bj), (c || e.Aj != e.yj || e.Bj != e.zj) && b[xb](e.yj, e.zj), c = n)
            }
            return b
        }

        function fy(a, b, c) {
            return (c = (a = a.Ja) && a[c || 0]) && c[pc].Jb(b)
        }

        function gy(a, b, c) {
            return (c = (a = a.va) && a[c || 0]) && c[pc].Jb(b)
        }

        function hy(a, b, c) {
            return (c = (a = a.Ja) && a[c || 0]) && c[pc].Md(b)
        }

        function iy(a, b, c) {
            return (c = (a = a.va) && a[c || 0]) && c[pc].Md(b)
        };

        function jy(a, b) {
            Vx[P](this, a, b);
            this.Ca = l
        }
        Ar(jy, Vx);
        var ky = {
            Af: en,
            ad: vl,
            Bc: Xi
        };
        Y = jy[M];
        Y.Dq = function(a, b) {
            this.Fu(a);
            var c = this.e.aa(n);
            this.e[v](b, c);
            this.Nb(c.t(), Ri);
            rs(this.Ca, function(a) {
                a.sa || (a.sa = this.e.aa(!jr(a.Yo) || a.Yo))
            }, this);
            this.e.Ga(a.b[F], a.b.top, a.b[y], a.b[S], a.Vf, c);
            rs(a.Ja, function(b) {
                this.Du(a, b)
            }, this);
            rs(a.va, function(b) {
                this.Eu(a, b)
            }, this);
            rs(a.Ja, function(b) {
                this.Jp(a, b)
            }, this);
            rs(a.va, function(b) {
                this.Jp(a, b)
            }, this);
            a.Qf == ql && this.de(a[oc], this.Ca[oc].sa);
            a.bh && this.de(a.bh, this.Ca.axistitle.sa);
            Pr(a.r, function(a, b) {
                a.xa && this.Ri(a.xa, l, l, b)
            }, this);
            for (var d = [], e = 0; e < a.d[L]; e++) d[x]({
                Mi: a.d[e].Mi,
                index: e
            });
            for (e = 0; e < d[L]; e++) d[e] = {
                index: e,
                value: d[e]
            };
            var f = function(a, b) {
                return fs(a.Mi, b.Mi)
            } || fs;
            es(d, function(a, b) {
                return f(a[ub], b[ub]) || a[sc] - b[sc]
            });
            for (e = 0; e < d[L]; e++) d[e] = d[e][ub];
            for (e = 0; e < d[L]; e++) {
                var g = d[e][sc];
                this.Bl(a.d[g], g)
            }
            for (e = 0; e < a.r[L]; e++) a.r[e].G && (d = kw([Xp, e]), this.Le(a.r[e].G, d));
            var d = new zt(a.b[F], a.b.top, a.b[y], a.b[S]),
                i = this.e.aa(n),
                d = this.e.Ip(i, d);
            this.e[v](c, d);
            Pr(lw, function(a) {
                var d = this.Ca[a].sa;
                if (d) {
                    var e;
                    switch (this.Ca[a][pc]) {
                        case Xi:
                            e =
                                i;
                            break;
                        case vl:
                            e = c;
                            break;
                        case en:
                            e = b
                    }
                    this.e[v](e, d)
                }
            }, this);
            return j
        };
        Y.Fu = function(a) {
            var b = this.Ca = {};
            b.action = {
                position: ky.Af
            };
            b.annotation = {
                position: ky.Bc
            };
            b.annotationtext = {
                position: ky.ad
            };
            b.area = {
                position: ky.Bc
            };
            b.bar = {
                position: ky.Bc
            };
            b.baseline = {
                position: ky.Bc
            };
            b.bubble = {
                position: ky.Bc
            };
            b.categorysensitivityarea = {
                position: ky.Bc
            };
            b.candlestick = {
                position: ky.Bc
            };
            b.gridline = {
                position: ky.Bc
            };
            b.interval = {
                position: ky.Bc
            };
            b.line = {
                position: ky.Bc
            };
            b.minorgridline = {
                position: ky.Bc
            };
            b.pathinterval = {
                position: ky.Bc
            };
            b.point = {
                position: ky.ad,
                Yo: n
            };
            b.pointsensitivityarea = {
                position: ky.ad
            };
            b.steppedareabar = {
                position: ky.Bc
            };
            b.tooltip = {
                position: ky.Af
            };
            La(b, {
                position: a.Qf == ql ? ky.ad : ky.Af
            });
            b.axistick = {
                position: ky.ad
            };
            b.axistitle = {
                position: a.Xg == ql ? ky.ad : ky.Af
            };
            var c = a.o && a.o[pc] == ql,
                d = c ? this.Gd : l,
                c = c ? ky.ad : ky.Af;
            b.legend = {
                sa: d,
                position: c
            };
            b.legendscrollbutton = {
                sa: d,
                position: c
            };
            b.legendentry = {
                sa: d,
                position: c
            };
            a = a.Wc && a.Wc[pc] == ql;
            b.colorbar = {
                sa: a ? this.cf : l,
                position: a ? ky.ad : ky.Af
            }
        };
        Y.Bl = function(a, b) {
            a[I] == ni ? this.zz(a, b) : a[I] == Jh ? this.As(a, b) : a[I] == jp ? this.As(a, b) : a[I] == ui ? this.Az(a, b) : a[I] == wh ? this.yz(a, b, this.Pe.vd) : this.Wp(a, b, this.Pe.ae);
            a.Ha && a.Ha.fe && this.Bz(a, b)
        };
        Y.Bz = function(a, b) {
            for (var c = a.Ha.fe, d = 0, e; e = c[d]; ++d)
                if (0 != e.Wa[L]) {
                    var f = new Bv;
                    f.zm(e.Wa, e.ro);
                    e[R] && f.zm(e[R], e.Yu);
                    var g = this.e.aa();
                    this.e.ja(f, e.a, g);
                    e = g.t();
                    f = kw([mn, b, d]);
                    this.Qc(this.Ca.pathinterval.sa, f, e)
                }
        };
        Y.Eq = function(a, b, c, d) {
            a[I] == Jh || a[I] == jp ? this.Mr(a, b, c, d) : a[I] == ui ? this.Nr(a, b, c, d) : a[I] == ni ? this.tq(a, b, c, d) : this.Or(a, b, c, d)
        };
        Y.zz = function(a, b) {
            var c = this.Ca.bubble.sa,
                d = vw(a.c[L], function(a) {
                    return a
                });
            a.au && es(d, function(b, c) {
                var d = a.c[b],
                    e = a.c[c];
                return (e ? e.h.Pb : 0) - (d ? d.h.Pb : 0)
            });
            for (var e = 0; e < d[L]; e++) {
                var f = d[e],
                    g = a.c[f];
                g && (this.tq(a, b, g, f), g = this.e.Yg(g[z], g.h.x, g.h.y, g.du, Ci, Ci, g.u, c), f = kw([ji, b, f]), this.e.ig(g, f))
            }
        };
        Y.As = function(a, b) {
            for (var c = 0; c < a.c[L]; c++) this.Mr(a, b, a.c[c], c)
        };
        Y.Mr = function(a, b, c, d) {
            if (c && c.h) {
                var e = Yx(c, a),
                    f = a[I] == Jh ? Gh : kp,
                    g = kw([f, b, d]),
                    i = c.h.$g || c.h,
                    e = this.e.df(i[F], i.top, i[y], i[S], e),
                    i = l,
                    k = c.h.outline,
                    m = c.Pc,
                    p = c.Eb;
                if (k || m || p) {
                    i = this.e.aa();
                    this.e[v](i, e);
                    if (k) {
                        var q = c.Pa || a.Pa,
                            k = Cv(k, j);
                        this.e.ja(k, q, i)
                    }
                    if (m)
                        for (q = 0; q < m.Ma[L]; q++) k = m.Ma[q][Fc], this.e.Ga(k[F], k.top, k[y], k[S], m.Ma[q].a, i);
                    p && this.e.Ga(p[Fc][F], p[Fc].top, p[Fc][y], p[Fc][S], p.a, i)
                }
                e = i ? i.t() : e;
                this.Qc(this.Ca[f].sa, g, e);
                c.G && (f = kw([Xp, b, d]), this.Le(c.G, f));
                c.h.xd && this.Lp(a, b, d, c.h.xd)
            }
        };
        Y.yz = function(a, b, c) {
            if (0 != a.c[L]) {
                for (var d = [], e = l, f = 0, g = 0; g < a.c[L]; g++) {
                    var i = l;
                    if (g + 1 < a.c[L]) var k = a,
                        i = a.c[g + 1].$t || k.po;
                    e != l && !zv(i, e) && (k = Vr(d, function(a) {
                        return zv(e, a.a)
                    }), k || (k = {
                        a: e,
                        Sa: new Bv
                    }, d[x](k)), this.qv(k.Sa, a, c, f, g), f = g);
                    e = i
                }
                f = this.e.aa();
                for (g = 0; g < d[L]; g++) k = d[g], this.e.ja(k.Sa, k.a, f);
                g = kw([wh, b]);
                this.Qc(this.Ca.area.sa, g, f.t());
                if (c) {
                    g = ey(a);
                    c = kw([hm, b]);
                    if (d = g.xg(this.e)) {
                        f = l;
                        k = a.Pc;
                        i = a.Eb;
                        if (k || i) {
                            f = this.e.aa();
                            if (k)
                                for (g = 0; g < k.Ma[L]; g++) this.e.ja(k.Ma[g][Sb], k.Ma[g].a, f);
                            i &&
                                this.e.ja(i[Sb], i.a, f);
                            this.e[v](f, d)
                        }
                        g = f ? f.t() : d;
                        this.Qc(this.Ca.line.sa, c, g)
                    }
                    this.dm(a, b)
                } else this.Wp(a, b, n)
            }
        };
        Y.qv = function(a, b, c, d, e) {
            var f = j,
                g = l;
            a[xb](b.c[d].h.lm, b.c[d].h.mm);
            for (var i = d; i <= e; i++) {
                var k = b.c[i].h;
                a.H(k.Aj, k.Bj);
                (k.yj != k.Aj || k.zj != k.Bj) && a.H(k.yj, k.zj);
                k.x != l && k.y != l && (f = n, g = i)
            }
            if (!f)
                if (c)
                    for (i = e; i >= d; i--) k = b.c[i].h, a.H(k.nm, k.om), (k.lm != k.nm || k.mm != k.om) && a.H(k.lm, k.mm);
                else k = b.c[g].h, a.H(k.nm, k.om), a[Kc]()
        };
        Y.Wp = function(a, b, c) {
            var d = kw([hm, b]);
            if (0 >= a[qd]) this.Pp(d), this.dm(a, b);
            else if (c = dy(a, c), 0 != c.Sa[L]) {
                if (c = c.xg(this.e)) {
                    var e = l,
                        f = a.Pc,
                        g = a.Eb;
                    if (f || g) {
                        e = this.e.aa();
                        if (f)
                            for (var i = 0; i < f.Ma[L]; i++) this.e.ja(f.Ma[i][Sb], f.Ma[i].a, e);
                        g && this.e.ja(g[Sb], g.a, e);
                        this.e[v](e, c)
                    }
                    c = e ? e.t() : c;
                    this.Qc(this.Ca.line.sa, d, c)
                }
                this.dm(a, b)
            }
        };
        Y.dm = function(a, b) {
            for (var c = 0; c < a.c[L]; c++) this.Or(a, b, a.c[c], c)
        };
        Y.sv = function(a, b) {
            var c = this.Pe.b;
            if (a.x - b >= c[T] || a.x + b <= c[F] || a.y - b >= c[R] || a.y + b <= c.top) return n;
            if ((a.x >= c[T] || a.x <= c[F]) && (a.y >= c[R] || a.y <= c.top)) {
                var d = b * b,
                    e = a.x - c[T],
                    f = a.x - c[F],
                    g = a.y - c[R],
                    c = a.y - c.top,
                    e = e * e,
                    f = f * f,
                    g = g * g,
                    c = c * c;
                if (e + g >= d && e + c >= d && f + c >= d && f + g >= d) return n
            }
            return j
        };
        Y.Or = function(a, b, c, d) {
            this.Ms(a, b, c, d, this.Ca.point.sa, this.Ca.pointsensitivityarea.sa)
        };
        Y.tq = function(a, b, c, d) {
            this.Ms(a, b, c, d, this.Ca.bubble.sa, l)
        };
        Y.Ms = function(a, b, c, d, e) {
            if (c && (c.h && !c.Zb) && this.sv(c.h, by(c, a))) {
                var f = kw([a[I] == ni ? ji : Bn, b, d]);
                if ($x(c, a)) {
                    var g = this.e.pj(c.h.x, c.h.y, ay(c, a), Yx(c, a)),
                        i = l,
                        k = c.Eb,
                        m = c.Pc;
                    if (k || m)
                        if (i = this.e.aa(), k && this.e.Tl(k.x, k.y, k.Pb, k.a, i), this.e[v](i, g), m)
                            for (k = 0; k < m.Ma[L]; k++) this.e.Tl(m.x, m.y, m.Ma[k].Pb, m.Ma[k].a, i);
                    g = i ? i.t() : g;
                    this.Qc(e, f, g)
                } else this.Pp(f);
                c.G && (e = kw([Xp, b, d]), this.Le(c.G, e));
                c.xa && this.Ri(c.xa, a, b, d);
                c.h.xd && this.Lp(a, b, d, c.h.xd)
            }
        };
        Y.Az = function(a, b) {
            for (var c = 0; c < a.c[L]; c++) this.Nr(a, b, a.c[c], c)
        };
        Y.Nr = function(a, b, c, d) {
            if (c && c.h) {
                var e = this.e.df(c.h.Wa[F], c.h.Wa.top, c.h.Wa[y], c.h.Wa[S], c.Pa),
                    f = this.e.df(c.h[Fc][F], c.h[Fc].top, c.h[Fc][y], c.h[Fc][S], c.no),
                    a = this.e.aa();
                this.e[v](a, e);
                this.e[v](a, f);
                if (e = c.Pc)
                    for (f = 0; f < e.Ma[L]; f++) {
                        var g = e.Ma[f][Fc];
                        this.e.Ga(g[F], g.top, g[y], g[S], e.Ma[f].a, a)
                    }(e = c.Eb) && this.e.Ga(e[Fc][F], e[Fc].top, e[Fc][y], e[Fc][S], e.a, a);
                e = kw([qi, b, d]);
                this.Qc(this.Ca.candlestick.sa, e, a.t());
                c.G && (b = kw([Xp, b, d]), this.Le(c.G, b))
            }
        };
        Y.Ri = function(a, b, c, d) {
            if (a) {
                var e = a.Zo,
                    b = this.Pe.b;
                if (!(e.x < b[F] || e.x > b[T]))
                    if ((b = a[rc]) && 0 != b[L]) {
                        var f = [gh, d];
                        c != l && bs(f, 1, 0, c);
                        f = kw(f);
                        e = this.Xv(e[Wb], e.x, e.y, e[L], e[zb]);
                        this.Qc(this.Ca.annotation.sa, f, e);
                        e = this.e.aa();
                        f = [uh, d];
                        c != l && bs(f, 1, 0, c);
                        var g = l;
                        a.hd && !a.hd.Nk && (b = [a.hd.label], g = -1);
                        for (a = 0; a < b[L]; a++) {
                            var i = b[a],
                                k = this.yq(i, j);
                            if (k) {
                                if (i.Gh) {
                                    var m = kw([Xp, c, d, a]);
                                    this.Le(i.Gh, m)
                                }
                                this.e[v](e, k);
                                i = $r(f);
                                i[x](g || a);
                                i = kw(i);
                                this.Nb(k, i)
                            }
                        }
                        c = kw(f);
                        this.Qc(this.Ca.annotationtext.sa, c, e.t())
                    }
            }
        };
        Y.Xv = function(a, b, c, d, e) {
            a = a == il ? [d, 1] : [1, d];
            return this.e.df(s.min(b, b + a[0]), s.min(c, c + a[1]), s.abs(a[0]), s.abs(a[1]), new vv({
                fill: e
            }))
        };
        Y.Lp = function(a, b, c, d) {
            if (a.Ha == l) return l;
            for (var e = this.e.aa(), a = a.Ha.mh, f = 0; f < d[L]; f++) {
                var g = d[f][Fc],
                    i = a[d[f].hh];
                if (!(i[O] == wh || i[O] == hm)) {
                    var k = i.a;
                    if (0 == g[y] && 0 == g[S]) i = i.bu / 2, 0 < i && (g = this.e.pj(g[F], g.top, i, k), this.e[v](e, g));
                    else if (0 == g[y] || 0 == g[S]) i = new Bv, i[xb](g[F], g.top), i.H(g[F] + g[y], g.top + g[S]), this.e.ja(i, k, e);
                    else this.e[v](e, this.e.df(g[F], g.top, g[y], g[S], k))
                }
            }
            if (!e.Sh()) return l;
            b = kw([yl, b, c]);
            e = e.t();
            this.Qc(this.Ca.interval.sa, b, e);
            return e
        };
        Y.Du = function(a, b) {
            var c = Z(function(c, e) {
                var f = s[D](c.l),
                    g = c[L] != l ? c[L] : a.b[S],
                    i = b.mj.l,
                    i = s.min(i, i + b.mj[bb] * g);
                return this.e.Ga(f, i, 1, g, c.a, e)
            }, this);
            this.qq(b, c)
        };
        Y.Eu = function(a, b) {
            var c = Z(function(c, e) {
                var f = s[D](c.l),
                    g = c[L] != l ? c[L] : a.b[y],
                    i = b.mj.l,
                    i = s.min(i, i + b.mj[bb] * g);
                return this.e.Ga(i, f, g, 1, c.a, e)
            }, this);
            this.qq(b, c)
        };
        Y.qq = function(a, b) {
            if (a.Q) {
                var c = this.Ca.gridline.sa,
                    d = kw([a[$b], Kk]);
                Pr(a.Q, function(e, f) {
                    var k = kw([a[$b], Kk, f]);
                    this.bs(e, b, c, k, d)
                }, this)
            }
            var e = this.Ca.baseline.sa,
                f = kw([a[$b], Kh]);
            this.bs(a.ga, b, e, f)
        };
        Y.bs = function(a, b, c, d, e) {
            a && (a.v && !a.a.dq()) && (a = b(a, c), this.Nb(a, d, e))
        };
        Y.Jp = function(a, b) {
            var c = this.Ca,
                d = this.de(b[oc], c.axistitle.sa),
                e = kw([b[$b], Pp]);
            this.Nb(d, e);
            if (b[z]) {
                var f = c.axistick.sa,
                    g = kw([b[$b], Gl]);
                Pr(b[z], function(a, c) {
                    if (a.v) {
                        var d = this.de(a.m, f),
                            e = kw([b[$b], Gl, c]);
                        this.Nb(d, e, g)
                    }
                }, this)
            }
        };
        Y.er = function(a, b) {
            this.an(a, this.ve);
            this.$m(a, b)
        };
        Y.an = function(a, b) {
            for (var c in b.d) {
                var d = a.d[c];
                if (Fw(b.d[c], vs({
                        c: l
                    }))) {
                    var e = b.d[c].c,
                        f;
                    for (f in e) {
                        var g = e[f];
                        if (g.G) {
                            var i = kw([Xp, ja(c), ja(f)]);
                            this.Cg(i)
                        }
                        if (g = g.xa)
                            for (var k in g[rc]) g[rc][k].Gh && (i = kw([Xp, ja(c), ja(f), ja(k)]), this.Cg(i));
                        this.Eq(d, ja(c), d.c[f], ja(f))
                    }
                } else {
                    for (f in b.d[c].c) b.d[c].c[f].G && (i = kw([Xp, ja(c), ja(f)]), this.Cg(i));
                    this.Bl(d, ja(c))
                }
            }
            for (var m in b.r)
                if (c = b.r[m], c.G && (i = kw([Xp, ja(m)]), this.Cg(i)), g = c.xa) {
                    for (k in g[rc]) g[rc][k].Gh && (i = kw([Xp, l, ja(m), ja(k)]), this.Cg(i));
                    this.Ri(a.r[m].xa, l, l, ja(m))
                }
        };
        Y.$m = function(a, b) {
            for (var c in b.d) {
                var d = a.d[c];
                if (Fw(b.d[c], vs({
                        c: l
                    })))
                    for (var e in b.d[c].c) {
                        var f = new jw(2);
                        f.vb(0, d.c[e]);
                        f.vb(1, b.d[c].c[e]);
                        f = f[nd]();
                        this.Eq(d, ja(c), f, ja(e))
                    } else f = new jw(2), f.vb(0, d), f.vb(1, b.d[c]), this.Bl(f[nd](), ja(c))
            }
            for (var g in b.r)
                if (b.r[g].G && (c = kw([Xp, ja(g)]), this.Le(b.r[g].G, c)), b.r[g].xa) c = new jw(2), c.vb(0, a.r[g].xa), c.vb(1, b.r[g].xa), c = c[nd](), this.Ri(c, l, l, ja(g))
        };

        function ly(a, b, c, d) {
            this.oe = a;
            this.e = b;
            this.Fh = c;
            this.Fg = d;
            this.Bf = l
        }
        Y = ly[M];
        Y.jy = function() {
            var a = this.e.Um;
            this.as(Z(function(b, c) {
                this.e.vn(a, b, c)
            }, this))
        };
        Y.iy = function() {
            var a = this.Fh[id]();
            this.as(Z(function(b, c) {
                this.Fh.vn(a, b, c)
            }, this))
        };
        Y.as = function(a) {
            a(Km, Z(this.yt, this));
            a(Jm, Z(this.jB, this));
            a(Im, Z(this.yt, this));
            a(Ui, Z(this.iB, this));
            a(qj, Z(this.kB, this))
        };
        Y.yt = function(a) {
            var b = this.e.ck(a),
                c = this.bi(a);
            a[I] == Im && this[Ab](Ni, {
                Wb: b,
                $h: c
            });
            c != this.Bf && (this.Bf != l && this.Fr(this.Bf), this.Wx(c, b), this.Bf = c)
        };
        Y.jB = function(a) {
            a = this.bi(a);
            a == this.Bf && (this.Fr(a), this.Bf = l)
        };
        Y.Fr = function(a) {
            this[Ab](Mi, l);
            this.hk(hg, a)
        };
        Y.Wx = function(a, b) {
            this[Ab](Li, {
                Wb: b
            });
            this.hk(gg, a)
        };
        Y.iB = function(a) {
            var b = this.e.ck(a),
                a = this.bi(a);
            this[Ab](Ki, {
                Wb: b,
                $h: a
            });
            this.hk(Wf, a)
        };
        Y.kB = function(a) {
            var b = this.e.ck(a),
                c = this.bi(a);
            this[Ab](Pi, {
                Wb: b,
                $h: c
            });
            this.hk(xg, c);
            a[vb]()
        };
        Y.hk = function(a, b) {
            var c = b[zc](Id);
            switch (c[0]) {
                case Xp:
                    var d = l,
                        e = l,
                        f = l;
                    this.Fg == rn ? d = ja(c[1]) : 4 == c[L] ? (d = c[1] ? ja(c[1]) : l, e = ja(c[2]), f = ja(c[3])) : 3 == c[L] ? (d = ja(c[1]), e = ja(c[2])) : e = ja(c[1]);
                    c = {
                        ba: d,
                        Kb: e,
                        of: f
                    };
                    this[Ab](Xp + a, c);
                    break;
                case Tg:
                    c = {
                        Ph: c[1]
                    };
                    this[Ab](Xg + a, c);
                    break;
                case dm:
                    c = ja(c[1]);
                    if (0 > c) break;
                    c = {
                        Mj: c
                    };
                    this[Ab](Vl + a, c);
                    break;
                case em:
                    c = {
                        Tw: ja(c[1])
                    };
                    this[Ab]($l + a, c);
                    break;
                case Xn:
                    c = ja(c[1]);
                    c = {
                        Mj: c
                    };
                    this[Ab](Sn + a, c);
                    break;
                default:
                    this.ys(a, b)
            }
        };
        Y.dispatchEvent = function(a, b) {
            this.oe[Ab]({
                type: a,
                data: b
            })
        };

        function my(a, b, c, d) {
            ly[P](this, a, b, c, d.J);
            this.p = d;
            this.zr = this.Ny()
        }
        Ar(my, ly);
        Y = my[M];
        Y.Ny = function() {
            var a = this.p;
            if (a.J != W && a.J != no) return {};
            for (var b = {}, a = a.d, c = 0; c < a[L]; c++) {
                var d = a[c];
                if (Zx(d))
                    for (var e = d.c, f = 0; f < e[L]; f++) {
                        var g = e[f];
                        if (g && g.h && !g.Zb) {
                            var i = kw([Bn, c, f]);
                            b[i] = {
                                $b: g.h,
                                Pb: g.h && g.h.tj != l ? g.h.tj : g.tj != l ? g.tj : d.Vt,
                                ba: c,
                                Kb: f
                            }
                        }
                    }
            }
            return b
        };
        Y.bi = function(a) {
            var b = this.e.pn(a[Pc]),
                c = this.e.ck(a),
                c = this.uy(c);
            if (a[I] == Jm) {
                a = this.Bf;
                if (a == l) return b;
                c = c == a ? l : a
            }
            if (c != l) var a = this.Tr(b),
                d = this.Tr(c),
                b = a > d ? b : c;
            return this.wy(b) ? b : Ei
        };
        Y.uy = function(a) {
            if (!(new zt(this.p.b[F] + 1, this.p.b.top + 1, this.p.b[y] - 2, this.p.b[S] - 2))[fd](a)) return l;
            switch (this.p.Gb) {
                case Bj:
                    return this.ox(a);
                case vi:
                    return this.nx(a);
                case xo:
                    return l
            }
        };
        Y.nx = function(a) {
            for (var b = this.p.r, c = 0; c < b[L]; c++) {
                var d = b[c].iw;
                if (d && d[fd](a)) return kw([Ai, c])
            }
            return l
        };
        Y.ox = function(a) {
            var b = a.x,
                a = a.y,
                c = l,
                d = r,
                e;
            for (e in this.zr) {
                var f = this.zr[e],
                    g = f.$b.x,
                    i = f.$b.y,
                    k = f.Pb;
                g - b <= k && (g - b >= -k && i - a <= k && i - a >= -k) && (g = (g - b) * (g - b) + (i - a) * (i - a), g <= k * k && g <= d && (c = kw([En, f.ba, f.Kb]), d = g))
            }
            return c
        };
        Y.wy = function(a) {
            return this.p.Gb == vi ? (a = a[zc](Id)[0], a != Gh && a != ji && a != qi && a != Bn && a != En && a != kp) : j
        };
        Y.Tr = function(a) {
            return Or(lw, a[zc](Id)[0])
        };
        Y.ys = function(a, b) {
            var c = b[zc](Id);
            switch (c[0]) {
                case Gh:
                case ji:
                case qi:
                case Bn:
                case En:
                case kp:
                    var d = ja(c[1]),
                        c = {
                            ba: d,
                            Kb: ja(c[2])
                        };
                    this[Ab](Bj + a, c);
                    break;
                case Ai:
                    c = ja(c[1]);
                    c = {
                        ba: l,
                        Kb: c
                    };
                    this[Ab](vi + a, c);
                    break;
                case uh:
                    this.Uz(a, c);
                    break;
                case hm:
                case wh:
                    d = ja(c[1]), c = {
                        ba: d,
                        Kb: l
                    }, this[Ab](to + a, c)
            }
        };
        Y.Uz = function(a, b) {
            var c = ja(Mr(b));
            this[Ab](gh + a, 3 == b[L] ? {
                ba: l,
                Kb: ja(b[1]),
                of: c
            } : {
                ba: ja(b[1]),
                Kb: ja(b[2]),
                of: c
            })
        };

        function ny(a, b) {
            var c = new Bv,
                d = a.Sa;
            if (0 == d[L] || 1 == d[L]) return c;
            for (var e = [l], f = 0; f < d[L]; f++) {
                var g = d[f];
                g[C] && e[x](new $(g[C].x, g[C].y))
            }
            e[x](l);
            var g = d[d[L] - 1][I] == Yi,
                f = e[1][Oc](),
                i = e[2][Oc](),
                k = e[e[L] - 3][Oc](),
                m = e[e[L] - 2][Oc]();
            g ? (e[0] = m, e[e[L] - 1] = f) : ns(f, m) ? (e[0] = k, e[e[L] - 1] = i) : (e[0] = (new qu(f.x, f.y, i.x, i.y)).Hn(-1), e[e[L] - 1] = (new qu(m.x, m.y, k.x, k.y)).Hn(-1));
            for (var i = 0 > b, p = oy(e[0], e[1], b), k = e[L] - 2, f = 1; f <= k; f++) {
                var m = oy(e[f], e[f + 1], b),
                    q = py(p, m),
                    t;
                if (pr(q)) {
                    t = py(qy(e[f - 1], e[f]), p);
                    var w = py(qy(e[f],
                        e[f - 1]), p);
                    t = nv(new mv(t.x, w.x), q.x) && nv(new mv(t.y, w.y), q.y)
                } else t = q == r;
                p = t && q != r ? q : py(qy(e[f], e[f - 1]), p);
                c.zc(ry(d[f - 1], p));
                t || (p = 180 - 180 * s[Kb](p.x - e[f].x, p.y - e[f].y) / s.PI, q = py(qy(e[f], e[f + 1]), m), c.yb(e[f].x, e[f].y, s.abs(b), s.abs(b), p, 180 - 180 * s[Kb](q.x - e[f].x, q.y - e[f].y) / s.PI, i));
                p = m
            }
            g && c[Kc]();
            return c
        }

        function ry(a, b) {
            var c = ys(a);
            switch (a[I]) {
                case Mm:
                case hm:
                    c[C].x = b.x;
                    c[C].y = b.y;
                    break;
                case rj:
                    c[C].x = b.x;
                    c[C].y = b.y;
                    var d = b.x - a[C].x,
                        e = b.y - a[C].y;
                    c[C].Qa += d;
                    c[C].Xa += e;
                    c[C].ic += d;
                    c[C].xc += e
            }
            return c
        }

        function oy(a, b, c) {
            var d, e = (b.y - a.y) / (b.x - a.x);
            d = !oa(e) ? {
                Pf: r,
                dd: a.x
            } : {
                Pf: e,
                dd: a.y - e * a.x
            };
            e = d.Pf;
            d = d.dd;
            if (e == r) return {
                Pf: r,
                dd: 0 > b.y - a.y ? d + c : d - c
            };
            c *= s[Pb](1 + e * e);
            return {
                Pf: e,
                dd: 0 < b.x - a.x ? d + c : d - c
            }
        }

        function qy(a, b) {
            var c = (a.x - b.x) / (b.y - a.y),
                d;
            oa(c) ? d = a.y - c * a.x : (c = r, d = a.x);
            return {
                Pf: c,
                dd: d
            }
        }

        function py(a, b) {
            var c = a.Pf,
                d = a.dd,
                e = b.Pf,
                f = b.dd;
            oa(c) || (c = r);
            oa(e) || (e = r);
            if (ov(c, e)) return ov(d, f) ? r : l;
            if (c == r) return new $(d, e * d + f);
            if (e == r) return new $(f, c * f + d);
            var g = e - c;
            return new $(-(f - d) / g, (d * e - c * f) / g)
        };

        function sy(a, b) {
            a ? b[L] != a[L] && h(u("colorsScale and valuesScale must be of the same length")) : 1 != b[L] && h(u("colorsScale must contain exactly one element when no valueScale is provided"));
            this.yc = a;
            this.Ae = Rr(b, function(a) {
                return Yu(a).Fk
            })
        }
        var ty = ["#EFE6DC", "#109618"],
            uy = ["#DC3912", "#EFE6DC", "#109618"];
        sy[M].Pw = function(a) {
            if (!this.yc) return this.Ae[0];
            if (a >= this.yc[this.yc[L] - 1]) return this.Ae[this.Ae[L] - 1];
            if (a <= this.yc[0]) return this.Ae[0];
            var b = ds(this.yc, fs, n, a);
            if (0 <= b) return this.Ae[b];
            var c = -b - 2,
                b = -b - 1;
            return pv(this.Ae[b], this.Ae[c], (a - this.yc[c]) / (this.yc[b] - this.yc[c]))
        };

        function vy(a, b) {
            !b || 0 == b[L] ? b = a && 3 == a[L] ? uy : ty : 1 == b[L] && (b = [ty[0], b[0]]);
            if (!a || 2 > a[L]) return {
                Sl: l,
                Rl: [Mr(b)]
            };
            var c = a[0],
                d = a[a[L] - 1],
                e = d - c;
            if (0 == e) return {
                Sl: [d],
                Rl: [Mr(b)]
            };
            if (2 == a[L]) {
                a = [];
                d = e / (b[L] - 1);
                for (e = 0; e < b[L]; e++) a[x](c + d * e)
            }
            return {
                Sl: a,
                Rl: b
            }
        };

        function wy(a, b, c, d) {
            var e = {},
                f = {},
                g = b.gv || google[Hc][ac].DECIMAL_PATTERN;
            if (b[Wb] == il) var f = b.u,
                e = a.yc[0][kc](),
                i = a.yc[a.yc[L] - 1][kc](),
                g = new google[Hc][ac]({
                    pattern: g
                }),
                e = g[Ac](e),
                i = g[Ac](i),
                f = {
                    Db: {
                        text: e,
                        width: d ? d(e, f)[y] : 0,
                        height: f[N]
                    },
                    Mb: {
                        text: i,
                        width: d ? d(i, f)[y] : 0,
                        height: f[N]
                    }
                },
                d = f.Db[S] / 4,
                e = new zt(f.Db[y] + d, 0, b[y] - (f.Db[y] + f.Mb[y] + 2 * d), b[S]);
            else e = new zt(0, 0, b[y], b[S]);
            var d = 0.33 * e[S],
                i = 2 * (d / s[Pb](3)),
                g = new zt(e[F] + i / 2, e.top + d + 1, e[y] - i, e[S] - d - 1),
                k = a.Ae,
                m = a.yc,
                p = m[m[L] - 1] - m[0],
                q;
            if (0 == p) q = [{
                zb: new zt(g[F], g.top, g[y], g[S]),
                a: new vv({
                    fill: k[0]
                })
            }];
            else {
                q = [];
                for (var p = g[y] / p, t = g[F], w = 0, A = 0; A < m[L] - 1; ++A) w = t + (m[A + 1] - m[A]) * p, q[A] = {
                    zb: new zt(t, g.top, w - t, g[S]),
                    a: new vv({
                        q: {
                            Qa: t,
                            Xa: 0,
                            ic: w,
                            xc: 0,
                            Jd: k[A],
                            Kd: k[A + 1]
                        }
                    })
                }, t = w
            }
            g = q;
            k = e;
            m = b.fv;
            e = [];
            for (q = 0; q < c[L]; ++q) p = c[q][ub], t = a.yc, p < t[0] ? p = 0 : (w = k[y] - i, p > t[t[L] - 1] ? p = w : (A = t[t[L] - 1] - t[0], p = 0 == A ? 0.5 * w : w * ((p - t[0]) / A))), p = k[F] + p + i / 2, p = [p - i / 2, k.top, p + i / 2, k.top, p, k.top + d], t = new vv({
                fill: m,
                stroke: m
            }), e[q] = {
                path: p,
                a: t
            };
            a = [];
            b[Wb] == il && (a = f, c = [], c[0] = {
                x: 0,
                y: b[S] - a.Db[S],
                text: a.Db[z],
                style: b.u
            }, c[1] = {
                x: b[y] - a.Mb[y],
                y: b[S] - a.Mb[S],
                text: a.Mb[z],
                style: b.u
            }, a = c);
            a = {
                Zp: g,
                $p: e,
                aq: a
            };
            f = a.Zp;
            for (c = 0; c < f[L]; ++c)
                if (d = f[c], b[Wb] == Mq && (i = d.zb[F], Aa(d.zb, d.zb.top), d.zb.top = i, i = d.zb[y], pa(d.zb, d.zb[S]), $a(d.zb, i)), Aa(d.zb, d.zb[F] + b[F]), d.zb.top += b.top, b[Wb] == Mq && (d.a.q.Xa = d.a.q.Qa, d.a.q.Qa = 0, d.a.q.xc = d.a.q.ic, d.a.q.ic = 0), d.a.q != l) d.a.q.Qa += b[F], d.a.q.Xa += b.top, d.a.q.ic += b[F], d.a.q.xc += b.top;
            f = a.$p;
            for (c = 0; c < f[L]; ++c)
                for (d = 0; 3 > d; ++d) b[Wb] == Mq && (i = f[c][Sb][2 * d], f[c][Sb][2 *
                    d
                ] = f[c][Sb][2 * d + 1], f[c][Sb][2 * d + 1] = i), f[c][Sb][2 * d] += b[F], f[c][Sb][2 * d + 1] += b.top;
            f = a.aq;
            for (c = 0; c < f[L]; ++c) f[c].x += b[F], f[c].y += b.top;
            return a
        };

        function xy(a) {
            return {
                name: rq,
                Ud: {
                    className: Dk
                },
                content: Rr(a, function(a) {
                    return {
                        name: gm,
                        content: yy(a[C]),
                        Ud: {
                            className: Ck
                        }
                    }
                })
            }
        }

        function yy(a) {
            return Rr(a.gc, function(a, c) {
                switch (a[I]) {
                    case Ap:
                        return {
                            name: bp,
                            style: gk + a[C][O].eb + xf + (a[C][O].hf ? Dl : X) + zf + (a[C][O].rm ? tq : X) + yf + (a[C][O][lc] ? Sh : X) + wf,
                            content: (0 == c ? U : vd) + a[C][z]
                        };
                    case ep:
                        return {
                            name: Lj,
                            style: Eh + (a[C].a && a[C].a.Y) + wf,
                            Ud: {
                                className: Fk
                            }
                        }
                }
            })
        };

        function zy(a, b, c, d, e, f) {
            var g = {
                gc: []
            };
            e != l && (e = xv(e), g.gc[x]({
                type: ep,
                data: {
                    size: b[N] / 2,
                    a: e
                }
            }));
            c != l && (d == l && h(u("Line title is specified without a text style.")), c = {
                type: Ap,
                data: {
                    text: c + vf,
                    style: d
                }
            }, g.gc[x](c));
            c = {
                type: Ap,
                data: {
                    text: a,
                    style: b
                }
            };
            g.gc[x](c);
            f != l && (g.id = f, g.background = {
                a: wv
            });
            return {
                type: hm,
                data: g
            }
        }

        function Ay(a, b, c, d, e, f, g, i) {
            if (i) return 0 == a.W[L] ? a = {
                name: Lj,
                content: [],
                Ud: {
                    className: zk
                }
            } : (Qr(a.W, function(a) {
                return a[I] == so
            }), g = Wr(a.W, function(a) {
                return a[I] == so
            }), -1 == g ? a = xy(a.W) : (b = xy(cs(a.W, 0, g)), a = cs(a.W, g + 1), a = {
                name: rq,
                Ud: {
                    className: Bk
                },
                content: Rr(a, function(a) {
                    return {
                        name: gm,
                        id: kw([Tg, a[C].id]),
                        content: yy(a[C]),
                        Ud: {
                            className: Ak
                        }
                    }
                })
            }, a = Zr(b, {
                name: Lj,
                Ud: {
                    className: Ek
                }
            }, a)), a = {
                name: Lj,
                content: a,
                Ud: {
                    className: zk
                }
            }), {
                zh: a,
                ap: n,
                bp: f,
                anchor: f,
                $o: e,
                cp: 20,
                margin: 5
            };
            for (var k = i = 0; k < a.W[L]; k++) {
                var m =
                    a.W[k];
                if (m[I] == hm)
                    for (var m = m[C], p = 0; p < m.gc[L]; p++) {
                        var q = m.gc[p];
                        q[I] == Ap && (i = s.max(i, q[C][O][N]))
                    }
            }
            g = 0 == i ? g : i;
            for (var t, m = i = k = 0; m < a.W[L]; m++) switch (p = a.W[m], p[I]) {
                case hm:
                    p = By(p[C], b);
                    i += p[S] + (0 < m ? p.pf : 0);
                    k = s.max(k, p[y]);
                    break;
                case so:
                    i += 1.5 * g + p[C].a.I
            }
            k = s.max(k, 2 * g);
            k = s[B](k + 2 * g / 1.618);
            i = s[B](i + 2 * g / 1.618);
            t = new qs(k, i);
            var k = d.x >= f.x ? 1 : -1,
                m = d.y > f.y ? 1 : -1,
                w = l,
                w = c ? new $(d.x + k * g, d.y + m * (g + t[S] / 2)) : new $(d.x + k * t[y] / 2, d.y + m * t[S] / 2),
                p = w.x - t[y] / 2,
                q = p + t[y],
                A = w.y - t[S] / 2,
                E = A + t[S],
                i = {};
            c && (c = new $(w.x, d.y +
                g / (g + t[S] / 2) * (w.y - d.y)), w = new $(w.x + -1 * (d.x - w.x), c.y), c.x = s[B](c.x), c.y = s[B](c.y), w.x = s[B](w.x), w.y = s[B](w.y), i.Sb = 1 == k * m ? [c, d, w] : [w, d, c]);
            i.j = new xt(s[B](A), s[B](q), s[B](E), s[B](p));
            d = e[F] + 5;
            c = e[T] - 5;
            if (!(i.j[F] >= d && i.j[T] <= c)) {
                k = ys(i);
                m = k.j[F];
                Aa(k.j, f.x + -1 * (k.j[T] - f.x));
                ab(k.j, f.x + -1 * (m - f.x));
                if (m = k.Sb) p = m[0], m[0] = m[2], m[2] = p, m[0].x = f.x + -1 * (m[0].x - f.x), m[1].x = f.x + -1 * (m[1].x - f.x), m[2].x = f.x + -1 * (m[2].x - f.x);
                if (k.j[F] >= d && k.j[T] <= c) i.j = k.j, i.Sb = k.Sb;
                else if (i.Sb && (m = new mv(d + 4, c - 4), p = new mv(k.Sb[0].x,
                        k.Sb[2].x), q = new mv(i.Sb[0].x, i.Sb[2].x), !(m[Q] <= q[Q] && m.end >= q.end) && (m[Q] <= p[Q] && m.end >= p.end) && (i.j = k.j, i.Sb = k.Sb)), i.j[T] > c && (Aa(i.j, i.j[F] - (i.j[T] - c)), ab(i.j, c)), i.j[F] < d) ab(i.j, i.j[T] + (d - i.j[F])), Aa(i.j, d)
            }
            d = e.top + 5;
            e = e[R] - 5;
            if (!(i.j.top >= d && i.j[R] <= e)) {
                c = ys(i);
                k = c.j.top;
                c.j.top = f.y + -1 * (c.j[R] - f.y);
                Xa(c.j, f.y + -1 * (k - f.y));
                if (k = c.Sb) m = k[0], k[0] = k[2], k[2] = m, k[0].y = f.y + -1 * (k[0].y - f.y), k[1].y = f.y + -1 * (k[1].y - f.y), k[2].y = f.y + -1 * (k[2].y - f.y);
                c.j.top >= d && c.j[R] <= e ? (i.j = c.j, i.Sb = c.Sb) : (i.j[R] > e && (i.j.top -=
                    i.j[R] - e, Xa(i.j, e)), i.j.top < d && (Xa(i.j, i.j[R] + (d - i.j.top)), i.j.top = d), delete i.Sb)
            }
            f = {};
            e = g / 1.618;
            e = new xt(i.j.top + e, i.j[T] - e, i.j[R] - e, i.j[F] + e);
            d = [];
            A = e.top;
            for (c = 0; c < a.W[L]; c++) {
                m = a.W[c];
                k = {
                    ob: m,
                    data: {}
                };
                switch (m[I]) {
                    case hm:
                        m = m[C];
                        p = k[C];
                        q = By(m, b);
                        0 < c && (A += q.pf);
                        m[Mc] && (p.background = {
                            j: new xt(A - q.pf / 2, i.j[T], A + q[S] + q.pf, i.j[F])
                        });
                        E = [];
                        w = e[F];
                        for (t = 0; t < m.gc[L]; t++) {
                            var K = {},
                                V = Cy(m.gc[t], b);
                            0 < t && (w += V.Fm);
                            var G = A + (q[S] - V[S]) / 2;
                            K.j = new xt(s[B](G), s[B](w + V[y]), s[B](G + V[S]), s[B](w));
                            E[x](K);
                            w += V[y]
                        }
                        p.gc =
                            E;
                        A += q[S];
                        break;
                    case so:
                        m = m[C], p = A + g + m.a.I / 2, k[C].Wa = new qu(i.j[F], p, i.j[T], p), A += 1.5 * g + m.a.I / 2
                }
                d[x](k)
            }
            f.W = d;
            return {
                outline: i,
                Ch: f
            }
        }

        function By(a, b) {
            for (var c = 0, d = 0, e = 0, f = 0; f < a.gc[L]; f++) var g = Cy(a.gc[f], b),
                c = c + (g[y] + (0 < f ? g.Fm : 0)),
                d = s.max(d, g[S]),
                e = s.max(e, g[S] / 2 + g.pf);
            return {
                width: c,
                height: d,
                pf: e - d / 2
            }
        }

        function Cy(a, b) {
            switch (a[I]) {
                case Ap:
                    return {
                        width: b ? b(a[C][z], a[C][O])[y] : 0,
                        height: a[C][O][N],
                        pf: a[C][O][N] / 3.236,
                        Fm: a[C][O][N] / 3.236
                    };
                case ep:
                    var c = a[C].size;
                    return {
                        width: c,
                        height: c,
                        pf: c,
                        Fm: c
                    }
            }
        };

        function Dy(a, b) {
            var c = a.sc(Wg, b),
                d = [],
                e = a.Uh(Vg);
            if (e !== l)
                for (var f = {}, g = 0; g < e; g++) {
                    var i = a.O(Ug + g + Ne);
                    i === l && h(u('Missing mandatory ID for action at index "' + g + Hd));
                    f[i] && h(u('Duplicate action ID "' + i + '": unique ID expected'));
                    f[i] = j;
                    d[x]({
                        id: i,
                        text: a.ud(Ug + g + Qe)
                    })
                }
            this.Gs = [];
            for (g = 0; g < e; g++) f = d[g], this.Gs[x](zy(f[z], c, l, l, l, f.id))
        }
        Dy[M].yr = function() {
            return ys(this.Gs)
        };
        Dy[M].Nw = function(a, b) {
            a.Ch = a.Ch || {};
            var c = a.Ch;
            c.W = c.W || {};
            c = c.W;
            c[b] = c[b] || {};
            c = c[b];
            c.ob = c.ob || {};
            return c.ob
        };
        Dy[M].Cf = function(a, b, c) {
            if (!a.zh) {
                var d = b.z.Ph;
                d != l && (a = Wr(a.Ch.W, function(a) {
                    return a.ob[C].id == d
                }), c = this.Nw(c, a), ta(c, c[C] || {}), c[C].background = c[C][Mc] || {}, c[C][Mc].a = xv(Td))
            }
        };

        function Ey(a, b, c, d) {
            b = a.sc(aq, {
                eb: b.eb,
                fontSize: b[N]
            });
            this.wg = a.$(Zp, c == vi);
            this.w = b;
            a = xs(b);
            a[lc] == l && (a.bold = j);
            this.bk = a;
            this.Vd = d || l
        }
        Ey[M].hw = function(a, b, c, d, e) {
            a = {
                W: [zy(a.d[c].c[d].xa[rc][e].qa[nb], this.w)]
            };
            b && this.Oh(a);
            return a
        };
        Ey[M].Ax = function(a, b, c, d) {
            a = {
                W: [zy(a.r[c].xa[rc][d].qa[nb], this.w)]
            };
            b && this.Oh(a);
            return a
        };
        Ey[M].lr = function() {
            return this.Vd != l && 0 < this.Vd.yr()[L]
        };

        function Fy(a, b, c, d) {
            Ey[P](this, a, b, c, d)
        }
        Ar(Fy, Ey);
        Y = Fy[M];
        Y.Sq = function(a, b, c, d) {
            c = a.d[c];
            d = c.c[d].qa;
            a = {
                W: []
            };
            if (d.f) {
                d[oc] && this.tm(a, d[oc]);
                for (c = 0; c < d.f[L]; c++) {
                    var e = d.f[c];
                    this.Zv(a, e[oc], e[ub])
                }
            } else d.$l ? (this.tm(a, d.$l), this.lf(a, d.ne, d[nb], j, this.wg, c)) : d.ne ? this.lf(a, d.ne, d[nb], j, this.wg, c, j) : this.lf(a, l, d[nb], n, this.wg, c);
            b && this.Oh(a);
            return a
        };
        Y.qr = function(a, b, c) {
            var a = a.d[c],
                c = a.qa,
                d = {
                    W: []
                };
            c.ne ? this.lf(d, c.ne, c[nb], j, this.wg, a, j) : this.lf(d, l, c[nb], n, this.wg, a);
            b && this.Oh(d);
            return d
        };
        Y.Er = function(a, b, c) {
            var d = a.r[c].qa,
                e = {
                    W: []
                };
            if (d && d[nb]) this.lf(e, l, d[nb], n, n);
            else {
                var f = 0,
                    g = 1,
                    i = a.d[L];
                cy(a) && (f = a.d[L] - 1, i = g = -1);
                for (var k = l; f != i; f += g) {
                    var m = a.d[f];
                    k != m.Hc && (k = m.Hc, d = a.r[c].Wk[k], /^[\s\xa0]*$/ [eb](d == l ? U : na(d)) || this.tm(e, d));
                    m.c[c] && (m.c[c].qa && m.c[c].qa[nb]) && (d = m.c[c].qa, this.lf(e, d.ne, d[nb], j, this.wg, m))
                }
            }
            b && this.Oh(e);
            return e
        };
        Y.tm = function(a, b) {
            var c = zy(b, this.bk);
            a.W[x](c)
        };
        Y.lf = function(a, b, c, d, e, f, g) {
            g = g != l ? g : n;
            d = d ? this.bk : this.w;
            c = c[zc](td);
            f = e ? f[zb][zb] : l;
            b = g && b != l ? zy(b, this.w, l, l, f) : zy(c[0], d, b, this.w, f);
            a.W[x](b);
            for (g = g ? 0 : 1; g < c[L]; g++) f = e ? X : l, b = zy(c[g], d, l, l, f), a.W[x](b)
        };
        Y.Zv = function(a, b, c) {
            b && (b = zy(c, this.bk, b, this.w), a.W[x](b))
        };
        Y.Oh = function(a) {
            this.lr() && (a.W[x]({
                type: so,
                data: {
                    a: yv(fe, 1)
                }
            }), as(a.W, this.Vd.yr()))
        };

        function Gy(a, b, c) {
            Ey[P](this, a, b, c);
            this.Mq = this.bk;
            this.Oj = xs(this.w);
            xa(this.Oj, Nd);
            Ra(this.Oj, this.Oj[N] - 2)
        }
        Ar(Gy, Ey);
        Gy[M].Sq = function(a, b, c, d) {
            b = a.d[c];
            a = b.c[d].qa;
            d = [];
            b.Fi || (b = zy(b[oc], this.Mq), d[x](b));
            b = zy(a[nb], this.Mq);
            d[x](b);
            a = zy(a.$l, this.Oj);
            d[x](a);
            return {
                W: d
            }
        };
        Gy[M].qr = function() {
            return {
                W: []
            }
        };
        Gy[M].Er = function() {
            return {
                W: []
            }
        };

        function Hy(a) {
            return new ru(s[B](a.x), s[B](a.y))
        }

        function Iy(a) {
            return Sr(arguments, su, new ru(0, 0))
        }

        function Jy(a) {
            return Sr(arguments, function(a, c) {
                return new qs(a[y] + c[y], a[S] + c[S])
            }, new qs(0, 0))
        }

        function Ky(a, b, c) {
            return new ru(s.cos(a) * b, s.sin(a) * c)
        }

        function Ly(a) {
            return new ru(a[0], a[1])
        }

        function My(a, b) {
            return Rr([
                [a.x - b[y] / 2, a.y - b[S] / 2],
                [a.x + b[y] / 2, a.y - b[S] / 2],
                [a.x + b[y] / 2, a.y + b[S] / 2],
                [a.x - b[y] / 2, a.y + b[S] / 2]
            ], Ly)
        };

        function Ny(a, b, c) {
            this.yg = b;
            this.kf = new xt(0, c[y], c[S], 0);
            b = b.lr() ? ci : dk;
            this.Zk = a.U(bq, Xv, b)
        }
        Y = Ny[M];
        Y.pk = function(a) {
            if (a.J == rn) {
                var b = a.ia.$b;
                return new $(b.x, b.y)
            }
            b = ts(a.Ja);
            b = b.ga != l ? b.ga.l : s.min(b.ac, b.xb);
            a = ts(a.va);
            a = a.ga != l ? a.ga.l : s.max(a.ac, a.xb);
            return new $(b, a)
        };
        Y.Zt = function(a) {
            this.kf = a
        };
        Y.um = function(a, b, c) {
            var d = b.h,
                b = by(b, c),
                a = this.pk(a),
                b = 1 + s[lb](b / s[Pb](2));
            return new $(d.x + (d.x >= a.x ? b : -b), d.y + (d.y <= a.y ? -b : b))
        };
        Y.Hw = function(a, b, c) {
            var d = b.h,
                b = this.um(a, b, c);
            if (b.x < a.b[F] || b.x > a.b[T]) b.x += 2 * (d.x - b.x);
            if (b.y < a.b.top || b.y > a.b[R]) b.y += 2 * (d.y - b.y);
            return b
        };
        Y.Gw = function(a, b) {
            var c = b.h.$g || b.h,
                d = this.pk(a),
                c = new $(c[F] + (c[F] < d.x ? 0 : c[y]), c.top + (c.top < d.y ? 0 : c[S]));
            this.ms(a, c);
            return c
        };
        Y.Iw = function(a, b) {
            var c = b.h[Fc],
                d = this.pk(a),
                c = new $(c[F] + c[y] > d.x ? c[F] + c[y] : c[F], c.top < d.y ? c.top : c.top + c[S]);
            this.ms(a, c);
            return c
        };
        Y.hx = function(a, b) {
            var c = su(a.ia.$b, Ky(((b.zd ? 45 : (b.fa + b.ca) / 2) / 180 - 0.5) * s.PI, a.ia.ra, a.ia.wa)),
                c = new $(c.x + b[Zb].x, c.y + b[Zb].y);
            this.Mx(a, c);
            return c
        };
        Y.Bq = function(a, b) {
            var c = b.f[0],
                d = b.u[N];
            return 270 == b.Dd ? new $(c.x + d, c.y - c[L] / 2) : new $(c.x + c[L] / 2, c.y - d)
        };
        Y.pw = function(a, b, c) {
            var b = a.d[b],
                d = b[I];
            switch (a.J) {
                case W:
                    switch (d) {
                        case Jh:
                        case jp:
                            return this.Gw(a, b.c[c]);
                        case hm:
                        case wh:
                            return this.um(a, b.c[c], b);
                        case ui:
                            return this.Iw(a, b.c[c])
                    }
                case no:
                    return this.um(a, b.c[c], b);
                case ji:
                    return this.Hw(a, b.c[c], b)
            }
        };
        Y.ms = function(a, b) {
            var c = a.b;
            b.x = is(b.x, c[F], c[T]);
            b.y = is(b.y, c.top, c[R])
        };
        Y.Mx = function(a, b) {
            b.x = is(b.x, 0, a[y]);
            b.y = is(b.y, 0, a[S])
        };
        Y.Ux = function(a, b) {
            var c = this.yg.w[N];
            return new $(b.x - 4 * ts(a.Ja).Tc * c, b.y - ts(a.va).Tc * c)
        };
        Y.uw = function(a, b) {
            var c = b[F],
                d = b[y],
                e = c + d,
                f = b.top,
                g = b[S],
                i = f + g,
                k = this.pk(a);
            return a[Wb] == il ? i > k.y ? new $(c + d / 2, i - 0.1) : new $(c + d / 2, f + 0.1) : c < k.x ? new $(c + 0.1, f + g / 2) : new $(e - 0.1, f + g / 2)
        };
        Y.ix = function(a, b) {
            var c = su(a.ia.$b, Ky(((b.zd ? 45 : (b.fa + b.ca) / 2) / 180 - 0.5) * s.PI, a.ia.ra - 0.1, a.ia.wa - 0.1));
            return new $(c.x + b[Zb].x, c.y + b[Zb].y)
        };
        Y.Cq = function(a, b) {
            var c = b.f[0],
                d = b.u[N];
            return 270 == b.Dd ? new $(c.x + d / 2, c.y) : new $(c.x, c.y - d / 2)
        };
        Y.qw = function(a, b, c) {
            var d = a.d[b],
                b = d[I],
                c = d.c[c].h;
            return b == Jh || b == jp || b == ui ? this.uw(a, c.$g || c[Fc] || c) : new $(c.x, c.y)
        };
        Y.mk = function(a, b, c, d, e, f) {
            if (c !== l && d !== l && e !== l) return this.aB(a, b, c, d, e);
            if (c !== l && d !== l) return this.bB(a, b, c, d);
            if (c !== l && d === l) return this.dB(a, b, c);
            if (c === l && d !== l && e !== l) return this.ZA(a, b, d, e);
            if (c === l && d !== l) return this.$A(a, b, d, f)
        };
        Y.bB = function(a, b, c, d) {
            var e = this.pw(a, c, d),
                f = this.qw(a, c, d),
                g = a.d[c].c[d].qa;
            if (g.af && g.Id) return this.Th(g[nb], f);
            b = this.yg.Sq(a, b, c, d);
            return Ay(b, a.wb, j, e, this.kf, f, aa, a.cg)
        };
        Y.dB = function(a, b, c) {
            var d = a.d[c],
                e = this.hx(a, d),
                d = this.ix(a, d),
                f = a.d[c].qa;
            if (f.af && f.Id) return this.Th(f[nb], d);
            b = this.yg.qr(a, b, c);
            return Ay(b, a.wb, j, e, this.kf, d, aa, a.cg)
        };
        Y.aB = function(a, b, c, d, e) {
            var f = a.d[c].c[d].xa[rc][e],
                g = f.qa;
            if (!g) return l;
            var i = this.Bq(a, f),
                f = this.Cq(a, f);
            if (g.af && g.Id) return this.Th(g[nb], f);
            b = this.yg.hw(a, b, c, d, e);
            return Ay(b, a.wb, n, i, this.kf, f, aa, a.cg)
        };
        Y.$A = function(a, b, c, d) {
            var e = this.Ux(a, d),
                f = a.r[c].qa;
            if (f && f.af && f.Id) return this.Th(f[nb], d);
            b = this.yg.Er(a, b, c);
            return Ay(b, a.wb, n, e, this.kf, d, aa, a.cg)
        };
        Y.Th = function(a, b) {
            return {
                zh: {
                    content: a,
                    Ud: {
                        className: zk
                    }
                },
                ap: j,
                bp: b,
                anchor: b,
                $o: this.kf,
                cp: 20,
                margin: 5
            }
        };
        Y.ZA = function(a, b, c, d) {
            var e = a.r[c].xa[rc][d],
                f = e.qa;
            if (!f) return l;
            var g = this.Bq(a, e),
                e = this.Cq(a, e);
            if (f.af && f.Id) return this.Th(f[nb], e);
            b = this.yg.Ax(a, b, c, d);
            return Ay(b, a.wb, n, g, this.kf, e, aa, a.cg)
        };

        function Oy(a, b, c, d, e) {
            d != Mj && (this.Vd = new Dy(a, c));
            c = this.CA(a, c, d, e);
            this.je = new Ny(a, c, b)
        }
        Oy[M].Xq = function(a, b) {
            var c = {};
            b.o.vg != l && this.xz(a, b, c);
            this.Cf(a, b, c);
            return c
        };
        Oy[M].CA = function(a, b, c, d) {
            return c == Mj ? new Gy(a, b, d) : new Fy(a, b, d, this.Vd)
        };
        Oy[M].xz = function(a, b, c) {
            c.o = c.o || {};
            var d = a.o,
                e = b.o.vg;
            c.o.Vc = d.ta[e];
            var b = e + 1 + Ue + d.ta[L],
                f = d.Lh.gm,
                g = 0 < e,
                d = d.Lh.em,
                a = e < a.o.ta[L] - 1;
            c.o.Lh = {
                gm: {
                    a: g ? f.Fd.Nd : f.Fd.Cj,
                    Nd: g
                },
                em: {
                    a: a ? d.Fd.Nd : d.Fd.Cj,
                    Nd: a
                },
                fm: {
                    text: b,
                    f: {
                        "0": {
                            text: b
                        }
                    }
                }
            }
        };

        function Py(a) {
            this.selected = new hw;
            this.z = {
                Qb: l,
                Bd: l,
                nd: l
            };
            this.qb = {
                z: l,
                Ni: l
            };
            this.o = {
                z: {
                    ob: l
                },
                vg: l
            };
            this.kc = {
                z: {
                    Ph: l
                }
            };
            Na(this, {
                position: l,
                Vp: l
            });
            if (a && (this[rb][Tb](a[rb]), a.z && (this.z = Qy(this.z, a.z)), a.qb && (this.qb = Qy(this.qb, a.qb)), a.o && (this.o = Qy(this.o, a.o)), a.kc)) this.kc = Qy(this.kc, a.kc)
        }
        Sa(Py[M], function() {
            var a = new Py;
            a.selected = this[rb][Oc]();
            a.z = Kv(this.z);
            a.qb = Kv(this.qb);
            a.o = Kv(this.o);
            a.kc = Kv(this.kc);
            Na(a, Kv(this[qc]));
            return a
        });
        Py[M].Yd = function(a, b) {
            var c = jr(b) ? b : n;
            return this[rb].Yd(a[rb]) && Jv(this.z, a.z) && Jv(this.qb, a.qb) && Jv(this.o, a.o) && Jv(this.kc, a.kc) && (c || Jv(this[qc], a[qc]))
        };

        function Qy(a, b) {
            var c = new jw(2);
            c.vb(0, a);
            c.vb(1, b);
            return c[nd]()
        };

        function Ry(a, b, c, d, e, f) {
            Oy[P](this, a, b, c, d, e);
            var g = a.$(Tj, j);
            this.Qz = g;
            this.Ws = vw(f, function(b) {
                return a.$(Bo + b + Ke, g)
            });
            this.zy = Tr(this.Ws, mw);
            this.Si = j
        }
        Ar(Ry, Oy);
        Y = Ry[M];
        Y.Cf = function(a, b, c) {
            this.Si = j;
            switch (a.Rf) {
                case Gj:
                    this.eo(a, b, c);
                    break;
                case Mj:
                    this.IA(a, b, c)
            }
        };
        Y.Zq = function(a, b) {
            return a.Yd(b, this.Si)
        };
        Y.Td = function(a) {
            return this.Ws[a]
        };
        Y.gl = function(a) {
            return a != l ? this.Td(a) : this.Qz
        };
        Y.ag = function(a, b, c) {
            a.d = a.d || {};
            a = a.d;
            a[b] = a[b] || {};
            b = a[b];
            b.c = b.c || {};
            b = b.c;
            b[c] = b[c] || {};
            return b[c]
        };
        Y.Wi = function(a, b, c) {
            if (b != l) return a = this.ag(a, b, c), a.xa = a.xa || {}, a.xa;
            a = this.es(a, c);
            a.xa = a.xa || {};
            return a.xa
        };
        Y.Pi = function(a, b) {
            a.d = a.d || {};
            var c = a.d;
            c[b] = c[b] || {};
            return c[b]
        };
        Y.es = function(a, b) {
            a.r = a.r || {};
            var c = a.r;
            c[b] = c[b] || {};
            return c[b]
        };
        Y.bj = function(a, b) {
            a.o = a.o || {};
            var c = a.o;
            c.Vc = c.Vc || {};
            c = c.Vc;
            c[b] = c[b] || {};
            return c[b]
        };
        Y.eo = function(a, b, c) {
            for (var d = this.je.Zk, e = d == qo || d == ci, d = d == dk || d == ci && 0 == b[rb][vc]()[L], f = b[rb].jj(), g = 0; g < f[L]; ++g) {
                var i = f[g],
                    k = i.column,
                    i = i.row,
                    m = a.Sf[k],
                    k = m.ba,
                    i = a.Me[i];
                switch (m.Sk) {
                    case xj:
                        if (!this.Td(k)) break;
                        this.fj(a, k, i, c);
                        e && this.sh(a, k, i, c, b.kc);
                        break;
                    case gh:
                        if (!this.gl(k)) break;
                        m = m.Ok;
                        this.Nv(a, k, i, m, c);
                        e && this.fl(a, k, i, m, c)
                }
            }
            f = b[rb].uq();
            for (g = 0; g < f[L]; ++g) k = f[g], m = a.Sf[k], k = m.ba, k != l && this.Td(k) && this.Qv(a, k, c);
            f = b[rb].xm();
            for (g = 0; g < f[L]; ++g) i = f[g], i = a.Me[i], a.J == ji ? (k = 0, this.Td(k) &&
                (this.fj(a, k, i, c), e && this.sh(a, k, i, c, b.kc))) : (this.Pv(a, i, c), e && this.vq(a, b[qc].Vp, i, c, b.kc));
            e = b.z.Qb;
            g = b.z.Bd;
            g != l ? this.Td(e) && (this.vl(a, e, g, c), d && this.sh(a, e, g, c), this.Ov(a, e, g, c)) : e != l && this.Td(e) && this.xq(a, e, c);
            e = b.o.z.ob;
            e != l && this.Td(e) && this.xq(a, e, c);
            e = b.z.nd;
            e != l && (this.Lv(a, e, c), d && (this.vq(a, b[qc][pc], e, c), this.Si = n));
            if (e = b.qb.Ni) e = this.Wi(c, e.ba, e.Uk), e.hd = e.hd || {}, e.hd.Nk = j;
            if ((e = b.qb.z) && d) d = a.Sf[e.he], b = d.ba, e = a.Me[e.ie], d = d.Ok, this.gl(b) && this.fl(a, b, e, d, c)
        };
        var Sy = [0.25, 0.1, 0.05],
            Ty = [0.3, 0.1, 0.05],
            Uy = [0.3, 0.15, 0.05];
        Y = Ry[M];
        Y.vl = function(a, b, c, d) {
            var e = a.d[b],
                f = e.c[c];
            if (f && !f.Zb && f.h && (!Zx(e) || 0 != e[qd] || $x(f, e))) {
                a = e[I] == Jh ? Uy : Sy;
                d = this.ag(d, b, c);
                d.Pc = {};
                b = d.Pc;
                b.Ma = [];
                for (c = 0; c < a[L]; c++) {
                    var g = new vv({
                        fill: X,
                        stroke: Oh,
                        jd: a[c],
                        Aa: 1
                    });
                    b.Ma[x]({
                        a: g
                    })
                }
                switch (e[I]) {
                    case Jh:
                    case jp:
                    case ui:
                        e = f.h.$g || f.h[Fc] || f.h;
                        f = new zt(e[F], e.top, e[y], e[S]);
                        for (c = 0; c < a[L]; c++) e = b.Ma[c].a.I, b.Ma[c].rect = new zt(f[F] - e / 2, f.top - e / 2, f[y] + e, f[S] + e), Aa(f, f[F] - e), f.top -= e, pa(f, f[y] + 2 * e), $a(f, f[S] + 2 * e);
                        break;
                    case hm:
                    case wh:
                    case no:
                    case ni:
                        Ia(d,
                            j);
                        b.x = f.h.x;
                        b.y = f.h.y;
                        d.Eb ? (e = d.Eb, f = e.Pb + e.a.I / 2) : f = by(f, e);
                        for (c = 0; c < a[L]; c++) e = b.Ma[c].a.I, b.Ma[c].Pb = f + e / 2, f += e
                }
            }
        };
        Y.xq = function(a, b, c) {
            var d = a.d[b],
                e;
            if (Zx(d) && 0 < d[qd]) {
                e = this.Pi(c, b);
                e.Pc = {};
                e = e.Pc;
                e.Ma = [];
                var f;
                f = d[I] == wh ? a.vd ? ey(d) : dy(d, n) : dy(d, a.ae);
                f = f.eq();
                for (var g = d.Pa.I / 2, i = 0; i < Ty[L]; i++) {
                    var k = new vv({
                            fill: X,
                            stroke: Oh,
                            jd: Ty[i],
                            Aa: 1
                        }),
                        m = ny(f, g + k.I / 2);
                    e.Ma[x]({
                        a: k,
                        path: m
                    });
                    g += k.I
                }
            }
            e = (e = (e = c.d) && e[b]) && e.c;
            for (f = 0; f < d.c[L]; ++f) g = d.c[f], !g || g.Zb || ($x(g, d) || e && e[f] && e[f].visible) && this.vl(a, b, f, c)
        };
        Y.Lv = function(a, b, c) {
            for (var d = a.d, e = 0; e < d[L]; e++) this.Td(e) && this.vl(a, e, b, c)
        };
        Y.fj = function(a, b, c, d) {
            var e = a.d[b],
                f = e.c[c];
            if (f && !f.Zb && f.h && (!Zx(e) || 0 != e[qd] || $x(f, e))) {
                var g = Yx(f, e),
                    b = this.ag(d, b, c);
                b.Eb = {};
                c = b.Eb;
                a = a.Di;
                d = 1;
                a == l && (a = Tq, d = 0);
                switch (e[I]) {
                    case Jh:
                    case jp:
                    case ui:
                        c.a = wv[Oc]();
                        c.a.Gc(a);
                        e[I] == ui && f.no.Y == a && c.a.Gc(g.Y);
                        c.a.Zg(d);
                        c.a.Re(1);
                        e = f.h.$g || f.h[Fc] || f.h;
                        g = g.I;
                        f = c.a.I;
                        c.rect = new zt(e[F] + g / 2 + 1.5 + f / 2, e.top + g / 2 + 1.5 + f / 2, e[y] - (g + 3 + f), e[S] - (g + 3 + f));
                        (0 >= c[Fc][y] || 0 >= c[Fc][S]) && delete b.Eb;
                        break;
                    case hm:
                    case wh:
                    case no:
                    case ni:
                        Ia(b, j), c.x = f.h.x, c.y = f.h.y, c.a =
                            new vv({
                                fill: a,
                                Cb: d,
                                stroke: g.Y,
                                Aa: 1
                            }), c.Pb = by(f, e) + 1.5 + c.a.I / 2
                }
            }
        };
        Y.Qv = function(a, b, c) {
            var d = a.d[b];
            if ((d[I] == hm || d[I] == wh || d[I] == no) && 0 < d[qd]) {
                var e = this.Pi(c, b);
                e.Eb = {};
                var e = e.Eb,
                    f;
                f = d[I] == wh ? a.vd ? ey(d) : dy(d, n) : dy(d, a.ae);
                f = f.eq();
                e.a = new vv({
                    stroke: d.Pa.Ob,
                    Aa: s.min(1, d.Pa.I / 2)
                });
                e.path = ny(f, -(d.Pa.I / 2 + 2 + e.a.I / 2))
            }
            for (e = 0; e < d.c[L]; ++e) f = d.c[e], !f || f.Zb || $x(f, d) && this.fj(a, b, e, c)
        };
        Y.Pv = function(a, b, c) {
            for (var d = a.d, e = 0; e < d[L]; ++e) this.Td(e) && this.fj(a, e, b, c)
        };
        Y.sh = function(a, b, c, d, e) {
            d = this.ag(d, b, c);
            a = this.je.mk(a, e != l, b, c, l);
            d.G = a;
            e && this.Vd.Cf(a, e, d.G)
        };
        Y.vq = function(a, b, c, d, e) {
            b && this.zy && (d = this.es(d, c), a = this.je.mk(a, e != l, l, c, l, b), d.G = a, e && this.Vd.Cf(a, e, d.G))
        };
        Y.fl = function(a, b, c, d, e, f) {
            e = this.Wi(e, b, c);
            e.labels = e[rc] || {};
            e = e[rc];
            e[d] = e[d] || {};
            e = e[d];
            a = this.je.mk(a, f != l, b, c, d);
            e.Gh = a;
            f && a && this.Vd.Cf(a, f, e.Gh)
        };
        Y.Ov = function(a, b, c, d) {
            if (a.Wc) {
                var e = a.Wc,
                    a = wy(e[dd], e.xh, [{
                        value: a.d[b].c[c].Fb[zb]
                    }], a.wb);
                d.Wc = {
                    definition: a
                }
            }
        };
        Y.Nv = function(a, b, c, d, e) {
            a = this.Wi(e, b, c);
            a.labels = a[rc] || {};
            a = a[rc];
            a[d] = a[d] || {};
            d = a[d];
            d.u = d.u || {};
            d.u.bold = j
        };
        Y.IA = function(a, b, c) {
            var d = b.z.Qb,
                e = b.z.Bd;
            a.o && this.je.Zt(new xt(0, a.o.Vk[F], a[S], 0));
            var f = this.je.Zk;
            if (d != l && e == l) {
                for (var g = b[qc][pc].x, i = a.d[d].c, e = Qr(i, function(a) {
                        return a != l
                    }), k = 0; k < e[L] && e[k].h.x < g;) k++;
                0 == k ? e = 0 : k == e[L] ? e = e[L] - 1 : (g = g < ms(e[k - 1].h.x, e[k].h.x) ? k - 1 : k, e = Or(i, e[g]));
                this.Si = n
            }
            i = l;
            if (e != l) {
                i = this.ag(c, d, e);
                Ia(i, j);
                f == dk && this.sh(a, d, e, c);
                a.o && (i = this.bj(c, d), i.ka = {
                    v: a.mo
                });
                for (i = 0; i < a.d[L]; i++) i != d && (a.o && (e = this.bj(c, i), e.m = {
                        u: {
                            color: Sd
                        }
                    }), e = this.Pi(c, i), g = a.d[i], e.Pa = g.Pa[Oc](),
                    e.Pa.Zg(0.3))
            }
            if (d = b.qb.Ni) d = this.Wi(c, d.ba, d.Uk), d.hd = d.hd || {}, d.hd.Nk = j;
            if (e = b.qb.z) i = a.Sf[e.he], d = i.ba, e = a.Me[e.ie], i = i.Ok, this.gl(d) && this.fl(a, d, e, i, c);
            if (a.o && a.o[pc] == Il && b.o.z.ob != l) {
                b = b.o.z.ob;
                i = this.bj(c, b);
                i.ka = {
                    v: a.mo
                };
                for (var d = a.d[b].c, m, i = d[L] - 1; 0 <= i; i--)
                    if ((e = d[i]) && !e.Zb && e.h && (new xt(a.b.top, a.b[T], a.b[R], a.b[F]))[fd](new $(e.h.x, e.h.y))) {
                        m = i;
                        break
                    }
                m != l && (i = this.ag(c, b, m), Ia(i, j), f == dk && this.sh(a, b, m, c));
                for (i = 0; i < a.d[L]; i++) i != b && (e = this.bj(c, i), e.m = {
                        u: {
                            color: Sd
                        }
                    }, e = this.Pi(c, i),
                    g = a.d[i], e.Pa = g.Pa[Oc](), e.Pa.Zg(0.3))
            }
        };

        function Vy(a, b, c, d) {
            this.jt = s.pow(a, 2);
            this.oA = s.pow(b, 2);
            this.nA = b;
            this.kt = (this.Wg = c ? new mv(d[rd](c[Q]), d[rd](c.end)) : l) ? this.Wg.end - this.Wg[Q] : l;
            this.pA = d
        }
        Vy[M].Qw = function(a) {
            if (!this.kt || a == l) return this.nA;
            a = this.pA[rd](a);
            a = is(a, this.Wg[Q], this.Wg.end);
            return s[B](s[Pb](this.jt + (a - this.Wg[Q]) / this.kt * (this.oA - this.jt)))
        };
        var Wy = {},
            Xy = n;

        function Yy(a) {
            var b = {};
            xa(b, a[zb] || a);
            var c = jv(b[zb]);
            c == X ? (b.rg = a.darker || c, b.Uj = a.lighter || c) : (c = dv(c), b.rg = a.darker || bv(gv([0, 0, 0], c, 0.25)), b.Uj = a.lighter || bv(gv([255, 255, 255], c, 0.25)));
            return b
        };

        function Zy(a, b, c, d) {
            this.D = a;
            this.i = b;
            this.g = d;
            this.pa = c;
            this.w = this.i.sc(mi, {
                eb: d.ed,
                fontSize: d.Fc,
                fb: d.Je
            });
            this.Ob = this.i.fd(li, Zd);
            this.Hu = this.i.Uf(ki, 0.8);
            this.cl = 0;
            this.jh = 1;
            this.kh = 2;
            this.ke = 3;
            this.le = 4;
            this.yd = this.Go = this.Fo = this.Io = this.Ho = U;
            this.Jl = this.i.O(mj, Qx);
            this.Gu = Yy(this.Jl[0])[zb];
            this.zo = this.ll = this.Yk = this.Xk = this.bg = this.Xf = l;
            this.$k()
        }
        Y = Zy[M];
        Y.$k = function() {
            function a(a, b, d) {
                if (c[tb]() <= a) return U;
                var e = c[Mb](a);
                b && !(0 <= Or(d, e)) && h(u("Column " + a + " must be of type " + d[pd](Ue)));
                !b && 0 <= Or(d, e) && h(u("Column " + a + " cannot be of type " + d[pd](Ue)));
                return e
            }
            var b = this.g,
                c = this.D,
                d = c[tb]();
            3 > d && h(u("Data table should have at least 3 columns"));
            a(this.cl, j, [op]);
            var e = a(this.jh, n, [op]),
                f = a(this.kh, n, [op]);
            this.Ho = c[Jb](this.jh);
            this.Io = c[Jb](this.kh);
            this.ke < d ? (this.yd = a(this.ke, j, [Um, op]), this.yd == op && (this.Xf = {}, this.bg = []), this.Fo = c[Jb](this.ke)) :
                this.ke = l;
            var g = n;
            this.le < d ? (a(this.le, j, [Um]), this.Go = c[Jb](this.le), g = this.i.$(ap, j)) : this.le = l;
            b.r = [];
            b.Me = {};
            for (d = 0; d < c[mc](); d++) {
                var i = c.getTableRowIndex(d);
                b.Me[i] = d
            }
            b.d = [{
                type: ni,
                Do: j,
                au: g,
                c: [],
                VB: this.Xf,
                WB: this.bg
            }];
            b.ph = e;
            b.qh = [f];
            b.gb = {};
            b.gb.bubbles = 1;
            b.wd = []
        };
        Y.pt = function() {
            return this.yd == Um
        };
        Y.Su = function(a, b) {
            for (var c = this.D, d = 0; d < c[mc](); d++) {
                var e = c[J](d, this.jh),
                    f = c[J](d, this.kh),
                    e = a.n.jf(e),
                    f = b.n.jf(f);
                e != l && a.zg(e);
                f != l && b.zg(f)
            }
        };
        Y.Ku = function(a, b, c) {
            for (var d = 0; d < this.D[mc](); d++) {
                var e = this.xu(a, b, d);
                this.g.d[0].c[x](e)
            }
            if (this.yd == Um) {
                d = this.i;
                b = this.Xk;
                a = l;
                if ((e = d.O(ij)) && 0 < e[L]) {
                    1 == e[L] && (e = [e[0], e[0]]);
                    b && (e[0] == l && (e[0] = b[Q]), e[e[L] - 1] == l && (e[e[L] - 1] = b.end));
                    e[0] == l && h(u(jj));
                    for (a = 1; a < e[L]; a++) e[a] == l && h(u(jj)), e[a] < e[a - 1] && h(u("colorAxis.values must be a monotonically increasing series"));
                    a = e
                } else {
                    var e = d.Hd(hj),
                        f = d.Hd(gj);
                    e != l && f != l && e > f && h(u("colorAxis.minValue (" + e + ") must be at most colorAxis.maxValue (" + f + we));
                    (b = rv(b, e, f)) && (a = [b[Q], b.end])
                }
                b = d.O(mj);
                b = d.O(cj, b);
                d = vy(a, b);
                this.ll = new sy(d.Sl, d.Rl);
                c.yu(this.ll)
            } else if (this.yd == op)
                for (d = 0; d < this.bg[L]; d++) c = this.bg[d], a = this.Xf[c], a.Fi && this.g.wd[x]({
                    index: d,
                    id: c,
                    text: a.Pk,
                    a: new vv({
                        fill: a[zb]
                    }),
                    v: j
                });
            a = this.i;
            b = this.Yk;
            c = a.R(Qo);
            d = a.R(Oo);
            c > d && h(u("sizeAxis.minSize (" + c + ") must be at most sizeAxis.maxSize (" + d + we));
            e = a.Hd(Ro);
            f = a.Hd(Po);
            e != l && f != l && e > f && h(u("sizeAxis.minValue (" + e + ") must be at most sizeAxis.maxValue (" + f + we));
            b = rv(b, e, f);
            a = ex(a, No, So);
            a = fx(a, NaN, []);
            this.zo = new Vy(c, d, b, a)
        };
        Y.xu = function(a, b, c) {
            var d = this.D,
                e = d[J](c, this.cl),
                f = d[kd](c, this.cl),
                g = d[J](c, this.jh),
                i = d[J](c, this.kh),
                k = l;
            if (this.ke != l && (k = d[J](c, this.ke), k == l)) return l;
            var m = l;
            if (this.le != l && (m = d[J](c, this.le), m == l)) return l;
            d = this.pa(f, this.w)[y];
            if (this.yd == Um) this.Xk = qv(this.Xk, k);
            else if (this.yd == op) {
                var p = k,
                    q = this.Xf[p];
                if (!q) {
                    var q = Bo + p + Ge,
                        t = this.i.fd(q + aj, this.Jl[this.bg[L] % this.Jl[L]]),
                        t = Yy(t),
                        w = this.i.$(q + Sq, j),
                        q = this.i.ud(q + Hl, p),
                        q = {
                            color: t[zb],
                            Fi: w,
                            Pk: q
                        };
                    this.Xf[p] = q;
                    this.bg[x](p)
                }
            }
            this.Yk = qv(this.Yk,
                m);
            g = a.n.ha(g);
            i = b.n.ha(i);
            if (g === l || i === l) return l;
            a.Rc(g) && b.Rc(i) && (a.V(g), b.V(i));
            a = this.Ll(c, f);
            return {
                id: e,
                text: f,
                du: d,
                u: this.w,
                qa: a,
                Fb: {
                    x: g,
                    y: i,
                    color: k,
                    size: m
                }
            }
        };
        Y.Ll = function(a, b) {
            var c = this.D,
                d = c[kd](a, this.jh),
                e = c[kd](a, this.kh),
                d = [{
                    title: this.Ho,
                    value: d
                }, {
                    title: this.Io,
                    value: e
                }];
            this.ke != l && (e = c[kd](a, this.ke), d[x]({
                title: this.Fo,
                value: e
            }));
            this.le != l && (c = c[kd](a, this.le), d[x]({
                title: this.Go,
                value: c
            }));
            return {
                title: b,
                f: d
            }
        };
        Y.Sz = function(a, b, c) {
            var a = a.Ka(c.x),
                b = b.Ka(c.y),
                d;
            d = this.yd == Um ? this.ll.Pw(c[zb]) : this.yd == op ? this.Xf[c[zb]][zb] : this.Gu;
            d = new vv({
                fill: d,
                Cb: this.Hu,
                stroke: this.Ob
            });
            c = this.zo.Qw(c.size);
            return {
                x: a,
                y: b,
                a: d,
                Pb: c,
                tj: c
            }
        };
        var $y = {
            OC: og,
            eD: yg,
            PC: pg,
            CC: eg,
            tC: Zf,
            nD: Eg,
            RC: rg,
            bD: wg,
            oD: Hg
        };

        function az(a) {
            switch (a) {
                case og:
                    return 1;
                case yg:
                    return 1E3;
                case pg:
                    return 6E4;
                case eg:
                    return 36E5;
                case Zf:
                    return 864E5;
                case Eg:
                    return 6048E5;
                case rg:
                    return 2629746E3;
                case wg:
                    return 7889238E3;
                case Hg:
                    return 31556952E3
            }
        };
        var bz = {
                VA: "yyyy",
                WA: "MMM y",
                pD: "MMMM yyyy",
                SC: "MMM d",
                TC: "MMMM dd",
                VC: "M/d",
                UC: "MMMM d",
                uC: vj
            },
            cz = bz,
            cz = bz;

        function dz(a, b, c, d) {
            this.yk = b;
            this.pd = new google[Hc][ac]({
                pattern: a
            });
            this.xA = c;
            this.wA = d
        }
        Ba(dz[M], function(a) {
            a /= this.yk;
            return this.pd[Ac](a) + (vd + (2 > s.abs(a) ? this.xA : this.wA))
        });

        function ez() {
            this.rt = new Date;
            this.Nh(og)
        }
        ez[M].Nh = function(a) {
            switch (a) {
                case Hg:
                    a = cz.VA;
                    break;
                case wg:
                    a = vg;
                    break;
                case rg:
                    a = cz.WA;
                    break;
                case Zf:
                    a = 3;
                    break;
                default:
                    a = 11
            }
            this.pd = new google[Hc][Wc]({
                pattern: a,
                timeZone: 0
            })
        };
        Ba(ez[M], function(a) {
            this.rt[cd](a);
            return this.pd[Ac](this.rt)
        });

        function fz() {
            this.Un = l;
            this.Ug = [];
            this.Tn = this.Mf = this.yi = l
        }
        Y = fz[M];
        Y.$x = function(a) {
            this.Tn = a;
            return this
        };
        Y.Xx = function(a) {
            this.Un = a;
            return this
        };
        Y.Yx = function(a) {
            this.yi = a;
            return this
        };
        Y.Zx = function(a) {
            this.Mf = a;
            return this
        };
        Y.ay = function(a) {
            a = Aw(rr(a) ? a : 3);
            this.Ug = [new dz(a, s.pow(10, 15), ug, ug), new dz(a, s.pow(10, 12), Bg, Bg), new dz(a, s.pow(10, 9), Sf, Sf), new dz(a, s.pow(10, 6), ng, ng)];
            return this
        };
        Y.Vx = function() {
            var a;
            a = this.Tn ? new google[Hc][ac]({
                pattern: this.Tn
            }) : new google[Hc][ac]({
                pattern: Aw(rr(this.Un) ? this.Un : 16)
            });
            return new gz(a, this.Ug, this.yi, this.Mf)
        };

        function gz(a, b, c, d) {
            this.cA = a;
            this.Ug = b || [];
            this.yi = c || l;
            this.Mf = d || l;
            a: {
                a = this.Ug;b = r;
                for (c = 0; c < a[L]; c++) {
                    d = a[c];
                    if (b < d.yk) break a;
                    b = d.yk
                }
            }
        }
        Ba(gz[M], function(a) {
            var b = 0 > a,
                a = s.abs(a);
            if (this.yi) {
                var c = this.yi;
                if (0 != a) {
                    var d = s[D](s.log(s.abs(a)) / nw) + 1;
                    d > c ? (c = s.pow(10, d - c), a = s[B](a / c) * c) : (c = s.pow(10, c - d), a = s[B](a * c) / c)
                }
            }
            c = l;
            for (d = 0; d < this.Ug[L]; d++) {
                var e = this.Ug[d];
                if (a >= e.yk) {
                    c = e[Fb](a);
                    break
                }
            }
            c == l && (c = this.cA[Ac](a));
            c = this.tA(c);
            return b ? Ae + c : c
        });
        gz[M].tA = function(a) {
            if (!this.Mf) return a;
            var b = this.Mf.symbol,
                c = this.Mf.usePadding ? vd : U;
            return this.Mf[pc] == bo ? a + c + b : b + c + a
        };

        function hz(a, b, c, d, e, f) {
            this.vz = a;
            this.k = b;
            this.tz = c;
            this.uz = d;
            this.te = f
        }

        function iz(a, b, c) {
            return new hz(a, b, j, j, j, c)
        }

        function jz(a, b, c) {
            return new hz(a, b, n, n, n, c)
        }
        hz[M].nb = function() {
            return s[B](this.k)
        };
        Ha(hz[M], function() {
            return this.vz
        });
        hz[M].Fz = function(a) {
            this.te = a
        };

        function kz(a, b) {
            this.oi = a;
            this.ni = b || 0;
            this.vs = this.sz(this.oi + this.ni);
            this.k = 0
        }
        Y = kz[M];
        Qa(Y, function() {
            this.k++;
            return this[J]()
        });
        Y.jb = function() {
            this.k--;
            return this[J]()
        };
        Ha(Y, function() {
            return s[B]((this.k * this.oi + this.ni) * this.vs) / this.vs
        });
        va(Y, function(a) {
            this.k = s[D]((a - this.ni) / this.oi);
            return this[J]()
        });
        ua(Y, function(a) {
            this.k = s[lb]((a - this.ni) / this.oi);
            return this[J]()
        });
        ra(Y, function(a) {
            this.k = s[B]((a - this.ni) / this.oi);
            return this[J]()
        });
        Y.sz = function(a) {
            if (1 <= a) return 1;
            var b = a[kc](),
                a = 0,
                c = b[yb](Qj); - 1 != c ? a = la(b[ic](c + 1), 10) : c = b[L];
            b = b[yb](Ge); - 1 != b && (a -= c - 1 - b);
            return s.pow(10, -a)
        };

        function lz(a, b, c, d) {
            this.N = a;
            this.Jc = b;
            this.Hb = c;
            this.pd = d
        }
        Y = lz[M];
        Y.Dr = function(a) {
            var b = a[L];
            if (0 < b)
                for (; --b;)
                    if (this.Kt(a[b - 1], a[b])) return n;
            return j
        };
        Y.Kt = function(a, b) {
            var c = this.Ks(a),
                d = this.Ks(b);
            return s.abs(this.N.ua(a) - this.N.ua(b)) < (c + d) / 2
        };
        Y.xy = function(a) {
            var b = [];
            if (1 >= a[L] || 0 != a[0]) return a;
            b[x](a[0]);
            for (var c = 1, d = a[L]; c < d; c++) this.Kt(a[0], a[c]) || b[x](a[c]);
            return b
        };
        Y.Ks = function(a) {
            a = this.pd[Fb](a);
            return this.Jc.Kg(a, this.Hb)
        };
        Y.cs = function(a, b) {
            return s.abs(this.N.hc(b) - this.N.hc(a))
        };
        Y.gk = function(a) {
            for (var b = [], c = 0; c < a[L]; c++) {
                var d = a[c];
                b[x](iz(d, this.N.ua(d), this.pd[Fb](d)))
            }
            return b
        };
        Y.dn = function(a, b, c, d) {
            if (b == c) return [b];
            for (var e = [], b = a[lb](b); b <= c;) e[x](b), b = a[yc]();
            1 == e[L] && (b = (new kz(d / 10))[D](c), b != e[0] && e[x](b));
            return e
        };

        function mz(a, b, c, d, e) {
            this.Ck = a;
            this.Mn = b;
            this.Vg = e;
            a = this.Rn(a);
            b = this.Rn(b) - a;
            this.Kf = (d - c) / b;
            this.xi = this.Kf * a - c
        }
        mz[M].ua = function(a) {
            return this.Rn(a) * this.Kf - this.xi
        };
        mz[M].hc = function(a) {
            return this.UA((a + this.xi) / this.Kf)
        };
        mz[M].Rn = function(a) {
            switch (this.Vg) {
                case 0:
                    return s.log(a);
                case 1:
                    return a;
                default:
                    return (s.pow(a, this.Vg) - 1) / this.Vg
            }
        };
        mz[M].UA = function(a) {
            switch (this.Vg) {
                case 0:
                    return s.pow(s.E, a);
                case 1:
                    return a;
                default:
                    return s.pow(a * this.Vg + 1, 1 / this.Vg)
            }
        };

        function nz(a, b) {
            return 0 > b ? a / s.pow(10, -b) : a * s.pow(10, b)
        }

        function oz(a) {
            return s[D](0.4342944819032518 * s.log(a))
        }

        function pz(a) {
            return s[lb](0.4342944819032518 * s.log(a))
        };

        function qz(a, b, c, d, e, f) {
            this.Ef = a;
            this.ai = b;
            this.ng = c;
            this.mg = d;
            this.cy = e;
            this.Jr = f;
            this.Cc = this.dy();
            a >= this.Cc ? (this.Na = this.Fe(a, b, c, d), this.Ab = s[B](this.Na.ua(this.Cc))) : b <= -this.Cc ? (this.Na = this.Fe(-b, -a, d, c), this.Ab = s[B](this.Na.ua(this.Cc)), f = 2 * this.Ab - d, e = 2 * this.Ab - c, this.Na = this.Fe(-b, -a, f, e)) : a >= -this.Cc ? (this.Ab = s[B](c), this.Na = this.Fe(this.Cc, b, this.Ab, d)) : b <= this.Cc ? (this.Ab = s[B](d), e = 2 * this.Ab - c, this.Na = this.Fe(this.Cc, -a, this.Ab, e)) : (this.Na = this.Fe(this.Cc, b, 0, 1), e = this.Na.ua(-a),
                this.Ab = s[B](c + (d - c) * (e / (e + 1))), b >= -a ? this.Na = this.Fe(this.Cc, b, this.Ab, d) : (e = 2 * this.Ab - c, this.Na = this.Fe(this.Cc, -a, this.Ab, e)));
            this.gg = d < c
        }
        Y = qz[M];
        Y.Ye = function() {
            return this.Ef
        };
        Y.Xe = function() {
            return this.ai
        };
        Y.$e = function() {
            return this.ng
        };
        Y.se = function() {
            return this.mg
        };
        Y.dy = function() {
            return this.Ef == this.ai ? this.Ef / 2 : ga(this.Jr) ? nz(1, oz(this.ai - this.Ef)) / 1E3 : this.Jr / 2
        };
        Y.Fe = function(a, b, c, d) {
            return new mz(a, b, c, d, this.cy)
        };
        Y.hc = function(a) {
            if (this.Ef == this.ai) return this.Ef;
            var b = this.gg ? -1 : 1;
            return a * b > this.Ab * b ? this.Na.hc(a) : a * b < this.Ab * b ? -this.Na.hc(2 * this.Ab - a) : 0
        };
        Y.ua = function(a) {
            return this.Ef == this.ai ? s.abs(this.ng - this.mg) / 2 : a > this.Cc ? this.Na.ua(a) : a < -this.Cc ? 2 * this.Ab - this.Na.ua(-a) : this.Ab
        };

        function rz(a) {
            this.Dz(a);
            this.Cz = a[pb]();
            this.li = a[L];
            this.k = 0
        }
        Y = rz[M];
        Qa(Y, function() {
            this.k++;
            return this[J]()
        });
        Y.jb = function() {
            this.k--;
            return this[J]()
        };
        Y.Dz = function(a) {
            for (var a = a[L], b = 0; b < a; b++);
        };
        Ha(Y, function() {
            var a = s[D](this.k / this.li);
            return nz(this.Cz[this.k - a * this.li], a)
        });
        va(Y, function(a) {
            this.k = this.li * pz(a);
            if (this[J]() != a)
                for (; this.jb() > a;);
            return this[J]()
        });
        ua(Y, function(a) {
            this.k = this.li * oz(a);
            if (this[J]() != a)
                for (; this[yc]() < a;);
            return this[J]()
        });
        ra(Y, function(a) {
            this.k = this.li * pz(a);
            if (this[J]() != a) {
                for (; this.jb() > a;);
                if (a - this[J]() < this[yc]() - a) return this.jb()
            }
            return this[J]()
        });

        function sz(a, b, c, d, e) {
            this.Na = a;
            this.wn = e;
            this.Ac = new lz(a, c, d, b);
            this.Xd = new rz([1, 2, 5])
        }
        sz[M].sj = function() {
            var a = this.en(),
                b;
            this.Xd[D](a);
            do b = this.Ac.dn(new kz(a), this.Na.Ye(), this.Na.Xe(), a), a = this.Xd[yc](); while (!this.Ac.Dr(b));
            return this.Ac.gk(b)
        };
        sz[M].en = function() {
            var a = this.Na.$e(),
                b = this.Na.se(),
                c = s.max(this.Ac.cs(a, a + this.wn), this.Ac.cs(b - this.wn, b)),
                d = this.Na.ua(0);
            d >= a && d <= b && (a = this.Na.hc(this.Na.ua(0) + this.wn), c = s.max(c, a));
            return this.Xd[lb](c)
        };

        function tz(a, b, c, d) {
            this.Ck = a;
            this.Mn = b;
            this.Vn = c;
            this.dt = d;
            this.Kf = (this.dt - this.Vn) / (this.Mn - this.Ck);
            this.xi = this.Kf * this.Ck - this.Vn
        }
        Y = tz[M];
        Y.hc = function(a) {
            return (a + this.xi) / this.Kf
        };
        Y.ua = function(a) {
            return a * this.Kf - this.xi
        };
        Y.$e = function() {
            return this.Vn
        };
        Y.se = function() {
            return this.dt
        };
        Y.Ye = function() {
            return this.Ck
        };
        Y.Xe = function() {
            return this.Mn
        };

        function uz(a, b) {
            this.ek = a;
            this.di = s[D](a / 10);
            this.Zd = a - this.di;
            this.cb = 0;
            this.fk = oz(s.abs(b));
            this.Ff = this.Zd * this.fk;
            this.k = 0
        }
        Y = uz[M];
        Y.ls = function() {
            var a = s[D](this.k / this.Zd),
                b;
            b = 10 * (this.k + this.di - a * this.Zd) / this.ek;
            0 == b && (b = 1);
            return nz(b, a)
        };
        Ha(Y, function() {
            this.k = s.abs(this.cb) + this.Ff;
            return 0 < this.cb ? this.ls() : 0 > this.cb ? -this.ls() : 0
        });
        Qa(Y, function() {
            this.cb++;
            return this[J]()
        });
        Y.jb = function() {
            this.cb--;
            return this[J]()
        };
        va(Y, function(a) {
            var b = this.di,
                c = oz(s.abs(a));
            if (s.abs(a) <= s.pow(10, this.fk)) return this.cb = 0 > a ? -1 : 0, this[J]();
            0 < a ? this.cb = this.Zd * c - this.Ff : 0 > a && (this.cb = this.Ff - this.Zd * c, b = -b);
            this[J]() != a && (c = this.ek * a / nz(1, pz(s.abs(a))), this.cb += s[D](c) - b);
            return this[J]()
        });
        ua(Y, function(a) {
            var b = this.di,
                c = oz(s.abs(a));
            if (s.abs(a) <= s.pow(10, this.fk)) return this.cb = 0 < a ? 1 : 0, this[J]();
            0 < a ? this.cb = this.Zd * c - this.Ff : 0 > a && (this.cb = this.Ff - this.Zd * c, b = -b);
            this[J]() != a && (c = this.ek * a / nz(1, pz(s.abs(a))), this.cb += s[lb](c) - b);
            return this[J]()
        });
        ra(Y, function(a) {
            var b = oz(s.abs(a));
            if (s.abs(a) <= s.pow(10, this.fk)) return this.cb = 0;
            if (0 < a) {
                this.cb = this.Zd * b - this.Ff;
                if (this[yc]() > a) return a - this[J]() >= this.jb() - a ? this[yc]() : this[J]();
                this.jb()
            } else if (0 > a) {
                this.cb = this.Ff - this.Zd * b;
                if (this.jb() < a) return a - this[J]() < this[yc]() - a ? this.jb() : this[J]();
                this[yc]()
            }
            this[J]() != a && (b = this.ek * a / nz(1, pz(s.abs(a))), this.cb += s[B](b) - this.di);
            return this[J]()
        });

        function vz(a, b, c, d, e, f) {
            this.N = a;
            this.pd = b;
            this.Jc = c;
            this.Hb = d;
            this.Zj = f;
            this.Rx = e;
            this.Ac = new lz(a, c, d, b);
            this.Xd = new rz([1, 2, 5])
        }
        vz[M].sj = function() {
            var a = this.en(),
                b = new uz(a, this.Zj),
                c = this.Ac.dn(b, this.N.Ye(), this.N.Xe(), a);
            if (2 > c[L]) return this.Ac.gk(c);
            a = c[0];
            b = c[1];
            if (0 == a) {
                if (3 > c[L]) return this.Ac.gk(c);
                a = b;
                b = c[2]
            }
            c = nz(1, pz(s.abs(a)));
            c == a && (c *= 10);
            this.Xd[lb](c / s.abs(b - a));
            do a = this.Xd.jb(), b = new uz(a, this.Zj), c = this.Ac.dn(b, this.N.Ye(), this.N.Xe(), a), c = this.Ac.xy(c); while (!this.Ac.Dr(c));
            return this.Ac.gk(c)
        };
        vz[M].en = function() {
            var a = this.N.ua(10 * this.Zj),
                b;
            this.Xd[D](1);
            do b = this.Xd[yc](), b = this.N.ua(10 * this.Zj * (b - 1) / b); while (s.abs(a - b) >= this.Rx);
            return this.Xd.jb()
        };

        function wz(a, b) {
            a != l ? (s[B](a), this.He = a) : this.He = 1;
            12 < this.He && (this.kA = new kz(s[D](this.He / 12)));
            var c = b || 0;
            s[B](c);
            this.jA = c;
            this.Ec = new Date;
            this[D](0)
        }
        Y = wz[M];
        Ha(Y, function() {
            return this.Ec[dc]()
        });
        Qa(Y, function() {
            var a = this.Ec[Rc](),
                a = a + this.He;
            this.Ec.setUTCMonth(a);
            return this[J]()
        });
        Y.jb = function() {
            this.Ec.setUTCMonth(this.Ec[Rc]() - this.He);
            return this[J]()
        };
        va(Y, function(a) {
            this.Ec[cd](a);
            1 < this.He && (this.Ec.setUTCMonth(this.Ec[Rc]() - (this.Ec[Rc]() + 12 - this.jA) % this.He % 12), 12 < this.He && (a = this.kA[D](this.Ec.getUTCFullYear()), this.Ec.setUTCFullYear(a)));
            this.Ec.setUTCDate(1);
            this.Ec.setUTCHours(0, 0, 0, 0);
            return this[J]()
        });
        ua(Y, function(a) {
            return this[D](a) < a ? this[yc]() : this[J]()
        });
        ra(Y, function(a) {
            return this[D](a) != a && a - this[J]() < this[yc]() - a ? this.jb() : this[J]()
        });

        function xz() {
            this.k = 0
        }
        Y = xz[M];
        Qa(Y, function() {
            this.k++;
            return this[J]()
        });
        Y.jb = function() {
            this.k--;
            return this[J]()
        };
        Ha(Y, function() {
            return nz(1, this.k)
        });
        va(Y, function(a) {
            this.k = oz(a);
            return this[J]()
        });
        ua(Y, function(a) {
            this.k = pz(a);
            return this[J]()
        });
        ra(Y, function(a) {
            var b = nz(1, pz(a)),
                c = b / 10;
            this.k = s[B](0.4342944819032518 * s.log(a - c < b - a ? c : b));
            return this[J]()
        });

        function yz(a) {
            a ? (this.Xb = [1E3, 5E3, 1E4, 15E3, 3E4, 6E4, 3E5, 6E5, 9E5, 18E5, 36E5, 108E5, 216E5, 432E5, 864E5, 6048E5, 2629746E3, 7889238E3, 31556952E3], this.ab = new rz([1, 2, 5])) : (this.Xb = [1E3, 6E4, 36E5, 864E5, 6048E5, 2629746E3, 7889238E3, 31556952E3], this.ab = new xz);
            this.$j = this.ab[B](this.Xb[0]);
            this.Xm = this.ab.jb();
            this.Bx = this.Xm + (this.$j - this.Xm) / 2;
            this.Lg = this.Xb[this.Xb[L] - 1];
            this.ab[B](1);
            this.Ar = this.Lg * this.ab[yc]();
            this.Cx = this.Lg + (this.Ar - this.Lg) / 2;
            this.oc(2)
        }
        Y = yz[M];
        Y.oc = function(a) {
            this.Zm = 1 == a || 4 == a;
            2 == a ? this.k = 0 : 3 == a ? this.k = this.Xb[L] - 1 : 1 == a ? this.rd = 1 : 4 == a && (this.rd = this.Lg)
        };
        Ha(Y, function() {
            return this.Zm ? this.rd * this.ab[J]() : this.Xb[this.k]
        });
        va(Y, function(a) {
            if (a < this.$j) return this.oc(1), this.ab[D](a);
            if (a >= this.Ar) return this.oc(4), this.rd * this.ab[D](a / this.rd);
            for (this.oc(2); a >= this.Xb[this.k];) this.k++;
            return this.Xb[--this.k]
        });
        ua(Y, function(a) {
            if (a <= this.Xm) return this.oc(1), this.ab[lb](a);
            if (a > this.Lg) return this.oc(4), this.rd * this.ab[lb](a / this.rd);
            for (this.oc(3); a <= this.Xb[this.k];) this.k--;
            return this.Xb[++this.k]
        });
        ra(Y, function(a) {
            if (a < this.Bx) return this.oc(1), this.ab[B](a);
            if (a >= this.Cx) return this.oc(4), this.rd * this.ab[B](a / this.rd);
            for (this.oc(3); 0 < this.k && a < this.Xb[this.k];) this.k--;
            this.Xb[this.k + 1] - a <= a - this.Xb[this.k] && this.k++;
            return this.Xb[this.k]
        });
        Qa(Y, function() {
            this.Zm ? (this.ab[yc](), 1 == this.rd && this.ab[J]() == this.$j && this.oc(2)) : (this.k++, this.k == this.Xb[L] && (this.oc(4), this.ab[B](1), this.ab[yc]()));
            return this[J]()
        });
        Y.jb = function() {
            this.Zm ? (this.ab.jb(), this.rd == this.Lg && 1 == this.ab[J]() && this.oc(3)) : (this.k--, -1 == this.k && (this.oc(1), this.ab[B](this.$j), this.ab.jb()));
            return this[J]()
        };

        function zz(a, b) {
            var c = b != l ? b : 1,
                a = (new yz(j))[B](a);
            return 2629746E3 > a ? 6048E5 == a ? new kz(a, 864E5 * (3 + c)) : new kz(a) : new wz(s[B](a / 2629746E3))
        }

        function Az(a, b) {
            if (0 == a) return 0;
            for (var c = a, d = 0, e = NaN;;) {
                var f = oz(c),
                    g = nz(1, f),
                    i = Bz(c);
                if (5 < i && (e = 5 * g + d, e = Cz(e, f), e <= a && e > a - b)) break;
                e = i * g + d;
                e = Cz(e, f);
                if (e <= a && e > a - b) break;
                f = i * g;
                d += f;
                c -= f
            }
            return e
        }

        function Dz(a, b) {
            if (0 == a) return 0;
            for (var c = a, d = 0, e = NaN;;) {
                var f = oz(c),
                    g = nz(1, f),
                    i = Bz(c);
                if (5 > i && (e = 5 * g + d, e = Cz(e, f), e <= a + b && e >= a)) break;
                e = i * g + d;
                e = Cz(e, f);
                if (e <= a + b && e >= a) break;
                e = (i + 1) * g + d;
                e = Cz(e, f);
                if (e <= a + b && e >= a) break;
                f = i * g;
                d += f;
                c -= f
            }
            return e
        }

        function Cz(a, b) {
            var c = nz(1, s.abs(b));
            return s[B](a * c) / c
        }

        function Bz(a) {
            var b = oz(a),
                a = a / nz(1, b),
                b = s.abs(s[B](a) - a);
            0 != b && 1E-10 > b && (a = s[B](a));
            return s[D](a)
        };

        function Ez(a, b, c, d, e, f, g, i, k) {
            this.rx = a;
            this.tr = b;
            this.vr = c;
            this.Jc = d;
            this.mc = e;
            this.N = f;
            this.Xj = g;
            this.Hb = i;
            this.Rm = k;
            this.qx = az(a);
            this.Wj = az(b);
            this.mc.Nh(this.tr)
        }
        Y = Ez[M];
        Y.Ix = function(a) {
            return [jz(a, s.abs(this.N.$e() - this.N.se()) / 2, this.mc[Fb](a))]
        };
        Y.TA = function() {
            var a = this.N.Ye(),
                b = this.N.Xe();
            this.mc.Nh(this.rx);
            if (a == b) return this.Ix(a);
            var c;
            c = this.mc[Fb](b);
            c = new hz(b, this.N.se(), j, j, n, c, 1);
            this.mc.Nh(this.tr);
            for (var d = 1 == this.vr && this.Wj > this.qx, e = zz(this.Wj * this.vr), f = zz(this.Wj), g = [], i = NaN, k = e[lb](a), a = f[lb](a); a <= b; a = f[yc]()) {
                var m = this.N.ua(a);
                if (a == k) {
                    k = e[yc]();
                    if (this.Kx(i, a)) return l;
                    d ? (ga(i) || g[x](this.Gx(i, a)), g[x](new hz(a, m, j, j, j, l))) : (i = iz(a, m, this.mc[Fb](a)), g[x](i));
                    i = a
                } else g[x](new hz(a, m, n, j, n, l))
            }
            d && b < a && this.Dx(g,
                f, b);
            this.Rm && (this.Fx(c, g, this.Jc), g[x](c));
            return 2 > this.Hx(g) ? this.Ex() : this.Jx(g) ? this.Lx(g) : g
        };
        Y.Dx = function(a, b, c) {
            var d = this.mc[Fb](c),
                e = this.Jc.Kg(d, this.Hb),
                f = b[J](),
                b = b.jb(),
                b = this.N.ua(b),
                g = this.N.ua(f),
                f = this.N.ua(c),
                b = (b + g) / 2;
            f - b > e / 2 && a[x](jz(c, b, d))
        };
        Y.Fx = function(a, b) {
            var c = this.Ez(b);
            if (c != l) {
                var d = this.Jc.Kg(c.te, this.Hb),
                    e = this.Jc.Kg(a.te, this.Hb);
                s.abs(c.nb() - a.nb()) - (d + e) / 2 < this.Xj && c.Fz(l)
            }
        };
        Y.Ez = function(a) {
            for (var b = a[L] - 1; 0 <= b; b--)
                if (a[b].te != l) return a[b];
            return l
        };
        Y.Ex = function() {
            var a = this.mc[Fb](this.N.Ye()),
                b = this.mc[Fb](this.N.Xe()),
                a = a + Ae + b,
                b = [];
            this.lz(a, this.N) || b[x](jz(NaN, this.N.$e() + this.N.se() / 2, a));
            return b
        };
        Y.lz = function(a) {
            var b = s.abs(this.N.$e() - this.N.se());
            return this.Jc.ws(a) > b + 40
        };
        Y.Hx = function(a) {
            for (var b = 0, c = 0; c < a[L]; c++) a[c].te != l && b++;
            return b
        };
        Y.Lx = function(a) {
            for (var b = [], c = 0; c < a[L]; c++) {
                var d = a[c];
                (!d.uz || d.tz) && b[x](d)
            }
            return b
        };
        Y.Kx = function(a, b) {
            var c = this.Jc.Kg(this.mc[Fb](a), this.Hb),
                d = this.Jc.Kg(this.mc[Fb](b), this.Hb);
            return s.abs(this.N.ua(a) - this.N.ua(b)) - (c + d) / 2 < this.Xj
        };
        Y.Jx = function(a) {
            if (2 > a[L]) return n;
            for (var b = a[0], c = 1; c < a[L]; c++) {
                var d = a[c];
                if (5 > s.abs(d.nb() - b.nb()) && b[J]() != d[J]()) return j;
                b = d
            }
            return n
        };
        Y.Gx = function(a, b) {
            var c = this.N.ua(a),
                d = this.N.ua(b),
                c = (c + d) / 2;
            return jz(this.N.hc(c), c, this.mc[Fb](a))
        };

        function Fz(a, b, c, d, e, f, g) {
            this.N = a;
            this.eh = b;
            this.Jc = c;
            this.mc = d;
            this.Xj = e;
            this.Hb = f;
            this.Rm = g;
            this.ds = this.Gy()
        }
        Fz[M].Gy = function() {
            return [this.Bb(Zf, 1), this.Bb(Zf, 7), this.Bb(rg, 1), this.Bb(rg, 2), this.Bb(rg, 3), this.Bb(wg, 1), this.Bb(rg, 6), this.Bb(Hg, 1), this.Bb(Hg, 2), this.Bb(Hg, 5), this.Bb(Hg, 10), this.Bb(Hg, 20), this.Bb(Hg, 50), this.Bb(Hg, 100), this.Bb(Hg, 1E3), this.Bb(Hg, 1E4), this.Bb(Hg, 1E7)]
        };
        Fz[M].Bb = function(a, b) {
            return new Ez(this.eh, a, b, this.Jc, this.mc, this.N, this.Xj, this.Hb, this.Rm)
        };
        Fz[M].sj = function() {
            for (var a = az(this.eh), b = 0; b < this.ds[L]; b++) {
                var c = this.ds[b];
                if (a <= c.Wj && (c = c.TA(), c != l)) return c
            }
            return []
        };

        function Gz(a, b) {
            this.Ps = a;
            this.w = b
        }
        Gz[M].ws = function(a) {
            return this.Ps(a, this.w)[y]
        };
        Gz[M].uc = function(a) {
            return this.Ps(a, this.w)[S]
        };
        Gz[M].Kg = function(a, b) {
            return b == il ? this.ws(a) : this.uc(a)
        };

        function Hz(a, b, c, d, e) {
            this.Xh = a;
            this.Sj = b;
            this.Nq = c;
            this.kw = d.R(e(Sk));
            this.mw = d.R(e(Uk));
            this.lw = d.R(e(Tk));
            this.Hv = d.R(e(Rk));
            this.jw = d.R(e(Pk));
            this.Kp = d.R(e(Qk));
            this.Sx = d.R(e(Yk));
            this.Qq = d.$(e(Mk))
        }
        Y = Hz[M];
        Y.Yv = function(a, b, c, d, e, f) {
            b = this.Lw(a, b, c);
            a = this.fr({
                Db: b.Db,
                Mb: b.Mb,
                jm: b.Zh[sc],
                jq: b.Zh.duration,
                kq: b.Zh.vf,
                km: b.Zh.De,
                bC: Mr(b.Zh.De),
                hq: this.kw,
                ce: e.ce,
                Z: e.Z,
                iq: this.jw,
                im: [],
                gq: 0
            }, d, f);
            if (!this.Qq || !(1 == a[Xc] && 0 < b.hm && b.cr)) return f = this.Tj(e.Z, 1 != a[Xc] || !b.cr ? 0 : 1, a.Q, a.Dj), this.Qq && 1 < a[Xc] ? (e = this.Mw(b, a, e, d), a = Zr(a.Q, e)) : a = a.Q, {
                Q: a,
                Nc: f
            };
            c = this.Nq[b.hm - 1];
            f = this.fr({
                Db: b.Db,
                Mb: b.Mb,
                jm: c[sc],
                jq: c.duration,
                kq: c.wf,
                km: c.xf,
                hq: this.mw,
                ce: e.Gi,
                Z: e.ih,
                iq: this.Kp,
                im: a.Q,
                gq: this.lw
            }, d, f);
            if (f == l) return d =
                this.Tj(e.Z, 2, a.Q, a.Dj), {
                    Q: a.Q,
                    Nc: d
                };
            d = this.Tj(e.Z, 1, a.Q, a.Dj);
            e = this.Tj(e.ih, 1, f.Q, f.Dj, d);
            a = Zr(f.Q, a.Q);
            f = Zr(d, e);
            return {
                Q: a,
                Nc: f
            }
        };
        Y.Lw = function(a, b, c) {
            var d = s[B](0.15 * (b[dc]() - a[dc]())),
                a = new Date(a[dc]() - d),
                b = new Date(b[dc]() + d),
                c = Ow(c, Iz, this.Sj),
                d = Ow((b[dc]() - a[dc]()) / this.Sx / 2, this.Xh, this.Sj),
                d = Rr(d, function(a) {
                    return 0 < a ? 1 : 0
                }),
                e = Tw(d);
            return {
                Db: a,
                Mb: b,
                Zh: this.Nq[e],
                hm: e,
                cr: Pw(c) < Pw(d)
            }
        };
        Y.fr = function(a, b, c) {
            for (var d = Rr(a.kq, function(a) {
                    return new google[Hc][Wc]({
                        pattern: a
                    })
                }), e = 0; e < a.km[L]; ++e) {
                var f = a.km[e],
                    g = 0,
                    i = Ww(a.jq, f),
                    i = Jw(a.Db, i, 0);
                4 == a.jm && (i = Jw(i, [0, 0, 0, 0, 1], 0), i = Rw(i, [0, 0, 0, 0, (7 + i.getDay() - 1) % 7], -1));
                for (var k = new Sw(i, a.Mb, a.jm, f), i = [], m = j, p = b(a.Db), q = -1; k.Am();) {
                    var t = k[yc](),
                        w = b(t); - 1 == q && w >= p && (q = i[L]);
                    var A = k.Wv();
                    if (A != l) {
                        A = b(A);
                        if (A < w + 1) continue;
                        if (A - w < a.hq) {
                            m = n;
                            break
                        }
                    }
                    for (A = n; g < a.im[L];) {
                        var E = a.im[g];
                        if (s.abs(E.l - w) < a.gq) {
                            A = j;
                            break
                        }
                        if (E.l > w) {
                            g = s.max(0, g - 1);
                            break
                        }
                        g++
                    }
                    A ||
                        i[x]({
                            S: t,
                            l: w,
                            v: j,
                            a: a.ce,
                            length: l
                        })
                }
                if (m) {
                    1 < q && (i = cs(i, q - 1));
                    g = m = l;
                    for (p = 0; p < d[L]; ++p) {
                        q = d[p];
                        t = j;
                        w = [];
                        for (k = 0; k < i[L]; ++k) {
                            var A = i[k],
                                E = q[Ac](A.S),
                                K = c(E, a.Z)[y];
                            if (k + 1 < i[L] && i[k + 1].l - A.l < a.iq + K) {
                                t = n;
                                break
                            }
                            w[x]({
                                text: E,
                                ev: K
                            })
                        }
                        if (t) {
                            m = p;
                            g = w;
                            break
                        }
                    }
                    if (m != l) {
                        a = r;
                        for (k = 0; k < i[L] - 1; ++k) a = s.min(a, i[k + 1].l - i[k].l);
                        return {
                            Q: i,
                            Dj: g,
                            multiple: f,
                            Jv: a
                        }
                    }
                }
            }
            return l
        };
        Y.Mw = function(a, b, c, d) {
            if (b.Jv / b[Xc] < this.Hv) return [];
            for (var c = c.ce, e = [], a = new Sw(b.Q[0].S, a.Mb, a.hm, 1), f = 0; a.Am();) {
                if (0 != f % b[Xc]) {
                    var g = a[yc](),
                        i = d(g);
                    e[x]({
                        S: g,
                        l: i,
                        v: j,
                        a: c,
                        length: 5
                    })
                }
                f++
            }
            return e
        };
        Y.Tj = function(a, b, c, d, e) {
            var f = [];
            if (e != l)
                for (var g = 0; g < e[L]; ++g) {
                    var i = e[g].m,
                        k = i.f[0];
                    f[x](Jz(k.x, k[L], i.Va, this.Kp))
                }
            for (var e = 1 == b ? gp : Ci, g = 0, i = [], k = 2 == b ? c[L] - 1 : c[L], m = 0; m < k; ++m) {
                var p = c[m];
                if (p.v && d[m]) {
                    for (var q = s[B](2 == b ? (c[m + 1].l + p.l) / 2 : p.l), t = d[m].ev, w = Jz(q, t, e), A = j; g < f[L];) {
                        var E = f[g];
                        if (s.max(w[Q], E[Q]) <= s.min(w.end, E.end)) {
                            A = n;
                            break
                        }
                        if (E[Q] > w.end) {
                            g = s.max(0, g - 1);
                            break
                        }
                        g++
                    }
                    A && i[x]({
                        S: p.S,
                        v: j,
                        m: {
                            text: d[m][z],
                            u: a,
                            f: [{
                                x: q,
                                y: 0,
                                text: d[m][z],
                                length: t
                            }],
                            Va: e,
                            Oa: Uj,
                            aC: d[m][z]
                        }
                    })
                }
            }
            return i
        };

        function Jz(a, b, c, d) {
            d = jr(d) ? d : 0;
            c == gp ? (c = a, a = c + b) : (c = s[B](a - b / 2), a = s[B](a + b / 2));
            return new mv(c - d, a + d)
        }
        var Iz = [
                [1],
                [50],
                [500],
                [0, 1],
                [0, 15],
                [0, 30],
                [0, 0, 1],
                [0, 0, 15],
                [0, 0, 30],
                [0, 0, 0, 1],
                [0, 0, 0, 6],
                [0, 0, 0, 12],
                [0, 0, 0, 0, 1],
                [0, 0, 0, 0, 7],
                [0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 3],
                [0, 0, 0, 0, 0, 6],
                [0, 0, 0, 0, 0, 0, 1]
            ],
            Kz = [
                [1],
                [2],
                [5],
                [10],
                [20],
                [50],
                [100],
                [200],
                [500],
                [0, 1],
                [0, 2],
                [0, 5],
                [0, 10],
                [0, 15],
                [0, 30],
                [0, 0, 1],
                [0, 0, 2],
                [0, 0, 5],
                [0, 0, 10],
                [0, 0, 15],
                [0, 0, 30],
                [0, 0, 0, 1],
                [0, 0, 0, 2],
                [0, 0, 0, 3],
                [0, 0, 0, 4],
                [0, 0, 0, 6],
                [0, 0, 0, 12],
                [0, 0, 0, 0, 1],
                [0, 0, 0, 0, 2],
                [0, 0, 0, 0, 7],
                [0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 3],
                [0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 10],
                [0, 0, 0, 0, 0, 0, 50],
                [0, 0,
                    0, 0, 0, 0, 100
                ]
            ],
            Lz = [{
                index: 0,
                duration: [1],
                vf: [Zk],
                De: [1, 5, 10, 50, 100, 500],
                wf: [Zk],
                xf: [1, 5, 10, 50, 100]
            }, {
                index: 1,
                duration: [0, 1],
                vf: [Zk],
                De: [1, 5, 10, 15, 30],
                wf: [":ss"],
                xf: [1, 5, 10, 15]
            }, {
                index: 2,
                duration: [0, 0, 1],
                vf: ["h:mm a"],
                De: [1, 2, 5, 15, 20, 30],
                wf: [":mm"],
                xf: [1, 2, 5, 15]
            }, {
                index: 3,
                duration: [0, 0, 0, 1],
                vf: ["h a"],
                De: [1, 2, 6, 12],
                wf: ["h a"],
                xf: [1, 2, 6]
            }, {
                index: 4,
                duration: [0, 0, 0, 0, 1],
                vf: ["MMM d", vj],
                De: [1, 2, 7],
                wf: [vj],
                xf: [1, 7]
            }, {
                index: 5,
                duration: [0, 0, 0, 0, 0, 1],
                vf: ["MMM y", "MMM yy", "MMM"],
                De: [1, 3, 6],
                wf: ["MMM"],
                xf: [1,
                    3
                ]
            }, {
                index: 6,
                duration: [0, 0, 0, 0, 0, 0, 1],
                vf: [Zq],
                De: [1, 2, 5, 10, 20, 50, 100, 200, 500, 1E3],
                wf: [Zq],
                xf: [1, 2, 5, 10, 20, 50, 100, 200, 500, 1E3]
            }];

        function Mz(a, b, c, d, e, f) {
            this.rh = c;
            this.i = b;
            Pa(this, d);
            Da(this, b.U(this.s(qq), Ax, e));
            this.Mb = this.Db = l;
            this.oh = [];
            this.Ji = l;
            this.St = 0 < a.gb.bars;
            c = b.ud(this.s(Pp));
            d = {
                eb: a.ed,
                fontSize: a.Fc,
                fb: a.Xg == ql ? a.Je : X
            };
            d = b.sc(this.s(Tp), d);
            La(this, {
                text: c,
                u: d,
                f: [],
                Va: Ci,
                Oa: gp,
                G: U
            });
            this.Nc = l;
            this.tc = b.U(this.s(Hp), Gx, cn);
            c = {
                color: this[I] != Jq || a.J == no ? b.ud(sm) : b.ud(Dm),
                eb: a.ed,
                fontSize: a.Fc,
                fb: this.tc == ql ? a.Je : X
            };
            this.Z = b.sc(this.s(Ip), c);
            d = b.R(this.s(Wk));
            d = pv(this.Z[zb], a.Di || ke, d);
            this.ih = b.sc(this.s(Ip),
                c);
            xa(this.ih, d);
            this.Tt = b.U(this.s(dn), Hx, sq);
            this.oo = b.U(this.s(sl), Ix, qm);
            c = b.fd(this.s(Lh), a.Pt);
            this.Rt = new vv({
                fill: c
            });
            c = b.fd(this.s(Nk), a.Qt);
            this.ce = new vv({
                fill: c
            });
            this.ml = b.R(this.s(Fm), 0);
            d = b.R(this.s(Vk));
            a = pv(c, a.Di || ke, d);
            a = b.fd(this.s(Em), a);
            this.Gi = new vv({
                fill: a
            });
            this.kd = 2;
            this.lo = s.max(this.kd, s[B](this[oc].u[N] / 3.236));
            this.A = [];
            this.Ei = 0;
            this.direction = this.Tc = b.Ke(this.s(Ij), 1);
            this.xb = this.ac = l;
            this.fh = this.ah = 0;
            this.B = {
                min: -r,
                max: r
            };
            this.Sc = l;
            this.Ut = f;
            this[I] == Jq && (this.qo =
                this.ga = this.n = l, this.eh = b.U(this.s(Np), $y, og), this.Hi = r)
        }
        Y = Mz[M];
        Y.s = function(a) {
            return Bw(this.rh, a)
        };
        Y.zg = function(a) {
            0 != a && (this.Hi = s.min(s.abs(a), this.Hi))
        };
        Y.tg = function(a) {
            this.n.tg(this.Hi, a || [])
        };
        Y.Qj = function(a, b) {
            var c = sx().gx(a),
                d = b.Uh(this.s(Ok));
            this.qo = 1 == d;
            c.Kc(b, this.rh, d);
            this.n = c;
            this.Db = c.O(b, this.s(Cm));
            this.Mb = c.O(b, this.s(wm));
            this.Ji = c.O(b, this.s(Kh))
        };
        Y.uj = function(a) {
            this.Sc = a.gh(this.s(Qq), Bx);
            if (this.Sc === l || this.Sc == Wj) {
                if (this[I] == Jq) {
                    var b = this.n,
                        c = b.ha(b.O(a, this.s(Pq))),
                        a = b.ha(b.O(a, this.s(Oq)));
                    c != l && (this.B.min = c);
                    a != l && (this.B.max = a)
                } else this.B.min = a.Ke(this.s(Pq), this.B.min), this.B.max = a.Ke(this.s(Oq), this.B.max);
                this.B.min != -r || this.B.max != r ? (this.Sc = Wj, this.B.min >= this.B.max && h(u("viewWindow.max must be greater than viewWindow.min"))) : (this.Sc == Wj && h(u('Option "viewWindowMode" was set to "explicit" but "viewWindow" was not specified.')),
                    this.Sc = this.Ut);
                if (this[I] == Jq && this.Sc == Wj && (this.B.min != -r && (this.n.X = this.B.min), this.B.max != r)) this.n.da = this.B.max
            }
        };
        Y.rq = function() {
            return this.Sc == Wj && (this.B.min == -r || this.B.max == r)
        };
        Y.Wq = function() {
            this[I] == Jq && !this.n && h(u("Axis type/data type mismatch for " + this.rh))
        };
        Y.Kr = function(a, b, c, d, e) {
            this.ac = c + (1 == this[bb] ? 0.5 : -0.5);
            this.Ei = b - 1;
            this.xb = c + b * this[bb];
            var f = this.Iq(a),
                g = this.i.$(this.s(Xk)),
                g = (g = g && this.Gp()) && this.tc == cn,
                i = this.ej(a),
                a = (g = (g = g && i[Wb] == il) && !i.gg) ? this.fw(a, d, e) : this.gw(a, b, c, d, e);
            return {
                title: this[oc],
                name: this.Kq(),
                type: this[I],
                Tc: this.Tc,
                ac: this.ac,
                xb: this.xb,
                sg: {
                    Jb: Z(this.Fq, this),
                    Md: Z(this.Ed, this)
                },
                position: {
                    Jb: Z(this.lg, this),
                    Md: Z(this.Ep, this)
                },
                mj: f,
                ga: a.ga,
                Q: a.Q,
                text: this.Nc
            }
        };
        Y.gw = function(a, b, c, d, e) {
            this[I] == Jq ? this.qo ? this.Gp() ? this.Sv(a) : this.Tv(a) : this.Rv() : this.Uv(a, b);
            this.Nl(a, d, e, l);
            this.Ml(a);
            a = l;
            this[I] == Jq && this.ga && (a = {
                S: this.ga.S,
                l: this.ga.l,
                v: j,
                length: l,
                a: this.Rt
            });
            b = l;
            if (this[I] == Jq && (b = Rr(this.A, function(a) {
                    return {
                        S: a.S,
                        l: a.l,
                        v: j,
                        length: l,
                        a: this.ce
                    }
                }, this), c = this.Vv(b))) c = Rr(c, function(a) {
                return {
                    S: this.Ep(a),
                    l: a,
                    v: j,
                    length: l,
                    a: this.Gi
                }
            }, this), as(b, c);
            return {
                Q: b,
                ga: a
            }
        };
        Y.fw = function(a, b, c) {
            this.dj();
            es(this.oh);
            for (var d = r, e = 1; e < this.oh[L]; ++e) {
                var f = this.oh[e] - this.oh[e - 1];
                f && (d = s.min(d, f))
            }
            e = Z(this.s, this);
            e = new Hz(Kz, 3, Lz, this.i, e);
            f = {
                Z: this.Z,
                ce: this.ce,
                ih: this.ih,
                Gi: this.Gi
            };
            d = e.Yv(this.n.Ed(this.n.X), this.n.Ed(this.n.da), d, Z(this.lg, this), f, a.wb);
            this.Nl(a, b, c, d.Nc);
            this.Ml(a);
            return {
                Q: d.Q,
                ga: l
            }
        };
        Y.Uv = function(a, b) {
            var c;
            this.Sc == Wj ? (this.B.min == -r ? this.B.min = s.min(0, this.B.max - 1) : this.B.max == r && (this.B.max = s.max(a.r[L], this.B.min + 1)), c = this.B.max - this.B.min) : (this.B.min = 0, this.B.max = a.r[L], c = a.r[L]);
            this[I] == zi && (c = s.max(1, c - 1));
            this.St && (c = s.min(c, s[D]((b + 1) / 2)));
            this.fh = this.hp();
            this.ah = this.Ei / c;
            this.A = vw(a.r[L], function(b) {
                var e = b - this.fh;
                return {
                    S: a.r[b][C],
                    l: this.Ka(b),
                    text: a.r[b].Wk[0],
                    v: e >= 0 && e <= c
                }
            }, this)
        };
        Y.Rv = function() {
            this.V(this.n.ha(this.Ji));
            this.n.Gv(this.Db, this.Mb, this.Sc == In || this.rq());
            this.rq() && (this.n.A = Qr(this.n.A, function(a) {
                return a >= this.B.min && a <= this.B.max
            }, this));
            this.dj();
            this.A = Rr(this.n.A, function(a) {
                var b = this.n.Ed(a),
                    c = this.n.Iv(b);
                return {
                    S: b,
                    l: this.Ka(a),
                    text: c,
                    v: j
                }
            }, this)
        };
        Y.Sv = function(a) {
            this.dj();
            var b = this.ej(a),
                c = new ez;
            c.Nh(this.eh);
            var d = b.ng,
                e = b.mg - 1,
                a = new Gz(a.wb, this.Z);
            if (b.gg) var f = d,
                d = e,
                e = f;
            b = (new Fz(new tz(this.n.X, this.n.da, d, e), this.eh, a, c, 10, b[Wb], j)).sj();
            this.A = [];
            for (c = 0; c < b[L]; c++) d = b[c], d.te && this.A[x]({
                S: this.n.Ed(d[J]()),
                l: d.nb(),
                text: d.te,
                v: j
            })
        };
        Y.Vv = function(a) {
            if (!a || 1 >= a[L] || 0 == this.ml) return l;
            for (var b = (a[1].l - a[0].l) / (this.ml + 1), c = [], d = a[0].l, e = s[D]((d - this.ac) / b), f = e; 0 < f; f--) {
                var g = s[D](d - b * f);
                1 < s.abs(g - this.ac) && c[x](g)
            }
            for (f = 0; f < a[L] - 1; f++) {
                d = a[f].l;
                for (e = 0; e < this.ml; e++) d += b, c[x](s[D](d))
            }
            d = Mr(a).l;
            e = s[D]((this.xb - d) / b);
            for (f = 1; f <= e; f++) g = s[D](d + b * f), 1 < s.abs(g - this.xb) && c[x](g);
            return c
        };
        Y.dj = function() {
            var a = oa(this.B.min) && !ga(this.B.min) ? this.B.min : this.n.X,
                b = oa(this.B.max) && !ga(this.B.max) ? this.B.max : this.n.da;
            this.ah = this.Ei / (b - a);
            this.fh = a;
            if (this.Ji != l) a = this.n.ha(this.Ji);
            else var c = this.n.ha(this.n.Gm()),
                a = is(c, a, b);
            this.ga = this.Rc(a) ? {
                S: this.n.Ed(a),
                l: this.Ka(a)
            } : l
        };
        Y.Tv = function(a) {
            this.V(this.Db);
            this.V(this.Mb);
            if (this.Sc == In) {
                var b;
                b = new mv(this.n.X, this.n.da);
                if (b[Q] != b.end) {
                    var c = 0.1 * (b.end - b[Q]);
                    b = new mv(0 > b[Q] ? -Dz(-b[Q], c) : Az(b[Q], c), 0 > b.end ? -Az(-b.end, c) : Dz(b.end, c))
                }
                this.V(b[Q]);
                this.V(b.end)
            }
            this.dj();
            var d = this.ej(a),
                e = this.n.Zl(this.n.X),
                f = this.n.Zl(this.n.da),
                g = ex(this.i, this.s(om), this.s(mo)) == zn ? 1 : 0;
            var i = d.ng,
                k = d.mg - 1;
            b = this.Hi;
            var c = d[Wb],
                m = new Gz(a.wb, this.Z),
                a = this.Zu(this.i);
            d.gg && (d = i, i = k, k = d);
            if (e == f) b = (k - i) / 2 + i, c = a[Fb](e), b = [jz(e, b, c)];
            else {
                e = 1 == g ? new tz(e, f, i, k) : new qz(e, f, i, k, g, b);
                if (e.Ye() == e.Xe()) f = 1;
                else {
                    var g = s.min(e.$e(), e.se()),
                        i = s.max(e.$e(), e.se()),
                        k = s.abs(e.hc(g)),
                        d = s.abs(e.hc(i)),
                        f = s.max(k, d),
                        p = 0,
                        q = e.ua(0);
                    if (g > q || q > i) p = s.min(k, d);
                    g = e.ua(p);
                    f = e.ua(f);
                    f = s.abs(e.hc(g + 10) - e.hc(g)) / s.abs(e.hc(f + 10) - e.hc(f))
                }
                b = (0.65 < f ? new sz(e, a, m, c, 40) : new vz(e, a, m, c, 40, b)).sj()
            }
            this.A = [];
            for (c = 0; c < b[L]; c++) a = b[c], this.A[x]({
                S: a[J](),
                l: a.nb(),
                text: a.te,
                v: j
            })
        };
        Y.Zu = function(a) {
            var b = new fz,
                c = a.Xl(this.s(ok));
            c ? b.$x(c) : (c = a.Hd(this.s(rk)), rr(c) && b.Xx(c), c = a.Hd(this.s(sk)), rr(c) && b.Yx(c), (c = a.O(this.s(tk))) && b.Zx({
                symbol: c.symbol,
                position: c[pc],
                usePadding: c.usePadding
            }), a.$(this.s(uk)) && b.ay(5));
            return b.Vx()
        };
        Y.V = function(a) {
            this[I] == Jq && (a != l && this.Rc(a)) && (this.n.V(a), this.oh[x](a))
        };
        Y.Au = function() {
            if (this[I] == Jq) {
                var a = this.n,
                    b = 0.01 * (a.da - a.X);
                0 < a.X && this.B.min == -r && (a.X = s.max(a.X - b, 0));
                0 > a.da && this.B.max == r && (a.da = s.min(a.da + b, 0))
            }
        };
        Y.Ka = function(a) {
            return a == l ? l : this.ac + (a - this.fh) * this[bb] * this.ah
        };
        Y.gB = function(a) {
            return a == l ? l : (a - this.ac) * this[bb] / this.ah + this.fh
        };
        Y.Fq = function(a) {
            return this[I] == Jq ? this.n.ha(a) : a
        };
        Y.Ed = function(a) {
            return a == l ? l : this[I] == Jq ? this.n.Ed(a) : a
        };
        Y.Ep = function(a) {
            a = this.gB(a);
            return a == l ? l : this.Ed(a)
        };
        Y.lg = function(a) {
            return this.Ka(this.Fq(a))
        };
        Y.hp = function() {
            switch (this[I]) {
                case Jq:
                case zi:
                    return this.B.min;
                case vi:
                    return this.B.min - 0.5
            }
        };
        Y.yv = function() {
            switch (this[I]) {
                case Jq:
                    return this.B.max;
                case zi:
                    return this.B.max - 1;
                case vi:
                    return this.B.max - 0.5
            }
        };
        Y.Rc = function(a) {
            return this[I] == Jq ? a >= this.B.min && a <= this.B.max : a >= s[D](this.B.min) && a < s[lb](this.B.max)
        };
        Y.nr = function(a) {
            return a * this[bb] > this.xb * this[bb]
        };
        Y.$w = function(a) {
            return a * this[bb] < this.ac * this[bb]
        };
        Y.Gp = function() {
            return this.n != l && this.n[Bc] == hx
        };

        function Nz(a, b, c, d, e, f, g, i, k, m) {
            this.hr = a;
            this.Ee = b;
            this.Ey = c;
            this.wx = d;
            this.$r = e;
            this.lk = f;
            this.Rw = g;
            this.Fy = i;
            this.Ow = k;
            this.ir = m
        }

        function Oz(a, b, c, d) {
            switch (d) {
                case Bh:
                    return a;
                case Ah:
                    return (b - 1 - a) % c
            }
        }
        Y = Nz[M];
        Y.ex = function(a) {
            return 1 >= this.Ee[L] ? this.hr : s.abs(this.Ee[1].l - this.Ee[0].l) * a - this.Fy
        };
        Y.rk = function(a, b, c) {
            a = s[lb]((this.Ee[L] - a) / (b * c));
            return 2 > this.Ee[L] || 2 > a
        };
        Y.Lz = function(a, b, c, d) {
            for (var a = Oz(a, this.Ee[L], c, this.Rw), e = this.ex(c), f = []; a < this.Ee[L]; a += c) {
                var g = this.Ee[a],
                    i = g.v && !this.Ow ? s.min(e, 2 * g.l, 2 * (this.hr - g.l)) : e,
                    k = this.ir(g[z], i, d),
                    m = k.la;
                i < e && (m = this.ir(g[z], e, d).la);
                f[x]({
                    S: g.S,
                    v: g.v,
                    l: g.l,
                    Eo: b,
                    text: g[z],
                    width: k.ec,
                    me: k,
                    la: m
                })
            }
            return f
        };
        Y.Cr = function(a, b, c) {
            for (var d = a * b, c = 1 < a ? 1 : c, e = [], f = 0; f < a; f++) {
                var g = this.Lz(this.Ey + f * b, f * c, d, c);
                as(e, g)
            }
            es(e, function(a, b) {
                return a.l - b.l
            });
            return e
        };
        Y.Fn = function(a, b) {
            var c = this.Cr(a, b, this.wx);
            return Sr(c, function(a, b) {
                return {
                    pe: s.max(a.pe, b.me.f[L]),
                    la: a.la || b.la
                }
            }, {
                pe: 0,
                la: n
            })
        };
        Y.tl = function() {
            for (var a = 1, b = this.lk || 1, c = this.Fn(a, b), d = a; c.la && a < this.$r;) {
                a++;
                if (this.rk(0, a, b)) break;
                d = a;
                c = this.Fn(d, b)
            }
            a = b;
            if (!this.lk)
                for (; c.la;) {
                    b++;
                    if (this.rk(0, d, b)) break;
                    a = b;
                    c = this.Fn(d, a)
                }
            return {
                ql: d,
                We: a,
                pe: c.pe * d
            }
        };
        Y.Qn = function(a, b, c, d) {
            a = this.Cr(a, b, c);
            d = Sr(a, function(a, b) {
                var c = b.la ? 1 : 0;
                delete b.la;
                return a + c
            }, 0) <= a[L] * d;
            return {
                aj: a,
                Es: d
            }
        };
        Y.Mo = function(a, b, c, d) {
            for (var e = s.min(this.$r, c), a = s.min(a, e), b = this.lk || b, f = this.Qn(a, b, c, d), g = a; !f.Es && a < e;) {
                a++;
                if (this.rk(0, a, b)) break;
                g = a;
                f = this.Qn(g, b, c, d)
            }
            e = b;
            if (!this.lk)
                for (; !f.Es;) {
                    b++;
                    if (this.rk(0, g, b)) break;
                    e = b;
                    f = this.Qn(g, e, c, d)
                }
            return {
                ql: g,
                We: e,
                aj: f.aj
            }
        };

        function Pz(a, b, c, d, e, f) {
            Mz[P](this, a, b, Zr([$k + d, al], c), d, e, f);
            this.kl = b.or(this.s(To));
            a = b.R(this.s(Uo), 30);
            if (1 > a || 90 < a) a = 30;
            this.Iu = a;
            this.qj = ks(a);
            this.wo = b.R(this.s(ak));
            this.xo = b.R(this.s(vm), r);
            this.hl = b.R(this.s(um), 2);
            this.Yi = b.R(this.s(Jo), 0);
            this.el = b.U(this.s(Ko), Ox, Bh);
            this.yo = b.R(this.s(Bm), this.Z[N]);
            this.vo = b.$(this.s($g), n)
        }
        Ar(Pz, Mz);
        Y = Pz[M];
        Y.Kq = function() {
            return bl + this[sc]
        };
        Y.Wl = function(a, b, c) {
            return this.Kr(a, a.b[y], 1 == this[bb] ? a.b[F] : a.b[T], b, c)
        };
        Y.Nl = function(a, b, c, d) {
            if (0 == this[sc]) {
                var e = a.wb,
                    f = this.Z[N],
                    g = this[oc].u[N],
                    i = b.w[N],
                    k = a.Xg == cn ? this[oc][z] : U,
                    m = this,
                    p = new Nz(a[y], this.A, this.wo, this.xo, this.hl, this.Yi, this.el, this.yo, this.vo, function(a, b, c) {
                        return Tx(e, a, m.Z, b, c)
                    }),
                    q = this.Yi || 1,
                    t, w;
                if (this.tc == cn && !d)
                    if (this.kl != l) this.kl ? w = this.gj(e) : t = p.tl();
                    else if (this.A[L] * f / (this.hl * q) <= a[y]) {
                    if (t = p.tl(), t.We > q || 0 == t.pe) w = this.gj(e), t = l
                } else w = this.gj(e);
                var A = Tx(e, k, this[oc].u, a.b[y], r),
                    E = this.kd,
                    K = s.max(E, s[B](f / 1.618)),
                    V = s.max(E, s[B](f /
                        3.236)),
                    G = function() {
                        return {
                            key: Mp,
                            min: w.minHeight + E,
                            max: w.maxHeight + E,
                            T: [K - E]
                        }
                    },
                    ka = [];
                ka[x]({
                    key: ei,
                    min: E,
                    T: [r]
                });
                0 < A.f[L] && ka[x]({
                    key: Pp,
                    min: g + E,
                    T: [r]
                });
                b.nb() == di && ka[x]({
                    key: Kl,
                    min: i + E,
                    T: [r]
                });
                c.nb() == di && ka[x]({
                    key: kj,
                    min: c.uc() + E,
                    T: [r]
                });
                var Wa = ka[L];
                d || t && 0 < t.pe ? ka[x]({
                    key: Mp,
                    min: f + E,
                    T: [K - E]
                }) : w && ka[x](G());
                var fb = ka[L];
                if (t)
                    for (var fa = 1; fa < t.pe; fa++) ka[x]({
                        key: Mp,
                        min: f + E,
                        T: [V - E]
                    });
                f = ka[L];
                for (fa = 1; fa < A.f[L]; fa++) ka[x]({
                    key: Pp,
                    min: g + E,
                    T: [this.lo - E]
                });
                var g = yw(ka, a[S] - a.b[R]),
                    za = g.ticks || [],
                    Hb;
                t && (Hb = p.Mo(t.ql, t.We, za[L], 0), this.kl == l && Hb.We > q && (Hb = t = l, w = this.gj(e), ka[Wa] = G(), ka = zw(ka, 0, fb, f, aa), g = yw(ka, a[S] - a.b[R])));
                var Ga = a.b[R],
                    za = g.ticks || [];
                if (0 < za[L]) {
                    for (fa = 1; fa < za[L]; fa++) za[fa] += za[fa - 1];
                    if (d) {
                        p = Ga + za[0];
                        for (fa = 0; fa < d[L]; fa++) q = d[fa].m, Ua(q, q[Sc] || {
                            x: 0
                        }), q[Sc].y = p;
                        this.Nc = d
                    } else t ? this.Nc = Rr(Hb.aj, function(a) {
                        var b = Rr(a.me.f, function(b, c) {
                            return {
                                x: 0,
                                y: za[a.Eo + c],
                                length: a[y],
                                text: b
                            }
                        }, this);
                        return {
                            S: a.S,
                            v: a.v,
                            m: {
                                text: a[z],
                                u: this.Z,
                                f: b,
                                Va: Ci,
                                Oa: Uj,
                                G: a.me.la ? a[z] : U,
                                anchor: {
                                    x: a.l,
                                    y: Ga
                                }
                            }
                        }
                    }, this) : w && (fa = za[0], d = s.min(fa - E, w.maxHeight), this.Nc = this.cu(e, Ga + fa - d, d, w.We));
                    Ga += Mr(za)
                }
                d = g[oc] || [];
                if (0 < d[L]) {
                    p = Tx(e, k, this[oc].u, a.b[y], d[L]);
                    this[oc].G = p.la ? k : U;
                    for (fa = 0; fa < d[L]; fa++) Ga += d[fa], this[oc].Oa = Uj, this[oc].f[x]({
                        x: a.b[F] + a.b[y] / 2,
                        y: Ga,
                        length: a.b[y],
                        text: p.f[fa]
                    })
                }
                k = g.legend || [];
                0 < k[L] && (Ga += k[0], b.gd(new xt(Ga - i, a.b[T], Ga, a.b[F])));
                b = g.colorBar || [];
                0 < b[L] && (Ga += b[0], a = new xt(Ga - c.uc(), a.b[T], Ga, a.b[F]), c.gd(a))
            }
        };
        Y.gj = function(a) {
            function b(b) {
                b = a(b[z], c)[y] * e + d * f;
                return s[lb](b)
            }
            var c = this.Z,
                d = c[N],
                e = s.sin(this.qj),
                f = s.cos(this.qj),
                g = this.Yi;
            g || (g = 2 > this.A[L] ? 1 : s[lb]((d + this.kd) / e / s.abs(this.A[1].l - this.A[0].l)));
            for (var i = 0, k = 0; k < this.A[L]; k += g) i = s.max(b(this.A[k]), i);
            k = b({
                text: He
            });
            return {
                minHeight: s.min(i, k),
                maxHeight: i,
                We: g
            }
        };
        Y.cu = function(a, b, c, d) {
            for (var e = Oz(0, this.A[L], d, this.el), c = (c - this.Z[N] * s.cos(this.qj)) / s.sin(this.qj), c = s[D](c), f = []; e < this.A[L]; e += d) {
                var g = this.A[e],
                    i = Tx(a, g[z], this.Z, c, 1),
                    k = {
                        text: g[z],
                        u: this.Z,
                        f: [],
                        Dd: -this.Iu,
                        Va: Uj,
                        Oa: gp,
                        G: i.la ? g[z] : U,
                        anchor: {
                            x: g.l,
                            y: b
                        }
                    };
                0 < i.f[L] && k.f[x]({
                    x: 0,
                    y: 0,
                    length: c,
                    text: i.f[0]
                });
                f[x]({
                    S: g.S,
                    v: g.v,
                    m: k
                })
            }
            return f
        };
        Y.Ml = function(a) {
            if (0 == this[sc]) {
                var b = a.wb,
                    c = this.Z[N],
                    d = new Nz(a[y], this.A, this.wo, this.xo, this.hl, this.Yi, this.el, this.yo, this.vo, Z(function(a, c, d) {
                        return Tx(b, a, this.Z, c, d)
                    }, this)),
                    e;
                this.tc == ql && (e = d.tl());
                var f = this.kd,
                    g = s.max(this.kd, s[B](c / 3.236)),
                    i = s.max(this.kd, s[B](c / 1.618)),
                    i = this[I] == Jq ? g : i,
                    k = s.max(f, s[B](c / 3.236)),
                    m, p;
                this[I] == Jq ? this.oo == hl ? (m = gp, p = g) : (m = Uj, p = -g) : (m = Ci, p = 0);
                g = [];
                g[x]({
                    key: kq,
                    min: f,
                    T: [r]
                });
                if (e)
                    for (var q = 0; q < e.pe; q++) g[x]({
                        key: Mp,
                        min: c + f,
                        T: [(0 == q ? i : k) - f]
                    });
                var t = yw(g,
                    s[D](a.b[S] / 2)).ticks || [];
                if (0 < t[L]) {
                    for (q = 1; q < t[L]; q++) t[q] += t[q - 1];
                    c = d.Mo(e.ql, e.We, t[L], 0.5);
                    this.Nc = Rr(c.aj, function(b) {
                        var c = b.me.f;
                        c[jb]();
                        c = Rr(c, function(a, c) {
                            return {
                                x: 0,
                                y: -t[b.Eo + c],
                                length: b[y],
                                text: a
                            }
                        }, this);
                        return {
                            S: b.S,
                            v: b.v,
                            m: {
                                text: b[z],
                                u: this.Z,
                                f: c,
                                Va: m,
                                Oa: gp,
                                G: b.me.la ? b[z] : U,
                                anchor: {
                                    x: p + b.l,
                                    y: a.b[R]
                                }
                            }
                        }
                    }, this)
                }
            }
        };
        Y.ej = function(a) {
            var b = {};
            b.gg = -1 == this[bb];
            b.ng = a.b[F];
            b.mg = a.b[T];
            Fa(b, il);
            return b
        };
        Y.Iq = function(a) {
            return 0 == this[sc] ? {
                l: a.b[R],
                direction: -1
            } : {
                l: a.b.top,
                direction: 1
            }
        };

        function Qz(a, b, c, d, e, f) {
            Mz[P](this, a, b, Zr([Gq + d, Hq], c), d, e, f);
            this[I] == Jq && (this.direction = -this[bb])
        }
        Ar(Qz, Mz);
        Y = Qz[M];
        Y.Kq = function() {
            return Iq + this[sc]
        };
        Y.Wl = function(a, b, c) {
            return this.Kr(a, a.b[S], 1 == this[bb] ? a.b.top : a.b[R], b, c)
        };
        Y.Nl = function(a) {
            var b = a.wb,
                c = this.Z[N],
                d = this[oc].u[N],
                e = a.Xg == cn ? this[oc][z] : U,
                f = this.kd,
                g = Sr(this.A, function(a, c) {
                    return s.max(a, b(c[z], this.Z)[y])
                }, 0, this),
                i = b(He, this.Z)[y],
                i = s.min(i, g),
                k = Tx(b, e, this[oc].u, a.b[S], r),
                m = [];
            this.tc == cn ? m[x]({
                key: co,
                min: f,
                T: [c - f]
            }) : m[x]({
                key: co,
                min: 0,
                T: [r]
            });
            0 < k.f[L] && m[x]({
                key: Pp,
                min: d + f,
                T: [r]
            });
            this.tc == cn && m[x]({
                key: Mp,
                min: i + f,
                max: g + f,
                T: [r]
            });
            for (c = 1; c < k.f[L]; c++) m[x]({
                key: Pp,
                min: d + f,
                T: [this.lo - f]
            });
            var d = yw(m, 0 == this[sc] ? a.b[F] : a[y] - a.b[T]),
                p = 0 == this[sc] ? 0 : a[y],
                k = d[oc] || [];
            if (0 < k[L]) {
                m = Tx(b, e, this[oc].u, a.b[S], k[L]);
                this[oc].G = m.la ? e : U;
                for (c = 0; c < k[L]; c++) p += k[c] * (0 == this[sc] ? 1 : -1), this[oc].Dd = -90, this[oc].Oa = 0 == this[sc] ? Uj : gp, this[oc].f[x]({
                    x: p,
                    y: a.b.top + a.b[S] / 2,
                    length: a.b[S],
                    text: m.f[c]
                })
            }
            if (this.tc == cn) {
                var e = d.ticks[0] || 0,
                    p = p + e * (0 == this[sc] ? 1 : -1),
                    q = s.min(g, e - f);
                this.Nc = q < i ? [] : Rr(this.A, function(b, c) {
                    var d = 0 == this[sc] ? Uj : gp,
                        e = Ci;
                    this.Tt == fi && (0 == c && (e = 1 == this[bb] ? gp : Uj), c == this.A[L] - 1 && (e = 1 == this[bb] ? Uj : gp));
                    return this.fq(a, b, p, q, d, e, 0)
                }, this)
            }
        };
        Y.Ml = function(a) {
            var b = a.wb,
                c = this.Z[N],
                d = this.kd,
                e = s.max(this.kd, s[B](c / 3.236)),
                c = s.max(this.kd, s[B](c / 1.618)),
                c = this[I] == Jq ? e : c,
                f, g;
            this[I] == Jq ? this.oo == hl ? (f = Uj, g = e) : (f = gp, g = -e) : (f = Ci, g = 0);
            var e = Sr(this.A, function(a, c) {
                    return s.max(a, b(c[z], this.Z)[y])
                }, 0, this),
                i = b(He, this.Z)[y],
                i = s.min(i, e),
                k = [];
            k[x]({
                key: co,
                min: d,
                T: [r]
            });
            this.tc == ql && k[x]({
                key: Mp,
                min: i + d,
                max: e + c,
                T: []
            });
            var c = yw(k, a.b[y] / 2),
                m = 0 == this[sc] ? a.b[F] : a.b[T];
            if (this.tc == ql) {
                var c = c.ticks[0] || 0,
                    p = s.min(e, c - d),
                    m = m + (c - p) * (0 == this[sc] ? 1 :
                        -1);
                this.Nc = Rr(this.A, function(b) {
                    return this.fq(a, b, m, p, this[sc] == 0 ? gp : Uj, f, g)
                }, this)
            }
        };
        Y.fq = function(a, b, c, d, e, f, g) {
            var a = Tx(a.wb, b[z], this.Z, d, 1),
                i = Rr(a.f, function(a) {
                    return {
                        x: 0,
                        y: 0,
                        length: d,
                        text: a
                    }
                }, this);
            return {
                S: b.S,
                v: b.v,
                m: {
                    text: b[z],
                    u: this.Z,
                    f: i,
                    Va: e,
                    Oa: f,
                    G: a.la ? b[z] : U,
                    anchor: {
                        x: c,
                        y: b.l - g
                    }
                }
            }
        };
        Y.ej = function(a) {
            var b = {};
            b.gg = -1 == this[bb];
            b.ng = a.b.top;
            b.mg = a.b[R];
            Fa(b, Mq);
            return b
        };
        Y.Iq = function(a) {
            return 0 == this[sc] ? {
                l: a.b[F],
                direction: 1
            } : {
                l: a.b[T],
                direction: -1
            }
        };

        function Rz(a, b, c, d) {
            this.D = a;
            this.i = b;
            this.pa = c;
            this.Yf = l;
            this.g = d;
            this.cc = this.ma = this.qe = this.dl = this.Ba = this.ea = this.hb = this.pb = l;
            this.Kl = 1;
            this.Ui = l;
            this.Qi = b.gh(bq, Xv) != X;
            this.g.Gb = b.U(ek, Mx, Bj);
            d.Gb == vi && d.J != W && h(u("Focus target " + d.Gb + " is not supported for the chosen chart type."));
            d.J == ji ? this.qe = new Zy(this.D, this.i, this.pa, d) : (this.Yf = b.O(mj, Qx), this.uv());
            a = 0 < d.gb.bars || 0 < d.gb.area || 0 < d.gb.steppedArea;
            this.g.vd = this.i.$(Cl) && a;
            this.g.mo = this.i.$(Io, n);
            this.tv()
        }
        Y = Rz[M];
        Y.uv = function() {
            for (var a = this.g, b = this.D, c = a.J == no ? function() {
                    return no
                } : Z(function(b) {
                    return this.i.U(Bo + b + Se, xx, a.ko)
                }, this), d = [], e = [], f = l, g = l, i = 0, k = [], m = 0; m < b[tb](); ++m) {
                var p = b[Mb](m),
                    q = b.getColumnProperty(m, fo) || (0 == m ? Nj : xj);
                0 == m && q != Nj && h(u("First column must be a domain column"));
                q == Nj && (0 < i && h(u("Unexpected domain column (column #" + m + we)), f = {
                    K: {},
                    dataType: p
                }, g = {
                    ba: l,
                    Hc: e[L]
                }, e[x](f));
                q == xj && 0 == i && (g = d[L], i = c(g), f = {
                    type: i,
                    dataType: p,
                    K: {}
                }, g = {
                    ba: g,
                    Hc: l
                }, d[x](f), i = i == ui ? 4 : 1);
                q == xj && (i--, p !=
                    f[Qc] && h(u("All data columns of the same series must be of the same data type")));
                q == Xp && f.K[q] && h(u("Only one data column with role 'tooltip' per series is allowed"));
                f.K[q] = f.K[q] || [];
                k[x]({
                    ba: g.ba,
                    Hc: g.Hc,
                    Sk: q,
                    Ok: f.K[q][L]
                });
                f.K[q][x](m)
            }
            0 < i && h(u("Last serie does not have enough data columns (missing " + i + we));
            f = 0;
            c = e[0][Qc];
            for (m = 0; m < d[L]; ++m) {
                e[L] <= f && h(u("Serie #" + m + " does not have a domain column."));
                if ((p = e[f + 1]) && p.K[Cb][0] <= d[m].K[C][0]) ++f, c != e[f][Qc] && h(u("All domains must be of the same data type"));
                d[m].Hc = f
            }
            a.r = [];
            a.Me = {};
            for (var t = 0; t < b[mc](); t++) {
                m = b.getTableRowIndex(t);
                f = b[J](t, 0);
                p = Rr(e, function(a) {
                    return b[kd](t, a.K[Cb][0]) || U
                });
                f = {
                    data: f,
                    Wk: p,
                    Oe: m
                };
                if (p = e[0].K.tooltip) f.qa = this.Ki(p[0], t);
                a.r[x](f);
                a.Me[m] = t
            }
            a.d = [];
            for (t = 0; t < d[L]; t++) m = this.eu(t, d[t]), a.d[x](m);
            a.Sf = k;
            a.be = e;
            a.ph = c;
            a.gb = {};
            a.qh = {};
            this.dl = new Lu;
            for (t = 0; t < a.d[L]; ++t) d = a.d[t], this.dl.add(d.Ia), e = a.qh[d.Ia], e != l ? e != d[Qc] && h(u("All series on a given axis must be of the same data type")) : a.qh[d.Ia] = d[Qc], a.gb[d[I]] = (a.gb[d[I]] ||
                0) + 1;
            a.wd = [];
            for (d = 0; d < a.d[L]; d++) e = a.d[d], a.wd[x]({
                id: e.id,
                text: e.Pk,
                a: new vv({
                    fill: e[zb][zb]
                }),
                index: d,
                v: e.Fi
            })
        };
        Y.eu = function(a, b) {
            var c = b[I],
                d = b.K,
                e = b.Hc,
                f = this.i,
                g = Bo + a + Ge,
                i = d[C],
                k = this.D.getTableColumnIndex(i[0]),
                m = this.D[Jb](i[0]) || U,
                p = c == no ? 0 : 2,
                q = f.R([g + Cn, Cn], c == no ? 7 : 0),
                t = c == hm || c == wh || c == no ? 0 < q : j;
            0 == q && (q = c == no ? 7 : 6);
            q /= 2;
            0 < q && (q += 1);
            var w = f.O(g + aj, this.Yf[a % this.Yf[L]]),
                w = Yy(w),
                A = l;
            if (c == wh || c == jp) A = f.Uf([g + xh, xh]), A = xv(w[zb], A);
            var E = l;
            if (c == ui) var E = new vv({
                    stroke: w[zb],
                    Aa: 2,
                    fill: w[zb]
                }),
                K = new vv({
                    stroke: w[zb],
                    Aa: 2,
                    fill: ke
                }),
                V = f.$(si),
                G = V ? E : K,
                E = {
                    kv: f.Ne([g + ti, ti], V ? K : E),
                    jv: f.Ne([g + ri, ri], G)
                };
            p = f.R([g +
                jm, jm
            ], p);
            K = yv(w[zb], p);
            V = c == jp ? A : xv(w[zb]);
            G = this.lv(d, f, g, w);
            return {
                id: this.D.getColumnId(i[0]),
                title: m,
                dataType: b[Qc],
                v: j,
                Oe: k,
                K: d,
                Hc: e,
                Ha: G,
                color: w,
                Ko: V,
                Pa: K,
                po: A,
                Yp: E,
                type: c,
                Mi: f.Ke(g + br, 0),
                lineWidth: p,
                Bu: q,
                Vt: 12,
                Wf: f.U([g + sj, sj], Nx, X),
                Rk: f.R([g + Yo, Yo], 1),
                Do: t,
                c: [],
                ro: [],
                Ia: f.R([g + zp, zp], 0),
                Fi: f.$(g + Sq, j),
                Pk: f.ud(g + Hl, m)
            }
        };
        Y.lv = function(a, b, c, d) {
            function e(a, b) {
                return [c + zl + a + Ge + b, c + Al + b, zl + a + Ge + b, Al + b]
            }
            var f = a.interval;
            if (!f) return l;
            for (var a = {
                    ue: [],
                    bf: [],
                    oj: [],
                    c: [],
                    areas: [],
                    f: [],
                    mh: {}
                }, g = {}, i = 0; i < f[L]; i++) {
                var k = f[i],
                    m = this.D.getColumnId(k) || this.D[Jb](k) || Gj,
                    p = b.gh(e(m, up), yx);
                switch (p) {
                    case Jh:
                        a.ue[x](k);
                        break;
                    case lp:
                        a.bf[x](k);
                        break;
                    case hi:
                        a.oj[x](k);
                        break;
                    case Dn:
                        a.c[x](k);
                        break;
                    case wh:
                        a[md][x](k);
                        break;
                    case hm:
                        a.f[x](k);
                        break;
                    case X:
                        break;
                    default:
                        h(u("Invalid interval style: " + p))
                }
                m in g ? g[m][x](k) : g[m] = [k]
            }
            1 <
                a.ue[L] && 0 == a.bf[L] && (a.bf = [a.ue[0], a.ue[a.ue[L] - 1]]);
            0 != a.bf[L] % 2 && h(u("Stick-intervals must be defined by an even number of columns"));
            0 != a[md][L] % 2 && h(u("Area-intervals must be defined by an even number of columns"));
            for (m in g)
                for (var p = b.R(e(m, jm)), i = b.Uf(e(m, $j)), k = b.Tk(e(m, aj), us(zx), U), k = Sz(k, d), i = new vv({
                        stroke: k,
                        fill: k,
                        Cb: i,
                        Aa: p
                    }), k = b.R(e(m, Ih)), f = b.R(e(m, Fo)), q = b.R(e(m, gi)), t = b.R(e(m, Cn)), p = b.gh(e(m, up), yx), w = b.$(e(m, xl)[pb]([c + xl, xl])), A = b.U(e(m, sj)[pb]([c + sj, sj]), Nx, X), E = b.R(e(m, Yo)[pb]([c +
                        Yo, Yo
                    ]), 1), p = {
                        style: p,
                        a: i,
                        ou: k,
                        qu: f,
                        pu: q,
                        bu: t,
                        ae: w,
                        Wf: A,
                        Rk: E
                    }, f = g[m], i = 0; i < f[L]; ++i) k = f[i], a.mh[k] = p;
            return a
        };
        Y.tv = function() {
            var a = this.g;
            switch (a.J) {
                case W:
                    Fa(a, this.i.U(bn, Ex, U));
                    a[Wb] || h(u("Unspecified orientation."));
                    this.Ba = {};
                    this.pb = {};
                    this.hb = {};
                    var b, c, d, e;
                    switch (a[Wb]) {
                        case il:
                            d = Pz;
                            e = this.pb;
                            b = Qz;
                            c = this.hb;
                            break;
                        case Mq:
                            d = Qz, e = this.hb, b = Pz, c = this.pb
                    }
                    for (var f = this.dl.Be(), g = 0; g < f[L]; ++g) {
                        var i = f[g],
                            k = new b(a, this.i, [xp + i, yp], i, Jq, In);
                        k[I] != Jq && h(u("Target-axis must be of type value"));
                        this.Ba[i] = k;
                        c[i] = k
                    }
                    this.ea = new d(a, this.i, [Oj], 0, this.nw(), xm);
                    e[0] = this.ea;
                    break;
                case no:
                case ji:
                    this.pb = {
                        "0": new Pz(a,
                            this.i, [], 0, Jq, In)
                    }, this.hb = {
                        "0": new Qz(a, this.i, [], 0, Jq, In)
                    }
            }
            this.ow()
        };
        Y.nw = function() {
            if (this.D[Mb](0) == op) {
                var a = this.Xz();
                return this.Yz(a)
            }
            return Jq
        };
        Y.Xz = function() {
            var a = [hm, wh, jp, Jh, ui],
                b = {};
            Pr(a, function(a, c) {
                b[a] = c
            });
            var c = Sr(this.g.d, function(a, c) {
                return s.max(a, b[c[I]])
            }, 0);
            return a[c]
        };
        Y.Yz = function(a) {
            switch (a) {
                case wh:
                    return 1 < this.g.r[L] ? zi : vi;
                case hm:
                case Jh:
                case jp:
                case ui:
                    return vi
            }
            return l
        };
        Y.ow = function() {
            var a = this.g;
            switch (a.J) {
                case no:
                case ji:
                    a.ph == op && h(u("X values column cannot be of type string"));
                    var b = a.qh[0];
                    b == op && h(u("Data column(s) cannot be of type string"));
                    var c = this.pb[0],
                        d = this.hb[0];
                    c[I] != Jq && h(u("The x-axis must be of type value"));
                    c.Qj(a.ph, this.i);
                    d[I] != Jq && h(u("The y-axis must be of type value"));
                    d.Qj(b, this.i);
                    break;
                case W:
                    b = this.ea, b[I] == Jq && (a.ph == op && h(u("Domain column cannot be of type string, it should be the X values on a continuous domain axis")), b.Qj(a.ph,
                        this.i)), rs(this.Ba, function(b, c) {
                        var d = a.qh[c];
                        d == op && h(u("Data column(s) for axis #" + c + " cannot be of type string"));
                        b.Qj(d, this.i)
                    }, this)
            }
            rs(this.pb, function(a) {
                a.Wq()
            });
            rs(this.hb, function(a) {
                a.Wq()
            })
        };
        Y.Nu = function() {
            if (this.pm() === l) return [];
            for (var a = (this.g.be[0].K[Cb] || [])[0], b = [], c = l, d = this.D, e = 0; e < d[mc](); e++) {
                var f = d[J](e, a),
                    g = this.jg(e);
                c !== l && g != l && (0 > g && h(u("Invalid gap value (" + g + ") in data row #" + e + ". Gap value must be non-negative.")), b[x]({
                    mx: c,
                    kx: f,
                    lx: g
                }));
                c = f
            }
            return b
        };
        Y.Mp = function() {
            return this.hb[0] != l
        };
        Y.Vl = function() {
            return this.hb[1] != l
        };
        Y.Em = function() {
            return this.qe && this.qe.pt() ? l : this.Mp() && this.Vl() ? jq : !this.Vl() ? bo : Jl
        };
        Y.ew = function() {
            return this.qe && this.qe.pt() ? jq : l
        };
        Y.Tu = function() {
            for (var a = this.g, b = this.D, c = this.ea, d = 0; d < a.r[L]; d++) {
                for (var e = 0; e < a.d[L]; e++) {
                    var f = a.d[e],
                        g = this.Ba[f.Ia],
                        f = b[J](d, f.K[C][0]),
                        f = g.n.jf(f);
                    f != l && g.zg(f)
                }
                c[I] == Jq && (e = b[J](d, 0), e = c.n.jf(e), c.zg(e))
            }
        };
        Y.Uu = function() {
            for (var a = this.g, b = this.D, c = this.pb[0], d = this.hb[0], e = 0; e < b[mc](); e++)
                for (var f = 0; f < a.d[L]; f++) {
                    var g = a.d[f],
                        i = g.K[C][0],
                        g = b[J](e, a.be[g.Hc].K[Cb][0]),
                        i = b[J](e, i),
                        g = c.n.jf(g),
                        i = d.n.jf(i);
                    g != l && c.zg(g);
                    i != l && d.zg(i)
                }
        };
        Y.Cm = function(a, b) {
            var c = this.g;
            this.ma = a;
            this.cc = b;
            this.Ru();
            c.vd && rs(this.Ba, function(a) {
                a.V(0)
            });
            if (c.J == W) this.Tu(), this.ea[I] == Jq && this.ea.tg(this.Nu()), this.ea.uj(this.i), rs(this.Ba, function(a) {
                a.tg();
                a.uj(this.i)
            }, this);
            else {
                var d = this.pb[0],
                    e = this.hb[0];
                c.J == ji ? this.qe.Su(d, e) : c.J == no && this.Uu();
                d.tg();
                d.uj(this.i);
                e.tg();
                e.uj(this.i)
            }
            c.gb.bars && this.Np(Jh);
            c.gb.steppedArea && (this.ea[I] == Jq && h(u("Stepped area series with value domain axis is not supported.")), this.Np(jp));
            c.gb.candlesticks &&
                this.Lu();
            c.gb.line && (this.Ou(), this.Op());
            c.gb.area && this.Ju();
            c.gb.scatter && (this.Pu(), this.Op());
            c.gb.bubbles && this.qe.Ku(this.pb[0], this.hb[0], b);
            c.Ja = ss(this.pb, function(d) {
                return d.Wl(c, a, b)
            });
            c.va = ss(this.hb, function(d) {
                return d.Wl(c, a, b)
            });
            this.Qu();
            this.Mu();
            this.Wu();
            c.J == W && c[Wb] == il && this.Vu();
            var d = this.ma.nb(),
                e = this.ma.w[N],
                f = l;
            if ((d == bo || d == Il) && !this.Vl()) f = new xt(c.b.top, c[y] - e, c.b[R], c.b[T] + e);
            d == Jl && !this.Mp() && (f = new xt(c.b.top, c.b[F] - e, c.b[R], e));
            f && f[T] >= f[F] && this.ma.gd(f);
            this.Xu()
        };
        Y.Ru = function() {
            var a = this.g,
                b = this.pa,
                c = ts(this.pb)[oc].u,
                d = s.max(a[oc].u[N], c[N]),
                e = this.ma.w[N],
                f = this.ma.nb(),
                g = this.cc.w[N],
                i = this.cc.nb(),
                k = a.Qf == ql ? a[oc][z] : U,
                m = U,
                p = U;
            if (a.Xg == ql) {
                var q = function(a) {
                    var b = vs(a);
                    es(b);
                    b = Rr(b, function(b) {
                        return a[b][oc][z]
                    });
                    return Qr(b, function(a) {
                        return a != U
                    })[pd](ye)
                };
                switch (a.J) {
                    case no:
                    case ji:
                        m = q(this.pb);
                        p = q(this.hb);
                        break;
                    case W:
                        m = q({
                            "0": this.ea
                        }), p = q(this.Ba)
                }
            }
            var m = m && p ? m + yd + p : m ? m : p ? p : U,
                p = s.max(2, s[B](d / 1.618)),
                t = s.max(2, s[B](e / 1.618)),
                w = s.max(2, s[B](g /
                    1.618)),
                A = a.b[y] - 2 * p,
                g = Tx(b, k, a[oc].u, A, 1),
                q = 0 < g.f[L] ? g.f[0] : U,
                E = b(q, a[oc].u)[y],
                K = s[B](s.max(2, 1.618 * d)),
                A = s.max(A - E - K, 0),
                b = Tx(b, m, c, A, 1),
                K = 0 < b.f[L] ? b.f[0] : U,
                V = [];
            V[x]({
                key: ei,
                min: 2,
                T: [r]
            });
            (q || K) && V[x]({
                key: Pp,
                min: d + 2,
                T: [p - 2]
            });
            f == ql && V[x]({
                key: Kl,
                min: e + 2,
                T: [t - 2]
            });
            i == ql && V[x]({
                key: kj,
                min: this.cc.uc() + 2,
                T: [w - 2]
            });
            f = yw(V, s[D](a.b[S] / 2));
            d = a.b.top;
            i = f[oc] || [];
            if (0 < i[L] && (d += i[0], q && (a[oc].f[x]({
                    text: q,
                    x: a.b[F] + p,
                    y: d,
                    length: E
                }), a[oc].G = g.la ? k : U), K)) a.bh = {
                text: m,
                u: c,
                f: [],
                Va: Uj,
                Oa: Uj,
                G: b.la ? m : U
            }, a.bh.f[x]({
                text: K,
                x: a.b[T] - p,
                y: d,
                length: A
            });
            c = f.legend || [];
            0 < c[L] && (d += c[0], this.ma.gd(new xt(d - e, a.b[T], d, a.b[F])));
            e = f.colorBar || [];
            0 < e[L] && (d += e[0], a = new xt(d - this.cc.uc(), a.b[T], d, a.b[F]), this.cc.gd(a))
        };
        Y.Np = function(a) {
            this.g.vd ? this.My(a) : this.Ly(a)
        };
        Y.My = function(a) {
            for (var b = this.g, c = this.D, d = this.ea, e = 0; e < b.r[L]; e++)
                for (var f = 0 == this.jg(e), g = ss(this.Ba, function() {
                        return [0, 0]
                    }), i = 0; i < b.d[L]; i++) {
                    var k = b.d[i];
                    if (k[I] == a) {
                        var m = k.c;
                        if (f) m[x](l);
                        else {
                            var p = k.Ia,
                                q = this.Ba[p],
                                t = c[J](e, k.K[C][0]),
                                t = q.n.ha(t);
                            if (t === l) m[x](l);
                            else {
                                var w = this.$f(e);
                                d.V(w);
                                var A = 0 < t ? 0 : 1,
                                    p = g[p];
                                d.Rc(w) && q.V(p[A] + t);
                                q = {
                                    Fb: {
                                        Ad: e,
                                        Se: 0,
                                        th: p[A],
                                        Zi: p[A] + t,
                                        Uc: w,
                                        wh: this.hj(k, e, p[A], j)
                                    }
                                };
                                k[I] == jp && (w = m[L], q.Fb.il = 0 == w || !m[w - 1] ? l : m[w - 1].Fb.Zi);
                                this.kg(q, k, e);
                                m[x](q);
                                p[A] += t
                            }
                        }
                    }
                }
        };
        Y.Ly = function(a) {
            var b = this.g,
                c = this.D,
                d = this.ea,
                e = Qr(b.d, function(b) {
                    return b[I] == a
                });
            Pr(b.r, function(a, b) {
                var i = 0 == this.jg(b);
                Pr(e, function(a, e) {
                    if (i) a.c[x](l);
                    else {
                        var f = this.Ba[a.Ia],
                            q = a.K[C][0],
                            t = c[J](b, q),
                            w = f.n,
                            t = w.ha(t);
                        if (t === l) a.c[x](l);
                        else {
                            var A = this.$f(b);
                            d.V(A);
                            d.Rc(A) && f.V(t);
                            this.mp(e + 1);
                            f = {
                                Fb: {
                                    Ad: b,
                                    Se: e,
                                    th: l,
                                    Zi: t,
                                    Uc: A,
                                    wh: this.hj(a, b, 0, j)
                                }
                            };
                            a[I] == jp && (f.Fb.il = 0 == b ? l : w.ha(c[J](b - 1, q)));
                            this.kg(f, a, b);
                            a.c[x](f)
                        }
                    }
                }, this)
            }, this);
            rs(this.Ba, function(a) {
                a.Au()
            })
        };
        Y.Lu = function() {
            var a = this.g,
                b = this.D,
                c = this.ea,
                d = Qr(a.d, function(a) {
                    return a[I] == ui
                });
            Pr(a.r, function(a, f) {
                var g = 0 == this.jg(f);
                Pr(d, function(a, d) {
                    if (g) a.c[x](l);
                    else {
                        var e = a.K[C],
                            p = this.Ba[a.Ia];
                        this.mp(d + 1);
                        var q = b[J](f, e[0]),
                            t = b[J](f, e[1]),
                            w = b[J](f, e[2]),
                            e = b[J](f, e[3]),
                            q = p.n.ha(q),
                            t = p.n.ha(t),
                            w = p.n.ha(w),
                            e = p.n.ha(e);
                        if (q === l || e === l || t === l || w === l) a.c[x](l);
                        else {
                            var A = this.$f(f);
                            c.V(A);
                            var E = w < t;
                            c.Rc(A) && (p.V(q), p.V(e));
                            p = {
                                no: this.dp(E, a),
                                Pa: xv(a[zb][zb]),
                                Fb: {
                                    Ad: f,
                                    Se: d,
                                    gu: q,
                                    lineTo: e,
                                    hu: E ? w : t,
                                    iu: E ?
                                        t : w,
                                    fu: E,
                                    Uc: A
                                }
                            };
                            this.kg(p, a, f);
                            a.c[x](p)
                        }
                    }
                }, this)
            }, this)
        };
        Y.Ou = function() {
            for (var a = this.g, b = this.D, c = this.ea, d = 0; d < a.r[L]; d++)
                for (var e = 0; e < a.d[L]; e++) {
                    var f = a.d[e];
                    if (f[I] == hm) {
                        var g = this.Ba[f.Ia],
                            i = b[J](d, f.K[C][0]),
                            i = g.n.ha(i),
                            k;
                        if (i != l) {
                            var m = this.$f(d);
                            c.V(m);
                            (k = c.Rc(m)) && g.V(i);
                            g = this.hj(f, d, 0, k)
                        } else k = n, g = l;
                        g = {
                            Fb: {
                                Ad: d,
                                Se: 0,
                                Uc: m,
                                Te: i,
                                wh: g
                            },
                            No: k
                        };
                        i == l && (g.Zb = j);
                        this.kg(g, f, d);
                        f.c[x](g)
                    }
                }
            this.jp();
            this.Cl()
        };
        Y.jp = function() {
            for (var a = this.ea, b = this.g.d, c = 0; c < b[L]; c++) {
                var d = b[c];
                if (!(d[I] != hm && d[I] != wh) && 0 != d[qd]) {
                    var e = this.Ba[d.Ia],
                        f = Rr(d.c, function(a) {
                            return !a || a.Zb ? l : new $(a.Fb.Uc, a.Fb.Te)
                        }),
                        g = this.g.ae,
                        d = Hw(f, a.hp(), g),
                        f = Hw(f, a.yv(), g);
                    e.V(d);
                    e.V(f)
                }
            }
        };
        Y.Ju = function() {
            for (var a = this.g, b = this.D, c = this.ea, d = 0; d < a.r[L]; d++)
                for (var e = ss(this.Ba, function() {
                        return 0
                    }), f = xs(e), g = xs(e), i = 0; i < a.d[L]; i++) {
                    var k = a.d[i];
                    if (k[I] == wh) {
                        var m = k.Ia,
                            p = this.Ba[m],
                            q = l,
                            t = l,
                            w = k.K[C][0],
                            A = b[J](d, w),
                            A = p.n.ha(A),
                            E = this.$f(d);
                        if (A != l) {
                            var K, V, G;
                            a.vd ? (K = A + g[m], q = f[m], t = e[m], V = f[m] + A, G = e[m] + A, d == b[mc]() - 1 || !kr(b[J](d + 1, w)) ? f[m] += A : V = f[m], 0 == d || !kr(b[J](d - 1, w)) ? e[m] += A : G = e[m]) : (V = G = K = A, V = d == b[mc]() - 1 || !kr(b[J](d + 1, w)) ? K : l, G = 0 == d || !kr(b[J](d - 1, w)) ? K : l);
                            c.V(E);
                            (w = c.Rc(E)) && p.V(K);
                            p = this.hj(k, d, g[m], w);
                            a.vd && (g[m] = K);
                            m = {
                                Uc: E,
                                Te: K,
                                Ad: d,
                                Se: 0,
                                Wo: E,
                                zl: G,
                                Vo: E,
                                yl: V,
                                Uo: E,
                                xl: q,
                                To: E,
                                wl: t,
                                wh: p
                            }
                        } else a.vd && (q = f[m], t = e[m]), m = {
                            Uo: E,
                            xl: q,
                            To: E,
                            wl: t,
                            Wo: E,
                            zl: t,
                            Vo: E,
                            yl: q
                        }, w = n;
                        m = {
                            Fb: m,
                            No: w
                        };
                        this.kg(m, k, d);
                        A == l && (m.Zb = j);
                        k.c[x](m)
                    }
                }
            this.jp();
            this.Cl()
        };
        Y.Pu = function() {
            for (var a = this.g, b = this.D, c = this.pb[0], d = this.hb[0], e = 0; e < b[mc](); e++)
                for (var f = 0; f < a.d[L]; f++) {
                    var g = a.d[f],
                        i = g.Hc;
                    if (g[I] == no) {
                        var k = g.K[C][0],
                            i = b[J](e, a.be[i].K[Cb][0]),
                            m = b[J](e, k),
                            k = c.n.ha(i),
                            i = d.n.ha(m);
                        if (k !== l && i !== l) {
                            if (m = c.Rc(k) && d.Rc(i)) c.V(k), d.V(i);
                            k = {
                                Fb: {
                                    x: k,
                                    y: i
                                },
                                nu: m
                            };
                            this.kg(k, g, e);
                            g.c[x](k)
                        } else g.c[x](l)
                    }
                }
            this.Cl()
        };
        Y.Cl = function() {
            function a(a) {
                return !(!a || a.Zb)
            }
            for (var b = Z(function(a) {
                    var b = a.Fb != l ? a.Fb.Ad : l;
                    return {
                        Jh: a.Jh != l ? a.Jh : 1,
                        gf: a.gf != l ? a.gf : 1,
                        scope: a[Ec] != l ? a[Ec] : j,
                        Cv: b != l ? this.jg(b) : l
                    }
                }, this), c = this.pm() === l, d = 0; d < this.g.d[L]; d++) {
                var e = this.g.d[d],
                    f = e.po,
                    g = e.K.emphasis || [],
                    i = e.K[Ec] || [];
                if (!(0 == (e.K.certainty || [])[L] && 0 == g[L] && 0 == i[L] && c))
                    for (var g = Xr(e.c, a), k = b(g || {}), i = 0; i < e.c[L]; i++) {
                        var m = e.c[i];
                        if (m && !m.Zb) {
                            var p = b(m),
                                q = e.Pa;
                            !p[Ec] && !k[Ec] && (e.nq = e.nq || q.Eh(), q = e.nq, m.Od = q, f && (e.mq = e.mq || f.Eh(),
                                m.$t = e.mq));
                            if (1 > p.Jh || 1 > k.Jh) q = this.Yl(q, n), m.Od = q;
                            1 != p.gf && 1 != k.gf && (k = s.min(k.gf, p.gf), q = this.Bv(q, k), m.Od = q);
                            0 == p.Cv && (g && !g.Zb) && (m.Od = l);
                            k = p
                        }
                        g = m
                    }
            }
        };
        Y.kg = function(a, b, c) {
            if (this.Qi) {
                var d = b.K.tooltip;
                d && (a.qa = this.Ki(d[0], c));
                if (!a.qa || !a.qa.Id) d = a.qa ? a.qa.af : n, a.qa = this.Ll(b, c), a.qa.af = d
            }
            var d = this.yw(b, c),
                e = this.zw(b, c),
                c = this.Aw(b, c),
                f = b.Ko,
                g = by(a, b);
            c || (a.scope = c, b.br = b.br || f.Eh(), f = b.br, a.a = f);
            if (1 != e && (a.gf = e, b[I] == hm || b[I] == wh || b[I] == no)) g = s[B](10 * g * s[Pb](e)) / 10, a.Pb = g;
            if (1 > d) switch (a.Jh = d, b[I]) {
                case hm:
                case wh:
                case no:
                    a.a = this.Yl(f, j);
                    a.Pb = s.max(g - a.a.ar() / 2, 0);
                    break;
                case Jh:
                case jp:
                    a.a = this.Yl(f, n)
            }
        };
        Y.Ki = function(a, b) {
            var c = this.D,
                d = this.g.cg && (c.getProperty(b, a, kl) || c.getColumnProperty(a, kl)),
                c = c[kd](b, a);
            return {
                af: d,
                Id: c ? j : n,
                content: c
            }
        };
        Y.Ll = function(a, b) {
            switch (this.g.J) {
                case no:
                    return this.ly(a, b);
                case W:
                    return this.ky(a, b)
            }
        };
        Y.ly = function(a, b) {
            var c = this.D,
                d = a.K[C][0];
            return {
                Id: n,
                content: c[kd](b, this.g.be[a.Hc].K[Cb][0]) + yd + c[kd](b, d),
                ne: a[oc]
            }
        };
        Y.ky = function(a, b) {
            var c = this.D,
                d = this.g.r[b],
                e = a.K[C];
            if (a[I] == ui) e = c[kd](b, e[0]) + xd + c[kd](b, e[3]) + ye + c[kd](b, e[1]) + xd + c[kd](b, e[2]);
            else {
                var f = this.D[J](b, e[0]),
                    e = this.D[kd](b, e[0]);
                if (f === l && /^[\s\xa0]*$/ [eb](e)) return {
                    Id: n,
                    content: l
                };
                f = a.K.interval || [];
                f[L] && (f = Rr(f, function(a) {
                    return c[kd](b, a)
                }), e += zd + f[pd](ye) + Og)
            }
            return {
                Id: n,
                content: e,
                $l: d.Wk[a.Hc],
                ne: a[oc]
            }
        };
        Y.Op = function() {
            function a(a) {
                return {
                    Uc: a.x,
                    Te: a.y
                }
            }

            function b(a) {
                return new ru(a.Uc, a.Te)
            }

            function c(a) {
                return {
                    x: a.x,
                    y: a.y
                }
            }

            function d(a) {
                return new ru(a.x, a.y)
            }
            var e = this.g,
                f = this.ea,
                g = Z(function(a, b, c) {
                    b.nu && (this.pb[0].V(c.x), this.hb[0].V(c.y))
                }, this),
                i = Z(function(a, b, c) {
                    f.V(c.Uc);
                    b.No && this.Ba[a.Ia].V(c.Te)
                }, this),
                k, m, p;
            switch (e.J) {
                case no:
                    k = d;
                    m = c;
                    p = g;
                    break;
                case W:
                    k = b, m = a, p = i
            }
            for (g = 0; g < e.d[L]; g++)
                if (i = e.d[g], i[I] == no || i[I] == hm)
                    if (0 <= Or([W, qn, Zi], i.Wf)) {
                        var q = i[I] == no && i.Wf == Zi,
                            t = i.Wf == W;
                        i.Ol =
                            j;
                        i.su = q;
                        q = sw(Rr(i.c, function(a) {
                            return !a || a.Zb ? l : k(a.Fb)
                        }), i.Rk, t, q, e.ae);
                        for (t = 0; t < i.c[L]; ++t) {
                            var w = i.c[t];
                            if (q[t]) {
                                var A = m(q[t][0]),
                                    E = m(q[t][1]);
                                w.kp = A;
                                w.lp = E;
                                p(i, w, A);
                                p(i, w, E)
                            }
                        }
                    } else i.Ol = n
        };
        Y.Mu = function() {
            if (this.g.Gb == vi) {
                for (var a = this.g.r, b = this.ea, c = b.ac, d = b.xb, e, f, g = 0; g < a[L]; g++)
                    if (f = this.mr(g), f != l) {
                        if (b.nr(f)) return;
                        if (!b.$w(f)) {
                            e = g;
                            break
                        }
                    }
                if (jr(e))
                    for (var i, g = e; g < a[L]; g++) {
                        e = c;
                        if (g == a[L] - 1) {
                            this.Qm(g, e, d);
                            break
                        }
                        i = this.mr(g + 1);
                        if (i != l) {
                            if (b.nr(i)) {
                                this.Qm(g, e, d);
                                break
                            }
                            c = ms(f, i);
                            this.Qm(g, e, c);
                            f = i
                        }
                    }
            }
        };
        Y.mr = function(a) {
            var b = this.g.r,
                c = this.ea;
            return c[I] == Jq ? b[a][C] == l ? l : c.lg(b[a][C]) : c.Ka(a)
        };
        Y.Qm = function(a, b, c) {
            var d = this.g.b.top,
                e = this.g.b[R],
                f = this.g.b[F],
                g = this.g.b[T],
                i = this.ea[bb];
            this.g.r[a].iw = this.g[Wb] == il ? 1 == i ? new xt(d, c, e, b) : new xt(d, b, e, c) : 1 == i ? new xt(b, g, c, f) : new xt(c, g, b, f)
        };
        Y.Xu = function() {
            this.CB();
            this.DB()
        };
        Y.CB = function() {
            var a = this.g;
            rs(a.va, function(b, c) {
                this.Wm(this.hb[c], a.va[c], this.yx)
            }, this);
            rs(a.Ja, function(b, c) {
                this.Wm(this.pb[c], a.Ja[c], this.xx)
            }, this)
        };
        Y.DB = function() {
            var a = this.g;
            rs(a.Ja, function(b, c) {
                this.Wm(this.pb[c], a.Ja[c], this.ey)
            }, this)
        };
        Y.Wm = function(a, b, c) {
            b[z] && qa(b, Qr(b[z], Z(c, this, a)))
        };
        Y.xx = function(a, b) {
            var c = this.g,
                d = b.m;
            if (d.Dd) return j;
            d = Sx(d);
            return !d ? j : a.tc == ql && !(new xt(c.b.top, c.b[T], c.b[R], c.b[F]))[fd](d) ? n : j
        };
        Y.ey = function(a, b) {
            var c = this.g;
            if (a.tc != ql) return j;
            var d = b.m;
            if (d.Dd) return j;
            var e = Sx(d);
            if (!e) return j;
            var d = d.u[N] / 2,
                f = new xt(e.top, e[T] + d, e[R], e[F] - d),
                g;
            for (g in c.va) {
                var i = ja(g);
                if (this.hb[i].tc == ql && !(1 > (c.va[i][z] ? c.va[i][z][L] : 0))) {
                    var k = Sx(c.va[i][z][0].m),
                        m = Sx(Mr(c.va[i][z]).m);
                    if (k || m) {
                        if (k && yt(f, k) || m && yt(f, m)) return n;
                        k ? m ? (i = s.min(k[F], m[F]), k = s.max(k[T], m[T])) : (i = k[F], k = k[T]) : (i = m[F], k = m[T]);
                        if (s.abs(e[F] - i) < d || s.abs(e[T] - k) < d) return n
                    }
                }
            }
            return j
        };
        Y.yx = function(a, b) {
            var c = this.g,
                d = new xt(c.b.top, c.b[T], c.b[R], c.b[F]),
                e = b.m,
                f = e.u[N] / 2,
                e = Sx(e);
            if (!e) return j;
            if (a.tc == ql && !d[fd](e)) return n;
            d = new xt(e.top, e[T] + f, e[R], e[F] - f);
            return (f = Sx(c[oc])) && yt(d, f) || (c = c.bh ? Sx(c.bh) : l) && yt(d, c) ? n : (c = this.ma.L) && yt(d, c) ? n : j
        };
        Y.Vu = function() {
            var a = this.g,
                b = this.ea,
                c = this.i,
                d = {
                    eb: a.ed,
                    fontSize: a.Fc,
                    fb: a.Je
                },
                e = c.sc([qh, th], d),
                f = c.fd([oh, rh], U),
                g = c.U([ph, sh], Px, fm);
            Pr(this.g.r, function(c, d) {
                var i = [],
                    k = [];
                Pr(a.be, function(a) {
                    a = this.Oo(d, a.K, g);
                    as(i, a.cj);
                    as(k, a.Wa)
                }, this);
                if (i[L] || k[L]) {
                    var m = this.$f(d),
                        m = b.Ka(m),
                        p = a.b.top + a.b[S];
                    i[L] && (c.xa = this.Qo(m, p, i, e, 5, f));
                    k[L] && (c.xa = this.Ro(m, l, k, e, f))
                }
            }, this);
            var i = us(zx),
                k = c.Po([nh, th], i, d),
                m = c.Tk([lh, rh], i, U),
                p = c.U([mh, sh], Px, fm);
            Pr(this.g.d, function(a, b) {
                if (a[I] == wh || a[I] == hm) {
                    var d =
                        Bo + b + Ie,
                        e = c.Po(d + Ip, i, k);
                    xa(e, Sz(e[zb], a[zb]));
                    var f = c.Tk(d + ip, i, m),
                        f = Sz(f, a[zb]);
                    c.U(d + up, Px, p);
                    for (d = 0; d < a.c[L]; ++d)
                        if (a.c[d] != l) {
                            var g = this.Oo(d, a.K, p),
                                V = a.c[d].h;
                            g.cj[L] && (a.c[d].xa = this.Qo(V.x, V.y, g.cj, e, 12, f));
                            g.Wa[L] && (a.c[d].xa = this.Ro(V.x, V.y, g.Wa, e, f))
                        }
                }
            }, this)
        };
        Y.Oo = function(a, b, c) {
            var d = this.D,
                e = b.annotation,
                f = {
                    Wa: [],
                    cj: []
                };
            if (e == l) return f;
            for (var b = b.annotationText || [], g = 0; g < e[L]; ++g) {
                var i = e[g],
                    k = i + 1,
                    m = 0 <= Or(b, k);
                d[J](a, i) && (k = {
                    text: d[kd](a, i),
                    Hp: m ? k : l,
                    rowIndex: a
                }, this.i.U(hh + i + Pe, Px, c) == hm ? f.Wa[x](k) : f.cj[x](k))
            }
            return f
        };
        Y.Qo = function(a, b, c, d, e, f) {
            var g = b - e,
                i = g,
                k = -e,
                m = c[L],
                p = e + d[N] * m;
            b - p < this.g.b.top && b + p < this.g.b[R] && (g = b + p, i = b + e + d[N], k = e);
            e = l;
            1 < m && (e = c[0][z] + Ad, e = {
                Nk: n,
                label: {
                    text: e,
                    u: d,
                    f: [{
                        x: a,
                        y: i,
                        length: this.pa(e, d)[y],
                        text: e
                    }],
                    Va: Ci,
                    Oa: Uj
                }
            }, this.Qi && (e.label.G = Xf));
            i = [];
            for (p = 0; p < m; p++) {
                var q = c[p],
                    t = this.pa(q[z], d),
                    t = {
                        text: q[z],
                        u: d,
                        f: [{
                            x: a,
                            y: g,
                            length: t[y],
                            text: q[z]
                        }],
                        Va: Ci,
                        Oa: Uj
                    },
                    w = q.Hp;
                this.Qi && w != l && (t.qa = this.Ki(w, q.rowIndex));
                i[x](t);
                g -= d[N]
            }
            return {
                Zo: {
                    x: a,
                    y: b,
                    length: k,
                    orientation: Mq,
                    color: f
                },
                labels: i,
                hd: e
            }
        };
        Y.Ro = function(a, b, c, d, e) {
            for (var f = d[N], g = [], i = 0; i < c[L]; i++) {
                var k = c[i],
                    m = Tx(this.g.wb, k[z], d, this.g.b[S] - f);
                g[x](m)
            }
            if (b != l) {
                for (i = k = 0; i < g[L]; i++) m = g[i], k = s.max(k, m.ec);
                i = k + f;
                b = s[B](b - i / 2);
                b < this.g.b.top && (b = this.g.b.top);
                f = b + i;
                f > this.g.b[R] && (f = this.g.b[R], b = f - i)
            } else b = this.g.b.top, f = this.g.b[R];
            for (var p = s[B]((b + f) / 2), q = a + 2, t = [], i = 0; i < c[L]; i++) {
                var k = c[i],
                    m = g[i],
                    m = {
                        text: k,
                        u: d,
                        f: [{
                            x: q,
                            y: p,
                            length: m.ec,
                            text: m.f[0]
                        }],
                        Va: Ci,
                        Oa: gp,
                        Dd: 270
                    },
                    w = k.Hp;
                this.Qi && w != l && (m.qa = this.Ki(w, k.rowIndex));
                t[x](m);
                q +=
                    d[N]
            }
            return {
                Zo: {
                    x: a,
                    y: b,
                    length: f - b,
                    orientation: Mq,
                    color: e
                },
                labels: t,
                hd: l
            }
        };
        Y.Wu = function() {
            Pr(this.g.d, function(a) {
                var b = this.wv(a);
                a.c && Pr(a.c, function(a) {
                    if (a != l && (a.h = b(a.Fb), a.kp != l && (a.Pd = b(a.kp)), a.lp != l)) a.Qd = b(a.lp)
                });
                a.Ha && (0 < a.Ha.f[L] || 0 < a.Ha[md][L]) && this.xv(a)
            }, this)
        };
        Y.xv = function(a) {
            function b(b) {
                var e = c[b];
                delete c[b];
                if (e && 1 < e.Wa[L]) {
                    e[R] && e[R][jb]();
                    if (d[b].Wf != X) {
                        var f = d[b].Wf == W,
                            b = d[b].Rk;
                        e.ro = sw(e.Wa, b, f, n, n);
                        e[R] && (e.Yu = sw(e[R], b, f, n, n))
                    }
                    a.Ha.fe[x](e)
                }
            }
            var c = {},
                d = a.Ha.mh;
            a.Ha.fe = [];
            for (var e = 0; e < a.c[L]; e++) {
                var f = {},
                    g = a.c[e];
                if (g && g.h && g.h.xd)
                    for (var g = g.h.xd, i = 0; i < g[L]; ++i) {
                        var k = g[i].hh,
                            m = d[k][O];
                        if (m == wh || m == hm) {
                            f[k] = j;
                            var m = k,
                                p = g[i][Fc];
                            if (!c[m]) {
                                var q = m,
                                    t = d[q].a[Oc](),
                                    w = d[q][O],
                                    A = {};
                                A.hh = q;
                                A.Wa = [];
                                w == wh ? (t.Re(0), Xa(A, [])) : t.Fl(0);
                                A.a = t;
                                c[q] = A
                            }
                            c[m].Wa[x](new ru(p[F],
                                p.top));
                            c[m][R] && c[m][R][x](new ru(p[F] + p[y], p.top + p[S]))
                        }
                    }
                for (k in c) !f[k] && !d[k].ae && b(k)
            }
            for (k in c) b(k)
        };
        Y.wv = function(a) {
            switch (a[I]) {
                case no:
                    return Z(this.QA, this, a);
                case ni:
                    return Z(this.NA, this, a);
                case hm:
                    return Z(this.PA, this, a);
                case Jh:
                    return Z(this.MA, this, a);
                case jp:
                    return Z(this.RA, this, a);
                case ui:
                    return Z(this.OA, this, a);
                case wh:
                    return Z(this.LA, this, a)
            }
            return l
        };
        Y.QA = function(a, b) {
            return {
                x: this.pb[0].Ka(b.x),
                y: this.hb[0].Ka(b.y)
            }
        };
        Y.NA = function(a, b) {
            return this.qe.Sz(this.pb[0], this.hb[0], b)
        };
        Y.PA = function(a, b) {
            var c = this.Eg(a.Ia, b.Uc, b.Te);
            c.xd = this.wj(a, b);
            return c
        };
        Y.MA = function(a, b) {
            var c = this.un(a, b, b.th, b.Zi);
            return !c ? l : {
                top: c.top,
                left: c[F],
                width: c[y],
                height: c[S],
                xd: this.wj(a, b)
            }
        };
        Y.OA = function(a, b) {
            var c = this.un(a, b, b.hu, b.iu),
                d = this.un(a, b, b.gu, b.lineTo);
            pa(d, 2);
            Aa(d, d[F] + (c[y] - (c[y] % 2 ? 3 : 2)) / 2);
            var e = this.dp(b.fu, a);
            e.od() && (e = e.I / 2, $a(c, c[S] - 2 * e), pa(c, c[y] - 2 * e), Aa(c, c[F] + e), c.top += e);
            $a(c, s.max(c[S], 2));
            pa(c, s.max(c[y], 1));
            return {
                rect: c,
                Wa: d
            }
        };
        Y.dp = function(a, b) {
            return a ? b.Yp.jv : b.Yp.kv
        };
        Y.RA = function(a, b) {
            var c = this.Ba[a.Ia];
            b.th == l && (b.th = c.n.ha(c.ga.S));
            var d = this.ea,
                e = d.A[b.Ad].l,
                f = d.ah,
                g = s[D](e - d[bb] * f / 2),
                f = s[D](e + d[bb] * f / 2),
                i = c.Ka(b.Zi),
                d = this.Rd(g, c.Ka(b.th)),
                e = this.Rd(g, i),
                f = this.Rd(f, i),
                i = [];
            this.i.$(pj, j) && b.il != l && (c = this.Rd(g, c.Ka(b.il)), i[x](c));
            i[x](e);
            i[x](f);
            return {
                $g: new zt(s.min(d.x, f.x), s.min(d.y, f.y), s.abs(f.x - d.x), s.abs(f.y - d.y)),
                outline: i,
                xd: this.wj(a, b)
            }
        };
        Y.tw = function(a, b, c) {
            return s.min(a.Ka(b), a.Ka(c))
        };
        Y.sw = function(a, b, c) {
            return s.max(a.Ka(b), a.Ka(c))
        };
        Y.un = function(a, b, c, d) {
            var e = this.ea,
                f = this.Ba[a.Ia],
                a = this.Ui;
            c != l || (c = f.n.ha(f.ga.S));
            if (b.Se >= a.ip || b.Ad >= e.A[L] && e[I] != Jq) return l;
            e = this.tw(f, c, d);
            c = this.sw(f, c, d);
            d = s.min(1, 0.2 * (c - e));
            s[D](e + d) < s[D](c) && s[D](e + d) > s[D](e) ? (e = s[D](e + d), c = s[D](c)) : e += d;
            b = this.wq(b);
            d = a.lj / 2;
            a = s[D](b + d);
            e = this.Rd(s[D](b - d), e);
            b = this.Rd(a, c);
            return new zt(s.min(e.x, b.x), s.min(e.y, b.y), s.abs(b.x - e.x), s.abs(b.y - e.y))
        };
        Y.LA = function(a, b) {
            var c = this.Ba[a.Ia],
                d = c.n.ha(c.ga.S),
                c = this.Eg(a.Ia, b.Uc, b.Te),
                e = this.Eg(a.Ia, b.To, b.wl != l ? b.wl : d),
                f = this.Eg(a.Ia, b.Uo, b.xl != l ? b.xl : d),
                g = this.Eg(a.Ia, b.Vo, b.yl != l ? b.yl : d),
                d = this.Eg(a.Ia, b.Wo, b.zl != l ? b.zl : d),
                i = this.wj(a, b);
            return {
                x: c.x,
                y: c.y,
                lm: e.x,
                mm: e.y,
                nm: f.x,
                om: f.y,
                yj: g.x,
                zj: g.y,
                Aj: d.x,
                Bj: d.y,
                xd: i
            }
        };
        Y.wj = function(a, b) {
            if (!b.wh) return [];
            var c = this.ea,
                d = this.Ba[a.Ia],
                e = this.Ui;
            if (b.Se >= e.ip || b.Ad >= c.A[L] && c[I] != Jq) return [];
            for (var f = this.wq(b), g = [], i = 0, k; k = b.wh[i]; i++) {
                var m = d.Ka(k.$u),
                    p = d.Ka(k.av),
                    q = (c[I] == Jq ? c.A && 1 < c.A[L] ? c.A[1].l - c.A[0].l : 0 : e.lj) * k.bv,
                    t = s.abs(m - p),
                    p = this.Rd(f - q / 2, s.min(p, m)),
                    m = p.x,
                    p = p.y,
                    q = this.Rd(q, t);
                g[x]({
                    rect: new zt(m, p, q.x, q.y),
                    hh: k.hh
                })
            }
            return g
        };
        Y.wq = function(a) {
            var b = this.ea,
                c = this.Ui;
            return (b[I] == Jq ? b.Ka(a.Uc) : b.A[a.Ad].l) - c.rv + (c.lj + 1) * a.Se + c.lj / 2
        };

        function Sz(a, b) {
            switch (a) {
                case zo:
                    return b.rg;
                case Ao:
                    return b.Uj;
                case yo:
                    return b[zb];
                default:
                    return a
            }
        }
        Y.Rd = function(a, b) {
            switch (this.g[Wb]) {
                case il:
                    return {
                        x: a,
                        y: b
                    };
                case Mq:
                    return {
                        x: b,
                        y: a
                    }
            }
            h(u("Invalid orientation."))
        };
        Y.Eg = function(a, b, c) {
            return this.Rd(this.ea.Ka(b), this.Ba[a].Ka(c))
        };
        Y.Yl = function(a, b) {
            var c = a[Oc]();
            c.lh() && c.Y != ne ? (c.Hm(new uv(Jn, c.Y)), !c.od() && b && (c.Gc(c.Y), c.Re(1))) : c.od() && c.Rq(wj);
            return c
        };
        Y.Bv = function(a, b) {
            var c = a[Oc]();
            c.Re(c.I * b);
            return c
        };
        Y.yw = function(a, b) {
            var c = this.D,
                d = a.K.certainty || [];
            if (d[L]) {
                var e = c[J](b, d[0]);
                if (e != l) return c[Mb](d[0]) == Th ? e ? 1 : 0 : e
            }
            return 1
        };
        Y.Aw = function(a, b) {
            var c = this.D,
                d = a.K[Ec] || [];
            return d[L] && (c = c[J](b, d[0]), c != l) ? !!c : j
        };
        Y.zw = function(a, b) {
            var c = this.D,
                d = a.K.emphasis || [];
            if (d[L]) {
                var e = c[J](b, d[0]);
                if (e != l) return c[Mb](d[0]) == Th ? e ? 2 : 1 : e
            }
            return 1
        };
        Y.jg = function(a) {
            var b = this.pm();
            return b !== l ? this.D[J](a, b) : l
        };
        Y.pm = function() {
            if (this.ea === l || this.ea[I] != Jq) return l;
            var a = this.g.be[0].K.gap || [];
            return 0 == a[L] ? l : a[0]
        };
        Y.hj = function(a, b, c, d) {
            function e(a, e, f) {
                var m = g.n.ha(i[J](b, a)),
                    e = g.n.ha(i[J](b, e));
                m != l && e != l && (m += c, e += c, d && (g.V(m), g.V(e)), k[x]({
                    av: m,
                    $u: e,
                    bv: f,
                    hh: a
                }))
            }
            var f = a.Ha;
            if (!f) return l;
            for (var g = this.Ba[a.Ia], i = this.D, k = [], a = 0; a < f.bf[L]; a += 2) e(f.bf[a], f.bf[a + 1], 0);
            for (var m = 0, p = f.oj[L] - 1; m <= p; m++, p--) {
                var a = f.oj[m],
                    q = f.oj[p];
                e(a, q, f.mh[a].pu)
            }
            for (q = 0; q < f.c[L]; q++) a = f.c[q], e(a, a, 0);
            for (q = 0; q < f.ue[L]; q++) a = f.ue[q], m = f.mh[a], e(a, a, 0 == q || q == f.ue[L] - 1 ? m.ou : m.qu);
            m = 0;
            for (p = f[md][L] - 1; m <= p; m++, p--) a = f[md][m],
                q = f[md][p], e(a, q, 0);
            for (q = 0; q < f.f[L]; q++) a = f.f[q], e(a, a, 0);
            return k[L] ? k : l
        };
        Y.mp = function(a) {
            this.Kl = s.max(this.Kl, a)
        };
        Y.Qu = function() {
            var a = this.g;
            if (a.gb.bars || a.gb.candlesticks || !kr(Vr(a.d, function(a) {
                    return a.Ha != l
                }))) {
                a = Qr(a.r, function(a, b) {
                    return 0 != this.jg(b)
                }, this);
                var b = this.ea;
                if (0 == a[L]) a = 0;
                else if (b[I] == Jq) {
                    for (var c = b.Ei, d = l, e = 0; e < a[L]; e++) {
                        var f = b.lg(a[e][C]);
                        d != l && (c = s.min(c, s.abs(f - d)));
                        d = f
                    }
                    a = c
                } else a = s.abs(b.lg(1) - b.lg(0));
                a = s.max(a, 1);
                b = this.i.Mv(Hh, a);
                b = s.max(b, 1);
                c = s.min(this.Kl, s[D]((b + 1) / 2));
                d = (b - c + 1) / c;
                a > b && (d = s[D](d));
                this.Ui = {
                    ip: c,
                    lj: d,
                    rv: ((d + 1) * c - 1) / 2
                }
            }
        };
        Y.$f = function(a) {
            var b = this.D,
                c = this.ea;
            c[I] == Jq ? (a = b[J](a, 0), c = c.n.ha(a)) : c = a;
            return c
        };

        function Tz(a, b, c) {
            this.g = a;
            this.k = c ? b.U(ej, Dx, c) : X;
            this.w = b.sc(fj, {
                eb: a.ed,
                fontSize: a.Fc,
                fb: this.k == ql ? a.Je : X
            });
            this.Kv = b.Xl(dj);
            this.Lj = this.L = l
        }
        Y = Tz[M];
        Y.nb = function() {
            return this.k
        };
        Y.uc = function() {
            return 1.5 * this.w[N]
        };
        Y.gd = function(a) {
            this.L = a
        };
        Y.yu = function(a) {
            this.Lj = a
        };
        Y.Dm = function() {
            if (!this.L || !this.Lj) return l;
            var a = {
                    top: this.L.top,
                    left: this.L[F],
                    width: this.L[T] - this.L[F],
                    height: this.L[R] - this.L.top,
                    orientation: il,
                    u: this.w,
                    fv: Oh,
                    gv: this.Kv
                },
                b = wy(this.Lj, a, [], this.g.wb);
            return {
                position: this.k,
                scale: this.Lj,
                xh: a,
                definition: b
            }
        };

        function Uz(a, b, c) {
            this.Gn = a;
            this.pg = b;
            this.Dh = a - b / 2;
            this.ju = c;
            Pa(this, 0)
        }
        Uz[M].Ss = function(a) {
            this.Dh = a
        };
        Uz[M].sB = function() {
            return this.Dh + this.pg
        };
        Uz[M].uc = function() {
            return this.pg
        };

        function Vz(a, b) {
            this.Ln = a;
            this.Lf = b;
            for (var c = 0, d = b[L]; c < d; c++) Pa(b[c], c)
        }
        Y = Vz[M];
        Y.lu = function() {
            for (var a = 0, b = 0, c = this.Lf[L]; b < c; b++) a += this.Lf[b].uc();
            a > this.Ln && h(u("Not enough space for labels. Need: " + a + " got: " + this.Ln));
            this.Lf.sort(function(a, b) {
                var c = a.Gn,
                    d = b.Gn;
                return c == d ? a[sc] > b[sc] : c > d ? 1 : -1
            });
            b = 0;
            for (c = this.Lf[L]; b < c; b++) {
                var a = this.Lf[b],
                    d = this.Qs(a.Dh, a.uc());
                a.Ss(d)
            }
            b = [];
            a = 0;
            for (c = this.Lf[L]; a < c; a++) b[x]([this.Lf[a]]);
            for (; this.Vz(b););
        };
        Y.Vz = function(a) {
            for (var b = 0; b < a[L] - 1; b++) {
                var c = a[b],
                    d = a[b + 1];
                if (this.BB(c, d)) return this.zB(c, d), a[od](b + 1, 1), j
            }
            return n
        };
        Y.BB = function(a, b) {
            return a[a[L] - 1].sB() > b[0].Dh
        };
        Y.zB = function(a, b) {
            for (var c = 0; c < b[L]; c++) a[x](b[c]);
            for (var d = 0, e = 0, c = 0; c < a[L]; c++) d += a[c].Gn, e += a[c].uc();
            d = d / a[L] - e / 2;
            d = this.Qs(d, e);
            for (c = 0; c < a[L]; c++) e = a[c], e.Ss(d), d += e.uc()
        };
        Y.Qs = function(a, b) {
            return is(a, 0, this.Ln - b)
        };

        function Wz(a, b, c) {
            this.g = a;
            this.k = c ? b.U(Pl, Cx, c) : X;
            this.Ti = b.U(Ll, Fx, this.k == di ? Ci : gp);
            c = il;
            if (this.k == Jl || this.k == bo || this.k == Il) c = Mq;
            this.Hb = c;
            this.w = b.sc(Ul, {
                eb: a.ed,
                fontSize: a.Fc,
                fb: this.k == ql ? a.Je : X
            });
            this.Cd = n;
            this.Jo = b.sc(Ol, this.w);
            this.pa = a.wb;
            this.rb = this.w[N];
            this.ge = s[B](this.w[N] / (1.618 * 1.618));
            this.Hh = this.L = l;
            this.pl = b.$(Tl, j);
            this.Yt = b.U(Sl, Ex, this.Hb);
            this.Wt = b.Ne(Ql);
            this.Xt = b.Ne(Rl);
            this.ta = l;
            this.rj = this.ge;
            this.Ue = this.Ve = this.ol = 0;
            this.bq = this.k == jq ? b.R(Nl, 1) : 1;
            this.nh = 0
        }
        Y = Wz[M];
        Y.nb = function() {
            return this.k
        };
        Y.gd = function(a) {
            this.L = a
        };
        Y.cw = function() {
            this.Hh = Qr(this.g.wd, function(a) {
                return a.v
            })
        };
        Y.Dm = function() {
            if (!this.L) return l;
            this.k != X && (this.Hb == Mq ? this.ux() : this.sx());
            var a = this.ta && 0 < this.ta[L] ? this.ta[0] : l,
                b = this.Cd ? this.tx(0, n, 1 < this.ta[L]) : l;
            return {
                position: this.k,
                Vk: this.L,
                ta: this.ta,
                Vc: a,
                Lh: b
            }
        };
        Y.ux = function() {
            var a = s.max(this.L[T] - this.L[F] - (this.rb + this.ge), 0),
                b = this.L[R] - this.L.top,
                c = s.max(b - 2 * this.rb, 0),
                d = this.Hh,
                e = this.g;
            cy(e) && d[jb]();
            var f = Rr(d, function(b) {
                b = Tx(this.pa, b[z], this.w, a, r);
                0 == b.f[L] && (b.f = [U]);
                return b
            }, this);
            if (this.k == Il && e.ko == hm) e = this.Dv(f, b, d), this.ta = [e];
            else if (b = this.wm(f, b), this.Cd = this.Ev(d, b))
                if (b = this.wm(f, c), !jr(b[0]) || 0 == b[0][L]) this.Cd = n;
                else {
                    for (this.ta = []; 0 < d[L];) {
                        e = this.pq(b, d);
                        this.ta[x](e);
                        for (e = 0; jr(b[e]) && 0 != b[e][L];) ++e;
                        f = cs(f, e);
                        b = this.wm(f, c);
                        d = cs(d, e)
                    }
                    this.Cd && (this.ol = s[B](this.L[R] - this.rb), this.Ve = this.L[F], this.Ue = this.Ve + this.rb + this.rj, this.pl && (c = this.sm(this.ta[L]), this.Ue += c + this.rj))
                }
            else e = this.pq(b, d), this.ta = [e]
        };
        Y.wm = function(a, b) {
            var c = this.w[N],
                d = s[B](c / 1.618),
                e = s[B](c / 3.236),
                c = this.Tz(a, c + d, c + e);
            return yw(c, b)
        };
        Y.mu = function(a) {
            var b = ts(this.g.Ja),
                c = this.g.d[a],
                a = Rr(c.c, function(a) {
                    return !a || a.Zb ? l : new $(a.h.x, a.h.y)
                }),
                c = Hw(a, b.xb, c.ae);
            return c !== l ? c : this.Fv(a, b.xb)
        };
        Y.Fv = function(a, b) {
            var a = Qr(a, lr),
                c = -(ds(a, function(a, b) {
                    return fs(a, b.x)
                } || fs, n, b) + 1),
                c = cs(a, 0, c);
            return (c = Xr(c, function(a) {
                return a.y !== l
            })) ? c.y : l
        };
        Y.Dv = function(a, b, c) {
            for (var d = this.L[T] - this.L[F], e = s[B](this.L[F]), f = [], g = [], i = this.g.Rf == Mj, k = 0; k < c[L]; k++) {
                var m = c[k],
                    p = Tx(this.pa, m[z], this.w, d, a[k].f[L]),
                    q = {};
                q.id = m.id;
                q.a = m.a[Oc]();
                var t = xs(this.w);
                xa(t, q.a.Y);
                q.m = {
                    text: m[z],
                    u: t,
                    f: [],
                    Va: gp,
                    Oa: gp,
                    G: p.la ? m[z] : U
                };
                t.fb && q.a.Gc(t.fb, 1);
                q.v = j;
                for (var w = 0; w < p.f[L]; w++) q.m.f[x]({
                    length: d,
                    text: p.f[w]
                });
                i && (w = this.pa(q.m.f[0][z], t)[y], q.ka = {}, q.ka.P = {
                    x: e + w + 5
                }, q.ka.a = q.a, q.ka.v = n);
                Pa(q, m[sc]);
                w = this.mu(q[sc]) || 0;
                t = this.pa(q.m.f[0], t)[S];
                m = new Uz(w, q.m.f[L] *
                    t, q);
                f[x](m);
                g[x](q)
            }(new Vz(b, f)).lu();
            for (w = 0; w < f[L]; w++) {
                m = f[w];
                a = m.Dh;
                q = m.ju;
                b = q.m.f;
                for (k = 0; k < b[L]; k++) b[k].y = s[B](k * t + a), b[k].x = e, i && (q.ka.P.y = b[k].y)
            }
            return g
        };
        Y.pq = function(a, b) {
            for (var c = this.rb + this.ge, d = this.L[T] - this.L[F] - c, e = this.w[N], f = s[B](e / 1.618), g = s[B](e / 3.236), i = e + f, k = e + g, e = [], g = 0, m = s[B](this.L[F]), p = 0; p < b[L]; p++) {
                var q = b[p],
                    t = a[p][L];
                if (0 != t) {
                    var w = Tx(this.pa, q[z], this.w, d, t),
                        t = {};
                    t.id = q.id;
                    t.m = {
                        text: q[z],
                        u: this.w,
                        f: [],
                        anchor: {
                            x: m,
                            y: 0
                        },
                        Va: gp,
                        Oa: gp,
                        G: w.la ? q[z] : U
                    };
                    t.M = {};
                    t.M.P = new zt(m, g, this.rb, this.rb);
                    t.M.a = q.a[Oc]();
                    this.w.fb && t.M.a.Gc(this.w.fb, 1);
                    t.v = j;
                    for (var A = 0; A < w.f[L]; A++) 0 < A && (g += k), t.m.f[x]({
                        x: c,
                        y: g,
                        length: d,
                        text: w.f[A]
                    });
                    Pa(t, q[sc]);
                    g += i;
                    e[x](t)
                }
            }
            c = s[B](this.L.top);
            this.Cd || (f = g - f, d = this.L[R] - this.L.top, this.Ti == Uj ? c += d - f : this.Ti == Ci && (c += s[D]((d - f) / 2)));
            for (p = 0; p < e[L]; p++) t = e[p], t.M.P.top += c, t.m[Sc].y += c;
            return e
        };
        Y.Tz = function(a, b, c) {
            for (var d = Sr(a, function(a, b) {
                    return s.max(a, b.f[L])
                }, 0), e = [], f = 0; f < d; f++) {
                var g = 0 == f ? b : c;
                Pr(a, function(a, b) {
                    f < a.f[L] && e[x]({
                        key: b,
                        min: 0 == f && 0 == b ? this.w[N] : g,
                        T: []
                    })
                }, this)
            }
            return e
        };
        Y.Ev = function(a, b) {
            var c = a[L] - 1;
            return 1 < a[L] && 1 > b[c][L]
        };
        Y.mv = function(a) {
            for (var b = this.Hh, c = this.hi(b, a), d = 1;
                (0 == this.bq || this.bq > d) && c[L] < b[L];) ++d, b = cs(b, c[L]), c = this.hi(b, a);
            return d
        };
        Y.sx = function() {
            for (var a = [1, 9, 99, 0], b = 0; b < a[L] && !this.hy(a[b]); ++b);
            this.Cd && (this.ol = s[B]((this.L.top + this.L[R] - this.rb) / 2), this.Ue = this.L[T] - this.rb, this.Ve = this.Ue - this.rj - this.rb, this.pl && (a = this.sm(this.ta[L]), this.Ve -= a + this.rj))
        };
        Y.hy = function(a) {
            var b = this.L[T] - this.L[F],
                c = n;
            1 != a && (b -= 2 * (this.rb + this.ge), c = j, 0 != a && (b -= this.sm(a) + this.ge));
            var d = this.hi(this.Hh, b);
            if (0 == d[L]) return this.Cd = n, j;
            this.ta = [];
            for (var e = this.Hh; 0 < e[L];) {
                if (0 < a && this.ta[L] == a) return n;
                for (var f = [this.Lr(d, e, c)], g = 1; g < this.nh && e[L] != d[L]; g++) e = cs(e, d[L]), d = this.hi(e, b), f[x](this.Lr(d, e, c));
                f = this.gy(f);
                this.ta[x](f);
                e = cs(e, d[L]);
                d = this.hi(e, b)
            }
            this.Cd = 1 < this.ta[L];
            return j
        };
        Y.gy = function(a) {
            var b = this.L[R] - this.L.top,
                c = this.w[N],
                d = b - this.nh * c,
                e = 1 < this.nh ? d / (this.nh - 1) : 0,
                f = (b - ((c + e) * a[L] - e)) / 2,
                g = [];
            Pr(a, function(a) {
                var b = s[B](f);
                Pr(a, function(a) {
                    a.m[Sc].y += b;
                    a.M.P.top += b
                });
                f += c + e;
                as(g, a)
            });
            return g
        };
        Y.hi = function(a, b) {
            var c = this.rb + this.ge,
                d = s.min(this.g[y] * (2 - 1.618) / 2, b);
            if (d < c) return [];
            c = this.Ay(d, a);
            return xw(c, b)
        };
        Y.Lr = function(a, b, c) {
            for (var d = this.L[T] - this.L[F], e = this.rb + this.ge, f = s[B](1.618 * this.w[N]), g = [], i = 0, k = s[B](this.L.top), m = 0; m < a[L]; m++) {
                var p = b[m],
                    q = Tx(this.pa, p[z], this.w, a[m] - e - (0 < m ? f : 0), 1),
                    t = 0 < q.f[L] ? q.f[0] : U,
                    w = this.pa(t, this.w)[y],
                    A = [{
                        x: i + e,
                        y: 0,
                        length: w,
                        text: t
                    }],
                    E = {};
                E.id = p.id;
                E.m = {
                    text: p[z],
                    u: this.w,
                    f: t ? A : [],
                    anchor: {
                        x: 0,
                        y: k
                    },
                    Va: gp,
                    Oa: gp,
                    G: q.la ? p[z] : U
                };
                E.v = j;
                E.M = {};
                E.M.a = p.a[Oc]();
                this.w.fb && E.M.a.Gc(this.w.fb, 1);
                E.M.P = new zt(i, k, this.rb, this.rb);
                Pa(E, p[sc]);
                g[x](E);
                i += w + e + f
            }
            a = this.L[F];
            c || (c =
                i - f, this.Ti == Uj ? a += d - c : this.Ti == Ci && (a += s[D]((d - c) / 2)));
            for (m = 0; m < g[L]; m++) E = g[m], Aa(E.M.P, E.M.P[F] + a), E.m[Sc].x += a;
            return g
        };
        Y.Ay = function(a, b) {
            var c = this.rb + this.ge,
                d = s[B](1.618 * this.w[N]);
            return Rr(b, function(b, f) {
                var g = this.pa(b[z], this.w)[y] + c,
                    i = s.min(a, g),
                    g = g - i;
                0 < f && (i += d);
                return {
                    min: i,
                    T: [g]
                }
            }, this)
        };
        Y.sm = function(a) {
            for (var b = Ye; 10 <= a;) b += Ye, a /= 10;
            return this.pa(b + Ue + b, this.Jo)[y]
        };
        Y.tx = function(a, b, c) {
            var d = this.ol,
                e = l;
            if (this.pl) var e = a + 1 + Ue + this.ta[L],
                a = this.Ve + this.rb,
                f = this.Ue - a,
                e = {
                    text: e,
                    u: this.Jo,
                    f: [{
                        x: a + f / 2,
                        y: d,
                        text: e,
                        length: f
                    }],
                    Va: Ci,
                    Oa: gp,
                    G: U
                };
            var g = this.Yt == Mq,
                i = this.rb,
                k = s[B](i / 2),
                m = this.Ve,
                p = this.Ue,
                f = a = l;
            g ? (a = [{
                x: m + i,
                y: d + i
            }, {
                x: m + k,
                y: d
            }, {
                x: m,
                y: d + i
            }], f = [{
                x: p,
                y: d
            }, {
                x: p + i,
                y: d
            }, {
                x: p + k,
                y: d + i
            }]) : (a = [{
                x: m + i,
                y: d + i
            }, {
                x: m + i,
                y: d
            }, {
                x: m,
                y: d + k
            }], f = [{
                x: p,
                y: d
            }, {
                x: p + i,
                y: d + k
            }, {
                x: p,
                y: d + i
            }]);
            d = {
                Nd: this.Wt,
                Cj: this.Xt
            };
            return {
                gm: {
                    path: a,
                    Nd: b,
                    Fd: d,
                    a: b ? d.Nd : d.Cj
                },
                em: {
                    path: f,
                    Nd: c,
                    Fd: d,
                    a: c ? d.Nd : d.Cj
                },
                fm: e
            }
        };

        function Xz(a, b, c, d, e) {
            var f = a[T] - a[F],
                g = xs(d);
            xa(g, qf);
            var i = xs(d);
            xa(i, uf);
            var k = d[N] / 3.236,
                m = g[N] + k,
                p = i[N] + k,
                q, d = g[N] + k,
                t = i[N] + k,
                w = Rr(e, function(a, c) {
                    var d = Tx(b, a.dg, g, f, r),
                        e = Tx(b, a.eg, i, f, r);
                    return {
                        nf: c,
                        vm: a.Co,
                        Ag: a.Co,
                        ye: d.f[L],
                        mf: e.f[L],
                        Ij: k,
                        Jj: k
                    }
                });
            es(w, function(a, b) {
                return a.Ag - b.Ag
            });
            var A = Rr(w, function(a) {
                return a
            });
            for (es(A, function(a, b) {
                    return e[a.nf].Ao - e[b.nf].Ao
                }); q = Yz(a, d, t, e, w, n), q.Kj;) {
                for (var E = q.me, K = 0; K < w[L]; K++) {
                    var V = w[K];
                    V.Ag = E[V.nf].y
                }
                for (K = 0; K < A[L]; K++)
                    if (V = A[K], E[V.nf].Kj) {
                        0 <
                            V.mf ? V.mf-- : 0 < V.ye && (V.ye--, 0 == V.ye && (Yr(w, V), Nr[od][P](A, K, 1)));
                        break
                    }
            }
            d = Yz(a, d, t, e, w, j);
            d.Kj || (q = d);
            q = q.me;
            d = [];
            2 == c ? (c = a[T], a = a[F], t = Uj) : (c = a[F], a = a[T], t = gp);
            for (w = 0; w < e[L]; ++w)
                if (A = e[w], E = q[w], E != l) {
                    var G = Tx(b, A.dg, g, f, E.ye),
                        ka = Tx(b, A.eg, i, f, E.mf),
                        K = Hy(new ru(c, E.y));
                    d[x]({
                        vp: 2,
                        fc: Hy(A.Bo(is(E.y, A.$i[Q], A.$i.end))),
                        xp: a,
                        ld: K,
                        zu: new vv({
                            fill: pf,
                            Cb: 0.7
                        }),
                        Pa: new vv({
                            stroke: pf,
                            Aa: 1,
                            jd: 0.7
                        }),
                        $B: k,
                        dg: {
                            text: A.dg,
                            u: g,
                            anchor: {
                                x: K.x,
                                y: K.y
                            },
                            f: Rr(G.f, function(a, b) {
                                return {
                                    x: 0,
                                    y: (b - G.f[L]) * m,
                                    length: G.ec,
                                    text: a
                                }
                            }),
                            Va: t,
                            Oa: gp,
                            G: G.la ? A.dg : U
                        },
                        XB: g,
                        eg: {
                            text: A.eg,
                            u: i,
                            anchor: {
                                x: K.x,
                                y: K.y
                            },
                            f: Rr(ka.f, function(a, b) {
                                return {
                                    x: 0,
                                    y: (b + 1) * p,
                                    length: ka.ec,
                                    text: a
                                }
                            }),
                            Va: t,
                            Oa: Uj,
                            G: ka.la ? A.eg : U
                        },
                        ZB: i,
                        YB: t,
                        index: A[sc]
                    })
                }
            return d
        }

        function Yz(a, b, c, d, e, f) {
            function g(a, b) {
                return s.max(s.abs(a[Sc] - b[Sc]), s.abs(a.top - b.top), s.abs(a[R] - b[R]))
            }

            function i(a, b) {
                return {
                    anchor: a[Sc] + (b[Sc] || 0),
                    top: a.top + (b.top || 0),
                    bottom: a[R] + (b[R] || 0)
                }
            }
            0 < e[L] && (e[0].Ij = 0, Mr(e).Jj = 0);
            for (var k = 0; k < e[L]; k++) {
                var m = e[k],
                    p = e[k - 1],
                    q = e[k + 1],
                    q = q ? d[q.nf].$i.end - 5 : a[R];
                m.Ds = new mv(s.min(m.vm, p ? d[p.nf].$i[Q] + 5 : a.top), s.max(m.vm, q))
            }
            m = ss(e, function(a) {
                return {
                    anchor: a.Ag,
                    top: a.Ag - (a.ye * b + a.Ij),
                    bottom: a.Ag + (a.mf * c + a.Jj)
                }
            });
            k = [];
            k[x](function(b, c) {
                var d = b[c].top;
                return c == 0 ? {
                    top: s.max(a.top - d, 0)
                } : {
                    top: s.max(b[Lr(c) - 1][R] - d, 0) / 2
                }
            });
            k[x](function(b, c) {
                var d = b[c][R];
                return c == e[L] - 1 ? {
                    bottom: s.min(a[R] - d, 0)
                } : {
                    bottom: s.min(b[Lr(c) + 1].top - d, 0) / 2
                }
            });
            k[x](function(a, c, d) {
                var g = a[c][Sc] - a[c].top,
                    a = s.max(-g, 0),
                    c = s.max(e[c].ye * b + e[c].Ij - s.max(g, 0), 0),
                    d = (a + c * (f ? 1 : d)) / 2;
                return {
                    anchor: d,
                    top: -d
                }
            });
            k[x](function(a, b, d) {
                var g = a[b][R] - a[b][Sc],
                    a = s.max(-g, 0),
                    b = s.max(e[b].mf * c + e[b].Jj - s.max(g, 0), 0),
                    d = (a + b * (f ? 1 : d)) / 2;
                return {
                    anchor: -d,
                    bottom: d
                }
            });
            k[x](function(a, b) {
                var c = a[b][Sc],
                    d = e[b];
                return {
                    anchor: is(c, d.Ds[Q], d.Ds.end) - c
                }
            });
            f && k[x](function(a, b, c) {
                return {
                    anchor: (e[b].vm - a[b][Sc]) * c
                }
            });
            for (var t, d = 1, p = 0; 1E3 > p; p++) {
                var q = Gw(m, k, i, d),
                    w = Gw(m, k, i, 0),
                    A = pw(m, q, 0.05, g),
                    w = pw(m, w, 0.05, g);
                if (A && w) break;
                m = q;
                d *= 0.99
            }
            t = m;
            d = Rr(e, function(a, b) {
                var c = t[na(b)];
                return {
                    anchor: c[Sc],
                    top: c.top,
                    bottom: c[R]
                }
            });
            p = n;
            q = {};
            for (k = 0; k < e[L]; k++) {
                var m = e[k],
                    A = d[k],
                    w = (A[Sc] - A.top - m.Ij) / b,
                    E = (A[R] - A[Sc] - m.Jj) / c,
                    w = s[D](w + 0.1),
                    E = s[D](E + 0.1),
                    K = w < m.ye || E < m.mf,
                    p = p || K;
                q[m.nf] = {
                    y: A[Sc],
                    ye: w,
                    mf: E,
                    Kj: K
                }
            }
            return {
                me: q,
                Kj: p
            }
        }

        function Zz(a, b) {
            var c = Wr(a, function(a) {
                return a[sc] == b
            });
            if (0 > c) return {};
            var d = {};
            d[c] = {
                vp: 4,
                Pa: new vv({
                    stroke: pf,
                    Aa: 2,
                    jd: 0.7
                })
            };
            return d
        };

        function $z(a, b, c, d) {
            for (var e = 0; e < a[mc](); e++) 0 > a[J](e, 1) && h(u("Negative values are invalid for a pie chart."));
            this.D = a;
            this.i = b;
            this.pa = c;
            this.Yf = b.O(mj, Qx);
            this.ep = b.Ke(yn, 0);
            this.ku = 0 > b.Ke(Ij, 1);
            this.g = d;
            this.g.Gb = xo;
            this.ma = l
        }
        Y = $z[M];
        Y.Em = function() {
            return bo
        };
        Y.Cm = function(a) {
            var b = this.g;
            this.ma = a;
            this.D[Mb](0) != op && h(u("Pie chart should have a first column of type string"));
            a = this.Il();
            this.pv(a.ia.$b, a.ia.ra, a.ia.wa, a.ia[S]);
            var c = this.ma.nb();
            a.o ? this.ma.gd(a.o) : c == di ? this.ma.gd(this.nv()) : c == Il && this.ov(b.b, a, this.ma.w, b.d)
        };
        Y.pp = function(a) {
            var b = this.g,
                c = {},
                d = this.i.fd(vn, U),
                e = a[zb],
                f = a.rg,
                a = a.Uj,
                g;
            b.Tf ? (b = e, g = f, d = a) : g = b = d;
            c.ru = new vv({
                stroke: b,
                Aa: 1,
                fill: e,
                Cb: 1
            });
            c.rg = new vv({
                stroke: g,
                Aa: 1,
                fill: f,
                Cb: 1
            });
            c.Uj = new vv({
                stroke: d,
                Aa: 1,
                fill: a,
                Cb: 1
            });
            return c
        };
        Y.nv = function() {
            var a = this.g,
                b = a[S] - a.b[R],
                c = this.ma.w[N],
                d = [];
            d[x]({
                min: 2,
                T: [r]
            });
            var e = d[L];
            d[x]({
                min: c + 2,
                T: [r]
            });
            b = xw(d, b);
            return b[L] > e ? (e = a.b[R] + b[e], new xt(e - c, a.b[T], e, a.b[F])) : l
        };
        Y.Il = function() {
            var a = this.g,
                b = a.b,
                c = this.ma.nb(),
                d = l,
                e = l,
                d = s[B](1.618 * a.Fc),
                f = s[B](b[y] * (1 - 1 / 1.618) - d);
            c == Jl ? (e = new xt(b.top, b[F] + f, b[R], b[F]), d = new xt(b.top, b[T], b[R], e[T] + d)) : c == bo ? (e = new xt(b.top, b[T], b[R], b[T] - f), d = new xt(b.top, e[F] - d, b[R], b[F])) : d = new xt(b.top, b[T], b[R], b[F]);
            var b = 0,
                c = s.min(d[T] - d[F], d[R] - d.top),
                f = c = s[D](c / 2),
                g = s[B]((d[T] + d[F]) / 2),
                d = s[B]((d[R] + d.top) / 2);
            a.Tf && (f *= 0.8, b = c / 5, d -= b / 2);
            return {
                ia: {
                    $b: new ru(g, d),
                    ra: c,
                    wa: f,
                    height: b
                },
                o: e
            }
        };
        Y.pv = function(a, b, c, d) {
            for (var e = this.g, f = this.D, g = Yy(this.i.fd(tn, U)), i = this.pp(g), k = this.i.sc(xn, {
                    eb: e.ed,
                    fontSize: e.Fc
                }), m = this.i.U(wn, Jx, pn), p = this.i.U($p, Kx, ci), q = this.i.Uf(Wo, 1 / 720), t = this.i.$(Kj), w = this.i.ud(un, tg), A = this.i.Uf(sn, 0), E = 0, K = 0; K < f[mc](); K++) E += f[J](K, 1) || 0;
            var V = 0,
                G = 0;
            e.d = [];
            e.wd = [];
            for (K = 0; K < f[mc](); ++K) {
                var ka = f[J](K, 1) || 0,
                    Wa = f[kd](K, 1),
                    fb = f[J](K, 0),
                    fa = f[kd](K, 0),
                    za = G / E,
                    Hb = za + ka / E,
                    Ga = Hb - za >= q;
                Ga ? G += ka : V += ka;
                var Dc = Xo + K,
                    le = this.i.O(Dc + Je, this.Yf[K % this.Yf[L]]),
                    le = Yy(le),
                    kA = this.pp(le),
                    lA = this.i.Ke(Dc + Oe, 0),
                    mA = this.i.Uf(Dc + Me, A),
                    nA = this.i.sc(Dc + Re, k),
                    ka = this.op(K, za, Hb, ka, Wa, fa, Ga, a, b, c, mA, d, lA, m, nA, p, le, kA);
                e.d[x](ka);
                Ga = this.i.$(Dc + Te, Ga || t);
                e.wd[x]({
                    id: fb,
                    text: fa,
                    a: new vv({
                        fill: le[zb]
                    }),
                    index: K,
                    v: Ga
                })
            }
            f = l;
            0 < V && (Wa = na(V), fa = w, f = this.op(-1, 1 - V / E, 1, V, Wa, fa, j, a, b, c, A, d, 0, m, k, p, g, i), t || e.wd[x]({
                id: U,
                text: fa,
                a: new vv({
                    fill: g[zb]
                }),
                index: -1,
                v: j
            }));
            e.ia = {
                ra: b,
                wa: c,
                $b: a,
                Qk: d,
                jl: f
            }
        };

        function aA(a, b) {
            switch (b) {
                case pn:
                    return a.am;
                case Jq:
                    return a.Xp;
                case ci:
                    return a.Xp + wd + a.am + we
            }
        }
        Y.op = function(a, b, c, d, e, f, g, i, k, m, p, q, t, w, A, E, K, V) {
            q = this.g;
            if (q.Tf || 1 <= p) p = 0;
            var G = {},
                ka = c - b;
            G.value = d;
            G.Xp = e;
            xa(G, K);
            G.Fd = V;
            G.a = G.Fd.ru;
            La(G, f);
            Pa(G, a);
            G.Oe = 0 <= a ? this.D.getTableRowIndex(a) : l;
            G.v = g;
            a = k * p;
            p *= m;
            G.dh = a;
            G.Zf = p;
            G.fa = 360 * b + this.ep;
            G.ca = 360 * c + this.ep;
            this.ku && (d = -G.fa, G.fa = -G.ca, G.ca = d);
            d = s.PI * (G.fa - 90) / 180;
            f = s.PI * (G.ca - 90) / 180;
            G.am = s[B](1E3 * ka) / 10 + oe;
            K = U;
            switch (w) {
                case pn:
                    K = G.am;
                    break;
                case Gl:
                    K = G[oc];
                    break;
                case Jq:
                    K = e
            }
            qa(G, K);
            if (!g) return G;
            G.u = A;
            e = this.pa(G[z], A)[y];
            g = A[N];
            G.Vi = new qs(e,
                g);
            G.zd = 1 == ka;
            if (G[z])
                if (G.zd) G.bl = tu(i, new ru(e / 2, g / 2)), G.al = j;
                else {
                    A = k - g;
                    ka = m - g;
                    e = G.Vi;
                    e = new qs(e[y] / A, e[S] / ka);
                    g = new qs(2 / A, 2 / ka);
                    w = Ky((d + f) / 2 + s.PI, 1, 1);
                    b: {
                        for (var K = My(new ru(0, 0), e), V = 1, Wa = s.min, fb = 0; fb < K[L]; ++fb) {
                            var fa;
                            var za = K[fb];
                            fa = w.x * za.x + w.y * za.y;
                            za = fa * fa + 1 - za.iv();
                            0 > za ? fa = l : (za = s[Pb](za), fa = [fa - za, fa + za]);
                            if (fa === l || 0 > fa[1]) {
                                K = l;
                                break b
                            }
                            V = Wa(V, fa[1])
                        }
                        K = V
                    }
                    if (0.4 > K) e = l;
                    else {
                        w = w[Oc]()[dd](-K);
                        e = Jy(e, g, g);
                        b: {
                            e = My(w, e);g = js(f - d, 2 * s.PI);K = 0;V = g;
                            for (Wa = 0; Wa < e[L]; ++Wa) {
                                fb = js(s[Kb](e[Wa].y, e[Wa].x) -
                                    d, 2 * s.PI);
                                if (fb >= g || 0 == fb) {
                                    e = n;
                                    break b
                                }
                                V = s.min(fb, V);
                                K = s.max(fb, K)
                            }
                            e = K - V < s.PI
                        }
                        e = e ? w : l
                    }
                    A = e && new ru(e.x * A, e.y * ka);
                    A !== l && (G.al = j, G.bl = Iy(i, A, new ru(-G.Vi[y] / 2, -G.Vi[S] / 2)))
                }
            else G.al = n;
            G.offset = Ky((d + f) / 2, k, m)[dd](t);
            t = Ky(f, k, m);
            G.La = su(i, Ky(d, k, m));
            G.bc = su(i, t);
            m = Ky(f, a, p);
            G.to = su(i, Ky(d, a, p));
            G.uo = su(i, m);
            q.Tf && (270 >= G.fa && 90 <= G.ca) && (m = {}, 90 > G.fa ? (m.fa = 90, m.La = new ru(i.x + k, i.y)) : (m.fa = G.fa, m.La = G.La), 270 < G.ca ? (m.ca = 270, m.bc = new ru(i.x - k, i.y)) : (m.ca = G.ca, m.bc = G.bc), m.a = G.Fd.rg, G.F = m);
            G.ee = q.Tf && 0.5 <
                b;
            G.Qe = q.Tf && 0.5 > c;
            if (G.ee || G.Qe) G.Ii = G.Fd.rg;
            G.qa = {
                ne: G[oc],
                content: aA(G, E)
            };
            return G
        };
        Y.ov = function(a, b, c) {
            for (var d = this.g, e = b.ia.ra, f = b.ia.wa, g = b.ia.$b, i = this.i.U(Ml, Kx, pn), k = s.PI * (3 * (e + f) - s[Pb]((3 * e + f) * (e + 3 * f))), m = [], p = [], q = 0; q < d.wd[L]; ++q) {
                var t = d.wd[q];
                if (t.v) {
                    var w;
                    w = 0 <= t[sc] ? d.d[t[sc]] : d.ia.jl;
                    var A = s.max((e + w.dh) / 2, 0.75 * e),
                        E = s.max((f + w.Zf) / 2, 0.75 * f),
                        K = (w.ca + w.fa) / 2,
                        V = js(K, 360),
                        G = 360 * (ms(e - A, f - E) / k),
                        ka, Wa;
                    2 * G < w.ca - w.fa ? (ka = w.fa + G, Wa = w.ca - G, 180 > V ? Wa = s.min(Wa, 180) : ka = s.max(ka, 180)) : Wa = ka = K;
                    var fb = function(a) {
                            return su(g, Ky(a, A, E))
                        },
                        G = function(a) {
                            return fb(s.asin(is((a - g.y) / E, -1, 1)))
                        },
                        fa = function(a) {
                            return fb(s.PI - s.asin(is((a - g.y) / E, -1, 1)))
                        },
                        t = {
                            Co: fb(ks(K - 90)).y,
                            $i: new mv(fb(ks(ka - 90)).y, fb(ks(Wa - 90)).y),
                            dg: t[z],
                            eg: aA(w, i),
                            Ao: w[ub],
                            index: w[sc]
                        };
                    180 > V ? (t.Bo = G, m[x](t)) : (t.Bo = fa, p[x](t))
                }
            }
            b = a[y] / 2 - b.ia.ra - c[N];
            m = Xz(new xt(a.top, a[T], a[R], a[T] - b), this.pa, 2, c, m);
            a = Xz(new xt(a.top, a[F] + b, a[R], a[F]), this.pa, 1, c, p);
            c = [];
            as(c, m, a);
            this.g.vc = c
        };

        function bA(a, b, c, d, e) {
            this.Oc = a;
            this.D = l;
            this.i = b;
            this.pa = c;
            a = this.g = {};
            a.wb = c;
            pa(a, d);
            $a(a, e);
            a.J = b.U(qq, wx, X);
            a.ed = b.ud(kk);
            a.Fc = b.R(lk, s[B](s.pow(2 * (a[y] + a[S]), 1 / 3)));
            a.ko = b.U(Co, xx, hm);
            a.cg = b.$(Yp);
            a.Oi = b.U(ro, Wv, Mo);
            a.Li = b.Ne(Fh);
            a.Vf = b.Ne(Fi);
            a.Di = a.Vf.fg() ? a.Vf.Y : a.Li.fg() ? !a.Vf.lh() ? a.Li.Y : pv(a.Vf.Y, a.Li.Y, a.Vf.Ic) : l;
            a.Pt = b.fd(Lh, U);
            a.Qt = b.fd(Lk, U);
            a.Je = a.Di || U;
            c = b.ud(Pp);
            a.Qf = b.U(Sp, Gx, cn);
            d = b.sc(Tp, {
                eb: a.ed,
                fontSize: a.Fc,
                fb: a.Qf == ql ? a.Je : X
            });
            La(a, {
                text: c,
                u: d,
                f: [],
                Va: gp,
                Oa: Uj,
                G: U
            });
            a.Xg =
                b.U(Dh, Gx, cn);
            a.Tf = b.$(Bl);
            a.ae = b.$(xl);
            a.Rf = b.U(wl, Lx, Gj);
            this.$k();
            a.Rf == Mj && (!a.gb || a.gb.line != a.d[L]) && h(u("DIVE interactivity model is only supported when all series are of type line."))
        }
        Y = bA[M];
        Y.yh = function() {
            return this.g
        };
        Y.$k = function() {
            var a = this.g;
            this.bw();
            this.Il();
            var b = l,
                c = l,
                d = l,
                e = l;
            a.J == rn ? (c = new $z(this.D, this.i, this.pa, a), d = c.Em()) : (b = new Rz(this.D, this.i, this.pa, a), d = b.Em(), e = b.ew());
            this.ma = new Wz(a, this.i, d);
            this.cc = new Tz(a, this.i, e);
            b && b.Cm(this.ma, this.cc);
            c && c.Cm(this.ma);
            this.ma.cw();
            this.dw();
            a.o = this.ma.Dm();
            a.Wc = this.cc.Dm()
        };
        Y.bw = function() {
            var a = this.Oc,
                b = new google[Hc].DataView(a);
            2 > b[tb]() && h(u("Not enough columns given to draw the requested chart."));
            if (this.i.$($n)) {
                for (var c = [], a = a[mc]() - 1; 0 <= a; a--) c[x](a);
                b.setRows(c)
            }
            this.D = b
        };
        Y.$q = function(a, b, c, d) {
            b != l || (b = d());
            b = s[B](b);
            a != l || (a = (c - b) / 2);
            a = s[B](a);
            b = s.min(a + b, c);
            return {
                start: a,
                end: b
            }
        };
        Y.Il = function() {
            var a = this.g,
                b = this.i.Yh(Ji, a[y]),
                c = this.i.Yh(Gi, a[S]),
                d = this.i.Yh(Ii, a[S]),
                e = this.i.Yh(Hi, a[y]),
                f = Z(function() {
                    var b = a[y] / 1.618,
                        c = a[y] - a[S] * (1.618 - 1);
                    return s[B](b > c ? b : (b + 2 * c) / 3)
                }, this),
                e = this.$q(e, b, a[y], f),
                b = s.min(e[Q], e.end),
                e = e.end,
                f = e - b,
                g = Z(function() {
                    var b = a[S] / 1.618,
                        c = a[S] - a[y] * (1.618 - 1);
                    return s[B](b > c ? b : (b + 2 * c) / 3)
                }, this),
                d = this.$q(d, c, a[S], g),
                c = s.min(d[Q], d.end),
                d = d.end;
            a.b = {
                left: b,
                right: e,
                width: f,
                top: c,
                bottom: d,
                height: d - c
            }
        };
        Y.dw = function() {
            var a = this.g,
                b = a[oc].u[N],
                c = this.ma.w[N],
                d = this.ma.nb(),
                e = this.cc.w[N],
                f = this.cc.nb(),
                g = a.Qf == cn ? a[oc][z] : U,
                i = Tx(this.pa, g, a[oc].u, a.b[y], r),
                k = s.max(2, s[B](b / 3.236)),
                m = s.max(2, s[B](c / 1.618)),
                e = s.max(2, s[B](e / 1.618)),
                p = s.max(2, s[B](1.618 * a.Fc)),
                q = [];
            q[x]({
                key: ei,
                min: 2,
                T: [p - 2]
            });
            q[x]({
                key: kq,
                min: 0,
                T: [r]
            });
            0 < i.f[L] && q[x]({
                key: Pp,
                min: b + 2,
                T: []
            });
            if (d == jq) {
                p = this.ma.mv(a.b[y]);
                for (d = 0; d < p; ++d) q[x]({
                    key: Kl,
                    min: c + 2,
                    T: [m - 2]
                })
            }
            f == jq && q[x]({
                key: kj,
                min: this.cc.uc() + 2,
                T: [e - 2]
            });
            for (d = 1; d < i.f[L]; d++) q[x]({
                key: Pp,
                min: b + 2,
                T: [k - 2]
            });
            f = yw(q, a.b.top);
            b = f[kq][0] || 0;
            i = f[oc] || [];
            k = Tx(this.pa, g, a[oc].u, a.b[y], i[L]);
            for (d = 0; d < k.f[L]; d++) b += i[d], a[oc].f[x]({
                text: k.f[d],
                x: a.b[F],
                y: b,
                length: a.b[y]
            });
            a[oc].G = k.la ? g : U;
            g = f.legend || [];
            0 < g[L] && (this.ma.nh = g[L], c = b + g[0] - c, b += ls[gd](l, g), this.ma.gd(new xt(c, a.b[T], b, a.b[F])));
            c = f.colorBar || [];
            0 < c[L] && (b += c[0], a = new xt(b - this.cc.uc(), a.b[T], b, a.b[F]), this.cc.gd(a))
        };

        function cA(a, b) {
            this.Ah = a;
            this.Bh = b;
            this.Rb = xs(a);
            this.Rb.Ja && (this.Rb.Ja = ss(this.Rb.Ja, xs), this.fp = ss(a.Ja, function(c, d) {
                return dA(a.Ja[d], b.Ja[d], this.Rb.Ja[d], j, n)
            }, this));
            this.Rb.va && (this.Rb.va = ss(this.Rb.va, xs), this.gp = ss(a.va, function(c, d) {
                return dA(a.va[d], b.va[d], this.Rb.va[d], n, j)
            }, this));
            this.og = this.re = l;
            this.Cy();
            this.ij = this.Dl = l;
            this.By()
        }

        function dA(a, b, c, d, e) {
            var f = xs(a),
                g = xs(a);
            if (a[I] == Jq && b[I] == Jq) {
                a.ga && b.ga && (g.ga = b.ga, c.ga = xs(c.ga));
                var i = a[pc].Jb,
                    k = b[pc].Jb;
                g.sg = xs(g.sg);
                Ma(g, xs(g[pc]));
                c.sg = xs(c.sg);
                Ma(c, xs(c[pc]));
                g[pc].Jb = k;
                if (a.Q && b.Q) {
                    g.Q = $r(g.Q);
                    c.Q = $r(c.Q);
                    for (var m = g.Q, p = c.Q, q = 0; q < m[L]; q++) {
                        m[q] = xs(m[q]);
                        p[q] = xs(p[q]);
                        var t = m[q];
                        t.l = k(t.S)
                    }
                }
                if (a[z] && b[z]) {
                    qa(g, $r(g[z]));
                    qa(c, $r(c[z]));
                    b = g[z];
                    q = c[z];
                    eA(b);
                    eA(q);
                    for (q = 0; q < b[L]; q++) {
                        var c = a[z][q],
                            w = k,
                            A = b[q],
                            E = d,
                            m = e,
                            p = A.m,
                            t = i(A.S),
                            w = w(A.S);
                        E && (E = c.m[Sc].x - t, p[Sc].x = w +
                            E);
                        m && (E = c.m[Sc].y - t, p[Sc].y = w + E)
                    }
                }
            } else if (a[z] && b[z]) {
                var K = Dw(a[z], b[z], function(a, b) {
                    return a.S == b.S
                });
                qa(f, Qr(a[z], function(a, b) {
                    return K.uh[b] != l
                }));
                qa(g, Qr(b[z], function(a, b) {
                    return K.vh[b] != l
                }));
                qa(c, $r(f[z]));
                eA(f[z]);
                eA(g[z]);
                eA(c[z])
            }
            return [f, g]
        }

        function eA(a) {
            Pr(a, function(b, c) {
                a[c] = xs(a[c]);
                b = a[c];
                b.m = xs(b.m);
                var d = b.m;
                d[Sc] && Ua(d, xs(d[Sc]))
            })
        }
        Y = cA[M];
        Y.Cy = function() {
            var a = this.Ah,
                b = this.Bh;
            if (a.d && b.d) {
                var c = Dw(a.d, b.d, function(a, b) {
                    return a.id == b.id
                });
                this.re = Qr(a.d, function(a, b) {
                    return c.uh[b] != l
                });
                this.og = Qr(b.d, function(a, b) {
                    return c.vh[b] != l
                });
                a.J == W || a.J == no ? (a = a[Wb] == il ? a.Ja[0] : a.va[0], a[I] == Jq ? this.Ew(a.sg.Jb, a.sg.Md) : this.Fw()) : a.J == ji && this.Dw()
            }
        };
        Y.Fw = function() {
            var a = this.Ah.r,
                b = this.Bh.r;
            if (a && b) {
                for (var c = Dw(a, b, function(a, b) {
                        return a[C] == b[C]
                    }), d = 0, e = 0, f = [], g = []; d < a[L] || e < b[L];) d < a[L] && c.uh[d] == l ? (g[x]({
                    qf: {
                        sd: d,
                        Og: j
                    },
                    rf: {
                        sd: e,
                        Og: n
                    }
                }), f[x]({
                    data: a[d][C]
                }), d++) : (e < b[L] && c.vh[e] == l ? (g[x]({
                    qf: {
                        sd: d,
                        Og: n
                    },
                    rf: {
                        sd: e,
                        Og: j
                    }
                }), f[x]({
                    data: b[e][C]
                })) : (g[x]({
                    qf: {
                        sd: d,
                        Og: j
                    },
                    rf: {
                        sd: e,
                        Og: j
                    }
                }), f[x]({
                    data: a[d][C]
                }), d++), e++);
                this.Rb.r = f;
                this.Nj(g, function(a, b) {
                    return b.Og ? a[b.sd] : 0 == b.sd ? a[0] : b.sd >= a[L] ? Mr(a) : fA(a[b.sd - 1], a[b.sd], 0.5)
                })
            }
        };
        Y.Ew = function(a, b) {
            var c = this.Ah.r,
                d = this.Bh.r;
            if (c && d)
                if (0 == c[L] || 0 == d[L]) this.Rb.r = [], this.Nj([], function() {
                    return l
                });
                else {
                    for (var e = function(b) {
                            return a(b[C])
                        }, f = Ew(c, d, e), g = Ew(d, c, e), i = 0, k = 0, m = [], p = []; i < c[L] || k < d[L];) i < c[L] && (f[i] < k || k < d[L] && g[k] > i) ? (p[x]({
                        qf: i,
                        rf: f[i]
                    }), m[x]({
                        data: c[i][C]
                    }), i++) : (k < d[L] && (i < c[L] && f[i] > k || g[k] < i) ? (p[x]({
                        qf: g[k],
                        rf: k
                    }), m[x]({
                        data: d[k][C]
                    })) : (p[x]({
                        qf: i,
                        rf: k
                    }), m[x]({
                        data: b(ms(e(c[i]), e(d[k])))
                    }), i++), k++);
                    this.Rb.r = m;
                    this.Nj(p, function(a, b) {
                        return a[b]
                    })
                }
        };
        Y.Dw = function() {
            for (var a = this.Ah.d[0].c, b = this.Bh.d[0].c, c = Dw(a, b, function(a, b) {
                    return !a && !b ? j : !a || !b ? n : a.id == b.id
                }), d = 0, e = 0, f = []; d < a[L] || e < b[L];)
                if (d < a[L] && c.uh[d] == l) d++;
                else {
                    if (!(e < b[L]) || c.vh[e] != l) f[x]({
                        qf: d,
                        rf: e
                    }), d++;
                    e++
                }
            this.Nj(f, function(a, b) {
                return a[b]
            })
        };
        Y.Nj = function(a, b) {
            for (var c = 0; c < this.re[L]; c++) {
                for (var d = this.re[c].c, e = this.og[c].c, f = [], g = [], i = 0; i < a[L]; i++) {
                    var k = a[i];
                    f[x](b(d, k.qf));
                    g[x](b(e, k.rf))
                }
                this.re[c] = gA(this.re[c], f);
                this.og[c] = gA(this.og[c], g)
            }
        };

        function gA(a, b) {
            var c = xs(a);
            c.c = b;
            c.Ha && (c.Ha = l);
            return c
        }
        Y.By = function() {
            var a = this.Ah,
                b = this.Bh;
            if (a.o && a.o.ta && b.o && b.o.ta) {
                var a = a.o.ta[0],
                    b = b.o.ta[0],
                    c = Dw(a, b, function(a, b) {
                        return a.id == b.id
                    });
                this.Dl = Qr(a, function(a, b) {
                    return c.uh[b] != l
                });
                this.ij = Qr(b, function(a, b) {
                    return c.vh[b] != l
                });
                this.Rb.o = xs(this.Rb.o);
                b = this.Rb.o;
                b.Vc = $r(this.ij);
                b.ta = [b.Vc];
                b = b.Vc;
                for (a = 0; a < b[L]; ++a) {
                    b[a] = xs(b[a]);
                    var d = b[a];
                    if (d.m && (d.m = xs(d.m), d.m.f)) {
                        d.m.f = $r(d.m.f);
                        for (var e = 0; e < d.m.f[L]; e++) d.m.f[e] = xs(d.m.f[e])
                    }
                    d.M && (d.M = xs(d.M), d.M.P && (d.M.P = d.M.P[Oc]()));
                    d.ka && (d.ka =
                        xs(d.ka), d.ka.P && (d.ka.P = xs(d.ka.P)))
                }
            }
        };

        function hA(a, b, c) {
            if (a !== b)
                if (a && a[Bc] == vv && b && b[Bc] == vv) a = new vv({
                    fill: pv(a.Y, b.Y, 1 - c),
                    Cb: hA(a.Ic, b.Ic, c),
                    stroke: pv(a.Ob, b.Ob, 1 - c),
                    Aa: hA(a.I, b.I, c),
                    jd: hA(a.Yc, b.Yc, c),
                    Im: a.xe,
                    q: a.q,
                    pattern: a.$a
                });
                else if (mr(a) && mr(b))
                if (a) {
                    if (b) {
                        for (var d = [], e = s.min(a[L], b[L]), f = 0; f < e; f++) d[x](hA(a[f], b[f], c));
                        a = d
                    }
                } else a = b;
            else a = pr(a) && pr(b) ? iA(a, b, c) : rr(a) && rr(b) ? a * (1 - c) + b * c : l;
            return a
        }

        function iA(a, b, c) {
            if (!a) return b;
            if (!b) return a;
            var d = {};
            rs(a, function(e, f) {
                jr(b[f]) && (d[f] = hA(a[f], b[f], c))
            });
            return d
        }

        function jA(a, b, c, d, e) {
            b = !e || (c ? b >= c.top && b <= c[R] : n);
            return (!d || (c ? a >= c[F] && a <= c[T] : n)) && b
        }

        function oA(a, b, c, d, e) {
            a[pc] && (a[pc].Jb && b[pc] && b[pc].Jb) && (c[pc].Jb = function(c) {
                var d = a[pc].Jb(c),
                    c = b[pc].Jb(c);
                return hA(d, c, e)
            });
            a.ga && b.ga && (c.ga.l = hA(a.ga.l, b.ga.l, e));
            a.Q && b.Q && Pr(c.Q, function(c, g) {
                c.l = hA(a.Q[g].l, b.Q[g].l, e);
                c.v = d(c.l, c.l)
            });
            a[z] && b[z] && Pr(c[z], function(c, g) {
                if (c) {
                    var i = a[z][g].m,
                        k = b[z][g].m,
                        m = c.m;
                    if (m && m[Sc]) {
                        m[Sc].x = hA(i[Sc].x, k[Sc].x, e);
                        m[Sc].y = hA(i[Sc].y, k[Sc].y, e)
                    }
                    if (c.m) c.v = d(c.m[Sc].x, c.m[Sc].y)
                }
            })
        }

        function fA(a, b, c) {
            if (!a || !b) return l;
            var d = xs(a);
            jr(a.h) && jr(b.h) && (d.h = hA(a.h, b.h, c));
            jr(a.Pd) && jr(b.Pd) && (d.Pd = hA(a.Pd, b.Pd, c));
            jr(a.Qd) && jr(b.Qd) && (d.Qd = hA(a.Qd, b.Qd, c));
            return d
        }
        Y.yy = function(a) {
            var b = this.Rb;
            if (b.Ja) {
                var c = function(a, c) {
                    return jA(a, c, b.b, j, n)
                };
                rs(b.Ja, function(b, d) {
                    oA(this.fp[d][0], this.fp[d][1], b, c, a)
                }, this)
            }
            if (b.va) {
                var d = function(a, c) {
                    return jA(a, c, b.b, n, j)
                };
                rs(b.va, function(b, c) {
                    oA(this.gp[c][0], this.gp[c][1], b, d, a)
                }, this)
            }
            if (this.re && this.og) {
                b.d = [];
                for (var e = 0; e < this.re[L]; ++e) {
                    var f = this.re[e],
                        g = this.og[e],
                        i = xs(g);
                    if (f && g && f[I] == g[I]) {
                        if (f.c && g.c) {
                            i.c = [];
                            for (var k = 0; k < f.c[L]; k++) i.c[k] = fA(f.c[k], g.c[k], a)
                        }
                        f.Ha && (f.Ha.fe && g.Ha && g.Ha.fe) && (i.Ha.fe =
                            hA(f.Ha.fe, g.Ha.fe, a))
                    }
                    b.d[e] = i
                }
            }
            if (this.Dl && this.ij && b.o && b.o.Vc)
                for (e = 0; e < b.o.Vc[L]; e++) {
                    f = b.o.Vc[e];
                    g = this.Dl[e];
                    i = this.ij[e];
                    if (f.m && f.m.f && g.m && g.m.f && 0 != g.m.f[L] && i.m && i.m.f)
                        for (var m = f.m.f, p = g.m.f, q = i.m.f, t = p[L], k = 0; k < m[L]; k++) {
                            var w = k < t ? p[k] : p[t - 1];
                            m[k].x = hA(w.x, q[k].x, a);
                            m[k].y = hA(w.y, q[k].y, a)
                        }
                    f.M && (f.M.P && g.M && g.M.P && i.M && i.M.P) && (k = hA(g.M.P, i.M.P, a), f.M.P = new zt(k[F], k.top, k[y], k[S]));
                    f.ka && (f.ka.P && g.ka && g.ka.P && i.ka && i.ka.P) && (f.ka.P = hA(g.ka.P, i.ka.P, a))
                }
            return b
        };

        function pA(a) {
            this.OB = a
        }
        pA[M].ww = function(a, b, c, d) {
            var e = [],
                f = b.z,
                g = a.z;
            if (f.Qb != g.Qb || f.Bd != g.Bd) g.Qb != l && e[x](this.Vj($m, g.Qb, g.Bd, c, d)), f.Qb != l && e[x](this.Vj(an, f.Qb, f.Bd, c, d));
            if (f.nd != g.nd && (g.nd != l && (g = g.nd, e[x]({
                    type: $m,
                    data: {
                        row: g,
                        column: l
                    }
                })), f.nd != l)) g = f.nd, e[x]({
                type: an,
                data: {
                    row: g,
                    column: l
                }
            });
            f = b.qb.z;
            (g = a.qb.z) && (!f || f.ie != g.ie || f.he != g.he) && e[x]({
                type: $m,
                data: {
                    row: g.ie,
                    column: g.he
                }
            });
            f && (!g || f.ie != g.ie || f.he != g.he) && e[x]({
                type: an,
                data: {
                    row: f.ie,
                    column: f.he
                }
            });
            f = b.o.z;
            g = a.o.z;
            f.ob != g.ob && (g.ob != l && e[x](this.Vj($m,
                g.ob, l, c, d)), f.ob != l && e[x](this.Vj(an, f.ob, l, c, d)));
            b[rb].Yd(a[rb]) || e[x]({
                type: po
            });
            Pr(e, Z(function(a) {
                this[Ab](a[I], a[C])
            }, this))
        };
        pA[M].dispatchEvent = function(a, b) {
            google[Hc][mb][cb](this.OB, a, b || l)
        };
        pA[M].Vj = function(a, b, c, d, e) {
            b = e[b];
            d == rn ? (c = b.Oe, d = l) : d = b.Oe;
            return {
                type: a,
                data: {
                    row: c,
                    column: d
                }
            }
        };

        function qA(a) {
            this.lA = a;
            this.Of = r;
            this.Sg = 0;
            a = new Ou(50);
            this.Vm(a);
            eu(a, Kp, Z(this.On, this));
            a[Q]()
        }
        Ar(qA, Br);
        qA[M].Ea = function(a) {
            this.Of = s.min(this.Of, a)
        };
        qA[M].sA = function() {
            this.Of = r
        };
        qA[M].On = function() {
            var a = zr();
            this.Of -= a - this.Sg;
            this.Sg = a;
            0 >= this.Of && (this.lA(), this.Of = r)
        };

        function rA(a, b, c, d, e) {
            this.p = a;
            this.C = b;
            this.oe = c;
            this.md = d;
            this.Fa = new qA(e);
            this.Vm(this.Fa);
            this.Tx()
        }
        Ar(rA, Br);
        Y = rA[M];
        Y.hA = function() {
            this.Fa.sA()
        };
        Y.Xy = function(a) {
            Ma(this.C[qc], a[C].Wb);
            this.Fa.Ea(50)
        };
        Y.Yy = function() {};
        Y.Zy = function(a) {
            Ma(this.C[qc], a[C].Wb);
            this.md[Ab](Zm, {
                targetID: a[C].$h,
                x: a[C].Wb.x,
                y: a[C].Wb.y
            })
        };
        Y.Wy = function(a) {
            this.md[Ab](Ui, {
                targetID: a[C].$h,
                x: a[C].Wb.x,
                y: a[C].Wb.y
            })
        };
        Y.$y = function(a) {
            this.md[Ab](eo, {
                targetID: a[C].$h,
                x: a[C].Wb.x,
                y: a[C].Wb.y
            })
        };
        Y.Uy = function(a) {
            this.C.z.nd = a[C].Kb;
            this.Fa.Ea(50)
        };
        Y.Vy = function() {
            this.Ir();
            this.Fa.Ea(50)
        };
        Y.Ty = function(a) {
            var b = this.p;
            this.C[qc].Vp = this.C[qc][pc][Oc]();
            this.C[rb].ym(b.r[a[C].Kb].Oe, b.Oi == Mo);
            this.Fa.Ea(0)
        };
        Y.ps = function(a) {
            this.p.J != ji && (this.C.o.z.ob = a[C].Mj, this.Fa.Ea(50))
        };
        Y.qs = function() {
            this.p.J != ji && (this.C.o.z.ob = l, this.Fa.Ea(250))
        };
        Y.dz = function(a) {
            this.p.J != ji && (this.ur(a[C].Mj), this.Fa.Ea(0))
        };
        Y.ez = function(a) {
            this.C.o.vg == l && (this.C.o.vg = 0);
            this.C.o.vg += a[C].Tw;
            this.Fa.Ea(0)
        };
        Y.Lq = function(a) {
            if (this.p.J != ji) {
                var b = this.p.Rf;
                if (this.p.Gb == xo || b == Mj) this.C.z.Qb = a[C].ba, this.Fa.Ea(50)
            }
        };
        Y.pr = function() {
            if (this.p.J != ji) {
                var a = this.p.Rf;
                if (this.p.Gb == xo || a == Mj) this.wr(), this.Fa.Ea(250)
            }
        };
        Y.oq = function(a) {
            this.p.J != ji && this.p.Gb == xo && (this.ur(a[C].ba), this.Fa.Ea(0))
        };
        Y.gz = function(a) {
            this.ps(a)
        };
        Y.hz = function(a) {
            this.qs(a)
        };
        Y.fz = function(a) {
            this.md[Ab](Wn, {
                index: a[C].Mj
            })
        };
        Y.bz = function(a) {
            this.p.Gb == xo ? this.Lq(a) : (this.C.z.Qb = a[C].ba, this.C.z.Bd = a[C].Kb, this.Fa.Ea(50))
        };
        Y.cz = function(a) {
            this.p.Gb == xo ? this.pr(a) : (this.Jm(), this.Fa.Ea(250))
        };
        Y.az = function(a) {
            var b = this.p;
            if (b.Gb == xo) this.oq(a);
            else {
                var c = b.Oi == Mo,
                    d = a[C].Kb;
                b.J == ji ? this.C[rb].ym(d, c) : (a = b.d[a[C].ba].Oe, this.p.Gb == xo ? this.C[rb].Gq(a, c) : this.C[rb].sq(d, a, c));
                this.Fa.Ea(0)
            }
        };
        Y.Hq = function(a) {
            var b = a[C].of; - 1 != b && (this.C.qb.z = {
                ie: a[C].Kb,
                he: this.Tq(a[C].ba, b)
            }, this.Jm(), this.Fa.Ea(50))
        };
        Y.kr = function(a) {
            -1 != a[C].of && (this.C.qb.z = l, this.Fa.Ea(250))
        };
        Y.Sy = function(a) {
            var b = this.p.Oi == Mo,
                c = a[C].Kb,
                d = a[C].ba,
                a = a[C].of; - 1 == a ? this.C.qb.Ni = {
                ba: d,
                Uk: c
            } : (d = this.Tq(d, a), this.C[rb].sq(c, d, b));
            this.Fa.Ea(0)
        };
        Y.iz = function(a) {
            if (a[C].of === l) {
                switch (this.p.Gb) {
                    case Bj:
                        this.C.z.Bd = a[C].Kb;
                        this.C.z.Qb = a[C].ba;
                        break;
                    case xo:
                        this.C.z.Qb = a[C].ba;
                        break;
                    case vi:
                        this.C.z.nd = a[C].Kb
                }
                this.Fa.Ea(50)
            } else this.Hq(a)
        };
        Y.jz = function(a) {
            if (a[C].of === l) {
                switch (this.p.Gb) {
                    case Bj:
                        this.Jm();
                        break;
                    case xo:
                        this.wr();
                        break;
                    case vi:
                        this.Ir()
                }
                this.Fa.Ea(750)
            } else this.kr(a)
        };
        Y.Qy = function(a) {
            this.C.kc.z.Ph = a[C].Ph;
            this.Fa.Ea(50)
        };
        Y.Ry = function() {
            this.C.kc.z.Ph = l;
            this.Fa.Ea(250)
        };
        Y.Jm = function() {
            this.C.z.Qb = l;
            this.C.z.Bd = l
        };
        Y.wr = function() {
            this.C.z.Qb = l
        };
        Y.Ir = function() {
            Ma(this.C[qc], l);
            this.C.z.nd = l
        };
        Y.Tq = function(a, b) {
            var c = this.p,
                d = l;
            if (a != l) d = c.d[a].K.annotation;
            else
                for (var e = 0; e < c.be[L]; ++e) d = c.be[e].K.annotation;
            return d[b]
        };
        Y.Tx = function() {
            var a = Z(function(a, c) {
                eu(this.oe, a, Z(c, this))
            }, this);
            a(Li, this.Xy);
            a(Mi, this.Yy);
            a(Ni, this.Zy);
            a(Ki, this.Wy);
            a(Pi, this.$y);
            a(xi, this.Uy);
            a(yi, this.Vy);
            a(wi, this.Ty);
            a(Xl, this.ps);
            a(Yl, this.qs);
            a(Wl, this.dz);
            a(am, this.ez);
            a(vo, this.Lq);
            a(wo, this.pr);
            a(uo, this.oq);
            a(Un, this.gz);
            a(Vn, this.hz);
            a(Tn, this.fz);
            a(Dj, this.bz);
            a(Ej, this.cz);
            a(Cj, this.az);
            a(jh, this.Hq);
            a(kh, this.kr);
            a(ih, this.Sy);
            a(dq, this.iz);
            a(eq, this.jz);
            a(Yg, this.Qy);
            a(Zg, this.Ry)
        };
        Y.ur = function(a) {
            var b = this.p,
                c = b.Oi == Mo,
                a = b.d[a].Oe;
            b.J == rn ? this.C[rb].ym(a, c) : this.C[rb].Gq(a, c)
        };

        function sA(a, b) {
            Vx[P](this, a, b);
            this.xj = this.nl = l
        }
        Ar(sA, Vx);
        Y = sA[M];
        Y.Dq = function(a, b) {
            var c = this.e;
            if (1 > a.d[L]) return n;
            this.nl = b;
            for (var d = 0; d < a.d[L] && 180 > a.d[d].ca;) this.Wh(a.d[d]), d += 1;
            a.ia.jl && this.Wh(a.ia.jl);
            for (var e = a.d[L] - 1; e >= d; e--) this.Wh(a.d[e]);
            a.vc && (this.xj = c.aa(), this.Jq(a.vc), c[v](this.nl, this.xj));
            return j
        };
        Y.Wh = function(a) {
            if (a.v) {
                var b = this.e.aa(),
                    c = this.Pe,
                    d = c.ia.ra,
                    e = c.ia.wa,
                    f = c.ia.$b,
                    g = a[Zb];
                if (a.F) {
                    var i = c.ia.Qk,
                        k = a.F,
                        m = new Bv;
                    m[xb](g.x + k.La.x, g.y + k.La.y);
                    m.H(g.x + k.La.x, g.y + k.La.y + i);
                    m.yb(g.x + f.x, g.y + f.y + i, d, e, k.fa, k.ca, j);
                    m.H(g.x + k.bc.x, g.y + k.bc.y);
                    m.yb(g.x + f.x, g.y + f.y, d, e, k.ca, k.fa, n);
                    this.e.ja(m, k.a, b)
                }
                if (a.ee || a.Qe) i = c.ia.Qk, c = new Bv, c[xb](g.x + f.x, g.y + f.y), c.H(g.x + f.x, g.y + f.y + i), a.Qe && (c.H(g.x + a.bc.x, g.y + a.bc.y + i), c.H(g.x + a.bc.x, g.y + a.bc.y)), a.ee && (c.H(g.x + a.La.x, g.y + a.La.y + i), c.H(g.x + a.La.x,
                    g.y + a.La.y)), this.e.ja(c, a.Ii, b);
                a.zd ? 0 == a.dh && 0 == a.Zf ? this.e.So(f.x, f.y, d, e, a.a, b) : (c = new Bv, c[xb](f.x, f.y - e), c.yb(f.x, f.y, d, e, 0, 180, j), c.yb(f.x, f.y, d, e, 180, 360, j), c[xb](f.x, f.y - a.Zf), c.yb(f.x, f.y, a.dh, a.Zf, 360, 180, n), c.yb(f.x, f.y, a.dh, a.Zf, 180, 0, n), c[Kc](), this.e.ja(c, a.a, b)) : (c = new Bv, c[xb](g.x + a.to.x, g.y + a.to.y), c.H(g.x + a.La.x, g.y + a.La.y), c.yb(g.x + f.x, g.y + f.y, d, e, a.fa, a.ca, j), c.H(g.x + a.uo.x, g.y + a.uo.y), c.yb(g.x + f.x, g.y + f.y, a.dh, a.Zf, a.ca, a.fa, n), this.e.ja(c, a.a, b));
                a.Eb && this.Xo(a.Eb, b);
                if (d =
                    a.Pc) {
                    d.F && (e = new Bv, e[xb](d.F.La.x, d.F.La.y), e.H(d.F.La.x, d.F.La.y + i), e.yb(d.F.sb.x, d.F.sb.y + i, d.F.ra, d.F.wa, d.F.fa, d.F.ca, j), e.H(d.F.bc.x, d.F.bc.y), e.yb(d.F.sb.x, d.F.sb.y, d.F.ra, d.F.wa, d.F.ca, d.F.fa, n), this.e.ja(e, d.F.a, b));
                    if (d.ee || d.Qe) e = new Bv, e[xb](d.hg.x, d.hg.y), e.H(d.Xi.x, d.Xi.y), e.H(d.Xi.x, d.Xi.y + i), e.H(d.hg.x, d.hg.y + i), e.H(d.hg.x, d.hg.y), this.e.ja(e, d.Ii, b);
                    this.Xo(d, b)
                }
                a.al && this.e.Yg(a[z], a.bl.x + g.x, a.bl.y + g.y, a.Vi[y], gp, gp, a.u, b);
                g = kw([Vo, a[sc]]);
                b = b.t();
                this.Qc(this.nl, g, b);
                a.G && (b =
                    kw([Xp, a[sc]]), this.Le(a.G, b))
            }
        };
        Y.Xo = function(a, b) {
            if (a.zd) this.e.So(a.sb.x, a.sb.y, a.ra, a.wa, a.a, b);
            else {
                var c = new Bv;
                c[xb](a.La.x, a.La.y);
                c.yb(a.sb.x, a.sb.y, a.ra, a.wa, a.fa, a.ca, j);
                this.e.ja(c, a.a, b)
            }
        };
        Y.Jq = function(a) {
            for (var b = Z(this.de, this), c = Z(this.Nb, this), d = this.e, e = this.xj, f = 0; f < a[L]; ++f) {
                var g = a[f],
                    i = d.aa(),
                    k = d.aa(),
                    m = new Bv;
                m[xb](g.fc.x + 0.5, g.fc.y + 0.5);
                m.H(g.xp + 0.5, g.fc.y + 0.5);
                m.H(g.xp + 0.5, g.ld.y + 0.5);
                m.H(g.ld.x + 0.5, g.ld.y + 0.5);
                d.ja(m, g.Pa, k);
                d.Tl(g.fc.x + 0.5, g.fc.y + 0.5, g.vp, g.zu, k);
                b(g.dg, i);
                b(g.eg, i);
                d[v](e, i);
                d[v](e, k);
                g = kw([dm, g[sc]]);
                c(i.t(), g)
            }
        };
        Y.er = function(a, b) {
            if (!Jv(b.vc, this.ve.vc)) {
                this.e.Dg(this.xj);
                var c = new jw(2);
                c.vb(0, a.vc || {});
                c.vb(1, b.vc || {});
                c = c[nd]();
                this.Jq(c)
            }
            this.an(a, this.ve);
            this.$m(a, b)
        };
        Y.an = function(a, b) {
            for (var c in b.d) {
                if (b.d[c].G) {
                    var d = kw([Xp, ja(c)]);
                    this.Cg(d)
                }
                this.Wh(a.d[c])
            }
        };
        Y.$m = function(a, b) {
            for (var c in b.d) {
                var d = a.d[c],
                    e = new jw(2);
                e.vb(0, d);
                e.vb(1, b.d[c]);
                this.Wh(e[nd]())
            }
        };

        function tA(a, b, c) {
            ly[P](this, a, b, c, rn)
        }
        Ar(tA, ly);
        tA[M].bi = function(a) {
            return this.e.pn(a[Pc])
        };
        tA[M].ys = function(a, b) {
            var c = b[zc](Id);
            switch (c[0]) {
                case Vo:
                    c = ja(c[1]);
                    if (0 > c) break;
                    this[Ab](to + a, {
                        ba: c,
                        Kb: l
                    })
            }
        };

        function uA(a, b, c, d, e, f) {
            Oy[P](this, a, b, c, d, e);
            var g = a.$(Tj, j);
            this.fA = vw(f, function(b) {
                return a.$(Xo + b + Ke, g)
            })
        }
        Ar(uA, Oy);
        Y = uA[M];
        Y.Cf = function(a, b, c) {
            this.eo(a, b, c)
        };
        Y.Zq = function(a, b) {
            return a.Yd(b, j)
        };
        Y.Sm = function(a) {
            return this.fA[a]
        };
        Y.Ql = function(a, b) {
            a.d = a.d || {};
            var c = a.d;
            c[b] = c[b] || {};
            return c[b]
        };
        Y.eo = function(a, b, c) {
            for (var d = this.je.Zk, e = d == qo || d == ci, d = d == dk || d == ci && 0 == b[rb][vc]()[L], f = b[rb].xm(), g = 0; g < f[L]; ++g) {
                var i = f[g];
                this.Sm(i) && (this.px(a, i, c), e && this.rr(a, i, c, b.kc))
            }
            e = b.z.Qb;
            e != l && this.Sm(e) && (this.sr(a, e, c), d && this.rr(a, e, c), a.vc && (c.vc = Zz(a.vc, e)));
            b = b.o.z.ob;
            b != l && this.Sm(b) && (this.sr(a, b, c), a.vc && (c.vc = Zz(a.vc, b)))
        };
        Y.sr = function(a, b, c) {
            var d = a.ia,
                a = a.d[b],
                c = this.Ql(c, b);
            c.Pc = {};
            b = c.Pc;
            b.a = new vv({
                stroke: a.a.Y,
                Aa: 6.5,
                jd: 0.3
            });
            b.sb = new $(d.$b.x + a[Zb].x, d.$b.y + a[Zb].y);
            b.fa = a.fa;
            b.ca = a.ca;
            b.zd = a.zd;
            var e = c.Eb;
            e ? (c = e.ra + e.a.I / 2, d = e.wa + e.a.I / 2) : (c = d.ra + a.a.I / 2, d = d.wa + a.a.I / 2);
            b.ra = c + b.a.I / 2;
            b.wa = d + b.a.I / 2;
            d = ks(b.fa - 90);
            c = ks(b.ca - 90);
            b.La = ps(b.sb, Ky(d, b.ra, b.wa));
            b.bc = ps(b.sb, Ky(c, b.ra, b.wa));
            if (e = a.F) b.F = b.F || {}, b.F.a = xv(e.a.Y, 0.3), b.F.sb = b.sb[Oc](), b.F.fa = e.fa, b.F.ca = e.ca, b.F.ra = b.ra + b.a.I / 2, b.F.wa = b.wa + b.a.I / 2,
                d = ks(b.F.fa - 90), c = ks(b.F.ca - 90), b.F.La = ps(b.F.sb, Ky(d, b.F.ra, b.F.wa)), b.F.bc = ps(b.F.sb, Ky(c, b.F.ra, b.F.wa));
            b.ee = a.ee;
            b.Qe = a.Qe;
            if (b.ee || b.Qe) b.Ii = xv(a.Ii.Y, 0.3), b.hv = b.ee ? d : c, a = function(a, b) {
                return ps(a.sb, Ky(a.hv, a.ra + b * a.a.I / 2, a.wa + b * a.a.I / 2))
            }, b.hg = a(b, -1), b.Xi = a(b, 1)
        };
        Y.px = function(a, b, c) {
            var d = a.ia;
            0 < d.Qk || (a = a.d[b], b = this.Ql(c, b), b.Eb = {}, b = b.Eb, b.a = yv(a.a.Y, 2), b.sb = new $(d.$b.x + a[Zb].x, d.$b.y + a[Zb].y), b.fa = a.fa, b.ca = a.ca, b.zd = a.zd, a = a.a.I / 2 + 2.5 + b.a.I / 2, b.ra = d.ra + a, b.wa = d.wa + a, d = ks(b.ca - 90), b.La = ps(b.sb, Ky(ks(b.fa - 90), b.ra, b.wa)), b.bc = ps(b.sb, Ky(d, b.ra, b.wa)))
        };
        Y.rr = function(a, b, c, d) {
            c = this.Ql(c, b);
            a = this.je.mk(a, d != l, b, l, l);
            c.G = a;
            d && this.Vd.Cf(a, d, c.G)
        };

        function vA(a, b) {
            this.i = this.p = l;
            this.na = a;
            this.Ld = this.Xc = this.Bg = this.C = this.nj = this.qg = l;
            this.oe = new Nu;
            this.wc = l;
            this.md = new pA(b)
        }
        Y = vA[M];
        Y.ok = function() {
            return this.Xc
        };
        Y.yh = function() {
            return this.p
        };
        Y.draw = function(a, b, c, d) {
            this.jr();
            a: {
                for (var e = Yv() + We, f = ea[ec](lg), g = 0; g < f[L]; g++)
                    if (f[g] && f[g].href && f[g].href == e) break a;f = ea[Ib](mm);f.href = e;f.rel = vp;Da(f, Dp);
                if (0 == ea[ec](cl)[L]) {
                    var e = ea[ec](kl)[0],
                        g = ea[ec](Rh)[0],
                        i = ea[Ib](cl);
                    e.insertBefore(i, g)
                }
                ea[ec](cl)[0][v](f)
            }
            c.isStacked && (c.vAxis && c.vAxis.baseline) && h(u("Cannot set a non-zero base-line for a stacked chart"));
            f = c.theme || [];
            mr(f) || (f = [f]);
            c = [c];
            for (e = 0; e < f[L]; ++e) {
                var k;
                qr(f[e]) ? (k = f[e], Xy || (g = {
                    colors: [{
                        color: de,
                        dark: Wd,
                        light: je
                    }, {
                        color: $d,
                        dark: Xd,
                        light: he
                    }, {
                        color: ce,
                        dark: Vd,
                        light: me
                    }, {
                        color: Ud,
                        dark: Pd,
                        light: be
                    }, {
                        color: ie,
                        dark: ae,
                        light: ge
                    }, {
                        color: Rd,
                        dark: Od,
                        light: Yd
                    }],
                    backgroundColor: {
                        gradient: {
                            color1: Qd,
                            color2: Ld,
                            x1: af,
                            y1: af,
                            x2: hf,
                            y2: hf
                        }
                    },
                    titleTextStyle: {
                        color: Tq
                    },
                    hAxis: {
                        textStyle: {
                            color: Tq
                        },
                        titleTextStyle: {
                            color: Tq
                        }
                    },
                    vAxis: {
                        textStyle: {
                            color: Tq
                        },
                        titleTextStyle: {
                            color: Tq
                        }
                    },
                    legend: {
                        textStyle: {
                            color: Tq
                        }
                    },
                    chartArea: {
                        backgroundColor: {
                            stroke: ee,
                            fill: X
                        }
                    },
                    areaOpacity: 0.8
                }, Wy.classic = g, g = {
                    titlePosition: ql,
                    axisTitlesPosition: ql,
                    legend: {
                        position: ql
                    },
                    chartArea: {
                        width: hf,
                        height: hf
                    },
                    vAxis: {
                        textPosition: ql
                    },
                    hAxis: {
                        textPosition: ql
                    }
                }, Wy.maximized = g, g = {
                    enableInteractivity: n,
                    legend: {
                        position: X
                    },
                    seriesType: wh,
                    lineWidth: 1.6,
                    chartArea: {
                        width: hf,
                        height: hf
                    },
                    vAxis: {
                        textPosition: X,
                        gridlines: {
                            color: X
                        },
                        baselineColor: X
                    },
                    hAxis: {
                        textPosition: X,
                        gridlines: {
                            color: X
                        },
                        baselineColor: X,
                        type: zi
                    }
                }, Wy.sparkline = g, Xy = j), k = Wy[k]) : pr(f[e]) ? k = f[e] : h(u("Theme should be a theme name or an options object."));
                c[x](k)
            }
            c[x](Rx);
            this.i = new Lv(c);
            this.Hl = this.i.Uh(Uq) || this.na[uc] ||
                400;
            this.pg = this.i.Uh(dl) || this.na[Zc] || 200;
            k = new qs(this.Hl, this.pg);
            c = this.i.$(nk);
            if (!this.Xc || this.Xc.Rj) try {
                this.Xc = new aw(this.na, k, a, c)
            } catch (m) {
                h(u("Your browser does not support charts"))
            } else this.Xc.update(k, a);
            this.C = new Py(d);
            this.Oc = b;
            this.Xc.bx(Z(this.ax, this), a)
        };
        Y.ax = function() {
            var a = this.Xc.kj(),
                b = this.Xc.wp(),
                c;
            this.Ld ? (c = this.Ld.tp, this.Pl()) : c = this.p;
            var d = this.i,
                e = (new bA(this.Oc, d, Z(a.np, a), this.Hl, this.pg)).yh();
            this.wc = new rA(e, this.C, this.oe, this.md, Z(this.Gl, this, j));
            var f = new qs(this.Hl, this.pg),
                g = {
                    eb: e.ed,
                    fontSize: e.Fc
                },
                i = e.Rf,
                k = e.Gb,
                m = e.d[L];
            this.nj = e.J == rn ? new uA(d, f, g, i, k, m) : new Ry(d, f, g, i, k, m);
            this.qg = e.J == rn ? new sA(b, a) : new jy(b, a);
            (a = d.R(bh, 0)) ? (d = d.U(ch, fw, km), d = gw(d), d = {
                duration: a,
                Cu: d
            }) : d = l;
            d && c && c.J == e.J && c[y] == e[y] && c[S] == e[S] && c.b.top ==
                e.b.top && c.b[R] == e.b[R] && c.b[F] == e.b[F] && c.b[T] == e.b[T] ? (this.p = l, a = zr(), this.Ld = {
                    UB: c,
                    wu: e,
                    vu: new cA(c, e),
                    tp: c,
                    startTime: a,
                    uu: a + d.duration,
                    up: 0,
                    Ul: new Ou(10),
                    tu: d.Cu,
                    qp: n
                }, this.Fp(), eu(this.Ld.Ul, Kp, Z(this.Fp, this)), this.Ld.Ul[Q]()) : (this.p = e, this.rp(), this.sp());
            this.md[Ab](On)
        };
        Y.jr = function() {
            this.wc && !this.wc.Rj && this.wc.hA();
            Dr(this.wc);
            ku(this.oe)
        };
        Y.clearChart = function() {
            this.Ld && this.Pl();
            this.jr();
            Dr(this.Xc);
            ku(this)
        };
        Y.fx = function(a) {
            var b = new hw;
            b[Tb](a);
            for (var a = b.jj(), b = n, c = 0; c < a[L]; c++) {
                var d = a[c],
                    e = d.row,
                    d = this.p.Sf[d.column];
                if (!d) return n;
                var f = d.ba,
                    g, i;
                f != l ? g = this.p.d[f].c[e] : i = this.p.r[e];
                if (!g && !i) return n;
                if (d.Sk == gh) {
                    if (b) return n;
                    b = j;
                    if (!(g || i).xa) return n
                }
            }
            return j
        };
        Y.setSelection = function(a) {
            if (this.fx(a)) {
                var b = l;
                if (this.p.J != rn) {
                    var c = new hw;
                    c[Tb](a);
                    for (var c = c.jj(), d = 0; d < c[L]; d++) {
                        var e = c[d],
                            f = this.p.Sf[e.column];
                        if (f.Sk == gh) {
                            b = {
                                ba: f.ba,
                                Uk: e.row
                            };
                            break
                        }
                    }
                }
                this.Gl(j);
                this.C[rb][Tb](a);
                b && (this.C.qb.Ni = b);
                this.Gl(n)
            }
        };
        Y.getSelection = function() {
            return this.Bg[rb][vc]()
        };
        Y.Gl = function(a) {
            var b = this.Bg;
            if (!this.nj.Zq(this.C, this.Bg)) {
                var c = this.nj.Xq(this.p, this.C);
                this.qg.xw(this.p, c);
                this.Bg = this.C[Oc]()
            }
            a && this.md.ww(b, this.Bg, this.p.J, this.p.d)
        };
        Y.rp = function() {
            var a = this.nj.Xq(this.p, this.C);
            this.qg.drawChart(this.p, a);
            this.Bg = this.C[Oc]()
        };
        Y.sp = function() {
            var a = this.Xc.kj(),
                b = this.Xc.wp(),
                a = this.p.J == rn ? new tA(this.oe, a, b) : new my(this.oe, a, b, this.p);
            a.jy();
            a.iy()
        };
        Y.Fp = function() {
            var a = this.Ld;
            if (a.qp) this.Pl(), this.p = a.wu, this.rp(), this.sp(), this.md[Ab](eh);
            else {
                var b = zr(),
                    c = (b - a.startTime) / (a.uu - a.startTime);
                if (1 > c) {
                    if (b - a.up < 1E3 / 30) return
                } else c = 1, a.qp = j;
                c = a.vu.yy(a.tu(c));
                a.tp = c;
                a.up = b;
                this.qg.drawChart(c, {});
                this.md[Ab](fh)
            }
        };
        Y.Pl = function() {
            Dr(this.Ld.Ul);
            this.Ld = l
        };
        Y.getChartAreaBoundingBox = function() {
            var a = this.p.b;
            return {
                left: a[F],
                top: a.top,
                width: a[y],
                height: a[S]
            }
        };
        Y.getBoundingBox = function(a) {
            if (this.qg == l) return l;
            a = this.qg[cc](a);
            return !a ? l : {
                left: a[F],
                top: a.top,
                width: a[T] - a[F],
                height: a[R] - a.top
            }
        };
        Y.getChartLayoutInterface = function() {
            var a = this.p;
            return {
                getChartAreaBoundingBox: Z(this.getChartAreaBoundingBox, this),
                getBoundingBox: Z(this[cc], this),
                getXLocation: Z(fy, l, a),
                getYLocation: Z(gy, l, a),
                getHAxisValue: Z(hy, l, a),
                getVAxisValue: Z(iy, l, a)
            }
        };

        function wA(a, b, c) {
            this.bA = a;
            this.na = b;
            a = Et(b, Fn);
            (a == U || a == hp) && Bt(b, Fn, Rn);
            this.zi = l;
            c && (this.zi = jt(Lj, {
                style: Gn
            }))
        }
        Y = wA[M];
        Y.Ft = function() {
            return this.zi ? (this.zi[ld] != this.na && this.na[v](this.zi), this.zi) : this.na
        };
        Y.addError = function(a) {
            this.MB(a, Vj)
        };
        Y.MB = function(a, b) {
            var c = this.Ft(),
                d = {
                    removable: j,
                    type: b
                },
                c = {
                    id: google[Hc].errors.addError(c, a, l, d),
                    message: a,
                    detailedMessage: U,
                    options: d
                };
            google[Hc][mb][cb](this.bA, Vj, c)
        };
        Y.removeAll = function() {
            var a = this.Ft();
            google[Hc].errors[Tc](a)
        };
        Y.ut = function(a, b) {
            try {
                return a[P](b)
            } catch (c) {
                this.addError(c.message)
            }
        };

        function xA(a) {
            this.oB = a;
            this.zt = n
        }
        xA[M].EA = function(a, b) {
            return Z(function() {
                if (!this.zt) {
                    var c = arguments;
                    this.oB.ut(function() {
                        a[gd](b, c)
                    })
                }
            }, this)
        };
        xA[M].mt = function() {
            this.zt = j
        };

        function yA(a) {
            pr(a) && 0 < a[kb] || h(u("Container is not defined"));
            this.Zc = a;
            this.Xs = new wA(this, this.Zc);
            this.Ge = l
        }
        yA[M].getContainer = function() {
            return this.Zc
        };
        yA[M].draw = function(a, b, c) {
            this.Xs.ut(Z(function() {
                this.Bn(a, b, c)
            }, this))
        };
        yA[M].Bn = function(a, b, c) {
            a || h(u("Data table is not defined."));
            this.Ge && this.Ge.mt();
            this.Ge = new xA(this.Xs);
            var d = Z(this.Ge.EA, this.Ge);
            this.DA(d, a, b, c)
        };
        yA[M].clearChart = function() {
            this.Ge && (this.Ge.mt(), this.Ge = l);
            this.XA()
        };

        function zA(a) {
            a = a[ib](/"(Date\([\d,\s]*\))"/g, function(a, c) {
                return Qm + c
            });
            return eval(ue + a + we)
        }

        function AA(a, b) {
            var a = b(a),
                c = ir(a);
            if (c == Wm || c == zh) {
                var c = c == zh ? [] : {},
                    d;
                for (d in a) {
                    var e = AA(a[d], b);
                    jr(e) && (c[d] = e)
                }
            } else c = a;
            return c
        }

        function BA(a) {
            or(a) && (a = 0 !== a.getMilliseconds() ? [a[Yc](), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()] : 0 !== a.getSeconds() || 0 !== a.getMinutes() || 0 !== a.getHours() ? [a[Yc](), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()] : [a[Yc](), a.getMonth(), a.getDate()], a = $f + a[pd](ye) + we);
            return a
        };

        function CA(a) {
            yA[P](this, a);
            DA++;
            this.Js = this.Fg = X;
            this.Hb = il;
            this.os = l;
            this.Cn = n;
            this.oa = l
        }
        Ar(CA, yA);
        var DA = 0;
        Y = CA[M];
        Y.oz = function() {
            this.oa || (this.oa = new vA(this.Zc, this))
        };
        Y.setChartType = function(a, b, c, d) {
            this.Fg = a;
            b != l && (this.Js = b);
            c != l && (this.Hb = c);
            d != l && (this.os = d)
        };
        Y.DA = function(a, b, c, d) {
            c = c || {};
            c = AA(c, BA);
            c = (new vu(aa)).pz(c);
            uu(c);
            c = zA(c);
            this.oz();
            this.qz(c);
            this.rz(c);
            Fa(c, c[Wb] || this.Hb);
            c.theme = c.theme || this.os;
            if (this.Fg != X) {
                var e = c;
                e.hAxis = e.hAxis || {};
                e.vAxis = e.vAxis || {};
                var f = e.hAxis,
                    g = e.vAxis,
                    i = l;
                switch (e[I]) {
                    case no:
                        i = g;
                        break;
                    case W:
                        e.targetAxis = e.targetAxis || {}, i = e.targetAxis
                }
                i && (EA(e, zm, i, Cm), EA(e, tm, i, wm), EA(e, om, i, om));
                f && (EA(e, pm, f, om), EA(e, Up, f, Pp));
                g && EA(e, Vp, g, Pp);
                e.smoothLine && !jr(e.curveType) && (e.curveType = W);
                EA(e, im, e, jm);
                EA(e, Zn, e, $n);
                e.chartArea = e.chartArea || {};
                EA(e, Ch, e.chartArea, Fh)
            }
            e = c;
            FA(e, Qp, Rp, Tp);
            FA(e, bm, Zl, cm);
            GA(e.hAxis);
            for (var k in e.hAxes) GA(e.hAxes[k]);
            GA(e.vAxis);
            for (k in e.vAxes) GA(e.vAxes[k]);
            k = e.tooltip;
            k == l && (k = {}, e.tooltip = k);
            FA(e, gq, cq, hq);
            EA(e, hq, k, Ip);
            EA(e, fq, k, Ap);
            EA(e, iq, k, oq);
            k[cb] == jl && (k.trigger = dk);
            k = e.legend;
            k != l ? typeof k == op && (f = k, k = {}, e.legend = k, Ma(k, f)) : (k = {}, e.legend = k);
            EA(e, cm, k, Ip);
            k = e.animation;
            k != l ? typeof k == Um && (f = 1E3 * k, k = {}, e.animation = k, k.duration = f) : (k = {}, e.animation = k);
            EA(e, dh, k, Rj);
            google[Hc].errors[Tc](this.Zc);
            b || h(u("Data table is not defined"));
            this.nz = (k = b[Mb](0) != Um) ? 1 : 0;
            b[mc]();
            this.Fg == rn && (k && 1 == b[tb]() ? (b = google[Hc][C].group(b, [0], [{
                column: 0,
                aggregation: google[Hc][C].count,
                type: Um
            }]), this.Cn = j) : c.aggregate && k && (b = google[Hc][C].group(b, [0], [{
                column: this.nz,
                aggregation: google[Hc][C].sum,
                type: Um
            }]), this.Cn = j));
            this.oa[Vc](a, b, c, d)
        };
        Y.getSelection = function() {
            return this.Cn ? l : this.oa[vc]()
        };
        Y.setSelection = function(a) {
            this.oa[Tb](a)
        };
        Y.qz = function(a) {
            switch (a[I]) {
                case hm:
                    this[tc](W, hm, il);
                    Da(a, l);
                    break;
                case wh:
                    this[tc](W, wh, il);
                    Da(a, l);
                    break;
                case oj:
                    this[tc](W, Jh, il);
                    Da(a, l);
                    break;
                case Jh:
                    this[tc](W, Jh, Mq);
                    Da(a, l);
                    break;
                case no:
                    this[tc](no);
                    Da(a, l);
                    break;
                case rn:
                    this[tc](rn), Da(a, l)
            }
            var b = this.Fg;
            b == X && (b = l);
            var c = a[I] || X;
            c == X && (c = l);
            !b && !c && h(u("Unspecified chart type."));
            b && (c && b != c) && h(u("Incompatible chart types."));
            Da(a, b || c)
        };
        Y.rz = function(a) {
            if (a[I] == W) {
                var b = this.Js;
                b == X && (b = l);
                var c = a.seriesType || X;
                c == X && (c = l);
                b && (c && b != c) && h(u("Incompatible default series types."));
                a.seriesType = b || c
            }
        };

        function GA(a) {
            if (a != l) {
                FA(a, Ep, Gp, Ip);
                FA(a, Qp, Rp, Tp);
                a.gridlines = a.gridlines || {};
                var b = a.gridlines,
                    c = a.numberOfSections;
                !jr(b.count) && (jr(c) && typeof c == Um) && (b.count = c + 1);
                a = a.gridlineColor;
                !jr(b[zb]) && jr(a) && xa(b, a)
            }
        }

        function FA(a, b, c, d) {
            a[d] = a[d] || {};
            d = a[d];
            EA(a, b, d, aj);
            EA(a, c, d, lk)
        }

        function EA(a, b, c, d) {
            jr(a[b]) && !jr(c[d]) && (c[d] = a[b])
        }
        Y.XA = function() {
            this.oa[Gc]()
        };
        Y.NB = function() {
            var a = this.oa.ok().kj();
            return a.Rz ? a.Zc.innerHTML : U
        };
        Y.ok = function() {
            return this.oa.ok()
        };
        Y.yh = function() {
            return this.oa.yh()
        };
        Y.getChartLayoutInterface = function() {
            var a = this.oa.getChartLayoutInterface();
            return {
                getChartAreaBoundingBox: a.getChartAreaBoundingBox,
                getBoundingBox: a[cc],
                getXLocation: a.getXLocation,
                getYLocation: a.getYLocation,
                getHAxisValue: a.getHAxisValue,
                getVAxisValue: a.getVAxisValue
            }
        };

        function HA(a) {
            CA[P](this, a);
            this[tc](W, wh, il)
        }
        Ar(HA, CA);

        function IA(a) {
            CA[P](this, a);
            this[tc](W, jp, il)
        }
        Ar(IA, CA);

        function JA(a) {
            CA[P](this, a);
            this[tc](W, X, il, cp)
        }
        Ar(JA, CA);

        function KA(a) {
            CA[P](this, a);
            this[tc](W, hm, il)
        }
        Ar(KA, CA);

        function LA(a) {
            CA[P](this, a);
            this[tc](no)
        }
        Ar(LA, CA);

        function MA(a) {
            CA[P](this, a);
            this[tc](ji)
        }
        Ar(MA, CA);

        function NA(a) {
            CA[P](this, a);
            this[tc](W, Jh, Mq)
        }
        Ar(NA, CA);

        function OA(a) {
            CA[P](this, a);
            this[tc](W, ui, il)
        }
        Ar(OA, CA);

        function PA(a) {
            CA[P](this, a);
            this[tc](W, Jh, il)
        }
        Ar(PA, CA);

        function QA(a) {
            CA[P](this, a);
            this[tc](W, X, il)
        }
        Ar(QA, CA);

        function RA(a) {
            CA[P](this, a);
            this[tc](rn)
        }
        Ar(RA, CA);

        function SA(a) {
            this.Ra = {};
            this.oa = l;
            this.dc = {
                we: n
            };
            this.Qh = this.Rh = this.Ib = this.Za = this.p = this.Vb = this.Oc = l;
            this.na = a;
            this.Mh = 50;
            this.lq = 0;
            this.Fj = 1;
            this.bm = this.cm = this.vj = n;
            this.Gj = this.Hj = this.rl = this.sl = l;
            this.Ya = n;
            this.Sd = l;
            this.Da = {
                ya: l,
                Ej: l,
                ib: l
            };
            this.Tb = {
                jc: {
                    min: 0,
                    max: 0
                },
                value: {
                    min: 0,
                    max: 0
                }
            };
            this.qm = l;
            this.Al = n;
            this.ze = l
        }
        Ar(SA, Nu);
        var TA = {
                ts: zm,
                ss: tm,
                qk: ci
            },
            UA = {
                zp: "rangeSelectorMinHandle",
                yp: "rangeSelectorMaxHandle",
                Bp: "rangeSelectorMinScreen",
                Ap: "rangeSelectorMaxScreen"
            },
            VA = {
                KC: mg,
                eC: Rf,
                qC: Yf,
                dD: zg
            },
            WA = {
                fill: Zd,
                Cb: 0.5
            },
            XA = {
                chartArea: {
                    top: Ye,
                    height: hf
                },
                enableInteractivity: n,
                legend: {
                    position: X
                },
                hAxis: {
                    textPosition: ql
                },
                vAxis: {
                    textPosition: X,
                    gridlines: {
                        color: X
                    }
                }
            },
            YA = {
                chartArea: {
                    left: Ye,
                    width: hf
                },
                enableInteractivity: n,
                legend: {
                    position: X
                },
                vAxis: {
                    textPosition: ql
                },
                hAxis: {
                    textPosition: X,
                    gridlines: {
                        color: X
                    }
                }
            },
            ZA = {
                a: new vv({
                    stroke: "#000",
                    fill: ke
                }),
                ug: new qs(10, 16),
                Up: 3
            };
        Y = SA[M];
        Y.draw = function(a, b, c) {
            this.oa && this[Gc]();
            this.Oc = a;
            var d;
            a: {
                switch (a[Mb](0)) {
                    case Um:
                        d = {
                            Lc: Xw,
                            Mg: Yw
                        };
                        break a;
                    case zj:
                    case Aj:
                        d = {
                            Lc: Zw,
                            Mg: $w
                        };
                        break a;
                    case Op:
                        d = {
                            Lc: ax,
                            Mg: bx
                        };
                        break a
                }
                d = aa
            }
            this.Vb = d;
            this.Ra = {};
            this.oy();
            b = new Lv([b || {}]);
            this.sy(b);
            this.Sd = this.py(b);
            c = c || {};
            google[Hc][mb].addListener(this.oa, On, Z(this.ry, this, c));
            this.vj && this.qy(c);
            this.oa[Vc](a, this.Sd)
        };
        Y.qy = function(a) {
            this.Hj = this.Oc[J](0, 0);
            this.Gj = this.Oc[J](this.Oc[mc]() - 1, 0);
            var b = {};
            b.min = this.Hj;
            b.max = this.Gj;
            a.range && this.gr(b, a.range);
            this.Sd.domainAxis = this.Sd.domainAxis || {};
            this.Sd.domainAxis.viewWindow = b
        };
        Y.oy = function() {
            this.Rh == l && (this.Rh = new qA(Z(this.JA, this)));
            this.Qh == l && (this.Qh = new qA(Z(this.Km, this, j)))
        };
        Y.sy = function(a) {
            this.Mh = a.R(Mn, 50);
            this.lq = a.R(Am, 0);
            this.El = a.$(ck, n);
            this.vj = a.$(cr, n);
            this.cm = a.$(Zo, n);
            this.bm = a.$(Di, n);
            this.sl = a.Ne(Lo, new vv(WA));
            this.rl = wv[Oc]();
            this.oa = this.Nx(a);
            this.Ya = this.Ox(a)
        };
        Y.Ox = function(a) {
            return a.U(bn, Ex, il) == Mq
        };
        Y.Nx = function(a) {
            switch (a.U(Qi, VA, Yf)) {
                case Rf:
                    return new HA(this.na);
                case Yf:
                    return new QA(this.na);
                case zg:
                    return new LA(this.na);
                case mg:
                    return new KA(this.na);
                default:
                    return new QA(this.na)
            }
        };
        Y.py = function(a) {
            a = Kv(a.Vh(Oi));
            a.theme = this.Ya ? YA : XA;
            return a
        };
        Y.Jz = function(a, b, c) {
            var d = vw(a[mc](), function(c) {
                    return a[J](c, b)
                }),
                d = Qr(d, lr);
            return Rr(d, c)
        };
        Y.Ww = function(a) {
            var b = this.Za,
                a = this.Jz(a, 0, b[pc].Jb);
            return this.Ya ? 1 == b.Tc ? a[jb]() : a : 1 == b.Tc ? a : a[jb]()
        };
        Y.Zw = function() {
            var a = this.lq;
            if (0 >= a) this.Fj = 1;
            else {
                var b = 0,
                    b = this.Tb.jc.min,
                    c = this.Za[pc].Md(b),
                    d = l;
                or(c) ? (d = new Date, d[cd](c[dc]() + a)) : d = c + a;
                b = s[lb](s.abs(this.Za[pc].Jb(d) - b));
                a = s.max(b, 1);
                this.Fj = a < this.Tb.jc.max - this.Tb.jc.min ? a : 1
            }
        };
        Y.ry = function(a) {
            google[Hc][mb].removeAllListeners(this.oa);
            this.dc = {
                we: j
            };
            this.rs(a);
            this.Ib = this.oa.ok().kj(1);
            this.Bn()
        };
        Y.Vq = function(a) {
            google[Hc][mb].removeAllListeners(this.oa);
            this.rs(a);
            this.nn(ci)
        };
        Y.rs = function(a) {
            this.p = this.oa.yh();
            this.Za = this.Yw();
            this.Tb.jc = this.Vw();
            this.Tb.value = this.Xw();
            this.Zw();
            if (this.cm || this.bm) this.qm = this.Ww(this.Oc);
            a && (a = a.range, this.Da.ya = this.Uq(pr(a) ? a[Q] : l, pr(a) ? a.end : l))
        };
        Y.Yw = function() {
            return this.Ya ? this.p.va[0] : this.p.Ja[0]
        };
        Y.Vw = function() {
            return {
                min: s.min(this.Za.ac, this.Za.xb),
                max: s.max(this.Za.ac, this.Za.xb)
            }
        };
        Y.Xw = function() {
            var a = this.Za[pc].Md(this.Za.ac),
                b = this.Za[pc].Md(this.Za.xb);
            return {
                min: s.min(a, b),
                max: s.max(a, b)
            }
        };
        Y.Bn = function() {
            var a = this.Ib,
                b = this.p,
                c = a.Lo(b[y], b[S]),
                d = a.aa(n);
            a[v](c, d);
            c = b.b;
            a.Ga(0, 0, b[y], b[S], this.rl, d);
            var b = a.Ga(c[F], c.top, c[y], c[S], this.rl, d),
                e = this.Dp(),
                e = a.Ga(e[F], e.top, e[y], e[S], this.sl, d);
            this.Ra[UA.Bp] = e;
            e = this.Cp();
            e = a.Ga(e[F], e.top, e[y], e[S], this.sl, d);
            this.Ra[UA.Ap] = e;
            e = this.Sp(this.Da.ya.ub, c, ZA.ug, ZA.Up, a, ZA.a, d);
            this.Ra[UA.zp] = e;
            a = this.Sp(this.Da.ya.tb, c, ZA.ug, ZA.Up, a, ZA.a, d);
            this.Ra[UA.yp] = a;
            var f = gt(this.na);
            eu(f[Lc], Im, Z(this.cv, this, this.dc));
            eu(f[Lc], Lm, Z(this.Tp, this,
                this.dc));
            d = d.t();
            eu(d, Im, Z(this.dv, this, this.dc));
            eu(d, Jm, Z(this.Kh, this, this.dc, {
                type: oo,
                Ih: n
            }));
            (this.Al = pt(d, function(a) {
                return a == f[Lc]
            })) || eu(d, Lm, Z(this.Tp, this, this.dc));
            this.El || (this.Rp(e, zm, zm), this.Rp(a, tm, tm));
            eu(b, Hm, Z(this.Qp, this, this.dc, {
                ib: ci
            }));
            eu(b, Km, Z(this.Kh, this, this.dc, {
                type: oo,
                Ih: j
            }));
            eu(b, Jm, Z(this.Kh, this, this.dc, {
                type: oo,
                Ih: n
            }));
            google[Hc][mb][cb](this, On, l)
        };
        Y.Rp = function(a, b, c) {
            eu(a, Hm, Z(this.Qp, this, this.dc, {
                ib: c
            }));
            eu(a, Km, Z(this.Kh, this, this.dc, {
                type: b,
                Ih: j
            }));
            eu(a, Jm, Z(this.Kh, this, this.dc, {
                type: b,
                Ih: n
            }))
        };
        Y.Sp = function(a, b, c, d, e, f, g) {
            var i = e.aa(n);
            e[v](g, i);
            var g = 0.5 * c[y],
                k = this.Ya ? b[F] : this.Jg(a - g),
                a = this.Ya ? this.Jg(a - g) : b.top;
            e.Ze(i.t(), k, a);
            this.Ya ? (this.Qr(0, s[B](g), b[S], b[y], e, f, i), this.El || this.Rr(0.5 * (b[y] - c[S]), 0, c[S], c[y], d, e, f, i)) : (this.Qr(s[B](g), 0, b[S], b[y], e, f, i), this.El || this.Rr(0, 0.5 * (b[S] - c[S]), c[y], c[S], d, e, f, i));
            return i.t()
        };
        Y.Qr = function(a, b, c, d, e, f, g) {
            a = Cv(this.Ya ? [{
                x: a,
                y: b
            }, {
                x: a + d,
                y: b
            }] : [{
                x: a,
                y: b
            }, {
                x: a,
                y: b + c
            }]);
            e.ja(a, f, g)
        };
        Y.Rr = function(a, b, c, d, e, f, g, i) {
            var c = a + c,
                d = b + d,
                k = Cv([{
                    x: a + e,
                    y: b
                }, {
                    x: c - e,
                    y: b
                }, {
                    x: c,
                    y: b + e
                }, {
                    x: c,
                    y: d - e
                }, {
                    x: c - e,
                    y: d
                }, {
                    x: a + e,
                    y: d
                }, {
                    x: a,
                    y: d - e
                }, {
                    x: a,
                    y: b + e
                }], n);
            f.ja(k, g, i);
            k = e + 1;
            this.Ya ? (e = Cv([{
                x: a + k,
                y: b + k
            }, {
                x: c - k,
                y: b + k
            }]), a = Cv([{
                x: a + k,
                y: d - k
            }, {
                x: c - k,
                y: d - k
            }])) : (e = Cv([{
                x: a + k,
                y: b + k
            }, {
                x: a + k,
                y: d - k
            }]), a = Cv([{
                x: c - k,
                y: b + k
            }, {
                x: c - k,
                y: d - k
            }]));
            f.ja(e, g, i);
            f.ja(a, g, i)
        };
        Y.Dp = function() {
            var a = this.p.b,
                b = this.Da.ya.ub;
            return this.Ya ? new zt(a[F], a.top, a[y], b - a.top) : new zt(a[F], a.top, b - a[F], a[S])
        };
        Y.Cp = function() {
            var a = this.p.b,
                b = this.Da.ya.tb;
            return this.Ya ? new zt(a[F], b, a[y], a[R] - b) : new zt(b, a.top, a[T] - b, a[S])
        };
        Y.Uq = function(a, b) {
            var c = this.Tb.jc.min,
                d = this.Tb.jc.max,
                e = 1 == this.Za.Tc && !this.Ya;
            if (a != l) {
                var f = this.Za[pc].Jb(a);
                e ? c = s.max(f, c) : d = s.min(f, d)
            }
            b != l && (f = this.Za[pc].Jb(b), e ? d = s.min(f, d) : c = s.max(f, c));
            return {
                ub: c,
                tb: d
            }
        };
        Y.getRange = function() {
            var a = this.Da.ya,
                b = this.Za[pc].Md(a.ub),
                a = this.Za[pc].Md(a.tb),
                c = 1 == this.Za.Tc && !this.Ya;
            return {
                start: c ? b : a,
                end: c ? a : b
            }
        };
        Y.setRange = function(a, b) {
            if (!this.dc.we) return n;
            var c = this.Da.ya;
            if (c.ub == l || c.tb == l) return n;
            c = this.Uq(a, b);
            c = this.Om(c.ub, c.tb, ci);
            this.Da.ib = l;
            return c
        };
        Y.Om = function(a, b, c) {
            var d = this.Da.ya;
            if (d.ub == a && d.tb == b) return n;
            this.Da.ya = {
                ub: a,
                tb: b
            };
            this.nn(c);
            return j
        };
        Y.nn = function(a) {
            var b = this.Ya ? ZA.ug[S] : ZA.ug[y],
                c = this.Ya ? ZA.ug[y] : ZA.ug[S];
            if (a != tm) {
                var d = this.Dp(),
                    e = this.Ra[UA.Bp],
                    f = this.Ra[UA.zp];
                if (this.Ya) {
                    var g = this.Jg(d.top + d[S] - 0.5 * c);
                    this.Ib.Ze(f, 0, g);
                    this.Ib.sn(e, d.top);
                    this.Ib.qn(e, d[S])
                } else g = this.Jg(d[F] + d[y] - 0.5 * b), this.Ib.Ze(f, g, 0), this.Ib.rn(e, d[F]), this.Ib.tn(e, d[y])
            }
            a != zm && (a = this.Cp(), d = this.Ra[UA.Ap], e = this.Ra[UA.yp], this.Ya ? (g = this.Jg(a.top - 0.5 * c), this.Ib.Ze(e, 0, g), this.Ib.sn(d, a.top), this.Ib.qn(d, a[S])) : (g = this.Jg(a[F] - 0.5 * b), this.Ib.Ze(e,
                g, 0), this.Ib.rn(d, a[F]), this.Ib.tn(d, a[y])))
        };
        Y.JA = function() {
            this.nn(this.Da.ib)
        };
        Y.xr = function() {
            var a = this.Tb.jc.max - this.Tb.jc.min,
                b = this.Za.Tc,
                c = (this.Da.ya.ub - this.Tb.jc.min) / a;
            if (0.1 > c) return {
                direction: -1 * b,
                dr: c / 0.1
            };
            a = (this.Tb.jc.max - this.Da.ya.tb) / a;
            return 0.1 > a ? {
                direction: 1 * b,
                dr: a / 0.1
            } : l
        };
        Y.Lm = function() {
            if (this.vj) {
                var a = n;
                this.Da.ib == ci && this.xr() && (a = j);
                a && !this.ze ? (this.ze = new Ou(this.Mh), eu(this.ze, Kp, Z(this.Kz, this)), this.ze[Q]()) : !a && this.ze && (Dr(this.ze), this.ze = l)
            }
        };
        Y.Kz = function() {
            if (this.ze) {
                var a = this.xr(),
                    b = this.Mh / (1E3 + 59E3 * a.dr),
                    c = this.Vb.Lc(this.Hj),
                    d = this.Vb.Lc(this.Gj),
                    e = (d - c) * b,
                    b = this.Sd.domainAxis.viewWindow,
                    f = b.max,
                    g = this.Vb.Lc(b.min),
                    f = this.Vb.Lc(f);
                0 > a[bb] ? (c = s.max(g - e, c), a = f - (g - c)) : (a = s.min(f + e, d), c = g + (a - f));
                g = this.Vb.Mg(c);
                a = this.Vb.Mg(a);
                b.min = g;
                b.max = a;
                google[Hc][mb].addListener(this.oa, On, Z(this.Vq, this, l));
                this.oa[Vc](this.Oc, this.Sd);
                this.Km(j)
            }
        };
        Y.dv = function(a, b) {
            a.we && this.Da.ib != l && (this.Al || this.Ls(b), Na(b[Pc][O], Mm))
        };
        Y.cv = function(a, b) {
            a.we && this.Da.ib != l && this.Ls(b)
        };
        Y.Ls = function(a) {
            var b = this.Da;
            if (!b.ya || b.ya.ub == l || b.ya.tb == l) b.ya = {
                ub: this.Tb.jc.min,
                tb: this.Tb.jc.max
            };
            a = Ot(a);
            a = this.jx((this.Ya ? a.y : a.x) - b.Ej);
            b.Ej += a;
            b.ib != tm && (b.ya.ub += a);
            b.ib != zm && (b.ya.tb += a);
            this.Lm();
            this.Rh.Ea(this.Mh);
            this.Qh.Ea(this.Mh)
        };
        Y.jx = function(a) {
            var b = this.Da.ya,
                c = this.Tb.jc,
                d, e;
            switch (this.Da.ib) {
                case ci:
                    d = c.min - b.ub;
                    e = c.max - b.tb;
                    break;
                case zm:
                    d = c.min - b.ub;
                    e = b.tb - this.Fj - b.ub;
                    break;
                case tm:
                    d = b.ub + this.Fj - b.tb, e = c.max - b.tb
            }
            return is(a, d, e)
        };
        Y.Qp = function(a, b, c) {
            if (a.we && c.mz()) {
                var a = Ot(c),
                    d = this.Da;
                d.Ej = this.Ya ? a.y : a.x;
                d.ib = b.ib;
                this.Lm();
                c[vb]()
            }
        };
        Y.Tp = function(a) {
            if (a.we && (a = this.Da, a.ib !== l)) {
                if (this.cm) {
                    var b = this.qm,
                        c = a.ya.tb,
                        d = tv(b, a.ya.ub),
                        b = tv(b, c);
                    this.Om(d, b, a.ib)
                } else if (this.bm) {
                    var e = new mv(a.ya.ub, a.ya.tb),
                        d = e.end - e[Q],
                        c = this.Tb.jc,
                        b = c.max - c.min;
                    b > d || ov(b, d, 1E-5);
                    b = this.qm;
                    b = this.Uw(e, b);
                    Va(b, s.max(b[Q], c.min));
                    b.end = b[Q] + d;
                    b.end = s.min(b.end, c.max);
                    Va(b, b.end - d);
                    this.Om(b[Q], b.end, a.ib)
                } else this.vj && a.ib != ci && (b = this.Sd.domainAxis.viewWindow, d = this.getRange(), this.gr(b, d), google[Hc][mb].addListener(this.oa, On, Z(this.Vq, this, {
                        range: d
                    })),
                    this.oa[Vc](this.Oc, this.Sd));
                this.Km(n);
                a.ib = l;
                this.Lm()
            }
        };
        Y.Uw = function(a, b) {
            var c = Z(nv, l, a),
                d = Vr(b, c),
                e = Xr(b, c);
            if (d === l || e === l) d = tv(b, a[Q]), c = tv(b, a.end), e = d = c = s.abs(a[Q] - d) <= s.abs(a.end - c) ? d : c;
            c = a.end - a[Q];
            d = ms(d, e) - c / 2;
            e = d + c;
            ov(e - d, c, 1E-5);
            return new mv(d, e)
        };
        Y.gr = function(a, b) {
            var c = a.max,
                d = this.Vb.Lc(a.min),
                c = this.Vb.Lc(c),
                e = c - d,
                f = b.end,
                g = this.Vb.Lc(b[Q]),
                i = this.Vb.Lc(f),
                f = i - g,
                k = 0.1 * e,
                m = 0.6 * e;
            f >= k && f <= m || (g = (g + i) / 2, e /= (f < k ? 0.9 * m : 1.1 * k) / f, e = new mv(g - e / 2, g + e / 2), f < k || (d = this.Vb.Lc(this.Hj), c = this.Vb.Lc(this.Gj)), this.Rs(e, new mv(d, c)), d = this.Vb.Mg(e[Q]), c = this.Vb.Mg(e.end), a.min = d, a.max = c)
        };
        Y.Rs = function(a, b) {
            a[Q] < b[Q] && (a.end += b[Q] - a[Q], Va(a, b[Q]));
            a.end > b.end && (Va(a, a[Q] - (a.end - b.end)), a.end = b.end);
            a[Q] < b[Q] && Va(a, b[Q])
        };
        Y.Jg = function(a) {
            return s[D](a) + 0.5
        };
        Y.Kh = function(a, b, c) {
            a.we && !this.Da.ib && Na(c[Pc][O], b.Ih ? b[I] == oo ? Mm : this.Ya ? io : $i : Gj)
        };
        Y.Km = function(a) {
            var b = this.Da.ib,
                c = this.getRange();
            if (b != l && c != l) {
                var d = this.Za.Tc;
                google[Hc][mb][cb](this, Nn, {
                    start: c[Q],
                    end: c.end,
                    startChanged: b == (1 == d ? TA.ts : TA.ss) || b == TA.qk,
                    endChanged: b == (1 == d ? TA.ss : TA.ts) || b == TA.qk,
                    inProgress: a
                })
            }
        };
        Y.xs = function(a) {
            a != l && a.pi()
        };
        Y.clearChart = function() {
            google[Hc][mb].removeAllListeners(this.oa);
            this.xs(this.Rh);
            this.Rh = l;
            this.xs(this.Qh);
            this.Qh = l;
            this.dc.we = n;
            Dr(this.Ib);
            this.Ib = l;
            this.oa[Gc]();
            this.oa = l;
            ku(this)
        };
        ba("google.visualization.CoreChart", CA);
        ha(CA[M], Pj, CA[M][Vc]);
        ha(CA[M], yk, CA[M][vc]);
        ha(CA[M], Eo, CA[M][Tb]);
        ha(CA[M], "dump", CA[M].NB);
        ha(CA[M], "clearChart", CA[M][Gc]);
        ha(CA[M], "getChartLayoutInterface", CA[M].getChartLayoutInterface);
        ha(CA[M], "getContainer", CA[M][id]);
        ba("google.visualization.AreaChart", HA);
        ha(HA[M], Pj, HA[M][Vc]);
        ha(HA[M], yk, HA[M][vc]);
        ha(HA[M], Eo, HA[M][Tb]);
        ba("google.visualization.BarChart", NA);
        ha(NA[M], Pj, NA[M][Vc]);
        ha(NA[M], yk, NA[M][vc]);
        ha(NA[M], Eo, NA[M][Tb]);
        ba("google.visualization.BubbleChart", MA);
        ha(MA[M], Pj, MA[M][Vc]);
        ha(MA[M], yk, MA[M][vc]);
        ha(MA[M], Eo, MA[M][Tb]);
        ba("google.visualization.CandlestickChart", OA);
        ha(OA[M], Pj, OA[M][Vc]);
        ha(OA[M], yk, OA[M][vc]);
        ha(OA[M], Eo, OA[M][Tb]);
        ba("google.visualization.ColumnChart", PA);
        ha(PA[M], Pj, PA[M][Vc]);
        ha(PA[M], yk, PA[M][vc]);
        ha(PA[M], Eo, PA[M][Tb]);
        ba("google.visualization.ComboChart", QA);
        ha(QA[M], Pj, QA[M][Vc]);
        ha(QA[M], yk, QA[M][vc]);
        ha(QA[M], Eo, QA[M][Tb]);
        ba("google.visualization.LineChart", KA);
        ha(KA[M], Pj, KA[M][Vc]);
        ha(KA[M], yk, KA[M][vc]);
        ha(KA[M], Eo, KA[M][Tb]);
        ba("google.visualization.PieChart", RA);
        ha(RA[M], Pj, RA[M][Vc]);
        ha(RA[M], yk, RA[M][vc]);
        ha(RA[M], Eo, RA[M][Tb]);
        ba("google.visualization.ScatterChart", LA);
        ha(LA[M], Pj, LA[M][Vc]);
        ha(LA[M], yk, LA[M][vc]);
        ha(LA[M], Eo, LA[M][Tb]);
        ba("google.visualization.SparklineChart", JA);
        ha(JA[M], Pj, JA[M][Vc]);
        ha(JA[M], yk, JA[M][vc]);
        ha(JA[M], Eo, JA[M][Tb]);
        ba("google.visualization.SteppedAreaChart", IA);
        ha(IA[M], Pj, IA[M][Vc]);
        ha(IA[M], yk, IA[M][vc]);
        ha(IA[M], Eo, IA[M][Tb]);
        ba("google.visualization.RangeSelector", SA);
        ha(SA[M], Pj, SA[M][Vc]);
        ha(SA[M], "getRange", SA[M].getRange);
        ha(SA[M], "setRange", SA[M].setRange);
    })();
    google.loader.loaded({
        "module": "visualization",
        "version": "1.0",
        "components": ["corechart", "default", "format"]
    });
    google.loader.eval.visualization = function() {
        eval(arguments[0]);
    };
    if (google.loader.eval.scripts && google.loader.eval.scripts['visualization']) {
        (function() {
            var scripts = google.loader.eval.scripts['visualization'];
            for (var i = 0; i < scripts.length; i++) {
                google.loader.eval.visualization(scripts[i]);
            }
        })();
        google.loader.eval.scripts['visualization'] = null;
    }
})();