// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/caching.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Caching = void 0;

const Caching = () => {
  let mobileFiles = ['axes.e5473b84.png', 'b52.79ef4533.eot', 'b52.93b32e9d.woff', 'b52.ae3f4a77.ttf', 'b52.d43f3201.svg', 'btnclose.2955c178.png', 'caching.bce5fcf6.js', 'clip.401877e2.png', 'crown.8cb43fb9.png', 'express.6576637f.png', 'firebase.b185f0bf.png', 'pwa.327ef8a6.png', 'GraphQL.5189d76b.png', 'grass.b1731966.jpg', 'helmet.d0a6d10e.png', 'js.800817a2.jpg', 'KreepTown.25b3a7d3.eot', 'KreepTown.6230b60e.svg', 'KreepTown.6c76ade9.ttf', 'KreepTown.d4effa9e.woff', 'list.7c40af47.png', 'mobileVersion.68783d3c.css', 'mobileVersion.68783d3c.js', 'mongo.85ead7a1.jpg', 'mysql.0108374b.jpg', 'node.49bece38.png', 'php.4a69d658.png', 'react.498579ad.png', 'start.5aff1fc7.js', 'sw.js', 'swREG.374738ec.js', 'ts.30424785.jpg', 'ZOMBIESSTATION.26d988f5.ttf', 'ZOMBIESSTATION.54493a18.woff', 'ZOMBIESSTATION.be1530ba.svg', 'ZOMBIESSTATION.d56de1f0.eot'];
  let pcFiles = ['appearing.8ed6ef99.png', 'appearing.b6889ca1.png', 'appearing.fa2ecb85.png', 'attack.69639980.png', 'attack.b4f4296b.png', 'attack.c355eb66.png', 'b52.79ef4533.eot', 'b52.93b32e9d.woff', 'b52.ae3f4a77.ttf', 'b52.d43f3201.svg', 'bg_best.881e48c2.png', 'caching.bce5fcf6.js', 'clip.401877e2.png', 'coffin.1ef27411.png', 'dev.0d127b91.png', 'express.6576637f.png', 'fallenangel_one_running.7555c4b7.png', 'firebase.b185f0bf.png', 'pwa.327ef8a6.png', 'ghost.9fa94348.png', 'github.87a5af48.png', 'goblin_running.ee5ae97d.png', 'golem_ice_running.a3f43e26.png', 'golem_lava_running.a37c9019.png', 'golem_swamp_running.29c21a58.png', 'GraphQL.5189d76b.png', 'grass.8ea66717.jpg', 'grass.b1731966.jpg', 'idle.2ceac37f.png', 'idle.a8ed585c.png', 'idle.d44e1fc4.png', 'indexPC.e686e9d6.css', 'indexPC.e686e9d6.js', 'js.800817a2.jpg', 'KreepTown.25b3a7d3.eot', 'KreepTown.6230b60e.svg', 'KreepTown.6c76ade9.ttf', 'KreepTown.d4effa9e.woff', 'laptop.855d7aa0.jpg', 'leg.e563918e.png', 'list.7c40af47.png', 'mongo.85ead7a1.jpg', 'mysql.0108374b.jpg', 'node.49bece38.png', 'orc_running.f55fb520.png', 'php.4a69d658.png', 'portal.500dc5af.png', 'react.498579ad.png', 'reaper_running.2b517245.png', 'select.cabc9244.png', 'start.5aff1fc7.js', 'sw.js', 'swREG.374738ec.js', 'troll_running.598607d7.png', 'ts.30424785.jpg', 'up_scroll3.8e288ea9.png', 'down_scroll.e21fd408.png', 'undeground.b60eea37.jpg', 'unselect.b62a2648.png', 'wifi.d08d1bed.svg', 'ZOMBIESSTATION.26d988f5.ttf', 'ZOMBIESSTATION.54493a18.woff', 'ZOMBIESSTATION.be1530ba.svg', 'ZOMBIESSTATION.d56de1f0.eot'];
  let files = localStorage.device.includes('mobile') ? mobileFiles : pcFiles; //let files = [];

  const version = 1;
  caches.open(`static-v${version}`).then(cache => cache.addAll(files).then(() => {
    localStorage.setItem('caching', 'true');
    console.log('Assets added to cache');
  }).then(() => import(localStorage.device).then(mod => mod.Portfolio)).then(() => deleteSpinner()).catch(err => console.log('Error while fetching assets', err)));
};

exports.Caching = Caching;

function deleteSpinner() {
  document.getElementById('spinner').remove();
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50058" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/caching.js"], null)
//# sourceMappingURL=/caching.bce5fcf6.js.map