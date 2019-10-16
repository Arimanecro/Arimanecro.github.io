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
})({"public/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./img\\bg_best.png":[["bg_best.881e48c2.png","public/img/bg_best.png"],"public/img/bg_best.png"],"./img\\coffin.png":[["coffin.1ef27411.png","public/img/coffin.png"],"public/img/coffin.png"],"./img\\ghost.png":[["ghost.9fa94348.png","public/img/ghost.png"],"public/img/ghost.png"],"./img\\grass.jpg":[["grass.8ea66717.jpg","public/img/grass.jpg"],"public/img/grass.jpg"],"./img\\sprites\\wizard_purple\\appearing.png":[["appearing.8ed6ef99.png","public/img/sprites/wizard_purple/appearing.png"],"public/img/sprites/wizard_purple/appearing.png"],"./img\\sprites\\wizard_purple\\idle.png":[["idle.a8ed585c.png","public/img/sprites/wizard_purple/idle.png"],"public/img/sprites/wizard_purple/idle.png"],"./img\\sprites\\wizard_purple\\attack.png":[["attack.69639980.png","public/img/sprites/wizard_purple/attack.png"],"public/img/sprites/wizard_purple/attack.png"],"./img\\sprites\\wizard_fire\\appearing.png":[["appearing.fa2ecb85.png","public/img/sprites/wizard_fire/appearing.png"],"public/img/sprites/wizard_fire/appearing.png"],"./img\\sprites\\wizard_fire\\idle.png":[["idle.2ceac37f.png","public/img/sprites/wizard_fire/idle.png"],"public/img/sprites/wizard_fire/idle.png"],"./img\\sprites\\wizard_fire\\attack.png":[["attack.b4f4296b.png","public/img/sprites/wizard_fire/attack.png"],"public/img/sprites/wizard_fire/attack.png"],"./img\\sprites\\wizard_ice\\appearing.png":[["appearing.b6889ca1.png","public/img/sprites/wizard_ice/appearing.png"],"public/img/sprites/wizard_ice/appearing.png"],"./img\\sprites\\wizard_ice\\idle.png":[["idle.d44e1fc4.png","public/img/sprites/wizard_ice/idle.png"],"public/img/sprites/wizard_ice/idle.png"],"./img\\sprites\\wizard_ice\\attack.png":[["attack.c355eb66.png","public/img/sprites/wizard_ice/attack.png"],"public/img/sprites/wizard_ice/attack.png"],"./img\\portal.png":[["portal.500dc5af.png","public/img/portal.png"],"public/img/portal.png"],"./img\\sprites\\golem_ice_running.png":[["golem_ice_running.a3f43e26.png","public/img/sprites/golem_ice_running.png"],"public/img/sprites/golem_ice_running.png"],"./img\\sprites\\golem_swamp_running.png":[["golem_swamp_running.29c21a58.png","public/img/sprites/golem_swamp_running.png"],"public/img/sprites/golem_swamp_running.png"],"./img\\sprites\\golem_lava_running.png":[["golem_lava_running.a37c9019.png","public/img/sprites/golem_lava_running.png"],"public/img/sprites/golem_lava_running.png"],"./img\\sprites\\goblin_running.png":[["goblin_running.ee5ae97d.png","public/img/sprites/goblin_running.png"],"public/img/sprites/goblin_running.png"],"./img\\sprites\\orc_running.png":[["orc_running.f55fb520.png","public/img/sprites/orc_running.png"],"public/img/sprites/orc_running.png"],"./img\\sprites\\troll_running.png":[["troll_running.598607d7.png","public/img/sprites/troll_running.png"],"public/img/sprites/troll_running.png"],"./img\\sprites\\fallenangel_one_running.png":[["fallenangel_one_running.7555c4b7.png","public/img/sprites/fallenangel_one_running.png"],"public/img/sprites/fallenangel_one_running.png"],"./img\\sprites\\reaper_running.png":[["reaper_running.2b517245.png","public/img/sprites/reaper_running.png"],"public/img/sprites/reaper_running.png"],"./img\\signs\\js.jpg":[["js.800817a2.jpg","public/img/signs/js.jpg"],"public/img/signs/js.jpg"],"./img\\signs\\node.png":[["node.49bece38.png","public/img/signs/node.png"],"public/img/signs/node.png"],"./img\\signs\\express.png":[["express.6576637f.png","public/img/signs/express.png"],"public/img/signs/express.png"],"./img\\signs\\react.png":[["react.498579ad.png","public/img/signs/react.png"],"public/img/signs/react.png"],"./img\\signs\\pwa.png":[["pwa.327ef8a6.png","public/img/signs/pwa.png"],"public/img/signs/pwa.png"],"./img\\signs\\ts.jpg":[["ts.30424785.jpg","public/img/signs/ts.jpg"],"public/img/signs/ts.jpg"],"./img\\signs\\php.png":[["php.4a69d658.png","public/img/signs/php.png"],"public/img/signs/php.png"],"./img\\signs\\mongo.jpg":[["mongo.85ead7a1.jpg","public/img/signs/mongo.jpg"],"public/img/signs/mongo.jpg"],"./img\\signs\\firebase.png":[["firebase.b185f0bf.png","public/img/signs/firebase.png"],"public/img/signs/firebase.png"],"./img\\signs\\mysql.jpg":[["mysql.0108374b.jpg","public/img/signs/mysql.jpg"],"public/img/signs/mysql.jpg"],"./img\\signs\\GraphQL.png":[["GraphQL.5189d76b.png","public/img/signs/GraphQL.png"],"public/img/signs/GraphQL.png"],"./img\\bug.png":[["bug.c9fff7d0.png","public/img/bug.png"],"public/img/bug.png"],"./img\\github.png":[["github.87a5af48.png","public/img/github.png"],"public/img/github.png"],"./img\\link4.png":[["link4.27d1f48b.png","public/img/link4.png"],"public/img/link4.png"],"./img\\select.png":[["select.cabc9244.png","public/img/select.png"],"public/img/select.png"],"./img\\unselect.png":[["unselect.b62a2648.png","public/img/unselect.png"],"public/img/unselect.png"],"./img\\undeground.jpg":[["undeground.b60eea37.jpg","public/img/undeground.jpg"],"public/img/undeground.jpg"],"./img\\dev.png":[["dev.0d127b91.png","public/img/dev.png"],"public/img/dev.png"],"./img\\leg.png":[["leg.e563918e.png","public/img/leg.png"],"public/img/leg.png"],"./img\\laptop.jpg":[["laptop.855d7aa0.jpg","public/img/laptop.jpg"],"public/img/laptop.jpg"],"./img\\wifi.svg":[["wifi.d08d1bed.svg","public/img/wifi.svg"],"public/img/wifi.svg"],"./img\\clip.png":[["clip.401877e2.png","public/img/clip.png"],"public/img/clip.png"],"./wf\\KreepTown.eot":[["KreepTown.25b3a7d3.eot","public/wf/KreepTown.eot"],"public/wf/KreepTown.eot"],"./wf\\KreepTown.woff":[["KreepTown.d4effa9e.woff","public/wf/KreepTown.woff"],"public/wf/KreepTown.woff"],"./wf\\KreepTown.ttf":[["KreepTown.6c76ade9.ttf","public/wf/KreepTown.ttf"],"public/wf/KreepTown.ttf"],"./wf\\KreepTown.svg":[["KreepTown.6230b60e.svg","public/wf/KreepTown.svg"],"public/wf/KreepTown.svg"],"./wf\\ZOMBIESSTATION.eot":[["ZOMBIESSTATION.d56de1f0.eot","public/wf/ZOMBIESSTATION.eot"],"public/wf/ZOMBIESSTATION.eot"],"./wf\\ZOMBIESSTATION.woff":[["ZOMBIESSTATION.54493a18.woff","public/wf/ZOMBIESSTATION.woff"],"public/wf/ZOMBIESSTATION.woff"],"./wf\\ZOMBIESSTATION.ttf":[["ZOMBIESSTATION.26d988f5.ttf","public/wf/ZOMBIESSTATION.ttf"],"public/wf/ZOMBIESSTATION.ttf"],"./wf\\ZOMBIESSTATION.svg":[["ZOMBIESSTATION.be1530ba.svg","public/wf/ZOMBIESSTATION.svg"],"public/wf/ZOMBIESSTATION.svg"],"./wf\\b52.eot":[["b52.79ef4533.eot","public/wf/b52.eot"],"public/wf/b52.eot"],"./wf\\b52.woff":[["b52.93b32e9d.woff","public/wf/b52.woff"],"public/wf/b52.woff"],"./wf\\b52.ttf":[["b52.ae3f4a77.ttf","public/wf/b52.ttf"],"public/wf/b52.ttf"],"./wf\\b52.svg":[["b52.d43f3201.svg","public/wf/b52.svg"],"public/wf/b52.svg"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/context/contextSettings.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = require("react");

exports.ContextSettings = react_1.createContext([{
  turnOffAnimation: false,
  animation: false,
  bounceInUp: false,
  openPortal: false,
  appearingPortal: 0,
  link: "",
  getLinks: null,
  wizardStatus: "appearing",
  stack: []
}, () => {}]);
},{"react":"node_modules/react/index.js"}],"src/components/static_scenery/cemetery.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(require("react"));

exports.Cemetery = react_1.default.memo(props => {
  return react_1.default.createElement("section", {
    className: "wrapper"
  }, react_1.default.createElement("div", {
    id: "graveyard"
  }, props.children));
});
},{"react":"node_modules/react/index.js"}],"src/components/wizard.tsx":[function(require,module,exports) {
"use strict";

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importStar(require("react"));

const contextSettings_1 = require("../context/contextSettings");

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

exports.Wizard = () => {
  let [settings] = react_1.useContext(contextSettings_1.ContextSettings);
  let [state, setState] = react_1.useState({
    action: 'appearing',
    count: 0
  });
  let wiz = react_1.useMemo(() => shuffleArray(["fire", "ice"])[0], []);
  let statusAnimation = {
    'appearing': "wizard_appearance 0.4s steps(4)",
    "idle": `wizard_${wiz}_idle 0.65s steps(5) infinite`,
    "attack": `wizard_${wiz}_attack 0.5s steps(5)`
  };

  if (settings.wizardStatus == 'attack' && !state.count) {
    state.action = 'attack';
  } else if (settings.wizardStatus == 'attack' && state.count) {
    state.action = 'idle';
  } else if (settings.wizardStatus == 'idle' && state.count) {
    setState({ ...state,
      count: 0
    });
  }

  return react_1.default.createElement("div", {
    className: `wizard_${wiz} wizard_${state.action} wizard_${wiz}_${state.action}`,
    style: {
      animation: statusAnimation[state.action],
      animationDirection: "normal",
      animationFillMode: "forwards"
    },
    onAnimationEnd: e => {
      if (e.animationName == "wizard_appearance") {
        setState({ ...state,
          action: "idle"
        });
      }

      if (e.animationName == `wizard_${wiz}_attack`) {
        setState({ ...state,
          action: "idle",
          count: ++state.count
        });
      }
    }
  });
};
},{"react":"node_modules/react/index.js","../context/contextSettings":"src/context/contextSettings.tsx"}],"src/components/portal.tsx":[function(require,module,exports) {
"use strict";

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importStar(require("react"));

const contextSettings_1 = require("../context/contextSettings");

exports.default = () => {
  let [settings] = react_1.useContext(contextSettings_1.ContextSettings);
  return settings.openPortal ? react_1.default.createElement("div", {
    id: "portal",
    style: {
      animationDelay: settings.appearingPortal === 1 ? "0.5s" : "0s"
    }
  }) : react_1.default.createElement(react_1.default.Fragment, null);
};
},{"react":"node_modules/react/index.js","../context/contextSettings":"src/context/contextSettings.tsx"}],"src/components/characters.tsx":[function(require,module,exports) {
"use strict";

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importStar(require("react"));

const contextSettings_1 = require("../context/contextSettings");

const shortid = require("shortid");

let personages = ["golemIce", "golemSwamp", "golemLava", "goblin", "troll", "orc", "fallenAngel", "reaper"];

exports.default = () => {
  let [settings, setSettings] = react_1.useContext(contextSettings_1.ContextSettings);
  let golems = shuffleArray(personages);

  if (settings.animation && !settings.turnOffAnimation) {
    let appearingPortal = settings.appearingPortal === 1 ? 2 : 0;
    let delay = 0.5 + appearingPortal;
    let ms = 0.50;
    let jump = 1.40 + appearingPortal + 0.65;
    let rotate = 1.85 + appearingPortal + 0.65;
    let sizeReduction = 2.40 + appearingPortal + 0.65;
    let reduction = 2.45 + appearingPortal + 0.65;
    settings.stack.splice(-1, 1);
    let characters = settings.stack.map((icon, k) => {
      if (k !== 0) {
        (delay += ms).toPrecision(3);
        (jump += ms).toPrecision(2);
        (rotate += ms).toPrecision(2);
        (sizeReduction += ms).toPrecision(2);
        (reduction += ms).toPrecision(2);
      }

      let el = golems[k];
      return react_1.default.createElement("div", {
        key: shortid.generate(),
        className: "character",
        id: el,
        style: {
          animation: `golem 0.55s linear ${delay}s forwards,
                     ${el}Running 0.35s steps(12) infinite,
                     golemMove 2s linear ${delay}s forwards,
                     golemJump 0.55s ease-in-out ${jump}s forwards,
                     golemRotate 0.55s linear ${rotate}s forwards,
                     sizeReduction 0.95s linear ${sizeReduction}s forwards,
                     reduction 1.25s linear ${reduction}s forwards`
        },
        onAnimationEnd: e => {
          if (k == settings.stack.length - 1 && e.animationName == "reduction") {
            setSettings({ ...settings,
              animation: false,
              wizardStatus: "idle",
              openPortal: true,
              appearingPortal: 2,
              getLinks: true
            });
          }
        }
      }, react_1.default.createElement("div", {
        className: `sign ${icon}`,
        style: {
          animation: `rotateSign 0.15s ease ${rotate}s forwards`
        }
      }));
    });
    return react_1.default.createElement(react_1.default.Fragment, null, characters);
  } else {
    return react_1.default.createElement(react_1.default.Fragment, null);
  }
};

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
},{"react":"node_modules/react/index.js","../context/contextSettings":"src/context/contextSettings.tsx","shortid":"node_modules/shortid/index.js"}],"src/components/reference.tsx":[function(require,module,exports) {
"use strict";

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importStar(require("react"));

const contextSettings_1 = require("../context/contextSettings");

exports.default = () => {
  let [settings, ctxSettings] = react_1.useContext(contextSettings_1.ContextSettings);

  if (settings.turnOffAnimation) {
    if (settings.getLinks === null) {
      return react_1.default.createElement(react_1.default.Fragment, null);
    } else if (settings.getLinks === false && settings.bounceInUp === false) {
      ctxSettings({ ...settings,
        bounceInUp: true
      });
      return react_1.default.createElement(react_1.default.Fragment, null);
    } else if (settings.getLinks === false && settings.bounceInUp === true) {
      let link = settings.link.split('--');
      return react_1.default.createElement(react_1.default.Fragment, null, "$ ", link[1] ? react_1.default.createElement("a", {
        href: link[1],
        target: "_blank",
        id: "link",
        style: {
          animation: "bounceInUp_link .73s ease forwards, pulse_animation 1.25s 1s  linear infinite"
        }
      }) : "", react_1.default.createElement("a", {
        href: link[0],
        target: "_blank",
        id: "github",
        style: {
          animation: "bounceInUp .73s ease forwards, pulse_animation 1.25s .75s linear infinite"
        }
      }));
    }
  } else {
    if (settings.getLinks) {
      let link = settings.link.split('--')[1];
      return react_1.default.createElement(react_1.default.Fragment, null, "$", link[1] ? react_1.default.createElement("a", {
        href: link[1],
        target: "_blank",
        id: "link",
        style: {
          animation: "bounceInUp_link .73s ease forwards, pulse_animation 1.25s 1s linear reverse infinite"
        }
      }) : "", react_1.default.createElement("a", {
        href: link[0],
        target: "_blank",
        id: "github",
        style: {
          animation: "bounceInUp .73s ease forwards, pulse_animation 1.25s .75s linear infinite"
        }
      }));
    }
  }

  return react_1.default.createElement(react_1.default.Fragment, null);
};
},{"react":"node_modules/react/index.js","../context/contextSettings":"src/context/contextSettings.tsx"}],"src/components/UI/btnAnimation.tsx":[function(require,module,exports) {
"use strict";

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importStar(require("react"));

const contextSettings_1 = require("../../context/contextSettings");

exports.default = () => {
  let [settings, setSettings] = react_1.useState(true);
  let [cxtsettings, setCxtSettings] = react_1.useContext(contextSettings_1.ContextSettings);
  let bg = settings ? "check" : "uncheck";
  return react_1.default.createElement("div", {
    className: `${bg}`,
    id: "checkAnimation",
    onClick: () => {
      setSettings(!settings);
      setCxtSettings({ ...cxtsettings,
        turnOffAnimation: !cxtsettings.turnOffAnimation,
        animation: !cxtsettings.animation
      });
    }
  }, "ANIMATION");
};
},{"react":"node_modules/react/index.js","../../context/contextSettings":"src/context/contextSettings.tsx"}],"src/components/UI/stackMenu.tsx":[function(require,module,exports) {
"use strict";

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importStar(require("react"));

const contextSettings_1 = require("../../context/contextSettings");

const btnAnimation_1 = __importDefault(require("./btnAnimation"));

const shortid = require("shortid");

let stacks = [["react", "ts", "pwa", "https://github.com/Arimanecro/111--https://pantheon-roboshop.herokuapp.com/"], ["express", "mongo", "firebase", "https://github.com/Arimanecro/666"], ["node", "mongo", "https://github.com/Arimanecro/555"], ["react", "ts", "firebase", "https://github.com/Arimanecro/444"], ["php", "mysql", "https://github.com/Arimanecro/333"], ["js", "https://github.com/Arimanecro/222"], ["php", "https://github.com/Arimanecro/ExpressRoboShop"]];

exports.default = () => {
  let [settings, setSettings] = react_1.useContext(contextSettings_1.ContextSettings);
  let list = stacks.map((stack, key) => {
    ++key;
    return react_1.default.createElement("div", {
      key: shortid.generate(),
      className: "wrapperStack",
      "data-stack": `${stack.toString()}`,
      onClick: e => {
        if (!settings.animation && !settings.turnOffAnimation) {
          setSettings({ ...settings,
            animation: true,
            wizardStatus: "attack",
            openPortal: true,
            appearingPortal: !settings.appearingPortal ? 1 : 2,
            link: stack.toString().split(",")[stack.length - 1],
            getLinks: false,
            stack: e.currentTarget.dataset.stack.split(",")
          });
        }

        if (settings.turnOffAnimation) {
          {
            setSettings({ ...settings,
              animation: true,
              link: stack.toString().split(",")[stack.length - 1],
              getLinks: false,
              bounceInUp: false
            });
          }
        }
      }
    }, react_1.default.createElement("span", {
      style: key === 1 ? {
        marginRight: "6px"
      } : {
        marginRight: "0px"
      }
    }, key, "."), react_1.default.createElement("div", {
      className: "stack"
    }, stack.map(tech => {
      if (!tech.includes("git")) {
        return react_1.default.createElement("div", {
          key: shortid.generate(),
          className: `icon icon_${tech}`
        });
      }
    })));
  });
  return react_1.default.createElement("div", {
    id: "stacks"
  }, react_1.default.createElement(btnAnimation_1.default, null), react_1.default.createElement("h1", null, "STACKS:"), list);
};
},{"react":"node_modules/react/index.js","../../context/contextSettings":"src/context/contextSettings.tsx","./btnAnimation":"src/components/UI/btnAnimation.tsx","shortid":"node_modules/shortid/index.js"}],"src/components/static_scenery/grass.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(require("react"));

