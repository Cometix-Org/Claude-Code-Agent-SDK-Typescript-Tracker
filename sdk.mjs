#!/usr/bin/env node
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 0.2.121

// Want to see the unminified source? We're hiring!
// https://job-boards.greenhouse.io/anthropic/jobs/4816199008
var UI = Object.create;
var {
  getPrototypeOf: KI,
  defineProperty: sY,
  getOwnPropertyNames: VI,
} = Object;
var NI = Object.prototype.hasOwnProperty;
function OI($) {
  return this[$];
}
var wI,
  BI,
  SJ = ($, X, J) => {
    var Y = $ != null && typeof $ === "object";
    if (Y) {
      var Q = X ? (wI ??= new WeakMap()) : (BI ??= new WeakMap()),
        W = Q.get($);
      if (W) return W;
    }
    J = $ != null ? UI(KI($)) : {};
    let z =
      X || !$ || !$.__esModule
        ? sY(J, "default", { value: $, enumerable: !0 })
        : J;
    for (let G of VI($))
      if (!NI.call(z, G)) sY(z, G, { get: OI.bind($, G), enumerable: !0 });
    if (Y) Q.set($, z);
    return z;
  };
var M = ($, X) => () => (X || $((X = { exports: {} }).exports, X), X.exports);
var qI = ($) => $;
function DI($, X) {
  this[$] = qI.bind(null, X);
}
var D1 = ($, X) => {
  for (var J in X)
    sY($, J, {
      get: X[J],
      enumerable: !0,
      configurable: !0,
      set: DI.bind(X, J),
    });
};
var FI = Symbol.dispose || Symbol.for("Symbol.dispose"),
  jI = Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose"),
  q$ = ($, X, J) => {
    if (X != null) {
      if (typeof X !== "object" && typeof X !== "function")
        throw TypeError(
          'Object expected to be assigned to "using" declaration',
        );
      var Y;
      if (J) Y = X[jI];
      if (Y === void 0) Y = X[FI];
      if (typeof Y !== "function") throw TypeError("Object not disposable");
      $.push([J, Y, X]);
    } else if (J) $.push([J]);
    return X;
  },
  D$ = ($, X, J) => {
    var Y =
        typeof SuppressedError === "function"
          ? SuppressedError
          : function (z, G, H, U) {
              return (
                (U = Error(H)),
                (U.name = "SuppressedError"),
                (U.error = z),
                (U.suppressed = G),
                U
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
            if (z[0]) return Promise.resolve(G).then(W, (H) => (Q(H), W()));
          } catch (H) {
            Q(H);
          }
        if (J) throw X;
      };
    return W();
  };
var nN = M((pN) => {
  Object.defineProperty(pN, "__esModule", { value: !0 });
  pN._globalThis = void 0;
  pN._globalThis = typeof globalThis === "object" ? globalThis : global;
});
var rN = M((E1) => {
  var IR =
      (E1 && E1.__createBinding) ||
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
    ZR =
      (E1 && E1.__exportStar) ||
      function ($, X) {
        for (var J in $)
          if (J !== "default" && !Object.prototype.hasOwnProperty.call(X, J))
            IR(X, $, J);
      };
  Object.defineProperty(E1, "__esModule", { value: !0 });
  ZR(nN(), E1);
});
var oN = M((S1) => {
  var bR =
      (S1 && S1.__createBinding) ||
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
    RR =
      (S1 && S1.__exportStar) ||
      function ($, X) {
        for (var J in $)
          if (J !== "default" && !Object.prototype.hasOwnProperty.call(X, J))
            bR(X, $, J);
      };
  Object.defineProperty(S1, "__esModule", { value: !0 });
  RR(rN(), S1);
});
var nW = M((tN) => {
  Object.defineProperty(tN, "__esModule", { value: !0 });
  tN.VERSION = void 0;
  tN.VERSION = "1.9.0";
});
var JO = M(($O) => {
  Object.defineProperty($O, "__esModule", { value: !0 });
  $O.isCompatible = $O._makeCompatibilityCheck = void 0;
  var PR = nW(),
    sN = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
  function eN($) {
    let X = new Set([$]),
      J = new Set(),
      Y = $.match(sN);
    if (!Y) return () => !1;
    let Q = { major: +Y[1], minor: +Y[2], patch: +Y[3], prerelease: Y[4] };
    if (Q.prerelease != null)
      return function (H) {
        return H === $;
      };
    function W(G) {
      return (J.add(G), !1);
    }
    function z(G) {
      return (X.add(G), !0);
    }
    return function (H) {
      if (X.has(H)) return !0;
      if (J.has(H)) return !1;
      let U = H.match(sN);
      if (!U) return W(H);
      let K = { major: +U[1], minor: +U[2], patch: +U[3], prerelease: U[4] };
      if (K.prerelease != null) return W(H);
      if (Q.major !== K.major) return W(H);
      if (Q.major === 0) {
        if (Q.minor === K.minor && Q.patch <= K.patch) return z(H);
        return W(H);
      }
      if (Q.minor <= K.minor) return z(H);
      return W(H);
    };
  }
  $O._makeCompatibilityCheck = eN;
  $O.isCompatible = eN(PR.VERSION);
});
var v1 = M((QO) => {
  Object.defineProperty(QO, "__esModule", { value: !0 });
  QO.unregisterGlobal = QO.getGlobal = QO.registerGlobal = void 0;
  var SR = oN(),
    I0 = nW(),
    vR = JO(),
    CR = I0.VERSION.split(".")[0],
    L9 = Symbol.for(`opentelemetry.js.api.${CR}`),
    M9 = SR._globalThis;
  function kR($, X, J, Y = !1) {
    var Q;
    let W = (M9[L9] =
      (Q = M9[L9]) !== null && Q !== void 0 ? Q : { version: I0.VERSION });
    if (!Y && W[$]) {
      let z = Error(
        `@opentelemetry/api: Attempted duplicate registration of API: ${$}`,
      );
      return (J.error(z.stack || z.message), !1);
    }
    if (W.version !== I0.VERSION) {
      let z = Error(
        `@opentelemetry/api: Registration of version v${W.version} for ${$} does not match previously registered API v${I0.VERSION}`,
      );
      return (J.error(z.stack || z.message), !1);
    }
    return (
      (W[$] = X),
      J.debug(
        `@opentelemetry/api: Registered a global for ${$} v${I0.VERSION}.`,
      ),
      !0
    );
  }
  QO.registerGlobal = kR;
  function _R($) {
    var X, J;
    let Y = (X = M9[L9]) === null || X === void 0 ? void 0 : X.version;
    if (!Y || !(0, vR.isCompatible)(Y)) return;
    return (J = M9[L9]) === null || J === void 0 ? void 0 : J[$];
  }
  QO.getGlobal = _R;
  function xR($, X) {
    X.debug(
      `@opentelemetry/api: Unregistering a global for ${$} v${I0.VERSION}.`,
    );
    let J = M9[L9];
    if (J) delete J[$];
  }
  QO.unregisterGlobal = xR;
});
var HO = M((zO) => {
  Object.defineProperty(zO, "__esModule", { value: !0 });
  zO.DiagComponentLogger = void 0;
  var yR = v1();
  class WO {
    constructor($) {
      this._namespace = $.namespace || "DiagComponentLogger";
    }
    debug(...$) {
      return A9("debug", this._namespace, $);
    }
    error(...$) {
      return A9("error", this._namespace, $);
    }
    info(...$) {
      return A9("info", this._namespace, $);
    }
    warn(...$) {
      return A9("warn", this._namespace, $);
    }
    verbose(...$) {
      return A9("verbose", this._namespace, $);
    }
  }
  zO.DiagComponentLogger = WO;
  function A9($, X, J) {
    let Y = (0, yR.getGlobal)("diag");
    if (!Y) return;
    return (J.unshift(X), Y[$](...J));
  }
});
var O7 = M((UO) => {
  Object.defineProperty(UO, "__esModule", { value: !0 });
  UO.DiagLogLevel = void 0;
  var gR;
  (function ($) {
    (($[($.NONE = 0)] = "NONE"),
      ($[($.ERROR = 30)] = "ERROR"),
      ($[($.WARN = 50)] = "WARN"),
      ($[($.INFO = 60)] = "INFO"),
      ($[($.DEBUG = 70)] = "DEBUG"),
      ($[($.VERBOSE = 80)] = "VERBOSE"),
      ($[($.ALL = 9999)] = "ALL"));
  })((gR = UO.DiagLogLevel || (UO.DiagLogLevel = {})));
});
var NO = M((KO) => {
  Object.defineProperty(KO, "__esModule", { value: !0 });
  KO.createLogLevelDiagLogger = void 0;
  var B4 = O7();
  function hR($, X) {
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
  KO.createLogLevelDiagLogger = hR;
});
var C1 = M((wO) => {
  Object.defineProperty(wO, "__esModule", { value: !0 });
  wO.DiagAPI = void 0;
  var uR = HO(),
    mR = NO(),
    OO = O7(),
    w7 = v1(),
    lR = "diag";
  class oW {
    constructor() {
      function $(Y) {
        return function (...Q) {
          let W = (0, w7.getGlobal)("diag");
          if (!W) return;
          return W[Y](...Q);
        };
      }
      let X = this,
        J = (Y, Q = { logLevel: OO.DiagLogLevel.INFO }) => {
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
          let H = (0, w7.getGlobal)("diag"),
            U = (0, mR.createLogLevelDiagLogger)(
              (z = Q.logLevel) !== null && z !== void 0
                ? z
                : OO.DiagLogLevel.INFO,
              Y,
            );
          if (H && !Q.suppressOverrideMessage) {
            let K =
              (G = Error().stack) !== null && G !== void 0
                ? G
                : "<failed to generate stacktrace>";
            (H.warn(`Current logger will be overwritten from ${K}`),
              U.warn(
                `Current logger will overwrite one already registered from ${K}`,
              ));
          }
          return (0, w7.registerGlobal)("diag", U, X, !0);
        };
      ((X.setLogger = J),
        (X.disable = () => {
          (0, w7.unregisterGlobal)(lR, X);
        }),
        (X.createComponentLogger = (Y) => {
          return new uR.DiagComponentLogger(Y);
        }),
        (X.verbose = $("verbose")),
        (X.debug = $("debug")),
        (X.info = $("info")),
        (X.warn = $("warn")),
        (X.error = $("error")));
    }
    static instance() {
      if (!this._instance) this._instance = new oW();
      return this._instance;
    }
  }
  wO.DiagAPI = oW;
});
var FO = M((qO) => {
  Object.defineProperty(qO, "__esModule", { value: !0 });
  qO.BaggageImpl = void 0;
  class Z0 {
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
      let J = new Z0(this._entries);
      return (J._entries.set($, X), J);
    }
    removeEntry($) {
      let X = new Z0(this._entries);
      return (X._entries.delete($), X);
    }
    removeEntries(...$) {
      let X = new Z0(this._entries);
      for (let J of $) X._entries.delete(J);
      return X;
    }
    clear() {
      return new Z0();
    }
  }
  qO.BaggageImpl = Z0;
});
var MO = M((jO) => {
  Object.defineProperty(jO, "__esModule", { value: !0 });
  jO.baggageEntryMetadataSymbol = void 0;
  jO.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
});
var tW = M((AO) => {
  Object.defineProperty(AO, "__esModule", { value: !0 });
  AO.baggageEntryMetadataFromString = AO.createBaggage = void 0;
  var cR = C1(),
    dR = FO(),
    pR = MO(),
    iR = cR.DiagAPI.instance();
  function nR($ = {}) {
    return new dR.BaggageImpl(new Map(Object.entries($)));
  }
  AO.createBaggage = nR;
  function rR($) {
    if (typeof $ !== "string")
      (iR.error(
        `Cannot create baggage metadata from unknown type: ${typeof $}`,
      ),
        ($ = ""));
    return {
      __TYPE__: pR.baggageEntryMetadataSymbol,
      toString() {
        return $;
      },
    };
  }
  AO.baggageEntryMetadataFromString = rR;
});
var I9 = M((ZO) => {
  Object.defineProperty(ZO, "__esModule", { value: !0 });
  ZO.ROOT_CONTEXT = ZO.createContextKey = void 0;
  function tR($) {
    return Symbol.for($);
  }
  ZO.createContextKey = tR;
  class B7 {
    constructor($) {
      let X = this;
      ((X._currentContext = $ ? new Map($) : new Map()),
        (X.getValue = (J) => X._currentContext.get(J)),
        (X.setValue = (J, Y) => {
          let Q = new B7(X._currentContext);
          return (Q._currentContext.set(J, Y), Q);
        }),
        (X.deleteValue = (J) => {
          let Y = new B7(X._currentContext);
          return (Y._currentContext.delete(J), Y);
        }));
    }
  }
  ZO.ROOT_CONTEXT = new B7();
});
var SO = M((PO) => {
  Object.defineProperty(PO, "__esModule", { value: !0 });
  PO.DiagConsoleLogger = void 0;
  var aW = [
    { n: "error", c: "error" },
    { n: "warn", c: "warn" },
    { n: "info", c: "info" },
    { n: "debug", c: "debug" },
    { n: "verbose", c: "trace" },
  ];
  class RO {
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
      for (let X = 0; X < aW.length; X++) this[aW[X].n] = $(aW[X].c);
    }
  }
  PO.DiagConsoleLogger = RO;
});
var zz = M((vO) => {
  Object.defineProperty(vO, "__esModule", { value: !0 });
  vO.createNoopMeter =
    vO.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC =
    vO.NOOP_OBSERVABLE_GAUGE_METRIC =
    vO.NOOP_OBSERVABLE_COUNTER_METRIC =
    vO.NOOP_UP_DOWN_COUNTER_METRIC =
    vO.NOOP_HISTOGRAM_METRIC =
    vO.NOOP_GAUGE_METRIC =
    vO.NOOP_COUNTER_METRIC =
    vO.NOOP_METER =
    vO.NoopObservableUpDownCounterMetric =
    vO.NoopObservableGaugeMetric =
    vO.NoopObservableCounterMetric =
    vO.NoopObservableMetric =
    vO.NoopHistogramMetric =
    vO.NoopGaugeMetric =
    vO.NoopUpDownCounterMetric =
    vO.NoopCounterMetric =
    vO.NoopMetric =
    vO.NoopMeter =
      void 0;
  class sW {
    constructor() {}
    createGauge($, X) {
      return vO.NOOP_GAUGE_METRIC;
    }
    createHistogram($, X) {
      return vO.NOOP_HISTOGRAM_METRIC;
    }
    createCounter($, X) {
      return vO.NOOP_COUNTER_METRIC;
    }
    createUpDownCounter($, X) {
      return vO.NOOP_UP_DOWN_COUNTER_METRIC;
    }
    createObservableGauge($, X) {
      return vO.NOOP_OBSERVABLE_GAUGE_METRIC;
    }
    createObservableCounter($, X) {
      return vO.NOOP_OBSERVABLE_COUNTER_METRIC;
    }
    createObservableUpDownCounter($, X) {
      return vO.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    }
    addBatchObservableCallback($, X) {}
    removeBatchObservableCallback($) {}
  }
  vO.NoopMeter = sW;
  class b0 {}
  vO.NoopMetric = b0;
  class eW extends b0 {
    add($, X) {}
  }
  vO.NoopCounterMetric = eW;
  class $z extends b0 {
    add($, X) {}
  }
  vO.NoopUpDownCounterMetric = $z;
  class Xz extends b0 {
    record($, X) {}
  }
  vO.NoopGaugeMetric = Xz;
  class Jz extends b0 {
    record($, X) {}
  }
  vO.NoopHistogramMetric = Jz;
  class Z9 {
    addCallback($) {}
    removeCallback($) {}
  }
  vO.NoopObservableMetric = Z9;
  class Qz extends Z9 {}
  vO.NoopObservableCounterMetric = Qz;
  class Yz extends Z9 {}
  vO.NoopObservableGaugeMetric = Yz;
  class Wz extends Z9 {}
  vO.NoopObservableUpDownCounterMetric = Wz;
  vO.NOOP_METER = new sW();
  vO.NOOP_COUNTER_METRIC = new eW();
  vO.NOOP_GAUGE_METRIC = new Xz();
  vO.NOOP_HISTOGRAM_METRIC = new Jz();
  vO.NOOP_UP_DOWN_COUNTER_METRIC = new $z();
  vO.NOOP_OBSERVABLE_COUNTER_METRIC = new Qz();
  vO.NOOP_OBSERVABLE_GAUGE_METRIC = new Yz();
  vO.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new Wz();
  function sR() {
    return vO.NOOP_METER;
  }
  vO.createNoopMeter = sR;
});
var mO = M((uO) => {
  Object.defineProperty(uO, "__esModule", { value: !0 });
  uO.ValueType = void 0;
  var UP;
  (function ($) {
    (($[($.INT = 0)] = "INT"), ($[($.DOUBLE = 1)] = "DOUBLE"));
  })((UP = uO.ValueType || (uO.ValueType = {})));
});
var Hz = M((lO) => {
  Object.defineProperty(lO, "__esModule", { value: !0 });
  lO.defaultTextMapSetter = lO.defaultTextMapGetter = void 0;
  lO.defaultTextMapGetter = {
    get($, X) {
      if ($ == null) return;
      return $[X];
    },
    keys($) {
      if ($ == null) return [];
      return Object.keys($);
    },
  };
  lO.defaultTextMapSetter = {
    set($, X, J) {
      if ($ == null) return;
      $[X] = J;
    },
  };
});
var nO = M((pO) => {
  Object.defineProperty(pO, "__esModule", { value: !0 });
  pO.NoopContextManager = void 0;
  var VP = I9();
  class dO {
    active() {
      return VP.ROOT_CONTEXT;
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
  pO.NoopContextManager = dO;
});
var b9 = M((oO) => {
  Object.defineProperty(oO, "__esModule", { value: !0 });
  oO.ContextAPI = void 0;
  var NP = nO(),
    Uz = v1(),
    rO = C1(),
    Kz = "context",
    OP = new NP.NoopContextManager();
  class Vz {
    constructor() {}
    static getInstance() {
      if (!this._instance) this._instance = new Vz();
      return this._instance;
    }
    setGlobalContextManager($) {
      return (0, Uz.registerGlobal)(Kz, $, rO.DiagAPI.instance());
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
      return (0, Uz.getGlobal)(Kz) || OP;
    }
    disable() {
      (this._getContextManager().disable(),
        (0, Uz.unregisterGlobal)(Kz, rO.DiagAPI.instance()));
    }
  }
  oO.ContextAPI = Vz;
});
var Oz = M((aO) => {
  Object.defineProperty(aO, "__esModule", { value: !0 });
  aO.TraceFlags = void 0;
  var wP;
  (function ($) {
    (($[($.NONE = 0)] = "NONE"), ($[($.SAMPLED = 1)] = "SAMPLED"));
  })((wP = aO.TraceFlags || (aO.TraceFlags = {})));
});
var q7 = M((sO) => {
  Object.defineProperty(sO, "__esModule", { value: !0 });
  sO.INVALID_SPAN_CONTEXT = sO.INVALID_TRACEID = sO.INVALID_SPANID = void 0;
  var BP = Oz();
  sO.INVALID_SPANID = "0000000000000000";
  sO.INVALID_TRACEID = "00000000000000000000000000000000";
  sO.INVALID_SPAN_CONTEXT = {
    traceId: sO.INVALID_TRACEID,
    spanId: sO.INVALID_SPANID,
    traceFlags: BP.TraceFlags.NONE,
  };
});
var D7 = M((Qw) => {
  Object.defineProperty(Qw, "__esModule", { value: !0 });
  Qw.NonRecordingSpan = void 0;
  var qP = q7();
  class Jw {
    constructor($ = qP.INVALID_SPAN_CONTEXT) {
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
  Qw.NonRecordingSpan = Jw;
});
var qz = M((zw) => {
  Object.defineProperty(zw, "__esModule", { value: !0 });
  zw.getSpanContext =
    zw.setSpanContext =
    zw.deleteSpan =
    zw.setSpan =
    zw.getActiveSpan =
    zw.getSpan =
      void 0;
  var DP = I9(),
    FP = D7(),
    jP = b9(),
    wz = (0, DP.createContextKey)("OpenTelemetry Context Key SPAN");
  function Bz($) {
    return $.getValue(wz) || void 0;
  }
  zw.getSpan = Bz;
  function LP() {
    return Bz(jP.ContextAPI.getInstance().active());
  }
  zw.getActiveSpan = LP;
  function Ww($, X) {
    return $.setValue(wz, X);
  }
  zw.setSpan = Ww;
  function MP($) {
    return $.deleteValue(wz);
  }
  zw.deleteSpan = MP;
  function AP($, X) {
    return Ww($, new FP.NonRecordingSpan(X));
  }
  zw.setSpanContext = AP;
  function IP($) {
    var X;
    return (X = Bz($)) === null || X === void 0 ? void 0 : X.spanContext();
  }
  zw.getSpanContext = IP;
});
var F7 = M((Vw) => {
  Object.defineProperty(Vw, "__esModule", { value: !0 });
  Vw.wrapSpanContext =
    Vw.isSpanContextValid =
    Vw.isValidSpanId =
    Vw.isValidTraceId =
      void 0;
  var Hw = q7(),
    SP = D7(),
    vP = /^([0-9a-f]{32})$/i,
    CP = /^[0-9a-f]{16}$/i;
  function Uw($) {
    return vP.test($) && $ !== Hw.INVALID_TRACEID;
  }
  Vw.isValidTraceId = Uw;
  function Kw($) {
    return CP.test($) && $ !== Hw.INVALID_SPANID;
  }
  Vw.isValidSpanId = Kw;
  function kP($) {
    return Uw($.traceId) && Kw($.spanId);
  }
  Vw.isSpanContextValid = kP;
  function _P($) {
    return new SP.NonRecordingSpan($);
  }
  Vw.wrapSpanContext = _P;
});
var jz = M((Bw) => {
  Object.defineProperty(Bw, "__esModule", { value: !0 });
  Bw.NoopTracer = void 0;
  var yP = b9(),
    Ow = qz(),
    Dz = D7(),
    gP = F7(),
    Fz = yP.ContextAPI.getInstance();
  class ww {
    startSpan($, X, J = Fz.active()) {
      if (Boolean(X === null || X === void 0 ? void 0 : X.root))
        return new Dz.NonRecordingSpan();
      let Q = J && (0, Ow.getSpanContext)(J);
      if (hP(Q) && (0, gP.isSpanContextValid)(Q))
        return new Dz.NonRecordingSpan(Q);
      else return new Dz.NonRecordingSpan();
    }
    startActiveSpan($, X, J, Y) {
      let Q, W, z;
      if (arguments.length < 2) return;
      else if (arguments.length === 2) z = X;
      else if (arguments.length === 3) ((Q = X), (z = J));
      else ((Q = X), (W = J), (z = Y));
      let G = W !== null && W !== void 0 ? W : Fz.active(),
        H = this.startSpan($, Q, G),
        U = (0, Ow.setSpan)(G, H);
      return Fz.with(U, z, void 0, H);
    }
  }
  Bw.NoopTracer = ww;
  function hP($) {
    return (
      typeof $ === "object" &&
      typeof $.spanId === "string" &&
      typeof $.traceId === "string" &&
      typeof $.traceFlags === "number"
    );
  }
});
var Lz = M((Fw) => {
  Object.defineProperty(Fw, "__esModule", { value: !0 });
  Fw.ProxyTracer = void 0;
  var uP = jz(),
    mP = new uP.NoopTracer();
  class Dw {
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
      if (!$) return mP;
      return ((this._delegate = $), this._delegate);
    }
  }
  Fw.ProxyTracer = Dw;
});
var Iw = M((Mw) => {
  Object.defineProperty(Mw, "__esModule", { value: !0 });
  Mw.NoopTracerProvider = void 0;
  var lP = jz();
  class Lw {
    getTracer($, X, J) {
      return new lP.NoopTracer();
    }
  }
  Mw.NoopTracerProvider = Lw;
});
var Mz = M((bw) => {
  Object.defineProperty(bw, "__esModule", { value: !0 });
  bw.ProxyTracerProvider = void 0;
  var cP = Lz(),
    dP = Iw(),
    pP = new dP.NoopTracerProvider();
  class Zw {
    getTracer($, X, J) {
      var Y;
      return (Y = this.getDelegateTracer($, X, J)) !== null && Y !== void 0
        ? Y
        : new cP.ProxyTracer(this, $, X, J);
    }
    getDelegate() {
      var $;
      return ($ = this._delegate) !== null && $ !== void 0 ? $ : pP;
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
  bw.ProxyTracerProvider = Zw;
});
var Ew = M((Pw) => {
  Object.defineProperty(Pw, "__esModule", { value: !0 });
  Pw.SamplingDecision = void 0;
  var iP;
  (function ($) {
    (($[($.NOT_RECORD = 0)] = "NOT_RECORD"),
      ($[($.RECORD = 1)] = "RECORD"),
      ($[($.RECORD_AND_SAMPLED = 2)] = "RECORD_AND_SAMPLED"));
  })((iP = Pw.SamplingDecision || (Pw.SamplingDecision = {})));
});
var vw = M((Sw) => {
  Object.defineProperty(Sw, "__esModule", { value: !0 });
  Sw.SpanKind = void 0;
  var nP;
  (function ($) {
    (($[($.INTERNAL = 0)] = "INTERNAL"),
      ($[($.SERVER = 1)] = "SERVER"),
      ($[($.CLIENT = 2)] = "CLIENT"),
      ($[($.PRODUCER = 3)] = "PRODUCER"),
      ($[($.CONSUMER = 4)] = "CONSUMER"));
  })((nP = Sw.SpanKind || (Sw.SpanKind = {})));
});
var kw = M((Cw) => {
  Object.defineProperty(Cw, "__esModule", { value: !0 });
  Cw.SpanStatusCode = void 0;
  var rP;
  (function ($) {
    (($[($.UNSET = 0)] = "UNSET"),
      ($[($.OK = 1)] = "OK"),
      ($[($.ERROR = 2)] = "ERROR"));
  })((rP = Cw.SpanStatusCode || (Cw.SpanStatusCode = {})));
});
var Tw = M((_w) => {
  Object.defineProperty(_w, "__esModule", { value: !0 });
  _w.validateValue = _w.validateKey = void 0;
  var bz = "[_0-9a-z-*/]",
    oP = `[a-z]${bz}{0,255}`,
    tP = `[a-z0-9]${bz}{0,240}@[a-z]${bz}{0,13}`,
    aP = new RegExp(`^(?:${oP}|${tP})$`),
    sP = /^[ -~]{0,255}[!-~]$/,
    eP = /,|=/;
  function $E($) {
    return aP.test($);
  }
  _w.validateKey = $E;
  function XE($) {
    return sP.test($) && !eP.test($);
  }
  _w.validateValue = XE;
});
var lw = M((uw) => {
  Object.defineProperty(uw, "__esModule", { value: !0 });
  uw.TraceStateImpl = void 0;
  var fw = Tw(),
    yw = 32,
    QE = 512,
    gw = ",",
    hw = "=";
  class Rz {
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
          return ($.push(X + hw + this.get(X)), $);
        }, [])
        .join(gw);
    }
    _parse($) {
      if ($.length > QE) return;
      if (
        ((this._internalState = $.split(gw)
          .reverse()
          .reduce((X, J) => {
            let Y = J.trim(),
              Q = Y.indexOf(hw);
            if (Q !== -1) {
              let W = Y.slice(0, Q),
                z = Y.slice(Q + 1, J.length);
              if ((0, fw.validateKey)(W) && (0, fw.validateValue)(z))
                X.set(W, z);
            }
            return X;
          }, new Map())),
        this._internalState.size > yw)
      )
        this._internalState = new Map(
          Array.from(this._internalState.entries()).reverse().slice(0, yw),
        );
    }
    _keys() {
      return Array.from(this._internalState.keys()).reverse();
    }
    _clone() {
      let $ = new Rz();
      return (($._internalState = new Map(this._internalState)), $);
    }
  }
  uw.TraceStateImpl = Rz;
});
var pw = M((cw) => {
  Object.defineProperty(cw, "__esModule", { value: !0 });
  cw.createTraceState = void 0;
  var YE = lw();
  function WE($) {
    return new YE.TraceStateImpl($);
  }
  cw.createTraceState = WE;
});
var rw = M((iw) => {
  Object.defineProperty(iw, "__esModule", { value: !0 });
  iw.context = void 0;
  var zE = b9();
  iw.context = zE.ContextAPI.getInstance();
});
var aw = M((ow) => {
  Object.defineProperty(ow, "__esModule", { value: !0 });
  ow.diag = void 0;
  var GE = C1();
  ow.diag = GE.DiagAPI.instance();
});
var $B = M((sw) => {
  Object.defineProperty(sw, "__esModule", { value: !0 });
  sw.NOOP_METER_PROVIDER = sw.NoopMeterProvider = void 0;
  var HE = zz();
  class Pz {
    getMeter($, X, J) {
      return HE.NOOP_METER;
    }
  }
  sw.NoopMeterProvider = Pz;
  sw.NOOP_METER_PROVIDER = new Pz();
});
var YB = M((JB) => {
  Object.defineProperty(JB, "__esModule", { value: !0 });
  JB.MetricsAPI = void 0;
  var KE = $B(),
    Ez = v1(),
    XB = C1(),
    Sz = "metrics";
  class vz {
    constructor() {}
    static getInstance() {
      if (!this._instance) this._instance = new vz();
      return this._instance;
    }
    setGlobalMeterProvider($) {
      return (0, Ez.registerGlobal)(Sz, $, XB.DiagAPI.instance());
    }
    getMeterProvider() {
      return (0, Ez.getGlobal)(Sz) || KE.NOOP_METER_PROVIDER;
    }
    getMeter($, X, J) {
      return this.getMeterProvider().getMeter($, X, J);
    }
    disable() {
      (0, Ez.unregisterGlobal)(Sz, XB.DiagAPI.instance());
    }
  }
  JB.MetricsAPI = vz;
});
var GB = M((WB) => {
  Object.defineProperty(WB, "__esModule", { value: !0 });
  WB.metrics = void 0;
  var VE = YB();
  WB.metrics = VE.MetricsAPI.getInstance();
});
var VB = M((UB) => {
  Object.defineProperty(UB, "__esModule", { value: !0 });
  UB.NoopTextMapPropagator = void 0;
  class HB {
    inject($, X) {}
    extract($, X) {
      return $;
    }
    fields() {
      return [];
    }
  }
  UB.NoopTextMapPropagator = HB;
});
var BB = M((OB) => {
  Object.defineProperty(OB, "__esModule", { value: !0 });
  OB.deleteBaggage =
    OB.setBaggage =
    OB.getActiveBaggage =
    OB.getBaggage =
      void 0;
  var NE = b9(),
    OE = I9(),
    Cz = (0, OE.createContextKey)("OpenTelemetry Baggage Key");
  function NB($) {
    return $.getValue(Cz) || void 0;
  }
  OB.getBaggage = NB;
  function wE() {
    return NB(NE.ContextAPI.getInstance().active());
  }
  OB.getActiveBaggage = wE;
  function BE($, X) {
    return $.setValue(Cz, X);
  }
  OB.setBaggage = BE;
  function qE($) {
    return $.deleteValue(Cz);
  }
  OB.deleteBaggage = qE;
});
var LB = M((FB) => {
  Object.defineProperty(FB, "__esModule", { value: !0 });
  FB.PropagationAPI = void 0;
  var kz = v1(),
    LE = VB(),
    qB = Hz(),
    j7 = BB(),
    ME = tW(),
    DB = C1(),
    _z = "propagation",
    AE = new LE.NoopTextMapPropagator();
  class xz {
    constructor() {
      ((this.createBaggage = ME.createBaggage),
        (this.getBaggage = j7.getBaggage),
        (this.getActiveBaggage = j7.getActiveBaggage),
        (this.setBaggage = j7.setBaggage),
        (this.deleteBaggage = j7.deleteBaggage));
    }
    static getInstance() {
      if (!this._instance) this._instance = new xz();
      return this._instance;
    }
    setGlobalPropagator($) {
      return (0, kz.registerGlobal)(_z, $, DB.DiagAPI.instance());
    }
    inject($, X, J = qB.defaultTextMapSetter) {
      return this._getGlobalPropagator().inject($, X, J);
    }
    extract($, X, J = qB.defaultTextMapGetter) {
      return this._getGlobalPropagator().extract($, X, J);
    }
    fields() {
      return this._getGlobalPropagator().fields();
    }
    disable() {
      (0, kz.unregisterGlobal)(_z, DB.DiagAPI.instance());
    }
    _getGlobalPropagator() {
      return (0, kz.getGlobal)(_z) || AE;
    }
  }
  FB.PropagationAPI = xz;
});
var IB = M((MB) => {
  Object.defineProperty(MB, "__esModule", { value: !0 });
  MB.propagation = void 0;
  var IE = LB();
  MB.propagation = IE.PropagationAPI.getInstance();
});
var SB = M((PB) => {
  Object.defineProperty(PB, "__esModule", { value: !0 });
  PB.TraceAPI = void 0;
  var Tz = v1(),
    ZB = Mz(),
    bB = F7(),
    R0 = qz(),
    RB = C1(),
    fz = "trace";
  class yz {
    constructor() {
      ((this._proxyTracerProvider = new ZB.ProxyTracerProvider()),
        (this.wrapSpanContext = bB.wrapSpanContext),
        (this.isSpanContextValid = bB.isSpanContextValid),
        (this.deleteSpan = R0.deleteSpan),
        (this.getSpan = R0.getSpan),
        (this.getActiveSpan = R0.getActiveSpan),
        (this.getSpanContext = R0.getSpanContext),
        (this.setSpan = R0.setSpan),
        (this.setSpanContext = R0.setSpanContext));
    }
    static getInstance() {
      if (!this._instance) this._instance = new yz();
      return this._instance;
    }
    setGlobalTracerProvider($) {
      let X = (0, Tz.registerGlobal)(
        fz,
        this._proxyTracerProvider,
        RB.DiagAPI.instance(),
      );
      if (X) this._proxyTracerProvider.setDelegate($);
      return X;
    }
    getTracerProvider() {
      return (0, Tz.getGlobal)(fz) || this._proxyTracerProvider;
    }
    getTracer($, X) {
      return this.getTracerProvider().getTracer($, X);
    }
    disable() {
      ((0, Tz.unregisterGlobal)(fz, RB.DiagAPI.instance()),
        (this._proxyTracerProvider = new ZB.ProxyTracerProvider()));
    }
  }
  PB.TraceAPI = yz;
});
var kB = M((vB) => {
  Object.defineProperty(vB, "__esModule", { value: !0 });
  vB.trace = void 0;
  var ZE = SB();
  vB.trace = ZE.TraceAPI.getInstance();
});
var uz = M((H$) => {
  Object.defineProperty(H$, "__esModule", { value: !0 });
  H$.trace =
    H$.propagation =
    H$.metrics =
    H$.diag =
    H$.context =
    H$.INVALID_SPAN_CONTEXT =
    H$.INVALID_TRACEID =
    H$.INVALID_SPANID =
    H$.isValidSpanId =
    H$.isValidTraceId =
    H$.isSpanContextValid =
    H$.createTraceState =
    H$.TraceFlags =
    H$.SpanStatusCode =
    H$.SpanKind =
    H$.SamplingDecision =
    H$.ProxyTracerProvider =
    H$.ProxyTracer =
    H$.defaultTextMapSetter =
    H$.defaultTextMapGetter =
    H$.ValueType =
    H$.createNoopMeter =
    H$.DiagLogLevel =
    H$.DiagConsoleLogger =
    H$.ROOT_CONTEXT =
    H$.createContextKey =
    H$.baggageEntryMetadataFromString =
      void 0;
  var bE = tW();
  Object.defineProperty(H$, "baggageEntryMetadataFromString", {
    enumerable: !0,
    get: function () {
      return bE.baggageEntryMetadataFromString;
    },
  });
  var _B = I9();
  Object.defineProperty(H$, "createContextKey", {
    enumerable: !0,
    get: function () {
      return _B.createContextKey;
    },
  });
  Object.defineProperty(H$, "ROOT_CONTEXT", {
    enumerable: !0,
    get: function () {
      return _B.ROOT_CONTEXT;
    },
  });
  var RE = SO();
  Object.defineProperty(H$, "DiagConsoleLogger", {
    enumerable: !0,
    get: function () {
      return RE.DiagConsoleLogger;
    },
  });
  var PE = O7();
  Object.defineProperty(H$, "DiagLogLevel", {
    enumerable: !0,
    get: function () {
      return PE.DiagLogLevel;
    },
  });
  var EE = zz();
  Object.defineProperty(H$, "createNoopMeter", {
    enumerable: !0,
    get: function () {
      return EE.createNoopMeter;
    },
  });
  var SE = mO();
  Object.defineProperty(H$, "ValueType", {
    enumerable: !0,
    get: function () {
      return SE.ValueType;
    },
  });
  var xB = Hz();
  Object.defineProperty(H$, "defaultTextMapGetter", {
    enumerable: !0,
    get: function () {
      return xB.defaultTextMapGetter;
    },
  });
  Object.defineProperty(H$, "defaultTextMapSetter", {
    enumerable: !0,
    get: function () {
      return xB.defaultTextMapSetter;
    },
  });
  var vE = Lz();
  Object.defineProperty(H$, "ProxyTracer", {
    enumerable: !0,
    get: function () {
      return vE.ProxyTracer;
    },
  });
  var CE = Mz();
  Object.defineProperty(H$, "ProxyTracerProvider", {
    enumerable: !0,
    get: function () {
      return CE.ProxyTracerProvider;
    },
  });
  var kE = Ew();
  Object.defineProperty(H$, "SamplingDecision", {
    enumerable: !0,
    get: function () {
      return kE.SamplingDecision;
    },
  });
  var _E = vw();
  Object.defineProperty(H$, "SpanKind", {
    enumerable: !0,
    get: function () {
      return _E.SpanKind;
    },
  });
  var xE = kw();
  Object.defineProperty(H$, "SpanStatusCode", {
    enumerable: !0,
    get: function () {
      return xE.SpanStatusCode;
    },
  });
  var TE = Oz();
  Object.defineProperty(H$, "TraceFlags", {
    enumerable: !0,
    get: function () {
      return TE.TraceFlags;
    },
  });
  var fE = pw();
  Object.defineProperty(H$, "createTraceState", {
    enumerable: !0,
    get: function () {
      return fE.createTraceState;
    },
  });
  var gz = F7();
  Object.defineProperty(H$, "isSpanContextValid", {
    enumerable: !0,
    get: function () {
      return gz.isSpanContextValid;
    },
  });
  Object.defineProperty(H$, "isValidTraceId", {
    enumerable: !0,
    get: function () {
      return gz.isValidTraceId;
    },
  });
  Object.defineProperty(H$, "isValidSpanId", {
    enumerable: !0,
    get: function () {
      return gz.isValidSpanId;
    },
  });
  var hz = q7();
  Object.defineProperty(H$, "INVALID_SPANID", {
    enumerable: !0,
    get: function () {
      return hz.INVALID_SPANID;
    },
  });
  Object.defineProperty(H$, "INVALID_TRACEID", {
    enumerable: !0,
    get: function () {
      return hz.INVALID_TRACEID;
    },
  });
  Object.defineProperty(H$, "INVALID_SPAN_CONTEXT", {
    enumerable: !0,
    get: function () {
      return hz.INVALID_SPAN_CONTEXT;
    },
  });
  var TB = rw();
  Object.defineProperty(H$, "context", {
    enumerable: !0,
    get: function () {
      return TB.context;
    },
  });
  var fB = aw();
  Object.defineProperty(H$, "diag", {
    enumerable: !0,
    get: function () {
      return fB.diag;
    },
  });
  var yB = GB();
  Object.defineProperty(H$, "metrics", {
    enumerable: !0,
    get: function () {
      return yB.metrics;
    },
  });
  var gB = IB();
  Object.defineProperty(H$, "propagation", {
    enumerable: !0,
    get: function () {
      return gB.propagation;
    },
  });
  var hB = kB();
  Object.defineProperty(H$, "trace", {
    enumerable: !0,
    get: function () {
      return hB.trace;
    },
  });
  H$.default = {
    context: TB.context,
    diag: fB.diag,
    metrics: yB.metrics,
    propagation: gB.propagation,
    trace: hB.trace,
  };
});
var YJ = M((hF) => {
  Object.defineProperty(hF, "__esModule", { value: !0 });
  hF.regexpCode =
    hF.getEsmExportName =
    hF.getProperty =
    hF.safeStringify =
    hF.stringify =
    hF.strConcat =
    hF.addCodeArg =
    hF.str =
    hF._ =
    hF.nil =
    hF._Code =
    hF.Name =
    hF.IDENTIFIER =
    hF._CodeOrName =
      void 0;
  class KY {}
  hF._CodeOrName = KY;
  hF.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class G8 extends KY {
    constructor($) {
      super();
      if (!hF.IDENTIFIER.test($))
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
  hF.Name = G8;
  class p6 extends KY {
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
            if (J instanceof G8) X[J.str] = (X[J.str] || 0) + 1;
            return X;
          }, {}));
    }
  }
  hF._Code = p6;
  hF.nil = new p6("");
  function yF($, ...X) {
    let J = [$[0]],
      Y = 0;
    while (Y < X.length) (bU(J, X[Y]), J.push($[++Y]));
    return new p6(J);
  }
  hF._ = yF;
  var ZU = new p6("+");
  function gF($, ...X) {
    let J = [QJ($[0])],
      Y = 0;
    while (Y < X.length) (J.push(ZU), bU(J, X[Y]), J.push(ZU, QJ($[++Y])));
    return (sx(J), new p6(J));
  }
  hF.str = gF;
  function bU($, X) {
    if (X instanceof p6) $.push(...X._items);
    else if (X instanceof G8) $.push(X);
    else $.push(XT(X));
  }
  hF.addCodeArg = bU;
  function sx($) {
    let X = 1;
    while (X < $.length - 1) {
      if ($[X] === ZU) {
        let J = ex($[X - 1], $[X + 1]);
        if (J !== void 0) {
          $.splice(X - 1, 3, J);
          continue;
        }
        $[X++] = "+";
      }
      X++;
    }
  }
  function ex($, X) {
    if (X === '""') return $;
    if ($ === '""') return X;
    if (typeof $ == "string") {
      if (X instanceof G8 || $[$.length - 1] !== '"') return;
      if (typeof X != "string") return `${$.slice(0, -1)}${X}"`;
      if (X[0] === '"') return $.slice(0, -1) + X.slice(1);
      return;
    }
    if (typeof X == "string" && X[0] === '"' && !($ instanceof G8))
      return `"${$}${X.slice(1)}`;
    return;
  }
  function $T($, X) {
    return X.emptyStr() ? $ : $.emptyStr() ? X : gF`${$}${X}`;
  }
  hF.strConcat = $T;
  function XT($) {
    return typeof $ == "number" || typeof $ == "boolean" || $ === null
      ? $
      : QJ(Array.isArray($) ? $.join(",") : $);
  }
  function JT($) {
    return new p6(QJ($));
  }
  hF.stringify = JT;
  function QJ($) {
    return JSON.stringify($)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029");
  }
  hF.safeStringify = QJ;
  function QT($) {
    return typeof $ == "string" && hF.IDENTIFIER.test($)
      ? new p6(`.${$}`)
      : yF`[${$}]`;
  }
  hF.getProperty = QT;
  function YT($) {
    if (typeof $ == "string" && hF.IDENTIFIER.test($)) return new p6(`${$}`);
    throw Error(
      `CodeGen: invalid export name: ${$}, use explicit $id name mapping`,
    );
  }
  hF.getEsmExportName = YT;
  function WT($) {
    return new p6($.toString());
  }
  hF.regexpCode = WT;
});
var SU = M((cF) => {
  Object.defineProperty(cF, "__esModule", { value: !0 });
  cF.ValueScope =
    cF.ValueScopeName =
    cF.Scope =
    cF.varKinds =
    cF.UsedValueState =
      void 0;
  var U6 = YJ();
  class mF extends Error {
    constructor($) {
      super(`CodeGen: "code" for ${$} not defined`);
      this.value = $.value;
    }
  }
  var NY;
  (function ($) {
    (($[($.Started = 0)] = "Started"), ($[($.Completed = 1)] = "Completed"));
  })(NY || (cF.UsedValueState = NY = {}));
  cF.varKinds = {
    const: new U6.Name("const"),
    let: new U6.Name("let"),
    var: new U6.Name("var"),
  };
  class PU {
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
  cF.Scope = PU;
  class EU extends U6.Name {
    constructor($, X) {
      super(X);
      this.prefix = $;
    }
    setValue($, { property: X, itemIndex: J }) {
      ((this.value = $), (this.scopePath = U6._`.${new U6.Name(X)}[${J}]`));
    }
  }
  cF.ValueScopeName = EU;
  var FT = U6._`\n`;
  class lF extends PU {
    constructor($) {
      super($);
      ((this._values = {}),
        (this._scope = $.scope),
        (this.opts = { ...$, _n: $.lines ? FT : U6.nil }));
    }
    get() {
      return this._scope;
    }
    name($) {
      return new EU($, this._newName($));
    }
    value($, X) {
      var J;
      if (X.ref === void 0) throw Error("CodeGen: ref must be passed in value");
      let Y = this.toName($),
        { prefix: Q } = Y,
        W = (J = X.key) !== null && J !== void 0 ? J : X.ref,
        z = this._values[Q];
      if (z) {
        let U = z.get(W);
        if (U) return U;
      } else z = this._values[Q] = new Map();
      z.set(W, Y);
      let G = this._scope[Q] || (this._scope[Q] = []),
        H = G.length;
      return ((G[H] = X.ref), Y.setValue(X, { property: Q, itemIndex: H }), Y);
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
        z.forEach((H) => {
          if (G.has(H)) return;
          G.set(H, NY.Started);
          let U = X(H);
          if (U) {
            let K = this.opts.es5 ? cF.varKinds.var : cF.varKinds.const;
            Q = U6._`${Q}${K} ${H} = ${U};${this.opts._n}`;
          } else if ((U = Y === null || Y === void 0 ? void 0 : Y(H)))
            Q = U6._`${Q}${U}${this.opts._n}`;
          else throw new mF(H);
          G.set(H, NY.Completed);
        });
      }
      return Q;
    }
  }
  cF.ValueScope = lF;
});
var a = M((K6) => {
  Object.defineProperty(K6, "__esModule", { value: !0 });
  K6.or =
    K6.and =
    K6.not =
    K6.CodeGen =
    K6.operators =
    K6.varKinds =
    K6.ValueScopeName =
    K6.ValueScope =
    K6.Scope =
    K6.Name =
    K6.regexpCode =
    K6.stringify =
    K6.getProperty =
    K6.nil =
    K6.strConcat =
    K6.str =
    K6._ =
      void 0;
  var Q$ = YJ(),
    i6 = SU(),
    H1 = YJ();
  Object.defineProperty(K6, "_", {
    enumerable: !0,
    get: function () {
      return H1._;
    },
  });
  Object.defineProperty(K6, "str", {
    enumerable: !0,
    get: function () {
      return H1.str;
    },
  });
  Object.defineProperty(K6, "strConcat", {
    enumerable: !0,
    get: function () {
      return H1.strConcat;
    },
  });
  Object.defineProperty(K6, "nil", {
    enumerable: !0,
    get: function () {
      return H1.nil;
    },
  });
  Object.defineProperty(K6, "getProperty", {
    enumerable: !0,
    get: function () {
      return H1.getProperty;
    },
  });
  Object.defineProperty(K6, "stringify", {
    enumerable: !0,
    get: function () {
      return H1.stringify;
    },
  });
  Object.defineProperty(K6, "regexpCode", {
    enumerable: !0,
    get: function () {
      return H1.regexpCode;
    },
  });
  Object.defineProperty(K6, "Name", {
    enumerable: !0,
    get: function () {
      return H1.Name;
    },
  });
  var FY = SU();
  Object.defineProperty(K6, "Scope", {
    enumerable: !0,
    get: function () {
      return FY.Scope;
    },
  });
  Object.defineProperty(K6, "ValueScope", {
    enumerable: !0,
    get: function () {
      return FY.ValueScope;
    },
  });
  Object.defineProperty(K6, "ValueScopeName", {
    enumerable: !0,
    get: function () {
      return FY.ValueScopeName;
    },
  });
  Object.defineProperty(K6, "varKinds", {
    enumerable: !0,
    get: function () {
      return FY.varKinds;
    },
  });
  K6.operators = {
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
  class pF extends U1 {
    constructor($, X, J) {
      super();
      ((this.varKind = $), (this.name = X), (this.rhs = J));
    }
    render({ es5: $, _n: X }) {
      let J = $ ? i6.varKinds.var : this.varKind,
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
  class kU extends U1 {
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
      return DY($, this.rhs);
    }
  }
  class iF extends kU {
    constructor($, X, J, Y) {
      super($, J, Y);
      this.op = X;
    }
    render({ _n: $ }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + $;
    }
  }
  class nF extends U1 {
    constructor($) {
      super();
      ((this.label = $), (this.names = {}));
    }
    render({ _n: $ }) {
      return `${this.label}:` + $;
    }
  }
  class rF extends U1 {
    constructor($) {
      super();
      ((this.label = $), (this.names = {}));
    }
    render({ _n: $ }) {
      return `break${this.label ? ` ${this.label}` : ""};` + $;
    }
  }
  class oF extends U1 {
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
  class tF extends U1 {
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
  class jY extends U1 {
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
        (AT($, Q.names), J.splice(Y, 1));
      }
      return J.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce(($, X) => r1($, X.names), {});
    }
  }
  class K1 extends jY {
    render($) {
      return "{" + $._n + super.render($) + "}" + $._n;
    }
  }
  class aF extends jY {}
  class WJ extends K1 {}
  WJ.kind = "else";
  class E4 extends K1 {
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
        X = this.else = Array.isArray(J) ? new WJ(J) : J;
      }
      if (X) {
        if ($ === !1) return X instanceof E4 ? X : X.nodes;
        if (this.nodes.length) return this;
        return new E4(Jj($), X instanceof E4 ? [X] : X.nodes);
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
      if ((DY($, this.condition), this.else)) r1($, this.else.names);
      return $;
    }
  }
  E4.kind = "if";
  class H8 extends K1 {}
  H8.kind = "for";
  class sF extends H8 {
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
      return r1(super.names, this.iteration.names);
    }
  }
  class eF extends H8 {
    constructor($, X, J, Y) {
      super();
      ((this.varKind = $), (this.name = X), (this.from = J), (this.to = Y));
    }
    render($) {
      let X = $.es5 ? i6.varKinds.var : this.varKind,
        { name: J, from: Y, to: Q } = this;
      return `for(${X} ${J}=${Y}; ${J}<${Q}; ${J}++)` + super.render($);
    }
    get names() {
      let $ = DY(super.names, this.from);
      return DY($, this.to);
    }
  }
  class vU extends H8 {
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
      return r1(super.names, this.iterable.names);
    }
  }
  class OY extends K1 {
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
  OY.kind = "func";
  class wY extends jY {
    render($) {
      return "return " + super.render($);
    }
  }
  wY.kind = "return";
  class $j extends K1 {
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
      if (this.catch) r1($, this.catch.names);
      if (this.finally) r1($, this.finally.names);
      return $;
    }
  }
  class BY extends K1 {
    constructor($) {
      super();
      this.error = $;
    }
    render($) {
      return `catch(${this.error})` + super.render($);
    }
  }
  BY.kind = "catch";
  class qY extends K1 {
    render($) {
      return "finally" + super.render($);
    }
  }
  qY.kind = "finally";
  class Xj {
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
        (this._scope = new i6.Scope({ parent: $ })),
        (this._nodes = [new aF()]));
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
      return (this._leafNode(new pF($, Q, J)), Q);
    }
    const($, X, J) {
      return this._def(i6.varKinds.const, $, X, J);
    }
    let($, X, J) {
      return this._def(i6.varKinds.let, $, X, J);
    }
    var($, X, J) {
      return this._def(i6.varKinds.var, $, X, J);
    }
    assign($, X, J) {
      return this._leafNode(new kU($, X, J));
    }
    add($, X) {
      return this._leafNode(new iF($, K6.operators.ADD, X));
    }
    code($) {
      if (typeof $ == "function") $();
      else if ($ !== Q$.nil) this._leafNode(new tF($));
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
      return this._elseNode(new WJ());
    }
    endIf() {
      return this._endBlockNode(E4, WJ);
    }
    _for($, X) {
      if ((this._blockNode($), X)) this.code(X).endFor();
      return this;
    }
    for($, X) {
      return this._for(new sF($), X);
    }
    forRange(
      $,
      X,
      J,
      Y,
      Q = this.opts.es5 ? i6.varKinds.var : i6.varKinds.let,
    ) {
      let W = this._scope.toName($);
      return this._for(new eF(Q, W, X, J), () => Y(W));
    }
    forOf($, X, J, Y = i6.varKinds.const) {
      let Q = this._scope.toName($);
      if (this.opts.es5) {
        let W = X instanceof Q$.Name ? X : this.var("_arr", X);
        return this.forRange("_i", 0, Q$._`${W}.length`, (z) => {
          (this.var(Q, Q$._`${W}[${z}]`), J(Q));
        });
      }
      return this._for(new vU("of", Y, Q, X), () => J(Q));
    }
    forIn($, X, J, Y = this.opts.es5 ? i6.varKinds.var : i6.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf($, Q$._`Object.keys(${X})`, J);
      let Q = this._scope.toName($);
      return this._for(new vU("in", Y, Q, X), () => J(Q));
    }
    endFor() {
      return this._endBlockNode(H8);
    }
    label($) {
      return this._leafNode(new nF($));
    }
    break($) {
      return this._leafNode(new rF($));
    }
    return($) {
      let X = new wY();
      if ((this._blockNode(X), this.code($), X.nodes.length !== 1))
        throw Error('CodeGen: "return" should have one node');
      return this._endBlockNode(wY);
    }
    try($, X, J) {
      if (!X && !J) throw Error('CodeGen: "try" without "catch" and "finally"');
      let Y = new $j();
      if ((this._blockNode(Y), this.code($), X)) {
        let Q = this.name("e");
        ((this._currNode = Y.catch = new BY(Q)), X(Q));
      }
      if (J) ((this._currNode = Y.finally = new qY()), this.code(J));
      return this._endBlockNode(BY, qY);
    }
    throw($) {
      return this._leafNode(new oF($));
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
      if ((this._blockNode(new OY($, X, J)), Y)) this.code(Y).endFunc();
      return this;
    }
    endFunc() {
      return this._endBlockNode(OY);
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
  K6.CodeGen = Xj;
  function r1($, X) {
    for (let J in X) $[J] = ($[J] || 0) + (X[J] || 0);
    return $;
  }
  function DY($, X) {
    return X instanceof Q$._CodeOrName ? r1($, X.names) : $;
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
  function AT($, X) {
    for (let J in X) $[J] = ($[J] || 0) - (X[J] || 0);
  }
  function Jj($) {
    return typeof $ == "boolean" || typeof $ == "number" || $ === null
      ? !$
      : Q$._`!${CU($)}`;
  }
  K6.not = Jj;
  var IT = Qj(K6.operators.AND);
  function ZT(...$) {
    return $.reduce(IT);
  }
  K6.and = ZT;
  var bT = Qj(K6.operators.OR);
  function RT(...$) {
    return $.reduce(bT);
  }
  K6.or = RT;
  function Qj($) {
    return (X, J) =>
      X === Q$.nil ? J : J === Q$.nil ? X : Q$._`${CU(X)} ${$} ${CU(J)}`;
  }
  function CU($) {
    return $ instanceof Q$.Name ? $ : Q$._`(${$})`;
  }
});
var Y$ = M((Nj) => {
  Object.defineProperty(Nj, "__esModule", { value: !0 });
  Nj.checkStrictMode =
    Nj.getErrorPath =
    Nj.Type =
    Nj.useFunc =
    Nj.setEvaluated =
    Nj.evaluatedPropsToName =
    Nj.mergeEvaluated =
    Nj.eachItem =
    Nj.unescapeJsonPointer =
    Nj.escapeJsonPointer =
    Nj.escapeFragment =
    Nj.unescapeFragment =
    Nj.schemaRefOrVal =
    Nj.schemaHasRulesButRef =
    Nj.schemaHasRules =
    Nj.checkUnknownRules =
    Nj.alwaysValidSchema =
    Nj.toHash =
      void 0;
  var B$ = a(),
    vT = YJ();
  function CT($) {
    let X = {};
    for (let J of $) X[J] = !0;
    return X;
  }
  Nj.toHash = CT;
  function kT($, X) {
    if (typeof X == "boolean") return X;
    if (Object.keys(X).length === 0) return !0;
    return (Gj($, X), !Hj(X, $.self.RULES.all));
  }
  Nj.alwaysValidSchema = kT;
  function Gj($, X = $.schema) {
    let { opts: J, self: Y } = $;
    if (!J.strictSchema) return;
    if (typeof X === "boolean") return;
    let Q = Y.RULES.keywords;
    for (let W in X) if (!Q[W]) Vj($, `unknown keyword: "${W}"`);
  }
  Nj.checkUnknownRules = Gj;
  function Hj($, X) {
    if (typeof $ == "boolean") return !$;
    for (let J in $) if (X[J]) return !0;
    return !1;
  }
  Nj.schemaHasRules = Hj;
  function _T($, X) {
    if (typeof $ == "boolean") return !$;
    for (let J in $) if (J !== "$ref" && X.all[J]) return !0;
    return !1;
  }
  Nj.schemaHasRulesButRef = _T;
  function xT({ topSchemaRef: $, schemaPath: X }, J, Y, Q) {
    if (!Q) {
      if (typeof J == "number" || typeof J == "boolean") return J;
      if (typeof J == "string") return B$._`${J}`;
    }
    return B$._`${$}${X}${(0, B$.getProperty)(Y)}`;
  }
  Nj.schemaRefOrVal = xT;
  function TT($) {
    return Uj(decodeURIComponent($));
  }
  Nj.unescapeFragment = TT;
  function fT($) {
    return encodeURIComponent(xU($));
  }
  Nj.escapeFragment = fT;
  function xU($) {
    if (typeof $ == "number") return `${$}`;
    return $.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  Nj.escapeJsonPointer = xU;
  function Uj($) {
    return $.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  Nj.unescapeJsonPointer = Uj;
  function yT($, X) {
    if (Array.isArray($)) for (let J of $) X(J);
    else X($);
  }
  Nj.eachItem = yT;
  function Wj({
    mergeNames: $,
    mergeToName: X,
    mergeValues: J,
    resultToName: Y,
  }) {
    return (Q, W, z, G) => {
      let H =
        z === void 0
          ? W
          : z instanceof B$.Name
            ? (W instanceof B$.Name ? $(Q, W, z) : X(Q, W, z), z)
            : W instanceof B$.Name
              ? (X(Q, z, W), W)
              : J(W, z);
      return G === B$.Name && !(H instanceof B$.Name) ? Y(Q, H) : H;
    };
  }
  Nj.mergeEvaluated = {
    props: Wj({
      mergeNames: ($, X, J) =>
        $.if(B$._`${J} !== true && ${X} !== undefined`, () => {
          $.if(
            B$._`${X} === true`,
            () => $.assign(J, !0),
            () =>
              $.assign(J, B$._`${J} || {}`).code(
                B$._`Object.assign(${J}, ${X})`,
              ),
          );
        }),
      mergeToName: ($, X, J) =>
        $.if(B$._`${J} !== true`, () => {
          if (X === !0) $.assign(J, !0);
          else ($.assign(J, B$._`${J} || {}`), TU($, J, X));
        }),
      mergeValues: ($, X) => ($ === !0 ? !0 : { ...$, ...X }),
      resultToName: Kj,
    }),
    items: Wj({
      mergeNames: ($, X, J) =>
        $.if(B$._`${J} !== true && ${X} !== undefined`, () =>
          $.assign(J, B$._`${X} === true ? true : ${J} > ${X} ? ${J} : ${X}`),
        ),
      mergeToName: ($, X, J) =>
        $.if(B$._`${J} !== true`, () =>
          $.assign(J, X === !0 ? !0 : B$._`${J} > ${X} ? ${J} : ${X}`),
        ),
      mergeValues: ($, X) => ($ === !0 ? !0 : Math.max($, X)),
      resultToName: ($, X) => $.var("items", X),
    }),
  };
  function Kj($, X) {
    if (X === !0) return $.var("props", !0);
    let J = $.var("props", B$._`{}`);
    if (X !== void 0) TU($, J, X);
    return J;
  }
  Nj.evaluatedPropsToName = Kj;
  function TU($, X, J) {
    Object.keys(J).forEach((Y) =>
      $.assign(B$._`${X}${(0, B$.getProperty)(Y)}`, !0),
    );
  }
  Nj.setEvaluated = TU;
  var zj = {};
  function gT($, X) {
    return $.scopeValue("func", {
      ref: X,
      code: zj[X.code] || (zj[X.code] = new vT._Code(X.code)),
    });
  }
  Nj.useFunc = gT;
  var _U;
  (function ($) {
    (($[($.Num = 0)] = "Num"), ($[($.Str = 1)] = "Str"));
  })(_U || (Nj.Type = _U = {}));
  function hT($, X, J) {
    if ($ instanceof B$.Name) {
      let Y = X === _U.Num;
      return J
        ? Y
          ? B$._`"[" + ${$} + "]"`
          : B$._`"['" + ${$} + "']"`
        : Y
          ? B$._`"/" + ${$}`
          : B$._`"/" + ${$}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return J ? (0, B$.getProperty)($).toString() : "/" + xU($);
  }
  Nj.getErrorPath = hT;
  function Vj($, X, J = $.opts.strictSchema) {
    if (!J) return;
    if (((X = `strict mode: ${X}`), J === !0)) throw Error(X);
    $.self.logger.warn(X);
  }
  Nj.checkStrictMode = Vj;
});
var S4 = M((wj) => {
  Object.defineProperty(wj, "__esModule", { value: !0 });
  var o$ = a(),
    Qf = {
      data: new o$.Name("data"),
      valCxt: new o$.Name("valCxt"),
      instancePath: new o$.Name("instancePath"),
      parentData: new o$.Name("parentData"),
      parentDataProperty: new o$.Name("parentDataProperty"),
      rootData: new o$.Name("rootData"),
      dynamicAnchors: new o$.Name("dynamicAnchors"),
      vErrors: new o$.Name("vErrors"),
      errors: new o$.Name("errors"),
      this: new o$.Name("this"),
      self: new o$.Name("self"),
      scope: new o$.Name("scope"),
      json: new o$.Name("json"),
      jsonPos: new o$.Name("jsonPos"),
      jsonLen: new o$.Name("jsonLen"),
      jsonPart: new o$.Name("jsonPart"),
    };
  wj.default = Qf;
});
var zJ = M((Fj) => {
  Object.defineProperty(Fj, "__esModule", { value: !0 });
  Fj.extendErrors =
    Fj.resetErrorsCount =
    Fj.reportExtraError =
    Fj.reportError =
    Fj.keyword$DataError =
    Fj.keywordError =
      void 0;
  var W$ = a(),
    MY = Y$(),
    e$ = S4();
  Fj.keywordError = {
    message: ({ keyword: $ }) => W$.str`must pass "${$}" keyword validation`,
  };
  Fj.keyword$DataError = {
    message: ({ keyword: $, schemaType: X }) =>
      X
        ? W$.str`"${$}" keyword must be ${X} ($data)`
        : W$.str`"${$}" keyword is invalid ($data)`,
  };
  function Wf($, X = Fj.keywordError, J, Y) {
    let { it: Q } = $,
      { gen: W, compositeRule: z, allErrors: G } = Q,
      H = Dj($, X, J);
    if (Y !== null && Y !== void 0 ? Y : z || G) Bj(W, H);
    else qj(Q, W$._`[${H}]`);
  }
  Fj.reportError = Wf;
  function zf($, X = Fj.keywordError, J) {
    let { it: Y } = $,
      { gen: Q, compositeRule: W, allErrors: z } = Y,
      G = Dj($, X, J);
    if ((Bj(Q, G), !(W || z))) qj(Y, e$.default.vErrors);
  }
  Fj.reportExtraError = zf;
  function Gf($, X) {
    ($.assign(e$.default.errors, X),
      $.if(W$._`${e$.default.vErrors} !== null`, () =>
        $.if(
          X,
          () => $.assign(W$._`${e$.default.vErrors}.length`, X),
          () => $.assign(e$.default.vErrors, null),
        ),
      ));
  }
  Fj.resetErrorsCount = Gf;
  function Hf({
    gen: $,
    keyword: X,
    schemaValue: J,
    data: Y,
    errsCount: Q,
    it: W,
  }) {
    if (Q === void 0) throw Error("ajv implementation error");
    let z = $.name("err");
    $.forRange("i", Q, e$.default.errors, (G) => {
      if (
        ($.const(z, W$._`${e$.default.vErrors}[${G}]`),
        $.if(W$._`${z}.instancePath === undefined`, () =>
          $.assign(
            W$._`${z}.instancePath`,
            (0, W$.strConcat)(e$.default.instancePath, W.errorPath),
          ),
        ),
        $.assign(W$._`${z}.schemaPath`, W$.str`${W.errSchemaPath}/${X}`),
        W.opts.verbose)
      )
        ($.assign(W$._`${z}.schema`, J), $.assign(W$._`${z}.data`, Y));
    });
  }
  Fj.extendErrors = Hf;
  function Bj($, X) {
    let J = $.const("err", X);
    ($.if(
      W$._`${e$.default.vErrors} === null`,
      () => $.assign(e$.default.vErrors, W$._`[${J}]`),
      W$._`${e$.default.vErrors}.push(${J})`,
    ),
      $.code(W$._`${e$.default.errors}++`));
  }
  function qj($, X) {
    let { gen: J, validateName: Y, schemaEnv: Q } = $;
    if (Q.$async) J.throw(W$._`new ${$.ValidationError}(${X})`);
    else (J.assign(W$._`${Y}.errors`, X), J.return(!1));
  }
  var o1 = {
    keyword: new W$.Name("keyword"),
    schemaPath: new W$.Name("schemaPath"),
    params: new W$.Name("params"),
    propertyName: new W$.Name("propertyName"),
    message: new W$.Name("message"),
    schema: new W$.Name("schema"),
    parentSchema: new W$.Name("parentSchema"),
  };
  function Dj($, X, J) {
    let { createErrors: Y } = $.it;
    if (Y === !1) return W$._`{}`;
    return Uf($, X, J);
  }
  function Uf($, X, J = {}) {
    let { gen: Y, it: Q } = $,
      W = [Kf(Q, J), Vf($, J)];
    return (Nf($, X, W), Y.object(...W));
  }
  function Kf({ errorPath: $ }, { instancePath: X }) {
    let J = X ? W$.str`${$}${(0, MY.getErrorPath)(X, MY.Type.Str)}` : $;
    return [
      e$.default.instancePath,
      (0, W$.strConcat)(e$.default.instancePath, J),
    ];
  }
  function Vf(
    { keyword: $, it: { errSchemaPath: X } },
    { schemaPath: J, parentSchema: Y },
  ) {
    let Q = Y ? X : W$.str`${X}/${$}`;
    if (J) Q = W$.str`${Q}${(0, MY.getErrorPath)(J, MY.Type.Str)}`;
    return [o1.schemaPath, Q];
  }
  function Nf($, { params: X, message: J }, Y) {
    let { keyword: Q, data: W, schemaValue: z, it: G } = $,
      { opts: H, propertyName: U, topSchemaRef: K, schemaPath: V } = G;
    if (
      (Y.push(
        [o1.keyword, Q],
        [o1.params, typeof X == "function" ? X($) : X || W$._`{}`],
      ),
      H.messages)
    )
      Y.push([o1.message, typeof J == "function" ? J($) : J]);
    if (H.verbose)
      Y.push(
        [o1.schema, z],
        [o1.parentSchema, W$._`${K}${V}`],
        [e$.default.data, W],
      );
    if (U) Y.push([o1.propertyName, U]);
  }
});
var Ij = M((Mj) => {
  Object.defineProperty(Mj, "__esModule", { value: !0 });
  Mj.boolOrEmptySchema = Mj.topBoolOrEmptySchema = void 0;
  var Df = zJ(),
    Ff = a(),
    jf = S4(),
    Lf = { message: "boolean schema is false" };
  function Mf($) {
    let { gen: X, schema: J, validateName: Y } = $;
    if (J === !1) Lj($, !1);
    else if (typeof J == "object" && J.$async === !0) X.return(jf.default.data);
    else (X.assign(Ff._`${Y}.errors`, null), X.return(!0));
  }
  Mj.topBoolOrEmptySchema = Mf;
  function Af($, X) {
    let { gen: J, schema: Y } = $;
    if (Y === !1) (J.var(X, !1), Lj($));
    else J.var(X, !0);
  }
  Mj.boolOrEmptySchema = Af;
  function Lj($, X) {
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
    (0, Df.reportError)(Q, Lf, void 0, X);
  }
});
var yU = M((Zj) => {
  Object.defineProperty(Zj, "__esModule", { value: !0 });
  Zj.getRules = Zj.isJSONType = void 0;
  var Zf = [
      "string",
      "number",
      "integer",
      "boolean",
      "null",
      "object",
      "array",
    ],
    bf = new Set(Zf);
  function Rf($) {
    return typeof $ == "string" && bf.has($);
  }
  Zj.isJSONType = Rf;
  function Pf() {
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
  Zj.getRules = Pf;
});
var gU = M((Ej) => {
  Object.defineProperty(Ej, "__esModule", { value: !0 });
  Ej.shouldUseRule = Ej.shouldUseGroup = Ej.schemaHasRulesForType = void 0;
  function Sf({ schema: $, self: X }, J) {
    let Y = X.RULES.types[J];
    return Y && Y !== !0 && Rj($, Y);
  }
  Ej.schemaHasRulesForType = Sf;
  function Rj($, X) {
    return X.rules.some((J) => Pj($, J));
  }
  Ej.shouldUseGroup = Rj;
  function Pj($, X) {
    var J;
    return (
      $[X.keyword] !== void 0 ||
      ((J = X.definition.implements) === null || J === void 0
        ? void 0
        : J.some((Y) => $[Y] !== void 0))
    );
  }
  Ej.shouldUseRule = Pj;
});
var GJ = M((_j) => {
  Object.defineProperty(_j, "__esModule", { value: !0 });
  _j.reportTypeError =
    _j.checkDataTypes =
    _j.checkDataType =
    _j.coerceAndCheckDataType =
    _j.getJSONTypes =
    _j.getSchemaTypes =
    _j.DataType =
      void 0;
  var kf = yU(),
    _f = gU(),
    xf = zJ(),
    t = a(),
    vj = Y$(),
    K8;
  (function ($) {
    (($[($.Correct = 0)] = "Correct"), ($[($.Wrong = 1)] = "Wrong"));
  })(K8 || (_j.DataType = K8 = {}));
  function Tf($) {
    let X = Cj($.type);
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
  _j.getSchemaTypes = Tf;
  function Cj($) {
    let X = Array.isArray($) ? $ : $ ? [$] : [];
    if (X.every(kf.isJSONType)) return X;
    throw Error("type must be JSONType or JSONType[]: " + X.join(","));
  }
  _j.getJSONTypes = Cj;
  function ff($, X) {
    let { gen: J, data: Y, opts: Q } = $,
      W = yf(X, Q.coerceTypes),
      z =
        X.length > 0 &&
        !(
          W.length === 0 &&
          X.length === 1 &&
          (0, _f.schemaHasRulesForType)($, X[0])
        );
    if (z) {
      let G = uU(X, Y, Q.strictNumbers, K8.Wrong);
      J.if(G, () => {
        if (W.length) gf($, X, W);
        else mU($);
      });
    }
    return z;
  }
  _j.coerceAndCheckDataType = ff;
  var kj = new Set(["string", "number", "integer", "boolean", "null"]);
  function yf($, X) {
    return X
      ? $.filter((J) => kj.has(J) || (X === "array" && J === "array"))
      : [];
  }
  function gf($, X, J) {
    let { gen: Y, data: Q, opts: W } = $,
      z = Y.let("dataType", t._`typeof ${Q}`),
      G = Y.let("coerced", t._`undefined`);
    if (W.coerceTypes === "array")
      Y.if(
        t._`${z} == 'object' && Array.isArray(${Q}) && ${Q}.length == 1`,
        () =>
          Y.assign(Q, t._`${Q}[0]`)
            .assign(z, t._`typeof ${Q}`)
            .if(uU(X, Q, W.strictNumbers), () => Y.assign(G, Q)),
      );
    Y.if(t._`${G} !== undefined`);
    for (let U of J)
      if (kj.has(U) || (U === "array" && W.coerceTypes === "array")) H(U);
    (Y.else(),
      mU($),
      Y.endIf(),
      Y.if(t._`${G} !== undefined`, () => {
        (Y.assign(Q, G), hf($, G));
      }));
    function H(U) {
      switch (U) {
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
  function hf({ gen: $, parentData: X, parentDataProperty: J }, Y) {
    $.if(t._`${X} !== undefined`, () => $.assign(t._`${X}[${J}]`, Y));
  }
  function hU($, X, J, Y = K8.Correct) {
    let Q = Y === K8.Correct ? t.operators.EQ : t.operators.NEQ,
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
    return Y === K8.Correct ? W : (0, t.not)(W);
    function z(G = t.nil) {
      return (0, t.and)(
        t._`typeof ${X} == "number"`,
        G,
        J ? t._`isFinite(${X})` : t.nil,
      );
    }
  }
  _j.checkDataType = hU;
  function uU($, X, J, Y) {
    if ($.length === 1) return hU($[0], X, J, Y);
    let Q,
      W = (0, vj.toHash)($);
    if (W.array && W.object) {
      let z = t._`typeof ${X} != "object"`;
      ((Q = W.null ? z : t._`!${X} || ${z}`),
        delete W.null,
        delete W.array,
        delete W.object);
    } else Q = t.nil;
    if (W.number) delete W.integer;
    for (let z in W) Q = (0, t.and)(Q, hU(z, X, J, Y));
    return Q;
  }
  _j.checkDataTypes = uU;
  var uf = {
    message: ({ schema: $ }) => `must be ${$}`,
    params: ({ schema: $, schemaValue: X }) =>
      typeof $ == "string" ? t._`{type: ${$}}` : t._`{type: ${X}}`,
  };
  function mU($) {
    let X = mf($);
    (0, xf.reportError)(X, uf);
  }
  _j.reportTypeError = mU;
  function mf($) {
    let { gen: X, data: J, schema: Y } = $,
      Q = (0, vj.schemaRefOrVal)($, Y, "type");
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
var gj = M((fj) => {
  Object.defineProperty(fj, "__esModule", { value: !0 });
  fj.assignDefaults = void 0;
  var V8 = a(),
    of = Y$();
  function tf($, X) {
    let { properties: J, items: Y } = $.schema;
    if (X === "object" && J) for (let Q in J) Tj($, Q, J[Q].default);
    else if (X === "array" && Array.isArray(Y))
      Y.forEach((Q, W) => Tj($, W, Q.default));
  }
  fj.assignDefaults = tf;
  function Tj($, X, J) {
    let { gen: Y, compositeRule: Q, data: W, opts: z } = $;
    if (J === void 0) return;
    let G = V8._`${W}${(0, V8.getProperty)(X)}`;
    if (Q) {
      (0, of.checkStrictMode)($, `default is ignored for: ${G}`);
      return;
    }
    let H = V8._`${G} === undefined`;
    if (z.useDefaults === "empty")
      H = V8._`${H} || ${G} === null || ${G} === ""`;
    Y.if(H, V8._`${G} = ${(0, V8.stringify)(J)}`);
  }
});
var v6 = M((mj) => {
  Object.defineProperty(mj, "__esModule", { value: !0 });
  mj.validateUnion =
    mj.validateArray =
    mj.usePattern =
    mj.callValidateCode =
    mj.schemaProperties =
    mj.allSchemaProperties =
    mj.noPropertyInData =
    mj.propertyInData =
    mj.isOwnProperty =
    mj.hasPropFunc =
    mj.reportMissingProp =
    mj.checkMissingProp =
    mj.checkReportMissingProp =
      void 0;
  var M$ = a(),
    lU = Y$(),
    V1 = S4(),
    af = Y$();
  function sf($, X) {
    let { gen: J, data: Y, it: Q } = $;
    J.if(dU(J, Y, X, Q.opts.ownProperties), () => {
      ($.setParams({ missingProperty: M$._`${X}` }, !0), $.error());
    });
  }
  mj.checkReportMissingProp = sf;
  function ef({ gen: $, data: X, it: { opts: J } }, Y, Q) {
    return (0, M$.or)(
      ...Y.map((W) =>
        (0, M$.and)(dU($, X, W, J.ownProperties), M$._`${Q} = ${W}`),
      ),
    );
  }
  mj.checkMissingProp = ef;
  function $y($, X) {
    ($.setParams({ missingProperty: X }, !0), $.error());
  }
  mj.reportMissingProp = $y;
  function hj($) {
    return $.scopeValue("func", {
      ref: Object.prototype.hasOwnProperty,
      code: M$._`Object.prototype.hasOwnProperty`,
    });
  }
  mj.hasPropFunc = hj;
  function cU($, X, J) {
    return M$._`${hj($)}.call(${X}, ${J})`;
  }
  mj.isOwnProperty = cU;
  function Xy($, X, J, Y) {
    let Q = M$._`${X}${(0, M$.getProperty)(J)} !== undefined`;
    return Y ? M$._`${Q} && ${cU($, X, J)}` : Q;
  }
  mj.propertyInData = Xy;
  function dU($, X, J, Y) {
    let Q = M$._`${X}${(0, M$.getProperty)(J)} === undefined`;
    return Y ? (0, M$.or)(Q, (0, M$.not)(cU($, X, J))) : Q;
  }
  mj.noPropertyInData = dU;
  function uj($) {
    return $ ? Object.keys($).filter((X) => X !== "__proto__") : [];
  }
  mj.allSchemaProperties = uj;
  function Jy($, X) {
    return uj(X).filter((J) => !(0, lU.alwaysValidSchema)($, X[J]));
  }
  mj.schemaProperties = Jy;
  function Qy(
    {
      schemaCode: $,
      data: X,
      it: { gen: J, topSchemaRef: Y, schemaPath: Q, errorPath: W },
      it: z,
    },
    G,
    H,
    U,
  ) {
    let K = U ? M$._`${$}, ${X}, ${Y}${Q}` : X,
      V = [
        [
          V1.default.instancePath,
          (0, M$.strConcat)(V1.default.instancePath, W),
        ],
        [V1.default.parentData, z.parentData],
        [V1.default.parentDataProperty, z.parentDataProperty],
        [V1.default.rootData, V1.default.rootData],
      ];
    if (z.opts.dynamicRef)
      V.push([V1.default.dynamicAnchors, V1.default.dynamicAnchors]);
    let N = M$._`${K}, ${J.object(...V)}`;
    return H !== M$.nil ? M$._`${G}.call(${H}, ${N})` : M$._`${G}(${N})`;
  }
  mj.callValidateCode = Qy;
  var Yy = M$._`new RegExp`;
  function Wy({ gen: $, it: { opts: X } }, J) {
    let Y = X.unicodeRegExp ? "u" : "",
      { regExp: Q } = X.code,
      W = Q(J, Y);
    return $.scopeValue("pattern", {
      key: W.toString(),
      ref: W,
      code: M$._`${Q.code === "new RegExp" ? Yy : (0, af.useFunc)($, Q)}(${J}, ${Y})`,
    });
  }
  mj.usePattern = Wy;
  function zy($) {
    let { gen: X, data: J, keyword: Y, it: Q } = $,
      W = X.name("valid");
    if (Q.allErrors) {
      let G = X.let("valid", !0);
      return (z(() => X.assign(G, !1)), G);
    }
    return (X.var(W, !0), z(() => X.break()), W);
    function z(G) {
      let H = X.const("len", M$._`${J}.length`);
      X.forRange("i", 0, H, (U) => {
        ($.subschema({ keyword: Y, dataProp: U, dataPropType: lU.Type.Num }, W),
          X.if((0, M$.not)(W), G));
      });
    }
  }
  mj.validateArray = zy;
  function Gy($) {
    let { gen: X, schema: J, keyword: Y, it: Q } = $;
    if (!Array.isArray(J)) throw Error("ajv implementation error");
    if (J.some((H) => (0, lU.alwaysValidSchema)(Q, H)) && !Q.opts.unevaluated)
      return;
    let z = X.let("valid", !1),
      G = X.name("_valid");
    (X.block(() =>
      J.forEach((H, U) => {
        let K = $.subschema(
          { keyword: Y, schemaProp: U, compositeRule: !0 },
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
  mj.validateUnion = Gy;
});
var nj = M((pj) => {
  Object.defineProperty(pj, "__esModule", { value: !0 });
  pj.validateKeywordUsage =
    pj.validSchemaType =
    pj.funcKeywordCode =
    pj.macroKeywordCode =
      void 0;
  var $6 = a(),
    t1 = S4(),
    Ly = v6(),
    My = zJ();
  function Ay($, X) {
    let { gen: J, keyword: Y, schema: Q, parentSchema: W, it: z } = $,
      G = X.macro.call(z.self, Q, W, z),
      H = dj(J, Y, G);
    if (z.opts.validateSchema !== !1) z.self.validateSchema(G, !0);
    let U = J.name("valid");
    ($.subschema(
      {
        schema: G,
        schemaPath: $6.nil,
        errSchemaPath: `${z.errSchemaPath}/${Y}`,
        topSchemaRef: H,
        compositeRule: !0,
      },
      U,
    ),
      $.pass(U, () => $.error(!0)));
  }
  pj.macroKeywordCode = Ay;
  function Iy($, X) {
    var J;
    let { gen: Y, keyword: Q, schema: W, parentSchema: z, $data: G, it: H } = $;
    by(H, X);
    let U = !G && X.compile ? X.compile.call(H.self, W, z, H) : X.validate,
      K = dj(Y, Q, U),
      V = Y.let("valid");
    ($.block$data(V, N), $.ok((J = X.valid) !== null && J !== void 0 ? J : V));
    function N() {
      if (X.errors === !1) {
        if ((B(), X.modifying)) cj($);
        F(() => $.error());
      } else {
        let j = X.async ? O() : w();
        if (X.modifying) cj($);
        F(() => Zy($, j));
      }
    }
    function O() {
      let j = Y.let("ruleErrs", null);
      return (
        Y.try(
          () => B($6._`await `),
          (I) =>
            Y.assign(V, !1).if(
              $6._`${I} instanceof ${H.ValidationError}`,
              () => Y.assign(j, $6._`${I}.errors`),
              () => Y.throw(I),
            ),
        ),
        j
      );
    }
    function w() {
      let j = $6._`${K}.errors`;
      return (Y.assign(j, null), B($6.nil), j);
    }
    function B(j = X.async ? $6._`await ` : $6.nil) {
      let I = H.opts.passContext ? t1.default.this : t1.default.self,
        Z = !(("compile" in X && !G) || X.schema === !1);
      Y.assign(
        V,
        $6._`${j}${(0, Ly.callValidateCode)($, K, I, Z)}`,
        X.modifying,
      );
    }
    function F(j) {
      var I;
      Y.if((0, $6.not)((I = X.valid) !== null && I !== void 0 ? I : V), j);
    }
  }
  pj.funcKeywordCode = Iy;
  function cj($) {
    let { gen: X, data: J, it: Y } = $;
    X.if(Y.parentData, () =>
      X.assign(J, $6._`${Y.parentData}[${Y.parentDataProperty}]`),
    );
  }
  function Zy($, X) {
    let { gen: J } = $;
    J.if(
      $6._`Array.isArray(${X})`,
      () => {
        (J.assign(
          t1.default.vErrors,
          $6._`${t1.default.vErrors} === null ? ${X} : ${t1.default.vErrors}.concat(${X})`,
        ).assign(t1.default.errors, $6._`${t1.default.vErrors}.length`),
          (0, My.extendErrors)($));
      },
      () => $.error(),
    );
  }
  function by({ schemaEnv: $ }, X) {
    if (X.async && !$.$async) throw Error("async keyword in sync schema");
  }
  function dj($, X, J) {
    if (J === void 0) throw Error(`keyword "${X}" failed to compile`);
    return $.scopeValue(
      "keyword",
      typeof J == "function"
        ? { ref: J }
        : { ref: J, code: (0, $6.stringify)(J) },
    );
  }
  function Ry($, X, J = !1) {
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
  pj.validSchemaType = Ry;
  function Py({ schema: $, opts: X, self: J, errSchemaPath: Y }, Q, W) {
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
        let H =
          `keyword "${W}" value is invalid at path "${Y}": ` +
          J.errorsText(Q.validateSchema.errors);
        if (X.validateSchema === "log") J.logger.error(H);
        else throw Error(H);
      }
    }
  }
  pj.validateKeywordUsage = Py;
});
var aj = M((oj) => {
  Object.defineProperty(oj, "__esModule", { value: !0 });
  oj.extendSubschemaMode = oj.extendSubschemaData = oj.getSubschema = void 0;
  var J4 = a(),
    rj = Y$();
  function Cy(
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
            schemaPath: J4._`${$.schemaPath}${(0, J4.getProperty)(X)}`,
            errSchemaPath: `${$.errSchemaPath}/${X}`,
          }
        : {
            schema: G[J],
            schemaPath: J4._`${$.schemaPath}${(0, J4.getProperty)(X)}${(0, J4.getProperty)(J)}`,
            errSchemaPath: `${$.errSchemaPath}/${X}/${(0, rj.escapeFragment)(J)}`,
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
  oj.getSubschema = Cy;
  function ky(
    $,
    X,
    { dataProp: J, dataPropType: Y, data: Q, dataTypes: W, propertyName: z },
  ) {
    if (Q !== void 0 && J !== void 0)
      throw Error('both "data" and "dataProp" passed, only one allowed');
    let { gen: G } = X;
    if (J !== void 0) {
      let { errorPath: U, dataPathArr: K, opts: V } = X,
        N = G.let("data", J4._`${X.data}${(0, J4.getProperty)(J)}`, !0);
      (H(N),
        ($.errorPath = J4.str`${U}${(0, rj.getErrorPath)(J, Y, V.jsPropertySyntax)}`),
        ($.parentDataProperty = J4._`${J}`),
        ($.dataPathArr = [...K, $.parentDataProperty]));
    }
    if (Q !== void 0) {
      let U = Q instanceof J4.Name ? Q : G.let("data", Q, !0);
      if ((H(U), z !== void 0)) $.propertyName = z;
    }
    if (W) $.dataTypes = W;
    function H(U) {
      (($.data = U),
        ($.dataLevel = X.dataLevel + 1),
        ($.dataTypes = []),
        (X.definedProperties = new Set()),
        ($.parentData = X.data),
        ($.dataNames = [...X.dataNames, U]));
    }
  }
  oj.extendSubschemaData = ky;
  function _y(
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
  oj.extendSubschemaMode = _y;
});
var pU = M((YX$, sj) => {
  sj.exports = function $(X, J) {
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
var $L = M((WX$, ej) => {
  var N1 = (ej.exports = function ($, X, J) {
    if (typeof X == "function") ((J = X), (X = {}));
    J = X.cb || J;
    var Y = typeof J == "function" ? J : J.pre || function () {},
      Q = J.post || function () {};
    AY(X, Y, Q, $, "", $);
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
  function AY($, X, J, Y, Q, W, z, G, H, U) {
    if (Y && typeof Y == "object" && !Array.isArray(Y)) {
      X(Y, Q, W, z, G, H, U);
      for (var K in Y) {
        var V = Y[K];
        if (Array.isArray(V)) {
          if (K in N1.arrayKeywords)
            for (var N = 0; N < V.length; N++)
              AY($, X, J, V[N], Q + "/" + K + "/" + N, W, Q, K, Y, N);
        } else if (K in N1.propsKeywords) {
          if (V && typeof V == "object")
            for (var O in V)
              AY($, X, J, V[O], Q + "/" + K + "/" + fy(O), W, Q, K, Y, O);
        } else if (K in N1.keywords || ($.allKeys && !(K in N1.skipKeywords)))
          AY($, X, J, V, Q + "/" + K, W, Q, K, Y);
      }
      J(Y, Q, W, z, G, H, U);
    }
  }
  function fy($) {
    return $.replace(/~/g, "~0").replace(/\//g, "~1");
  }
});
var HJ = M((YL) => {
  Object.defineProperty(YL, "__esModule", { value: !0 });
  YL.getSchemaRefs =
    YL.resolveUrl =
    YL.normalizeId =
    YL._getFullPath =
    YL.getFullPath =
    YL.inlineRef =
      void 0;
  var yy = Y$(),
    gy = pU(),
    hy = $L(),
    uy = new Set([
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
  function my($, X = !0) {
    if (typeof $ == "boolean") return !0;
    if (X === !0) return !iU($);
    if (!X) return !1;
    return XL($) <= X;
  }
  YL.inlineRef = my;
  var ly = new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor",
  ]);
  function iU($) {
    for (let X in $) {
      if (ly.has(X)) return !0;
      let J = $[X];
      if (Array.isArray(J) && J.some(iU)) return !0;
      if (typeof J == "object" && iU(J)) return !0;
    }
    return !1;
  }
  function XL($) {
    let X = 0;
    for (let J in $) {
      if (J === "$ref") return 1 / 0;
      if ((X++, uy.has(J))) continue;
      if (typeof $[J] == "object") (0, yy.eachItem)($[J], (Y) => (X += XL(Y)));
      if (X === 1 / 0) return 1 / 0;
    }
    return X;
  }
  function JL($, X = "", J) {
    if (J !== !1) X = N8(X);
    let Y = $.parse(X);
    return QL($, Y);
  }
  YL.getFullPath = JL;
  function QL($, X) {
    return $.serialize(X).split("#")[0] + "#";
  }
  YL._getFullPath = QL;
  var cy = /#\/?$/;
  function N8($) {
    return $ ? $.replace(cy, "") : "";
  }
  YL.normalizeId = N8;
  function dy($, X, J) {
    return ((J = N8(J)), $.resolve(X, J));
  }
  YL.resolveUrl = dy;
  var py = /^[a-z_][-a-z0-9._]*$/i;
  function iy($, X) {
    if (typeof $ == "boolean") return {};
    let { schemaId: J, uriResolver: Y } = this.opts,
      Q = N8($[J] || X),
      W = { "": Q },
      z = JL(Y, Q, !1),
      G = {},
      H = new Set();
    return (
      hy($, { allKeys: !0 }, (V, N, O, w) => {
        if (w === void 0) return;
        let B = z + N,
          F = W[w];
        if (typeof V[J] == "string") F = j.call(this, V[J]);
        (I.call(this, V.$anchor), I.call(this, V.$dynamicAnchor), (W[N] = F));
        function j(Z) {
          let _ = this.opts.uriResolver.resolve;
          if (((Z = N8(F ? _(F, Z) : Z)), H.has(Z))) throw K(Z);
          H.add(Z);
          let T = this.refs[Z];
          if (typeof T == "string") T = this.refs[T];
          if (typeof T == "object") U(V, T.schema, Z);
          else if (Z !== N8(B))
            if (Z[0] === "#") (U(V, G[Z], Z), (G[Z] = V));
            else this.refs[Z] = B;
          return Z;
        }
        function I(Z) {
          if (typeof Z == "string") {
            if (!py.test(Z)) throw Error(`invalid anchor "${Z}"`);
            j.call(this, `#${Z}`);
          }
        }
      }),
      G
    );
    function U(V, N, O) {
      if (N !== void 0 && !gy(V, N)) throw K(O);
    }
    function K(V) {
      return Error(`reference "${V}" resolves to more than one schema`);
    }
  }
  YL.getSchemaRefs = iy;
});
var VJ = M((LL) => {
  Object.defineProperty(LL, "__esModule", { value: !0 });
  LL.getData = LL.KeywordCxt = LL.validateFunctionCode = void 0;
  var KL = Ij(),
    zL = GJ(),
    rU = gU(),
    IY = GJ(),
    sy = gj(),
    KJ = nj(),
    nU = aj(),
    u = a(),
    n = S4(),
    ey = HJ(),
    v4 = Y$(),
    UJ = zJ();
  function $g($) {
    if (OL($)) {
      if ((wL($), NL($))) {
        Qg($);
        return;
      }
    }
    VL($, () => (0, KL.topBoolOrEmptySchema)($));
  }
  LL.validateFunctionCode = $g;
  function VL(
    { gen: $, validateName: X, schema: J, schemaEnv: Y, opts: Q },
    W,
  ) {
    if (Q.code.es5)
      $.func(X, u._`${n.default.data}, ${n.default.valCxt}`, Y.$async, () => {
        ($.code(u._`"use strict"; ${GL(J, Q)}`), Jg($, Q), $.code(W));
      });
    else
      $.func(X, u._`${n.default.data}, ${Xg(Q)}`, Y.$async, () =>
        $.code(GL(J, Q)).code(W),
      );
  }
  function Xg($) {
    return u._`{${n.default.instancePath}="", ${n.default.parentData}, ${n.default.parentDataProperty}, ${n.default.rootData}=${n.default.data}${$.dynamicRef ? u._`, ${n.default.dynamicAnchors}={}` : u.nil}}={}`;
  }
  function Jg($, X) {
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
  function Qg($) {
    let { schema: X, opts: J, gen: Y } = $;
    VL($, () => {
      if (J.$comment && X.$comment) qL($);
      if (
        (Hg($),
        Y.let(n.default.vErrors, null),
        Y.let(n.default.errors, 0),
        J.unevaluated)
      )
        Yg($);
      (BL($), Vg($));
    });
    return;
  }
  function Yg($) {
    let { gen: X, validateName: J } = $;
    (($.evaluated = X.const("evaluated", u._`${J}.evaluated`)),
      X.if(u._`${$.evaluated}.dynamicProps`, () =>
        X.assign(u._`${$.evaluated}.props`, u._`undefined`),
      ),
      X.if(u._`${$.evaluated}.dynamicItems`, () =>
        X.assign(u._`${$.evaluated}.items`, u._`undefined`),
      ));
  }
  function GL($, X) {
    let J = typeof $ == "object" && $[X.schemaId];
    return J && (X.code.source || X.code.process)
      ? u._`/*# sourceURL=${J} */`
      : u.nil;
  }
  function Wg($, X) {
    if (OL($)) {
      if ((wL($), NL($))) {
        zg($, X);
        return;
      }
    }
    (0, KL.boolOrEmptySchema)($, X);
  }
  function NL({ schema: $, self: X }) {
    if (typeof $ == "boolean") return !$;
    for (let J in $) if (X.RULES.all[J]) return !0;
    return !1;
  }
  function OL($) {
    return typeof $.schema != "boolean";
  }
  function zg($, X) {
    let { schema: J, gen: Y, opts: Q } = $;
    if (Q.$comment && J.$comment) qL($);
    (Ug($), Kg($));
    let W = Y.const("_errs", n.default.errors);
    (BL($, W), Y.var(X, u._`${W} === ${n.default.errors}`));
  }
  function wL($) {
    ((0, v4.checkUnknownRules)($), Gg($));
  }
  function BL($, X) {
    if ($.opts.jtd) return HL($, [], !1, X);
    let J = (0, zL.getSchemaTypes)($.schema),
      Y = (0, zL.coerceAndCheckDataType)($, J);
    HL($, J, !Y, X);
  }
  function Gg($) {
    let { schema: X, errSchemaPath: J, opts: Y, self: Q } = $;
    if (
      X.$ref &&
      Y.ignoreKeywordsWithRef &&
      (0, v4.schemaHasRulesButRef)(X, Q.RULES)
    )
      Q.logger.warn(`$ref: keywords ignored in schema at path "${J}"`);
  }
  function Hg($) {
    let { schema: X, opts: J } = $;
    if (X.default !== void 0 && J.useDefaults && J.strictSchema)
      (0, v4.checkStrictMode)($, "default is ignored in the schema root");
  }
  function Ug($) {
    let X = $.schema[$.opts.schemaId];
    if (X) $.baseId = (0, ey.resolveUrl)($.opts.uriResolver, $.baseId, X);
  }
  function Kg($) {
    if ($.schema.$async && !$.schemaEnv.$async)
      throw Error("async schema in sync schema");
  }
  function qL({ gen: $, schemaEnv: X, schema: J, errSchemaPath: Y, opts: Q }) {
    let W = J.$comment;
    if (Q.$comment === !0) $.code(u._`${n.default.self}.logger.log(${W})`);
    else if (typeof Q.$comment == "function") {
      let z = u.str`${Y}/$comment`,
        G = $.scopeValue("root", { ref: X.root });
      $.code(u._`${n.default.self}.opts.$comment(${W}, ${z}, ${G}.schema)`);
    }
  }
  function Vg($) {
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
      if ((X.assign(u._`${Y}.errors`, n.default.vErrors), W.unevaluated)) Ng($);
      X.return(u._`${n.default.errors} === 0`);
    }
  }
  function Ng({ gen: $, evaluated: X, props: J, items: Y }) {
    if (J instanceof u.Name) $.assign(u._`${X}.props`, J);
    if (Y instanceof u.Name) $.assign(u._`${X}.items`, Y);
  }
  function HL($, X, J, Y) {
    let { gen: Q, schema: W, data: z, allErrors: G, opts: H, self: U } = $,
      { RULES: K } = U;
    if (
      W.$ref &&
      (H.ignoreKeywordsWithRef || !(0, v4.schemaHasRulesButRef)(W, K))
    ) {
      Q.block(() => FL($, "$ref", K.all.$ref.definition));
      return;
    }
    if (!H.jtd) Og($, X);
    Q.block(() => {
      for (let N of K.rules) V(N);
      V(K.post);
    });
    function V(N) {
      if (!(0, rU.shouldUseGroup)(W, N)) return;
      if (N.type) {
        if (
          (Q.if((0, IY.checkDataType)(N.type, z, H.strictNumbers)),
          UL($, N),
          X.length === 1 && X[0] === N.type && J)
        )
          (Q.else(), (0, IY.reportTypeError)($));
        Q.endIf();
      } else UL($, N);
      if (!G) Q.if(u._`${n.default.errors} === ${Y || 0}`);
    }
  }
  function UL($, X) {
    let {
      gen: J,
      schema: Y,
      opts: { useDefaults: Q },
    } = $;
    if (Q) (0, sy.assignDefaults)($, X.type);
    J.block(() => {
      for (let W of X.rules)
        if ((0, rU.shouldUseRule)(Y, W)) FL($, W.keyword, W.definition, X.type);
    });
  }
  function Og($, X) {
    if ($.schemaEnv.meta || !$.opts.strictTypes) return;
    if ((wg($, X), !$.opts.allowUnionTypes)) Bg($, X);
    qg($, $.dataTypes);
  }
  function wg($, X) {
    if (!X.length) return;
    if (!$.dataTypes.length) {
      $.dataTypes = X;
      return;
    }
    (X.forEach((J) => {
      if (!DL($.dataTypes, J))
        oU($, `type "${J}" not allowed by context "${$.dataTypes.join(",")}"`);
    }),
      Fg($, X));
  }
  function Bg($, X) {
    if (X.length > 1 && !(X.length === 2 && X.includes("null")))
      oU($, "use allowUnionTypes to allow union type keyword");
  }
  function qg($, X) {
    let J = $.self.RULES.all;
    for (let Y in J) {
      let Q = J[Y];
      if (typeof Q == "object" && (0, rU.shouldUseRule)($.schema, Q)) {
        let { type: W } = Q.definition;
        if (W.length && !W.some((z) => Dg(X, z)))
          oU($, `missing type "${W.join(",")}" for keyword "${Y}"`);
      }
    }
  }
  function Dg($, X) {
    return $.includes(X) || (X === "number" && $.includes("integer"));
  }
  function DL($, X) {
    return $.includes(X) || (X === "integer" && $.includes("number"));
  }
  function Fg($, X) {
    let J = [];
    for (let Y of $.dataTypes)
      if (DL(X, Y)) J.push(Y);
      else if (X.includes("integer") && Y === "number") J.push("integer");
    $.dataTypes = J;
  }
  function oU($, X) {
    let J = $.schemaEnv.baseId + $.errSchemaPath;
    ((X += ` at "${J}" (strictTypes)`),
      (0, v4.checkStrictMode)($, X, $.opts.strictTypes));
  }
  class tU {
    constructor($, X, J) {
      if (
        ((0, KJ.validateKeywordUsage)($, X, J),
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
        this.schemaCode = $.gen.const("vSchema", jL(this.$data, $));
      else if (
        ((this.schemaCode = this.schemaValue),
        !(0, KJ.validSchemaType)(this.schema, X.schemaType, X.allowUndefined))
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
      ($ ? UJ.reportExtraError : UJ.reportError)(this, this.def.error, X);
    }
    $dataError() {
      (0, UJ.reportError)(this, this.def.$dataError || UJ.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw Error('add "trackErrors" to keyword definition');
      (0, UJ.resetErrorsCount)(this.gen, this.errsCount);
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
          return u._`${(0, IY.checkDataTypes)(G, X, Q.opts.strictNumbers, IY.DataType.Wrong)}`;
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
      let J = (0, nU.getSubschema)(this.it, $);
      ((0, nU.extendSubschemaData)(J, this.it, $),
        (0, nU.extendSubschemaMode)(J, $));
      let Y = { ...this.it, ...J, items: void 0, props: void 0 };
      return (Wg(Y, X), Y);
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
  LL.KeywordCxt = tU;
  function FL($, X, J, Y) {
    let Q = new tU($, J, X);
    if ("code" in J) J.code(Q, Y);
    else if (Q.$data && J.validate) (0, KJ.funcKeywordCode)(Q, J);
    else if ("macro" in J) (0, KJ.macroKeywordCode)(Q, J);
    else if (J.compile || J.validate) (0, KJ.funcKeywordCode)(Q, J);
  }
  var jg = /^\/(?:[^~]|~0|~1)*$/,
    Lg = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function jL($, { dataLevel: X, dataNames: J, dataPathArr: Y }) {
    let Q, W;
    if ($ === "") return n.default.rootData;
    if ($[0] === "/") {
      if (!jg.test($)) throw Error(`Invalid JSON-pointer: ${$}`);
      ((Q = $), (W = n.default.rootData));
    } else {
      let U = Lg.exec($);
      if (!U) throw Error(`Invalid JSON-pointer: ${$}`);
      let K = +U[1];
      if (((Q = U[2]), Q === "#")) {
        if (K >= X) throw Error(H("property/index", K));
        return Y[X - K];
      }
      if (K > X) throw Error(H("data", K));
      if (((W = J[X - K]), !Q)) return W;
    }
    let z = W,
      G = Q.split("/");
    for (let U of G)
      if (U)
        ((W = u._`${W}${(0, u.getProperty)((0, v4.unescapeJsonPointer)(U))}`),
          (z = u._`${z} && ${W}`));
    return z;
    function H(U, K) {
      return `Cannot access ${U} ${K} levels up, current level is ${X}`;
    }
  }
  LL.getData = jL;
});
var ZY = M((IL) => {
  Object.defineProperty(IL, "__esModule", { value: !0 });
  class AL extends Error {
    constructor($) {
      super("validation failed");
      ((this.errors = $), (this.ajv = this.validation = !0));
    }
  }
  IL.default = AL;
});
var NJ = M((bL) => {
  Object.defineProperty(bL, "__esModule", { value: !0 });
  var aU = HJ();
  class ZL extends Error {
    constructor($, X, J, Y) {
      super(Y || `can't resolve reference ${J} from id ${X}`);
      ((this.missingRef = (0, aU.resolveUrl)($, X, J)),
        (this.missingSchema = (0, aU.normalizeId)(
          (0, aU.getFullPath)($, this.missingRef),
        )));
    }
  }
  bL.default = ZL;
});
var RY = M((EL) => {
  Object.defineProperty(EL, "__esModule", { value: !0 });
  EL.resolveSchema =
    EL.getCompilingSchema =
    EL.resolveRef =
    EL.compileSchema =
    EL.SchemaEnv =
      void 0;
  var n6 = a(),
    bg = ZY(),
    a1 = S4(),
    r6 = HJ(),
    RL = Y$(),
    Rg = VJ();
  class OJ {
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
            : (0, r6.normalizeId)(
                J === null || J === void 0 ? void 0 : J[$.schemaId || "$id"],
              )),
        (this.schemaPath = $.schemaPath),
        (this.localRefs = $.localRefs),
        (this.meta = $.meta),
        (this.$async = J === null || J === void 0 ? void 0 : J.$async),
        (this.refs = {}));
    }
  }
  EL.SchemaEnv = OJ;
  function eU($) {
    let X = PL.call(this, $);
    if (X) return X;
    let J = (0, r6.getFullPath)(this.opts.uriResolver, $.root.baseId),
      { es5: Y, lines: Q } = this.opts.code,
      { ownProperties: W } = this.opts,
      z = new n6.CodeGen(this.scope, { es5: Y, lines: Q, ownProperties: W }),
      G;
    if ($.$async)
      G = z.scopeValue("Error", {
        ref: bg.default,
        code: n6._`require("ajv/dist/runtime/validation_error").default`,
      });
    let H = z.scopeName("validate");
    $.validateName = H;
    let U = {
        gen: z,
        allErrors: this.opts.allErrors,
        data: a1.default.data,
        parentData: a1.default.parentData,
        parentDataProperty: a1.default.parentDataProperty,
        dataNames: [a1.default.data],
        dataPathArr: [n6.nil],
        dataLevel: 0,
        dataTypes: [],
        definedProperties: new Set(),
        topSchemaRef: z.scopeValue(
          "schema",
          this.opts.code.source === !0
            ? { ref: $.schema, code: (0, n6.stringify)($.schema) }
            : { ref: $.schema },
        ),
        validateName: H,
        ValidationError: G,
        schema: $.schema,
        schemaEnv: $,
        rootId: J,
        baseId: $.baseId || J,
        schemaPath: n6.nil,
        errSchemaPath: $.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: n6._`""`,
        opts: this.opts,
        self: this,
      },
      K;
    try {
      (this._compilations.add($),
        (0, Rg.validateFunctionCode)(U),
        z.optimize(this.opts.code.optimize));
      let V = z.toString();
      if (
        ((K = `${z.scopeRefs(a1.default.scope)}return ${V}`),
        this.opts.code.process)
      )
        K = this.opts.code.process(K, $);
      let O = Function(
        `${a1.default.self}`,
        `${a1.default.scope}`,
        K,
      )(this, this.scope.get());
      if (
        (this.scope.value(H, { ref: O }),
        (O.errors = null),
        (O.schema = $.schema),
        (O.schemaEnv = $),
        $.$async)
      )
        O.$async = !0;
      if (this.opts.code.source === !0)
        O.source = { validateName: H, validateCode: V, scopeValues: z._values };
      if (this.opts.unevaluated) {
        let { props: w, items: B } = U;
        if (
          ((O.evaluated = {
            props: w instanceof n6.Name ? void 0 : w,
            items: B instanceof n6.Name ? void 0 : B,
            dynamicProps: w instanceof n6.Name,
            dynamicItems: B instanceof n6.Name,
          }),
          O.source)
        )
          O.source.evaluated = (0, n6.stringify)(O.evaluated);
      }
      return (($.validate = O), $);
    } catch (V) {
      if ((delete $.validate, delete $.validateName, K))
        this.logger.error("Error compiling schema, function code:", K);
      throw V;
    } finally {
      this._compilations.delete($);
    }
  }
  EL.compileSchema = eU;
  function Pg($, X, J) {
    var Y;
    J = (0, r6.resolveUrl)(this.opts.uriResolver, X, J);
    let Q = $.refs[J];
    if (Q) return Q;
    let W = vg.call(this, $, J);
    if (W === void 0) {
      let z = (Y = $.localRefs) === null || Y === void 0 ? void 0 : Y[J],
        { schemaId: G } = this.opts;
      if (z) W = new OJ({ schema: z, schemaId: G, root: $, baseId: X });
    }
    if (W === void 0) return;
    return ($.refs[J] = Eg.call(this, W));
  }
  EL.resolveRef = Pg;
  function Eg($) {
    if ((0, r6.inlineRef)($.schema, this.opts.inlineRefs)) return $.schema;
    return $.validate ? $ : eU.call(this, $);
  }
  function PL($) {
    for (let X of this._compilations) if (Sg(X, $)) return X;
  }
  EL.getCompilingSchema = PL;
  function Sg($, X) {
    return $.schema === X.schema && $.root === X.root && $.baseId === X.baseId;
  }
  function vg($, X) {
    let J;
    while (typeof (J = this.refs[X]) == "string") X = J;
    return J || this.schemas[X] || bY.call(this, $, X);
  }
  function bY($, X) {
    let J = this.opts.uriResolver.parse(X),
      Y = (0, r6._getFullPath)(this.opts.uriResolver, J),
      Q = (0, r6.getFullPath)(this.opts.uriResolver, $.baseId, void 0);
    if (Object.keys($.schema).length > 0 && Y === Q) return sU.call(this, J, $);
    let W = (0, r6.normalizeId)(Y),
      z = this.refs[W] || this.schemas[W];
    if (typeof z == "string") {
      let G = bY.call(this, $, z);
      if (typeof (G === null || G === void 0 ? void 0 : G.schema) !== "object")
        return;
      return sU.call(this, J, G);
    }
    if (typeof (z === null || z === void 0 ? void 0 : z.schema) !== "object")
      return;
    if (!z.validate) eU.call(this, z);
    if (W === (0, r6.normalizeId)(X)) {
      let { schema: G } = z,
        { schemaId: H } = this.opts,
        U = G[H];
      if (U) Q = (0, r6.resolveUrl)(this.opts.uriResolver, Q, U);
      return new OJ({ schema: G, schemaId: H, root: $, baseId: Q });
    }
    return sU.call(this, J, z);
  }
  EL.resolveSchema = bY;
  var Cg = new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions",
  ]);
  function sU($, { baseId: X, schema: J, root: Y }) {
    var Q;
    if (((Q = $.fragment) === null || Q === void 0 ? void 0 : Q[0]) !== "/")
      return;
    for (let G of $.fragment.slice(1).split("/")) {
      if (typeof J === "boolean") return;
      let H = J[(0, RL.unescapeFragment)(G)];
      if (H === void 0) return;
      J = H;
      let U = typeof J === "object" && J[this.opts.schemaId];
      if (!Cg.has(G) && U) X = (0, r6.resolveUrl)(this.opts.uriResolver, X, U);
    }
    let W;
    if (
      typeof J != "boolean" &&
      J.$ref &&
      !(0, RL.schemaHasRulesButRef)(J, this.RULES)
    ) {
      let G = (0, r6.resolveUrl)(this.opts.uriResolver, X, J.$ref);
      W = bY.call(this, Y, G);
    }
    let { schemaId: z } = this.opts;
    if (
      ((W = W || new OJ({ schema: J, schemaId: z, root: Y, baseId: X })),
      W.schema !== W.root.schema)
    )
      return W;
    return;
  }
});
var vL = M((VX$, fg) => {
  fg.exports = {
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
var kL = M((NX$, CL) => {
  var yg = {
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
  CL.exports = { HEX: yg };
});
var uL = M((OX$, hL) => {
  var { HEX: gg } = kL(),
    hg =
      /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u;
  function fL($) {
    if (gL($, ".") < 3) return { host: $, isIPV4: !1 };
    let X = $.match(hg) || [],
      [J] = X;
    if (J) return { host: mg(J, "."), isIPV4: !0 };
    else return { host: $, isIPV4: !1 };
  }
  function $K($, X = !1) {
    let J = "",
      Y = !0;
    for (let Q of $) {
      if (gg[Q] === void 0) return;
      if (Q !== "0" && Y === !0) Y = !1;
      if (!Y) J += Q;
    }
    if (X && J.length === 0) J = "0";
    return J;
  }
  function ug($) {
    let X = 0,
      J = { error: !1, address: "", zone: "" },
      Y = [],
      Q = [],
      W = !1,
      z = !1,
      G = !1;
    function H() {
      if (Q.length) {
        if (W === !1) {
          let U = $K(Q);
          if (U !== void 0) Y.push(U);
          else return ((J.error = !0), !1);
        }
        Q.length = 0;
      }
      return !0;
    }
    for (let U = 0; U < $.length; U++) {
      let K = $[U];
      if (K === "[" || K === "]") continue;
      if (K === ":") {
        if (z === !0) G = !0;
        if (!H()) break;
        if ((X++, Y.push(":"), X > 7)) {
          J.error = !0;
          break;
        }
        if (U - 1 >= 0 && $[U - 1] === ":") z = !0;
        continue;
      } else if (K === "%") {
        if (!H()) break;
        W = !0;
      } else {
        Q.push(K);
        continue;
      }
    }
    if (Q.length)
      if (W) J.zone = Q.join("");
      else if (G) Y.push(Q.join(""));
      else Y.push($K(Q));
    return ((J.address = Y.join("")), J);
  }
  function yL($) {
    if (gL($, ":") < 2) return { host: $, isIPV6: !1 };
    let X = ug($);
    if (!X.error) {
      let { address: J, address: Y } = X;
      if (X.zone) ((J += "%" + X.zone), (Y += "%25" + X.zone));
      return { host: J, escapedHost: Y, isIPV6: !0 };
    } else return { host: $, isIPV6: !1 };
  }
  function mg($, X) {
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
  function gL($, X) {
    let J = 0;
    for (let Y = 0; Y < $.length; Y++) if ($[Y] === X) J++;
    return J;
  }
  var _L = /^\.\.?\//u,
    xL = /^\/\.(?:\/|$)/u,
    TL = /^\/\.\.(?:\/|$)/u,
    lg = /^\/?(?:.|\n)*?(?=\/|$)/u;
  function cg($) {
    let X = [];
    while ($.length)
      if ($.match(_L)) $ = $.replace(_L, "");
      else if ($.match(xL)) $ = $.replace(xL, "/");
      else if ($.match(TL)) (($ = $.replace(TL, "/")), X.pop());
      else if ($ === "." || $ === "..") $ = "";
      else {
        let J = $.match(lg);
        if (J) {
          let Y = J[0];
          (($ = $.slice(Y.length)), X.push(Y));
        } else throw Error("Unexpected dot segment condition");
      }
    return X.join("");
  }
  function dg($, X) {
    let J = X !== !0 ? escape : unescape;
    if ($.scheme !== void 0) $.scheme = J($.scheme);
    if ($.userinfo !== void 0) $.userinfo = J($.userinfo);
    if ($.host !== void 0) $.host = J($.host);
    if ($.path !== void 0) $.path = J($.path);
    if ($.query !== void 0) $.query = J($.query);
    if ($.fragment !== void 0) $.fragment = J($.fragment);
    return $;
  }
  function pg($) {
    let X = [];
    if ($.userinfo !== void 0) (X.push($.userinfo), X.push("@"));
    if ($.host !== void 0) {
      let J = unescape($.host),
        Y = fL(J);
      if (Y.isIPV4) J = Y.host;
      else {
        let Q = yL(Y.host);
        if (Q.isIPV6 === !0) J = `[${Q.escapedHost}]`;
        else J = $.host;
      }
      X.push(J);
    }
    if (typeof $.port === "number" || typeof $.port === "string")
      (X.push(":"), X.push(String($.port)));
    return X.length ? X.join("") : void 0;
  }
  hL.exports = {
    recomposeAuthority: pg,
    normalizeComponentEncoding: dg,
    removeDotSegments: cg,
    normalizeIPv4: fL,
    normalizeIPv6: yL,
    stringArrayToHexStripped: $K,
  };
});
var iL = M((wX$, pL) => {
  var ig = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu,
    ng = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
  function mL($) {
    return typeof $.secure === "boolean"
      ? $.secure
      : String($.scheme).toLowerCase() === "wss";
  }
  function lL($) {
    if (!$.host) $.error = $.error || "HTTP URIs must have a host.";
    return $;
  }
  function cL($) {
    let X = String($.scheme).toLowerCase() === "https";
    if ($.port === (X ? 443 : 80) || $.port === "") $.port = void 0;
    if (!$.path) $.path = "/";
    return $;
  }
  function rg($) {
    return (
      ($.secure = mL($)),
      ($.resourceName = ($.path || "/") + ($.query ? "?" + $.query : "")),
      ($.path = void 0),
      ($.query = void 0),
      $
    );
  }
  function og($) {
    if ($.port === (mL($) ? 443 : 80) || $.port === "") $.port = void 0;
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
  function tg($, X) {
    if (!$.path) return (($.error = "URN can not be parsed"), $);
    let J = $.path.match(ng);
    if (J) {
      let Y = X.scheme || $.scheme || "urn";
      (($.nid = J[1].toLowerCase()), ($.nss = J[2]));
      let Q = `${Y}:${X.nid || $.nid}`,
        W = XK[Q];
      if ((($.path = void 0), W)) $ = W.parse($, X);
    } else $.error = $.error || "URN can not be parsed.";
    return $;
  }
  function ag($, X) {
    let J = X.scheme || $.scheme || "urn",
      Y = $.nid.toLowerCase(),
      Q = `${J}:${X.nid || Y}`,
      W = XK[Q];
    if (W) $ = W.serialize($, X);
    let z = $,
      G = $.nss;
    return ((z.path = `${Y || X.nid}:${G}`), (X.skipEscape = !0), z);
  }
  function sg($, X) {
    let J = $;
    if (
      ((J.uuid = J.nss),
      (J.nss = void 0),
      !X.tolerant && (!J.uuid || !ig.test(J.uuid)))
    )
      J.error = J.error || "UUID is not valid.";
    return J;
  }
  function eg($) {
    let X = $;
    return ((X.nss = ($.uuid || "").toLowerCase()), X);
  }
  var dL = { scheme: "http", domainHost: !0, parse: lL, serialize: cL },
    $h = {
      scheme: "https",
      domainHost: dL.domainHost,
      parse: lL,
      serialize: cL,
    },
    PY = { scheme: "ws", domainHost: !0, parse: rg, serialize: og },
    Xh = {
      scheme: "wss",
      domainHost: PY.domainHost,
      parse: PY.parse,
      serialize: PY.serialize,
    },
    Jh = { scheme: "urn", parse: tg, serialize: ag, skipNormalize: !0 },
    Qh = { scheme: "urn:uuid", parse: sg, serialize: eg, skipNormalize: !0 },
    XK = { http: dL, https: $h, ws: PY, wss: Xh, urn: Jh, "urn:uuid": Qh };
  pL.exports = XK;
});
var rL = M((BX$, SY) => {
  var {
      normalizeIPv6: Yh,
      normalizeIPv4: Wh,
      removeDotSegments: wJ,
      recomposeAuthority: zh,
      normalizeComponentEncoding: EY,
    } = uL(),
    JK = iL();
  function Gh($, X) {
    if (typeof $ === "string") $ = Q4(C4($, X), X);
    else if (typeof $ === "object") $ = C4(Q4($, X), X);
    return $;
  }
  function Hh($, X, J) {
    let Y = Object.assign({ scheme: "null" }, J),
      Q = nL(C4($, Y), C4(X, Y), Y, !0);
    return Q4(Q, { ...Y, skipEscape: !0 });
  }
  function nL($, X, J, Y) {
    let Q = {};
    if (!Y) (($ = C4(Q4($, J), J)), (X = C4(Q4(X, J), J)));
    if (((J = J || {}), !J.tolerant && X.scheme))
      ((Q.scheme = X.scheme),
        (Q.userinfo = X.userinfo),
        (Q.host = X.host),
        (Q.port = X.port),
        (Q.path = wJ(X.path || "")),
        (Q.query = X.query));
    else {
      if (X.userinfo !== void 0 || X.host !== void 0 || X.port !== void 0)
        ((Q.userinfo = X.userinfo),
          (Q.host = X.host),
          (Q.port = X.port),
          (Q.path = wJ(X.path || "")),
          (Q.query = X.query));
      else {
        if (!X.path)
          if (((Q.path = $.path), X.query !== void 0)) Q.query = X.query;
          else Q.query = $.query;
        else {
          if (X.path.charAt(0) === "/") Q.path = wJ(X.path);
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
            Q.path = wJ(Q.path);
          }
          Q.query = X.query;
        }
        ((Q.userinfo = $.userinfo), (Q.host = $.host), (Q.port = $.port));
      }
      Q.scheme = $.scheme;
    }
    return ((Q.fragment = X.fragment), Q);
  }
  function Uh($, X, J) {
    if (typeof $ === "string")
      (($ = unescape($)), ($ = Q4(EY(C4($, J), !0), { ...J, skipEscape: !0 })));
    else if (typeof $ === "object") $ = Q4(EY($, !0), { ...J, skipEscape: !0 });
    if (typeof X === "string")
      ((X = unescape(X)), (X = Q4(EY(C4(X, J), !0), { ...J, skipEscape: !0 })));
    else if (typeof X === "object") X = Q4(EY(X, !0), { ...J, skipEscape: !0 });
    return $.toLowerCase() === X.toLowerCase();
  }
  function Q4($, X) {
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
      W = JK[(Y.scheme || J.scheme || "").toLowerCase()];
    if (W && W.serialize) W.serialize(J, Y);
    if (J.path !== void 0)
      if (!Y.skipEscape) {
        if (((J.path = escape(J.path)), J.scheme !== void 0))
          J.path = J.path.split("%3A").join(":");
      } else J.path = unescape(J.path);
    if (Y.reference !== "suffix" && J.scheme) Q.push(J.scheme, ":");
    let z = zh(J);
    if (z !== void 0) {
      if (Y.reference !== "suffix") Q.push("//");
      if ((Q.push(z), J.path && J.path.charAt(0) !== "/")) Q.push("/");
    }
    if (J.path !== void 0) {
      let G = J.path;
      if (!Y.absolutePath && (!W || !W.absolutePath)) G = wJ(G);
      if (z === void 0) G = G.replace(/^\/\//u, "/%2F");
      Q.push(G);
    }
    if (J.query !== void 0) Q.push("?", J.query);
    if (J.fragment !== void 0) Q.push("#", J.fragment);
    return Q.join("");
  }
  var Kh = Array.from({ length: 127 }, ($, X) =>
    /[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(X)),
  );
  function Vh($) {
    let X = 0;
    for (let J = 0, Y = $.length; J < Y; ++J)
      if (((X = $.charCodeAt(J)), X > 126 || Kh[X])) return !0;
    return !1;
  }
  var Nh =
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
    let z = $.match(Nh);
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
        let H = Wh(Y.host);
        if (H.isIPV4 === !1) {
          let U = Yh(H.host);
          ((Y.host = U.host.toLowerCase()), (W = U.isIPV6));
        } else ((Y.host = H.host), (W = !0));
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
      let G = JK[(J.scheme || Y.scheme || "").toLowerCase()];
      if (!J.unicodeSupport && (!G || !G.unicodeSupport)) {
        if (
          Y.host &&
          (J.domainHost || (G && G.domainHost)) &&
          W === !1 &&
          Vh(Y.host)
        )
          try {
            Y.host = URL.domainToASCII(Y.host.toLowerCase());
          } catch (H) {
            Y.error =
              Y.error ||
              "Host's domain name can not be converted to ASCII: " + H;
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
  var QK = {
    SCHEMES: JK,
    normalize: Gh,
    resolve: Hh,
    resolveComponents: nL,
    equal: Uh,
    serialize: Q4,
    parse: C4,
  };
  SY.exports = QK;
  SY.exports.default = QK;
  SY.exports.fastUri = QK;
});
var aL = M((tL) => {
  Object.defineProperty(tL, "__esModule", { value: !0 });
  var oL = rL();
  oL.code = 'require("ajv/dist/runtime/uri").default';
  tL.default = oL;
});
var WM = M((k4) => {
  Object.defineProperty(k4, "__esModule", { value: !0 });
  k4.CodeGen =
    k4.Name =
    k4.nil =
    k4.stringify =
    k4.str =
    k4._ =
    k4.KeywordCxt =
      void 0;
  var wh = VJ();
  Object.defineProperty(k4, "KeywordCxt", {
    enumerable: !0,
    get: function () {
      return wh.KeywordCxt;
    },
  });
  var O8 = a();
  Object.defineProperty(k4, "_", {
    enumerable: !0,
    get: function () {
      return O8._;
    },
  });
  Object.defineProperty(k4, "str", {
    enumerable: !0,
    get: function () {
      return O8.str;
    },
  });
  Object.defineProperty(k4, "stringify", {
    enumerable: !0,
    get: function () {
      return O8.stringify;
    },
  });
  Object.defineProperty(k4, "nil", {
    enumerable: !0,
    get: function () {
      return O8.nil;
    },
  });
  Object.defineProperty(k4, "Name", {
    enumerable: !0,
    get: function () {
      return O8.Name;
    },
  });
  Object.defineProperty(k4, "CodeGen", {
    enumerable: !0,
    get: function () {
      return O8.CodeGen;
    },
  });
  var Bh = ZY(),
    JM = NJ(),
    qh = yU(),
    BJ = RY(),
    Dh = a(),
    qJ = HJ(),
    vY = GJ(),
    WK = Y$(),
    sL = vL(),
    Fh = aL(),
    QM = ($, X) => new RegExp($, X);
  QM.code = "new RegExp";
  var jh = ["removeAdditional", "useDefaults", "coerceTypes"],
    Lh = new Set([
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
    Mh = {
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
    Ah = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode:
        '"minLength"/"maxLength" account for unicode characters by default.',
    },
    eL = 200;
  function Ih($) {
    var X,
      J,
      Y,
      Q,
      W,
      z,
      G,
      H,
      U,
      K,
      V,
      N,
      O,
      w,
      B,
      F,
      j,
      I,
      Z,
      _,
      T,
      O$,
      x$,
      O6,
      z4;
    let G4 = $.strict,
      a6 = (X = $.code) === null || X === void 0 ? void 0 : X.optimize,
      $0 = a6 === !0 || a6 === void 0 ? 1 : a6 || 0,
      _4 =
        (Y = (J = $.code) === null || J === void 0 ? void 0 : J.regExp) !==
          null && Y !== void 0
          ? Y
          : QM,
      X0 = (Q = $.uriResolver) !== null && Q !== void 0 ? Q : Fh.default;
    return {
      strictSchema:
        (z = (W = $.strictSchema) !== null && W !== void 0 ? W : G4) !== null &&
        z !== void 0
          ? z
          : !0,
      strictNumbers:
        (H = (G = $.strictNumbers) !== null && G !== void 0 ? G : G4) !==
          null && H !== void 0
          ? H
          : !0,
      strictTypes:
        (K = (U = $.strictTypes) !== null && U !== void 0 ? U : G4) !== null &&
        K !== void 0
          ? K
          : "log",
      strictTuples:
        (N = (V = $.strictTuples) !== null && V !== void 0 ? V : G4) !== null &&
        N !== void 0
          ? N
          : "log",
      strictRequired:
        (w = (O = $.strictRequired) !== null && O !== void 0 ? O : G4) !==
          null && w !== void 0
          ? w
          : !1,
      code: $.code
        ? { ...$.code, optimize: $0, regExp: _4 }
        : { optimize: $0, regExp: _4 },
      loopRequired: (B = $.loopRequired) !== null && B !== void 0 ? B : eL,
      loopEnum: (F = $.loopEnum) !== null && F !== void 0 ? F : eL,
      meta: (j = $.meta) !== null && j !== void 0 ? j : !0,
      messages: (I = $.messages) !== null && I !== void 0 ? I : !0,
      inlineRefs: (Z = $.inlineRefs) !== null && Z !== void 0 ? Z : !0,
      schemaId: (_ = $.schemaId) !== null && _ !== void 0 ? _ : "$id",
      addUsedSchema: (T = $.addUsedSchema) !== null && T !== void 0 ? T : !0,
      validateSchema:
        (O$ = $.validateSchema) !== null && O$ !== void 0 ? O$ : !0,
      validateFormats:
        (x$ = $.validateFormats) !== null && x$ !== void 0 ? x$ : !0,
      unicodeRegExp: (O6 = $.unicodeRegExp) !== null && O6 !== void 0 ? O6 : !0,
      int32range: (z4 = $.int32range) !== null && z4 !== void 0 ? z4 : !0,
      uriResolver: X0,
    };
  }
  class CY {
    constructor($ = {}) {
      ((this.schemas = {}),
        (this.refs = {}),
        (this.formats = {}),
        (this._compilations = new Set()),
        (this._loading = {}),
        (this._cache = new Map()),
        ($ = this.opts = { ...$, ...Ih($) }));
      let { es5: X, lines: J } = this.opts.code;
      ((this.scope = new Dh.ValueScope({
        scope: {},
        prefixes: Lh,
        es5: X,
        lines: J,
      })),
        (this.logger = Sh($.logger)));
      let Y = $.validateFormats;
      if (
        (($.validateFormats = !1),
        (this.RULES = (0, qh.getRules)()),
        $M.call(this, Mh, $, "NOT SUPPORTED"),
        $M.call(this, Ah, $, "DEPRECATED", "warn"),
        (this._metaOpts = Ph.call(this)),
        $.formats)
      )
        bh.call(this);
      if ((this._addVocabularies(), this._addDefaultMetaSchema(), $.keywords))
        Rh.call(this, $.keywords);
      if (typeof $.meta == "object") this.addMetaSchema($.meta);
      (Zh.call(this), ($.validateFormats = Y));
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      let { $data: $, meta: X, schemaId: J } = this.opts,
        Y = sL;
      if (J === "id") ((Y = { ...sL }), (Y.id = Y.$id), delete Y.$id);
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
      async function Y(U, K) {
        await Q.call(this, U.$schema);
        let V = this._addSchema(U, K);
        return V.validate || W.call(this, V);
      }
      async function Q(U) {
        if (U && !this.getSchema(U)) await Y.call(this, { $ref: U }, !0);
      }
      async function W(U) {
        try {
          return this._compileSchemaEnv(U);
        } catch (K) {
          if (!(K instanceof JM.default)) throw K;
          return (
            z.call(this, K),
            await G.call(this, K.missingSchema),
            W.call(this, U)
          );
        }
      }
      function z({ missingSchema: U, missingRef: K }) {
        if (this.refs[U])
          throw Error(`AnySchema ${U} is loaded but ${K} cannot be resolved`);
      }
      async function G(U) {
        let K = await H.call(this, U);
        if (!this.refs[U]) await Q.call(this, K.$schema);
        if (!this.refs[U]) this.addSchema(K, U, X);
      }
      async function H(U) {
        let K = this._loading[U];
        if (K) return K;
        try {
          return await (this._loading[U] = J(U));
        } finally {
          delete this._loading[U];
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
        (X = (0, qJ.normalizeId)(X || Q)),
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
      while (typeof (X = XM.call(this, $)) == "string") $ = X;
      if (X === void 0) {
        let { schemaId: J } = this.opts,
          Y = new BJ.SchemaEnv({ schema: {}, schemaId: J });
        if (((X = BJ.resolveSchema.call(this, Y, $)), !X)) return;
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
          let X = XM.call(this, $);
          if (typeof X == "object") this._cache.delete(X.schema);
          return (delete this.schemas[$], delete this.refs[$], this);
        }
        case "object": {
          let X = $;
          this._cache.delete(X);
          let J = $[this.opts.schemaId];
          if (J)
            ((J = (0, qJ.normalizeId)(J)),
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
      if ((Ch.call(this, J, X), !X))
        return ((0, WK.eachItem)(J, (Q) => YK.call(this, Q)), this);
      _h.call(this, X);
      let Y = {
        ...X,
        type: (0, vY.getJSONTypes)(X.type),
        schemaType: (0, vY.getJSONTypes)(X.schemaType),
      };
      return (
        (0, WK.eachItem)(
          J,
          Y.type.length === 0
            ? (Q) => YK.call(this, Q, Y)
            : (Q) => Y.type.forEach((W) => YK.call(this, Q, Y, W)),
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
          let { $data: H } = G.definition,
            U = W[z];
          if (H && U) W[z] = YM(U);
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
      J = (0, qJ.normalizeId)(W || J);
      let H = qJ.getSchemaRefs.call(this, $, J);
      if (
        ((G = new BJ.SchemaEnv({
          schema: $,
          schemaId: z,
          meta: X,
          baseId: J,
          localRefs: H,
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
      else BJ.compileSchema.call(this, $);
      if (!$.validate) throw Error("ajv implementation error");
      return $.validate;
    }
    _compileMetaSchema($) {
      let X = this.opts;
      this.opts = this._metaOpts;
      try {
        BJ.compileSchema.call(this, $);
      } finally {
        this.opts = X;
      }
    }
  }
  CY.ValidationError = Bh.default;
  CY.MissingRefError = JM.default;
  k4.default = CY;
  function $M($, X, J, Y = "error") {
    for (let Q in $) {
      let W = Q;
      if (W in X) this.logger[Y](`${J}: option ${Q}. ${$[W]}`);
    }
  }
  function XM($) {
    return (($ = (0, qJ.normalizeId)($)), this.schemas[$] || this.refs[$]);
  }
  function Zh() {
    let $ = this.opts.schemas;
    if (!$) return;
    if (Array.isArray($)) this.addSchema($);
    else for (let X in $) this.addSchema($[X], X);
  }
  function bh() {
    for (let $ in this.opts.formats) {
      let X = this.opts.formats[$];
      if (X) this.addFormat($, X);
    }
  }
  function Rh($) {
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
  function Ph() {
    let $ = { ...this.opts };
    for (let X of jh) delete $[X];
    return $;
  }
  var Eh = { log() {}, warn() {}, error() {} };
  function Sh($) {
    if ($ === !1) return Eh;
    if ($ === void 0) return console;
    if ($.log && $.warn && $.error) return $;
    throw Error("logger must implement log, warn and error methods");
  }
  var vh = /^[a-z_$][a-z0-9_$:-]*$/i;
  function Ch($, X) {
    let { RULES: J } = this;
    if (
      ((0, WK.eachItem)($, (Y) => {
        if (J.keywords[Y]) throw Error(`Keyword ${Y} is already defined`);
        if (!vh.test(Y)) throw Error(`Keyword ${Y} has invalid name`);
      }),
      !X)
    )
      return;
    if (X.$data && !("code" in X || "validate" in X))
      throw Error('$data keyword must have "code" or "validate" function');
  }
  function YK($, X, J) {
    var Y;
    let Q = X === null || X === void 0 ? void 0 : X.post;
    if (J && Q) throw Error('keyword with "post" flag cannot have "type"');
    let { RULES: W } = this,
      z = Q ? W.post : W.rules.find(({ type: H }) => H === J);
    if (!z) ((z = { type: J, rules: [] }), W.rules.push(z));
    if (((W.keywords[$] = !0), !X)) return;
    let G = {
      keyword: $,
      definition: {
        ...X,
        type: (0, vY.getJSONTypes)(X.type),
        schemaType: (0, vY.getJSONTypes)(X.schemaType),
      },
    };
    if (X.before) kh.call(this, z, G, X.before);
    else z.rules.push(G);
    ((W.all[$] = G),
      (Y = X.implements) === null ||
        Y === void 0 ||
        Y.forEach((H) => this.addKeyword(H)));
  }
  function kh($, X, J) {
    let Y = $.rules.findIndex((Q) => Q.keyword === J);
    if (Y >= 0) $.rules.splice(Y, 0, X);
    else ($.rules.push(X), this.logger.warn(`rule ${J} is not defined`));
  }
  function _h($) {
    let { metaSchema: X } = $;
    if (X === void 0) return;
    if ($.$data && this.opts.$data) X = YM(X);
    $.validateSchema = this.compile(X, !0);
  }
  var xh = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
  };
  function YM($) {
    return { anyOf: [$, xh] };
  }
});
var GM = M((zM) => {
  Object.defineProperty(zM, "__esModule", { value: !0 });
  var yh = {
    keyword: "id",
    code() {
      throw Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    },
  };
  zM.default = yh;
});
var OM = M((VM) => {
  Object.defineProperty(VM, "__esModule", { value: !0 });
  VM.callRef = VM.getValidate = void 0;
  var hh = NJ(),
    HM = v6(),
    V6 = a(),
    w8 = S4(),
    UM = RY(),
    kY = Y$(),
    uh = {
      keyword: "$ref",
      schemaType: "string",
      code($) {
        let { gen: X, schema: J, it: Y } = $,
          { baseId: Q, schemaEnv: W, validateName: z, opts: G, self: H } = Y,
          { root: U } = W;
        if ((J === "#" || J === "#/") && Q === U.baseId) return V();
        let K = UM.resolveRef.call(H, U, Q, J);
        if (K === void 0) throw new hh.default(Y.opts.uriResolver, Q, J);
        if (K instanceof UM.SchemaEnv) return N(K);
        return O(K);
        function V() {
          if (W === U) return _Y($, z, W, W.$async);
          let w = X.scopeValue("root", { ref: U });
          return _Y($, V6._`${w}.validate`, U, U.$async);
        }
        function N(w) {
          let B = KM($, w);
          _Y($, B, w, w.$async);
        }
        function O(w) {
          let B = X.scopeValue(
              "schema",
              G.code.source === !0
                ? { ref: w, code: (0, V6.stringify)(w) }
                : { ref: w },
            ),
            F = X.name("valid"),
            j = $.subschema(
              {
                schema: w,
                dataTypes: [],
                schemaPath: V6.nil,
                topSchemaRef: B,
                errSchemaPath: J,
              },
              F,
            );
          ($.mergeEvaluated(j), $.ok(F));
        }
      },
    };
  function KM($, X) {
    let { gen: J } = $;
    return X.validate
      ? J.scopeValue("validate", { ref: X.validate })
      : V6._`${J.scopeValue("wrapper", { ref: X })}.validate`;
  }
  VM.getValidate = KM;
  function _Y($, X, J, Y) {
    let { gen: Q, it: W } = $,
      { allErrors: z, schemaEnv: G, opts: H } = W,
      U = H.passContext ? w8.default.this : V6.nil;
    if (Y) K();
    else V();
    function K() {
      if (!G.$async) throw Error("async schema referenced by sync schema");
      let w = Q.let("valid");
      (Q.try(
        () => {
          if (
            (Q.code(V6._`await ${(0, HM.callValidateCode)($, X, U)}`), O(X), !z)
          )
            Q.assign(w, !0);
        },
        (B) => {
          if (
            (Q.if(V6._`!(${B} instanceof ${W.ValidationError})`, () =>
              Q.throw(B),
            ),
            N(B),
            !z)
          )
            Q.assign(w, !1);
        },
      ),
        $.ok(w));
    }
    function V() {
      $.result(
        (0, HM.callValidateCode)($, X, U),
        () => O(X),
        () => N(X),
      );
    }
    function N(w) {
      let B = V6._`${w}.errors`;
      (Q.assign(
        w8.default.vErrors,
        V6._`${w8.default.vErrors} === null ? ${B} : ${w8.default.vErrors}.concat(${B})`,
      ),
        Q.assign(w8.default.errors, V6._`${w8.default.vErrors}.length`));
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
            W.props = kY.mergeEvaluated.props(Q, F.props, W.props);
        } else {
          let j = Q.var("props", V6._`${w}.evaluated.props`);
          W.props = kY.mergeEvaluated.props(Q, j, W.props, V6.Name);
        }
      if (W.items !== !0)
        if (F && !F.dynamicItems) {
          if (F.items !== void 0)
            W.items = kY.mergeEvaluated.items(Q, F.items, W.items);
        } else {
          let j = Q.var("items", V6._`${w}.evaluated.items`);
          W.items = kY.mergeEvaluated.items(Q, j, W.items, V6.Name);
        }
    }
  }
  VM.callRef = _Y;
  VM.default = uh;
});
var BM = M((wM) => {
  Object.defineProperty(wM, "__esModule", { value: !0 });
  var ch = GM(),
    dh = OM(),
    ph = [
      "$schema",
      "$id",
      "$defs",
      "$vocabulary",
      { keyword: "$comment" },
      "definitions",
      ch.default,
      dh.default,
    ];
  wM.default = ph;
});
var DM = M((qM) => {
  Object.defineProperty(qM, "__esModule", { value: !0 });
  var xY = a(),
    O1 = xY.operators,
    TY = {
      maximum: { okStr: "<=", ok: O1.LTE, fail: O1.GT },
      minimum: { okStr: ">=", ok: O1.GTE, fail: O1.LT },
      exclusiveMaximum: { okStr: "<", ok: O1.LT, fail: O1.GTE },
      exclusiveMinimum: { okStr: ">", ok: O1.GT, fail: O1.LTE },
    },
    nh = {
      message: ({ keyword: $, schemaCode: X }) =>
        xY.str`must be ${TY[$].okStr} ${X}`,
      params: ({ keyword: $, schemaCode: X }) =>
        xY._`{comparison: ${TY[$].okStr}, limit: ${X}}`,
    },
    rh = {
      keyword: Object.keys(TY),
      type: "number",
      schemaType: "number",
      $data: !0,
      error: nh,
      code($) {
        let { keyword: X, data: J, schemaCode: Y } = $;
        $.fail$data(xY._`${J} ${TY[X].fail} ${Y} || isNaN(${J})`);
      },
    };
  qM.default = rh;
});
var jM = M((FM) => {
  Object.defineProperty(FM, "__esModule", { value: !0 });
  var DJ = a(),
    th = {
      message: ({ schemaCode: $ }) => DJ.str`must be multiple of ${$}`,
      params: ({ schemaCode: $ }) => DJ._`{multipleOf: ${$}}`,
    },
    ah = {
      keyword: "multipleOf",
      type: "number",
      schemaType: "number",
      $data: !0,
      error: th,
      code($) {
        let { gen: X, data: J, schemaCode: Y, it: Q } = $,
          W = Q.opts.multipleOfPrecision,
          z = X.let("res"),
          G = W
            ? DJ._`Math.abs(Math.round(${z}) - ${z}) > 1e-${W}`
            : DJ._`${z} !== parseInt(${z})`;
        $.fail$data(DJ._`(${Y} === 0 || (${z} = ${J}/${Y}, ${G}))`);
      },
    };
  FM.default = ah;
});
var AM = M((MM) => {
  Object.defineProperty(MM, "__esModule", { value: !0 });
  function LM($) {
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
  MM.default = LM;
  LM.code = 'require("ajv/dist/runtime/ucs2length").default';
});
var ZM = M((IM) => {
  Object.defineProperty(IM, "__esModule", { value: !0 });
  var s1 = a(),
    $u = Y$(),
    Xu = AM(),
    Ju = {
      message({ keyword: $, schemaCode: X }) {
        let J = $ === "maxLength" ? "more" : "fewer";
        return s1.str`must NOT have ${J} than ${X} characters`;
      },
      params: ({ schemaCode: $ }) => s1._`{limit: ${$}}`,
    },
    Qu = {
      keyword: ["maxLength", "minLength"],
      type: "string",
      schemaType: "number",
      $data: !0,
      error: Ju,
      code($) {
        let { keyword: X, data: J, schemaCode: Y, it: Q } = $,
          W = X === "maxLength" ? s1.operators.GT : s1.operators.LT,
          z =
            Q.opts.unicode === !1
              ? s1._`${J}.length`
              : s1._`${(0, $u.useFunc)($.gen, Xu.default)}(${J})`;
        $.fail$data(s1._`${z} ${W} ${Y}`);
      },
    };
  IM.default = Qu;
});
var RM = M((bM) => {
  Object.defineProperty(bM, "__esModule", { value: !0 });
  var Wu = v6(),
    zu = Y$(),
    B8 = a(),
    Gu = {
      message: ({ schemaCode: $ }) => B8.str`must match pattern "${$}"`,
      params: ({ schemaCode: $ }) => B8._`{pattern: ${$}}`,
    },
    Hu = {
      keyword: "pattern",
      type: "string",
      schemaType: "string",
      $data: !0,
      error: Gu,
      code($) {
        let { gen: X, data: J, $data: Y, schema: Q, schemaCode: W, it: z } = $,
          G = z.opts.unicodeRegExp ? "u" : "";
        if (Y) {
          let { regExp: H } = z.opts.code,
            U =
              H.code === "new RegExp"
                ? B8._`new RegExp`
                : (0, zu.useFunc)(X, H),
            K = X.let("valid");
          (X.try(
            () => X.assign(K, B8._`${U}(${W}, ${G}).test(${J})`),
            () => X.assign(K, !1),
          ),
            $.fail$data(B8._`!${K}`));
        } else {
          let H = (0, Wu.usePattern)($, Q);
          $.fail$data(B8._`!${H}.test(${J})`);
        }
      },
    };
  bM.default = Hu;
});
var EM = M((PM) => {
  Object.defineProperty(PM, "__esModule", { value: !0 });
  var FJ = a(),
    Ku = {
      message({ keyword: $, schemaCode: X }) {
        let J = $ === "maxProperties" ? "more" : "fewer";
        return FJ.str`must NOT have ${J} than ${X} properties`;
      },
      params: ({ schemaCode: $ }) => FJ._`{limit: ${$}}`,
    },
    Vu = {
      keyword: ["maxProperties", "minProperties"],
      type: "object",
      schemaType: "number",
      $data: !0,
      error: Ku,
      code($) {
        let { keyword: X, data: J, schemaCode: Y } = $,
          Q = X === "maxProperties" ? FJ.operators.GT : FJ.operators.LT;
        $.fail$data(FJ._`Object.keys(${J}).length ${Q} ${Y}`);
      },
    };
  PM.default = Vu;
});
var vM = M((SM) => {
  Object.defineProperty(SM, "__esModule", { value: !0 });
  var jJ = v6(),
    LJ = a(),
    Ou = Y$(),
    wu = {
      message: ({ params: { missingProperty: $ } }) =>
        LJ.str`must have required property '${$}'`,
      params: ({ params: { missingProperty: $ } }) =>
        LJ._`{missingProperty: ${$}}`,
    },
    Bu = {
      keyword: "required",
      type: "object",
      schemaType: "array",
      $data: !0,
      error: wu,
      code($) {
        let { gen: X, schema: J, schemaCode: Y, data: Q, $data: W, it: z } = $,
          { opts: G } = z;
        if (!W && J.length === 0) return;
        let H = J.length >= G.loopRequired;
        if (z.allErrors) U();
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
              (0, Ou.checkStrictMode)(z, j, z.opts.strictRequired);
            }
        }
        function U() {
          if (H || W) $.block$data(LJ.nil, V);
          else for (let O of J) (0, jJ.checkReportMissingProp)($, O);
        }
        function K() {
          let O = X.let("missing");
          if (H || W) {
            let w = X.let("valid", !0);
            ($.block$data(w, () => N(O, w)), $.ok(w));
          } else
            (X.if((0, jJ.checkMissingProp)($, J, O)),
              (0, jJ.reportMissingProp)($, O),
              X.else());
        }
        function V() {
          X.forOf("prop", Y, (O) => {
            ($.setParams({ missingProperty: O }),
              X.if((0, jJ.noPropertyInData)(X, Q, O, G.ownProperties), () =>
                $.error(),
              ));
          });
        }
        function N(O, w) {
          ($.setParams({ missingProperty: O }),
            X.forOf(
              O,
              Y,
              () => {
                (X.assign(w, (0, jJ.propertyInData)(X, Q, O, G.ownProperties)),
                  X.if((0, LJ.not)(w), () => {
                    ($.error(), X.break());
                  }));
              },
              LJ.nil,
            ));
        }
      },
    };
  SM.default = Bu;
});
var kM = M((CM) => {
  Object.defineProperty(CM, "__esModule", { value: !0 });
  var MJ = a(),
    Du = {
      message({ keyword: $, schemaCode: X }) {
        let J = $ === "maxItems" ? "more" : "fewer";
        return MJ.str`must NOT have ${J} than ${X} items`;
      },
      params: ({ schemaCode: $ }) => MJ._`{limit: ${$}}`,
    },
    Fu = {
      keyword: ["maxItems", "minItems"],
      type: "array",
      schemaType: "number",
      $data: !0,
      error: Du,
      code($) {
        let { keyword: X, data: J, schemaCode: Y } = $,
          Q = X === "maxItems" ? MJ.operators.GT : MJ.operators.LT;
        $.fail$data(MJ._`${J}.length ${Q} ${Y}`);
      },
    };
  CM.default = Fu;
});
var fY = M((xM) => {
  Object.defineProperty(xM, "__esModule", { value: !0 });
  var _M = pU();
  _M.code = 'require("ajv/dist/runtime/equal").default';
  xM.default = _M;
});
var fM = M((TM) => {
  Object.defineProperty(TM, "__esModule", { value: !0 });
  var zK = GJ(),
    p$ = a(),
    Mu = Y$(),
    Au = fY(),
    Iu = {
      message: ({ params: { i: $, j: X } }) =>
        p$.str`must NOT have duplicate items (items ## ${X} and ${$} are identical)`,
      params: ({ params: { i: $, j: X } }) => p$._`{i: ${$}, j: ${X}}`,
    },
    Zu = {
      keyword: "uniqueItems",
      type: "array",
      schemaType: "boolean",
      $data: !0,
      error: Iu,
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
        let H = X.let("valid"),
          U = W.items ? (0, zK.getSchemaTypes)(W.items) : [];
        ($.block$data(H, K, p$._`${z} === false`), $.ok(H));
        function K() {
          let w = X.let("i", p$._`${J}.length`),
            B = X.let("j");
          ($.setParams({ i: w, j: B }),
            X.assign(H, !0),
            X.if(p$._`${w} > 1`, () => (V() ? N : O)(w, B)));
        }
        function V() {
          return (
            U.length > 0 && !U.some((w) => w === "object" || w === "array")
          );
        }
        function N(w, B) {
          let F = X.name("item"),
            j = (0, zK.checkDataTypes)(
              U,
              F,
              G.opts.strictNumbers,
              zK.DataType.Wrong,
            ),
            I = X.const("indices", p$._`{}`);
          X.for(p$._`;${w}--;`, () => {
            if (
              (X.let(F, p$._`${J}[${w}]`),
              X.if(j, p$._`continue`),
              U.length > 1)
            )
              X.if(p$._`typeof ${F} == "string"`, p$._`${F} += "_"`);
            X.if(p$._`typeof ${I}[${F}] == "number"`, () => {
              (X.assign(B, p$._`${I}[${F}]`),
                $.error(),
                X.assign(H, !1).break());
            }).code(p$._`${I}[${F}] = ${w}`);
          });
        }
        function O(w, B) {
          let F = (0, Mu.useFunc)(X, Au.default),
            j = X.name("outer");
          X.label(j).for(p$._`;${w}--;`, () =>
            X.for(p$._`${B} = ${w}; ${B}--;`, () =>
              X.if(p$._`${F}(${J}[${w}], ${J}[${B}])`, () => {
                ($.error(), X.assign(H, !1).break(j));
              }),
            ),
          );
        }
      },
    };
  TM.default = Zu;
});
var gM = M((yM) => {
  Object.defineProperty(yM, "__esModule", { value: !0 });
  var GK = a(),
    Ru = Y$(),
    Pu = fY(),
    Eu = {
      message: "must be equal to constant",
      params: ({ schemaCode: $ }) => GK._`{allowedValue: ${$}}`,
    },
    Su = {
      keyword: "const",
      $data: !0,
      error: Eu,
      code($) {
        let { gen: X, data: J, $data: Y, schemaCode: Q, schema: W } = $;
        if (Y || (W && typeof W == "object"))
          $.fail$data(GK._`!${(0, Ru.useFunc)(X, Pu.default)}(${J}, ${Q})`);
        else $.fail(GK._`${W} !== ${J}`);
      },
    };
  yM.default = Su;
});
var uM = M((hM) => {
  Object.defineProperty(hM, "__esModule", { value: !0 });
  var AJ = a(),
    Cu = Y$(),
    ku = fY(),
    _u = {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: $ }) => AJ._`{allowedValues: ${$}}`,
    },
    xu = {
      keyword: "enum",
      schemaType: "array",
      $data: !0,
      error: _u,
      code($) {
        let { gen: X, data: J, $data: Y, schema: Q, schemaCode: W, it: z } = $;
        if (!Y && Q.length === 0) throw Error("enum must have non-empty array");
        let G = Q.length >= z.opts.loopEnum,
          H,
          U = () =>
            H !== null && H !== void 0
              ? H
              : (H = (0, Cu.useFunc)(X, ku.default)),
          K;
        if (G || Y) ((K = X.let("valid")), $.block$data(K, V));
        else {
          if (!Array.isArray(Q)) throw Error("ajv implementation error");
          let O = X.const("vSchema", W);
          K = (0, AJ.or)(...Q.map((w, B) => N(O, B)));
        }
        $.pass(K);
        function V() {
          (X.assign(K, !1),
            X.forOf("v", W, (O) =>
              X.if(AJ._`${U()}(${J}, ${O})`, () => X.assign(K, !0).break()),
            ));
        }
        function N(O, w) {
          let B = Q[w];
          return typeof B === "object" && B !== null
            ? AJ._`${U()}(${J}, ${O}[${w}])`
            : AJ._`${J} === ${B}`;
        }
      },
    };
  hM.default = xu;
});
var lM = M((mM) => {
  Object.defineProperty(mM, "__esModule", { value: !0 });
  var fu = DM(),
    yu = jM(),
    gu = ZM(),
    hu = RM(),
    uu = EM(),
    mu = vM(),
    lu = kM(),
    cu = fM(),
    du = gM(),
    pu = uM(),
    iu = [
      fu.default,
      yu.default,
      gu.default,
      hu.default,
      uu.default,
      mu.default,
      lu.default,
      cu.default,
      { keyword: "type", schemaType: ["string", "array"] },
      { keyword: "nullable", schemaType: "boolean" },
      du.default,
      pu.default,
    ];
  mM.default = iu;
});
var UK = M((dM) => {
  Object.defineProperty(dM, "__esModule", { value: !0 });
  dM.validateAdditionalItems = void 0;
  var e1 = a(),
    HK = Y$(),
    ru = {
      message: ({ params: { len: $ } }) =>
        e1.str`must NOT have more than ${$} items`,
      params: ({ params: { len: $ } }) => e1._`{limit: ${$}}`,
    },
    ou = {
      keyword: "additionalItems",
      type: "array",
      schemaType: ["boolean", "object"],
      before: "uniqueItems",
      error: ru,
      code($) {
        let { parentSchema: X, it: J } = $,
          { items: Y } = X;
        if (!Array.isArray(Y)) {
          (0, HK.checkStrictMode)(
            J,
            '"additionalItems" is ignored when "items" is not an array of schemas',
          );
          return;
        }
        cM($, Y);
      },
    };
  function cM($, X) {
    let { gen: J, schema: Y, data: Q, keyword: W, it: z } = $;
    z.items = !0;
    let G = J.const("len", e1._`${Q}.length`);
    if (Y === !1)
      ($.setParams({ len: X.length }), $.pass(e1._`${G} <= ${X.length}`));
    else if (typeof Y == "object" && !(0, HK.alwaysValidSchema)(z, Y)) {
      let U = J.var("valid", e1._`${G} <= ${X.length}`);
      (J.if((0, e1.not)(U), () => H(U)), $.ok(U));
    }
    function H(U) {
      J.forRange("i", X.length, G, (K) => {
        if (
          ($.subschema(
            { keyword: W, dataProp: K, dataPropType: HK.Type.Num },
            U,
          ),
          !z.allErrors)
        )
          J.if((0, e1.not)(U), () => J.break());
      });
    }
  }
  dM.validateAdditionalItems = cM;
  dM.default = ou;
});
var KK = M((rM) => {
  Object.defineProperty(rM, "__esModule", { value: !0 });
  rM.validateTuple = void 0;
  var iM = a(),
    yY = Y$(),
    au = v6(),
    su = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "array", "boolean"],
      before: "uniqueItems",
      code($) {
        let { schema: X, it: J } = $;
        if (Array.isArray(X)) return nM($, "additionalItems", X);
        if (((J.items = !0), (0, yY.alwaysValidSchema)(J, X))) return;
        $.ok((0, au.validateArray)($));
      },
    };
  function nM($, X, J = $.schema) {
    let { gen: Y, parentSchema: Q, data: W, keyword: z, it: G } = $;
    if ((K(Q), G.opts.unevaluated && J.length && G.items !== !0))
      G.items = yY.mergeEvaluated.items(Y, J.length, G.items);
    let H = Y.name("valid"),
      U = Y.const("len", iM._`${W}.length`);
    J.forEach((V, N) => {
      if ((0, yY.alwaysValidSchema)(G, V)) return;
      (Y.if(iM._`${U} > ${N}`, () =>
        $.subschema({ keyword: z, schemaProp: N, dataProp: N }, H),
      ),
        $.ok(H));
    });
    function K(V) {
      let { opts: N, errSchemaPath: O } = G,
        w = J.length,
        B = w === V.minItems && (w === V.maxItems || V[X] === !1);
      if (N.strictTuples && !B) {
        let F = `"${z}" is ${w}-tuple, but minItems or maxItems/${X} are not specified or different at path "${O}"`;
        (0, yY.checkStrictMode)(G, F, N.strictTuples);
      }
    }
  }
  rM.validateTuple = nM;
  rM.default = su;
});
var aM = M((tM) => {
  Object.defineProperty(tM, "__esModule", { value: !0 });
  var $m = KK(),
    Xm = {
      keyword: "prefixItems",
      type: "array",
      schemaType: ["array"],
      before: "uniqueItems",
      code: ($) => (0, $m.validateTuple)($, "items"),
    };
  tM.default = Xm;
});
var $2 = M((eM) => {
  Object.defineProperty(eM, "__esModule", { value: !0 });
  var sM = a(),
    Qm = Y$(),
    Ym = v6(),
    Wm = UK(),
    zm = {
      message: ({ params: { len: $ } }) =>
        sM.str`must NOT have more than ${$} items`,
      params: ({ params: { len: $ } }) => sM._`{limit: ${$}}`,
    },
    Gm = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      error: zm,
      code($) {
        let { schema: X, parentSchema: J, it: Y } = $,
          { prefixItems: Q } = J;
        if (((Y.items = !0), (0, Qm.alwaysValidSchema)(Y, X))) return;
        if (Q) (0, Wm.validateAdditionalItems)($, Q);
        else $.ok((0, Ym.validateArray)($));
      },
    };
  eM.default = Gm;
});
var J2 = M((X2) => {
  Object.defineProperty(X2, "__esModule", { value: !0 });
  var C6 = a(),
    gY = Y$(),
    Um = {
      message: ({ params: { min: $, max: X } }) =>
        X === void 0
          ? C6.str`must contain at least ${$} valid item(s)`
          : C6.str`must contain at least ${$} and no more than ${X} valid item(s)`,
      params: ({ params: { min: $, max: X } }) =>
        X === void 0
          ? C6._`{minContains: ${$}}`
          : C6._`{minContains: ${$}, maxContains: ${X}}`,
    },
    Km = {
      keyword: "contains",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      trackErrors: !0,
      error: Um,
      code($) {
        let { gen: X, schema: J, parentSchema: Y, data: Q, it: W } = $,
          z,
          G,
          { minContains: H, maxContains: U } = Y;
        if (W.opts.next) ((z = H === void 0 ? 1 : H), (G = U));
        else z = 1;
        let K = X.const("len", C6._`${Q}.length`);
        if (($.setParams({ min: z, max: G }), G === void 0 && z === 0)) {
          (0, gY.checkStrictMode)(
            W,
            '"minContains" == 0 without "maxContains": "contains" keyword ignored',
          );
          return;
        }
        if (G !== void 0 && z > G) {
          ((0, gY.checkStrictMode)(
            W,
            '"minContains" > "maxContains" is always invalid',
          ),
            $.fail());
          return;
        }
        if ((0, gY.alwaysValidSchema)(W, J)) {
          let B = C6._`${K} >= ${z}`;
          if (G !== void 0) B = C6._`${B} && ${K} <= ${G}`;
          $.pass(B);
          return;
        }
        W.items = !0;
        let V = X.name("valid");
        if (G === void 0 && z === 1) O(V, () => X.if(V, () => X.break()));
        else if (z === 0) {
          if ((X.let(V, !0), G !== void 0)) X.if(C6._`${Q}.length > 0`, N);
        } else (X.let(V, !1), N());
        $.result(V, () => $.reset());
        function N() {
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
                dataPropType: gY.Type.Num,
                compositeRule: !0,
              },
              B,
            ),
              F());
          });
        }
        function w(B) {
          if ((X.code(C6._`${B}++`), G === void 0))
            X.if(C6._`${B} >= ${z}`, () => X.assign(V, !0).break());
          else if (
            (X.if(C6._`${B} > ${G}`, () => X.assign(V, !1).break()), z === 1)
          )
            X.assign(V, !0);
          else X.if(C6._`${B} >= ${z}`, () => X.assign(V, !0));
        }
      },
    };
  X2.default = Km;
});
var H2 = M((W2) => {
  Object.defineProperty(W2, "__esModule", { value: !0 });
  W2.validateSchemaDeps = W2.validatePropertyDeps = W2.error = void 0;
  var VK = a(),
    Nm = Y$(),
    IJ = v6();
  W2.error = {
    message: ({ params: { property: $, depsCount: X, deps: J } }) => {
      let Y = X === 1 ? "property" : "properties";
      return VK.str`must have ${Y} ${J} when property ${$} is present`;
    },
    params: ({
      params: { property: $, depsCount: X, deps: J, missingProperty: Y },
    }) => VK._`{property: ${$},
    missingProperty: ${Y},
    depsCount: ${X},
    deps: ${J}}`,
  };
  var Om = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: W2.error,
    code($) {
      let [X, J] = wm($);
      (Q2($, X), Y2($, J));
    },
  };
  function wm({ schema: $ }) {
    let X = {},
      J = {};
    for (let Y in $) {
      if (Y === "__proto__") continue;
      let Q = Array.isArray($[Y]) ? X : J;
      Q[Y] = $[Y];
    }
    return [X, J];
  }
  function Q2($, X = $.schema) {
    let { gen: J, data: Y, it: Q } = $;
    if (Object.keys(X).length === 0) return;
    let W = J.let("missing");
    for (let z in X) {
      let G = X[z];
      if (G.length === 0) continue;
      let H = (0, IJ.propertyInData)(J, Y, z, Q.opts.ownProperties);
      if (
        ($.setParams({ property: z, depsCount: G.length, deps: G.join(", ") }),
        Q.allErrors)
      )
        J.if(H, () => {
          for (let U of G) (0, IJ.checkReportMissingProp)($, U);
        });
      else
        (J.if(VK._`${H} && (${(0, IJ.checkMissingProp)($, G, W)})`),
          (0, IJ.reportMissingProp)($, W),
          J.else());
    }
  }
  W2.validatePropertyDeps = Q2;
  function Y2($, X = $.schema) {
    let { gen: J, data: Y, keyword: Q, it: W } = $,
      z = J.name("valid");
    for (let G in X) {
      if ((0, Nm.alwaysValidSchema)(W, X[G])) continue;
      (J.if(
        (0, IJ.propertyInData)(J, Y, G, W.opts.ownProperties),
        () => {
          let H = $.subschema({ keyword: Q, schemaProp: G }, z);
          $.mergeValidEvaluated(H, z);
        },
        () => J.var(z, !0),
      ),
        $.ok(z));
    }
  }
  W2.validateSchemaDeps = Y2;
  W2.default = Om;
});
var V2 = M((K2) => {
  Object.defineProperty(K2, "__esModule", { value: !0 });
  var U2 = a(),
    Dm = Y$(),
    Fm = {
      message: "property name must be valid",
      params: ({ params: $ }) => U2._`{propertyName: ${$.propertyName}}`,
    },
    jm = {
      keyword: "propertyNames",
      type: "object",
      schemaType: ["object", "boolean"],
      error: Fm,
      code($) {
        let { gen: X, schema: J, data: Y, it: Q } = $;
        if ((0, Dm.alwaysValidSchema)(Q, J)) return;
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
            X.if((0, U2.not)(W), () => {
              if (($.error(!0), !Q.allErrors)) X.break();
            }));
        }),
          $.ok(W));
      },
    };
  K2.default = jm;
});
var NK = M((N2) => {
  Object.defineProperty(N2, "__esModule", { value: !0 });
  var hY = v6(),
    o6 = a(),
    Mm = S4(),
    uY = Y$(),
    Am = {
      message: "must NOT have additional properties",
      params: ({ params: $ }) =>
        o6._`{additionalProperty: ${$.additionalProperty}}`,
    },
    Im = {
      keyword: "additionalProperties",
      type: ["object"],
      schemaType: ["boolean", "object"],
      allowUndefined: !0,
      trackErrors: !0,
      error: Am,
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
        let { allErrors: G, opts: H } = z;
        if (
          ((z.props = !0),
          H.removeAdditional !== "all" && (0, uY.alwaysValidSchema)(z, J))
        )
          return;
        let U = (0, hY.allSchemaProperties)(Y.properties),
          K = (0, hY.allSchemaProperties)(Y.patternProperties);
        (V(), $.ok(o6._`${W} === ${Mm.default.errors}`));
        function V() {
          X.forIn("key", Q, (F) => {
            if (!U.length && !K.length) w(F);
            else X.if(N(F), () => w(F));
          });
        }
        function N(F) {
          let j;
          if (U.length > 8) {
            let I = (0, uY.schemaRefOrVal)(z, Y.properties, "properties");
            j = (0, hY.isOwnProperty)(X, I, F);
          } else if (U.length)
            j = (0, o6.or)(...U.map((I) => o6._`${F} === ${I}`));
          else j = o6.nil;
          if (K.length)
            j = (0, o6.or)(
              j,
              ...K.map((I) => o6._`${(0, hY.usePattern)($, I)}.test(${F})`),
            );
          return (0, o6.not)(j);
        }
        function O(F) {
          X.code(o6._`delete ${Q}[${F}]`);
        }
        function w(F) {
          if (
            H.removeAdditional === "all" ||
            (H.removeAdditional && J === !1)
          ) {
            O(F);
            return;
          }
          if (J === !1) {
            if (($.setParams({ additionalProperty: F }), $.error(), !G))
              X.break();
            return;
          }
          if (typeof J == "object" && !(0, uY.alwaysValidSchema)(z, J)) {
            let j = X.name("valid");
            if (H.removeAdditional === "failing")
              (B(F, j, !1),
                X.if((0, o6.not)(j), () => {
                  ($.reset(), O(F));
                }));
            else if ((B(F, j), !G)) X.if((0, o6.not)(j), () => X.break());
          }
        }
        function B(F, j, I) {
          let Z = {
            keyword: "additionalProperties",
            dataProp: F,
            dataPropType: uY.Type.Str,
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
  N2.default = Im;
});
var q2 = M((B2) => {
  Object.defineProperty(B2, "__esModule", { value: !0 });
  var bm = VJ(),
    O2 = v6(),
    OK = Y$(),
    w2 = NK(),
    Rm = {
      keyword: "properties",
      type: "object",
      schemaType: "object",
      code($) {
        let { gen: X, schema: J, parentSchema: Y, data: Q, it: W } = $;
        if (
          W.opts.removeAdditional === "all" &&
          Y.additionalProperties === void 0
        )
          w2.default.code(
            new bm.KeywordCxt(W, w2.default, "additionalProperties"),
          );
        let z = (0, O2.allSchemaProperties)(J);
        for (let V of z) W.definedProperties.add(V);
        if (W.opts.unevaluated && z.length && W.props !== !0)
          W.props = OK.mergeEvaluated.props(X, (0, OK.toHash)(z), W.props);
        let G = z.filter((V) => !(0, OK.alwaysValidSchema)(W, J[V]));
        if (G.length === 0) return;
        let H = X.name("valid");
        for (let V of G) {
          if (U(V)) K(V);
          else {
            if (
              (X.if((0, O2.propertyInData)(X, Q, V, W.opts.ownProperties)),
              K(V),
              !W.allErrors)
            )
              X.else().var(H, !0);
            X.endIf();
          }
          ($.it.definedProperties.add(V), $.ok(H));
        }
        function U(V) {
          return (
            W.opts.useDefaults && !W.compositeRule && J[V].default !== void 0
          );
        }
        function K(V) {
          $.subschema({ keyword: "properties", schemaProp: V, dataProp: V }, H);
        }
      },
    };
  B2.default = Rm;
});
var M2 = M((L2) => {
  Object.defineProperty(L2, "__esModule", { value: !0 });
  var D2 = v6(),
    mY = a(),
    F2 = Y$(),
    j2 = Y$(),
    Em = {
      keyword: "patternProperties",
      type: "object",
      schemaType: "object",
      code($) {
        let { gen: X, schema: J, data: Y, parentSchema: Q, it: W } = $,
          { opts: z } = W,
          G = (0, D2.allSchemaProperties)(J),
          H = G.filter((B) => (0, F2.alwaysValidSchema)(W, J[B]));
        if (
          G.length === 0 ||
          (H.length === G.length && (!W.opts.unevaluated || W.props === !0))
        )
          return;
        let U = z.strictSchema && !z.allowMatchingProperties && Q.properties,
          K = X.name("valid");
        if (W.props !== !0 && !(W.props instanceof mY.Name))
          W.props = (0, j2.evaluatedPropsToName)(X, W.props);
        let { props: V } = W;
        N();
        function N() {
          for (let B of G) {
            if (U) O(B);
            if (W.allErrors) w(B);
            else (X.var(K, !0), w(B), X.if(K));
          }
        }
        function O(B) {
          for (let F in U)
            if (new RegExp(B).test(F))
              (0, F2.checkStrictMode)(
                W,
                `property ${F} matches pattern ${B} (use allowMatchingProperties)`,
              );
        }
        function w(B) {
          X.forIn("key", Y, (F) => {
            X.if(mY._`${(0, D2.usePattern)($, B)}.test(${F})`, () => {
              let j = H.includes(B);
              if (!j)
                $.subschema(
                  {
                    keyword: "patternProperties",
                    schemaProp: B,
                    dataProp: F,
                    dataPropType: j2.Type.Str,
                  },
                  K,
                );
              if (W.opts.unevaluated && V !== !0)
                X.assign(mY._`${V}[${F}]`, !0);
              else if (!j && !W.allErrors)
                X.if((0, mY.not)(K), () => X.break());
            });
          });
        }
      },
    };
  L2.default = Em;
});
var I2 = M((A2) => {
  Object.defineProperty(A2, "__esModule", { value: !0 });
  var vm = Y$(),
    Cm = {
      keyword: "not",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      code($) {
        let { gen: X, schema: J, it: Y } = $;
        if ((0, vm.alwaysValidSchema)(Y, J)) {
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
  A2.default = Cm;
});
var b2 = M((Z2) => {
  Object.defineProperty(Z2, "__esModule", { value: !0 });
  var _m = v6(),
    xm = {
      keyword: "anyOf",
      schemaType: "array",
      trackErrors: !0,
      code: _m.validateUnion,
      error: { message: "must match a schema in anyOf" },
    };
  Z2.default = xm;
});
var P2 = M((R2) => {
  Object.defineProperty(R2, "__esModule", { value: !0 });
  var lY = a(),
    fm = Y$(),
    ym = {
      message: "must match exactly one schema in oneOf",
      params: ({ params: $ }) => lY._`{passingSchemas: ${$.passing}}`,
    },
    gm = {
      keyword: "oneOf",
      schemaType: "array",
      trackErrors: !0,
      error: ym,
      code($) {
        let { gen: X, schema: J, parentSchema: Y, it: Q } = $;
        if (!Array.isArray(J)) throw Error("ajv implementation error");
        if (Q.opts.discriminator && Y.discriminator) return;
        let W = J,
          z = X.let("valid", !1),
          G = X.let("passing", null),
          H = X.name("_valid");
        ($.setParams({ passing: G }),
          X.block(U),
          $.result(
            z,
            () => $.reset(),
            () => $.error(!0),
          ));
        function U() {
          W.forEach((K, V) => {
            let N;
            if ((0, fm.alwaysValidSchema)(Q, K)) X.var(H, !0);
            else
              N = $.subschema(
                { keyword: "oneOf", schemaProp: V, compositeRule: !0 },
                H,
              );
            if (V > 0)
              X.if(lY._`${H} && ${z}`)
                .assign(z, !1)
                .assign(G, lY._`[${G}, ${V}]`)
                .else();
            X.if(H, () => {
              if ((X.assign(z, !0), X.assign(G, V), N))
                $.mergeEvaluated(N, lY.Name);
            });
          });
        }
      },
    };
  R2.default = gm;
});
var S2 = M((E2) => {
  Object.defineProperty(E2, "__esModule", { value: !0 });
  var um = Y$(),
    mm = {
      keyword: "allOf",
      schemaType: "array",
      code($) {
        let { gen: X, schema: J, it: Y } = $;
        if (!Array.isArray(J)) throw Error("ajv implementation error");
        let Q = X.name("valid");
        J.forEach((W, z) => {
          if ((0, um.alwaysValidSchema)(Y, W)) return;
          let G = $.subschema({ keyword: "allOf", schemaProp: z }, Q);
          ($.ok(Q), $.mergeEvaluated(G));
        });
      },
    };
  E2.default = mm;
});
var _2 = M((k2) => {
  Object.defineProperty(k2, "__esModule", { value: !0 });
  var cY = a(),
    C2 = Y$(),
    cm = {
      message: ({ params: $ }) => cY.str`must match "${$.ifClause}" schema`,
      params: ({ params: $ }) => cY._`{failingKeyword: ${$.ifClause}}`,
    },
    dm = {
      keyword: "if",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      error: cm,
      code($) {
        let { gen: X, parentSchema: J, it: Y } = $;
        if (J.then === void 0 && J.else === void 0)
          (0, C2.checkStrictMode)(
            Y,
            '"if" without "then" and "else" is ignored',
          );
        let Q = v2(Y, "then"),
          W = v2(Y, "else");
        if (!Q && !W) return;
        let z = X.let("valid", !0),
          G = X.name("_valid");
        if ((H(), $.reset(), Q && W)) {
          let K = X.let("ifClause");
          ($.setParams({ ifClause: K }), X.if(G, U("then", K), U("else", K)));
        } else if (Q) X.if(G, U("then"));
        else X.if((0, cY.not)(G), U("else"));
        $.pass(z, () => $.error(!0));
        function H() {
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
        function U(K, V) {
          return () => {
            let N = $.subschema({ keyword: K }, G);
            if ((X.assign(z, G), $.mergeValidEvaluated(N, z), V))
              X.assign(V, cY._`${K}`);
            else $.setParams({ ifClause: K });
          };
        }
      },
    };
  function v2($, X) {
    let J = $.schema[X];
    return J !== void 0 && !(0, C2.alwaysValidSchema)($, J);
  }
  k2.default = dm;
});
var T2 = M((x2) => {
  Object.defineProperty(x2, "__esModule", { value: !0 });
  var im = Y$(),
    nm = {
      keyword: ["then", "else"],
      schemaType: ["object", "boolean"],
      code({ keyword: $, parentSchema: X, it: J }) {
        if (X.if === void 0)
          (0, im.checkStrictMode)(J, `"${$}" without "if" is ignored`);
      },
    };
  x2.default = nm;
});
var y2 = M((f2) => {
  Object.defineProperty(f2, "__esModule", { value: !0 });
  var om = UK(),
    tm = aM(),
    am = KK(),
    sm = $2(),
    em = J2(),
    $l = H2(),
    Xl = V2(),
    Jl = NK(),
    Ql = q2(),
    Yl = M2(),
    Wl = I2(),
    zl = b2(),
    Gl = P2(),
    Hl = S2(),
    Ul = _2(),
    Kl = T2();
  function Vl($ = !1) {
    let X = [
      Wl.default,
      zl.default,
      Gl.default,
      Hl.default,
      Ul.default,
      Kl.default,
      Xl.default,
      Jl.default,
      $l.default,
      Ql.default,
      Yl.default,
    ];
    if ($) X.push(tm.default, sm.default);
    else X.push(om.default, am.default);
    return (X.push(em.default), X);
  }
  f2.default = Vl;
});
var h2 = M((g2) => {
  Object.defineProperty(g2, "__esModule", { value: !0 });
  var C$ = a(),
    Ol = {
      message: ({ schemaCode: $ }) => C$.str`must match format "${$}"`,
      params: ({ schemaCode: $ }) => C$._`{format: ${$}}`,
    },
    wl = {
      keyword: "format",
      type: ["number", "string"],
      schemaType: "string",
      $data: !0,
      error: Ol,
      code($, X) {
        let { gen: J, data: Y, $data: Q, schema: W, schemaCode: z, it: G } = $,
          { opts: H, errSchemaPath: U, schemaEnv: K, self: V } = G;
        if (!H.validateFormats) return;
        if (Q) N();
        else O();
        function N() {
          let w = J.scopeValue("formats", {
              ref: V.formats,
              code: H.code.formats,
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
            if (H.strictSchema === !1) return C$.nil;
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
          let w = V.formats[W];
          if (!w) {
            I();
            return;
          }
          if (w === !0) return;
          let [B, F, j] = Z(w);
          if (B === X) $.pass(_());
          function I() {
            if (H.strictSchema === !1) {
              V.logger.warn(T());
              return;
            }
            throw Error(T());
            function T() {
              return `unknown format "${W}" ignored in schema at path "${U}"`;
            }
          }
          function Z(T) {
            let O$ =
                T instanceof RegExp
                  ? (0, C$.regexpCode)(T)
                  : H.code.formats
                    ? C$._`${H.code.formats}${(0, C$.getProperty)(W)}`
                    : void 0,
              x$ = J.scopeValue("formats", { key: W, ref: T, code: O$ });
            if (typeof T == "object" && !(T instanceof RegExp))
              return [T.type || "string", T.validate, C$._`${x$}.validate`];
            return ["string", T, x$];
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
  g2.default = wl;
});
var m2 = M((u2) => {
  Object.defineProperty(u2, "__esModule", { value: !0 });
  var ql = h2(),
    Dl = [ql.default];
  u2.default = Dl;
});
var d2 = M((l2) => {
  Object.defineProperty(l2, "__esModule", { value: !0 });
  l2.contentVocabulary = l2.metadataVocabulary = void 0;
  l2.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples",
  ];
  l2.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema",
  ];
});
var n2 = M((i2) => {
  Object.defineProperty(i2, "__esModule", { value: !0 });
  var Ll = BM(),
    Ml = lM(),
    Al = y2(),
    Il = m2(),
    p2 = d2(),
    Zl = [
      Ll.default,
      Ml.default,
      (0, Al.default)(),
      Il.default,
      p2.metadataVocabulary,
      p2.contentVocabulary,
    ];
  i2.default = Zl;
});
var a2 = M((o2) => {
  Object.defineProperty(o2, "__esModule", { value: !0 });
  o2.DiscrError = void 0;
  var r2;
  (function ($) {
    (($.Tag = "tag"), ($.Mapping = "mapping"));
  })(r2 || (o2.DiscrError = r2 = {}));
});
var $A = M((e2) => {
  Object.defineProperty(e2, "__esModule", { value: !0 });
  var q8 = a(),
    wK = a2(),
    s2 = RY(),
    Rl = NJ(),
    Pl = Y$(),
    El = {
      message: ({ params: { discrError: $, tagName: X } }) =>
        $ === wK.DiscrError.Tag
          ? `tag "${X}" must be string`
          : `value of tag "${X}" must be in oneOf`,
      params: ({ params: { discrError: $, tag: X, tagName: J } }) =>
        q8._`{error: ${$}, tag: ${J}, tagValue: ${X}}`,
    },
    Sl = {
      keyword: "discriminator",
      type: "object",
      schemaType: "object",
      error: El,
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
        let H = X.let("valid", !1),
          U = X.const("tag", q8._`${J}${(0, q8.getProperty)(G)}`);
        (X.if(
          q8._`typeof ${U} == "string"`,
          () => K(),
          () =>
            $.error(!1, { discrError: wK.DiscrError.Tag, tag: U, tagName: G }),
        ),
          $.ok(H));
        function K() {
          let O = N();
          X.if(!1);
          for (let w in O)
            (X.elseIf(q8._`${U} === ${w}`), X.assign(H, V(O[w])));
          (X.else(),
            $.error(!1, {
              discrError: wK.DiscrError.Mapping,
              tag: U,
              tagName: G,
            }),
            X.endIf());
        }
        function V(O) {
          let w = X.name("valid"),
            B = $.subschema({ keyword: "oneOf", schemaProp: O }, w);
          return ($.mergeEvaluated(B, q8.Name), w);
        }
        function N() {
          var O;
          let w = {},
            B = j(Q),
            F = !0;
          for (let _ = 0; _ < z.length; _++) {
            let T = z[_];
            if (
              (T === null || T === void 0 ? void 0 : T.$ref) &&
              !(0, Pl.schemaHasRulesButRef)(T, W.self.RULES)
            ) {
              let x$ = T.$ref;
              if (
                ((T = s2.resolveRef.call(
                  W.self,
                  W.schemaEnv.root,
                  W.baseId,
                  x$,
                )),
                T instanceof s2.SchemaEnv)
              )
                T = T.schema;
              if (T === void 0)
                throw new Rl.default(W.opts.uriResolver, W.baseId, x$);
            }
            let O$ =
              (O = T === null || T === void 0 ? void 0 : T.properties) ===
                null || O === void 0
                ? void 0
                : O[G];
            if (typeof O$ != "object")
              throw Error(
                `discriminator: oneOf subschemas (or referenced schemas) must have "properties/${G}"`,
              );
            ((F = F && (B || j(T))), I(O$, _));
          }
          if (!F) throw Error(`discriminator: "${G}" must be required`);
          return w;
          function j({ required: _ }) {
            return Array.isArray(_) && _.includes(G);
          }
          function I(_, T) {
            if (_.const) Z(_.const, T);
            else if (_.enum) for (let O$ of _.enum) Z(O$, T);
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
  e2.default = Sl;
});
var XA = M((UJ$, Cl) => {
  Cl.exports = {
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
var qK = M((N6, BK) => {
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
  var kl = WM(),
    _l = n2(),
    xl = $A(),
    JA = XA(),
    Tl = ["/properties"],
    dY = "http://json-schema.org/draft-07/schema";
  class ZJ extends kl.default {
    _addVocabularies() {
      if (
        (super._addVocabularies(),
        _l.default.forEach(($) => this.addVocabulary($)),
        this.opts.discriminator)
      )
        this.addKeyword(xl.default);
    }
    _addDefaultMetaSchema() {
      if ((super._addDefaultMetaSchema(), !this.opts.meta)) return;
      let $ = this.opts.$data ? this.$dataMetaSchema(JA, Tl) : JA;
      (this.addMetaSchema($, dY, !1),
        (this.refs["http://json-schema.org/schema"] = dY));
    }
    defaultMeta() {
      return (this.opts.defaultMeta =
        super.defaultMeta() || (this.getSchema(dY) ? dY : void 0));
    }
  }
  N6.Ajv = ZJ;
  BK.exports = N6 = ZJ;
  BK.exports.Ajv = ZJ;
  Object.defineProperty(N6, "__esModule", { value: !0 });
  N6.default = ZJ;
  var fl = VJ();
  Object.defineProperty(N6, "KeywordCxt", {
    enumerable: !0,
    get: function () {
      return fl.KeywordCxt;
    },
  });
  var D8 = a();
  Object.defineProperty(N6, "_", {
    enumerable: !0,
    get: function () {
      return D8._;
    },
  });
  Object.defineProperty(N6, "str", {
    enumerable: !0,
    get: function () {
      return D8.str;
    },
  });
  Object.defineProperty(N6, "stringify", {
    enumerable: !0,
    get: function () {
      return D8.stringify;
    },
  });
  Object.defineProperty(N6, "nil", {
    enumerable: !0,
    get: function () {
      return D8.nil;
    },
  });
  Object.defineProperty(N6, "Name", {
    enumerable: !0,
    get: function () {
      return D8.Name;
    },
  });
  Object.defineProperty(N6, "CodeGen", {
    enumerable: !0,
    get: function () {
      return D8.CodeGen;
    },
  });
  var yl = ZY();
  Object.defineProperty(N6, "ValidationError", {
    enumerable: !0,
    get: function () {
      return yl.default;
    },
  });
  var gl = NJ();
  Object.defineProperty(N6, "MissingRefError", {
    enumerable: !0,
    get: function () {
      return gl.default;
    },
  });
});
var NA = M((KA) => {
  Object.defineProperty(KA, "__esModule", { value: !0 });
  KA.formatNames = KA.fastFormats = KA.fullFormats = void 0;
  function Y4($, X) {
    return { validate: $, compare: X };
  }
  KA.fullFormats = {
    date: Y4(zA, LK),
    time: Y4(FK(!0), MK),
    "date-time": Y4(QA(!0), HA),
    "iso-time": Y4(FK(), GA),
    "iso-date-time": Y4(QA(), UA),
    duration:
      /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
    uri: il,
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
    regex: el,
    uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
    "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
    "json-pointer-uri-fragment":
      /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
    "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
    byte: nl,
    int32: { type: "number", validate: tl },
    int64: { type: "number", validate: al },
    float: { type: "number", validate: WA },
    double: { type: "number", validate: WA },
    password: !0,
    binary: !0,
  };
  KA.fastFormats = {
    ...KA.fullFormats,
    date: Y4(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, LK),
    time: Y4(
      /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
      MK,
    ),
    "date-time": Y4(
      /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
      HA,
    ),
    "iso-time": Y4(
      /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
      GA,
    ),
    "iso-date-time": Y4(
      /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
      UA,
    ),
    uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
    "uri-reference":
      /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    email:
      /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  };
  KA.formatNames = Object.keys(KA.fullFormats);
  function ml($) {
    return $ % 4 === 0 && ($ % 100 !== 0 || $ % 400 === 0);
  }
  var ll = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
    cl = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function zA($) {
    let X = ll.exec($);
    if (!X) return !1;
    let J = +X[1],
      Y = +X[2],
      Q = +X[3];
    return Y >= 1 && Y <= 12 && Q >= 1 && Q <= (Y === 2 && ml(J) ? 29 : cl[Y]);
  }
  function LK($, X) {
    if (!($ && X)) return;
    if ($ > X) return 1;
    if ($ < X) return -1;
    return 0;
  }
  var DK = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
  function FK($) {
    return function (J) {
      let Y = DK.exec(J);
      if (!Y) return !1;
      let Q = +Y[1],
        W = +Y[2],
        z = +Y[3],
        G = Y[4],
        H = Y[5] === "-" ? -1 : 1,
        U = +(Y[6] || 0),
        K = +(Y[7] || 0);
      if (U > 23 || K > 59 || ($ && !G)) return !1;
      if (Q <= 23 && W <= 59 && z < 60) return !0;
      let V = W - K * H,
        N = Q - U * H - (V < 0 ? 1 : 0);
      return (N === 23 || N === -1) && (V === 59 || V === -1) && z < 61;
    };
  }
  function MK($, X) {
    if (!($ && X)) return;
    let J = new Date("2020-01-01T" + $).valueOf(),
      Y = new Date("2020-01-01T" + X).valueOf();
    if (!(J && Y)) return;
    return J - Y;
  }
  function GA($, X) {
    if (!($ && X)) return;
    let J = DK.exec($),
      Y = DK.exec(X);
    if (!(J && Y)) return;
    if ((($ = J[1] + J[2] + J[3]), (X = Y[1] + Y[2] + Y[3]), $ > X)) return 1;
    if ($ < X) return -1;
    return 0;
  }
  var jK = /t|\s/i;
  function QA($) {
    let X = FK($);
    return function (Y) {
      let Q = Y.split(jK);
      return Q.length === 2 && zA(Q[0]) && X(Q[1]);
    };
  }
  function HA($, X) {
    if (!($ && X)) return;
    let J = new Date($).valueOf(),
      Y = new Date(X).valueOf();
    if (!(J && Y)) return;
    return J - Y;
  }
  function UA($, X) {
    if (!($ && X)) return;
    let [J, Y] = $.split(jK),
      [Q, W] = X.split(jK),
      z = LK(J, Q);
    if (z === void 0) return;
    return z || MK(Y, W);
  }
  var dl = /\/|:/,
    pl =
      /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function il($) {
    return dl.test($) && pl.test($);
  }
  var YA = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function nl($) {
    return ((YA.lastIndex = 0), YA.test($));
  }
  var rl = -2147483648,
    ol = 2147483647;
  function tl($) {
    return Number.isInteger($) && $ <= ol && $ >= rl;
  }
  function al($) {
    return Number.isInteger($);
  }
  function WA() {
    return !0;
  }
  var sl = /[^\\]\\Z/;
  function el($) {
    if (sl.test($)) return !1;
    try {
      return (new RegExp($), !0);
    } catch (X) {
      return !1;
    }
  }
});
var wA = M((OA) => {
  Object.defineProperty(OA, "__esModule", { value: !0 });
  OA.formatLimitDefinition = void 0;
  var Xc = qK(),
    t6 = a(),
    w1 = t6.operators,
    pY = {
      formatMaximum: { okStr: "<=", ok: w1.LTE, fail: w1.GT },
      formatMinimum: { okStr: ">=", ok: w1.GTE, fail: w1.LT },
      formatExclusiveMaximum: { okStr: "<", ok: w1.LT, fail: w1.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: w1.GT, fail: w1.LTE },
    },
    Jc = {
      message: ({ keyword: $, schemaCode: X }) =>
        t6.str`should be ${pY[$].okStr} ${X}`,
      params: ({ keyword: $, schemaCode: X }) =>
        t6._`{comparison: ${pY[$].okStr}, limit: ${X}}`,
    };
  OA.formatLimitDefinition = {
    keyword: Object.keys(pY),
    type: "string",
    schemaType: "string",
    $data: !0,
    error: Jc,
    code($) {
      let { gen: X, data: J, schemaCode: Y, keyword: Q, it: W } = $,
        { opts: z, self: G } = W;
      if (!z.validateFormats) return;
      let H = new Xc.KeywordCxt(W, G.RULES.all.format.definition, "format");
      if (H.$data) U();
      else K();
      function U() {
        let N = X.scopeValue("formats", {
            ref: G.formats,
            code: z.code.formats,
          }),
          O = X.const("fmt", t6._`${N}[${H.schemaCode}]`);
        $.fail$data(
          (0, t6.or)(
            t6._`typeof ${O} != "object"`,
            t6._`${O} instanceof RegExp`,
            t6._`typeof ${O}.compare != "function"`,
            V(O),
          ),
        );
      }
      function K() {
        let N = H.schema,
          O = G.formats[N];
        if (!O || O === !0) return;
        if (
          typeof O != "object" ||
          O instanceof RegExp ||
          typeof O.compare != "function"
        )
          throw Error(
            `"${Q}": format "${N}" does not define "compare" function`,
          );
        let w = X.scopeValue("formats", {
          key: N,
          ref: O,
          code: z.code.formats
            ? t6._`${z.code.formats}${(0, t6.getProperty)(N)}`
            : void 0,
        });
        $.fail$data(V(w));
      }
      function V(N) {
        return t6._`${N}.compare(${J}, ${Y}) ${pY[Q].fail} 0`;
      }
    },
    dependencies: ["format"],
  };
  var Qc = ($) => {
    return ($.addKeyword(OA.formatLimitDefinition), $);
  };
  OA.default = Qc;
});
var FA = M((bJ, DA) => {
  Object.defineProperty(bJ, "__esModule", { value: !0 });
  var F8 = NA(),
    Wc = wA(),
    ZK = a(),
    BA = new ZK.Name("fullFormats"),
    zc = new ZK.Name("fastFormats"),
    bK = ($, X = { keywords: !0 }) => {
      if (Array.isArray(X)) return (qA($, X, F8.fullFormats, BA), $);
      let [J, Y] =
          X.mode === "fast" ? [F8.fastFormats, zc] : [F8.fullFormats, BA],
        Q = X.formats || F8.formatNames;
      if ((qA($, Q, J, Y), X.keywords)) (0, Wc.default)($);
      return $;
    };
  bK.get = ($, X = "full") => {
    let Y = (X === "fast" ? F8.fastFormats : F8.fullFormats)[$];
    if (!Y) throw Error(`Unknown format "${$}"`);
    return Y;
  };
  function qA($, X, J, Y) {
    var Q, W;
    ((Q = (W = $.opts.code).formats) !== null && Q !== void 0) ||
      (W.formats = ZK._`require("ajv-formats/dist/formats").${Y}`);
    for (let z of X) $.addFormat(z, J[z]);
  }
  DA.exports = bJ = bK;
  Object.defineProperty(bJ, "__esModule", { value: !0 });
  bJ.default = bK;
});
import { execFile as jc } from "child_process";
import { randomUUID as gK } from "crypto";
import { createReadStream as Lc, realpathSync as Mc } from "fs";
import {
  copyFile as Ac,
  mkdir as xK,
  readdir as Ic,
  readFile as hA,
  rm as Zc,
  writeFile as uA,
} from "fs/promises";
import { createRequire as bc } from "module";
import { homedir as TK, tmpdir as Rc } from "os";
import {
  dirname as xA,
  isAbsolute as mA,
  join as A6,
  relative as lA,
  resolve as PJ,
  sep as hK,
} from "path";
import { createInterface as Pc } from "readline";
import { fileURLToPath as Ec } from "url";
import { setMaxListeners as LI } from "events";
var MI = 50;
function Q0($ = MI) {
  let X = new AbortController();
  return (LI($, X.signal), X);
}
function vJ($, X, J) {
  return new Promise((Y, Q) => {
    if (X?.aborted) {
      if (J?.throwOnAbort || J?.abortError)
        Q(J.abortError?.() ?? Error("aborted"));
      else Y();
      return;
    }
    let W = setTimeout(
      (G, H, U) => {
        (G?.removeEventListener("abort", H), U());
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
function AI($, X) {
  $(Error(X));
}
function H4($, X, J) {
  let Y,
    Q = new Promise((W, z) => {
      if (((Y = setTimeout(AI, X, z, J)), typeof Y === "object")) Y.unref?.();
    });
  return Promise.race([$, Q]).finally(() => {
    if (Y !== void 0) clearTimeout(Y);
  });
}
import { spawn as qR } from "child_process";
import { createInterface as DR } from "readline";
var II = [
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
  ZI = [
    "clear",
    "resume",
    "logout",
    "prompt_input_exit",
    "other",
    "bypass_permissions_disabled",
  ],
  bI = "__SYSTEM_PROMPT_DYNAMIC_BOUNDARY__";
var RI = /^(?:\s*<[a-z][\w-]*[\s>]|\[Request interrupted by user[^\]]*\])/,
  PI = /<command-name>(.*?)<\/command-name>/;
function R8($, X) {
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
    let G = PI.exec(z);
    if (G) {
      if (!X.commandFallback) X.commandFallback = G[1];
      continue;
    }
    let H = /<bash-input>([\s\S]*?)<\/bash-input>/.exec(z);
    if (H) return `! ${H[1].trim()}`;
    if (RI.test(z)) continue;
    if (z.length > 200) z = z.slice(0, 200).trim() + "…";
    return z;
  }
  return;
}
var EI = {
  customTitle: "customTitle",
  aiTitle: "aiTitle",
  lastPrompt: "lastPrompt",
  summary: "summaryHint",
  gitBranch: "gitBranch",
};
function CJ($, X, J, Y) {
  let Q = Y?.mtime ?? $?.mtime ?? 0,
    W =
      $ !== void 0
        ? { sessionId: $.sessionId, mtime: Q, data: { ...$.data } }
        : { sessionId: X.sessionId, mtime: Q, data: {} },
    z = W.data;
  for (let G of J) {
    let H = vI(G.timestamp);
    if (z.isSidechain === void 0) z.isSidechain = G.isSidechain === !0;
    if (z.createdAt === void 0 && H !== void 0) z.createdAt = H;
    if (z.cwd === void 0) {
      let U = G.cwd;
      if (typeof U === "string" && U) z.cwd = U;
    }
    CI(z, G);
    for (let [U, K] of Object.entries(EI)) {
      let V = G[U];
      if (typeof V === "string") z[K] = V;
    }
    if (G.type === "tag") {
      let U = G.tag;
      if (typeof U === "string" && U) z.tag = U;
      else delete z.tag;
    }
  }
  return W;
}
function tK($, X) {
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
    createdAt: SI(J.createdAt),
  };
}
function x4($) {
  return typeof $ === "string" ? $ : void 0;
}
function SI($) {
  return typeof $ === "number" ? $ : void 0;
}
function vI($) {
  if (typeof $ !== "string") return;
  let X = Date.parse($);
  return Number.isNaN(X) ? void 0 : X;
}
function CI($, X) {
  if ($.firstPromptLocked) return;
  let J = { commandFallback: $.commandFallback ?? "" },
    Y = R8(X, J);
  if (J.commandFallback && !$.commandFallback)
    $.commandFallback = J.commandFallback;
  if (Y !== void 0) (($.firstPrompt = Y), ($.firstPromptLocked = !0));
}
class eY {
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
        z = CJ(this.summaries.get(W), $, X, { mtime: Q });
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
class X6 extends Error {}
function Y0() {
  return process.versions.bun !== void 0;
}
function J6($) {
  if (!$) return !1;
  if (typeof $ === "boolean") return $;
  let X = String($).toLowerCase().trim();
  return ["1", "true", "yes", "on"].includes(X);
}
function W0() {
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
var _I =
    typeof global == "object" && global && global.Object === Object && global,
  aK = _I;
var xI = typeof self == "object" && self && self.Object === Object && self,
  TI = aK || xI || Function("return this")(),
  z0 = TI;
var fI = z0.Symbol,
  G0 = fI;
var sK = Object.prototype,
  yI = sK.hasOwnProperty,
  gI = sK.toString,
  P8 = G0 ? G0.toStringTag : void 0;
function hI($) {
  var X = yI.call($, P8),
    J = $[P8];
  try {
    $[P8] = void 0;
    var Y = !0;
  } catch (W) {}
  var Q = gI.call($);
  if (Y)
    if (X) $[P8] = J;
    else delete $[P8];
  return Q;
}
var eK = hI;
var uI = Object.prototype,
  mI = uI.toString;
function lI($) {
  return mI.call($);
}
var $V = lI;
var cI = "[object Null]",
  dI = "[object Undefined]",
  XV = G0 ? G0.toStringTag : void 0;
function pI($) {
  if ($ == null) return $ === void 0 ? dI : cI;
  return XV && XV in Object($) ? eK($) : $V($);
}
var JV = pI;
function iI($) {
  var X = typeof $;
  return $ != null && (X == "object" || X == "function");
}
var kJ = iI;
var nI = "[object AsyncFunction]",
  rI = "[object Function]",
  oI = "[object GeneratorFunction]",
  tI = "[object Proxy]";
function aI($) {
  if (!kJ($)) return !1;
  var X = JV($);
  return X == rI || X == oI || X == nI || X == tI;
}
var QV = aI;
var sI = z0["__core-js_shared__"],
  _J = sI;
var YV = (function () {
  var $ = /[^.]+$/.exec((_J && _J.keys && _J.keys.IE_PROTO) || "");
  return $ ? "Symbol(src)_1." + $ : "";
})();
function eI($) {
  return !!YV && YV in $;
}
var WV = eI;
var $Z = Function.prototype,
  XZ = $Z.toString;
function JZ($) {
  if ($ != null) {
    try {
      return XZ.call($);
    } catch (X) {}
    try {
      return $ + "";
    } catch (X) {}
  }
  return "";
}
var zV = JZ;
var QZ = /[\\^$.*+?()[\]{}|]/g,
  YZ = /^\[object .+?Constructor\]$/,
  WZ = Function.prototype,
  zZ = Object.prototype,
  GZ = WZ.toString,
  HZ = zZ.hasOwnProperty,
  UZ = RegExp(
    "^" +
      GZ.call(HZ)
        .replace(QZ, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?",
        ) +
      "$",
  );
function KZ($) {
  if (!kJ($) || WV($)) return !1;
  var X = QV($) ? UZ : YZ;
  return X.test(zV($));
}
var GV = KZ;
function VZ($, X) {
  return $ == null ? void 0 : $[X];
}
var HV = VZ;
function NZ($, X) {
  var J = HV($, X);
  return GV(J) ? J : void 0;
}
var xJ = NZ;
var OZ = xJ(Object, "create"),
  U4 = OZ;
function wZ() {
  ((this.__data__ = U4 ? U4(null) : {}), (this.size = 0));
}
var UV = wZ;
function BZ($) {
  var X = this.has($) && delete this.__data__[$];
  return ((this.size -= X ? 1 : 0), X);
}
var KV = BZ;
var qZ = "__lodash_hash_undefined__",
  DZ = Object.prototype,
  FZ = DZ.hasOwnProperty;
function jZ($) {
  var X = this.__data__;
  if (U4) {
    var J = X[$];
    return J === qZ ? void 0 : J;
  }
  return FZ.call(X, $) ? X[$] : void 0;
}
var VV = jZ;
var LZ = Object.prototype,
  MZ = LZ.hasOwnProperty;
function AZ($) {
  var X = this.__data__;
  return U4 ? X[$] !== void 0 : MZ.call(X, $);
}
var NV = AZ;
var IZ = "__lodash_hash_undefined__";
function ZZ($, X) {
  var J = this.__data__;
  return (
    (this.size += this.has($) ? 0 : 1),
    (J[$] = U4 && X === void 0 ? IZ : X),
    this
  );
}
var OV = ZZ;
function H0($) {
  var X = -1,
    J = $ == null ? 0 : $.length;
  this.clear();
  while (++X < J) {
    var Y = $[X];
    this.set(Y[0], Y[1]);
  }
}
H0.prototype.clear = UV;
H0.prototype.delete = KV;
H0.prototype.get = VV;
H0.prototype.has = NV;
H0.prototype.set = OV;
var $W = H0;
function bZ() {
  ((this.__data__ = []), (this.size = 0));
}
var wV = bZ;
function RZ($, X) {
  return $ === X || ($ !== $ && X !== X);
}
var BV = RZ;
function PZ($, X) {
  var J = $.length;
  while (J--) if (BV($[J][0], X)) return J;
  return -1;
}
var T4 = PZ;
var EZ = Array.prototype,
  SZ = EZ.splice;
function vZ($) {
  var X = this.__data__,
    J = T4(X, $);
  if (J < 0) return !1;
  var Y = X.length - 1;
  if (J == Y) X.pop();
  else SZ.call(X, J, 1);
  return (--this.size, !0);
}
var qV = vZ;
function CZ($) {
  var X = this.__data__,
    J = T4(X, $);
  return J < 0 ? void 0 : X[J][1];
}
var DV = CZ;
function kZ($) {
  return T4(this.__data__, $) > -1;
}
var FV = kZ;
function _Z($, X) {
  var J = this.__data__,
    Y = T4(J, $);
  if (Y < 0) (++this.size, J.push([$, X]));
  else J[Y][1] = X;
  return this;
}
var jV = _Z;
function U0($) {
  var X = -1,
    J = $ == null ? 0 : $.length;
  this.clear();
  while (++X < J) {
    var Y = $[X];
    this.set(Y[0], Y[1]);
  }
}
U0.prototype.clear = wV;
U0.prototype.delete = qV;
U0.prototype.get = DV;
U0.prototype.has = FV;
U0.prototype.set = jV;
var LV = U0;
var xZ = xJ(z0, "Map"),
  MV = xZ;
function TZ() {
  ((this.size = 0),
    (this.__data__ = {
      hash: new $W(),
      map: new (MV || LV)(),
      string: new $W(),
    }));
}
var AV = TZ;
function fZ($) {
  var X = typeof $;
  return X == "string" || X == "number" || X == "symbol" || X == "boolean"
    ? $ !== "__proto__"
    : $ === null;
}
var IV = fZ;
function yZ($, X) {
  var J = $.__data__;
  return IV(X) ? J[typeof X == "string" ? "string" : "hash"] : J.map;
}
var f4 = yZ;
function gZ($) {
  var X = f4(this, $).delete($);
  return ((this.size -= X ? 1 : 0), X);
}
var ZV = gZ;
function hZ($) {
  return f4(this, $).get($);
}
var bV = hZ;
function uZ($) {
  return f4(this, $).has($);
}
var RV = uZ;
function mZ($, X) {
  var J = f4(this, $),
    Y = J.size;
  return (J.set($, X), (this.size += J.size == Y ? 0 : 1), this);
}
var PV = mZ;
function K0($) {
  var X = -1,
    J = $ == null ? 0 : $.length;
  this.clear();
  while (++X < J) {
    var Y = $[X];
    this.set(Y[0], Y[1]);
  }
}
K0.prototype.clear = AV;
K0.prototype.delete = ZV;
K0.prototype.get = bV;
K0.prototype.has = RV;
K0.prototype.set = PV;
var XW = K0;
var lZ = "Expected a function";
function JW($, X) {
  if (typeof $ != "function" || (X != null && typeof X != "function"))
    throw TypeError(lZ);
  var J = function () {
    var Y = arguments,
      Q = X ? X.apply(this, Y) : Y[0],
      W = J.cache;
    if (W.has(Q)) return W.get(Q);
    var z = $.apply(this, Y);
    return ((J.cache = W.set(Q, z) || W), z);
  };
  return ((J.cache = new (JW.Cache || XW)()), J);
}
JW.Cache = XW;
var f6 = JW;
import { homedir as cZ } from "os";
import { join as dZ } from "path";
var y4 = f6(
  () => {
    return (process.env.CLAUDE_CONFIG_DIR ?? dZ(cZ(), ".claude")).normalize(
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
var QW = function () {
  let { crypto: $ } = globalThis;
  if ($?.randomUUID) return ((QW = $.randomUUID.bind($)), $.randomUUID());
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
var E8 = ($) => {
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
class T$ extends f {
  constructor($, X, J, Y, Q) {
    super(`${T$.makeMessage($, X, J)}`);
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
    if (!$ || !Y) return new F1({ message: J, cause: E8(X) });
    let Q = X,
      W = Q?.error?.type;
    if ($ === 400) return new v8($, Q, J, Y, W);
    if ($ === 401) return new C8($, Q, J, Y, W);
    if ($ === 403) return new k8($, Q, J, Y, W);
    if ($ === 404) return new _8($, Q, J, Y, W);
    if ($ === 409) return new x8($, Q, J, Y, W);
    if ($ === 422) return new T8($, Q, J, Y, W);
    if ($ === 429) return new f8($, Q, J, Y, W);
    if ($ >= 500) return new y8($, Q, J, Y, W);
    return new T$($, Q, J, Y, W);
  }
}
class m$ extends T$ {
  constructor({ message: $ } = {}) {
    super(void 0, void 0, $ || "Request was aborted.", void 0);
  }
}
class F1 extends T$ {
  constructor({ message: $, cause: X }) {
    super(void 0, void 0, $ || "Connection error.", void 0);
    if (X) this.cause = X;
  }
}
class S8 extends F1 {
  constructor({ message: $ } = {}) {
    super({ message: $ ?? "Request timed out." });
  }
}
class v8 extends T$ {}
class C8 extends T$ {}
class k8 extends T$ {}
class _8 extends T$ {}
class x8 extends T$ {}
class T8 extends T$ {}
class f8 extends T$ {}
class y8 extends T$ {}
var iZ = /^[a-z][a-z0-9+.-]*:/i,
  EV = ($) => {
    return iZ.test($);
  },
  YW = ($) => ((YW = Array.isArray), YW($)),
  WW = YW;
function TJ($) {
  if (typeof $ !== "object") return {};
  return $ ?? {};
}
function zW($) {
  if (!$) return !0;
  for (let X in $) return !1;
  return !0;
}
function SV($, X) {
  return Object.prototype.hasOwnProperty.call($, X);
}
var vV = ($, X) => {
  if (typeof X !== "number" || !Number.isInteger(X))
    throw new f(`${$} must be an integer`);
  if (X < 0) throw new f(`${$} must be a positive integer`);
  return X;
};
var fJ = ($) => {
  try {
    return JSON.parse($);
  } catch (X) {
    return;
  }
};
var CV = ($) => new Promise((X) => setTimeout(X, $));
var g4 = "0.81.0";
var TV = () => {
  return (
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof navigator < "u"
  );
};
function nZ() {
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
var rZ = () => {
  let $ = nZ();
  if ($ === "deno")
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": g4,
      "X-Stainless-OS": _V(Deno.build.os),
      "X-Stainless-Arch": kV(Deno.build.arch),
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
      "X-Stainless-OS": _V(globalThis.process.platform ?? "unknown"),
      "X-Stainless-Arch": kV(globalThis.process.arch ?? "unknown"),
      "X-Stainless-Runtime": "node",
      "X-Stainless-Runtime-Version": globalThis.process.version ?? "unknown",
    };
  let X = oZ();
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
function oZ() {
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
var kV = ($) => {
    if ($ === "x32") return "x32";
    if ($ === "x86_64" || $ === "x64") return "x64";
    if ($ === "arm") return "arm";
    if ($ === "aarch64" || $ === "arm64") return "arm64";
    if ($) return `other:${$}`;
    return "unknown";
  },
  _V = ($) => {
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
  xV,
  fV = () => {
    return xV ?? (xV = rZ());
  };
function yV() {
  if (typeof fetch < "u") return fetch;
  throw Error(
    "`fetch` is not defined as a global; Either pass `fetch` to the client, `new Anthropic({ fetch })` or polyfill the global, `globalThis.fetch = fetch`",
  );
}
function GW(...$) {
  let X = globalThis.ReadableStream;
  if (typeof X > "u")
    throw Error(
      "`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`",
    );
  return new X(...$);
}
function yJ($) {
  let X =
    Symbol.asyncIterator in $
      ? $[Symbol.asyncIterator]()
      : $[Symbol.iterator]();
  return GW({
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
function g8($) {
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
async function gV($) {
  if ($ === null || typeof $ !== "object") return;
  if ($[Symbol.asyncIterator]) {
    await $[Symbol.asyncIterator]().return?.();
    return;
  }
  let X = $.getReader(),
    J = X.cancel();
  (X.releaseLock(), await J);
}
var hV = ({ headers: $, body: X }) => {
  return {
    bodyHeaders: { "content-type": "application/json" },
    body: JSON.stringify(X),
  };
};
function uV($) {
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
function cV($) {
  let X = 0;
  for (let Q of $) X += Q.length;
  let J = new Uint8Array(X),
    Y = 0;
  for (let Q of $) (J.set(Q, Y), (Y += Q.length));
  return J;
}
var mV;
function h8($) {
  let X;
  return (mV ?? ((X = new globalThis.TextEncoder()), (mV = X.encode.bind(X))))(
    $,
  );
}
var lV;
function HW($) {
  let X;
  return (lV ?? ((X = new globalThis.TextDecoder()), (lV = X.decode.bind(X))))(
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
          ? h8($)
          : $;
    C(this, B6, cV([D(this, B6, "f"), X]), "f");
    let J = [],
      Y;
    while ((Y = sZ(D(this, B6, "f"), D(this, q6, "f"))) != null) {
      if (Y.carriage && D(this, q6, "f") == null) {
        C(this, q6, Y.index, "f");
        continue;
      }
      if (
        D(this, q6, "f") != null &&
        (Y.index !== D(this, q6, "f") + 1 || Y.carriage)
      ) {
        (J.push(HW(D(this, B6, "f").subarray(0, D(this, q6, "f") - 1))),
          C(this, B6, D(this, B6, "f").subarray(D(this, q6, "f")), "f"),
          C(this, q6, null, "f"));
        continue;
      }
      let Q = D(this, q6, "f") !== null ? Y.preceding - 1 : Y.preceding,
        W = HW(D(this, B6, "f").subarray(0, Q));
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
function sZ($, X) {
  for (let Q = X ?? 0; Q < $.length; Q++) {
    if ($[Q] === 10) return { preceding: Q, index: Q + 1, carriage: !1 };
    if ($[Q] === 13) return { preceding: Q, index: Q + 1, carriage: !0 };
  }
  return null;
}
function dV($) {
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
var hJ = { off: 0, error: 200, warn: 300, info: 400, debug: 500 },
  UW = ($, X, J) => {
    if (!$) return;
    if (SV(hJ, $)) return $;
    h$(J).warn(
      `${X} was set to ${JSON.stringify($)}, expected one of ${JSON.stringify(Object.keys(hJ))}`,
    );
    return;
  };
function u8() {}
function gJ($, X, J) {
  if (!X || hJ[$] > hJ[J]) return u8;
  else return X[$].bind(X);
}
var eZ = { error: u8, warn: u8, info: u8, debug: u8 },
  pV = new WeakMap();
function h$($) {
  let X = $.logger,
    J = $.logLevel ?? "off";
  if (!X) return eZ;
  let Y = pV.get(X);
  if (Y && Y[0] === J) return Y[1];
  let Q = {
    error: gJ("error", X, J),
    warn: gJ("warn", X, J),
    info: gJ("info", X, J),
    debug: gJ("debug", X, J),
  };
  return (pV.set(X, [J, Q]), Q);
}
var V4 = ($) => {
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
var m8;
class D6 {
  constructor($, X, J) {
    ((this.iterator = $),
      m8.set(this, void 0),
      (this.controller = X),
      C(this, m8, J, "f"));
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
        for await (let G of $b($, X)) {
          if (G.event === "completion")
            try {
              yield JSON.parse(G.data);
            } catch (H) {
              throw (
                Q.error("Could not parse message into JSON:", G.data),
                Q.error("From chunk:", G.raw),
                H
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
            } catch (H) {
              throw (
                Q.error("Could not parse message into JSON:", G.data),
                Q.error("From chunk:", G.raw),
                H
              );
            }
          if (G.event === "ping") continue;
          if (G.event === "error") {
            let H = fJ(G.data) ?? G.data,
              U = H?.error?.type;
            throw new T$(void 0, H, void 0, $.headers, U);
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
        G = g8($);
      for await (let H of G) for (let U of z.decode(H)) yield U;
      for (let H of z.flush()) yield H;
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
  [((m8 = new WeakMap()), Symbol.asyncIterator)]() {
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
      new D6(() => Y($), this.controller, D(this, m8, "f")),
      new D6(() => Y(X), this.controller, D(this, m8, "f")),
    ];
  }
  toReadableStream() {
    let $ = this,
      X;
    return GW({
      async start() {
        X = $[Symbol.asyncIterator]();
      },
      async pull(J) {
        try {
          let { value: Y, done: Q } = await X.next();
          if (Q) return J.close();
          let W = h8(
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
async function* $b($, X) {
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
  let J = new iV(),
    Y = new h4(),
    Q = g8($.body);
  for await (let W of Xb(Q))
    for (let z of Y.decode(W)) {
      let G = J.decode(z);
      if (G) yield G;
    }
  for (let W of Y.flush()) {
    let z = J.decode(W);
    if (z) yield z;
  }
}
async function* Xb($) {
  let X = new Uint8Array();
  for await (let J of $) {
    if (J == null) continue;
    let Y =
        J instanceof ArrayBuffer
          ? new Uint8Array(J)
          : typeof J === "string"
            ? h8(J)
            : J,
      Q = new Uint8Array(X.length + Y.length);
    (Q.set(X), Q.set(Y, X.length), (X = Q));
    let W;
    while ((W = dV(X)) !== -1) (yield X.slice(0, W), (X = X.slice(W)));
  }
  if (X.length > 0) yield X;
}
class iV {
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
    let [X, J, Y] = Jb($, ":");
    if (Y.startsWith(" ")) Y = Y.substring(1);
    if (X === "event") this.event = Y;
    else if (X === "data") this.data.push(Y);
    return null;
  }
}
function Jb($, X) {
  let J = $.indexOf(X);
  if (J !== -1) return [$.substring(0, J), X, $.substring(J + X.length)];
  return [$, "", ""];
}
async function uJ($, X) {
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
      let H = J.headers.get("content-type")?.split(";")[0]?.trim();
      if (H?.includes("application/json") || H?.endsWith("+json")) {
        if (J.headers.get("content-length") === "0") return;
        let N = await J.json();
        return KW(N, J);
      }
      return await J.text();
    })();
  return (
    h$($).debug(
      `[${Y}] response parsed`,
      V4({
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
function KW($, X) {
  if (!$ || typeof $ !== "object" || Array.isArray($)) return $;
  return Object.defineProperty($, "_request_id", {
    value: X.headers.get("request-id"),
    enumerable: !1,
  });
}
var l8;
class j1 extends Promise {
  constructor($, X, J = uJ) {
    super((Y) => {
      Y(null);
    });
    ((this.responsePromise = X),
      (this.parseResponse = J),
      l8.set(this, void 0),
      C(this, l8, $, "f"));
  }
  _thenUnwrap($) {
    return new j1(D(this, l8, "f"), this.responsePromise, async (X, J) =>
      KW($(await this.parseResponse(X, J), J), J.response),
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
        this.parseResponse(D(this, l8, "f"), $),
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
l8 = new WeakMap();
var mJ;
class VW {
  constructor($, X, J, Y) {
    (mJ.set(this, void 0),
      C(this, mJ, $, "f"),
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
    return await D(this, mJ, "f").requestAPIList(this.constructor, $);
  }
  async *iterPages() {
    let $ = this;
    yield $;
    while ($.hasNextPage()) (($ = await $.getNextPage()), yield $);
  }
  async *[((mJ = new WeakMap()), Symbol.asyncIterator)]() {
    for await (let $ of this.iterPages())
      for (let X of $.getPaginatedItems()) yield X;
  }
}
class lJ extends j1 {
  constructor($, X, J) {
    super(
      $,
      X,
      async (Y, Q) => new J(Y, Q.response, await uJ(Y, Q), Q.options),
    );
  }
  async *[Symbol.asyncIterator]() {
    let $ = await this;
    for await (let X of $) yield X;
  }
}
class y6 extends VW {
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
        query: { ...TJ(this.options.query), before_id: X },
      };
    }
    let $ = this.last_id;
    if (!$) return null;
    return {
      ...this.options,
      query: { ...TJ(this.options.query), after_id: $ },
    };
  }
}
class c8 extends VW {
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
    return { ...this.options, query: { ...TJ(this.options.query), page: $ } };
  }
}
var OW = () => {
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
function L1($, X, J) {
  return (OW(), new File($, X ?? "unknown_file", J));
}
function d8($, X) {
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
var wW = ($) =>
  $ != null &&
  typeof $ === "object" &&
  typeof $[Symbol.asyncIterator] === "function";
var V0 = async ($, X, J = !0) => {
    return { ...$, body: await Wb($.body, X, J) };
  },
  nV = new WeakMap();
function Yb($) {
  let X = typeof $ === "function" ? $ : $.fetch,
    J = nV.get(X);
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
  return (nV.set(X, Y), Y);
}
var Wb = async ($, X, J = !0) => {
    if (!(await Yb(X)))
      throw TypeError(
        "The provided fetch function does not support file uploads with the current global FormData class.",
      );
    let Y = new FormData();
    return (
      await Promise.all(
        Object.entries($ || {}).map(([Q, W]) => NW(Y, Q, W, J)),
      ),
      Y
    );
  },
  zb = ($) => $ instanceof Blob && "name" in $;
var NW = async ($, X, J, Y) => {
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
    $.append(X, L1([await J.blob()], d8(J, Y), Q));
  } else if (wW(J))
    $.append(X, L1([await new Response(yJ(J)).blob()], d8(J, Y)));
  else if (zb(J)) $.append(X, L1([J], d8(J, Y), { type: J.type }));
  else if (Array.isArray(J))
    await Promise.all(J.map((Q) => NW($, X + "[]", Q, Y)));
  else if (typeof J === "object")
    await Promise.all(
      Object.entries(J).map(([Q, W]) => NW($, `${X}[${Q}]`, W, Y)),
    );
  else
    throw TypeError(
      `Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${J} instead`,
    );
};
var rV = ($) =>
    $ != null &&
    typeof $ === "object" &&
    typeof $.size === "number" &&
    typeof $.type === "string" &&
    typeof $.text === "function" &&
    typeof $.slice === "function" &&
    typeof $.arrayBuffer === "function",
  Gb = ($) =>
    $ != null &&
    typeof $ === "object" &&
    typeof $.name === "string" &&
    typeof $.lastModified === "number" &&
    rV($),
  Hb = ($) =>
    $ != null &&
    typeof $ === "object" &&
    typeof $.url === "string" &&
    typeof $.blob === "function";
async function cJ($, X, J) {
  if ((OW(), ($ = await $), X || (X = d8($, !0)), Gb($))) {
    if ($ instanceof File && X == null && J == null) return $;
    return L1([await $.arrayBuffer()], X ?? $.name, {
      type: $.type,
      lastModified: $.lastModified,
      ...J,
    });
  }
  if (Hb($)) {
    let Q = await $.blob();
    return (
      X || (X = new URL($.url).pathname.split(/[\\/]/).pop()),
      L1(await BW(Q), X, J)
    );
  }
  let Y = await BW($);
  if (!J?.type) {
    let Q = Y.find((W) => typeof W === "object" && "type" in W && W.type);
    if (typeof Q === "string") J = { ...J, type: Q };
  }
  return L1(Y, X, J);
}
async function BW($) {
  let X = [];
  if (
    typeof $ === "string" ||
    ArrayBuffer.isView($) ||
    $ instanceof ArrayBuffer
  )
    X.push($);
  else if (rV($)) X.push($ instanceof Blob ? $ : await $.arrayBuffer());
  else if (wW($)) for await (let J of $) X.push(...(await BW(J)));
  else {
    let J = $?.constructor?.name;
    throw Error(
      `Unexpected data type: ${typeof $}${J ? `; constructor: ${J}` : ""}${Ub($)}`,
    );
  }
  return X;
}
function Ub($) {
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
var oV = Symbol.for("brand.privateNullableHeaders");
function* Vb($) {
  if (!$) return;
  if (oV in $) {
    let { values: Y, nulls: Q } = $;
    yield* Y.entries();
    for (let W of Q) yield [W, null];
    return;
  }
  let X = !1,
    J;
  if ($ instanceof Headers) J = $.entries();
  else if (WW($)) J = $;
  else ((X = !0), (J = Object.entries($ ?? {})));
  for (let Y of J) {
    let Q = Y[0];
    if (typeof Q !== "string")
      throw TypeError("expected header name to be a string");
    let W = WW(Y[1]) ? Y[1] : [Y[1]],
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
    for (let [W, z] of Vb(Y)) {
      let G = W.toLowerCase();
      if (!Q.has(G)) (X.delete(W), Q.add(G));
      if (z === null) (X.delete(W), J.add(G));
      else (X.append(W, z), J.delete(G));
    }
  }
  return { [oV]: !0, values: X, nulls: J };
};
var p8 = Symbol("anthropic.sdk.stainlessHelper");
function dJ($) {
  return typeof $ === "object" && $ !== null && p8 in $;
}
function qW($, X) {
  let J = new Set();
  if ($) {
    for (let Y of $) if (dJ(Y)) J.add(Y[p8]);
  }
  if (X)
    for (let Y of X) {
      if (dJ(Y)) J.add(Y[p8]);
      if (Array.isArray(Y.content)) {
        for (let Q of Y.content) if (dJ(Q)) J.add(Q[p8]);
      }
    }
  return Array.from(J);
}
function pJ($, X) {
  let J = qW($, X);
  if (J.length === 0) return {};
  return { "x-stainless-helper": J.join(", ") };
}
function tV($) {
  if (dJ($)) return { "x-stainless-helper": $[p8] };
  return {};
}
function sV($) {
  return $.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
var aV = Object.freeze(Object.create(null)),
  Nb = ($ = sV) =>
    function (J, ...Y) {
      if (J.length === 1) return J[0];
      let Q = !1,
        W = [],
        z = J.reduce((K, V, N) => {
          if (/[?#]/.test(V)) Q = !0;
          let O = Y[N],
            w = (Q ? encodeURIComponent : $)("" + O);
          if (
            N !== Y.length &&
            (O == null ||
              (typeof O === "object" &&
                O.toString ===
                  Object.getPrototypeOf(
                    Object.getPrototypeOf(O.hasOwnProperty ?? aV) ?? aV,
                  )?.toString))
          )
            ((w = O + ""),
              W.push({
                start: K.length + V.length,
                length: w.length,
                error: `Value of type ${Object.prototype.toString.call(O).slice(8, -1)} is not a valid path parameter`,
              }));
          return K + V + (N === Y.length ? "" : w);
        }, ""),
        G = z.split(/[?#]/, 1)[0],
        H = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,
        U;
      while ((U = H.exec(G)) !== null)
        W.push({
          start: U.index,
          length: U[0].length,
          error: `Value "${U[0]}" can't be safely passed as a path parameter`,
        });
      if ((W.sort((K, V) => K.start - V.start), W.length > 0)) {
        let K = 0,
          V = W.reduce((N, O) => {
            let w = " ".repeat(O.start - K),
              B = "^".repeat(O.length);
            return ((K = O.start + O.length), N + w + B);
          }, "");
        throw new f(`Path parameters result in path with invalid segments:
${W.map((N) => N.error).join(`
`)}
${z}
${V}`);
      }
      return z;
    },
  A$ = Nb(sV);
class i8 extends b$ {
  list($ = {}, X) {
    let { betas: J, ...Y } = $ ?? {};
    return this._client.getAPIList("/v1/files", y6, {
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
      V0(
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
            tV(Y.file),
            X?.headers,
          ]),
        },
        this._client,
      ),
    );
  }
}
class n8 extends b$ {
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
    return this._client.getAPIList("/v1/models?beta=true", y6, {
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
var iJ = {
  "claude-opus-4-20250514": 8192,
  "claude-opus-4-0": 8192,
  "claude-4-opus-20250514": 8192,
  "anthropic.claude-opus-4-20250514-v1:0": 8192,
  "claude-opus-4@20250514": 8192,
  "claude-opus-4-1-20250805": 8192,
  "anthropic.claude-opus-4-1-20250805-v1:0": 8192,
  "claude-opus-4-1@20250805": 8192,
};
function eV($) {
  return $?.output_format ?? $?.output_config?.format;
}
function DW($, X, J) {
  let Y = eV(X);
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
  return FW($, X, J);
}
function FW($, X, J) {
  let Y = null,
    Q = $.content.map((W) => {
      if (W.type === "text") {
        let z = Bb(X, W.text);
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
function Bb($, X) {
  let J = eV($);
  if (J?.type !== "json_schema") return null;
  try {
    if ("parse" in J) return J.parse(X);
    return JSON.parse(X);
  } catch (Y) {
    throw new f(`Failed to parse structured output: ${Y}`);
  }
}
var qb = ($) => {
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
          H = !1;
        Y = $[++X];
        while (Y !== '"') {
          if (X === $.length) {
            H = !0;
            break;
          }
          if (Y === "\\") {
            if ((X++, X === $.length)) {
              H = !0;
              break;
            }
            ((G += Y + $[X]), (Y = $[++X]));
          } else ((G += Y), (Y = $[++X]));
        }
        if (((Y = $[++X]), !H)) J.push({ type: "string", value: G });
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
  N0 = ($) => {
    if ($.length === 0) return $;
    let X = $[$.length - 1];
    switch (X.type) {
      case "separator":
        return (($ = $.slice(0, $.length - 1)), N0($));
        break;
      case "number":
        let J = X.value[X.value.length - 1];
        if (J === "." || J === "-")
          return (($ = $.slice(0, $.length - 1)), N0($));
      case "string":
        let Y = $[$.length - 2];
        if (Y?.type === "delimiter")
          return (($ = $.slice(0, $.length - 1)), N0($));
        else if (Y?.type === "brace" && Y.value === "{")
          return (($ = $.slice(0, $.length - 1)), N0($));
        break;
      case "delimiter":
        return (($ = $.slice(0, $.length - 1)), N0($));
        break;
    }
    return $;
  },
  Db = ($) => {
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
  Fb = ($) => {
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
  nJ = ($) => JSON.parse(Fb(Db(N0(qb($)))));
var I6,
  u4,
  O0,
  r8,
  rJ,
  o8,
  t8,
  oJ,
  a8,
  N4,
  s8,
  tJ,
  aJ,
  M1,
  sJ,
  eJ,
  e8,
  jW,
  $N,
  $7,
  LW,
  MW,
  AW,
  XN,
  JN = "__json_buf";
function QN($) {
  return (
    $.type === "tool_use" ||
    $.type === "server_tool_use" ||
    $.type === "mcp_tool_use"
  );
}
class $9 {
  constructor($, X) {
    (I6.add(this),
      (this.messages = []),
      (this.receivedMessages = []),
      u4.set(this, void 0),
      O0.set(this, null),
      (this.controller = new AbortController()),
      r8.set(this, void 0),
      rJ.set(this, () => {}),
      o8.set(this, () => {}),
      t8.set(this, void 0),
      oJ.set(this, () => {}),
      a8.set(this, () => {}),
      N4.set(this, {}),
      s8.set(this, !1),
      tJ.set(this, !1),
      aJ.set(this, !1),
      M1.set(this, !1),
      sJ.set(this, void 0),
      eJ.set(this, void 0),
      e8.set(this, void 0),
      $7.set(this, (J) => {
        if ((C(this, tJ, !0, "f"), K4(J))) J = new m$();
        if (J instanceof m$)
          return (C(this, aJ, !0, "f"), this._emit("abort", J));
        if (J instanceof f) return this._emit("error", J);
        if (J instanceof Error) {
          let Y = new f(J.message);
          return ((Y.cause = J), this._emit("error", Y));
        }
        return this._emit("error", new f(String(J)));
      }),
      C(
        this,
        r8,
        new Promise((J, Y) => {
          (C(this, rJ, J, "f"), C(this, o8, Y, "f"));
        }),
        "f",
      ),
      C(
        this,
        t8,
        new Promise((J, Y) => {
          (C(this, oJ, J, "f"), C(this, a8, Y, "f"));
        }),
        "f",
      ),
      D(this, r8, "f").catch(() => {}),
      D(this, t8, "f").catch(() => {}),
      C(this, O0, $, "f"),
      C(this, e8, X?.logger ?? console, "f"));
  }
  get response() {
    return D(this, sJ, "f");
  }
  get request_id() {
    return D(this, eJ, "f");
  }
  async withResponse() {
    C(this, M1, !0, "f");
    let $ = await D(this, r8, "f");
    if (!$) throw Error("Could not resolve a `Response` object");
    return { data: this, response: $, request_id: $.headers.get("request-id") };
  }
  static fromReadableStream($) {
    let X = new $9(null);
    return (X._run(() => X._fromReadableStream($)), X);
  }
  static createMessage($, X, J, { logger: Y } = {}) {
    let Q = new $9(X, { logger: Y });
    for (let W of X.messages) Q._addMessageParam(W);
    return (
      C(Q, O0, { ...X, stream: !0 }, "f"),
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
      D(this, $7, "f"),
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
      D(this, I6, "m", LW).call(this);
      let { response: W, data: z } = await $.create(
        { ...X, stream: !0 },
        { ...J, signal: this.controller.signal },
      ).withResponse();
      this._connected(W);
      for await (let G of z) D(this, I6, "m", MW).call(this, G);
      if (z.controller.signal?.aborted) throw new m$();
      D(this, I6, "m", AW).call(this);
    } finally {
      if (Y && Q) Y.removeEventListener("abort", Q);
    }
  }
  _connected($) {
    if (this.ended) return;
    (C(this, sJ, $, "f"),
      C(this, eJ, $?.headers.get("request-id"), "f"),
      D(this, rJ, "f").call(this, $),
      this._emit("connect"));
  }
  get ended() {
    return D(this, s8, "f");
  }
  get errored() {
    return D(this, tJ, "f");
  }
  get aborted() {
    return D(this, aJ, "f");
  }
  abort() {
    this.controller.abort();
  }
  on($, X) {
    return (
      (D(this, N4, "f")[$] || (D(this, N4, "f")[$] = [])).push({ listener: X }),
      this
    );
  }
  off($, X) {
    let J = D(this, N4, "f")[$];
    if (!J) return this;
    let Y = J.findIndex((Q) => Q.listener === X);
    if (Y >= 0) J.splice(Y, 1);
    return this;
  }
  once($, X) {
    return (
      (D(this, N4, "f")[$] || (D(this, N4, "f")[$] = [])).push({
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
    (C(this, M1, !0, "f"), await D(this, t8, "f"));
  }
  get currentMessage() {
    return D(this, u4, "f");
  }
  async finalMessage() {
    return (await this.done(), D(this, I6, "m", jW).call(this));
  }
  async finalText() {
    return (await this.done(), D(this, I6, "m", $N).call(this));
  }
  _emit($, ...X) {
    if (D(this, s8, "f")) return;
    if ($ === "end") (C(this, s8, !0, "f"), D(this, oJ, "f").call(this));
    let J = D(this, N4, "f")[$];
    if (J)
      ((D(this, N4, "f")[$] = J.filter((Y) => !Y.once)),
        J.forEach(({ listener: Y }) => Y(...X)));
    if ($ === "abort") {
      let Y = X[0];
      if (!D(this, M1, "f") && !J?.length) Promise.reject(Y);
      (D(this, o8, "f").call(this, Y),
        D(this, a8, "f").call(this, Y),
        this._emit("end"));
      return;
    }
    if ($ === "error") {
      let Y = X[0];
      if (!D(this, M1, "f") && !J?.length) Promise.reject(Y);
      (D(this, o8, "f").call(this, Y),
        D(this, a8, "f").call(this, Y),
        this._emit("end"));
    }
  }
  _emitFinal() {
    if (this.receivedMessages.at(-1))
      this._emit("finalMessage", D(this, I6, "m", jW).call(this));
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
      (D(this, I6, "m", LW).call(this), this._connected(null));
      let Q = D6.fromReadableStream($, this.controller);
      for await (let W of Q) D(this, I6, "m", MW).call(this, W);
      if (Q.controller.signal?.aborted) throw new m$();
      D(this, I6, "m", AW).call(this);
    } finally {
      if (J && Y) J.removeEventListener("abort", Y);
    }
  }
  [((u4 = new WeakMap()),
  (O0 = new WeakMap()),
  (r8 = new WeakMap()),
  (rJ = new WeakMap()),
  (o8 = new WeakMap()),
  (t8 = new WeakMap()),
  (oJ = new WeakMap()),
  (a8 = new WeakMap()),
  (N4 = new WeakMap()),
  (s8 = new WeakMap()),
  (tJ = new WeakMap()),
  (aJ = new WeakMap()),
  (M1 = new WeakMap()),
  (sJ = new WeakMap()),
  (eJ = new WeakMap()),
  (e8 = new WeakMap()),
  ($7 = new WeakMap()),
  (I6 = new WeakSet()),
  (jW = function () {
    if (this.receivedMessages.length === 0)
      throw new f(
        "stream ended without producing a Message with role=assistant",
      );
    return this.receivedMessages.at(-1);
  }),
  ($N = function () {
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
  (LW = function () {
    if (this.ended) return;
    C(this, u4, void 0, "f");
  }),
  (MW = function (X) {
    if (this.ended) return;
    let J = D(this, I6, "m", XN).call(this, X);
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
            if (QN(Y) && Y.input)
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
            YN(X.delta);
        }
        break;
      }
      case "message_stop": {
        (this._addMessageParam(J),
          this._addMessage(
            DW(J, D(this, O0, "f"), { logger: D(this, e8, "f") }),
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
  (AW = function () {
    if (this.ended) throw new f("stream has ended, this shouldn't happen");
    let X = D(this, u4, "f");
    if (!X) throw new f("request ended without sending any chunks");
    return (
      C(this, u4, void 0, "f"),
      DW(X, D(this, O0, "f"), { logger: D(this, e8, "f") })
    );
  }),
  (XN = function (X) {
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
            if (Y && QN(Y)) {
              let Q = Y[JN] || "";
              Q += X.delta.partial_json;
              let W = { ...Y };
              if (
                (Object.defineProperty(W, JN, {
                  value: Q,
                  enumerable: !1,
                  writable: !0,
                }),
                Q)
              )
                try {
                  W.input = nJ(Q);
                } catch (z) {
                  let G = new f(
                    `Unable to parse tool parameter JSON from model. Please retry your request or adjust your prompt. Error: ${z}. JSON: ${Q}`,
                  );
                  D(this, $7, "f").call(this, G);
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
            YN(X.delta);
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
function YN($) {}
class w0 extends Error {
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
var WN = 1e5,
  zN = `You have been working on the task described above but have not yet completed it. Write a continuation summary that will allow you (or another instance of yourself) to resume work efficiently in a future context window where the conversation history will be replaced with this summary. Your summary should be structured, concise, and actionable. Include:
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
var X9, B0, A1, f$, J9, F6, O4, m4, Q9, GN, IW;
function HN() {
  let $, X;
  return {
    promise: new Promise((Y, Q) => {
      (($ = Y), (X = Q));
    }),
    resolve: $,
    reject: X,
  };
}
class Y9 {
  constructor($, X, J) {
    (X9.add(this),
      (this.client = $),
      B0.set(this, !1),
      A1.set(this, !1),
      f$.set(this, void 0),
      J9.set(this, void 0),
      F6.set(this, void 0),
      O4.set(this, void 0),
      m4.set(this, void 0),
      Q9.set(this, 0),
      C(
        this,
        f$,
        { params: { ...X, messages: structuredClone(X.messages) } },
        "f",
      ));
    let Q = ["BetaToolRunner", ...qW(X.tools, X.messages)].join(", ");
    (C(
      this,
      J9,
      { ...J, headers: i([{ "x-stainless-helper": Q }, J?.headers]) },
      "f",
    ),
      C(this, m4, HN(), "f"));
  }
  async *[((B0 = new WeakMap()),
  (A1 = new WeakMap()),
  (f$ = new WeakMap()),
  (J9 = new WeakMap()),
  (F6 = new WeakMap()),
  (O4 = new WeakMap()),
  (m4 = new WeakMap()),
  (Q9 = new WeakMap()),
  (X9 = new WeakSet()),
  (GN = async function () {
    let X = D(this, f$, "f").params.compactionControl;
    if (!X || !X.enabled) return !1;
    let J = 0;
    if (D(this, F6, "f") !== void 0)
      try {
        let H = await D(this, F6, "f");
        J =
          H.usage.input_tokens +
          (H.usage.cache_creation_input_tokens ?? 0) +
          (H.usage.cache_read_input_tokens ?? 0) +
          H.usage.output_tokens;
      } catch {
        return !1;
      }
    let Y = X.contextTokenThreshold ?? WN;
    if (J < Y) return !1;
    let Q = X.model ?? D(this, f$, "f").params.model,
      W = X.summaryPrompt ?? zN,
      z = D(this, f$, "f").params.messages;
    if (z[z.length - 1].role === "assistant") {
      let H = z[z.length - 1];
      if (Array.isArray(H.content)) {
        let U = H.content.filter((K) => K.type !== "tool_use");
        if (U.length === 0) z.pop();
        else H.content = U;
      }
    }
    let G = await this.client.beta.messages.create(
      {
        model: Q,
        messages: [
          ...z,
          { role: "user", content: [{ type: "text", text: W }] },
        ],
        max_tokens: D(this, f$, "f").params.max_tokens,
      },
      { headers: { "x-stainless-helper": "compaction" } },
    );
    if (G.content[0]?.type !== "text")
      throw new f("Expected text response for compaction");
    return (
      (D(this, f$, "f").params.messages = [
        { role: "user", content: G.content },
      ]),
      !0
    );
  }),
  Symbol.asyncIterator)]() {
    var $;
    if (D(this, B0, "f")) throw new f("Cannot iterate over a consumed stream");
    (C(this, B0, !0, "f"), C(this, A1, !0, "f"), C(this, O4, void 0, "f"));
    try {
      while (!0) {
        let X;
        try {
          if (
            D(this, f$, "f").params.max_iterations &&
            D(this, Q9, "f") >= D(this, f$, "f").params.max_iterations
          )
            break;
          (C(this, A1, !1, "f"),
            C(this, O4, void 0, "f"),
            C(this, Q9, (($ = D(this, Q9, "f")), $++, $), "f"),
            C(this, F6, void 0, "f"));
          let {
            max_iterations: J,
            compactionControl: Y,
            ...Q
          } = D(this, f$, "f").params;
          if (Q.stream)
            ((X = this.client.beta.messages.stream({ ...Q }, D(this, J9, "f"))),
              C(this, F6, X.finalMessage(), "f"),
              D(this, F6, "f").catch(() => {}),
              yield X);
          else
            (C(
              this,
              F6,
              this.client.beta.messages.create(
                { ...Q, stream: !1 },
                D(this, J9, "f"),
              ),
              "f",
            ),
              yield D(this, F6, "f"));
          if (!(await D(this, X9, "m", GN).call(this))) {
            if (!D(this, A1, "f")) {
              let { role: G, content: H } = await D(this, F6, "f");
              D(this, f$, "f").params.messages.push({ role: G, content: H });
            }
            let z = await D(this, X9, "m", IW).call(
              this,
              D(this, f$, "f").params.messages.at(-1),
            );
            if (z) D(this, f$, "f").params.messages.push(z);
            else if (!D(this, A1, "f")) break;
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
        C(this, B0, !1, "f"),
        D(this, m4, "f").promise.catch(() => {}),
        D(this, m4, "f").reject(X),
        C(this, m4, HN(), "f"),
        X
      );
    }
  }
  setMessagesParams($) {
    if (typeof $ === "function")
      D(this, f$, "f").params = $(D(this, f$, "f").params);
    else D(this, f$, "f").params = $;
    (C(this, A1, !0, "f"), C(this, O4, void 0, "f"));
  }
  async generateToolResponse() {
    let $ = (await D(this, F6, "f")) ?? this.params.messages.at(-1);
    if (!$) return null;
    return D(this, X9, "m", IW).call(this, $);
  }
  done() {
    return D(this, m4, "f").promise;
  }
  async runUntilDone() {
    if (!D(this, B0, "f")) for await (let $ of this);
    return this.done();
  }
  get params() {
    return D(this, f$, "f").params;
  }
  pushMessages(...$) {
    this.setMessagesParams((X) => ({ ...X, messages: [...X.messages, ...$] }));
  }
  then($, X) {
    return this.runUntilDone().then($, X);
  }
}
IW = async function (X) {
  if (D(this, O4, "f") !== void 0) return D(this, O4, "f");
  return (C(this, O4, jb(D(this, f$, "f").params, X), "f"), D(this, O4, "f"));
};
async function jb($, X = $.messages.at(-1)) {
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
              z instanceof w0
                ? z.content
                : `Error: ${z instanceof Error ? z.message : String(z)}`,
            is_error: !0,
          };
        }
      }),
    ),
  };
}
class q0 {
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
    return new q0(g8($.body), X);
  }
}
class W9 extends b$ {
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
    return this._client.getAPIList("/v1/messages/batches?beta=true", y6, {
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
      ._thenUnwrap((W, z) => q0.fromResponse(z.response, z.controller));
  }
}
var UN = {
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
  Mb = ["claude-opus-4-6"];
class l4 extends b$ {
  constructor() {
    super(...arguments);
    this.batches = new W9(this._client);
  }
  create($, X) {
    let J = KN($),
      { betas: Y, ...Q } = J;
    if (Q.model in UN)
      console.warn(`The model '${Q.model}' is deprecated and will reach end-of-life on ${UN[Q.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
    if (Q.model in Mb && Q.thinking && Q.thinking.type === "enabled")
      console.warn(
        `Using Claude with ${Q.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`,
      );
    let W = this._client._options.timeout;
    if (!Q.stream && W == null) {
      let G = iJ[Q.model] ?? void 0;
      W = this._client.calculateNonstreamingTimeout(Q.max_tokens, G);
    }
    let z = pJ(Q.tools, Q.messages);
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
        FW(J, $, { logger: this._client.logger ?? console }),
      )
    );
  }
  stream($, X) {
    return $9.createMessage(this, $, X);
  }
  countTokens($, X) {
    let J = KN($),
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
    return new Y9(this._client, $, X);
  }
}
function KN($) {
  if (!$.output_format) return $;
  if ($.output_config?.format)
    throw new f(
      "Both output_format and output_config.format were provided. Please use only output_config.format (output_format is deprecated).",
    );
  let { output_format: X, ...J } = $;
  return { ...J, output_config: { ...$.output_config, format: X } };
}
l4.Batches = W9;
l4.BetaToolRunner = Y9;
l4.ToolError = w0;
class z9 extends b$ {
  create($, X = {}, J) {
    let { betas: Y, ...Q } = X ?? {};
    return this._client.post(
      A$`/v1/skills/${$}/versions?beta=true`,
      V0(
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
    return this._client.getAPIList(A$`/v1/skills/${$}/versions?beta=true`, c8, {
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
class D0 extends b$ {
  constructor() {
    super(...arguments);
    this.versions = new z9(this._client);
  }
  create($ = {}, X) {
    let { betas: J, ...Y } = $ ?? {};
    return this._client.post(
      "/v1/skills?beta=true",
      V0(
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
    return this._client.getAPIList("/v1/skills?beta=true", c8, {
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
D0.Versions = z9;
class e6 extends b$ {
  constructor() {
    super(...arguments);
    ((this.models = new n8(this._client)),
      (this.messages = new l4(this._client)),
      (this.files = new i8(this._client)),
      (this.skills = new D0(this._client)));
  }
}
e6.Models = n8;
e6.Messages = l4;
e6.Files = i8;
e6.Skills = D0;
class F0 extends b$ {
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
function VN($) {
  return $?.output_config?.format;
}
function ZW($, X, J) {
  let Y = VN(X);
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
  return bW($, X, J);
}
function bW($, X, J) {
  let Y = null,
    Q = $.content.map((W) => {
      if (W.type === "text") {
        let z = bb(X, W.text);
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
function bb($, X) {
  let J = VN($);
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
  j0,
  G9,
  X7,
  H9,
  U9,
  J7,
  K9,
  w4,
  V9,
  Q7,
  Y7,
  I1,
  W7,
  z7,
  N9,
  RW,
  NN,
  PW,
  EW,
  SW,
  vW,
  ON,
  wN = "__json_buf";
function BN($) {
  return $.type === "tool_use" || $.type === "server_tool_use";
}
class O9 {
  constructor($, X) {
    (Z6.add(this),
      (this.messages = []),
      (this.receivedMessages = []),
      c4.set(this, void 0),
      j0.set(this, null),
      (this.controller = new AbortController()),
      G9.set(this, void 0),
      X7.set(this, () => {}),
      H9.set(this, () => {}),
      U9.set(this, void 0),
      J7.set(this, () => {}),
      K9.set(this, () => {}),
      w4.set(this, {}),
      V9.set(this, !1),
      Q7.set(this, !1),
      Y7.set(this, !1),
      I1.set(this, !1),
      W7.set(this, void 0),
      z7.set(this, void 0),
      N9.set(this, void 0),
      PW.set(this, (J) => {
        if ((C(this, Q7, !0, "f"), K4(J))) J = new m$();
        if (J instanceof m$)
          return (C(this, Y7, !0, "f"), this._emit("abort", J));
        if (J instanceof f) return this._emit("error", J);
        if (J instanceof Error) {
          let Y = new f(J.message);
          return ((Y.cause = J), this._emit("error", Y));
        }
        return this._emit("error", new f(String(J)));
      }),
      C(
        this,
        G9,
        new Promise((J, Y) => {
          (C(this, X7, J, "f"), C(this, H9, Y, "f"));
        }),
        "f",
      ),
      C(
        this,
        U9,
        new Promise((J, Y) => {
          (C(this, J7, J, "f"), C(this, K9, Y, "f"));
        }),
        "f",
      ),
      D(this, G9, "f").catch(() => {}),
      D(this, U9, "f").catch(() => {}),
      C(this, j0, $, "f"),
      C(this, N9, X?.logger ?? console, "f"));
  }
  get response() {
    return D(this, W7, "f");
  }
  get request_id() {
    return D(this, z7, "f");
  }
  async withResponse() {
    C(this, I1, !0, "f");
    let $ = await D(this, G9, "f");
    if (!$) throw Error("Could not resolve a `Response` object");
    return { data: this, response: $, request_id: $.headers.get("request-id") };
  }
  static fromReadableStream($) {
    let X = new O9(null);
    return (X._run(() => X._fromReadableStream($)), X);
  }
  static createMessage($, X, J, { logger: Y } = {}) {
    let Q = new O9(X, { logger: Y });
    for (let W of X.messages) Q._addMessageParam(W);
    return (
      C(Q, j0, { ...X, stream: !0 }, "f"),
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
      D(this, PW, "f"),
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
      D(this, Z6, "m", EW).call(this);
      let { response: W, data: z } = await $.create(
        { ...X, stream: !0 },
        { ...J, signal: this.controller.signal },
      ).withResponse();
      this._connected(W);
      for await (let G of z) D(this, Z6, "m", SW).call(this, G);
      if (z.controller.signal?.aborted) throw new m$();
      D(this, Z6, "m", vW).call(this);
    } finally {
      if (Y && Q) Y.removeEventListener("abort", Q);
    }
  }
  _connected($) {
    if (this.ended) return;
    (C(this, W7, $, "f"),
      C(this, z7, $?.headers.get("request-id"), "f"),
      D(this, X7, "f").call(this, $),
      this._emit("connect"));
  }
  get ended() {
    return D(this, V9, "f");
  }
  get errored() {
    return D(this, Q7, "f");
  }
  get aborted() {
    return D(this, Y7, "f");
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
      if ((C(this, I1, !0, "f"), $ !== "error")) this.once("error", J);
      this.once($, X);
    });
  }
  async done() {
    (C(this, I1, !0, "f"), await D(this, U9, "f"));
  }
  get currentMessage() {
    return D(this, c4, "f");
  }
  async finalMessage() {
    return (await this.done(), D(this, Z6, "m", RW).call(this));
  }
  async finalText() {
    return (await this.done(), D(this, Z6, "m", NN).call(this));
  }
  _emit($, ...X) {
    if (D(this, V9, "f")) return;
    if ($ === "end") (C(this, V9, !0, "f"), D(this, J7, "f").call(this));
    let J = D(this, w4, "f")[$];
    if (J)
      ((D(this, w4, "f")[$] = J.filter((Y) => !Y.once)),
        J.forEach(({ listener: Y }) => Y(...X)));
    if ($ === "abort") {
      let Y = X[0];
      if (!D(this, I1, "f") && !J?.length) Promise.reject(Y);
      (D(this, H9, "f").call(this, Y),
        D(this, K9, "f").call(this, Y),
        this._emit("end"));
      return;
    }
    if ($ === "error") {
      let Y = X[0];
      if (!D(this, I1, "f") && !J?.length) Promise.reject(Y);
      (D(this, H9, "f").call(this, Y),
        D(this, K9, "f").call(this, Y),
        this._emit("end"));
    }
  }
  _emitFinal() {
    if (this.receivedMessages.at(-1))
      this._emit("finalMessage", D(this, Z6, "m", RW).call(this));
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
      (D(this, Z6, "m", EW).call(this), this._connected(null));
      let Q = D6.fromReadableStream($, this.controller);
      for await (let W of Q) D(this, Z6, "m", SW).call(this, W);
      if (Q.controller.signal?.aborted) throw new m$();
      D(this, Z6, "m", vW).call(this);
    } finally {
      if (J && Y) J.removeEventListener("abort", Y);
    }
  }
  [((c4 = new WeakMap()),
  (j0 = new WeakMap()),
  (G9 = new WeakMap()),
  (X7 = new WeakMap()),
  (H9 = new WeakMap()),
  (U9 = new WeakMap()),
  (J7 = new WeakMap()),
  (K9 = new WeakMap()),
  (w4 = new WeakMap()),
  (V9 = new WeakMap()),
  (Q7 = new WeakMap()),
  (Y7 = new WeakMap()),
  (I1 = new WeakMap()),
  (W7 = new WeakMap()),
  (z7 = new WeakMap()),
  (N9 = new WeakMap()),
  (PW = new WeakMap()),
  (Z6 = new WeakSet()),
  (RW = function () {
    if (this.receivedMessages.length === 0)
      throw new f(
        "stream ended without producing a Message with role=assistant",
      );
    return this.receivedMessages.at(-1);
  }),
  (NN = function () {
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
  (EW = function () {
    if (this.ended) return;
    C(this, c4, void 0, "f");
  }),
  (SW = function (X) {
    if (this.ended) return;
    let J = D(this, Z6, "m", ON).call(this, X);
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
            if (BN(Y) && Y.input)
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
            qN(X.delta);
        }
        break;
      }
      case "message_stop": {
        (this._addMessageParam(J),
          this._addMessage(
            ZW(J, D(this, j0, "f"), { logger: D(this, N9, "f") }),
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
  (vW = function () {
    if (this.ended) throw new f("stream has ended, this shouldn't happen");
    let X = D(this, c4, "f");
    if (!X) throw new f("request ended without sending any chunks");
    return (
      C(this, c4, void 0, "f"),
      ZW(X, D(this, j0, "f"), { logger: D(this, N9, "f") })
    );
  }),
  (ON = function (X) {
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
            if (Y && BN(Y)) {
              let Q = Y[wN] || "";
              Q += X.delta.partial_json;
              let W = { ...Y };
              if (
                (Object.defineProperty(W, wN, {
                  value: Q,
                  enumerable: !1,
                  writable: !0,
                }),
                Q)
              )
                W.input = nJ(Q);
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
            qN(X.delta);
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
function qN($) {}
class w9 extends b$ {
  create($, X) {
    return this._client.post("/v1/messages/batches", { body: $, ...X });
  }
  retrieve($, X) {
    return this._client.get(A$`/v1/messages/batches/${$}`, X);
  }
  list($ = {}, X) {
    return this._client.getAPIList("/v1/messages/batches", y6, {
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
      ._thenUnwrap((Y, Q) => q0.fromResponse(Q.response, Q.controller));
  }
}
class Z1 extends b$ {
  constructor() {
    super(...arguments);
    this.batches = new w9(this._client);
  }
  create($, X) {
    if ($.model in DN)
      console.warn(`The model '${$.model}' is deprecated and will reach end-of-life on ${DN[$.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
    if ($.model in Pb && $.thinking && $.thinking.type === "enabled")
      console.warn(
        `Using Claude with ${$.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`,
      );
    let J = this._client._options.timeout;
    if (!$.stream && J == null) {
      let Q = iJ[$.model] ?? void 0;
      J = this._client.calculateNonstreamingTimeout($.max_tokens, Q);
    }
    let Y = pJ($.tools, $.messages);
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
      bW(J, $, { logger: this._client.logger ?? console }),
    );
  }
  stream($, X) {
    return O9.createMessage(this, $, X, {
      logger: this._client.logger ?? console,
    });
  }
  countTokens($, X) {
    return this._client.post("/v1/messages/count_tokens", { body: $, ...X });
  }
}
var DN = {
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
  Pb = ["claude-opus-4-6"];
Z1.Batches = w9;
class L0 extends b$ {
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
    return this._client.getAPIList("/v1/models", y6, {
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
var B9 = ($) => {
  if (typeof globalThis.process < "u")
    return globalThis.process.env?.[$]?.trim() ?? void 0;
  if (typeof globalThis.Deno < "u")
    return globalThis.Deno.env?.get?.($)?.trim();
  return;
};
var CW,
  kW,
  G7,
  FN,
  jN = "\\n\\nHuman:",
  LN = "\\n\\nAssistant:";
class P$ {
  constructor({
    baseURL: $ = B9("ANTHROPIC_BASE_URL"),
    apiKey: X = B9("ANTHROPIC_API_KEY") ?? null,
    authToken: J = B9("ANTHROPIC_AUTH_TOKEN") ?? null,
    ...Y
  } = {}) {
    (CW.add(this), G7.set(this, void 0));
    let Q = {
      apiKey: X,
      authToken: J,
      ...Y,
      baseURL: $ || "https://api.anthropic.com",
    };
    if (!Q.dangerouslyAllowBrowser && TV())
      throw new f(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);
    ((this.baseURL = Q.baseURL),
      (this.timeout = Q.timeout ?? kW.DEFAULT_TIMEOUT),
      (this.logger = Q.logger ?? console));
    let W = "warn";
    ((this.logLevel = W),
      (this.logLevel =
        UW(Q.logLevel, "ClientOptions.logLevel", this) ??
        UW(B9("ANTHROPIC_LOG"), "process.env['ANTHROPIC_LOG']", this) ??
        W),
      (this.fetchOptions = Q.fetchOptions),
      (this.maxRetries = Q.maxRetries ?? 2),
      (this.fetch = Q.fetch ?? yV()),
      C(this, G7, hV, "f"),
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
    return uV($);
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${g4}`;
  }
  defaultIdempotencyKey() {
    return `stainless-node-retry-${QW()}`;
  }
  makeStatusError($, X, J, Y) {
    return T$.generate($, X, J, Y);
  }
  buildURL($, X, J) {
    let Y = (!D(this, CW, "m", FN).call(this) && J) || this.baseURL,
      Q = EV($)
        ? new URL($)
        : new URL(Y + (Y.endsWith("/") && $.startsWith("/") ? $.slice(1) : $)),
      W = this.defaultQuery(),
      z = Object.fromEntries(Q.searchParams);
    if (!zW(W) || !zW(z)) X = { ...z, ...W, ...X };
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
    return new j1(this, this.makeRequest($, X, void 0));
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
    let H =
        "log_" + ((Math.random() * 16777216) | 0).toString(16).padStart(6, "0"),
      U = J === void 0 ? "" : `, retryOf: ${J}`,
      K = Date.now();
    if (
      (h$(this).debug(
        `[${H}] sending request`,
        V4({
          retryOfRequestLogID: J,
          method: Y.method,
          url: z,
          options: Y,
          headers: W.headers,
        }),
      ),
      Y.signal?.aborted)
    )
      throw new m$();
    let V = new AbortController(),
      N = await this.fetchWithTimeout(z, W, G, V).catch(E8),
      O = Date.now();
    if (N instanceof globalThis.Error) {
      let F = `retrying, ${X} attempts remaining`;
      if (Y.signal?.aborted) throw new m$();
      let j =
        K4(N) ||
        /timed? ?out/i.test(String(N) + ("cause" in N ? String(N.cause) : ""));
      if (X)
        return (
          h$(this).info(
            `[${H}] connection ${j ? "timed out" : "failed"} - ${F}`,
          ),
          h$(this).debug(
            `[${H}] connection ${j ? "timed out" : "failed"} (${F})`,
            V4({
              retryOfRequestLogID: J,
              url: z,
              durationMs: O - K,
              message: N.message,
            }),
          ),
          this.retryRequest(Y, X, J ?? H)
        );
      if (
        (h$(this).info(
          `[${H}] connection ${j ? "timed out" : "failed"} - error; no more retries left`,
        ),
        h$(this).debug(
          `[${H}] connection ${j ? "timed out" : "failed"} (error; no more retries left)`,
          V4({
            retryOfRequestLogID: J,
            url: z,
            durationMs: O - K,
            message: N.message,
          }),
        ),
        j)
      )
        throw new S8();
      throw new F1({ cause: N });
    }
    let w = [...N.headers.entries()]
        .filter(([F]) => F === "request-id")
        .map(([F, j]) => ", " + F + ": " + JSON.stringify(j))
        .join(""),
      B = `[${H}${U}${w}] ${W.method} ${z} ${N.ok ? "succeeded" : "failed"} with status ${N.status} in ${O - K}ms`;
    if (!N.ok) {
      let F = await this.shouldRetry(N);
      if (X && F) {
        let O$ = `retrying, ${X} attempts remaining`;
        return (
          await gV(N.body),
          h$(this).info(`${B} - ${O$}`),
          h$(this).debug(
            `[${H}] response error (${O$})`,
            V4({
              retryOfRequestLogID: J,
              url: N.url,
              status: N.status,
              headers: N.headers,
              durationMs: O - K,
            }),
          ),
          this.retryRequest(Y, X, J ?? H, N.headers)
        );
      }
      let j = F ? "error; no more retries left" : "error; not retryable";
      h$(this).info(`${B} - ${j}`);
      let I = await N.text().catch((O$) => E8(O$).message),
        Z = fJ(I),
        _ = Z ? void 0 : I;
      throw (
        h$(this).debug(
          `[${H}] response error (${j})`,
          V4({
            retryOfRequestLogID: J,
            url: N.url,
            status: N.status,
            headers: N.headers,
            message: _,
            durationMs: Date.now() - K,
          }),
        ),
        this.makeStatusError(N.status, Z, _, N.headers)
      );
    }
    return (
      h$(this).info(B),
      h$(this).debug(
        `[${H}] response start`,
        V4({
          retryOfRequestLogID: J,
          url: N.url,
          status: N.status,
          headers: N.headers,
          durationMs: O - K,
        }),
      ),
      {
        response: N,
        options: Y,
        controller: V,
        requestLogID: H,
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
    return new lJ(this, J, $);
  }
  async fetchWithTimeout($, X, J, Y) {
    let { signal: Q, method: W, ...z } = X || {},
      G = this._makeAbort(Y);
    if (Q) Q.addEventListener("abort", G, { once: !0 });
    let H = setTimeout(G, J),
      U =
        (globalThis.ReadableStream &&
          z.body instanceof globalThis.ReadableStream) ||
        (typeof z.body === "object" &&
          z.body !== null &&
          Symbol.asyncIterator in z.body),
      K = {
        signal: Y.signal,
        ...(U ? { duplex: "half" } : {}),
        method: "GET",
        ...z,
      };
    if (W) K.method = W.toUpperCase();
    try {
      return await this.fetch.call(void 0, $, K);
    } finally {
      clearTimeout(H);
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
    return (await CV(Q), this.makeRequest($, X - 1, J));
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
    if ("timeout" in J) vV("timeout", J.timeout);
    J.timeout = J.timeout ?? this.timeout;
    let { bodyHeaders: H, body: U } = this.buildBody({ options: J }),
      K = await this.buildHeaders({
        options: $,
        method: Y,
        bodyHeaders: H,
        retryCount: X,
      });
    return {
      req: {
        method: Y,
        headers: K,
        ...(J.signal && { signal: J.signal }),
        ...(globalThis.ReadableStream &&
          U instanceof globalThis.ReadableStream && { duplex: "half" }),
        ...(U && { body: U }),
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
        ...fV(),
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
      return { bodyHeaders: void 0, body: yJ($) };
    else if (
      typeof $ === "object" &&
      J.values.get("content-type") === "application/x-www-form-urlencoded"
    )
      return {
        bodyHeaders: { "content-type": "application/x-www-form-urlencoded" },
        body: this.stringifyQuery($),
      };
    else return D(this, G7, "f").call(this, { body: $, headers: J });
  }
}
((kW = P$),
  (G7 = new WeakMap()),
  (CW = new WeakSet()),
  (FN = function () {
    return this.baseURL !== "https://api.anthropic.com";
  }));
P$.Anthropic = kW;
P$.HUMAN_PROMPT = jN;
P$.AI_PROMPT = LN;
P$.DEFAULT_TIMEOUT = 600000;
P$.AnthropicError = f;
P$.APIError = T$;
P$.APIConnectionError = F1;
P$.APIConnectionTimeoutError = S8;
P$.APIUserAbortError = m$;
P$.NotFoundError = _8;
P$.ConflictError = x8;
P$.RateLimitError = f8;
P$.BadRequestError = v8;
P$.AuthenticationError = C8;
P$.InternalServerError = y8;
P$.PermissionDeniedError = k8;
P$.UnprocessableEntityError = T8;
P$.toFile = cJ;
class b1 extends P$ {
  constructor() {
    super(...arguments);
    ((this.completions = new F0(this)),
      (this.messages = new Z1(this)),
      (this.models = new L0(this)),
      (this.beta = new e6(this)));
  }
}
b1.Completions = F0;
b1.Messages = Z1;
b1.Models = L0;
b1.Beta = e6;
function d4($) {
  return $ instanceof Error ? $ : Error(String($));
}
function M0($) {
  return $ instanceof Error ? $.message : String($);
}
function g6($) {
  if ($ && typeof $ === "object" && "code" in $ && typeof $.code === "string")
    return $.code;
  return;
}
function p4($) {
  return g6($) === "ENOENT";
}
function _W($) {
  return g6($) === "EISDIR";
}
import { randomUUID as Sb } from "crypto";
import { appendFile as vb, mkdir as Cb } from "fs/promises";
import { join as MN } from "path";
var R1,
  A0 = null;
function AN() {
  if (A0) return A0;
  if (!J6(process.env.DEBUG_CLAUDE_AGENT_SDK))
    return ((R1 = null), (A0 = Promise.resolve()), A0);
  let $ = MN(y4(), "debug");
  return (
    (R1 = MN($, `sdk-${Sb()}.txt`)),
    process.stderr.write(`SDK debug logs: ${R1}
`),
    (A0 = Cb($, { recursive: !0 })
      .then(() => {})
      .catch(() => {})),
    A0
  );
}
function IN() {
  return (AN(), R1 ?? null);
}
function Q6($) {
  if (R1 === null) return;
  let J = `${new Date().toISOString()} ${$}
`;
  AN().then(() => {
    if (R1) vb(R1, J).catch(() => {});
  });
}
import { realpathSync as ZN } from "fs";
import { cwd as kb } from "process";
import { randomUUID as q9 } from "crypto";
var _b = {
  renderTarget: "ink",
  workspace: "local",
  canDrive: !0,
  transcriptSource: "local-jsonl",
  remote: null,
};
function xb() {
  let $ = "";
  if (
    typeof process < "u" &&
    typeof process.cwd === "function" &&
    typeof ZN === "function"
  ) {
    let J = kb();
    try {
      $ = ZN(J).normalize("NFC");
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
    fridayFundayDisabledForSession: !1,
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
    sessionId: q9(),
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
    caps: _b,
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
    thinkingTypeOverrides: new Map(),
    promptId: null,
    promptIndex: 0,
    lastMainRequestId: void 0,
    lastApiCompletionTimestamp: null,
    pendingPostCompaction: !1,
  };
}
var Tb = xb();
function xW() {
  return Tb.sessionId;
}
var fb = W0(),
  so = fb.subscribe;
var yb = W0(),
  eo = yb.subscribe;
var gb = W0();
var $t = gb.subscribe;
import {
  appendFile as xN,
  mkdir as JR,
  rename as TN,
  stat as QR,
  symlink as YR,
  unlink as yW,
} from "fs/promises";
import { dirname as fN, join as lW } from "path";
function bN({
  writeFn: $,
  flushIntervalMs: X = 1000,
  maxBufferSize: J = 100,
  maxBufferBytes: Y = 1 / 0,
  immediateMode: Q = !1,
}) {
  let W = [],
    z = 0,
    G = null,
    H = null;
  function U() {
    if (G) (clearTimeout(G), (G = null));
  }
  function K() {
    if (H) ($(H.join("")), (H = null));
    if (W.length === 0) return;
    ($(W.join("")), (W = []), (z = 0), U());
  }
  function V() {
    if (!G) G = setTimeout(K, X);
  }
  function N() {
    if (H) {
      (H.push(...W), (W = []), (z = 0), U());
      return;
    }
    let O = W;
    ((W = []),
      (z = 0),
      U(),
      (H = O),
      setImmediate(() => {
        let w = H;
        if (((H = null), w)) $(w.join(""));
      }));
  }
  return {
    write(O) {
      if (Q) {
        $(O);
        return;
      }
      if ((W.push(O), (z += O.length), V(), W.length >= J || z >= Y)) N();
    },
    flush: K,
    dispose() {
      K();
    },
  };
}
var RN = new Set();
function hb($) {
  if (typeof $ === "function") return $;
  if (Symbol.asyncDispose in $) return () => $[Symbol.asyncDispose]();
  return () => $[Symbol.dispose]();
}
function PN($) {
  let X = hb($);
  RN.add(X);
  let J = () => {
    RN.delete(X);
  };
  return Object.assign(J, { [Symbol.dispose]: J });
}
var EN = f6(($) => {
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
function ub($) {
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
function mb($, X) {
  if (!X) return !0;
  if ($.length === 0) return !1;
  if (X.isExclusive) return !$.some((J) => X.exclude.includes(J));
  else return $.some((J) => X.include.includes(J));
}
function SN($, X) {
  if (!X) return !0;
  let J = ub($);
  return mb(J, X);
}
import * as r from "fs";
import {
  mkdir as lb,
  open as cb,
  readdir as db,
  readFile as vN,
  rename as pb,
  rmdir as ib,
  rm as nb,
  stat as rb,
  unlink as ob,
} from "fs/promises";
var tb = {
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
      return rb($);
    },
    async readdir($) {
      return db($, { withFileTypes: !0 });
    },
    async unlink($) {
      return ob($);
    },
    async rmdir($) {
      return ib($);
    },
    async rm($, X) {
      return nb($, X);
    },
    async mkdir($, X) {
      try {
        await lb($, { recursive: !0, ...X });
      } catch (J) {
        if (g6(J) !== "EEXIST") throw J;
      }
    },
    async readFile($, X) {
      return vN($, { encoding: X.encoding });
    },
    async rename($, X) {
      return pb($, X);
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
          let H = Buffer.alloc(X.length),
            U = r.readSync(Y, H, 0, X.length, 0);
          return { buffer: H, bytesRead: U };
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
            let H = r.openSync($, "ax", J.mode);
            try {
              r.appendFileSync(H, X);
            } finally {
              r.closeSync(H);
            }
            return;
          } catch (H) {
            if (g6(H) !== "EEXIST") throw H;
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
        } catch (H) {
          if (g6(H) !== "EEXIST") throw H;
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
      if (X === void 0) return vN($);
      let J = await cb($, "r");
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
  ab = tb;
function H7() {
  return ab;
}
function sb($, X) {
  if ($.destroyed) return;
  $.write(X);
}
function CN($) {
  sb(process.stderr, $);
}
var eb = ["sk", "ant", "api"].join("-"),
  $R = [
    {
      id: "aws-access-token",
      source: "\\b((?:A3T[A-Z0-9]|AKIA|ASIA|ABIA|ACCA)[A-Z2-7]{16})\\b",
    },
    {
      id: "gcp-api-key",
      source: `\\b(AIza[\\w-]{35})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    {
      id: "azure-ad-client-secret",
      source: `(?:^|[\\\\'"\\x60\\s>=:(,)])([a-zA-Z0-9_~.]{3}\\dQ~[a-zA-Z0-9_~.-]{31,34})(?:$|[\\\\'"\\x60\\s<),])`,
    },
    {
      id: "digitalocean-pat",
      source: `\\b(dop_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    {
      id: "digitalocean-access-token",
      source: `\\b(doo_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    {
      id: "anthropic-api-key",
      source: `\\b(${eb}03-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    {
      id: "anthropic-admin-api-key",
      source: `\\b(sk-ant-admin01-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    {
      id: "openai-api-key",
      source: `\\b(sk-(?:proj|svcacct|admin)-(?:[A-Za-z0-9_-]{74}|[A-Za-z0-9_-]{58})T3BlbkFJ(?:[A-Za-z0-9_-]{74}|[A-Za-z0-9_-]{58})\\b|sk-[a-zA-Z0-9]{20}T3BlbkFJ[a-zA-Z0-9]{20})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    {
      id: "huggingface-access-token",
      source: `\\b(hf_[a-zA-Z]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    { id: "github-pat", source: "ghp_[0-9a-zA-Z]{36}" },
    { id: "github-fine-grained-pat", source: "github_pat_\\w{82}" },
    { id: "github-app-token", source: "(?:ghu|ghs)_[0-9a-zA-Z]{36}" },
    { id: "github-oauth", source: "gho_[0-9a-zA-Z]{36}" },
    { id: "github-refresh-token", source: "ghr_[0-9a-zA-Z]{36}" },
    { id: "gitlab-pat", source: "glpat-[\\w-]{20}" },
    { id: "gitlab-deploy-token", source: "gldt-[0-9a-zA-Z_\\-]{20}" },
    {
      id: "slack-bot-token",
      source: "xoxb-[0-9]{10,13}-[0-9]{10,13}[a-zA-Z0-9-]*",
    },
    {
      id: "slack-user-token",
      source: "xox[pe](?:-[0-9]{10,13}){3}-[a-zA-Z0-9-]{28,34}",
    },
    {
      id: "slack-app-token",
      source: "xapp-\\d-[A-Z0-9]+-\\d+-[a-z0-9]+",
      flags: "i",
    },
    { id: "twilio-api-key", source: "SK[0-9a-fA-F]{32}" },
    {
      id: "sendgrid-api-token",
      source: `\\b(SG\\.[a-zA-Z0-9=_\\-.]{66})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    {
      id: "npm-access-token",
      source: `\\b(npm_[a-zA-Z0-9]{36})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    { id: "pypi-upload-token", source: "pypi-AgEIcHlwaS5vcmc[\\w-]{50,1000}" },
    {
      id: "databricks-api-token",
      source: `\\b(dapi[a-f0-9]{32}(?:-\\d)?)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    {
      id: "hashicorp-tf-api-token",
      source: "[a-zA-Z0-9]{14}\\.atlasv1\\.[a-zA-Z0-9\\-_=]{60,70}",
    },
    {
      id: "pulumi-api-token",
      source: `\\b(pul-[a-f0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    {
      id: "postman-api-token",
      source: `\\b(PMAK-[a-fA-F0-9]{24}-[a-fA-F0-9]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    {
      id: "grafana-api-key",
      source: `\\b(eyJrIjoi[A-Za-z0-9+/]{70,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    {
      id: "grafana-cloud-api-token",
      source: `\\b(glc_[A-Za-z0-9+/]{32,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    {
      id: "grafana-service-account-token",
      source: `\\b(glsa_[A-Za-z0-9]{32}_[A-Fa-f0-9]{8})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    {
      id: "sentry-user-token",
      source: `\\b(sntryu_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    {
      id: "sentry-org-token",
      source:
        "\\bsntrys_eyJpYXQiO[a-zA-Z0-9+/]{10,200}(?:LCJyZWdpb25fdXJs|InJlZ2lvbl91cmwi|cmVnaW9uX3VybCI6)[a-zA-Z0-9+/]{10,200}={0,2}_[a-zA-Z0-9+/]{43}",
    },
    {
      id: "stripe-access-token",
      source: `\\b((?:sk|rk)_(?:test|live|prod)_[a-zA-Z0-9]{10,99})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    },
    { id: "shopify-access-token", source: "shpat_[a-fA-F0-9]{32}" },
    { id: "shopify-shared-secret", source: "shpss_[a-fA-F0-9]{32}" },
    {
      id: "private-key",
      source:
        "-----BEGIN[ A-Z0-9_-]{0,100}PRIVATE KEY(?: BLOCK)?-----[\\s\\S-]{64,}?-----END[ A-Z0-9_-]{0,100}PRIVATE KEY(?: BLOCK)?-----",
      flags: "i",
    },
  ];
var XR = [
    { id: "loose-sk-ant", source: "(sk-ant-[A-Za-z0-9_-]{20,})" },
    {
      id: "loose-bearer",
      source: "\\bBearer\\s+([A-Za-z0-9._~+/=-]{20,})",
      flags: "i",
    },
    {
      id: "loose-env-assign",
      source:
        "(?<=\\b[A-Z0-9_]*(?:TOKEN|KEY|SECRET|PASSWORD|PASSWD|CREDENTIAL)[A-Z0-9_]*=)(\\S+)",
    },
    {
      id: "loose-jwt",
      source:
        "\\b(eyJ[A-Za-z0-9_-]{10,}\\.[A-Za-z0-9_-]{10,}\\.[A-Za-z0-9_-]{10,})",
    },
  ],
  kN = null;
function _N($) {
  kN ??= [...$R, ...XR].map(
    (X) => new RegExp(X.source, (X.flags ?? "").replace("g", "") + "g"),
  );
  for (let X of kN)
    $ = $.replace(X, (J, Y) =>
      typeof Y === "string" ? J.replace(Y, "[REDACTED]") : "[REDACTED]",
    );
  return $;
}
var gW = { verbose: 0, debug: 1, info: 2, warn: 3, error: 4 },
  WR = f6(() => {
    let $ = process.env.CLAUDE_CODE_DEBUG_LOG_LEVEL?.toLowerCase().trim();
    if ($ && Object.hasOwn(gW, $)) return $;
    return "debug";
  }),
  zR = !1;
function K7() {
  return typeof process < "u" && Array.isArray(process.argv)
    ? process.argv
    : [];
}
var hW = f6(() => {
  let $ = K7();
  return (
    zR ||
    J6(process.env.DEBUG) ||
    J6(process.env.DEBUG_SDK) ||
    $.includes("--debug") ||
    $.includes("-d") ||
    yN() ||
    $.some((X) => X.startsWith("--debug=")) ||
    gN() !== null
  );
});
var GR = f6(() => {
    let $ = K7().find((J) => J.startsWith("--debug="));
    if (!$) return null;
    let X = $.substring(8);
    return EN(X);
  }),
  yN = f6(() => {
    let $ = K7();
    return $.includes("--debug-to-stderr") || $.includes("-d2e");
  }),
  gN = f6(() => {
    let $ = K7();
    for (let X = 0; X < $.length; X++) {
      let J = $[X];
      if (J.startsWith("--debug-file=")) return J.substring(13);
      if (J === "--debug-file" && X + 1 < $.length) return $[X + 1];
    }
    return null;
  });
function HR($) {
  if (!hW()) return !1;
  if (
    typeof process > "u" ||
    typeof process.versions > "u" ||
    typeof process.versions.node > "u"
  )
    return !1;
  let X = GR();
  return SN($, X);
}
var UR = !1;
var KR = 10485760,
  U7 = null,
  TW = Promise.resolve(),
  D9 = -1,
  fW = !1,
  uW = null;
async function hN($, X, J = KR) {
  if (D9 < 0)
    D9 = await QR($)
      .then((Y) => Y.size)
      .catch(() => 0);
  else D9 += X;
  if (D9 <= J || fW) return;
  fW = !0;
  try {
    let Y = $.endsWith(".txt") ? `${$.slice(0, -4)}.1.txt` : `${$}.1`;
    try {
      await TN($, Y);
    } catch (Q) {
      if (!p4(Q))
        (await yW(Y).catch(() => {}),
          await TN($, Y).catch(() => yW($).catch(() => {})));
    }
    D9 = 0;
  } finally {
    fW = !1;
  }
}
function uN($) {
  return ((uW = lW($, `${xW()}.txt`)), uW);
}
async function VR($, X, J, Y) {
  if ($) await JR(X, { recursive: !0 }).catch(() => {});
  let Q = J;
  try {
    await xN(J, Y);
  } catch (W) {
    if (!_W(W)) throw W;
    ((Q = uN(J)), await xN(Q, Y));
  }
  (await hN(Q, Buffer.byteLength(Y)).catch(mW), lN());
}
function mW() {}
function NR() {
  if (!U7) {
    let $ = null;
    ((U7 = bN({
      writeFn: (X) => {
        let J = mN(),
          Y = fN(J),
          Q = $ !== Y;
        if ((($ = Y), hW())) {
          if (Q)
            try {
              H7().mkdirSync(Y);
            } catch {}
          let W = J;
          try {
            H7().appendFileSync(J, X);
          } catch (z) {
            if (!_W(z)) throw z;
            ((W = uN(J)), H7().appendFileSync(W, X));
          }
          (hN(W, Buffer.byteLength(X)).catch(mW), lN());
          return;
        }
        TW = TW.then(VR.bind(null, Q, Y, J, X)).catch(mW);
      },
      flushIntervalMs: 1000,
      maxBufferSize: 100,
      immediateMode: hW(),
    })),
      PN(async () => {
        (U7?.dispose(), await TW);
      }));
  }
  return U7;
}
function S$($, { level: X } = { level: "debug" }) {
  if (gW[X] < gW[WR()]) return;
  if (!HR($)) return;
  if (
    UR &&
    $.includes(`
`)
  )
    $ = w$($);
  let Y = `${new Date().toISOString()} [${X.toUpperCase()}] ${_N($.trim())}
`;
  if (yN()) {
    CN(Y);
    return;
  }
  NR().write(Y);
}
function mN() {
  return (
    gN() ??
    uW ??
    process.env.CLAUDE_CODE_DEBUG_LOGS_DIR ??
    lW(y4(), "debug", `${xW()}.txt`)
  );
}
var lN = f6(async () => {
  try {
    let $ = mN(),
      X = fN($),
      J = lW(X, "latest");
    (await yW(J).catch(() => {}), await YR($, J));
  } catch {}
});
var xt = (() => {
  let $ = process.env.CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS;
  if ($ !== void 0) {
    let X = Number($);
    if (!Number.isNaN(X) && X >= 0) return X;
  }
  return 1 / 0;
})();
var OR = { [Symbol.dispose]() {} };
function wR() {
  return OR;
}
var R$ = wR;
function w$($, X, J) {
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
var l$ = ($, X) => {
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
function BR($) {
  let X = $.trim();
  return X.startsWith("{") && X.endsWith("}");
}
function cN($, X) {
  let J = { ...$ };
  if (X) {
    let Y =
        X.enabled === !0 && X.failIfUnavailable === void 0
          ? { ...X, failIfUnavailable: !0 }
          : X,
      Q = J.settings;
    if (Q && !BR(Q))
      throw Error(
        "Cannot use both a settings file path and the sandbox option. Include the sandbox configuration in your settings file instead.",
      );
    let W = { sandbox: Y };
    if (Q)
      try {
        W = { ...l$(Q), sandbox: Y };
      } catch {}
    J.settings = w$(W);
  }
  return J;
}
var FR = 2000,
  V7 = new Set(),
  dN = !1;
function jR() {
  for (let $ of V7) if (!$.killed) $.kill("SIGTERM");
}
function LR($) {
  if ((V7.add($), !dN)) ((dN = !0), process.on("exit", jR));
}
class F9 {
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
    if (((this.abortController = $.abortController || Q0()), $.deferSpawn))
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
    return Y0() ? "bun" : "node";
  }
  spawnLocalProcess($) {
    let { command: X, args: J, cwd: Y, env: Q, signal: W } = $,
      z =
        J6(Q.DEBUG_CLAUDE_AGENT_SDK) || this.options.stderr ? "pipe" : "ignore",
      G = qR(X, J, {
        cwd: Y,
        stdio: ["pipe", "pipe", z],
        signal: W,
        env: Q,
        windowsHide: !0,
      });
    if (J6(Q.DEBUG_CLAUDE_AGENT_SDK) || this.options.stderr)
      G.stderr.on("data", (U) => {
        let K = U.toString();
        if ((Q6(K), this.options.stderr)) this.options.stderr(K);
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
          env: H = { ...process.env },
          thinkingConfig: U,
          maxTurns: K,
          maxBudgetUsd: V,
          taskBudget: N,
          model: O,
          fallbackModel: w,
          jsonSchema: B,
          permissionMode: F,
          allowDangerouslySkipPermissions: j,
          permissionPromptToolName: I,
          continueConversation: Z,
          resume: _,
          settingSources: T,
          skills: O$,
          disallowedTools: x$ = [],
          tools: O6,
          mcpServers: z4,
          strictMcpConfig: G4,
          canUseTool: a6,
          includePartialMessages: $0,
          plugins: _4,
          sandbox: X0,
        } = this.options,
        { allowedTools: q1 = [] } = this.options;
      if (O$ !== void 0) {
        let k$ = O$ === "all" ? ["Skill"] : O$.map((u$) => `Skill(${u$})`),
          _6 = new Set(q1);
        q1 = [...q1, ...k$.filter((u$) => !_6.has(u$))];
      }
      let l = [
        "--output-format",
        "stream-json",
        "--verbose",
        "--input-format",
        "stream-json",
      ];
      if (U) {
        switch (U.type) {
          case "enabled":
            if (U.budgetTokens === void 0) l.push("--thinking", "adaptive");
            else l.push("--max-thinking-tokens", U.budgetTokens.toString());
            break;
          case "disabled":
            l.push("--thinking", "disabled");
            break;
          case "adaptive":
            l.push("--thinking", "adaptive");
            break;
        }
        if (U.type !== "disabled" && U.display)
          l.push("--thinking-display", U.display);
      }
      if (this.options.effort) l.push("--effort", this.options.effort);
      if (K) l.push("--max-turns", K.toString());
      if (V !== void 0) l.push("--max-budget-usd", V.toString());
      if (N) l.push("--task-budget", N.total.toString());
      if (O) l.push("--model", O);
      if (X) l.push("--agent", X);
      if (J && J.length > 0) l.push("--betas", J.join(","));
      if (B) l.push("--json-schema", w$(B));
      if (this.options.debugFile)
        l.push("--debug-file", this.options.debugFile);
      else if (this.options.debug) l.push("--debug");
      if (!this.options.debugFile && !this.options.spawnClaudeCodeProcess) {
        let k$ = IN();
        if (k$) l.push("--debug-file", k$);
      }
      if (a6) {
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
      if (q1.length > 0) l.push("--allowedTools", q1.join(","));
      if (x$.length > 0) l.push("--disallowedTools", x$.join(","));
      if (O6 !== void 0)
        if (Array.isArray(O6))
          if (O6.length === 0) l.push("--tools", "");
          else l.push("--tools", O6.join(","));
        else l.push("--tools", "default");
      if (z4 && Object.keys(z4).length > 0)
        l.push("--mcp-config", w$({ mcpServers: z4 }));
      if (T !== void 0) l.push(`--setting-sources=${T.join(",")}`);
      if (G4) l.push("--strict-mcp-config");
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
      if ($0) l.push("--include-partial-messages");
      if (this.options.sessionMirror) l.push("--session-mirror");
      for (let k$ of $) l.push("--add-dir", k$);
      if (_4 && _4.length > 0)
        for (let k$ of _4)
          if (k$.type === "local") l.push("--plugin-dir", k$.path);
          else throw Error(`Unsupported plugin type: ${k$.type}`);
      if (this.options.forkSession) l.push("--fork-session");
      if (this.options.resumeSessionAt)
        l.push("--resume-session-at", this.options.resumeSessionAt);
      if (this.options.sessionId)
        l.push("--session-id", this.options.sessionId);
      if (this.options.persistSession === !1)
        l.push("--no-session-persistence");
      if (this.options.managedSettings)
        l.push("--managed-settings", this.options.managedSettings);
      let j8 = { ...(z ?? {}) };
      if (this.options.settings) j8.settings = this.options.settings;
      let rY = cN(j8, X0);
      for (let [k$, _6] of Object.entries(rY))
        if (_6 === null) l.push(`--${k$}`);
        else l.push(`--${k$}`, _6);
      if (!H.CLAUDE_CODE_ENTRYPOINT) H.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
      if ((delete H.NODE_OPTIONS, J6(H.DEBUG_CLAUDE_AGENT_SDK))) H.DEBUG = "1";
      else delete H.DEBUG;
      let J0 = MR(G),
        L8 = J0 ? G : Q,
        M8 = J0 ? [...W, ...l] : [...W, G, ...l],
        EJ = {
          command: L8,
          args: M8,
          cwd: Y,
          env: H,
          signal: this.abortController.signal,
        };
      if (this.options.spawnClaudeCodeProcess)
        (Q6(`Spawning Claude Code (custom): ${L8} ${M8.join(" ")}`),
          (this.process = this.options.spawnClaudeCodeProcess(EJ)));
      else
        (Q6(`Spawning Claude Code: ${L8} ${M8.join(" ")}`),
          (this.process = this.spawnLocalProcess(EJ)));
      ((this.processStdin = this.process.stdin),
        (this.processStdout = this.process.stdout),
        LR(this.process),
        (this.abortHandler = () => {
          if (this.process && !this.process.killed)
            this.process.kill("SIGTERM");
        }),
        this.abortController.signal.addEventListener(
          "abort",
          this.abortHandler,
        ),
        this.process.on("error", (k$) => {
          if (((this.ready = !1), this.abortController.signal.aborted))
            this.exitError = new X6("Claude Code process aborted by user");
          else if (p4(k$)) {
            let _6 = J0
              ? `Claude Code native binary not found at ${G}. Please ensure Claude Code is installed via native installer or specify a valid path with options.pathToClaudeCodeExecutable.`
              : `Claude Code executable not found at ${G}. Is options.pathToClaudeCodeExecutable set?`;
            ((this.exitError = ReferenceError(_6)), Q6(this.exitError.message));
          } else
            ((this.exitError = Error(
              `Failed to spawn Claude Code process: ${k$.message}`,
            )),
              Q6(this.exitError.message));
        }),
        this.process.on("exit", (k$, _6) => {
          if (((this.ready = !1), this.abortController.signal.aborted))
            this.exitError = new X6("Claude Code process aborted by user");
          else {
            let u$ = this.getProcessExitError(k$, _6);
            if (u$) ((this.exitError = u$), Q6(u$.message));
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
    if (this.abortController.signal.aborted) throw new X6("Operation aborted");
    if (this.spawnResolve) {
      this.pendingWrites.push($);
      return;
    }
    if (!this.ready || !this.processStdin)
      throw Error("ProcessTransport is not ready for writing");
    if (this.processStdin.writableEnded) {
      Q6("[ProcessTransport] Dropping write to ended stdin stream");
      return;
    }
    if (this.process?.killed || this.process?.exitCode !== null)
      throw Error("Cannot write to terminated process");
    if (this.exitError)
      throw Error(
        `Cannot write to process that exited with error: ${this.exitError.message}`,
      );
    Q6(`[ProcessTransport] Writing to stdin: ${$.substring(0, 100)}`);
    try {
      if (!this.processStdin.write($))
        Q6("[ProcessTransport] Write buffer full, data queued");
    } catch (X) {
      throw (
        (this.ready = !1),
        Error(`Failed to write to process stdin: ${M0(X)}`)
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
        FR,
        $,
      ).unref(),
        $.once("exit", () => V7.delete($)));
    else if ($) V7.delete($);
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
    let $ = DR({ input: this.processStdout }),
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
            Y = l$(J);
          } catch (Q) {
            Q6(`Non-JSON stdout: ${J}`);
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
          X(new X6("Operation aborted"));
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
function MR($) {
  return ![".js", ".mjs", ".tsx", ".ts", ".jsx"].some((J) => $.endsWith(J));
}
function N7($, X = process.platform, J = process.arch) {
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
class P1 {
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
class cW {
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
class j9 {
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
  inputStream = new P1();
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
      uuid: q9(),
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
  constructor($, X, J, Y, Q, W = new Map(), z, G, H, U) {
    this.transport = $;
    this.isSingleUserTurn = X;
    this.canUseTool = J;
    this.hooks = Y;
    this.abortController = Q;
    this.jsonSchema = z;
    this.initConfig = G;
    this.onElicitation = H;
    this.getOAuthToken = U;
    for (let [K, V] of W) this.connectSdkMcpServer(K, V);
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
        if (
          $.type === "system" &&
          ($.subtype === "post_turn_summary" || $.subtype === "task_summary")
        ) {
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
      if (this.lastErrorResultText !== void 0 && !($ instanceof X6)) {
        let X = Error(
          `Claude Code returned an error result: ${this.lastErrorResultText}`,
        );
        (S$(
          `[Query.readMessages] Replacing exit error with result text. Original: ${M0($)}`,
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
          w$(Y) +
            `
`,
        ),
      );
    } catch (J) {
      if (this.cleanupPerformed) return;
      let Y = {
        type: "control_response",
        response: { subtype: "error", request_id: $.request_id, error: M0(J) },
      };
      try {
        await Promise.resolve(
          this.transport.write(
            w$(Y) +
              `
`,
          ),
        );
      } catch (Q) {
        S$(
          `[Query.handleControlRequest] Error-response write failed: ${M0(Q)}`,
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
            for (let H of z.hooks) {
              let U = `hook_${this.nextCallbackId++}`;
              (this.hookCallbacks.set(U, H), G.push(U));
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
        skills: Array.isArray(this.initConfig?.skills)
          ? this.initConfig.skills
          : void 0,
        promptSuggestions: this.initConfig?.promptSuggestions,
        agentProgressSummaries: this.initConfig?.agentProgressSummaries,
        forwardSubagentText: this.initConfig?.forwardSubagentText,
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
  async submitFeedback($, X) {
    return (
      await this.request({
        subtype: "submit_feedback",
        description: $,
        surface: X?.surface,
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
            w$(J) +
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
  async mcpAuthenticate($, X) {
    return (
      await this.request({
        subtype: "mcp_authenticate",
        serverName: $,
        redirectUri: X,
      })
    ).response;
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
          encoding: X?.encoding,
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
    for (let [G, H] of Object.entries($))
      if (H.type === "sdk" && "instance" in H) X[G] = H.instance;
      else J[G] = H;
    let Y = new Set(this.sdkMcpServerInstances.keys()),
      Q = new Set(Object.keys(X));
    for (let G of Y) if (!Q.has(G)) await this.disconnectSdkMcpServer(G);
    for (let [G, H] of Object.entries(X))
      if (!Y.has(G)) this.connectSdkMcpServer(G, H);
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
            w$(J) +
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
      if (!(X instanceof X6)) throw X;
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
    let J = new cW((Y) => this.sendMcpServerMessageToCli($, Y));
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
      request_id: q9(),
      request: { subtype: "mcp_message", server_name: $, message: X },
    };
    Promise.resolve(
      this.transport.write(
        w$(J) +
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
        H = (K) => {
          (G(), W(K));
        },
        U = (K) => {
          (G(), z(K));
        };
      if (
        (this.pendingMcpResponses.set(Q, { resolve: H, reject: U }),
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
var dW = 500,
  pW = 1048576;
var AR = [200, 800];
class iW {
  send;
  sendTimeoutMs;
  onError;
  maxPendingEntries;
  maxPendingBytes;
  backoffMs;
  pending = [];
  pendingEntries = 0;
  pendingBytes = 0;
  flushPromise = null;
  constructor($, X = 60000, J, Y = dW, Q = pW, W = AR) {
    this.send = $;
    this.sendTimeoutMs = X;
    this.onError = J;
    this.maxPendingEntries = Y;
    this.maxPendingBytes = Q;
    this.backoffMs = W;
  }
  enqueue($, X) {
    let J = w$(X).length;
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
    for (let Y of $) {
      let Q = X.get(Y.filePath);
      if (Q) Q.push(...Y.entries);
      else X.set(Y.filePath, Y.entries.slice());
    }
    let J = this.backoffMs.length + 1;
    for (let [Y, Q] of X) {
      let W = `SessionStore.append() timed out after ${this.sendTimeoutMs}ms for ${Y}`,
        z,
        G = 1;
      for (; G <= J; G++)
        try {
          (await H4(this.send(Y, Q), this.sendTimeoutMs, W), (z = void 0));
          break;
        } catch (H) {
          if (((z = d4(H)), z.message === W)) break;
          let U = this.backoffMs[G - 1];
          if (U === void 0) break;
          await vJ(U);
        }
      if (z) {
        S$(
          `[TranscriptMirrorBatcher] flush failed for ${Y} after ${G} attempt(s): ${z}`,
          { level: "error" },
        );
        try {
          this.onError?.(Y, z);
        } catch (H) {
          S$(`[TranscriptMirrorBatcher] onError callback threw: ${H}`, {
            level: "error",
          });
        }
      }
    }
  }
}
var L7 = SJ(uz(), 1);
import { createRequire as hE } from "module";
import { fileURLToPath as uE } from "url";
var mE = 5000;
class mz {
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
    this.inputStream = new P1();
    let X = $.pathToClaudeCodeExecutable;
    if (!X) {
      let W = uE(import.meta.url),
        z = hE(W),
        G = N7((H) => z.resolve(H));
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
    if ((L7.propagation.inject(L7.context.active(), Y), "traceparent" in Y)) {
      for (let W of ["TRACEPARENT", "TRACESTATE"])
        if (!(W in ($.env ?? {}))) delete J[W];
    }
    for (let [W, z] of Object.entries(Y)) {
      let G = W.toUpperCase();
      if (!(G in ($.env ?? {}))) J[G] = z;
    }
    this.abortController = Q0();
    let Q = new F9({
      abortController: this.abortController,
      pathToClaudeCodeExecutable: X,
      cwd: $.cwd,
      env: J,
      executable: $.executable ?? (Y0() ? "bun" : "node"),
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
    ((this.query = new j9(
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
      }, mE).unref());
  }
  async [Symbol.asyncDispose]() {
    this.close();
  }
}
function lz($) {
  return new mz($);
}
function uB($, X) {
  return new mz({ ...X, resume: $ });
}
var nY = SJ(uz(), 1);
function lE($) {
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
function k1($) {
  if (typeof $ === "string") return lE($);
  if (Array.isArray($)) return $.map(k1);
  if ($ !== null && typeof $ === "object") {
    let X = {};
    for (let [J, Y] of Object.entries($)) X[k1(J)] = k1(Y);
    return X;
  }
  return $;
}
import { readFile as US } from "fs/promises";
import { once as lB } from "events";
import { createWriteStream as iE } from "fs";
import {
  open as cB,
  readdir as cz,
  realpath as nE,
  stat as rE,
} from "fs/promises";
import { join as R9 } from "path";
import { execFile as cE } from "child_process";
import { promisify as dE } from "util";
var pE = dE(cE);
async function q4($) {
  try {
    let { stdout: X } = await pE("git", ["worktree", "list", "--porcelain"], {
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
function mB($) {
  let X = 0;
  for (let J = 0; J < $.length; J++) X = ((X << 5) - X + $.charCodeAt(J)) | 0;
  return X;
}
var h6 = 65536,
  oE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function U$($) {
  if (typeof $ !== "string") return null;
  return oE.test($) ? $ : null;
}
function dB($) {
  if (!$.includes("\\")) return $;
  try {
    return JSON.parse(`"${$}"`);
  } catch {
    return $;
  }
}
function I7($, X) {
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
      if ($[z] === '"') return dB($.slice(W, z));
      z++;
    }
  }
  return;
}
function W6($, X) {
  let J = [`"${X}":"`, `"${X}": "`],
    Y,
    Q = -1;
  for (let W of J) {
    let z = 0;
    while (!0) {
      let G = $.indexOf(W, z);
      if (G < 0) break;
      let H = G + W.length,
        U = H;
      while (U < $.length) {
        if ($[U] === "\\") {
          U += 2;
          continue;
        }
        if ($[U] === '"') {
          if (G > Q) ((Y = dB($.slice(H, U))), (Q = G));
          break;
        }
        U++;
      }
      z = U + 1;
    }
  }
  return Y;
}
async function E9($, X) {
  let J = iE($, { mode: 384 });
  try {
    for (let Y of X)
      if (
        !J.write(
          JSON.stringify(Y) +
            `
`,
        )
      )
        await lB(J, "drain");
    (J.end(), await lB(J, "finish"));
  } catch (Y) {
    throw (J.destroy(), Y);
  }
}
function Z7($) {
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
        z = R8(W, J);
      if (z !== void 0) return z;
    } catch {
      continue;
    }
  }
  return J.commandFallback;
}
function pB($) {
  let X = { commandFallback: "" };
  for (let J of $) {
    if (typeof J !== "object" || J === null) continue;
    let Y = R8(J, X);
    if (Y !== void 0) return Y;
  }
  return X.commandFallback;
}
async function b7($) {
  try {
    let X = await cB($, "r");
    try {
      let J = await X.stat(),
        Y = Buffer.allocUnsafe(h6),
        Q = await X.read(Y, 0, h6, 0);
      if (Q.bytesRead === 0) return null;
      let W = Y.toString("utf8", 0, Q.bytesRead),
        z = Math.max(0, J.size - h6),
        G = W;
      if (z > 0) {
        let H = await X.read(Y, 0, h6, z);
        G = Y.toString("utf8", 0, H.bytesRead);
      }
      return { mtime: J.mtime.getTime(), size: J.size, head: W, tail: G };
    } finally {
      await X.close();
    }
  } catch {
    return null;
  }
}
var P0 = 200;
function tE($) {
  return Math.abs(mB($)).toString(36);
}
function x1($) {
  let X = $.replace(/[^a-zA-Z0-9]/g, "-");
  if (X.length <= P0) return X;
  return `${X.slice(0, P0)}-${tE($)}`;
}
function u6() {
  return R9(y4(), "projects");
}
function aE($) {
  return R9(u6(), x1($));
}
async function i4($) {
  try {
    return (await nE($)).normalize("NFC");
  } catch {
    return $.normalize("NFC");
  }
}
async function Y6($) {
  let X = aE($),
    J = [];
  try {
    (await cz(X), J.push(X));
  } catch {}
  let Y = x1($);
  if (Y.length <= P0) return J;
  let Q = Y.slice(0, P0) + "-",
    W = u6();
  try {
    for (let z of await cz(W, { withFileTypes: !0 })) {
      if (!z.isDirectory() || !z.name.startsWith(Q)) continue;
      let G = R9(W, z.name);
      if (G !== X) J.push(G);
    }
  } catch {}
  return J;
}
async function n4($, X) {
  let J = `${$}.jsonl`;
  async function Y(z, G) {
    let H = R9(z, J);
    try {
      let U = await rE(H);
      if (U.size > 0) return { filePath: H, projectPath: G, fileSize: U.size };
    } catch {}
    return;
  }
  if (X) {
    let z = await i4(X);
    for (let H of await Y6(z)) {
      let U = await Y(H, z);
      if (U) return U;
    }
    let G;
    try {
      G = await q4(z);
    } catch {
      G = [];
    }
    for (let H of G) {
      if (H === z) continue;
      for (let U of await Y6(H)) {
        let K = await Y(U, H);
        if (K) return K;
      }
    }
    return;
  }
  let Q = u6(),
    W;
  try {
    W = await cz(Q);
  } catch {
    return;
  }
  for (let z of W) {
    let G = await Y(R9(Q, z), void 0);
    if (G) return G;
  }
  return;
}
var sE = 1048576,
  iB = 5242880,
  eE;
function $S() {
  return (eE ??= Buffer.from('"compact_boundary"'));
}
function nB($) {
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
function _1($, X, J, Y) {
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
function M7($, X, J, Y) {
  return Y - J >= X.length && $.compare(X, 0, X.length, J, J + X.length) === 0;
}
var A7 = Buffer.from('{"type":"attribution-snapshot"'),
  XS = Buffer.from('{"type":"system"'),
  P9 = 10,
  JS = Buffer.from([P9]),
  QS = 256;
function YS($, X, J) {
  if (
    (($.straddleSnapCarryLen = 0),
    ($.straddleSnapTailEnd = 0),
    $.carryLen === 0)
  )
    return 0;
  let Y = $.carryBuf,
    Q = X.indexOf(P9);
  if (Q === -1 || Q >= J) return 0;
  let W = Q + 1;
  if (M7(Y, A7, 0, $.carryLen))
    (($.straddleSnapCarryLen = $.carryLen),
      ($.straddleSnapTailEnd = W),
      ($.lastSnapSrc = null));
  else if ($.carryLen < A7.length) return 0;
  else {
    if (M7(Y, XS, 0, $.carryLen)) {
      let z = nB(
        Y.toString("utf-8", 0, $.carryLen) + X.toString("utf-8", 0, Q),
      );
      if (z?.hasPreservedSegment) $.hasPreservedSegment = !0;
      else if (z)
        (($.out.len = 0),
          ($.boundaryStartOffset = $.bufFileOff),
          ($.hasPreservedSegment = !1),
          ($.lastSnapSrc = null));
    }
    (_1($.out, Y, 0, $.carryLen), _1($.out, X, 0, W));
  }
  return (($.bufFileOff += $.carryLen + W), ($.carryLen = 0), W);
}
function WS($, X, J) {
  let Y = X.indexOf(J),
    Q = 0,
    W = 0,
    z = -1,
    G = -1,
    H = X.indexOf(P9);
  while (H !== -1) {
    let U = H + 1;
    if (Y !== -1 && Y < W) Y = X.indexOf(J, W);
    if (M7(X, A7, W, U)) (_1($.out, X, Q, W), (z = W), (G = U), (Q = U));
    else if (Y >= W && Y < Math.min(W + QS, U)) {
      let K = nB(X.toString("utf-8", W, H));
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
    ((W = U), (H = X.indexOf(P9, W)));
  }
  return (
    _1($.out, X, Q, W),
    { lastSnapStart: z, lastSnapEnd: G, trailStart: W }
  );
}
function zS($, X, J, Y, Q) {
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
function GS($, X, J) {
  if ((($.carryLen = X.length - J), $.carryLen > 0)) {
    if ($.carryBuf === void 0 || $.carryLen > $.carryBuf.length)
      $.carryBuf = Buffer.allocUnsafe($.carryLen);
    X.copy($.carryBuf, 0, J, X.length);
  }
}
function HS($) {
  if ($.carryLen > 0) {
    let X = $.carryBuf;
    if (M7(X, A7, 0, $.carryLen))
      (($.lastSnapSrc = X), ($.lastSnapLen = $.carryLen));
    else _1($.out, X, 0, $.carryLen);
  }
  if ($.lastSnapSrc) {
    if ($.out.len > 0 && $.out.buf[$.out.len - 1] !== P9) _1($.out, JS, 0, 1);
    _1($.out, $.lastSnapSrc, 0, $.lastSnapLen);
  }
}
async function rB($, X) {
  let J = $S(),
    Y = sE,
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
    z = await cB($, "r");
  try {
    let G = 0;
    while (G < X) {
      let { bytesRead: H } = await z.read(W, 0, Math.min(Y, X - G), G);
      if (H === 0) break;
      G += H;
      let U = YS(Q, W, H),
        K;
      if (Q.carryLen > 0) {
        let N = Q.carryLen + (H - U);
        ((K = Buffer.allocUnsafe(N)),
          Q.carryBuf.copy(K, 0, 0, Q.carryLen),
          W.copy(K, Q.carryLen, U, H));
      } else K = W.subarray(U, H);
      let V = WS(Q, K, J);
      (zS(Q, K, W, V.lastSnapStart, V.lastSnapEnd),
        GS(Q, K, V.trailStart),
        (Q.bufFileOff += V.trailStart));
    }
    HS(Q);
  } finally {
    await z.close();
  }
  return {
    boundaryStartOffset: Q.boundaryStartOffset,
    postBoundaryBuf: Q.out.buf.subarray(0, Q.out.len),
    hasPreservedSegment: Q.hasPreservedSegment,
  };
}
async function KS($, X) {
  try {
    if (X > iB && !J6(process.env.CLAUDE_CODE_DISABLE_PRECOMPACT_SKIP))
      return (await rB($, X)).postBoundaryBuf;
    return await US($);
  } catch {
    return null;
  }
}
function VS($) {
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
      let H = l$(G),
        U = H.type;
      if (
        (U === "user" ||
          U === "assistant" ||
          U === "progress" ||
          U === "system" ||
          U === "attachment") &&
        typeof H.uuid === "string"
      )
        X.push(H);
    } catch {}
  }
  return X;
}
function NS($) {
  let X = new Map();
  for (let N of $) X.set(N.uuid, N);
  for (let N of X.values()) {
    if (N.type !== "system" || N.subtype !== "compact_boundary") continue;
    let O = N.compactMetadata?.preservedSegment;
    if (!O) continue;
    let w = X.get(O.headUuid);
    if (w) X.set(O.headUuid, { ...w, parentUuid: O.anchorUuid });
    for (let [B, F] of X)
      if (F.parentUuid === O.anchorUuid && B !== O.headUuid)
        X.set(B, { ...F, parentUuid: O.tailUuid });
  }
  let J = new Map();
  for (let N = 0; N < $.length; N++) J.set($[N].uuid, N);
  let Y = new Set();
  for (let N of X.values()) if (N.parentUuid) Y.add(N.parentUuid);
  let Q = [...X.values()].filter((N) => !Y.has(N.uuid)),
    W = [];
  for (let N of Q) {
    let O = N,
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
  let z = W.filter((N) => !N.isSidechain && !N.teamName && !N.isMeta),
    G = (N) =>
      N.reduce((O, w) =>
        (J.get(w.uuid) ?? -1) > (J.get(O.uuid) ?? -1) ? w : O,
      ),
    H = z.length > 0 ? G(z) : G(W),
    U = [],
    K = new Set(),
    V = X.get(H.uuid);
  while (V) {
    if (K.has(V.uuid)) break;
    (K.add(V.uuid),
      U.push(V),
      (V = V.parentUuid ? X.get(V.parentUuid) : void 0));
  }
  return (U.reverse(), wS(X, U, K));
}
function dz($) {
  if ($.type !== "assistant") return;
  let X = $.message;
  if (typeof X !== "object" || X === null) return;
  let J = X.id;
  return typeof J === "string" ? J : void 0;
}
function OS($) {
  if ($.type !== "user" || !$.parentUuid) return !1;
  let X = $.message;
  if (typeof X !== "object" || X === null) return !1;
  let J = X.content;
  if (!Array.isArray(J)) return !1;
  return J.some(
    (Y) => typeof Y === "object" && Y !== null && Y.type === "tool_result",
  );
}
function wS($, X, J) {
  let Y = X.filter((V) => V.type === "assistant");
  if (Y.length === 0) return X;
  let Q = new Map();
  for (let V of Y) {
    let N = dz(V);
    if (N) Q.set(N, V);
  }
  let W = new Map(),
    z = new Map();
  for (let V of $.values()) {
    let N = dz(V);
    if (N) {
      let O = W.get(N);
      if (O) O.push(V);
      else W.set(N, [V]);
    } else if (OS(V)) {
      let O = V.parentUuid,
        w = z.get(O);
      if (w) w.push(V);
      else z.set(O, [V]);
    }
  }
  let G = new Set(),
    H = new Map(),
    U = 0;
  for (let V of Y) {
    let N = dz(V);
    if (!N || G.has(N)) continue;
    G.add(N);
    let O = W.get(N) ?? [V],
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
    let j = Q.get(N),
      I = [...w, ...B];
    for (let Z of I) J.add(Z.uuid);
    ((U += I.length), H.set(j.uuid, I));
  }
  if (U === 0) return X;
  let K = [];
  for (let V of X) {
    K.push(V);
    let N = H.get(V.uuid);
    if (N) K.push(...N);
  }
  return K;
}
function BS($, X) {
  if ($.type === "user" || $.type === "assistant");
  else if ($.type === "system" && X);
  else return !1;
  if ($.isMeta) return !1;
  if ($.isSidechain) return !1;
  if ($.teamName) return !1;
  return !0;
}
function pz($) {
  return {
    type: $.type,
    uuid: $.uuid,
    session_id: $.sessionId,
    message: $.message,
    parent_tool_use_id: null,
    timestamp: $.timestamp,
  };
}
function iz($, X) {
  let J = X?.offset ?? 0;
  if (X?.limit !== void 0 && X.limit > 0) return $.slice(J, J + X.limit);
  if (J > 0) return $.slice(J);
  return $;
}
function oB($, X) {
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
  return tB(J, X);
}
function tB($, X) {
  let J = NS($),
    Y = X?.includeSystemMessages ?? !1,
    W = J.filter((z) => BS(z, Y)).map(pz);
  return iz(W, X);
}
async function aB($, X) {
  if (!U$($)) return [];
  let J = await n4($, X?.dir);
  if (!J) return [];
  let Y = await KS(J.filePath, J.fileSize);
  if (!Y) return [];
  return tB(VS(Y), X);
}
import { readdir as nz, stat as qS } from "fs/promises";
import { basename as DS, join as rz } from "path";
function E0($, X, J) {
  let { head: Y, tail: Q, mtime: W, size: z } = X,
    G = Y.indexOf(`
`),
    H = G >= 0 ? Y.slice(0, G) : Y;
  if (H.includes('"isSidechain":true') || H.includes('"isSidechain": true'))
    return null;
  let U =
      W6(Q, "customTitle") ||
      W6(Y, "customTitle") ||
      W6(Q, "aiTitle") ||
      W6(Y, "aiTitle") ||
      void 0,
    K = Z7(Y) || void 0,
    V = I7(Y, "timestamp"),
    N;
  if (V) {
    let I = Date.parse(V);
    if (!Number.isNaN(I)) N = I;
  }
  let O = U || W6(Q, "lastPrompt") || W6(Q, "summary") || K;
  if (!O) return null;
  let w = W6(Q, "gitBranch") || I7(Y, "gitBranch") || void 0,
    B = I7(Y, "cwd") || J || void 0,
    F = Q.split(
      `
`,
    ).findLast((I) => I.includes('"type":"tag"') && I.includes('"tag":"')),
    j = F ? W6(F, "tag") || void 0 : void 0;
  return {
    sessionId: $,
    summary: O,
    lastModified: W,
    fileSize: z,
    customTitle: U,
    firstPrompt: K,
    gitBranch: w,
    cwd: B,
    tag: j,
    createdAt: N,
  };
}
async function S9($, X, J) {
  let Y;
  try {
    Y = await nz($);
  } catch {
    return [];
  }
  return (
    await Promise.all(
      Y.map(async (W) => {
        if (!W.endsWith(".jsonl")) return null;
        let z = U$(W.slice(0, -6));
        if (!z) return null;
        let G = rz($, W);
        if (!X) return { sessionId: z, filePath: G, mtime: 0, projectPath: J };
        try {
          let H = await qS(G);
          return {
            sessionId: z,
            filePath: G,
            mtime: H.mtime.getTime(),
            projectPath: J,
          };
        } catch {
          return null;
        }
      }),
    )
  ).filter((W) => W !== null);
}
async function sB($) {
  let X = await b7($.filePath);
  if (!X) return null;
  let J = E0($.sessionId, X, $.projectPath);
  if (!J) return null;
  if ($.mtime) J.lastModified = $.mtime;
  return J;
}
var FS = 32;
function jS($, X) {
  if (X.mtime !== $.mtime) return X.mtime - $.mtime;
  return X.sessionId < $.sessionId ? -1 : X.sessionId > $.sessionId ? 1 : 0;
}
async function LS($, X, J) {
  $.sort(jS);
  let Y = [],
    Q = X && X > 0 ? X : 1 / 0,
    W = 0,
    z = new Set();
  for (let G = 0; G < $.length && Y.length < Q; ) {
    let H = Math.min(G + FS, $.length),
      U = $.slice(G, H),
      K = await Promise.all(U.map(sB));
    for (let V = 0; V < K.length && Y.length < Q; V++) {
      G++;
      let N = K[V];
      if (!N) continue;
      if (z.has(N.sessionId)) continue;
      if ((z.add(N.sessionId), W < J)) {
        W++;
        continue;
      }
      Y.push(N);
    }
  }
  return Y;
}
async function MS($) {
  let X = await Promise.all($.map(sB)),
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
async function AS($, X, J) {
  let Y = await i4($),
    Q;
  if (X)
    try {
      Q = await q4(Y);
    } catch {
      Q = [];
    }
  else Q = [];
  if (Q.length <= 1) {
    let V = [];
    for (let N of await Y6(Y)) V.push(...(await S9(N, J, Y)));
    return V;
  }
  let W = u6(),
    z = process.platform === "win32",
    G = Q.map((V) => {
      let N = x1(V);
      return { path: V, prefix: z ? N.toLowerCase() : N };
    });
  G.sort((V, N) => N.prefix.length - V.prefix.length);
  let H;
  try {
    H = await nz(W, { withFileTypes: !0 });
  } catch {
    let V = [];
    for (let N of await Y6(Y)) V.push(...(await S9(N, J, Y)));
    return V;
  }
  let U = [],
    K = new Set();
  for (let V of await Y6(Y)) {
    let N = DS(V);
    (K.add(z ? N.toLowerCase() : N), U.push(...(await S9(V, J, Y))));
  }
  for (let V of H) {
    if (!V.isDirectory()) continue;
    let N = z ? V.name.toLowerCase() : V.name;
    if (K.has(N)) continue;
    for (let { path: O, prefix: w } of G)
      if (N === w || (w.length >= P0 && N.startsWith(w + "-"))) {
        (K.add(N), U.push(...(await S9(rz(W, V.name), J, O))));
        break;
      }
  }
  return U;
}
async function IS($) {
  let X = u6(),
    J;
  try {
    J = await nz(X, { withFileTypes: !0 });
  } catch {
    return [];
  }
  return (
    await Promise.all(
      J.filter((Q) => Q.isDirectory()).map((Q) => S9(rz(X, Q.name), $)),
    )
  ).flat();
}
async function eB($) {
  let { dir: X, limit: J, offset: Y, includeWorktrees: Q } = $ ?? {},
    W = Y ?? 0,
    z = (J !== void 0 && J > 0) || W > 0,
    G = X ? await AS(X, Q ?? !0, z) : await IS(z);
  if (!z) return MS(G);
  return LS(G, J, W);
}
async function $q($, X = {}) {
  let J = U$($);
  if (!J) return;
  let Y = await n4(J, X.dir);
  if (!Y) return;
  let Q = await b7(Y.filePath);
  if (!Q) return;
  return E0(J, Q, Y.projectPath) ?? void 0;
}
import { constants as Xq } from "fs";
import { open as ZS, readdir as Qq, rm as Jq, stat as bS } from "fs/promises";
import { join as S0 } from "path";
async function Yq($, X, J = {}) {
  if (!U$($)) throw Error(`Invalid sessionId: ${$}`);
  if (!X.trim()) throw Error("title must be non-empty");
  let Y =
    w$({ type: "custom-title", customTitle: X.trim(), sessionId: $ }) +
    `
`;
  await Gq($, Y, J);
}
async function Wq($, X, J = {}) {
  if (!U$($)) throw Error(`Invalid sessionId: ${$}`);
  if (X !== null) {
    let Q = k1(X).trim();
    if (!Q) throw Error("tag must be non-empty (use null to clear)");
    X = Q;
  }
  let Y =
    w$({ type: "tag", tag: X ?? "", sessionId: $ }) +
    `
`;
  await Gq($, Y, J);
}
async function zq($, X = {}) {
  if (!U$($)) throw Error(`Invalid sessionId: ${$}`);
  for (let J of await RS(X)) {
    let Y = S0(J, `${$}.jsonl`),
      Q;
    try {
      ({ size: Q } = await bS(Y));
    } catch (W) {
      let z = g6(W);
      if (z === "ENOENT" || z === "ENOTDIR") continue;
      throw W;
    }
    if (Q === 0) continue;
    (await Jq(Y, { force: !0 }),
      await Jq(S0(J, $), { recursive: !0, force: !0 }));
    return;
  }
  throw Error(
    X.dir
      ? `Session ${$} not found in project directory for ${X.dir}`
      : `Session ${$} not found in any project directory`,
  );
}
async function RS($) {
  if ($.dir) {
    let J = await i4($.dir),
      Y = await Y6(J),
      Q;
    try {
      Q = await q4(J);
    } catch {
      Q = [];
    }
    for (let W of Q) {
      if (W === J) continue;
      Y.push(...(await Y6(W)));
    }
    return Y;
  }
  let X = u6();
  try {
    return (await Qq(X, { withFileTypes: !0 }))
      .filter((Y) => Y.isDirectory() || Y.isSymbolicLink())
      .map((Y) => S0(X, Y.name));
  } catch {
    return [];
  }
}
async function Gq($, X, J) {
  let Y = `${$}.jsonl`;
  if (J.dir) {
    let z = await i4(J.dir);
    for (let H of await Y6(z)) if (await oz(S0(H, Y), X)) return;
    let G;
    try {
      G = await q4(z);
    } catch {
      G = [];
    }
    for (let H of G) {
      if (H === z) continue;
      for (let U of await Y6(H)) if (await oz(S0(U, Y), X)) return;
    }
    throw Error(`Session ${$} not found in project directory for ${J.dir}`);
  }
  let Q = u6(),
    W;
  try {
    W = await Qq(Q);
  } catch {
    throw Error(`Session ${$} not found (no projects directory)`);
  }
  for (let z of W) if (await oz(S0(Q, z, Y), X)) return;
  throw Error(`Session ${$} not found in any project directory`);
}
async function oz($, X) {
  let J;
  try {
    J = await ZS($, Xq.O_WRONLY | Xq.O_APPEND);
  } catch (Y) {
    let Q = g6(Y);
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
import { randomUUID as R7 } from "crypto";
import { readdir as PS, readFile as ES } from "fs/promises";
import { join as tz } from "path";
async function SS($, X) {
  let J = `${$}.jsonl`;
  async function Y(z) {
    try {
      let G = await ES(tz(z, J));
      if (G.length === 0) return null;
      return { buf: G, projectDir: z };
    } catch {
      return null;
    }
  }
  if (X) {
    let z = await i4(X);
    for (let H of await Y6(z)) {
      let U = await Y(H);
      if (U) return U;
    }
    let G;
    try {
      G = await q4(z);
    } catch {
      G = [];
    }
    for (let H of G) {
      if (H === z) continue;
      for (let U of await Y6(H)) {
        let K = await Y(U);
        if (K) return K;
      }
    }
    return null;
  }
  let Q = u6(),
    W;
  try {
    W = await PS(Q);
  } catch {
    return null;
  }
  for (let z of W) {
    let G = await Y(tz(Q, z));
    if (G) return G;
  }
  return null;
}
var vS = new Set(["user", "assistant", "attachment", "system", "progress"]);
function CS($, X) {
  let J = [],
    Y = [],
    Q = 10,
    W = $.length,
    z = 0;
  while (z < W) {
    let G = $.indexOf(10, z);
    if (G === -1) G = W;
    let H = z;
    while (H < G && $[H] <= 32) H++;
    if (((z = G + 1), H >= G)) continue;
    let U = $.toString("utf-8", H, G);
    try {
      Hq(l$(U), X, J, Y);
    } catch {}
  }
  return { transcript: J, contentReplacements: Y };
}
function kS($, X) {
  let J = [],
    Y = [];
  for (let Q of $) {
    if (typeof Q !== "object" || Q === null) continue;
    Hq(Q, X, J, Y);
  }
  return { transcript: J, contentReplacements: Y };
}
function Hq($, X, J, Y) {
  if (vS.has($.type) && typeof $.uuid === "string") J.push($);
  else if (
    $.type === "content-replacement" &&
    $.sessionId === X &&
    Array.isArray($.replacements)
  )
    Y.push(...$.replacements);
}
async function Uq($, X = {}) {
  if (!U$($)) throw Error(`Invalid sessionId: ${$}`);
  if (X.upToMessageId && !U$(X.upToMessageId))
    throw Error(`Invalid upToMessageId: ${X.upToMessageId}`);
  let J = await SS($, X.dir);
  if (!J)
    throw Error(
      X.dir
        ? `Session ${$} not found in project directory for ${X.dir}`
        : `Session ${$} not found`,
    );
  let { entries: Y, forkedSessionId: Q } = _S(J.buf, $, X);
  return (await E9(tz(J.projectDir, `${Q}.jsonl`), Y), { sessionId: Q });
}
function _S($, X, J) {
  let Y = CS($, X);
  return Vq(Y, X, J, () => {
    let W = $.length,
      z = $.toString("utf-8", 0, Math.min(W, h6)),
      G = $.toString("utf-8", Math.max(0, W - h6));
    return (
      W6(G, "customTitle") ||
      W6(z, "customTitle") ||
      W6(G, "aiTitle") ||
      W6(z, "aiTitle") ||
      Z7(z)
    );
  });
}
function Kq($, X, J) {
  let Y = kS($, X);
  return Vq(Y, X, J, () => xS($));
}
function xS($) {
  let X, J;
  for (let Y of $) {
    if (typeof Y !== "object" || Y === null) continue;
    let Q = Y;
    if (typeof Q.customTitle === "string" && Q.customTitle) X = Q.customTitle;
    if (typeof Q.aiTitle === "string" && Q.aiTitle) J = Q.aiTitle;
  }
  return X || J || pB($) || void 0;
}
function Vq($, X, J, Y) {
  let Q = $.transcript.filter((N) => !N.isSidechain);
  if (Q.length === 0) throw Error(`Session ${X} has no messages to fork`);
  if (J.upToMessageId) {
    let N = Q.findIndex((O) => O.uuid === J.upToMessageId);
    if (N === -1)
      throw Error(`Message ${J.upToMessageId} not found in session ${X}`);
    Q = Q.slice(0, N + 1);
  }
  let W = new Map();
  for (let N of Q) W.set(N.uuid, R7());
  let z = Q.filter((N) => N.type !== "progress");
  if (z.length === 0) throw Error(`Session ${X} has no messages to fork`);
  let G = new Map();
  for (let N of Q) G.set(N.uuid, N);
  let H = R7(),
    U = new Date().toISOString(),
    K = [];
  for (let N = 0; N < z.length; N++) {
    let O = z[N],
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
    let j = N === z.length - 1 ? U : O.timestamp,
      I =
        O.logicalParentUuid == null
          ? O.logicalParentUuid
          : (W.get(O.logicalParentUuid) ?? null),
      Z = {
        ...O,
        uuid: w,
        parentUuid: B,
        logicalParentUuid: I,
        sessionId: H,
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
      sessionId: H,
      replacements: $.contentReplacements,
      uuid: R7(),
      timestamp: U,
    });
  let V = J.title?.trim();
  if (!V) V = `${Y() || "Forked session"} (fork)`;
  return (
    K.push({
      type: "custom-title",
      sessionId: H,
      customTitle: V,
      uuid: R7(),
      timestamp: U,
    }),
    { entries: K, forkedSessionId: H }
  );
}
import { readdir as TS, readFile as fS } from "fs/promises";
import { join as az } from "path";
async function Nq($, X) {
  let J = await n4($, X);
  if (!J) return null;
  let Y = J.filePath.replace(/\.jsonl$/, "");
  return az(Y, "subagents");
}
async function Oq($) {
  let X = [];
  async function J(Y) {
    let Q;
    try {
      Q = await TS(Y, { withFileTypes: !0 });
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
        X.push({ agentId: z, filePath: az(Y, W.name) });
      } else if (W.isDirectory()) await J(az(Y, W.name));
  }
  return (await J($), X);
}
function yS($) {
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
      let H = l$(G),
        U = H.type;
      if ((U === "user" || U === "assistant") && typeof H.uuid === "string")
        X.push(H);
    } catch {}
  }
  return X;
}
function gS($) {
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
async function wq($, X) {
  if (!U$($)) return [];
  let J = await Nq($, X?.dir);
  if (!J) return [];
  return (await Oq(J)).map((Q) => Q.agentId);
}
async function Bq($, X, J) {
  if (!U$($)) return [];
  if (!X) return [];
  let Y = await Nq($, J?.dir);
  if (!Y) return [];
  let W = (await Oq(Y)).find((G) => G.agentId === X);
  if (!W) return [];
  let z;
  try {
    z = await fS(W.filePath);
  } catch {
    return [];
  }
  return sz(z, J);
}
function sz($, X) {
  if ($.length === 0) return [];
  let J = yS($),
    Q = gS(J)
      .filter((W) => W.type === "user" || W.type === "assistant")
      .map(pz);
  return iz(Q, X);
}
import { createHash as nS } from "crypto";
import { userInfo as rS } from "os";
function qq($) {
  return [...new Set($)];
}
function hS() {
  return "prod";
}
var uS = "user:inference",
  Fq = "user:profile",
  mS = "org:create_api_key";
var lS = [mS, Fq],
  cS = [
    Fq,
    uS,
    "user:sessions:claude_code",
    "user:mcp_servers",
    "user:file_upload",
  ],
  he = qq([...lS, ...cS]),
  Dq = {
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
var dS = void 0;
function pS() {
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
var iS = [
  "https://beacon.claude-ai.staging.ant.dev",
  "https://claude.fedstart.com",
  "https://claude-staging.fedstart.com",
];
function jq() {
  let $ = (() => {
      switch (hS()) {
        case "local":
          return pS();
        case "staging":
          return dS ?? Dq;
        case "prod":
          return Dq;
      }
    })(),
    X = process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL;
  if (X) {
    let Y = X.replace(/\/$/, "");
    if (!iS.includes(Y))
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
var Lq = "-credentials";
function Mq($ = "") {
  let X = y4(),
    Y = !process.env.CLAUDE_CONFIG_DIR
      ? ""
      : `-${nS("sha256").update(X).digest("hex").substring(0, 8)}`;
  return `Claude Code${jq().OAUTH_FILE_SUFFIX}${$}${Y}`;
}
var oS = /^[a-zA-Z0-9._-]+$/;
function Aq() {
  let $;
  try {
    $ = process.env.USER || rS().username;
  } catch {
    $ = "claude-code-user";
  }
  if (!oS.test($)) return "claude-code-user";
  return $;
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
var Iq;
(function ($) {
  $.mergeShapes = (X, J) => {
    return { ...X, ...J };
  };
})(Iq || (Iq = {}));
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
              let H = W.path[G];
              if (G !== W.path.length - 1) z[H] = z[H] || { _errors: [] };
              else ((z[H] = z[H] || { _errors: [] }), z[H]._errors.push(X(W)));
              ((z = z[H]), G++);
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
var tS = ($, X) => {
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
  r4 = tS;
var aS = r4;
function v9() {
  return aS;
}
var P7 = ($) => {
  let { data: X, path: J, errorMaps: Y, issueData: Q } = $,
    W = [...J, ...(Q.path || [])],
    z = { ...Q, path: W };
  if (Q.message !== void 0) return { ...Q, path: W, message: Q.message };
  let G = "",
    H = Y.filter((U) => !!U)
      .slice()
      .reverse();
  for (let U of H) G = U(z, { data: X, defaultError: G }).message;
  return { ...Q, path: W, message: G };
};
function k($, X) {
  let J = v9(),
    Y = P7({
      issueData: X,
      data: $.data,
      path: $.path,
      errorMaps: [
        $.common.contextualErrorMap,
        $.schemaErrorMap,
        J,
        J === r4 ? void 0 : r4,
      ].filter((Q) => !!Q),
    });
  $.common.issues.push(Y);
}
class i$ {
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
    return i$.mergeObjectSync($, J);
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
  v0 = ($) => ({ status: "dirty", value: $ }),
  t$ = ($) => ({ status: "valid", value: $ }),
  ez = ($) => $.status === "aborted",
  $3 = ($) => $.status === "dirty",
  T1 = ($) => $.status === "valid",
  C9 = ($) => typeof Promise < "u" && $ instanceof Promise;
var y;
(function ($) {
  (($.errToObj = (X) => (typeof X === "string" ? { message: X } : X || {})),
    ($.toString = (X) => (typeof X === "string" ? X : X?.message)));
})(y || (y = {}));
class m6 {
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
var Zq = ($, X) => {
  if (T1(X)) return { success: !0, data: X.value };
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
      let { message: H } = $;
      if (z.code === "invalid_enum_value")
        return { message: H ?? G.defaultError };
      if (typeof G.data > "u") return { message: H ?? Y ?? G.defaultError };
      if (z.code !== "invalid_type") return { message: G.defaultError };
      return { message: H ?? J ?? G.defaultError };
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
      status: new i$(),
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
    if (C9(X)) throw Error("Synchronous parse encountered promise.");
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
    return Zq(J, Y);
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
        return T1(J) ? { value: J.value } : { issues: X.common.issues };
      } catch (J) {
        if (J?.message?.toLowerCase()?.includes("encountered"))
          this["~standard"].async = !0;
        X.common = { issues: [], async: !0 };
      }
    return this._parseAsync({ data: $, path: [], parent: X }).then((J) =>
      T1(J) ? { value: J.value } : { issues: X.common.issues },
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
      Q = await (C9(Y) ? Y : Promise.resolve(Y));
    return Zq(J, Q);
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
    return new X4({
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
    return o4.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return $4.create(this);
  }
  promise() {
    return T0.create(this, this._def);
  }
  or($) {
    return f9.create([this, $], this._def);
  }
  and($) {
    return y9.create(this, $, this._def);
  }
  transform($) {
    return new X4({
      ...o(this._def),
      schema: this,
      typeName: R.ZodEffects,
      effect: { type: "transform", transform: $ },
    });
  }
  default($) {
    let X = typeof $ === "function" ? $ : () => $;
    return new m9({
      ...o(this._def),
      innerType: this,
      defaultValue: X,
      typeName: R.ZodDefault,
    });
  }
  brand() {
    return new Y3({ typeName: R.ZodBranded, type: this, ...o(this._def) });
  }
  catch($) {
    let X = typeof $ === "function" ? $ : () => $;
    return new l9({
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
    return T7.create(this, $);
  }
  readonly() {
    return c9.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
var sS = /^c[^\s-]{8,}$/i,
  eS = /^[0-9a-z]+$/,
  $v = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  Xv =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Jv = /^[a-z0-9_-]{21}$/i,
  Qv = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  Yv =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Wv =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  zv = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
  X3,
  Gv =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Hv =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  Uv =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  Kv =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  Vv = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  Nv = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  bq =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  Ov = new RegExp(`^${bq}$`);
function Rq($) {
  let X = "[0-5]\\d";
  if ($.precision) X = `${X}\\.\\d{${$.precision}}`;
  else if ($.precision == null) X = `${X}(\\.\\d+)?`;
  let J = $.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${X})${J}`;
}
function wv($) {
  return new RegExp(`^${Rq($)}$`);
}
function Bv($) {
  let X = `${bq}T${Rq($)}`,
    J = [];
  if ((J.push($.local ? "Z?" : "Z"), $.offset)) J.push("([+-]\\d{2}:?\\d{2})");
  return ((X = `${X}(${J.join("|")})`), new RegExp(`^${X}$`));
}
function qv($, X) {
  if ((X === "v4" || !X) && Gv.test($)) return !0;
  if ((X === "v6" || !X) && Uv.test($)) return !0;
  return !1;
}
function Dv($, X) {
  if (!Qv.test($)) return !1;
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
function Fv($, X) {
  if ((X === "v4" || !X) && Hv.test($)) return !0;
  if ((X === "v6" || !X) && Kv.test($)) return !0;
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
    let J = new i$(),
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
        if (!Wv.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "email",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "emoji") {
        if (!X3) X3 = new RegExp(zv, "u");
        if (!X3.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "emoji",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "uuid") {
        if (!Xv.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "uuid",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "nanoid") {
        if (!Jv.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "nanoid",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "cuid") {
        if (!sS.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "cuid",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "cuid2") {
        if (!eS.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "cuid2",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "ulid") {
        if (!$v.test($.data))
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
        if (!Bv(Q).test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              code: b.invalid_string,
              validation: "datetime",
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "date") {
        if (!Ov.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              code: b.invalid_string,
              validation: "date",
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "time") {
        if (!wv(Q).test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              code: b.invalid_string,
              validation: "time",
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "duration") {
        if (!Yv.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "duration",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "ip") {
        if (!qv($.data, Q.version))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "ip",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "jwt") {
        if (!Dv($.data, Q.alg))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "jwt",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "cidr") {
        if (!Fv($.data, Q.version))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "cidr",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "base64") {
        if (!Vv.test($.data))
          ((Y = this._getOrReturnCtx($, Y)),
            k(Y, {
              validation: "base64",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "base64url") {
        if (!Nv.test($.data))
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
function jv($, X) {
  let J = ($.toString().split(".")[1] || "").length,
    Y = (X.toString().split(".")[1] || "").length,
    Q = J > Y ? J : Y,
    W = Number.parseInt($.toFixed(Q).replace(".", "")),
    z = Number.parseInt(X.toFixed(Q).replace(".", ""));
  return (W % z) / 10 ** Q;
}
class k0 extends e {
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
      Y = new i$();
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
        if (jv($.data, Q.value) !== 0)
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
k0.create = ($) => {
  return new k0({
    checks: [],
    typeName: R.ZodNumber,
    coerce: $?.coerce || !1,
    ...o($),
  });
};
class _0 extends e {
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
      Y = new i$();
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
    return new _0({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: $, value: X, inclusive: J, message: y.toString(Y) },
      ],
    });
  }
  _addCheck($) {
    return new _0({ ...this._def, checks: [...this._def.checks, $] });
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
_0.create = ($) => {
  return new _0({
    checks: [],
    typeName: R.ZodBigInt,
    coerce: $?.coerce ?? !1,
    ...o($),
  });
};
class E7 extends e {
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
    return t$($.data);
  }
}
E7.create = ($) => {
  return new E7({ typeName: R.ZodBoolean, coerce: $?.coerce || !1, ...o($) });
};
class _9 extends e {
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
    let J = new i$(),
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
    return new _9({ ...this._def, checks: [...this._def.checks, $] });
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
_9.create = ($) => {
  return new _9({
    checks: [],
    coerce: $?.coerce || !1,
    typeName: R.ZodDate,
    ...o($),
  });
};
class S7 extends e {
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
    return t$($.data);
  }
}
S7.create = ($) => {
  return new S7({ typeName: R.ZodSymbol, ...o($) });
};
class x9 extends e {
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
    return t$($.data);
  }
}
x9.create = ($) => {
  return new x9({ typeName: R.ZodUndefined, ...o($) });
};
class T9 extends e {
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
    return t$($.data);
  }
}
T9.create = ($) => {
  return new T9({ typeName: R.ZodNull, ...o($) });
};
class v7 extends e {
  constructor() {
    super(...arguments);
    this._any = !0;
  }
  _parse($) {
    return t$($.data);
  }
}
v7.create = ($) => {
  return new v7({ typeName: R.ZodAny, ...o($) });
};
class f1 extends e {
  constructor() {
    super(...arguments);
    this._unknown = !0;
  }
  _parse($) {
    return t$($.data);
  }
}
f1.create = ($) => {
  return new f1({ typeName: R.ZodUnknown, ...o($) });
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
class C7 extends e {
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
    return t$($.data);
  }
}
C7.create = ($) => {
  return new C7({ typeName: R.ZodVoid, ...o($) });
};
class $4 extends e {
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
          return Y.type._parseAsync(new m6(X, W, X.path, z));
        }),
      ).then((W) => {
        return i$.mergeArray(J, W);
      });
    let Q = [...X.data].map((W, z) => {
      return Y.type._parseSync(new m6(X, W, X.path, z));
    });
    return i$.mergeArray(J, Q);
  }
  get element() {
    return this._def.type;
  }
  min($, X) {
    return new $4({
      ...this._def,
      minLength: { value: $, message: y.toString(X) },
    });
  }
  max($, X) {
    return new $4({
      ...this._def,
      maxLength: { value: $, message: y.toString(X) },
    });
  }
  length($, X) {
    return new $4({
      ...this._def,
      exactLength: { value: $, message: y.toString(X) },
    });
  }
  nonempty($) {
    return this.min(1, $);
  }
}
$4.create = ($, X) => {
  return new $4({
    type: $,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: R.ZodArray,
    ...o(X),
  });
};
function C0($) {
  if ($ instanceof E$) {
    let X = {};
    for (let J in $.shape) {
      let Y = $.shape[J];
      X[J] = b6.create(C0(Y));
    }
    return new E$({ ...$._def, shape: () => X });
  } else if ($ instanceof $4) return new $4({ ...$._def, type: C0($.element) });
  else if ($ instanceof b6) return b6.create(C0($.unwrap()));
  else if ($ instanceof o4) return o4.create(C0($.unwrap()));
  else if ($ instanceof M4) return M4.create($.items.map((X) => C0(X)));
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
      let H = this._getOrReturnCtx($);
      return (
        k(H, {
          code: b.invalid_type,
          expected: S.object,
          received: H.parsedType,
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
      for (let H in Y.data) if (!W.includes(H)) z.push(H);
    }
    let G = [];
    for (let H of W) {
      let U = Q[H],
        K = Y.data[H];
      G.push({
        key: { status: "valid", value: H },
        value: U._parse(new m6(Y, K, Y.path, H)),
        alwaysSet: H in Y.data,
      });
    }
    if (this._def.catchall instanceof L4) {
      let H = this._def.unknownKeys;
      if (H === "passthrough")
        for (let U of z)
          G.push({
            key: { status: "valid", value: U },
            value: { status: "valid", value: Y.data[U] },
          });
      else if (H === "strict") {
        if (z.length > 0)
          (k(Y, { code: b.unrecognized_keys, keys: z }), J.dirty());
      } else if (H === "strip");
      else throw Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let H = this._def.catchall;
      for (let U of z) {
        let K = Y.data[U];
        G.push({
          key: { status: "valid", value: U },
          value: H._parse(new m6(Y, K, Y.path, U)),
          alwaysSet: U in Y.data,
        });
      }
    }
    if (Y.common.async)
      return Promise.resolve()
        .then(async () => {
          let H = [];
          for (let U of G) {
            let K = await U.key,
              V = await U.value;
            H.push({ key: K, value: V, alwaysSet: U.alwaysSet });
          }
          return H;
        })
        .then((H) => {
          return i$.mergeObjectSync(J, H);
        });
    else return i$.mergeObjectSync(J, G);
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
    return C0(this);
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
    return Pq(X$.objectKeys(this.shape));
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
class f9 extends e {
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
        let H = { ...X, common: { ...X.common, issues: [] }, parent: null },
          U = G._parseSync({ data: X.data, path: X.path, parent: H });
        if (U.status === "valid") return U;
        else if (U.status === "dirty" && !Q) Q = { result: U, ctx: H };
        if (H.common.issues.length) W.push(H.common.issues);
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
f9.create = ($, X) => {
  return new f9({ options: $, typeName: R.ZodUnion, ...o(X) });
};
var F4 = ($) => {
  if ($ instanceof g9) return F4($.schema);
  else if ($ instanceof X4) return F4($.innerType());
  else if ($ instanceof h9) return [$.value];
  else if ($ instanceof y1) return $.options;
  else if ($ instanceof u9) return X$.objectValues($.enum);
  else if ($ instanceof m9) return F4($._def.innerType);
  else if ($ instanceof x9) return [void 0];
  else if ($ instanceof T9) return [null];
  else if ($ instanceof b6) return [void 0, ...F4($.unwrap())];
  else if ($ instanceof o4) return [null, ...F4($.unwrap())];
  else if ($ instanceof Y3) return F4($.unwrap());
  else if ($ instanceof c9) return F4($.unwrap());
  else if ($ instanceof l9) return F4($._def.innerType);
  else return [];
};
class Q3 extends e {
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
    return new Q3({
      typeName: R.ZodDiscriminatedUnion,
      discriminator: $,
      options: X,
      optionsMap: Y,
      ...o(J),
    });
  }
}
function J3($, X) {
  let J = D4($),
    Y = D4(X);
  if ($ === X) return { valid: !0, data: $ };
  else if (J === S.object && Y === S.object) {
    let Q = X$.objectKeys(X),
      W = X$.objectKeys($).filter((G) => Q.indexOf(G) !== -1),
      z = { ...$, ...X };
    for (let G of W) {
      let H = J3($[G], X[G]);
      if (!H.valid) return { valid: !1 };
      z[G] = H.data;
    }
    return { valid: !0, data: z };
  } else if (J === S.array && Y === S.array) {
    if ($.length !== X.length) return { valid: !1 };
    let Q = [];
    for (let W = 0; W < $.length; W++) {
      let z = $[W],
        G = X[W],
        H = J3(z, G);
      if (!H.valid) return { valid: !1 };
      Q.push(H.data);
    }
    return { valid: !0, data: Q };
  } else if (J === S.date && Y === S.date && +$ === +X)
    return { valid: !0, data: $ };
  else return { valid: !1 };
}
class y9 extends e {
  _parse($) {
    let { status: X, ctx: J } = this._processInputParams($),
      Y = (Q, W) => {
        if (ez(Q) || ez(W)) return c;
        let z = J3(Q.value, W.value);
        if (!z.valid) return (k(J, { code: b.invalid_intersection_types }), c);
        if ($3(Q) || $3(W)) X.dirty();
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
y9.create = ($, X, J) => {
  return new y9({ left: $, right: X, typeName: R.ZodIntersection, ...o(J) });
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
        return G._parse(new m6(J, W, J.path, z));
      })
      .filter((W) => !!W);
    if (J.common.async)
      return Promise.all(Q).then((W) => {
        return i$.mergeArray(X, W);
      });
    else return i$.mergeArray(X, Q);
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
class k7 extends e {
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
        key: Q._parse(new m6(J, z, J.path, z)),
        value: W._parse(new m6(J, J.data[z], J.path, z)),
        alwaysSet: z in J.data,
      });
    if (J.common.async) return i$.mergeObjectAsync(X, Y);
    else return i$.mergeObjectSync(X, Y);
  }
  get element() {
    return this._def.valueType;
  }
  static create($, X, J) {
    if (X instanceof e)
      return new k7({
        keyType: $,
        valueType: X,
        typeName: R.ZodRecord,
        ...o(J),
      });
    return new k7({
      keyType: j4.create(),
      valueType: $,
      typeName: R.ZodRecord,
      ...o(X),
    });
  }
}
class _7 extends e {
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
      W = [...J.data.entries()].map(([z, G], H) => {
        return {
          key: Y._parse(new m6(J, z, J.path, [H, "key"])),
          value: Q._parse(new m6(J, G, J.path, [H, "value"])),
        };
      });
    if (J.common.async) {
      let z = new Map();
      return Promise.resolve().then(async () => {
        for (let G of W) {
          let H = await G.key,
            U = await G.value;
          if (H.status === "aborted" || U.status === "aborted") return c;
          if (H.status === "dirty" || U.status === "dirty") X.dirty();
          z.set(H.value, U.value);
        }
        return { status: X.value, value: z };
      });
    } else {
      let z = new Map();
      for (let G of W) {
        let { key: H, value: U } = G;
        if (H.status === "aborted" || U.status === "aborted") return c;
        if (H.status === "dirty" || U.status === "dirty") X.dirty();
        z.set(H.value, U.value);
      }
      return { status: X.value, value: z };
    }
  }
}
_7.create = ($, X, J) => {
  return new _7({ valueType: X, keyType: $, typeName: R.ZodMap, ...o(J) });
};
class x0 extends e {
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
      let H = new Set();
      for (let U of G) {
        if (U.status === "aborted") return c;
        if (U.status === "dirty") X.dirty();
        H.add(U.value);
      }
      return { status: X.value, value: H };
    }
    let z = [...J.data.values()].map((G, H) =>
      Q._parse(new m6(J, G, J.path, H)),
    );
    if (J.common.async) return Promise.all(z).then((G) => W(G));
    else return W(z);
  }
  min($, X) {
    return new x0({
      ...this._def,
      minSize: { value: $, message: y.toString(X) },
    });
  }
  max($, X) {
    return new x0({
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
x0.create = ($, X) => {
  return new x0({
    valueType: $,
    minSize: null,
    maxSize: null,
    typeName: R.ZodSet,
    ...o(X),
  });
};
class k9 extends e {
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
      return P7({
        data: z,
        path: X.path,
        errorMaps: [
          X.common.contextualErrorMap,
          X.schemaErrorMap,
          v9(),
          r4,
        ].filter((H) => !!H),
        issueData: { code: b.invalid_arguments, argumentsError: G },
      });
    }
    function Y(z, G) {
      return P7({
        data: z,
        path: X.path,
        errorMaps: [
          X.common.contextualErrorMap,
          X.schemaErrorMap,
          v9(),
          r4,
        ].filter((H) => !!H),
        issueData: { code: b.invalid_return_type, returnTypeError: G },
      });
    }
    let Q = { errorMap: X.common.contextualErrorMap },
      W = X.data;
    if (this._def.returns instanceof T0) {
      let z = this;
      return t$(async function (...G) {
        let H = new j6([]),
          U = await z._def.args.parseAsync(G, Q).catch((N) => {
            throw (H.addIssue(J(G, N)), H);
          }),
          K = await Reflect.apply(W, this, U);
        return await z._def.returns._def.type.parseAsync(K, Q).catch((N) => {
          throw (H.addIssue(Y(K, N)), H);
        });
      });
    } else {
      let z = this;
      return t$(function (...G) {
        let H = z._def.args.safeParse(G, Q);
        if (!H.success) throw new j6([J(G, H.error)]);
        let U = Reflect.apply(W, this, H.data),
          K = z._def.returns.safeParse(U, Q);
        if (!K.success) throw new j6([Y(U, K.error)]);
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
    return new k9({ ...this._def, args: M4.create($).rest(f1.create()) });
  }
  returns($) {
    return new k9({ ...this._def, returns: $ });
  }
  implement($) {
    return this.parse($);
  }
  strictImplement($) {
    return this.parse($);
  }
  static create($, X, J) {
    return new k9({
      args: $ ? $ : M4.create([]).rest(f1.create()),
      returns: X || f1.create(),
      typeName: R.ZodFunction,
      ...o(J),
    });
  }
}
class g9 extends e {
  get schema() {
    return this._def.getter();
  }
  _parse($) {
    let { ctx: X } = this._processInputParams($);
    return this._def.getter()._parse({ data: X.data, path: X.path, parent: X });
  }
}
g9.create = ($, X) => {
  return new g9({ getter: $, typeName: R.ZodLazy, ...o(X) });
};
class h9 extends e {
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
h9.create = ($, X) => {
  return new h9({ value: $, typeName: R.ZodLiteral, ...o(X) });
};
function Pq($, X) {
  return new y1({ values: $, typeName: R.ZodEnum, ...o(X) });
}
class y1 extends e {
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
    return t$($.data);
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
    return y1.create($, { ...this._def, ...X });
  }
  exclude($, X = this._def) {
    return y1.create(
      this.options.filter((J) => !$.includes(J)),
      { ...this._def, ...X },
    );
  }
}
y1.create = Pq;
class u9 extends e {
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
    return t$($.data);
  }
  get enum() {
    return this._def.values;
  }
}
u9.create = ($, X) => {
  return new u9({ values: $, typeName: R.ZodNativeEnum, ...o(X) });
};
class T0 extends e {
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
    return t$(
      J.then((Y) => {
        return this._def.type.parseAsync(Y, {
          path: X.path,
          errorMap: X.common.contextualErrorMap,
        });
      }),
    );
  }
}
T0.create = ($, X) => {
  return new T0({ type: $, typeName: R.ZodPromise, ...o(X) });
};
class X4 extends e {
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
          if (G.status === "dirty") return v0(G.value);
          if (X.value === "dirty") return v0(G.value);
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
        if (z.status === "dirty") return v0(z.value);
        if (X.value === "dirty") return v0(z.value);
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
        if (!T1(W)) return c;
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
            if (!T1(W)) return c;
            return Promise.resolve(Y.transform(W.value, Q)).then((z) => ({
              status: X.value,
              value: z,
            }));
          });
    X$.assertNever(Y);
  }
}
X4.create = ($, X, J) => {
  return new X4({ schema: $, typeName: R.ZodEffects, effect: X, ...o(J) });
};
X4.createWithPreprocess = ($, X, J) => {
  return new X4({
    schema: X,
    effect: { type: "preprocess", transform: $ },
    typeName: R.ZodEffects,
    ...o(J),
  });
};
class b6 extends e {
  _parse($) {
    if (this._getType($) === S.undefined) return t$(void 0);
    return this._def.innerType._parse($);
  }
  unwrap() {
    return this._def.innerType;
  }
}
b6.create = ($, X) => {
  return new b6({ innerType: $, typeName: R.ZodOptional, ...o(X) });
};
class o4 extends e {
  _parse($) {
    if (this._getType($) === S.null) return t$(null);
    return this._def.innerType._parse($);
  }
  unwrap() {
    return this._def.innerType;
  }
}
o4.create = ($, X) => {
  return new o4({ innerType: $, typeName: R.ZodNullable, ...o(X) });
};
class m9 extends e {
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
m9.create = ($, X) => {
  return new m9({
    innerType: $,
    typeName: R.ZodDefault,
    defaultValue: typeof X.default === "function" ? X.default : () => X.default,
    ...o(X),
  });
};
class l9 extends e {
  _parse($) {
    let { ctx: X } = this._processInputParams($),
      J = { ...X, common: { ...X.common, issues: [] } },
      Y = this._def.innerType._parse({
        data: J.data,
        path: J.path,
        parent: { ...J },
      });
    if (C9(Y))
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
l9.create = ($, X) => {
  return new l9({
    innerType: $,
    typeName: R.ZodCatch,
    catchValue: typeof X.catch === "function" ? X.catch : () => X.catch,
    ...o(X),
  });
};
class x7 extends e {
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
x7.create = ($) => {
  return new x7({ typeName: R.ZodNaN, ...o($) });
};
var U$$ = Symbol("zod_brand");
class Y3 extends e {
  _parse($) {
    let { ctx: X } = this._processInputParams($),
      J = X.data;
    return this._def.type._parse({ data: J, path: X.path, parent: X });
  }
  unwrap() {
    return this._def.type;
  }
}
class T7 extends e {
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
        if (Q.status === "dirty") return (X.dirty(), v0(Q.value));
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
    return new T7({ in: $, out: X, typeName: R.ZodPipeline });
  }
}
class c9 extends e {
  _parse($) {
    let X = this._def.innerType._parse($),
      J = (Y) => {
        if (T1(Y)) Y.value = Object.freeze(Y.value);
        return Y;
      };
    return C9(X) ? X.then((Y) => J(Y)) : J(X);
  }
  unwrap() {
    return this._def.innerType;
  }
}
c9.create = ($, X) => {
  return new c9({ innerType: $, typeName: R.ZodReadonly, ...o(X) });
};
var K$$ = { object: E$.lazycreate },
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
var V$$ = j4.create,
  N$$ = k0.create,
  O$$ = x7.create,
  w$$ = _0.create,
  B$$ = E7.create,
  q$$ = _9.create,
  D$$ = S7.create,
  F$$ = x9.create,
  j$$ = T9.create,
  L$$ = v7.create,
  M$$ = f1.create,
  A$$ = L4.create,
  I$$ = C7.create,
  Z$$ = $4.create,
  Eq = E$.create,
  b$$ = E$.strictCreate,
  R$$ = f9.create,
  P$$ = Q3.create,
  E$$ = y9.create,
  S$$ = M4.create,
  v$$ = k7.create,
  C$$ = _7.create,
  k$$ = x0.create,
  _$$ = k9.create,
  x$$ = g9.create,
  T$$ = h9.create,
  f$$ = y1.create,
  y$$ = u9.create,
  g$$ = T0.create,
  h$$ = X4.create,
  u$$ = b6.create,
  m$$ = o4.create,
  l$$ = X4.createWithPreprocess,
  c$$ = T7.create;
var l6 = {};
D1(l6, {
  version: () => HG,
  util: () => E,
  treeifyError: () => h7,
  toJSONSchema: () => a0,
  toDotPath: () => Cq,
  safeParseAsync: () => s4,
  safeParse: () => a4,
  registry: () => WX,
  regexes: () => e4,
  prettifyError: () => u7,
  parseAsync: () => m1,
  parse: () => u1,
  locales: () => i0,
  isValidJWT: () => oq,
  isValidBase64URL: () => rq,
  isValidBase64: () => wG,
  globalRegistry: () => G6,
  globalConfig: () => d9,
  function: () => L5,
  formatError: () => u0,
  flattenError: () => h0,
  config: () => v$,
  clone: () => n$,
  _xid: () => DX,
  _void: () => N5,
  _uuidv7: () => KX,
  _uuidv6: () => UX,
  _uuidv4: () => HX,
  _uuid: () => GX,
  _url: () => VX,
  _uppercase: () => vX,
  _unknown: () => d1,
  _union: () => yC,
  _undefined: () => H5,
  _ulid: () => qX,
  _uint64: () => z5,
  _uint32: () => J5,
  _tuple: () => OH,
  _trim: () => fX,
  _transform: () => iC,
  _toUpperCase: () => gX,
  _toLowerCase: () => yX,
  _templateLiteral: () => Xk,
  _symbol: () => G5,
  _success: () => aC,
  _stringbool: () => F5,
  _stringFormat: () => j5,
  _string: () => oQ,
  _startsWith: () => kX,
  _size: () => PX,
  _set: () => lC,
  _safeParseAsync: () => d7,
  _safeParse: () => c7,
  _regex: () => EX,
  _refine: () => D5,
  _record: () => uC,
  _readonly: () => $k,
  _property: () => NH,
  _promise: () => Qk,
  _positive: () => HH,
  _pipe: () => eC,
  _parseAsync: () => l7,
  _parse: () => m7,
  _overwrite: () => R4,
  _optional: () => nC,
  _number: () => aQ,
  _nullable: () => rC,
  _null: () => U5,
  _normalize: () => TX,
  _nonpositive: () => KH,
  _nonoptional: () => tC,
  _nonnegative: () => VH,
  _never: () => V5,
  _negative: () => UH,
  _nativeEnum: () => dC,
  _nanoid: () => OX,
  _nan: () => w5,
  _multipleOf: () => p1,
  _minSize: () => i1,
  _minLength: () => J1,
  _min: () => H6,
  _mime: () => xX,
  _maxSize: () => r0,
  _maxLength: () => o0,
  _max: () => R6,
  _map: () => mC,
  _lte: () => R6,
  _lt: () => Z4,
  _lowercase: () => SX,
  _literal: () => pC,
  _length: () => t0,
  _lazy: () => Jk,
  _ksuid: () => FX,
  _jwt: () => RX,
  _isoTime: () => JH,
  _isoDuration: () => QH,
  _isoDateTime: () => $H,
  _isoDate: () => XH,
  _ipv6: () => LX,
  _ipv4: () => jX,
  _intersection: () => hC,
  _int64: () => W5,
  _int32: () => X5,
  _int: () => sQ,
  _includes: () => CX,
  _guid: () => n0,
  _gte: () => H6,
  _gt: () => b4,
  _float64: () => $5,
  _float32: () => eQ,
  _file: () => B5,
  _enum: () => cC,
  _endsWith: () => _X,
  _emoji: () => NX,
  _email: () => zX,
  _e164: () => bX,
  _discriminatedUnion: () => gC,
  _default: () => oC,
  _date: () => O5,
  _custom: () => q5,
  _cuid2: () => BX,
  _cuid: () => wX,
  _coercedString: () => eG,
  _coercedNumber: () => YH,
  _coercedDate: () => GH,
  _coercedBoolean: () => WH,
  _coercedBigint: () => zH,
  _cidrv6: () => AX,
  _cidrv4: () => MX,
  _catch: () => sC,
  _boolean: () => Q5,
  _bigint: () => Y5,
  _base64url: () => ZX,
  _base64: () => IX,
  _array: () => hX,
  _any: () => K5,
  TimePrecision: () => tQ,
  NEVER: () => f7,
  JSONSchemaGenerator: () => M5,
  JSONSchema: () => eq,
  Doc: () => r7,
  $output: () => nQ,
  $input: () => rQ,
  $constructor: () => q,
  $brand: () => y7,
  $ZodXID: () => zQ,
  $ZodVoid: () => ZQ,
  $ZodUnknown: () => c1,
  $ZodUnion: () => JX,
  $ZodUndefined: () => LQ,
  $ZodUUID: () => s7,
  $ZodURL: () => $Q,
  $ZodULID: () => WQ,
  $ZodType: () => p,
  $ZodTuple: () => X1,
  $ZodTransform: () => d0,
  $ZodTemplateLiteral: () => cQ,
  $ZodSymbol: () => jQ,
  $ZodSuccess: () => hQ,
  $ZodStringFormat: () => K$,
  $ZodString: () => $1,
  $ZodSet: () => vQ,
  $ZodRegistry: () => YX,
  $ZodRecord: () => EQ,
  $ZodRealError: () => g0,
  $ZodReadonly: () => lQ,
  $ZodPromise: () => dQ,
  $ZodPrefault: () => yQ,
  $ZodPipe: () => p0,
  $ZodOptional: () => xQ,
  $ZodObject: () => XX,
  $ZodNumberFormat: () => DQ,
  $ZodNumber: () => e9,
  $ZodNullable: () => TQ,
  $ZodNull: () => MQ,
  $ZodNonOptional: () => gQ,
  $ZodNever: () => IQ,
  $ZodNanoID: () => JQ,
  $ZodNaN: () => mQ,
  $ZodMap: () => SQ,
  $ZodLiteral: () => kQ,
  $ZodLazy: () => pQ,
  $ZodKSUID: () => GQ,
  $ZodJWT: () => BQ,
  $ZodIntersection: () => PQ,
  $ZodISOTime: () => NG,
  $ZodISODuration: () => OG,
  $ZodISODateTime: () => KG,
  $ZodISODate: () => VG,
  $ZodIPv6: () => UQ,
  $ZodIPv4: () => HQ,
  $ZodGUID: () => a7,
  $ZodFunction: () => wH,
  $ZodFile: () => _Q,
  $ZodError: () => s9,
  $ZodEnum: () => CQ,
  $ZodEmoji: () => XQ,
  $ZodEmail: () => e7,
  $ZodE164: () => wQ,
  $ZodDiscriminatedUnion: () => RQ,
  $ZodDefault: () => fQ,
  $ZodDate: () => bQ,
  $ZodCustomStringFormat: () => qQ,
  $ZodCustom: () => iQ,
  $ZodCheckUpperCase: () => XG,
  $ZodCheckStringFormat: () => m0,
  $ZodCheckStartsWith: () => QG,
  $ZodCheckSizeEquals: () => o3,
  $ZodCheckRegex: () => e3,
  $ZodCheckProperty: () => WG,
  $ZodCheckOverwrite: () => GG,
  $ZodCheckNumberFormat: () => p3,
  $ZodCheckMultipleOf: () => d3,
  $ZodCheckMinSize: () => r3,
  $ZodCheckMinLength: () => a3,
  $ZodCheckMimeType: () => zG,
  $ZodCheckMaxSize: () => n3,
  $ZodCheckMaxLength: () => t3,
  $ZodCheckLowerCase: () => $G,
  $ZodCheckLessThan: () => i7,
  $ZodCheckLengthEquals: () => s3,
  $ZodCheckIncludes: () => JG,
  $ZodCheckGreaterThan: () => n7,
  $ZodCheckEndsWith: () => YG,
  $ZodCheckBigIntFormat: () => i3,
  $ZodCheck: () => I$,
  $ZodCatch: () => uQ,
  $ZodCUID2: () => YQ,
  $ZodCUID: () => QQ,
  $ZodCIDRv6: () => VQ,
  $ZodCIDRv4: () => KQ,
  $ZodBoolean: () => l0,
  $ZodBigIntFormat: () => FQ,
  $ZodBigInt: () => $X,
  $ZodBase64URL: () => OQ,
  $ZodBase64: () => NQ,
  $ZodAsyncError: () => A4,
  $ZodArray: () => c0,
  $ZodAny: () => AQ,
});
var f7 = Object.freeze({ status: "aborted" });
function q($, X, J) {
  function Y(G, H) {
    var U;
    (Object.defineProperty(G, "_zod", { value: G._zod ?? {}, enumerable: !1 }),
      (U = G._zod).traits ?? (U.traits = new Set()),
      G._zod.traits.add($),
      X(G, H));
    for (let K in z.prototype)
      if (!(K in G))
        Object.defineProperty(G, K, { value: z.prototype[K].bind(G) });
    ((G._zod.constr = z), (G._zod.def = H));
  }
  let Q = J?.Parent ?? Object;
  class W extends Q {}
  Object.defineProperty(W, "name", { value: $ });
  function z(G) {
    var H;
    let U = J?.Parent ? new W() : this;
    (Y(U, G), (H = U._zod).deferred ?? (H.deferred = []));
    for (let K of U._zod.deferred) K();
    return U;
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
var y7 = Symbol("zod_brand");
class A4 extends Error {
  constructor() {
    super(
      "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
    );
  }
}
var d9 = {};
function v$($) {
  if ($) Object.assign(d9, $);
  return d9;
}
var E = {};
D1(E, {
  unwrapMessage: () => p9,
  stringifyPrimitive: () => v,
  required: () => fv,
  randomString: () => Pv,
  propertyKeyTypes: () => o9,
  promiseAllObject: () => Rv,
  primitiveTypes: () => K3,
  prefixIssues: () => z6,
  pick: () => Cv,
  partial: () => Tv,
  optionalKeys: () => V3,
  omit: () => kv,
  numKeys: () => Ev,
  nullish: () => t4,
  normalizeParams: () => P,
  merge: () => xv,
  jsonStringifyReplacer: () => z3,
  joinValues: () => A,
  issue: () => w3,
  isPlainObject: () => y0,
  isObject: () => f0,
  getSizableOrigin: () => t9,
  getParsedType: () => Sv,
  getLengthableOrigin: () => a9,
  getEnumValues: () => i9,
  getElementAtPath: () => bv,
  floatSafeRemainder: () => G3,
  finalizeIssue: () => L6,
  extend: () => _v,
  escapeRegex: () => I4,
  esc: () => g1,
  defineLazy: () => G$,
  createTransparentProxy: () => vv,
  clone: () => n$,
  cleanRegex: () => r9,
  cleanEnum: () => yv,
  captureStackTrace: () => g7,
  cached: () => n9,
  assignProp: () => H3,
  assertNotEqual: () => Mv,
  assertNever: () => Iv,
  assertIs: () => Av,
  assertEqual: () => Lv,
  assert: () => Zv,
  allowsEval: () => U3,
  aborted: () => h1,
  NUMBER_FORMAT_RANGES: () => N3,
  Class: () => Sq,
  BIGINT_FORMAT_RANGES: () => O3,
});
function Lv($) {
  return $;
}
function Mv($) {
  return $;
}
function Av($) {}
function Iv($) {
  throw Error();
}
function Zv($) {}
function i9($) {
  let X = Object.values($).filter((Y) => typeof Y === "number");
  return Object.entries($)
    .filter(([Y, Q]) => X.indexOf(+Y) === -1)
    .map(([Y, Q]) => Q);
}
function A($, X = "|") {
  return $.map((J) => v(J)).join(X);
}
function z3($, X) {
  if (typeof X === "bigint") return X.toString();
  return X;
}
function n9($) {
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
function t4($) {
  return $ === null || $ === void 0;
}
function r9($) {
  let X = $.startsWith("^") ? 1 : 0,
    J = $.endsWith("$") ? $.length - 1 : $.length;
  return $.slice(X, J);
}
function G3($, X) {
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
function H3($, X, J) {
  Object.defineProperty($, X, {
    value: J,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function bv($, X) {
  if (!X) return $;
  return X.reduce((J, Y) => J?.[Y], $);
}
function Rv($) {
  let X = Object.keys($),
    J = X.map((Y) => $[Y]);
  return Promise.all(J).then((Y) => {
    let Q = {};
    for (let W = 0; W < X.length; W++) Q[X[W]] = Y[W];
    return Q;
  });
}
function Pv($ = 10) {
  let J = "";
  for (let Y = 0; Y < $; Y++)
    J += "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)];
  return J;
}
function g1($) {
  return JSON.stringify($);
}
var g7 = Error.captureStackTrace ? Error.captureStackTrace : (...$) => {};
function f0($) {
  return typeof $ === "object" && $ !== null && !Array.isArray($);
}
var U3 = n9(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    return (new Function(""), !0);
  } catch ($) {
    return !1;
  }
});
function y0($) {
  if (f0($) === !1) return !1;
  let X = $.constructor;
  if (X === void 0) return !0;
  let J = X.prototype;
  if (f0(J) === !1) return !1;
  if (Object.prototype.hasOwnProperty.call(J, "isPrototypeOf") === !1)
    return !1;
  return !0;
}
function Ev($) {
  let X = 0;
  for (let J in $) if (Object.prototype.hasOwnProperty.call($, J)) X++;
  return X;
}
var Sv = ($) => {
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
  o9 = new Set(["string", "number", "symbol"]),
  K3 = new Set([
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
function n$($, X, J) {
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
function vv($) {
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
function V3($) {
  return Object.keys($).filter((X) => {
    return $[X]._zod.optin === "optional" && $[X]._zod.optout === "optional";
  });
}
var N3 = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [
      -340282346638528860000000000000000000000,
      340282346638528860000000000000000000000,
    ],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  O3 = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")],
  };
function Cv($, X) {
  let J = {},
    Y = $._zod.def;
  for (let Q in X) {
    if (!(Q in Y.shape)) throw Error(`Unrecognized key: "${Q}"`);
    if (!X[Q]) continue;
    J[Q] = Y.shape[Q];
  }
  return n$($, { ...$._zod.def, shape: J, checks: [] });
}
function kv($, X) {
  let J = { ...$._zod.def.shape },
    Y = $._zod.def;
  for (let Q in X) {
    if (!(Q in Y.shape)) throw Error(`Unrecognized key: "${Q}"`);
    if (!X[Q]) continue;
    delete J[Q];
  }
  return n$($, { ...$._zod.def, shape: J, checks: [] });
}
function _v($, X) {
  if (!y0(X)) throw Error("Invalid input to extend: expected a plain object");
  let J = {
    ...$._zod.def,
    get shape() {
      let Y = { ...$._zod.def.shape, ...X };
      return (H3(this, "shape", Y), Y);
    },
    checks: [],
  };
  return n$($, J);
}
function xv($, X) {
  return n$($, {
    ...$._zod.def,
    get shape() {
      let J = { ...$._zod.def.shape, ...X._zod.def.shape };
      return (H3(this, "shape", J), J);
    },
    catchall: X._zod.def.catchall,
    checks: [],
  });
}
function Tv($, X, J) {
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
  return n$(X, { ...X._zod.def, shape: Q, checks: [] });
}
function fv($, X, J) {
  let Y = X._zod.def.shape,
    Q = { ...Y };
  if (J)
    for (let W in J) {
      if (!(W in Q)) throw Error(`Unrecognized key: "${W}"`);
      if (!J[W]) continue;
      Q[W] = new $({ type: "nonoptional", innerType: Y[W] });
    }
  else for (let W in Y) Q[W] = new $({ type: "nonoptional", innerType: Y[W] });
  return n$(X, { ...X._zod.def, shape: Q, checks: [] });
}
function h1($, X = 0) {
  for (let J = X; J < $.issues.length; J++)
    if ($.issues[J]?.continue !== !0) return !0;
  return !1;
}
function z6($, X) {
  return X.map((J) => {
    var Y;
    return ((Y = J).path ?? (Y.path = []), J.path.unshift($), J);
  });
}
function p9($) {
  return typeof $ === "string" ? $ : $?.message;
}
function L6($, X, J) {
  let Y = { ...$, path: $.path ?? [] };
  if (!$.message) {
    let Q =
      p9($.inst?._zod.def?.error?.($)) ??
      p9(X?.error?.($)) ??
      p9(J.customError?.($)) ??
      p9(J.localeError?.($)) ??
      "Invalid input";
    Y.message = Q;
  }
  if ((delete Y.inst, delete Y.continue, !X?.reportInput)) delete Y.input;
  return Y;
}
function t9($) {
  if ($ instanceof Set) return "set";
  if ($ instanceof Map) return "map";
  if ($ instanceof File) return "file";
  return "unknown";
}
function a9($) {
  if (Array.isArray($)) return "array";
  if (typeof $ === "string") return "string";
  return "unknown";
}
function w3(...$) {
  let [X, J, Y] = $;
  if (typeof X === "string")
    return { message: X, code: "custom", input: J, inst: Y };
  return { ...X };
}
function yv($) {
  return Object.entries($)
    .filter(([X, J]) => {
      return Number.isNaN(Number.parseInt(X, 10));
    })
    .map((X) => X[1]);
}
class Sq {
  constructor(...$) {}
}
var vq = ($, X) => {
    (($.name = "$ZodError"),
      Object.defineProperty($, "_zod", { value: $._zod, enumerable: !1 }),
      Object.defineProperty($, "issues", { value: X, enumerable: !1 }),
      Object.defineProperty($, "message", {
        get() {
          return JSON.stringify(X, z3, 2);
        },
        enumerable: !0,
      }));
  },
  s9 = q("$ZodError", vq),
  g0 = q("$ZodError", vq, { Parent: Error });
function h0($, X = (J) => J.message) {
  let J = {},
    Y = [];
  for (let Q of $.issues)
    if (Q.path.length > 0)
      ((J[Q.path[0]] = J[Q.path[0]] || []), J[Q.path[0]].push(X(Q)));
    else Y.push(X(Q));
  return { formErrors: Y, fieldErrors: J };
}
function u0($, X) {
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
            H = 0;
          while (H < z.path.length) {
            let U = z.path[H];
            if (H !== z.path.length - 1) G[U] = G[U] || { _errors: [] };
            else ((G[U] = G[U] || { _errors: [] }), G[U]._errors.push(J(z)));
            ((G = G[U]), H++);
          }
        }
    };
  return (Q($), Y);
}
function h7($, X) {
  let J =
      X ||
      function (W) {
        return W.message;
      },
    Y = { errors: [] },
    Q = (W, z = []) => {
      var G, H;
      for (let U of W.issues)
        if (U.code === "invalid_union" && U.errors.length)
          U.errors.map((K) => Q({ issues: K }, U.path));
        else if (U.code === "invalid_key") Q({ issues: U.issues }, U.path);
        else if (U.code === "invalid_element") Q({ issues: U.issues }, U.path);
        else {
          let K = [...z, ...U.path];
          if (K.length === 0) {
            Y.errors.push(J(U));
            continue;
          }
          let V = Y,
            N = 0;
          while (N < K.length) {
            let O = K[N],
              w = N === K.length - 1;
            if (typeof O === "string")
              (V.properties ?? (V.properties = {}),
                (G = V.properties)[O] ?? (G[O] = { errors: [] }),
                (V = V.properties[O]));
            else
              (V.items ?? (V.items = []),
                (H = V.items)[O] ?? (H[O] = { errors: [] }),
                (V = V.items[O]));
            if (w) V.errors.push(J(U));
            N++;
          }
        }
    };
  return (Q($), Y);
}
function Cq($) {
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
function u7($) {
  let X = [],
    J = [...$.issues].sort((Y, Q) => Y.path.length - Q.path.length);
  for (let Y of J)
    if ((X.push(`✖ ${Y.message}`), Y.path?.length))
      X.push(`  → at ${Cq(Y.path)}`);
  return X.join(`
`);
}
var m7 = ($) => (X, J, Y, Q) => {
    let W = Y ? Object.assign(Y, { async: !1 }) : { async: !1 },
      z = X._zod.run({ value: J, issues: [] }, W);
    if (z instanceof Promise) throw new A4();
    if (z.issues.length) {
      let G = new (Q?.Err ?? $)(z.issues.map((H) => L6(H, W, v$())));
      throw (g7(G, Q?.callee), G);
    }
    return z.value;
  },
  u1 = m7(g0),
  l7 = ($) => async (X, J, Y, Q) => {
    let W = Y ? Object.assign(Y, { async: !0 }) : { async: !0 },
      z = X._zod.run({ value: J, issues: [] }, W);
    if (z instanceof Promise) z = await z;
    if (z.issues.length) {
      let G = new (Q?.Err ?? $)(z.issues.map((H) => L6(H, W, v$())));
      throw (g7(G, Q?.callee), G);
    }
    return z.value;
  },
  m1 = l7(g0),
  c7 = ($) => (X, J, Y) => {
    let Q = Y ? { ...Y, async: !1 } : { async: !1 },
      W = X._zod.run({ value: J, issues: [] }, Q);
    if (W instanceof Promise) throw new A4();
    return W.issues.length
      ? {
          success: !1,
          error: new ($ ?? s9)(W.issues.map((z) => L6(z, Q, v$()))),
        }
      : { success: !0, data: W.value };
  },
  a4 = c7(g0),
  d7 = ($) => async (X, J, Y) => {
    let Q = Y ? Object.assign(Y, { async: !0 }) : { async: !0 },
      W = X._zod.run({ value: J, issues: [] }, Q);
    if (W instanceof Promise) W = await W;
    return W.issues.length
      ? { success: !1, error: new $(W.issues.map((z) => L6(z, Q, v$()))) }
      : { success: !0, data: W.value };
  },
  s4 = d7(g0);
var e4 = {};
D1(e4, {
  xid: () => F3,
  uuid7: () => lv,
  uuid6: () => mv,
  uuid4: () => uv,
  uuid: () => l1,
  uppercase: () => c3,
  unicodeEmail: () => pv,
  undefined: () => m3,
  ulid: () => D3,
  time: () => _3,
  string: () => T3,
  rfc5322Email: () => dv,
  number: () => g3,
  null: () => u3,
  nanoid: () => L3,
  lowercase: () => l3,
  ksuid: () => j3,
  ipv6: () => R3,
  ipv4: () => b3,
  integer: () => y3,
  html5Email: () => cv,
  hostname: () => v3,
  guid: () => A3,
  extendedDuration: () => hv,
  emoji: () => Z3,
  email: () => I3,
  e164: () => C3,
  duration: () => M3,
  domain: () => rv,
  datetime: () => x3,
  date: () => k3,
  cuid2: () => q3,
  cuid: () => B3,
  cidrv6: () => E3,
  cidrv4: () => P3,
  browserEmail: () => iv,
  boolean: () => h3,
  bigint: () => f3,
  base64url: () => p7,
  base64: () => S3,
  _emoji: () => nv,
});
var B3 = /^[cC][^\s-]{8,}$/,
  q3 = /^[0-9a-z]+$/,
  D3 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  F3 = /^[0-9a-vA-V]{20}$/,
  j3 = /^[A-Za-z0-9]{27}$/,
  L3 = /^[a-zA-Z0-9_-]{21}$/,
  M3 =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  hv =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  A3 =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  l1 = ($) => {
    if (!$)
      return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;
    return new RegExp(
      `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${$}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
    );
  },
  uv = l1(4),
  mv = l1(6),
  lv = l1(7),
  I3 =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  cv =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  dv =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  pv = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
  iv =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  nv = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Z3() {
  return new RegExp(
    "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
    "u",
  );
}
var b3 =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  R3 =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
  P3 =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  E3 =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  S3 =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  p7 = /^[A-Za-z0-9_-]*$/,
  v3 = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/,
  rv = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
  C3 = /^\+(?:[0-9]){6,14}[0-9]$/,
  kq =
    "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
  k3 = new RegExp(`^${kq}$`);
function _q($) {
  return typeof $.precision === "number"
    ? $.precision === -1
      ? "(?:[01]\\d|2[0-3]):[0-5]\\d"
      : $.precision === 0
        ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d"
        : `(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${$.precision}}`
    : "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
}
function _3($) {
  return new RegExp(`^${_q($)}$`);
}
function x3($) {
  let X = _q({ precision: $.precision }),
    J = ["Z"];
  if ($.local) J.push("");
  if ($.offset) J.push("([+-]\\d{2}:\\d{2})");
  let Y = `${X}(?:${J.join("|")})`;
  return new RegExp(`^${kq}T(?:${Y})$`);
}
var T3 = ($) => {
    let X = $
      ? `[\\s\\S]{${$?.minimum ?? 0},${$?.maximum ?? ""}}`
      : "[\\s\\S]*";
    return new RegExp(`^${X}$`);
  },
  f3 = /^\d+n?$/,
  y3 = /^\d+$/,
  g3 = /^-?\d+(?:\.\d+)?/i,
  h3 = /true|false/i,
  u3 = /null/i;
var m3 = /undefined/i;
var l3 = /^[^A-Z]*$/,
  c3 = /^[^a-z]*$/;
var I$ = q("$ZodCheck", ($, X) => {
    var J;
    ($._zod ?? ($._zod = {}),
      ($._zod.def = X),
      (J = $._zod).onattach ?? (J.onattach = []));
  }),
  Tq = { number: "number", bigint: "bigint", object: "date" },
  i7 = q("$ZodCheckLessThan", ($, X) => {
    I$.init($, X);
    let J = Tq[typeof X.value];
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
  n7 = q("$ZodCheckGreaterThan", ($, X) => {
    I$.init($, X);
    let J = Tq[typeof X.value];
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
  d3 = q("$ZodCheckMultipleOf", ($, X) => {
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
            : G3(J.value, X.value) === 0
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
  p3 = q("$ZodCheckNumberFormat", ($, X) => {
    (I$.init($, X), (X.format = X.format || "float64"));
    let J = X.format?.includes("int"),
      Y = J ? "int" : "number",
      [Q, W] = N3[X.format];
    ($._zod.onattach.push((z) => {
      let G = z._zod.bag;
      if (((G.format = X.format), (G.minimum = Q), (G.maximum = W), J))
        G.pattern = y3;
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
  i3 = q("$ZodCheckBigIntFormat", ($, X) => {
    I$.init($, X);
    let [J, Y] = O3[X.format];
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
  n3 = q("$ZodCheckMaxSize", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let Y = J.value;
        return !t4(Y) && Y.size !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let Y = J._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (X.maximum < Y) J._zod.bag.maximum = X.maximum;
      }),
      ($._zod.check = (J) => {
        let Y = J.value;
        if (Y.size <= X.maximum) return;
        J.issues.push({
          origin: t9(Y),
          code: "too_big",
          maximum: X.maximum,
          input: Y,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  r3 = q("$ZodCheckMinSize", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let Y = J.value;
        return !t4(Y) && Y.size !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let Y = J._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (X.minimum > Y) J._zod.bag.minimum = X.minimum;
      }),
      ($._zod.check = (J) => {
        let Y = J.value;
        if (Y.size >= X.minimum) return;
        J.issues.push({
          origin: t9(Y),
          code: "too_small",
          minimum: X.minimum,
          input: Y,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  o3 = q("$ZodCheckSizeEquals", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let Y = J.value;
        return !t4(Y) && Y.size !== void 0;
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
          origin: t9(Y),
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
  t3 = q("$ZodCheckMaxLength", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let Y = J.value;
        return !t4(Y) && Y.length !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let Y = J._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (X.maximum < Y) J._zod.bag.maximum = X.maximum;
      }),
      ($._zod.check = (J) => {
        let Y = J.value;
        if (Y.length <= X.maximum) return;
        let W = a9(Y);
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
  a3 = q("$ZodCheckMinLength", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let Y = J.value;
        return !t4(Y) && Y.length !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let Y = J._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (X.minimum > Y) J._zod.bag.minimum = X.minimum;
      }),
      ($._zod.check = (J) => {
        let Y = J.value;
        if (Y.length >= X.minimum) return;
        let W = a9(Y);
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
  s3 = q("$ZodCheckLengthEquals", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let Y = J.value;
        return !t4(Y) && Y.length !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let Y = J._zod.bag;
        ((Y.minimum = X.length), (Y.maximum = X.length), (Y.length = X.length));
      }),
      ($._zod.check = (J) => {
        let Y = J.value,
          Q = Y.length;
        if (Q === X.length) return;
        let W = a9(Y),
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
  m0 = q("$ZodCheckStringFormat", ($, X) => {
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
  e3 = q("$ZodCheckRegex", ($, X) => {
    (m0.init($, X),
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
  $G = q("$ZodCheckLowerCase", ($, X) => {
    (X.pattern ?? (X.pattern = l3), m0.init($, X));
  }),
  XG = q("$ZodCheckUpperCase", ($, X) => {
    (X.pattern ?? (X.pattern = c3), m0.init($, X));
  }),
  JG = q("$ZodCheckIncludes", ($, X) => {
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
  QG = q("$ZodCheckStartsWith", ($, X) => {
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
  YG = q("$ZodCheckEndsWith", ($, X) => {
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
function xq($, X, J) {
  if ($.issues.length) X.issues.push(...z6(J, $.issues));
}
var WG = q("$ZodCheckProperty", ($, X) => {
    (I$.init($, X),
      ($._zod.check = (J) => {
        let Y = X.schema._zod.run(
          { value: J.value[X.property], issues: [] },
          {},
        );
        if (Y instanceof Promise) return Y.then((Q) => xq(Q, J, X.property));
        xq(Y, J, X.property);
        return;
      }));
  }),
  zG = q("$ZodCheckMimeType", ($, X) => {
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
  GG = q("$ZodCheckOverwrite", ($, X) => {
    (I$.init($, X),
      ($._zod.check = (J) => {
        J.value = X.tx(J.value);
      }));
  });
class r7 {
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
var HG = { major: 4, minor: 0, patch: 0 };
var p = q("$ZodType", ($, X) => {
    var J;
    ($ ?? ($ = {}),
      ($._zod.def = X),
      ($._zod.bag = $._zod.bag || {}),
      ($._zod.version = HG));
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
        let H = h1(W),
          U;
        for (let K of z) {
          if (K._zod.when) {
            if (!K._zod.when(W)) continue;
          } else if (H) continue;
          let V = W.issues.length,
            N = K._zod.check(W);
          if (N instanceof Promise && G?.async === !1) throw new A4();
          if (U || N instanceof Promise)
            U = (U ?? Promise.resolve()).then(async () => {
              if ((await N, W.issues.length === V)) return;
              if (!H) H = h1(W, V);
            });
          else {
            if (W.issues.length === V) continue;
            if (!H) H = h1(W, V);
          }
        }
        if (U)
          return U.then(() => {
            return W;
          });
        return W;
      };
      $._zod.run = (W, z) => {
        let G = $._zod.parse(W, z);
        if (G instanceof Promise) {
          if (z.async === !1) throw new A4();
          return G.then((H) => Q(H, Y, z));
        }
        return Q(G, Y, z);
      };
    }
    $["~standard"] = {
      validate: (Q) => {
        try {
          let W = a4($, Q);
          return W.success ? { value: W.data } : { issues: W.error?.issues };
        } catch (W) {
          return s4($, Q).then((z) =>
            z.success ? { value: z.data } : { issues: z.error?.issues },
          );
        }
      },
      vendor: "zod",
      version: 1,
    };
  }),
  $1 = q("$ZodString", ($, X) => {
    (p.init($, X),
      ($._zod.pattern =
        [...($?._zod.bag?.patterns ?? [])].pop() ?? T3($._zod.bag)),
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
    (m0.init($, X), $1.init($, X));
  }),
  a7 = q("$ZodGUID", ($, X) => {
    (X.pattern ?? (X.pattern = A3), K$.init($, X));
  }),
  s7 = q("$ZodUUID", ($, X) => {
    if (X.version) {
      let Y = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
        X.version
      ];
      if (Y === void 0) throw Error(`Invalid UUID version: "${X.version}"`);
      X.pattern ?? (X.pattern = l1(Y));
    } else X.pattern ?? (X.pattern = l1());
    K$.init($, X);
  }),
  e7 = q("$ZodEmail", ($, X) => {
    (X.pattern ?? (X.pattern = I3), K$.init($, X));
  }),
  $Q = q("$ZodURL", ($, X) => {
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
                pattern: v3.source,
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
  XQ = q("$ZodEmoji", ($, X) => {
    (X.pattern ?? (X.pattern = Z3()), K$.init($, X));
  }),
  JQ = q("$ZodNanoID", ($, X) => {
    (X.pattern ?? (X.pattern = L3), K$.init($, X));
  }),
  QQ = q("$ZodCUID", ($, X) => {
    (X.pattern ?? (X.pattern = B3), K$.init($, X));
  }),
  YQ = q("$ZodCUID2", ($, X) => {
    (X.pattern ?? (X.pattern = q3), K$.init($, X));
  }),
  WQ = q("$ZodULID", ($, X) => {
    (X.pattern ?? (X.pattern = D3), K$.init($, X));
  }),
  zQ = q("$ZodXID", ($, X) => {
    (X.pattern ?? (X.pattern = F3), K$.init($, X));
  }),
  GQ = q("$ZodKSUID", ($, X) => {
    (X.pattern ?? (X.pattern = j3), K$.init($, X));
  }),
  KG = q("$ZodISODateTime", ($, X) => {
    (X.pattern ?? (X.pattern = x3(X)), K$.init($, X));
  }),
  VG = q("$ZodISODate", ($, X) => {
    (X.pattern ?? (X.pattern = k3), K$.init($, X));
  }),
  NG = q("$ZodISOTime", ($, X) => {
    (X.pattern ?? (X.pattern = _3(X)), K$.init($, X));
  }),
  OG = q("$ZodISODuration", ($, X) => {
    (X.pattern ?? (X.pattern = M3), K$.init($, X));
  }),
  HQ = q("$ZodIPv4", ($, X) => {
    (X.pattern ?? (X.pattern = b3),
      K$.init($, X),
      $._zod.onattach.push((J) => {
        let Y = J._zod.bag;
        Y.format = "ipv4";
      }));
  }),
  UQ = q("$ZodIPv6", ($, X) => {
    (X.pattern ?? (X.pattern = R3),
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
  KQ = q("$ZodCIDRv4", ($, X) => {
    (X.pattern ?? (X.pattern = P3), K$.init($, X));
  }),
  VQ = q("$ZodCIDRv6", ($, X) => {
    (X.pattern ?? (X.pattern = E3),
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
function wG($) {
  if ($ === "") return !0;
  if ($.length % 4 !== 0) return !1;
  try {
    return (atob($), !0);
  } catch {
    return !1;
  }
}
var NQ = q("$ZodBase64", ($, X) => {
  (X.pattern ?? (X.pattern = S3),
    K$.init($, X),
    $._zod.onattach.push((J) => {
      J._zod.bag.contentEncoding = "base64";
    }),
    ($._zod.check = (J) => {
      if (wG(J.value)) return;
      J.issues.push({
        code: "invalid_format",
        format: "base64",
        input: J.value,
        inst: $,
        continue: !X.abort,
      });
    }));
});
function rq($) {
  if (!p7.test($)) return !1;
  let X = $.replace(/[-_]/g, (Y) => (Y === "-" ? "+" : "/")),
    J = X.padEnd(Math.ceil(X.length / 4) * 4, "=");
  return wG(J);
}
var OQ = q("$ZodBase64URL", ($, X) => {
    (X.pattern ?? (X.pattern = p7),
      K$.init($, X),
      $._zod.onattach.push((J) => {
        J._zod.bag.contentEncoding = "base64url";
      }),
      ($._zod.check = (J) => {
        if (rq(J.value)) return;
        J.issues.push({
          code: "invalid_format",
          format: "base64url",
          input: J.value,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  wQ = q("$ZodE164", ($, X) => {
    (X.pattern ?? (X.pattern = C3), K$.init($, X));
  });
function oq($, X = null) {
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
var BQ = q("$ZodJWT", ($, X) => {
    (K$.init($, X),
      ($._zod.check = (J) => {
        if (oq(J.value, X.alg)) return;
        J.issues.push({
          code: "invalid_format",
          format: "jwt",
          input: J.value,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  qQ = q("$ZodCustomStringFormat", ($, X) => {
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
  e9 = q("$ZodNumber", ($, X) => {
    (p.init($, X),
      ($._zod.pattern = $._zod.bag.pattern ?? g3),
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
  DQ = q("$ZodNumber", ($, X) => {
    (p3.init($, X), e9.init($, X));
  }),
  l0 = q("$ZodBoolean", ($, X) => {
    (p.init($, X),
      ($._zod.pattern = h3),
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
  $X = q("$ZodBigInt", ($, X) => {
    (p.init($, X),
      ($._zod.pattern = f3),
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
  FQ = q("$ZodBigInt", ($, X) => {
    (i3.init($, X), $X.init($, X));
  }),
  jQ = q("$ZodSymbol", ($, X) => {
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
  LQ = q("$ZodUndefined", ($, X) => {
    (p.init($, X),
      ($._zod.pattern = m3),
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
  MQ = q("$ZodNull", ($, X) => {
    (p.init($, X),
      ($._zod.pattern = u3),
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
  AQ = q("$ZodAny", ($, X) => {
    (p.init($, X), ($._zod.parse = (J) => J));
  }),
  c1 = q("$ZodUnknown", ($, X) => {
    (p.init($, X), ($._zod.parse = (J) => J));
  }),
  IQ = q("$ZodNever", ($, X) => {
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
  ZQ = q("$ZodVoid", ($, X) => {
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
  bQ = q("$ZodDate", ($, X) => {
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
function yq($, X, J) {
  if ($.issues.length) X.issues.push(...z6(J, $.issues));
  X.value[J] = $.value;
}
var c0 = q("$ZodArray", ($, X) => {
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
          H = X.element._zod.run({ value: G, issues: [] }, Y);
        if (H instanceof Promise) W.push(H.then((U) => yq(U, J, z)));
        else yq(H, J, z);
      }
      if (W.length) return Promise.all(W).then(() => J);
      return J;
    }));
});
function o7($, X, J) {
  if ($.issues.length) X.issues.push(...z6(J, $.issues));
  X.value[J] = $.value;
}
function gq($, X, J, Y) {
  if ($.issues.length)
    if (Y[J] === void 0)
      if (J in Y) X.value[J] = void 0;
      else X.value[J] = $.value;
    else X.issues.push(...z6(J, $.issues));
  else if ($.value === void 0) {
    if (J in Y) X.value[J] = void 0;
  } else X.value[J] = $.value;
}
var XX = q("$ZodObject", ($, X) => {
  p.init($, X);
  let J = n9(() => {
    let V = Object.keys(X.shape);
    for (let O of V)
      if (!(X.shape[O] instanceof p))
        throw Error(`Invalid element at key "${O}": expected a Zod schema`);
    let N = V3(X.shape);
    return {
      shape: X.shape,
      keys: V,
      keySet: new Set(V),
      numKeys: V.length,
      optionalKeys: new Set(N),
    };
  });
  G$($._zod, "propValues", () => {
    let V = X.shape,
      N = {};
    for (let O in V) {
      let w = V[O]._zod;
      if (w.values) {
        N[O] ?? (N[O] = new Set());
        for (let B of w.values) N[O].add(B);
      }
    }
    return N;
  });
  let Y = (V) => {
      let N = new r7(["shape", "payload", "ctx"]),
        O = J.value,
        w = (I) => {
          let Z = g1(I);
          return `shape[${Z}]._zod.run({ value: input[${Z}], issues: [] }, ctx)`;
        };
      N.write("const input = payload.value;");
      let B = Object.create(null),
        F = 0;
      for (let I of O.keys) B[I] = `key_${F++}`;
      N.write("const newResult = {}");
      for (let I of O.keys)
        if (O.optionalKeys.has(I)) {
          let Z = B[I];
          N.write(`const ${Z} = ${w(I)};`);
          let _ = g1(I);
          N.write(`
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
          (N.write(`const ${Z} = ${w(I)};`),
            N.write(`
          if (${Z}.issues.length) payload.issues = payload.issues.concat(${Z}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${g1(I)}, ...iss.path] : [${g1(I)}]
          })));`),
            N.write(`newResult[${g1(I)}] = ${Z}.value`));
        }
      (N.write("payload.value = newResult;"), N.write("return payload;"));
      let j = N.compile();
      return (I, Z) => j(V, I, Z);
    },
    Q,
    W = f0,
    z = !d9.jitless,
    H = z && U3.value,
    U = X.catchall,
    K;
  $._zod.parse = (V, N) => {
    K ?? (K = J.value);
    let O = V.value;
    if (!W(O))
      return (
        V.issues.push({
          expected: "object",
          code: "invalid_type",
          input: O,
          inst: $,
        }),
        V
      );
    let w = [];
    if (z && H && N?.async === !1 && N.jitless !== !0) {
      if (!Q) Q = Y(X.shape);
      V = Q(V, N);
    } else {
      V.value = {};
      let Z = K.shape;
      for (let _ of K.keys) {
        let T = Z[_],
          O$ = T._zod.run({ value: O[_], issues: [] }, N),
          x$ = T._zod.optin === "optional" && T._zod.optout === "optional";
        if (O$ instanceof Promise)
          w.push(O$.then((O6) => (x$ ? gq(O6, V, _, O) : o7(O6, V, _))));
        else if (x$) gq(O$, V, _, O);
        else o7(O$, V, _);
      }
    }
    if (!U) return w.length ? Promise.all(w).then(() => V) : V;
    let B = [],
      F = K.keySet,
      j = U._zod,
      I = j.def.type;
    for (let Z of Object.keys(O)) {
      if (F.has(Z)) continue;
      if (I === "never") {
        B.push(Z);
        continue;
      }
      let _ = j.run({ value: O[Z], issues: [] }, N);
      if (_ instanceof Promise) w.push(_.then((T) => o7(T, V, Z)));
      else o7(_, V, Z);
    }
    if (B.length)
      V.issues.push({ code: "unrecognized_keys", keys: B, input: O, inst: $ });
    if (!w.length) return V;
    return Promise.all(w).then(() => {
      return V;
    });
  };
});
function hq($, X, J, Y) {
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
var JX = q("$ZodUnion", ($, X) => {
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
          return new RegExp(`^(${J.map((Y) => r9(Y.source)).join("|")})$`);
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
        if (!Q) return hq(W, J, $, Y);
        return Promise.all(W).then((z) => {
          return hq(z, J, $, Y);
        });
      }));
  }),
  RQ = q("$ZodDiscriminatedUnion", ($, X) => {
    JX.init($, X);
    let J = $._zod.parse;
    G$($._zod, "propValues", () => {
      let Q = {};
      for (let W of X.options) {
        let z = W._zod.propValues;
        if (!z || Object.keys(z).length === 0)
          throw Error(
            `Invalid discriminated union option at index "${X.options.indexOf(W)}"`,
          );
        for (let [G, H] of Object.entries(z)) {
          if (!Q[G]) Q[G] = new Set();
          for (let U of H) Q[G].add(U);
        }
      }
      return Q;
    });
    let Y = n9(() => {
      let Q = X.options,
        W = new Map();
      for (let z of Q) {
        let G = z._zod.propValues[X.discriminator];
        if (!G || G.size === 0)
          throw Error(
            `Invalid discriminated union option at index "${X.options.indexOf(z)}"`,
          );
        for (let H of G) {
          if (W.has(H))
            throw Error(`Duplicate discriminator value "${String(H)}"`);
          W.set(H, z);
        }
      }
      return W;
    });
    $._zod.parse = (Q, W) => {
      let z = Q.value;
      if (!f0(z))
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
  PQ = q("$ZodIntersection", ($, X) => {
    (p.init($, X),
      ($._zod.parse = (J, Y) => {
        let Q = J.value,
          W = X.left._zod.run({ value: Q, issues: [] }, Y),
          z = X.right._zod.run({ value: Q, issues: [] }, Y);
        if (W instanceof Promise || z instanceof Promise)
          return Promise.all([W, z]).then(([H, U]) => {
            return uq(J, H, U);
          });
        return uq(J, W, z);
      }));
  });
function UG($, X) {
  if ($ === X) return { valid: !0, data: $ };
  if ($ instanceof Date && X instanceof Date && +$ === +X)
    return { valid: !0, data: $ };
  if (y0($) && y0(X)) {
    let J = Object.keys(X),
      Y = Object.keys($).filter((W) => J.indexOf(W) !== -1),
      Q = { ...$, ...X };
    for (let W of Y) {
      let z = UG($[W], X[W]);
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
        z = UG(Q, W);
      if (!z.valid)
        return { valid: !1, mergeErrorPath: [Y, ...z.mergeErrorPath] };
      J.push(z.data);
    }
    return { valid: !0, data: J };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function uq($, X, J) {
  if (X.issues.length) $.issues.push(...X.issues);
  if (J.issues.length) $.issues.push(...J.issues);
  if (h1($)) return $;
  let Y = UG(X.value, J.value);
  if (!Y.valid)
    throw Error(
      `Unmergable intersection. Error path: ${JSON.stringify(Y.mergeErrorPath)}`,
    );
  return (($.value = Y.data), $);
}
var X1 = q("$ZodTuple", ($, X) => {
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
      let U = z.length > J.length,
        K = z.length < Y - 1;
      if (U || K)
        return (
          Q.issues.push({
            input: z,
            inst: $,
            origin: "array",
            ...(U
              ? { code: "too_big", maximum: J.length }
              : { code: "too_small", minimum: J.length }),
          }),
          Q
        );
    }
    let H = -1;
    for (let U of J) {
      if ((H++, H >= z.length)) {
        if (H >= Y) continue;
      }
      let K = U._zod.run({ value: z[H], issues: [] }, W);
      if (K instanceof Promise) G.push(K.then((V) => t7(V, Q, H)));
      else t7(K, Q, H);
    }
    if (X.rest) {
      let U = z.slice(J.length);
      for (let K of U) {
        H++;
        let V = X.rest._zod.run({ value: K, issues: [] }, W);
        if (V instanceof Promise) G.push(V.then((N) => t7(N, Q, H)));
        else t7(V, Q, H);
      }
    }
    if (G.length) return Promise.all(G).then(() => Q);
    return Q;
  };
});
function t7($, X, J) {
  if ($.issues.length) X.issues.push(...z6(J, $.issues));
  X.value[J] = $.value;
}
var EQ = q("$ZodRecord", ($, X) => {
    (p.init($, X),
      ($._zod.parse = (J, Y) => {
        let Q = J.value;
        if (!y0(Q))
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
          for (let H of z)
            if (
              typeof H === "string" ||
              typeof H === "number" ||
              typeof H === "symbol"
            ) {
              let U = X.valueType._zod.run({ value: Q[H], issues: [] }, Y);
              if (U instanceof Promise)
                W.push(
                  U.then((K) => {
                    if (K.issues.length) J.issues.push(...z6(H, K.issues));
                    J.value[H] = K.value;
                  }),
                );
              else {
                if (U.issues.length) J.issues.push(...z6(H, U.issues));
                J.value[H] = U.value;
              }
            }
          let G;
          for (let H in Q) if (!z.has(H)) ((G = G ?? []), G.push(H));
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
                issues: G.issues.map((U) => L6(U, Y, v$())),
                input: z,
                path: [z],
                inst: $,
              }),
                (J.value[G.value] = G.value));
              continue;
            }
            let H = X.valueType._zod.run({ value: Q[z], issues: [] }, Y);
            if (H instanceof Promise)
              W.push(
                H.then((U) => {
                  if (U.issues.length) J.issues.push(...z6(z, U.issues));
                  J.value[G.value] = U.value;
                }),
              );
            else {
              if (H.issues.length) J.issues.push(...z6(z, H.issues));
              J.value[G.value] = H.value;
            }
          }
        }
        if (W.length) return Promise.all(W).then(() => J);
        return J;
      }));
  }),
  SQ = q("$ZodMap", ($, X) => {
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
          let H = X.keyType._zod.run({ value: z, issues: [] }, Y),
            U = X.valueType._zod.run({ value: G, issues: [] }, Y);
          if (H instanceof Promise || U instanceof Promise)
            W.push(
              Promise.all([H, U]).then(([K, V]) => {
                mq(K, V, J, z, Q, $, Y);
              }),
            );
          else mq(H, U, J, z, Q, $, Y);
        }
        if (W.length) return Promise.all(W).then(() => J);
        return J;
      }));
  });
function mq($, X, J, Y, Q, W, z) {
  if ($.issues.length)
    if (o9.has(typeof Y)) J.issues.push(...z6(Y, $.issues));
    else
      J.issues.push({
        origin: "map",
        code: "invalid_key",
        input: Q,
        inst: W,
        issues: $.issues.map((G) => L6(G, z, v$())),
      });
  if (X.issues.length)
    if (o9.has(typeof Y)) J.issues.push(...z6(Y, X.issues));
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
var vQ = q("$ZodSet", ($, X) => {
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
        if (G instanceof Promise) W.push(G.then((H) => lq(H, J)));
        else lq(G, J);
      }
      if (W.length) return Promise.all(W).then(() => J);
      return J;
    }));
});
function lq($, X) {
  if ($.issues.length) X.issues.push(...$.issues);
  X.value.add($.value);
}
var CQ = q("$ZodEnum", ($, X) => {
    p.init($, X);
    let J = i9(X.entries);
    (($._zod.values = new Set(J)),
      ($._zod.pattern = new RegExp(
        `^(${J.filter((Y) => o9.has(typeof Y))
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
  kQ = q("$ZodLiteral", ($, X) => {
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
  _Q = q("$ZodFile", ($, X) => {
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
  d0 = q("$ZodTransform", ($, X) => {
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
  xQ = q("$ZodOptional", ($, X) => {
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
        return J ? new RegExp(`^(${r9(J.source)})?$`) : void 0;
      }),
      ($._zod.parse = (J, Y) => {
        if (X.innerType._zod.optin === "optional")
          return X.innerType._zod.run(J, Y);
        if (J.value === void 0) return J;
        return X.innerType._zod.run(J, Y);
      }));
  }),
  TQ = q("$ZodNullable", ($, X) => {
    (p.init($, X),
      G$($._zod, "optin", () => X.innerType._zod.optin),
      G$($._zod, "optout", () => X.innerType._zod.optout),
      G$($._zod, "pattern", () => {
        let J = X.innerType._zod.pattern;
        return J ? new RegExp(`^(${r9(J.source)}|null)$`) : void 0;
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
  fQ = q("$ZodDefault", ($, X) => {
    (p.init($, X),
      ($._zod.optin = "optional"),
      G$($._zod, "values", () => X.innerType._zod.values),
      ($._zod.parse = (J, Y) => {
        if (J.value === void 0) return ((J.value = X.defaultValue), J);
        let Q = X.innerType._zod.run(J, Y);
        if (Q instanceof Promise) return Q.then((W) => cq(W, X));
        return cq(Q, X);
      }));
  });
function cq($, X) {
  if ($.value === void 0) $.value = X.defaultValue;
  return $;
}
var yQ = q("$ZodPrefault", ($, X) => {
    (p.init($, X),
      ($._zod.optin = "optional"),
      G$($._zod, "values", () => X.innerType._zod.values),
      ($._zod.parse = (J, Y) => {
        if (J.value === void 0) J.value = X.defaultValue;
        return X.innerType._zod.run(J, Y);
      }));
  }),
  gQ = q("$ZodNonOptional", ($, X) => {
    (p.init($, X),
      G$($._zod, "values", () => {
        let J = X.innerType._zod.values;
        return J ? new Set([...J].filter((Y) => Y !== void 0)) : void 0;
      }),
      ($._zod.parse = (J, Y) => {
        let Q = X.innerType._zod.run(J, Y);
        if (Q instanceof Promise) return Q.then((W) => dq(W, $));
        return dq(Q, $);
      }));
  });
function dq($, X) {
  if (!$.issues.length && $.value === void 0)
    $.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: $.value,
      inst: X,
    });
  return $;
}
var hQ = q("$ZodSuccess", ($, X) => {
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
  uQ = q("$ZodCatch", ($, X) => {
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
  mQ = q("$ZodNaN", ($, X) => {
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
  p0 = q("$ZodPipe", ($, X) => {
    (p.init($, X),
      G$($._zod, "values", () => X.in._zod.values),
      G$($._zod, "optin", () => X.in._zod.optin),
      G$($._zod, "optout", () => X.out._zod.optout),
      ($._zod.parse = (J, Y) => {
        let Q = X.in._zod.run(J, Y);
        if (Q instanceof Promise) return Q.then((W) => pq(W, X, Y));
        return pq(Q, X, Y);
      }));
  });
function pq($, X, J) {
  if (h1($)) return $;
  return X.out._zod.run({ value: $.value, issues: $.issues }, J);
}
var lQ = q("$ZodReadonly", ($, X) => {
  (p.init($, X),
    G$($._zod, "propValues", () => X.innerType._zod.propValues),
    G$($._zod, "values", () => X.innerType._zod.values),
    G$($._zod, "optin", () => X.innerType._zod.optin),
    G$($._zod, "optout", () => X.innerType._zod.optout),
    ($._zod.parse = (J, Y) => {
      let Q = X.innerType._zod.run(J, Y);
      if (Q instanceof Promise) return Q.then(iq);
      return iq(Q);
    }));
});
function iq($) {
  return (($.value = Object.freeze($.value)), $);
}
var cQ = q("$ZodTemplateLiteral", ($, X) => {
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
      } else if (Y === null || K3.has(typeof Y)) J.push(I4(`${Y}`));
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
  dQ = q("$ZodPromise", ($, X) => {
    (p.init($, X),
      ($._zod.parse = (J, Y) => {
        return Promise.resolve(J.value).then((Q) =>
          X.innerType._zod.run({ value: Q, issues: [] }, Y),
        );
      }));
  }),
  pQ = q("$ZodLazy", ($, X) => {
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
  iQ = q("$ZodCustom", ($, X) => {
    (I$.init($, X),
      p.init($, X),
      ($._zod.parse = (J, Y) => {
        return J;
      }),
      ($._zod.check = (J) => {
        let Y = J.value,
          Q = X.fn(Y);
        if (Q instanceof Promise) return Q.then((W) => nq(W, J, Y, $));
        nq(Q, J, Y, $);
        return;
      }));
  });
function nq($, X, J, Y) {
  if (!$) {
    let Q = {
      code: "custom",
      input: J,
      inst: Y,
      path: [...(Y._zod.def.path ?? [])],
      continue: !Y._zod.def.abort,
    };
    if (Y._zod.def.params) Q.params = Y._zod.def.params;
    X.issues.push(w3(Q));
  }
}
var i0 = {};
D1(i0, {
  zhTW: () => sG,
  zhCN: () => aG,
  vi: () => tG,
  ur: () => oG,
  ua: () => rG,
  tr: () => nG,
  th: () => iG,
  ta: () => pG,
  sv: () => dG,
  sl: () => cG,
  ru: () => lG,
  pt: () => mG,
  ps: () => hG,
  pl: () => uG,
  ota: () => gG,
  no: () => yG,
  nl: () => fG,
  ms: () => TG,
  mk: () => xG,
  ko: () => _G,
  kh: () => kG,
  ja: () => CG,
  it: () => vG,
  id: () => SG,
  hu: () => EG,
  he: () => PG,
  frCA: () => RG,
  fr: () => bG,
  fi: () => ZG,
  fa: () => IG,
  es: () => AG,
  eo: () => MG,
  en: () => QX,
  de: () => LG,
  cs: () => jG,
  ca: () => FG,
  be: () => DG,
  az: () => qG,
  ar: () => BG,
});
var ov = () => {
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
function BG() {
  return { localeError: ov() };
}
var tv = () => {
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
function qG() {
  return { localeError: tv() };
}
function aq($, X, J, Y) {
  let Q = Math.abs($),
    W = Q % 10,
    z = Q % 100;
  if (z >= 11 && z <= 19) return Y;
  if (W === 1) return X;
  if (W >= 2 && W <= 4) return J;
  return Y;
}
var av = () => {
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
            H = aq(G, z.unit.one, z.unit.few, z.unit.many);
          return `Занадта вялікі: чакалася, што ${Q.origin ?? "значэнне"} павінна ${z.verb} ${W}${Q.maximum.toString()} ${H}`;
        }
        return `Занадта вялікі: чакалася, што ${Q.origin ?? "значэнне"} павінна быць ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z) {
          let G = Number(Q.minimum),
            H = aq(G, z.unit.one, z.unit.few, z.unit.many);
          return `Занадта малы: чакалася, што ${Q.origin} павінна ${z.verb} ${W}${Q.minimum.toString()} ${H}`;
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
function DG() {
  return { localeError: av() };
}
var sv = () => {
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
function FG() {
  return { localeError: sv() };
}
var ev = () => {
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
function jG() {
  return { localeError: ev() };
}
var $C = () => {
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
function LG() {
  return { localeError: $C() };
}
var XC = ($) => {
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
  JC = () => {
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
          return `Invalid input: expected ${Y.expected}, received ${XC(Y.input)}`;
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
function QX() {
  return { localeError: JC() };
}
var QC = ($) => {
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
  YC = () => {
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
          return `Nevalida enigo: atendiĝis ${Y.expected}, riceviĝis ${QC(Y.input)}`;
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
function MG() {
  return { localeError: YC() };
}
var WC = () => {
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
function AG() {
  return { localeError: WC() };
}
var zC = () => {
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
function IG() {
  return { localeError: zC() };
}
var GC = () => {
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
function ZG() {
  return { localeError: GC() };
}
var HC = () => {
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
function bG() {
  return { localeError: HC() };
}
var UC = () => {
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
function RG() {
  return { localeError: UC() };
}
var KC = () => {
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
function PG() {
  return { localeError: KC() };
}
var VC = () => {
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
function EG() {
  return { localeError: VC() };
}
var NC = () => {
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
function SG() {
  return { localeError: NC() };
}
var OC = () => {
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
function vG() {
  return { localeError: OC() };
}
var wC = () => {
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
function CG() {
  return { localeError: wC() };
}
var BC = () => {
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
function kG() {
  return { localeError: BC() };
}
var qC = () => {
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
          H = G?.unit ?? "요소";
        if (G)
          return `${Q.origin ?? "값"}이 너무 큽니다: ${Q.maximum.toString()}${H} ${W}${z}`;
        return `${Q.origin ?? "값"}이 너무 큽니다: ${Q.maximum.toString()} ${W}${z}`;
      }
      case "too_small": {
        let W = Q.inclusive ? "이상" : "초과",
          z = W === "이상" ? "이어야 합니다" : "여야 합니다",
          G = X(Q.origin),
          H = G?.unit ?? "요소";
        if (G)
          return `${Q.origin ?? "값"}이 너무 작습니다: ${Q.minimum.toString()}${H} ${W}${z}`;
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
function _G() {
  return { localeError: qC() };
}
var DC = () => {
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
function xG() {
  return { localeError: DC() };
}
var FC = () => {
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
function TG() {
  return { localeError: FC() };
}
var jC = () => {
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
function fG() {
  return { localeError: jC() };
}
var LC = () => {
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
function yG() {
  return { localeError: LC() };
}
var MC = () => {
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
function gG() {
  return { localeError: MC() };
}
var AC = () => {
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
function hG() {
  return { localeError: AC() };
}
var IC = () => {
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
function uG() {
  return { localeError: IC() };
}
var ZC = () => {
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
function mG() {
  return { localeError: ZC() };
}
function sq($, X, J, Y) {
  let Q = Math.abs($),
    W = Q % 10,
    z = Q % 100;
  if (z >= 11 && z <= 19) return Y;
  if (W === 1) return X;
  if (W >= 2 && W <= 4) return J;
  return Y;
}
var bC = () => {
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
            H = sq(G, z.unit.one, z.unit.few, z.unit.many);
          return `Слишком большое значение: ожидалось, что ${Q.origin ?? "значение"} будет иметь ${W}${Q.maximum.toString()} ${H}`;
        }
        return `Слишком большое значение: ожидалось, что ${Q.origin ?? "значение"} будет ${W}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let W = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z) {
          let G = Number(Q.minimum),
            H = sq(G, z.unit.one, z.unit.few, z.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${Q.origin} будет иметь ${W}${Q.minimum.toString()} ${H}`;
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
function lG() {
  return { localeError: bC() };
}
var RC = () => {
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
function cG() {
  return { localeError: RC() };
}
var PC = () => {
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
function dG() {
  return { localeError: PC() };
}
var EC = () => {
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
function pG() {
  return { localeError: EC() };
}
var SC = () => {
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
function iG() {
  return { localeError: SC() };
}
var vC = ($) => {
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
  CC = () => {
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
          return `Geçersiz değer: beklenen ${Y.expected}, alınan ${vC(Y.input)}`;
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
function nG() {
  return { localeError: CC() };
}
var kC = () => {
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
function rG() {
  return { localeError: kC() };
}
var _C = () => {
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
function oG() {
  return { localeError: _C() };
}
var xC = () => {
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
function tG() {
  return { localeError: xC() };
}
var TC = () => {
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
function aG() {
  return { localeError: TC() };
}
var fC = () => {
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
function sG() {
  return { localeError: fC() };
}
var nQ = Symbol("ZodOutput"),
  rQ = Symbol("ZodInput");
class YX {
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
function WX() {
  return new YX();
}
var G6 = WX();
function oQ($, X) {
  return new $({ type: "string", ...P(X) });
}
function eG($, X) {
  return new $({ type: "string", coerce: !0, ...P(X) });
}
function zX($, X) {
  return new $({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function n0($, X) {
  return new $({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function GX($, X) {
  return new $({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function HX($, X) {
  return new $({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...P(X),
  });
}
function UX($, X) {
  return new $({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...P(X),
  });
}
function KX($, X) {
  return new $({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...P(X),
  });
}
function VX($, X) {
  return new $({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function NX($, X) {
  return new $({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function OX($, X) {
  return new $({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function wX($, X) {
  return new $({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function BX($, X) {
  return new $({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function qX($, X) {
  return new $({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function DX($, X) {
  return new $({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function FX($, X) {
  return new $({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function jX($, X) {
  return new $({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function LX($, X) {
  return new $({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function MX($, X) {
  return new $({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function AX($, X) {
  return new $({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function IX($, X) {
  return new $({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function ZX($, X) {
  return new $({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function bX($, X) {
  return new $({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function RX($, X) {
  return new $({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
var tQ = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
function $H($, X) {
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
function XH($, X) {
  return new $({
    type: "string",
    format: "date",
    check: "string_format",
    ...P(X),
  });
}
function JH($, X) {
  return new $({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...P(X),
  });
}
function QH($, X) {
  return new $({
    type: "string",
    format: "duration",
    check: "string_format",
    ...P(X),
  });
}
function aQ($, X) {
  return new $({ type: "number", checks: [], ...P(X) });
}
function YH($, X) {
  return new $({ type: "number", coerce: !0, checks: [], ...P(X) });
}
function sQ($, X) {
  return new $({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...P(X),
  });
}
function eQ($, X) {
  return new $({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...P(X),
  });
}
function $5($, X) {
  return new $({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...P(X),
  });
}
function X5($, X) {
  return new $({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...P(X),
  });
}
function J5($, X) {
  return new $({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...P(X),
  });
}
function Q5($, X) {
  return new $({ type: "boolean", ...P(X) });
}
function WH($, X) {
  return new $({ type: "boolean", coerce: !0, ...P(X) });
}
function Y5($, X) {
  return new $({ type: "bigint", ...P(X) });
}
function zH($, X) {
  return new $({ type: "bigint", coerce: !0, ...P(X) });
}
function W5($, X) {
  return new $({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...P(X),
  });
}
function z5($, X) {
  return new $({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...P(X),
  });
}
function G5($, X) {
  return new $({ type: "symbol", ...P(X) });
}
function H5($, X) {
  return new $({ type: "undefined", ...P(X) });
}
function U5($, X) {
  return new $({ type: "null", ...P(X) });
}
function K5($) {
  return new $({ type: "any" });
}
function d1($) {
  return new $({ type: "unknown" });
}
function V5($, X) {
  return new $({ type: "never", ...P(X) });
}
function N5($, X) {
  return new $({ type: "void", ...P(X) });
}
function O5($, X) {
  return new $({ type: "date", ...P(X) });
}
function GH($, X) {
  return new $({ type: "date", coerce: !0, ...P(X) });
}
function w5($, X) {
  return new $({ type: "nan", ...P(X) });
}
function Z4($, X) {
  return new i7({ check: "less_than", ...P(X), value: $, inclusive: !1 });
}
function R6($, X) {
  return new i7({ check: "less_than", ...P(X), value: $, inclusive: !0 });
}
function b4($, X) {
  return new n7({ check: "greater_than", ...P(X), value: $, inclusive: !1 });
}
function H6($, X) {
  return new n7({ check: "greater_than", ...P(X), value: $, inclusive: !0 });
}
function HH($) {
  return b4(0, $);
}
function UH($) {
  return Z4(0, $);
}
function KH($) {
  return R6(0, $);
}
function VH($) {
  return H6(0, $);
}
function p1($, X) {
  return new d3({ check: "multiple_of", ...P(X), value: $ });
}
function r0($, X) {
  return new n3({ check: "max_size", ...P(X), maximum: $ });
}
function i1($, X) {
  return new r3({ check: "min_size", ...P(X), minimum: $ });
}
function PX($, X) {
  return new o3({ check: "size_equals", ...P(X), size: $ });
}
function o0($, X) {
  return new t3({ check: "max_length", ...P(X), maximum: $ });
}
function J1($, X) {
  return new a3({ check: "min_length", ...P(X), minimum: $ });
}
function t0($, X) {
  return new s3({ check: "length_equals", ...P(X), length: $ });
}
function EX($, X) {
  return new e3({
    check: "string_format",
    format: "regex",
    ...P(X),
    pattern: $,
  });
}
function SX($) {
  return new $G({ check: "string_format", format: "lowercase", ...P($) });
}
function vX($) {
  return new XG({ check: "string_format", format: "uppercase", ...P($) });
}
function CX($, X) {
  return new JG({
    check: "string_format",
    format: "includes",
    ...P(X),
    includes: $,
  });
}
function kX($, X) {
  return new QG({
    check: "string_format",
    format: "starts_with",
    ...P(X),
    prefix: $,
  });
}
function _X($, X) {
  return new YG({
    check: "string_format",
    format: "ends_with",
    ...P(X),
    suffix: $,
  });
}
function NH($, X, J) {
  return new WG({ check: "property", property: $, schema: X, ...P(J) });
}
function xX($, X) {
  return new zG({ check: "mime_type", mime: $, ...P(X) });
}
function R4($) {
  return new GG({ check: "overwrite", tx: $ });
}
function TX($) {
  return R4((X) => X.normalize($));
}
function fX() {
  return R4(($) => $.trim());
}
function yX() {
  return R4(($) => $.toLowerCase());
}
function gX() {
  return R4(($) => $.toUpperCase());
}
function hX($, X, J) {
  return new $({ type: "array", element: X, ...P(J) });
}
function yC($, X, J) {
  return new $({ type: "union", options: X, ...P(J) });
}
function gC($, X, J, Y) {
  return new $({ type: "union", options: J, discriminator: X, ...P(Y) });
}
function hC($, X, J) {
  return new $({ type: "intersection", left: X, right: J });
}
function OH($, X, J, Y) {
  let Q = J instanceof p;
  return new $({
    type: "tuple",
    items: X,
    rest: Q ? J : null,
    ...P(Q ? Y : J),
  });
}
function uC($, X, J, Y) {
  return new $({ type: "record", keyType: X, valueType: J, ...P(Y) });
}
function mC($, X, J, Y) {
  return new $({ type: "map", keyType: X, valueType: J, ...P(Y) });
}
function lC($, X, J) {
  return new $({ type: "set", valueType: X, ...P(J) });
}
function cC($, X, J) {
  let Y = Array.isArray(X) ? Object.fromEntries(X.map((Q) => [Q, Q])) : X;
  return new $({ type: "enum", entries: Y, ...P(J) });
}
function dC($, X, J) {
  return new $({ type: "enum", entries: X, ...P(J) });
}
function pC($, X, J) {
  return new $({
    type: "literal",
    values: Array.isArray(X) ? X : [X],
    ...P(J),
  });
}
function B5($, X) {
  return new $({ type: "file", ...P(X) });
}
function iC($, X) {
  return new $({ type: "transform", transform: X });
}
function nC($, X) {
  return new $({ type: "optional", innerType: X });
}
function rC($, X) {
  return new $({ type: "nullable", innerType: X });
}
function oC($, X, J) {
  return new $({
    type: "default",
    innerType: X,
    get defaultValue() {
      return typeof J === "function" ? J() : J;
    },
  });
}
function tC($, X, J) {
  return new $({ type: "nonoptional", innerType: X, ...P(J) });
}
function aC($, X) {
  return new $({ type: "success", innerType: X });
}
function sC($, X, J) {
  return new $({
    type: "catch",
    innerType: X,
    catchValue: typeof J === "function" ? J : () => J,
  });
}
function eC($, X, J) {
  return new $({ type: "pipe", in: X, out: J });
}
function $k($, X) {
  return new $({ type: "readonly", innerType: X });
}
function Xk($, X, J) {
  return new $({ type: "template_literal", parts: X, ...P(J) });
}
function Jk($, X) {
  return new $({ type: "lazy", getter: X });
}
function Qk($, X) {
  return new $({ type: "promise", innerType: X });
}
function q5($, X, J) {
  let Y = P(J);
  return (
    Y.abort ?? (Y.abort = !0),
    new $({ type: "custom", check: "custom", fn: X, ...Y })
  );
}
function D5($, X, J) {
  return new $({ type: "custom", check: "custom", fn: X, ...P(J) });
}
function F5($, X) {
  let J = P(X),
    Y = J.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
    Q = J.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  if (J.case !== "sensitive")
    ((Y = Y.map((w) => (typeof w === "string" ? w.toLowerCase() : w))),
      (Q = Q.map((w) => (typeof w === "string" ? w.toLowerCase() : w))));
  let W = new Set(Y),
    z = new Set(Q),
    G = $.Pipe ?? p0,
    H = $.Boolean ?? l0,
    U = $.String ?? $1,
    V = new ($.Transform ?? d0)({
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
              inst: V,
            }),
            {}
          );
      },
      error: J.error,
    }),
    N = new G({
      type: "pipe",
      in: new U({ type: "string", error: J.error }),
      out: V,
      error: J.error,
    });
  return new G({
    type: "pipe",
    in: N,
    out: new H({ type: "boolean", error: J.error }),
    error: J.error,
  });
}
function j5($, X, J, Y = {}) {
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
class wH {
  constructor($) {
    ((this._def = $), (this.def = $));
  }
  implement($) {
    if (typeof $ !== "function")
      throw Error("implement() must be called with a function");
    let X = (...J) => {
      let Y = this._def.input
        ? u1(this._def.input, J, void 0, { callee: X })
        : J;
      if (!Array.isArray(Y))
        throw Error("Invalid arguments schema: not an array or tuple schema.");
      let Q = $(...Y);
      return this._def.output
        ? u1(this._def.output, Q, void 0, { callee: X })
        : Q;
    };
    return X;
  }
  implementAsync($) {
    if (typeof $ !== "function")
      throw Error("implement() must be called with a function");
    let X = async (...J) => {
      let Y = this._def.input
        ? await m1(this._def.input, J, void 0, { callee: X })
        : J;
      if (!Array.isArray(Y))
        throw Error("Invalid arguments schema: not an array or tuple schema.");
      let Q = await $(...Y);
      return this._def.output
        ? m1(this._def.output, Q, void 0, { callee: X })
        : Q;
    };
    return X;
  }
  input(...$) {
    let X = this.constructor;
    if (Array.isArray($[0]))
      return new X({
        type: "function",
        input: new X1({ type: "tuple", items: $[0], rest: $[1] }),
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
function L5($) {
  return new wH({
    type: "function",
    input: Array.isArray($?.input)
      ? OH(X1, $?.input)
      : ($?.input ?? hX(c0, d1(c1))),
    output: $?.output ?? d1(c1),
  });
}
class M5 {
  constructor($) {
    ((this.counter = 0),
      (this.metadataRegistry = $?.metadata ?? G6),
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
        V = $._zod.parent;
      if (V)
        ((z.ref = V), this.process(V, K), (this.seen.get(V).isParent = !0));
      else {
        let N = z.schema;
        switch (Y.type) {
          case "string": {
            let O = N;
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
            let O = N,
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
            let O = N;
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
            N.type = "null";
            break;
          }
          case "any":
            break;
          case "unknown":
            break;
          case "undefined":
          case "never": {
            N.not = {};
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
            let O = N,
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
            let O = N;
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
            let O = N;
            O.anyOf = Y.options.map((w, B) =>
              this.process(w, { ...K, path: [...K.path, "anyOf", B] }),
            );
            break;
          }
          case "intersection": {
            let O = N,
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
            let O = N;
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
            let O = N;
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
            let O = N,
              w = i9(Y.entries);
            if (w.every((B) => typeof B === "number")) O.type = "number";
            if (w.every((B) => typeof B === "string")) O.type = "string";
            O.enum = w;
            break;
          }
          case "literal": {
            let O = N,
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
            let O = N,
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
            N.anyOf = [O, { type: "null" }];
            break;
          }
          case "nonoptional": {
            (this.process(Y.innerType, K), (z.ref = Y.innerType));
            break;
          }
          case "success": {
            let O = N;
            O.type = "boolean";
            break;
          }
          case "default": {
            (this.process(Y.innerType, K),
              (z.ref = Y.innerType),
              (N.default = JSON.parse(JSON.stringify(Y.defaultValue))));
            break;
          }
          case "prefault": {
            if (
              (this.process(Y.innerType, K),
              (z.ref = Y.innerType),
              this.io === "input")
            )
              N._prefault = JSON.parse(JSON.stringify(Y.defaultValue));
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
            N.default = O;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            let O = N,
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
              (N.readOnly = !0));
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
    let H = this.metadataRegistry.get($);
    if (H) Object.assign(z.schema, H);
    if (this.io === "input" && y$($))
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
    let Q = (U) => {
        let K = this.target === "draft-2020-12" ? "$defs" : "definitions";
        if (J.external) {
          let w = J.external.registry.get(U[0])?.id;
          if (w) return { ref: J.external.uri(w) };
          let B = U[1].defId ?? U[1].schema.id ?? `schema${this.counter++}`;
          return (
            (U[1].defId = B),
            { defId: B, ref: `${J.external.uri("__shared")}#/${K}/${B}` }
          );
        }
        if (U[1] === Y) return { ref: "#" };
        let N = `${"#"}/${K}/`,
          O = U[1].schema.id ?? `__schema${this.counter++}`;
        return { defId: O, ref: N + O };
      },
      W = (U) => {
        if (U[1].schema.$ref) return;
        let K = U[1],
          { ref: V, defId: N } = Q(U);
        if (((K.def = { ...K.schema }), N)) K.defId = N;
        let O = K.schema;
        for (let w in O) delete O[w];
        O.$ref = V;
      };
    for (let U of this.seen.entries()) {
      let K = U[1];
      if ($ === U[0]) {
        W(U);
        continue;
      }
      if (J.external) {
        let N = J.external.registry.get(U[0])?.id;
        if ($ !== U[0] && N) {
          W(U);
          continue;
        }
      }
      if (this.metadataRegistry.get(U[0])?.id) {
        W(U);
        continue;
      }
      if (K.cycle) {
        if (J.cycles === "throw")
          throw Error(`Cycle detected: #/${K.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        else if (J.cycles === "ref") W(U);
        continue;
      }
      if (K.count > 1) {
        if (J.reused === "ref") {
          W(U);
          continue;
        }
      }
    }
    let z = (U, K) => {
      let V = this.seen.get(U),
        N = V.def ?? V.schema,
        O = { ...N };
      if (V.ref === null) return;
      let w = V.ref;
      if (((V.ref = null), w)) {
        z(w, K);
        let B = this.seen.get(w).schema;
        if (B.$ref && K.target === "draft-7")
          ((N.allOf = N.allOf ?? []), N.allOf.push(B));
        else (Object.assign(N, B), Object.assign(N, O));
      }
      if (!V.isParent)
        this.override({ zodSchema: U, jsonSchema: N, path: V.path ?? [] });
    };
    for (let U of [...this.seen.entries()].reverse())
      z(U[0], { target: this.target });
    let G = {};
    if (this.target === "draft-2020-12")
      G.$schema = "https://json-schema.org/draft/2020-12/schema";
    else if (this.target === "draft-7")
      G.$schema = "http://json-schema.org/draft-07/schema#";
    else console.warn(`Invalid target: ${this.target}`);
    Object.assign(G, Y.def);
    let H = J.external?.defs ?? {};
    for (let U of this.seen.entries()) {
      let K = U[1];
      if (K.def && K.defId) H[K.defId] = K.def;
    }
    if (!J.external && Object.keys(H).length > 0)
      if (this.target === "draft-2020-12") G.$defs = H;
      else G.definitions = H;
    try {
      return JSON.parse(JSON.stringify(G));
    } catch (U) {
      throw Error("Error converting schema to JSON.");
    }
  }
}
function a0($, X) {
  if ($ instanceof YX) {
    let Y = new M5(X),
      Q = {};
    for (let G of $._idmap.entries()) {
      let [H, U] = G;
      Y.process(U);
    }
    let W = {},
      z = { registry: $, uri: X?.uri || ((G) => G), defs: Q };
    for (let G of $._idmap.entries()) {
      let [H, U] = G;
      W[H] = Y.emit(U, { ...X, external: z });
    }
    if (Object.keys(Q).length > 0) {
      let G = Y.target === "draft-2020-12" ? "$defs" : "definitions";
      W.__shared = { [G]: Q };
    }
    return { schemas: W };
  }
  let J = new M5(X);
  return (J.process($), J.emit($, X));
}
function y$($, X) {
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
      return y$(Q.element, J);
    case "object": {
      for (let W in Q.shape) if (y$(Q.shape[W], J)) return !0;
      return !1;
    }
    case "union": {
      for (let W of Q.options) if (y$(W, J)) return !0;
      return !1;
    }
    case "intersection":
      return y$(Q.left, J) || y$(Q.right, J);
    case "tuple": {
      for (let W of Q.items) if (y$(W, J)) return !0;
      if (Q.rest && y$(Q.rest, J)) return !0;
      return !1;
    }
    case "record":
      return y$(Q.keyType, J) || y$(Q.valueType, J);
    case "map":
      return y$(Q.keyType, J) || y$(Q.valueType, J);
    case "set":
      return y$(Q.valueType, J);
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return y$(Q.innerType, J);
    case "lazy":
      return y$(Q.getter(), J);
    case "default":
      return y$(Q.innerType, J);
    case "prefault":
      return y$(Q.innerType, J);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return y$(Q.in, J) || y$(Q.out, J);
    case "success":
      return !1;
    case "catch":
      return !1;
    default:
  }
  throw Error(`Unknown schema type: ${Q.type}`);
}
var eq = {};
var Wk = q("ZodMiniType", ($, X) => {
  if (!$._zod) throw Error("Uninitialized schema in ZodMiniType.");
  (p.init($, X),
    ($.def = X),
    ($.parse = (J, Y) => u1($, J, Y, { callee: $.parse })),
    ($.safeParse = (J, Y) => a4($, J, Y)),
    ($.parseAsync = async (J, Y) => m1($, J, Y, { callee: $.parseAsync })),
    ($.safeParseAsync = async (J, Y) => s4($, J, Y)),
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
    ($.clone = (J, Y) => n$($, J, Y)),
    ($.brand = () => $),
    ($.register = (J, Y) => {
      return (J.add($, Y), $);
    }));
});
var zk = q("ZodMiniObject", ($, X) => {
  (XX.init($, X), Wk.init($, X), E.defineLazy($, "shape", () => X.shape));
});
function BH($, X) {
  let J = {
    type: "object",
    get shape() {
      return (E.assignProp(this, "shape", { ...$ }), this.shape);
    },
    ...E.normalizeParams(X),
  };
  return new zk(J);
}
function P6($) {
  return !!$._zod;
}
function n1($) {
  let X = Object.values($);
  if (X.length === 0) return BH({});
  let J = X.every(P6),
    Y = X.every((Q) => !P6(Q));
  if (J) return BH($);
  if (Y) return Eq($);
  throw Error("Mixed Zod versions detected in object shape.");
}
function Q1($, X) {
  if (P6($)) return a4($, X);
  return $.safeParse(X);
}
async function A5($, X) {
  if (P6($)) return await s4($, X);
  return await $.safeParseAsync(X);
}
function Y1($) {
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
function s0($) {
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
        return n1($);
    }
  }
  if (P6($)) {
    let J = $._zod?.def;
    if (J && (J.type === "object" || J.shape !== void 0)) return $;
  } else if ($.shape !== void 0) return $;
  return;
}
function I5($) {
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
function $D($) {
  return $.description;
}
function XD($) {
  if (P6($)) return $._zod?.def?.type === "optional";
  let X = $;
  if (typeof $.isOptional === "function") return $.isOptional();
  return X._def?.typeName === "ZodOptional";
}
function Z5($) {
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
var W1 = {};
D1(W1, {
  xid: () => Ik,
  void: () => dk,
  uuidv7: () => qk,
  uuidv6: () => Bk,
  uuidv4: () => wk,
  uuid: () => Ok,
  url: () => Dk,
  uppercase: () => vX,
  unknown: () => L$,
  union: () => V$,
  undefined: () => lk,
  ulid: () => Ak,
  uint64: () => uk,
  uint32: () => yk,
  tuple: () => rk,
  trim: () => fX,
  treeifyError: () => h7,
  transform: () => nH,
  toUpperCase: () => gX,
  toLowerCase: () => yX,
  toJSONSchema: () => a0,
  templateLiteral: () => Q_,
  symbol: () => mk,
  superRefine: () => gD,
  success: () => X_,
  stringbool: () => z_,
  stringFormat: () => _k,
  string: () => L,
  strictObject: () => nk,
  startsWith: () => kX,
  size: () => PX,
  setErrorMap: () => U_,
  set: () => ak,
  safeParseAsync: () => IH,
  safeParse: () => AH,
  registry: () => WX,
  regexes: () => e4,
  regex: () => EX,
  refine: () => yD,
  record: () => N$,
  readonly: () => CD,
  property: () => NH,
  promise: () => Y_,
  prettifyError: () => u7,
  preprocess: () => g5,
  prefault: () => ZD,
  positive: () => HH,
  pipe: () => C5,
  partialRecord: () => ok,
  parseAsync: () => MH,
  parse: () => LH,
  overwrite: () => R4,
  optional: () => j$,
  object: () => x,
  number: () => z$,
  nullish: () => $_,
  nullable: () => v5,
  null: () => k5,
  normalize: () => TX,
  nonpositive: () => KH,
  nonoptional: () => bD,
  nonnegative: () => VH,
  never: () => _5,
  negative: () => UH,
  nativeEnum: () => sk,
  nanoid: () => jk,
  nan: () => J_,
  multipleOf: () => p1,
  minSize: () => i1,
  minLength: () => J1,
  mime: () => xX,
  maxSize: () => r0,
  maxLength: () => o0,
  map: () => tk,
  lte: () => R6,
  lt: () => Z4,
  lowercase: () => SX,
  looseObject: () => r$,
  locales: () => i0,
  literal: () => g,
  length: () => t0,
  lazy: () => xD,
  ksuid: () => Zk,
  keyof: () => ik,
  jwt: () => kk,
  json: () => G_,
  iso: () => e0,
  ipv6: () => Rk,
  ipv4: () => bk,
  intersection: () => pX,
  int64: () => hk,
  int32: () => fk,
  int: () => ZH,
  instanceof: () => W_,
  includes: () => CX,
  guid: () => Nk,
  gte: () => H6,
  gt: () => b4,
  globalRegistry: () => G6,
  getErrorMap: () => K_,
  function: () => L5,
  formatError: () => u0,
  float64: () => Tk,
  float32: () => xk,
  flattenError: () => h0,
  file: () => ek,
  enum: () => a$,
  endsWith: () => _X,
  emoji: () => Fk,
  email: () => Vk,
  e164: () => Ck,
  discriminatedUnion: () => f5,
  date: () => pk,
  custom: () => aH,
  cuid2: () => Mk,
  cuid: () => Lk,
  core: () => l6,
  config: () => v$,
  coerce: () => sH,
  clone: () => n$,
  cidrv6: () => Ek,
  cidrv4: () => Pk,
  check: () => fD,
  catch: () => ED,
  boolean: () => _$,
  bigint: () => gk,
  base64url: () => vk,
  base64: () => Sk,
  array: () => $$,
  any: () => ck,
  _default: () => AD,
  _ZodString: () => bH,
  ZodXID: () => _H,
  ZodVoid: () => VD,
  ZodUnknown: () => UD,
  ZodUnion: () => dH,
  ZodUndefined: () => zD,
  ZodUUID: () => P4,
  ZodURL: () => PH,
  ZodULID: () => kH,
  ZodType: () => s,
  ZodTuple: () => BD,
  ZodTransform: () => iH,
  ZodTemplateLiteral: () => kD,
  ZodSymbol: () => WD,
  ZodSuccess: () => RD,
  ZodStringFormat: () => F$,
  ZodString: () => mX,
  ZodSet: () => DD,
  ZodRecord: () => pH,
  ZodRealError: () => $8,
  ZodReadonly: () => vD,
  ZodPromise: () => TD,
  ZodPrefault: () => ID,
  ZodPipe: () => tH,
  ZodOptional: () => rH,
  ZodObject: () => T5,
  ZodNumberFormat: () => X8,
  ZodNumber: () => lX,
  ZodNullable: () => LD,
  ZodNull: () => GD,
  ZodNonOptional: () => oH,
  ZodNever: () => KD,
  ZodNanoID: () => SH,
  ZodNaN: () => SD,
  ZodMap: () => qD,
  ZodLiteral: () => FD,
  ZodLazy: () => _D,
  ZodKSUID: () => xH,
  ZodJWT: () => lH,
  ZodIssueCode: () => H_,
  ZodIntersection: () => wD,
  ZodISOTime: () => P5,
  ZodISODuration: () => E5,
  ZodISODateTime: () => b5,
  ZodISODate: () => R5,
  ZodIPv6: () => fH,
  ZodIPv4: () => TH,
  ZodGUID: () => S5,
  ZodFile: () => jD,
  ZodError: () => Uk,
  ZodEnum: () => uX,
  ZodEmoji: () => EH,
  ZodEmail: () => RH,
  ZodE164: () => mH,
  ZodDiscriminatedUnion: () => OD,
  ZodDefault: () => MD,
  ZodDate: () => x5,
  ZodCustomStringFormat: () => YD,
  ZodCustom: () => y5,
  ZodCatch: () => PD,
  ZodCUID2: () => CH,
  ZodCUID: () => vH,
  ZodCIDRv6: () => gH,
  ZodCIDRv4: () => yH,
  ZodBoolean: () => cX,
  ZodBigIntFormat: () => cH,
  ZodBigInt: () => dX,
  ZodBase64URL: () => uH,
  ZodBase64: () => hH,
  ZodArray: () => ND,
  ZodAny: () => HD,
  TimePrecision: () => tQ,
  NEVER: () => f7,
  $output: () => nQ,
  $input: () => rQ,
  $brand: () => y7,
});
var e0 = {};
D1(e0, {
  time: () => FH,
  duration: () => jH,
  datetime: () => qH,
  date: () => DH,
  ZodISOTime: () => P5,
  ZodISODuration: () => E5,
  ZodISODateTime: () => b5,
  ZodISODate: () => R5,
});
var b5 = q("ZodISODateTime", ($, X) => {
  (KG.init($, X), F$.init($, X));
});
function qH($) {
  return $H(b5, $);
}
var R5 = q("ZodISODate", ($, X) => {
  (VG.init($, X), F$.init($, X));
});
function DH($) {
  return XH(R5, $);
}
var P5 = q("ZodISOTime", ($, X) => {
  (NG.init($, X), F$.init($, X));
});
function FH($) {
  return JH(P5, $);
}
var E5 = q("ZodISODuration", ($, X) => {
  (OG.init($, X), F$.init($, X));
});
function jH($) {
  return QH(E5, $);
}
var QD = ($, X) => {
    (s9.init($, X),
      ($.name = "ZodError"),
      Object.defineProperties($, {
        format: { value: (J) => u0($, J) },
        flatten: { value: (J) => h0($, J) },
        addIssue: { value: (J) => $.issues.push(J) },
        addIssues: { value: (J) => $.issues.push(...J) },
        isEmpty: {
          get() {
            return $.issues.length === 0;
          },
        },
      }));
  },
  Uk = q("ZodError", QD),
  $8 = q("ZodError", QD, { Parent: Error });
var LH = m7($8),
  MH = l7($8),
  AH = c7($8),
  IH = d7($8);
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
      ($.clone = (J, Y) => n$($, J, Y)),
      ($.brand = () => $),
      ($.register = (J, Y) => {
        return (J.add($, Y), $);
      }),
      ($.parse = (J, Y) => LH($, J, Y, { callee: $.parse })),
      ($.safeParse = (J, Y) => AH($, J, Y)),
      ($.parseAsync = async (J, Y) => MH($, J, Y, { callee: $.parseAsync })),
      ($.safeParseAsync = async (J, Y) => IH($, J, Y)),
      ($.spa = $.safeParseAsync),
      ($.refine = (J, Y) => $.check(yD(J, Y))),
      ($.superRefine = (J) => $.check(gD(J))),
      ($.overwrite = (J) => $.check(R4(J))),
      ($.optional = () => j$($)),
      ($.nullable = () => v5($)),
      ($.nullish = () => j$(v5($))),
      ($.nonoptional = (J) => bD($, J)),
      ($.array = () => $$($)),
      ($.or = (J) => V$([$, J])),
      ($.and = (J) => pX($, J)),
      ($.transform = (J) => C5($, nH(J))),
      ($.default = (J) => AD($, J)),
      ($.prefault = (J) => ZD($, J)),
      ($.catch = (J) => ED($, J)),
      ($.pipe = (J) => C5($, J)),
      ($.readonly = () => CD($)),
      ($.describe = (J) => {
        let Y = $.clone();
        return (G6.add(Y, { description: J }), Y);
      }),
      Object.defineProperty($, "description", {
        get() {
          return G6.get($)?.description;
        },
        configurable: !0,
      }),
      ($.meta = (...J) => {
        if (J.length === 0) return G6.get($);
        let Y = $.clone();
        return (G6.add(Y, J[0]), Y);
      }),
      ($.isOptional = () => $.safeParse(void 0).success),
      ($.isNullable = () => $.safeParse(null).success),
      $
    );
  }),
  bH = q("_ZodString", ($, X) => {
    ($1.init($, X), s.init($, X));
    let J = $._zod.bag;
    (($.format = J.format ?? null),
      ($.minLength = J.minimum ?? null),
      ($.maxLength = J.maximum ?? null),
      ($.regex = (...Y) => $.check(EX(...Y))),
      ($.includes = (...Y) => $.check(CX(...Y))),
      ($.startsWith = (...Y) => $.check(kX(...Y))),
      ($.endsWith = (...Y) => $.check(_X(...Y))),
      ($.min = (...Y) => $.check(J1(...Y))),
      ($.max = (...Y) => $.check(o0(...Y))),
      ($.length = (...Y) => $.check(t0(...Y))),
      ($.nonempty = (...Y) => $.check(J1(1, ...Y))),
      ($.lowercase = (Y) => $.check(SX(Y))),
      ($.uppercase = (Y) => $.check(vX(Y))),
      ($.trim = () => $.check(fX())),
      ($.normalize = (...Y) => $.check(TX(...Y))),
      ($.toLowerCase = () => $.check(yX())),
      ($.toUpperCase = () => $.check(gX())));
  }),
  mX = q("ZodString", ($, X) => {
    ($1.init($, X),
      bH.init($, X),
      ($.email = (J) => $.check(zX(RH, J))),
      ($.url = (J) => $.check(VX(PH, J))),
      ($.jwt = (J) => $.check(RX(lH, J))),
      ($.emoji = (J) => $.check(NX(EH, J))),
      ($.guid = (J) => $.check(n0(S5, J))),
      ($.uuid = (J) => $.check(GX(P4, J))),
      ($.uuidv4 = (J) => $.check(HX(P4, J))),
      ($.uuidv6 = (J) => $.check(UX(P4, J))),
      ($.uuidv7 = (J) => $.check(KX(P4, J))),
      ($.nanoid = (J) => $.check(OX(SH, J))),
      ($.guid = (J) => $.check(n0(S5, J))),
      ($.cuid = (J) => $.check(wX(vH, J))),
      ($.cuid2 = (J) => $.check(BX(CH, J))),
      ($.ulid = (J) => $.check(qX(kH, J))),
      ($.base64 = (J) => $.check(IX(hH, J))),
      ($.base64url = (J) => $.check(ZX(uH, J))),
      ($.xid = (J) => $.check(DX(_H, J))),
      ($.ksuid = (J) => $.check(FX(xH, J))),
      ($.ipv4 = (J) => $.check(jX(TH, J))),
      ($.ipv6 = (J) => $.check(LX(fH, J))),
      ($.cidrv4 = (J) => $.check(MX(yH, J))),
      ($.cidrv6 = (J) => $.check(AX(gH, J))),
      ($.e164 = (J) => $.check(bX(mH, J))),
      ($.datetime = (J) => $.check(qH(J))),
      ($.date = (J) => $.check(DH(J))),
      ($.time = (J) => $.check(FH(J))),
      ($.duration = (J) => $.check(jH(J))));
  });
function L($) {
  return oQ(mX, $);
}
var F$ = q("ZodStringFormat", ($, X) => {
    (K$.init($, X), bH.init($, X));
  }),
  RH = q("ZodEmail", ($, X) => {
    (e7.init($, X), F$.init($, X));
  });
function Vk($) {
  return zX(RH, $);
}
var S5 = q("ZodGUID", ($, X) => {
  (a7.init($, X), F$.init($, X));
});
function Nk($) {
  return n0(S5, $);
}
var P4 = q("ZodUUID", ($, X) => {
  (s7.init($, X), F$.init($, X));
});
function Ok($) {
  return GX(P4, $);
}
function wk($) {
  return HX(P4, $);
}
function Bk($) {
  return UX(P4, $);
}
function qk($) {
  return KX(P4, $);
}
var PH = q("ZodURL", ($, X) => {
  ($Q.init($, X), F$.init($, X));
});
function Dk($) {
  return VX(PH, $);
}
var EH = q("ZodEmoji", ($, X) => {
  (XQ.init($, X), F$.init($, X));
});
function Fk($) {
  return NX(EH, $);
}
var SH = q("ZodNanoID", ($, X) => {
  (JQ.init($, X), F$.init($, X));
});
function jk($) {
  return OX(SH, $);
}
var vH = q("ZodCUID", ($, X) => {
  (QQ.init($, X), F$.init($, X));
});
function Lk($) {
  return wX(vH, $);
}
var CH = q("ZodCUID2", ($, X) => {
  (YQ.init($, X), F$.init($, X));
});
function Mk($) {
  return BX(CH, $);
}
var kH = q("ZodULID", ($, X) => {
  (WQ.init($, X), F$.init($, X));
});
function Ak($) {
  return qX(kH, $);
}
var _H = q("ZodXID", ($, X) => {
  (zQ.init($, X), F$.init($, X));
});
function Ik($) {
  return DX(_H, $);
}
var xH = q("ZodKSUID", ($, X) => {
  (GQ.init($, X), F$.init($, X));
});
function Zk($) {
  return FX(xH, $);
}
var TH = q("ZodIPv4", ($, X) => {
  (HQ.init($, X), F$.init($, X));
});
function bk($) {
  return jX(TH, $);
}
var fH = q("ZodIPv6", ($, X) => {
  (UQ.init($, X), F$.init($, X));
});
function Rk($) {
  return LX(fH, $);
}
var yH = q("ZodCIDRv4", ($, X) => {
  (KQ.init($, X), F$.init($, X));
});
function Pk($) {
  return MX(yH, $);
}
var gH = q("ZodCIDRv6", ($, X) => {
  (VQ.init($, X), F$.init($, X));
});
function Ek($) {
  return AX(gH, $);
}
var hH = q("ZodBase64", ($, X) => {
  (NQ.init($, X), F$.init($, X));
});
function Sk($) {
  return IX(hH, $);
}
var uH = q("ZodBase64URL", ($, X) => {
  (OQ.init($, X), F$.init($, X));
});
function vk($) {
  return ZX(uH, $);
}
var mH = q("ZodE164", ($, X) => {
  (wQ.init($, X), F$.init($, X));
});
function Ck($) {
  return bX(mH, $);
}
var lH = q("ZodJWT", ($, X) => {
  (BQ.init($, X), F$.init($, X));
});
function kk($) {
  return RX(lH, $);
}
var YD = q("ZodCustomStringFormat", ($, X) => {
  (qQ.init($, X), F$.init($, X));
});
function _k($, X, J = {}) {
  return j5(YD, $, X, J);
}
var lX = q("ZodNumber", ($, X) => {
  (e9.init($, X),
    s.init($, X),
    ($.gt = (Y, Q) => $.check(b4(Y, Q))),
    ($.gte = (Y, Q) => $.check(H6(Y, Q))),
    ($.min = (Y, Q) => $.check(H6(Y, Q))),
    ($.lt = (Y, Q) => $.check(Z4(Y, Q))),
    ($.lte = (Y, Q) => $.check(R6(Y, Q))),
    ($.max = (Y, Q) => $.check(R6(Y, Q))),
    ($.int = (Y) => $.check(ZH(Y))),
    ($.safe = (Y) => $.check(ZH(Y))),
    ($.positive = (Y) => $.check(b4(0, Y))),
    ($.nonnegative = (Y) => $.check(H6(0, Y))),
    ($.negative = (Y) => $.check(Z4(0, Y))),
    ($.nonpositive = (Y) => $.check(R6(0, Y))),
    ($.multipleOf = (Y, Q) => $.check(p1(Y, Q))),
    ($.step = (Y, Q) => $.check(p1(Y, Q))),
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
  return aQ(lX, $);
}
var X8 = q("ZodNumberFormat", ($, X) => {
  (DQ.init($, X), lX.init($, X));
});
function ZH($) {
  return sQ(X8, $);
}
function xk($) {
  return eQ(X8, $);
}
function Tk($) {
  return $5(X8, $);
}
function fk($) {
  return X5(X8, $);
}
function yk($) {
  return J5(X8, $);
}
var cX = q("ZodBoolean", ($, X) => {
  (l0.init($, X), s.init($, X));
});
function _$($) {
  return Q5(cX, $);
}
var dX = q("ZodBigInt", ($, X) => {
  ($X.init($, X),
    s.init($, X),
    ($.gte = (Y, Q) => $.check(H6(Y, Q))),
    ($.min = (Y, Q) => $.check(H6(Y, Q))),
    ($.gt = (Y, Q) => $.check(b4(Y, Q))),
    ($.gte = (Y, Q) => $.check(H6(Y, Q))),
    ($.min = (Y, Q) => $.check(H6(Y, Q))),
    ($.lt = (Y, Q) => $.check(Z4(Y, Q))),
    ($.lte = (Y, Q) => $.check(R6(Y, Q))),
    ($.max = (Y, Q) => $.check(R6(Y, Q))),
    ($.positive = (Y) => $.check(b4(BigInt(0), Y))),
    ($.negative = (Y) => $.check(Z4(BigInt(0), Y))),
    ($.nonpositive = (Y) => $.check(R6(BigInt(0), Y))),
    ($.nonnegative = (Y) => $.check(H6(BigInt(0), Y))),
    ($.multipleOf = (Y, Q) => $.check(p1(Y, Q))));
  let J = $._zod.bag;
  (($.minValue = J.minimum ?? null),
    ($.maxValue = J.maximum ?? null),
    ($.format = J.format ?? null));
});
function gk($) {
  return Y5(dX, $);
}
var cH = q("ZodBigIntFormat", ($, X) => {
  (FQ.init($, X), dX.init($, X));
});
function hk($) {
  return W5(cH, $);
}
function uk($) {
  return z5(cH, $);
}
var WD = q("ZodSymbol", ($, X) => {
  (jQ.init($, X), s.init($, X));
});
function mk($) {
  return G5(WD, $);
}
var zD = q("ZodUndefined", ($, X) => {
  (LQ.init($, X), s.init($, X));
});
function lk($) {
  return H5(zD, $);
}
var GD = q("ZodNull", ($, X) => {
  (MQ.init($, X), s.init($, X));
});
function k5($) {
  return U5(GD, $);
}
var HD = q("ZodAny", ($, X) => {
  (AQ.init($, X), s.init($, X));
});
function ck() {
  return K5(HD);
}
var UD = q("ZodUnknown", ($, X) => {
  (c1.init($, X), s.init($, X));
});
function L$() {
  return d1(UD);
}
var KD = q("ZodNever", ($, X) => {
  (IQ.init($, X), s.init($, X));
});
function _5($) {
  return V5(KD, $);
}
var VD = q("ZodVoid", ($, X) => {
  (ZQ.init($, X), s.init($, X));
});
function dk($) {
  return N5(VD, $);
}
var x5 = q("ZodDate", ($, X) => {
  (bQ.init($, X),
    s.init($, X),
    ($.min = (Y, Q) => $.check(H6(Y, Q))),
    ($.max = (Y, Q) => $.check(R6(Y, Q))));
  let J = $._zod.bag;
  (($.minDate = J.minimum ? new Date(J.minimum) : null),
    ($.maxDate = J.maximum ? new Date(J.maximum) : null));
});
function pk($) {
  return O5(x5, $);
}
var ND = q("ZodArray", ($, X) => {
  (c0.init($, X),
    s.init($, X),
    ($.element = X.element),
    ($.min = (J, Y) => $.check(J1(J, Y))),
    ($.nonempty = (J) => $.check(J1(1, J))),
    ($.max = (J, Y) => $.check(o0(J, Y))),
    ($.length = (J, Y) => $.check(t0(J, Y))),
    ($.unwrap = () => $.element));
});
function $$($, X) {
  return hX(ND, $, X);
}
function ik($) {
  let X = $._zod.def.shape;
  return g(Object.keys(X));
}
var T5 = q("ZodObject", ($, X) => {
  (XX.init($, X),
    s.init($, X),
    E.defineLazy($, "shape", () => X.shape),
    ($.keyof = () => a$(Object.keys($._zod.def.shape))),
    ($.catchall = (J) => $.clone({ ...$._zod.def, catchall: J })),
    ($.passthrough = () => $.clone({ ...$._zod.def, catchall: L$() })),
    ($.loose = () => $.clone({ ...$._zod.def, catchall: L$() })),
    ($.strict = () => $.clone({ ...$._zod.def, catchall: _5() })),
    ($.strip = () => $.clone({ ...$._zod.def, catchall: void 0 })),
    ($.extend = (J) => {
      return E.extend($, J);
    }),
    ($.merge = (J) => E.merge($, J)),
    ($.pick = (J) => E.pick($, J)),
    ($.omit = (J) => E.omit($, J)),
    ($.partial = (...J) => E.partial(rH, $, J[0])),
    ($.required = (...J) => E.required(oH, $, J[0])));
});
function x($, X) {
  let J = {
    type: "object",
    get shape() {
      return (E.assignProp(this, "shape", { ...$ }), this.shape);
    },
    ...E.normalizeParams(X),
  };
  return new T5(J);
}
function nk($, X) {
  return new T5({
    type: "object",
    get shape() {
      return (E.assignProp(this, "shape", { ...$ }), this.shape);
    },
    catchall: _5(),
    ...E.normalizeParams(X),
  });
}
function r$($, X) {
  return new T5({
    type: "object",
    get shape() {
      return (E.assignProp(this, "shape", { ...$ }), this.shape);
    },
    catchall: L$(),
    ...E.normalizeParams(X),
  });
}
var dH = q("ZodUnion", ($, X) => {
  (JX.init($, X), s.init($, X), ($.options = X.options));
});
function V$($, X) {
  return new dH({ type: "union", options: $, ...E.normalizeParams(X) });
}
var OD = q("ZodDiscriminatedUnion", ($, X) => {
  (dH.init($, X), RQ.init($, X));
});
function f5($, X, J) {
  return new OD({
    type: "union",
    options: X,
    discriminator: $,
    ...E.normalizeParams(J),
  });
}
var wD = q("ZodIntersection", ($, X) => {
  (PQ.init($, X), s.init($, X));
});
function pX($, X) {
  return new wD({ type: "intersection", left: $, right: X });
}
var BD = q("ZodTuple", ($, X) => {
  (X1.init($, X),
    s.init($, X),
    ($.rest = (J) => $.clone({ ...$._zod.def, rest: J })));
});
function rk($, X, J) {
  let Y = X instanceof p,
    Q = Y ? J : X;
  return new BD({
    type: "tuple",
    items: $,
    rest: Y ? X : null,
    ...E.normalizeParams(Q),
  });
}
var pH = q("ZodRecord", ($, X) => {
  (EQ.init($, X),
    s.init($, X),
    ($.keyType = X.keyType),
    ($.valueType = X.valueType));
});
function N$($, X, J) {
  return new pH({
    type: "record",
    keyType: $,
    valueType: X,
    ...E.normalizeParams(J),
  });
}
function ok($, X, J) {
  return new pH({
    type: "record",
    keyType: V$([$, _5()]),
    valueType: X,
    ...E.normalizeParams(J),
  });
}
var qD = q("ZodMap", ($, X) => {
  (SQ.init($, X),
    s.init($, X),
    ($.keyType = X.keyType),
    ($.valueType = X.valueType));
});
function tk($, X, J) {
  return new qD({
    type: "map",
    keyType: $,
    valueType: X,
    ...E.normalizeParams(J),
  });
}
var DD = q("ZodSet", ($, X) => {
  (vQ.init($, X),
    s.init($, X),
    ($.min = (...J) => $.check(i1(...J))),
    ($.nonempty = (J) => $.check(i1(1, J))),
    ($.max = (...J) => $.check(r0(...J))),
    ($.size = (...J) => $.check(PX(...J))));
});
function ak($, X) {
  return new DD({ type: "set", valueType: $, ...E.normalizeParams(X) });
}
var uX = q("ZodEnum", ($, X) => {
  (CQ.init($, X),
    s.init($, X),
    ($.enum = X.entries),
    ($.options = Object.values(X.entries)));
  let J = new Set(Object.keys(X.entries));
  (($.extract = (Y, Q) => {
    let W = {};
    for (let z of Y)
      if (J.has(z)) W[z] = X.entries[z];
      else throw Error(`Key ${z} not found in enum`);
    return new uX({ ...X, checks: [], ...E.normalizeParams(Q), entries: W });
  }),
    ($.exclude = (Y, Q) => {
      let W = { ...X.entries };
      for (let z of Y)
        if (J.has(z)) delete W[z];
        else throw Error(`Key ${z} not found in enum`);
      return new uX({ ...X, checks: [], ...E.normalizeParams(Q), entries: W });
    }));
});
function a$($, X) {
  let J = Array.isArray($) ? Object.fromEntries($.map((Y) => [Y, Y])) : $;
  return new uX({ type: "enum", entries: J, ...E.normalizeParams(X) });
}
function sk($, X) {
  return new uX({ type: "enum", entries: $, ...E.normalizeParams(X) });
}
var FD = q("ZodLiteral", ($, X) => {
  (kQ.init($, X),
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
  return new FD({
    type: "literal",
    values: Array.isArray($) ? $ : [$],
    ...E.normalizeParams(X),
  });
}
var jD = q("ZodFile", ($, X) => {
  (_Q.init($, X),
    s.init($, X),
    ($.min = (J, Y) => $.check(i1(J, Y))),
    ($.max = (J, Y) => $.check(r0(J, Y))),
    ($.mime = (J, Y) => $.check(xX(Array.isArray(J) ? J : [J], Y))));
});
function ek($) {
  return B5(jD, $);
}
var iH = q("ZodTransform", ($, X) => {
  (d0.init($, X),
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
function nH($) {
  return new iH({ type: "transform", transform: $ });
}
var rH = q("ZodOptional", ($, X) => {
  (xQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function j$($) {
  return new rH({ type: "optional", innerType: $ });
}
var LD = q("ZodNullable", ($, X) => {
  (TQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function v5($) {
  return new LD({ type: "nullable", innerType: $ });
}
function $_($) {
  return j$(v5($));
}
var MD = q("ZodDefault", ($, X) => {
  (fQ.init($, X),
    s.init($, X),
    ($.unwrap = () => $._zod.def.innerType),
    ($.removeDefault = $.unwrap));
});
function AD($, X) {
  return new MD({
    type: "default",
    innerType: $,
    get defaultValue() {
      return typeof X === "function" ? X() : X;
    },
  });
}
var ID = q("ZodPrefault", ($, X) => {
  (yQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function ZD($, X) {
  return new ID({
    type: "prefault",
    innerType: $,
    get defaultValue() {
      return typeof X === "function" ? X() : X;
    },
  });
}
var oH = q("ZodNonOptional", ($, X) => {
  (gQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function bD($, X) {
  return new oH({ type: "nonoptional", innerType: $, ...E.normalizeParams(X) });
}
var RD = q("ZodSuccess", ($, X) => {
  (hQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function X_($) {
  return new RD({ type: "success", innerType: $ });
}
var PD = q("ZodCatch", ($, X) => {
  (uQ.init($, X),
    s.init($, X),
    ($.unwrap = () => $._zod.def.innerType),
    ($.removeCatch = $.unwrap));
});
function ED($, X) {
  return new PD({
    type: "catch",
    innerType: $,
    catchValue: typeof X === "function" ? X : () => X,
  });
}
var SD = q("ZodNaN", ($, X) => {
  (mQ.init($, X), s.init($, X));
});
function J_($) {
  return w5(SD, $);
}
var tH = q("ZodPipe", ($, X) => {
  (p0.init($, X), s.init($, X), ($.in = X.in), ($.out = X.out));
});
function C5($, X) {
  return new tH({ type: "pipe", in: $, out: X });
}
var vD = q("ZodReadonly", ($, X) => {
  (lQ.init($, X), s.init($, X));
});
function CD($) {
  return new vD({ type: "readonly", innerType: $ });
}
var kD = q("ZodTemplateLiteral", ($, X) => {
  (cQ.init($, X), s.init($, X));
});
function Q_($, X) {
  return new kD({
    type: "template_literal",
    parts: $,
    ...E.normalizeParams(X),
  });
}
var _D = q("ZodLazy", ($, X) => {
  (pQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.getter()));
});
function xD($) {
  return new _D({ type: "lazy", getter: $ });
}
var TD = q("ZodPromise", ($, X) => {
  (dQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function Y_($) {
  return new TD({ type: "promise", innerType: $ });
}
var y5 = q("ZodCustom", ($, X) => {
  (iQ.init($, X), s.init($, X));
});
function fD($, X) {
  let J = new I$({ check: "custom", ...E.normalizeParams(X) });
  return ((J._zod.check = $), J);
}
function aH($, X) {
  return q5(y5, $ ?? (() => !0), X);
}
function yD($, X = {}) {
  return D5(y5, $, X);
}
function gD($, X) {
  let J = fD((Y) => {
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
function W_($, X = { error: `Input not instance of ${$.name}` }) {
  let J = new y5({
    type: "custom",
    check: "custom",
    fn: (Y) => Y instanceof $,
    abort: !0,
    ...E.normalizeParams(X),
  });
  return ((J._zod.bag.Class = $), J);
}
var z_ = (...$) =>
  F5({ Pipe: tH, Boolean: cX, String: mX, Transform: iH }, ...$);
function G_($) {
  let X = xD(() => {
    return V$([L($), z$(), _$(), k5(), $$(X), N$(L(), X)]);
  });
  return X;
}
function g5($, X) {
  return C5(nH($), X);
}
var H_ = {
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
function U_($) {
  v$({ customError: $ });
}
function K_() {
  return v$().customError;
}
var sH = {};
D1(sH, {
  string: () => V_,
  number: () => N_,
  date: () => B_,
  boolean: () => O_,
  bigint: () => w_,
});
function V_($) {
  return eG(mX, $);
}
function N_($) {
  return YH(lX, $);
}
function O_($) {
  return WH(cX, $);
}
function w_($) {
  return zH(dX, $);
}
function B_($) {
  return GH(x5, $);
}
v$(QX());
var eH = "2025-11-25";
var hD = [eH, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"],
  z1 = "io.modelcontextprotocol/related-task",
  u5 = "2.0",
  g$ = aH(
    ($) => $ !== null && (typeof $ === "object" || typeof $ === "function"),
  ),
  uD = V$([L(), z$().int()]),
  mD = L(),
  j1$ = r$({ ttl: z$().optional(), pollInterval: z$().optional() }),
  q_ = x({ ttl: z$().optional() }),
  D_ = x({ taskId: L() }),
  $U = r$({ progressToken: uD.optional(), [z1]: D_.optional() }),
  M6 = x({ _meta: $U.optional() }),
  iX = M6.extend({ task: q_.optional() }),
  lD = ($) => iX.safeParse($).success,
  c$ = x({ method: L(), params: M6.loose().optional() }),
  E6 = x({ _meta: $U.optional() }),
  S6 = x({ method: L(), params: E6.loose().optional() }),
  d$ = r$({ _meta: $U.optional() }),
  m5 = V$([L(), z$().int()]),
  cD = x({ jsonrpc: g(u5), id: m5, ...c$.shape }).strict(),
  XU = ($) => cD.safeParse($).success,
  dD = x({ jsonrpc: g(u5), ...S6.shape }).strict(),
  pD = ($) => dD.safeParse($).success,
  JU = x({ jsonrpc: g(u5), id: m5, result: d$ }).strict(),
  nX = ($) => JU.safeParse($).success;
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
var QU = x({
  jsonrpc: g(u5),
  id: m5.optional(),
  error: x({ code: z$().int(), message: L(), data: L$().optional() }),
}).strict();
var iD = ($) => QU.safeParse($).success;
var L1$ = V$([cD, dD, JU, QU]),
  M1$ = V$([JU, QU]),
  l5 = d$.strict(),
  F_ = E6.extend({ requestId: m5.optional(), reason: L().optional() }),
  c5 = S6.extend({ method: g("notifications/cancelled"), params: F_ }),
  j_ = x({
    src: L(),
    mimeType: L().optional(),
    sizes: $$(L()).optional(),
    theme: a$(["light", "dark"]).optional(),
  }),
  rX = x({ icons: $$(j_).optional() }),
  J8 = x({ name: L(), title: L().optional() }),
  nD = J8.extend({
    ...J8.shape,
    ...rX.shape,
    version: L(),
    websiteUrl: L().optional(),
    description: L().optional(),
  }),
  L_ = pX(x({ applyDefaults: _$().optional() }), N$(L(), L$())),
  M_ = g5(
    ($) => {
      if ($ && typeof $ === "object" && !Array.isArray($)) {
        if (Object.keys($).length === 0) return { form: {} };
      }
      return $;
    },
    pX(
      x({ form: L_.optional(), url: g$.optional() }),
      N$(L(), L$()).optional(),
    ),
  ),
  A_ = r$({
    list: g$.optional(),
    cancel: g$.optional(),
    requests: r$({
      sampling: r$({ createMessage: g$.optional() }).optional(),
      elicitation: r$({ create: g$.optional() }).optional(),
    }).optional(),
  }),
  I_ = r$({
    list: g$.optional(),
    cancel: g$.optional(),
    requests: r$({ tools: r$({ call: g$.optional() }).optional() }).optional(),
  }),
  Z_ = x({
    experimental: N$(L(), g$).optional(),
    sampling: x({ context: g$.optional(), tools: g$.optional() }).optional(),
    elicitation: M_.optional(),
    roots: x({ listChanged: _$().optional() }).optional(),
    tasks: A_.optional(),
    extensions: N$(L(), g$).optional(),
  }),
  b_ = M6.extend({ protocolVersion: L(), capabilities: Z_, clientInfo: nD }),
  YU = c$.extend({ method: g("initialize"), params: b_ });
var R_ = x({
    experimental: N$(L(), g$).optional(),
    logging: g$.optional(),
    completions: g$.optional(),
    prompts: x({ listChanged: _$().optional() }).optional(),
    resources: x({
      subscribe: _$().optional(),
      listChanged: _$().optional(),
    }).optional(),
    tools: x({ listChanged: _$().optional() }).optional(),
    tasks: I_.optional(),
    extensions: N$(L(), g$).optional(),
  }),
  P_ = d$.extend({
    protocolVersion: L(),
    capabilities: R_,
    serverInfo: nD,
    instructions: L().optional(),
  }),
  WU = S6.extend({
    method: g("notifications/initialized"),
    params: E6.optional(),
  });
var d5 = c$.extend({ method: g("ping"), params: M6.optional() }),
  E_ = x({ progress: z$(), total: j$(z$()), message: j$(L()) }),
  S_ = x({ ...E6.shape, ...E_.shape, progressToken: uD }),
  p5 = S6.extend({ method: g("notifications/progress"), params: S_ }),
  v_ = M6.extend({ cursor: mD.optional() }),
  oX = c$.extend({ params: v_.optional() }),
  tX = d$.extend({ nextCursor: mD.optional() }),
  C_ = a$(["working", "input_required", "completed", "failed", "cancelled"]),
  aX = x({
    taskId: L(),
    status: C_,
    ttl: V$([z$(), k5()]),
    createdAt: L(),
    lastUpdatedAt: L(),
    pollInterval: j$(z$()),
    statusMessage: j$(L()),
  }),
  Q8 = d$.extend({ task: aX }),
  k_ = E6.merge(aX),
  sX = S6.extend({ method: g("notifications/tasks/status"), params: k_ }),
  i5 = c$.extend({
    method: g("tasks/get"),
    params: M6.extend({ taskId: L() }),
  }),
  n5 = d$.merge(aX),
  r5 = c$.extend({
    method: g("tasks/result"),
    params: M6.extend({ taskId: L() }),
  }),
  A1$ = d$.loose(),
  o5 = oX.extend({ method: g("tasks/list") }),
  t5 = tX.extend({ tasks: $$(aX) }),
  a5 = c$.extend({
    method: g("tasks/cancel"),
    params: M6.extend({ taskId: L() }),
  }),
  rD = d$.merge(aX),
  oD = x({ uri: L(), mimeType: j$(L()), _meta: N$(L(), L$()).optional() }),
  tD = oD.extend({ text: L() }),
  zU = L().refine(
    ($) => {
      try {
        return (atob($), !0);
      } catch {
        return !1;
      }
    },
    { message: "Invalid Base64 string" },
  ),
  aD = oD.extend({ blob: zU }),
  eX = a$(["user", "assistant"]),
  Y8 = x({
    audience: $$(eX).optional(),
    priority: z$().min(0).max(1).optional(),
    lastModified: e0.datetime({ offset: !0 }).optional(),
  }),
  sD = x({
    ...J8.shape,
    ...rX.shape,
    uri: L(),
    description: j$(L()),
    mimeType: j$(L()),
    size: j$(z$()),
    annotations: Y8.optional(),
    _meta: j$(r$({})),
  }),
  __ = x({
    ...J8.shape,
    ...rX.shape,
    uriTemplate: L(),
    description: j$(L()),
    mimeType: j$(L()),
    annotations: Y8.optional(),
    _meta: j$(r$({})),
  }),
  s5 = oX.extend({ method: g("resources/list") }),
  x_ = tX.extend({ resources: $$(sD) }),
  e5 = oX.extend({ method: g("resources/templates/list") }),
  T_ = tX.extend({ resourceTemplates: $$(__) }),
  GU = M6.extend({ uri: L() }),
  f_ = GU,
  $Y = c$.extend({ method: g("resources/read"), params: f_ }),
  y_ = d$.extend({ contents: $$(V$([tD, aD])) }),
  g_ = S6.extend({
    method: g("notifications/resources/list_changed"),
    params: E6.optional(),
  }),
  h_ = GU,
  u_ = c$.extend({ method: g("resources/subscribe"), params: h_ }),
  m_ = GU,
  l_ = c$.extend({ method: g("resources/unsubscribe"), params: m_ }),
  c_ = E6.extend({ uri: L() }),
  d_ = S6.extend({ method: g("notifications/resources/updated"), params: c_ }),
  p_ = x({ name: L(), description: j$(L()), required: j$(_$()) }),
  i_ = x({
    ...J8.shape,
    ...rX.shape,
    description: j$(L()),
    arguments: j$($$(p_)),
    _meta: j$(r$({})),
  }),
  XY = oX.extend({ method: g("prompts/list") }),
  n_ = tX.extend({ prompts: $$(i_) }),
  r_ = M6.extend({ name: L(), arguments: N$(L(), L()).optional() }),
  JY = c$.extend({ method: g("prompts/get"), params: r_ }),
  HU = x({
    type: g("text"),
    text: L(),
    annotations: Y8.optional(),
    _meta: N$(L(), L$()).optional(),
  }),
  UU = x({
    type: g("image"),
    data: zU,
    mimeType: L(),
    annotations: Y8.optional(),
    _meta: N$(L(), L$()).optional(),
  }),
  KU = x({
    type: g("audio"),
    data: zU,
    mimeType: L(),
    annotations: Y8.optional(),
    _meta: N$(L(), L$()).optional(),
  }),
  o_ = x({
    type: g("tool_use"),
    name: L(),
    id: L(),
    input: N$(L(), L$()),
    _meta: N$(L(), L$()).optional(),
  }),
  t_ = x({
    type: g("resource"),
    resource: V$([tD, aD]),
    annotations: Y8.optional(),
    _meta: N$(L(), L$()).optional(),
  }),
  a_ = sD.extend({ type: g("resource_link") }),
  VU = V$([HU, UU, KU, a_, t_]),
  s_ = x({ role: eX, content: VU }),
  e_ = d$.extend({ description: L().optional(), messages: $$(s_) }),
  $x = S6.extend({
    method: g("notifications/prompts/list_changed"),
    params: E6.optional(),
  }),
  Xx = x({
    title: L().optional(),
    readOnlyHint: _$().optional(),
    destructiveHint: _$().optional(),
    idempotentHint: _$().optional(),
    openWorldHint: _$().optional(),
  }),
  Jx = x({ taskSupport: a$(["required", "optional", "forbidden"]).optional() }),
  eD = x({
    ...J8.shape,
    ...rX.shape,
    description: L().optional(),
    inputSchema: x({
      type: g("object"),
      properties: N$(L(), g$).optional(),
      required: $$(L()).optional(),
    }).catchall(L$()),
    outputSchema: x({
      type: g("object"),
      properties: N$(L(), g$).optional(),
      required: $$(L()).optional(),
    })
      .catchall(L$())
      .optional(),
    annotations: Xx.optional(),
    execution: Jx.optional(),
    _meta: N$(L(), L$()).optional(),
  }),
  QY = oX.extend({ method: g("tools/list") }),
  Qx = tX.extend({ tools: $$(eD) }),
  YY = d$.extend({
    content: $$(VU).default([]),
    structuredContent: N$(L(), L$()).optional(),
    isError: _$().optional(),
  }),
  I1$ = YY.or(d$.extend({ toolResult: L$() })),
  Yx = iX.extend({ name: L(), arguments: N$(L(), L$()).optional() }),
  W8 = c$.extend({ method: g("tools/call"), params: Yx }),
  Wx = S6.extend({
    method: g("notifications/tools/list_changed"),
    params: E6.optional(),
  }),
  Z1$ = x({
    autoRefresh: _$().default(!0),
    debounceMs: z$().int().nonnegative().default(300),
  }),
  $J = a$([
    "debug",
    "info",
    "notice",
    "warning",
    "error",
    "critical",
    "alert",
    "emergency",
  ]),
  zx = M6.extend({ level: $J }),
  NU = c$.extend({ method: g("logging/setLevel"), params: zx }),
  Gx = E6.extend({ level: $J, logger: L().optional(), data: L$() }),
  Hx = S6.extend({ method: g("notifications/message"), params: Gx }),
  Ux = x({ name: L().optional() }),
  Kx = x({
    hints: $$(Ux).optional(),
    costPriority: z$().min(0).max(1).optional(),
    speedPriority: z$().min(0).max(1).optional(),
    intelligencePriority: z$().min(0).max(1).optional(),
  }),
  Vx = x({ mode: a$(["auto", "required", "none"]).optional() }),
  Nx = x({
    type: g("tool_result"),
    toolUseId: L().describe(
      "The unique identifier for the corresponding tool call.",
    ),
    content: $$(VU).default([]),
    structuredContent: x({}).loose().optional(),
    isError: _$().optional(),
    _meta: N$(L(), L$()).optional(),
  }),
  Ox = f5("type", [HU, UU, KU]),
  h5 = f5("type", [HU, UU, KU, o_, Nx]),
  wx = x({
    role: eX,
    content: V$([h5, $$(h5)]),
    _meta: N$(L(), L$()).optional(),
  }),
  Bx = iX.extend({
    messages: $$(wx),
    modelPreferences: Kx.optional(),
    systemPrompt: L().optional(),
    includeContext: a$(["none", "thisServer", "allServers"]).optional(),
    temperature: z$().optional(),
    maxTokens: z$().int(),
    stopSequences: $$(L()).optional(),
    metadata: g$.optional(),
    tools: $$(eD).optional(),
    toolChoice: Vx.optional(),
  }),
  qx = c$.extend({ method: g("sampling/createMessage"), params: Bx }),
  XJ = d$.extend({
    model: L(),
    stopReason: j$(a$(["endTurn", "stopSequence", "maxTokens"]).or(L())),
    role: eX,
    content: Ox,
  }),
  OU = d$.extend({
    model: L(),
    stopReason: j$(
      a$(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(L()),
    ),
    role: eX,
    content: V$([h5, $$(h5)]),
  }),
  Dx = x({
    type: g("boolean"),
    title: L().optional(),
    description: L().optional(),
    default: _$().optional(),
  }),
  Fx = x({
    type: g("string"),
    title: L().optional(),
    description: L().optional(),
    minLength: z$().optional(),
    maxLength: z$().optional(),
    format: a$(["email", "uri", "date", "date-time"]).optional(),
    default: L().optional(),
  }),
  jx = x({
    type: a$(["number", "integer"]),
    title: L().optional(),
    description: L().optional(),
    minimum: z$().optional(),
    maximum: z$().optional(),
    default: z$().optional(),
  }),
  Lx = x({
    type: g("string"),
    title: L().optional(),
    description: L().optional(),
    enum: $$(L()),
    default: L().optional(),
  }),
  Mx = x({
    type: g("string"),
    title: L().optional(),
    description: L().optional(),
    oneOf: $$(x({ const: L(), title: L() })),
    default: L().optional(),
  }),
  Ax = x({
    type: g("string"),
    title: L().optional(),
    description: L().optional(),
    enum: $$(L()),
    enumNames: $$(L()).optional(),
    default: L().optional(),
  }),
  Ix = V$([Lx, Mx]),
  Zx = x({
    type: g("array"),
    title: L().optional(),
    description: L().optional(),
    minItems: z$().optional(),
    maxItems: z$().optional(),
    items: x({ type: g("string"), enum: $$(L()) }),
    default: $$(L()).optional(),
  }),
  bx = x({
    type: g("array"),
    title: L().optional(),
    description: L().optional(),
    minItems: z$().optional(),
    maxItems: z$().optional(),
    items: x({ anyOf: $$(x({ const: L(), title: L() })) }),
    default: $$(L()).optional(),
  }),
  Rx = V$([Zx, bx]),
  Px = V$([Ax, Ix, Rx]),
  Ex = V$([Px, Dx, Fx, jx]),
  Sx = iX.extend({
    mode: g("form").optional(),
    message: L(),
    requestedSchema: x({
      type: g("object"),
      properties: N$(L(), Ex),
      required: $$(L()).optional(),
    }),
  }),
  vx = iX.extend({
    mode: g("url"),
    message: L(),
    elicitationId: L(),
    url: L().url(),
  }),
  Cx = V$([Sx, vx]),
  kx = c$.extend({ method: g("elicitation/create"), params: Cx }),
  _x = E6.extend({ elicitationId: L() }),
  xx = S6.extend({
    method: g("notifications/elicitation/complete"),
    params: _x,
  }),
  z8 = d$.extend({
    action: a$(["accept", "decline", "cancel"]),
    content: g5(
      ($) => ($ === null ? void 0 : $),
      N$(L(), V$([L(), z$(), _$(), $$(L())])).optional(),
    ),
  }),
  Tx = x({ type: g("ref/resource"), uri: L() });
var fx = x({ type: g("ref/prompt"), name: L() }),
  yx = M6.extend({
    ref: V$([fx, Tx]),
    argument: x({ name: L(), value: L() }),
    context: x({ arguments: N$(L(), L()).optional() }).optional(),
  }),
  WY = c$.extend({ method: g("completion/complete"), params: yx });
function $F($) {
  if ($.params.ref.type !== "ref/prompt")
    throw TypeError(
      `Expected CompleteRequestPrompt, but got ${$.params.ref.type}`,
    );
}
function XF($) {
  if ($.params.ref.type !== "ref/resource")
    throw TypeError(
      `Expected CompleteRequestResourceTemplate, but got ${$.params.ref.type}`,
    );
}
var gx = d$.extend({
    completion: r$({
      values: $$(L()).max(100),
      total: j$(z$().int()),
      hasMore: j$(_$()),
    }),
  }),
  hx = x({
    uri: L().startsWith("file://"),
    name: L().optional(),
    _meta: N$(L(), L$()).optional(),
  }),
  ux = c$.extend({ method: g("roots/list"), params: M6.optional() }),
  wU = d$.extend({ roots: $$(hx) }),
  mx = S6.extend({
    method: g("notifications/roots/list_changed"),
    params: E6.optional(),
  }),
  b1$ = V$([
    d5,
    YU,
    WY,
    NU,
    JY,
    XY,
    s5,
    e5,
    $Y,
    u_,
    l_,
    W8,
    QY,
    i5,
    r5,
    o5,
    a5,
  ]),
  R1$ = V$([c5, p5, WU, mx, sX]),
  P1$ = V$([l5, XJ, OU, z8, wU, n5, t5, Q8]),
  E1$ = V$([d5, qx, kx, ux, i5, r5, o5, a5]),
  S1$ = V$([c5, p5, Hx, d_, g_, Wx, $x, sX, xx]),
  v1$ = V$([l5, P_, gx, e_, n_, x_, T_, y_, YY, Qx, n5, t5, Q8]);
class h extends Error {
  constructor($, X, J) {
    super(`MCP error ${$}: ${X}`);
    ((this.code = $), (this.data = J), (this.name = "McpError"));
  }
  static fromError($, X, J) {
    if ($ === m.UrlElicitationRequired && J) {
      let Y = J;
      if (Y.elicitations) return new JF(Y.elicitations, X);
    }
    return new h($, X, J);
  }
}
class JF extends h {
  constructor($, X = `URL elicitation${$.length > 1 ? "s" : ""} required`) {
    super(m.UrlElicitationRequired, X, { elicitations: $ });
  }
  get elicitations() {
    return this.data?.elicitations ?? [];
  }
}
function G1($) {
  return $ === "completed" || $ === "failed" || $ === "cancelled";
}
var YF = Symbol("Let zodToJsonSchema decide on which parser to use");
var QF = {
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
  WF = ($) => (typeof $ === "string" ? { ...QF, name: $ } : { ...QF, ...$ });
var zF = ($) => {
  let X = WF($),
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
function BU($, X, J, Y) {
  if (!Y?.errorMessages) return;
  if (J) $.errorMessage = { ...$.errorMessage, [X]: J };
}
function J$($, X, J, Y, Q) {
  (($[X] = J), BU($, X, Y, Q));
}
var zY = ($, X) => {
  let J = 0;
  for (; J < $.length && J < X.length; J++) if ($[J] !== X[J]) break;
  return [($.length - J).toString(), ...X.slice(J)].join("/");
};
function Z$($) {
  if ($.target !== "openAi") return {};
  let X = [...$.basePath, $.definitionPath, $.openAiAnyTypeName];
  return (
    ($.flags.hasReferencedOpenAiAnyType = !0),
    { $ref: $.$refStrategy === "relative" ? zY(X, $.currentPath) : X.join("/") }
  );
}
function GF($, X) {
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
function HF($, X) {
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
function UF() {
  return { type: "boolean" };
}
function GY($, X) {
  return d($.type._def, X);
}
var KF = ($, X) => {
  return d($.innerType._def, X);
};
function qU($, X, J) {
  let Y = J ?? X.dateStrategy;
  if (Array.isArray(Y)) return { anyOf: Y.map((Q, W) => qU($, X, Q)) };
  switch (Y) {
    case "string":
    case "format:date-time":
      return { type: "string", format: "date-time" };
    case "format:date":
      return { type: "string", format: "date" };
    case "integer":
      return lx($, X);
  }
}
var lx = ($, X) => {
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
function VF($, X) {
  return { ...d($.innerType._def, X), default: $.defaultValue() };
}
function NF($, X) {
  return X.effectStrategy === "input" ? d($.schema._def, X) : Z$(X);
}
function OF($) {
  return { type: "string", enum: Array.from($.values) };
}
var cx = ($) => {
  if ("type" in $ && $.type === "string") return !1;
  return "allOf" in $;
};
function wF($, X) {
  let J = [
      d($.left._def, { ...X, currentPath: [...X.currentPath, "allOf", "0"] }),
      d($.right._def, { ...X, currentPath: [...X.currentPath, "allOf", "1"] }),
    ].filter((W) => !!W),
    Y =
      X.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0,
    Q = [];
  return (
    J.forEach((W) => {
      if (cx(W)) {
        if ((Q.push(...W.allOf), W.unevaluatedProperties === void 0))
          Y = void 0;
      } else {
        let z = W;
        if ("additionalProperties" in W && W.additionalProperties === !1) {
          let { additionalProperties: G, ...H } = W;
          z = H;
        } else Y = void 0;
        Q.push(z);
      }
    }),
    Q.length ? { allOf: Q, ...Y } : void 0
  );
}
function BF($, X) {
  let J = typeof $.value;
  if (J !== "bigint" && J !== "number" && J !== "boolean" && J !== "string")
    return { type: Array.isArray($.value) ? "array" : "object" };
  if (X.target === "openApi3")
    return { type: J === "bigint" ? "integer" : J, enum: [$.value] };
  return { type: J === "bigint" ? "integer" : J, const: $.value };
}
var DU = void 0,
  c6 = {
    cuid: /^[cC][^\s-]{8,}$/,
    cuid2: /^[0-9a-z]+$/,
    ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
    email:
      /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
    emoji: () => {
      if (DU === void 0)
        DU = RegExp(
          "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
          "u",
        );
      return DU;
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
function HY($, X) {
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
              d6(J, "email", Y.message, X);
              break;
            case "format:idn-email":
              d6(J, "idn-email", Y.message, X);
              break;
            case "pattern:zod":
              s$(J, c6.email, Y.message, X);
              break;
          }
          break;
        case "url":
          d6(J, "uri", Y.message, X);
          break;
        case "uuid":
          d6(J, "uuid", Y.message, X);
          break;
        case "regex":
          s$(J, Y.regex, Y.message, X);
          break;
        case "cuid":
          s$(J, c6.cuid, Y.message, X);
          break;
        case "cuid2":
          s$(J, c6.cuid2, Y.message, X);
          break;
        case "startsWith":
          s$(J, RegExp(`^${FU(Y.value, X)}`), Y.message, X);
          break;
        case "endsWith":
          s$(J, RegExp(`${FU(Y.value, X)}$`), Y.message, X);
          break;
        case "datetime":
          d6(J, "date-time", Y.message, X);
          break;
        case "date":
          d6(J, "date", Y.message, X);
          break;
        case "time":
          d6(J, "time", Y.message, X);
          break;
        case "duration":
          d6(J, "duration", Y.message, X);
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
          s$(J, RegExp(FU(Y.value, X)), Y.message, X);
          break;
        }
        case "ip": {
          if (Y.version !== "v6") d6(J, "ipv4", Y.message, X);
          if (Y.version !== "v4") d6(J, "ipv6", Y.message, X);
          break;
        }
        case "base64url":
          s$(J, c6.base64url, Y.message, X);
          break;
        case "jwt":
          s$(J, c6.jwt, Y.message, X);
          break;
        case "cidr": {
          if (Y.version !== "v6") s$(J, c6.ipv4Cidr, Y.message, X);
          if (Y.version !== "v4") s$(J, c6.ipv6Cidr, Y.message, X);
          break;
        }
        case "emoji":
          s$(J, c6.emoji(), Y.message, X);
          break;
        case "ulid": {
          s$(J, c6.ulid, Y.message, X);
          break;
        }
        case "base64": {
          switch (X.base64Strategy) {
            case "format:binary": {
              d6(J, "binary", Y.message, X);
              break;
            }
            case "contentEncoding:base64": {
              J$(J, "contentEncoding", "base64", Y.message, X);
              break;
            }
            case "pattern:zod": {
              s$(J, c6.base64, Y.message, X);
              break;
            }
          }
          break;
        }
        case "nanoid":
          s$(J, c6.nanoid, Y.message, X);
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
          ((Q) => {})(Y);
      }
  return J;
}
function FU($, X) {
  return X.patternStrategy === "escape" ? px($) : $;
}
var dx = new Set(
  "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789",
);
function px($) {
  let X = "";
  for (let J = 0; J < $.length; J++) {
    if (!dx.has($[J])) X += "\\";
    X += $[J];
  }
  return X;
}
function d6($, X, J, Y) {
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
function s$($, X, J, Y) {
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
      pattern: qF(X, Y),
      ...(J && Y.errorMessages && { errorMessage: { pattern: J } }),
    });
  } else J$($, "pattern", qF(X, Y), J, Y);
}
function qF($, X) {
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
  for (let H = 0; H < Y.length; H++) {
    if (W) {
      ((Q += Y[H]), (W = !1));
      continue;
    }
    if (J.i) {
      if (z) {
        if (Y[H].match(/[a-z]/)) {
          if (G)
            ((Q += Y[H]), (Q += `${Y[H - 2]}-${Y[H]}`.toUpperCase()), (G = !1));
          else if (Y[H + 1] === "-" && Y[H + 2]?.match(/[a-z]/))
            ((Q += Y[H]), (G = !0));
          else Q += `${Y[H]}${Y[H].toUpperCase()}`;
          continue;
        }
      } else if (Y[H].match(/[a-z]/)) {
        Q += `[${Y[H]}${Y[H].toUpperCase()}]`;
        continue;
      }
    }
    if (J.m) {
      if (Y[H] === "^") {
        Q += `(^|(?<=[\r
]))`;
        continue;
      } else if (Y[H] === "$") {
        Q += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (J.s && Y[H] === ".") {
      Q += z
        ? `${Y[H]}\r
`
        : `[${Y[H]}\r
]`;
      continue;
    }
    if (((Q += Y[H]), Y[H] === "\\")) W = !0;
    else if (z && Y[H] === "]") z = !1;
    else if (!z && Y[H] === "[") z = !0;
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
function UY($, X) {
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
    let { type: Y, ...Q } = HY($.keyType._def, X);
    return { ...J, propertyNames: Q };
  } else if ($.keyType?._def.typeName === R.ZodEnum)
    return { ...J, propertyNames: { enum: $.keyType._def.values } };
  else if (
    $.keyType?._def.typeName === R.ZodBranded &&
    $.keyType._def.type._def.typeName === R.ZodString &&
    $.keyType._def.type._def.checks?.length
  ) {
    let { type: Y, ...Q } = GY($.keyType._def, X);
    return { ...J, propertyNames: Q };
  }
  return J;
}
function DF($, X) {
  if (X.mapStrategy === "record") return UY($, X);
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
function FF($) {
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
function jF($) {
  return $.target === "openAi"
    ? void 0
    : { not: Z$({ ...$, currentPath: [...$.currentPath, "not"] }) };
}
function LF($) {
  return $.target === "openApi3"
    ? { enum: ["null"], nullable: !0 }
    : { type: "null" };
}
var JJ = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null",
};
function AF($, X) {
  if (X.target === "openApi3") return MF($, X);
  let J = $.options instanceof Map ? Array.from($.options.values()) : $.options;
  if (
    J.every(
      (Y) => Y._def.typeName in JJ && (!Y._def.checks || !Y._def.checks.length),
    )
  ) {
    let Y = J.reduce((Q, W) => {
      let z = JJ[W._def.typeName];
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
  return MF($, X);
}
var MF = ($, X) => {
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
function IF($, X) {
  if (
    ["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(
      $.innerType._def.typeName,
    ) &&
    (!$.innerType._def.checks || !$.innerType._def.checks.length)
  ) {
    if (X.target === "openApi3")
      return { type: JJ[$.innerType._def.typeName], nullable: !0 };
    return { type: [JJ[$.innerType._def.typeName], "null"] };
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
function ZF($, X) {
  let J = { type: "number" };
  if (!$.checks) return J;
  for (let Y of $.checks)
    switch (Y.kind) {
      case "int":
        ((J.type = "integer"), BU(J, "type", Y.message, X));
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
function bF($, X) {
  let J = X.target === "openAi",
    Y = { type: "object", properties: {} },
    Q = [],
    W = $.shape();
  for (let G in W) {
    let H = W[G];
    if (H === void 0 || H._def === void 0) continue;
    let U = nx(H);
    if (U && J) {
      if (H._def.typeName === "ZodOptional") H = H._def.innerType;
      if (!H.isNullable()) H = H.nullable();
      U = !1;
    }
    let K = d(H._def, {
      ...X,
      currentPath: [...X.currentPath, "properties", G],
      propertyPath: [...X.currentPath, "properties", G],
    });
    if (K === void 0) continue;
    if (((Y.properties[G] = K), !U)) Q.push(G);
  }
  if (Q.length) Y.required = Q;
  let z = ix($, X);
  if (z !== void 0) Y.additionalProperties = z;
  return Y;
}
function ix($, X) {
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
function nx($) {
  try {
    return $.isOptional();
  } catch {
    return !0;
  }
}
var RF = ($, X) => {
  if (X.currentPath.toString() === X.propertyPath?.toString())
    return d($.innerType._def, X);
  let J = d($.innerType._def, {
    ...X,
    currentPath: [...X.currentPath, "anyOf", "1"],
  });
  return J ? { anyOf: [{ not: Z$(X) }, J] } : Z$(X);
};
var PF = ($, X) => {
  if (X.pipeStrategy === "input") return d($.in._def, X);
  else if (X.pipeStrategy === "output") return d($.out._def, X);
  let J = d($.in._def, { ...X, currentPath: [...X.currentPath, "allOf", "0"] }),
    Y = d($.out._def, {
      ...X,
      currentPath: [...X.currentPath, "allOf", J ? "1" : "0"],
    });
  return { allOf: [J, Y].filter((Q) => Q !== void 0) };
};
function EF($, X) {
  return d($.type._def, X);
}
function SF($, X) {
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
function vF($, X) {
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
function CF($) {
  return { not: Z$($) };
}
function kF($) {
  return Z$($);
}
var _F = ($, X) => {
  return d($.innerType._def, X);
};
var xF = ($, X, J) => {
  switch (X) {
    case R.ZodString:
      return HY($, J);
    case R.ZodNumber:
      return ZF($, J);
    case R.ZodObject:
      return bF($, J);
    case R.ZodBigInt:
      return HF($, J);
    case R.ZodBoolean:
      return UF();
    case R.ZodDate:
      return qU($, J);
    case R.ZodUndefined:
      return CF(J);
    case R.ZodNull:
      return LF(J);
    case R.ZodArray:
      return GF($, J);
    case R.ZodUnion:
    case R.ZodDiscriminatedUnion:
      return AF($, J);
    case R.ZodIntersection:
      return wF($, J);
    case R.ZodTuple:
      return vF($, J);
    case R.ZodRecord:
      return UY($, J);
    case R.ZodLiteral:
      return BF($, J);
    case R.ZodEnum:
      return OF($);
    case R.ZodNativeEnum:
      return FF($);
    case R.ZodNullable:
      return IF($, J);
    case R.ZodOptional:
      return RF($, J);
    case R.ZodMap:
      return DF($, J);
    case R.ZodSet:
      return SF($, J);
    case R.ZodLazy:
      return () => $.getter()._def;
    case R.ZodPromise:
      return EF($, J);
    case R.ZodNaN:
    case R.ZodNever:
      return jF(J);
    case R.ZodEffects:
      return NF($, J);
    case R.ZodAny:
      return Z$(J);
    case R.ZodUnknown:
      return kF(J);
    case R.ZodDefault:
      return VF($, J);
    case R.ZodBranded:
      return GY($, J);
    case R.ZodReadonly:
      return _F($, J);
    case R.ZodCatch:
      return KF($, J);
    case R.ZodPipeline:
      return PF($, J);
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
    if (G !== YF) return G;
  }
  if (Y && !J) {
    let G = rx(Y, X);
    if (G !== void 0) return G;
  }
  let Q = { def: $, path: X.currentPath, jsonSchema: void 0 };
  X.seen.set($, Q);
  let W = xF($, $.typeName, X),
    z = typeof W === "function" ? d(W(), X) : W;
  if (z) ox($, X, z);
  if (X.postProcess) {
    let G = X.postProcess(z, $, X);
    return ((Q.jsonSchema = z), G);
  }
  return ((Q.jsonSchema = z), z);
}
var rx = ($, X) => {
    switch (X.$refStrategy) {
      case "root":
        return { $ref: $.path.join("/") };
      case "relative":
        return { $ref: zY(X.currentPath, $.path) };
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
  ox = ($, X, J) => {
    if ($.description) {
      if (((J.description = $.description), X.markdownDescription))
        J.markdownDescription = $.description;
    }
    return J;
  };
var jU = ($, X) => {
  let J = zF(X),
    Y =
      typeof X === "object" && X.definitions
        ? Object.entries(X.definitions).reduce(
            (H, [U, K]) => ({
              ...H,
              [U]:
                d(
                  K._def,
                  { ...J, currentPath: [...J.basePath, J.definitionPath, U] },
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
function tx($) {
  if (!$) return "draft-7";
  if ($ === "jsonSchema7" || $ === "draft-7") return "draft-7";
  if ($ === "jsonSchema2019-09" || $ === "draft-2020-12")
    return "draft-2020-12";
  return "draft-7";
}
function LU($, X) {
  if (P6($))
    return a0($, { target: tx(X?.target), io: X?.pipeStrategy ?? "input" });
  return jU($, {
    strictUnions: X?.strictUnions ?? !0,
    pipeStrategy: X?.pipeStrategy ?? "input",
  });
}
function MU($) {
  let J = Y1($)?.method;
  if (!J) throw Error("Schema is missing a method literal");
  let Y = Z5(J);
  if (typeof Y !== "string")
    throw Error("Schema method literal must be a string");
  return Y;
}
function AU($, X) {
  let J = Q1($, X);
  if (!J.success) throw J.error;
  return J.data;
}
var ax = 60000;
class IU {
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
      this.setNotificationHandler(c5, (X) => {
        this._oncancel(X);
      }),
      this.setNotificationHandler(p5, (X) => {
        this._onprogress(X);
      }),
      this.setRequestHandler(d5, (X) => ({})),
      (this._taskStore = $?.taskStore),
      (this._taskMessageQueue = $?.taskMessageQueue),
      this._taskStore)
    )
      (this.setRequestHandler(i5, async (X, J) => {
        let Y = await this._taskStore.getTask(X.params.taskId, J.sessionId);
        if (!Y)
          throw new h(
            m.InvalidParams,
            "Failed to retrieve task: Task not found",
          );
        return { ...Y };
      }),
        this.setRequestHandler(r5, async (X, J) => {
          let Y = async () => {
            let Q = X.params.taskId;
            if (this._taskMessageQueue) {
              let z;
              while (
                (z = await this._taskMessageQueue.dequeue(Q, J.sessionId))
              ) {
                if (z.type === "response" || z.type === "error") {
                  let G = z.message,
                    H = G.id,
                    U = this._requestResolvers.get(H);
                  if (U)
                    if (
                      (this._requestResolvers.delete(H), z.type === "response")
                    )
                      U(G);
                    else {
                      let K = G,
                        V = new h(K.error.code, K.error.message, K.error.data);
                      U(V);
                    }
                  else {
                    let K = z.type === "response" ? "Response" : "Error";
                    this._onerror(
                      Error(`${K} handler missing for request ${H}`),
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
            if (!G1(W.status))
              return (await this._waitForTaskUpdate(Q, J.signal), await Y());
            if (G1(W.status)) {
              let z = await this._taskStore.getTaskResult(Q, J.sessionId);
              return (
                this._clearTaskQueue(Q),
                { ...z, _meta: { ...z._meta, [z1]: { taskId: Q } } }
              );
            }
            return await Y();
          };
          return await Y();
        }),
        this.setRequestHandler(o5, async (X, J) => {
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
        this.setRequestHandler(a5, async (X, J) => {
          try {
            let Y = await this._taskStore.getTask(X.params.taskId, J.sessionId);
            if (!Y)
              throw new h(
                m.InvalidParams,
                `Task not found: ${X.params.taskId}`,
              );
            if (G1(Y.status))
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
      if ((Y?.(Q, W), nX(Q) || iD(Q))) this._onresponse(Q);
      else if (XU(Q)) this._onrequest(Q, W);
      else if (pD(Q)) this._onnotification(Q);
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
      Q = $.params?._meta?.[z1]?.taskId;
    if (J === void 0) {
      let U = {
        jsonrpc: "2.0",
        id: $.id,
        error: { code: m.MethodNotFound, message: "Method not found" },
      };
      if (Q && this._taskMessageQueue)
        this._enqueueTaskMessage(
          Q,
          { type: "error", message: U, timestamp: Date.now() },
          Y?.sessionId,
        ).catch((K) =>
          this._onerror(Error(`Failed to enqueue error response: ${K}`)),
        );
      else
        Y?.send(U).catch((K) =>
          this._onerror(Error(`Failed to send an error response: ${K}`)),
        );
      return;
    }
    let W = new AbortController();
    this._requestHandlerAbortControllers.set($.id, W);
    let z = lD($.params) ? $.params.task : void 0,
      G = this._taskStore ? this.requestTaskStore($, Y?.sessionId) : void 0,
      H = {
        signal: W.signal,
        sessionId: Y?.sessionId,
        _meta: $.params?._meta,
        sendNotification: async (U) => {
          if (W.signal.aborted) return;
          let K = { relatedRequestId: $.id };
          if (Q) K.relatedTask = { taskId: Q };
          await this.notification(U, K);
        },
        sendRequest: async (U, K, V) => {
          if (W.signal.aborted)
            throw new h(m.ConnectionClosed, "Request was cancelled");
          let N = { ...V, relatedRequestId: $.id };
          if (Q && !N.relatedTask) N.relatedTask = { taskId: Q };
          let O = N.relatedTask?.taskId ?? Q;
          if (O && G) await G.updateTaskStatus(O, "input_required");
          return await this.request(U, K, N);
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
      .then(() => J($, H))
      .then(
        async (U) => {
          if (W.signal.aborted) return;
          let K = { result: U, jsonrpc: "2.0", id: $.id };
          if (Q && this._taskMessageQueue)
            await this._enqueueTaskMessage(
              Q,
              { type: "response", message: K, timestamp: Date.now() },
              Y?.sessionId,
            );
          else await Y?.send(K);
        },
        async (U) => {
          if (W.signal.aborted) return;
          let K = {
            jsonrpc: "2.0",
            id: $.id,
            error: {
              code: Number.isSafeInteger(U.code) ? U.code : m.InternalError,
              message: U.message ?? "Internal error",
              ...(U.data !== void 0 && { data: U.data }),
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
      .catch((U) => this._onerror(Error(`Failed to send response: ${U}`)))
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
      if ((this._requestResolvers.delete(X), nX($))) J($);
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
    if (nX($) && $.result && typeof $.result === "object") {
      let W = $.result;
      if (W.task && typeof W.task === "object") {
        let z = W.task;
        if (typeof z.taskId === "string")
          ((Q = !0), this._taskProgressTokens.set(z.taskId, X));
      }
    }
    if (!Q) this._progressHandlers.delete(X);
    if (nX($)) Y($);
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
      let W = await this.request($, Q8, J);
      if (W.task)
        ((Q = W.task.taskId), yield { type: "taskCreated", task: W.task });
      else throw new h(m.InternalError, "Task creation did not return a task");
      while (!0) {
        let z = await this.getTask({ taskId: Q }, J);
        if ((yield { type: "taskStatus", task: z }, G1(z.status))) {
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
        (await new Promise((H) => setTimeout(H, G)),
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
    return new Promise((H, U) => {
      let K = (j) => {
        U(j);
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
      let V = this._requestMessageId++,
        N = { ...$, jsonrpc: "2.0", id: V };
      if (J?.onprogress)
        (this._progressHandlers.set(V, J.onprogress),
          (N.params = {
            ...$.params,
            _meta: { ...($.params?._meta || {}), progressToken: V },
          }));
      if (z) N.params = { ...N.params, task: z };
      if (G)
        N.params = {
          ...N.params,
          _meta: { ...(N.params?._meta || {}), [z1]: G },
        };
      let O = (j) => {
        (this._responseHandlers.delete(V),
          this._progressHandlers.delete(V),
          this._cleanupTimeout(V),
          this._transport
            ?.send(
              {
                jsonrpc: "2.0",
                method: "notifications/cancelled",
                params: { requestId: V, reason: String(j) },
              },
              { relatedRequestId: Y, resumptionToken: Q, onresumptiontoken: W },
            )
            .catch((Z) =>
              this._onerror(Error(`Failed to send cancellation: ${Z}`)),
            ));
        let I = j instanceof h ? j : new h(m.RequestTimeout, String(j));
        U(I);
      };
      (this._responseHandlers.set(V, (j) => {
        if (J?.signal?.aborted) return;
        if (j instanceof Error) return U(j);
        try {
          let I = Q1(X, j.result);
          if (!I.success) U(I.error);
          else H(I.data);
        } catch (I) {
          U(I);
        }
      }),
        J?.signal?.addEventListener("abort", () => {
          O(J?.signal?.reason);
        }));
      let w = J?.timeout ?? ax,
        B = () =>
          O(h.fromError(m.RequestTimeout, "Request timed out", { timeout: w }));
      this._setupTimeout(
        V,
        w,
        J?.maxTotalTimeout,
        B,
        J?.resetTimeoutOnProgress ?? !1,
      );
      let F = G?.taskId;
      if (F) {
        let j = (I) => {
          let Z = this._responseHandlers.get(V);
          if (Z) Z(I);
          else
            this._onerror(
              Error(`Response handler missing for side-channeled request ${V}`),
            );
        };
        (this._requestResolvers.set(V, j),
          this._enqueueTaskMessage(F, {
            type: "request",
            message: N,
            timestamp: Date.now(),
          }).catch((I) => {
            (this._cleanupTimeout(V), U(I));
          }));
      } else
        this._transport
          .send(N, {
            relatedRequestId: Y,
            resumptionToken: Q,
            onresumptiontoken: W,
          })
          .catch((j) => {
            (this._cleanupTimeout(V), U(j));
          });
    });
  }
  async getTask($, X) {
    return this.request({ method: "tasks/get", params: $ }, n5, X);
  }
  async getTaskResult($, X, J) {
    return this.request({ method: "tasks/result", params: $ }, X, J);
  }
  async listTasks($, X) {
    return this.request({ method: "tasks/list", params: $ }, t5, X);
  }
  async cancelTask($, X) {
    return this.request({ method: "tasks/cancel", params: $ }, rD, X);
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
          _meta: { ...($.params?._meta || {}), [z1]: X.relatedTask },
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
                _meta: { ...(z.params?._meta || {}), [z1]: X.relatedTask },
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
          _meta: { ...(W.params?._meta || {}), [z1]: X.relatedTask },
        },
      };
    await this._transport.send(W, X);
  }
  setRequestHandler($, X) {
    let J = MU($);
    (this.assertRequestHandlerCapability(J),
      this._requestHandlers.set(J, (Y, Q) => {
        let W = AU($, Y);
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
    let J = MU($);
    this._notificationHandlers.set(J, (Y) => {
      let Q = AU($, Y);
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
        if (Y.type === "request" && XU(Y.message)) {
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
          let G = sX.parse({ method: "notifications/tasks/status", params: z });
          if ((await this.notification(G), G1(z.status)))
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
        if (G1(z.status))
          throw new h(
            m.InvalidParams,
            `Cannot update task "${Y}" from terminal status "${z.status}" to "${Q}". Terminal states (completed, failed, cancelled) cannot transition to other states.`,
          );
        await J.updateTaskStatus(Y, Q, W, X);
        let G = await J.getTask(Y, X);
        if (G) {
          let H = sX.parse({ method: "notifications/tasks/status", params: G });
          if ((await this.notification(H), G1(G.status)))
            this._cleanupTaskProgressHandler(Y);
        }
      },
      listTasks: (Y) => {
        return J.listTasks(Y, X);
      },
    };
  }
}
function TF($) {
  return $ !== null && typeof $ === "object" && !Array.isArray($);
}
function fF($, X) {
  let J = { ...$ };
  for (let Y in X) {
    let Q = Y,
      W = X[Q];
    if (W === void 0) continue;
    let z = J[Q];
    if (TF(z) && TF(W)) J[Q] = { ...z, ...W };
    else J[Q] = W;
  }
  return J;
}
var jA = SJ(qK(), 1),
  LA = SJ(FA(), 1);
function Gc() {
  let $ = new jA.default({
    strict: !1,
    validateFormats: !0,
    validateSchema: !1,
    allErrors: !0,
  });
  return (LA.default($), $);
}
class RK {
  constructor($) {
    this._ajv = $ ?? Gc();
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
class PK {
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
        W = Q.some((U) => U.type === "tool_result"),
        z = $.messages.length > 1 ? $.messages[$.messages.length - 2] : void 0,
        G = z ? (Array.isArray(z.content) ? z.content : [z.content]) : [],
        H = G.some((U) => U.type === "tool_use");
      if (W) {
        if (Q.some((U) => U.type !== "tool_result"))
          throw Error(
            "The last message must contain only tool_result content if any is present",
          );
        if (!H)
          throw Error(
            "tool_result blocks are not matching any tool_use from the previous message",
          );
      }
      if (H) {
        let U = new Set(
            G.filter((V) => V.type === "tool_use").map((V) => V.id),
          ),
          K = new Set(
            Q.filter((V) => V.type === "tool_result").map((V) => V.toolUseId),
          );
        if (U.size !== K.size || ![...U].every((V) => K.has(V)))
          throw Error(
            "ids of tool_result blocks and tool_use blocks from previous message do not match",
          );
      }
    }
    return this.requestStream(
      { method: "sampling/createMessage", params: $ },
      XJ,
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
      z8,
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
function MA($, X, J) {
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
function AA($, X, J) {
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
class EK extends IU {
  constructor($, X) {
    super(X);
    if (
      ((this._serverInfo = $),
      (this._loggingLevels = new Map()),
      (this.LOG_LEVEL_SEVERITY = new Map($J.options.map((J, Y) => [J, Y]))),
      (this.isMessageIgnored = (J, Y) => {
        let Q = this._loggingLevels.get(Y);
        return Q
          ? this.LOG_LEVEL_SEVERITY.get(J) < this.LOG_LEVEL_SEVERITY.get(Q)
          : !1;
      }),
      (this._capabilities = X?.capabilities ?? {}),
      (this._instructions = X?.instructions),
      (this._jsonSchemaValidator = X?.jsonSchemaValidator ?? new RK()),
      this.setRequestHandler(YU, (J) => this._oninitialize(J)),
      this.setNotificationHandler(WU, () => this.oninitialized?.()),
      this._capabilities.logging)
    )
      this.setRequestHandler(NU, async (J, Y) => {
        let Q =
            Y.sessionId || Y.requestInfo?.headers["mcp-session-id"] || void 0,
          { level: W } = J.params,
          z = $J.safeParse(W);
        if (z.success) this._loggingLevels.set(Q, z.data);
        return {};
      });
  }
  get experimental() {
    if (!this._experimental) this._experimental = { tasks: new PK(this) };
    return this._experimental;
  }
  registerCapabilities($) {
    if (this.transport)
      throw Error("Cannot register capabilities after connecting to transport");
    this._capabilities = fF(this._capabilities, $);
  }
  setRequestHandler($, X) {
    let Y = Y1($)?.method;
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
      let z = async (G, H) => {
        let U = Q1(W8, G);
        if (!U.success) {
          let O = U.error instanceof Error ? U.error.message : String(U.error);
          throw new h(m.InvalidParams, `Invalid tools/call request: ${O}`);
        }
        let { params: K } = U.data,
          V = await Promise.resolve(X(G, H));
        if (K.task) {
          let O = Q1(Q8, V);
          if (!O.success) {
            let w =
              O.error instanceof Error ? O.error.message : String(O.error);
            throw new h(m.InvalidParams, `Invalid task creation result: ${w}`);
          }
          return O.data;
        }
        let N = Q1(YY, V);
        if (!N.success) {
          let O = N.error instanceof Error ? N.error.message : String(N.error);
          throw new h(m.InvalidParams, `Invalid tools/call result: ${O}`);
        }
        return N.data;
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
    AA(this._clientCapabilities?.tasks?.requests, $, "Client");
  }
  assertTaskHandlerCapability($) {
    if (!this._capabilities) return;
    MA(this._capabilities.tasks?.requests, $, "Server");
  }
  async _oninitialize($) {
    let X = $.params.protocolVersion;
    return (
      (this._clientCapabilities = $.params.capabilities),
      (this._clientVersion = $.params.clientInfo),
      {
        protocolVersion: hD.includes(X) ? X : eH,
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
    return this.request({ method: "ping" }, l5);
  }
  async createMessage($, X) {
    if ($.tools || $.toolChoice) {
      if (!this._clientCapabilities?.sampling?.tools)
        throw Error("Client does not support sampling tools capability.");
    }
    if ($.messages.length > 0) {
      let J = $.messages[$.messages.length - 1],
        Y = Array.isArray(J.content) ? J.content : [J.content],
        Q = Y.some((H) => H.type === "tool_result"),
        W = $.messages.length > 1 ? $.messages[$.messages.length - 2] : void 0,
        z = W ? (Array.isArray(W.content) ? W.content : [W.content]) : [],
        G = z.some((H) => H.type === "tool_use");
      if (Q) {
        if (Y.some((H) => H.type !== "tool_result"))
          throw Error(
            "The last message must contain only tool_result content if any is present",
          );
        if (!G)
          throw Error(
            "tool_result blocks are not matching any tool_use from the previous message",
          );
      }
      if (G) {
        let H = new Set(
            z.filter((K) => K.type === "tool_use").map((K) => K.id),
          ),
          U = new Set(
            Y.filter((K) => K.type === "tool_result").map((K) => K.toolUseId),
          );
        if (H.size !== U.size || ![...H].every((K) => U.has(K)))
          throw Error(
            "ids of tool_result blocks and tool_use blocks from previous message do not match",
          );
      }
    }
    if ($.tools)
      return this.request(
        { method: "sampling/createMessage", params: $ },
        OU,
        X,
      );
    return this.request({ method: "sampling/createMessage", params: $ }, XJ, X);
  }
  async elicitInput($, X) {
    switch ($.mode ?? "form") {
      case "url": {
        if (!this._clientCapabilities?.elicitation?.url)
          throw Error("Client does not support url elicitation.");
        let Y = $;
        return this.request({ method: "elicitation/create", params: Y }, z8, X);
      }
      case "form": {
        if (!this._clientCapabilities?.elicitation?.form)
          throw Error("Client does not support form elicitation.");
        let Y = $.mode === "form" ? $ : { ...$, mode: "form" },
          Q = await this.request(
            { method: "elicitation/create", params: Y },
            z8,
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
    return this.request({ method: "roots/list", params: $ }, wU, X);
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
var ZA = Symbol.for("mcp.completable");
function SK($) {
  return !!$ && typeof $ === "object" && ZA in $;
}
function bA($) {
  return $[ZA]?.complete;
}
var IA;
(function ($) {
  $.Completable = "McpCompletable";
})(IA || (IA = {}));
var Hc = /^[A-Za-z0-9._-]{1,128}$/;
function Uc($) {
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
  if (!Hc.test($)) {
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
function Kc($, X) {
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
function vK($) {
  let X = Uc($);
  return (Kc($, X.warnings), X.isValid);
}
class CK {
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
class _K {
  constructor($, X) {
    ((this._registeredResources = {}),
      (this._registeredResourceTemplates = {}),
      (this._registeredTools = {}),
      (this._registeredPrompts = {}),
      (this._toolHandlersInitialized = !1),
      (this._completionHandlerInitialized = !1),
      (this._resourceHandlersInitialized = !1),
      (this._promptHandlersInitialized = !1),
      (this.server = new EK($, X)));
  }
  get experimental() {
    if (!this._experimental) this._experimental = { tasks: new CK(this) };
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
    (this.server.assertCanSetRequestHandler(B1(QY)),
      this.server.assertCanSetRequestHandler(B1(W8)),
      this.server.registerCapabilities({ tools: { listChanged: !0 } }),
      this.server.setRequestHandler(QY, () => ({
        tools: Object.entries(this._registeredTools)
          .filter(([, $]) => $.enabled)
          .map(([$, X]) => {
            let J = {
              name: $,
              title: X.title,
              description: X.description,
              inputSchema: (() => {
                let Y = s0(X.inputSchema);
                return Y
                  ? LU(Y, { strictUnions: !0, pipeStrategy: "input" })
                  : Vc;
              })(),
              annotations: X.annotations,
              execution: X.execution,
              _meta: X._meta,
            };
            if (X.outputSchema) {
              let Y = s0(X.outputSchema);
              if (Y)
                J.outputSchema = LU(Y, {
                  strictUnions: !0,
                  pipeStrategy: "output",
                });
            }
            return J;
          }),
      })),
      this.server.setRequestHandler(W8, async ($, X) => {
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
    let Q = s0($.inputSchema) ?? $.inputSchema,
      W = await A5(Q, X);
    if (!W.success) {
      let z = "error" in W ? W.error : "Unknown error",
        G = I5(z);
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
    let Y = s0($.outputSchema),
      Q = await A5(Y, X.structuredContent);
    if (!Q.success) {
      let W = "error" in Q ? Q.error : "Unknown error",
        z = I5(W);
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
      H = z.task,
      U = H.pollInterval ?? 5000;
    while (
      H.status !== "completed" &&
      H.status !== "failed" &&
      H.status !== "cancelled"
    ) {
      await new Promise((V) => setTimeout(V, U));
      let K = await J.taskStore.getTask(G);
      if (!K)
        throw new h(m.InternalError, `Task ${G} not found during polling`);
      H = K;
    }
    return await J.taskStore.getTaskResult(G);
  }
  setCompletionRequestHandler() {
    if (this._completionHandlerInitialized) return;
    (this.server.assertCanSetRequestHandler(B1(WY)),
      this.server.registerCapabilities({ completions: {} }),
      this.server.setRequestHandler(WY, async ($) => {
        switch ($.params.ref.type) {
          case "ref/prompt":
            return ($F($), this.handlePromptCompletion($, $.params.ref));
          case "ref/resource":
            return (XF($), this.handleResourceCompletion($, $.params.ref));
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
    if (!J.argsSchema) return RJ;
    let Q = Y1(J.argsSchema)?.[$.params.argument.name];
    if (!SK(Q)) return RJ;
    let W = bA(Q);
    if (!W) return RJ;
    let z = await W($.params.argument.value, $.params.context);
    return PA(z);
  }
  async handleResourceCompletion($, X) {
    let J = Object.values(this._registeredResourceTemplates).find(
      (W) => W.resourceTemplate.uriTemplate.toString() === X.uri,
    );
    if (!J) {
      if (this._registeredResources[X.uri]) return RJ;
      throw new h(
        m.InvalidParams,
        `Resource template ${$.params.ref.uri} not found`,
      );
    }
    let Y = J.resourceTemplate.completeCallback($.params.argument.name);
    if (!Y) return RJ;
    let Q = await Y($.params.argument.value, $.params.context);
    return PA(Q);
  }
  setResourceRequestHandlers() {
    if (this._resourceHandlersInitialized) return;
    (this.server.assertCanSetRequestHandler(B1(s5)),
      this.server.assertCanSetRequestHandler(B1(e5)),
      this.server.assertCanSetRequestHandler(B1($Y)),
      this.server.registerCapabilities({ resources: { listChanged: !0 } }),
      this.server.setRequestHandler(s5, async ($, X) => {
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
      this.server.setRequestHandler(e5, async () => {
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
      this.server.setRequestHandler($Y, async ($, X) => {
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
    (this.server.assertCanSetRequestHandler(B1(XY)),
      this.server.assertCanSetRequestHandler(B1(JY)),
      this.server.registerCapabilities({ prompts: { listChanged: !0 } }),
      this.server.setRequestHandler(XY, () => ({
        prompts: Object.entries(this._registeredPrompts)
          .filter(([, $]) => $.enabled)
          .map(([$, X]) => {
            return {
              name: $,
              title: X.title,
              description: X.description,
              arguments: X.argsSchema ? Nc(X.argsSchema) : void 0,
            };
          }),
      })),
      this.server.setRequestHandler(JY, async ($, X) => {
        let J = this._registeredPrompts[$.params.name];
        if (!J)
          throw new h(m.InvalidParams, `Prompt ${$.params.name} not found`);
        if (!J.enabled)
          throw new h(m.InvalidParams, `Prompt ${$.params.name} disabled`);
        if (J.argsSchema) {
          let Y = s0(J.argsSchema),
            Q = await A5(Y, $.params.arguments);
          if (!Q.success) {
            let G = "error" in Q ? Q.error : "Unknown error",
              H = I5(G);
            throw new h(
              m.InvalidParams,
              `Invalid arguments for prompt ${$.params.name}: ${H}`,
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
      update: (H) => {
        if (typeof H.name < "u" && H.name !== $) {
          if ((delete this._registeredResourceTemplates[$], H.name))
            this._registeredResourceTemplates[H.name] = W;
        }
        if (typeof H.title < "u") W.title = H.title;
        if (typeof H.template < "u") W.resourceTemplate = H.template;
        if (typeof H.metadata < "u") W.metadata = H.metadata;
        if (typeof H.callback < "u") W.readCallback = H.callback;
        if (typeof H.enabled < "u") W.enabled = H.enabled;
        this.sendResourceListChanged();
      },
    };
    this._registeredResourceTemplates[$] = W;
    let z = J.uriTemplate.variableNames;
    if (Array.isArray(z) && z.some((H) => !!J.completeCallback(H)))
      this.setCompletionRequestHandler();
    return W;
  }
  _createRegisteredPrompt($, X, J, Y, Q) {
    let W = {
      title: X,
      description: J,
      argsSchema: Y === void 0 ? void 0 : n1(Y),
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
        if (typeof z.argsSchema < "u") W.argsSchema = n1(z.argsSchema);
        if (typeof z.callback < "u") W.callback = z.callback;
        if (typeof z.enabled < "u") W.enabled = z.enabled;
        this.sendPromptListChanged();
      },
    };
    if (((this._registeredPrompts[$] = W), Y)) {
      if (
        Object.values(Y).some((G) => {
          let H = G instanceof b6 ? G._def?.innerType : G;
          return SK(H);
        })
      )
        this.setCompletionRequestHandler();
    }
    return W;
  }
  _createRegisteredTool($, X, J, Y, Q, W, z, G, H) {
    vK($);
    let U = {
      title: X,
      description: J,
      inputSchema: RA(Y),
      outputSchema: RA(Q),
      annotations: W,
      execution: z,
      _meta: G,
      handler: H,
      enabled: !0,
      disable: () => U.update({ enabled: !1 }),
      enable: () => U.update({ enabled: !0 }),
      remove: () => U.update({ name: null }),
      update: (K) => {
        if (typeof K.name < "u" && K.name !== $) {
          if (typeof K.name === "string") vK(K.name);
          if ((delete this._registeredTools[$], K.name))
            this._registeredTools[K.name] = U;
        }
        if (typeof K.title < "u") U.title = K.title;
        if (typeof K.description < "u") U.description = K.description;
        if (typeof K.paramsSchema < "u") U.inputSchema = n1(K.paramsSchema);
        if (typeof K.outputSchema < "u") U.outputSchema = n1(K.outputSchema);
        if (typeof K.callback < "u") U.handler = K.callback;
        if (typeof K.annotations < "u") U.annotations = K.annotations;
        if (typeof K._meta < "u") U._meta = K._meta;
        if (typeof K.enabled < "u") U.enabled = K.enabled;
        this.sendToolListChanged();
      },
    };
    return (
      (this._registeredTools[$] = U),
      this.setToolRequestHandlers(),
      this.sendToolListChanged(),
      U
    );
  }
  tool($, ...X) {
    if (this._registeredTools[$])
      throw Error(`Tool ${$} is already registered`);
    let J, Y, Q, W;
    if (typeof X[0] === "string") J = X.shift();
    if (X.length > 1) {
      let G = X[0];
      if (kK(G)) {
        if (
          ((Y = X.shift()),
          X.length > 1 &&
            typeof X[0] === "object" &&
            X[0] !== null &&
            !kK(X[0]))
        )
          W = X.shift();
      } else if (typeof G === "object" && G !== null) {
        if (Object.values(G).some((H) => typeof H === "object" && H !== null))
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
      _meta: H,
    } = X;
    return this._createRegisteredTool(
      $,
      Y,
      Q,
      W,
      z,
      G,
      { taskSupport: "forbidden" },
      H,
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
var Vc = { type: "object", properties: {} };
function EA($) {
  return (
    $ !== null &&
    typeof $ === "object" &&
    "parse" in $ &&
    typeof $.parse === "function" &&
    "safeParse" in $ &&
    typeof $.safeParse === "function"
  );
}
function SA($) {
  return "_def" in $ || "_zod" in $ || EA($);
}
function kK($) {
  if (typeof $ !== "object" || $ === null) return !1;
  if (SA($)) return !1;
  if (Object.keys($).length === 0) return !0;
  return Object.values($).some(EA);
}
function RA($) {
  if (!$) return;
  if (kK($)) return n1($);
  if (!SA($))
    throw Error(
      "inputSchema must be a Zod schema or raw shape, received an unrecognized object",
    );
  return $;
}
function Nc($) {
  let X = Y1($);
  if (!X) return [];
  return Object.entries(X).map(([J, Y]) => {
    let Q = $D(Y),
      W = XD(Y);
    return { name: J, description: Q, required: !W };
  });
}
function B1($) {
  let J = Y1($)?.method;
  if (!J) throw Error("Schema is missing a method literal");
  let Y = Z5(J);
  if (typeof Y === "string") return Y;
  throw Error("Schema method literal must be a string");
}
function PA($) {
  return {
    completion: {
      values: $.slice(0, 100),
      total: $.length,
      hasMore: $.length > 100,
    },
  };
}
var RJ = { completion: { values: [], hasMore: !1 } };
function Oc($, X, J, Y, Q) {
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
function wc($) {
  let X = new _K(
    { name: $.name, version: $.version ?? "1.0.0" },
    { capabilities: { tools: $.tools ? {} : void 0 } },
  );
  if ($.tools)
    $.tools.forEach((J) => {
      for (let Y of Object.values(J.inputSchema)) {
        if (!Bc(Y)) continue;
        let Q = Y.description;
        if (Q && !G6.has(Y)) G6.add(Y, { description: Q });
      }
      X.registerTool(
        J.name,
        {
          description: J.description,
          inputSchema: J.inputSchema,
          annotations: J.annotations,
          _meta: $.alwaysLoad
            ? { "anthropic/alwaysLoad": !0, ...J._meta }
            : J._meta,
        },
        J.handler,
      );
    });
  return { type: "sdk", name: $.name, instance: X };
}
function Bc($) {
  return typeof $ === "object" && $ !== null && "_zod" in $;
}
function vA($) {
  let X;
  return () => (X ??= $());
}
var CA = 15000,
  qc = vA(() =>
    W1.object({
      session_id: W1.string(),
      ws_url: W1.string(),
      work_dir: W1.string().optional(),
      session_key: W1.string().optional(),
    }),
  );
class W4 extends Error {
  constructor($) {
    super($);
    this.name = "DirectConnectError";
  }
}
class _A {
  options;
  ws;
  sessionId;
  workDir;
  abortController;
  readyState = !1;
  closed = !1;
  exitError;
  messages = new P1();
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
      this.failInit(new X6("Connection aborted"));
      return;
    }
    ((this.abortHandler = () => {
      (this.close(), (this.exitError = new X6("Connection aborted by user")));
    }),
      this.abortController.signal.addEventListener("abort", this.abortHandler));
    let $;
    try {
      let Q = await Fc(this.options);
      ((this.sessionId = Q.sessionId),
        (this.workDir = Q.workDir),
        ($ = Q.wsUrl));
    } catch (Q) {
      this.failInit(d4(Q));
      return;
    }
    if (this.closed) {
      if (this.options.deleteSessionOnClose && this.sessionId)
        kA(this.options.serverUrl, this.sessionId, this.options.authToken);
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
          let z = new W4(`WebSocket connection timeout after ${CA}ms`);
          ((Q.exitError = z), Q.readyReject?.(z));
        }
      },
      CA,
      this,
      J,
    );
    (J.addEventListener("open", () => {
      (clearTimeout(Y),
        (this.readyState = !0),
        Q6(
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
          H = G.pop() ?? "";
        if (H) this.partialChunks.push(H);
        for (let U of G) {
          if (!U) continue;
          let K;
          try {
            K = l$(U);
          } catch (V) {
            Q6(
              `DirectConnect: dropped malformed JSON line (${U.length} bytes): ${V}`,
            );
            continue;
          }
          this.messages.enqueue(K);
        }
      }),
      J.addEventListener("error", () => {
        clearTimeout(Y);
        let Q = new W4("WebSocket connection error");
        ((this.exitError = Q), this.readyReject?.(Q), this.messages.done());
      }),
      J.addEventListener("close", (Q) => {
        if (
          ((this.readyState = !1),
          (this.closed = !0),
          Q.code !== 1000 && Q.code !== 1001 && !this.exitError)
        )
          this.exitError = new W4(
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
    if (this.abortController.signal.aborted) throw new X6("Operation aborted");
    if (!this.readyState) await this.readyPromise;
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN)
      throw new W4("Transport is not ready for writing");
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
      kA(this.options.serverUrl, this.sessionId, this.options.authToken);
  }
  async *readMessages() {
    if ((yield* this.messages, this.exitError)) throw this.exitError;
  }
}
function Dc($) {
  if ($.startsWith("cc://")) {
    let Y = $.slice(5),
      Q = new URL(`http://${Y}`),
      W = Q.pathname.slice(1) || void 0;
    return { serverUrl: `http://${Q.host}`, authToken: W };
  }
  if ($.startsWith("cc+unix://"))
    throw new W4(
      "Unix socket connect (cc+unix://) is not supported by the SDK transport",
    );
  let X = /^https?:\/\//i.test($) ? $ : `http://${$}`,
    J = new URL(X);
  return { serverUrl: `${J.protocol}//${J.host}`, authToken: void 0 };
}
async function Fc($) {
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
      body: w$(J),
    });
  } catch (W) {
    throw new W4(
      `Failed to connect to server at ${$.serverUrl}: ${W instanceof Error ? W.message : String(W)}`,
    );
  }
  if (!Y.ok) {
    let W = await Y.text().catch(() => "");
    throw new W4(
      `Failed to create session: ${Y.status} ${Y.statusText}${W ? ` — ${W}` : ""}`,
    );
  }
  let Q = qc().safeParse(await Y.json());
  if (!Q.success) throw new W4(`Invalid session response: ${Q.error.message}`);
  return {
    sessionId: Q.data.session_id,
    wsUrl: Q.data.ws_url,
    workDir: Q.data.work_dir,
  };
}
async function kA($, X, J) {
  let Y = {};
  if (J) Y.authorization = `Bearer ${J}`;
  try {
    await fetch(`${$}/sessions/${X}`, { method: "DELETE", headers: Y });
  } catch {}
}
async function Sc($, X) {
  try {
    await Ac($, X);
  } catch (J) {
    if (!p4(J)) throw J;
  }
}
async function vc($, X) {
  if (!$) return;
  let J = $;
  try {
    let Y = l$($);
    if (Y?.claudeAiOauth?.refreshToken)
      (delete Y.claudeAiOauth.refreshToken, (J = w$(Y)));
  } catch {}
  await uA(X, J, { mode: 384 });
}
function Cc() {
  if (process.platform !== "darwin") return Promise.resolve(void 0);
  let $ = Mq(Lq);
  return new Promise((X) => {
    jc(
      "security",
      ["find-generic-password", "-a", Aq(), "-w", "-s", $],
      { encoding: "utf-8", timeout: 5000 },
      (J, Y) => X(J ? void 0 : Y.trim() || void 0),
    );
  });
}
async function cA($, X, J, Y, Q = 60000) {
  if (!U$(X)) return;
  let W = k6(J),
    z = await H4(
      $.load({ projectKey: W, sessionId: X }),
      Q,
      `SessionStore.load() timed out after ${Q}ms for session ${X}`,
    );
  if (!z || z.length === 0) return;
  let G = A6(Rc(), `claude-resume-${gK()}`);
  try {
    let H = A6(G, "projects", W);
    await xK(H, { recursive: !0 });
    let U = A6(H, `${X}.jsonl`);
    await E9(U, z);
    let K = Y?.CLAUDE_CONFIG_DIR ?? process.env.CLAUDE_CONFIG_DIR,
      V = K ?? A6(TK(), ".claude"),
      N;
    try {
      N = await hA(A6(V, ".credentials.json"), "utf-8");
    } catch (O) {
      if (!p4(O)) throw O;
    }
    if (
      !K &&
      !(Y ?? process.env).ANTHROPIC_API_KEY &&
      !(Y ?? process.env).CLAUDE_CODE_OAUTH_TOKEN
    )
      N = (await Cc()) ?? N;
    if (
      (await vc(N, A6(G, ".credentials.json")),
      await Sc(A6(K ?? TK(), ".claude.json"), A6(G, ".claude.json")),
      $.listSubkeys)
    ) {
      let O = A6(H, X),
        w = await H4(
          $.listSubkeys({ projectKey: W, sessionId: X }),
          Q,
          `SessionStore.listSubkeys() timed out after ${Q}ms for session ${X}`,
        );
      for (let B of w) {
        let F = PJ(O, B + ".jsonl");
        if (
          !B ||
          mA(B) ||
          B.split(/[\\/]/).includes("..") ||
          !F.startsWith(O + hK)
        ) {
          S$(`[SessionStore] skipping unsafe subpath from listSubkeys: ${B}`, {
            level: "warn",
          });
          continue;
        }
        let j = await H4(
          $.load({ projectKey: W, sessionId: X, subpath: B }),
          Q,
          `SessionStore.load() timed out after ${Q}ms for session ${X} subpath ${B}`,
        );
        if (!j || j.length === 0) continue;
        let I = [],
          Z = [];
        for (let _ of j)
          if (iA(_)) I.push(_);
          else Z.push(_);
        if (Z.length > 0) (await xK(xA(F), { recursive: !0 }), await E9(F, Z));
        if (I.length > 0) {
          let _ = I.at(-1),
            T = PJ(O, B + ".meta.json");
          await xK(xA(T), { recursive: !0 });
          let { type: O$, ...x$ } = _;
          await uA(T, w$(x$), { mode: 384 });
        }
      }
    }
    return G;
  } catch (H) {
    throw (await iY(G), H);
  }
}
function fK($, X, J, Y) {
  let {
      systemPrompt: Q,
      settings: W,
      managedSettings: z,
      settingSources: G,
      sandbox: H,
      ...U
    } = $ ?? {},
    K,
    V,
    N;
  if (Q === void 0) K = "";
  else if (typeof Q === "string") K = Q;
  else if (Array.isArray(Q)) K = Q;
  else if (Q.type === "preset")
    ((V = Q.append), (N = Q.excludeDynamicSections));
  let O = U.pathToClaudeCodeExecutable;
  if (!O) {
    let w6 = Ec(import.meta.url),
      T6 = bc(w6),
      s6 = N7((Z8) => T6.resolve(Z8));
    if (s6) O = s6;
    else
      try {
        O = T6.resolve("./cli.js");
      } catch {
        throw Error(
          `Native CLI binary for ${process.platform}-${process.arch} not found. Reinstall @anthropic-ai/claude-agent-sdk without --omit=optional, or set options.pathToClaudeCodeExecutable.`,
        );
      }
  }
  process.env.CLAUDE_AGENT_SDK_VERSION = "0.2.121";
  let {
    abortController: w = Q0(),
    additionalDirectories: B = [],
    agent: F,
    agents: j,
    allowedTools: I = [],
    betas: Z,
    canUseTool: _,
    continue: T,
    cwd: O$,
    debug: x$,
    debugFile: O6,
    disallowedTools: z4 = [],
    tools: G4,
    env: a6,
    executable: $0 = Y0() ? "bun" : "node",
    executableArgs: _4 = [],
    extraArgs: X0 = {},
    fallbackModel: q1,
    enableFileCheckpointing: l,
    toolConfig: j8,
    forkSession: rY,
    hooks: J0,
    includeHookEvents: L8,
    includePartialMessages: M8,
    forwardSubagentText: EJ,
    onElicitation: k$,
    persistSession: _6,
    sessionStore: u$,
    thinking: A8,
    effort: oA,
    maxThinkingTokens: oY,
    maxTurns: tA,
    maxBudgetUsd: aA,
    taskBudget: sA,
    mcpServers: uK,
    model: eA,
    outputFormat: mK,
    permissionMode: $I = "default",
    allowDangerouslySkipPermissions: XI = !1,
    permissionPromptToolName: JI,
    plugins: QI,
    getOAuthToken: lK,
    workload: cK,
    resume: dK,
    resumeSessionAt: YI,
    sessionId: WI,
    skills: pK,
    stderr: zI,
    strictMcpConfig: GI,
  } = U;
  if (u$ && _6 === !1)
    throw Error(
      "sessionStore cannot be used with persistSession: false -- the storage adapter requires local writes to mirror from. Use CLAUDE_CONFIG_DIR=/tmp for ephemeral local writes with external mirroring.",
    );
  if (u$ && T && !dK && !u$.listSessions)
    throw Error(
      "Options.continue with sessionStore requires store.listSessions to be implemented",
    );
  if (u$ && l)
    throw Error(
      "enableFileCheckpointing is not yet supported with sessionStore (backup blobs are not mirrored, so rewindFiles() fails after a store-backed resume).",
    );
  if (u$ && U.spawnClaudeCodeProcess)
    S$(
      "sessionStore with custom spawnClaudeCodeProcess: ensure the subprocess CLAUDE_CONFIG_DIR matches the parent (same path, same separators) or transcript_mirror frames will be dropped.",
      { level: "warn" },
    );
  let iK = mK?.type === "json_schema" ? mK.schema : void 0,
    x6 = a6 ? { ...a6 } : { ...process.env };
  if (!x6.CLAUDE_CODE_ENTRYPOINT) x6.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
  if (l) x6.CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING = "true";
  if (lK) x6.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH = "1";
  if (j8?.askUserQuestion?.previewFormat)
    x6.CLAUDE_CODE_QUESTION_PREVIEW_FORMAT = j8.askUserQuestion.previewFormat;
  let tY = {};
  if ((nY.propagation.inject(nY.context.active(), tY), "traceparent" in tY)) {
    for (let w6 of ["TRACEPARENT", "TRACESTATE"])
      if (!(w6 in (a6 ?? {}))) delete x6[w6];
  }
  for (let [w6, T6] of Object.entries(tY)) {
    let s6 = w6.toUpperCase();
    if (!(s6 in (a6 ?? {}))) x6[s6] = T6;
  }
  let nK = {},
    rK = new Map();
  if (uK)
    for (let [w6, T6] of Object.entries(uK))
      if (T6.type === "sdk" && T6.instance) rK.set(w6, T6.instance);
      else nK[w6] = T6;
  let I8;
  if (A8)
    switch (A8.type) {
      case "adaptive":
        I8 = { type: "adaptive", display: A8.display };
        break;
      case "enabled":
        I8 = {
          type: "enabled",
          budgetTokens: A8.budgetTokens,
          display: A8.display,
        };
        break;
      case "disabled":
        I8 = { type: "disabled" };
        break;
    }
  else if (oY !== void 0)
    I8 =
      oY === 0 ? { type: "disabled" } : { type: "enabled", budgetTokens: oY };
  if (J) x6.CLAUDE_CONFIG_DIR = J;
  let oK = new F9({
      abortController: w,
      additionalDirectories: B,
      agent: F,
      betas: Z,
      cwd: O$,
      debug: x$,
      debugFile: O6,
      executable: $0,
      executableArgs: _4,
      extraArgs: cK ? { ...X0, workload: cK } : X0,
      pathToClaudeCodeExecutable: O,
      env: x6,
      forkSession: rY,
      stderr: zI,
      thinkingConfig: I8,
      effort: oA,
      maxTurns: tA,
      maxBudgetUsd: aA,
      taskBudget: sA,
      model: eA,
      fallbackModel: q1,
      jsonSchema: iK,
      permissionMode: $I,
      allowDangerouslySkipPermissions: XI,
      permissionPromptToolName: JI,
      continueConversation: u$ ? void 0 : T,
      resume: dK,
      resumeSessionAt: YI,
      sessionId: WI,
      settings: typeof W === "object" ? w$(W) : W,
      managedSettings: z ? w$(z) : void 0,
      settingSources: G,
      skills: pK,
      allowedTools: I,
      disallowedTools: z4,
      tools: G4,
      mcpServers: nK,
      strictMcpConfig: GI,
      canUseTool: !!_,
      hooks: !!J0,
      includeHookEvents: L8,
      includePartialMessages: M8,
      persistSession: _6,
      sessionMirror: !!u$,
      plugins: QI,
      sandbox: H,
      spawnClaudeCodeProcess: U.spawnClaudeCodeProcess,
      deferSpawn: Y,
    }),
    HI = {
      systemPrompt: K,
      appendSystemPrompt: V,
      planModeInstructions: U.planModeInstructions,
      appendSubagentSystemPrompt: U.appendSubagentSystemPrompt,
      excludeDynamicSections: N,
      agents: j,
      title: U.title,
      skills: pK,
      promptSuggestions: U.promptSuggestions,
      agentProgressSummaries: U.agentProgressSummaries,
      forwardSubagentText: EJ,
    },
    aY = new j9(oK, X, _, J0, w, rK, iK, HI, k$, lK);
  if (u$) {
    let w6 = () => A6(x6.CLAUDE_CONFIG_DIR ?? A6(TK(), ".claude"), "projects"),
      T6 = new iW(
        async (s6, Z8) => {
          let b8 = gA(s6, w6());
          if (b8) await u$.append(b8, Z8);
          else
            S$(
              `[SessionStore] dropping mirror frame: filePath ${s6} is not under ${w6()} -- subprocess CLAUDE_CONFIG_DIR likely differs from parent (custom spawnClaudeCodeProcess / container?)`,
              { level: "warn" },
            );
        },
        void 0,
        (s6, Z8) => {
          let b8 = gA(s6, w6());
          if (b8) aY.reportMirrorError(b8, Z8.message);
        },
      );
    aY.setTranscriptMirrorBatcher(T6);
  }
  return {
    queryInstance: aY,
    transport: oK,
    abortController: w,
    processEnv: x6,
  };
}
function yK($, X, J, Y) {
  if (typeof J === "string")
    X.write(
      w$({
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
var kc = new Set(["EBUSY", "EMFILE", "ENFILE", "ENOTEMPTY", "EPERM"]);
async function iY($) {
  for (let X = 0; ; X++)
    try {
      return await Zc($, { recursive: !0, force: !0 });
    } catch (J) {
      if (X >= 4 || !kc.has(g6(J) ?? "")) return;
      await vJ((X + 1) * 100);
    }
}
function _c($, X) {
  $.waitForExit()
    .catch(() => {})
    .finally(() => iY(X));
}
function x7$({ prompt: $, options: X }) {
  if ((X?.resume || X?.continue) && X?.sessionStore) {
    let {
        queryInstance: W,
        transport: z,
        abortController: G,
        processEnv: H,
      } = fK({ ...X }, typeof $ === "string", void 0, !0),
      U = PJ(X.cwd ?? "."),
      K = X.sessionStore,
      V = X.loadTimeoutMs ?? 60000,
      N = X.resume;
    return (
      (async () => {
        if (!N)
          N = (
            await H4(
              K.listSessions(k6(U)),
              V,
              `SessionStore.listSessions() timed out after ${V}ms`,
            )
          )
            .slice()
            .sort((B, F) => F.mtime - B.mtime)[0]?.sessionId;
        if (!N) return;
        return cA(K, N, U, X.env, X.loadTimeoutMs);
      })()
        .then((w) => {
          if (w)
            (z.updateResume(N),
              z.updateEnv({ CLAUDE_CONFIG_DIR: w }),
              (H.CLAUDE_CONFIG_DIR = w),
              W.addCleanupCallback(() => _c(z, w)));
          if (!W.isClosed()) z.spawn();
        })
        .catch((w) => {
          let B = d4(w);
          (z.spawnAbort(B), W.setError(B));
        }),
      yK(W, z, $, G),
      W
    );
  }
  let {
    queryInstance: J,
    transport: Y,
    abortController: Q,
  } = fK(X, typeof $ === "string");
  return (yK(J, Y, $, Q), J);
}
async function T7$({ options: $, initializeTimeoutMs: X = 60000 } = {}) {
  let J,
    Y = $?.resume;
  if ((Y || $?.continue) && $?.sessionStore) {
    let G = PJ($.cwd ?? ".");
    if (!Y) {
      if (!$.sessionStore.listSessions)
        throw Error(
          "Options.continue with sessionStore requires store.listSessions to be implemented",
        );
      let H = $.loadTimeoutMs ?? 60000;
      Y = (
        await H4(
          $.sessionStore.listSessions(k6(G)),
          H,
          `SessionStore.listSessions() timed out after ${H}ms`,
        )
      )
        .slice()
        .sort((K, V) => V.mtime - K.mtime)[0]?.sessionId;
    }
    if (Y) J = await cA($.sessionStore, Y, G, $.env, $.loadTimeoutMs);
  }
  let Q, W, z;
  try {
    let N = function () {
        if (V) return;
        ((V = !0), K.close());
      },
      G = fK(J && Y && Y !== $?.resume ? { ...$, resume: Y } : $, !1, J);
    Q = G.queryInstance;
    let { transport: H, abortController: U } = G;
    W = H;
    let K = G.queryInstance;
    if (J) {
      let O = J;
      K.addCleanupCallback(() => {
        z = H.waitForExit()
          .catch(() => {})
          .then(() => iY(O));
      });
    }
    await H4(
      K.initializationResult(),
      X,
      `Subprocess initialization did not complete within ${X}ms — check authentication and network connectivity`,
    );
    let V = !1;
    return {
      query(O) {
        if (V) throw Error("WarmQuery.query() can only be called once");
        V = !0;
        try {
          yK(K, H, O, U);
        } catch (w) {
          throw (K.close(), w);
        }
        if (typeof O === "string") K.setIsSingleUserTurn(!0);
        return K;
      },
      close: N,
      async [Symbol.asyncDispose]() {
        ((V = !0), K.close(), await z);
      },
    };
  } catch (G) {
    if ((Q?.close(), J && !z)) {
      let H = W;
      z = (H ? H.waitForExit().catch(() => {}) : Promise.resolve()).then(() =>
        iY(J),
      );
    }
    throw (await z, G);
  }
}
function f7$($) {
  return lz($);
}
function y7$($, X) {
  return uB($, X);
}
async function g7$($, X) {
  let Y = [];
  try {
    const J = q$(Y, lz(X), 1);
    await J.send($);
    for await (let H of J.stream()) if (H.type === "result") return H;
    throw Error("Session ended without result message");
  } catch (Q) {
    var W = Q,
      z = 1;
  } finally {
    var G = D$(Y, W, z);
    G && (await G);
  }
}
async function h7$($, X) {
  if (X?.sessionStore) return yc(X.sessionStore, $, X);
  return aB($, X);
}
async function u7$($) {
  if ($?.sessionStore) return Tc($.sessionStore, $);
  return eB($);
}
async function m7$($, X) {
  if (X?.sessionStore) return gc(X.sessionStore, $, X);
  return $q($, X);
}
async function l7$($, X, J) {
  if (J?.sessionStore) return hc(J.sessionStore, $, X, J.dir);
  return Yq($, X, J);
}
async function c7$($, X, J) {
  if (J?.sessionStore) return uc(J.sessionStore, $, X, J.dir);
  return Wq($, X, J);
}
async function d7$($, X) {
  if (!U$($)) throw Error(`Invalid sessionId: ${$}`);
  if (X?.sessionStore) {
    if (!X.sessionStore.delete) return;
    let J = k6(X.dir);
    await X.sessionStore.delete({ projectKey: J, sessionId: $ });
    return;
  }
  return zq($, X);
}
async function p7$($, X) {
  if (X?.sessionStore) return mc(X.sessionStore, $, X);
  return Uq($, X);
}
async function i7$($, X, J) {
  if (!U$($)) throw Error(`Invalid sessionId: ${$}`);
  let Y = await n4($, J?.dir);
  if (!Y) throw Error(`Session ${$} not found`);
  let Q = k6(J?.dir),
    W = J?.batchSize && J.batchSize > 0 ? J.batchSize : dW;
  if (
    (await TA(Y.filePath, { projectKey: Q, sessionId: $ }, X, W),
    J?.includeSubagents === !1)
  )
    return;
  let z = Y.filePath.replace(/\.jsonl$/, ""),
    G = A6(z, "subagents");
  for (let H of await xc(G)) {
    let U = lA(z, H).split(hK);
    U[U.length - 1] = U.at(-1).replace(/\.jsonl$/, "");
    let K = { projectKey: Q, sessionId: $, subpath: U.join("/") };
    await TA(H, K, X, W);
    let V = H.replace(/\.jsonl$/, ".meta.json");
    try {
      let N = l$(await hA(V, "utf8"));
      await X.append(K, [{ type: "agent_metadata", ...N }]);
    } catch (N) {
      if (!p4(N)) throw N;
    }
  }
}
async function TA($, X, J, Y) {
  let Q = Pc({ input: Lc($, { encoding: "utf8" }), crlfDelay: 1 / 0 }),
    W = [],
    z = 0;
  for await (let G of Q) {
    if (!G) continue;
    if ((W.push(l$(G)), (z += G.length), W.length >= Y || z >= pW))
      (await J.append(X, W), (W = []), (z = 0));
  }
  if (W.length > 0) await J.append(X, W);
}
async function xc($) {
  let X = [];
  async function J(Y) {
    let Q;
    try {
      Q = await Ic(Y, { withFileTypes: !0 });
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
async function n7$($, X) {
  if (X?.sessionStore) return lc(X.sessionStore, $, X.dir);
  return wq($, X);
}
async function r7$($, X, J) {
  if (J?.sessionStore) return cc(J.sessionStore, $, X, J);
  return Bq($, X, J);
}
function dA($) {
  let X = PJ($ ?? "."),
    J;
  try {
    J = Mc(X);
  } catch {
    J = X;
  }
  return J.normalize("NFC");
}
function k6($) {
  return x1(dA($));
}
function pA($) {
  return (
    $.map((X) => w$(X)).join(`
`) +
    `
`
  );
}
function fA($, X, J) {
  if (X !== void 0 && X > 0) return $.slice(J, J + X);
  if (J > 0) return $.slice(J);
  return $;
}
function iA($) {
  return (
    typeof $ === "object" &&
    $ !== null &&
    "type" in $ &&
    $.type === "agent_metadata"
  );
}
async function Tc($, X) {
  let J = dA(X.dir),
    Y = x1(J),
    Q = X.offset ?? 0,
    W = X.limit;
  if ($.listSessionSummaries) {
    let U = await $.listSessionSummaries(Y),
      K = $.listSessions
        ? new Map((await $.listSessions(Y)).map((w) => [w.sessionId, w]))
        : void 0,
      V = [];
    for (let w of U) {
      let B = K?.get(w.sessionId);
      if (K && !B) continue;
      let F = B !== void 0 && w.mtime < B.mtime;
      V.push({
        sessionId: w.sessionId,
        mtime: F ? B.mtime : w.mtime,
        info: F ? void 0 : tK(w, J),
      });
    }
    if (K) {
      let w = new Set(U.map((B) => B.sessionId));
      for (let [B, F] of K)
        if (!w.has(B)) V.push({ sessionId: B, mtime: F.mtime });
    } else
      S$(
        "listSessionSummaries without listSessions: gap-fill skipped; sessions lacking a sidecar will be omitted",
      );
    V.sort((w, B) => B.mtime - w.mtime);
    let N = fA(V, W, Q),
      O = N.filter((w) => w.info === void 0);
    if (O.length > 0) {
      let w = await yA($, O, X.dir, J),
        B = new Map(w.map((F) => [F.sessionId, F]));
      for (let F of N)
        if (F.info === void 0) F.info = B.get(F.sessionId) ?? null;
    }
    return N.flatMap((w) => (w.info ? [w.info] : []));
  }
  if (!$.listSessions)
    throw Error(
      "sessionStore.listSessions is not implemented -- cannot list sessions. Provide a store with a listSessions() method.",
    );
  let G = (await $.listSessions(Y)).slice().sort((U, K) => K.mtime - U.mtime),
    H = fA(G, W, Q);
  return yA($, H, X.dir, J);
}
async function yA($, X, J, Y) {
  return (
    await Promise.allSettled(
      X.map(async (W) => {
        let z = await rA($, W.sessionId, J);
        if (!z) return null;
        let G = E0(W.sessionId, nA(z, W.mtime), Y);
        return G ? { ...G, lastModified: W.mtime } : null;
      }),
    )
  ).flatMap((W, z) => {
    let G = X[z];
    if (W.status === "fulfilled") return W.value ? [W.value] : [];
    return [{ sessionId: G.sessionId, summary: "", lastModified: G.mtime }];
  });
}
function nA($, X) {
  let J = Buffer.from($, "utf-8"),
    Y = J.length,
    Q = J.subarray(0, h6).toString("utf-8"),
    W = Y > h6 ? J.subarray(Y - h6).toString("utf-8") : Q;
  return { mtime: X, size: Y, head: Q, tail: W };
}
function fc($) {
  let X = $.trimEnd(),
    J = X.slice(
      X.lastIndexOf(`
`) + 1,
    );
  try {
    let Y = l$(J);
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
async function rA($, X, J) {
  let Y = k6(J),
    Q = await $.load({ projectKey: Y, sessionId: X });
  if (!Q || Q.length === 0) return null;
  return pA(Q);
}
async function yc($, X, J) {
  if (!U$(X)) return [];
  let Y = k6(J.dir),
    Q = await $.load({ projectKey: Y, sessionId: X });
  if (!Q || Q.length === 0) return [];
  return oB(Q, {
    limit: J.limit,
    offset: J.offset,
    includeSystemMessages: J.includeSystemMessages,
  });
}
async function gc($, X, J) {
  if (!U$(X)) return;
  let Y = await rA($, X, J.dir);
  if (!Y) return;
  let Q = nA(Y, fc(Y));
  return E0(X, Q) ?? void 0;
}
async function hc($, X, J, Y) {
  if (!U$(X)) throw Error(`Invalid sessionId: ${X}`);
  if (!J.trim()) throw Error("title must be non-empty");
  let Q = k6(Y);
  await $.append({ projectKey: Q, sessionId: X }, [
    {
      type: "custom-title",
      customTitle: J.trim(),
      sessionId: X,
      uuid: gK(),
      timestamp: new Date().toISOString(),
    },
  ]);
}
async function uc($, X, J, Y) {
  if (!U$(X)) throw Error(`Invalid sessionId: ${X}`);
  if (J !== null) {
    let W = k1(J).trim();
    if (!W) throw Error("tag must be non-empty (use null to clear)");
    J = W;
  }
  let Q = k6(Y);
  await $.append({ projectKey: Q, sessionId: X }, [
    {
      type: "tag",
      tag: J ?? "",
      sessionId: X,
      uuid: gK(),
      timestamp: new Date().toISOString(),
    },
  ]);
}
async function mc($, X, J) {
  if (!U$(X)) throw Error(`Invalid sessionId: ${X}`);
  if (J.upToMessageId && !U$(J.upToMessageId))
    throw Error(`Invalid upToMessageId: ${J.upToMessageId}`);
  let Y = k6(J.dir),
    Q = await $.load({ projectKey: Y, sessionId: X });
  if (!Q || Q.length === 0) throw Error(`Session ${X} not found`);
  let { entries: W, forkedSessionId: z } = Kq(Q, X, J);
  return (await $.append({ projectKey: Y, sessionId: z }, W), { sessionId: z });
}
async function lc($, X, J) {
  if (!U$(X)) return [];
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
async function cc($, X, J, Y) {
  if (!U$(X)) return [];
  if (!J) return [];
  let Q = k6(Y.dir),
    W = `subagents/agent-${J}`;
  if ($.listSubkeys) {
    let H = await $.listSubkeys({ projectKey: Q, sessionId: X }),
      U = `agent-${J}`,
      K = H.find(
        (V) => V.startsWith("subagents/") && V.split("/").at(-1) === U,
      );
    if (!K) return [];
    W = K;
  }
  let z = await $.load({ projectKey: Q, sessionId: X, subpath: W });
  if (!z || z.length === 0) return [];
  let G = z.filter((H) => !iA(H));
  if (G.length === 0) return [];
  return sz(Buffer.from(pA(G)), { limit: Y.limit, offset: Y.offset });
}
function gA($, X) {
  let J = lA(X, $),
    Y = J.split(hK);
  if (Y[0] === ".." || mA(J)) return null;
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
  y7$ as unstable_v2_resumeSession,
  g7$ as unstable_v2_prompt,
  f7$ as unstable_v2_createSession,
  Oc as tool,
  c7$ as tagSession,
  T7$ as startup,
  l7$ as renameSession,
  x7$ as query,
  Dc as parseDirectConnectUrl,
  n7$ as listSubagents,
  u7$ as listSessions,
  i7$ as importSessionToStore,
  r7$ as getSubagentMessages,
  h7$ as getSessionMessages,
  m7$ as getSessionInfo,
  p7$ as forkSession,
  CJ as foldSessionSummary,
  d7$ as deleteSession,
  wc as createSdkMcpServer,
  bI as SYSTEM_PROMPT_DYNAMIC_BOUNDARY,
  eY as InMemorySessionStore,
  II as HOOK_EVENTS,
  ZI as EXIT_REASONS,
  _A as DirectConnectTransport,
  W4 as DirectConnectError,
  X6 as AbortError,
};
