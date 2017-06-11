! function (e) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var r;
    "undefined" != typeof window ? r = window : "undefined" != typeof global ? r = global : "undefined" != typeof self && (r = self), r.sweep = e()
  }
}(function () {
  var e;
  return function r(e, n, t) {
    function a(o, u) {
      if (!n[o]) {
        if (!e[o]) {
          var l = "function" == typeof require && require;
          if (!u && l) return l(o, !0);
          if (f) return f(o, !0);
          var i = new Error("Cannot find module '" + o + "'");
          throw i.code = "MODULE_NOT_FOUND", i
        }
        var s = n[o] = {
          exports: {}
        };
        e[o][0].call(s.exports, function (r) {
          var n = e[o][1][r];
          return a(n ? n : r)
        }, s, s.exports, r, e, n, t)
      }
      return n[o].exports
    }
    for (var f = "function" == typeof require && require, o = 0; o < t.length; o++) a(t[o]);
    return a
  }({
    1: [function (e, r) {
      var n = e("../bower_components/husl/husl.js"),
        t = e("./convert.js"),
        a = function () {
          function e() {
            f.forEach(function (e) {
              ++e.frame
            });
            var r = [],
              t = [];
            for (f.forEach(function (e) {
                var t, a = e.target,
                  f = e.properties,
                  o = e.from,
                  u = e.space,
                  l = e.frame,
                  i = e.deltas,
                  s = new Array(4);
                s[3] = o.a + i[3] * l, "RGB" === u ? (s[0] = Math.floor(o.r + i[0] * l), s[1] = Math.floor(o.g + i[1] * l), s[2] = Math.floor(o.b + i[2] * l), t = "rgba(" + [s] + ")") : (s[0] = (Math.floor(o.h + i[0] * l) + 360) % 360, s[1] = Math.floor(100 * (o.s + i[1] * l)), s[2] = Math.floor(100 * (o.l + i[2] * l)), t = "HSL" === u ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] + ")" : "rgba(" + n.toRGB(s[0], s[1], s[2]).map(function (e) {
                  return Math.floor(255 * e)
                }) + "," + s[3] + ")"), r.push({
                  target: a,
                  properties: f,
                  composed: t
                })
              }), r.forEach(function (e) {
                e.properties.forEach(function (r) {
                  e.target.style[r] = e.composed
                })
              }), t = f.map(function (e) {
                return e.frame === e.end ? e.pause() : !1
              }).filter(function (e) {
                return "function" == typeof e
              }), f.length && requestAnimationFrame(e); t.length;) t.pop()()
          }

          function r() {
            -1 === f.indexOf(this) && 1 === f.push(this) && requestAnimationFrame(e)
          }

          function a() {
            return (f.splice(f.indexOf(this), 1)[0] || {}).callback
          }
          var f = [];
          return function (e, n, f, o, u) {
            var l, i, s, c, h, d = [];
            if ("string" == typeof n && (n = [n]), !e instanceof Element) throw "The first argument to sweep() must be a DOM element";
            if (n.some(function (r) {
                return "string" != typeof e.style[r]
              })) throw "The second argument to sweep() must be either a string or an array of strings";
            if ("string" != typeof f) throw "The third argument to sweep() must be a string";
            if ("string" != typeof o) throw "The fourth argument to sweep() must be a string";
            if (u) {
              if ("object" != typeof u) throw "The fifth argument to sweep() must be an object";
              i = u.callback, s = u.direction, c = u.duration, h = u.space
            } else u = {};
            return ("number" != typeof c || 0 > c) && (c = 800), "string" == typeof h && (h = h.toUpperCase(), "A" === h.slice(-1) && (h = h.slice(0, -1))), l = Math.ceil(60 * c / 1e3), "RGB" === h ? (f = t.toRgba(f), o = t.toRgba(o), d = [(o.r - f.r) / l, (o.g - f.g) / l, (o.b - f.b) / l, (o.a - f.a) / l]) : ("HUSL" !== h && (h = u.space = "HSL"), f = t.toHsla(f), o = t.toHsla(o), d = [0, (o.s - f.s) / l, (o.l - f.l) / l, (o.a - f.a) / l], (o.s * f.s * o.l * f.l || 100 !== o.l || 100 !== f.l) && (d[0] = (o.h - f.h + 360) % 360, (1 !== s && d[0] > 180 || -1 === s) && (d[0] -= 360), d[0] /= l)), u.frame = 0, u.target = e, u.properties = n, u.from = f, u.end = l, u.deltas = d, u.pause = a, u.resume = r, u.resume(), u
          }
        }();
      r.exports = a
    }, {
      "../bower_components/husl/husl.js": 2,
      "./convert.js": 3
    }],
    2: [function (r, n) {
      (function () {
        var r, t, a, f, o, u, l, i, s, c, h, d, g, p, b, m, y, v, x, w, M, k, F, q;
        d = {
          R: [3.240969941904521, -1.537383177570093, -.498610760293],
          G: [-.96924363628087, 1.87596750150772, .041555057407175],
          B: [.055630079696993, -.20397695888897, 1.056971514242878]
        }, g = {
          X: [.41239079926595, .35758433938387, .18048078840183],
          Y: [.21263900587151, .71516867876775, .072192315360733],
          Z: [.019330818715591, .11919477979462, .95053215224966]
        }, v = .95045592705167, x = 1, w = 1.089057750759878, m = .19783000664283, y = .46831999493879, c = 903.2962962, u = .0088564516, i = function (e) {
          var r, n, t, a, f, o, l, i, s, h, g, p, b, m, y, v, x, w;
          for (l = Math.pow(e + 16, 3) / 1560896, i = l > u ? l : e / c, o = [], v = ["R", "G", "B"], p = 0, m = v.length; m > p; p++)
            for (n = v[p], x = d[n], t = x[0], a = x[1], f = x[2], w = [0, 1], b = 0, y = w.length; y > b; b++) s = w[b], h = (284517 * t - 94839 * f) * i, g = (838422 * f + 769860 * a + 731718 * t) * e * i - 769860 * s * e, r = (632260 * f - 126452 * a) * i + 126452 * s, o.push([h / r, g / r]);
          return o
        }, s = function (e, r) {
          return (e[1] - r[1]) / (r[0] - e[0])
        }, f = function (e) {
          return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2))
        }, h = function (e, r) {
          var n, t, a;
          return a = r[0], n = r[1], t = n / (Math.sin(e) - a * Math.cos(e)), 0 > t ? null : t
        }, b = function (e) {
          var r, n, t, a, o, u, l, c;
          for (n = [], l = i(e), o = 0, u = l.length; u > o; o++) c = l[o], t = c[0], r = c[1], a = s([t, r], [-1 / t, 0]), n.push(f([a, r + a * t]));
          return Math.min.apply(Math, n)
        }, p = function (e, r) {
          var n, t, a, f, o, u, l;
          for (n = r / 360 * Math.PI * 2, a = [], l = i(e), o = 0, u = l.length; u > o; o++) f = l[o], t = h(n, f), null !== t && a.push(t);
          return Math.min.apply(Math, a)
        }, o = function (e, r) {
          var n, t, a, f;
          for (t = 0, n = a = 0, f = e.length - 1; f >= 0 ? f >= a : a >= f; n = f >= 0 ? ++a : --a) t += e[n] * r[n];
          return t
        }, F = function (e, r) {
          var n;
          return n = Math.pow(10, r), Math.round(e * n) / n
        }, l = function (e) {
          return .0031308 >= e ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055
        }, q = function (e) {
          var r;
          return r = .055, e > .04045 ? Math.pow((e + r) / (1 + r), 2.4) : e / 12.92
        }, M = function (e) {
          var r, n, t, a, f, o, u;
          for (e = function () {
              var r, t, a;
              for (a = [], r = 0, t = e.length; t > r; r++) n = e[r], a.push(F(n, 3));
              return a
            }(), t = 0, f = e.length; f > t; t++) {
            if (r = e[t], -1e-4 > r || r > 1.0001) throw new Error("Illegal rgb value: " + r);
            0 > r && (r = 0), r > 1 && (r = 1)
          }
          for (u = [], a = 0, o = e.length; o > a; a++) r = e[a], u.push(Math.round(255 * r));
          return u
        }, a = {
          xyz: {},
          luv: {},
          lch: {},
          husl: {},
          huslp: {},
          rgb: {},
          hex: {}
        }, a.xyz.rgb = function (e) {
          var r, n, t;
          return t = l(o(d.R, e)), n = l(o(d.G, e)), r = l(o(d.B, e)), [t, n, r]
        }, a.rgb.xyz = function (e) {
          var r, n, t, a, f, u, l;
          return t = e[0], n = e[1], r = e[2], l = [q(t), q(n), q(r)], a = o(g.X, l), f = o(g.Y, l), u = o(g.Z, l), [a, f, u]
        }, t = function (e) {
          return u >= e ? e / x * c : 116 * Math.pow(e / x, 1 / 3) - 16
        }, r = function (e) {
          return 8 >= e ? x * e / c : x * Math.pow((e + 16) / 116, 3)
        }, a.xyz.luv = function (e) {
          var r, n, a, f, o, u, l, i;
          return f = e[0], o = e[1], u = e[2], l = 4 * f / (f + 15 * o + 3 * u), i = 9 * o / (f + 15 * o + 3 * u), r = t(o), 0 === r ? [0, 0, 0] : (n = 13 * r * (l - m), a = 13 * r * (i - y), [r, n, a])
        }, a.luv.xyz = function (e) {
          var n, t, a, f, o, u, l, i;
          return n = e[0], t = e[1], a = e[2], 0 === n ? [0, 0, 0] : (l = t / (13 * n) + m, i = a / (13 * n) + y, o = r(n), f = 0 - 9 * o * l / ((l - 4) * i - l * i), u = (9 * o - 15 * i * o - i * f) / (3 * i), [f, o, u])
        }, a.luv.lch = function (e) {
          var r, n, t, a, f, o;
          return a = e[0], f = e[1], o = e[2], r = Math.pow(Math.pow(f, 2) + Math.pow(o, 2), .5), t = Math.atan2(o, f), n = 360 * t / 2 / Math.PI, 0 > n && (n = 360 + n), [a, r, n]
        }, a.lch.luv = function (e) {
          var r, n, t, a, f, o;
          return a = e[0], r = e[1], n = e[2], t = n / 360 * 2 * Math.PI, f = Math.cos(t) * r, o = Math.sin(t) * r, [a, f, o]
        }, a.husl.lch = function (e) {
          var r, n, t, a, f;
          return n = e[0], a = e[1], t = e[2], t > 99.9999999 ? [100, 0, n] : 1e-8 > t ? [0, 0, n] : (f = p(t, n), r = f / 100 * a, [t, r, n])
        }, a.lch.husl = function (e) {
          var r, n, t, a, f;
          return t = e[0], r = e[1], n = e[2], t > 99.9999999 ? [n, 0, 100] : 1e-8 > t ? [n, 0, 0] : (f = p(t, n), a = r / f * 100, [n, a, t])
        }, a.huslp.lch = function (e) {
          var r, n, t, a, f;
          return n = e[0], a = e[1], t = e[2], t > 99.9999999 ? [100, 0, n] : 1e-8 > t ? [0, 0, n] : (f = b(t), r = f / 100 * a, [t, r, n])
        }, a.lch.huslp = function (e) {
          var r, n, t, a, f;
          return t = e[0], r = e[1], n = e[2], t > 99.9999999 ? [n, 0, 100] : 1e-8 > t ? [n, 0, 0] : (f = b(t), a = r / f * 100, [n, a, t])
        }, a.rgb.hex = function (e) {
          var r, n, t, a;
          for (n = "#", e = M(e), t = 0, a = e.length; a > t; t++) r = e[t], r = r.toString(16), 1 === r.length && (r = "0" + r), n += r;
          return n
        }, a.hex.rgb = function (e) {
          var r, n, t, a, f, o, u, l;
          for ("#" === e.charAt(0) && (e = e.substring(1, 7)), a = e.substring(0, 2), n = e.substring(2, 4), r = e.substring(4, 6), u = [a, n, r], l = [], f = 0, o = u.length; o > f; f++) t = u[f], l.push(parseInt(t, 16) / 255);
          return l
        }, a.lch.rgb = function (e) {
          return a.xyz.rgb(a.luv.xyz(a.lch.luv(e)))
        }, a.rgb.lch = function (e) {
          return a.luv.lch(a.xyz.luv(a.rgb.xyz(e)))
        }, a.husl.rgb = function (e) {
          return a.lch.rgb(a.husl.lch(e))
        }, a.rgb.husl = function (e) {
          return a.lch.husl(a.rgb.lch(e))
        }, a.huslp.rgb = function (e) {
          return a.lch.rgb(a.huslp.lch(e))
        }, a.rgb.huslp = function (e) {
          return a.lch.huslp(a.rgb.lch(e))
        }, k = {}, k.fromRGB = function (e, r, n) {
          return a.rgb.husl([e, r, n])
        }, k.fromHex = function (e) {
          return a.rgb.husl(a.hex.rgb(e))
        }, k.toRGB = function (e, r, n) {
          return a.husl.rgb([e, r, n])
        }, k.toHex = function (e, r, n) {
          return a.rgb.hex(a.husl.rgb([e, r, n]))
        }, k.p = {}, k.p.toRGB = function (e, r, n) {
          return a.xyz.rgb(a.luv.xyz(a.lch.luv(a.huslp.lch([e, r, n]))))
        }, k.p.toHex = function (e, r, n) {
          return a.rgb.hex(a.xyz.rgb(a.luv.xyz(a.lch.luv(a.huslp.lch([e, r, n])))))
        }, k.p.fromRGB = function (e, r, n) {
          return a.lch.huslp(a.luv.lch(a.xyz.luv(a.rgb.xyz([e, r, n]))))
        }, k.p.fromHex = function (e) {
          return a.lch.huslp(a.luv.lch(a.xyz.luv(a.rgb.xyz(a.hex.rgb(e)))))
        }, k._conv = a, k._round = F, k._rgbPrepare = M, k._getBounds = i, k._maxChromaForLH = p, k._maxSafeChromaForL = b, "undefined" != typeof n && null !== n || "undefined" != typeof jQuery && null !== jQuery || "undefined" != typeof requirejs && null !== requirejs || (this.HUSL = k), "undefined" != typeof n && null !== n && (n.exports = k), "undefined" != typeof jQuery && null !== jQuery && (jQuery.husl = k), "undefined" != typeof requirejs && null !== requirejs && "undefined" != typeof e && null !== e && e(k)
      }).call(this)
    }, {}],
    3: [function (e, r) {
      function n(e) {
        var r, n, t = e.r / 255,
          a = e.g / 255,
          f = e.b / 255,
          o = Math.max(t, a, f),
          u = Math.min(t, a, f),
          l = (o + u) / 2;
        if (o == u) r = n = 0;
        else {
          var i = o - u;
          switch (n = l > .5 ? i / (2 - o - u) : i / (o + u), o) {
            case t:
              r = (a - f) / i + (f > a ? 6 : 0);
              break;
            case a:
              r = (f - t) / i + 2;
              break;
            case f:
              r = (t - a) / i + 4
          }
          r /= 6
        }
        return {
          h: 360 * r,
          s: n,
          l: l,
          a: e.a
        }
      }

      function t(e) {
        function r(e, r, n) {
          return 0 > n && (n += 1), n > 1 && (n -= 1), 1 / 6 > n ? e + 6 * (r - e) * n : .5 > n ? r : 2 / 3 > n ? e + (r - e) * (2 / 3 - n) * 6 : e
        }
        var n, t, a, f, o, u = e.h,
          l = e.s,
          i = e.l;
        return 0 === l ? n = t = a = i : (f = .5 > i ? i * (1 + l) : i + l - i * l, o = 2 * i - f, n = r(o, f, u + 1 / 3), t = r(o, f, u), a = r(o, f, u - 1 / 3)), {
          r: Math.round(255 * n),
          g: Math.round(255 * t),
          b: Math.round(255 * a),
          a: e.a
        }
      }

      function a(e, r) {
        var a, f = /^[\s,#]+/,
          o = /\s+$/,
          i = !0;
        if (e = e.replace(f, "").replace(o, "").toLowerCase(), "transparent" === e) return r ? {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        } : {
          h: 0,
          s: 0,
          l: 0,
          a: 0
        };
        if ((a = u.rgba.exec(e)) || (a = u.rgb.exec(e))) e = {
          r: parseInt(a[1]),
          g: parseInt(a[2]),
          b: parseInt(a[3]),
          a: parseFloat(a[4]) || 1
        };
        else if ((a = u.hsla.exec(e)) || (a = u.hsl.exec(e))) i = !1, e = {
          h: parseFloat(a[1]),
          s: parseFloat(a[2]),
          l: parseFloat(a[3]),
          a: parseFloat(a[4]) || 1
        };
        else if (a = u.hex8.exec(e)) e = {
          r: parseInt(a[2], 16),
          g: parseInt(a[3], 16),
          b: parseInt(a[4], 16),
          a: parseFloat(a[1], 16) / 255
        };
        else if ((a = u.hex6.exec(e)) || (a = u.hex6.exec(l[e]))) e = {
          r: parseInt(a[1], 16),
          g: parseInt(a[2], 16),
          b: parseInt(a[3], 16),
          a: 1
        };
        else {
          if (!(a = u.hex3.exec(e)) && !(a = u.hex3.exec(l[e]))) return !1;
          e = {
            r: parseInt(a[1] + "" + a[1], 16),
            g: parseInt(a[2] + "" + a[2], 16),
            b: parseInt(a[3] + "" + a[3], 16),
            a: 1
          }
        }
        return r === i ? e : r ? t(e) : n(e)
      }

      function f(e) {
        return a(e, !0)
      }

      function o(e) {
        return a(e, !1)
      }
      var u = function () {
          var e = "[-\\+]?\\d+%?",
            r = "[-\\+]?\\d*\\.\\d+%?",
            n = "(?:" + r + ")|(?:" + e + ")",
            t = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
            a = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?";
          return {
            rgb: new RegExp("rgb" + t),
            rgba: new RegExp("rgba" + a),
            hsl: new RegExp("hsl" + t),
            hsla: new RegExp("hsla" + a),
            hsv: new RegExp("hsv" + t),
            hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
          }
        }(),
        l = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "0ff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000",
          blanchedalmond: "ffebcd",
          blue: "00f",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          burntsienna: "ea7e5d",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "0ff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkgrey: "a9a9a9",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkslategrey: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dimgrey: "696969",
          dodgerblue: "1e90ff",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "f0f",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          grey: "808080",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgray: "d3d3d3",
          lightgreen: "90ee90",
          lightgrey: "d3d3d3",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslategray: "789",
          lightslategrey: "789",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "0f0",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "f0f",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370db",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "db7093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          red: "f00",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          slategrey: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          wheat: "f5deb3",
          white: "fff",
          whitesmoke: "f5f5f5",
          yellow: "ff0",
          yellowgreen: "9acd32"
        };
      r.exports = {
        toHsla: o,
        toRgba: f
      }
    }, {}]
  }, {}, [1])(1)
});