exports.Grass = react_1.default.memo(() => {
  return react_1.default.createElement("div", {
    id: "grass"
  });
});
},{"react":"node_modules/react/index.js"}],"src/components/static_scenery/coffin.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(require("react"));

exports.Coffin = react_1.default.memo(() => {
  return react_1.default.createElement("div", {
    id: "coffin"
  });
});
},{"react":"node_modules/react/index.js"}],"src/components/static_scenery/ghost.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(require("react"));

exports.Ghost = react_1.default.memo(() => {
  return react_1.default.createElement("div", {
    id: "ghost"
  });
});
},{"react":"node_modules/react/index.js"}],"src/components/static_scenery/hands.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(require("react"));

exports.Hands = react_1.default.memo(() => {
  return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement("div", {
    className: "hand_one"
  }), react_1.default.createElement("div", {
    className: "hand_one",
    id: "hand_two"
  }));
});
},{"react":"node_modules/react/index.js"}],"src/components/graveyard.tsx":[function(require,module,exports) {
"use strict";

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importStar(require("react"));

const contextSettings_1 = require("../context/contextSettings");

const cemetery_1 = require("./static_scenery/cemetery");

const wizard_1 = require("./wizard");

const portal_1 = __importDefault(require("./portal"));

const characters_1 = __importDefault(require("./characters"));

const reference_1 = __importDefault(require("./reference"));

const stackMenu_1 = __importDefault(require("./UI/stackMenu"));

const grass_1 = require("./static_scenery/grass");

const coffin_1 = require("./static_scenery/coffin");

const ghost_1 = require("./static_scenery/ghost");

const hands_1 = require("./static_scenery/hands");

exports.default = () => {
  let settings = react_1.useState({
    turnOffAnimation: false,
    animation: false,
    bounceInUp: false,
    wizardStatus: "appearing",
    openPortal: false,
    appearingPortal: 0,
    link: "",
    getLinks: null,
    stack: []
  });
  return react_1.default.createElement(cemetery_1.Cemetery, null, react_1.default.createElement(grass_1.Grass, null), react_1.default.createElement(coffin_1.Coffin, null), react_1.default.createElement(ghost_1.Ghost, null), react_1.default.createElement(contextSettings_1.ContextSettings.Provider, {
    value: settings
  }, react_1.default.createElement(stackMenu_1.default, null), react_1.default.createElement(wizard_1.Wizard, null), react_1.default.createElement(portal_1.default, null), react_1.default.createElement(hands_1.Hands, null), react_1.default.createElement(reference_1.default, null), react_1.default.createElement(characters_1.default, null)));
};
},{"react":"node_modules/react/index.js","../context/contextSettings":"src/context/contextSettings.tsx","./static_scenery/cemetery":"src/components/static_scenery/cemetery.tsx","./wizard":"src/components/wizard.tsx","./portal":"src/components/portal.tsx","./characters":"src/components/characters.tsx","./reference":"src/components/reference.tsx","./UI/stackMenu":"src/components/UI/stackMenu.tsx","./static_scenery/grass":"src/components/static_scenery/grass.tsx","./static_scenery/coffin":"src/components/static_scenery/coffin.tsx","./static_scenery/ghost":"src/components/static_scenery/ghost.tsx","./static_scenery/hands":"src/components/static_scenery/hands.tsx"}],"src/components/underground.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(require("react"));

