#!/usr/bin/env node
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 0.2.118

// Want to see the unminified source? We're hiring!
// https://job-boards.greenhouse.io/anthropic/jobs/4816199008
var eA = Object.create;
var {
  getPrototypeOf: $I,
  defineProperty: oY,
  getOwnPropertyNames: XI,
} = Object;
var JI = Object.prototype.hasOwnProperty;
function QI($) {
  return this[$];
}
var YI,
  WI,
  EJ = ($, X, J) => {
    var Y = $ != null && typeof $ === "object";
    if (Y) {
      var Q = X ? (YI ??= new WeakMap()) : (WI ??= new WeakMap()),
        W = Q.get($);
      if (W) return W;
    }
    J = $ != null ? eA($I($)) : {};
    let z =
      X || !$ || !$.__esModule
        ? oY(J, "default", { value: $, enumerable: !0 })
        : J;
    for (let G of XI($))
      if (!JI.call(z, G)) oY(z, G, { get: QI.bind($, G), enumerable: !0 });
    if (Y) Q.set($, z);
    return z;
  };
var M = ($, X) => () => (X || $((X = { exports: {} }).exports, X), X.exports);
var zI = ($) => $;
function GI($, X) {
  this[$] = zI.bind(null, X);
}
var B1 = ($, X) => {
  for (var J in X)
    oY($, J, {
      get: X[J],
      enumerable: !0,
      configurable: !0,
      set: GI.bind(X, J),
    });
};
var UI = Symbol.dispose || Symbol.for("Symbol.dispose"),
  HI = Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose"),
  q$ = ($, X, J) => {
    if (X != null) {
      if (typeof X !== "object" && typeof X !== "function")
        throw TypeError(
          'Object expected to be assigned to "using" declaration',
        );
      var Y;
      if (J) Y = X[HI];
      if (Y === void 0) Y = X[UI];
      if (typeof Y !== "function") throw TypeError("Object not disposable");
      $.push([J, Y, X]);
    } else if (J) $.push([J]);
    return X;
  },
  D$ = ($, X, J) => {
    var Y =
        typeof SuppressedError === "function"
          ? SuppressedError
          : function (z, G, U, H) {
              return (
                (H = Error(U)),
                (H.name = "SuppressedError"),
                (H.error = z),
                (H.suppressed = G),
                H
              );
            },
      Q = (z) =>
        (X = J
          ? new Y(z, X, "An error was suppressed during disposal")
          : ((J = !0), z)),
      W = (z) => {
        while ((z = $.pop()))
          try {
            var G = z[1] && z[1].call(z[2]);
            if (z[0]) return Promise.resolve(G).then(W, (U) => (Q(U), W()));
          } catch (U) {
            Q(U);
          }
        if (J) throw X;
      };
    return W();
  };
var yV = M((TV) => {
  Object.defineProperty(TV, "__esModule", { value: !0 });
  TV._globalThis = void 0;
  TV._globalThis = typeof globalThis === "object" ? globalThis : global;
});
var gV = M((R1) => {
  var UR =
      (R1 && R1.__createBinding) ||
      (Object.create
        ? function ($, X, J, Y) {
            if (Y === void 0) Y = J;
            Object.defineProperty($, Y, {
              enumerable: !0,
              get: function () {
                return X[J];
              },
            });
          }
        : function ($, X, J, Y) {
            if (Y === void 0) Y = J;
            $[Y] = X[J];
          }),
    HR =
      (R1 && R1.__exportStar) ||
      function ($, X) {
        for (var J in $)
          if (J !== "default" && !Object.prototype.hasOwnProperty.call(X, J))
            UR(X, $, J);
      };
  Object.defineProperty(R1, "__esModule", { value: !0 });
  HR(yV(), R1);
});
var hV = M((P1) => {
  var KR =
      (P1 && P1.__createBinding) ||
      (Object.create
        ? function ($, X, J, Y) {
            if (Y === void 0) Y = J;
            Object.defineProperty($, Y, {
              enumerable: !0,
              get: function () {
                return X[J];
              },
            });
          }
        : function ($, X, J, Y) {
            if (Y === void 0) Y = J;
            $[Y] = X[J];
          }),
    NR =
      (P1 && P1.__exportStar) ||
      function ($, X) {
        for (var J in $)
          if (J !== "default" && !Object.prototype.hasOwnProperty.call(X, J))
            KR(X, $, J);
      };
  Object.defineProperty(P1, "__esModule", { value: !0 });
  NR(gV(), P1);
});
var mW = M((uV) => {
  Object.defineProperty(uV, "__esModule", { value: !0 });
  uV.VERSION = void 0;
  uV.VERSION = "1.9.0";
});
var iV = M((dV) => {
  Object.defineProperty(dV, "__esModule", { value: !0 });
  dV.isCompatible = dV._makeCompatibilityCheck = void 0;
  var VR = mW(),
    lV = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
  function cV($) {
    let X = new Set([$]),
      J = new Set(),
      Y = $.match(lV);
    if (!Y) return () => !1;
    let Q = { major: +Y[1], minor: +Y[2], patch: +Y[3], prerelease: Y[4] };
    if (Q.prerelease != null)
      return function (U) {
        return U === $;
      };
    function W(G) {
      return (J.add(G), !1);
    }
    function z(G) {
      return (X.add(G), !0);
    }
    return function (U) {
      if (X.has(U)) return !0;
      if (J.has(U)) return !1;
      let H = U.match(lV);
      if (!H) return W(U);
      let K = { major: +H[1], minor: +H[2], patch: +H[3], prerelease: H[4] };
      if (K.prerelease != null) return W(U);
      if (Q.major !== K.major) return W(U);
      if (Q.major === 0) {
        if (Q.minor === K.minor && Q.patch <= K.patch) return z(U);
        return W(U);
      }
      if (Q.minor <= K.minor) return z(U);
      return W(U);
    };
  }
  dV._makeCompatibilityCheck = cV;
  dV.isCompatible = cV(VR.VERSION);
});
var E1 = M((nV) => {
  Object.defineProperty(nV, "__esModule", { value: !0 });
  nV.unregisterGlobal = nV.getGlobal = nV.registerGlobal = void 0;
  var wR = hV(),
    A0 = mW(),
    BR = iV(),
    qR = A0.VERSION.split(".")[0],
    F9 = Symbol.for(`opentelemetry.js.api.${qR}`),
    j9 = wR._globalThis;
  function DR($, X, J, Y = !1) {
    var Q;
    let W = (j9[F9] =
      (Q = j9[F9]) !== null && Q !== void 0 ? Q : { version: A0.VERSION });
    if (!Y && W[$]) {
      let z = Error(
        `@opentelemetry/api: Attempted duplicate registration of API: ${$}`,
      );
      return (J.error(z.stack || z.message), !1);
    }
    if (W.version !== A0.VERSION) {
      let z = Error(
        `@opentelemetry/api: Registration of version v${W.version} for ${$} does not match previously registered API v${A0.VERSION}`,
      );
      return (J.error(z.stack || z.message), !1);
    }
    return (
      (W[$] = X),
      J.debug(
        `@opentelemetry/api: Registered a global for ${$} v${A0.VERSION}.`,
      ),
      !0
    );
  }
  nV.registerGlobal = DR;
  function FR($) {
    var X, J;
    let Y = (X = j9[F9]) === null || X === void 0 ? void 0 : X.version;
    if (!Y || !(0, BR.isCompatible)(Y)) return;
    return (J = j9[F9]) === null || J === void 0 ? void 0 : J[$];
  }
  nV.getGlobal = FR;
  function jR($, X) {
    X.debug(
      `@opentelemetry/api: Unregistering a global for ${$} v${A0.VERSION}.`,
    );
    let J = j9[F9];
    if (J) delete J[$];
  }
  nV.unregisterGlobal = jR;
});
var sV = M((tV) => {
  Object.defineProperty(tV, "__esModule", { value: !0 });
  tV.DiagComponentLogger = void 0;
  var AR = E1();
  class oV {
    constructor($) {
      this._namespace = $.namespace || "DiagComponentLogger";
    }
    debug(...$) {
      return L9("debug", this._namespace, $);
    }
    error(...$) {
      return L9("error", this._namespace, $);
    }
    info(...$) {
      return L9("info", this._namespace, $);
    }
    warn(...$) {
      return L9("warn", this._namespace, $);
    }
    verbose(...$) {
      return L9("verbose", this._namespace, $);
    }
  }
  tV.DiagComponentLogger = oV;
  function L9($, X, J) {
    let Y = (0, AR.getGlobal)("diag");
    if (!Y) return;
    return (J.unshift(X), Y[$](...J));
  }
});
var N7 = M((eV) => {
  Object.defineProperty(eV, "__esModule", { value: !0 });
  eV.DiagLogLevel = void 0;
  var IR;
  (function ($) {
    (($[($.NONE = 0)] = "NONE"),
      ($[($.ERROR = 30)] = "ERROR"),
      ($[($.WARN = 50)] = "WARN"),
      ($[($.INFO = 60)] = "INFO"),
      ($[($.DEBUG = 70)] = "DEBUG"),
      ($[($.VERBOSE = 80)] = "VERBOSE"),
      ($[($.ALL = 9999)] = "ALL"));
  })((IR = eV.DiagLogLevel || (eV.DiagLogLevel = {})));
});
var JO = M(($O) => {
  Object.defineProperty($O, "__esModule", { value: !0 });
  $O.createLogLevelDiagLogger = void 0;
  var B4 = N7();
  function ZR($, X) {
    if ($ < B4.DiagLogLevel.NONE) $ = B4.DiagLogLevel.NONE;
    else if ($ > B4.DiagLogLevel.ALL) $ = B4.DiagLogLevel.ALL;
    X = X || {};
    function J(Y, Q) {
      let W = X[Y];
      if (typeof W === "function" && $ >= Q) return W.bind(X);
      return function () {};
    }
    return {
      error: J("error", B4.DiagLogLevel.ERROR),
      warn: J("warn", B4.DiagLogLevel.WARN),
      info: J("info", B4.DiagLogLevel.INFO),
      debug: J("debug", B4.DiagLogLevel.DEBUG),
      verbose: J("verbose", B4.DiagLogLevel.VERBOSE),
    };
  }
  $O.createLogLevelDiagLogger = ZR;
});
var S1 = M((YO) => {
  Object.defineProperty(YO, "__esModule", { value: !0 });
  YO.DiagAPI = void 0;
  var bR = sV(),
    RR = JO(),
    QO = N7(),
    V7 = E1(),
    PR = "diag";
  class cW {
    constructor() {
      function $(Y) {
        return function (...Q) {
          let W = (0, V7.getGlobal)("diag");
          if (!W) return;
          return W[Y](...Q);
        };
      }
      let X = this,
        J = (Y, Q = { logLevel: QO.DiagLogLevel.INFO }) => {
          var W, z, G;
          if (Y === X) {
            let K = Error(
              "Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation",
            );
            return (
              X.error((W = K.stack) !== null && W !== void 0 ? W : K.message),
              !1
            );
          }
          if (typeof Q === "number") Q = { logLevel: Q };
          let U = (0, V7.getGlobal)("diag"),
            H = (0, RR.createLogLevelDiagLogger)(
              (z = Q.logLevel) !== null && z !== void 0
                ? z
                : QO.DiagLogLevel.INFO,
              Y,
            );
          if (U && !Q.suppressOverrideMessage) {
            let K =
              (G = Error().stack) !== null && G !== void 0
                ? G
                : "<failed to generate stacktrace>";
            (U.warn(`Current logger will be overwritten from ${K}`),
              H.warn(
                `Current logger will overwrite one already registered from ${K}`,
              ));
          }
          return (0, V7.registerGlobal)("diag", H, X, !0);
        };
      ((X.setLogger = J),
        (X.disable = () => {
          (0, V7.unregisterGlobal)(PR, X);
        }),
        (X.createComponentLogger = (Y) => {
          return new bR.DiagComponentLogger(Y);
        }),
        (X.verbose = $("verbose")),
        (X.debug = $("debug")),
        (X.info = $("info")),
        (X.warn = $("warn")),
        (X.error = $("error")));
    }
    static instance() {
      if (!this._instance) this._instance = new cW();
      return this._instance;
    }
  }
  YO.DiagAPI = cW;
});
var UO = M((zO) => {
  Object.defineProperty(zO, "__esModule", { value: !0 });
  zO.BaggageImpl = void 0;
  class I0 {
    constructor($) {
      this._entries = $ ? new Map($) : new Map();
    }
    getEntry($) {
      let X = this._entries.get($);
      if (!X) return;
      return Object.assign({}, X);
    }
    getAllEntries() {
      return Array.from(this._entries.entries()).map(([$, X]) => [$, X]);
    }
    setEntry($, X) {
      let J = new I0(this._entries);
      return (J._entries.set($, X), J);
    }
    removeEntry($) {
      let X = new I0(this._entries);
      return (X._entries.delete($), X);
    }
    removeEntries(...$) {
      let X = new I0(this._entries);
      for (let J of $) X._entries.delete(J);
      return X;
    }
    clear() {
      return new I0();
    }
  }
  zO.BaggageImpl = I0;
});
var NO = M((HO) => {
  Object.defineProperty(HO, "__esModule", { value: !0 });
  HO.baggageEntryMetadataSymbol = void 0;
  HO.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
});
var dW = M((VO) => {
  Object.defineProperty(VO, "__esModule", { value: !0 });
  VO.baggageEntryMetadataFromString = VO.createBaggage = void 0;
  var ER = S1(),
    SR = UO(),
    vR = NO(),
    CR = ER.DiagAPI.instance();
  function kR($ = {}) {
    return new SR.BaggageImpl(new Map(Object.entries($)));
  }
  VO.createBaggage = kR;
  function _R($) {
    if (typeof $ !== "string")
      (CR.error(
        `Cannot create baggage metadata from unknown type: ${typeof $}`,
      ),
        ($ = ""));
    return {
      __TYPE__: vR.baggageEntryMetadataSymbol,
      toString() {
        return $;
      },
    };
  }
  VO.baggageEntryMetadataFromString = _R;
});
var M9 = M((wO) => {
  Object.defineProperty(wO, "__esModule", { value: !0 });
  wO.ROOT_CONTEXT = wO.createContextKey = void 0;
  function TR($) {
    return Symbol.for($);
  }
  wO.createContextKey = TR;
  class O7 {
    constructor($) {
      let X = this;
      ((X._currentContext = $ ? new Map($) : new Map()),
        (X.getValue = (J) => X._currentContext.get(J)),
        (X.setValue = (J, Y) => {
          let Q = new O7(X._currentContext);
          return (Q._currentContext.set(J, Y), Q);
        }),
        (X.deleteValue = (J) => {
          let Y = new O7(X._currentContext);
          return (Y._currentContext.delete(J), Y);
        }));
    }
  }
  wO.ROOT_CONTEXT = new O7();
});
var jO = M((DO) => {
  Object.defineProperty(DO, "__esModule", { value: !0 });
  DO.DiagConsoleLogger = void 0;
  var pW = [
    { n: "error", c: "error" },
    { n: "warn", c: "warn" },
    { n: "info", c: "info" },
    { n: "debug", c: "debug" },
    { n: "verbose", c: "trace" },
  ];
  class qO {
    constructor() {
      function $(X) {
        return function (...J) {
          if (console) {
            let Y = console[X];
            if (typeof Y !== "function") Y = console.log;
            if (typeof Y === "function") return Y.apply(console, J);
          }
        };
      }
      for (let X = 0; X < pW.length; X++) this[pW[X].n] = $(pW[X].c);
    }
  }
  DO.DiagConsoleLogger = qO;
});
var $z = M((LO) => {
  Object.defineProperty(LO, "__esModule", { value: !0 });
  LO.createNoopMeter =
    LO.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC =
    LO.NOOP_OBSERVABLE_GAUGE_METRIC =
    LO.NOOP_OBSERVABLE_COUNTER_METRIC =
    LO.NOOP_UP_DOWN_COUNTER_METRIC =
    LO.NOOP_HISTOGRAM_METRIC =
    LO.NOOP_GAUGE_METRIC =
    LO.NOOP_COUNTER_METRIC =
    LO.NOOP_METER =
    LO.NoopObservableUpDownCounterMetric =
    LO.NoopObservableGaugeMetric =
    LO.NoopObservableCounterMetric =
    LO.NoopObservableMetric =
    LO.NoopHistogramMetric =
    LO.NoopGaugeMetric =
    LO.NoopUpDownCounterMetric =
    LO.NoopCounterMetric =
    LO.NoopMetric =
    LO.NoopMeter =
      void 0;
  class iW {
    constructor() {}
    createGauge($, X) {
      return LO.NOOP_GAUGE_METRIC;
    }
    createHistogram($, X) {
      return LO.NOOP_HISTOGRAM_METRIC;
    }
    createCounter($, X) {
      return LO.NOOP_COUNTER_METRIC;
    }
    createUpDownCounter($, X) {
      return LO.NOOP_UP_DOWN_COUNTER_METRIC;
    }
    createObservableGauge($, X) {
      return LO.NOOP_OBSERVABLE_GAUGE_METRIC;
    }
    createObservableCounter($, X) {
      return LO.NOOP_OBSERVABLE_COUNTER_METRIC;
    }
    createObservableUpDownCounter($, X) {
      return LO.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    }
    addBatchObservableCallback($, X) {}
    removeBatchObservableCallback($) {}
  }
  LO.NoopMeter = iW;
  class Z0 {}
  LO.NoopMetric = Z0;
  class nW extends Z0 {
    add($, X) {}
  }
  LO.NoopCounterMetric = nW;
  class rW extends Z0 {
    add($, X) {}
  }
  LO.NoopUpDownCounterMetric = rW;
  class oW extends Z0 {
    record($, X) {}
  }
  LO.NoopGaugeMetric = oW;
  class tW extends Z0 {
    record($, X) {}
  }
  LO.NoopHistogramMetric = tW;
  class A9 {
    addCallback($) {}
    removeCallback($) {}
  }
  LO.NoopObservableMetric = A9;
  class aW extends A9 {}
  LO.NoopObservableCounterMetric = aW;
  class sW extends A9 {}
  LO.NoopObservableGaugeMetric = sW;
  class eW extends A9 {}
  LO.NoopObservableUpDownCounterMetric = eW;
  LO.NOOP_METER = new iW();
  LO.NOOP_COUNTER_METRIC = new nW();
  LO.NOOP_GAUGE_METRIC = new oW();
  LO.NOOP_HISTOGRAM_METRIC = new tW();
  LO.NOOP_UP_DOWN_COUNTER_METRIC = new rW();
  LO.NOOP_OBSERVABLE_COUNTER_METRIC = new aW();
  LO.NOOP_OBSERVABLE_GAUGE_METRIC = new sW();
  LO.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new eW();
  function yR() {
    return LO.NOOP_METER;
  }
  LO.createNoopMeter = yR;
});
var CO = M((vO) => {
  Object.defineProperty(vO, "__esModule", { value: !0 });
  vO.ValueType = void 0;
  var rR;
  (function ($) {
    (($[($.INT = 0)] = "INT"), ($[($.DOUBLE = 1)] = "DOUBLE"));
  })((rR = vO.ValueType || (vO.ValueType = {})));
});
var Jz = M((kO) => {
  Object.defineProperty(kO, "__esModule", { value: !0 });
  kO.defaultTextMapSetter = kO.defaultTextMapGetter = void 0;
  kO.defaultTextMapGetter = {
    get($, X) {
      if ($ == null) return;
      return $[X];
    },
    keys($) {
      if ($ == null) return [];
      return Object.keys($);
    },
  };
  kO.defaultTextMapSetter = {
    set($, X, J) {
      if ($ == null) return;
      $[X] = J;
    },
  };
});
var yO = M((TO) => {
  Object.defineProperty(TO, "__esModule", { value: !0 });
  TO.NoopContextManager = void 0;
  var tR = M9();
  class xO {
    active() {
      return tR.ROOT_CONTEXT;
    }
    with($, X, J, ...Y) {
      return X.call(J, ...Y);
    }
    bind($, X) {
      return X;
    }
    enable() {
      return this;
    }
    disable() {
      return this;
    }
  }
  TO.NoopContextManager = xO;
});
var I9 = M((hO) => {
  Object.defineProperty(hO, "__esModule", { value: !0 });
  hO.ContextAPI = void 0;
  var aR = yO(),
    Qz = E1(),
    gO = S1(),
    Yz = "context",
    sR = new aR.NoopContextManager();
  class Wz {
    constructor() {}
    static getInstance() {
      if (!this._instance) this._instance = new Wz();
      return this._instance;
    }
    setGlobalContextManager($) {
      return (0, Qz.registerGlobal)(Yz, $, gO.DiagAPI.instance());
    }
    active() {
      return this._getContextManager().active();
    }
    with($, X, J, ...Y) {
      return this._getContextManager().with($, X, J, ...Y);
    }
    bind($, X) {
      return this._getContextManager().bind($, X);
    }
    _getContextManager() {
      return (0, Qz.getGlobal)(Yz) || sR;
    }
    disable() {
      (this._getContextManager().disable(),
        (0, Qz.unregisterGlobal)(Yz, gO.DiagAPI.instance()));
    }
  }
  hO.ContextAPI = Wz;
});
var Gz = M((mO) => {
  Object.defineProperty(mO, "__esModule", { value: !0 });
  mO.TraceFlags = void 0;
  var eR;
  (function ($) {
    (($[($.NONE = 0)] = "NONE"), ($[($.SAMPLED = 1)] = "SAMPLED"));
  })((eR = mO.TraceFlags || (mO.TraceFlags = {})));
});
var w7 = M((lO) => {
  Object.defineProperty(lO, "__esModule", { value: !0 });
  lO.INVALID_SPAN_CONTEXT = lO.INVALID_TRACEID = lO.INVALID_SPANID = void 0;
  var $P = Gz();
  lO.INVALID_SPANID = "0000000000000000";
  lO.INVALID_TRACEID = "00000000000000000000000000000000";
  lO.INVALID_SPAN_CONTEXT = {
    traceId: lO.INVALID_TRACEID,
    spanId: lO.INVALID_SPANID,
    traceFlags: $P.TraceFlags.NONE,
  };
});
var B7 = M((nO) => {
  Object.defineProperty(nO, "__esModule", { value: !0 });
  nO.NonRecordingSpan = void 0;
  var XP = w7();
  class iO {
    constructor($ = XP.INVALID_SPAN_CONTEXT) {
      this._spanContext = $;
    }
    spanContext() {
      return this._spanContext;
    }
    setAttribute($, X) {
      return this;
    }
    setAttributes($) {
      return this;
    }
    addEvent($, X) {
      return this;
    }
    addLink($) {
      return this;
    }
    addLinks($) {
      return this;
    }
    setStatus($) {
      return this;
    }
    updateName($) {
      return this;
    }
    end($) {}
    isRecording() {
      return !1;
    }
    recordException($, X) {}
  }
  nO.NonRecordingSpan = iO;
});
var Kz = M((tO) => {
  Object.defineProperty(tO, "__esModule", { value: !0 });
  tO.getSpanContext =
    tO.setSpanContext =
    tO.deleteSpan =
    tO.setSpan =
    tO.getActiveSpan =
    tO.getSpan =
      void 0;
  var JP = M9(),
    QP = B7(),
    YP = I9(),
    Uz = (0, JP.createContextKey)("OpenTelemetry Context Key SPAN");
  function Hz($) {
    return $.getValue(Uz) || void 0;
  }
  tO.getSpan = Hz;
  function WP() {
    return Hz(YP.ContextAPI.getInstance().active());
  }
  tO.getActiveSpan = WP;
  function oO($, X) {
    return $.setValue(Uz, X);
  }
  tO.setSpan = oO;
  function zP($) {
    return $.deleteValue(Uz);
  }
  tO.deleteSpan = zP;
  function GP($, X) {
    return oO($, new QP.NonRecordingSpan(X));
  }
  tO.setSpanContext = GP;
  function UP($) {
    var X;
    return (X = Hz($)) === null || X === void 0 ? void 0 : X.spanContext();
  }
  tO.getSpanContext = UP;
});
var q7 = M((Xw) => {
  Object.defineProperty(Xw, "__esModule", { value: !0 });
  Xw.wrapSpanContext =
    Xw.isSpanContextValid =
    Xw.isValidSpanId =
    Xw.isValidTraceId =
      void 0;
  var sO = w7(),
    wP = B7(),
    BP = /^([0-9a-f]{32})$/i,
    qP = /^[0-9a-f]{16}$/i;
  function eO($) {
    return BP.test($) && $ !== sO.INVALID_TRACEID;
  }
  Xw.isValidTraceId = eO;
  function $w($) {
    return qP.test($) && $ !== sO.INVALID_SPANID;
  }
  Xw.isValidSpanId = $w;
  function DP($) {
    return eO($.traceId) && $w($.spanId);
  }
  Xw.isSpanContextValid = DP;
  function FP($) {
    return new wP.NonRecordingSpan($);
  }
  Xw.wrapSpanContext = FP;
});
var Oz = M((Ww) => {
  Object.defineProperty(Ww, "__esModule", { value: !0 });
  Ww.NoopTracer = void 0;
  var AP = I9(),
    Qw = Kz(),
    Nz = B7(),
    IP = q7(),
    Vz = AP.ContextAPI.getInstance();
  class Yw {
    startSpan($, X, J = Vz.active()) {
      if (Boolean(X === null || X === void 0 ? void 0 : X.root))
        return new Nz.NonRecordingSpan();
      let Q = J && (0, Qw.getSpanContext)(J);
      if (ZP(Q) && (0, IP.isSpanContextValid)(Q))
        return new Nz.NonRecordingSpan(Q);
      else return new Nz.NonRecordingSpan();
    }
    startActiveSpan($, X, J, Y) {
      let Q, W, z;
      if (arguments.length < 2) return;
      else if (arguments.length === 2) z = X;
      else if (arguments.length === 3) ((Q = X), (z = J));
      else ((Q = X), (W = J), (z = Y));
      let G = W !== null && W !== void 0 ? W : Vz.active(),
        U = this.startSpan($, Q, G),
        H = (0, Qw.setSpan)(G, U);
      return Vz.with(H, z, void 0, U);
    }
  }
  Ww.NoopTracer = Yw;
  function ZP($) {
    return (
      typeof $ === "object" &&
      typeof $.spanId === "string" &&
      typeof $.traceId === "string" &&
      typeof $.traceFlags === "number"
    );
  }
});
var wz = M((Uw) => {
  Object.defineProperty(Uw, "__esModule", { value: !0 });
  Uw.ProxyTracer = void 0;
  var bP = Oz(),
    RP = new bP.NoopTracer();
  class Gw {
    constructor($, X, J, Y) {
      ((this._provider = $),
        (this.name = X),
        (this.version = J),
        (this.options = Y));
    }
    startSpan($, X, J) {
      return this._getTracer().startSpan($, X, J);
    }
    startActiveSpan($, X, J, Y) {
      let Q = this._getTracer();
      return Reflect.apply(Q.startActiveSpan, Q, arguments);
    }
    _getTracer() {
      if (this._delegate) return this._delegate;
      let $ = this._provider.getDelegateTracer(
        this.name,
        this.version,
        this.options,
      );
      if (!$) return RP;
      return ((this._delegate = $), this._delegate);
    }
  }
  Uw.ProxyTracer = Gw;
});
var Ow = M((Nw) => {
  Object.defineProperty(Nw, "__esModule", { value: !0 });
  Nw.NoopTracerProvider = void 0;
  var PP = Oz();
  class Kw {
    getTracer($, X, J) {
      return new PP.NoopTracer();
    }
  }
  Nw.NoopTracerProvider = Kw;
});
var Bz = M((Bw) => {
  Object.defineProperty(Bw, "__esModule", { value: !0 });
  Bw.ProxyTracerProvider = void 0;
  var EP = wz(),
    SP = Ow(),
    vP = new SP.NoopTracerProvider();
  class ww {
    getTracer($, X, J) {
      var Y;
      return (Y = this.getDelegateTracer($, X, J)) !== null && Y !== void 0
        ? Y
        : new EP.ProxyTracer(this, $, X, J);
    }
    getDelegate() {
      var $;
      return ($ = this._delegate) !== null && $ !== void 0 ? $ : vP;
    }
    setDelegate($) {
      this._delegate = $;
    }
    getDelegateTracer($, X, J) {
      var Y;
      return (Y = this._delegate) === null || Y === void 0
        ? void 0
        : Y.getTracer($, X, J);
    }
  }
  Bw.ProxyTracerProvider = ww;
});
var Fw = M((Dw) => {
  Object.defineProperty(Dw, "__esModule", { value: !0 });
  Dw.SamplingDecision = void 0;
  var CP;
  (function ($) {
    (($[($.NOT_RECORD = 0)] = "NOT_RECORD"),
      ($[($.RECORD = 1)] = "RECORD"),
      ($[($.RECORD_AND_SAMPLED = 2)] = "RECORD_AND_SAMPLED"));
  })((CP = Dw.SamplingDecision || (Dw.SamplingDecision = {})));
});
var Lw = M((jw) => {
  Object.defineProperty(jw, "__esModule", { value: !0 });
  jw.SpanKind = void 0;
  var kP;
  (function ($) {
    (($[($.INTERNAL = 0)] = "INTERNAL"),
      ($[($.SERVER = 1)] = "SERVER"),
      ($[($.CLIENT = 2)] = "CLIENT"),
      ($[($.PRODUCER = 3)] = "PRODUCER"),
      ($[($.CONSUMER = 4)] = "CONSUMER"));
  })((kP = jw.SpanKind || (jw.SpanKind = {})));
});
var Aw = M((Mw) => {
  Object.defineProperty(Mw, "__esModule", { value: !0 });
  Mw.SpanStatusCode = void 0;
  var _P;
  (function ($) {
    (($[($.UNSET = 0)] = "UNSET"),
      ($[($.OK = 1)] = "OK"),
      ($[($.ERROR = 2)] = "ERROR"));
  })((_P = Mw.SpanStatusCode || (Mw.SpanStatusCode = {})));
});
var bw = M((Iw) => {
  Object.defineProperty(Iw, "__esModule", { value: !0 });
  Iw.validateValue = Iw.validateKey = void 0;
  var jz = "[_0-9a-z-*/]",
    xP = `[a-z]${jz}{0,255}`,
    TP = `[a-z0-9]${jz}{0,240}@[a-z]${jz}{0,13}`,
    fP = new RegExp(`^(?:${xP}|${TP})$`),
    yP = /^[ -~]{0,255}[!-~]$/,
    gP = /,|=/;
  function hP($) {
    return fP.test($);
  }
  Iw.validateKey = hP;
  function uP($) {
    return yP.test($) && !gP.test($);
  }
  Iw.validateValue = uP;
});
var kw = M((vw) => {
  Object.defineProperty(vw, "__esModule", { value: !0 });
  vw.TraceStateImpl = void 0;
  var Rw = bw(),
    Pw = 32,
    lP = 512,
    Ew = ",",
    Sw = "=";
  class Lz {
    constructor($) {
      if (((this._internalState = new Map()), $)) this._parse($);
    }
    set($, X) {
      let J = this._clone();
      if (J._internalState.has($)) J._internalState.delete($);
      return (J._internalState.set($, X), J);
    }
    unset($) {
      let X = this._clone();
      return (X._internalState.delete($), X);
    }
    get($) {
      return this._internalState.get($);
    }
    serialize() {
      return this._keys()
        .reduce(($, X) => {
          return ($.push(X + Sw + this.get(X)), $);
        }, [])
        .join(Ew);
    }
    _parse($) {
      if ($.length > lP) return;
      if (
        ((this._internalState = $.split(Ew)
          .reverse()
          .reduce((X, J) => {
            let Y = J.trim(),
              Q = Y.indexOf(Sw);
            if (Q !== -1) {
              let W = Y.slice(0, Q),
                z = Y.slice(Q + 1, J.length);
              if ((0, Rw.validateKey)(W) && (0, Rw.validateValue)(z))
                X.set(W, z);
            }
            return X;
          }, new Map())),
        this._internalState.size > Pw)
      )
        this._internalState = new Map(
          Array.from(this._internalState.entries()).reverse().slice(0, Pw),
        );
    }
    _keys() {
      return Array.from(this._internalState.keys()).reverse();
    }
    _clone() {
      let $ = new Lz();
      return (($._internalState = new Map(this._internalState)), $);
    }
  }
  vw.TraceStateImpl = Lz;
});
var Tw = M((_w) => {
  Object.defineProperty(_w, "__esModule", { value: !0 });
  _w.createTraceState = void 0;
  var cP = kw();
  function dP($) {
    return new cP.TraceStateImpl($);
  }
  _w.createTraceState = dP;
});
var gw = M((fw) => {
  Object.defineProperty(fw, "__esModule", { value: !0 });
  fw.context = void 0;
  var pP = I9();
  fw.context = pP.ContextAPI.getInstance();
});
var mw = M((hw) => {
  Object.defineProperty(hw, "__esModule", { value: !0 });
  hw.diag = void 0;
  var iP = S1();
  hw.diag = iP.DiagAPI.instance();
});
var dw = M((lw) => {
  Object.defineProperty(lw, "__esModule", { value: !0 });
  lw.NOOP_METER_PROVIDER = lw.NoopMeterProvider = void 0;
  var nP = $z();
  class Mz {
    getMeter($, X, J) {
      return nP.NOOP_METER;
    }
  }
  lw.NoopMeterProvider = Mz;
  lw.NOOP_METER_PROVIDER = new Mz();
});
var rw = M((iw) => {
  Object.defineProperty(iw, "__esModule", { value: !0 });
  iw.MetricsAPI = void 0;
  var oP = dw(),
    Az = E1(),
    pw = S1(),
    Iz = "metrics";
  class Zz {
    constructor() {}
    static getInstance() {
      if (!this._instance) this._instance = new Zz();
      return this._instance;
    }
    setGlobalMeterProvider($) {
      return (0, Az.registerGlobal)(Iz, $, pw.DiagAPI.instance());
    }
    getMeterProvider() {
      return (0, Az.getGlobal)(Iz) || oP.NOOP_METER_PROVIDER;
    }
    getMeter($, X, J) {
      return this.getMeterProvider().getMeter($, X, J);
    }
    disable() {
      (0, Az.unregisterGlobal)(Iz, pw.DiagAPI.instance());
    }
  }
  iw.MetricsAPI = Zz;
});
var aw = M((ow) => {
  Object.defineProperty(ow, "__esModule", { value: !0 });
  ow.metrics = void 0;
  var tP = rw();
  ow.metrics = tP.MetricsAPI.getInstance();
});
var XB = M((ew) => {
  Object.defineProperty(ew, "__esModule", { value: !0 });
  ew.NoopTextMapPropagator = void 0;
  class sw {
    inject($, X) {}
    extract($, X) {
      return $;
    }
    fields() {
      return [];
    }
  }
  ew.NoopTextMapPropagator = sw;
});
var WB = M((QB) => {
  Object.defineProperty(QB, "__esModule", { value: !0 });
  QB.deleteBaggage =
    QB.setBaggage =
    QB.getActiveBaggage =
    QB.getBaggage =
      void 0;
  var aP = I9(),
    sP = M9(),
    bz = (0, sP.createContextKey)("OpenTelemetry Baggage Key");
  function JB($) {
    return $.getValue(bz) || void 0;
  }
  QB.getBaggage = JB;
  function eP() {
    return JB(aP.ContextAPI.getInstance().active());
  }
  QB.getActiveBaggage = eP;
  function $E($, X) {
    return $.setValue(bz, X);
  }
  QB.setBaggage = $E;
  function XE($) {
    return $.deleteValue(bz);
  }
  QB.deleteBaggage = XE;
});
var KB = M((UB) => {
  Object.defineProperty(UB, "__esModule", { value: !0 });
  UB.PropagationAPI = void 0;
  var Rz = E1(),
    WE = XB(),
    zB = Jz(),
    D7 = WB(),
    zE = dW(),
    GB = S1(),
    Pz = "propagation",
    GE = new WE.NoopTextMapPropagator();
  class Ez {
    constructor() {
      ((this.createBaggage = zE.createBaggage),
        (this.getBaggage = D7.getBaggage),
        (this.getActiveBaggage = D7.getActiveBaggage),
        (this.setBaggage = D7.setBaggage),
        (this.deleteBaggage = D7.deleteBaggage));
    }
    static getInstance() {
      if (!this._instance) this._instance = new Ez();
      return this._instance;
    }
    setGlobalPropagator($) {
      return (0, Rz.registerGlobal)(Pz, $, GB.DiagAPI.instance());
    }
    inject($, X, J = zB.defaultTextMapSetter) {
      return this._getGlobalPropagator().inject($, X, J);
    }
    extract($, X, J = zB.defaultTextMapGetter) {
      return this._getGlobalPropagator().extract($, X, J);
    }
    fields() {
      return this._getGlobalPropagator().fields();
    }
    disable() {
      (0, Rz.unregisterGlobal)(Pz, GB.DiagAPI.instance());
    }
    _getGlobalPropagator() {
      return (0, Rz.getGlobal)(Pz) || GE;
    }
  }
  UB.PropagationAPI = Ez;
});
var OB = M((NB) => {
  Object.defineProperty(NB, "__esModule", { value: !0 });
  NB.propagation = void 0;
  var UE = KB();
  NB.propagation = UE.PropagationAPI.getInstance();
});
var jB = M((DB) => {
  Object.defineProperty(DB, "__esModule", { value: !0 });
  DB.TraceAPI = void 0;
  var Sz = E1(),
    wB = Bz(),
    BB = q7(),
    b0 = Kz(),
    qB = S1(),
    vz = "trace";
  class Cz {
    constructor() {
      ((this._proxyTracerProvider = new wB.ProxyTracerProvider()),
        (this.wrapSpanContext = BB.wrapSpanContext),
        (this.isSpanContextValid = BB.isSpanContextValid),
        (this.deleteSpan = b0.deleteSpan),
        (this.getSpan = b0.getSpan),
        (this.getActiveSpan = b0.getActiveSpan),
        (this.getSpanContext = b0.getSpanContext),
        (this.setSpan = b0.setSpan),
        (this.setSpanContext = b0.setSpanContext));
    }
    static getInstance() {
      if (!this._instance) this._instance = new Cz();
      return this._instance;
    }
    setGlobalTracerProvider($) {
      let X = (0, Sz.registerGlobal)(
        vz,
        this._proxyTracerProvider,
        qB.DiagAPI.instance(),
      );
      if (X) this._proxyTracerProvider.setDelegate($);
      return X;
    }
    getTracerProvider() {
      return (0, Sz.getGlobal)(vz) || this._proxyTracerProvider;
    }
    getTracer($, X) {
      return this.getTracerProvider().getTracer($, X);
    }
    disable() {
      ((0, Sz.unregisterGlobal)(vz, qB.DiagAPI.instance()),
        (this._proxyTracerProvider = new wB.ProxyTracerProvider()));
    }
  }
  DB.TraceAPI = Cz;
});
var AB = M((LB) => {
  Object.defineProperty(LB, "__esModule", { value: !0 });
  LB.trace = void 0;
  var HE = jB();
  LB.trace = HE.TraceAPI.getInstance();
});
var xz = M((U$) => {
  Object.defineProperty(U$, "__esModule", { value: !0 });
  U$.trace =
    U$.propagation =
    U$.metrics =
    U$.diag =
    U$.context =
    U$.INVALID_SPAN_CONTEXT =
    U$.INVALID_TRACEID =
    U$.INVALID_SPANID =
    U$.isValidSpanId =
    U$.isValidTraceId =
    U$.isSpanContextValid =
    U$.createTraceState =
    U$.TraceFlags =
    U$.SpanStatusCode =
    U$.SpanKind =
    U$.SamplingDecision =
    U$.ProxyTracerProvider =
    U$.ProxyTracer =
    U$.defaultTextMapSetter =
    U$.defaultTextMapGetter =
    U$.ValueType =
    U$.createNoopMeter =
    U$.DiagLogLevel =
    U$.DiagConsoleLogger =
    U$.ROOT_CONTEXT =
    U$.createContextKey =
    U$.baggageEntryMetadataFromString =
      void 0;
  var KE = dW();
  Object.defineProperty(U$, "baggageEntryMetadataFromString", {
    enumerable: !0,
    get: function () {
      return KE.baggageEntryMetadataFromString;
    },
  });
  var IB = M9();
  Object.defineProperty(U$, "createContextKey", {
    enumerable: !0,
    get: function () {
      return IB.createContextKey;
    },
  });
  Object.defineProperty(U$, "ROOT_CONTEXT", {
    enumerable: !0,
    get: function () {
      return IB.ROOT_CONTEXT;
    },
  });
  var NE = jO();
  Object.defineProperty(U$, "DiagConsoleLogger", {
    enumerable: !0,
    get: function () {
      return NE.DiagConsoleLogger;
    },
  });
  var VE = N7();
  Object.defineProperty(U$, "DiagLogLevel", {
    enumerable: !0,
    get: function () {
      return VE.DiagLogLevel;
    },
  });
  var OE = $z();
  Object.defineProperty(U$, "createNoopMeter", {
    enumerable: !0,
    get: function () {
      return OE.createNoopMeter;
    },
  });
  var wE = CO();
  Object.defineProperty(U$, "ValueType", {
    enumerable: !0,
    get: function () {
      return wE.ValueType;
    },
  });
  var ZB = Jz();
  Object.defineProperty(U$, "defaultTextMapGetter", {
    enumerable: !0,
    get: function () {
      return ZB.defaultTextMapGetter;
    },
  });
  Object.defineProperty(U$, "defaultTextMapSetter", {
    enumerable: !0,
    get: function () {
      return ZB.defaultTextMapSetter;
    },
  });
  var BE = wz();
  Object.defineProperty(U$, "ProxyTracer", {
    enumerable: !0,
    get: function () {
      return BE.ProxyTracer;
    },
  });
  var qE = Bz();
  Object.defineProperty(U$, "ProxyTracerProvider", {
    enumerable: !0,
    get: function () {
      return qE.ProxyTracerProvider;
    },
  });
  var DE = Fw();
  Object.defineProperty(U$, "SamplingDecision", {
    enumerable: !0,
    get: function () {
      return DE.SamplingDecision;
    },
  });
  var FE = Lw();
  Object.defineProperty(U$, "SpanKind", {
    enumerable: !0,
    get: function () {
      return FE.SpanKind;
    },
  });
  var jE = Aw();
  Object.defineProperty(U$, "SpanStatusCode", {
    enumerable: !0,
    get: function () {
      return jE.SpanStatusCode;
    },
  });
  var LE = Gz();
  Object.defineProperty(U$, "TraceFlags", {
    enumerable: !0,
    get: function () {
      return LE.TraceFlags;
    },
  });
  var ME = Tw();
  Object.defineProperty(U$, "createTraceState", {
    enumerable: !0,
    get: function () {
      return ME.createTraceState;
    },
  });
  var kz = q7();
  Object.defineProperty(U$, "isSpanContextValid", {
    enumerable: !0,
    get: function () {
      return kz.isSpanContextValid;
    },
  });
  Object.defineProperty(U$, "isValidTraceId", {
    enumerable: !0,
    get: function () {
      return kz.isValidTraceId;
    },
  });
  Object.defineProperty(U$, "isValidSpanId", {
    enumerable: !0,
    get: function () {
      return kz.isValidSpanId;
    },
  });
  var _z = w7();
  Object.defineProperty(U$, "INVALID_SPANID", {
    enumerable: !0,
    get: function () {
      return _z.INVALID_SPANID;
    },
  });
  Object.defineProperty(U$, "INVALID_TRACEID", {
    enumerable: !0,
    get: function () {
      return _z.INVALID_TRACEID;
    },
  });
  Object.defineProperty(U$, "INVALID_SPAN_CONTEXT", {
    enumerable: !0,
    get: function () {
      return _z.INVALID_SPAN_CONTEXT;
    },
  });
  var bB = gw();
  Object.defineProperty(U$, "context", {
    enumerable: !0,
    get: function () {
      return bB.context;
    },
  });
  var RB = mw();
  Object.defineProperty(U$, "diag", {
    enumerable: !0,
    get: function () {
      return RB.diag;
    },
  });
  var PB = aw();
  Object.defineProperty(U$, "metrics", {
    enumerable: !0,
    get: function () {
      return PB.metrics;
    },
  });
  var EB = OB();
  Object.defineProperty(U$, "propagation", {
    enumerable: !0,
    get: function () {
      return EB.propagation;
    },
  });
  var SB = AB();
  Object.defineProperty(U$, "trace", {
    enumerable: !0,
    get: function () {
      return SB.trace;
    },
  });
  U$.default = {
    context: bB.context,
    diag: RB.diag,
    metrics: PB.metrics,
    propagation: EB.propagation,
    trace: SB.trace,
  };
});
var JJ = M((SF) => {
  Object.defineProperty(SF, "__esModule", { value: !0 });
  SF.regexpCode =
    SF.getEsmExportName =
    SF.getProperty =
    SF.safeStringify =
    SF.stringify =
    SF.strConcat =
    SF.addCodeArg =
    SF.str =
    SF._ =
    SF.nil =
    SF._Code =
    SF.Name =
    SF.IDENTIFIER =
    SF._CodeOrName =
      void 0;
  class UY {}
  SF._CodeOrName = UY;
  SF.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class z8 extends UY {
    constructor($) {
      super();
      if (!SF.IDENTIFIER.test($))
        throw Error("CodeGen: name must be a valid identifier");
      this.str = $;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return !1;
    }
    get names() {
      return { [this.str]: 1 };
    }
  }
  SF.Name = z8;
  class d6 extends UY {
    constructor($) {
      super();
      this._items = typeof $ === "string" ? [$] : $;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1) return !1;
      let $ = this._items[0];
      return $ === "" || $ === '""';
    }
    get str() {
      var $;
      return ($ = this._str) !== null && $ !== void 0
        ? $
        : (this._str = this._items.reduce((X, J) => `${X}${J}`, ""));
    }
    get names() {
      var $;
      return ($ = this._names) !== null && $ !== void 0
        ? $
        : (this._names = this._items.reduce((X, J) => {
            if (J instanceof z8) X[J.str] = (X[J.str] || 0) + 1;
            return X;
          }, {}));
    }
  }
  SF._Code = d6;
  SF.nil = new d6("");
  function PF($, ...X) {
    let J = [$[0]],
      Y = 0;
    while (Y < X.length) (jH(J, X[Y]), J.push($[++Y]));
    return new d6(J);
  }
  SF._ = PF;
  var FH = new d6("+");
  function EF($, ...X) {
    let J = [XJ($[0])],
      Y = 0;
    while (Y < X.length) (J.push(FH), jH(J, X[Y]), J.push(FH, XJ($[++Y])));
    return (fx(J), new d6(J));
  }
  SF.str = EF;
  function jH($, X) {
    if (X instanceof d6) $.push(...X._items);
    else if (X instanceof z8) $.push(X);
    else $.push(hx(X));
  }
  SF.addCodeArg = jH;
  function fx($) {
    let X = 1;
    while (X < $.length - 1) {
      if ($[X] === FH) {
        let J = yx($[X - 1], $[X + 1]);
        if (J !== void 0) {
          $.splice(X - 1, 3, J);
          continue;
        }
        $[X++] = "+";
      }
      X++;
    }
  }
  function yx($, X) {
    if (X === '""') return $;
    if ($ === '""') return X;
    if (typeof $ == "string") {
      if (X instanceof z8 || $[$.length - 1] !== '"') return;
      if (typeof X != "string") return `${$.slice(0, -1)}${X}"`;
      if (X[0] === '"') return $.slice(0, -1) + X.slice(1);
      return;
    }
    if (typeof X == "string" && X[0] === '"' && !($ instanceof z8))
      return `"${$}${X.slice(1)}`;
    return;
  }
  function gx($, X) {
    return X.emptyStr() ? $ : $.emptyStr() ? X : EF`${$}${X}`;
  }
  SF.strConcat = gx;
  function hx($) {
    return typeof $ == "number" || typeof $ == "boolean" || $ === null
      ? $
      : XJ(Array.isArray($) ? $.join(",") : $);
  }
  function ux($) {
    return new d6(XJ($));
  }
  SF.stringify = ux;
  function XJ($) {
    return JSON.stringify($)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029");
  }
  SF.safeStringify = XJ;
  function mx($) {
    return typeof $ == "string" && SF.IDENTIFIER.test($)
      ? new d6(`.${$}`)
      : PF`[${$}]`;
  }
  SF.getProperty = mx;
  function lx($) {
    if (typeof $ == "string" && SF.IDENTIFIER.test($)) return new d6(`${$}`);
    throw Error(
      `CodeGen: invalid export name: ${$}, use explicit $id name mapping`,
    );
  }
  SF.getEsmExportName = lx;
  function cx($) {
    return new d6($.toString());
  }
  SF.regexpCode = cx;
});
var IH = M((_F) => {
  Object.defineProperty(_F, "__esModule", { value: !0 });
  _F.ValueScope =
    _F.ValueScopeName =
    _F.Scope =
    _F.varKinds =
    _F.UsedValueState =
      void 0;
  var U6 = JJ();
  class CF extends Error {
    constructor($) {
      super(`CodeGen: "code" for ${$} not defined`);
      this.value = $.value;
    }
  }
  var KY;
  (function ($) {
    (($[($.Started = 0)] = "Started"), ($[($.Completed = 1)] = "Completed"));
  })(KY || (_F.UsedValueState = KY = {}));
  _F.varKinds = {
    const: new U6.Name("const"),
    let: new U6.Name("let"),
    var: new U6.Name("var"),
  };
  class MH {
    constructor({ prefixes: $, parent: X } = {}) {
      ((this._names = {}), (this._prefixes = $), (this._parent = X));
    }
    toName($) {
      return $ instanceof U6.Name ? $ : this.name($);
    }
    name($) {
      return new U6.Name(this._newName($));
    }
    _newName($) {
      let X = this._names[$] || this._nameGroup($);
      return `${$}${X.index++}`;
    }
    _nameGroup($) {
      var X, J;
      if (
        ((J =
          (X = this._parent) === null || X === void 0
            ? void 0
            : X._prefixes) === null || J === void 0
          ? void 0
          : J.has($)) ||
        (this._prefixes && !this._prefixes.has($))
      )
        throw Error(`CodeGen: prefix "${$}" is not allowed in this scope`);
      return (this._names[$] = { prefix: $, index: 0 });
    }
  }
  _F.Scope = MH;
  class AH extends U6.Name {
    constructor($, X) {
      super(X);
      this.prefix = $;
    }
    setValue($, { property: X, itemIndex: J }) {
      ((this.value = $), (this.scopePath = U6._`.${new U6.Name(X)}[${J}]`));
    }
  }
  _F.ValueScopeName = AH;
  var JT = U6._`\n`;
  class kF extends MH {
    constructor($) {
      super($);
      ((this._values = {}),
        (this._scope = $.scope),
        (this.opts = { ...$, _n: $.lines ? JT : U6.nil }));
    }
    get() {
      return this._scope;
    }
    name($) {
      return new AH($, this._newName($));
    }
    value($, X) {
      var J;
      if (X.ref === void 0) throw Error("CodeGen: ref must be passed in value");
      let Y = this.toName($),
        { prefix: Q } = Y,
        W = (J = X.key) !== null && J !== void 0 ? J : X.ref,
        z = this._values[Q];
      if (z) {
        let H = z.get(W);
        if (H) return H;
      } else z = this._values[Q] = new Map();
      z.set(W, Y);
      let G = this._scope[Q] || (this._scope[Q] = []),
        U = G.length;
      return ((G[U] = X.ref), Y.setValue(X, { property: Q, itemIndex: U }), Y);
    }
    getValue($, X) {
      let J = this._values[$];
      if (!J) return;
      return J.get(X);
    }
    scopeRefs($, X = this._values) {
      return this._reduceValues(X, (J) => {
        if (J.scopePath === void 0)
          throw Error(`CodeGen: name "${J}" has no value`);
        return U6._`${$}${J.scopePath}`;
      });
    }
    scopeCode($ = this._values, X, J) {
      return this._reduceValues(
        $,
        (Y) => {
          if (Y.value === void 0)
            throw Error(`CodeGen: name "${Y}" has no value`);
          return Y.value.code;
        },
        X,
        J,
      );
    }
    _reduceValues($, X, J = {}, Y) {
      let Q = U6.nil;
      for (let W in $) {
        let z = $[W];
        if (!z) continue;
        let G = (J[W] = J[W] || new Map());
        z.forEach((U) => {
          if (G.has(U)) return;
          G.set(U, KY.Started);
          let H = X(U);
          if (H) {
            let K = this.opts.es5 ? _F.varKinds.var : _F.varKinds.const;
            Q = U6._`${Q}${K} ${U} = ${H};${this.opts._n}`;
          } else if ((H = Y === null || Y === void 0 ? void 0 : Y(U)))
            Q = U6._`${Q}${H}${this.opts._n}`;
          else throw new CF(U);
          G.set(U, KY.Completed);
        });
      }
      return Q;
    }
  }
  _F.ValueScope = kF;
});
var a = M((H6) => {
  Object.defineProperty(H6, "__esModule", { value: !0 });
  H6.or =
    H6.and =
    H6.not =
    H6.CodeGen =
    H6.operators =
    H6.varKinds =
    H6.ValueScopeName =
    H6.ValueScope =
    H6.Scope =
    H6.Name =
    H6.regexpCode =
    H6.stringify =
    H6.getProperty =
    H6.nil =
    H6.strConcat =
    H6.str =
    H6._ =
      void 0;
  var Q$ = JJ(),
    p6 = IH(),
    G1 = JJ();
  Object.defineProperty(H6, "_", {
    enumerable: !0,
    get: function () {
      return G1._;
    },
  });
  Object.defineProperty(H6, "str", {
    enumerable: !0,
    get: function () {
      return G1.str;
    },
  });
  Object.defineProperty(H6, "strConcat", {
    enumerable: !0,
    get: function () {
      return G1.strConcat;
    },
  });
  Object.defineProperty(H6, "nil", {
    enumerable: !0,
    get: function () {
      return G1.nil;
    },
  });
  Object.defineProperty(H6, "getProperty", {
    enumerable: !0,
    get: function () {
      return G1.getProperty;
    },
  });
  Object.defineProperty(H6, "stringify", {
    enumerable: !0,
    get: function () {
      return G1.stringify;
    },
  });
  Object.defineProperty(H6, "regexpCode", {
    enumerable: !0,
    get: function () {
      return G1.regexpCode;
    },
  });
  Object.defineProperty(H6, "Name", {
    enumerable: !0,
    get: function () {
      return G1.Name;
    },
  });
  var qY = IH();
  Object.defineProperty(H6, "Scope", {
    enumerable: !0,
    get: function () {
      return qY.Scope;
    },
  });
  Object.defineProperty(H6, "ValueScope", {
    enumerable: !0,
    get: function () {
      return qY.ValueScope;
    },
  });
  Object.defineProperty(H6, "ValueScopeName", {
    enumerable: !0,
    get: function () {
      return qY.ValueScopeName;
    },
  });
  Object.defineProperty(H6, "varKinds", {
    enumerable: !0,
    get: function () {
      return qY.varKinds;
    },
  });
  H6.operators = {
    GT: new Q$._Code(">"),
    GTE: new Q$._Code(">="),
    LT: new Q$._Code("<"),
    LTE: new Q$._Code("<="),
    EQ: new Q$._Code("==="),
    NEQ: new Q$._Code("!=="),
    NOT: new Q$._Code("!"),
    OR: new Q$._Code("||"),
    AND: new Q$._Code("&&"),
    ADD: new Q$._Code("+"),
  };
  class U1 {
    optimizeNodes() {
      return this;
    }
    optimizeNames($, X) {
      return this;
    }
  }
  class TF extends U1 {
    constructor($, X, J) {
      super();
      ((this.varKind = $), (this.name = X), (this.rhs = J));
    }
    render({ es5: $, _n: X }) {
      let J = $ ? p6.varKinds.var : this.varKind,
        Y = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${J} ${this.name}${Y};` + X;
    }
    optimizeNames($, X) {
      if (!$[this.name.str]) return;
      if (this.rhs) this.rhs = U8(this.rhs, $, X);
      return this;
    }
    get names() {
      return this.rhs instanceof Q$._CodeOrName ? this.rhs.names : {};
    }
  }
  class RH extends U1 {
    constructor($, X, J) {
      super();
      ((this.lhs = $), (this.rhs = X), (this.sideEffects = J));
    }
    render({ _n: $ }) {
      return `${this.lhs} = ${this.rhs};` + $;
    }
    optimizeNames($, X) {
      if (this.lhs instanceof Q$.Name && !$[this.lhs.str] && !this.sideEffects)
        return;
      return ((this.rhs = U8(this.rhs, $, X)), this);
    }
    get names() {
      let $ = this.lhs instanceof Q$.Name ? {} : { ...this.lhs.names };
      return BY($, this.rhs);
    }
  }
  class fF extends RH {
    constructor($, X, J, Y) {
      super($, J, Y);
      this.op = X;
    }
    render({ _n: $ }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + $;
    }
  }
  class yF extends U1 {
    constructor($) {
      super();
      ((this.label = $), (this.names = {}));
    }
    render({ _n: $ }) {
      return `${this.label}:` + $;
    }
  }
  class gF extends U1 {
    constructor($) {
      super();
      ((this.label = $), (this.names = {}));
    }
    render({ _n: $ }) {
      return `break${this.label ? ` ${this.label}` : ""};` + $;
    }
  }
  class hF extends U1 {
    constructor($) {
      super();
      this.error = $;
    }
    render({ _n: $ }) {
      return `throw ${this.error};` + $;
    }
    get names() {
      return this.error.names;
    }
  }
  class uF extends U1 {
    constructor($) {
      super();
      this.code = $;
    }
    render({ _n: $ }) {
      return `${this.code};` + $;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames($, X) {
      return ((this.code = U8(this.code, $, X)), this);
    }
    get names() {
      return this.code instanceof Q$._CodeOrName ? this.code.names : {};
    }
  }
  class DY extends U1 {
    constructor($ = []) {
      super();
      this.nodes = $;
    }
    render($) {
      return this.nodes.reduce((X, J) => X + J.render($), "");
    }
    optimizeNodes() {
      let { nodes: $ } = this,
        X = $.length;
      while (X--) {
        let J = $[X].optimizeNodes();
        if (Array.isArray(J)) $.splice(X, 1, ...J);
        else if (J) $[X] = J;
        else $.splice(X, 1);
      }
      return $.length > 0 ? this : void 0;
    }
    optimizeNames($, X) {
      let { nodes: J } = this,
        Y = J.length;
      while (Y--) {
        let Q = J[Y];
        if (Q.optimizeNames($, X)) continue;
        (zT($, Q.names), J.splice(Y, 1));
      }
      return J.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce(($, X) => i1($, X.names), {});
    }
  }
  class H1 extends DY {
    render($) {
      return "{" + $._n + super.render($) + "}" + $._n;
    }
  }
  class mF extends DY {}
  class QJ extends H1 {}
  QJ.kind = "else";
  class E4 extends H1 {
    constructor($, X) {
      super(X);
      this.condition = $;
    }
    render($) {
      let X = `if(${this.condition})` + super.render($);
      if (this.else) X += "else " + this.else.render($);
      return X;
    }
    optimizeNodes() {
      super.optimizeNodes();
      let $ = this.condition;
      if ($ === !0) return this.nodes;
      let X = this.else;
      if (X) {
        let J = X.optimizeNodes();
        X = this.else = Array.isArray(J) ? new QJ(J) : J;
      }
      if (X) {
        if ($ === !1) return X instanceof E4 ? X : X.nodes;
        if (this.nodes.length) return this;
        return new E4(iF($), X instanceof E4 ? [X] : X.nodes);
      }
      if ($ === !1 || !this.nodes.length) return;
      return this;
    }
    optimizeNames($, X) {
      var J;
      if (
        ((this.else =
          (J = this.else) === null || J === void 0
            ? void 0
            : J.optimizeNames($, X)),
        !(super.optimizeNames($, X) || this.else))
      )
        return;
      return ((this.condition = U8(this.condition, $, X)), this);
    }
    get names() {
      let $ = super.names;
      if ((BY($, this.condition), this.else)) i1($, this.else.names);
      return $;
    }
  }
  E4.kind = "if";
  class G8 extends H1 {}
  G8.kind = "for";
  class lF extends G8 {
    constructor($) {
      super();
      this.iteration = $;
    }
    render($) {
      return `for(${this.iteration})` + super.render($);
    }
    optimizeNames($, X) {
      if (!super.optimizeNames($, X)) return;
      return ((this.iteration = U8(this.iteration, $, X)), this);
    }
    get names() {
      return i1(super.names, this.iteration.names);
    }
  }
  class cF extends G8 {
    constructor($, X, J, Y) {
      super();
      ((this.varKind = $), (this.name = X), (this.from = J), (this.to = Y));
    }
    render($) {
      let X = $.es5 ? p6.varKinds.var : this.varKind,
        { name: J, from: Y, to: Q } = this;
      return `for(${X} ${J}=${Y}; ${J}<${Q}; ${J}++)` + super.render($);
    }
    get names() {
      let $ = BY(super.names, this.from);
      return BY($, this.to);
    }
  }
  class ZH extends G8 {
    constructor($, X, J, Y) {
      super();
      ((this.loop = $),
        (this.varKind = X),
        (this.name = J),
        (this.iterable = Y));
    }
    render($) {
      return (
        `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` +
        super.render($)
      );
    }
    optimizeNames($, X) {
      if (!super.optimizeNames($, X)) return;
      return ((this.iterable = U8(this.iterable, $, X)), this);
    }
    get names() {
      return i1(super.names, this.iterable.names);
    }
  }
  class NY extends H1 {
    constructor($, X, J) {
      super();
      ((this.name = $), (this.args = X), (this.async = J));
    }
    render($) {
      return (
        `${this.async ? "async " : ""}function ${this.name}(${this.args})` +
        super.render($)
      );
    }
  }
  NY.kind = "func";
  class VY extends DY {
    render($) {
      return "return " + super.render($);
    }
  }
  VY.kind = "return";
  class dF extends H1 {
    render($) {
      let X = "try" + super.render($);
      if (this.catch) X += this.catch.render($);
      if (this.finally) X += this.finally.render($);
      return X;
    }
    optimizeNodes() {
      var $, X;
      return (
        super.optimizeNodes(),
        ($ = this.catch) === null || $ === void 0 || $.optimizeNodes(),
        (X = this.finally) === null || X === void 0 || X.optimizeNodes(),
        this
      );
    }
    optimizeNames($, X) {
      var J, Y;
      return (
        super.optimizeNames($, X),
        (J = this.catch) === null || J === void 0 || J.optimizeNames($, X),
        (Y = this.finally) === null || Y === void 0 || Y.optimizeNames($, X),
        this
      );
    }
    get names() {
      let $ = super.names;
      if (this.catch) i1($, this.catch.names);
      if (this.finally) i1($, this.finally.names);
      return $;
    }
  }
  class OY extends H1 {
    constructor($) {
      super();
      this.error = $;
    }
    render($) {
      return `catch(${this.error})` + super.render($);
    }
  }
  OY.kind = "catch";
  class wY extends H1 {
    render($) {
      return "finally" + super.render($);
    }
  }
  wY.kind = "finally";
  class pF {
    constructor($, X = {}) {
      ((this._values = {}),
        (this._blockStarts = []),
        (this._constants = {}),
        (this.opts = {
          ...X,
          _n: X.lines
            ? `
`
            : "",
        }),
        (this._extScope = $),
        (this._scope = new p6.Scope({ parent: $ })),
        (this._nodes = [new mF()]));
    }
    toString() {
      return this._root.render(this.opts);
    }
    name($) {
      return this._scope.name($);
    }
    scopeName($) {
      return this._extScope.name($);
    }
    scopeValue($, X) {
      let J = this._extScope.value($, X);
      return (
        (this._values[J.prefix] || (this._values[J.prefix] = new Set())).add(J),
        J
      );
    }
    getScopeValue($, X) {
      return this._extScope.getValue($, X);
    }
    scopeRefs($) {
      return this._extScope.scopeRefs($, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def($, X, J, Y) {
      let Q = this._scope.toName(X);
      if (J !== void 0 && Y) this._constants[Q.str] = J;
      return (this._leafNode(new TF($, Q, J)), Q);
    }
    const($, X, J) {
      return this._def(p6.varKinds.const, $, X, J);
    }
    let($, X, J) {
      return this._def(p6.varKinds.let, $, X, J);
    }
    var($, X, J) {
      return this._def(p6.varKinds.var, $, X, J);
    }
    assign($, X, J) {
      return this._leafNode(new RH($, X, J));
    }
    add($, X) {
      return this._leafNode(new fF($, H6.operators.ADD, X));
    }
    code($) {
      if (typeof $ == "function") $();
      else if ($ !== Q$.nil) this._leafNode(new uF($));
      return this;
    }
    object(...$) {
      let X = ["{"];
      for (let [J, Y] of $) {
        if (X.length > 1) X.push(",");
        if ((X.push(J), J !== Y || this.opts.es5))
          (X.push(":"), (0, Q$.addCodeArg)(X, Y));
      }
      return (X.push("}"), new Q$._Code(X));
    }
    if($, X, J) {
      if ((this._blockNode(new E4($)), X && J))
        this.code(X).else().code(J).endIf();
      else if (X) this.code(X).endIf();
      else if (J) throw Error('CodeGen: "else" body without "then" body');
      return this;
    }
    elseIf($) {
      return this._elseNode(new E4($));
    }
    else() {
      return this._elseNode(new QJ());
    }
    endIf() {
      return this._endBlockNode(E4, QJ);
    }
    _for($, X) {
      if ((this._blockNode($), X)) this.code(X).endFor();
      return this;
    }
    for($, X) {
      return this._for(new lF($), X);
    }
    forRange(
      $,
      X,
      J,
      Y,
      Q = this.opts.es5 ? p6.varKinds.var : p6.varKinds.let,
    ) {
      let W = this._scope.toName($);
      return this._for(new cF(Q, W, X, J), () => Y(W));
    }
    forOf($, X, J, Y = p6.varKinds.const) {
      let Q = this._scope.toName($);
      if (this.opts.es5) {
        let W = X instanceof Q$.Name ? X : this.var("_arr", X);
        return this.forRange("_i", 0, Q$._`${W}.length`, (z) => {
          (this.var(Q, Q$._`${W}[${z}]`), J(Q));
        });
      }
      return this._for(new ZH("of", Y, Q, X), () => J(Q));
    }
    forIn($, X, J, Y = this.opts.es5 ? p6.varKinds.var : p6.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf($, Q$._`Object.keys(${X})`, J);
      let Q = this._scope.toName($);
      return this._for(new ZH("in", Y, Q, X), () => J(Q));
    }
    endFor() {
      return this._endBlockNode(G8);
    }
    label($) {
      return this._leafNode(new yF($));
    }
    break($) {
      return this._leafNode(new gF($));
    }
    return($) {
      let X = new VY();
      if ((this._blockNode(X), this.code($), X.nodes.length !== 1))
        throw Error('CodeGen: "return" should have one node');
      return this._endBlockNode(VY);
    }
    try($, X, J) {
      if (!X && !J) throw Error('CodeGen: "try" without "catch" and "finally"');
      let Y = new dF();
      if ((this._blockNode(Y), this.code($), X)) {
        let Q = this.name("e");
        ((this._currNode = Y.catch = new OY(Q)), X(Q));
      }
      if (J) ((this._currNode = Y.finally = new wY()), this.code(J));
      return this._endBlockNode(OY, wY);
    }
    throw($) {
      return this._leafNode(new hF($));
    }
    block($, X) {
      if ((this._blockStarts.push(this._nodes.length), $))
        this.code($).endBlock(X);
      return this;
    }
    endBlock($) {
      let X = this._blockStarts.pop();
      if (X === void 0) throw Error("CodeGen: not in self-balancing block");
      let J = this._nodes.length - X;
      if (J < 0 || ($ !== void 0 && J !== $))
        throw Error(`CodeGen: wrong number of nodes: ${J} vs ${$} expected`);
      return ((this._nodes.length = X), this);
    }
    func($, X = Q$.nil, J, Y) {
      if ((this._blockNode(new NY($, X, J)), Y)) this.code(Y).endFunc();
      return this;
    }
    endFunc() {
      return this._endBlockNode(NY);
    }
    optimize($ = 1) {
      while ($-- > 0)
        (this._root.optimizeNodes(),
          this._root.optimizeNames(this._root.names, this._constants));
    }
    _leafNode($) {
      return (this._currNode.nodes.push($), this);
    }
    _blockNode($) {
      (this._currNode.nodes.push($), this._nodes.push($));
    }
    _endBlockNode($, X) {
      let J = this._currNode;
      if (J instanceof $ || (X && J instanceof X))
        return (this._nodes.pop(), this);
      throw Error(
        `CodeGen: not in block "${X ? `${$.kind}/${X.kind}` : $.kind}"`,
      );
    }
    _elseNode($) {
      let X = this._currNode;
      if (!(X instanceof E4)) throw Error('CodeGen: "else" without "if"');
      return ((this._currNode = X.else = $), this);
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      let $ = this._nodes;
      return $[$.length - 1];
    }
    set _currNode($) {
      let X = this._nodes;
      X[X.length - 1] = $;
    }
  }
  H6.CodeGen = pF;
  function i1($, X) {
    for (let J in X) $[J] = ($[J] || 0) + (X[J] || 0);
    return $;
  }
  function BY($, X) {
    return X instanceof Q$._CodeOrName ? i1($, X.names) : $;
  }
  function U8($, X, J) {
    if ($ instanceof Q$.Name) return Y($);
    if (!Q($)) return $;
    return new Q$._Code(
      $._items.reduce((W, z) => {
        if (z instanceof Q$.Name) z = Y(z);
        if (z instanceof Q$._Code) W.push(...z._items);
        else W.push(z);
        return W;
      }, []),
    );
    function Y(W) {
      let z = J[W.str];
      if (z === void 0 || X[W.str] !== 1) return W;
      return (delete X[W.str], z);
    }
    function Q(W) {
      return (
        W instanceof Q$._Code &&
        W._items.some(
          (z) => z instanceof Q$.Name && X[z.str] === 1 && J[z.str] !== void 0,
        )
      );
    }
  }
  function zT($, X) {
    for (let J in X) $[J] = ($[J] || 0) - (X[J] || 0);
  }
  function iF($) {
    return typeof $ == "boolean" || typeof $ == "number" || $ === null
      ? !$
      : Q$._`!${bH($)}`;
  }
  H6.not = iF;
  var GT = nF(H6.operators.AND);
  function UT(...$) {
    return $.reduce(GT);
  }
  H6.and = UT;
  var HT = nF(H6.operators.OR);
  function KT(...$) {
    return $.reduce(HT);
  }
  H6.or = KT;
  function nF($) {
    return (X, J) =>
      X === Q$.nil ? J : J === Q$.nil ? X : Q$._`${bH(X)} ${$} ${bH(J)}`;
  }
  function bH($) {
    return $ instanceof Q$.Name ? $ : Q$._`(${$})`;
  }
});
var Y$ = M((Jj) => {
  Object.defineProperty(Jj, "__esModule", { value: !0 });
  Jj.checkStrictMode =
    Jj.getErrorPath =
    Jj.Type =
    Jj.useFunc =
    Jj.setEvaluated =
    Jj.evaluatedPropsToName =
    Jj.mergeEvaluated =
    Jj.eachItem =
    Jj.unescapeJsonPointer =
    Jj.escapeJsonPointer =
    Jj.escapeFragment =
    Jj.unescapeFragment =
    Jj.schemaRefOrVal =
    Jj.schemaHasRulesButRef =
    Jj.schemaHasRules =
    Jj.checkUnknownRules =
    Jj.alwaysValidSchema =
    Jj.toHash =
      void 0;
  var w$ = a(),
    wT = JJ();
  function BT($) {
    let X = {};
    for (let J of $) X[J] = !0;
    return X;
  }
  Jj.toHash = BT;
  function qT($, X) {
    if (typeof X == "boolean") return X;
    if (Object.keys(X).length === 0) return !0;
    return (aF($, X), !sF(X, $.self.RULES.all));
  }
  Jj.alwaysValidSchema = qT;
  function aF($, X = $.schema) {
    let { opts: J, self: Y } = $;
    if (!J.strictSchema) return;
    if (typeof X === "boolean") return;
    let Q = Y.RULES.keywords;
    for (let W in X) if (!Q[W]) Xj($, `unknown keyword: "${W}"`);
  }
  Jj.checkUnknownRules = aF;
  function sF($, X) {
    if (typeof $ == "boolean") return !$;
    for (let J in $) if (X[J]) return !0;
    return !1;
  }
  Jj.schemaHasRules = sF;
  function DT($, X) {
    if (typeof $ == "boolean") return !$;
    for (let J in $) if (J !== "$ref" && X.all[J]) return !0;
    return !1;
  }
  Jj.schemaHasRulesButRef = DT;
  function FT({ topSchemaRef: $, schemaPath: X }, J, Y, Q) {
    if (!Q) {
      if (typeof J == "number" || typeof J == "boolean") return J;
      if (typeof J == "string") return w$._`${J}`;
    }
    return w$._`${$}${X}${(0, w$.getProperty)(Y)}`;
  }
  Jj.schemaRefOrVal = FT;
  function jT($) {
    return eF(decodeURIComponent($));
  }
  Jj.unescapeFragment = jT;
  function LT($) {
    return encodeURIComponent(EH($));
  }
  Jj.escapeFragment = LT;
  function EH($) {
    if (typeof $ == "number") return `${$}`;
    return $.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  Jj.escapeJsonPointer = EH;
  function eF($) {
    return $.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  Jj.unescapeJsonPointer = eF;
  function MT($, X) {
    if (Array.isArray($)) for (let J of $) X(J);
    else X($);
  }
  Jj.eachItem = MT;
  function oF({
    mergeNames: $,
    mergeToName: X,
    mergeValues: J,
    resultToName: Y,
  }) {
    return (Q, W, z, G) => {
      let U =
        z === void 0
          ? W
          : z instanceof w$.Name
            ? (W instanceof w$.Name ? $(Q, W, z) : X(Q, W, z), z)
            : W instanceof w$.Name
              ? (X(Q, z, W), W)
              : J(W, z);
      return G === w$.Name && !(U instanceof w$.Name) ? Y(Q, U) : U;
    };
  }
  Jj.mergeEvaluated = {
    props: oF({
      mergeNames: ($, X, J) =>
        $.if(w$._`${J} !== true && ${X} !== undefined`, () => {
          $.if(
            w$._`${X} === true`,
            () => $.assign(J, !0),
            () =>
              $.assign(J, w$._`${J} || {}`).code(
                w$._`Object.assign(${J}, ${X})`,
              ),
          );
        }),
      mergeToName: ($, X, J) =>
        $.if(w$._`${J} !== true`, () => {
          if (X === !0) $.assign(J, !0);
          else ($.assign(J, w$._`${J} || {}`), SH($, J, X));
        }),
      mergeValues: ($, X) => ($ === !0 ? !0 : { ...$, ...X }),
      resultToName: $j,
    }),
    items: oF({
      mergeNames: ($, X, J) =>
        $.if(w$._`${J} !== true && ${X} !== undefined`, () =>
          $.assign(J, w$._`${X} === true ? true : ${J} > ${X} ? ${J} : ${X}`),
        ),
      mergeToName: ($, X, J) =>
        $.if(w$._`${J} !== true`, () =>
          $.assign(J, X === !0 ? !0 : w$._`${J} > ${X} ? ${J} : ${X}`),
        ),
      mergeValues: ($, X) => ($ === !0 ? !0 : Math.max($, X)),
      resultToName: ($, X) => $.var("items", X),
    }),
  };
  function $j($, X) {
    if (X === !0) return $.var("props", !0);
    let J = $.var("props", w$._`{}`);
    if (X !== void 0) SH($, J, X);
    return J;
  }
  Jj.evaluatedPropsToName = $j;
  function SH($, X, J) {
    Object.keys(J).forEach((Y) =>
      $.assign(w$._`${X}${(0, w$.getProperty)(Y)}`, !0),
    );
  }
  Jj.setEvaluated = SH;
  var tF = {};
  function AT($, X) {
    return $.scopeValue("func", {
      ref: X,
      code: tF[X.code] || (tF[X.code] = new wT._Code(X.code)),
    });
  }
  Jj.useFunc = AT;
  var PH;
  (function ($) {
    (($[($.Num = 0)] = "Num"), ($[($.Str = 1)] = "Str"));
  })(PH || (Jj.Type = PH = {}));
  function IT($, X, J) {
    if ($ instanceof w$.Name) {
      let Y = X === PH.Num;
      return J
        ? Y
          ? w$._`"[" + ${$} + "]"`
          : w$._`"['" + ${$} + "']"`
        : Y
          ? w$._`"/" + ${$}`
          : w$._`"/" + ${$}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return J ? (0, w$.getProperty)($).toString() : "/" + EH($);
  }
  Jj.getErrorPath = IT;
  function Xj($, X, J = $.opts.strictSchema) {
    if (!J) return;
    if (((X = `strict mode: ${X}`), J === !0)) throw Error(X);
    $.self.logger.warn(X);
  }
  Jj.checkStrictMode = Xj;
});
var S4 = M((Yj) => {
  Object.defineProperty(Yj, "__esModule", { value: !0 });
  var r$ = a(),
    mT = {
      data: new r$.Name("data"),
      valCxt: new r$.Name("valCxt"),
      instancePath: new r$.Name("instancePath"),
      parentData: new r$.Name("parentData"),
      parentDataProperty: new r$.Name("parentDataProperty"),
      rootData: new r$.Name("rootData"),
      dynamicAnchors: new r$.Name("dynamicAnchors"),
      vErrors: new r$.Name("vErrors"),
      errors: new r$.Name("errors"),
      this: new r$.Name("this"),
      self: new r$.Name("self"),
      scope: new r$.Name("scope"),
      json: new r$.Name("json"),
      jsonPos: new r$.Name("jsonPos"),
      jsonLen: new r$.Name("jsonLen"),
      jsonPart: new r$.Name("jsonPart"),
    };
  Yj.default = mT;
});
var YJ = M((Uj) => {
  Object.defineProperty(Uj, "__esModule", { value: !0 });
  Uj.extendErrors =
    Uj.resetErrorsCount =
    Uj.reportExtraError =
    Uj.reportError =
    Uj.keyword$DataError =
    Uj.keywordError =
      void 0;
  var W$ = a(),
    jY = Y$(),
    s$ = S4();
  Uj.keywordError = {
    message: ({ keyword: $ }) => W$.str`must pass "${$}" keyword validation`,
  };
  Uj.keyword$DataError = {
    message: ({ keyword: $, schemaType: X }) =>
      X
        ? W$.str`"${$}" keyword must be ${X} ($data)`
        : W$.str`"${$}" keyword is invalid ($data)`,
  };
  function cT($, X = Uj.keywordError, J, Y) {
    let { it: Q } = $,
      { gen: W, compositeRule: z, allErrors: G } = Q,
      U = Gj($, X, J);
    if (Y !== null && Y !== void 0 ? Y : z || G) Wj(W, U);
    else zj(Q, W$._`[${U}]`);
  }
  Uj.reportError = cT;
  function dT($, X = Uj.keywordError, J) {
    let { it: Y } = $,
      { gen: Q, compositeRule: W, allErrors: z } = Y,
      G = Gj($, X, J);
    if ((Wj(Q, G), !(W || z))) zj(Y, s$.default.vErrors);
  }
  Uj.reportExtraError = dT;
  function pT($, X) {
    ($.assign(s$.default.errors, X),
      $.if(W$._`${s$.default.vErrors} !== null`, () =>
        $.if(
          X,
          () => $.assign(W$._`${s$.default.vErrors}.length`, X),
          () => $.assign(s$.default.vErrors, null),
        ),
      ));
  }
  Uj.resetErrorsCount = pT;
  function iT({
    gen: $,
    keyword: X,
    schemaValue: J,
    data: Y,
    errsCount: Q,
    it: W,
  }) {
    if (Q === void 0) throw Error("ajv implementation error");
    let z = $.name("err");
    $.forRange("i", Q, s$.default.errors, (G) => {
      if (
        ($.const(z, W$._`${s$.default.vErrors}[${G}]`),
        $.if(W$._`${z}.instancePath === undefined`, () =>
          $.assign(
            W$._`${z}.instancePath`,
            (0, W$.strConcat)(s$.default.instancePath, W.errorPath),
          ),
        ),
        $.assign(W$._`${z}.schemaPath`, W$.str`${W.errSchemaPath}/${X}`),
        W.opts.verbose)
      )
        ($.assign(W$._`${z}.schema`, J), $.assign(W$._`${z}.data`, Y));
    });
  }
  Uj.extendErrors = iT;
  function Wj($, X) {
    let J = $.const("err", X);
    ($.if(
      W$._`${s$.default.vErrors} === null`,
      () => $.assign(s$.default.vErrors, W$._`[${J}]`),
      W$._`${s$.default.vErrors}.push(${J})`,
    ),
      $.code(W$._`${s$.default.errors}++`));
  }
  function zj($, X) {
    let { gen: J, validateName: Y, schemaEnv: Q } = $;
    if (Q.$async) J.throw(W$._`new ${$.ValidationError}(${X})`);
    else (J.assign(W$._`${Y}.errors`, X), J.return(!1));
  }
  var n1 = {
    keyword: new W$.Name("keyword"),
    schemaPath: new W$.Name("schemaPath"),
    params: new W$.Name("params"),
    propertyName: new W$.Name("propertyName"),
    message: new W$.Name("message"),
    schema: new W$.Name("schema"),
    parentSchema: new W$.Name("parentSchema"),
  };
  function Gj($, X, J) {
    let { createErrors: Y } = $.it;
    if (Y === !1) return W$._`{}`;
    return nT($, X, J);
  }
  function nT($, X, J = {}) {
    let { gen: Y, it: Q } = $,
      W = [rT(Q, J), oT($, J)];
    return (tT($, X, W), Y.object(...W));
  }
  function rT({ errorPath: $ }, { instancePath: X }) {
    let J = X ? W$.str`${$}${(0, jY.getErrorPath)(X, jY.Type.Str)}` : $;
    return [
      s$.default.instancePath,
      (0, W$.strConcat)(s$.default.instancePath, J),
    ];
  }
  function oT(
    { keyword: $, it: { errSchemaPath: X } },
    { schemaPath: J, parentSchema: Y },
  ) {
    let Q = Y ? X : W$.str`${X}/${$}`;
    if (J) Q = W$.str`${Q}${(0, jY.getErrorPath)(J, jY.Type.Str)}`;
    return [n1.schemaPath, Q];
  }
  function tT($, { params: X, message: J }, Y) {
    let { keyword: Q, data: W, schemaValue: z, it: G } = $,
      { opts: U, propertyName: H, topSchemaRef: K, schemaPath: N } = G;
    if (
      (Y.push(
        [n1.keyword, Q],
        [n1.params, typeof X == "function" ? X($) : X || W$._`{}`],
      ),
      U.messages)
    )
      Y.push([n1.message, typeof J == "function" ? J($) : J]);
    if (U.verbose)
      Y.push(
        [n1.schema, z],
        [n1.parentSchema, W$._`${K}${N}`],
        [s$.default.data, W],
      );
    if (H) Y.push([n1.propertyName, H]);
  }
});
var Oj = M((Nj) => {
  Object.defineProperty(Nj, "__esModule", { value: !0 });
  Nj.boolOrEmptySchema = Nj.topBoolOrEmptySchema = void 0;
  var Xf = YJ(),
    Jf = a(),
    Qf = S4(),
    Yf = { message: "boolean schema is false" };
  function Wf($) {
    let { gen: X, schema: J, validateName: Y } = $;
    if (J === !1) Kj($, !1);
    else if (typeof J == "object" && J.$async === !0) X.return(Qf.default.data);
    else (X.assign(Jf._`${Y}.errors`, null), X.return(!0));
  }
  Nj.topBoolOrEmptySchema = Wf;
  function zf($, X) {
    let { gen: J, schema: Y } = $;
    if (Y === !1) (J.var(X, !1), Kj($));
    else J.var(X, !0);
  }
  Nj.boolOrEmptySchema = zf;
  function Kj($, X) {
    let { gen: J, data: Y } = $,
      Q = {
        gen: J,
        keyword: "false schema",
        data: Y,
        schema: !1,
        schemaCode: !1,
        schemaValue: !1,
        params: {},
        it: $,
      };
    (0, Xf.reportError)(Q, Yf, void 0, X);
  }
});
var CH = M((wj) => {
  Object.defineProperty(wj, "__esModule", { value: !0 });
  wj.getRules = wj.isJSONType = void 0;
  var Uf = [
      "string",
      "number",
      "integer",
      "boolean",
      "null",
      "object",
      "array",
    ],
    Hf = new Set(Uf);
  function Kf($) {
    return typeof $ == "string" && Hf.has($);
  }
  wj.isJSONType = Kf;
  function Nf() {
    let $ = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] },
    };
    return {
      types: { ...$, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, $.number, $.string, $.array, $.object],
      post: { rules: [] },
      all: {},
      keywords: {},
    };
  }
  wj.getRules = Nf;
});
var kH = M((Fj) => {
  Object.defineProperty(Fj, "__esModule", { value: !0 });
  Fj.shouldUseRule = Fj.shouldUseGroup = Fj.schemaHasRulesForType = void 0;
  function Of({ schema: $, self: X }, J) {
    let Y = X.RULES.types[J];
    return Y && Y !== !0 && qj($, Y);
  }
  Fj.schemaHasRulesForType = Of;
  function qj($, X) {
    return X.rules.some((J) => Dj($, J));
  }
  Fj.shouldUseGroup = qj;
  function Dj($, X) {
    var J;
    return (
      $[X.keyword] !== void 0 ||
      ((J = X.definition.implements) === null || J === void 0
        ? void 0
        : J.some((Y) => $[Y] !== void 0))
    );
  }
  Fj.shouldUseRule = Dj;
});
var WJ = M((Ij) => {
  Object.defineProperty(Ij, "__esModule", { value: !0 });
  Ij.reportTypeError =
    Ij.checkDataTypes =
    Ij.checkDataType =
    Ij.coerceAndCheckDataType =
    Ij.getJSONTypes =
    Ij.getSchemaTypes =
    Ij.DataType =
      void 0;
  var qf = CH(),
    Df = kH(),
    Ff = YJ(),
    t = a(),
    Lj = Y$(),
    H8;
  (function ($) {
    (($[($.Correct = 0)] = "Correct"), ($[($.Wrong = 1)] = "Wrong"));
  })(H8 || (Ij.DataType = H8 = {}));
  function jf($) {
    let X = Mj($.type);
    if (X.includes("null")) {
      if ($.nullable === !1)
        throw Error("type: null contradicts nullable: false");
    } else {
      if (!X.length && $.nullable !== void 0)
        throw Error('"nullable" cannot be used without "type"');
      if ($.nullable === !0) X.push("null");
    }
    return X;
  }
  Ij.getSchemaTypes = jf;
  function Mj($) {
    let X = Array.isArray($) ? $ : $ ? [$] : [];
    if (X.every(qf.isJSONType)) return X;
    throw Error("type must be JSONType or JSONType[]: " + X.join(","));
  }
  Ij.getJSONTypes = Mj;
  function Lf($, X) {
    let { gen: J, data: Y, opts: Q } = $,
      W = Mf(X, Q.coerceTypes),
      z =
        X.length > 0 &&
        !(
          W.length === 0 &&
          X.length === 1 &&
          (0, Df.schemaHasRulesForType)($, X[0])
        );
    if (z) {
      let G = xH(X, Y, Q.strictNumbers, H8.Wrong);
      J.if(G, () => {
        if (W.length) Af($, X, W);
        else TH($);
      });
    }
    return z;
  }
  Ij.coerceAndCheckDataType = Lf;
  var Aj = new Set(["string", "number", "integer", "boolean", "null"]);
  function Mf($, X) {
    return X
      ? $.filter((J) => Aj.has(J) || (X === "array" && J === "array"))
      : [];
  }
  function Af($, X, J) {
    let { gen: Y, data: Q, opts: W } = $,
      z = Y.let("dataType", t._`typeof ${Q}`),
      G = Y.let("coerced", t._`undefined`);
    if (W.coerceTypes === "array")
      Y.if(
        t._`${z} == 'object' && Array.isArray(${Q}) && ${Q}.length == 1`,
        () =>
          Y.assign(Q, t._`${Q}[0]`)
            .assign(z, t._`typeof ${Q}`)
            .if(xH(X, Q, W.strictNumbers), () => Y.assign(G, Q)),
      );
    Y.if(t._`${G} !== undefined`);
    for (let H of J)
      if (Aj.has(H) || (H === "array" && W.coerceTypes === "array")) U(H);
    (Y.else(),
      TH($),
      Y.endIf(),
      Y.if(t._`${G} !== undefined`, () => {
        (Y.assign(Q, G), If($, G));
      }));
    function U(H) {
      switch (H) {
        case "string":
          Y.elseIf(t._`${z} == "number" || ${z} == "boolean"`)
            .assign(G, t._`"" + ${Q}`)
            .elseIf(t._`${Q} === null`)
            .assign(G, t._`""`);
          return;
        case "number":
          Y.elseIf(
            t._`${z} == "boolean" || ${Q} === null
              || (${z} == "string" && ${Q} && ${Q} == +${Q})`,
          ).assign(G, t._`+${Q}`);
          return;
        case "integer":
          Y.elseIf(
            t._`${z} === "boolean" || ${Q} === null
              || (${z} === "string" && ${Q} && ${Q} == +${Q} && !(${Q} % 1))`,
          ).assign(G, t._`+${Q}`);
          return;
        case "boolean":
          Y.elseIf(t._`${Q} === "false" || ${Q} === 0 || ${Q} === null`)
            .assign(G, !1)
            .elseIf(t._`${Q} === "true" || ${Q} === 1`)
            .assign(G, !0);
          return;
        case "null":
          (Y.elseIf(t._`${Q} === "" || ${Q} === 0 || ${Q} === false`),
            Y.assign(G, null));
          return;
        case "array":
          Y.elseIf(
            t._`${z} === "string" || ${z} === "number"
              || ${z} === "boolean" || ${Q} === null`,
          ).assign(G, t._`[${Q}]`);
      }
    }
  }
  function If({ gen: $, parentData: X, parentDataProperty: J }, Y) {
    $.if(t._`${X} !== undefined`, () => $.assign(t._`${X}[${J}]`, Y));
  }
  function _H($, X, J, Y = H8.Correct) {
    let Q = Y === H8.Correct ? t.operators.EQ : t.operators.NEQ,
      W;
    switch ($) {
      case "null":
        return t._`${X} ${Q} null`;
      case "array":
        W = t._`Array.isArray(${X})`;
        break;
      case "object":
        W = t._`${X} && typeof ${X} == "object" && !Array.isArray(${X})`;
        break;
      case "integer":
        W = z(t._`!(${X} % 1) && !isNaN(${X})`);
        break;
      case "number":
        W = z();
        break;
      default:
        return t._`typeof ${X} ${Q} ${$}`;
    }
    return Y === H8.Correct ? W : (0, t.not)(W);
    function z(G = t.nil) {
      return (0, t.and)(
        t._`typeof ${X} == "number"`,
        G,
        J ? t._`isFinite(${X})` : t.nil,
      );
    }
  }
  Ij.checkDataType = _H;
  function xH($, X, J, Y) {
    if ($.length === 1) return _H($[0], X, J, Y);
    let Q,
      W = (0, Lj.toHash)($);
    if (W.array && W.object) {
      let z = t._`typeof ${X} != "object"`;
      ((Q = W.null ? z : t._`!${X} || ${z}`),
        delete W.null,
        delete W.array,
        delete W.object);
    } else Q = t.nil;
    if (W.number) delete W.integer;
    for (let z in W) Q = (0, t.and)(Q, _H(z, X, J, Y));
    return Q;
  }
  Ij.checkDataTypes = xH;
  var Zf = {
    message: ({ schema: $ }) => `must be ${$}`,
    params: ({ schema: $, schemaValue: X }) =>
      typeof $ == "string" ? t._`{type: ${$}}` : t._`{type: ${X}}`,
  };
  function TH($) {
    let X = bf($);
    (0, Ff.reportError)(X, Zf);
  }
  Ij.reportTypeError = TH;
  function bf($) {
    let { gen: X, data: J, schema: Y } = $,
      Q = (0, Lj.schemaRefOrVal)($, Y, "type");
    return {
      gen: X,
      keyword: "type",
      data: J,
      schema: Y.type,
      schemaCode: Q,
      schemaValue: Q,
      parentSchema: Y,
      params: {},
      it: $,
    };
  }
});
var Ej = M((Rj) => {
  Object.defineProperty(Rj, "__esModule", { value: !0 });
  Rj.assignDefaults = void 0;
  var K8 = a(),
    kf = Y$();
  function _f($, X) {
    let { properties: J, items: Y } = $.schema;
    if (X === "object" && J) for (let Q in J) bj($, Q, J[Q].default);
    else if (X === "array" && Array.isArray(Y))
      Y.forEach((Q, W) => bj($, W, Q.default));
  }
  Rj.assignDefaults = _f;
  function bj($, X, J) {
    let { gen: Y, compositeRule: Q, data: W, opts: z } = $;
    if (J === void 0) return;
    let G = K8._`${W}${(0, K8.getProperty)(X)}`;
    if (Q) {
      (0, kf.checkStrictMode)($, `default is ignored for: ${G}`);
      return;
    }
    let U = K8._`${G} === undefined`;
    if (z.useDefaults === "empty")
      U = K8._`${U} || ${G} === null || ${G} === ""`;
    Y.if(U, K8._`${G} = ${(0, K8.stringify)(J)}`);
  }
});
var v6 = M((Cj) => {
  Object.defineProperty(Cj, "__esModule", { value: !0 });
  Cj.validateUnion =
    Cj.validateArray =
    Cj.usePattern =
    Cj.callValidateCode =
    Cj.schemaProperties =
    Cj.allSchemaProperties =
    Cj.noPropertyInData =
    Cj.propertyInData =
    Cj.isOwnProperty =
    Cj.hasPropFunc =
    Cj.reportMissingProp =
    Cj.checkMissingProp =
    Cj.checkReportMissingProp =
      void 0;
  var M$ = a(),
    fH = Y$(),
    K1 = S4(),
    xf = Y$();
  function Tf($, X) {
    let { gen: J, data: Y, it: Q } = $;
    J.if(gH(J, Y, X, Q.opts.ownProperties), () => {
      ($.setParams({ missingProperty: M$._`${X}` }, !0), $.error());
    });
  }
  Cj.checkReportMissingProp = Tf;
  function ff({ gen: $, data: X, it: { opts: J } }, Y, Q) {
    return (0, M$.or)(
      ...Y.map((W) =>
        (0, M$.and)(gH($, X, W, J.ownProperties), M$._`${Q} = ${W}`),
      ),
    );
  }
  Cj.checkMissingProp = ff;
  function yf($, X) {
    ($.setParams({ missingProperty: X }, !0), $.error());
  }
  Cj.reportMissingProp = yf;
  function Sj($) {
    return $.scopeValue("func", {
      ref: Object.prototype.hasOwnProperty,
      code: M$._`Object.prototype.hasOwnProperty`,
    });
  }
  Cj.hasPropFunc = Sj;
  function yH($, X, J) {
    return M$._`${Sj($)}.call(${X}, ${J})`;
  }
  Cj.isOwnProperty = yH;
  function gf($, X, J, Y) {
    let Q = M$._`${X}${(0, M$.getProperty)(J)} !== undefined`;
    return Y ? M$._`${Q} && ${yH($, X, J)}` : Q;
  }
  Cj.propertyInData = gf;
  function gH($, X, J, Y) {
    let Q = M$._`${X}${(0, M$.getProperty)(J)} === undefined`;
    return Y ? (0, M$.or)(Q, (0, M$.not)(yH($, X, J))) : Q;
  }
  Cj.noPropertyInData = gH;
  function vj($) {
    return $ ? Object.keys($).filter((X) => X !== "__proto__") : [];
  }
  Cj.allSchemaProperties = vj;
  function hf($, X) {
    return vj(X).filter((J) => !(0, fH.alwaysValidSchema)($, X[J]));
  }
  Cj.schemaProperties = hf;
  function uf(
    {
      schemaCode: $,
      data: X,
      it: { gen: J, topSchemaRef: Y, schemaPath: Q, errorPath: W },
      it: z,
    },
    G,
    U,
    H,
  ) {
    let K = H ? M$._`${$}, ${X}, ${Y}${Q}` : X,
      N = [
        [
          K1.default.instancePath,
          (0, M$.strConcat)(K1.default.instancePath, W),
        ],
        [K1.default.parentData, z.parentData],
        [K1.default.parentDataProperty, z.parentDataProperty],
        [K1.default.rootData, K1.default.rootData],
      ];
    if (z.opts.dynamicRef)
      N.push([K1.default.dynamicAnchors, K1.default.dynamicAnchors]);
    let V = M$._`${K}, ${J.object(...N)}`;
    return U !== M$.nil ? M$._`${G}.call(${U}, ${V})` : M$._`${G}(${V})`;
  }
  Cj.callValidateCode = uf;
  var mf = M$._`new RegExp`;
  function lf({ gen: $, it: { opts: X } }, J) {
    let Y = X.unicodeRegExp ? "u" : "",
      { regExp: Q } = X.code,
      W = Q(J, Y);
    return $.scopeValue("pattern", {
      key: W.toString(),
      ref: W,
      code: M$._`${Q.code === "new RegExp" ? mf : (0, xf.useFunc)($, Q)}(${J}, ${Y})`,
    });
  }
  Cj.usePattern = lf;
  function cf($) {
    let { gen: X, data: J, keyword: Y, it: Q } = $,
      W = X.name("valid");
    if (Q.allErrors) {
      let G = X.let("valid", !0);
      return (z(() => X.assign(G, !1)), G);
    }
    return (X.var(W, !0), z(() => X.break()), W);
    function z(G) {
      let U = X.const("len", M$._`${J}.length`);
      X.forRange("i", 0, U, (H) => {
        ($.subschema({ keyword: Y, dataProp: H, dataPropType: fH.Type.Num }, W),
          X.if((0, M$.not)(W), G));
      });
    }
  }
  Cj.validateArray = cf;
  function df($) {
    let { gen: X, schema: J, keyword: Y, it: Q } = $;
    if (!Array.isArray(J)) throw Error("ajv implementation error");
    if (J.some((U) => (0, fH.alwaysValidSchema)(Q, U)) && !Q.opts.unevaluated)
      return;
    let z = X.let("valid", !1),
      G = X.name("_valid");
    (X.block(() =>
      J.forEach((U, H) => {
        let K = $.subschema(
          { keyword: Y, schemaProp: H, compositeRule: !0 },
          G,
        );
        if ((X.assign(z, M$._`${z} || ${G}`), !$.mergeValidEvaluated(K, G)))
          X.if((0, M$.not)(z));
      }),
    ),
      $.result(
        z,
        () => $.reset(),
        () => $.error(!0),
      ));
  }
  Cj.validateUnion = df;
});
var yj = M((Tj) => {
  Object.defineProperty(Tj, "__esModule", { value: !0 });
  Tj.validateKeywordUsage =
    Tj.validSchemaType =
    Tj.funcKeywordCode =
    Tj.macroKeywordCode =
      void 0;
  var e$ = a(),
    r1 = S4(),
    Yy = v6(),
    Wy = YJ();
  function zy($, X) {
    let { gen: J, keyword: Y, schema: Q, parentSchema: W, it: z } = $,
      G = X.macro.call(z.self, Q, W, z),
      U = xj(J, Y, G);
    if (z.opts.validateSchema !== !1) z.self.validateSchema(G, !0);
    let H = J.name("valid");
    ($.subschema(
      {
        schema: G,
        schemaPath: e$.nil,
        errSchemaPath: `${z.errSchemaPath}/${Y}`,
        topSchemaRef: U,
        compositeRule: !0,
      },
      H,
    ),
      $.pass(H, () => $.error(!0)));
  }
  Tj.macroKeywordCode = zy;
  function Gy($, X) {
    var J;
    let { gen: Y, keyword: Q, schema: W, parentSchema: z, $data: G, it: U } = $;
    Hy(U, X);
    let H = !G && X.compile ? X.compile.call(U.self, W, z, U) : X.validate,
      K = xj(Y, Q, H),
      N = Y.let("valid");
    ($.block$data(N, V), $.ok((J = X.valid) !== null && J !== void 0 ? J : N));
    function V() {
      if (X.errors === !1) {
        if ((B(), X.modifying)) _j($);
        F(() => $.error());
      } else {
        let j = X.async ? O() : w();
        if (X.modifying) _j($);
        F(() => Uy($, j));
      }
    }
    function O() {
      let j = Y.let("ruleErrs", null);
      return (
        Y.try(
          () => B(e$._`await `),
          (I) =>
            Y.assign(N, !1).if(
              e$._`${I} instanceof ${U.ValidationError}`,
              () => Y.assign(j, e$._`${I}.errors`),
              () => Y.throw(I),
            ),
        ),
        j
      );
    }
    function w() {
      let j = e$._`${K}.errors`;
      return (Y.assign(j, null), B(e$.nil), j);
    }
    function B(j = X.async ? e$._`await ` : e$.nil) {
      let I = U.opts.passContext ? r1.default.this : r1.default.self,
        Z = !(("compile" in X && !G) || X.schema === !1);
      Y.assign(
        N,
        e$._`${j}${(0, Yy.callValidateCode)($, K, I, Z)}`,
        X.modifying,
      );
    }
    function F(j) {
      var I;
      Y.if((0, e$.not)((I = X.valid) !== null && I !== void 0 ? I : N), j);
    }
  }
  Tj.funcKeywordCode = Gy;
  function _j($) {
    let { gen: X, data: J, it: Y } = $;
    X.if(Y.parentData, () =>
      X.assign(J, e$._`${Y.parentData}[${Y.parentDataProperty}]`),
    );
  }
  function Uy($, X) {
    let { gen: J } = $;
    J.if(
      e$._`Array.isArray(${X})`,
      () => {
        (J.assign(
          r1.default.vErrors,
          e$._`${r1.default.vErrors} === null ? ${X} : ${r1.default.vErrors}.concat(${X})`,
        ).assign(r1.default.errors, e$._`${r1.default.vErrors}.length`),
          (0, Wy.extendErrors)($));
      },
      () => $.error(),
    );
  }
  function Hy({ schemaEnv: $ }, X) {
    if (X.async && !$.$async) throw Error("async keyword in sync schema");
  }
  function xj($, X, J) {
    if (J === void 0) throw Error(`keyword "${X}" failed to compile`);
    return $.scopeValue(
      "keyword",
      typeof J == "function"
        ? { ref: J }
        : { ref: J, code: (0, e$.stringify)(J) },
    );
  }
  function Ky($, X, J = !1) {
    return (
      !X.length ||
      X.some((Y) =>
        Y === "array"
          ? Array.isArray($)
          : Y === "object"
            ? $ && typeof $ == "object" && !Array.isArray($)
            : typeof $ == Y || (J && typeof $ > "u"),
      )
    );
  }
  Tj.validSchemaType = Ky;
  function Ny({ schema: $, opts: X, self: J, errSchemaPath: Y }, Q, W) {
    if (Array.isArray(Q.keyword) ? !Q.keyword.includes(W) : Q.keyword !== W)
      throw Error("ajv implementation error");
    let z = Q.dependencies;
    if (
      z === null || z === void 0
        ? void 0
        : z.some((G) => !Object.prototype.hasOwnProperty.call($, G))
    )
      throw Error(
        `parent schema must have dependencies of ${W}: ${z.join(",")}`,
      );
    if (Q.validateSchema) {
      if (!Q.validateSchema($[W])) {
        let U =
          `keyword "${W}" value is invalid at path "${Y}": ` +
          J.errorsText(Q.validateSchema.errors);
        if (X.validateSchema === "log") J.logger.error(U);
        else throw Error(U);
      }
    }
  }
  Tj.validateKeywordUsage = Ny;
});
var mj = M((hj) => {
  Object.defineProperty(hj, "__esModule", { value: !0 });
  hj.extendSubschemaMode = hj.extendSubschemaData = hj.getSubschema = void 0;
  var X4 = a(),
    gj = Y$();
  function By(
    $,
    {
      keyword: X,
      schemaProp: J,
      schema: Y,
      schemaPath: Q,
      errSchemaPath: W,
      topSchemaRef: z,
    },
  ) {
    if (X !== void 0 && Y !== void 0)
      throw Error('both "keyword" and "schema" passed, only one allowed');
    if (X !== void 0) {
      let G = $.schema[X];
      return J === void 0
        ? {
            schema: G,
            schemaPath: X4._`${$.schemaPath}${(0, X4.getProperty)(X)}`,
            errSchemaPath: `${$.errSchemaPath}/${X}`,
          }
        : {
            schema: G[J],
            schemaPath: X4._`${$.schemaPath}${(0, X4.getProperty)(X)}${(0, X4.getProperty)(J)}`,
            errSchemaPath: `${$.errSchemaPath}/${X}/${(0, gj.escapeFragment)(J)}`,
          };
    }
    if (Y !== void 0) {
      if (Q === void 0 || W === void 0 || z === void 0)
        throw Error(
          '"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"',
        );
      return { schema: Y, schemaPath: Q, topSchemaRef: z, errSchemaPath: W };
    }
    throw Error('either "keyword" or "schema" must be passed');
  }
  hj.getSubschema = By;
  function qy(
    $,
    X,
    { dataProp: J, dataPropType: Y, data: Q, dataTypes: W, propertyName: z },
  ) {
    if (Q !== void 0 && J !== void 0)
      throw Error('both "data" and "dataProp" passed, only one allowed');
    let { gen: G } = X;
    if (J !== void 0) {
      let { errorPath: H, dataPathArr: K, opts: N } = X,
        V = G.let("data", X4._`${X.data}${(0, X4.getProperty)(J)}`, !0);
      (U(V),
        ($.errorPath = X4.str`${H}${(0, gj.getErrorPath)(J, Y, N.jsPropertySyntax)}`),
        ($.parentDataProperty = X4._`${J}`),
        ($.dataPathArr = [...K, $.parentDataProperty]));
    }
    if (Q !== void 0) {
      let H = Q instanceof X4.Name ? Q : G.let("data", Q, !0);
      if ((U(H), z !== void 0)) $.propertyName = z;
    }
    if (W) $.dataTypes = W;
    function U(H) {
      (($.data = H),
        ($.dataLevel = X.dataLevel + 1),
        ($.dataTypes = []),
        (X.definedProperties = new Set()),
        ($.parentData = X.data),
        ($.dataNames = [...X.dataNames, H]));
    }
  }
  hj.extendSubschemaData = qy;
  function Dy(
    $,
    {
      jtdDiscriminator: X,
      jtdMetadata: J,
      compositeRule: Y,
      createErrors: Q,
      allErrors: W,
    },
  ) {
    if (Y !== void 0) $.compositeRule = Y;
    if (Q !== void 0) $.createErrors = Q;
    if (W !== void 0) $.allErrors = W;
    (($.jtdDiscriminator = X), ($.jtdMetadata = J));
  }
  hj.extendSubschemaMode = Dy;
});
var hH = M((x9$, lj) => {
  lj.exports = function $(X, J) {
    if (X === J) return !0;
    if (X && J && typeof X == "object" && typeof J == "object") {
      if (X.constructor !== J.constructor) return !1;
      var Y, Q, W;
      if (Array.isArray(X)) {
        if (((Y = X.length), Y != J.length)) return !1;
        for (Q = Y; Q-- !== 0; ) if (!$(X[Q], J[Q])) return !1;
        return !0;
      }
      if (X.constructor === RegExp)
        return X.source === J.source && X.flags === J.flags;
      if (X.valueOf !== Object.prototype.valueOf)
        return X.valueOf() === J.valueOf();
      if (X.toString !== Object.prototype.toString)
        return X.toString() === J.toString();
      if (((W = Object.keys(X)), (Y = W.length), Y !== Object.keys(J).length))
        return !1;
      for (Q = Y; Q-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(J, W[Q])) return !1;
      for (Q = Y; Q-- !== 0; ) {
        var z = W[Q];
        if (!$(X[z], J[z])) return !1;
      }
      return !0;
    }
    return X !== X && J !== J;
  };
});
var dj = M((T9$, cj) => {
  var N1 = (cj.exports = function ($, X, J) {
    if (typeof X == "function") ((J = X), (X = {}));
    J = X.cb || J;
    var Y = typeof J == "function" ? J : J.pre || function () {},
      Q = J.post || function () {};
    LY(X, Y, Q, $, "", $);
  });
  N1.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0,
    if: !0,
    then: !0,
    else: !0,
  };
  N1.arrayKeywords = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 };
  N1.propsKeywords = {
    $defs: !0,
    definitions: !0,
    properties: !0,
    patternProperties: !0,
    dependencies: !0,
  };
  N1.skipKeywords = {
    default: !0,
    enum: !0,
    const: !0,
    required: !0,
    maximum: !0,
    minimum: !0,
    exclusiveMaximum: !0,
    exclusiveMinimum: !0,
    multipleOf: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    format: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxProperties: !0,
    minProperties: !0,
  };
  function LY($, X, J, Y, Q, W, z, G, U, H) {
    if (Y && typeof Y == "object" && !Array.isArray(Y)) {
      X(Y, Q, W, z, G, U, H);
      for (var K in Y) {
        var N = Y[K];
        if (Array.isArray(N)) {
          if (K in N1.arrayKeywords)
            for (var V = 0; V < N.length; V++)
              LY($, X, J, N[V], Q + "/" + K + "/" + V, W, Q, K, Y, V);
        } else if (K in N1.propsKeywords) {
          if (N && typeof N == "object")
            for (var O in N)
              LY($, X, J, N[O], Q + "/" + K + "/" + Ly(O), W, Q, K, Y, O);
        } else if (K in N1.keywords || ($.allKeys && !(K in N1.skipKeywords)))
          LY($, X, J, N, Q + "/" + K, W, Q, K, Y);
      }
      J(Y, Q, W, z, G, U, H);
    }
  }
  function Ly($) {
    return $.replace(/~/g, "~0").replace(/\//g, "~1");
  }
});
var zJ = M((rj) => {
  Object.defineProperty(rj, "__esModule", { value: !0 });
  rj.getSchemaRefs =
    rj.resolveUrl =
    rj.normalizeId =
    rj._getFullPath =
    rj.getFullPath =
    rj.inlineRef =
      void 0;
  var My = Y$(),
    Ay = hH(),
    Iy = dj(),
    Zy = new Set([
      "type",
      "format",
      "pattern",
      "maxLength",
      "minLength",
      "maxProperties",
      "minProperties",
      "maxItems",
      "minItems",
      "maximum",
      "minimum",
      "uniqueItems",
      "multipleOf",
      "required",
      "enum",
      "const",
    ]);
  function by($, X = !0) {
    if (typeof $ == "boolean") return !0;
    if (X === !0) return !uH($);
    if (!X) return !1;
    return pj($) <= X;
  }
  rj.inlineRef = by;
  var Ry = new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor",
  ]);
  function uH($) {
    for (let X in $) {
      if (Ry.has(X)) return !0;
      let J = $[X];
      if (Array.isArray(J) && J.some(uH)) return !0;
      if (typeof J == "object" && uH(J)) return !0;
    }
    return !1;
  }
  function pj($) {
    let X = 0;
    for (let J in $) {
      if (J === "$ref") return 1 / 0;
      if ((X++, Zy.has(J))) continue;
      if (typeof $[J] == "object") (0, My.eachItem)($[J], (Y) => (X += pj(Y)));
      if (X === 1 / 0) return 1 / 0;
    }
    return X;
  }
  function ij($, X = "", J) {
    if (J !== !1) X = N8(X);
    let Y = $.parse(X);
    return nj($, Y);
  }
  rj.getFullPath = ij;
  function nj($, X) {
    return $.serialize(X).split("#")[0] + "#";
  }
  rj._getFullPath = nj;
  var Py = /#\/?$/;
  function N8($) {
    return $ ? $.replace(Py, "") : "";
  }
  rj.normalizeId = N8;
  function Ey($, X, J) {
    return ((J = N8(J)), $.resolve(X, J));
  }
  rj.resolveUrl = Ey;
  var Sy = /^[a-z_][-a-z0-9._]*$/i;
  function vy($, X) {
    if (typeof $ == "boolean") return {};
    let { schemaId: J, uriResolver: Y } = this.opts,
      Q = N8($[J] || X),
      W = { "": Q },
      z = ij(Y, Q, !1),
      G = {},
      U = new Set();
    return (
      Iy($, { allKeys: !0 }, (N, V, O, w) => {
        if (w === void 0) return;
        let B = z + V,
          F = W[w];
        if (typeof N[J] == "string") F = j.call(this, N[J]);
        (I.call(this, N.$anchor), I.call(this, N.$dynamicAnchor), (W[V] = F));
        function j(Z) {
          let _ = this.opts.uriResolver.resolve;
          if (((Z = N8(F ? _(F, Z) : Z)), U.has(Z))) throw K(Z);
          U.add(Z);
          let T = this.refs[Z];
          if (typeof T == "string") T = this.refs[T];
          if (typeof T == "object") H(N, T.schema, Z);
          else if (Z !== N8(B))
            if (Z[0] === "#") (H(N, G[Z], Z), (G[Z] = N));
            else this.refs[Z] = B;
          return Z;
        }
        function I(Z) {
          if (typeof Z == "string") {
            if (!Sy.test(Z)) throw Error(`invalid anchor "${Z}"`);
            j.call(this, `#${Z}`);
          }
        }
      }),
      G
    );
    function H(N, V, O) {
      if (V !== void 0 && !Ay(N, V)) throw K(O);
    }
    function K(N) {
      return Error(`reference "${N}" resolves to more than one schema`);
    }
  }
  rj.getSchemaRefs = vy;
});
var HJ = M((KL) => {
  Object.defineProperty(KL, "__esModule", { value: !0 });
  KL.getData = KL.KeywordCxt = KL.validateFunctionCode = void 0;
  var $L = Oj(),
    tj = WJ(),
    lH = kH(),
    MY = WJ(),
    fy = Ej(),
    UJ = yj(),
    mH = mj(),
    u = a(),
    n = S4(),
    yy = zJ(),
    v4 = Y$(),
    GJ = YJ();
  function gy($) {
    if (QL($)) {
      if ((YL($), JL($))) {
        my($);
        return;
      }
    }
    XL($, () => (0, $L.topBoolOrEmptySchema)($));
  }
  KL.validateFunctionCode = gy;
  function XL(
    { gen: $, validateName: X, schema: J, schemaEnv: Y, opts: Q },
    W,
  ) {
    if (Q.code.es5)
      $.func(X, u._`${n.default.data}, ${n.default.valCxt}`, Y.$async, () => {
        ($.code(u._`"use strict"; ${aj(J, Q)}`), uy($, Q), $.code(W));
      });
    else
      $.func(X, u._`${n.default.data}, ${hy(Q)}`, Y.$async, () =>
        $.code(aj(J, Q)).code(W),
      );
  }
  function hy($) {
    return u._`{${n.default.instancePath}="", ${n.default.parentData}, ${n.default.parentDataProperty}, ${n.default.rootData}=${n.default.data}${$.dynamicRef ? u._`, ${n.default.dynamicAnchors}={}` : u.nil}}={}`;
  }
  function uy($, X) {
    $.if(
      n.default.valCxt,
      () => {
        if (
          ($.var(
            n.default.instancePath,
            u._`${n.default.valCxt}.${n.default.instancePath}`,
          ),
          $.var(
            n.default.parentData,
            u._`${n.default.valCxt}.${n.default.parentData}`,
          ),
          $.var(
            n.default.parentDataProperty,
            u._`${n.default.valCxt}.${n.default.parentDataProperty}`,
          ),
          $.var(
            n.default.rootData,
            u._`${n.default.valCxt}.${n.default.rootData}`,
          ),
          X.dynamicRef)
        )
          $.var(
            n.default.dynamicAnchors,
            u._`${n.default.valCxt}.${n.default.dynamicAnchors}`,
          );
      },
      () => {
        if (
          ($.var(n.default.instancePath, u._`""`),
          $.var(n.default.parentData, u._`undefined`),
          $.var(n.default.parentDataProperty, u._`undefined`),
          $.var(n.default.rootData, n.default.data),
          X.dynamicRef)
        )
          $.var(n.default.dynamicAnchors, u._`{}`);
      },
    );
  }
  function my($) {
    let { schema: X, opts: J, gen: Y } = $;
    XL($, () => {
      if (J.$comment && X.$comment) zL($);
      if (
        (iy($),
        Y.let(n.default.vErrors, null),
        Y.let(n.default.errors, 0),
        J.unevaluated)
      )
        ly($);
      (WL($), oy($));
    });
    return;
  }
  function ly($) {
    let { gen: X, validateName: J } = $;
    (($.evaluated = X.const("evaluated", u._`${J}.evaluated`)),
      X.if(u._`${$.evaluated}.dynamicProps`, () =>
        X.assign(u._`${$.evaluated}.props`, u._`undefined`),
      ),
      X.if(u._`${$.evaluated}.dynamicItems`, () =>
        X.assign(u._`${$.evaluated}.items`, u._`undefined`),
      ));
  }
  function aj($, X) {
    let J = typeof $ == "object" && $[X.schemaId];
    return J && (X.code.source || X.code.process)
      ? u._`/*# sourceURL=${J} */`
      : u.nil;
  }
  function cy($, X) {
    if (QL($)) {
      if ((YL($), JL($))) {
        dy($, X);
        return;
      }
    }
    (0, $L.boolOrEmptySchema)($, X);
  }
  function JL({ schema: $, self: X }) {
    if (typeof $ == "boolean") return !$;
    for (let J in $) if (X.RULES.all[J]) return !0;
    return !1;
  }
  function QL($) {
    return typeof $.schema != "boolean";
  }
  function dy($, X) {
    let { schema: J, gen: Y, opts: Q } = $;
    if (Q.$comment && J.$comment) zL($);
    (ny($), ry($));
    let W = Y.const("_errs", n.default.errors);
    (WL($, W), Y.var(X, u._`${W} === ${n.default.errors}`));
  }
  function YL($) {
    ((0, v4.checkUnknownRules)($), py($));
  }
  function WL($, X) {
    if ($.opts.jtd) return sj($, [], !1, X);
    let J = (0, tj.getSchemaTypes)($.schema),
      Y = (0, tj.coerceAndCheckDataType)($, J);
    sj($, J, !Y, X);
  }
  function py($) {
    let { schema: X, errSchemaPath: J, opts: Y, self: Q } = $;
    if (
      X.$ref &&
      Y.ignoreKeywordsWithRef &&
      (0, v4.schemaHasRulesButRef)(X, Q.RULES)
    )
      Q.logger.warn(`$ref: keywords ignored in schema at path "${J}"`);
  }
  function iy($) {
    let { schema: X, opts: J } = $;
    if (X.default !== void 0 && J.useDefaults && J.strictSchema)
      (0, v4.checkStrictMode)($, "default is ignored in the schema root");
  }
  function ny($) {
    let X = $.schema[$.opts.schemaId];
    if (X) $.baseId = (0, yy.resolveUrl)($.opts.uriResolver, $.baseId, X);
  }
  function ry($) {
    if ($.schema.$async && !$.schemaEnv.$async)
      throw Error("async schema in sync schema");
  }
  function zL({ gen: $, schemaEnv: X, schema: J, errSchemaPath: Y, opts: Q }) {
    let W = J.$comment;
    if (Q.$comment === !0) $.code(u._`${n.default.self}.logger.log(${W})`);
    else if (typeof Q.$comment == "function") {
      let z = u.str`${Y}/$comment`,
        G = $.scopeValue("root", { ref: X.root });
      $.code(u._`${n.default.self}.opts.$comment(${W}, ${z}, ${G}.schema)`);
    }
  }
  function oy($) {
    let {
      gen: X,
      schemaEnv: J,
      validateName: Y,
      ValidationError: Q,
      opts: W,
    } = $;
    if (J.$async)
      X.if(
        u._`${n.default.errors} === 0`,
        () => X.return(n.default.data),
        () => X.throw(u._`new ${Q}(${n.default.vErrors})`),
      );
    else {
      if ((X.assign(u._`${Y}.errors`, n.default.vErrors), W.unevaluated)) ty($);
      X.return(u._`${n.default.errors} === 0`);
    }
  }
  function ty({ gen: $, evaluated: X, props: J, items: Y }) {
    if (J instanceof u.Name) $.assign(u._`${X}.props`, J);
    if (Y instanceof u.Name) $.assign(u._`${X}.items`, Y);
  }
  function sj($, X, J, Y) {
    let { gen: Q, schema: W, data: z, allErrors: G, opts: U, self: H } = $,
      { RULES: K } = H;
    if (
      W.$ref &&
      (U.ignoreKeywordsWithRef || !(0, v4.schemaHasRulesButRef)(W, K))
    ) {
      Q.block(() => UL($, "$ref", K.all.$ref.definition));
      return;
    }
    if (!U.jtd) ay($, X);
    Q.block(() => {
      for (let V of K.rules) N(V);
      N(K.post);
    });
    function N(V) {
      if (!(0, lH.shouldUseGroup)(W, V)) return;
      if (V.type) {
        if (
          (Q.if((0, MY.checkDataType)(V.type, z, U.strictNumbers)),
          ej($, V),
          X.length === 1 && X[0] === V.type && J)
        )
          (Q.else(), (0, MY.reportTypeError)($));
        Q.endIf();
      } else ej($, V);
      if (!G) Q.if(u._`${n.default.errors} === ${Y || 0}`);
    }
  }
  function ej($, X) {
    let {
      gen: J,
      schema: Y,
      opts: { useDefaults: Q },
    } = $;
    if (Q) (0, fy.assignDefaults)($, X.type);
    J.block(() => {
      for (let W of X.rules)
        if ((0, lH.shouldUseRule)(Y, W)) UL($, W.keyword, W.definition, X.type);
    });
  }
  function ay($, X) {
    if ($.schemaEnv.meta || !$.opts.strictTypes) return;
    if ((sy($, X), !$.opts.allowUnionTypes)) ey($, X);
    $g($, $.dataTypes);
  }
  function sy($, X) {
    if (!X.length) return;
    if (!$.dataTypes.length) {
      $.dataTypes = X;
      return;
    }
    (X.forEach((J) => {
      if (!GL($.dataTypes, J))
        cH($, `type "${J}" not allowed by context "${$.dataTypes.join(",")}"`);
    }),
      Jg($, X));
  }
  function ey($, X) {
    if (X.length > 1 && !(X.length === 2 && X.includes("null")))
      cH($, "use allowUnionTypes to allow union type keyword");
  }
  function $g($, X) {
    let J = $.self.RULES.all;
    for (let Y in J) {
      let Q = J[Y];
      if (typeof Q == "object" && (0, lH.shouldUseRule)($.schema, Q)) {
        let { type: W } = Q.definition;
        if (W.length && !W.some((z) => Xg(X, z)))
          cH($, `missing type "${W.join(",")}" for keyword "${Y}"`);
      }
    }
  }
  function Xg($, X) {
    return $.includes(X) || (X === "number" && $.includes("integer"));
  }
  function GL($, X) {
    return $.includes(X) || (X === "integer" && $.includes("number"));
  }
  function Jg($, X) {
    let J = [];
    for (let Y of $.dataTypes)
      if (GL(X, Y)) J.push(Y);
      else if (X.includes("integer") && Y === "number") J.push("integer");
    $.dataTypes = J;
  }
  function cH($, X) {
    let J = $.schemaEnv.baseId + $.errSchemaPath;
    ((X += ` at "${J}" (strictTypes)`),
      (0, v4.checkStrictMode)($, X, $.opts.strictTypes));
  }
  class dH {
    constructor($, X, J) {
      if (
        ((0, UJ.validateKeywordUsage)($, X, J),
        (this.gen = $.gen),
        (this.allErrors = $.allErrors),
        (this.keyword = J),
        (this.data = $.data),
        (this.schema = $.schema[J]),
        (this.$data =
          X.$data && $.opts.$data && this.schema && this.schema.$data),
        (this.schemaValue = (0, v4.schemaRefOrVal)(
          $,
          this.schema,
          J,
          this.$data,
        )),
        (this.schemaType = X.schemaType),
        (this.parentSchema = $.schema),
        (this.params = {}),
        (this.it = $),
        (this.def = X),
        this.$data)
      )
        this.schemaCode = $.gen.const("vSchema", HL(this.$data, $));
      else if (
        ((this.schemaCode = this.schemaValue),
        !(0, UJ.validSchemaType)(this.schema, X.schemaType, X.allowUndefined))
      )
        throw Error(`${J} value must be ${JSON.stringify(X.schemaType)}`);
      if ("code" in X ? X.trackErrors : X.errors !== !1)
        this.errsCount = $.gen.const("_errs", n.default.errors);
    }
    result($, X, J) {
      this.failResult((0, u.not)($), X, J);
    }
    failResult($, X, J) {
      if ((this.gen.if($), J)) J();
      else this.error();
      if (X) {
        if ((this.gen.else(), X(), this.allErrors)) this.gen.endIf();
      } else if (this.allErrors) this.gen.endIf();
      else this.gen.else();
    }
    pass($, X) {
      this.failResult((0, u.not)($), void 0, X);
    }
    fail($) {
      if ($ === void 0) {
        if ((this.error(), !this.allErrors)) this.gen.if(!1);
        return;
      }
      if ((this.gen.if($), this.error(), this.allErrors)) this.gen.endIf();
      else this.gen.else();
    }
    fail$data($) {
      if (!this.$data) return this.fail($);
      let { schemaCode: X } = this;
      this.fail(
        u._`${X} !== undefined && (${(0, u.or)(this.invalid$data(), $)})`,
      );
    }
    error($, X, J) {
      if (X) {
        (this.setParams(X), this._error($, J), this.setParams({}));
        return;
      }
      this._error($, J);
    }
    _error($, X) {
      ($ ? GJ.reportExtraError : GJ.reportError)(this, this.def.error, X);
    }
    $dataError() {
      (0, GJ.reportError)(this, this.def.$dataError || GJ.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw Error('add "trackErrors" to keyword definition');
      (0, GJ.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok($) {
      if (!this.allErrors) this.gen.if($);
    }
    setParams($, X) {
      if (X) Object.assign(this.params, $);
      else this.params = $;
    }
    block$data($, X, J = u.nil) {
      this.gen.block(() => {
        (this.check$data($, J), X());
      });
    }
    check$data($ = u.nil, X = u.nil) {
      if (!this.$data) return;
      let { gen: J, schemaCode: Y, schemaType: Q, def: W } = this;
      if ((J.if((0, u.or)(u._`${Y} === undefined`, X)), $ !== u.nil))
        J.assign($, !0);
      if (Q.length || W.validateSchema) {
        if ((J.elseIf(this.invalid$data()), this.$dataError(), $ !== u.nil))
          J.assign($, !1);
      }
      J.else();
    }
    invalid$data() {
      let { gen: $, schemaCode: X, schemaType: J, def: Y, it: Q } = this;
      return (0, u.or)(W(), z());
      function W() {
        if (J.length) {
          if (!(X instanceof u.Name)) throw Error("ajv implementation error");
          let G = Array.isArray(J) ? J : [J];
          return u._`${(0, MY.checkDataTypes)(G, X, Q.opts.strictNumbers, MY.DataType.Wrong)}`;
        }
        return u.nil;
      }
      function z() {
        if (Y.validateSchema) {
          let G = $.scopeValue("validate$data", { ref: Y.validateSchema });
          return u._`!${G}(${X})`;
        }
        return u.nil;
      }
    }
    subschema($, X) {
      let J = (0, mH.getSubschema)(this.it, $);
      ((0, mH.extendSubschemaData)(J, this.it, $),
        (0, mH.extendSubschemaMode)(J, $));
      let Y = { ...this.it, ...J, items: void 0, props: void 0 };
      return (cy(Y, X), Y);
    }
    mergeEvaluated($, X) {
      let { it: J, gen: Y } = this;
      if (!J.opts.unevaluated) return;
      if (J.props !== !0 && $.props !== void 0)
        J.props = v4.mergeEvaluated.props(Y, $.props, J.props, X);
      if (J.items !== !0 && $.items !== void 0)
        J.items = v4.mergeEvaluated.items(Y, $.items, J.items, X);
    }
    mergeValidEvaluated($, X) {
      let { it: J, gen: Y } = this;
      if (J.opts.unevaluated && (J.props !== !0 || J.items !== !0))
        return (Y.if(X, () => this.mergeEvaluated($, u.Name)), !0);
    }
  }
  KL.KeywordCxt = dH;
  function UL($, X, J, Y) {
    let Q = new dH($, J, X);
    if ("code" in J) J.code(Q, Y);
    else if (Q.$data && J.validate) (0, UJ.funcKeywordCode)(Q, J);
    else if ("macro" in J) (0, UJ.macroKeywordCode)(Q, J);
    else if (J.compile || J.validate) (0, UJ.funcKeywordCode)(Q, J);
  }
  var Qg = /^\/(?:[^~]|~0|~1)*$/,
    Yg = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function HL($, { dataLevel: X, dataNames: J, dataPathArr: Y }) {
    let Q, W;
    if ($ === "") return n.default.rootData;
    if ($[0] === "/") {
      if (!Qg.test($)) throw Error(`Invalid JSON-pointer: ${$}`);
      ((Q = $), (W = n.default.rootData));
    } else {
      let H = Yg.exec($);
      if (!H) throw Error(`Invalid JSON-pointer: ${$}`);
      let K = +H[1];
      if (((Q = H[2]), Q === "#")) {
        if (K >= X) throw Error(U("property/index", K));
        return Y[X - K];
      }
      if (K > X) throw Error(U("data", K));
      if (((W = J[X - K]), !Q)) return W;
    }
    let z = W,
      G = Q.split("/");
    for (let H of G)
      if (H)
        ((W = u._`${W}${(0, u.getProperty)((0, v4.unescapeJsonPointer)(H))}`),
          (z = u._`${z} && ${W}`));
    return z;
    function U(H, K) {
      return `Cannot access ${H} ${K} levels up, current level is ${X}`;
    }
  }
  KL.getData = HL;
});
var AY = M((OL) => {
  Object.defineProperty(OL, "__esModule", { value: !0 });
  class VL extends Error {
    constructor($) {
      super("validation failed");
      ((this.errors = $), (this.ajv = this.validation = !0));
    }
  }
  OL.default = VL;
});
var KJ = M((BL) => {
  Object.defineProperty(BL, "__esModule", { value: !0 });
  var pH = zJ();
  class wL extends Error {
    constructor($, X, J, Y) {
      super(Y || `can't resolve reference ${J} from id ${X}`);
      ((this.missingRef = (0, pH.resolveUrl)($, X, J)),
        (this.missingSchema = (0, pH.normalizeId)(
          (0, pH.getFullPath)($, this.missingRef),
        )));
    }
  }
  BL.default = wL;
});
var ZY = M((FL) => {
  Object.defineProperty(FL, "__esModule", { value: !0 });
  FL.resolveSchema =
    FL.getCompilingSchema =
    FL.resolveRef =
    FL.compileSchema =
    FL.SchemaEnv =
      void 0;
  var i6 = a(),
    Hg = AY(),
    o1 = S4(),
    n6 = zJ(),
    qL = Y$(),
    Kg = HJ();
  class NJ {
    constructor($) {
      var X;
      ((this.refs = {}), (this.dynamicAnchors = {}));
      let J;
      if (typeof $.schema == "object") J = $.schema;
      ((this.schema = $.schema),
        (this.schemaId = $.schemaId),
        (this.root = $.root || this),
        (this.baseId =
          (X = $.baseId) !== null && X !== void 0
            ? X
            : (0, n6.normalizeId)(
                J === null || J === void 0 ? void 0 : J[$.schemaId || "$id"],
              )),
        (this.schemaPath = $.schemaPath),
        (this.localRefs = $.localRefs),
        (this.meta = $.meta),
        (this.$async = J === null || J === void 0 ? void 0 : J.$async),
        (this.refs = {}));
    }
  }
  FL.SchemaEnv = NJ;
  function nH($) {
    let X = DL.call(this, $);
    if (X) return X;
    let J = (0, n6.getFullPath)(this.opts.uriResolver, $.root.baseId),
      { es5: Y, lines: Q } = this.opts.code,
      { ownProperties: W } = this.opts,
      z = new i6.CodeGen(this.scope, { es5: Y, lines: Q, ownProperties: W }),
      G;
    if ($.$async)
      G = z.scopeValue("Error", {
        ref: Hg.default,
        code: i6._`require("ajv/dist/runtime/validation_error").default`,
      });
    let U = z.scopeName("validate");
    $.validateName = U;
    let H = {
        gen: z,
        allErrors: this.opts.allErrors,
        data: o1.default.data,
        parentData: o1.default.parentData,
        parentDataProperty: o1.default.parentDataProperty,
        dataNames: [o1.default.data],
        dataPathArr: [i6.nil],
        dataLevel: 0,
        dataTypes: [],
        definedProperties: new Set(),
        topSchemaRef: z.scopeValue(
          "schema",
          this.opts.code.source === !0
            ? { ref: $.schema, code: (0, i6.stringify)($.schema) }
            : { ref: $.schema },
        ),
        validateName: U,
        ValidationError: G,
        schema: $.schema,
        schemaEnv: $,
        rootId: J,
        baseId: $.baseId || J,
        schemaPath: i6.nil,
        errSchemaPath: $.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: i6._`""`,
        opts: this.opts,
        self: this,
      },
      K;
    try {
      (this._compilations.add($),
        (0, Kg.validateFunctionCode)(H),
        z.optimize(this.opts.code.optimize));
      let N = z.toString();
      if (
        ((K = `${z.scopeRefs(o1.default.scope)}return ${N}`),
        this.opts.code.process)
      )
        K = this.opts.code.process(K, $);
      let O = Function(
        `${o1.default.self}`,
        `${o1.default.scope}`,
        K,
      )(this, this.scope.get());
      if (
        (this.scope.value(U, { ref: O }),
        (O.errors = null),
        (O.schema = $.schema),
        (O.schemaEnv = $),
        $.$async)
      )
        O.$async = !0;
      if (this.opts.code.source === !0)
        O.source = { validateName: U, validateCode: N, scopeValues: z._values };
      if (this.opts.unevaluated) {
        let { props: w, items: B } = H;
        if (
          ((O.evaluated = {
            props: w instanceof i6.Name ? void 0 : w,
            items: B instanceof i6.Name ? void 0 : B,
            dynamicProps: w instanceof i6.Name,
            dynamicItems: B instanceof i6.Name,
          }),
          O.source)
        )
          O.source.evaluated = (0, i6.stringify)(O.evaluated);
      }
      return (($.validate = O), $);
    } catch (N) {
      if ((delete $.validate, delete $.validateName, K))
        this.logger.error("Error compiling schema, function code:", K);
      throw N;
    } finally {
      this._compilations.delete($);
    }
  }
  FL.compileSchema = nH;
  function Ng($, X, J) {
    var Y;
    J = (0, n6.resolveUrl)(this.opts.uriResolver, X, J);
    let Q = $.refs[J];
    if (Q) return Q;
    let W = wg.call(this, $, J);
    if (W === void 0) {
      let z = (Y = $.localRefs) === null || Y === void 0 ? void 0 : Y[J],
        { schemaId: G } = this.opts;
      if (z) W = new NJ({ schema: z, schemaId: G, root: $, baseId: X });
    }
    if (W === void 0) return;
    return ($.refs[J] = Vg.call(this, W));
  }
  FL.resolveRef = Ng;
  function Vg($) {
    if ((0, n6.inlineRef)($.schema, this.opts.inlineRefs)) return $.schema;
    return $.validate ? $ : nH.call(this, $);
  }
  function DL($) {
    for (let X of this._compilations) if (Og(X, $)) return X;
  }
  FL.getCompilingSchema = DL;
  function Og($, X) {
    return $.schema === X.schema && $.root === X.root && $.baseId === X.baseId;
  }
  function wg($, X) {
    let J;
    while (typeof (J = this.refs[X]) == "string") X = J;
    return J || this.schemas[X] || IY.call(this, $, X);
  }
  function IY($, X) {
    let J = this.opts.uriResolver.parse(X),
      Y = (0, n6._getFullPath)(this.opts.uriResolver, J),
      Q = (0, n6.getFullPath)(this.opts.uriResolver, $.baseId, void 0);
    if (Object.keys($.schema).length > 0 && Y === Q) return iH.call(this, J, $);
    let W = (0, n6.normalizeId)(Y),
      z = this.refs[W] || this.schemas[W];
    if (typeof z == "string") {
      let G = IY.call(this, $, z);
      if (typeof (G === null || G === void 0 ? void 0 : G.schema) !== "object")
        return;
      return iH.call(this, J, G);
    }
    if (typeof (z === null || z === void 0 ? void 0 : z.schema) !== "object")
      return;
    if (!z.validate) nH.call(this, z);
    if (W === (0, n6.normalizeId)(X)) {
      let { schema: G } = z,
        { schemaId: U } = this.opts,
        H = G[U];
      if (H) Q = (0, n6.resolveUrl)(this.opts.uriResolver, Q, H);
      return new NJ({ schema: G, schemaId: U, root: $, baseId: Q });
    }
    return iH.call(this, J, z);
  }
  FL.resolveSchema = IY;
  var Bg = new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions",
  ]);
  function iH($, { baseId: X, schema: J, root: Y }) {
    var Q;
    if (((Q = $.fragment) === null || Q === void 0 ? void 0 : Q[0]) !== "/")
      return;
    for (let G of $.fragment.slice(1).split("/")) {
      if (typeof J === "boolean") return;
      let U = J[(0, qL.unescapeFragment)(G)];
      if (U === void 0) return;
      J = U;
      let H = typeof J === "object" && J[this.opts.schemaId];
      if (!Bg.has(G) && H) X = (0, n6.resolveUrl)(this.opts.uriResolver, X, H);
    }
    let W;
    if (
      typeof J != "boolean" &&
      J.$ref &&
      !(0, qL.schemaHasRulesButRef)(J, this.RULES)
    ) {
      let G = (0, n6.resolveUrl)(this.opts.uriResolver, X, J.$ref);
      W = IY.call(this, Y, G);
    }
    let { schemaId: z } = this.opts;
    if (
      ((W = W || new NJ({ schema: J, schemaId: z, root: Y, baseId: X })),
      W.schema !== W.root.schema)
    )
      return W;
    return;
  }
});
var LL = M((m9$, Lg) => {
  Lg.exports = {
    $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
    description:
      "Meta-schema for $data reference (JSON AnySchema extension proposal)",
    type: "object",
    required: ["$data"],
    properties: {
      $data: {
        type: "string",
        anyOf: [
          { format: "relative-json-pointer" },
          { format: "json-pointer" },
        ],
      },
    },
    additionalProperties: !1,
  };
});
var AL = M((l9$, ML) => {
  var Mg = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15,
  };
  ML.exports = { HEX: Mg };
});
var vL = M((c9$, SL) => {
  var { HEX: Ag } = AL(),
    Ig =
      /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u;
  function RL($) {
    if (EL($, ".") < 3) return { host: $, isIPV4: !1 };
    let X = $.match(Ig) || [],
      [J] = X;
    if (J) return { host: bg(J, "."), isIPV4: !0 };
    else return { host: $, isIPV4: !1 };
  }
  function rH($, X = !1) {
    let J = "",
      Y = !0;
    for (let Q of $) {
      if (Ag[Q] === void 0) return;
      if (Q !== "0" && Y === !0) Y = !1;
      if (!Y) J += Q;
    }
    if (X && J.length === 0) J = "0";
    return J;
  }
  function Zg($) {
    let X = 0,
      J = { error: !1, address: "", zone: "" },
      Y = [],
      Q = [],
      W = !1,
      z = !1,
      G = !1;
    function U() {
      if (Q.length) {
        if (W === !1) {
          let H = rH(Q);
          if (H !== void 0) Y.push(H);
          else return ((J.error = !0), !1);
        }
        Q.length = 0;
      }
      return !0;
    }
    for (let H = 0; H < $.length; H++) {
      let K = $[H];
      if (K === "[" || K === "]") continue;
      if (K === ":") {
        if (z === !0) G = !0;
        if (!U()) break;
        if ((X++, Y.push(":"), X > 7)) {
          J.error = !0;
          break;
        }
        if (H - 1 >= 0 && $[H - 1] === ":") z = !0;
        continue;
      } else if (K === "%") {
        if (!U()) break;
        W = !0;
      } else {
        Q.push(K);
        continue;
      }
    }
    if (Q.length)
      if (W) J.zone = Q.join("");
      else if (G) Y.push(Q.join(""));
      else Y.push(rH(Q));
    return ((J.address = Y.join("")), J);
  }
  function PL($) {
    if (EL($, ":") < 2) return { host: $, isIPV6: !1 };
    let X = Zg($);
    if (!X.error) {
      let { address: J, address: Y } = X;
      if (X.zone) ((J += "%" + X.zone), (Y += "%25" + X.zone));
      return { host: J, escapedHost: Y, isIPV6: !0 };
    } else return { host: $, isIPV6: !1 };
  }
  function bg($, X) {
    let J = "",
      Y = !0,
      Q = $.length;
    for (let W = 0; W < Q; W++) {
      let z = $[W];
      if (z === "0" && Y) {
        if ((W + 1 <= Q && $[W + 1] === X) || W + 1 === Q) ((J += z), (Y = !1));
      } else {
        if (z === X) Y = !0;
        else Y = !1;
        J += z;
      }
    }
    return J;
  }
  function EL($, X) {
    let J = 0;
    for (let Y = 0; Y < $.length; Y++) if ($[Y] === X) J++;
    return J;
  }
  var IL = /^\.\.?\//u,
    ZL = /^\/\.(?:\/|$)/u,
    bL = /^\/\.\.(?:\/|$)/u,
    Rg = /^\/?(?:.|\n)*?(?=\/|$)/u;
  function Pg($) {
    let X = [];
    while ($.length)
      if ($.match(IL)) $ = $.replace(IL, "");
      else if ($.match(ZL)) $ = $.replace(ZL, "/");
      else if ($.match(bL)) (($ = $.replace(bL, "/")), X.pop());
      else if ($ === "." || $ === "..") $ = "";
      else {
        let J = $.match(Rg);
        if (J) {
          let Y = J[0];
          (($ = $.slice(Y.length)), X.push(Y));
        } else throw Error("Unexpected dot segment condition");
      }
    return X.join("");
  }
  function Eg($, X) {
    let J = X !== !0 ? escape : unescape;
    if ($.scheme !== void 0) $.scheme = J($.scheme);
    if ($.userinfo !== void 0) $.userinfo = J($.userinfo);
    if ($.host !== void 0) $.host = J($.host);
    if ($.path !== void 0) $.path = J($.path);
    if ($.query !== void 0) $.query = J($.query);
    if ($.fragment !== void 0) $.fragment = J($.fragment);
    return $;
  }
  function Sg($) {
    let X = [];
    if ($.userinfo !== void 0) (X.push($.userinfo), X.push("@"));
    if ($.host !== void 0) {
      let J = unescape($.host),
        Y = RL(J);
      if (Y.isIPV4) J = Y.host;
      else {
        let Q = PL(Y.host);
        if (Q.isIPV6 === !0) J = `[${Q.escapedHost}]`;
        else J = $.host;
      }
      X.push(J);
    }
    if (typeof $.port === "number" || typeof $.port === "string")
      (X.push(":"), X.push(String($.port)));
    return X.length ? X.join("") : void 0;
  }
  SL.exports = {
    recomposeAuthority: Sg,
    normalizeComponentEncoding: Eg,
    removeDotSegments: Pg,
    normalizeIPv4: RL,
    normalizeIPv6: PL,
    stringArrayToHexStripped: rH,
  };
});
var fL = M((d9$, TL) => {
  var vg = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu,
    Cg = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
  function CL($) {
    return typeof $.secure === "boolean"
      ? $.secure
      : String($.scheme).toLowerCase() === "wss";
  }
  function kL($) {
    if (!$.host) $.error = $.error || "HTTP URIs must have a host.";
    return $;
  }
  function _L($) {
    let X = String($.scheme).toLowerCase() === "https";
    if ($.port === (X ? 443 : 80) || $.port === "") $.port = void 0;
    if (!$.path) $.path = "/";
    return $;
  }
  function kg($) {
    return (
      ($.secure = CL($)),
      ($.resourceName = ($.path || "/") + ($.query ? "?" + $.query : "")),
      ($.path = void 0),
      ($.query = void 0),
      $
    );
  }
  function _g($) {
    if ($.port === (CL($) ? 443 : 80) || $.port === "") $.port = void 0;
    if (typeof $.secure === "boolean")
      (($.scheme = $.secure ? "wss" : "ws"), ($.secure = void 0));
    if ($.resourceName) {
      let [X, J] = $.resourceName.split("?");
      (($.path = X && X !== "/" ? X : void 0),
        ($.query = J),
        ($.resourceName = void 0));
    }
    return (($.fragment = void 0), $);
  }
  function xg($, X) {
    if (!$.path) return (($.error = "URN can not be parsed"), $);
    let J = $.path.match(Cg);
    if (J) {
      let Y = X.scheme || $.scheme || "urn";
      (($.nid = J[1].toLowerCase()), ($.nss = J[2]));
      let Q = `${Y}:${X.nid || $.nid}`,
        W = oH[Q];
      if ((($.path = void 0), W)) $ = W.parse($, X);
    } else $.error = $.error || "URN can not be parsed.";
    return $;
  }
  function Tg($, X) {
    let J = X.scheme || $.scheme || "urn",
      Y = $.nid.toLowerCase(),
      Q = `${J}:${X.nid || Y}`,
      W = oH[Q];
    if (W) $ = W.serialize($, X);
    let z = $,
      G = $.nss;
    return ((z.path = `${Y || X.nid}:${G}`), (X.skipEscape = !0), z);
  }
  function fg($, X) {
    let J = $;
    if (
      ((J.uuid = J.nss),
      (J.nss = void 0),
      !X.tolerant && (!J.uuid || !vg.test(J.uuid)))
    )
      J.error = J.error || "UUID is not valid.";
    return J;
  }
  function yg($) {
    let X = $;
    return ((X.nss = ($.uuid || "").toLowerCase()), X);
  }
  var xL = { scheme: "http", domainHost: !0, parse: kL, serialize: _L },
    gg = {
      scheme: "https",
      domainHost: xL.domainHost,
      parse: kL,
      serialize: _L,
    },
    bY = { scheme: "ws", domainHost: !0, parse: kg, serialize: _g },
    hg = {
      scheme: "wss",
      domainHost: bY.domainHost,
      parse: bY.parse,
      serialize: bY.serialize,
    },
    ug = { scheme: "urn", parse: xg, serialize: Tg, skipNormalize: !0 },
    mg = { scheme: "urn:uuid", parse: fg, serialize: yg, skipNormalize: !0 },
    oH = { http: xL, https: gg, ws: bY, wss: hg, urn: ug, "urn:uuid": mg };
  TL.exports = oH;
});
var gL = M((p9$, PY) => {
  var {
      normalizeIPv6: lg,
      normalizeIPv4: cg,
      removeDotSegments: VJ,
      recomposeAuthority: dg,
      normalizeComponentEncoding: RY,
    } = vL(),
    tH = fL();
  function pg($, X) {
    if (typeof $ === "string") $ = J4(C4($, X), X);
    else if (typeof $ === "object") $ = C4(J4($, X), X);
    return $;
  }
  function ig($, X, J) {
    let Y = Object.assign({ scheme: "null" }, J),
      Q = yL(C4($, Y), C4(X, Y), Y, !0);
    return J4(Q, { ...Y, skipEscape: !0 });
  }
  function yL($, X, J, Y) {
    let Q = {};
    if (!Y) (($ = C4(J4($, J), J)), (X = C4(J4(X, J), J)));
    if (((J = J || {}), !J.tolerant && X.scheme))
      ((Q.scheme = X.scheme),
        (Q.userinfo = X.userinfo),
        (Q.host = X.host),
        (Q.port = X.port),
        (Q.path = VJ(X.path || "")),
        (Q.query = X.query));
    else {
      if (X.userinfo !== void 0 || X.host !== void 0 || X.port !== void 0)
        ((Q.userinfo = X.userinfo),
          (Q.host = X.host),
          (Q.port = X.port),
          (Q.path = VJ(X.path || "")),
          (Q.query = X.query));
      else {
        if (!X.path)
          if (((Q.path = $.path), X.query !== void 0)) Q.query = X.query;
          else Q.query = $.query;
        else {
          if (X.path.charAt(0) === "/") Q.path = VJ(X.path);
          else {
            if (
              ($.userinfo !== void 0 ||
                $.host !== void 0 ||
                $.port !== void 0) &&
              !$.path
            )
              Q.path = "/" + X.path;
            else if (!$.path) Q.path = X.path;
            else Q.path = $.path.slice(0, $.path.lastIndexOf("/") + 1) + X.path;
            Q.path = VJ(Q.path);
          }
          Q.query = X.query;
        }
        ((Q.userinfo = $.userinfo), (Q.host = $.host), (Q.port = $.port));
      }
      Q.scheme = $.scheme;
    }
    return ((Q.fragment = X.fragment), Q);
  }
  function ng($, X, J) {
    if (typeof $ === "string")
      (($ = unescape($)), ($ = J4(RY(C4($, J), !0), { ...J, skipEscape: !0 })));
    else if (typeof $ === "object") $ = J4(RY($, !0), { ...J, skipEscape: !0 });
    if (typeof X === "string")
      ((X = unescape(X)), (X = J4(RY(C4(X, J), !0), { ...J, skipEscape: !0 })));
    else if (typeof X === "object") X = J4(RY(X, !0), { ...J, skipEscape: !0 });
    return $.toLowerCase() === X.toLowerCase();
  }
  function J4($, X) {
    let J = {
        host: $.host,
        scheme: $.scheme,
        userinfo: $.userinfo,
        port: $.port,
        path: $.path,
        query: $.query,
        nid: $.nid,
        nss: $.nss,
        uuid: $.uuid,
        fragment: $.fragment,
        reference: $.reference,
        resourceName: $.resourceName,
        secure: $.secure,
        error: "",
      },
      Y = Object.assign({}, X),
      Q = [],
      W = tH[(Y.scheme || J.scheme || "").toLowerCase()];
    if (W && W.serialize) W.serialize(J, Y);
    if (J.path !== void 0)
      if (!Y.skipEscape) {
        if (((J.path = escape(J.path)), J.scheme !== void 0))
          J.path = J.path.split("%3A").join(":");
      } else J.path = unescape(J.path);
    if (Y.reference !== "suffix" && J.scheme) Q.push(J.scheme, ":");
    let z = dg(J);
    if (z !== void 0) {
      if (Y.reference !== "suffix") Q.push("//");
      if ((Q.push(z), J.path && J.path.charAt(0) !== "/")) Q.push("/");
    }
    if (J.path !== void 0) {
      let G = J.path;
      if (!Y.absolutePath && (!W || !W.absolutePath)) G = VJ(G);
      if (z === void 0) G = G.replace(/^\/\//u, "/%2F");
      Q.push(G);
    }
    if (J.query !== void 0) Q.push("?", J.query);
    if (J.fragment !== void 0) Q.push("#", J.fragment);
    return Q.join("");
  }
  var rg = Array.from({ length: 127 }, ($, X) =>
    /[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(X)),
  );
  function og($) {
    let X = 0;
    for (let J = 0, Y = $.length; J < Y; ++J)
      if (((X = $.charCodeAt(J)), X > 126 || rg[X])) return !0;
    return !1;
  }
  var tg =
    /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function C4($, X) {
    let J = Object.assign({}, X),
      Y = {
        scheme: void 0,
        userinfo: void 0,
        host: "",
        port: void 0,
        path: "",
        query: void 0,
        fragment: void 0,
      },
      Q = $.indexOf("%") !== -1,
      W = !1;
    if (J.reference === "suffix")
      $ = (J.scheme ? J.scheme + ":" : "") + "//" + $;
    let z = $.match(tg);
    if (z) {
      if (
        ((Y.scheme = z[1]),
        (Y.userinfo = z[3]),
        (Y.host = z[4]),
        (Y.port = parseInt(z[5], 10)),
        (Y.path = z[6] || ""),
        (Y.query = z[7]),
        (Y.fragment = z[8]),
        isNaN(Y.port))
      )
        Y.port = z[5];
      if (Y.host) {
        let U = cg(Y.host);
        if (U.isIPV4 === !1) {
          let H = lg(U.host);
          ((Y.host = H.host.toLowerCase()), (W = H.isIPV6));
        } else ((Y.host = U.host), (W = !0));
      }
      if (
        Y.scheme === void 0 &&
        Y.userinfo === void 0 &&
        Y.host === void 0 &&
        Y.port === void 0 &&
        Y.query === void 0 &&
        !Y.path
      )
        Y.reference = "same-document";
      else if (Y.scheme === void 0) Y.reference = "relative";
      else if (Y.fragment === void 0) Y.reference = "absolute";
      else Y.reference = "uri";
      if (
        J.reference &&
        J.reference !== "suffix" &&
        J.reference !== Y.reference
      )
        Y.error = Y.error || "URI is not a " + J.reference + " reference.";
      let G = tH[(J.scheme || Y.scheme || "").toLowerCase()];
      if (!J.unicodeSupport && (!G || !G.unicodeSupport)) {
        if (
          Y.host &&
          (J.domainHost || (G && G.domainHost)) &&
          W === !1 &&
          og(Y.host)
        )
          try {
            Y.host = URL.domainToASCII(Y.host.toLowerCase());
          } catch (U) {
            Y.error =
              Y.error ||
              "Host's domain name can not be converted to ASCII: " + U;
          }
      }
      if (!G || (G && !G.skipNormalize)) {
        if (Q && Y.scheme !== void 0) Y.scheme = unescape(Y.scheme);
        if (Q && Y.host !== void 0) Y.host = unescape(Y.host);
        if (Y.path) Y.path = escape(unescape(Y.path));
        if (Y.fragment) Y.fragment = encodeURI(decodeURIComponent(Y.fragment));
      }
      if (G && G.parse) G.parse(Y, J);
    } else Y.error = Y.error || "URI can not be parsed.";
    return Y;
  }
  var aH = {
    SCHEMES: tH,
    normalize: pg,
    resolve: ig,
    resolveComponents: yL,
    equal: ng,
    serialize: J4,
    parse: C4,
  };
  PY.exports = aH;
  PY.exports.default = aH;
  PY.exports.fastUri = aH;
});
var mL = M((uL) => {
  Object.defineProperty(uL, "__esModule", { value: !0 });
  var hL = gL();
  hL.code = 'require("ajv/dist/runtime/uri").default';
  uL.default = hL;
});
var oL = M((k4) => {
  Object.defineProperty(k4, "__esModule", { value: !0 });
  k4.CodeGen =
    k4.Name =
    k4.nil =
    k4.stringify =
    k4.str =
    k4._ =
    k4.KeywordCxt =
      void 0;
  var sg = HJ();
  Object.defineProperty(k4, "KeywordCxt", {
    enumerable: !0,
    get: function () {
      return sg.KeywordCxt;
    },
  });
  var V8 = a();
  Object.defineProperty(k4, "_", {
    enumerable: !0,
    get: function () {
      return V8._;
    },
  });
  Object.defineProperty(k4, "str", {
    enumerable: !0,
    get: function () {
      return V8.str;
    },
  });
  Object.defineProperty(k4, "stringify", {
    enumerable: !0,
    get: function () {
      return V8.stringify;
    },
  });
  Object.defineProperty(k4, "nil", {
    enumerable: !0,
    get: function () {
      return V8.nil;
    },
  });
  Object.defineProperty(k4, "Name", {
    enumerable: !0,
    get: function () {
      return V8.Name;
    },
  });
  Object.defineProperty(k4, "CodeGen", {
    enumerable: !0,
    get: function () {
      return V8.CodeGen;
    },
  });
  var eg = AY(),
    iL = KJ(),
    $h = CH(),
    OJ = ZY(),
    Xh = a(),
    wJ = zJ(),
    EY = WJ(),
    eH = Y$(),
    lL = LL(),
    Jh = mL(),
    nL = ($, X) => new RegExp($, X);
  nL.code = "new RegExp";
  var Qh = ["removeAdditional", "useDefaults", "coerceTypes"],
    Yh = new Set([
      "validate",
      "serialize",
      "parse",
      "wrapper",
      "root",
      "schema",
      "keyword",
      "pattern",
      "formats",
      "validate$data",
      "func",
      "obj",
      "Error",
    ]),
    Wh = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs:
        "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode:
        "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats:
        "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now.",
    },
    zh = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode:
        '"minLength"/"maxLength" account for unicode characters by default.',
    },
    cL = 200;
  function Gh($) {
    var X,
      J,
      Y,
      Q,
      W,
      z,
      G,
      U,
      H,
      K,
      N,
      V,
      O,
      w,
      B,
      F,
      j,
      I,
      Z,
      _,
      T,
      B$,
      _$,
      V6,
      W4;
    let z4 = $.strict,
      t6 = (X = $.code) === null || X === void 0 ? void 0 : X.optimize,
      s1 = t6 === !0 || t6 === void 0 ? 1 : t6 || 0,
      _4 =
        (Y = (J = $.code) === null || J === void 0 ? void 0 : J.regExp) !==
          null && Y !== void 0
          ? Y
          : nL,
      e1 = (Q = $.uriResolver) !== null && Q !== void 0 ? Q : Jh.default;
    return {
      strictSchema:
        (z = (W = $.strictSchema) !== null && W !== void 0 ? W : z4) !== null &&
        z !== void 0
          ? z
          : !0,
      strictNumbers:
        (U = (G = $.strictNumbers) !== null && G !== void 0 ? G : z4) !==
          null && U !== void 0
          ? U
          : !0,
      strictTypes:
        (K = (H = $.strictTypes) !== null && H !== void 0 ? H : z4) !== null &&
        K !== void 0
          ? K
          : "log",
      strictTuples:
        (V = (N = $.strictTuples) !== null && N !== void 0 ? N : z4) !== null &&
        V !== void 0
          ? V
          : "log",
      strictRequired:
        (w = (O = $.strictRequired) !== null && O !== void 0 ? O : z4) !==
          null && w !== void 0
          ? w
          : !1,
      code: $.code
        ? { ...$.code, optimize: s1, regExp: _4 }
        : { optimize: s1, regExp: _4 },
      loopRequired: (B = $.loopRequired) !== null && B !== void 0 ? B : cL,
      loopEnum: (F = $.loopEnum) !== null && F !== void 0 ? F : cL,
      meta: (j = $.meta) !== null && j !== void 0 ? j : !0,
      messages: (I = $.messages) !== null && I !== void 0 ? I : !0,
      inlineRefs: (Z = $.inlineRefs) !== null && Z !== void 0 ? Z : !0,
      schemaId: (_ = $.schemaId) !== null && _ !== void 0 ? _ : "$id",
      addUsedSchema: (T = $.addUsedSchema) !== null && T !== void 0 ? T : !0,
      validateSchema:
        (B$ = $.validateSchema) !== null && B$ !== void 0 ? B$ : !0,
      validateFormats:
        (_$ = $.validateFormats) !== null && _$ !== void 0 ? _$ : !0,
      unicodeRegExp: (V6 = $.unicodeRegExp) !== null && V6 !== void 0 ? V6 : !0,
      int32range: (W4 = $.int32range) !== null && W4 !== void 0 ? W4 : !0,
      uriResolver: e1,
    };
  }
  class SY {
    constructor($ = {}) {
      ((this.schemas = {}),
        (this.refs = {}),
        (this.formats = {}),
        (this._compilations = new Set()),
        (this._loading = {}),
        (this._cache = new Map()),
        ($ = this.opts = { ...$, ...Gh($) }));
      let { es5: X, lines: J } = this.opts.code;
      ((this.scope = new Xh.ValueScope({
        scope: {},
        prefixes: Yh,
        es5: X,
        lines: J,
      })),
        (this.logger = Oh($.logger)));
      let Y = $.validateFormats;
      if (
        (($.validateFormats = !1),
        (this.RULES = (0, $h.getRules)()),
        dL.call(this, Wh, $, "NOT SUPPORTED"),
        dL.call(this, zh, $, "DEPRECATED", "warn"),
        (this._metaOpts = Nh.call(this)),
        $.formats)
      )
        Hh.call(this);
      if ((this._addVocabularies(), this._addDefaultMetaSchema(), $.keywords))
        Kh.call(this, $.keywords);
      if (typeof $.meta == "object") this.addMetaSchema($.meta);
      (Uh.call(this), ($.validateFormats = Y));
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      let { $data: $, meta: X, schemaId: J } = this.opts,
        Y = lL;
      if (J === "id") ((Y = { ...lL }), (Y.id = Y.$id), delete Y.$id);
      if (X && $) this.addMetaSchema(Y, Y[J], !1);
    }
    defaultMeta() {
      let { meta: $, schemaId: X } = this.opts;
      return (this.opts.defaultMeta =
        typeof $ == "object" ? $[X] || $ : void 0);
    }
    validate($, X) {
      let J;
      if (typeof $ == "string") {
        if (((J = this.getSchema($)), !J))
          throw Error(`no schema with key or ref "${$}"`);
      } else J = this.compile($);
      let Y = J(X);
      if (!("$async" in J)) this.errors = J.errors;
      return Y;
    }
    compile($, X) {
      let J = this._addSchema($, X);
      return J.validate || this._compileSchemaEnv(J);
    }
    compileAsync($, X) {
      if (typeof this.opts.loadSchema != "function")
        throw Error("options.loadSchema should be a function");
      let { loadSchema: J } = this.opts;
      return Y.call(this, $, X);
      async function Y(H, K) {
        await Q.call(this, H.$schema);
        let N = this._addSchema(H, K);
        return N.validate || W.call(this, N);
      }
      async function Q(H) {
        if (H && !this.getSchema(H)) await Y.call(this, { $ref: H }, !0);
      }
      async function W(H) {
        try {
          return this._compileSchemaEnv(H);
        } catch (K) {
          if (!(K instanceof iL.default)) throw K;
          return (
            z.call(this, K),
            await G.call(this, K.missingSchema),
            W.call(this, H)
          );
        }
      }
      function z({ missingSchema: H, missingRef: K }) {
        if (this.refs[H])
          throw Error(`AnySchema ${H} is loaded but ${K} cannot be resolved`);
      }
      async function G(H) {
        let K = await U.call(this, H);
        if (!this.refs[H]) await Q.call(this, K.$schema);
        if (!this.refs[H]) this.addSchema(K, H, X);
      }
      async function U(H) {
        let K = this._loading[H];
        if (K) return K;
        try {
          return await (this._loading[H] = J(H));
        } finally {
          delete this._loading[H];
        }
      }
    }
    addSchema($, X, J, Y = this.opts.validateSchema) {
      if (Array.isArray($)) {
        for (let W of $) this.addSchema(W, void 0, J, Y);
        return this;
      }
      let Q;
      if (typeof $ === "object") {
        let { schemaId: W } = this.opts;
        if (((Q = $[W]), Q !== void 0 && typeof Q != "string"))
          throw Error(`schema ${W} must be string`);
      }
      return (
        (X = (0, wJ.normalizeId)(X || Q)),
        this._checkUnique(X),
        (this.schemas[X] = this._addSchema($, J, X, Y, !0)),
        this
      );
    }
    addMetaSchema($, X, J = this.opts.validateSchema) {
      return (this.addSchema($, X, !0, J), this);
    }
    validateSchema($, X) {
      if (typeof $ == "boolean") return !0;
      let J;
      if (((J = $.$schema), J !== void 0 && typeof J != "string"))
        throw Error("$schema must be a string");
      if (((J = J || this.opts.defaultMeta || this.defaultMeta()), !J))
        return (
          this.logger.warn("meta-schema not available"),
          (this.errors = null),
          !0
        );
      let Y = this.validate(J, $);
      if (!Y && X) {
        let Q = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log") this.logger.error(Q);
        else throw Error(Q);
      }
      return Y;
    }
    getSchema($) {
      let X;
      while (typeof (X = pL.call(this, $)) == "string") $ = X;
      if (X === void 0) {
        let { schemaId: J } = this.opts,
          Y = new OJ.SchemaEnv({ schema: {}, schemaId: J });
        if (((X = OJ.resolveSchema.call(this, Y, $)), !X)) return;
        this.refs[$] = X;
      }
      return X.validate || this._compileSchemaEnv(X);
    }
    removeSchema($) {
      if ($ instanceof RegExp)
        return (
          this._removeAllSchemas(this.schemas, $),
          this._removeAllSchemas(this.refs, $),
          this
        );
      switch (typeof $) {
        case "undefined":
          return (
            this._removeAllSchemas(this.schemas),
            this._removeAllSchemas(this.refs),
            this._cache.clear(),
            this
          );
        case "string": {
          let X = pL.call(this, $);
          if (typeof X == "object") this._cache.delete(X.schema);
          return (delete this.schemas[$], delete this.refs[$], this);
        }
        case "object": {
          let X = $;
          this._cache.delete(X);
          let J = $[this.opts.schemaId];
          if (J)
            ((J = (0, wJ.normalizeId)(J)),
              delete this.schemas[J],
              delete this.refs[J]);
          return this;
        }
        default:
          throw Error("ajv.removeSchema: invalid parameter");
      }
    }
    addVocabulary($) {
      for (let X of $) this.addKeyword(X);
      return this;
    }
    addKeyword($, X) {
      let J;
      if (typeof $ == "string") {
        if (((J = $), typeof X == "object"))
          (this.logger.warn(
            "these parameters are deprecated, see docs for addKeyword",
          ),
            (X.keyword = J));
      } else if (typeof $ == "object" && X === void 0) {
        if (((X = $), (J = X.keyword), Array.isArray(J) && !J.length))
          throw Error("addKeywords: keyword must be string or non-empty array");
      } else throw Error("invalid addKeywords parameters");
      if ((Bh.call(this, J, X), !X))
        return ((0, eH.eachItem)(J, (Q) => sH.call(this, Q)), this);
      Dh.call(this, X);
      let Y = {
        ...X,
        type: (0, EY.getJSONTypes)(X.type),
        schemaType: (0, EY.getJSONTypes)(X.schemaType),
      };
      return (
        (0, eH.eachItem)(
          J,
          Y.type.length === 0
            ? (Q) => sH.call(this, Q, Y)
            : (Q) => Y.type.forEach((W) => sH.call(this, Q, Y, W)),
        ),
        this
      );
    }
    getKeyword($) {
      let X = this.RULES.all[$];
      return typeof X == "object" ? X.definition : !!X;
    }
    removeKeyword($) {
      let { RULES: X } = this;
      (delete X.keywords[$], delete X.all[$]);
      for (let J of X.rules) {
        let Y = J.rules.findIndex((Q) => Q.keyword === $);
        if (Y >= 0) J.rules.splice(Y, 1);
      }
      return this;
    }
    addFormat($, X) {
      if (typeof X == "string") X = new RegExp(X);
      return ((this.formats[$] = X), this);
    }
    errorsText(
      $ = this.errors,
      { separator: X = ", ", dataVar: J = "data" } = {},
    ) {
      if (!$ || $.length === 0) return "No errors";
      return $.map((Y) => `${J}${Y.instancePath} ${Y.message}`).reduce(
        (Y, Q) => Y + X + Q,
      );
    }
    $dataMetaSchema($, X) {
      let J = this.RULES.all;
      $ = JSON.parse(JSON.stringify($));
      for (let Y of X) {
        let Q = Y.split("/").slice(1),
          W = $;
        for (let z of Q) W = W[z];
        for (let z in J) {
          let G = J[z];
          if (typeof G != "object") continue;
          let { $data: U } = G.definition,
            H = W[z];
          if (U && H) W[z] = rL(H);
        }
      }
      return $;
    }
    _removeAllSchemas($, X) {
      for (let J in $) {
        let Y = $[J];
        if (!X || X.test(J)) {
          if (typeof Y == "string") delete $[J];
          else if (Y && !Y.meta) (this._cache.delete(Y.schema), delete $[J]);
        }
      }
    }
    _addSchema(
      $,
      X,
      J,
      Y = this.opts.validateSchema,
      Q = this.opts.addUsedSchema,
    ) {
      let W,
        { schemaId: z } = this.opts;
      if (typeof $ == "object") W = $[z];
      else if (this.opts.jtd) throw Error("schema must be object");
      else if (typeof $ != "boolean")
        throw Error("schema must be object or boolean");
      let G = this._cache.get($);
      if (G !== void 0) return G;
      J = (0, wJ.normalizeId)(W || J);
      let U = wJ.getSchemaRefs.call(this, $, J);
      if (
        ((G = new OJ.SchemaEnv({
          schema: $,
          schemaId: z,
          meta: X,
          baseId: J,
          localRefs: U,
        })),
        this._cache.set(G.schema, G),
        Q && !J.startsWith("#"))
      ) {
        if (J) this._checkUnique(J);
        this.refs[J] = G;
      }
      if (Y) this.validateSchema($, !0);
      return G;
    }
    _checkUnique($) {
      if (this.schemas[$] || this.refs[$])
        throw Error(`schema with key or id "${$}" already exists`);
    }
    _compileSchemaEnv($) {
      if ($.meta) this._compileMetaSchema($);
      else OJ.compileSchema.call(this, $);
      if (!$.validate) throw Error("ajv implementation error");
      return $.validate;
    }
    _compileMetaSchema($) {
      let X = this.opts;
      this.opts = this._metaOpts;
      try {
        OJ.compileSchema.call(this, $);
      } finally {
        this.opts = X;
      }
    }
  }
  SY.ValidationError = eg.default;
  SY.MissingRefError = iL.default;
  k4.default = SY;
  function dL($, X, J, Y = "error") {
    for (let Q in $) {
      let W = Q;
      if (W in X) this.logger[Y](`${J}: option ${Q}. ${$[W]}`);
    }
  }
  function pL($) {
    return (($ = (0, wJ.normalizeId)($)), this.schemas[$] || this.refs[$]);
  }
  function Uh() {
    let $ = this.opts.schemas;
    if (!$) return;
    if (Array.isArray($)) this.addSchema($);
    else for (let X in $) this.addSchema($[X], X);
  }
  function Hh() {
    for (let $ in this.opts.formats) {
      let X = this.opts.formats[$];
      if (X) this.addFormat($, X);
    }
  }
  function Kh($) {
    if (Array.isArray($)) {
      this.addVocabulary($);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (let X in $) {
      let J = $[X];
      if (!J.keyword) J.keyword = X;
      this.addKeyword(J);
    }
  }
  function Nh() {
    let $ = { ...this.opts };
    for (let X of Qh) delete $[X];
    return $;
  }
  var Vh = { log() {}, warn() {}, error() {} };
  function Oh($) {
    if ($ === !1) return Vh;
    if ($ === void 0) return console;
    if ($.log && $.warn && $.error) return $;
    throw Error("logger must implement log, warn and error methods");
  }
  var wh = /^[a-z_$][a-z0-9_$:-]*$/i;
  function Bh($, X) {
    let { RULES: J } = this;
    if (
      ((0, eH.eachItem)($, (Y) => {
        if (J.keywords[Y]) throw Error(`Keyword ${Y} is already defined`);
        if (!wh.test(Y)) throw Error(`Keyword ${Y} has invalid name`);
      }),
      !X)
    )
      return;
    if (X.$data && !("code" in X || "validate" in X))
      throw Error('$data keyword must have "code" or "validate" function');
  }
  function sH($, X, J) {
    var Y;
    let Q = X === null || X === void 0 ? void 0 : X.post;
    if (J && Q) throw Error('keyword with "post" flag cannot have "type"');
    let { RULES: W } = this,
      z = Q ? W.post : W.rules.find(({ type: U }) => U === J);
    if (!z) ((z = { type: J, rules: [] }), W.rules.push(z));
    if (((W.keywords[$] = !0), !X)) return;
    let G = {
      keyword: $,
      definition: {
        ...X,
        type: (0, EY.getJSONTypes)(X.type),
        schemaType: (0, EY.getJSONTypes)(X.schemaType),
      },
    };
    if (X.before) qh.call(this, z, G, X.before);
    else z.rules.push(G);
    ((W.all[$] = G),
      (Y = X.implements) === null ||
        Y === void 0 ||
        Y.forEach((U) => this.addKeyword(U)));
  }
  function qh($, X, J) {
    let Y = $.rules.findIndex((Q) => Q.keyword === J);
    if (Y >= 0) $.rules.splice(Y, 0, X);
    else ($.rules.push(X), this.logger.warn(`rule ${J} is not defined`));
  }
  function Dh($) {
    let { metaSchema: X } = $;
    if (X === void 0) return;
    if ($.$data && this.opts.$data) X = rL(X);
    $.validateSchema = this.compile(X, !0);
  }
  var Fh = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
  };
  function rL($) {
    return { anyOf: [$, Fh] };
  }
});
var aL = M((tL) => {
  Object.defineProperty(tL, "__esModule", { value: !0 });
  var Mh = {
    keyword: "id",
    code() {
      throw Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    },
  };
  tL.default = Mh;
});
var QM = M((XM) => {
  Object.defineProperty(XM, "__esModule", { value: !0 });
  XM.callRef = XM.getValidate = void 0;
  var Ih = KJ(),
    sL = v6(),
    K6 = a(),
    O8 = S4(),
    eL = ZY(),
    vY = Y$(),
    Zh = {
      keyword: "$ref",
      schemaType: "string",
      code($) {
        let { gen: X, schema: J, it: Y } = $,
          { baseId: Q, schemaEnv: W, validateName: z, opts: G, self: U } = Y,
          { root: H } = W;
        if ((J === "#" || J === "#/") && Q === H.baseId) return N();
        let K = eL.resolveRef.call(U, H, Q, J);
        if (K === void 0) throw new Ih.default(Y.opts.uriResolver, Q, J);
        if (K instanceof eL.SchemaEnv) return V(K);
        return O(K);
        function N() {
          if (W === H) return CY($, z, W, W.$async);
          let w = X.scopeValue("root", { ref: H });
          return CY($, K6._`${w}.validate`, H, H.$async);
        }
        function V(w) {
          let B = $M($, w);
          CY($, B, w, w.$async);
        }
        function O(w) {
          let B = X.scopeValue(
              "schema",
              G.code.source === !0
                ? { ref: w, code: (0, K6.stringify)(w) }
                : { ref: w },
            ),
            F = X.name("valid"),
            j = $.subschema(
              {
                schema: w,
                dataTypes: [],
                schemaPath: K6.nil,
                topSchemaRef: B,
                errSchemaPath: J,
              },
              F,
            );
          ($.mergeEvaluated(j), $.ok(F));
        }
      },
    };
  function $M($, X) {
    let { gen: J } = $;
    return X.validate
      ? J.scopeValue("validate", { ref: X.validate })
      : K6._`${J.scopeValue("wrapper", { ref: X })}.validate`;
  }
  XM.getValidate = $M;
  function CY($, X, J, Y) {
    let { gen: Q, it: W } = $,
      { allErrors: z, schemaEnv: G, opts: U } = W,
      H = U.passContext ? O8.default.this : K6.nil;
    if (Y) K();
    else N();
    function K() {
      if (!G.$async) throw Error("async schema referenced by sync schema");
      let w = Q.let("valid");
      (Q.try(
        () => {
          if (
            (Q.code(K6._`await ${(0, sL.callValidateCode)($, X, H)}`), O(X), !z)
          )
            Q.assign(w, !0);
        },
        (B) => {
          if (
            (Q.if(K6._`!(${B} instanceof ${W.ValidationError})`, () =>
              Q.throw(B),
            ),
            V(B),
            !z)
          )
            Q.assign(w, !1);
        },
      ),
        $.ok(w));
    }
    function N() {
      $.result(
        (0, sL.callValidateCode)($, X, H),
        () => O(X),
        () => V(X),
      );
    }
    function V(w) {
      let B = K6._`${w}.errors`;
      (Q.assign(
        O8.default.vErrors,
        K6._`${O8.default.vErrors} === null ? ${B} : ${O8.default.vErrors}.concat(${B})`,
      ),
        Q.assign(O8.default.errors, K6._`${O8.default.vErrors}.length`));
    }
    function O(w) {
      var B;
      if (!W.opts.unevaluated) return;
      let F =
        (B = J === null || J === void 0 ? void 0 : J.validate) === null ||
        B === void 0
          ? void 0
          : B.evaluated;
      if (W.props !== !0)
        if (F && !F.dynamicProps) {
          if (F.props !== void 0)
            W.props = vY.mergeEvaluated.props(Q, F.props, W.props);
        } else {
          let j = Q.var("props", K6._`${w}.evaluated.props`);
          W.props = vY.mergeEvaluated.props(Q, j, W.props, K6.Name);
        }
      if (W.items !== !0)
        if (F && !F.dynamicItems) {
          if (F.items !== void 0)
            W.items = vY.mergeEvaluated.items(Q, F.items, W.items);
        } else {
          let j = Q.var("items", K6._`${w}.evaluated.items`);
          W.items = vY.mergeEvaluated.items(Q, j, W.items, K6.Name);
        }
    }
  }
  XM.callRef = CY;
  XM.default = Zh;
});
var WM = M((YM) => {
  Object.defineProperty(YM, "__esModule", { value: !0 });
  var Ph = aL(),
    Eh = QM(),
    Sh = [
      "$schema",
      "$id",
      "$defs",
      "$vocabulary",
      { keyword: "$comment" },
      "definitions",
      Ph.default,
      Eh.default,
    ];
  YM.default = Sh;
});
var GM = M((zM) => {
  Object.defineProperty(zM, "__esModule", { value: !0 });
  var kY = a(),
    V1 = kY.operators,
    _Y = {
      maximum: { okStr: "<=", ok: V1.LTE, fail: V1.GT },
      minimum: { okStr: ">=", ok: V1.GTE, fail: V1.LT },
      exclusiveMaximum: { okStr: "<", ok: V1.LT, fail: V1.GTE },
      exclusiveMinimum: { okStr: ">", ok: V1.GT, fail: V1.LTE },
    },
    Ch = {
      message: ({ keyword: $, schemaCode: X }) =>
        kY.str`must be ${_Y[$].okStr} ${X}`,
      params: ({ keyword: $, schemaCode: X }) =>
        kY._`{comparison: ${_Y[$].okStr}, limit: ${X}}`,
    },
    kh = {
      keyword: Object.keys(_Y),
      type: "number",
      schemaType: "number",
      $data: !0,
      error: Ch,
      code($) {
        let { keyword: X, data: J, schemaCode: Y } = $;
        $.fail$data(kY._`${J} ${_Y[X].fail} ${Y} || isNaN(${J})`);
      },
    };
  zM.default = kh;
});
var HM = M((UM) => {
  Object.defineProperty(UM, "__esModule", { value: !0 });
  var BJ = a(),
    xh = {
      message: ({ schemaCode: $ }) => BJ.str`must be multiple of ${$}`,
      params: ({ schemaCode: $ }) => BJ._`{multipleOf: ${$}}`,
    },
    Th = {
      keyword: "multipleOf",
      type: "number",
      schemaType: "number",
      $data: !0,
      error: xh,
      code($) {
        let { gen: X, data: J, schemaCode: Y, it: Q } = $,
          W = Q.opts.multipleOfPrecision,
          z = X.let("res"),
          G = W
            ? BJ._`Math.abs(Math.round(${z}) - ${z}) > 1e-${W}`
            : BJ._`${z} !== parseInt(${z})`;
        $.fail$data(BJ._`(${Y} === 0 || (${z} = ${J}/${Y}, ${G}))`);
      },
    };
  UM.default = Th;
});
var VM = M((NM) => {
  Object.defineProperty(NM, "__esModule", { value: !0 });
  function KM($) {
    let X = $.length,
      J = 0,
      Y = 0,
      Q;
    while (Y < X)
      if ((J++, (Q = $.charCodeAt(Y++)), Q >= 55296 && Q <= 56319 && Y < X)) {
        if (((Q = $.charCodeAt(Y)), (Q & 64512) === 56320)) Y++;
      }
    return J;
  }
  NM.default = KM;
  KM.code = 'require("ajv/dist/runtime/ucs2length").default';
});
var wM = M((OM) => {
  Object.defineProperty(OM, "__esModule", { value: !0 });
  var t1 = a(),
    gh = Y$(),
    hh = VM(),
    uh = {
      message({ keyword: $, schemaCode: X }) {
        let J = $ === "maxLength" ? "more" : "fewer";
        return t1.str`must NOT have ${J} than ${X} characters`;
      },
      params: ({ schemaCode: $ }) => t1._`{limit: ${$}}`,
    },
    mh = {
      keyword: ["maxLength", "minLength"],
      type: "string",
      schemaType: "number",
      $data: !0,
      error: uh,
      code($) {
        let { keyword: X, data: J, schemaCode: Y, it: Q } = $,
          W = X === "maxLength" ? t1.operators.GT : t1.operators.LT,
          z =
            Q.opts.unicode === !1
              ? t1._`${J}.length`
              : t1._`${(0, gh.useFunc)($.gen, hh.default)}(${J})`;
        $.fail$data(t1._`${z} ${W} ${Y}`);
      },
    };
  OM.default = mh;
});
var qM = M((BM) => {
  Object.defineProperty(BM, "__esModule", { value: !0 });
  var ch = v6(),
    dh = Y$(),
    w8 = a(),
    ph = {
      message: ({ schemaCode: $ }) => w8.str`must match pattern "${$}"`,
      params: ({ schemaCode: $ }) => w8._`{pattern: ${$}}`,
    },
    ih = {
      keyword: "pattern",
      type: "string",
      schemaType: "string",
      $data: !0,
      error: ph,
      code($) {
        let { gen: X, data: J, $data: Y, schema: Q, schemaCode: W, it: z } = $,
          G = z.opts.unicodeRegExp ? "u" : "";
        if (Y) {
          let { regExp: U } = z.opts.code,
            H =
              U.code === "new RegExp"
                ? w8._`new RegExp`
                : (0, dh.useFunc)(X, U),
            K = X.let("valid");
          (X.try(
            () => X.assign(K, w8._`${H}(${W}, ${G}).test(${J})`),
            () => X.assign(K, !1),
          ),
            $.fail$data(w8._`!${K}`));
        } else {
          let U = (0, ch.usePattern)($, Q);
          $.fail$data(w8._`!${U}.test(${J})`);
        }
      },
    };
  BM.default = ih;
});
var FM = M((DM) => {
  Object.defineProperty(DM, "__esModule", { value: !0 });
  var qJ = a(),
    rh = {
      message({ keyword: $, schemaCode: X }) {
        let J = $ === "maxProperties" ? "more" : "fewer";
        return qJ.str`must NOT have ${J} than ${X} properties`;
      },
      params: ({ schemaCode: $ }) => qJ._`{limit: ${$}}`,
    },
    oh = {
      keyword: ["maxProperties", "minProperties"],
      type: "object",
      schemaType: "number",
      $data: !0,
      error: rh,
      code($) {
        let { keyword: X, data: J, schemaCode: Y } = $,
          Q = X === "maxProperties" ? qJ.operators.GT : qJ.operators.LT;
        $.fail$data(qJ._`Object.keys(${J}).length ${Q} ${Y}`);
      },
    };
  DM.default = oh;
});
var LM = M((jM) => {
  Object.defineProperty(jM, "__esModule", { value: !0 });
  var DJ = v6(),
    FJ = a(),
    ah = Y$(),
    sh = {
      message: ({ params: { missingProperty: $ } }) =>
        FJ.str`must have required property '${$}'`,
      params: ({ params: { missingProperty: $ } }) =>
        FJ._`{missingProperty: ${$}}`,
    },
    eh = {
      keyword: "required",
      type: "object",
      schemaType: "array",
      $data: !0,
      error: sh,
      code($) {
        let { gen: X, schema: J, schemaCode: Y, data: Q, $data: W, it: z } = $,
          { opts: G } = z;
        if (!W && J.length === 0) return;
        let U = J.length >= G.loopRequired;
        if (z.allErrors) H();
        else K();
        if (G.strictRequired) {
          let O = $.parentSchema.properties,
            { definedProperties: w } = $.it;
          for (let B of J)
            if (
              (O === null || O === void 0 ? void 0 : O[B]) === void 0 &&
              !w.has(B)
            ) {
              let F = z.schemaEnv.baseId + z.errSchemaPath,
                j = `required property "${B}" is not defined at "${F}" (strictRequired)`;
              (0, ah.checkStrictMode)(z, j, z.opts.strictRequired);
            }
        }
        function H() {
          if (U || W) $.block$data(FJ.nil, N);
          else for (let O of J) (0, DJ.checkReportMissingProp)($, O);
        }
        function K() {
          let O = X.let("missing");
          if (U || W) {
            let w = X.let("valid", !0);
            ($.block$data(w, () => V(O, w)), $.ok(w));
          } else
            (X.if((0, DJ.checkMissingProp)($, J, O)),
              (0, DJ.reportMissingProp)($, O),
              X.else());
        }
        function N() {
          X.forOf("prop", Y, (O) => {
            ($.setParams({ missingProperty: O }),
              X.if((0, DJ.noPropertyInData)(X, Q, O, G.ownProperties), () =>
                $.error(),
              ));
          });
        }
        function V(O, w) {
          ($.setParams({ missingProperty: O }),
            X.forOf(
              O,
              Y,
              () => {
                (X.assign(w, (0, DJ.propertyInData)(X, Q, O, G.ownProperties)),
                  X.if((0, FJ.not)(w), () => {
                    ($.error(), X.break());
                  }));
              },
              FJ.nil,
            ));
        }
      },
    };
  jM.default = eh;
});
var AM = M((MM) => {
  Object.defineProperty(MM, "__esModule", { value: !0 });
  var jJ = a(),
    Xu = {
      message({ keyword: $, schemaCode: X }) {
        let J = $ === "maxItems" ? "more" : "fewer";
        return jJ.str`must NOT have ${J} than ${X} items`;
      },
      params: ({ schemaCode: $ }) => jJ._`{limit: ${$}}`,
    },
    Ju = {
      keyword: ["maxItems", "minItems"],
      type: "array",
      schemaType: "number",
      $data: !0,
      error: Xu,
      code($) {
        let { keyword: X, data: J, schemaCode: Y } = $,
          Q = X === "maxItems" ? jJ.operators.GT : jJ.operators.LT;
        $.fail$data(jJ._`${J}.length ${Q} ${Y}`);
      },
    };
  MM.default = Ju;
});
var xY = M((ZM) => {
  Object.defineProperty(ZM, "__esModule", { value: !0 });
  var IM = hH();
  IM.code = 'require("ajv/dist/runtime/equal").default';
  ZM.default = IM;
});
var RM = M((bM) => {
  Object.defineProperty(bM, "__esModule", { value: !0 });
  var $K = WJ(),
    d$ = a(),
    Wu = Y$(),
    zu = xY(),
    Gu = {
      message: ({ params: { i: $, j: X } }) =>
        d$.str`must NOT have duplicate items (items ## ${X} and ${$} are identical)`,
      params: ({ params: { i: $, j: X } }) => d$._`{i: ${$}, j: ${X}}`,
    },
    Uu = {
      keyword: "uniqueItems",
      type: "array",
      schemaType: "boolean",
      $data: !0,
      error: Gu,
      code($) {
        let {
          gen: X,
          data: J,
          $data: Y,
          schema: Q,
          parentSchema: W,
          schemaCode: z,
          it: G,
        } = $;
        if (!Y && !Q) return;
        let U = X.let("valid"),
          H = W.items ? (0, $K.getSchemaTypes)(W.items) : [];
        ($.block$data(U, K, d$._`${z} === false`), $.ok(U));
        function K() {
          let w = X.let("i", d$._`${J}.length`),
            B = X.let("j");
          ($.setParams({ i: w, j: B }),
            X.assign(U, !0),
            X.if(d$._`${w} > 1`, () => (N() ? V : O)(w, B)));
        }
        function N() {
          return (
            H.length > 0 && !H.some((w) => w === "object" || w === "array")
          );
        }
        function V(w, B) {
          let F = X.name("item"),
            j = (0, $K.checkDataTypes)(
              H,
              F,
              G.opts.strictNumbers,
              $K.DataType.Wrong,
            ),
            I = X.const("indices", d$._`{}`);
          X.for(d$._`;${w}--;`, () => {
            if (
              (X.let(F, d$._`${J}[${w}]`),
              X.if(j, d$._`continue`),
              H.length > 1)
            )
              X.if(d$._`typeof ${F} == "string"`, d$._`${F} += "_"`);
            X.if(d$._`typeof ${I}[${F}] == "number"`, () => {
              (X.assign(B, d$._`${I}[${F}]`),
                $.error(),
                X.assign(U, !1).break());
            }).code(d$._`${I}[${F}] = ${w}`);
          });
        }
        function O(w, B) {
          let F = (0, Wu.useFunc)(X, zu.default),
            j = X.name("outer");
          X.label(j).for(d$._`;${w}--;`, () =>
            X.for(d$._`${B} = ${w}; ${B}--;`, () =>
              X.if(d$._`${F}(${J}[${w}], ${J}[${B}])`, () => {
                ($.error(), X.assign(U, !1).break(j));
              }),
            ),
          );
        }
      },
    };
  bM.default = Uu;
});
var EM = M((PM) => {
  Object.defineProperty(PM, "__esModule", { value: !0 });
  var XK = a(),
    Ku = Y$(),
    Nu = xY(),
    Vu = {
      message: "must be equal to constant",
      params: ({ schemaCode: $ }) => XK._`{allowedValue: ${$}}`,
    },
    Ou = {
      keyword: "const",
      $data: !0,
      error: Vu,
      code($) {
        let { gen: X, data: J, $data: Y, schemaCode: Q, schema: W } = $;
        if (Y || (W && typeof W == "object"))
          $.fail$data(XK._`!${(0, Ku.useFunc)(X, Nu.default)}(${J}, ${Q})`);
        else $.fail(XK._`${W} !== ${J}`);
      },
    };
  PM.default = Ou;
});
var vM = M((SM) => {
  Object.defineProperty(SM, "__esModule", { value: !0 });
  var LJ = a(),
    Bu = Y$(),
    qu = xY(),
    Du = {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: $ }) => LJ._`{allowedValues: ${$}}`,
    },
    Fu = {
      keyword: "enum",
      schemaType: "array",
      $data: !0,
      error: Du,
      code($) {
        let { gen: X, data: J, $data: Y, schema: Q, schemaCode: W, it: z } = $;
        if (!Y && Q.length === 0) throw Error("enum must have non-empty array");
        let G = Q.length >= z.opts.loopEnum,
          U,
          H = () =>
            U !== null && U !== void 0
              ? U
              : (U = (0, Bu.useFunc)(X, qu.default)),
          K;
        if (G || Y) ((K = X.let("valid")), $.block$data(K, N));
        else {
          if (!Array.isArray(Q)) throw Error("ajv implementation error");
          let O = X.const("vSchema", W);
          K = (0, LJ.or)(...Q.map((w, B) => V(O, B)));
        }
        $.pass(K);
        function N() {
          (X.assign(K, !1),
            X.forOf("v", W, (O) =>
              X.if(LJ._`${H()}(${J}, ${O})`, () => X.assign(K, !0).break()),
            ));
        }
        function V(O, w) {
          let B = Q[w];
          return typeof B === "object" && B !== null
            ? LJ._`${H()}(${J}, ${O}[${w}])`
            : LJ._`${J} === ${B}`;
        }
      },
    };
  SM.default = Fu;
});
var kM = M((CM) => {
  Object.defineProperty(CM, "__esModule", { value: !0 });
  var Lu = GM(),
    Mu = HM(),
    Au = wM(),
    Iu = qM(),
    Zu = FM(),
    bu = LM(),
    Ru = AM(),
    Pu = RM(),
    Eu = EM(),
    Su = vM(),
    vu = [
      Lu.default,
      Mu.default,
      Au.default,
      Iu.default,
      Zu.default,
      bu.default,
      Ru.default,
      Pu.default,
      { keyword: "type", schemaType: ["string", "array"] },
      { keyword: "nullable", schemaType: "boolean" },
      Eu.default,
      Su.default,
    ];
  CM.default = vu;
});
var QK = M((xM) => {
  Object.defineProperty(xM, "__esModule", { value: !0 });
  xM.validateAdditionalItems = void 0;
  var a1 = a(),
    JK = Y$(),
    ku = {
      message: ({ params: { len: $ } }) =>
        a1.str`must NOT have more than ${$} items`,
      params: ({ params: { len: $ } }) => a1._`{limit: ${$}}`,
    },
    _u = {
      keyword: "additionalItems",
      type: "array",
      schemaType: ["boolean", "object"],
      before: "uniqueItems",
      error: ku,
      code($) {
        let { parentSchema: X, it: J } = $,
          { items: Y } = X;
        if (!Array.isArray(Y)) {
          (0, JK.checkStrictMode)(
            J,
            '"additionalItems" is ignored when "items" is not an array of schemas',
          );
          return;
        }
        _M($, Y);
      },
    };
  function _M($, X) {
    let { gen: J, schema: Y, data: Q, keyword: W, it: z } = $;
    z.items = !0;
    let G = J.const("len", a1._`${Q}.length`);
    if (Y === !1)
      ($.setParams({ len: X.length }), $.pass(a1._`${G} <= ${X.length}`));
    else if (typeof Y == "object" && !(0, JK.alwaysValidSchema)(z, Y)) {
      let H = J.var("valid", a1._`${G} <= ${X.length}`);
      (J.if((0, a1.not)(H), () => U(H)), $.ok(H));
    }
    function U(H) {
      J.forRange("i", X.length, G, (K) => {
        if (
          ($.subschema(
            { keyword: W, dataProp: K, dataPropType: JK.Type.Num },
            H,
          ),
          !z.allErrors)
        )
          J.if((0, a1.not)(H), () => J.break());
      });
    }
  }
  xM.validateAdditionalItems = _M;
  xM.default = _u;
});
var YK = M((gM) => {
  Object.defineProperty(gM, "__esModule", { value: !0 });
  gM.validateTuple = void 0;
  var fM = a(),
    TY = Y$(),
    Tu = v6(),
    fu = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "array", "boolean"],
      before: "uniqueItems",
      code($) {
        let { schema: X, it: J } = $;
        if (Array.isArray(X)) return yM($, "additionalItems", X);
        if (((J.items = !0), (0, TY.alwaysValidSchema)(J, X))) return;
        $.ok((0, Tu.validateArray)($));
      },
    };
  function yM($, X, J = $.schema) {
    let { gen: Y, parentSchema: Q, data: W, keyword: z, it: G } = $;
    if ((K(Q), G.opts.unevaluated && J.length && G.items !== !0))
      G.items = TY.mergeEvaluated.items(Y, J.length, G.items);
    let U = Y.name("valid"),
      H = Y.const("len", fM._`${W}.length`);
    J.forEach((N, V) => {
      if ((0, TY.alwaysValidSchema)(G, N)) return;
      (Y.if(fM._`${H} > ${V}`, () =>
        $.subschema({ keyword: z, schemaProp: V, dataProp: V }, U),
      ),
        $.ok(U));
    });
    function K(N) {
      let { opts: V, errSchemaPath: O } = G,
        w = J.length,
        B = w === N.minItems && (w === N.maxItems || N[X] === !1);
      if (V.strictTuples && !B) {
        let F = `"${z}" is ${w}-tuple, but minItems or maxItems/${X} are not specified or different at path "${O}"`;
        (0, TY.checkStrictMode)(G, F, V.strictTuples);
      }
    }
  }
  gM.validateTuple = yM;
  gM.default = fu;
});
var mM = M((uM) => {
  Object.defineProperty(uM, "__esModule", { value: !0 });
  var gu = YK(),
    hu = {
      keyword: "prefixItems",
      type: "array",
      schemaType: ["array"],
      before: "uniqueItems",
      code: ($) => (0, gu.validateTuple)($, "items"),
    };
  uM.default = hu;
});
var dM = M((cM) => {
  Object.defineProperty(cM, "__esModule", { value: !0 });
  var lM = a(),
    mu = Y$(),
    lu = v6(),
    cu = QK(),
    du = {
      message: ({ params: { len: $ } }) =>
        lM.str`must NOT have more than ${$} items`,
      params: ({ params: { len: $ } }) => lM._`{limit: ${$}}`,
    },
    pu = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      error: du,
      code($) {
        let { schema: X, parentSchema: J, it: Y } = $,
          { prefixItems: Q } = J;
        if (((Y.items = !0), (0, mu.alwaysValidSchema)(Y, X))) return;
        if (Q) (0, cu.validateAdditionalItems)($, Q);
        else $.ok((0, lu.validateArray)($));
      },
    };
  cM.default = pu;
});
var iM = M((pM) => {
  Object.defineProperty(pM, "__esModule", { value: !0 });
  var C6 = a(),
    fY = Y$(),
    nu = {
      message: ({ params: { min: $, max: X } }) =>
        X === void 0
          ? C6.str`must contain at least ${$} valid item(s)`
          : C6.str`must contain at least ${$} and no more than ${X} valid item(s)`,
      params: ({ params: { min: $, max: X } }) =>
        X === void 0
          ? C6._`{minContains: ${$}}`
          : C6._`{minContains: ${$}, maxContains: ${X}}`,
    },
    ru = {
      keyword: "contains",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      trackErrors: !0,
      error: nu,
      code($) {
        let { gen: X, schema: J, parentSchema: Y, data: Q, it: W } = $,
          z,
          G,
          { minContains: U, maxContains: H } = Y;
        if (W.opts.next) ((z = U === void 0 ? 1 : U), (G = H));
        else z = 1;
        let K = X.const("len", C6._`${Q}.length`);
        if (($.setParams({ min: z, max: G }), G === void 0 && z === 0)) {
          (0, fY.checkStrictMode)(
            W,
            '"minContains" == 0 without "maxContains": "contains" keyword ignored',
          );
          return;
        }
        if (G !== void 0 && z > G) {
          ((0, fY.checkStrictMode)(
            W,
            '"minContains" > "maxContains" is always invalid',
          ),
            $.fail());
          return;
        }
        if ((0, fY.alwaysValidSchema)(W, J)) {
          let B = C6._`${K} >= ${z}`;
          if (G !== void 0) B = C6._`${B} && ${K} <= ${G}`;
          $.pass(B);
          return;
        }
        W.items = !0;
        let N = X.name("valid");
        if (G === void 0 && z === 1) O(N, () => X.if(N, () => X.break()));
        else if (z === 0) {
          if ((X.let(N, !0), G !== void 0)) X.if(C6._`${Q}.length > 0`, V);
        } else (X.let(N, !1), V());
        $.result(N, () => $.reset());
        function V() {
          let B = X.name("_valid"),
            F = X.let("count", 0);
          O(B, () => X.if(B, () => w(F)));
        }
        function O(B, F) {
          X.forRange("i", 0, K, (j) => {
            ($.subschema(
              {
                keyword: "contains",
                dataProp: j,
                dataPropType: fY.Type.Num,
                compositeRule: !0,
              },
              B,
            ),
              F());
          });
        }
        function w(B) {
          if ((X.code(C6._`${B}++`), G === void 0))
            X.if(C6._`${B} >= ${z}`, () => X.assign(N, !0).break());
          else if (
            (X.if(C6._`${B} > ${G}`, () => X.assign(N, !1).break()), z === 1)
          )
            X.assign(N, !0);
          else X.if(C6._`${B} >= ${z}`, () => X.assign(N, !0));
        }
      },
    };
  pM.default = ru;
});
var sM = M((oM) => {
  Object.defineProperty(oM, "__esModule", { value: !0 });
  oM.validateSchemaDeps = oM.validatePropertyDeps = oM.error = void 0;
  var WK = a(),
    tu = Y$(),
    MJ = v6();
  oM.error = {
    message: ({ params: { property: $, depsCount: X, deps: J } }) => {
      let Y = X === 1 ? "property" : "properties";
      return WK.str`must have ${Y} ${J} when property ${$} is present`;
    },
    params: ({
      params: { property: $, depsCount: X, deps: J, missingProperty: Y },
    }) => WK._`{property: ${$},
    missingProperty: ${Y},
    depsCount: ${X},
    deps: ${J}}`,
  };
  var au = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: oM.error,
    code($) {
      let [X, J] = su($);
      (nM($, X), rM($, J));
    },
  };
  function su({ schema: $ }) {
    let X = {},
      J = {};
    for (let Y in $) {
      if (Y === "__proto__") continue;
      let Q = Array.isArray($[Y]) ? X : J;
      Q[Y] = $[Y];
    }
    return [X, J];
  }
  function nM($, X = $.schema) {
    let { gen: J, data: Y, it: Q } = $;
    if (Object.keys(X).length === 0) return;
    let W = J.let("missing");
    for (let z in X) {
      let G = X[z];
      if (G.length === 0) continue;
      let U = (0, MJ.propertyInData)(J, Y, z, Q.opts.ownProperties);
      if (
        ($.setParams({ property: z, depsCount: G.length, deps: G.join(", ") }),
        Q.allErrors)
      )
        J.if(U, () => {
          for (let H of G) (0, MJ.checkReportMissingProp)($, H);
        });
      else
        (J.if(WK._`${U} && (${(0, MJ.checkMissingProp)($, G, W)})`),
          (0, MJ.reportMissingProp)($, W),
          J.else());
    }
  }
  oM.validatePropertyDeps = nM;
  function rM($, X = $.schema) {
    let { gen: J, data: Y, keyword: Q, it: W } = $,
      z = J.name("valid");
    for (let G in X) {
      if ((0, tu.alwaysValidSchema)(W, X[G])) continue;
      (J.if(
        (0, MJ.propertyInData)(J, Y, G, W.opts.ownProperties),
        () => {
          let U = $.subschema({ keyword: Q, schemaProp: G }, z);
          $.mergeValidEvaluated(U, z);
        },
        () => J.var(z, !0),
      ),
        $.ok(z));
    }
  }
  oM.validateSchemaDeps = rM;
  oM.default = au;
});
var X2 = M(($2) => {
  Object.defineProperty($2, "__esModule", { value: !0 });
  var eM = a(),
    Xm = Y$(),
    Jm = {
      message: "property name must be valid",
      params: ({ params: $ }) => eM._`{propertyName: ${$.propertyName}}`,
    },
    Qm = {
      keyword: "propertyNames",
      type: "object",
      schemaType: ["object", "boolean"],
      error: Jm,
      code($) {
        let { gen: X, schema: J, data: Y, it: Q } = $;
        if ((0, Xm.alwaysValidSchema)(Q, J)) return;
        let W = X.name("valid");
        (X.forIn("key", Y, (z) => {
          ($.setParams({ propertyName: z }),
            $.subschema(
              {
                keyword: "propertyNames",
                data: z,
                dataTypes: ["string"],
                propertyName: z,
                compositeRule: !0,
              },
              W,
            ),
            X.if((0, eM.not)(W), () => {
              if (($.error(!0), !Q.allErrors)) X.break();
            }));
        }),
          $.ok(W));
      },
    };
  $2.default = Qm;
});
var zK = M((J2) => {
  Object.defineProperty(J2, "__esModule", { value: !0 });
  var yY = v6(),
    r6 = a(),
    Wm = S4(),
    gY = Y$(),
    zm = {
      message: "must NOT have additional properties",
      params: ({ params: $ }) =>
        r6._`{additionalProperty: ${$.additionalProperty}}`,
    },
    Gm = {
      keyword: "additionalProperties",
      type: ["object"],
      schemaType: ["boolean", "object"],
      allowUndefined: !0,
      trackErrors: !0,
      error: zm,
      code($) {
        let {
          gen: X,
          schema: J,
          parentSchema: Y,
          data: Q,
          errsCount: W,
          it: z,
        } = $;
        if (!W) throw Error("ajv implementation error");
        let { allErrors: G, opts: U } = z;
        if (
          ((z.props = !0),
          U.removeAdditional !== "all" && (0, gY.alwaysValidSchema)(z, J))
        )
          return;
        let H = (0, yY.allSchemaProperties)(Y.properties),
          K = (0, yY.allSchemaProperties)(Y.patternProperties);
        (N(), $.ok(r6._`${W} === ${Wm.default.errors}`));
        function N() {
          X.forIn("key", Q, (F) => {
            if (!H.length && !K.length) w(F);
            else X.if(V(F), () => w(F));
          });
        }
        function V(F) {
          let j;
          if (H.length > 8) {
            let I = (0, gY.schemaRefOrVal)(z, Y.properties, "properties");
            j = (0, yY.isOwnProperty)(X, I, F);
          } else if (H.length)
            j = (0, r6.or)(...H.map((I) => r6._`${F} === ${I}`));
          else j = r6.nil;
          if (K.length)
            j = (0, r6.or)(
              j,
              ...K.map((I) => r6._`${(0, yY.usePattern)($, I)}.test(${F})`),
            );
          return (0, r6.not)(j);
        }
        function O(F) {
          X.code(r6._`delete ${Q}[${F}]`);
        }
        function w(F) {
          if (
            U.removeAdditional === "all" ||
            (U.removeAdditional && J === !1)
          ) {
            O(F);
            return;
          }
          if (J === !1) {
            if (($.setParams({ additionalProperty: F }), $.error(), !G))
              X.break();
            return;
          }
          if (typeof J == "object" && !(0, gY.alwaysValidSchema)(z, J)) {
            let j = X.name("valid");
            if (U.removeAdditional === "failing")
              (B(F, j, !1),
                X.if((0, r6.not)(j), () => {
                  ($.reset(), O(F));
                }));
            else if ((B(F, j), !G)) X.if((0, r6.not)(j), () => X.break());
          }
        }
        function B(F, j, I) {
          let Z = {
            keyword: "additionalProperties",
            dataProp: F,
            dataPropType: gY.Type.Str,
          };
          if (I === !1)
            Object.assign(Z, {
              compositeRule: !0,
              createErrors: !1,
              allErrors: !1,
            });
          $.subschema(Z, j);
        }
      },
    };
  J2.default = Gm;
});
var z2 = M((W2) => {
  Object.defineProperty(W2, "__esModule", { value: !0 });
  var Hm = HJ(),
    Q2 = v6(),
    GK = Y$(),
    Y2 = zK(),
    Km = {
      keyword: "properties",
      type: "object",
      schemaType: "object",
      code($) {
        let { gen: X, schema: J, parentSchema: Y, data: Q, it: W } = $;
        if (
          W.opts.removeAdditional === "all" &&
          Y.additionalProperties === void 0
        )
          Y2.default.code(
            new Hm.KeywordCxt(W, Y2.default, "additionalProperties"),
          );
        let z = (0, Q2.allSchemaProperties)(J);
        for (let N of z) W.definedProperties.add(N);
        if (W.opts.unevaluated && z.length && W.props !== !0)
          W.props = GK.mergeEvaluated.props(X, (0, GK.toHash)(z), W.props);
        let G = z.filter((N) => !(0, GK.alwaysValidSchema)(W, J[N]));
        if (G.length === 0) return;
        let U = X.name("valid");
        for (let N of G) {
          if (H(N)) K(N);
          else {
            if (
              (X.if((0, Q2.propertyInData)(X, Q, N, W.opts.ownProperties)),
              K(N),
              !W.allErrors)
            )
              X.else().var(U, !0);
            X.endIf();
          }
          ($.it.definedProperties.add(N), $.ok(U));
        }
        function H(N) {
          return (
            W.opts.useDefaults && !W.compositeRule && J[N].default !== void 0
          );
        }
        function K(N) {
          $.subschema({ keyword: "properties", schemaProp: N, dataProp: N }, U);
        }
      },
    };
  W2.default = Km;
});
var N2 = M((K2) => {
  Object.defineProperty(K2, "__esModule", { value: !0 });
  var G2 = v6(),
    hY = a(),
    U2 = Y$(),
    H2 = Y$(),
    Vm = {
      keyword: "patternProperties",
      type: "object",
      schemaType: "object",
      code($) {
        let { gen: X, schema: J, data: Y, parentSchema: Q, it: W } = $,
          { opts: z } = W,
          G = (0, G2.allSchemaProperties)(J),
          U = G.filter((B) => (0, U2.alwaysValidSchema)(W, J[B]));
        if (
          G.length === 0 ||
          (U.length === G.length && (!W.opts.unevaluated || W.props === !0))
        )
          return;
        let H = z.strictSchema && !z.allowMatchingProperties && Q.properties,
          K = X.name("valid");
        if (W.props !== !0 && !(W.props instanceof hY.Name))
          W.props = (0, H2.evaluatedPropsToName)(X, W.props);
        let { props: N } = W;
        V();
        function V() {
          for (let B of G) {
            if (H) O(B);
            if (W.allErrors) w(B);
            else (X.var(K, !0), w(B), X.if(K));
          }
        }
        function O(B) {
          for (let F in H)
            if (new RegExp(B).test(F))
              (0, U2.checkStrictMode)(
                W,
                `property ${F} matches pattern ${B} (use allowMatchingProperties)`,
              );
        }
        function w(B) {
          X.forIn("key", Y, (F) => {
            X.if(hY._`${(0, G2.usePattern)($, B)}.test(${F})`, () => {
              let j = U.includes(B);
              if (!j)
                $.subschema(
                  {
                    keyword: "patternProperties",
                    schemaProp: B,
                    dataProp: F,
                    dataPropType: H2.Type.Str,
                  },
                  K,
                );
              if (W.opts.unevaluated && N !== !0)
                X.assign(hY._`${N}[${F}]`, !0);
              else if (!j && !W.allErrors)
                X.if((0, hY.not)(K), () => X.break());
            });
          });
        }
      },
    };
  K2.default = Vm;
});
var O2 = M((V2) => {
  Object.defineProperty(V2, "__esModule", { value: !0 });
  var wm = Y$(),
    Bm = {
      keyword: "not",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      code($) {
        let { gen: X, schema: J, it: Y } = $;
        if ((0, wm.alwaysValidSchema)(Y, J)) {
          $.fail();
          return;
        }
        let Q = X.name("valid");
        ($.subschema(
          {
            keyword: "not",
            compositeRule: !0,
            createErrors: !1,
            allErrors: !1,
          },
          Q,
        ),
          $.failResult(
            Q,
            () => $.reset(),
            () => $.error(),
          ));
      },
      error: { message: "must NOT be valid" },
    };
  V2.default = Bm;
});
var B2 = M((w2) => {
  Object.defineProperty(w2, "__esModule", { value: !0 });
  var Dm = v6(),
    Fm = {
      keyword: "anyOf",
      schemaType: "array",
      trackErrors: !0,
      code: Dm.validateUnion,
      error: { message: "must match a schema in anyOf" },
    };
  w2.default = Fm;
});
var D2 = M((q2) => {
  Object.defineProperty(q2, "__esModule", { value: !0 });
  var uY = a(),
    Lm = Y$(),
    Mm = {
      message: "must match exactly one schema in oneOf",
      params: ({ params: $ }) => uY._`{passingSchemas: ${$.passing}}`,
    },
    Am = {
      keyword: "oneOf",
      schemaType: "array",
      trackErrors: !0,
      error: Mm,
      code($) {
        let { gen: X, schema: J, parentSchema: Y, it: Q } = $;
        if (!Array.isArray(J)) throw Error("ajv implementation error");
        if (Q.opts.discriminator && Y.discriminator) return;
        let W = J,
          z = X.let("valid", !1),
          G = X.let("passing", null),
          U = X.name("_valid");
        ($.setParams({ passing: G }),
          X.block(H),
          $.result(
            z,
            () => $.reset(),
            () => $.error(!0),
          ));
        function H() {
          W.forEach((K, N) => {
            let V;
            if ((0, Lm.alwaysValidSchema)(Q, K)) X.var(U, !0);
            else
              V = $.subschema(
                { keyword: "oneOf", schemaProp: N, compositeRule: !0 },
                U,
              );
            if (N > 0)
              X.if(uY._`${U} && ${z}`)
                .assign(z, !1)
                .assign(G, uY._`[${G}, ${N}]`)
                .else();
            X.if(U, () => {
              if ((X.assign(z, !0), X.assign(G, N), V))
                $.mergeEvaluated(V, uY.Name);
            });
          });
        }
      },
    };
  q2.default = Am;
});
var j2 = M((F2) => {
  Object.defineProperty(F2, "__esModule", { value: !0 });
  var Zm = Y$(),
    bm = {
      keyword: "allOf",
      schemaType: "array",
      code($) {
        let { gen: X, schema: J, it: Y } = $;
        if (!Array.isArray(J)) throw Error("ajv implementation error");
        let Q = X.name("valid");
        J.forEach((W, z) => {
          if ((0, Zm.alwaysValidSchema)(Y, W)) return;
          let G = $.subschema({ keyword: "allOf", schemaProp: z }, Q);
          ($.ok(Q), $.mergeEvaluated(G));
        });
      },
    };
  F2.default = bm;
});
var I2 = M((A2) => {
  Object.defineProperty(A2, "__esModule", { value: !0 });
  var mY = a(),
    M2 = Y$(),
    Pm = {
      message: ({ params: $ }) => mY.str`must match "${$.ifClause}" schema`,
      params: ({ params: $ }) => mY._`{failingKeyword: ${$.ifClause}}`,
    },
    Em = {
      keyword: "if",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      error: Pm,
      code($) {
        let { gen: X, parentSchema: J, it: Y } = $;
        if (J.then === void 0 && J.else === void 0)
          (0, M2.checkStrictMode)(
            Y,
            '"if" without "then" and "else" is ignored',
          );
        let Q = L2(Y, "then"),
          W = L2(Y, "else");
        if (!Q && !W) return;
        let z = X.let("valid", !0),
          G = X.name("_valid");
        if ((U(), $.reset(), Q && W)) {
          let K = X.let("ifClause");
          ($.setParams({ ifClause: K }), X.if(G, H("then", K), H("else", K)));
        } else if (Q) X.if(G, H("then"));
        else X.if((0, mY.not)(G), H("else"));
        $.pass(z, () => $.error(!0));
        function U() {
          let K = $.subschema(
            {
              keyword: "if",
              compositeRule: !0,
              createErrors: !1,
              allErrors: !1,
            },
            G,
          );
          $.mergeEvaluated(K);
        }
        function H(K, N) {
          return () => {
            let V = $.subschema({ keyword: K }, G);
            if ((X.assign(z, G), $.mergeValidEvaluated(V, z), N))
              X.assign(N, mY._`${K}`);
            else $.setParams({ ifClause: K });
          };
        }
      },
    };
  function L2($, X) {
    let J = $.schema[X];
    return J !== void 0 && !(0, M2.alwaysValidSchema)($, J);
  }
  A2.default = Em;
});
var b2 = M((Z2) => {
  Object.defineProperty(Z2, "__esModule", { value: !0 });
  var vm = Y$(),
    Cm = {
      keyword: ["then", "else"],
      schemaType: ["object", "boolean"],
      code({ keyword: $, parentSchema: X, it: J }) {
        if (X.if === void 0)
          (0, vm.checkStrictMode)(J, `"${$}" without "if" is ignored`);
      },
    };
  Z2.default = Cm;
});
var P2 = M((R2) => {
  Object.defineProperty(R2, "__esModule", { value: !0 });
  var _m = QK(),
    xm = mM(),
    Tm = YK(),
    fm = dM(),
    ym = iM(),
    gm = sM(),
    hm = X2(),
    um = zK(),
    mm = z2(),
    lm = N2(),
    cm = O2(),
    dm = B2(),
    pm = D2(),
    im = j2(),
    nm = I2(),
    rm = b2();
  function om($ = !1) {
    let X = [
      cm.default,
      dm.default,
      pm.default,
      im.default,
      nm.default,
      rm.default,
      hm.default,
      um.default,
      gm.default,
      mm.default,
      lm.default,
    ];
    if ($) X.push(xm.default, fm.default);
    else X.push(_m.default, Tm.default);
    return (X.push(ym.default), X);
  }
  R2.default = om;
});
var S2 = M((E2) => {
  Object.defineProperty(E2, "__esModule", { value: !0 });
  var C$ = a(),
    am = {
      message: ({ schemaCode: $ }) => C$.str`must match format "${$}"`,
      params: ({ schemaCode: $ }) => C$._`{format: ${$}}`,
    },
    sm = {
      keyword: "format",
      type: ["number", "string"],
      schemaType: "string",
      $data: !0,
      error: am,
      code($, X) {
        let { gen: J, data: Y, $data: Q, schema: W, schemaCode: z, it: G } = $,
          { opts: U, errSchemaPath: H, schemaEnv: K, self: N } = G;
        if (!U.validateFormats) return;
        if (Q) V();
        else O();
        function V() {
          let w = J.scopeValue("formats", {
              ref: N.formats,
              code: U.code.formats,
            }),
            B = J.const("fDef", C$._`${w}[${z}]`),
            F = J.let("fType"),
            j = J.let("format");
          (J.if(
            C$._`typeof ${B} == "object" && !(${B} instanceof RegExp)`,
            () =>
              J.assign(F, C$._`${B}.type || "string"`).assign(
                j,
                C$._`${B}.validate`,
              ),
            () => J.assign(F, C$._`"string"`).assign(j, B),
          ),
            $.fail$data((0, C$.or)(I(), Z())));
          function I() {
            if (U.strictSchema === !1) return C$.nil;
            return C$._`${z} && !${j}`;
          }
          function Z() {
            let _ = K.$async
                ? C$._`(${B}.async ? await ${j}(${Y}) : ${j}(${Y}))`
                : C$._`${j}(${Y})`,
              T = C$._`(typeof ${j} == "function" ? ${_} : ${j}.test(${Y}))`;
            return C$._`${j} && ${j} !== true && ${F} === ${X} && !${T}`;
          }
        }
        function O() {
          let w = N.formats[W];
          if (!w) {
            I();
            return;
          }
          if (w === !0) return;
          let [B, F, j] = Z(w);
          if (B === X) $.pass(_());
          function I() {
            if (U.strictSchema === !1) {
              N.logger.warn(T());
              return;
            }
            throw Error(T());
            function T() {
              return `unknown format "${W}" ignored in schema at path "${H}"`;
            }
          }
          function Z(T) {
            let B$ =
                T instanceof RegExp
                  ? (0, C$.regexpCode)(T)
                  : U.code.formats
                    ? C$._`${U.code.formats}${(0, C$.getProperty)(W)}`
                    : void 0,
              _$ = J.scopeValue("formats", { key: W, ref: T, code: B$ });
            if (typeof T == "object" && !(T instanceof RegExp))
              return [T.type || "string", T.validate, C$._`${_$}.validate`];
            return ["string", T, _$];
          }
          function _() {
            if (typeof w == "object" && !(w instanceof RegExp) && w.async) {
              if (!K.$async) throw Error("async format in sync schema");
              return C$._`await ${j}(${Y})`;
            }
            return typeof F == "function"
              ? C$._`${j}(${Y})`
              : C$._`${j}.test(${Y})`;
          }
        }
      },
    };
  E2.default = sm;
});
var C2 = M((v2) => {
  Object.defineProperty(v2, "__esModule", { value: !0 });
  var $l = S2(),
    Xl = [$l.default];
  v2.default = Xl;
});
var x2 = M((k2) => {
  Object.defineProperty(k2, "__esModule", { value: !0 });
  k2.contentVocabulary = k2.metadataVocabulary = void 0;
  k2.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples",
  ];
  k2.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema",
  ];
});
var y2 = M((f2) => {
  Object.defineProperty(f2, "__esModule", { value: !0 });
  var Yl = WM(),
    Wl = kM(),
    zl = P2(),
    Gl = C2(),
    T2 = x2(),
    Ul = [
      Yl.default,
      Wl.default,
      (0, zl.default)(),
      Gl.default,
      T2.metadataVocabulary,
      T2.contentVocabulary,
    ];
  f2.default = Ul;
});
var m2 = M((h2) => {
  Object.defineProperty(h2, "__esModule", { value: !0 });
  h2.DiscrError = void 0;
  var g2;
  (function ($) {
    (($.Tag = "tag"), ($.Mapping = "mapping"));
  })(g2 || (h2.DiscrError = g2 = {}));
});
var d2 = M((c2) => {
  Object.defineProperty(c2, "__esModule", { value: !0 });
  var B8 = a(),
    UK = m2(),
    l2 = ZY(),
    Kl = KJ(),
    Nl = Y$(),
    Vl = {
      message: ({ params: { discrError: $, tagName: X } }) =>
        $ === UK.DiscrError.Tag
          ? `tag "${X}" must be string`
          : `value of tag "${X}" must be in oneOf`,
      params: ({ params: { discrError: $, tag: X, tagName: J } }) =>
        B8._`{error: ${$}, tag: ${J}, tagValue: ${X}}`,
    },
    Ol = {
      keyword: "discriminator",
      type: "object",
      schemaType: "object",
      error: Vl,
      code($) {
        let { gen: X, data: J, schema: Y, parentSchema: Q, it: W } = $,
          { oneOf: z } = Q;
        if (!W.opts.discriminator)
          throw Error("discriminator: requires discriminator option");
        let G = Y.propertyName;
        if (typeof G != "string")
          throw Error("discriminator: requires propertyName");
        if (Y.mapping) throw Error("discriminator: mapping is not supported");
        if (!z) throw Error("discriminator: requires oneOf keyword");
        let U = X.let("valid", !1),
          H = X.const("tag", B8._`${J}${(0, B8.getProperty)(G)}`);
        (X.if(
          B8._`typeof ${H} == "string"`,
          () => K(),
          () =>
            $.error(!1, { discrError: UK.DiscrError.Tag, tag: H, tagName: G }),
        ),
          $.ok(U));
        function K() {
          let O = V();
          X.if(!1);
          for (let w in O)
            (X.elseIf(B8._`${H} === ${w}`), X.assign(U, N(O[w])));
          (X.else(),
            $.error(!1, {
              discrError: UK.DiscrError.Mapping,
              tag: H,
              tagName: G,
            }),
            X.endIf());
        }
        function N(O) {
          let w = X.name("valid"),
            B = $.subschema({ keyword: "oneOf", schemaProp: O }, w);
          return ($.mergeEvaluated(B, B8.Name), w);
        }
        function V() {
          var O;
          let w = {},
            B = j(Q),
            F = !0;
          for (let _ = 0; _ < z.length; _++) {
            let T = z[_];
            if (
              (T === null || T === void 0 ? void 0 : T.$ref) &&
              !(0, Nl.schemaHasRulesButRef)(T, W.self.RULES)
            ) {
              let _$ = T.$ref;
              if (
                ((T = l2.resolveRef.call(
                  W.self,
                  W.schemaEnv.root,
                  W.baseId,
                  _$,
                )),
                T instanceof l2.SchemaEnv)
              )
                T = T.schema;
              if (T === void 0)
                throw new Kl.default(W.opts.uriResolver, W.baseId, _$);
            }
            let B$ =
              (O = T === null || T === void 0 ? void 0 : T.properties) ===
                null || O === void 0
                ? void 0
                : O[G];
            if (typeof B$ != "object")
              throw Error(
                `discriminator: oneOf subschemas (or referenced schemas) must have "properties/${G}"`,
              );
            ((F = F && (B || j(T))), I(B$, _));
          }
          if (!F) throw Error(`discriminator: "${G}" must be required`);
          return w;
          function j({ required: _ }) {
            return Array.isArray(_) && _.includes(G);
          }
          function I(_, T) {
            if (_.const) Z(_.const, T);
            else if (_.enum) for (let B$ of _.enum) Z(B$, T);
            else
              throw Error(
                `discriminator: "properties/${G}" must have "const" or "enum"`,
              );
          }
          function Z(_, T) {
            if (typeof _ != "string" || _ in w)
              throw Error(
                `discriminator: "${G}" values must be unique strings`,
              );
            w[_] = T;
          }
        }
      },
    };
  c2.default = Ol;
});
var p2 = M((hX$, Bl) => {
  Bl.exports = {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://json-schema.org/draft-07/schema#",
    title: "Core schema meta-schema",
    definitions: {
      schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } },
      nonNegativeInteger: { type: "integer", minimum: 0 },
      nonNegativeIntegerDefault0: {
        allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }],
      },
      simpleTypes: {
        enum: [
          "array",
          "boolean",
          "integer",
          "null",
          "number",
          "object",
          "string",
        ],
      },
      stringArray: {
        type: "array",
        items: { type: "string" },
        uniqueItems: !0,
        default: [],
      },
    },
    type: ["object", "boolean"],
    properties: {
      $id: { type: "string", format: "uri-reference" },
      $schema: { type: "string", format: "uri" },
      $ref: { type: "string", format: "uri-reference" },
      $comment: { type: "string" },
      title: { type: "string" },
      description: { type: "string" },
      default: !0,
      readOnly: { type: "boolean", default: !1 },
      examples: { type: "array", items: !0 },
      multipleOf: { type: "number", exclusiveMinimum: 0 },
      maximum: { type: "number" },
      exclusiveMaximum: { type: "number" },
      minimum: { type: "number" },
      exclusiveMinimum: { type: "number" },
      maxLength: { $ref: "#/definitions/nonNegativeInteger" },
      minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
      pattern: { type: "string", format: "regex" },
      additionalItems: { $ref: "#" },
      items: {
        anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
        default: !0,
      },
      maxItems: { $ref: "#/definitions/nonNegativeInteger" },
      minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
      uniqueItems: { type: "boolean", default: !1 },
      contains: { $ref: "#" },
      maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
      minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
      required: { $ref: "#/definitions/stringArray" },
      additionalProperties: { $ref: "#" },
      definitions: {
        type: "object",
        additionalProperties: { $ref: "#" },
        default: {},
      },
      properties: {
        type: "object",
        additionalProperties: { $ref: "#" },
        default: {},
      },
      patternProperties: {
        type: "object",
        additionalProperties: { $ref: "#" },
        propertyNames: { format: "regex" },
        default: {},
      },
      dependencies: {
        type: "object",
        additionalProperties: {
          anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }],
        },
      },
      propertyNames: { $ref: "#" },
      const: !0,
      enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 },
      type: {
        anyOf: [
          { $ref: "#/definitions/simpleTypes" },
          {
            type: "array",
            items: { $ref: "#/definitions/simpleTypes" },
            minItems: 1,
            uniqueItems: !0,
          },
        ],
      },
      format: { type: "string" },
      contentMediaType: { type: "string" },
      contentEncoding: { type: "string" },
      if: { $ref: "#" },
      then: { $ref: "#" },
      else: { $ref: "#" },
      allOf: { $ref: "#/definitions/schemaArray" },
      anyOf: { $ref: "#/definitions/schemaArray" },
      oneOf: { $ref: "#/definitions/schemaArray" },
      not: { $ref: "#" },
    },
    default: !0,
  };
});
var KK = M((N6, HK) => {
  Object.defineProperty(N6, "__esModule", { value: !0 });
  N6.MissingRefError =
    N6.ValidationError =
    N6.CodeGen =
    N6.Name =
    N6.nil =
    N6.stringify =
    N6.str =
    N6._ =
    N6.KeywordCxt =
    N6.Ajv =
      void 0;
  var ql = oL(),
    Dl = y2(),
    Fl = d2(),
    i2 = p2(),
    jl = ["/properties"],
    lY = "http://json-schema.org/draft-07/schema";
  class AJ extends ql.default {
    _addVocabularies() {
      if (
        (super._addVocabularies(),
        Dl.default.forEach(($) => this.addVocabulary($)),
        this.opts.discriminator)
      )
        this.addKeyword(Fl.default);
    }
    _addDefaultMetaSchema() {
      if ((super._addDefaultMetaSchema(), !this.opts.meta)) return;
      let $ = this.opts.$data ? this.$dataMetaSchema(i2, jl) : i2;
      (this.addMetaSchema($, lY, !1),
        (this.refs["http://json-schema.org/schema"] = lY));
    }
    defaultMeta() {
      return (this.opts.defaultMeta =
        super.defaultMeta() || (this.getSchema(lY) ? lY : void 0));
    }
  }
  N6.Ajv = AJ;
  HK.exports = N6 = AJ;
  HK.exports.Ajv = AJ;
  Object.defineProperty(N6, "__esModule", { value: !0 });
  N6.default = AJ;
  var Ll = HJ();
  Object.defineProperty(N6, "KeywordCxt", {
    enumerable: !0,
    get: function () {
      return Ll.KeywordCxt;
    },
  });
  var q8 = a();
  Object.defineProperty(N6, "_", {
    enumerable: !0,
    get: function () {
      return q8._;
    },
  });
  Object.defineProperty(N6, "str", {
    enumerable: !0,
    get: function () {
      return q8.str;
    },
  });
  Object.defineProperty(N6, "stringify", {
    enumerable: !0,
    get: function () {
      return q8.stringify;
    },
  });
  Object.defineProperty(N6, "nil", {
    enumerable: !0,
    get: function () {
      return q8.nil;
    },
  });
  Object.defineProperty(N6, "Name", {
    enumerable: !0,
    get: function () {
      return q8.Name;
    },
  });
  Object.defineProperty(N6, "CodeGen", {
    enumerable: !0,
    get: function () {
      return q8.CodeGen;
    },
  });
  var Ml = AY();
  Object.defineProperty(N6, "ValidationError", {
    enumerable: !0,
    get: function () {
      return Ml.default;
    },
  });
  var Al = KJ();
  Object.defineProperty(N6, "MissingRefError", {
    enumerable: !0,
    get: function () {
      return Al.default;
    },
  });
});
var JA = M(($A) => {
  Object.defineProperty($A, "__esModule", { value: !0 });
  $A.formatNames = $A.fastFormats = $A.fullFormats = void 0;
  function Q4($, X) {
    return { validate: $, compare: X };
  }
  $A.fullFormats = {
    date: Q4(t2, wK),
    time: Q4(VK(!0), BK),
    "date-time": Q4(n2(!0), s2),
    "iso-time": Q4(VK(), a2),
    "iso-date-time": Q4(n2(), e2),
    duration:
      /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
    uri: vl,
    "uri-reference":
      /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
    "uri-template":
      /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
    url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
    email:
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
    hostname:
      /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
    ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
    regex: yl,
    uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
    "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
    "json-pointer-uri-fragment":
      /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
    "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
    byte: Cl,
    int32: { type: "number", validate: xl },
    int64: { type: "number", validate: Tl },
    float: { type: "number", validate: o2 },
    double: { type: "number", validate: o2 },
    password: !0,
    binary: !0,
  };
  $A.fastFormats = {
    ...$A.fullFormats,
    date: Q4(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, wK),
    time: Q4(
      /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
      BK,
    ),
    "date-time": Q4(
      /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
      s2,
    ),
    "iso-time": Q4(
      /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
      a2,
    ),
    "iso-date-time": Q4(
      /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
      e2,
    ),
    uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
    "uri-reference":
      /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    email:
      /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  };
  $A.formatNames = Object.keys($A.fullFormats);
  function bl($) {
    return $ % 4 === 0 && ($ % 100 !== 0 || $ % 400 === 0);
  }
  var Rl = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
    Pl = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function t2($) {
    let X = Rl.exec($);
    if (!X) return !1;
    let J = +X[1],
      Y = +X[2],
      Q = +X[3];
    return Y >= 1 && Y <= 12 && Q >= 1 && Q <= (Y === 2 && bl(J) ? 29 : Pl[Y]);
  }
  function wK($, X) {
    if (!($ && X)) return;
    if ($ > X) return 1;
    if ($ < X) return -1;
    return 0;
  }
  var NK = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
  function VK($) {
    return function (J) {
      let Y = NK.exec(J);
      if (!Y) return !1;
      let Q = +Y[1],
        W = +Y[2],
        z = +Y[3],
        G = Y[4],
        U = Y[5] === "-" ? -1 : 1,
        H = +(Y[6] || 0),
        K = +(Y[7] || 0);
      if (H > 23 || K > 59 || ($ && !G)) return !1;
      if (Q <= 23 && W <= 59 && z < 60) return !0;
      let N = W - K * U,
        V = Q - H * U - (N < 0 ? 1 : 0);
      return (V === 23 || V === -1) && (N === 59 || N === -1) && z < 61;
    };
  }
  function BK($, X) {
    if (!($ && X)) return;
    let J = new Date("2020-01-01T" + $).valueOf(),
      Y = new Date("2020-01-01T" + X).valueOf();
    if (!(J && Y)) return;
    return J - Y;
  }
  function a2($, X) {
    if (!($ && X)) return;
    let J = NK.exec($),
      Y = NK.exec(X);
    if (!(J && Y)) return;
    if ((($ = J[1] + J[2] + J[3]), (X = Y[1] + Y[2] + Y[3]), $ > X)) return 1;
    if ($ < X) return -1;
    return 0;
  }
  var OK = /t|\s/i;
  function n2($) {
    let X = VK($);
    return function (Y) {
      let Q = Y.split(OK);
      return Q.length === 2 && t2(Q[0]) && X(Q[1]);
    };
  }
  function s2($, X) {
    if (!($ && X)) return;
    let J = new Date($).valueOf(),
      Y = new Date(X).valueOf();
    if (!(J && Y)) return;
    return J - Y;
  }
  function e2($, X) {
    if (!($ && X)) return;
    let [J, Y] = $.split(OK),
      [Q, W] = X.split(OK),
      z = wK(J, Q);
    if (z === void 0) return;
    return z || BK(Y, W);
  }
  var El = /\/|:/,
    Sl =
      /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function vl($) {
    return El.test($) && Sl.test($);
  }
  var r2 = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function Cl($) {
    return ((r2.lastIndex = 0), r2.test($));
  }
  var kl = -2147483648,
    _l = 2147483647;
  function xl($) {
    return Number.isInteger($) && $ <= _l && $ >= kl;
  }
  function Tl($) {
    return Number.isInteger($);
  }
  function o2() {
    return !0;
  }
  var fl = /[^\\]\\Z/;
  function yl($) {
    if (fl.test($)) return !1;
    try {
      return (new RegExp($), !0);
    } catch (X) {
      return !1;
    }
  }
});
var YA = M((QA) => {
  Object.defineProperty(QA, "__esModule", { value: !0 });
  QA.formatLimitDefinition = void 0;
  var hl = KK(),
    o6 = a(),
    O1 = o6.operators,
    cY = {
      formatMaximum: { okStr: "<=", ok: O1.LTE, fail: O1.GT },
      formatMinimum: { okStr: ">=", ok: O1.GTE, fail: O1.LT },
      formatExclusiveMaximum: { okStr: "<", ok: O1.LT, fail: O1.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: O1.GT, fail: O1.LTE },
    },
    ul = {
      message: ({ keyword: $, schemaCode: X }) =>
        o6.str`should be ${cY[$].okStr} ${X}`,
      params: ({ keyword: $, schemaCode: X }) =>
        o6._`{comparison: ${cY[$].okStr}, limit: ${X}}`,
    };
  QA.formatLimitDefinition = {
    keyword: Object.keys(cY),
    type: "string",
    schemaType: "string",
    $data: !0,
    error: ul,
    code($) {
      let { gen: X, data: J, schemaCode: Y, keyword: Q, it: W } = $,
        { opts: z, self: G } = W;
      if (!z.validateFormats) return;
      let U = new hl.KeywordCxt(W, G.RULES.all.format.definition, "format");
      if (U.$data) H();
      else K();
      function H() {
        let V = X.scopeValue("formats", {
            ref: G.formats,
            code: z.code.formats,
          }),
          O = X.const("fmt", o6._`${V}[${U.schemaCode}]`);
        $.fail$data(
          (0, o6.or)(
            o6._`typeof ${O} != "object"`,
            o6._`${O} instanceof RegExp`,
            o6._`typeof ${O}.compare != "function"`,
            N(O),
          ),
        );
      }
      function K() {
        let V = U.schema,
          O = G.formats[V];
        if (!O || O === !0) return;
        if (
          typeof O != "object" ||
          O instanceof RegExp ||
          typeof O.compare != "function"
        )
          throw Error(
            `"${Q}": format "${V}" does not define "compare" function`,
          );
        let w = X.scopeValue("formats", {
          key: V,
          ref: O,
          code: z.code.formats
            ? o6._`${z.code.formats}${(0, o6.getProperty)(V)}`
            : void 0,
        });
        $.fail$data(N(w));
      }
      function N(V) {
        return o6._`${V}.compare(${J}, ${Y}) ${cY[Q].fail} 0`;
      }
    },
    dependencies: ["format"],
  };
  var ml = ($) => {
    return ($.addKeyword(QA.formatLimitDefinition), $);
  };
  QA.default = ml;
});
var UA = M((IJ, GA) => {
  Object.defineProperty(IJ, "__esModule", { value: !0 });
  var D8 = JA(),
    cl = YA(),
    FK = a(),
    WA = new FK.Name("fullFormats"),
    dl = new FK.Name("fastFormats"),
    jK = ($, X = { keywords: !0 }) => {
      if (Array.isArray(X)) return (zA($, X, D8.fullFormats, WA), $);
      let [J, Y] =
          X.mode === "fast" ? [D8.fastFormats, dl] : [D8.fullFormats, WA],
        Q = X.formats || D8.formatNames;
      if ((zA($, Q, J, Y), X.keywords)) (0, cl.default)($);
      return $;
    };
  jK.get = ($, X = "full") => {
    let Y = (X === "fast" ? D8.fastFormats : D8.fullFormats)[$];
    if (!Y) throw Error(`Unknown format "${$}"`);
    return Y;
  };
  function zA($, X, J, Y) {
    var Q, W;
    ((Q = (W = $.opts.code).formats) !== null && Q !== void 0) ||
      (W.formats = FK._`require("ajv-formats/dist/formats").${Y}`);
    for (let z of X) $.addFormat(z, J[z]);
  }
  GA.exports = IJ = jK;
  Object.defineProperty(IJ, "__esModule", { value: !0 });
  IJ.default = jK;
});
import { execFile as Qc } from "child_process";
import { randomUUID as kK } from "crypto";
import { createReadStream as Yc, realpathSync as Wc } from "fs";
import {
  copyFile as zc,
  mkdir as EK,
  readdir as Gc,
  readFile as SA,
  rm as Uc,
  writeFile as vA,
} from "fs/promises";
import { createRequire as Hc } from "module";
import { homedir as SK, tmpdir as Kc } from "os";
import {
  dirname as ZA,
  isAbsolute as CA,
  join as A6,
  relative as kA,
  resolve as bJ,
  sep as _K,
} from "path";
import { createInterface as Nc } from "readline";
import { fileURLToPath as Vc } from "url";
import { setMaxListeners as KI } from "events";
var NI = 50;
function X0($ = NI) {
  let X = new AbortController();
  return (KI($, X.signal), X);
}
function cK($, X, J) {
  return new Promise((Y, Q) => {
    if (X?.aborted) {
      if (J?.throwOnAbort || J?.abortError)
        Q(J.abortError?.() ?? Error("aborted"));
      else Y();
      return;
    }
    let W = setTimeout(
      (G, U, H) => {
        (G?.removeEventListener("abort", U), H());
      },
      $,
      X,
      z,
      Y,
    );
    function z() {
      if ((clearTimeout(W), J?.throwOnAbort || J?.abortError))
        Q(J.abortError?.() ?? Error("aborted"));
      else Y();
    }
    if ((X?.addEventListener("abort", z, { once: !0 }), J?.unref)) W.unref();
  });
}
function VI($, X) {
  $(Error(X));
}
function U4($, X, J) {
  let Y,
    Q = new Promise((W, z) => {
      if (((Y = setTimeout(VI, X, z, J)), typeof Y === "object")) Y.unref?.();
    });
  return Promise.race([$, Q]).finally(() => {
    if (Y !== void 0) clearTimeout(Y);
  });
}
import { spawn as JR } from "child_process";
import { createInterface as QR } from "readline";
var OI = [
    "PreToolUse",
    "PostToolUse",
    "PostToolUseFailure",
    "PostToolBatch",
    "Notification",
    "UserPromptSubmit",
    "UserPromptExpansion",
    "SessionStart",
    "SessionEnd",
    "Stop",
    "StopFailure",
    "SubagentStart",
    "SubagentStop",
    "PreCompact",
    "PostCompact",
    "PermissionRequest",
    "PermissionDenied",
    "Setup",
    "TeammateIdle",
    "TaskCreated",
    "TaskCompleted",
    "Elicitation",
    "ElicitationResult",
    "ConfigChange",
    "WorktreeCreate",
    "WorktreeRemove",
    "InstructionsLoaded",
    "CwdChanged",
    "FileChanged",
  ],
  wI = [
    "clear",
    "resume",
    "logout",
    "prompt_input_exit",
    "other",
    "bypass_permissions_disabled",
  ],
  BI = "__SYSTEM_PROMPT_DYNAMIC_BOUNDARY__";
var qI = /^(?:\s*<[a-z][\w-]*[\s>]|\[Request interrupted by user[^\]]*\])/,
  DI = /<command-name>(.*?)<\/command-name>/;
function b8($, X) {
  if ($.type !== "user") return;
  if ($.isMeta === !0 || $.isCompactSummary === !0) return;
  let J = $.message;
  if (!J) return;
  let Y = J.content,
    Q = [];
  if (typeof Y === "string") Q.push(Y);
  else if (Array.isArray(Y))
    for (let W of Y) {
      if (!W || typeof W !== "object") continue;
      if (W.type === "tool_result") return;
      if (W.type === "text" && typeof W.text === "string") Q.push(W.text);
    }
  for (let W of Q) {
    let z = W.replaceAll(
      `
`,
      " ",
    ).trim();
    if (!z) continue;
    let G = DI.exec(z);
    if (G) {
      if (!X.commandFallback) X.commandFallback = G[1];
      continue;
    }
    let U = /<bash-input>([\s\S]*?)<\/bash-input>/.exec(z);
    if (U) return `! ${U[1].trim()}`;
    if (qI.test(z)) continue;
    if (z.length > 200) z = z.slice(0, 200).trim() + "…";
    return z;
  }
  return;
}
var FI = {
  customTitle: "customTitle",
  aiTitle: "aiTitle",
  lastPrompt: "lastPrompt",
  summary: "summaryHint",
  gitBranch: "gitBranch",
};
function SJ($, X, J, Y) {
  let Q = Y?.mtime ?? $?.mtime ?? 0,
    W =
      $ !== void 0
        ? { sessionId: $.sessionId, mtime: Q, data: { ...$.data } }
        : { sessionId: X.sessionId, mtime: Q, data: {} },
    z = W.data;
  for (let G of J) {
    let U = LI(G.timestamp);
    if (z.isSidechain === void 0) z.isSidechain = G.isSidechain === !0;
    if (z.createdAt === void 0 && U !== void 0) z.createdAt = U;
    if (z.cwd === void 0) {
      let H = G.cwd;
      if (typeof H === "string" && H) z.cwd = H;
    }
    MI(z, G);
    for (let [H, K] of Object.entries(FI)) {
      let N = G[H];
      if (typeof N === "string") z[K] = N;
    }
    if (G.type === "tag") {
      let H = G.tag;
      if (typeof H === "string" && H) z.tag = H;
      else delete z.tag;
    }
  }
  return W;
}
function dK($, X) {
  let J = $.data;
  if (J.isSidechain === !0) return null;
  let Y =
      x4(J.firstPromptLocked === !0 ? J.firstPrompt : J.commandFallback) ||
      void 0,
    Q = x4(J.customTitle) || x4(J.aiTitle) || void 0,
    W = Q || x4(J.lastPrompt) || x4(J.summaryHint) || Y;
  if (!W) return null;
  return {
    sessionId: $.sessionId,
    summary: W,
    lastModified: $.mtime,
    fileSize: void 0,
    customTitle: Q,
    firstPrompt: Y,
    gitBranch: x4(J.gitBranch) || void 0,
    cwd: x4(J.cwd) || X || void 0,
    tag: x4(J.tag) || void 0,
    createdAt: jI(J.createdAt),
  };
}
function x4($) {
  return typeof $ === "string" ? $ : void 0;
}
function jI($) {
  return typeof $ === "number" ? $ : void 0;
}
function LI($) {
  if (typeof $ !== "string") return;
  let X = Date.parse($);
  return Number.isNaN(X) ? void 0 : X;
}
function MI($, X) {
  if ($.firstPromptLocked) return;
  let J = { commandFallback: $.commandFallback ?? "" },
    Y = b8(X, J);
  if (J.commandFallback && !$.commandFallback)
    $.commandFallback = J.commandFallback;
  if (Y !== void 0) (($.firstPrompt = Y), ($.firstPromptLocked = !0));
}
class tY {
  store = new Map();
  mtimes = new Map();
  summaries = new Map();
  lastMtime = 0;
  keyToString($) {
    let X = [$.projectKey, $.sessionId];
    if ($.subpath) X.push($.subpath);
    return X.join("/");
  }
  async append($, X) {
    let J = this.keyToString($),
      Y = this.store.get(J) ?? [];
    (Y.push(...X), this.store.set(J, Y));
    let Q = Math.max(Date.now(), this.lastMtime + 1);
    if (((this.lastMtime = Q), this.mtimes.set(J, Q), $.subpath === void 0)) {
      let W = `${$.projectKey}/${$.sessionId}`,
        z = SJ(this.summaries.get(W), $, X, { mtime: Q });
      this.summaries.set(W, z);
    }
  }
  async load($) {
    let X = this.keyToString($);
    return this.store.get(X) ?? null;
  }
  async listSessions($) {
    let X = [],
      J = $ + "/";
    for (let [Y] of this.store)
      if (Y.startsWith(J)) {
        let Q = Y.slice(J.length);
        if (!Q.includes("/"))
          X.push({ sessionId: Q, mtime: this.mtimes.get(Y) ?? 0 });
      }
    return X;
  }
  async listSessionSummaries($) {
    let X = [],
      J = $ + "/";
    for (let [Y, Q] of this.summaries) if (Y.startsWith(J)) X.push(Q);
    return X;
  }
  async delete($) {
    let X = this.keyToString($);
    if ((this.store.delete(X), this.mtimes.delete(X), $.subpath === void 0)) {
      this.summaries.delete(`${$.projectKey}/${$.sessionId}`);
      let J = `${$.projectKey}/${$.sessionId}/`;
      for (let Y of this.store.keys())
        if (Y.startsWith(J)) (this.store.delete(Y), this.mtimes.delete(Y));
    }
  }
  async listSubkeys($) {
    let X = `${$.projectKey}/${$.sessionId}/`,
      J = [];
    for (let Y of this.store.keys())
      if (Y.startsWith(X)) J.push(Y.slice(X.length));
    return J;
  }
  getEntries($) {
    return this.store.get(this.keyToString($)) ?? [];
  }
  get size() {
    let $ = 0;
    for (let X of this.store.keys()) {
      let J = X.indexOf("/");
      if (J !== -1 && !X.slice(J + 1).includes("/")) $++;
    }
    return $;
  }
  clear() {
    (this.store.clear(), this.mtimes.clear(), this.summaries.clear());
  }
}
class $6 extends Error {}
function J0() {
  return process.versions.bun !== void 0;
}
function X6($) {
  if (!$) return !1;
  if (typeof $ === "boolean") return $;
  let X = String($).toLowerCase().trim();
  return ["1", "true", "yes", "on"].includes(X);
}
function Q0() {
  let $ = new Set();
  return {
    subscribe(X) {
      return (
        $.add(X),
        () => {
          $.delete(X);
        }
      );
    },
    emit(...X) {
      let J;
      for (let Y of $)
        try {
          Y(...X);
        } catch (Q) {
          (J ??= []).push(Q);
        }
      if (J)
        throw J.length === 1
          ? J[0]
          : AggregateError(J, "Signal listener(s) threw");
    },
    clear() {
      $.clear();
    },
  };
}
var II =
    typeof global == "object" && global && global.Object === Object && global,
  pK = II;
var ZI = typeof self == "object" && self && self.Object === Object && self,
  bI = pK || ZI || Function("return this")(),
  Y0 = bI;
var RI = Y0.Symbol,
  W0 = RI;
var iK = Object.prototype,
  PI = iK.hasOwnProperty,
  EI = iK.toString,
  R8 = W0 ? W0.toStringTag : void 0;
function SI($) {
  var X = PI.call($, R8),
    J = $[R8];
  try {
    $[R8] = void 0;
    var Y = !0;
  } catch (W) {}
  var Q = EI.call($);
  if (Y)
    if (X) $[R8] = J;
    else delete $[R8];
  return Q;
}
var nK = SI;
var vI = Object.prototype,
  CI = vI.toString;
function kI($) {
  return CI.call($);
}
var rK = kI;
var _I = "[object Null]",
  xI = "[object Undefined]",
  oK = W0 ? W0.toStringTag : void 0;
function TI($) {
  if ($ == null) return $ === void 0 ? xI : _I;
  return oK && oK in Object($) ? nK($) : rK($);
}
var tK = TI;
function fI($) {
  var X = typeof $;
  return $ != null && (X == "object" || X == "function");
}
var vJ = fI;
var yI = "[object AsyncFunction]",
  gI = "[object Function]",
  hI = "[object GeneratorFunction]",
  uI = "[object Proxy]";
function mI($) {
  if (!vJ($)) return !1;
  var X = tK($);
  return X == gI || X == hI || X == yI || X == uI;
}
var aK = mI;
var lI = Y0["__core-js_shared__"],
  CJ = lI;
var sK = (function () {
  var $ = /[^.]+$/.exec((CJ && CJ.keys && CJ.keys.IE_PROTO) || "");
  return $ ? "Symbol(src)_1." + $ : "";
})();
function cI($) {
  return !!sK && sK in $;
}
var eK = cI;
var dI = Function.prototype,
  pI = dI.toString;
function iI($) {
  if ($ != null) {
    try {
      return pI.call($);
    } catch (X) {}
    try {
      return $ + "";
    } catch (X) {}
  }
  return "";
}
var $N = iI;
var nI = /[\\^$.*+?()[\]{}|]/g,
  rI = /^\[object .+?Constructor\]$/,
  oI = Function.prototype,
  tI = Object.prototype,
  aI = oI.toString,
  sI = tI.hasOwnProperty,
  eI = RegExp(
    "^" +
      aI
        .call(sI)
        .replace(nI, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?",
        ) +
      "$",
  );
function $Z($) {
  if (!vJ($) || eK($)) return !1;
  var X = aK($) ? eI : rI;
  return X.test($N($));
}
var XN = $Z;
function XZ($, X) {
  return $ == null ? void 0 : $[X];
}
var JN = XZ;
function JZ($, X) {
  var J = JN($, X);
  return XN(J) ? J : void 0;
}
var kJ = JZ;
var QZ = kJ(Object, "create"),
  H4 = QZ;
function YZ() {
  ((this.__data__ = H4 ? H4(null) : {}), (this.size = 0));
}
var QN = YZ;
function WZ($) {
  var X = this.has($) && delete this.__data__[$];
  return ((this.size -= X ? 1 : 0), X);
}
var YN = WZ;
var zZ = "__lodash_hash_undefined__",
  GZ = Object.prototype,
  UZ = GZ.hasOwnProperty;
function HZ($) {
  var X = this.__data__;
  if (H4) {
    var J = X[$];
    return J === zZ ? void 0 : J;
  }
  return UZ.call(X, $) ? X[$] : void 0;
}
var WN = HZ;
var KZ = Object.prototype,
  NZ = KZ.hasOwnProperty;
function VZ($) {
  var X = this.__data__;
  return H4 ? X[$] !== void 0 : NZ.call(X, $);
}
var zN = VZ;
var OZ = "__lodash_hash_undefined__";
function wZ($, X) {
  var J = this.__data__;
  return (
    (this.size += this.has($) ? 0 : 1),
    (J[$] = H4 && X === void 0 ? OZ : X),
    this
  );
}
var GN = wZ;
function z0($) {
  var X = -1,
    J = $ == null ? 0 : $.length;
  this.clear();
  while (++X < J) {
    var Y = $[X];
    this.set(Y[0], Y[1]);
  }
}
z0.prototype.clear = QN;
z0.prototype.delete = YN;
z0.prototype.get = WN;
z0.prototype.has = zN;
z0.prototype.set = GN;
var aY = z0;
function BZ() {
  ((this.__data__ = []), (this.size = 0));
}
var UN = BZ;
function qZ($, X) {
  return $ === X || ($ !== $ && X !== X);
}
var HN = qZ;
function DZ($, X) {
  var J = $.length;
  while (J--) if (HN($[J][0], X)) return J;
  return -1;
}
var T4 = DZ;
var FZ = Array.prototype,
  jZ = FZ.splice;
function LZ($) {
  var X = this.__data__,
    J = T4(X, $);
  if (J < 0) return !1;
  var Y = X.length - 1;
  if (J == Y) X.pop();
  else jZ.call(X, J, 1);
  return (--this.size, !0);
}
var KN = LZ;
function MZ($) {
  var X = this.__data__,
    J = T4(X, $);
  return J < 0 ? void 0 : X[J][1];
}
var NN = MZ;
function AZ($) {
  return T4(this.__data__, $) > -1;
}
var VN = AZ;
function IZ($, X) {
  var J = this.__data__,
    Y = T4(J, $);
  if (Y < 0) (++this.size, J.push([$, X]));
  else J[Y][1] = X;
  return this;
}
var ON = IZ;
function G0($) {
  var X = -1,
    J = $ == null ? 0 : $.length;
  this.clear();
  while (++X < J) {
    var Y = $[X];
    this.set(Y[0], Y[1]);
  }
}
G0.prototype.clear = UN;
G0.prototype.delete = KN;
G0.prototype.get = NN;
G0.prototype.has = VN;
G0.prototype.set = ON;
var wN = G0;
var ZZ = kJ(Y0, "Map"),
  BN = ZZ;
function bZ() {
  ((this.size = 0),
    (this.__data__ = {
      hash: new aY(),
      map: new (BN || wN)(),
      string: new aY(),
    }));
}
var qN = bZ;
function RZ($) {
  var X = typeof $;
  return X == "string" || X == "number" || X == "symbol" || X == "boolean"
    ? $ !== "__proto__"
    : $ === null;
}
var DN = RZ;
function PZ($, X) {
  var J = $.__data__;
  return DN(X) ? J[typeof X == "string" ? "string" : "hash"] : J.map;
}
var f4 = PZ;
function EZ($) {
  var X = f4(this, $).delete($);
  return ((this.size -= X ? 1 : 0), X);
}
var FN = EZ;
function SZ($) {
  return f4(this, $).get($);
}
var jN = SZ;
function vZ($) {
  return f4(this, $).has($);
}
var LN = vZ;
function CZ($, X) {
  var J = f4(this, $),
    Y = J.size;
  return (J.set($, X), (this.size += J.size == Y ? 0 : 1), this);
}
var MN = CZ;
function U0($) {
  var X = -1,
    J = $ == null ? 0 : $.length;
  this.clear();
  while (++X < J) {
    var Y = $[X];
    this.set(Y[0], Y[1]);
  }
}
U0.prototype.clear = qN;
U0.prototype.delete = FN;
U0.prototype.get = jN;
U0.prototype.has = LN;
U0.prototype.set = MN;
var sY = U0;
var kZ = "Expected a function";
function eY($, X) {
  if (typeof $ != "function" || (X != null && typeof X != "function"))
    throw TypeError(kZ);
  var J = function () {
    var Y = arguments,
      Q = X ? X.apply(this, Y) : Y[0],
      W = J.cache;
    if (W.has(Q)) return W.get(Q);
    var z = $.apply(this, Y);
    return ((J.cache = W.set(Q, z) || W), z);
  };
  return ((J.cache = new (eY.Cache || sY)()), J);
}
eY.Cache = sY;
var T6 = eY;
import { homedir as _Z } from "os";
import { join as xZ } from "path";
var y4 = T6(
  () => {
    return (process.env.CLAUDE_CONFIG_DIR ?? xZ(_Z(), ".claude")).normalize(
      "NFC",
    );
  },
  () => process.env.CLAUDE_CONFIG_DIR,
);
function C($, X, J, Y, Q) {
  if (Y === "m") throw TypeError("Private method is not writable");
  if (Y === "a" && !Q)
    throw TypeError("Private accessor was defined without a setter");
  if (typeof X === "function" ? $ !== X || !Q : !X.has($))
    throw TypeError(
      "Cannot write private member to an object whose class did not declare it",
    );
  return (Y === "a" ? Q.call($, J) : Q ? (Q.value = J) : X.set($, J), J);
}
function D($, X, J, Y) {
  if (J === "a" && !Y)
    throw TypeError("Private accessor was defined without a getter");
  if (typeof X === "function" ? $ !== X || !Y : !X.has($))
    throw TypeError(
      "Cannot read private member from an object whose class did not declare it",
    );
  return J === "m" ? Y : J === "a" ? Y.call($) : Y ? Y.value : X.get($);
}
var $W = function () {
  let { crypto: $ } = globalThis;
  if ($?.randomUUID) return (($W = $.randomUUID.bind($)), $.randomUUID());
  let X = new Uint8Array(1),
    J = $ ? () => $.getRandomValues(X)[0] : () => (Math.random() * 255) & 255;
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (Y) =>
    (+Y ^ (J() & (15 >> (+Y / 4)))).toString(16),
  );
};
function K4($) {
  return (
    typeof $ === "object" &&
    $ !== null &&
    (("name" in $ && $.name === "AbortError") ||
      ("message" in $ &&
        String($.message).includes("FetchRequestCanceledException")))
  );
}
var P8 = ($) => {
  if ($ instanceof Error) return $;
  if (typeof $ === "object" && $ !== null) {
    try {
      if (Object.prototype.toString.call($) === "[object Error]") {
        let X = Error($.message, $.cause ? { cause: $.cause } : {});
        if ($.stack) X.stack = $.stack;
        if ($.cause && !X.cause) X.cause = $.cause;
        if ($.name) X.name = $.name;
        return X;
      }
    } catch {}
    try {
      return Error(JSON.stringify($));
    } catch {}
  }
  return Error($);
};
class f extends Error {}
class x$ extends f {
  constructor($, X, J, Y, Q) {
    super(`${x$.makeMessage($, X, J)}`);
    ((this.status = $),
      (this.headers = Y),
      (this.requestID = Y?.get("request-id")),
      (this.error = X),
      (this.type = Q ?? null));
  }
  static makeMessage($, X, J) {
    let Y = X?.message
      ? typeof X.message === "string"
        ? X.message
        : JSON.stringify(X.message)
      : X
        ? JSON.stringify(X)
        : J;
    if ($ && Y) return `${$} ${Y}`;
    if ($) return `${$} status code (no body)`;
    if (Y) return Y;
    return "(no status code or body)";
  }
  static generate($, X, J, Y) {
    if (!$ || !Y) return new q1({ message: J, cause: P8(X) });
    let Q = X,
      W = Q?.error?.type;
    if ($ === 400) return new S8($, Q, J, Y, W);
    if ($ === 401) return new v8($, Q, J, Y, W);
    if ($ === 403) return new C8($, Q, J, Y, W);
    if ($ === 404) return new k8($, Q, J, Y, W);
    if ($ === 409) return new _8($, Q, J, Y, W);
    if ($ === 422) return new x8($, Q, J, Y, W);
    if ($ === 429) return new T8($, Q, J, Y, W);
    if ($ >= 500) return new f8($, Q, J, Y, W);
    return new x$($, Q, J, Y, W);
  }
}
class u$ extends x$ {
  constructor({ message: $ } = {}) {
    super(void 0, void 0, $ || "Request was aborted.", void 0);
  }
}
class q1 extends x$ {
  constructor({ message: $, cause: X }) {
    super(void 0, void 0, $ || "Connection error.", void 0);
    if (X) this.cause = X;
  }
}
class E8 extends q1 {
  constructor({ message: $ } = {}) {
    super({ message: $ ?? "Request timed out." });
  }
}
class S8 extends x$ {}
class v8 extends x$ {}
class C8 extends x$ {}
class k8 extends x$ {}
class _8 extends x$ {}
class x8 extends x$ {}
class T8 extends x$ {}
class f8 extends x$ {}
var fZ = /^[a-z][a-z0-9+.-]*:/i,
  AN = ($) => {
    return fZ.test($);
  },
  XW = ($) => ((XW = Array.isArray), XW($)),
  JW = XW;
function _J($) {
  if (typeof $ !== "object") return {};
  return $ ?? {};
}
function QW($) {
  if (!$) return !0;
  for (let X in $) return !1;
  return !0;
}
function IN($, X) {
  return Object.prototype.hasOwnProperty.call($, X);
}
var ZN = ($, X) => {
  if (typeof X !== "number" || !Number.isInteger(X))
    throw new f(`${$} must be an integer`);
  if (X < 0) throw new f(`${$} must be a positive integer`);
  return X;
};
var xJ = ($) => {
  try {
    return JSON.parse($);
  } catch (X) {
    return;
  }
};
var bN = ($) => new Promise((X) => setTimeout(X, $));
var g4 = "0.81.0";
var SN = () => {
  return (
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof navigator < "u"
  );
};
function yZ() {
  if (typeof Deno < "u" && Deno.build != null) return "deno";
  if (typeof EdgeRuntime < "u") return "edge";
  if (
    Object.prototype.toString.call(
      typeof globalThis.process < "u" ? globalThis.process : 0,
    ) === "[object process]"
  )
    return "node";
  return "unknown";
}
var gZ = () => {
  let $ = yZ();
  if ($ === "deno")
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": g4,
      "X-Stainless-OS": PN(Deno.build.os),
      "X-Stainless-Arch": RN(Deno.build.arch),
      "X-Stainless-Runtime": "deno",
      "X-Stainless-Runtime-Version":
        typeof Deno.version === "string"
          ? Deno.version
          : (Deno.version?.deno ?? "unknown"),
    };
  if (typeof EdgeRuntime < "u")
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": g4,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": `other:${EdgeRuntime}`,
      "X-Stainless-Runtime": "edge",
      "X-Stainless-Runtime-Version": globalThis.process.version,
    };
  if ($ === "node")
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": g4,
      "X-Stainless-OS": PN(globalThis.process.platform ?? "unknown"),
      "X-Stainless-Arch": RN(globalThis.process.arch ?? "unknown"),
      "X-Stainless-Runtime": "node",
      "X-Stainless-Runtime-Version": globalThis.process.version ?? "unknown",
    };
  let X = hZ();
  if (X)
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": g4,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": "unknown",
      "X-Stainless-Runtime": `browser:${X.browser}`,
      "X-Stainless-Runtime-Version": X.version,
    };
  return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": g4,
    "X-Stainless-OS": "Unknown",
    "X-Stainless-Arch": "unknown",
    "X-Stainless-Runtime": "unknown",
    "X-Stainless-Runtime-Version": "unknown",
  };
};
function hZ() {
  if (typeof navigator > "u" || !navigator) return null;
  let $ = [
    { key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie", pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "chrome", pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "firefox", pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    {
      key: "safari",
      pattern:
        /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/,
    },
  ];
  for (let { key: X, pattern: J } of $) {
    let Y = J.exec(navigator.userAgent);
    if (Y) {
      let Q = Y[1] || 0,
        W = Y[2] || 0,
        z = Y[3] || 0;
      return { browser: X, version: `${Q}.${W}.${z}` };
    }
  }
  return null;
}
var RN = ($) => {
    if ($ === "x32") return "x32";
    if ($ === "x86_64" || $ === "x64") return "x64";
    if ($ === "arm") return "arm";
    if ($ === "aarch64" || $ === "arm64") return "arm64";
    if ($) return `other:${$}`;
    return "unknown";
  },
  PN = ($) => {
    if ((($ = $.toLowerCase()), $.includes("ios"))) return "iOS";
    if ($ === "android") return "Android";
    if ($ === "darwin") return "MacOS";
    if ($ === "win32") return "Windows";
    if ($ === "freebsd") return "FreeBSD";
    if ($ === "openbsd") return "OpenBSD";
    if ($ === "linux") return "Linux";
    if ($) return `Other:${$}`;
    return "Unknown";
  },
  EN,
  vN = () => {
    return EN ?? (EN = gZ());
  };
function CN() {
  if (typeof fetch < "u") return fetch;
  throw Error(
    "`fetch` is not defined as a global; Either pass `fetch` to the client, `new Anthropic({ fetch })` or polyfill the global, `globalThis.fetch = fetch`",
  );
}
function YW(...$) {
  let X = globalThis.ReadableStream;
  if (typeof X > "u")
    throw Error(
      "`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`",
    );
  return new X(...$);
}
function TJ($) {
  let X =
    Symbol.asyncIterator in $
      ? $[Symbol.asyncIterator]()
      : $[Symbol.iterator]();
  return YW({
    start() {},
    async pull(J) {
      let { done: Y, value: Q } = await X.next();
      if (Y) J.close();
      else J.enqueue(Q);
    },
    async cancel() {
      await X.return?.();
    },
  });
}
function y8($) {
  if ($[Symbol.asyncIterator]) return $;
  let X = $.getReader();
  return {
    async next() {
      try {
        let J = await X.read();
        if (J?.done) X.releaseLock();
        return J;
      } catch (J) {
        throw (X.releaseLock(), J);
      }
    },
    async return() {
      let J = X.cancel();
      return (X.releaseLock(), await J, { done: !0, value: void 0 });
    },
    [Symbol.asyncIterator]() {
      return this;
    },
  };
}
async function kN($) {
  if ($ === null || typeof $ !== "object") return;
  if ($[Symbol.asyncIterator]) {
    await $[Symbol.asyncIterator]().return?.();
    return;
  }
  let X = $.getReader(),
    J = X.cancel();
  (X.releaseLock(), await J);
}
var _N = ({ headers: $, body: X }) => {
  return {
    bodyHeaders: { "content-type": "application/json" },
    body: JSON.stringify(X),
  };
};
function xN($) {
  return Object.entries($)
    .filter(([X, J]) => typeof J < "u")
    .map(([X, J]) => {
      if (
        typeof J === "string" ||
        typeof J === "number" ||
        typeof J === "boolean"
      )
        return `${encodeURIComponent(X)}=${encodeURIComponent(J)}`;
      if (J === null) return `${encodeURIComponent(X)}=`;
      throw new f(
        `Cannot stringify type ${typeof J}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`,
      );
    })
    .join("&");
}
function yN($) {
  let X = 0;
  for (let Q of $) X += Q.length;
  let J = new Uint8Array(X),
    Y = 0;
  for (let Q of $) (J.set(Q, Y), (Y += Q.length));
  return J;
}
var TN;
function g8($) {
  let X;
  return (TN ?? ((X = new globalThis.TextEncoder()), (TN = X.encode.bind(X))))(
    $,
  );
}
var fN;
function WW($) {
  let X;
  return (fN ?? ((X = new globalThis.TextDecoder()), (fN = X.decode.bind(X))))(
    $,
  );
}
var B6, q6;
class h4 {
  constructor() {
    (B6.set(this, void 0),
      q6.set(this, void 0),
      C(this, B6, new Uint8Array(), "f"),
      C(this, q6, null, "f"));
  }
  decode($) {
    if ($ == null) return [];
    let X =
      $ instanceof ArrayBuffer
        ? new Uint8Array($)
        : typeof $ === "string"
          ? g8($)
          : $;
    C(this, B6, yN([D(this, B6, "f"), X]), "f");
    let J = [],
      Y;
    while ((Y = lZ(D(this, B6, "f"), D(this, q6, "f"))) != null) {
      if (Y.carriage && D(this, q6, "f") == null) {
        C(this, q6, Y.index, "f");
        continue;
      }
      if (
        D(this, q6, "f") != null &&
        (Y.index !== D(this, q6, "f") + 1 || Y.carriage)
      ) {
        (J.push(WW(D(this, B6, "f").subarray(0, D(this, q6, "f") - 1))),
          C(this, B6, D(this, B6, "f").subarray(D(this, q6, "f")), "f"),
          C(this, q6, null, "f"));
        continue;
      }
      let Q = D(this, q6, "f") !== null ? Y.preceding - 1 : Y.preceding,
        W = WW(D(this, B6, "f").subarray(0, Q));
      (J.push(W),
        C(this, B6, D(this, B6, "f").subarray(Y.index), "f"),
        C(this, q6, null, "f"));
    }
    return J;
  }
  flush() {
    if (!D(this, B6, "f").length) return [];
    return this.decode(`
`);
  }
}
((B6 = new WeakMap()), (q6 = new WeakMap()));
h4.NEWLINE_CHARS = new Set([
  `
`,
  "\r",
]);
h4.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
function lZ($, X) {
  for (let Q = X ?? 0; Q < $.length; Q++) {
    if ($[Q] === 10) return { preceding: Q, index: Q + 1, carriage: !1 };
    if ($[Q] === 13) return { preceding: Q, index: Q + 1, carriage: !0 };
  }
  return null;
}
function gN($) {
  for (let Y = 0; Y < $.length - 1; Y++) {
    if ($[Y] === 10 && $[Y + 1] === 10) return Y + 2;
    if ($[Y] === 13 && $[Y + 1] === 13) return Y + 2;
    if (
      $[Y] === 13 &&
      $[Y + 1] === 10 &&
      Y + 3 < $.length &&
      $[Y + 2] === 13 &&
      $[Y + 3] === 10
    )
      return Y + 4;
  }
  return -1;
}
var yJ = { off: 0, error: 200, warn: 300, info: 400, debug: 500 },
  zW = ($, X, J) => {
    if (!$) return;
    if (IN(yJ, $)) return $;
    h$(J).warn(
      `${X} was set to ${JSON.stringify($)}, expected one of ${JSON.stringify(Object.keys(yJ))}`,
    );
    return;
  };
function h8() {}
function fJ($, X, J) {
  if (!X || yJ[$] > yJ[J]) return h8;
  else return X[$].bind(X);
}
var cZ = { error: h8, warn: h8, info: h8, debug: h8 },
  hN = new WeakMap();
function h$($) {
  let X = $.logger,
    J = $.logLevel ?? "off";
  if (!X) return cZ;
  let Y = hN.get(X);
  if (Y && Y[0] === J) return Y[1];
  let Q = {
    error: fJ("error", X, J),
    warn: fJ("warn", X, J),
    info: fJ("info", X, J),
    debug: fJ("debug", X, J),
  };
  return (hN.set(X, [J, Q]), Q);
}
var N4 = ($) => {
  if ($.options) (($.options = { ...$.options }), delete $.options.headers);
  if ($.headers)
    $.headers = Object.fromEntries(
      ($.headers instanceof Headers
        ? [...$.headers]
        : Object.entries($.headers)
      ).map(([X, J]) => [
        X,
        X.toLowerCase() === "x-api-key" ||
        X.toLowerCase() === "authorization" ||
        X.toLowerCase() === "cookie" ||
        X.toLowerCase() === "set-cookie"
          ? "***"
          : J,
      ]),
    );
  if ("retryOfRequestLogID" in $) {
    if ($.retryOfRequestLogID) $.retryOf = $.retryOfRequestLogID;
    delete $.retryOfRequestLogID;
  }
  return $;
};
var u8;
class D6 {
  constructor($, X, J) {
    ((this.iterator = $),
      u8.set(this, void 0),
      (this.controller = X),
      C(this, u8, J, "f"));
  }
  static fromSSEResponse($, X, J) {
    let Y = !1,
      Q = J ? h$(J) : console;
    async function* W() {
      if (Y)
        throw new f(
          "Cannot iterate over a consumed stream, use `.tee()` to split the stream.",
        );
      Y = !0;
      let z = !1;
      try {
        for await (let G of dZ($, X)) {
          if (G.event === "completion")
            try {
              yield JSON.parse(G.data);
            } catch (U) {
              throw (
                Q.error("Could not parse message into JSON:", G.data),
                Q.error("From chunk:", G.raw),
                U
              );
            }
          if (
            G.event === "message_start" ||
            G.event === "message_delta" ||
            G.event === "message_stop" ||
            G.event === "content_block_start" ||
            G.event === "content_block_delta" ||
            G.event === "content_block_stop"
          )
            try {
              yield JSON.parse(G.data);
            } catch (U) {
              throw (
                Q.error("Could not parse message into JSON:", G.data),
                Q.error("From chunk:", G.raw),
                U
              );
            }
          if (G.event === "ping") continue;
          if (G.event === "error") {
            let U = xJ(G.data) ?? G.data,
              H = U?.error?.type;
            throw new x$(void 0, U, void 0, $.headers, H);
          }
        }
        z = !0;
      } catch (G) {
        if (K4(G)) return;
        throw G;
      } finally {
        if (!z) X.abort();
      }
    }
    return new D6(W, X, J);
  }
  static fromReadableStream($, X, J) {
    let Y = !1;
    async function* Q() {
      let z = new h4(),
        G = y8($);
      for await (let U of G) for (let H of z.decode(U)) yield H;
      for (let U of z.flush()) yield U;
    }
    async function* W() {
      if (Y)
        throw new f(
          "Cannot iterate over a consumed stream, use `.tee()` to split the stream.",
        );
      Y = !0;
      let z = !1;
      try {
        for await (let G of Q()) {
          if (z) continue;
          if (G) yield JSON.parse(G);
        }
        z = !0;
      } catch (G) {
        if (K4(G)) return;
        throw G;
      } finally {
        if (!z) X.abort();
      }
    }
    return new D6(W, X, J);
  }
  [((u8 = new WeakMap()), Symbol.asyncIterator)]() {
    return this.iterator();
  }
  tee() {
    let $ = [],
      X = [],
      J = this.iterator(),
      Y = (Q) => {
        return {
          next: () => {
            if (Q.length === 0) {
              let W = J.next();
              ($.push(W), X.push(W));
            }
            return Q.shift();
          },
        };
      };
    return [
      new D6(() => Y($), this.controller, D(this, u8, "f")),
      new D6(() => Y(X), this.controller, D(this, u8, "f")),
    ];
  }
  toReadableStream() {
    let $ = this,
      X;
    return YW({
      async start() {
        X = $[Symbol.asyncIterator]();
      },
      async pull(J) {
        try {
          let { value: Y, done: Q } = await X.next();
          if (Q) return J.close();
          let W = g8(
            JSON.stringify(Y) +
              `
`,
          );
          J.enqueue(W);
        } catch (Y) {
          J.error(Y);
        }
      },
      async cancel() {
        await X.return?.();
      },
    });
  }
}
async function* dZ($, X) {
  if (!$.body) {
    if (
      (X.abort(),
      typeof globalThis.navigator < "u" &&
        globalThis.navigator.product === "ReactNative")
    )
      throw new f(
        "The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api",
      );
    throw new f("Attempted to iterate over a response with no body");
  }
  let J = new uN(),
    Y = new h4(),
    Q = y8($.body);
  for await (let W of pZ(Q))
    for (let z of Y.decode(W)) {
      let G = J.decode(z);
      if (G) yield G;
    }
  for (let W of Y.flush()) {
    let z = J.decode(W);
    if (z) yield z;
  }
}
async function* pZ($) {
  let X = new Uint8Array();
  for await (let J of $) {
    if (J == null) continue;
    let Y =
        J instanceof ArrayBuffer
          ? new Uint8Array(J)
          : typeof J === "string"
            ? g8(J)
            : J,
      Q = new Uint8Array(X.length + Y.length);
    (Q.set(X), Q.set(Y, X.length), (X = Q));
    let W;
    while ((W = gN(X)) !== -1) (yield X.slice(0, W), (X = X.slice(W)));
  }
  if (X.length > 0) yield X;
}
class uN {
  constructor() {
    ((this.event = null), (this.data = []), (this.chunks = []));
  }
  decode($) {
    if ($.endsWith("\r")) $ = $.substring(0, $.length - 1);
    if (!$) {
      if (!this.event && !this.data.length) return null;
      let Q = {
        event: this.event,
        data: this.data.join(`
`),
        raw: this.chunks,
      };
      return ((this.event = null), (this.data = []), (this.chunks = []), Q);
    }
    if ((this.chunks.push($), $.startsWith(":"))) return null;
    let [X, J, Y] = iZ($, ":");
    if (Y.startsWith(" ")) Y = Y.substring(1);
    if (X === "event") this.event = Y;
    else if (X === "data") this.data.push(Y);
    return null;
  }
}
function iZ($, X) {
  let J = $.indexOf(X);
  if (J !== -1) return [$.substring(0, J), X, $.substring(J + X.length)];
  return [$, "", ""];
}
async function gJ($, X) {
  let {
      response: J,
      requestLogID: Y,
      retryOfRequestLogID: Q,
      startTime: W,
    } = X,
    z = await (async () => {
      if (X.options.stream) {
        if (
          (h$($).debug("response", J.status, J.url, J.headers, J.body),
          X.options.__streamClass)
        )
          return X.options.__streamClass.fromSSEResponse(J, X.controller);
        return D6.fromSSEResponse(J, X.controller);
      }
      if (J.status === 204) return null;
      if (X.options.__binaryResponse) return J;
      let U = J.headers.get("content-type")?.split(";")[0]?.trim();
      if (U?.includes("application/json") || U?.endsWith("+json")) {
        if (J.headers.get("content-length") === "0") return;
        let V = await J.json();
        return GW(V, J);
      }
      return await J.text();
    })();
  return (
    h$($).debug(
      `[${Y}] response parsed`,
      N4({
        retryOfRequestLogID: Q,
        url: J.url,
        status: J.status,
        body: z,
        durationMs: Date.now() - W,
      }),
    ),
    z
  );
}
function GW($, X) {
  if (!$ || typeof $ !== "object" || Array.isArray($)) return $;
  return Object.defineProperty($, "_request_id", {
    value: X.headers.get("request-id"),
    enumerable: !1,
  });
}
var m8;
class D1 extends Promise {
  constructor($, X, J = gJ) {
    super((Y) => {
      Y(null);
    });
    ((this.responsePromise = X),
      (this.parseResponse = J),
      m8.set(this, void 0),
      C(this, m8, $, "f"));
  }
  _thenUnwrap($) {
    return new D1(D(this, m8, "f"), this.responsePromise, async (X, J) =>
      GW($(await this.parseResponse(X, J), J), J.response),
    );
  }
  asResponse() {
    return this.responsePromise.then(($) => $.response);
  }
  async withResponse() {
    let [$, X] = await Promise.all([this.parse(), this.asResponse()]);
    return { data: $, response: X, request_id: X.headers.get("request-id") };
  }
  parse() {
    if (!this.parsedPromise)
      this.parsedPromise = this.responsePromise.then(($) =>
        this.parseResponse(D(this, m8, "f"), $),
      );
    return this.parsedPromise;
  }
  then($, X) {
    return this.parse().then($, X);
  }
  catch($) {
    return this.parse().catch($);
  }
  finally($) {
    return this.parse().finally($);
  }
}
m8 = new WeakMap();
var hJ;
class UW {
  constructor($, X, J, Y) {
    (hJ.set(this, void 0),
      C(this, hJ, $, "f"),
      (this.options = Y),
      (this.response = X),
      (this.body = J));
  }
  hasNextPage() {
    if (!this.getPaginatedItems().length) return !1;
    return this.nextPageRequestOptions() != null;
  }
  async getNextPage() {
    let $ = this.nextPageRequestOptions();
    if (!$)
      throw new f(
        "No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.",
      );
    return await D(this, hJ, "f").requestAPIList(this.constructor, $);
  }
  async *iterPages() {
    let $ = this;
    yield $;
    while ($.hasNextPage()) (($ = await $.getNextPage()), yield $);
  }
  async *[((hJ = new WeakMap()), Symbol.asyncIterator)]() {
    for await (let $ of this.iterPages())
      for (let X of $.getPaginatedItems()) yield X;
  }
}
class uJ extends D1 {
  constructor($, X, J) {
    super(
      $,
      X,
      async (Y, Q) => new J(Y, Q.response, await gJ(Y, Q), Q.options),
    );
  }
  async *[Symbol.asyncIterator]() {
    let $ = await this;
    for await (let X of $) yield X;
  }
}
class f6 extends UW {
  constructor($, X, J, Y) {
    super($, X, J, Y);
    ((this.data = J.data || []),
      (this.has_more = J.has_more || !1),
      (this.first_id = J.first_id || null),
      (this.last_id = J.last_id || null));
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  hasNextPage() {
    if (this.has_more === !1) return !1;
    return super.hasNextPage();
  }
  nextPageRequestOptions() {
    if (this.options.query?.before_id) {
      let X = this.first_id;
      if (!X) return null;
      return {
        ...this.options,
        query: { ..._J(this.options.query), before_id: X },
      };
    }
    let $ = this.last_id;
    if (!$) return null;
    return {
      ...this.options,
      query: { ..._J(this.options.query), after_id: $ },
    };
  }
}
class l8 extends UW {
  constructor($, X, J, Y) {
    super($, X, J, Y);
    ((this.data = J.data || []),
      (this.has_more = J.has_more || !1),
      (this.next_page = J.next_page || null));
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  hasNextPage() {
    if (this.has_more === !1) return !1;
    return super.hasNextPage();
  }
  nextPageRequestOptions() {
    let $ = this.next_page;
    if (!$) return null;
    return { ...this.options, query: { ..._J(this.options.query), page: $ } };
  }
}
var KW = () => {
  if (typeof File > "u") {
    let { process: $ } = globalThis,
      X =
        typeof $?.versions?.node === "string" &&
        parseInt($.versions.node.split(".")) < 20;
    throw Error(
      "`File` is not defined as a global, which is required for file uploads." +
        (X
          ? " Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`."
          : ""),
    );
  }
};
function F1($, X, J) {
  return (KW(), new File($, X ?? "unknown_file", J));
}
function c8($, X) {
  let J =
    (typeof $ === "object" &&
      $ !== null &&
      (("name" in $ && $.name && String($.name)) ||
        ("url" in $ && $.url && String($.url)) ||
        ("filename" in $ && $.filename && String($.filename)) ||
        ("path" in $ && $.path && String($.path)))) ||
    "";
  return X ? J.split(/[\\/]/).pop() || void 0 : J;
}
var NW = ($) =>
  $ != null &&
  typeof $ === "object" &&
  typeof $[Symbol.asyncIterator] === "function";
var H0 = async ($, X, J = !0) => {
    return { ...$, body: await oZ($.body, X, J) };
  },
  mN = new WeakMap();
function rZ($) {
  let X = typeof $ === "function" ? $ : $.fetch,
    J = mN.get(X);
  if (J) return J;
  let Y = (async () => {
    try {
      let Q = "Response" in X ? X.Response : (await X("data:,")).constructor,
        W = new FormData();
      if (W.toString() === (await new Q(W).text())) return !1;
      return !0;
    } catch {
      return !0;
    }
  })();
  return (mN.set(X, Y), Y);
}
var oZ = async ($, X, J = !0) => {
    if (!(await rZ(X)))
      throw TypeError(
        "The provided fetch function does not support file uploads with the current global FormData class.",
      );
    let Y = new FormData();
    return (
      await Promise.all(
        Object.entries($ || {}).map(([Q, W]) => HW(Y, Q, W, J)),
      ),
      Y
    );
  },
  tZ = ($) => $ instanceof Blob && "name" in $;
var HW = async ($, X, J, Y) => {
  if (J === void 0) return;
  if (J == null)
    throw TypeError(
      `Received null for "${X}"; to pass null in FormData, you must use the string 'null'`,
    );
  if (typeof J === "string" || typeof J === "number" || typeof J === "boolean")
    $.append(X, String(J));
  else if (J instanceof Response) {
    let Q = {},
      W = J.headers.get("Content-Type");
    if (W) Q = { type: W };
    $.append(X, F1([await J.blob()], c8(J, Y), Q));
  } else if (NW(J))
    $.append(X, F1([await new Response(TJ(J)).blob()], c8(J, Y)));
  else if (tZ(J)) $.append(X, F1([J], c8(J, Y), { type: J.type }));
  else if (Array.isArray(J))
    await Promise.all(J.map((Q) => HW($, X + "[]", Q, Y)));
  else if (typeof J === "object")
    await Promise.all(
      Object.entries(J).map(([Q, W]) => HW($, `${X}[${Q}]`, W, Y)),
    );
  else
    throw TypeError(
      `Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${J} instead`,
    );
};
var lN = ($) =>
    $ != null &&
    typeof $ === "object" &&
    typeof $.size === "number" &&
    typeof $.type === "string" &&
    typeof $.text === "function" &&
    typeof $.slice === "function" &&
    typeof $.arrayBuffer === "function",
  aZ = ($) =>
    $ != null &&
    typeof $ === "object" &&
    typeof $.name === "string" &&
    typeof $.lastModified === "number" &&
    lN($),
  sZ = ($) =>
    $ != null &&
    typeof $ === "object" &&
    typeof $.url === "string" &&
    typeof $.blob === "function";
async function mJ($, X, J) {
  if ((KW(), ($ = await $), X || (X = c8($, !0)), aZ($))) {
    if ($ instanceof File && X == null && J == null) return $;
    return F1([await $.arrayBuffer()], X ?? $.name, {
      type: $.type,
      lastModified: $.lastModified,
      ...J,
    });
  }
  if (sZ($)) {
    let Q = await $.blob();
    return (
      X || (X = new URL($.url).pathname.split(/[\\/]/).pop()),
      F1(await VW(Q), X, J)
    );
  }
  let Y = await VW($);
  if (!J?.type) {
    let Q = Y.find((W) => typeof W === "object" && "type" in W && W.type);
    if (typeof Q === "string") J = { ...J, type: Q };
  }
  return F1(Y, X, J);
}
async function VW($) {
  let X = [];
  if (
    typeof $ === "string" ||
    ArrayBuffer.isView($) ||
    $ instanceof ArrayBuffer
  )
    X.push($);
  else if (lN($)) X.push($ instanceof Blob ? $ : await $.arrayBuffer());
  else if (NW($)) for await (let J of $) X.push(...(await VW(J)));
  else {
    let J = $?.constructor?.name;
    throw Error(
      `Unexpected data type: ${typeof $}${J ? `; constructor: ${J}` : ""}${eZ($)}`,
    );
  }
  return X;
}
function eZ($) {
  if (typeof $ !== "object" || $ === null) return "";
  return `; props: [${Object.getOwnPropertyNames($)
    .map((J) => `"${J}"`)
    .join(", ")}]`;
}
class b$ {
  constructor($) {
    this._client = $;
  }
}
var cN = Symbol.for("brand.privateNullableHeaders");
function* Xb($) {
  if (!$) return;
  if (cN in $) {
    let { values: Y, nulls: Q } = $;
    yield* Y.entries();
    for (let W of Q) yield [W, null];
    return;
  }
  let X = !1,
    J;
  if ($ instanceof Headers) J = $.entries();
  else if (JW($)) J = $;
  else ((X = !0), (J = Object.entries($ ?? {})));
  for (let Y of J) {
    let Q = Y[0];
    if (typeof Q !== "string")
      throw TypeError("expected header name to be a string");
    let W = JW(Y[1]) ? Y[1] : [Y[1]],
      z = !1;
    for (let G of W) {
      if (G === void 0) continue;
      if (X && !z) ((z = !0), yield [Q, null]);
      yield [Q, G];
    }
  }
}
var i = ($) => {
  let X = new Headers(),
    J = new Set();
  for (let Y of $) {
    let Q = new Set();
    for (let [W, z] of Xb(Y)) {
      let G = W.toLowerCase();
      if (!Q.has(G)) (X.delete(W), Q.add(G));
      if (z === null) (X.delete(W), J.add(G));
      else (X.append(W, z), J.delete(G));
    }
  }
  return { [cN]: !0, values: X, nulls: J };
};
var d8 = Symbol("anthropic.sdk.stainlessHelper");
function lJ($) {
  return typeof $ === "object" && $ !== null && d8 in $;
}
function OW($, X) {
  let J = new Set();
  if ($) {
    for (let Y of $) if (lJ(Y)) J.add(Y[d8]);
  }
  if (X)
    for (let Y of X) {
      if (lJ(Y)) J.add(Y[d8]);
      if (Array.isArray(Y.content)) {
        for (let Q of Y.content) if (lJ(Q)) J.add(Q[d8]);
      }
    }
  return Array.from(J);
}
function cJ($, X) {
  let J = OW($, X);
  if (J.length === 0) return {};
  return { "x-stainless-helper": J.join(", ") };
}
function dN($) {
  if (lJ($)) return { "x-stainless-helper": $[d8] };
  return {};
}
function iN($) {
  return $.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
var pN = Object.freeze(Object.create(null)),
  Jb = ($ = iN) =>
    function (J, ...Y) {
      if (J.length === 1) return J[0];
      let Q = !1,
        W = [],
        z = J.reduce((K, N, V) => {
          if (/[?#]/.test(N)) Q = !0;
          let O = Y[V],
            w = (Q ? encodeURIComponent : $)("" + O);
          if (
            V !== Y.length &&
            (O == null ||
              (typeof O === "object" &&
                O.toString ===
                  Object.getPrototypeOf(
                    Object.getPrototypeOf(O.hasOwnProperty ?? pN) ?? pN,
                  )?.toString))
          )
            ((w = O + ""),
              W.push({
                start: K.length + N.length,
                length: w.length,
                error: `Value of type ${Object.prototype.toString.call(O).slice(8, -1)} is not a valid path parameter`,
              }));
          return K + N + (V === Y.length ? "" : w);
        }, ""),
        G = z.split(/[?#]/, 1)[0],
        U = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,
        H;
      while ((H = U.exec(G)) !== null)
        W.push({
          start: H.index,
          length: H[0].length,
          error: `Value "${H[0]}" can't be safely passed as a path parameter`,
        });
      if ((W.sort((K, N) => K.start - N.start), W.length > 0)) {
        let K = 0,
          N = W.reduce((V, O) => {
            let w = " ".repeat(O.start - K),
              B = "^".repeat(O.length);
            return ((K = O.start + O.length), V + w + B);
          }, "");
        throw new f(`Path parameters result in path with invalid segments:
${W.map((V) => V.error).join(`
`)}
${z}
${N}`);
      }
      return z;
    },
  A$ = Jb(iN);
class p8 extends b$ {
  list($ = {}, X) {
    let { betas: J, ...Y } = $ ?? {};
    return this._client.getAPIList("/v1/files", f6, {
      query: Y,
      ...X,
      headers: i([
        { "anthropic-beta": [...(J ?? []), "files-api-2025-04-14"].toString() },
        X?.headers,
      ]),
    });
  }
  delete($, X = {}, J) {
    let { betas: Y } = X ?? {};
    return this._client.delete(A$`/v1/files/${$}`, {
      ...J,
      headers: i([
        { "anthropic-beta": [...(Y ?? []), "files-api-2025-04-14"].toString() },
        J?.headers,
      ]),
    });
  }
  download($, X = {}, J) {
    let { betas: Y } = X ?? {};
    return this._client.get(A$`/v1/files/${$}/content`, {
      ...J,
      headers: i([
        {
          "anthropic-beta": [...(Y ?? []), "files-api-2025-04-14"].toString(),
          Accept: "application/binary",
        },
        J?.headers,
      ]),
      __binaryResponse: !0,
    });
  }
  retrieveMetadata($, X = {}, J) {
    let { betas: Y } = X ?? {};
    return this._client.get(A$`/v1/files/${$}`, {
      ...J,
      headers: i([
        { "anthropic-beta": [...(Y ?? []), "files-api-2025-04-14"].toString() },
        J?.headers,
      ]),
    });
  }
  upload($, X) {
    let { betas: J, ...Y } = $;
    return this._client.post(
      "/v1/files",
      H0(
        {
          body: Y,
          ...X,
          headers: i([
            {
              "anthropic-beta": [
                ...(J ?? []),
                "files-api-2025-04-14",
              ].toString(),
            },
            dN(Y.file),
            X?.headers,
          ]),
        },
        this._client,
      ),
    );
  }
}
class i8 extends b$ {
  retrieve($, X = {}, J) {
    let { betas: Y } = X ?? {};
    return this._client.get(A$`/v1/models/${$}?beta=true`, {
      ...J,
      headers: i([
        {
          ...(Y?.toString() != null
            ? { "anthropic-beta": Y?.toString() }
            : void 0),
        },
        J?.headers,
      ]),
    });
  }
  list($ = {}, X) {
    let { betas: J, ...Y } = $ ?? {};
    return this._client.getAPIList("/v1/models?beta=true", f6, {
      query: Y,
      ...X,
      headers: i([
        {
          ...(J?.toString() != null
            ? { "anthropic-beta": J?.toString() }
            : void 0),
        },
        X?.headers,
      ]),
    });
  }
}
var dJ = {
  "claude-opus-4-20250514": 8192,
  "claude-opus-4-0": 8192,
  "claude-4-opus-20250514": 8192,
  "anthropic.claude-opus-4-20250514-v1:0": 8192,
  "claude-opus-4@20250514": 8192,
  "claude-opus-4-1-20250805": 8192,
  "anthropic.claude-opus-4-1-20250805-v1:0": 8192,
  "claude-opus-4-1@20250805": 8192,
};
function nN($) {
  return $?.output_format ?? $?.output_config?.format;
}
function wW($, X, J) {
  let Y = nN(X);
  if (!X || !("parse" in (Y ?? {})))
    return {
      ...$,
      content: $.content.map((Q) => {
        if (Q.type === "text") {
          let W = Object.defineProperty({ ...Q }, "parsed_output", {
            value: null,
            enumerable: !1,
          });
          return Object.defineProperty(W, "parsed", {
            get() {
              return (
                J.logger.warn(
                  "The `parsed` property on `text` blocks is deprecated, please use `parsed_output` instead.",
                ),
                null
              );
            },
            enumerable: !1,
          });
        }
        return Q;
      }),
      parsed_output: null,
    };
  return BW($, X, J);
}
function BW($, X, J) {
  let Y = null,
    Q = $.content.map((W) => {
      if (W.type === "text") {
        let z = Wb(X, W.text);
        if (Y === null) Y = z;
        let G = Object.defineProperty({ ...W }, "parsed_output", {
          value: z,
          enumerable: !1,
        });
        return Object.defineProperty(G, "parsed", {
          get() {
            return (
              J.logger.warn(
                "The `parsed` property on `text` blocks is deprecated, please use `parsed_output` instead.",
              ),
              z
            );
          },
          enumerable: !1,
        });
      }
      return W;
    });
  return { ...$, content: Q, parsed_output: Y };
}
function Wb($, X) {
  let J = nN($);
  if (J?.type !== "json_schema") return null;
  try {
    if ("parse" in J) return J.parse(X);
    return JSON.parse(X);
  } catch (Y) {
    throw new f(`Failed to parse structured output: ${Y}`);
  }
}
var zb = ($) => {
    let X = 0,
      J = [];
    while (X < $.length) {
      let Y = $[X];
      if (Y === "\\") {
        X++;
        continue;
      }
      if (Y === "{") {
        (J.push({ type: "brace", value: "{" }), X++);
        continue;
      }
      if (Y === "}") {
        (J.push({ type: "brace", value: "}" }), X++);
        continue;
      }
      if (Y === "[") {
        (J.push({ type: "paren", value: "[" }), X++);
        continue;
      }
      if (Y === "]") {
        (J.push({ type: "paren", value: "]" }), X++);
        continue;
      }
      if (Y === ":") {
        (J.push({ type: "separator", value: ":" }), X++);
        continue;
      }
      if (Y === ",") {
        (J.push({ type: "delimiter", value: "," }), X++);
        continue;
      }
      if (Y === '"') {
        let G = "",
          U = !1;
        Y = $[++X];
        while (Y !== '"') {
          if (X === $.length) {
            U = !0;
            break;
          }
          if (Y === "\\") {
            if ((X++, X === $.length)) {
              U = !0;
              break;
            }
            ((G += Y + $[X]), (Y = $[++X]));
          } else ((G += Y), (Y = $[++X]));
        }
        if (((Y = $[++X]), !U)) J.push({ type: "string", value: G });
        continue;
      }
      if (Y && /\s/.test(Y)) {
        X++;
        continue;
      }
      let W = /[0-9]/;
      if ((Y && W.test(Y)) || Y === "-" || Y === ".") {
        let G = "";
        if (Y === "-") ((G += Y), (Y = $[++X]));
        while ((Y && W.test(Y)) || Y === ".") ((G += Y), (Y = $[++X]));
        J.push({ type: "number", value: G });
        continue;
      }
      let z = /[a-z]/i;
      if (Y && z.test(Y)) {
        let G = "";
        while (Y && z.test(Y)) {
          if (X === $.length) break;
          ((G += Y), (Y = $[++X]));
        }
        if (G == "true" || G == "false" || G === "null")
          J.push({ type: "name", value: G });
        else {
          X++;
          continue;
        }
        continue;
      }
      X++;
    }
    return J;
  },
  K0 = ($) => {
    if ($.length === 0) return $;
    let X = $[$.length - 1];
    switch (X.type) {
      case "separator":
        return (($ = $.slice(0, $.length - 1)), K0($));
        break;
      case "number":
        let J = X.value[X.value.length - 1];
        if (J === "." || J === "-")
          return (($ = $.slice(0, $.length - 1)), K0($));
      case "string":
        let Y = $[$.length - 2];
        if (Y?.type === "delimiter")
          return (($ = $.slice(0, $.length - 1)), K0($));
        else if (Y?.type === "brace" && Y.value === "{")
          return (($ = $.slice(0, $.length - 1)), K0($));
        break;
      case "delimiter":
        return (($ = $.slice(0, $.length - 1)), K0($));
        break;
    }
    return $;
  },
  Gb = ($) => {
    let X = [];
    if (
      ($.map((J) => {
        if (J.type === "brace")
          if (J.value === "{") X.push("}");
          else X.splice(X.lastIndexOf("}"), 1);
        if (J.type === "paren")
          if (J.value === "[") X.push("]");
          else X.splice(X.lastIndexOf("]"), 1);
      }),
      X.length > 0)
    )
      X.reverse().map((J) => {
        if (J === "}") $.push({ type: "brace", value: "}" });
        else if (J === "]") $.push({ type: "paren", value: "]" });
      });
    return $;
  },
  Ub = ($) => {
    let X = "";
    return (
      $.map((J) => {
        switch (J.type) {
          case "string":
            X += '"' + J.value + '"';
            break;
          default:
            X += J.value;
            break;
        }
      }),
      X
    );
  },
  pJ = ($) => JSON.parse(Ub(Gb(K0(zb($)))));
var I6,
  u4,
  N0,
  n8,
  iJ,
  r8,
  o8,
  nJ,
  t8,
  V4,
  a8,
  rJ,
  oJ,
  j1,
  tJ,
  aJ,
  s8,
  qW,
  rN,
  sJ,
  DW,
  FW,
  jW,
  oN,
  tN = "__json_buf";
function aN($) {
  return (
    $.type === "tool_use" ||
    $.type === "server_tool_use" ||
    $.type === "mcp_tool_use"
  );
}
class e8 {
  constructor($, X) {
    (I6.add(this),
      (this.messages = []),
      (this.receivedMessages = []),
      u4.set(this, void 0),
      N0.set(this, null),
      (this.controller = new AbortController()),
      n8.set(this, void 0),
      iJ.set(this, () => {}),
      r8.set(this, () => {}),
      o8.set(this, void 0),
      nJ.set(this, () => {}),
      t8.set(this, () => {}),
      V4.set(this, {}),
      a8.set(this, !1),
      rJ.set(this, !1),
      oJ.set(this, !1),
      j1.set(this, !1),
      tJ.set(this, void 0),
      aJ.set(this, void 0),
      s8.set(this, void 0),
      sJ.set(this, (J) => {
        if ((C(this, rJ, !0, "f"), K4(J))) J = new u$();
        if (J instanceof u$)
          return (C(this, oJ, !0, "f"), this._emit("abort", J));
        if (J instanceof f) return this._emit("error", J);
        if (J instanceof Error) {
          let Y = new f(J.message);
          return ((Y.cause = J), this._emit("error", Y));
        }
        return this._emit("error", new f(String(J)));
      }),
      C(
        this,
        n8,
        new Promise((J, Y) => {
          (C(this, iJ, J, "f"), C(this, r8, Y, "f"));
        }),
        "f",
      ),
      C(
        this,
        o8,
        new Promise((J, Y) => {
          (C(this, nJ, J, "f"), C(this, t8, Y, "f"));
        }),
        "f",
      ),
      D(this, n8, "f").catch(() => {}),
      D(this, o8, "f").catch(() => {}),
      C(this, N0, $, "f"),
      C(this, s8, X?.logger ?? console, "f"));
  }
  get response() {
    return D(this, tJ, "f");
  }
  get request_id() {
    return D(this, aJ, "f");
  }
  async withResponse() {
    C(this, j1, !0, "f");
    let $ = await D(this, n8, "f");
    if (!$) throw Error("Could not resolve a `Response` object");
    return { data: this, response: $, request_id: $.headers.get("request-id") };
  }
  static fromReadableStream($) {
    let X = new e8(null);
    return (X._run(() => X._fromReadableStream($)), X);
  }
  static createMessage($, X, J, { logger: Y } = {}) {
    let Q = new e8(X, { logger: Y });
    for (let W of X.messages) Q._addMessageParam(W);
    return (
      C(Q, N0, { ...X, stream: !0 }, "f"),
      Q._run(() =>
        Q._createMessage(
          $,
          { ...X, stream: !0 },
          {
            ...J,
            headers: { ...J?.headers, "X-Stainless-Helper-Method": "stream" },
          },
        ),
      ),
      Q
    );
  }
  _run($) {
    $().then(
      () => {
        (this._emitFinal(), this._emit("end"));
      },
      D(this, sJ, "f"),
    );
  }
  _addMessageParam($) {
    this.messages.push($);
  }
  _addMessage($, X = !0) {
    if ((this.receivedMessages.push($), X)) this._emit("message", $);
  }
  async _createMessage($, X, J) {
    let Y = J?.signal,
      Q;
    if (Y) {
      if (Y.aborted) this.controller.abort();
      ((Q = this.controller.abort.bind(this.controller)),
        Y.addEventListener("abort", Q));
    }
    try {
      D(this, I6, "m", DW).call(this);
      let { response: W, data: z } = await $.create(
        { ...X, stream: !0 },
        { ...J, signal: this.controller.signal },
      ).withResponse();
      this._connected(W);
      for await (let G of z) D(this, I6, "m", FW).call(this, G);
      if (z.controller.signal?.aborted) throw new u$();
      D(this, I6, "m", jW).call(this);
    } finally {
      if (Y && Q) Y.removeEventListener("abort", Q);
    }
  }
  _connected($) {
    if (this.ended) return;
    (C(this, tJ, $, "f"),
      C(this, aJ, $?.headers.get("request-id"), "f"),
      D(this, iJ, "f").call(this, $),
      this._emit("connect"));
  }
  get ended() {
    return D(this, a8, "f");
  }
  get errored() {
    return D(this, rJ, "f");
  }
  get aborted() {
    return D(this, oJ, "f");
  }
  abort() {
    this.controller.abort();
  }
  on($, X) {
    return (
      (D(this, V4, "f")[$] || (D(this, V4, "f")[$] = [])).push({ listener: X }),
      this
    );
  }
  off($, X) {
    let J = D(this, V4, "f")[$];
    if (!J) return this;
    let Y = J.findIndex((Q) => Q.listener === X);
    if (Y >= 0) J.splice(Y, 1);
    return this;
  }
  once($, X) {
    return (
      (D(this, V4, "f")[$] || (D(this, V4, "f")[$] = [])).push({
        listener: X,
        once: !0,
      }),
      this
    );
  }
  emitted($) {
    return new Promise((X, J) => {
      if ((C(this, j1, !0, "f"), $ !== "error")) this.once("error", J);
      this.once($, X);
    });
  }
  async done() {
    (C(this, j1, !0, "f"), await D(this, o8, "f"));
  }
  get currentMessage() {
    return D(this, u4, "f");
  }
  async finalMessage() {
    return (await this.done(), D(this, I6, "m", qW).call(this));
  }
  async finalText() {
    return (await this.done(), D(this, I6, "m", rN).call(this));
  }
  _emit($, ...X) {
    if (D(this, a8, "f")) return;
    if ($ === "end") (C(this, a8, !0, "f"), D(this, nJ, "f").call(this));
    let J = D(this, V4, "f")[$];
    if (J)
      ((D(this, V4, "f")[$] = J.filter((Y) => !Y.once)),
        J.forEach(({ listener: Y }) => Y(...X)));
    if ($ === "abort") {
      let Y = X[0];
      if (!D(this, j1, "f") && !J?.length) Promise.reject(Y);
      (D(this, r8, "f").call(this, Y),
        D(this, t8, "f").call(this, Y),
        this._emit("end"));
      return;
    }
    if ($ === "error") {
      let Y = X[0];
      if (!D(this, j1, "f") && !J?.length) Promise.reject(Y);
      (D(this, r8, "f").call(this, Y),
        D(this, t8, "f").call(this, Y),
        this._emit("end"));
    }
  }
  _emitFinal() {
    if (this.receivedMessages.at(-1))
      this._emit("finalMessage", D(this, I6, "m", qW).call(this));
  }
  async _fromReadableStream($, X) {
    let J = X?.signal,
      Y;
    if (J) {
      if (J.aborted) this.controller.abort();
      ((Y = this.controller.abort.bind(this.controller)),
        J.addEventListener("abort", Y));
    }
    try {
      (D(this, I6, "m", DW).call(this), this._connected(null));
      let Q = D6.fromReadableStream($, this.controller);
      for await (let W of Q) D(this, I6, "m", FW).call(this, W);
      if (Q.controller.signal?.aborted) throw new u$();
      D(this, I6, "m", jW).call(this);
    } finally {
      if (J && Y) J.removeEventListener("abort", Y);
    }
  }
  [((u4 = new WeakMap()),
  (N0 = new WeakMap()),
  (n8 = new WeakMap()),
  (iJ = new WeakMap()),
  (r8 = new WeakMap()),
  (o8 = new WeakMap()),
  (nJ = new WeakMap()),
  (t8 = new WeakMap()),
  (V4 = new WeakMap()),
  (a8 = new WeakMap()),
  (rJ = new WeakMap()),
  (oJ = new WeakMap()),
  (j1 = new WeakMap()),
  (tJ = new WeakMap()),
  (aJ = new WeakMap()),
  (s8 = new WeakMap()),
  (sJ = new WeakMap()),
  (I6 = new WeakSet()),
  (qW = function () {
    if (this.receivedMessages.length === 0)
      throw new f(
        "stream ended without producing a Message with role=assistant",
      );
    return this.receivedMessages.at(-1);
  }),
  (rN = function () {
    if (this.receivedMessages.length === 0)
      throw new f(
        "stream ended without producing a Message with role=assistant",
      );
    let X = this.receivedMessages
      .at(-1)
      .content.filter((J) => J.type === "text")
      .map((J) => J.text);
    if (X.length === 0)
      throw new f(
        "stream ended without producing a content block with type=text",
      );
    return X.join(" ");
  }),
  (DW = function () {
    if (this.ended) return;
    C(this, u4, void 0, "f");
  }),
  (FW = function (X) {
    if (this.ended) return;
    let J = D(this, I6, "m", oN).call(this, X);
    switch ((this._emit("streamEvent", X, J), X.type)) {
      case "content_block_delta": {
        let Y = J.content.at(-1);
        switch (X.delta.type) {
          case "text_delta": {
            if (Y.type === "text")
              this._emit("text", X.delta.text, Y.text || "");
            break;
          }
          case "citations_delta": {
            if (Y.type === "text")
              this._emit("citation", X.delta.citation, Y.citations ?? []);
            break;
          }
          case "input_json_delta": {
            if (aN(Y) && Y.input)
              this._emit("inputJson", X.delta.partial_json, Y.input);
            break;
          }
          case "thinking_delta": {
            if (Y.type === "thinking")
              this._emit("thinking", X.delta.thinking, Y.thinking);
            break;
          }
          case "signature_delta": {
            if (Y.type === "thinking") this._emit("signature", Y.signature);
            break;
          }
          case "compaction_delta": {
            if (Y.type === "compaction" && Y.content)
              this._emit("compaction", Y.content);
            break;
          }
          default:
            sN(X.delta);
        }
        break;
      }
      case "message_stop": {
        (this._addMessageParam(J),
          this._addMessage(
            wW(J, D(this, N0, "f"), { logger: D(this, s8, "f") }),
            !0,
          ));
        break;
      }
      case "content_block_stop": {
        this._emit("contentBlock", J.content.at(-1));
        break;
      }
      case "message_start": {
        C(this, u4, J, "f");
        break;
      }
      case "content_block_start":
      case "message_delta":
        break;
    }
  }),
  (jW = function () {
    if (this.ended) throw new f("stream has ended, this shouldn't happen");
    let X = D(this, u4, "f");
    if (!X) throw new f("request ended without sending any chunks");
    return (
      C(this, u4, void 0, "f"),
      wW(X, D(this, N0, "f"), { logger: D(this, s8, "f") })
    );
  }),
  (oN = function (X) {
    let J = D(this, u4, "f");
    if (X.type === "message_start") {
      if (J)
        throw new f(
          `Unexpected event order, got ${X.type} before receiving "message_stop"`,
        );
      return X.message;
    }
    if (!J)
      throw new f(
        `Unexpected event order, got ${X.type} before "message_start"`,
      );
    switch (X.type) {
      case "message_stop":
        return J;
      case "message_delta":
        if (
          ((J.container = X.delta.container),
          (J.stop_reason = X.delta.stop_reason),
          (J.stop_sequence = X.delta.stop_sequence),
          (J.usage.output_tokens = X.usage.output_tokens),
          (J.context_management = X.context_management),
          X.usage.input_tokens != null)
        )
          J.usage.input_tokens = X.usage.input_tokens;
        if (X.usage.cache_creation_input_tokens != null)
          J.usage.cache_creation_input_tokens =
            X.usage.cache_creation_input_tokens;
        if (X.usage.cache_read_input_tokens != null)
          J.usage.cache_read_input_tokens = X.usage.cache_read_input_tokens;
        if (X.usage.server_tool_use != null)
          J.usage.server_tool_use = X.usage.server_tool_use;
        if (X.usage.iterations != null) J.usage.iterations = X.usage.iterations;
        return J;
      case "content_block_start":
        return (J.content.push(X.content_block), J);
      case "content_block_delta": {
        let Y = J.content.at(X.index);
        switch (X.delta.type) {
          case "text_delta": {
            if (Y?.type === "text")
              J.content[X.index] = {
                ...Y,
                text: (Y.text || "") + X.delta.text,
              };
            break;
          }
          case "citations_delta": {
            if (Y?.type === "text")
              J.content[X.index] = {
                ...Y,
                citations: [...(Y.citations ?? []), X.delta.citation],
              };
            break;
          }
          case "input_json_delta": {
            if (Y && aN(Y)) {
              let Q = Y[tN] || "";
              Q += X.delta.partial_json;
              let W = { ...Y };
              if (
                (Object.defineProperty(W, tN, {
                  value: Q,
                  enumerable: !1,
                  writable: !0,
                }),
                Q)
              )
                try {
                  W.input = pJ(Q);
                } catch (z) {
                  let G = new f(
                    `Unable to parse tool parameter JSON from model. Please retry your request or adjust your prompt. Error: ${z}. JSON: ${Q}`,
                  );
                  D(this, sJ, "f").call(this, G);
                }
              J.content[X.index] = W;
            }
            break;
          }
          case "thinking_delta": {
            if (Y?.type === "thinking")
              J.content[X.index] = {
                ...Y,
                thinking: Y.thinking + X.delta.thinking,
              };
            break;
          }
          case "signature_delta": {
            if (Y?.type === "thinking")
              J.content[X.index] = { ...Y, signature: X.delta.signature };
            break;
          }
          case "compaction_delta": {
            if (Y?.type === "compaction")
              J.content[X.index] = {
                ...Y,
                content: (Y.content || "") + X.delta.content,
              };
            break;
          }
          default:
            sN(X.delta);
        }
        return J;
      }
      case "content_block_stop":
        return J;
    }
  }),
  Symbol.asyncIterator)]() {
    let $ = [],
      X = [],
      J = !1;
    return (
      this.on("streamEvent", (Y) => {
        let Q = X.shift();
        if (Q) Q.resolve(Y);
        else $.push(Y);
      }),
      this.on("end", () => {
        J = !0;
        for (let Y of X) Y.resolve(void 0);
        X.length = 0;
      }),
      this.on("abort", (Y) => {
        J = !0;
        for (let Q of X) Q.reject(Y);
        X.length = 0;
      }),
      this.on("error", (Y) => {
        J = !0;
        for (let Q of X) Q.reject(Y);
        X.length = 0;
      }),
      {
        next: async () => {
          if (!$.length) {
            if (J) return { value: void 0, done: !0 };
            return new Promise((Q, W) =>
              X.push({ resolve: Q, reject: W }),
            ).then((Q) =>
              Q ? { value: Q, done: !1 } : { value: void 0, done: !0 },
            );
          }
          return { value: $.shift(), done: !1 };
        },
        return: async () => {
          return (this.abort(), { value: void 0, done: !0 });
        },
      }
    );
  }
  toReadableStream() {
    return new D6(
      this[Symbol.asyncIterator].bind(this),
      this.controller,
    ).toReadableStream();
  }
}
function sN($) {}
class V0 extends Error {
  constructor($) {
    let X =
      typeof $ === "string"
        ? $
        : $.map((J) => {
            if (J.type === "text") return J.text;
            return `[${J.type}]`;
          }).join(" ");
    super(X);
    ((this.name = "ToolError"), (this.content = $));
  }
}
var eN = 1e5,
  $V = `You have been working on the task described above but have not yet completed it. Write a continuation summary that will allow you (or another instance of yourself) to resume work efficiently in a future context window where the conversation history will be replaced with this summary. Your summary should be structured, concise, and actionable. Include:
1. Task Overview
The user's core request and success criteria
Any clarifications or constraints they specified
2. Current State
What has been completed so far
Files created, modified, or analyzed (with paths if relevant)
Key outputs or artifacts produced
3. Important Discoveries
Technical constraints or requirements uncovered
Decisions made and their rationale
Errors encountered and how they were resolved
What approaches were tried that didn't work (and why)
4. Next Steps
Specific actions needed to complete the task
Any blockers or open questions to resolve
Priority order if multiple steps remain
5. Context to Preserve
User preferences or style requirements
Domain-specific details that aren't obvious
Any promises made to the user
Be concise but complete—err on the side of including information that would prevent duplicate work or repeated mistakes. Write in a way that enables immediate resumption of the task.
Wrap your summary in <summary></summary> tags.`;
var $9, O0, L1, T$, X9, F6, O4, m4, J9, XV, LW;
function JV() {
  let $, X;
  return {
    promise: new Promise((Y, Q) => {
      (($ = Y), (X = Q));
    }),
    resolve: $,
    reject: X,
  };
}
class Q9 {
  constructor($, X, J) {
    ($9.add(this),
      (this.client = $),
      O0.set(this, !1),
      L1.set(this, !1),
      T$.set(this, void 0),
      X9.set(this, void 0),
      F6.set(this, void 0),
      O4.set(this, void 0),
      m4.set(this, void 0),
      J9.set(this, 0),
      C(
        this,
        T$,
        { params: { ...X, messages: structuredClone(X.messages) } },
        "f",
      ));
    let Q = ["BetaToolRunner", ...OW(X.tools, X.messages)].join(", ");
    (C(
      this,
      X9,
      { ...J, headers: i([{ "x-stainless-helper": Q }, J?.headers]) },
      "f",
    ),
      C(this, m4, JV(), "f"));
  }
  async *[((O0 = new WeakMap()),
  (L1 = new WeakMap()),
  (T$ = new WeakMap()),
  (X9 = new WeakMap()),
  (F6 = new WeakMap()),
  (O4 = new WeakMap()),
  (m4 = new WeakMap()),
  (J9 = new WeakMap()),
  ($9 = new WeakSet()),
  (XV = async function () {
    let X = D(this, T$, "f").params.compactionControl;
    if (!X || !X.enabled) return !1;
    let J = 0;
    if (D(this, F6, "f") !== void 0)
      try {
        let U = await D(this, F6, "f");
        J =
          U.usage.input_tokens +
          (U.usage.cache_creation_input_tokens ?? 0) +
          (U.usage.cache_read_input_tokens ?? 0) +
          U.usage.output_tokens;
      } catch {
        return !1;
      }
    let Y = X.contextTokenThreshold ?? eN;
    if (J < Y) return !1;
    let Q = X.model ?? D(this, T$, "f").params.model,
      W = X.summaryPrompt ?? $V,
      z = D(this, T$, "f").params.messages;
    if (z[z.length - 1].role === "assistant") {
      let U = z[z.length - 1];
      if (Array.isArray(U.content)) {
        let H = U.content.filter((K) => K.type !== "tool_use");
        if (H.length === 0) z.pop();
        else U.content = H;
      }
    }
    let G = await this.client.beta.messages.create(
      {
        model: Q,
        messages: [
          ...z,
          { role: "user", content: [{ type: "text", text: W }] },
        ],
        max_tokens: D(this, T$, "f").params.max_tokens,
      },
      { headers: { "x-stainless-helper": "compaction" } },
    );
    if (G.content[0]?.type !== "text")
      throw new f("Expected text response for compaction");
    return (
      (D(this, T$, "f").params.messages = [
        { role: "user", content: G.content },
      ]),
      !0
    );
  }),
  Symbol.asyncIterator)]() {
    var $;
    if (D(this, O0, "f")) throw new f("Cannot iterate over a consumed stream");
    (C(this, O0, !0, "f"), C(this, L1, !0, "f"), C(this, O4, void 0, "f"));
    try {
      while (!0) {
        let X;
        try {
          if (
            D(this, T$, "f").params.max_iterations &&
            D(this, J9, "f") >= D(this, T$, "f").params.max_iterations
          )
            break;
          (C(this, L1, !1, "f"),
            C(this, O4, void 0, "f"),
            C(this, J9, (($ = D(this, J9, "f")), $++, $), "f"),
            C(this, F6, void 0, "f"));
          let {
            max_iterations: J,
            compactionControl: Y,
            ...Q
          } = D(this, T$, "f").params;
          if (Q.stream)
            ((X = this.client.beta.messages.stream({ ...Q }, D(this, X9, "f"))),
              C(this, F6, X.finalMessage(), "f"),
              D(this, F6, "f").catch(() => {}),
              yield X);
          else
            (C(
              this,
              F6,
              this.client.beta.messages.create(
                { ...Q, stream: !1 },
                D(this, X9, "f"),
              ),
              "f",
            ),
              yield D(this, F6, "f"));
          if (!(await D(this, $9, "m", XV).call(this))) {
            if (!D(this, L1, "f")) {
              let { role: G, content: U } = await D(this, F6, "f");
              D(this, T$, "f").params.messages.push({ role: G, content: U });
            }
            let z = await D(this, $9, "m", LW).call(
              this,
              D(this, T$, "f").params.messages.at(-1),
            );
            if (z) D(this, T$, "f").params.messages.push(z);
            else if (!D(this, L1, "f")) break;
          }
        } finally {
          if (X) X.abort();
        }
      }
      if (!D(this, F6, "f"))
        throw new f("ToolRunner concluded without a message from the server");
      D(this, m4, "f").resolve(await D(this, F6, "f"));
    } catch (X) {
      throw (
        C(this, O0, !1, "f"),
        D(this, m4, "f").promise.catch(() => {}),
        D(this, m4, "f").reject(X),
        C(this, m4, JV(), "f"),
        X
      );
    }
  }
  setMessagesParams($) {
    if (typeof $ === "function")
      D(this, T$, "f").params = $(D(this, T$, "f").params);
    else D(this, T$, "f").params = $;
    (C(this, L1, !0, "f"), C(this, O4, void 0, "f"));
  }
  async generateToolResponse() {
    let $ = (await D(this, F6, "f")) ?? this.params.messages.at(-1);
    if (!$) return null;
    return D(this, $9, "m", LW).call(this, $);
  }
  done() {
    return D(this, m4, "f").promise;
  }
  async runUntilDone() {
    if (!D(this, O0, "f")) for await (let $ of this);
    return this.done();
  }
  get params() {
    return D(this, T$, "f").params;
  }
  pushMessages(...$) {
    this.setMessagesParams((X) => ({ ...X, messages: [...X.messages, ...$] }));
  }
  then($, X) {
    return this.runUntilDone().then($, X);
  }
}
LW = async function (X) {
  if (D(this, O4, "f") !== void 0) return D(this, O4, "f");
  return (C(this, O4, Hb(D(this, T$, "f").params, X), "f"), D(this, O4, "f"));
};
async function Hb($, X = $.messages.at(-1)) {
  if (
    !X ||
    X.role !== "assistant" ||
    !X.content ||
    typeof X.content === "string"
  )
    return null;
  let J = X.content.filter((Q) => Q.type === "tool_use");
  if (J.length === 0) return null;
  return {
    role: "user",
    content: await Promise.all(
      J.map(async (Q) => {
        let W = $.tools.find(
          (z) => ("name" in z ? z.name : z.mcp_server_name) === Q.name,
        );
        if (!W || !("run" in W))
          return {
            type: "tool_result",
            tool_use_id: Q.id,
            content: `Error: Tool '${Q.name}' not found`,
            is_error: !0,
          };
        try {
          let z = Q.input;
          if ("parse" in W && W.parse) z = W.parse(z);
          let G = await W.run(z);
          return { type: "tool_result", tool_use_id: Q.id, content: G };
        } catch (z) {
          return {
            type: "tool_result",
            tool_use_id: Q.id,
            content:
              z instanceof V0
                ? z.content
                : `Error: ${z instanceof Error ? z.message : String(z)}`,
            is_error: !0,
          };
        }
      }),
    ),
  };
}
class w0 {
  constructor($, X) {
    ((this.iterator = $), (this.controller = X));
  }
  async *decoder() {
    let $ = new h4();
    for await (let X of this.iterator)
      for (let J of $.decode(X)) yield JSON.parse(J);
    for (let X of $.flush()) yield JSON.parse(X);
  }
  [Symbol.asyncIterator]() {
    return this.decoder();
  }
  static fromResponse($, X) {
    if (!$.body) {
      if (
        (X.abort(),
        typeof globalThis.navigator < "u" &&
          globalThis.navigator.product === "ReactNative")
      )
        throw new f(
          "The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api",
        );
      throw new f("Attempted to iterate over a response with no body");
    }
    return new w0(y8($.body), X);
  }
}
class Y9 extends b$ {
  create($, X) {
    let { betas: J, ...Y } = $;
    return this._client.post("/v1/messages/batches?beta=true", {
      body: Y,
      ...X,
      headers: i([
        {
          "anthropic-beta": [
            ...(J ?? []),
            "message-batches-2024-09-24",
          ].toString(),
        },
        X?.headers,
      ]),
    });
  }
  retrieve($, X = {}, J) {
    let { betas: Y } = X ?? {};
    return this._client.get(A$`/v1/messages/batches/${$}?beta=true`, {
      ...J,
      headers: i([
        {
          "anthropic-beta": [
            ...(Y ?? []),
            "message-batches-2024-09-24",
          ].toString(),
        },
        J?.headers,
      ]),
    });
  }
  list($ = {}, X) {
    let { betas: J, ...Y } = $ ?? {};
    return this._client.getAPIList("/v1/messages/batches?beta=true", f6, {
      query: Y,
      ...X,
      headers: i([
        {
          "anthropic-beta": [
            ...(J ?? []),
            "message-batches-2024-09-24",
          ].toString(),
        },
        X?.headers,
      ]),
    });
  }
  delete($, X = {}, J) {
    let { betas: Y } = X ?? {};
    return this._client.delete(A$`/v1/messages/batches/${$}?beta=true`, {
      ...J,
      headers: i([
        {
          "anthropic-beta": [
            ...(Y ?? []),
            "message-batches-2024-09-24",
          ].toString(),
        },
        J?.headers,
      ]),
    });
  }
  cancel($, X = {}, J) {
    let { betas: Y } = X ?? {};
    return this._client.post(A$`/v1/messages/batches/${$}/cancel?beta=true`, {
      ...J,
      headers: i([
        {
          "anthropic-beta": [
            ...(Y ?? []),
            "message-batches-2024-09-24",
          ].toString(),
        },
        J?.headers,
      ]),
    });
  }
  async results($, X = {}, J) {
    let Y = await this.retrieve($);
    if (!Y.results_url)
      throw new f(
        `No batch \`results_url\`; Has it finished processing? ${Y.processing_status} - ${Y.id}`,
      );
    let { betas: Q } = X ?? {};
    return this._client
      .get(Y.results_url, {
        ...J,
        headers: i([
          {
            "anthropic-beta": [
              ...(Q ?? []),
              "message-batches-2024-09-24",
            ].toString(),
            Accept: "application/binary",
          },
          J?.headers,
        ]),
        stream: !0,
        __binaryResponse: !0,
      })
      ._thenUnwrap((W, z) => w0.fromResponse(z.response, z.controller));
  }
}
var QV = {
    "claude-1.3": "November 6th, 2024",
    "claude-1.3-100k": "November 6th, 2024",
    "claude-instant-1.1": "November 6th, 2024",
    "claude-instant-1.1-100k": "November 6th, 2024",
    "claude-instant-1.2": "November 6th, 2024",
    "claude-3-sonnet-20240229": "July 21st, 2025",
    "claude-3-opus-20240229": "January 5th, 2026",
    "claude-2.1": "July 21st, 2025",
    "claude-2.0": "July 21st, 2025",
    "claude-3-7-sonnet-latest": "February 19th, 2026",
    "claude-3-7-sonnet-20250219": "February 19th, 2026",
  },
  Nb = ["claude-opus-4-6"];
class l4 extends b$ {
  constructor() {
    super(...arguments);
    this.batches = new Y9(this._client);
  }
  create($, X) {
    let J = YV($),
      { betas: Y, ...Q } = J;
    if (Q.model in QV)
      console.warn(`The model '${Q.model}' is deprecated and will reach end-of-life on ${QV[Q.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
    if (Q.model in Nb && Q.thinking && Q.thinking.type === "enabled")
      console.warn(
        `Using Claude with ${Q.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`,
      );
    let W = this._client._options.timeout;
    if (!Q.stream && W == null) {
      let G = dJ[Q.model] ?? void 0;
      W = this._client.calculateNonstreamingTimeout(Q.max_tokens, G);
    }
    let z = cJ(Q.tools, Q.messages);
    return this._client.post("/v1/messages?beta=true", {
      body: Q,
      timeout: W ?? 600000,
      ...X,
      headers: i([
        {
          ...(Y?.toString() != null
            ? { "anthropic-beta": Y?.toString() }
            : void 0),
        },
        z,
        X?.headers,
      ]),
      stream: J.stream ?? !1,
    });
  }
  parse($, X) {
    return (
      (X = {
        ...X,
        headers: i([
          {
            "anthropic-beta": [
              ...($.betas ?? []),
              "structured-outputs-2025-12-15",
            ].toString(),
          },
          X?.headers,
        ]),
      }),
      this.create($, X).then((J) =>
        BW(J, $, { logger: this._client.logger ?? console }),
      )
    );
  }
  stream($, X) {
    return e8.createMessage(this, $, X);
  }
  countTokens($, X) {
    let J = YV($),
      { betas: Y, ...Q } = J;
    return this._client.post("/v1/messages/count_tokens?beta=true", {
      body: Q,
      ...X,
      headers: i([
        {
          "anthropic-beta": [
            ...(Y ?? []),
            "token-counting-2024-11-01",
          ].toString(),
        },
        X?.headers,
      ]),
    });
  }
  toolRunner($, X) {
    return new Q9(this._client, $, X);
  }
}
function YV($) {
  if (!$.output_format) return $;
  if ($.output_config?.format)
    throw new f(
      "Both output_format and output_config.format were provided. Please use only output_config.format (output_format is deprecated).",
    );
  let { output_format: X, ...J } = $;
  return { ...J, output_config: { ...$.output_config, format: X } };
}
l4.Batches = Y9;
l4.BetaToolRunner = Q9;
l4.ToolError = V0;
class W9 extends b$ {
  create($, X = {}, J) {
    let { betas: Y, ...Q } = X ?? {};
    return this._client.post(
      A$`/v1/skills/${$}/versions?beta=true`,
      H0(
        {
          body: Q,
          ...J,
          headers: i([
            {
              "anthropic-beta": [...(Y ?? []), "skills-2025-10-02"].toString(),
            },
            J?.headers,
          ]),
        },
        this._client,
      ),
    );
  }
  retrieve($, X, J) {
    let { skill_id: Y, betas: Q } = X;
    return this._client.get(A$`/v1/skills/${Y}/versions/${$}?beta=true`, {
      ...J,
      headers: i([
        { "anthropic-beta": [...(Q ?? []), "skills-2025-10-02"].toString() },
        J?.headers,
      ]),
    });
  }
  list($, X = {}, J) {
    let { betas: Y, ...Q } = X ?? {};
    return this._client.getAPIList(A$`/v1/skills/${$}/versions?beta=true`, l8, {
      query: Q,
      ...J,
      headers: i([
        { "anthropic-beta": [...(Y ?? []), "skills-2025-10-02"].toString() },
        J?.headers,
      ]),
    });
  }
  delete($, X, J) {
    let { skill_id: Y, betas: Q } = X;
    return this._client.delete(A$`/v1/skills/${Y}/versions/${$}?beta=true`, {
      ...J,
      headers: i([
        { "anthropic-beta": [...(Q ?? []), "skills-2025-10-02"].toString() },
        J?.headers,
      ]),
    });
  }
}
class B0 extends b$ {
  constructor() {
    super(...arguments);
    this.versions = new W9(this._client);
  }
  create($ = {}, X) {
    let { betas: J, ...Y } = $ ?? {};
    return this._client.post(
      "/v1/skills?beta=true",
      H0(
        {
          body: Y,
          ...X,
          headers: i([
            {
              "anthropic-beta": [...(J ?? []), "skills-2025-10-02"].toString(),
            },
            X?.headers,
          ]),
        },
        this._client,
        !1,
      ),
    );
  }
  retrieve($, X = {}, J) {
    let { betas: Y } = X ?? {};
    return this._client.get(A$`/v1/skills/${$}?beta=true`, {
      ...J,
      headers: i([
        { "anthropic-beta": [...(Y ?? []), "skills-2025-10-02"].toString() },
        J?.headers,
      ]),
    });
  }
  list($ = {}, X) {
    let { betas: J, ...Y } = $ ?? {};
    return this._client.getAPIList("/v1/skills?beta=true", l8, {
      query: Y,
      ...X,
      headers: i([
        { "anthropic-beta": [...(J ?? []), "skills-2025-10-02"].toString() },
        X?.headers,
      ]),
    });
  }
  delete($, X = {}, J) {
    let { betas: Y } = X ?? {};
    return this._client.delete(A$`/v1/skills/${$}?beta=true`, {
      ...J,
      headers: i([
        { "anthropic-beta": [...(Y ?? []), "skills-2025-10-02"].toString() },
        J?.headers,
      ]),
    });
  }
}
B0.Versions = W9;
class s6 extends b$ {
  constructor() {
    super(...arguments);
    ((this.models = new i8(this._client)),
      (this.messages = new l4(this._client)),
      (this.files = new p8(this._client)),
      (this.skills = new B0(this._client)));
  }
}
s6.Models = i8;
s6.Messages = l4;
s6.Files = p8;
s6.Skills = B0;
class q0 extends b$ {
  create($, X) {
    let { betas: J, ...Y } = $;
    return this._client.post("/v1/complete", {
      body: Y,
      timeout: this._client._options.timeout ?? 600000,
      ...X,
      headers: i([
        {
          ...(J?.toString() != null
            ? { "anthropic-beta": J?.toString() }
            : void 0),
        },
        X?.headers,
      ]),
      stream: $.stream ?? !1,
    });
  }
}
function WV($) {
  return $?.output_config?.format;
}
function MW($, X, J) {
  let Y = WV(X);
  if (!X || !("parse" in (Y ?? {})))
    return {
      ...$,
      content: $.content.map((Q) => {
        if (Q.type === "text")
          return Object.defineProperty({ ...Q }, "parsed_output", {
            value: null,
            enumerable: !1,
          });
        return Q;
      }),
      parsed_output: null,
    };
  return AW($, X, J);
}
function AW($, X, J) {
  let Y = null,
    Q = $.content.map((W) => {
      if (W.type === "text") {
        let z = Bb(X, W.text);
        if (Y === null) Y = z;
        return Object.defineProperty({ ...W }, "parsed_output", {
          value: z,
          enumerable: !1,
        });
      }
      return W;
    });
  return { ...$, content: Q, parsed_output: Y };
}
function Bb($, X) {
  let J = WV($);
  if (J?.type !== "json_schema") return null;
  try {
    if ("parse" in J) return J.parse(X);
    return JSON.parse(X);
  } catch (Y) {
    throw new f(`Failed to parse structured output: ${Y}`);
  }
}
var Z6,
  c4,
  D0,
  z9,
  eJ,
  G9,
  U9,
  $7,
  H9,
  w4,
  K9,
  X7,
  J7,
  M1,
  Q7,
  Y7,
  N9,
  IW,
  zV,
  ZW,
  bW,
  RW,
  PW,
  GV,
  UV = "__json_buf";
function HV($) {
  return $.type === "tool_use" || $.type === "server_tool_use";
}
class V9 {
  constructor($, X) {
    (Z6.add(this),
      (this.messages = []),
      (this.receivedMessages = []),
      c4.set(this, void 0),
      D0.set(this, null),
      (this.controller = new AbortController()),
      z9.set(this, void 0),
      eJ.set(this, () => {}),
      G9.set(this, () => {}),
      U9.set(this, void 0),
      $7.set(this, () => {}),
      H9.set(this, () => {}),
      w4.set(this, {}),
      K9.set(this, !1),
      X7.set(this, !1),
      J7.set(this, !1),
      M1.set(this, !1),
      Q7.set(this, void 0),
      Y7.set(this, void 0),
      N9.set(this, void 0),
      ZW.set(this, (J) => {
        if ((C(this, X7, !0, "f"), K4(J))) J = new u$();
        if (J instanceof u$)
          return (C(this, J7, !0, "f"), this._emit("abort", J));
        if (J instanceof f) return this._emit("error", J);
        if (J instanceof Error) {
          let Y = new f(J.message);
          return ((Y.cause = J), this._emit("error", Y));
        }
        return this._emit("error", new f(String(J)));
      }),
      C(
        this,
        z9,
        new Promise((J, Y) => {
          (C(this, eJ, J, "f"), C(this, G9, Y, "f"));
        }),
        "f",
      ),
      C(
        this,
        U9,
        new Promise((J, Y) => {
          (C(this, $7, J, "f"), C(this, H9, Y, "f"));
        }),
        "f",
      ),
      D(this, z9, "f").catch(() => {}),
      D(this, U9, "f").catch(() => {}),
      C(this, D0, $, "f"),
      C(this, N9, X?.logger ?? console, "f"));
  }
  get response() {
    return D(this, Q7, "f");
  }
  get request_id() {
    return D(this, Y7, "f");
  }
  async withResponse() {
    C(this, M1, !0, "f");
    let $ = await D(this, z9, "f");
    if (!$) throw Error("Could not resolve a `Response` object");
    return { data: this, response: $, request_id: $.headers.get("request-id") };
  }
  static fromReadableStream($) {
    let X = new V9(null);
    return (X._run(() => X._fromReadableStream($)), X);
  }
  static createMessage($, X, J, { logger: Y } = {}) {
    let Q = new V9(X, { logger: Y });
    for (let W of X.messages) Q._addMessageParam(W);
    return (
      C(Q, D0, { ...X, stream: !0 }, "f"),
      Q._run(() =>
        Q._createMessage(
          $,
          { ...X, stream: !0 },
          {
            ...J,
            headers: { ...J?.headers, "X-Stainless-Helper-Method": "stream" },
          },
        ),
      ),
      Q
    );
  }
  _run($) {
    $().then(
      () => {
        (this._emitFinal(), this._emit("end"));
      },
      D(this, ZW, "f"),
    );
  }
  _addMessageParam($) {
    this.messages.push($);
  }
  _addMessage($, X = !0) {
    if ((this.receivedMessages.push($), X)) this._emit("message", $);
  }
  async _createMessage($, X, J) {
    let Y = J?.signal,
      Q;
    if (Y) {
      if (Y.aborted) this.controller.abort();
      ((Q = this.controller.abort.bind(this.controller)),
        Y.addEventListener("abort", Q));
    }
    try {
      D(this, Z6, "m", bW).call(this);
      let { response: W, data: z } = await $.create(
        { ...X, stream: !0 },
        { ...J, signal: this.controller.signal },
      ).withResponse();
      this._connected(W);
      for await (let G of z) D(this, Z6, "m", RW).call(this, G);
      if (z.controller.signal?.aborted) throw new u$();
      D(this, Z6, "m", PW).call(this);
    } finally {
      if (Y && Q) Y.removeEventListener("abort", Q);
    }
  }
  _connected($) {
    if (this.ended) return;
    (C(this, Q7, $, "f"),
      C(this, Y7, $?.headers.get("request-id"), "f"),
      D(this, eJ, "f").call(this, $),
      this._emit("connect"));
  }
  get ended() {
    return D(this, K9, "f");
  }
  get errored() {
    return D(this, X7, "f");
  }
  get aborted() {
    return D(this, J7, "f");
  }
  abort() {
    this.controller.abort();
  }
  on($, X) {
    return (
      (D(this, w4, "f")[$] || (D(this, w4, "f")[$] = [])).push({ listener: X }),
      this
    );
  }
  off($, X) {
    let J = D(this, w4, "f")[$];
    if (!J) return this;
    let Y = J.findIndex((Q) => Q.listener === X);
    if (Y >= 0) J.splice(Y, 1);
    return this;
  }
  once($, X) {
    return (
      (D(this, w4, "f")[$] || (D(this, w4, "f")[$] = [])).push({
        listener: X,
        once: !0,
      }),
      this
    );
  }
  emitted($) {
    return new Promise((X, J) => {
      if ((C(this, M1, !0, "f"), $ !== "error")) this.once("error", J);
      this.once($, X);
    });
  }
  async done() {
    (C(this, M1, !0, "f"), await D(this, U9, "f"));
  }
  get currentMessage() {
    return D(this, c4, "f");
  }
  async finalMessage() {
    return (await this.done(), D(this, Z6, "m", IW).call(this));
  }
  async finalText() {
    return (await this.done(), D(this, Z6, "m", zV).call(this));
  }
  _emit($, ...X) {
    if (D(this, K9, "f")) return;
    if ($ === "end") (C(this, K9, !0, "f"), D(this, $7, "f").call(this));
    let J = D(this, w4, "f")[$];
    if (J)
      ((D(this, w4, "f")[$] = J.filter((Y) => !Y.once)),
        J.forEach(({ listener: Y }) => Y(...X)));
    if ($ === "abort") {
      let Y = X[0];
      if (!D(this, M1, "f") && !J?.length) Promise.reject(Y);
      (D(this, G9, "f").call(this, Y),
        D(this, H9, "f").call(this, Y),
        this._emit("end"));
      return;
    }
    if ($ === "error") {
      let Y = X[0];
      if (!D(this, M1, "f") && !J?.length) Promise.reject(Y);
      (D(this, G9, "f").call(this, Y),
        D(this, H9, "f").call(this, Y),
        this._emit("end"));
    }
  }
  _emitFinal() {
    if (this.receivedMessages.at(-1))
      this._emit("finalMessage", D(this, Z6, "m", IW).call(this));
  }
  async _fromReadableStream($, X) {
    let J = X?.signal,
      Y;
    if (J) {
      if (J.aborted) this.controller.abort();
      ((Y = this.controller.abort.bind(this.controller)),
        J.addEventListener("abort", Y));
    }
    try {
      (D(this, Z6, "m", bW).call(this), this._connected(null));
      let Q = D6.fromReadableStream($, this.controller);
      for await (let W of Q) D(this, Z6, "m", RW).call(this, W);
      if (Q.controller.signal?.aborted) throw new u$();
      D(this, Z6, "m", PW).call(this);
    } finally {
      if (J && Y) J.removeEventListener("abort", Y);
    }
  }
  [((c4 = new WeakMap()),
  (D0 = new WeakMap()),
  (z9 = new WeakMap()),
  (eJ = new WeakMap()),
  (G9 = new WeakMap()),
  (U9 = new WeakMap()),
  ($7 = new WeakMap()),
  (H9 = new WeakMap()),
  (w4 = new WeakMap()),
  (K9 = new WeakMap()),
  (X7 = new WeakMap()),
  (J7 = new WeakMap()),
  (M1 = new WeakMap()),
  (Q7 = new WeakMap()),
  (Y7 = new WeakMap()),
  (N9 = new WeakMap()),
  (ZW = new WeakMap()),
  (Z6 = new WeakSet()),
  (IW = function () {
    if (this.receivedMessages.length === 0)
      throw new f(
        "stream ended without producing a Message with role=assistant",
      );
    return this.receivedMessages.at(-1);
  }),
  (zV = function () {
    if (this.receivedMessages.length === 0)
      throw new f(
        "stream ended without producing a Message with role=assistant",
      );
    let X = this.receivedMessages
      .at(-1)
      .content.filter((J) => J.type === "text")
      .map((J) => J.text);
    if (X.length === 0)
      throw new f(
        "stream ended without producing a content block with type=text",
      );
    return X.join(" ");
  }),
  (bW = function () {
    if (this.ended) return;
    C(this, c4, void 0, "f");
  }),
  (RW = function (X) {
    if (this.ended) return;
    let J = D(this, Z6, "m", GV).call(this, X);
    switch ((this._emit("streamEvent", X, J), X.type)) {
      case "content_block_delta": {
        let Y = J.content.at(-1);
        switch (X.delta.type) {
          case "text_delta": {
            if (Y.type === "text")
              this._emit("text", X.delta.text, Y.text || "");
            break;
          }
          case "citations_delta": {
            if (Y.type === "text")
              this._emit("citation", X.delta.citation, Y.citations ?? []);
            break;
          }
          case "input_json_delta": {
            if (HV(Y) && Y.input)
              this._emit("inputJson", X.delta.partial_json, Y.input);
            break;
          }
          case "thinking_delta": {
            if (Y.type === "thinking")
              this._emit("thinking", X.delta.thinking, Y.thinking);
            break;
          }
          case "signature_delta": {
            if (Y.type === "thinking") this._emit("signature", Y.signature);
            break;
          }
          default:
            KV(X.delta);
        }
        break;
      }
      case "message_stop": {
        (this._addMessageParam(J),
          this._addMessage(
            MW(J, D(this, D0, "f"), { logger: D(this, N9, "f") }),
            !0,
          ));
        break;
      }
      case "content_block_stop": {
        this._emit("contentBlock", J.content.at(-1));
        break;
      }
      case "message_start": {
        C(this, c4, J, "f");
        break;
      }
      case "content_block_start":
      case "message_delta":
        break;
    }
  }),
  (PW = function () {
    if (this.ended) throw new f("stream has ended, this shouldn't happen");
    let X = D(this, c4, "f");
    if (!X) throw new f("request ended without sending any chunks");
    return (
      C(this, c4, void 0, "f"),
      MW(X, D(this, D0, "f"), { logger: D(this, N9, "f") })
    );
  }),
  (GV = function (X) {
    let J = D(this, c4, "f");
    if (X.type === "message_start") {
      if (J)
        throw new f(
          `Unexpected event order, got ${X.type} before receiving "message_stop"`,
        );
      return X.message;
    }
    if (!J)
      throw new f(
        `Unexpected event order, got ${X.type} before "message_start"`,
      );
    switch (X.type) {
      case "message_stop":
        return J;
      case "message_delta":
        if (
          ((J.stop_reason = X.delta.stop_reason),
          (J.stop_sequence = X.delta.stop_sequence),
          (J.usage.output_tokens = X.usage.output_tokens),
          X.usage.input_tokens != null)
        )
          J.usage.input_tokens = X.usage.input_tokens;
        if (X.usage.cache_creation_input_tokens != null)
          J.usage.cache_creation_input_tokens =
            X.usage.cache_creation_input_tokens;
        if (X.usage.cache_read_input_tokens != null)
          J.usage.cache_read_input_tokens = X.usage.cache_read_input_tokens;
        if (X.usage.server_tool_use != null)
          J.usage.server_tool_use = X.usage.server_tool_use;
        return J;
      case "content_block_start":
        return (J.content.push({ ...X.content_block }), J);
      case "content_block_delta": {
        let Y = J.content.at(X.index);
        switch (X.delta.type) {
          case "text_delta": {
            if (Y?.type === "text")
              J.content[X.index] = {
                ...Y,
                text: (Y.text || "") + X.delta.text,
              };
            break;
          }
          case "citations_delta": {
            if (Y?.type === "text")
              J.content[X.index] = {
                ...Y,
                citations: [...(Y.citations ?? []), X.delta.citation],
              };
            break;
          }
          case "input_json_delta": {
            if (Y && HV(Y)) {
              let Q = Y[UV] || "";
              Q += X.delta.partial_json;
              let W = { ...Y };
              if (
                (Object.defineProperty(W, UV, {
                  value: Q,
                  enumerable: !1,
                  writable: !0,
                }),
                Q)
              )
                W.input = pJ(Q);
              J.content[X.index] = W;
            }
            break;
          }
          case "thinking_delta": {
            if (Y?.type === "thinking")
              J.content[X.index] = {
                ...Y,
                thinking: Y.thinking + X.delta.thinking,
              };
            break;
          }
          case "signature_delta": {
            if (Y?.type === "thinking")
              J.content[X.index] = { ...Y, signature: X.delta.signature };
            break;
          }
          default:
            KV(X.delta);
        }
        return J;
      }
      case "content_block_stop":
        return J;
    }
  }),
  Symbol.asyncIterator)]() {
    let $ = [],
      X = [],
      J = !1;
    return (
      this.on("streamEvent", (Y) => {
        let Q = X.shift();
        if (Q) Q.resolve(Y);
        else $.push(Y);
      }),
      this.on("end", () => {
        J = !0;
        for (let Y of X) Y.resolve(void 0);
        X.length = 0;
      }),
      this.on("abort", (Y) => {
        J = !0;
        for (let Q of X) Q.reject(Y);
        X.length = 0;
      }),
      this.on("error", (Y) => {
        J = !0;
        for (let Q of X) Q.reject(Y);
        X.length = 0;
      }),
      {
        next: async () => {
          if (!$.length) {
            if (J) return { value: void 0, done: !0 };
            return new Promise((Q, W) =>
              X.push({ resolve: Q, reject: W }),
            ).then((Q) =>
              Q ? { value: Q, done: !1 } : { value: void 0, done: !0 },
            );
          }
          return { value: $.shift(), done: !1 };
        },
        return: async () => {
          return (this.abort(), { value: void 0, done: !0 });
        },
      }
    );
  }
  toReadableStream() {
    return new D6(
      this[Symbol.asyncIterator].bind(this),
      this.controller,
    ).toReadableStream();
  }
}
function KV($) {}
class O9 extends b$ {
  create($, X) {
    return this._client.post("/v1/messages/batches", { body: $, ...X });
  }
  retrieve($, X) {
    return this._client.get(A$`/v1/messages/batches/${$}`, X);
  }
  list($ = {}, X) {
    return this._client.getAPIList("/v1/messages/batches", f6, {
      query: $,
      ...X,
    });
  }
  delete($, X) {
    return this._client.delete(A$`/v1/messages/batches/${$}`, X);
  }
  cancel($, X) {
    return this._client.post(A$`/v1/messages/batches/${$}/cancel`, X);
  }
  async results($, X) {
    let J = await this.retrieve($);
    if (!J.results_url)
      throw new f(
        `No batch \`results_url\`; Has it finished processing? ${J.processing_status} - ${J.id}`,
      );
    return this._client
      .get(J.results_url, {
        ...X,
        headers: i([{ Accept: "application/binary" }, X?.headers]),
        stream: !0,
        __binaryResponse: !0,
      })
      ._thenUnwrap((Y, Q) => w0.fromResponse(Q.response, Q.controller));
  }
}
class A1 extends b$ {
  constructor() {
    super(...arguments);
    this.batches = new O9(this._client);
  }
  create($, X) {
    if ($.model in NV)
      console.warn(`The model '${$.model}' is deprecated and will reach end-of-life on ${NV[$.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
    if ($.model in Db && $.thinking && $.thinking.type === "enabled")
      console.warn(
        `Using Claude with ${$.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`,
      );
    let J = this._client._options.timeout;
    if (!$.stream && J == null) {
      let Q = dJ[$.model] ?? void 0;
      J = this._client.calculateNonstreamingTimeout($.max_tokens, Q);
    }
    let Y = cJ($.tools, $.messages);
    return this._client.post("/v1/messages", {
      body: $,
      timeout: J ?? 600000,
      ...X,
      headers: i([Y, X?.headers]),
      stream: $.stream ?? !1,
    });
  }
  parse($, X) {
    return this.create($, X).then((J) =>
      AW(J, $, { logger: this._client.logger ?? console }),
    );
  }
  stream($, X) {
    return V9.createMessage(this, $, X, {
      logger: this._client.logger ?? console,
    });
  }
  countTokens($, X) {
    return this._client.post("/v1/messages/count_tokens", { body: $, ...X });
  }
}
var NV = {
    "claude-1.3": "November 6th, 2024",
    "claude-1.3-100k": "November 6th, 2024",
    "claude-instant-1.1": "November 6th, 2024",
    "claude-instant-1.1-100k": "November 6th, 2024",
    "claude-instant-1.2": "November 6th, 2024",
    "claude-3-sonnet-20240229": "July 21st, 2025",
    "claude-3-opus-20240229": "January 5th, 2026",
    "claude-2.1": "July 21st, 2025",
    "claude-2.0": "July 21st, 2025",
    "claude-3-7-sonnet-latest": "February 19th, 2026",
    "claude-3-7-sonnet-20250219": "February 19th, 2026",
    "claude-3-5-haiku-latest": "February 19th, 2026",
    "claude-3-5-haiku-20241022": "February 19th, 2026",
  },
  Db = ["claude-opus-4-6"];
A1.Batches = O9;
class F0 extends b$ {
  retrieve($, X = {}, J) {
    let { betas: Y } = X ?? {};
    return this._client.get(A$`/v1/models/${$}`, {
      ...J,
      headers: i([
        {
          ...(Y?.toString() != null
            ? { "anthropic-beta": Y?.toString() }
            : void 0),
        },
        J?.headers,
      ]),
    });
  }
  list($ = {}, X) {
    let { betas: J, ...Y } = $ ?? {};
    return this._client.getAPIList("/v1/models", f6, {
      query: Y,
      ...X,
      headers: i([
        {
          ...(J?.toString() != null
            ? { "anthropic-beta": J?.toString() }
            : void 0),
        },
        X?.headers,
      ]),
    });
  }
}
var w9 = ($) => {
  if (typeof globalThis.process < "u")
    return globalThis.process.env?.[$]?.trim() ?? void 0;
  if (typeof globalThis.Deno < "u")
    return globalThis.Deno.env?.get?.($)?.trim();
  return;
};
var EW,
  SW,
  W7,
  VV,
  OV = "\\n\\nHuman:",
  wV = "\\n\\nAssistant:";
class P$ {
  constructor({
    baseURL: $ = w9("ANTHROPIC_BASE_URL"),
    apiKey: X = w9("ANTHROPIC_API_KEY") ?? null,
    authToken: J = w9("ANTHROPIC_AUTH_TOKEN") ?? null,
    ...Y
  } = {}) {
    (EW.add(this), W7.set(this, void 0));
    let Q = {
      apiKey: X,
      authToken: J,
      ...Y,
      baseURL: $ || "https://api.anthropic.com",
    };
    if (!Q.dangerouslyAllowBrowser && SN())
      throw new f(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);
    ((this.baseURL = Q.baseURL),
      (this.timeout = Q.timeout ?? SW.DEFAULT_TIMEOUT),
      (this.logger = Q.logger ?? console));
    let W = "warn";
    ((this.logLevel = W),
      (this.logLevel =
        zW(Q.logLevel, "ClientOptions.logLevel", this) ??
        zW(w9("ANTHROPIC_LOG"), "process.env['ANTHROPIC_LOG']", this) ??
        W),
      (this.fetchOptions = Q.fetchOptions),
      (this.maxRetries = Q.maxRetries ?? 2),
      (this.fetch = Q.fetch ?? CN()),
      C(this, W7, _N, "f"),
      (this._options = Q),
      (this.apiKey = typeof X === "string" ? X : null),
      (this.authToken = J));
  }
  withOptions($) {
    return new this.constructor({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      authToken: this.authToken,
      ...$,
    });
  }
  defaultQuery() {
    return this._options.defaultQuery;
  }
  validateHeaders({ values: $, nulls: X }) {
    if ($.get("x-api-key") || $.get("authorization")) return;
    if (this.apiKey && $.get("x-api-key")) return;
    if (X.has("x-api-key")) return;
    if (this.authToken && $.get("authorization")) return;
    if (X.has("authorization")) return;
    throw Error(
      'Could not resolve authentication method. Expected either apiKey or authToken to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted',
    );
  }
  async authHeaders($) {
    return i([await this.apiKeyAuth($), await this.bearerAuth($)]);
  }
  async apiKeyAuth($) {
    if (this.apiKey == null) return;
    return i([{ "X-Api-Key": this.apiKey }]);
  }
  async bearerAuth($) {
    if (this.authToken == null) return;
    return i([{ Authorization: `Bearer ${this.authToken}` }]);
  }
  stringifyQuery($) {
    return xN($);
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${g4}`;
  }
  defaultIdempotencyKey() {
    return `stainless-node-retry-${$W()}`;
  }
  makeStatusError($, X, J, Y) {
    return x$.generate($, X, J, Y);
  }
  buildURL($, X, J) {
    let Y = (!D(this, EW, "m", VV).call(this) && J) || this.baseURL,
      Q = AN($)
        ? new URL($)
        : new URL(Y + (Y.endsWith("/") && $.startsWith("/") ? $.slice(1) : $)),
      W = this.defaultQuery(),
      z = Object.fromEntries(Q.searchParams);
    if (!QW(W) || !QW(z)) X = { ...z, ...W, ...X };
    if (typeof X === "object" && X && !Array.isArray(X))
      Q.search = this.stringifyQuery(X);
    return Q.toString();
  }
  _calculateNonstreamingTimeout($) {
    if ((3600 * $) / 128000 > 600)
      throw new f(
        "Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#streaming-responses for more details",
      );
    return 600000;
  }
  async prepareOptions($) {}
  async prepareRequest($, { url: X, options: J }) {}
  get($, X) {
    return this.methodRequest("get", $, X);
  }
  post($, X) {
    return this.methodRequest("post", $, X);
  }
  patch($, X) {
    return this.methodRequest("patch", $, X);
  }
  put($, X) {
    return this.methodRequest("put", $, X);
  }
  delete($, X) {
    return this.methodRequest("delete", $, X);
  }
  methodRequest($, X, J) {
    return this.request(
      Promise.resolve(J).then((Y) => {
        return { method: $, path: X, ...Y };
      }),
    );
  }
  request($, X = null) {
    return new D1(this, this.makeRequest($, X, void 0));
  }
  async makeRequest($, X, J) {
    let Y = await $,
      Q = Y.maxRetries ?? this.maxRetries;
    if (X == null) X = Q;
    await this.prepareOptions(Y);
    let {
      req: W,
      url: z,
      timeout: G,
    } = await this.buildRequest(Y, { retryCount: Q - X });
    await this.prepareRequest(W, { url: z, options: Y });
    let U =
        "log_" + ((Math.random() * 16777216) | 0).toString(16).padStart(6, "0"),
      H = J === void 0 ? "" : `, retryOf: ${J}`,
      K = Date.now();
    if (
      (h$(this).debug(
        `[${U}] sending request`,
        N4({
          retryOfRequestLogID: J,
          method: Y.method,
          url: z,
          options: Y,
          headers: W.headers,
        }),
      ),
      Y.signal?.aborted)
    )
      throw new u$();
    let N = new AbortController(),
      V = await this.fetchWithTimeout(z, W, G, N).catch(P8),
      O = Date.now();
    if (V instanceof globalThis.Error) {
      let F = `retrying, ${X} attempts remaining`;
      if (Y.signal?.aborted) throw new u$();
      let j =
        K4(V) ||
        /timed? ?out/i.test(String(V) + ("cause" in V ? String(V.cause) : ""));
      if (X)
        return (
          h$(this).info(
            `[${U}] connection ${j ? "timed out" : "failed"} - ${F}`,
          ),
          h$(this).debug(
            `[${U}] connection ${j ? "timed out" : "failed"} (${F})`,
            N4({
              retryOfRequestLogID: J,
              url: z,
              durationMs: O - K,
              message: V.message,
            }),
          ),
          this.retryRequest(Y, X, J ?? U)
        );
      if (
        (h$(this).info(
          `[${U}] connection ${j ? "timed out" : "failed"} - error; no more retries left`,
        ),
        h$(this).debug(
          `[${U}] connection ${j ? "timed out" : "failed"} (error; no more retries left)`,
          N4({
            retryOfRequestLogID: J,
            url: z,
            durationMs: O - K,
            message: V.message,
          }),
        ),
        j)
      )
        throw new E8();
      throw new q1({ cause: V });
    }
    let w = [...V.headers.entries()]
        .filter(([F]) => F === "request-id")
        .map(([F, j]) => ", " + F + ": " + JSON.stringify(j))
        .join(""),
      B = `[${U}${H}${w}] ${W.method} ${z} ${V.ok ? "succeeded" : "failed"} with status ${V.status} in ${O - K}ms`;
    if (!V.ok) {
      let F = await this.shouldRetry(V);
      if (X && F) {
        let B$ = `retrying, ${X} attempts remaining`;
        return (
          await kN(V.body),
          h$(this).info(`${B} - ${B$}`),
          h$(this).debug(
            `[${U}] response error (${B$})`,
            N4({
              retryOfRequestLogID: J,
              url: V.url,
              status: V.status,
              headers: V.headers,
              durationMs: O - K,
            }),
          ),
          this.retryRequest(Y, X, J ?? U, V.headers)
        );
      }
      let j = F ? "error; no more retries left" : "error; not retryable";
      h$(this).info(`${B} - ${j}`);
      let I = await V.text().catch((B$) => P8(B$).message),
        Z = xJ(I),
        _ = Z ? void 0 : I;
      throw (
        h$(this).debug(
          `[${U}] response error (${j})`,
          N4({
            retryOfRequestLogID: J,
            url: V.url,
            status: V.status,
            headers: V.headers,
            message: _,
            durationMs: Date.now() - K,
          }),
        ),
        this.makeStatusError(V.status, Z, _, V.headers)
      );
    }
    return (
      h$(this).info(B),
      h$(this).debug(
        `[${U}] response start`,
        N4({
          retryOfRequestLogID: J,
          url: V.url,
          status: V.status,
          headers: V.headers,
          durationMs: O - K,
        }),
      ),
      {
        response: V,
        options: Y,
        controller: N,
        requestLogID: U,
        retryOfRequestLogID: J,
        startTime: K,
      }
    );
  }
  getAPIList($, X, J) {
    return this.requestAPIList(
      X,
      J && "then" in J
        ? J.then((Y) => ({ method: "get", path: $, ...Y }))
        : { method: "get", path: $, ...J },
    );
  }
  requestAPIList($, X) {
    let J = this.makeRequest(X, null, void 0);
    return new uJ(this, J, $);
  }
  async fetchWithTimeout($, X, J, Y) {
    let { signal: Q, method: W, ...z } = X || {},
      G = this._makeAbort(Y);
    if (Q) Q.addEventListener("abort", G, { once: !0 });
    let U = setTimeout(G, J),
      H =
        (globalThis.ReadableStream &&
          z.body instanceof globalThis.ReadableStream) ||
        (typeof z.body === "object" &&
          z.body !== null &&
          Symbol.asyncIterator in z.body),
      K = {
        signal: Y.signal,
        ...(H ? { duplex: "half" } : {}),
        method: "GET",
        ...z,
      };
    if (W) K.method = W.toUpperCase();
    try {
      return await this.fetch.call(void 0, $, K);
    } finally {
      clearTimeout(U);
    }
  }
  async shouldRetry($) {
    let X = $.headers.get("x-should-retry");
    if (X === "true") return !0;
    if (X === "false") return !1;
    if ($.status === 408) return !0;
    if ($.status === 409) return !0;
    if ($.status === 429) return !0;
    if ($.status >= 500) return !0;
    return !1;
  }
  async retryRequest($, X, J, Y) {
    let Q,
      W = Y?.get("retry-after-ms");
    if (W) {
      let G = parseFloat(W);
      if (!Number.isNaN(G)) Q = G;
    }
    let z = Y?.get("retry-after");
    if (z && !Q) {
      let G = parseFloat(z);
      if (!Number.isNaN(G)) Q = G * 1000;
      else Q = Date.parse(z) - Date.now();
    }
    if (Q === void 0) {
      let G = $.maxRetries ?? this.maxRetries;
      Q = this.calculateDefaultRetryTimeoutMillis(X, G);
    }
    return (await bN(Q), this.makeRequest($, X - 1, J));
  }
  calculateDefaultRetryTimeoutMillis($, X) {
    let Q = X - $,
      W = Math.min(0.5 * Math.pow(2, Q), 8),
      z = 1 - Math.random() * 0.25;
    return W * z * 1000;
  }
  calculateNonstreamingTimeout($, X) {
    if ((3600000 * $) / 128000 > 600000 || (X != null && $ > X))
      throw new f(
        "Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#long-requests for more details",
      );
    return 600000;
  }
  async buildRequest($, { retryCount: X = 0 } = {}) {
    let J = { ...$ },
      { method: Y, path: Q, query: W, defaultBaseURL: z } = J,
      G = this.buildURL(Q, W, z);
    if ("timeout" in J) ZN("timeout", J.timeout);
    J.timeout = J.timeout ?? this.timeout;
    let { bodyHeaders: U, body: H } = this.buildBody({ options: J }),
      K = await this.buildHeaders({
        options: $,
        method: Y,
        bodyHeaders: U,
        retryCount: X,
      });
    return {
      req: {
        method: Y,
        headers: K,
        ...(J.signal && { signal: J.signal }),
        ...(globalThis.ReadableStream &&
          H instanceof globalThis.ReadableStream && { duplex: "half" }),
        ...(H && { body: H }),
        ...(this.fetchOptions ?? {}),
        ...(J.fetchOptions ?? {}),
      },
      url: G,
      timeout: J.timeout,
    };
  }
  async buildHeaders({ options: $, method: X, bodyHeaders: J, retryCount: Y }) {
    let Q = {};
    if (this.idempotencyHeader && X !== "get") {
      if (!$.idempotencyKey) $.idempotencyKey = this.defaultIdempotencyKey();
      Q[this.idempotencyHeader] = $.idempotencyKey;
    }
    let W = i([
      Q,
      {
        Accept: "application/json",
        "User-Agent": this.getUserAgent(),
        "X-Stainless-Retry-Count": String(Y),
        ...($.timeout
          ? { "X-Stainless-Timeout": String(Math.trunc($.timeout / 1000)) }
          : {}),
        ...vN(),
        ...(this._options.dangerouslyAllowBrowser
          ? { "anthropic-dangerous-direct-browser-access": "true" }
          : void 0),
        "anthropic-version": "2023-06-01",
      },
      await this.authHeaders($),
      this._options.defaultHeaders,
      J,
      $.headers,
    ]);
    return (this.validateHeaders(W), W.values);
  }
  _makeAbort($) {
    return () => $.abort();
  }
  buildBody({ options: { body: $, headers: X } }) {
    if (!$) return { bodyHeaders: void 0, body: void 0 };
    let J = i([X]);
    if (
      ArrayBuffer.isView($) ||
      $ instanceof ArrayBuffer ||
      $ instanceof DataView ||
      (typeof $ === "string" && J.values.has("content-type")) ||
      (globalThis.Blob && $ instanceof globalThis.Blob) ||
      $ instanceof FormData ||
      $ instanceof URLSearchParams ||
      (globalThis.ReadableStream && $ instanceof globalThis.ReadableStream)
    )
      return { bodyHeaders: void 0, body: $ };
    else if (
      typeof $ === "object" &&
      (Symbol.asyncIterator in $ ||
        (Symbol.iterator in $ && "next" in $ && typeof $.next === "function"))
    )
      return { bodyHeaders: void 0, body: TJ($) };
    else if (
      typeof $ === "object" &&
      J.values.get("content-type") === "application/x-www-form-urlencoded"
    )
      return {
        bodyHeaders: { "content-type": "application/x-www-form-urlencoded" },
        body: this.stringifyQuery($),
      };
    else return D(this, W7, "f").call(this, { body: $, headers: J });
  }
}
((SW = P$),
  (W7 = new WeakMap()),
  (EW = new WeakSet()),
  (VV = function () {
    return this.baseURL !== "https://api.anthropic.com";
  }));
P$.Anthropic = SW;
P$.HUMAN_PROMPT = OV;
P$.AI_PROMPT = wV;
P$.DEFAULT_TIMEOUT = 600000;
P$.AnthropicError = f;
P$.APIError = x$;
P$.APIConnectionError = q1;
P$.APIConnectionTimeoutError = E8;
P$.APIUserAbortError = u$;
P$.NotFoundError = k8;
P$.ConflictError = _8;
P$.RateLimitError = T8;
P$.BadRequestError = S8;
P$.AuthenticationError = v8;
P$.InternalServerError = f8;
P$.PermissionDeniedError = C8;
P$.UnprocessableEntityError = x8;
P$.toFile = mJ;
class I1 extends P$ {
  constructor() {
    super(...arguments);
    ((this.completions = new q0(this)),
      (this.messages = new A1(this)),
      (this.models = new F0(this)),
      (this.beta = new s6(this)));
  }
}
I1.Completions = q0;
I1.Messages = A1;
I1.Models = F0;
I1.Beta = s6;
function d4($) {
  return $ instanceof Error ? $ : Error(String($));
}
function j0($) {
  return $ instanceof Error ? $.message : String($);
}
function y6($) {
  if ($ && typeof $ === "object" && "code" in $ && typeof $.code === "string")
    return $.code;
  return;
}
function L0($) {
  return y6($) === "ENOENT";
}
function vW($) {
  return y6($) === "EISDIR";
}
import { randomUUID as jb } from "crypto";
import { appendFile as Lb, mkdir as Mb } from "fs/promises";
import { join as BV } from "path";
var Z1,
  M0 = null;
function qV() {
  if (M0) return M0;
  if (!X6(process.env.DEBUG_CLAUDE_AGENT_SDK))
    return ((Z1 = null), (M0 = Promise.resolve()), M0);
  let $ = BV(y4(), "debug");
  return (
    (Z1 = BV($, `sdk-${jb()}.txt`)),
    process.stderr.write(`SDK debug logs: ${Z1}
`),
    (M0 = Mb($, { recursive: !0 })
      .then(() => {})
      .catch(() => {})),
    M0
  );
}
function DV() {
  return (qV(), Z1 ?? null);
}
function J6($) {
  if (Z1 === null) return;
  let J = `${new Date().toISOString()} ${$}
`;
  qV().then(() => {
    if (Z1) Lb(Z1, J).catch(() => {});
  });
}
import { realpathSync as FV } from "fs";
import { cwd as Ab } from "process";
import { randomUUID as B9 } from "crypto";
var Ib = {
  renderTarget: "ink",
  workspace: "local",
  canDrive: !0,
  transcriptSource: "local-jsonl",
  remote: null,
};
function Zb() {
  let $ = "";
  if (
    typeof process < "u" &&
    typeof process.cwd === "function" &&
    typeof FV === "function"
  ) {
    let J = Ab();
    try {
      $ = FV(J).normalize("NFC");
    } catch {
      $ = J.normalize("NFC");
    }
  }
  return {
    originalCwd: $,
    projectRoot: $,
    totalCostUSD: 0,
    totalAPIDuration: 0,
    totalAPIDurationWithoutRetries: 0,
    totalToolDuration: 0,
    startTime: Date.now(),
    lastInteractionTime: Date.now(),
    totalLinesAdded: 0,
    totalLinesRemoved: 0,
    hasUnknownModelCost: !1,
    cwd: $,
    modelUsage: {},
    mainLoopModelOverride: void 0,
    initialMainLoopModel: null,
    modelStrings: null,
    isInteractive: !1,
    hasStreamingInput: !1,
    kairosActive: !1,
    strictToolResultPairing: !1,
    memoryToggledOff: !1,
    teamMemoryServerStatus: void 0,
    sdkAgentProgressSummariesEnabled: !1,
    userMsgOptIn: !1,
    clientType: "cli",
    sessionSource: void 0,
    sessionStartType: "fresh",
    questionPreviewFormat: void 0,
    sessionIngressToken: void 0,
    oauthTokenFromFd: void 0,
    apiKeyFromFd: void 0,
    flagSettingsPath: void 0,
    flagSettingsInline: null,
    parentManagedSettings: null,
    allowedSettingSources: [
      "userSettings",
      "projectSettings",
      "localSettings",
      "flagSettings",
      "policySettings",
    ],
    meter: null,
    sessionCounter: null,
    locCounter: null,
    prCounter: null,
    commitCounter: null,
    costCounter: null,
    tokenCounter: null,
    codeEditToolDecisionCounter: null,
    activeTimeCounter: null,
    statsStore: null,
    sessionId: B9(),
    parentSessionId: void 0,
    loggerProvider: null,
    eventLogger: null,
    meterProvider: null,
    tracerProvider: null,
    agentColorMap: new Map(),
    agentColorIndex: 0,
    lastAPIRequest: null,
    lastAPIRequestMessages: null,
    lastClassifierRequests: null,
    cachedClaudeMdContent: null,
    inMemoryErrorLog: [],
    inlinePlugins: [],
    chromeFlagOverride: void 0,
    useCoworkPlugins: !1,
    sessionBypassPermissionsMode: !1,
    scheduledTasksEnabled: !1,
    sessionCronTasks: [],
    loopChainStartedAt: Object.create(null),
    sessionCreatedTeams: new Set(),
    sessionTrustAccepted: !1,
    sessionPersistenceDisabled: !1,
    hasExitedPlanMode: !1,
    needsPlanModeExitAttachment: !1,
    needsAutoModeExitAttachment: !1,
    lspRecommendationShownThisSession: !1,
    initJsonSchema: null,
    registeredHooks: null,
    planSlugCache: new Map(),
    teleportedSessionInfo: null,
    invokedSkills: new Map(),
    slowOperations: [],
    sdkBetas: void 0,
    sdkOAuthTokenRefreshCallback: null,
    mainThreadAgentType: void 0,
    mainThreadAgentHooks: void 0,
    sessionSkillAllowlist: void 0,
    caps: Ib,
    replBridgeActive: !1,
    directConnectServerUrl: void 0,
    activeRoutine: void 0,
    systemPromptSectionCache: new Map(),
    lastEmittedDate: null,
    additionalDirectoriesForClaudeMd: [],
    allowedChannels: [],
    activeInputs: new Map(),
    hasDevChannels: !1,
    sessionProjectDir: null,
    promptCache1hAllowlist: null,
    afkModeHeaderLatched: null,
    fastModeHeaderLatched: null,
    cacheEditingHeaderLatched: null,
    cacheDiagnosisHeaderLatched: null,
    thinkingClearLatched: null,
    promptId: null,
    promptIndex: 0,
    lastMainRequestId: void 0,
    lastApiCompletionTimestamp: null,
    pendingPostCompaction: !1,
  };
}
var bb = Zb();
function CW() {
  return bb.sessionId;
}
var Rb = Q0(),
  ko = Rb.subscribe;
var Pb = Q0(),
  _o = Pb.subscribe;
var Eb = Q0();
var xo = Eb.subscribe;
import {
  appendFile as RV,
  mkdir as lb,
  symlink as cb,
  unlink as db,
} from "fs/promises";
import { dirname as PV, join as fW } from "path";
function jV({
  writeFn: $,
  flushIntervalMs: X = 1000,
  maxBufferSize: J = 100,
  maxBufferBytes: Y = 1 / 0,
  immediateMode: Q = !1,
}) {
  let W = [],
    z = 0,
    G = null,
    U = null;
  function H() {
    if (G) (clearTimeout(G), (G = null));
  }
  function K() {
    if (U) ($(U.join("")), (U = null));
    if (W.length === 0) return;
    ($(W.join("")), (W = []), (z = 0), H());
  }
  function N() {
    if (!G) G = setTimeout(K, X);
  }
  function V() {
    if (U) {
      (U.push(...W), (W = []), (z = 0), H());
      return;
    }
    let O = W;
    ((W = []),
      (z = 0),
      H(),
      (U = O),
      setImmediate(() => {
        let w = U;
        if (((U = null), w)) $(w.join(""));
      }));
  }
  return {
    write(O) {
      if (Q) {
        $(O);
        return;
      }
      if ((W.push(O), (z += O.length), N(), W.length >= J || z >= Y)) V();
    },
    flush: K,
    dispose() {
      K();
    },
  };
}
var LV = new Set();
function MV($) {
  return (LV.add($), () => LV.delete($));
}
var AV = T6(($) => {
  if (!$ || $.trim() === "") return null;
  let X = $.split(",")
    .map((W) => W.trim())
    .filter(Boolean);
  if (X.length === 0) return null;
  let J = X.some((W) => W.startsWith("!")),
    Y = X.some((W) => !W.startsWith("!"));
  if (J && Y) return null;
  let Q = X.map((W) => W.replace(/^!/, "").toLowerCase());
  return { include: J ? [] : Q, exclude: J ? Q : [], isExclusive: J };
});
function Sb($) {
  let X = [],
    J = $.match(/^MCP server ["']([^"']+)["']/);
  if (J && J[1]) (X.push("mcp"), X.push(J[1].toLowerCase()));
  else {
    let W = $.match(/^([^:[]+):/);
    if (W && W[1]) X.push(W[1].trim().toLowerCase());
  }
  let Y = $.match(/^\[([^\]]+)]/);
  if (Y && Y[1]) X.push(Y[1].trim().toLowerCase());
  if ($.toLowerCase().includes("1p event:")) X.push("1p");
  let Q = $.match(/:\s*([^:]+?)(?:\s+(?:type|mode|status|event))?:/);
  if (Q && Q[1]) {
    let W = Q[1].trim().toLowerCase();
    if (W.length < 30 && !W.includes(" ")) X.push(W);
  }
  return Array.from(new Set(X));
}
function vb($, X) {
  if (!X) return !0;
  if ($.length === 0) return !1;
  if (X.isExclusive) return !$.some((J) => X.exclude.includes(J));
  else return $.some((J) => X.include.includes(J));
}
function IV($, X) {
  if (!X) return !0;
  let J = Sb($);
  return vb(J, X);
}
import * as r from "fs";
import {
  mkdir as Cb,
  open as kb,
  readdir as _b,
  readFile as ZV,
  rename as xb,
  rmdir as Tb,
  rm as fb,
  stat as yb,
  unlink as gb,
} from "fs/promises";
var hb = {
    cwd() {
      return process.cwd();
    },
    existsSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.existsSync(${$})`, 0);
        return r.existsSync($);
      } catch (Y) {
        var Q = Y,
          W = 1;
      } finally {
        D$(J, Q, W);
      }
    },
    async stat($) {
      return yb($);
    },
    async readdir($) {
      return _b($, { withFileTypes: !0 });
    },
    async unlink($) {
      return gb($);
    },
    async rmdir($) {
      return Tb($);
    },
    async rm($, X) {
      return fb($, X);
    },
    async mkdir($, X) {
      try {
        await Cb($, { recursive: !0, ...X });
      } catch (J) {
        if (y6(J) !== "EEXIST") throw J;
      }
    },
    async readFile($, X) {
      return ZV($, { encoding: X.encoding });
    },
    async rename($, X) {
      return xb($, X);
    },
    statSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.statSync(${$})`, 0);
        return r.statSync($);
      } catch (Y) {
        var Q = Y,
          W = 1;
      } finally {
        D$(J, Q, W);
      }
    },
    lstatSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.lstatSync(${$})`, 0);
        return r.lstatSync($);
      } catch (Y) {
        var Q = Y,
          W = 1;
      } finally {
        D$(J, Q, W);
      }
    },
    readFileSync($, X) {
      let Y = [];
      try {
        const J = q$(Y, R$`fs.readFileSync(${$})`, 0);
        return r.readFileSync($, { encoding: X.encoding });
      } catch (Q) {
        var W = Q,
          z = 1;
      } finally {
        D$(Y, W, z);
      }
    },
    readFileBytesSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.readFileBytesSync(${$})`, 0);
        return r.readFileSync($);
      } catch (Y) {
        var Q = Y,
          W = 1;
      } finally {
        D$(J, Q, W);
      }
    },
    readSync($, X) {
      let Q = [];
      try {
        const J = q$(Q, R$`fs.readSync(${$}, ${X.length} bytes)`, 0);
        let Y = void 0;
        try {
          Y = r.openSync($, "r");
          let U = Buffer.alloc(X.length),
            H = r.readSync(Y, U, 0, X.length, 0);
          return { buffer: U, bytesRead: H };
        } finally {
          if (Y) r.closeSync(Y);
        }
      } catch (W) {
        var z = W,
          G = 1;
      } finally {
        D$(Q, z, G);
      }
    },
    appendFileSync($, X, J) {
      let Q = [];
      try {
        const Y = q$(Q, R$`fs.appendFileSync(${$}, ${X.length} chars)`, 0);
        if (J?.mode !== void 0)
          try {
            let U = r.openSync($, "ax", J.mode);
            try {
              r.appendFileSync(U, X);
            } finally {
              r.closeSync(U);
            }
            return;
          } catch (U) {
            if (y6(U) !== "EEXIST") throw U;
          }
        r.appendFileSync($, X);
      } catch (W) {
        var z = W,
          G = 1;
      } finally {
        D$(Q, z, G);
      }
    },
    copyFileSync($, X) {
      let Y = [];
      try {
        const J = q$(Y, R$`fs.copyFileSync(${$} → ${X})`, 0);
        r.copyFileSync($, X);
      } catch (Q) {
        var W = Q,
          z = 1;
      } finally {
        D$(Y, W, z);
      }
    },
    unlinkSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.unlinkSync(${$})`, 0);
        r.unlinkSync($);
      } catch (Y) {
        var Q = Y,
          W = 1;
      } finally {
        D$(J, Q, W);
      }
    },
    renameSync($, X) {
      let Y = [];
      try {
        const J = q$(Y, R$`fs.renameSync(${$} → ${X})`, 0);
        r.renameSync($, X);
      } catch (Q) {
        var W = Q,
          z = 1;
      } finally {
        D$(Y, W, z);
      }
    },
    linkSync($, X) {
      let Y = [];
      try {
        const J = q$(Y, R$`fs.linkSync(${$} → ${X})`, 0);
        r.linkSync($, X);
      } catch (Q) {
        var W = Q,
          z = 1;
      } finally {
        D$(Y, W, z);
      }
    },
    symlinkSync($, X, J) {
      let Q = [];
      try {
        const Y = q$(Q, R$`fs.symlinkSync(${$} → ${X})`, 0);
        r.symlinkSync($, X, J);
      } catch (W) {
        var z = W,
          G = 1;
      } finally {
        D$(Q, z, G);
      }
    },
    readlinkSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.readlinkSync(${$})`, 0);
        return r.readlinkSync($);
      } catch (Y) {
        var Q = Y,
          W = 1;
      } finally {
        D$(J, Q, W);
      }
    },
    realpathSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.realpathSync(${$})`, 0);
        return r.realpathSync($).normalize("NFC");
      } catch (Y) {
        var Q = Y,
          W = 1;
      } finally {
        D$(J, Q, W);
      }
    },
    mkdirSync($, X) {
      let Q = [];
      try {
        const J = q$(Q, R$`fs.mkdirSync(${$})`, 0);
        let Y = { recursive: !0 };
        if (X?.mode !== void 0) Y.mode = X.mode;
        try {
          r.mkdirSync($, Y);
        } catch (U) {
          if (y6(U) !== "EEXIST") throw U;
        }
      } catch (W) {
        var z = W,
          G = 1;
      } finally {
        D$(Q, z, G);
      }
    },
    readdirSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.readdirSync(${$})`, 0);
        return r.readdirSync($, { withFileTypes: !0 });
      } catch (Y) {
        var Q = Y,
          W = 1;
      } finally {
        D$(J, Q, W);
      }
    },
    readdirStringSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.readdirStringSync(${$})`, 0);
        return r.readdirSync($);
      } catch (Y) {
        var Q = Y,
          W = 1;
      } finally {
        D$(J, Q, W);
      }
    },
    isDirEmptySync($) {
      let Y = [];
      try {
        const X = q$(Y, R$`fs.isDirEmptySync(${$})`, 0);
        let J = this.readdirSync($);
        return J.length === 0;
      } catch (Q) {
        var W = Q,
          z = 1;
      } finally {
        D$(Y, W, z);
      }
    },
    rmdirSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.rmdirSync(${$})`, 0);
        r.rmdirSync($);
      } catch (Y) {
        var Q = Y,
          W = 1;
      } finally {
        D$(J, Q, W);
      }
    },
    rmSync($, X) {
      let Y = [];
      try {
        const J = q$(Y, R$`fs.rmSync(${$})`, 0);
        r.rmSync($, X);
      } catch (Q) {
        var W = Q,
          z = 1;
      } finally {
        D$(Y, W, z);
      }
    },
    createWriteStream($) {
      return r.createWriteStream($);
    },
    async readFileBytes($, X) {
      if (X === void 0) return ZV($);
      let J = await kb($, "r");
      try {
        let { size: Y } = await J.stat(),
          Q = Math.min(Y, X),
          W = Buffer.allocUnsafe(Q),
          z = 0;
        while (z < Q) {
          let { bytesRead: G } = await J.read(W, z, Q - z, z);
          if (G === 0) break;
          z += G;
        }
        return z < Q ? W.subarray(0, z) : W;
      } finally {
        await J.close();
      }
    },
  },
  ub = hb;
function z7() {
  return ub;
}
function mb($, X) {
  if ($.destroyed) return;
  $.write(X);
}
function bV($) {
  mb(process.stderr, $);
}
var _W = { verbose: 0, debug: 1, info: 2, warn: 3, error: 4 },
  pb = T6(() => {
    let $ = process.env.CLAUDE_CODE_DEBUG_LOG_LEVEL?.toLowerCase().trim();
    if ($ && Object.hasOwn(_W, $)) return $;
    return "debug";
  }),
  ib = !1;
function U7() {
  return typeof process < "u" && Array.isArray(process.argv)
    ? process.argv
    : [];
}
var xW = T6(() => {
  let $ = U7();
  return (
    ib ||
    X6(process.env.DEBUG) ||
    X6(process.env.DEBUG_SDK) ||
    $.includes("--debug") ||
    $.includes("-d") ||
    EV() ||
    $.some((X) => X.startsWith("--debug=")) ||
    SV() !== null
  );
});
var nb = T6(() => {
    let $ = U7().find((J) => J.startsWith("--debug="));
    if (!$) return null;
    let X = $.substring(8);
    return AV(X);
  }),
  EV = T6(() => {
    let $ = U7();
    return $.includes("--debug-to-stderr") || $.includes("-d2e");
  }),
  SV = T6(() => {
    let $ = U7();
    for (let X = 0; X < $.length; X++) {
      let J = $[X];
      if (J.startsWith("--debug-file=")) return J.substring(13);
      if (J === "--debug-file" && X + 1 < $.length) return $[X + 1];
    }
    return null;
  });
function rb($) {
  if (!xW()) return !1;
  if (
    typeof process > "u" ||
    typeof process.versions > "u" ||
    typeof process.versions.node > "u"
  )
    return !1;
  let X = nb();
  return IV($, X);
}
var ob = !1;
var G7 = null,
  kW = Promise.resolve(),
  TW = null;
function vV($) {
  return ((TW = fW($, `${CW()}.txt`)), TW);
}
async function tb($, X, J, Y) {
  if ($) await lb(X, { recursive: !0 }).catch(() => {});
  try {
    await RV(J, Y);
  } catch (Q) {
    if (!vW(Q)) throw Q;
    await RV(vV(J), Y);
  }
  kV();
}
function ab() {}
function sb() {
  if (!G7) {
    let $ = null;
    ((G7 = jV({
      writeFn: (X) => {
        let J = CV(),
          Y = PV(J),
          Q = $ !== Y;
        if ((($ = Y), xW())) {
          if (Q)
            try {
              z7().mkdirSync(Y);
            } catch {}
          try {
            z7().appendFileSync(J, X);
          } catch (W) {
            if (!vW(W)) throw W;
            z7().appendFileSync(vV(J), X);
          }
          kV();
          return;
        }
        kW = kW.then(tb.bind(null, Q, Y, J, X)).catch(ab);
      },
      flushIntervalMs: 1000,
      maxBufferSize: 100,
      immediateMode: xW(),
    })),
      MV(async () => {
        (G7?.dispose(), await kW);
      }));
  }
  return G7;
}
function S$($, { level: X } = { level: "debug" }) {
  if (_W[X] < _W[pb()]) return;
  if (!rb($)) return;
  if (
    ob &&
    $.includes(`
`)
  )
    $ = O$($);
  let Y = `${new Date().toISOString()} [${X.toUpperCase()}] ${$.trim()}
`;
  if (EV()) {
    bV(Y);
    return;
  }
  sb().write(Y);
}
function CV() {
  return (
    SV() ??
    TW ??
    process.env.CLAUDE_CODE_DEBUG_LOGS_DIR ??
    fW(y4(), "debug", `${CW()}.txt`)
  );
}
var kV = T6(async () => {
  try {
    let $ = CV(),
      X = PV($),
      J = fW(X, "latest");
    (await db(J).catch(() => {}), await cb($, J));
  } catch {}
});
var Kt = (() => {
  let $ = process.env.CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS;
  if ($ !== void 0) {
    let X = Number($);
    if (!Number.isNaN(X) && X >= 0) return X;
  }
  return 1 / 0;
})();
var eb = { [Symbol.dispose]() {} };
function $R() {
  return eb;
}
var R$ = $R;
function O$($, X, J) {
  let Q = [];
  try {
    const Y = q$(Q, R$`JSON.stringify(${$})`, 0);
    return JSON.stringify($, X, J);
  } catch (W) {
    var z = W,
      G = 1;
  } finally {
    D$(Q, z, G);
  }
}
var m$ = ($, X) => {
  let Y = [];
  try {
    const J = q$(Y, R$`JSON.parse(${$})`, 0);
    return typeof X > "u" ? JSON.parse($) : JSON.parse($, X);
  } catch (Q) {
    var W = Q,
      z = 1;
  } finally {
    D$(Y, W, z);
  }
};
function XR($) {
  let X = $.trim();
  return X.startsWith("{") && X.endsWith("}");
}
function _V($, X) {
  let J = { ...$ };
  if (X) {
    let Y =
        X.enabled === !0 && X.failIfUnavailable === void 0
          ? { ...X, failIfUnavailable: !0 }
          : X,
      Q = J.settings;
    if (Q && !XR(Q))
      throw Error(
        "Cannot use both a settings file path and the sandbox option. Include the sandbox configuration in your settings file instead.",
      );
    let W = { sandbox: Y };
    if (Q)
      try {
        W = { ...m$(Q), sandbox: Y };
      } catch {}
    J.settings = O$(W);
  }
  return J;
}
var YR = 2000,
  H7 = new Set(),
  xV = !1;
function WR() {
  for (let $ of H7) if (!$.killed) $.kill("SIGTERM");
}
function zR($) {
  if ((H7.add($), !xV)) ((xV = !0), process.on("exit", WR));
}
class q9 {
  options;
  process;
  processStdin;
  processStdout;
  ready = !1;
  abortController;
  exitError;
  exitListeners = [];
  abortHandler;
  pendingWrites = [];
  pendingEndInput = !1;
  spawnResolve;
  spawnReject;
  spawnPromise;
  constructor($) {
    this.options = $;
    if (((this.abortController = $.abortController || X0()), $.deferSpawn))
      ((this.spawnPromise = new Promise((X, J) => {
        ((this.spawnResolve = X), (this.spawnReject = J));
      })),
        this.spawnPromise.catch(() => {}));
    else this.initialize();
  }
  spawn() {
    try {
      this.initialize();
    } catch (X) {
      throw (this.spawnAbort(d4(X)), X);
    }
    let $ = this.pendingWrites;
    if (((this.pendingWrites = []), this.spawnResolve))
      (this.spawnResolve(),
        (this.spawnResolve = void 0),
        (this.spawnReject = void 0));
    for (let X of $) this.write(X);
    if (this.pendingEndInput)
      ((this.pendingEndInput = !1), this.processStdin?.end());
  }
  spawnAbort($) {
    if (this.spawnReject)
      (this.spawnReject($),
        (this.spawnReject = void 0),
        (this.spawnResolve = void 0),
        (this.pendingWrites = []));
  }
  updateEnv($) {
    if (this.options.env) Object.assign(this.options.env, $);
    else this.options.env = { ...$ };
  }
  updateResume($) {
    this.options.resume = $;
  }
  getDefaultExecutable() {
    return J0() ? "bun" : "node";
  }
  spawnLocalProcess($) {
    let { command: X, args: J, cwd: Y, env: Q, signal: W } = $,
      z =
        X6(Q.DEBUG_CLAUDE_AGENT_SDK) || this.options.stderr ? "pipe" : "ignore",
      G = JR(X, J, {
        cwd: Y,
        stdio: ["pipe", "pipe", z],
        signal: W,
        env: Q,
        windowsHide: !0,
      });
    if (X6(Q.DEBUG_CLAUDE_AGENT_SDK) || this.options.stderr)
      G.stderr.on("data", (H) => {
        let K = H.toString();
        if ((J6(K), this.options.stderr)) this.options.stderr(K);
      });
    return {
      stdin: G.stdin,
      stdout: G.stdout,
      get killed() {
        return G.killed;
      },
      get exitCode() {
        return G.exitCode;
      },
      kill: G.kill.bind(G),
      on: G.on.bind(G),
      once: G.once.bind(G),
      off: G.off.bind(G),
    };
  }
  initialize() {
    try {
      let {
          additionalDirectories: $ = [],
          agent: X,
          betas: J,
          cwd: Y,
          executable: Q = this.getDefaultExecutable(),
          executableArgs: W = [],
          extraArgs: z = {},
          pathToClaudeCodeExecutable: G,
          env: U = { ...process.env },
          thinkingConfig: H,
          maxTurns: K,
          maxBudgetUsd: N,
          taskBudget: V,
          model: O,
          fallbackModel: w,
          jsonSchema: B,
          permissionMode: F,
          allowDangerouslySkipPermissions: j,
          permissionPromptToolName: I,
          continueConversation: Z,
          resume: _,
          settingSources: T,
          allowedTools: B$ = [],
          disallowedTools: _$ = [],
          tools: V6,
          mcpServers: W4,
          strictMcpConfig: z4,
          canUseTool: t6,
          includePartialMessages: s1,
          plugins: _4,
          sandbox: e1,
        } = this.options,
        l = [
          "--output-format",
          "stream-json",
          "--verbose",
          "--input-format",
          "stream-json",
        ];
      if (H) {
        switch (H.type) {
          case "enabled":
            if (H.budgetTokens === void 0) l.push("--thinking", "adaptive");
            else l.push("--max-thinking-tokens", H.budgetTokens.toString());
            break;
          case "disabled":
            l.push("--thinking", "disabled");
            break;
          case "adaptive":
            l.push("--thinking", "adaptive");
            break;
        }
        if (H.type !== "disabled" && H.display)
          l.push("--thinking-display", H.display);
      }
      if (this.options.effort) l.push("--effort", this.options.effort);
      if (K) l.push("--max-turns", K.toString());
      if (N !== void 0) l.push("--max-budget-usd", N.toString());
      if (V) l.push("--task-budget", V.total.toString());
      if (O) l.push("--model", O);
      if (X) l.push("--agent", X);
      if (J && J.length > 0) l.push("--betas", J.join(","));
      if (B) l.push("--json-schema", O$(B));
      if (this.options.debugFile)
        l.push("--debug-file", this.options.debugFile);
      else if (this.options.debug) l.push("--debug");
      if (!this.options.debugFile && !this.options.spawnClaudeCodeProcess) {
        let g$ = DV();
        if (g$) l.push("--debug-file", g$);
      }
      if (t6) {
        if (I)
          throw Error(
            "canUseTool callback cannot be used with permissionPromptToolName. Please use one or the other.",
          );
        l.push("--permission-prompt-tool", "stdio");
      } else if (I) l.push("--permission-prompt-tool", I);
      if (Z) l.push("--continue");
      if (_) l.push("--resume", _);
      if (this.options.assistant) l.push("--assistant");
      if (this.options.channels && this.options.channels.length > 0)
        l.push("--channels", ...this.options.channels);
      if (B$.length > 0) l.push("--allowedTools", B$.join(","));
      if (_$.length > 0) l.push("--disallowedTools", _$.join(","));
      if (V6 !== void 0)
        if (Array.isArray(V6))
          if (V6.length === 0) l.push("--tools", "");
          else l.push("--tools", V6.join(","));
        else l.push("--tools", "default");
      if (W4 && Object.keys(W4).length > 0)
        l.push("--mcp-config", O$({ mcpServers: W4 }));
      if (T !== void 0) l.push(`--setting-sources=${T.join(",")}`);
      if (z4) l.push("--strict-mcp-config");
      if (F) l.push("--permission-mode", F);
      if (j) l.push("--allow-dangerously-skip-permissions");
      if (w) {
        if (O && w === O)
          throw Error(
            "Fallback model cannot be the same as the main model. Please specify a different model for fallbackModel option.",
          );
        l.push("--fallback-model", w);
      }
      if (this.options.includeHookEvents) l.push("--include-hook-events");
      if (s1) l.push("--include-partial-messages");
      if (this.options.sessionMirror) l.push("--session-mirror");
      for (let g$ of $) l.push("--add-dir", g$);
      if (_4 && _4.length > 0)
        for (let g$ of _4)
          if (g$.type === "local") l.push("--plugin-dir", g$.path);
          else throw Error(`Unsupported plugin type: ${g$.type}`);
      if (this.options.forkSession) l.push("--fork-session");
      if (this.options.resumeSessionAt)
        l.push("--resume-session-at", this.options.resumeSessionAt);
      if (this.options.sessionId)
        l.push("--session-id", this.options.sessionId);
      if (this.options.persistSession === !1)
        l.push("--no-session-persistence");
      if (this.options.managedSettings)
        l.push("--managed-settings", this.options.managedSettings);
      let F8 = { ...(z ?? {}) };
      if (this.options.settings) F8.settings = this.options.settings;
      let RJ = _V(F8, e1);
      for (let [g$, G4] of Object.entries(RJ))
        if (G4 === null) l.push(`--${g$}`);
        else l.push(`--${g$}`, G4);
      if (!U.CLAUDE_CODE_ENTRYPOINT) U.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
      if ((delete U.NODE_OPTIONS, X6(U.DEBUG_CLAUDE_AGENT_SDK))) U.DEBUG = "1";
      else delete U.DEBUG;
      let j8 = GR(G),
        $0 = j8 ? G : Q,
        L8 = j8 ? [...W, ...l] : [...W, G, ...l],
        PJ = {
          command: $0,
          args: L8,
          cwd: Y,
          env: U,
          signal: this.abortController.signal,
        };
      if (this.options.spawnClaudeCodeProcess)
        (J6(`Spawning Claude Code (custom): ${$0} ${L8.join(" ")}`),
          (this.process = this.options.spawnClaudeCodeProcess(PJ)));
      else
        (J6(`Spawning Claude Code: ${$0} ${L8.join(" ")}`),
          (this.process = this.spawnLocalProcess(PJ)));
      ((this.processStdin = this.process.stdin),
        (this.processStdout = this.process.stdout),
        zR(this.process),
        (this.abortHandler = () => {
          if (this.process && !this.process.killed)
            this.process.kill("SIGTERM");
        }),
        this.abortController.signal.addEventListener(
          "abort",
          this.abortHandler,
        ),
        this.process.on("error", (g$) => {
          if (((this.ready = !1), this.abortController.signal.aborted))
            this.exitError = new $6("Claude Code process aborted by user");
          else if (L0(g$)) {
            let G4 = j8
              ? `Claude Code native binary not found at ${G}. Please ensure Claude Code is installed via native installer or specify a valid path with options.pathToClaudeCodeExecutable.`
              : `Claude Code executable not found at ${G}. Is options.pathToClaudeCodeExecutable set?`;
            ((this.exitError = ReferenceError(G4)), J6(this.exitError.message));
          } else
            ((this.exitError = Error(
              `Failed to spawn Claude Code process: ${g$.message}`,
            )),
              J6(this.exitError.message));
        }),
        this.process.on("exit", (g$, G4) => {
          if (((this.ready = !1), this.abortController.signal.aborted))
            this.exitError = new $6("Claude Code process aborted by user");
          else {
            let O6 = this.getProcessExitError(g$, G4);
            if (O6) ((this.exitError = O6), J6(O6.message));
          }
        }),
        (this.ready = !0));
    } catch ($) {
      throw ((this.ready = !1), $);
    }
  }
  getProcessExitError($, X) {
    if ($ !== 0 && $ !== null)
      return Error(`Claude Code process exited with code ${$}`);
    else if (X) return Error(`Claude Code process terminated by signal ${X}`);
    return;
  }
  write($) {
    if (this.abortController.signal.aborted) throw new $6("Operation aborted");
    if (this.spawnResolve) {
      this.pendingWrites.push($);
      return;
    }
    if (!this.ready || !this.processStdin)
      throw Error("ProcessTransport is not ready for writing");
    if (this.processStdin.writableEnded) {
      J6("[ProcessTransport] Dropping write to ended stdin stream");
      return;
    }
    if (this.process?.killed || this.process?.exitCode !== null)
      throw Error("Cannot write to terminated process");
    if (this.exitError)
      throw Error(
        `Cannot write to process that exited with error: ${this.exitError.message}`,
      );
    J6(`[ProcessTransport] Writing to stdin: ${$.substring(0, 100)}`);
    try {
      if (!this.processStdin.write($))
        J6("[ProcessTransport] Write buffer full, data queued");
    } catch (X) {
      throw (
        (this.ready = !1),
        Error(`Failed to write to process stdin: ${j0(X)}`)
      );
    }
  }
  [Symbol.dispose]() {
    this.close();
  }
  close() {
    if (
      (this.spawnAbort(Error("Query closed before spawn")), this.processStdin)
    )
      (this.processStdin.end(), (this.processStdin = void 0));
    if (this.abortHandler)
      (this.abortController.signal.removeEventListener(
        "abort",
        this.abortHandler,
      ),
        (this.abortHandler = void 0));
    for (let { handler: X } of this.exitListeners) this.process?.off("exit", X);
    this.exitListeners = [];
    let $ = this.process;
    if ($ && !$.killed && $.exitCode === null)
      (setTimeout(
        (X) => {
          if (X.killed || X.exitCode !== null) return;
          (X.kill("SIGTERM"),
            setTimeout(
              (J) => {
                if (J.exitCode === null) J.kill("SIGKILL");
              },
              5000,
              X,
            ).unref());
        },
        YR,
        $,
      ).unref(),
        $.once("exit", () => H7.delete($)));
    else if ($) H7.delete($);
    this.ready = !1;
  }
  isReady() {
    return this.ready;
  }
  async *readMessages() {
    if (this.spawnPromise)
      (await this.spawnPromise, (this.spawnPromise = void 0));
    if (!this.processStdout)
      throw Error("ProcessTransport output stream not available");
    if (this.exitError) throw this.exitError;
    let $ = QR({ input: this.processStdout }),
      X = this.process
        ? (() => {
            let J = this.process,
              Y = () => $.close();
            return (J.on("error", Y), () => J.off("error", Y));
          })()
        : void 0;
    if (this.exitError) $.close();
    try {
      for await (let J of $)
        if (J.trim()) {
          let Y;
          try {
            Y = m$(J);
          } catch (Q) {
            J6(`Non-JSON stdout: ${J}`);
            continue;
          }
          yield Y;
        }
      if (this.exitError) throw this.exitError;
      await this.waitForExit();
    } catch (J) {
      throw J;
    } finally {
      (X?.(), $.close());
    }
  }
  endInput() {
    if (this.spawnResolve) {
      this.pendingEndInput = !0;
      return;
    }
    if (this.processStdin) this.processStdin.end();
  }
  getInputStream() {
    return this.processStdin;
  }
  onExit($) {
    if (!this.process) return () => {};
    let X = (J, Y) => {
      let Q = this.getProcessExitError(J, Y);
      $(Q);
    };
    return (
      this.process.on("exit", X),
      this.exitListeners.push({ callback: $, handler: X }),
      () => {
        if (this.process) this.process.off("exit", X);
        let J = this.exitListeners.findIndex((Y) => Y.handler === X);
        if (J !== -1) this.exitListeners.splice(J, 1);
      }
    );
  }
  async waitForExit() {
    if (!this.process) {
      if (this.exitError) throw this.exitError;
      return;
    }
    if (
      this.process.exitCode !== null ||
      this.process.killed ||
      this.exitError
    ) {
      if (this.exitError) throw this.exitError;
      return;
    }
    return new Promise(($, X) => {
      let J = (Q, W) => {
        if (this.abortController.signal.aborted) {
          X(new $6("Operation aborted"));
          return;
        }
        let z = this.getProcessExitError(Q, W);
        if (z) X(z);
        else $();
      };
      this.process.once("exit", J);
      let Y = (Q) => {
        (this.process.off("exit", J), X(Q));
      };
      (this.process.once("error", Y),
        this.process.once("exit", () => {
          this.process.off("error", Y);
        }));
    });
  }
}
function GR($) {
  return ![".js", ".mjs", ".tsx", ".ts", ".jsx"].some((J) => $.endsWith(J));
}
function K7($, X = process.platform, J = process.arch) {
  let Q = X === "win32" ? ".exe" : "",
    z = (
      X === "linux"
        ? [
            `@anthropic-ai/claude-agent-sdk-linux-${J}-musl`,
            `@anthropic-ai/claude-agent-sdk-linux-${J}`,
          ]
        : [`@anthropic-ai/claude-agent-sdk-${X}-${J}`]
    ).map((G) => `${G}/claude${Q}`);
  for (let G of z)
    try {
      return $(G);
    } catch {}
  return null;
}
class b1 {
  returned;
  queue = [];
  readResolve;
  readReject;
  isDone = !1;
  hasError;
  started = !1;
  constructor($) {
    this.returned = $;
  }
  [Symbol.asyncIterator]() {
    if (this.started) throw Error("Stream can only be iterated once");
    return ((this.started = !0), this);
  }
  next() {
    if (this.queue.length > 0)
      return Promise.resolve({ done: !1, value: this.queue.shift() });
    if (this.isDone) return Promise.resolve({ done: !0, value: void 0 });
    if (this.hasError) return Promise.reject(this.hasError);
    return new Promise(($, X) => {
      ((this.readResolve = $), (this.readReject = X));
    });
  }
  enqueue($) {
    if (this.readResolve) {
      let X = this.readResolve;
      ((this.readResolve = void 0),
        (this.readReject = void 0),
        X({ done: !1, value: $ }));
    } else this.queue.push($);
  }
  done() {
    if (((this.isDone = !0), this.readResolve)) {
      let $ = this.readResolve;
      ((this.readResolve = void 0),
        (this.readReject = void 0),
        $({ done: !0, value: void 0 }));
    }
  }
  error($) {
    if (((this.hasError = $), this.readReject)) {
      let X = this.readReject;
      ((this.readResolve = void 0), (this.readReject = void 0), X($));
    }
  }
  return() {
    if (((this.isDone = !0), this.returned)) this.returned();
    return Promise.resolve({ done: !0, value: void 0 });
  }
}
class yW {
  sendMcpMessage;
  isClosed = !1;
  constructor($) {
    this.sendMcpMessage = $;
  }
  onclose;
  onerror;
  onmessage;
  async start() {}
  async send($) {
    if (this.isClosed) throw Error("Transport is closed");
    this.sendMcpMessage($);
  }
  async close() {
    if (this.isClosed) return;
    ((this.isClosed = !0), this.onclose?.());
  }
}
class D9 {
  transport;
  isSingleUserTurn;
  canUseTool;
  hooks;
  abortController;
  jsonSchema;
  initConfig;
  onElicitation;
  getOAuthToken;
  pendingControlResponses = new Map();
  cleanupPerformed = !1;
  sdkMessages;
  inputStream = new b1();
  initialization;
  cancelControllers = new Map();
  hookCallbacks = new Map();
  nextCallbackId = 0;
  sdkMcpTransports = new Map();
  sdkMcpServerInstances = new Map();
  pendingMcpResponses = new Map();
  firstResultReceivedResolve;
  firstResultReceived = !1;
  lastErrorResultText;
  transcriptMirrorBatcher;
  cleanupCallbacks = [];
  cleanupPromise;
  setIsSingleUserTurn($) {
    this.isSingleUserTurn = $;
  }
  setTranscriptMirrorBatcher($) {
    this.transcriptMirrorBatcher = $;
  }
  reportMirrorError($, X) {
    let J = {
      type: "system",
      subtype: "mirror_error",
      error: X,
      key: $,
      uuid: B9(),
      session_id: $.sessionId,
    };
    this.inputStream.enqueue(J);
  }
  addCleanupCallback($) {
    if (this.cleanupPerformed) $();
    else this.cleanupCallbacks.push($);
  }
  isClosed() {
    return this.cleanupPerformed;
  }
  hasBidirectionalNeeds() {
    return (
      this.sdkMcpTransports.size > 0 ||
      (this.hooks !== void 0 && Object.keys(this.hooks).length > 0) ||
      this.canUseTool !== void 0 ||
      this.onElicitation !== void 0 ||
      this.getOAuthToken !== void 0
    );
  }
  constructor($, X, J, Y, Q, W = new Map(), z, G, U, H) {
    this.transport = $;
    this.isSingleUserTurn = X;
    this.canUseTool = J;
    this.hooks = Y;
    this.abortController = Q;
    this.jsonSchema = z;
    this.initConfig = G;
    this.onElicitation = U;
    this.getOAuthToken = H;
    for (let [K, N] of W) this.connectSdkMcpServer(K, N);
    ((this.sdkMessages = this.readSdkMessages()),
      this.readMessages(),
      (this.initialization = this.initialize()),
      this.initialization.catch(() => {}));
  }
  setError($) {
    this.inputStream.error($);
  }
  async stopTask($) {
    await this.request({ subtype: "stop_task", task_id: $ });
  }
  close() {
    this.cleanup();
  }
  cleanup($) {
    if (this.cleanupPromise) return this.cleanupPromise;
    return (
      (this.cleanupPerformed = !0),
      (this.cleanupPromise = this.performCleanup($)),
      this.cleanupPromise
    );
  }
  async performCleanup($) {
    for (let X of this.cleanupCallbacks)
      try {
        X();
      } catch {}
    if (((this.cleanupCallbacks = []), this.transcriptMirrorBatcher))
      try {
        await this.transcriptMirrorBatcher.flush();
      } catch {}
    try {
      for (let J of this.cancelControllers.values()) J.abort();
      (this.cancelControllers.clear(), this.transport.close());
      let X = $ ?? Error("Query closed before response received");
      for (let { reject: J } of this.pendingControlResponses.values()) J(X);
      this.pendingControlResponses.clear();
      for (let { reject: J } of this.pendingMcpResponses.values()) J(X);
      (this.pendingMcpResponses.clear(), this.hookCallbacks.clear());
      for (let J of this.sdkMcpTransports.values()) J.close().catch(() => {});
      if ((this.sdkMcpTransports.clear(), $)) this.inputStream.error($);
      else this.inputStream.done();
    } catch (X) {}
  }
  next(...[$]) {
    return this.sdkMessages.next(...[$]);
  }
  async return($) {
    return (await this.cleanup(), this.sdkMessages.return($));
  }
  async throw($) {
    return (await this.cleanup(), this.sdkMessages.throw($));
  }
  [Symbol.asyncIterator]() {
    return this.sdkMessages;
  }
  async [Symbol.asyncDispose]() {
    await this.cleanup();
  }
  async readMessages() {
    try {
      for await (let $ of this.transport.readMessages()) {
        if ($.type === "control_response") {
          let X = this.pendingControlResponses.get($.response.request_id);
          if (X) X.handler($.response);
          continue;
        } else if ($.type === "control_request") {
          this.handleControlRequest($);
          continue;
        } else if ($.type === "control_cancel_request") {
          this.handleControlCancelRequest($);
          continue;
        } else if ($.type === "keep_alive") continue;
        else if ($.type === "transcript_mirror") {
          this.transcriptMirrorBatcher?.enqueue($.filePath, $.entries);
          continue;
        }
        if ($.type === "system" && $.subtype === "post_turn_summary") {
          this.inputStream.enqueue($);
          continue;
        }
        if ($.type === "result") {
          if (this.transcriptMirrorBatcher)
            await this.transcriptMirrorBatcher.flush();
          if (
            ((this.lastErrorResultText = $.is_error
              ? $.subtype === "success"
                ? $.result
                : $.errors.join("; ")
              : void 0),
            (this.firstResultReceived = !0),
            this.firstResultReceivedResolve)
          )
            this.firstResultReceivedResolve();
          if (this.isSingleUserTurn)
            (S$(
              "[Query.readMessages] First result received for single-turn query, closing stdin",
            ),
              this.transport.endInput());
        } else if (
          !($.type === "system" && $.subtype === "session_state_changed")
        )
          this.lastErrorResultText = void 0;
        this.inputStream.enqueue($);
      }
      if (this.transcriptMirrorBatcher)
        await this.transcriptMirrorBatcher.flush();
      if (this.firstResultReceivedResolve) this.firstResultReceivedResolve();
      (this.inputStream.done(), this.cleanup());
    } catch ($) {
      if (this.transcriptMirrorBatcher)
        await this.transcriptMirrorBatcher.flush();
      if (this.firstResultReceivedResolve) this.firstResultReceivedResolve();
      if (this.lastErrorResultText !== void 0 && !($ instanceof $6)) {
        let X = Error(
          `Claude Code returned an error result: ${this.lastErrorResultText}`,
        );
        (S$(
          `[Query.readMessages] Replacing exit error with result text. Original: ${j0($)}`,
        ),
          this.inputStream.error(X),
          this.cleanup(X));
        return;
      }
      (this.inputStream.error($), this.cleanup($));
    }
  }
  async handleControlRequest($) {
    let X = new AbortController();
    this.cancelControllers.set($.request_id, X);
    try {
      let J = await this.processControlRequest($, X.signal);
      if (this.cleanupPerformed) return;
      let Y = {
        type: "control_response",
        response: { subtype: "success", request_id: $.request_id, response: J },
      };
      await Promise.resolve(
        this.transport.write(
          O$(Y) +
            `
`,
        ),
      );
    } catch (J) {
      if (this.cleanupPerformed) return;
      let Y = {
        type: "control_response",
        response: { subtype: "error", request_id: $.request_id, error: j0(J) },
      };
      try {
        await Promise.resolve(
          this.transport.write(
            O$(Y) +
              `
`,
          ),
        );
      } catch (Q) {
        S$(
          `[Query.handleControlRequest] Error-response write failed: ${j0(Q)}`,
          { level: "error" },
        );
      }
    } finally {
      this.cancelControllers.delete($.request_id);
    }
  }
  handleControlCancelRequest($) {
    let X = this.cancelControllers.get($.request_id);
    if (X) (X.abort(), this.cancelControllers.delete($.request_id));
  }
  async processControlRequest($, X) {
    if ($.request.subtype === "can_use_tool") {
      if (!this.canUseTool) throw Error("canUseTool callback is not provided.");
      return {
        ...(await this.canUseTool($.request.tool_name, $.request.input, {
          signal: X,
          suggestions: $.request.permission_suggestions,
          blockedPath: $.request.blocked_path,
          decisionReason: $.request.decision_reason,
          title: $.request.title,
          displayName: $.request.display_name,
          description: $.request.description,
          toolUseID: $.request.tool_use_id,
          agentID: $.request.agent_id,
        })),
        toolUseID: $.request.tool_use_id,
      };
    } else if ($.request.subtype === "hook_callback")
      return await this.handleHookCallbacks(
        $.request.callback_id,
        $.request.input,
        $.request.tool_use_id,
        X,
      );
    else if ($.request.subtype === "mcp_message") {
      let J = $.request,
        Y = this.sdkMcpTransports.get(J.server_name);
      if (!Y) throw Error(`SDK MCP server not found: ${J.server_name}`);
      if ("method" in J.message && "id" in J.message && J.message.id !== null)
        return {
          mcp_response: await this.handleMcpControlRequest(J.server_name, J, Y),
        };
      else {
        if (Y.onmessage) Y.onmessage(J.message);
        return { mcp_response: { jsonrpc: "2.0", result: {}, id: 0 } };
      }
    } else if ($.request.subtype === "elicitation") {
      let J = $.request;
      if (this.onElicitation)
        return await this.onElicitation(
          {
            serverName: J.mcp_server_name,
            message: J.message,
            mode: J.mode,
            url: J.url,
            elicitationId: J.elicitation_id,
            requestedSchema: J.requested_schema,
            title: J.title,
            displayName: J.display_name,
            description: J.description,
          },
          { signal: X },
        );
      return { action: "decline" };
    } else if ($.request.subtype === "oauth_token_refresh") {
      if (!this.getOAuthToken)
        throw Error("getOAuthToken callback is not provided.");
      return { accessToken: (await this.getOAuthToken({ signal: X })) ?? null };
    }
    throw Error("Unsupported control request subtype: " + $.request.subtype);
  }
  async *readSdkMessages() {
    try {
      for await (let $ of this.inputStream) yield $;
    } finally {
      await this.cleanup();
    }
  }
  async initialize() {
    let $;
    if (this.hooks) {
      $ = {};
      for (let [Q, W] of Object.entries(this.hooks))
        if (W.length > 0)
          $[Q] = W.map((z) => {
            let G = [];
            for (let U of z.hooks) {
              let H = `hook_${this.nextCallbackId++}`;
              (this.hookCallbacks.set(H, U), G.push(H));
            }
            return {
              matcher: z.matcher,
              hookCallbackIds: G,
              timeout: z.timeout,
            };
          });
    }
    let X =
        this.sdkMcpTransports.size > 0
          ? Array.from(this.sdkMcpTransports.keys())
          : void 0,
      J = {
        subtype: "initialize",
        hooks: $,
        sdkMcpServers: X,
        jsonSchema: this.jsonSchema,
        systemPrompt:
          typeof this.initConfig?.systemPrompt === "string"
            ? [this.initConfig.systemPrompt]
            : this.initConfig?.systemPrompt,
        appendSystemPrompt: this.initConfig?.appendSystemPrompt,
        planModeInstructions: this.initConfig?.planModeInstructions,
        appendSubagentSystemPrompt: this.initConfig?.appendSubagentSystemPrompt,
        excludeDynamicSections: this.initConfig?.excludeDynamicSections,
        agents: this.initConfig?.agents,
        title: this.initConfig?.title,
        promptSuggestions: this.initConfig?.promptSuggestions,
        agentProgressSummaries: this.initConfig?.agentProgressSummaries,
      };
    return (await this.request(J)).response;
  }
  async interrupt() {
    await this.request({ subtype: "interrupt" });
  }
  async setPermissionMode($) {
    await this.request({ subtype: "set_permission_mode", mode: $ });
  }
  async setModel($) {
    await this.request({ subtype: "set_model", model: $ });
  }
  async setMaxThinkingTokens($) {
    await this.request({
      subtype: "set_max_thinking_tokens",
      max_thinking_tokens: $,
    });
  }
  async applyFlagSettings($) {
    await this.request({ subtype: "apply_flag_settings", settings: $ });
  }
  async getSettings() {
    return (await this.request({ subtype: "get_settings" })).response;
  }
  async rewindFiles($, X) {
    return (
      await this.request({
        subtype: "rewind_files",
        user_message_id: $,
        dry_run: X?.dryRun,
      })
    ).response;
  }
  async cancelAsyncMessage($) {
    return (
      await this.request({ subtype: "cancel_async_message", message_uuid: $ })
    ).response.cancelled;
  }
  async seedReadState($, X) {
    await this.request({ subtype: "seed_read_state", path: $, mtime: X });
  }
  async enableRemoteControl($, X) {
    return (
      await this.request({
        subtype: "remote_control",
        enabled: $,
        ...(X !== void 0 && { name: X }),
      })
    ).response;
  }
  async generateSessionTitle($, X) {
    return (
      await this.request({
        subtype: "generate_session_title",
        description: $,
        persist: X?.persist,
      })
    ).response.title;
  }
  async askSideQuestion($) {
    let J = (await this.request({ subtype: "side_question", question: $ }))
      .response;
    return J.response === null
      ? null
      : { response: J.response, synthetic: J.synthetic ?? !1 };
  }
  async launchUltrareview($, X) {
    return (
      await this.request({
        subtype: "ultrareview_launch",
        args: $,
        confirm: X?.confirm ?? !1,
      })
    ).response;
  }
  async messageRated($) {
    await this.request({
      subtype: "message_rated",
      messageUuid: $.messageUuid,
      sentiment: $.sentiment,
      surface: $.surface,
      cleared: $.cleared ?? !1,
    });
  }
  processPendingPermissionRequests($) {
    for (let X of $)
      if (X.request.subtype === "can_use_tool")
        this.handleControlRequest(X).catch(() => {});
  }
  request($) {
    let X = Math.random().toString(36).substring(2, 15),
      J = { request_id: X, type: "control_request", request: $ };
    return new Promise((Y, Q) => {
      (this.pendingControlResponses.set(X, {
        handler: (W) => {
          if ((this.pendingControlResponses.delete(X), W.subtype === "success"))
            Y(W);
          else if ((Q(Error(W.error)), W.pending_permission_requests))
            this.processPendingPermissionRequests(
              W.pending_permission_requests,
            );
        },
        reject: Q,
      }),
        Promise.resolve(
          this.transport.write(
            O$(J) +
              `
`,
          ),
        ).catch((W) => {
          (this.pendingControlResponses.delete(X), Q(W));
        }));
    });
  }
  initializationResult() {
    return this.initialization;
  }
  async supportedCommands() {
    return (await this.initialization).commands;
  }
  async supportedModels() {
    return (await this.initialization).models;
  }
  async supportedAgents() {
    return (await this.initialization).agents;
  }
  async reconnectMcpServer($) {
    await this.request({ subtype: "mcp_reconnect", serverName: $ });
  }
  async toggleMcpServer($, X) {
    await this.request({ subtype: "mcp_toggle", serverName: $, enabled: X });
  }
  async enableChannel($) {
    await this.request({ subtype: "channel_enable", serverName: $ });
  }
  async mcpAuthenticate($) {
    return (await this.request({ subtype: "mcp_authenticate", serverName: $ }))
      .response;
  }
  async mcpClearAuth($) {
    return (await this.request({ subtype: "mcp_clear_auth", serverName: $ }))
      .response;
  }
  async mcpSubmitOAuthCallbackUrl($, X) {
    return (
      await this.request({
        subtype: "mcp_oauth_callback_url",
        serverName: $,
        callbackUrl: X,
      })
    ).response;
  }
  async claudeAuthenticate($) {
    return (
      await this.request({
        subtype: "claude_authenticate",
        loginWithClaudeAi: $,
      })
    ).response;
  }
  async claudeOAuthCallback($, X) {
    return (
      await this.request({
        subtype: "claude_oauth_callback",
        authorizationCode: $,
        state: X,
      })
    ).response;
  }
  async claudeOAuthWaitForCompletion() {
    return (await this.request({ subtype: "claude_oauth_wait_for_completion" }))
      .response;
  }
  async mcpServerStatus() {
    return (await this.request({ subtype: "mcp_status" })).response.mcpServers;
  }
  async getContextUsage() {
    return (await this.request({ subtype: "get_context_usage" })).response;
  }
  async readFile($, X) {
    try {
      return (
        await this.request({
          subtype: "read_file",
          path: $,
          max_bytes: X?.maxBytes,
        })
      ).response;
    } catch {
      return null;
    }
  }
  async reloadPlugins() {
    return (await this.request({ subtype: "reload_plugins" })).response;
  }
  async setMcpServers($) {
    let X = {},
      J = {};
    for (let [G, U] of Object.entries($))
      if (U.type === "sdk" && "instance" in U) X[G] = U.instance;
      else J[G] = U;
    let Y = new Set(this.sdkMcpServerInstances.keys()),
      Q = new Set(Object.keys(X));
    for (let G of Y) if (!Q.has(G)) await this.disconnectSdkMcpServer(G);
    for (let [G, U] of Object.entries(X))
      if (!Y.has(G)) this.connectSdkMcpServer(G, U);
    let W = {};
    for (let G of Object.keys(X)) W[G] = { type: "sdk", name: G };
    return (
      await this.request({
        subtype: "mcp_set_servers",
        servers: { ...J, ...W },
      })
    ).response;
  }
  async accountInfo() {
    return (await this.initialization).account;
  }
  async streamInput($) {
    S$("[Query.streamInput] Starting to process input stream");
    try {
      let X = 0;
      for await (let J of $) {
        if (
          (X++,
          S$(`[Query.streamInput] Processing message ${X}: ${J.type}`),
          this.abortController?.signal.aborted)
        )
          break;
        await Promise.resolve(
          this.transport.write(
            O$(J) +
              `
`,
          ),
        );
      }
      if (
        (S$(
          `[Query.streamInput] Finished processing ${X} messages from input stream`,
        ),
        X > 0 && this.hasBidirectionalNeeds())
      )
        (S$(
          "[Query.streamInput] Has bidirectional needs, waiting for first result",
        ),
          await this.waitForFirstResult());
      (S$("[Query] Calling transport.endInput() to close stdin to CLI process"),
        this.transport.endInput());
    } catch (X) {
      if (!(X instanceof $6)) throw X;
    }
  }
  waitForFirstResult() {
    if (this.firstResultReceived)
      return (
        S$(
          "[Query.waitForFirstResult] Result already received, returning immediately",
        ),
        Promise.resolve()
      );
    return new Promise(($) => {
      if (this.abortController?.signal.aborted) {
        $();
        return;
      }
      (this.abortController?.signal.addEventListener("abort", () => $(), {
        once: !0,
      }),
        (this.firstResultReceivedResolve = $));
    });
  }
  handleHookCallbacks($, X, J, Y) {
    let Q = this.hookCallbacks.get($);
    if (!Q) throw Error(`No hook callback found for ID: ${$}`);
    return Q(X, J, { signal: Y });
  }
  connectSdkMcpServer($, X) {
    let J = new yW((Y) => this.sendMcpServerMessageToCli($, Y));
    (this.sdkMcpTransports.set($, J),
      this.sdkMcpServerInstances.set($, X),
      X.connect(J).catch((Y) => {
        if (this.sdkMcpTransports.get($) === J) this.sdkMcpTransports.delete($);
        if (this.sdkMcpServerInstances.get($) === X)
          this.sdkMcpServerInstances.delete($);
        S$(
          `[Query.connectSdkMcpServer] Failed to connect MCP server '${$}': ${Y}`,
          { level: "error" },
        );
      }));
  }
  async disconnectSdkMcpServer($) {
    let X = this.sdkMcpTransports.get($);
    if (X) (await X.close(), this.sdkMcpTransports.delete($));
    this.sdkMcpServerInstances.delete($);
  }
  sendMcpServerMessageToCli($, X) {
    if ("id" in X && X.id !== null && X.id !== void 0) {
      let Y = `${$}:${X.id}`,
        Q = this.pendingMcpResponses.get(Y);
      if (Q) {
        (Q.resolve(X), this.pendingMcpResponses.delete(Y));
        return;
      }
    }
    let J = {
      type: "control_request",
      request_id: B9(),
      request: { subtype: "mcp_message", server_name: $, message: X },
    };
    Promise.resolve(
      this.transport.write(
        O$(J) +
          `
`,
      ),
    ).catch((Y) => {
      S$(`[Query.sendMcpServerMessageToCli] Transport write failed: ${Y}`, {
        level: "error",
      });
    });
  }
  handleMcpControlRequest($, X, J) {
    let Y = "id" in X.message ? X.message.id : null,
      Q = `${$}:${Y}`;
    return new Promise((W, z) => {
      let G = () => {
          this.pendingMcpResponses.delete(Q);
        },
        U = (K) => {
          (G(), W(K));
        },
        H = (K) => {
          (G(), z(K));
        };
      if (
        (this.pendingMcpResponses.set(Q, { resolve: U, reject: H }),
        J.onmessage)
      )
        J.onmessage(X.message);
      else {
        (G(), z(Error("No message handler registered")));
        return;
      }
    });
  }
}
var gW = 500,
  hW = 1048576;
class uW {
  send;
  sendTimeoutMs;
  onError;
  maxPendingEntries;
  maxPendingBytes;
  pending = [];
  pendingEntries = 0;
  pendingBytes = 0;
  flushPromise = null;
  constructor($, X = 60000, J, Y = gW, Q = hW) {
    this.send = $;
    this.sendTimeoutMs = X;
    this.onError = J;
    this.maxPendingEntries = Y;
    this.maxPendingBytes = Q;
  }
  enqueue($, X) {
    let J = O$(X).length;
    if (
      (this.pending.push({ filePath: $, entries: X, bytes: J }),
      (this.pendingEntries += X.length),
      (this.pendingBytes += J),
      this.pendingEntries > this.maxPendingEntries ||
        this.pendingBytes > this.maxPendingBytes)
    )
      ((this.flushPromise = this.drain()), this.flushPromise.catch(() => {}));
  }
  async flush() {
    let $ = this.drain();
    if (((this.flushPromise = $), await $, this.flushPromise === $))
      this.flushPromise = null;
  }
  async drain() {
    let $ = this.flushPromise,
      X = this.pending.splice(0);
    if (((this.pendingEntries = 0), (this.pendingBytes = 0), $)) await $;
    if (X.length === 0) return;
    await this.doFlush(X);
  }
  async doFlush($) {
    let X = new Map();
    for (let J of $) {
      let Y = X.get(J.filePath);
      if (Y) Y.push(...J.entries);
      else X.set(J.filePath, J.entries.slice());
    }
    for (let [J, Y] of X)
      try {
        await U4(
          this.send(J, Y),
          this.sendTimeoutMs,
          `SessionStore.append() timed out after ${this.sendTimeoutMs}ms for ${J}`,
        );
      } catch (Q) {
        S$(`[TranscriptMirrorBatcher] flush failed for ${J}: ${Q}`, {
          level: "error",
        });
        try {
          this.onError?.(J, d4(Q));
        } catch (W) {
          S$(`[TranscriptMirrorBatcher] onError callback threw: ${W}`, {
            level: "error",
          });
        }
      }
  }
}
var F7 = EJ(xz(), 1);
import { createRequire as ZE } from "module";
import { fileURLToPath as bE } from "url";
var RE = 5000;
class Tz {
  closed = !1;
  inputStream;
  query;
  queryIterator = null;
  abortController;
  _sessionId = null;
  get sessionId() {
    if (this._sessionId === null)
      throw Error("Session ID not available until after receiving messages");
    return this._sessionId;
  }
  constructor($) {
    if ($.resume) this._sessionId = $.resume;
    this.inputStream = new b1();
    let X = $.pathToClaudeCodeExecutable;
    if (!X) {
      let W = bE(import.meta.url),
        z = ZE(W),
        G = K7((U) => z.resolve(U));
      if (G) X = G;
      else
        try {
          X = z.resolve("./cli.js");
        } catch {
          throw Error(
            `Native CLI binary for ${process.platform}-${process.arch} not found. Reinstall @anthropic-ai/claude-agent-sdk without --omit=optional, or set options.pathToClaudeCodeExecutable.`,
          );
        }
    }
    let J = { ...($.env ?? process.env) };
    if (!J.CLAUDE_CODE_ENTRYPOINT) J.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
    let Y = {};
    if ((F7.propagation.inject(F7.context.active(), Y), "traceparent" in Y)) {
      for (let W of ["TRACEPARENT", "TRACESTATE"])
        if (!(W in ($.env ?? {}))) delete J[W];
    }
    for (let [W, z] of Object.entries(Y)) {
      let G = W.toUpperCase();
      if (!(G in ($.env ?? {}))) J[G] = z;
    }
    this.abortController = X0();
    let Q = new q9({
      abortController: this.abortController,
      pathToClaudeCodeExecutable: X,
      cwd: $.cwd,
      env: J,
      executable: $.executable ?? (J0() ? "bun" : "node"),
      executableArgs: $.executableArgs ?? [],
      extraArgs: {},
      thinkingConfig: void 0,
      maxTurns: void 0,
      maxBudgetUsd: void 0,
      model: $.model,
      fallbackModel: void 0,
      permissionMode: $.permissionMode ?? "default",
      allowDangerouslySkipPermissions: $.allowDangerouslySkipPermissions ?? !1,
      continueConversation: !1,
      resume: $.resume,
      settingSources: $.settingSources ?? [],
      allowedTools: $.allowedTools ?? [],
      disallowedTools: $.disallowedTools ?? [],
      mcpServers: {},
      strictMcpConfig: !1,
      canUseTool: !!$.canUseTool,
      hooks: !!$.hooks,
      includePartialMessages: !1,
      forkSession: !1,
      resumeSessionAt: void 0,
    });
    ((this.query = new D9(
      Q,
      !1,
      $.canUseTool,
      $.hooks,
      this.abortController,
      new Map(),
      void 0,
      { planModeInstructions: $.planModeInstructions },
    )),
      this.query
        .streamInput(this.inputStream)
        .catch((W) => this.abortController.abort(W)));
  }
  async send($) {
    if (this.closed) throw Error("Cannot send to closed session");
    let X =
      typeof $ === "string"
        ? {
            type: "user",
            session_id: "",
            message: { role: "user", content: [{ type: "text", text: $ }] },
            parent_tool_use_id: null,
          }
        : $;
    this.inputStream.enqueue(X);
  }
  async *stream() {
    if (!this.queryIterator)
      this.queryIterator = this.query[Symbol.asyncIterator]();
    while (!0) {
      let { value: $, done: X } = await this.queryIterator.next();
      if (X) return;
      if ($.type === "system" && $.subtype === "init")
        this._sessionId = $.session_id;
      if ((yield $, $.type === "result")) return;
    }
  }
  close() {
    if (this.closed) return;
    ((this.closed = !0),
      this.inputStream.done(),
      setTimeout(() => {
        if (!this.abortController.signal.aborted) this.abortController.abort();
      }, RE).unref());
  }
  async [Symbol.asyncDispose]() {
    this.close();
  }
}
function fz($) {
  return new Tz($);
}
function vB($, X) {
  return new Tz({ ...X, resume: $ });
}
var pY = EJ(xz(), 1);
function PE($) {
  let X = $,
    J = "",
    Y = 0,
    Q = 10;
  while (X !== J && Y < Q)
    ((J = X),
      (X = X.normalize("NFKC")),
      (X = X.replace(/[\p{Cf}\p{Co}\p{Cn}]/gu, "")),
      (X = X.replace(/[\u200B-\u200F]/g, "")
        .replace(/[\u202A-\u202E]/g, "")
        .replace(/[\u2066-\u2069]/g, "")
        .replace(/[\uFEFF]/g, "")
        .replace(/[\uE000-\uF8FF]/g, "")),
      Y++);
  if (Y >= Q)
    throw Error(
      `Unicode sanitization reached maximum iterations (${Q}) for input: ${$.slice(0, 100)}`,
    );
  return X;
}
function v1($) {
  if (typeof $ === "string") return PE($);
  if (Array.isArray($)) return $.map(v1);
  if ($ !== null && typeof $ === "object") {
    let X = {};
    for (let [J, Y] of Object.entries($)) X[v1(J)] = v1(Y);
    return X;
  }
  return $;
}
import { readFile as rE } from "fs/promises";
import { once as kB } from "events";
import { createWriteStream as CE } from "fs";
import {
  open as _B,
  readdir as yz,
  realpath as kE,
  stat as _E,
} from "fs/promises";
import { join as Z9 } from "path";
import { execFile as EE } from "child_process";
import { promisify as SE } from "util";
var vE = SE(EE);
async function q4($) {
  try {
    let { stdout: X } = await vE("git", ["worktree", "list", "--porcelain"], {
      cwd: $,
      timeout: 5000,
    });
    if (!X) return [];
    return X.split(
      `
`,
    )
      .filter((J) => J.startsWith("worktree "))
      .map((J) => J.slice(9).normalize("NFC"));
  } catch {
    return [];
  }
}
function CB($) {
  let X = 0;
  for (let J = 0; J < $.length; J++) X = ((X << 5) - X + $.charCodeAt(J)) | 0;
  return X;
}
var g6 = 65536,
  xE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function H$($) {
  if (typeof $ !== "string") return null;
  return xE.test($) ? $ : null;
}
function xB($) {
  if (!$.includes("\\")) return $;
  try {
    return JSON.parse(`"${$}"`);
  } catch {
    return $;
  }
}
function M7($, X) {
  let J = [`"${X}":"`, `"${X}": "`];
  for (let Y of J) {
    let Q = $.indexOf(Y);
    if (Q < 0) continue;
    let W = Q + Y.length,
      z = W;
    while (z < $.length) {
      if ($[z] === "\\") {
        z += 2;
        continue;
      }
      if ($[z] === '"') return xB($.slice(W, z));
      z++;
    }
  }
  return;
}
function Y6($, X) {
  let J = [`"${X}":"`, `"${X}": "`],
    Y,
    Q = -1;
  for (let W of J) {
    let z = 0;
    while (!0) {
      let G = $.indexOf(W, z);
      if (G < 0) break;
      let U = G + W.length,
        H = U;
      while (H < $.length) {
        if ($[H] === "\\") {
          H += 2;
          continue;
        }
        if ($[H] === '"') {
          if (G > Q) ((Y = xB($.slice(U, H))), (Q = G));
          break;
        }
        H++;
      }
      z = H + 1;
    }
  }
  return Y;
}
async function R9($, X) {
  let J = CE($, { mode: 384 });
  try {
    for (let Y of X)
      if (
        !J.write(
          JSON.stringify(Y) +
            `
`,
        )
      )
        await kB(J, "drain");
    (J.end(), await kB(J, "finish"));
  } catch (Y) {
    throw (J.destroy(), Y);
  }
}
function A7($) {
  let X = 0,
    J = { commandFallback: "" };
  while (X < $.length) {
    let Y = $.indexOf(
        `
`,
        X,
      ),
      Q = Y >= 0 ? $.slice(X, Y) : $.slice(X);
    if (
      ((X = Y >= 0 ? Y + 1 : $.length),
      !Q.includes('"type":"user"') && !Q.includes('"type": "user"'))
    )
      continue;
    if (Q.includes('"tool_result"')) continue;
    if (Q.includes('"isMeta":true') || Q.includes('"isMeta": true')) continue;
    if (
      Q.includes('"isCompactSummary":true') ||
      Q.includes('"isCompactSummary": true')
    )
      continue;
    try {
      let W = JSON.parse(Q),
        z = b8(W, J);
      if (z !== void 0) return z;
    } catch {
      continue;
    }
  }
  return J.commandFallback;
}
function TB($) {
  let X = { commandFallback: "" };
  for (let J of $) {
    if (typeof J !== "object" || J === null) continue;
    let Y = b8(J, X);
    if (Y !== void 0) return Y;
  }
  return X.commandFallback;
}
async function I7($) {
  try {
    let X = await _B($, "r");
    try {
      let J = await X.stat(),
        Y = Buffer.allocUnsafe(g6),
        Q = await X.read(Y, 0, g6, 0);
      if (Q.bytesRead === 0) return null;
      let W = Y.toString("utf8", 0, Q.bytesRead),
        z = Math.max(0, J.size - g6),
        G = W;
      if (z > 0) {
        let U = await X.read(Y, 0, g6, z);
        G = Y.toString("utf8", 0, U.bytesRead);
      }
      return { mtime: J.mtime.getTime(), size: J.size, head: W, tail: G };
    } finally {
      await X.close();
    }
  } catch {
    return null;
  }
}
var R0 = 200;
function TE($) {
  return Math.abs(CB($)).toString(36);
}
function k1($) {
  let X = $.replace(/[^a-zA-Z0-9]/g, "-");
  if (X.length <= R0) return X;
  return `${X.slice(0, R0)}-${TE($)}`;
}
function h6() {
  return Z9(y4(), "projects");
}
function fE($) {
  return Z9(h6(), k1($));
}
async function p4($) {
  try {
    return (await kE($)).normalize("NFC");
  } catch {
    return $.normalize("NFC");
  }
}
async function Q6($) {
  let X = fE($),
    J = [];
  try {
    (await yz(X), J.push(X));
  } catch {}
  let Y = k1($);
  if (Y.length <= R0) return J;
  let Q = Y.slice(0, R0) + "-",
    W = h6();
  try {
    for (let z of await yz(W, { withFileTypes: !0 })) {
      if (!z.isDirectory() || !z.name.startsWith(Q)) continue;
      let G = Z9(W, z.name);
      if (G !== X) J.push(G);
    }
  } catch {}
  return J;
}
async function i4($, X) {
  let J = `${$}.jsonl`;
  async function Y(z, G) {
    let U = Z9(z, J);
    try {
      let H = await _E(U);
      if (H.size > 0) return { filePath: U, projectPath: G, fileSize: H.size };
    } catch {}
    return;
  }
  if (X) {
    let z = await p4(X);
    for (let U of await Q6(z)) {
      let H = await Y(U, z);
      if (H) return H;
    }
    let G;
    try {
      G = await q4(z);
    } catch {
      G = [];
    }
    for (let U of G) {
      if (U === z) continue;
      for (let H of await Q6(U)) {
        let K = await Y(H, U);
        if (K) return K;
      }
    }
    return;
  }
  let Q = h6(),
    W;
  try {
    W = await yz(Q);
  } catch {
    return;
  }
  for (let z of W) {
    let G = await Y(Z9(Q, z), void 0);
    if (G) return G;
  }
  return;
}
var yE = 1048576,
  fB = 5242880,
  gE;
function hE() {
  return (gE ??= Buffer.from('"compact_boundary"'));
}
function yB($) {
  try {
    let X = JSON.parse($);
    if (X.type !== "system" || X.subtype !== "compact_boundary") return null;
    return {
      hasPreservedSegment: Boolean(X.compactMetadata?.preservedSegment),
    };
  } catch {
    return null;
  }
}
function C1($, X, J, Y) {
  let Q = Y - J;
  if (Q <= 0) return;
  if ($.len + Q > $.buf.length) {
    let W = Buffer.allocUnsafe(
      Math.min(Math.max($.buf.length * 2, $.len + Q), $.cap),
    );
    ($.buf.copy(W, 0, 0, $.len), ($.buf = W));
  }
  (X.copy($.buf, $.len, J, Y), ($.len += Q));
}
function j7($, X, J, Y) {
  return Y - J >= X.length && $.compare(X, 0, X.length, J, J + X.length) === 0;
}
var L7 = Buffer.from('{"type":"attribution-snapshot"'),
  uE = Buffer.from('{"type":"system"'),
  b9 = 10,
  mE = Buffer.from([b9]),
  lE = 256;
function cE($, X, J) {
  if (
    (($.straddleSnapCarryLen = 0),
    ($.straddleSnapTailEnd = 0),
    $.carryLen === 0)
  )
    return 0;
  let Y = $.carryBuf,
    Q = X.indexOf(b9);
  if (Q === -1 || Q >= J) return 0;
  let W = Q + 1;
  if (j7(Y, L7, 0, $.carryLen))
    (($.straddleSnapCarryLen = $.carryLen),
      ($.straddleSnapTailEnd = W),
      ($.lastSnapSrc = null));
  else if ($.carryLen < L7.length) return 0;
  else {
    if (j7(Y, uE, 0, $.carryLen)) {
      let z = yB(
        Y.toString("utf-8", 0, $.carryLen) + X.toString("utf-8", 0, Q),
      );
      if (z?.hasPreservedSegment) $.hasPreservedSegment = !0;
      else if (z)
        (($.out.len = 0),
          ($.boundaryStartOffset = $.bufFileOff),
          ($.hasPreservedSegment = !1),
          ($.lastSnapSrc = null));
    }
    (C1($.out, Y, 0, $.carryLen), C1($.out, X, 0, W));
  }
  return (($.bufFileOff += $.carryLen + W), ($.carryLen = 0), W);
}
function dE($, X, J) {
  let Y = X.indexOf(J),
    Q = 0,
    W = 0,
    z = -1,
    G = -1,
    U = X.indexOf(b9);
  while (U !== -1) {
    let H = U + 1;
    if (Y !== -1 && Y < W) Y = X.indexOf(J, W);
    if (j7(X, L7, W, H)) (C1($.out, X, Q, W), (z = W), (G = H), (Q = H));
    else if (Y >= W && Y < Math.min(W + lE, H)) {
      let K = yB(X.toString("utf-8", W, U));
      if (K?.hasPreservedSegment) $.hasPreservedSegment = !0;
      else if (K)
        (($.out.len = 0),
          ($.boundaryStartOffset = $.bufFileOff + W),
          ($.hasPreservedSegment = !1),
          ($.lastSnapSrc = null),
          (z = -1),
          ($.straddleSnapCarryLen = 0),
          (Q = W));
      Y = X.indexOf(J, Y + J.length);
    }
    ((W = H), (U = X.indexOf(b9, W)));
  }
  return (
    C1($.out, X, Q, W),
    { lastSnapStart: z, lastSnapEnd: G, trailStart: W }
  );
}
function pE($, X, J, Y, Q) {
  if (Y !== -1) {
    if (
      (($.lastSnapLen = Q - Y),
      $.lastSnapBuf === void 0 || $.lastSnapLen > $.lastSnapBuf.length)
    )
      $.lastSnapBuf = Buffer.allocUnsafe($.lastSnapLen);
    (X.copy($.lastSnapBuf, 0, Y, Q), ($.lastSnapSrc = $.lastSnapBuf));
  } else if ($.straddleSnapCarryLen > 0) {
    if (
      (($.lastSnapLen = $.straddleSnapCarryLen + $.straddleSnapTailEnd),
      $.lastSnapBuf === void 0 || $.lastSnapLen > $.lastSnapBuf.length)
    )
      $.lastSnapBuf = Buffer.allocUnsafe($.lastSnapLen);
    ($.carryBuf.copy($.lastSnapBuf, 0, 0, $.straddleSnapCarryLen),
      J.copy($.lastSnapBuf, $.straddleSnapCarryLen, 0, $.straddleSnapTailEnd),
      ($.lastSnapSrc = $.lastSnapBuf));
  }
}
function iE($, X, J) {
  if ((($.carryLen = X.length - J), $.carryLen > 0)) {
    if ($.carryBuf === void 0 || $.carryLen > $.carryBuf.length)
      $.carryBuf = Buffer.allocUnsafe($.carryLen);
    X.copy($.carryBuf, 0, J, X.length);
  }
}
function nE($) {
  if ($.carryLen > 0) {
    let X = $.carryBuf;
    if (j7(X, L7, 0, $.carryLen))
      (($.lastSnapSrc = X), ($.lastSnapLen = $.carryLen));
    else C1($.out, X, 0, $.carryLen);
  }
  if ($.lastSnapSrc) {
    if ($.out.len > 0 && $.out.buf[$.out.len - 1] !== b9) C1($.out, mE, 0, 1);
    C1($.out, $.lastSnapSrc, 0, $.lastSnapLen);
  }
}
async function gB($, X) {
  let J = hE(),
    Y = yE,
    Q = {
      out: {
        buf: Buffer.allocUnsafe(Math.min(X, 8388608)),
        len: 0,
        cap: X + 1,
      },
      boundaryStartOffset: 0,
      hasPreservedSegment: !1,
      lastSnapSrc: null,
      lastSnapLen: 0,
      lastSnapBuf: void 0,
      bufFileOff: 0,
      carryLen: 0,
      carryBuf: void 0,
      straddleSnapCarryLen: 0,
      straddleSnapTailEnd: 0,
    },
    W = Buffer.allocUnsafe(Y),
    z = await _B($, "r");
  try {
    let G = 0;
    while (G < X) {
      let { bytesRead: U } = await z.read(W, 0, Math.min(Y, X - G), G);
      if (U === 0) break;
      G += U;
      let H = cE(Q, W, U),
        K;
      if (Q.carryLen > 0) {
        let V = Q.carryLen + (U - H);
        ((K = Buffer.allocUnsafe(V)),
          Q.carryBuf.copy(K, 0, 0, Q.carryLen),
          W.copy(K, Q.carryLen, H, U));
      } else K = W.subarray(H, U);
      let N = dE(Q, K, J);
      (pE(Q, K, W, N.lastSnapStart, N.lastSnapEnd),
        iE(Q, K, N.trailStart),
        (Q.bufFileOff += N.trailStart));
    }
    nE(Q);
  } finally {
    await z.close();
  }
  return {
    boundaryStartOffset: Q.boundaryStartOffset,
    postBoundaryBuf: Q.out.buf.subarray(0, Q.out.len),
    hasPreservedSegment: Q.hasPreservedSegment,
  };
}
async function oE($, X) {
  try {
    if (X > fB && !X6(process.env.CLAUDE_CODE_DISABLE_PRECOMPACT_SKIP))
      return (await gB($, X)).postBoundaryBuf;
    return await rE($);
  } catch {
    return null;
  }
}
function tE($) {
  let X = [],
    J = 10,
    Y = $.length,
    Q = 0;
  while (Q < Y) {
    let W = $.indexOf(10, Q);
    if (W === -1) W = Y;
    let z = Q;
    while (z < W && $[z] <= 32) z++;
    if (((Q = W + 1), z >= W)) continue;
    let G = $.toString("utf-8", z, W);
    try {
      let U = m$(G),
        H = U.type;
      if (
        (H === "user" ||
          H === "assistant" ||
          H === "progress" ||
          H === "system" ||
          H === "attachment") &&
        typeof U.uuid === "string"
      )
        X.push(U);
    } catch {}
  }
  return X;
}
function aE($) {
  let X = new Map();
  for (let V of $) X.set(V.uuid, V);
  for (let V of X.values()) {
    if (V.type !== "system" || V.subtype !== "compact_boundary") continue;
    let O = V.compactMetadata?.preservedSegment;
    if (!O) continue;
    let w = X.get(O.headUuid);
    if (w) X.set(O.headUuid, { ...w, parentUuid: O.anchorUuid });
    for (let [B, F] of X)
      if (F.parentUuid === O.anchorUuid && B !== O.headUuid)
        X.set(B, { ...F, parentUuid: O.tailUuid });
  }
  let J = new Map();
  for (let V = 0; V < $.length; V++) J.set($[V].uuid, V);
  let Y = new Set();
  for (let V of X.values()) if (V.parentUuid) Y.add(V.parentUuid);
  let Q = [...X.values()].filter((V) => !Y.has(V.uuid)),
    W = [];
  for (let V of Q) {
    let O = V,
      w = new Set();
    while (O) {
      if (w.has(O.uuid)) break;
      if ((w.add(O.uuid), O.type === "user" || O.type === "assistant")) {
        W.push(O);
        break;
      }
      O = O.parentUuid ? X.get(O.parentUuid) : void 0;
    }
  }
  if (W.length === 0) return [];
  let z = W.filter((V) => !V.isSidechain && !V.teamName && !V.isMeta),
    G = (V) =>
      V.reduce((O, w) =>
        (J.get(w.uuid) ?? -1) > (J.get(O.uuid) ?? -1) ? w : O,
      ),
    U = z.length > 0 ? G(z) : G(W),
    H = [],
    K = new Set(),
    N = X.get(U.uuid);
  while (N) {
    if (K.has(N.uuid)) break;
    (K.add(N.uuid),
      H.push(N),
      (N = N.parentUuid ? X.get(N.parentUuid) : void 0));
  }
  return (H.reverse(), eE(X, H, K));
}
function gz($) {
  if ($.type !== "assistant") return;
  let X = $.message;
  if (typeof X !== "object" || X === null) return;
  let J = X.id;
  return typeof J === "string" ? J : void 0;
}
function sE($) {
  if ($.type !== "user" || !$.parentUuid) return !1;
  let X = $.message;
  if (typeof X !== "object" || X === null) return !1;
  let J = X.content;
  if (!Array.isArray(J)) return !1;
  return J.some(
    (Y) => typeof Y === "object" && Y !== null && Y.type === "tool_result",
  );
}
function eE($, X, J) {
  let Y = X.filter((N) => N.type === "assistant");
  if (Y.length === 0) return X;
  let Q = new Map();
  for (let N of Y) {
    let V = gz(N);
    if (V) Q.set(V, N);
  }
  let W = new Map(),
    z = new Map();
  for (let N of $.values()) {
    let V = gz(N);
    if (V) {
      let O = W.get(V);
      if (O) O.push(N);
      else W.set(V, [N]);
    } else if (sE(N)) {
      let O = N.parentUuid,
        w = z.get(O);
      if (w) w.push(N);
      else z.set(O, [N]);
    }
  }
  let G = new Set(),
    U = new Map(),
    H = 0;
  for (let N of Y) {
    let V = gz(N);
    if (!V || G.has(V)) continue;
    G.add(V);
    let O = W.get(V) ?? [N],
      w = O.filter((Z) => !J.has(Z.uuid)),
      B = [];
    for (let Z of O) {
      let _ = z.get(Z.uuid);
      if (!_) continue;
      for (let T of _) if (!J.has(T.uuid)) B.push(T);
    }
    if (w.length === 0 && B.length === 0) continue;
    let F = (Z, _) => (Z.timestamp ?? "").localeCompare(_.timestamp ?? "");
    (w.sort(F), B.sort(F));
    let j = Q.get(V),
      I = [...w, ...B];
    for (let Z of I) J.add(Z.uuid);
    ((H += I.length), U.set(j.uuid, I));
  }
  if (H === 0) return X;
  let K = [];
  for (let N of X) {
    K.push(N);
    let V = U.get(N.uuid);
    if (V) K.push(...V);
  }
  return K;
}
function $S($, X) {
  if ($.type === "user" || $.type === "assistant");
  else if ($.type === "system" && X);
  else return !1;
  if ($.isMeta) return !1;
  if ($.isSidechain) return !1;
  if ($.teamName) return !1;
  return !0;
}
function hz($) {
  return {
    type: $.type,
    uuid: $.uuid,
    session_id: $.sessionId,
    message: $.message,
    parent_tool_use_id: null,
    timestamp: $.timestamp,
  };
}
function uz($, X) {
  let J = X?.offset ?? 0;
  if (X?.limit !== void 0 && X.limit > 0) return $.slice(J, J + X.limit);
  if (J > 0) return $.slice(J);
  return $;
}
function hB($, X) {
  let J = [];
  for (let Y of $) {
    if (typeof Y !== "object" || Y === null) continue;
    let Q = Y,
      W = Q.type;
    if (
      (W === "user" ||
        W === "assistant" ||
        W === "progress" ||
        W === "system" ||
        W === "attachment") &&
      typeof Q.uuid === "string"
    )
      J.push(Q);
  }
  return uB(J, X);
}
function uB($, X) {
  let J = aE($),
    Y = X?.includeSystemMessages ?? !1,
    W = J.filter((z) => $S(z, Y)).map(hz);
  return uz(W, X);
}
async function mB($, X) {
  if (!H$($)) return [];
  let J = await i4($, X?.dir);
  if (!J) return [];
  let Y = await oE(J.filePath, J.fileSize);
  if (!Y) return [];
  return uB(tE(Y), X);
}
import { readdir as mz, stat as XS } from "fs/promises";
import { basename as JS, join as lz } from "path";
function P0($, X, J) {
  let { head: Y, tail: Q, mtime: W, size: z } = X,
    G = Y.indexOf(`
`),
    U = G >= 0 ? Y.slice(0, G) : Y;
  if (U.includes('"isSidechain":true') || U.includes('"isSidechain": true'))
    return null;
  let H =
      Y6(Q, "customTitle") ||
      Y6(Y, "customTitle") ||
      Y6(Q, "aiTitle") ||
      Y6(Y, "aiTitle") ||
      void 0,
    K = A7(Y) || void 0,
    N = M7(Y, "timestamp"),
    V;
  if (N) {
    let I = Date.parse(N);
    if (!Number.isNaN(I)) V = I;
  }
  let O = H || Y6(Q, "lastPrompt") || Y6(Q, "summary") || K;
  if (!O) return null;
  let w = Y6(Q, "gitBranch") || M7(Y, "gitBranch") || void 0,
    B = M7(Y, "cwd") || J || void 0,
    F = Q.split(
      `
`,
    ).findLast((I) => I.includes('"type":"tag"') && I.includes('"tag":"')),
    j = F ? Y6(F, "tag") || void 0 : void 0;
  return {
    sessionId: $,
    summary: O,
    lastModified: W,
    fileSize: z,
    customTitle: H,
    firstPrompt: K,
    gitBranch: w,
    cwd: B,
    tag: j,
    createdAt: V,
  };
}
async function P9($, X, J) {
  let Y;
  try {
    Y = await mz($);
  } catch {
    return [];
  }
  return (
    await Promise.all(
      Y.map(async (W) => {
        if (!W.endsWith(".jsonl")) return null;
        let z = H$(W.slice(0, -6));
        if (!z) return null;
        let G = lz($, W);
        if (!X) return { sessionId: z, filePath: G, mtime: 0, projectPath: J };
        try {
          let U = await XS(G);
          return {
            sessionId: z,
            filePath: G,
            mtime: U.mtime.getTime(),
            projectPath: J,
          };
        } catch {
          return null;
        }
      }),
    )
  ).filter((W) => W !== null);
}
async function lB($) {
  let X = await I7($.filePath);
  if (!X) return null;
  let J = P0($.sessionId, X, $.projectPath);
  if (!J) return null;
  if ($.mtime) J.lastModified = $.mtime;
  return J;
}
var QS = 32;
function YS($, X) {
  if (X.mtime !== $.mtime) return X.mtime - $.mtime;
  return X.sessionId < $.sessionId ? -1 : X.sessionId > $.sessionId ? 1 : 0;
}
async function WS($, X, J) {
  $.sort(YS);
  let Y = [],
    Q = X && X > 0 ? X : 1 / 0,
    W = 0,
    z = new Set();
  for (let G = 0; G < $.length && Y.length < Q; ) {
    let U = Math.min(G + QS, $.length),
      H = $.slice(G, U),
      K = await Promise.all(H.map(lB));
    for (let N = 0; N < K.length && Y.length < Q; N++) {
      G++;
      let V = K[N];
      if (!V) continue;
      if (z.has(V.sessionId)) continue;
      if ((z.add(V.sessionId), W < J)) {
        W++;
        continue;
      }
      Y.push(V);
    }
  }
  return Y;
}
async function zS($) {
  let X = await Promise.all($.map(lB)),
    J = new Map();
  for (let Q of X) {
    if (!Q) continue;
    let W = J.get(Q.sessionId);
    if (!W || Q.lastModified > W.lastModified) J.set(Q.sessionId, Q);
  }
  let Y = [...J.values()];
  return (
    Y.sort((Q, W) =>
      W.lastModified !== Q.lastModified
        ? W.lastModified - Q.lastModified
        : W.sessionId < Q.sessionId
          ? -1
          : W.sessionId > Q.sessionId
            ? 1
            : 0,
    ),
    Y
  );
}
async function GS($, X, J) {
  let Y = await p4($),
    Q;
  if (X)
    try {
      Q = await q4(Y);
    } catch {
      Q = [];
    }
  else Q = [];
  if (Q.length <= 1) {
    let N = [];
    for (let V of await Q6(Y)) N.push(...(await P9(V, J, Y)));
    return N;
  }
  let W = h6(),
    z = process.platform === "win32",
    G = Q.map((N) => {
      let V = k1(N);
      return { path: N, prefix: z ? V.toLowerCase() : V };
    });
  G.sort((N, V) => V.prefix.length - N.prefix.length);
  let U;
  try {
    U = await mz(W, { withFileTypes: !0 });
  } catch {
    let N = [];
    for (let V of await Q6(Y)) N.push(...(await P9(V, J, Y)));
    return N;
  }
  let H = [],
    K = new Set();
  for (let N of await Q6(Y)) {
    let V = JS(N);
    (K.add(z ? V.toLowerCase() : V), H.push(...(await P9(N, J, Y))));
  }
  for (let N of U) {
    if (!N.isDirectory()) continue;
    let V = z ? N.name.toLowerCase() : N.name;
    if (K.has(V)) continue;
    for (let { path: O, prefix: w } of G)
      if (V === w || (w.length >= R0 && V.startsWith(w + "-"))) {
        (K.add(V), H.push(...(await P9(lz(W, N.name), J, O))));
        break;
      }
  }
  return H;
}
async function US($) {
  let X = h6(),
    J;
  try {
    J = await mz(X, { withFileTypes: !0 });
  } catch {
    return [];
  }
  return (
    await Promise.all(
      J.filter((Q) => Q.isDirectory()).map((Q) => P9(lz(X, Q.name), $)),
    )
  ).flat();
}
async function cB($) {
  let { dir: X, limit: J, offset: Y, includeWorktrees: Q } = $ ?? {},
    W = Y ?? 0,
    z = (J !== void 0 && J > 0) || W > 0,
    G = X ? await GS(X, Q ?? !0, z) : await US(z);
  if (!z) return zS(G);
  return WS(G, J, W);
}
async function dB($, X = {}) {
  let J = H$($);
  if (!J) return;
  let Y = await i4(J, X.dir);
  if (!Y) return;
  let Q = await I7(Y.filePath);
  if (!Q) return;
  return P0(J, Q, Y.projectPath) ?? void 0;
}
import { constants as pB } from "fs";
import { open as HS, readdir as nB, rm as iB, stat as KS } from "fs/promises";
import { join as E0 } from "path";
async function rB($, X, J = {}) {
  if (!H$($)) throw Error(`Invalid sessionId: ${$}`);
  if (!X.trim()) throw Error("title must be non-empty");
  let Y =
    O$({ type: "custom-title", customTitle: X.trim(), sessionId: $ }) +
    `
`;
  await aB($, Y, J);
}
async function oB($, X, J = {}) {
  if (!H$($)) throw Error(`Invalid sessionId: ${$}`);
  if (X !== null) {
    let Q = v1(X).trim();
    if (!Q) throw Error("tag must be non-empty (use null to clear)");
    X = Q;
  }
  let Y =
    O$({ type: "tag", tag: X ?? "", sessionId: $ }) +
    `
`;
  await aB($, Y, J);
}
async function tB($, X = {}) {
  if (!H$($)) throw Error(`Invalid sessionId: ${$}`);
  for (let J of await NS(X)) {
    let Y = E0(J, `${$}.jsonl`),
      Q;
    try {
      ({ size: Q } = await KS(Y));
    } catch (W) {
      let z = y6(W);
      if (z === "ENOENT" || z === "ENOTDIR") continue;
      throw W;
    }
    if (Q === 0) continue;
    (await iB(Y, { force: !0 }),
      await iB(E0(J, $), { recursive: !0, force: !0 }));
    return;
  }
  throw Error(
    X.dir
      ? `Session ${$} not found in project directory for ${X.dir}`
      : `Session ${$} not found in any project directory`,
  );
}
async function NS($) {
  if ($.dir) {
    let J = await p4($.dir),
      Y = await Q6(J),
      Q;
    try {
      Q = await q4(J);
    } catch {
      Q = [];
    }
    for (let W of Q) {
      if (W === J) continue;
      Y.push(...(await Q6(W)));
    }
    return Y;
  }
  let X = h6();
  try {
    return (await nB(X, { withFileTypes: !0 }))
      .filter((Y) => Y.isDirectory() || Y.isSymbolicLink())
      .map((Y) => E0(X, Y.name));
  } catch {
    return [];
  }
}
async function aB($, X, J) {
  let Y = `${$}.jsonl`;
  if (J.dir) {
    let z = await p4(J.dir);
    for (let U of await Q6(z)) if (await cz(E0(U, Y), X)) return;
    let G;
    try {
      G = await q4(z);
    } catch {
      G = [];
    }
    for (let U of G) {
      if (U === z) continue;
      for (let H of await Q6(U)) if (await cz(E0(H, Y), X)) return;
    }
    throw Error(`Session ${$} not found in project directory for ${J.dir}`);
  }
  let Q = h6(),
    W;
  try {
    W = await nB(Q);
  } catch {
    throw Error(`Session ${$} not found (no projects directory)`);
  }
  for (let z of W) if (await cz(E0(Q, z, Y), X)) return;
  throw Error(`Session ${$} not found in any project directory`);
}
async function cz($, X) {
  let J;
  try {
    J = await HS($, pB.O_WRONLY | pB.O_APPEND);
  } catch (Y) {
    let Q = y6(Y);
    if (Q === "ENOENT" || Q === "ENOTDIR") return !1;
    throw Y;
  }
  try {
    let { size: Y } = await J.stat();
    if (Y === 0) return !1;
    let Q = process.platform === "win32" ? Y : void 0;
    return (await J.write(X, Q, "utf8"), !0);
  } finally {
    await J.close();
  }
}
import { randomUUID as Z7 } from "crypto";
import { readdir as VS, readFile as OS } from "fs/promises";
import { join as dz } from "path";
async function wS($, X) {
  let J = `${$}.jsonl`;
  async function Y(z) {
    try {
      let G = await OS(dz(z, J));
      if (G.length === 0) return null;
      return { buf: G, projectDir: z };
    } catch {
      return null;
    }
  }
  if (X) {
    let z = await p4(X);
    for (let U of await Q6(z)) {
      let H = await Y(U);
      if (H) return H;
    }
    let G;
    try {
      G = await q4(z);
    } catch {
      G = [];
    }
    for (let U of G) {
      if (U === z) continue;
      for (let H of await Q6(U)) {
        let K = await Y(H);
        if (K) return K;
      }
    }
    return null;
  }
  let Q = h6(),
    W;
  try {
    W = await VS(Q);
  } catch {
    return null;
  }
  for (let z of W) {
    let G = await Y(dz(Q, z));
    if (G) return G;
  }
  return null;
}
var BS = new Set(["user", "assistant", "attachment", "system", "progress"]);
function qS($, X) {
  let J = [],
    Y = [],
    Q = 10,
    W = $.length,
    z = 0;
  while (z < W) {
    let G = $.indexOf(10, z);
    if (G === -1) G = W;
    let U = z;
    while (U < G && $[U] <= 32) U++;
    if (((z = G + 1), U >= G)) continue;
    let H = $.toString("utf-8", U, G);
    try {
      sB(m$(H), X, J, Y);
    } catch {}
  }
  return { transcript: J, contentReplacements: Y };
}
function DS($, X) {
  let J = [],
    Y = [];
  for (let Q of $) {
    if (typeof Q !== "object" || Q === null) continue;
    sB(Q, X, J, Y);
  }
  return { transcript: J, contentReplacements: Y };
}
function sB($, X, J, Y) {
  if (BS.has($.type) && typeof $.uuid === "string") J.push($);
  else if (
    $.type === "content-replacement" &&
    $.sessionId === X &&
    Array.isArray($.replacements)
  )
    Y.push(...$.replacements);
}
async function eB($, X = {}) {
  if (!H$($)) throw Error(`Invalid sessionId: ${$}`);
  if (X.upToMessageId && !H$(X.upToMessageId))
    throw Error(`Invalid upToMessageId: ${X.upToMessageId}`);
  let J = await wS($, X.dir);
  if (!J)
    throw Error(
      X.dir
        ? `Session ${$} not found in project directory for ${X.dir}`
        : `Session ${$} not found`,
    );
  let { entries: Y, forkedSessionId: Q } = FS(J.buf, $, X);
  return (await R9(dz(J.projectDir, `${Q}.jsonl`), Y), { sessionId: Q });
}
function FS($, X, J) {
  let Y = qS($, X);
  return Xq(Y, X, J, () => {
    let W = $.length,
      z = $.toString("utf-8", 0, Math.min(W, g6)),
      G = $.toString("utf-8", Math.max(0, W - g6));
    return (
      Y6(G, "customTitle") ||
      Y6(z, "customTitle") ||
      Y6(G, "aiTitle") ||
      Y6(z, "aiTitle") ||
      A7(z)
    );
  });
}
function $q($, X, J) {
  let Y = DS($, X);
  return Xq(Y, X, J, () => jS($));
}
function jS($) {
  let X, J;
  for (let Y of $) {
    if (typeof Y !== "object" || Y === null) continue;
    let Q = Y;
    if (typeof Q.customTitle === "string" && Q.customTitle) X = Q.customTitle;
    if (typeof Q.aiTitle === "string" && Q.aiTitle) J = Q.aiTitle;
  }
  return X || J || TB($) || void 0;
}
function Xq($, X, J, Y) {
  let Q = $.transcript.filter((V) => !V.isSidechain);
  if (Q.length === 0) throw Error(`Session ${X} has no messages to fork`);
  if (J.upToMessageId) {
    let V = Q.findIndex((O) => O.uuid === J.upToMessageId);
    if (V === -1)
      throw Error(`Message ${J.upToMessageId} not found in session ${X}`);
    Q = Q.slice(0, V + 1);
  }
  let W = new Map();
  for (let V of Q) W.set(V.uuid, Z7());
  let z = Q.filter((V) => V.type !== "progress");
  if (z.length === 0) throw Error(`Session ${X} has no messages to fork`);
  let G = new Map();
  for (let V of Q) G.set(V.uuid, V);
  let U = Z7(),
    H = new Date().toISOString(),
    K = [];
  for (let V = 0; V < z.length; V++) {
    let O = z[V],
      w = W.get(O.uuid),
      B = null,
      F = O.parentUuid;
    while (F) {
      let _ = G.get(F);
      if (!_) break;
      if (_.type !== "progress") {
        B = W.get(F) ?? null;
        break;
      }
      F = _.parentUuid;
    }
    let j = V === z.length - 1 ? H : O.timestamp,
      I =
        O.logicalParentUuid == null
          ? O.logicalParentUuid
          : (W.get(O.logicalParentUuid) ?? null),
      Z = {
        ...O,
        uuid: w,
        parentUuid: B,
        logicalParentUuid: I,
        sessionId: U,
        timestamp: j,
        isSidechain: !1,
        teamName: void 0,
        agentName: void 0,
        slug: void 0,
        sourceToolAssistantUUID: void 0,
        forkedFrom: { sessionId: X, messageUuid: O.uuid },
      };
    K.push(Z);
  }
  if ($.contentReplacements.length > 0)
    K.push({
      type: "content-replacement",
      sessionId: U,
      replacements: $.contentReplacements,
      uuid: Z7(),
      timestamp: H,
    });
  let N = J.title?.trim();
  if (!N) N = `${Y() || "Forked session"} (fork)`;
  return (
    K.push({
      type: "custom-title",
      sessionId: U,
      customTitle: N,
      uuid: Z7(),
      timestamp: H,
    }),
    { entries: K, forkedSessionId: U }
  );
}
import { readdir as LS, readFile as MS } from "fs/promises";
import { join as pz } from "path";
async function Jq($, X) {
  let J = await i4($, X);
  if (!J) return null;
  let Y = J.filePath.replace(/\.jsonl$/, "");
  return pz(Y, "subagents");
}
async function Qq($) {
  let X = [];
  async function J(Y) {
    let Q;
    try {
      Q = await LS(Y, { withFileTypes: !0 });
    } catch {
      return;
    }
    for (let W of Q)
      if (
        W.isFile() &&
        W.name.startsWith("agent-") &&
        W.name.endsWith(".jsonl")
      ) {
        let z = W.name.slice(6, -6);
        X.push({ agentId: z, filePath: pz(Y, W.name) });
      } else if (W.isDirectory()) await J(pz(Y, W.name));
  }
  return (await J($), X);
}
function AS($) {
  let X = [],
    J = 10,
    Y = $.length,
    Q = 0;
  while (Q < Y) {
    let W = $.indexOf(10, Q);
    if (W === -1) W = Y;
    let z = Q;
    while (z < W && $[z] <= 32) z++;
    if (((Q = W + 1), z >= W)) continue;
    let G = $.toString("utf-8", z, W);
    try {
      let U = m$(G),
        H = U.type;
      if ((H === "user" || H === "assistant") && typeof U.uuid === "string")
        X.push(U);
    } catch {}
  }
  return X;
}
function IS($) {
  if ($.length === 0) return [];
  let X = new Map();
  for (let z of $) X.set(z.uuid, z);
  let J = $.findLast((z) => z.type === "user" || z.type === "assistant");
  if (!J) return [];
  let Y = [],
    Q = new Set(),
    W = J;
  while (W) {
    if (Q.has(W.uuid)) break;
    (Q.add(W.uuid),
      Y.push(W),
      (W = W.parentUuid ? X.get(W.parentUuid) : void 0));
  }
  return (Y.reverse(), Y);
}
async function Yq($, X) {
  if (!H$($)) return [];
  let J = await Jq($, X?.dir);
  if (!J) return [];
  return (await Qq(J)).map((Q) => Q.agentId);
}
async function Wq($, X, J) {
  if (!H$($)) return [];
  if (!X) return [];
  let Y = await Jq($, J?.dir);
  if (!Y) return [];
  let W = (await Qq(Y)).find((G) => G.agentId === X);
  if (!W) return [];
  let z;
  try {
    z = await MS(W.filePath);
  } catch {
    return [];
  }
  return iz(z, J);
}
function iz($, X) {
  if ($.length === 0) return [];
  let J = AS($),
    Q = IS(J)
      .filter((W) => W.type === "user" || W.type === "assistant")
      .map(hz);
  return uz(Q, X);
}
import { createHash as kS } from "crypto";
import { userInfo as _S } from "os";
function zq($) {
  return [...new Set($)];
}
function ZS() {
  return "prod";
}
var bS = "user:inference",
  Uq = "user:profile",
  RS = "org:create_api_key";
var PS = [RS, Uq],
  ES = [
    Uq,
    bS,
    "user:sessions:claude_code",
    "user:mcp_servers",
    "user:file_upload",
  ],
  Be = zq([...PS, ...ES]),
  Gq = {
    BASE_API_URL: "https://api.anthropic.com",
    CONSOLE_AUTHORIZE_URL: "https://platform.claude.com/oauth/authorize",
    CLAUDE_AI_AUTHORIZE_URL: "https://claude.com/cai/oauth/authorize",
    CLAUDE_AI_ORIGIN: "https://claude.ai",
    TOKEN_URL: "https://platform.claude.com/v1/oauth/token",
    API_KEY_URL:
      "https://api.anthropic.com/api/oauth/claude_cli/create_api_key",
    ROLES_URL: "https://api.anthropic.com/api/oauth/claude_cli/roles",
    CONSOLE_SUCCESS_URL:
      "https://platform.claude.com/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code",
    CLAUDEAI_SUCCESS_URL:
      "https://platform.claude.com/oauth/code/success?app=claude-code",
    MANUAL_REDIRECT_URL: "https://platform.claude.com/oauth/code/callback",
    CLIENT_ID: "9d1c250a-e61b-44d9-88ed-5944d1962f5e",
    OAUTH_FILE_SUFFIX: "",
    MCP_PROXY_URL: "https://mcp-proxy.anthropic.com",
    MCP_PROXY_PATH: "/v1/mcp/{server_id}",
  };
var SS = void 0;
function vS() {
  let $ =
      process.env.CLAUDE_LOCAL_OAUTH_API_BASE?.replace(/\/$/, "") ??
      "http://localhost:8000",
    X =
      process.env.CLAUDE_LOCAL_OAUTH_APPS_BASE?.replace(/\/$/, "") ??
      "http://localhost:4000",
    J =
      process.env.CLAUDE_LOCAL_OAUTH_CONSOLE_BASE?.replace(/\/$/, "") ??
      "http://localhost:3000";
  return {
    BASE_API_URL: $,
    CONSOLE_AUTHORIZE_URL: `${J}/oauth/authorize`,
    CLAUDE_AI_AUTHORIZE_URL: `${X}/oauth/authorize`,
    CLAUDE_AI_ORIGIN: X,
    TOKEN_URL: `${$}/v1/oauth/token`,
    API_KEY_URL: `${$}/api/oauth/claude_cli/create_api_key`,
    ROLES_URL: `${$}/api/oauth/claude_cli/roles`,
    CONSOLE_SUCCESS_URL: `${J}/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code`,
    CLAUDEAI_SUCCESS_URL: `${J}/oauth/code/success?app=claude-code`,
    MANUAL_REDIRECT_URL: `${J}/oauth/code/callback`,
    CLIENT_ID: "22422756-60c9-4084-8eb7-27705fd5cf9a",
    OAUTH_FILE_SUFFIX: "-local-oauth",
    MCP_PROXY_URL: "http://localhost:8205",
    MCP_PROXY_PATH: "/v1/toolbox/shttp/mcp/{server_id}",
  };
}
var CS = [
  "https://beacon.claude-ai.staging.ant.dev",
  "https://claude.fedstart.com",
  "https://claude-staging.fedstart.com",
];
function Hq() {
  let $ = (() => {
      switch (ZS()) {
        case "local":
          return vS();
        case "staging":
          return SS ?? Gq;
        case "prod":
          return Gq;
      }
    })(),
    X = process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL;
  if (X) {
    let Y = X.replace(/\/$/, "");
    if (!CS.includes(Y))
      throw Error("CLAUDE_CODE_CUSTOM_OAUTH_URL is not an approved endpoint.");
    $ = {
      ...$,
      BASE_API_URL: Y,
      CONSOLE_AUTHORIZE_URL: `${Y}/oauth/authorize`,
      CLAUDE_AI_AUTHORIZE_URL: `${Y}/oauth/authorize`,
      CLAUDE_AI_ORIGIN: Y,
      TOKEN_URL: `${Y}/v1/oauth/token`,
      API_KEY_URL: `${Y}/api/oauth/claude_cli/create_api_key`,
      ROLES_URL: `${Y}/api/oauth/claude_cli/roles`,
      CONSOLE_SUCCESS_URL: `${Y}/oauth/code/success?app=claude-code`,
      CLAUDEAI_SUCCESS_URL: `${Y}/oauth/code/success?app=claude-code`,
      MANUAL_REDIRECT_URL: `${Y}/oauth/code/callback`,
      OAUTH_FILE_SUFFIX: "-custom-oauth",
    };
  }
  let J = process.env.CLAUDE_CODE_OAUTH_CLIENT_ID;
  if (J) $ = { ...$, CLIENT_ID: J };
  return $;
}
var Kq = "-credentials";
function Nq($ = "") {
  let X = y4(),
    Y = !process.env.CLAUDE_CONFIG_DIR
      ? ""
      : `-${kS("sha256").update(X).digest("hex").substring(0, 8)}`;
  return `Claude Code${Hq().OAUTH_FILE_SUFFIX}${$}${Y}`;
}
function Vq() {
  try {
    return process.env.USER || _S().username;
  } catch {
    return "claude-code-user";
  }
}
var X$;
(function ($) {
  $.assertEqual = (Q) => {};
  function X(Q) {}
  $.assertIs = X;
  function J(Q) {
    throw Error();
  }
  (($.assertNever = J),
    ($.arrayToEnum = (Q) => {
      let W = {};
      for (let z of Q) W[z] = z;
      return W;
    }),
    ($.getValidEnumValues = (Q) => {
      let W = $.objectKeys(Q).filter((G) => typeof Q[Q[G]] !== "number"),
        z = {};
      for (let G of W) z[G] = Q[G];
      return $.objectValues(z);
    }),
    ($.objectValues = (Q) => {
      return $.objectKeys(Q).map(function (W) {
        return Q[W];
      });
    }),
    ($.objectKeys =
      typeof Object.keys === "function"
        ? (Q) => Object.keys(Q)
        : (Q) => {
            let W = [];
            for (let z in Q)
              if (Object.prototype.hasOwnProperty.call(Q, z)) W.push(z);
            return W;
          }),
    ($.find = (Q, W) => {
      for (let z of Q) if (W(z)) return z;
      return;
    }),
    ($.isInteger =
      typeof Number.isInteger === "function"
        ? (Q) => Number.isInteger(Q)
        : (Q) =>
            typeof Q === "number" &&
            Number.isFinite(Q) &&
            Math.floor(Q) === Q));
  function Y(Q, W = " | ") {
    return Q.map((z) => (typeof z === "string" ? `'${z}'` : z)).join(W);
  }
  (($.joinValues = Y),
    ($.jsonStringifyReplacer = (Q, W) => {
      if (typeof W === "bigint") return W.toString();
      return W;
    }));
})(X$ || (X$ = {}));
var Oq;
(function ($) {
  $.mergeShapes = (X, J) => {
    return { ...X, ...J };
  };
})(Oq || (Oq = {}));
var S = X$.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  D4 = ($) => {
    switch (typeof $) {
      case "undefined":
        return S.undefined;
      case "string":
        return S.string;
      case "number":
        return Number.isNaN($) ? S.nan : S.number;
      case "boolean":
        return S.boolean;
      case "function":
        return S.function;
      case "bigint":
        return S.bigint;
      case "symbol":
        return S.symbol;
      case "object":
        if (Array.isArray($)) return S.array;
        if ($ === null) return S.null;
        if (
          $.then &&
          typeof $.then === "function" &&
          $.catch &&
          typeof $.catch === "function"
        )
          return S.promise;
        if (typeof Map < "u" && $ instanceof Map) return S.map;
        if (typeof Set < "u" && $ instanceof Set) return S.set;
        if (typeof Date < "u" && $ instanceof Date) return S.date;
        return S.object;
      default:
        return S.unknown;
    }
  };
var b = X$.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite",
]);
class j6 extends Error {
  get errors() {
    return this.issues;
  }
  constructor($) {
    super();
    ((this.issues = []),
      (this.addIssue = (J) => {
        this.issues = [...this.issues, J];
      }),
      (this.addIssues = (J = []) => {
        this.issues = [...this.issues, ...J];
      }));
    let X = new.target.prototype;
    if (Object.setPrototypeOf) Object.setPrototypeOf(this, X);
    else this.__proto__ = X;
    ((this.name = "ZodError"), (this.issues = $));
  }
  format($) {
    let X =
        $ ||
        function (Q) {
          return Q.message;
        },
      J = { _errors: [] },
      Y = (Q) => {
        for (let W of Q.issues)
          if (W.code === "invalid_union") W.unionErrors.map(Y);
          else if (W.code === "invalid_return_type") Y(W.returnTypeError);
          else if (W.code === "invalid_arguments") Y(W.argumentsError);
          else if (W.path.length === 0) J._errors.push(X(W));
          else {
            let z = J,
              G = 0;
            while (G < W.path.length) {
              let U = W.path[G];
              if (G !== W.path.length - 1) z[U] = z[U] || { _errors: [] };
              else ((z[U] = z[U] || { _errors: [] }), z[U]._errors.push(X(W)));
              ((z = z[U]), G++);
            }
          }
      };
    return (Y(this), J);
  }
  static assert($) {
    if (!($ instanceof j6)) throw Error(`Not a ZodError: ${$}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, X$.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten($ = (X) => X.message) {
    let X = {},
      J = [];
    for (let Y of this.issues)
      if (Y.path.length > 0) {
        let Q = Y.path[0];
        ((X[Q] = X[Q] || []), X[Q].push($(Y)));
      } else J.push($(Y));
    return { formErrors: J, fieldErrors: X };
  }
  get formErrors() {
    return this.flatten();
  }
}
j6.create = ($) => {
  return new j6($);
};
var xS = ($, X) => {
    let J;
    switch ($.code) {
      case b.invalid_type:
        if ($.received === S.undefined) J = "Required";
        else J = `Expected ${$.expected}, received ${$.received}`;
        break;
      case b.invalid_literal:
        J = `Invalid literal value, expected ${JSON.stringify($.expected, X$.jsonStringifyReplacer)}`;
        break;
      case b.unrecognized_keys:
        J = `Unrecognized key(s) in object: ${X$.joinValues($.keys, ", ")}`;
        break;
      case b.invalid_union:
        J = "Invalid input";
        break;
      case b.invalid_union_discriminator:
        J = `Invalid discriminator value. Expected ${X$.joinValues($.options)}`;
        break;
      case b.invalid_enum_value:
        J = `Invalid enum value. Expected ${X$.joinValues($.options)}, received '${$.received}'`;
        break;
      case b.invalid_arguments:
        J = "Invalid function arguments";
        break;
      case b.invalid_return_type:
        J = "Invalid function return type";
        break;
      case b.invalid_date:
        J = "Invalid date";
        break;
      case b.invalid_string:
        if (typeof $.validation === "object")
          if ("includes" in $.validation) {
            if (
              ((J = `Invalid input: must include "${$.validation.includes}"`),
              typeof $.validation.position === "number")
            )
              J = `${J} at one or more positions greater than or equal to ${$.validation.position}`;
          } else if ("startsWith" in $.validation)
            J = `Invalid input: must start with "${$.validation.startsWith}"`;
          else if ("endsWith" in $.validation)
            J = `Invalid input: must end with "${$.validation.endsWith}"`;
          else X$.assertNever($.validation);
        else if ($.validation !== "regex") J = `Invalid ${$.validation}`;
        else J = "Invalid";
        break;
      case b.too_small:
        if ($.type === "array")
          J = `Array must contain ${$.exact ? "exactly" : $.inclusive ? "at least" : "more than"} ${$.minimum} element(s)`;
        else if ($.type === "string")
          J = `String must contain ${$.exact ? "exactly" : $.inclusive ? "at least" : "over"} ${$.minimum} character(s)`;
        else if ($.type === "number")
          J = `Number must be ${$.exact ? "exactly equal to " : $.inclusive ? "greater than or equal to " : "greater than "}${$.minimum}`;
        else if ($.type === "bigint")
          J = `Number must be ${$.exact ? "exactly equal to " : $.inclusive ? "greater than or equal to " : "greater than "}${$.minimum}`;
        else if ($.type === "date")
          J = `Date must be ${$.exact ? "exactly equal to " : $.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number($.minimum))}`;
        else J = "Invalid input";
        break;
      case b.too_big:
        if ($.type === "array")
          J = `Array must contain ${$.exact ? "exactly" : $.inclusive ? "at most" : "less than"} ${$.maximum} element(s)`;
        else if ($.type === "string")
          J = `String must contain ${$.exact ? "exactly" : $.inclusive ? "at most" : "under"} ${$.maximum} character(s)`;
        else if ($.type === "number")
          J = `Number must be ${$.exact ? "exactly" : $.inclusive ? "less than or equal to" : "less than"} ${$.maximum}`;
        else if ($.type === "bigint")
          J = `BigInt must be ${$.exact ? "exactly" : $.inclusive ? "less than or equal to" : "less than"} ${$.maximum}`;
        else if ($.type === "date")
          J = `Date must be ${$.exact ? "exactly" : $.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number($.maximum))}`;
        else J = "Invalid input";
        break;
      case b.custom:
        J = "Invalid input";
        break;
      case b.invalid_intersection_types:
        J = "Intersection results could not be merged";
        break;
      case b.not_multiple_of:
        J = `Number must be a multiple of ${$.multipleOf}`;
        break;
      case b.not_finite:
        J = "Number must be finite";
        break;
      default:
        ((J = X.defaultError), X$.assertNever($));
    }
    return { message: J };
  },
  n4 = xS;
var TS = n4;
function E9() {
  return TS;
}
var b7 = ($) => {
  let { data: X, path: J, errorMaps: Y, issueData: Q } = $,
    W = [...J, ...(Q.path || [])],
    z = { ...Q, path: W };
  if (Q.message !== void 0) return { ...Q, path: W, message: Q.message };
  let G = "",
    U = Y.filter((H) => !!H)
      .slice()
      .reverse();
  for (let H of U) G = H(z, { data: X, defaultError: G }).message;
  return { ...Q, path: W, message: G };
};
function k($, X) {
  let J = E9(),
    Y = b7({
      issueData: X,
      data: $.data,
      path: $.path,
      errorMaps: [
        $.common.contextualErrorMap,
        $.schemaErrorMap,
        J,
        J === n4 ? void 0 : n4,
      ].filter((Q) => !!Q),
    });
  $.common.issues.push(Y);
}
class p$ {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid") this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted") this.value = "aborted";
  }
  static mergeArray($, X) {
    let J = [];
    for (let Y of X) {
      if (Y.status === "aborted") return c;
      if (Y.status === "dirty") $.dirty();
      J.push(Y.value);
    }
    return { status: $.value, value: J };
  }
  static async mergeObjectAsync($, X) {
    let J = [];
    for (let Y of X) {
      let Q = await Y.key,
        W = await Y.value;
      J.push({ key: Q, value: W });
    }
    return p$.mergeObjectSync($, J);
  }
  static mergeObjectSync($, X) {
    let J = {};
    for (let Y of X) {
      let { key: Q, value: W } = Y;
      if (Q.status === "aborted") return c;
      if (W.status === "aborted") return c;
      if (Q.status === "dirty") $.dirty();
      if (W.status === "dirty") $.dirty();
      if (Q.value !== "__proto__" && (typeof W.value < "u" || Y.alwaysSet))
        J[Q.value] = W.value;
    }
    return { status: $.value, value: J };
  }
}
var c = Object.freeze({ status: "aborted" }),
  S0 = ($) => ({ status: "dirty", value: $ }),
  o$ = ($) => ({ status: "valid", value: $ }),
  nz = ($) => $.status === "aborted",
  rz = ($) => $.status === "dirty",
  _1 = ($) => $.status === "valid",
  S9 = ($) => typeof Promise < "u" && $ instanceof Promise;
var y;
(function ($) {
  (($.errToObj = (X) => (typeof X === "string" ? { message: X } : X || {})),
    ($.toString = (X) => (typeof X === "string" ? X : X?.message)));
})(y || (y = {}));
class u6 {
  constructor($, X, J, Y) {
    ((this._cachedPath = []),
      (this.parent = $),
      (this.data = X),
      (this._path = J),
      (this._key = Y));
  }
  get path() {
    if (!this._cachedPath.length)
      if (Array.isArray(this._key))
        this._cachedPath.push(...this._path, ...this._key);
      else this._cachedPath.push(...this._path, this._key);
    return this._cachedPath;
  }
}
var wq = ($, X) => {
  if (_1(X)) return { success: !0, data: X.value };
  else {
    if (!$.common.issues.length)
      throw Error("Validation failed but no issues detected.");
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        let J = new j6($.common.issues);
        return ((this._error = J), this._error);
      },
    };
  }
};
function o($) {
  if (!$) return {};
  let {
    errorMap: X,
    invalid_type_error: J,
    required_error: Y,
    description: Q,
  } = $;
  if (X && (J || Y))
    throw Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  if (X) return { errorMap: X, description: Q };
  return {
    errorMap: (z, G) => {
      let { message: U } = $;
      if (z.code === "invalid_enum_value")
        return { message: U ?? G.defaultError };
      if (typeof G.data > "u") return { message: U ?? Y ?? G.defaultError };
      if (z.code !== "invalid_type") return { message: G.defaultError };
      return { message: U ?? J ?? G.defaultError };
    },
    description: Q,
  };
}
class e {
  get description() {
    return this._def.description;
  }
  _getType($) {
    return D4($.data);
  }
  _getOrReturnCtx($, X) {
    return (
      X || {
        common: $.parent.common,
        data: $.data,
        parsedType: D4($.data),
        schemaErrorMap: this._def.errorMap,
        path: $.path,
        parent: $.parent,
      }
    );
  }
  _processInputParams($) {
    return {
      status: new p$(),
      ctx: {
        common: $.parent.common,
        data: $.data,
        parsedType: D4($.data),
        schemaErrorMap: this._def.errorMap,
        path: $.path,
        parent: $.parent,
      },
    };
  }
  _parseSync($) {
    let X = this._parse($);
    if (S9(X)) throw Error("Synchronous parse encountered promise.");
    return X;
  }
  _parseAsync($) {
    let X = this._parse($);
    return Promise.resolve(X);
  }
  parse($, X) {
    let J = this.safeParse($, X);
    if (J.success) return J.data;
    throw J.error;
  }
  safeParse($, X) {
    let J = {
        common: {
          issues: [],
          async: X?.async ?? !1,
          contextualErrorMap: X?.errorMap,
        },
        path: X?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: $,
        parsedType: D4($),
      },
      Y = this._parseSync({ data: $, path: J.path, parent: J });
    return wq(J, Y);
  }
  "~validate"($) {
    let X = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: $,
      parsedType: D4($),
    };
    if (!this["~standard"].async)
      try {
        let J = this._parseSync({ data: $, path: [], parent: X });
        return _1(J) ? { value: J.value } : { issues: X.common.issues };
      } catch (J) {
        if (J?.message?.toLowerCase()?.includes("encountered"))
          this["~standard"].async = !0;
        X.common = { issues: [], async: !0 };
      }
    return this._parseAsync({ data: $, path: [], parent: X }).then((J) =>
      _1(J) ? { value: J.value } : { issues: X.common.issues },
    );
  }
  async parseAsync($, X) {
    let J = await this.safeParseAsync($, X);
    if (J.success) return J.data;
    throw J.error;
  }
  async safeParseAsync($, X) {
    let J = {
        common: { issues: [], contextualErrorMap: X?.errorMap, async: !0 },
        path: X?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: $,
        parsedType: D4($),
      },
      Y = this._parse({ data: $, path: J.path, parent: J }),
      Q = await (S9(Y) ? Y : Promise.resolve(Y));
    return wq(J, Q);
  }
  refine($, X) {
    let J = (Y) => {
      if (typeof X === "string" || typeof X > "u") return { message: X };
      else if (typeof X === "function") return X(Y);
      else return X;
    };
    return this._refinement((Y, Q) => {
      let W = $(Y),
        z = () => Q.addIssue({ code: b.custom, ...J(Y) });
      if (typeof Promise < "u" && W instanceof Promise)
        return W.then((G) => {
          if (!G) return (z(), !1);
          else return !0;
        });
      if (!W) return (z(), !1);
      else return !0;
    });
  }
  refinement($, X) {
    return this._refinement((J, Y) => {
      if (!$(J)) return (Y.addIssue(typeof X === "function" ? X(J, Y) : X), !1);
      else return !0;
    });
  }
  _refinement($) {
    return new $4({
      schema: this,
      typeName: R.ZodEffects,
      effect: { type: "refinement", refinement: $ },
    });
  }
  superRefine($) {
    return this._refinement($);
  }
  constructor($) {
    ((this.spa = this.safeParseAsync),
      (this._def = $),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (X) => this["~validate"](X),
      }));
  }
  optional() {
    return b6.create(this, this._def);
  }
  nullable() {
    return r4.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return e6.create(this);
  }
  promise() {
    return x0.create(this, this._def);
  }
  or($) {
    return x9.create([this, $], this._def);
  }
  and($) {
    return T9.create(this, $, this._def);
  }
  transform($) {
    return new $4({
      ...o(this._def),
      schema: this,
      typeName: R.ZodEffects,
      effect: { type: "transform", transform: $ },
    });
  }
  default($) {
    let X = typeof $ === "function" ? $ : () => $;
    return new h9({
      ...o(this._def),
      innerType: this,
      defaultValue: X,
      typeName: R.ZodDefault,
    });
  }
  brand() {
    return new sz({ typeName: R.ZodBranded, type: this, ...o(this._def) });
  }
  catch($) {
    let X = typeof $ === "function" ? $ : () => $;
    return new u9({
      ...o(this._def),
      innerType: this,
      catchValue: X,
      typeName: R.ZodCatch,
    });
  }
  describe($) {
    return new this.constructor({ ...this._def, description: $ });
  }
  pipe($) {
    return _7.create(this, $);
  }
  readonly() {
    return m9.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
var fS = /^c[^\s-]{8,}$/i,
  yS = /^[0-9a-z]+$/,
  gS = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  hS =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  uS = /^[a-z0-9_-]{21}$/i,
  mS = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  lS =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  cS =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  dS = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
  oz,
  pS =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  iS =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  nS =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  rS =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  oS = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  tS = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  Bq =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  aS = new RegExp(`^${Bq}$`);
function qq($) {
  let X = "[0-5]\\d";
  if ($.precision) X = `${X}\\.\\d{${$.precision}}`;
  else if ($.precision == null) X = `${X}(\\.\\d+)?`;
  let J = $.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${X})${J}`;
}
function sS($) {
  return new RegExp(`^${qq($)}$`);
}
function eS($) {
  let X = `${Bq}T${qq($)}`,
    J = [];
  if ((J.push($.local ? "Z?" : "Z"), $.offset)) J.push("([+-]\\d{2}:?\\d{2})");
  return ((X = `${X}(${J.join("|")})`), new RegExp(`^${X}$`));
}
function $v($, X) {
  if ((X === "v4" || !X) && pS.test($)) return !0;
  if ((X === "v6" || !X) && nS.test($)) return !0;
  return !1;
}
function Xv($, X) {
  if (!mS.test($)) return !1;
  try {
    let [J] = $.split(".");
    if (!J) return !1;
    let Y = J.replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(J.length + ((4 - (J.length % 4)) % 4), "="),
      Q = JSON.parse(atob(Y));
    if (typeof Q !== "object" || Q === null) return !1;
    if ("typ" in Q && Q?.typ !== "JWT") return !1;
    if (!Q.alg) return !1;
    if (X && Q.alg !== X) return !1;
    return !0;
  } catch {
    return !1;
  }
}
function Jv($, X) {
  if ((X === "v4" || !X) && iS.test($)) return !0;
  if ((X === "v6" || !X) && rS.test($)) return !0;
  return !1;
}
class j4 extends e {
  _parse($) {
    if (this._def.coerce) $.data = String($.data);
    if (this._getType($) !== S.string) {
      let Q = this._getOrReturnCtx($);
      return (
        k(Q, {
          code: b.invalid_type,
          expected: S.string,
          received: Q.parsedType,
        }),
        c
      );
    }
    let J = new p$(),
      Y = void 0;
    for (let Q of this._def.checks)
      if (Q.kind === "min") {
        if ($.data.length < Q.value)
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              code: b.too_small,
              minimum: Q.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "max") {
        if ($.data.length > Q.value)
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              code: b.too_big,
              maximum: Q.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "length") {
        let W = $.data.length > Q.value,
          z = $.data.length < Q.value;
        if (W || z) {
          if (((Y = this._getOrReturnCtx($, Y)), W))
            k(Y, {
              code: b.too_big,
              maximum: Q.value,
              type: "string",
              inclusive: !0,
              exact: !0,
              message: Q.message,
            });
          else if (z)
            k(Y, {
              code: b.too_small,
              minimum: Q.value,
              type: "string",
              inclusive: !0,
              exact: !0,
              message: Q.message,
            });
          J.dirty();
        }
      } else if (Q.kind === "email") {
        if (!cS.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "email",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "emoji") {
        if (!oz) oz = new RegExp(dS, "u");
        if (!oz.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "emoji",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "uuid") {
        if (!hS.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "uuid",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "nanoid") {
        if (!uS.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "nanoid",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "cuid") {
        if (!fS.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "cuid",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "cuid2") {
        if (!yS.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "cuid2",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "ulid") {
        if (!gS.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "ulid",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "url")
        try {
          new URL($.data);
        } catch {
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "url",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
        }
      else if (Q.kind === "regex") {
        if (((Q.regex.lastIndex = 0), !Q.regex.test($.data)))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "regex",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "trim") $.data = $.data.trim();
      else if (Q.kind === "includes") {
        if (!$.data.includes(Q.value, Q.position))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              code: b.invalid_string,
              validation: { includes: Q.value, position: Q.position },
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "toLowerCase") $.data = $.data.toLowerCase();
      else if (Q.kind === "toUpperCase") $.data = $.data.toUpperCase();
      else if (Q.kind === "startsWith") {
        if (!$.data.startsWith(Q.value))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              code: b.invalid_string,
              validation: { startsWith: Q.value },
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "endsWith") {
        if (!$.data.endsWith(Q.value))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              code: b.invalid_string,
              validation: { endsWith: Q.value },
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "datetime") {
        if (!eS(Q).test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              code: b.invalid_string,
              validation: "datetime",
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "date") {
        if (!aS.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              code: b.invalid_string,
              validation: "date",
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "time") {
        if (!sS(Q).test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              code: b.invalid_string,
              validation: "time",
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "duration") {
        if (!lS.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "duration",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "ip") {
        if (!$v($.data, Q.version))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "ip",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "jwt") {
        if (!Xv($.data, Q.alg))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "jwt",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "cidr") {
        if (!Jv($.data, Q.version))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "cidr",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "base64") {
        if (!oS.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "base64",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "base64url") {
        if (!tS.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "base64url",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else X$.assertNever(Q);
    return { status: J.value, value: $.data };
  }
  _regex($, X, J) {
    return this.refinement((Y) => $.test(Y), {
      validation: X,
      code: b.invalid_string,
      ...y.errToObj(J),
    });
  }
  _addCheck($) {
    return new j4({ ...this._def, checks: [...this._def.checks, $] });
  }
  email($) {
    return this._addCheck({ kind: "email", ...y.errToObj($) });
  }
  url($) {
    return this._addCheck({ kind: "url", ...y.errToObj($) });
  }
  emoji($) {
    return this._addCheck({ kind: "emoji", ...y.errToObj($) });
  }
  uuid($) {
    return this._addCheck({ kind: "uuid", ...y.errToObj($) });
  }
  nanoid($) {
    return this._addCheck({ kind: "nanoid", ...y.errToObj($) });
  }
  cuid($) {
    return this._addCheck({ kind: "cuid", ...y.errToObj($) });
  }
  cuid2($) {
    return this._addCheck({ kind: "cuid2", ...y.errToObj($) });
  }
  ulid($) {
    return this._addCheck({ kind: "ulid", ...y.errToObj($) });
  }
  base64($) {
    return this._addCheck({ kind: "base64", ...y.errToObj($) });
  }
  base64url($) {
    return this._addCheck({ kind: "base64url", ...y.errToObj($) });
  }
  jwt($) {
    return this._addCheck({ kind: "jwt", ...y.errToObj($) });
  }
  ip($) {
    return this._addCheck({ kind: "ip", ...y.errToObj($) });
  }
  cidr($) {
    return this._addCheck({ kind: "cidr", ...y.errToObj($) });
  }
  datetime($) {
    if (typeof $ === "string")
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: !1,
        local: !1,
        message: $,
      });
    return this._addCheck({
      kind: "datetime",
      precision: typeof $?.precision > "u" ? null : $?.precision,
      offset: $?.offset ?? !1,
      local: $?.local ?? !1,
      ...y.errToObj($?.message),
    });
  }
  date($) {
    return this._addCheck({ kind: "date", message: $ });
  }
  time($) {
    if (typeof $ === "string")
      return this._addCheck({ kind: "time", precision: null, message: $ });
    return this._addCheck({
      kind: "time",
      precision: typeof $?.precision > "u" ? null : $?.precision,
      ...y.errToObj($?.message),
    });
  }
  duration($) {
    return this._addCheck({ kind: "duration", ...y.errToObj($) });
  }
  regex($, X) {
    return this._addCheck({ kind: "regex", regex: $, ...y.errToObj(X) });
  }
  includes($, X) {
    return this._addCheck({
      kind: "includes",
      value: $,
      position: X?.position,
      ...y.errToObj(X?.message),
    });
  }
  startsWith($, X) {
    return this._addCheck({ kind: "startsWith", value: $, ...y.errToObj(X) });
  }
  endsWith($, X) {
    return this._addCheck({ kind: "endsWith", value: $, ...y.errToObj(X) });
  }
  min($, X) {
    return this._addCheck({ kind: "min", value: $, ...y.errToObj(X) });
  }
  max($, X) {
    return this._addCheck({ kind: "max", value: $, ...y.errToObj(X) });
  }
  length($, X) {
    return this._addCheck({ kind: "length", value: $, ...y.errToObj(X) });
  }
  nonempty($) {
    return this.min(1, y.errToObj($));
  }
  trim() {
    return new j4({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new j4({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new j4({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find(($) => $.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find(($) => $.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find(($) => $.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find(($) => $.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find(($) => $.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find(($) => $.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find(($) => $.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find(($) => $.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find(($) => $.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find(($) => $.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find(($) => $.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find(($) => $.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find(($) => $.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find(($) => $.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find(($) => $.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find(($) => $.kind === "base64url");
  }
  get minLength() {
    let $ = null;
    for (let X of this._def.checks)
      if (X.kind === "min") {
        if ($ === null || X.value > $) $ = X.value;
      }
    return $;
  }
  get maxLength() {
    let $ = null;
    for (let X of this._def.checks)
      if (X.kind === "max") {
        if ($ === null || X.value < $) $ = X.value;
      }
    return $;
  }
}
j4.create = ($) => {
  return new j4({
    checks: [],
    typeName: R.ZodString,
    coerce: $?.coerce ?? !1,
    ...o($),
  });
};
function Qv($, X) {
  let J = ($.toString().split(".")[1] || "").length,
    Y = (X.toString().split(".")[1] || "").length,
    Q = J > Y ? J : Y,
    W = Number.parseInt($.toFixed(Q).replace(".", "")),
    z = Number.parseInt(X.toFixed(Q).replace(".", ""));
  return (W % z) / 10 ** Q;
}
class C0 extends e {
  constructor() {
    super(...arguments);
    ((this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf));
  }
  _parse($) {
    if (this._def.coerce) $.data = Number($.data);
    if (this._getType($) !== S.number) {
      let Q = this._getOrReturnCtx($);
      return (
        k(Q, {
          code: b.invalid_type,
          expected: S.number,
          received: Q.parsedType,
        }),
        c
      );
    }
    let J = void 0,
      Y = new p$();
    for (let Q of this._def.checks)
      if (Q.kind === "int") {
        if (!X$.isInteger($.data))
          ((J = this._getOrReturnCtx($, J)),
            k(J, {
              code: b.invalid_type,
              expected: "integer",
              received: "float",
              message: Q.message,
            }),
            Y.dirty());
      } else if (Q.kind === "min") {
        if (Q.inclusive ? $.data < Q.value : $.data <= Q.value)
          ((J = this._getOrReturnCtx($, J)),
            k(J, {
              code: b.too_small,
              minimum: Q.value,
              type: "number",
              inclusive: Q.inclusive,
              exact: !1,
              message: Q.message,
            }),
            Y.dirty());
      } else if (Q.kind === "max") {
        if (Q.inclusive ? $.data > Q.value : $.data >= Q.value)
          ((J = this._getOrReturnCtx($, J)),
            k(J, {
              code: b.too_big,
              maximum: Q.value,
              type: "number",
              inclusive: Q.inclusive,
              exact: !1,
              message: Q.message,
            }),
            Y.dirty());
      } else if (Q.kind === "multipleOf") {
        if (Qv($.data, Q.value) !== 0)
          ((J = this._getOrReturnCtx($, J)),
            k(J, {
              code: b.not_multiple_of,
              multipleOf: Q.value,
              message: Q.message,
            }),
            Y.dirty());
      } else if (Q.kind === "finite") {
        if (!Number.isFinite($.data))
          ((J = this._getOrReturnCtx($, J)),
            k(J, { code: b.not_finite, message: Q.message }),
            Y.dirty());
      } else X$.assertNever(Q);
    return { status: Y.value, value: $.data };
  }
  gte($, X) {
    return this.setLimit("min", $, !0, y.toString(X));
  }
  gt($, X) {
    return this.setLimit("min", $, !1, y.toString(X));
  }
  lte($, X) {
    return this.setLimit("max", $, !0, y.toString(X));
  }
  lt($, X) {
    return this.setLimit("max", $, !1, y.toString(X));
  }
  setLimit($, X, J, Y) {
    return new C0({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: $, value: X, inclusive: J, message: y.toString(Y) },
      ],
    });
  }
  _addCheck($) {
    return new C0({ ...this._def, checks: [...this._def.checks, $] });
  }
  int($) {
    return this._addCheck({ kind: "int", message: y.toString($) });
  }
  positive($) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: y.toString($),
    });
  }
  negative($) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: y.toString($),
    });
  }
  nonpositive($) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: y.toString($),
    });
  }
  nonnegative($) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: y.toString($),
    });
  }
  multipleOf($, X) {
    return this._addCheck({
      kind: "multipleOf",
      value: $,
      message: y.toString(X),
    });
  }
  finite($) {
    return this._addCheck({ kind: "finite", message: y.toString($) });
  }
  safe($) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: y.toString($),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: y.toString($),
    });
  }
  get minValue() {
    let $ = null;
    for (let X of this._def.checks)
      if (X.kind === "min") {
        if ($ === null || X.value > $) $ = X.value;
      }
    return $;
  }
  get maxValue() {
    let $ = null;
    for (let X of this._def.checks)
      if (X.kind === "max") {
        if ($ === null || X.value < $) $ = X.value;
      }
    return $;
  }
  get isInt() {
    return !!this._def.checks.find(
      ($) =>
        $.kind === "int" || ($.kind === "multipleOf" && X$.isInteger($.value)),
    );
  }
  get isFinite() {
    let $ = null,
      X = null;
    for (let J of this._def.checks)
      if (J.kind === "finite" || J.kind === "int" || J.kind === "multipleOf")
        return !0;
      else if (J.kind === "min") {
        if (X === null || J.value > X) X = J.value;
      } else if (J.kind === "max") {
        if ($ === null || J.value < $) $ = J.value;
      }
    return Number.isFinite(X) && Number.isFinite($);
  }
}
C0.create = ($) => {
  return new C0({
    checks: [],
    typeName: R.ZodNumber,
    coerce: $?.coerce || !1,
    ...o($),
  });
};
class k0 extends e {
  constructor() {
    super(...arguments);
    ((this.min = this.gte), (this.max = this.lte));
  }
  _parse($) {
    if (this._def.coerce)
      try {
        $.data = BigInt($.data);
      } catch {
        return this._getInvalidInput($);
      }
    if (this._getType($) !== S.bigint) return this._getInvalidInput($);
    let J = void 0,
      Y = new p$();
    for (let Q of this._def.checks)
      if (Q.kind === "min") {
        if (Q.inclusive ? $.data < Q.value : $.data <= Q.value)
          ((J = this._getOrReturnCtx($, J)),
            k(J, {
              code: b.too_small,
              type: "bigint",
              minimum: Q.value,
              inclusive: Q.inclusive,
              message: Q.message,
            }),
            Y.dirty());
      } else if (Q.kind === "max") {
        if (Q.inclusive ? $.data > Q.value : $.data >= Q.value)
          ((J = this._getOrReturnCtx($, J)),
            k(J, {
              code: b.too_big,
              type: "bigint",
              maximum: Q.value,
              inclusive: Q.inclusive,
              message: Q.message,
            }),
            Y.dirty());
      } else if (Q.kind === "multipleOf") {
        if ($.data % Q.value !== BigInt(0))
          ((J = this._getOrReturnCtx($, J)),
            k(J, {
              code: b.not_multiple_of,
              multipleOf: Q.value,
              message: Q.message,
            }),
            Y.dirty());
      } else X$.assertNever(Q);
    return { status: Y.value, value: $.data };
  }
  _getInvalidInput($) {
    let X = this._getOrReturnCtx($);
    return (
      k(X, {
        code: b.invalid_type,
        expected: S.bigint,
        received: X.parsedType,
      }),
      c
    );
  }
  gte($, X) {
    return this.setLimit("min", $, !0, y.toString(X));
  }
  gt($, X) {
    return this.setLimit("min", $, !1, y.toString(X));
  }
  lte($, X) {
    return this.setLimit("max", $, !0, y.toString(X));
  }
  lt($, X) {
    return this.setLimit("max", $, !1, y.toString(X));
  }
  setLimit($, X, J, Y) {
    return new k0({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: $, value: X, inclusive: J, message: y.toString(Y) },
      ],
    });
  }
  _addCheck($) {
    return new k0({ ...this._def, checks: [...this._def.checks, $] });
  }
  positive($) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: y.toString($),
    });
  }
  negative($) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: y.toString($),
    });
  }
  nonpositive($) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: y.toString($),
    });
  }
  nonnegative($) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: y.toString($),
    });
  }
  multipleOf($, X) {
    return this._addCheck({
      kind: "multipleOf",
      value: $,
      message: y.toString(X),
    });
  }
  get minValue() {
    let $ = null;
    for (let X of this._def.checks)
      if (X.kind === "min") {
        if ($ === null || X.value > $) $ = X.value;
      }
    return $;
  }
  get maxValue() {
    let $ = null;
    for (let X of this._def.checks)
      if (X.kind === "max") {
        if ($ === null || X.value < $) $ = X.value;
      }
    return $;
  }
}
k0.create = ($) => {
  return new k0({
    checks: [],
    typeName: R.ZodBigInt,
    coerce: $?.coerce ?? !1,
    ...o($),
  });
};
class R7 extends e {
  _parse($) {
    if (this._def.coerce) $.data = Boolean($.data);
    if (this._getType($) !== S.boolean) {
      let J = this._getOrReturnCtx($);
      return (
        k(J, {
          code: b.invalid_type,
          expected: S.boolean,
          received: J.parsedType,
        }),
        c
      );
    }
    return o$($.data);
  }
}
R7.create = ($) => {
  return new R7({ typeName: R.ZodBoolean, coerce: $?.coerce || !1, ...o($) });
};
class C9 extends e {
  _parse($) {
    if (this._def.coerce) $.data = new Date($.data);
    if (this._getType($) !== S.date) {
      let Q = this._getOrReturnCtx($);
      return (
        k(Q, {
          code: b.invalid_type,
          expected: S.date,
          received: Q.parsedType,
        }),
        c
      );
    }
    if (Number.isNaN($.data.getTime())) {
      let Q = this._getOrReturnCtx($);
      return (k(Q, { code: b.invalid_date }), c);
    }
    let J = new p$(),
      Y = void 0;
    for (let Q of this._def.checks)
      if (Q.kind === "min") {
        if ($.data.getTime() < Q.value)
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              code: b.too_small,
              message: Q.message,
              inclusive: !0,
              exact: !1,
              minimum: Q.value,
              type: "date",
            }),
            J.dirty());
      } else if (Q.kind === "max") {
        if ($.data.getTime() > Q.value)
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              code: b.too_big,
              message: Q.message,
              inclusive: !0,
              exact: !1,
              maximum: Q.value,
              type: "date",
            }),
            J.dirty());
      } else X$.assertNever(Q);
    return { status: J.value, value: new Date($.data.getTime()) };
  }
  _addCheck($) {
    return new C9({ ...this._def, checks: [...this._def.checks, $] });
  }
  min($, X) {
    return this._addCheck({
      kind: "min",
      value: $.getTime(),
      message: y.toString(X),
    });
  }
  max($, X) {
    return this._addCheck({
      kind: "max",
      value: $.getTime(),
      message: y.toString(X),
    });
  }
  get minDate() {
    let $ = null;
    for (let X of this._def.checks)
      if (X.kind === "min") {
        if ($ === null || X.value > $) $ = X.value;
      }
    return $ != null ? new Date($) : null;
  }
  get maxDate() {
    let $ = null;
    for (let X of this._def.checks)
      if (X.kind === "max") {
        if ($ === null || X.value < $) $ = X.value;
      }
    return $ != null ? new Date($) : null;
  }
}
C9.create = ($) => {
  return new C9({
    checks: [],
    coerce: $?.coerce || !1,
    typeName: R.ZodDate,
    ...o($),
  });
};
class P7 extends e {
  _parse($) {
    if (this._getType($) !== S.symbol) {
      let J = this._getOrReturnCtx($);
      return (
        k(J, {
          code: b.invalid_type,
          expected: S.symbol,
          received: J.parsedType,
        }),
        c
      );
    }
    return o$($.data);
  }
}
P7.create = ($) => {
  return new P7({ typeName: R.ZodSymbol, ...o($) });
};
class k9 extends e {
  _parse($) {
    if (this._getType($) !== S.undefined) {
      let J = this._getOrReturnCtx($);
      return (
        k(J, {
          code: b.invalid_type,
          expected: S.undefined,
          received: J.parsedType,
        }),
        c
      );
    }
    return o$($.data);
  }
}
k9.create = ($) => {
  return new k9({ typeName: R.ZodUndefined, ...o($) });
};
class _9 extends e {
  _parse($) {
    if (this._getType($) !== S.null) {
      let J = this._getOrReturnCtx($);
      return (
        k(J, {
          code: b.invalid_type,
          expected: S.null,
          received: J.parsedType,
        }),
        c
      );
    }
    return o$($.data);
  }
}
_9.create = ($) => {
  return new _9({ typeName: R.ZodNull, ...o($) });
};
class E7 extends e {
  constructor() {
    super(...arguments);
    this._any = !0;
  }
  _parse($) {
    return o$($.data);
  }
}
E7.create = ($) => {
  return new E7({ typeName: R.ZodAny, ...o($) });
};
class x1 extends e {
  constructor() {
    super(...arguments);
    this._unknown = !0;
  }
  _parse($) {
    return o$($.data);
  }
}
x1.create = ($) => {
  return new x1({ typeName: R.ZodUnknown, ...o($) });
};
class L4 extends e {
  _parse($) {
    let X = this._getOrReturnCtx($);
    return (
      k(X, { code: b.invalid_type, expected: S.never, received: X.parsedType }),
      c
    );
  }
}
L4.create = ($) => {
  return new L4({ typeName: R.ZodNever, ...o($) });
};
class S7 extends e {
  _parse($) {
    if (this._getType($) !== S.undefined) {
      let J = this._getOrReturnCtx($);
      return (
        k(J, {
          code: b.invalid_type,
          expected: S.void,
          received: J.parsedType,
        }),
        c
      );
    }
    return o$($.data);
  }
}
S7.create = ($) => {
  return new S7({ typeName: R.ZodVoid, ...o($) });
};
class e6 extends e {
  _parse($) {
    let { ctx: X, status: J } = this._processInputParams($),
      Y = this._def;
    if (X.parsedType !== S.array)
      return (
        k(X, {
          code: b.invalid_type,
          expected: S.array,
          received: X.parsedType,
        }),
        c
      );
    if (Y.exactLength !== null) {
      let W = X.data.length > Y.exactLength.value,
        z = X.data.length < Y.exactLength.value;
      if (W || z)
        (k(X, {
          code: W ? b.too_big : b.too_small,
          minimum: z ? Y.exactLength.value : void 0,
          maximum: W ? Y.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: Y.exactLength.message,
        }),
          J.dirty());
    }
    if (Y.minLength !== null) {
      if (X.data.length < Y.minLength.value)
        (k(X, {
          code: b.too_small,
          minimum: Y.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: Y.minLength.message,
        }),
          J.dirty());
    }
    if (Y.maxLength !== null) {
      if (X.data.length > Y.maxLength.value)
        (k(X, {
          code: b.too_big,
          maximum: Y.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: Y.maxLength.message,
        }),
          J.dirty());
    }
    if (X.common.async)
      return Promise.all(
        [...X.data].map((W, z) => {
          return Y.type._parseAsync(new u6(X, W, X.path, z));
        }),
      ).then((W) => {
        return p$.mergeArray(J, W);
      });
    let Q = [...X.data].map((W, z) => {
      return Y.type._parseSync(new u6(X, W, X.path, z));
    });
    return p$.mergeArray(J, Q);
  }
  get element() {
    return this._def.type;
  }
  min($, X) {
    return new e6({
      ...this._def,
      minLength: { value: $, message: y.toString(X) },
    });
  }
  max($, X) {
    return new e6({
      ...this._def,
      maxLength: { value: $, message: y.toString(X) },
    });
  }
  length($, X) {
    return new e6({
      ...this._def,
      exactLength: { value: $, message: y.toString(X) },
    });
  }
  nonempty($) {
    return this.min(1, $);
  }
}
e6.create = ($, X) => {
  return new e6({
    type: $,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: R.ZodArray,
    ...o(X),
  });
};
function v0($) {
  if ($ instanceof E$) {
    let X = {};
    for (let J in $.shape) {
      let Y = $.shape[J];
      X[J] = b6.create(v0(Y));
    }
    return new E$({ ...$._def, shape: () => X });
  } else if ($ instanceof e6) return new e6({ ...$._def, type: v0($.element) });
  else if ($ instanceof b6) return b6.create(v0($.unwrap()));
  else if ($ instanceof r4) return r4.create(v0($.unwrap()));
  else if ($ instanceof M4) return M4.create($.items.map((X) => v0(X)));
  else return $;
}
class E$ extends e {
  constructor() {
    super(...arguments);
    ((this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let $ = this._def.shape(),
      X = X$.objectKeys($);
    return ((this._cached = { shape: $, keys: X }), this._cached);
  }
  _parse($) {
    if (this._getType($) !== S.object) {
      let U = this._getOrReturnCtx($);
      return (
        k(U, {
          code: b.invalid_type,
          expected: S.object,
          received: U.parsedType,
        }),
        c
      );
    }
    let { status: J, ctx: Y } = this._processInputParams($),
      { shape: Q, keys: W } = this._getCached(),
      z = [];
    if (
      !(this._def.catchall instanceof L4 && this._def.unknownKeys === "strip")
    ) {
      for (let U in Y.data) if (!W.includes(U)) z.push(U);
    }
    let G = [];
    for (let U of W) {
      let H = Q[U],
        K = Y.data[U];
      G.push({
        key: { status: "valid", value: U },
        value: H._parse(new u6(Y, K, Y.path, U)),
        alwaysSet: U in Y.data,
      });
    }
    if (this._def.catchall instanceof L4) {
      let U = this._def.unknownKeys;
      if (U === "passthrough")
        for (let H of z)
          G.push({
            key: { status: "valid", value: H },
            value: { status: "valid", value: Y.data[H] },
          });
      else if (U === "strict") {
        if (z.length > 0)
          (k(Y, { code: b.unrecognized_keys, keys: z }), J.dirty());
      } else if (U === "strip");
      else throw Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let U = this._def.catchall;
      for (let H of z) {
        let K = Y.data[H];
        G.push({
          key: { status: "valid", value: H },
          value: U._parse(new u6(Y, K, Y.path, H)),
          alwaysSet: H in Y.data,
        });
      }
    }
    if (Y.common.async)
      return Promise.resolve()
        .then(async () => {
          let U = [];
          for (let H of G) {
            let K = await H.key,
              N = await H.value;
            U.push({ key: K, value: N, alwaysSet: H.alwaysSet });
          }
          return U;
        })
        .then((U) => {
          return p$.mergeObjectSync(J, U);
        });
    else return p$.mergeObjectSync(J, G);
  }
  get shape() {
    return this._def.shape();
  }
  strict($) {
    return (
      y.errToObj,
      new E$({
        ...this._def,
        unknownKeys: "strict",
        ...($ !== void 0
          ? {
              errorMap: (X, J) => {
                let Y = this._def.errorMap?.(X, J).message ?? J.defaultError;
                if (X.code === "unrecognized_keys")
                  return { message: y.errToObj($).message ?? Y };
                return { message: Y };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new E$({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new E$({ ...this._def, unknownKeys: "passthrough" });
  }
  extend($) {
    return new E$({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...$ }),
    });
  }
  merge($) {
    return new E$({
      unknownKeys: $._def.unknownKeys,
      catchall: $._def.catchall,
      shape: () => ({ ...this._def.shape(), ...$._def.shape() }),
      typeName: R.ZodObject,
    });
  }
  setKey($, X) {
    return this.augment({ [$]: X });
  }
  catchall($) {
    return new E$({ ...this._def, catchall: $ });
  }
  pick($) {
    let X = {};
    for (let J of X$.objectKeys($))
      if ($[J] && this.shape[J]) X[J] = this.shape[J];
    return new E$({ ...this._def, shape: () => X });
  }
  omit($) {
    let X = {};
    for (let J of X$.objectKeys(this.shape)) if (!$[J]) X[J] = this.shape[J];
    return new E$({ ...this._def, shape: () => X });
  }
  deepPartial() {
    return v0(this);
  }
  partial($) {
    let X = {};
    for (let J of X$.objectKeys(this.shape)) {
      let Y = this.shape[J];
      if ($ && !$[J]) X[J] = Y;
      else X[J] = Y.optional();
    }
    return new E$({ ...this._def, shape: () => X });
  }
  required($) {
    let X = {};
    for (let J of X$.objectKeys(this.shape))
      if ($ && !$[J]) X[J] = this.shape[J];
      else {
        let Q = this.shape[J];
        while (Q instanceof b6) Q = Q._def.innerType;
        X[J] = Q;
      }
    return new E$({ ...this._def, shape: () => X });
  }
  keyof() {
    return Dq(X$.objectKeys(this.shape));
  }
}
E$.create = ($, X) => {
  return new E$({
    shape: () => $,
    unknownKeys: "strip",
    catchall: L4.create(),
    typeName: R.ZodObject,
    ...o(X),
  });
};
E$.strictCreate = ($, X) => {
  return new E$({
    shape: () => $,
    unknownKeys: "strict",
    catchall: L4.create(),
    typeName: R.ZodObject,
    ...o(X),
  });
};
E$.lazycreate = ($, X) => {
  return new E$({
    shape: $,
    unknownKeys: "strip",
    catchall: L4.create(),
    typeName: R.ZodObject,
    ...o(X),
  });
};
class x9 extends e {
  _parse($) {
    let { ctx: X } = this._processInputParams($),
      J = this._def.options;
    function Y(Q) {
      for (let z of Q) if (z.result.status === "valid") return z.result;
      for (let z of Q)
        if (z.result.status === "dirty")
          return (X.common.issues.push(...z.ctx.common.issues), z.result);
      let W = Q.map((z) => new j6(z.ctx.common.issues));
      return (k(X, { code: b.invalid_union, unionErrors: W }), c);
    }
    if (X.common.async)
      return Promise.all(
        J.map(async (Q) => {
          let W = { ...X, common: { ...X.common, issues: [] }, parent: null };
          return {
            result: await Q._parseAsync({
              data: X.data,
              path: X.path,
              parent: W,
            }),
            ctx: W,
          };
        }),
      ).then(Y);
    else {
      let Q = void 0,
        W = [];
      for (let G of J) {
        let U = { ...X, common: { ...X.common, issues: [] }, parent: null },
          H = G._parseSync({ data: X.data, path: X.path, parent: U });
        if (H.status === "valid") return H;
        else if (H.status === "dirty" && !Q) Q = { result: H, ctx: U };
        if (U.common.issues.length) W.push(U.common.issues);
      }
      if (Q) return (X.common.issues.push(...Q.ctx.common.issues), Q.result);
      let z = W.map((G) => new j6(G));
      return (k(X, { code: b.invalid_union, unionErrors: z }), c);
    }
  }
  get options() {
    return this._def.options;
  }
}
x9.create = ($, X) => {
  return new x9({ options: $, typeName: R.ZodUnion, ...o(X) });
};
var F4 = ($) => {
  if ($ instanceof f9) return F4($.schema);
  else if ($ instanceof $4) return F4($.innerType());
  else if ($ instanceof y9) return [$.value];
  else if ($ instanceof T1) return $.options;
  else if ($ instanceof g9) return X$.objectValues($.enum);
  else if ($ instanceof h9) return F4($._def.innerType);
  else if ($ instanceof k9) return [void 0];
  else if ($ instanceof _9) return [null];
  else if ($ instanceof b6) return [void 0, ...F4($.unwrap())];
  else if ($ instanceof r4) return [null, ...F4($.unwrap())];
  else if ($ instanceof sz) return F4($.unwrap());
  else if ($ instanceof m9) return F4($.unwrap());
  else if ($ instanceof u9) return F4($._def.innerType);
  else return [];
};
class az extends e {
  _parse($) {
    let { ctx: X } = this._processInputParams($);
    if (X.parsedType !== S.object)
      return (
        k(X, {
          code: b.invalid_type,
          expected: S.object,
          received: X.parsedType,
        }),
        c
      );
    let J = this.discriminator,
      Y = X.data[J],
      Q = this.optionsMap.get(Y);
    if (!Q)
      return (
        k(X, {
          code: b.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [J],
        }),
        c
      );
    if (X.common.async)
      return Q._parseAsync({ data: X.data, path: X.path, parent: X });
    else return Q._parseSync({ data: X.data, path: X.path, parent: X });
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create($, X, J) {
    let Y = new Map();
    for (let Q of X) {
      let W = F4(Q.shape[$]);
      if (!W.length)
        throw Error(
          `A discriminator value for key \`${$}\` could not be extracted from all schema options`,
        );
      for (let z of W) {
        if (Y.has(z))
          throw Error(
            `Discriminator property ${String($)} has duplicate value ${String(z)}`,
          );
        Y.set(z, Q);
      }
    }
    return new az({
      typeName: R.ZodDiscriminatedUnion,
      discriminator: $,
      options: X,
      optionsMap: Y,
      ...o(J),
    });
  }
}
function tz($, X) {
  let J = D4($),
    Y = D4(X);
  if ($ === X) return { valid: !0, data: $ };
  else if (J === S.object && Y === S.object) {
    let Q = X$.objectKeys(X),
      W = X$.objectKeys($).filter((G) => Q.indexOf(G) !== -1),
      z = { ...$, ...X };
    for (let G of W) {
      let U = tz($[G], X[G]);
      if (!U.valid) return { valid: !1 };
      z[G] = U.data;
    }
    return { valid: !0, data: z };
  } else if (J === S.array && Y === S.array) {
    if ($.length !== X.length) return { valid: !1 };
    let Q = [];
    for (let W = 0; W < $.length; W++) {
      let z = $[W],
        G = X[W],
        U = tz(z, G);
      if (!U.valid) return { valid: !1 };
      Q.push(U.data);
    }
    return { valid: !0, data: Q };
  } else if (J === S.date && Y === S.date && +$ === +X)
    return { valid: !0, data: $ };
  else return { valid: !1 };
}
class T9 extends e {
  _parse($) {
    let { status: X, ctx: J } = this._processInputParams($),
      Y = (Q, W) => {
        if (nz(Q) || nz(W)) return c;
        let z = tz(Q.value, W.value);
        if (!z.valid) return (k(J, { code: b.invalid_intersection_types }), c);
        if (rz(Q) || rz(W)) X.dirty();
        return { status: X.value, value: z.data };
      };
    if (J.common.async)
      return Promise.all([
        this._def.left._parseAsync({ data: J.data, path: J.path, parent: J }),
        this._def.right._parseAsync({ data: J.data, path: J.path, parent: J }),
      ]).then(([Q, W]) => Y(Q, W));
    else
      return Y(
        this._def.left._parseSync({ data: J.data, path: J.path, parent: J }),
        this._def.right._parseSync({ data: J.data, path: J.path, parent: J }),
      );
  }
}
T9.create = ($, X, J) => {
  return new T9({ left: $, right: X, typeName: R.ZodIntersection, ...o(J) });
};
class M4 extends e {
  _parse($) {
    let { status: X, ctx: J } = this._processInputParams($);
    if (J.parsedType !== S.array)
      return (
        k(J, {
          code: b.invalid_type,
          expected: S.array,
          received: J.parsedType,
        }),
        c
      );
    if (J.data.length < this._def.items.length)
      return (
        k(J, {
          code: b.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        c
      );
    if (!this._def.rest && J.data.length > this._def.items.length)
      (k(J, {
        code: b.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
        X.dirty());
    let Q = [...J.data]
      .map((W, z) => {
        let G = this._def.items[z] || this._def.rest;
        if (!G) return null;
        return G._parse(new u6(J, W, J.path, z));
      })
      .filter((W) => !!W);
    if (J.common.async)
      return Promise.all(Q).then((W) => {
        return p$.mergeArray(X, W);
      });
    else return p$.mergeArray(X, Q);
  }
  get items() {
    return this._def.items;
  }
  rest($) {
    return new M4({ ...this._def, rest: $ });
  }
}
M4.create = ($, X) => {
  if (!Array.isArray($))
    throw Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new M4({ items: $, typeName: R.ZodTuple, rest: null, ...o(X) });
};
class v7 extends e {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse($) {
    let { status: X, ctx: J } = this._processInputParams($);
    if (J.parsedType !== S.object)
      return (
        k(J, {
          code: b.invalid_type,
          expected: S.object,
          received: J.parsedType,
        }),
        c
      );
    let Y = [],
      Q = this._def.keyType,
      W = this._def.valueType;
    for (let z in J.data)
      Y.push({
        key: Q._parse(new u6(J, z, J.path, z)),
        value: W._parse(new u6(J, J.data[z], J.path, z)),
        alwaysSet: z in J.data,
      });
    if (J.common.async) return p$.mergeObjectAsync(X, Y);
    else return p$.mergeObjectSync(X, Y);
  }
  get element() {
    return this._def.valueType;
  }
  static create($, X, J) {
    if (X instanceof e)
      return new v7({
        keyType: $,
        valueType: X,
        typeName: R.ZodRecord,
        ...o(J),
      });
    return new v7({
      keyType: j4.create(),
      valueType: $,
      typeName: R.ZodRecord,
      ...o(X),
    });
  }
}
class C7 extends e {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse($) {
    let { status: X, ctx: J } = this._processInputParams($);
    if (J.parsedType !== S.map)
      return (
        k(J, { code: b.invalid_type, expected: S.map, received: J.parsedType }),
        c
      );
    let Y = this._def.keyType,
      Q = this._def.valueType,
      W = [...J.data.entries()].map(([z, G], U) => {
        return {
          key: Y._parse(new u6(J, z, J.path, [U, "key"])),
          value: Q._parse(new u6(J, G, J.path, [U, "value"])),
        };
      });
    if (J.common.async) {
      let z = new Map();
      return Promise.resolve().then(async () => {
        for (let G of W) {
          let U = await G.key,
            H = await G.value;
          if (U.status === "aborted" || H.status === "aborted") return c;
          if (U.status === "dirty" || H.status === "dirty") X.dirty();
          z.set(U.value, H.value);
        }
        return { status: X.value, value: z };
      });
    } else {
      let z = new Map();
      for (let G of W) {
        let { key: U, value: H } = G;
        if (U.status === "aborted" || H.status === "aborted") return c;
        if (U.status === "dirty" || H.status === "dirty") X.dirty();
        z.set(U.value, H.value);
      }
      return { status: X.value, value: z };
    }
  }
}
C7.create = ($, X, J) => {
  return new C7({ valueType: X, keyType: $, typeName: R.ZodMap, ...o(J) });
};
class _0 extends e {
  _parse($) {
    let { status: X, ctx: J } = this._processInputParams($);
    if (J.parsedType !== S.set)
      return (
        k(J, { code: b.invalid_type, expected: S.set, received: J.parsedType }),
        c
      );
    let Y = this._def;
    if (Y.minSize !== null) {
      if (J.data.size < Y.minSize.value)
        (k(J, {
          code: b.too_small,
          minimum: Y.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Y.minSize.message,
        }),
          X.dirty());
    }
    if (Y.maxSize !== null) {
      if (J.data.size > Y.maxSize.value)
        (k(J, {
          code: b.too_big,
          maximum: Y.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Y.maxSize.message,
        }),
          X.dirty());
    }
    let Q = this._def.valueType;
    function W(G) {
      let U = new Set();
      for (let H of G) {
        if (H.status === "aborted") return c;
        if (H.status === "dirty") X.dirty();
        U.add(H.value);
      }
      return { status: X.value, value: U };
    }
    let z = [...J.data.values()].map((G, U) =>
      Q._parse(new u6(J, G, J.path, U)),
    );
    if (J.common.async) return Promise.all(z).then((G) => W(G));
    else return W(z);
  }
  min($, X) {
    return new _0({
      ...this._def,
      minSize: { value: $, message: y.toString(X) },
    });
  }
  max($, X) {
    return new _0({
      ...this._def,
      maxSize: { value: $, message: y.toString(X) },
    });
  }
  size($, X) {
    return this.min($, X).max($, X);
  }
  nonempty($) {
    return this.min(1, $);
  }
}
_0.create = ($, X) => {
  return new _0({
    valueType: $,
    minSize: null,
    maxSize: null,
    typeName: R.ZodSet,
    ...o(X),
  });
};
class v9 extends e {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse($) {
    let { ctx: X } = this._processInputParams($);
    if (X.parsedType !== S.function)
      return (
        k(X, {
          code: b.invalid_type,
          expected: S.function,
          received: X.parsedType,
        }),
        c
      );
    function J(z, G) {
      return b7({
        data: z,
        path: X.path,
        errorMaps: [
          X.common.contextualErrorMap,
          X.schemaErrorMap,
          E9(),
          n4,
        ].filter((U) => !!U),
        issueData: { code: b.invalid_arguments, argumentsError: G },
      });
    }
    function Y(z, G) {
      return b7({
        data: z,
        path: X.path,
        errorMaps: [
          X.common.contextualErrorMap,
          X.schemaErrorMap,
          E9(),
          n4,
        ].filter((U) => !!U),
        issueData: { code: b.invalid_return_type, returnTypeError: G },
      });
    }
    let Q = { errorMap: X.common.contextualErrorMap },
      W = X.data;
    if (this._def.returns instanceof x0) {
      let z = this;
      return o$(async function (...G) {
        let U = new j6([]),
          H = await z._def.args.parseAsync(G, Q).catch((V) => {
            throw (U.addIssue(J(G, V)), U);
          }),
          K = await Reflect.apply(W, this, H);
        return await z._def.returns._def.type.parseAsync(K, Q).catch((V) => {
          throw (U.addIssue(Y(K, V)), U);
        });
      });
    } else {
      let z = this;
      return o$(function (...G) {
        let U = z._def.args.safeParse(G, Q);
        if (!U.success) throw new j6([J(G, U.error)]);
        let H = Reflect.apply(W, this, U.data),
          K = z._def.returns.safeParse(H, Q);
        if (!K.success) throw new j6([Y(H, K.error)]);
        return K.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...$) {
    return new v9({ ...this._def, args: M4.create($).rest(x1.create()) });
  }
  returns($) {
    return new v9({ ...this._def, returns: $ });
  }
  implement($) {
    return this.parse($);
  }
  strictImplement($) {
    return this.parse($);
  }
  static create($, X, J) {
    return new v9({
      args: $ ? $ : M4.create([]).rest(x1.create()),
      returns: X || x1.create(),
      typeName: R.ZodFunction,
      ...o(J),
    });
  }
}
class f9 extends e {
  get schema() {
    return this._def.getter();
  }
  _parse($) {
    let { ctx: X } = this._processInputParams($);
    return this._def.getter()._parse({ data: X.data, path: X.path, parent: X });
  }
}
f9.create = ($, X) => {
  return new f9({ getter: $, typeName: R.ZodLazy, ...o(X) });
};
class y9 extends e {
  _parse($) {
    if ($.data !== this._def.value) {
      let X = this._getOrReturnCtx($);
      return (
        k(X, {
          received: X.data,
          code: b.invalid_literal,
          expected: this._def.value,
        }),
        c
      );
    }
    return { status: "valid", value: $.data };
  }
  get value() {
    return this._def.value;
  }
}
y9.create = ($, X) => {
  return new y9({ value: $, typeName: R.ZodLiteral, ...o(X) });
};
function Dq($, X) {
  return new T1({ values: $, typeName: R.ZodEnum, ...o(X) });
}
class T1 extends e {
  _parse($) {
    if (typeof $.data !== "string") {
      let X = this._getOrReturnCtx($),
        J = this._def.values;
      return (
        k(X, {
          expected: X$.joinValues(J),
          received: X.parsedType,
          code: b.invalid_type,
        }),
        c
      );
    }
    if (!this._cache) this._cache = new Set(this._def.values);
    if (!this._cache.has($.data)) {
      let X = this._getOrReturnCtx($),
        J = this._def.values;
      return (
        k(X, { received: X.data, code: b.invalid_enum_value, options: J }),
        c
      );
    }
    return o$($.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let $ = {};
    for (let X of this._def.values) $[X] = X;
    return $;
  }
  get Values() {
    let $ = {};
    for (let X of this._def.values) $[X] = X;
    return $;
  }
  get Enum() {
    let $ = {};
    for (let X of this._def.values) $[X] = X;
    return $;
  }
  extract($, X = this._def) {
    return T1.create($, { ...this._def, ...X });
  }
  exclude($, X = this._def) {
    return T1.create(
      this.options.filter((J) => !$.includes(J)),
      { ...this._def, ...X },
    );
  }
}
T1.create = Dq;
class g9 extends e {
  _parse($) {
    let X = X$.getValidEnumValues(this._def.values),
      J = this._getOrReturnCtx($);
    if (J.parsedType !== S.string && J.parsedType !== S.number) {
      let Y = X$.objectValues(X);
      return (
        k(J, {
          expected: X$.joinValues(Y),
          received: J.parsedType,
          code: b.invalid_type,
        }),
        c
      );
    }
    if (!this._cache)
      this._cache = new Set(X$.getValidEnumValues(this._def.values));
    if (!this._cache.has($.data)) {
      let Y = X$.objectValues(X);
      return (
        k(J, { received: J.data, code: b.invalid_enum_value, options: Y }),
        c
      );
    }
    return o$($.data);
  }
  get enum() {
    return this._def.values;
  }
}
g9.create = ($, X) => {
  return new g9({ values: $, typeName: R.ZodNativeEnum, ...o(X) });
};
class x0 extends e {
  unwrap() {
    return this._def.type;
  }
  _parse($) {
    let { ctx: X } = this._processInputParams($);
    if (X.parsedType !== S.promise && X.common.async === !1)
      return (
        k(X, {
          code: b.invalid_type,
          expected: S.promise,
          received: X.parsedType,
        }),
        c
      );
    let J = X.parsedType === S.promise ? X.data : Promise.resolve(X.data);
    return o$(
      J.then((Y) => {
        return this._def.type.parseAsync(Y, {
          path: X.path,
          errorMap: X.common.contextualErrorMap,
        });
      }),
    );
  }
}
x0.create = ($, X) => {
  return new x0({ type: $, typeName: R.ZodPromise, ...o(X) });
};
class $4 extends e {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === R.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse($) {
    let { status: X, ctx: J } = this._processInputParams($),
      Y = this._def.effect || null,
      Q = {
        addIssue: (W) => {
          if ((k(J, W), W.fatal)) X.abort();
          else X.dirty();
        },
        get path() {
          return J.path;
        },
      };
    if (((Q.addIssue = Q.addIssue.bind(Q)), Y.type === "preprocess")) {
      let W = Y.transform(J.data, Q);
      if (J.common.async)
        return Promise.resolve(W).then(async (z) => {
          if (X.value === "aborted") return c;
          let G = await this._def.schema._parseAsync({
            data: z,
            path: J.path,
            parent: J,
          });
          if (G.status === "aborted") return c;
          if (G.status === "dirty") return S0(G.value);
          if (X.value === "dirty") return S0(G.value);
          return G;
        });
      else {
        if (X.value === "aborted") return c;
        let z = this._def.schema._parseSync({
          data: W,
          path: J.path,
          parent: J,
        });
        if (z.status === "aborted") return c;
        if (z.status === "dirty") return S0(z.value);
        if (X.value === "dirty") return S0(z.value);
        return z;
      }
    }
    if (Y.type === "refinement") {
      let W = (z) => {
        let G = Y.refinement(z, Q);
        if (J.common.async) return Promise.resolve(G);
        if (G instanceof Promise)
          throw Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return z;
      };
      if (J.common.async === !1) {
        let z = this._def.schema._parseSync({
          data: J.data,
          path: J.path,
          parent: J,
        });
        if (z.status === "aborted") return c;
        if (z.status === "dirty") X.dirty();
        return (W(z.value), { status: X.value, value: z.value });
      } else
        return this._def.schema
          ._parseAsync({ data: J.data, path: J.path, parent: J })
          .then((z) => {
            if (z.status === "aborted") return c;
            if (z.status === "dirty") X.dirty();
            return W(z.value).then(() => {
              return { status: X.value, value: z.value };
            });
          });
    }
    if (Y.type === "transform")
      if (J.common.async === !1) {
        let W = this._def.schema._parseSync({
          data: J.data,
          path: J.path,
          parent: J,
        });
        if (!_1(W)) return c;
        let z = Y.transform(W.value, Q);
        if (z instanceof Promise)
          throw Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return { status: X.value, value: z };
      } else
        return this._def.schema
          ._parseAsync({ data: J.data, path: J.path, parent: J })
          .then((W) => {
            if (!_1(W)) return c;
            return Promise.resolve(Y.transform(W.value, Q)).then((z) => ({
              status: X.value,
              value: z,
            }));
          });
    X$.assertNever(Y);
  }
}
$4.create = ($, X, J) => {
  return new $4({ schema: $, typeName: R.ZodEffects, effect: X, ...o(J) });
};
$4.createWithPreprocess = ($, X, J) => {
  return new $4({
    schema: X,
    effect: { type: "preprocess", transform: $ },
    typeName: R.ZodEffects,
    ...o(J),
  });
};
class b6 extends e {
  _parse($) {
    if (this._getType($) === S.undefined) return o$(void 0);
    return this._def.innerType._parse($);
  }
  unwrap() {
    return this._def.innerType;
  }
}
b6.create = ($, X) => {
  return new b6({ innerType: $, typeName: R.ZodOptional, ...o(X) });
};
class r4 extends e {
  _parse($) {
    if (this._getType($) === S.null) return o$(null);
    return this._def.innerType._parse($);
  }
  unwrap() {
    return this._def.innerType;
  }
}
r4.create = ($, X) => {
  return new r4({ innerType: $, typeName: R.ZodNullable, ...o(X) });
};
class h9 extends e {
  _parse($) {
    let { ctx: X } = this._processInputParams($),
      J = X.data;
    if (X.parsedType === S.undefined) J = this._def.defaultValue();
    return this._def.innerType._parse({ data: J, path: X.path, parent: X });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
h9.create = ($, X) => {
  return new h9({
    innerType: $,
    typeName: R.ZodDefault,
    defaultValue: typeof X.default === "function" ? X.default : () => X.default,
    ...o(X),
  });
};
class u9 extends e {
  _parse($) {
    let { ctx: X } = this._processInputParams($),
      J = { ...X, common: { ...X.common, issues: [] } },
      Y = this._def.innerType._parse({
        data: J.data,
        path: J.path,
        parent: { ...J },
      });
    if (S9(Y))
      return Y.then((Q) => {
        return {
          status: "valid",
          value:
            Q.status === "valid"
              ? Q.value
              : this._def.catchValue({
                  get error() {
                    return new j6(J.common.issues);
                  },
                  input: J.data,
                }),
        };
      });
    else
      return {
        status: "valid",
        value:
          Y.status === "valid"
            ? Y.value
            : this._def.catchValue({
                get error() {
                  return new j6(J.common.issues);
                },
                input: J.data,
              }),
      };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
u9.create = ($, X) => {
  return new u9({
    innerType: $,
    typeName: R.ZodCatch,
    catchValue: typeof X.catch === "function" ? X.catch : () => X.catch,
    ...o(X),
  });
};
class k7 extends e {
  _parse($) {
    if (this._getType($) !== S.nan) {
      let J = this._getOrReturnCtx($);
      return (
        k(J, { code: b.invalid_type, expected: S.nan, received: J.parsedType }),
        c
      );
    }
    return { status: "valid", value: $.data };
  }
}
k7.create = ($) => {
  return new k7({ typeName: R.ZodNaN, ...o($) });
};
var he = Symbol("zod_brand");
class sz extends e {
  _parse($) {
    let { ctx: X } = this._processInputParams($),
      J = X.data;
    return this._def.type._parse({ data: J, path: X.path, parent: X });
  }
  unwrap() {
    return this._def.type;
  }
}
class _7 extends e {
  _parse($) {
    let { status: X, ctx: J } = this._processInputParams($);
    if (J.common.async)
      return (async () => {
        let Q = await this._def.in._parseAsync({
          data: J.data,
          path: J.path,
          parent: J,
        });
        if (Q.status === "aborted") return c;
        if (Q.status === "dirty") return (X.dirty(), S0(Q.value));
        else
          return this._def.out._parseAsync({
            data: Q.value,
            path: J.path,
            parent: J,
          });
      })();
    else {
      let Y = this._def.in._parseSync({
        data: J.data,
        path: J.path,
        parent: J,
      });
      if (Y.status === "aborted") return c;
      if (Y.status === "dirty")
        return (X.dirty(), { status: "dirty", value: Y.value });
      else
        return this._def.out._parseSync({
          data: Y.value,
          path: J.path,
          parent: J,
        });
    }
  }
  static create($, X) {
    return new _7({ in: $, out: X, typeName: R.ZodPipeline });
  }
}
class m9 extends e {
  _parse($) {
    let X = this._def.innerType._parse($),
      J = (Y) => {
        if (_1(Y)) Y.value = Object.freeze(Y.value);
        return Y;
      };
    return S9(X) ? X.then((Y) => J(Y)) : J(X);
  }
  unwrap() {
    return this._def.innerType;
  }
}
m9.create = ($, X) => {
  return new m9({ innerType: $, typeName: R.ZodReadonly, ...o(X) });
};
var ue = { object: E$.lazycreate },
  R;
(function ($) {
  (($.ZodString = "ZodString"),
    ($.ZodNumber = "ZodNumber"),
    ($.ZodNaN = "ZodNaN"),
    ($.ZodBigInt = "ZodBigInt"),
    ($.ZodBoolean = "ZodBoolean"),
    ($.ZodDate = "ZodDate"),
    ($.ZodSymbol = "ZodSymbol"),
    ($.ZodUndefined = "ZodUndefined"),
    ($.ZodNull = "ZodNull"),
    ($.ZodAny = "ZodAny"),
    ($.ZodUnknown = "ZodUnknown"),
    ($.ZodNever = "ZodNever"),
    ($.ZodVoid = "ZodVoid"),
    ($.ZodArray = "ZodArray"),
    ($.ZodObject = "ZodObject"),
    ($.ZodUnion = "ZodUnion"),
    ($.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    ($.ZodIntersection = "ZodIntersection"),
    ($.ZodTuple = "ZodTuple"),
    ($.ZodRecord = "ZodRecord"),
    ($.ZodMap = "ZodMap"),
    ($.ZodSet = "ZodSet"),
    ($.ZodFunction = "ZodFunction"),
    ($.ZodLazy = "ZodLazy"),
    ($.ZodLiteral = "ZodLiteral"),
    ($.ZodEnum = "ZodEnum"),
    ($.ZodEffects = "ZodEffects"),
    ($.ZodNativeEnum = "ZodNativeEnum"),
    ($.ZodOptional = "ZodOptional"),
    ($.ZodNullable = "ZodNullable"),
    ($.ZodDefault = "ZodDefault"),
    ($.ZodCatch = "ZodCatch"),
    ($.ZodPromise = "ZodPromise"),
    ($.ZodBranded = "ZodBranded"),
    ($.ZodPipeline = "ZodPipeline"),
    ($.ZodReadonly = "ZodReadonly"));
})(R || (R = {}));
var me = j4.create,
  le = C0.create,
  ce = k7.create,
  de = k0.create,
  pe = R7.create,
  ie = C9.create,
  ne = P7.create,
  re = k9.create,
  oe = _9.create,
  te = E7.create,
  ae = x1.create,
  se = L4.create,
  ee = S7.create,
  $$$ = e6.create,
  Fq = E$.create,
  X$$ = E$.strictCreate,
  J$$ = x9.create,
  Q$$ = az.create,
  Y$$ = T9.create,
  W$$ = M4.create,
  z$$ = v7.create,
  G$$ = C7.create,
  U$$ = _0.create,
  H$$ = v9.create,
  K$$ = f9.create,
  N$$ = y9.create,
  V$$ = T1.create,
  O$$ = g9.create,
  w$$ = x0.create,
  B$$ = $4.create,
  q$$ = b6.create,
  D$$ = r4.create,
  F$$ = $4.createWithPreprocess,
  j$$ = _7.create;
var m6 = {};
B1(m6, {
  version: () => J3,
  util: () => E,
  treeifyError: () => y7,
  toJSONSchema: () => t0,
  toDotPath: () => Mq,
  safeParseAsync: () => a4,
  safeParse: () => t4,
  registry: () => QX,
  regexes: () => s4,
  prettifyError: () => g7,
  parseAsync: () => h1,
  parse: () => g1,
  locales: () => p0,
  isValidJWT: () => hq,
  isValidBase64URL: () => gq,
  isValidBase64: () => U3,
  globalRegistry: () => z6,
  globalConfig: () => l9,
  function: () => F5,
  formatError: () => h0,
  flattenError: () => g0,
  config: () => v$,
  clone: () => i$,
  _xid: () => BX,
  _void: () => K5,
  _uuidv7: () => UX,
  _uuidv6: () => GX,
  _uuidv4: () => zX,
  _uuid: () => WX,
  _url: () => HX,
  _uppercase: () => EX,
  _unknown: () => l1,
  _union: () => MC,
  _undefined: () => z5,
  _ulid: () => wX,
  _uint64: () => Y5,
  _uint32: () => $5,
  _tuple: () => GU,
  _trim: () => xX,
  _transform: () => vC,
  _toUpperCase: () => fX,
  _toLowerCase: () => TX,
  _templateLiteral: () => hC,
  _symbol: () => W5,
  _success: () => TC,
  _stringbool: () => q5,
  _stringFormat: () => D5,
  _string: () => nQ,
  _startsWith: () => vX,
  _size: () => bX,
  _set: () => RC,
  _safeParseAsync: () => l7,
  _safeParse: () => m7,
  _regex: () => RX,
  _refine: () => B5,
  _record: () => ZC,
  _readonly: () => gC,
  _property: () => zU,
  _promise: () => mC,
  _positive: () => JU,
  _pipe: () => yC,
  _parseAsync: () => u7,
  _parse: () => h7,
  _overwrite: () => R4,
  _optional: () => CC,
  _number: () => oQ,
  _nullable: () => kC,
  _null: () => G5,
  _normalize: () => _X,
  _nonpositive: () => YU,
  _nonoptional: () => xC,
  _nonnegative: () => WU,
  _never: () => H5,
  _negative: () => QU,
  _nativeEnum: () => EC,
  _nanoid: () => NX,
  _nan: () => V5,
  _multipleOf: () => c1,
  _minSize: () => d1,
  _minLength: () => X1,
  _min: () => G6,
  _mime: () => kX,
  _maxSize: () => n0,
  _maxLength: () => r0,
  _max: () => R6,
  _map: () => bC,
  _lte: () => R6,
  _lt: () => Z4,
  _lowercase: () => PX,
  _literal: () => SC,
  _length: () => o0,
  _lazy: () => uC,
  _ksuid: () => qX,
  _jwt: () => ZX,
  _isoTime: () => t3,
  _isoDuration: () => a3,
  _isoDateTime: () => r3,
  _isoDate: () => o3,
  _ipv6: () => FX,
  _ipv4: () => DX,
  _intersection: () => IC,
  _int64: () => Q5,
  _int32: () => eQ,
  _int: () => tQ,
  _includes: () => SX,
  _guid: () => i0,
  _gte: () => G6,
  _gt: () => b4,
  _float64: () => sQ,
  _float32: () => aQ,
  _file: () => O5,
  _enum: () => PC,
  _endsWith: () => CX,
  _emoji: () => KX,
  _email: () => YX,
  _e164: () => IX,
  _discriminatedUnion: () => AC,
  _default: () => _C,
  _date: () => N5,
  _custom: () => w5,
  _cuid2: () => OX,
  _cuid: () => VX,
  _coercedString: () => n3,
  _coercedNumber: () => s3,
  _coercedDate: () => XU,
  _coercedBoolean: () => e3,
  _coercedBigint: () => $U,
  _cidrv6: () => LX,
  _cidrv4: () => jX,
  _catch: () => fC,
  _boolean: () => X5,
  _bigint: () => J5,
  _base64url: () => AX,
  _base64: () => MX,
  _array: () => yX,
  _any: () => U5,
  TimePrecision: () => rQ,
  NEVER: () => x7,
  JSONSchemaGenerator: () => j5,
  JSONSchema: () => cq,
  Doc: () => i7,
  $output: () => pQ,
  $input: () => iQ,
  $constructor: () => q,
  $brand: () => T7,
  $ZodXID: () => YQ,
  $ZodVoid: () => AQ,
  $ZodUnknown: () => m1,
  $ZodUnion: () => $X,
  $ZodUndefined: () => FQ,
  $ZodUUID: () => t7,
  $ZodURL: () => s7,
  $ZodULID: () => QQ,
  $ZodType: () => p,
  $ZodTuple: () => $1,
  $ZodTransform: () => c0,
  $ZodTemplateLiteral: () => mQ,
  $ZodSymbol: () => DQ,
  $ZodSuccess: () => yQ,
  $ZodStringFormat: () => K$,
  $ZodString: () => e4,
  $ZodSet: () => EQ,
  $ZodRegistry: () => JX,
  $ZodRecord: () => RQ,
  $ZodRealError: () => y0,
  $ZodReadonly: () => uQ,
  $ZodPromise: () => lQ,
  $ZodPrefault: () => TQ,
  $ZodPipe: () => d0,
  $ZodOptional: () => kQ,
  $ZodObject: () => e9,
  $ZodNumberFormat: () => BQ,
  $ZodNumber: () => a9,
  $ZodNullable: () => _Q,
  $ZodNull: () => jQ,
  $ZodNonOptional: () => fQ,
  $ZodNever: () => MQ,
  $ZodNanoID: () => $Q,
  $ZodNaN: () => hQ,
  $ZodMap: () => PQ,
  $ZodLiteral: () => vQ,
  $ZodLazy: () => cQ,
  $ZodKSUID: () => WQ,
  $ZodJWT: () => OQ,
  $ZodIntersection: () => bQ,
  $ZodISOTime: () => z3,
  $ZodISODuration: () => G3,
  $ZodISODateTime: () => Y3,
  $ZodISODate: () => W3,
  $ZodIPv6: () => GQ,
  $ZodIPv4: () => zQ,
  $ZodGUID: () => o7,
  $ZodFunction: () => UU,
  $ZodFile: () => CQ,
  $ZodError: () => t9,
  $ZodEnum: () => SQ,
  $ZodEmoji: () => e7,
  $ZodEmail: () => a7,
  $ZodE164: () => VQ,
  $ZodDiscriminatedUnion: () => ZQ,
  $ZodDefault: () => xQ,
  $ZodDate: () => IQ,
  $ZodCustomStringFormat: () => wQ,
  $ZodCustom: () => dQ,
  $ZodCheckUpperCase: () => oG,
  $ZodCheckStringFormat: () => u0,
  $ZodCheckStartsWith: () => aG,
  $ZodCheckSizeEquals: () => cG,
  $ZodCheckRegex: () => nG,
  $ZodCheckProperty: () => eG,
  $ZodCheckOverwrite: () => X3,
  $ZodCheckNumberFormat: () => hG,
  $ZodCheckMultipleOf: () => gG,
  $ZodCheckMinSize: () => lG,
  $ZodCheckMinLength: () => pG,
  $ZodCheckMimeType: () => $3,
  $ZodCheckMaxSize: () => mG,
  $ZodCheckMaxLength: () => dG,
  $ZodCheckLowerCase: () => rG,
  $ZodCheckLessThan: () => d7,
  $ZodCheckLengthEquals: () => iG,
  $ZodCheckIncludes: () => tG,
  $ZodCheckGreaterThan: () => p7,
  $ZodCheckEndsWith: () => sG,
  $ZodCheckBigIntFormat: () => uG,
  $ZodCheck: () => I$,
  $ZodCatch: () => gQ,
  $ZodCUID2: () => JQ,
  $ZodCUID: () => XQ,
  $ZodCIDRv6: () => HQ,
  $ZodCIDRv4: () => UQ,
  $ZodBoolean: () => m0,
  $ZodBigIntFormat: () => qQ,
  $ZodBigInt: () => s9,
  $ZodBase64URL: () => NQ,
  $ZodBase64: () => KQ,
  $ZodAsyncError: () => A4,
  $ZodArray: () => l0,
  $ZodAny: () => LQ,
});
var x7 = Object.freeze({ status: "aborted" });
function q($, X, J) {
  function Y(G, U) {
    var H;
    (Object.defineProperty(G, "_zod", { value: G._zod ?? {}, enumerable: !1 }),
      (H = G._zod).traits ?? (H.traits = new Set()),
      G._zod.traits.add($),
      X(G, U));
    for (let K in z.prototype)
      if (!(K in G))
        Object.defineProperty(G, K, { value: z.prototype[K].bind(G) });
    ((G._zod.constr = z), (G._zod.def = U));
  }
  let Q = J?.Parent ?? Object;
  class W extends Q {}
  Object.defineProperty(W, "name", { value: $ });
  function z(G) {
    var U;
    let H = J?.Parent ? new W() : this;
    (Y(H, G), (U = H._zod).deferred ?? (U.deferred = []));
    for (let K of H._zod.deferred) K();
    return H;
  }
  return (
    Object.defineProperty(z, "init", { value: Y }),
    Object.defineProperty(z, Symbol.hasInstance, {
      value: (G) => {
        if (J?.Parent && G instanceof J.Parent) return !0;
        return G?._zod?.traits?.has($);
      },
    }),
    Object.defineProperty(z, "name", { value: $ }),
    z
  );
}
var T7 = Symbol("zod_brand");
class A4 extends Error {
  constructor() {
    super(
      "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
    );
  }
}
var l9 = {};
function v$($) {
  if ($) Object.assign(l9, $);
  return l9;
}
var E = {};
B1(E, {
  unwrapMessage: () => c9,
  stringifyPrimitive: () => v,
  required: () => Lv,
  randomString: () => Nv,
  propertyKeyTypes: () => n9,
  promiseAllObject: () => Kv,
  primitiveTypes: () => YG,
  prefixIssues: () => W6,
  pick: () => Bv,
  partial: () => jv,
  optionalKeys: () => WG,
  omit: () => qv,
  numKeys: () => Vv,
  nullish: () => o4,
  normalizeParams: () => P,
  merge: () => Fv,
  jsonStringifyReplacer: () => $G,
  joinValues: () => A,
  issue: () => UG,
  isPlainObject: () => f0,
  isObject: () => T0,
  getSizableOrigin: () => r9,
  getParsedType: () => Ov,
  getLengthableOrigin: () => o9,
  getEnumValues: () => d9,
  getElementAtPath: () => Hv,
  floatSafeRemainder: () => XG,
  finalizeIssue: () => L6,
  extend: () => Dv,
  escapeRegex: () => I4,
  esc: () => f1,
  defineLazy: () => G$,
  createTransparentProxy: () => wv,
  clone: () => i$,
  cleanRegex: () => i9,
  cleanEnum: () => Mv,
  captureStackTrace: () => f7,
  cached: () => p9,
  assignProp: () => JG,
  assertNotEqual: () => Wv,
  assertNever: () => Gv,
  assertIs: () => zv,
  assertEqual: () => Yv,
  assert: () => Uv,
  allowsEval: () => QG,
  aborted: () => y1,
  NUMBER_FORMAT_RANGES: () => zG,
  Class: () => jq,
  BIGINT_FORMAT_RANGES: () => GG,
});
function Yv($) {
  return $;
}
function Wv($) {
  return $;
}
function zv($) {}
function Gv($) {
  throw Error();
}
function Uv($) {}
function d9($) {
  let X = Object.values($).filter((Y) => typeof Y === "number");
  return Object.entries($)
    .filter(([Y, Q]) => X.indexOf(+Y) === -1)
    .map(([Y, Q]) => Q);
}
function A($, X = "|") {
  return $.map((J) => v(J)).join(X);
}
function $G($, X) {
  if (typeof X === "bigint") return X.toString();
  return X;
}
function p9($) {
  return {
    get value() {
      {
        let J = $();
        return (Object.defineProperty(this, "value", { value: J }), J);
      }
      throw Error("cached value already set");
    },
  };
}
function o4($) {
  return $ === null || $ === void 0;
}
function i9($) {
  let X = $.startsWith("^") ? 1 : 0,
    J = $.endsWith("$") ? $.length - 1 : $.length;
  return $.slice(X, J);
}
function XG($, X) {
  let J = ($.toString().split(".")[1] || "").length,
    Y = (X.toString().split(".")[1] || "").length,
    Q = J > Y ? J : Y,
    W = Number.parseInt($.toFixed(Q).replace(".", "")),
    z = Number.parseInt(X.toFixed(Q).replace(".", ""));
  return (W % z) / 10 ** Q;
}
function G$($, X, J) {
  Object.defineProperty($, X, {
    get() {
      {
        let Q = J();
        return (($[X] = Q), Q);
      }
      throw Error("cached value already set");
    },
    set(Q) {
      Object.defineProperty($, X, { value: Q });
    },
    configurable: !0,
  });
}
function JG($, X, J) {
  Object.defineProperty($, X, {
    value: J,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function Hv($, X) {
  if (!X) return $;
  return X.reduce((J, Y) => J?.[Y], $);
}
function Kv($) {
  let X = Object.keys($),
    J = X.map((Y) => $[Y]);
  return Promise.all(J).then((Y) => {
    let Q = {};
    for (let W = 0; W < X.length; W++) Q[X[W]] = Y[W];
    return Q;
  });
}
function Nv($ = 10) {
  let J = "";
  for (let Y = 0; Y < $; Y++)
    J += "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)];
  return J;
}
function f1($) {
  return JSON.stringify($);
}
var f7 = Error.captureStackTrace ? Error.captureStackTrace : (...$) => {};
function T0($) {
  return typeof $ === "object" && $ !== null && !Array.isArray($);
}
var QG = p9(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    return (new Function(""), !0);
  } catch ($) {
    return !1;
  }
});
function f0($) {
  if (T0($) === !1) return !1;
  let X = $.constructor;
  if (X === void 0) return !0;
  let J = X.prototype;
  if (T0(J) === !1) return !1;
  if (Object.prototype.hasOwnProperty.call(J, "isPrototypeOf") === !1)
    return !1;
  return !0;
}
function Vv($) {
  let X = 0;
  for (let J in $) if (Object.prototype.hasOwnProperty.call($, J)) X++;
  return X;
}
var Ov = ($) => {
    let X = typeof $;
    switch (X) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return Number.isNaN($) ? "nan" : "number";
      case "boolean":
        return "boolean";
      case "function":
        return "function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
      case "object":
        if (Array.isArray($)) return "array";
        if ($ === null) return "null";
        if (
          $.then &&
          typeof $.then === "function" &&
          $.catch &&
          typeof $.catch === "function"
        )
          return "promise";
        if (typeof Map < "u" && $ instanceof Map) return "map";
        if (typeof Set < "u" && $ instanceof Set) return "set";
        if (typeof Date < "u" && $ instanceof Date) return "date";
        if (typeof File < "u" && $ instanceof File) return "file";
        return "object";
      default:
        throw Error(`Unknown data type: ${X}`);
    }
  },
  n9 = new Set(["string", "number", "symbol"]),
  YG = new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined",
  ]);
function I4($) {
  return $.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function i$($, X, J) {
  let Y = new $._zod.constr(X ?? $._zod.def);
  if (!X || J?.parent) Y._zod.parent = $;
  return Y;
}
function P($) {
  let X = $;
  if (!X) return {};
  if (typeof X === "string") return { error: () => X };
  if (X?.message !== void 0) {
    if (X?.error !== void 0)
      throw Error("Cannot specify both `message` and `error` params");
    X.error = X.message;
  }
  if ((delete X.message, typeof X.error === "string"))
    return { ...X, error: () => X.error };
  return X;
}
function wv($) {
  let X;
  return new Proxy(
    {},
    {
      get(J, Y, Q) {
        return (X ?? (X = $()), Reflect.get(X, Y, Q));
      },
      set(J, Y, Q, W) {
        return (X ?? (X = $()), Reflect.set(X, Y, Q, W));
      },
      has(J, Y) {
        return (X ?? (X = $()), Reflect.has(X, Y));
      },
      deleteProperty(J, Y) {
        return (X ?? (X = $()), Reflect.deleteProperty(X, Y));
      },
      ownKeys(J) {
        return (X ?? (X = $()), Reflect.ownKeys(X));
      },
      getOwnPropertyDescriptor(J, Y) {
        return (X ?? (X = $()), Reflect.getOwnPropertyDescriptor(X, Y));
      },
      defineProperty(J, Y, Q) {
        return (X ?? (X = $()), Reflect.defineProperty(X, Y, Q));
      },
    },
  );
}
function v($) {
  if (typeof $ === "bigint") return $.toString() + "n";
  if (typeof $ === "string") return `"${$}"`;
  return `${$}`;
}
function WG($) {
  return Object.keys($).filter((X) => {
    return $[X]._zod.optin === "optional" && $[X]._zod.optout === "optional";
  });
}
var zG = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [
      -340282346638528860000000000000000000000,
      340282346638528860000000000000000000000,
    ],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  GG = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")],
  };
function Bv($, X) {
  let J = {},
    Y = $._zod.def;
  for (let Q in X) {
    if (!(Q in Y.shape)) throw Error(`Unrecognized key: "${Q}"`);
    if (!X[Q]) continue;
    J[Q] = Y.shape[Q];
  }
  return i$($, { ...$._zod.def, shape: J, checks: [] });
}
function qv($, X) {
  let J = { ...$._zod.def.shape },
    Y = $._zod.def;
  for (let Q in X) {
    if (!(Q in Y.shape)) throw Error(`Unrecognized key: "${Q}"`);
    if (!X[Q]) continue;
    delete J[Q];
  }
  return i$($, { ...$._zod.def, shape: J, checks: [] });
}
function Dv($, X) {
  if (!f0(X)) throw Error("Invalid input to extend: expected a plain object");
  let J = {
    ...$._zod.def,
    get shape() {
      let Y = { ...$._zod.def.shape, ...X };
      return (JG(this, "shape", Y), Y);
    },
    checks: [],
  };
  return i$($, J);
}
function Fv($, X) {
  return i$($, {
    ...$._zod.def,
    get shape() {
      let J = { ...$._zod.def.shape, ...X._zod.def.shape };
      return (JG(this, "shape", J), J);
    },
    catchall: X._zod.def.catchall,
    checks: [],
  });
}
function jv($, X, J) {
  let Y = X._zod.def.shape,
    Q = { ...Y };
  if (J)
    for (let W in J) {
      if (!(W in Y)) throw Error(`Unrecognized key: "${W}"`);
      if (!J[W]) continue;
      Q[W] = $ ? new $({ type: "optional", innerType: Y[W] }) : Y[W];
    }
  else
    for (let W in Y)
      Q[W] = $ ? new $({ type: "optional", innerType: Y[W] }) : Y[W];
  return i$(X, { ...X._zod.def, shape: Q, checks: [] });
}
function Lv($, X, J) {
  let Y = X._zod.def.shape,
    Q = { ...Y };
  if (J)
    for (let W in J) {
      if (!(W in Q)) throw Error(`Unrecognized key: "${W}"`);
      if (!J[W]) continue;
      Q[W] = new $({ type: "nonoptional", innerType: Y[W] });
    }
  else for (let W in Y) Q[W] = new $({ type: "nonoptional", innerType: Y[W] });
  return i$(X, { ...X._zod.def, shape: Q, checks: [] });
}
function y1($, X = 0) {
  for (let J = X; J < $.issues.length; J++)
    if ($.issues[J]?.continue !== !0) return !0;
  return !1;
}
function W6($, X) {
  return X.map((J) => {
    var Y;
    return ((Y = J).path ?? (Y.path = []), J.path.unshift($), J);
  });
}
function c9($) {
  return typeof $ === "string" ? $ : $?.message;
}
function L6($, X, J) {
  let Y = { ...$, path: $.path ?? [] };
  if (!$.message) {
    let Q =
      c9($.inst?._zod.def?.error?.($)) ??
      c9(X?.error?.($)) ??
      c9(J.customError?.($)) ??
      c9(J.localeError?.($)) ??
      "Invalid input";
    Y.message = Q;
  }
  if ((delete Y.inst, delete Y.continue, !X?.reportInput)) delete Y.input;
  return Y;
}
function r9($) {
  if ($ instanceof Set) return "set";
  if ($ instanceof Map) return "map";
  if ($ instanceof File) return "file";
  return "unknown";
}
function o9($) {
  if (Array.isArray($)) return "array";
  if (typeof $ === "string") return "string";
  return "unknown";
}
function UG(...$) {
  let [X, J, Y] = $;
  if (typeof X === "string")
    return { message: X, code: "custom", input: J, inst: Y };
  return { ...X };
}
function Mv($) {
  return Object.entries($)
    .filter(([X, J]) => {
      return Number.isNaN(Number.parseInt(X, 10));
    })
    .map((X) => X[1]);
}
class jq {
  constructor(...$) {}
}
var Lq = ($, X) => {
    (($.name = "$ZodError"),
      Object.defineProperty($, "_zod", { value: $._zod, enumerable: !1 }),
      Object.defineProperty($, "issues", { value: X, enumerable: !1 }),
      Object.defineProperty($, "message", {
        get() {
          return JSON.stringify(X, $G, 2);
        },
        enumerable: !0,
      }));
  },
  t9 = q("$ZodError", Lq),
  y0 = q("$ZodError", Lq, { Parent: Error });
function g0($, X = (J) => J.message) {
  let J = {},
    Y = [];
  for (let Q of $.issues)
    if (Q.path.length > 0)
      ((J[Q.path[0]] = J[Q.path[0]] || []), J[Q.path[0]].push(X(Q)));
    else Y.push(X(Q));
  return { formErrors: Y, fieldErrors: J };
}
function h0($, X) {
  let J =
      X ||
      function (W) {
        return W.message;
      },
    Y = { _errors: [] },
    Q = (W) => {
      for (let z of W.issues)
        if (z.code === "invalid_union" && z.errors.length)
          z.errors.map((G) => Q({ issues: G }));
        else if (z.code === "invalid_key") Q({ issues: z.issues });
        else if (z.code === "invalid_element") Q({ issues: z.issues });
        else if (z.path.length === 0) Y._errors.push(J(z));
        else {
          let G = Y,
            U = 0;
          while (U < z.path.length) {
            let H = z.path[U];
            if (U !== z.path.length - 1) G[H] = G[H] || { _errors: [] };
            else ((G[H] = G[H] || { _errors: [] }), G[H]._errors.push(J(z)));
            ((G = G[H]), U++);
          }
        }
    };
  return (Q($), Y);
}
function y7($, X) {
  let J =
      X ||
      function (W) {
        return W.message;
      },
    Y = { errors: [] },
    Q = (W, z = []) => {
      var G, U;
      for (let H of W.issues)
        if (H.code === "invalid_union" && H.errors.length)
          H.errors.map((K) => Q({ issues: K }, H.path));
        else if (H.code === "invalid_key") Q({ issues: H.issues }, H.path);
        else if (H.code === "invalid_element") Q({ issues: H.issues }, H.path);
        else {
          let K = [...z, ...H.path];
          if (K.length === 0) {
            Y.errors.push(J(H));
            continue;
          }
          let N = Y,
            V = 0;
          while (V < K.length) {
            let O = K[V],
              w = V === K.length - 1;
            if (typeof O === "string")
              (N.properties ?? (N.properties = {}),
                (G = N.properties)[O] ?? (G[O] = { errors: [] }),
                (N = N.properties[O]));
            else
              (N.items ?? (N.items = []),
                (U = N.items)[O] ?? (U[O] = { errors: [] }),
                (N = N.items[O]));
            if (w) N.errors.push(J(H));
            V++;
          }
        }
    };
  return (Q($), Y);
}
function Mq($) {
  let X = [];
  for (let J of $)
    if (typeof J === "number") X.push(`[${J}]`);
    else if (typeof J === "symbol") X.push(`[${JSON.stringify(String(J))}]`);
    else if (/[^\w$]/.test(J)) X.push(`[${JSON.stringify(J)}]`);
    else {
      if (X.length) X.push(".");
      X.push(J);
    }
  return X.join("");
}
function g7($) {
  let X = [],
    J = [...$.issues].sort((Y, Q) => Y.path.length - Q.path.length);
  for (let Y of J)
    if ((X.push(`✖ ${Y.message}`), Y.path?.length))
      X.push(`  → at ${Mq(Y.path)}`);
  return X.join(`
`);
}
var h7 = ($) => (X, J, Y, Q) => {
    let W = Y ? Object.assign(Y, { async: !1 }) : { async: !1 },
      z = X._zod.run({ value: J, issues: [] }, W);
    if (z instanceof Promise) throw new A4();
    if (z.issues.length) {
      let G = new (Q?.Err ?? $)(z.issues.map((U) => L6(U, W, v$())));
      throw (f7(G, Q?.callee), G);
    }
    return z.value;
  },
  g1 = h7(y0),
  u7 = ($) => async (X, J, Y, Q) => {
    let W = Y ? Object.assign(Y, { async: !0 }) : { async: !0 },
      z = X._zod.run({ value: J, issues: [] }, W);
    if (z instanceof Promise) z = await z;
    if (z.issues.length) {
      let G = new (Q?.Err ?? $)(z.issues.map((U) => L6(U, W, v$())));
      throw (f7(G, Q?.callee), G);
    }
    return z.value;
  },
  h1 = u7(y0),
  m7 = ($) => (X, J, Y) => {
    let Q = Y ? { ...Y, async: !1 } : { async: !1 },
      W = X._zod.run({ value: J, issues: [] }, Q);
    if (W instanceof Promise) throw new A4();
    return W.issues.length
      ? {
          success: !1,
          error: new ($ ?? t9)(W.issues.map((z) => L6(z, Q, v$()))),
        }
      : { success: !0, data: W.value };
  },
  t4 = m7(y0),
  l7 = ($) => async (X, J, Y) => {
    let Q = Y ? Object.assign(Y, { async: !0 }) : { async: !0 },
      W = X._zod.run({ value: J, issues: [] }, Q);
    if (W instanceof Promise) W = await W;
    return W.issues.length
      ? { success: !1, error: new $(W.issues.map((z) => L6(z, Q, v$()))) }
      : { success: !0, data: W.value };
  },
  a4 = l7(y0);
var s4 = {};
B1(s4, {
  xid: () => VG,
  uuid7: () => Rv,
  uuid6: () => bv,
  uuid4: () => Zv,
  uuid: () => u1,
  uppercase: () => yG,
  unicodeEmail: () => Sv,
  undefined: () => TG,
  ulid: () => NG,
  time: () => PG,
  string: () => SG,
  rfc5322Email: () => Ev,
  number: () => kG,
  null: () => xG,
  nanoid: () => wG,
  lowercase: () => fG,
  ksuid: () => OG,
  ipv6: () => LG,
  ipv4: () => jG,
  integer: () => CG,
  html5Email: () => Pv,
  hostname: () => ZG,
  guid: () => qG,
  extendedDuration: () => Iv,
  emoji: () => FG,
  email: () => DG,
  e164: () => bG,
  duration: () => BG,
  domain: () => kv,
  datetime: () => EG,
  date: () => RG,
  cuid2: () => KG,
  cuid: () => HG,
  cidrv6: () => AG,
  cidrv4: () => MG,
  browserEmail: () => vv,
  boolean: () => _G,
  bigint: () => vG,
  base64url: () => c7,
  base64: () => IG,
  _emoji: () => Cv,
});
var HG = /^[cC][^\s-]{8,}$/,
  KG = /^[0-9a-z]+$/,
  NG = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  VG = /^[0-9a-vA-V]{20}$/,
  OG = /^[A-Za-z0-9]{27}$/,
  wG = /^[a-zA-Z0-9_-]{21}$/,
  BG =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  Iv =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  qG =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  u1 = ($) => {
    if (!$)
      return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;
    return new RegExp(
      `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${$}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
    );
  },
  Zv = u1(4),
  bv = u1(6),
  Rv = u1(7),
  DG =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  Pv =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  Ev =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  Sv = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
  vv =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  Cv = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function FG() {
  return new RegExp(
    "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
    "u",
  );
}
var jG =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  LG =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
  MG =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  AG =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  IG =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  c7 = /^[A-Za-z0-9_-]*$/,
  ZG = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/,
  kv = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
  bG = /^\+(?:[0-9]){6,14}[0-9]$/,
  Aq =
    "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
  RG = new RegExp(`^${Aq}$`);
function Iq($) {
  return typeof $.precision === "number"
    ? $.precision === -1
      ? "(?:[01]\\d|2[0-3]):[0-5]\\d"
      : $.precision === 0
        ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d"
        : `(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${$.precision}}`
    : "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
}
function PG($) {
  return new RegExp(`^${Iq($)}$`);
}
function EG($) {
  let X = Iq({ precision: $.precision }),
    J = ["Z"];
  if ($.local) J.push("");
  if ($.offset) J.push("([+-]\\d{2}:\\d{2})");
  let Y = `${X}(?:${J.join("|")})`;
  return new RegExp(`^${Aq}T(?:${Y})$`);
}
var SG = ($) => {
    let X = $
      ? `[\\s\\S]{${$?.minimum ?? 0},${$?.maximum ?? ""}}`
      : "[\\s\\S]*";
    return new RegExp(`^${X}$`);
  },
  vG = /^\d+n?$/,
  CG = /^\d+$/,
  kG = /^-?\d+(?:\.\d+)?/i,
  _G = /true|false/i,
  xG = /null/i;
var TG = /undefined/i;
var fG = /^[^A-Z]*$/,
  yG = /^[^a-z]*$/;
var I$ = q("$ZodCheck", ($, X) => {
    var J;
    ($._zod ?? ($._zod = {}),
      ($._zod.def = X),
      (J = $._zod).onattach ?? (J.onattach = []));
  }),
  bq = { number: "number", bigint: "bigint", object: "date" },
  d7 = q("$ZodCheckLessThan", ($, X) => {
    I$.init($, X);
    let J = bq[typeof X.value];
    ($._zod.onattach.push((Y) => {
      let Q = Y._zod.bag,
        W =
          (X.inclusive ? Q.maximum : Q.exclusiveMaximum) ??
          Number.POSITIVE_INFINITY;
      if (X.value < W)
        if (X.inclusive) Q.maximum = X.value;
        else Q.exclusiveMaximum = X.value;
    }),
      ($._zod.check = (Y) => {
        if (X.inclusive ? Y.value <= X.value : Y.value < X.value) return;
        Y.issues.push({
          origin: J,
          code: "too_big",
          maximum: X.value,
          input: Y.value,
          inclusive: X.inclusive,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  p7 = q("$ZodCheckGreaterThan", ($, X) => {
    I$.init($, X);
    let J = bq[typeof X.value];
    ($._zod.onattach.push((Y) => {
      let Q = Y._zod.bag,
        W =
          (X.inclusive ? Q.minimum : Q.exclusiveMinimum) ??
          Number.NEGATIVE_INFINITY;
      if (X.value > W)
        if (X.inclusive) Q.minimum = X.value;
        else Q.exclusiveMinimum = X.value;
    }),
      ($._zod.check = (Y) => {
        if (X.inclusive ? Y.value >= X.value : Y.value > X.value) return;
        Y.issues.push({
          origin: J,
          code: "too_small",
          minimum: X.value,
          input: Y.value,
          inclusive: X.inclusive,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  gG = q("$ZodCheckMultipleOf", ($, X) => {
    (I$.init($, X),
      $._zod.onattach.push((J) => {
        var Y;
        (Y = J._zod.bag).multipleOf ?? (Y.multipleOf = X.value);
      }),
      ($._zod.check = (J) => {
        if (typeof J.value !== typeof X.value)
          throw Error("Cannot mix number and bigint in multiple_of check.");
        if (
          typeof J.value === "bigint"
            ? J.value % X.value === BigInt(0)
            : XG(J.value, X.value) === 0
        )
          return;
        J.issues.push({
          origin: typeof J.value,
          code: "not_multiple_of",
          divisor: X.value,
          input: J.value,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  hG = q("$ZodCheckNumberFormat", ($, X) => {
    (I$.init($, X), (X.format = X.format || "float64"));
    let J = X.format?.includes("int"),
      Y = J ? "int" : "number",
      [Q, W] = zG[X.format];
    ($._zod.onattach.push((z) => {
      let G = z._zod.bag;
      if (((G.format = X.format), (G.minimum = Q), (G.maximum = W), J))
        G.pattern = CG;
    }),
      ($._zod.check = (z) => {
        let G = z.value;
        if (J) {
          if (!Number.isInteger(G)) {
            z.issues.push({
              expected: Y,
              format: X.format,
              code: "invalid_type",
              input: G,
              inst: $,
            });
            return;
          }
          if (!Number.isSafeInteger(G)) {
            if (G > 0)
              z.issues.push({
                input: G,
                code: "too_big",
                maximum: Number.MAX_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst: $,
                origin: Y,
                continue: !X.abort,
              });
            else
              z.issues.push({
                input: G,
                code: "too_small",
                minimum: Number.MIN_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst: $,
                origin: Y,
                continue: !X.abort,
              });
            return;
          }
        }
        if (G < Q)
          z.issues.push({
            origin: "number",
            input: G,
            code: "too_small",
            minimum: Q,
            inclusive: !0,
            inst: $,
            continue: !X.abort,
          });
        if (G > W)
          z.issues.push({
            origin: "number",
            input: G,
            code: "too_big",
            maximum: W,
            inst: $,
          });
      }));
  }),
  uG = q("$ZodCheckBigIntFormat", ($, X) => {
    I$.init($, X);
    let [J, Y] = GG[X.format];
    ($._zod.onattach.push((Q) => {
      let W = Q._zod.bag;
      ((W.format = X.format), (W.minimum = J), (W.maximum = Y));
    }),
      ($._zod.check = (Q) => {
        let W = Q.value;
        if (W < J)
          Q.issues.push({
            origin: "bigint",
            input: W,
            code: "too_small",
            minimum: J,
            inclusive: !0,
            inst: $,
            continue: !X.abort,
          });
        if (W > Y)
          Q.issues.push({
            origin: "bigint",
            input: W,
            code: "too_big",
            maximum: Y,
            inst: $,
          });
      }));
  }),
  mG = q("$ZodCheckMaxSize", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let Y = J.value;
        return !o4(Y) && Y.size !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let Y = J._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (X.maximum < Y) J._zod.bag.maximum = X.maximum;
      }),
      ($._zod.check = (J) => {
        let Y = J.value;
        if (Y.size <= X.maximum) return;
        J.issues.push({
          origin: r9(Y),
          code: "too_big",
          maximum: X.maximum,
          input: Y,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  lG = q("$ZodCheckMinSize", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let Y = J.value;
        return !o4(Y) && Y.size !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let Y = J._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (X.minimum > Y) J._zod.bag.minimum = X.minimum;
      }),
      ($._zod.check = (J) => {
        let Y = J.value;
        if (Y.size >= X.minimum) return;
        J.issues.push({
          origin: r9(Y),
          code: "too_small",
          minimum: X.minimum,
          input: Y,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  cG = q("$ZodCheckSizeEquals", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let Y = J.value;
        return !o4(Y) && Y.size !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let Y = J._zod.bag;
        ((Y.minimum = X.size), (Y.maximum = X.size), (Y.size = X.size));
      }),
      ($._zod.check = (J) => {
        let Y = J.value,
          Q = Y.size;
        if (Q === X.size) return;
        let W = Q > X.size;
        J.issues.push({
          origin: r9(Y),
          ...(W
            ? { code: "too_big", maximum: X.size }
            : { code: "too_small", minimum: X.size }),
          inclusive: !0,
          exact: !0,
          input: J.value,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  dG = q("$ZodCheckMaxLength", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let Y = J.value;
        return !o4(Y) && Y.length !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let Y = J._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (X.maximum < Y) J._zod.bag.maximum = X.maximum;
      }),
      ($._zod.check = (J) => {
        let Y = J.value;
        if (Y.length <= X.maximum) return;
        let W = o9(Y);
        J.issues.push({
          origin: W,
          code: "too_big",
          maximum: X.maximum,
          inclusive: !0,
          input: Y,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  pG = q("$ZodCheckMinLength", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let Y = J.value;
        return !o4(Y) && Y.length !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let Y = J._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (X.minimum > Y) J._zod.bag.minimum = X.minimum;
      }),
      ($._zod.check = (J) => {
        let Y = J.value;
        if (Y.length >= X.minimum) return;
        let W = o9(Y);
        J.issues.push({
          origin: W,
          code: "too_small",
          minimum: X.minimum,
          inclusive: !0,
          input: Y,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  iG = q("$ZodCheckLengthEquals", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let Y = J.value;
        return !o4(Y) && Y.length !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let Y = J._zod.bag;
        ((Y.minimum = X.length), (Y.maximum = X.length), (Y.length = X.length));
      }),
      ($._zod.check = (J) => {
        let Y = J.value,
          Q = Y.length;
        if (Q === X.length) return;
        let W = o9(Y),
          z = Q > X.length;
        J.issues.push({
          origin: W,
          ...(z
            ? { code: "too_big", maximum: X.length }
            : { code: "too_small", minimum: X.length }),
          inclusive: !0,
          exact: !0,
          input: J.value,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  u0 = q("$ZodCheckStringFormat", ($, X) => {
    var J, Y;
    if (
      (I$.init($, X),
      $._zod.onattach.push((Q) => {
        let W = Q._zod.bag;
        if (((W.format = X.format), X.pattern))
          (W.patterns ?? (W.patterns = new Set()), W.patterns.add(X.pattern));
      }),
      X.pattern)
    )
      (J = $._zod).check ??
        (J.check = (Q) => {
          if (((X.pattern.lastIndex = 0), X.pattern.test(Q.value))) return;
          Q.issues.push({
            origin: "string",
            code: "invalid_format",
            format: X.format,
            input: Q.value,
            ...(X.pattern ? { pattern: X.pattern.toString() } : {}),
            inst: $,
            continue: !X.abort,
          });
        });
    else (Y = $._zod).check ?? (Y.check = () => {});
  }),
  nG = q("$ZodCheckRegex", ($, X) => {
    (u0.init($, X),
      ($._zod.check = (J) => {
        if (((X.pattern.lastIndex = 0), X.pattern.test(J.value))) return;
        J.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "regex",
          input: J.value,
          pattern: X.pattern.toString(),
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  rG = q("$ZodCheckLowerCase", ($, X) => {
    (X.pattern ?? (X.pattern = fG), u0.init($, X));
  }),
  oG = q("$ZodCheckUpperCase", ($, X) => {
    (X.pattern ?? (X.pattern = yG), u0.init($, X));
  }),
  tG = q("$ZodCheckIncludes", ($, X) => {
    I$.init($, X);
    let J = I4(X.includes),
      Y = new RegExp(
        typeof X.position === "number" ? `^.{${X.position}}${J}` : J,
      );
    ((X.pattern = Y),
      $._zod.onattach.push((Q) => {
        let W = Q._zod.bag;
        (W.patterns ?? (W.patterns = new Set()), W.patterns.add(Y));
      }),
      ($._zod.check = (Q) => {
        if (Q.value.includes(X.includes, X.position)) return;
        Q.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "includes",
          includes: X.includes,
          input: Q.value,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  aG = q("$ZodCheckStartsWith", ($, X) => {
    I$.init($, X);
    let J = new RegExp(`^${I4(X.prefix)}.*`);
    (X.pattern ?? (X.pattern = J),
      $._zod.onattach.push((Y) => {
        let Q = Y._zod.bag;
        (Q.patterns ?? (Q.patterns = new Set()), Q.patterns.add(J));
      }),
      ($._zod.check = (Y) => {
        if (Y.value.startsWith(X.prefix)) return;
        Y.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "starts_with",
          prefix: X.prefix,
          input: Y.value,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  sG = q("$ZodCheckEndsWith", ($, X) => {
    I$.init($, X);
    let J = new RegExp(`.*${I4(X.suffix)}$`);
    (X.pattern ?? (X.pattern = J),
      $._zod.onattach.push((Y) => {
        let Q = Y._zod.bag;
        (Q.patterns ?? (Q.patterns = new Set()), Q.patterns.add(J));
      }),
      ($._zod.check = (Y) => {
        if (Y.value.endsWith(X.suffix)) return;
        Y.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "ends_with",
          suffix: X.suffix,
          input: Y.value,
          inst: $,
          continue: !X.abort,
        });
      }));
  });
function Zq($, X, J) {
  if ($.issues.length) X.issues.push(...W6(J, $.issues));
}
var eG = q("$ZodCheckProperty", ($, X) => {
    (I$.init($, X),
      ($._zod.check = (J) => {
        let Y = X.schema._zod.run(
          { value: J.value[X.property], issues: [] },
          {},
        );
        if (Y instanceof Promise) return Y.then((Q) => Zq(Q, J, X.property));
        Zq(Y, J, X.property);
        return;
      }));
  }),
  $3 = q("$ZodCheckMimeType", ($, X) => {
    I$.init($, X);
    let J = new Set(X.mime);
    ($._zod.onattach.push((Y) => {
      Y._zod.bag.mime = X.mime;
    }),
      ($._zod.check = (Y) => {
        if (J.has(Y.value.type)) return;
        Y.issues.push({
          code: "invalid_value",
          values: X.mime,
          input: Y.value.type,
          inst: $,
        });
      }));
  }),
  X3 = q("$ZodCheckOverwrite", ($, X) => {
    (I$.init($, X),
      ($._zod.check = (J) => {
        J.value = X.tx(J.value);
      }));
  });
class i7 {
  constructor($ = []) {
    if (((this.content = []), (this.indent = 0), this)) this.args = $;
  }
  indented($) {
    ((this.indent += 1), $(this), (this.indent -= 1));
  }
  write($) {
    if (typeof $ === "function") {
      ($(this, { execution: "sync" }), $(this, { execution: "async" }));
      return;
    }
    let J = $.split(
        `
`,
      ).filter((W) => W),
      Y = Math.min(...J.map((W) => W.length - W.trimStart().length)),
      Q = J.map((W) => W.slice(Y)).map((W) => " ".repeat(this.indent * 2) + W);
    for (let W of Q) this.content.push(W);
  }
  compile() {
    let $ = Function,
      X = this?.args,
      Y = [...(this?.content ?? [""]).map((Q) => `  ${Q}`)];
    return new $(
      ...X,
      Y.join(`
`),
    );
  }
}
var J3 = { major: 4, minor: 0, patch: 0 };
var p = q("$ZodType", ($, X) => {
    var J;
    ($ ?? ($ = {}),
      ($._zod.def = X),
      ($._zod.bag = $._zod.bag || {}),
      ($._zod.version = J3));
    let Y = [...($._zod.def.checks ?? [])];
    if ($._zod.traits.has("$ZodCheck")) Y.unshift($);
    for (let Q of Y) for (let W of Q._zod.onattach) W($);
    if (Y.length === 0)
      ((J = $._zod).deferred ?? (J.deferred = []),
        $._zod.deferred?.push(() => {
          $._zod.run = $._zod.parse;
        }));
    else {
      let Q = (W, z, G) => {
        let U = y1(W),
          H;
        for (let K of z) {
          if (K._zod.when) {
            if (!K._zod.when(W)) continue;
          } else if (U) continue;
          let N = W.issues.length,
            V = K._zod.check(W);
          if (V instanceof Promise && G?.async === !1) throw new A4();
          if (H || V instanceof Promise)
            H = (H ?? Promise.resolve()).then(async () => {
              if ((await V, W.issues.length === N)) return;
              if (!U) U = y1(W, N);
            });
          else {
            if (W.issues.length === N) continue;
            if (!U) U = y1(W, N);
          }
        }
        if (H)
          return H.then(() => {
            return W;
          });
        return W;
      };
      $._zod.run = (W, z) => {
        let G = $._zod.parse(W, z);
        if (G instanceof Promise) {
          if (z.async === !1) throw new A4();
          return G.then((U) => Q(U, Y, z));
        }
        return Q(G, Y, z);
      };
    }
    $["~standard"] = {
      validate: (Q) => {
        try {
          let W = t4($, Q);
          return W.success ? { value: W.data } : { issues: W.error?.issues };
        } catch (W) {
          return a4($, Q).then((z) =>
            z.success ? { value: z.data } : { issues: z.error?.issues },
          );
        }
      },
      vendor: "zod",
      version: 1,
    };
  }),
  e4 = q("$ZodString", ($, X) => {
    (p.init($, X),
      ($._zod.pattern =
        [...($?._zod.bag?.patterns ?? [])].pop() ?? SG($._zod.bag)),
      ($._zod.parse = (J, Y) => {
        if (X.coerce)
          try {
            J.value = String(J.value);
          } catch (Q) {}
        if (typeof J.value === "string") return J;
        return (
          J.issues.push({
            expected: "string",
            code: "invalid_type",
            input: J.value,
            inst: $,
          }),
          J
        );
      }));
  }),
  K$ = q("$ZodStringFormat", ($, X) => {
    (u0.init($, X), e4.init($, X));
  }),
  o7 = q("$ZodGUID", ($, X) => {
    (X.pattern ?? (X.pattern = qG), K$.init($, X));
  }),
  t7 = q("$ZodUUID", ($, X) => {
    if (X.version) {
      let Y = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
        X.version
      ];
      if (Y === void 0) throw Error(`Invalid UUID version: "${X.version}"`);
      X.pattern ?? (X.pattern = u1(Y));
    } else X.pattern ?? (X.pattern = u1());
    K$.init($, X);
  }),
  a7 = q("$ZodEmail", ($, X) => {
    (X.pattern ?? (X.pattern = DG), K$.init($, X));
  }),
  s7 = q("$ZodURL", ($, X) => {
    (K$.init($, X),
      ($._zod.check = (J) => {
        try {
          let Y = J.value,
            Q = new URL(Y),
            W = Q.href;
          if (X.hostname) {
            if (((X.hostname.lastIndex = 0), !X.hostname.test(Q.hostname)))
              J.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: ZG.source,
                input: J.value,
                inst: $,
                continue: !X.abort,
              });
          }
          if (X.protocol) {
            if (
              ((X.protocol.lastIndex = 0),
              !X.protocol.test(
                Q.protocol.endsWith(":") ? Q.protocol.slice(0, -1) : Q.protocol,
              ))
            )
              J.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid protocol",
                pattern: X.protocol.source,
                input: J.value,
                inst: $,
                continue: !X.abort,
              });
          }
          if (!Y.endsWith("/") && W.endsWith("/")) J.value = W.slice(0, -1);
          else J.value = W;
          return;
        } catch (Y) {
          J.issues.push({
            code: "invalid_format",
            format: "url",
            input: J.value,
            inst: $,
            continue: !X.abort,
          });
        }
      }));
  }),
  e7 = q("$ZodEmoji", ($, X) => {
    (X.pattern ?? (X.pattern = FG()), K$.init($, X));
  }),
  $Q = q("$ZodNanoID", ($, X) => {
    (X.pattern ?? (X.pattern = wG), K$.init($, X));
  }),
  XQ = q("$ZodCUID", ($, X) => {
    (X.pattern ?? (X.pattern = HG), K$.init($, X));
  }),
  JQ = q("$ZodCUID2", ($, X) => {
    (X.pattern ?? (X.pattern = KG), K$.init($, X));
  }),
  QQ = q("$ZodULID", ($, X) => {
    (X.pattern ?? (X.pattern = NG), K$.init($, X));
  }),
  YQ = q("$ZodXID", ($, X) => {
    (X.pattern ?? (X.pattern = VG), K$.init($, X));
  }),
  WQ = q("$ZodKSUID", ($, X) => {
    (X.pattern ?? (X.pattern = OG), K$.init($, X));
  }),
  Y3 = q("$ZodISODateTime", ($, X) => {
    (X.pattern ?? (X.pattern = EG(X)), K$.init($, X));
  }),
  W3 = q("$ZodISODate", ($, X) => {
    (X.pattern ?? (X.pattern = RG), K$.init($, X));
  }),
  z3 = q("$ZodISOTime", ($, X) => {
    (X.pattern ?? (X.pattern = PG(X)), K$.init($, X));
  }),
  G3 = q("$ZodISODuration", ($, X) => {
    (X.pattern ?? (X.pattern = BG), K$.init($, X));
  }),
  zQ = q("$ZodIPv4", ($, X) => {
    (X.pattern ?? (X.pattern = jG),
      K$.init($, X),
      $._zod.onattach.push((J) => {
        let Y = J._zod.bag;
        Y.format = "ipv4";
      }));
  }),
  GQ = q("$ZodIPv6", ($, X) => {
    (X.pattern ?? (X.pattern = LG),
      K$.init($, X),
      $._zod.onattach.push((J) => {
        let Y = J._zod.bag;
        Y.format = "ipv6";
      }),
      ($._zod.check = (J) => {
        try {
          new URL(`http://[${J.value}]`);
        } catch {
          J.issues.push({
            code: "invalid_format",
            format: "ipv6",
            input: J.value,
            inst: $,
            continue: !X.abort,
          });
        }
      }));
  }),
  UQ = q("$ZodCIDRv4", ($, X) => {
    (X.pattern ?? (X.pattern = MG), K$.init($, X));
  }),
  HQ = q("$ZodCIDRv6", ($, X) => {
    (X.pattern ?? (X.pattern = AG),
      K$.init($, X),
      ($._zod.check = (J) => {
        let [Y, Q] = J.value.split("/");
        try {
          if (!Q) throw Error();
          let W = Number(Q);
          if (`${W}` !== Q) throw Error();
          if (W < 0 || W > 128) throw Error();
          new URL(`http://[${Y}]`);
        } catch {
          J.issues.push({
            code: "invalid_format",
            format: "cidrv6",
            input: J.value,
            inst: $,
            continue: !X.abort,
          });
        }
      }));
  });
function U3($) {
  if ($ === "") return !0;
  if ($.length % 4 !== 0) return !1;
  try {
    return (atob($), !0);
  } catch {
    return !1;
  }
}
var KQ = q("$ZodBase64", ($, X) => {
  (X.pattern ?? (X.pattern = IG),
    K$.init($, X),
    $._zod.onattach.push((J) => {
      J._zod.bag.contentEncoding = "base64";
    }),
    ($._zod.check = (J) => {
      if (U3(J.value)) return;
      J.issues.push({
        code: "invalid_format",
        format: "base64",
        input: J.value,
        inst: $,
        continue: !X.abort,
      });
    }));
});
function gq($) {
  if (!c7.test($)) return !1;
  let X = $.replace(/[-_]/g, (Y) => (Y === "-" ? "+" : "/")),
    J = X.padEnd(Math.ceil(X.length / 4) * 4, "=");
  return U3(J);
}
var NQ = q("$ZodBase64URL", ($, X) => {
    (X.pattern ?? (X.pattern = c7),
      K$.init($, X),
      $._zod.onattach.push((J) => {
        J._zod.bag.contentEncoding = "base64url";
      }),
      ($._zod.check = (J) => {
        if (gq(J.value)) return;
        J.issues.push({
          code: "invalid_format",
          format: "base64url",
          input: J.value,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  VQ = q("$ZodE164", ($, X) => {
    (X.pattern ?? (X.pattern = bG), K$.init($, X));
  });
function hq($, X = null) {
  try {
    let J = $.split(".");
    if (J.length !== 3) return !1;
    let [Y] = J;
    if (!Y) return !1;
    let Q = JSON.parse(atob(Y));
    if ("typ" in Q && Q?.typ !== "JWT") return !1;
    if (!Q.alg) return !1;
    if (X && (!("alg" in Q) || Q.alg !== X)) return !1;
    return !0;
  } catch {
    return !1;
  }
}
var OQ = q("$ZodJWT", ($, X) => {
    (K$.init($, X),
      ($._zod.check = (J) => {
        if (hq(J.value, X.alg)) return;
        J.issues.push({
          code: "invalid_format",
          format: "jwt",
          input: J.value,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  wQ = q("$ZodCustomStringFormat", ($, X) => {
    (K$.init($, X),
      ($._zod.check = (J) => {
        if (X.fn(J.value)) return;
        J.issues.push({
          code: "invalid_format",
          format: X.format,
          input: J.value,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  a9 = q("$ZodNumber", ($, X) => {
    (p.init($, X),
      ($._zod.pattern = $._zod.bag.pattern ?? kG),
      ($._zod.parse = (J, Y) => {
        if (X.coerce)
          try {
            J.value = Number(J.value);
          } catch (z) {}
        let Q = J.value;
        if (typeof Q === "number" && !Number.isNaN(Q) && Number.isFinite(Q))
          return J;
        let W =
          typeof Q === "number"
            ? Number.isNaN(Q)
              ? "NaN"
              : !Number.isFinite(Q)
                ? "Infinity"
                : void 0
            : void 0;
        return (
          J.issues.push({
            expected: "number",
            code: "invalid_type",
            input: Q,
            inst: $,
            ...(W ? { received: W } : {}),
          }),
          J
        );
      }));
  }),
  BQ = q("$ZodNumber", ($, X) => {
    (hG.init($, X), a9.init($, X));
  }),
  m0 = q("$ZodBoolean", ($, X) => {
    (p.init($, X),
      ($._zod.pattern = _G),
      ($._zod.parse = (J, Y) => {
        if (X.coerce)
          try {
            J.value = Boolean(J.value);
          } catch (W) {}
        let Q = J.value;
        if (typeof Q === "boolean") return J;
        return (
          J.issues.push({
            expected: "boolean",
            code: "invalid_type",
            input: Q,
            inst: $,
          }),
          J
        );
      }));
  }),
  s9 = q("$ZodBigInt", ($, X) => {
    (p.init($, X),
      ($._zod.pattern = vG),
      ($._zod.parse = (J, Y) => {
        if (X.coerce)
          try {
            J.value = BigInt(J.value);
          } catch (Q) {}
        if (typeof J.value === "bigint") return J;
        return (
          J.issues.push({
            expected: "bigint",
            code: "invalid_type",
            input: J.value,
            inst: $,
          }),
          J
        );
      }));
  }),
  qQ = q("$ZodBigInt", ($, X) => {
    (uG.init($, X), s9.init($, X));
  }),
  DQ = q("$ZodSymbol", ($, X) => {
    (p.init($, X),
      ($._zod.parse = (J, Y) => {
        let Q = J.value;
        if (typeof Q === "symbol") return J;
        return (
          J.issues.push({
            expected: "symbol",
            code: "invalid_type",
            input: Q,
            inst: $,
          }),
          J
        );
      }));
  }),
  FQ = q("$ZodUndefined", ($, X) => {
    (p.init($, X),
      ($._zod.pattern = TG),
      ($._zod.values = new Set([void 0])),
      ($._zod.optin = "optional"),
      ($._zod.optout = "optional"),
      ($._zod.parse = (J, Y) => {
        let Q = J.value;
        if (typeof Q > "u") return J;
        return (
          J.issues.push({
            expected: "undefined",
            code: "invalid_type",
            input: Q,
            inst: $,
          }),
          J
        );
      }));
  }),
  jQ = q("$ZodNull", ($, X) => {
    (p.init($, X),
      ($._zod.pattern = xG),
      ($._zod.values = new Set([null])),
      ($._zod.parse = (J, Y) => {
        let Q = J.value;
        if (Q === null) return J;
        return (
          J.issues.push({
            expected: "null",
            code: "invalid_type",
            input: Q,
            inst: $,
          }),
          J
        );
      }));
  }),
  LQ = q("$ZodAny", ($, X) => {
    (p.init($, X), ($._zod.parse = (J) => J));
  }),
  m1 = q("$ZodUnknown", ($, X) => {
    (p.init($, X), ($._zod.parse = (J) => J));
  }),
  MQ = q("$ZodNever", ($, X) => {
    (p.init($, X),
      ($._zod.parse = (J, Y) => {
        return (
          J.issues.push({
            expected: "never",
            code: "invalid_type",
            input: J.value,
            inst: $,
          }),
          J
        );
      }));
  }),
  AQ = q("$ZodVoid", ($, X) => {
    (p.init($, X),
      ($._zod.parse = (J, Y) => {
        let Q = J.value;
        if (typeof Q > "u") return J;
        return (
          J.issues.push({
            expected: "void",
            code: "invalid_type",
            input: Q,
            inst: $,
          }),
          J
        );
      }));
  }),
  IQ = q("$ZodDate", ($, X) => {
    (p.init($, X),
      ($._zod.parse = (J, Y) => {
        if (X.coerce)
          try {
            J.value = new Date(J.value);
          } catch (G) {}
        let Q = J.value,
          W = Q instanceof Date;
        if (W && !Number.isNaN(Q.getTime())) return J;
        return (
          J.issues.push({
            expected: "date",
            code: "invalid_type",
            input: Q,
            ...(W ? { received: "Invalid Date" } : {}),
            inst: $,
          }),
          J
        );
      }));
  });
function Pq($, X, J) {
  if ($.issues.length) X.issues.push(...W6(J, $.issues));
  X.value[J] = $.value;
}
var l0 = q("$ZodArray", ($, X) => {
  (p.init($, X),
    ($._zod.parse = (J, Y) => {
      let Q = J.value;
      if (!Array.isArray(Q))
        return (
          J.issues.push({
            expected: "array",
            code: "invalid_type",
            input: Q,
            inst: $,
          }),
          J
        );
      J.value = Array(Q.length);
      let W = [];
      for (let z = 0; z < Q.length; z++) {
        let G = Q[z],
          U = X.element._zod.run({ value: G, issues: [] }, Y);
        if (U instanceof Promise) W.push(U.then((H) => Pq(H, J, z)));
        else Pq(U, J, z);
      }
      if (W.length) return Promise.all(W).then(() => J);
      return J;
    }));
});
function n7($, X, J) {
  if ($.issues.length) X.issues.push(...W6(J, $.issues));
  X.value[J] = $.value;
}
function Eq($, X, J, Y) {
  if ($.issues.length)
    if (Y[J] === void 0)
      if (J in Y) X.value[J] = void 0;
      else X.value[J] = $.value;
    else X.issues.push(...W6(J, $.issues));
  else if ($.value === void 0) {
    if (J in Y) X.value[J] = void 0;
  } else X.value[J] = $.value;
}
var e9 = q("$ZodObject", ($, X) => {
  p.init($, X);
  let J = p9(() => {
    let N = Object.keys(X.shape);
    for (let O of N)
      if (!(X.shape[O] instanceof p))
        throw Error(`Invalid element at key "${O}": expected a Zod schema`);
    let V = WG(X.shape);
    return {
      shape: X.shape,
      keys: N,
      keySet: new Set(N),
      numKeys: N.length,
      optionalKeys: new Set(V),
    };
  });
  G$($._zod, "propValues", () => {
    let N = X.shape,
      V = {};
    for (let O in N) {
      let w = N[O]._zod;
      if (w.values) {
        V[O] ?? (V[O] = new Set());
        for (let B of w.values) V[O].add(B);
      }
    }
    return V;
  });
  let Y = (N) => {
      let V = new i7(["shape", "payload", "ctx"]),
        O = J.value,
        w = (I) => {
          let Z = f1(I);
          return `shape[${Z}]._zod.run({ value: input[${Z}], issues: [] }, ctx)`;
        };
      V.write("const input = payload.value;");
      let B = Object.create(null),
        F = 0;
      for (let I of O.keys) B[I] = `key_${F++}`;
      V.write("const newResult = {}");
      for (let I of O.keys)
        if (O.optionalKeys.has(I)) {
          let Z = B[I];
          V.write(`const ${Z} = ${w(I)};`);
          let _ = f1(I);
          V.write(`
        if (${Z}.issues.length) {
          if (input[${_}] === undefined) {
            if (${_} in input) {
              newResult[${_}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${Z}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${_}, ...iss.path] : [${_}],
              }))
            );
          }
        } else if (${Z}.value === undefined) {
          if (${_} in input) newResult[${_}] = undefined;
        } else {
          newResult[${_}] = ${Z}.value;
        }
        `);
        } else {
          let Z = B[I];
          (V.write(`const ${Z} = ${w(I)};`),
            V.write(`
          if (${Z}.issues.length) payload.issues = payload.issues.concat(${Z}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${f1(I)}, ...iss.path] : [${f1(I)}]
          })));`),
            V.write(`newResult[${f1(I)}] = ${Z}.value`));
        }
      (V.write("payload.value = newResult;"), V.write("return payload;"));
      let j = V.compile();
      return (I, Z) => j(N, I, Z);
    },
    Q,
    W = T0,
    z = !l9.jitless,
    U = z && QG.value,
    H = X.catchall,
    K;
  $._zod.parse = (N, V) => {
    K ?? (K = J.value);
    let O = N.value;
    if (!W(O))
      return (
        N.issues.push({
          expected: "object",
          code: "invalid_type",
          input: O,
          inst: $,
        }),
        N
      );
    let w = [];
    if (z && U && V?.async === !1 && V.jitless !== !0) {
      if (!Q) Q = Y(X.shape);
      N = Q(N, V);
    } else {
      N.value = {};
      let Z = K.shape;
      for (let _ of K.keys) {
        let T = Z[_],
          B$ = T._zod.run({ value: O[_], issues: [] }, V),
          _$ = T._zod.optin === "optional" && T._zod.optout === "optional";
        if (B$ instanceof Promise)
          w.push(B$.then((V6) => (_$ ? Eq(V6, N, _, O) : n7(V6, N, _))));
        else if (_$) Eq(B$, N, _, O);
        else n7(B$, N, _);
      }
    }
    if (!H) return w.length ? Promise.all(w).then(() => N) : N;
    let B = [],
      F = K.keySet,
      j = H._zod,
      I = j.def.type;
    for (let Z of Object.keys(O)) {
      if (F.has(Z)) continue;
      if (I === "never") {
        B.push(Z);
        continue;
      }
      let _ = j.run({ value: O[Z], issues: [] }, V);
      if (_ instanceof Promise) w.push(_.then((T) => n7(T, N, Z)));
      else n7(_, N, Z);
    }
    if (B.length)
      N.issues.push({ code: "unrecognized_keys", keys: B, input: O, inst: $ });
    if (!w.length) return N;
    return Promise.all(w).then(() => {
      return N;
    });
  };
});
function Sq($, X, J, Y) {
  for (let Q of $) if (Q.issues.length === 0) return ((X.value = Q.value), X);
  return (
    X.issues.push({
      code: "invalid_union",
      input: X.value,
      inst: J,
      errors: $.map((Q) => Q.issues.map((W) => L6(W, Y, v$()))),
    }),
    X
  );
}
var $X = q("$ZodUnion", ($, X) => {
    (p.init($, X),
      G$($._zod, "optin", () =>
        X.options.some((J) => J._zod.optin === "optional")
          ? "optional"
          : void 0,
      ),
      G$($._zod, "optout", () =>
        X.options.some((J) => J._zod.optout === "optional")
          ? "optional"
          : void 0,
      ),
      G$($._zod, "values", () => {
        if (X.options.every((J) => J._zod.values))
          return new Set(X.options.flatMap((J) => Array.from(J._zod.values)));
        return;
      }),
      G$($._zod, "pattern", () => {
        if (X.options.every((J) => J._zod.pattern)) {
          let J = X.options.map((Y) => Y._zod.pattern);
          return new RegExp(`^(${J.map((Y) => i9(Y.source)).join("|")})$`);
        }
        return;
      }),
      ($._zod.parse = (J, Y) => {
        let Q = !1,
          W = [];
        for (let z of X.options) {
          let G = z._zod.run({ value: J.value, issues: [] }, Y);
          if (G instanceof Promise) (W.push(G), (Q = !0));
          else {
            if (G.issues.length === 0) return G;
            W.push(G);
          }
        }
        if (!Q) return Sq(W, J, $, Y);
        return Promise.all(W).then((z) => {
          return Sq(z, J, $, Y);
        });
      }));
  }),
  ZQ = q("$ZodDiscriminatedUnion", ($, X) => {
    $X.init($, X);
    let J = $._zod.parse;
    G$($._zod, "propValues", () => {
      let Q = {};
      for (let W of X.options) {
        let z = W._zod.propValues;
        if (!z || Object.keys(z).length === 0)
          throw Error(
            `Invalid discriminated union option at index "${X.options.indexOf(W)}"`,
          );
        for (let [G, U] of Object.entries(z)) {
          if (!Q[G]) Q[G] = new Set();
          for (let H of U) Q[G].add(H);
        }
      }
      return Q;
    });
    let Y = p9(() => {
      let Q = X.options,
        W = new Map();
      for (let z of Q) {
        let G = z._zod.propValues[X.discriminator];
        if (!G || G.size === 0)
          throw Error(
            `Invalid discriminated union option at index "${X.options.indexOf(z)}"`,
          );
        for (let U of G) {
          if (W.has(U))
            throw Error(`Duplicate discriminator value "${String(U)}"`);
          W.set(U, z);
        }
      }
      return W;
    });
    $._zod.parse = (Q, W) => {
      let z = Q.value;
      if (!T0(z))
        return (
          Q.issues.push({
            code: "invalid_type",
            expected: "object",
            input: z,
            inst: $,
          }),
          Q
        );
      let G = Y.value.get(z?.[X.discriminator]);
      if (G) return G._zod.run(Q, W);
      if (X.unionFallback) return J(Q, W);
      return (
        Q.issues.push({
          code: "invalid_union",
          errors: [],
          note: "No matching discriminator",
          input: z,
          path: [X.discriminator],
          inst: $,
        }),
        Q
      );
    };
  }),
  bQ = q("$ZodIntersection", ($, X) => {
    (p.init($, X),
      ($._zod.parse = (J, Y) => {
        let Q = J.value,
          W = X.left._zod.run({ value: Q, issues: [] }, Y),
          z = X.right._zod.run({ value: Q, issues: [] }, Y);
        if (W instanceof Promise || z instanceof Promise)
          return Promise.all([W, z]).then(([U, H]) => {
            return vq(J, U, H);
          });
        return vq(J, W, z);
      }));
  });
function Q3($, X) {
  if ($ === X) return { valid: !0, data: $ };
  if ($ instanceof Date && X instanceof Date && +$ === +X)
    return { valid: !0, data: $ };
  if (f0($) && f0(X)) {
    let J = Object.keys(X),
      Y = Object.keys($).filter((W) => J.indexOf(W) !== -1),
      Q = { ...$, ...X };
    for (let W of Y) {
      let z = Q3($[W], X[W]);
      if (!z.valid)
        return { valid: !1, mergeErrorPath: [W, ...z.mergeErrorPath] };
      Q[W] = z.data;
    }
    return { valid: !0, data: Q };
  }
  if (Array.isArray($) && Array.isArray(X)) {
    if ($.length !== X.length) return { valid: !1, mergeErrorPath: [] };
    let J = [];
    for (let Y = 0; Y < $.length; Y++) {
      let Q = $[Y],
        W = X[Y],
        z = Q3(Q, W);
      if (!z.valid)
        return { valid: !1, mergeErrorPath: [Y, ...z.mergeErrorPath] };
      J.push(z.data);
    }
    return { valid: !0, data: J };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function vq($, X, J) {
  if (X.issues.length) $.issues.push(...X.issues);
  if (J.issues.length) $.issues.push(...J.issues);
  if (y1($)) return $;
  let Y = Q3(X.value, J.value);
  if (!Y.valid)
    throw Error(
      `Unmergable intersection. Error path: ${JSON.stringify(Y.mergeErrorPath)}`,
    );
  return (($.value = Y.data), $);
}
var $1 = q("$ZodTuple", ($, X) => {
  p.init($, X);
  let J = X.items,
    Y =
      J.length - [...J].reverse().findIndex((Q) => Q._zod.optin !== "optional");
  $._zod.parse = (Q, W) => {
    let z = Q.value;
    if (!Array.isArray(z))
      return (
        Q.issues.push({
          input: z,
          inst: $,
          expected: "tuple",
          code: "invalid_type",
        }),
        Q
      );
    Q.value = [];
    let G = [];
    if (!X.rest) {
      let H = z.length > J.length,
        K = z.length < Y - 1;
      if (H || K)
        return (
          Q.issues.push({
            input: z,
            inst: $,
            origin: "array",
            ...(H
              ? { code: "too_big", maximum: J.length }
              : { code: "too_small", minimum: J.length }),
          }),
          Q
        );
    }
    let U = -1;
    for (let H of J) {
      if ((U++, U >= z.length)) {
        if (U >= Y) continue;
      }
      let K = H._zod.run({ value: z[U], issues: [] }, W);
      if (K instanceof Promise) G.push(K.then((N) => r7(N, Q, U)));
      else r7(K, Q, U);
    }
    if (X.rest) {
      let H = z.slice(J.length);
      for (let K of H) {
        U++;
        let N = X.rest._zod.run({ value: K, issues: [] }, W);
        if (N instanceof Promise) G.push(N.then((V) => r7(V, Q, U)));
        else r7(N, Q, U);
      }
    }
    if (G.length) return Promise.all(G).then(() => Q);
    return Q;
  };
});
function r7($, X, J) {
  if ($.issues.length) X.issues.push(...W6(J, $.issues));
  X.value[J] = $.value;
}
var RQ = q("$ZodRecord", ($, X) => {
    (p.init($, X),
      ($._zod.parse = (J, Y) => {
        let Q = J.value;
        if (!f0(Q))
          return (
            J.issues.push({
              expected: "record",
              code: "invalid_type",
              input: Q,
              inst: $,
            }),
            J
          );
        let W = [];
        if (X.keyType._zod.values) {
          let z = X.keyType._zod.values;
          J.value = {};
          for (let U of z)
            if (
              typeof U === "string" ||
              typeof U === "number" ||
              typeof U === "symbol"
            ) {
              let H = X.valueType._zod.run({ value: Q[U], issues: [] }, Y);
              if (H instanceof Promise)
                W.push(
                  H.then((K) => {
                    if (K.issues.length) J.issues.push(...W6(U, K.issues));
                    J.value[U] = K.value;
                  }),
                );
              else {
                if (H.issues.length) J.issues.push(...W6(U, H.issues));
                J.value[U] = H.value;
              }
            }
          let G;
          for (let U in Q) if (!z.has(U)) ((G = G ?? []), G.push(U));
          if (G && G.length > 0)
            J.issues.push({
              code: "unrecognized_keys",
              input: Q,
              inst: $,
              keys: G,
            });
        } else {
          J.value = {};
          for (let z of Reflect.ownKeys(Q)) {
            if (z === "__proto__") continue;
            let G = X.keyType._zod.run({ value: z, issues: [] }, Y);
            if (G instanceof Promise)
              throw Error(
                "Async schemas not supported in object keys currently",
              );
            if (G.issues.length) {
              (J.issues.push({
                origin: "record",
                code: "invalid_key",
                issues: G.issues.map((H) => L6(H, Y, v$())),
                input: z,
                path: [z],
                inst: $,
              }),
                (J.value[G.value] = G.value));
              continue;
            }
            let U = X.valueType._zod.run({ value: Q[z], issues: [] }, Y);
            if (U instanceof Promise)
              W.push(
                U.then((H) => {
                  if (H.issues.length) J.issues.push(...W6(z, H.issues));
                  J.value[G.value] = H.value;
                }),
              );
            else {
              if (U.issues.length) J.issues.push(...W6(z, U.issues));
              J.value[G.value] = U.value;
            }
          }
        }
        if (W.length) return Promise.all(W).then(() => J);
        return J;
      }));
  }),
  PQ = q("$ZodMap", ($, X) => {
    (p.init($, X),
      ($._zod.parse = (J, Y) => {
        let Q = J.value;
        if (!(Q instanceof Map))
          return (
            J.issues.push({
              expected: "map",
              code: "invalid_type",
              input: Q,
              inst: $,
            }),
            J
          );
        let W = [];
        J.value = new Map();
        for (let [z, G] of Q) {
          let U = X.keyType._zod.run({ value: z, issues: [] }, Y),
            H = X.valueType._zod.run({ value: G, issues: [] }, Y);
          if (U instanceof Promise || H instanceof Promise)
            W.push(
              Promise.all([U, H]).then(([K, N]) => {
                Cq(K, N, J, z, Q, $, Y);
              }),
            );
          else Cq(U, H, J, z, Q, $, Y);
        }
        if (W.length) return Promise.all(W).then(() => J);
        return J;
      }));
  });
function Cq($, X, J, Y, Q, W, z) {
  if ($.issues.length)
    if (n9.has(typeof Y)) J.issues.push(...W6(Y, $.issues));
    else
      J.issues.push({
        origin: "map",
        code: "invalid_key",
        input: Q,
        inst: W,
        issues: $.issues.map((G) => L6(G, z, v$())),
      });
  if (X.issues.length)
    if (n9.has(typeof Y)) J.issues.push(...W6(Y, X.issues));
    else
      J.issues.push({
        origin: "map",
        code: "invalid_element",
        input: Q,
        inst: W,
        key: Y,
        issues: X.issues.map((G) => L6(G, z, v$())),
      });
  J.value.set($.value, X.value);
}
var EQ = q("$ZodSet", ($, X) => {
  (p.init($, X),
    ($._zod.parse = (J, Y) => {
      let Q = J.value;
      if (!(Q instanceof Set))
        return (
          J.issues.push({
            input: Q,
            inst: $,
            expected: "set",
            code: "invalid_type",
          }),
          J
        );
      let W = [];
      J.value = new Set();
      for (let z of Q) {
        let G = X.valueType._zod.run({ value: z, issues: [] }, Y);
        if (G instanceof Promise) W.push(G.then((U) => kq(U, J)));
        else kq(G, J);
      }
      if (W.length) return Promise.all(W).then(() => J);
      return J;
    }));
});
function kq($, X) {
  if ($.issues.length) X.issues.push(...$.issues);
  X.value.add($.value);
}
var SQ = q("$ZodEnum", ($, X) => {
    p.init($, X);
    let J = d9(X.entries);
    (($._zod.values = new Set(J)),
      ($._zod.pattern = new RegExp(
        `^(${J.filter((Y) => n9.has(typeof Y))
          .map((Y) => (typeof Y === "string" ? I4(Y) : Y.toString()))
          .join("|")})$`,
      )),
      ($._zod.parse = (Y, Q) => {
        let W = Y.value;
        if ($._zod.values.has(W)) return Y;
        return (
          Y.issues.push({
            code: "invalid_value",
            values: J,
            input: W,
            inst: $,
          }),
          Y
        );
      }));
  }),
  vQ = q("$ZodLiteral", ($, X) => {
    (p.init($, X),
      ($._zod.values = new Set(X.values)),
      ($._zod.pattern = new RegExp(
        `^(${X.values.map((J) => (typeof J === "string" ? I4(J) : J ? J.toString() : String(J))).join("|")})$`,
      )),
      ($._zod.parse = (J, Y) => {
        let Q = J.value;
        if ($._zod.values.has(Q)) return J;
        return (
          J.issues.push({
            code: "invalid_value",
            values: X.values,
            input: Q,
            inst: $,
          }),
          J
        );
      }));
  }),
  CQ = q("$ZodFile", ($, X) => {
    (p.init($, X),
      ($._zod.parse = (J, Y) => {
        let Q = J.value;
        if (Q instanceof File) return J;
        return (
          J.issues.push({
            expected: "file",
            code: "invalid_type",
            input: Q,
            inst: $,
          }),
          J
        );
      }));
  }),
  c0 = q("$ZodTransform", ($, X) => {
    (p.init($, X),
      ($._zod.parse = (J, Y) => {
        let Q = X.transform(J.value, J);
        if (Y.async)
          return (Q instanceof Promise ? Q : Promise.resolve(Q)).then((z) => {
            return ((J.value = z), J);
          });
        if (Q instanceof Promise) throw new A4();
        return ((J.value = Q), J);
      }));
  }),
  kQ = q("$ZodOptional", ($, X) => {
    (p.init($, X),
      ($._zod.optin = "optional"),
      ($._zod.optout = "optional"),
      G$($._zod, "values", () => {
        return X.innerType._zod.values
          ? new Set([...X.innerType._zod.values, void 0])
          : void 0;
      }),
      G$($._zod, "pattern", () => {
        let J = X.innerType._zod.pattern;
        return J ? new RegExp(`^(${i9(J.source)})?$`) : void 0;
      }),
      ($._zod.parse = (J, Y) => {
        if (X.innerType._zod.optin === "optional")
          return X.innerType._zod.run(J, Y);
        if (J.value === void 0) return J;
        return X.innerType._zod.run(J, Y);
      }));
  }),
  _Q = q("$ZodNullable", ($, X) => {
    (p.init($, X),
      G$($._zod, "optin", () => X.innerType._zod.optin),
      G$($._zod, "optout", () => X.innerType._zod.optout),
      G$($._zod, "pattern", () => {
        let J = X.innerType._zod.pattern;
        return J ? new RegExp(`^(${i9(J.source)}|null)$`) : void 0;
      }),
      G$($._zod, "values", () => {
        return X.innerType._zod.values
          ? new Set([...X.innerType._zod.values, null])
          : void 0;
      }),
      ($._zod.parse = (J, Y) => {
        if (J.value === null) return J;
        return X.innerType._zod.run(J, Y);
      }));
  }),
  xQ = q("$ZodDefault", ($, X) => {
    (p.init($, X),
      ($._zod.optin = "optional"),
      G$($._zod, "values", () => X.innerType._zod.values),
      ($._zod.parse = (J, Y) => {
        if (J.value === void 0) return ((J.value = X.defaultValue), J);
        let Q = X.innerType._zod.run(J, Y);
        if (Q instanceof Promise) return Q.then((W) => _q(W, X));
        return _q(Q, X);
      }));
  });
function _q($, X) {
  if ($.value === void 0) $.value = X.defaultValue;
  return $;
}
var TQ = q("$ZodPrefault", ($, X) => {
    (p.init($, X),
      ($._zod.optin = "optional"),
      G$($._zod, "values", () => X.innerType._zod.values),
      ($._zod.parse = (J, Y) => {
        if (J.value === void 0) J.value = X.defaultValue;
        return X.innerType._zod.run(J, Y);
      }));
  }),
  fQ = q("$ZodNonOptional", ($, X) => {
    (p.init($, X),
      G$($._zod, "values", () => {
        let J = X.innerType._zod.values;
        return J ? new Set([...J].filter((Y) => Y !== void 0)) : void 0;
      }),
      ($._zod.parse = (J, Y) => {
        let Q = X.innerType._zod.run(J, Y);
        if (Q instanceof Promise) return Q.then((W) => xq(W, $));
        return xq(Q, $);
      }));
  });
function xq($, X) {
  if (!$.issues.length && $.value === void 0)
    $.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: $.value,
      inst: X,
    });
  return $;
}
var yQ = q("$ZodSuccess", ($, X) => {
    (p.init($, X),
      ($._zod.parse = (J, Y) => {
        let Q = X.innerType._zod.run(J, Y);
        if (Q instanceof Promise)
          return Q.then((W) => {
            return ((J.value = W.issues.length === 0), J);
          });
        return ((J.value = Q.issues.length === 0), J);
      }));
  }),
  gQ = q("$ZodCatch", ($, X) => {
    (p.init($, X),
      ($._zod.optin = "optional"),
      G$($._zod, "optout", () => X.innerType._zod.optout),
      G$($._zod, "values", () => X.innerType._zod.values),
      ($._zod.parse = (J, Y) => {
        let Q = X.innerType._zod.run(J, Y);
        if (Q instanceof Promise)
          return Q.then((W) => {
            if (((J.value = W.value), W.issues.length))
              ((J.value = X.catchValue({
                ...J,
                error: { issues: W.issues.map((z) => L6(z, Y, v$())) },
                input: J.value,
              })),
                (J.issues = []));
            return J;
          });
        if (((J.value = Q.value), Q.issues.length))
          ((J.value = X.catchValue({
            ...J,
            error: { issues: Q.issues.map((W) => L6(W, Y, v$())) },
            input: J.value,
          })),
            (J.issues = []));
        return J;
      }));
  }),
  hQ = q("$ZodNaN", ($, X) => {
    (p.init($, X),
      ($._zod.parse = (J, Y) => {
        if (typeof J.value !== "number" || !Number.isNaN(J.value))
          return (
            J.issues.push({
              input: J.value,
              inst: $,
              expected: "nan",
              code: "invalid_type",
            }),
            J
          );
        return J;
      }));
  }),
  d0 = q("$ZodPipe", ($, X) => {
    (p.init($, X),
      G$($._zod, "values", () => X.in._zod.values),
      G$($._zod, "optin", () => X.in._zod.optin),
      G$($._zod, "optout", () => X.out._zod.optout),
      ($._zod.parse = (J, Y) => {
        let Q = X.in._zod.run(J, Y);
        if (Q instanceof Promise) return Q.then((W) => Tq(W, X, Y));
        return Tq(Q, X, Y);
      }));
  });
function Tq($, X, J) {
  if (y1($)) return $;
  return X.out._zod.run({ value: $.value, issues: $.issues }, J);
}
var uQ = q("$ZodReadonly", ($, X) => {
  (p.init($, X),
    G$($._zod, "propValues", () => X.innerType._zod.propValues),
    G$($._zod, "values", () => X.innerType._zod.values),
    G$($._zod, "optin", () => X.innerType._zod.optin),
    G$($._zod, "optout", () => X.innerType._zod.optout),
    ($._zod.parse = (J, Y) => {
      let Q = X.innerType._zod.run(J, Y);
      if (Q instanceof Promise) return Q.then(fq);
      return fq(Q);
    }));
});
function fq($) {
  return (($.value = Object.freeze($.value)), $);
}
var mQ = q("$ZodTemplateLiteral", ($, X) => {
    p.init($, X);
    let J = [];
    for (let Y of X.parts)
      if (Y instanceof p) {
        if (!Y._zod.pattern)
          throw Error(
            `Invalid template literal part, no pattern found: ${[...Y._zod.traits].shift()}`,
          );
        let Q =
          Y._zod.pattern instanceof RegExp
            ? Y._zod.pattern.source
            : Y._zod.pattern;
        if (!Q) throw Error(`Invalid template literal part: ${Y._zod.traits}`);
        let W = Q.startsWith("^") ? 1 : 0,
          z = Q.endsWith("$") ? Q.length - 1 : Q.length;
        J.push(Q.slice(W, z));
      } else if (Y === null || YG.has(typeof Y)) J.push(I4(`${Y}`));
      else throw Error(`Invalid template literal part: ${Y}`);
    (($._zod.pattern = new RegExp(`^${J.join("")}$`)),
      ($._zod.parse = (Y, Q) => {
        if (typeof Y.value !== "string")
          return (
            Y.issues.push({
              input: Y.value,
              inst: $,
              expected: "template_literal",
              code: "invalid_type",
            }),
            Y
          );
        if ((($._zod.pattern.lastIndex = 0), !$._zod.pattern.test(Y.value)))
          return (
            Y.issues.push({
              input: Y.value,
              inst: $,
              code: "invalid_format",
              format: "template_literal",
              pattern: $._zod.pattern.source,
            }),
            Y
          );
        return Y;
      }));
  }),
  lQ = q("$ZodPromise", ($, X) => {
    (p.init($, X),
      ($._zod.parse = (J, Y) => {
        return Promise.resolve(J.value).then((Q) =>
          X.innerType._zod.run({ value: Q, issues: [] }, Y),
        );
      }));
  }),
  cQ = q("$ZodLazy", ($, X) => {
    (p.init($, X),
      G$($._zod, "innerType", () => X.getter()),
      G$($._zod, "pattern", () => $._zod.innerType._zod.pattern),
      G$($._zod, "propValues", () => $._zod.innerType._zod.propValues),
      G$($._zod, "optin", () => $._zod.innerType._zod.optin),
      G$($._zod, "optout", () => $._zod.innerType._zod.optout),
      ($._zod.parse = (J, Y) => {
        return $._zod.innerType._zod.run(J, Y);
      }));
  }),
  dQ = q("$ZodCustom", ($, X) => {
    (I$.init($, X),
      p.init($, X),
      ($._zod.parse = (J, Y) => {
        return J;
      }),
      ($._zod.check = (J) => {
        let Y = J.value,
          Q = X.fn(Y);
        if (Q instanceof Promise) return Q.then((W) => yq(W, J, Y, $));
        yq(Q, J, Y, $);
        return;
      }));
  });
function yq($, X, J, Y) {
  if (!$) {
    let Q = {
      code: "custom",
      input: J,
      inst: Y,
      path: [...(Y._zod.def.path ?? [])],
      continue: !Y._zod.def.abort,
    };
    if (Y._zod.def.params) Q.params = Y._zod.def.params;
    X.issues.push(UG(Q));
  }
}
var p0 = {};
B1(p0, {
  zhTW: () => i3,
  zhCN: () => p3,
  vi: () => d3,
  ur: () => c3,
  ua: () => l3,
  tr: () => m3,
  th: () => u3,
  ta: () => h3,
  sv: () => g3,
  sl: () => y3,
  ru: () => f3,
  pt: () => T3,
  ps: () => _3,
  pl: () => x3,
  ota: () => k3,
  no: () => C3,
  nl: () => v3,
  ms: () => S3,
  mk: () => E3,
  ko: () => P3,
  kh: () => R3,
  ja: () => b3,
  it: () => Z3,
  id: () => I3,
  hu: () => A3,
  he: () => M3,
  frCA: () => L3,
  fr: () => j3,
  fi: () => F3,
  fa: () => D3,
  es: () => q3,
  eo: () => B3,
  en: () => XX,
  de: () => w3,
  cs: () => O3,
  ca: () => V3,
  be: () => N3,
  az: () => K3,
  ar: () => H3,
});
var _v = () => {
  let $ = {
    string: { unit: "حرف", verb: "أن يحوي" },
    file: { unit: "بايت", verb: "أن يحوي" },
    array: { unit: "عنصر", verb: "أن يحوي" },
    set: { unit: "عنصر", verb: "أن يحوي" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "مدخل",
      email: "بريد إلكتروني",
      url: "رابط",
      emoji: "إيموجي",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "تاريخ ووقت بمعيار ISO",
      date: "تاريخ بمعيار ISO",
      time: "وقت بمعيار ISO",
      duration: "مدة بمعيار ISO",
      ipv4: "عنوان IPv4",
      ipv6: "عنوان IPv6",
      cidrv4: "مدى عناوين بصيغة IPv4",
      cidrv6: "مدى عناوين بصيغة IPv6",
      base64: "نَص بترميز base64-encoded",
      base64url: "نَص بترميز base64url-encoded",
      json_string: "نَص على هيئة JSON",
      e164: "رقم هاتف بمعيار E.164",
      jwt: "JWT",
      template_literal: "مدخل",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `مدخلات غير مقبولة: يفترض إدخال ${Q.expected}، ولكن تم إدخال ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `مدخلات غير مقبولة: يفترض إدخال ${v(Q.values[0])}`;
        return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return ` أكبر من اللازم: يفترض أن تكون ${Q.origin ?? "القيمة"} ${W} ${Q.maximum.toString()} ${z.unit ?? "عنصر"}`;
        return `أكبر من اللازم: يفترض أن تكون ${Q.origin ?? "القيمة"} ${W} ${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `أصغر من اللازم: يفترض لـ ${Q.origin} أن يكون ${W} ${Q.minimum.toString()} ${z.unit}`;
        return `أصغر من اللازم: يفترض لـ ${Q.origin} أن يكون ${W} ${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `نَص غير مقبول: يجب أن يبدأ بـ "${Q.prefix}"`;
        if (W.format === "ends_with")
          return `نَص غير مقبول: يجب أن ينتهي بـ "${W.suffix}"`;
        if (W.format === "includes")
          return `نَص غير مقبول: يجب أن يتضمَّن "${W.includes}"`;
        if (W.format === "regex")
          return `نَص غير مقبول: يجب أن يطابق النمط ${W.pattern}`;
        return `${Y[W.format] ?? Q.format} غير مقبول`;
      }
      case "not_multiple_of":
        return `رقم غير مقبول: يجب أن يكون من مضاعفات ${Q.divisor}`;
      case "unrecognized_keys":
        return `معرف${Q.keys.length > 1 ? "ات" : ""} غريب${Q.keys.length > 1 ? "ة" : ""}: ${A(Q.keys, "، ")}`;
      case "invalid_key":
        return `معرف غير مقبول في ${Q.origin}`;
      case "invalid_union":
        return "مدخل غير مقبول";
      case "invalid_element":
        return `مدخل غير مقبول في ${Q.origin}`;
      default:
        return "مدخل غير مقبول";
    }
  };
};
function H3() {
  return { localeError: _v() };
}
var xv = () => {
  let $ = {
    string: { unit: "simvol", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "element", verb: "olmalıdır" },
    set: { unit: "element", verb: "olmalıdır" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Yanlış dəyər: gözlənilən ${Q.expected}, daxil olan ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Yanlış dəyər: gözlənilən ${v(Q.values[0])}`;
        return `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Çox böyük: gözlənilən ${Q.origin ?? "dəyər"} ${W}${Q.maximum.toString()} ${z.unit ?? "element"}`;
        return `Çox böyük: gözlənilən ${Q.origin ?? "dəyər"} ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Çox kiçik: gözlənilən ${Q.origin} ${W}${Q.minimum.toString()} ${z.unit}`;
        return `Çox kiçik: gözlənilən ${Q.origin} ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Yanlış mətn: "${W.prefix}" ilə başlamalıdır`;
        if (W.format === "ends_with")
          return `Yanlış mətn: "${W.suffix}" ilə bitməlidir`;
        if (W.format === "includes")
          return `Yanlış mətn: "${W.includes}" daxil olmalıdır`;
        if (W.format === "regex")
          return `Yanlış mətn: ${W.pattern} şablonuna uyğun olmalıdır`;
        return `Yanlış ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Yanlış ədəd: ${Q.divisor} ilə bölünə bilən olmalıdır`;
      case "unrecognized_keys":
        return `Tanınmayan açar${Q.keys.length > 1 ? "lar" : ""}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `${Q.origin} daxilində yanlış açar`;
      case "invalid_union":
        return "Yanlış dəyər";
      case "invalid_element":
        return `${Q.origin} daxilində yanlış dəyər`;
      default:
        return "Yanlış dəyər";
    }
  };
};
function K3() {
  return { localeError: xv() };
}
function mq($, X, J, Y) {
  let Q = Math.abs($),
    W = Q % 10,
    z = Q % 100;
  if (z >= 11 && z <= 19) return Y;
  if (W === 1) return X;
  if (W >= 2 && W <= 4) return J;
  return Y;
}
var Tv = () => {
  let $ = {
    string: {
      unit: { one: "сімвал", few: "сімвалы", many: "сімвалаў" },
      verb: "мець",
    },
    array: {
      unit: { one: "элемент", few: "элементы", many: "элементаў" },
      verb: "мець",
    },
    set: {
      unit: { one: "элемент", few: "элементы", many: "элементаў" },
      verb: "мець",
    },
    file: { unit: { one: "байт", few: "байты", many: "байтаў" }, verb: "мець" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "лік";
        case "object": {
          if (Array.isArray(Q)) return "масіў";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "увод",
      email: "email адрас",
      url: "URL",
      emoji: "эмодзі",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO дата і час",
      date: "ISO дата",
      time: "ISO час",
      duration: "ISO працягласць",
      ipv4: "IPv4 адрас",
      ipv6: "IPv6 адрас",
      cidrv4: "IPv4 дыяпазон",
      cidrv6: "IPv6 дыяпазон",
      base64: "радок у фармаце base64",
      base64url: "радок у фармаце base64url",
      json_string: "JSON радок",
      e164: "нумар E.164",
      jwt: "JWT",
      template_literal: "увод",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Няправільны ўвод: чакаўся ${Q.expected}, атрымана ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Няправільны ўвод: чакалася ${v(Q.values[0])}`;
        return `Няправільны варыянт: чакаўся адзін з ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z) {
          let G = Number(Q.maximum),
            U = mq(G, z.unit.one, z.unit.few, z.unit.many);
          return `Занадта вялікі: чакалася, што ${Q.origin ?? "значэнне"} павінна ${z.verb} ${W}${Q.maximum.toString()} ${U}`;
        }
        return `Занадта вялікі: чакалася, што ${Q.origin ?? "значэнне"} павінна быць ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z) {
          let G = Number(Q.minimum),
            U = mq(G, z.unit.one, z.unit.few, z.unit.many);
          return `Занадта малы: чакалася, што ${Q.origin} павінна ${z.verb} ${W}${Q.minimum.toString()} ${U}`;
        }
        return `Занадта малы: чакалася, што ${Q.origin} павінна быць ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Няправільны радок: павінен пачынацца з "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Няправільны радок: павінен заканчвацца на "${W.suffix}"`;
        if (W.format === "includes")
          return `Няправільны радок: павінен змяшчаць "${W.includes}"`;
        if (W.format === "regex")
          return `Няправільны радок: павінен адпавядаць шаблону ${W.pattern}`;
        return `Няправільны ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Няправільны лік: павінен быць кратным ${Q.divisor}`;
      case "unrecognized_keys":
        return `Нераспазнаны ${Q.keys.length > 1 ? "ключы" : "ключ"}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Няправільны ключ у ${Q.origin}`;
      case "invalid_union":
        return "Няправільны ўвод";
      case "invalid_element":
        return `Няправільнае значэнне ў ${Q.origin}`;
      default:
        return "Няправільны ўвод";
    }
  };
};
function N3() {
  return { localeError: Tv() };
}
var fv = () => {
  let $ = {
    string: { unit: "caràcters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "entrada",
      email: "adreça electrònica",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data i hora ISO",
      date: "data ISO",
      time: "hora ISO",
      duration: "durada ISO",
      ipv4: "adreça IPv4",
      ipv6: "adreça IPv6",
      cidrv4: "rang IPv4",
      cidrv6: "rang IPv6",
      base64: "cadena codificada en base64",
      base64url: "cadena codificada en base64url",
      json_string: "cadena JSON",
      e164: "número E.164",
      jwt: "JWT",
      template_literal: "entrada",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Tipus invàlid: s'esperava ${Q.expected}, s'ha rebut ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Valor invàlid: s'esperava ${v(Q.values[0])}`;
        return `Opció invàlida: s'esperava una de ${A(Q.values, " o ")}`;
      case "too_big": {
        let W = Q.inclusive ? "com a màxim" : "menys de",
          z = X(Q.origin);
        if (z)
          return `Massa gran: s'esperava que ${Q.origin ?? "el valor"} contingués ${W} ${Q.maximum.toString()} ${z.unit ?? "elements"}`;
        return `Massa gran: s'esperava que ${Q.origin ?? "el valor"} fos ${W} ${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? "com a mínim" : "més de",
          z = X(Q.origin);
        if (z)
          return `Massa petit: s'esperava que ${Q.origin} contingués ${W} ${Q.minimum.toString()} ${z.unit}`;
        return `Massa petit: s'esperava que ${Q.origin} fos ${W} ${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Format invàlid: ha de començar amb "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Format invàlid: ha d'acabar amb "${W.suffix}"`;
        if (W.format === "includes")
          return `Format invàlid: ha d'incloure "${W.includes}"`;
        if (W.format === "regex")
          return `Format invàlid: ha de coincidir amb el patró ${W.pattern}`;
        return `Format invàlid per a ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Número invàlid: ha de ser múltiple de ${Q.divisor}`;
      case "unrecognized_keys":
        return `Clau${Q.keys.length > 1 ? "s" : ""} no reconeguda${Q.keys.length > 1 ? "s" : ""}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Clau invàlida a ${Q.origin}`;
      case "invalid_union":
        return "Entrada invàlida";
      case "invalid_element":
        return `Element invàlid a ${Q.origin}`;
      default:
        return "Entrada invàlida";
    }
  };
};
function V3() {
  return { localeError: fv() };
}
var yv = () => {
  let $ = {
    string: { unit: "znaků", verb: "mít" },
    file: { unit: "bajtů", verb: "mít" },
    array: { unit: "prvků", verb: "mít" },
    set: { unit: "prvků", verb: "mít" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "číslo";
        case "string":
          return "řetězec";
        case "boolean":
          return "boolean";
        case "bigint":
          return "bigint";
        case "function":
          return "funkce";
        case "symbol":
          return "symbol";
        case "undefined":
          return "undefined";
        case "object": {
          if (Array.isArray(Q)) return "pole";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "regulární výraz",
      email: "e-mailová adresa",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "datum a čas ve formátu ISO",
      date: "datum ve formátu ISO",
      time: "čas ve formátu ISO",
      duration: "doba trvání ISO",
      ipv4: "IPv4 adresa",
      ipv6: "IPv6 adresa",
      cidrv4: "rozsah IPv4",
      cidrv6: "rozsah IPv6",
      base64: "řetězec zakódovaný ve formátu base64",
      base64url: "řetězec zakódovaný ve formátu base64url",
      json_string: "řetězec ve formátu JSON",
      e164: "číslo E.164",
      jwt: "JWT",
      template_literal: "vstup",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Neplatný vstup: očekáváno ${Q.expected}, obdrženo ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Neplatný vstup: očekáváno ${v(Q.values[0])}`;
        return `Neplatná možnost: očekávána jedna z hodnot ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Hodnota je příliš velká: ${Q.origin ?? "hodnota"} musí mít ${W}${Q.maximum.toString()} ${z.unit ?? "prvků"}`;
        return `Hodnota je příliš velká: ${Q.origin ?? "hodnota"} musí být ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Hodnota je příliš malá: ${Q.origin ?? "hodnota"} musí mít ${W}${Q.minimum.toString()} ${z.unit ?? "prvků"}`;
        return `Hodnota je příliš malá: ${Q.origin ?? "hodnota"} musí být ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Neplatný řetězec: musí začínat na "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Neplatný řetězec: musí končit na "${W.suffix}"`;
        if (W.format === "includes")
          return `Neplatný řetězec: musí obsahovat "${W.includes}"`;
        if (W.format === "regex")
          return `Neplatný řetězec: musí odpovídat vzoru ${W.pattern}`;
        return `Neplatný formát ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Neplatné číslo: musí být násobkem ${Q.divisor}`;
      case "unrecognized_keys":
        return `Neznámé klíče: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Neplatný klíč v ${Q.origin}`;
      case "invalid_union":
        return "Neplatný vstup";
      case "invalid_element":
        return `Neplatná hodnota v ${Q.origin}`;
      default:
        return "Neplatný vstup";
    }
  };
};
function O3() {
  return { localeError: yv() };
}
var gv = () => {
  let $ = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "Zahl";
        case "object": {
          if (Array.isArray(Q)) return "Array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "Eingabe",
      email: "E-Mail-Adresse",
      url: "URL",
      emoji: "Emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-Datum und -Uhrzeit",
      date: "ISO-Datum",
      time: "ISO-Uhrzeit",
      duration: "ISO-Dauer",
      ipv4: "IPv4-Adresse",
      ipv6: "IPv6-Adresse",
      cidrv4: "IPv4-Bereich",
      cidrv6: "IPv6-Bereich",
      base64: "Base64-codierter String",
      base64url: "Base64-URL-codierter String",
      json_string: "JSON-String",
      e164: "E.164-Nummer",
      jwt: "JWT",
      template_literal: "Eingabe",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Ungültige Eingabe: erwartet ${Q.expected}, erhalten ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Ungültige Eingabe: erwartet ${v(Q.values[0])}`;
        return `Ungültige Option: erwartet eine von ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Zu groß: erwartet, dass ${Q.origin ?? "Wert"} ${W}${Q.maximum.toString()} ${z.unit ?? "Elemente"} hat`;
        return `Zu groß: erwartet, dass ${Q.origin ?? "Wert"} ${W}${Q.maximum.toString()} ist`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Zu klein: erwartet, dass ${Q.origin} ${W}${Q.minimum.toString()} ${z.unit} hat`;
        return `Zu klein: erwartet, dass ${Q.origin} ${W}${Q.minimum.toString()} ist`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Ungültiger String: muss mit "${W.prefix}" beginnen`;
        if (W.format === "ends_with")
          return `Ungültiger String: muss mit "${W.suffix}" enden`;
        if (W.format === "includes")
          return `Ungültiger String: muss "${W.includes}" enthalten`;
        if (W.format === "regex")
          return `Ungültiger String: muss dem Muster ${W.pattern} entsprechen`;
        return `Ungültig: ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Ungültige Zahl: muss ein Vielfaches von ${Q.divisor} sein`;
      case "unrecognized_keys":
        return `${Q.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Ungültiger Schlüssel in ${Q.origin}`;
      case "invalid_union":
        return "Ungültige Eingabe";
      case "invalid_element":
        return `Ungültiger Wert in ${Q.origin}`;
      default:
        return "Ungültige Eingabe";
    }
  };
};
function w3() {
  return { localeError: gv() };
}
var hv = ($) => {
    let X = typeof $;
    switch (X) {
      case "number":
        return Number.isNaN($) ? "NaN" : "number";
      case "object": {
        if (Array.isArray($)) return "array";
        if ($ === null) return "null";
        if (Object.getPrototypeOf($) !== Object.prototype && $.constructor)
          return $.constructor.name;
      }
    }
    return X;
  },
  uv = () => {
    let $ = {
      string: { unit: "characters", verb: "to have" },
      file: { unit: "bytes", verb: "to have" },
      array: { unit: "items", verb: "to have" },
      set: { unit: "items", verb: "to have" },
    };
    function X(Y) {
      return $[Y] ?? null;
    }
    let J = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input",
    };
    return (Y) => {
      switch (Y.code) {
        case "invalid_type":
          return `Invalid input: expected ${Y.expected}, received ${hv(Y.input)}`;
        case "invalid_value":
          if (Y.values.length === 1)
            return `Invalid input: expected ${v(Y.values[0])}`;
          return `Invalid option: expected one of ${A(Y.values, "|")}`;
        case "too_big": {
          let Q = Y.inclusive ? "<=" : "<",
            W = X(Y.origin);
          if (W)
            return `Too big: expected ${Y.origin ?? "value"} to have ${Q}${Y.maximum.toString()} ${W.unit ?? "elements"}`;
          return `Too big: expected ${Y.origin ?? "value"} to be ${Q}${Y.maximum.toString()}`;
        }
        case "too_small": {
          let Q = Y.inclusive ? ">=" : ">",
            W = X(Y.origin);
          if (W)
            return `Too small: expected ${Y.origin} to have ${Q}${Y.minimum.toString()} ${W.unit}`;
          return `Too small: expected ${Y.origin} to be ${Q}${Y.minimum.toString()}`;
        }
        case "invalid_format": {
          let Q = Y;
          if (Q.format === "starts_with")
            return `Invalid string: must start with "${Q.prefix}"`;
          if (Q.format === "ends_with")
            return `Invalid string: must end with "${Q.suffix}"`;
          if (Q.format === "includes")
            return `Invalid string: must include "${Q.includes}"`;
          if (Q.format === "regex")
            return `Invalid string: must match pattern ${Q.pattern}`;
          return `Invalid ${J[Q.format] ?? Y.format}`;
        }
        case "not_multiple_of":
          return `Invalid number: must be a multiple of ${Y.divisor}`;
        case "unrecognized_keys":
          return `Unrecognized key${Y.keys.length > 1 ? "s" : ""}: ${A(Y.keys, ", ")}`;
        case "invalid_key":
          return `Invalid key in ${Y.origin}`;
        case "invalid_union":
          return "Invalid input";
        case "invalid_element":
          return `Invalid value in ${Y.origin}`;
        default:
          return "Invalid input";
      }
    };
  };
function XX() {
  return { localeError: uv() };
}
var mv = ($) => {
    let X = typeof $;
    switch (X) {
      case "number":
        return Number.isNaN($) ? "NaN" : "nombro";
      case "object": {
        if (Array.isArray($)) return "tabelo";
        if ($ === null) return "senvalora";
        if (Object.getPrototypeOf($) !== Object.prototype && $.constructor)
          return $.constructor.name;
      }
    }
    return X;
  },
  lv = () => {
    let $ = {
      string: { unit: "karaktrojn", verb: "havi" },
      file: { unit: "bajtojn", verb: "havi" },
      array: { unit: "elementojn", verb: "havi" },
      set: { unit: "elementojn", verb: "havi" },
    };
    function X(Y) {
      return $[Y] ?? null;
    }
    let J = {
      regex: "enigo",
      email: "retadreso",
      url: "URL",
      emoji: "emoĝio",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-datotempo",
      date: "ISO-dato",
      time: "ISO-tempo",
      duration: "ISO-daŭro",
      ipv4: "IPv4-adreso",
      ipv6: "IPv6-adreso",
      cidrv4: "IPv4-rango",
      cidrv6: "IPv6-rango",
      base64: "64-ume kodita karaktraro",
      base64url: "URL-64-ume kodita karaktraro",
      json_string: "JSON-karaktraro",
      e164: "E.164-nombro",
      jwt: "JWT",
      template_literal: "enigo",
    };
    return (Y) => {
      switch (Y.code) {
        case "invalid_type":
          return `Nevalida enigo: atendiĝis ${Y.expected}, riceviĝis ${mv(Y.input)}`;
        case "invalid_value":
          if (Y.values.length === 1)
            return `Nevalida enigo: atendiĝis ${v(Y.values[0])}`;
          return `Nevalida opcio: atendiĝis unu el ${A(Y.values, "|")}`;
        case "too_big": {
          let Q = Y.inclusive ? "<=" : "<",
            W = X(Y.origin);
          if (W)
            return `Tro granda: atendiĝis ke ${Y.origin ?? "valoro"} havu ${Q}${Y.maximum.toString()} ${W.unit ?? "elementojn"}`;
          return `Tro granda: atendiĝis ke ${Y.origin ?? "valoro"} havu ${Q}${Y.maximum.toString()}`;
        }
        case "too_small": {
          let Q = Y.inclusive ? ">=" : ">",
            W = X(Y.origin);
          if (W)
            return `Tro malgranda: atendiĝis ke ${Y.origin} havu ${Q}${Y.minimum.toString()} ${W.unit}`;
          return `Tro malgranda: atendiĝis ke ${Y.origin} estu ${Q}${Y.minimum.toString()}`;
        }
        case "invalid_format": {
          let Q = Y;
          if (Q.format === "starts_with")
            return `Nevalida karaktraro: devas komenciĝi per "${Q.prefix}"`;
          if (Q.format === "ends_with")
            return `Nevalida karaktraro: devas finiĝi per "${Q.suffix}"`;
          if (Q.format === "includes")
            return `Nevalida karaktraro: devas inkluzivi "${Q.includes}"`;
          if (Q.format === "regex")
            return `Nevalida karaktraro: devas kongrui kun la modelo ${Q.pattern}`;
          return `Nevalida ${J[Q.format] ?? Y.format}`;
        }
        case "not_multiple_of":
          return `Nevalida nombro: devas esti oblo de ${Y.divisor}`;
        case "unrecognized_keys":
          return `Nekonata${Y.keys.length > 1 ? "j" : ""} ŝlosilo${Y.keys.length > 1 ? "j" : ""}: ${A(Y.keys, ", ")}`;
        case "invalid_key":
          return `Nevalida ŝlosilo en ${Y.origin}`;
        case "invalid_union":
          return "Nevalida enigo";
        case "invalid_element":
          return `Nevalida valoro en ${Y.origin}`;
        default:
          return "Nevalida enigo";
      }
    };
  };
function B3() {
  return { localeError: lv() };
}
var cv = () => {
  let $ = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "número";
        case "object": {
          if (Array.isArray(Q)) return "arreglo";
          if (Q === null) return "nulo";
          if (Object.getPrototypeOf(Q) !== Object.prototype)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "entrada",
      email: "dirección de correo electrónico",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "fecha y hora ISO",
      date: "fecha ISO",
      time: "hora ISO",
      duration: "duración ISO",
      ipv4: "dirección IPv4",
      ipv6: "dirección IPv6",
      cidrv4: "rango IPv4",
      cidrv6: "rango IPv6",
      base64: "cadena codificada en base64",
      base64url: "URL codificada en base64",
      json_string: "cadena JSON",
      e164: "número E.164",
      jwt: "JWT",
      template_literal: "entrada",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Entrada inválida: se esperaba ${Q.expected}, recibido ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Entrada inválida: se esperaba ${v(Q.values[0])}`;
        return `Opción inválida: se esperaba una de ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Demasiado grande: se esperaba que ${Q.origin ?? "valor"} tuviera ${W}${Q.maximum.toString()} ${z.unit ?? "elementos"}`;
        return `Demasiado grande: se esperaba que ${Q.origin ?? "valor"} fuera ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Demasiado pequeño: se esperaba que ${Q.origin} tuviera ${W}${Q.minimum.toString()} ${z.unit}`;
        return `Demasiado pequeño: se esperaba que ${Q.origin} fuera ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Cadena inválida: debe comenzar con "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Cadena inválida: debe terminar en "${W.suffix}"`;
        if (W.format === "includes")
          return `Cadena inválida: debe incluir "${W.includes}"`;
        if (W.format === "regex")
          return `Cadena inválida: debe coincidir con el patrón ${W.pattern}`;
        return `Inválido ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Número inválido: debe ser múltiplo de ${Q.divisor}`;
      case "unrecognized_keys":
        return `Llave${Q.keys.length > 1 ? "s" : ""} desconocida${Q.keys.length > 1 ? "s" : ""}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Llave inválida en ${Q.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido en ${Q.origin}`;
      default:
        return "Entrada inválida";
    }
  };
};
function q3() {
  return { localeError: cv() };
}
var dv = () => {
  let $ = {
    string: { unit: "کاراکتر", verb: "داشته باشد" },
    file: { unit: "بایت", verb: "داشته باشد" },
    array: { unit: "آیتم", verb: "داشته باشد" },
    set: { unit: "آیتم", verb: "داشته باشد" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "عدد";
        case "object": {
          if (Array.isArray(Q)) return "آرایه";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "ورودی",
      email: "آدرس ایمیل",
      url: "URL",
      emoji: "ایموجی",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "تاریخ و زمان ایزو",
      date: "تاریخ ایزو",
      time: "زمان ایزو",
      duration: "مدت زمان ایزو",
      ipv4: "IPv4 آدرس",
      ipv6: "IPv6 آدرس",
      cidrv4: "IPv4 دامنه",
      cidrv6: "IPv6 دامنه",
      base64: "base64-encoded رشته",
      base64url: "base64url-encoded رشته",
      json_string: "JSON رشته",
      e164: "E.164 عدد",
      jwt: "JWT",
      template_literal: "ورودی",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `ورودی نامعتبر: می‌بایست ${Q.expected} می‌بود، ${J(Q.input)} دریافت شد`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `ورودی نامعتبر: می‌بایست ${v(Q.values[0])} می‌بود`;
        return `گزینه نامعتبر: می‌بایست یکی از ${A(Q.values, "|")} می‌بود`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `خیلی بزرگ: ${Q.origin ?? "مقدار"} باید ${W}${Q.maximum.toString()} ${z.unit ?? "عنصر"} باشد`;
        return `خیلی بزرگ: ${Q.origin ?? "مقدار"} باید ${W}${Q.maximum.toString()} باشد`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `خیلی کوچک: ${Q.origin} باید ${W}${Q.minimum.toString()} ${z.unit} باشد`;
        return `خیلی کوچک: ${Q.origin} باید ${W}${Q.minimum.toString()} باشد`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `رشته نامعتبر: باید با "${W.prefix}" شروع شود`;
        if (W.format === "ends_with")
          return `رشته نامعتبر: باید با "${W.suffix}" تمام شود`;
        if (W.format === "includes")
          return `رشته نامعتبر: باید شامل "${W.includes}" باشد`;
        if (W.format === "regex")
          return `رشته نامعتبر: باید با الگوی ${W.pattern} مطابقت داشته باشد`;
        return `${Y[W.format] ?? Q.format} نامعتبر`;
      }
      case "not_multiple_of":
        return `عدد نامعتبر: باید مضرب ${Q.divisor} باشد`;
      case "unrecognized_keys":
        return `کلید${Q.keys.length > 1 ? "های" : ""} ناشناس: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `کلید ناشناس در ${Q.origin}`;
      case "invalid_union":
        return "ورودی نامعتبر";
      case "invalid_element":
        return `مقدار نامعتبر در ${Q.origin}`;
      default:
        return "ورودی نامعتبر";
    }
  };
};
function D3() {
  return { localeError: dv() };
}
var pv = () => {
  let $ = {
    string: { unit: "merkkiä", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "päivämäärän" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "säännöllinen lauseke",
      email: "sähköpostiosoite",
      url: "URL-osoite",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-aikaleima",
      date: "ISO-päivämäärä",
      time: "ISO-aika",
      duration: "ISO-kesto",
      ipv4: "IPv4-osoite",
      ipv6: "IPv6-osoite",
      cidrv4: "IPv4-alue",
      cidrv6: "IPv6-alue",
      base64: "base64-koodattu merkkijono",
      base64url: "base64url-koodattu merkkijono",
      json_string: "JSON-merkkijono",
      e164: "E.164-luku",
      jwt: "JWT",
      template_literal: "templaattimerkkijono",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Virheellinen tyyppi: odotettiin ${Q.expected}, oli ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Virheellinen syöte: täytyy olla ${v(Q.values[0])}`;
        return `Virheellinen valinta: täytyy olla yksi seuraavista: ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Liian suuri: ${z.subject} täytyy olla ${W}${Q.maximum.toString()} ${z.unit}`.trim();
        return `Liian suuri: arvon täytyy olla ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Liian pieni: ${z.subject} täytyy olla ${W}${Q.minimum.toString()} ${z.unit}`.trim();
        return `Liian pieni: arvon täytyy olla ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Virheellinen syöte: täytyy alkaa "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Virheellinen syöte: täytyy loppua "${W.suffix}"`;
        if (W.format === "includes")
          return `Virheellinen syöte: täytyy sisältää "${W.includes}"`;
        if (W.format === "regex")
          return `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${W.pattern}`;
        return `Virheellinen ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: täytyy olla luvun ${Q.divisor} monikerta`;
      case "unrecognized_keys":
        return `${Q.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return "Virheellinen syöte";
    }
  };
};
function F3() {
  return { localeError: pv() };
}
var iv = () => {
  let $ = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "nombre";
        case "object": {
          if (Array.isArray(Q)) return "tableau";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "entrée",
      email: "adresse e-mail",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "date et heure ISO",
      date: "date ISO",
      time: "heure ISO",
      duration: "durée ISO",
      ipv4: "adresse IPv4",
      ipv6: "adresse IPv6",
      cidrv4: "plage IPv4",
      cidrv6: "plage IPv6",
      base64: "chaîne encodée en base64",
      base64url: "chaîne encodée en base64url",
      json_string: "chaîne JSON",
      e164: "numéro E.164",
      jwt: "JWT",
      template_literal: "entrée",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Entrée invalide : ${Q.expected} attendu, ${J(Q.input)} reçu`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Entrée invalide : ${v(Q.values[0])} attendu`;
        return `Option invalide : une valeur parmi ${A(Q.values, "|")} attendue`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Trop grand : ${Q.origin ?? "valeur"} doit ${z.verb} ${W}${Q.maximum.toString()} ${z.unit ?? "élément(s)"}`;
        return `Trop grand : ${Q.origin ?? "valeur"} doit être ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Trop petit : ${Q.origin} doit ${z.verb} ${W}${Q.minimum.toString()} ${z.unit}`;
        return `Trop petit : ${Q.origin} doit être ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Chaîne invalide : doit commencer par "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Chaîne invalide : doit se terminer par "${W.suffix}"`;
        if (W.format === "includes")
          return `Chaîne invalide : doit inclure "${W.includes}"`;
        if (W.format === "regex")
          return `Chaîne invalide : doit correspondre au modèle ${W.pattern}`;
        return `${Y[W.format] ?? Q.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${Q.divisor}`;
      case "unrecognized_keys":
        return `Clé${Q.keys.length > 1 ? "s" : ""} non reconnue${Q.keys.length > 1 ? "s" : ""} : ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${Q.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${Q.origin}`;
      default:
        return "Entrée invalide";
    }
  };
};
function j3() {
  return { localeError: iv() };
}
var nv = () => {
  let $ = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "entrée",
      email: "adresse courriel",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "date-heure ISO",
      date: "date ISO",
      time: "heure ISO",
      duration: "durée ISO",
      ipv4: "adresse IPv4",
      ipv6: "adresse IPv6",
      cidrv4: "plage IPv4",
      cidrv6: "plage IPv6",
      base64: "chaîne encodée en base64",
      base64url: "chaîne encodée en base64url",
      json_string: "chaîne JSON",
      e164: "numéro E.164",
      jwt: "JWT",
      template_literal: "entrée",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Entrée invalide : attendu ${Q.expected}, reçu ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Entrée invalide : attendu ${v(Q.values[0])}`;
        return `Option invalide : attendu l'une des valeurs suivantes ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "≤" : "<",
          z = X(Q.origin);
        if (z)
          return `Trop grand : attendu que ${Q.origin ?? "la valeur"} ait ${W}${Q.maximum.toString()} ${z.unit}`;
        return `Trop grand : attendu que ${Q.origin ?? "la valeur"} soit ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? "≥" : ">",
          z = X(Q.origin);
        if (z)
          return `Trop petit : attendu que ${Q.origin} ait ${W}${Q.minimum.toString()} ${z.unit}`;
        return `Trop petit : attendu que ${Q.origin} soit ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Chaîne invalide : doit commencer par "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Chaîne invalide : doit se terminer par "${W.suffix}"`;
        if (W.format === "includes")
          return `Chaîne invalide : doit inclure "${W.includes}"`;
        if (W.format === "regex")
          return `Chaîne invalide : doit correspondre au motif ${W.pattern}`;
        return `${Y[W.format] ?? Q.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${Q.divisor}`;
      case "unrecognized_keys":
        return `Clé${Q.keys.length > 1 ? "s" : ""} non reconnue${Q.keys.length > 1 ? "s" : ""} : ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${Q.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${Q.origin}`;
      default:
        return "Entrée invalide";
    }
  };
};
function L3() {
  return { localeError: nv() };
}
var rv = () => {
  let $ = {
    string: { unit: "אותיות", verb: "לכלול" },
    file: { unit: "בייטים", verb: "לכלול" },
    array: { unit: "פריטים", verb: "לכלול" },
    set: { unit: "פריטים", verb: "לכלול" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "קלט",
      email: "כתובת אימייל",
      url: "כתובת רשת",
      emoji: "אימוג'י",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "תאריך וזמן ISO",
      date: "תאריך ISO",
      time: "זמן ISO",
      duration: "משך זמן ISO",
      ipv4: "כתובת IPv4",
      ipv6: "כתובת IPv6",
      cidrv4: "טווח IPv4",
      cidrv6: "טווח IPv6",
      base64: "מחרוזת בבסיס 64",
      base64url: "מחרוזת בבסיס 64 לכתובות רשת",
      json_string: "מחרוזת JSON",
      e164: "מספר E.164",
      jwt: "JWT",
      template_literal: "קלט",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `קלט לא תקין: צריך ${Q.expected}, התקבל ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1) return `קלט לא תקין: צריך ${v(Q.values[0])}`;
        return `קלט לא תקין: צריך אחת מהאפשרויות  ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `גדול מדי: ${Q.origin ?? "value"} צריך להיות ${W}${Q.maximum.toString()} ${z.unit ?? "elements"}`;
        return `גדול מדי: ${Q.origin ?? "value"} צריך להיות ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `קטן מדי: ${Q.origin} צריך להיות ${W}${Q.minimum.toString()} ${z.unit}`;
        return `קטן מדי: ${Q.origin} צריך להיות ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `מחרוזת לא תקינה: חייבת להתחיל ב"${W.prefix}"`;
        if (W.format === "ends_with")
          return `מחרוזת לא תקינה: חייבת להסתיים ב "${W.suffix}"`;
        if (W.format === "includes")
          return `מחרוזת לא תקינה: חייבת לכלול "${W.includes}"`;
        if (W.format === "regex")
          return `מחרוזת לא תקינה: חייבת להתאים לתבנית ${W.pattern}`;
        return `${Y[W.format] ?? Q.format} לא תקין`;
      }
      case "not_multiple_of":
        return `מספר לא תקין: חייב להיות מכפלה של ${Q.divisor}`;
      case "unrecognized_keys":
        return `מפתח${Q.keys.length > 1 ? "ות" : ""} לא מזוה${Q.keys.length > 1 ? "ים" : "ה"}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `מפתח לא תקין ב${Q.origin}`;
      case "invalid_union":
        return "קלט לא תקין";
      case "invalid_element":
        return `ערך לא תקין ב${Q.origin}`;
      default:
        return "קלט לא תקין";
    }
  };
};
function M3() {
  return { localeError: rv() };
}
var ov = () => {
  let $ = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "szám";
        case "object": {
          if (Array.isArray(Q)) return "tömb";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "bemenet",
      email: "email cím",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO időbélyeg",
      date: "ISO dátum",
      time: "ISO idő",
      duration: "ISO időintervallum",
      ipv4: "IPv4 cím",
      ipv6: "IPv6 cím",
      cidrv4: "IPv4 tartomány",
      cidrv6: "IPv6 tartomány",
      base64: "base64-kódolt string",
      base64url: "base64url-kódolt string",
      json_string: "JSON string",
      e164: "E.164 szám",
      jwt: "JWT",
      template_literal: "bemenet",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Érvénytelen bemenet: a várt érték ${Q.expected}, a kapott érték ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Érvénytelen bemenet: a várt érték ${v(Q.values[0])}`;
        return `Érvénytelen opció: valamelyik érték várt ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Túl nagy: ${Q.origin ?? "érték"} mérete túl nagy ${W}${Q.maximum.toString()} ${z.unit ?? "elem"}`;
        return `Túl nagy: a bemeneti érték ${Q.origin ?? "érték"} túl nagy: ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Túl kicsi: a bemeneti érték ${Q.origin} mérete túl kicsi ${W}${Q.minimum.toString()} ${z.unit}`;
        return `Túl kicsi: a bemeneti érték ${Q.origin} túl kicsi ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Érvénytelen string: "${W.prefix}" értékkel kell kezdődnie`;
        if (W.format === "ends_with")
          return `Érvénytelen string: "${W.suffix}" értékkel kell végződnie`;
        if (W.format === "includes")
          return `Érvénytelen string: "${W.includes}" értéket kell tartalmaznia`;
        if (W.format === "regex")
          return `Érvénytelen string: ${W.pattern} mintának kell megfelelnie`;
        return `Érvénytelen ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Érvénytelen szám: ${Q.divisor} többszörösének kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${Q.keys.length > 1 ? "s" : ""}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Érvénytelen kulcs ${Q.origin}`;
      case "invalid_union":
        return "Érvénytelen bemenet";
      case "invalid_element":
        return `Érvénytelen érték: ${Q.origin}`;
      default:
        return "Érvénytelen bemenet";
    }
  };
};
function A3() {
  return { localeError: ov() };
}
var tv = () => {
  let $ = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "input",
      email: "alamat email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "tanggal dan waktu format ISO",
      date: "tanggal format ISO",
      time: "jam format ISO",
      duration: "durasi format ISO",
      ipv4: "alamat IPv4",
      ipv6: "alamat IPv6",
      cidrv4: "rentang alamat IPv4",
      cidrv6: "rentang alamat IPv6",
      base64: "string dengan enkode base64",
      base64url: "string dengan enkode base64url",
      json_string: "string JSON",
      e164: "angka E.164",
      jwt: "JWT",
      template_literal: "input",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Input tidak valid: diharapkan ${Q.expected}, diterima ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Input tidak valid: diharapkan ${v(Q.values[0])}`;
        return `Pilihan tidak valid: diharapkan salah satu dari ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Terlalu besar: diharapkan ${Q.origin ?? "value"} memiliki ${W}${Q.maximum.toString()} ${z.unit ?? "elemen"}`;
        return `Terlalu besar: diharapkan ${Q.origin ?? "value"} menjadi ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Terlalu kecil: diharapkan ${Q.origin} memiliki ${W}${Q.minimum.toString()} ${z.unit}`;
        return `Terlalu kecil: diharapkan ${Q.origin} menjadi ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `String tidak valid: harus dimulai dengan "${W.prefix}"`;
        if (W.format === "ends_with")
          return `String tidak valid: harus berakhir dengan "${W.suffix}"`;
        if (W.format === "includes")
          return `String tidak valid: harus menyertakan "${W.includes}"`;
        if (W.format === "regex")
          return `String tidak valid: harus sesuai pola ${W.pattern}`;
        return `${Y[W.format] ?? Q.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${Q.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${Q.keys.length > 1 ? "s" : ""}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${Q.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${Q.origin}`;
      default:
        return "Input tidak valid";
    }
  };
};
function I3() {
  return { localeError: tv() };
}
var av = () => {
  let $ = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "numero";
        case "object": {
          if (Array.isArray(Q)) return "vettore";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "input",
      email: "indirizzo email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data e ora ISO",
      date: "data ISO",
      time: "ora ISO",
      duration: "durata ISO",
      ipv4: "indirizzo IPv4",
      ipv6: "indirizzo IPv6",
      cidrv4: "intervallo IPv4",
      cidrv6: "intervallo IPv6",
      base64: "stringa codificata in base64",
      base64url: "URL codificata in base64",
      json_string: "stringa JSON",
      e164: "numero E.164",
      jwt: "JWT",
      template_literal: "input",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Input non valido: atteso ${Q.expected}, ricevuto ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Input non valido: atteso ${v(Q.values[0])}`;
        return `Opzione non valida: atteso uno tra ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Troppo grande: ${Q.origin ?? "valore"} deve avere ${W}${Q.maximum.toString()} ${z.unit ?? "elementi"}`;
        return `Troppo grande: ${Q.origin ?? "valore"} deve essere ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Troppo piccolo: ${Q.origin} deve avere ${W}${Q.minimum.toString()} ${z.unit}`;
        return `Troppo piccolo: ${Q.origin} deve essere ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Stringa non valida: deve iniziare con "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Stringa non valida: deve terminare con "${W.suffix}"`;
        if (W.format === "includes")
          return `Stringa non valida: deve includere "${W.includes}"`;
        if (W.format === "regex")
          return `Stringa non valida: deve corrispondere al pattern ${W.pattern}`;
        return `Invalid ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${Q.divisor}`;
      case "unrecognized_keys":
        return `Chiav${Q.keys.length > 1 ? "i" : "e"} non riconosciut${Q.keys.length > 1 ? "e" : "a"}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${Q.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${Q.origin}`;
      default:
        return "Input non valido";
    }
  };
};
function Z3() {
  return { localeError: av() };
}
var sv = () => {
  let $ = {
    string: { unit: "文字", verb: "である" },
    file: { unit: "バイト", verb: "である" },
    array: { unit: "要素", verb: "である" },
    set: { unit: "要素", verb: "である" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "数値";
        case "object": {
          if (Array.isArray(Q)) return "配列";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "入力値",
      email: "メールアドレス",
      url: "URL",
      emoji: "絵文字",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO日時",
      date: "ISO日付",
      time: "ISO時刻",
      duration: "ISO期間",
      ipv4: "IPv4アドレス",
      ipv6: "IPv6アドレス",
      cidrv4: "IPv4範囲",
      cidrv6: "IPv6範囲",
      base64: "base64エンコード文字列",
      base64url: "base64urlエンコード文字列",
      json_string: "JSON文字列",
      e164: "E.164番号",
      jwt: "JWT",
      template_literal: "入力値",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `無効な入力: ${Q.expected}が期待されましたが、${J(Q.input)}が入力されました`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `無効な入力: ${v(Q.values[0])}が期待されました`;
        return `無効な選択: ${A(Q.values, "、")}のいずれかである必要があります`;
      case "too_big": {
        let W = Q.inclusive ? "以下である" : "より小さい",
          z = X(Q.origin);
        if (z)
          return `大きすぎる値: ${Q.origin ?? "値"}は${Q.maximum.toString()}${z.unit ?? "要素"}${W}必要があります`;
        return `大きすぎる値: ${Q.origin ?? "値"}は${Q.maximum.toString()}${W}必要があります`;
      }
      case "too_small": {
        let W = Q.inclusive ? "以上である" : "より大きい",
          z = X(Q.origin);
        if (z)
          return `小さすぎる値: ${Q.origin}は${Q.minimum.toString()}${z.unit}${W}必要があります`;
        return `小さすぎる値: ${Q.origin}は${Q.minimum.toString()}${W}必要があります`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `無効な文字列: "${W.prefix}"で始まる必要があります`;
        if (W.format === "ends_with")
          return `無効な文字列: "${W.suffix}"で終わる必要があります`;
        if (W.format === "includes")
          return `無効な文字列: "${W.includes}"を含む必要があります`;
        if (W.format === "regex")
          return `無効な文字列: パターン${W.pattern}に一致する必要があります`;
        return `無効な${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `無効な数値: ${Q.divisor}の倍数である必要があります`;
      case "unrecognized_keys":
        return `認識されていないキー${Q.keys.length > 1 ? "群" : ""}: ${A(Q.keys, "、")}`;
      case "invalid_key":
        return `${Q.origin}内の無効なキー`;
      case "invalid_union":
        return "無効な入力";
      case "invalid_element":
        return `${Q.origin}内の無効な値`;
      default:
        return "無効な入力";
    }
  };
};
function b3() {
  return { localeError: sv() };
}
var ev = () => {
  let $ = {
    string: { unit: "តួអក្សរ", verb: "គួរមាន" },
    file: { unit: "បៃ", verb: "គួរមាន" },
    array: { unit: "ធាតុ", verb: "គួរមាន" },
    set: { unit: "ធាតុ", verb: "គួរមាន" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "មិនមែនជាលេខ (NaN)" : "លេខ";
        case "object": {
          if (Array.isArray(Q)) return "អារេ (Array)";
          if (Q === null) return "គ្មានតម្លៃ (null)";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "ទិន្នន័យបញ្ចូល",
      email: "អាសយដ្ឋានអ៊ីមែល",
      url: "URL",
      emoji: "សញ្ញាអារម្មណ៍",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
      date: "កាលបរិច្ឆេទ ISO",
      time: "ម៉ោង ISO",
      duration: "រយៈពេល ISO",
      ipv4: "អាសយដ្ឋាន IPv4",
      ipv6: "អាសយដ្ឋាន IPv6",
      cidrv4: "ដែនអាសយដ្ឋាន IPv4",
      cidrv6: "ដែនអាសយដ្ឋាន IPv6",
      base64: "ខ្សែអក្សរអ៊ិកូដ base64",
      base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
      json_string: "ខ្សែអក្សរ JSON",
      e164: "លេខ E.164",
      jwt: "JWT",
      template_literal: "ទិន្នន័យបញ្ចូល",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${Q.expected} ប៉ុន្តែទទួលបាន ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${v(Q.values[0])}`;
        return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `ធំពេក៖ ត្រូវការ ${Q.origin ?? "តម្លៃ"} ${W} ${Q.maximum.toString()} ${z.unit ?? "ធាតុ"}`;
        return `ធំពេក៖ ត្រូវការ ${Q.origin ?? "តម្លៃ"} ${W} ${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `តូចពេក៖ ត្រូវការ ${Q.origin} ${W} ${Q.minimum.toString()} ${z.unit}`;
        return `តូចពេក៖ ត្រូវការ ${Q.origin} ${W} ${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${W.prefix}"`;
        if (W.format === "ends_with")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${W.suffix}"`;
        if (W.format === "includes")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${W.includes}"`;
        if (W.format === "regex")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${W.pattern}`;
        return `មិនត្រឹមត្រូវ៖ ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${Q.divisor}`;
      case "unrecognized_keys":
        return `រកឃើញសោមិនស្គាល់៖ ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `សោមិនត្រឹមត្រូវនៅក្នុង ${Q.origin}`;
      case "invalid_union":
        return "ទិន្នន័យមិនត្រឹមត្រូវ";
      case "invalid_element":
        return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${Q.origin}`;
      default:
        return "ទិន្នន័យមិនត្រឹមត្រូវ";
    }
  };
};
function R3() {
  return { localeError: ev() };
}
var $C = () => {
  let $ = {
    string: { unit: "문자", verb: "to have" },
    file: { unit: "바이트", verb: "to have" },
    array: { unit: "개", verb: "to have" },
    set: { unit: "개", verb: "to have" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "입력",
      email: "이메일 주소",
      url: "URL",
      emoji: "이모지",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO 날짜시간",
      date: "ISO 날짜",
      time: "ISO 시간",
      duration: "ISO 기간",
      ipv4: "IPv4 주소",
      ipv6: "IPv6 주소",
      cidrv4: "IPv4 범위",
      cidrv6: "IPv6 범위",
      base64: "base64 인코딩 문자열",
      base64url: "base64url 인코딩 문자열",
      json_string: "JSON 문자열",
      e164: "E.164 번호",
      jwt: "JWT",
      template_literal: "입력",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `잘못된 입력: 예상 타입은 ${Q.expected}, 받은 타입은 ${J(Q.input)}입니다`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `잘못된 입력: 값은 ${v(Q.values[0])} 이어야 합니다`;
        return `잘못된 옵션: ${A(Q.values, "또는 ")} 중 하나여야 합니다`;
      case "too_big": {
        let W = Q.inclusive ? "이하" : "미만",
          z = W === "미만" ? "이어야 합니다" : "여야 합니다",
          G = X(Q.origin),
          U = G?.unit ?? "요소";
        if (G)
          return `${Q.origin ?? "값"}이 너무 큽니다: ${Q.maximum.toString()}${U} ${W}${z}`;
        return `${Q.origin ?? "값"}이 너무 큽니다: ${Q.maximum.toString()} ${W}${z}`;
      }
      case "too_small": {
        let W = Q.inclusive ? "이상" : "초과",
          z = W === "이상" ? "이어야 합니다" : "여야 합니다",
          G = X(Q.origin),
          U = G?.unit ?? "요소";
        if (G)
          return `${Q.origin ?? "값"}이 너무 작습니다: ${Q.minimum.toString()}${U} ${W}${z}`;
        return `${Q.origin ?? "값"}이 너무 작습니다: ${Q.minimum.toString()} ${W}${z}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `잘못된 문자열: "${W.prefix}"(으)로 시작해야 합니다`;
        if (W.format === "ends_with")
          return `잘못된 문자열: "${W.suffix}"(으)로 끝나야 합니다`;
        if (W.format === "includes")
          return `잘못된 문자열: "${W.includes}"을(를) 포함해야 합니다`;
        if (W.format === "regex")
          return `잘못된 문자열: 정규식 ${W.pattern} 패턴과 일치해야 합니다`;
        return `잘못된 ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `잘못된 숫자: ${Q.divisor}의 배수여야 합니다`;
      case "unrecognized_keys":
        return `인식할 수 없는 키: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `잘못된 키: ${Q.origin}`;
      case "invalid_union":
        return "잘못된 입력";
      case "invalid_element":
        return `잘못된 값: ${Q.origin}`;
      default:
        return "잘못된 입력";
    }
  };
};
function P3() {
  return { localeError: $C() };
}
var XC = () => {
  let $ = {
    string: { unit: "знаци", verb: "да имаат" },
    file: { unit: "бајти", verb: "да имаат" },
    array: { unit: "ставки", verb: "да имаат" },
    set: { unit: "ставки", verb: "да имаат" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "број";
        case "object": {
          if (Array.isArray(Q)) return "низа";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "внес",
      email: "адреса на е-пошта",
      url: "URL",
      emoji: "емоџи",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO датум и време",
      date: "ISO датум",
      time: "ISO време",
      duration: "ISO времетраење",
      ipv4: "IPv4 адреса",
      ipv6: "IPv6 адреса",
      cidrv4: "IPv4 опсег",
      cidrv6: "IPv6 опсег",
      base64: "base64-енкодирана низа",
      base64url: "base64url-енкодирана низа",
      json_string: "JSON низа",
      e164: "E.164 број",
      jwt: "JWT",
      template_literal: "внес",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Грешен внес: се очекува ${Q.expected}, примено ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Invalid input: expected ${v(Q.values[0])}`;
        return `Грешана опција: се очекува една ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Премногу голем: се очекува ${Q.origin ?? "вредноста"} да има ${W}${Q.maximum.toString()} ${z.unit ?? "елементи"}`;
        return `Премногу голем: се очекува ${Q.origin ?? "вредноста"} да биде ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Премногу мал: се очекува ${Q.origin} да има ${W}${Q.minimum.toString()} ${z.unit}`;
        return `Премногу мал: се очекува ${Q.origin} да биде ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Неважечка низа: мора да започнува со "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Неважечка низа: мора да завршува со "${W.suffix}"`;
        if (W.format === "includes")
          return `Неважечка низа: мора да вклучува "${W.includes}"`;
        if (W.format === "regex")
          return `Неважечка низа: мора да одгоара на патернот ${W.pattern}`;
        return `Invalid ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Грешен број: мора да биде делив со ${Q.divisor}`;
      case "unrecognized_keys":
        return `${Q.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Грешен клуч во ${Q.origin}`;
      case "invalid_union":
        return "Грешен внес";
      case "invalid_element":
        return `Грешна вредност во ${Q.origin}`;
      default:
        return "Грешен внес";
    }
  };
};
function E3() {
  return { localeError: XC() };
}
var JC = () => {
  let $ = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "nombor";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "input",
      email: "alamat e-mel",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "tarikh masa ISO",
      date: "tarikh ISO",
      time: "masa ISO",
      duration: "tempoh ISO",
      ipv4: "alamat IPv4",
      ipv6: "alamat IPv6",
      cidrv4: "julat IPv4",
      cidrv6: "julat IPv6",
      base64: "string dikodkan base64",
      base64url: "string dikodkan base64url",
      json_string: "string JSON",
      e164: "nombor E.164",
      jwt: "JWT",
      template_literal: "input",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Input tidak sah: dijangka ${Q.expected}, diterima ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Input tidak sah: dijangka ${v(Q.values[0])}`;
        return `Pilihan tidak sah: dijangka salah satu daripada ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Terlalu besar: dijangka ${Q.origin ?? "nilai"} ${z.verb} ${W}${Q.maximum.toString()} ${z.unit ?? "elemen"}`;
        return `Terlalu besar: dijangka ${Q.origin ?? "nilai"} adalah ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Terlalu kecil: dijangka ${Q.origin} ${z.verb} ${W}${Q.minimum.toString()} ${z.unit}`;
        return `Terlalu kecil: dijangka ${Q.origin} adalah ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `String tidak sah: mesti bermula dengan "${W.prefix}"`;
        if (W.format === "ends_with")
          return `String tidak sah: mesti berakhir dengan "${W.suffix}"`;
        if (W.format === "includes")
          return `String tidak sah: mesti mengandungi "${W.includes}"`;
        if (W.format === "regex")
          return `String tidak sah: mesti sepadan dengan corak ${W.pattern}`;
        return `${Y[W.format] ?? Q.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${Q.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${Q.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${Q.origin}`;
      default:
        return "Input tidak sah";
    }
  };
};
function S3() {
  return { localeError: JC() };
}
var QC = () => {
  let $ = {
    string: { unit: "tekens" },
    file: { unit: "bytes" },
    array: { unit: "elementen" },
    set: { unit: "elementen" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "getal";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "invoer",
      email: "emailadres",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datum en tijd",
      date: "ISO datum",
      time: "ISO tijd",
      duration: "ISO duur",
      ipv4: "IPv4-adres",
      ipv6: "IPv6-adres",
      cidrv4: "IPv4-bereik",
      cidrv6: "IPv6-bereik",
      base64: "base64-gecodeerde tekst",
      base64url: "base64 URL-gecodeerde tekst",
      json_string: "JSON string",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "invoer",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Ongeldige invoer: verwacht ${Q.expected}, ontving ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Ongeldige invoer: verwacht ${v(Q.values[0])}`;
        return `Ongeldige optie: verwacht één van ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Te lang: verwacht dat ${Q.origin ?? "waarde"} ${W}${Q.maximum.toString()} ${z.unit ?? "elementen"} bevat`;
        return `Te lang: verwacht dat ${Q.origin ?? "waarde"} ${W}${Q.maximum.toString()} is`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Te kort: verwacht dat ${Q.origin} ${W}${Q.minimum.toString()} ${z.unit} bevat`;
        return `Te kort: verwacht dat ${Q.origin} ${W}${Q.minimum.toString()} is`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Ongeldige tekst: moet met "${W.prefix}" beginnen`;
        if (W.format === "ends_with")
          return `Ongeldige tekst: moet op "${W.suffix}" eindigen`;
        if (W.format === "includes")
          return `Ongeldige tekst: moet "${W.includes}" bevatten`;
        if (W.format === "regex")
          return `Ongeldige tekst: moet overeenkomen met patroon ${W.pattern}`;
        return `Ongeldig: ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${Q.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${Q.keys.length > 1 ? "s" : ""}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${Q.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${Q.origin}`;
      default:
        return "Ongeldige invoer";
    }
  };
};
function v3() {
  return { localeError: QC() };
}
var YC = () => {
  let $ = {
    string: { unit: "tegn", verb: "å ha" },
    file: { unit: "bytes", verb: "å ha" },
    array: { unit: "elementer", verb: "å inneholde" },
    set: { unit: "elementer", verb: "å inneholde" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "tall";
        case "object": {
          if (Array.isArray(Q)) return "liste";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "input",
      email: "e-postadresse",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO dato- og klokkeslett",
      date: "ISO-dato",
      time: "ISO-klokkeslett",
      duration: "ISO-varighet",
      ipv4: "IPv4-område",
      ipv6: "IPv6-område",
      cidrv4: "IPv4-spekter",
      cidrv6: "IPv6-spekter",
      base64: "base64-enkodet streng",
      base64url: "base64url-enkodet streng",
      json_string: "JSON-streng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "input",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Ugyldig input: forventet ${Q.expected}, fikk ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Ugyldig verdi: forventet ${v(Q.values[0])}`;
        return `Ugyldig valg: forventet en av ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `For stor(t): forventet ${Q.origin ?? "value"} til å ha ${W}${Q.maximum.toString()} ${z.unit ?? "elementer"}`;
        return `For stor(t): forventet ${Q.origin ?? "value"} til å ha ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `For lite(n): forventet ${Q.origin} til å ha ${W}${Q.minimum.toString()} ${z.unit}`;
        return `For lite(n): forventet ${Q.origin} til å ha ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Ugyldig streng: må starte med "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Ugyldig streng: må ende med "${W.suffix}"`;
        if (W.format === "includes")
          return `Ugyldig streng: må inneholde "${W.includes}"`;
        if (W.format === "regex")
          return `Ugyldig streng: må matche mønsteret ${W.pattern}`;
        return `Ugyldig ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: må være et multiplum av ${Q.divisor}`;
      case "unrecognized_keys":
        return `${Q.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøkkel i ${Q.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${Q.origin}`;
      default:
        return "Ugyldig input";
    }
  };
};
function C3() {
  return { localeError: YC() };
}
var WC = () => {
  let $ = {
    string: { unit: "harf", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "unsur", verb: "olmalıdır" },
    set: { unit: "unsur", verb: "olmalıdır" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "numara";
        case "object": {
          if (Array.isArray(Q)) return "saf";
          if (Q === null) return "gayb";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "giren",
      email: "epostagâh",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO hengâmı",
      date: "ISO tarihi",
      time: "ISO zamanı",
      duration: "ISO müddeti",
      ipv4: "IPv4 nişânı",
      ipv6: "IPv6 nişânı",
      cidrv4: "IPv4 menzili",
      cidrv6: "IPv6 menzili",
      base64: "base64-şifreli metin",
      base64url: "base64url-şifreli metin",
      json_string: "JSON metin",
      e164: "E.164 sayısı",
      jwt: "JWT",
      template_literal: "giren",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Fâsit giren: umulan ${Q.expected}, alınan ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Fâsit giren: umulan ${v(Q.values[0])}`;
        return `Fâsit tercih: mûteberler ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Fazla büyük: ${Q.origin ?? "value"}, ${W}${Q.maximum.toString()} ${z.unit ?? "elements"} sahip olmalıydı.`;
        return `Fazla büyük: ${Q.origin ?? "value"}, ${W}${Q.maximum.toString()} olmalıydı.`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Fazla küçük: ${Q.origin}, ${W}${Q.minimum.toString()} ${z.unit} sahip olmalıydı.`;
        return `Fazla küçük: ${Q.origin}, ${W}${Q.minimum.toString()} olmalıydı.`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Fâsit metin: "${W.prefix}" ile başlamalı.`;
        if (W.format === "ends_with")
          return `Fâsit metin: "${W.suffix}" ile bitmeli.`;
        if (W.format === "includes")
          return `Fâsit metin: "${W.includes}" ihtivâ etmeli.`;
        if (W.format === "regex")
          return `Fâsit metin: ${W.pattern} nakşına uymalı.`;
        return `Fâsit ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Fâsit sayı: ${Q.divisor} katı olmalıydı.`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar ${Q.keys.length > 1 ? "s" : ""}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `${Q.origin} için tanınmayan anahtar var.`;
      case "invalid_union":
        return "Giren tanınamadı.";
      case "invalid_element":
        return `${Q.origin} için tanınmayan kıymet var.`;
      default:
        return "Kıymet tanınamadı.";
    }
  };
};
function k3() {
  return { localeError: WC() };
}
var zC = () => {
  let $ = {
    string: { unit: "توکي", verb: "ولري" },
    file: { unit: "بایټس", verb: "ولري" },
    array: { unit: "توکي", verb: "ولري" },
    set: { unit: "توکي", verb: "ولري" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "عدد";
        case "object": {
          if (Array.isArray(Q)) return "ارې";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "ورودي",
      email: "بریښنالیک",
      url: "یو آر ال",
      emoji: "ایموجي",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "نیټه او وخت",
      date: "نېټه",
      time: "وخت",
      duration: "موده",
      ipv4: "د IPv4 پته",
      ipv6: "د IPv6 پته",
      cidrv4: "د IPv4 ساحه",
      cidrv6: "د IPv6 ساحه",
      base64: "base64-encoded متن",
      base64url: "base64url-encoded متن",
      json_string: "JSON متن",
      e164: "د E.164 شمېره",
      jwt: "JWT",
      template_literal: "ورودي",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `ناسم ورودي: باید ${Q.expected} وای, مګر ${J(Q.input)} ترلاسه شو`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `ناسم ورودي: باید ${v(Q.values[0])} وای`;
        return `ناسم انتخاب: باید یو له ${A(Q.values, "|")} څخه وای`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `ډیر لوی: ${Q.origin ?? "ارزښت"} باید ${W}${Q.maximum.toString()} ${z.unit ?? "عنصرونه"} ولري`;
        return `ډیر لوی: ${Q.origin ?? "ارزښت"} باید ${W}${Q.maximum.toString()} وي`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `ډیر کوچنی: ${Q.origin} باید ${W}${Q.minimum.toString()} ${z.unit} ولري`;
        return `ډیر کوچنی: ${Q.origin} باید ${W}${Q.minimum.toString()} وي`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `ناسم متن: باید د "${W.prefix}" سره پیل شي`;
        if (W.format === "ends_with")
          return `ناسم متن: باید د "${W.suffix}" سره پای ته ورسيږي`;
        if (W.format === "includes")
          return `ناسم متن: باید "${W.includes}" ولري`;
        if (W.format === "regex")
          return `ناسم متن: باید د ${W.pattern} سره مطابقت ولري`;
        return `${Y[W.format] ?? Q.format} ناسم دی`;
      }
      case "not_multiple_of":
        return `ناسم عدد: باید د ${Q.divisor} مضرب وي`;
      case "unrecognized_keys":
        return `ناسم ${Q.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `ناسم کلیډ په ${Q.origin} کې`;
      case "invalid_union":
        return "ناسمه ورودي";
      case "invalid_element":
        return `ناسم عنصر په ${Q.origin} کې`;
      default:
        return "ناسمه ورودي";
    }
  };
};
function _3() {
  return { localeError: zC() };
}
var GC = () => {
  let $ = {
    string: { unit: "znaków", verb: "mieć" },
    file: { unit: "bajtów", verb: "mieć" },
    array: { unit: "elementów", verb: "mieć" },
    set: { unit: "elementów", verb: "mieć" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "liczba";
        case "object": {
          if (Array.isArray(Q)) return "tablica";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "wyrażenie",
      email: "adres email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data i godzina w formacie ISO",
      date: "data w formacie ISO",
      time: "godzina w formacie ISO",
      duration: "czas trwania ISO",
      ipv4: "adres IPv4",
      ipv6: "adres IPv6",
      cidrv4: "zakres IPv4",
      cidrv6: "zakres IPv6",
      base64: "ciąg znaków zakodowany w formacie base64",
      base64url: "ciąg znaków zakodowany w formacie base64url",
      json_string: "ciąg znaków w formacie JSON",
      e164: "liczba E.164",
      jwt: "JWT",
      template_literal: "wejście",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Nieprawidłowe dane wejściowe: oczekiwano ${Q.expected}, otrzymano ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Nieprawidłowe dane wejściowe: oczekiwano ${v(Q.values[0])}`;
        return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Za duża wartość: oczekiwano, że ${Q.origin ?? "wartość"} będzie mieć ${W}${Q.maximum.toString()} ${z.unit ?? "elementów"}`;
        return `Zbyt duż(y/a/e): oczekiwano, że ${Q.origin ?? "wartość"} będzie wynosić ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Za mała wartość: oczekiwano, że ${Q.origin ?? "wartość"} będzie mieć ${W}${Q.minimum.toString()} ${z.unit ?? "elementów"}`;
        return `Zbyt mał(y/a/e): oczekiwano, że ${Q.origin ?? "wartość"} będzie wynosić ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Nieprawidłowy ciąg znaków: musi zaczynać się od "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Nieprawidłowy ciąg znaków: musi kończyć się na "${W.suffix}"`;
        if (W.format === "includes")
          return `Nieprawidłowy ciąg znaków: musi zawierać "${W.includes}"`;
        if (W.format === "regex")
          return `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${W.pattern}`;
        return `Nieprawidłow(y/a/e) ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Nieprawidłowa liczba: musi być wielokrotnością ${Q.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${Q.keys.length > 1 ? "s" : ""}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawidłowy klucz w ${Q.origin}`;
      case "invalid_union":
        return "Nieprawidłowe dane wejściowe";
      case "invalid_element":
        return `Nieprawidłowa wartość w ${Q.origin}`;
      default:
        return "Nieprawidłowe dane wejściowe";
    }
  };
};
function x3() {
  return { localeError: GC() };
}
var UC = () => {
  let $ = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "número";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "nulo";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "padrão",
      email: "endereço de e-mail",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data e hora ISO",
      date: "data ISO",
      time: "hora ISO",
      duration: "duração ISO",
      ipv4: "endereço IPv4",
      ipv6: "endereço IPv6",
      cidrv4: "faixa de IPv4",
      cidrv6: "faixa de IPv6",
      base64: "texto codificado em base64",
      base64url: "URL codificada em base64",
      json_string: "texto JSON",
      e164: "número E.164",
      jwt: "JWT",
      template_literal: "entrada",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Tipo inválido: esperado ${Q.expected}, recebido ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Entrada inválida: esperado ${v(Q.values[0])}`;
        return `Opção inválida: esperada uma das ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Muito grande: esperado que ${Q.origin ?? "valor"} tivesse ${W}${Q.maximum.toString()} ${z.unit ?? "elementos"}`;
        return `Muito grande: esperado que ${Q.origin ?? "valor"} fosse ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Muito pequeno: esperado que ${Q.origin} tivesse ${W}${Q.minimum.toString()} ${z.unit}`;
        return `Muito pequeno: esperado que ${Q.origin} fosse ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Texto inválido: deve começar com "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Texto inválido: deve terminar com "${W.suffix}"`;
        if (W.format === "includes")
          return `Texto inválido: deve incluir "${W.includes}"`;
        if (W.format === "regex")
          return `Texto inválido: deve corresponder ao padrão ${W.pattern}`;
        return `${Y[W.format] ?? Q.format} inválido`;
      }
      case "not_multiple_of":
        return `Número inválido: deve ser múltiplo de ${Q.divisor}`;
      case "unrecognized_keys":
        return `Chave${Q.keys.length > 1 ? "s" : ""} desconhecida${Q.keys.length > 1 ? "s" : ""}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Chave inválida em ${Q.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido em ${Q.origin}`;
      default:
        return "Campo inválido";
    }
  };
};
function T3() {
  return { localeError: UC() };
}
function lq($, X, J, Y) {
  let Q = Math.abs($),
    W = Q % 10,
    z = Q % 100;
  if (z >= 11 && z <= 19) return Y;
  if (W === 1) return X;
  if (W >= 2 && W <= 4) return J;
  return Y;
}
var HC = () => {
  let $ = {
    string: {
      unit: { one: "символ", few: "символа", many: "символов" },
      verb: "иметь",
    },
    file: { unit: { one: "байт", few: "байта", many: "байт" }, verb: "иметь" },
    array: {
      unit: { one: "элемент", few: "элемента", many: "элементов" },
      verb: "иметь",
    },
    set: {
      unit: { one: "элемент", few: "элемента", many: "элементов" },
      verb: "иметь",
    },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "число";
        case "object": {
          if (Array.isArray(Q)) return "массив";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "ввод",
      email: "email адрес",
      url: "URL",
      emoji: "эмодзи",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO дата и время",
      date: "ISO дата",
      time: "ISO время",
      duration: "ISO длительность",
      ipv4: "IPv4 адрес",
      ipv6: "IPv6 адрес",
      cidrv4: "IPv4 диапазон",
      cidrv6: "IPv6 диапазон",
      base64: "строка в формате base64",
      base64url: "строка в формате base64url",
      json_string: "JSON строка",
      e164: "номер E.164",
      jwt: "JWT",
      template_literal: "ввод",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Неверный ввод: ожидалось ${Q.expected}, получено ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Неверный ввод: ожидалось ${v(Q.values[0])}`;
        return `Неверный вариант: ожидалось одно из ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z) {
          let G = Number(Q.maximum),
            U = lq(G, z.unit.one, z.unit.few, z.unit.many);
          return `Слишком большое значение: ожидалось, что ${Q.origin ?? "значение"} будет иметь ${W}${Q.maximum.toString()} ${U}`;
        }
        return `Слишком большое значение: ожидалось, что ${Q.origin ?? "значение"} будет ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z) {
          let G = Number(Q.minimum),
            U = lq(G, z.unit.one, z.unit.few, z.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${Q.origin} будет иметь ${W}${Q.minimum.toString()} ${U}`;
        }
        return `Слишком маленькое значение: ожидалось, что ${Q.origin} будет ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Неверная строка: должна начинаться с "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Неверная строка: должна заканчиваться на "${W.suffix}"`;
        if (W.format === "includes")
          return `Неверная строка: должна содержать "${W.includes}"`;
        if (W.format === "regex")
          return `Неверная строка: должна соответствовать шаблону ${W.pattern}`;
        return `Неверный ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Неверное число: должно быть кратным ${Q.divisor}`;
      case "unrecognized_keys":
        return `Нераспознанн${Q.keys.length > 1 ? "ые" : "ый"} ключ${Q.keys.length > 1 ? "и" : ""}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Неверный ключ в ${Q.origin}`;
      case "invalid_union":
        return "Неверные входные данные";
      case "invalid_element":
        return `Неверное значение в ${Q.origin}`;
      default:
        return "Неверные входные данные";
    }
  };
};
function f3() {
  return { localeError: HC() };
}
var KC = () => {
  let $ = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "število";
        case "object": {
          if (Array.isArray(Q)) return "tabela";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "vnos",
      email: "e-poštni naslov",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datum in čas",
      date: "ISO datum",
      time: "ISO čas",
      duration: "ISO trajanje",
      ipv4: "IPv4 naslov",
      ipv6: "IPv6 naslov",
      cidrv4: "obseg IPv4",
      cidrv6: "obseg IPv6",
      base64: "base64 kodiran niz",
      base64url: "base64url kodiran niz",
      json_string: "JSON niz",
      e164: "E.164 številka",
      jwt: "JWT",
      template_literal: "vnos",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Neveljaven vnos: pričakovano ${Q.expected}, prejeto ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Neveljaven vnos: pričakovano ${v(Q.values[0])}`;
        return `Neveljavna možnost: pričakovano eno izmed ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Preveliko: pričakovano, da bo ${Q.origin ?? "vrednost"} imelo ${W}${Q.maximum.toString()} ${z.unit ?? "elementov"}`;
        return `Preveliko: pričakovano, da bo ${Q.origin ?? "vrednost"} ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Premajhno: pričakovano, da bo ${Q.origin} imelo ${W}${Q.minimum.toString()} ${z.unit}`;
        return `Premajhno: pričakovano, da bo ${Q.origin} ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Neveljaven niz: mora se začeti z "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Neveljaven niz: mora se končati z "${W.suffix}"`;
        if (W.format === "includes")
          return `Neveljaven niz: mora vsebovati "${W.includes}"`;
        if (W.format === "regex")
          return `Neveljaven niz: mora ustrezati vzorcu ${W.pattern}`;
        return `Neveljaven ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno število: mora biti večkratnik ${Q.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${Q.keys.length > 1 ? "i ključi" : " ključ"}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven ključ v ${Q.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${Q.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function y3() {
  return { localeError: KC() };
}
var NC = () => {
  let $ = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att innehålla" },
    set: { unit: "objekt", verb: "att innehålla" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "antal";
        case "object": {
          if (Array.isArray(Q)) return "lista";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "reguljärt uttryck",
      email: "e-postadress",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-datum och tid",
      date: "ISO-datum",
      time: "ISO-tid",
      duration: "ISO-varaktighet",
      ipv4: "IPv4-intervall",
      ipv6: "IPv6-intervall",
      cidrv4: "IPv4-spektrum",
      cidrv6: "IPv6-spektrum",
      base64: "base64-kodad sträng",
      base64url: "base64url-kodad sträng",
      json_string: "JSON-sträng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "mall-literal",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Ogiltig inmatning: förväntat ${Q.expected}, fick ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Ogiltig inmatning: förväntat ${v(Q.values[0])}`;
        return `Ogiltigt val: förväntade en av ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `För stor(t): förväntade ${Q.origin ?? "värdet"} att ha ${W}${Q.maximum.toString()} ${z.unit ?? "element"}`;
        return `För stor(t): förväntat ${Q.origin ?? "värdet"} att ha ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `För lite(t): förväntade ${Q.origin ?? "värdet"} att ha ${W}${Q.minimum.toString()} ${z.unit}`;
        return `För lite(t): förväntade ${Q.origin ?? "värdet"} att ha ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Ogiltig sträng: måste börja med "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Ogiltig sträng: måste sluta med "${W.suffix}"`;
        if (W.format === "includes")
          return `Ogiltig sträng: måste innehålla "${W.includes}"`;
        if (W.format === "regex")
          return `Ogiltig sträng: måste matcha mönstret "${W.pattern}"`;
        return `Ogiltig(t) ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: måste vara en multipel av ${Q.divisor}`;
      case "unrecognized_keys":
        return `${Q.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${Q.origin ?? "värdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt värde i ${Q.origin ?? "värdet"}`;
      default:
        return "Ogiltig input";
    }
  };
};
function g3() {
  return { localeError: NC() };
}
var VC = () => {
  let $ = {
    string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
    file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
    array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
    set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "எண் அல்லாதது" : "எண்";
        case "object": {
          if (Array.isArray(Q)) return "அணி";
          if (Q === null) return "வெறுமை";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "உள்ளீடு",
      email: "மின்னஞ்சல் முகவரி",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO தேதி நேரம்",
      date: "ISO தேதி",
      time: "ISO நேரம்",
      duration: "ISO கால அளவு",
      ipv4: "IPv4 முகவரி",
      ipv6: "IPv6 முகவரி",
      cidrv4: "IPv4 வரம்பு",
      cidrv6: "IPv6 வரம்பு",
      base64: "base64-encoded சரம்",
      base64url: "base64url-encoded சரம்",
      json_string: "JSON சரம்",
      e164: "E.164 எண்",
      jwt: "JWT",
      template_literal: "input",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${Q.expected}, பெறப்பட்டது ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${v(Q.values[0])}`;
        return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${A(Q.values, "|")} இல் ஒன்று`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${Q.origin ?? "மதிப்பு"} ${W}${Q.maximum.toString()} ${z.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`;
        return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${Q.origin ?? "மதிப்பு"} ${W}${Q.maximum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${Q.origin} ${W}${Q.minimum.toString()} ${z.unit} ஆக இருக்க வேண்டும்`;
        return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${Q.origin} ${W}${Q.minimum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `தவறான சரம்: "${W.prefix}" இல் தொடங்க வேண்டும்`;
        if (W.format === "ends_with")
          return `தவறான சரம்: "${W.suffix}" இல் முடிவடைய வேண்டும்`;
        if (W.format === "includes")
          return `தவறான சரம்: "${W.includes}" ஐ உள்ளடக்க வேண்டும்`;
        if (W.format === "regex")
          return `தவறான சரம்: ${W.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
        return `தவறான ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `தவறான எண்: ${Q.divisor} இன் பலமாக இருக்க வேண்டும்`;
      case "unrecognized_keys":
        return `அடையாளம் தெரியாத விசை${Q.keys.length > 1 ? "கள்" : ""}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `${Q.origin} இல் தவறான விசை`;
      case "invalid_union":
        return "தவறான உள்ளீடு";
      case "invalid_element":
        return `${Q.origin} இல் தவறான மதிப்பு`;
      default:
        return "தவறான உள்ளீடு";
    }
  };
};
function h3() {
  return { localeError: VC() };
}
var OC = () => {
  let $ = {
    string: { unit: "ตัวอักษร", verb: "ควรมี" },
    file: { unit: "ไบต์", verb: "ควรมี" },
    array: { unit: "รายการ", verb: "ควรมี" },
    set: { unit: "รายการ", verb: "ควรมี" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "ไม่ใช่ตัวเลข (NaN)" : "ตัวเลข";
        case "object": {
          if (Array.isArray(Q)) return "อาร์เรย์ (Array)";
          if (Q === null) return "ไม่มีค่า (null)";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "ข้อมูลที่ป้อน",
      email: "ที่อยู่อีเมล",
      url: "URL",
      emoji: "อิโมจิ",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "วันที่เวลาแบบ ISO",
      date: "วันที่แบบ ISO",
      time: "เวลาแบบ ISO",
      duration: "ช่วงเวลาแบบ ISO",
      ipv4: "ที่อยู่ IPv4",
      ipv6: "ที่อยู่ IPv6",
      cidrv4: "ช่วง IP แบบ IPv4",
      cidrv6: "ช่วง IP แบบ IPv6",
      base64: "ข้อความแบบ Base64",
      base64url: "ข้อความแบบ Base64 สำหรับ URL",
      json_string: "ข้อความแบบ JSON",
      e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
      jwt: "โทเคน JWT",
      template_literal: "ข้อมูลที่ป้อน",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${Q.expected} แต่ได้รับ ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `ค่าไม่ถูกต้อง: ควรเป็น ${v(Q.values[0])}`;
        return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "ไม่เกิน" : "น้อยกว่า",
          z = X(Q.origin);
        if (z)
          return `เกินกำหนด: ${Q.origin ?? "ค่า"} ควรมี${W} ${Q.maximum.toString()} ${z.unit ?? "รายการ"}`;
        return `เกินกำหนด: ${Q.origin ?? "ค่า"} ควรมี${W} ${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? "อย่างน้อย" : "มากกว่า",
          z = X(Q.origin);
        if (z)
          return `น้อยกว่ากำหนด: ${Q.origin} ควรมี${W} ${Q.minimum.toString()} ${z.unit}`;
        return `น้อยกว่ากำหนด: ${Q.origin} ควรมี${W} ${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${W.prefix}"`;
        if (W.format === "ends_with")
          return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${W.suffix}"`;
        if (W.format === "includes")
          return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${W.includes}" อยู่ในข้อความ`;
        if (W.format === "regex")
          return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${W.pattern}`;
        return `รูปแบบไม่ถูกต้อง: ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${Q.divisor} ได้ลงตัว`;
      case "unrecognized_keys":
        return `พบคีย์ที่ไม่รู้จัก: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `คีย์ไม่ถูกต้องใน ${Q.origin}`;
      case "invalid_union":
        return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
      case "invalid_element":
        return `ข้อมูลไม่ถูกต้องใน ${Q.origin}`;
      default:
        return "ข้อมูลไม่ถูกต้อง";
    }
  };
};
function u3() {
  return { localeError: OC() };
}
var wC = ($) => {
    let X = typeof $;
    switch (X) {
      case "number":
        return Number.isNaN($) ? "NaN" : "number";
      case "object": {
        if (Array.isArray($)) return "array";
        if ($ === null) return "null";
        if (Object.getPrototypeOf($) !== Object.prototype && $.constructor)
          return $.constructor.name;
      }
    }
    return X;
  },
  BC = () => {
    let $ = {
      string: { unit: "karakter", verb: "olmalı" },
      file: { unit: "bayt", verb: "olmalı" },
      array: { unit: "öğe", verb: "olmalı" },
      set: { unit: "öğe", verb: "olmalı" },
    };
    function X(Y) {
      return $[Y] ?? null;
    }
    let J = {
      regex: "girdi",
      email: "e-posta adresi",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO tarih ve saat",
      date: "ISO tarih",
      time: "ISO saat",
      duration: "ISO süre",
      ipv4: "IPv4 adresi",
      ipv6: "IPv6 adresi",
      cidrv4: "IPv4 aralığı",
      cidrv6: "IPv6 aralığı",
      base64: "base64 ile şifrelenmiş metin",
      base64url: "base64url ile şifrelenmiş metin",
      json_string: "JSON dizesi",
      e164: "E.164 sayısı",
      jwt: "JWT",
      template_literal: "Şablon dizesi",
    };
    return (Y) => {
      switch (Y.code) {
        case "invalid_type":
          return `Geçersiz değer: beklenen ${Y.expected}, alınan ${wC(Y.input)}`;
        case "invalid_value":
          if (Y.values.length === 1)
            return `Geçersiz değer: beklenen ${v(Y.values[0])}`;
          return `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${A(Y.values, "|")}`;
        case "too_big": {
          let Q = Y.inclusive ? "<=" : "<",
            W = X(Y.origin);
          if (W)
            return `Çok büyük: beklenen ${Y.origin ?? "değer"} ${Q}${Y.maximum.toString()} ${W.unit ?? "öğe"}`;
          return `Çok büyük: beklenen ${Y.origin ?? "değer"} ${Q}${Y.maximum.toString()}`;
        }
        case "too_small": {
          let Q = Y.inclusive ? ">=" : ">",
            W = X(Y.origin);
          if (W)
            return `Çok küçük: beklenen ${Y.origin} ${Q}${Y.minimum.toString()} ${W.unit}`;
          return `Çok küçük: beklenen ${Y.origin} ${Q}${Y.minimum.toString()}`;
        }
        case "invalid_format": {
          let Q = Y;
          if (Q.format === "starts_with")
            return `Geçersiz metin: "${Q.prefix}" ile başlamalı`;
          if (Q.format === "ends_with")
            return `Geçersiz metin: "${Q.suffix}" ile bitmeli`;
          if (Q.format === "includes")
            return `Geçersiz metin: "${Q.includes}" içermeli`;
          if (Q.format === "regex")
            return `Geçersiz metin: ${Q.pattern} desenine uymalı`;
          return `Geçersiz ${J[Q.format] ?? Y.format}`;
        }
        case "not_multiple_of":
          return `Geçersiz sayı: ${Y.divisor} ile tam bölünebilmeli`;
        case "unrecognized_keys":
          return `Tanınmayan anahtar${Y.keys.length > 1 ? "lar" : ""}: ${A(Y.keys, ", ")}`;
        case "invalid_key":
          return `${Y.origin} içinde geçersiz anahtar`;
        case "invalid_union":
          return "Geçersiz değer";
        case "invalid_element":
          return `${Y.origin} içinde geçersiz değer`;
        default:
          return "Geçersiz değer";
      }
    };
  };
function m3() {
  return { localeError: BC() };
}
var qC = () => {
  let $ = {
    string: { unit: "символів", verb: "матиме" },
    file: { unit: "байтів", verb: "матиме" },
    array: { unit: "елементів", verb: "матиме" },
    set: { unit: "елементів", verb: "матиме" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "число";
        case "object": {
          if (Array.isArray(Q)) return "масив";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "вхідні дані",
      email: "адреса електронної пошти",
      url: "URL",
      emoji: "емодзі",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "дата та час ISO",
      date: "дата ISO",
      time: "час ISO",
      duration: "тривалість ISO",
      ipv4: "адреса IPv4",
      ipv6: "адреса IPv6",
      cidrv4: "діапазон IPv4",
      cidrv6: "діапазон IPv6",
      base64: "рядок у кодуванні base64",
      base64url: "рядок у кодуванні base64url",
      json_string: "рядок JSON",
      e164: "номер E.164",
      jwt: "JWT",
      template_literal: "вхідні дані",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Неправильні вхідні дані: очікується ${Q.expected}, отримано ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Неправильні вхідні дані: очікується ${v(Q.values[0])}`;
        return `Неправильна опція: очікується одне з ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Занадто велике: очікується, що ${Q.origin ?? "значення"} ${z.verb} ${W}${Q.maximum.toString()} ${z.unit ?? "елементів"}`;
        return `Занадто велике: очікується, що ${Q.origin ?? "значення"} буде ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Занадто мале: очікується, що ${Q.origin} ${z.verb} ${W}${Q.minimum.toString()} ${z.unit}`;
        return `Занадто мале: очікується, що ${Q.origin} буде ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Неправильний рядок: повинен починатися з "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Неправильний рядок: повинен закінчуватися на "${W.suffix}"`;
        if (W.format === "includes")
          return `Неправильний рядок: повинен містити "${W.includes}"`;
        if (W.format === "regex")
          return `Неправильний рядок: повинен відповідати шаблону ${W.pattern}`;
        return `Неправильний ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `Неправильне число: повинно бути кратним ${Q.divisor}`;
      case "unrecognized_keys":
        return `Нерозпізнаний ключ${Q.keys.length > 1 ? "і" : ""}: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Неправильний ключ у ${Q.origin}`;
      case "invalid_union":
        return "Неправильні вхідні дані";
      case "invalid_element":
        return `Неправильне значення у ${Q.origin}`;
      default:
        return "Неправильні вхідні дані";
    }
  };
};
function l3() {
  return { localeError: qC() };
}
var DC = () => {
  let $ = {
    string: { unit: "حروف", verb: "ہونا" },
    file: { unit: "بائٹس", verb: "ہونا" },
    array: { unit: "آئٹمز", verb: "ہونا" },
    set: { unit: "آئٹمز", verb: "ہونا" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "نمبر";
        case "object": {
          if (Array.isArray(Q)) return "آرے";
          if (Q === null) return "نل";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "ان پٹ",
      email: "ای میل ایڈریس",
      url: "یو آر ایل",
      emoji: "ایموجی",
      uuid: "یو یو آئی ڈی",
      uuidv4: "یو یو آئی ڈی وی 4",
      uuidv6: "یو یو آئی ڈی وی 6",
      nanoid: "نینو آئی ڈی",
      guid: "جی یو آئی ڈی",
      cuid: "سی یو آئی ڈی",
      cuid2: "سی یو آئی ڈی 2",
      ulid: "یو ایل آئی ڈی",
      xid: "ایکس آئی ڈی",
      ksuid: "کے ایس یو آئی ڈی",
      datetime: "آئی ایس او ڈیٹ ٹائم",
      date: "آئی ایس او تاریخ",
      time: "آئی ایس او وقت",
      duration: "آئی ایس او مدت",
      ipv4: "آئی پی وی 4 ایڈریس",
      ipv6: "آئی پی وی 6 ایڈریس",
      cidrv4: "آئی پی وی 4 رینج",
      cidrv6: "آئی پی وی 6 رینج",
      base64: "بیس 64 ان کوڈڈ سٹرنگ",
      base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
      json_string: "جے ایس او این سٹرنگ",
      e164: "ای 164 نمبر",
      jwt: "جے ڈبلیو ٹی",
      template_literal: "ان پٹ",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `غلط ان پٹ: ${Q.expected} متوقع تھا، ${J(Q.input)} موصول ہوا`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `غلط ان پٹ: ${v(Q.values[0])} متوقع تھا`;
        return `غلط آپشن: ${A(Q.values, "|")} میں سے ایک متوقع تھا`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `بہت بڑا: ${Q.origin ?? "ویلیو"} کے ${W}${Q.maximum.toString()} ${z.unit ?? "عناصر"} ہونے متوقع تھے`;
        return `بہت بڑا: ${Q.origin ?? "ویلیو"} کا ${W}${Q.maximum.toString()} ہونا متوقع تھا`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `بہت چھوٹا: ${Q.origin} کے ${W}${Q.minimum.toString()} ${z.unit} ہونے متوقع تھے`;
        return `بہت چھوٹا: ${Q.origin} کا ${W}${Q.minimum.toString()} ہونا متوقع تھا`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `غلط سٹرنگ: "${W.prefix}" سے شروع ہونا چاہیے`;
        if (W.format === "ends_with")
          return `غلط سٹرنگ: "${W.suffix}" پر ختم ہونا چاہیے`;
        if (W.format === "includes")
          return `غلط سٹرنگ: "${W.includes}" شامل ہونا چاہیے`;
        if (W.format === "regex")
          return `غلط سٹرنگ: پیٹرن ${W.pattern} سے میچ ہونا چاہیے`;
        return `غلط ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `غلط نمبر: ${Q.divisor} کا مضاعف ہونا چاہیے`;
      case "unrecognized_keys":
        return `غیر تسلیم شدہ کی${Q.keys.length > 1 ? "ز" : ""}: ${A(Q.keys, "، ")}`;
      case "invalid_key":
        return `${Q.origin} میں غلط کی`;
      case "invalid_union":
        return "غلط ان پٹ";
      case "invalid_element":
        return `${Q.origin} میں غلط ویلیو`;
      default:
        return "غلط ان پٹ";
    }
  };
};
function c3() {
  return { localeError: DC() };
}
var FC = () => {
  let $ = {
    string: { unit: "ký tự", verb: "có" },
    file: { unit: "byte", verb: "có" },
    array: { unit: "phần tử", verb: "có" },
    set: { unit: "phần tử", verb: "có" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "số";
        case "object": {
          if (Array.isArray(Q)) return "mảng";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "đầu vào",
      email: "địa chỉ email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ngày giờ ISO",
      date: "ngày ISO",
      time: "giờ ISO",
      duration: "khoảng thời gian ISO",
      ipv4: "địa chỉ IPv4",
      ipv6: "địa chỉ IPv6",
      cidrv4: "dải IPv4",
      cidrv6: "dải IPv6",
      base64: "chuỗi mã hóa base64",
      base64url: "chuỗi mã hóa base64url",
      json_string: "chuỗi JSON",
      e164: "số E.164",
      jwt: "JWT",
      template_literal: "đầu vào",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `Đầu vào không hợp lệ: mong đợi ${Q.expected}, nhận được ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `Đầu vào không hợp lệ: mong đợi ${v(Q.values[0])}`;
        return `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Quá lớn: mong đợi ${Q.origin ?? "giá trị"} ${z.verb} ${W}${Q.maximum.toString()} ${z.unit ?? "phần tử"}`;
        return `Quá lớn: mong đợi ${Q.origin ?? "giá trị"} ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Quá nhỏ: mong đợi ${Q.origin} ${z.verb} ${W}${Q.minimum.toString()} ${z.unit}`;
        return `Quá nhỏ: mong đợi ${Q.origin} ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `Chuỗi không hợp lệ: phải bắt đầu bằng "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Chuỗi không hợp lệ: phải kết thúc bằng "${W.suffix}"`;
        if (W.format === "includes")
          return `Chuỗi không hợp lệ: phải bao gồm "${W.includes}"`;
        if (W.format === "regex")
          return `Chuỗi không hợp lệ: phải khớp với mẫu ${W.pattern}`;
        return `${Y[W.format] ?? Q.format} không hợp lệ`;
      }
      case "not_multiple_of":
        return `Số không hợp lệ: phải là bội số của ${Q.divisor}`;
      case "unrecognized_keys":
        return `Khóa không được nhận dạng: ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `Khóa không hợp lệ trong ${Q.origin}`;
      case "invalid_union":
        return "Đầu vào không hợp lệ";
      case "invalid_element":
        return `Giá trị không hợp lệ trong ${Q.origin}`;
      default:
        return "Đầu vào không hợp lệ";
    }
  };
};
function d3() {
  return { localeError: FC() };
}
var jC = () => {
  let $ = {
    string: { unit: "字符", verb: "包含" },
    file: { unit: "字节", verb: "包含" },
    array: { unit: "项", verb: "包含" },
    set: { unit: "项", verb: "包含" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "非数字(NaN)" : "数字";
        case "object": {
          if (Array.isArray(Q)) return "数组";
          if (Q === null) return "空值(null)";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "输入",
      email: "电子邮件",
      url: "URL",
      emoji: "表情符号",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO日期时间",
      date: "ISO日期",
      time: "ISO时间",
      duration: "ISO时长",
      ipv4: "IPv4地址",
      ipv6: "IPv6地址",
      cidrv4: "IPv4网段",
      cidrv6: "IPv6网段",
      base64: "base64编码字符串",
      base64url: "base64url编码字符串",
      json_string: "JSON字符串",
      e164: "E.164号码",
      jwt: "JWT",
      template_literal: "输入",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `无效输入：期望 ${Q.expected}，实际接收 ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1) return `无效输入：期望 ${v(Q.values[0])}`;
        return `无效选项：期望以下之一 ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `数值过大：期望 ${Q.origin ?? "值"} ${W}${Q.maximum.toString()} ${z.unit ?? "个元素"}`;
        return `数值过大：期望 ${Q.origin ?? "值"} ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `数值过小：期望 ${Q.origin} ${W}${Q.minimum.toString()} ${z.unit}`;
        return `数值过小：期望 ${Q.origin} ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `无效字符串：必须以 "${W.prefix}" 开头`;
        if (W.format === "ends_with")
          return `无效字符串：必须以 "${W.suffix}" 结尾`;
        if (W.format === "includes")
          return `无效字符串：必须包含 "${W.includes}"`;
        if (W.format === "regex")
          return `无效字符串：必须满足正则表达式 ${W.pattern}`;
        return `无效${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `无效数字：必须是 ${Q.divisor} 的倍数`;
      case "unrecognized_keys":
        return `出现未知的键(key): ${A(Q.keys, ", ")}`;
      case "invalid_key":
        return `${Q.origin} 中的键(key)无效`;
      case "invalid_union":
        return "无效输入";
      case "invalid_element":
        return `${Q.origin} 中包含无效值(value)`;
      default:
        return "无效输入";
    }
  };
};
function p3() {
  return { localeError: jC() };
}
var LC = () => {
  let $ = {
    string: { unit: "字元", verb: "擁有" },
    file: { unit: "位元組", verb: "擁有" },
    array: { unit: "項目", verb: "擁有" },
    set: { unit: "項目", verb: "擁有" },
  };
  function X(Q) {
    return $[Q] ?? null;
  }
  let J = (Q) => {
      let W = typeof Q;
      switch (W) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return W;
    },
    Y = {
      regex: "輸入",
      email: "郵件地址",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO 日期時間",
      date: "ISO 日期",
      time: "ISO 時間",
      duration: "ISO 期間",
      ipv4: "IPv4 位址",
      ipv6: "IPv6 位址",
      cidrv4: "IPv4 範圍",
      cidrv6: "IPv6 範圍",
      base64: "base64 編碼字串",
      base64url: "base64url 編碼字串",
      json_string: "JSON 字串",
      e164: "E.164 數值",
      jwt: "JWT",
      template_literal: "輸入",
    };
  return (Q) => {
    switch (Q.code) {
      case "invalid_type":
        return `無效的輸入值：預期為 ${Q.expected}，但收到 ${J(Q.input)}`;
      case "invalid_value":
        if (Q.values.length === 1)
          return `無效的輸入值：預期為 ${v(Q.values[0])}`;
        return `無效的選項：預期為以下其中之一 ${A(Q.values, "|")}`;
      case "too_big": {
        let W = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `數值過大：預期 ${Q.origin ?? "值"} 應為 ${W}${Q.maximum.toString()} ${z.unit ?? "個元素"}`;
        return `數值過大：預期 ${Q.origin ?? "值"} 應為 ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `數值過小：預期 ${Q.origin} 應為 ${W}${Q.minimum.toString()} ${z.unit}`;
        return `數值過小：預期 ${Q.origin} 應為 ${W}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Q;
        if (W.format === "starts_with")
          return `無效的字串：必須以 "${W.prefix}" 開頭`;
        if (W.format === "ends_with")
          return `無效的字串：必須以 "${W.suffix}" 結尾`;
        if (W.format === "includes")
          return `無效的字串：必須包含 "${W.includes}"`;
        if (W.format === "regex")
          return `無效的字串：必須符合格式 ${W.pattern}`;
        return `無效的 ${Y[W.format] ?? Q.format}`;
      }
      case "not_multiple_of":
        return `無效的數字：必須為 ${Q.divisor} 的倍數`;
      case "unrecognized_keys":
        return `無法識別的鍵值${Q.keys.length > 1 ? "們" : ""}：${A(Q.keys, "、")}`;
      case "invalid_key":
        return `${Q.origin} 中有無效的鍵值`;
      case "invalid_union":
        return "無效的輸入值";
      case "invalid_element":
        return `${Q.origin} 中有無效的值`;
      default:
        return "無效的輸入值";
    }
  };
};
function i3() {
  return { localeError: LC() };
}
var pQ = Symbol("ZodOutput"),
  iQ = Symbol("ZodInput");
class JX {
  constructor() {
    ((this._map = new WeakMap()), (this._idmap = new Map()));
  }
  add($, ...X) {
    let J = X[0];
    if ((this._map.set($, J), J && typeof J === "object" && "id" in J)) {
      if (this._idmap.has(J.id))
        throw Error(`ID ${J.id} already exists in the registry`);
      this._idmap.set(J.id, $);
    }
    return this;
  }
  remove($) {
    return (this._map.delete($), this);
  }
  get($) {
    let X = $._zod.parent;
    if (X) {
      let J = { ...(this.get(X) ?? {}) };
      return (delete J.id, { ...J, ...this._map.get($) });
    }
    return this._map.get($);
  }
  has($) {
    return this._map.has($);
  }
}
function QX() {
  return new JX();
}
var z6 = QX();
function nQ($, X) {
  return new $({ type: "string", ...P(X) });
}
function n3($, X) {
  return new $({ type: "string", coerce: !0, ...P(X) });
}
function YX($, X) {
  return new $({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function i0($, X) {
  return new $({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function WX($, X) {
  return new $({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function zX($, X) {
  return new $({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...P(X),
  });
}
function GX($, X) {
  return new $({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...P(X),
  });
}
function UX($, X) {
  return new $({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...P(X),
  });
}
function HX($, X) {
  return new $({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function KX($, X) {
  return new $({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function NX($, X) {
  return new $({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function VX($, X) {
  return new $({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function OX($, X) {
  return new $({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function wX($, X) {
  return new $({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function BX($, X) {
  return new $({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function qX($, X) {
  return new $({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function DX($, X) {
  return new $({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function FX($, X) {
  return new $({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function jX($, X) {
  return new $({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function LX($, X) {
  return new $({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function MX($, X) {
  return new $({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function AX($, X) {
  return new $({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function IX($, X) {
  return new $({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function ZX($, X) {
  return new $({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
var rQ = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
function r3($, X) {
  return new $({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...P(X),
  });
}
function o3($, X) {
  return new $({
    type: "string",
    format: "date",
    check: "string_format",
    ...P(X),
  });
}
function t3($, X) {
  return new $({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...P(X),
  });
}
function a3($, X) {
  return new $({
    type: "string",
    format: "duration",
    check: "string_format",
    ...P(X),
  });
}
function oQ($, X) {
  return new $({ type: "number", checks: [], ...P(X) });
}
function s3($, X) {
  return new $({ type: "number", coerce: !0, checks: [], ...P(X) });
}
function tQ($, X) {
  return new $({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...P(X),
  });
}
function aQ($, X) {
  return new $({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...P(X),
  });
}
function sQ($, X) {
  return new $({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...P(X),
  });
}
function eQ($, X) {
  return new $({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...P(X),
  });
}
function $5($, X) {
  return new $({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...P(X),
  });
}
function X5($, X) {
  return new $({ type: "boolean", ...P(X) });
}
function e3($, X) {
  return new $({ type: "boolean", coerce: !0, ...P(X) });
}
function J5($, X) {
  return new $({ type: "bigint", ...P(X) });
}
function $U($, X) {
  return new $({ type: "bigint", coerce: !0, ...P(X) });
}
function Q5($, X) {
  return new $({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...P(X),
  });
}
function Y5($, X) {
  return new $({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...P(X),
  });
}
function W5($, X) {
  return new $({ type: "symbol", ...P(X) });
}
function z5($, X) {
  return new $({ type: "undefined", ...P(X) });
}
function G5($, X) {
  return new $({ type: "null", ...P(X) });
}
function U5($) {
  return new $({ type: "any" });
}
function l1($) {
  return new $({ type: "unknown" });
}
function H5($, X) {
  return new $({ type: "never", ...P(X) });
}
function K5($, X) {
  return new $({ type: "void", ...P(X) });
}
function N5($, X) {
  return new $({ type: "date", ...P(X) });
}
function XU($, X) {
  return new $({ type: "date", coerce: !0, ...P(X) });
}
function V5($, X) {
  return new $({ type: "nan", ...P(X) });
}
function Z4($, X) {
  return new d7({ check: "less_than", ...P(X), value: $, inclusive: !1 });
}
function R6($, X) {
  return new d7({ check: "less_than", ...P(X), value: $, inclusive: !0 });
}
function b4($, X) {
  return new p7({ check: "greater_than", ...P(X), value: $, inclusive: !1 });
}
function G6($, X) {
  return new p7({ check: "greater_than", ...P(X), value: $, inclusive: !0 });
}
function JU($) {
  return b4(0, $);
}
function QU($) {
  return Z4(0, $);
}
function YU($) {
  return R6(0, $);
}
function WU($) {
  return G6(0, $);
}
function c1($, X) {
  return new gG({ check: "multiple_of", ...P(X), value: $ });
}
function n0($, X) {
  return new mG({ check: "max_size", ...P(X), maximum: $ });
}
function d1($, X) {
  return new lG({ check: "min_size", ...P(X), minimum: $ });
}
function bX($, X) {
  return new cG({ check: "size_equals", ...P(X), size: $ });
}
function r0($, X) {
  return new dG({ check: "max_length", ...P(X), maximum: $ });
}
function X1($, X) {
  return new pG({ check: "min_length", ...P(X), minimum: $ });
}
function o0($, X) {
  return new iG({ check: "length_equals", ...P(X), length: $ });
}
function RX($, X) {
  return new nG({
    check: "string_format",
    format: "regex",
    ...P(X),
    pattern: $,
  });
}
function PX($) {
  return new rG({ check: "string_format", format: "lowercase", ...P($) });
}
function EX($) {
  return new oG({ check: "string_format", format: "uppercase", ...P($) });
}
function SX($, X) {
  return new tG({
    check: "string_format",
    format: "includes",
    ...P(X),
    includes: $,
  });
}
function vX($, X) {
  return new aG({
    check: "string_format",
    format: "starts_with",
    ...P(X),
    prefix: $,
  });
}
function CX($, X) {
  return new sG({
    check: "string_format",
    format: "ends_with",
    ...P(X),
    suffix: $,
  });
}
function zU($, X, J) {
  return new eG({ check: "property", property: $, schema: X, ...P(J) });
}
function kX($, X) {
  return new $3({ check: "mime_type", mime: $, ...P(X) });
}
function R4($) {
  return new X3({ check: "overwrite", tx: $ });
}
function _X($) {
  return R4((X) => X.normalize($));
}
function xX() {
  return R4(($) => $.trim());
}
function TX() {
  return R4(($) => $.toLowerCase());
}
function fX() {
  return R4(($) => $.toUpperCase());
}
function yX($, X, J) {
  return new $({ type: "array", element: X, ...P(J) });
}
function MC($, X, J) {
  return new $({ type: "union", options: X, ...P(J) });
}
function AC($, X, J, Y) {
  return new $({ type: "union", options: J, discriminator: X, ...P(Y) });
}
function IC($, X, J) {
  return new $({ type: "intersection", left: X, right: J });
}
function GU($, X, J, Y) {
  let Q = J instanceof p;
  return new $({
    type: "tuple",
    items: X,
    rest: Q ? J : null,
    ...P(Q ? Y : J),
  });
}
function ZC($, X, J, Y) {
  return new $({ type: "record", keyType: X, valueType: J, ...P(Y) });
}
function bC($, X, J, Y) {
  return new $({ type: "map", keyType: X, valueType: J, ...P(Y) });
}
function RC($, X, J) {
  return new $({ type: "set", valueType: X, ...P(J) });
}
function PC($, X, J) {
  let Y = Array.isArray(X) ? Object.fromEntries(X.map((Q) => [Q, Q])) : X;
  return new $({ type: "enum", entries: Y, ...P(J) });
}
function EC($, X, J) {
  return new $({ type: "enum", entries: X, ...P(J) });
}
function SC($, X, J) {
  return new $({
    type: "literal",
    values: Array.isArray(X) ? X : [X],
    ...P(J),
  });
}
function O5($, X) {
  return new $({ type: "file", ...P(X) });
}
function vC($, X) {
  return new $({ type: "transform", transform: X });
}
function CC($, X) {
  return new $({ type: "optional", innerType: X });
}
function kC($, X) {
  return new $({ type: "nullable", innerType: X });
}
function _C($, X, J) {
  return new $({
    type: "default",
    innerType: X,
    get defaultValue() {
      return typeof J === "function" ? J() : J;
    },
  });
}
function xC($, X, J) {
  return new $({ type: "nonoptional", innerType: X, ...P(J) });
}
function TC($, X) {
  return new $({ type: "success", innerType: X });
}
function fC($, X, J) {
  return new $({
    type: "catch",
    innerType: X,
    catchValue: typeof J === "function" ? J : () => J,
  });
}
function yC($, X, J) {
  return new $({ type: "pipe", in: X, out: J });
}
function gC($, X) {
  return new $({ type: "readonly", innerType: X });
}
function hC($, X, J) {
  return new $({ type: "template_literal", parts: X, ...P(J) });
}
function uC($, X) {
  return new $({ type: "lazy", getter: X });
}
function mC($, X) {
  return new $({ type: "promise", innerType: X });
}
function w5($, X, J) {
  let Y = P(J);
  return (
    Y.abort ?? (Y.abort = !0),
    new $({ type: "custom", check: "custom", fn: X, ...Y })
  );
}
function B5($, X, J) {
  return new $({ type: "custom", check: "custom", fn: X, ...P(J) });
}
function q5($, X) {
  let J = P(X),
    Y = J.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
    Q = J.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  if (J.case !== "sensitive")
    ((Y = Y.map((w) => (typeof w === "string" ? w.toLowerCase() : w))),
      (Q = Q.map((w) => (typeof w === "string" ? w.toLowerCase() : w))));
  let W = new Set(Y),
    z = new Set(Q),
    G = $.Pipe ?? d0,
    U = $.Boolean ?? m0,
    H = $.String ?? e4,
    N = new ($.Transform ?? c0)({
      type: "transform",
      transform: (w, B) => {
        let F = w;
        if (J.case !== "sensitive") F = F.toLowerCase();
        if (W.has(F)) return !0;
        else if (z.has(F)) return !1;
        else
          return (
            B.issues.push({
              code: "invalid_value",
              expected: "stringbool",
              values: [...W, ...z],
              input: B.value,
              inst: N,
            }),
            {}
          );
      },
      error: J.error,
    }),
    V = new G({
      type: "pipe",
      in: new H({ type: "string", error: J.error }),
      out: N,
      error: J.error,
    });
  return new G({
    type: "pipe",
    in: V,
    out: new U({ type: "boolean", error: J.error }),
    error: J.error,
  });
}
function D5($, X, J, Y = {}) {
  let Q = P(Y),
    W = {
      ...P(Y),
      check: "string_format",
      type: "string",
      format: X,
      fn: typeof J === "function" ? J : (G) => J.test(G),
      ...Q,
    };
  if (J instanceof RegExp) W.pattern = J;
  return new $(W);
}
class UU {
  constructor($) {
    ((this._def = $), (this.def = $));
  }
  implement($) {
    if (typeof $ !== "function")
      throw Error("implement() must be called with a function");
    let X = (...J) => {
      let Y = this._def.input
        ? g1(this._def.input, J, void 0, { callee: X })
        : J;
      if (!Array.isArray(Y))
        throw Error("Invalid arguments schema: not an array or tuple schema.");
      let Q = $(...Y);
      return this._def.output
        ? g1(this._def.output, Q, void 0, { callee: X })
        : Q;
    };
    return X;
  }
  implementAsync($) {
    if (typeof $ !== "function")
      throw Error("implement() must be called with a function");
    let X = async (...J) => {
      let Y = this._def.input
        ? await h1(this._def.input, J, void 0, { callee: X })
        : J;
      if (!Array.isArray(Y))
        throw Error("Invalid arguments schema: not an array or tuple schema.");
      let Q = await $(...Y);
      return this._def.output
        ? h1(this._def.output, Q, void 0, { callee: X })
        : Q;
    };
    return X;
  }
  input(...$) {
    let X = this.constructor;
    if (Array.isArray($[0]))
      return new X({
        type: "function",
        input: new $1({ type: "tuple", items: $[0], rest: $[1] }),
        output: this._def.output,
      });
    return new X({ type: "function", input: $[0], output: this._def.output });
  }
  output($) {
    return new this.constructor({
      type: "function",
      input: this._def.input,
      output: $,
    });
  }
}
function F5($) {
  return new UU({
    type: "function",
    input: Array.isArray($?.input)
      ? GU($1, $?.input)
      : ($?.input ?? yX(l0, l1(m1))),
    output: $?.output ?? l1(m1),
  });
}
class j5 {
  constructor($) {
    ((this.counter = 0),
      (this.metadataRegistry = $?.metadata ?? z6),
      (this.target = $?.target ?? "draft-2020-12"),
      (this.unrepresentable = $?.unrepresentable ?? "throw"),
      (this.override = $?.override ?? (() => {})),
      (this.io = $?.io ?? "output"),
      (this.seen = new Map()));
  }
  process($, X = { path: [], schemaPath: [] }) {
    var J;
    let Y = $._zod.def,
      Q = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: "",
      },
      W = this.seen.get($);
    if (W) {
      if ((W.count++, X.schemaPath.includes($))) W.cycle = X.path;
      return W.schema;
    }
    let z = { schema: {}, count: 1, cycle: void 0, path: X.path };
    this.seen.set($, z);
    let G = $._zod.toJSONSchema?.();
    if (G) z.schema = G;
    else {
      let K = { ...X, schemaPath: [...X.schemaPath, $], path: X.path },
        N = $._zod.parent;
      if (N)
        ((z.ref = N), this.process(N, K), (this.seen.get(N).isParent = !0));
      else {
        let V = z.schema;
        switch (Y.type) {
          case "string": {
            let O = V;
            O.type = "string";
            let {
              minimum: w,
              maximum: B,
              format: F,
              patterns: j,
              contentEncoding: I,
            } = $._zod.bag;
            if (typeof w === "number") O.minLength = w;
            if (typeof B === "number") O.maxLength = B;
            if (F) {
              if (((O.format = Q[F] ?? F), O.format === "")) delete O.format;
            }
            if (I) O.contentEncoding = I;
            if (j && j.size > 0) {
              let Z = [...j];
              if (Z.length === 1) O.pattern = Z[0].source;
              else if (Z.length > 1)
                z.schema.allOf = [
                  ...Z.map((_) => ({
                    ...(this.target === "draft-7" ? { type: "string" } : {}),
                    pattern: _.source,
                  })),
                ];
            }
            break;
          }
          case "number": {
            let O = V,
              {
                minimum: w,
                maximum: B,
                format: F,
                multipleOf: j,
                exclusiveMaximum: I,
                exclusiveMinimum: Z,
              } = $._zod.bag;
            if (typeof F === "string" && F.includes("int")) O.type = "integer";
            else O.type = "number";
            if (typeof Z === "number") O.exclusiveMinimum = Z;
            if (typeof w === "number") {
              if (((O.minimum = w), typeof Z === "number"))
                if (Z >= w) delete O.minimum;
                else delete O.exclusiveMinimum;
            }
            if (typeof I === "number") O.exclusiveMaximum = I;
            if (typeof B === "number") {
              if (((O.maximum = B), typeof I === "number"))
                if (I <= B) delete O.maximum;
                else delete O.exclusiveMaximum;
            }
            if (typeof j === "number") O.multipleOf = j;
            break;
          }
          case "boolean": {
            let O = V;
            O.type = "boolean";
            break;
          }
          case "bigint": {
            if (this.unrepresentable === "throw")
              throw Error("BigInt cannot be represented in JSON Schema");
            break;
          }
          case "symbol": {
            if (this.unrepresentable === "throw")
              throw Error("Symbols cannot be represented in JSON Schema");
            break;
          }
          case "null": {
            V.type = "null";
            break;
          }
          case "any":
            break;
          case "unknown":
            break;
          case "undefined":
          case "never": {
            V.not = {};
            break;
          }
          case "void": {
            if (this.unrepresentable === "throw")
              throw Error("Void cannot be represented in JSON Schema");
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            let O = V,
              { minimum: w, maximum: B } = $._zod.bag;
            if (typeof w === "number") O.minItems = w;
            if (typeof B === "number") O.maxItems = B;
            ((O.type = "array"),
              (O.items = this.process(Y.element, {
                ...K,
                path: [...K.path, "items"],
              })));
            break;
          }
          case "object": {
            let O = V;
            ((O.type = "object"), (O.properties = {}));
            let w = Y.shape;
            for (let j in w)
              O.properties[j] = this.process(w[j], {
                ...K,
                path: [...K.path, "properties", j],
              });
            let B = new Set(Object.keys(w)),
              F = new Set(
                [...B].filter((j) => {
                  let I = Y.shape[j]._zod;
                  if (this.io === "input") return I.optin === void 0;
                  else return I.optout === void 0;
                }),
              );
            if (F.size > 0) O.required = Array.from(F);
            if (Y.catchall?._zod.def.type === "never")
              O.additionalProperties = !1;
            else if (!Y.catchall) {
              if (this.io === "output") O.additionalProperties = !1;
            } else if (Y.catchall)
              O.additionalProperties = this.process(Y.catchall, {
                ...K,
                path: [...K.path, "additionalProperties"],
              });
            break;
          }
          case "union": {
            let O = V;
            O.anyOf = Y.options.map((w, B) =>
              this.process(w, { ...K, path: [...K.path, "anyOf", B] }),
            );
            break;
          }
          case "intersection": {
            let O = V,
              w = this.process(Y.left, { ...K, path: [...K.path, "allOf", 0] }),
              B = this.process(Y.right, {
                ...K,
                path: [...K.path, "allOf", 1],
              }),
              F = (I) => "allOf" in I && Object.keys(I).length === 1,
              j = [...(F(w) ? w.allOf : [w]), ...(F(B) ? B.allOf : [B])];
            O.allOf = j;
            break;
          }
          case "tuple": {
            let O = V;
            O.type = "array";
            let w = Y.items.map((j, I) =>
              this.process(j, { ...K, path: [...K.path, "prefixItems", I] }),
            );
            if (this.target === "draft-2020-12") O.prefixItems = w;
            else O.items = w;
            if (Y.rest) {
              let j = this.process(Y.rest, {
                ...K,
                path: [...K.path, "items"],
              });
              if (this.target === "draft-2020-12") O.items = j;
              else O.additionalItems = j;
            }
            if (Y.rest)
              O.items = this.process(Y.rest, {
                ...K,
                path: [...K.path, "items"],
              });
            let { minimum: B, maximum: F } = $._zod.bag;
            if (typeof B === "number") O.minItems = B;
            if (typeof F === "number") O.maxItems = F;
            break;
          }
          case "record": {
            let O = V;
            ((O.type = "object"),
              (O.propertyNames = this.process(Y.keyType, {
                ...K,
                path: [...K.path, "propertyNames"],
              })),
              (O.additionalProperties = this.process(Y.valueType, {
                ...K,
                path: [...K.path, "additionalProperties"],
              })));
            break;
          }
          case "map": {
            if (this.unrepresentable === "throw")
              throw Error("Map cannot be represented in JSON Schema");
            break;
          }
          case "set": {
            if (this.unrepresentable === "throw")
              throw Error("Set cannot be represented in JSON Schema");
            break;
          }
          case "enum": {
            let O = V,
              w = d9(Y.entries);
            if (w.every((B) => typeof B === "number")) O.type = "number";
            if (w.every((B) => typeof B === "string")) O.type = "string";
            O.enum = w;
            break;
          }
          case "literal": {
            let O = V,
              w = [];
            for (let B of Y.values)
              if (B === void 0) {
                if (this.unrepresentable === "throw")
                  throw Error(
                    "Literal `undefined` cannot be represented in JSON Schema",
                  );
              } else if (typeof B === "bigint")
                if (this.unrepresentable === "throw")
                  throw Error(
                    "BigInt literals cannot be represented in JSON Schema",
                  );
                else w.push(Number(B));
              else w.push(B);
            if (w.length === 0);
            else if (w.length === 1) {
              let B = w[0];
              ((O.type = B === null ? "null" : typeof B), (O.const = B));
            } else {
              if (w.every((B) => typeof B === "number")) O.type = "number";
              if (w.every((B) => typeof B === "string")) O.type = "string";
              if (w.every((B) => typeof B === "boolean")) O.type = "string";
              if (w.every((B) => B === null)) O.type = "null";
              O.enum = w;
            }
            break;
          }
          case "file": {
            let O = V,
              w = {
                type: "string",
                format: "binary",
                contentEncoding: "binary",
              },
              { minimum: B, maximum: F, mime: j } = $._zod.bag;
            if (B !== void 0) w.minLength = B;
            if (F !== void 0) w.maxLength = F;
            if (j)
              if (j.length === 1)
                ((w.contentMediaType = j[0]), Object.assign(O, w));
              else
                O.anyOf = j.map((I) => {
                  return { ...w, contentMediaType: I };
                });
            else Object.assign(O, w);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            let O = this.process(Y.innerType, K);
            V.anyOf = [O, { type: "null" }];
            break;
          }
          case "nonoptional": {
            (this.process(Y.innerType, K), (z.ref = Y.innerType));
            break;
          }
          case "success": {
            let O = V;
            O.type = "boolean";
            break;
          }
          case "default": {
            (this.process(Y.innerType, K),
              (z.ref = Y.innerType),
              (V.default = JSON.parse(JSON.stringify(Y.defaultValue))));
            break;
          }
          case "prefault": {
            if (
              (this.process(Y.innerType, K),
              (z.ref = Y.innerType),
              this.io === "input")
            )
              V._prefault = JSON.parse(JSON.stringify(Y.defaultValue));
            break;
          }
          case "catch": {
            (this.process(Y.innerType, K), (z.ref = Y.innerType));
            let O;
            try {
              O = Y.catchValue(void 0);
            } catch {
              throw Error(
                "Dynamic catch values are not supported in JSON Schema",
              );
            }
            V.default = O;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            let O = V,
              w = $._zod.pattern;
            if (!w) throw Error("Pattern not found in template literal");
            ((O.type = "string"), (O.pattern = w.source));
            break;
          }
          case "pipe": {
            let O =
              this.io === "input"
                ? Y.in._zod.def.type === "transform"
                  ? Y.out
                  : Y.in
                : Y.out;
            (this.process(O, K), (z.ref = O));
            break;
          }
          case "readonly": {
            (this.process(Y.innerType, K),
              (z.ref = Y.innerType),
              (V.readOnly = !0));
            break;
          }
          case "promise": {
            (this.process(Y.innerType, K), (z.ref = Y.innerType));
            break;
          }
          case "optional": {
            (this.process(Y.innerType, K), (z.ref = Y.innerType));
            break;
          }
          case "lazy": {
            let O = $._zod.innerType;
            (this.process(O, K), (z.ref = O));
            break;
          }
          case "custom": {
            if (this.unrepresentable === "throw")
              throw Error("Custom types cannot be represented in JSON Schema");
            break;
          }
          default:
        }
      }
    }
    let U = this.metadataRegistry.get($);
    if (U) Object.assign(z.schema, U);
    if (this.io === "input" && f$($))
      (delete z.schema.examples, delete z.schema.default);
    if (this.io === "input" && z.schema._prefault)
      (J = z.schema).default ?? (J.default = z.schema._prefault);
    return (delete z.schema._prefault, this.seen.get($).schema);
  }
  emit($, X) {
    let J = {
        cycles: X?.cycles ?? "ref",
        reused: X?.reused ?? "inline",
        external: X?.external ?? void 0,
      },
      Y = this.seen.get($);
    if (!Y) throw Error("Unprocessed schema. This is a bug in Zod.");
    let Q = (H) => {
        let K = this.target === "draft-2020-12" ? "$defs" : "definitions";
        if (J.external) {
          let w = J.external.registry.get(H[0])?.id;
          if (w) return { ref: J.external.uri(w) };
          let B = H[1].defId ?? H[1].schema.id ?? `schema${this.counter++}`;
          return (
            (H[1].defId = B),
            { defId: B, ref: `${J.external.uri("__shared")}#/${K}/${B}` }
          );
        }
        if (H[1] === Y) return { ref: "#" };
        let V = `${"#"}/${K}/`,
          O = H[1].schema.id ?? `__schema${this.counter++}`;
        return { defId: O, ref: V + O };
      },
      W = (H) => {
        if (H[1].schema.$ref) return;
        let K = H[1],
          { ref: N, defId: V } = Q(H);
        if (((K.def = { ...K.schema }), V)) K.defId = V;
        let O = K.schema;
        for (let w in O) delete O[w];
        O.$ref = N;
      };
    for (let H of this.seen.entries()) {
      let K = H[1];
      if ($ === H[0]) {
        W(H);
        continue;
      }
      if (J.external) {
        let V = J.external.registry.get(H[0])?.id;
        if ($ !== H[0] && V) {
          W(H);
          continue;
        }
      }
      if (this.metadataRegistry.get(H[0])?.id) {
        W(H);
        continue;
      }
      if (K.cycle) {
        if (J.cycles === "throw")
          throw Error(`Cycle detected: #/${K.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        else if (J.cycles === "ref") W(H);
        continue;
      }
      if (K.count > 1) {
        if (J.reused === "ref") {
          W(H);
          continue;
        }
      }
    }
    let z = (H, K) => {
      let N = this.seen.get(H),
        V = N.def ?? N.schema,
        O = { ...V };
      if (N.ref === null) return;
      let w = N.ref;
      if (((N.ref = null), w)) {
        z(w, K);
        let B = this.seen.get(w).schema;
        if (B.$ref && K.target === "draft-7")
          ((V.allOf = V.allOf ?? []), V.allOf.push(B));
        else (Object.assign(V, B), Object.assign(V, O));
      }
      if (!N.isParent)
        this.override({ zodSchema: H, jsonSchema: V, path: N.path ?? [] });
    };
    for (let H of [...this.seen.entries()].reverse())
      z(H[0], { target: this.target });
    let G = {};
    if (this.target === "draft-2020-12")
      G.$schema = "https://json-schema.org/draft/2020-12/schema";
    else if (this.target === "draft-7")
      G.$schema = "http://json-schema.org/draft-07/schema#";
    else console.warn(`Invalid target: ${this.target}`);
    Object.assign(G, Y.def);
    let U = J.external?.defs ?? {};
    for (let H of this.seen.entries()) {
      let K = H[1];
      if (K.def && K.defId) U[K.defId] = K.def;
    }
    if (!J.external && Object.keys(U).length > 0)
      if (this.target === "draft-2020-12") G.$defs = U;
      else G.definitions = U;
    try {
      return JSON.parse(JSON.stringify(G));
    } catch (H) {
      throw Error("Error converting schema to JSON.");
    }
  }
}
function t0($, X) {
  if ($ instanceof JX) {
    let Y = new j5(X),
      Q = {};
    for (let G of $._idmap.entries()) {
      let [U, H] = G;
      Y.process(H);
    }
    let W = {},
      z = { registry: $, uri: X?.uri || ((G) => G), defs: Q };
    for (let G of $._idmap.entries()) {
      let [U, H] = G;
      W[U] = Y.emit(H, { ...X, external: z });
    }
    if (Object.keys(Q).length > 0) {
      let G = Y.target === "draft-2020-12" ? "$defs" : "definitions";
      W.__shared = { [G]: Q };
    }
    return { schemas: W };
  }
  let J = new j5(X);
  return (J.process($), J.emit($, X));
}
function f$($, X) {
  let J = X ?? { seen: new Set() };
  if (J.seen.has($)) return !1;
  J.seen.add($);
  let Q = $._zod.def;
  switch (Q.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return f$(Q.element, J);
    case "object": {
      for (let W in Q.shape) if (f$(Q.shape[W], J)) return !0;
      return !1;
    }
    case "union": {
      for (let W of Q.options) if (f$(W, J)) return !0;
      return !1;
    }
    case "intersection":
      return f$(Q.left, J) || f$(Q.right, J);
    case "tuple": {
      for (let W of Q.items) if (f$(W, J)) return !0;
      if (Q.rest && f$(Q.rest, J)) return !0;
      return !1;
    }
    case "record":
      return f$(Q.keyType, J) || f$(Q.valueType, J);
    case "map":
      return f$(Q.keyType, J) || f$(Q.valueType, J);
    case "set":
      return f$(Q.valueType, J);
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return f$(Q.innerType, J);
    case "lazy":
      return f$(Q.getter(), J);
    case "default":
      return f$(Q.innerType, J);
    case "prefault":
      return f$(Q.innerType, J);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return f$(Q.in, J) || f$(Q.out, J);
    case "success":
      return !1;
    case "catch":
      return !1;
    default:
  }
  throw Error(`Unknown schema type: ${Q.type}`);
}
var cq = {};
var cC = q("ZodMiniType", ($, X) => {
  if (!$._zod) throw Error("Uninitialized schema in ZodMiniType.");
  (p.init($, X),
    ($.def = X),
    ($.parse = (J, Y) => g1($, J, Y, { callee: $.parse })),
    ($.safeParse = (J, Y) => t4($, J, Y)),
    ($.parseAsync = async (J, Y) => h1($, J, Y, { callee: $.parseAsync })),
    ($.safeParseAsync = async (J, Y) => a4($, J, Y)),
    ($.check = (...J) => {
      return $.clone({
        ...X,
        checks: [
          ...(X.checks ?? []),
          ...J.map((Y) =>
            typeof Y === "function"
              ? { _zod: { check: Y, def: { check: "custom" }, onattach: [] } }
              : Y,
          ),
        ],
      });
    }),
    ($.clone = (J, Y) => i$($, J, Y)),
    ($.brand = () => $),
    ($.register = (J, Y) => {
      return (J.add($, Y), $);
    }));
});
var dC = q("ZodMiniObject", ($, X) => {
  (e9.init($, X), cC.init($, X), E.defineLazy($, "shape", () => X.shape));
});
function HU($, X) {
  let J = {
    type: "object",
    get shape() {
      return (E.assignProp(this, "shape", { ...$ }), this.shape);
    },
    ...E.normalizeParams(X),
  };
  return new dC(J);
}
function P6($) {
  return !!$._zod;
}
function p1($) {
  let X = Object.values($);
  if (X.length === 0) return HU({});
  let J = X.every(P6),
    Y = X.every((Q) => !P6(Q));
  if (J) return HU($);
  if (Y) return Fq($);
  throw Error("Mixed Zod versions detected in object shape.");
}
function J1($, X) {
  if (P6($)) return t4($, X);
  return $.safeParse(X);
}
async function L5($, X) {
  if (P6($)) return await a4($, X);
  return await $.safeParseAsync(X);
}
function Q1($) {
  if (!$) return;
  let X;
  if (P6($)) X = $._zod?.def?.shape;
  else X = $.shape;
  if (!X) return;
  if (typeof X === "function")
    try {
      return X();
    } catch {
      return;
    }
  return X;
}
function a0($) {
  if (!$) return;
  if (typeof $ === "object") {
    let X = $,
      J = $;
    if (!X._def && !J._zod) {
      let Y = Object.values($);
      if (
        Y.length > 0 &&
        Y.every(
          (Q) =>
            typeof Q === "object" &&
            Q !== null &&
            (Q._def !== void 0 ||
              Q._zod !== void 0 ||
              typeof Q.parse === "function"),
        )
      )
        return p1($);
    }
  }
  if (P6($)) {
    let J = $._zod?.def;
    if (J && (J.type === "object" || J.shape !== void 0)) return $;
  } else if ($.shape !== void 0) return $;
  return;
}
function M5($) {
  if ($ && typeof $ === "object") {
    if ("message" in $ && typeof $.message === "string") return $.message;
    if ("issues" in $ && Array.isArray($.issues) && $.issues.length > 0) {
      let X = $.issues[0];
      if (X && typeof X === "object" && "message" in X)
        return String(X.message);
    }
    try {
      return JSON.stringify($);
    } catch {
      return String($);
    }
  }
  return String($);
}
function dq($) {
  return $.description;
}
function pq($) {
  if (P6($)) return $._zod?.def?.type === "optional";
  let X = $;
  if (typeof $.isOptional === "function") return $.isOptional();
  return X._def?.typeName === "ZodOptional";
}
function A5($) {
  if (P6($)) {
    let W = $._zod?.def;
    if (W) {
      if (W.value !== void 0) return W.value;
      if (Array.isArray(W.values) && W.values.length > 0) return W.values[0];
    }
  }
  let J = $._def;
  if (J) {
    if (J.value !== void 0) return J.value;
    if (Array.isArray(J.values) && J.values.length > 0) return J.values[0];
  }
  let Y = $.value;
  if (Y !== void 0) return Y;
  return;
}
var Y1 = {};
B1(Y1, {
  xid: () => Gk,
  void: () => Ek,
  uuidv7: () => $k,
  uuidv6: () => eC,
  uuidv4: () => sC,
  uuid: () => aC,
  url: () => Xk,
  uppercase: () => EX,
  unknown: () => L$,
  union: () => N$,
  undefined: () => Rk,
  ulid: () => zk,
  uint64: () => Zk,
  uint32: () => Mk,
  tuple: () => kk,
  trim: () => xX,
  treeifyError: () => y7,
  transform: () => mU,
  toUpperCase: () => fX,
  toLowerCase: () => TX,
  toJSONSchema: () => t0,
  templateLiteral: () => mk,
  symbol: () => bk,
  superRefine: () => ED,
  success: () => hk,
  stringbool: () => dk,
  stringFormat: () => Dk,
  string: () => L,
  strictObject: () => Ck,
  startsWith: () => vX,
  size: () => bX,
  setErrorMap: () => nk,
  set: () => Tk,
  safeParseAsync: () => DU,
  safeParse: () => qU,
  registry: () => QX,
  regexes: () => s4,
  regex: () => RX,
  refine: () => PD,
  record: () => V$,
  readonly: () => MD,
  property: () => zU,
  promise: () => lk,
  prettifyError: () => g7,
  preprocess: () => f5,
  prefault: () => wD,
  positive: () => JU,
  pipe: () => S5,
  partialRecord: () => _k,
  parseAsync: () => BU,
  parse: () => wU,
  overwrite: () => R4,
  optional: () => j$,
  object: () => x,
  number: () => z$,
  nullish: () => gk,
  nullable: () => E5,
  null: () => v5,
  normalize: () => _X,
  nonpositive: () => YU,
  nonoptional: () => BD,
  nonnegative: () => WU,
  never: () => C5,
  negative: () => QU,
  nativeEnum: () => fk,
  nanoid: () => Qk,
  nan: () => uk,
  multipleOf: () => c1,
  minSize: () => d1,
  minLength: () => X1,
  mime: () => kX,
  maxSize: () => n0,
  maxLength: () => r0,
  map: () => xk,
  lte: () => R6,
  lt: () => Z4,
  lowercase: () => PX,
  looseObject: () => n$,
  locales: () => p0,
  literal: () => g,
  length: () => o0,
  lazy: () => ZD,
  ksuid: () => Uk,
  keyof: () => vk,
  jwt: () => qk,
  json: () => pk,
  iso: () => s0,
  ipv6: () => Kk,
  ipv4: () => Hk,
  intersection: () => cX,
  int64: () => Ik,
  int32: () => Lk,
  int: () => FU,
  instanceof: () => ck,
  includes: () => SX,
  guid: () => tC,
  gte: () => G6,
  gt: () => b4,
  globalRegistry: () => z6,
  getErrorMap: () => rk,
  function: () => F5,
  formatError: () => h0,
  float64: () => jk,
  float32: () => Fk,
  flattenError: () => g0,
  file: () => yk,
  enum: () => t$,
  endsWith: () => CX,
  emoji: () => Jk,
  email: () => oC,
  e164: () => Bk,
  discriminatedUnion: () => x5,
  date: () => Sk,
  custom: () => pU,
  cuid2: () => Wk,
  cuid: () => Yk,
  core: () => m6,
  config: () => v$,
  coerce: () => iU,
  clone: () => i$,
  cidrv6: () => Vk,
  cidrv4: () => Nk,
  check: () => RD,
  catch: () => FD,
  boolean: () => k$,
  bigint: () => Ak,
  base64url: () => wk,
  base64: () => Ok,
  array: () => $$,
  any: () => Pk,
  _default: () => VD,
  _ZodString: () => jU,
  ZodXID: () => PU,
  ZodVoid: () => XD,
  ZodUnknown: () => eq,
  ZodUnion: () => gU,
  ZodUndefined: () => tq,
  ZodUUID: () => P4,
  ZodURL: () => MU,
  ZodULID: () => RU,
  ZodType: () => s,
  ZodTuple: () => WD,
  ZodTransform: () => uU,
  ZodTemplateLiteral: () => AD,
  ZodSymbol: () => oq,
  ZodSuccess: () => qD,
  ZodStringFormat: () => F$,
  ZodString: () => hX,
  ZodSet: () => GD,
  ZodRecord: () => hU,
  ZodRealError: () => e0,
  ZodReadonly: () => LD,
  ZodPromise: () => bD,
  ZodPrefault: () => OD,
  ZodPipe: () => dU,
  ZodOptional: () => lU,
  ZodObject: () => _5,
  ZodNumberFormat: () => $8,
  ZodNumber: () => uX,
  ZodNullable: () => KD,
  ZodNull: () => aq,
  ZodNonOptional: () => cU,
  ZodNever: () => $D,
  ZodNanoID: () => IU,
  ZodNaN: () => jD,
  ZodMap: () => zD,
  ZodLiteral: () => UD,
  ZodLazy: () => ID,
  ZodKSUID: () => EU,
  ZodJWT: () => fU,
  ZodIssueCode: () => ik,
  ZodIntersection: () => YD,
  ZodISOTime: () => b5,
  ZodISODuration: () => R5,
  ZodISODateTime: () => I5,
  ZodISODate: () => Z5,
  ZodIPv6: () => vU,
  ZodIPv4: () => SU,
  ZodGUID: () => P5,
  ZodFile: () => HD,
  ZodError: () => nC,
  ZodEnum: () => gX,
  ZodEmoji: () => AU,
  ZodEmail: () => LU,
  ZodE164: () => TU,
  ZodDiscriminatedUnion: () => QD,
  ZodDefault: () => ND,
  ZodDate: () => k5,
  ZodCustomStringFormat: () => rq,
  ZodCustom: () => T5,
  ZodCatch: () => DD,
  ZodCUID2: () => bU,
  ZodCUID: () => ZU,
  ZodCIDRv6: () => kU,
  ZodCIDRv4: () => CU,
  ZodBoolean: () => mX,
  ZodBigIntFormat: () => yU,
  ZodBigInt: () => lX,
  ZodBase64URL: () => xU,
  ZodBase64: () => _U,
  ZodArray: () => JD,
  ZodAny: () => sq,
  TimePrecision: () => rQ,
  NEVER: () => x7,
  $output: () => pQ,
  $input: () => iQ,
  $brand: () => T7,
});
var s0 = {};
B1(s0, {
  time: () => VU,
  duration: () => OU,
  datetime: () => KU,
  date: () => NU,
  ZodISOTime: () => b5,
  ZodISODuration: () => R5,
  ZodISODateTime: () => I5,
  ZodISODate: () => Z5,
});
var I5 = q("ZodISODateTime", ($, X) => {
  (Y3.init($, X), F$.init($, X));
});
function KU($) {
  return r3(I5, $);
}
var Z5 = q("ZodISODate", ($, X) => {
  (W3.init($, X), F$.init($, X));
});
function NU($) {
  return o3(Z5, $);
}
var b5 = q("ZodISOTime", ($, X) => {
  (z3.init($, X), F$.init($, X));
});
function VU($) {
  return t3(b5, $);
}
var R5 = q("ZodISODuration", ($, X) => {
  (G3.init($, X), F$.init($, X));
});
function OU($) {
  return a3(R5, $);
}
var nq = ($, X) => {
    (t9.init($, X),
      ($.name = "ZodError"),
      Object.defineProperties($, {
        format: { value: (J) => h0($, J) },
        flatten: { value: (J) => g0($, J) },
        addIssue: { value: (J) => $.issues.push(J) },
        addIssues: { value: (J) => $.issues.push(...J) },
        isEmpty: {
          get() {
            return $.issues.length === 0;
          },
        },
      }));
  },
  nC = q("ZodError", nq),
  e0 = q("ZodError", nq, { Parent: Error });
var wU = h7(e0),
  BU = u7(e0),
  qU = m7(e0),
  DU = l7(e0);
var s = q("ZodType", ($, X) => {
    return (
      p.init($, X),
      ($.def = X),
      Object.defineProperty($, "_def", { value: X }),
      ($.check = (...J) => {
        return $.clone({
          ...X,
          checks: [
            ...(X.checks ?? []),
            ...J.map((Y) =>
              typeof Y === "function"
                ? { _zod: { check: Y, def: { check: "custom" }, onattach: [] } }
                : Y,
            ),
          ],
        });
      }),
      ($.clone = (J, Y) => i$($, J, Y)),
      ($.brand = () => $),
      ($.register = (J, Y) => {
        return (J.add($, Y), $);
      }),
      ($.parse = (J, Y) => wU($, J, Y, { callee: $.parse })),
      ($.safeParse = (J, Y) => qU($, J, Y)),
      ($.parseAsync = async (J, Y) => BU($, J, Y, { callee: $.parseAsync })),
      ($.safeParseAsync = async (J, Y) => DU($, J, Y)),
      ($.spa = $.safeParseAsync),
      ($.refine = (J, Y) => $.check(PD(J, Y))),
      ($.superRefine = (J) => $.check(ED(J))),
      ($.overwrite = (J) => $.check(R4(J))),
      ($.optional = () => j$($)),
      ($.nullable = () => E5($)),
      ($.nullish = () => j$(E5($))),
      ($.nonoptional = (J) => BD($, J)),
      ($.array = () => $$($)),
      ($.or = (J) => N$([$, J])),
      ($.and = (J) => cX($, J)),
      ($.transform = (J) => S5($, mU(J))),
      ($.default = (J) => VD($, J)),
      ($.prefault = (J) => wD($, J)),
      ($.catch = (J) => FD($, J)),
      ($.pipe = (J) => S5($, J)),
      ($.readonly = () => MD($)),
      ($.describe = (J) => {
        let Y = $.clone();
        return (z6.add(Y, { description: J }), Y);
      }),
      Object.defineProperty($, "description", {
        get() {
          return z6.get($)?.description;
        },
        configurable: !0,
      }),
      ($.meta = (...J) => {
        if (J.length === 0) return z6.get($);
        let Y = $.clone();
        return (z6.add(Y, J[0]), Y);
      }),
      ($.isOptional = () => $.safeParse(void 0).success),
      ($.isNullable = () => $.safeParse(null).success),
      $
    );
  }),
  jU = q("_ZodString", ($, X) => {
    (e4.init($, X), s.init($, X));
    let J = $._zod.bag;
    (($.format = J.format ?? null),
      ($.minLength = J.minimum ?? null),
      ($.maxLength = J.maximum ?? null),
      ($.regex = (...Y) => $.check(RX(...Y))),
      ($.includes = (...Y) => $.check(SX(...Y))),
      ($.startsWith = (...Y) => $.check(vX(...Y))),
      ($.endsWith = (...Y) => $.check(CX(...Y))),
      ($.min = (...Y) => $.check(X1(...Y))),
      ($.max = (...Y) => $.check(r0(...Y))),
      ($.length = (...Y) => $.check(o0(...Y))),
      ($.nonempty = (...Y) => $.check(X1(1, ...Y))),
      ($.lowercase = (Y) => $.check(PX(Y))),
      ($.uppercase = (Y) => $.check(EX(Y))),
      ($.trim = () => $.check(xX())),
      ($.normalize = (...Y) => $.check(_X(...Y))),
      ($.toLowerCase = () => $.check(TX())),
      ($.toUpperCase = () => $.check(fX())));
  }),
  hX = q("ZodString", ($, X) => {
    (e4.init($, X),
      jU.init($, X),
      ($.email = (J) => $.check(YX(LU, J))),
      ($.url = (J) => $.check(HX(MU, J))),
      ($.jwt = (J) => $.check(ZX(fU, J))),
      ($.emoji = (J) => $.check(KX(AU, J))),
      ($.guid = (J) => $.check(i0(P5, J))),
      ($.uuid = (J) => $.check(WX(P4, J))),
      ($.uuidv4 = (J) => $.check(zX(P4, J))),
      ($.uuidv6 = (J) => $.check(GX(P4, J))),
      ($.uuidv7 = (J) => $.check(UX(P4, J))),
      ($.nanoid = (J) => $.check(NX(IU, J))),
      ($.guid = (J) => $.check(i0(P5, J))),
      ($.cuid = (J) => $.check(VX(ZU, J))),
      ($.cuid2 = (J) => $.check(OX(bU, J))),
      ($.ulid = (J) => $.check(wX(RU, J))),
      ($.base64 = (J) => $.check(MX(_U, J))),
      ($.base64url = (J) => $.check(AX(xU, J))),
      ($.xid = (J) => $.check(BX(PU, J))),
      ($.ksuid = (J) => $.check(qX(EU, J))),
      ($.ipv4 = (J) => $.check(DX(SU, J))),
      ($.ipv6 = (J) => $.check(FX(vU, J))),
      ($.cidrv4 = (J) => $.check(jX(CU, J))),
      ($.cidrv6 = (J) => $.check(LX(kU, J))),
      ($.e164 = (J) => $.check(IX(TU, J))),
      ($.datetime = (J) => $.check(KU(J))),
      ($.date = (J) => $.check(NU(J))),
      ($.time = (J) => $.check(VU(J))),
      ($.duration = (J) => $.check(OU(J))));
  });
function L($) {
  return nQ(hX, $);
}
var F$ = q("ZodStringFormat", ($, X) => {
    (K$.init($, X), jU.init($, X));
  }),
  LU = q("ZodEmail", ($, X) => {
    (a7.init($, X), F$.init($, X));
  });
function oC($) {
  return YX(LU, $);
}
var P5 = q("ZodGUID", ($, X) => {
  (o7.init($, X), F$.init($, X));
});
function tC($) {
  return i0(P5, $);
}
var P4 = q("ZodUUID", ($, X) => {
  (t7.init($, X), F$.init($, X));
});
function aC($) {
  return WX(P4, $);
}
function sC($) {
  return zX(P4, $);
}
function eC($) {
  return GX(P4, $);
}
function $k($) {
  return UX(P4, $);
}
var MU = q("ZodURL", ($, X) => {
  (s7.init($, X), F$.init($, X));
});
function Xk($) {
  return HX(MU, $);
}
var AU = q("ZodEmoji", ($, X) => {
  (e7.init($, X), F$.init($, X));
});
function Jk($) {
  return KX(AU, $);
}
var IU = q("ZodNanoID", ($, X) => {
  ($Q.init($, X), F$.init($, X));
});
function Qk($) {
  return NX(IU, $);
}
var ZU = q("ZodCUID", ($, X) => {
  (XQ.init($, X), F$.init($, X));
});
function Yk($) {
  return VX(ZU, $);
}
var bU = q("ZodCUID2", ($, X) => {
  (JQ.init($, X), F$.init($, X));
});
function Wk($) {
  return OX(bU, $);
}
var RU = q("ZodULID", ($, X) => {
  (QQ.init($, X), F$.init($, X));
});
function zk($) {
  return wX(RU, $);
}
var PU = q("ZodXID", ($, X) => {
  (YQ.init($, X), F$.init($, X));
});
function Gk($) {
  return BX(PU, $);
}
var EU = q("ZodKSUID", ($, X) => {
  (WQ.init($, X), F$.init($, X));
});
function Uk($) {
  return qX(EU, $);
}
var SU = q("ZodIPv4", ($, X) => {
  (zQ.init($, X), F$.init($, X));
});
function Hk($) {
  return DX(SU, $);
}
var vU = q("ZodIPv6", ($, X) => {
  (GQ.init($, X), F$.init($, X));
});
function Kk($) {
  return FX(vU, $);
}
var CU = q("ZodCIDRv4", ($, X) => {
  (UQ.init($, X), F$.init($, X));
});
function Nk($) {
  return jX(CU, $);
}
var kU = q("ZodCIDRv6", ($, X) => {
  (HQ.init($, X), F$.init($, X));
});
function Vk($) {
  return LX(kU, $);
}
var _U = q("ZodBase64", ($, X) => {
  (KQ.init($, X), F$.init($, X));
});
function Ok($) {
  return MX(_U, $);
}
var xU = q("ZodBase64URL", ($, X) => {
  (NQ.init($, X), F$.init($, X));
});
function wk($) {
  return AX(xU, $);
}
var TU = q("ZodE164", ($, X) => {
  (VQ.init($, X), F$.init($, X));
});
function Bk($) {
  return IX(TU, $);
}
var fU = q("ZodJWT", ($, X) => {
  (OQ.init($, X), F$.init($, X));
});
function qk($) {
  return ZX(fU, $);
}
var rq = q("ZodCustomStringFormat", ($, X) => {
  (wQ.init($, X), F$.init($, X));
});
function Dk($, X, J = {}) {
  return D5(rq, $, X, J);
}
var uX = q("ZodNumber", ($, X) => {
  (a9.init($, X),
    s.init($, X),
    ($.gt = (Y, Q) => $.check(b4(Y, Q))),
    ($.gte = (Y, Q) => $.check(G6(Y, Q))),
    ($.min = (Y, Q) => $.check(G6(Y, Q))),
    ($.lt = (Y, Q) => $.check(Z4(Y, Q))),
    ($.lte = (Y, Q) => $.check(R6(Y, Q))),
    ($.max = (Y, Q) => $.check(R6(Y, Q))),
    ($.int = (Y) => $.check(FU(Y))),
    ($.safe = (Y) => $.check(FU(Y))),
    ($.positive = (Y) => $.check(b4(0, Y))),
    ($.nonnegative = (Y) => $.check(G6(0, Y))),
    ($.negative = (Y) => $.check(Z4(0, Y))),
    ($.nonpositive = (Y) => $.check(R6(0, Y))),
    ($.multipleOf = (Y, Q) => $.check(c1(Y, Q))),
    ($.step = (Y, Q) => $.check(c1(Y, Q))),
    ($.finite = () => $));
  let J = $._zod.bag;
  (($.minValue =
    Math.max(
      J.minimum ?? Number.NEGATIVE_INFINITY,
      J.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
    ) ?? null),
    ($.maxValue =
      Math.min(
        J.maximum ?? Number.POSITIVE_INFINITY,
        J.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
      ) ?? null),
    ($.isInt =
      (J.format ?? "").includes("int") ||
      Number.isSafeInteger(J.multipleOf ?? 0.5)),
    ($.isFinite = !0),
    ($.format = J.format ?? null));
});
function z$($) {
  return oQ(uX, $);
}
var $8 = q("ZodNumberFormat", ($, X) => {
  (BQ.init($, X), uX.init($, X));
});
function FU($) {
  return tQ($8, $);
}
function Fk($) {
  return aQ($8, $);
}
function jk($) {
  return sQ($8, $);
}
function Lk($) {
  return eQ($8, $);
}
function Mk($) {
  return $5($8, $);
}
var mX = q("ZodBoolean", ($, X) => {
  (m0.init($, X), s.init($, X));
});
function k$($) {
  return X5(mX, $);
}
var lX = q("ZodBigInt", ($, X) => {
  (s9.init($, X),
    s.init($, X),
    ($.gte = (Y, Q) => $.check(G6(Y, Q))),
    ($.min = (Y, Q) => $.check(G6(Y, Q))),
    ($.gt = (Y, Q) => $.check(b4(Y, Q))),
    ($.gte = (Y, Q) => $.check(G6(Y, Q))),
    ($.min = (Y, Q) => $.check(G6(Y, Q))),
    ($.lt = (Y, Q) => $.check(Z4(Y, Q))),
    ($.lte = (Y, Q) => $.check(R6(Y, Q))),
    ($.max = (Y, Q) => $.check(R6(Y, Q))),
    ($.positive = (Y) => $.check(b4(BigInt(0), Y))),
    ($.negative = (Y) => $.check(Z4(BigInt(0), Y))),
    ($.nonpositive = (Y) => $.check(R6(BigInt(0), Y))),
    ($.nonnegative = (Y) => $.check(G6(BigInt(0), Y))),
    ($.multipleOf = (Y, Q) => $.check(c1(Y, Q))));
  let J = $._zod.bag;
  (($.minValue = J.minimum ?? null),
    ($.maxValue = J.maximum ?? null),
    ($.format = J.format ?? null));
});
function Ak($) {
  return J5(lX, $);
}
var yU = q("ZodBigIntFormat", ($, X) => {
  (qQ.init($, X), lX.init($, X));
});
function Ik($) {
  return Q5(yU, $);
}
function Zk($) {
  return Y5(yU, $);
}
var oq = q("ZodSymbol", ($, X) => {
  (DQ.init($, X), s.init($, X));
});
function bk($) {
  return W5(oq, $);
}
var tq = q("ZodUndefined", ($, X) => {
  (FQ.init($, X), s.init($, X));
});
function Rk($) {
  return z5(tq, $);
}
var aq = q("ZodNull", ($, X) => {
  (jQ.init($, X), s.init($, X));
});
function v5($) {
  return G5(aq, $);
}
var sq = q("ZodAny", ($, X) => {
  (LQ.init($, X), s.init($, X));
});
function Pk() {
  return U5(sq);
}
var eq = q("ZodUnknown", ($, X) => {
  (m1.init($, X), s.init($, X));
});
function L$() {
  return l1(eq);
}
var $D = q("ZodNever", ($, X) => {
  (MQ.init($, X), s.init($, X));
});
function C5($) {
  return H5($D, $);
}
var XD = q("ZodVoid", ($, X) => {
  (AQ.init($, X), s.init($, X));
});
function Ek($) {
  return K5(XD, $);
}
var k5 = q("ZodDate", ($, X) => {
  (IQ.init($, X),
    s.init($, X),
    ($.min = (Y, Q) => $.check(G6(Y, Q))),
    ($.max = (Y, Q) => $.check(R6(Y, Q))));
  let J = $._zod.bag;
  (($.minDate = J.minimum ? new Date(J.minimum) : null),
    ($.maxDate = J.maximum ? new Date(J.maximum) : null));
});
function Sk($) {
  return N5(k5, $);
}
var JD = q("ZodArray", ($, X) => {
  (l0.init($, X),
    s.init($, X),
    ($.element = X.element),
    ($.min = (J, Y) => $.check(X1(J, Y))),
    ($.nonempty = (J) => $.check(X1(1, J))),
    ($.max = (J, Y) => $.check(r0(J, Y))),
    ($.length = (J, Y) => $.check(o0(J, Y))),
    ($.unwrap = () => $.element));
});
function $$($, X) {
  return yX(JD, $, X);
}
function vk($) {
  let X = $._zod.def.shape;
  return g(Object.keys(X));
}
var _5 = q("ZodObject", ($, X) => {
  (e9.init($, X),
    s.init($, X),
    E.defineLazy($, "shape", () => X.shape),
    ($.keyof = () => t$(Object.keys($._zod.def.shape))),
    ($.catchall = (J) => $.clone({ ...$._zod.def, catchall: J })),
    ($.passthrough = () => $.clone({ ...$._zod.def, catchall: L$() })),
    ($.loose = () => $.clone({ ...$._zod.def, catchall: L$() })),
    ($.strict = () => $.clone({ ...$._zod.def, catchall: C5() })),
    ($.strip = () => $.clone({ ...$._zod.def, catchall: void 0 })),
    ($.extend = (J) => {
      return E.extend($, J);
    }),
    ($.merge = (J) => E.merge($, J)),
    ($.pick = (J) => E.pick($, J)),
    ($.omit = (J) => E.omit($, J)),
    ($.partial = (...J) => E.partial(lU, $, J[0])),
    ($.required = (...J) => E.required(cU, $, J[0])));
});
function x($, X) {
  let J = {
    type: "object",
    get shape() {
      return (E.assignProp(this, "shape", { ...$ }), this.shape);
    },
    ...E.normalizeParams(X),
  };
  return new _5(J);
}
function Ck($, X) {
  return new _5({
    type: "object",
    get shape() {
      return (E.assignProp(this, "shape", { ...$ }), this.shape);
    },
    catchall: C5(),
    ...E.normalizeParams(X),
  });
}
function n$($, X) {
  return new _5({
    type: "object",
    get shape() {
      return (E.assignProp(this, "shape", { ...$ }), this.shape);
    },
    catchall: L$(),
    ...E.normalizeParams(X),
  });
}
var gU = q("ZodUnion", ($, X) => {
  ($X.init($, X), s.init($, X), ($.options = X.options));
});
function N$($, X) {
  return new gU({ type: "union", options: $, ...E.normalizeParams(X) });
}
var QD = q("ZodDiscriminatedUnion", ($, X) => {
  (gU.init($, X), ZQ.init($, X));
});
function x5($, X, J) {
  return new QD({
    type: "union",
    options: X,
    discriminator: $,
    ...E.normalizeParams(J),
  });
}
var YD = q("ZodIntersection", ($, X) => {
  (bQ.init($, X), s.init($, X));
});
function cX($, X) {
  return new YD({ type: "intersection", left: $, right: X });
}
var WD = q("ZodTuple", ($, X) => {
  ($1.init($, X),
    s.init($, X),
    ($.rest = (J) => $.clone({ ...$._zod.def, rest: J })));
});
function kk($, X, J) {
  let Y = X instanceof p,
    Q = Y ? J : X;
  return new WD({
    type: "tuple",
    items: $,
    rest: Y ? X : null,
    ...E.normalizeParams(Q),
  });
}
var hU = q("ZodRecord", ($, X) => {
  (RQ.init($, X),
    s.init($, X),
    ($.keyType = X.keyType),
    ($.valueType = X.valueType));
});
function V$($, X, J) {
  return new hU({
    type: "record",
    keyType: $,
    valueType: X,
    ...E.normalizeParams(J),
  });
}
function _k($, X, J) {
  return new hU({
    type: "record",
    keyType: N$([$, C5()]),
    valueType: X,
    ...E.normalizeParams(J),
  });
}
var zD = q("ZodMap", ($, X) => {
  (PQ.init($, X),
    s.init($, X),
    ($.keyType = X.keyType),
    ($.valueType = X.valueType));
});
function xk($, X, J) {
  return new zD({
    type: "map",
    keyType: $,
    valueType: X,
    ...E.normalizeParams(J),
  });
}
var GD = q("ZodSet", ($, X) => {
  (EQ.init($, X),
    s.init($, X),
    ($.min = (...J) => $.check(d1(...J))),
    ($.nonempty = (J) => $.check(d1(1, J))),
    ($.max = (...J) => $.check(n0(...J))),
    ($.size = (...J) => $.check(bX(...J))));
});
function Tk($, X) {
  return new GD({ type: "set", valueType: $, ...E.normalizeParams(X) });
}
var gX = q("ZodEnum", ($, X) => {
  (SQ.init($, X),
    s.init($, X),
    ($.enum = X.entries),
    ($.options = Object.values(X.entries)));
  let J = new Set(Object.keys(X.entries));
  (($.extract = (Y, Q) => {
    let W = {};
    for (let z of Y)
      if (J.has(z)) W[z] = X.entries[z];
      else throw Error(`Key ${z} not found in enum`);
    return new gX({ ...X, checks: [], ...E.normalizeParams(Q), entries: W });
  }),
    ($.exclude = (Y, Q) => {
      let W = { ...X.entries };
      for (let z of Y)
        if (J.has(z)) delete W[z];
        else throw Error(`Key ${z} not found in enum`);
      return new gX({ ...X, checks: [], ...E.normalizeParams(Q), entries: W });
    }));
});
function t$($, X) {
  let J = Array.isArray($) ? Object.fromEntries($.map((Y) => [Y, Y])) : $;
  return new gX({ type: "enum", entries: J, ...E.normalizeParams(X) });
}
function fk($, X) {
  return new gX({ type: "enum", entries: $, ...E.normalizeParams(X) });
}
var UD = q("ZodLiteral", ($, X) => {
  (vQ.init($, X),
    s.init($, X),
    ($.values = new Set(X.values)),
    Object.defineProperty($, "value", {
      get() {
        if (X.values.length > 1)
          throw Error(
            "This schema contains multiple valid literal values. Use `.values` instead.",
          );
        return X.values[0];
      },
    }));
});
function g($, X) {
  return new UD({
    type: "literal",
    values: Array.isArray($) ? $ : [$],
    ...E.normalizeParams(X),
  });
}
var HD = q("ZodFile", ($, X) => {
  (CQ.init($, X),
    s.init($, X),
    ($.min = (J, Y) => $.check(d1(J, Y))),
    ($.max = (J, Y) => $.check(n0(J, Y))),
    ($.mime = (J, Y) => $.check(kX(Array.isArray(J) ? J : [J], Y))));
});
function yk($) {
  return O5(HD, $);
}
var uU = q("ZodTransform", ($, X) => {
  (c0.init($, X),
    s.init($, X),
    ($._zod.parse = (J, Y) => {
      J.addIssue = (W) => {
        if (typeof W === "string") J.issues.push(E.issue(W, J.value, X));
        else {
          let z = W;
          if (z.fatal) z.continue = !1;
          (z.code ?? (z.code = "custom"),
            z.input ?? (z.input = J.value),
            z.inst ?? (z.inst = $),
            z.continue ?? (z.continue = !0),
            J.issues.push(E.issue(z)));
        }
      };
      let Q = X.transform(J.value, J);
      if (Q instanceof Promise)
        return Q.then((W) => {
          return ((J.value = W), J);
        });
      return ((J.value = Q), J);
    }));
});
function mU($) {
  return new uU({ type: "transform", transform: $ });
}
var lU = q("ZodOptional", ($, X) => {
  (kQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function j$($) {
  return new lU({ type: "optional", innerType: $ });
}
var KD = q("ZodNullable", ($, X) => {
  (_Q.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function E5($) {
  return new KD({ type: "nullable", innerType: $ });
}
function gk($) {
  return j$(E5($));
}
var ND = q("ZodDefault", ($, X) => {
  (xQ.init($, X),
    s.init($, X),
    ($.unwrap = () => $._zod.def.innerType),
    ($.removeDefault = $.unwrap));
});
function VD($, X) {
  return new ND({
    type: "default",
    innerType: $,
    get defaultValue() {
      return typeof X === "function" ? X() : X;
    },
  });
}
var OD = q("ZodPrefault", ($, X) => {
  (TQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function wD($, X) {
  return new OD({
    type: "prefault",
    innerType: $,
    get defaultValue() {
      return typeof X === "function" ? X() : X;
    },
  });
}
var cU = q("ZodNonOptional", ($, X) => {
  (fQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function BD($, X) {
  return new cU({ type: "nonoptional", innerType: $, ...E.normalizeParams(X) });
}
var qD = q("ZodSuccess", ($, X) => {
  (yQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function hk($) {
  return new qD({ type: "success", innerType: $ });
}
var DD = q("ZodCatch", ($, X) => {
  (gQ.init($, X),
    s.init($, X),
    ($.unwrap = () => $._zod.def.innerType),
    ($.removeCatch = $.unwrap));
});
function FD($, X) {
  return new DD({
    type: "catch",
    innerType: $,
    catchValue: typeof X === "function" ? X : () => X,
  });
}
var jD = q("ZodNaN", ($, X) => {
  (hQ.init($, X), s.init($, X));
});
function uk($) {
  return V5(jD, $);
}
var dU = q("ZodPipe", ($, X) => {
  (d0.init($, X), s.init($, X), ($.in = X.in), ($.out = X.out));
});
function S5($, X) {
  return new dU({ type: "pipe", in: $, out: X });
}
var LD = q("ZodReadonly", ($, X) => {
  (uQ.init($, X), s.init($, X));
});
function MD($) {
  return new LD({ type: "readonly", innerType: $ });
}
var AD = q("ZodTemplateLiteral", ($, X) => {
  (mQ.init($, X), s.init($, X));
});
function mk($, X) {
  return new AD({
    type: "template_literal",
    parts: $,
    ...E.normalizeParams(X),
  });
}
var ID = q("ZodLazy", ($, X) => {
  (cQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.getter()));
});
function ZD($) {
  return new ID({ type: "lazy", getter: $ });
}
var bD = q("ZodPromise", ($, X) => {
  (lQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function lk($) {
  return new bD({ type: "promise", innerType: $ });
}
var T5 = q("ZodCustom", ($, X) => {
  (dQ.init($, X), s.init($, X));
});
function RD($, X) {
  let J = new I$({ check: "custom", ...E.normalizeParams(X) });
  return ((J._zod.check = $), J);
}
function pU($, X) {
  return w5(T5, $ ?? (() => !0), X);
}
function PD($, X = {}) {
  return B5(T5, $, X);
}
function ED($, X) {
  let J = RD((Y) => {
    return (
      (Y.addIssue = (Q) => {
        if (typeof Q === "string")
          Y.issues.push(E.issue(Q, Y.value, J._zod.def));
        else {
          let W = Q;
          if (W.fatal) W.continue = !1;
          (W.code ?? (W.code = "custom"),
            W.input ?? (W.input = Y.value),
            W.inst ?? (W.inst = J),
            W.continue ?? (W.continue = !J._zod.def.abort),
            Y.issues.push(E.issue(W)));
        }
      }),
      $(Y.value, Y)
    );
  }, X);
  return J;
}
function ck($, X = { error: `Input not instance of ${$.name}` }) {
  let J = new T5({
    type: "custom",
    check: "custom",
    fn: (Y) => Y instanceof $,
    abort: !0,
    ...E.normalizeParams(X),
  });
  return ((J._zod.bag.Class = $), J);
}
var dk = (...$) =>
  q5({ Pipe: dU, Boolean: mX, String: hX, Transform: uU }, ...$);
function pk($) {
  let X = ZD(() => {
    return N$([L($), z$(), k$(), v5(), $$(X), V$(L(), X)]);
  });
  return X;
}
function f5($, X) {
  return S5(mU($), X);
}
var ik = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom",
};
function nk($) {
  v$({ customError: $ });
}
function rk() {
  return v$().customError;
}
var iU = {};
B1(iU, {
  string: () => ok,
  number: () => tk,
  date: () => ek,
  boolean: () => ak,
  bigint: () => sk,
});
function ok($) {
  return n3(hX, $);
}
function tk($) {
  return s3(uX, $);
}
function ak($) {
  return e3(mX, $);
}
function sk($) {
  return $U(lX, $);
}
function ek($) {
  return XU(k5, $);
}
v$(XX());
var nU = "2025-11-25";
var SD = [nU, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"],
  W1 = "io.modelcontextprotocol/related-task",
  g5 = "2.0",
  y$ = pU(
    ($) => $ !== null && (typeof $ === "object" || typeof $ === "function"),
  ),
  vD = N$([L(), z$().int()]),
  CD = L(),
  o4$ = n$({ ttl: z$().optional(), pollInterval: z$().optional() }),
  $_ = x({ ttl: z$().optional() }),
  X_ = x({ taskId: L() }),
  rU = n$({ progressToken: vD.optional(), [W1]: X_.optional() }),
  M6 = x({ _meta: rU.optional() }),
  dX = M6.extend({ task: $_.optional() }),
  kD = ($) => dX.safeParse($).success,
  l$ = x({ method: L(), params: M6.loose().optional() }),
  E6 = x({ _meta: rU.optional() }),
  S6 = x({ method: L(), params: E6.loose().optional() }),
  c$ = n$({ _meta: rU.optional() }),
  h5 = N$([L(), z$().int()]),
  _D = x({ jsonrpc: g(g5), id: h5, ...l$.shape }).strict(),
  oU = ($) => _D.safeParse($).success,
  xD = x({ jsonrpc: g(g5), ...S6.shape }).strict(),
  TD = ($) => xD.safeParse($).success,
  tU = x({ jsonrpc: g(g5), id: h5, result: c$ }).strict(),
  pX = ($) => tU.safeParse($).success;
var m;
(function ($) {
  (($[($.ConnectionClosed = -32000)] = "ConnectionClosed"),
    ($[($.RequestTimeout = -32001)] = "RequestTimeout"),
    ($[($.ParseError = -32700)] = "ParseError"),
    ($[($.InvalidRequest = -32600)] = "InvalidRequest"),
    ($[($.MethodNotFound = -32601)] = "MethodNotFound"),
    ($[($.InvalidParams = -32602)] = "InvalidParams"),
    ($[($.InternalError = -32603)] = "InternalError"),
    ($[($.UrlElicitationRequired = -32042)] = "UrlElicitationRequired"));
})(m || (m = {}));
var aU = x({
  jsonrpc: g(g5),
  id: h5.optional(),
  error: x({ code: z$().int(), message: L(), data: L$().optional() }),
}).strict();
var fD = ($) => aU.safeParse($).success;
var t4$ = N$([_D, xD, tU, aU]),
  a4$ = N$([tU, aU]),
  u5 = c$.strict(),
  J_ = E6.extend({ requestId: h5.optional(), reason: L().optional() }),
  m5 = S6.extend({ method: g("notifications/cancelled"), params: J_ }),
  Q_ = x({
    src: L(),
    mimeType: L().optional(),
    sizes: $$(L()).optional(),
    theme: t$(["light", "dark"]).optional(),
  }),
  iX = x({ icons: $$(Q_).optional() }),
  X8 = x({ name: L(), title: L().optional() }),
  yD = X8.extend({
    ...X8.shape,
    ...iX.shape,
    version: L(),
    websiteUrl: L().optional(),
    description: L().optional(),
  }),
  Y_ = cX(x({ applyDefaults: k$().optional() }), V$(L(), L$())),
  W_ = f5(
    ($) => {
      if ($ && typeof $ === "object" && !Array.isArray($)) {
        if (Object.keys($).length === 0) return { form: {} };
      }
      return $;
    },
    cX(
      x({ form: Y_.optional(), url: y$.optional() }),
      V$(L(), L$()).optional(),
    ),
  ),
  z_ = n$({
    list: y$.optional(),
    cancel: y$.optional(),
    requests: n$({
      sampling: n$({ createMessage: y$.optional() }).optional(),
      elicitation: n$({ create: y$.optional() }).optional(),
    }).optional(),
  }),
  G_ = n$({
    list: y$.optional(),
    cancel: y$.optional(),
    requests: n$({ tools: n$({ call: y$.optional() }).optional() }).optional(),
  }),
  U_ = x({
    experimental: V$(L(), y$).optional(),
    sampling: x({ context: y$.optional(), tools: y$.optional() }).optional(),
    elicitation: W_.optional(),
    roots: x({ listChanged: k$().optional() }).optional(),
    tasks: z_.optional(),
    extensions: V$(L(), y$).optional(),
  }),
  H_ = M6.extend({ protocolVersion: L(), capabilities: U_, clientInfo: yD }),
  sU = l$.extend({ method: g("initialize"), params: H_ });
var K_ = x({
    experimental: V$(L(), y$).optional(),
    logging: y$.optional(),
    completions: y$.optional(),
    prompts: x({ listChanged: k$().optional() }).optional(),
    resources: x({
      subscribe: k$().optional(),
      listChanged: k$().optional(),
    }).optional(),
    tools: x({ listChanged: k$().optional() }).optional(),
    tasks: G_.optional(),
    extensions: V$(L(), y$).optional(),
  }),
  N_ = c$.extend({
    protocolVersion: L(),
    capabilities: K_,
    serverInfo: yD,
    instructions: L().optional(),
  }),
  eU = S6.extend({
    method: g("notifications/initialized"),
    params: E6.optional(),
  });
var l5 = l$.extend({ method: g("ping"), params: M6.optional() }),
  V_ = x({ progress: z$(), total: j$(z$()), message: j$(L()) }),
  O_ = x({ ...E6.shape, ...V_.shape, progressToken: vD }),
  c5 = S6.extend({ method: g("notifications/progress"), params: O_ }),
  w_ = M6.extend({ cursor: CD.optional() }),
  nX = l$.extend({ params: w_.optional() }),
  rX = c$.extend({ nextCursor: CD.optional() }),
  B_ = t$(["working", "input_required", "completed", "failed", "cancelled"]),
  oX = x({
    taskId: L(),
    status: B_,
    ttl: N$([z$(), v5()]),
    createdAt: L(),
    lastUpdatedAt: L(),
    pollInterval: j$(z$()),
    statusMessage: j$(L()),
  }),
  J8 = c$.extend({ task: oX }),
  q_ = E6.merge(oX),
  tX = S6.extend({ method: g("notifications/tasks/status"), params: q_ }),
  d5 = l$.extend({
    method: g("tasks/get"),
    params: M6.extend({ taskId: L() }),
  }),
  p5 = c$.merge(oX),
  i5 = l$.extend({
    method: g("tasks/result"),
    params: M6.extend({ taskId: L() }),
  }),
  s4$ = c$.loose(),
  n5 = nX.extend({ method: g("tasks/list") }),
  r5 = rX.extend({ tasks: $$(oX) }),
  o5 = l$.extend({
    method: g("tasks/cancel"),
    params: M6.extend({ taskId: L() }),
  }),
  gD = c$.merge(oX),
  hD = x({ uri: L(), mimeType: j$(L()), _meta: V$(L(), L$()).optional() }),
  uD = hD.extend({ text: L() }),
  $H = L().refine(
    ($) => {
      try {
        return (atob($), !0);
      } catch {
        return !1;
      }
    },
    { message: "Invalid Base64 string" },
  ),
  mD = hD.extend({ blob: $H }),
  aX = t$(["user", "assistant"]),
  Q8 = x({
    audience: $$(aX).optional(),
    priority: z$().min(0).max(1).optional(),
    lastModified: s0.datetime({ offset: !0 }).optional(),
  }),
  lD = x({
    ...X8.shape,
    ...iX.shape,
    uri: L(),
    description: j$(L()),
    mimeType: j$(L()),
    size: j$(z$()),
    annotations: Q8.optional(),
    _meta: j$(n$({})),
  }),
  D_ = x({
    ...X8.shape,
    ...iX.shape,
    uriTemplate: L(),
    description: j$(L()),
    mimeType: j$(L()),
    annotations: Q8.optional(),
    _meta: j$(n$({})),
  }),
  t5 = nX.extend({ method: g("resources/list") }),
  F_ = rX.extend({ resources: $$(lD) }),
  a5 = nX.extend({ method: g("resources/templates/list") }),
  j_ = rX.extend({ resourceTemplates: $$(D_) }),
  XH = M6.extend({ uri: L() }),
  L_ = XH,
  s5 = l$.extend({ method: g("resources/read"), params: L_ }),
  M_ = c$.extend({ contents: $$(N$([uD, mD])) }),
  A_ = S6.extend({
    method: g("notifications/resources/list_changed"),
    params: E6.optional(),
  }),
  I_ = XH,
  Z_ = l$.extend({ method: g("resources/subscribe"), params: I_ }),
  b_ = XH,
  R_ = l$.extend({ method: g("resources/unsubscribe"), params: b_ }),
  P_ = E6.extend({ uri: L() }),
  E_ = S6.extend({ method: g("notifications/resources/updated"), params: P_ }),
  S_ = x({ name: L(), description: j$(L()), required: j$(k$()) }),
  v_ = x({
    ...X8.shape,
    ...iX.shape,
    description: j$(L()),
    arguments: j$($$(S_)),
    _meta: j$(n$({})),
  }),
  e5 = nX.extend({ method: g("prompts/list") }),
  C_ = rX.extend({ prompts: $$(v_) }),
  k_ = M6.extend({ name: L(), arguments: V$(L(), L()).optional() }),
  $Y = l$.extend({ method: g("prompts/get"), params: k_ }),
  JH = x({
    type: g("text"),
    text: L(),
    annotations: Q8.optional(),
    _meta: V$(L(), L$()).optional(),
  }),
  QH = x({
    type: g("image"),
    data: $H,
    mimeType: L(),
    annotations: Q8.optional(),
    _meta: V$(L(), L$()).optional(),
  }),
  YH = x({
    type: g("audio"),
    data: $H,
    mimeType: L(),
    annotations: Q8.optional(),
    _meta: V$(L(), L$()).optional(),
  }),
  __ = x({
    type: g("tool_use"),
    name: L(),
    id: L(),
    input: V$(L(), L$()),
    _meta: V$(L(), L$()).optional(),
  }),
  x_ = x({
    type: g("resource"),
    resource: N$([uD, mD]),
    annotations: Q8.optional(),
    _meta: V$(L(), L$()).optional(),
  }),
  T_ = lD.extend({ type: g("resource_link") }),
  WH = N$([JH, QH, YH, T_, x_]),
  f_ = x({ role: aX, content: WH }),
  y_ = c$.extend({ description: L().optional(), messages: $$(f_) }),
  g_ = S6.extend({
    method: g("notifications/prompts/list_changed"),
    params: E6.optional(),
  }),
  h_ = x({
    title: L().optional(),
    readOnlyHint: k$().optional(),
    destructiveHint: k$().optional(),
    idempotentHint: k$().optional(),
    openWorldHint: k$().optional(),
  }),
  u_ = x({ taskSupport: t$(["required", "optional", "forbidden"]).optional() }),
  cD = x({
    ...X8.shape,
    ...iX.shape,
    description: L().optional(),
    inputSchema: x({
      type: g("object"),
      properties: V$(L(), y$).optional(),
      required: $$(L()).optional(),
    }).catchall(L$()),
    outputSchema: x({
      type: g("object"),
      properties: V$(L(), y$).optional(),
      required: $$(L()).optional(),
    })
      .catchall(L$())
      .optional(),
    annotations: h_.optional(),
    execution: u_.optional(),
    _meta: V$(L(), L$()).optional(),
  }),
  XY = nX.extend({ method: g("tools/list") }),
  m_ = rX.extend({ tools: $$(cD) }),
  JY = c$.extend({
    content: $$(WH).default([]),
    structuredContent: V$(L(), L$()).optional(),
    isError: k$().optional(),
  }),
  e4$ = JY.or(c$.extend({ toolResult: L$() })),
  l_ = dX.extend({ name: L(), arguments: V$(L(), L$()).optional() }),
  Y8 = l$.extend({ method: g("tools/call"), params: l_ }),
  c_ = S6.extend({
    method: g("notifications/tools/list_changed"),
    params: E6.optional(),
  }),
  $1$ = x({
    autoRefresh: k$().default(!0),
    debounceMs: z$().int().nonnegative().default(300),
  }),
  sX = t$([
    "debug",
    "info",
    "notice",
    "warning",
    "error",
    "critical",
    "alert",
    "emergency",
  ]),
  d_ = M6.extend({ level: sX }),
  zH = l$.extend({ method: g("logging/setLevel"), params: d_ }),
  p_ = E6.extend({ level: sX, logger: L().optional(), data: L$() }),
  i_ = S6.extend({ method: g("notifications/message"), params: p_ }),
  n_ = x({ name: L().optional() }),
  r_ = x({
    hints: $$(n_).optional(),
    costPriority: z$().min(0).max(1).optional(),
    speedPriority: z$().min(0).max(1).optional(),
    intelligencePriority: z$().min(0).max(1).optional(),
  }),
  o_ = x({ mode: t$(["auto", "required", "none"]).optional() }),
  t_ = x({
    type: g("tool_result"),
    toolUseId: L().describe(
      "The unique identifier for the corresponding tool call.",
    ),
    content: $$(WH).default([]),
    structuredContent: x({}).loose().optional(),
    isError: k$().optional(),
    _meta: V$(L(), L$()).optional(),
  }),
  a_ = x5("type", [JH, QH, YH]),
  y5 = x5("type", [JH, QH, YH, __, t_]),
  s_ = x({
    role: aX,
    content: N$([y5, $$(y5)]),
    _meta: V$(L(), L$()).optional(),
  }),
  e_ = dX.extend({
    messages: $$(s_),
    modelPreferences: r_.optional(),
    systemPrompt: L().optional(),
    includeContext: t$(["none", "thisServer", "allServers"]).optional(),
    temperature: z$().optional(),
    maxTokens: z$().int(),
    stopSequences: $$(L()).optional(),
    metadata: y$.optional(),
    tools: $$(cD).optional(),
    toolChoice: o_.optional(),
  }),
  $x = l$.extend({ method: g("sampling/createMessage"), params: e_ }),
  eX = c$.extend({
    model: L(),
    stopReason: j$(t$(["endTurn", "stopSequence", "maxTokens"]).or(L())),
    role: aX,
    content: a_,
  }),
  GH = c$.extend({
    model: L(),
    stopReason: j$(
      t$(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(L()),
    ),
    role: aX,
    content: N$([y5, $$(y5)]),
  }),
  Xx = x({
    type: g("boolean"),
    title: L().optional(),
    description: L().optional(),
    default: k$().optional(),
  }),
  Jx = x({
    type: g("string"),
    title: L().optional(),
    description: L().optional(),
    minLength: z$().optional(),
    maxLength: z$().optional(),
    format: t$(["email", "uri", "date", "date-time"]).optional(),
    default: L().optional(),
  }),
  Qx = x({
    type: t$(["number", "integer"]),
    title: L().optional(),
    description: L().optional(),
    minimum: z$().optional(),
    maximum: z$().optional(),
    default: z$().optional(),
  }),
  Yx = x({
    type: g("string"),
    title: L().optional(),
    description: L().optional(),
    enum: $$(L()),
    default: L().optional(),
  }),
  Wx = x({
    type: g("string"),
    title: L().optional(),
    description: L().optional(),
    oneOf: $$(x({ const: L(), title: L() })),
    default: L().optional(),
  }),
  zx = x({
    type: g("string"),
    title: L().optional(),
    description: L().optional(),
    enum: $$(L()),
    enumNames: $$(L()).optional(),
    default: L().optional(),
  }),
  Gx = N$([Yx, Wx]),
  Ux = x({
    type: g("array"),
    title: L().optional(),
    description: L().optional(),
    minItems: z$().optional(),
    maxItems: z$().optional(),
    items: x({ type: g("string"), enum: $$(L()) }),
    default: $$(L()).optional(),
  }),
  Hx = x({
    type: g("array"),
    title: L().optional(),
    description: L().optional(),
    minItems: z$().optional(),
    maxItems: z$().optional(),
    items: x({ anyOf: $$(x({ const: L(), title: L() })) }),
    default: $$(L()).optional(),
  }),
  Kx = N$([Ux, Hx]),
  Nx = N$([zx, Gx, Kx]),
  Vx = N$([Nx, Xx, Jx, Qx]),
  Ox = dX.extend({
    mode: g("form").optional(),
    message: L(),
    requestedSchema: x({
      type: g("object"),
      properties: V$(L(), Vx),
      required: $$(L()).optional(),
    }),
  }),
  wx = dX.extend({
    mode: g("url"),
    message: L(),
    elicitationId: L(),
    url: L().url(),
  }),
  Bx = N$([Ox, wx]),
  qx = l$.extend({ method: g("elicitation/create"), params: Bx }),
  Dx = E6.extend({ elicitationId: L() }),
  Fx = S6.extend({
    method: g("notifications/elicitation/complete"),
    params: Dx,
  }),
  W8 = c$.extend({
    action: t$(["accept", "decline", "cancel"]),
    content: f5(
      ($) => ($ === null ? void 0 : $),
      V$(L(), N$([L(), z$(), k$(), $$(L())])).optional(),
    ),
  }),
  jx = x({ type: g("ref/resource"), uri: L() });
var Lx = x({ type: g("ref/prompt"), name: L() }),
  Mx = M6.extend({
    ref: N$([Lx, jx]),
    argument: x({ name: L(), value: L() }),
    context: x({ arguments: V$(L(), L()).optional() }).optional(),
  }),
  QY = l$.extend({ method: g("completion/complete"), params: Mx });
function dD($) {
  if ($.params.ref.type !== "ref/prompt")
    throw TypeError(
      `Expected CompleteRequestPrompt, but got ${$.params.ref.type}`,
    );
}
function pD($) {
  if ($.params.ref.type !== "ref/resource")
    throw TypeError(
      `Expected CompleteRequestResourceTemplate, but got ${$.params.ref.type}`,
    );
}
var Ax = c$.extend({
    completion: n$({
      values: $$(L()).max(100),
      total: j$(z$().int()),
      hasMore: j$(k$()),
    }),
  }),
  Ix = x({
    uri: L().startsWith("file://"),
    name: L().optional(),
    _meta: V$(L(), L$()).optional(),
  }),
  Zx = l$.extend({ method: g("roots/list"), params: M6.optional() }),
  UH = c$.extend({ roots: $$(Ix) }),
  bx = S6.extend({
    method: g("notifications/roots/list_changed"),
    params: E6.optional(),
  }),
  X1$ = N$([
    l5,
    sU,
    QY,
    zH,
    $Y,
    e5,
    t5,
    a5,
    s5,
    Z_,
    R_,
    Y8,
    XY,
    d5,
    i5,
    n5,
    o5,
  ]),
  J1$ = N$([m5, c5, eU, bx, tX]),
  Q1$ = N$([u5, eX, GH, W8, UH, p5, r5, J8]),
  Y1$ = N$([l5, $x, qx, Zx, d5, i5, n5, o5]),
  W1$ = N$([m5, c5, i_, E_, A_, c_, g_, tX, Fx]),
  z1$ = N$([u5, N_, Ax, y_, C_, F_, j_, M_, JY, m_, p5, r5, J8]);
class h extends Error {
  constructor($, X, J) {
    super(`MCP error ${$}: ${X}`);
    ((this.code = $), (this.data = J), (this.name = "McpError"));
  }
  static fromError($, X, J) {
    if ($ === m.UrlElicitationRequired && J) {
      let Y = J;
      if (Y.elicitations) return new iD(Y.elicitations, X);
    }
    return new h($, X, J);
  }
}
class iD extends h {
  constructor($, X = `URL elicitation${$.length > 1 ? "s" : ""} required`) {
    super(m.UrlElicitationRequired, X, { elicitations: $ });
  }
  get elicitations() {
    return this.data?.elicitations ?? [];
  }
}
function z1($) {
  return $ === "completed" || $ === "failed" || $ === "cancelled";
}
var rD = Symbol("Let zodToJsonSchema decide on which parser to use");
var nD = {
    name: void 0,
    $refStrategy: "root",
    basePath: ["#"],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    allowedAdditionalProperties: !0,
    rejectedAdditionalProperties: !1,
    definitionPath: "definitions",
    target: "jsonSchema7",
    strictUnions: !1,
    definitions: {},
    errorMessages: !1,
    markdownDescription: !1,
    patternStrategy: "escape",
    applyRegexFlags: !1,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref",
    openAiAnyTypeName: "OpenAiAnyType",
  },
  oD = ($) => (typeof $ === "string" ? { ...nD, name: $ } : { ...nD, ...$ });
var tD = ($) => {
  let X = oD($),
    J =
      X.name !== void 0
        ? [...X.basePath, X.definitionPath, X.name]
        : X.basePath;
  return {
    ...X,
    flags: { hasReferencedOpenAiAnyType: !1 },
    currentPath: J,
    propertyPath: void 0,
    seen: new Map(
      Object.entries(X.definitions).map(([Y, Q]) => [
        Q._def,
        {
          def: Q._def,
          path: [...X.basePath, X.definitionPath, Y],
          jsonSchema: void 0,
        },
      ]),
    ),
  };
};
function HH($, X, J, Y) {
  if (!Y?.errorMessages) return;
  if (J) $.errorMessage = { ...$.errorMessage, [X]: J };
}
function J$($, X, J, Y, Q) {
  (($[X] = J), HH($, X, Y, Q));
}
var YY = ($, X) => {
  let J = 0;
  for (; J < $.length && J < X.length; J++) if ($[J] !== X[J]) break;
  return [($.length - J).toString(), ...X.slice(J)].join("/");
};
function Z$($) {
  if ($.target !== "openAi") return {};
  let X = [...$.basePath, $.definitionPath, $.openAiAnyTypeName];
  return (
    ($.flags.hasReferencedOpenAiAnyType = !0),
    { $ref: $.$refStrategy === "relative" ? YY(X, $.currentPath) : X.join("/") }
  );
}
function aD($, X) {
  let J = { type: "array" };
  if ($.type?._def && $.type?._def?.typeName !== R.ZodAny)
    J.items = d($.type._def, {
      ...X,
      currentPath: [...X.currentPath, "items"],
    });
  if ($.minLength) J$(J, "minItems", $.minLength.value, $.minLength.message, X);
  if ($.maxLength) J$(J, "maxItems", $.maxLength.value, $.maxLength.message, X);
  if ($.exactLength)
    (J$(J, "minItems", $.exactLength.value, $.exactLength.message, X),
      J$(J, "maxItems", $.exactLength.value, $.exactLength.message, X));
  return J;
}
function sD($, X) {
  let J = { type: "integer", format: "int64" };
  if (!$.checks) return J;
  for (let Y of $.checks)
    switch (Y.kind) {
      case "min":
        if (X.target === "jsonSchema7")
          if (Y.inclusive) J$(J, "minimum", Y.value, Y.message, X);
          else J$(J, "exclusiveMinimum", Y.value, Y.message, X);
        else {
          if (!Y.inclusive) J.exclusiveMinimum = !0;
          J$(J, "minimum", Y.value, Y.message, X);
        }
        break;
      case "max":
        if (X.target === "jsonSchema7")
          if (Y.inclusive) J$(J, "maximum", Y.value, Y.message, X);
          else J$(J, "exclusiveMaximum", Y.value, Y.message, X);
        else {
          if (!Y.inclusive) J.exclusiveMaximum = !0;
          J$(J, "maximum", Y.value, Y.message, X);
        }
        break;
      case "multipleOf":
        J$(J, "multipleOf", Y.value, Y.message, X);
        break;
    }
  return J;
}
function eD() {
  return { type: "boolean" };
}
function WY($, X) {
  return d($.type._def, X);
}
var $F = ($, X) => {
  return d($.innerType._def, X);
};
function KH($, X, J) {
  let Y = J ?? X.dateStrategy;
  if (Array.isArray(Y)) return { anyOf: Y.map((Q, W) => KH($, X, Q)) };
  switch (Y) {
    case "string":
    case "format:date-time":
      return { type: "string", format: "date-time" };
    case "format:date":
      return { type: "string", format: "date" };
    case "integer":
      return Rx($, X);
  }
}
var Rx = ($, X) => {
  let J = { type: "integer", format: "unix-time" };
  if (X.target === "openApi3") return J;
  for (let Y of $.checks)
    switch (Y.kind) {
      case "min":
        J$(J, "minimum", Y.value, Y.message, X);
        break;
      case "max":
        J$(J, "maximum", Y.value, Y.message, X);
        break;
    }
  return J;
};
function XF($, X) {
  return { ...d($.innerType._def, X), default: $.defaultValue() };
}
function JF($, X) {
  return X.effectStrategy === "input" ? d($.schema._def, X) : Z$(X);
}
function QF($) {
  return { type: "string", enum: Array.from($.values) };
}
var Px = ($) => {
  if ("type" in $ && $.type === "string") return !1;
  return "allOf" in $;
};
function YF($, X) {
  let J = [
      d($.left._def, { ...X, currentPath: [...X.currentPath, "allOf", "0"] }),
      d($.right._def, { ...X, currentPath: [...X.currentPath, "allOf", "1"] }),
    ].filter((W) => !!W),
    Y =
      X.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0,
    Q = [];
  return (
    J.forEach((W) => {
      if (Px(W)) {
        if ((Q.push(...W.allOf), W.unevaluatedProperties === void 0))
          Y = void 0;
      } else {
        let z = W;
        if ("additionalProperties" in W && W.additionalProperties === !1) {
          let { additionalProperties: G, ...U } = W;
          z = U;
        } else Y = void 0;
        Q.push(z);
      }
    }),
    Q.length ? { allOf: Q, ...Y } : void 0
  );
}
function WF($, X) {
  let J = typeof $.value;
  if (J !== "bigint" && J !== "number" && J !== "boolean" && J !== "string")
    return { type: Array.isArray($.value) ? "array" : "object" };
  if (X.target === "openApi3")
    return { type: J === "bigint" ? "integer" : J, enum: [$.value] };
  return { type: J === "bigint" ? "integer" : J, const: $.value };
}
var NH = void 0,
  l6 = {
    cuid: /^[cC][^\s-]{8,}$/,
    cuid2: /^[0-9a-z]+$/,
    ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
    email:
      /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
    emoji: () => {
      if (NH === void 0)
        NH = RegExp(
          "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
          "u",
        );
      return NH;
    },
    uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    ipv4Cidr:
      /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    ipv6Cidr:
      /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    base64url:
      /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    nanoid: /^[a-zA-Z0-9_-]{21}$/,
    jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  };
function zY($, X) {
  let J = { type: "string" };
  if ($.checks)
    for (let Y of $.checks)
      switch (Y.kind) {
        case "min":
          J$(
            J,
            "minLength",
            typeof J.minLength === "number"
              ? Math.max(J.minLength, Y.value)
              : Y.value,
            Y.message,
            X,
          );
          break;
        case "max":
          J$(
            J,
            "maxLength",
            typeof J.maxLength === "number"
              ? Math.min(J.maxLength, Y.value)
              : Y.value,
            Y.message,
            X,
          );
          break;
        case "email":
          switch (X.emailStrategy) {
            case "format:email":
              c6(J, "email", Y.message, X);
              break;
            case "format:idn-email":
              c6(J, "idn-email", Y.message, X);
              break;
            case "pattern:zod":
              a$(J, l6.email, Y.message, X);
              break;
          }
          break;
        case "url":
          c6(J, "uri", Y.message, X);
          break;
        case "uuid":
          c6(J, "uuid", Y.message, X);
          break;
        case "regex":
          a$(J, Y.regex, Y.message, X);
          break;
        case "cuid":
          a$(J, l6.cuid, Y.message, X);
          break;
        case "cuid2":
          a$(J, l6.cuid2, Y.message, X);
          break;
        case "startsWith":
          a$(J, RegExp(`^${VH(Y.value, X)}`), Y.message, X);
          break;
        case "endsWith":
          a$(J, RegExp(`${VH(Y.value, X)}$`), Y.message, X);
          break;
        case "datetime":
          c6(J, "date-time", Y.message, X);
          break;
        case "date":
          c6(J, "date", Y.message, X);
          break;
        case "time":
          c6(J, "time", Y.message, X);
          break;
        case "duration":
          c6(J, "duration", Y.message, X);
          break;
        case "length":
          (J$(
            J,
            "minLength",
            typeof J.minLength === "number"
              ? Math.max(J.minLength, Y.value)
              : Y.value,
            Y.message,
            X,
          ),
            J$(
              J,
              "maxLength",
              typeof J.maxLength === "number"
                ? Math.min(J.maxLength, Y.value)
                : Y.value,
              Y.message,
              X,
            ));
          break;
        case "includes": {
          a$(J, RegExp(VH(Y.value, X)), Y.message, X);
          break;
        }
        case "ip": {
          if (Y.version !== "v6") c6(J, "ipv4", Y.message, X);
          if (Y.version !== "v4") c6(J, "ipv6", Y.message, X);
          break;
        }
        case "base64url":
          a$(J, l6.base64url, Y.message, X);
          break;
        case "jwt":
          a$(J, l6.jwt, Y.message, X);
          break;
        case "cidr": {
          if (Y.version !== "v6") a$(J, l6.ipv4Cidr, Y.message, X);
          if (Y.version !== "v4") a$(J, l6.ipv6Cidr, Y.message, X);
          break;
        }
        case "emoji":
          a$(J, l6.emoji(), Y.message, X);
          break;
        case "ulid": {
          a$(J, l6.ulid, Y.message, X);
          break;
        }
        case "base64": {
          switch (X.base64Strategy) {
            case "format:binary": {
              c6(J, "binary", Y.message, X);
              break;
            }
            case "contentEncoding:base64": {
              J$(J, "contentEncoding", "base64", Y.message, X);
              break;
            }
            case "pattern:zod": {
              a$(J, l6.base64, Y.message, X);
              break;
            }
          }
          break;
        }
        case "nanoid":
          a$(J, l6.nanoid, Y.message, X);
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
          ((Q) => {})(Y);
      }
  return J;
}
function VH($, X) {
  return X.patternStrategy === "escape" ? Sx($) : $;
}
var Ex = new Set(
  "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789",
);
function Sx($) {
  let X = "";
  for (let J = 0; J < $.length; J++) {
    if (!Ex.has($[J])) X += "\\";
    X += $[J];
  }
  return X;
}
function c6($, X, J, Y) {
  if ($.format || $.anyOf?.some((Q) => Q.format)) {
    if (!$.anyOf) $.anyOf = [];
    if ($.format) {
      if (
        ($.anyOf.push({
          format: $.format,
          ...($.errorMessage &&
            Y.errorMessages && {
              errorMessage: { format: $.errorMessage.format },
            }),
        }),
        delete $.format,
        $.errorMessage)
      ) {
        if (
          (delete $.errorMessage.format,
          Object.keys($.errorMessage).length === 0)
        )
          delete $.errorMessage;
      }
    }
    $.anyOf.push({
      format: X,
      ...(J && Y.errorMessages && { errorMessage: { format: J } }),
    });
  } else J$($, "format", X, J, Y);
}
function a$($, X, J, Y) {
  if ($.pattern || $.allOf?.some((Q) => Q.pattern)) {
    if (!$.allOf) $.allOf = [];
    if ($.pattern) {
      if (
        ($.allOf.push({
          pattern: $.pattern,
          ...($.errorMessage &&
            Y.errorMessages && {
              errorMessage: { pattern: $.errorMessage.pattern },
            }),
        }),
        delete $.pattern,
        $.errorMessage)
      ) {
        if (
          (delete $.errorMessage.pattern,
          Object.keys($.errorMessage).length === 0)
        )
          delete $.errorMessage;
      }
    }
    $.allOf.push({
      pattern: zF(X, Y),
      ...(J && Y.errorMessages && { errorMessage: { pattern: J } }),
    });
  } else J$($, "pattern", zF(X, Y), J, Y);
}
function zF($, X) {
  if (!X.applyRegexFlags || !$.flags) return $.source;
  let J = {
      i: $.flags.includes("i"),
      m: $.flags.includes("m"),
      s: $.flags.includes("s"),
    },
    Y = J.i ? $.source.toLowerCase() : $.source,
    Q = "",
    W = !1,
    z = !1,
    G = !1;
  for (let U = 0; U < Y.length; U++) {
    if (W) {
      ((Q += Y[U]), (W = !1));
      continue;
    }
    if (J.i) {
      if (z) {
        if (Y[U].match(/[a-z]/)) {
          if (G)
            ((Q += Y[U]), (Q += `${Y[U - 2]}-${Y[U]}`.toUpperCase()), (G = !1));
          else if (Y[U + 1] === "-" && Y[U + 2]?.match(/[a-z]/))
            ((Q += Y[U]), (G = !0));
          else Q += `${Y[U]}${Y[U].toUpperCase()}`;
          continue;
        }
      } else if (Y[U].match(/[a-z]/)) {
        Q += `[${Y[U]}${Y[U].toUpperCase()}]`;
        continue;
      }
    }
    if (J.m) {
      if (Y[U] === "^") {
        Q += `(^|(?<=[\r
]))`;
        continue;
      } else if (Y[U] === "$") {
        Q += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (J.s && Y[U] === ".") {
      Q += z
        ? `${Y[U]}\r
`
        : `[${Y[U]}\r
]`;
      continue;
    }
    if (((Q += Y[U]), Y[U] === "\\")) W = !0;
    else if (z && Y[U] === "]") z = !1;
    else if (!z && Y[U] === "[") z = !0;
  }
  try {
    new RegExp(Q);
  } catch {
    return (
      console.warn(
        `Could not convert regex pattern at ${X.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`,
      ),
      $.source
    );
  }
  return Q;
}
function GY($, X) {
  if (X.target === "openAi")
    console.warn(
      "Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.",
    );
  if (X.target === "openApi3" && $.keyType?._def.typeName === R.ZodEnum)
    return {
      type: "object",
      required: $.keyType._def.values,
      properties: $.keyType._def.values.reduce(
        (Y, Q) => ({
          ...Y,
          [Q]:
            d($.valueType._def, {
              ...X,
              currentPath: [...X.currentPath, "properties", Q],
            }) ?? Z$(X),
        }),
        {},
      ),
      additionalProperties: X.rejectedAdditionalProperties,
    };
  let J = {
    type: "object",
    additionalProperties:
      d($.valueType._def, {
        ...X,
        currentPath: [...X.currentPath, "additionalProperties"],
      }) ?? X.allowedAdditionalProperties,
  };
  if (X.target === "openApi3") return J;
  if (
    $.keyType?._def.typeName === R.ZodString &&
    $.keyType._def.checks?.length
  ) {
    let { type: Y, ...Q } = zY($.keyType._def, X);
    return { ...J, propertyNames: Q };
  } else if ($.keyType?._def.typeName === R.ZodEnum)
    return { ...J, propertyNames: { enum: $.keyType._def.values } };
  else if (
    $.keyType?._def.typeName === R.ZodBranded &&
    $.keyType._def.type._def.typeName === R.ZodString &&
    $.keyType._def.type._def.checks?.length
  ) {
    let { type: Y, ...Q } = WY($.keyType._def, X);
    return { ...J, propertyNames: Q };
  }
  return J;
}
function GF($, X) {
  if (X.mapStrategy === "record") return GY($, X);
  let J =
      d($.keyType._def, {
        ...X,
        currentPath: [...X.currentPath, "items", "items", "0"],
      }) || Z$(X),
    Y =
      d($.valueType._def, {
        ...X,
        currentPath: [...X.currentPath, "items", "items", "1"],
      }) || Z$(X);
  return {
    type: "array",
    maxItems: 125,
    items: { type: "array", items: [J, Y], minItems: 2, maxItems: 2 },
  };
}
function UF($) {
  let X = $.values,
    Y = Object.keys($.values)
      .filter((W) => {
        return typeof X[X[W]] !== "number";
      })
      .map((W) => X[W]),
    Q = Array.from(new Set(Y.map((W) => typeof W)));
  return {
    type:
      Q.length === 1
        ? Q[0] === "string"
          ? "string"
          : "number"
        : ["string", "number"],
    enum: Y,
  };
}
function HF($) {
  return $.target === "openAi"
    ? void 0
    : { not: Z$({ ...$, currentPath: [...$.currentPath, "not"] }) };
}
function KF($) {
  return $.target === "openApi3"
    ? { enum: ["null"], nullable: !0 }
    : { type: "null" };
}
var $J = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null",
};
function VF($, X) {
  if (X.target === "openApi3") return NF($, X);
  let J = $.options instanceof Map ? Array.from($.options.values()) : $.options;
  if (
    J.every(
      (Y) => Y._def.typeName in $J && (!Y._def.checks || !Y._def.checks.length),
    )
  ) {
    let Y = J.reduce((Q, W) => {
      let z = $J[W._def.typeName];
      return z && !Q.includes(z) ? [...Q, z] : Q;
    }, []);
    return { type: Y.length > 1 ? Y : Y[0] };
  } else if (
    J.every((Y) => Y._def.typeName === "ZodLiteral" && !Y.description)
  ) {
    let Y = J.reduce((Q, W) => {
      let z = typeof W._def.value;
      switch (z) {
        case "string":
        case "number":
        case "boolean":
          return [...Q, z];
        case "bigint":
          return [...Q, "integer"];
        case "object":
          if (W._def.value === null) return [...Q, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return Q;
      }
    }, []);
    if (Y.length === J.length) {
      let Q = Y.filter((W, z, G) => G.indexOf(W) === z);
      return {
        type: Q.length > 1 ? Q : Q[0],
        enum: J.reduce((W, z) => {
          return W.includes(z._def.value) ? W : [...W, z._def.value];
        }, []),
      };
    }
  } else if (J.every((Y) => Y._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: J.reduce(
        (Y, Q) => [...Y, ...Q._def.values.filter((W) => !Y.includes(W))],
        [],
      ),
    };
  return NF($, X);
}
var NF = ($, X) => {
  let J = (
    $.options instanceof Map ? Array.from($.options.values()) : $.options
  )
    .map((Y, Q) =>
      d(Y._def, { ...X, currentPath: [...X.currentPath, "anyOf", `${Q}`] }),
    )
    .filter(
      (Y) =>
        !!Y &&
        (!X.strictUnions ||
          (typeof Y === "object" && Object.keys(Y).length > 0)),
    );
  return J.length ? { anyOf: J } : void 0;
};
function OF($, X) {
  if (
    ["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(
      $.innerType._def.typeName,
    ) &&
    (!$.innerType._def.checks || !$.innerType._def.checks.length)
  ) {
    if (X.target === "openApi3")
      return { type: $J[$.innerType._def.typeName], nullable: !0 };
    return { type: [$J[$.innerType._def.typeName], "null"] };
  }
  if (X.target === "openApi3") {
    let Y = d($.innerType._def, { ...X, currentPath: [...X.currentPath] });
    if (Y && "$ref" in Y) return { allOf: [Y], nullable: !0 };
    return Y && { ...Y, nullable: !0 };
  }
  let J = d($.innerType._def, {
    ...X,
    currentPath: [...X.currentPath, "anyOf", "0"],
  });
  return J && { anyOf: [J, { type: "null" }] };
}
function wF($, X) {
  let J = { type: "number" };
  if (!$.checks) return J;
  for (let Y of $.checks)
    switch (Y.kind) {
      case "int":
        ((J.type = "integer"), HH(J, "type", Y.message, X));
        break;
      case "min":
        if (X.target === "jsonSchema7")
          if (Y.inclusive) J$(J, "minimum", Y.value, Y.message, X);
          else J$(J, "exclusiveMinimum", Y.value, Y.message, X);
        else {
          if (!Y.inclusive) J.exclusiveMinimum = !0;
          J$(J, "minimum", Y.value, Y.message, X);
        }
        break;
      case "max":
        if (X.target === "jsonSchema7")
          if (Y.inclusive) J$(J, "maximum", Y.value, Y.message, X);
          else J$(J, "exclusiveMaximum", Y.value, Y.message, X);
        else {
          if (!Y.inclusive) J.exclusiveMaximum = !0;
          J$(J, "maximum", Y.value, Y.message, X);
        }
        break;
      case "multipleOf":
        J$(J, "multipleOf", Y.value, Y.message, X);
        break;
    }
  return J;
}
function BF($, X) {
  let J = X.target === "openAi",
    Y = { type: "object", properties: {} },
    Q = [],
    W = $.shape();
  for (let G in W) {
    let U = W[G];
    if (U === void 0 || U._def === void 0) continue;
    let H = Cx(U);
    if (H && J) {
      if (U._def.typeName === "ZodOptional") U = U._def.innerType;
      if (!U.isNullable()) U = U.nullable();
      H = !1;
    }
    let K = d(U._def, {
      ...X,
      currentPath: [...X.currentPath, "properties", G],
      propertyPath: [...X.currentPath, "properties", G],
    });
    if (K === void 0) continue;
    if (((Y.properties[G] = K), !H)) Q.push(G);
  }
  if (Q.length) Y.required = Q;
  let z = vx($, X);
  if (z !== void 0) Y.additionalProperties = z;
  return Y;
}
function vx($, X) {
  if ($.catchall._def.typeName !== "ZodNever")
    return d($.catchall._def, {
      ...X,
      currentPath: [...X.currentPath, "additionalProperties"],
    });
  switch ($.unknownKeys) {
    case "passthrough":
      return X.allowedAdditionalProperties;
    case "strict":
      return X.rejectedAdditionalProperties;
    case "strip":
      return X.removeAdditionalStrategy === "strict"
        ? X.allowedAdditionalProperties
        : X.rejectedAdditionalProperties;
  }
}
function Cx($) {
  try {
    return $.isOptional();
  } catch {
    return !0;
  }
}
var qF = ($, X) => {
  if (X.currentPath.toString() === X.propertyPath?.toString())
    return d($.innerType._def, X);
  let J = d($.innerType._def, {
    ...X,
    currentPath: [...X.currentPath, "anyOf", "1"],
  });
  return J ? { anyOf: [{ not: Z$(X) }, J] } : Z$(X);
};
var DF = ($, X) => {
  if (X.pipeStrategy === "input") return d($.in._def, X);
  else if (X.pipeStrategy === "output") return d($.out._def, X);
  let J = d($.in._def, { ...X, currentPath: [...X.currentPath, "allOf", "0"] }),
    Y = d($.out._def, {
      ...X,
      currentPath: [...X.currentPath, "allOf", J ? "1" : "0"],
    });
  return { allOf: [J, Y].filter((Q) => Q !== void 0) };
};
function FF($, X) {
  return d($.type._def, X);
}
function jF($, X) {
  let Y = {
    type: "array",
    uniqueItems: !0,
    items: d($.valueType._def, {
      ...X,
      currentPath: [...X.currentPath, "items"],
    }),
  };
  if ($.minSize) J$(Y, "minItems", $.minSize.value, $.minSize.message, X);
  if ($.maxSize) J$(Y, "maxItems", $.maxSize.value, $.maxSize.message, X);
  return Y;
}
function LF($, X) {
  if ($.rest)
    return {
      type: "array",
      minItems: $.items.length,
      items: $.items
        .map((J, Y) =>
          d(J._def, { ...X, currentPath: [...X.currentPath, "items", `${Y}`] }),
        )
        .reduce((J, Y) => (Y === void 0 ? J : [...J, Y]), []),
      additionalItems: d($.rest._def, {
        ...X,
        currentPath: [...X.currentPath, "additionalItems"],
      }),
    };
  else
    return {
      type: "array",
      minItems: $.items.length,
      maxItems: $.items.length,
      items: $.items
        .map((J, Y) =>
          d(J._def, { ...X, currentPath: [...X.currentPath, "items", `${Y}`] }),
        )
        .reduce((J, Y) => (Y === void 0 ? J : [...J, Y]), []),
    };
}
function MF($) {
  return { not: Z$($) };
}
function AF($) {
  return Z$($);
}
var IF = ($, X) => {
  return d($.innerType._def, X);
};
var ZF = ($, X, J) => {
  switch (X) {
    case R.ZodString:
      return zY($, J);
    case R.ZodNumber:
      return wF($, J);
    case R.ZodObject:
      return BF($, J);
    case R.ZodBigInt:
      return sD($, J);
    case R.ZodBoolean:
      return eD();
    case R.ZodDate:
      return KH($, J);
    case R.ZodUndefined:
      return MF(J);
    case R.ZodNull:
      return KF(J);
    case R.ZodArray:
      return aD($, J);
    case R.ZodUnion:
    case R.ZodDiscriminatedUnion:
      return VF($, J);
    case R.ZodIntersection:
      return YF($, J);
    case R.ZodTuple:
      return LF($, J);
    case R.ZodRecord:
      return GY($, J);
    case R.ZodLiteral:
      return WF($, J);
    case R.ZodEnum:
      return QF($);
    case R.ZodNativeEnum:
      return UF($);
    case R.ZodNullable:
      return OF($, J);
    case R.ZodOptional:
      return qF($, J);
    case R.ZodMap:
      return GF($, J);
    case R.ZodSet:
      return jF($, J);
    case R.ZodLazy:
      return () => $.getter()._def;
    case R.ZodPromise:
      return FF($, J);
    case R.ZodNaN:
    case R.ZodNever:
      return HF(J);
    case R.ZodEffects:
      return JF($, J);
    case R.ZodAny:
      return Z$(J);
    case R.ZodUnknown:
      return AF(J);
    case R.ZodDefault:
      return XF($, J);
    case R.ZodBranded:
      return WY($, J);
    case R.ZodReadonly:
      return IF($, J);
    case R.ZodCatch:
      return $F($, J);
    case R.ZodPipeline:
      return DF($, J);
    case R.ZodFunction:
    case R.ZodVoid:
    case R.ZodSymbol:
      return;
    default:
      return ((Y) => {
        return;
      })(X);
  }
};
function d($, X, J = !1) {
  let Y = X.seen.get($);
  if (X.override) {
    let G = X.override?.($, X, Y, J);
    if (G !== rD) return G;
  }
  if (Y && !J) {
    let G = kx(Y, X);
    if (G !== void 0) return G;
  }
  let Q = { def: $, path: X.currentPath, jsonSchema: void 0 };
  X.seen.set($, Q);
  let W = ZF($, $.typeName, X),
    z = typeof W === "function" ? d(W(), X) : W;
  if (z) _x($, X, z);
  if (X.postProcess) {
    let G = X.postProcess(z, $, X);
    return ((Q.jsonSchema = z), G);
  }
  return ((Q.jsonSchema = z), z);
}
var kx = ($, X) => {
    switch (X.$refStrategy) {
      case "root":
        return { $ref: $.path.join("/") };
      case "relative":
        return { $ref: YY(X.currentPath, $.path) };
      case "none":
      case "seen": {
        if (
          $.path.length < X.currentPath.length &&
          $.path.every((J, Y) => X.currentPath[Y] === J)
        )
          return (
            console.warn(
              `Recursive reference detected at ${X.currentPath.join("/")}! Defaulting to any`,
            ),
            Z$(X)
          );
        return X.$refStrategy === "seen" ? Z$(X) : void 0;
      }
    }
  },
  _x = ($, X, J) => {
    if ($.description) {
      if (((J.description = $.description), X.markdownDescription))
        J.markdownDescription = $.description;
    }
    return J;
  };
var OH = ($, X) => {
  let J = tD(X),
    Y =
      typeof X === "object" && X.definitions
        ? Object.entries(X.definitions).reduce(
            (U, [H, K]) => ({
              ...U,
              [H]:
                d(
                  K._def,
                  { ...J, currentPath: [...J.basePath, J.definitionPath, H] },
                  !0,
                ) ?? Z$(J),
            }),
            {},
          )
        : void 0,
    Q =
      typeof X === "string"
        ? X
        : X?.nameStrategy === "title"
          ? void 0
          : X?.name,
    W =
      d(
        $._def,
        Q === void 0
          ? J
          : { ...J, currentPath: [...J.basePath, J.definitionPath, Q] },
        !1,
      ) ?? Z$(J),
    z =
      typeof X === "object" && X.name !== void 0 && X.nameStrategy === "title"
        ? X.name
        : void 0;
  if (z !== void 0) W.title = z;
  if (J.flags.hasReferencedOpenAiAnyType) {
    if (!Y) Y = {};
    if (!Y[J.openAiAnyTypeName])
      Y[J.openAiAnyTypeName] = {
        type: ["string", "number", "integer", "boolean", "array", "null"],
        items: {
          $ref:
            J.$refStrategy === "relative"
              ? "1"
              : [...J.basePath, J.definitionPath, J.openAiAnyTypeName].join(
                  "/",
                ),
        },
      };
  }
  let G =
    Q === void 0
      ? Y
        ? { ...W, [J.definitionPath]: Y }
        : W
      : {
          $ref: [
            ...(J.$refStrategy === "relative" ? [] : J.basePath),
            J.definitionPath,
            Q,
          ].join("/"),
          [J.definitionPath]: { ...Y, [Q]: W },
        };
  if (J.target === "jsonSchema7")
    G.$schema = "http://json-schema.org/draft-07/schema#";
  else if (J.target === "jsonSchema2019-09" || J.target === "openAi")
    G.$schema = "https://json-schema.org/draft/2019-09/schema#";
  if (
    J.target === "openAi" &&
    ("anyOf" in G ||
      "oneOf" in G ||
      "allOf" in G ||
      ("type" in G && Array.isArray(G.type)))
  )
    console.warn(
      "Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.",
    );
  return G;
};
function xx($) {
  if (!$) return "draft-7";
  if ($ === "jsonSchema7" || $ === "draft-7") return "draft-7";
  if ($ === "jsonSchema2019-09" || $ === "draft-2020-12")
    return "draft-2020-12";
  return "draft-7";
}
function wH($, X) {
  if (P6($))
    return t0($, { target: xx(X?.target), io: X?.pipeStrategy ?? "input" });
  return OH($, {
    strictUnions: X?.strictUnions ?? !0,
    pipeStrategy: X?.pipeStrategy ?? "input",
  });
}
function BH($) {
  let J = Q1($)?.method;
  if (!J) throw Error("Schema is missing a method literal");
  let Y = A5(J);
  if (typeof Y !== "string")
    throw Error("Schema method literal must be a string");
  return Y;
}
function qH($, X) {
  let J = J1($, X);
  if (!J.success) throw J.error;
  return J.data;
}
var Tx = 60000;
class DH {
  constructor($) {
    if (
      ((this._options = $),
      (this._requestMessageId = 0),
      (this._requestHandlers = new Map()),
      (this._requestHandlerAbortControllers = new Map()),
      (this._notificationHandlers = new Map()),
      (this._responseHandlers = new Map()),
      (this._progressHandlers = new Map()),
      (this._timeoutInfo = new Map()),
      (this._pendingDebouncedNotifications = new Set()),
      (this._taskProgressTokens = new Map()),
      (this._requestResolvers = new Map()),
      this.setNotificationHandler(m5, (X) => {
        this._oncancel(X);
      }),
      this.setNotificationHandler(c5, (X) => {
        this._onprogress(X);
      }),
      this.setRequestHandler(l5, (X) => ({})),
      (this._taskStore = $?.taskStore),
      (this._taskMessageQueue = $?.taskMessageQueue),
      this._taskStore)
    )
      (this.setRequestHandler(d5, async (X, J) => {
        let Y = await this._taskStore.getTask(X.params.taskId, J.sessionId);
        if (!Y)
          throw new h(
            m.InvalidParams,
            "Failed to retrieve task: Task not found",
          );
        return { ...Y };
      }),
        this.setRequestHandler(i5, async (X, J) => {
          let Y = async () => {
            let Q = X.params.taskId;
            if (this._taskMessageQueue) {
              let z;
              while (
                (z = await this._taskMessageQueue.dequeue(Q, J.sessionId))
              ) {
                if (z.type === "response" || z.type === "error") {
                  let G = z.message,
                    U = G.id,
                    H = this._requestResolvers.get(U);
                  if (H)
                    if (
                      (this._requestResolvers.delete(U), z.type === "response")
                    )
                      H(G);
                    else {
                      let K = G,
                        N = new h(K.error.code, K.error.message, K.error.data);
                      H(N);
                    }
                  else {
                    let K = z.type === "response" ? "Response" : "Error";
                    this._onerror(
                      Error(`${K} handler missing for request ${U}`),
                    );
                  }
                  continue;
                }
                await this._transport?.send(z.message, {
                  relatedRequestId: J.requestId,
                });
              }
            }
            let W = await this._taskStore.getTask(Q, J.sessionId);
            if (!W) throw new h(m.InvalidParams, `Task not found: ${Q}`);
            if (!z1(W.status))
              return (await this._waitForTaskUpdate(Q, J.signal), await Y());
            if (z1(W.status)) {
              let z = await this._taskStore.getTaskResult(Q, J.sessionId);
              return (
                this._clearTaskQueue(Q),
                { ...z, _meta: { ...z._meta, [W1]: { taskId: Q } } }
              );
            }
            return await Y();
          };
          return await Y();
        }),
        this.setRequestHandler(n5, async (X, J) => {
          try {
            let { tasks: Y, nextCursor: Q } = await this._taskStore.listTasks(
              X.params?.cursor,
              J.sessionId,
            );
            return { tasks: Y, nextCursor: Q, _meta: {} };
          } catch (Y) {
            throw new h(
              m.InvalidParams,
              `Failed to list tasks: ${Y instanceof Error ? Y.message : String(Y)}`,
            );
          }
        }),
        this.setRequestHandler(o5, async (X, J) => {
          try {
            let Y = await this._taskStore.getTask(X.params.taskId, J.sessionId);
            if (!Y)
              throw new h(
                m.InvalidParams,
                `Task not found: ${X.params.taskId}`,
              );
            if (z1(Y.status))
              throw new h(
                m.InvalidParams,
                `Cannot cancel task in terminal status: ${Y.status}`,
              );
            (await this._taskStore.updateTaskStatus(
              X.params.taskId,
              "cancelled",
              "Client cancelled task execution.",
              J.sessionId,
            ),
              this._clearTaskQueue(X.params.taskId));
            let Q = await this._taskStore.getTask(X.params.taskId, J.sessionId);
            if (!Q)
              throw new h(
                m.InvalidParams,
                `Task not found after cancellation: ${X.params.taskId}`,
              );
            return { _meta: {}, ...Q };
          } catch (Y) {
            if (Y instanceof h) throw Y;
            throw new h(
              m.InvalidRequest,
              `Failed to cancel task: ${Y instanceof Error ? Y.message : String(Y)}`,
            );
          }
        }));
  }
  async _oncancel($) {
    if (!$.params.requestId) return;
    this._requestHandlerAbortControllers
      .get($.params.requestId)
      ?.abort($.params.reason);
  }
  _setupTimeout($, X, J, Y, Q = !1) {
    this._timeoutInfo.set($, {
      timeoutId: setTimeout(Y, X),
      startTime: Date.now(),
      timeout: X,
      maxTotalTimeout: J,
      resetTimeoutOnProgress: Q,
      onTimeout: Y,
    });
  }
  _resetTimeout($) {
    let X = this._timeoutInfo.get($);
    if (!X) return !1;
    let J = Date.now() - X.startTime;
    if (X.maxTotalTimeout && J >= X.maxTotalTimeout)
      throw (
        this._timeoutInfo.delete($),
        h.fromError(m.RequestTimeout, "Maximum total timeout exceeded", {
          maxTotalTimeout: X.maxTotalTimeout,
          totalElapsed: J,
        })
      );
    return (
      clearTimeout(X.timeoutId),
      (X.timeoutId = setTimeout(X.onTimeout, X.timeout)),
      !0
    );
  }
  _cleanupTimeout($) {
    let X = this._timeoutInfo.get($);
    if (X) (clearTimeout(X.timeoutId), this._timeoutInfo.delete($));
  }
  async connect($) {
    if (this._transport)
      throw Error(
        "Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection.",
      );
    this._transport = $;
    let X = this.transport?.onclose;
    this._transport.onclose = () => {
      (X?.(), this._onclose());
    };
    let J = this.transport?.onerror;
    this._transport.onerror = (Q) => {
      (J?.(Q), this._onerror(Q));
    };
    let Y = this._transport?.onmessage;
    ((this._transport.onmessage = (Q, W) => {
      if ((Y?.(Q, W), pX(Q) || fD(Q))) this._onresponse(Q);
      else if (oU(Q)) this._onrequest(Q, W);
      else if (TD(Q)) this._onnotification(Q);
      else this._onerror(Error(`Unknown message type: ${JSON.stringify(Q)}`));
    }),
      await this._transport.start());
  }
  _onclose() {
    let $ = this._responseHandlers;
    ((this._responseHandlers = new Map()),
      this._progressHandlers.clear(),
      this._taskProgressTokens.clear(),
      this._pendingDebouncedNotifications.clear());
    for (let J of this._timeoutInfo.values()) clearTimeout(J.timeoutId);
    this._timeoutInfo.clear();
    for (let J of this._requestHandlerAbortControllers.values()) J.abort();
    this._requestHandlerAbortControllers.clear();
    let X = h.fromError(m.ConnectionClosed, "Connection closed");
    ((this._transport = void 0), this.onclose?.());
    for (let J of $.values()) J(X);
  }
  _onerror($) {
    this.onerror?.($);
  }
  _onnotification($) {
    let X =
      this._notificationHandlers.get($.method) ??
      this.fallbackNotificationHandler;
    if (X === void 0) return;
    Promise.resolve()
      .then(() => X($))
      .catch((J) =>
        this._onerror(Error(`Uncaught error in notification handler: ${J}`)),
      );
  }
  _onrequest($, X) {
    let J = this._requestHandlers.get($.method) ?? this.fallbackRequestHandler,
      Y = this._transport,
      Q = $.params?._meta?.[W1]?.taskId;
    if (J === void 0) {
      let H = {
        jsonrpc: "2.0",
        id: $.id,
        error: { code: m.MethodNotFound, message: "Method not found" },
      };
      if (Q && this._taskMessageQueue)
        this._enqueueTaskMessage(
          Q,
          { type: "error", message: H, timestamp: Date.now() },
          Y?.sessionId,
        ).catch((K) =>
          this._onerror(Error(`Failed to enqueue error response: ${K}`)),
        );
      else
        Y?.send(H).catch((K) =>
          this._onerror(Error(`Failed to send an error response: ${K}`)),
        );
      return;
    }
    let W = new AbortController();
    this._requestHandlerAbortControllers.set($.id, W);
    let z = kD($.params) ? $.params.task : void 0,
      G = this._taskStore ? this.requestTaskStore($, Y?.sessionId) : void 0,
      U = {
        signal: W.signal,
        sessionId: Y?.sessionId,
        _meta: $.params?._meta,
        sendNotification: async (H) => {
          if (W.signal.aborted) return;
          let K = { relatedRequestId: $.id };
          if (Q) K.relatedTask = { taskId: Q };
          await this.notification(H, K);
        },
        sendRequest: async (H, K, N) => {
          if (W.signal.aborted)
            throw new h(m.ConnectionClosed, "Request was cancelled");
          let V = { ...N, relatedRequestId: $.id };
          if (Q && !V.relatedTask) V.relatedTask = { taskId: Q };
          let O = V.relatedTask?.taskId ?? Q;
          if (O && G) await G.updateTaskStatus(O, "input_required");
          return await this.request(H, K, V);
        },
        authInfo: X?.authInfo,
        requestId: $.id,
        requestInfo: X?.requestInfo,
        taskId: Q,
        taskStore: G,
        taskRequestedTtl: z?.ttl,
        closeSSEStream: X?.closeSSEStream,
        closeStandaloneSSEStream: X?.closeStandaloneSSEStream,
      };
    Promise.resolve()
      .then(() => {
        if (z) this.assertTaskHandlerCapability($.method);
      })
      .then(() => J($, U))
      .then(
        async (H) => {
          if (W.signal.aborted) return;
          let K = { result: H, jsonrpc: "2.0", id: $.id };
          if (Q && this._taskMessageQueue)
            await this._enqueueTaskMessage(
              Q,
              { type: "response", message: K, timestamp: Date.now() },
              Y?.sessionId,
            );
          else await Y?.send(K);
        },
        async (H) => {
          if (W.signal.aborted) return;
          let K = {
            jsonrpc: "2.0",
            id: $.id,
            error: {
              code: Number.isSafeInteger(H.code) ? H.code : m.InternalError,
              message: H.message ?? "Internal error",
              ...(H.data !== void 0 && { data: H.data }),
            },
          };
          if (Q && this._taskMessageQueue)
            await this._enqueueTaskMessage(
              Q,
              { type: "error", message: K, timestamp: Date.now() },
              Y?.sessionId,
            );
          else await Y?.send(K);
        },
      )
      .catch((H) => this._onerror(Error(`Failed to send response: ${H}`)))
      .finally(() => {
        if (this._requestHandlerAbortControllers.get($.id) === W)
          this._requestHandlerAbortControllers.delete($.id);
      });
  }
  _onprogress($) {
    let { progressToken: X, ...J } = $.params,
      Y = Number(X),
      Q = this._progressHandlers.get(Y);
    if (!Q) {
      this._onerror(
        Error(
          `Received a progress notification for an unknown token: ${JSON.stringify($)}`,
        ),
      );
      return;
    }
    let W = this._responseHandlers.get(Y),
      z = this._timeoutInfo.get(Y);
    if (z && W && z.resetTimeoutOnProgress)
      try {
        this._resetTimeout(Y);
      } catch (G) {
        (this._responseHandlers.delete(Y),
          this._progressHandlers.delete(Y),
          this._cleanupTimeout(Y),
          W(G));
        return;
      }
    Q(J);
  }
  _onresponse($) {
    let X = Number($.id),
      J = this._requestResolvers.get(X);
    if (J) {
      if ((this._requestResolvers.delete(X), pX($))) J($);
      else {
        let W = new h($.error.code, $.error.message, $.error.data);
        J(W);
      }
      return;
    }
    let Y = this._responseHandlers.get(X);
    if (Y === void 0) {
      this._onerror(
        Error(
          `Received a response for an unknown message ID: ${JSON.stringify($)}`,
        ),
      );
      return;
    }
    (this._responseHandlers.delete(X), this._cleanupTimeout(X));
    let Q = !1;
    if (pX($) && $.result && typeof $.result === "object") {
      let W = $.result;
      if (W.task && typeof W.task === "object") {
        let z = W.task;
        if (typeof z.taskId === "string")
          ((Q = !0), this._taskProgressTokens.set(z.taskId, X));
      }
    }
    if (!Q) this._progressHandlers.delete(X);
    if (pX($)) Y($);
    else {
      let W = h.fromError($.error.code, $.error.message, $.error.data);
      Y(W);
    }
  }
  get transport() {
    return this._transport;
  }
  async close() {
    await this._transport?.close();
  }
  async *requestStream($, X, J) {
    let { task: Y } = J ?? {};
    if (!Y) {
      try {
        yield { type: "result", result: await this.request($, X, J) };
      } catch (W) {
        yield {
          type: "error",
          error: W instanceof h ? W : new h(m.InternalError, String(W)),
        };
      }
      return;
    }
    let Q;
    try {
      let W = await this.request($, J8, J);
      if (W.task)
        ((Q = W.task.taskId), yield { type: "taskCreated", task: W.task });
      else throw new h(m.InternalError, "Task creation did not return a task");
      while (!0) {
        let z = await this.getTask({ taskId: Q }, J);
        if ((yield { type: "taskStatus", task: z }, z1(z.status))) {
          if (z.status === "completed")
            yield {
              type: "result",
              result: await this.getTaskResult({ taskId: Q }, X, J),
            };
          else if (z.status === "failed")
            yield {
              type: "error",
              error: new h(m.InternalError, `Task ${Q} failed`),
            };
          else if (z.status === "cancelled")
            yield {
              type: "error",
              error: new h(m.InternalError, `Task ${Q} was cancelled`),
            };
          return;
        }
        if (z.status === "input_required") {
          yield {
            type: "result",
            result: await this.getTaskResult({ taskId: Q }, X, J),
          };
          return;
        }
        let G =
          z.pollInterval ?? this._options?.defaultTaskPollInterval ?? 1000;
        (await new Promise((U) => setTimeout(U, G)),
          J?.signal?.throwIfAborted());
      }
    } catch (W) {
      yield {
        type: "error",
        error: W instanceof h ? W : new h(m.InternalError, String(W)),
      };
    }
  }
  request($, X, J) {
    let {
      relatedRequestId: Y,
      resumptionToken: Q,
      onresumptiontoken: W,
      task: z,
      relatedTask: G,
    } = J ?? {};
    return new Promise((U, H) => {
      let K = (j) => {
        H(j);
      };
      if (!this._transport) {
        K(Error("Not connected"));
        return;
      }
      if (this._options?.enforceStrictCapabilities === !0)
        try {
          if ((this.assertCapabilityForMethod($.method), z))
            this.assertTaskCapability($.method);
        } catch (j) {
          K(j);
          return;
        }
      J?.signal?.throwIfAborted();
      let N = this._requestMessageId++,
        V = { ...$, jsonrpc: "2.0", id: N };
      if (J?.onprogress)
        (this._progressHandlers.set(N, J.onprogress),
          (V.params = {
            ...$.params,
            _meta: { ...($.params?._meta || {}), progressToken: N },
          }));
      if (z) V.params = { ...V.params, task: z };
      if (G)
        V.params = {
          ...V.params,
          _meta: { ...(V.params?._meta || {}), [W1]: G },
        };
      let O = (j) => {
        (this._responseHandlers.delete(N),
          this._progressHandlers.delete(N),
          this._cleanupTimeout(N),
          this._transport
            ?.send(
              {
                jsonrpc: "2.0",
                method: "notifications/cancelled",
                params: { requestId: N, reason: String(j) },
              },
              { relatedRequestId: Y, resumptionToken: Q, onresumptiontoken: W },
            )
            .catch((Z) =>
              this._onerror(Error(`Failed to send cancellation: ${Z}`)),
            ));
        let I = j instanceof h ? j : new h(m.RequestTimeout, String(j));
        H(I);
      };
      (this._responseHandlers.set(N, (j) => {
        if (J?.signal?.aborted) return;
        if (j instanceof Error) return H(j);
        try {
          let I = J1(X, j.result);
          if (!I.success) H(I.error);
          else U(I.data);
        } catch (I) {
          H(I);
        }
      }),
        J?.signal?.addEventListener("abort", () => {
          O(J?.signal?.reason);
        }));
      let w = J?.timeout ?? Tx,
        B = () =>
          O(h.fromError(m.RequestTimeout, "Request timed out", { timeout: w }));
      this._setupTimeout(
        N,
        w,
        J?.maxTotalTimeout,
        B,
        J?.resetTimeoutOnProgress ?? !1,
      );
      let F = G?.taskId;
      if (F) {
        let j = (I) => {
          let Z = this._responseHandlers.get(N);
          if (Z) Z(I);
          else
            this._onerror(
              Error(`Response handler missing for side-channeled request ${N}`),
            );
        };
        (this._requestResolvers.set(N, j),
          this._enqueueTaskMessage(F, {
            type: "request",
            message: V,
            timestamp: Date.now(),
          }).catch((I) => {
            (this._cleanupTimeout(N), H(I));
          }));
      } else
        this._transport
          .send(V, {
            relatedRequestId: Y,
            resumptionToken: Q,
            onresumptiontoken: W,
          })
          .catch((j) => {
            (this._cleanupTimeout(N), H(j));
          });
    });
  }
  async getTask($, X) {
    return this.request({ method: "tasks/get", params: $ }, p5, X);
  }
  async getTaskResult($, X, J) {
    return this.request({ method: "tasks/result", params: $ }, X, J);
  }
  async listTasks($, X) {
    return this.request({ method: "tasks/list", params: $ }, r5, X);
  }
  async cancelTask($, X) {
    return this.request({ method: "tasks/cancel", params: $ }, gD, X);
  }
  async notification($, X) {
    if (!this._transport) throw Error("Not connected");
    this.assertNotificationCapability($.method);
    let J = X?.relatedTask?.taskId;
    if (J) {
      let z = {
        ...$,
        jsonrpc: "2.0",
        params: {
          ...$.params,
          _meta: { ...($.params?._meta || {}), [W1]: X.relatedTask },
        },
      };
      await this._enqueueTaskMessage(J, {
        type: "notification",
        message: z,
        timestamp: Date.now(),
      });
      return;
    }
    if (
      (this._options?.debouncedNotificationMethods ?? []).includes($.method) &&
      !$.params &&
      !X?.relatedRequestId &&
      !X?.relatedTask
    ) {
      if (this._pendingDebouncedNotifications.has($.method)) return;
      (this._pendingDebouncedNotifications.add($.method),
        Promise.resolve().then(() => {
          if (
            (this._pendingDebouncedNotifications.delete($.method),
            !this._transport)
          )
            return;
          let z = { ...$, jsonrpc: "2.0" };
          if (X?.relatedTask)
            z = {
              ...z,
              params: {
                ...z.params,
                _meta: { ...(z.params?._meta || {}), [W1]: X.relatedTask },
              },
            };
          this._transport?.send(z, X).catch((G) => this._onerror(G));
        }));
      return;
    }
    let W = { ...$, jsonrpc: "2.0" };
    if (X?.relatedTask)
      W = {
        ...W,
        params: {
          ...W.params,
          _meta: { ...(W.params?._meta || {}), [W1]: X.relatedTask },
        },
      };
    await this._transport.send(W, X);
  }
  setRequestHandler($, X) {
    let J = BH($);
    (this.assertRequestHandlerCapability(J),
      this._requestHandlers.set(J, (Y, Q) => {
        let W = qH($, Y);
        return Promise.resolve(X(W, Q));
      }));
  }
  removeRequestHandler($) {
    this._requestHandlers.delete($);
  }
  assertCanSetRequestHandler($) {
    if (this._requestHandlers.has($))
      throw Error(
        `A request handler for ${$} already exists, which would be overridden`,
      );
  }
  setNotificationHandler($, X) {
    let J = BH($);
    this._notificationHandlers.set(J, (Y) => {
      let Q = qH($, Y);
      return Promise.resolve(X(Q));
    });
  }
  removeNotificationHandler($) {
    this._notificationHandlers.delete($);
  }
  _cleanupTaskProgressHandler($) {
    let X = this._taskProgressTokens.get($);
    if (X !== void 0)
      (this._progressHandlers.delete(X), this._taskProgressTokens.delete($));
  }
  async _enqueueTaskMessage($, X, J) {
    if (!this._taskStore || !this._taskMessageQueue)
      throw Error(
        "Cannot enqueue task message: taskStore and taskMessageQueue are not configured",
      );
    let Y = this._options?.maxTaskQueueSize;
    await this._taskMessageQueue.enqueue($, X, J, Y);
  }
  async _clearTaskQueue($, X) {
    if (this._taskMessageQueue) {
      let J = await this._taskMessageQueue.dequeueAll($, X);
      for (let Y of J)
        if (Y.type === "request" && oU(Y.message)) {
          let Q = Y.message.id,
            W = this._requestResolvers.get(Q);
          if (W)
            (W(new h(m.InternalError, "Task cancelled or completed")),
              this._requestResolvers.delete(Q));
          else
            this._onerror(
              Error(
                `Resolver missing for request ${Q} during task ${$} cleanup`,
              ),
            );
        }
    }
  }
  async _waitForTaskUpdate($, X) {
    let J = this._options?.defaultTaskPollInterval ?? 1000;
    try {
      let Y = await this._taskStore?.getTask($);
      if (Y?.pollInterval) J = Y.pollInterval;
    } catch {}
    return new Promise((Y, Q) => {
      if (X.aborted) {
        Q(new h(m.InvalidRequest, "Request cancelled"));
        return;
      }
      let W = setTimeout(Y, J);
      X.addEventListener(
        "abort",
        () => {
          (clearTimeout(W), Q(new h(m.InvalidRequest, "Request cancelled")));
        },
        { once: !0 },
      );
    });
  }
  requestTaskStore($, X) {
    let J = this._taskStore;
    if (!J) throw Error("No task store configured");
    return {
      createTask: async (Y) => {
        if (!$) throw Error("No request provided");
        return await J.createTask(
          Y,
          $.id,
          { method: $.method, params: $.params },
          X,
        );
      },
      getTask: async (Y) => {
        let Q = await J.getTask(Y, X);
        if (!Q)
          throw new h(
            m.InvalidParams,
            "Failed to retrieve task: Task not found",
          );
        return Q;
      },
      storeTaskResult: async (Y, Q, W) => {
        await J.storeTaskResult(Y, Q, W, X);
        let z = await J.getTask(Y, X);
        if (z) {
          let G = tX.parse({ method: "notifications/tasks/status", params: z });
          if ((await this.notification(G), z1(z.status)))
            this._cleanupTaskProgressHandler(Y);
        }
      },
      getTaskResult: (Y) => {
        return J.getTaskResult(Y, X);
      },
      updateTaskStatus: async (Y, Q, W) => {
        let z = await J.getTask(Y, X);
        if (!z)
          throw new h(
            m.InvalidParams,
            `Task "${Y}" not found - it may have been cleaned up`,
          );
        if (z1(z.status))
          throw new h(
            m.InvalidParams,
            `Cannot update task "${Y}" from terminal status "${z.status}" to "${Q}". Terminal states (completed, failed, cancelled) cannot transition to other states.`,
          );
        await J.updateTaskStatus(Y, Q, W, X);
        let G = await J.getTask(Y, X);
        if (G) {
          let U = tX.parse({ method: "notifications/tasks/status", params: G });
          if ((await this.notification(U), z1(G.status)))
            this._cleanupTaskProgressHandler(Y);
        }
      },
      listTasks: (Y) => {
        return J.listTasks(Y, X);
      },
    };
  }
}
function bF($) {
  return $ !== null && typeof $ === "object" && !Array.isArray($);
}
function RF($, X) {
  let J = { ...$ };
  for (let Y in X) {
    let Q = Y,
      W = X[Q];
    if (W === void 0) continue;
    let z = J[Q];
    if (bF(z) && bF(W)) J[Q] = { ...z, ...W };
    else J[Q] = W;
  }
  return J;
}
var HA = EJ(KK(), 1),
  KA = EJ(UA(), 1);
function pl() {
  let $ = new HA.default({
    strict: !1,
    validateFormats: !0,
    validateSchema: !1,
    allErrors: !0,
  });
  return (KA.default($), $);
}
class LK {
  constructor($) {
    this._ajv = $ ?? pl();
  }
  getValidator($) {
    let X =
      "$id" in $ && typeof $.$id === "string"
        ? (this._ajv.getSchema($.$id) ?? this._ajv.compile($))
        : this._ajv.compile($);
    return (J) => {
      if (X(J)) return { valid: !0, data: J, errorMessage: void 0 };
      else
        return {
          valid: !1,
          data: void 0,
          errorMessage: this._ajv.errorsText(X.errors),
        };
    };
  }
}
class MK {
  constructor($) {
    this._server = $;
  }
  requestStream($, X, J) {
    return this._server.requestStream($, X, J);
  }
  createMessageStream($, X) {
    let J = this._server.getClientCapabilities();
    if (($.tools || $.toolChoice) && !J?.sampling?.tools)
      throw Error("Client does not support sampling tools capability.");
    if ($.messages.length > 0) {
      let Y = $.messages[$.messages.length - 1],
        Q = Array.isArray(Y.content) ? Y.content : [Y.content],
        W = Q.some((H) => H.type === "tool_result"),
        z = $.messages.length > 1 ? $.messages[$.messages.length - 2] : void 0,
        G = z ? (Array.isArray(z.content) ? z.content : [z.content]) : [],
        U = G.some((H) => H.type === "tool_use");
      if (W) {
        if (Q.some((H) => H.type !== "tool_result"))
          throw Error(
            "The last message must contain only tool_result content if any is present",
          );
        if (!U)
          throw Error(
            "tool_result blocks are not matching any tool_use from the previous message",
          );
      }
      if (U) {
        let H = new Set(
            G.filter((N) => N.type === "tool_use").map((N) => N.id),
          ),
          K = new Set(
            Q.filter((N) => N.type === "tool_result").map((N) => N.toolUseId),
          );
        if (H.size !== K.size || ![...H].every((N) => K.has(N)))
          throw Error(
            "ids of tool_result blocks and tool_use blocks from previous message do not match",
          );
      }
    }
    return this.requestStream(
      { method: "sampling/createMessage", params: $ },
      eX,
      X,
    );
  }
  elicitInputStream($, X) {
    let J = this._server.getClientCapabilities(),
      Y = $.mode ?? "form";
    switch (Y) {
      case "url": {
        if (!J?.elicitation?.url)
          throw Error("Client does not support url elicitation.");
        break;
      }
      case "form": {
        if (!J?.elicitation?.form)
          throw Error("Client does not support form elicitation.");
        break;
      }
    }
    let Q = Y === "form" && $.mode === void 0 ? { ...$, mode: "form" } : $;
    return this.requestStream(
      { method: "elicitation/create", params: Q },
      W8,
      X,
    );
  }
  async getTask($, X) {
    return this._server.getTask({ taskId: $ }, X);
  }
  async getTaskResult($, X, J) {
    return this._server.getTaskResult({ taskId: $ }, X, J);
  }
  async listTasks($, X) {
    return this._server.listTasks($ ? { cursor: $ } : void 0, X);
  }
  async cancelTask($, X) {
    return this._server.cancelTask({ taskId: $ }, X);
  }
}
function NA($, X, J) {
  if (!$)
    throw Error(`${J} does not support task creation (required for ${X})`);
  switch (X) {
    case "tools/call":
      if (!$.tools?.call)
        throw Error(
          `${J} does not support task creation for tools/call (required for ${X})`,
        );
      break;
    default:
      break;
  }
}
function VA($, X, J) {
  if (!$)
    throw Error(`${J} does not support task creation (required for ${X})`);
  switch (X) {
    case "sampling/createMessage":
      if (!$.sampling?.createMessage)
        throw Error(
          `${J} does not support task creation for sampling/createMessage (required for ${X})`,
        );
      break;
    case "elicitation/create":
      if (!$.elicitation?.create)
        throw Error(
          `${J} does not support task creation for elicitation/create (required for ${X})`,
        );
      break;
    default:
      break;
  }
}
class AK extends DH {
  constructor($, X) {
    super(X);
    if (
      ((this._serverInfo = $),
      (this._loggingLevels = new Map()),
      (this.LOG_LEVEL_SEVERITY = new Map(sX.options.map((J, Y) => [J, Y]))),
      (this.isMessageIgnored = (J, Y) => {
        let Q = this._loggingLevels.get(Y);
        return Q
          ? this.LOG_LEVEL_SEVERITY.get(J) < this.LOG_LEVEL_SEVERITY.get(Q)
          : !1;
      }),
      (this._capabilities = X?.capabilities ?? {}),
      (this._instructions = X?.instructions),
      (this._jsonSchemaValidator = X?.jsonSchemaValidator ?? new LK()),
      this.setRequestHandler(sU, (J) => this._oninitialize(J)),
      this.setNotificationHandler(eU, () => this.oninitialized?.()),
      this._capabilities.logging)
    )
      this.setRequestHandler(zH, async (J, Y) => {
        let Q =
            Y.sessionId || Y.requestInfo?.headers["mcp-session-id"] || void 0,
          { level: W } = J.params,
          z = sX.safeParse(W);
        if (z.success) this._loggingLevels.set(Q, z.data);
        return {};
      });
  }
  get experimental() {
    if (!this._experimental) this._experimental = { tasks: new MK(this) };
    return this._experimental;
  }
  registerCapabilities($) {
    if (this.transport)
      throw Error("Cannot register capabilities after connecting to transport");
    this._capabilities = RF(this._capabilities, $);
  }
  setRequestHandler($, X) {
    let Y = Q1($)?.method;
    if (!Y) throw Error("Schema is missing a method literal");
    let Q;
    if (P6(Y)) {
      let z = Y;
      Q = z._zod?.def?.value ?? z.value;
    } else {
      let z = Y;
      Q = z._def?.value ?? z.value;
    }
    if (typeof Q !== "string")
      throw Error("Schema method literal must be a string");
    if (Q === "tools/call") {
      let z = async (G, U) => {
        let H = J1(Y8, G);
        if (!H.success) {
          let O = H.error instanceof Error ? H.error.message : String(H.error);
          throw new h(m.InvalidParams, `Invalid tools/call request: ${O}`);
        }
        let { params: K } = H.data,
          N = await Promise.resolve(X(G, U));
        if (K.task) {
          let O = J1(J8, N);
          if (!O.success) {
            let w =
              O.error instanceof Error ? O.error.message : String(O.error);
            throw new h(m.InvalidParams, `Invalid task creation result: ${w}`);
          }
          return O.data;
        }
        let V = J1(JY, N);
        if (!V.success) {
          let O = V.error instanceof Error ? V.error.message : String(V.error);
          throw new h(m.InvalidParams, `Invalid tools/call result: ${O}`);
        }
        return V.data;
      };
      return super.setRequestHandler($, z);
    }
    return super.setRequestHandler($, X);
  }
  assertCapabilityForMethod($) {
    switch ($) {
      case "sampling/createMessage":
        if (!this._clientCapabilities?.sampling)
          throw Error(`Client does not support sampling (required for ${$})`);
        break;
      case "elicitation/create":
        if (!this._clientCapabilities?.elicitation)
          throw Error(
            `Client does not support elicitation (required for ${$})`,
          );
        break;
      case "roots/list":
        if (!this._clientCapabilities?.roots)
          throw Error(
            `Client does not support listing roots (required for ${$})`,
          );
        break;
      case "ping":
        break;
    }
  }
  assertNotificationCapability($) {
    switch ($) {
      case "notifications/message":
        if (!this._capabilities.logging)
          throw Error(`Server does not support logging (required for ${$})`);
        break;
      case "notifications/resources/updated":
      case "notifications/resources/list_changed":
        if (!this._capabilities.resources)
          throw Error(
            `Server does not support notifying about resources (required for ${$})`,
          );
        break;
      case "notifications/tools/list_changed":
        if (!this._capabilities.tools)
          throw Error(
            `Server does not support notifying of tool list changes (required for ${$})`,
          );
        break;
      case "notifications/prompts/list_changed":
        if (!this._capabilities.prompts)
          throw Error(
            `Server does not support notifying of prompt list changes (required for ${$})`,
          );
        break;
      case "notifications/elicitation/complete":
        if (!this._clientCapabilities?.elicitation?.url)
          throw Error(
            `Client does not support URL elicitation (required for ${$})`,
          );
        break;
      case "notifications/cancelled":
        break;
      case "notifications/progress":
        break;
    }
  }
  assertRequestHandlerCapability($) {
    if (!this._capabilities) return;
    switch ($) {
      case "completion/complete":
        if (!this._capabilities.completions)
          throw Error(
            `Server does not support completions (required for ${$})`,
          );
        break;
      case "logging/setLevel":
        if (!this._capabilities.logging)
          throw Error(`Server does not support logging (required for ${$})`);
        break;
      case "prompts/get":
      case "prompts/list":
        if (!this._capabilities.prompts)
          throw Error(`Server does not support prompts (required for ${$})`);
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
        if (!this._capabilities.resources)
          throw Error(`Server does not support resources (required for ${$})`);
        break;
      case "tools/call":
      case "tools/list":
        if (!this._capabilities.tools)
          throw Error(`Server does not support tools (required for ${$})`);
        break;
      case "tasks/get":
      case "tasks/list":
      case "tasks/result":
      case "tasks/cancel":
        if (!this._capabilities.tasks)
          throw Error(
            `Server does not support tasks capability (required for ${$})`,
          );
        break;
      case "ping":
      case "initialize":
        break;
    }
  }
  assertTaskCapability($) {
    VA(this._clientCapabilities?.tasks?.requests, $, "Client");
  }
  assertTaskHandlerCapability($) {
    if (!this._capabilities) return;
    NA(this._capabilities.tasks?.requests, $, "Server");
  }
  async _oninitialize($) {
    let X = $.params.protocolVersion;
    return (
      (this._clientCapabilities = $.params.capabilities),
      (this._clientVersion = $.params.clientInfo),
      {
        protocolVersion: SD.includes(X) ? X : nU,
        capabilities: this.getCapabilities(),
        serverInfo: this._serverInfo,
        ...(this._instructions && { instructions: this._instructions }),
      }
    );
  }
  getClientCapabilities() {
    return this._clientCapabilities;
  }
  getClientVersion() {
    return this._clientVersion;
  }
  getCapabilities() {
    return this._capabilities;
  }
  async ping() {
    return this.request({ method: "ping" }, u5);
  }
  async createMessage($, X) {
    if ($.tools || $.toolChoice) {
      if (!this._clientCapabilities?.sampling?.tools)
        throw Error("Client does not support sampling tools capability.");
    }
    if ($.messages.length > 0) {
      let J = $.messages[$.messages.length - 1],
        Y = Array.isArray(J.content) ? J.content : [J.content],
        Q = Y.some((U) => U.type === "tool_result"),
        W = $.messages.length > 1 ? $.messages[$.messages.length - 2] : void 0,
        z = W ? (Array.isArray(W.content) ? W.content : [W.content]) : [],
        G = z.some((U) => U.type === "tool_use");
      if (Q) {
        if (Y.some((U) => U.type !== "tool_result"))
          throw Error(
            "The last message must contain only tool_result content if any is present",
          );
        if (!G)
          throw Error(
            "tool_result blocks are not matching any tool_use from the previous message",
          );
      }
      if (G) {
        let U = new Set(
            z.filter((K) => K.type === "tool_use").map((K) => K.id),
          ),
          H = new Set(
            Y.filter((K) => K.type === "tool_result").map((K) => K.toolUseId),
          );
        if (U.size !== H.size || ![...U].every((K) => H.has(K)))
          throw Error(
            "ids of tool_result blocks and tool_use blocks from previous message do not match",
          );
      }
    }
    if ($.tools)
      return this.request(
        { method: "sampling/createMessage", params: $ },
        GH,
        X,
      );
    return this.request({ method: "sampling/createMessage", params: $ }, eX, X);
  }
  async elicitInput($, X) {
    switch ($.mode ?? "form") {
      case "url": {
        if (!this._clientCapabilities?.elicitation?.url)
          throw Error("Client does not support url elicitation.");
        let Y = $;
        return this.request({ method: "elicitation/create", params: Y }, W8, X);
      }
      case "form": {
        if (!this._clientCapabilities?.elicitation?.form)
          throw Error("Client does not support form elicitation.");
        let Y = $.mode === "form" ? $ : { ...$, mode: "form" },
          Q = await this.request(
            { method: "elicitation/create", params: Y },
            W8,
            X,
          );
        if (Q.action === "accept" && Q.content && Y.requestedSchema)
          try {
            let z = this._jsonSchemaValidator.getValidator(Y.requestedSchema)(
              Q.content,
            );
            if (!z.valid)
              throw new h(
                m.InvalidParams,
                `Elicitation response content does not match requested schema: ${z.errorMessage}`,
              );
          } catch (W) {
            if (W instanceof h) throw W;
            throw new h(
              m.InternalError,
              `Error validating elicitation response: ${W instanceof Error ? W.message : String(W)}`,
            );
          }
        return Q;
      }
    }
  }
  createElicitationCompletionNotifier($, X) {
    if (!this._clientCapabilities?.elicitation?.url)
      throw Error(
        "Client does not support URL elicitation (required for notifications/elicitation/complete)",
      );
    return () =>
      this.notification(
        {
          method: "notifications/elicitation/complete",
          params: { elicitationId: $ },
        },
        X,
      );
  }
  async listRoots($, X) {
    return this.request({ method: "roots/list", params: $ }, UH, X);
  }
  async sendLoggingMessage($, X) {
    if (this._capabilities.logging) {
      if (!this.isMessageIgnored($.level, X))
        return this.notification({
          method: "notifications/message",
          params: $,
        });
    }
  }
  async sendResourceUpdated($) {
    return this.notification({
      method: "notifications/resources/updated",
      params: $,
    });
  }
  async sendResourceListChanged() {
    return this.notification({
      method: "notifications/resources/list_changed",
    });
  }
  async sendToolListChanged() {
    return this.notification({ method: "notifications/tools/list_changed" });
  }
  async sendPromptListChanged() {
    return this.notification({ method: "notifications/prompts/list_changed" });
  }
}
var wA = Symbol.for("mcp.completable");
function IK($) {
  return !!$ && typeof $ === "object" && wA in $;
}
function BA($) {
  return $[wA]?.complete;
}
var OA;
(function ($) {
  $.Completable = "McpCompletable";
})(OA || (OA = {}));
var il = /^[A-Za-z0-9._-]{1,128}$/;
function nl($) {
  let X = [];
  if ($.length === 0)
    return { isValid: !1, warnings: ["Tool name cannot be empty"] };
  if ($.length > 128)
    return {
      isValid: !1,
      warnings: [
        `Tool name exceeds maximum length of 128 characters (current: ${$.length})`,
      ],
    };
  if ($.includes(" "))
    X.push("Tool name contains spaces, which may cause parsing issues");
  if ($.includes(","))
    X.push("Tool name contains commas, which may cause parsing issues");
  if ($.startsWith("-") || $.endsWith("-"))
    X.push(
      "Tool name starts or ends with a dash, which may cause parsing issues in some contexts",
    );
  if ($.startsWith(".") || $.endsWith("."))
    X.push(
      "Tool name starts or ends with a dot, which may cause parsing issues in some contexts",
    );
  if (!il.test($)) {
    let J = $.split("")
      .filter((Y) => !/[A-Za-z0-9._-]/.test(Y))
      .filter((Y, Q, W) => W.indexOf(Y) === Q);
    return (
      X.push(
        `Tool name contains invalid characters: ${J.map((Y) => `"${Y}"`).join(", ")}`,
        "Allowed characters are: A-Z, a-z, 0-9, underscore (_), dash (-), and dot (.)",
      ),
      { isValid: !1, warnings: X }
    );
  }
  return { isValid: !0, warnings: X };
}
function rl($, X) {
  if (X.length > 0) {
    console.warn(`Tool name validation warning for "${$}":`);
    for (let J of X) console.warn(`  - ${J}`);
    (console.warn(
      "Tool registration will proceed, but this may cause compatibility issues.",
    ),
      console.warn(
        "Consider updating the tool name to conform to the MCP tool naming standard.",
      ),
      console.warn(
        "See SEP: Specify Format for Tool Names (https://github.com/modelcontextprotocol/modelcontextprotocol/issues/986) for more details.",
      ));
  }
}
function ZK($) {
  let X = nl($);
  return (rl($, X.warnings), X.isValid);
}
class bK {
  constructor($) {
    this._mcpServer = $;
  }
  registerToolTask($, X, J) {
    let Y = { taskSupport: "required", ...X.execution };
    if (Y.taskSupport === "forbidden")
      throw Error(
        `Cannot register task-based tool '${$}' with taskSupport 'forbidden'. Use registerTool() instead.`,
      );
    return this._mcpServer._createRegisteredTool(
      $,
      X.title,
      X.description,
      X.inputSchema,
      X.outputSchema,
      X.annotations,
      Y,
      X._meta,
      J,
    );
  }
}
class PK {
  constructor($, X) {
    ((this._registeredResources = {}),
      (this._registeredResourceTemplates = {}),
      (this._registeredTools = {}),
      (this._registeredPrompts = {}),
      (this._toolHandlersInitialized = !1),
      (this._completionHandlerInitialized = !1),
      (this._resourceHandlersInitialized = !1),
      (this._promptHandlersInitialized = !1),
      (this.server = new AK($, X)));
  }
  get experimental() {
    if (!this._experimental) this._experimental = { tasks: new bK(this) };
    return this._experimental;
  }
  async connect($) {
    return await this.server.connect($);
  }
  async close() {
    await this.server.close();
  }
  setToolRequestHandlers() {
    if (this._toolHandlersInitialized) return;
    (this.server.assertCanSetRequestHandler(w1(XY)),
      this.server.assertCanSetRequestHandler(w1(Y8)),
      this.server.registerCapabilities({ tools: { listChanged: !0 } }),
      this.server.setRequestHandler(XY, () => ({
        tools: Object.entries(this._registeredTools)
          .filter(([, $]) => $.enabled)
          .map(([$, X]) => {
            let J = {
              name: $,
              title: X.title,
              description: X.description,
              inputSchema: (() => {
                let Y = a0(X.inputSchema);
                return Y
                  ? wH(Y, { strictUnions: !0, pipeStrategy: "input" })
                  : ol;
              })(),
              annotations: X.annotations,
              execution: X.execution,
              _meta: X._meta,
            };
            if (X.outputSchema) {
              let Y = a0(X.outputSchema);
              if (Y)
                J.outputSchema = wH(Y, {
                  strictUnions: !0,
                  pipeStrategy: "output",
                });
            }
            return J;
          }),
      })),
      this.server.setRequestHandler(Y8, async ($, X) => {
        try {
          let J = this._registeredTools[$.params.name];
          if (!J)
            throw new h(m.InvalidParams, `Tool ${$.params.name} not found`);
          if (!J.enabled)
            throw new h(m.InvalidParams, `Tool ${$.params.name} disabled`);
          let Y = !!$.params.task,
            Q = J.execution?.taskSupport,
            W = "createTask" in J.handler;
          if ((Q === "required" || Q === "optional") && !W)
            throw new h(
              m.InternalError,
              `Tool ${$.params.name} has taskSupport '${Q}' but was not registered with registerToolTask`,
            );
          if (Q === "required" && !Y)
            throw new h(
              m.MethodNotFound,
              `Tool ${$.params.name} requires task augmentation (taskSupport: 'required')`,
            );
          if (Q === "optional" && !Y && W)
            return await this.handleAutomaticTaskPolling(J, $, X);
          let z = await this.validateToolInput(
              J,
              $.params.arguments,
              $.params.name,
            ),
            G = await this.executeToolHandler(J, z, X);
          if (Y) return G;
          return (await this.validateToolOutput(J, G, $.params.name), G);
        } catch (J) {
          if (J instanceof h) {
            if (J.code === m.UrlElicitationRequired) throw J;
          }
          return this.createToolError(
            J instanceof Error ? J.message : String(J),
          );
        }
      }),
      (this._toolHandlersInitialized = !0));
  }
  createToolError($) {
    return { content: [{ type: "text", text: $ }], isError: !0 };
  }
  async validateToolInput($, X, J) {
    if (!$.inputSchema) return;
    let Q = a0($.inputSchema) ?? $.inputSchema,
      W = await L5(Q, X);
    if (!W.success) {
      let z = "error" in W ? W.error : "Unknown error",
        G = M5(z);
      throw new h(
        m.InvalidParams,
        `Input validation error: Invalid arguments for tool ${J}: ${G}`,
      );
    }
    return W.data;
  }
  async validateToolOutput($, X, J) {
    if (!$.outputSchema) return;
    if (!("content" in X)) return;
    if (X.isError) return;
    if (!X.structuredContent)
      throw new h(
        m.InvalidParams,
        `Output validation error: Tool ${J} has an output schema but no structured content was provided`,
      );
    let Y = a0($.outputSchema),
      Q = await L5(Y, X.structuredContent);
    if (!Q.success) {
      let W = "error" in Q ? Q.error : "Unknown error",
        z = M5(W);
      throw new h(
        m.InvalidParams,
        `Output validation error: Invalid structured content for tool ${J}: ${z}`,
      );
    }
  }
  async executeToolHandler($, X, J) {
    let Y = $.handler;
    if ("createTask" in Y) {
      if (!J.taskStore) throw Error("No task store provided.");
      let W = { ...J, taskStore: J.taskStore };
      if ($.inputSchema) return await Promise.resolve(Y.createTask(X, W));
      else return await Promise.resolve(Y.createTask(W));
    }
    if ($.inputSchema) return await Promise.resolve(Y(X, J));
    else return await Promise.resolve(Y(J));
  }
  async handleAutomaticTaskPolling($, X, J) {
    if (!J.taskStore)
      throw Error("No task store provided for task-capable tool.");
    let Y = await this.validateToolInput($, X.params.arguments, X.params.name),
      Q = $.handler,
      W = { ...J, taskStore: J.taskStore },
      z = Y
        ? await Promise.resolve(Q.createTask(Y, W))
        : await Promise.resolve(Q.createTask(W)),
      G = z.task.taskId,
      U = z.task,
      H = U.pollInterval ?? 5000;
    while (
      U.status !== "completed" &&
      U.status !== "failed" &&
      U.status !== "cancelled"
    ) {
      await new Promise((N) => setTimeout(N, H));
      let K = await J.taskStore.getTask(G);
      if (!K)
        throw new h(m.InternalError, `Task ${G} not found during polling`);
      U = K;
    }
    return await J.taskStore.getTaskResult(G);
  }
  setCompletionRequestHandler() {
    if (this._completionHandlerInitialized) return;
    (this.server.assertCanSetRequestHandler(w1(QY)),
      this.server.registerCapabilities({ completions: {} }),
      this.server.setRequestHandler(QY, async ($) => {
        switch ($.params.ref.type) {
          case "ref/prompt":
            return (dD($), this.handlePromptCompletion($, $.params.ref));
          case "ref/resource":
            return (pD($), this.handleResourceCompletion($, $.params.ref));
          default:
            throw new h(
              m.InvalidParams,
              `Invalid completion reference: ${$.params.ref}`,
            );
        }
      }),
      (this._completionHandlerInitialized = !0));
  }
  async handlePromptCompletion($, X) {
    let J = this._registeredPrompts[X.name];
    if (!J) throw new h(m.InvalidParams, `Prompt ${X.name} not found`);
    if (!J.enabled) throw new h(m.InvalidParams, `Prompt ${X.name} disabled`);
    if (!J.argsSchema) return ZJ;
    let Q = Q1(J.argsSchema)?.[$.params.argument.name];
    if (!IK(Q)) return ZJ;
    let W = BA(Q);
    if (!W) return ZJ;
    let z = await W($.params.argument.value, $.params.context);
    return DA(z);
  }
  async handleResourceCompletion($, X) {
    let J = Object.values(this._registeredResourceTemplates).find(
      (W) => W.resourceTemplate.uriTemplate.toString() === X.uri,
    );
    if (!J) {
      if (this._registeredResources[X.uri]) return ZJ;
      throw new h(
        m.InvalidParams,
        `Resource template ${$.params.ref.uri} not found`,
      );
    }
    let Y = J.resourceTemplate.completeCallback($.params.argument.name);
    if (!Y) return ZJ;
    let Q = await Y($.params.argument.value, $.params.context);
    return DA(Q);
  }
  setResourceRequestHandlers() {
    if (this._resourceHandlersInitialized) return;
    (this.server.assertCanSetRequestHandler(w1(t5)),
      this.server.assertCanSetRequestHandler(w1(a5)),
      this.server.assertCanSetRequestHandler(w1(s5)),
      this.server.registerCapabilities({ resources: { listChanged: !0 } }),
      this.server.setRequestHandler(t5, async ($, X) => {
        let J = Object.entries(this._registeredResources)
            .filter(([Q, W]) => W.enabled)
            .map(([Q, W]) => ({ uri: Q, name: W.name, ...W.metadata })),
          Y = [];
        for (let Q of Object.values(this._registeredResourceTemplates)) {
          if (!Q.resourceTemplate.listCallback) continue;
          let W = await Q.resourceTemplate.listCallback(X);
          for (let z of W.resources) Y.push({ ...Q.metadata, ...z });
        }
        return { resources: [...J, ...Y] };
      }),
      this.server.setRequestHandler(a5, async () => {
        return {
          resourceTemplates: Object.entries(
            this._registeredResourceTemplates,
          ).map(([X, J]) => ({
            name: X,
            uriTemplate: J.resourceTemplate.uriTemplate.toString(),
            ...J.metadata,
          })),
        };
      }),
      this.server.setRequestHandler(s5, async ($, X) => {
        let J = new URL($.params.uri),
          Y = this._registeredResources[J.toString()];
        if (Y) {
          if (!Y.enabled)
            throw new h(m.InvalidParams, `Resource ${J} disabled`);
          return Y.readCallback(J, X);
        }
        for (let Q of Object.values(this._registeredResourceTemplates)) {
          let W = Q.resourceTemplate.uriTemplate.match(J.toString());
          if (W) return Q.readCallback(J, W, X);
        }
        throw new h(m.InvalidParams, `Resource ${J} not found`);
      }),
      (this._resourceHandlersInitialized = !0));
  }
  setPromptRequestHandlers() {
    if (this._promptHandlersInitialized) return;
    (this.server.assertCanSetRequestHandler(w1(e5)),
      this.server.assertCanSetRequestHandler(w1($Y)),
      this.server.registerCapabilities({ prompts: { listChanged: !0 } }),
      this.server.setRequestHandler(e5, () => ({
        prompts: Object.entries(this._registeredPrompts)
          .filter(([, $]) => $.enabled)
          .map(([$, X]) => {
            return {
              name: $,
              title: X.title,
              description: X.description,
              arguments: X.argsSchema ? tl(X.argsSchema) : void 0,
            };
          }),
      })),
      this.server.setRequestHandler($Y, async ($, X) => {
        let J = this._registeredPrompts[$.params.name];
        if (!J)
          throw new h(m.InvalidParams, `Prompt ${$.params.name} not found`);
        if (!J.enabled)
          throw new h(m.InvalidParams, `Prompt ${$.params.name} disabled`);
        if (J.argsSchema) {
          let Y = a0(J.argsSchema),
            Q = await L5(Y, $.params.arguments);
          if (!Q.success) {
            let G = "error" in Q ? Q.error : "Unknown error",
              U = M5(G);
            throw new h(
              m.InvalidParams,
              `Invalid arguments for prompt ${$.params.name}: ${U}`,
            );
          }
          let W = Q.data,
            z = J.callback;
          return await Promise.resolve(z(W, X));
        } else {
          let Y = J.callback;
          return await Promise.resolve(Y(X));
        }
      }),
      (this._promptHandlersInitialized = !0));
  }
  resource($, X, ...J) {
    let Y;
    if (typeof J[0] === "object") Y = J.shift();
    let Q = J[0];
    if (typeof X === "string") {
      if (this._registeredResources[X])
        throw Error(`Resource ${X} is already registered`);
      let W = this._createRegisteredResource($, void 0, X, Y, Q);
      return (
        this.setResourceRequestHandlers(),
        this.sendResourceListChanged(),
        W
      );
    } else {
      if (this._registeredResourceTemplates[$])
        throw Error(`Resource template ${$} is already registered`);
      let W = this._createRegisteredResourceTemplate($, void 0, X, Y, Q);
      return (
        this.setResourceRequestHandlers(),
        this.sendResourceListChanged(),
        W
      );
    }
  }
  registerResource($, X, J, Y) {
    if (typeof X === "string") {
      if (this._registeredResources[X])
        throw Error(`Resource ${X} is already registered`);
      let Q = this._createRegisteredResource($, J.title, X, J, Y);
      return (
        this.setResourceRequestHandlers(),
        this.sendResourceListChanged(),
        Q
      );
    } else {
      if (this._registeredResourceTemplates[$])
        throw Error(`Resource template ${$} is already registered`);
      let Q = this._createRegisteredResourceTemplate($, J.title, X, J, Y);
      return (
        this.setResourceRequestHandlers(),
        this.sendResourceListChanged(),
        Q
      );
    }
  }
  _createRegisteredResource($, X, J, Y, Q) {
    let W = {
      name: $,
      title: X,
      metadata: Y,
      readCallback: Q,
      enabled: !0,
      disable: () => W.update({ enabled: !1 }),
      enable: () => W.update({ enabled: !0 }),
      remove: () => W.update({ uri: null }),
      update: (z) => {
        if (typeof z.uri < "u" && z.uri !== J) {
          if ((delete this._registeredResources[J], z.uri))
            this._registeredResources[z.uri] = W;
        }
        if (typeof z.name < "u") W.name = z.name;
        if (typeof z.title < "u") W.title = z.title;
        if (typeof z.metadata < "u") W.metadata = z.metadata;
        if (typeof z.callback < "u") W.readCallback = z.callback;
        if (typeof z.enabled < "u") W.enabled = z.enabled;
        this.sendResourceListChanged();
      },
    };
    return ((this._registeredResources[J] = W), W);
  }
  _createRegisteredResourceTemplate($, X, J, Y, Q) {
    let W = {
      resourceTemplate: J,
      title: X,
      metadata: Y,
      readCallback: Q,
      enabled: !0,
      disable: () => W.update({ enabled: !1 }),
      enable: () => W.update({ enabled: !0 }),
      remove: () => W.update({ name: null }),
      update: (U) => {
        if (typeof U.name < "u" && U.name !== $) {
          if ((delete this._registeredResourceTemplates[$], U.name))
            this._registeredResourceTemplates[U.name] = W;
        }
        if (typeof U.title < "u") W.title = U.title;
        if (typeof U.template < "u") W.resourceTemplate = U.template;
        if (typeof U.metadata < "u") W.metadata = U.metadata;
        if (typeof U.callback < "u") W.readCallback = U.callback;
        if (typeof U.enabled < "u") W.enabled = U.enabled;
        this.sendResourceListChanged();
      },
    };
    this._registeredResourceTemplates[$] = W;
    let z = J.uriTemplate.variableNames;
    if (Array.isArray(z) && z.some((U) => !!J.completeCallback(U)))
      this.setCompletionRequestHandler();
    return W;
  }
  _createRegisteredPrompt($, X, J, Y, Q) {
    let W = {
      title: X,
      description: J,
      argsSchema: Y === void 0 ? void 0 : p1(Y),
      callback: Q,
      enabled: !0,
      disable: () => W.update({ enabled: !1 }),
      enable: () => W.update({ enabled: !0 }),
      remove: () => W.update({ name: null }),
      update: (z) => {
        if (typeof z.name < "u" && z.name !== $) {
          if ((delete this._registeredPrompts[$], z.name))
            this._registeredPrompts[z.name] = W;
        }
        if (typeof z.title < "u") W.title = z.title;
        if (typeof z.description < "u") W.description = z.description;
        if (typeof z.argsSchema < "u") W.argsSchema = p1(z.argsSchema);
        if (typeof z.callback < "u") W.callback = z.callback;
        if (typeof z.enabled < "u") W.enabled = z.enabled;
        this.sendPromptListChanged();
      },
    };
    if (((this._registeredPrompts[$] = W), Y)) {
      if (
        Object.values(Y).some((G) => {
          let U = G instanceof b6 ? G._def?.innerType : G;
          return IK(U);
        })
      )
        this.setCompletionRequestHandler();
    }
    return W;
  }
  _createRegisteredTool($, X, J, Y, Q, W, z, G, U) {
    ZK($);
    let H = {
      title: X,
      description: J,
      inputSchema: qA(Y),
      outputSchema: qA(Q),
      annotations: W,
      execution: z,
      _meta: G,
      handler: U,
      enabled: !0,
      disable: () => H.update({ enabled: !1 }),
      enable: () => H.update({ enabled: !0 }),
      remove: () => H.update({ name: null }),
      update: (K) => {
        if (typeof K.name < "u" && K.name !== $) {
          if (typeof K.name === "string") ZK(K.name);
          if ((delete this._registeredTools[$], K.name))
            this._registeredTools[K.name] = H;
        }
        if (typeof K.title < "u") H.title = K.title;
        if (typeof K.description < "u") H.description = K.description;
        if (typeof K.paramsSchema < "u") H.inputSchema = p1(K.paramsSchema);
        if (typeof K.outputSchema < "u") H.outputSchema = p1(K.outputSchema);
        if (typeof K.callback < "u") H.handler = K.callback;
        if (typeof K.annotations < "u") H.annotations = K.annotations;
        if (typeof K._meta < "u") H._meta = K._meta;
        if (typeof K.enabled < "u") H.enabled = K.enabled;
        this.sendToolListChanged();
      },
    };
    return (
      (this._registeredTools[$] = H),
      this.setToolRequestHandlers(),
      this.sendToolListChanged(),
      H
    );
  }
  tool($, ...X) {
    if (this._registeredTools[$])
      throw Error(`Tool ${$} is already registered`);
    let J, Y, Q, W;
    if (typeof X[0] === "string") J = X.shift();
    if (X.length > 1) {
      let G = X[0];
      if (RK(G)) {
        if (
          ((Y = X.shift()),
          X.length > 1 &&
            typeof X[0] === "object" &&
            X[0] !== null &&
            !RK(X[0]))
        )
          W = X.shift();
      } else if (typeof G === "object" && G !== null) {
        if (Object.values(G).some((U) => typeof U === "object" && U !== null))
          throw Error(
            `Tool ${$} expected a Zod schema or ToolAnnotations, but received an unrecognized object`,
          );
        W = X.shift();
      }
    }
    let z = X[0];
    return this._createRegisteredTool(
      $,
      void 0,
      J,
      Y,
      Q,
      W,
      { taskSupport: "forbidden" },
      void 0,
      z,
    );
  }
  registerTool($, X, J) {
    if (this._registeredTools[$])
      throw Error(`Tool ${$} is already registered`);
    let {
      title: Y,
      description: Q,
      inputSchema: W,
      outputSchema: z,
      annotations: G,
      _meta: U,
    } = X;
    return this._createRegisteredTool(
      $,
      Y,
      Q,
      W,
      z,
      G,
      { taskSupport: "forbidden" },
      U,
      J,
    );
  }
  prompt($, ...X) {
    if (this._registeredPrompts[$])
      throw Error(`Prompt ${$} is already registered`);
    let J;
    if (typeof X[0] === "string") J = X.shift();
    let Y;
    if (X.length > 1) Y = X.shift();
    let Q = X[0],
      W = this._createRegisteredPrompt($, void 0, J, Y, Q);
    return (this.setPromptRequestHandlers(), this.sendPromptListChanged(), W);
  }
  registerPrompt($, X, J) {
    if (this._registeredPrompts[$])
      throw Error(`Prompt ${$} is already registered`);
    let { title: Y, description: Q, argsSchema: W } = X,
      z = this._createRegisteredPrompt($, Y, Q, W, J);
    return (this.setPromptRequestHandlers(), this.sendPromptListChanged(), z);
  }
  isConnected() {
    return this.server.transport !== void 0;
  }
  async sendLoggingMessage($, X) {
    return this.server.sendLoggingMessage($, X);
  }
  sendResourceListChanged() {
    if (this.isConnected()) this.server.sendResourceListChanged();
  }
  sendToolListChanged() {
    if (this.isConnected()) this.server.sendToolListChanged();
  }
  sendPromptListChanged() {
    if (this.isConnected()) this.server.sendPromptListChanged();
  }
}
var ol = { type: "object", properties: {} };
function FA($) {
  return (
    $ !== null &&
    typeof $ === "object" &&
    "parse" in $ &&
    typeof $.parse === "function" &&
    "safeParse" in $ &&
    typeof $.safeParse === "function"
  );
}
function jA($) {
  return "_def" in $ || "_zod" in $ || FA($);
}
function RK($) {
  if (typeof $ !== "object" || $ === null) return !1;
  if (jA($)) return !1;
  if (Object.keys($).length === 0) return !0;
  return Object.values($).some(FA);
}
function qA($) {
  if (!$) return;
  if (RK($)) return p1($);
  if (!jA($))
    throw Error(
      "inputSchema must be a Zod schema or raw shape, received an unrecognized object",
    );
  return $;
}
function tl($) {
  let X = Q1($);
  if (!X) return [];
  return Object.entries(X).map(([J, Y]) => {
    let Q = dq(Y),
      W = pq(Y);
    return { name: J, description: Q, required: !W };
  });
}
function w1($) {
  let J = Q1($)?.method;
  if (!J) throw Error("Schema is missing a method literal");
  let Y = A5(J);
  if (typeof Y === "string") return Y;
  throw Error("Schema method literal must be a string");
}
function DA($) {
  return {
    completion: {
      values: $.slice(0, 100),
      total: $.length,
      hasMore: $.length > 100,
    },
  };
}
var ZJ = { completion: { values: [], hasMore: !1 } };
function al($, X, J, Y, Q) {
  let W = {};
  if (Q?.searchHint) W["anthropic/searchHint"] = Q.searchHint;
  if (Q?.alwaysLoad) W["anthropic/alwaysLoad"] = !0;
  return {
    name: $,
    description: X,
    inputSchema: J,
    handler: Y,
    annotations: Q?.annotations,
    _meta: Object.keys(W).length > 0 ? W : void 0,
  };
}
function sl($) {
  let X = new PK(
    { name: $.name, version: $.version ?? "1.0.0" },
    { capabilities: { tools: $.tools ? {} : void 0 } },
  );
  if ($.tools)
    $.tools.forEach((J) => {
      for (let Y of Object.values(J.inputSchema)) {
        if (!el(Y)) continue;
        let Q = Y.description;
        if (Q && !z6.has(Y)) z6.add(Y, { description: Q });
      }
      X.registerTool(
        J.name,
        {
          description: J.description,
          inputSchema: J.inputSchema,
          annotations: J.annotations,
          _meta: J._meta,
        },
        J.handler,
      );
    });
  return { type: "sdk", name: $.name, instance: X };
}
function el($) {
  return typeof $ === "object" && $ !== null && "_zod" in $;
}
function LA($) {
  let X;
  return () => (X ??= $());
}
var MA = 15000,
  $c = LA(() =>
    Y1.object({
      session_id: Y1.string(),
      ws_url: Y1.string(),
      work_dir: Y1.string().optional(),
      session_key: Y1.string().optional(),
    }),
  );
class Y4 extends Error {
  constructor($) {
    super($);
    this.name = "DirectConnectError";
  }
}
class IA {
  options;
  ws;
  sessionId;
  workDir;
  abortController;
  readyState = !1;
  closed = !1;
  exitError;
  messages = new b1();
  readyPromise;
  readyResolve;
  readyReject;
  abortHandler;
  partialChunks = [];
  constructor($) {
    this.options = $;
    ((this.abortController = $.abortController ?? new AbortController()),
      (this.readyPromise = new Promise((X, J) => {
        ((this.readyResolve = X), (this.readyReject = J));
      })),
      this.readyPromise.catch(() => {}),
      this.initialize());
  }
  get ready() {
    return this.readyPromise;
  }
  getSessionId() {
    return this.sessionId;
  }
  getWorkDir() {
    return this.workDir;
  }
  async initialize() {
    if (this.abortController.signal.aborted) {
      this.failInit(new $6("Connection aborted"));
      return;
    }
    ((this.abortHandler = () => {
      (this.close(), (this.exitError = new $6("Connection aborted by user")));
    }),
      this.abortController.signal.addEventListener("abort", this.abortHandler));
    let $;
    try {
      let Q = await Jc(this.options);
      ((this.sessionId = Q.sessionId),
        (this.workDir = Q.workDir),
        ($ = Q.wsUrl));
    } catch (Q) {
      this.failInit(d4(Q));
      return;
    }
    if (this.closed) {
      if (this.options.deleteSessionOnClose && this.sessionId)
        AA(this.options.serverUrl, this.sessionId, this.options.authToken);
      return;
    }
    let X = {};
    if (this.options.authToken)
      X.authorization = `Bearer ${this.options.authToken}`;
    let J = new WebSocket($, { headers: X });
    this.ws = J;
    let Y = setTimeout(
      (Q, W) => {
        if (!Q.readyState) {
          W.close();
          let z = new Y4(`WebSocket connection timeout after ${MA}ms`);
          ((Q.exitError = z), Q.readyReject?.(z));
        }
      },
      MA,
      this,
      J,
    );
    (J.addEventListener("open", () => {
      (clearTimeout(Y),
        (this.readyState = !0),
        J6(
          `[DirectConnectTransport] Connected to ${this.options.serverUrl}, session=${this.sessionId}`,
        ),
        this.readyResolve?.());
    }),
      J.addEventListener("message", (Q) => {
        let W = typeof Q.data === "string" ? Q.data : "";
        if (
          W.indexOf(`
`) === -1
        ) {
          if (W) this.partialChunks.push(W);
          return;
        }
        let z = this.partialChunks.join("") + W;
        this.partialChunks.length = 0;
        let G = z.split(`
`),
          U = G.pop() ?? "";
        if (U) this.partialChunks.push(U);
        for (let H of G) {
          if (!H) continue;
          let K;
          try {
            K = m$(H);
          } catch (N) {
            J6(
              `DirectConnect: dropped malformed JSON line (${H.length} bytes): ${N}`,
            );
            continue;
          }
          this.messages.enqueue(K);
        }
      }),
      J.addEventListener("error", () => {
        clearTimeout(Y);
        let Q = new Y4("WebSocket connection error");
        ((this.exitError = Q), this.readyReject?.(Q), this.messages.done());
      }),
      J.addEventListener("close", (Q) => {
        if (
          ((this.readyState = !1),
          (this.closed = !0),
          Q.code !== 1000 && Q.code !== 1001 && !this.exitError)
        )
          this.exitError = new Y4(
            `WebSocket closed abnormally: ${Q.code} ${Q.reason}`,
          );
        this.messages.done();
      }));
  }
  failInit($) {
    ((this.exitError = $),
      (this.closed = !0),
      this.readyReject?.($),
      this.messages.done());
  }
  async write($) {
    if (this.abortController.signal.aborted) throw new $6("Operation aborted");
    if (!this.readyState) await this.readyPromise;
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN)
      throw new Y4("Transport is not ready for writing");
    this.ws.send($);
  }
  isReady() {
    return this.readyState && this.ws?.readyState === WebSocket.OPEN;
  }
  endInput() {}
  [Symbol.dispose]() {
    this.close();
  }
  close() {
    if (this.closed) return;
    if (((this.closed = !0), (this.readyState = !1), this.abortHandler))
      (this.abortController.signal.removeEventListener(
        "abort",
        this.abortHandler,
      ),
        (this.abortHandler = void 0));
    if (!this.abortController.signal.aborted) this.abortController.abort();
    if (this.ws && this.ws.readyState === WebSocket.OPEN)
      this.ws.close(1000, "Normal closure");
    if (
      (this.messages.done(),
      this.options.deleteSessionOnClose && this.sessionId)
    )
      AA(this.options.serverUrl, this.sessionId, this.options.authToken);
  }
  async *readMessages() {
    if ((yield* this.messages, this.exitError)) throw this.exitError;
  }
}
function Xc($) {
  if ($.startsWith("cc://")) {
    let Y = $.slice(5),
      Q = new URL(`http://${Y}`),
      W = Q.pathname.slice(1) || void 0;
    return { serverUrl: `http://${Q.host}`, authToken: W };
  }
  if ($.startsWith("cc+unix://"))
    throw new Y4(
      "Unix socket connect (cc+unix://) is not supported by the SDK transport",
    );
  let X = /^https?:\/\//i.test($) ? $ : `http://${$}`,
    J = new URL(X);
  return { serverUrl: `${J.protocol}//${J.host}`, authToken: void 0 };
}
async function Jc($) {
  let X = { "content-type": "application/json" };
  if ($.authToken) X.authorization = `Bearer ${$.authToken}`;
  let J = {};
  if ($.cwd) J.cwd = $.cwd;
  if ($.sessionKey) J.session_key = $.sessionKey;
  if ($.permissionMode) J.permission_mode = $.permissionMode;
  let Y;
  try {
    Y = await fetch(`${$.serverUrl}/sessions`, {
      method: "POST",
      headers: X,
      body: O$(J),
    });
  } catch (W) {
    throw new Y4(
      `Failed to connect to server at ${$.serverUrl}: ${W instanceof Error ? W.message : String(W)}`,
    );
  }
  if (!Y.ok) {
    let W = await Y.text().catch(() => "");
    throw new Y4(
      `Failed to create session: ${Y.status} ${Y.statusText}${W ? ` — ${W}` : ""}`,
    );
  }
  let Q = $c().safeParse(await Y.json());
  if (!Q.success) throw new Y4(`Invalid session response: ${Q.error.message}`);
  return {
    sessionId: Q.data.session_id,
    wsUrl: Q.data.ws_url,
    workDir: Q.data.work_dir,
  };
}
async function AA($, X, J) {
  let Y = {};
  if (J) Y.authorization = `Bearer ${J}`;
  try {
    await fetch(`${$}/sessions/${X}`, { method: "DELETE", headers: Y });
  } catch {}
}
async function Oc($, X) {
  try {
    await zc($, X);
  } catch (J) {
    if (!L0(J)) throw J;
  }
}
async function wc($, X) {
  if (!$) return;
  let J = $;
  try {
    let Y = m$($);
    if (Y?.claudeAiOauth?.refreshToken)
      (delete Y.claudeAiOauth.refreshToken, (J = O$(Y)));
  } catch {}
  await vA(X, J, { mode: 384 });
}
function Bc() {
  if (process.platform !== "darwin") return Promise.resolve(void 0);
  let $ = Nq(Kq);
  return new Promise((X) => {
    Qc(
      "security",
      ["find-generic-password", "-a", Vq(), "-w", "-s", $],
      { encoding: "utf-8", timeout: 5000 },
      (J, Y) => X(J ? void 0 : Y.trim() || void 0),
    );
  });
}
async function _A($, X, J, Y, Q = 60000) {
  if (!H$(X)) return;
  let W = k6(J),
    z = await U4(
      $.load({ projectKey: W, sessionId: X }),
      Q,
      `SessionStore.load() timed out after ${Q}ms for session ${X}`,
    );
  if (!z || z.length === 0) return;
  let G = A6(Kc(), `claude-resume-${kK()}`);
  try {
    let U = A6(G, "projects", W);
    await EK(U, { recursive: !0 });
    let H = A6(U, `${X}.jsonl`);
    await R9(H, z);
    let K = Y?.CLAUDE_CONFIG_DIR ?? process.env.CLAUDE_CONFIG_DIR,
      N = K ?? A6(SK(), ".claude"),
      V;
    try {
      V = await SA(A6(N, ".credentials.json"), "utf-8");
    } catch (O) {
      if (!L0(O)) throw O;
    }
    if (
      !K &&
      !(Y ?? process.env).ANTHROPIC_API_KEY &&
      !(Y ?? process.env).CLAUDE_CODE_OAUTH_TOKEN
    )
      V = (await Bc()) ?? V;
    if (
      (await wc(V, A6(G, ".credentials.json")),
      await Oc(A6(K ?? SK(), ".claude.json"), A6(G, ".claude.json")),
      $.listSubkeys)
    ) {
      let O = A6(U, X),
        w = await U4(
          $.listSubkeys({ projectKey: W, sessionId: X }),
          Q,
          `SessionStore.listSubkeys() timed out after ${Q}ms for session ${X}`,
        );
      for (let B of w) {
        let F = bJ(O, B + ".jsonl");
        if (
          !B ||
          CA(B) ||
          B.split(/[\\/]/).includes("..") ||
          !F.startsWith(O + _K)
        ) {
          S$(`[SessionStore] skipping unsafe subpath from listSubkeys: ${B}`, {
            level: "warn",
          });
          continue;
        }
        let j = await U4(
          $.load({ projectKey: W, sessionId: X, subpath: B }),
          Q,
          `SessionStore.load() timed out after ${Q}ms for session ${X} subpath ${B}`,
        );
        if (!j || j.length === 0) continue;
        let I = [],
          Z = [];
        for (let _ of j)
          if (fA(_)) I.push(_);
          else Z.push(_);
        if (Z.length > 0) (await EK(ZA(F), { recursive: !0 }), await R9(F, Z));
        if (I.length > 0) {
          let _ = I.at(-1),
            T = bJ(O, B + ".meta.json");
          await EK(ZA(T), { recursive: !0 });
          let { type: B$, ..._$ } = _;
          await vA(T, O$(_$), { mode: 384 });
        }
      }
    }
    return G;
  } catch (U) {
    throw (await dY(G), U);
  }
}
function vK($, X, J, Y) {
  let {
      systemPrompt: Q,
      settings: W,
      managedSettings: z,
      settingSources: G,
      sandbox: U,
      ...H
    } = $ ?? {},
    K,
    N,
    V;
  if (Q === void 0) K = "";
  else if (typeof Q === "string") K = Q;
  else if (Array.isArray(Q)) K = Q;
  else if (Q.type === "preset")
    ((N = Q.append), (V = Q.excludeDynamicSections));
  let O = H.pathToClaudeCodeExecutable;
  if (!O) {
    let w6 = Vc(import.meta.url),
      x6 = Hc(w6),
      a6 = K7((I8) => x6.resolve(I8));
    if (a6) O = a6;
    else
      try {
        O = x6.resolve("./cli.js");
      } catch {
        throw Error(
          `Native CLI binary for ${process.platform}-${process.arch} not found. Reinstall @anthropic-ai/claude-agent-sdk without --omit=optional, or set options.pathToClaudeCodeExecutable.`,
        );
      }
  }
  process.env.CLAUDE_AGENT_SDK_VERSION = "0.2.118";
  let {
    abortController: w = X0(),
    additionalDirectories: B = [],
    agent: F,
    agents: j,
    allowedTools: I = [],
    betas: Z,
    canUseTool: _,
    continue: T,
    cwd: B$,
    debug: _$,
    debugFile: V6,
    disallowedTools: W4 = [],
    tools: z4,
    env: t6,
    executable: s1 = J0() ? "bun" : "node",
    executableArgs: _4 = [],
    extraArgs: e1 = {},
    fallbackModel: l,
    enableFileCheckpointing: F8,
    toolConfig: RJ,
    forkSession: j8,
    hooks: $0,
    includeHookEvents: L8,
    includePartialMessages: PJ,
    onElicitation: g$,
    persistSession: G4,
    sessionStore: O6,
    thinking: M8,
    effort: hA,
    maxThinkingTokens: iY,
    maxTurns: uA,
    maxBudgetUsd: mA,
    taskBudget: lA,
    mcpServers: xK,
    model: cA,
    outputFormat: TK,
    permissionMode: dA = "default",
    allowDangerouslySkipPermissions: pA = !1,
    permissionPromptToolName: iA,
    plugins: nA,
    getOAuthToken: fK,
    workload: yK,
    resume: gK,
    resumeSessionAt: rA,
    sessionId: oA,
    stderr: tA,
    strictMcpConfig: aA,
  } = H;
  if (O6 && G4 === !1)
    throw Error(
      "sessionStore cannot be used with persistSession: false -- the storage adapter requires local writes to mirror from. Use CLAUDE_CONFIG_DIR=/tmp for ephemeral local writes with external mirroring.",
    );
  if (O6 && T && !gK && !O6.listSessions)
    throw Error(
      "Options.continue with sessionStore requires store.listSessions to be implemented",
    );
  if (O6 && F8)
    throw Error(
      "enableFileCheckpointing is not yet supported with sessionStore (backup blobs are not mirrored, so rewindFiles() fails after a store-backed resume).",
    );
  if (O6 && H.spawnClaudeCodeProcess)
    S$(
      "sessionStore with custom spawnClaudeCodeProcess: ensure the subprocess CLAUDE_CONFIG_DIR matches the parent (same path, same separators) or transcript_mirror frames will be dropped.",
      { level: "warn" },
    );
  let hK = TK?.type === "json_schema" ? TK.schema : void 0,
    _6 = t6 ? { ...t6 } : { ...process.env };
  if (!_6.CLAUDE_CODE_ENTRYPOINT) _6.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
  if (F8) _6.CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING = "true";
  if (fK) _6.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH = "1";
  if (RJ?.askUserQuestion?.previewFormat)
    _6.CLAUDE_CODE_QUESTION_PREVIEW_FORMAT = RJ.askUserQuestion.previewFormat;
  let nY = {};
  if ((pY.propagation.inject(pY.context.active(), nY), "traceparent" in nY)) {
    for (let w6 of ["TRACEPARENT", "TRACESTATE"])
      if (!(w6 in (t6 ?? {}))) delete _6[w6];
  }
  for (let [w6, x6] of Object.entries(nY)) {
    let a6 = w6.toUpperCase();
    if (!(a6 in (t6 ?? {}))) _6[a6] = x6;
  }
  let uK = {},
    mK = new Map();
  if (xK)
    for (let [w6, x6] of Object.entries(xK))
      if (x6.type === "sdk" && x6.instance) mK.set(w6, x6.instance);
      else uK[w6] = x6;
  let A8;
  if (M8)
    switch (M8.type) {
      case "adaptive":
        A8 = { type: "adaptive", display: M8.display };
        break;
      case "enabled":
        A8 = {
          type: "enabled",
          budgetTokens: M8.budgetTokens,
          display: M8.display,
        };
        break;
      case "disabled":
        A8 = { type: "disabled" };
        break;
    }
  else if (iY !== void 0)
    A8 =
      iY === 0 ? { type: "disabled" } : { type: "enabled", budgetTokens: iY };
  if (J) _6.CLAUDE_CONFIG_DIR = J;
  let lK = new q9({
      abortController: w,
      additionalDirectories: B,
      agent: F,
      betas: Z,
      cwd: B$,
      debug: _$,
      debugFile: V6,
      executable: s1,
      executableArgs: _4,
      extraArgs: yK ? { ...e1, workload: yK } : e1,
      pathToClaudeCodeExecutable: O,
      env: _6,
      forkSession: j8,
      stderr: tA,
      thinkingConfig: A8,
      effort: hA,
      maxTurns: uA,
      maxBudgetUsd: mA,
      taskBudget: lA,
      model: cA,
      fallbackModel: l,
      jsonSchema: hK,
      permissionMode: dA,
      allowDangerouslySkipPermissions: pA,
      permissionPromptToolName: iA,
      continueConversation: O6 ? void 0 : T,
      resume: gK,
      resumeSessionAt: rA,
      sessionId: oA,
      settings: typeof W === "object" ? O$(W) : W,
      managedSettings: z ? O$(z) : void 0,
      settingSources: G,
      allowedTools: I,
      disallowedTools: W4,
      tools: z4,
      mcpServers: uK,
      strictMcpConfig: aA,
      canUseTool: !!_,
      hooks: !!$0,
      includeHookEvents: L8,
      includePartialMessages: PJ,
      persistSession: G4,
      sessionMirror: !!O6,
      plugins: nA,
      sandbox: U,
      spawnClaudeCodeProcess: H.spawnClaudeCodeProcess,
      deferSpawn: Y,
    }),
    sA = {
      systemPrompt: K,
      appendSystemPrompt: N,
      planModeInstructions: H.planModeInstructions,
      appendSubagentSystemPrompt: H.appendSubagentSystemPrompt,
      excludeDynamicSections: V,
      agents: j,
      title: H.title,
      promptSuggestions: H.promptSuggestions,
      agentProgressSummaries: H.agentProgressSummaries,
    },
    rY = new D9(lK, X, _, $0, w, mK, hK, sA, g$, fK);
  if (O6) {
    let w6 = () => A6(_6.CLAUDE_CONFIG_DIR ?? A6(SK(), ".claude"), "projects"),
      x6 = new uW(
        async (a6, I8) => {
          let Z8 = EA(a6, w6());
          if (Z8) await O6.append(Z8, I8);
          else
            S$(
              `[SessionStore] dropping mirror frame: filePath ${a6} is not under ${w6()} -- subprocess CLAUDE_CONFIG_DIR likely differs from parent (custom spawnClaudeCodeProcess / container?)`,
              { level: "warn" },
            );
        },
        void 0,
        (a6, I8) => {
          let Z8 = EA(a6, w6());
          if (Z8) rY.reportMirrorError(Z8, I8.message);
        },
      );
    rY.setTranscriptMirrorBatcher(x6);
  }
  return {
    queryInstance: rY,
    transport: lK,
    abortController: w,
    processEnv: _6,
  };
}
function CK($, X, J, Y) {
  if (typeof J === "string")
    X.write(
      O$({
        type: "user",
        session_id: "",
        message: { role: "user", content: [{ type: "text", text: J }] },
        parent_tool_use_id: null,
      }) +
        `
`,
    );
  else $.streamInput(J).catch((Q) => Y.abort(Q));
}
var qc = new Set(["EBUSY", "EMFILE", "ENFILE", "ENOTEMPTY", "EPERM"]);
async function dY($) {
  for (let X = 0; ; X++)
    try {
      return await Uc($, { recursive: !0, force: !0 });
    } catch (J) {
      if (X >= 4 || !qc.has(y6(J) ?? "")) return;
      await cK((X + 1) * 100);
    }
}
function Dc($, X) {
  $.waitForExit()
    .catch(() => {})
    .finally(() => dY(X));
}
function K7$({ prompt: $, options: X }) {
  if ((X?.resume || X?.continue) && X?.sessionStore) {
    let {
        queryInstance: W,
        transport: z,
        abortController: G,
        processEnv: U,
      } = vK({ ...X }, typeof $ === "string", void 0, !0),
      H = bJ(X.cwd ?? "."),
      K = X.sessionStore,
      N = X.loadTimeoutMs ?? 60000,
      V = X.resume;
    return (
      (async () => {
        if (!V)
          V = (
            await U4(
              K.listSessions(k6(H)),
              N,
              `SessionStore.listSessions() timed out after ${N}ms`,
            )
          )
            .slice()
            .sort((B, F) => F.mtime - B.mtime)[0]?.sessionId;
        if (!V) return;
        return _A(K, V, H, X.env, X.loadTimeoutMs);
      })()
        .then((w) => {
          if (w)
            (z.updateResume(V),
              z.updateEnv({ CLAUDE_CONFIG_DIR: w }),
              (U.CLAUDE_CONFIG_DIR = w),
              W.addCleanupCallback(() => Dc(z, w)));
          if (!W.isClosed()) z.spawn();
        })
        .catch((w) => {
          let B = d4(w);
          (z.spawnAbort(B), W.setError(B));
        }),
      CK(W, z, $, G),
      W
    );
  }
  let {
    queryInstance: J,
    transport: Y,
    abortController: Q,
  } = vK(X, typeof $ === "string");
  return (CK(J, Y, $, Q), J);
}
async function N7$({ options: $, initializeTimeoutMs: X = 60000 } = {}) {
  let J,
    Y = $?.resume;
  if ((Y || $?.continue) && $?.sessionStore) {
    let G = bJ($.cwd ?? ".");
    if (!Y) {
      if (!$.sessionStore.listSessions)
        throw Error(
          "Options.continue with sessionStore requires store.listSessions to be implemented",
        );
      let U = $.loadTimeoutMs ?? 60000;
      Y = (
        await U4(
          $.sessionStore.listSessions(k6(G)),
          U,
          `SessionStore.listSessions() timed out after ${U}ms`,
        )
      )
        .slice()
        .sort((K, N) => N.mtime - K.mtime)[0]?.sessionId;
    }
    if (Y) J = await _A($.sessionStore, Y, G, $.env, $.loadTimeoutMs);
  }
  let Q, W, z;
  try {
    let V = function () {
        if (N) return;
        ((N = !0), K.close());
      },
      G = vK(J && Y && Y !== $?.resume ? { ...$, resume: Y } : $, !1, J);
    Q = G.queryInstance;
    let { transport: U, abortController: H } = G;
    W = U;
    let K = G.queryInstance;
    if (J) {
      let O = J;
      K.addCleanupCallback(() => {
        z = U.waitForExit()
          .catch(() => {})
          .then(() => dY(O));
      });
    }
    await U4(
      K.initializationResult(),
      X,
      `Subprocess initialization did not complete within ${X}ms — check authentication and network connectivity`,
    );
    let N = !1;
    return {
      query(O) {
        if (N) throw Error("WarmQuery.query() can only be called once");
        N = !0;
        try {
          CK(K, U, O, H);
        } catch (w) {
          throw (K.close(), w);
        }
        if (typeof O === "string") K.setIsSingleUserTurn(!0);
        return K;
      },
      close: V,
      async [Symbol.asyncDispose]() {
        ((N = !0), K.close(), await z);
      },
    };
  } catch (G) {
    if ((Q?.close(), J && !z)) {
      let U = W;
      z = (U ? U.waitForExit().catch(() => {}) : Promise.resolve()).then(() =>
        dY(J),
      );
    }
    throw (await z, G);
  }
}
function V7$($) {
  return fz($);
}
function O7$($, X) {
  return vB($, X);
}
async function w7$($, X) {
  let Y = [];
  try {
    const J = q$(Y, fz(X), 1);
    await J.send($);
    for await (let U of J.stream()) if (U.type === "result") return U;
    throw Error("Session ended without result message");
  } catch (Q) {
    var W = Q,
      z = 1;
  } finally {
    var G = D$(Y, W, z);
    G && (await G);
  }
}
async function B7$($, X) {
  if (X?.sessionStore) return Mc(X.sessionStore, $, X);
  return mB($, X);
}
async function q7$($) {
  if ($?.sessionStore) return jc($.sessionStore, $);
  return cB($);
}
async function D7$($, X) {
  if (X?.sessionStore) return Ac(X.sessionStore, $, X);
  return dB($, X);
}
async function F7$($, X, J) {
  if (J?.sessionStore) return Ic(J.sessionStore, $, X, J.dir);
  return rB($, X, J);
}
async function j7$($, X, J) {
  if (J?.sessionStore) return Zc(J.sessionStore, $, X, J.dir);
  return oB($, X, J);
}
async function L7$($, X) {
  if (!H$($)) throw Error(`Invalid sessionId: ${$}`);
  if (X?.sessionStore) {
    if (!X.sessionStore.delete) return;
    let J = k6(X.dir);
    await X.sessionStore.delete({ projectKey: J, sessionId: $ });
    return;
  }
  return tB($, X);
}
async function M7$($, X) {
  if (X?.sessionStore) return bc(X.sessionStore, $, X);
  return eB($, X);
}
async function A7$($, X, J) {
  if (!H$($)) throw Error(`Invalid sessionId: ${$}`);
  let Y = await i4($, J?.dir);
  if (!Y) throw Error(`Session ${$} not found`);
  let Q = k6(J?.dir),
    W = J?.batchSize && J.batchSize > 0 ? J.batchSize : gW;
  if (
    (await bA(Y.filePath, { projectKey: Q, sessionId: $ }, X, W),
    J?.includeSubagents === !1)
  )
    return;
  let z = Y.filePath.replace(/\.jsonl$/, ""),
    G = A6(z, "subagents");
  for (let U of await Fc(G)) {
    let H = kA(z, U).split(_K);
    H[H.length - 1] = H.at(-1).replace(/\.jsonl$/, "");
    let K = { projectKey: Q, sessionId: $, subpath: H.join("/") };
    await bA(U, K, X, W);
    let N = U.replace(/\.jsonl$/, ".meta.json");
    try {
      let V = m$(await SA(N, "utf8"));
      await X.append(K, [{ type: "agent_metadata", ...V }]);
    } catch (V) {
      if (!L0(V)) throw V;
    }
  }
}
async function bA($, X, J, Y) {
  let Q = Nc({ input: Yc($, { encoding: "utf8" }), crlfDelay: 1 / 0 }),
    W = [],
    z = 0;
  for await (let G of Q) {
    if (!G) continue;
    if ((W.push(m$(G)), (z += G.length), W.length >= Y || z >= hW))
      (await J.append(X, W), (W = []), (z = 0));
  }
  if (W.length > 0) await J.append(X, W);
}
async function Fc($) {
  let X = [];
  async function J(Y) {
    let Q;
    try {
      Q = await Gc(Y, { withFileTypes: !0 });
    } catch {
      return;
    }
    for (let W of Q) {
      let z = A6(Y, W.name);
      if (W.isDirectory()) await J(z);
      else if (W.isFile() && W.name.endsWith(".jsonl")) X.push(z);
    }
  }
  return (await J($), X);
}
async function I7$($, X) {
  if (X?.sessionStore) return Rc(X.sessionStore, $, X.dir);
  return Yq($, X);
}
async function Z7$($, X, J) {
  if (J?.sessionStore) return Pc(J.sessionStore, $, X, J);
  return Wq($, X, J);
}
function xA($) {
  let X = bJ($ ?? "."),
    J;
  try {
    J = Wc(X);
  } catch {
    J = X;
  }
  return J.normalize("NFC");
}
function k6($) {
  return k1(xA($));
}
function TA($) {
  return (
    $.map((X) => O$(X)).join(`
`) +
    `
`
  );
}
function RA($, X, J) {
  if (X !== void 0 && X > 0) return $.slice(J, J + X);
  if (J > 0) return $.slice(J);
  return $;
}
function fA($) {
  return (
    typeof $ === "object" &&
    $ !== null &&
    "type" in $ &&
    $.type === "agent_metadata"
  );
}
async function jc($, X) {
  let J = xA(X.dir),
    Y = k1(J),
    Q = X.offset ?? 0,
    W = X.limit;
  if ($.listSessionSummaries) {
    let H = await $.listSessionSummaries(Y),
      K = $.listSessions
        ? new Map((await $.listSessions(Y)).map((w) => [w.sessionId, w]))
        : void 0,
      N = [];
    for (let w of H) {
      let B = K?.get(w.sessionId);
      if (K && !B) continue;
      let F = B !== void 0 && w.mtime < B.mtime;
      N.push({
        sessionId: w.sessionId,
        mtime: F ? B.mtime : w.mtime,
        info: F ? void 0 : dK(w, J),
      });
    }
    if (K) {
      let w = new Set(H.map((B) => B.sessionId));
      for (let [B, F] of K)
        if (!w.has(B)) N.push({ sessionId: B, mtime: F.mtime });
    } else
      S$(
        "listSessionSummaries without listSessions: gap-fill skipped; sessions lacking a sidecar will be omitted",
      );
    N.sort((w, B) => B.mtime - w.mtime);
    let V = RA(N, W, Q),
      O = V.filter((w) => w.info === void 0);
    if (O.length > 0) {
      let w = await PA($, O, X.dir, J),
        B = new Map(w.map((F) => [F.sessionId, F]));
      for (let F of V)
        if (F.info === void 0) F.info = B.get(F.sessionId) ?? null;
    }
    return V.flatMap((w) => (w.info ? [w.info] : []));
  }
  if (!$.listSessions)
    throw Error(
      "sessionStore.listSessions is not implemented -- cannot list sessions. Provide a store with a listSessions() method.",
    );
  let G = (await $.listSessions(Y)).slice().sort((H, K) => K.mtime - H.mtime),
    U = RA(G, W, Q);
  return PA($, U, X.dir, J);
}
async function PA($, X, J, Y) {
  return (
    await Promise.allSettled(
      X.map(async (W) => {
        let z = await gA($, W.sessionId, J);
        if (!z) return null;
        let G = P0(W.sessionId, yA(z, W.mtime), Y);
        return G ? { ...G, lastModified: W.mtime } : null;
      }),
    )
  ).flatMap((W, z) => {
    let G = X[z];
    if (W.status === "fulfilled") return W.value ? [W.value] : [];
    return [{ sessionId: G.sessionId, summary: "", lastModified: G.mtime }];
  });
}
function yA($, X) {
  let J = Buffer.from($, "utf-8"),
    Y = J.length,
    Q = J.subarray(0, g6).toString("utf-8"),
    W = Y > g6 ? J.subarray(Y - g6).toString("utf-8") : Q;
  return { mtime: X, size: Y, head: Q, tail: W };
}
function Lc($) {
  let X = $.trimEnd(),
    J = X.slice(
      X.lastIndexOf(`
`) + 1,
    );
  try {
    let Y = m$(J);
    if (
      typeof Y === "object" &&
      Y !== null &&
      "timestamp" in Y &&
      typeof Y.timestamp === "string"
    ) {
      let Q = Date.parse(Y.timestamp);
      if (!Number.isNaN(Q)) return Q;
    }
  } catch {}
  return Date.now();
}
async function gA($, X, J) {
  let Y = k6(J),
    Q = await $.load({ projectKey: Y, sessionId: X });
  if (!Q || Q.length === 0) return null;
  return TA(Q);
}
async function Mc($, X, J) {
  if (!H$(X)) return [];
  let Y = k6(J.dir),
    Q = await $.load({ projectKey: Y, sessionId: X });
  if (!Q || Q.length === 0) return [];
  return hB(Q, {
    limit: J.limit,
    offset: J.offset,
    includeSystemMessages: J.includeSystemMessages,
  });
}
async function Ac($, X, J) {
  if (!H$(X)) return;
  let Y = await gA($, X, J.dir);
  if (!Y) return;
  let Q = yA(Y, Lc(Y));
  return P0(X, Q) ?? void 0;
}
async function Ic($, X, J, Y) {
  if (!H$(X)) throw Error(`Invalid sessionId: ${X}`);
  if (!J.trim()) throw Error("title must be non-empty");
  let Q = k6(Y);
  await $.append({ projectKey: Q, sessionId: X }, [
    {
      type: "custom-title",
      customTitle: J.trim(),
      sessionId: X,
      uuid: kK(),
      timestamp: new Date().toISOString(),
    },
  ]);
}
async function Zc($, X, J, Y) {
  if (!H$(X)) throw Error(`Invalid sessionId: ${X}`);
  if (J !== null) {
    let W = v1(J).trim();
    if (!W) throw Error("tag must be non-empty (use null to clear)");
    J = W;
  }
  let Q = k6(Y);
  await $.append({ projectKey: Q, sessionId: X }, [
    {
      type: "tag",
      tag: J ?? "",
      sessionId: X,
      uuid: kK(),
      timestamp: new Date().toISOString(),
    },
  ]);
}
async function bc($, X, J) {
  if (!H$(X)) throw Error(`Invalid sessionId: ${X}`);
  if (J.upToMessageId && !H$(J.upToMessageId))
    throw Error(`Invalid upToMessageId: ${J.upToMessageId}`);
  let Y = k6(J.dir),
    Q = await $.load({ projectKey: Y, sessionId: X });
  if (!Q || Q.length === 0) throw Error(`Session ${X} not found`);
  let { entries: W, forkedSessionId: z } = $q(Q, X, J);
  return (await $.append({ projectKey: Y, sessionId: z }, W), { sessionId: z });
}
async function Rc($, X, J) {
  if (!H$(X)) return [];
  if (!$.listSubkeys)
    throw Error(
      "sessionStore.listSubkeys is not implemented -- cannot list subagents. Provide a store with a listSubkeys() method.",
    );
  let Y = k6(J),
    Q = await $.listSubkeys({ projectKey: Y, sessionId: X }),
    W = new Set();
  for (let z of Q) {
    if (!z.startsWith("subagents/")) continue;
    let G = z.split("/").at(-1);
    if (G.startsWith("agent-")) W.add(G.slice(6));
  }
  return [...W];
}
async function Pc($, X, J, Y) {
  if (!H$(X)) return [];
  if (!J) return [];
  let Q = k6(Y.dir),
    W = `subagents/agent-${J}`;
  if ($.listSubkeys) {
    let U = await $.listSubkeys({ projectKey: Q, sessionId: X }),
      H = `agent-${J}`,
      K = U.find(
        (N) => N.startsWith("subagents/") && N.split("/").at(-1) === H,
      );
    if (!K) return [];
    W = K;
  }
  let z = await $.load({ projectKey: Q, sessionId: X, subpath: W });
  if (!z || z.length === 0) return [];
  let G = z.filter((U) => !fA(U));
  if (G.length === 0) return [];
  return iz(Buffer.from(TA(G)), { limit: Y.limit, offset: Y.offset });
}
function EA($, X) {
  let J = kA(X, $),
    Y = J.split(_K);
  if (Y[0] === ".." || CA(J)) return null;
  if (Y.length < 2) return null;
  let Q = Y[0],
    W = Y[1];
  if (Y.length === 2 && W.endsWith(".jsonl"))
    return { projectKey: Q, sessionId: W.replace(/\.jsonl$/, "") };
  if (Y.length >= 4) {
    let z = Y.slice(2),
      G = z.length - 1;
    return (
      (z[G] = z.at(-1).replace(/\.jsonl$/, "")),
      { projectKey: Q, sessionId: W, subpath: z.join("/") }
    );
  }
  return null;
}
export {
  O7$ as unstable_v2_resumeSession,
  w7$ as unstable_v2_prompt,
  V7$ as unstable_v2_createSession,
  al as tool,
  j7$ as tagSession,
  N7$ as startup,
  F7$ as renameSession,
  K7$ as query,
  Xc as parseDirectConnectUrl,
  I7$ as listSubagents,
  q7$ as listSessions,
  A7$ as importSessionToStore,
  Z7$ as getSubagentMessages,
  B7$ as getSessionMessages,
  D7$ as getSessionInfo,
  M7$ as forkSession,
  SJ as foldSessionSummary,
  L7$ as deleteSession,
  sl as createSdkMcpServer,
  BI as SYSTEM_PROMPT_DYNAMIC_BOUNDARY,
  tY as InMemorySessionStore,
  OI as HOOK_EVENTS,
  wI as EXIT_REASONS,
  IA as DirectConnectTransport,
  Y4 as DirectConnectError,
  $6 as AbortError,
};
