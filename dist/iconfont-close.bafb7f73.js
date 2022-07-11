// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"U3gB":[function(require,module,exports) {
!function (e) {
  var t,
      _n,
      o,
      i,
      a,
      l = '<svg><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M312.13091 310.48787a46.545021 46.545021 0 0 1 65.814659 0l133.816935 133.933298 133.58421-133.351485a46.312296 46.312296 0 0 1 65.628479 0 45.381395 45.381395 0 0 1-0.9309 64.813942l-133.11876 133.77039 133.11876 133.118759a46.545021 46.545021 0 0 1 0 65.81466 45.497758 45.497758 0 0 1-64.930304-1.023991l-133.11876-132.653309-133.118759 133.910025a46.568293 46.568293 0 1 1-65.931022-65.81466L446.36675 509.677287l-134.23584-133.49112a46.545021 46.545021 0 0 1 0-65.698297zM511.995229 1023.999767a508.248355 508.248355 0 0 1-293.349994-93.299494 46.405386 46.405386 0 0 1-34.21059-44.68322l-0.418905-4.305414a46.405386 46.405386 0 0 1 80.592703-31.557525 420.534263 420.534263 0 1 0-132.653309-160.161416l-7.540293 7.540293a46.545021 46.545021 0 0 1 29.02082 43.077417l0.442178 4.328687a46.428658 46.428658 0 0 1-91.088606 12.776608A511.995229 511.995229 0 1 1 511.995229 1023.999767z"  ></path></symbol></svg>',
      c = (c = document.getElementsByTagName("script"))[c.length - 1].getAttribute("data-injectcss"),
      d = function d(e, t) {
    t.parentNode.insertBefore(e, t);
  };if (c && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e);
    }
  }function s() {
    a || (a = !0, o());
  }function r() {
    try {
      i.documentElement.doScroll("left");
    } catch (e) {
      return void setTimeout(r, 50);
    }s();
  }t = function t() {
    var e,
        t = document.createElement("div");t.innerHTML = l, l = null, (t = t.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", t = t, (e = document.body).firstChild ? d(t, e.firstChild) : e.appendChild(t));
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (_n = function n() {
    document.removeEventListener("DOMContentLoaded", _n, !1), t();
  }, document.addEventListener("DOMContentLoaded", _n, !1)) : document.attachEvent && (o = t, i = e.document, a = !1, r(), i.onreadystatechange = function () {
    "complete" == i.readyState && (i.onreadystatechange = null, s());
  });
}(window);
},{}]},{},["U3gB"], null)
//# sourceMappingURL=iconfont-close.bafb7f73.map