exports.default = () => {
  return react_1.default.createElement("section", {
    id: "wrapper_undeground"
  }, react_1.default.createElement("div", {
    id: "undeground"
  }, react_1.default.createElement("div", {
    id: "dev"
  }), react_1.default.createElement("div", {
    className: "leg"
  }), react_1.default.createElement("div", {
    id: "leg_two",
    className: "leg"
  }), react_1.default.createElement("div", {
    id: "laptop"
  }), react_1.default.createElement("div", {
    id: "wifi"
  }), react_1.default.createElement("section", {
    id: "wrapper_infoBlocks"
  }, react_1.default.createElement("div", {
    className: "infoBlock"
  }, react_1.default.createElement("h1", null, "about portfolio")), react_1.default.createElement("div", {
    className: "infoBlock"
  }, react_1.default.createElement("h1", null, "skills"), react_1.default.createElement("div", {
    className: "frontend"
  }, react_1.default.createElement("h1", null, "frontend:"), react_1.default.createElement("ul", null, react_1.default.createElement("li", null, "- html, css"), react_1.default.createElement("li", null, "- javascript, typescript, react"))), react_1.default.createElement("div", {
    className: "frontend"
  }, react_1.default.createElement("h1", {
    style: {
      "color": "#c42d1d"
    }
  }, "backend:"), react_1.default.createElement("ul", null, react_1.default.createElement("li", null, "- nodejs, express, php, laravel"), react_1.default.createElement("li", null, "- mysql, mongodb, firebase, graphql")))), react_1.default.createElement("div", {
    className: "infoBlock contact"
  }, react_1.default.createElement("div", {
    className: "foto"
  }), react_1.default.createElement("h1", null, "contacts"), react_1.default.createElement("p", {
    className: "infostring"
  }, react_1.default.createElement("span", null, "FIRST NAME:"), " Serghey"), react_1.default.createElement("p", {
    className: "infostring"
  }, react_1.default.createElement("span", null, "LAST NAME:"), " Didac"), react_1.default.createElement("p", {
    className: "infostring"
  }, "arimanecro@gmail.com")))));
};
},{"react":"node_modules/react/index.js"}],"src/indexPC.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(require("react"));

