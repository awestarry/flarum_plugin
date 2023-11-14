/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/sweetalert/dist/sweetalert.min.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert/dist/sweetalert.min.js ***!
  \********************************************************/
/***/ (function(module) {

!function (t, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  return function (t) {
    function e(o) {
      if (n[o]) return n[o].exports;
      var r = n[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
    }
    var n = {};
    return e.m = t, e.c = n, e.d = function (t, n, o) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: o
      });
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      return e.d(n, "a", n), n;
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "", e(e.s = 8);
  }([function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = "swal-button";
    e.CLASS_NAMES = {
      MODAL: "swal-modal",
      OVERLAY: "swal-overlay",
      SHOW_MODAL: "swal-overlay--show-modal",
      MODAL_TITLE: "swal-title",
      MODAL_TEXT: "swal-text",
      ICON: "swal-icon",
      ICON_CUSTOM: "swal-icon--custom",
      CONTENT: "swal-content",
      FOOTER: "swal-footer",
      BUTTON_CONTAINER: "swal-button-container",
      BUTTON: o,
      CONFIRM_BUTTON: o + "--confirm",
      CANCEL_BUTTON: o + "--cancel",
      DANGER_BUTTON: o + "--danger",
      BUTTON_LOADING: o + "--loading",
      BUTTON_LOADER: o + "__loader"
    }, e["default"] = e.CLASS_NAMES;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.getNode = function (t) {
      var e = "." + t;
      return document.querySelector(e);
    }, e.stringToNode = function (t) {
      var e = document.createElement("div");
      return e.innerHTML = t.trim(), e.firstChild;
    }, e.insertAfter = function (t, e) {
      var n = e.nextSibling;
      e.parentNode.insertBefore(t, n);
    }, e.removeNode = function (t) {
      t.parentElement.removeChild(t);
    }, e.throwErr = function (t) {
      throw t = t.replace(/ +(?= )/g, ""), "SweetAlert: " + (t = t.trim());
    }, e.isPlainObject = function (t) {
      if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;
      var e = Object.getPrototypeOf(t);
      return null === e || e === Object.prototype;
    }, e.ordinalSuffixOf = function (t) {
      var e = t % 10,
        n = t % 100;
      return 1 === e && 11 !== n ? t + "st" : 2 === e && 12 !== n ? t + "nd" : 3 === e && 13 !== n ? t + "rd" : t + "th";
    };
  }, function (t, e, n) {
    "use strict";

    function o(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), o(n(25));
    var r = n(26);
    e.overlayMarkup = r["default"], o(n(27)), o(n(28)), o(n(29));
    var i = n(0),
      a = i["default"].MODAL_TITLE,
      s = i["default"].MODAL_TEXT,
      c = i["default"].ICON,
      l = i["default"].FOOTER;
    e.iconMarkup = '\n  <div class="' + c + '"></div>', e.titleMarkup = '\n  <div class="' + a + '"></div>\n', e.textMarkup = '\n  <div class="' + s + '"></div>', e.footerMarkup = '\n  <div class="' + l + '"></div>\n';
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(1);
    e.CONFIRM_KEY = "confirm", e.CANCEL_KEY = "cancel";
    var r = {
        visible: !0,
        text: null,
        value: null,
        className: "",
        closeModal: !0
      },
      i = Object.assign({}, r, {
        visible: !1,
        text: "Cancel",
        value: null
      }),
      a = Object.assign({}, r, {
        text: "OK",
        value: !0
      });
    e.defaultButtonList = {
      cancel: i,
      confirm: a
    };
    var s = function s(t) {
        switch (t) {
          case e.CONFIRM_KEY:
            return a;
          case e.CANCEL_KEY:
            return i;
          default:
            var n = t.charAt(0).toUpperCase() + t.slice(1);
            return Object.assign({}, r, {
              text: n,
              value: t
            });
        }
      },
      c = function c(t, e) {
        var n = s(t);
        return !0 === e ? Object.assign({}, n, {
          visible: !0
        }) : "string" == typeof e ? Object.assign({}, n, {
          visible: !0,
          text: e
        }) : o.isPlainObject(e) ? Object.assign({
          visible: !0
        }, n, e) : Object.assign({}, n, {
          visible: !1
        });
      },
      l = function l(t) {
        for (var e = {}, n = 0, o = Object.keys(t); n < o.length; n++) {
          var r = o[n],
            a = t[r],
            s = c(r, a);
          e[r] = s;
        }
        return e.cancel || (e.cancel = i), e;
      },
      u = function u(t) {
        var n = {};
        switch (t.length) {
          case 1:
            n[e.CANCEL_KEY] = Object.assign({}, i, {
              visible: !1
            });
            break;
          case 2:
            n[e.CANCEL_KEY] = c(e.CANCEL_KEY, t[0]), n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t[1]);
            break;
          default:
            o.throwErr("Invalid number of 'buttons' in array (" + t.length + ").\n      If you want more than 2 buttons, you need to use an object!");
        }
        return n;
      };
    e.getButtonListOpts = function (t) {
      var n = e.defaultButtonList;
      return "string" == typeof t ? n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t) : Array.isArray(t) ? n = u(t) : o.isPlainObject(t) ? n = l(t) : !0 === t ? n = u([!0, !0]) : !1 === t ? n = u([!1, !1]) : void 0 === t && (n = e.defaultButtonList), n;
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(1),
      r = n(2),
      i = n(0),
      a = i["default"].MODAL,
      s = i["default"].OVERLAY,
      c = n(30),
      l = n(31),
      u = n(32),
      f = n(33);
    e.injectElIntoModal = function (t) {
      var e = o.getNode(a),
        n = o.stringToNode(t);
      return e.appendChild(n), n;
    };
    var d = function d(t) {
        t.className = a, t.textContent = "";
      },
      p = function p(t, e) {
        d(t);
        var n = e.className;
        n && t.classList.add(n);
      };
    e.initModalContent = function (t) {
      var e = o.getNode(a);
      p(e, t), c["default"](t.icon), l.initTitle(t.title), l.initText(t.text), f["default"](t.content), u["default"](t.buttons, t.dangerMode);
    };
    var m = function m() {
      var t = o.getNode(s),
        e = o.stringToNode(r.modalMarkup);
      t.appendChild(e);
    };
    e["default"] = m;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(3),
      r = {
        isOpen: !1,
        promise: null,
        actions: {},
        timer: null
      },
      i = Object.assign({}, r);
    e.resetState = function () {
      i = Object.assign({}, r);
    }, e.setActionValue = function (t) {
      if ("string" == typeof t) return a(o.CONFIRM_KEY, t);
      for (var e in t) a(e, t[e]);
    };
    var a = function a(t, e) {
      i.actions[t] || (i.actions[t] = {}), Object.assign(i.actions[t], {
        value: e
      });
    };
    e.setActionOptionsFor = function (t, e) {
      var n = (void 0 === e ? {} : e).closeModal,
        o = void 0 === n || n;
      Object.assign(i.actions[t], {
        closeModal: o
      });
    }, e["default"] = i;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(1),
      r = n(3),
      i = n(0),
      a = i["default"].OVERLAY,
      s = i["default"].SHOW_MODAL,
      c = i["default"].BUTTON,
      l = i["default"].BUTTON_LOADING,
      u = n(5);
    e.openModal = function () {
      o.getNode(a).classList.add(s), u["default"].isOpen = !0;
    };
    var f = function f() {
      o.getNode(a).classList.remove(s), u["default"].isOpen = !1;
    };
    e.onAction = function (t) {
      void 0 === t && (t = r.CANCEL_KEY);
      var e = u["default"].actions[t],
        n = e.value;
      if (!1 === e.closeModal) {
        var i = c + "--" + t;
        o.getNode(i).classList.add(l);
      } else f();
      u["default"].promise.resolve(n);
    }, e.getState = function () {
      var t = Object.assign({}, u["default"]);
      return delete t.promise, delete t.timer, t;
    }, e.stopLoading = function () {
      for (var t = document.querySelectorAll("." + c), e = 0; e < t.length; e++) {
        t[e].classList.remove(l);
      }
    };
  }, function (t, e) {
    var n;
    n = function () {
      return this;
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  }, function (t, e, n) {
    (function (e) {
      t.exports = e.sweetAlert = n(9);
    }).call(e, n(7));
  }, function (t, e, n) {
    (function (e) {
      t.exports = e.swal = n(10);
    }).call(e, n(7));
  }, function (t, e, n) {
    "undefined" != typeof window && n(11), n(16);
    var o = n(23)["default"];
    t.exports = o;
  }, function (t, e, n) {
    var o = n(12);
    "string" == typeof o && (o = [[t.i, o, ""]]);
    var r = {
      insertAt: "top"
    };
    r.transform = void 0;
    n(14)(o, r);
    o.locals && (t.exports = o.locals);
  }, function (t, e, n) {
    e = t.exports = n(13)(void 0), e.push([t.i, '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}', ""]);
  }, function (t, e) {
    function n(t, e) {
      var n = t[1] || "",
        r = t[3];
      if (!r) return n;
      if (e && "function" == typeof btoa) {
        var i = o(r);
        return [n].concat(r.sources.map(function (t) {
          return "/*# sourceURL=" + r.sourceRoot + t + " */";
        })).concat([i]).join("\n");
      }
      return [n].join("\n");
    }
    function o(t) {
      return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */";
    }
    t.exports = function (t) {
      var e = [];
      return e.toString = function () {
        return this.map(function (e) {
          var o = n(e, t);
          return e[2] ? "@media " + e[2] + "{" + o + "}" : o;
        }).join("");
      }, e.i = function (t, n) {
        "string" == typeof t && (t = [[null, t, ""]]);
        for (var o = {}, r = 0; r < this.length; r++) {
          var i = this[r][0];
          "number" == typeof i && (o[i] = !0);
        }
        for (r = 0; r < t.length; r++) {
          var a = t[r];
          "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
        }
      }, e;
    };
  }, function (t, e, n) {
    function o(t, e) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n],
          r = m[o.id];
        if (r) {
          r.refs++;
          for (var i = 0; i < r.parts.length; i++) r.parts[i](o.parts[i]);
          for (; i < o.parts.length; i++) r.parts.push(u(o.parts[i], e));
        } else {
          for (var a = [], i = 0; i < o.parts.length; i++) a.push(u(o.parts[i], e));
          m[o.id] = {
            id: o.id,
            refs: 1,
            parts: a
          };
        }
      }
    }
    function r(t, e) {
      for (var n = [], o = {}, r = 0; r < t.length; r++) {
        var i = t[r],
          a = e.base ? i[0] + e.base : i[0],
          s = i[1],
          c = i[2],
          l = i[3],
          u = {
            css: s,
            media: c,
            sourceMap: l
          };
        o[a] ? o[a].parts.push(u) : n.push(o[a] = {
          id: a,
          parts: [u]
        });
      }
      return n;
    }
    function i(t, e) {
      var n = v(t.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var o = w[w.length - 1];
      if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), w.push(e);else {
        if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        n.appendChild(e);
      }
    }
    function a(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = w.indexOf(t);
      e >= 0 && w.splice(e, 1);
    }
    function s(t) {
      var e = document.createElement("style");
      return t.attrs.type = "text/css", l(e, t.attrs), i(t, e), e;
    }
    function c(t) {
      var e = document.createElement("link");
      return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", l(e, t.attrs), i(t, e), e;
    }
    function l(t, e) {
      Object.keys(e).forEach(function (n) {
        t.setAttribute(n, e[n]);
      });
    }
    function u(t, e) {
      var n, o, r, i;
      if (e.transform && t.css) {
        if (!(i = e.transform(t.css))) return function () {};
        t.css = i;
      }
      if (e.singleton) {
        var l = h++;
        n = g || (g = s(e)), o = f.bind(null, n, l, !1), r = f.bind(null, n, l, !0);
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e), o = p.bind(null, n, e), r = function r() {
        a(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = s(e), o = d.bind(null, n), r = function r() {
        a(n);
      });
      return o(t), function (e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
          o(t = e);
        } else r();
      };
    }
    function f(t, e, n, o) {
      var r = n ? "" : o.css;
      if (t.styleSheet) t.styleSheet.cssText = x(e, r);else {
        var i = document.createTextNode(r),
          a = t.childNodes;
        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
      }
    }
    function d(t, e) {
      var n = e.css,
        o = e.media;
      if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;else {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n));
      }
    }
    function p(t, e, n) {
      var o = n.css,
        r = n.sourceMap,
        i = void 0 === e.convertToAbsoluteUrls && r;
      (e.convertToAbsoluteUrls || i) && (o = y(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
      var a = new Blob([o], {
          type: "text/css"
        }),
        s = t.href;
      t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
    }
    var m = {},
      b = function (t) {
        var e;
        return function () {
          return void 0 === e && (e = t.apply(this, arguments)), e;
        };
      }(function () {
        return window && document && document.all && !window.atob;
      }),
      v = function (t) {
        var e = {};
        return function (n) {
          return void 0 === e[n] && (e[n] = t.call(this, n)), e[n];
        };
      }(function (t) {
        return document.querySelector(t);
      }),
      g = null,
      h = 0,
      w = [],
      y = n(15);
    t.exports = function (t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
      e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || (e.singleton = b()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
      var n = r(t, e);
      return o(n, e), function (t) {
        for (var i = [], a = 0; a < n.length; a++) {
          var s = n[a],
            c = m[s.id];
          c.refs--, i.push(c);
        }
        if (t) {
          o(r(t, e), e);
        }
        for (var a = 0; a < i.length; a++) {
          var c = i[a];
          if (0 === c.refs) {
            for (var l = 0; l < c.parts.length; l++) c.parts[l]();
            delete m[c.id];
          }
        }
      };
    };
    var x = function () {
      var t = [];
      return function (e, n) {
        return t[e] = n, t.filter(Boolean).join("\n");
      };
    }();
  }, function (t, e) {
    t.exports = function (t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var n = e.protocol + "//" + e.host,
        o = n + e.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
        var r = e.trim().replace(/^"(.*)"$/, function (t, e) {
          return e;
        }).replace(/^'(.*)'$/, function (t, e) {
          return e;
        });
        if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return t;
        var i;
        return i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")";
      });
    };
  }, function (t, e, n) {
    var o = n(17);
    "undefined" == typeof window || window.Promise || (window.Promise = o), n(21), String.prototype.includes || (String.prototype.includes = function (t, e) {
      "use strict";

      return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e);
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
      value: function value(t, e) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var n = Object(this),
          o = n.length >>> 0;
        if (0 === o) return !1;
        for (var r = 0 | e, i = Math.max(r >= 0 ? r : o - Math.abs(r), 0); i < o;) {
          if (function (t, e) {
            return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e);
          }(n[i], t)) return !0;
          i++;
        }
        return !1;
      }
    }), "undefined" != typeof window && function (t) {
      t.forEach(function (t) {
        t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function value() {
            this.parentNode.removeChild(this);
          }
        });
      });
    }([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
  }, function (t, e, n) {
    (function (e) {
      !function (n) {
        function o() {}
        function r(t, e) {
          return function () {
            t.apply(e, arguments);
          };
        }
        function i(t) {
          if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof t) throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this);
        }
        function a(t, e) {
          for (; 3 === t._state;) t = t._value;
          if (0 === t._state) return void t._deferreds.push(e);
          t._handled = !0, i._immediateFn(function () {
            var n = 1 === t._state ? e.onFulfilled : e.onRejected;
            if (null === n) return void (1 === t._state ? s : c)(e.promise, t._value);
            var o;
            try {
              o = n(t._value);
            } catch (t) {
              return void c(e.promise, t);
            }
            s(e.promise, o);
          });
        }
        function s(t, e) {
          try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
              var n = e.then;
              if (e instanceof i) return t._state = 3, t._value = e, void l(t);
              if ("function" == typeof n) return void f(r(n, e), t);
            }
            t._state = 1, t._value = e, l(t);
          } catch (e) {
            c(t, e);
          }
        }
        function c(t, e) {
          t._state = 2, t._value = e, l(t);
        }
        function l(t) {
          2 === t._state && 0 === t._deferreds.length && i._immediateFn(function () {
            t._handled || i._unhandledRejectionFn(t._value);
          });
          for (var e = 0, n = t._deferreds.length; e < n; e++) a(t, t._deferreds[e]);
          t._deferreds = null;
        }
        function u(t, e, n) {
          this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
        }
        function f(t, e) {
          var n = !1;
          try {
            t(function (t) {
              n || (n = !0, s(e, t));
            }, function (t) {
              n || (n = !0, c(e, t));
            });
          } catch (t) {
            if (n) return;
            n = !0, c(e, t);
          }
        }
        var d = setTimeout;
        i.prototype["catch"] = function (t) {
          return this.then(null, t);
        }, i.prototype.then = function (t, e) {
          var n = new this.constructor(o);
          return a(this, new u(t, e, n)), n;
        }, i.all = function (t) {
          var e = Array.prototype.slice.call(t);
          return new i(function (t, n) {
            function o(i, a) {
              try {
                if (a && ("object" == typeof a || "function" == typeof a)) {
                  var s = a.then;
                  if ("function" == typeof s) return void s.call(a, function (t) {
                    o(i, t);
                  }, n);
                }
                e[i] = a, 0 == --r && t(e);
              } catch (t) {
                n(t);
              }
            }
            if (0 === e.length) return t([]);
            for (var r = e.length, i = 0; i < e.length; i++) o(i, e[i]);
          });
        }, i.resolve = function (t) {
          return t && "object" == typeof t && t.constructor === i ? t : new i(function (e) {
            e(t);
          });
        }, i.reject = function (t) {
          return new i(function (e, n) {
            n(t);
          });
        }, i.race = function (t) {
          return new i(function (e, n) {
            for (var o = 0, r = t.length; o < r; o++) t[o].then(e, n);
          });
        }, i._immediateFn = "function" == typeof e && function (t) {
          e(t);
        } || function (t) {
          d(t, 0);
        }, i._unhandledRejectionFn = function (t) {
          "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
        }, i._setImmediateFn = function (t) {
          i._immediateFn = t;
        }, i._setUnhandledRejectionFn = function (t) {
          i._unhandledRejectionFn = t;
        }, void 0 !== t && t.exports ? t.exports = i : n.Promise || (n.Promise = i);
      }(this);
    }).call(e, n(18).setImmediate);
  }, function (t, e, n) {
    function o(t, e) {
      this._id = t, this._clearFn = e;
    }
    var r = Function.prototype.apply;
    e.setTimeout = function () {
      return new o(r.call(setTimeout, window, arguments), clearTimeout);
    }, e.setInterval = function () {
      return new o(r.call(setInterval, window, arguments), clearInterval);
    }, e.clearTimeout = e.clearInterval = function (t) {
      t && t.close();
    }, o.prototype.unref = o.prototype.ref = function () {}, o.prototype.close = function () {
      this._clearFn.call(window, this._id);
    }, e.enroll = function (t, e) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
    }, e.unenroll = function (t) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
    }, e._unrefActive = e.active = function (t) {
      clearTimeout(t._idleTimeoutId);
      var e = t._idleTimeout;
      e >= 0 && (t._idleTimeoutId = setTimeout(function () {
        t._onTimeout && t._onTimeout();
      }, e));
    }, n(19), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate;
  }, function (t, e, n) {
    (function (t, e) {
      !function (t, n) {
        "use strict";

        function o(t) {
          "function" != typeof t && (t = new Function("" + t));
          for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
          var o = {
            callback: t,
            args: e
          };
          return l[c] = o, s(c), c++;
        }
        function r(t) {
          delete l[t];
        }
        function i(t) {
          var e = t.callback,
            o = t.args;
          switch (o.length) {
            case 0:
              e();
              break;
            case 1:
              e(o[0]);
              break;
            case 2:
              e(o[0], o[1]);
              break;
            case 3:
              e(o[0], o[1], o[2]);
              break;
            default:
              e.apply(n, o);
          }
        }
        function a(t) {
          if (u) setTimeout(a, 0, t);else {
            var e = l[t];
            if (e) {
              u = !0;
              try {
                i(e);
              } finally {
                r(t), u = !1;
              }
            }
          }
        }
        if (!t.setImmediate) {
          var s,
            c = 1,
            l = {},
            u = !1,
            f = t.document,
            d = Object.getPrototypeOf && Object.getPrototypeOf(t);
          d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? function () {
            s = function s(t) {
              e.nextTick(function () {
                a(t);
              });
            };
          }() : function () {
            if (t.postMessage && !t.importScripts) {
              var e = !0,
                n = t.onmessage;
              return t.onmessage = function () {
                e = !1;
              }, t.postMessage("", "*"), t.onmessage = n, e;
            }
          }() ? function () {
            var e = "setImmediate$" + Math.random() + "$",
              n = function n(_n) {
                _n.source === t && "string" == typeof _n.data && 0 === _n.data.indexOf(e) && a(+_n.data.slice(e.length));
              };
            t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), s = function s(n) {
              t.postMessage(e + n, "*");
            };
          }() : t.MessageChannel ? function () {
            var t = new MessageChannel();
            t.port1.onmessage = function (t) {
              a(t.data);
            }, s = function s(e) {
              t.port2.postMessage(e);
            };
          }() : f && "onreadystatechange" in f.createElement("script") ? function () {
            var t = f.documentElement;
            s = function s(e) {
              var n = f.createElement("script");
              n.onreadystatechange = function () {
                a(e), n.onreadystatechange = null, t.removeChild(n), n = null;
              }, t.appendChild(n);
            };
          }() : function () {
            s = function s(t) {
              setTimeout(a, 0, t);
            };
          }(), d.setImmediate = o, d.clearImmediate = r;
        }
      }("undefined" == typeof self ? void 0 === t ? this : t : self);
    }).call(e, n(7), n(20));
  }, function (t, e) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }
    function o() {
      throw new Error("clearTimeout has not been defined");
    }
    function r(t) {
      if (u === setTimeout) return setTimeout(t, 0);
      if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
      try {
        return u(t, 0);
      } catch (e) {
        try {
          return u.call(null, t, 0);
        } catch (e) {
          return u.call(this, t, 0);
        }
      }
    }
    function i(t) {
      if (f === clearTimeout) return clearTimeout(t);
      if ((f === o || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
      try {
        return f(t);
      } catch (e) {
        try {
          return f.call(null, t);
        } catch (e) {
          return f.call(this, t);
        }
      }
    }
    function a() {
      b && p && (b = !1, p.length ? m = p.concat(m) : v = -1, m.length && s());
    }
    function s() {
      if (!b) {
        var t = r(a);
        b = !0;
        for (var e = m.length; e;) {
          for (p = m, m = []; ++v < e;) p && p[v].run();
          v = -1, e = m.length;
        }
        p = null, b = !1, i(t);
      }
    }
    function c(t, e) {
      this.fun = t, this.array = e;
    }
    function l() {}
    var u,
      f,
      d = t.exports = {};
    !function () {
      try {
        u = "function" == typeof setTimeout ? setTimeout : n;
      } catch (t) {
        u = n;
      }
      try {
        f = "function" == typeof clearTimeout ? clearTimeout : o;
      } catch (t) {
        f = o;
      }
    }();
    var p,
      m = [],
      b = !1,
      v = -1;
    d.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      m.push(new c(t, e)), 1 !== m.length || b || r(s);
    }, c.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function (t) {
      return [];
    }, d.binding = function (t) {
      throw new Error("process.binding is not supported");
    }, d.cwd = function () {
      return "/";
    }, d.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }, d.umask = function () {
      return 0;
    };
  }, function (t, e, n) {
    "use strict";

    n(22).polyfill();
  }, function (t, e, n) {
    "use strict";

    function o(t, e) {
      if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");
      for (var n = Object(t), o = 1; o < arguments.length; o++) {
        var r = arguments[o];
        if (void 0 !== r && null !== r) for (var i = Object.keys(Object(r)), a = 0, s = i.length; a < s; a++) {
          var c = i[a],
            l = Object.getOwnPropertyDescriptor(r, c);
          void 0 !== l && l.enumerable && (n[c] = r[c]);
        }
      }
      return n;
    }
    function r() {
      Object.assign || Object.defineProperty(Object, "assign", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: o
      });
    }
    t.exports = {
      assign: o,
      polyfill: r
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(24),
      r = n(6),
      i = n(5),
      a = n(36),
      s = function s() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if ("undefined" != typeof window) {
          var n = a.getOpts.apply(void 0, t);
          return new Promise(function (t, e) {
            i["default"].promise = {
              resolve: t,
              reject: e
            }, o["default"](n), setTimeout(function () {
              r.openModal();
            });
          });
        }
      };
    s.close = r.onAction, s.getState = r.getState, s.setActionValue = i.setActionValue, s.stopLoading = r.stopLoading, s.setDefaults = a.setDefaults, e["default"] = s;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(1),
      r = n(0),
      i = r["default"].MODAL,
      a = n(4),
      s = n(34),
      c = n(35),
      l = n(1);
    e.init = function (t) {
      o.getNode(i) || (document.body || l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"), s["default"](), a["default"]()), a.initModalContent(t), c["default"](t);
    }, e["default"] = e.init;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(0),
      r = o["default"].MODAL;
    e.modalMarkup = '\n  <div class="' + r + '" role="dialog" aria-modal="true"></div>', e["default"] = e.modalMarkup;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(0),
      r = o["default"].OVERLAY,
      i = '<div \n    class="' + r + '"\n    tabIndex="-1">\n  </div>';
    e["default"] = i;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(0),
      r = o["default"].ICON;
    e.errorIconMarkup = function () {
      var t = r + "--error",
        e = t + "__line";
      return '\n    <div class="' + t + '__x-mark">\n      <span class="' + e + " " + e + '--left"></span>\n      <span class="' + e + " " + e + '--right"></span>\n    </div>\n  ';
    }, e.warningIconMarkup = function () {
      var t = r + "--warning";
      return '\n    <span class="' + t + '__body">\n      <span class="' + t + '__dot"></span>\n    </span>\n  ';
    }, e.successIconMarkup = function () {
      var t = r + "--success";
      return '\n    <span class="' + t + "__line " + t + '__line--long"></span>\n    <span class="' + t + "__line " + t + '__line--tip"></span>\n\n    <div class="' + t + '__ring"></div>\n    <div class="' + t + '__hide-corners"></div>\n  ';
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(0),
      r = o["default"].CONTENT;
    e.contentMarkup = '\n  <div class="' + r + '">\n\n  </div>\n';
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(0),
      r = o["default"].BUTTON_CONTAINER,
      i = o["default"].BUTTON,
      a = o["default"].BUTTON_LOADER;
    e.buttonMarkup = '\n  <div class="' + r + '">\n\n    <button\n      class="' + i + '"\n    ></button>\n\n    <div class="' + a + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n';
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(4),
      r = n(2),
      i = n(0),
      a = i["default"].ICON,
      s = i["default"].ICON_CUSTOM,
      c = ["error", "warning", "success", "info"],
      l = {
        error: r.errorIconMarkup(),
        warning: r.warningIconMarkup(),
        success: r.successIconMarkup()
      },
      u = function u(t, e) {
        var n = a + "--" + t;
        e.classList.add(n);
        var o = l[t];
        o && (e.innerHTML = o);
      },
      f = function f(t, e) {
        e.classList.add(s);
        var n = document.createElement("img");
        n.src = t, e.appendChild(n);
      },
      d = function d(t) {
        if (t) {
          var e = o.injectElIntoModal(r.iconMarkup);
          c.includes(t) ? u(t, e) : f(t, e);
        }
      };
    e["default"] = d;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(2),
      r = n(4),
      i = function i(t) {
        navigator.userAgent.includes("AppleWebKit") && (t.style.display = "none", t.offsetHeight, t.style.display = "");
      };
    e.initTitle = function (t) {
      if (t) {
        var e = r.injectElIntoModal(o.titleMarkup);
        e.textContent = t, i(e);
      }
    }, e.initText = function (t) {
      if (t) {
        var e = document.createDocumentFragment();
        t.split("\n").forEach(function (t, n, o) {
          e.appendChild(document.createTextNode(t)), n < o.length - 1 && e.appendChild(document.createElement("br"));
        });
        var n = r.injectElIntoModal(o.textMarkup);
        n.appendChild(e), i(n);
      }
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(1),
      r = n(4),
      i = n(0),
      a = i["default"].BUTTON,
      s = i["default"].DANGER_BUTTON,
      c = n(3),
      l = n(2),
      u = n(6),
      f = n(5),
      d = function d(t, e, n) {
        var r = e.text,
          i = e.value,
          d = e.className,
          p = e.closeModal,
          m = o.stringToNode(l.buttonMarkup),
          b = m.querySelector("." + a),
          v = a + "--" + t;
        if (b.classList.add(v), d) {
          (Array.isArray(d) ? d : d.split(" ")).filter(function (t) {
            return t.length > 0;
          }).forEach(function (t) {
            b.classList.add(t);
          });
        }
        n && t === c.CONFIRM_KEY && b.classList.add(s), b.textContent = r;
        var g = {};
        return g[t] = i, f.setActionValue(g), f.setActionOptionsFor(t, {
          closeModal: p
        }), b.addEventListener("click", function () {
          return u.onAction(t);
        }), m;
      },
      p = function p(t, e) {
        var n = r.injectElIntoModal(l.footerMarkup);
        for (var o in t) {
          var i = t[o],
            a = d(o, i, e);
          i.visible && n.appendChild(a);
        }
        0 === n.children.length && n.remove();
      };
    e["default"] = p;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(3),
      r = n(4),
      i = n(2),
      a = n(5),
      s = n(6),
      c = n(0),
      l = c["default"].CONTENT,
      u = function u(t) {
        t.addEventListener("input", function (t) {
          var e = t.target,
            n = e.value;
          a.setActionValue(n);
        }), t.addEventListener("keyup", function (t) {
          if ("Enter" === t.key) return s.onAction(o.CONFIRM_KEY);
        }), setTimeout(function () {
          t.focus(), a.setActionValue("");
        }, 0);
      },
      f = function f(t, e, n) {
        var o = document.createElement(e),
          r = l + "__" + e;
        o.classList.add(r);
        for (var i in n) {
          var a = n[i];
          o[i] = a;
        }
        "input" === e && u(o), t.appendChild(o);
      },
      d = function d(t) {
        if (t) {
          var e = r.injectElIntoModal(i.contentMarkup),
            n = t.element,
            o = t.attributes;
          "string" == typeof n ? f(e, n, o) : e.appendChild(n);
        }
      };
    e["default"] = d;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(1),
      r = n(2),
      i = function i() {
        var t = o.stringToNode(r.overlayMarkup);
        document.body.appendChild(t);
      };
    e["default"] = i;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(5),
      r = n(6),
      i = n(1),
      a = n(3),
      s = n(0),
      c = s["default"].MODAL,
      l = s["default"].BUTTON,
      u = s["default"].OVERLAY,
      f = function f(t) {
        t.preventDefault(), v();
      },
      d = function d(t) {
        t.preventDefault(), g();
      },
      p = function p(t) {
        if (o["default"].isOpen) switch (t.key) {
          case "Escape":
            return r.onAction(a.CANCEL_KEY);
        }
      },
      m = function m(t) {
        if (o["default"].isOpen) switch (t.key) {
          case "Tab":
            return f(t);
        }
      },
      b = function b(t) {
        if (o["default"].isOpen) return "Tab" === t.key && t.shiftKey ? d(t) : void 0;
      },
      v = function v() {
        var t = i.getNode(l);
        t && (t.tabIndex = 0, t.focus());
      },
      g = function g() {
        var t = i.getNode(c),
          e = t.querySelectorAll("." + l),
          n = e.length - 1,
          o = e[n];
        o && o.focus();
      },
      h = function h(t) {
        t[t.length - 1].addEventListener("keydown", m);
      },
      w = function w(t) {
        t[0].addEventListener("keydown", b);
      },
      y = function y() {
        var t = i.getNode(c),
          e = t.querySelectorAll("." + l);
        e.length && (h(e), w(e));
      },
      x = function x(t) {
        if (i.getNode(u) === t.target) return r.onAction(a.CANCEL_KEY);
      },
      _ = function _(t) {
        var e = i.getNode(u);
        e.removeEventListener("click", x), t && e.addEventListener("click", x);
      },
      k = function k(t) {
        o["default"].timer && clearTimeout(o["default"].timer), t && (o["default"].timer = window.setTimeout(function () {
          return r.onAction(a.CANCEL_KEY);
        }, t));
      },
      O = function O(t) {
        t.closeOnEsc ? document.addEventListener("keyup", p) : document.removeEventListener("keyup", p), t.dangerMode ? v() : g(), y(), _(t.closeOnClickOutside), k(t.timer);
      };
    e["default"] = O;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(1),
      r = n(3),
      i = n(37),
      a = n(38),
      s = {
        title: null,
        text: null,
        icon: null,
        buttons: r.defaultButtonList,
        content: null,
        className: null,
        closeOnClickOutside: !0,
        closeOnEsc: !0,
        dangerMode: !1,
        timer: null
      },
      c = Object.assign({}, s);
    e.setDefaults = function (t) {
      c = Object.assign({}, s, t);
    };
    var l = function l(t) {
        var e = t && t.button,
          n = t && t.buttons;
        return void 0 !== e && void 0 !== n && o.throwErr("Cannot set both 'button' and 'buttons' options!"), void 0 !== e ? {
          confirm: e
        } : n;
      },
      u = function u(t) {
        return o.ordinalSuffixOf(t + 1);
      },
      f = function f(t, e) {
        o.throwErr(u(e) + " argument ('" + t + "') is invalid");
      },
      d = function d(t, e) {
        var n = t + 1,
          r = e[n];
        o.isPlainObject(r) || void 0 === r || o.throwErr("Expected " + u(n) + " argument ('" + r + "') to be a plain object");
      },
      p = function p(t, e) {
        var n = t + 1,
          r = e[n];
        void 0 !== r && o.throwErr("Unexpected " + u(n) + " argument (" + r + ")");
      },
      m = function m(t, e, n, r) {
        var i = typeof e,
          a = "string" === i,
          s = e instanceof Element;
        if (a) {
          if (0 === n) return {
            text: e
          };
          if (1 === n) return {
            text: e,
            title: r[0]
          };
          if (2 === n) return d(n, r), {
            icon: e
          };
          f(e, n);
        } else {
          if (s && 0 === n) return d(n, r), {
            content: e
          };
          if (o.isPlainObject(e)) return p(n, r), e;
          f(e, n);
        }
      };
    e.getOpts = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      var n = {};
      t.forEach(function (e, o) {
        var r = m(0, e, o, t);
        Object.assign(n, r);
      });
      var o = l(n);
      n.buttons = r.getButtonListOpts(o), delete n.button, n.content = i.getContentOpts(n.content);
      var u = Object.assign({}, s, c, n);
      return Object.keys(u).forEach(function (t) {
        a.DEPRECATED_OPTS[t] && a.logDeprecation(t);
      }), u;
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(1),
      r = {
        element: "input",
        attributes: {
          placeholder: ""
        }
      };
    e.getContentOpts = function (t) {
      var e = {};
      return o.isPlainObject(t) ? Object.assign(e, t) : t instanceof Element ? {
        element: t
      } : "input" === t ? r : null;
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.logDeprecation = function (t) {
      var n = e.DEPRECATED_OPTS[t],
        o = n.onlyRename,
        r = n.replacement,
        i = n.subOption,
        a = n.link,
        s = o ? "renamed" : "deprecated",
        c = 'SweetAlert warning: "' + t + '" option has been ' + s + ".";
      if (r) {
        c += " Please use" + (i ? ' "' + i + '" in ' : " ") + '"' + r + '" instead.';
      }
      var l = "https://sweetalert.js.org";
      c += a ? " More details: " + l + a : " More details: " + l + "/guides/#upgrading-from-1x", console.warn(c);
    }, e.DEPRECATED_OPTS = {
      type: {
        replacement: "icon",
        link: "/docs/#icon"
      },
      imageUrl: {
        replacement: "icon",
        link: "/docs/#icon"
      },
      customClass: {
        replacement: "className",
        onlyRename: !0,
        link: "/docs/#classname"
      },
      imageSize: {},
      showCancelButton: {
        replacement: "buttons",
        link: "/docs/#buttons"
      },
      showConfirmButton: {
        replacement: "button",
        link: "/docs/#button"
      },
      confirmButtonText: {
        replacement: "button",
        link: "/docs/#button"
      },
      confirmButtonColor: {},
      cancelButtonText: {
        replacement: "buttons",
        link: "/docs/#buttons"
      },
      closeOnConfirm: {
        replacement: "button",
        subOption: "closeModal",
        link: "/docs/#button"
      },
      closeOnCancel: {
        replacement: "buttons",
        subOption: "closeModal",
        link: "/docs/#buttons"
      },
      showLoaderOnConfirm: {
        replacement: "buttons"
      },
      animation: {},
      inputType: {
        replacement: "content",
        link: "/docs/#content"
      },
      inputValue: {
        replacement: "content",
        link: "/docs/#content"
      },
      inputPlaceholder: {
        replacement: "content",
        link: "/docs/#content"
      },
      html: {
        replacement: "content",
        link: "/docs/#content"
      },
      allowEscapeKey: {
        replacement: "closeOnEsc",
        onlyRename: !0,
        link: "/docs/#closeonesc"
      },
      allowClickOutside: {
        replacement: "closeOnClickOutside",
        onlyRename: !0,
        link: "/docs/#closeonclickoutside"
      }
    };
  }]);
});

/***/ }),

/***/ "./node_modules/trix/dist/trix.esm.min.js":
/*!************************************************!*\
  !*** ./node_modules/trix/dist/trix.esm.min.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");




function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*
Trix 2.0.7
Copyright © 2023 37signals, LLC
 */
var t = "2.0.7";
var e = "[data-trix-attachment]",
  i = {
    preview: {
      presentation: "gallery",
      caption: {
        name: !0,
        size: !0
      }
    },
    file: {
      caption: {
        size: !0
      }
    }
  },
  n = {
    "default": {
      tagName: "div",
      parse: !1
    },
    quote: {
      tagName: "blockquote",
      nestable: !0
    },
    heading1: {
      tagName: "h1",
      terminal: !0,
      breakOnReturn: !0,
      group: !1
    },
    code: {
      tagName: "pre",
      terminal: !0,
      text: {
        plaintext: !0
      }
    },
    bulletList: {
      tagName: "ul",
      parse: !1
    },
    bullet: {
      tagName: "li",
      listAttribute: "bulletList",
      group: !1,
      nestable: !0,
      test: function test(t) {
        return r(t.parentNode) === n[this.listAttribute].tagName;
      }
    },
    numberList: {
      tagName: "ol",
      parse: !1
    },
    number: {
      tagName: "li",
      listAttribute: "numberList",
      group: !1,
      nestable: !0,
      test: function test(t) {
        return r(t.parentNode) === n[this.listAttribute].tagName;
      }
    },
    attachmentGallery: {
      tagName: "div",
      exclusive: !0,
      terminal: !0,
      parse: !1,
      group: !1
    }
  },
  r = function r(t) {
    var e;
    return null == t || null === (e = t.tagName) || void 0 === e ? void 0 : e.toLowerCase();
  },
  o = navigator.userAgent.match(/android\s([0-9]+.*Chrome)/i),
  s = o && parseInt(o[1]);
var a = {
    composesExistingText: /Android.*Chrome/.test(navigator.userAgent),
    recentAndroid: s && s > 12,
    samsungAndroid: s && navigator.userAgent.match(/Android.*SM-/),
    forcesObjectResizing: /Trident.*rv:11/.test(navigator.userAgent),
    supportsInputEvents: "undefined" != typeof InputEvent && ["data", "getTargetRanges", "inputType"].every(function (t) {
      return t in InputEvent.prototype;
    })
  },
  l = {
    attachFiles: "Attach Files",
    bold: "Bold",
    bullets: "Bullets",
    "byte": "Byte",
    bytes: "Bytes",
    captionPlaceholder: "Add a caption…",
    code: "Code",
    heading1: "Heading",
    indent: "Increase Level",
    italic: "Italic",
    link: "Link",
    numbers: "Numbers",
    outdent: "Decrease Level",
    quote: "Quote",
    redo: "Redo",
    remove: "Remove",
    strike: "Strikethrough",
    undo: "Undo",
    unlink: "Unlink",
    url: "URL",
    urlPlaceholder: "Enter a URL…",
    GB: "GB",
    KB: "KB",
    MB: "MB",
    PB: "PB",
    TB: "TB"
  };
var c = [l.bytes, l.KB, l.MB, l.GB, l.TB, l.PB];
var h = {
  prefix: "IEC",
  precision: 2,
  formatter: function formatter(t) {
    switch (t) {
      case 0:
        return "0 ".concat(l.bytes);
      case 1:
        return "1 ".concat(l["byte"]);
      default:
        var _e2;
        "SI" === this.prefix ? _e2 = 1e3 : "IEC" === this.prefix && (_e2 = 1024);
        var _i2 = Math.floor(Math.log(t) / Math.log(_e2)),
          _n = (t / Math.pow(_e2, _i2)).toFixed(this.precision).replace(/0*$/, "").replace(/\.$/, "");
        return "".concat(_n, " ").concat(c[_i2]);
    }
  }
};
var u = "\uFEFF",
  d = " ",
  g = function g(t) {
    for (var _e3 in t) {
      var _i3 = t[_e3];
      this[_e3] = _i3;
    }
    return this;
  },
  m = document.documentElement,
  p = m.matches,
  f = function f(t) {
    var _ref = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref.onElement,
      i = _ref.matchingSelector,
      n = _ref.withCallback,
      r = _ref.inPhase,
      o = _ref.preventDefault,
      s = _ref.times;
    var a = e || m,
      l = i,
      c = "capturing" === r,
      h = function h(t) {
        null != s && 0 == --s && h.destroy();
        var e = A(t.target, {
          matchingSelector: l
        });
        null != e && (null == n || n.call(e, t, e), o && t.preventDefault());
      };
    return h.destroy = function () {
      return a.removeEventListener(t, h, c);
    }, a.addEventListener(t, h, c), h;
  },
  b = function b(t) {
    var _ref2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref2.onElement,
      i = _ref2.bubbles,
      n = _ref2.cancelable,
      r = _ref2.attributes;
    var o = null != e ? e : m;
    i = !1 !== i, n = !1 !== n;
    var s = document.createEvent("Events");
    return s.initEvent(t, i, n), null != r && g.call(s, r), o.dispatchEvent(s);
  },
  v = function v(t, e) {
    if (1 === (null == t ? void 0 : t.nodeType)) return p.call(t, e);
  },
  A = function A(t) {
    var _ref3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref3.matchingSelector,
      i = _ref3.untilNode;
    for (; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.parentNode;
    if (null != t) {
      if (null == e) return t;
      if (t.closest && null == i) return t.closest(e);
      for (; t && t !== i;) {
        if (v(t, e)) return t;
        t = t.parentNode;
      }
    }
  },
  x = function x(t) {
    return document.activeElement !== t && y(t, document.activeElement);
  },
  y = function y(t, e) {
    if (t && e) for (; e;) {
      if (e === t) return !0;
      e = e.parentNode;
    }
  },
  C = function C(t) {
    var e;
    if (null === (e = t) || void 0 === e || !e.parentNode) return;
    var i = 0;
    for (t = t.previousSibling; t;) i++, t = t.previousSibling;
    return i;
  },
  R = function R(t) {
    var e;
    return null == t || null === (e = t.parentNode) || void 0 === e ? void 0 : e.removeChild(t);
  },
  S = function S(t) {
    var _ref4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref4.onlyNodesOfType,
      i = _ref4.usingFilter,
      n = _ref4.expandEntityReferences;
    var r = function () {
      switch (e) {
        case "element":
          return NodeFilter.SHOW_ELEMENT;
        case "text":
          return NodeFilter.SHOW_TEXT;
        case "comment":
          return NodeFilter.SHOW_COMMENT;
        default:
          return NodeFilter.SHOW_ALL;
      }
    }();
    return document.createTreeWalker(t, r, null != i ? i : null, !0 === n);
  },
  E = function E(t) {
    var e;
    return null == t || null === (e = t.tagName) || void 0 === e ? void 0 : e.toLowerCase();
  },
  k = function k(t) {
    var e,
      i,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    "object" == typeof t ? (n = t, t = n.tagName) : n = {
      attributes: n
    };
    var r = document.createElement(t);
    if (null != n.editable && (null == n.attributes && (n.attributes = {}), n.attributes.contenteditable = n.editable), n.attributes) for (e in n.attributes) i = n.attributes[e], r.setAttribute(e, i);
    if (n.style) for (e in n.style) i = n.style[e], r.style[e] = i;
    if (n.data) for (e in n.data) i = n.data[e], r.dataset[e] = i;
    return n.className && n.className.split(" ").forEach(function (t) {
      r.classList.add(t);
    }), n.textContent && (r.textContent = n.textContent), n.childNodes && [].concat(n.childNodes).forEach(function (t) {
      r.appendChild(t);
    }), r;
  };
var L;
var D = function D() {
    if (null != L) return L;
    L = [];
    for (var _t2 in n) {
      var _e4 = n[_t2];
      _e4.tagName && L.push(_e4.tagName);
    }
    return L;
  },
  w = function w(t) {
    return B(null == t ? void 0 : t.firstChild);
  },
  T = function T(t) {
    var _ref5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        strict: !0
      },
      e = _ref5.strict;
    return e ? B(t) : B(t) || !B(t.firstChild) && function (t) {
      return D().includes(E(t)) && !D().includes(E(t.firstChild));
    }(t);
  },
  B = function B(t) {
    return F(t) && "block" === (null == t ? void 0 : t.data);
  },
  F = function F(t) {
    return (null == t ? void 0 : t.nodeType) === Node.COMMENT_NODE;
  },
  I = function I(t) {
    var _ref6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref6.name;
    if (t) return O(t) ? t.data === u ? !e || t.parentNode.dataset.trixCursorTarget === e : void 0 : I(t.firstChild);
  },
  P = function P(t) {
    return v(t, e);
  },
  N = function N(t) {
    return O(t) && "" === (null == t ? void 0 : t.data);
  },
  O = function O(t) {
    return (null == t ? void 0 : t.nodeType) === Node.TEXT_NODE;
  },
  M = {
    level2Enabled: !0,
    getLevel: function getLevel() {
      return this.level2Enabled && a.supportsInputEvents ? 2 : 0;
    },
    pickFiles: function pickFiles(t) {
      var e = k("input", {
        type: "file",
        multiple: !0,
        hidden: !0,
        id: this.fileInputId
      });
      e.addEventListener("change", function () {
        t(e.files), R(e);
      }), R(document.getElementById(this.fileInputId)), document.body.appendChild(e), e.click();
    }
  };
var j = {
    removeBlankTableCells: !1,
    tableCellSeparator: " | ",
    tableRowSeparator: "\n"
  },
  W = {
    bold: {
      tagName: "strong",
      inheritable: !0,
      parser: function parser(t) {
        var e = window.getComputedStyle(t);
        return "bold" === e.fontWeight || e.fontWeight >= 600;
      }
    },
    italic: {
      tagName: "em",
      inheritable: !0,
      parser: function parser(t) {
        return "italic" === window.getComputedStyle(t).fontStyle;
      }
    },
    href: {
      groupTagName: "a",
      parser: function parser(t) {
        var i = "a:not(".concat(e, ")"),
          n = t.closest(i);
        if (n) return n.getAttribute("href");
      }
    },
    strike: {
      tagName: "del",
      inheritable: !0
    },
    frozen: {
      style: {
        backgroundColor: "highlight"
      }
    }
  },
  U = {
    getDefaultHTML: function getDefaultHTML() {
      return '<div class="trix-button-row">\n      <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="'.concat(l.bold, '" tabindex="-1">').concat(l.bold, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="').concat(l.italic, '" tabindex="-1">').concat(l.italic, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="').concat(l.strike, '" tabindex="-1">').concat(l.strike, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="').concat(l.link, '" tabindex="-1">').concat(l.link, '</button>\n      </span>\n\n      <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="').concat(l.heading1, '" tabindex="-1">').concat(l.heading1, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="').concat(l.quote, '" tabindex="-1">').concat(l.quote, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="').concat(l.code, '" tabindex="-1">').concat(l.code, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="').concat(l.bullets, '" tabindex="-1">').concat(l.bullets, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="').concat(l.numbers, '" tabindex="-1">').concat(l.numbers, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="').concat(l.outdent, '" tabindex="-1">').concat(l.outdent, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="').concat(l.indent, '" tabindex="-1">').concat(l.indent, '</button>\n      </span>\n\n      <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="').concat(l.attachFiles, '" tabindex="-1">').concat(l.attachFiles, '</button>\n      </span>\n\n      <span class="trix-button-group-spacer"></span>\n\n      <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="').concat(l.undo, '" tabindex="-1">').concat(l.undo, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="').concat(l.redo, '" tabindex="-1">').concat(l.redo, '</button>\n      </span>\n    </div>\n\n    <div class="trix-dialogs" data-trix-dialogs>\n      <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n        <div class="trix-dialog__link-fields">\n          <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="').concat(l.urlPlaceholder, '" aria-label="').concat(l.url, '" required data-trix-input>\n          <div class="trix-button-group">\n            <input type="button" class="trix-button trix-button--dialog" value="').concat(l.link, '" data-trix-method="setAttribute">\n            <input type="button" class="trix-button trix-button--dialog" value="').concat(l.unlink, '" data-trix-method="removeAttribute">\n          </div>\n        </div>\n      </div>\n    </div>');
    }
  };
var q = {
  interval: 5e3
};
var V = Object.freeze({
  __proto__: null,
  attachments: i,
  blockAttributes: n,
  browser: a,
  css: {
    attachment: "attachment",
    attachmentCaption: "attachment__caption",
    attachmentCaptionEditor: "attachment__caption-editor",
    attachmentMetadata: "attachment__metadata",
    attachmentMetadataContainer: "attachment__metadata-container",
    attachmentName: "attachment__name",
    attachmentProgress: "attachment__progress",
    attachmentSize: "attachment__size",
    attachmentToolbar: "attachment__toolbar",
    attachmentGallery: "attachment-gallery"
  },
  fileSize: h,
  input: M,
  keyNames: {
    8: "backspace",
    9: "tab",
    13: "return",
    27: "escape",
    37: "left",
    39: "right",
    46: "delete",
    68: "d",
    72: "h",
    79: "o"
  },
  lang: l,
  parser: j,
  textAttributes: W,
  toolbar: U,
  undo: q
});
var z = /*#__PURE__*/function () {
  function z() {}
  z.proxyMethod = function proxyMethod(t) {
    var _ref7 = _(t),
      e = _ref7.name,
      i = _ref7.toMethod,
      n = _ref7.toProperty,
      r = _ref7.optional;
    this.prototype[e] = function () {
      var t, o;
      var s, a;
      i ? o = r ? null === (s = this[i]) || void 0 === s ? void 0 : s.call(this) : this[i]() : n && (o = this[n]);
      return r ? (t = null === (a = o) || void 0 === a ? void 0 : a[e], t ? H.call(t, o, arguments) : void 0) : (t = o[e], H.call(t, o, arguments));
    };
  };
  return z;
}();
var _ = function _(t) {
    var e = t.match(J);
    if (!e) throw new Error("can't parse @proxyMethod expression: ".concat(t));
    var i = {
      name: e[4]
    };
    return null != e[2] ? i.toMethod = e[1] : i.toProperty = e[1], null != e[3] && (i.optional = !0), i;
  },
  H = Function.prototype.apply,
  J = new RegExp("^(.+?)(\\(\\))?(\\?)?\\.(.+?)$");
var K, G, $;
var X = /*#__PURE__*/function (_z) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(X, _z);
  X.box = function box() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return t instanceof this ? t : this.fromUCS2String(null == t ? void 0 : t.toString());
  };
  X.fromUCS2String = function fromUCS2String(t) {
    return new this(t, tt(t));
  };
  X.fromCodepoints = function fromCodepoints(t) {
    return new this(et(t), t);
  };
  function X(t, e) {
    var _this;
    _this = _z.apply(this, arguments) || this, _this.ucs2String = t, _this.codepoints = e, _this.length = _this.codepoints.length, _this.ucs2Length = _this.ucs2String.length;
    return _this;
  }
  var _proto = X.prototype;
  _proto.offsetToUCS2Offset = function offsetToUCS2Offset(t) {
    return et(this.codepoints.slice(0, Math.max(0, t))).length;
  };
  _proto.offsetFromUCS2Offset = function offsetFromUCS2Offset(t) {
    return tt(this.ucs2String.slice(0, Math.max(0, t))).length;
  };
  _proto.slice = function slice() {
    var _this$codepoints;
    return this.constructor.fromCodepoints((_this$codepoints = this.codepoints).slice.apply(_this$codepoints, arguments));
  };
  _proto.charAt = function charAt(t) {
    return this.slice(t, t + 1);
  };
  _proto.isEqualTo = function isEqualTo(t) {
    return this.constructor.box(t).ucs2String === this.ucs2String;
  };
  _proto.toJSON = function toJSON() {
    return this.ucs2String;
  };
  _proto.getCacheKey = function getCacheKey() {
    return this.ucs2String;
  };
  _proto.toString = function toString() {
    return this.ucs2String;
  };
  return X;
}(z);
var Y = 1 === (null === (K = Array.from) || void 0 === K ? void 0 : K.call(Array, "👼").length),
  Q = null != (null === (G = " ".codePointAt) || void 0 === G ? void 0 : G.call(" ", 0)),
  Z = " 👼" === (null === ($ = String.fromCodePoint) || void 0 === $ ? void 0 : $.call(String, 32, 128124));
var tt, et;
tt = Y && Q ? function (t) {
  return Array.from(t).map(function (t) {
    return t.codePointAt(0);
  });
} : function (t) {
  var e = [];
  var i = 0;
  var n = t.length;
  for (; i < n;) {
    var _r = t.charCodeAt(i++);
    if (55296 <= _r && _r <= 56319 && i < n) {
      var _e5 = t.charCodeAt(i++);
      56320 == (64512 & _e5) ? _r = ((1023 & _r) << 10) + (1023 & _e5) + 65536 : i--;
    }
    e.push(_r);
  }
  return e;
}, et = Z ? function (t) {
  return String.fromCodePoint.apply(String, Array.from(t || []));
} : function (t) {
  return function () {
    var e = [];
    return Array.from(t).forEach(function (t) {
      var i = "";
      t > 65535 && (t -= 65536, i += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e.push(i + String.fromCharCode(t));
    }), e;
  }().join("");
};
var it = 0;
var nt = /*#__PURE__*/function (_z2) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(nt, _z2);
  nt.fromJSONString = function fromJSONString(t) {
    return this.fromJSON(JSON.parse(t));
  };
  function nt() {
    var _this2;
    _this2 = _z2.apply(this, arguments) || this, _this2.id = ++it;
    return _this2;
  }
  var _proto2 = nt.prototype;
  _proto2.hasSameConstructorAs = function hasSameConstructorAs(t) {
    return this.constructor === (null == t ? void 0 : t.constructor);
  };
  _proto2.isEqualTo = function isEqualTo(t) {
    return this === t;
  };
  _proto2.inspect = function inspect() {
    var t = [],
      e = this.contentsForInspection() || {};
    for (var _i4 in e) {
      var _n2 = e[_i4];
      t.push("".concat(_i4, "=").concat(_n2));
    }
    return "#<".concat(this.constructor.name, ":").concat(this.id).concat(t.length ? " ".concat(t.join(", ")) : "", ">");
  };
  _proto2.contentsForInspection = function contentsForInspection() {};
  _proto2.toJSONString = function toJSONString() {
    return JSON.stringify(this);
  };
  _proto2.toUTF16String = function toUTF16String() {
    return X.box(this);
  };
  _proto2.getCacheKey = function getCacheKey() {
    return this.id.toString();
  };
  return nt;
}(z);
var rt = function rt() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (t.length !== e.length) return !1;
    for (var _i5 = 0; _i5 < t.length; _i5++) {
      if (t[_i5] !== e[_i5]) return !1;
    }
    return !0;
  },
  ot = function ot(t) {
    var e = t.slice(0);
    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
    return e.splice.apply(e, n), e;
  },
  st = /[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/,
  at = function () {
    var t = k("input", {
        dir: "auto",
        name: "x",
        dirName: "x.dir"
      }),
      e = k("textarea", {
        dir: "auto",
        name: "y",
        dirName: "y.dir"
      }),
      i = k("form");
    i.appendChild(t), i.appendChild(e);
    var n = function () {
        try {
          return new FormData(i).has(e.dirName);
        } catch (t) {
          return !1;
        }
      }(),
      r = function () {
        try {
          return t.matches(":dir(ltr),:dir(rtl)");
        } catch (t) {
          return !1;
        }
      }();
    return n ? function (t) {
      return e.value = t, new FormData(i).get(e.dirName);
    } : r ? function (e) {
      return t.value = e, t.matches(":dir(rtl)") ? "rtl" : "ltr";
    } : function (t) {
      var e = t.trim().charAt(0);
      return st.test(e) ? "rtl" : "ltr";
    };
  }();
var lt = null,
  ct = null,
  ht = null,
  ut = null;
var dt = function dt() {
    return lt || (lt = ft().concat(mt())), lt;
  },
  gt = function gt(t) {
    return n[t];
  },
  mt = function mt() {
    return ct || (ct = Object.keys(n)), ct;
  },
  pt = function pt(t) {
    return W[t];
  },
  ft = function ft() {
    return ht || (ht = Object.keys(W)), ht;
  },
  bt = function bt(t, e) {
    vt(t).textContent = e.replace(/%t/g, t);
  },
  vt = function vt(t) {
    var e = document.createElement("style");
    e.setAttribute("type", "text/css"), e.setAttribute("data-tag-name", t.toLowerCase());
    var i = At();
    return i && e.setAttribute("nonce", i), document.head.insertBefore(e, document.head.firstChild), e;
  },
  At = function At() {
    var t = xt("trix-csp-nonce") || xt("csp-nonce");
    if (t) return t.getAttribute("content");
  },
  xt = function xt(t) {
    return document.head.querySelector("meta[name=".concat(t, "]"));
  },
  yt = {
    "application/x-trix-feature-detection": "test"
  },
  Ct = function Ct(t) {
    var e = t.getData("text/plain"),
      i = t.getData("text/html");
    if (!e || !i) return null == e ? void 0 : e.length;
    {
      var _DOMParser$parseFromS = new DOMParser().parseFromString(i, "text/html"),
        _t3 = _DOMParser$parseFromS.body;
      if (_t3.textContent === e) return !_t3.querySelector("*");
    }
  },
  Rt = /Mac|^iP/.test(navigator.platform) ? function (t) {
    return t.metaKey;
  } : function (t) {
    return t.ctrlKey;
  },
  St = function St(t) {
    return setTimeout(t, 1);
  },
  Et = function Et() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    var e = {};
    for (var _i6 in t) {
      var _n3 = t[_i6];
      e[_i6] = _n3;
    }
    return e;
  },
  kt = function kt() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (Object.keys(t).length !== Object.keys(e).length) return !1;
    for (var _i7 in t) {
      if (t[_i7] !== e[_i7]) return !1;
    }
    return !0;
  },
  Lt = function Lt(t) {
    if (null != t) return Array.isArray(t) || (t = [t, t]), [Tt(t[0]), Tt(null != t[1] ? t[1] : t[0])];
  },
  Dt = function Dt(t) {
    if (null == t) return;
    var _Lt = Lt(t),
      e = _Lt[0],
      i = _Lt[1];
    return Bt(e, i);
  },
  wt = function wt(t, e) {
    if (null == t || null == e) return;
    var _Lt2 = Lt(t),
      i = _Lt2[0],
      n = _Lt2[1],
      _Lt3 = Lt(e),
      r = _Lt3[0],
      o = _Lt3[1];
    return Bt(i, r) && Bt(n, o);
  },
  Tt = function Tt(t) {
    return "number" == typeof t ? t : Et(t);
  },
  Bt = function Bt(t, e) {
    return "number" == typeof t ? t === e : kt(t, e);
  };
var Ft = /*#__PURE__*/function (_z3) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Ft, _z3);
  function Ft() {
    var _this3;
    _this3 = _z3.apply(this, arguments) || this, _this3.update = _this3.update.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3)), _this3.selectionManagers = [];
    return _this3;
  }
  var _proto3 = Ft.prototype;
  _proto3.start = function start() {
    this.started || (this.started = !0, document.addEventListener("selectionchange", this.update, !0));
  };
  _proto3.stop = function stop() {
    if (this.started) return this.started = !1, document.removeEventListener("selectionchange", this.update, !0);
  };
  _proto3.registerSelectionManager = function registerSelectionManager(t) {
    if (!this.selectionManagers.includes(t)) return this.selectionManagers.push(t), this.start();
  };
  _proto3.unregisterSelectionManager = function unregisterSelectionManager(t) {
    if (this.selectionManagers = this.selectionManagers.filter(function (e) {
      return e !== t;
    }), 0 === this.selectionManagers.length) return this.stop();
  };
  _proto3.notifySelectionManagersOfSelectionChange = function notifySelectionManagersOfSelectionChange() {
    return this.selectionManagers.map(function (t) {
      return t.selectionDidChange();
    });
  };
  _proto3.update = function update() {
    this.notifySelectionManagersOfSelectionChange();
  };
  _proto3.reset = function reset() {
    this.update();
  };
  return Ft;
}(z);
var It = new Ft(),
  Pt = function Pt() {
    var t = window.getSelection();
    if (t.rangeCount > 0) return t;
  },
  Nt = function Nt() {
    var t;
    var e = null === (t = Pt()) || void 0 === t ? void 0 : t.getRangeAt(0);
    if (e && !Mt(e)) return e;
  },
  Ot = function Ot(t) {
    var e = window.getSelection();
    return e.removeAllRanges(), e.addRange(t), It.update();
  },
  Mt = function Mt(t) {
    return jt(t.startContainer) || jt(t.endContainer);
  },
  jt = function jt(t) {
    return !Object.getPrototypeOf(t);
  },
  Wt = function Wt(t) {
    return t.replace(new RegExp("".concat(u), "g"), "").replace(new RegExp("".concat(d), "g"), " ");
  },
  Ut = new RegExp("[^\\S".concat(d, "]")),
  qt = function qt(t) {
    return t.replace(new RegExp("".concat(Ut.source), "g"), " ").replace(/\ {2,}/g, " ");
  },
  Vt = function Vt(t, e) {
    if (t.isEqualTo(e)) return ["", ""];
    var i = zt(t, e),
      n = i.utf16String.length;
    var r;
    if (n) {
      var _o = i.offset,
        _s = t.codepoints.slice(0, _o).concat(t.codepoints.slice(_o + n));
      r = zt(e, X.fromCodepoints(_s));
    } else r = zt(e, t);
    return [i.utf16String.toString(), r.utf16String.toString()];
  },
  zt = function zt(t, e) {
    var i = 0,
      n = t.length,
      r = e.length;
    for (; i < n && t.charAt(i).isEqualTo(e.charAt(i));) i++;
    for (; n > i + 1 && t.charAt(n - 1).isEqualTo(e.charAt(r - 1));) n--, r--;
    return {
      utf16String: t.slice(i, n),
      offset: i
    };
  };
var _t = /*#__PURE__*/function (_nt) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_t, _nt);
  _t.fromCommonAttributesOfObjects = function fromCommonAttributesOfObjects() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    if (!t.length) return new this();
    var e = Gt(t[0]),
      i = e.getKeys();
    return t.slice(1).forEach(function (t) {
      i = e.getKeysCommonToHash(Gt(t)), e = e.slice(i);
    }), e;
  };
  _t.box = function box(t) {
    return Gt(t);
  };
  function _t() {
    var _this4;
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    _this4 = _nt.apply(this, arguments) || this, _this4.values = Kt(t);
    return _this4;
  }
  var _proto4 = _t.prototype;
  _proto4.add = function add(t, e) {
    return this.merge(Ht(t, e));
  };
  _proto4.remove = function remove(t) {
    return new _t(Kt(this.values, t));
  };
  _proto4.get = function get(t) {
    return this.values[t];
  };
  _proto4.has = function has(t) {
    return t in this.values;
  };
  _proto4.merge = function merge(t) {
    return new _t(Jt(this.values, $t(t)));
  };
  _proto4.slice = function slice(t) {
    var _this5 = this;
    var e = {};
    return Array.from(t).forEach(function (t) {
      _this5.has(t) && (e[t] = _this5.values[t]);
    }), new _t(e);
  };
  _proto4.getKeys = function getKeys() {
    return Object.keys(this.values);
  };
  _proto4.getKeysCommonToHash = function getKeysCommonToHash(t) {
    var _this6 = this;
    return t = Gt(t), this.getKeys().filter(function (e) {
      return _this6.values[e] === t.values[e];
    });
  };
  _proto4.isEqualTo = function isEqualTo(t) {
    return rt(this.toArray(), Gt(t).toArray());
  };
  _proto4.isEmpty = function isEmpty() {
    return 0 === this.getKeys().length;
  };
  _proto4.toArray = function toArray() {
    if (!this.array) {
      var _t4 = [];
      for (var _e6 in this.values) {
        var _i8 = this.values[_e6];
        _t4.push(_t4.push(_e6, _i8));
      }
      this.array = _t4.slice(0);
    }
    return this.array;
  };
  _proto4.toObject = function toObject() {
    return Kt(this.values);
  };
  _proto4.toJSON = function toJSON() {
    return this.toObject();
  };
  _proto4.contentsForInspection = function contentsForInspection() {
    return {
      values: JSON.stringify(this.values)
    };
  };
  return _t;
}(nt);
var Ht = function Ht(t, e) {
    var i = {};
    return i[t] = e, i;
  },
  Jt = function Jt(t, e) {
    var i = Kt(t);
    for (var _t5 in e) {
      var _n4 = e[_t5];
      i[_t5] = _n4;
    }
    return i;
  },
  Kt = function Kt(t, e) {
    var i = {};
    return Object.keys(t).sort().forEach(function (n) {
      n !== e && (i[n] = t[n]);
    }), i;
  },
  Gt = function Gt(t) {
    return t instanceof _t ? t : new _t(t);
  },
  $t = function $t(t) {
    return t instanceof _t ? t.values : t;
  };
var Xt = /*#__PURE__*/function () {
  Xt.groupObjects = function groupObjects() {
    var _this7 = this;
    var t,
      e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      _ref8 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = _ref8.depth,
      n = _ref8.asTree;
    n && null == i && (i = 0);
    var r = [];
    return Array.from(e).forEach(function (e) {
      var o;
      if (t) {
        var s, a, l;
        if (null !== (s = e.canBeGrouped) && void 0 !== s && s.call(e, i) && null !== (a = (l = t[t.length - 1]).canBeGroupedWith) && void 0 !== a && a.call(l, e, i)) return void t.push(e);
        r.push(new _this7(t, {
          depth: i,
          asTree: n
        })), t = null;
      }
      null !== (o = e.canBeGrouped) && void 0 !== o && o.call(e, i) ? t = [e] : r.push(e);
    }), t && r.push(new this(t, {
      depth: i,
      asTree: n
    })), r;
  };
  function Xt() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      _ref9 = arguments.length > 1 ? arguments[1] : void 0,
      e = _ref9.depth,
      i = _ref9.asTree;
    this.objects = t, i && (this.depth = e, this.objects = this.constructor.groupObjects(this.objects, {
      asTree: i,
      depth: this.depth + 1
    }));
  }
  var _proto5 = Xt.prototype;
  _proto5.getObjects = function getObjects() {
    return this.objects;
  };
  _proto5.getDepth = function getDepth() {
    return this.depth;
  };
  _proto5.getCacheKey = function getCacheKey() {
    var t = ["objectGroup"];
    return Array.from(this.getObjects()).forEach(function (e) {
      t.push(e.getCacheKey());
    }), t.join("/");
  };
  return Xt;
}();
var Yt = /*#__PURE__*/function (_z4) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Yt, _z4);
  function Yt() {
    var _this8;
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    _this8 = _z4.apply(this, arguments) || this, _this8.objects = {}, Array.from(t).forEach(function (t) {
      var e = JSON.stringify(t);
      null == _this8.objects[e] && (_this8.objects[e] = t);
    });
    return _this8;
  }
  var _proto6 = Yt.prototype;
  _proto6.find = function find(t) {
    var e = JSON.stringify(t);
    return this.objects[e];
  };
  return Yt;
}(z);
var Qt = /*#__PURE__*/function () {
  function Qt(t) {
    this.reset(t);
  }
  var _proto7 = Qt.prototype;
  _proto7.add = function add(t) {
    var e = Zt(t);
    this.elements[e] = t;
  };
  _proto7.remove = function remove(t) {
    var e = Zt(t),
      i = this.elements[e];
    if (i) return delete this.elements[e], i;
  };
  _proto7.reset = function reset() {
    var _this9 = this;
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return this.elements = {}, Array.from(t).forEach(function (t) {
      _this9.add(t);
    }), t;
  };
  return Qt;
}();
var Zt = function Zt(t) {
  return t.dataset.trixStoreKey;
};
var te = /*#__PURE__*/function (_z5) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(te, _z5);
  function te() {
    return _z5.apply(this, arguments) || this;
  }
  var _proto8 = te.prototype;
  _proto8.isPerforming = function isPerforming() {
    return !0 === this.performing;
  };
  _proto8.hasPerformed = function hasPerformed() {
    return !0 === this.performed;
  };
  _proto8.hasSucceeded = function hasSucceeded() {
    return this.performed && this.succeeded;
  };
  _proto8.hasFailed = function hasFailed() {
    return this.performed && !this.succeeded;
  };
  _proto8.getPromise = function getPromise() {
    var _this10 = this;
    return this.promise || (this.promise = new Promise(function (t, e) {
      return _this10.performing = !0, _this10.perform(function (i, n) {
        _this10.succeeded = i, _this10.performing = !1, _this10.performed = !0, _this10.succeeded ? t(n) : e(n);
      });
    })), this.promise;
  };
  _proto8.perform = function perform(t) {
    return t(!1);
  };
  _proto8.release = function release() {
    var t, e;
    null === (t = this.promise) || void 0 === t || null === (e = t.cancel) || void 0 === e || e.call(t), this.promise = null, this.performing = null, this.performed = null, this.succeeded = null;
  };
  return te;
}(z);
te.proxyMethod("getPromise().then"), te.proxyMethod("getPromise().catch");
var ee = /*#__PURE__*/function (_z6) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ee, _z6);
  function ee(t) {
    var _this11;
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    _this11 = _z6.apply(this, arguments) || this, _this11.object = t, _this11.options = e, _this11.childViews = [], _this11.rootView = (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this11);
    return _this11;
  }
  var _proto9 = ee.prototype;
  _proto9.getNodes = function getNodes() {
    return this.nodes || (this.nodes = this.createNodes()), this.nodes.map(function (t) {
      return t.cloneNode(!0);
    });
  };
  _proto9.invalidate = function invalidate() {
    var t;
    return this.nodes = null, this.childViews = [], null === (t = this.parentView) || void 0 === t ? void 0 : t.invalidate();
  };
  _proto9.invalidateViewForObject = function invalidateViewForObject(t) {
    var e;
    return null === (e = this.findViewForObject(t)) || void 0 === e ? void 0 : e.invalidate();
  };
  _proto9.findOrCreateCachedChildView = function findOrCreateCachedChildView(t, e, i) {
    var n = this.getCachedViewForObject(e);
    return n ? this.recordChildView(n) : (n = this.createChildView.apply(this, arguments), this.cacheViewForObject(n, e)), n;
  };
  _proto9.createChildView = function createChildView(t, e) {
    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    e instanceof Xt && (i.viewClass = t, t = ie);
    var n = new t(e, i);
    return this.recordChildView(n);
  };
  _proto9.recordChildView = function recordChildView(t) {
    return t.parentView = this, t.rootView = this.rootView, this.childViews.push(t), t;
  };
  _proto9.getAllChildViews = function getAllChildViews() {
    var t = [];
    return this.childViews.forEach(function (e) {
      t.push(e), t = t.concat(e.getAllChildViews());
    }), t;
  };
  _proto9.findElement = function findElement() {
    return this.findElementForObject(this.object);
  };
  _proto9.findElementForObject = function findElementForObject(t) {
    var e = null == t ? void 0 : t.id;
    if (e) return this.rootView.element.querySelector("[data-trix-id='".concat(e, "']"));
  };
  _proto9.findViewForObject = function findViewForObject(t) {
    for (var _iterator = _createForOfIteratorHelperLoose(this.getAllChildViews()), _step; !(_step = _iterator()).done;) {
      var _e7 = _step.value;
      if (_e7.object === t) return _e7;
    }
  };
  _proto9.getViewCache = function getViewCache() {
    return this.rootView !== this ? this.rootView.getViewCache() : this.isViewCachingEnabled() ? (this.viewCache || (this.viewCache = {}), this.viewCache) : void 0;
  };
  _proto9.isViewCachingEnabled = function isViewCachingEnabled() {
    return !1 !== this.shouldCacheViews;
  };
  _proto9.enableViewCaching = function enableViewCaching() {
    this.shouldCacheViews = !0;
  };
  _proto9.disableViewCaching = function disableViewCaching() {
    this.shouldCacheViews = !1;
  };
  _proto9.getCachedViewForObject = function getCachedViewForObject(t) {
    var e;
    return null === (e = this.getViewCache()) || void 0 === e ? void 0 : e[t.getCacheKey()];
  };
  _proto9.cacheViewForObject = function cacheViewForObject(t, e) {
    var i = this.getViewCache();
    i && (i[e.getCacheKey()] = t);
  };
  _proto9.garbageCollectCachedViews = function garbageCollectCachedViews() {
    var t = this.getViewCache();
    if (t) {
      var _e8 = this.getAllChildViews().concat(this).map(function (t) {
        return t.object.getCacheKey();
      });
      for (var _i9 in t) _e8.includes(_i9) || delete t[_i9];
    }
  };
  return ee;
}(z);
var ie = /*#__PURE__*/function (_ee) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ie, _ee);
  function ie() {
    var _this12;
    _this12 = _ee.apply(this, arguments) || this, _this12.objectGroup = _this12.object, _this12.viewClass = _this12.options.viewClass, delete _this12.options.viewClass;
    return _this12;
  }
  var _proto10 = ie.prototype;
  _proto10.getChildViews = function getChildViews() {
    var _this13 = this;
    return this.childViews.length || Array.from(this.objectGroup.getObjects()).forEach(function (t) {
      _this13.findOrCreateCachedChildView(_this13.viewClass, t, _this13.options);
    }), this.childViews;
  };
  _proto10.createNodes = function createNodes() {
    var t = this.createContainerElement();
    return this.getChildViews().forEach(function (e) {
      Array.from(e.getNodes()).forEach(function (e) {
        t.appendChild(e);
      });
    }), [t];
  };
  _proto10.createContainerElement = function createContainerElement() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.objectGroup.getDepth();
    return this.getChildViews()[0].createContainerElement(t);
  };
  return ie;
}(ee);
var ne = V.css;
var re = /*#__PURE__*/function (_ee2) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(re, _ee2);
  function re() {
    var _this14;
    _this14 = _ee2.apply(this, arguments) || this, _this14.attachment = _this14.object, _this14.attachment.uploadProgressDelegate = (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this14), _this14.attachmentPiece = _this14.options.piece;
    return _this14;
  }
  var _proto11 = re.prototype;
  _proto11.createContentNodes = function createContentNodes() {
    return [];
  };
  _proto11.createNodes = function createNodes() {
    var t;
    var e = t = k({
        tagName: "figure",
        className: this.getClassName(),
        data: this.getData(),
        editable: !1
      }),
      i = this.getHref();
    return i && (t = k({
      tagName: "a",
      editable: !1,
      attributes: {
        href: i,
        tabindex: -1
      }
    }), e.appendChild(t)), this.attachment.hasContent() ? t.innerHTML = this.attachment.getContent() : this.createContentNodes().forEach(function (e) {
      t.appendChild(e);
    }), t.appendChild(this.createCaptionElement()), this.attachment.isPending() && (this.progressElement = k({
      tagName: "progress",
      attributes: {
        "class": ne.attachmentProgress,
        value: this.attachment.getUploadProgress(),
        max: 100
      },
      data: {
        trixMutable: !0,
        trixStoreKey: ["progressElement", this.attachment.id].join("/")
      }
    }), e.appendChild(this.progressElement)), [oe("left"), e, oe("right")];
  };
  _proto11.createCaptionElement = function createCaptionElement() {
    var t = k({
        tagName: "figcaption",
        className: ne.attachmentCaption
      }),
      e = this.attachmentPiece.getCaption();
    if (e) t.classList.add("".concat(ne.attachmentCaption, "--edited")), t.textContent = e;else {
      var _e9, _i10;
      var _n5 = this.getCaptionConfig();
      if (_n5.name && (_e9 = this.attachment.getFilename()), _n5.size && (_i10 = this.attachment.getFormattedFilesize()), _e9) {
        var _i11 = k({
          tagName: "span",
          className: ne.attachmentName,
          textContent: _e9
        });
        t.appendChild(_i11);
      }
      if (_i10) {
        _e9 && t.appendChild(document.createTextNode(" "));
        var _n6 = k({
          tagName: "span",
          className: ne.attachmentSize,
          textContent: _i10
        });
        t.appendChild(_n6);
      }
    }
    return t;
  };
  _proto11.getClassName = function getClassName() {
    var t = [ne.attachment, "".concat(ne.attachment, "--").concat(this.attachment.getType())],
      e = this.attachment.getExtension();
    return e && t.push("".concat(ne.attachment, "--").concat(e)), t.join(" ");
  };
  _proto11.getData = function getData() {
    var t = {
        trixAttachment: JSON.stringify(this.attachment),
        trixContentType: this.attachment.getContentType(),
        trixId: this.attachment.id
      },
      e = this.attachmentPiece.attributes;
    return e.isEmpty() || (t.trixAttributes = JSON.stringify(e)), this.attachment.isPending() && (t.trixSerialize = !1), t;
  };
  _proto11.getHref = function getHref() {
    if (!se(this.attachment.getContent(), "a")) return this.attachment.getHref();
  };
  _proto11.getCaptionConfig = function getCaptionConfig() {
    var t;
    var e = this.attachment.getType(),
      n = Et(null === (t = i[e]) || void 0 === t ? void 0 : t.caption);
    return "file" === e && (n.name = !0), n;
  };
  _proto11.findProgressElement = function findProgressElement() {
    var t;
    return null === (t = this.findElement()) || void 0 === t ? void 0 : t.querySelector("progress");
  };
  _proto11.attachmentDidChangeUploadProgress = function attachmentDidChangeUploadProgress() {
    var t = this.attachment.getUploadProgress(),
      e = this.findProgressElement();
    e && (e.value = t);
  };
  return re;
}(ee);
var oe = function oe(t) {
    return k({
      tagName: "span",
      textContent: u,
      data: {
        trixCursorTarget: t,
        trixSerialize: !1
      }
    });
  },
  se = function se(t, e) {
    var i = k("div");
    return i.innerHTML = t || "", i.querySelector(e);
  };
var ae = /*#__PURE__*/function (_re) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ae, _re);
  function ae() {
    var _this15;
    _this15 = _re.apply(this, arguments) || this, _this15.attachment.previewDelegate = (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this15);
    return _this15;
  }
  var _proto12 = ae.prototype;
  _proto12.createContentNodes = function createContentNodes() {
    return this.image = k({
      tagName: "img",
      attributes: {
        src: ""
      },
      data: {
        trixMutable: !0
      }
    }), this.refresh(this.image), [this.image];
  };
  _proto12.createCaptionElement = function createCaptionElement() {
    var t = _re.prototype.createCaptionElement.apply(this, arguments);
    return t.textContent || t.setAttribute("data-trix-placeholder", l.captionPlaceholder), t;
  };
  _proto12.refresh = function refresh(t) {
    var e;
    t || (t = null === (e = this.findElement()) || void 0 === e ? void 0 : e.querySelector("img"));
    if (t) return this.updateAttributesForImage(t);
  };
  _proto12.updateAttributesForImage = function updateAttributesForImage(t) {
    var e = this.attachment.getURL(),
      i = this.attachment.getPreviewURL();
    if (t.src = i || e, i === e) t.removeAttribute("data-trix-serialized-attributes");else {
      var _i12 = JSON.stringify({
        src: e
      });
      t.setAttribute("data-trix-serialized-attributes", _i12);
    }
    var n = this.attachment.getWidth(),
      r = this.attachment.getHeight();
    null != n && (t.width = n), null != r && (t.height = r);
    var o = ["imageElement", this.attachment.id, t.src, t.width, t.height].join("/");
    t.dataset.trixStoreKey = o;
  };
  _proto12.attachmentDidChangeAttributes = function attachmentDidChangeAttributes() {
    return this.refresh(this.image), this.refresh();
  };
  return ae;
}(re);
var le = /*#__PURE__*/function (_ee3) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(le, _ee3);
  function le() {
    var _this16;
    _this16 = _ee3.apply(this, arguments) || this, _this16.piece = _this16.object, _this16.attributes = _this16.piece.getAttributes(), _this16.textConfig = _this16.options.textConfig, _this16.context = _this16.options.context, _this16.piece.attachment ? _this16.attachment = _this16.piece.attachment : _this16.string = _this16.piece.toString();
    return _this16;
  }
  var _proto13 = le.prototype;
  _proto13.createNodes = function createNodes() {
    var t = this.attachment ? this.createAttachmentNodes() : this.createStringNodes();
    var e = this.createElement();
    if (e) {
      var _i13 = function (t) {
        for (; null !== (e = t) && void 0 !== e && e.firstElementChild;) {
          var e;
          t = t.firstElementChild;
        }
        return t;
      }(e);
      Array.from(t).forEach(function (t) {
        _i13.appendChild(t);
      }), t = [e];
    }
    return t;
  };
  _proto13.createAttachmentNodes = function createAttachmentNodes() {
    var t = this.attachment.isPreviewable() ? ae : re;
    return this.createChildView(t, this.piece.attachment, {
      piece: this.piece
    }).getNodes();
  };
  _proto13.createStringNodes = function createStringNodes() {
    var t;
    if (null !== (t = this.textConfig) && void 0 !== t && t.plaintext) return [document.createTextNode(this.string)];
    {
      var _t6 = [],
        _e10 = this.string.split("\n");
      for (var _i14 = 0; _i14 < _e10.length; _i14++) {
        var _n7 = _e10[_i14];
        if (_i14 > 0) {
          var _e11 = k("br");
          _t6.push(_e11);
        }
        if (_n7.length) {
          var _e12 = document.createTextNode(this.preserveSpaces(_n7));
          _t6.push(_e12);
        }
      }
      return _t6;
    }
  };
  _proto13.createElement = function createElement() {
    var t, e, i;
    var n = {};
    for (e in this.attributes) {
      i = this.attributes[e];
      var _o2 = pt(e);
      if (_o2) {
        if (_o2.tagName) {
          var r;
          var _e13 = k(_o2.tagName);
          r ? (r.appendChild(_e13), r = _e13) : t = r = _e13;
        }
        if (_o2.styleProperty && (n[_o2.styleProperty] = i), _o2.style) for (e in _o2.style) i = _o2.style[e], n[e] = i;
      }
    }
    if (Object.keys(n).length) for (e in t || (t = k("span")), n) i = n[e], t.style[e] = i;
    return t;
  };
  _proto13.createContainerElement = function createContainerElement() {
    for (var _t7 in this.attributes) {
      var _e14 = this.attributes[_t7],
        _i15 = pt(_t7);
      if (_i15 && _i15.groupTagName) {
        var _n8 = {};
        return _n8[_t7] = _e14, k(_i15.groupTagName, _n8);
      }
    }
  };
  _proto13.preserveSpaces = function preserveSpaces(t) {
    return this.context.isLast && (t = t.replace(/\ $/, d)), t = t.replace(/(\S)\ {3}(\S)/g, "$1 ".concat(d, " $2")).replace(/\ {2}/g, "".concat(d, " ")).replace(/\ {2}/g, " ".concat(d)), (this.context.isFirst || this.context.followsWhitespace) && (t = t.replace(/^\ /, d)), t;
  };
  return le;
}(ee);
var ce = /*#__PURE__*/function (_ee4) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ce, _ee4);
  function ce() {
    var _this17;
    _this17 = _ee4.apply(this, arguments) || this, _this17.text = _this17.object, _this17.textConfig = _this17.options.textConfig;
    return _this17;
  }
  var _proto14 = ce.prototype;
  _proto14.createNodes = function createNodes() {
    var t = [],
      e = Xt.groupObjects(this.getPieces()),
      i = e.length - 1;
    for (var _r2 = 0; _r2 < e.length; _r2++) {
      var _o3 = e[_r2],
        _s2 = {};
      0 === _r2 && (_s2.isFirst = !0), _r2 === i && (_s2.isLast = !0), he(n) && (_s2.followsWhitespace = !0);
      var _a = this.findOrCreateCachedChildView(le, _o3, {
        textConfig: this.textConfig,
        context: _s2
      });
      t.push.apply(t, Array.from(_a.getNodes() || []));
      var n = _o3;
    }
    return t;
  };
  _proto14.getPieces = function getPieces() {
    return Array.from(this.text.getPieces()).filter(function (t) {
      return !t.hasAttribute("blockBreak");
    });
  };
  return ce;
}(ee);
var he = function he(t) {
    return /\s$/.test(null == t ? void 0 : t.toString());
  },
  ue = V.css;
var de = /*#__PURE__*/function (_ee5) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(de, _ee5);
  function de() {
    var _this18;
    _this18 = _ee5.apply(this, arguments) || this, _this18.block = _this18.object, _this18.attributes = _this18.block.getAttributes();
    return _this18;
  }
  var _proto15 = de.prototype;
  _proto15.createNodes = function createNodes() {
    var t = [document.createComment("block")];
    if (this.block.isEmpty()) t.push(k("br"));else {
      var e;
      var _i16 = null === (e = gt(this.block.getLastAttribute())) || void 0 === e ? void 0 : e.text,
        _n9 = this.findOrCreateCachedChildView(ce, this.block.text, {
          textConfig: _i16
        });
      t.push.apply(t, Array.from(_n9.getNodes() || [])), this.shouldAddExtraNewlineElement() && t.push(k("br"));
    }
    if (this.attributes.length) return t;
    {
      var _e15;
      var _i17 = n["default"].tagName;
      this.block.isRTL() && (_e15 = {
        dir: "rtl"
      });
      var _r3 = k({
        tagName: _i17,
        attributes: _e15
      });
      return t.forEach(function (t) {
        return _r3.appendChild(t);
      }), [_r3];
    }
  };
  _proto15.createContainerElement = function createContainerElement(t) {
    var e, i;
    var n = this.attributes[t],
      _gt = gt(n),
      r = _gt.tagName;
    if (0 === t && this.block.isRTL() && (e = {
      dir: "rtl"
    }), "attachmentGallery" === n) {
      var _t8 = this.block.getBlockBreakPosition();
      i = "".concat(ue.attachmentGallery, " ").concat(ue.attachmentGallery, "--").concat(_t8);
    }
    return k({
      tagName: r,
      className: i,
      attributes: e
    });
  };
  _proto15.shouldAddExtraNewlineElement = function shouldAddExtraNewlineElement() {
    return /\n\n$/.test(this.block.toString());
  };
  return de;
}(ee);
var ge = /*#__PURE__*/function (_ee6) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ge, _ee6);
  ge.render = function render(t) {
    var e = k("div"),
      i = new this(t, {
        element: e
      });
    return i.render(), i.sync(), e;
  };
  function ge() {
    var _this19;
    _this19 = _ee6.apply(this, arguments) || this, _this19.element = _this19.options.element, _this19.elementStore = new Qt(), _this19.setDocument(_this19.object);
    return _this19;
  }
  var _proto16 = ge.prototype;
  _proto16.setDocument = function setDocument(t) {
    t.isEqualTo(this.document) || (this.document = this.object = t);
  };
  _proto16.render = function render() {
    var _this20 = this;
    if (this.childViews = [], this.shadowElement = k("div"), !this.document.isEmpty()) {
      var _t9 = Xt.groupObjects(this.document.getBlocks(), {
        asTree: !0
      });
      Array.from(_t9).forEach(function (t) {
        var e = _this20.findOrCreateCachedChildView(de, t);
        Array.from(e.getNodes()).map(function (t) {
          return _this20.shadowElement.appendChild(t);
        });
      });
    }
  };
  _proto16.isSynced = function isSynced() {
    return pe(this.shadowElement, this.element);
  };
  _proto16.sync = function sync() {
    var t = this.createDocumentFragmentForSync();
    for (; this.element.lastChild;) this.element.removeChild(this.element.lastChild);
    return this.element.appendChild(t), this.didSync();
  };
  _proto16.didSync = function didSync() {
    var _this21 = this;
    return this.elementStore.reset(me(this.element)), St(function () {
      return _this21.garbageCollectCachedViews();
    });
  };
  _proto16.createDocumentFragmentForSync = function createDocumentFragmentForSync() {
    var _this22 = this;
    var t = document.createDocumentFragment();
    return Array.from(this.shadowElement.childNodes).forEach(function (e) {
      t.appendChild(e.cloneNode(!0));
    }), Array.from(me(t)).forEach(function (t) {
      var e = _this22.elementStore.remove(t);
      e && t.parentNode.replaceChild(e, t);
    }), t;
  };
  return ge;
}(ee);
var me = function me(t) {
    return t.querySelectorAll("[data-trix-store-key]");
  },
  pe = function pe(t, e) {
    return fe(t.innerHTML) === fe(e.innerHTML);
  },
  fe = function fe(t) {
    return t.replace(/&nbsp;/g, " ");
  };
function be(t) {
  var e, i;
  function n(e, i) {
    try {
      var o = t[e](i),
        s = o.value,
        a = s instanceof ve;
      Promise.resolve(a ? s.v : s).then(function (i) {
        if (a) {
          var l = "return" === e ? "return" : "next";
          if (!s.k || i.done) return n(l, i);
          i = t[l](i).value;
        }
        r(o.done ? "return" : "normal", i);
      }, function (t) {
        n("throw", t);
      });
    } catch (t) {
      r("throw", t);
    }
  }
  function r(t, r) {
    switch (t) {
      case "return":
        e.resolve({
          value: r,
          done: !0
        });
        break;
      case "throw":
        e.reject(r);
        break;
      default:
        e.resolve({
          value: r,
          done: !1
        });
    }
    (e = e.next) ? n(e.key, e.arg) : i = null;
  }
  this._invoke = function (t, r) {
    return new Promise(function (o, s) {
      var a = {
        key: t,
        arg: r,
        resolve: o,
        reject: s,
        next: null
      };
      i ? i = i.next = a : (e = i = a, n(t, r));
    });
  }, "function" != typeof t["return"] && (this["return"] = void 0);
}
function ve(t, e) {
  this.v = t, this.k = e;
}
function Ae(t, e, i) {
  return (e = xe(e)) in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = i, t;
}
function xe(t) {
  var e = function (t, e) {
    if ("object" != typeof t || null === t) return t;
    var i = t[Symbol.toPrimitive];
    if (void 0 !== i) {
      var n = i.call(t, e || "default");
      if ("object" != typeof n) return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e ? String : Number)(t);
  }(t, "string");
  return "symbol" == typeof e ? e : String(e);
}
be.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () {
  return this;
}, be.prototype.next = function (t) {
  return this._invoke("next", t);
}, be.prototype["throw"] = function (t) {
  return this._invoke("throw", t);
}, be.prototype["return"] = function (t) {
  return this._invoke("return", t);
};
var ye = /*#__PURE__*/function (_nt2) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ye, _nt2);
  ye.registerType = function registerType(t, e) {
    e.type = t, this.types[t] = e;
  };
  ye.fromJSON = function fromJSON(t) {
    var e = this.types[t.type];
    if (e) return e.fromJSON(t);
  };
  function ye(t) {
    var _this23;
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    _this23 = _nt2.apply(this, arguments) || this, _this23.attributes = _t.box(e);
    return _this23;
  }
  var _proto17 = ye.prototype;
  _proto17.copyWithAttributes = function copyWithAttributes(t) {
    return new this.constructor(this.getValue(), t);
  };
  _proto17.copyWithAdditionalAttributes = function copyWithAdditionalAttributes(t) {
    return this.copyWithAttributes(this.attributes.merge(t));
  };
  _proto17.copyWithoutAttribute = function copyWithoutAttribute(t) {
    return this.copyWithAttributes(this.attributes.remove(t));
  };
  _proto17.copy = function copy() {
    return this.copyWithAttributes(this.attributes);
  };
  _proto17.getAttribute = function getAttribute(t) {
    return this.attributes.get(t);
  };
  _proto17.getAttributesHash = function getAttributesHash() {
    return this.attributes;
  };
  _proto17.getAttributes = function getAttributes() {
    return this.attributes.toObject();
  };
  _proto17.hasAttribute = function hasAttribute(t) {
    return this.attributes.has(t);
  };
  _proto17.hasSameStringValueAsPiece = function hasSameStringValueAsPiece(t) {
    return t && this.toString() === t.toString();
  };
  _proto17.hasSameAttributesAsPiece = function hasSameAttributesAsPiece(t) {
    return t && (this.attributes === t.attributes || this.attributes.isEqualTo(t.attributes));
  };
  _proto17.isBlockBreak = function isBlockBreak() {
    return !1;
  };
  _proto17.isEqualTo = function isEqualTo(t) {
    return _nt2.prototype.isEqualTo.apply(this, arguments) || this.hasSameConstructorAs(t) && this.hasSameStringValueAsPiece(t) && this.hasSameAttributesAsPiece(t);
  };
  _proto17.isEmpty = function isEmpty() {
    return 0 === this.length;
  };
  _proto17.isSerializable = function isSerializable() {
    return !0;
  };
  _proto17.toJSON = function toJSON() {
    return {
      type: this.constructor.type,
      attributes: this.getAttributes()
    };
  };
  _proto17.contentsForInspection = function contentsForInspection() {
    return {
      type: this.constructor.type,
      attributes: this.attributes.inspect()
    };
  };
  _proto17.canBeGrouped = function canBeGrouped() {
    return this.hasAttribute("href");
  };
  _proto17.canBeGroupedWith = function canBeGroupedWith(t) {
    return this.getAttribute("href") === t.getAttribute("href");
  };
  _proto17.getLength = function getLength() {
    return this.length;
  };
  _proto17.canBeConsolidatedWith = function canBeConsolidatedWith(t) {
    return !1;
  };
  return ye;
}(nt);
Ae(ye, "types", {});
var Ce = /*#__PURE__*/function (_te) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Ce, _te);
  function Ce(t) {
    var _this24;
    _this24 = _te.apply(this, arguments) || this, _this24.url = t;
    return _this24;
  }
  var _proto18 = Ce.prototype;
  _proto18.perform = function perform(t) {
    var _this25 = this;
    var e = new Image();
    e.onload = function () {
      return e.width = _this25.width = e.naturalWidth, e.height = _this25.height = e.naturalHeight, t(!0, e);
    }, e.onerror = function () {
      return t(!1);
    }, e.src = this.url;
  };
  return Ce;
}(te);
var Re = /*#__PURE__*/function (_nt3) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Re, _nt3);
  Re.attachmentForFile = function attachmentForFile(t) {
    var e = new this(this.attributesForFile(t));
    return e.setFile(t), e;
  };
  Re.attributesForFile = function attributesForFile(t) {
    return new _t({
      filename: t.name,
      filesize: t.size,
      contentType: t.type
    });
  };
  Re.fromJSON = function fromJSON(t) {
    return new this(t);
  };
  function Re() {
    var _this26;
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    _this26 = _nt3.call(this, t) || this, _this26.releaseFile = _this26.releaseFile.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this26)), _this26.attributes = _t.box(t), _this26.didChangeAttributes();
    return _this26;
  }
  var _proto19 = Re.prototype;
  _proto19.getAttribute = function getAttribute(t) {
    return this.attributes.get(t);
  };
  _proto19.hasAttribute = function hasAttribute(t) {
    return this.attributes.has(t);
  };
  _proto19.getAttributes = function getAttributes() {
    return this.attributes.toObject();
  };
  _proto19.setAttributes = function setAttributes() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    var e = this.attributes.merge(t);
    var i, n, r, o;
    if (!this.attributes.isEqualTo(e)) return this.attributes = e, this.didChangeAttributes(), null === (i = this.previewDelegate) || void 0 === i || null === (n = i.attachmentDidChangeAttributes) || void 0 === n || n.call(i, this), null === (r = this.delegate) || void 0 === r || null === (o = r.attachmentDidChangeAttributes) || void 0 === o ? void 0 : o.call(r, this);
  };
  _proto19.didChangeAttributes = function didChangeAttributes() {
    if (this.isPreviewable()) return this.preloadURL();
  };
  _proto19.isPending = function isPending() {
    return null != this.file && !(this.getURL() || this.getHref());
  };
  _proto19.isPreviewable = function isPreviewable() {
    return this.attributes.has("previewable") ? this.attributes.get("previewable") : Re.previewablePattern.test(this.getContentType());
  };
  _proto19.getType = function getType() {
    return this.hasContent() ? "content" : this.isPreviewable() ? "preview" : "file";
  };
  _proto19.getURL = function getURL() {
    return this.attributes.get("url");
  };
  _proto19.getHref = function getHref() {
    return this.attributes.get("href");
  };
  _proto19.getFilename = function getFilename() {
    return this.attributes.get("filename") || "";
  };
  _proto19.getFilesize = function getFilesize() {
    return this.attributes.get("filesize");
  };
  _proto19.getFormattedFilesize = function getFormattedFilesize() {
    var t = this.attributes.get("filesize");
    return "number" == typeof t ? h.formatter(t) : "";
  };
  _proto19.getExtension = function getExtension() {
    var t;
    return null === (t = this.getFilename().match(/\.(\w+)$/)) || void 0 === t ? void 0 : t[1].toLowerCase();
  };
  _proto19.getContentType = function getContentType() {
    return this.attributes.get("contentType");
  };
  _proto19.hasContent = function hasContent() {
    return this.attributes.has("content");
  };
  _proto19.getContent = function getContent() {
    return this.attributes.get("content");
  };
  _proto19.getWidth = function getWidth() {
    return this.attributes.get("width");
  };
  _proto19.getHeight = function getHeight() {
    return this.attributes.get("height");
  };
  _proto19.getFile = function getFile() {
    return this.file;
  };
  _proto19.setFile = function setFile(t) {
    if (this.file = t, this.isPreviewable()) return this.preloadFile();
  };
  _proto19.releaseFile = function releaseFile() {
    this.releasePreloadedFile(), this.file = null;
  };
  _proto19.getUploadProgress = function getUploadProgress() {
    return null != this.uploadProgress ? this.uploadProgress : 0;
  };
  _proto19.setUploadProgress = function setUploadProgress(t) {
    var e, i;
    if (this.uploadProgress !== t) return this.uploadProgress = t, null === (e = this.uploadProgressDelegate) || void 0 === e || null === (i = e.attachmentDidChangeUploadProgress) || void 0 === i ? void 0 : i.call(e, this);
  };
  _proto19.toJSON = function toJSON() {
    return this.getAttributes();
  };
  _proto19.getCacheKey = function getCacheKey() {
    return [_nt3.prototype.getCacheKey.apply(this, arguments), this.attributes.getCacheKey(), this.getPreviewURL()].join("/");
  };
  _proto19.getPreviewURL = function getPreviewURL() {
    return this.previewURL || this.preloadingURL;
  };
  _proto19.setPreviewURL = function setPreviewURL(t) {
    var e, i, n, r;
    if (t !== this.getPreviewURL()) return this.previewURL = t, null === (e = this.previewDelegate) || void 0 === e || null === (i = e.attachmentDidChangeAttributes) || void 0 === i || i.call(e, this), null === (n = this.delegate) || void 0 === n || null === (r = n.attachmentDidChangePreviewURL) || void 0 === r ? void 0 : r.call(n, this);
  };
  _proto19.preloadURL = function preloadURL() {
    return this.preload(this.getURL(), this.releaseFile);
  };
  _proto19.preloadFile = function preloadFile() {
    if (this.file) return this.fileObjectURL = URL.createObjectURL(this.file), this.preload(this.fileObjectURL);
  };
  _proto19.releasePreloadedFile = function releasePreloadedFile() {
    this.fileObjectURL && (URL.revokeObjectURL(this.fileObjectURL), this.fileObjectURL = null);
  };
  _proto19.preload = function preload(t, e) {
    var _this27 = this;
    if (t && t !== this.getPreviewURL()) {
      this.preloadingURL = t;
      return new Ce(t).then(function (i) {
        var n = i.width,
          r = i.height;
        return _this27.getWidth() && _this27.getHeight() || _this27.setAttributes({
          width: n,
          height: r
        }), _this27.preloadingURL = null, _this27.setPreviewURL(t), null == e ? void 0 : e();
      })["catch"](function () {
        return _this27.preloadingURL = null, null == e ? void 0 : e();
      });
    }
  };
  return Re;
}(nt);
Ae(Re, "previewablePattern", /^image(\/(gif|png|webp|jpe?g)|$)/);
var Se = /*#__PURE__*/function (_ye) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Se, _ye);
  Se.fromJSON = function fromJSON(t) {
    return new this(Re.fromJSON(t.attachment), t.attributes);
  };
  function Se(t) {
    var _this28;
    _this28 = _ye.apply(this, arguments) || this, _this28.attachment = t, _this28.length = 1, _this28.ensureAttachmentExclusivelyHasAttribute("href"), _this28.attachment.hasContent() || _this28.removeProhibitedAttributes();
    return _this28;
  }
  var _proto20 = Se.prototype;
  _proto20.ensureAttachmentExclusivelyHasAttribute = function ensureAttachmentExclusivelyHasAttribute(t) {
    this.hasAttribute(t) && (this.attachment.hasAttribute(t) || this.attachment.setAttributes(this.attributes.slice([t])), this.attributes = this.attributes.remove(t));
  };
  _proto20.removeProhibitedAttributes = function removeProhibitedAttributes() {
    var t = this.attributes.slice(Se.permittedAttributes);
    t.isEqualTo(this.attributes) || (this.attributes = t);
  };
  _proto20.getValue = function getValue() {
    return this.attachment;
  };
  _proto20.isSerializable = function isSerializable() {
    return !this.attachment.isPending();
  };
  _proto20.getCaption = function getCaption() {
    return this.attributes.get("caption") || "";
  };
  _proto20.isEqualTo = function isEqualTo(t) {
    var e;
    return _ye.prototype.isEqualTo.call(this, t) && this.attachment.id === (null == t || null === (e = t.attachment) || void 0 === e ? void 0 : e.id);
  };
  _proto20.toString = function toString() {
    return "￼";
  };
  _proto20.toJSON = function toJSON() {
    var t = _ye.prototype.toJSON.apply(this, arguments);
    return t.attachment = this.attachment, t;
  };
  _proto20.getCacheKey = function getCacheKey() {
    return [_ye.prototype.getCacheKey.apply(this, arguments), this.attachment.getCacheKey()].join("/");
  };
  _proto20.toConsole = function toConsole() {
    return JSON.stringify(this.toString());
  };
  return Se;
}(ye);
Ae(Se, "permittedAttributes", ["caption", "presentation"]), ye.registerType("attachment", Se);
var Ee = /*#__PURE__*/function (_ye2) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Ee, _ye2);
  Ee.fromJSON = function fromJSON(t) {
    return new this(t.string, t.attributes);
  };
  function Ee(t) {
    var _this29;
    _this29 = _ye2.apply(this, arguments) || this, _this29.string = function (t) {
      return t.replace(/\r\n/g, "\n");
    }(t), _this29.length = _this29.string.length;
    return _this29;
  }
  var _proto21 = Ee.prototype;
  _proto21.getValue = function getValue() {
    return this.string;
  };
  _proto21.toString = function toString() {
    return this.string.toString();
  };
  _proto21.isBlockBreak = function isBlockBreak() {
    return "\n" === this.toString() && !0 === this.getAttribute("blockBreak");
  };
  _proto21.toJSON = function toJSON() {
    var t = _ye2.prototype.toJSON.apply(this, arguments);
    return t.string = this.string, t;
  };
  _proto21.canBeConsolidatedWith = function canBeConsolidatedWith(t) {
    return t && this.hasSameConstructorAs(t) && this.hasSameAttributesAsPiece(t);
  };
  _proto21.consolidateWith = function consolidateWith(t) {
    return new this.constructor(this.toString() + t.toString(), this.attributes);
  };
  _proto21.splitAtOffset = function splitAtOffset(t) {
    var e, i;
    return 0 === t ? (e = null, i = this) : t === this.length ? (e = this, i = null) : (e = new this.constructor(this.string.slice(0, t), this.attributes), i = new this.constructor(this.string.slice(t), this.attributes)), [e, i];
  };
  _proto21.toConsole = function toConsole() {
    var t = this.string;
    return t.length > 15 && (t = t.slice(0, 14) + "…"), JSON.stringify(t.toString());
  };
  return Ee;
}(ye);
ye.registerType("string", Ee);
var ke = /*#__PURE__*/function (_nt4) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ke, _nt4);
  ke.box = function box(t) {
    return t instanceof this ? t : new this(t);
  };
  function ke() {
    var _this30;
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    _this30 = _nt4.apply(this, arguments) || this, _this30.objects = t.slice(0), _this30.length = _this30.objects.length;
    return _this30;
  }
  var _proto22 = ke.prototype;
  _proto22.indexOf = function indexOf(t) {
    return this.objects.indexOf(t);
  };
  _proto22.splice = function splice() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
    return new this.constructor(ot.apply(void 0, [this.objects].concat(e)));
  };
  _proto22.eachObject = function eachObject(t) {
    return this.objects.map(function (e, i) {
      return t(e, i);
    });
  };
  _proto22.insertObjectAtIndex = function insertObjectAtIndex(t, e) {
    return this.splice(e, 0, t);
  };
  _proto22.insertSplittableListAtIndex = function insertSplittableListAtIndex(t, e) {
    return this.splice.apply(this, [e, 0].concat(t.objects));
  };
  _proto22.insertSplittableListAtPosition = function insertSplittableListAtPosition(t, e) {
    var _this$splitObjectAtPo = this.splitObjectAtPosition(e),
      i = _this$splitObjectAtPo[0],
      n = _this$splitObjectAtPo[1];
    return new this.constructor(i).insertSplittableListAtIndex(t, n);
  };
  _proto22.editObjectAtIndex = function editObjectAtIndex(t, e) {
    return this.replaceObjectAtIndex(e(this.objects[t]), t);
  };
  _proto22.replaceObjectAtIndex = function replaceObjectAtIndex(t, e) {
    return this.splice(e, 1, t);
  };
  _proto22.removeObjectAtIndex = function removeObjectAtIndex(t) {
    return this.splice(t, 1);
  };
  _proto22.getObjectAtIndex = function getObjectAtIndex(t) {
    return this.objects[t];
  };
  _proto22.getSplittableListInRange = function getSplittableListInRange(t) {
    var _this$splitObjectsAtR = this.splitObjectsAtRange(t),
      e = _this$splitObjectsAtR[0],
      i = _this$splitObjectsAtR[1],
      n = _this$splitObjectsAtR[2];
    return new this.constructor(e.slice(i, n + 1));
  };
  _proto22.selectSplittableList = function selectSplittableList(t) {
    var e = this.objects.filter(function (e) {
      return t(e);
    });
    return new this.constructor(e);
  };
  _proto22.removeObjectsInRange = function removeObjectsInRange(t) {
    var _this$splitObjectsAtR2 = this.splitObjectsAtRange(t),
      e = _this$splitObjectsAtR2[0],
      i = _this$splitObjectsAtR2[1],
      n = _this$splitObjectsAtR2[2];
    return new this.constructor(e).splice(i, n - i + 1);
  };
  _proto22.transformObjectsInRange = function transformObjectsInRange(t, e) {
    var _this$splitObjectsAtR3 = this.splitObjectsAtRange(t),
      i = _this$splitObjectsAtR3[0],
      n = _this$splitObjectsAtR3[1],
      r = _this$splitObjectsAtR3[2],
      o = i.map(function (t, i) {
        return n <= i && i <= r ? e(t) : t;
      });
    return new this.constructor(o);
  };
  _proto22.splitObjectsAtRange = function splitObjectsAtRange(t) {
    var _this$constructor$spl;
    var e,
      _this$splitObjectAtPo2 = this.splitObjectAtPosition(De(t)),
      i = _this$splitObjectAtPo2[0],
      n = _this$splitObjectAtPo2[1],
      r = _this$splitObjectAtPo2[2];
    return (_this$constructor$spl = new this.constructor(i).splitObjectAtPosition(we(t) + r), i = _this$constructor$spl[0], e = _this$constructor$spl[1]), [i, n, e - 1];
  };
  _proto22.getObjectAtPosition = function getObjectAtPosition(t) {
    var _this$findIndexAndOff = this.findIndexAndOffsetAtPosition(t),
      e = _this$findIndexAndOff.index;
    return this.objects[e];
  };
  _proto22.splitObjectAtPosition = function splitObjectAtPosition(t) {
    var e, i;
    var _this$findIndexAndOff2 = this.findIndexAndOffsetAtPosition(t),
      n = _this$findIndexAndOff2.index,
      r = _this$findIndexAndOff2.offset,
      o = this.objects.slice(0);
    if (null != n) {
      if (0 === r) e = n, i = 0;else {
        var _t10 = this.getObjectAtIndex(n),
          _t$splitAtOffset = _t10.splitAtOffset(r),
          _s3 = _t$splitAtOffset[0],
          _a2 = _t$splitAtOffset[1];
        o.splice(n, 1, _s3, _a2), e = n + 1, i = _s3.getLength() - r;
      }
    } else e = o.length, i = 0;
    return [o, e, i];
  };
  _proto22.consolidate = function consolidate() {
    var t = [];
    var e = this.objects[0];
    return this.objects.slice(1).forEach(function (i) {
      var n, r;
      null !== (n = (r = e).canBeConsolidatedWith) && void 0 !== n && n.call(r, i) ? e = e.consolidateWith(i) : (t.push(e), e = i);
    }), e && t.push(e), new this.constructor(t);
  };
  _proto22.consolidateFromIndexToIndex = function consolidateFromIndexToIndex(t, e) {
    var i = this.objects.slice(0).slice(t, e + 1),
      n = new this.constructor(i).consolidate().toArray();
    return this.splice.apply(this, [t, i.length].concat(n));
  };
  _proto22.findIndexAndOffsetAtPosition = function findIndexAndOffsetAtPosition(t) {
    var e,
      i = 0;
    for (e = 0; e < this.objects.length; e++) {
      var _n10 = i + this.objects[e].getLength();
      if (i <= t && t < _n10) return {
        index: e,
        offset: t - i
      };
      i = _n10;
    }
    return {
      index: null,
      offset: null
    };
  };
  _proto22.findPositionAtIndexAndOffset = function findPositionAtIndexAndOffset(t, e) {
    var i = 0;
    for (var _n11 = 0; _n11 < this.objects.length; _n11++) {
      var _r4 = this.objects[_n11];
      if (_n11 < t) i += _r4.getLength();else if (_n11 === t) {
        i += e;
        break;
      }
    }
    return i;
  };
  _proto22.getEndPosition = function getEndPosition() {
    var _this31 = this;
    return null == this.endPosition && (this.endPosition = 0, this.objects.forEach(function (t) {
      return _this31.endPosition += t.getLength();
    })), this.endPosition;
  };
  _proto22.toString = function toString() {
    return this.objects.join("");
  };
  _proto22.toArray = function toArray() {
    return this.objects.slice(0);
  };
  _proto22.toJSON = function toJSON() {
    return this.toArray();
  };
  _proto22.isEqualTo = function isEqualTo(t) {
    return _nt4.prototype.isEqualTo.apply(this, arguments) || Le(this.objects, null == t ? void 0 : t.objects);
  };
  _proto22.contentsForInspection = function contentsForInspection() {
    return {
      objects: "[".concat(this.objects.map(function (t) {
        return t.inspect();
      }).join(", "), "]")
    };
  };
  return ke;
}(nt);
var Le = function Le(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (t.length !== e.length) return !1;
    var i = !0;
    for (var _n12 = 0; _n12 < t.length; _n12++) {
      var _r5 = t[_n12];
      i && !_r5.isEqualTo(e[_n12]) && (i = !1);
    }
    return i;
  },
  De = function De(t) {
    return t[0];
  },
  we = function we(t) {
    return t[1];
  };
var Te = /*#__PURE__*/function (_nt5) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Te, _nt5);
  Te.textForAttachmentWithAttributes = function textForAttachmentWithAttributes(t, e) {
    return new this([new Se(t, e)]);
  };
  Te.textForStringWithAttributes = function textForStringWithAttributes(t, e) {
    return new this([new Ee(t, e)]);
  };
  Te.fromJSON = function fromJSON(t) {
    return new this(Array.from(t).map(function (t) {
      return ye.fromJSON(t);
    }));
  };
  function Te() {
    var _this32;
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    _this32 = _nt5.apply(this, arguments) || this;
    var e = t.filter(function (t) {
      return !t.isEmpty();
    });
    _this32.pieceList = new ke(e);
    return _this32;
  }
  var _proto23 = Te.prototype;
  _proto23.copy = function copy() {
    return this.copyWithPieceList(this.pieceList);
  };
  _proto23.copyWithPieceList = function copyWithPieceList(t) {
    return new this.constructor(t.consolidate().toArray());
  };
  _proto23.copyUsingObjectMap = function copyUsingObjectMap(t) {
    var e = this.getPieces().map(function (e) {
      return t.find(e) || e;
    });
    return new this.constructor(e);
  };
  _proto23.appendText = function appendText(t) {
    return this.insertTextAtPosition(t, this.getLength());
  };
  _proto23.insertTextAtPosition = function insertTextAtPosition(t, e) {
    return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t.pieceList, e));
  };
  _proto23.removeTextAtRange = function removeTextAtRange(t) {
    return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t));
  };
  _proto23.replaceTextAtRange = function replaceTextAtRange(t, e) {
    return this.removeTextAtRange(e).insertTextAtPosition(t, e[0]);
  };
  _proto23.moveTextFromRangeToPosition = function moveTextFromRangeToPosition(t, e) {
    if (t[0] <= e && e <= t[1]) return;
    var i = this.getTextAtRange(t),
      n = i.getLength();
    return t[0] < e && (e -= n), this.removeTextAtRange(t).insertTextAtPosition(i, e);
  };
  _proto23.addAttributeAtRange = function addAttributeAtRange(t, e, i) {
    var n = {};
    return n[t] = e, this.addAttributesAtRange(n, i);
  };
  _proto23.addAttributesAtRange = function addAttributesAtRange(t, e) {
    return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
      return e.copyWithAdditionalAttributes(t);
    }));
  };
  _proto23.removeAttributeAtRange = function removeAttributeAtRange(t, e) {
    return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
      return e.copyWithoutAttribute(t);
    }));
  };
  _proto23.setAttributesAtRange = function setAttributesAtRange(t, e) {
    return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
      return e.copyWithAttributes(t);
    }));
  };
  _proto23.getAttributesAtPosition = function getAttributesAtPosition(t) {
    var e;
    return (null === (e = this.pieceList.getObjectAtPosition(t)) || void 0 === e ? void 0 : e.getAttributes()) || {};
  };
  _proto23.getCommonAttributes = function getCommonAttributes() {
    var t = Array.from(this.pieceList.toArray()).map(function (t) {
      return t.getAttributes();
    });
    return _t.fromCommonAttributesOfObjects(t).toObject();
  };
  _proto23.getCommonAttributesAtRange = function getCommonAttributesAtRange(t) {
    return this.getTextAtRange(t).getCommonAttributes() || {};
  };
  _proto23.getExpandedRangeForAttributeAtOffset = function getExpandedRangeForAttributeAtOffset(t, e) {
    var i,
      n = i = e;
    var r = this.getLength();
    for (; n > 0 && this.getCommonAttributesAtRange([n - 1, i])[t];) n--;
    for (; i < r && this.getCommonAttributesAtRange([e, i + 1])[t];) i++;
    return [n, i];
  };
  _proto23.getTextAtRange = function getTextAtRange(t) {
    return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t));
  };
  _proto23.getStringAtRange = function getStringAtRange(t) {
    return this.pieceList.getSplittableListInRange(t).toString();
  };
  _proto23.getStringAtPosition = function getStringAtPosition(t) {
    return this.getStringAtRange([t, t + 1]);
  };
  _proto23.startsWithString = function startsWithString(t) {
    return this.getStringAtRange([0, t.length]) === t;
  };
  _proto23.endsWithString = function endsWithString(t) {
    var e = this.getLength();
    return this.getStringAtRange([e - t.length, e]) === t;
  };
  _proto23.getAttachmentPieces = function getAttachmentPieces() {
    return this.pieceList.toArray().filter(function (t) {
      return !!t.attachment;
    });
  };
  _proto23.getAttachments = function getAttachments() {
    return this.getAttachmentPieces().map(function (t) {
      return t.attachment;
    });
  };
  _proto23.getAttachmentAndPositionById = function getAttachmentAndPositionById(t) {
    var e = 0;
    for (var _iterator2 = _createForOfIteratorHelperLoose(this.pieceList.toArray()), _step2; !(_step2 = _iterator2()).done;) {
      var _n13 = _step2.value;
      var i;
      if ((null === (i = _n13.attachment) || void 0 === i ? void 0 : i.id) === t) return {
        attachment: _n13.attachment,
        position: e
      };
      e += _n13.length;
    }
    return {
      attachment: null,
      position: null
    };
  };
  _proto23.getAttachmentById = function getAttachmentById(t) {
    var _this$getAttachmentAn = this.getAttachmentAndPositionById(t),
      e = _this$getAttachmentAn.attachment;
    return e;
  };
  _proto23.getRangeOfAttachment = function getRangeOfAttachment(t) {
    var e = this.getAttachmentAndPositionById(t.id),
      i = e.position;
    if (t = e.attachment) return [i, i + 1];
  };
  _proto23.updateAttributesForAttachment = function updateAttributesForAttachment(t, e) {
    var i = this.getRangeOfAttachment(e);
    return i ? this.addAttributesAtRange(t, i) : this;
  };
  _proto23.getLength = function getLength() {
    return this.pieceList.getEndPosition();
  };
  _proto23.isEmpty = function isEmpty() {
    return 0 === this.getLength();
  };
  _proto23.isEqualTo = function isEqualTo(t) {
    var e;
    return _nt5.prototype.isEqualTo.call(this, t) || (null == t || null === (e = t.pieceList) || void 0 === e ? void 0 : e.isEqualTo(this.pieceList));
  };
  _proto23.isBlockBreak = function isBlockBreak() {
    return 1 === this.getLength() && this.pieceList.getObjectAtIndex(0).isBlockBreak();
  };
  _proto23.eachPiece = function eachPiece(t) {
    return this.pieceList.eachObject(t);
  };
  _proto23.getPieces = function getPieces() {
    return this.pieceList.toArray();
  };
  _proto23.getPieceAtPosition = function getPieceAtPosition(t) {
    return this.pieceList.getObjectAtPosition(t);
  };
  _proto23.contentsForInspection = function contentsForInspection() {
    return {
      pieceList: this.pieceList.inspect()
    };
  };
  _proto23.toSerializableText = function toSerializableText() {
    var t = this.pieceList.selectSplittableList(function (t) {
      return t.isSerializable();
    });
    return this.copyWithPieceList(t);
  };
  _proto23.toString = function toString() {
    return this.pieceList.toString();
  };
  _proto23.toJSON = function toJSON() {
    return this.pieceList.toJSON();
  };
  _proto23.toConsole = function toConsole() {
    return JSON.stringify(this.pieceList.toArray().map(function (t) {
      return JSON.parse(t.toConsole());
    }));
  };
  _proto23.getDirection = function getDirection() {
    return at(this.toString());
  };
  _proto23.isRTL = function isRTL() {
    return "rtl" === this.getDirection();
  };
  return Te;
}(nt);
var Be = /*#__PURE__*/function (_nt6) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Be, _nt6);
  Be.fromJSON = function fromJSON(t) {
    return new this(Te.fromJSON(t.text), t.attributes);
  };
  function Be(t, e) {
    var _this33;
    _this33 = _nt6.apply(this, arguments) || this, _this33.text = Fe(t || new Te()), _this33.attributes = e || [];
    return _this33;
  }
  var _proto24 = Be.prototype;
  _proto24.isEmpty = function isEmpty() {
    return this.text.isBlockBreak();
  };
  _proto24.isEqualTo = function isEqualTo(t) {
    return !!_nt6.prototype.isEqualTo.call(this, t) || this.text.isEqualTo(null == t ? void 0 : t.text) && rt(this.attributes, null == t ? void 0 : t.attributes);
  };
  _proto24.copyWithText = function copyWithText(t) {
    return new Be(t, this.attributes);
  };
  _proto24.copyWithoutText = function copyWithoutText() {
    return this.copyWithText(null);
  };
  _proto24.copyWithAttributes = function copyWithAttributes(t) {
    return new Be(this.text, t);
  };
  _proto24.copyWithoutAttributes = function copyWithoutAttributes() {
    return this.copyWithAttributes(null);
  };
  _proto24.copyUsingObjectMap = function copyUsingObjectMap(t) {
    var e = t.find(this.text);
    return e ? this.copyWithText(e) : this.copyWithText(this.text.copyUsingObjectMap(t));
  };
  _proto24.addAttribute = function addAttribute(t) {
    var e = this.attributes.concat(je(t));
    return this.copyWithAttributes(e);
  };
  _proto24.removeAttribute = function removeAttribute(t) {
    var _gt2 = gt(t),
      e = _gt2.listAttribute,
      i = Ue(Ue(this.attributes, t), e);
    return this.copyWithAttributes(i);
  };
  _proto24.removeLastAttribute = function removeLastAttribute() {
    return this.removeAttribute(this.getLastAttribute());
  };
  _proto24.getLastAttribute = function getLastAttribute() {
    return We(this.attributes);
  };
  _proto24.getAttributes = function getAttributes() {
    return this.attributes.slice(0);
  };
  _proto24.getAttributeLevel = function getAttributeLevel() {
    return this.attributes.length;
  };
  _proto24.getAttributeAtLevel = function getAttributeAtLevel(t) {
    return this.attributes[t - 1];
  };
  _proto24.hasAttribute = function hasAttribute(t) {
    return this.attributes.includes(t);
  };
  _proto24.hasAttributes = function hasAttributes() {
    return this.getAttributeLevel() > 0;
  };
  _proto24.getLastNestableAttribute = function getLastNestableAttribute() {
    return We(this.getNestableAttributes());
  };
  _proto24.getNestableAttributes = function getNestableAttributes() {
    return this.attributes.filter(function (t) {
      return gt(t).nestable;
    });
  };
  _proto24.getNestingLevel = function getNestingLevel() {
    return this.getNestableAttributes().length;
  };
  _proto24.decreaseNestingLevel = function decreaseNestingLevel() {
    var t = this.getLastNestableAttribute();
    return t ? this.removeAttribute(t) : this;
  };
  _proto24.increaseNestingLevel = function increaseNestingLevel() {
    var t = this.getLastNestableAttribute();
    if (t) {
      var _e16 = this.attributes.lastIndexOf(t),
        _i18 = ot.apply(void 0, [this.attributes, _e16 + 1, 0].concat(je(t)));
      return this.copyWithAttributes(_i18);
    }
    return this;
  };
  _proto24.getListItemAttributes = function getListItemAttributes() {
    return this.attributes.filter(function (t) {
      return gt(t).listAttribute;
    });
  };
  _proto24.isListItem = function isListItem() {
    var t;
    return null === (t = gt(this.getLastAttribute())) || void 0 === t ? void 0 : t.listAttribute;
  };
  _proto24.isTerminalBlock = function isTerminalBlock() {
    var t;
    return null === (t = gt(this.getLastAttribute())) || void 0 === t ? void 0 : t.terminal;
  };
  _proto24.breaksOnReturn = function breaksOnReturn() {
    var t;
    return null === (t = gt(this.getLastAttribute())) || void 0 === t ? void 0 : t.breakOnReturn;
  };
  _proto24.findLineBreakInDirectionFromPosition = function findLineBreakInDirectionFromPosition(t, e) {
    var i = this.toString();
    var n;
    switch (t) {
      case "forward":
        n = i.indexOf("\n", e);
        break;
      case "backward":
        n = i.slice(0, e).lastIndexOf("\n");
    }
    if (-1 !== n) return n;
  };
  _proto24.contentsForInspection = function contentsForInspection() {
    return {
      text: this.text.inspect(),
      attributes: this.attributes
    };
  };
  _proto24.toString = function toString() {
    return this.text.toString();
  };
  _proto24.toJSON = function toJSON() {
    return {
      text: this.text,
      attributes: this.attributes
    };
  };
  _proto24.getDirection = function getDirection() {
    return this.text.getDirection();
  };
  _proto24.isRTL = function isRTL() {
    return this.text.isRTL();
  };
  _proto24.getLength = function getLength() {
    return this.text.getLength();
  };
  _proto24.canBeConsolidatedWith = function canBeConsolidatedWith(t) {
    return !this.hasAttributes() && !t.hasAttributes() && this.getDirection() === t.getDirection();
  };
  _proto24.consolidateWith = function consolidateWith(t) {
    var e = Te.textForStringWithAttributes("\n"),
      i = this.getTextWithoutBlockBreak().appendText(e);
    return this.copyWithText(i.appendText(t.text));
  };
  _proto24.splitAtOffset = function splitAtOffset(t) {
    var e, i;
    return 0 === t ? (e = null, i = this) : t === this.getLength() ? (e = this, i = null) : (e = this.copyWithText(this.text.getTextAtRange([0, t])), i = this.copyWithText(this.text.getTextAtRange([t, this.getLength()]))), [e, i];
  };
  _proto24.getBlockBreakPosition = function getBlockBreakPosition() {
    return this.text.getLength() - 1;
  };
  _proto24.getTextWithoutBlockBreak = function getTextWithoutBlockBreak() {
    return Oe(this.text) ? this.text.getTextAtRange([0, this.getBlockBreakPosition()]) : this.text.copy();
  };
  _proto24.canBeGrouped = function canBeGrouped(t) {
    return this.attributes[t];
  };
  _proto24.canBeGroupedWith = function canBeGroupedWith(t, e) {
    var i = t.getAttributes(),
      r = i[e],
      o = this.attributes[e];
    return o === r && !(!1 === gt(o).group && !function () {
      if (!ut) {
        ut = [];
        for (var _t11 in n) {
          var _e17 = n[_t11].listAttribute;
          null != _e17 && ut.push(_e17);
        }
      }
      return ut;
    }().includes(i[e + 1])) && (this.getDirection() === t.getDirection() || t.isEmpty());
  };
  return Be;
}(nt);
var Fe = function Fe(t) {
    return t = Ie(t), t = Ne(t);
  },
  Ie = function Ie(t) {
    var e = !1;
    var i = t.getPieces();
    var n = i.slice(0, i.length - 1);
    var r = i[i.length - 1];
    return r ? (n = n.map(function (t) {
      return t.isBlockBreak() ? (e = !0, Me(t)) : t;
    }), e ? new Te([].concat(n, [r])) : t) : t;
  },
  Pe = Te.textForStringWithAttributes("\n", {
    blockBreak: !0
  }),
  Ne = function Ne(t) {
    return Oe(t) ? t : t.appendText(Pe);
  },
  Oe = function Oe(t) {
    var e = t.getLength();
    if (0 === e) return !1;
    return t.getTextAtRange([e - 1, e]).isBlockBreak();
  },
  Me = function Me(t) {
    return t.copyWithoutAttribute("blockBreak");
  },
  je = function je(t) {
    var _gt3 = gt(t),
      e = _gt3.listAttribute;
    return e ? [e, t] : [t];
  },
  We = function We(t) {
    return t.slice(-1)[0];
  },
  Ue = function Ue(t, e) {
    var i = t.lastIndexOf(e);
    return -1 === i ? t : ot(t, i, 1);
  };
var qe = /*#__PURE__*/function (_nt7) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(qe, _nt7);
  qe.fromJSON = function fromJSON(t) {
    return new this(Array.from(t).map(function (t) {
      return Be.fromJSON(t);
    }));
  };
  qe.fromString = function fromString(t, e) {
    var i = Te.textForStringWithAttributes(t, e);
    return new this([new Be(i)]);
  };
  function qe() {
    var _this34;
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    _this34 = _nt7.apply(this, arguments) || this, 0 === t.length && (t = [new Be()]), _this34.blockList = ke.box(t);
    return _this34;
  }
  var _proto25 = qe.prototype;
  _proto25.isEmpty = function isEmpty() {
    var t = this.getBlockAtIndex(0);
    return 1 === this.blockList.length && t.isEmpty() && !t.hasAttributes();
  };
  _proto25.copy = function copy() {
    var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).consolidateBlocks ? this.blockList.consolidate().toArray() : this.blockList.toArray();
    return new this.constructor(t);
  };
  _proto25.copyUsingObjectsFromDocument = function copyUsingObjectsFromDocument(t) {
    var e = new Yt(t.getObjects());
    return this.copyUsingObjectMap(e);
  };
  _proto25.copyUsingObjectMap = function copyUsingObjectMap(t) {
    var e = this.getBlocks().map(function (e) {
      return t.find(e) || e.copyUsingObjectMap(t);
    });
    return new this.constructor(e);
  };
  _proto25.copyWithBaseBlockAttributes = function copyWithBaseBlockAttributes() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    var e = this.getBlocks().map(function (e) {
      var i = t.concat(e.getAttributes());
      return e.copyWithAttributes(i);
    });
    return new this.constructor(e);
  };
  _proto25.replaceBlock = function replaceBlock(t, e) {
    var i = this.blockList.indexOf(t);
    return -1 === i ? this : new this.constructor(this.blockList.replaceObjectAtIndex(e, i));
  };
  _proto25.insertDocumentAtRange = function insertDocumentAtRange(t, e) {
    var i = t.blockList;
    e = Lt(e);
    var _e18 = e,
      n = _e18[0];
    var _this$locationFromPos = this.locationFromPosition(n),
      r = _this$locationFromPos.index,
      o = _this$locationFromPos.offset;
    var s = this;
    var a = this.getBlockAtPosition(n);
    return Dt(e) && a.isEmpty() && !a.hasAttributes() ? s = new this.constructor(s.blockList.removeObjectAtIndex(r)) : a.getBlockBreakPosition() === o && n++, s = s.removeTextAtRange(e), new this.constructor(s.blockList.insertSplittableListAtPosition(i, n));
  };
  _proto25.mergeDocumentAtRange = function mergeDocumentAtRange(t, e) {
    var i, n;
    e = Lt(e);
    var _e19 = e,
      r = _e19[0],
      o = this.locationFromPosition(r),
      s = this.getBlockAtIndex(o.index).getAttributes(),
      a = t.getBaseBlockAttributes(),
      l = s.slice(-a.length);
    if (rt(a, l)) {
      var _e20 = s.slice(0, -a.length);
      i = t.copyWithBaseBlockAttributes(_e20);
    } else i = t.copy({
      consolidateBlocks: !0
    }).copyWithBaseBlockAttributes(s);
    var c = i.getBlockCount(),
      h = i.getBlockAtIndex(0);
    if (rt(s, h.getAttributes())) {
      var _t12 = h.getTextWithoutBlockBreak();
      if (n = this.insertTextAtRange(_t12, e), c > 1) {
        i = new this.constructor(i.getBlocks().slice(1));
        var _e21 = r + _t12.getLength();
        n = n.insertDocumentAtRange(i, _e21);
      }
    } else n = this.insertDocumentAtRange(i, e);
    return n;
  };
  _proto25.insertTextAtRange = function insertTextAtRange(t, e) {
    e = Lt(e);
    var _e22 = e,
      i = _e22[0],
      _this$locationFromPos2 = this.locationFromPosition(i),
      n = _this$locationFromPos2.index,
      r = _this$locationFromPos2.offset,
      o = this.removeTextAtRange(e);
    return new this.constructor(o.blockList.editObjectAtIndex(n, function (e) {
      return e.copyWithText(e.text.insertTextAtPosition(t, r));
    }));
  };
  _proto25.removeTextAtRange = function removeTextAtRange(t) {
    var e;
    t = Lt(t);
    var _t13 = t,
      i = _t13[0],
      n = _t13[1];
    if (Dt(t)) return this;
    var _Array$from = Array.from(this.locationRangeFromRange(t)),
      r = _Array$from[0],
      o = _Array$from[1],
      s = r.index,
      a = r.offset,
      l = this.getBlockAtIndex(s),
      c = o.index,
      h = o.offset,
      u = this.getBlockAtIndex(c);
    if (n - i == 1 && l.getBlockBreakPosition() === a && u.getBlockBreakPosition() !== h && "\n" === u.text.getStringAtPosition(h)) e = this.blockList.editObjectAtIndex(c, function (t) {
      return t.copyWithText(t.text.removeTextAtRange([h, h + 1]));
    });else {
      var _t14;
      var _i19 = l.text.getTextAtRange([0, a]),
        _n14 = u.text.getTextAtRange([h, u.getLength()]),
        _r6 = _i19.appendText(_n14);
      _t14 = s !== c && 0 === a && l.getAttributeLevel() >= u.getAttributeLevel() ? u.copyWithText(_r6) : l.copyWithText(_r6);
      var _o4 = c + 1 - s;
      e = this.blockList.splice(s, _o4, _t14);
    }
    return new this.constructor(e);
  };
  _proto25.moveTextFromRangeToPosition = function moveTextFromRangeToPosition(t, e) {
    var i;
    t = Lt(t);
    var _t15 = t,
      n = _t15[0],
      r = _t15[1];
    if (n <= e && e <= r) return this;
    var o = this.getDocumentAtRange(t),
      s = this.removeTextAtRange(t);
    var a = n < e;
    a && (e -= o.getLength());
    var _o$getBlocks = o.getBlocks(),
      l = _o$getBlocks[0],
      c = _o$getBlocks.slice(1);
    return 0 === c.length ? (i = l.getTextWithoutBlockBreak(), a && (e += 1)) : i = l.text, s = s.insertTextAtRange(i, e), 0 === c.length ? s : (o = new this.constructor(c), e += i.getLength(), s.insertDocumentAtRange(o, e));
  };
  _proto25.addAttributeAtRange = function addAttributeAtRange(t, e, i) {
    var n = this.blockList;
    return this.eachBlockAtRange(i, function (i, r, o) {
      return n = n.editObjectAtIndex(o, function () {
        return gt(t) ? i.addAttribute(t, e) : r[0] === r[1] ? i : i.copyWithText(i.text.addAttributeAtRange(t, e, r));
      });
    }), new this.constructor(n);
  };
  _proto25.addAttribute = function addAttribute(t, e) {
    var i = this.blockList;
    return this.eachBlock(function (n, r) {
      return i = i.editObjectAtIndex(r, function () {
        return n.addAttribute(t, e);
      });
    }), new this.constructor(i);
  };
  _proto25.removeAttributeAtRange = function removeAttributeAtRange(t, e) {
    var i = this.blockList;
    return this.eachBlockAtRange(e, function (e, n, r) {
      gt(t) ? i = i.editObjectAtIndex(r, function () {
        return e.removeAttribute(t);
      }) : n[0] !== n[1] && (i = i.editObjectAtIndex(r, function () {
        return e.copyWithText(e.text.removeAttributeAtRange(t, n));
      }));
    }), new this.constructor(i);
  };
  _proto25.updateAttributesForAttachment = function updateAttributesForAttachment(t, e) {
    var i = this.getRangeOfAttachment(e),
      _Array$from2 = Array.from(i),
      n = _Array$from2[0],
      _this$locationFromPos3 = this.locationFromPosition(n),
      r = _this$locationFromPos3.index,
      o = this.getTextAtIndex(r);
    return new this.constructor(this.blockList.editObjectAtIndex(r, function (i) {
      return i.copyWithText(o.updateAttributesForAttachment(t, e));
    }));
  };
  _proto25.removeAttributeForAttachment = function removeAttributeForAttachment(t, e) {
    var i = this.getRangeOfAttachment(e);
    return this.removeAttributeAtRange(t, i);
  };
  _proto25.insertBlockBreakAtRange = function insertBlockBreakAtRange(t) {
    var e;
    t = Lt(t);
    var _t16 = t,
      i = _t16[0],
      _this$locationFromPos4 = this.locationFromPosition(i),
      n = _this$locationFromPos4.offset,
      r = this.removeTextAtRange(t);
    return 0 === n && (e = [new Be()]), new this.constructor(r.blockList.insertSplittableListAtPosition(new ke(e), i));
  };
  _proto25.applyBlockAttributeAtRange = function applyBlockAttributeAtRange(t, e, i) {
    var n = this.expandRangeToLineBreaksAndSplitBlocks(i);
    var r = n.document;
    i = n.range;
    var o = gt(t);
    if (o.listAttribute) {
      r = r.removeLastListAttributeAtRange(i, {
        exceptAttributeName: t
      });
      var _e23 = r.convertLineBreaksToBlockBreaksInRange(i);
      r = _e23.document, i = _e23.range;
    } else r = o.exclusive ? r.removeBlockAttributesAtRange(i) : o.terminal ? r.removeLastTerminalAttributeAtRange(i) : r.consolidateBlocksAtRange(i);
    return r.addAttributeAtRange(t, e, i);
  };
  _proto25.removeLastListAttributeAtRange = function removeLastListAttributeAtRange(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = this.blockList;
    return this.eachBlockAtRange(t, function (t, n, r) {
      var o = t.getLastAttribute();
      o && gt(o).listAttribute && o !== e.exceptAttributeName && (i = i.editObjectAtIndex(r, function () {
        return t.removeAttribute(o);
      }));
    }), new this.constructor(i);
  };
  _proto25.removeLastTerminalAttributeAtRange = function removeLastTerminalAttributeAtRange(t) {
    var e = this.blockList;
    return this.eachBlockAtRange(t, function (t, i, n) {
      var r = t.getLastAttribute();
      r && gt(r).terminal && (e = e.editObjectAtIndex(n, function () {
        return t.removeAttribute(r);
      }));
    }), new this.constructor(e);
  };
  _proto25.removeBlockAttributesAtRange = function removeBlockAttributesAtRange(t) {
    var e = this.blockList;
    return this.eachBlockAtRange(t, function (t, i, n) {
      t.hasAttributes() && (e = e.editObjectAtIndex(n, function () {
        return t.copyWithoutAttributes();
      }));
    }), new this.constructor(e);
  };
  _proto25.expandRangeToLineBreaksAndSplitBlocks = function expandRangeToLineBreaksAndSplitBlocks(t) {
    var e;
    t = Lt(t);
    var _t17 = t,
      i = _t17[0],
      n = _t17[1];
    var r = this.locationFromPosition(i),
      o = this.locationFromPosition(n);
    var s = this;
    var a = s.getBlockAtIndex(r.index);
    if (r.offset = a.findLineBreakInDirectionFromPosition("backward", r.offset), null != r.offset && (e = s.positionFromLocation(r), s = s.insertBlockBreakAtRange([e, e + 1]), o.index += 1, o.offset -= s.getBlockAtIndex(r.index).getLength(), r.index += 1), r.offset = 0, 0 === o.offset && o.index > r.index) o.index -= 1, o.offset = s.getBlockAtIndex(o.index).getBlockBreakPosition();else {
      var _t18 = s.getBlockAtIndex(o.index);
      "\n" === _t18.text.getStringAtRange([o.offset - 1, o.offset]) ? o.offset -= 1 : o.offset = _t18.findLineBreakInDirectionFromPosition("forward", o.offset), o.offset !== _t18.getBlockBreakPosition() && (e = s.positionFromLocation(o), s = s.insertBlockBreakAtRange([e, e + 1]));
    }
    return i = s.positionFromLocation(r), n = s.positionFromLocation(o), {
      document: s,
      range: t = Lt([i, n])
    };
  };
  _proto25.convertLineBreaksToBlockBreaksInRange = function convertLineBreaksToBlockBreaksInRange(t) {
    t = Lt(t);
    var _t19 = t,
      e = _t19[0];
    var i = this.getStringAtRange(t).slice(0, -1);
    var n = this;
    return i.replace(/.*?\n/g, function (t) {
      e += t.length, n = n.insertBlockBreakAtRange([e - 1, e]);
    }), {
      document: n,
      range: t
    };
  };
  _proto25.consolidateBlocksAtRange = function consolidateBlocksAtRange(t) {
    t = Lt(t);
    var _t20 = t,
      e = _t20[0],
      i = _t20[1],
      n = this.locationFromPosition(e).index,
      r = this.locationFromPosition(i).index;
    return new this.constructor(this.blockList.consolidateFromIndexToIndex(n, r));
  };
  _proto25.getDocumentAtRange = function getDocumentAtRange(t) {
    t = Lt(t);
    var e = this.blockList.getSplittableListInRange(t).toArray();
    return new this.constructor(e);
  };
  _proto25.getStringAtRange = function getStringAtRange(t) {
    var e;
    var i = t = Lt(t);
    return i[i.length - 1] !== this.getLength() && (e = -1), this.getDocumentAtRange(t).toString().slice(0, e);
  };
  _proto25.getBlockAtIndex = function getBlockAtIndex(t) {
    return this.blockList.getObjectAtIndex(t);
  };
  _proto25.getBlockAtPosition = function getBlockAtPosition(t) {
    var _this$locationFromPos5 = this.locationFromPosition(t),
      e = _this$locationFromPos5.index;
    return this.getBlockAtIndex(e);
  };
  _proto25.getTextAtIndex = function getTextAtIndex(t) {
    var e;
    return null === (e = this.getBlockAtIndex(t)) || void 0 === e ? void 0 : e.text;
  };
  _proto25.getTextAtPosition = function getTextAtPosition(t) {
    var _this$locationFromPos6 = this.locationFromPosition(t),
      e = _this$locationFromPos6.index;
    return this.getTextAtIndex(e);
  };
  _proto25.getPieceAtPosition = function getPieceAtPosition(t) {
    var _this$locationFromPos7 = this.locationFromPosition(t),
      e = _this$locationFromPos7.index,
      i = _this$locationFromPos7.offset;
    return this.getTextAtIndex(e).getPieceAtPosition(i);
  };
  _proto25.getCharacterAtPosition = function getCharacterAtPosition(t) {
    var _this$locationFromPos8 = this.locationFromPosition(t),
      e = _this$locationFromPos8.index,
      i = _this$locationFromPos8.offset;
    return this.getTextAtIndex(e).getStringAtRange([i, i + 1]);
  };
  _proto25.getLength = function getLength() {
    return this.blockList.getEndPosition();
  };
  _proto25.getBlocks = function getBlocks() {
    return this.blockList.toArray();
  };
  _proto25.getBlockCount = function getBlockCount() {
    return this.blockList.length;
  };
  _proto25.getEditCount = function getEditCount() {
    return this.editCount;
  };
  _proto25.eachBlock = function eachBlock(t) {
    return this.blockList.eachObject(t);
  };
  _proto25.eachBlockAtRange = function eachBlockAtRange(t, e) {
    var i, n;
    t = Lt(t);
    var _t21 = t,
      r = _t21[0],
      o = _t21[1],
      s = this.locationFromPosition(r),
      a = this.locationFromPosition(o);
    if (s.index === a.index) return i = this.getBlockAtIndex(s.index), n = [s.offset, a.offset], e(i, n, s.index);
    for (var _t22 = s.index; _t22 <= a.index; _t22++) if (i = this.getBlockAtIndex(_t22), i) {
      switch (_t22) {
        case s.index:
          n = [s.offset, i.text.getLength()];
          break;
        case a.index:
          n = [0, a.offset];
          break;
        default:
          n = [0, i.text.getLength()];
      }
      e(i, n, _t22);
    }
  };
  _proto25.getCommonAttributesAtRange = function getCommonAttributesAtRange(t) {
    t = Lt(t);
    var _t23 = t,
      e = _t23[0];
    if (Dt(t)) return this.getCommonAttributesAtPosition(e);
    {
      var _e24 = [],
        _i20 = [];
      return this.eachBlockAtRange(t, function (t, n) {
        if (n[0] !== n[1]) return _e24.push(t.text.getCommonAttributesAtRange(n)), _i20.push(Ve(t));
      }), _t.fromCommonAttributesOfObjects(_e24).merge(_t.fromCommonAttributesOfObjects(_i20)).toObject();
    }
  };
  _proto25.getCommonAttributesAtPosition = function getCommonAttributesAtPosition(t) {
    var e, i;
    var _this$locationFromPos9 = this.locationFromPosition(t),
      n = _this$locationFromPos9.index,
      r = _this$locationFromPos9.offset,
      o = this.getBlockAtIndex(n);
    if (!o) return {};
    var s = Ve(o),
      a = o.text.getAttributesAtPosition(r),
      l = o.text.getAttributesAtPosition(r - 1),
      c = Object.keys(W).filter(function (t) {
        return W[t].inheritable;
      });
    for (e in l) i = l[e], (i === a[e] || c.includes(e)) && (s[e] = i);
    return s;
  };
  _proto25.getRangeOfCommonAttributeAtPosition = function getRangeOfCommonAttributeAtPosition(t, e) {
    var _this$locationFromPos10 = this.locationFromPosition(e),
      i = _this$locationFromPos10.index,
      n = _this$locationFromPos10.offset,
      r = this.getTextAtIndex(i),
      _Array$from3 = Array.from(r.getExpandedRangeForAttributeAtOffset(t, n)),
      o = _Array$from3[0],
      s = _Array$from3[1],
      a = this.positionFromLocation({
        index: i,
        offset: o
      }),
      l = this.positionFromLocation({
        index: i,
        offset: s
      });
    return Lt([a, l]);
  };
  _proto25.getBaseBlockAttributes = function getBaseBlockAttributes() {
    var _this35 = this;
    var t = this.getBlockAtIndex(0).getAttributes();
    var _loop = function _loop() {
      var i = _this35.getBlockAtIndex(_e25).getAttributes(),
        n = Math.min(t.length, i.length);
      t = function () {
        var e = [];
        for (var _r7 = 0; _r7 < n && i[_r7] === t[_r7]; _r7++) e.push(i[_r7]);
        return e;
      }();
    };
    for (var _e25 = 1; _e25 < this.getBlockCount(); _e25++) {
      _loop();
    }
    return t;
  };
  _proto25.getAttachmentById = function getAttachmentById(t) {
    for (var _iterator3 = _createForOfIteratorHelperLoose(this.getAttachments()), _step3; !(_step3 = _iterator3()).done;) {
      var _e26 = _step3.value;
      if (_e26.id === t) return _e26;
    }
  };
  _proto25.getAttachmentPieces = function getAttachmentPieces() {
    var t = [];
    return this.blockList.eachObject(function (e) {
      var i = e.text;
      return t = t.concat(i.getAttachmentPieces());
    }), t;
  };
  _proto25.getAttachments = function getAttachments() {
    return this.getAttachmentPieces().map(function (t) {
      return t.attachment;
    });
  };
  _proto25.getRangeOfAttachment = function getRangeOfAttachment(t) {
    var e = 0;
    var i = this.blockList.toArray();
    for (var _n15 = 0; _n15 < i.length; _n15++) {
      var _r8 = i[_n15].text,
        _o5 = _r8.getRangeOfAttachment(t);
      if (_o5) return Lt([e + _o5[0], e + _o5[1]]);
      e += _r8.getLength();
    }
  };
  _proto25.getLocationRangeOfAttachment = function getLocationRangeOfAttachment(t) {
    var e = this.getRangeOfAttachment(t);
    return this.locationRangeFromRange(e);
  };
  _proto25.getAttachmentPieceForAttachment = function getAttachmentPieceForAttachment(t) {
    for (var _iterator4 = _createForOfIteratorHelperLoose(this.getAttachmentPieces()), _step4; !(_step4 = _iterator4()).done;) {
      var _e27 = _step4.value;
      if (_e27.attachment === t) return _e27;
    }
  };
  _proto25.findRangesForBlockAttribute = function findRangesForBlockAttribute(t) {
    var e = 0;
    var i = [];
    return this.getBlocks().forEach(function (n) {
      var r = n.getLength();
      n.hasAttribute(t) && i.push([e, e + r]), e += r;
    }), i;
  };
  _proto25.findRangesForTextAttribute = function findRangesForTextAttribute(t) {
    var _ref10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref10.withValue,
      i = 0,
      n = [];
    var r = [];
    return this.getPieces().forEach(function (o) {
      var s = o.getLength();
      (function (i) {
        return e ? i.getAttribute(t) === e : i.hasAttribute(t);
      })(o) && (n[1] === i ? n[1] = i + s : r.push(n = [i, i + s])), i += s;
    }), r;
  };
  _proto25.locationFromPosition = function locationFromPosition(t) {
    var e = this.blockList.findIndexAndOffsetAtPosition(Math.max(0, t));
    if (null != e.index) return e;
    {
      var _t24 = this.getBlocks();
      return {
        index: _t24.length - 1,
        offset: _t24[_t24.length - 1].getLength()
      };
    }
  };
  _proto25.positionFromLocation = function positionFromLocation(t) {
    return this.blockList.findPositionAtIndexAndOffset(t.index, t.offset);
  };
  _proto25.locationRangeFromPosition = function locationRangeFromPosition(t) {
    return Lt(this.locationFromPosition(t));
  };
  _proto25.locationRangeFromRange = function locationRangeFromRange(t) {
    if (!(t = Lt(t))) return;
    var _Array$from4 = Array.from(t),
      e = _Array$from4[0],
      i = _Array$from4[1],
      n = this.locationFromPosition(e),
      r = this.locationFromPosition(i);
    return Lt([n, r]);
  };
  _proto25.rangeFromLocationRange = function rangeFromLocationRange(t) {
    var e;
    t = Lt(t);
    var i = this.positionFromLocation(t[0]);
    return Dt(t) || (e = this.positionFromLocation(t[1])), Lt([i, e]);
  };
  _proto25.isEqualTo = function isEqualTo(t) {
    return this.blockList.isEqualTo(null == t ? void 0 : t.blockList);
  };
  _proto25.getTexts = function getTexts() {
    return this.getBlocks().map(function (t) {
      return t.text;
    });
  };
  _proto25.getPieces = function getPieces() {
    var t = [];
    return Array.from(this.getTexts()).forEach(function (e) {
      t.push.apply(t, Array.from(e.getPieces() || []));
    }), t;
  };
  _proto25.getObjects = function getObjects() {
    return this.getBlocks().concat(this.getTexts()).concat(this.getPieces());
  };
  _proto25.toSerializableDocument = function toSerializableDocument() {
    var t = [];
    return this.blockList.eachObject(function (e) {
      return t.push(e.copyWithText(e.text.toSerializableText()));
    }), new this.constructor(t);
  };
  _proto25.toString = function toString() {
    return this.blockList.toString();
  };
  _proto25.toJSON = function toJSON() {
    return this.blockList.toJSON();
  };
  _proto25.toConsole = function toConsole() {
    return JSON.stringify(this.blockList.toArray().map(function (t) {
      return JSON.parse(t.text.toConsole());
    }));
  };
  return qe;
}(nt);
var Ve = function Ve(t) {
    var e = {},
      i = t.getLastAttribute();
    return i && (e[i] = !0), e;
  },
  ze = "style href src width height class".split(" "),
  _e = "javascript:".split(" "),
  He = "script iframe form".split(" ");
var Je = /*#__PURE__*/function (_z7) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Je, _z7);
  Je.sanitize = function sanitize(t, e) {
    var i = new this(t, e);
    return i.sanitize(), i;
  };
  function Je(t) {
    var _this36;
    var _ref11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref11.allowedAttributes,
      i = _ref11.forbiddenProtocols,
      n = _ref11.forbiddenElements;
    _this36 = _z7.apply(this, arguments) || this, _this36.allowedAttributes = e || ze, _this36.forbiddenProtocols = i || _e, _this36.forbiddenElements = n || He, _this36.body = Ke(t);
    return _this36;
  }
  var _proto26 = Je.prototype;
  _proto26.sanitize = function sanitize() {
    return this.sanitizeElements(), this.normalizeListElementNesting();
  };
  _proto26.getHTML = function getHTML() {
    return this.body.innerHTML;
  };
  _proto26.getBody = function getBody() {
    return this.body;
  };
  _proto26.sanitizeElements = function sanitizeElements() {
    var t = S(this.body),
      e = [];
    for (; t.nextNode();) {
      var _i21 = t.currentNode;
      switch (_i21.nodeType) {
        case Node.ELEMENT_NODE:
          this.elementIsRemovable(_i21) ? e.push(_i21) : this.sanitizeElement(_i21);
          break;
        case Node.COMMENT_NODE:
          e.push(_i21);
      }
    }
    return e.forEach(function (t) {
      return R(t);
    }), this.body;
  };
  _proto26.sanitizeElement = function sanitizeElement(t) {
    var _this37 = this;
    return t.hasAttribute("href") && this.forbiddenProtocols.includes(t.protocol) && t.removeAttribute("href"), Array.from(t.attributes).forEach(function (e) {
      var i = e.name;
      _this37.allowedAttributes.includes(i) || 0 === i.indexOf("data-trix") || t.removeAttribute(i);
    }), t;
  };
  _proto26.normalizeListElementNesting = function normalizeListElementNesting() {
    return Array.from(this.body.querySelectorAll("ul,ol")).forEach(function (t) {
      var e = t.previousElementSibling;
      e && "li" === E(e) && e.appendChild(t);
    }), this.body;
  };
  _proto26.elementIsRemovable = function elementIsRemovable(t) {
    if ((null == t ? void 0 : t.nodeType) === Node.ELEMENT_NODE) return this.elementIsForbidden(t) || this.elementIsntSerializable(t);
  };
  _proto26.elementIsForbidden = function elementIsForbidden(t) {
    return this.forbiddenElements.includes(E(t));
  };
  _proto26.elementIsntSerializable = function elementIsntSerializable(t) {
    return "false" === t.getAttribute("data-trix-serialize") && !P(t);
  };
  return Je;
}(z);
var Ke = function Ke() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    t = t.replace(/<\/html[^>]*>[^]*$/i, "</html>");
    var e = document.implementation.createHTMLDocument("");
    return e.documentElement.innerHTML = t, Array.from(e.head.querySelectorAll("style")).forEach(function (t) {
      e.body.appendChild(t);
    }), e.body;
  },
  Ge = function Ge(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return {
      string: t = Wt(t),
      attributes: e,
      type: "string"
    };
  },
  $e = function $e(t, e) {
    try {
      return JSON.parse(t.getAttribute("data-trix-".concat(e)));
    } catch (t) {
      return {};
    }
  };
var Xe = /*#__PURE__*/function (_z8) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Xe, _z8);
  Xe.parse = function parse(t, e) {
    var i = new this(t, e);
    return i.parse(), i;
  };
  function Xe(t) {
    var _this38;
    var _ref12 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref12.referenceElement;
    _this38 = _z8.apply(this, arguments) || this, _this38.html = t, _this38.referenceElement = e, _this38.blocks = [], _this38.blockElements = [], _this38.processedElements = [];
    return _this38;
  }
  var _proto27 = Xe.prototype;
  _proto27.getDocument = function getDocument() {
    return qe.fromJSON(this.blocks);
  };
  _proto27.parse = function parse() {
    try {
      this.createHiddenContainer();
      var _t25 = Je.sanitize(this.html).getHTML();
      this.containerElement.innerHTML = _t25;
      var _e28 = S(this.containerElement, {
        usingFilter: ti
      });
      for (; _e28.nextNode();) this.processNode(_e28.currentNode);
      return this.translateBlockElementMarginsToNewlines();
    } finally {
      this.removeHiddenContainer();
    }
  };
  _proto27.createHiddenContainer = function createHiddenContainer() {
    return this.referenceElement ? (this.containerElement = this.referenceElement.cloneNode(!1), this.containerElement.removeAttribute("id"), this.containerElement.setAttribute("data-trix-internal", ""), this.containerElement.style.display = "none", this.referenceElement.parentNode.insertBefore(this.containerElement, this.referenceElement.nextSibling)) : (this.containerElement = k({
      tagName: "div",
      style: {
        display: "none"
      }
    }), document.body.appendChild(this.containerElement));
  };
  _proto27.removeHiddenContainer = function removeHiddenContainer() {
    return R(this.containerElement);
  };
  _proto27.processNode = function processNode(t) {
    switch (t.nodeType) {
      case Node.TEXT_NODE:
        if (!this.isInsignificantTextNode(t)) return this.appendBlockForTextNode(t), this.processTextNode(t);
        break;
      case Node.ELEMENT_NODE:
        return this.appendBlockForElement(t), this.processElement(t);
    }
  };
  _proto27.appendBlockForTextNode = function appendBlockForTextNode(t) {
    var e = t.parentNode;
    if (e === this.currentBlockElement && this.isBlockElement(t.previousSibling)) return this.appendStringWithAttributes("\n");
    if (e === this.containerElement || this.isBlockElement(e)) {
      var i;
      var _t26 = this.getBlockAttributes(e);
      rt(_t26, null === (i = this.currentBlock) || void 0 === i ? void 0 : i.attributes) || (this.currentBlock = this.appendBlockForAttributesWithElement(_t26, e), this.currentBlockElement = e);
    }
  };
  _proto27.appendBlockForElement = function appendBlockForElement(t) {
    var e = this.isBlockElement(t),
      i = y(this.currentBlockElement, t);
    if (e && !this.isBlockElement(t.firstChild)) {
      if (!this.isInsignificantTextNode(t.firstChild) || !this.isBlockElement(t.firstElementChild)) {
        var _e29 = this.getBlockAttributes(t);
        if (t.firstChild) {
          if (i && rt(_e29, this.currentBlock.attributes)) return this.appendStringWithAttributes("\n");
          this.currentBlock = this.appendBlockForAttributesWithElement(_e29, t), this.currentBlockElement = t;
        }
      }
    } else if (this.currentBlockElement && !i && !e) {
      var _e30 = this.findParentBlockElement(t);
      if (_e30) return this.appendBlockForElement(_e30);
      this.currentBlock = this.appendEmptyBlock(), this.currentBlockElement = null;
    }
  };
  _proto27.findParentBlockElement = function findParentBlockElement(t) {
    var e = t.parentElement;
    for (; e && e !== this.containerElement;) {
      if (this.isBlockElement(e) && this.blockElements.includes(e)) return e;
      e = e.parentElement;
    }
    return null;
  };
  _proto27.processTextNode = function processTextNode(t) {
    var e = t.data;
    var i;
    Ye(t.parentNode) || (e = qt(e), ni(null === (i = t.previousSibling) || void 0 === i ? void 0 : i.textContent) && (e = ei(e)));
    return this.appendStringWithAttributes(e, this.getTextAttributes(t.parentNode));
  };
  _proto27.processElement = function processElement(t) {
    var e;
    if (P(t)) {
      if (e = $e(t, "attachment"), Object.keys(e).length) {
        var _i22 = this.getTextAttributes(t);
        this.appendAttachmentWithAttributes(e, _i22), t.innerHTML = "";
      }
      return this.processedElements.push(t);
    }
    switch (E(t)) {
      case "br":
        return this.isExtraBR(t) || this.isBlockElement(t.nextSibling) || this.appendStringWithAttributes("\n", this.getTextAttributes(t)), this.processedElements.push(t);
      case "img":
        e = {
          url: t.getAttribute("src"),
          contentType: "image"
        };
        var _i23 = function (t) {
          var e = t.getAttribute("width"),
            i = t.getAttribute("height"),
            n = {};
          return e && (n.width = parseInt(e, 10)), i && (n.height = parseInt(i, 10)), n;
        }(t);
        for (var _t27 in _i23) {
          var _n16 = _i23[_t27];
          e[_t27] = _n16;
        }
        return this.appendAttachmentWithAttributes(e, this.getTextAttributes(t)), this.processedElements.push(t);
      case "tr":
        if (this.needsTableSeparator(t)) return this.appendStringWithAttributes(j.tableRowSeparator);
        break;
      case "td":
        if (this.needsTableSeparator(t)) return this.appendStringWithAttributes(j.tableCellSeparator);
    }
  };
  _proto27.appendBlockForAttributesWithElement = function appendBlockForAttributesWithElement(t, e) {
    this.blockElements.push(e);
    var i = function () {
      return {
        text: [],
        attributes: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      };
    }(t);
    return this.blocks.push(i), i;
  };
  _proto27.appendEmptyBlock = function appendEmptyBlock() {
    return this.appendBlockForAttributesWithElement([], null);
  };
  _proto27.appendStringWithAttributes = function appendStringWithAttributes(t, e) {
    return this.appendPiece(Ge(t, e));
  };
  _proto27.appendAttachmentWithAttributes = function appendAttachmentWithAttributes(t, e) {
    return this.appendPiece(function (t) {
      return {
        attachment: t,
        attributes: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        type: "attachment"
      };
    }(t, e));
  };
  _proto27.appendPiece = function appendPiece(t) {
    return 0 === this.blocks.length && this.appendEmptyBlock(), this.blocks[this.blocks.length - 1].text.push(t);
  };
  _proto27.appendStringToTextAtIndex = function appendStringToTextAtIndex(t, e) {
    var i = this.blocks[e].text,
      n = i[i.length - 1];
    if ("string" !== (null == n ? void 0 : n.type)) return i.push(Ge(t));
    n.string += t;
  };
  _proto27.prependStringToTextAtIndex = function prependStringToTextAtIndex(t, e) {
    var i = this.blocks[e].text,
      n = i[0];
    if ("string" !== (null == n ? void 0 : n.type)) return i.unshift(Ge(t));
    n.string = t + n.string;
  };
  _proto27.getTextAttributes = function getTextAttributes(t) {
    var e;
    var i = {};
    for (var _n17 in W) {
      var _r9 = W[_n17];
      if (_r9.tagName && A(t, {
        matchingSelector: _r9.tagName,
        untilNode: this.containerElement
      })) i[_n17] = !0;else if (_r9.parser) {
        if (e = _r9.parser(t), e) {
          var _o6 = !1;
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.findBlockElementAncestors(t)), _step5; !(_step5 = _iterator5()).done;) {
            var _i24 = _step5.value;
            if (_r9.parser(_i24) === e) {
              _o6 = !0;
              break;
            }
          }
          _o6 || (i[_n17] = e);
        }
      } else _r9.styleProperty && (e = t.style[_r9.styleProperty], e && (i[_n17] = e));
    }
    if (P(t)) {
      var _n18 = $e(t, "attributes");
      for (var _t28 in _n18) e = _n18[_t28], i[_t28] = e;
    }
    return i;
  };
  _proto27.getBlockAttributes = function getBlockAttributes(t) {
    var e = [];
    for (; t && t !== this.containerElement;) {
      for (var _r10 in n) {
        var _o7 = n[_r10];
        var i;
        if (!1 !== _o7.parse) if (E(t) === _o7.tagName) (null !== (i = _o7.test) && void 0 !== i && i.call(_o7, t) || !_o7.test) && (e.push(_r10), _o7.listAttribute && e.push(_o7.listAttribute));
      }
      t = t.parentNode;
    }
    return e.reverse();
  };
  _proto27.findBlockElementAncestors = function findBlockElementAncestors(t) {
    var e = [];
    for (; t && t !== this.containerElement;) {
      var _i25 = E(t);
      D().includes(_i25) && e.push(t), t = t.parentNode;
    }
    return e;
  };
  _proto27.isBlockElement = function isBlockElement(t) {
    if ((null == t ? void 0 : t.nodeType) === Node.ELEMENT_NODE && !P(t) && !A(t, {
      matchingSelector: "td",
      untilNode: this.containerElement
    })) return D().includes(E(t)) || "block" === window.getComputedStyle(t).display;
  };
  _proto27.isInsignificantTextNode = function isInsignificantTextNode(t) {
    if ((null == t ? void 0 : t.nodeType) !== Node.TEXT_NODE) return;
    if (!ii(t.data)) return;
    var e = t.parentNode,
      i = t.previousSibling,
      n = t.nextSibling;
    return Qe(e.previousSibling) && !this.isBlockElement(e.previousSibling) || Ye(e) ? void 0 : !i || this.isBlockElement(i) || !n || this.isBlockElement(n);
  };
  _proto27.isExtraBR = function isExtraBR(t) {
    return "br" === E(t) && this.isBlockElement(t.parentNode) && t.parentNode.lastChild === t;
  };
  _proto27.needsTableSeparator = function needsTableSeparator(t) {
    if (j.removeBlankTableCells) {
      var e;
      var _i26 = null === (e = t.previousSibling) || void 0 === e ? void 0 : e.textContent;
      return _i26 && /\S/.test(_i26);
    }
    return t.previousSibling;
  };
  _proto27.translateBlockElementMarginsToNewlines = function translateBlockElementMarginsToNewlines() {
    var t = this.getMarginOfDefaultBlockElement();
    for (var _e31 = 0; _e31 < this.blocks.length; _e31++) {
      var _i27 = this.getMarginOfBlockElementAtIndex(_e31);
      _i27 && (_i27.top > 2 * t.top && this.prependStringToTextAtIndex("\n", _e31), _i27.bottom > 2 * t.bottom && this.appendStringToTextAtIndex("\n", _e31));
    }
  };
  _proto27.getMarginOfBlockElementAtIndex = function getMarginOfBlockElementAtIndex(t) {
    var e = this.blockElements[t];
    if (e && e.textContent && !D().includes(E(e)) && !this.processedElements.includes(e)) return Ze(e);
  };
  _proto27.getMarginOfDefaultBlockElement = function getMarginOfDefaultBlockElement() {
    var t = k(n["default"].tagName);
    return this.containerElement.appendChild(t), Ze(t);
  };
  return Xe;
}(z);
var Ye = function Ye(t) {
    var _window$getComputedSt = window.getComputedStyle(t),
      e = _window$getComputedSt.whiteSpace;
    return ["pre", "pre-wrap", "pre-line"].includes(e);
  },
  Qe = function Qe(t) {
    return t && !ni(t.textContent);
  },
  Ze = function Ze(t) {
    var e = window.getComputedStyle(t);
    if ("block" === e.display) return {
      top: parseInt(e.marginTop),
      bottom: parseInt(e.marginBottom)
    };
  },
  ti = function ti(t) {
    return "style" === E(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  },
  ei = function ei(t) {
    return t.replace(new RegExp("^".concat(Ut.source, "+")), "");
  },
  ii = function ii(t) {
    return new RegExp("^".concat(Ut.source, "*$")).test(t);
  },
  ni = function ni(t) {
    return /\s$/.test(t);
  },
  ri = ["contenteditable", "data-trix-id", "data-trix-store-key", "data-trix-mutable", "data-trix-placeholder", "tabindex"],
  oi = "data-trix-serialized-attributes",
  si = "[".concat(oi, "]"),
  ai = new RegExp("\x3c!--block--\x3e", "g"),
  li = {
    "application/json": function applicationJson(t) {
      var e;
      if (t instanceof qe) e = t;else {
        if (!(t instanceof HTMLElement)) throw new Error("unserializable object");
        e = Xe.parse(t.innerHTML).getDocument();
      }
      return e.toSerializableDocument().toJSONString();
    },
    "text/html": function textHtml(t) {
      var e;
      if (t instanceof qe) e = ge.render(t);else {
        if (!(t instanceof HTMLElement)) throw new Error("unserializable object");
        e = t.cloneNode(!0);
      }
      return Array.from(e.querySelectorAll("[data-trix-serialize=false]")).forEach(function (t) {
        R(t);
      }), ri.forEach(function (t) {
        Array.from(e.querySelectorAll("[".concat(t, "]"))).forEach(function (e) {
          e.removeAttribute(t);
        });
      }), Array.from(e.querySelectorAll(si)).forEach(function (t) {
        try {
          var _e32 = JSON.parse(t.getAttribute(oi));
          t.removeAttribute(oi);
          for (var _i28 in _e32) {
            var _n19 = _e32[_i28];
            t.setAttribute(_i28, _n19);
          }
        } catch (t) {}
      }), e.innerHTML.replace(ai, "");
    }
  };
var ci = Object.freeze({
  __proto__: null
});
var hi = /*#__PURE__*/function (_z9) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(hi, _z9);
  function hi(t, e) {
    var _this39;
    _this39 = _z9.apply(this, arguments) || this, _this39.attachmentManager = t, _this39.attachment = e, _this39.id = _this39.attachment.id, _this39.file = _this39.attachment.file;
    return _this39;
  }
  var _proto28 = hi.prototype;
  _proto28.remove = function remove() {
    return this.attachmentManager.requestRemovalOfAttachment(this.attachment);
  };
  return hi;
}(z);
hi.proxyMethod("attachment.getAttribute"), hi.proxyMethod("attachment.hasAttribute"), hi.proxyMethod("attachment.setAttribute"), hi.proxyMethod("attachment.getAttributes"), hi.proxyMethod("attachment.setAttributes"), hi.proxyMethod("attachment.isPending"), hi.proxyMethod("attachment.isPreviewable"), hi.proxyMethod("attachment.getURL"), hi.proxyMethod("attachment.getHref"), hi.proxyMethod("attachment.getFilename"), hi.proxyMethod("attachment.getFilesize"), hi.proxyMethod("attachment.getFormattedFilesize"), hi.proxyMethod("attachment.getExtension"), hi.proxyMethod("attachment.getContentType"), hi.proxyMethod("attachment.getFile"), hi.proxyMethod("attachment.setFile"), hi.proxyMethod("attachment.releaseFile"), hi.proxyMethod("attachment.getUploadProgress"), hi.proxyMethod("attachment.setUploadProgress");
var ui = /*#__PURE__*/function (_z10) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ui, _z10);
  function ui() {
    var _this40;
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    _this40 = _z10.apply(this, arguments) || this, _this40.managedAttachments = {}, Array.from(t).forEach(function (t) {
      _this40.manageAttachment(t);
    });
    return _this40;
  }
  var _proto29 = ui.prototype;
  _proto29.getAttachments = function getAttachments() {
    var t = [];
    for (var _e33 in this.managedAttachments) {
      var _i29 = this.managedAttachments[_e33];
      t.push(_i29);
    }
    return t;
  };
  _proto29.manageAttachment = function manageAttachment(t) {
    return this.managedAttachments[t.id] || (this.managedAttachments[t.id] = new hi(this, t)), this.managedAttachments[t.id];
  };
  _proto29.attachmentIsManaged = function attachmentIsManaged(t) {
    return t.id in this.managedAttachments;
  };
  _proto29.requestRemovalOfAttachment = function requestRemovalOfAttachment(t) {
    var e, i;
    if (this.attachmentIsManaged(t)) return null === (e = this.delegate) || void 0 === e || null === (i = e.attachmentManagerDidRequestRemovalOfAttachment) || void 0 === i ? void 0 : i.call(e, t);
  };
  _proto29.unmanageAttachment = function unmanageAttachment(t) {
    var e = this.managedAttachments[t.id];
    return delete this.managedAttachments[t.id], e;
  };
  return ui;
}(z);
var di = /*#__PURE__*/function () {
  function di(t) {
    this.composition = t, this.document = this.composition.document;
    var e = this.composition.getSelectedRange();
    this.startPosition = e[0], this.endPosition = e[1], this.startLocation = this.document.locationFromPosition(this.startPosition), this.endLocation = this.document.locationFromPosition(this.endPosition), this.block = this.document.getBlockAtIndex(this.endLocation.index), this.breaksOnReturn = this.block.breaksOnReturn(), this.previousCharacter = this.block.text.getStringAtPosition(this.endLocation.offset - 1), this.nextCharacter = this.block.text.getStringAtPosition(this.endLocation.offset);
  }
  var _proto30 = di.prototype;
  _proto30.shouldInsertBlockBreak = function shouldInsertBlockBreak() {
    return this.block.hasAttributes() && this.block.isListItem() && !this.block.isEmpty() ? 0 !== this.startLocation.offset : this.breaksOnReturn && "\n" !== this.nextCharacter;
  };
  _proto30.shouldBreakFormattedBlock = function shouldBreakFormattedBlock() {
    return this.block.hasAttributes() && !this.block.isListItem() && (this.breaksOnReturn && "\n" === this.nextCharacter || "\n" === this.previousCharacter);
  };
  _proto30.shouldDecreaseListLevel = function shouldDecreaseListLevel() {
    return this.block.hasAttributes() && this.block.isListItem() && this.block.isEmpty();
  };
  _proto30.shouldPrependListItem = function shouldPrependListItem() {
    return this.block.isListItem() && 0 === this.startLocation.offset && !this.block.isEmpty();
  };
  _proto30.shouldRemoveLastBlockAttribute = function shouldRemoveLastBlockAttribute() {
    return this.block.hasAttributes() && !this.block.isListItem() && this.block.isEmpty();
  };
  return di;
}();
var gi = /*#__PURE__*/function (_z11) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(gi, _z11);
  function gi() {
    var _this41;
    _this41 = _z11.apply(this, arguments) || this, _this41.document = new qe(), _this41.attachments = [], _this41.currentAttributes = {}, _this41.revision = 0;
    return _this41;
  }
  var _proto31 = gi.prototype;
  _proto31.setDocument = function setDocument(t) {
    var e, i;
    if (!t.isEqualTo(this.document)) return this.document = t, this.refreshAttachments(), this.revision++, null === (e = this.delegate) || void 0 === e || null === (i = e.compositionDidChangeDocument) || void 0 === i ? void 0 : i.call(e, t);
  };
  _proto31.getSnapshot = function getSnapshot() {
    return {
      document: this.document,
      selectedRange: this.getSelectedRange()
    };
  };
  _proto31.loadSnapshot = function loadSnapshot(t) {
    var e, i, n, r;
    var o = t.document,
      s = t.selectedRange;
    return null === (e = this.delegate) || void 0 === e || null === (i = e.compositionWillLoadSnapshot) || void 0 === i || i.call(e), this.setDocument(null != o ? o : new qe()), this.setSelection(null != s ? s : [0, 0]), null === (n = this.delegate) || void 0 === n || null === (r = n.compositionDidLoadSnapshot) || void 0 === r ? void 0 : r.call(n);
  };
  _proto31.insertText = function insertText(t) {
    var _ref13 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        updatePosition: !0
      },
      e = _ref13.updatePosition;
    var i = this.getSelectedRange();
    this.setDocument(this.document.insertTextAtRange(t, i));
    var n = i[0],
      r = n + t.getLength();
    return e && this.setSelection(r), this.notifyDelegateOfInsertionAtRange([n, r]);
  };
  _proto31.insertBlock = function insertBlock() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Be();
    var e = new qe([t]);
    return this.insertDocument(e);
  };
  _proto31.insertDocument = function insertDocument() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new qe();
    var e = this.getSelectedRange();
    this.setDocument(this.document.insertDocumentAtRange(t, e));
    var i = e[0],
      n = i + t.getLength();
    return this.setSelection(n), this.notifyDelegateOfInsertionAtRange([i, n]);
  };
  _proto31.insertString = function insertString(t, e) {
    var i = this.getCurrentTextAttributes(),
      n = Te.textForStringWithAttributes(t, i);
    return this.insertText(n, e);
  };
  _proto31.insertBlockBreak = function insertBlockBreak() {
    var t = this.getSelectedRange();
    this.setDocument(this.document.insertBlockBreakAtRange(t));
    var e = t[0],
      i = e + 1;
    return this.setSelection(i), this.notifyDelegateOfInsertionAtRange([e, i]);
  };
  _proto31.insertLineBreak = function insertLineBreak() {
    var t = new di(this);
    if (t.shouldDecreaseListLevel()) return this.decreaseListLevel(), this.setSelection(t.startPosition);
    if (t.shouldPrependListItem()) {
      var _e34 = new qe([t.block.copyWithoutText()]);
      return this.insertDocument(_e34);
    }
    return t.shouldInsertBlockBreak() ? this.insertBlockBreak() : t.shouldRemoveLastBlockAttribute() ? this.removeLastBlockAttribute() : t.shouldBreakFormattedBlock() ? this.breakFormattedBlock(t) : this.insertString("\n");
  };
  _proto31.insertHTML = function insertHTML(t) {
    var e = Xe.parse(t).getDocument(),
      i = this.getSelectedRange();
    this.setDocument(this.document.mergeDocumentAtRange(e, i));
    var n = i[0],
      r = n + e.getLength() - 1;
    return this.setSelection(r), this.notifyDelegateOfInsertionAtRange([n, r]);
  };
  _proto31.replaceHTML = function replaceHTML(t) {
    var e = Xe.parse(t).getDocument().copyUsingObjectsFromDocument(this.document),
      i = this.getLocationRange({
        strict: !1
      }),
      n = this.document.rangeFromLocationRange(i);
    return this.setDocument(e), this.setSelection(n);
  };
  _proto31.insertFile = function insertFile(t) {
    return this.insertFiles([t]);
  };
  _proto31.insertFiles = function insertFiles(t) {
    var _this42 = this;
    var e = [];
    return Array.from(t).forEach(function (t) {
      var i;
      if (null !== (i = _this42.delegate) && void 0 !== i && i.compositionShouldAcceptFile(t)) {
        var _i30 = Re.attachmentForFile(t);
        e.push(_i30);
      }
    }), this.insertAttachments(e);
  };
  _proto31.insertAttachment = function insertAttachment(t) {
    return this.insertAttachments([t]);
  };
  _proto31.insertAttachments = function insertAttachments(t) {
    var _this43 = this;
    var e = new Te();
    return Array.from(t).forEach(function (t) {
      var n;
      var r = t.getType(),
        o = null === (n = i[r]) || void 0 === n ? void 0 : n.presentation,
        s = _this43.getCurrentTextAttributes();
      o && (s.presentation = o);
      var a = Te.textForAttachmentWithAttributes(t, s);
      e = e.appendText(a);
    }), this.insertText(e);
  };
  _proto31.shouldManageDeletingInDirection = function shouldManageDeletingInDirection(t) {
    var e = this.getLocationRange();
    if (Dt(e)) {
      if ("backward" === t && 0 === e[0].offset) return !0;
      if (this.shouldManageMovingCursorInDirection(t)) return !0;
    } else if (e[0].index !== e[1].index) return !0;
    return !1;
  };
  _proto31.deleteInDirection = function deleteInDirection(t) {
    var e,
      i,
      n,
      _ref14 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = _ref14.length;
    var o = this.getLocationRange();
    var s = this.getSelectedRange();
    var a = Dt(s);
    if (a ? i = "backward" === t && 0 === o[0].offset : n = o[0].index !== o[1].index, i && this.canDecreaseBlockAttributeLevel()) {
      var _t29 = this.getBlock();
      if (_t29.isListItem() ? this.decreaseListLevel() : this.decreaseBlockAttributeLevel(), this.setSelection(s[0]), _t29.isEmpty()) return !1;
    }
    return a && (s = this.getExpandedRangeInDirection(t, {
      length: r
    }), "backward" === t && (e = this.getAttachmentAtRange(s))), e ? (this.editAttachment(e), !1) : (this.setDocument(this.document.removeTextAtRange(s)), this.setSelection(s[0]), !i && !n && void 0);
  };
  _proto31.moveTextFromRange = function moveTextFromRange(t) {
    var _Array$from5 = Array.from(this.getSelectedRange()),
      e = _Array$from5[0];
    return this.setDocument(this.document.moveTextFromRangeToPosition(t, e)), this.setSelection(e);
  };
  _proto31.removeAttachment = function removeAttachment(t) {
    var e = this.document.getRangeOfAttachment(t);
    if (e) return this.stopEditingAttachment(), this.setDocument(this.document.removeTextAtRange(e)), this.setSelection(e[0]);
  };
  _proto31.removeLastBlockAttribute = function removeLastBlockAttribute() {
    var _Array$from6 = Array.from(this.getSelectedRange()),
      t = _Array$from6[0],
      e = _Array$from6[1],
      i = this.document.getBlockAtPosition(e);
    return this.removeCurrentAttribute(i.getLastAttribute()), this.setSelection(t);
  };
  _proto31.insertPlaceholder = function insertPlaceholder() {
    return this.placeholderPosition = this.getPosition(), this.insertString(" ");
  };
  _proto31.selectPlaceholder = function selectPlaceholder() {
    if (null != this.placeholderPosition) return this.setSelectedRange([this.placeholderPosition, this.placeholderPosition + 1]), this.getSelectedRange();
  };
  _proto31.forgetPlaceholder = function forgetPlaceholder() {
    this.placeholderPosition = null;
  };
  _proto31.hasCurrentAttribute = function hasCurrentAttribute(t) {
    var e = this.currentAttributes[t];
    return null != e && !1 !== e;
  };
  _proto31.toggleCurrentAttribute = function toggleCurrentAttribute(t) {
    var e = !this.currentAttributes[t];
    return e ? this.setCurrentAttribute(t, e) : this.removeCurrentAttribute(t);
  };
  _proto31.canSetCurrentAttribute = function canSetCurrentAttribute(t) {
    return gt(t) ? this.canSetCurrentBlockAttribute(t) : this.canSetCurrentTextAttribute(t);
  };
  _proto31.canSetCurrentTextAttribute = function canSetCurrentTextAttribute(t) {
    var e = this.getSelectedDocument();
    if (e) {
      for (var _i31 = 0, _Array$from7 = Array.from(e.getAttachments()); _i31 < _Array$from7.length; _i31++) {
        var _t30 = _Array$from7[_i31];
        if (!_t30.hasContent()) return !1;
      }
      return !0;
    }
  };
  _proto31.canSetCurrentBlockAttribute = function canSetCurrentBlockAttribute(t) {
    var e = this.getBlock();
    if (e) return !e.isTerminalBlock();
  };
  _proto31.setCurrentAttribute = function setCurrentAttribute(t, e) {
    return gt(t) ? this.setBlockAttribute(t, e) : (this.setTextAttribute(t, e), this.currentAttributes[t] = e, this.notifyDelegateOfCurrentAttributesChange());
  };
  _proto31.setTextAttribute = function setTextAttribute(t, e) {
    var i = this.getSelectedRange();
    if (!i) return;
    var _Array$from8 = Array.from(i),
      n = _Array$from8[0],
      r = _Array$from8[1];
    if (n !== r) return this.setDocument(this.document.addAttributeAtRange(t, e, i));
    if ("href" === t) {
      var _t31 = Te.textForStringWithAttributes(e, {
        href: e
      });
      return this.insertText(_t31);
    }
  };
  _proto31.setBlockAttribute = function setBlockAttribute(t, e) {
    var i = this.getSelectedRange();
    if (this.canSetCurrentAttribute(t)) return this.setDocument(this.document.applyBlockAttributeAtRange(t, e, i)), this.setSelection(i);
  };
  _proto31.removeCurrentAttribute = function removeCurrentAttribute(t) {
    return gt(t) ? (this.removeBlockAttribute(t), this.updateCurrentAttributes()) : (this.removeTextAttribute(t), delete this.currentAttributes[t], this.notifyDelegateOfCurrentAttributesChange());
  };
  _proto31.removeTextAttribute = function removeTextAttribute(t) {
    var e = this.getSelectedRange();
    if (e) return this.setDocument(this.document.removeAttributeAtRange(t, e));
  };
  _proto31.removeBlockAttribute = function removeBlockAttribute(t) {
    var e = this.getSelectedRange();
    if (e) return this.setDocument(this.document.removeAttributeAtRange(t, e));
  };
  _proto31.canDecreaseNestingLevel = function canDecreaseNestingLevel() {
    var t;
    return (null === (t = this.getBlock()) || void 0 === t ? void 0 : t.getNestingLevel()) > 0;
  };
  _proto31.canIncreaseNestingLevel = function canIncreaseNestingLevel() {
    var t;
    var e = this.getBlock();
    if (e) {
      if (null === (t = gt(e.getLastNestableAttribute())) || void 0 === t || !t.listAttribute) return e.getNestingLevel() > 0;
      {
        var _t32 = this.getPreviousBlock();
        if (_t32) return function () {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return rt((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).slice(0, t.length), t);
        }(_t32.getListItemAttributes(), e.getListItemAttributes());
      }
    }
  };
  _proto31.decreaseNestingLevel = function decreaseNestingLevel() {
    var t = this.getBlock();
    if (t) return this.setDocument(this.document.replaceBlock(t, t.decreaseNestingLevel()));
  };
  _proto31.increaseNestingLevel = function increaseNestingLevel() {
    var t = this.getBlock();
    if (t) return this.setDocument(this.document.replaceBlock(t, t.increaseNestingLevel()));
  };
  _proto31.canDecreaseBlockAttributeLevel = function canDecreaseBlockAttributeLevel() {
    var t;
    return (null === (t = this.getBlock()) || void 0 === t ? void 0 : t.getAttributeLevel()) > 0;
  };
  _proto31.decreaseBlockAttributeLevel = function decreaseBlockAttributeLevel() {
    var t;
    var e = null === (t = this.getBlock()) || void 0 === t ? void 0 : t.getLastAttribute();
    if (e) return this.removeCurrentAttribute(e);
  };
  _proto31.decreaseListLevel = function decreaseListLevel() {
    var _Array$from9 = Array.from(this.getSelectedRange()),
      t = _Array$from9[0];
    var _this$document$locati = this.document.locationFromPosition(t),
      e = _this$document$locati.index;
    var i = e;
    var n = this.getBlock().getAttributeLevel();
    var r = this.document.getBlockAtIndex(i + 1);
    for (; r && r.isListItem() && !(r.getAttributeLevel() <= n);) i++, r = this.document.getBlockAtIndex(i + 1);
    t = this.document.positionFromLocation({
      index: e,
      offset: 0
    });
    var o = this.document.positionFromLocation({
      index: i,
      offset: 0
    });
    return this.setDocument(this.document.removeLastListAttributeAtRange([t, o]));
  };
  _proto31.updateCurrentAttributes = function updateCurrentAttributes() {
    var _this44 = this;
    var t = this.getSelectedRange({
      ignoreLock: !0
    });
    if (t) {
      var _e35 = this.document.getCommonAttributesAtRange(t);
      if (Array.from(dt()).forEach(function (t) {
        _e35[t] || _this44.canSetCurrentAttribute(t) || (_e35[t] = !1);
      }), !kt(_e35, this.currentAttributes)) return this.currentAttributes = _e35, this.notifyDelegateOfCurrentAttributesChange();
    }
  };
  _proto31.getCurrentAttributes = function getCurrentAttributes() {
    return g.call({}, this.currentAttributes);
  };
  _proto31.getCurrentTextAttributes = function getCurrentTextAttributes() {
    var t = {};
    for (var _e36 in this.currentAttributes) {
      var _i32 = this.currentAttributes[_e36];
      !1 !== _i32 && pt(_e36) && (t[_e36] = _i32);
    }
    return t;
  };
  _proto31.freezeSelection = function freezeSelection() {
    return this.setCurrentAttribute("frozen", !0);
  };
  _proto31.thawSelection = function thawSelection() {
    return this.removeCurrentAttribute("frozen");
  };
  _proto31.hasFrozenSelection = function hasFrozenSelection() {
    return this.hasCurrentAttribute("frozen");
  };
  _proto31.setSelection = function setSelection(t) {
    var e;
    var i = this.document.locationRangeFromRange(t);
    return null === (e = this.delegate) || void 0 === e ? void 0 : e.compositionDidRequestChangingSelectionToLocationRange(i);
  };
  _proto31.getSelectedRange = function getSelectedRange() {
    var t = this.getLocationRange();
    if (t) return this.document.rangeFromLocationRange(t);
  };
  _proto31.setSelectedRange = function setSelectedRange(t) {
    var e = this.document.locationRangeFromRange(t);
    return this.getSelectionManager().setLocationRange(e);
  };
  _proto31.getPosition = function getPosition() {
    var t = this.getLocationRange();
    if (t) return this.document.positionFromLocation(t[0]);
  };
  _proto31.getLocationRange = function getLocationRange(t) {
    return this.targetLocationRange ? this.targetLocationRange : this.getSelectionManager().getLocationRange(t) || Lt({
      index: 0,
      offset: 0
    });
  };
  _proto31.withTargetLocationRange = function withTargetLocationRange(t, e) {
    var i;
    this.targetLocationRange = t;
    try {
      i = e();
    } finally {
      this.targetLocationRange = null;
    }
    return i;
  };
  _proto31.withTargetRange = function withTargetRange(t, e) {
    var i = this.document.locationRangeFromRange(t);
    return this.withTargetLocationRange(i, e);
  };
  _proto31.withTargetDOMRange = function withTargetDOMRange(t, e) {
    var i = this.createLocationRangeFromDOMRange(t, {
      strict: !1
    });
    return this.withTargetLocationRange(i, e);
  };
  _proto31.getExpandedRangeInDirection = function getExpandedRangeInDirection(t) {
    var _ref15 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref15.length,
      _Array$from10 = Array.from(this.getSelectedRange()),
      i = _Array$from10[0],
      n = _Array$from10[1];
    return "backward" === t ? e ? i -= e : i = this.translateUTF16PositionFromOffset(i, -1) : e ? n += e : n = this.translateUTF16PositionFromOffset(n, 1), Lt([i, n]);
  };
  _proto31.shouldManageMovingCursorInDirection = function shouldManageMovingCursorInDirection(t) {
    if (this.editingAttachment) return !0;
    var e = this.getExpandedRangeInDirection(t);
    return null != this.getAttachmentAtRange(e);
  };
  _proto31.moveCursorInDirection = function moveCursorInDirection(t) {
    var e, i;
    if (this.editingAttachment) i = this.document.getRangeOfAttachment(this.editingAttachment);else {
      var _n20 = this.getSelectedRange();
      i = this.getExpandedRangeInDirection(t), e = !wt(_n20, i);
    }
    if ("backward" === t ? this.setSelectedRange(i[0]) : this.setSelectedRange(i[1]), e) {
      var _t33 = this.getAttachmentAtRange(i);
      if (_t33) return this.editAttachment(_t33);
    }
  };
  _proto31.expandSelectionInDirection = function expandSelectionInDirection(t) {
    var _ref16 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref16.length;
    var i = this.getExpandedRangeInDirection(t, {
      length: e
    });
    return this.setSelectedRange(i);
  };
  _proto31.expandSelectionForEditing = function expandSelectionForEditing() {
    if (this.hasCurrentAttribute("href")) return this.expandSelectionAroundCommonAttribute("href");
  };
  _proto31.expandSelectionAroundCommonAttribute = function expandSelectionAroundCommonAttribute(t) {
    var e = this.getPosition(),
      i = this.document.getRangeOfCommonAttributeAtPosition(t, e);
    return this.setSelectedRange(i);
  };
  _proto31.selectionContainsAttachments = function selectionContainsAttachments() {
    var t;
    return (null === (t = this.getSelectedAttachments()) || void 0 === t ? void 0 : t.length) > 0;
  };
  _proto31.selectionIsInCursorTarget = function selectionIsInCursorTarget() {
    return this.editingAttachment || this.positionIsCursorTarget(this.getPosition());
  };
  _proto31.positionIsCursorTarget = function positionIsCursorTarget(t) {
    var e = this.document.locationFromPosition(t);
    if (e) return this.locationIsCursorTarget(e);
  };
  _proto31.positionIsBlockBreak = function positionIsBlockBreak(t) {
    var e;
    return null === (e = this.document.getPieceAtPosition(t)) || void 0 === e ? void 0 : e.isBlockBreak();
  };
  _proto31.getSelectedDocument = function getSelectedDocument() {
    var t = this.getSelectedRange();
    if (t) return this.document.getDocumentAtRange(t);
  };
  _proto31.getSelectedAttachments = function getSelectedAttachments() {
    var t;
    return null === (t = this.getSelectedDocument()) || void 0 === t ? void 0 : t.getAttachments();
  };
  _proto31.getAttachments = function getAttachments() {
    return this.attachments.slice(0);
  };
  _proto31.refreshAttachments = function refreshAttachments() {
    var _this45 = this;
    var t = this.document.getAttachments(),
      _ref17 = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        var i = [],
          n = [],
          r = new Set();
        t.forEach(function (t) {
          r.add(t);
        });
        var o = new Set();
        return e.forEach(function (t) {
          o.add(t), r.has(t) || i.push(t);
        }), t.forEach(function (t) {
          o.has(t) || n.push(t);
        }), {
          added: i,
          removed: n
        };
      }(this.attachments, t),
      e = _ref17.added,
      i = _ref17.removed;
    return this.attachments = t, Array.from(i).forEach(function (t) {
      var e, i;
      t.delegate = null, null === (e = _this45.delegate) || void 0 === e || null === (i = e.compositionDidRemoveAttachment) || void 0 === i || i.call(e, t);
    }), function () {
      var t = [];
      return Array.from(e).forEach(function (e) {
        var i, n;
        e.delegate = _this45, t.push(null === (i = _this45.delegate) || void 0 === i || null === (n = i.compositionDidAddAttachment) || void 0 === n ? void 0 : n.call(i, e));
      }), t;
    }();
  };
  _proto31.attachmentDidChangeAttributes = function attachmentDidChangeAttributes(t) {
    var e, i;
    return this.revision++, null === (e = this.delegate) || void 0 === e || null === (i = e.compositionDidEditAttachment) || void 0 === i ? void 0 : i.call(e, t);
  };
  _proto31.attachmentDidChangePreviewURL = function attachmentDidChangePreviewURL(t) {
    var e, i;
    return this.revision++, null === (e = this.delegate) || void 0 === e || null === (i = e.compositionDidChangeAttachmentPreviewURL) || void 0 === i ? void 0 : i.call(e, t);
  };
  _proto31.editAttachment = function editAttachment(t, e) {
    var i, n;
    if (t !== this.editingAttachment) return this.stopEditingAttachment(), this.editingAttachment = t, null === (i = this.delegate) || void 0 === i || null === (n = i.compositionDidStartEditingAttachment) || void 0 === n ? void 0 : n.call(i, this.editingAttachment, e);
  };
  _proto31.stopEditingAttachment = function stopEditingAttachment() {
    var t, e;
    this.editingAttachment && (null === (t = this.delegate) || void 0 === t || null === (e = t.compositionDidStopEditingAttachment) || void 0 === e || e.call(t, this.editingAttachment), this.editingAttachment = null);
  };
  _proto31.updateAttributesForAttachment = function updateAttributesForAttachment(t, e) {
    return this.setDocument(this.document.updateAttributesForAttachment(t, e));
  };
  _proto31.removeAttributeForAttachment = function removeAttributeForAttachment(t, e) {
    return this.setDocument(this.document.removeAttributeForAttachment(t, e));
  };
  _proto31.breakFormattedBlock = function breakFormattedBlock(t) {
    var e = t.document;
    var i = t.block;
    var n = t.startPosition,
      r = [n - 1, n];
    i.getBlockBreakPosition() === t.startLocation.offset ? (i.breaksOnReturn() && "\n" === t.nextCharacter ? n += 1 : e = e.removeTextAtRange(r), r = [n, n]) : "\n" === t.nextCharacter ? "\n" === t.previousCharacter ? r = [n - 1, n + 1] : (r = [n, n + 1], n += 1) : t.startLocation.offset - 1 != 0 && (n += 1);
    var o = new qe([i.removeLastAttribute().copyWithoutText()]);
    return this.setDocument(e.insertDocumentAtRange(o, r)), this.setSelection(n);
  };
  _proto31.getPreviousBlock = function getPreviousBlock() {
    var t = this.getLocationRange();
    if (t) {
      var _e37 = t[0].index;
      if (_e37 > 0) return this.document.getBlockAtIndex(_e37 - 1);
    }
  };
  _proto31.getBlock = function getBlock() {
    var t = this.getLocationRange();
    if (t) return this.document.getBlockAtIndex(t[0].index);
  };
  _proto31.getAttachmentAtRange = function getAttachmentAtRange(t) {
    var e = this.document.getDocumentAtRange(t);
    if (e.toString() === "".concat("￼", "\n")) return e.getAttachments()[0];
  };
  _proto31.notifyDelegateOfCurrentAttributesChange = function notifyDelegateOfCurrentAttributesChange() {
    var t, e;
    return null === (t = this.delegate) || void 0 === t || null === (e = t.compositionDidChangeCurrentAttributes) || void 0 === e ? void 0 : e.call(t, this.currentAttributes);
  };
  _proto31.notifyDelegateOfInsertionAtRange = function notifyDelegateOfInsertionAtRange(t) {
    var e, i;
    return null === (e = this.delegate) || void 0 === e || null === (i = e.compositionDidPerformInsertionAtRange) || void 0 === i ? void 0 : i.call(e, t);
  };
  _proto31.translateUTF16PositionFromOffset = function translateUTF16PositionFromOffset(t, e) {
    var i = this.document.toUTF16String(),
      n = i.offsetFromUCS2Offset(t);
    return i.offsetToUCS2Offset(n + e);
  };
  return gi;
}(z);
gi.proxyMethod("getSelectionManager().getPointRange"), gi.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"), gi.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"), gi.proxyMethod("getSelectionManager().locationIsCursorTarget"), gi.proxyMethod("getSelectionManager().selectionIsExpanded"), gi.proxyMethod("delegate?.getSelectionManager");
var mi = /*#__PURE__*/function (_z12) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(mi, _z12);
  function mi(t) {
    var _this46;
    _this46 = _z12.apply(this, arguments) || this, _this46.composition = t, _this46.undoEntries = [], _this46.redoEntries = [];
    return _this46;
  }
  var _proto32 = mi.prototype;
  _proto32.recordUndoEntry = function recordUndoEntry(t) {
    var _ref18 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref18.context,
      i = _ref18.consolidatable;
    var n = this.undoEntries.slice(-1)[0];
    if (!i || !pi(n, t, e)) {
      var _i33 = this.createEntry({
        description: t,
        context: e
      });
      this.undoEntries.push(_i33), this.redoEntries = [];
    }
  };
  _proto32.undo = function undo() {
    var t = this.undoEntries.pop();
    if (t) {
      var _e38 = this.createEntry(t);
      return this.redoEntries.push(_e38), this.composition.loadSnapshot(t.snapshot);
    }
  };
  _proto32.redo = function redo() {
    var t = this.redoEntries.pop();
    if (t) {
      var _e39 = this.createEntry(t);
      return this.undoEntries.push(_e39), this.composition.loadSnapshot(t.snapshot);
    }
  };
  _proto32.canUndo = function canUndo() {
    return this.undoEntries.length > 0;
  };
  _proto32.canRedo = function canRedo() {
    return this.redoEntries.length > 0;
  };
  _proto32.createEntry = function createEntry() {
    var _ref19 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = _ref19.description,
      e = _ref19.context;
    return {
      description: null == t ? void 0 : t.toString(),
      context: JSON.stringify(e),
      snapshot: this.composition.getSnapshot()
    };
  };
  return mi;
}(z);
var pi = function pi(t, e, i) {
    return (null == t ? void 0 : t.description) === (null == e ? void 0 : e.toString()) && (null == t ? void 0 : t.context) === JSON.stringify(i);
  },
  fi = "attachmentGallery";
var bi = /*#__PURE__*/function () {
  function bi(t) {
    this.document = t.document, this.selectedRange = t.selectedRange;
  }
  var _proto33 = bi.prototype;
  _proto33.perform = function perform() {
    return this.removeBlockAttribute(), this.applyBlockAttribute();
  };
  _proto33.getSnapshot = function getSnapshot() {
    return {
      document: this.document,
      selectedRange: this.selectedRange
    };
  };
  _proto33.removeBlockAttribute = function removeBlockAttribute() {
    var _this47 = this;
    return this.findRangesOfBlocks().map(function (t) {
      return _this47.document = _this47.document.removeAttributeAtRange(fi, t);
    });
  };
  _proto33.applyBlockAttribute = function applyBlockAttribute() {
    var _this48 = this;
    var t = 0;
    this.findRangesOfPieces().forEach(function (e) {
      e[1] - e[0] > 1 && (e[0] += t, e[1] += t, "\n" !== _this48.document.getCharacterAtPosition(e[1]) && (_this48.document = _this48.document.insertBlockBreakAtRange(e[1]), e[1] < _this48.selectedRange[1] && _this48.moveSelectedRangeForward(), e[1]++, t++), 0 !== e[0] && "\n" !== _this48.document.getCharacterAtPosition(e[0] - 1) && (_this48.document = _this48.document.insertBlockBreakAtRange(e[0]), e[0] < _this48.selectedRange[0] && _this48.moveSelectedRangeForward(), e[0]++, t++), _this48.document = _this48.document.applyBlockAttributeAtRange(fi, !0, e));
    });
  };
  _proto33.findRangesOfBlocks = function findRangesOfBlocks() {
    return this.document.findRangesForBlockAttribute(fi);
  };
  _proto33.findRangesOfPieces = function findRangesOfPieces() {
    return this.document.findRangesForTextAttribute("presentation", {
      withValue: "gallery"
    });
  };
  _proto33.moveSelectedRangeForward = function moveSelectedRangeForward() {
    this.selectedRange[0] += 1, this.selectedRange[1] += 1;
  };
  return bi;
}();
var vi = function vi(t) {
    var e = new bi(t);
    return e.perform(), e.getSnapshot();
  },
  Ai = [vi];
var xi = /*#__PURE__*/function () {
  function xi(t, e, i) {
    this.insertFiles = this.insertFiles.bind(this), this.composition = t, this.selectionManager = e, this.element = i, this.undoManager = new mi(this.composition), this.filters = Ai.slice(0);
  }
  var _proto34 = xi.prototype;
  _proto34.loadDocument = function loadDocument(t) {
    return this.loadSnapshot({
      document: t,
      selectedRange: [0, 0]
    });
  };
  _proto34.loadHTML = function loadHTML() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    var e = Xe.parse(t, {
      referenceElement: this.element
    }).getDocument();
    return this.loadDocument(e);
  };
  _proto34.loadJSON = function loadJSON(t) {
    var e = t.document,
      i = t.selectedRange;
    return e = qe.fromJSON(e), this.loadSnapshot({
      document: e,
      selectedRange: i
    });
  };
  _proto34.loadSnapshot = function loadSnapshot(t) {
    return this.undoManager = new mi(this.composition), this.composition.loadSnapshot(t);
  };
  _proto34.getDocument = function getDocument() {
    return this.composition.document;
  };
  _proto34.getSelectedDocument = function getSelectedDocument() {
    return this.composition.getSelectedDocument();
  };
  _proto34.getSnapshot = function getSnapshot() {
    return this.composition.getSnapshot();
  };
  _proto34.toJSON = function toJSON() {
    return this.getSnapshot();
  };
  _proto34.deleteInDirection = function deleteInDirection(t) {
    return this.composition.deleteInDirection(t);
  };
  _proto34.insertAttachment = function insertAttachment(t) {
    return this.composition.insertAttachment(t);
  };
  _proto34.insertAttachments = function insertAttachments(t) {
    return this.composition.insertAttachments(t);
  };
  _proto34.insertDocument = function insertDocument(t) {
    return this.composition.insertDocument(t);
  };
  _proto34.insertFile = function insertFile(t) {
    return this.composition.insertFile(t);
  };
  _proto34.insertFiles = function insertFiles(t) {
    return this.composition.insertFiles(t);
  };
  _proto34.insertHTML = function insertHTML(t) {
    return this.composition.insertHTML(t);
  };
  _proto34.insertString = function insertString(t) {
    return this.composition.insertString(t);
  };
  _proto34.insertText = function insertText(t) {
    return this.composition.insertText(t);
  };
  _proto34.insertLineBreak = function insertLineBreak() {
    return this.composition.insertLineBreak();
  };
  _proto34.getSelectedRange = function getSelectedRange() {
    return this.composition.getSelectedRange();
  };
  _proto34.getPosition = function getPosition() {
    return this.composition.getPosition();
  };
  _proto34.getClientRectAtPosition = function getClientRectAtPosition(t) {
    var e = this.getDocument().locationRangeFromRange([t, t + 1]);
    return this.selectionManager.getClientRectAtLocationRange(e);
  };
  _proto34.expandSelectionInDirection = function expandSelectionInDirection(t) {
    return this.composition.expandSelectionInDirection(t);
  };
  _proto34.moveCursorInDirection = function moveCursorInDirection(t) {
    return this.composition.moveCursorInDirection(t);
  };
  _proto34.setSelectedRange = function setSelectedRange(t) {
    return this.composition.setSelectedRange(t);
  };
  _proto34.activateAttribute = function activateAttribute(t) {
    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return this.composition.setCurrentAttribute(t, e);
  };
  _proto34.attributeIsActive = function attributeIsActive(t) {
    return this.composition.hasCurrentAttribute(t);
  };
  _proto34.canActivateAttribute = function canActivateAttribute(t) {
    return this.composition.canSetCurrentAttribute(t);
  };
  _proto34.deactivateAttribute = function deactivateAttribute(t) {
    return this.composition.removeCurrentAttribute(t);
  };
  _proto34.canDecreaseNestingLevel = function canDecreaseNestingLevel() {
    return this.composition.canDecreaseNestingLevel();
  };
  _proto34.canIncreaseNestingLevel = function canIncreaseNestingLevel() {
    return this.composition.canIncreaseNestingLevel();
  };
  _proto34.decreaseNestingLevel = function decreaseNestingLevel() {
    if (this.canDecreaseNestingLevel()) return this.composition.decreaseNestingLevel();
  };
  _proto34.increaseNestingLevel = function increaseNestingLevel() {
    if (this.canIncreaseNestingLevel()) return this.composition.increaseNestingLevel();
  };
  _proto34.canRedo = function canRedo() {
    return this.undoManager.canRedo();
  };
  _proto34.canUndo = function canUndo() {
    return this.undoManager.canUndo();
  };
  _proto34.recordUndoEntry = function recordUndoEntry(t) {
    var _ref20 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref20.context,
      i = _ref20.consolidatable;
    return this.undoManager.recordUndoEntry(t, {
      context: e,
      consolidatable: i
    });
  };
  _proto34.redo = function redo() {
    if (this.canRedo()) return this.undoManager.redo();
  };
  _proto34.undo = function undo() {
    if (this.canUndo()) return this.undoManager.undo();
  };
  return xi;
}();
var yi = /*#__PURE__*/function () {
  function yi(t) {
    this.element = t;
  }
  var _proto35 = yi.prototype;
  _proto35.findLocationFromContainerAndOffset = function findLocationFromContainerAndOffset(t, e) {
    var _ref21 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
        strict: !0
      },
      i = _ref21.strict,
      n = 0,
      r = !1;
    var o = {
        index: 0,
        offset: 0
      },
      s = this.findAttachmentElementParentForNode(t);
    s && (t = s.parentNode, e = C(s));
    var a = S(this.element, {
      usingFilter: Ei
    });
    for (; a.nextNode();) {
      var _s4 = a.currentNode;
      if (_s4 === t && O(t)) {
        I(_s4) || (o.offset += e);
        break;
      }
      if (_s4.parentNode === t) {
        if (n++ === e) break;
      } else if (!y(t, _s4) && n > 0) break;
      T(_s4, {
        strict: i
      }) ? (r && o.index++, o.offset = 0, r = !0) : o.offset += Ci(_s4);
    }
    return o;
  };
  _proto35.findContainerAndOffsetFromLocation = function findContainerAndOffsetFromLocation(t) {
    var e, i;
    if (0 === t.index && 0 === t.offset) {
      for (e = this.element, i = 0; e.firstChild;) if (e = e.firstChild, w(e)) {
        i = 1;
        break;
      }
      return [e, i];
    }
    var _this$findNodeAndOffs = this.findNodeAndOffsetFromLocation(t),
      n = _this$findNodeAndOffs[0],
      r = _this$findNodeAndOffs[1];
    if (n) {
      if (O(n)) 0 === Ci(n) ? (e = n.parentNode.parentNode, i = C(n.parentNode), I(n, {
        name: "right"
      }) && i++) : (e = n, i = t.offset - r);else {
        if (e = n.parentNode, !T(n.previousSibling) && !w(e)) for (; n === e.lastChild && (n = e, e = e.parentNode, !w(e)););
        i = C(n), 0 !== t.offset && i++;
      }
      return [e, i];
    }
  };
  _proto35.findNodeAndOffsetFromLocation = function findNodeAndOffsetFromLocation(t) {
    var e,
      i,
      n = 0;
    for (var _iterator6 = _createForOfIteratorHelperLoose(this.getSignificantNodesForIndex(t.index)), _step6; !(_step6 = _iterator6()).done;) {
      var _r11 = _step6.value;
      var _o8 = Ci(_r11);
      if (t.offset <= n + _o8) if (O(_r11)) {
        if (e = _r11, i = n, t.offset === i && I(e)) break;
      } else e || (e = _r11, i = n);
      if (n += _o8, n > t.offset) break;
    }
    return [e, i];
  };
  _proto35.findAttachmentElementParentForNode = function findAttachmentElementParentForNode(t) {
    for (; t && t !== this.element;) {
      if (P(t)) return t;
      t = t.parentNode;
    }
  };
  _proto35.getSignificantNodesForIndex = function getSignificantNodesForIndex(t) {
    var e = [],
      i = S(this.element, {
        usingFilter: Ri
      });
    var n = !1;
    for (; i.nextNode();) {
      var _o9 = i.currentNode;
      var r;
      if (B(_o9)) {
        if (null != r ? r++ : r = 0, r === t) n = !0;else if (n) break;
      } else n && e.push(_o9);
    }
    return e;
  };
  return yi;
}();
var Ci = function Ci(t) {
    if (t.nodeType === Node.TEXT_NODE) {
      if (I(t)) return 0;
      return t.textContent.length;
    }
    return "br" === E(t) || P(t) ? 1 : 0;
  },
  Ri = function Ri(t) {
    return Si(t) === NodeFilter.FILTER_ACCEPT ? Ei(t) : NodeFilter.FILTER_REJECT;
  },
  Si = function Si(t) {
    return N(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  },
  Ei = function Ei(t) {
    return P(t.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  };
var ki = /*#__PURE__*/function () {
  function ki() {}
  var _proto36 = ki.prototype;
  _proto36.createDOMRangeFromPoint = function createDOMRangeFromPoint(t) {
    var e,
      i = t.x,
      n = t.y;
    if (document.caretPositionFromPoint) {
      var _document$caretPositi = document.caretPositionFromPoint(i, n),
        _t34 = _document$caretPositi.offsetNode,
        _r12 = _document$caretPositi.offset;
      return e = document.createRange(), e.setStart(_t34, _r12), e;
    }
    if (document.caretRangeFromPoint) return document.caretRangeFromPoint(i, n);
    if (document.body.createTextRange) {
      var _t35 = Nt();
      try {
        var _t36 = document.body.createTextRange();
        _t36.moveToPoint(i, n), _t36.select();
      } catch (t) {}
      return e = Nt(), Ot(_t35), e;
    }
  };
  _proto36.getClientRectsForDOMRange = function getClientRectsForDOMRange(t) {
    var e = Array.from(t.getClientRects());
    return [e[0], e[e.length - 1]];
  };
  return ki;
}();
var Li = /*#__PURE__*/function (_z13) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Li, _z13);
  function Li(t) {
    var _this49;
    _this49 = _z13.apply(this, arguments) || this, _this49.didMouseDown = _this49.didMouseDown.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this49)), _this49.selectionDidChange = _this49.selectionDidChange.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this49)), _this49.element = t, _this49.locationMapper = new yi(_this49.element), _this49.pointMapper = new ki(), _this49.lockCount = 0, f("mousedown", {
      onElement: _this49.element,
      withCallback: _this49.didMouseDown
    });
    return _this49;
  }
  var _proto37 = Li.prototype;
  _proto37.getLocationRange = function getLocationRange() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return !1 === t.strict ? this.createLocationRangeFromDOMRange(Nt()) : t.ignoreLock ? this.currentLocationRange : this.lockedLocationRange ? this.lockedLocationRange : this.currentLocationRange;
  };
  _proto37.setLocationRange = function setLocationRange(t) {
    if (this.lockedLocationRange) return;
    t = Lt(t);
    var e = this.createDOMRangeFromLocationRange(t);
    e && (Ot(e), this.updateCurrentLocationRange(t));
  };
  _proto37.setLocationRangeFromPointRange = function setLocationRangeFromPointRange(t) {
    t = Lt(t);
    var e = this.getLocationAtPoint(t[0]),
      i = this.getLocationAtPoint(t[1]);
    this.setLocationRange([e, i]);
  };
  _proto37.getClientRectAtLocationRange = function getClientRectAtLocationRange(t) {
    var e = this.createDOMRangeFromLocationRange(t);
    if (e) return this.getClientRectsForDOMRange(e)[1];
  };
  _proto37.locationIsCursorTarget = function locationIsCursorTarget(t) {
    var e = Array.from(this.findNodeAndOffsetFromLocation(t))[0];
    return I(e);
  };
  _proto37.lock = function lock() {
    0 == this.lockCount++ && (this.updateCurrentLocationRange(), this.lockedLocationRange = this.getLocationRange());
  };
  _proto37.unlock = function unlock() {
    if (0 == --this.lockCount) {
      var _t37 = this.lockedLocationRange;
      if (this.lockedLocationRange = null, null != _t37) return this.setLocationRange(_t37);
    }
  };
  _proto37.clearSelection = function clearSelection() {
    var t;
    return null === (t = Pt()) || void 0 === t ? void 0 : t.removeAllRanges();
  };
  _proto37.selectionIsCollapsed = function selectionIsCollapsed() {
    var t;
    return !0 === (null === (t = Nt()) || void 0 === t ? void 0 : t.collapsed);
  };
  _proto37.selectionIsExpanded = function selectionIsExpanded() {
    return !this.selectionIsCollapsed();
  };
  _proto37.createLocationRangeFromDOMRange = function createLocationRangeFromDOMRange(t, e) {
    if (null == t || !this.domRangeWithinElement(t)) return;
    var i = this.findLocationFromContainerAndOffset(t.startContainer, t.startOffset, e);
    if (!i) return;
    var n = t.collapsed ? void 0 : this.findLocationFromContainerAndOffset(t.endContainer, t.endOffset, e);
    return Lt([i, n]);
  };
  _proto37.didMouseDown = function didMouseDown() {
    return this.pauseTemporarily();
  };
  _proto37.pauseTemporarily = function pauseTemporarily() {
    var _this50 = this;
    var t;
    this.paused = !0;
    var e = function e() {
        if (_this50.paused = !1, clearTimeout(i), Array.from(t).forEach(function (t) {
          t.destroy();
        }), y(document, _this50.element)) return _this50.selectionDidChange();
      },
      i = setTimeout(e, 200);
    t = ["mousemove", "keydown"].map(function (t) {
      return f(t, {
        onElement: document,
        withCallback: e
      });
    });
  };
  _proto37.selectionDidChange = function selectionDidChange() {
    if (!this.paused && !x(this.element)) return this.updateCurrentLocationRange();
  };
  _proto37.updateCurrentLocationRange = function updateCurrentLocationRange(t) {
    var e, i;
    if ((null != t ? t : t = this.createLocationRangeFromDOMRange(Nt())) && !wt(t, this.currentLocationRange)) return this.currentLocationRange = t, null === (e = this.delegate) || void 0 === e || null === (i = e.locationRangeDidChange) || void 0 === i ? void 0 : i.call(e, this.currentLocationRange.slice(0));
  };
  _proto37.createDOMRangeFromLocationRange = function createDOMRangeFromLocationRange(t) {
    var e = this.findContainerAndOffsetFromLocation(t[0]),
      i = Dt(t) ? e : this.findContainerAndOffsetFromLocation(t[1]) || e;
    if (null != e && null != i) {
      var _t38 = document.createRange();
      return _t38.setStart.apply(_t38, Array.from(e || [])), _t38.setEnd.apply(_t38, Array.from(i || [])), _t38;
    }
  };
  _proto37.getLocationAtPoint = function getLocationAtPoint(t) {
    var e = this.createDOMRangeFromPoint(t);
    var i;
    if (e) return null === (i = this.createLocationRangeFromDOMRange(e)) || void 0 === i ? void 0 : i[0];
  };
  _proto37.domRangeWithinElement = function domRangeWithinElement(t) {
    return t.collapsed ? y(this.element, t.startContainer) : y(this.element, t.startContainer) && y(this.element, t.endContainer);
  };
  return Li;
}(z);
Li.proxyMethod("locationMapper.findLocationFromContainerAndOffset"), Li.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"), Li.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"), Li.proxyMethod("pointMapper.createDOMRangeFromPoint"), Li.proxyMethod("pointMapper.getClientRectsForDOMRange");
var Di = Object.freeze({
    __proto__: null,
    Attachment: Re,
    AttachmentManager: ui,
    AttachmentPiece: Se,
    Block: Be,
    Composition: gi,
    Document: qe,
    Editor: xi,
    HTMLParser: Xe,
    HTMLSanitizer: Je,
    LineBreakInsertion: di,
    LocationMapper: yi,
    ManagedAttachment: hi,
    Piece: ye,
    PointMapper: ki,
    SelectionManager: Li,
    SplittableList: ke,
    StringPiece: Ee,
    Text: Te,
    UndoManager: mi
  }),
  wi = Object.freeze({
    __proto__: null,
    ObjectView: ee,
    AttachmentView: re,
    BlockView: de,
    DocumentView: ge,
    PieceView: le,
    PreviewableAttachmentView: ae,
    TextView: ce
  });
var Ti = V.lang,
  Bi = V.css,
  Fi = V.keyNames,
  Ii = function Ii(t) {
    return function () {
      var e = t.apply(this, arguments);
      e["do"](), this.undos || (this.undos = []), this.undos.push(e.undo);
    };
  };
var Pi = /*#__PURE__*/function (_z14) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Pi, _z14);
  function Pi(t, e, i) {
    var _this51;
    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    _this51 = _z14.apply(this, arguments) || this, Ae((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this51), "makeElementMutable", Ii(function () {
      return {
        "do": function _do() {
          _this51.element.dataset.trixMutable = !0;
        },
        undo: function undo() {
          return delete _this51.element.dataset.trixMutable;
        }
      };
    })), Ae((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this51), "addToolbar", Ii(function () {
      var t = k({
        tagName: "div",
        className: Bi.attachmentToolbar,
        data: {
          trixMutable: !0
        },
        childNodes: k({
          tagName: "div",
          className: "trix-button-row",
          childNodes: k({
            tagName: "span",
            className: "trix-button-group trix-button-group--actions",
            childNodes: k({
              tagName: "button",
              className: "trix-button trix-button--remove",
              textContent: Ti.remove,
              attributes: {
                title: Ti.remove
              },
              data: {
                trixAction: "remove"
              }
            })
          })
        })
      });
      return _this51.attachment.isPreviewable() && t.appendChild(k({
        tagName: "div",
        className: Bi.attachmentMetadataContainer,
        childNodes: k({
          tagName: "span",
          className: Bi.attachmentMetadata,
          childNodes: [k({
            tagName: "span",
            className: Bi.attachmentName,
            textContent: _this51.attachment.getFilename(),
            attributes: {
              title: _this51.attachment.getFilename()
            }
          }), k({
            tagName: "span",
            className: Bi.attachmentSize,
            textContent: _this51.attachment.getFormattedFilesize()
          })]
        })
      })), f("click", {
        onElement: t,
        withCallback: _this51.didClickToolbar
      }), f("click", {
        onElement: t,
        matchingSelector: "[data-trix-action]",
        withCallback: _this51.didClickActionButton
      }), b("trix-attachment-before-toolbar", {
        onElement: _this51.element,
        attributes: {
          toolbar: t,
          attachment: _this51.attachment
        }
      }), {
        "do": function _do() {
          return _this51.element.appendChild(t);
        },
        undo: function undo() {
          return R(t);
        }
      };
    })), Ae((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this51), "installCaptionEditor", Ii(function () {
      var t = k({
        tagName: "textarea",
        className: Bi.attachmentCaptionEditor,
        attributes: {
          placeholder: Ti.captionPlaceholder
        },
        data: {
          trixMutable: !0
        }
      });
      t.value = _this51.attachmentPiece.getCaption();
      var e = t.cloneNode();
      e.classList.add("trix-autoresize-clone"), e.tabIndex = -1;
      var i = function i() {
        e.value = t.value, t.style.height = e.scrollHeight + "px";
      };
      f("input", {
        onElement: t,
        withCallback: i
      }), f("input", {
        onElement: t,
        withCallback: _this51.didInputCaption
      }), f("keydown", {
        onElement: t,
        withCallback: _this51.didKeyDownCaption
      }), f("change", {
        onElement: t,
        withCallback: _this51.didChangeCaption
      }), f("blur", {
        onElement: t,
        withCallback: _this51.didBlurCaption
      });
      var n = _this51.element.querySelector("figcaption"),
        r = n.cloneNode();
      return {
        "do": function _do() {
          if (n.style.display = "none", r.appendChild(t), r.appendChild(e), r.classList.add("".concat(Bi.attachmentCaption, "--editing")), n.parentElement.insertBefore(r, n), i(), _this51.options.editCaption) return St(function () {
            return t.focus();
          });
        },
        undo: function undo() {
          R(r), n.style.display = null;
        }
      };
    })), _this51.didClickToolbar = _this51.didClickToolbar.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this51)), _this51.didClickActionButton = _this51.didClickActionButton.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this51)), _this51.didKeyDownCaption = _this51.didKeyDownCaption.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this51)), _this51.didInputCaption = _this51.didInputCaption.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this51)), _this51.didChangeCaption = _this51.didChangeCaption.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this51)), _this51.didBlurCaption = _this51.didBlurCaption.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this51)), _this51.attachmentPiece = t, _this51.element = e, _this51.container = i, _this51.options = n, _this51.attachment = _this51.attachmentPiece.attachment, "a" === E(_this51.element) && (_this51.element = _this51.element.firstChild), _this51.install();
    return _this51;
  }
  var _proto38 = Pi.prototype;
  _proto38.install = function install() {
    this.makeElementMutable(), this.addToolbar(), this.attachment.isPreviewable() && this.installCaptionEditor();
  };
  _proto38.uninstall = function uninstall() {
    var t;
    var e = this.undos.pop();
    for (this.savePendingCaption(); e;) e(), e = this.undos.pop();
    null === (t = this.delegate) || void 0 === t || t.didUninstallAttachmentEditor(this);
  };
  _proto38.savePendingCaption = function savePendingCaption() {
    if (null != this.pendingCaption) {
      var _r13 = this.pendingCaption;
      var t, e, i, n;
      if (this.pendingCaption = null, _r13) null === (t = this.delegate) || void 0 === t || null === (e = t.attachmentEditorDidRequestUpdatingAttributesForAttachment) || void 0 === e || e.call(t, {
        caption: _r13
      }, this.attachment);else null === (i = this.delegate) || void 0 === i || null === (n = i.attachmentEditorDidRequestRemovingAttributeForAttachment) || void 0 === n || n.call(i, "caption", this.attachment);
    }
  };
  _proto38.didClickToolbar = function didClickToolbar(t) {
    return t.preventDefault(), t.stopPropagation();
  };
  _proto38.didClickActionButton = function didClickActionButton(t) {
    var e;
    if ("remove" === t.target.getAttribute("data-trix-action")) return null === (e = this.delegate) || void 0 === e ? void 0 : e.attachmentEditorDidRequestRemovalOfAttachment(this.attachment);
  };
  _proto38.didKeyDownCaption = function didKeyDownCaption(t) {
    var e, i;
    if ("return" === Fi[t.keyCode]) return t.preventDefault(), this.savePendingCaption(), null === (e = this.delegate) || void 0 === e || null === (i = e.attachmentEditorDidRequestDeselectingAttachment) || void 0 === i ? void 0 : i.call(e, this.attachment);
  };
  _proto38.didInputCaption = function didInputCaption(t) {
    this.pendingCaption = t.target.value.replace(/\s/g, " ").trim();
  };
  _proto38.didChangeCaption = function didChangeCaption(t) {
    return this.savePendingCaption();
  };
  _proto38.didBlurCaption = function didBlurCaption(t) {
    return this.savePendingCaption();
  };
  return Pi;
}(z);
var Ni = /*#__PURE__*/function (_z15) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Ni, _z15);
  function Ni(t, i) {
    var _this52;
    _this52 = _z15.apply(this, arguments) || this, _this52.didFocus = _this52.didFocus.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this52)), _this52.didBlur = _this52.didBlur.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this52)), _this52.didClickAttachment = _this52.didClickAttachment.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this52)), _this52.element = t, _this52.composition = i, _this52.documentView = new ge(_this52.composition.document, {
      element: _this52.element
    }), f("focus", {
      onElement: _this52.element,
      withCallback: _this52.didFocus
    }), f("blur", {
      onElement: _this52.element,
      withCallback: _this52.didBlur
    }), f("click", {
      onElement: _this52.element,
      matchingSelector: "a[contenteditable=false]",
      preventDefault: !0
    }), f("mousedown", {
      onElement: _this52.element,
      matchingSelector: e,
      withCallback: _this52.didClickAttachment
    }), f("click", {
      onElement: _this52.element,
      matchingSelector: "a".concat(e),
      preventDefault: !0
    });
    return _this52;
  }
  var _proto39 = Ni.prototype;
  _proto39.didFocus = function didFocus(t) {
    var _this53 = this;
    var e;
    var i = function i() {
      var t, e;
      if (!_this53.focused) return _this53.focused = !0, null === (t = _this53.delegate) || void 0 === t || null === (e = t.compositionControllerDidFocus) || void 0 === e ? void 0 : e.call(t);
    };
    return (null === (e = this.blurPromise) || void 0 === e ? void 0 : e.then(i)) || i();
  };
  _proto39.didBlur = function didBlur(t) {
    var _this54 = this;
    this.blurPromise = new Promise(function (t) {
      return St(function () {
        var e, i;
        x(_this54.element) || (_this54.focused = null, null === (e = _this54.delegate) || void 0 === e || null === (i = e.compositionControllerDidBlur) || void 0 === i || i.call(e));
        return _this54.blurPromise = null, t();
      });
    });
  };
  _proto39.didClickAttachment = function didClickAttachment(t, e) {
    var i, n;
    var r = this.findAttachmentForElement(e),
      o = !!A(t.target, {
        matchingSelector: "figcaption"
      });
    return null === (i = this.delegate) || void 0 === i || null === (n = i.compositionControllerDidSelectAttachment) || void 0 === n ? void 0 : n.call(i, r, {
      editCaption: o
    });
  };
  _proto39.getSerializableElement = function getSerializableElement() {
    return this.isEditingAttachment() ? this.documentView.shadowElement : this.element;
  };
  _proto39.render = function render() {
    var t, e, i, n, r, o;
    (this.revision !== this.composition.revision && (this.documentView.setDocument(this.composition.document), this.documentView.render(), this.revision = this.composition.revision), this.canSyncDocumentView() && !this.documentView.isSynced()) && (null === (i = this.delegate) || void 0 === i || null === (n = i.compositionControllerWillSyncDocumentView) || void 0 === n || n.call(i), this.documentView.sync(), null === (r = this.delegate) || void 0 === r || null === (o = r.compositionControllerDidSyncDocumentView) || void 0 === o || o.call(r));
    return null === (t = this.delegate) || void 0 === t || null === (e = t.compositionControllerDidRender) || void 0 === e ? void 0 : e.call(t);
  };
  _proto39.rerenderViewForObject = function rerenderViewForObject(t) {
    return this.invalidateViewForObject(t), this.render();
  };
  _proto39.invalidateViewForObject = function invalidateViewForObject(t) {
    return this.documentView.invalidateViewForObject(t);
  };
  _proto39.isViewCachingEnabled = function isViewCachingEnabled() {
    return this.documentView.isViewCachingEnabled();
  };
  _proto39.enableViewCaching = function enableViewCaching() {
    return this.documentView.enableViewCaching();
  };
  _proto39.disableViewCaching = function disableViewCaching() {
    return this.documentView.disableViewCaching();
  };
  _proto39.refreshViewCache = function refreshViewCache() {
    return this.documentView.garbageCollectCachedViews();
  };
  _proto39.isEditingAttachment = function isEditingAttachment() {
    return !!this.attachmentEditor;
  };
  _proto39.installAttachmentEditorForAttachment = function installAttachmentEditorForAttachment(t, e) {
    var i;
    if ((null === (i = this.attachmentEditor) || void 0 === i ? void 0 : i.attachment) === t) return;
    var n = this.documentView.findElementForObject(t);
    if (!n) return;
    this.uninstallAttachmentEditor();
    var r = this.composition.document.getAttachmentPieceForAttachment(t);
    this.attachmentEditor = new Pi(r, n, this.element, e), this.attachmentEditor.delegate = this;
  };
  _proto39.uninstallAttachmentEditor = function uninstallAttachmentEditor() {
    var t;
    return null === (t = this.attachmentEditor) || void 0 === t ? void 0 : t.uninstall();
  };
  _proto39.didUninstallAttachmentEditor = function didUninstallAttachmentEditor() {
    return this.attachmentEditor = null, this.render();
  };
  _proto39.attachmentEditorDidRequestUpdatingAttributesForAttachment = function attachmentEditorDidRequestUpdatingAttributesForAttachment(t, e) {
    var i, n;
    return null === (i = this.delegate) || void 0 === i || null === (n = i.compositionControllerWillUpdateAttachment) || void 0 === n || n.call(i, e), this.composition.updateAttributesForAttachment(t, e);
  };
  _proto39.attachmentEditorDidRequestRemovingAttributeForAttachment = function attachmentEditorDidRequestRemovingAttributeForAttachment(t, e) {
    var i, n;
    return null === (i = this.delegate) || void 0 === i || null === (n = i.compositionControllerWillUpdateAttachment) || void 0 === n || n.call(i, e), this.composition.removeAttributeForAttachment(t, e);
  };
  _proto39.attachmentEditorDidRequestRemovalOfAttachment = function attachmentEditorDidRequestRemovalOfAttachment(t) {
    var e, i;
    return null === (e = this.delegate) || void 0 === e || null === (i = e.compositionControllerDidRequestRemovalOfAttachment) || void 0 === i ? void 0 : i.call(e, t);
  };
  _proto39.attachmentEditorDidRequestDeselectingAttachment = function attachmentEditorDidRequestDeselectingAttachment(t) {
    var e, i;
    return null === (e = this.delegate) || void 0 === e || null === (i = e.compositionControllerDidRequestDeselectingAttachment) || void 0 === i ? void 0 : i.call(e, t);
  };
  _proto39.canSyncDocumentView = function canSyncDocumentView() {
    return !this.isEditingAttachment();
  };
  _proto39.findAttachmentForElement = function findAttachmentForElement(t) {
    return this.composition.document.getAttachmentById(parseInt(t.dataset.trixId, 10));
  };
  return Ni;
}(z);
var Oi = /*#__PURE__*/function (_z16) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Oi, _z16);
  function Oi() {
    return _z16.apply(this, arguments) || this;
  }
  return Oi;
}(z);
var Mi = "data-trix-mutable",
  ji = "[".concat(Mi, "]"),
  Wi = {
    attributes: !0,
    childList: !0,
    characterData: !0,
    characterDataOldValue: !0,
    subtree: !0
  };
var Ui = /*#__PURE__*/function (_z17) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Ui, _z17);
  function Ui(t) {
    var _this55;
    _this55 = _z17.call(this, t) || this, _this55.didMutate = _this55.didMutate.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this55)), _this55.element = t, _this55.observer = new window.MutationObserver(_this55.didMutate), _this55.start();
    return _this55;
  }
  var _proto40 = Ui.prototype;
  _proto40.start = function start() {
    return this.reset(), this.observer.observe(this.element, Wi);
  };
  _proto40.stop = function stop() {
    return this.observer.disconnect();
  };
  _proto40.didMutate = function didMutate(t) {
    var _this$mutations;
    var e, i;
    if ((_this$mutations = this.mutations).push.apply(_this$mutations, Array.from(this.findSignificantMutations(t) || [])), this.mutations.length) return null === (e = this.delegate) || void 0 === e || null === (i = e.elementDidMutate) || void 0 === i || i.call(e, this.getMutationSummary()), this.reset();
  };
  _proto40.reset = function reset() {
    this.mutations = [];
  };
  _proto40.findSignificantMutations = function findSignificantMutations(t) {
    var _this56 = this;
    return t.filter(function (t) {
      return _this56.mutationIsSignificant(t);
    });
  };
  _proto40.mutationIsSignificant = function mutationIsSignificant(t) {
    if (this.nodeIsMutable(t.target)) return !1;
    for (var _i34 = 0, _Array$from11 = Array.from(this.nodesModifiedByMutation(t)); _i34 < _Array$from11.length; _i34++) {
      var _e40 = _Array$from11[_i34];
      if (this.nodeIsSignificant(_e40)) return !0;
    }
    return !1;
  };
  _proto40.nodeIsSignificant = function nodeIsSignificant(t) {
    return t !== this.element && !this.nodeIsMutable(t) && !N(t);
  };
  _proto40.nodeIsMutable = function nodeIsMutable(t) {
    return A(t, {
      matchingSelector: ji
    });
  };
  _proto40.nodesModifiedByMutation = function nodesModifiedByMutation(t) {
    var e = [];
    switch (t.type) {
      case "attributes":
        t.attributeName !== Mi && e.push(t.target);
        break;
      case "characterData":
        e.push(t.target.parentNode), e.push(t.target);
        break;
      case "childList":
        e.push.apply(e, Array.from(t.addedNodes || [])), e.push.apply(e, Array.from(t.removedNodes || []));
    }
    return e;
  };
  _proto40.getMutationSummary = function getMutationSummary() {
    return this.getTextMutationSummary();
  };
  _proto40.getTextMutationSummary = function getTextMutationSummary() {
    var _this$getTextChangesF = this.getTextChangesFromCharacterData(),
      t = _this$getTextChangesF.additions,
      e = _this$getTextChangesF.deletions,
      i = this.getTextChangesFromChildList();
    Array.from(i.additions).forEach(function (e) {
      Array.from(t).includes(e) || t.push(e);
    }), e.push.apply(e, Array.from(i.deletions || []));
    var n = {},
      r = t.join("");
    r && (n.textAdded = r);
    var o = e.join("");
    return o && (n.textDeleted = o), n;
  };
  _proto40.getMutationsByType = function getMutationsByType(t) {
    return Array.from(this.mutations).filter(function (e) {
      return e.type === t;
    });
  };
  _proto40.getTextChangesFromChildList = function getTextChangesFromChildList() {
    var t, e;
    var i = [],
      n = [];
    Array.from(this.getMutationsByType("childList")).forEach(function (t) {
      i.push.apply(i, Array.from(t.addedNodes || [])), n.push.apply(n, Array.from(t.removedNodes || []));
    });
    0 === i.length && 1 === n.length && B(n[0]) ? (t = [], e = ["\n"]) : (t = qi(i), e = qi(n));
    return {
      additions: t.filter(function (t, i) {
        return t !== e[i];
      }).map(Wt),
      deletions: e.filter(function (e, i) {
        return e !== t[i];
      }).map(Wt)
    };
  };
  _proto40.getTextChangesFromCharacterData = function getTextChangesFromCharacterData() {
    var t, e;
    var i = this.getMutationsByType("characterData");
    if (i.length) {
      var _n21 = i[0],
        _r14 = i[i.length - 1],
        _o10 = function (t, e, _Vt, _Vt2) {
          var i, n;
          return t = X.box(t), (e = X.box(e)).length < t.length ? (_Vt = Vt(t, e), n = _Vt[0], i = _Vt[1], _Vt) : (_Vt2 = Vt(e, t), i = _Vt2[0], n = _Vt2[1], _Vt2), {
            added: i,
            removed: n
          };
        }(Wt(_n21.oldValue), Wt(_r14.target.data));
      t = _o10.added, e = _o10.removed;
    }
    return {
      additions: t ? [t] : [],
      deletions: e ? [e] : []
    };
  };
  return Ui;
}(z);
var qi = function qi() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
  var e = [];
  for (var _i35 = 0, _Array$from12 = Array.from(t); _i35 < _Array$from12.length; _i35++) {
    var _i36 = _Array$from12[_i35];
    switch (_i36.nodeType) {
      case Node.TEXT_NODE:
        e.push(_i36.data);
        break;
      case Node.ELEMENT_NODE:
        "br" === E(_i36) ? e.push("\n") : e.push.apply(e, Array.from(qi(_i36.childNodes) || []));
    }
  }
  return e;
};
var Vi = /*#__PURE__*/function (_te2) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Vi, _te2);
  function Vi(t) {
    var _this57;
    _this57 = _te2.apply(this, arguments) || this, _this57.file = t;
    return _this57;
  }
  var _proto41 = Vi.prototype;
  _proto41.perform = function perform(t) {
    var _this58 = this;
    var e = new FileReader();
    return e.onerror = function () {
      return t(!1);
    }, e.onload = function () {
      e.onerror = null;
      try {
        e.abort();
      } catch (t) {}
      return t(!0, _this58.file);
    }, e.readAsArrayBuffer(this.file);
  };
  return Vi;
}(te);
var zi = /*#__PURE__*/function () {
  function zi(t) {
    this.element = t;
  }
  var _proto42 = zi.prototype;
  _proto42.shouldIgnore = function shouldIgnore(t) {
    return !!a.samsungAndroid && (this.previousEvent = this.event, this.event = t, this.checkSamsungKeyboardBuggyModeStart(), this.checkSamsungKeyboardBuggyModeEnd(), this.buggyMode);
  };
  _proto42.checkSamsungKeyboardBuggyModeStart = function checkSamsungKeyboardBuggyModeStart() {
    this.insertingLongTextAfterUnidentifiedChar() && _i(this.element.innerText, this.event.data) && (this.buggyMode = !0, this.event.preventDefault());
  };
  _proto42.checkSamsungKeyboardBuggyModeEnd = function checkSamsungKeyboardBuggyModeEnd() {
    this.buggyMode && "insertText" !== this.event.inputType && (this.buggyMode = !1);
  };
  _proto42.insertingLongTextAfterUnidentifiedChar = function insertingLongTextAfterUnidentifiedChar() {
    var t;
    return this.isBeforeInputInsertText() && this.previousEventWasUnidentifiedKeydown() && (null === (t = this.event.data) || void 0 === t ? void 0 : t.length) > 50;
  };
  _proto42.isBeforeInputInsertText = function isBeforeInputInsertText() {
    return "beforeinput" === this.event.type && "insertText" === this.event.inputType;
  };
  _proto42.previousEventWasUnidentifiedKeydown = function previousEventWasUnidentifiedKeydown() {
    var t, e;
    return "keydown" === (null === (t = this.previousEvent) || void 0 === t ? void 0 : t.type) && "Unidentified" === (null === (e = this.previousEvent) || void 0 === e ? void 0 : e.key);
  };
  return zi;
}();
var _i = function _i(t, e) {
    return Ji(t) === Ji(e);
  },
  Hi = new RegExp("(".concat("￼", "|").concat(u, "|").concat(d, "|\\s)+"), "g"),
  Ji = function Ji(t) {
    return t.replace(Hi, " ").trim();
  };
var Ki = /*#__PURE__*/function (_z18) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Ki, _z18);
  function Ki(t) {
    var _this59;
    _this59 = _z18.apply(this, arguments) || this, _this59.element = t, _this59.mutationObserver = new Ui(_this59.element), _this59.mutationObserver.delegate = (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this59), _this59.flakyKeyboardDetector = new zi(_this59.element);
    for (var _t39 in _this59.constructor.events) f(_t39, {
      onElement: _this59.element,
      withCallback: _this59.handlerFor(_t39)
    });
    return _this59;
  }
  var _proto43 = Ki.prototype;
  _proto43.elementDidMutate = function elementDidMutate(t) {};
  _proto43.editorWillSyncDocumentView = function editorWillSyncDocumentView() {
    return this.mutationObserver.stop();
  };
  _proto43.editorDidSyncDocumentView = function editorDidSyncDocumentView() {
    return this.mutationObserver.start();
  };
  _proto43.requestRender = function requestRender() {
    var t, e;
    return null === (t = this.delegate) || void 0 === t || null === (e = t.inputControllerDidRequestRender) || void 0 === e ? void 0 : e.call(t);
  };
  _proto43.requestReparse = function requestReparse() {
    var t, e;
    return null === (t = this.delegate) || void 0 === t || null === (e = t.inputControllerDidRequestReparse) || void 0 === e || e.call(t), this.requestRender();
  };
  _proto43.attachFiles = function attachFiles(t) {
    var _this60 = this;
    var e = Array.from(t).map(function (t) {
      return new Vi(t);
    });
    return Promise.all(e).then(function (t) {
      _this60.handleInput(function () {
        var e, i;
        return null === (e = this.delegate) || void 0 === e || e.inputControllerWillAttachFiles(), null === (i = this.responder) || void 0 === i || i.insertFiles(t), this.requestRender();
      });
    });
  };
  _proto43.handlerFor = function handlerFor(t) {
    var _this61 = this;
    return function (e) {
      e.defaultPrevented || _this61.handleInput(function () {
        if (!x(_this61.element)) {
          if (_this61.flakyKeyboardDetector.shouldIgnore(e)) return;
          _this61.eventName = t, _this61.constructor.events[t].call(_this61, e);
        }
      });
    };
  };
  _proto43.handleInput = function handleInput(t) {
    try {
      var e;
      null === (e = this.delegate) || void 0 === e || e.inputControllerWillHandleInput(), t.call(this);
    } finally {
      var i;
      null === (i = this.delegate) || void 0 === i || i.inputControllerDidHandleInput();
    }
  };
  _proto43.createLinkHTML = function createLinkHTML(t, e) {
    var i = document.createElement("a");
    return i.href = t, i.textContent = e || t, i.outerHTML;
  };
  return Ki;
}(z);
var Gi;
Ae(Ki, "events", {});
var $i = V.browser,
  Xi = V.keyNames;
var Yi = 0;
var Qi = /*#__PURE__*/function (_Ki) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Qi, _Ki);
  function Qi() {
    var _this62;
    _this62 = _Ki.apply(this, arguments) || this, _this62.resetInputSummary();
    return _this62;
  }
  var _proto44 = Qi.prototype;
  _proto44.setInputSummary = function setInputSummary() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.inputSummary.eventName = this.eventName;
    for (var _e41 in t) {
      var _i37 = t[_e41];
      this.inputSummary[_e41] = _i37;
    }
    return this.inputSummary;
  };
  _proto44.resetInputSummary = function resetInputSummary() {
    this.inputSummary = {};
  };
  _proto44.reset = function reset() {
    return this.resetInputSummary(), It.reset();
  };
  _proto44.elementDidMutate = function elementDidMutate(t) {
    var e, i;
    return this.isComposing() ? null === (e = this.delegate) || void 0 === e || null === (i = e.inputControllerDidAllowUnhandledInput) || void 0 === i ? void 0 : i.call(e) : this.handleInput(function () {
      return this.mutationIsSignificant(t) && (this.mutationIsExpected(t) ? this.requestRender() : this.requestReparse()), this.reset();
    });
  };
  _proto44.mutationIsExpected = function mutationIsExpected(t) {
    var e = t.textAdded,
      i = t.textDeleted;
    if (this.inputSummary.preferDocument) return !0;
    var n = null != e ? e === this.inputSummary.textAdded : !this.inputSummary.textAdded,
      r = null != i ? this.inputSummary.didDelete : !this.inputSummary.didDelete,
      o = ["\n", " \n"].includes(e) && !n,
      s = "\n" === i && !r;
    if (o && !s || s && !o) {
      var _t40 = this.getSelectedRange();
      if (_t40) {
        var a;
        var _i38 = o ? e.replace(/\n$/, "").length || -1 : (null == e ? void 0 : e.length) || 1;
        if (null !== (a = this.responder) && void 0 !== a && a.positionIsBlockBreak(_t40[1] + _i38)) return !0;
      }
    }
    return n && r;
  };
  _proto44.mutationIsSignificant = function mutationIsSignificant(t) {
    var e;
    var i = Object.keys(t).length > 0,
      n = "" === (null === (e = this.compositionInput) || void 0 === e ? void 0 : e.getEndData());
    return i || !n;
  };
  _proto44.getCompositionInput = function getCompositionInput() {
    if (this.isComposing()) return this.compositionInput;
    this.compositionInput = new rn(this);
  };
  _proto44.isComposing = function isComposing() {
    return this.compositionInput && !this.compositionInput.isEnded();
  };
  _proto44.deleteInDirection = function deleteInDirection(t, e) {
    var i;
    return !1 !== (null === (i = this.responder) || void 0 === i ? void 0 : i.deleteInDirection(t)) ? this.setInputSummary({
      didDelete: !0
    }) : e ? (e.preventDefault(), this.requestRender()) : void 0;
  };
  _proto44.serializeSelectionToDataTransfer = function serializeSelectionToDataTransfer(t) {
    var e;
    if (!function (t) {
      if (null == t || !t.setData) return !1;
      for (var _e42 in yt) {
        var _i39 = yt[_e42];
        try {
          if (t.setData(_e42, _i39), !t.getData(_e42) === _i39) return !1;
        } catch (t) {
          return !1;
        }
      }
      return !0;
    }(t)) return;
    var i = null === (e = this.responder) || void 0 === e ? void 0 : e.getSelectedDocument().toSerializableDocument();
    return t.setData("application/x-trix-document", JSON.stringify(i)), t.setData("text/html", ge.render(i).innerHTML), t.setData("text/plain", i.toString().replace(/\n$/, "")), !0;
  };
  _proto44.canAcceptDataTransfer = function canAcceptDataTransfer(t) {
    var e = {};
    return Array.from((null == t ? void 0 : t.types) || []).forEach(function (t) {
      e[t] = !0;
    }), e.Files || e["application/x-trix-document"] || e["text/html"] || e["text/plain"];
  };
  _proto44.getPastedHTMLUsingHiddenElement = function getPastedHTMLUsingHiddenElement(t) {
    var _this63 = this;
    var e = this.getSelectedRange(),
      i = {
        position: "absolute",
        left: "".concat(window.pageXOffset, "px"),
        top: "".concat(window.pageYOffset, "px"),
        opacity: 0
      },
      n = k({
        style: i,
        tagName: "div",
        editable: !0
      });
    return document.body.appendChild(n), n.focus(), requestAnimationFrame(function () {
      var i = n.innerHTML;
      return R(n), _this63.setSelectedRange(e), t(i);
    });
  };
  return Qi;
}(Ki);
Ae(Qi, "events", {
  keydown: function keydown(t) {
    this.isComposing() || this.resetInputSummary(), this.inputSummary.didInput = !0;
    var e = Xi[t.keyCode];
    if (e) {
      var i;
      var _n22 = this.keys;
      ["ctrl", "alt", "shift", "meta"].forEach(function (e) {
        var i;
        t["".concat(e, "Key")] && ("ctrl" === e && (e = "control"), _n22 = null === (i = _n22) || void 0 === i ? void 0 : i[e]);
      }), null != (null === (i = _n22) || void 0 === i ? void 0 : i[e]) && (this.setInputSummary({
        keyName: e
      }), It.reset(), _n22[e].call(this, t));
    }
    if (Rt(t)) {
      var _e43 = String.fromCharCode(t.keyCode).toLowerCase();
      if (_e43) {
        var n;
        var _i40 = ["alt", "shift"].map(function (e) {
          if (t["".concat(e, "Key")]) return e;
        }).filter(function (t) {
          return t;
        });
        _i40.push(_e43), null !== (n = this.delegate) && void 0 !== n && n.inputControllerDidReceiveKeyboardCommand(_i40) && t.preventDefault();
      }
    }
  },
  keypress: function keypress(t) {
    if (null != this.inputSummary.eventName) return;
    if (t.metaKey) return;
    if (t.ctrlKey && !t.altKey) return;
    var e = en(t);
    var i, n;
    return e ? (null === (i = this.delegate) || void 0 === i || i.inputControllerWillPerformTyping(), null === (n = this.responder) || void 0 === n || n.insertString(e), this.setInputSummary({
      textAdded: e,
      didDelete: this.selectionIsExpanded()
    })) : void 0;
  },
  textInput: function textInput(t) {
    var e = t.data,
      i = this.inputSummary.textAdded;
    if (i && i !== e && i.toUpperCase() === e) {
      var n;
      var _t41 = this.getSelectedRange();
      return this.setSelectedRange([_t41[0], _t41[1] + i.length]), null === (n = this.responder) || void 0 === n || n.insertString(e), this.setInputSummary({
        textAdded: e
      }), this.setSelectedRange(_t41);
    }
  },
  dragenter: function dragenter(t) {
    t.preventDefault();
  },
  dragstart: function dragstart(t) {
    var e, i;
    return this.serializeSelectionToDataTransfer(t.dataTransfer), this.draggedRange = this.getSelectedRange(), null === (e = this.delegate) || void 0 === e || null === (i = e.inputControllerDidStartDrag) || void 0 === i ? void 0 : i.call(e);
  },
  dragover: function dragover(t) {
    if (this.draggedRange || this.canAcceptDataTransfer(t.dataTransfer)) {
      t.preventDefault();
      var _n23 = {
        x: t.clientX,
        y: t.clientY
      };
      var e, i;
      if (!kt(_n23, this.draggingPoint)) return this.draggingPoint = _n23, null === (e = this.delegate) || void 0 === e || null === (i = e.inputControllerDidReceiveDragOverPoint) || void 0 === i ? void 0 : i.call(e, this.draggingPoint);
    }
  },
  dragend: function dragend(t) {
    var e, i;
    null === (e = this.delegate) || void 0 === e || null === (i = e.inputControllerDidCancelDrag) || void 0 === i || i.call(e), this.draggedRange = null, this.draggingPoint = null;
  },
  drop: function drop(t) {
    var e, i;
    t.preventDefault();
    var n = null === (e = t.dataTransfer) || void 0 === e ? void 0 : e.files,
      r = t.dataTransfer.getData("application/x-trix-document"),
      o = {
        x: t.clientX,
        y: t.clientY
      };
    if (null === (i = this.responder) || void 0 === i || i.setLocationRangeFromPointRange(o), null != n && n.length) this.attachFiles(n);else if (this.draggedRange) {
      var s, a;
      null === (s = this.delegate) || void 0 === s || s.inputControllerWillMoveText(), null === (a = this.responder) || void 0 === a || a.moveTextFromRange(this.draggedRange), this.draggedRange = null, this.requestRender();
    } else if (r) {
      var l;
      var _t42 = qe.fromJSONString(r);
      null === (l = this.responder) || void 0 === l || l.insertDocument(_t42), this.requestRender();
    }
    this.draggedRange = null, this.draggingPoint = null;
  },
  cut: function cut(t) {
    var e, i;
    if (null !== (e = this.responder) && void 0 !== e && e.selectionIsExpanded() && (this.serializeSelectionToDataTransfer(t.clipboardData) && t.preventDefault(), null === (i = this.delegate) || void 0 === i || i.inputControllerWillCutText(), this.deleteInDirection("backward"), t.defaultPrevented)) return this.requestRender();
  },
  copy: function copy(t) {
    var e;
    null !== (e = this.responder) && void 0 !== e && e.selectionIsExpanded() && this.serializeSelectionToDataTransfer(t.clipboardData) && t.preventDefault();
  },
  paste: function paste(t) {
    var _this64 = this;
    var e = t.clipboardData || t.testClipboardData,
      i = {
        clipboard: e
      };
    if (!e || nn(t)) return void this.getPastedHTMLUsingHiddenElement(function (t) {
      var e, n, r;
      return i.type = "text/html", i.html = t, null === (e = _this64.delegate) || void 0 === e || e.inputControllerWillPaste(i), null === (n = _this64.responder) || void 0 === n || n.insertHTML(i.html), _this64.requestRender(), null === (r = _this64.delegate) || void 0 === r ? void 0 : r.inputControllerDidPaste(i);
    });
    var n = e.getData("URL"),
      r = e.getData("text/html"),
      o = e.getData("public.url-name");
    if (n) {
      var s, a, l;
      var _t43;
      i.type = "text/html", _t43 = o ? qt(o).trim() : n, i.html = this.createLinkHTML(n, _t43), null === (s = this.delegate) || void 0 === s || s.inputControllerWillPaste(i), this.setInputSummary({
        textAdded: _t43,
        didDelete: this.selectionIsExpanded()
      }), null === (a = this.responder) || void 0 === a || a.insertHTML(i.html), this.requestRender(), null === (l = this.delegate) || void 0 === l || l.inputControllerDidPaste(i);
    } else if (Ct(e)) {
      var c, h, u;
      i.type = "text/plain", i.string = e.getData("text/plain"), null === (c = this.delegate) || void 0 === c || c.inputControllerWillPaste(i), this.setInputSummary({
        textAdded: i.string,
        didDelete: this.selectionIsExpanded()
      }), null === (h = this.responder) || void 0 === h || h.insertString(i.string), this.requestRender(), null === (u = this.delegate) || void 0 === u || u.inputControllerDidPaste(i);
    } else if (r) {
      var d, g, m;
      i.type = "text/html", i.html = r, null === (d = this.delegate) || void 0 === d || d.inputControllerWillPaste(i), null === (g = this.responder) || void 0 === g || g.insertHTML(i.html), this.requestRender(), null === (m = this.delegate) || void 0 === m || m.inputControllerDidPaste(i);
    } else if (Array.from(e.types).includes("Files")) {
      var p, f;
      var _t44 = null === (p = e.items) || void 0 === p || null === (p = p[0]) || void 0 === p || null === (f = p.getAsFile) || void 0 === f ? void 0 : f.call(p);
      if (_t44) {
        var b, v, A;
        var _e44 = Zi(_t44);
        !_t44.name && _e44 && (_t44.name = "pasted-file-".concat(++Yi, ".").concat(_e44)), i.type = "File", i.file = _t44, null === (b = this.delegate) || void 0 === b || b.inputControllerWillAttachFiles(), null === (v = this.responder) || void 0 === v || v.insertFile(i.file), this.requestRender(), null === (A = this.delegate) || void 0 === A || A.inputControllerDidPaste(i);
      }
    }
    t.preventDefault();
  },
  compositionstart: function compositionstart(t) {
    return this.getCompositionInput().start(t.data);
  },
  compositionupdate: function compositionupdate(t) {
    return this.getCompositionInput().update(t.data);
  },
  compositionend: function compositionend(t) {
    return this.getCompositionInput().end(t.data);
  },
  beforeinput: function beforeinput(t) {
    this.inputSummary.didInput = !0;
  },
  input: function input(t) {
    return this.inputSummary.didInput = !0, t.stopPropagation();
  }
}), Ae(Qi, "keys", {
  backspace: function backspace(t) {
    var e;
    return null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t);
  },
  "delete": function _delete(t) {
    var e;
    return null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t);
  },
  "return": function _return(t) {
    var e, i;
    return this.setInputSummary({
      preferDocument: !0
    }), null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), null === (i = this.responder) || void 0 === i ? void 0 : i.insertLineBreak();
  },
  tab: function tab(t) {
    var e, i;
    null !== (e = this.responder) && void 0 !== e && e.canIncreaseNestingLevel() && (null === (i = this.responder) || void 0 === i || i.increaseNestingLevel(), this.requestRender(), t.preventDefault());
  },
  left: function left(t) {
    var e;
    if (this.selectionIsInCursorTarget()) return t.preventDefault(), null === (e = this.responder) || void 0 === e ? void 0 : e.moveCursorInDirection("backward");
  },
  right: function right(t) {
    var e;
    if (this.selectionIsInCursorTarget()) return t.preventDefault(), null === (e = this.responder) || void 0 === e ? void 0 : e.moveCursorInDirection("forward");
  },
  control: {
    d: function d(t) {
      var e;
      return null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t);
    },
    h: function h(t) {
      var e;
      return null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t);
    },
    o: function o(t) {
      var e, i;
      return t.preventDefault(), null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), null === (i = this.responder) || void 0 === i || i.insertString("\n", {
        updatePosition: !1
      }), this.requestRender();
    }
  },
  shift: {
    "return": function _return(t) {
      var e, i;
      null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), null === (i = this.responder) || void 0 === i || i.insertString("\n"), this.requestRender(), t.preventDefault();
    },
    tab: function tab(t) {
      var e, i;
      null !== (e = this.responder) && void 0 !== e && e.canDecreaseNestingLevel() && (null === (i = this.responder) || void 0 === i || i.decreaseNestingLevel(), this.requestRender(), t.preventDefault());
    },
    left: function left(t) {
      if (this.selectionIsInCursorTarget()) return t.preventDefault(), this.expandSelectionInDirection("backward");
    },
    right: function right(t) {
      if (this.selectionIsInCursorTarget()) return t.preventDefault(), this.expandSelectionInDirection("forward");
    }
  },
  alt: {
    backspace: function backspace(t) {
      var e;
      return this.setInputSummary({
        preferDocument: !1
      }), null === (e = this.delegate) || void 0 === e ? void 0 : e.inputControllerWillPerformTyping();
    }
  },
  meta: {
    backspace: function backspace(t) {
      var e;
      return this.setInputSummary({
        preferDocument: !1
      }), null === (e = this.delegate) || void 0 === e ? void 0 : e.inputControllerWillPerformTyping();
    }
  }
}), Qi.proxyMethod("responder?.getSelectedRange"), Qi.proxyMethod("responder?.setSelectedRange"), Qi.proxyMethod("responder?.expandSelectionInDirection"), Qi.proxyMethod("responder?.selectionIsInCursorTarget"), Qi.proxyMethod("responder?.selectionIsExpanded");
var Zi = function Zi(t) {
    var e;
    return null === (e = t.type) || void 0 === e || null === (e = e.match(/\/(\w+)$/)) || void 0 === e ? void 0 : e[1];
  },
  tn = !(null === (Gi = " ".codePointAt) || void 0 === Gi || !Gi.call(" ", 0)),
  en = function en(t) {
    if (t.key && tn && t.key.codePointAt(0) === t.keyCode) return t.key;
    {
      var _e45;
      if (null === t.which ? _e45 = t.keyCode : 0 !== t.which && 0 !== t.charCode && (_e45 = t.charCode), null != _e45 && "escape" !== Xi[_e45]) return X.fromCodepoints([_e45]).toString();
    }
  },
  nn = function nn(t) {
    var e = t.clipboardData;
    if (e) {
      if (e.types.includes("text/html")) {
        for (var _iterator7 = _createForOfIteratorHelperLoose(e.types), _step7; !(_step7 = _iterator7()).done;) {
          var _t45 = _step7.value;
          var _i41 = /^CorePasteboardFlavorType/.test(_t45),
            _n24 = /^dyn\./.test(_t45) && e.getData(_t45);
          if (_i41 || _n24) return !0;
        }
        return !1;
      }
      {
        var _t46 = e.types.includes("com.apple.webarchive"),
          _i42 = e.types.includes("com.apple.flat-rtfd");
        return _t46 || _i42;
      }
    }
  };
var rn = /*#__PURE__*/function (_z19) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(rn, _z19);
  function rn(t) {
    var _this65;
    _this65 = _z19.apply(this, arguments) || this, _this65.inputController = t, _this65.responder = _this65.inputController.responder, _this65.delegate = _this65.inputController.delegate, _this65.inputSummary = _this65.inputController.inputSummary, _this65.data = {};
    return _this65;
  }
  var _proto45 = rn.prototype;
  _proto45.start = function start(t) {
    if (this.data.start = t, this.isSignificant()) {
      var e, i;
      if ("keypress" === this.inputSummary.eventName && this.inputSummary.textAdded) null === (i = this.responder) || void 0 === i || i.deleteInDirection("left");
      this.selectionIsExpanded() || (this.insertPlaceholder(), this.requestRender()), this.range = null === (e = this.responder) || void 0 === e ? void 0 : e.getSelectedRange();
    }
  };
  _proto45.update = function update(t) {
    if (this.data.update = t, this.isSignificant()) {
      var _t47 = this.selectPlaceholder();
      _t47 && (this.forgetPlaceholder(), this.range = _t47);
    }
  };
  _proto45.end = function end(t) {
    return this.data.end = t, this.isSignificant() ? (this.forgetPlaceholder(), this.canApplyToDocument() ? (this.setInputSummary({
      preferDocument: !0,
      didInput: !1
    }), null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), null === (i = this.responder) || void 0 === i || i.setSelectedRange(this.range), null === (n = this.responder) || void 0 === n || n.insertString(this.data.end), null === (r = this.responder) || void 0 === r ? void 0 : r.setSelectedRange(this.range[0] + this.data.end.length)) : null != this.data.start || null != this.data.update ? (this.requestReparse(), this.inputController.reset()) : void 0) : this.inputController.reset();
    var e, i, n, r;
  };
  _proto45.getEndData = function getEndData() {
    return this.data.end;
  };
  _proto45.isEnded = function isEnded() {
    return null != this.getEndData();
  };
  _proto45.isSignificant = function isSignificant() {
    return !$i.composesExistingText || this.inputSummary.didInput;
  };
  _proto45.canApplyToDocument = function canApplyToDocument() {
    var t, e;
    return 0 === (null === (t = this.data.start) || void 0 === t ? void 0 : t.length) && (null === (e = this.data.end) || void 0 === e ? void 0 : e.length) > 0 && this.range;
  };
  return rn;
}(z);
rn.proxyMethod("inputController.setInputSummary"), rn.proxyMethod("inputController.requestRender"), rn.proxyMethod("inputController.requestReparse"), rn.proxyMethod("responder?.selectionIsExpanded"), rn.proxyMethod("responder?.insertPlaceholder"), rn.proxyMethod("responder?.selectPlaceholder"), rn.proxyMethod("responder?.forgetPlaceholder");
var on = /*#__PURE__*/function (_Ki2) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(on, _Ki2);
  function on() {
    var _this66;
    _this66 = _Ki2.apply(this, arguments) || this, _this66.render = _this66.render.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this66));
    return _this66;
  }
  var _proto46 = on.prototype;
  _proto46.elementDidMutate = function elementDidMutate() {
    return this.scheduledRender ? this.composing ? null === (t = this.delegate) || void 0 === t || null === (e = t.inputControllerDidAllowUnhandledInput) || void 0 === e ? void 0 : e.call(t) : void 0 : this.reparse();
    var t, e;
  };
  _proto46.scheduleRender = function scheduleRender() {
    return this.scheduledRender ? this.scheduledRender : this.scheduledRender = requestAnimationFrame(this.render);
  };
  _proto46.render = function render() {
    var t, e;
    (cancelAnimationFrame(this.scheduledRender), this.scheduledRender = null, this.composing) || null === (e = this.delegate) || void 0 === e || e.render();
    null === (t = this.afterRender) || void 0 === t || t.call(this), this.afterRender = null;
  };
  _proto46.reparse = function reparse() {
    var t;
    return null === (t = this.delegate) || void 0 === t ? void 0 : t.reparse();
  };
  _proto46.insertString = function insertString() {
    var t;
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      i = arguments.length > 1 ? arguments[1] : void 0;
    return null === (t = this.delegate) || void 0 === t || t.inputControllerWillPerformTyping(), this.withTargetDOMRange(function () {
      var t;
      return null === (t = this.responder) || void 0 === t ? void 0 : t.insertString(e, i);
    });
  };
  _proto46.toggleAttributeIfSupported = function toggleAttributeIfSupported(t) {
    var e;
    if (dt().includes(t)) return null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformFormatting(t), this.withTargetDOMRange(function () {
      var e;
      return null === (e = this.responder) || void 0 === e ? void 0 : e.toggleCurrentAttribute(t);
    });
  };
  _proto46.activateAttributeIfSupported = function activateAttributeIfSupported(t, e) {
    var i;
    if (dt().includes(t)) return null === (i = this.delegate) || void 0 === i || i.inputControllerWillPerformFormatting(t), this.withTargetDOMRange(function () {
      var i;
      return null === (i = this.responder) || void 0 === i ? void 0 : i.setCurrentAttribute(t, e);
    });
  };
  _proto46.deleteInDirection = function deleteInDirection(t) {
    var _this67 = this;
    var _ref22 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        recordUndoEntry: !0
      },
      e = _ref22.recordUndoEntry;
    var i;
    e && (null === (i = this.delegate) || void 0 === i || i.inputControllerWillPerformTyping());
    var n = function n() {
        var e;
        return null === (e = _this67.responder) || void 0 === e ? void 0 : e.deleteInDirection(t);
      },
      r = this.getTargetDOMRange({
        minLength: 2
      });
    return r ? this.withTargetDOMRange(r, n) : n();
  };
  _proto46.withTargetDOMRange = function withTargetDOMRange(t, e) {
    var i;
    return "function" == typeof t && (e = t, t = this.getTargetDOMRange()), t ? null === (i = this.responder) || void 0 === i ? void 0 : i.withTargetDOMRange(t, e.bind(this)) : (It.reset(), e.call(this));
  };
  _proto46.getTargetDOMRange = function getTargetDOMRange() {
    var t, e;
    var _ref23 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        minLength: 0
      },
      i = _ref23.minLength;
    var n = null === (t = (e = this.event).getTargetRanges) || void 0 === t ? void 0 : t.call(e);
    if (n && n.length) {
      var _t48 = sn(n[0]);
      if (0 === i || _t48.toString().length >= i) return _t48;
    }
  };
  _proto46.withEvent = function withEvent(t, e) {
    var i;
    this.event = t;
    try {
      i = e.call(this);
    } finally {
      this.event = null;
    }
    return i;
  };
  return on;
}(Ki);
Ae(on, "events", {
  keydown: function keydown(t) {
    if (Rt(t)) {
      var e;
      var _i43 = hn(t);
      null !== (e = this.delegate) && void 0 !== e && e.inputControllerDidReceiveKeyboardCommand(_i43) && t.preventDefault();
    } else {
      var _e46 = t.key;
      t.altKey && (_e46 += "+Alt"), t.shiftKey && (_e46 += "+Shift");
      var _i44 = this.constructor.keys[_e46];
      if (_i44) return this.withEvent(t, _i44);
    }
  },
  paste: function paste(t) {
    var e;
    var i;
    var n = null === (e = t.clipboardData) || void 0 === e ? void 0 : e.getData("URL");
    return ln(t) ? (t.preventDefault(), this.attachFiles(t.clipboardData.files)) : cn(t) ? (t.preventDefault(), i = {
      type: "text/plain",
      string: t.clipboardData.getData("text/plain")
    }, null === (r = this.delegate) || void 0 === r || r.inputControllerWillPaste(i), null === (o = this.responder) || void 0 === o || o.insertString(i.string), this.render(), null === (s = this.delegate) || void 0 === s ? void 0 : s.inputControllerDidPaste(i)) : n ? (t.preventDefault(), i = {
      type: "text/html",
      html: this.createLinkHTML(n)
    }, null === (a = this.delegate) || void 0 === a || a.inputControllerWillPaste(i), null === (l = this.responder) || void 0 === l || l.insertHTML(i.html), this.render(), null === (c = this.delegate) || void 0 === c ? void 0 : c.inputControllerDidPaste(i)) : void 0;
    var r, o, s, a, l, c;
  },
  beforeinput: function beforeinput(t) {
    var e = this.constructor.inputTypes[t.inputType];
    e && (this.withEvent(t, e), this.scheduleRender());
  },
  input: function input(t) {
    It.reset();
  },
  dragstart: function dragstart(t) {
    var e, i;
    null !== (e = this.responder) && void 0 !== e && e.selectionContainsAttachments() && (t.dataTransfer.setData("application/x-trix-dragging", !0), this.dragging = {
      range: null === (i = this.responder) || void 0 === i ? void 0 : i.getSelectedRange(),
      point: un(t)
    });
  },
  dragenter: function dragenter(t) {
    an(t) && t.preventDefault();
  },
  dragover: function dragover(t) {
    if (this.dragging) {
      t.preventDefault();
      var _i45 = un(t);
      var e;
      if (!kt(_i45, this.dragging.point)) return this.dragging.point = _i45, null === (e = this.responder) || void 0 === e ? void 0 : e.setLocationRangeFromPointRange(_i45);
    } else an(t) && t.preventDefault();
  },
  drop: function drop(t) {
    var e, i;
    if (this.dragging) return t.preventDefault(), null === (e = this.delegate) || void 0 === e || e.inputControllerWillMoveText(), null === (i = this.responder) || void 0 === i || i.moveTextFromRange(this.dragging.range), this.dragging = null, this.scheduleRender();
    if (an(t)) {
      var n;
      t.preventDefault();
      var _e47 = un(t);
      return null === (n = this.responder) || void 0 === n || n.setLocationRangeFromPointRange(_e47), this.attachFiles(t.dataTransfer.files);
    }
  },
  dragend: function dragend() {
    var t;
    this.dragging && (null === (t = this.responder) || void 0 === t || t.setSelectedRange(this.dragging.range), this.dragging = null);
  },
  compositionend: function compositionend(t) {
    this.composing && (this.composing = !1, a.recentAndroid || this.scheduleRender());
  }
}), Ae(on, "keys", {
  ArrowLeft: function ArrowLeft() {
    var t, e;
    if (null !== (t = this.responder) && void 0 !== t && t.shouldManageMovingCursorInDirection("backward")) return this.event.preventDefault(), null === (e = this.responder) || void 0 === e ? void 0 : e.moveCursorInDirection("backward");
  },
  ArrowRight: function ArrowRight() {
    var t, e;
    if (null !== (t = this.responder) && void 0 !== t && t.shouldManageMovingCursorInDirection("forward")) return this.event.preventDefault(), null === (e = this.responder) || void 0 === e ? void 0 : e.moveCursorInDirection("forward");
  },
  Backspace: function Backspace() {
    var t, e, i;
    if (null !== (t = this.responder) && void 0 !== t && t.shouldManageDeletingInDirection("backward")) return this.event.preventDefault(), null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), null === (i = this.responder) || void 0 === i || i.deleteInDirection("backward"), this.render();
  },
  Tab: function Tab() {
    var t, e;
    if (null !== (t = this.responder) && void 0 !== t && t.canIncreaseNestingLevel()) return this.event.preventDefault(), null === (e = this.responder) || void 0 === e || e.increaseNestingLevel(), this.render();
  },
  "Tab+Shift": function TabShift() {
    var t, e;
    if (null !== (t = this.responder) && void 0 !== t && t.canDecreaseNestingLevel()) return this.event.preventDefault(), null === (e = this.responder) || void 0 === e || e.decreaseNestingLevel(), this.render();
  }
}), Ae(on, "inputTypes", {
  deleteByComposition: function deleteByComposition() {
    return this.deleteInDirection("backward", {
      recordUndoEntry: !1
    });
  },
  deleteByCut: function deleteByCut() {
    return this.deleteInDirection("backward");
  },
  deleteByDrag: function deleteByDrag() {
    return this.event.preventDefault(), this.withTargetDOMRange(function () {
      var t;
      this.deleteByDragRange = null === (t = this.responder) || void 0 === t ? void 0 : t.getSelectedRange();
    });
  },
  deleteCompositionText: function deleteCompositionText() {
    return this.deleteInDirection("backward", {
      recordUndoEntry: !1
    });
  },
  deleteContent: function deleteContent() {
    return this.deleteInDirection("backward");
  },
  deleteContentBackward: function deleteContentBackward() {
    return this.deleteInDirection("backward");
  },
  deleteContentForward: function deleteContentForward() {
    return this.deleteInDirection("forward");
  },
  deleteEntireSoftLine: function deleteEntireSoftLine() {
    return this.deleteInDirection("forward");
  },
  deleteHardLineBackward: function deleteHardLineBackward() {
    return this.deleteInDirection("backward");
  },
  deleteHardLineForward: function deleteHardLineForward() {
    return this.deleteInDirection("forward");
  },
  deleteSoftLineBackward: function deleteSoftLineBackward() {
    return this.deleteInDirection("backward");
  },
  deleteSoftLineForward: function deleteSoftLineForward() {
    return this.deleteInDirection("forward");
  },
  deleteWordBackward: function deleteWordBackward() {
    return this.deleteInDirection("backward");
  },
  deleteWordForward: function deleteWordForward() {
    return this.deleteInDirection("forward");
  },
  formatBackColor: function formatBackColor() {
    return this.activateAttributeIfSupported("backgroundColor", this.event.data);
  },
  formatBold: function formatBold() {
    return this.toggleAttributeIfSupported("bold");
  },
  formatFontColor: function formatFontColor() {
    return this.activateAttributeIfSupported("color", this.event.data);
  },
  formatFontName: function formatFontName() {
    return this.activateAttributeIfSupported("font", this.event.data);
  },
  formatIndent: function formatIndent() {
    var t;
    if (null !== (t = this.responder) && void 0 !== t && t.canIncreaseNestingLevel()) return this.withTargetDOMRange(function () {
      var t;
      return null === (t = this.responder) || void 0 === t ? void 0 : t.increaseNestingLevel();
    });
  },
  formatItalic: function formatItalic() {
    return this.toggleAttributeIfSupported("italic");
  },
  formatJustifyCenter: function formatJustifyCenter() {
    return this.toggleAttributeIfSupported("justifyCenter");
  },
  formatJustifyFull: function formatJustifyFull() {
    return this.toggleAttributeIfSupported("justifyFull");
  },
  formatJustifyLeft: function formatJustifyLeft() {
    return this.toggleAttributeIfSupported("justifyLeft");
  },
  formatJustifyRight: function formatJustifyRight() {
    return this.toggleAttributeIfSupported("justifyRight");
  },
  formatOutdent: function formatOutdent() {
    var t;
    if (null !== (t = this.responder) && void 0 !== t && t.canDecreaseNestingLevel()) return this.withTargetDOMRange(function () {
      var t;
      return null === (t = this.responder) || void 0 === t ? void 0 : t.decreaseNestingLevel();
    });
  },
  formatRemove: function formatRemove() {
    this.withTargetDOMRange(function () {
      for (var _i46 in null === (t = this.responder) || void 0 === t ? void 0 : t.getCurrentAttributes()) {
        var t, e;
        null === (e = this.responder) || void 0 === e || e.removeCurrentAttribute(_i46);
      }
    });
  },
  formatSetBlockTextDirection: function formatSetBlockTextDirection() {
    return this.activateAttributeIfSupported("blockDir", this.event.data);
  },
  formatSetInlineTextDirection: function formatSetInlineTextDirection() {
    return this.activateAttributeIfSupported("textDir", this.event.data);
  },
  formatStrikeThrough: function formatStrikeThrough() {
    return this.toggleAttributeIfSupported("strike");
  },
  formatSubscript: function formatSubscript() {
    return this.toggleAttributeIfSupported("sub");
  },
  formatSuperscript: function formatSuperscript() {
    return this.toggleAttributeIfSupported("sup");
  },
  formatUnderline: function formatUnderline() {
    return this.toggleAttributeIfSupported("underline");
  },
  historyRedo: function historyRedo() {
    var t;
    return null === (t = this.delegate) || void 0 === t ? void 0 : t.inputControllerWillPerformRedo();
  },
  historyUndo: function historyUndo() {
    var t;
    return null === (t = this.delegate) || void 0 === t ? void 0 : t.inputControllerWillPerformUndo();
  },
  insertCompositionText: function insertCompositionText() {
    return this.composing = !0, this.insertString(this.event.data);
  },
  insertFromComposition: function insertFromComposition() {
    return this.composing = !1, this.insertString(this.event.data);
  },
  insertFromDrop: function insertFromDrop() {
    var t = this.deleteByDragRange;
    var e;
    if (t) return this.deleteByDragRange = null, null === (e = this.delegate) || void 0 === e || e.inputControllerWillMoveText(), this.withTargetDOMRange(function () {
      var e;
      return null === (e = this.responder) || void 0 === e ? void 0 : e.moveTextFromRange(t);
    });
  },
  insertFromPaste: function insertFromPaste() {
    var _this68 = this;
    var t;
    var e = this.event.dataTransfer,
      i = {
        dataTransfer: e
      },
      n = e.getData("URL"),
      r = e.getData("text/html");
    if (n) {
      var o;
      var _t49;
      this.event.preventDefault(), i.type = "text/html";
      var _r15 = e.getData("public.url-name");
      _t49 = _r15 ? qt(_r15).trim() : n, i.html = this.createLinkHTML(n, _t49), null === (o = this.delegate) || void 0 === o || o.inputControllerWillPaste(i), this.withTargetDOMRange(function () {
        var t;
        return null === (t = this.responder) || void 0 === t ? void 0 : t.insertHTML(i.html);
      }), this.afterRender = function () {
        var t;
        return null === (t = _this68.delegate) || void 0 === t ? void 0 : t.inputControllerDidPaste(i);
      };
    } else if (Ct(e)) {
      var s;
      i.type = "text/plain", i.string = e.getData("text/plain"), null === (s = this.delegate) || void 0 === s || s.inputControllerWillPaste(i), this.withTargetDOMRange(function () {
        var t;
        return null === (t = this.responder) || void 0 === t ? void 0 : t.insertString(i.string);
      }), this.afterRender = function () {
        var t;
        return null === (t = _this68.delegate) || void 0 === t ? void 0 : t.inputControllerDidPaste(i);
      };
    } else if (r) {
      var a;
      this.event.preventDefault(), i.type = "text/html", i.html = r, null === (a = this.delegate) || void 0 === a || a.inputControllerWillPaste(i), this.withTargetDOMRange(function () {
        var t;
        return null === (t = this.responder) || void 0 === t ? void 0 : t.insertHTML(i.html);
      }), this.afterRender = function () {
        var t;
        return null === (t = _this68.delegate) || void 0 === t ? void 0 : t.inputControllerDidPaste(i);
      };
    } else if (null !== (t = e.files) && void 0 !== t && t.length) {
      var l;
      i.type = "File", i.file = e.files[0], null === (l = this.delegate) || void 0 === l || l.inputControllerWillPaste(i), this.withTargetDOMRange(function () {
        var t;
        return null === (t = this.responder) || void 0 === t ? void 0 : t.insertFile(i.file);
      }), this.afterRender = function () {
        var t;
        return null === (t = _this68.delegate) || void 0 === t ? void 0 : t.inputControllerDidPaste(i);
      };
    }
  },
  insertFromYank: function insertFromYank() {
    return this.insertString(this.event.data);
  },
  insertLineBreak: function insertLineBreak() {
    return this.insertString("\n");
  },
  insertLink: function insertLink() {
    return this.activateAttributeIfSupported("href", this.event.data);
  },
  insertOrderedList: function insertOrderedList() {
    return this.toggleAttributeIfSupported("number");
  },
  insertParagraph: function insertParagraph() {
    var t;
    return null === (t = this.delegate) || void 0 === t || t.inputControllerWillPerformTyping(), this.withTargetDOMRange(function () {
      var t;
      return null === (t = this.responder) || void 0 === t ? void 0 : t.insertLineBreak();
    });
  },
  insertReplacementText: function insertReplacementText() {
    return this.insertString(this.event.dataTransfer.getData("text/plain"), {
      updatePosition: !1
    });
  },
  insertText: function insertText() {
    var t;
    return this.insertString(this.event.data || (null === (t = this.event.dataTransfer) || void 0 === t ? void 0 : t.getData("text/plain")));
  },
  insertTranspose: function insertTranspose() {
    return this.insertString(this.event.data);
  },
  insertUnorderedList: function insertUnorderedList() {
    return this.toggleAttributeIfSupported("bullet");
  }
});
var sn = function sn(t) {
    var e = document.createRange();
    return e.setStart(t.startContainer, t.startOffset), e.setEnd(t.endContainer, t.endOffset), e;
  },
  an = function an(t) {
    var e;
    return Array.from((null === (e = t.dataTransfer) || void 0 === e ? void 0 : e.types) || []).includes("Files");
  },
  ln = function ln(t) {
    var e = t.clipboardData;
    if (e) return e.types.includes("Files") && 1 === e.types.length && e.files.length >= 1;
  },
  cn = function cn(t) {
    var e = t.clipboardData;
    if (e) return e.types.includes("text/plain") && 1 === e.types.length;
  },
  hn = function hn(t) {
    var e = [];
    return t.altKey && e.push("alt"), t.shiftKey && e.push("shift"), e.push(t.key), e;
  },
  un = function un(t) {
    return {
      x: t.clientX,
      y: t.clientY
    };
  },
  dn = "[data-trix-attribute]",
  gn = "[data-trix-action]",
  mn = "".concat(dn, ", ").concat(gn),
  pn = "[data-trix-dialog]",
  fn = "".concat(pn, "[data-trix-active]"),
  bn = "".concat(pn, " [data-trix-method]"),
  vn = "".concat(pn, " [data-trix-input]"),
  An = function An(t, e) {
    return e || (e = yn(t)), t.querySelector("[data-trix-input][name='".concat(e, "']"));
  },
  xn = function xn(t) {
    return t.getAttribute("data-trix-action");
  },
  yn = function yn(t) {
    return t.getAttribute("data-trix-attribute") || t.getAttribute("data-trix-dialog-attribute");
  };
var Cn = /*#__PURE__*/function (_z20) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Cn, _z20);
  function Cn(t) {
    var _this69;
    _this69 = _z20.call(this, t) || this, _this69.didClickActionButton = _this69.didClickActionButton.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this69)), _this69.didClickAttributeButton = _this69.didClickAttributeButton.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this69)), _this69.didClickDialogButton = _this69.didClickDialogButton.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this69)), _this69.didKeyDownDialogInput = _this69.didKeyDownDialogInput.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this69)), _this69.element = t, _this69.attributes = {}, _this69.actions = {}, _this69.resetDialogInputs(), f("mousedown", {
      onElement: _this69.element,
      matchingSelector: gn,
      withCallback: _this69.didClickActionButton
    }), f("mousedown", {
      onElement: _this69.element,
      matchingSelector: dn,
      withCallback: _this69.didClickAttributeButton
    }), f("click", {
      onElement: _this69.element,
      matchingSelector: mn,
      preventDefault: !0
    }), f("click", {
      onElement: _this69.element,
      matchingSelector: bn,
      withCallback: _this69.didClickDialogButton
    }), f("keydown", {
      onElement: _this69.element,
      matchingSelector: vn,
      withCallback: _this69.didKeyDownDialogInput
    });
    return _this69;
  }
  var _proto47 = Cn.prototype;
  _proto47.didClickActionButton = function didClickActionButton(t, e) {
    var i;
    null === (i = this.delegate) || void 0 === i || i.toolbarDidClickButton(), t.preventDefault();
    var n = xn(e);
    return this.getDialog(n) ? this.toggleDialog(n) : null === (r = this.delegate) || void 0 === r ? void 0 : r.toolbarDidInvokeAction(n);
    var r;
  };
  _proto47.didClickAttributeButton = function didClickAttributeButton(t, e) {
    var i;
    null === (i = this.delegate) || void 0 === i || i.toolbarDidClickButton(), t.preventDefault();
    var n = yn(e);
    var r;
    this.getDialog(n) ? this.toggleDialog(n) : null === (r = this.delegate) || void 0 === r || r.toolbarDidToggleAttribute(n);
    return this.refreshAttributeButtons();
  };
  _proto47.didClickDialogButton = function didClickDialogButton(t, e) {
    var i = A(e, {
      matchingSelector: pn
    });
    return this[e.getAttribute("data-trix-method")].call(this, i);
  };
  _proto47.didKeyDownDialogInput = function didKeyDownDialogInput(t, e) {
    if (13 === t.keyCode) {
      t.preventDefault();
      var _i47 = e.getAttribute("name"),
        _n25 = this.getDialog(_i47);
      this.setAttribute(_n25);
    }
    if (27 === t.keyCode) return t.preventDefault(), this.hideDialog();
  };
  _proto47.updateActions = function updateActions(t) {
    return this.actions = t, this.refreshActionButtons();
  };
  _proto47.refreshActionButtons = function refreshActionButtons() {
    var _this70 = this;
    return this.eachActionButton(function (t, e) {
      t.disabled = !1 === _this70.actions[e];
    });
  };
  _proto47.eachActionButton = function eachActionButton(t) {
    return Array.from(this.element.querySelectorAll(gn)).map(function (e) {
      return t(e, xn(e));
    });
  };
  _proto47.updateAttributes = function updateAttributes(t) {
    return this.attributes = t, this.refreshAttributeButtons();
  };
  _proto47.refreshAttributeButtons = function refreshAttributeButtons() {
    var _this71 = this;
    return this.eachAttributeButton(function (t, e) {
      return t.disabled = !1 === _this71.attributes[e], _this71.attributes[e] || _this71.dialogIsVisible(e) ? (t.setAttribute("data-trix-active", ""), t.classList.add("trix-active")) : (t.removeAttribute("data-trix-active"), t.classList.remove("trix-active"));
    });
  };
  _proto47.eachAttributeButton = function eachAttributeButton(t) {
    return Array.from(this.element.querySelectorAll(dn)).map(function (e) {
      return t(e, yn(e));
    });
  };
  _proto47.applyKeyboardCommand = function applyKeyboardCommand(t) {
    var e = JSON.stringify(t.sort());
    for (var _i48 = 0, _Array$from13 = Array.from(this.element.querySelectorAll("[data-trix-key]")); _i48 < _Array$from13.length; _i48++) {
      var _t50 = _Array$from13[_i48];
      var _i49 = _t50.getAttribute("data-trix-key").split("+");
      if (JSON.stringify(_i49.sort()) === e) return b("mousedown", {
        onElement: _t50
      }), !0;
    }
    return !1;
  };
  _proto47.dialogIsVisible = function dialogIsVisible(t) {
    var e = this.getDialog(t);
    if (e) return e.hasAttribute("data-trix-active");
  };
  _proto47.toggleDialog = function toggleDialog(t) {
    return this.dialogIsVisible(t) ? this.hideDialog() : this.showDialog(t);
  };
  _proto47.showDialog = function showDialog(t) {
    var e, i;
    this.hideDialog(), null === (e = this.delegate) || void 0 === e || e.toolbarWillShowDialog();
    var n = this.getDialog(t);
    n.setAttribute("data-trix-active", ""), n.classList.add("trix-active"), Array.from(n.querySelectorAll("input[disabled]")).forEach(function (t) {
      t.removeAttribute("disabled");
    });
    var r = yn(n);
    if (r) {
      var _e48 = An(n, t);
      _e48 && (_e48.value = this.attributes[r] || "", _e48.select());
    }
    return null === (i = this.delegate) || void 0 === i ? void 0 : i.toolbarDidShowDialog(t);
  };
  _proto47.setAttribute = function setAttribute(t) {
    var e = yn(t),
      i = An(t, e);
    return i.willValidate && !i.checkValidity() ? (i.setAttribute("data-trix-validate", ""), i.classList.add("trix-validate"), i.focus()) : (null === (n = this.delegate) || void 0 === n || n.toolbarDidUpdateAttribute(e, i.value), this.hideDialog());
    var n;
  };
  _proto47.removeAttribute = function removeAttribute(t) {
    var e;
    var i = yn(t);
    return null === (e = this.delegate) || void 0 === e || e.toolbarDidRemoveAttribute(i), this.hideDialog();
  };
  _proto47.hideDialog = function hideDialog() {
    var t = this.element.querySelector(fn);
    var e;
    if (t) return t.removeAttribute("data-trix-active"), t.classList.remove("trix-active"), this.resetDialogInputs(), null === (e = this.delegate) || void 0 === e ? void 0 : e.toolbarDidHideDialog(function (t) {
      return t.getAttribute("data-trix-dialog");
    }(t));
  };
  _proto47.resetDialogInputs = function resetDialogInputs() {
    Array.from(this.element.querySelectorAll(vn)).forEach(function (t) {
      t.setAttribute("disabled", "disabled"), t.removeAttribute("data-trix-validate"), t.classList.remove("trix-validate");
    });
  };
  _proto47.getDialog = function getDialog(t) {
    return this.element.querySelector("[data-trix-dialog=".concat(t, "]"));
  };
  return Cn;
}(z);
var Rn = /*#__PURE__*/function (_Oi) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Rn, _Oi);
  function Rn(t) {
    var _this72;
    var e = t.editorElement,
      i = t.document,
      n = t.html;
    _this72 = _Oi.apply(this, arguments) || this, _this72.editorElement = e, _this72.selectionManager = new Li(_this72.editorElement), _this72.selectionManager.delegate = (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this72), _this72.composition = new gi(), _this72.composition.delegate = (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this72), _this72.attachmentManager = new ui(_this72.composition.getAttachments()), _this72.attachmentManager.delegate = (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this72), _this72.inputController = 2 === M.getLevel() ? new on(_this72.editorElement) : new Qi(_this72.editorElement), _this72.inputController.delegate = (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this72), _this72.inputController.responder = _this72.composition, _this72.compositionController = new Ni(_this72.editorElement, _this72.composition), _this72.compositionController.delegate = (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this72), _this72.toolbarController = new Cn(_this72.editorElement.toolbarElement), _this72.toolbarController.delegate = (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this72), _this72.editor = new xi(_this72.composition, _this72.selectionManager, _this72.editorElement), i ? _this72.editor.loadDocument(i) : _this72.editor.loadHTML(n);
    return _this72;
  }
  var _proto48 = Rn.prototype;
  _proto48.registerSelectionManager = function registerSelectionManager() {
    return It.registerSelectionManager(this.selectionManager);
  };
  _proto48.unregisterSelectionManager = function unregisterSelectionManager() {
    return It.unregisterSelectionManager(this.selectionManager);
  };
  _proto48.render = function render() {
    return this.compositionController.render();
  };
  _proto48.reparse = function reparse() {
    return this.composition.replaceHTML(this.editorElement.innerHTML);
  };
  _proto48.compositionDidChangeDocument = function compositionDidChangeDocument(t) {
    if (this.notifyEditorElement("document-change"), !this.handlingInput) return this.render();
  };
  _proto48.compositionDidChangeCurrentAttributes = function compositionDidChangeCurrentAttributes(t) {
    return this.currentAttributes = t, this.toolbarController.updateAttributes(this.currentAttributes), this.updateCurrentActions(), this.notifyEditorElement("attributes-change", {
      attributes: this.currentAttributes
    });
  };
  _proto48.compositionDidPerformInsertionAtRange = function compositionDidPerformInsertionAtRange(t) {
    this.pasting && (this.pastedRange = t);
  };
  _proto48.compositionShouldAcceptFile = function compositionShouldAcceptFile(t) {
    return this.notifyEditorElement("file-accept", {
      file: t
    });
  };
  _proto48.compositionDidAddAttachment = function compositionDidAddAttachment(t) {
    var e = this.attachmentManager.manageAttachment(t);
    return this.notifyEditorElement("attachment-add", {
      attachment: e
    });
  };
  _proto48.compositionDidEditAttachment = function compositionDidEditAttachment(t) {
    this.compositionController.rerenderViewForObject(t);
    var e = this.attachmentManager.manageAttachment(t);
    return this.notifyEditorElement("attachment-edit", {
      attachment: e
    }), this.notifyEditorElement("change");
  };
  _proto48.compositionDidChangeAttachmentPreviewURL = function compositionDidChangeAttachmentPreviewURL(t) {
    return this.compositionController.invalidateViewForObject(t), this.notifyEditorElement("change");
  };
  _proto48.compositionDidRemoveAttachment = function compositionDidRemoveAttachment(t) {
    var e = this.attachmentManager.unmanageAttachment(t);
    return this.notifyEditorElement("attachment-remove", {
      attachment: e
    });
  };
  _proto48.compositionDidStartEditingAttachment = function compositionDidStartEditingAttachment(t, e) {
    return this.attachmentLocationRange = this.composition.document.getLocationRangeOfAttachment(t), this.compositionController.installAttachmentEditorForAttachment(t, e), this.selectionManager.setLocationRange(this.attachmentLocationRange);
  };
  _proto48.compositionDidStopEditingAttachment = function compositionDidStopEditingAttachment(t) {
    this.compositionController.uninstallAttachmentEditor(), this.attachmentLocationRange = null;
  };
  _proto48.compositionDidRequestChangingSelectionToLocationRange = function compositionDidRequestChangingSelectionToLocationRange(t) {
    if (!this.loadingSnapshot || this.isFocused()) return this.requestedLocationRange = t, this.compositionRevisionWhenLocationRangeRequested = this.composition.revision, this.handlingInput ? void 0 : this.render();
  };
  _proto48.compositionWillLoadSnapshot = function compositionWillLoadSnapshot() {
    this.loadingSnapshot = !0;
  };
  _proto48.compositionDidLoadSnapshot = function compositionDidLoadSnapshot() {
    this.compositionController.refreshViewCache(), this.render(), this.loadingSnapshot = !1;
  };
  _proto48.getSelectionManager = function getSelectionManager() {
    return this.selectionManager;
  };
  _proto48.attachmentManagerDidRequestRemovalOfAttachment = function attachmentManagerDidRequestRemovalOfAttachment(t) {
    return this.removeAttachment(t);
  };
  _proto48.compositionControllerWillSyncDocumentView = function compositionControllerWillSyncDocumentView() {
    return this.inputController.editorWillSyncDocumentView(), this.selectionManager.lock(), this.selectionManager.clearSelection();
  };
  _proto48.compositionControllerDidSyncDocumentView = function compositionControllerDidSyncDocumentView() {
    return this.inputController.editorDidSyncDocumentView(), this.selectionManager.unlock(), this.updateCurrentActions(), this.notifyEditorElement("sync");
  };
  _proto48.compositionControllerDidRender = function compositionControllerDidRender() {
    this.requestedLocationRange && (this.compositionRevisionWhenLocationRangeRequested === this.composition.revision && this.selectionManager.setLocationRange(this.requestedLocationRange), this.requestedLocationRange = null, this.compositionRevisionWhenLocationRangeRequested = null), this.renderedCompositionRevision !== this.composition.revision && (this.runEditorFilters(), this.composition.updateCurrentAttributes(), this.notifyEditorElement("render")), this.renderedCompositionRevision = this.composition.revision;
  };
  _proto48.compositionControllerDidFocus = function compositionControllerDidFocus() {
    return this.isFocusedInvisibly() && this.setLocationRange({
      index: 0,
      offset: 0
    }), this.toolbarController.hideDialog(), this.notifyEditorElement("focus");
  };
  _proto48.compositionControllerDidBlur = function compositionControllerDidBlur() {
    return this.notifyEditorElement("blur");
  };
  _proto48.compositionControllerDidSelectAttachment = function compositionControllerDidSelectAttachment(t, e) {
    return this.toolbarController.hideDialog(), this.composition.editAttachment(t, e);
  };
  _proto48.compositionControllerDidRequestDeselectingAttachment = function compositionControllerDidRequestDeselectingAttachment(t) {
    var e = this.attachmentLocationRange || this.composition.document.getLocationRangeOfAttachment(t);
    return this.selectionManager.setLocationRange(e[1]);
  };
  _proto48.compositionControllerWillUpdateAttachment = function compositionControllerWillUpdateAttachment(t) {
    return this.editor.recordUndoEntry("Edit Attachment", {
      context: t.id,
      consolidatable: !0
    });
  };
  _proto48.compositionControllerDidRequestRemovalOfAttachment = function compositionControllerDidRequestRemovalOfAttachment(t) {
    return this.removeAttachment(t);
  };
  _proto48.inputControllerWillHandleInput = function inputControllerWillHandleInput() {
    this.handlingInput = !0, this.requestedRender = !1;
  };
  _proto48.inputControllerDidRequestRender = function inputControllerDidRequestRender() {
    this.requestedRender = !0;
  };
  _proto48.inputControllerDidHandleInput = function inputControllerDidHandleInput() {
    if (this.handlingInput = !1, this.requestedRender) return this.requestedRender = !1, this.render();
  };
  _proto48.inputControllerDidAllowUnhandledInput = function inputControllerDidAllowUnhandledInput() {
    return this.notifyEditorElement("change");
  };
  _proto48.inputControllerDidRequestReparse = function inputControllerDidRequestReparse() {
    return this.reparse();
  };
  _proto48.inputControllerWillPerformTyping = function inputControllerWillPerformTyping() {
    return this.recordTypingUndoEntry();
  };
  _proto48.inputControllerWillPerformFormatting = function inputControllerWillPerformFormatting(t) {
    return this.recordFormattingUndoEntry(t);
  };
  _proto48.inputControllerWillCutText = function inputControllerWillCutText() {
    return this.editor.recordUndoEntry("Cut");
  };
  _proto48.inputControllerWillPaste = function inputControllerWillPaste(t) {
    return this.editor.recordUndoEntry("Paste"), this.pasting = !0, this.notifyEditorElement("before-paste", {
      paste: t
    });
  };
  _proto48.inputControllerDidPaste = function inputControllerDidPaste(t) {
    return t.range = this.pastedRange, this.pastedRange = null, this.pasting = null, this.notifyEditorElement("paste", {
      paste: t
    });
  };
  _proto48.inputControllerWillMoveText = function inputControllerWillMoveText() {
    return this.editor.recordUndoEntry("Move");
  };
  _proto48.inputControllerWillAttachFiles = function inputControllerWillAttachFiles() {
    return this.editor.recordUndoEntry("Drop Files");
  };
  _proto48.inputControllerWillPerformUndo = function inputControllerWillPerformUndo() {
    return this.editor.undo();
  };
  _proto48.inputControllerWillPerformRedo = function inputControllerWillPerformRedo() {
    return this.editor.redo();
  };
  _proto48.inputControllerDidReceiveKeyboardCommand = function inputControllerDidReceiveKeyboardCommand(t) {
    return this.toolbarController.applyKeyboardCommand(t);
  };
  _proto48.inputControllerDidStartDrag = function inputControllerDidStartDrag() {
    this.locationRangeBeforeDrag = this.selectionManager.getLocationRange();
  };
  _proto48.inputControllerDidReceiveDragOverPoint = function inputControllerDidReceiveDragOverPoint(t) {
    return this.selectionManager.setLocationRangeFromPointRange(t);
  };
  _proto48.inputControllerDidCancelDrag = function inputControllerDidCancelDrag() {
    this.selectionManager.setLocationRange(this.locationRangeBeforeDrag), this.locationRangeBeforeDrag = null;
  };
  _proto48.locationRangeDidChange = function locationRangeDidChange(t) {
    return this.composition.updateCurrentAttributes(), this.updateCurrentActions(), this.attachmentLocationRange && !wt(this.attachmentLocationRange, t) && this.composition.stopEditingAttachment(), this.notifyEditorElement("selection-change");
  };
  _proto48.toolbarDidClickButton = function toolbarDidClickButton() {
    if (!this.getLocationRange()) return this.setLocationRange({
      index: 0,
      offset: 0
    });
  };
  _proto48.toolbarDidInvokeAction = function toolbarDidInvokeAction(t) {
    return this.invokeAction(t);
  };
  _proto48.toolbarDidToggleAttribute = function toolbarDidToggleAttribute(t) {
    if (this.recordFormattingUndoEntry(t), this.composition.toggleCurrentAttribute(t), this.render(), !this.selectionFrozen) return this.editorElement.focus();
  };
  _proto48.toolbarDidUpdateAttribute = function toolbarDidUpdateAttribute(t, e) {
    if (this.recordFormattingUndoEntry(t), this.composition.setCurrentAttribute(t, e), this.render(), !this.selectionFrozen) return this.editorElement.focus();
  };
  _proto48.toolbarDidRemoveAttribute = function toolbarDidRemoveAttribute(t) {
    if (this.recordFormattingUndoEntry(t), this.composition.removeCurrentAttribute(t), this.render(), !this.selectionFrozen) return this.editorElement.focus();
  };
  _proto48.toolbarWillShowDialog = function toolbarWillShowDialog(t) {
    return this.composition.expandSelectionForEditing(), this.freezeSelection();
  };
  _proto48.toolbarDidShowDialog = function toolbarDidShowDialog(t) {
    return this.notifyEditorElement("toolbar-dialog-show", {
      dialogName: t
    });
  };
  _proto48.toolbarDidHideDialog = function toolbarDidHideDialog(t) {
    return this.thawSelection(), this.editorElement.focus(), this.notifyEditorElement("toolbar-dialog-hide", {
      dialogName: t
    });
  };
  _proto48.freezeSelection = function freezeSelection() {
    if (!this.selectionFrozen) return this.selectionManager.lock(), this.composition.freezeSelection(), this.selectionFrozen = !0, this.render();
  };
  _proto48.thawSelection = function thawSelection() {
    if (this.selectionFrozen) return this.composition.thawSelection(), this.selectionManager.unlock(), this.selectionFrozen = !1, this.render();
  };
  _proto48.canInvokeAction = function canInvokeAction(t) {
    return !!this.actionIsExternal(t) || !(null === (e = this.actions[t]) || void 0 === e || null === (e = e.test) || void 0 === e || !e.call(this));
    var e;
  };
  _proto48.invokeAction = function invokeAction(t) {
    return this.actionIsExternal(t) ? this.notifyEditorElement("action-invoke", {
      actionName: t
    }) : null === (e = this.actions[t]) || void 0 === e || null === (e = e.perform) || void 0 === e ? void 0 : e.call(this);
    var e;
  };
  _proto48.actionIsExternal = function actionIsExternal(t) {
    return /^x-./.test(t);
  };
  _proto48.getCurrentActions = function getCurrentActions() {
    var t = {};
    for (var _e49 in this.actions) t[_e49] = this.canInvokeAction(_e49);
    return t;
  };
  _proto48.updateCurrentActions = function updateCurrentActions() {
    var t = this.getCurrentActions();
    if (!kt(t, this.currentActions)) return this.currentActions = t, this.toolbarController.updateActions(this.currentActions), this.notifyEditorElement("actions-change", {
      actions: this.currentActions
    });
  };
  _proto48.runEditorFilters = function runEditorFilters() {
    var _this73 = this;
    var t = this.composition.getSnapshot();
    if (Array.from(this.editor.filters).forEach(function (e) {
      var _t51 = t,
        i = _t51.document,
        n = _t51.selectedRange;
      t = e.call(_this73.editor, t) || {}, t.document || (t.document = i), t.selectedRange || (t.selectedRange = n);
    }), e = t, i = this.composition.getSnapshot(), !wt(e.selectedRange, i.selectedRange) || !e.document.isEqualTo(i.document)) return this.composition.loadSnapshot(t);
    var e, i;
  };
  _proto48.updateInputElement = function updateInputElement() {
    var t = function (t, e) {
      var i = li[e];
      if (i) return i(t);
      throw new Error("unknown content type: ".concat(e));
    }(this.compositionController.getSerializableElement(), "text/html");
    return this.editorElement.setInputElementValue(t);
  };
  _proto48.notifyEditorElement = function notifyEditorElement(t, e) {
    switch (t) {
      case "document-change":
        this.documentChangedSinceLastRender = !0;
        break;
      case "render":
        this.documentChangedSinceLastRender && (this.documentChangedSinceLastRender = !1, this.notifyEditorElement("change"));
        break;
      case "change":
      case "attachment-add":
      case "attachment-edit":
      case "attachment-remove":
        this.updateInputElement();
    }
    return this.editorElement.notify(t, e);
  };
  _proto48.removeAttachment = function removeAttachment(t) {
    return this.editor.recordUndoEntry("Delete Attachment"), this.composition.removeAttachment(t), this.render();
  };
  _proto48.recordFormattingUndoEntry = function recordFormattingUndoEntry(t) {
    var e = gt(t),
      i = this.selectionManager.getLocationRange();
    if (e || !Dt(i)) return this.editor.recordUndoEntry("Formatting", {
      context: this.getUndoContext(),
      consolidatable: !0
    });
  };
  _proto48.recordTypingUndoEntry = function recordTypingUndoEntry() {
    return this.editor.recordUndoEntry("Typing", {
      context: this.getUndoContext(this.currentAttributes),
      consolidatable: !0
    });
  };
  _proto48.getUndoContext = function getUndoContext() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
    return [this.getLocationContext(), this.getTimeContext()].concat(Array.from(e));
  };
  _proto48.getLocationContext = function getLocationContext() {
    var t = this.selectionManager.getLocationRange();
    return Dt(t) ? t[0].index : t;
  };
  _proto48.getTimeContext = function getTimeContext() {
    return q.interval > 0 ? Math.floor(new Date().getTime() / q.interval) : 0;
  };
  _proto48.isFocused = function isFocused() {
    var t;
    return this.editorElement === (null === (t = this.editorElement.ownerDocument) || void 0 === t ? void 0 : t.activeElement);
  };
  _proto48.isFocusedInvisibly = function isFocusedInvisibly() {
    return this.isFocused() && !this.getLocationRange();
  };
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Rn, [{
    key: "actions",
    get: function get() {
      return this.constructor.actions;
    }
  }]);
  return Rn;
}(Oi);
Ae(Rn, "actions", {
  undo: {
    test: function test() {
      return this.editor.canUndo();
    },
    perform: function perform() {
      return this.editor.undo();
    }
  },
  redo: {
    test: function test() {
      return this.editor.canRedo();
    },
    perform: function perform() {
      return this.editor.redo();
    }
  },
  link: {
    test: function test() {
      return this.editor.canActivateAttribute("href");
    }
  },
  increaseNestingLevel: {
    test: function test() {
      return this.editor.canIncreaseNestingLevel();
    },
    perform: function perform() {
      return this.editor.increaseNestingLevel() && this.render();
    }
  },
  decreaseNestingLevel: {
    test: function test() {
      return this.editor.canDecreaseNestingLevel();
    },
    perform: function perform() {
      return this.editor.decreaseNestingLevel() && this.render();
    }
  },
  attachFiles: {
    test: function test() {
      return !0;
    },
    perform: function perform() {
      return M.pickFiles(this.editor.insertFiles);
    }
  }
}), Rn.proxyMethod("getSelectionManager().setLocationRange"), Rn.proxyMethod("getSelectionManager().getLocationRange");
var Sn = Object.freeze({
    __proto__: null,
    AttachmentEditorController: Pi,
    CompositionController: Ni,
    Controller: Oi,
    EditorController: Rn,
    InputController: Ki,
    Level0InputController: Qi,
    Level2InputController: on,
    ToolbarController: Cn
  }),
  En = Object.freeze({
    __proto__: null,
    MutationObserver: Ui,
    SelectionChangeObserver: Ft
  }),
  kn = Object.freeze({
    __proto__: null,
    FileVerificationOperation: Vi,
    ImagePreloadOperation: Ce
  });
bt("trix-toolbar", "%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}");
var Ln = /*#__PURE__*/function (_HTMLElement) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Ln, _HTMLElement);
  function Ln() {
    return _HTMLElement.apply(this, arguments) || this;
  }
  var _proto49 = Ln.prototype;
  _proto49.connectedCallback = function connectedCallback() {
    "" === this.innerHTML && (this.innerHTML = U.getDefaultHTML());
  };
  return Ln;
}( /*#__PURE__*/(0,_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLElement));
var Dn = 0;
var wn = function wn(t) {
    if (!t.hasAttribute("contenteditable")) return t.setAttribute("contenteditable", ""), function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return e.times = 1, f(t, e);
    }("focus", {
      onElement: t,
      withCallback: function withCallback() {
        return Tn(t);
      }
    });
  },
  Tn = function Tn(t) {
    return Bn(t), Fn(t);
  },
  Bn = function Bn(t) {
    var e, i;
    if (null !== (e = (i = document).queryCommandSupported) && void 0 !== e && e.call(i, "enableObjectResizing")) return document.execCommand("enableObjectResizing", !1, !1), f("mscontrolselect", {
      onElement: t,
      preventDefault: !0
    });
  },
  Fn = function Fn(t) {
    var e, i;
    if (null !== (e = (i = document).queryCommandSupported) && void 0 !== e && e.call(i, "DefaultParagraphSeparator")) {
      var _t52 = n["default"].tagName;
      if (["div", "p"].includes(_t52)) return document.execCommand("DefaultParagraphSeparator", !1, _t52);
    }
  },
  In = a.forcesObjectResizing ? {
    display: "inline",
    width: "auto"
  } : {
    display: "inline-block",
    width: "1px"
  };
bt("trix-editor", "%t {\n    display: block;\n}\n\n%t:empty:not(:focus)::before {\n    content: attr(placeholder);\n    color: graytext;\n    cursor: text;\n    pointer-events: none;\n    white-space: pre-line;\n}\n\n%t a[contenteditable=false] {\n    cursor: text;\n}\n\n%t img {\n    max-width: 100%;\n    height: auto;\n}\n\n%t ".concat(e, " figcaption textarea {\n    resize: none;\n}\n\n%t ").concat(e, " figcaption textarea.trix-autoresize-clone {\n    position: absolute;\n    left: -9999px;\n    max-height: 0px;\n}\n\n%t ").concat(e, " figcaption[data-trix-placeholder]:empty::before {\n    content: attr(data-trix-placeholder);\n    color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n    display: ").concat(In.display, " !important;\n    width: ").concat(In.width, " !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n    vertical-align: top !important;\n    margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n    vertical-align: bottom !important;\n    margin-right: -1px !important;\n}"));
var Pn = /*#__PURE__*/function (_HTMLElement2) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Pn, _HTMLElement2);
  function Pn() {
    return _HTMLElement2.apply(this, arguments) || this;
  }
  var _proto50 = Pn.prototype;
  _proto50.notify = function notify(t, e) {
    if (this.editorController) return b("trix-".concat(t), {
      onElement: this,
      attributes: e
    });
  };
  _proto50.setInputElementValue = function setInputElementValue(t) {
    this.inputElement && (this.inputElement.value = t);
  };
  _proto50.connectedCallback = function connectedCallback() {
    var _this74 = this;
    this.hasAttribute("data-trix-internal") || (wn(this), function (t) {
      if (!t.hasAttribute("role")) t.setAttribute("role", "textbox");
    }(this), function (t) {
      if (t.hasAttribute("aria-label") || t.hasAttribute("aria-labelledby")) return;
      var e = function e() {
        var e = Array.from(t.labels).map(function (e) {
            if (!e.contains(t)) return e.textContent;
          }).filter(function (t) {
            return t;
          }),
          i = e.join(" ");
        return i ? t.setAttribute("aria-label", i) : t.removeAttribute("aria-label");
      };
      e(), f("focus", {
        onElement: t,
        withCallback: e
      });
    }(this), this.editorController || (b("trix-before-initialize", {
      onElement: this
    }), this.editorController = new Rn({
      editorElement: this,
      html: this.defaultValue = this.value
    }), requestAnimationFrame(function () {
      return b("trix-initialize", {
        onElement: _this74
      });
    })), this.editorController.registerSelectionManager(), this.registerResetListener(), this.registerClickListener(), function (t) {
      if (!document.querySelector(":focus") && t.hasAttribute("autofocus") && document.querySelector("[autofocus]") === t) t.focus();
    }(this));
  };
  _proto50.disconnectedCallback = function disconnectedCallback() {
    var t;
    return null === (t = this.editorController) || void 0 === t || t.unregisterSelectionManager(), this.unregisterResetListener(), this.unregisterClickListener();
  };
  _proto50.registerResetListener = function registerResetListener() {
    return this.resetListener = this.resetBubbled.bind(this), window.addEventListener("reset", this.resetListener, !1);
  };
  _proto50.unregisterResetListener = function unregisterResetListener() {
    return window.removeEventListener("reset", this.resetListener, !1);
  };
  _proto50.registerClickListener = function registerClickListener() {
    return this.clickListener = this.clickBubbled.bind(this), window.addEventListener("click", this.clickListener, !1);
  };
  _proto50.unregisterClickListener = function unregisterClickListener() {
    return window.removeEventListener("click", this.clickListener, !1);
  };
  _proto50.resetBubbled = function resetBubbled(t) {
    if (!t.defaultPrevented && t.target === this.form) return this.reset();
  };
  _proto50.clickBubbled = function clickBubbled(t) {
    if (t.defaultPrevented) return;
    if (this.contains(t.target)) return;
    var e = A(t.target, {
      matchingSelector: "label"
    });
    return e && Array.from(this.labels).includes(e) ? this.focus() : void 0;
  };
  _proto50.reset = function reset() {
    this.value = this.defaultValue;
  };
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Pn, [{
    key: "trixId",
    get: function get() {
      return this.hasAttribute("trix-id") ? this.getAttribute("trix-id") : (this.setAttribute("trix-id", ++Dn), this.trixId);
    }
  }, {
    key: "labels",
    get: function get() {
      var t = [];
      this.id && this.ownerDocument && t.push.apply(t, Array.from(this.ownerDocument.querySelectorAll("label[for='".concat(this.id, "']")) || []));
      var e = A(this, {
        matchingSelector: "label"
      });
      return e && [this, null].includes(e.control) && t.push(e), t;
    }
  }, {
    key: "toolbarElement",
    get: function get() {
      var t;
      if (this.hasAttribute("toolbar")) return null === (t = this.ownerDocument) || void 0 === t ? void 0 : t.getElementById(this.getAttribute("toolbar"));
      if (this.parentNode) {
        var _t53 = "trix-toolbar-".concat(this.trixId);
        this.setAttribute("toolbar", _t53);
        var _e50 = k("trix-toolbar", {
          id: _t53
        });
        return this.parentNode.insertBefore(_e50, this), _e50;
      }
    }
  }, {
    key: "form",
    get: function get() {
      var t;
      return null === (t = this.inputElement) || void 0 === t ? void 0 : t.form;
    }
  }, {
    key: "inputElement",
    get: function get() {
      var t;
      if (this.hasAttribute("input")) return null === (t = this.ownerDocument) || void 0 === t ? void 0 : t.getElementById(this.getAttribute("input"));
      if (this.parentNode) {
        var _t54 = "trix-input-".concat(this.trixId);
        this.setAttribute("input", _t54);
        var _e51 = k("input", {
          type: "hidden",
          id: _t54
        });
        return this.parentNode.insertBefore(_e51, this.nextElementSibling), _e51;
      }
    }
  }, {
    key: "editor",
    get: function get() {
      var t;
      return null === (t = this.editorController) || void 0 === t ? void 0 : t.editor;
    }
  }, {
    key: "name",
    get: function get() {
      var t;
      return null === (t = this.inputElement) || void 0 === t ? void 0 : t.name;
    }
  }, {
    key: "value",
    get: function get() {
      var t;
      return null === (t = this.inputElement) || void 0 === t ? void 0 : t.value;
    },
    set: function set(t) {
      var e;
      this.defaultValue = t, null === (e = this.editor) || void 0 === e || e.loadHTML(this.defaultValue);
    }
  }]);
  return Pn;
}( /*#__PURE__*/(0,_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLElement));
var Nn = {
  VERSION: t,
  config: V,
  core: ci,
  models: Di,
  views: wi,
  controllers: Sn,
  observers: En,
  operations: kn,
  elements: Object.freeze({
    __proto__: null,
    TrixEditorElement: Pn,
    TrixToolbarElement: Ln
  }),
  filters: Object.freeze({
    __proto__: null,
    Filter: bi,
    attachmentGalleryFilter: vi
  })
};
Object.assign(Nn, Di), window.Trix = Nn, setTimeout(function () {
  customElements.get("trix-toolbar") || customElements.define("trix-toolbar", Ln), customElements.get("trix-editor") || customElements.define("trix-editor", Pn);
}, 0);


/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('sidtechno/customlogin', function () {
  console.log('[sidtechno/customlogin] Hello, forum and admin!');
});

/***/ }),

/***/ "./src/forum/components/AddCollection.js":
/*!***********************************************!*\
  !*** ./src/forum/components/AddCollection.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addSubscriptionBadge)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/models/Discussion */ "flarum/common/models/Discussion");
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Badge */ "flarum/common/components/Badge");
/* harmony import */ var flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/HeaderPrimary */ "flarum/forum/components/HeaderPrimary");
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__);







// import isFollowingPage from './utils/isFollowingPage';

function addSubscriptionBadge() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'items', function (items) {
    items.add('wiki', m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('wiki')
    }, "Wiki"));
  });
}

/***/ }),

/***/ "./src/forum/components/AddWikiModal.js":
/*!**********************************************!*\
  !*** ./src/forum/components/AddWikiModal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddWikiModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");


function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var AddWikiModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AddWikiModal, _Modal);
  function AddWikiModal(vnode) {
    var _this;
    _this = _Modal.call(this, vnode) || this;
    _this.data = [];
    _this.categoryList = [];
    _this.sub_categoryList = [];
    _this.url = app.forum.attribute('apiUrl');
    return _this;
  }
  var _proto = AddWikiModal.prototype;
  _proto.className = function className() {
    return 'AddWikiModal Modal--small';
  };
  _proto.title = function title() {
    return 'Add Wiki';
  };
  _proto.handleOutsideClick = function handleOutsideClick(e) {
    var dropdownDiv = document.querySelector('.dropdown-options');
    var searchInput = document.querySelector('.category-search');
    if (dropdownDiv) {
      // If the target of the click isn't the dropdownDiv, the searchInput, nor a descendant of the dropdownDiv
      if (!dropdownDiv.contains(e.target) && !searchInput.contains(e.target)) {
        dropdownDiv.style.display = 'none';
      }
    }
  };
  _proto.oninit = function oninit(vnode) {
    var _this2 = this;
    _Modal.prototype.oninit.call(this, vnode);
    document.addEventListener('click', this.handleOutsideClick.bind(this));

    // Step 1: API se data fetch karna
    fetch(this.url + "/wiki/category", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      _this2.categoryList = data.data;
      m.redraw();
    });
  };
  _proto.handleCategoryChange = function handleCategoryChange(e) {
    var _this3 = this;
    var category_id = e.target.value;
    var url = this.url;
    console.log(e.target.value, url);
    fetch(app.forum.attribute('apiUrl') + "/wiki/category/sub/" + category_id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      _this3.sub_categoryList = data.data.subcategory;
      m.redraw();
    });
  };
  _proto.handleSubmit = /*#__PURE__*/function () {
    var _handleSubmit = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var cat_id, subcat_id, title, content, formData, csrfToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log(e, 123456);
            cat_id = $('.cat-create').val();
            subcat_id = $('.subcat-create').val();
            title = $('.title-create').val();
            content = $('.des-create .trix-content')[0].innerHTML; // console.log($('.des-create .trix-content')[0].innerHTML,content.toString())
            formData = {
              category_id: cat_id,
              title: title,
              content: content
            };
            if (!(cat_id && title.trim() && content.trim())) {
              _context.next = 13;
              break;
            }
            _context.next = 9;
            return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_5__.fetchCsrfToken)();
          case 9:
            csrfToken = _context.sent;
            // Now you have the CSRF token in the "csrfToken" variable
            // Make an API request to a hypothetical endpoint
            fetch(app.forum.attribute('apiUrl') + "/wiki/post/create", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
              },
              body: JSON.stringify(formData)
            }).then(function (response) {
              return response.json();
            }).then(function (response) {
              if (response != null && response.errors) {
                var err_msg = [];
                if (typeof (response.errors === "string")) {
                  sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("" + response.errors, '', 'warning');
                } else {
                  for (var key in response == null ? void 0 : response.errors) {
                    if (Object.hasOwnProperty.call(response == null ? void 0 : response.errors, key)) {
                      var element = response == null ? void 0 : response.errors[key];
                      if (Array.isArray(element)) {
                        err_msg.push(element.join(','));
                      }
                    }
                  }
                  sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("" + err_msg.join(''), '', 'warning');
                }
              } else {
                window.location.reload();
              }
            })["catch"](function (errors) {});
            _context.next = 14;
            break;
          case 13:
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('All fields are required to fill', '', 'warning');
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function handleSubmit(_x) {
      return _handleSubmit.apply(this, arguments);
    }
    return handleSubmit;
  }();
  _proto.onremove = function onremove() {
    document.removeEventListener('click', this.handleOutsideClick.bind(this));
  }

  // hide() {
  //   super.hide(); // This calls the original hide function from the parent class.
  //   this.onremove();
  //   document.removeEventListener('click', this.handleOutsideClick);
  //   m.redraw() // This calls your custom function.
  // }
  ;
  _proto.handleCategorySearch = function handleCategorySearch(e) {
    var searchTerm = e.target.value.toLowerCase();
    this.showDropdownOptions(searchTerm);
  };
  _proto.handleCategoryFocus = function handleCategoryFocus() {
    this.showDropdownOptions();
  };
  _proto.showDropdownOptions = function showDropdownOptions(filter) {
    var _this4 = this;
    if (filter === void 0) {
      filter = '';
    }
    var dropdownDiv = document.querySelector('.dropdown-options');
    var selectOptions = this.categoryList.map(function (val) {
      return {
        id: val == null ? void 0 : val.name,
        name: val == null ? void 0 : val.name
      };
    });
    var filteredOptions = selectOptions;
    if (filter) {
      filteredOptions = selectOptions.filter(function (option) {
        return option.name.toLowerCase().includes(filter);
      });
    }
    dropdownDiv.innerHTML = '';
    var _loop = function _loop() {
      var option = _step.value;
      var optionDiv = document.createElement('div');
      optionDiv.innerText = option.name;
      optionDiv.className = 'dropdown-option';
      optionDiv.onclick = function () {
        _this4.handleCategorySelect(option.name, option.name);
      };
      dropdownDiv.appendChild(optionDiv);
    };
    for (var _iterator = _createForOfIteratorHelperLoose(filteredOptions), _step; !(_step = _iterator()).done;) {
      _loop();
    }
    dropdownDiv.style.display = 'block';
  };
  _proto.handleCategorySelect = function handleCategorySelect(id, name) {
    // Update the hidden select input with selected value
    // const selectInput = document.querySelector('.cat-create');
    // selectInput.value = name;

    // Hide dropdown and update search input with selected name
    var dropdownDiv = document.querySelector('.dropdown-options');
    dropdownDiv.style.display = 'none';
    var searchInput = document.querySelector('.category-search');
    searchInput.value = name;
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      "class": "wiki-category-search vertical-spacing"
    }, m("label", {
      "class": ""
    }, m("span", null, " Category ")), ' ', m("input", {
      type: "text",
      "class": "FormControl category-search cat-create",
      placeholder: "Search category...",
      oninput: this.handleCategorySearch.bind(this),
      onfocus: this.handleCategoryFocus.bind(this)
    }), m("div", {
      "class": "dropdown-options wiki-category-dropdown",
      style: "display:none;"
    })), m("div", {
      "class": "wiki-subcategory-select vertical-spacing"
    }, ' ', m("label", {
      "class": ""
    }, m("span", null, "Tiltle")), m("input", {
      className: "FormControl title-create vertical-spacing",
      name: "title",
      placeholder: "Title"
    })), m("div", {
      "class": ""
    }, ' ', m("label", {
      "class": ""
    }, m("span", null, "Description")), m("div", {
      "class": "wiki-editor des-create"
    }, m("trix-editor", {
      "class": "trix-content"
    }))), m("div", {
      className: "Form-group"
    }, m("button", {
      type: "button",
      onclick: this.handleSubmit,
      className: "Button Button--primary"
    }, "Add"))));
  };
  return AddWikiModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/components/AllPointsRule_user.js":
/*!****************************************************!*\
  !*** ./src/forum/components/AllPointsRule_user.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllPointsRule: () => (/* binding */ AllPointsRule)
/* harmony export */ });
/* harmony import */ var _PointsUsersTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PointsUsersTable */ "./src/forum/components/PointsUsersTable.js");

function AllPointsRule() {
  var url = app.forum.attribute('apiUrl');
  ;
  $(document).ready(function () {
    var main_sidtechno_plugin = $('body .App--user');

    // Add the new users points side nav button
    if (main_sidtechno_plugin) {
      //<============= get all points ===========>
      fetch(url + "/permission/all", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (res) {
        var itemsPerPage = 10; // Number of items to display per page
        var currentPage = 1; // Current page

        // Function to display data for the current page
        function displayDataForPage() {
          var _res$data;
          var startIndex = (currentPage - 1) * itemsPerPage;
          var endIndex = startIndex + itemsPerPage;
          var dataToDisplay = (_res$data = res.data) == null ? void 0 : _res$data.point_rules.slice(startIndex, endIndex);
          var tableHTML = "\n           <div class='users_points_main'>\n            <button class='Button users_points_main_btn'><b>Points </b> </button>\n            <table class='users_points_table sid_permission_table'>\n            <thead>\n            <tr>\n              <th>Conditions</th>\n              <th>Points</th>\n              <th>Limits</th>\n            </tr>\n          </thead>\n          <tbody>\n            " + dataToDisplay.map(function (item) {
            return "\n              <tr>\n                <td>" + item.condition.replaceAll("_", " ") + "</td>\n                <td>" + item.score + "</td>\n                <td>" + item.limit + "</td>\n              </tr>\n            ";
          }).join('') + "\n          </tbody>\n              </table>\n            </div>\n\n            ";
          $('.UserPage-content').html(tableHTML);
          updatePaginationControls();
        }
        // displayDataForPage()
        // Function to update pagination controls
        function updatePaginationControls() {
          var _res$data2;
          var paginationControls = document.createElement('div');
          paginationControls.classList.add('pagination_btn_div');
          var totalPages = Math.ceil(((_res$data2 = res.data) == null ? void 0 : _res$data2.point_rules.length) / itemsPerPage);
          function setPage(pageNumber) {
            if (pageNumber >= 1 && pageNumber <= totalPages) {
              currentPage = pageNumber;
              displayDataForPage();
            }
          }
          paginationControls.innerHTML = "\n              <button class=\"Button\" id=\"prevPage\">Previous</button>\n              <button class=\"Button\" id=\"nextPage\">Next</button>\n            ";
          $('.users_points_main').append(paginationControls);
          var prevPageButton = document.getElementById('prevPage');
          var nextPageButton = document.getElementById('nextPage');
          prevPageButton.addEventListener('click', function () {
            return setPage(currentPage - 1);
          });
          nextPageButton.addEventListener('click', function () {
            return setPage(currentPage + 1);
          });

          // <------------   click on points rule btn ---------------->

          $(".users_points_main_btn").click(_PointsUsersTable__WEBPACK_IMPORTED_MODULE_0__.PointsUsersTable);

          // Disable Previous and Next buttons when appropriate
          if (currentPage === 1) {
            prevPageButton.disabled = true;
          } else {
            prevPageButton.disabled = false;
          }
          if (currentPage === totalPages) {
            nextPageButton.disabled = true;
          } else {
            nextPageButton.disabled = false;
          }
        }
        displayDataForPage();
        console.log(res);
      })["catch"](function (error) {
        // Handle errors
        console.error('API Error:', error);
        // You can display an error message to the user.
      });
    }
  });
}

/***/ }),

/***/ "./src/forum/components/AnswerQuestion.js":
/*!************************************************!*\
  !*** ./src/forum/components/AnswerQuestion.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnswerQuestion: () => (/* binding */ AnswerQuestion)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");
/* harmony import */ var _ResetPasswordModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResetPasswordModal */ "./src/forum/components/ResetPasswordModal.js");




function AnswerQuestion(questionsData) {
  var url = app.forum.attribute('apiUrl');
  ;

  // Check if questions are provided
  if (!questionsData || questionsData.length === 0) {
    console.error('No questions provided');
    return;
  }
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  var modal = document.createElement('div');
  modal.style.backgroundColor = '#f0f0f0';
  modal.style.padding = '20px';
  modal.style.width = '30%';
  modal.style.display = 'flex';
  modal.style.flexDirection = 'column';
  modal.style.alignItems = 'center';
  var title = document.createElement('h2');
  title.innerText = 'Answer More Questions';
  title.style.backgroundColor = "var(--button-primary-bg)";
  title.style.padding = '10px 0px';
  title.style.color = 'white';
  title.style.position = 'relative';
  title.style.width = "100%";
  title.style.textAlign = "center";
  var crossIcon = document.createElement('span');
  crossIcon.innerHTML = '&times;';
  crossIcon.style.position = 'absolute';
  crossIcon.style.right = '10px';
  crossIcon.style.top = '10px';
  crossIcon.style.cursor = 'pointer';
  crossIcon.addEventListener('click', cleanup);
  title.appendChild(crossIcon);
  modal.appendChild(title);
  var answerSection = document.createElement('div');
  answerSection.style.width = '100%';
  questionsData.forEach(function (_ref) {
    var id = _ref.id,
      questionText = _ref.question;
    var questionDiv = document.createElement('div');
    questionDiv.style.width = '100%';
    var questionP = document.createElement('p');
    questionP.innerText = questionText;
    questionDiv.appendChild(questionP);
    var answerInput = document.createElement('input');
    answerInput.setAttribute('type', 'text');
    answerInput.setAttribute('placeholder', 'Your Answer');
    answerInput.style.padding = '10px';
    answerInput.style.width = '100%';
    questionDiv.appendChild(answerInput);
    answerSection.appendChild(questionDiv);
  });
  modal.appendChild(answerSection);
  var submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.innerText = 'Submit Answer';
  submitButton.style.marginTop = '10px';
  submitButton.className = 'Button Button--primary';
  container.appendChild(modal);
  document.body.appendChild(container);
  function cleanup() {
    container.remove();
  }
  submitButton.addEventListener('click', /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      var _answers$, _answers$2, _answers$3, _answers$4, _answers$5, _answers$6;
      var existingErrorMessageDiv, answers, payload, csrfToken, response, data, errorMessageDiv;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            existingErrorMessageDiv = modal.querySelector('.error-message');
            if (existingErrorMessageDiv) {
              existingErrorMessageDiv.remove();
            }
            // Gather the data
            answers = Array.from(answerSection.children).map(function (child) {
              var questionP = child.querySelector('p');
              var answerInput = child.querySelector('input');
              return {
                id: questionsData.find(function (q) {
                  return q.question === questionP.innerText;
                }).id,
                answer: answerInput.value
              };
            }); // Prepare the payload in the required format
            payload = {
              question1: (_answers$ = answers[0]) == null ? void 0 : _answers$.id,
              answer1: (_answers$2 = answers[0]) == null ? void 0 : _answers$2.answer,
              question2: (_answers$3 = answers[1]) == null ? void 0 : _answers$3.id,
              answer2: (_answers$4 = answers[1]) == null ? void 0 : _answers$4.answer,
              question3: (_answers$5 = answers[2]) == null ? void 0 : _answers$5.id,
              answer3: (_answers$6 = answers[2]) == null ? void 0 : _answers$6.answer
            };
            _context.next = 7;
            return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
          case 7:
            csrfToken = _context.sent;
            _context.prev = 8;
            _context.next = 11;
            return fetch(url + "/question/verify", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
                // Include any additional headers if needed, e.g., authentication headers
              },

              body: JSON.stringify(payload)
            });
          case 11:
            response = _context.sent;
            if (!response) {
              _context.next = 19;
              break;
            }
            _context.next = 15;
            return response.json();
          case 15:
            data = _context.sent;
            if (data.message == true) {
              localStorage.setItem("userId", data.data);
              cleanup();
              (0,_ResetPasswordModal__WEBPACK_IMPORTED_MODULE_3__["default"])();
            } else {
              errorMessageDiv = document.createElement('div');
              errorMessageDiv.className = 'error-message'; // Class name assign karein
              errorMessageDiv.style.color = 'red';
              errorMessageDiv.innerText = "Your Question are not match";
              modal.appendChild(errorMessageDiv);
            }

            // Perform any additional actions based on the response, e.g., show a success message
            _context.next = 20;
            break;
          case 19:
            console.error('API Error:', response.statusText);
            // Handle the error, e.g., show an error message to the user
          case 20:
            _context.next = 25;
            break;
          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](8);
            console.error('Network Error:', _context.t0);
            // Handle the network error, e.g., show an error message to the user
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[8, 22]]);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());

  // container.addEventListener('click', function (event) {
  //     if (event.target === container) {
  //         cleanup();
  //     }
  // });

  modal.appendChild(submitButton);
  return {
    modal: modal,
    cleanup: cleanup
  };
}

/***/ }),

/***/ "./src/forum/components/ChangePasswordModal.js":
/*!*****************************************************!*\
  !*** ./src/forum/components/ChangePasswordModal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordModalForm: () => (/* binding */ ChangePasswordModalForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");
/* harmony import */ var _NewpasswordModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewpasswordModal */ "./src/forum/components/NewpasswordModal.js");




function ChangePasswordModalForm() {
  // Create a container div for centering the form and overlay
  var url = app.forum.attribute('apiUrl');
  fetch(url + "/user/question/find", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    var questionArr = data == null ? void 0 : data.data;
    if (questionArr) {
      var _questionArr$, _questionArr$2, _questionArr$3;
      // Define a cleanup method for removing the styling and container
      var cleanup = function cleanup() {
        // Remove the container from the DOM
        container.remove();
      }; // Define a submit method for the form
      var submitForm = /*#__PURE__*/function () {
        var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
          var answer1, answer2, answer3, _questionArr$4, _questionArr$5, _questionArr$6, _questionArr$7, formData, csrfToken;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                answer1 = question_1.value;
                answer2 = question_2.value;
                answer3 = question_3.value;
                if (!(answer1.trim() && answer2.trim() && answer3.trim())) {
                  _context.next = 12;
                  break;
                }
                // Perform actions with the form data (e.g., validation, API request)
                formData = {
                  user_id: (_questionArr$4 = questionArr[0]) == null ? void 0 : _questionArr$4.user_id,
                  question1: (_questionArr$5 = questionArr[0]) == null ? void 0 : _questionArr$5.id,
                  answer1: answer1,
                  question2: (_questionArr$6 = questionArr[1]) == null ? void 0 : _questionArr$6.id,
                  answer2: answer2,
                  question3: (_questionArr$7 = questionArr[2]) == null ? void 0 : _questionArr$7.id,
                  answer3: answer3
                };
                _context.next = 7;
                return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
              case 7:
                csrfToken = _context.sent;
                // Now you have the CSRF token in the "csrfToken" variable
                // Make an API request to a hypothetical endpoint
                fetch(url + "/question/verify", {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken
                  },
                  body: JSON.stringify(formData)
                }).then(function (response) {
                  return response.json();
                }).then(function (data) {
                  if (data != null && data.message) {
                    var _questionArr$8;
                    cleanup();
                    (0,_NewpasswordModal__WEBPACK_IMPORTED_MODULE_3__.NewPasswordModalForm)((_questionArr$8 = questionArr[0]) == null ? void 0 : _questionArr$8.user_id);
                    // Remove the form after submission
                  } else {
                    swal("Incorrect Answer", "", "error");
                  }

                  // Handle the API response here

                  // You can perform actions like showing a success message or redirecting the user.
                })["catch"](function (error) {
                  // Handle errors
                  console.error('API Error:', error);
                  // You can display an error message to the user.
                });
                // Prevent the default form submission behavior
                return _context.abrupt("return", false);
              case 12:
                swal("All answers are requird", "", "error");
              case 13:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function submitForm() {
          return _ref.apply(this, arguments);
        };
      }(); // Add a submit event listener to the form
      // Handle the API response here

      var container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.display = 'flex';
      container.style.justifyContent = 'center';
      container.style.alignItems = 'center';
      container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black background
      container.classList.add('admin_add_point_modal');
      // Create a form element
      var form = document.createElement('form');
      form.style.backgroundColor = 'white'; // Form background color
      form.style.padding = '20px'; // Add padding to the form
      form.style.width = '40%'; // Add padding to the form
      form.classList.add('admin_add_point_modal_form');
      $(form).append("<div class='securityQuestion_text'>\n    <span>Secutrity Questions </span>\n    </div>");
      // Create input elements for username, email, and password
      var question_1 = document.createElement('input');
      question_1.setAttribute('type', 'text');
      question_1.setAttribute('placeholder', 'Answer');
      question_1.style.marginBottom = '15px';
      question_1.style.marginTop = '5px';
      question_1.classList.add('FormControl');
      question_1.setAttribute('required', true);
      var question_2 = document.createElement('input');
      question_2.setAttribute('type', 'text');
      question_2.style.marginBottom = '15px';
      question_2.style.marginTop = '5px';
      question_2.setAttribute('placeholder', 'Answer');
      question_2.setAttribute('required', true);
      question_2.classList.add('FormControl');
      var question_3 = document.createElement('input');
      question_3.setAttribute('type', 'text');
      question_3.setAttribute('placeholder', 'Description');
      question_3.setAttribute('placeholder', 'Answer');
      question_3.setAttribute('required', true);
      question_3.style.marginBottom = '15px';
      question_3.style.marginTop = '5px';
      question_3.classList.add('FormControl');

      // Add input elements to the form
      form.appendChild(question_1);
      form.appendChild(question_2);
      form.appendChild(question_3);

      // Create a "Sign Up" button
      var signUpButton = document.createElement('button');
      signUpButton.setAttribute('type', 'submit');
      signUpButton.innerText = 'Submit';
      signUpButton.style.marginBottom = '5px';
      signUpButton.className = ' Button Button--primary points_add_btn'; // Add a class for styling

      // Add form elements to the form
      var usernameLabel = document.createElement('label');
      usernameLabel.innerText = "Q: " + ((_questionArr$ = questionArr[0]) == null ? void 0 : _questionArr$.question);
      usernameLabel.classList.add('Button-label-changePassword');
      var numberLabel = document.createElement('label');
      numberLabel.innerText = "Q: " + ((_questionArr$2 = questionArr[1]) == null ? void 0 : _questionArr$2.question);
      numberLabel.classList.add('Button-label-changePassword');
      var descriptionLabel = document.createElement('label');
      descriptionLabel.innerText = "Q: " + ((_questionArr$3 = questionArr[2]) == null ? void 0 : _questionArr$3.question);
      descriptionLabel.classList.add('Button-label-changePassword');

      // Create div elements to wrap each label and input pair
      var usernameDiv = document.createElement('div');
      usernameDiv.appendChild(usernameLabel);
      usernameDiv.appendChild(question_1);
      var numberDiv = document.createElement('div');
      numberDiv.appendChild(numberLabel);
      numberDiv.appendChild(question_2);
      var descriptionDiv = document.createElement('div');
      descriptionDiv.appendChild(descriptionLabel);
      descriptionDiv.appendChild(question_3);

      // Append the divs to the form
      form.appendChild(usernameDiv);
      form.appendChild(numberDiv);
      form.appendChild(descriptionDiv);
      form.appendChild(signUpButton);

      // Add the form to the container
      container.appendChild(form);

      // Append the container to the body of the document
      document.body.appendChild(container);
      form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        submitForm(); // Call the custom submitForm method
      });

      // Add a click event listener to the container to close the form (modal)
      container.addEventListener('click', function (event) {
        if (event.target === container) {
          cleanup(); // Close the form when clicking outside
        }
      });

      // Return the form element and submitForm method
      return {
        form: form,
        submitForm: submitForm
      };

      // You can perform actions like showing a success message or redirecting the user.
    }
  })["catch"](function (error) {
    // Handle errors
    console.error('API Error:', error);
    // You can display an error message to the user.
  });
}

/***/ }),

/***/ "./src/forum/components/ChangePassword_sid.js":
/*!****************************************************!*\
  !*** ./src/forum/components/ChangePassword_sid.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangPasswordSidBtn: () => (/* binding */ ChangPasswordSidBtn)
/* harmony export */ });
/* harmony import */ var _ChangePasswordModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePasswordModal */ "./src/forum/components/ChangePasswordModal.js");
/* harmony import */ var _EnterPasswordModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EnterPasswordModal */ "./src/forum/components/EnterPasswordModal.js");


function ChangPasswordSidBtn() {
  $(document).ready(function () {
    var main_sidtechno_plugin = $('body .App--user .App-content #content .UserPage');
    if (main_sidtechno_plugin.length) {
      var curr_url = document.URL;
      if (curr_url.includes("/settings")) {
        //<---- hide old btn in setting page ---->
        $('body .App--user .App-content #content .UserPage .sideNavContainer .SettingsPage .item-account .item-changePassword,.item-changeEmail').hide();

        //<---- show new btn in setting page ---->

        $('body .App--user .App-content #content .UserPage .sideNavContainer .SettingsPage .item-account .Settings-account ul').append("\n <li class=\"item-sid_btn-changePassword\" ><button class=\"Button\" type=\"button\"><span class=\"Button-label\">Change Password</span></button></li>\n <li class=\"item-sid_btn-editSecurityQuetions\" ><button class=\"Button\" type=\"button\"><span class=\"Button-label\">Change Security Questions</span></button></li>\n ");
      }

      // <======== click on change password   ==================>

      $('.UserPage .sideNavContainer .SettingsPage .item-account .Settings-account ul .item-sid_btn-changePassword').click(function () {
        (0,_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordModalForm)();
      });

      // <======== click on change Edit security questions   ==================>

      $('.UserPage .sideNavContainer .SettingsPage .item-account .Settings-account ul .item-sid_btn-editSecurityQuetions').click(function () {
        (0,_EnterPasswordModal__WEBPACK_IMPORTED_MODULE_1__.EnterPasswordModalForm)();
      });
    }
  });
}

/***/ }),

/***/ "./src/forum/components/Collect.js":
/*!*****************************************!*\
  !*** ./src/forum/components/Collect.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLockControl)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/utils/DiscussionControls */ "flarum/forum/utils/DiscussionControls");
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/components/DiscussionPage */ "flarum/forum/components/DiscussionPage");
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_forum_components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/forum/components/Navigation */ "flarum/forum/components/Navigation");
/* harmony import */ var flarum_forum_components_Navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Navigation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_10__);











function addLockControl() {
  var slidingDiv = document.createElement('div');
  slidingDiv.style.width = '500px'; // or whatever width you desire
  slidingDiv.style.height = '100vh'; // assuming you want it to take up the full height
  slidingDiv.style.position = 'fixed';
  // slidingDiv.style.paddingTop = '40px';
  slidingDiv.style.top = '52px';
  slidingDiv.style.right = '-500px'; // initially position it off the right side of the viewport
  slidingDiv.style.transition = 'right 0.3s'; // for a smooth slide-in effect
  slidingDiv.className = 'collection_slider';
  // 2. Append the div to the body.
  document.body.appendChild(slidingDiv);
  slidingDiv.innerHTML = "<div class='slider_main'>\n<span class='cross_collection_btn'><i class=\"fas fa-arrow-right\"></i></span>\n<div class='collection_list_data'> </div>\n</div>";
  $('.cross_collection_btn').click(function () {
    slidingDiv.style.right = '-500px';
    $('.collection_slider_backdrop').remove();
  });
  function handleGetCollectionData() {
    var url = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl');
    fetch(url + "/all/collection", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      var url1 = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('baseUrl');
      var rowsHTML = data.data.map(function (item) {
        return "\n              <li>\n\n              <div class=\"collection-list-item\">\n              <a href='" + url1 + "/d/" + item.slug + "' class='collection_post_link'>\n              <div class=\"collection-container\">\n                 <span class=\"collection-title\">" + item.discussion.title + "</span>\n                 </div>\n          </a>\n\n                 <i id='" + item.discussion_id + "' title=\"Remove from collection\" class=\"fas fa-trash collection-delete\"></i>\n\n          </div>\n          </li>\n  ";
      }).join('');
      var insert_ul = "<ul>\n          " + (rowsHTML.length > 0 ? rowsHTML : "<li style='color:#4d698e'><center> <h4>No collection found</h4></center> </li>") + "\n          </ul>";
      $('.collection_list_data').html(insert_ul);
      $('.collection-delete').click(function (e) {
        var id = e.target.id;
        fetch(url + "/remove/collection/" + id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          return response.json();
        }).then(function (res) {
          handleGetCollectionData();
        });
        e.preventDefault();
      });
    })["catch"](function (error) {});
  }
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_10___default().prototype), 'navItems', function (items) {
    var isLogin = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().session).user;
    if (isLogin) {
      items.add('collections', m("a", {
        "class": "hasIcon",
        onclick: function onclick() {
          if (slidingDiv.style.right === '-500px') {
            slidingDiv.style.right = '0'; // slide in
            handleGetCollectionData();
            $(document.body).append("<div class='collection_slider_backdrop'></div>");
            $('.collection_slider_backdrop').click(function () {
              slidingDiv.style.right = '-500px';
              $(this).remove();
            });
          } else {
            slidingDiv.style.right = '-500px'; // slide out
          }
        }
      }, m("i", {
        "aria-hidden": "true",
        "class": "icon fas fa-heart Button-icon"
      }), m("span", null, "Collections")));
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.extend)((flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_4___default()), 'moderationControls', function (items, discussion) {
    var isLogin = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().session).user;
    if (isLogin) {
      var url = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl');
      var addCollection = /*#__PURE__*/function () {
        var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
          var post_id, csrfToken;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                post_id = discussion.data.id; // let post_id2=e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data-id');;
                //
                _context.next = 3;
                return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_8__.fetchCsrfToken)();
              case 3:
                csrfToken = _context.sent;
                fetch(url + "/add/collection/" + post_id, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }).then(function (response) {
                  if (response.ok) {
                    return response.json();
                  } else {
                    return response.json().then(function (errorData) {
                      throw new Error(errorData.error);
                    });
                  }
                }).then(function (res) {
                  if (res.status) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("" + res.data, '', 'success');
                  } else {
                    if (res.message) {
                      sweetalert__WEBPACK_IMPORTED_MODULE_9___default()('Error', res.message, 'error');
                    } else {
                      sweetalert__WEBPACK_IMPORTED_MODULE_9___default()('Error', res.error, 'error');
                    }
                  }
                })["catch"](function (err) {
                  sweetalert__WEBPACK_IMPORTED_MODULE_9___default()('Error: Something went wrong', err.message, 'error');
                });
              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function addCollection(_x) {
          return _ref.apply(this, arguments);
        };
      }();
      items.add('addToFavorite', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
        icon: "fas fa-heart",
        onclick: addCollection
      }, "Add to collection"));
    }
  });
  //   this.lockAction.bind(discussion)
  // DiscussionControls.lockAction = function () {
  //   this.save({ isLocked: !this.isLocked() }).then(() => {
  //     if (app.current.matches(DiscussionPage)) {
  //       app.current.get('stream').update();
  //     }

  //     m.redraw();
  //   });
  // };
}

/***/ }),

/***/ "./src/forum/components/CommentReplyEditModal.js":
/*!*******************************************************!*\
  !*** ./src/forum/components/CommentReplyEditModal.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommentReplyEditModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");






var CommentReplyEditModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentReplyEditModal, _Modal);
  function CommentReplyEditModal(vnode) {
    var _this;
    _this = _Modal.call(this, vnode) || this;
    _this.postId = null;
    _this.commentId = null;
    _this.isLoading = false;
    _this.data = [];
    _this.categoryList = [];
    _this.sub_categoryList = [];
    _this.url = app.forum.attribute('apiUrl');
    _this.handleSubmit = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
        var post_id, content, editorElement, editor, content3, words, flag, formData, csrfToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              post_id = _this.postId;
              content = $((_this.commentFor ? '.post-comment' : '.comment-reply') + " .trix-content")[0].innerHTML;
              editorElement = document.querySelector('trix-editor');
              editor = editorElement.editor;
              content3 = editor.getDocument().toString();
              words = content3.split(/\s+/).filter(Boolean).length;
              flag = true;
              if (_this.commentFor) {
                if (words < 100) {
                  flag = false;
                  sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Minimum 100 words are required", "", "warning");
                }
              } else {
                if (words > 100) {
                  flag = false;
                  sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Maximum 100 words", "", "warning");
                }
              }

              // return false
              //
              if (!flag) {
                _context.next = 19;
                break;
              }
              formData = _this.commentFor ? {
                content: content
              } : {
                content: content,
                wiki_comment_id: _this.commentId
              };
              if (!content.trim()) {
                _context.next = 18;
                break;
              }
              _this.isLoading = true; // Start loading
              _context.next = 14;
              return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_5__.fetchCsrfToken)();
            case 14:
              csrfToken = _context.sent;
              fetch(app.forum.attribute('apiUrl') + "/" + (_this.commentFor ? "wikicomment/" + _this.postId.id : "/wikireplycomment/" + _this.postId.id), {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  'X-CSRF-Token': csrfToken
                },
                body: JSON.stringify(formData)
              }).then(function (response) {
                return response.json();
              }).then(function (response) {
                if (response.message) {
                  if (_this.commentFor) {
                    _this.updatePostComment(response.data);
                  } else {
                    _this.updateCommentReply(response.data);
                  }
                  _this.isLoading = false; // Stop loading in case of error
                  m.redraw(); // Update the UI
                  _this.hide();
                } else {
                  _this.isLoading = false; // Stop loading in case of error
                  m.redraw(); // Update the UI
                  sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(response.error, '', 'warning');
                }

                // this.updatePostComment()
              })["catch"](function (errors) {});
              _context.next = 19;
              break;
            case 18:
              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Content is required to fill', '', 'warning');
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    _this.postId = vnode.attrs.postId; // Access the postId parameter here
    _this.commentFor = vnode.attrs.commentFor;
    _this.commentId = vnode.attrs.commentId;
    _this.updatePostComment = vnode.attrs.updatePostComment;
    _this.updateCommentReply = vnode.attrs.updateCommentReply;
    return _this;
  }
  var _proto = CommentReplyEditModal.prototype;
  _proto.className = function className() {
    return 'CommentReplyModal Modal--small';
  };
  _proto.title = function title() {
    return "Edit your " + (this.commentFor ? 'comment' : 'reply');
  };
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    // Step 1: API se data fetch karna
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      "class": ""
    }, ' ', m("label", {
      "class": ""
    }, m("span", null, "Description")), m("div", {
      "class": "wiki-editor " + (this.commentFor ? 'post-comment' : 'comment-reply')
    }, m("input", {
      id: "trix-default-value",
      type: "hidden",
      value: this.postId.content
    }), m("trix-editor", {
      input: "trix-default-value",
      "class": "trix-content"
    }))), m("div", {
      className: "Form-group"
    }, this.isLoading ? m("div", {
      "class": "parent_loader"
    }, m("div", {
      className: "loader"
    }, "Loading...")) // Display the loader
    : m("button", {
      type: "button",
      onclick: this.handleSubmit.bind(this),
      className: "Button Button--primary",
      disabled: this.isLoading
    }, "Add"))));
  };
  return CommentReplyEditModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/components/CommentReplyModal.js":
/*!***************************************************!*\
  !*** ./src/forum/components/CommentReplyModal.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommentReplyModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");






var CommentReplyModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentReplyModal, _Modal);
  function CommentReplyModal(vnode) {
    var _this;
    _this = _Modal.call(this, vnode) || this;
    _this.postId = null;
    _this.commentId = null;
    _this.isLoading = false;
    _this.data = [];
    _this.categoryList = [];
    _this.sub_categoryList = [];
    _this.url = app.forum.attribute('apiUrl');
    _this.handleSubmit = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
        var post_id, content, editorElement, editor, content3, words, flag, formData, csrfToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              post_id = _this.postId;
              content = $((_this.commentFor ? '.post-comment' : '.comment-reply') + " .trix-content")[0].innerHTML;
              editorElement = document.querySelector('trix-editor');
              editor = editorElement.editor;
              content3 = editor.getDocument().toString();
              words = content3.split(/\s+/).filter(Boolean).length;
              flag = true;
              if (_this.commentFor) {
                if (words < 100) {
                  flag = false;
                  sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Minimum 100 words are required", "", "warning");
                }
              } else {
                if (words > 100) {
                  flag = false;
                  sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Maximum 100 words", "", "warning");
                }
              }

              // return false
              //
              if (!flag) {
                _context.next = 19;
                break;
              }
              formData = _this.commentFor ? {
                post_id: _this.postId,
                content: content
              } : {
                post_id: post_id,
                content: content,
                wiki_comment_id: _this.commentId
              };
              if (!content.trim()) {
                _context.next = 18;
                break;
              }
              _this.isLoading = true;
              _context.next = 14;
              return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_5__.fetchCsrfToken)();
            case 14:
              csrfToken = _context.sent;
              fetch(app.forum.attribute('apiUrl') + "/" + (_this.commentFor ? 'wikicomment' : 'wikireplycomment'), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'X-CSRF-Token': csrfToken
                },
                body: JSON.stringify(formData)
              }).then(function (response) {
                return response.json();
              }).then(function (response) {
                if (response.message) {
                  if (_this.commentFor) {
                    _this.updatePostComment(response.data);
                  } else {
                    _this.updateCommentReply(response.data);
                  }
                  _this.hide();
                  _this.isLoading = false;
                  m.redraw(); // to reflect the change in the UI
                } else {
                  _this.isLoading = false;
                  m.redraw(); // to reflect the change in the UI
                  sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(response.error, '', 'warning');
                }

                // this.updatePostComment()
              })["catch"](function (errors) {});
              _context.next = 19;
              break;
            case 18:
              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Content is required to fill', '', 'warning');
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    _this.postId = vnode.attrs.postId; // Access the postId parameter here
    _this.commentFor = vnode.attrs.commentFor;
    _this.commentId = vnode.attrs.commentId;
    _this.updatePostComment = vnode.attrs.updatePostComment;
    _this.updateCommentReply = vnode.attrs.updateCommentReply;
    return _this;
  }
  var _proto = CommentReplyModal.prototype;
  _proto.className = function className() {
    return 'CommentReplyModal Modal--small';
  };
  _proto.title = function title() {
    return "Add your " + (this.commentFor ? 'comment' : 'reply');
  };
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      "class": ""
    }, ' ', m("label", {
      "class": ""
    }, m("span", null, "Description")), m("div", {
      "class": "wiki-editor " + (this.commentFor ? 'post-comment' : 'comment-reply')
    }, m("trix-editor", {
      "class": "trix-content"
    }))), m("div", {
      className: "Form-group"
    }, this.isLoading ? m("div", {
      "class": "parent_loader"
    }, m("div", {
      "class": "loader"
    }, "Loading..."), " ") // Add your loader element here
    : m("button", {
      type: "button",
      onclick: this.handleSubmit.bind(this),
      className: "Button Button--primary",
      disabled: this.isLoading
    }, "Save Changes"))));
  };
  return CommentReplyModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/components/CsrfToken.js":
/*!*******************************************!*\
  !*** ./src/forum/components/CsrfToken.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchCsrfToken: () => (/* binding */ fetchCsrfToken)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


function fetchCsrfToken() {
  return _fetchCsrfToken.apply(this, arguments);
}
function _fetchCsrfToken() {
  _fetchCsrfToken = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var url, response, csrfToken;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = app.forum.attribute('apiUrl');
          ;
          _context.prev = 2;
          _context.next = 5;
          return fetch("" + url, {
            method: 'GET',
            credentials: 'include' // Include cookies
          });
        case 5:
          response = _context.sent;
          csrfToken = response.headers.get('X-CSRF-Token');
          if (csrfToken) {
            _context.next = 9;
            break;
          }
          throw new Error('CSRF token not found');
        case 9:
          return _context.abrupt("return", csrfToken);
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](2);
          console.error('Error fetching CSRF token:', _context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 12]]);
  }));
  return _fetchCsrfToken.apply(this, arguments);
}

/***/ }),

/***/ "./src/forum/components/CustomModalForm.js":
/*!*************************************************!*\
  !*** ./src/forum/components/CustomModalForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomModalForm: () => (/* binding */ CustomModalForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomQuestionModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomQuestionModal */ "./src/forum/components/CustomQuestionModal.js");
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");




var myForm;
function CustomModalForm() {
  var url = app.forum.attribute('apiUrl');
  ;
  var originalSignUpButton = document.querySelector('.item-loveUp');
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Semi-transparent black background

  // Create a form element
  var form = document.createElement('form');
  form.style.textAlign = 'center';
  form.style.backgroundColor = '#f0f0f0'; // Form background color (light gray)
  form.style.padding = '20px'; // Add padding to the form
  form.style.width = '30%';
  // Create a title
  var title = document.createElement('h2');
  title.innerText = 'Sign up Form';
  title.style.backgroundColor = "var(--button-primary-bg)";
  title.style.padding = '10px 0px';
  title.style.color = 'white'; // White text color for the title
  title.style.position = 'relative'; // Set position to relative to position the cross icon

  // Create Cross Icon
  var crossIcon = document.createElement('span');
  crossIcon.innerHTML = '&times;'; // Using HTML entity for multiplication sign as a cross icon
  crossIcon.style.position = 'absolute';
  crossIcon.style.right = '10px';
  crossIcon.style.top = '10px';
  crossIcon.style.cursor = 'pointer';

  // Attach click event listener to the cross icon
  crossIcon.addEventListener('click', cleanup);

  // Append Cross Icon to the title
  title.appendChild(crossIcon);

  // Append title to the form
  form.appendChild(title);

  // ... (rest of the code)

  // Create input elements for username, email, and password
  var usernameDiv = document.createElement('div');
  var usernameInput = document.createElement('input');
  usernameInput.setAttribute('type', 'text');
  usernameInput.setAttribute('placeholder', 'Username');
  usernameInput.style.margin = '10px 40px';
  usernameInput.style.padding = '10px';
  usernameInput.style.width = '70%';
  usernameInput.style.textAlign = 'center'; // Placeholder ko center mein align karne ke liye
  usernameDiv.appendChild(usernameInput);
  form.appendChild(usernameDiv); // Append usernameDiv to form

  // Password Input
  var passwordDiv = document.createElement('div');
  var passwordInput = document.createElement('input');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('placeholder', 'Password');
  passwordInput.style.margin = '10px 40px';
  passwordInput.style.padding = '10px';
  passwordInput.style.width = '70%';
  passwordInput.style.textAlign = 'center'; // Placeholder ko center mein align karne ke liye
  passwordDiv.appendChild(passwordInput);
  form.appendChild(passwordDiv); // Append passwordDiv to form

  // Append form to the body
  document.body.appendChild(form);
  var questionSelect = document.createElement('select');
  questionSelect.style.width = '100%';
  questionSelect.classList.add('FormControl');
  var questions = ["Please Answer Any Three Question For Security Reasons", 'What is the name of your oldest or childhood friend?', 'What is your favorite sport or game?', 'What was the name of your first pet?', 'What is your biggest life goal or aspiration?', 'What is your favorite subject in middle school?', 'What is the name of your first secret crush in middle school?'];
  var selectedQuestions = [];
  function refreshDropdown() {
    questionSelect.innerHTML = '';
    if (selectedQuestions.length < 3) {
      questions.forEach(function (question, index) {
        if (!selectedQuestions.includes(index)) {
          var option = document.createElement('option');
          option.value = index;
          option.text = question;
          questionSelect.appendChild(option);
        }
      });
      questionSelect.style.display = ''; // Show the dropdown
    } else {
      questionSelect.style.display = 'none'; // Hide the dropdown
    }
  }

  refreshDropdown();
  form.appendChild(questionSelect);
  var answerSection = document.createElement('div');
  answerSection.style.width = '100%';
  questionSelect.addEventListener('change', function () {
    var selectedQuestionIndex = parseInt(questionSelect.value);
    if (!isNaN(selectedQuestionIndex) && !selectedQuestions.includes(selectedQuestionIndex)) {
      selectedQuestions.push(selectedQuestionIndex);
      var questionDiv = document.createElement('div');
      questionDiv.style.width = '100%';
      var questionP = document.createElement('p');
      questionP.innerText = questions[selectedQuestionIndex];
      questionDiv.appendChild(questionP);
      var answerDiv = document.createElement('div');
      answerDiv.style.display = 'flex';
      answerDiv.style.alignItems = 'center';
      answerDiv.style.justifyContent = 'space-between';
      answerDiv.style.width = '100%';
      answerDiv.style.marginBottom = '10px';
      var answerInput = document.createElement('input');
      answerInput.setAttribute('type', 'text');
      answerInput.setAttribute('placeholder', 'Your Answer');
      answerInput.style.padding = '10px';
      answerInput.style.flexGrow = '1';
      answerInput.classList.add('FormControl');
      answerDiv.appendChild(answerInput);
      var _crossIcon = document.createElement('span');
      _crossIcon.innerHTML = '&times;';
      _crossIcon.style.cursor = 'pointer';
      _crossIcon.style.marginLeft = '10px';
      _crossIcon.addEventListener('click', function (event) {
        var index = selectedQuestions.indexOf(selectedQuestionIndex);
        if (index > -1) {
          selectedQuestions.splice(index, 1);
          answerSection.removeChild(questionDiv);
          refreshDropdown();
        }
        event.stopPropagation(); // Prevent the event from propagating up
      });

      answerDiv.appendChild(_crossIcon);
      questionDiv.appendChild(answerDiv);
      answerSection.appendChild(questionDiv);
      refreshDropdown();

      // Move the dropdown to the end of the form
      form.removeChild(questionSelect);
      form.insertBefore(questionSelect, signUpButton);
    }
  });
  form.appendChild(answerSection);
  // Create a "Sign Up" button
  var signUpButton = document.createElement('button');
  signUpButton.setAttribute('type', 'submit');
  signUpButton.innerText = 'Sign Up';
  signUpButton.style.marginBottom = '10px';
  signUpButton.className = 'Button Button--primary'; // Add a class for styling

  // Add button styles

  // Create an "Already have an account?" line
  var alreadyAccountLine = document.createElement('p');
  alreadyAccountLine.innerText = 'Already have an account?';

  // Add form elements to the form
  form.appendChild(signUpButton);
  form.appendChild(alreadyAccountLine);

  // Add the form to the container
  container.appendChild(form);

  // Append the container to the body of the document
  document.body.appendChild(container);

  // Define a cleanup method for removing the styling and container
  function cleanup() {
    // Remove the container from the DOM

    container.remove();
    originalSignUpButton.style.display = 'block';
  }

  // Define a submit method for the form
  var errorMessageDiv;
  function submitForm() {
    return _submitForm.apply(this, arguments);
  } // Add a submit event listener to the form
  function _submitForm() {
    _submitForm = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var _answers$, _answers$2, _answers$3, _answers$4, _answers$5, _answers$6;
      var existingErrorMessages, username, password, answers, _errorMessageDiv, formData, csrfToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            existingErrorMessages = document.querySelectorAll('.error-message');
            existingErrorMessages.forEach(function (message) {
              return message.remove();
            });
            username = usernameInput.value;
            password = passwordInput.value;
            answers = Array.from(answerSection.children).map(function (child) {
              var questionP = child.querySelector('p');
              var answerInput = child.querySelector('input');
              return {
                question: questionP.innerText,
                answer: answerInput.value
              };
            });
            if (!(answers.length < 3 || answers.some(function (answerObj) {
              return !answerObj.answer.trim();
            }))) {
              _context.next = 12;
              break;
            }
            _errorMessageDiv = document.createElement('div');
            _errorMessageDiv.className = 'error-message';
            _errorMessageDiv.style.color = 'red';
            _errorMessageDiv.innerText = 'Please answer all three selected security questions.';
            form.appendChild(_errorMessageDiv);
            return _context.abrupt("return");
          case 12:
            formData = {
              username: username,
              password: password,
              question_1: (_answers$ = answers[0]) == null ? void 0 : _answers$.question,
              answer_1: (_answers$2 = answers[0]) == null ? void 0 : _answers$2.answer,
              question_2: (_answers$3 = answers[1]) == null ? void 0 : _answers$3.question,
              answer_2: (_answers$4 = answers[1]) == null ? void 0 : _answers$4.answer,
              question_3: (_answers$5 = answers[2]) == null ? void 0 : _answers$5.question,
              answer_3: (_answers$6 = answers[2]) == null ? void 0 : _answers$6.answer
            };
            _context.next = 15;
            return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_3__.fetchCsrfToken)();
          case 15:
            csrfToken = _context.sent;
            // Now you have the CSRF token in the "csrfToken" variable
            // Make an API request to a hypothetical endpoint
            fetch(url + "/custom-signup", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
              },
              body: JSON.stringify(formData)
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              if (data.success) {
                localStorage.setItem("userId", data.data.id);
                cleanup(); // Remove the form after submission
                location.reload();
              } else {
                // Check karein ki errors array exist karta hai aur usmein kam se kam ek element hai
                if (data.errors && data.errors.length > 0) {
                  data.errors.forEach(function (error) {
                    var errorMessage = error.detail;

                    // Naya error message div create karein
                    var errorMessageDiv = document.createElement('div');
                    errorMessageDiv.className = 'error-message'; // Class name assign karein
                    errorMessageDiv.style.color = 'red';
                    errorMessageDiv.innerText = errorMessage;
                    form.appendChild(errorMessageDiv);
                  });
                }
              }
            })["catch"](function (error) {
              // Handle errors
              console.error('API Error:', error);
              // You can display an error message to the user.
            });
            // Prevent the default form submission behavior
            return _context.abrupt("return", false);
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _submitForm.apply(this, arguments);
  }
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    submitForm(); // Call the custom submitForm method
  });

  // Add a click event listener to the container to close the form (modal)
  container.addEventListener('click', function (event) {
    if (event.target === container) {
      cleanup(); // Close the form when clicking outside
    }
  });

  // Return the form element and submitForm method
  return {
    form: form,
    submitForm: submitForm
  };
}

/***/ }),

/***/ "./src/forum/components/CustomQuestionModal.js":
/*!*****************************************************!*\
  !*** ./src/forum/components/CustomQuestionModal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomQuestionModal: () => (/* binding */ CustomQuestionModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");




function CustomQuestionModal() {
  var url = app.forum.attribute('apiUrl');
  ;
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  var modal = document.createElement('div');
  modal.style.backgroundColor = '#f0f0f0';
  modal.style.padding = '20px';
  modal.style.width = '30%';
  modal.style.display = 'flex';
  modal.style.flexDirection = 'column';
  modal.style.alignItems = 'center';
  var title = document.createElement('h2');
  title.innerText = 'Answer Questions';
  title.style.backgroundColor = "var(--button-primary-bg)";
  title.style.padding = '10px 0px';
  title.style.color = 'white';
  title.style.position = 'relative';
  title.style.width = "100%", title.style.textAlign = "center";
  var crossIcon = document.createElement('span');
  crossIcon.innerHTML = '&times;';
  crossIcon.style.position = 'absolute';
  crossIcon.style.right = '10px';
  crossIcon.style.top = '10px';
  crossIcon.style.cursor = 'pointer';
  crossIcon.addEventListener('click', cleanup);
  title.appendChild(crossIcon);
  modal.appendChild(title);
  var questionSelect = document.createElement('select');
  questionSelect.style.width = '100%';
  questionSelect.classList.add('FormControl');
  var questions = ["Please Answer Any Three Question", 'What is the name of your oldest or childhood friend?', 'What is your favorite sport or game?', 'What was the name of your first pet?', 'What is your biggest life goal or aspiration?', 'What is your favorite subject in middle school?', 'What is the name of your first secret crush in middle school?'];
  var selectedQuestions = [];
  function refreshDropdown() {
    questionSelect.innerHTML = '';
    if (selectedQuestions.length < 3) {
      questions.forEach(function (question, index) {
        if (!selectedQuestions.includes(index)) {
          var option = document.createElement('option');
          option.value = index;
          option.text = question;
          questionSelect.appendChild(option);
        }
      });
      modal.insertBefore(questionSelect, submitButton);
    } else {
      if (modal.contains(questionSelect)) {
        modal.removeChild(questionSelect);
      }
    }
  }
  refreshDropdown();
  modal.appendChild(questionSelect);
  var answerSection = document.createElement('div');
  answerSection.style.width = '100%';
  questionSelect.addEventListener('change', function () {
    var selectedQuestionIndex = parseInt(questionSelect.value);
    if (!isNaN(selectedQuestionIndex)) {
      selectedQuestions.push(selectedQuestionIndex);
      var questionDiv = document.createElement('div');
      questionDiv.style.width = '100%';
      var questionP = document.createElement('p');
      questionP.innerText = questions[selectedQuestionIndex];
      questionDiv.appendChild(questionP);
      var answerDiv = document.createElement('div');
      answerDiv.style.display = 'flex';
      answerDiv.style.alignItems = 'center';
      answerDiv.style.justifyContent = 'space-between';
      answerDiv.style.width = '100%';
      answerDiv.style.marginBottom = '10px';
      var answerInput = document.createElement('input');
      answerInput.setAttribute('type', 'text');
      answerInput.setAttribute('placeholder', 'Your Answer');
      // answerInput.style.margin = '10px';
      answerInput.style.padding = '10px';
      answerInput.style.flexGrow = '1';
      answerInput.classList.add('FormControl');
      answerDiv.appendChild(answerInput);
      var _crossIcon = document.createElement('span');
      _crossIcon.innerHTML = '&times;';
      _crossIcon.style.cursor = 'pointer';
      _crossIcon.style.marginLeft = '10px';
      _crossIcon.addEventListener('click', function () {
        var index = selectedQuestions.indexOf(selectedQuestionIndex);
        if (index > -1) {
          selectedQuestions.splice(index, 1);
          answerSection.removeChild(questionDiv);
          refreshDropdown();
        }
      });
      answerDiv.appendChild(_crossIcon);
      questionDiv.appendChild(answerDiv);
      answerSection.appendChild(questionDiv);
      refreshDropdown();
    }
  });
  modal.appendChild(answerSection);
  var submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.innerText = 'Submit Answer';
  submitButton.style.marginTop = '10px';
  submitButton.className = 'Button Button--primary';
  submitButton.disabled = true;
  container.appendChild(modal);
  document.body.appendChild(container);
  function cleanup() {
    container.remove();
  }
  submitButton.addEventListener('click', /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      var _answers$, _answers$2, _answers$3, _answers$4, _answers$5, _answers$6, _answers$7, _answers$8, _answers$9;
      var userId, answers, payload, csrfToken, response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();

            // Gather the data
            userId = localStorage.getItem("userId"); // Replace with the actual user ID
            answers = Array.from(answerSection.children).map(function (child) {
              var questionP = child.querySelector('p');
              var answerInput = child.querySelector('input');
              return {
                question: questionP.innerText,
                answer: answerInput.value
              };
            }); // Prepare the payload
            payload = {
              user_id: userId,
              question_1: (_answers$ = answers[0]) == null ? void 0 : _answers$.question,
              answer_1: (_answers$2 = answers[0]) == null ? void 0 : _answers$2.answer,
              question_2: (_answers$3 = answers[1]) == null ? void 0 : _answers$3.question,
              answer_2: (_answers$4 = answers[1]) == null ? void 0 : _answers$4.answer,
              question_3: (_answers$5 = answers[2]) == null ? void 0 : _answers$5.question,
              answer_3: (_answers$6 = answers[2]) == null ? void 0 : _answers$6.answer
            };
            if (!((_answers$7 = answers[0]) != null && _answers$7.answer.trim() && (_answers$8 = answers[1]) != null && _answers$8.answer.trim() && (_answers$9 = answers[2]) != null && _answers$9.answer.trim())) {
              _context.next = 28;
              break;
            }
            _context.prev = 5;
            _context.next = 8;
            return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_3__.fetchCsrfToken)();
          case 8:
            csrfToken = _context.sent;
            _context.next = 11;
            return fetch(url + "/question/store", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
                // Include any additional headers if needed, e.g., authentication headers
              },

              body: JSON.stringify(payload)
            });
          case 11:
            response = _context.sent;
            if (!response) {
              _context.next = 20;
              break;
            }
            _context.next = 15;
            return response.json();
          case 15:
            data = _context.sent;
            location.reload();
            cleanup();

            // Perform any additional actions based on the response, e.g., show a success message
            _context.next = 21;
            break;
          case 20:
            console.error('API Error:', response.statusText);
            // Handle the error, e.g., show an error message to the user
          case 21:
            _context.next = 26;
            break;
          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](5);
            console.error('Network Error:', _context.t0);
            // Handle the network error, e.g., show an error message to the user
          case 26:
            _context.next = 29;
            break;
          case 28:
            sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("All answers are required", "", "error");
          case 29:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 23]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  container.addEventListener('click', function (event) {
    if (event.target === container) {
      cleanup();
    }
  });
  setInterval(function () {
    submitButton.disabled = selectedQuestions.length < 3;
  }, 100);
  modal.appendChild(submitButton);
  return {
    modal: modal,
    cleanup: cleanup
  };
}

/***/ }),

/***/ "./src/forum/components/DiscussionPageList.js":
/*!****************************************************!*\
  !*** ./src/forum/components/DiscussionPageList.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiscussionPageList)
/* harmony export */ });
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionListItem */ "flarum/components/DiscussionListItem");
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__);


function DiscussionPageList() {
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'oncreate', function (item) {
    this.$('.DiscussionListItem-main').each(function () {
      var $this = $(this);

      // Clone the element to create a new anchor element, preserving class and style
      var newAnchor = $this.clone();

      // Replace the /d/ part of the href attribute with /post/
      var customUrl = newAnchor.attr('href').replace('/d/', '/post/');
      newAnchor.attr('href', customUrl);

      // Replace the old anchor with the new one
      $this.replaceWith(newAnchor);
    });
  });
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'onupdate', function () {
    this.$('.DiscussionListItem-main').each(function () {
      // If the anchor tag was replaced on create, we may not need to replace it again.
      // However, if it needs to be done, replicate the code from 'oncreate' here.
    });
  });
}

/***/ }),

/***/ "./src/forum/components/DropdownEdit.js":
/*!**********************************************!*\
  !*** ./src/forum/components/DropdownEdit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SomeOtherComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);





var CustomDropdown = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CustomDropdown, _Component);
  function CustomDropdown(vnode) {
    var _this;
    _this = _Component.call(this, vnode) || this;
    _this.slug = vnode.attrs.slug; // Access the postId parameter here
    _this.handleSortComment = vnode.attrs.handleSortComment; // Access the postId parameter here
    return _this;
  }
  var _proto = CustomDropdown.prototype;
  _proto.init = function init() {
    this.selected = 'Sort'; // Change here
  };
  _proto.view = function view() {
    return m((flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default()), {
      buttonClassName: 'Button',
      label: this.selected || "Sort"
    }, this.getDropdownItems().toArray());
  };
  _proto.handleSortData = function handleSortData(type) {};
  _proto.getDropdownItems = function getDropdownItems() {
    var _this2 = this;
    var items = new (flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    items.add('like', flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
      className: 'Dropdown-item',
      active: this.selected === 'Like',
      onclick: function onclick() {
        _this2.selected = 'Like';
        _this2.handleSortComment("like");
      }
    }, 'Like'));
    items.add('latest', flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
      className: 'Dropdown-item',
      active: this.selected === 'Latest',
      onclick: function onclick() {
        _this2.selected = 'Latest';
        _this2.handleSortComment("latest");
      }
    }, 'Latest'));
    items.add('oldest', flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
      className: 'Dropdown-item',
      active: this.selected === 'Oldest',
      onclick: function onclick() {
        _this2.selected = 'Oldest';
        _this2.handleSortComment("oldest");
      }
    }, 'Oldest'));
    return items;
  };
  return CustomDropdown;
}((flarum_Component__WEBPACK_IMPORTED_MODULE_1___default()));
var SomeOtherComponent = /*#__PURE__*/function (_Component2) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SomeOtherComponent, _Component2);
  function SomeOtherComponent() {
    return _Component2.apply(this, arguments) || this;
  }
  var _proto2 = SomeOtherComponent.prototype;
  _proto2.view = function view(vnode) {
    return m('div', [m(CustomDropdown, {
      slug: vnode.attrs.slug,
      handleSortComment: vnode.attrs.handleSortComment
    })]);
  };
  return SomeOtherComponent;
}((flarum_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/EditPostModal.js":
/*!***********************************************!*\
  !*** ./src/forum/components/EditPostModal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditPostModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");






var EditPostModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(EditPostModal, _Modal);
  function EditPostModal(vnode) {
    var _this;
    _this = _Modal.call(this, vnode) || this;
    _this.url = app.forum.attribute('apiUrl');
    _this.postId = vnode.attrs.postId;
    return _this;
  }
  var _proto = EditPostModal.prototype;
  _proto.className = function className() {
    return 'EditWikiModal Modal--small';
  };
  _proto.title = function title() {
    return 'Edit Discussion Content';
  };
  _proto.oninit = function oninit(vnode) {
    var _this2 = this;
    _Modal.prototype.oninit.call(this, vnode);

    // Fetching post edit data
    fetch(this.url + "/post/edit/" + this.postId.id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      _this2.postEditData = data.data;
      m.redraw();
    });
  };
  _proto.handleSubmit = /*#__PURE__*/function () {
    var _handleSubmit = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var content, formData, csrfToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            content = $('.des-create .trix-content')[0].innerHTML;
            formData = {
              content: content
            };
            if (!content.trim()) {
              _context.next = 9;
              break;
            }
            _context.next = 5;
            return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_5__.fetchCsrfToken)();
          case 5:
            csrfToken = _context.sent;
            fetch(this.url + "/post/update/" + this.postId.post_id, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
              },
              body: JSON.stringify(formData)
            }).then(function (response) {
              return response.json();
            }).then(function (response) {
              if (response != null && response.errors) {
                var err_msg = [];
                for (var key in response == null ? void 0 : response.errors) {
                  if (Object.hasOwnProperty.call(response == null ? void 0 : response.errors, key)) {
                    var element = response == null ? void 0 : response.errors[key];
                    if (Array.isArray(element)) {
                      err_msg.push(element.join(','));
                    }
                  }
                }
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("" + err_msg.join(''), '', 'warning');
              } else {
                window.location.reload();
              }
            })["catch"](function (errors) {
              // Handling errors
            });
            _context.next = 10;
            break;
          case 9:
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Content is required', '', 'warning');
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function handleSubmit(_x) {
      return _handleSubmit.apply(this, arguments);
    }
    return handleSubmit;
  }();
  _proto.hide = function hide() {
    _Modal.prototype.hide.call(this);
    m.redraw();
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      "class": "wiki-editor des-create"
    }, m("label", null, m("span", null, "Description")), m("input", {
      id: "trix-default-value",
      type: "hidden",
      value: this.postId.content
    }), m("trix-editor", {
      input: "trix-default-value",
      "class": "trix-content"
    })), m("div", {
      className: "Form-group"
    }, m("button", {
      type: "button",
      onclick: this.handleSubmit.bind(this),
      className: "Button Button--primary"
    }, "Update Content"))));
  };
  return EditPostModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/components/EditWikiModal.js":
/*!***********************************************!*\
  !*** ./src/forum/components/EditWikiModal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditWikiModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");


function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var EditWikiModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(EditWikiModal, _Modal);
  function EditWikiModal(vnode) {
    var _this;
    _this = _Modal.call(this, vnode) || this;
    _this.data = [];
    _this.categoryList = [];
    _this.sub_categoryList = [];
    _this.url = app.forum.attribute('apiUrl');
    _this.postId = vnode.attrs.postId; // Access the postId parameter here
    return _this;
  }
  var _proto = EditWikiModal.prototype;
  _proto.className = function className() {
    return 'EditWikiModal Modal--small';
  };
  _proto.title = function title() {
    return 'Edit Wiki';
  };
  _proto.handleOutsideClick = function handleOutsideClick(e) {
    var dropdownDiv = document.querySelector('.dropdown-options');
    var searchInput = document.querySelector('.category-search');
    if (dropdownDiv) {
      // If the target of the click isn't the dropdownDiv, the searchInput, nor a descendant of the dropdownDiv
      if (!dropdownDiv.contains(e.target) && !searchInput.contains(e.target)) {
        dropdownDiv.style.display = 'none';
      }
    }
  };
  _proto.oninit = function oninit(vnode) {
    var _this2 = this;
    _Modal.prototype.oninit.call(this, vnode);
    document.addEventListener('click', this.handleOutsideClick.bind(this));

    // Step 1: API se data fetch karna
    fetch(this.url + "/wiki/post/edit/" + this.postId.id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      _this2.postEditData = data.data;
      m.redraw();
    });
    fetch(this.url + "/wiki/category", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      _this2.categoryList = data.data;
      m.redraw();
    });
  };
  _proto.handleCategoryChange = function handleCategoryChange(e) {
    var _this3 = this;
    var category_id = e.target.value;
    var url = this.url;
    fetch(app.forum.attribute('apiUrl') + "/wiki/category/sub/" + category_id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      _this3.sub_categoryList = data.data.subcategory;
      m.redraw();
    });
  };
  _proto.handleSubmit = /*#__PURE__*/function () {
    var _handleSubmit = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var cat_id, subcat_id, title, content, formData, csrfToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            cat_id = $('.cat-create').val();
            subcat_id = $('.subcat-create').val();
            title = $('.title-create').val();
            content = $('.des-create .trix-content')[0].innerHTML;
            formData = {
              category_id: cat_id,
              title: title,
              content: content
            };
            if (!(cat_id && title.trim() && content.trim())) {
              _context.next = 12;
              break;
            }
            _context.next = 8;
            return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_5__.fetchCsrfToken)();
          case 8:
            csrfToken = _context.sent;
            // Now you have the CSRF token in the "csrfToken" variable
            // Make an API request to a hypothetical endpoint
            fetch(app.forum.attribute('apiUrl') + "/wiki/post/" + this.postId.id, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
              },
              body: JSON.stringify(formData)
            }).then(function (response) {
              return response.json();
            }).then(function (response) {
              if (response != null && response.errors) {
                var err_msg = [];
                for (var key in response == null ? void 0 : response.errors) {
                  if (Object.hasOwnProperty.call(response == null ? void 0 : response.errors, key)) {
                    var element = response == null ? void 0 : response.errors[key];
                    if (Array.isArray(element)) {
                      err_msg.push(element.join(','));
                    }
                  }
                }
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("" + err_msg.join(''), '', 'warning');
              } else {
                window.location.reload();
              }
            })["catch"](function (errors) {});
            _context.next = 13;
            break;
          case 12:
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('All fields are required to fill', '', 'warning');
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function handleSubmit(_x) {
      return _handleSubmit.apply(this, arguments);
    }
    return handleSubmit;
  }();
  _proto.onremove = function onremove() {
    document.removeEventListener('click', this.handleOutsideClick.bind(this));
  };
  _proto.hide = function hide() {
    _Modal.prototype.hide.call(this); // This calls the original hide function from the parent class.
    this.onremove();
    document.removeEventListener('click', this.handleOutsideClick);
    m.redraw(); // This calls your custom function.
  };
  _proto.handleCategorySearch = function handleCategorySearch(e) {
    var searchTerm = e.target.value.toLowerCase();
    this.showDropdownOptions(searchTerm);
  };
  _proto.handleCategoryFocus = function handleCategoryFocus() {
    this.showDropdownOptions();
  };
  _proto.showDropdownOptions = function showDropdownOptions(filter) {
    var _this4 = this;
    if (filter === void 0) {
      filter = '';
    }
    var dropdownDiv = document.querySelector('.dropdown-options');
    var selectOptions = this.categoryList.map(function (val) {
      return {
        id: val == null ? void 0 : val.name,
        name: val == null ? void 0 : val.name
      };
    });
    var filteredOptions = selectOptions;
    if (filter) {
      filteredOptions = selectOptions.filter(function (option) {
        return option.name.toLowerCase().includes(filter);
      });
    }
    dropdownDiv.innerHTML = '';
    var _loop = function _loop() {
      var option = _step.value;
      var optionDiv = document.createElement('div');
      optionDiv.innerText = option.name;
      optionDiv.className = 'dropdown-option';
      optionDiv.onclick = function () {
        _this4.handleCategorySelect(option.name, option.name);
      };
      dropdownDiv.appendChild(optionDiv);
    };
    for (var _iterator = _createForOfIteratorHelperLoose(filteredOptions), _step; !(_step = _iterator()).done;) {
      _loop();
    }
    dropdownDiv.style.display = 'block';
  };
  _proto.handleCategorySelect = function handleCategorySelect(id, name) {
    // Update the hidden select input with selected value
    // const selectInput = document.querySelector('.cat-create');
    // selectInput.value = name;

    // Hide dropdown and update search input with selected name
    var dropdownDiv = document.querySelector('.dropdown-options');
    dropdownDiv.style.display = 'none';
    var searchInput = document.querySelector('.category-search');
    searchInput.value = name;
  };
  _proto.onremove = function onremove() {
    document.removeEventListener('click', this.boundHandleOutsideClick);
  };
  _proto.onhide = function onhide() {
    document.removeEventListener('click', this.boundHandleOutsideClick);
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      "class": "wiki-category-search  wiki-subcategory-select vertical-spacing"
    }, m("label", {
      "class": ""
    }, m("span", null, " Category ")), ' ', m("input", {
      type: "text",
      "class": "FormControl category-search cat-create",
      placeholder: "Search category...",
      oninput: this.handleCategorySearch.bind(this),
      onfocus: this.handleCategoryFocus.bind(this),
      defaultValue: this.postId.category
    }), m("div", {
      "class": "dropdown-options wiki-category-dropdown",
      style: "display:none;"
    })), m("div", {
      "class": "wiki-subcategory-select vertical-spacing"
    }, ' ', m("label", {
      "class": ""
    }, m("span", null, "Tiltle")), m("input", {
      value: this.postId.title,
      className: "FormControl title-create vertical-spacing",
      name: "title",
      placeholder: "Title"
    })), m("div", {
      "class": " wiki-subcategory-select"
    }, ' ', m("label", {
      "class": ""
    }, m("span", null, "Description")), m("div", {
      "class": "wiki-editor des-create"
    }, m("input", {
      id: "trix-default-value",
      type: "hidden",
      value: this.postId.content
    }), m("trix-editor", {
      input: "trix-default-value",
      "class": "trix-content"
    }))), m("div", {
      className: "Form-group"
    }, m("button", {
      type: "button",
      onclick: this.handleSubmit.bind(this),
      className: "Button Button--primary"
    }, "Add"))));
  };
  return EditWikiModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/components/EnterPasswordModal.js":
/*!****************************************************!*\
  !*** ./src/forum/components/EnterPasswordModal.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnterPasswordModalForm: () => (/* binding */ EnterPasswordModalForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");
/* harmony import */ var _CustomQuestionModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomQuestionModal */ "./src/forum/components/CustomQuestionModal.js");




function EnterPasswordModalForm(user_id) {
  // Create a container div for centering the form and overlay
  var url = app.forum.attribute('apiUrl');

  // Handle the API response here

  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black background
  container.classList.add('admin_add_point_modal');
  // Create a form element
  var form = document.createElement('form');
  form.style.backgroundColor = 'white'; // Form background color
  form.style.padding = '20px'; // Add padding to the form
  form.style.width = '40%'; // Add padding to the form
  form.classList.add('admin_add_point_modal_form');
  $(form).append("<div class='securityQuestion_text'>\n    <span>Enter Password </span>\n    </div>");
  // Create input elements for username, email, and password
  var new_password = document.createElement('input');
  new_password.setAttribute('type', 'password');
  new_password.setAttribute('placeholder', '*******');
  new_password.setAttribute('required', true);
  new_password.style.marginBottom = '15px';
  new_password.style.marginTop = '5px';
  new_password.classList.add('FormControl');

  // Add input elements to the form
  form.appendChild(new_password);

  // Create a "Sign Up" button
  var signUpButton = document.createElement('button');
  signUpButton.setAttribute('type', 'submit');
  signUpButton.innerText = 'Submit';
  signUpButton.style.marginBottom = '5px';
  signUpButton.className = ' Button Button--primary points_add_btn'; // Add a class for styling

  // Add form elements to the form
  var new_password_label = document.createElement('label');
  new_password_label.innerText = "Password";
  new_password_label.classList.add('Button-label-changePassword');

  // Create div elements to wrap each label and input pair
  var new_password_div = document.createElement('div');
  new_password_div.appendChild(new_password_label);
  new_password_div.appendChild(new_password);

  // Append the divs to the form
  form.appendChild(new_password_div);
  form.appendChild(signUpButton);

  // Add the form to the container
  container.appendChild(form);

  // Append the container to the body of the document
  document.body.appendChild(container);

  // Define a cleanup method for removing the styling and container
  function cleanup() {
    // Remove the container from the DOM
    container.remove();
  }

  // Define a submit method for the form
  function submitForm() {
    return _submitForm.apply(this, arguments);
  } // Add a submit event listener to the form
  function _submitForm() {
    _submitForm = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var new_pass, formData, csrfToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            new_pass = new_password.value;
            if (!new_pass.trim()) {
              _context.next = 10;
              break;
            }
            // Perform actions with the form data (e.g., validation, API request)
            formData = {
              password: new_pass
            };
            _context.next = 5;
            return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
          case 5:
            csrfToken = _context.sent;
            // Now you have the CSRF token in the "csrfToken" variable
            // Make an API request to a hypothetical endpoint
            fetch(url + "/check-password", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
              },
              body: JSON.stringify(formData)
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              if (data != null && data.message) {
                cleanup(); // Remove the form after submission
                (0,_CustomQuestionModal__WEBPACK_IMPORTED_MODULE_3__.CustomQuestionModal)();
              } else {
                swal("Incorrect Password", "", "error");
              }

              // Handle the API response here

              // You can perform actions like showing a success message or redirecting the user.
            })["catch"](function (error) {
              // Handle errors
              console.error('API Error:', error);
              // You can display an error message to the user.
            });
            // Prevent the default form submission behavior
            return _context.abrupt("return", false);
          case 10:
            swal("Enter Password", "", "error");
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _submitForm.apply(this, arguments);
  }
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    submitForm(); // Call the custom submitForm method
  });

  // Add a click event listener to the container to close the form (modal)
  container.addEventListener('click', function (event) {
    if (event.target === container) {
      cleanup(); // Close the form when clicking outside
    }
  });

  // Return the form element and submitForm method
  return {
    form: form,
    submitForm: submitForm
  };

  // You can perform actions like showing a success message or redirecting the user.
}

/***/ }),

/***/ "./src/forum/components/ForgotPasswordModal.js":
/*!*****************************************************!*\
  !*** ./src/forum/components/ForgotPasswordModal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordModal: () => (/* binding */ ForgotPasswordModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AnswerQuestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnswerQuestion */ "./src/forum/components/AnswerQuestion.js");
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");




function ForgotPasswordModal() {
  return _ForgotPasswordModal.apply(this, arguments);
}
function _ForgotPasswordModal() {
  _ForgotPasswordModal = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var url, container, modal, title, crossIcon, emailInput, resetButton, cleanup, csrfToken;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cleanup = function _cleanup() {
            container.remove();
          };
          url = app.forum.attribute('apiUrl');
          ;
          container = document.createElement('div');
          container.style.position = 'fixed';
          container.style.top = '0';
          container.style.left = '0';
          container.style.width = '100%';
          container.style.height = '100%';
          container.style.display = 'flex';
          container.style.justifyContent = 'center';
          container.style.alignItems = 'center';
          container.style.zIndex = '999999';
          container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
          modal = document.createElement('div');
          modal.style.backgroundColor = '#f0f0f0';
          modal.style.padding = '20px';
          modal.style.width = '30%';
          modal.style.display = 'flex';
          modal.style.flexDirection = 'column';
          modal.style.alignItems = 'center';
          title = document.createElement('h2');
          title.innerText = 'Forgot Password';
          title.style.backgroundColor = "var(--button-primary-bg)";
          title.style.padding = '10px 0px';
          title.style.color = 'white';
          title.style.position = 'relative';
          title.style.width = "70%", title.style.textAlign = "center";
          crossIcon = document.createElement('span');
          crossIcon.innerHTML = '&times;';
          crossIcon.style.position = 'absolute';
          crossIcon.style.right = '10px';
          crossIcon.style.top = '10px';
          crossIcon.style.cursor = 'pointer';
          crossIcon.addEventListener('click', cleanup);
          title.appendChild(crossIcon);
          modal.appendChild(title);
          emailInput = document.createElement('input');
          emailInput.setAttribute('type', 'email');
          emailInput.setAttribute('placeholder', 'Your Email');
          emailInput.style.width = '70%';
          emailInput.style.padding = '10px';
          emailInput.style.marginTop = '10px';
          modal.appendChild(emailInput);
          resetButton = document.createElement('button');
          resetButton.setAttribute('type', 'submit');
          resetButton.innerText = 'Reset Password';
          resetButton.style.marginTop = '10px';
          resetButton.className = 'Button Button--primary';
          modal.appendChild(resetButton);
          container.appendChild(modal);
          document.body.appendChild(container);
          _context2.next = 54;
          return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_3__.fetchCsrfToken)();
        case 54:
          csrfToken = _context2.sent;
          resetButton.addEventListener('click', /*#__PURE__*/function () {
            var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
              var existingErrorMessageDiv, username, url1, response, data, errorMessageDiv;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    event.preventDefault();
                    existingErrorMessageDiv = modal.querySelector('.error-message');
                    if (existingErrorMessageDiv) {
                      existingErrorMessageDiv.remove();
                    }
                    // Gather the email
                    username = emailInput.value;
                    _context.prev = 4;
                    // API endpoint URL
                    url1 = url + "/user/find"; // Send the data to the API endpoint
                    _context.next = 8;
                    return fetch(url1, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': csrfToken
                        // Include any additional headers if needed, e.g., authentication headers
                      },

                      body: JSON.stringify({
                        username: username
                      })
                    });
                  case 8:
                    response = _context.sent;
                    if (!response) {
                      _context.next = 14;
                      break;
                    }
                    _context.next = 12;
                    return response.json();
                  case 12:
                    data = _context.sent;
                    if (data.message) {
                      cleanup();
                      (0,_AnswerQuestion__WEBPACK_IMPORTED_MODULE_2__.AnswerQuestion)(data.data);
                    } else {
                      errorMessageDiv = document.createElement('div');
                      errorMessageDiv.className = 'error-message'; // Class name assign karein
                      errorMessageDiv.style.color = 'red';
                      errorMessageDiv.innerText = "User Not Found";
                      modal.appendChild(errorMessageDiv);
                      // Handle the error, e.g., show an error message to the user
                    }
                    // Perform any additional actions based on the response, e.g., show a success message
                  case 14:
                    _context.next = 19;
                    break;
                  case 16:
                    _context.prev = 16;
                    _context.t0 = _context["catch"](4);
                    console.error('Network Error:', _context.t0);
                    // Handle the network error, e.g., show an error message to the user
                  case 19:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[4, 16]]);
            }));
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
          container.addEventListener('click', function (event) {
            if (event.target === container) {
              cleanup();
            }
          });
          return _context2.abrupt("return", {
            modal: modal,
            cleanup: cleanup
          });
        case 58:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _ForgotPasswordModal.apply(this, arguments);
}

/***/ }),

/***/ "./src/forum/components/MyEditorModal.js":
/*!***********************************************!*\
  !*** ./src/forum/components/MyEditorModal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommentReplyModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");






var CommentReplyModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentReplyModal, _Modal);
  function CommentReplyModal(vnode) {
    var _this;
    _this = _Modal.call(this, vnode) || this;
    _this.isLoading = false;
    // Loading state
    _this.postId = null;
    _this.commentId = null;
    _this.data = [];
    _this.categoryList = [];
    _this.sub_categoryList = [];
    _this.url = app.forum.attribute('apiUrl');
    _this.handleSubmit = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
        var post_id, content, editorElement, editor, content3, words, flag, formData, csrfToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              post_id = _this.postId;
              content = $((_this.commentFor ? '.post-comment' : '.comment-reply') + " .trix-content")[0].innerHTML;
              editorElement = document.querySelector('trix-editor');
              editor = editorElement.editor;
              content3 = editor.getDocument().toString();
              words = content3.split(/\s+/).filter(Boolean).length;
              flag = true;
              if (_this.commentFor) {
                if (words < 100) {
                  flag = false;
                  sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Minimum 100 words are required", "", "warning");
                }
              } else {
                if (words > 100) {
                  flag = false;
                  sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Maximum 100 words", "", "warning");
                }
              }

              // return false
              //
              if (!flag) {
                _context.next = 20;
                break;
              }
              formData = _this.commentFor ? {
                post_id: _this.postId,
                content: content
              } : {
                post_id: post_id,
                content: content,
                wiki_comment_id: _this.commentId
              };
              if (!content.trim()) {
                _context.next = 19;
                break;
              }
              _this.isLoading = true; // Start loading
              m.redraw(); // Update the UI
              _context.next = 15;
              return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_5__.fetchCsrfToken)();
            case 15:
              csrfToken = _context.sent;
              fetch(app.forum.attribute('apiUrl') + "/" + (_this.commentFor ? 'post' : '/post/reply'), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'X-CSRF-Token': csrfToken
                },
                body: JSON.stringify(formData)
              }).then(function (response) {
                return response.json();
              }).then(function (response) {
                if (response.message) {
                  if (_this.commentFor) {
                    _this.updatePostComment(response.data);
                  } else {
                    _this.updateCommentReply(response.data);
                  }
                  _this.isLoading = false; // Stop loading
                  m.redraw(); // Update the UI
                  _this.hide();
                } else {
                  _this.isLoading = false; // Stop loading
                  m.redraw(); // Update the UI
                  sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(response.error, '', 'warning');
                }

                // this.updatePostComment()
              })["catch"](function (errors) {});
              _context.next = 20;
              break;
            case 19:
              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Content is required to fill', '', 'warning');
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    _this.postId = vnode.attrs.postId; // Access the postId parameter here
    _this.commentFor = vnode.attrs.commentFor;
    _this.commentId = vnode.attrs.commentId;
    _this.updatePostComment = vnode.attrs.updatePostComment;
    _this.updateCommentReply = vnode.attrs.updateCommentReply;
    return _this;
  }
  var _proto = CommentReplyModal.prototype;
  _proto.className = function className() {
    return 'CommentReplyModal Modal--small';
  };
  _proto.title = function title() {
    return "Add your " + (this.commentFor ? 'comment' : 'reply');
  };
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    // Step 1: API se data fetch karna
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      "class": ""
    }, ' ', m("label", {
      "class": ""
    }, m("span", null, "Description")), m("div", {
      "class": "wiki-editor " + (this.commentFor ? 'post-comment' : 'comment-reply')
    }, m("trix-editor", {
      "class": "trix-content"
    }))), m("div", {
      className: "Form-group"
    }, this.isLoading ? m("div", {
      "class": "parent_loader"
    }, m("div", {
      "class": "loader"
    }, "Loading..."), " ") // Add your loader element here
    : m("button", {
      type: "button",
      onclick: this.handleSubmit.bind(this),
      className: "Button Button--primary"
    }, "Add"))));
  };
  return CommentReplyModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/components/NewpasswordModal.js":
/*!**************************************************!*\
  !*** ./src/forum/components/NewpasswordModal.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewPasswordModalForm: () => (/* binding */ NewPasswordModalForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");



function NewPasswordModalForm(user_id) {
  // Create a container div for centering the form and overlay
  var url = app.forum.attribute('apiUrl');

  // Handle the API response here

  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black background
  container.classList.add('admin_add_point_modal');
  // Create a form element
  var form = document.createElement('form');
  form.style.backgroundColor = 'white'; // Form background color
  form.style.padding = '20px'; // Add padding to the form
  form.style.width = '40%'; // Add padding to the form
  form.classList.add('admin_add_point_modal_form');
  $(form).append("<div class='securityQuestion_text'>\n    <span>Change Password </span>\n    </div>");
  // Create input elements for username, email, and password
  var new_password = document.createElement('input');
  new_password.setAttribute('type', 'password');
  new_password.setAttribute('placeholder', 'Pass****');
  new_password.setAttribute('required', true);
  new_password.style.marginBottom = '15px';
  new_password.style.marginTop = '5px';
  new_password.classList.add('FormControl');
  var confirm_password = document.createElement('input');
  confirm_password.setAttribute('type', 'password');
  confirm_password.style.marginBottom = '15px';
  confirm_password.style.marginTop = '5px';
  confirm_password.setAttribute('placeholder', 'Pass****');
  confirm_password.setAttribute('required', true);
  confirm_password.classList.add('FormControl');

  // Add input elements to the form
  form.appendChild(new_password);
  form.appendChild(confirm_password);

  // Create a "Sign Up" button
  var signUpButton = document.createElement('button');
  signUpButton.setAttribute('type', 'submit');
  signUpButton.innerText = 'Submit';
  signUpButton.style.marginBottom = '5px';
  signUpButton.className = ' Button Button--primary points_add_btn'; // Add a class for styling

  // Add form elements to the form
  var new_password_label = document.createElement('label');
  new_password_label.innerText = "New Password";
  new_password_label.classList.add('Button-label-changePassword');
  var confirm_password_label = document.createElement('label');
  confirm_password_label.innerText = "Confirm Password";
  confirm_password_label.classList.add('Button-label-changePassword');

  // Create div elements to wrap each label and input pair
  var new_password_div = document.createElement('div');
  new_password_div.appendChild(new_password_label);
  new_password_div.appendChild(new_password);
  var confirm_password_div = document.createElement('div');
  confirm_password_div.appendChild(confirm_password_label);
  confirm_password_div.appendChild(confirm_password);

  // Append the divs to the form
  form.appendChild(new_password_div);
  form.appendChild(confirm_password_div);
  form.appendChild(signUpButton);

  // Add the form to the container
  container.appendChild(form);

  // Append the container to the body of the document
  document.body.appendChild(container);

  // Define a cleanup method for removing the styling and container
  function cleanup() {
    // Remove the container from the DOM
    container.remove();
  }

  // Define a submit method for the form
  function submitForm() {
    return _submitForm.apply(this, arguments);
  } // Add a submit event listener to the form
  function _submitForm() {
    _submitForm = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var new_pass, confirm_pass, formData, csrfToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            new_pass = new_password.value;
            confirm_pass = confirm_password.value;
            if (!(new_pass.trim() && confirm_pass.trim())) {
              _context.next = 11;
              break;
            }
            // Perform actions with the form data (e.g., validation, API request)
            formData = {
              user_id: user_id,
              password: new_pass,
              password_confirmation: confirm_pass
            };
            _context.next = 6;
            return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
          case 6:
            csrfToken = _context.sent;
            // Now you have the CSRF token in the "csrfToken" variable
            // Make an API request to a hypothetical endpoint
            fetch(url + "/update-password", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
              },
              body: JSON.stringify(formData)
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              if (data != null && data.message) {
                swal("Updated successfully", "", "success");
                cleanup(); // Remove the form after submission
              } else {
                var _data$errors;
                swal("" + (data == null || (_data$errors = data.errors) == null ? void 0 : _data$errors.password).join(","), "", "error");
              }

              // Handle the API response here

              // You can perform actions like showing a success message or redirecting the user.
            })["catch"](function (error) {
              // Handle errors
              console.error('API Error:', error);
              // You can display an error message to the user.
            });
            // Prevent the default form submission behavior
            return _context.abrupt("return", false);
          case 11:
            swal("Fill both fields", "", "error");
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _submitForm.apply(this, arguments);
  }
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    submitForm(); // Call the custom submitForm method
  });

  // Add a click event listener to the container to close the form (modal)
  container.addEventListener('click', function (event) {
    if (event.target === container) {
      cleanup(); // Close the form when clicking outside
    }
  });

  // Return the form element and submitForm method
  return {
    form: form,
    submitForm: submitForm
  };

  // You can perform actions like showing a success message or redirecting the user.
}

/***/ }),

/***/ "./src/forum/components/PointsNav.js":
/*!*******************************************!*\
  !*** ./src/forum/components/PointsNav.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsNavProfile: () => (/* binding */ PointsNavProfile)
/* harmony export */ });
/* harmony import */ var _AllPointsRule_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllPointsRule_user */ "./src/forum/components/AllPointsRule_user.js");
/* harmony import */ var _PointsUsersTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PointsUsersTable */ "./src/forum/components/PointsUsersTable.js");


function PointsNavProfile() {
  $(document).ready(function () {
    var main_sidtechno_plugin = $('body .App--user');
    var user_point_nav_btn = $('<li class="item-points profile-nav-points"><a class="hasIcon" href="/muzammil" active=""><i aria-hidden="true" class="icon far fa-star Button-icon"></i><span class="Button-label">Points <span class="Button-badge">0</span></span></a></li>');

    // Add the new users points side nav button
    if (main_sidtechno_plugin) {
      if ($('body .App--user .App-content #content .UserPage .container .dropdown-menu .item-points').length === 0) {
        $('body .App--user .App-content #content .UserPage .container .dropdown-menu .Dropdown-separator').before(user_point_nav_btn);
      }

      // <======== click on nav in[profiles] points nav btn  to see point   ==================>

      $('.profile-nav-points').click(_PointsUsersTable__WEBPACK_IMPORTED_MODULE_1__.PointsUsersTable);
    }
  });
}

/***/ }),

/***/ "./src/forum/components/PointsUsersTable.js":
/*!**************************************************!*\
  !*** ./src/forum/components/PointsUsersTable.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsUsersTable: () => (/* binding */ PointsUsersTable)
/* harmony export */ });
/* harmony import */ var _AllPointsRule_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllPointsRule_user */ "./src/forum/components/AllPointsRule_user.js");

function PointsUsersTable(e) {
  var url = app.forum.attribute('apiUrl');
  e.preventDefault();
  $('.UserPage-nav .Dropdown-menu li').removeClass('active');
  $(this).addClass('active');
  // Change the URL without page reload
  // history.pushState(null, null, '/newflarum/public/u/muzammil/points');

  //<============= get all points ===========>

  fetch(url + "/user/point/detail", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (res) {
    var itemsPerPage = 10; // Number of items to display per page
    var currentPage = 1; // Current page

    // Function to display data for the current page
    function displayDataForPage() {
      var _res$Total;
      var startIndex = (currentPage - 1) * itemsPerPage;
      var endIndex = startIndex + itemsPerPage;
      var dataToDisplay = res.data.slice(startIndex, endIndex);
      var tableHTML = "\n         <div class='users_points_main'>\n          <button class='Button users_points_rules_main_btn'><b>Points Rules</b></button>\n          <div class='users-total-points'><span>Total Points : " + (res == null || (_res$Total = res.Total) == null ? void 0 : _res$Total.current_point) + "</span></div>\n          <table class='users_points_table sid_permission_table'>\n              <thead>\n                <tr>\n                  <th>Points Reasons</th>\n                  <th>Points</th>\n\n\n                </tr>\n              </thead>\n              <tbody>\n                " + dataToDisplay.map(function (item) {
        var _item$condition$repla, _item$condition, _item$points;
        return "\n                  <tr>\n                    <td>" + ((_item$condition$repla = (_item$condition = item.condition) == null ? void 0 : _item$condition.replaceAll("_", " ")) != null ? _item$condition$repla : "") + "</td>\n                    <td>" + ((_item$points = item.points) != null ? _item$points : "") + "</td>\n\n\n                  </tr>\n                ";
      }).join('') + "\n              </tbody>\n            </table>\n          </div>\n\n          ";
      $('.UserPage-content').html(tableHTML);
      updatePaginationControls();
    }

    // displayDataForPage()
    // Function to update pagination controls
    function updatePaginationControls() {
      var paginationControls = document.createElement('div');
      paginationControls.classList.add('pagination_btn_div');
      var totalPages = Math.ceil(res.data.length / itemsPerPage);
      function setPage(pageNumber) {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
          currentPage = pageNumber;
          displayDataForPage();
        }
      }
      paginationControls.innerHTML = "\n            <button class=\"Button\" id=\"prevPage\">Previous</button>\n            <button class=\"Button\" id=\"nextPage\">Next</button>\n          ";
      $('.users_points_main').append(paginationControls);
      var prevPageButton = document.getElementById('prevPage');
      var nextPageButton = document.getElementById('nextPage');
      prevPageButton.addEventListener('click', function () {
        return setPage(currentPage - 1);
      });
      nextPageButton.addEventListener('click', function () {
        return setPage(currentPage + 1);
      });

      // <------------   click on points rule btn ---------------->

      $(".users_points_rules_main_btn").click(function () {
        (0,_AllPointsRule_user__WEBPACK_IMPORTED_MODULE_0__.AllPointsRule)();
      });

      // Disable Previous and Next buttons when appropriate
      if (currentPage === 1) {
        prevPageButton.disabled = true;
      } else {
        prevPageButton.disabled = false;
      }
      if (currentPage === totalPages) {
        nextPageButton.disabled = true;
      } else {
        nextPageButton.disabled = false;
      }
    }
    displayDataForPage();
  })["catch"](function (error) {
    // Handle errors
    console.error('API Error:', error);
    // You can display an error message to the user.
  });
}

/***/ }),

/***/ "./src/forum/components/ResetPasswordModal.js":
/*!****************************************************!*\
  !*** ./src/forum/components/ResetPasswordModal.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetPasswordmodal1)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");



function ResetPasswordmodal1() {
  return _ResetPasswordmodal.apply(this, arguments);
}
function _ResetPasswordmodal() {
  _ResetPasswordmodal = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var url, container, modal1, title, crossIcon, passwordInput, confirmPasswordInput, resetButton, cleanup, csrfToken;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cleanup = function _cleanup() {
            container.remove();
          };
          url = app.forum.attribute('apiUrl');
          ;
          container = document.createElement('div');
          container.style.position = 'fixed';
          container.style.top = '0';
          container.style.left = '0';
          container.style.width = '100%';
          container.style.height = '100%';
          container.style.display = 'flex';
          container.style.justifyContent = 'center';
          container.style.alignItems = 'center';
          container.style.zIndex = '999999';
          container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
          modal1 = document.createElement('div');
          modal1.style.backgroundColor = '#f0f0f0';
          modal1.style.padding = '20px';
          modal1.style.width = '30%';
          modal1.style.display = 'flex';
          modal1.style.flexDirection = 'column';
          modal1.style.alignItems = 'center';
          title = document.createElement('h2');
          title.innerText = 'Reset Password';
          title.style.backgroundColor = "var(--button-primary-bg)";
          title.style.padding = '10px 0px';
          title.style.color = 'white';
          title.style.position = 'relative';
          title.style.width = "70%";
          title.style.textAlign = "center";
          crossIcon = document.createElement('span');
          crossIcon.innerHTML = '&times;';
          crossIcon.style.position = 'absolute';
          crossIcon.style.right = '10px';
          crossIcon.style.top = '10px';
          crossIcon.style.cursor = 'pointer';
          crossIcon.addEventListener('click', cleanup);
          title.appendChild(crossIcon);
          modal1.appendChild(title);
          passwordInput = document.createElement('input');
          passwordInput.setAttribute('type', 'password');
          passwordInput.setAttribute('placeholder', 'New Password');
          passwordInput.style.width = '70%';
          passwordInput.style.padding = '10px';
          passwordInput.style.marginTop = '10px';
          modal1.appendChild(passwordInput);
          confirmPasswordInput = document.createElement('input');
          confirmPasswordInput.setAttribute('type', 'password');
          confirmPasswordInput.setAttribute('placeholder', 'Confirm New Password');
          confirmPasswordInput.style.width = '70%';
          confirmPasswordInput.style.padding = '10px';
          confirmPasswordInput.style.marginTop = '10px';
          modal1.appendChild(confirmPasswordInput);
          resetButton = document.createElement('button');
          resetButton.setAttribute('type', 'submit');
          resetButton.innerText = 'Reset Password';
          resetButton.style.marginTop = '10px';
          resetButton.className = 'Button Button--primary';
          modal1.appendChild(resetButton);
          container.appendChild(modal1);
          document.body.appendChild(container);
          _context2.next = 62;
          return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
        case 62:
          csrfToken = _context2.sent;
          resetButton.addEventListener('click', /*#__PURE__*/function () {
            var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
              var existingErrorMessageDiv, password, confirmPassword, errorMessageDiv, userId, response, data, _errorMessageDiv, _errorMessageDiv2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    event.preventDefault();

                    // Remove existing error message if any
                    existingErrorMessageDiv = modal1.querySelector('.error-message');
                    if (existingErrorMessageDiv) {
                      existingErrorMessageDiv.remove();
                    }

                    // Gather the password and confirm password
                    password = passwordInput.value;
                    confirmPassword = confirmPasswordInput.value; // Validate the passwords
                    if (!(password !== confirmPassword)) {
                      _context.next = 12;
                      break;
                    }
                    // Show an error message if passwords do not match
                    errorMessageDiv = document.createElement('div');
                    errorMessageDiv.className = 'error-message';
                    errorMessageDiv.style.color = 'red';
                    errorMessageDiv.innerText = "Passwords do not match!";
                    modal1.appendChild(errorMessageDiv);
                    return _context.abrupt("return");
                  case 12:
                    // Assuming you have the user_id available in a variable userId
                    userId = localStorage.getItem("userId"); // Replace with the actual way you are getting the user_id
                    // Send the new password to the server
                    _context.prev = 13;
                    _context.next = 16;
                    return fetch(url + "/update-password", {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': csrfToken
                      },
                      body: JSON.stringify({
                        user_id: userId,
                        password: password,
                        password_confirmation: confirmPassword
                      })
                    });
                  case 16:
                    response = _context.sent;
                    _context.next = 19;
                    return response.json();
                  case 19:
                    data = _context.sent;
                    // Handle the response, e.g., show a success message or handle errors
                    if (data.message == true) {
                      // alert('Password has be   en reset successfully!');
                      cleanup();
                    } else {
                      // Show error message
                      _errorMessageDiv = document.createElement('div');
                      _errorMessageDiv.className = 'error-message';
                      _errorMessageDiv.style.color = 'blue';
                      // alert('Password has been reset successfully!');
                      _errorMessageDiv.innerText = "Error resetting password!";
                      modal1.appendChild(_errorMessageDiv);
                    }
                    _context.next = 31;
                    break;
                  case 23:
                    _context.prev = 23;
                    _context.t0 = _context["catch"](13);
                    console.error('Network Error:', _context.t0);
                    _errorMessageDiv2 = document.createElement('div');
                    _errorMessageDiv2.className = 'error-message';
                    _errorMessageDiv2.style.color = 'red';
                    _errorMessageDiv2.innerText = "Network Error!";
                    modal1.appendChild(_errorMessageDiv2);
                  case 31:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[13, 23]]);
            }));
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
          return _context2.abrupt("return", {
            modal1: modal1,
            cleanup: cleanup
          });
        case 65:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _ResetPasswordmodal.apply(this, arguments);
}

/***/ }),

/***/ "./src/forum/components/discussion.js":
/*!********************************************!*\
  !*** ./src/forum/components/discussion.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ discussion)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MyEditorModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyEditorModal */ "./src/forum/components/MyEditorModal.js");
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");
/* harmony import */ var _EditPostModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditPostModal */ "./src/forum/components/EditPostModal.js");
/* harmony import */ var trix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! trix */ "./node_modules/trix/dist/trix.esm.min.js");
/* harmony import */ var _DropdownEdit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DropdownEdit */ "./src/forum/components/DropdownEdit.js");
/* harmony import */ var _postreplyedit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./postreplyedit */ "./src/forum/components/postreplyedit.js");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_12__);















var discussion = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(discussion, _Page);
  function discussion() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Page.call.apply(_Page, [this].concat(args)) || this;
    _this.data = [];
    _this.categoryList = [];
    _this.sub_categoryList = [];
    _this.url = app.forum.attribute('apiUrl');
    _this.selectedCategoryIndex = 0;
    //  <----------- post view title functions --------------->
    _this.onPostDelete = /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
              title: 'Are you sure, you want to delete?',
              icon: 'warning',
              dangerMode: true,
              buttons: ['Cancel', 'OK']
            }).then( /*#__PURE__*/function () {
              var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(willDelete) {
                var _csrfToken;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      if (!willDelete) {
                        _context.next = 5;
                        break;
                      }
                      _context.next = 3;
                      return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_7__.fetchCsrfToken)();
                    case 3:
                      _csrfToken = _context.sent;
                      fetch(app.forum.attribute('apiUrl') + "/post/delete/" + _this.postData.id, {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json',
                          'X-CSRF-Token': _csrfToken
                        }
                      }).then(function (response) {
                        return response.json();
                      }).then(function (response) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()('deleted successfully');
                        var baseUrl = app.forum.attribute('baseUrl');
                        window.location.href = baseUrl;
                      });
                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    _this.onCommentLike = function (id, index, user_reaction) {
      var comment = _this.commentList[index];
      if (!comment) return; // Exit if comment doesn't exist

      // Handling "like" action
      if (user_reaction === "like") {
        switch (comment.user_reaction) {
          case "like":
            comment.likes_relation_count -= 1;
            comment.user_reaction = null;
            comment.like = false;
            break;
          case "dislike":
            comment.likes_relation_count += 1;
            comment.dislikes_relation_count -= 1;
            comment.user_reaction = "like";
            comment.like = true;
            break;
          default:
            comment.likes_relation_count += 1;
            comment.user_reaction = "like";
            comment.like = true;
        }
      }
      // Handling "dislike" action
      else if (user_reaction === "dislike") {
        switch (comment.user_reaction) {
          case "dislike":
            comment.dislikes_relation_count -= 1;
            comment.user_reaction = null;
            comment.like = false;
            break;
          case "like":
            comment.likes_relation_count -= 1;
            comment.dislikes_relation_count += 1;
            comment.user_reaction = "dislike";
            comment.like = true;
            break;
          default:
            comment.dislikes_relation_count += 1;
            comment.user_reaction = "dislike";
            comment.like = true;
        }
      }
      fetch(app.forum.attribute('apiUrl') + "/post/like/" + id + "?type=" + user_reaction, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (response) {});
    };
    _this.handleCommentDelete = function (id, index) {
      // console.log(this.commentList.splice(index,1))
      sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
        title: 'Are you sure, you want to delete?',
        icon: 'warning',
        dangerMode: true,
        buttons: ['Cancel', 'OK']
      }).then( /*#__PURE__*/function () {
        var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(willDelete) {
          var copyarr, _csrfToken2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!willDelete) {
                  _context3.next = 9;
                  break;
                }
                copyarr = _this.commentList;
                copyarr.splice(index, 1);
                _this.categoryList = copyarr;
                m.redraw();
                _context3.next = 7;
                return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_7__.fetchCsrfToken)();
              case 7:
                _csrfToken2 = _context3.sent;
                fetch(app.forum.attribute('apiUrl') + "/post/" + id, {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': _csrfToken2
                  }
                }).then(function (response) {
                  return response.json();
                }).then(function (response) {
                  sweetalert__WEBPACK_IMPORTED_MODULE_5___default()('deleted successfully');
                  // window.location.reload()
                });
              case 9:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    };
    // <--------- Post Comment and reply edit  and delete functions ---------------->
    // <----------------------- handle sort -------------------->
    _this.handleSortComment = function (type) {
      fetch(app.forum.attribute('apiUrl') + "/post/" + _this.slug + "?sort=" + type, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        var _response$data, _response$data2;
        console.log(response);
        console.log("firssssst", data);
        _this.postData = response == null || (_response$data = response.data) == null ? void 0 : _response$data.post;
        _this.commentList = response == null || (_response$data2 = response.data) == null ? void 0 : _response$data2.comment;
        m.redraw();
      });
    };
    return _this;
  }
  var _proto = discussion.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this2 = this;
    _Page.prototype.oninit.call(this, vnode);
    // <========== post title view ===================>
    this.postData = null;
    this.commentList = [];
    this.isPostLike = false;
    // <========== post title view ===================>

    // Step 1: API se data fetch karna
    fetch(app.forum.attribute('apiUrl') + "/post/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify(formData)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      _this2.data = data.data;
      var isdata = data.data.filter(function (val) {
        return val.post.length > 0;
      });
      if (isdata.length > 0) {
        var first_slug = isdata[0].post[0].slug;
        _this2.selectedCategoryIndex = first_slug;
        _this2.handlePostShow(first_slug);
      }
      // this.categoryList = data.data.category;
      m.redraw();
    });
  };
  _proto.onPostEdit = function onPostEdit() {
    app.modal.show(_EditPostModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postId: this.postData
    });
  };
  _proto.onPostLike = function onPostLike() {
    this.postData.like = !this.postData.like;
    this.postData.likes_count = this.postData.like ? Number(this.postData.likes_count) + 1 : Number(this.postData.likes_count) - 1;
    fetch(app.forum.attribute('apiUrl') + "/post/like/" + this.postData.post_id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (response) {});
  };
  _proto.onPostComment = function onPostComment() {
    var _this3 = this;
    console.log("testtt");
    var updatePostComment = function updatePostComment(newComment) {
      console.log(_this3.commentList);
      console.log(newComment);
      _this3.commentList = [].concat(_this3.commentList, [newComment[0]]);
    };
    app.modal.show(_MyEditorModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      postId: this.postData.id,
      commentFor: true,
      updatePostComment: updatePostComment
    });
  };
  _proto.onCommentReply = function onCommentReply(commentId, index) {
    var _this4 = this;
    var updateCommentReply = function updateCommentReply(newReply) {
      _this4.commentList[index].replies = [].concat(_this4.commentList[index].replies, [newReply]);
    };
    app.modal.show(_MyEditorModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      postId: this.postData.id,
      commentFor: false,
      commentId: commentId,
      updateCommentReply: updateCommentReply,
      commentIndex: index
    });
  }
  //  <----------- post view title functions --------------->

  // <--------- Post Comment and reply edit  and delete functions ---------------->
  ;
  _proto.handleCommentEdit = function handleCommentEdit(data, index) {
    var _this5 = this;
    var updatePostComment = function updatePostComment(newComment) {
      console.log(newComment);
      var copyCommentArray = _this5.commentList;
      copyCommentArray.splice.apply(copyCommentArray, [index, 1].concat(newComment));
      _this5.commentList = copyCommentArray;

      // this.commentList = [...this.commentList, newComment];
    };

    app.modal.show(_postreplyedit__WEBPACK_IMPORTED_MODULE_11__["default"], {
      postId: data,
      commentFor: true,
      updatePostComment: updatePostComment
    });
  };
  _proto.handleReplyEdit = function handleReplyEdit(data, index, repIndex) {
    var _this6 = this;
    var updateCommentReply = function updateCommentReply(newComment) {
      var _this6$commentList$in;
      (_this6$commentList$in = _this6.commentList[index].replies).splice.apply(_this6$commentList$in, [repIndex, 1].concat(newComment));
    };
    app.modal.show(_postreplyedit__WEBPACK_IMPORTED_MODULE_11__["default"], {
      postId: data,
      commentFor: false,
      updateCommentReply: updateCommentReply
    });
  };
  _proto.handleReplyDelete = function handleReplyDelete(id, index, repIndex) {
    var _this7 = this;
    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
      title: 'Are you sure, you want to delete?',
      icon: 'warning',
      dangerMode: true,
      buttons: ['Cancel', 'OK']
    }).then( /*#__PURE__*/function () {
      var _ref4 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(willDelete) {
        var _csrfToken3;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!willDelete) {
                _context4.next = 8;
                break;
              }
              console.log(_this7.commentList[index].replies);
              _this7.commentList[index].replies.splice(repIndex, 1);
              m.redraw();
              _context4.next = 6;
              return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_7__.fetchCsrfToken)();
            case 6:
              _csrfToken3 = _context4.sent;
              fetch(app.forum.attribute('apiUrl') + "/post/reply/" + id, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  'X-CSRF-Token': _csrfToken3
                }
              }).then(function (response) {
                return response.json();
              }).then(function (response) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()('deleted successfully');
              });
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  };
  _proto.handleReplyLike = function handleReplyLike(id, index, repIndex, user_reaction) {
    var comment = this.commentList[index].replies[repIndex];
    if (!comment) return; // Exit if comment doesn't exist

    // Handling "like" action
    if (user_reaction === "like") {
      switch (comment.user_reaction) {
        case "like":
          comment.likes_relation_count -= 1;
          comment.user_reaction = null;
          comment.like = false;
          break;
        case "dislike":
          comment.likes_relation_count += 1;
          comment.dislikes_relation_count -= 1;
          comment.user_reaction = "like";
          comment.like = true;
          break;
        default:
          comment.likes_relation_count += 1;
          comment.user_reaction = "like";
          comment.like = true;
      }
    }
    // Handling "dislike" action
    else if (user_reaction === "dislike") {
      switch (comment.user_reaction) {
        case "dislike":
          comment.dislikes_relation_count -= 1;
          comment.user_reaction = null;
          comment.like = false;
          break;
        case "like":
          comment.likes_relation_count -= 1;
          comment.dislikes_relation_count += 1;
          comment.user_reaction = "dislike";
          comment.like = true;
          break;
        default:
          comment.dislikes_relation_count += 1;
          comment.user_reaction = "dislike";
          comment.like = true;
      }
    }
    fetch(app.forum.attribute('apiUrl') + "/post/reply/like/" + id + "?type=" + user_reaction, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (response) {});
  };
  // <----------------------- handle sort -------------------->
  _proto.view = function view() {
    var _this$postData,
      _this$postData2,
      _this8 = this,
      _this$postData$likes_,
      _this$postData3;
    return m("div", {
      "class": "container wiki"
    }, m("div", {
      "class": "wiki-container "
    }, m("div", {
      "class": "wiki-right"
    }, m("div", {
      "class": "wiki-post-container"
    }, m("div", {
      "class": "wiki-postList-body"
    }, this.postData ? m('.WikiPostPage', [m('div.user-wiki-post', [m('.user_name_main', [(_this$postData = this.postData) != null && (_this$postData = _this$postData.user) != null && _this$postData.avatar_url ? m('img.Avatar', {
      loading: "lazy",
      src: "" + ((_this$postData2 = this.postData) == null || (_this$postData2 = _this$postData2.user) == null ? void 0 : _this$postData2.avatar_url),
      alt: ""
    }) : m('span.Avatar.wiki-avatar', {
      loading: 'lazy',
      style: '--avatar-bg: #e5cca0;'
    }, "" + this.postData.user.username.slice(0, 1)), m('span.username', "" + this.postData.user.username), app.session.user && m('span.actions', [this.postData.canEdit && m('i.icon.fas.fa-pencil-alt.Button-icon', {
      'aria-hidden': 'true',
      title: 'Edit',
      onclick: function onclick() {
        return _this8.onPostEdit(_this8.postData);
      }
    }), this.postData.canDelete && m('i.icon.fas.fa-trash-alt.Button-icon', {
      'aria-hidden': 'true',
      title: 'Delete',
      onclick: function onclick() {
        return _this8.onPostDelete(_this8.postData);
      }
    })])])]), m('.wiki-post-body', [m('.wiki-mainPost-container', [m('div.wiki-specific-postList-header--text', m('h3', this.postData.title)), m('.wiki-mainPost--text', m.trust(this.postData.content)), app.session.user && m('.wiki-mainPost--tools', [this.postData.canLike && m('.wiki-mainPost--tools---like', {
      title: 'Like',
      onclick: function onclick() {
        return _this8.onPostLike();
      }
    }, [m('i.icon.far.fa-thumbs-up.Button-icon', {
      'aria-hidden': 'true',
      "class": this.postData.like ? 'like-true' : 'like-false'
    }), m('span', (_this$postData$likes_ = (_this$postData3 = this.postData) == null ? void 0 : _this$postData3.likes_count) != null ? _this$postData$likes_ : '')]), this.postData.canReply && m('.wiki-mainPost--tools---comment', {
      title: 'Comment',
      onclick: function onclick() {
        return _this8.onPostComment();
      }
    }, [m('i.icon.far.fa-comment.Button-icon', {
      'aria-hidden': 'true'
    }), m('span', "" + this.commentList.length)])])]), m('.comment-text-box', [m('p.grey-text', 'Comments'), this.commentList.length > 1 && m(_DropdownEdit__WEBPACK_IMPORTED_MODULE_10__["default"], {
      slug: this.postData.slug,
      handleSortComment: this.handleSortComment
    })]), m('.wiki-post-commentList', this.commentList && this.commentList.length ? this.commentList.map(function (v, index) {
      var _v$user, _v$user2, _v$user$username, _v$user3, _v$likes_relation_cou, _v$dislikes_relation_;
      return m('.wiki-post-comment-box', [m('.user_name_wiki_comment', [v != null && (_v$user = v.user) != null && _v$user.avatar_url ? m('img.Avatar', {
        loading: "lazy",
        src: "" + (v == null || (_v$user2 = v.user) == null ? void 0 : _v$user2.avatar_url),
        alt: ""
      }) : m('span.Avatar.wiki-avatar', {
        loading: "lazy",
        style: "--avatar-bg: #e5cca0;"
      }, "" + (v == null || (_v$user$username = v.user.username) == null ? void 0 : _v$user$username.slice(0, 1))), m('span.username', "" + (v == null || (_v$user3 = v.user) == null ? void 0 : _v$user3.username)), app.session.user && (v["delete"] || v.edit) ? m(".wiki-comment-dropdown", [m(".wiki-comment-dropdown-toggle[data-toggle='dropdown']", m("i.fas.fa-ellipsis-v[aria-hidden='true']")), m(".wiki-comment-dropdown-menu", [v.edit && m(".wiki-comment-dropdown-item", {
        onclick: function onclick() {
          return _this8.handleCommentEdit(v, index);
        }
      }, "Edit"), v["delete"] && m(".wiki-comment-dropdown-item", {
        onclick: function onclick() {
          return _this8.handleCommentDelete(v.id, index);
        }
      }, "Delete")])]) : ""]), m('.wiki-mainPost--text', m.trust(v.content)), app.session.user && m('.wiki-mainPost--tools', [_this8.postData.canLike && m('.wiki-mainPost--tools---like', {
        title: 'Like',
        onclick: function onclick() {
          return _this8.onCommentLike(v.id, index, "like");
        }
      }, [m('i.icon.far.fa-thumbs-up.Button-icon', {
        'aria-hidden': 'true',
        "class": v.like && (v == null ? void 0 : v.user_reaction) === "like" ? 'like-true' : 'like-false'
      }), m('span', "" + ((_v$likes_relation_cou = v.likes_relation_count) != null ? _v$likes_relation_cou : '0'))]), _this8.postData.canLike && m('.wiki-mainPost--tools---like', {
        title: 'Dislike',
        onclick: function onclick() {
          return _this8.onCommentLike(v.id, index, "dislike");
        }
      }, [m('i.icon.far.fa-thumbs-down.Button-icon', {
        'aria-hidden': 'true',
        "class": v.like && (v == null ? void 0 : v.user_reaction) === "dislike" ? 'like-true' : 'like-false'
      }), m('span', "" + ((_v$dislikes_relation_ = v.dislikes_relation_count) != null ? _v$dislikes_relation_ : '0'))]), _this8.postData.canReply && m('.wiki-mainPost--tools---comment', {
        title: 'Reply',
        onclick: function onclick() {
          return _this8.onCommentReply(v.id, index);
        }
      }, [m('i.icon.far.fa-comment.Button-icon', {
        'aria-hidden': 'true'
      }), m('span', "" + v.replies.length)])]), v.replies.length > 0 && m('.wiki-comment-replyList', [m('p.grey-text', 'Reply'), v.replies.length > 0 && v.replies.map(function (repObj, repIndex) {
        var _repObj$user, _repObj$user2, _repObj$user3;
        return m('.wiki-comment-reply-box', [m('.user_name_main', [repObj != null && (_repObj$user = repObj.user) != null && _repObj$user.avatar_url ? m('img.Avatar', {
          loading: "lazy",
          src: "" + (repObj == null || (_repObj$user2 = repObj.user) == null ? void 0 : _repObj$user2.avatar_url),
          alt: ""
        }) : m('span.Avatar', {
          loading: "lazy",
          style: "--avatar-bg: #e5cca0;"
        }, "" + (repObj == null ? void 0 : repObj.user.username.slice(0, 1))), m('span.username', repObj == null || (_repObj$user3 = repObj.user) == null ? void 0 : _repObj$user3.username)]), m('.wiki-comment-reply-box-text', m.trust(repObj.content)), app.session.user && m('div.wiki-reply-toolbar', [_this8.postData.canLike && m('.like-dislike-reply-box', [m('i.icon.far.fa-thumbs-up.Button-icon.like-dislike-reply', {
          'aria-hidden': 'true',
          "class": repObj.like && (repObj == null ? void 0 : repObj.user_reaction) === "like" ? 'like-true' : 'like-false',
          onclick: function onclick() {
            return _this8.handleReplyLike(repObj.id, index, repIndex, "like");
          }
        }), m("span.like-dislike-reply-count", repObj.likes_relation_count)]), _this8.postData.canLike && m('.like-dislike-reply-box', [m('i.icon.far.fa-thumbs-down.Button-icon.like-dislike-reply', {
          'aria-hidden': 'true',
          "class": repObj.like && (repObj == null ? void 0 : repObj.user_reaction) === "dislike" ? 'like-true' : 'like-false',
          onclick: function onclick() {
            return _this8.handleReplyLike(repObj.id, index, repIndex, "dislike");
          }
        }), m("span.like-dislike-reply-count", repObj.dislikes_relation_count)]), repObj.can_delete || repObj.can_edit ? m('div.wiki-comment-dropdown', [m('span.wiki-comment-dropdown-toggle', {
          'data-toggle': 'dropdown'
        }, [m('i.icon.fas.fa-ellipsis-v.Button-icon', {
          'aria-hidden': 'true'
        })]), m('div.wiki-comment-dropdown-menu', [repObj.can_edit && m('span.wiki-comment-dropdown-item', {
          onclick: function onclick() {
            return _this8.handleReplyEdit(repObj, index, repIndex);
          }
        }, 'Edit'), repObj.can_delete && m('span.wiki-comment-dropdown-item', {
          onclick: function onclick() {
            return _this8.handleReplyDelete(repObj.id, index, repIndex);
          }
        }, 'Delete')])]) : ""])]);
      })])]);
    }) : '')])]) : m('[', null, m("div", {
      "class": "parent_loader"
    }, m("div", {
      "class": "loader"
    }, "Loading..."), " ")))))));
  };
  _proto.oninit = function oninit(vnode) {
    var _this9 = this;
    _Page.prototype.oninit.call(this, vnode);
    this.slug = m.route.param('slug');
    this.postData = null;
    this.discussion_id = null;
    var urls = app.forum.attribute('apiUrl');
    m.request({
      method: 'GET',
      url: urls + "/post/" + this.slug // adjust this to your actual API endpoint
    }).then(function (data) {
      var _data$data, _data$data2, _data$data3;
      _this9.postData = data == null || (_data$data = data.data) == null ? void 0 : _data$data.post;
      _this9.commentList = data == null || (_data$data2 = data.data) == null ? void 0 : _data$data2.comment;
      _this9.discussion_id = data == null || (_data$data3 = data.data) == null || (_data$data3 = _data$data3.post) == null ? void 0 : _data$data3.id;
      m.redraw(); // Ensure Mithril re-renders the view with the fetched data.
    });
  };
  _proto.showAddWikiModal = function showAddWikiModal() {
    app.modal.show(_MyEditorModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      postId: postId
    });
  };
  return discussion;
}((flarum_components_Page__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/components/postreplyedit.js":
/*!***********************************************!*\
  !*** ./src/forum/components/postreplyedit.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ postreplyedit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");






var postreplyedit = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(postreplyedit, _Modal);
  function postreplyedit(vnode) {
    var _this;
    _this = _Modal.call(this, vnode) || this;
    _this.postId = null;
    _this.commentId = null;
    _this.data = [];
    _this.categoryList = [];
    _this.sub_categoryList = [];
    _this.url = app.forum.attribute('apiUrl');
    _this.handleSubmit = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
        var post_id, content, editorElement, editor, content3, words, flag, formData, csrfToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              post_id = _this.postId;
              content = $((_this.commentFor ? '.post-comment' : '.comment-reply') + " .trix-content")[0].innerHTML;
              editorElement = document.querySelector('trix-editor');
              editor = editorElement.editor;
              content3 = editor.getDocument().toString();
              words = content3.split(/\s+/).filter(Boolean).length;
              flag = true;
              if (_this.commentFor) {
                if (words < 100) {
                  flag = false;
                  sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Minimum 100 words are required", "", "warning");
                }
              } else {
                if (words > 100) {
                  flag = false;
                  sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Maximum 100 words", "", "warning");
                }
              }

              // return false
              //
              if (!flag) {
                _context.next = 18;
                break;
              }
              formData = _this.commentFor ? {
                content: content
              } : {
                content: content,
                wiki_comment_id: _this.commentId
              };
              if (!content.trim()) {
                _context.next = 17;
                break;
              }
              _context.next = 13;
              return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_5__.fetchCsrfToken)();
            case 13:
              csrfToken = _context.sent;
              fetch(app.forum.attribute('apiUrl') + "/" + (_this.commentFor ? "post/" + _this.postId.id : "/post/reply/" + _this.postId.id), {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  'X-CSRF-Token': csrfToken
                },
                body: JSON.stringify(formData)
              }).then(function (response) {
                return response.json();
              }).then(function (response) {
                if (response.message) {
                  if (_this.commentFor) {
                    _this.updatePostComment(response.data);
                  } else {
                    _this.updateCommentReply(response.data);
                  }
                  _this.hide();
                } else {
                  sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(response.error, '', 'warning');
                }

                // this.updatePostComment()
              })["catch"](function (errors) {});
              _context.next = 18;
              break;
            case 17:
              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Content is required to fill', '', 'warning');
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    _this.postId = vnode.attrs.postId; // Access the postId parameter here
    _this.commentFor = vnode.attrs.commentFor;
    _this.commentId = vnode.attrs.commentId;
    _this.updatePostComment = vnode.attrs.updatePostComment;
    _this.updateCommentReply = vnode.attrs.updateCommentReply;
    return _this;
  }
  var _proto = postreplyedit.prototype;
  _proto.className = function className() {
    return 'CommentReplyModal Modal--small';
  };
  _proto.title = function title() {
    return "Edit your " + (this.commentFor ? 'comment' : 'reply');
  };
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    // Step 1: API se data fetch karna
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      "class": ""
    }, ' ', m("label", {
      "class": ""
    }, m("span", null, "Description")), m("div", {
      "class": "wiki-editor " + (this.commentFor ? 'post-comment' : 'comment-reply')
    }, m("input", {
      id: "trix-default-value",
      type: "hidden",
      value: this.postId.content
    }), m("trix-editor", {
      input: "trix-default-value",
      "class": "trix-content"
    }))), m("div", {
      className: "Form-group"
    }, m("button", {
      type: "button",
      onclick: this.handleSubmit.bind(this),
      className: "Button Button--primary"
    }, "Add"))));
  };
  return postreplyedit;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/components/wiki.js":
/*!**************************************!*\
  !*** ./src/forum/components/wiki.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wiki)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CommentReplyModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentReplyModal */ "./src/forum/components/CommentReplyModal.js");
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");
/* harmony import */ var _EditWikiModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditWikiModal */ "./src/forum/components/EditWikiModal.js");
/* harmony import */ var _AddWikiModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddWikiModal */ "./src/forum/components/AddWikiModal.js");
/* harmony import */ var trix__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! trix */ "./node_modules/trix/dist/trix.esm.min.js");
/* harmony import */ var _DropdownEdit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DropdownEdit */ "./src/forum/components/DropdownEdit.js");
/* harmony import */ var _CommentReplyEditModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CommentReplyEditModal */ "./src/forum/components/CommentReplyEditModal.js");














var wiki = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(wiki, _Page);
  function wiki() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Page.call.apply(_Page, [this].concat(args)) || this;
    _this.data = [];
    _this.categoryList = [];
    _this.sub_categoryList = [];
    _this.url = app.forum.attribute('apiUrl');
    _this.selectedCategoryIndex = 0;
    _this.isLoading = false;
    //  <----------- post view title functions --------------->
    _this.onPostDelete = /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
              title: 'Are you sure, you want to delete?',
              icon: 'warning',
              dangerMode: true,
              buttons: ['Cancel', 'OK']
            }).then( /*#__PURE__*/function () {
              var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(willDelete) {
                var csrfToken;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      if (!willDelete) {
                        _context.next = 5;
                        break;
                      }
                      _context.next = 3;
                      return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_7__.fetchCsrfToken)();
                    case 3:
                      csrfToken = _context.sent;
                      fetch(app.forum.attribute('apiUrl') + "/wiki/post/" + _this.postData.id, {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json',
                          'X-CSRF-Token': csrfToken
                        }
                      }).then(function (response) {
                        return response.json();
                      }).then(function (response) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()('deleted successfully');
                        window.location.reload();
                      });
                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    _this.onCommentLike = function (id, index, user_reaction) {
      var comment = _this.commentList[index];
      if (!comment) return; // Exit if comment doesn't exist

      // Handling "like" action
      if (user_reaction === "like") {
        switch (comment.user_reaction) {
          case "like":
            comment.likes_relation_count -= 1;
            comment.user_reaction = null;
            comment.like = false;
            break;
          case "dislike":
            comment.likes_relation_count += 1;
            comment.dislikes_relation_count -= 1;
            comment.user_reaction = "like";
            comment.like = true;
            break;
          default:
            comment.likes_relation_count += 1;
            comment.user_reaction = "like";
            comment.like = true;
        }
      }
      // Handling "dislike" action
      else if (user_reaction === "dislike") {
        switch (comment.user_reaction) {
          case "dislike":
            comment.dislikes_relation_count -= 1;
            comment.user_reaction = null;
            comment.like = false;
            break;
          case "like":
            comment.likes_relation_count -= 1;
            comment.dislikes_relation_count += 1;
            comment.user_reaction = "dislike";
            comment.like = true;
            break;
          default:
            comment.dislikes_relation_count += 1;
            comment.user_reaction = "dislike";
            comment.like = true;
        }
      }
      fetch(app.forum.attribute('apiUrl') + "/wiki/comment/like/" + id + "?type=" + user_reaction, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (response) {});
    };
    _this.handleCommentDelete = function (id, index) {
      // console.log(this.commentList.splice(index,1))
      sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
        title: 'Are you sure, you want to delete?',
        icon: 'warning',
        dangerMode: true,
        buttons: ['Cancel', 'OK']
      }).then( /*#__PURE__*/function () {
        var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(willDelete) {
          var copyarr, csrfToken;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!willDelete) {
                  _context3.next = 9;
                  break;
                }
                copyarr = _this.commentList;
                copyarr.splice(index, 1);
                _this.categoryList = copyarr;
                m.redraw();
                _context3.next = 7;
                return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_7__.fetchCsrfToken)();
              case 7:
                csrfToken = _context3.sent;
                fetch(app.forum.attribute('apiUrl') + "/wikicomment/" + id, {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken
                  }
                }).then(function (response) {
                  return response.json();
                }).then(function (response) {
                  sweetalert__WEBPACK_IMPORTED_MODULE_5___default()('deleted successfully');
                  // window.location.reload()
                });
              case 9:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    };
    // <--------- Post Comment and reply edit  and delete functions ---------------->
    // <----------------------- handle sort -------------------->
    _this.handleSortComment = function (type) {
      fetch(app.forum.attribute('apiUrl') + "/wiki/post/" + _this.postData.slug + "?sort=" + type, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        var _response$data, _response$data2;
        console.log(response);
        console.log("firssssst", data);
        _this.postData = response == null || (_response$data = response.data) == null ? void 0 : _response$data.post;
        _this.commentList = response == null || (_response$data2 = response.data) == null ? void 0 : _response$data2.comment;
        m.redraw();
      });
    };
    return _this;
  }
  var _proto = wiki.prototype;
  // Loading state
  _proto.oninit = function oninit(vnode) {
    var _this2 = this;
    _Page.prototype.oninit.call(this, vnode);
    this.isLoading = true; // Set loading to true when starting API call

    // <========== post title view ===================>
    this.postData = null;
    this.commentList = [];
    this.isPostLike = false;
    // <========== post title view ===================>

    fetch(this.url + "/wiki/post", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      _this2.data = data.data;
      var isdata = data.data.filter(function (val) {
        var _val$post;
        return ((_val$post = val.post) == null ? void 0 : _val$post.length) > 0;
      });
      if ((isdata == null ? void 0 : isdata.length) > 0) {
        var first_slug = isdata[0].post[0].slug;
        _this2.selectedCategoryIndex = first_slug;
        _this2.handlePostShow(first_slug);
      }
      _this2.isLoading = false; // Set loading to false once data is received

      // this.categoryList = data.data.category;
      m.redraw();
    });
  };
  _proto.onPostEdit = function onPostEdit() {
    app.modal.show(_EditWikiModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postId: this.postData
    });
  };
  _proto.onPostLike = function onPostLike() {
    this.postData.like = !this.postData.like;
    this.postData.totalLike = this.postData.like ? Number(this.postData.totalLike) + 1 : Number(this.postData.totalLike) - 1;
    fetch(app.forum.attribute('apiUrl') + "/wiki/post/like/" + this.postData.id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (response) {});
  };
  _proto.onPostComment = function onPostComment() {
    var _this3 = this;
    var updatePostComment = function updatePostComment(newComment) {
      if (!!newComment.length) {
        _this3.commentList = [].concat(_this3.commentList, [newComment[0]]);
      }
    };
    app.modal.show(_CommentReplyModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      postId: this.postData.id,
      commentFor: true,
      updatePostComment: updatePostComment
    });
  };
  _proto.onCommentReply = function onCommentReply(commentId, index) {
    var _this4 = this;
    var updateCommentReply = function updateCommentReply(newReply) {
      _this4.commentList[index].replies = [].concat(_this4.commentList[index].replies, [newReply]);
    };
    app.modal.show(_CommentReplyModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      postId: this.postData.id,
      commentFor: false,
      commentId: commentId,
      updateCommentReply: updateCommentReply,
      commentIndex: index
    });
  }
  //  <----------- post view title functions --------------->

  // <--------- Post Comment and reply edit  and delete functions ---------------->
  ;
  _proto.handleCommentEdit = function handleCommentEdit(data, index) {
    var _this5 = this;
    var updatePostComment = function updatePostComment(newComment) {
      var copyCommentArray = _this5.commentList;
      copyCommentArray.splice.apply(copyCommentArray, [index, 1].concat(newComment));
      _this5.commentList = copyCommentArray;

      // this.commentList = [...this.commentList, newComment];
    };

    app.modal.show(_CommentReplyEditModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
      postId: data,
      commentFor: true,
      updatePostComment: updatePostComment
    });
  };
  _proto.handleReplyEdit = function handleReplyEdit(data, index, repIndex) {
    var _this6 = this;
    var updateCommentReply = function updateCommentReply(newComment) {
      var _this6$commentList$in;
      (_this6$commentList$in = _this6.commentList[index].replies).splice.apply(_this6$commentList$in, [repIndex, 1].concat(newComment));
    };
    app.modal.show(_CommentReplyEditModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
      postId: data,
      commentFor: false,
      updateCommentReply: updateCommentReply
    });
  };
  _proto.handleReplyDelete = function handleReplyDelete(id, index, repIndex) {
    var _this7 = this;
    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
      title: 'Are you sure, you want to delete?',
      icon: 'warning',
      dangerMode: true,
      buttons: ['Cancel', 'OK']
    }).then( /*#__PURE__*/function () {
      var _ref4 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(willDelete) {
        var csrfToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!willDelete) {
                _context4.next = 8;
                break;
              }
              console.log(_this7.commentList[index].replies);
              _this7.commentList[index].replies.splice(repIndex, 1);
              m.redraw();
              _context4.next = 6;
              return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_7__.fetchCsrfToken)();
            case 6:
              csrfToken = _context4.sent;
              fetch(app.forum.attribute('apiUrl') + "/wikireplycomment/" + id, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  'X-CSRF-Token': csrfToken
                }
              }).then(function (response) {
                return response.json();
              }).then(function (response) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()('deleted successfully');
              });
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  };
  _proto.handleReplyLike = function handleReplyLike(id, index, repIndex, user_reaction) {
    var comment = this.commentList[index].replies[repIndex];
    if (!comment) return; // Exit if comment doesn't exist

    // Handling "like" action
    if (user_reaction === "like") {
      switch (comment.user_reaction) {
        case "like":
          comment.likes_relation_count -= 1;
          comment.user_reaction = null;
          comment.like = false;
          break;
        case "dislike":
          comment.likes_relation_count += 1;
          comment.dislikes_relation_count -= 1;
          comment.user_reaction = "like";
          comment.like = true;
          break;
        default:
          comment.likes_relation_count += 1;
          comment.user_reaction = "like";
          comment.like = true;
      }
    }
    // Handling "dislike" action
    else if (user_reaction === "dislike") {
      switch (comment.user_reaction) {
        case "dislike":
          comment.dislikes_relation_count -= 1;
          comment.user_reaction = null;
          comment.like = false;
          break;
        case "like":
          comment.likes_relation_count -= 1;
          comment.dislikes_relation_count += 1;
          comment.user_reaction = "dislike";
          comment.like = true;
          break;
        default:
          comment.dislikes_relation_count += 1;
          comment.user_reaction = "dislike";
          comment.like = true;
      }
    }
    fetch(app.forum.attribute('apiUrl') + "/wiki/replycomment/like/" + id + "?type=" + user_reaction, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (response) {});
  };
  // sorry but i can not my changs
  // i am cheked ctrl f5
  // <----------------------- handle sort -------------------->
  _proto.view = function view() {
    var _this8 = this,
      _this$postData,
      _this$postData2,
      _this$postData$user,
      _this$postData$user2,
      _this$postData$totalL,
      _this$postData3,
      _this$commentList,
      _this$commentList2,
      _this$commentList3;
    return m("div", {
      "class": "container wiki"
    }, this.isLoading && m("div", {
      "class": "parent_loader"
    }, " ", m("div", {
      "class": "loader"
    })), m("div", {
      "class": "wiki-container "
    }, m("div", {
      "class": "wiki-left"
    }, m("div", {
      "class": "wiki-toolbar"
    }, m("div", {
      "class": "wiki-add-btn"
    }, ' ', app.session.user ? m("button", {
      "class": "Button Button--primary",
      onclick: this.showAddWikiModal.bind(this)
    }, "Add Wiki") : m('[', null)), m("div", {
      "class": "wiki-sideBar"
    }, this.data.map(function (val, index) {
      return m("div", {
        "class": "wiki-sideBar-listItem  " + (_this8.selectedCategoryIndex === index ? "active" : "")
      }, m("div", {
        "class": "category-list"
      }, m("span", {
        "class": "category-list-text"
      }, val == null ? void 0 : val.name)), m("div", {
        "class": "cat-post-title "
      }, val.post.map(function (cat_title) {
        return m("div", {
          "class": "" + (_this8.selectedCategoryIndex === cat_title.slug ? "active_post_title" : ""),
          onclick: function onclick() {
            return _this8.handlePostShow(cat_title.slug);
          }
        }, cat_title.title);
      })));
    })))), m("div", {
      "class": "wiki-right"
    }, m("div", {
      "class": "wiki-post-container"
    }, m("div", {
      "class": "wiki-postList-body"
    }, this.postData ? m('.WikiPostPage', [m('div.user-wiki-post', [m('.user_name_main', [(_this$postData = this.postData) != null && (_this$postData = _this$postData.user) != null && _this$postData.avatar_url ? m('img.Avatar', {
      loading: "lazy",
      src: "" + ((_this$postData2 = this.postData) == null || (_this$postData2 = _this$postData2.user) == null ? void 0 : _this$postData2.avatar_url),
      alt: ""
    }) : m('span.Avatar.wiki-avatar', {
      loading: 'lazy',
      style: '--avatar-bg: #e5cca0;'
    }, "" + ((_this$postData$user = this.postData.user) == null ? void 0 : _this$postData$user.username.slice(0, 1))), m('span.username', "" + ((_this$postData$user2 = this.postData.user) == null ? void 0 : _this$postData$user2.username)), app.session.user && m('span.actions', [m('div.wiki-postList-header--icon', [m('i.icon.fas.fa-pencil-alt.Button-icon', {
      'aria-hidden': 'true',
      title: 'Edit',
      onclick: function onclick() {
        return _this8.onPostEdit();
      }
    }), m('i.icon.fas.fa-trash-alt.Button-icon', {
      'aria-hidden': 'true',
      title: 'Delete',
      onclick: function onclick() {
        return _this8.onPostDelete();
      }
    })])])])]), m('.wiki-post-body', [m('.wiki-mainPost-container', [m('div.wiki-specific-postList-header--text', m('h3', this.postData.title)), m('.wiki-mainPost--text', m.trust(this.postData.content)), app.session.user && m('.wiki-mainPost--tools', [m('.wiki-mainPost--tools---like', {
      title: 'Like',
      onclick: function onclick() {
        return _this8.onPostLike();
      }
    }, [m('i.icon.far.fa-thumbs-up.Button-icon', {
      'aria-hidden': 'true',
      "class": this.postData.like ? 'like-true' : 'like-false'
    }), m('span', (_this$postData$totalL = (_this$postData3 = this.postData) == null ? void 0 : _this$postData3.totalLike) != null ? _this$postData$totalL : '')]), m('.wiki-mainPost--tools---comment', {
      title: 'Comment',
      onclick: function onclick() {
        return _this8.onPostComment();
      }
    }, [m('i.icon.far.fa-comment.Button-icon', {
      'aria-hidden': 'true'
    }), m('span', "" + ((_this$commentList = this.commentList) == null ? void 0 : _this$commentList.length))])])]), m('.comment-text-box', [m('p.grey-text', 'Comments'), ((_this$commentList2 = this.commentList) == null ? void 0 : _this$commentList2.length) > 1 && m(_DropdownEdit__WEBPACK_IMPORTED_MODULE_11__["default"], {
      slug: this.postData.slug,
      handleSortComment: this.handleSortComment
    })]), m('.wiki-post-commentList', this.commentList && (_this$commentList3 = this.commentList) != null && _this$commentList3.length ? this.commentList.map(function (v, index) {
      var _v$user, _v$user2, _v$user3, _v$user4, _v$likes_relation_cou, _v$dislikes_relation_, _v$replies, _v$replies2, _v$replies3;
      return m('.wiki-post-comment-box', [m('.user_name_wiki_comment', [v != null && (_v$user = v.user) != null && _v$user.avatar_url ? m('img.Avatar', {
        loading: "lazy",
        src: "" + (v == null || (_v$user2 = v.user) == null ? void 0 : _v$user2.avatar_url),
        alt: ""
      }) : m('span.Avatar.wiki-avatar', {
        loading: "lazy",
        style: "--avatar-bg: #e5cca0;"
      }, "" + (v == null || (_v$user3 = v.user) == null ? void 0 : _v$user3.username.slice(0, 1))), m('span.username', "" + (v == null || (_v$user4 = v.user) == null ? void 0 : _v$user4.username)), app.session.user && (v["delete"] || v.edit) ? m(".wiki-comment-dropdown", [m(".wiki-comment-dropdown-toggle[data-toggle='dropdown']", m("i.fas.fa-ellipsis-v[aria-hidden='true']")), m(".wiki-comment-dropdown-menu", [v.edit && m(".wiki-comment-dropdown-item", {
        onclick: function onclick() {
          return _this8.handleCommentEdit(v, index);
        }
      }, "Edit"), v["delete"] && m(".wiki-comment-dropdown-item", {
        onclick: function onclick() {
          return _this8.handleCommentDelete(v.id, index);
        }
      }, "Delete")])]) : ""]), m('.wiki-mainPost--text', m.trust(v.content)), app.session.user && m('.wiki-mainPost--tools', [m('.wiki-mainPost--tools---like', {
        title: 'Like',
        onclick: function onclick() {
          return _this8.onCommentLike(v.id, index, "like");
        }
      }, [m('i.icon.far.fa-thumbs-up.Button-icon', {
        'aria-hidden': 'true',
        "class": v.like && (v == null ? void 0 : v.user_reaction) === "like" ? 'like-true' : 'like-false'
      }), m('span', "" + ((_v$likes_relation_cou = v.likes_relation_count) != null ? _v$likes_relation_cou : '0'))]), m('.wiki-mainPost--tools---like', {
        title: 'Dislike',
        onclick: function onclick() {
          return _this8.onCommentLike(v.id, index, "dislike");
        }
      }, [m('i.icon.far.fa-thumbs-down.Button-icon', {
        'aria-hidden': 'true',
        "class": v.like && (v == null ? void 0 : v.user_reaction) === "dislike" ? 'like-true' : 'like-false'
      }), m('span', "" + ((_v$dislikes_relation_ = v.dislikes_relation_count) != null ? _v$dislikes_relation_ : '0'))]), m('.wiki-mainPost--tools---comment', {
        title: 'Reply',
        onclick: function onclick() {
          return _this8.onCommentReply(v.id, index);
        }
      }, [m('i.icon.far.fa-comment.Button-icon', {
        'aria-hidden': 'true'
      }), m('span', "" + ((_v$replies = v.replies) == null ? void 0 : _v$replies.length))])]), ((_v$replies2 = v.replies) == null ? void 0 : _v$replies2.length) > 0 && m('.wiki-comment-replyList', [m('p.grey-text', 'Reply'), ((_v$replies3 = v.replies) == null ? void 0 : _v$replies3.length) > 0 && v.replies.map(function (repObj, repIndex) {
        var _repObj$user, _repObj$user2, _repObj$user3;
        return m('.wiki-comment-reply-box', [m('.user_name_main', [repObj != null && (_repObj$user = repObj.user) != null && _repObj$user.avatar_url ? m('img.Avatar', {
          loading: "lazy",
          src: "" + (repObj == null || (_repObj$user2 = repObj.user) == null ? void 0 : _repObj$user2.avatar_url),
          alt: ""
        }) : m('span.Avatar', {
          loading: "lazy",
          style: "--avatar-bg: #e5cca0;"
        }, "" + (repObj == null ? void 0 : repObj.user.username.slice(0, 1))), m('span.username', repObj == null || (_repObj$user3 = repObj.user) == null ? void 0 : _repObj$user3.username)]), m('.wiki-comment-reply-box-text', m.trust(repObj.content)), app.session.user && m('div.wiki-reply-toolbar', [m('.like-dislike-reply-box', [m('i.icon.far.fa-thumbs-up.Button-icon.like-dislike-reply', {
          'aria-hidden': 'true',
          "class": repObj.like && (repObj == null ? void 0 : repObj.user_reaction) === "like" ? 'like-true' : 'like-false',
          onclick: function onclick() {
            return _this8.handleReplyLike(repObj.id, index, repIndex, "like");
          }
        }), m("span.like-dislike-reply-count", repObj.likes_relation_count)]), m('.like-dislike-reply-box', [m('i.icon.far.fa-thumbs-down.Button-icon.like-dislike-reply', {
          'aria-hidden': 'true',
          "class": repObj.like && (repObj == null ? void 0 : repObj.user_reaction) === "dislike" ? 'like-true' : 'like-false',
          onclick: function onclick() {
            return _this8.handleReplyLike(repObj.id, index, repIndex, "dislike");
          }
        }), m("span.like-dislike-reply-count", repObj.dislikes_relation_count)]), repObj.can_delete || repObj.can_edit ? m('div.wiki-comment-dropdown', [m('span.wiki-comment-dropdown-toggle', {
          'data-toggle': 'dropdown'
        }, [m('i.icon.fas.fa-ellipsis-v.Button-icon', {
          'aria-hidden': 'true'
        })]), m('div.wiki-comment-dropdown-menu', [repObj.can_edit && m('span.wiki-comment-dropdown-item', {
          onclick: function onclick() {
            return _this8.handleReplyEdit(repObj, index, repIndex);
          }
        }, 'Edit'), repObj.can_delete && m('span.wiki-comment-dropdown-item', {
          onclick: function onclick() {
            return _this8.handleReplyDelete(repObj.id, index, repIndex);
          }
        }, 'Delete')])]) : ""])]);
      })])]);
    }) : '')])]) : m('[', null, m("center", null, "Click on the title in left sidebar to preview")))))));
  };
  _proto.handlePostShow = function handlePostShow(slug) {
    var _this9 = this;
    this.selectedCategoryIndex = slug;
    m.request({
      method: 'GET',
      url: app.forum.attribute('apiUrl') + "/wiki/post/" + slug // adjust this to your actual API endpoint
    }).then(function (data) {
      var _data$data, _data$data2;
      _this9.postData = data == null || (_data$data = data.data) == null ? void 0 : _data$data.post;
      _this9.commentList = data == null || (_data$data2 = data.data) == null ? void 0 : _data$data2.comment;
      m.redraw(); // Ensure Mithril re-renders the view with the fetched data.
    });
  };
  _proto.showAddWikiModal = function showAddWikiModal() {
    app.modal.show(_AddWikiModal__WEBPACK_IMPORTED_MODULE_9__["default"]);
  };
  return wiki;
}((flarum_components_Page__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/components/wikipost.js":
/*!******************************************!*\
  !*** ./src/forum/components/wikipost.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wikipost)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AddWikiModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddWikiModal */ "./src/forum/components/AddWikiModal.js");
/* harmony import */ var _CommentReplyModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentReplyModal */ "./src/forum/components/CommentReplyModal.js");
/* harmony import */ var _CsrfToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CsrfToken */ "./src/forum/components/CsrfToken.js");
/* harmony import */ var _EditWikiModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditWikiModal */ "./src/forum/components/EditWikiModal.js");









var wikipost = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(wikipost, _Page);
  function wikipost() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Page.call.apply(_Page, [this].concat(args)) || this;
    _this.onPostDelete = /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
              title: 'Are you sure, you want to delete?',
              icon: 'warning',
              dangerMode: true,
              buttons: ['Cancel', 'OK']
            }).then( /*#__PURE__*/function () {
              var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(willDelete) {
                var csrfToken;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      if (!willDelete) {
                        _context.next = 5;
                        break;
                      }
                      _context.next = 3;
                      return (0,_CsrfToken__WEBPACK_IMPORTED_MODULE_7__.fetchCsrfToken)();
                    case 3:
                      csrfToken = _context.sent;
                      fetch(app.forum.attribute('apiUrl') + "/wiki/post/" + _this.postData.id, {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json',
                          'X-CSRF-Token': csrfToken
                        }
                      }).then(function (response) {
                        return response.json();
                      }).then(function (response) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('deleted successfully');
                        window.history.back();
                      });
                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    _this.onCommentLike = function (id, index) {
      _this.commentList[index].like = !_this.commentList[index].like;
      _this.commentList[index].likes_relation_count = _this.commentList[index].like ? Number(_this.commentList[index].likes_relation_count) + 1 : Number(_this.commentList[index].likes_relation_count) - 1;
      fetch(app.forum.attribute('apiUrl') + "/wiki/comment/like/" + id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (response) {});
    };
    return _this;
  }
  var _proto = wikipost.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this2 = this;
    _Page.prototype.oninit.call(this, vnode);
    this.slug = m.route.param('slug');
    this.postData = null;
    this.commentList = [];
    this.isPostLike = false;
    var urls = app.forum.attribute('apiUrl');
    // Fetch the post data using AJAX or another method
    m.request({
      method: 'GET',
      url: urls + "/wiki/post/" + this.slug // adjust this to your actual API endpoint
    }).then(function (data) {
      var _data$data, _data$data2;
      _this2.postData = data == null || (_data$data = data.data) == null ? void 0 : _data$data.post;
      _this2.commentList = data == null || (_data$data2 = data.data) == null ? void 0 : _data$data2.comment;
      m.redraw(); // Ensure Mithril re-renders the view with the fetched data.
    });
  };
  _proto.onPostEdit = function onPostEdit() {
    app.modal.show(_EditWikiModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postId: this.postData
    });
  };
  _proto.onPostLike = function onPostLike() {
    this.postData.like = !this.postData.like;
    this.postData.totalLike = this.postData.like ? Number(this.postData.totalLike) + 1 : Number(this.postData.totalLike) - 1;
    fetch(app.forum.attribute('apiUrl') + "/wiki/post/like/" + this.postData.id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (response) {});
  };
  _proto.onPostComment = function onPostComment() {
    var _this3 = this;
    var updatePostComment = function updatePostComment(newComment) {
      _this3.commentList = [].concat(_this3.commentList, [newComment]);
    };
    app.modal.show(_CommentReplyModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      postId: this.postData.id,
      commentFor: true,
      updatePostComment: updatePostComment
    });
  };
  _proto.onCommentReply = function onCommentReply(commentId, index) {
    var _this4 = this;
    var updateCommentReply = function updateCommentReply(newReply) {
      // let copyArr=[...this.commentList]

      // copyArr[index].replies=[...copyArr[index].replies,newReply]
      _this4.commentList[index].replies = [].concat(_this4.commentList[index].replies, [newReply]);
    };
    app.modal.show(_CommentReplyModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      postId: this.postData.id,
      commentFor: false,
      commentId: commentId,
      updateCommentReply: updateCommentReply,
      commentIndex: index
    });
  };
  _proto.view = function view() {
    var _this$postData,
      _this$postData2,
      _this5 = this,
      _this$postData$totalL,
      _this$postData3;
    if (!this.postData) return m('center', 'Loading...');
    return m('.WikiPostPage.container', [m('div.user-wiki-post', [m('.user_name_main', [(_this$postData = this.postData) != null && (_this$postData = _this$postData.user) != null && _this$postData.avatar_url ? m('img.Avatar', {
      loading: "lazy",
      src: "" + ((_this$postData2 = this.postData) == null || (_this$postData2 = _this$postData2.user) == null ? void 0 : _this$postData2.avatar_url),
      alt: ""
    }) : m('span.Avatar.wiki-avatar', {
      loading: 'lazy',
      style: '--avatar-bg: #e5cca0;'
    }, "" + this.postData.user.username.slice(0, 1)), m('span.username', "" + this.postData.user.username), app.session.user && m('span.actions', [m('div.wiki-postList-header--icon', [m('i.icon.fas.fa-pencil-alt.Button-icon', {
      'aria-hidden': 'true',
      title: 'Edit',
      onclick: function onclick() {
        return _this5.onPostEdit();
      }
    }), m('i.icon.fas.fa-trash-alt.Button-icon', {
      'aria-hidden': 'true',
      title: 'Edit',
      onclick: function onclick() {
        return _this5.onPostDelete();
      }
    })])])])]), m('.wiki-post-body', [m('.wiki-mainPost-container', [m('div.wiki-specific-postList-header--text', m('h3', this.postData.title)), m('.wiki-mainPost--text', m.trust(this.postData.content)), app.session.user && m('.wiki-mainPost--tools', [m('.wiki-mainPost--tools---like', {
      title: 'Like',
      onclick: function onclick() {
        return _this5.onPostLike();
      }
    }, [m('i.icon.far.fa-thumbs-up.Button-icon', {
      'aria-hidden': 'true',
      "class": this.postData.like ? 'like-true' : 'like-false'
    }), m('span', (_this$postData$totalL = (_this$postData3 = this.postData) == null ? void 0 : _this$postData3.totalLike) != null ? _this$postData$totalL : '')]), m('.wiki-mainPost--tools---comment', {
      title: 'Comment',
      onclick: function onclick() {
        return _this5.onPostComment();
      }
    }, [m('i.icon.far.fa-comment.Button-icon', {
      'aria-hidden': 'true'
    }), m('span', "" + this.commentList.length)])])]), m('p.grey-text', 'Comments'), m('.wiki-post-commentList', this.commentList && this.commentList.length ? this.commentList.map(function (v, index) {
      var _v$user, _v$user2, _v$likes_relation_cou;
      return m('.wiki-post-comment-box', [m('.user_name_wiki_comment', [v != null && (_v$user = v.user) != null && _v$user.avatar_url ? m('img.Avatar', {
        loading: "lazy",
        src: "" + (v == null || (_v$user2 = v.user) == null ? void 0 : _v$user2.avatar_url),
        alt: ""
      }) : m('span.Avatar.wiki-avatar', {
        loading: "lazy",
        style: "--avatar-bg: #e5cca0;"
      }, "" + (v == null ? void 0 : v.user.username.slice(0, 1))), m('span.username', "" + (v == null ? void 0 : v.user.username))]), m('.wiki-mainPost--text', m.trust(v.content)), app.session.user && m('.wiki-mainPost--tools', [m('.wiki-mainPost--tools---like', {
        title: 'Like',
        onclick: function onclick() {
          return _this5.onCommentLike(v.id, index);
        }
      }, [m('i.icon.far.fa-thumbs-up.Button-icon', {
        'aria-hidden': 'true',
        "class": v.like ? 'like-true' : 'like-false'
      }), m('span', "" + ((_v$likes_relation_cou = v.likes_relation_count) != null ? _v$likes_relation_cou : '0'))]), m('.wiki-mainPost--tools---comment', {
        title: 'Reply',
        onclick: function onclick() {
          return _this5.onCommentReply(v.id, index);
        }
      }, [m('i.icon.far.fa-comment.Button-icon', {
        'aria-hidden': 'true'
      }), m('span', "" + v.replies.length)])]), v.replies.length > 0 && m('.wiki-comment-replyList', [m('p.grey-text', 'Reply'), v.replies.length > 0 && v.replies.map(function (repObj, reo) {
        var _repObj$user, _repObj$user2, _repObj$user3;
        return m('.wiki-comment-reply-box', [m('.user_name_main', [repObj != null && (_repObj$user = repObj.user) != null && _repObj$user.avatar_url ? m('img.Avatar', {
          loading: "lazy",
          src: "" + (repObj == null || (_repObj$user2 = repObj.user) == null ? void 0 : _repObj$user2.avatar_url),
          alt: ""
        }) : m('span.Avatar', {
          loading: "lazy",
          style: "--avatar-bg: #e5cca0;"
        }, "" + (repObj == null ? void 0 : repObj.user.username.slice(0, 1))), m('span.username', repObj == null || (_repObj$user3 = repObj.user) == null ? void 0 : _repObj$user3.username)]), m('.wiki-comment-reply-box-text', m.trust(repObj.content))]);
      })])]);
    }) : '')])]);
  };
  return wikipost;
}((flarum_components_Page__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CustomModalForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CustomModalForm */ "./src/forum/components/CustomModalForm.js");
/* harmony import */ var _components_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ForgotPasswordModal */ "./src/forum/components/ForgotPasswordModal.js");
/* harmony import */ var _components_PointsNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PointsNav */ "./src/forum/components/PointsNav.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ChangePassword_sid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ChangePassword_sid */ "./src/forum/components/ChangePassword_sid.js");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/forum/components/SignUpModal */ "flarum/forum/components/SignUpModal");
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_AddCollection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/AddCollection */ "./src/forum/components/AddCollection.js");
/* harmony import */ var _components_Collect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Collect */ "./src/forum/components/Collect.js");
/* harmony import */ var _components_discussion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/discussion */ "./src/forum/components/discussion.js");
/* harmony import */ var _components_wiki__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/wiki */ "./src/forum/components/wiki.js");
/* harmony import */ var _components_wikipost__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/wikipost */ "./src/forum/components/wikipost.js");
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flarum/forum/components/HeaderPrimary */ "flarum/forum/components/HeaderPrimary");
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_DiscussionPageList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/DiscussionPageList */ "./src/forum/components/DiscussionPageList.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
















var isFormDisplayed = false;
var myForm;
var loveUpButton;
flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('sidtechno/customlogin', function () {
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().routes).wiki = {
    path: '/wiki',
    component: _components_wiki__WEBPACK_IMPORTED_MODULE_11__["default"]
  };
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().routes).wikiPost = {
    path: '/wiki/post/:slug',
    component: _components_wikipost__WEBPACK_IMPORTED_MODULE_12__["default"]
  };

  // app.routes.Post = {path: '/post/:slug', component: discussion};
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().routes).Post = {
    path: '/post/:slug',
    component: _components_discussion__WEBPACK_IMPORTED_MODULE_10__["default"]
  };
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().routes)['sidtechno-customlogin-post'] = {
    path: '/post/:slug/:id?',
    component: _components_discussion__WEBPACK_IMPORTED_MODULE_10__["default"]
  };
  (0,_components_Collect__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_components_DiscussionPageList__WEBPACK_IMPORTED_MODULE_15__["default"])();
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_6__.extend)((flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_13___default().prototype), 'items', function (items) {
    items.add('wiki', m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_14___default()), {
      "class": "wiki-btn",
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('wiki')
    }, "Wiki"));
  });

  // <================= Getting response of  api which is calling on other pages [START] ==========>

  var originalOpen = XMLHttpRequest.prototype.open;
  var originalSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function () {
    //<--------- Store the URL for later reference ------->
    this._url = arguments[1];
    originalOpen.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function () {
    var xhr = this;
    var originalOnLoad = xhr.onload;
    xhr.onload = function () {
      // <---------- Check if request is complete  ------>
      if (xhr.readyState === 4) {
        var _xhr$_url;
        // <-- ----- targeting only posts api ----------->

        if (xhr != null && xhr._url && (_xhr$_url = xhr._url) != null && _xhr$_url.includes('/posts/')) {
          var api_response = JSON.parse(xhr.responseText);
          if (api_response != null && api_response.errors) {
            var _api_response$errors$;
            var msg = api_response == null || (_api_response$errors$ = api_response.errors[0]) == null ? void 0 : _api_response$errors$.detail;
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
              text: msg,
              icon: 'error',
              dangerMode: true,
              buttons: ['Ok']
            });
          }
        }
      }
      if (originalOnLoad) {
        originalOnLoad.apply(this, arguments);
      }
    };
    originalSend.apply(this, arguments);
  };

  // <================= Getting response of  api which is calling on other pages [END] ==========>

  $(document).ready(function () {
    (0,_components_PointsNav__WEBPACK_IMPORTED_MODULE_3__.PointsNavProfile)();
    (0,_components_ChangePassword_sid__WEBPACK_IMPORTED_MODULE_5__.ChangPasswordSidBtn)();
    // Select the first div inside the body
    var firstDiv = $('body > div:first-child')[0];

    // Create a Mutation Observer to watch for DOM changes
    var observer = new MutationObserver(function (mutationsList, observer) {
      // Check if any mutations are relevant to your page changes

      for (var _iterator = _createForOfIteratorHelperLoose(mutationsList), _step; !(_step = _iterator()).done;) {
        var mutation = _step.value;
        if (mutation.type === 'childList' && $(mutation.target).find('.UserPage').length > 0) {
          (0,_components_PointsNav__WEBPACK_IMPORTED_MODULE_3__.PointsNavProfile)();
          (0,_components_ChangePassword_sid__WEBPACK_IMPORTED_MODULE_5__.ChangPasswordSidBtn)();
          break;
        }
      }
    });
    var observerConfig = {
      childList: true,
      subtree: true
    };
    observer.observe(firstDiv, observerConfig);
  });
  document.addEventListener('DOMContentLoaded', function () {});
  console.log("ASD>>454545<<");
  console.log('[sidtechno/customlogin] Hello, forum!');
});

// Select the anchor element inside the paragraph with the class name LogInModal-forgotPassword
// Select the element with the class name 'LogInModal-forgotPassword'
var forgotPasswordElements = document.getElementsByClassName('LogInModal-forgotPassword');

// Check if any elements were found
if (forgotPasswordElements.length > 0) {
  // Change the text content of the first selected element to 'Hello World'
  forgotPasswordElements[0].innerText = 'Hello World';
} else {}
function signup_security_question() {
  setTimeout(function () {
    var signUpButton = $('.Form-group button');
    $('.SignUpModal .Form-group input[name=email]').hide();
    var form = $('.SignUpModal .Form')[0];
    var questionSelect = document.createElement('select');
    questionSelect.style.width = '100%';
    questionSelect.style.marginBottom = '10px';
    questionSelect.style.color = 'rgb(102 124 153)';
    (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_6__.extend)((flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_7___default().prototype), 'submitData', function (data) {
      var newData = data;
      var questionsData = $('.SignUpModal .Form .signup-question')[0];
      newData['email'] = newData['username'] ? newData['username'] + "@sidtechno.com" : "";
      newData['question1'] = "";
      newData['answer1'] = "";
      newData['question2'] = "";
      newData['answer2'] = "";
      newData['question3'] = "";
      newData['answer3'] = "";
      if (questionsData.querySelectorAll(".secure-question").length > 0) {
        var _$$find$0$innerText, _$$find$val$trim, _$$find$0$innerText2, _$$find$val$trim2, _$$find$0$innerText3, _$$find$val$trim3;
        var values_arr = questionsData.querySelectorAll(".secure-question");
        newData['question1'] = $(values_arr[0]).find('p')[0] ? (_$$find$0$innerText = $(values_arr[0]).find('p')[0].innerText) != null ? _$$find$0$innerText : "" : "";
        newData['answer1'] = $(values_arr[0]).find('.secure-ans input').val() ? (_$$find$val$trim = $(values_arr[0]).find('.secure-ans input').val().trim()) != null ? _$$find$val$trim : "" : "";
        newData['question2'] = $(values_arr[1]).find('p')[0] ? (_$$find$0$innerText2 = $(values_arr[1]).find('p')[0].innerText) != null ? _$$find$0$innerText2 : "" : "";
        newData['answer2'] = $(values_arr[1]).find('.secure-ans input').val() ? (_$$find$val$trim2 = $(values_arr[1]).find('.secure-ans input').val().trim()) != null ? _$$find$val$trim2 : "" : "";
        newData['question3'] = $(values_arr[2]).find('p')[0] ? (_$$find$0$innerText3 = $(values_arr[2]).find('p')[0].innerText) != null ? _$$find$0$innerText3 : "" : "";
        newData['answer3'] = $(values_arr[2]).find('.secure-ans input').val() ? (_$$find$val$trim3 = $(values_arr[2]).find('.secure-ans input').val().trim()) != null ? _$$find$val$trim3 : "" : "";
      }

      // return newData;
    });

    questionSelect.classList.add('FormControl');
    var questions = ["Please Answer Any Three Question For Security Reasons", 'What is the name of your oldest or childhood friend?', 'What is your favorite sport or game?', 'What was the name of your first pet?', 'What is your biggest life goal or aspiration?', 'What is your favorite subject in middle school?', 'What is the name of your first secret crush in middle school?'];
    var selectedQuestions = [];
    function refreshDropdown() {
      questionSelect.innerHTML = '';
      if (selectedQuestions.length < 3) {
        questions.forEach(function (question, index) {
          if (!selectedQuestions.includes(index)) {
            var option = document.createElement('option');
            option.value = index;
            option.text = question;
            questionSelect.appendChild(option);
          }
        });
        questionSelect.style.display = ''; // Show the dropdown
      } else {
        questionSelect.style.display = 'none'; // Hide the dropdown
      }
    }

    refreshDropdown();
    $(form).find('.Form-group:has(button)').before(questionSelect);
    var answerSection = document.createElement('div');
    answerSection.style.width = '100%';
    answerSection.classList.add('signup-question');
    questionSelect.addEventListener('change', function () {
      var selectedQuestionIndex = parseInt(questionSelect.value);
      if (!isNaN(selectedQuestionIndex) && !selectedQuestions.includes(selectedQuestionIndex)) {
        selectedQuestions.push(selectedQuestionIndex);
        var questionDiv = document.createElement('div');
        questionDiv.style.width = '100%';
        questionDiv.classList.add("secure-question");
        var questionP = document.createElement('p');
        questionP.innerText = questions[selectedQuestionIndex];
        questionDiv.appendChild(questionP);
        var answerDiv = document.createElement('div');
        answerDiv.style.display = 'flex';
        answerDiv.style.alignItems = 'center';
        answerDiv.style.justifyContent = 'space-between';
        answerDiv.style.width = '100%';
        answerDiv.style.marginBottom = '10px';
        answerDiv.classList.add("secure-ans");
        var answerInput = document.createElement('input');
        answerInput.setAttribute('type', 'text');
        answerInput.setAttribute('placeholder', 'Your Answer');
        answerInput.style.padding = '10px';
        answerInput.style.flexGrow = '1';
        answerInput.classList.add('FormControl');
        answerDiv.appendChild(answerInput);
        var crossIcon = document.createElement('span');
        crossIcon.innerHTML = '&times;';
        crossIcon.style.cursor = 'pointer';
        crossIcon.style.marginLeft = '10px';
        crossIcon.addEventListener('click', function (event) {
          var index = selectedQuestions.indexOf(selectedQuestionIndex);
          if (index > -1) {
            selectedQuestions.splice(index, 1);
            answerSection.removeChild(questionDiv);
            refreshDropdown();
          }
          event.stopPropagation(); // Prevent the event from propagating up
        });

        answerDiv.appendChild(crossIcon);
        questionDiv.appendChild(answerDiv);
        answerSection.appendChild(questionDiv);
        refreshDropdown();

        // Move the dropdown to the end of the form
        form.removeChild(questionSelect);
        $(form).find('.Form-group:has(button)').before(questionSelect);
      }
    });
    $(form).find('.Form-group:has(button)').before(answerSection);
  }, 100);
}
$(document).on('click', '.item-signUp,.LogInModal-signUp a', signup_security_question);
$(document).on('click', '.item-logIn', function () {
  $('.Modal-backdrop').show();
  setTimeout(function () {
    $('.LogInModal-forgotPassword').hide();
    var modalFooter = document.querySelector('.Modal-footer');
    //  $('.LogInModal-signUp a').click(signup_security_question)
    // Naya div element banate hain
    var newDiv = document.createElement('div');

    // Us div ke andar text daalte hain
    newDiv.textContent = 'Forgot Password';

    // Naya div ko Modal-footer ke andar, sabse pehle append karte hain
    modalFooter.insertBefore(newDiv, modalFooter.firstChild);
    newDiv.addEventListener('click', function () {
      // Yeh function call hoga jab newDiv par click kiya jayega
      myForm = (0,_components_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordModal)();
      $('.ModalManager').hide();
      $('.Modal-backdrop').hide();
    });
  }, 100);
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Badge":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Badge']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Badge'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/LinkButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/LinkButton']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LinkButton'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/models/Discussion":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/models/Discussion']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/Discussion'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/DiscussionListItem":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionListItem']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/DiscussionListItem'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Dropdown'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/TextEditor":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditor']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/TextEditor'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/DiscussionPage":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionPage']" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionPage'];

/***/ }),

/***/ "flarum/forum/components/HeaderPrimary":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/HeaderPrimary']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/HeaderPrimary'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }),

/***/ "flarum/forum/components/Navigation":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Navigation']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/Navigation'];

/***/ }),

/***/ "flarum/forum/components/SignUpModal":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SignUpModal']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/SignUpModal'];

/***/ }),

/***/ "flarum/forum/utils/DiscussionControls":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/DiscussionControls']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/utils/DiscussionControls'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _construct)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeFunction)
/* harmony export */ });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _wrapNativeSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !(0,_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return (0,_construct_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Class, arguments, (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map