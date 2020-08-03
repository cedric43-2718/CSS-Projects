var MonoTypeWebFonts = {};
MonoTypeWebFonts.addEvent = function(e, n) {
  if ("undefined" != typeof MonoTypeWebFonts.loadFonts) MonoTypeWebFonts.addEvent(e, n);
  else {
    var o = this;
    setTimeout(function() {
      o.addEvent(e, n)
    }, 0)
  }
};
mti_loadScript(function() {
  if (window.addEventListener) {
    window.addEventListener('load', function() {
      MonoTypeWebFonts.cleanup();
    }, false);
  } else if (window.attachEvent) {
    window.attachEvent('onload', function() {
      MonoTypeWebFonts.cleanup();
    });
  }
  MonoTypeWebFonts.loadColo = function() {};
  MonoTypeWebFonts.cleanupExecuted = false;
  MonoTypeWebFonts.cleanup = function() {
    if (MonoTypeWebFonts.cleanupExecuted === true) {
      return;
    }
    MonoTypeWebFonts.cleanupExecuted = (window['mti_element_cache'].length > 0);
    var className = document.documentElement.className;
    var MTIConfig = window['MTIConfig'] || {
      'RemoveMTIClass': false
    };
    if (MTIConfig['RemoveMTIClass'] == true) {
      eval(function(p, a, c, k, e, d) {
        e = function(c) {
          return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if (!''.replace(/^/, String)) {
          while (c--) {
            d[e(c)] = k[c] || e(c)
          }
          k = [function(e) {
            return d[e]
          }];
          e = function() {
            return '\\w+'
          };
          c = 1
        };
        while (c--) {
          if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
          }
        }
        return p
      }('8 l(2,n){n(2);2=2.D;r(2){l(2,n);2=2.A}}8 e(4){9(j.e){o j.e(4)}x{5 k=[];l(j.I,8(2){5 a,c=2.4,i;9(c){a=c.z(\' \');p(i=0;i<a.f;i++){9(a[i]===4){k.F(2);J}}}});o k}}H(8(){5 3=e(\'m\');5 u=E.K;5 h=u.B(),C=8(t){o h.G(t)>-1},b=(!(/R|T/i.q(h))&&/S\\s(\\d)/.q(h)),c=L;9((v.$1==6)||(v.$1==7)){c=Q}r(3.f>0){p(5 i=0;i<3.f;i++){5 w=3[i].4.z(\' \');9(w.f==1&&!c){3[i].M(\'N\')}x{3[i].4=3[i].4.y(/m/O,\' \').y(/^\\s+|\\s+$/g,\'\')}}3=e(\'m\')}},P);', 56, 56, '||node|mti_elements|className|var|||function|if|||||getElementsByClassName|length||ua||document|results|walkTheDOM|mti_font_element|func|return|for|test|while||||RegExp|classList|else|replace|split|nextSibling|toLowerCase|is|firstChild|navigator|push|indexOf|setTimeout|body|break|userAgent|false|removeAttribute|class|ig|40000|true|opera|msie|webtv'.split('|'), 0, {}))
    }
    className = className;
    if (!document.getElementById('MonoTypeFontApiFontTracker')) {
      eval(function(p, a, c, k, e, d) {
        e = function(c) {
          return c.toString(36)
        };
        if (!''.replace(/^/, String)) {
          while (c--) {
            d[e(c)] = k[c] || e(c)
          }
          k = [function(e) {
            return d[e]
          }];
          e = function() {
            return '\\w+'
          };
          c = 1
        };
        while (c--) {
          if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
          }
        }
        return p
      }('5 3="6://j.i.z/t/1.7";a(k.l.h==\'8:\'){3=3.g(/6:/,\'8:\')}5 b=9.d(\'e\')[0];5 2=9.v(\'w\');a(2){2.4(\'y\',\'u\');2.4(\'s\',\'o/7\');2.4(\'q\',\'r\');2.4(\'f\',3+"?p=x&n=m");b.c(2)}', 36, 36, '||cssEle|fontTrackingUrl|setAttribute|var|http|css|https|document|if|head|appendChild|getElementsByTagName|HEAD|href|replace|protocol|fonts|fast|window|location|cab408fa-259b-4520-ba3f-eb8576ccec92|projectid|text|apiType|rel|stylesheet|type||MonoTypeFontApiFontTracker|createElement|LINK|js|id|net'.split('|'), 0, {}))
    }
    window['mti_element_cache'] = [];
  };
  MonoTypeWebFonts._fontActiveEventList = [];
  MonoTypeWebFonts._fontLoadingEventList = [];
  MonoTypeWebFonts._activeEventList = [];
  MonoTypeWebFonts._inActiveEventList = [];
  MonoTypeWebFonts.addEvent = function(eventName, callbackFunction) {
    if (eventName.toLowerCase() == 'fontactive') {
      MonoTypeWebFonts._fontActiveEventList.push(callbackFunction);
    } else if (eventName.toLowerCase() == 'fontloading') {
      MonoTypeWebFonts._fontLoadingEventList.push(callbackFunction);
    } else if (eventName.toLowerCase() == 'inactive') {
      MonoTypeWebFonts._inActiveEventList.push(callbackFunction);
    } else if (eventName.toLowerCase() == 'active') {
      MonoTypeWebFonts._activeEventList.push(callbackFunction);
    }
  };
  MonoTypeWebFonts.loadFonts = function() {
    MonoTypeWebFonts.load({
      monotype: {
        efg: true,
        reqSub: false,
        enableOtf: false,
        otfJsParentUrl: 'https://fast.fonts.net/jsapi/otjs/',
        pfL: [{
          'fontfamily': "Futura W01",
          'fontWeight': "700",
          'fontStyle': "normal",
          contentIds: {
            EOT: '87f56fc1-ab05-4355-90af-9e83740663af',
            WOFF: '184895ac-545b-450b-9d3a-c0a0a7620977',
            WOFF2: '3cf9e1e8-63a2-497f-86ed-6b63d6de1986',
            TTF: 'bf8628d2-1ae0-4645-ba3f-3ce62d8d907c',
            SVG: '20073de8-56dd-4e4c-9434-5097c3f2fd28'
          },
          enableSubsetting: false,
          enableOtf: false
        }, {
          'fontfamily': "Futura W01",
          'fontWeight': "300",
          'fontStyle': "normal",
          contentIds: {
            EOT: 'cf053eae-ba1f-44f3-940c-a34b68ccbbdf',
            WOFF: 'e2b9cbeb-fa8e-41cd-8a6a-46044b29ba52',
            WOFF2: '8bf38806-3423-4080-b38f-d08542f7e4ac',
            TTF: 'c2a69697-4f06-4764-abd4-625031a84e31',
            SVG: 'dc423cc1-bf86-415c-bc7d-ad7dde416a34'
          },
          enableSubsetting: false,
          enableOtf: false
        }, {
          'fontfamily': "Futura W01",
          'fontWeight': "300",
          'fontStyle': "oblique",
          contentIds: {
            EOT: '834e05b5-87ff-453f-9d74-a93eb930e1ec',
            WOFF: '03937062-17d3-443d-809c-d51e0397aaa3',
            WOFF2: '159c40d5-d5b5-4d06-b7ba-7762c03ce985',
            TTF: '19124b27-09ee-4d4c-b213-ec1c114d2945',
            SVG: 'd47d028d-8ba8-46fb-b997-ec2e42ecdcc8'
          },
          enableSubsetting: false,
          enableOtf: false
        }, {
          'fontfamily': "Futura W01",
          'fontWeight': "200",
          'fontStyle': "normal",
          contentIds: {
            EOT: 'b1b295d2-89ce-43c4-bf6c-abbc7d26437e',
            WOFF: '8eb4bbf6-6c6e-46a0-a9cc-dab8c61069c6',
            WOFF2: '73956fa0-5cd8-4815-bacd-229aaac08ea2',
            TTF: '87433a1d-86ba-46a1-b229-679d9ddbe1d8',
            SVG: '22dbb88c-5e89-4b8b-9ea7-b60cc70d7ab3'
          },
          enableSubsetting: false,
          enableOtf: false
        }, {
          'fontfamily': "Futura W01",
          'fontWeight': "500",
          'fontStyle': "normal",
          contentIds: {
            EOT: 'fbbd35b9-df6a-4550-8731-edef7cb1f764',
            WOFF: '5af82934-5078-4495-9aa1-bcaec40ea1e8',
            WOFF2: '8f8e3475-0d53-4055-8dbc-997d3e7a73de',
            TTF: '886112d6-26ae-4248-9ec0-a357acf06bd7',
            SVG: '4ee1d85f-0454-4bbb-acbf-cf896937c708'
          },
          enableSubsetting: false,
          enableOtf: false
        }],
        selectorFontMap: {},
        ck: 'd44f19a684109620e4841470a390e8187ec4694d596e7fd2009c7371e56ff604b16b4c75adfcada40e16ef7bbddb8022b4e834fab1520ae812fd1bf3285e84afff7cc234033032bcbeda727c1cf5bc347b487e3ffa6ab1a8c00acef96dcb',
        fcURL: 'http://fast.fonts.net/dv2/',
        env: '',
        projectId: 'cab408fa-259b-4520-ba3f-eb8576ccec92',
        EOD: null
      },
      fontloading: function(fontFamily, fontDescription) {
        for (var i = 0; i < MonoTypeWebFonts._fontLoadingEventList.length; i++) {
          MonoTypeWebFonts._fontLoadingEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription);
        }
      },
      fontactive: function(fontFamily, fontDescription) {
        for (var i = 0; i < MonoTypeWebFonts._fontActiveEventList.length; i++) {
          MonoTypeWebFonts._fontActiveEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription);
        }
      },
      inactive: function() {
        MonoTypeWebFonts.cleanup();
        for (var i = 0; i < MonoTypeWebFonts._inActiveEventList.length; i++) {
          MonoTypeWebFonts._inActiveEventList[i].call(MonoTypeWebFonts);
        }
      },
      active: function() {
        MonoTypeWebFonts.cleanup();
        for (var i = 0; i < MonoTypeWebFonts._activeEventList.length; i++) {
          MonoTypeWebFonts._activeEventList[i].call(MonoTypeWebFonts);
        }
      }
    });
  };
  try {
    MonoTypeWebFonts.loadFonts();
  } catch (e) {}
  setTimeout(function() {
    MonoTypeWebFonts.cleanup();
  }, 40000);
});