const react_dom_1 = require("react-dom");

const styled_components_1 = require("styled-components");

const styles_css_1 = __importDefault(require("../public/styles.css"));

const graveyard_1 = __importDefault(require("./components/graveyard"));

const underground_1 = __importDefault(require("./components/underground")); //const GraveYard = React.lazy(() => import('./components/graveyard'));
//const Underground = React.lazy(() => import('./components/underground'));


const CSS = styled_components_1.createGlobalStyle`${styles_css_1.default}`;

exports.Portfolio = () => {
  if (localStorage.device) {
    document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"./indexPC.e686e9d6.css\" />");
  }

  return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(CSS, null), react_1.default.createElement(graveyard_1.default, null), react_1.default.createElement(underground_1.default, null));
};

react_dom_1.render(react_1.default.createElement(exports.Portfolio), document.getElementById("root"));
},{"react":"node_modules/react/index.js","react-dom":"node_modules/react-dom/index.js","styled-components":"node_modules/styled-components/dist/styled-components.browser.esm.js","../public/styles.css":"public/styles.css","./components/graveyard":"src/components/graveyard.tsx","./components/underground":"src/components/underground.tsx"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51500" + '/');

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
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],0:[function(require,module,exports) {
var b=require("node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.load([]).then(function(){require("src/indexPC.tsx");});
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/indexPC.e686e9d6.js.map