function mti_loadScript(a) {
  "undefined" != typeof MTIConfig && 1 == MTIConfig.EnableCustomFOUTHandler && (document.documentElement.style.visibility = "hidden");
  var mti_coreJsURL = "https://fast.fonts.net/jsapi/core/mt.js";
  var env = "";
  var UA = navigator.userAgent.toLowerCase(),
    isIE8 = -1 != UA.indexOf("msie") ? parseInt(UA.split("msie")[1]) : !1;
  isIE8 && (mti_coreJsURL = "https://fast.fonts.net/jsapi/core/mti.js");
  "undefined" != typeof MTIConfig && 1 == MTIConfig.EnableDSForAllFonts && (mti_coreJsURL = isIE8 ? "https://fast.fonts.net/jsapi/core/mti_cjk.js" : "https://fast.fonts.net/jsapi/core/mt_cjk.js");
  if ("undefined" != typeof MTIConfig && "undefined" != typeof MTIConfig.version && "" != MTIConfig.version) {
    var fileName = mti_coreJsURL.split("/").pop();
    mti_coreJsURL = "https://fast.fonts.net/jsapi/core/" + MTIConfig.version + "/" + fileName
  }
  var b = document.createElement("script");
  b.type = "text/javascript", b.readyState ? b.onreadystatechange = function() {
    ("loaded" == b.readyState || "complete" == b.readyState) && (b.onreadystatechange = null, a())
  } : b.onload = function() {
    a()
  }, b.src = mti_coreJsURL, document.getElementsByTagName("head")[0].appendChild(b);
};
