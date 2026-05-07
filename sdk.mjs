#!/usr/bin/env node
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 0.2.132

// Want to see the unminified source? We're hiring!
// https://job-boards.greenhouse.io/anthropic/jobs/4816199008
var jI = Object.create;
var {
  getPrototypeOf: LI,
  defineProperty: YY,
  getOwnPropertyNames: MI,
} = Object;
var AI = Object.prototype.hasOwnProperty;
function II($) {
  return this[$];
}
var ZI,
  bI,
  kJ = ($, X, J) => {
    var W = $ != null && typeof $ === "object";
    if (W) {
      var Q = X ? (ZI ??= new WeakMap()) : (bI ??= new WeakMap()),
        Y = Q.get($);
      if (Y) return Y;
    }
    J = $ != null ? jI(LI($)) : {};
    let z =
      X || !$ || !$.__esModule
        ? YY(J, "default", { value: $, enumerable: !0 })
        : J;
    for (let G of MI($))
      if (!AI.call(z, G)) YY(z, G, { get: II.bind($, G), enumerable: !0 });
    if (W) Q.set($, z);
    return z;
  };
var M = ($, X) => () => (X || $((X = { exports: {} }).exports, X), X.exports);
var RI = ($) => $;
function PI($, X) {
  this[$] = RI.bind(null, X);
}
var F1 = ($, X) => {
  for (var J in X)
    YY($, J, {
      get: X[J],
      enumerable: !0,
      configurable: !0,
      set: PI.bind(X, J),
    });
};
var EI = Symbol.dispose || Symbol.for("Symbol.dispose"),
  SI = Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose"),
  q$ = ($, X, J) => {
    if (X != null) {
      if (typeof X !== "object" && typeof X !== "function")
        throw TypeError(
          'Object expected to be assigned to "using" declaration',
        );
      var W;
      if (J) W = X[SI];
      if (W === void 0) W = X[EI];
      if (typeof W !== "function") throw TypeError("Object not disposable");
      $.push([J, W, X]);
    } else if (J) $.push([J]);
    return X;
  },
  D$ = ($, X, J) => {
    var W =
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
          ? new W(z, X, "An error was suppressed during disposal")
          : ((J = !0), z)),
      Y = (z) => {
        while ((z = $.pop()))
          try {
            var G = z[1] && z[1].call(z[2]);
            if (z[0]) return Promise.resolve(G).then(Y, (H) => (Q(H), Y()));
          } catch (H) {
            Q(H);
          }
        if (J) throw X;
      };
    return Y();
  };
var JO = M(($O) => {
  Object.defineProperty($O, "__esModule", { value: !0 });
  $O._globalThis = void 0;
  $O._globalThis = typeof globalThis === "object" ? globalThis : global;
});
var QO = M((C1) => {
  var yR =
      (C1 && C1.__createBinding) ||
      (Object.create
        ? function ($, X, J, W) {
            if (W === void 0) W = J;
            Object.defineProperty($, W, {
              enumerable: !0,
              get: function () {
                return X[J];
              },
            });
          }
        : function ($, X, J, W) {
            if (W === void 0) W = J;
            $[W] = X[J];
          }),
    gR =
      (C1 && C1.__exportStar) ||
      function ($, X) {
        for (var J in $)
          if (J !== "default" && !Object.prototype.hasOwnProperty.call(X, J))
            yR(X, $, J);
      };
  Object.defineProperty(C1, "__esModule", { value: !0 });
  gR(JO(), C1);
});
var WO = M((v1) => {
  var hR =
      (v1 && v1.__createBinding) ||
      (Object.create
        ? function ($, X, J, W) {
            if (W === void 0) W = J;
            Object.defineProperty($, W, {
              enumerable: !0,
              get: function () {
                return X[J];
              },
            });
          }
        : function ($, X, J, W) {
            if (W === void 0) W = J;
            $[W] = X[J];
          }),
    uR =
      (v1 && v1.__exportStar) ||
      function ($, X) {
        for (var J in $)
          if (J !== "default" && !Object.prototype.hasOwnProperty.call(X, J))
            hR(X, $, J);
      };
  Object.defineProperty(v1, "__esModule", { value: !0 });
  uR(QO(), v1);
});
var sY = M((YO) => {
  Object.defineProperty(YO, "__esModule", { value: !0 });
  YO.VERSION = void 0;
  YO.VERSION = "1.9.0";
});
var VO = M((UO) => {
  Object.defineProperty(UO, "__esModule", { value: !0 });
  UO.isCompatible = UO._makeCompatibilityCheck = void 0;
  var mR = sY(),
    GO = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
  function HO($) {
    let X = new Set([$]),
      J = new Set(),
      W = $.match(GO);
    if (!W) return () => !1;
    let Q = { major: +W[1], minor: +W[2], patch: +W[3], prerelease: W[4] };
    if (Q.prerelease != null)
      return function (H) {
        return H === $;
      };
    function Y(G) {
      return (J.add(G), !1);
    }
    function z(G) {
      return (X.add(G), !0);
    }
    return function (H) {
      if (X.has(H)) return !0;
      if (J.has(H)) return !1;
      let U = H.match(GO);
      if (!U) return Y(H);
      let K = { major: +U[1], minor: +U[2], patch: +U[3], prerelease: U[4] };
      if (K.prerelease != null) return Y(H);
      if (Q.major !== K.major) return Y(H);
      if (Q.major === 0) {
        if (Q.minor === K.minor && Q.patch <= K.patch) return z(H);
        return Y(H);
      }
      if (Q.minor <= K.minor) return z(H);
      return Y(H);
    };
  }
  UO._makeCompatibilityCheck = HO;
  UO.isCompatible = HO(mR.VERSION);
});
var k1 = M((NO) => {
  Object.defineProperty(NO, "__esModule", { value: !0 });
  NO.unregisterGlobal = NO.getGlobal = NO.registerGlobal = void 0;
  var cR = WO(),
    b0 = sY(),
    pR = VO(),
    dR = b0.VERSION.split(".")[0],
    I9 = Symbol.for(`opentelemetry.js.api.${dR}`),
    Z9 = cR._globalThis;
  function iR($, X, J, W = !1) {
    var Q;
    let Y = (Z9[I9] =
      (Q = Z9[I9]) !== null && Q !== void 0 ? Q : { version: b0.VERSION });
    if (!W && Y[$]) {
      let z = Error(
        `@opentelemetry/api: Attempted duplicate registration of API: ${$}`,
      );
      return (J.error(z.stack || z.message), !1);
    }
    if (Y.version !== b0.VERSION) {
      let z = Error(
        `@opentelemetry/api: Registration of version v${Y.version} for ${$} does not match previously registered API v${b0.VERSION}`,
      );
      return (J.error(z.stack || z.message), !1);
    }
    return (
      (Y[$] = X),
      J.debug(
        `@opentelemetry/api: Registered a global for ${$} v${b0.VERSION}.`,
      ),
      !0
    );
  }
  NO.registerGlobal = iR;
  function nR($) {
    var X, J;
    let W = (X = Z9[I9]) === null || X === void 0 ? void 0 : X.version;
    if (!W || !(0, pR.isCompatible)(W)) return;
    return (J = Z9[I9]) === null || J === void 0 ? void 0 : J[$];
  }
  NO.getGlobal = nR;
  function rR($, X) {
    X.debug(
      `@opentelemetry/api: Unregistering a global for ${$} v${b0.VERSION}.`,
    );
    let J = Z9[I9];
    if (J) delete J[$];
  }
  NO.unregisterGlobal = rR;
});
var DO = M((BO) => {
  Object.defineProperty(BO, "__esModule", { value: !0 });
  BO.DiagComponentLogger = void 0;
  var aR = k1();
  class wO {
    constructor($) {
      this._namespace = $.namespace || "DiagComponentLogger";
    }
    debug(...$) {
      return b9("debug", this._namespace, $);
    }
    error(...$) {
      return b9("error", this._namespace, $);
    }
    info(...$) {
      return b9("info", this._namespace, $);
    }
    warn(...$) {
      return b9("warn", this._namespace, $);
    }
    verbose(...$) {
      return b9("verbose", this._namespace, $);
    }
  }
  BO.DiagComponentLogger = wO;
  function b9($, X, J) {
    let W = (0, aR.getGlobal)("diag");
    if (!W) return;
    return (J.unshift(X), W[$](...J));
  }
});
var j7 = M((FO) => {
  Object.defineProperty(FO, "__esModule", { value: !0 });
  FO.DiagLogLevel = void 0;
  var sR;
  (function ($) {
    (($[($.NONE = 0)] = "NONE"),
      ($[($.ERROR = 30)] = "ERROR"),
      ($[($.WARN = 50)] = "WARN"),
      ($[($.INFO = 60)] = "INFO"),
      ($[($.DEBUG = 70)] = "DEBUG"),
      ($[($.VERBOSE = 80)] = "VERBOSE"),
      ($[($.ALL = 9999)] = "ALL"));
  })((sR = FO.DiagLogLevel || (FO.DiagLogLevel = {})));
});
var MO = M((jO) => {
  Object.defineProperty(jO, "__esModule", { value: !0 });
  jO.createLogLevelDiagLogger = void 0;
  var B4 = j7();
  function eR($, X) {
    if ($ < B4.DiagLogLevel.NONE) $ = B4.DiagLogLevel.NONE;
    else if ($ > B4.DiagLogLevel.ALL) $ = B4.DiagLogLevel.ALL;
    X = X || {};
    function J(W, Q) {
      let Y = X[W];
      if (typeof Y === "function" && $ >= Q) return Y.bind(X);
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
  jO.createLogLevelDiagLogger = eR;
});
var _1 = M((IO) => {
  Object.defineProperty(IO, "__esModule", { value: !0 });
  IO.DiagAPI = void 0;
  var $P = DO(),
    XP = MO(),
    AO = j7(),
    L7 = k1(),
    JP = "diag";
  class $z {
    constructor() {
      function $(W) {
        return function (...Q) {
          let Y = (0, L7.getGlobal)("diag");
          if (!Y) return;
          return Y[W](...Q);
        };
      }
      let X = this,
        J = (W, Q = { logLevel: AO.DiagLogLevel.INFO }) => {
          var Y, z, G;
          if (W === X) {
            let K = Error(
              "Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation",
            );
            return (
              X.error((Y = K.stack) !== null && Y !== void 0 ? Y : K.message),
              !1
            );
          }
          if (typeof Q === "number") Q = { logLevel: Q };
          let H = (0, L7.getGlobal)("diag"),
            U = (0, XP.createLogLevelDiagLogger)(
              (z = Q.logLevel) !== null && z !== void 0
                ? z
                : AO.DiagLogLevel.INFO,
              W,
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
          return (0, L7.registerGlobal)("diag", U, X, !0);
        };
      ((X.setLogger = J),
        (X.disable = () => {
          (0, L7.unregisterGlobal)(JP, X);
        }),
        (X.createComponentLogger = (W) => {
          return new $P.DiagComponentLogger(W);
        }),
        (X.verbose = $("verbose")),
        (X.debug = $("debug")),
        (X.info = $("info")),
        (X.warn = $("warn")),
        (X.error = $("error")));
    }
    static instance() {
      if (!this._instance) this._instance = new $z();
      return this._instance;
    }
  }
  IO.DiagAPI = $z;
});
var PO = M((bO) => {
  Object.defineProperty(bO, "__esModule", { value: !0 });
  bO.BaggageImpl = void 0;
  class R0 {
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
      let J = new R0(this._entries);
      return (J._entries.set($, X), J);
    }
    removeEntry($) {
      let X = new R0(this._entries);
      return (X._entries.delete($), X);
    }
    removeEntries(...$) {
      let X = new R0(this._entries);
      for (let J of $) X._entries.delete(J);
      return X;
    }
    clear() {
      return new R0();
    }
  }
  bO.BaggageImpl = R0;
});
var CO = M((EO) => {
  Object.defineProperty(EO, "__esModule", { value: !0 });
  EO.baggageEntryMetadataSymbol = void 0;
  EO.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
});
var Xz = M((vO) => {
  Object.defineProperty(vO, "__esModule", { value: !0 });
  vO.baggageEntryMetadataFromString = vO.createBaggage = void 0;
  var QP = _1(),
    WP = PO(),
    YP = CO(),
    zP = QP.DiagAPI.instance();
  function GP($ = {}) {
    return new WP.BaggageImpl(new Map(Object.entries($)));
  }
  vO.createBaggage = GP;
  function HP($) {
    if (typeof $ !== "string")
      (zP.error(
        `Cannot create baggage metadata from unknown type: ${typeof $}`,
      ),
        ($ = ""));
    return {
      __TYPE__: YP.baggageEntryMetadataSymbol,
      toString() {
        return $;
      },
    };
  }
  vO.baggageEntryMetadataFromString = HP;
});
var R9 = M((_O) => {
  Object.defineProperty(_O, "__esModule", { value: !0 });
  _O.ROOT_CONTEXT = _O.createContextKey = void 0;
  function KP($) {
    return Symbol.for($);
  }
  _O.createContextKey = KP;
  class M7 {
    constructor($) {
      let X = this;
      ((X._currentContext = $ ? new Map($) : new Map()),
        (X.getValue = (J) => X._currentContext.get(J)),
        (X.setValue = (J, W) => {
          let Q = new M7(X._currentContext);
          return (Q._currentContext.set(J, W), Q);
        }),
        (X.deleteValue = (J) => {
          let W = new M7(X._currentContext);
          return (W._currentContext.delete(J), W);
        }));
    }
  }
  _O.ROOT_CONTEXT = new M7();
});
var gO = M((fO) => {
  Object.defineProperty(fO, "__esModule", { value: !0 });
  fO.DiagConsoleLogger = void 0;
  var Jz = [
    { n: "error", c: "error" },
    { n: "warn", c: "warn" },
    { n: "info", c: "info" },
    { n: "debug", c: "debug" },
    { n: "verbose", c: "trace" },
  ];
  class TO {
    constructor() {
      function $(X) {
        return function (...J) {
          if (console) {
            let W = console[X];
            if (typeof W !== "function") W = console.log;
            if (typeof W === "function") return W.apply(console, J);
          }
        };
      }
      for (let X = 0; X < Jz.length; X++) this[Jz[X].n] = $(Jz[X].c);
    }
  }
  fO.DiagConsoleLogger = TO;
});
var Vz = M((hO) => {
  Object.defineProperty(hO, "__esModule", { value: !0 });
  hO.createNoopMeter =
    hO.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC =
    hO.NOOP_OBSERVABLE_GAUGE_METRIC =
    hO.NOOP_OBSERVABLE_COUNTER_METRIC =
    hO.NOOP_UP_DOWN_COUNTER_METRIC =
    hO.NOOP_HISTOGRAM_METRIC =
    hO.NOOP_GAUGE_METRIC =
    hO.NOOP_COUNTER_METRIC =
    hO.NOOP_METER =
    hO.NoopObservableUpDownCounterMetric =
    hO.NoopObservableGaugeMetric =
    hO.NoopObservableCounterMetric =
    hO.NoopObservableMetric =
    hO.NoopHistogramMetric =
    hO.NoopGaugeMetric =
    hO.NoopUpDownCounterMetric =
    hO.NoopCounterMetric =
    hO.NoopMetric =
    hO.NoopMeter =
      void 0;
  class Qz {
    constructor() {}
    createGauge($, X) {
      return hO.NOOP_GAUGE_METRIC;
    }
    createHistogram($, X) {
      return hO.NOOP_HISTOGRAM_METRIC;
    }
    createCounter($, X) {
      return hO.NOOP_COUNTER_METRIC;
    }
    createUpDownCounter($, X) {
      return hO.NOOP_UP_DOWN_COUNTER_METRIC;
    }
    createObservableGauge($, X) {
      return hO.NOOP_OBSERVABLE_GAUGE_METRIC;
    }
    createObservableCounter($, X) {
      return hO.NOOP_OBSERVABLE_COUNTER_METRIC;
    }
    createObservableUpDownCounter($, X) {
      return hO.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    }
    addBatchObservableCallback($, X) {}
    removeBatchObservableCallback($) {}
  }
  hO.NoopMeter = Qz;
  class P0 {}
  hO.NoopMetric = P0;
  class Wz extends P0 {
    add($, X) {}
  }
  hO.NoopCounterMetric = Wz;
  class Yz extends P0 {
    add($, X) {}
  }
  hO.NoopUpDownCounterMetric = Yz;
  class zz extends P0 {
    record($, X) {}
  }
  hO.NoopGaugeMetric = zz;
  class Gz extends P0 {
    record($, X) {}
  }
  hO.NoopHistogramMetric = Gz;
  class P9 {
    addCallback($) {}
    removeCallback($) {}
  }
  hO.NoopObservableMetric = P9;
  class Hz extends P9 {}
  hO.NoopObservableCounterMetric = Hz;
  class Uz extends P9 {}
  hO.NoopObservableGaugeMetric = Uz;
  class Kz extends P9 {}
  hO.NoopObservableUpDownCounterMetric = Kz;
  hO.NOOP_METER = new Qz();
  hO.NOOP_COUNTER_METRIC = new Wz();
  hO.NOOP_GAUGE_METRIC = new zz();
  hO.NOOP_HISTOGRAM_METRIC = new Gz();
  hO.NOOP_UP_DOWN_COUNTER_METRIC = new Yz();
  hO.NOOP_OBSERVABLE_COUNTER_METRIC = new Hz();
  hO.NOOP_OBSERVABLE_GAUGE_METRIC = new Uz();
  hO.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new Kz();
  function NP() {
    return hO.NOOP_METER;
  }
  hO.createNoopMeter = NP;
});
var tO = M((oO) => {
  Object.defineProperty(oO, "__esModule", { value: !0 });
  oO.ValueType = void 0;
  var IP;
  (function ($) {
    (($[($.INT = 0)] = "INT"), ($[($.DOUBLE = 1)] = "DOUBLE"));
  })((IP = oO.ValueType || (oO.ValueType = {})));
});
var Oz = M((aO) => {
  Object.defineProperty(aO, "__esModule", { value: !0 });
  aO.defaultTextMapSetter = aO.defaultTextMapGetter = void 0;
  aO.defaultTextMapGetter = {
    get($, X) {
      if ($ == null) return;
      return $[X];
    },
    keys($) {
      if ($ == null) return [];
      return Object.keys($);
    },
  };
  aO.defaultTextMapSetter = {
    set($, X, J) {
      if ($ == null) return;
      $[X] = J;
    },
  };
});
var Jw = M(($w) => {
  Object.defineProperty($w, "__esModule", { value: !0 });
  $w.NoopContextManager = void 0;
  var bP = R9();
  class eO {
    active() {
      return bP.ROOT_CONTEXT;
    }
    with($, X, J, ...W) {
      return X.call(J, ...W);
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
  $w.NoopContextManager = eO;
});
var E9 = M((Ww) => {
  Object.defineProperty(Ww, "__esModule", { value: !0 });
  Ww.ContextAPI = void 0;
  var RP = Jw(),
    wz = k1(),
    Qw = _1(),
    Bz = "context",
    PP = new RP.NoopContextManager();
  class qz {
    constructor() {}
    static getInstance() {
      if (!this._instance) this._instance = new qz();
      return this._instance;
    }
    setGlobalContextManager($) {
      return (0, wz.registerGlobal)(Bz, $, Qw.DiagAPI.instance());
    }
    active() {
      return this._getContextManager().active();
    }
    with($, X, J, ...W) {
      return this._getContextManager().with($, X, J, ...W);
    }
    bind($, X) {
      return this._getContextManager().bind($, X);
    }
    _getContextManager() {
      return (0, wz.getGlobal)(Bz) || PP;
    }
    disable() {
      (this._getContextManager().disable(),
        (0, wz.unregisterGlobal)(Bz, Qw.DiagAPI.instance()));
    }
  }
  Ww.ContextAPI = qz;
});
var Fz = M((zw) => {
  Object.defineProperty(zw, "__esModule", { value: !0 });
  zw.TraceFlags = void 0;
  var EP;
  (function ($) {
    (($[($.NONE = 0)] = "NONE"), ($[($.SAMPLED = 1)] = "SAMPLED"));
  })((EP = zw.TraceFlags || (zw.TraceFlags = {})));
});
var A7 = M((Gw) => {
  Object.defineProperty(Gw, "__esModule", { value: !0 });
  Gw.INVALID_SPAN_CONTEXT = Gw.INVALID_TRACEID = Gw.INVALID_SPANID = void 0;
  var SP = Fz();
  Gw.INVALID_SPANID = "0000000000000000";
  Gw.INVALID_TRACEID = "00000000000000000000000000000000";
  Gw.INVALID_SPAN_CONTEXT = {
    traceId: Gw.INVALID_TRACEID,
    spanId: Gw.INVALID_SPANID,
    traceFlags: SP.TraceFlags.NONE,
  };
});
var I7 = M((Nw) => {
  Object.defineProperty(Nw, "__esModule", { value: !0 });
  Nw.NonRecordingSpan = void 0;
  var CP = A7();
  class Vw {
    constructor($ = CP.INVALID_SPAN_CONTEXT) {
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
  Nw.NonRecordingSpan = Vw;
});
var Mz = M((Bw) => {
  Object.defineProperty(Bw, "__esModule", { value: !0 });
  Bw.getSpanContext =
    Bw.setSpanContext =
    Bw.deleteSpan =
    Bw.setSpan =
    Bw.getActiveSpan =
    Bw.getSpan =
      void 0;
  var vP = R9(),
    kP = I7(),
    _P = E9(),
    jz = (0, vP.createContextKey)("OpenTelemetry Context Key SPAN");
  function Lz($) {
    return $.getValue(jz) || void 0;
  }
  Bw.getSpan = Lz;
  function xP() {
    return Lz(_P.ContextAPI.getInstance().active());
  }
  Bw.getActiveSpan = xP;
  function ww($, X) {
    return $.setValue(jz, X);
  }
  Bw.setSpan = ww;
  function TP($) {
    return $.deleteValue(jz);
  }
  Bw.deleteSpan = TP;
  function fP($, X) {
    return ww($, new kP.NonRecordingSpan(X));
  }
  Bw.setSpanContext = fP;
  function yP($) {
    var X;
    return (X = Lz($)) === null || X === void 0 ? void 0 : X.spanContext();
  }
  Bw.getSpanContext = yP;
});
var Z7 = M((Lw) => {
  Object.defineProperty(Lw, "__esModule", { value: !0 });
  Lw.wrapSpanContext =
    Lw.isSpanContextValid =
    Lw.isValidSpanId =
    Lw.isValidTraceId =
      void 0;
  var Dw = A7(),
    cP = I7(),
    pP = /^([0-9a-f]{32})$/i,
    dP = /^[0-9a-f]{16}$/i;
  function Fw($) {
    return pP.test($) && $ !== Dw.INVALID_TRACEID;
  }
  Lw.isValidTraceId = Fw;
  function jw($) {
    return dP.test($) && $ !== Dw.INVALID_SPANID;
  }
  Lw.isValidSpanId = jw;
  function iP($) {
    return Fw($.traceId) && jw($.spanId);
  }
  Lw.isSpanContextValid = iP;
  function nP($) {
    return new cP.NonRecordingSpan($);
  }
  Lw.wrapSpanContext = nP;
});
var Zz = M((Zw) => {
  Object.defineProperty(Zw, "__esModule", { value: !0 });
  Zw.NoopTracer = void 0;
  var aP = E9(),
    Aw = Mz(),
    Az = I7(),
    sP = Z7(),
    Iz = aP.ContextAPI.getInstance();
  class Iw {
    startSpan($, X, J = Iz.active()) {
      if (Boolean(X === null || X === void 0 ? void 0 : X.root))
        return new Az.NonRecordingSpan();
      let Q = J && (0, Aw.getSpanContext)(J);
      if (eP(Q) && (0, sP.isSpanContextValid)(Q))
        return new Az.NonRecordingSpan(Q);
      else return new Az.NonRecordingSpan();
    }
    startActiveSpan($, X, J, W) {
      let Q, Y, z;
      if (arguments.length < 2) return;
      else if (arguments.length === 2) z = X;
      else if (arguments.length === 3) ((Q = X), (z = J));
      else ((Q = X), (Y = J), (z = W));
      let G = Y !== null && Y !== void 0 ? Y : Iz.active(),
        H = this.startSpan($, Q, G),
        U = (0, Aw.setSpan)(G, H);
      return Iz.with(U, z, void 0, H);
    }
  }
  Zw.NoopTracer = Iw;
  function eP($) {
    return (
      typeof $ === "object" &&
      typeof $.spanId === "string" &&
      typeof $.traceId === "string" &&
      typeof $.traceFlags === "number"
    );
  }
});
var bz = M((Pw) => {
  Object.defineProperty(Pw, "__esModule", { value: !0 });
  Pw.ProxyTracer = void 0;
  var $E = Zz(),
    XE = new $E.NoopTracer();
  class Rw {
    constructor($, X, J, W) {
      ((this._provider = $),
        (this.name = X),
        (this.version = J),
        (this.options = W));
    }
    startSpan($, X, J) {
      return this._getTracer().startSpan($, X, J);
    }
    startActiveSpan($, X, J, W) {
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
      if (!$) return XE;
      return ((this._delegate = $), this._delegate);
    }
  }
  Pw.ProxyTracer = Rw;
});
var kw = M((Cw) => {
  Object.defineProperty(Cw, "__esModule", { value: !0 });
  Cw.NoopTracerProvider = void 0;
  var JE = Zz();
  class Sw {
    getTracer($, X, J) {
      return new JE.NoopTracer();
    }
  }
  Cw.NoopTracerProvider = Sw;
});
var Rz = M((xw) => {
  Object.defineProperty(xw, "__esModule", { value: !0 });
  xw.ProxyTracerProvider = void 0;
  var QE = bz(),
    WE = kw(),
    YE = new WE.NoopTracerProvider();
  class _w {
    getTracer($, X, J) {
      var W;
      return (W = this.getDelegateTracer($, X, J)) !== null && W !== void 0
        ? W
        : new QE.ProxyTracer(this, $, X, J);
    }
    getDelegate() {
      var $;
      return ($ = this._delegate) !== null && $ !== void 0 ? $ : YE;
    }
    setDelegate($) {
      this._delegate = $;
    }
    getDelegateTracer($, X, J) {
      var W;
      return (W = this._delegate) === null || W === void 0
        ? void 0
        : W.getTracer($, X, J);
    }
  }
  xw.ProxyTracerProvider = _w;
});
var yw = M((fw) => {
  Object.defineProperty(fw, "__esModule", { value: !0 });
  fw.SamplingDecision = void 0;
  var zE;
  (function ($) {
    (($[($.NOT_RECORD = 0)] = "NOT_RECORD"),
      ($[($.RECORD = 1)] = "RECORD"),
      ($[($.RECORD_AND_SAMPLED = 2)] = "RECORD_AND_SAMPLED"));
  })((zE = fw.SamplingDecision || (fw.SamplingDecision = {})));
});
var hw = M((gw) => {
  Object.defineProperty(gw, "__esModule", { value: !0 });
  gw.SpanKind = void 0;
  var GE;
  (function ($) {
    (($[($.INTERNAL = 0)] = "INTERNAL"),
      ($[($.SERVER = 1)] = "SERVER"),
      ($[($.CLIENT = 2)] = "CLIENT"),
      ($[($.PRODUCER = 3)] = "PRODUCER"),
      ($[($.CONSUMER = 4)] = "CONSUMER"));
  })((GE = gw.SpanKind || (gw.SpanKind = {})));
});
var mw = M((uw) => {
  Object.defineProperty(uw, "__esModule", { value: !0 });
  uw.SpanStatusCode = void 0;
  var HE;
  (function ($) {
    (($[($.UNSET = 0)] = "UNSET"),
      ($[($.OK = 1)] = "OK"),
      ($[($.ERROR = 2)] = "ERROR"));
  })((HE = uw.SpanStatusCode || (uw.SpanStatusCode = {})));
});
var pw = M((lw) => {
  Object.defineProperty(lw, "__esModule", { value: !0 });
  lw.validateValue = lw.validateKey = void 0;
  var Cz = "[_0-9a-z-*/]",
    UE = `[a-z]${Cz}{0,255}`,
    KE = `[a-z0-9]${Cz}{0,240}@[a-z]${Cz}{0,13}`,
    VE = new RegExp(`^(?:${UE}|${KE})$`),
    NE = /^[ -~]{0,255}[!-~]$/,
    OE = /,|=/;
  function wE($) {
    return VE.test($);
  }
  lw.validateKey = wE;
  function BE($) {
    return NE.test($) && !OE.test($);
  }
  lw.validateValue = BE;
});
var aw = M((ow) => {
  Object.defineProperty(ow, "__esModule", { value: !0 });
  ow.TraceStateImpl = void 0;
  var dw = pw(),
    iw = 32,
    DE = 512,
    nw = ",",
    rw = "=";
  class vz {
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
          return ($.push(X + rw + this.get(X)), $);
        }, [])
        .join(nw);
    }
    _parse($) {
      if ($.length > DE) return;
      if (
        ((this._internalState = $.split(nw)
          .reverse()
          .reduce((X, J) => {
            let W = J.trim(),
              Q = W.indexOf(rw);
            if (Q !== -1) {
              let Y = W.slice(0, Q),
                z = W.slice(Q + 1, J.length);
              if ((0, dw.validateKey)(Y) && (0, dw.validateValue)(z))
                X.set(Y, z);
            }
            return X;
          }, new Map())),
        this._internalState.size > iw)
      )
        this._internalState = new Map(
          Array.from(this._internalState.entries()).reverse().slice(0, iw),
        );
    }
    _keys() {
      return Array.from(this._internalState.keys()).reverse();
    }
    _clone() {
      let $ = new vz();
      return (($._internalState = new Map(this._internalState)), $);
    }
  }
  ow.TraceStateImpl = vz;
});
var $B = M((sw) => {
  Object.defineProperty(sw, "__esModule", { value: !0 });
  sw.createTraceState = void 0;
  var FE = aw();
  function jE($) {
    return new FE.TraceStateImpl($);
  }
  sw.createTraceState = jE;
});
var QB = M((XB) => {
  Object.defineProperty(XB, "__esModule", { value: !0 });
  XB.context = void 0;
  var LE = E9();
  XB.context = LE.ContextAPI.getInstance();
});
var zB = M((WB) => {
  Object.defineProperty(WB, "__esModule", { value: !0 });
  WB.diag = void 0;
  var ME = _1();
  WB.diag = ME.DiagAPI.instance();
});
var UB = M((GB) => {
  Object.defineProperty(GB, "__esModule", { value: !0 });
  GB.NOOP_METER_PROVIDER = GB.NoopMeterProvider = void 0;
  var AE = Vz();
  class kz {
    getMeter($, X, J) {
      return AE.NOOP_METER;
    }
  }
  GB.NoopMeterProvider = kz;
  GB.NOOP_METER_PROVIDER = new kz();
});
var OB = M((VB) => {
  Object.defineProperty(VB, "__esModule", { value: !0 });
  VB.MetricsAPI = void 0;
  var ZE = UB(),
    _z = k1(),
    KB = _1(),
    xz = "metrics";
  class Tz {
    constructor() {}
    static getInstance() {
      if (!this._instance) this._instance = new Tz();
      return this._instance;
    }
    setGlobalMeterProvider($) {
      return (0, _z.registerGlobal)(xz, $, KB.DiagAPI.instance());
    }
    getMeterProvider() {
      return (0, _z.getGlobal)(xz) || ZE.NOOP_METER_PROVIDER;
    }
    getMeter($, X, J) {
      return this.getMeterProvider().getMeter($, X, J);
    }
    disable() {
      (0, _z.unregisterGlobal)(xz, KB.DiagAPI.instance());
    }
  }
  VB.MetricsAPI = Tz;
});
var qB = M((wB) => {
  Object.defineProperty(wB, "__esModule", { value: !0 });
  wB.metrics = void 0;
  var bE = OB();
  wB.metrics = bE.MetricsAPI.getInstance();
});
var LB = M((FB) => {
  Object.defineProperty(FB, "__esModule", { value: !0 });
  FB.NoopTextMapPropagator = void 0;
  class DB {
    inject($, X) {}
    extract($, X) {
      return $;
    }
    fields() {
      return [];
    }
  }
  FB.NoopTextMapPropagator = DB;
});
var ZB = M((AB) => {
  Object.defineProperty(AB, "__esModule", { value: !0 });
  AB.deleteBaggage =
    AB.setBaggage =
    AB.getActiveBaggage =
    AB.getBaggage =
      void 0;
  var RE = E9(),
    PE = R9(),
    fz = (0, PE.createContextKey)("OpenTelemetry Baggage Key");
  function MB($) {
    return $.getValue(fz) || void 0;
  }
  AB.getBaggage = MB;
  function EE() {
    return MB(RE.ContextAPI.getInstance().active());
  }
  AB.getActiveBaggage = EE;
  function SE($, X) {
    return $.setValue(fz, X);
  }
  AB.setBaggage = SE;
  function CE($) {
    return $.deleteValue(fz);
  }
  AB.deleteBaggage = CE;
});
var SB = M((PB) => {
  Object.defineProperty(PB, "__esModule", { value: !0 });
  PB.PropagationAPI = void 0;
  var yz = k1(),
    xE = LB(),
    bB = Oz(),
    b7 = ZB(),
    TE = Xz(),
    RB = _1(),
    gz = "propagation",
    fE = new xE.NoopTextMapPropagator();
  class hz {
    constructor() {
      ((this.createBaggage = TE.createBaggage),
        (this.getBaggage = b7.getBaggage),
        (this.getActiveBaggage = b7.getActiveBaggage),
        (this.setBaggage = b7.setBaggage),
        (this.deleteBaggage = b7.deleteBaggage));
    }
    static getInstance() {
      if (!this._instance) this._instance = new hz();
      return this._instance;
    }
    setGlobalPropagator($) {
      return (0, yz.registerGlobal)(gz, $, RB.DiagAPI.instance());
    }
    inject($, X, J = bB.defaultTextMapSetter) {
      return this._getGlobalPropagator().inject($, X, J);
    }
    extract($, X, J = bB.defaultTextMapGetter) {
      return this._getGlobalPropagator().extract($, X, J);
    }
    fields() {
      return this._getGlobalPropagator().fields();
    }
    disable() {
      (0, yz.unregisterGlobal)(gz, RB.DiagAPI.instance());
    }
    _getGlobalPropagator() {
      return (0, yz.getGlobal)(gz) || fE;
    }
  }
  PB.PropagationAPI = hz;
});
var kB = M((CB) => {
  Object.defineProperty(CB, "__esModule", { value: !0 });
  CB.propagation = void 0;
  var yE = SB();
  CB.propagation = yE.PropagationAPI.getInstance();
});
var gB = M((fB) => {
  Object.defineProperty(fB, "__esModule", { value: !0 });
  fB.TraceAPI = void 0;
  var uz = k1(),
    _B = Rz(),
    xB = Z7(),
    E0 = Mz(),
    TB = _1(),
    mz = "trace";
  class lz {
    constructor() {
      ((this._proxyTracerProvider = new _B.ProxyTracerProvider()),
        (this.wrapSpanContext = xB.wrapSpanContext),
        (this.isSpanContextValid = xB.isSpanContextValid),
        (this.deleteSpan = E0.deleteSpan),
        (this.getSpan = E0.getSpan),
        (this.getActiveSpan = E0.getActiveSpan),
        (this.getSpanContext = E0.getSpanContext),
        (this.setSpan = E0.setSpan),
        (this.setSpanContext = E0.setSpanContext));
    }
    static getInstance() {
      if (!this._instance) this._instance = new lz();
      return this._instance;
    }
    setGlobalTracerProvider($) {
      let X = (0, uz.registerGlobal)(
        mz,
        this._proxyTracerProvider,
        TB.DiagAPI.instance(),
      );
      if (X) this._proxyTracerProvider.setDelegate($);
      return X;
    }
    getTracerProvider() {
      return (0, uz.getGlobal)(mz) || this._proxyTracerProvider;
    }
    getTracer($, X) {
      return this.getTracerProvider().getTracer($, X);
    }
    disable() {
      ((0, uz.unregisterGlobal)(mz, TB.DiagAPI.instance()),
        (this._proxyTracerProvider = new _B.ProxyTracerProvider()));
    }
  }
  fB.TraceAPI = lz;
});
var mB = M((hB) => {
  Object.defineProperty(hB, "__esModule", { value: !0 });
  hB.trace = void 0;
  var gE = gB();
  hB.trace = gE.TraceAPI.getInstance();
});
var dz = M((H$) => {
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
  var hE = Xz();
  Object.defineProperty(H$, "baggageEntryMetadataFromString", {
    enumerable: !0,
    get: function () {
      return hE.baggageEntryMetadataFromString;
    },
  });
  var lB = R9();
  Object.defineProperty(H$, "createContextKey", {
    enumerable: !0,
    get: function () {
      return lB.createContextKey;
    },
  });
  Object.defineProperty(H$, "ROOT_CONTEXT", {
    enumerable: !0,
    get: function () {
      return lB.ROOT_CONTEXT;
    },
  });
  var uE = gO();
  Object.defineProperty(H$, "DiagConsoleLogger", {
    enumerable: !0,
    get: function () {
      return uE.DiagConsoleLogger;
    },
  });
  var mE = j7();
  Object.defineProperty(H$, "DiagLogLevel", {
    enumerable: !0,
    get: function () {
      return mE.DiagLogLevel;
    },
  });
  var lE = Vz();
  Object.defineProperty(H$, "createNoopMeter", {
    enumerable: !0,
    get: function () {
      return lE.createNoopMeter;
    },
  });
  var cE = tO();
  Object.defineProperty(H$, "ValueType", {
    enumerable: !0,
    get: function () {
      return cE.ValueType;
    },
  });
  var cB = Oz();
  Object.defineProperty(H$, "defaultTextMapGetter", {
    enumerable: !0,
    get: function () {
      return cB.defaultTextMapGetter;
    },
  });
  Object.defineProperty(H$, "defaultTextMapSetter", {
    enumerable: !0,
    get: function () {
      return cB.defaultTextMapSetter;
    },
  });
  var pE = bz();
  Object.defineProperty(H$, "ProxyTracer", {
    enumerable: !0,
    get: function () {
      return pE.ProxyTracer;
    },
  });
  var dE = Rz();
  Object.defineProperty(H$, "ProxyTracerProvider", {
    enumerable: !0,
    get: function () {
      return dE.ProxyTracerProvider;
    },
  });
  var iE = yw();
  Object.defineProperty(H$, "SamplingDecision", {
    enumerable: !0,
    get: function () {
      return iE.SamplingDecision;
    },
  });
  var nE = hw();
  Object.defineProperty(H$, "SpanKind", {
    enumerable: !0,
    get: function () {
      return nE.SpanKind;
    },
  });
  var rE = mw();
  Object.defineProperty(H$, "SpanStatusCode", {
    enumerable: !0,
    get: function () {
      return rE.SpanStatusCode;
    },
  });
  var oE = Fz();
  Object.defineProperty(H$, "TraceFlags", {
    enumerable: !0,
    get: function () {
      return oE.TraceFlags;
    },
  });
  var tE = $B();
  Object.defineProperty(H$, "createTraceState", {
    enumerable: !0,
    get: function () {
      return tE.createTraceState;
    },
  });
  var cz = Z7();
  Object.defineProperty(H$, "isSpanContextValid", {
    enumerable: !0,
    get: function () {
      return cz.isSpanContextValid;
    },
  });
  Object.defineProperty(H$, "isValidTraceId", {
    enumerable: !0,
    get: function () {
      return cz.isValidTraceId;
    },
  });
  Object.defineProperty(H$, "isValidSpanId", {
    enumerable: !0,
    get: function () {
      return cz.isValidSpanId;
    },
  });
  var pz = A7();
  Object.defineProperty(H$, "INVALID_SPANID", {
    enumerable: !0,
    get: function () {
      return pz.INVALID_SPANID;
    },
  });
  Object.defineProperty(H$, "INVALID_TRACEID", {
    enumerable: !0,
    get: function () {
      return pz.INVALID_TRACEID;
    },
  });
  Object.defineProperty(H$, "INVALID_SPAN_CONTEXT", {
    enumerable: !0,
    get: function () {
      return pz.INVALID_SPAN_CONTEXT;
    },
  });
  var pB = QB();
  Object.defineProperty(H$, "context", {
    enumerable: !0,
    get: function () {
      return pB.context;
    },
  });
  var dB = zB();
  Object.defineProperty(H$, "diag", {
    enumerable: !0,
    get: function () {
      return dB.diag;
    },
  });
  var iB = qB();
  Object.defineProperty(H$, "metrics", {
    enumerable: !0,
    get: function () {
      return iB.metrics;
    },
  });
  var nB = kB();
  Object.defineProperty(H$, "propagation", {
    enumerable: !0,
    get: function () {
      return nB.propagation;
    },
  });
  var rB = mB();
  Object.defineProperty(H$, "trace", {
    enumerable: !0,
    get: function () {
      return rB.trace;
    },
  });
  H$.default = {
    context: pB.context,
    diag: dB.diag,
    metrics: iB.metrics,
    propagation: nB.propagation,
    trace: rB.trace,
  };
});
var GJ = M((rF) => {
  Object.defineProperty(rF, "__esModule", { value: !0 });
  rF.regexpCode =
    rF.getEsmExportName =
    rF.getProperty =
    rF.safeStringify =
    rF.stringify =
    rF.strConcat =
    rF.addCodeArg =
    rF.str =
    rF._ =
    rF.nil =
    rF._Code =
    rF.Name =
    rF.IDENTIFIER =
    rF._CodeOrName =
      void 0;
  class qW {}
  rF._CodeOrName = qW;
  rF.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class U8 extends qW {
    constructor($) {
      super();
      if (!rF.IDENTIFIER.test($))
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
  rF.Name = U8;
  class d6 extends qW {
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
            if (J instanceof U8) X[J.str] = (X[J.str] || 0) + 1;
            return X;
          }, {}));
    }
  }
  rF._Code = d6;
  rF.nil = new d6("");
  function iF($, ...X) {
    let J = [$[0]],
      W = 0;
    while (W < X.length) (CU(J, X[W]), J.push($[++W]));
    return new d6(J);
  }
  rF._ = iF;
  var SU = new d6("+");
  function nF($, ...X) {
    let J = [zJ($[0])],
      W = 0;
    while (W < X.length) (J.push(SU), CU(J, X[W]), J.push(SU, zJ($[++W])));
    return (NT(J), new d6(J));
  }
  rF.str = nF;
  function CU($, X) {
    if (X instanceof d6) $.push(...X._items);
    else if (X instanceof U8) $.push(X);
    else $.push(BT(X));
  }
  rF.addCodeArg = CU;
  function NT($) {
    let X = 1;
    while (X < $.length - 1) {
      if ($[X] === SU) {
        let J = OT($[X - 1], $[X + 1]);
        if (J !== void 0) {
          $.splice(X - 1, 3, J);
          continue;
        }
        $[X++] = "+";
      }
      X++;
    }
  }
  function OT($, X) {
    if (X === '""') return $;
    if ($ === '""') return X;
    if (typeof $ == "string") {
      if (X instanceof U8 || $[$.length - 1] !== '"') return;
      if (typeof X != "string") return `${$.slice(0, -1)}${X}"`;
      if (X[0] === '"') return $.slice(0, -1) + X.slice(1);
      return;
    }
    if (typeof X == "string" && X[0] === '"' && !($ instanceof U8))
      return `"${$}${X.slice(1)}`;
    return;
  }
  function wT($, X) {
    return X.emptyStr() ? $ : $.emptyStr() ? X : nF`${$}${X}`;
  }
  rF.strConcat = wT;
  function BT($) {
    return typeof $ == "number" || typeof $ == "boolean" || $ === null
      ? $
      : zJ(Array.isArray($) ? $.join(",") : $);
  }
  function qT($) {
    return new d6(zJ($));
  }
  rF.stringify = qT;
  function zJ($) {
    return JSON.stringify($)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029");
  }
  rF.safeStringify = zJ;
  function DT($) {
    return typeof $ == "string" && rF.IDENTIFIER.test($)
      ? new d6(`.${$}`)
      : iF`[${$}]`;
  }
  rF.getProperty = DT;
  function FT($) {
    if (typeof $ == "string" && rF.IDENTIFIER.test($)) return new d6(`${$}`);
    throw Error(
      `CodeGen: invalid export name: ${$}, use explicit $id name mapping`,
    );
  }
  rF.getEsmExportName = FT;
  function jT($) {
    return new d6($.toString());
  }
  rF.regexpCode = jT;
});
var xU = M((sF) => {
  Object.defineProperty(sF, "__esModule", { value: !0 });
  sF.ValueScope =
    sF.ValueScopeName =
    sF.Scope =
    sF.varKinds =
    sF.UsedValueState =
      void 0;
  var U6 = GJ();
  class tF extends Error {
    constructor($) {
      super(`CodeGen: "code" for ${$} not defined`);
      this.value = $.value;
    }
  }
  var FW;
  (function ($) {
    (($[($.Started = 0)] = "Started"), ($[($.Completed = 1)] = "Completed"));
  })(FW || (sF.UsedValueState = FW = {}));
  sF.varKinds = {
    const: new U6.Name("const"),
    let: new U6.Name("let"),
    var: new U6.Name("var"),
  };
  class kU {
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
  sF.Scope = kU;
  class _U extends U6.Name {
    constructor($, X) {
      super(X);
      this.prefix = $;
    }
    setValue($, { property: X, itemIndex: J }) {
      ((this.value = $), (this.scopePath = U6._`.${new U6.Name(X)}[${J}]`));
    }
  }
  sF.ValueScopeName = _U;
  var kT = U6._`\n`;
  class aF extends kU {
    constructor($) {
      super($);
      ((this._values = {}),
        (this._scope = $.scope),
        (this.opts = { ...$, _n: $.lines ? kT : U6.nil }));
    }
    get() {
      return this._scope;
    }
    name($) {
      return new _U($, this._newName($));
    }
    value($, X) {
      var J;
      if (X.ref === void 0) throw Error("CodeGen: ref must be passed in value");
      let W = this.toName($),
        { prefix: Q } = W,
        Y = (J = X.key) !== null && J !== void 0 ? J : X.ref,
        z = this._values[Q];
      if (z) {
        let U = z.get(Y);
        if (U) return U;
      } else z = this._values[Q] = new Map();
      z.set(Y, W);
      let G = this._scope[Q] || (this._scope[Q] = []),
        H = G.length;
      return ((G[H] = X.ref), W.setValue(X, { property: Q, itemIndex: H }), W);
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
        (W) => {
          if (W.value === void 0)
            throw Error(`CodeGen: name "${W}" has no value`);
          return W.value.code;
        },
        X,
        J,
      );
    }
    _reduceValues($, X, J = {}, W) {
      let Q = U6.nil;
      for (let Y in $) {
        let z = $[Y];
        if (!z) continue;
        let G = (J[Y] = J[Y] || new Map());
        z.forEach((H) => {
          if (G.has(H)) return;
          G.set(H, FW.Started);
          let U = X(H);
          if (U) {
            let K = this.opts.es5 ? sF.varKinds.var : sF.varKinds.const;
            Q = U6._`${Q}${K} ${H} = ${U};${this.opts._n}`;
          } else if ((U = W === null || W === void 0 ? void 0 : W(H)))
            Q = U6._`${Q}${U}${this.opts._n}`;
          else throw new tF(H);
          G.set(H, FW.Completed);
        });
      }
      return Q;
    }
  }
  sF.ValueScope = aF;
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
  var Q$ = GJ(),
    i6 = xU(),
    H1 = GJ();
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
  var ZW = xU();
  Object.defineProperty(K6, "Scope", {
    enumerable: !0,
    get: function () {
      return ZW.Scope;
    },
  });
  Object.defineProperty(K6, "ValueScope", {
    enumerable: !0,
    get: function () {
      return ZW.ValueScope;
    },
  });
  Object.defineProperty(K6, "ValueScopeName", {
    enumerable: !0,
    get: function () {
      return ZW.ValueScopeName;
    },
  });
  Object.defineProperty(K6, "varKinds", {
    enumerable: !0,
    get: function () {
      return ZW.varKinds;
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
  class $j extends U1 {
    constructor($, X, J) {
      super();
      ((this.varKind = $), (this.name = X), (this.rhs = J));
    }
    render({ es5: $, _n: X }) {
      let J = $ ? i6.varKinds.var : this.varKind,
        W = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${J} ${this.name}${W};` + X;
    }
    optimizeNames($, X) {
      if (!$[this.name.str]) return;
      if (this.rhs) this.rhs = V8(this.rhs, $, X);
      return this;
    }
    get names() {
      return this.rhs instanceof Q$._CodeOrName ? this.rhs.names : {};
    }
  }
  class yU extends U1 {
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
      return ((this.rhs = V8(this.rhs, $, X)), this);
    }
    get names() {
      let $ = this.lhs instanceof Q$.Name ? {} : { ...this.lhs.names };
      return IW($, this.rhs);
    }
  }
  class Xj extends yU {
    constructor($, X, J, W) {
      super($, J, W);
      this.op = X;
    }
    render({ _n: $ }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + $;
    }
  }
  class Jj extends U1 {
    constructor($) {
      super();
      ((this.label = $), (this.names = {}));
    }
    render({ _n: $ }) {
      return `${this.label}:` + $;
    }
  }
  class Qj extends U1 {
    constructor($) {
      super();
      ((this.label = $), (this.names = {}));
    }
    render({ _n: $ }) {
      return `break${this.label ? ` ${this.label}` : ""};` + $;
    }
  }
  class Wj extends U1 {
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
  class Yj extends U1 {
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
      return ((this.code = V8(this.code, $, X)), this);
    }
    get names() {
      return this.code instanceof Q$._CodeOrName ? this.code.names : {};
    }
  }
  class bW extends U1 {
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
        W = J.length;
      while (W--) {
        let Q = J[W];
        if (Q.optimizeNames($, X)) continue;
        (fT($, Q.names), J.splice(W, 1));
      }
      return J.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce(($, X) => t1($, X.names), {});
    }
  }
  class K1 extends bW {
    render($) {
      return "{" + $._n + super.render($) + "}" + $._n;
    }
  }
  class zj extends bW {}
  class HJ extends K1 {}
  HJ.kind = "else";
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
        X = this.else = Array.isArray(J) ? new HJ(J) : J;
      }
      if (X) {
        if ($ === !1) return X instanceof E4 ? X : X.nodes;
        if (this.nodes.length) return this;
        return new E4(Vj($), X instanceof E4 ? [X] : X.nodes);
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
      return ((this.condition = V8(this.condition, $, X)), this);
    }
    get names() {
      let $ = super.names;
      if ((IW($, this.condition), this.else)) t1($, this.else.names);
      return $;
    }
  }
  E4.kind = "if";
  class K8 extends K1 {}
  K8.kind = "for";
  class Gj extends K8 {
    constructor($) {
      super();
      this.iteration = $;
    }
    render($) {
      return `for(${this.iteration})` + super.render($);
    }
    optimizeNames($, X) {
      if (!super.optimizeNames($, X)) return;
      return ((this.iteration = V8(this.iteration, $, X)), this);
    }
    get names() {
      return t1(super.names, this.iteration.names);
    }
  }
  class Hj extends K8 {
    constructor($, X, J, W) {
      super();
      ((this.varKind = $), (this.name = X), (this.from = J), (this.to = W));
    }
    render($) {
      let X = $.es5 ? i6.varKinds.var : this.varKind,
        { name: J, from: W, to: Q } = this;
      return `for(${X} ${J}=${W}; ${J}<${Q}; ${J}++)` + super.render($);
    }
    get names() {
      let $ = IW(super.names, this.from);
      return IW($, this.to);
    }
  }
  class TU extends K8 {
    constructor($, X, J, W) {
      super();
      ((this.loop = $),
        (this.varKind = X),
        (this.name = J),
        (this.iterable = W));
    }
    render($) {
      return (
        `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` +
        super.render($)
      );
    }
    optimizeNames($, X) {
      if (!super.optimizeNames($, X)) return;
      return ((this.iterable = V8(this.iterable, $, X)), this);
    }
    get names() {
      return t1(super.names, this.iterable.names);
    }
  }
  class jW extends K1 {
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
  jW.kind = "func";
  class LW extends bW {
    render($) {
      return "return " + super.render($);
    }
  }
  LW.kind = "return";
  class Uj extends K1 {
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
      var J, W;
      return (
        super.optimizeNames($, X),
        (J = this.catch) === null || J === void 0 || J.optimizeNames($, X),
        (W = this.finally) === null || W === void 0 || W.optimizeNames($, X),
        this
      );
    }
    get names() {
      let $ = super.names;
      if (this.catch) t1($, this.catch.names);
      if (this.finally) t1($, this.finally.names);
      return $;
    }
  }
  class MW extends K1 {
    constructor($) {
      super();
      this.error = $;
    }
    render($) {
      return `catch(${this.error})` + super.render($);
    }
  }
  MW.kind = "catch";
  class AW extends K1 {
    render($) {
      return "finally" + super.render($);
    }
  }
  AW.kind = "finally";
  class Kj {
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
        (this._nodes = [new zj()]));
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
    _def($, X, J, W) {
      let Q = this._scope.toName(X);
      if (J !== void 0 && W) this._constants[Q.str] = J;
      return (this._leafNode(new $j($, Q, J)), Q);
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
      return this._leafNode(new yU($, X, J));
    }
    add($, X) {
      return this._leafNode(new Xj($, K6.operators.ADD, X));
    }
    code($) {
      if (typeof $ == "function") $();
      else if ($ !== Q$.nil) this._leafNode(new Yj($));
      return this;
    }
    object(...$) {
      let X = ["{"];
      for (let [J, W] of $) {
        if (X.length > 1) X.push(",");
        if ((X.push(J), J !== W || this.opts.es5))
          (X.push(":"), (0, Q$.addCodeArg)(X, W));
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
      return this._elseNode(new HJ());
    }
    endIf() {
      return this._endBlockNode(E4, HJ);
    }
    _for($, X) {
      if ((this._blockNode($), X)) this.code(X).endFor();
      return this;
    }
    for($, X) {
      return this._for(new Gj($), X);
    }
    forRange(
      $,
      X,
      J,
      W,
      Q = this.opts.es5 ? i6.varKinds.var : i6.varKinds.let,
    ) {
      let Y = this._scope.toName($);
      return this._for(new Hj(Q, Y, X, J), () => W(Y));
    }
    forOf($, X, J, W = i6.varKinds.const) {
      let Q = this._scope.toName($);
      if (this.opts.es5) {
        let Y = X instanceof Q$.Name ? X : this.var("_arr", X);
        return this.forRange("_i", 0, Q$._`${Y}.length`, (z) => {
          (this.var(Q, Q$._`${Y}[${z}]`), J(Q));
        });
      }
      return this._for(new TU("of", W, Q, X), () => J(Q));
    }
    forIn($, X, J, W = this.opts.es5 ? i6.varKinds.var : i6.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf($, Q$._`Object.keys(${X})`, J);
      let Q = this._scope.toName($);
      return this._for(new TU("in", W, Q, X), () => J(Q));
    }
    endFor() {
      return this._endBlockNode(K8);
    }
    label($) {
      return this._leafNode(new Jj($));
    }
    break($) {
      return this._leafNode(new Qj($));
    }
    return($) {
      let X = new LW();
      if ((this._blockNode(X), this.code($), X.nodes.length !== 1))
        throw Error('CodeGen: "return" should have one node');
      return this._endBlockNode(LW);
    }
    try($, X, J) {
      if (!X && !J) throw Error('CodeGen: "try" without "catch" and "finally"');
      let W = new Uj();
      if ((this._blockNode(W), this.code($), X)) {
        let Q = this.name("e");
        ((this._currNode = W.catch = new MW(Q)), X(Q));
      }
      if (J) ((this._currNode = W.finally = new AW()), this.code(J));
      return this._endBlockNode(MW, AW);
    }
    throw($) {
      return this._leafNode(new Wj($));
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
    func($, X = Q$.nil, J, W) {
      if ((this._blockNode(new jW($, X, J)), W)) this.code(W).endFunc();
      return this;
    }
    endFunc() {
      return this._endBlockNode(jW);
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
  K6.CodeGen = Kj;
  function t1($, X) {
    for (let J in X) $[J] = ($[J] || 0) + (X[J] || 0);
    return $;
  }
  function IW($, X) {
    return X instanceof Q$._CodeOrName ? t1($, X.names) : $;
  }
  function V8($, X, J) {
    if ($ instanceof Q$.Name) return W($);
    if (!Q($)) return $;
    return new Q$._Code(
      $._items.reduce((Y, z) => {
        if (z instanceof Q$.Name) z = W(z);
        if (z instanceof Q$._Code) Y.push(...z._items);
        else Y.push(z);
        return Y;
      }, []),
    );
    function W(Y) {
      let z = J[Y.str];
      if (z === void 0 || X[Y.str] !== 1) return Y;
      return (delete X[Y.str], z);
    }
    function Q(Y) {
      return (
        Y instanceof Q$._Code &&
        Y._items.some(
          (z) => z instanceof Q$.Name && X[z.str] === 1 && J[z.str] !== void 0,
        )
      );
    }
  }
  function fT($, X) {
    for (let J in X) $[J] = ($[J] || 0) - (X[J] || 0);
  }
  function Vj($) {
    return typeof $ == "boolean" || typeof $ == "number" || $ === null
      ? !$
      : Q$._`!${fU($)}`;
  }
  K6.not = Vj;
  var yT = Nj(K6.operators.AND);
  function gT(...$) {
    return $.reduce(yT);
  }
  K6.and = gT;
  var hT = Nj(K6.operators.OR);
  function uT(...$) {
    return $.reduce(hT);
  }
  K6.or = uT;
  function Nj($) {
    return (X, J) =>
      X === Q$.nil ? J : J === Q$.nil ? X : Q$._`${fU(X)} ${$} ${fU(J)}`;
  }
  function fU($) {
    return $ instanceof Q$.Name ? $ : Q$._`(${$})`;
  }
});
var W$ = M((Mj) => {
  Object.defineProperty(Mj, "__esModule", { value: !0 });
  Mj.checkStrictMode =
    Mj.getErrorPath =
    Mj.Type =
    Mj.useFunc =
    Mj.setEvaluated =
    Mj.evaluatedPropsToName =
    Mj.mergeEvaluated =
    Mj.eachItem =
    Mj.unescapeJsonPointer =
    Mj.escapeJsonPointer =
    Mj.escapeFragment =
    Mj.unescapeFragment =
    Mj.schemaRefOrVal =
    Mj.schemaHasRulesButRef =
    Mj.schemaHasRules =
    Mj.checkUnknownRules =
    Mj.alwaysValidSchema =
    Mj.toHash =
      void 0;
  var B$ = a(),
    pT = GJ();
  function dT($) {
    let X = {};
    for (let J of $) X[J] = !0;
    return X;
  }
  Mj.toHash = dT;
  function iT($, X) {
    if (typeof X == "boolean") return X;
    if (Object.keys(X).length === 0) return !0;
    return (qj($, X), !Dj(X, $.self.RULES.all));
  }
  Mj.alwaysValidSchema = iT;
  function qj($, X = $.schema) {
    let { opts: J, self: W } = $;
    if (!J.strictSchema) return;
    if (typeof X === "boolean") return;
    let Q = W.RULES.keywords;
    for (let Y in X) if (!Q[Y]) Lj($, `unknown keyword: "${Y}"`);
  }
  Mj.checkUnknownRules = qj;
  function Dj($, X) {
    if (typeof $ == "boolean") return !$;
    for (let J in $) if (X[J]) return !0;
    return !1;
  }
  Mj.schemaHasRules = Dj;
  function nT($, X) {
    if (typeof $ == "boolean") return !$;
    for (let J in $) if (J !== "$ref" && X.all[J]) return !0;
    return !1;
  }
  Mj.schemaHasRulesButRef = nT;
  function rT({ topSchemaRef: $, schemaPath: X }, J, W, Q) {
    if (!Q) {
      if (typeof J == "number" || typeof J == "boolean") return J;
      if (typeof J == "string") return B$._`${J}`;
    }
    return B$._`${$}${X}${(0, B$.getProperty)(W)}`;
  }
  Mj.schemaRefOrVal = rT;
  function oT($) {
    return Fj(decodeURIComponent($));
  }
  Mj.unescapeFragment = oT;
  function tT($) {
    return encodeURIComponent(hU($));
  }
  Mj.escapeFragment = tT;
  function hU($) {
    if (typeof $ == "number") return `${$}`;
    return $.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  Mj.escapeJsonPointer = hU;
  function Fj($) {
    return $.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  Mj.unescapeJsonPointer = Fj;
  function aT($, X) {
    if (Array.isArray($)) for (let J of $) X(J);
    else X($);
  }
  Mj.eachItem = aT;
  function wj({
    mergeNames: $,
    mergeToName: X,
    mergeValues: J,
    resultToName: W,
  }) {
    return (Q, Y, z, G) => {
      let H =
        z === void 0
          ? Y
          : z instanceof B$.Name
            ? (Y instanceof B$.Name ? $(Q, Y, z) : X(Q, Y, z), z)
            : Y instanceof B$.Name
              ? (X(Q, z, Y), Y)
              : J(Y, z);
      return G === B$.Name && !(H instanceof B$.Name) ? W(Q, H) : H;
    };
  }
  Mj.mergeEvaluated = {
    props: wj({
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
          else ($.assign(J, B$._`${J} || {}`), uU($, J, X));
        }),
      mergeValues: ($, X) => ($ === !0 ? !0 : { ...$, ...X }),
      resultToName: jj,
    }),
    items: wj({
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
  function jj($, X) {
    if (X === !0) return $.var("props", !0);
    let J = $.var("props", B$._`{}`);
    if (X !== void 0) uU($, J, X);
    return J;
  }
  Mj.evaluatedPropsToName = jj;
  function uU($, X, J) {
    Object.keys(J).forEach((W) =>
      $.assign(B$._`${X}${(0, B$.getProperty)(W)}`, !0),
    );
  }
  Mj.setEvaluated = uU;
  var Bj = {};
  function sT($, X) {
    return $.scopeValue("func", {
      ref: X,
      code: Bj[X.code] || (Bj[X.code] = new pT._Code(X.code)),
    });
  }
  Mj.useFunc = sT;
  var gU;
  (function ($) {
    (($[($.Num = 0)] = "Num"), ($[($.Str = 1)] = "Str"));
  })(gU || (Mj.Type = gU = {}));
  function eT($, X, J) {
    if ($ instanceof B$.Name) {
      let W = X === gU.Num;
      return J
        ? W
          ? B$._`"[" + ${$} + "]"`
          : B$._`"['" + ${$} + "']"`
        : W
          ? B$._`"/" + ${$}`
          : B$._`"/" + ${$}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return J ? (0, B$.getProperty)($).toString() : "/" + hU($);
  }
  Mj.getErrorPath = eT;
  function Lj($, X, J = $.opts.strictSchema) {
    if (!J) return;
    if (((X = `strict mode: ${X}`), J === !0)) throw Error(X);
    $.self.logger.warn(X);
  }
  Mj.checkStrictMode = Lj;
});
var S4 = M((Ij) => {
  Object.defineProperty(Ij, "__esModule", { value: !0 });
  var o$ = a(),
    Df = {
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
  Ij.default = Df;
});
var UJ = M((Pj) => {
  Object.defineProperty(Pj, "__esModule", { value: !0 });
  Pj.extendErrors =
    Pj.resetErrorsCount =
    Pj.reportExtraError =
    Pj.reportError =
    Pj.keyword$DataError =
    Pj.keywordError =
      void 0;
  var Y$ = a(),
    PW = W$(),
    $6 = S4();
  Pj.keywordError = {
    message: ({ keyword: $ }) => Y$.str`must pass "${$}" keyword validation`,
  };
  Pj.keyword$DataError = {
    message: ({ keyword: $, schemaType: X }) =>
      X
        ? Y$.str`"${$}" keyword must be ${X} ($data)`
        : Y$.str`"${$}" keyword is invalid ($data)`,
  };
  function jf($, X = Pj.keywordError, J, W) {
    let { it: Q } = $,
      { gen: Y, compositeRule: z, allErrors: G } = Q,
      H = Rj($, X, J);
    if (W !== null && W !== void 0 ? W : z || G) Zj(Y, H);
    else bj(Q, Y$._`[${H}]`);
  }
  Pj.reportError = jf;
  function Lf($, X = Pj.keywordError, J) {
    let { it: W } = $,
      { gen: Q, compositeRule: Y, allErrors: z } = W,
      G = Rj($, X, J);
    if ((Zj(Q, G), !(Y || z))) bj(W, $6.default.vErrors);
  }
  Pj.reportExtraError = Lf;
  function Mf($, X) {
    ($.assign($6.default.errors, X),
      $.if(Y$._`${$6.default.vErrors} !== null`, () =>
        $.if(
          X,
          () => $.assign(Y$._`${$6.default.vErrors}.length`, X),
          () => $.assign($6.default.vErrors, null),
        ),
      ));
  }
  Pj.resetErrorsCount = Mf;
  function Af({
    gen: $,
    keyword: X,
    schemaValue: J,
    data: W,
    errsCount: Q,
    it: Y,
  }) {
    if (Q === void 0) throw Error("ajv implementation error");
    let z = $.name("err");
    $.forRange("i", Q, $6.default.errors, (G) => {
      if (
        ($.const(z, Y$._`${$6.default.vErrors}[${G}]`),
        $.if(Y$._`${z}.instancePath === undefined`, () =>
          $.assign(
            Y$._`${z}.instancePath`,
            (0, Y$.strConcat)($6.default.instancePath, Y.errorPath),
          ),
        ),
        $.assign(Y$._`${z}.schemaPath`, Y$.str`${Y.errSchemaPath}/${X}`),
        Y.opts.verbose)
      )
        ($.assign(Y$._`${z}.schema`, J), $.assign(Y$._`${z}.data`, W));
    });
  }
  Pj.extendErrors = Af;
  function Zj($, X) {
    let J = $.const("err", X);
    ($.if(
      Y$._`${$6.default.vErrors} === null`,
      () => $.assign($6.default.vErrors, Y$._`[${J}]`),
      Y$._`${$6.default.vErrors}.push(${J})`,
    ),
      $.code(Y$._`${$6.default.errors}++`));
  }
  function bj($, X) {
    let { gen: J, validateName: W, schemaEnv: Q } = $;
    if (Q.$async) J.throw(Y$._`new ${$.ValidationError}(${X})`);
    else (J.assign(Y$._`${W}.errors`, X), J.return(!1));
  }
  var a1 = {
    keyword: new Y$.Name("keyword"),
    schemaPath: new Y$.Name("schemaPath"),
    params: new Y$.Name("params"),
    propertyName: new Y$.Name("propertyName"),
    message: new Y$.Name("message"),
    schema: new Y$.Name("schema"),
    parentSchema: new Y$.Name("parentSchema"),
  };
  function Rj($, X, J) {
    let { createErrors: W } = $.it;
    if (W === !1) return Y$._`{}`;
    return If($, X, J);
  }
  function If($, X, J = {}) {
    let { gen: W, it: Q } = $,
      Y = [Zf(Q, J), bf($, J)];
    return (Rf($, X, Y), W.object(...Y));
  }
  function Zf({ errorPath: $ }, { instancePath: X }) {
    let J = X ? Y$.str`${$}${(0, PW.getErrorPath)(X, PW.Type.Str)}` : $;
    return [
      $6.default.instancePath,
      (0, Y$.strConcat)($6.default.instancePath, J),
    ];
  }
  function bf(
    { keyword: $, it: { errSchemaPath: X } },
    { schemaPath: J, parentSchema: W },
  ) {
    let Q = W ? X : Y$.str`${X}/${$}`;
    if (J) Q = Y$.str`${Q}${(0, PW.getErrorPath)(J, PW.Type.Str)}`;
    return [a1.schemaPath, Q];
  }
  function Rf($, { params: X, message: J }, W) {
    let { keyword: Q, data: Y, schemaValue: z, it: G } = $,
      { opts: H, propertyName: U, topSchemaRef: K, schemaPath: V } = G;
    if (
      (W.push(
        [a1.keyword, Q],
        [a1.params, typeof X == "function" ? X($) : X || Y$._`{}`],
      ),
      H.messages)
    )
      W.push([a1.message, typeof J == "function" ? J($) : J]);
    if (H.verbose)
      W.push(
        [a1.schema, z],
        [a1.parentSchema, Y$._`${K}${V}`],
        [$6.default.data, Y],
      );
    if (U) W.push([a1.propertyName, U]);
  }
});
var kj = M((Cj) => {
  Object.defineProperty(Cj, "__esModule", { value: !0 });
  Cj.boolOrEmptySchema = Cj.topBoolOrEmptySchema = void 0;
  var vf = UJ(),
    kf = a(),
    _f = S4(),
    xf = { message: "boolean schema is false" };
  function Tf($) {
    let { gen: X, schema: J, validateName: W } = $;
    if (J === !1) Sj($, !1);
    else if (typeof J == "object" && J.$async === !0) X.return(_f.default.data);
    else (X.assign(kf._`${W}.errors`, null), X.return(!0));
  }
  Cj.topBoolOrEmptySchema = Tf;
  function ff($, X) {
    let { gen: J, schema: W } = $;
    if (W === !1) (J.var(X, !1), Sj($));
    else J.var(X, !0);
  }
  Cj.boolOrEmptySchema = ff;
  function Sj($, X) {
    let { gen: J, data: W } = $,
      Q = {
        gen: J,
        keyword: "false schema",
        data: W,
        schema: !1,
        schemaCode: !1,
        schemaValue: !1,
        params: {},
        it: $,
      };
    (0, vf.reportError)(Q, xf, void 0, X);
  }
});
var lU = M((_j) => {
  Object.defineProperty(_j, "__esModule", { value: !0 });
  _j.getRules = _j.isJSONType = void 0;
  var gf = [
      "string",
      "number",
      "integer",
      "boolean",
      "null",
      "object",
      "array",
    ],
    hf = new Set(gf);
  function uf($) {
    return typeof $ == "string" && hf.has($);
  }
  _j.isJSONType = uf;
  function mf() {
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
  _j.getRules = mf;
});
var cU = M((yj) => {
  Object.defineProperty(yj, "__esModule", { value: !0 });
  yj.shouldUseRule = yj.shouldUseGroup = yj.schemaHasRulesForType = void 0;
  function cf({ schema: $, self: X }, J) {
    let W = X.RULES.types[J];
    return W && W !== !0 && Tj($, W);
  }
  yj.schemaHasRulesForType = cf;
  function Tj($, X) {
    return X.rules.some((J) => fj($, J));
  }
  yj.shouldUseGroup = Tj;
  function fj($, X) {
    var J;
    return (
      $[X.keyword] !== void 0 ||
      ((J = X.definition.implements) === null || J === void 0
        ? void 0
        : J.some((W) => $[W] !== void 0))
    );
  }
  yj.shouldUseRule = fj;
});
var KJ = M((lj) => {
  Object.defineProperty(lj, "__esModule", { value: !0 });
  lj.reportTypeError =
    lj.checkDataTypes =
    lj.checkDataType =
    lj.coerceAndCheckDataType =
    lj.getJSONTypes =
    lj.getSchemaTypes =
    lj.DataType =
      void 0;
  var nf = lU(),
    rf = cU(),
    of = UJ(),
    t = a(),
    hj = W$(),
    N8;
  (function ($) {
    (($[($.Correct = 0)] = "Correct"), ($[($.Wrong = 1)] = "Wrong"));
  })(N8 || (lj.DataType = N8 = {}));
  function tf($) {
    let X = uj($.type);
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
  lj.getSchemaTypes = tf;
  function uj($) {
    let X = Array.isArray($) ? $ : $ ? [$] : [];
    if (X.every(nf.isJSONType)) return X;
    throw Error("type must be JSONType or JSONType[]: " + X.join(","));
  }
  lj.getJSONTypes = uj;
  function af($, X) {
    let { gen: J, data: W, opts: Q } = $,
      Y = sf(X, Q.coerceTypes),
      z =
        X.length > 0 &&
        !(
          Y.length === 0 &&
          X.length === 1 &&
          (0, rf.schemaHasRulesForType)($, X[0])
        );
    if (z) {
      let G = dU(X, W, Q.strictNumbers, N8.Wrong);
      J.if(G, () => {
        if (Y.length) ef($, X, Y);
        else iU($);
      });
    }
    return z;
  }
  lj.coerceAndCheckDataType = af;
  var mj = new Set(["string", "number", "integer", "boolean", "null"]);
  function sf($, X) {
    return X
      ? $.filter((J) => mj.has(J) || (X === "array" && J === "array"))
      : [];
  }
  function ef($, X, J) {
    let { gen: W, data: Q, opts: Y } = $,
      z = W.let("dataType", t._`typeof ${Q}`),
      G = W.let("coerced", t._`undefined`);
    if (Y.coerceTypes === "array")
      W.if(
        t._`${z} == 'object' && Array.isArray(${Q}) && ${Q}.length == 1`,
        () =>
          W.assign(Q, t._`${Q}[0]`)
            .assign(z, t._`typeof ${Q}`)
            .if(dU(X, Q, Y.strictNumbers), () => W.assign(G, Q)),
      );
    W.if(t._`${G} !== undefined`);
    for (let U of J)
      if (mj.has(U) || (U === "array" && Y.coerceTypes === "array")) H(U);
    (W.else(),
      iU($),
      W.endIf(),
      W.if(t._`${G} !== undefined`, () => {
        (W.assign(Q, G), $y($, G));
      }));
    function H(U) {
      switch (U) {
        case "string":
          W.elseIf(t._`${z} == "number" || ${z} == "boolean"`)
            .assign(G, t._`"" + ${Q}`)
            .elseIf(t._`${Q} === null`)
            .assign(G, t._`""`);
          return;
        case "number":
          W.elseIf(
            t._`${z} == "boolean" || ${Q} === null
              || (${z} == "string" && ${Q} && ${Q} == +${Q})`,
          ).assign(G, t._`+${Q}`);
          return;
        case "integer":
          W.elseIf(
            t._`${z} === "boolean" || ${Q} === null
              || (${z} === "string" && ${Q} && ${Q} == +${Q} && !(${Q} % 1))`,
          ).assign(G, t._`+${Q}`);
          return;
        case "boolean":
          W.elseIf(t._`${Q} === "false" || ${Q} === 0 || ${Q} === null`)
            .assign(G, !1)
            .elseIf(t._`${Q} === "true" || ${Q} === 1`)
            .assign(G, !0);
          return;
        case "null":
          (W.elseIf(t._`${Q} === "" || ${Q} === 0 || ${Q} === false`),
            W.assign(G, null));
          return;
        case "array":
          W.elseIf(
            t._`${z} === "string" || ${z} === "number"
              || ${z} === "boolean" || ${Q} === null`,
          ).assign(G, t._`[${Q}]`);
      }
    }
  }
  function $y({ gen: $, parentData: X, parentDataProperty: J }, W) {
    $.if(t._`${X} !== undefined`, () => $.assign(t._`${X}[${J}]`, W));
  }
  function pU($, X, J, W = N8.Correct) {
    let Q = W === N8.Correct ? t.operators.EQ : t.operators.NEQ,
      Y;
    switch ($) {
      case "null":
        return t._`${X} ${Q} null`;
      case "array":
        Y = t._`Array.isArray(${X})`;
        break;
      case "object":
        Y = t._`${X} && typeof ${X} == "object" && !Array.isArray(${X})`;
        break;
      case "integer":
        Y = z(t._`!(${X} % 1) && !isNaN(${X})`);
        break;
      case "number":
        Y = z();
        break;
      default:
        return t._`typeof ${X} ${Q} ${$}`;
    }
    return W === N8.Correct ? Y : (0, t.not)(Y);
    function z(G = t.nil) {
      return (0, t.and)(
        t._`typeof ${X} == "number"`,
        G,
        J ? t._`isFinite(${X})` : t.nil,
      );
    }
  }
  lj.checkDataType = pU;
  function dU($, X, J, W) {
    if ($.length === 1) return pU($[0], X, J, W);
    let Q,
      Y = (0, hj.toHash)($);
    if (Y.array && Y.object) {
      let z = t._`typeof ${X} != "object"`;
      ((Q = Y.null ? z : t._`!${X} || ${z}`),
        delete Y.null,
        delete Y.array,
        delete Y.object);
    } else Q = t.nil;
    if (Y.number) delete Y.integer;
    for (let z in Y) Q = (0, t.and)(Q, pU(z, X, J, W));
    return Q;
  }
  lj.checkDataTypes = dU;
  var Xy = {
    message: ({ schema: $ }) => `must be ${$}`,
    params: ({ schema: $, schemaValue: X }) =>
      typeof $ == "string" ? t._`{type: ${$}}` : t._`{type: ${X}}`,
  };
  function iU($) {
    let X = Jy($);
    (0, of.reportError)(X, Xy);
  }
  lj.reportTypeError = iU;
  function Jy($) {
    let { gen: X, data: J, schema: W } = $,
      Q = (0, hj.schemaRefOrVal)($, W, "type");
    return {
      gen: X,
      keyword: "type",
      data: J,
      schema: W.type,
      schemaCode: Q,
      schemaValue: Q,
      parentSchema: W,
      params: {},
      it: $,
    };
  }
});
var nj = M((dj) => {
  Object.defineProperty(dj, "__esModule", { value: !0 });
  dj.assignDefaults = void 0;
  var O8 = a(),
    Uy = W$();
  function Ky($, X) {
    let { properties: J, items: W } = $.schema;
    if (X === "object" && J) for (let Q in J) pj($, Q, J[Q].default);
    else if (X === "array" && Array.isArray(W))
      W.forEach((Q, Y) => pj($, Y, Q.default));
  }
  dj.assignDefaults = Ky;
  function pj($, X, J) {
    let { gen: W, compositeRule: Q, data: Y, opts: z } = $;
    if (J === void 0) return;
    let G = O8._`${Y}${(0, O8.getProperty)(X)}`;
    if (Q) {
      (0, Uy.checkStrictMode)($, `default is ignored for: ${G}`);
      return;
    }
    let H = O8._`${G} === undefined`;
    if (z.useDefaults === "empty")
      H = O8._`${H} || ${G} === null || ${G} === ""`;
    W.if(H, O8._`${G} = ${(0, O8.stringify)(J)}`);
  }
});
var v6 = M((tj) => {
  Object.defineProperty(tj, "__esModule", { value: !0 });
  tj.validateUnion =
    tj.validateArray =
    tj.usePattern =
    tj.callValidateCode =
    tj.schemaProperties =
    tj.allSchemaProperties =
    tj.noPropertyInData =
    tj.propertyInData =
    tj.isOwnProperty =
    tj.hasPropFunc =
    tj.reportMissingProp =
    tj.checkMissingProp =
    tj.checkReportMissingProp =
      void 0;
  var M$ = a(),
    nU = W$(),
    V1 = S4(),
    Vy = W$();
  function Ny($, X) {
    let { gen: J, data: W, it: Q } = $;
    J.if(oU(J, W, X, Q.opts.ownProperties), () => {
      ($.setParams({ missingProperty: M$._`${X}` }, !0), $.error());
    });
  }
  tj.checkReportMissingProp = Ny;
  function Oy({ gen: $, data: X, it: { opts: J } }, W, Q) {
    return (0, M$.or)(
      ...W.map((Y) =>
        (0, M$.and)(oU($, X, Y, J.ownProperties), M$._`${Q} = ${Y}`),
      ),
    );
  }
  tj.checkMissingProp = Oy;
  function wy($, X) {
    ($.setParams({ missingProperty: X }, !0), $.error());
  }
  tj.reportMissingProp = wy;
  function rj($) {
    return $.scopeValue("func", {
      ref: Object.prototype.hasOwnProperty,
      code: M$._`Object.prototype.hasOwnProperty`,
    });
  }
  tj.hasPropFunc = rj;
  function rU($, X, J) {
    return M$._`${rj($)}.call(${X}, ${J})`;
  }
  tj.isOwnProperty = rU;
  function By($, X, J, W) {
    let Q = M$._`${X}${(0, M$.getProperty)(J)} !== undefined`;
    return W ? M$._`${Q} && ${rU($, X, J)}` : Q;
  }
  tj.propertyInData = By;
  function oU($, X, J, W) {
    let Q = M$._`${X}${(0, M$.getProperty)(J)} === undefined`;
    return W ? (0, M$.or)(Q, (0, M$.not)(rU($, X, J))) : Q;
  }
  tj.noPropertyInData = oU;
  function oj($) {
    return $ ? Object.keys($).filter((X) => X !== "__proto__") : [];
  }
  tj.allSchemaProperties = oj;
  function qy($, X) {
    return oj(X).filter((J) => !(0, nU.alwaysValidSchema)($, X[J]));
  }
  tj.schemaProperties = qy;
  function Dy(
    {
      schemaCode: $,
      data: X,
      it: { gen: J, topSchemaRef: W, schemaPath: Q, errorPath: Y },
      it: z,
    },
    G,
    H,
    U,
  ) {
    let K = U ? M$._`${$}, ${X}, ${W}${Q}` : X,
      V = [
        [
          V1.default.instancePath,
          (0, M$.strConcat)(V1.default.instancePath, Y),
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
  tj.callValidateCode = Dy;
  var Fy = M$._`new RegExp`;
  function jy({ gen: $, it: { opts: X } }, J) {
    let W = X.unicodeRegExp ? "u" : "",
      { regExp: Q } = X.code,
      Y = Q(J, W);
    return $.scopeValue("pattern", {
      key: Y.toString(),
      ref: Y,
      code: M$._`${Q.code === "new RegExp" ? Fy : (0, Vy.useFunc)($, Q)}(${J}, ${W})`,
    });
  }
  tj.usePattern = jy;
  function Ly($) {
    let { gen: X, data: J, keyword: W, it: Q } = $,
      Y = X.name("valid");
    if (Q.allErrors) {
      let G = X.let("valid", !0);
      return (z(() => X.assign(G, !1)), G);
    }
    return (X.var(Y, !0), z(() => X.break()), Y);
    function z(G) {
      let H = X.const("len", M$._`${J}.length`);
      X.forRange("i", 0, H, (U) => {
        ($.subschema({ keyword: W, dataProp: U, dataPropType: nU.Type.Num }, Y),
          X.if((0, M$.not)(Y), G));
      });
    }
  }
  tj.validateArray = Ly;
  function My($) {
    let { gen: X, schema: J, keyword: W, it: Q } = $;
    if (!Array.isArray(J)) throw Error("ajv implementation error");
    if (J.some((H) => (0, nU.alwaysValidSchema)(Q, H)) && !Q.opts.unevaluated)
      return;
    let z = X.let("valid", !1),
      G = X.name("_valid");
    (X.block(() =>
      J.forEach((H, U) => {
        let K = $.subschema(
          { keyword: W, schemaProp: U, compositeRule: !0 },
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
  tj.validateUnion = My;
});
var JL = M(($L) => {
  Object.defineProperty($L, "__esModule", { value: !0 });
  $L.validateKeywordUsage =
    $L.validSchemaType =
    $L.funcKeywordCode =
    $L.macroKeywordCode =
      void 0;
  var X6 = a(),
    s1 = S4(),
    xy = v6(),
    Ty = UJ();
  function fy($, X) {
    let { gen: J, keyword: W, schema: Q, parentSchema: Y, it: z } = $,
      G = X.macro.call(z.self, Q, Y, z),
      H = ej(J, W, G);
    if (z.opts.validateSchema !== !1) z.self.validateSchema(G, !0);
    let U = J.name("valid");
    ($.subschema(
      {
        schema: G,
        schemaPath: X6.nil,
        errSchemaPath: `${z.errSchemaPath}/${W}`,
        topSchemaRef: H,
        compositeRule: !0,
      },
      U,
    ),
      $.pass(U, () => $.error(!0)));
  }
  $L.macroKeywordCode = fy;
  function yy($, X) {
    var J;
    let { gen: W, keyword: Q, schema: Y, parentSchema: z, $data: G, it: H } = $;
    hy(H, X);
    let U = !G && X.compile ? X.compile.call(H.self, Y, z, H) : X.validate,
      K = ej(W, Q, U),
      V = W.let("valid");
    ($.block$data(V, N), $.ok((J = X.valid) !== null && J !== void 0 ? J : V));
    function N() {
      if (X.errors === !1) {
        if ((B(), X.modifying)) sj($);
        F(() => $.error());
      } else {
        let j = X.async ? O() : w();
        if (X.modifying) sj($);
        F(() => gy($, j));
      }
    }
    function O() {
      let j = W.let("ruleErrs", null);
      return (
        W.try(
          () => B(X6._`await `),
          (I) =>
            W.assign(V, !1).if(
              X6._`${I} instanceof ${H.ValidationError}`,
              () => W.assign(j, X6._`${I}.errors`),
              () => W.throw(I),
            ),
        ),
        j
      );
    }
    function w() {
      let j = X6._`${K}.errors`;
      return (W.assign(j, null), B(X6.nil), j);
    }
    function B(j = X.async ? X6._`await ` : X6.nil) {
      let I = H.opts.passContext ? s1.default.this : s1.default.self,
        Z = !(("compile" in X && !G) || X.schema === !1);
      W.assign(
        V,
        X6._`${j}${(0, xy.callValidateCode)($, K, I, Z)}`,
        X.modifying,
      );
    }
    function F(j) {
      var I;
      W.if((0, X6.not)((I = X.valid) !== null && I !== void 0 ? I : V), j);
    }
  }
  $L.funcKeywordCode = yy;
  function sj($) {
    let { gen: X, data: J, it: W } = $;
    X.if(W.parentData, () =>
      X.assign(J, X6._`${W.parentData}[${W.parentDataProperty}]`),
    );
  }
  function gy($, X) {
    let { gen: J } = $;
    J.if(
      X6._`Array.isArray(${X})`,
      () => {
        (J.assign(
          s1.default.vErrors,
          X6._`${s1.default.vErrors} === null ? ${X} : ${s1.default.vErrors}.concat(${X})`,
        ).assign(s1.default.errors, X6._`${s1.default.vErrors}.length`),
          (0, Ty.extendErrors)($));
      },
      () => $.error(),
    );
  }
  function hy({ schemaEnv: $ }, X) {
    if (X.async && !$.$async) throw Error("async keyword in sync schema");
  }
  function ej($, X, J) {
    if (J === void 0) throw Error(`keyword "${X}" failed to compile`);
    return $.scopeValue(
      "keyword",
      typeof J == "function"
        ? { ref: J }
        : { ref: J, code: (0, X6.stringify)(J) },
    );
  }
  function uy($, X, J = !1) {
    return (
      !X.length ||
      X.some((W) =>
        W === "array"
          ? Array.isArray($)
          : W === "object"
            ? $ && typeof $ == "object" && !Array.isArray($)
            : typeof $ == W || (J && typeof $ > "u"),
      )
    );
  }
  $L.validSchemaType = uy;
  function my({ schema: $, opts: X, self: J, errSchemaPath: W }, Q, Y) {
    if (Array.isArray(Q.keyword) ? !Q.keyword.includes(Y) : Q.keyword !== Y)
      throw Error("ajv implementation error");
    let z = Q.dependencies;
    if (
      z === null || z === void 0
        ? void 0
        : z.some((G) => !Object.prototype.hasOwnProperty.call($, G))
    )
      throw Error(
        `parent schema must have dependencies of ${Y}: ${z.join(",")}`,
      );
    if (Q.validateSchema) {
      if (!Q.validateSchema($[Y])) {
        let H =
          `keyword "${Y}" value is invalid at path "${W}": ` +
          J.errorsText(Q.validateSchema.errors);
        if (X.validateSchema === "log") J.logger.error(H);
        else throw Error(H);
      }
    }
  }
  $L.validateKeywordUsage = my;
});
var zL = M((WL) => {
  Object.defineProperty(WL, "__esModule", { value: !0 });
  WL.extendSubschemaMode = WL.extendSubschemaData = WL.getSubschema = void 0;
  var Q4 = a(),
    QL = W$();
  function dy(
    $,
    {
      keyword: X,
      schemaProp: J,
      schema: W,
      schemaPath: Q,
      errSchemaPath: Y,
      topSchemaRef: z,
    },
  ) {
    if (X !== void 0 && W !== void 0)
      throw Error('both "keyword" and "schema" passed, only one allowed');
    if (X !== void 0) {
      let G = $.schema[X];
      return J === void 0
        ? {
            schema: G,
            schemaPath: Q4._`${$.schemaPath}${(0, Q4.getProperty)(X)}`,
            errSchemaPath: `${$.errSchemaPath}/${X}`,
          }
        : {
            schema: G[J],
            schemaPath: Q4._`${$.schemaPath}${(0, Q4.getProperty)(X)}${(0, Q4.getProperty)(J)}`,
            errSchemaPath: `${$.errSchemaPath}/${X}/${(0, QL.escapeFragment)(J)}`,
          };
    }
    if (W !== void 0) {
      if (Q === void 0 || Y === void 0 || z === void 0)
        throw Error(
          '"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"',
        );
      return { schema: W, schemaPath: Q, topSchemaRef: z, errSchemaPath: Y };
    }
    throw Error('either "keyword" or "schema" must be passed');
  }
  WL.getSubschema = dy;
  function iy(
    $,
    X,
    { dataProp: J, dataPropType: W, data: Q, dataTypes: Y, propertyName: z },
  ) {
    if (Q !== void 0 && J !== void 0)
      throw Error('both "data" and "dataProp" passed, only one allowed');
    let { gen: G } = X;
    if (J !== void 0) {
      let { errorPath: U, dataPathArr: K, opts: V } = X,
        N = G.let("data", Q4._`${X.data}${(0, Q4.getProperty)(J)}`, !0);
      (H(N),
        ($.errorPath = Q4.str`${U}${(0, QL.getErrorPath)(J, W, V.jsPropertySyntax)}`),
        ($.parentDataProperty = Q4._`${J}`),
        ($.dataPathArr = [...K, $.parentDataProperty]));
    }
    if (Q !== void 0) {
      let U = Q instanceof Q4.Name ? Q : G.let("data", Q, !0);
      if ((H(U), z !== void 0)) $.propertyName = z;
    }
    if (Y) $.dataTypes = Y;
    function H(U) {
      (($.data = U),
        ($.dataLevel = X.dataLevel + 1),
        ($.dataTypes = []),
        (X.definedProperties = new Set()),
        ($.parentData = X.data),
        ($.dataNames = [...X.dataNames, U]));
    }
  }
  WL.extendSubschemaData = iy;
  function ny(
    $,
    {
      jtdDiscriminator: X,
      jtdMetadata: J,
      compositeRule: W,
      createErrors: Q,
      allErrors: Y,
    },
  ) {
    if (W !== void 0) $.compositeRule = W;
    if (Q !== void 0) $.createErrors = Q;
    if (Y !== void 0) $.allErrors = Y;
    (($.jtdDiscriminator = X), ($.jtdMetadata = J));
  }
  WL.extendSubschemaMode = ny;
});
var tU = M((_X$, GL) => {
  GL.exports = function $(X, J) {
    if (X === J) return !0;
    if (X && J && typeof X == "object" && typeof J == "object") {
      if (X.constructor !== J.constructor) return !1;
      var W, Q, Y;
      if (Array.isArray(X)) {
        if (((W = X.length), W != J.length)) return !1;
        for (Q = W; Q-- !== 0; ) if (!$(X[Q], J[Q])) return !1;
        return !0;
      }
      if (X.constructor === RegExp)
        return X.source === J.source && X.flags === J.flags;
      if (X.valueOf !== Object.prototype.valueOf)
        return X.valueOf() === J.valueOf();
      if (X.toString !== Object.prototype.toString)
        return X.toString() === J.toString();
      if (((Y = Object.keys(X)), (W = Y.length), W !== Object.keys(J).length))
        return !1;
      for (Q = W; Q-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(J, Y[Q])) return !1;
      for (Q = W; Q-- !== 0; ) {
        var z = Y[Q];
        if (!$(X[z], J[z])) return !1;
      }
      return !0;
    }
    return X !== X && J !== J;
  };
});
var UL = M((xX$, HL) => {
  var N1 = (HL.exports = function ($, X, J) {
    if (typeof X == "function") ((J = X), (X = {}));
    J = X.cb || J;
    var W = typeof J == "function" ? J : J.pre || function () {},
      Q = J.post || function () {};
    EW(X, W, Q, $, "", $);
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
  function EW($, X, J, W, Q, Y, z, G, H, U) {
    if (W && typeof W == "object" && !Array.isArray(W)) {
      X(W, Q, Y, z, G, H, U);
      for (var K in W) {
        var V = W[K];
        if (Array.isArray(V)) {
          if (K in N1.arrayKeywords)
            for (var N = 0; N < V.length; N++)
              EW($, X, J, V[N], Q + "/" + K + "/" + N, Y, Q, K, W, N);
        } else if (K in N1.propsKeywords) {
          if (V && typeof V == "object")
            for (var O in V)
              EW($, X, J, V[O], Q + "/" + K + "/" + ty(O), Y, Q, K, W, O);
        } else if (K in N1.keywords || ($.allKeys && !(K in N1.skipKeywords)))
          EW($, X, J, V, Q + "/" + K, Y, Q, K, W);
      }
      J(W, Q, Y, z, G, H, U);
    }
  }
  function ty($) {
    return $.replace(/~/g, "~0").replace(/\//g, "~1");
  }
});
var VJ = M((OL) => {
  Object.defineProperty(OL, "__esModule", { value: !0 });
  OL.getSchemaRefs =
    OL.resolveUrl =
    OL.normalizeId =
    OL._getFullPath =
    OL.getFullPath =
    OL.inlineRef =
      void 0;
  var ay = W$(),
    sy = tU(),
    ey = UL(),
    $g = new Set([
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
  function Xg($, X = !0) {
    if (typeof $ == "boolean") return !0;
    if (X === !0) return !aU($);
    if (!X) return !1;
    return KL($) <= X;
  }
  OL.inlineRef = Xg;
  var Jg = new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor",
  ]);
  function aU($) {
    for (let X in $) {
      if (Jg.has(X)) return !0;
      let J = $[X];
      if (Array.isArray(J) && J.some(aU)) return !0;
      if (typeof J == "object" && aU(J)) return !0;
    }
    return !1;
  }
  function KL($) {
    let X = 0;
    for (let J in $) {
      if (J === "$ref") return 1 / 0;
      if ((X++, $g.has(J))) continue;
      if (typeof $[J] == "object") (0, ay.eachItem)($[J], (W) => (X += KL(W)));
      if (X === 1 / 0) return 1 / 0;
    }
    return X;
  }
  function VL($, X = "", J) {
    if (J !== !1) X = w8(X);
    let W = $.parse(X);
    return NL($, W);
  }
  OL.getFullPath = VL;
  function NL($, X) {
    return $.serialize(X).split("#")[0] + "#";
  }
  OL._getFullPath = NL;
  var Qg = /#\/?$/;
  function w8($) {
    return $ ? $.replace(Qg, "") : "";
  }
  OL.normalizeId = w8;
  function Wg($, X, J) {
    return ((J = w8(J)), $.resolve(X, J));
  }
  OL.resolveUrl = Wg;
  var Yg = /^[a-z_][-a-z0-9._]*$/i;
  function zg($, X) {
    if (typeof $ == "boolean") return {};
    let { schemaId: J, uriResolver: W } = this.opts,
      Q = w8($[J] || X),
      Y = { "": Q },
      z = VL(W, Q, !1),
      G = {},
      H = new Set();
    return (
      ey($, { allKeys: !0 }, (V, N, O, w) => {
        if (w === void 0) return;
        let B = z + N,
          F = Y[w];
        if (typeof V[J] == "string") F = j.call(this, V[J]);
        (I.call(this, V.$anchor), I.call(this, V.$dynamicAnchor), (Y[N] = F));
        function j(Z) {
          let _ = this.opts.uriResolver.resolve;
          if (((Z = w8(F ? _(F, Z) : Z)), H.has(Z))) throw K(Z);
          H.add(Z);
          let T = this.refs[Z];
          if (typeof T == "string") T = this.refs[T];
          if (typeof T == "object") U(V, T.schema, Z);
          else if (Z !== w8(B))
            if (Z[0] === "#") (U(V, G[Z], Z), (G[Z] = V));
            else this.refs[Z] = B;
          return Z;
        }
        function I(Z) {
          if (typeof Z == "string") {
            if (!Yg.test(Z)) throw Error(`invalid anchor "${Z}"`);
            j.call(this, `#${Z}`);
          }
        }
      }),
      G
    );
    function U(V, N, O) {
      if (N !== void 0 && !sy(V, N)) throw K(O);
    }
    function K(V) {
      return Error(`reference "${V}" resolves to more than one schema`);
    }
  }
  OL.getSchemaRefs = zg;
});
var wJ = M((SL) => {
  Object.defineProperty(SL, "__esModule", { value: !0 });
  SL.getData = SL.KeywordCxt = SL.validateFunctionCode = void 0;
  var jL = kj(),
    BL = KJ(),
    eU = cU(),
    SW = KJ(),
    Ng = nj(),
    OJ = JL(),
    sU = zL(),
    u = a(),
    n = S4(),
    Og = VJ(),
    C4 = W$(),
    NJ = UJ();
  function wg($) {
    if (AL($)) {
      if ((IL($), ML($))) {
        Dg($);
        return;
      }
    }
    LL($, () => (0, jL.topBoolOrEmptySchema)($));
  }
  SL.validateFunctionCode = wg;
  function LL(
    { gen: $, validateName: X, schema: J, schemaEnv: W, opts: Q },
    Y,
  ) {
    if (Q.code.es5)
      $.func(X, u._`${n.default.data}, ${n.default.valCxt}`, W.$async, () => {
        ($.code(u._`"use strict"; ${qL(J, Q)}`), qg($, Q), $.code(Y));
      });
    else
      $.func(X, u._`${n.default.data}, ${Bg(Q)}`, W.$async, () =>
        $.code(qL(J, Q)).code(Y),
      );
  }
  function Bg($) {
    return u._`{${n.default.instancePath}="", ${n.default.parentData}, ${n.default.parentDataProperty}, ${n.default.rootData}=${n.default.data}${$.dynamicRef ? u._`, ${n.default.dynamicAnchors}={}` : u.nil}}={}`;
  }
  function qg($, X) {
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
  function Dg($) {
    let { schema: X, opts: J, gen: W } = $;
    LL($, () => {
      if (J.$comment && X.$comment) bL($);
      if (
        (Ag($),
        W.let(n.default.vErrors, null),
        W.let(n.default.errors, 0),
        J.unevaluated)
      )
        Fg($);
      (ZL($), bg($));
    });
    return;
  }
  function Fg($) {
    let { gen: X, validateName: J } = $;
    (($.evaluated = X.const("evaluated", u._`${J}.evaluated`)),
      X.if(u._`${$.evaluated}.dynamicProps`, () =>
        X.assign(u._`${$.evaluated}.props`, u._`undefined`),
      ),
      X.if(u._`${$.evaluated}.dynamicItems`, () =>
        X.assign(u._`${$.evaluated}.items`, u._`undefined`),
      ));
  }
  function qL($, X) {
    let J = typeof $ == "object" && $[X.schemaId];
    return J && (X.code.source || X.code.process)
      ? u._`/*# sourceURL=${J} */`
      : u.nil;
  }
  function jg($, X) {
    if (AL($)) {
      if ((IL($), ML($))) {
        Lg($, X);
        return;
      }
    }
    (0, jL.boolOrEmptySchema)($, X);
  }
  function ML({ schema: $, self: X }) {
    if (typeof $ == "boolean") return !$;
    for (let J in $) if (X.RULES.all[J]) return !0;
    return !1;
  }
  function AL($) {
    return typeof $.schema != "boolean";
  }
  function Lg($, X) {
    let { schema: J, gen: W, opts: Q } = $;
    if (Q.$comment && J.$comment) bL($);
    (Ig($), Zg($));
    let Y = W.const("_errs", n.default.errors);
    (ZL($, Y), W.var(X, u._`${Y} === ${n.default.errors}`));
  }
  function IL($) {
    ((0, C4.checkUnknownRules)($), Mg($));
  }
  function ZL($, X) {
    if ($.opts.jtd) return DL($, [], !1, X);
    let J = (0, BL.getSchemaTypes)($.schema),
      W = (0, BL.coerceAndCheckDataType)($, J);
    DL($, J, !W, X);
  }
  function Mg($) {
    let { schema: X, errSchemaPath: J, opts: W, self: Q } = $;
    if (
      X.$ref &&
      W.ignoreKeywordsWithRef &&
      (0, C4.schemaHasRulesButRef)(X, Q.RULES)
    )
      Q.logger.warn(`$ref: keywords ignored in schema at path "${J}"`);
  }
  function Ag($) {
    let { schema: X, opts: J } = $;
    if (X.default !== void 0 && J.useDefaults && J.strictSchema)
      (0, C4.checkStrictMode)($, "default is ignored in the schema root");
  }
  function Ig($) {
    let X = $.schema[$.opts.schemaId];
    if (X) $.baseId = (0, Og.resolveUrl)($.opts.uriResolver, $.baseId, X);
  }
  function Zg($) {
    if ($.schema.$async && !$.schemaEnv.$async)
      throw Error("async schema in sync schema");
  }
  function bL({ gen: $, schemaEnv: X, schema: J, errSchemaPath: W, opts: Q }) {
    let Y = J.$comment;
    if (Q.$comment === !0) $.code(u._`${n.default.self}.logger.log(${Y})`);
    else if (typeof Q.$comment == "function") {
      let z = u.str`${W}/$comment`,
        G = $.scopeValue("root", { ref: X.root });
      $.code(u._`${n.default.self}.opts.$comment(${Y}, ${z}, ${G}.schema)`);
    }
  }
  function bg($) {
    let {
      gen: X,
      schemaEnv: J,
      validateName: W,
      ValidationError: Q,
      opts: Y,
    } = $;
    if (J.$async)
      X.if(
        u._`${n.default.errors} === 0`,
        () => X.return(n.default.data),
        () => X.throw(u._`new ${Q}(${n.default.vErrors})`),
      );
    else {
      if ((X.assign(u._`${W}.errors`, n.default.vErrors), Y.unevaluated)) Rg($);
      X.return(u._`${n.default.errors} === 0`);
    }
  }
  function Rg({ gen: $, evaluated: X, props: J, items: W }) {
    if (J instanceof u.Name) $.assign(u._`${X}.props`, J);
    if (W instanceof u.Name) $.assign(u._`${X}.items`, W);
  }
  function DL($, X, J, W) {
    let { gen: Q, schema: Y, data: z, allErrors: G, opts: H, self: U } = $,
      { RULES: K } = U;
    if (
      Y.$ref &&
      (H.ignoreKeywordsWithRef || !(0, C4.schemaHasRulesButRef)(Y, K))
    ) {
      Q.block(() => PL($, "$ref", K.all.$ref.definition));
      return;
    }
    if (!H.jtd) Pg($, X);
    Q.block(() => {
      for (let N of K.rules) V(N);
      V(K.post);
    });
    function V(N) {
      if (!(0, eU.shouldUseGroup)(Y, N)) return;
      if (N.type) {
        if (
          (Q.if((0, SW.checkDataType)(N.type, z, H.strictNumbers)),
          FL($, N),
          X.length === 1 && X[0] === N.type && J)
        )
          (Q.else(), (0, SW.reportTypeError)($));
        Q.endIf();
      } else FL($, N);
      if (!G) Q.if(u._`${n.default.errors} === ${W || 0}`);
    }
  }
  function FL($, X) {
    let {
      gen: J,
      schema: W,
      opts: { useDefaults: Q },
    } = $;
    if (Q) (0, Ng.assignDefaults)($, X.type);
    J.block(() => {
      for (let Y of X.rules)
        if ((0, eU.shouldUseRule)(W, Y)) PL($, Y.keyword, Y.definition, X.type);
    });
  }
  function Pg($, X) {
    if ($.schemaEnv.meta || !$.opts.strictTypes) return;
    if ((Eg($, X), !$.opts.allowUnionTypes)) Sg($, X);
    Cg($, $.dataTypes);
  }
  function Eg($, X) {
    if (!X.length) return;
    if (!$.dataTypes.length) {
      $.dataTypes = X;
      return;
    }
    (X.forEach((J) => {
      if (!RL($.dataTypes, J))
        $K($, `type "${J}" not allowed by context "${$.dataTypes.join(",")}"`);
    }),
      kg($, X));
  }
  function Sg($, X) {
    if (X.length > 1 && !(X.length === 2 && X.includes("null")))
      $K($, "use allowUnionTypes to allow union type keyword");
  }
  function Cg($, X) {
    let J = $.self.RULES.all;
    for (let W in J) {
      let Q = J[W];
      if (typeof Q == "object" && (0, eU.shouldUseRule)($.schema, Q)) {
        let { type: Y } = Q.definition;
        if (Y.length && !Y.some((z) => vg(X, z)))
          $K($, `missing type "${Y.join(",")}" for keyword "${W}"`);
      }
    }
  }
  function vg($, X) {
    return $.includes(X) || (X === "number" && $.includes("integer"));
  }
  function RL($, X) {
    return $.includes(X) || (X === "integer" && $.includes("number"));
  }
  function kg($, X) {
    let J = [];
    for (let W of $.dataTypes)
      if (RL(X, W)) J.push(W);
      else if (X.includes("integer") && W === "number") J.push("integer");
    $.dataTypes = J;
  }
  function $K($, X) {
    let J = $.schemaEnv.baseId + $.errSchemaPath;
    ((X += ` at "${J}" (strictTypes)`),
      (0, C4.checkStrictMode)($, X, $.opts.strictTypes));
  }
  class XK {
    constructor($, X, J) {
      if (
        ((0, OJ.validateKeywordUsage)($, X, J),
        (this.gen = $.gen),
        (this.allErrors = $.allErrors),
        (this.keyword = J),
        (this.data = $.data),
        (this.schema = $.schema[J]),
        (this.$data =
          X.$data && $.opts.$data && this.schema && this.schema.$data),
        (this.schemaValue = (0, C4.schemaRefOrVal)(
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
        this.schemaCode = $.gen.const("vSchema", EL(this.$data, $));
      else if (
        ((this.schemaCode = this.schemaValue),
        !(0, OJ.validSchemaType)(this.schema, X.schemaType, X.allowUndefined))
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
      ($ ? NJ.reportExtraError : NJ.reportError)(this, this.def.error, X);
    }
    $dataError() {
      (0, NJ.reportError)(this, this.def.$dataError || NJ.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw Error('add "trackErrors" to keyword definition');
      (0, NJ.resetErrorsCount)(this.gen, this.errsCount);
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
      let { gen: J, schemaCode: W, schemaType: Q, def: Y } = this;
      if ((J.if((0, u.or)(u._`${W} === undefined`, X)), $ !== u.nil))
        J.assign($, !0);
      if (Q.length || Y.validateSchema) {
        if ((J.elseIf(this.invalid$data()), this.$dataError(), $ !== u.nil))
          J.assign($, !1);
      }
      J.else();
    }
    invalid$data() {
      let { gen: $, schemaCode: X, schemaType: J, def: W, it: Q } = this;
      return (0, u.or)(Y(), z());
      function Y() {
        if (J.length) {
          if (!(X instanceof u.Name)) throw Error("ajv implementation error");
          let G = Array.isArray(J) ? J : [J];
          return u._`${(0, SW.checkDataTypes)(G, X, Q.opts.strictNumbers, SW.DataType.Wrong)}`;
        }
        return u.nil;
      }
      function z() {
        if (W.validateSchema) {
          let G = $.scopeValue("validate$data", { ref: W.validateSchema });
          return u._`!${G}(${X})`;
        }
        return u.nil;
      }
    }
    subschema($, X) {
      let J = (0, sU.getSubschema)(this.it, $);
      ((0, sU.extendSubschemaData)(J, this.it, $),
        (0, sU.extendSubschemaMode)(J, $));
      let W = { ...this.it, ...J, items: void 0, props: void 0 };
      return (jg(W, X), W);
    }
    mergeEvaluated($, X) {
      let { it: J, gen: W } = this;
      if (!J.opts.unevaluated) return;
      if (J.props !== !0 && $.props !== void 0)
        J.props = C4.mergeEvaluated.props(W, $.props, J.props, X);
      if (J.items !== !0 && $.items !== void 0)
        J.items = C4.mergeEvaluated.items(W, $.items, J.items, X);
    }
    mergeValidEvaluated($, X) {
      let { it: J, gen: W } = this;
      if (J.opts.unevaluated && (J.props !== !0 || J.items !== !0))
        return (W.if(X, () => this.mergeEvaluated($, u.Name)), !0);
    }
  }
  SL.KeywordCxt = XK;
  function PL($, X, J, W) {
    let Q = new XK($, J, X);
    if ("code" in J) J.code(Q, W);
    else if (Q.$data && J.validate) (0, OJ.funcKeywordCode)(Q, J);
    else if ("macro" in J) (0, OJ.macroKeywordCode)(Q, J);
    else if (J.compile || J.validate) (0, OJ.funcKeywordCode)(Q, J);
  }
  var _g = /^\/(?:[^~]|~0|~1)*$/,
    xg = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function EL($, { dataLevel: X, dataNames: J, dataPathArr: W }) {
    let Q, Y;
    if ($ === "") return n.default.rootData;
    if ($[0] === "/") {
      if (!_g.test($)) throw Error(`Invalid JSON-pointer: ${$}`);
      ((Q = $), (Y = n.default.rootData));
    } else {
      let U = xg.exec($);
      if (!U) throw Error(`Invalid JSON-pointer: ${$}`);
      let K = +U[1];
      if (((Q = U[2]), Q === "#")) {
        if (K >= X) throw Error(H("property/index", K));
        return W[X - K];
      }
      if (K > X) throw Error(H("data", K));
      if (((Y = J[X - K]), !Q)) return Y;
    }
    let z = Y,
      G = Q.split("/");
    for (let U of G)
      if (U)
        ((Y = u._`${Y}${(0, u.getProperty)((0, C4.unescapeJsonPointer)(U))}`),
          (z = u._`${z} && ${Y}`));
    return z;
    function H(U, K) {
      return `Cannot access ${U} ${K} levels up, current level is ${X}`;
    }
  }
  SL.getData = EL;
});
var CW = M((kL) => {
  Object.defineProperty(kL, "__esModule", { value: !0 });
  class vL extends Error {
    constructor($) {
      super("validation failed");
      ((this.errors = $), (this.ajv = this.validation = !0));
    }
  }
  kL.default = vL;
});
var BJ = M((xL) => {
  Object.defineProperty(xL, "__esModule", { value: !0 });
  var JK = VJ();
  class _L extends Error {
    constructor($, X, J, W) {
      super(W || `can't resolve reference ${J} from id ${X}`);
      ((this.missingRef = (0, JK.resolveUrl)($, X, J)),
        (this.missingSchema = (0, JK.normalizeId)(
          (0, JK.getFullPath)($, this.missingRef),
        )));
    }
  }
  xL.default = _L;
});
var kW = M((yL) => {
  Object.defineProperty(yL, "__esModule", { value: !0 });
  yL.resolveSchema =
    yL.getCompilingSchema =
    yL.resolveRef =
    yL.compileSchema =
    yL.SchemaEnv =
      void 0;
  var n6 = a(),
    hg = CW(),
    e1 = S4(),
    r6 = VJ(),
    TL = W$(),
    ug = wJ();
  class qJ {
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
  yL.SchemaEnv = qJ;
  function WK($) {
    let X = fL.call(this, $);
    if (X) return X;
    let J = (0, r6.getFullPath)(this.opts.uriResolver, $.root.baseId),
      { es5: W, lines: Q } = this.opts.code,
      { ownProperties: Y } = this.opts,
      z = new n6.CodeGen(this.scope, { es5: W, lines: Q, ownProperties: Y }),
      G;
    if ($.$async)
      G = z.scopeValue("Error", {
        ref: hg.default,
        code: n6._`require("ajv/dist/runtime/validation_error").default`,
      });
    let H = z.scopeName("validate");
    $.validateName = H;
    let U = {
        gen: z,
        allErrors: this.opts.allErrors,
        data: e1.default.data,
        parentData: e1.default.parentData,
        parentDataProperty: e1.default.parentDataProperty,
        dataNames: [e1.default.data],
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
        (0, ug.validateFunctionCode)(U),
        z.optimize(this.opts.code.optimize));
      let V = z.toString();
      if (
        ((K = `${z.scopeRefs(e1.default.scope)}return ${V}`),
        this.opts.code.process)
      )
        K = this.opts.code.process(K, $);
      let O = Function(
        `${e1.default.self}`,
        `${e1.default.scope}`,
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
  yL.compileSchema = WK;
  function mg($, X, J) {
    var W;
    J = (0, r6.resolveUrl)(this.opts.uriResolver, X, J);
    let Q = $.refs[J];
    if (Q) return Q;
    let Y = pg.call(this, $, J);
    if (Y === void 0) {
      let z = (W = $.localRefs) === null || W === void 0 ? void 0 : W[J],
        { schemaId: G } = this.opts;
      if (z) Y = new qJ({ schema: z, schemaId: G, root: $, baseId: X });
    }
    if (Y === void 0) return;
    return ($.refs[J] = lg.call(this, Y));
  }
  yL.resolveRef = mg;
  function lg($) {
    if ((0, r6.inlineRef)($.schema, this.opts.inlineRefs)) return $.schema;
    return $.validate ? $ : WK.call(this, $);
  }
  function fL($) {
    for (let X of this._compilations) if (cg(X, $)) return X;
  }
  yL.getCompilingSchema = fL;
  function cg($, X) {
    return $.schema === X.schema && $.root === X.root && $.baseId === X.baseId;
  }
  function pg($, X) {
    let J;
    while (typeof (J = this.refs[X]) == "string") X = J;
    return J || this.schemas[X] || vW.call(this, $, X);
  }
  function vW($, X) {
    let J = this.opts.uriResolver.parse(X),
      W = (0, r6._getFullPath)(this.opts.uriResolver, J),
      Q = (0, r6.getFullPath)(this.opts.uriResolver, $.baseId, void 0);
    if (Object.keys($.schema).length > 0 && W === Q) return QK.call(this, J, $);
    let Y = (0, r6.normalizeId)(W),
      z = this.refs[Y] || this.schemas[Y];
    if (typeof z == "string") {
      let G = vW.call(this, $, z);
      if (typeof (G === null || G === void 0 ? void 0 : G.schema) !== "object")
        return;
      return QK.call(this, J, G);
    }
    if (typeof (z === null || z === void 0 ? void 0 : z.schema) !== "object")
      return;
    if (!z.validate) WK.call(this, z);
    if (Y === (0, r6.normalizeId)(X)) {
      let { schema: G } = z,
        { schemaId: H } = this.opts,
        U = G[H];
      if (U) Q = (0, r6.resolveUrl)(this.opts.uriResolver, Q, U);
      return new qJ({ schema: G, schemaId: H, root: $, baseId: Q });
    }
    return QK.call(this, J, z);
  }
  yL.resolveSchema = vW;
  var dg = new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions",
  ]);
  function QK($, { baseId: X, schema: J, root: W }) {
    var Q;
    if (((Q = $.fragment) === null || Q === void 0 ? void 0 : Q[0]) !== "/")
      return;
    for (let G of $.fragment.slice(1).split("/")) {
      if (typeof J === "boolean") return;
      let H = J[(0, TL.unescapeFragment)(G)];
      if (H === void 0) return;
      J = H;
      let U = typeof J === "object" && J[this.opts.schemaId];
      if (!dg.has(G) && U) X = (0, r6.resolveUrl)(this.opts.uriResolver, X, U);
    }
    let Y;
    if (
      typeof J != "boolean" &&
      J.$ref &&
      !(0, TL.schemaHasRulesButRef)(J, this.RULES)
    ) {
      let G = (0, r6.resolveUrl)(this.opts.uriResolver, X, J.$ref);
      Y = vW.call(this, W, G);
    }
    let { schemaId: z } = this.opts;
    if (
      ((Y = Y || new qJ({ schema: J, schemaId: z, root: W, baseId: X })),
      Y.schema !== Y.root.schema)
    )
      return Y;
    return;
  }
});
var hL = M((uX$, tg) => {
  tg.exports = {
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
var mL = M((mX$, uL) => {
  var ag = {
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
  uL.exports = { HEX: ag };
});
var oL = M((lX$, rL) => {
  var { HEX: sg } = mL(),
    eg =
      /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u;
  function dL($) {
    if (nL($, ".") < 3) return { host: $, isIPV4: !1 };
    let X = $.match(eg) || [],
      [J] = X;
    if (J) return { host: Xh(J, "."), isIPV4: !0 };
    else return { host: $, isIPV4: !1 };
  }
  function YK($, X = !1) {
    let J = "",
      W = !0;
    for (let Q of $) {
      if (sg[Q] === void 0) return;
      if (Q !== "0" && W === !0) W = !1;
      if (!W) J += Q;
    }
    if (X && J.length === 0) J = "0";
    return J;
  }
  function $h($) {
    let X = 0,
      J = { error: !1, address: "", zone: "" },
      W = [],
      Q = [],
      Y = !1,
      z = !1,
      G = !1;
    function H() {
      if (Q.length) {
        if (Y === !1) {
          let U = YK(Q);
          if (U !== void 0) W.push(U);
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
        if ((X++, W.push(":"), X > 7)) {
          J.error = !0;
          break;
        }
        if (U - 1 >= 0 && $[U - 1] === ":") z = !0;
        continue;
      } else if (K === "%") {
        if (!H()) break;
        Y = !0;
      } else {
        Q.push(K);
        continue;
      }
    }
    if (Q.length)
      if (Y) J.zone = Q.join("");
      else if (G) W.push(Q.join(""));
      else W.push(YK(Q));
    return ((J.address = W.join("")), J);
  }
  function iL($) {
    if (nL($, ":") < 2) return { host: $, isIPV6: !1 };
    let X = $h($);
    if (!X.error) {
      let { address: J, address: W } = X;
      if (X.zone) ((J += "%" + X.zone), (W += "%25" + X.zone));
      return { host: J, escapedHost: W, isIPV6: !0 };
    } else return { host: $, isIPV6: !1 };
  }
  function Xh($, X) {
    let J = "",
      W = !0,
      Q = $.length;
    for (let Y = 0; Y < Q; Y++) {
      let z = $[Y];
      if (z === "0" && W) {
        if ((Y + 1 <= Q && $[Y + 1] === X) || Y + 1 === Q) ((J += z), (W = !1));
      } else {
        if (z === X) W = !0;
        else W = !1;
        J += z;
      }
    }
    return J;
  }
  function nL($, X) {
    let J = 0;
    for (let W = 0; W < $.length; W++) if ($[W] === X) J++;
    return J;
  }
  var lL = /^\.\.?\//u,
    cL = /^\/\.(?:\/|$)/u,
    pL = /^\/\.\.(?:\/|$)/u,
    Jh = /^\/?(?:.|\n)*?(?=\/|$)/u;
  function Qh($) {
    let X = [];
    while ($.length)
      if ($.match(lL)) $ = $.replace(lL, "");
      else if ($.match(cL)) $ = $.replace(cL, "/");
      else if ($.match(pL)) (($ = $.replace(pL, "/")), X.pop());
      else if ($ === "." || $ === "..") $ = "";
      else {
        let J = $.match(Jh);
        if (J) {
          let W = J[0];
          (($ = $.slice(W.length)), X.push(W));
        } else throw Error("Unexpected dot segment condition");
      }
    return X.join("");
  }
  function Wh($, X) {
    let J = X !== !0 ? escape : unescape;
    if ($.scheme !== void 0) $.scheme = J($.scheme);
    if ($.userinfo !== void 0) $.userinfo = J($.userinfo);
    if ($.host !== void 0) $.host = J($.host);
    if ($.path !== void 0) $.path = J($.path);
    if ($.query !== void 0) $.query = J($.query);
    if ($.fragment !== void 0) $.fragment = J($.fragment);
    return $;
  }
  function Yh($) {
    let X = [];
    if ($.userinfo !== void 0) (X.push($.userinfo), X.push("@"));
    if ($.host !== void 0) {
      let J = unescape($.host),
        W = dL(J);
      if (W.isIPV4) J = W.host;
      else {
        let Q = iL(W.host);
        if (Q.isIPV6 === !0) J = `[${Q.escapedHost}]`;
        else J = $.host;
      }
      X.push(J);
    }
    if (typeof $.port === "number" || typeof $.port === "string")
      (X.push(":"), X.push(String($.port)));
    return X.length ? X.join("") : void 0;
  }
  rL.exports = {
    recomposeAuthority: Yh,
    normalizeComponentEncoding: Wh,
    removeDotSegments: Qh,
    normalizeIPv4: dL,
    normalizeIPv6: iL,
    stringArrayToHexStripped: YK,
  };
});
var XM = M((cX$, $M) => {
  var zh = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu,
    Gh = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
  function tL($) {
    return typeof $.secure === "boolean"
      ? $.secure
      : String($.scheme).toLowerCase() === "wss";
  }
  function aL($) {
    if (!$.host) $.error = $.error || "HTTP URIs must have a host.";
    return $;
  }
  function sL($) {
    let X = String($.scheme).toLowerCase() === "https";
    if ($.port === (X ? 443 : 80) || $.port === "") $.port = void 0;
    if (!$.path) $.path = "/";
    return $;
  }
  function Hh($) {
    return (
      ($.secure = tL($)),
      ($.resourceName = ($.path || "/") + ($.query ? "?" + $.query : "")),
      ($.path = void 0),
      ($.query = void 0),
      $
    );
  }
  function Uh($) {
    if ($.port === (tL($) ? 443 : 80) || $.port === "") $.port = void 0;
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
  function Kh($, X) {
    if (!$.path) return (($.error = "URN can not be parsed"), $);
    let J = $.path.match(Gh);
    if (J) {
      let W = X.scheme || $.scheme || "urn";
      (($.nid = J[1].toLowerCase()), ($.nss = J[2]));
      let Q = `${W}:${X.nid || $.nid}`,
        Y = zK[Q];
      if ((($.path = void 0), Y)) $ = Y.parse($, X);
    } else $.error = $.error || "URN can not be parsed.";
    return $;
  }
  function Vh($, X) {
    let J = X.scheme || $.scheme || "urn",
      W = $.nid.toLowerCase(),
      Q = `${J}:${X.nid || W}`,
      Y = zK[Q];
    if (Y) $ = Y.serialize($, X);
    let z = $,
      G = $.nss;
    return ((z.path = `${W || X.nid}:${G}`), (X.skipEscape = !0), z);
  }
  function Nh($, X) {
    let J = $;
    if (
      ((J.uuid = J.nss),
      (J.nss = void 0),
      !X.tolerant && (!J.uuid || !zh.test(J.uuid)))
    )
      J.error = J.error || "UUID is not valid.";
    return J;
  }
  function Oh($) {
    let X = $;
    return ((X.nss = ($.uuid || "").toLowerCase()), X);
  }
  var eL = { scheme: "http", domainHost: !0, parse: aL, serialize: sL },
    wh = {
      scheme: "https",
      domainHost: eL.domainHost,
      parse: aL,
      serialize: sL,
    },
    _W = { scheme: "ws", domainHost: !0, parse: Hh, serialize: Uh },
    Bh = {
      scheme: "wss",
      domainHost: _W.domainHost,
      parse: _W.parse,
      serialize: _W.serialize,
    },
    qh = { scheme: "urn", parse: Kh, serialize: Vh, skipNormalize: !0 },
    Dh = { scheme: "urn:uuid", parse: Nh, serialize: Oh, skipNormalize: !0 },
    zK = { http: eL, https: wh, ws: _W, wss: Bh, urn: qh, "urn:uuid": Dh };
  $M.exports = zK;
});
var QM = M((pX$, TW) => {
  var {
      normalizeIPv6: Fh,
      normalizeIPv4: jh,
      removeDotSegments: DJ,
      recomposeAuthority: Lh,
      normalizeComponentEncoding: xW,
    } = oL(),
    GK = XM();
  function Mh($, X) {
    if (typeof $ === "string") $ = W4(v4($, X), X);
    else if (typeof $ === "object") $ = v4(W4($, X), X);
    return $;
  }
  function Ah($, X, J) {
    let W = Object.assign({ scheme: "null" }, J),
      Q = JM(v4($, W), v4(X, W), W, !0);
    return W4(Q, { ...W, skipEscape: !0 });
  }
  function JM($, X, J, W) {
    let Q = {};
    if (!W) (($ = v4(W4($, J), J)), (X = v4(W4(X, J), J)));
    if (((J = J || {}), !J.tolerant && X.scheme))
      ((Q.scheme = X.scheme),
        (Q.userinfo = X.userinfo),
        (Q.host = X.host),
        (Q.port = X.port),
        (Q.path = DJ(X.path || "")),
        (Q.query = X.query));
    else {
      if (X.userinfo !== void 0 || X.host !== void 0 || X.port !== void 0)
        ((Q.userinfo = X.userinfo),
          (Q.host = X.host),
          (Q.port = X.port),
          (Q.path = DJ(X.path || "")),
          (Q.query = X.query));
      else {
        if (!X.path)
          if (((Q.path = $.path), X.query !== void 0)) Q.query = X.query;
          else Q.query = $.query;
        else {
          if (X.path.charAt(0) === "/") Q.path = DJ(X.path);
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
            Q.path = DJ(Q.path);
          }
          Q.query = X.query;
        }
        ((Q.userinfo = $.userinfo), (Q.host = $.host), (Q.port = $.port));
      }
      Q.scheme = $.scheme;
    }
    return ((Q.fragment = X.fragment), Q);
  }
  function Ih($, X, J) {
    if (typeof $ === "string")
      (($ = unescape($)), ($ = W4(xW(v4($, J), !0), { ...J, skipEscape: !0 })));
    else if (typeof $ === "object") $ = W4(xW($, !0), { ...J, skipEscape: !0 });
    if (typeof X === "string")
      ((X = unescape(X)), (X = W4(xW(v4(X, J), !0), { ...J, skipEscape: !0 })));
    else if (typeof X === "object") X = W4(xW(X, !0), { ...J, skipEscape: !0 });
    return $.toLowerCase() === X.toLowerCase();
  }
  function W4($, X) {
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
      W = Object.assign({}, X),
      Q = [],
      Y = GK[(W.scheme || J.scheme || "").toLowerCase()];
    if (Y && Y.serialize) Y.serialize(J, W);
    if (J.path !== void 0)
      if (!W.skipEscape) {
        if (((J.path = escape(J.path)), J.scheme !== void 0))
          J.path = J.path.split("%3A").join(":");
      } else J.path = unescape(J.path);
    if (W.reference !== "suffix" && J.scheme) Q.push(J.scheme, ":");
    let z = Lh(J);
    if (z !== void 0) {
      if (W.reference !== "suffix") Q.push("//");
      if ((Q.push(z), J.path && J.path.charAt(0) !== "/")) Q.push("/");
    }
    if (J.path !== void 0) {
      let G = J.path;
      if (!W.absolutePath && (!Y || !Y.absolutePath)) G = DJ(G);
      if (z === void 0) G = G.replace(/^\/\//u, "/%2F");
      Q.push(G);
    }
    if (J.query !== void 0) Q.push("?", J.query);
    if (J.fragment !== void 0) Q.push("#", J.fragment);
    return Q.join("");
  }
  var Zh = Array.from({ length: 127 }, ($, X) =>
    /[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(X)),
  );
  function bh($) {
    let X = 0;
    for (let J = 0, W = $.length; J < W; ++J)
      if (((X = $.charCodeAt(J)), X > 126 || Zh[X])) return !0;
    return !1;
  }
  var Rh =
    /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function v4($, X) {
    let J = Object.assign({}, X),
      W = {
        scheme: void 0,
        userinfo: void 0,
        host: "",
        port: void 0,
        path: "",
        query: void 0,
        fragment: void 0,
      },
      Q = $.indexOf("%") !== -1,
      Y = !1;
    if (J.reference === "suffix")
      $ = (J.scheme ? J.scheme + ":" : "") + "//" + $;
    let z = $.match(Rh);
    if (z) {
      if (
        ((W.scheme = z[1]),
        (W.userinfo = z[3]),
        (W.host = z[4]),
        (W.port = parseInt(z[5], 10)),
        (W.path = z[6] || ""),
        (W.query = z[7]),
        (W.fragment = z[8]),
        isNaN(W.port))
      )
        W.port = z[5];
      if (W.host) {
        let H = jh(W.host);
        if (H.isIPV4 === !1) {
          let U = Fh(H.host);
          ((W.host = U.host.toLowerCase()), (Y = U.isIPV6));
        } else ((W.host = H.host), (Y = !0));
      }
      if (
        W.scheme === void 0 &&
        W.userinfo === void 0 &&
        W.host === void 0 &&
        W.port === void 0 &&
        W.query === void 0 &&
        !W.path
      )
        W.reference = "same-document";
      else if (W.scheme === void 0) W.reference = "relative";
      else if (W.fragment === void 0) W.reference = "absolute";
      else W.reference = "uri";
      if (
        J.reference &&
        J.reference !== "suffix" &&
        J.reference !== W.reference
      )
        W.error = W.error || "URI is not a " + J.reference + " reference.";
      let G = GK[(J.scheme || W.scheme || "").toLowerCase()];
      if (!J.unicodeSupport && (!G || !G.unicodeSupport)) {
        if (
          W.host &&
          (J.domainHost || (G && G.domainHost)) &&
          Y === !1 &&
          bh(W.host)
        )
          try {
            W.host = URL.domainToASCII(W.host.toLowerCase());
          } catch (H) {
            W.error =
              W.error ||
              "Host's domain name can not be converted to ASCII: " + H;
          }
      }
      if (!G || (G && !G.skipNormalize)) {
        if (Q && W.scheme !== void 0) W.scheme = unescape(W.scheme);
        if (Q && W.host !== void 0) W.host = unescape(W.host);
        if (W.path) W.path = escape(unescape(W.path));
        if (W.fragment) W.fragment = encodeURI(decodeURIComponent(W.fragment));
      }
      if (G && G.parse) G.parse(W, J);
    } else W.error = W.error || "URI can not be parsed.";
    return W;
  }
  var HK = {
    SCHEMES: GK,
    normalize: Mh,
    resolve: Ah,
    resolveComponents: JM,
    equal: Ih,
    serialize: W4,
    parse: v4,
  };
  TW.exports = HK;
  TW.exports.default = HK;
  TW.exports.fastUri = HK;
});
var zM = M((YM) => {
  Object.defineProperty(YM, "__esModule", { value: !0 });
  var WM = QM();
  WM.code = 'require("ajv/dist/runtime/uri").default';
  YM.default = WM;
});
var wM = M((k4) => {
  Object.defineProperty(k4, "__esModule", { value: !0 });
  k4.CodeGen =
    k4.Name =
    k4.nil =
    k4.stringify =
    k4.str =
    k4._ =
    k4.KeywordCxt =
      void 0;
  var Eh = wJ();
  Object.defineProperty(k4, "KeywordCxt", {
    enumerable: !0,
    get: function () {
      return Eh.KeywordCxt;
    },
  });
  var B8 = a();
  Object.defineProperty(k4, "_", {
    enumerable: !0,
    get: function () {
      return B8._;
    },
  });
  Object.defineProperty(k4, "str", {
    enumerable: !0,
    get: function () {
      return B8.str;
    },
  });
  Object.defineProperty(k4, "stringify", {
    enumerable: !0,
    get: function () {
      return B8.stringify;
    },
  });
  Object.defineProperty(k4, "nil", {
    enumerable: !0,
    get: function () {
      return B8.nil;
    },
  });
  Object.defineProperty(k4, "Name", {
    enumerable: !0,
    get: function () {
      return B8.Name;
    },
  });
  Object.defineProperty(k4, "CodeGen", {
    enumerable: !0,
    get: function () {
      return B8.CodeGen;
    },
  });
  var Sh = CW(),
    VM = BJ(),
    Ch = lU(),
    FJ = kW(),
    vh = a(),
    jJ = VJ(),
    fW = KJ(),
    KK = W$(),
    GM = hL(),
    kh = zM(),
    NM = ($, X) => new RegExp($, X);
  NM.code = "new RegExp";
  var _h = ["removeAdditional", "useDefaults", "coerceTypes"],
    xh = new Set([
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
    Th = {
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
    fh = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode:
        '"minLength"/"maxLength" account for unicode characters by default.',
    },
    HM = 200;
  function yh($) {
    var X,
      J,
      W,
      Q,
      Y,
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
      s6 = (X = $.code) === null || X === void 0 ? void 0 : X.optimize,
      J0 = s6 === !0 || s6 === void 0 ? 1 : s6 || 0,
      _4 =
        (W = (J = $.code) === null || J === void 0 ? void 0 : J.regExp) !==
          null && W !== void 0
          ? W
          : NM,
      Q0 = (Q = $.uriResolver) !== null && Q !== void 0 ? Q : kh.default;
    return {
      strictSchema:
        (z = (Y = $.strictSchema) !== null && Y !== void 0 ? Y : G4) !== null &&
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
        ? { ...$.code, optimize: J0, regExp: _4 }
        : { optimize: J0, regExp: _4 },
      loopRequired: (B = $.loopRequired) !== null && B !== void 0 ? B : HM,
      loopEnum: (F = $.loopEnum) !== null && F !== void 0 ? F : HM,
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
      uriResolver: Q0,
    };
  }
  class yW {
    constructor($ = {}) {
      ((this.schemas = {}),
        (this.refs = {}),
        (this.formats = {}),
        (this._compilations = new Set()),
        (this._loading = {}),
        (this._cache = new Map()),
        ($ = this.opts = { ...$, ...yh($) }));
      let { es5: X, lines: J } = this.opts.code;
      ((this.scope = new vh.ValueScope({
        scope: {},
        prefixes: xh,
        es5: X,
        lines: J,
      })),
        (this.logger = ch($.logger)));
      let W = $.validateFormats;
      if (
        (($.validateFormats = !1),
        (this.RULES = (0, Ch.getRules)()),
        UM.call(this, Th, $, "NOT SUPPORTED"),
        UM.call(this, fh, $, "DEPRECATED", "warn"),
        (this._metaOpts = mh.call(this)),
        $.formats)
      )
        hh.call(this);
      if ((this._addVocabularies(), this._addDefaultMetaSchema(), $.keywords))
        uh.call(this, $.keywords);
      if (typeof $.meta == "object") this.addMetaSchema($.meta);
      (gh.call(this), ($.validateFormats = W));
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      let { $data: $, meta: X, schemaId: J } = this.opts,
        W = GM;
      if (J === "id") ((W = { ...GM }), (W.id = W.$id), delete W.$id);
      if (X && $) this.addMetaSchema(W, W[J], !1);
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
      let W = J(X);
      if (!("$async" in J)) this.errors = J.errors;
      return W;
    }
    compile($, X) {
      let J = this._addSchema($, X);
      return J.validate || this._compileSchemaEnv(J);
    }
    compileAsync($, X) {
      if (typeof this.opts.loadSchema != "function")
        throw Error("options.loadSchema should be a function");
      let { loadSchema: J } = this.opts;
      return W.call(this, $, X);
      async function W(U, K) {
        await Q.call(this, U.$schema);
        let V = this._addSchema(U, K);
        return V.validate || Y.call(this, V);
      }
      async function Q(U) {
        if (U && !this.getSchema(U)) await W.call(this, { $ref: U }, !0);
      }
      async function Y(U) {
        try {
          return this._compileSchemaEnv(U);
        } catch (K) {
          if (!(K instanceof VM.default)) throw K;
          return (
            z.call(this, K),
            await G.call(this, K.missingSchema),
            Y.call(this, U)
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
    addSchema($, X, J, W = this.opts.validateSchema) {
      if (Array.isArray($)) {
        for (let Y of $) this.addSchema(Y, void 0, J, W);
        return this;
      }
      let Q;
      if (typeof $ === "object") {
        let { schemaId: Y } = this.opts;
        if (((Q = $[Y]), Q !== void 0 && typeof Q != "string"))
          throw Error(`schema ${Y} must be string`);
      }
      return (
        (X = (0, jJ.normalizeId)(X || Q)),
        this._checkUnique(X),
        (this.schemas[X] = this._addSchema($, J, X, W, !0)),
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
      let W = this.validate(J, $);
      if (!W && X) {
        let Q = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log") this.logger.error(Q);
        else throw Error(Q);
      }
      return W;
    }
    getSchema($) {
      let X;
      while (typeof (X = KM.call(this, $)) == "string") $ = X;
      if (X === void 0) {
        let { schemaId: J } = this.opts,
          W = new FJ.SchemaEnv({ schema: {}, schemaId: J });
        if (((X = FJ.resolveSchema.call(this, W, $)), !X)) return;
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
          let X = KM.call(this, $);
          if (typeof X == "object") this._cache.delete(X.schema);
          return (delete this.schemas[$], delete this.refs[$], this);
        }
        case "object": {
          let X = $;
          this._cache.delete(X);
          let J = $[this.opts.schemaId];
          if (J)
            ((J = (0, jJ.normalizeId)(J)),
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
      if ((dh.call(this, J, X), !X))
        return ((0, KK.eachItem)(J, (Q) => UK.call(this, Q)), this);
      nh.call(this, X);
      let W = {
        ...X,
        type: (0, fW.getJSONTypes)(X.type),
        schemaType: (0, fW.getJSONTypes)(X.schemaType),
      };
      return (
        (0, KK.eachItem)(
          J,
          W.type.length === 0
            ? (Q) => UK.call(this, Q, W)
            : (Q) => W.type.forEach((Y) => UK.call(this, Q, W, Y)),
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
        let W = J.rules.findIndex((Q) => Q.keyword === $);
        if (W >= 0) J.rules.splice(W, 1);
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
      return $.map((W) => `${J}${W.instancePath} ${W.message}`).reduce(
        (W, Q) => W + X + Q,
      );
    }
    $dataMetaSchema($, X) {
      let J = this.RULES.all;
      $ = JSON.parse(JSON.stringify($));
      for (let W of X) {
        let Q = W.split("/").slice(1),
          Y = $;
        for (let z of Q) Y = Y[z];
        for (let z in J) {
          let G = J[z];
          if (typeof G != "object") continue;
          let { $data: H } = G.definition,
            U = Y[z];
          if (H && U) Y[z] = OM(U);
        }
      }
      return $;
    }
    _removeAllSchemas($, X) {
      for (let J in $) {
        let W = $[J];
        if (!X || X.test(J)) {
          if (typeof W == "string") delete $[J];
          else if (W && !W.meta) (this._cache.delete(W.schema), delete $[J]);
        }
      }
    }
    _addSchema(
      $,
      X,
      J,
      W = this.opts.validateSchema,
      Q = this.opts.addUsedSchema,
    ) {
      let Y,
        { schemaId: z } = this.opts;
      if (typeof $ == "object") Y = $[z];
      else if (this.opts.jtd) throw Error("schema must be object");
      else if (typeof $ != "boolean")
        throw Error("schema must be object or boolean");
      let G = this._cache.get($);
      if (G !== void 0) return G;
      J = (0, jJ.normalizeId)(Y || J);
      let H = jJ.getSchemaRefs.call(this, $, J);
      if (
        ((G = new FJ.SchemaEnv({
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
      if (W) this.validateSchema($, !0);
      return G;
    }
    _checkUnique($) {
      if (this.schemas[$] || this.refs[$])
        throw Error(`schema with key or id "${$}" already exists`);
    }
    _compileSchemaEnv($) {
      if ($.meta) this._compileMetaSchema($);
      else FJ.compileSchema.call(this, $);
      if (!$.validate) throw Error("ajv implementation error");
      return $.validate;
    }
    _compileMetaSchema($) {
      let X = this.opts;
      this.opts = this._metaOpts;
      try {
        FJ.compileSchema.call(this, $);
      } finally {
        this.opts = X;
      }
    }
  }
  yW.ValidationError = Sh.default;
  yW.MissingRefError = VM.default;
  k4.default = yW;
  function UM($, X, J, W = "error") {
    for (let Q in $) {
      let Y = Q;
      if (Y in X) this.logger[W](`${J}: option ${Q}. ${$[Y]}`);
    }
  }
  function KM($) {
    return (($ = (0, jJ.normalizeId)($)), this.schemas[$] || this.refs[$]);
  }
  function gh() {
    let $ = this.opts.schemas;
    if (!$) return;
    if (Array.isArray($)) this.addSchema($);
    else for (let X in $) this.addSchema($[X], X);
  }
  function hh() {
    for (let $ in this.opts.formats) {
      let X = this.opts.formats[$];
      if (X) this.addFormat($, X);
    }
  }
  function uh($) {
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
  function mh() {
    let $ = { ...this.opts };
    for (let X of _h) delete $[X];
    return $;
  }
  var lh = { log() {}, warn() {}, error() {} };
  function ch($) {
    if ($ === !1) return lh;
    if ($ === void 0) return console;
    if ($.log && $.warn && $.error) return $;
    throw Error("logger must implement log, warn and error methods");
  }
  var ph = /^[a-z_$][a-z0-9_$:-]*$/i;
  function dh($, X) {
    let { RULES: J } = this;
    if (
      ((0, KK.eachItem)($, (W) => {
        if (J.keywords[W]) throw Error(`Keyword ${W} is already defined`);
        if (!ph.test(W)) throw Error(`Keyword ${W} has invalid name`);
      }),
      !X)
    )
      return;
    if (X.$data && !("code" in X || "validate" in X))
      throw Error('$data keyword must have "code" or "validate" function');
  }
  function UK($, X, J) {
    var W;
    let Q = X === null || X === void 0 ? void 0 : X.post;
    if (J && Q) throw Error('keyword with "post" flag cannot have "type"');
    let { RULES: Y } = this,
      z = Q ? Y.post : Y.rules.find(({ type: H }) => H === J);
    if (!z) ((z = { type: J, rules: [] }), Y.rules.push(z));
    if (((Y.keywords[$] = !0), !X)) return;
    let G = {
      keyword: $,
      definition: {
        ...X,
        type: (0, fW.getJSONTypes)(X.type),
        schemaType: (0, fW.getJSONTypes)(X.schemaType),
      },
    };
    if (X.before) ih.call(this, z, G, X.before);
    else z.rules.push(G);
    ((Y.all[$] = G),
      (W = X.implements) === null ||
        W === void 0 ||
        W.forEach((H) => this.addKeyword(H)));
  }
  function ih($, X, J) {
    let W = $.rules.findIndex((Q) => Q.keyword === J);
    if (W >= 0) $.rules.splice(W, 0, X);
    else ($.rules.push(X), this.logger.warn(`rule ${J} is not defined`));
  }
  function nh($) {
    let { metaSchema: X } = $;
    if (X === void 0) return;
    if ($.$data && this.opts.$data) X = OM(X);
    $.validateSchema = this.compile(X, !0);
  }
  var rh = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
  };
  function OM($) {
    return { anyOf: [$, rh] };
  }
});
var qM = M((BM) => {
  Object.defineProperty(BM, "__esModule", { value: !0 });
  var ah = {
    keyword: "id",
    code() {
      throw Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    },
  };
  BM.default = ah;
});
var AM = M((LM) => {
  Object.defineProperty(LM, "__esModule", { value: !0 });
  LM.callRef = LM.getValidate = void 0;
  var eh = BJ(),
    DM = v6(),
    V6 = a(),
    q8 = S4(),
    FM = kW(),
    gW = W$(),
    $u = {
      keyword: "$ref",
      schemaType: "string",
      code($) {
        let { gen: X, schema: J, it: W } = $,
          { baseId: Q, schemaEnv: Y, validateName: z, opts: G, self: H } = W,
          { root: U } = Y;
        if ((J === "#" || J === "#/") && Q === U.baseId) return V();
        let K = FM.resolveRef.call(H, U, Q, J);
        if (K === void 0) throw new eh.default(W.opts.uriResolver, Q, J);
        if (K instanceof FM.SchemaEnv) return N(K);
        return O(K);
        function V() {
          if (Y === U) return hW($, z, Y, Y.$async);
          let w = X.scopeValue("root", { ref: U });
          return hW($, V6._`${w}.validate`, U, U.$async);
        }
        function N(w) {
          let B = jM($, w);
          hW($, B, w, w.$async);
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
  function jM($, X) {
    let { gen: J } = $;
    return X.validate
      ? J.scopeValue("validate", { ref: X.validate })
      : V6._`${J.scopeValue("wrapper", { ref: X })}.validate`;
  }
  LM.getValidate = jM;
  function hW($, X, J, W) {
    let { gen: Q, it: Y } = $,
      { allErrors: z, schemaEnv: G, opts: H } = Y,
      U = H.passContext ? q8.default.this : V6.nil;
    if (W) K();
    else V();
    function K() {
      if (!G.$async) throw Error("async schema referenced by sync schema");
      let w = Q.let("valid");
      (Q.try(
        () => {
          if (
            (Q.code(V6._`await ${(0, DM.callValidateCode)($, X, U)}`), O(X), !z)
          )
            Q.assign(w, !0);
        },
        (B) => {
          if (
            (Q.if(V6._`!(${B} instanceof ${Y.ValidationError})`, () =>
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
        (0, DM.callValidateCode)($, X, U),
        () => O(X),
        () => N(X),
      );
    }
    function N(w) {
      let B = V6._`${w}.errors`;
      (Q.assign(
        q8.default.vErrors,
        V6._`${q8.default.vErrors} === null ? ${B} : ${q8.default.vErrors}.concat(${B})`,
      ),
        Q.assign(q8.default.errors, V6._`${q8.default.vErrors}.length`));
    }
    function O(w) {
      var B;
      if (!Y.opts.unevaluated) return;
      let F =
        (B = J === null || J === void 0 ? void 0 : J.validate) === null ||
        B === void 0
          ? void 0
          : B.evaluated;
      if (Y.props !== !0)
        if (F && !F.dynamicProps) {
          if (F.props !== void 0)
            Y.props = gW.mergeEvaluated.props(Q, F.props, Y.props);
        } else {
          let j = Q.var("props", V6._`${w}.evaluated.props`);
          Y.props = gW.mergeEvaluated.props(Q, j, Y.props, V6.Name);
        }
      if (Y.items !== !0)
        if (F && !F.dynamicItems) {
          if (F.items !== void 0)
            Y.items = gW.mergeEvaluated.items(Q, F.items, Y.items);
        } else {
          let j = Q.var("items", V6._`${w}.evaluated.items`);
          Y.items = gW.mergeEvaluated.items(Q, j, Y.items, V6.Name);
        }
    }
  }
  LM.callRef = hW;
  LM.default = $u;
});
var ZM = M((IM) => {
  Object.defineProperty(IM, "__esModule", { value: !0 });
  var Qu = qM(),
    Wu = AM(),
    Yu = [
      "$schema",
      "$id",
      "$defs",
      "$vocabulary",
      { keyword: "$comment" },
      "definitions",
      Qu.default,
      Wu.default,
    ];
  IM.default = Yu;
});
var RM = M((bM) => {
  Object.defineProperty(bM, "__esModule", { value: !0 });
  var uW = a(),
    O1 = uW.operators,
    mW = {
      maximum: { okStr: "<=", ok: O1.LTE, fail: O1.GT },
      minimum: { okStr: ">=", ok: O1.GTE, fail: O1.LT },
      exclusiveMaximum: { okStr: "<", ok: O1.LT, fail: O1.GTE },
      exclusiveMinimum: { okStr: ">", ok: O1.GT, fail: O1.LTE },
    },
    Gu = {
      message: ({ keyword: $, schemaCode: X }) =>
        uW.str`must be ${mW[$].okStr} ${X}`,
      params: ({ keyword: $, schemaCode: X }) =>
        uW._`{comparison: ${mW[$].okStr}, limit: ${X}}`,
    },
    Hu = {
      keyword: Object.keys(mW),
      type: "number",
      schemaType: "number",
      $data: !0,
      error: Gu,
      code($) {
        let { keyword: X, data: J, schemaCode: W } = $;
        $.fail$data(uW._`${J} ${mW[X].fail} ${W} || isNaN(${J})`);
      },
    };
  bM.default = Hu;
});
var EM = M((PM) => {
  Object.defineProperty(PM, "__esModule", { value: !0 });
  var LJ = a(),
    Ku = {
      message: ({ schemaCode: $ }) => LJ.str`must be multiple of ${$}`,
      params: ({ schemaCode: $ }) => LJ._`{multipleOf: ${$}}`,
    },
    Vu = {
      keyword: "multipleOf",
      type: "number",
      schemaType: "number",
      $data: !0,
      error: Ku,
      code($) {
        let { gen: X, data: J, schemaCode: W, it: Q } = $,
          Y = Q.opts.multipleOfPrecision,
          z = X.let("res"),
          G = Y
            ? LJ._`Math.abs(Math.round(${z}) - ${z}) > 1e-${Y}`
            : LJ._`${z} !== parseInt(${z})`;
        $.fail$data(LJ._`(${W} === 0 || (${z} = ${J}/${W}, ${G}))`);
      },
    };
  PM.default = Vu;
});
var vM = M((CM) => {
  Object.defineProperty(CM, "__esModule", { value: !0 });
  function SM($) {
    let X = $.length,
      J = 0,
      W = 0,
      Q;
    while (W < X)
      if ((J++, (Q = $.charCodeAt(W++)), Q >= 55296 && Q <= 56319 && W < X)) {
        if (((Q = $.charCodeAt(W)), (Q & 64512) === 56320)) W++;
      }
    return J;
  }
  CM.default = SM;
  SM.code = 'require("ajv/dist/runtime/ucs2length").default';
});
var _M = M((kM) => {
  Object.defineProperty(kM, "__esModule", { value: !0 });
  var $0 = a(),
    wu = W$(),
    Bu = vM(),
    qu = {
      message({ keyword: $, schemaCode: X }) {
        let J = $ === "maxLength" ? "more" : "fewer";
        return $0.str`must NOT have ${J} than ${X} characters`;
      },
      params: ({ schemaCode: $ }) => $0._`{limit: ${$}}`,
    },
    Du = {
      keyword: ["maxLength", "minLength"],
      type: "string",
      schemaType: "number",
      $data: !0,
      error: qu,
      code($) {
        let { keyword: X, data: J, schemaCode: W, it: Q } = $,
          Y = X === "maxLength" ? $0.operators.GT : $0.operators.LT,
          z =
            Q.opts.unicode === !1
              ? $0._`${J}.length`
              : $0._`${(0, wu.useFunc)($.gen, Bu.default)}(${J})`;
        $.fail$data($0._`${z} ${Y} ${W}`);
      },
    };
  kM.default = Du;
});
var TM = M((xM) => {
  Object.defineProperty(xM, "__esModule", { value: !0 });
  var ju = v6(),
    Lu = W$(),
    D8 = a(),
    Mu = {
      message: ({ schemaCode: $ }) => D8.str`must match pattern "${$}"`,
      params: ({ schemaCode: $ }) => D8._`{pattern: ${$}}`,
    },
    Au = {
      keyword: "pattern",
      type: "string",
      schemaType: "string",
      $data: !0,
      error: Mu,
      code($) {
        let { gen: X, data: J, $data: W, schema: Q, schemaCode: Y, it: z } = $,
          G = z.opts.unicodeRegExp ? "u" : "";
        if (W) {
          let { regExp: H } = z.opts.code,
            U =
              H.code === "new RegExp"
                ? D8._`new RegExp`
                : (0, Lu.useFunc)(X, H),
            K = X.let("valid");
          (X.try(
            () => X.assign(K, D8._`${U}(${Y}, ${G}).test(${J})`),
            () => X.assign(K, !1),
          ),
            $.fail$data(D8._`!${K}`));
        } else {
          let H = (0, ju.usePattern)($, Q);
          $.fail$data(D8._`!${H}.test(${J})`);
        }
      },
    };
  xM.default = Au;
});
var yM = M((fM) => {
  Object.defineProperty(fM, "__esModule", { value: !0 });
  var MJ = a(),
    Zu = {
      message({ keyword: $, schemaCode: X }) {
        let J = $ === "maxProperties" ? "more" : "fewer";
        return MJ.str`must NOT have ${J} than ${X} properties`;
      },
      params: ({ schemaCode: $ }) => MJ._`{limit: ${$}}`,
    },
    bu = {
      keyword: ["maxProperties", "minProperties"],
      type: "object",
      schemaType: "number",
      $data: !0,
      error: Zu,
      code($) {
        let { keyword: X, data: J, schemaCode: W } = $,
          Q = X === "maxProperties" ? MJ.operators.GT : MJ.operators.LT;
        $.fail$data(MJ._`Object.keys(${J}).length ${Q} ${W}`);
      },
    };
  fM.default = bu;
});
var hM = M((gM) => {
  Object.defineProperty(gM, "__esModule", { value: !0 });
  var AJ = v6(),
    IJ = a(),
    Pu = W$(),
    Eu = {
      message: ({ params: { missingProperty: $ } }) =>
        IJ.str`must have required property '${$}'`,
      params: ({ params: { missingProperty: $ } }) =>
        IJ._`{missingProperty: ${$}}`,
    },
    Su = {
      keyword: "required",
      type: "object",
      schemaType: "array",
      $data: !0,
      error: Eu,
      code($) {
        let { gen: X, schema: J, schemaCode: W, data: Q, $data: Y, it: z } = $,
          { opts: G } = z;
        if (!Y && J.length === 0) return;
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
              (0, Pu.checkStrictMode)(z, j, z.opts.strictRequired);
            }
        }
        function U() {
          if (H || Y) $.block$data(IJ.nil, V);
          else for (let O of J) (0, AJ.checkReportMissingProp)($, O);
        }
        function K() {
          let O = X.let("missing");
          if (H || Y) {
            let w = X.let("valid", !0);
            ($.block$data(w, () => N(O, w)), $.ok(w));
          } else
            (X.if((0, AJ.checkMissingProp)($, J, O)),
              (0, AJ.reportMissingProp)($, O),
              X.else());
        }
        function V() {
          X.forOf("prop", W, (O) => {
            ($.setParams({ missingProperty: O }),
              X.if((0, AJ.noPropertyInData)(X, Q, O, G.ownProperties), () =>
                $.error(),
              ));
          });
        }
        function N(O, w) {
          ($.setParams({ missingProperty: O }),
            X.forOf(
              O,
              W,
              () => {
                (X.assign(w, (0, AJ.propertyInData)(X, Q, O, G.ownProperties)),
                  X.if((0, IJ.not)(w), () => {
                    ($.error(), X.break());
                  }));
              },
              IJ.nil,
            ));
        }
      },
    };
  gM.default = Su;
});
var mM = M((uM) => {
  Object.defineProperty(uM, "__esModule", { value: !0 });
  var ZJ = a(),
    vu = {
      message({ keyword: $, schemaCode: X }) {
        let J = $ === "maxItems" ? "more" : "fewer";
        return ZJ.str`must NOT have ${J} than ${X} items`;
      },
      params: ({ schemaCode: $ }) => ZJ._`{limit: ${$}}`,
    },
    ku = {
      keyword: ["maxItems", "minItems"],
      type: "array",
      schemaType: "number",
      $data: !0,
      error: vu,
      code($) {
        let { keyword: X, data: J, schemaCode: W } = $,
          Q = X === "maxItems" ? ZJ.operators.GT : ZJ.operators.LT;
        $.fail$data(ZJ._`${J}.length ${Q} ${W}`);
      },
    };
  uM.default = ku;
});
var lW = M((cM) => {
  Object.defineProperty(cM, "__esModule", { value: !0 });
  var lM = tU();
  lM.code = 'require("ajv/dist/runtime/equal").default';
  cM.default = lM;
});
var dM = M((pM) => {
  Object.defineProperty(pM, "__esModule", { value: !0 });
  var VK = KJ(),
    d$ = a(),
    Tu = W$(),
    fu = lW(),
    yu = {
      message: ({ params: { i: $, j: X } }) =>
        d$.str`must NOT have duplicate items (items ## ${X} and ${$} are identical)`,
      params: ({ params: { i: $, j: X } }) => d$._`{i: ${$}, j: ${X}}`,
    },
    gu = {
      keyword: "uniqueItems",
      type: "array",
      schemaType: "boolean",
      $data: !0,
      error: yu,
      code($) {
        let {
          gen: X,
          data: J,
          $data: W,
          schema: Q,
          parentSchema: Y,
          schemaCode: z,
          it: G,
        } = $;
        if (!W && !Q) return;
        let H = X.let("valid"),
          U = Y.items ? (0, VK.getSchemaTypes)(Y.items) : [];
        ($.block$data(H, K, d$._`${z} === false`), $.ok(H));
        function K() {
          let w = X.let("i", d$._`${J}.length`),
            B = X.let("j");
          ($.setParams({ i: w, j: B }),
            X.assign(H, !0),
            X.if(d$._`${w} > 1`, () => (V() ? N : O)(w, B)));
        }
        function V() {
          return (
            U.length > 0 && !U.some((w) => w === "object" || w === "array")
          );
        }
        function N(w, B) {
          let F = X.name("item"),
            j = (0, VK.checkDataTypes)(
              U,
              F,
              G.opts.strictNumbers,
              VK.DataType.Wrong,
            ),
            I = X.const("indices", d$._`{}`);
          X.for(d$._`;${w}--;`, () => {
            if (
              (X.let(F, d$._`${J}[${w}]`),
              X.if(j, d$._`continue`),
              U.length > 1)
            )
              X.if(d$._`typeof ${F} == "string"`, d$._`${F} += "_"`);
            X.if(d$._`typeof ${I}[${F}] == "number"`, () => {
              (X.assign(B, d$._`${I}[${F}]`),
                $.error(),
                X.assign(H, !1).break());
            }).code(d$._`${I}[${F}] = ${w}`);
          });
        }
        function O(w, B) {
          let F = (0, Tu.useFunc)(X, fu.default),
            j = X.name("outer");
          X.label(j).for(d$._`;${w}--;`, () =>
            X.for(d$._`${B} = ${w}; ${B}--;`, () =>
              X.if(d$._`${F}(${J}[${w}], ${J}[${B}])`, () => {
                ($.error(), X.assign(H, !1).break(j));
              }),
            ),
          );
        }
      },
    };
  pM.default = gu;
});
var nM = M((iM) => {
  Object.defineProperty(iM, "__esModule", { value: !0 });
  var NK = a(),
    uu = W$(),
    mu = lW(),
    lu = {
      message: "must be equal to constant",
      params: ({ schemaCode: $ }) => NK._`{allowedValue: ${$}}`,
    },
    cu = {
      keyword: "const",
      $data: !0,
      error: lu,
      code($) {
        let { gen: X, data: J, $data: W, schemaCode: Q, schema: Y } = $;
        if (W || (Y && typeof Y == "object"))
          $.fail$data(NK._`!${(0, uu.useFunc)(X, mu.default)}(${J}, ${Q})`);
        else $.fail(NK._`${Y} !== ${J}`);
      },
    };
  iM.default = cu;
});
var oM = M((rM) => {
  Object.defineProperty(rM, "__esModule", { value: !0 });
  var bJ = a(),
    du = W$(),
    iu = lW(),
    nu = {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: $ }) => bJ._`{allowedValues: ${$}}`,
    },
    ru = {
      keyword: "enum",
      schemaType: "array",
      $data: !0,
      error: nu,
      code($) {
        let { gen: X, data: J, $data: W, schema: Q, schemaCode: Y, it: z } = $;
        if (!W && Q.length === 0) throw Error("enum must have non-empty array");
        let G = Q.length >= z.opts.loopEnum,
          H,
          U = () =>
            H !== null && H !== void 0
              ? H
              : (H = (0, du.useFunc)(X, iu.default)),
          K;
        if (G || W) ((K = X.let("valid")), $.block$data(K, V));
        else {
          if (!Array.isArray(Q)) throw Error("ajv implementation error");
          let O = X.const("vSchema", Y);
          K = (0, bJ.or)(...Q.map((w, B) => N(O, B)));
        }
        $.pass(K);
        function V() {
          (X.assign(K, !1),
            X.forOf("v", Y, (O) =>
              X.if(bJ._`${U()}(${J}, ${O})`, () => X.assign(K, !0).break()),
            ));
        }
        function N(O, w) {
          let B = Q[w];
          return typeof B === "object" && B !== null
            ? bJ._`${U()}(${J}, ${O}[${w}])`
            : bJ._`${J} === ${B}`;
        }
      },
    };
  rM.default = ru;
});
var aM = M((tM) => {
  Object.defineProperty(tM, "__esModule", { value: !0 });
  var tu = RM(),
    au = EM(),
    su = _M(),
    eu = TM(),
    $m = yM(),
    Xm = hM(),
    Jm = mM(),
    Qm = dM(),
    Wm = nM(),
    Ym = oM(),
    zm = [
      tu.default,
      au.default,
      su.default,
      eu.default,
      $m.default,
      Xm.default,
      Jm.default,
      Qm.default,
      { keyword: "type", schemaType: ["string", "array"] },
      { keyword: "nullable", schemaType: "boolean" },
      Wm.default,
      Ym.default,
    ];
  tM.default = zm;
});
var wK = M((eM) => {
  Object.defineProperty(eM, "__esModule", { value: !0 });
  eM.validateAdditionalItems = void 0;
  var X0 = a(),
    OK = W$(),
    Hm = {
      message: ({ params: { len: $ } }) =>
        X0.str`must NOT have more than ${$} items`,
      params: ({ params: { len: $ } }) => X0._`{limit: ${$}}`,
    },
    Um = {
      keyword: "additionalItems",
      type: "array",
      schemaType: ["boolean", "object"],
      before: "uniqueItems",
      error: Hm,
      code($) {
        let { parentSchema: X, it: J } = $,
          { items: W } = X;
        if (!Array.isArray(W)) {
          (0, OK.checkStrictMode)(
            J,
            '"additionalItems" is ignored when "items" is not an array of schemas',
          );
          return;
        }
        sM($, W);
      },
    };
  function sM($, X) {
    let { gen: J, schema: W, data: Q, keyword: Y, it: z } = $;
    z.items = !0;
    let G = J.const("len", X0._`${Q}.length`);
    if (W === !1)
      ($.setParams({ len: X.length }), $.pass(X0._`${G} <= ${X.length}`));
    else if (typeof W == "object" && !(0, OK.alwaysValidSchema)(z, W)) {
      let U = J.var("valid", X0._`${G} <= ${X.length}`);
      (J.if((0, X0.not)(U), () => H(U)), $.ok(U));
    }
    function H(U) {
      J.forRange("i", X.length, G, (K) => {
        if (
          ($.subschema(
            { keyword: Y, dataProp: K, dataPropType: OK.Type.Num },
            U,
          ),
          !z.allErrors)
        )
          J.if((0, X0.not)(U), () => J.break());
      });
    }
  }
  eM.validateAdditionalItems = sM;
  eM.default = Um;
});
var BK = M((Q2) => {
  Object.defineProperty(Q2, "__esModule", { value: !0 });
  Q2.validateTuple = void 0;
  var X2 = a(),
    cW = W$(),
    Vm = v6(),
    Nm = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "array", "boolean"],
      before: "uniqueItems",
      code($) {
        let { schema: X, it: J } = $;
        if (Array.isArray(X)) return J2($, "additionalItems", X);
        if (((J.items = !0), (0, cW.alwaysValidSchema)(J, X))) return;
        $.ok((0, Vm.validateArray)($));
      },
    };
  function J2($, X, J = $.schema) {
    let { gen: W, parentSchema: Q, data: Y, keyword: z, it: G } = $;
    if ((K(Q), G.opts.unevaluated && J.length && G.items !== !0))
      G.items = cW.mergeEvaluated.items(W, J.length, G.items);
    let H = W.name("valid"),
      U = W.const("len", X2._`${Y}.length`);
    J.forEach((V, N) => {
      if ((0, cW.alwaysValidSchema)(G, V)) return;
      (W.if(X2._`${U} > ${N}`, () =>
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
        (0, cW.checkStrictMode)(G, F, N.strictTuples);
      }
    }
  }
  Q2.validateTuple = J2;
  Q2.default = Nm;
});
var z2 = M((Y2) => {
  Object.defineProperty(Y2, "__esModule", { value: !0 });
  var wm = BK(),
    Bm = {
      keyword: "prefixItems",
      type: "array",
      schemaType: ["array"],
      before: "uniqueItems",
      code: ($) => (0, wm.validateTuple)($, "items"),
    };
  Y2.default = Bm;
});
var U2 = M((H2) => {
  Object.defineProperty(H2, "__esModule", { value: !0 });
  var G2 = a(),
    Dm = W$(),
    Fm = v6(),
    jm = wK(),
    Lm = {
      message: ({ params: { len: $ } }) =>
        G2.str`must NOT have more than ${$} items`,
      params: ({ params: { len: $ } }) => G2._`{limit: ${$}}`,
    },
    Mm = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      error: Lm,
      code($) {
        let { schema: X, parentSchema: J, it: W } = $,
          { prefixItems: Q } = J;
        if (((W.items = !0), (0, Dm.alwaysValidSchema)(W, X))) return;
        if (Q) (0, jm.validateAdditionalItems)($, Q);
        else $.ok((0, Fm.validateArray)($));
      },
    };
  H2.default = Mm;
});
var V2 = M((K2) => {
  Object.defineProperty(K2, "__esModule", { value: !0 });
  var k6 = a(),
    pW = W$(),
    Im = {
      message: ({ params: { min: $, max: X } }) =>
        X === void 0
          ? k6.str`must contain at least ${$} valid item(s)`
          : k6.str`must contain at least ${$} and no more than ${X} valid item(s)`,
      params: ({ params: { min: $, max: X } }) =>
        X === void 0
          ? k6._`{minContains: ${$}}`
          : k6._`{minContains: ${$}, maxContains: ${X}}`,
    },
    Zm = {
      keyword: "contains",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      trackErrors: !0,
      error: Im,
      code($) {
        let { gen: X, schema: J, parentSchema: W, data: Q, it: Y } = $,
          z,
          G,
          { minContains: H, maxContains: U } = W;
        if (Y.opts.next) ((z = H === void 0 ? 1 : H), (G = U));
        else z = 1;
        let K = X.const("len", k6._`${Q}.length`);
        if (($.setParams({ min: z, max: G }), G === void 0 && z === 0)) {
          (0, pW.checkStrictMode)(
            Y,
            '"minContains" == 0 without "maxContains": "contains" keyword ignored',
          );
          return;
        }
        if (G !== void 0 && z > G) {
          ((0, pW.checkStrictMode)(
            Y,
            '"minContains" > "maxContains" is always invalid',
          ),
            $.fail());
          return;
        }
        if ((0, pW.alwaysValidSchema)(Y, J)) {
          let B = k6._`${K} >= ${z}`;
          if (G !== void 0) B = k6._`${B} && ${K} <= ${G}`;
          $.pass(B);
          return;
        }
        Y.items = !0;
        let V = X.name("valid");
        if (G === void 0 && z === 1) O(V, () => X.if(V, () => X.break()));
        else if (z === 0) {
          if ((X.let(V, !0), G !== void 0)) X.if(k6._`${Q}.length > 0`, N);
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
                dataPropType: pW.Type.Num,
                compositeRule: !0,
              },
              B,
            ),
              F());
          });
        }
        function w(B) {
          if ((X.code(k6._`${B}++`), G === void 0))
            X.if(k6._`${B} >= ${z}`, () => X.assign(V, !0).break());
          else if (
            (X.if(k6._`${B} > ${G}`, () => X.assign(V, !1).break()), z === 1)
          )
            X.assign(V, !0);
          else X.if(k6._`${B} >= ${z}`, () => X.assign(V, !0));
        }
      },
    };
  K2.default = Zm;
});
var D2 = M((w2) => {
  Object.defineProperty(w2, "__esModule", { value: !0 });
  w2.validateSchemaDeps = w2.validatePropertyDeps = w2.error = void 0;
  var qK = a(),
    Rm = W$(),
    RJ = v6();
  w2.error = {
    message: ({ params: { property: $, depsCount: X, deps: J } }) => {
      let W = X === 1 ? "property" : "properties";
      return qK.str`must have ${W} ${J} when property ${$} is present`;
    },
    params: ({
      params: { property: $, depsCount: X, deps: J, missingProperty: W },
    }) => qK._`{property: ${$},
    missingProperty: ${W},
    depsCount: ${X},
    deps: ${J}}`,
  };
  var Pm = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: w2.error,
    code($) {
      let [X, J] = Em($);
      (N2($, X), O2($, J));
    },
  };
  function Em({ schema: $ }) {
    let X = {},
      J = {};
    for (let W in $) {
      if (W === "__proto__") continue;
      let Q = Array.isArray($[W]) ? X : J;
      Q[W] = $[W];
    }
    return [X, J];
  }
  function N2($, X = $.schema) {
    let { gen: J, data: W, it: Q } = $;
    if (Object.keys(X).length === 0) return;
    let Y = J.let("missing");
    for (let z in X) {
      let G = X[z];
      if (G.length === 0) continue;
      let H = (0, RJ.propertyInData)(J, W, z, Q.opts.ownProperties);
      if (
        ($.setParams({ property: z, depsCount: G.length, deps: G.join(", ") }),
        Q.allErrors)
      )
        J.if(H, () => {
          for (let U of G) (0, RJ.checkReportMissingProp)($, U);
        });
      else
        (J.if(qK._`${H} && (${(0, RJ.checkMissingProp)($, G, Y)})`),
          (0, RJ.reportMissingProp)($, Y),
          J.else());
    }
  }
  w2.validatePropertyDeps = N2;
  function O2($, X = $.schema) {
    let { gen: J, data: W, keyword: Q, it: Y } = $,
      z = J.name("valid");
    for (let G in X) {
      if ((0, Rm.alwaysValidSchema)(Y, X[G])) continue;
      (J.if(
        (0, RJ.propertyInData)(J, W, G, Y.opts.ownProperties),
        () => {
          let H = $.subschema({ keyword: Q, schemaProp: G }, z);
          $.mergeValidEvaluated(H, z);
        },
        () => J.var(z, !0),
      ),
        $.ok(z));
    }
  }
  w2.validateSchemaDeps = O2;
  w2.default = Pm;
});
var L2 = M((j2) => {
  Object.defineProperty(j2, "__esModule", { value: !0 });
  var F2 = a(),
    vm = W$(),
    km = {
      message: "property name must be valid",
      params: ({ params: $ }) => F2._`{propertyName: ${$.propertyName}}`,
    },
    _m = {
      keyword: "propertyNames",
      type: "object",
      schemaType: ["object", "boolean"],
      error: km,
      code($) {
        let { gen: X, schema: J, data: W, it: Q } = $;
        if ((0, vm.alwaysValidSchema)(Q, J)) return;
        let Y = X.name("valid");
        (X.forIn("key", W, (z) => {
          ($.setParams({ propertyName: z }),
            $.subschema(
              {
                keyword: "propertyNames",
                data: z,
                dataTypes: ["string"],
                propertyName: z,
                compositeRule: !0,
              },
              Y,
            ),
            X.if((0, F2.not)(Y), () => {
              if (($.error(!0), !Q.allErrors)) X.break();
            }));
        }),
          $.ok(Y));
      },
    };
  j2.default = _m;
});
var DK = M((M2) => {
  Object.defineProperty(M2, "__esModule", { value: !0 });
  var dW = v6(),
    o6 = a(),
    Tm = S4(),
    iW = W$(),
    fm = {
      message: "must NOT have additional properties",
      params: ({ params: $ }) =>
        o6._`{additionalProperty: ${$.additionalProperty}}`,
    },
    ym = {
      keyword: "additionalProperties",
      type: ["object"],
      schemaType: ["boolean", "object"],
      allowUndefined: !0,
      trackErrors: !0,
      error: fm,
      code($) {
        let {
          gen: X,
          schema: J,
          parentSchema: W,
          data: Q,
          errsCount: Y,
          it: z,
        } = $;
        if (!Y) throw Error("ajv implementation error");
        let { allErrors: G, opts: H } = z;
        if (
          ((z.props = !0),
          H.removeAdditional !== "all" && (0, iW.alwaysValidSchema)(z, J))
        )
          return;
        let U = (0, dW.allSchemaProperties)(W.properties),
          K = (0, dW.allSchemaProperties)(W.patternProperties);
        (V(), $.ok(o6._`${Y} === ${Tm.default.errors}`));
        function V() {
          X.forIn("key", Q, (F) => {
            if (!U.length && !K.length) w(F);
            else X.if(N(F), () => w(F));
          });
        }
        function N(F) {
          let j;
          if (U.length > 8) {
            let I = (0, iW.schemaRefOrVal)(z, W.properties, "properties");
            j = (0, dW.isOwnProperty)(X, I, F);
          } else if (U.length)
            j = (0, o6.or)(...U.map((I) => o6._`${F} === ${I}`));
          else j = o6.nil;
          if (K.length)
            j = (0, o6.or)(
              j,
              ...K.map((I) => o6._`${(0, dW.usePattern)($, I)}.test(${F})`),
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
          if (typeof J == "object" && !(0, iW.alwaysValidSchema)(z, J)) {
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
            dataPropType: iW.Type.Str,
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
  M2.default = ym;
});
var b2 = M((Z2) => {
  Object.defineProperty(Z2, "__esModule", { value: !0 });
  var hm = wJ(),
    A2 = v6(),
    FK = W$(),
    I2 = DK(),
    um = {
      keyword: "properties",
      type: "object",
      schemaType: "object",
      code($) {
        let { gen: X, schema: J, parentSchema: W, data: Q, it: Y } = $;
        if (
          Y.opts.removeAdditional === "all" &&
          W.additionalProperties === void 0
        )
          I2.default.code(
            new hm.KeywordCxt(Y, I2.default, "additionalProperties"),
          );
        let z = (0, A2.allSchemaProperties)(J);
        for (let V of z) Y.definedProperties.add(V);
        if (Y.opts.unevaluated && z.length && Y.props !== !0)
          Y.props = FK.mergeEvaluated.props(X, (0, FK.toHash)(z), Y.props);
        let G = z.filter((V) => !(0, FK.alwaysValidSchema)(Y, J[V]));
        if (G.length === 0) return;
        let H = X.name("valid");
        for (let V of G) {
          if (U(V)) K(V);
          else {
            if (
              (X.if((0, A2.propertyInData)(X, Q, V, Y.opts.ownProperties)),
              K(V),
              !Y.allErrors)
            )
              X.else().var(H, !0);
            X.endIf();
          }
          ($.it.definedProperties.add(V), $.ok(H));
        }
        function U(V) {
          return (
            Y.opts.useDefaults && !Y.compositeRule && J[V].default !== void 0
          );
        }
        function K(V) {
          $.subschema({ keyword: "properties", schemaProp: V, dataProp: V }, H);
        }
      },
    };
  Z2.default = um;
});
var C2 = M((S2) => {
  Object.defineProperty(S2, "__esModule", { value: !0 });
  var R2 = v6(),
    nW = a(),
    P2 = W$(),
    E2 = W$(),
    lm = {
      keyword: "patternProperties",
      type: "object",
      schemaType: "object",
      code($) {
        let { gen: X, schema: J, data: W, parentSchema: Q, it: Y } = $,
          { opts: z } = Y,
          G = (0, R2.allSchemaProperties)(J),
          H = G.filter((B) => (0, P2.alwaysValidSchema)(Y, J[B]));
        if (
          G.length === 0 ||
          (H.length === G.length && (!Y.opts.unevaluated || Y.props === !0))
        )
          return;
        let U = z.strictSchema && !z.allowMatchingProperties && Q.properties,
          K = X.name("valid");
        if (Y.props !== !0 && !(Y.props instanceof nW.Name))
          Y.props = (0, E2.evaluatedPropsToName)(X, Y.props);
        let { props: V } = Y;
        N();
        function N() {
          for (let B of G) {
            if (U) O(B);
            if (Y.allErrors) w(B);
            else (X.var(K, !0), w(B), X.if(K));
          }
        }
        function O(B) {
          for (let F in U)
            if (new RegExp(B).test(F))
              (0, P2.checkStrictMode)(
                Y,
                `property ${F} matches pattern ${B} (use allowMatchingProperties)`,
              );
        }
        function w(B) {
          X.forIn("key", W, (F) => {
            X.if(nW._`${(0, R2.usePattern)($, B)}.test(${F})`, () => {
              let j = H.includes(B);
              if (!j)
                $.subschema(
                  {
                    keyword: "patternProperties",
                    schemaProp: B,
                    dataProp: F,
                    dataPropType: E2.Type.Str,
                  },
                  K,
                );
              if (Y.opts.unevaluated && V !== !0)
                X.assign(nW._`${V}[${F}]`, !0);
              else if (!j && !Y.allErrors)
                X.if((0, nW.not)(K), () => X.break());
            });
          });
        }
      },
    };
  S2.default = lm;
});
var k2 = M((v2) => {
  Object.defineProperty(v2, "__esModule", { value: !0 });
  var pm = W$(),
    dm = {
      keyword: "not",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      code($) {
        let { gen: X, schema: J, it: W } = $;
        if ((0, pm.alwaysValidSchema)(W, J)) {
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
  v2.default = dm;
});
var x2 = M((_2) => {
  Object.defineProperty(_2, "__esModule", { value: !0 });
  var nm = v6(),
    rm = {
      keyword: "anyOf",
      schemaType: "array",
      trackErrors: !0,
      code: nm.validateUnion,
      error: { message: "must match a schema in anyOf" },
    };
  _2.default = rm;
});
var f2 = M((T2) => {
  Object.defineProperty(T2, "__esModule", { value: !0 });
  var rW = a(),
    tm = W$(),
    am = {
      message: "must match exactly one schema in oneOf",
      params: ({ params: $ }) => rW._`{passingSchemas: ${$.passing}}`,
    },
    sm = {
      keyword: "oneOf",
      schemaType: "array",
      trackErrors: !0,
      error: am,
      code($) {
        let { gen: X, schema: J, parentSchema: W, it: Q } = $;
        if (!Array.isArray(J)) throw Error("ajv implementation error");
        if (Q.opts.discriminator && W.discriminator) return;
        let Y = J,
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
          Y.forEach((K, V) => {
            let N;
            if ((0, tm.alwaysValidSchema)(Q, K)) X.var(H, !0);
            else
              N = $.subschema(
                { keyword: "oneOf", schemaProp: V, compositeRule: !0 },
                H,
              );
            if (V > 0)
              X.if(rW._`${H} && ${z}`)
                .assign(z, !1)
                .assign(G, rW._`[${G}, ${V}]`)
                .else();
            X.if(H, () => {
              if ((X.assign(z, !0), X.assign(G, V), N))
                $.mergeEvaluated(N, rW.Name);
            });
          });
        }
      },
    };
  T2.default = sm;
});
var g2 = M((y2) => {
  Object.defineProperty(y2, "__esModule", { value: !0 });
  var $l = W$(),
    Xl = {
      keyword: "allOf",
      schemaType: "array",
      code($) {
        let { gen: X, schema: J, it: W } = $;
        if (!Array.isArray(J)) throw Error("ajv implementation error");
        let Q = X.name("valid");
        J.forEach((Y, z) => {
          if ((0, $l.alwaysValidSchema)(W, Y)) return;
          let G = $.subschema({ keyword: "allOf", schemaProp: z }, Q);
          ($.ok(Q), $.mergeEvaluated(G));
        });
      },
    };
  y2.default = Xl;
});
var l2 = M((m2) => {
  Object.defineProperty(m2, "__esModule", { value: !0 });
  var oW = a(),
    u2 = W$(),
    Ql = {
      message: ({ params: $ }) => oW.str`must match "${$.ifClause}" schema`,
      params: ({ params: $ }) => oW._`{failingKeyword: ${$.ifClause}}`,
    },
    Wl = {
      keyword: "if",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      error: Ql,
      code($) {
        let { gen: X, parentSchema: J, it: W } = $;
        if (J.then === void 0 && J.else === void 0)
          (0, u2.checkStrictMode)(
            W,
            '"if" without "then" and "else" is ignored',
          );
        let Q = h2(W, "then"),
          Y = h2(W, "else");
        if (!Q && !Y) return;
        let z = X.let("valid", !0),
          G = X.name("_valid");
        if ((H(), $.reset(), Q && Y)) {
          let K = X.let("ifClause");
          ($.setParams({ ifClause: K }), X.if(G, U("then", K), U("else", K)));
        } else if (Q) X.if(G, U("then"));
        else X.if((0, oW.not)(G), U("else"));
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
              X.assign(V, oW._`${K}`);
            else $.setParams({ ifClause: K });
          };
        }
      },
    };
  function h2($, X) {
    let J = $.schema[X];
    return J !== void 0 && !(0, u2.alwaysValidSchema)($, J);
  }
  m2.default = Wl;
});
var p2 = M((c2) => {
  Object.defineProperty(c2, "__esModule", { value: !0 });
  var zl = W$(),
    Gl = {
      keyword: ["then", "else"],
      schemaType: ["object", "boolean"],
      code({ keyword: $, parentSchema: X, it: J }) {
        if (X.if === void 0)
          (0, zl.checkStrictMode)(J, `"${$}" without "if" is ignored`);
      },
    };
  c2.default = Gl;
});
var i2 = M((d2) => {
  Object.defineProperty(d2, "__esModule", { value: !0 });
  var Ul = wK(),
    Kl = z2(),
    Vl = BK(),
    Nl = U2(),
    Ol = V2(),
    wl = D2(),
    Bl = L2(),
    ql = DK(),
    Dl = b2(),
    Fl = C2(),
    jl = k2(),
    Ll = x2(),
    Ml = f2(),
    Al = g2(),
    Il = l2(),
    Zl = p2();
  function bl($ = !1) {
    let X = [
      jl.default,
      Ll.default,
      Ml.default,
      Al.default,
      Il.default,
      Zl.default,
      Bl.default,
      ql.default,
      wl.default,
      Dl.default,
      Fl.default,
    ];
    if ($) X.push(Kl.default, Nl.default);
    else X.push(Ul.default, Vl.default);
    return (X.push(Ol.default), X);
  }
  d2.default = bl;
});
var r2 = M((n2) => {
  Object.defineProperty(n2, "__esModule", { value: !0 });
  var v$ = a(),
    Pl = {
      message: ({ schemaCode: $ }) => v$.str`must match format "${$}"`,
      params: ({ schemaCode: $ }) => v$._`{format: ${$}}`,
    },
    El = {
      keyword: "format",
      type: ["number", "string"],
      schemaType: "string",
      $data: !0,
      error: Pl,
      code($, X) {
        let { gen: J, data: W, $data: Q, schema: Y, schemaCode: z, it: G } = $,
          { opts: H, errSchemaPath: U, schemaEnv: K, self: V } = G;
        if (!H.validateFormats) return;
        if (Q) N();
        else O();
        function N() {
          let w = J.scopeValue("formats", {
              ref: V.formats,
              code: H.code.formats,
            }),
            B = J.const("fDef", v$._`${w}[${z}]`),
            F = J.let("fType"),
            j = J.let("format");
          (J.if(
            v$._`typeof ${B} == "object" && !(${B} instanceof RegExp)`,
            () =>
              J.assign(F, v$._`${B}.type || "string"`).assign(
                j,
                v$._`${B}.validate`,
              ),
            () => J.assign(F, v$._`"string"`).assign(j, B),
          ),
            $.fail$data((0, v$.or)(I(), Z())));
          function I() {
            if (H.strictSchema === !1) return v$.nil;
            return v$._`${z} && !${j}`;
          }
          function Z() {
            let _ = K.$async
                ? v$._`(${B}.async ? await ${j}(${W}) : ${j}(${W}))`
                : v$._`${j}(${W})`,
              T = v$._`(typeof ${j} == "function" ? ${_} : ${j}.test(${W}))`;
            return v$._`${j} && ${j} !== true && ${F} === ${X} && !${T}`;
          }
        }
        function O() {
          let w = V.formats[Y];
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
              return `unknown format "${Y}" ignored in schema at path "${U}"`;
            }
          }
          function Z(T) {
            let O$ =
                T instanceof RegExp
                  ? (0, v$.regexpCode)(T)
                  : H.code.formats
                    ? v$._`${H.code.formats}${(0, v$.getProperty)(Y)}`
                    : void 0,
              x$ = J.scopeValue("formats", { key: Y, ref: T, code: O$ });
            if (typeof T == "object" && !(T instanceof RegExp))
              return [T.type || "string", T.validate, v$._`${x$}.validate`];
            return ["string", T, x$];
          }
          function _() {
            if (typeof w == "object" && !(w instanceof RegExp) && w.async) {
              if (!K.$async) throw Error("async format in sync schema");
              return v$._`await ${j}(${W})`;
            }
            return typeof F == "function"
              ? v$._`${j}(${W})`
              : v$._`${j}.test(${W})`;
          }
        }
      },
    };
  n2.default = El;
});
var t2 = M((o2) => {
  Object.defineProperty(o2, "__esModule", { value: !0 });
  var Cl = r2(),
    vl = [Cl.default];
  o2.default = vl;
});
var e2 = M((a2) => {
  Object.defineProperty(a2, "__esModule", { value: !0 });
  a2.contentVocabulary = a2.metadataVocabulary = void 0;
  a2.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples",
  ];
  a2.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema",
  ];
});
var JA = M((XA) => {
  Object.defineProperty(XA, "__esModule", { value: !0 });
  var xl = ZM(),
    Tl = aM(),
    fl = i2(),
    yl = t2(),
    $A = e2(),
    gl = [
      xl.default,
      Tl.default,
      (0, fl.default)(),
      yl.default,
      $A.metadataVocabulary,
      $A.contentVocabulary,
    ];
  XA.default = gl;
});
var zA = M((WA) => {
  Object.defineProperty(WA, "__esModule", { value: !0 });
  WA.DiscrError = void 0;
  var QA;
  (function ($) {
    (($.Tag = "tag"), ($.Mapping = "mapping"));
  })(QA || (WA.DiscrError = QA = {}));
});
var UA = M((HA) => {
  Object.defineProperty(HA, "__esModule", { value: !0 });
  var F8 = a(),
    jK = zA(),
    GA = kW(),
    ul = BJ(),
    ml = W$(),
    ll = {
      message: ({ params: { discrError: $, tagName: X } }) =>
        $ === jK.DiscrError.Tag
          ? `tag "${X}" must be string`
          : `value of tag "${X}" must be in oneOf`,
      params: ({ params: { discrError: $, tag: X, tagName: J } }) =>
        F8._`{error: ${$}, tag: ${J}, tagValue: ${X}}`,
    },
    cl = {
      keyword: "discriminator",
      type: "object",
      schemaType: "object",
      error: ll,
      code($) {
        let { gen: X, data: J, schema: W, parentSchema: Q, it: Y } = $,
          { oneOf: z } = Q;
        if (!Y.opts.discriminator)
          throw Error("discriminator: requires discriminator option");
        let G = W.propertyName;
        if (typeof G != "string")
          throw Error("discriminator: requires propertyName");
        if (W.mapping) throw Error("discriminator: mapping is not supported");
        if (!z) throw Error("discriminator: requires oneOf keyword");
        let H = X.let("valid", !1),
          U = X.const("tag", F8._`${J}${(0, F8.getProperty)(G)}`);
        (X.if(
          F8._`typeof ${U} == "string"`,
          () => K(),
          () =>
            $.error(!1, { discrError: jK.DiscrError.Tag, tag: U, tagName: G }),
        ),
          $.ok(H));
        function K() {
          let O = N();
          X.if(!1);
          for (let w in O)
            (X.elseIf(F8._`${U} === ${w}`), X.assign(H, V(O[w])));
          (X.else(),
            $.error(!1, {
              discrError: jK.DiscrError.Mapping,
              tag: U,
              tagName: G,
            }),
            X.endIf());
        }
        function V(O) {
          let w = X.name("valid"),
            B = $.subschema({ keyword: "oneOf", schemaProp: O }, w);
          return ($.mergeEvaluated(B, F8.Name), w);
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
              !(0, ml.schemaHasRulesButRef)(T, Y.self.RULES)
            ) {
              let x$ = T.$ref;
              if (
                ((T = GA.resolveRef.call(
                  Y.self,
                  Y.schemaEnv.root,
                  Y.baseId,
                  x$,
                )),
                T instanceof GA.SchemaEnv)
              )
                T = T.schema;
              if (T === void 0)
                throw new ul.default(Y.opts.uriResolver, Y.baseId, x$);
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
  HA.default = cl;
});
var KA = M((gJ$, dl) => {
  dl.exports = {
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
var MK = M((N6, LK) => {
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
  var il = wM(),
    nl = JA(),
    rl = UA(),
    VA = KA(),
    ol = ["/properties"],
    tW = "http://json-schema.org/draft-07/schema";
  class PJ extends il.default {
    _addVocabularies() {
      if (
        (super._addVocabularies(),
        nl.default.forEach(($) => this.addVocabulary($)),
        this.opts.discriminator)
      )
        this.addKeyword(rl.default);
    }
    _addDefaultMetaSchema() {
      if ((super._addDefaultMetaSchema(), !this.opts.meta)) return;
      let $ = this.opts.$data ? this.$dataMetaSchema(VA, ol) : VA;
      (this.addMetaSchema($, tW, !1),
        (this.refs["http://json-schema.org/schema"] = tW));
    }
    defaultMeta() {
      return (this.opts.defaultMeta =
        super.defaultMeta() || (this.getSchema(tW) ? tW : void 0));
    }
  }
  N6.Ajv = PJ;
  LK.exports = N6 = PJ;
  LK.exports.Ajv = PJ;
  Object.defineProperty(N6, "__esModule", { value: !0 });
  N6.default = PJ;
  var tl = wJ();
  Object.defineProperty(N6, "KeywordCxt", {
    enumerable: !0,
    get: function () {
      return tl.KeywordCxt;
    },
  });
  var j8 = a();
  Object.defineProperty(N6, "_", {
    enumerable: !0,
    get: function () {
      return j8._;
    },
  });
  Object.defineProperty(N6, "str", {
    enumerable: !0,
    get: function () {
      return j8.str;
    },
  });
  Object.defineProperty(N6, "stringify", {
    enumerable: !0,
    get: function () {
      return j8.stringify;
    },
  });
  Object.defineProperty(N6, "nil", {
    enumerable: !0,
    get: function () {
      return j8.nil;
    },
  });
  Object.defineProperty(N6, "Name", {
    enumerable: !0,
    get: function () {
      return j8.Name;
    },
  });
  Object.defineProperty(N6, "CodeGen", {
    enumerable: !0,
    get: function () {
      return j8.CodeGen;
    },
  });
  var al = CW();
  Object.defineProperty(N6, "ValidationError", {
    enumerable: !0,
    get: function () {
      return al.default;
    },
  });
  var sl = BJ();
  Object.defineProperty(N6, "MissingRefError", {
    enumerable: !0,
    get: function () {
      return sl.default;
    },
  });
});
var MA = M((jA) => {
  Object.defineProperty(jA, "__esModule", { value: !0 });
  jA.formatNames = jA.fastFormats = jA.fullFormats = void 0;
  function Y4($, X) {
    return { validate: $, compare: X };
  }
  jA.fullFormats = {
    date: Y4(BA, bK),
    time: Y4(IK(!0), RK),
    "date-time": Y4(NA(!0), DA),
    "iso-time": Y4(IK(), qA),
    "iso-date-time": Y4(NA(), FA),
    duration:
      /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
    uri: zc,
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
    regex: Oc,
    uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
    "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
    "json-pointer-uri-fragment":
      /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
    "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
    byte: Gc,
    int32: { type: "number", validate: Kc },
    int64: { type: "number", validate: Vc },
    float: { type: "number", validate: wA },
    double: { type: "number", validate: wA },
    password: !0,
    binary: !0,
  };
  jA.fastFormats = {
    ...jA.fullFormats,
    date: Y4(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, bK),
    time: Y4(
      /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
      RK,
    ),
    "date-time": Y4(
      /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
      DA,
    ),
    "iso-time": Y4(
      /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
      qA,
    ),
    "iso-date-time": Y4(
      /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
      FA,
    ),
    uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
    "uri-reference":
      /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    email:
      /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  };
  jA.formatNames = Object.keys(jA.fullFormats);
  function Xc($) {
    return $ % 4 === 0 && ($ % 100 !== 0 || $ % 400 === 0);
  }
  var Jc = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
    Qc = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function BA($) {
    let X = Jc.exec($);
    if (!X) return !1;
    let J = +X[1],
      W = +X[2],
      Q = +X[3];
    return W >= 1 && W <= 12 && Q >= 1 && Q <= (W === 2 && Xc(J) ? 29 : Qc[W]);
  }
  function bK($, X) {
    if (!($ && X)) return;
    if ($ > X) return 1;
    if ($ < X) return -1;
    return 0;
  }
  var AK = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
  function IK($) {
    return function (J) {
      let W = AK.exec(J);
      if (!W) return !1;
      let Q = +W[1],
        Y = +W[2],
        z = +W[3],
        G = W[4],
        H = W[5] === "-" ? -1 : 1,
        U = +(W[6] || 0),
        K = +(W[7] || 0);
      if (U > 23 || K > 59 || ($ && !G)) return !1;
      if (Q <= 23 && Y <= 59 && z < 60) return !0;
      let V = Y - K * H,
        N = Q - U * H - (V < 0 ? 1 : 0);
      return (N === 23 || N === -1) && (V === 59 || V === -1) && z < 61;
    };
  }
  function RK($, X) {
    if (!($ && X)) return;
    let J = new Date("2020-01-01T" + $).valueOf(),
      W = new Date("2020-01-01T" + X).valueOf();
    if (!(J && W)) return;
    return J - W;
  }
  function qA($, X) {
    if (!($ && X)) return;
    let J = AK.exec($),
      W = AK.exec(X);
    if (!(J && W)) return;
    if ((($ = J[1] + J[2] + J[3]), (X = W[1] + W[2] + W[3]), $ > X)) return 1;
    if ($ < X) return -1;
    return 0;
  }
  var ZK = /t|\s/i;
  function NA($) {
    let X = IK($);
    return function (W) {
      let Q = W.split(ZK);
      return Q.length === 2 && BA(Q[0]) && X(Q[1]);
    };
  }
  function DA($, X) {
    if (!($ && X)) return;
    let J = new Date($).valueOf(),
      W = new Date(X).valueOf();
    if (!(J && W)) return;
    return J - W;
  }
  function FA($, X) {
    if (!($ && X)) return;
    let [J, W] = $.split(ZK),
      [Q, Y] = X.split(ZK),
      z = bK(J, Q);
    if (z === void 0) return;
    return z || RK(W, Y);
  }
  var Wc = /\/|:/,
    Yc =
      /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function zc($) {
    return Wc.test($) && Yc.test($);
  }
  var OA = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function Gc($) {
    return ((OA.lastIndex = 0), OA.test($));
  }
  var Hc = -2147483648,
    Uc = 2147483647;
  function Kc($) {
    return Number.isInteger($) && $ <= Uc && $ >= Hc;
  }
  function Vc($) {
    return Number.isInteger($);
  }
  function wA() {
    return !0;
  }
  var Nc = /[^\\]\\Z/;
  function Oc($) {
    if (Nc.test($)) return !1;
    try {
      return (new RegExp($), !0);
    } catch (X) {
      return !1;
    }
  }
});
var IA = M((AA) => {
  Object.defineProperty(AA, "__esModule", { value: !0 });
  AA.formatLimitDefinition = void 0;
  var Bc = MK(),
    t6 = a(),
    w1 = t6.operators,
    aW = {
      formatMaximum: { okStr: "<=", ok: w1.LTE, fail: w1.GT },
      formatMinimum: { okStr: ">=", ok: w1.GTE, fail: w1.LT },
      formatExclusiveMaximum: { okStr: "<", ok: w1.LT, fail: w1.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: w1.GT, fail: w1.LTE },
    },
    qc = {
      message: ({ keyword: $, schemaCode: X }) =>
        t6.str`should be ${aW[$].okStr} ${X}`,
      params: ({ keyword: $, schemaCode: X }) =>
        t6._`{comparison: ${aW[$].okStr}, limit: ${X}}`,
    };
  AA.formatLimitDefinition = {
    keyword: Object.keys(aW),
    type: "string",
    schemaType: "string",
    $data: !0,
    error: qc,
    code($) {
      let { gen: X, data: J, schemaCode: W, keyword: Q, it: Y } = $,
        { opts: z, self: G } = Y;
      if (!z.validateFormats) return;
      let H = new Bc.KeywordCxt(Y, G.RULES.all.format.definition, "format");
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
        return t6._`${N}.compare(${J}, ${W}) ${aW[Q].fail} 0`;
      }
    },
    dependencies: ["format"],
  };
  var Dc = ($) => {
    return ($.addKeyword(AA.formatLimitDefinition), $);
  };
  AA.default = Dc;
});
var PA = M((EJ, RA) => {
  Object.defineProperty(EJ, "__esModule", { value: !0 });
  var L8 = MA(),
    jc = IA(),
    SK = a(),
    ZA = new SK.Name("fullFormats"),
    Lc = new SK.Name("fastFormats"),
    CK = ($, X = { keywords: !0 }) => {
      if (Array.isArray(X)) return (bA($, X, L8.fullFormats, ZA), $);
      let [J, W] =
          X.mode === "fast" ? [L8.fastFormats, Lc] : [L8.fullFormats, ZA],
        Q = X.formats || L8.formatNames;
      if ((bA($, Q, J, W), X.keywords)) (0, jc.default)($);
      return $;
    };
  CK.get = ($, X = "full") => {
    let W = (X === "fast" ? L8.fastFormats : L8.fullFormats)[$];
    if (!W) throw Error(`Unknown format "${$}"`);
    return W;
  };
  function bA($, X, J, W) {
    var Q, Y;
    ((Q = (Y = $.opts.code).formats) !== null && Q !== void 0) ||
      (Y.formats = SK._`require("ajv-formats/dist/formats").${W}`);
    for (let z of X) $.addFormat(z, J[z]);
  }
  RA.exports = EJ = CK;
  Object.defineProperty(EJ, "__esModule", { value: !0 });
  EJ.default = CK;
});
import { execFile as _c } from "child_process";
import { randomUUID as cK } from "crypto";
import { createReadStream as xc, realpathSync as Tc } from "fs";
import {
  copyFile as fc,
  mkdir as hK,
  readdir as yc,
  readFile as rA,
  rm as gc,
  writeFile as oA,
} from "fs/promises";
import { createRequire as hc } from "module";
import { homedir as uK, tmpdir as uc } from "os";
import {
  dirname as cA,
  isAbsolute as tA,
  join as A6,
  relative as aA,
  resolve as CJ,
  sep as pK,
} from "path";
import { createInterface as mc } from "readline";
import { fileURLToPath as lc } from "url";
import { setMaxListeners as CI } from "events";
var vI = 50;
function z0($ = vI) {
  let X = new AbortController();
  return (CI($, X.signal), X);
}
function _J($, X, J) {
  return new Promise((W, Q) => {
    if (X?.aborted) {
      if (J?.throwOnAbort || J?.abortError)
        Q(J.abortError?.() ?? Error("aborted"));
      else W();
      return;
    }
    let Y = setTimeout(
      (G, H, U) => {
        (G?.removeEventListener("abort", H), U());
      },
      $,
      X,
      z,
      W,
    );
    function z() {
      if ((clearTimeout(Y), J?.throwOnAbort || J?.abortError))
        Q(J.abortError?.() ?? Error("aborted"));
      else W();
    }
    if ((X?.addEventListener("abort", z, { once: !0 }), J?.unref)) Y.unref();
  });
}
function kI($, X) {
  $(Error(X));
}
function H4($, X, J) {
  let W,
    Q = new Promise((Y, z) => {
      if (((W = setTimeout(kI, X, z, J)), typeof W === "object")) W.unref?.();
    });
  return Promise.race([$, Q]).finally(() => {
    if (W !== void 0) clearTimeout(W);
  });
}
import { spawn as ER } from "child_process";
import { createInterface as SR } from "readline";
var _I = [
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
  xI = [
    "clear",
    "resume",
    "logout",
    "prompt_input_exit",
    "other",
    "bypass_permissions_disabled",
  ],
  TI = "__SYSTEM_PROMPT_DYNAMIC_BOUNDARY__";
var fI = /^(?:\s*<[a-z][\w-]*[\s>]|\[Request interrupted by user[^\]]*\])/,
  yI = /<command-name>(.*?)<\/command-name>/;
function P8($, X) {
  if ($.type !== "user") return;
  if ($.isMeta === !0 || $.isCompactSummary === !0) return;
  let J = $.message;
  if (!J) return;
  let W = J.content,
    Q = [];
  if (typeof W === "string") Q.push(W);
  else if (Array.isArray(W))
    for (let Y of W) {
      if (!Y || typeof Y !== "object") continue;
      if (Y.type === "tool_result") return;
      if (Y.type === "text" && typeof Y.text === "string") Q.push(Y.text);
    }
  for (let Y of Q) {
    let z = Y.replaceAll(
      `
`,
      " ",
    ).trim();
    if (!z) continue;
    let G = yI.exec(z);
    if (G) {
      if (!X.commandFallback) X.commandFallback = G[1];
      continue;
    }
    let H = /<bash-input>([\s\S]*?)<\/bash-input>/.exec(z);
    if (H) return `! ${H[1].trim()}`;
    if (fI.test(z)) continue;
    if (z.length > 200) z = z.slice(0, 200).trim() + "…";
    return z;
  }
  return;
}
var gI = {
  customTitle: "customTitle",
  aiTitle: "aiTitle",
  lastPrompt: "lastPrompt",
  summary: "summaryHint",
  gitBranch: "gitBranch",
};
function xJ($, X, J, W) {
  let Q = W?.mtime ?? $?.mtime ?? 0,
    Y =
      $ !== void 0
        ? { sessionId: $.sessionId, mtime: Q, data: { ...$.data } }
        : { sessionId: X.sessionId, mtime: Q, data: {} },
    z = Y.data;
  for (let G of J) {
    let H = uI(G.timestamp);
    if (z.isSidechain === void 0) z.isSidechain = G.isSidechain === !0;
    if (z.createdAt === void 0 && H !== void 0) z.createdAt = H;
    if (z.cwd === void 0) {
      let U = G.cwd;
      if (typeof U === "string" && U) z.cwd = U;
    }
    mI(z, G);
    for (let [U, K] of Object.entries(gI)) {
      let V = G[U];
      if (typeof V === "string") z[K] = V;
    }
    if (G.type === "tag") {
      let U = G.tag;
      if (typeof U === "string" && U) z.tag = U;
      else delete z.tag;
    }
  }
  return Y;
}
function XV($, X) {
  let J = $.data;
  if (J.isSidechain === !0) return null;
  let W =
      x4(J.firstPromptLocked === !0 ? J.firstPrompt : J.commandFallback) ||
      void 0,
    Q = x4(J.customTitle) || x4(J.aiTitle) || void 0,
    Y = Q || x4(J.lastPrompt) || x4(J.summaryHint) || W;
  if (!Y) return null;
  return {
    sessionId: $.sessionId,
    summary: Y,
    lastModified: $.mtime,
    fileSize: void 0,
    customTitle: Q,
    firstPrompt: W,
    gitBranch: x4(J.gitBranch) || void 0,
    cwd: x4(J.cwd) || X || void 0,
    tag: x4(J.tag) || void 0,
    createdAt: hI(J.createdAt),
  };
}
function x4($) {
  return typeof $ === "string" ? $ : void 0;
}
function hI($) {
  return typeof $ === "number" ? $ : void 0;
}
function uI($) {
  if (typeof $ !== "string") return;
  let X = Date.parse($);
  return Number.isNaN(X) ? void 0 : X;
}
function mI($, X) {
  if ($.firstPromptLocked) return;
  let J = { commandFallback: $.commandFallback ?? "" },
    W = P8(X, J);
  if (J.commandFallback && !$.commandFallback)
    $.commandFallback = J.commandFallback;
  if (W !== void 0) (($.firstPrompt = W), ($.firstPromptLocked = !0));
}
class zY {
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
      W = this.store.get(J) ?? [];
    (W.push(...X), this.store.set(J, W));
    let Q = Math.max(Date.now(), this.lastMtime + 1);
    if (((this.lastMtime = Q), this.mtimes.set(J, Q), $.subpath === void 0)) {
      let Y = `${$.projectKey}/${$.sessionId}`,
        z = xJ(this.summaries.get(Y), $, X, { mtime: Q });
      this.summaries.set(Y, z);
    }
  }
  async load($) {
    let X = this.keyToString($);
    return this.store.get(X) ?? null;
  }
  async listSessions($) {
    let X = [],
      J = $ + "/";
    for (let [W] of this.store)
      if (W.startsWith(J)) {
        let Q = W.slice(J.length);
        if (!Q.includes("/"))
          X.push({ sessionId: Q, mtime: this.mtimes.get(W) ?? 0 });
      }
    return X;
  }
  async listSessionSummaries($) {
    let X = [],
      J = $ + "/";
    for (let [W, Q] of this.summaries) if (W.startsWith(J)) X.push(Q);
    return X;
  }
  async delete($) {
    let X = this.keyToString($);
    if ((this.store.delete(X), this.mtimes.delete(X), $.subpath === void 0)) {
      this.summaries.delete(`${$.projectKey}/${$.sessionId}`);
      let J = `${$.projectKey}/${$.sessionId}/`;
      for (let W of this.store.keys())
        if (W.startsWith(J)) (this.store.delete(W), this.mtimes.delete(W));
    }
  }
  async listSubkeys($) {
    let X = `${$.projectKey}/${$.sessionId}/`,
      J = [];
    for (let W of this.store.keys())
      if (W.startsWith(X)) J.push(W.slice(X.length));
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
class t$ extends Error {}
function G0() {
  return process.versions.bun !== void 0;
}
function J6($) {
  if (!$) return !1;
  if (typeof $ === "boolean") return $;
  let X = String($).toLowerCase().trim();
  return ["1", "true", "yes", "on"].includes(X);
}
function j1() {
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
      for (let W of $)
        try {
          W(...X);
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
var cI =
    typeof global == "object" && global && global.Object === Object && global,
  JV = cI;
var pI = typeof self == "object" && self && self.Object === Object && self,
  dI = JV || pI || Function("return this")(),
  H0 = dI;
var iI = H0.Symbol,
  U0 = iI;
var QV = Object.prototype,
  nI = QV.hasOwnProperty,
  rI = QV.toString,
  E8 = U0 ? U0.toStringTag : void 0;
function oI($) {
  var X = nI.call($, E8),
    J = $[E8];
  try {
    $[E8] = void 0;
    var W = !0;
  } catch (Y) {}
  var Q = rI.call($);
  if (W)
    if (X) $[E8] = J;
    else delete $[E8];
  return Q;
}
var WV = oI;
var tI = Object.prototype,
  aI = tI.toString;
function sI($) {
  return aI.call($);
}
var YV = sI;
var eI = "[object Null]",
  $Z = "[object Undefined]",
  zV = U0 ? U0.toStringTag : void 0;
function XZ($) {
  if ($ == null) return $ === void 0 ? $Z : eI;
  return zV && zV in Object($) ? WV($) : YV($);
}
var GV = XZ;
function JZ($) {
  var X = typeof $;
  return $ != null && (X == "object" || X == "function");
}
var TJ = JZ;
var QZ = "[object AsyncFunction]",
  WZ = "[object Function]",
  YZ = "[object GeneratorFunction]",
  zZ = "[object Proxy]";
function GZ($) {
  if (!TJ($)) return !1;
  var X = GV($);
  return X == WZ || X == YZ || X == QZ || X == zZ;
}
var HV = GZ;
var HZ = H0["__core-js_shared__"],
  fJ = HZ;
var UV = (function () {
  var $ = /[^.]+$/.exec((fJ && fJ.keys && fJ.keys.IE_PROTO) || "");
  return $ ? "Symbol(src)_1." + $ : "";
})();
function UZ($) {
  return !!UV && UV in $;
}
var KV = UZ;
var KZ = Function.prototype,
  VZ = KZ.toString;
function NZ($) {
  if ($ != null) {
    try {
      return VZ.call($);
    } catch (X) {}
    try {
      return $ + "";
    } catch (X) {}
  }
  return "";
}
var VV = NZ;
var OZ = /[\\^$.*+?()[\]{}|]/g,
  wZ = /^\[object .+?Constructor\]$/,
  BZ = Function.prototype,
  qZ = Object.prototype,
  DZ = BZ.toString,
  FZ = qZ.hasOwnProperty,
  jZ = RegExp(
    "^" +
      DZ.call(FZ)
        .replace(OZ, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?",
        ) +
      "$",
  );
function LZ($) {
  if (!TJ($) || KV($)) return !1;
  var X = HV($) ? jZ : wZ;
  return X.test(VV($));
}
var NV = LZ;
function MZ($, X) {
  return $ == null ? void 0 : $[X];
}
var OV = MZ;
function AZ($, X) {
  var J = OV($, X);
  return NV(J) ? J : void 0;
}
var yJ = AZ;
var IZ = yJ(Object, "create"),
  U4 = IZ;
function ZZ() {
  ((this.__data__ = U4 ? U4(null) : {}), (this.size = 0));
}
var wV = ZZ;
function bZ($) {
  var X = this.has($) && delete this.__data__[$];
  return ((this.size -= X ? 1 : 0), X);
}
var BV = bZ;
var RZ = "__lodash_hash_undefined__",
  PZ = Object.prototype,
  EZ = PZ.hasOwnProperty;
function SZ($) {
  var X = this.__data__;
  if (U4) {
    var J = X[$];
    return J === RZ ? void 0 : J;
  }
  return EZ.call(X, $) ? X[$] : void 0;
}
var qV = SZ;
var CZ = Object.prototype,
  vZ = CZ.hasOwnProperty;
function kZ($) {
  var X = this.__data__;
  return U4 ? X[$] !== void 0 : vZ.call(X, $);
}
var DV = kZ;
var _Z = "__lodash_hash_undefined__";
function xZ($, X) {
  var J = this.__data__;
  return (
    (this.size += this.has($) ? 0 : 1),
    (J[$] = U4 && X === void 0 ? _Z : X),
    this
  );
}
var FV = xZ;
function K0($) {
  var X = -1,
    J = $ == null ? 0 : $.length;
  this.clear();
  while (++X < J) {
    var W = $[X];
    this.set(W[0], W[1]);
  }
}
K0.prototype.clear = wV;
K0.prototype.delete = BV;
K0.prototype.get = qV;
K0.prototype.has = DV;
K0.prototype.set = FV;
var GY = K0;
function TZ() {
  ((this.__data__ = []), (this.size = 0));
}
var jV = TZ;
function fZ($, X) {
  return $ === X || ($ !== $ && X !== X);
}
var LV = fZ;
function yZ($, X) {
  var J = $.length;
  while (J--) if (LV($[J][0], X)) return J;
  return -1;
}
var T4 = yZ;
var gZ = Array.prototype,
  hZ = gZ.splice;
function uZ($) {
  var X = this.__data__,
    J = T4(X, $);
  if (J < 0) return !1;
  var W = X.length - 1;
  if (J == W) X.pop();
  else hZ.call(X, J, 1);
  return (--this.size, !0);
}
var MV = uZ;
function mZ($) {
  var X = this.__data__,
    J = T4(X, $);
  return J < 0 ? void 0 : X[J][1];
}
var AV = mZ;
function lZ($) {
  return T4(this.__data__, $) > -1;
}
var IV = lZ;
function cZ($, X) {
  var J = this.__data__,
    W = T4(J, $);
  if (W < 0) (++this.size, J.push([$, X]));
  else J[W][1] = X;
  return this;
}
var ZV = cZ;
function V0($) {
  var X = -1,
    J = $ == null ? 0 : $.length;
  this.clear();
  while (++X < J) {
    var W = $[X];
    this.set(W[0], W[1]);
  }
}
V0.prototype.clear = jV;
V0.prototype.delete = MV;
V0.prototype.get = AV;
V0.prototype.has = IV;
V0.prototype.set = ZV;
var bV = V0;
var pZ = yJ(H0, "Map"),
  RV = pZ;
function dZ() {
  ((this.size = 0),
    (this.__data__ = {
      hash: new GY(),
      map: new (RV || bV)(),
      string: new GY(),
    }));
}
var PV = dZ;
function iZ($) {
  var X = typeof $;
  return X == "string" || X == "number" || X == "symbol" || X == "boolean"
    ? $ !== "__proto__"
    : $ === null;
}
var EV = iZ;
function nZ($, X) {
  var J = $.__data__;
  return EV(X) ? J[typeof X == "string" ? "string" : "hash"] : J.map;
}
var f4 = nZ;
function rZ($) {
  var X = f4(this, $).delete($);
  return ((this.size -= X ? 1 : 0), X);
}
var SV = rZ;
function oZ($) {
  return f4(this, $).get($);
}
var CV = oZ;
function tZ($) {
  return f4(this, $).has($);
}
var vV = tZ;
function aZ($, X) {
  var J = f4(this, $),
    W = J.size;
  return (J.set($, X), (this.size += J.size == W ? 0 : 1), this);
}
var kV = aZ;
function N0($) {
  var X = -1,
    J = $ == null ? 0 : $.length;
  this.clear();
  while (++X < J) {
    var W = $[X];
    this.set(W[0], W[1]);
  }
}
N0.prototype.clear = PV;
N0.prototype.delete = SV;
N0.prototype.get = CV;
N0.prototype.has = vV;
N0.prototype.set = kV;
var HY = N0;
var sZ = "Expected a function";
function UY($, X) {
  if (typeof $ != "function" || (X != null && typeof X != "function"))
    throw TypeError(sZ);
  var J = function () {
    var W = arguments,
      Q = X ? X.apply(this, W) : W[0],
      Y = J.cache;
    if (Y.has(Q)) return Y.get(Q);
    var z = $.apply(this, W);
    return ((J.cache = Y.set(Q, z) || Y), z);
  };
  return ((J.cache = new (UY.Cache || HY)()), J);
}
UY.Cache = HY;
var f6 = UY;
import { homedir as eZ } from "os";
import { join as $b } from "path";
var y4 = f6(
  () => {
    return (process.env.CLAUDE_CONFIG_DIR ?? $b(eZ(), ".claude")).normalize(
      "NFC",
    );
  },
  () => process.env.CLAUDE_CONFIG_DIR,
);
function v($, X, J, W, Q) {
  if (W === "m") throw TypeError("Private method is not writable");
  if (W === "a" && !Q)
    throw TypeError("Private accessor was defined without a setter");
  if (typeof X === "function" ? $ !== X || !Q : !X.has($))
    throw TypeError(
      "Cannot write private member to an object whose class did not declare it",
    );
  return (W === "a" ? Q.call($, J) : Q ? (Q.value = J) : X.set($, J), J);
}
function D($, X, J, W) {
  if (J === "a" && !W)
    throw TypeError("Private accessor was defined without a getter");
  if (typeof X === "function" ? $ !== X || !W : !X.has($))
    throw TypeError(
      "Cannot read private member from an object whose class did not declare it",
    );
  return J === "m" ? W : J === "a" ? W.call($) : W ? W.value : X.get($);
}
var KY = function () {
  let { crypto: $ } = globalThis;
  if ($?.randomUUID) return ((KY = $.randomUUID.bind($)), $.randomUUID());
  let X = new Uint8Array(1),
    J = $ ? () => $.getRandomValues(X)[0] : () => (Math.random() * 255) & 255;
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (W) =>
    (+W ^ (J() & (15 >> (+W / 4)))).toString(16),
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
var S8 = ($) => {
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
  constructor($, X, J, W, Q) {
    super(`${T$.makeMessage($, X, J)}`);
    ((this.status = $),
      (this.headers = W),
      (this.requestID = W?.get("request-id")),
      (this.error = X),
      (this.type = Q ?? null));
  }
  static makeMessage($, X, J) {
    let W = X?.message
      ? typeof X.message === "string"
        ? X.message
        : JSON.stringify(X.message)
      : X
        ? JSON.stringify(X)
        : J;
    if ($ && W) return `${$} ${W}`;
    if ($) return `${$} status code (no body)`;
    if (W) return W;
    return "(no status code or body)";
  }
  static generate($, X, J, W) {
    if (!$ || !W) return new L1({ message: J, cause: S8(X) });
    let Q = X,
      Y = Q?.error?.type;
    if ($ === 400) return new v8($, Q, J, W, Y);
    if ($ === 401) return new k8($, Q, J, W, Y);
    if ($ === 403) return new _8($, Q, J, W, Y);
    if ($ === 404) return new x8($, Q, J, W, Y);
    if ($ === 409) return new T8($, Q, J, W, Y);
    if ($ === 422) return new f8($, Q, J, W, Y);
    if ($ === 429) return new y8($, Q, J, W, Y);
    if ($ >= 500) return new g8($, Q, J, W, Y);
    return new T$($, Q, J, W, Y);
  }
}
class m$ extends T$ {
  constructor({ message: $ } = {}) {
    super(void 0, void 0, $ || "Request was aborted.", void 0);
  }
}
class L1 extends T$ {
  constructor({ message: $, cause: X }) {
    super(void 0, void 0, $ || "Connection error.", void 0);
    if (X) this.cause = X;
  }
}
class C8 extends L1 {
  constructor({ message: $ } = {}) {
    super({ message: $ ?? "Request timed out." });
  }
}
class v8 extends T$ {}
class k8 extends T$ {}
class _8 extends T$ {}
class x8 extends T$ {}
class T8 extends T$ {}
class f8 extends T$ {}
class y8 extends T$ {}
class g8 extends T$ {}
var Jb = /^[a-z][a-z0-9+.-]*:/i,
  _V = ($) => {
    return Jb.test($);
  },
  VY = ($) => ((VY = Array.isArray), VY($)),
  NY = VY;
function gJ($) {
  if (typeof $ !== "object") return {};
  return $ ?? {};
}
function OY($) {
  if (!$) return !0;
  for (let X in $) return !1;
  return !0;
}
function xV($, X) {
  return Object.prototype.hasOwnProperty.call($, X);
}
var TV = ($, X) => {
  if (typeof X !== "number" || !Number.isInteger(X))
    throw new f(`${$} must be an integer`);
  if (X < 0) throw new f(`${$} must be a positive integer`);
  return X;
};
var hJ = ($) => {
  try {
    return JSON.parse($);
  } catch (X) {
    return;
  }
};
var fV = ($) => new Promise((X) => setTimeout(X, $));
var g4 = "0.81.0";
var uV = () => {
  return (
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof navigator < "u"
  );
};
function Qb() {
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
var Wb = () => {
  let $ = Qb();
  if ($ === "deno")
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": g4,
      "X-Stainless-OS": gV(Deno.build.os),
      "X-Stainless-Arch": yV(Deno.build.arch),
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
      "X-Stainless-OS": gV(globalThis.process.platform ?? "unknown"),
      "X-Stainless-Arch": yV(globalThis.process.arch ?? "unknown"),
      "X-Stainless-Runtime": "node",
      "X-Stainless-Runtime-Version": globalThis.process.version ?? "unknown",
    };
  let X = Yb();
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
function Yb() {
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
    let W = J.exec(navigator.userAgent);
    if (W) {
      let Q = W[1] || 0,
        Y = W[2] || 0,
        z = W[3] || 0;
      return { browser: X, version: `${Q}.${Y}.${z}` };
    }
  }
  return null;
}
var yV = ($) => {
    if ($ === "x32") return "x32";
    if ($ === "x86_64" || $ === "x64") return "x64";
    if ($ === "arm") return "arm";
    if ($ === "aarch64" || $ === "arm64") return "arm64";
    if ($) return `other:${$}`;
    return "unknown";
  },
  gV = ($) => {
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
  hV,
  mV = () => {
    return hV ?? (hV = Wb());
  };
function lV() {
  if (typeof fetch < "u") return fetch;
  throw Error(
    "`fetch` is not defined as a global; Either pass `fetch` to the client, `new Anthropic({ fetch })` or polyfill the global, `globalThis.fetch = fetch`",
  );
}
function wY(...$) {
  let X = globalThis.ReadableStream;
  if (typeof X > "u")
    throw Error(
      "`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`",
    );
  return new X(...$);
}
function uJ($) {
  let X =
    Symbol.asyncIterator in $
      ? $[Symbol.asyncIterator]()
      : $[Symbol.iterator]();
  return wY({
    start() {},
    async pull(J) {
      let { done: W, value: Q } = await X.next();
      if (W) J.close();
      else J.enqueue(Q);
    },
    async cancel() {
      await X.return?.();
    },
  });
}
function h8($) {
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
async function cV($) {
  if ($ === null || typeof $ !== "object") return;
  if ($[Symbol.asyncIterator]) {
    await $[Symbol.asyncIterator]().return?.();
    return;
  }
  let X = $.getReader(),
    J = X.cancel();
  (X.releaseLock(), await J);
}
var pV = ({ headers: $, body: X }) => {
  return {
    bodyHeaders: { "content-type": "application/json" },
    body: JSON.stringify(X),
  };
};
function dV($) {
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
function rV($) {
  let X = 0;
  for (let Q of $) X += Q.length;
  let J = new Uint8Array(X),
    W = 0;
  for (let Q of $) (J.set(Q, W), (W += Q.length));
  return J;
}
var iV;
function u8($) {
  let X;
  return (iV ?? ((X = new globalThis.TextEncoder()), (iV = X.encode.bind(X))))(
    $,
  );
}
var nV;
function BY($) {
  let X;
  return (nV ?? ((X = new globalThis.TextDecoder()), (nV = X.decode.bind(X))))(
    $,
  );
}
var B6, q6;
class h4 {
  constructor() {
    (B6.set(this, void 0),
      q6.set(this, void 0),
      v(this, B6, new Uint8Array(), "f"),
      v(this, q6, null, "f"));
  }
  decode($) {
    if ($ == null) return [];
    let X =
      $ instanceof ArrayBuffer
        ? new Uint8Array($)
        : typeof $ === "string"
          ? u8($)
          : $;
    v(this, B6, rV([D(this, B6, "f"), X]), "f");
    let J = [],
      W;
    while ((W = Hb(D(this, B6, "f"), D(this, q6, "f"))) != null) {
      if (W.carriage && D(this, q6, "f") == null) {
        v(this, q6, W.index, "f");
        continue;
      }
      if (
        D(this, q6, "f") != null &&
        (W.index !== D(this, q6, "f") + 1 || W.carriage)
      ) {
        (J.push(BY(D(this, B6, "f").subarray(0, D(this, q6, "f") - 1))),
          v(this, B6, D(this, B6, "f").subarray(D(this, q6, "f")), "f"),
          v(this, q6, null, "f"));
        continue;
      }
      let Q = D(this, q6, "f") !== null ? W.preceding - 1 : W.preceding,
        Y = BY(D(this, B6, "f").subarray(0, Q));
      (J.push(Y),
        v(this, B6, D(this, B6, "f").subarray(W.index), "f"),
        v(this, q6, null, "f"));
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
function Hb($, X) {
  for (let Q = X ?? 0; Q < $.length; Q++) {
    if ($[Q] === 10) return { preceding: Q, index: Q + 1, carriage: !1 };
    if ($[Q] === 13) return { preceding: Q, index: Q + 1, carriage: !0 };
  }
  return null;
}
function oV($) {
  for (let W = 0; W < $.length - 1; W++) {
    if ($[W] === 10 && $[W + 1] === 10) return W + 2;
    if ($[W] === 13 && $[W + 1] === 13) return W + 2;
    if (
      $[W] === 13 &&
      $[W + 1] === 10 &&
      W + 3 < $.length &&
      $[W + 2] === 13 &&
      $[W + 3] === 10
    )
      return W + 4;
  }
  return -1;
}
var lJ = { off: 0, error: 200, warn: 300, info: 400, debug: 500 },
  qY = ($, X, J) => {
    if (!$) return;
    if (xV(lJ, $)) return $;
    h$(J).warn(
      `${X} was set to ${JSON.stringify($)}, expected one of ${JSON.stringify(Object.keys(lJ))}`,
    );
    return;
  };
function m8() {}
function mJ($, X, J) {
  if (!X || lJ[$] > lJ[J]) return m8;
  else return X[$].bind(X);
}
var Ub = { error: m8, warn: m8, info: m8, debug: m8 },
  tV = new WeakMap();
function h$($) {
  let X = $.logger,
    J = $.logLevel ?? "off";
  if (!X) return Ub;
  let W = tV.get(X);
  if (W && W[0] === J) return W[1];
  let Q = {
    error: mJ("error", X, J),
    warn: mJ("warn", X, J),
    info: mJ("info", X, J),
    debug: mJ("debug", X, J),
  };
  return (tV.set(X, [J, Q]), Q);
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
var l8;
class D6 {
  constructor($, X, J) {
    ((this.iterator = $),
      l8.set(this, void 0),
      (this.controller = X),
      v(this, l8, J, "f"));
  }
  static fromSSEResponse($, X, J) {
    let W = !1,
      Q = J ? h$(J) : console;
    async function* Y() {
      if (W)
        throw new f(
          "Cannot iterate over a consumed stream, use `.tee()` to split the stream.",
        );
      W = !0;
      let z = !1;
      try {
        for await (let G of Kb($, X)) {
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
            let H = hJ(G.data) ?? G.data,
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
    return new D6(Y, X, J);
  }
  static fromReadableStream($, X, J) {
    let W = !1;
    async function* Q() {
      let z = new h4(),
        G = h8($);
      for await (let H of G) for (let U of z.decode(H)) yield U;
      for (let H of z.flush()) yield H;
    }
    async function* Y() {
      if (W)
        throw new f(
          "Cannot iterate over a consumed stream, use `.tee()` to split the stream.",
        );
      W = !0;
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
    return new D6(Y, X, J);
  }
  [((l8 = new WeakMap()), Symbol.asyncIterator)]() {
    return this.iterator();
  }
  tee() {
    let $ = [],
      X = [],
      J = this.iterator(),
      W = (Q) => {
        return {
          next: () => {
            if (Q.length === 0) {
              let Y = J.next();
              ($.push(Y), X.push(Y));
            }
            return Q.shift();
          },
        };
      };
    return [
      new D6(() => W($), this.controller, D(this, l8, "f")),
      new D6(() => W(X), this.controller, D(this, l8, "f")),
    ];
  }
  toReadableStream() {
    let $ = this,
      X;
    return wY({
      async start() {
        X = $[Symbol.asyncIterator]();
      },
      async pull(J) {
        try {
          let { value: W, done: Q } = await X.next();
          if (Q) return J.close();
          let Y = u8(
            JSON.stringify(W) +
              `
`,
          );
          J.enqueue(Y);
        } catch (W) {
          J.error(W);
        }
      },
      async cancel() {
        await X.return?.();
      },
    });
  }
}
async function* Kb($, X) {
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
  let J = new aV(),
    W = new h4(),
    Q = h8($.body);
  for await (let Y of Vb(Q))
    for (let z of W.decode(Y)) {
      let G = J.decode(z);
      if (G) yield G;
    }
  for (let Y of W.flush()) {
    let z = J.decode(Y);
    if (z) yield z;
  }
}
async function* Vb($) {
  let X = new Uint8Array();
  for await (let J of $) {
    if (J == null) continue;
    let W =
        J instanceof ArrayBuffer
          ? new Uint8Array(J)
          : typeof J === "string"
            ? u8(J)
            : J,
      Q = new Uint8Array(X.length + W.length);
    (Q.set(X), Q.set(W, X.length), (X = Q));
    let Y;
    while ((Y = oV(X)) !== -1) (yield X.slice(0, Y), (X = X.slice(Y)));
  }
  if (X.length > 0) yield X;
}
class aV {
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
    let [X, J, W] = Nb($, ":");
    if (W.startsWith(" ")) W = W.substring(1);
    if (X === "event") this.event = W;
    else if (X === "data") this.data.push(W);
    return null;
  }
}
function Nb($, X) {
  let J = $.indexOf(X);
  if (J !== -1) return [$.substring(0, J), X, $.substring(J + X.length)];
  return [$, "", ""];
}
async function cJ($, X) {
  let {
      response: J,
      requestLogID: W,
      retryOfRequestLogID: Q,
      startTime: Y,
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
        return DY(N, J);
      }
      return await J.text();
    })();
  return (
    h$($).debug(
      `[${W}] response parsed`,
      V4({
        retryOfRequestLogID: Q,
        url: J.url,
        status: J.status,
        body: z,
        durationMs: Date.now() - Y,
      }),
    ),
    z
  );
}
function DY($, X) {
  if (!$ || typeof $ !== "object" || Array.isArray($)) return $;
  return Object.defineProperty($, "_request_id", {
    value: X.headers.get("request-id"),
    enumerable: !1,
  });
}
var c8;
class M1 extends Promise {
  constructor($, X, J = cJ) {
    super((W) => {
      W(null);
    });
    ((this.responsePromise = X),
      (this.parseResponse = J),
      c8.set(this, void 0),
      v(this, c8, $, "f"));
  }
  _thenUnwrap($) {
    return new M1(D(this, c8, "f"), this.responsePromise, async (X, J) =>
      DY($(await this.parseResponse(X, J), J), J.response),
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
        this.parseResponse(D(this, c8, "f"), $),
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
c8 = new WeakMap();
var pJ;
class FY {
  constructor($, X, J, W) {
    (pJ.set(this, void 0),
      v(this, pJ, $, "f"),
      (this.options = W),
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
    return await D(this, pJ, "f").requestAPIList(this.constructor, $);
  }
  async *iterPages() {
    let $ = this;
    yield $;
    while ($.hasNextPage()) (($ = await $.getNextPage()), yield $);
  }
  async *[((pJ = new WeakMap()), Symbol.asyncIterator)]() {
    for await (let $ of this.iterPages())
      for (let X of $.getPaginatedItems()) yield X;
  }
}
class dJ extends M1 {
  constructor($, X, J) {
    super(
      $,
      X,
      async (W, Q) => new J(W, Q.response, await cJ(W, Q), Q.options),
    );
  }
  async *[Symbol.asyncIterator]() {
    let $ = await this;
    for await (let X of $) yield X;
  }
}
class y6 extends FY {
  constructor($, X, J, W) {
    super($, X, J, W);
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
        query: { ...gJ(this.options.query), before_id: X },
      };
    }
    let $ = this.last_id;
    if (!$) return null;
    return {
      ...this.options,
      query: { ...gJ(this.options.query), after_id: $ },
    };
  }
}
class p8 extends FY {
  constructor($, X, J, W) {
    super($, X, J, W);
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
    return { ...this.options, query: { ...gJ(this.options.query), page: $ } };
  }
}
var LY = () => {
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
function A1($, X, J) {
  return (LY(), new File($, X ?? "unknown_file", J));
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
var MY = ($) =>
  $ != null &&
  typeof $ === "object" &&
  typeof $[Symbol.asyncIterator] === "function";
var O0 = async ($, X, J = !0) => {
    return { ...$, body: await Bb($.body, X, J) };
  },
  sV = new WeakMap();
function wb($) {
  let X = typeof $ === "function" ? $ : $.fetch,
    J = sV.get(X);
  if (J) return J;
  let W = (async () => {
    try {
      let Q = "Response" in X ? X.Response : (await X("data:,")).constructor,
        Y = new FormData();
      if (Y.toString() === (await new Q(Y).text())) return !1;
      return !0;
    } catch {
      return !0;
    }
  })();
  return (sV.set(X, W), W);
}
var Bb = async ($, X, J = !0) => {
    if (!(await wb(X)))
      throw TypeError(
        "The provided fetch function does not support file uploads with the current global FormData class.",
      );
    let W = new FormData();
    return (
      await Promise.all(
        Object.entries($ || {}).map(([Q, Y]) => jY(W, Q, Y, J)),
      ),
      W
    );
  },
  qb = ($) => $ instanceof Blob && "name" in $;
var jY = async ($, X, J, W) => {
  if (J === void 0) return;
  if (J == null)
    throw TypeError(
      `Received null for "${X}"; to pass null in FormData, you must use the string 'null'`,
    );
  if (typeof J === "string" || typeof J === "number" || typeof J === "boolean")
    $.append(X, String(J));
  else if (J instanceof Response) {
    let Q = {},
      Y = J.headers.get("Content-Type");
    if (Y) Q = { type: Y };
    $.append(X, A1([await J.blob()], d8(J, W), Q));
  } else if (MY(J))
    $.append(X, A1([await new Response(uJ(J)).blob()], d8(J, W)));
  else if (qb(J)) $.append(X, A1([J], d8(J, W), { type: J.type }));
  else if (Array.isArray(J))
    await Promise.all(J.map((Q) => jY($, X + "[]", Q, W)));
  else if (typeof J === "object")
    await Promise.all(
      Object.entries(J).map(([Q, Y]) => jY($, `${X}[${Q}]`, Y, W)),
    );
  else
    throw TypeError(
      `Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${J} instead`,
    );
};
var eV = ($) =>
    $ != null &&
    typeof $ === "object" &&
    typeof $.size === "number" &&
    typeof $.type === "string" &&
    typeof $.text === "function" &&
    typeof $.slice === "function" &&
    typeof $.arrayBuffer === "function",
  Db = ($) =>
    $ != null &&
    typeof $ === "object" &&
    typeof $.name === "string" &&
    typeof $.lastModified === "number" &&
    eV($),
  Fb = ($) =>
    $ != null &&
    typeof $ === "object" &&
    typeof $.url === "string" &&
    typeof $.blob === "function";
async function iJ($, X, J) {
  if ((LY(), ($ = await $), X || (X = d8($, !0)), Db($))) {
    if ($ instanceof File && X == null && J == null) return $;
    return A1([await $.arrayBuffer()], X ?? $.name, {
      type: $.type,
      lastModified: $.lastModified,
      ...J,
    });
  }
  if (Fb($)) {
    let Q = await $.blob();
    return (
      X || (X = new URL($.url).pathname.split(/[\\/]/).pop()),
      A1(await AY(Q), X, J)
    );
  }
  let W = await AY($);
  if (!J?.type) {
    let Q = W.find((Y) => typeof Y === "object" && "type" in Y && Y.type);
    if (typeof Q === "string") J = { ...J, type: Q };
  }
  return A1(W, X, J);
}
async function AY($) {
  let X = [];
  if (
    typeof $ === "string" ||
    ArrayBuffer.isView($) ||
    $ instanceof ArrayBuffer
  )
    X.push($);
  else if (eV($)) X.push($ instanceof Blob ? $ : await $.arrayBuffer());
  else if (MY($)) for await (let J of $) X.push(...(await AY(J)));
  else {
    let J = $?.constructor?.name;
    throw Error(
      `Unexpected data type: ${typeof $}${J ? `; constructor: ${J}` : ""}${jb($)}`,
    );
  }
  return X;
}
function jb($) {
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
var $N = Symbol.for("brand.privateNullableHeaders");
function* Mb($) {
  if (!$) return;
  if ($N in $) {
    let { values: W, nulls: Q } = $;
    yield* W.entries();
    for (let Y of Q) yield [Y, null];
    return;
  }
  let X = !1,
    J;
  if ($ instanceof Headers) J = $.entries();
  else if (NY($)) J = $;
  else ((X = !0), (J = Object.entries($ ?? {})));
  for (let W of J) {
    let Q = W[0];
    if (typeof Q !== "string")
      throw TypeError("expected header name to be a string");
    let Y = NY(W[1]) ? W[1] : [W[1]],
      z = !1;
    for (let G of Y) {
      if (G === void 0) continue;
      if (X && !z) ((z = !0), yield [Q, null]);
      yield [Q, G];
    }
  }
}
var i = ($) => {
  let X = new Headers(),
    J = new Set();
  for (let W of $) {
    let Q = new Set();
    for (let [Y, z] of Mb(W)) {
      let G = Y.toLowerCase();
      if (!Q.has(G)) (X.delete(Y), Q.add(G));
      if (z === null) (X.delete(Y), J.add(G));
      else (X.append(Y, z), J.delete(G));
    }
  }
  return { [$N]: !0, values: X, nulls: J };
};
var i8 = Symbol("anthropic.sdk.stainlessHelper");
function nJ($) {
  return typeof $ === "object" && $ !== null && i8 in $;
}
function IY($, X) {
  let J = new Set();
  if ($) {
    for (let W of $) if (nJ(W)) J.add(W[i8]);
  }
  if (X)
    for (let W of X) {
      if (nJ(W)) J.add(W[i8]);
      if (Array.isArray(W.content)) {
        for (let Q of W.content) if (nJ(Q)) J.add(Q[i8]);
      }
    }
  return Array.from(J);
}
function rJ($, X) {
  let J = IY($, X);
  if (J.length === 0) return {};
  return { "x-stainless-helper": J.join(", ") };
}
function XN($) {
  if (nJ($)) return { "x-stainless-helper": $[i8] };
  return {};
}
function QN($) {
  return $.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
var JN = Object.freeze(Object.create(null)),
  Ab = ($ = QN) =>
    function (J, ...W) {
      if (J.length === 1) return J[0];
      let Q = !1,
        Y = [],
        z = J.reduce((K, V, N) => {
          if (/[?#]/.test(V)) Q = !0;
          let O = W[N],
            w = (Q ? encodeURIComponent : $)("" + O);
          if (
            N !== W.length &&
            (O == null ||
              (typeof O === "object" &&
                O.toString ===
                  Object.getPrototypeOf(
                    Object.getPrototypeOf(O.hasOwnProperty ?? JN) ?? JN,
                  )?.toString))
          )
            ((w = O + ""),
              Y.push({
                start: K.length + V.length,
                length: w.length,
                error: `Value of type ${Object.prototype.toString.call(O).slice(8, -1)} is not a valid path parameter`,
              }));
          return K + V + (N === W.length ? "" : w);
        }, ""),
        G = z.split(/[?#]/, 1)[0],
        H = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,
        U;
      while ((U = H.exec(G)) !== null)
        Y.push({
          start: U.index,
          length: U[0].length,
          error: `Value "${U[0]}" can't be safely passed as a path parameter`,
        });
      if ((Y.sort((K, V) => K.start - V.start), Y.length > 0)) {
        let K = 0,
          V = Y.reduce((N, O) => {
            let w = " ".repeat(O.start - K),
              B = "^".repeat(O.length);
            return ((K = O.start + O.length), N + w + B);
          }, "");
        throw new f(`Path parameters result in path with invalid segments:
${Y.map((N) => N.error).join(`
`)}
${z}
${V}`);
      }
      return z;
    },
  A$ = Ab(QN);
class n8 extends b$ {
  list($ = {}, X) {
    let { betas: J, ...W } = $ ?? {};
    return this._client.getAPIList("/v1/files", y6, {
      query: W,
      ...X,
      headers: i([
        { "anthropic-beta": [...(J ?? []), "files-api-2025-04-14"].toString() },
        X?.headers,
      ]),
    });
  }
  delete($, X = {}, J) {
    let { betas: W } = X ?? {};
    return this._client.delete(A$`/v1/files/${$}`, {
      ...J,
      headers: i([
        { "anthropic-beta": [...(W ?? []), "files-api-2025-04-14"].toString() },
        J?.headers,
      ]),
    });
  }
  download($, X = {}, J) {
    let { betas: W } = X ?? {};
    return this._client.get(A$`/v1/files/${$}/content`, {
      ...J,
      headers: i([
        {
          "anthropic-beta": [...(W ?? []), "files-api-2025-04-14"].toString(),
          Accept: "application/binary",
        },
        J?.headers,
      ]),
      __binaryResponse: !0,
    });
  }
  retrieveMetadata($, X = {}, J) {
    let { betas: W } = X ?? {};
    return this._client.get(A$`/v1/files/${$}`, {
      ...J,
      headers: i([
        { "anthropic-beta": [...(W ?? []), "files-api-2025-04-14"].toString() },
        J?.headers,
      ]),
    });
  }
  upload($, X) {
    let { betas: J, ...W } = $;
    return this._client.post(
      "/v1/files",
      O0(
        {
          body: W,
          ...X,
          headers: i([
            {
              "anthropic-beta": [
                ...(J ?? []),
                "files-api-2025-04-14",
              ].toString(),
            },
            XN(W.file),
            X?.headers,
          ]),
        },
        this._client,
      ),
    );
  }
}
class r8 extends b$ {
  retrieve($, X = {}, J) {
    let { betas: W } = X ?? {};
    return this._client.get(A$`/v1/models/${$}?beta=true`, {
      ...J,
      headers: i([
        {
          ...(W?.toString() != null
            ? { "anthropic-beta": W?.toString() }
            : void 0),
        },
        J?.headers,
      ]),
    });
  }
  list($ = {}, X) {
    let { betas: J, ...W } = $ ?? {};
    return this._client.getAPIList("/v1/models?beta=true", y6, {
      query: W,
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
var oJ = {
  "claude-opus-4-20250514": 8192,
  "claude-opus-4-0": 8192,
  "claude-4-opus-20250514": 8192,
  "anthropic.claude-opus-4-20250514-v1:0": 8192,
  "claude-opus-4@20250514": 8192,
  "claude-opus-4-1-20250805": 8192,
  "anthropic.claude-opus-4-1-20250805-v1:0": 8192,
  "claude-opus-4-1@20250805": 8192,
};
function WN($) {
  return $?.output_format ?? $?.output_config?.format;
}
function ZY($, X, J) {
  let W = WN(X);
  if (!X || !("parse" in (W ?? {})))
    return {
      ...$,
      content: $.content.map((Q) => {
        if (Q.type === "text") {
          let Y = Object.defineProperty({ ...Q }, "parsed_output", {
            value: null,
            enumerable: !1,
          });
          return Object.defineProperty(Y, "parsed", {
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
  return bY($, X, J);
}
function bY($, X, J) {
  let W = null,
    Q = $.content.map((Y) => {
      if (Y.type === "text") {
        let z = bb(X, Y.text);
        if (W === null) W = z;
        let G = Object.defineProperty({ ...Y }, "parsed_output", {
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
      return Y;
    });
  return { ...$, content: Q, parsed_output: W };
}
function bb($, X) {
  let J = WN($);
  if (J?.type !== "json_schema") return null;
  try {
    if ("parse" in J) return J.parse(X);
    return JSON.parse(X);
  } catch (W) {
    throw new f(`Failed to parse structured output: ${W}`);
  }
}
var Rb = ($) => {
    let X = 0,
      J = [];
    while (X < $.length) {
      let W = $[X];
      if (W === "\\") {
        X++;
        continue;
      }
      if (W === "{") {
        (J.push({ type: "brace", value: "{" }), X++);
        continue;
      }
      if (W === "}") {
        (J.push({ type: "brace", value: "}" }), X++);
        continue;
      }
      if (W === "[") {
        (J.push({ type: "paren", value: "[" }), X++);
        continue;
      }
      if (W === "]") {
        (J.push({ type: "paren", value: "]" }), X++);
        continue;
      }
      if (W === ":") {
        (J.push({ type: "separator", value: ":" }), X++);
        continue;
      }
      if (W === ",") {
        (J.push({ type: "delimiter", value: "," }), X++);
        continue;
      }
      if (W === '"') {
        let G = "",
          H = !1;
        W = $[++X];
        while (W !== '"') {
          if (X === $.length) {
            H = !0;
            break;
          }
          if (W === "\\") {
            if ((X++, X === $.length)) {
              H = !0;
              break;
            }
            ((G += W + $[X]), (W = $[++X]));
          } else ((G += W), (W = $[++X]));
        }
        if (((W = $[++X]), !H)) J.push({ type: "string", value: G });
        continue;
      }
      if (W && /\s/.test(W)) {
        X++;
        continue;
      }
      let Y = /[0-9]/;
      if ((W && Y.test(W)) || W === "-" || W === ".") {
        let G = "";
        if (W === "-") ((G += W), (W = $[++X]));
        while ((W && Y.test(W)) || W === ".") ((G += W), (W = $[++X]));
        J.push({ type: "number", value: G });
        continue;
      }
      let z = /[a-z]/i;
      if (W && z.test(W)) {
        let G = "";
        while (W && z.test(W)) {
          if (X === $.length) break;
          ((G += W), (W = $[++X]));
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
  w0 = ($) => {
    if ($.length === 0) return $;
    let X = $[$.length - 1];
    switch (X.type) {
      case "separator":
        return (($ = $.slice(0, $.length - 1)), w0($));
        break;
      case "number":
        let J = X.value[X.value.length - 1];
        if (J === "." || J === "-")
          return (($ = $.slice(0, $.length - 1)), w0($));
      case "string":
        let W = $[$.length - 2];
        if (W?.type === "delimiter")
          return (($ = $.slice(0, $.length - 1)), w0($));
        else if (W?.type === "brace" && W.value === "{")
          return (($ = $.slice(0, $.length - 1)), w0($));
        break;
      case "delimiter":
        return (($ = $.slice(0, $.length - 1)), w0($));
        break;
    }
    return $;
  },
  Pb = ($) => {
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
  Eb = ($) => {
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
  tJ = ($) => JSON.parse(Eb(Pb(w0(Rb($)))));
var Z6,
  u4,
  B0,
  o8,
  aJ,
  t8,
  a8,
  sJ,
  s8,
  N4,
  e8,
  eJ,
  $7,
  I1,
  X7,
  J7,
  $9,
  RY,
  YN,
  Q7,
  PY,
  EY,
  SY,
  zN,
  GN = "__json_buf";
function HN($) {
  return (
    $.type === "tool_use" ||
    $.type === "server_tool_use" ||
    $.type === "mcp_tool_use"
  );
}
class X9 {
  constructor($, X) {
    (Z6.add(this),
      (this.messages = []),
      (this.receivedMessages = []),
      u4.set(this, void 0),
      B0.set(this, null),
      (this.controller = new AbortController()),
      o8.set(this, void 0),
      aJ.set(this, () => {}),
      t8.set(this, () => {}),
      a8.set(this, void 0),
      sJ.set(this, () => {}),
      s8.set(this, () => {}),
      N4.set(this, {}),
      e8.set(this, !1),
      eJ.set(this, !1),
      $7.set(this, !1),
      I1.set(this, !1),
      X7.set(this, void 0),
      J7.set(this, void 0),
      $9.set(this, void 0),
      Q7.set(this, (J) => {
        if ((v(this, eJ, !0, "f"), K4(J))) J = new m$();
        if (J instanceof m$)
          return (v(this, $7, !0, "f"), this._emit("abort", J));
        if (J instanceof f) return this._emit("error", J);
        if (J instanceof Error) {
          let W = new f(J.message);
          return ((W.cause = J), this._emit("error", W));
        }
        return this._emit("error", new f(String(J)));
      }),
      v(
        this,
        o8,
        new Promise((J, W) => {
          (v(this, aJ, J, "f"), v(this, t8, W, "f"));
        }),
        "f",
      ),
      v(
        this,
        a8,
        new Promise((J, W) => {
          (v(this, sJ, J, "f"), v(this, s8, W, "f"));
        }),
        "f",
      ),
      D(this, o8, "f").catch(() => {}),
      D(this, a8, "f").catch(() => {}),
      v(this, B0, $, "f"),
      v(this, $9, X?.logger ?? console, "f"));
  }
  get response() {
    return D(this, X7, "f");
  }
  get request_id() {
    return D(this, J7, "f");
  }
  async withResponse() {
    v(this, I1, !0, "f");
    let $ = await D(this, o8, "f");
    if (!$) throw Error("Could not resolve a `Response` object");
    return { data: this, response: $, request_id: $.headers.get("request-id") };
  }
  static fromReadableStream($) {
    let X = new X9(null);
    return (X._run(() => X._fromReadableStream($)), X);
  }
  static createMessage($, X, J, { logger: W } = {}) {
    let Q = new X9(X, { logger: W });
    for (let Y of X.messages) Q._addMessageParam(Y);
    return (
      v(Q, B0, { ...X, stream: !0 }, "f"),
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
      D(this, Q7, "f"),
    );
  }
  _addMessageParam($) {
    this.messages.push($);
  }
  _addMessage($, X = !0) {
    if ((this.receivedMessages.push($), X)) this._emit("message", $);
  }
  async _createMessage($, X, J) {
    let W = J?.signal,
      Q;
    if (W) {
      if (W.aborted) this.controller.abort();
      ((Q = this.controller.abort.bind(this.controller)),
        W.addEventListener("abort", Q));
    }
    try {
      D(this, Z6, "m", PY).call(this);
      let { response: Y, data: z } = await $.create(
        { ...X, stream: !0 },
        { ...J, signal: this.controller.signal },
      ).withResponse();
      this._connected(Y);
      for await (let G of z) D(this, Z6, "m", EY).call(this, G);
      if (z.controller.signal?.aborted) throw new m$();
      D(this, Z6, "m", SY).call(this);
    } finally {
      if (W && Q) W.removeEventListener("abort", Q);
    }
  }
  _connected($) {
    if (this.ended) return;
    (v(this, X7, $, "f"),
      v(this, J7, $?.headers.get("request-id"), "f"),
      D(this, aJ, "f").call(this, $),
      this._emit("connect"));
  }
  get ended() {
    return D(this, e8, "f");
  }
  get errored() {
    return D(this, eJ, "f");
  }
  get aborted() {
    return D(this, $7, "f");
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
    let W = J.findIndex((Q) => Q.listener === X);
    if (W >= 0) J.splice(W, 1);
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
      if ((v(this, I1, !0, "f"), $ !== "error")) this.once("error", J);
      this.once($, X);
    });
  }
  async done() {
    (v(this, I1, !0, "f"), await D(this, a8, "f"));
  }
  get currentMessage() {
    return D(this, u4, "f");
  }
  async finalMessage() {
    return (await this.done(), D(this, Z6, "m", RY).call(this));
  }
  async finalText() {
    return (await this.done(), D(this, Z6, "m", YN).call(this));
  }
  _emit($, ...X) {
    if (D(this, e8, "f")) return;
    if ($ === "end") (v(this, e8, !0, "f"), D(this, sJ, "f").call(this));
    let J = D(this, N4, "f")[$];
    if (J)
      ((D(this, N4, "f")[$] = J.filter((W) => !W.once)),
        J.forEach(({ listener: W }) => W(...X)));
    if ($ === "abort") {
      let W = X[0];
      if (!D(this, I1, "f") && !J?.length) Promise.reject(W);
      (D(this, t8, "f").call(this, W),
        D(this, s8, "f").call(this, W),
        this._emit("end"));
      return;
    }
    if ($ === "error") {
      let W = X[0];
      if (!D(this, I1, "f") && !J?.length) Promise.reject(W);
      (D(this, t8, "f").call(this, W),
        D(this, s8, "f").call(this, W),
        this._emit("end"));
    }
  }
  _emitFinal() {
    if (this.receivedMessages.at(-1))
      this._emit("finalMessage", D(this, Z6, "m", RY).call(this));
  }
  async _fromReadableStream($, X) {
    let J = X?.signal,
      W;
    if (J) {
      if (J.aborted) this.controller.abort();
      ((W = this.controller.abort.bind(this.controller)),
        J.addEventListener("abort", W));
    }
    try {
      (D(this, Z6, "m", PY).call(this), this._connected(null));
      let Q = D6.fromReadableStream($, this.controller);
      for await (let Y of Q) D(this, Z6, "m", EY).call(this, Y);
      if (Q.controller.signal?.aborted) throw new m$();
      D(this, Z6, "m", SY).call(this);
    } finally {
      if (J && W) J.removeEventListener("abort", W);
    }
  }
  [((u4 = new WeakMap()),
  (B0 = new WeakMap()),
  (o8 = new WeakMap()),
  (aJ = new WeakMap()),
  (t8 = new WeakMap()),
  (a8 = new WeakMap()),
  (sJ = new WeakMap()),
  (s8 = new WeakMap()),
  (N4 = new WeakMap()),
  (e8 = new WeakMap()),
  (eJ = new WeakMap()),
  ($7 = new WeakMap()),
  (I1 = new WeakMap()),
  (X7 = new WeakMap()),
  (J7 = new WeakMap()),
  ($9 = new WeakMap()),
  (Q7 = new WeakMap()),
  (Z6 = new WeakSet()),
  (RY = function () {
    if (this.receivedMessages.length === 0)
      throw new f(
        "stream ended without producing a Message with role=assistant",
      );
    return this.receivedMessages.at(-1);
  }),
  (YN = function () {
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
  (PY = function () {
    if (this.ended) return;
    v(this, u4, void 0, "f");
  }),
  (EY = function (X) {
    if (this.ended) return;
    let J = D(this, Z6, "m", zN).call(this, X);
    switch ((this._emit("streamEvent", X, J), X.type)) {
      case "content_block_delta": {
        let W = J.content.at(-1);
        switch (X.delta.type) {
          case "text_delta": {
            if (W.type === "text")
              this._emit("text", X.delta.text, W.text || "");
            break;
          }
          case "citations_delta": {
            if (W.type === "text")
              this._emit("citation", X.delta.citation, W.citations ?? []);
            break;
          }
          case "input_json_delta": {
            if (HN(W) && W.input)
              this._emit("inputJson", X.delta.partial_json, W.input);
            break;
          }
          case "thinking_delta": {
            if (W.type === "thinking")
              this._emit("thinking", X.delta.thinking, W.thinking);
            break;
          }
          case "signature_delta": {
            if (W.type === "thinking") this._emit("signature", W.signature);
            break;
          }
          case "compaction_delta": {
            if (W.type === "compaction" && W.content)
              this._emit("compaction", W.content);
            break;
          }
          default:
            UN(X.delta);
        }
        break;
      }
      case "message_stop": {
        (this._addMessageParam(J),
          this._addMessage(
            ZY(J, D(this, B0, "f"), { logger: D(this, $9, "f") }),
            !0,
          ));
        break;
      }
      case "content_block_stop": {
        this._emit("contentBlock", J.content.at(-1));
        break;
      }
      case "message_start": {
        v(this, u4, J, "f");
        break;
      }
      case "content_block_start":
      case "message_delta":
        break;
    }
  }),
  (SY = function () {
    if (this.ended) throw new f("stream has ended, this shouldn't happen");
    let X = D(this, u4, "f");
    if (!X) throw new f("request ended without sending any chunks");
    return (
      v(this, u4, void 0, "f"),
      ZY(X, D(this, B0, "f"), { logger: D(this, $9, "f") })
    );
  }),
  (zN = function (X) {
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
        let W = J.content.at(X.index);
        switch (X.delta.type) {
          case "text_delta": {
            if (W?.type === "text")
              J.content[X.index] = {
                ...W,
                text: (W.text || "") + X.delta.text,
              };
            break;
          }
          case "citations_delta": {
            if (W?.type === "text")
              J.content[X.index] = {
                ...W,
                citations: [...(W.citations ?? []), X.delta.citation],
              };
            break;
          }
          case "input_json_delta": {
            if (W && HN(W)) {
              let Q = W[GN] || "";
              Q += X.delta.partial_json;
              let Y = { ...W };
              if (
                (Object.defineProperty(Y, GN, {
                  value: Q,
                  enumerable: !1,
                  writable: !0,
                }),
                Q)
              )
                try {
                  Y.input = tJ(Q);
                } catch (z) {
                  let G = new f(
                    `Unable to parse tool parameter JSON from model. Please retry your request or adjust your prompt. Error: ${z}. JSON: ${Q}`,
                  );
                  D(this, Q7, "f").call(this, G);
                }
              J.content[X.index] = Y;
            }
            break;
          }
          case "thinking_delta": {
            if (W?.type === "thinking")
              J.content[X.index] = {
                ...W,
                thinking: W.thinking + X.delta.thinking,
              };
            break;
          }
          case "signature_delta": {
            if (W?.type === "thinking")
              J.content[X.index] = { ...W, signature: X.delta.signature };
            break;
          }
          case "compaction_delta": {
            if (W?.type === "compaction")
              J.content[X.index] = {
                ...W,
                content: (W.content || "") + X.delta.content,
              };
            break;
          }
          default:
            UN(X.delta);
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
      this.on("streamEvent", (W) => {
        let Q = X.shift();
        if (Q) Q.resolve(W);
        else $.push(W);
      }),
      this.on("end", () => {
        J = !0;
        for (let W of X) W.resolve(void 0);
        X.length = 0;
      }),
      this.on("abort", (W) => {
        J = !0;
        for (let Q of X) Q.reject(W);
        X.length = 0;
      }),
      this.on("error", (W) => {
        J = !0;
        for (let Q of X) Q.reject(W);
        X.length = 0;
      }),
      {
        next: async () => {
          if (!$.length) {
            if (J) return { value: void 0, done: !0 };
            return new Promise((Q, Y) =>
              X.push({ resolve: Q, reject: Y }),
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
function UN($) {}
class q0 extends Error {
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
var KN = 1e5,
  VN = `You have been working on the task described above but have not yet completed it. Write a continuation summary that will allow you (or another instance of yourself) to resume work efficiently in a future context window where the conversation history will be replaced with this summary. Your summary should be structured, concise, and actionable. Include:
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
var J9, D0, Z1, f$, Q9, F6, O4, m4, W9, NN, CY;
function ON() {
  let $, X;
  return {
    promise: new Promise((W, Q) => {
      (($ = W), (X = Q));
    }),
    resolve: $,
    reject: X,
  };
}
class Y9 {
  constructor($, X, J) {
    (J9.add(this),
      (this.client = $),
      D0.set(this, !1),
      Z1.set(this, !1),
      f$.set(this, void 0),
      Q9.set(this, void 0),
      F6.set(this, void 0),
      O4.set(this, void 0),
      m4.set(this, void 0),
      W9.set(this, 0),
      v(
        this,
        f$,
        { params: { ...X, messages: structuredClone(X.messages) } },
        "f",
      ));
    let Q = ["BetaToolRunner", ...IY(X.tools, X.messages)].join(", ");
    (v(
      this,
      Q9,
      { ...J, headers: i([{ "x-stainless-helper": Q }, J?.headers]) },
      "f",
    ),
      v(this, m4, ON(), "f"));
  }
  async *[((D0 = new WeakMap()),
  (Z1 = new WeakMap()),
  (f$ = new WeakMap()),
  (Q9 = new WeakMap()),
  (F6 = new WeakMap()),
  (O4 = new WeakMap()),
  (m4 = new WeakMap()),
  (W9 = new WeakMap()),
  (J9 = new WeakSet()),
  (NN = async function () {
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
    let W = X.contextTokenThreshold ?? KN;
    if (J < W) return !1;
    let Q = X.model ?? D(this, f$, "f").params.model,
      Y = X.summaryPrompt ?? VN,
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
          { role: "user", content: [{ type: "text", text: Y }] },
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
    if (D(this, D0, "f")) throw new f("Cannot iterate over a consumed stream");
    (v(this, D0, !0, "f"), v(this, Z1, !0, "f"), v(this, O4, void 0, "f"));
    try {
      while (!0) {
        let X;
        try {
          if (
            D(this, f$, "f").params.max_iterations &&
            D(this, W9, "f") >= D(this, f$, "f").params.max_iterations
          )
            break;
          (v(this, Z1, !1, "f"),
            v(this, O4, void 0, "f"),
            v(this, W9, (($ = D(this, W9, "f")), $++, $), "f"),
            v(this, F6, void 0, "f"));
          let {
            max_iterations: J,
            compactionControl: W,
            ...Q
          } = D(this, f$, "f").params;
          if (Q.stream)
            ((X = this.client.beta.messages.stream({ ...Q }, D(this, Q9, "f"))),
              v(this, F6, X.finalMessage(), "f"),
              D(this, F6, "f").catch(() => {}),
              yield X);
          else
            (v(
              this,
              F6,
              this.client.beta.messages.create(
                { ...Q, stream: !1 },
                D(this, Q9, "f"),
              ),
              "f",
            ),
              yield D(this, F6, "f"));
          if (!(await D(this, J9, "m", NN).call(this))) {
            if (!D(this, Z1, "f")) {
              let { role: G, content: H } = await D(this, F6, "f");
              D(this, f$, "f").params.messages.push({ role: G, content: H });
            }
            let z = await D(this, J9, "m", CY).call(
              this,
              D(this, f$, "f").params.messages.at(-1),
            );
            if (z) D(this, f$, "f").params.messages.push(z);
            else if (!D(this, Z1, "f")) break;
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
        v(this, D0, !1, "f"),
        D(this, m4, "f").promise.catch(() => {}),
        D(this, m4, "f").reject(X),
        v(this, m4, ON(), "f"),
        X
      );
    }
  }
  setMessagesParams($) {
    if (typeof $ === "function")
      D(this, f$, "f").params = $(D(this, f$, "f").params);
    else D(this, f$, "f").params = $;
    (v(this, Z1, !0, "f"), v(this, O4, void 0, "f"));
  }
  async generateToolResponse() {
    let $ = (await D(this, F6, "f")) ?? this.params.messages.at(-1);
    if (!$) return null;
    return D(this, J9, "m", CY).call(this, $);
  }
  done() {
    return D(this, m4, "f").promise;
  }
  async runUntilDone() {
    if (!D(this, D0, "f")) for await (let $ of this);
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
CY = async function (X) {
  if (D(this, O4, "f") !== void 0) return D(this, O4, "f");
  return (v(this, O4, Sb(D(this, f$, "f").params, X), "f"), D(this, O4, "f"));
};
async function Sb($, X = $.messages.at(-1)) {
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
        let Y = $.tools.find(
          (z) => ("name" in z ? z.name : z.mcp_server_name) === Q.name,
        );
        if (!Y || !("run" in Y))
          return {
            type: "tool_result",
            tool_use_id: Q.id,
            content: `Error: Tool '${Q.name}' not found`,
            is_error: !0,
          };
        try {
          let z = Q.input;
          if ("parse" in Y && Y.parse) z = Y.parse(z);
          let G = await Y.run(z);
          return { type: "tool_result", tool_use_id: Q.id, content: G };
        } catch (z) {
          return {
            type: "tool_result",
            tool_use_id: Q.id,
            content:
              z instanceof q0
                ? z.content
                : `Error: ${z instanceof Error ? z.message : String(z)}`,
            is_error: !0,
          };
        }
      }),
    ),
  };
}
class F0 {
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
    return new F0(h8($.body), X);
  }
}
class z9 extends b$ {
  create($, X) {
    let { betas: J, ...W } = $;
    return this._client.post("/v1/messages/batches?beta=true", {
      body: W,
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
    let { betas: W } = X ?? {};
    return this._client.get(A$`/v1/messages/batches/${$}?beta=true`, {
      ...J,
      headers: i([
        {
          "anthropic-beta": [
            ...(W ?? []),
            "message-batches-2024-09-24",
          ].toString(),
        },
        J?.headers,
      ]),
    });
  }
  list($ = {}, X) {
    let { betas: J, ...W } = $ ?? {};
    return this._client.getAPIList("/v1/messages/batches?beta=true", y6, {
      query: W,
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
    let { betas: W } = X ?? {};
    return this._client.delete(A$`/v1/messages/batches/${$}?beta=true`, {
      ...J,
      headers: i([
        {
          "anthropic-beta": [
            ...(W ?? []),
            "message-batches-2024-09-24",
          ].toString(),
        },
        J?.headers,
      ]),
    });
  }
  cancel($, X = {}, J) {
    let { betas: W } = X ?? {};
    return this._client.post(A$`/v1/messages/batches/${$}/cancel?beta=true`, {
      ...J,
      headers: i([
        {
          "anthropic-beta": [
            ...(W ?? []),
            "message-batches-2024-09-24",
          ].toString(),
        },
        J?.headers,
      ]),
    });
  }
  async results($, X = {}, J) {
    let W = await this.retrieve($);
    if (!W.results_url)
      throw new f(
        `No batch \`results_url\`; Has it finished processing? ${W.processing_status} - ${W.id}`,
      );
    let { betas: Q } = X ?? {};
    return this._client
      .get(W.results_url, {
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
      ._thenUnwrap((Y, z) => F0.fromResponse(z.response, z.controller));
  }
}
var wN = {
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
  vb = ["claude-opus-4-6"];
class l4 extends b$ {
  constructor() {
    super(...arguments);
    this.batches = new z9(this._client);
  }
  create($, X) {
    let J = BN($),
      { betas: W, ...Q } = J;
    if (Q.model in wN)
      console.warn(`The model '${Q.model}' is deprecated and will reach end-of-life on ${wN[Q.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
    if (Q.model in vb && Q.thinking && Q.thinking.type === "enabled")
      console.warn(
        `Using Claude with ${Q.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`,
      );
    let Y = this._client._options.timeout;
    if (!Q.stream && Y == null) {
      let G = oJ[Q.model] ?? void 0;
      Y = this._client.calculateNonstreamingTimeout(Q.max_tokens, G);
    }
    let z = rJ(Q.tools, Q.messages);
    return this._client.post("/v1/messages?beta=true", {
      body: Q,
      timeout: Y ?? 600000,
      ...X,
      headers: i([
        {
          ...(W?.toString() != null
            ? { "anthropic-beta": W?.toString() }
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
        bY(J, $, { logger: this._client.logger ?? console }),
      )
    );
  }
  stream($, X) {
    return X9.createMessage(this, $, X);
  }
  countTokens($, X) {
    let J = BN($),
      { betas: W, ...Q } = J;
    return this._client.post("/v1/messages/count_tokens?beta=true", {
      body: Q,
      ...X,
      headers: i([
        {
          "anthropic-beta": [
            ...(W ?? []),
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
function BN($) {
  if (!$.output_format) return $;
  if ($.output_config?.format)
    throw new f(
      "Both output_format and output_config.format were provided. Please use only output_config.format (output_format is deprecated).",
    );
  let { output_format: X, ...J } = $;
  return { ...J, output_config: { ...$.output_config, format: X } };
}
l4.Batches = z9;
l4.BetaToolRunner = Y9;
l4.ToolError = q0;
class G9 extends b$ {
  create($, X = {}, J) {
    let { betas: W, ...Q } = X ?? {};
    return this._client.post(
      A$`/v1/skills/${$}/versions?beta=true`,
      O0(
        {
          body: Q,
          ...J,
          headers: i([
            {
              "anthropic-beta": [...(W ?? []), "skills-2025-10-02"].toString(),
            },
            J?.headers,
          ]),
        },
        this._client,
      ),
    );
  }
  retrieve($, X, J) {
    let { skill_id: W, betas: Q } = X;
    return this._client.get(A$`/v1/skills/${W}/versions/${$}?beta=true`, {
      ...J,
      headers: i([
        { "anthropic-beta": [...(Q ?? []), "skills-2025-10-02"].toString() },
        J?.headers,
      ]),
    });
  }
  list($, X = {}, J) {
    let { betas: W, ...Q } = X ?? {};
    return this._client.getAPIList(A$`/v1/skills/${$}/versions?beta=true`, p8, {
      query: Q,
      ...J,
      headers: i([
        { "anthropic-beta": [...(W ?? []), "skills-2025-10-02"].toString() },
        J?.headers,
      ]),
    });
  }
  delete($, X, J) {
    let { skill_id: W, betas: Q } = X;
    return this._client.delete(A$`/v1/skills/${W}/versions/${$}?beta=true`, {
      ...J,
      headers: i([
        { "anthropic-beta": [...(Q ?? []), "skills-2025-10-02"].toString() },
        J?.headers,
      ]),
    });
  }
}
class j0 extends b$ {
  constructor() {
    super(...arguments);
    this.versions = new G9(this._client);
  }
  create($ = {}, X) {
    let { betas: J, ...W } = $ ?? {};
    return this._client.post(
      "/v1/skills?beta=true",
      O0(
        {
          body: W,
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
    let { betas: W } = X ?? {};
    return this._client.get(A$`/v1/skills/${$}?beta=true`, {
      ...J,
      headers: i([
        { "anthropic-beta": [...(W ?? []), "skills-2025-10-02"].toString() },
        J?.headers,
      ]),
    });
  }
  list($ = {}, X) {
    let { betas: J, ...W } = $ ?? {};
    return this._client.getAPIList("/v1/skills?beta=true", p8, {
      query: W,
      ...X,
      headers: i([
        { "anthropic-beta": [...(J ?? []), "skills-2025-10-02"].toString() },
        X?.headers,
      ]),
    });
  }
  delete($, X = {}, J) {
    let { betas: W } = X ?? {};
    return this._client.delete(A$`/v1/skills/${$}?beta=true`, {
      ...J,
      headers: i([
        { "anthropic-beta": [...(W ?? []), "skills-2025-10-02"].toString() },
        J?.headers,
      ]),
    });
  }
}
j0.Versions = G9;
class e6 extends b$ {
  constructor() {
    super(...arguments);
    ((this.models = new r8(this._client)),
      (this.messages = new l4(this._client)),
      (this.files = new n8(this._client)),
      (this.skills = new j0(this._client)));
  }
}
e6.Models = r8;
e6.Messages = l4;
e6.Files = n8;
e6.Skills = j0;
class L0 extends b$ {
  create($, X) {
    let { betas: J, ...W } = $;
    return this._client.post("/v1/complete", {
      body: W,
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
function qN($) {
  return $?.output_config?.format;
}
function vY($, X, J) {
  let W = qN(X);
  if (!X || !("parse" in (W ?? {})))
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
  return kY($, X, J);
}
function kY($, X, J) {
  let W = null,
    Q = $.content.map((Y) => {
      if (Y.type === "text") {
        let z = Tb(X, Y.text);
        if (W === null) W = z;
        return Object.defineProperty({ ...Y }, "parsed_output", {
          value: z,
          enumerable: !1,
        });
      }
      return Y;
    });
  return { ...$, content: Q, parsed_output: W };
}
function Tb($, X) {
  let J = qN($);
  if (J?.type !== "json_schema") return null;
  try {
    if ("parse" in J) return J.parse(X);
    return JSON.parse(X);
  } catch (W) {
    throw new f(`Failed to parse structured output: ${W}`);
  }
}
var b6,
  c4,
  M0,
  H9,
  W7,
  U9,
  K9,
  Y7,
  V9,
  w4,
  N9,
  z7,
  G7,
  b1,
  H7,
  U7,
  O9,
  _Y,
  DN,
  xY,
  TY,
  fY,
  yY,
  FN,
  jN = "__json_buf";
function LN($) {
  return $.type === "tool_use" || $.type === "server_tool_use";
}
class w9 {
  constructor($, X) {
    (b6.add(this),
      (this.messages = []),
      (this.receivedMessages = []),
      c4.set(this, void 0),
      M0.set(this, null),
      (this.controller = new AbortController()),
      H9.set(this, void 0),
      W7.set(this, () => {}),
      U9.set(this, () => {}),
      K9.set(this, void 0),
      Y7.set(this, () => {}),
      V9.set(this, () => {}),
      w4.set(this, {}),
      N9.set(this, !1),
      z7.set(this, !1),
      G7.set(this, !1),
      b1.set(this, !1),
      H7.set(this, void 0),
      U7.set(this, void 0),
      O9.set(this, void 0),
      xY.set(this, (J) => {
        if ((v(this, z7, !0, "f"), K4(J))) J = new m$();
        if (J instanceof m$)
          return (v(this, G7, !0, "f"), this._emit("abort", J));
        if (J instanceof f) return this._emit("error", J);
        if (J instanceof Error) {
          let W = new f(J.message);
          return ((W.cause = J), this._emit("error", W));
        }
        return this._emit("error", new f(String(J)));
      }),
      v(
        this,
        H9,
        new Promise((J, W) => {
          (v(this, W7, J, "f"), v(this, U9, W, "f"));
        }),
        "f",
      ),
      v(
        this,
        K9,
        new Promise((J, W) => {
          (v(this, Y7, J, "f"), v(this, V9, W, "f"));
        }),
        "f",
      ),
      D(this, H9, "f").catch(() => {}),
      D(this, K9, "f").catch(() => {}),
      v(this, M0, $, "f"),
      v(this, O9, X?.logger ?? console, "f"));
  }
  get response() {
    return D(this, H7, "f");
  }
  get request_id() {
    return D(this, U7, "f");
  }
  async withResponse() {
    v(this, b1, !0, "f");
    let $ = await D(this, H9, "f");
    if (!$) throw Error("Could not resolve a `Response` object");
    return { data: this, response: $, request_id: $.headers.get("request-id") };
  }
  static fromReadableStream($) {
    let X = new w9(null);
    return (X._run(() => X._fromReadableStream($)), X);
  }
  static createMessage($, X, J, { logger: W } = {}) {
    let Q = new w9(X, { logger: W });
    for (let Y of X.messages) Q._addMessageParam(Y);
    return (
      v(Q, M0, { ...X, stream: !0 }, "f"),
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
      D(this, xY, "f"),
    );
  }
  _addMessageParam($) {
    this.messages.push($);
  }
  _addMessage($, X = !0) {
    if ((this.receivedMessages.push($), X)) this._emit("message", $);
  }
  async _createMessage($, X, J) {
    let W = J?.signal,
      Q;
    if (W) {
      if (W.aborted) this.controller.abort();
      ((Q = this.controller.abort.bind(this.controller)),
        W.addEventListener("abort", Q));
    }
    try {
      D(this, b6, "m", TY).call(this);
      let { response: Y, data: z } = await $.create(
        { ...X, stream: !0 },
        { ...J, signal: this.controller.signal },
      ).withResponse();
      this._connected(Y);
      for await (let G of z) D(this, b6, "m", fY).call(this, G);
      if (z.controller.signal?.aborted) throw new m$();
      D(this, b6, "m", yY).call(this);
    } finally {
      if (W && Q) W.removeEventListener("abort", Q);
    }
  }
  _connected($) {
    if (this.ended) return;
    (v(this, H7, $, "f"),
      v(this, U7, $?.headers.get("request-id"), "f"),
      D(this, W7, "f").call(this, $),
      this._emit("connect"));
  }
  get ended() {
    return D(this, N9, "f");
  }
  get errored() {
    return D(this, z7, "f");
  }
  get aborted() {
    return D(this, G7, "f");
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
    let W = J.findIndex((Q) => Q.listener === X);
    if (W >= 0) J.splice(W, 1);
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
      if ((v(this, b1, !0, "f"), $ !== "error")) this.once("error", J);
      this.once($, X);
    });
  }
  async done() {
    (v(this, b1, !0, "f"), await D(this, K9, "f"));
  }
  get currentMessage() {
    return D(this, c4, "f");
  }
  async finalMessage() {
    return (await this.done(), D(this, b6, "m", _Y).call(this));
  }
  async finalText() {
    return (await this.done(), D(this, b6, "m", DN).call(this));
  }
  _emit($, ...X) {
    if (D(this, N9, "f")) return;
    if ($ === "end") (v(this, N9, !0, "f"), D(this, Y7, "f").call(this));
    let J = D(this, w4, "f")[$];
    if (J)
      ((D(this, w4, "f")[$] = J.filter((W) => !W.once)),
        J.forEach(({ listener: W }) => W(...X)));
    if ($ === "abort") {
      let W = X[0];
      if (!D(this, b1, "f") && !J?.length) Promise.reject(W);
      (D(this, U9, "f").call(this, W),
        D(this, V9, "f").call(this, W),
        this._emit("end"));
      return;
    }
    if ($ === "error") {
      let W = X[0];
      if (!D(this, b1, "f") && !J?.length) Promise.reject(W);
      (D(this, U9, "f").call(this, W),
        D(this, V9, "f").call(this, W),
        this._emit("end"));
    }
  }
  _emitFinal() {
    if (this.receivedMessages.at(-1))
      this._emit("finalMessage", D(this, b6, "m", _Y).call(this));
  }
  async _fromReadableStream($, X) {
    let J = X?.signal,
      W;
    if (J) {
      if (J.aborted) this.controller.abort();
      ((W = this.controller.abort.bind(this.controller)),
        J.addEventListener("abort", W));
    }
    try {
      (D(this, b6, "m", TY).call(this), this._connected(null));
      let Q = D6.fromReadableStream($, this.controller);
      for await (let Y of Q) D(this, b6, "m", fY).call(this, Y);
      if (Q.controller.signal?.aborted) throw new m$();
      D(this, b6, "m", yY).call(this);
    } finally {
      if (J && W) J.removeEventListener("abort", W);
    }
  }
  [((c4 = new WeakMap()),
  (M0 = new WeakMap()),
  (H9 = new WeakMap()),
  (W7 = new WeakMap()),
  (U9 = new WeakMap()),
  (K9 = new WeakMap()),
  (Y7 = new WeakMap()),
  (V9 = new WeakMap()),
  (w4 = new WeakMap()),
  (N9 = new WeakMap()),
  (z7 = new WeakMap()),
  (G7 = new WeakMap()),
  (b1 = new WeakMap()),
  (H7 = new WeakMap()),
  (U7 = new WeakMap()),
  (O9 = new WeakMap()),
  (xY = new WeakMap()),
  (b6 = new WeakSet()),
  (_Y = function () {
    if (this.receivedMessages.length === 0)
      throw new f(
        "stream ended without producing a Message with role=assistant",
      );
    return this.receivedMessages.at(-1);
  }),
  (DN = function () {
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
  (TY = function () {
    if (this.ended) return;
    v(this, c4, void 0, "f");
  }),
  (fY = function (X) {
    if (this.ended) return;
    let J = D(this, b6, "m", FN).call(this, X);
    switch ((this._emit("streamEvent", X, J), X.type)) {
      case "content_block_delta": {
        let W = J.content.at(-1);
        switch (X.delta.type) {
          case "text_delta": {
            if (W.type === "text")
              this._emit("text", X.delta.text, W.text || "");
            break;
          }
          case "citations_delta": {
            if (W.type === "text")
              this._emit("citation", X.delta.citation, W.citations ?? []);
            break;
          }
          case "input_json_delta": {
            if (LN(W) && W.input)
              this._emit("inputJson", X.delta.partial_json, W.input);
            break;
          }
          case "thinking_delta": {
            if (W.type === "thinking")
              this._emit("thinking", X.delta.thinking, W.thinking);
            break;
          }
          case "signature_delta": {
            if (W.type === "thinking") this._emit("signature", W.signature);
            break;
          }
          default:
            MN(X.delta);
        }
        break;
      }
      case "message_stop": {
        (this._addMessageParam(J),
          this._addMessage(
            vY(J, D(this, M0, "f"), { logger: D(this, O9, "f") }),
            !0,
          ));
        break;
      }
      case "content_block_stop": {
        this._emit("contentBlock", J.content.at(-1));
        break;
      }
      case "message_start": {
        v(this, c4, J, "f");
        break;
      }
      case "content_block_start":
      case "message_delta":
        break;
    }
  }),
  (yY = function () {
    if (this.ended) throw new f("stream has ended, this shouldn't happen");
    let X = D(this, c4, "f");
    if (!X) throw new f("request ended without sending any chunks");
    return (
      v(this, c4, void 0, "f"),
      vY(X, D(this, M0, "f"), { logger: D(this, O9, "f") })
    );
  }),
  (FN = function (X) {
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
        let W = J.content.at(X.index);
        switch (X.delta.type) {
          case "text_delta": {
            if (W?.type === "text")
              J.content[X.index] = {
                ...W,
                text: (W.text || "") + X.delta.text,
              };
            break;
          }
          case "citations_delta": {
            if (W?.type === "text")
              J.content[X.index] = {
                ...W,
                citations: [...(W.citations ?? []), X.delta.citation],
              };
            break;
          }
          case "input_json_delta": {
            if (W && LN(W)) {
              let Q = W[jN] || "";
              Q += X.delta.partial_json;
              let Y = { ...W };
              if (
                (Object.defineProperty(Y, jN, {
                  value: Q,
                  enumerable: !1,
                  writable: !0,
                }),
                Q)
              )
                Y.input = tJ(Q);
              J.content[X.index] = Y;
            }
            break;
          }
          case "thinking_delta": {
            if (W?.type === "thinking")
              J.content[X.index] = {
                ...W,
                thinking: W.thinking + X.delta.thinking,
              };
            break;
          }
          case "signature_delta": {
            if (W?.type === "thinking")
              J.content[X.index] = { ...W, signature: X.delta.signature };
            break;
          }
          default:
            MN(X.delta);
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
      this.on("streamEvent", (W) => {
        let Q = X.shift();
        if (Q) Q.resolve(W);
        else $.push(W);
      }),
      this.on("end", () => {
        J = !0;
        for (let W of X) W.resolve(void 0);
        X.length = 0;
      }),
      this.on("abort", (W) => {
        J = !0;
        for (let Q of X) Q.reject(W);
        X.length = 0;
      }),
      this.on("error", (W) => {
        J = !0;
        for (let Q of X) Q.reject(W);
        X.length = 0;
      }),
      {
        next: async () => {
          if (!$.length) {
            if (J) return { value: void 0, done: !0 };
            return new Promise((Q, Y) =>
              X.push({ resolve: Q, reject: Y }),
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
function MN($) {}
class B9 extends b$ {
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
      ._thenUnwrap((W, Q) => F0.fromResponse(Q.response, Q.controller));
  }
}
class R1 extends b$ {
  constructor() {
    super(...arguments);
    this.batches = new B9(this._client);
  }
  create($, X) {
    if ($.model in AN)
      console.warn(`The model '${$.model}' is deprecated and will reach end-of-life on ${AN[$.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
    if ($.model in yb && $.thinking && $.thinking.type === "enabled")
      console.warn(
        `Using Claude with ${$.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`,
      );
    let J = this._client._options.timeout;
    if (!$.stream && J == null) {
      let Q = oJ[$.model] ?? void 0;
      J = this._client.calculateNonstreamingTimeout($.max_tokens, Q);
    }
    let W = rJ($.tools, $.messages);
    return this._client.post("/v1/messages", {
      body: $,
      timeout: J ?? 600000,
      ...X,
      headers: i([W, X?.headers]),
      stream: $.stream ?? !1,
    });
  }
  parse($, X) {
    return this.create($, X).then((J) =>
      kY(J, $, { logger: this._client.logger ?? console }),
    );
  }
  stream($, X) {
    return w9.createMessage(this, $, X, {
      logger: this._client.logger ?? console,
    });
  }
  countTokens($, X) {
    return this._client.post("/v1/messages/count_tokens", { body: $, ...X });
  }
}
var AN = {
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
  yb = ["claude-opus-4-6"];
R1.Batches = B9;
class A0 extends b$ {
  retrieve($, X = {}, J) {
    let { betas: W } = X ?? {};
    return this._client.get(A$`/v1/models/${$}`, {
      ...J,
      headers: i([
        {
          ...(W?.toString() != null
            ? { "anthropic-beta": W?.toString() }
            : void 0),
        },
        J?.headers,
      ]),
    });
  }
  list($ = {}, X) {
    let { betas: J, ...W } = $ ?? {};
    return this._client.getAPIList("/v1/models", y6, {
      query: W,
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
var q9 = ($) => {
  if (typeof globalThis.process < "u")
    return globalThis.process.env?.[$]?.trim() ?? void 0;
  if (typeof globalThis.Deno < "u")
    return globalThis.Deno.env?.get?.($)?.trim();
  return;
};
var gY,
  hY,
  K7,
  IN,
  ZN = "\\n\\nHuman:",
  bN = "\\n\\nAssistant:";
class P$ {
  constructor({
    baseURL: $ = q9("ANTHROPIC_BASE_URL"),
    apiKey: X = q9("ANTHROPIC_API_KEY") ?? null,
    authToken: J = q9("ANTHROPIC_AUTH_TOKEN") ?? null,
    ...W
  } = {}) {
    (gY.add(this), K7.set(this, void 0));
    let Q = {
      apiKey: X,
      authToken: J,
      ...W,
      baseURL: $ || "https://api.anthropic.com",
    };
    if (!Q.dangerouslyAllowBrowser && uV())
      throw new f(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);
    ((this.baseURL = Q.baseURL),
      (this.timeout = Q.timeout ?? hY.DEFAULT_TIMEOUT),
      (this.logger = Q.logger ?? console));
    let Y = "warn";
    ((this.logLevel = Y),
      (this.logLevel =
        qY(Q.logLevel, "ClientOptions.logLevel", this) ??
        qY(q9("ANTHROPIC_LOG"), "process.env['ANTHROPIC_LOG']", this) ??
        Y),
      (this.fetchOptions = Q.fetchOptions),
      (this.maxRetries = Q.maxRetries ?? 2),
      (this.fetch = Q.fetch ?? lV()),
      v(this, K7, pV, "f"),
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
    return dV($);
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${g4}`;
  }
  defaultIdempotencyKey() {
    return `stainless-node-retry-${KY()}`;
  }
  makeStatusError($, X, J, W) {
    return T$.generate($, X, J, W);
  }
  buildURL($, X, J) {
    let W = (!D(this, gY, "m", IN).call(this) && J) || this.baseURL,
      Q = _V($)
        ? new URL($)
        : new URL(W + (W.endsWith("/") && $.startsWith("/") ? $.slice(1) : $)),
      Y = this.defaultQuery(),
      z = Object.fromEntries(Q.searchParams);
    if (!OY(Y) || !OY(z)) X = { ...z, ...Y, ...X };
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
      Promise.resolve(J).then((W) => {
        return { method: $, path: X, ...W };
      }),
    );
  }
  request($, X = null) {
    return new M1(this, this.makeRequest($, X, void 0));
  }
  async makeRequest($, X, J) {
    let W = await $,
      Q = W.maxRetries ?? this.maxRetries;
    if (X == null) X = Q;
    await this.prepareOptions(W);
    let {
      req: Y,
      url: z,
      timeout: G,
    } = await this.buildRequest(W, { retryCount: Q - X });
    await this.prepareRequest(Y, { url: z, options: W });
    let H =
        "log_" + ((Math.random() * 16777216) | 0).toString(16).padStart(6, "0"),
      U = J === void 0 ? "" : `, retryOf: ${J}`,
      K = Date.now();
    if (
      (h$(this).debug(
        `[${H}] sending request`,
        V4({
          retryOfRequestLogID: J,
          method: W.method,
          url: z,
          options: W,
          headers: Y.headers,
        }),
      ),
      W.signal?.aborted)
    )
      throw new m$();
    let V = new AbortController(),
      N = await this.fetchWithTimeout(z, Y, G, V).catch(S8),
      O = Date.now();
    if (N instanceof globalThis.Error) {
      let F = `retrying, ${X} attempts remaining`;
      if (W.signal?.aborted) throw new m$();
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
          this.retryRequest(W, X, J ?? H)
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
        throw new C8();
      throw new L1({ cause: N });
    }
    let w = [...N.headers.entries()]
        .filter(([F]) => F === "request-id")
        .map(([F, j]) => ", " + F + ": " + JSON.stringify(j))
        .join(""),
      B = `[${H}${U}${w}] ${Y.method} ${z} ${N.ok ? "succeeded" : "failed"} with status ${N.status} in ${O - K}ms`;
    if (!N.ok) {
      let F = await this.shouldRetry(N);
      if (X && F) {
        let O$ = `retrying, ${X} attempts remaining`;
        return (
          await cV(N.body),
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
          this.retryRequest(W, X, J ?? H, N.headers)
        );
      }
      let j = F ? "error; no more retries left" : "error; not retryable";
      h$(this).info(`${B} - ${j}`);
      let I = await N.text().catch((O$) => S8(O$).message),
        Z = hJ(I),
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
        options: W,
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
        ? J.then((W) => ({ method: "get", path: $, ...W }))
        : { method: "get", path: $, ...J },
    );
  }
  requestAPIList($, X) {
    let J = this.makeRequest(X, null, void 0);
    return new dJ(this, J, $);
  }
  async fetchWithTimeout($, X, J, W) {
    let { signal: Q, method: Y, ...z } = X || {},
      G = this._makeAbort(W);
    if (Q) Q.addEventListener("abort", G, { once: !0 });
    let H = setTimeout(G, J),
      U =
        (globalThis.ReadableStream &&
          z.body instanceof globalThis.ReadableStream) ||
        (typeof z.body === "object" &&
          z.body !== null &&
          Symbol.asyncIterator in z.body),
      K = {
        signal: W.signal,
        ...(U ? { duplex: "half" } : {}),
        method: "GET",
        ...z,
      };
    if (Y) K.method = Y.toUpperCase();
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
  async retryRequest($, X, J, W) {
    let Q,
      Y = W?.get("retry-after-ms");
    if (Y) {
      let G = parseFloat(Y);
      if (!Number.isNaN(G)) Q = G;
    }
    let z = W?.get("retry-after");
    if (z && !Q) {
      let G = parseFloat(z);
      if (!Number.isNaN(G)) Q = G * 1000;
      else Q = Date.parse(z) - Date.now();
    }
    if (Q === void 0) {
      let G = $.maxRetries ?? this.maxRetries;
      Q = this.calculateDefaultRetryTimeoutMillis(X, G);
    }
    return (await fV(Q), this.makeRequest($, X - 1, J));
  }
  calculateDefaultRetryTimeoutMillis($, X) {
    let Q = X - $,
      Y = Math.min(0.5 * Math.pow(2, Q), 8),
      z = 1 - Math.random() * 0.25;
    return Y * z * 1000;
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
      { method: W, path: Q, query: Y, defaultBaseURL: z } = J,
      G = this.buildURL(Q, Y, z);
    if ("timeout" in J) TV("timeout", J.timeout);
    J.timeout = J.timeout ?? this.timeout;
    let { bodyHeaders: H, body: U } = this.buildBody({ options: J }),
      K = await this.buildHeaders({
        options: $,
        method: W,
        bodyHeaders: H,
        retryCount: X,
      });
    return {
      req: {
        method: W,
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
  async buildHeaders({ options: $, method: X, bodyHeaders: J, retryCount: W }) {
    let Q = {};
    if (this.idempotencyHeader && X !== "get") {
      if (!$.idempotencyKey) $.idempotencyKey = this.defaultIdempotencyKey();
      Q[this.idempotencyHeader] = $.idempotencyKey;
    }
    let Y = i([
      Q,
      {
        Accept: "application/json",
        "User-Agent": this.getUserAgent(),
        "X-Stainless-Retry-Count": String(W),
        ...($.timeout
          ? { "X-Stainless-Timeout": String(Math.trunc($.timeout / 1000)) }
          : {}),
        ...mV(),
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
    return (this.validateHeaders(Y), Y.values);
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
      return { bodyHeaders: void 0, body: uJ($) };
    else if (
      typeof $ === "object" &&
      J.values.get("content-type") === "application/x-www-form-urlencoded"
    )
      return {
        bodyHeaders: { "content-type": "application/x-www-form-urlencoded" },
        body: this.stringifyQuery($),
      };
    else return D(this, K7, "f").call(this, { body: $, headers: J });
  }
}
((hY = P$),
  (K7 = new WeakMap()),
  (gY = new WeakSet()),
  (IN = function () {
    return this.baseURL !== "https://api.anthropic.com";
  }));
P$.Anthropic = hY;
P$.HUMAN_PROMPT = ZN;
P$.AI_PROMPT = bN;
P$.DEFAULT_TIMEOUT = 600000;
P$.AnthropicError = f;
P$.APIError = T$;
P$.APIConnectionError = L1;
P$.APIConnectionTimeoutError = C8;
P$.APIUserAbortError = m$;
P$.NotFoundError = x8;
P$.ConflictError = T8;
P$.RateLimitError = y8;
P$.BadRequestError = v8;
P$.AuthenticationError = k8;
P$.InternalServerError = g8;
P$.PermissionDeniedError = _8;
P$.UnprocessableEntityError = f8;
P$.toFile = iJ;
class P1 extends P$ {
  constructor() {
    super(...arguments);
    ((this.completions = new L0(this)),
      (this.messages = new R1(this)),
      (this.models = new A0(this)),
      (this.beta = new e6(this)));
  }
}
P1.Completions = L0;
P1.Messages = R1;
P1.Models = A0;
P1.Beta = e6;
function p4($) {
  return $ instanceof Error ? $ : Error(String($));
}
function I0($) {
  return $ instanceof Error ? $.message : String($);
}
function g6($) {
  if ($ && typeof $ === "object" && "code" in $ && typeof $.code === "string")
    return $.code;
  return;
}
function d4($) {
  return g6($) === "ENOENT";
}
function uY($) {
  return g6($) === "EISDIR";
}
import { randomUUID as hb } from "crypto";
import { appendFile as ub, mkdir as mb } from "fs/promises";
import { join as RN } from "path";
var E1,
  Z0 = null;
function PN() {
  if (Z0) return Z0;
  if (!J6(process.env.DEBUG_CLAUDE_AGENT_SDK))
    return ((E1 = null), (Z0 = Promise.resolve()), Z0);
  let $ = RN(y4(), "debug");
  return (
    (E1 = RN($, `sdk-${hb()}.txt`)),
    process.stderr.write(`SDK debug logs: ${E1}
`),
    (Z0 = mb($, { recursive: !0 })
      .then(() => {})
      .catch(() => {})),
    Z0
  );
}
function EN() {
  return (PN(), E1 ?? null);
}
function Q6($) {
  if (E1 === null) return;
  let J = `${new Date().toISOString()} ${$}
`;
  PN().then(() => {
    if (E1) ub(E1, J).catch(() => {});
  });
}
import { realpathSync as CN } from "fs";
import { cwd as lb } from "process";
import { randomUUID as D9 } from "crypto";
function SN() {
  return { sent: new Set(), rejected: new Set() };
}
var cb = {
  renderTarget: "ink",
  workspace: "local",
  canDrive: !0,
  transcriptSource: "local-jsonl",
  remote: null,
};
function pb() {
  let $ = "";
  if (
    typeof process < "u" &&
    typeof process.cwd === "function" &&
    typeof CN === "function"
  ) {
    let J = lb();
    try {
      $ = CN(J).normalize("NFC");
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
    attacherCaps: null,
    hasStreamingInput: !1,
    fridayFundayDisabledForSession: !1,
    kairosActive: !1,
    rendererMode: void 0,
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
    sessionId: D9(),
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
    inlinePluginUrls: [],
    chromeFlagOverride: void 0,
    useCoworkPlugins: !1,
    sessionBypassPermissionsMode: !1,
    scheduledTasksEnabled: !1,
    sessionPrResolved: !1,
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
    caps: cb,
    replBridgeActive: !1,
    directConnectServerUrl: void 0,
    mcpConnectNonBlocking: !1,
    activeRoutine: void 0,
    systemPromptSectionCache: new Map(),
    lastEmittedDate: null,
    additionalDirectoriesForClaudeMd: [],
    allowedChannels: [],
    activeInputs: new Map(),
    hasDevChannels: !1,
    sessionProjectDir: null,
    promptCache1hAllowlist: null,
    stickyBetas: SN(),
    thinkingTypeOverrides: new Map(),
    inferenceProfileBackingModels: new Map(),
    promptId: null,
    promptIndex: 0,
    lastMainRequestId: void 0,
    lastApiCompletionTimestamp: null,
    pendingPostCompaction: !1,
  };
}
var db = pb();
function mY() {
  return db.sessionId;
}
var ib = j1(),
  Dt = ib.subscribe;
var nb = j1(),
  Ft = nb.subscribe;
var rb = j1(),
  jt = rb.subscribe;
var ob = j1();
var Lt = ob.subscribe;
import {
  appendFile as lN,
  mkdir as wR,
  rename as cN,
  stat as BR,
  symlink as qR,
  unlink as pY,
} from "fs/promises";
import { dirname as pN, join as oY } from "path";
function vN({
  writeFn: $,
  flushIntervalMs: X = 1000,
  maxBufferSize: J = 100,
  maxBufferBytes: W = 1 / 0,
  immediateMode: Q = !1,
}) {
  let Y = [],
    z = 0,
    G = null,
    H = null;
  function U() {
    if (G) (clearTimeout(G), (G = null));
  }
  function K() {
    if (H) ($(H.join("")), (H = null));
    if (Y.length === 0) return;
    ($(Y.join("")), (Y = []), (z = 0), U());
  }
  function V() {
    if (!G) G = setTimeout(K, X);
  }
  function N() {
    if (H) {
      (H.push(...Y), (Y = []), (z = 0), U());
      return;
    }
    let O = Y;
    ((Y = []),
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
      if ((Y.push(O), (z += O.length), V(), Y.length >= J || z >= W)) N();
    },
    flush: K,
    dispose() {
      K();
    },
  };
}
var kN = new Set();
function tb($) {
  if (typeof $ === "function") return $;
  if (Symbol.asyncDispose in $) return () => $[Symbol.asyncDispose]();
  return () => $[Symbol.dispose]();
}
function _N($) {
  let X = tb($);
  kN.add(X);
  let J = () => {
    kN.delete(X);
  };
  return Object.assign(J, { [Symbol.dispose]: J });
}
var xN = f6(($) => {
  if (!$ || $.trim() === "") return null;
  let X = $.split(",")
    .map((Y) => Y.trim())
    .filter(Boolean);
  if (X.length === 0) return null;
  let J = X.some((Y) => Y.startsWith("!")),
    W = X.some((Y) => !Y.startsWith("!"));
  if (J && W) return null;
  let Q = X.map((Y) => Y.replace(/^!/, "").toLowerCase());
  return { include: J ? [] : Q, exclude: J ? Q : [], isExclusive: J };
});
function ab($) {
  let X = [],
    J = $.match(/^MCP server ["']([^"']+)["']/);
  if (J && J[1]) (X.push("mcp"), X.push(J[1].toLowerCase()));
  else {
    let Y = $.match(/^([^:[]+):/);
    if (Y && Y[1]) X.push(Y[1].trim().toLowerCase());
  }
  let W = $.match(/^\[([^\]]+)]/);
  if (W && W[1]) X.push(W[1].trim().toLowerCase());
  if ($.toLowerCase().includes("1p event:")) X.push("1p");
  let Q = $.match(/:\s*([^:]+?)(?:\s+(?:type|mode|status|event))?:/);
  if (Q && Q[1]) {
    let Y = Q[1].trim().toLowerCase();
    if (Y.length < 30 && !Y.includes(" ")) X.push(Y);
  }
  return Array.from(new Set(X));
}
function sb($, X) {
  if (!X) return !0;
  if ($.length === 0) return !1;
  if (X.isExclusive) return !$.some((J) => X.exclude.includes(J));
  else return $.some((J) => X.include.includes(J));
}
function TN($, X) {
  if (!X) return !0;
  let J = ab($);
  return sb(J, X);
}
import * as r from "fs";
import {
  mkdir as eb,
  open as $R,
  readdir as XR,
  readFile as fN,
  rename as JR,
  rmdir as QR,
  rm as WR,
  stat as YR,
  unlink as zR,
} from "fs/promises";
var GR = {
    cwd() {
      return process.cwd();
    },
    existsSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.existsSync(${$})`, 0);
        return r.existsSync($);
      } catch (W) {
        var Q = W,
          Y = 1;
      } finally {
        D$(J, Q, Y);
      }
    },
    async stat($) {
      return YR($);
    },
    async readdir($) {
      return XR($, { withFileTypes: !0 });
    },
    async unlink($) {
      return zR($);
    },
    async rmdir($) {
      return QR($);
    },
    async rm($, X) {
      return WR($, X);
    },
    async mkdir($, X) {
      try {
        await eb($, { recursive: !0, ...X });
      } catch (J) {
        if (g6(J) !== "EEXIST") throw J;
      }
    },
    async readFile($, X) {
      return fN($, { encoding: X.encoding });
    },
    async rename($, X) {
      return JR($, X);
    },
    statSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.statSync(${$})`, 0);
        return r.statSync($);
      } catch (W) {
        var Q = W,
          Y = 1;
      } finally {
        D$(J, Q, Y);
      }
    },
    lstatSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.lstatSync(${$})`, 0);
        return r.lstatSync($);
      } catch (W) {
        var Q = W,
          Y = 1;
      } finally {
        D$(J, Q, Y);
      }
    },
    readFileSync($, X) {
      let W = [];
      try {
        const J = q$(W, R$`fs.readFileSync(${$})`, 0);
        return r.readFileSync($, { encoding: X.encoding });
      } catch (Q) {
        var Y = Q,
          z = 1;
      } finally {
        D$(W, Y, z);
      }
    },
    readFileBytesSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.readFileBytesSync(${$})`, 0);
        return r.readFileSync($);
      } catch (W) {
        var Q = W,
          Y = 1;
      } finally {
        D$(J, Q, Y);
      }
    },
    readSync($, X) {
      let Q = [];
      try {
        const J = q$(Q, R$`fs.readSync(${$}, ${X.length} bytes)`, 0);
        let W = void 0;
        try {
          W = r.openSync($, "r");
          let H = Buffer.alloc(X.length),
            U = r.readSync(W, H, 0, X.length, 0);
          return { buffer: H, bytesRead: U };
        } finally {
          if (W) r.closeSync(W);
        }
      } catch (Y) {
        var z = Y,
          G = 1;
      } finally {
        D$(Q, z, G);
      }
    },
    appendFileSync($, X, J) {
      let Q = [];
      try {
        const W = q$(Q, R$`fs.appendFileSync(${$}, ${X.length} chars)`, 0);
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
      } catch (Y) {
        var z = Y,
          G = 1;
      } finally {
        D$(Q, z, G);
      }
    },
    copyFileSync($, X) {
      let W = [];
      try {
        const J = q$(W, R$`fs.copyFileSync(${$} → ${X})`, 0);
        r.copyFileSync($, X);
      } catch (Q) {
        var Y = Q,
          z = 1;
      } finally {
        D$(W, Y, z);
      }
    },
    unlinkSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.unlinkSync(${$})`, 0);
        r.unlinkSync($);
      } catch (W) {
        var Q = W,
          Y = 1;
      } finally {
        D$(J, Q, Y);
      }
    },
    renameSync($, X) {
      let W = [];
      try {
        const J = q$(W, R$`fs.renameSync(${$} → ${X})`, 0);
        r.renameSync($, X);
      } catch (Q) {
        var Y = Q,
          z = 1;
      } finally {
        D$(W, Y, z);
      }
    },
    linkSync($, X) {
      let W = [];
      try {
        const J = q$(W, R$`fs.linkSync(${$} → ${X})`, 0);
        r.linkSync($, X);
      } catch (Q) {
        var Y = Q,
          z = 1;
      } finally {
        D$(W, Y, z);
      }
    },
    symlinkSync($, X, J) {
      let Q = [];
      try {
        const W = q$(Q, R$`fs.symlinkSync(${$} → ${X})`, 0);
        r.symlinkSync($, X, J);
      } catch (Y) {
        var z = Y,
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
      } catch (W) {
        var Q = W,
          Y = 1;
      } finally {
        D$(J, Q, Y);
      }
    },
    realpathSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.realpathSync(${$})`, 0);
        return r.realpathSync($).normalize("NFC");
      } catch (W) {
        var Q = W,
          Y = 1;
      } finally {
        D$(J, Q, Y);
      }
    },
    mkdirSync($, X) {
      let Q = [];
      try {
        const J = q$(Q, R$`fs.mkdirSync(${$})`, 0);
        let W = { recursive: !0 };
        if (X?.mode !== void 0) W.mode = X.mode;
        try {
          r.mkdirSync($, W);
        } catch (H) {
          if (g6(H) !== "EEXIST") throw H;
        }
      } catch (Y) {
        var z = Y,
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
      } catch (W) {
        var Q = W,
          Y = 1;
      } finally {
        D$(J, Q, Y);
      }
    },
    readdirStringSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.readdirStringSync(${$})`, 0);
        return r.readdirSync($);
      } catch (W) {
        var Q = W,
          Y = 1;
      } finally {
        D$(J, Q, Y);
      }
    },
    isDirEmptySync($) {
      let W = [];
      try {
        const X = q$(W, R$`fs.isDirEmptySync(${$})`, 0);
        let J = this.readdirSync($);
        return J.length === 0;
      } catch (Q) {
        var Y = Q,
          z = 1;
      } finally {
        D$(W, Y, z);
      }
    },
    rmdirSync($) {
      let J = [];
      try {
        const X = q$(J, R$`fs.rmdirSync(${$})`, 0);
        r.rmdirSync($);
      } catch (W) {
        var Q = W,
          Y = 1;
      } finally {
        D$(J, Q, Y);
      }
    },
    rmSync($, X) {
      let W = [];
      try {
        const J = q$(W, R$`fs.rmSync(${$})`, 0);
        r.rmSync($, X);
      } catch (Q) {
        var Y = Q,
          z = 1;
      } finally {
        D$(W, Y, z);
      }
    },
    createWriteStream($) {
      return r.createWriteStream($);
    },
    async readFileBytes($, X) {
      if (X === void 0) return fN($);
      let J = await $R($, "r");
      try {
        let { size: W } = await J.stat(),
          Q = Math.min(W, X),
          Y = Buffer.allocUnsafe(Q),
          z = 0;
        while (z < Q) {
          let { bytesRead: G } = await J.read(Y, z, Q - z, z);
          if (G === 0) break;
          z += G;
        }
        return z < Q ? Y.subarray(0, z) : Y;
      } finally {
        await J.close();
      }
    },
  },
  HR = GR;
function V7() {
  return HR;
}
function UR($, X) {
  if ($.destroyed) return;
  $.write(X);
}
function yN($) {
  UR(process.stderr, $);
}
var KR =
    /api[_-]?key|secret|token|password|passwd|credential|bearer|authorization|auth[_-]?header|cookie|session[_-]?(?:id|key)|connection[_-]?string|(?:private|ssh|encryption|signing|access|deploy|master|license)[_-]?key|client[_-]?secret/i,
  gN = "[^\\s,;&}\\])]+",
  hN = `\\[REDACTED\\]|"[^"]*"|'[^']*'|(?:Bearer|Basic)\\s+(?:\\[REDACTED\\]|${gN})|${gN}`,
  VR = ["sk", "ant", "api"].join("-"),
  NR = [
    { id: "url-userinfo", source: ":\\/\\/([^/@\\s]+)@", confidence: "low" },
    {
      id: "gcp-service-account",
      source: "\\b([a-z0-9-]+@[a-z0-9-]+\\.iam\\.gserviceaccount\\.com)\\b",
      flags: "i",
      confidence: "low",
    },
    {
      id: "loose-anthropic-key",
      source: "\\b(sk-ant-?[\\w-]{10,})",
      confidence: "low",
    },
    {
      id: "http-auth-scheme",
      source: "\\b(?:Bearer|Basic)\\s+([A-Za-z0-9+/=._~-]{20,})",
      flags: "i",
      confidence: "low",
    },
    {
      id: "loose-jwt",
      source:
        "\\b(eyJ[A-Za-z0-9_-]{10,}\\.[A-Za-z0-9_-]{10,}\\.[A-Za-z0-9_-]{10,})",
      confidence: "low",
    },
    {
      id: "sensitive-assign",
      source: `(?:${KR.source})[\\w.-]*["']?\\s*[=:]\\s*(${hN})`,
      flags: "i",
      confidence: "low",
    },
    {
      id: "cloud-env-var",
      source: `\\b(?:AWS|GOOGLE|GCP|GCLOUD|AZURE)_\\w+\\s*[=:]\\s*(${hN})`,
      flags: "i",
      confidence: "low",
    },
    {
      id: "aws-access-token",
      source: "\\b((?:A3T[A-Z0-9]|AKIA|ASIA|ABIA|ACCA)[A-Z2-7]{16})\\b",
      confidence: "high",
    },
    {
      id: "gcp-api-key",
      source: `\\b(AIza[\\w-]{35})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "azure-ad-client-secret",
      source: `(?:^|[\\\\'"\\x60\\s>=:(,)])([a-zA-Z0-9_~.]{3}\\dQ~[a-zA-Z0-9_~.-]{31,34})(?:$|[\\\\'"\\x60\\s<),])`,
      confidence: "high",
    },
    {
      id: "digitalocean-pat",
      source: `\\b(dop_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "digitalocean-access-token",
      source: `\\b(doo_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "anthropic-api-key",
      source: `\\b(${VR}03-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "anthropic-admin-api-key",
      source: `\\b(sk-ant-admin01-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "openai-api-key",
      source: `\\b(sk-(?:proj|svcacct|admin)-(?:[A-Za-z0-9_-]{74}|[A-Za-z0-9_-]{58})T3BlbkFJ(?:[A-Za-z0-9_-]{74}|[A-Za-z0-9_-]{58})\\b|sk-[a-zA-Z0-9]{20}T3BlbkFJ[a-zA-Z0-9]{20})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "huggingface-access-token",
      source: `\\b(hf_[a-zA-Z]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    { id: "github-pat", source: "ghp_[0-9a-zA-Z]{36}", confidence: "high" },
    {
      id: "github-fine-grained-pat",
      source: "github_pat_\\w{82}",
      confidence: "high",
    },
    {
      id: "github-app-token",
      source: "(?:ghu|ghs)_[0-9a-zA-Z]{36}",
      confidence: "high",
    },
    { id: "github-oauth", source: "gho_[0-9a-zA-Z]{36}", confidence: "high" },
    {
      id: "github-refresh-token",
      source: "ghr_[0-9a-zA-Z]{36}",
      confidence: "high",
    },
    { id: "gitlab-pat", source: "glpat-[\\w-]{20}", confidence: "high" },
    {
      id: "gitlab-deploy-token",
      source: "gldt-[0-9a-zA-Z_\\-]{20}",
      confidence: "high",
    },
    {
      id: "slack-bot-token",
      source: "xoxb-[0-9]{10,13}-[0-9]{10,13}[a-zA-Z0-9-]*",
      confidence: "high",
    },
    {
      id: "slack-user-token",
      source: "xox[pe](?:-[0-9]{10,13}){3}-[a-zA-Z0-9-]{28,34}",
      confidence: "high",
    },
    {
      id: "slack-app-token",
      source: "xapp-\\d-[A-Z0-9]+-\\d+-[a-z0-9]+",
      flags: "i",
      confidence: "high",
    },
    { id: "twilio-api-key", source: "SK[0-9a-fA-F]{32}", confidence: "high" },
    {
      id: "sendgrid-api-token",
      source: `\\b(SG\\.[a-zA-Z0-9=_\\-.]{66})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "npm-access-token",
      source: `\\b(npm_[a-zA-Z0-9]{36})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "pypi-upload-token",
      source: "pypi-AgEIcHlwaS5vcmc[\\w-]{50,1000}",
      confidence: "high",
    },
    {
      id: "databricks-api-token",
      source: `\\b(dapi[a-f0-9]{32}(?:-\\d)?)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "hashicorp-tf-api-token",
      source: "[a-zA-Z0-9]{14}\\.atlasv1\\.[a-zA-Z0-9\\-_=]{60,70}",
      confidence: "high",
    },
    {
      id: "pulumi-api-token",
      source: `\\b(pul-[a-f0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "postman-api-token",
      source: `\\b(PMAK-[a-fA-F0-9]{24}-[a-fA-F0-9]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "grafana-api-key",
      source: `\\b(eyJrIjoi[A-Za-z0-9+/]{70,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "grafana-cloud-api-token",
      source: `\\b(glc_[A-Za-z0-9+/]{32,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "grafana-service-account-token",
      source: `\\b(glsa_[A-Za-z0-9]{32}_[A-Fa-f0-9]{8})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "sentry-user-token",
      source: `\\b(sntryu_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "sentry-org-token",
      source:
        "\\bsntrys_eyJpYXQiO[a-zA-Z0-9+/]{10,200}(?:LCJyZWdpb25fdXJs|InJlZ2lvbl91cmwi|cmVnaW9uX3VybCI6)[a-zA-Z0-9+/]{10,200}={0,2}_[a-zA-Z0-9+/]{43}",
      confidence: "high",
    },
    {
      id: "stripe-access-token",
      source: `\\b((?:sk|rk)_(?:test|live|prod)_[a-zA-Z0-9]{10,99})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "shopify-access-token",
      source: "shpat_[a-fA-F0-9]{32}",
      confidence: "high",
    },
    {
      id: "shopify-shared-secret",
      source: "shpss_[a-fA-F0-9]{32}",
      confidence: "high",
    },
    {
      id: "private-key",
      source:
        "-----BEGIN[ A-Z0-9_-]{0,100}PRIVATE KEY(?: BLOCK)?-----[\\s\\S-]{64,}?-----END[ A-Z0-9_-]{0,100}PRIVATE KEY(?: BLOCK)?-----",
      flags: "i",
      confidence: "high",
    },
  ];
var uN = null;
function OR($) {
  return NR.map((X) => ({
    id: X.id,
    confidence: X.confidence,
    re: new RegExp(
      X.source,
      $ ? (X.flags ?? "").replace("g", "") + "g" : (X.flags ?? ""),
    ),
  }));
}
function mN($) {
  uN ??= OR(!0);
  for (let X of uN)
    $ = $.replace(X.re, (J, W) => {
      if (typeof W !== "string") return "[REDACTED]";
      let Q = J.lastIndexOf(W);
      return J.slice(0, Q) + "[REDACTED]" + J.slice(Q + W.length);
    });
  return $;
}
var dY = { verbose: 0, debug: 1, info: 2, warn: 3, error: 4 },
  DR = f6(() => {
    let $ = process.env.CLAUDE_CODE_DEBUG_LOG_LEVEL?.toLowerCase().trim();
    if ($ && Object.hasOwn(dY, $)) return $;
    return "debug";
  }),
  FR = !1;
function O7() {
  return typeof process < "u" && Array.isArray(process.argv)
    ? process.argv
    : [];
}
var iY = f6(() => {
  let $ = O7();
  return (
    FR ||
    J6(process.env.DEBUG) ||
    J6(process.env.DEBUG_SDK) ||
    $.includes("--debug") ||
    $.includes("-d") ||
    dN() ||
    $.some((X) => X.startsWith("--debug=")) ||
    iN() !== null
  );
});
var jR = f6(() => {
    let $ = O7().find((J) => J.startsWith("--debug="));
    if (!$) return null;
    let X = $.substring(8);
    return xN(X);
  }),
  dN = f6(() => {
    let $ = O7();
    return $.includes("--debug-to-stderr") || $.includes("-d2e");
  }),
  iN = f6(() => {
    let $ = O7();
    for (let X = 0; X < $.length; X++) {
      let J = $[X];
      if (J.startsWith("--debug-file=")) return J.substring(13);
      if (J === "--debug-file" && X + 1 < $.length) return $[X + 1];
    }
    return null;
  });
function LR($) {
  if (!iY()) return !1;
  if (
    typeof process > "u" ||
    typeof process.versions > "u" ||
    typeof process.versions.node > "u"
  )
    return !1;
  let X = jR();
  return TN($, X);
}
var MR = !1;
var AR = 10485760,
  N7 = null,
  lY = Promise.resolve(),
  F9 = -1,
  cY = !1,
  nY = null;
async function nN($, X, J = AR) {
  if (F9 < 0)
    F9 = await BR($)
      .then((W) => W.size)
      .catch(() => 0);
  else F9 += X;
  if (F9 <= J || cY) return;
  cY = !0;
  try {
    let W = $.endsWith(".txt") ? `${$.slice(0, -4)}.1.txt` : `${$}.1`;
    try {
      await cN($, W);
    } catch (Q) {
      if (!d4(Q))
        (await pY(W).catch(() => {}),
          await cN($, W).catch(() => pY($).catch(() => {})));
    }
    F9 = 0;
  } finally {
    cY = !1;
  }
}
function rN($) {
  return ((nY = oY($, `${mY()}.txt`)), nY);
}
async function IR($, X, J, W) {
  if ($) await wR(X, { recursive: !0 }).catch(() => {});
  let Q = J;
  try {
    await lN(J, W);
  } catch (Y) {
    if (!uY(Y)) throw Y;
    ((Q = rN(J)), await lN(Q, W));
  }
  (await nN(Q, Buffer.byteLength(W)).catch(rY), tN());
}
function rY() {}
function ZR() {
  if (!N7) {
    let $ = null;
    ((N7 = vN({
      writeFn: (X) => {
        let J = oN(),
          W = pN(J),
          Q = $ !== W;
        if ((($ = W), iY())) {
          if (Q)
            try {
              V7().mkdirSync(W);
            } catch {}
          let Y = J;
          try {
            V7().appendFileSync(J, X);
          } catch (z) {
            if (!uY(z)) throw z;
            ((Y = rN(J)), V7().appendFileSync(Y, X));
          }
          (nN(Y, Buffer.byteLength(X)).catch(rY), tN());
          return;
        }
        lY = lY.then(IR.bind(null, Q, W, J, X)).catch(rY);
      },
      flushIntervalMs: 1000,
      maxBufferSize: 100,
      immediateMode: iY(),
    })),
      _N(async () => {
        (N7?.dispose(), await lY);
      }));
  }
  return N7;
}
function S$($, { level: X } = { level: "debug" }) {
  if (dY[X] < dY[DR()]) return;
  if (!LR($)) return;
  if (
    MR &&
    $.includes(`
`)
  )
    $ = w$($);
  let W = `${new Date().toISOString()} [${X.toUpperCase()}] ${mN($.trim())}
`;
  if (dN()) {
    yN(W);
    return;
  }
  ZR().write(W);
}
function oN() {
  return (
    iN() ??
    nY ??
    process.env.CLAUDE_CODE_DEBUG_LOGS_DIR ??
    oY(y4(), "debug", `${mY()}.txt`)
  );
}
var tN = f6(async () => {
  try {
    let $ = oN(),
      X = pN($),
      J = oY(X, "latest");
    (await pY(J).catch(() => {}), await qR($, J));
  } catch {}
});
var Qa = (() => {
  let $ = process.env.CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS;
  if ($ !== void 0) {
    let X = Number($);
    if (!Number.isNaN(X) && X >= 0) return X;
  }
  return 1 / 0;
})();
var bR = { [Symbol.dispose]() {} };
function RR() {
  return bR;
}
var R$ = RR;
function w$($, X, J) {
  let Q = [];
  try {
    const W = q$(Q, R$`JSON.stringify(${$})`, 0);
    return JSON.stringify($, X, J);
  } catch (Y) {
    var z = Y,
      G = 1;
  } finally {
    D$(Q, z, G);
  }
}
var l$ = ($, X) => {
  let W = [];
  try {
    const J = q$(W, R$`JSON.parse(${$})`, 0);
    return typeof X > "u" ? JSON.parse($) : JSON.parse($, X);
  } catch (Q) {
    var Y = Q,
      z = 1;
  } finally {
    D$(W, Y, z);
  }
};
function PR($) {
  let X = $.trim();
  return X.startsWith("{") && X.endsWith("}");
}
function aN($, X) {
  let J = { ...$ };
  if (X) {
    let W =
        X.enabled === !0 && X.failIfUnavailable === void 0
          ? { ...X, failIfUnavailable: !0 }
          : X,
      Q = J.settings;
    if (Q && !PR(Q))
      throw Error(
        "Cannot use both a settings file path and the sandbox option. Include the sandbox configuration in your settings file instead.",
      );
    let Y = { sandbox: W };
    if (Q)
      try {
        Y = { ...l$(Q), sandbox: W };
      } catch {}
    J.settings = w$(Y);
  }
  return J;
}
var CR = 2000,
  w7 = new Set(),
  sN = !1;
function vR() {
  for (let $ of w7) if (!$.killed) $.kill("SIGTERM");
}
function kR($) {
  if ((w7.add($), !sN)) ((sN = !0), process.on("exit", vR));
}
class j9 {
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
    if (((this.abortController = $.abortController || z0()), $.deferSpawn))
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
      throw (this.spawnAbort(p4(X)), X);
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
    return G0() ? "bun" : "node";
  }
  spawnLocalProcess($) {
    let { command: X, args: J, cwd: W, env: Q, signal: Y } = $,
      z =
        J6(Q.DEBUG_CLAUDE_AGENT_SDK) || this.options.stderr ? "pipe" : "ignore",
      G = ER(X, J, {
        cwd: W,
        stdio: ["pipe", "pipe", z],
        signal: Y,
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
          cwd: W,
          executable: Q = this.getDefaultExecutable(),
          executableArgs: Y = [],
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
          canUseTool: s6,
          includePartialMessages: J0,
          plugins: _4,
          sandbox: Q0,
        } = this.options,
        { allowedTools: q1 = [] } = this.options;
      if (O$ !== void 0) {
        let k$ = O$ === "all" ? ["Skill"] : O$.map((u$) => `Skill(${u$})`),
          x6 = new Set(q1);
        q1 = [...q1, ...k$.filter((u$) => !x6.has(u$))];
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
        let k$ = EN();
        if (k$) l.push("--debug-file", k$);
      }
      if (s6) {
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
      if (J0) l.push("--include-partial-messages");
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
      let M8 = { ...(z ?? {}) };
      if (this.options.settings) M8.settings = this.options.settings;
      let $Y = aN(M8, Q0);
      for (let [k$, x6] of Object.entries($Y))
        if (x6 === null) l.push(`--${k$}`);
        else l.push(`--${k$}`, x6);
      if (!H.CLAUDE_CODE_ENTRYPOINT) H.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
      if ((delete H.NODE_OPTIONS, J6(H.DEBUG_CLAUDE_AGENT_SDK))) H.DEBUG = "1";
      else delete H.DEBUG;
      let W0 = _R(G),
        A8 = W0 ? G : Q,
        I8 = W0 ? [...Y, ...l] : [...Y, G, ...l],
        vJ = {
          command: A8,
          args: I8,
          cwd: W,
          env: H,
          signal: this.abortController.signal,
        };
      if (this.options.spawnClaudeCodeProcess)
        (Q6(`Spawning Claude Code (custom): ${A8} ${I8.join(" ")}`),
          (this.process = this.options.spawnClaudeCodeProcess(vJ)));
      else
        (Q6(`Spawning Claude Code: ${A8} ${I8.join(" ")}`),
          (this.process = this.spawnLocalProcess(vJ)));
      ((this.processStdin = this.process.stdin),
        (this.processStdout = this.process.stdout),
        kR(this.process),
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
            this.exitError = new t$("Claude Code process aborted by user");
          else if (d4(k$)) {
            let x6 = W0
              ? `Claude Code native binary not found at ${G}. Please ensure Claude Code is installed via native installer or specify a valid path with options.pathToClaudeCodeExecutable.`
              : `Claude Code executable not found at ${G}. Is options.pathToClaudeCodeExecutable set?`;
            ((this.exitError = ReferenceError(x6)), Q6(this.exitError.message));
          } else
            ((this.exitError = Error(
              `Failed to spawn Claude Code process: ${k$.message}`,
            )),
              Q6(this.exitError.message));
        }),
        this.process.on("exit", (k$, x6) => {
          if (((this.ready = !1), this.abortController.signal.aborted))
            this.exitError = new t$("Claude Code process aborted by user");
          else {
            let u$ = this.getProcessExitError(k$, x6);
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
    if (this.abortController.signal.aborted) throw new t$("Operation aborted");
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
        Error(`Failed to write to process stdin: ${I0(X)}`)
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
        CR,
        $,
      ).unref(),
        $.once("exit", () => w7.delete($)));
    else if ($) w7.delete($);
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
    let $ = SR({ input: this.processStdout }),
      X = this.process
        ? (() => {
            let J = this.process,
              W = () => $.close();
            return (J.on("error", W), () => J.off("error", W));
          })()
        : void 0;
    if (this.exitError) $.close();
    try {
      for await (let J of $)
        if (J.trim()) {
          let W;
          try {
            W = l$(J);
          } catch (Q) {
            Q6(`Non-JSON stdout: ${J}`);
            continue;
          }
          yield W;
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
    let X = (J, W) => {
      let Q = this.getProcessExitError(J, W);
      $(Q);
    };
    return (
      this.process.on("exit", X),
      this.exitListeners.push({ callback: $, handler: X }),
      () => {
        if (this.process) this.process.off("exit", X);
        let J = this.exitListeners.findIndex((W) => W.handler === X);
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
      let J = (Q, Y) => {
        if (this.abortController.signal.aborted) {
          X(new t$("Operation aborted"));
          return;
        }
        let z = this.getProcessExitError(Q, Y);
        if (z) X(z);
        else $();
      };
      this.process.once("exit", J);
      let W = (Q) => {
        (this.process.off("exit", J), X(Q));
      };
      (this.process.once("error", W),
        this.process.once("exit", () => {
          this.process.off("error", W);
        }));
    });
  }
}
function _R($) {
  return ![".js", ".mjs", ".tsx", ".ts", ".jsx"].some((J) => $.endsWith(J));
}
function B7($, X = process.platform, J = process.arch) {
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
class S1 {
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
function xR() {
  return { eventQueue: [], sink: null };
}
var TR = xR();
function q7($, X) {
  let J = TR;
  if (J.sink === null) {
    J.eventQueue.push({ eventName: $, metadata: X, async: !1 });
    return;
  }
  J.sink.logEvent($, X);
}
function L9($) {
  q7("tengu_feature_ok", { feature_name: $ });
}
function M9($, X) {
  q7("tengu_feature_bad", { feature_name: $, error_code: X });
}
function eN($, X) {
  q7("tengu_feature_sad", { feature_name: $, error_code: X });
}
async function $4($, X, J) {
  try {
    let W = await X();
    return (L9($), W);
  } catch (W) {
    throw (M9($, J?.(W) ?? "error"), W);
  }
}
class tY {
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
class A9 {
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
  inputStream = new S1();
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
      uuid: D9(),
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
  constructor($, X, J, W, Q, Y = new Map(), z, G, H, U) {
    this.transport = $;
    this.isSingleUserTurn = X;
    this.canUseTool = J;
    this.hooks = W;
    this.abortController = Q;
    this.jsonSchema = z;
    this.initConfig = G;
    this.onElicitation = H;
    this.getOAuthToken = U;
    for (let [K, V] of Y) this.connectSdkMcpServer(K, V);
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
      if (this.lastErrorResultText !== void 0 && !($ instanceof t$)) {
        let X = Error(
          `Claude Code returned an error result: ${this.lastErrorResultText}`,
        );
        (S$(
          `[Query.readMessages] Replacing exit error with result text. Original: ${I0($)}`,
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
      let W = {
        type: "control_response",
        response: { subtype: "success", request_id: $.request_id, response: J },
      };
      await Promise.resolve(
        this.transport.write(
          w$(W) +
            `
`,
        ),
      );
    } catch (J) {
      if (this.cleanupPerformed) return;
      let W = {
        type: "control_response",
        response: { subtype: "error", request_id: $.request_id, error: I0(J) },
      };
      try {
        await Promise.resolve(
          this.transport.write(
            w$(W) +
              `
`,
          ),
        );
      } catch (Q) {
        S$(
          `[Query.handleControlRequest] Error-response write failed: ${I0(Q)}`,
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
        W = this.sdkMcpTransports.get(J.server_name);
      if (!W) throw Error(`SDK MCP server not found: ${J.server_name}`);
      if ("method" in J.message && "id" in J.message && J.message.id !== null)
        return {
          mcp_response: await this.handleMcpControlRequest(J.server_name, J, W),
        };
      else {
        if (W.onmessage) W.onmessage(J.message);
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
      for (let [Q, Y] of Object.entries(this.hooks))
        if (Y.length > 0)
          $[Q] = Y.map((z) => {
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
        webSearchIsolationExemptMcpServers:
          this.initConfig?.webSearchIsolationExemptMcpServers,
        promptSuggestions: this.initConfig?.promptSuggestions,
        agentProgressSummaries: this.initConfig?.agentProgressSummaries,
        forwardSubagentText: this.initConfig?.forwardSubagentText,
      };
    return (await this.request(J)).response;
  }
  async interrupt() {
    return $4("sdk_interrupt", async () => {
      await this.request({ subtype: "interrupt" });
    });
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
    return $4("sdk_apply_flag_settings", async () => {
      await this.request({ subtype: "apply_flag_settings", settings: $ });
    });
  }
  async getSettings() {
    return (await this.request({ subtype: "get_settings" })).response;
  }
  async rewindFiles($, X) {
    return $4("sdk_rewind_files", async () => {
      return (
        await this.request({
          subtype: "rewind_files",
          user_message_id: $,
          dry_run: X?.dryRun,
        })
      ).response;
    });
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
    return $4("sdk_session_title_generate", async () => {
      return (
        await this.request({
          subtype: "generate_session_title",
          description: $,
          persist: X?.persist,
        })
      ).response.title;
    });
  }
  async askSideQuestion($) {
    return $4("sdk_side_question", async () => {
      let J = (await this.request({ subtype: "side_question", question: $ }))
        .response;
      return J.response === null
        ? null
        : { response: J.response, synthetic: J.synthetic ?? !1 };
    });
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
    return new Promise((W, Q) => {
      (this.pendingControlResponses.set(X, {
        handler: (Y) => {
          if ((this.pendingControlResponses.delete(X), Y.subtype === "success"))
            W(Y);
          else if ((Q(Error(Y.error)), Y.pending_permission_requests))
            this.processPendingPermissionRequests(
              Y.pending_permission_requests,
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
        ).catch((Y) => {
          (this.pendingControlResponses.delete(X), Q(Y));
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
    return $4("sdk_mcp_toggle_server", async () => {
      await this.request({ subtype: "mcp_toggle", serverName: $, enabled: X });
    });
  }
  async enableChannel($) {
    return $4("sdk_mcp_enable_channel", async () => {
      await this.request({ subtype: "channel_enable", serverName: $ });
    });
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
    return $4("sdk_reload_plugins", async () => {
      return (await this.request({ subtype: "reload_plugins" })).response;
    });
  }
  async setMcpServers($) {
    return $4("sdk_mcp_set_servers", async () => {
      let X = {},
        J = {};
      for (let [G, H] of Object.entries($))
        if (H.type === "sdk" && "instance" in H) X[G] = H.instance;
        else J[G] = H;
      let W = new Set(this.sdkMcpServerInstances.keys()),
        Q = new Set(Object.keys(X));
      for (let G of W) if (!Q.has(G)) await this.disconnectSdkMcpServer(G);
      for (let [G, H] of Object.entries(X))
        if (!W.has(G)) this.connectSdkMcpServer(G, H);
      let Y = {};
      for (let G of Object.keys(X)) Y[G] = { type: "sdk", name: G };
      return (
        await this.request({
          subtype: "mcp_set_servers",
          servers: { ...J, ...Y },
        })
      ).response;
    });
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
      if (!(X instanceof t$)) throw X;
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
  handleHookCallbacks($, X, J, W) {
    let Q = this.hookCallbacks.get($);
    if (!Q) throw Error(`No hook callback found for ID: ${$}`);
    return Q(X, J, { signal: W });
  }
  connectSdkMcpServer($, X) {
    let J = new tY((W) => this.sendMcpServerMessageToCli($, W));
    (this.sdkMcpTransports.set($, J),
      this.sdkMcpServerInstances.set($, X),
      X.connect(J).catch((W) => {
        if (this.sdkMcpTransports.get($) === J) this.sdkMcpTransports.delete($);
        if (this.sdkMcpServerInstances.get($) === X)
          this.sdkMcpServerInstances.delete($);
        S$(
          `[Query.connectSdkMcpServer] Failed to connect MCP server '${$}': ${W}`,
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
      let W = `${$}:${X.id}`,
        Q = this.pendingMcpResponses.get(W);
      if (Q) {
        (Q.resolve(X), this.pendingMcpResponses.delete(W));
        return;
      }
    }
    let J = {
      type: "control_request",
      request_id: D9(),
      request: { subtype: "mcp_message", server_name: $, message: X },
    };
    Promise.resolve(
      this.transport.write(
        w$(J) +
          `
`,
      ),
    ).catch((W) => {
      S$(`[Query.sendMcpServerMessageToCli] Transport write failed: ${W}`, {
        level: "error",
      });
    });
  }
  handleMcpControlRequest($, X, J) {
    let W = "id" in X.message ? X.message.id : null,
      Q = `${$}:${W}`;
    return new Promise((Y, z) => {
      let G = () => {
          this.pendingMcpResponses.delete(Q);
        },
        H = (K) => {
          (G(), Y(K));
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
var D7 = 500,
  F7 = 1048576;
var fR = [200, 800];
class aY {
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
  constructor($, X = 60000, J, W = D7, Q = F7, Y = fR) {
    this.send = $;
    this.sendTimeoutMs = X;
    this.onError = J;
    this.maxPendingEntries = W;
    this.maxPendingBytes = Q;
    this.backoffMs = Y;
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
    for (let W of $) {
      let Q = X.get(W.filePath);
      if (Q) Q.push(...W.entries);
      else X.set(W.filePath, W.entries.slice());
    }
    let J = this.backoffMs.length + 1;
    for (let [W, Q] of X) {
      let Y = `SessionStore.append() timed out after ${this.sendTimeoutMs}ms for ${W}`,
        z,
        G = 1;
      for (; G <= J; G++)
        try {
          (await H4(this.send(W, Q), this.sendTimeoutMs, Y), (z = void 0));
          break;
        } catch (H) {
          if (((z = p4(H)), z.message === Y)) break;
          let U = this.backoffMs[G - 1];
          if (U === void 0) break;
          await _J(U);
        }
      if (z) {
        S$(
          `[TranscriptMirrorBatcher] flush failed for ${W} after ${G} attempt(s): ${z}`,
          { level: "error" },
        );
        try {
          this.onError?.(W, z);
        } catch (H) {
          S$(`[TranscriptMirrorBatcher] onError callback threw: ${H}`, {
            level: "error",
          });
        }
      }
    }
  }
}
var R7 = kJ(dz(), 1);
import { createRequire as eE } from "module";
import { fileURLToPath as $S } from "url";
var XS = 5000;
class iz {
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
    this.inputStream = new S1();
    let X = $.pathToClaudeCodeExecutable;
    if (!X) {
      let Y = $S(import.meta.url),
        z = eE(Y),
        G = B7((H) => z.resolve(H));
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
    let W = {};
    if ((R7.propagation.inject(R7.context.active(), W), "traceparent" in W)) {
      for (let Y of ["TRACEPARENT", "TRACESTATE"])
        if (!(Y in ($.env ?? {}))) delete J[Y];
    }
    for (let [Y, z] of Object.entries(W)) {
      let G = Y.toUpperCase();
      if (!(G in ($.env ?? {}))) J[G] = z;
    }
    this.abortController = z0();
    let Q = new j9({
      abortController: this.abortController,
      pathToClaudeCodeExecutable: X,
      cwd: $.cwd,
      env: J,
      executable: $.executable ?? (G0() ? "bun" : "node"),
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
    ((this.query = new A9(
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
        .catch((Y) => this.abortController.abort(Y)));
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
      }, XS).unref());
  }
  async [Symbol.asyncDispose]() {
    this.close();
  }
}
function nz($) {
  try {
    let X = new iz($);
    return (L9("sdk_session_create"), X);
  } catch (X) {
    let J =
      X instanceof Error && X.message.includes("Native CLI binary")
        ? "native_cli_not_found"
        : "init_failed";
    throw (M9("sdk_session_create", J), X);
  }
}
function oB($, X) {
  return new iz({ ...X, resume: $ });
}
var eW = kJ(dz(), 1);
function JS($) {
  let X = $,
    J = "",
    W = 0,
    Q = 10;
  while (X !== J && W < Q)
    ((J = X),
      (X = X.normalize("NFKC")),
      (X = X.replace(/[\p{Cf}\p{Co}\p{Cn}]/gu, "")),
      (X = X.replace(/[\u200B-\u200F]/g, "")
        .replace(/[\u202A-\u202E]/g, "")
        .replace(/[\u2066-\u2069]/g, "")
        .replace(/[\uFEFF]/g, "")
        .replace(/[\uE000-\uF8FF]/g, "")),
      W++);
  if (W >= Q)
    throw Error(
      `Unicode sanitization reached maximum iterations (${Q}) for input: ${$.slice(0, 100)}`,
    );
  return X;
}
function x1($) {
  if (typeof $ === "string") return JS($);
  if (Array.isArray($)) return $.map(x1);
  if ($ !== null && typeof $ === "object") {
    let X = {};
    for (let [J, W] of Object.entries($)) X[x1(J)] = x1(W);
    return X;
  }
  return $;
}
import { readFile as IS } from "fs/promises";
import { once as aB } from "events";
import { createWriteStream as zS } from "fs";
import {
  open as sB,
  readdir as rz,
  realpath as GS,
  stat as HS,
} from "fs/promises";
import { join as S9 } from "path";
import { execFile as QS } from "child_process";
import { promisify as WS } from "util";
var YS = WS(QS);
async function q4($) {
  try {
    let { stdout: X } = await YS("git", ["worktree", "list", "--porcelain"], {
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
function tB($) {
  let X = 0;
  for (let J = 0; J < $.length; J++) X = ((X << 5) - X + $.charCodeAt(J)) | 0;
  return X;
}
var h6 = 65536,
  US = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function U$($) {
  if (typeof $ !== "string") return null;
  return US.test($) ? $ : null;
}
function eB($) {
  if (!$.includes("\\")) return $;
  try {
    return JSON.parse(`"${$}"`);
  } catch {
    return $;
  }
}
function S7($, X) {
  let J = [`"${X}":"`, `"${X}": "`];
  for (let W of J) {
    let Q = $.indexOf(W);
    if (Q < 0) continue;
    let Y = Q + W.length,
      z = Y;
    while (z < $.length) {
      if ($[z] === "\\") {
        z += 2;
        continue;
      }
      if ($[z] === '"') return eB($.slice(Y, z));
      z++;
    }
  }
  return;
}
function Y6($, X) {
  let J = [`"${X}":"`, `"${X}": "`],
    W,
    Q = -1;
  for (let Y of J) {
    let z = 0;
    while (!0) {
      let G = $.indexOf(Y, z);
      if (G < 0) break;
      let H = G + Y.length,
        U = H;
      while (U < $.length) {
        if ($[U] === "\\") {
          U += 2;
          continue;
        }
        if ($[U] === '"') {
          if (G > Q) ((W = eB($.slice(H, U))), (Q = G));
          break;
        }
        U++;
      }
      z = U + 1;
    }
  }
  return W;
}
async function v9($, X) {
  let J = zS($, { mode: 384 });
  try {
    for (let W of X)
      if (
        !J.write(
          JSON.stringify(W) +
            `
`,
        )
      )
        await aB(J, "drain");
    (J.end(), await aB(J, "finish"));
  } catch (W) {
    throw (J.destroy(), W);
  }
}
function C7($) {
  let X = 0,
    J = { commandFallback: "" };
  while (X < $.length) {
    let W = $.indexOf(
        `
`,
        X,
      ),
      Q = W >= 0 ? $.slice(X, W) : $.slice(X);
    if (
      ((X = W >= 0 ? W + 1 : $.length),
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
      let Y = JSON.parse(Q),
        z = P8(Y, J);
      if (z !== void 0) return z;
    } catch {
      continue;
    }
  }
  return J.commandFallback;
}
function $q($) {
  let X = { commandFallback: "" };
  for (let J of $) {
    if (typeof J !== "object" || J === null) continue;
    let W = P8(J, X);
    if (W !== void 0) return W;
  }
  return X.commandFallback;
}
async function v7($) {
  try {
    let X = await sB($, "r");
    try {
      let J = await X.stat(),
        W = Buffer.allocUnsafe(h6),
        Q = await X.read(W, 0, h6, 0);
      if (Q.bytesRead === 0) return null;
      let Y = W.toString("utf8", 0, Q.bytesRead),
        z = Math.max(0, J.size - h6),
        G = Y;
      if (z > 0) {
        let H = await X.read(W, 0, h6, z);
        G = W.toString("utf8", 0, H.bytesRead);
      }
      return { mtime: J.mtime.getTime(), size: J.size, head: Y, tail: G };
    } finally {
      await X.close();
    }
  } catch {
    return null;
  }
}
var S0 = 200;
function KS($) {
  return Math.abs(tB($)).toString(36);
}
function f1($) {
  let X = $.replace(/[^a-zA-Z0-9]/g, "-");
  if (X.length <= S0) return X;
  return `${X.slice(0, S0)}-${KS($)}`;
}
function u6() {
  return S9(y4(), "projects");
}
function VS($) {
  return S9(u6(), f1($));
}
async function i4($) {
  try {
    return (await GS($)).normalize("NFC");
  } catch {
    return $.normalize("NFC");
  }
}
async function W6($) {
  let X = VS($),
    J = [];
  try {
    (await rz(X), J.push(X));
  } catch {}
  let W = f1($);
  if (W.length <= S0) return J;
  let Q = W.slice(0, S0) + "-",
    Y = u6();
  try {
    for (let z of await rz(Y, { withFileTypes: !0 })) {
      if (!z.isDirectory() || !z.name.startsWith(Q)) continue;
      let G = S9(Y, z.name);
      if (G !== X) J.push(G);
    }
  } catch {}
  return J;
}
async function n4($, X) {
  let J = `${$}.jsonl`;
  async function W(z, G) {
    let H = S9(z, J);
    try {
      let U = await HS(H);
      if (U.size > 0) return { filePath: H, projectPath: G, fileSize: U.size };
    } catch {}
    return;
  }
  if (X) {
    let z = await i4(X);
    for (let H of await W6(z)) {
      let U = await W(H, z);
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
      for (let U of await W6(H)) {
        let K = await W(U, H);
        if (K) return K;
      }
    }
    return;
  }
  let Q = u6(),
    Y;
  try {
    Y = await rz(Q);
  } catch {
    return;
  }
  for (let z of Y) {
    let G = await W(S9(Q, z), void 0);
    if (G) return G;
  }
  return;
}
var NS = 1048576,
  Xq = 5242880,
  OS;
function wS() {
  return (OS ??= Buffer.from('"compact_boundary"'));
}
function Jq($) {
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
function T1($, X, J, W) {
  let Q = W - J;
  if (Q <= 0) return;
  if ($.len + Q > $.buf.length) {
    let Y = Buffer.allocUnsafe(
      Math.min(Math.max($.buf.length * 2, $.len + Q), $.cap),
    );
    ($.buf.copy(Y, 0, 0, $.len), ($.buf = Y));
  }
  (X.copy($.buf, $.len, J, W), ($.len += Q));
}
function P7($, X, J, W) {
  return W - J >= X.length && $.compare(X, 0, X.length, J, J + X.length) === 0;
}
var E7 = Buffer.from('{"type":"attribution-snapshot"'),
  BS = Buffer.from('{"type":"system"'),
  C9 = 10,
  qS = Buffer.from([C9]),
  DS = 256;
function FS($, X, J) {
  if (
    (($.straddleSnapCarryLen = 0),
    ($.straddleSnapTailEnd = 0),
    $.carryLen === 0)
  )
    return 0;
  let W = $.carryBuf,
    Q = X.indexOf(C9);
  if (Q === -1 || Q >= J) return 0;
  let Y = Q + 1;
  if (P7(W, E7, 0, $.carryLen))
    (($.straddleSnapCarryLen = $.carryLen),
      ($.straddleSnapTailEnd = Y),
      ($.lastSnapSrc = null));
  else if ($.carryLen < E7.length) return 0;
  else {
    if (P7(W, BS, 0, $.carryLen)) {
      let z = Jq(
        W.toString("utf-8", 0, $.carryLen) + X.toString("utf-8", 0, Q),
      );
      if (z?.hasPreservedSegment) $.hasPreservedSegment = !0;
      else if (z)
        (($.out.len = 0),
          ($.boundaryStartOffset = $.bufFileOff),
          ($.hasPreservedSegment = !1),
          ($.lastSnapSrc = null));
    }
    (T1($.out, W, 0, $.carryLen), T1($.out, X, 0, Y));
  }
  return (($.bufFileOff += $.carryLen + Y), ($.carryLen = 0), Y);
}
function jS($, X, J) {
  let W = X.indexOf(J),
    Q = 0,
    Y = 0,
    z = -1,
    G = -1,
    H = X.indexOf(C9);
  while (H !== -1) {
    let U = H + 1;
    if (W !== -1 && W < Y) W = X.indexOf(J, Y);
    if (P7(X, E7, Y, U)) (T1($.out, X, Q, Y), (z = Y), (G = U), (Q = U));
    else if (W >= Y && W < Math.min(Y + DS, U)) {
      let K = Jq(X.toString("utf-8", Y, H));
      if (K?.hasPreservedSegment) $.hasPreservedSegment = !0;
      else if (K)
        (($.out.len = 0),
          ($.boundaryStartOffset = $.bufFileOff + Y),
          ($.hasPreservedSegment = !1),
          ($.lastSnapSrc = null),
          (z = -1),
          ($.straddleSnapCarryLen = 0),
          (Q = Y));
      W = X.indexOf(J, W + J.length);
    }
    ((Y = U), (H = X.indexOf(C9, Y)));
  }
  return (
    T1($.out, X, Q, Y),
    { lastSnapStart: z, lastSnapEnd: G, trailStart: Y }
  );
}
function LS($, X, J, W, Q) {
  if (W !== -1) {
    if (
      (($.lastSnapLen = Q - W),
      $.lastSnapBuf === void 0 || $.lastSnapLen > $.lastSnapBuf.length)
    )
      $.lastSnapBuf = Buffer.allocUnsafe($.lastSnapLen);
    (X.copy($.lastSnapBuf, 0, W, Q), ($.lastSnapSrc = $.lastSnapBuf));
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
function MS($, X, J) {
  if ((($.carryLen = X.length - J), $.carryLen > 0)) {
    if ($.carryBuf === void 0 || $.carryLen > $.carryBuf.length)
      $.carryBuf = Buffer.allocUnsafe($.carryLen);
    X.copy($.carryBuf, 0, J, X.length);
  }
}
function AS($) {
  if ($.carryLen > 0) {
    let X = $.carryBuf;
    if (P7(X, E7, 0, $.carryLen))
      (($.lastSnapSrc = X), ($.lastSnapLen = $.carryLen));
    else T1($.out, X, 0, $.carryLen);
  }
  if ($.lastSnapSrc) {
    if ($.out.len > 0 && $.out.buf[$.out.len - 1] !== C9) T1($.out, qS, 0, 1);
    T1($.out, $.lastSnapSrc, 0, $.lastSnapLen);
  }
}
async function Qq($, X) {
  let J = wS(),
    W = NS,
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
    Y = Buffer.allocUnsafe(W),
    z = await sB($, "r");
  try {
    let G = 0;
    while (G < X) {
      let { bytesRead: H } = await z.read(Y, 0, Math.min(W, X - G), G);
      if (H === 0) break;
      G += H;
      let U = FS(Q, Y, H),
        K;
      if (Q.carryLen > 0) {
        let N = Q.carryLen + (H - U);
        ((K = Buffer.allocUnsafe(N)),
          Q.carryBuf.copy(K, 0, 0, Q.carryLen),
          Y.copy(K, Q.carryLen, U, H));
      } else K = Y.subarray(U, H);
      let V = jS(Q, K, J);
      (LS(Q, K, Y, V.lastSnapStart, V.lastSnapEnd),
        MS(Q, K, V.trailStart),
        (Q.bufFileOff += V.trailStart));
    }
    AS(Q);
  } finally {
    await z.close();
  }
  return {
    boundaryStartOffset: Q.boundaryStartOffset,
    postBoundaryBuf: Q.out.buf.subarray(0, Q.out.len),
    hasPreservedSegment: Q.hasPreservedSegment,
  };
}
async function ZS($, X) {
  try {
    if (X > Xq && !J6(process.env.CLAUDE_CODE_DISABLE_PRECOMPACT_SKIP))
      return (await Qq($, X)).postBoundaryBuf;
    return await IS($);
  } catch {
    return null;
  }
}
function bS($) {
  let X = [],
    J = 10,
    W = $.length,
    Q = 0;
  while (Q < W) {
    let Y = $.indexOf(10, Q);
    if (Y === -1) Y = W;
    let z = Q;
    while (z < Y && $[z] <= 32) z++;
    if (((Q = Y + 1), z >= Y)) continue;
    let G = $.toString("utf-8", z, Y);
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
function RS($) {
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
  let W = new Set();
  for (let N of X.values()) if (N.parentUuid) W.add(N.parentUuid);
  let Q = [...X.values()].filter((N) => !W.has(N.uuid)),
    Y = [];
  for (let N of Q) {
    let O = N,
      w = new Set();
    while (O) {
      if (w.has(O.uuid)) break;
      if ((w.add(O.uuid), O.type === "user" || O.type === "assistant")) {
        Y.push(O);
        break;
      }
      O = O.parentUuid ? X.get(O.parentUuid) : void 0;
    }
  }
  if (Y.length === 0) return [];
  let z = Y.filter((N) => !N.isSidechain && !N.teamName && !N.isMeta),
    G = (N) =>
      N.reduce((O, w) =>
        (J.get(w.uuid) ?? -1) > (J.get(O.uuid) ?? -1) ? w : O,
      ),
    H = z.length > 0 ? G(z) : G(Y),
    U = [],
    K = new Set(),
    V = X.get(H.uuid);
  while (V) {
    if (K.has(V.uuid)) break;
    (K.add(V.uuid),
      U.push(V),
      (V = V.parentUuid ? X.get(V.parentUuid) : void 0));
  }
  return (U.reverse(), ES(X, U, K));
}
function oz($) {
  if ($.type !== "assistant") return;
  let X = $.message;
  if (typeof X !== "object" || X === null) return;
  let J = X.id;
  return typeof J === "string" ? J : void 0;
}
function PS($) {
  if ($.type !== "user" || !$.parentUuid) return !1;
  let X = $.message;
  if (typeof X !== "object" || X === null) return !1;
  let J = X.content;
  if (!Array.isArray(J)) return !1;
  return J.some(
    (W) => typeof W === "object" && W !== null && W.type === "tool_result",
  );
}
function ES($, X, J) {
  let W = X.filter((V) => V.type === "assistant");
  if (W.length === 0) return X;
  let Q = new Map();
  for (let V of W) {
    let N = oz(V);
    if (N) Q.set(N, V);
  }
  let Y = new Map(),
    z = new Map();
  for (let V of $.values()) {
    let N = oz(V);
    if (N) {
      let O = Y.get(N);
      if (O) O.push(V);
      else Y.set(N, [V]);
    } else if (PS(V)) {
      let O = V.parentUuid,
        w = z.get(O);
      if (w) w.push(V);
      else z.set(O, [V]);
    }
  }
  let G = new Set(),
    H = new Map(),
    U = 0;
  for (let V of W) {
    let N = oz(V);
    if (!N || G.has(N)) continue;
    G.add(N);
    let O = Y.get(N) ?? [V],
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
function SS($, X) {
  if ($.type === "user" || $.type === "assistant");
  else if ($.type === "system" && X);
  else return !1;
  if ($.isMeta) return !1;
  if ($.isSidechain) return !1;
  if ($.teamName) return !1;
  return !0;
}
function tz($) {
  return {
    type: $.type,
    uuid: $.uuid,
    session_id: $.sessionId,
    message: $.message,
    parent_tool_use_id: null,
    timestamp: $.timestamp,
  };
}
function az($, X) {
  let J = X?.offset ?? 0;
  if (X?.limit !== void 0 && X.limit > 0) return $.slice(J, J + X.limit);
  if (J > 0) return $.slice(J);
  return $;
}
function Wq($, X) {
  let J = [];
  for (let W of $) {
    if (typeof W !== "object" || W === null) continue;
    let Q = W,
      Y = Q.type;
    if (
      (Y === "user" ||
        Y === "assistant" ||
        Y === "progress" ||
        Y === "system" ||
        Y === "attachment") &&
      typeof Q.uuid === "string"
    )
      J.push(Q);
  }
  return Yq(J, X);
}
function Yq($, X) {
  let J = RS($),
    W = X?.includeSystemMessages ?? !1,
    Y = J.filter((z) => SS(z, W)).map(tz);
  return az(Y, X);
}
async function zq($, X) {
  if (!U$($)) return [];
  let J = await n4($, X?.dir);
  if (!J) return [];
  let W = await ZS(J.filePath, J.fileSize);
  if (!W) return [];
  return Yq(bS(W), X);
}
import { readdir as sz, stat as CS } from "fs/promises";
import { basename as vS, join as ez } from "path";
function C0($, X, J) {
  let { head: W, tail: Q, mtime: Y, size: z } = X,
    G = W.indexOf(`
`),
    H = G >= 0 ? W.slice(0, G) : W;
  if (H.includes('"isSidechain":true') || H.includes('"isSidechain": true'))
    return null;
  let U =
      Y6(Q, "customTitle") ||
      Y6(W, "customTitle") ||
      Y6(Q, "aiTitle") ||
      Y6(W, "aiTitle") ||
      void 0,
    K = C7(W) || void 0,
    V = S7(W, "timestamp"),
    N;
  if (V) {
    let I = Date.parse(V);
    if (!Number.isNaN(I)) N = I;
  }
  let O = U || Y6(Q, "lastPrompt") || Y6(Q, "summary") || K;
  if (!O) return null;
  let w = Y6(Q, "gitBranch") || S7(W, "gitBranch") || void 0,
    B = S7(W, "cwd") || J || void 0,
    F = Q.split(
      `
`,
    ).findLast((I) => I.includes('"type":"tag"') && I.includes('"tag":"')),
    j = F ? Y6(F, "tag") || void 0 : void 0;
  return {
    sessionId: $,
    summary: O,
    lastModified: Y,
    fileSize: z,
    customTitle: U,
    firstPrompt: K,
    gitBranch: w,
    cwd: B,
    tag: j,
    createdAt: N,
  };
}
async function k9($, X, J) {
  let W;
  try {
    W = await sz($);
  } catch {
    return [];
  }
  return (
    await Promise.all(
      W.map(async (Y) => {
        if (!Y.endsWith(".jsonl")) return null;
        let z = U$(Y.slice(0, -6));
        if (!z) return null;
        let G = ez($, Y);
        if (!X) return { sessionId: z, filePath: G, mtime: 0, projectPath: J };
        try {
          let H = await CS(G);
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
  ).filter((Y) => Y !== null);
}
async function Gq($) {
  let X = await v7($.filePath);
  if (!X) return null;
  let J = C0($.sessionId, X, $.projectPath);
  if (!J) return null;
  if ($.mtime) J.lastModified = $.mtime;
  return J;
}
var kS = 32;
function _S($, X) {
  if (X.mtime !== $.mtime) return X.mtime - $.mtime;
  return X.sessionId < $.sessionId ? -1 : X.sessionId > $.sessionId ? 1 : 0;
}
async function xS($, X, J) {
  $.sort(_S);
  let W = [],
    Q = X && X > 0 ? X : 1 / 0,
    Y = 0,
    z = new Set();
  for (let G = 0; G < $.length && W.length < Q; ) {
    let H = Math.min(G + kS, $.length),
      U = $.slice(G, H),
      K = await Promise.all(U.map(Gq));
    for (let V = 0; V < K.length && W.length < Q; V++) {
      G++;
      let N = K[V];
      if (!N) continue;
      if (z.has(N.sessionId)) continue;
      if ((z.add(N.sessionId), Y < J)) {
        Y++;
        continue;
      }
      W.push(N);
    }
  }
  return W;
}
async function TS($) {
  let X = await Promise.all($.map(Gq)),
    J = new Map();
  for (let Q of X) {
    if (!Q) continue;
    let Y = J.get(Q.sessionId);
    if (!Y || Q.lastModified > Y.lastModified) J.set(Q.sessionId, Q);
  }
  let W = [...J.values()];
  return (
    W.sort((Q, Y) =>
      Y.lastModified !== Q.lastModified
        ? Y.lastModified - Q.lastModified
        : Y.sessionId < Q.sessionId
          ? -1
          : Y.sessionId > Q.sessionId
            ? 1
            : 0,
    ),
    W
  );
}
async function fS($, X, J) {
  let W = await i4($),
    Q;
  if (X)
    try {
      Q = await q4(W);
    } catch {
      Q = [];
    }
  else Q = [];
  if (Q.length <= 1) {
    let V = [];
    for (let N of await W6(W)) V.push(...(await k9(N, J, W)));
    return V;
  }
  let Y = u6(),
    z = process.platform === "win32",
    G = Q.map((V) => {
      let N = f1(V);
      return { path: V, prefix: z ? N.toLowerCase() : N };
    });
  G.sort((V, N) => N.prefix.length - V.prefix.length);
  let H;
  try {
    H = await sz(Y, { withFileTypes: !0 });
  } catch {
    let V = [];
    for (let N of await W6(W)) V.push(...(await k9(N, J, W)));
    return V;
  }
  let U = [],
    K = new Set();
  for (let V of await W6(W)) {
    let N = vS(V);
    (K.add(z ? N.toLowerCase() : N), U.push(...(await k9(V, J, W))));
  }
  for (let V of H) {
    if (!V.isDirectory()) continue;
    let N = z ? V.name.toLowerCase() : V.name;
    if (K.has(N)) continue;
    for (let { path: O, prefix: w } of G)
      if (N === w || (w.length >= S0 && N.startsWith(w + "-"))) {
        (K.add(N), U.push(...(await k9(ez(Y, V.name), J, O))));
        break;
      }
  }
  return U;
}
async function yS($) {
  let X = u6(),
    J;
  try {
    J = await sz(X, { withFileTypes: !0 });
  } catch {
    return [];
  }
  return (
    await Promise.all(
      J.filter((Q) => Q.isDirectory()).map((Q) => k9(ez(X, Q.name), $)),
    )
  ).flat();
}
async function Hq($) {
  let { dir: X, limit: J, offset: W, includeWorktrees: Q } = $ ?? {},
    Y = W ?? 0,
    z = (J !== void 0 && J > 0) || Y > 0,
    G = X ? await fS(X, Q ?? !0, z) : await yS(z);
  if (!z) return TS(G);
  return xS(G, J, Y);
}
async function Uq($, X = {}) {
  let J = U$($);
  if (!J) return;
  let W = await n4(J, X.dir);
  if (!W) return;
  let Q = await v7(W.filePath);
  if (!Q) return;
  return C0(J, Q, W.projectPath) ?? void 0;
}
import { constants as Kq } from "fs";
import { open as gS, readdir as Nq, rm as Vq, stat as hS } from "fs/promises";
import { join as v0 } from "path";
async function Oq($, X, J = {}) {
  if (!U$($)) throw Error(`Invalid sessionId: ${$}`);
  if (!X.trim()) throw Error("title must be non-empty");
  let W =
    w$({ type: "custom-title", customTitle: X.trim(), sessionId: $ }) +
    `
`;
  await qq($, W, J);
}
async function wq($, X, J = {}) {
  if (!U$($)) throw Error(`Invalid sessionId: ${$}`);
  if (X !== null) {
    let Q = x1(X).trim();
    if (!Q) throw Error("tag must be non-empty (use null to clear)");
    X = Q;
  }
  let W =
    w$({ type: "tag", tag: X ?? "", sessionId: $ }) +
    `
`;
  await qq($, W, J);
}
async function Bq($, X = {}) {
  if (!U$($)) throw Error(`Invalid sessionId: ${$}`);
  for (let J of await uS(X)) {
    let W = v0(J, `${$}.jsonl`),
      Q;
    try {
      ({ size: Q } = await hS(W));
    } catch (Y) {
      let z = g6(Y);
      if (z === "ENOENT" || z === "ENOTDIR") continue;
      throw Y;
    }
    if (Q === 0) continue;
    (await Vq(W, { force: !0 }),
      await Vq(v0(J, $), { recursive: !0, force: !0 }));
    return;
  }
  throw Error(
    X.dir
      ? `Session ${$} not found in project directory for ${X.dir}`
      : `Session ${$} not found in any project directory`,
  );
}
async function uS($) {
  if ($.dir) {
    let J = await i4($.dir),
      W = await W6(J),
      Q;
    try {
      Q = await q4(J);
    } catch {
      Q = [];
    }
    for (let Y of Q) {
      if (Y === J) continue;
      W.push(...(await W6(Y)));
    }
    return W;
  }
  let X = u6();
  try {
    return (await Nq(X, { withFileTypes: !0 }))
      .filter((W) => W.isDirectory() || W.isSymbolicLink())
      .map((W) => v0(X, W.name));
  } catch {
    return [];
  }
}
async function qq($, X, J) {
  let W = `${$}.jsonl`;
  if (J.dir) {
    let z = await i4(J.dir);
    for (let H of await W6(z)) if (await $3(v0(H, W), X)) return;
    let G;
    try {
      G = await q4(z);
    } catch {
      G = [];
    }
    for (let H of G) {
      if (H === z) continue;
      for (let U of await W6(H)) if (await $3(v0(U, W), X)) return;
    }
    throw Error(`Session ${$} not found in project directory for ${J.dir}`);
  }
  let Q = u6(),
    Y;
  try {
    Y = await Nq(Q);
  } catch {
    throw Error(`Session ${$} not found (no projects directory)`);
  }
  for (let z of Y) if (await $3(v0(Q, z, W), X)) return;
  throw Error(`Session ${$} not found in any project directory`);
}
async function $3($, X) {
  let J;
  try {
    J = await gS($, Kq.O_WRONLY | Kq.O_APPEND);
  } catch (W) {
    let Q = g6(W);
    if (Q === "ENOENT" || Q === "ENOTDIR") return !1;
    throw W;
  }
  try {
    let { size: W } = await J.stat();
    if (W === 0) return !1;
    let Q = process.platform === "win32" ? W : void 0;
    return (await J.write(X, Q, "utf8"), !0);
  } finally {
    await J.close();
  }
}
import { randomUUID as k7 } from "crypto";
import { readdir as mS, readFile as lS } from "fs/promises";
import { join as X3 } from "path";
async function cS($, X) {
  let J = `${$}.jsonl`;
  async function W(z) {
    try {
      let G = await lS(X3(z, J));
      if (G.length === 0) return null;
      return { buf: G, projectDir: z };
    } catch {
      return null;
    }
  }
  if (X) {
    let z = await i4(X);
    for (let H of await W6(z)) {
      let U = await W(H);
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
      for (let U of await W6(H)) {
        let K = await W(U);
        if (K) return K;
      }
    }
    return null;
  }
  let Q = u6(),
    Y;
  try {
    Y = await mS(Q);
  } catch {
    return null;
  }
  for (let z of Y) {
    let G = await W(X3(Q, z));
    if (G) return G;
  }
  return null;
}
var pS = new Set(["user", "assistant", "attachment", "system", "progress"]);
function dS($, X) {
  let J = [],
    W = [],
    Q = 10,
    Y = $.length,
    z = 0;
  while (z < Y) {
    let G = $.indexOf(10, z);
    if (G === -1) G = Y;
    let H = z;
    while (H < G && $[H] <= 32) H++;
    if (((z = G + 1), H >= G)) continue;
    let U = $.toString("utf-8", H, G);
    try {
      Dq(l$(U), X, J, W);
    } catch {}
  }
  return { transcript: J, contentReplacements: W };
}
function iS($, X) {
  let J = [],
    W = [];
  for (let Q of $) {
    if (typeof Q !== "object" || Q === null) continue;
    Dq(Q, X, J, W);
  }
  return { transcript: J, contentReplacements: W };
}
function Dq($, X, J, W) {
  if (pS.has($.type) && typeof $.uuid === "string") J.push($);
  else if (
    $.type === "content-replacement" &&
    $.sessionId === X &&
    Array.isArray($.replacements)
  )
    W.push(...$.replacements);
}
async function Fq($, X = {}) {
  if (!U$($)) throw Error(`Invalid sessionId: ${$}`);
  if (X.upToMessageId && !U$(X.upToMessageId))
    throw Error(`Invalid upToMessageId: ${X.upToMessageId}`);
  let J = await cS($, X.dir);
  if (!J)
    throw Error(
      X.dir
        ? `Session ${$} not found in project directory for ${X.dir}`
        : `Session ${$} not found`,
    );
  let { entries: W, forkedSessionId: Q } = nS(J.buf, $, X);
  return (await v9(X3(J.projectDir, `${Q}.jsonl`), W), { sessionId: Q });
}
function nS($, X, J) {
  let W = dS($, X);
  return Lq(W, X, J, () => {
    let Y = $.length,
      z = $.toString("utf-8", 0, Math.min(Y, h6)),
      G = $.toString("utf-8", Math.max(0, Y - h6));
    return (
      Y6(G, "customTitle") ||
      Y6(z, "customTitle") ||
      Y6(G, "aiTitle") ||
      Y6(z, "aiTitle") ||
      C7(z)
    );
  });
}
function jq($, X, J) {
  let W = iS($, X);
  return Lq(W, X, J, () => rS($));
}
function rS($) {
  let X, J;
  for (let W of $) {
    if (typeof W !== "object" || W === null) continue;
    let Q = W;
    if (typeof Q.customTitle === "string" && Q.customTitle) X = Q.customTitle;
    if (typeof Q.aiTitle === "string" && Q.aiTitle) J = Q.aiTitle;
  }
  return X || J || $q($) || void 0;
}
function Lq($, X, J, W) {
  let Q = $.transcript.filter((N) => !N.isSidechain);
  if (Q.length === 0) throw Error(`Session ${X} has no messages to fork`);
  if (J.upToMessageId) {
    let N = Q.findIndex((O) => O.uuid === J.upToMessageId);
    if (N === -1)
      throw Error(`Message ${J.upToMessageId} not found in session ${X}`);
    Q = Q.slice(0, N + 1);
  }
  let Y = new Map();
  for (let N of Q) Y.set(N.uuid, k7());
  let z = Q.filter((N) => N.type !== "progress");
  if (z.length === 0) throw Error(`Session ${X} has no messages to fork`);
  let G = new Map();
  for (let N of Q) G.set(N.uuid, N);
  let H = k7(),
    U = new Date().toISOString(),
    K = [];
  for (let N = 0; N < z.length; N++) {
    let O = z[N],
      w = Y.get(O.uuid),
      B = null,
      F = O.parentUuid;
    while (F) {
      let _ = G.get(F);
      if (!_) break;
      if (_.type !== "progress") {
        B = Y.get(F) ?? null;
        break;
      }
      F = _.parentUuid;
    }
    let j = N === z.length - 1 ? U : O.timestamp,
      I =
        O.logicalParentUuid == null
          ? O.logicalParentUuid
          : (Y.get(O.logicalParentUuid) ?? null),
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
      uuid: k7(),
      timestamp: U,
    });
  let V = J.title?.trim();
  if (!V) V = `${W() || "Forked session"} (fork)`;
  return (
    K.push({
      type: "custom-title",
      sessionId: H,
      customTitle: V,
      uuid: k7(),
      timestamp: U,
    }),
    { entries: K, forkedSessionId: H }
  );
}
import { readdir as oS, readFile as tS } from "fs/promises";
import { join as J3 } from "path";
async function Mq($, X) {
  let J = await n4($, X);
  if (!J) return null;
  let W = J.filePath.replace(/\.jsonl$/, "");
  return J3(W, "subagents");
}
async function Aq($) {
  let X = [];
  async function J(W) {
    let Q;
    try {
      Q = await oS(W, { withFileTypes: !0 });
    } catch {
      return;
    }
    for (let Y of Q)
      if (
        Y.isFile() &&
        Y.name.startsWith("agent-") &&
        Y.name.endsWith(".jsonl")
      ) {
        let z = Y.name.slice(6, -6);
        X.push({ agentId: z, filePath: J3(W, Y.name) });
      } else if (Y.isDirectory()) await J(J3(W, Y.name));
  }
  return (await J($), X);
}
function aS($) {
  let X = [],
    J = 10,
    W = $.length,
    Q = 0;
  while (Q < W) {
    let Y = $.indexOf(10, Q);
    if (Y === -1) Y = W;
    let z = Q;
    while (z < Y && $[z] <= 32) z++;
    if (((Q = Y + 1), z >= Y)) continue;
    let G = $.toString("utf-8", z, Y);
    try {
      let H = l$(G),
        U = H.type;
      if ((U === "user" || U === "assistant") && typeof H.uuid === "string")
        X.push(H);
    } catch {}
  }
  return X;
}
function sS($) {
  if ($.length === 0) return [];
  let X = new Map();
  for (let z of $) X.set(z.uuid, z);
  let J = $.findLast((z) => z.type === "user" || z.type === "assistant");
  if (!J) return [];
  let W = [],
    Q = new Set(),
    Y = J;
  while (Y) {
    if (Q.has(Y.uuid)) break;
    (Q.add(Y.uuid),
      W.push(Y),
      (Y = Y.parentUuid ? X.get(Y.parentUuid) : void 0));
  }
  return (W.reverse(), W);
}
async function Iq($, X) {
  if (!U$($)) return [];
  let J = await Mq($, X?.dir);
  if (!J) return [];
  return (await Aq(J)).map((Q) => Q.agentId);
}
async function Zq($, X, J) {
  if (!U$($)) return [];
  if (!X) return [];
  let W = await Mq($, J?.dir);
  if (!W) return [];
  let Y = (await Aq(W)).find((G) => G.agentId === X);
  if (!Y) return [];
  let z;
  try {
    z = await tS(Y.filePath);
  } catch {
    return [];
  }
  return Q3(z, J);
}
function Q3($, X) {
  if ($.length === 0) return [];
  let J = aS($),
    Q = sS(J)
      .filter((Y) => Y.type === "user" || Y.type === "assistant")
      .map(tz);
  return az(Q, X);
}
import { createHash as GC } from "crypto";
import { userInfo as HC } from "os";
function bq($) {
  return [...new Set($)];
}
function eS() {
  return "prod";
}
var $C = "user:inference",
  Pq = "user:profile",
  XC = "org:create_api_key";
var JC = [XC, Pq],
  QC = [
    Pq,
    $C,
    "user:sessions:claude_code",
    "user:mcp_servers",
    "user:file_upload",
  ],
  w$$ = bq([...JC, ...QC]),
  Rq = {
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
var WC = void 0;
function YC() {
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
var zC = [
  "https://beacon.claude-ai.staging.ant.dev",
  "https://claude.fedstart.com",
  "https://claude-staging.fedstart.com",
];
function Eq() {
  let $ = (() => {
      switch (eS()) {
        case "local":
          return YC();
        case "staging":
          return WC ?? Rq;
        case "prod":
          return Rq;
      }
    })(),
    X = process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL;
  if (X) {
    let W = X.replace(/\/$/, "");
    if (!zC.includes(W))
      throw Error("CLAUDE_CODE_CUSTOM_OAUTH_URL is not an approved endpoint.");
    $ = {
      ...$,
      BASE_API_URL: W,
      CONSOLE_AUTHORIZE_URL: `${W}/oauth/authorize`,
      CLAUDE_AI_AUTHORIZE_URL: `${W}/oauth/authorize`,
      CLAUDE_AI_ORIGIN: W,
      TOKEN_URL: `${W}/v1/oauth/token`,
      API_KEY_URL: `${W}/api/oauth/claude_cli/create_api_key`,
      ROLES_URL: `${W}/api/oauth/claude_cli/roles`,
      CONSOLE_SUCCESS_URL: `${W}/oauth/code/success?app=claude-code`,
      CLAUDEAI_SUCCESS_URL: `${W}/oauth/code/success?app=claude-code`,
      MANUAL_REDIRECT_URL: `${W}/oauth/code/callback`,
      OAUTH_FILE_SUFFIX: "-custom-oauth",
    };
  }
  let J = process.env.CLAUDE_CODE_OAUTH_CLIENT_ID;
  if (J) $ = { ...$, CLIENT_ID: J };
  return $;
}
var Sq = "-credentials";
function Cq($ = "") {
  let X = y4(),
    W = !process.env.CLAUDE_CONFIG_DIR
      ? ""
      : `-${GC("sha256").update(X).digest("hex").substring(0, 8)}`;
  return `Claude Code${Eq().OAUTH_FILE_SUFFIX}${$}${W}`;
}
var UC = /^[a-zA-Z0-9._-]+$/;
function vq() {
  let $;
  try {
    $ = process.env.USER || HC().username;
  } catch {
    $ = "claude-code-user";
  }
  if (!UC.test($)) return "claude-code-user";
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
      let Y = {};
      for (let z of Q) Y[z] = z;
      return Y;
    }),
    ($.getValidEnumValues = (Q) => {
      let Y = $.objectKeys(Q).filter((G) => typeof Q[Q[G]] !== "number"),
        z = {};
      for (let G of Y) z[G] = Q[G];
      return $.objectValues(z);
    }),
    ($.objectValues = (Q) => {
      return $.objectKeys(Q).map(function (Y) {
        return Q[Y];
      });
    }),
    ($.objectKeys =
      typeof Object.keys === "function"
        ? (Q) => Object.keys(Q)
        : (Q) => {
            let Y = [];
            for (let z in Q)
              if (Object.prototype.hasOwnProperty.call(Q, z)) Y.push(z);
            return Y;
          }),
    ($.find = (Q, Y) => {
      for (let z of Q) if (Y(z)) return z;
      return;
    }),
    ($.isInteger =
      typeof Number.isInteger === "function"
        ? (Q) => Number.isInteger(Q)
        : (Q) =>
            typeof Q === "number" &&
            Number.isFinite(Q) &&
            Math.floor(Q) === Q));
  function W(Q, Y = " | ") {
    return Q.map((z) => (typeof z === "string" ? `'${z}'` : z)).join(Y);
  }
  (($.joinValues = W),
    ($.jsonStringifyReplacer = (Q, Y) => {
      if (typeof Y === "bigint") return Y.toString();
      return Y;
    }));
})(X$ || (X$ = {}));
var kq;
(function ($) {
  $.mergeShapes = (X, J) => {
    return { ...X, ...J };
  };
})(kq || (kq = {}));
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
      W = (Q) => {
        for (let Y of Q.issues)
          if (Y.code === "invalid_union") Y.unionErrors.map(W);
          else if (Y.code === "invalid_return_type") W(Y.returnTypeError);
          else if (Y.code === "invalid_arguments") W(Y.argumentsError);
          else if (Y.path.length === 0) J._errors.push(X(Y));
          else {
            let z = J,
              G = 0;
            while (G < Y.path.length) {
              let H = Y.path[G];
              if (G !== Y.path.length - 1) z[H] = z[H] || { _errors: [] };
              else ((z[H] = z[H] || { _errors: [] }), z[H]._errors.push(X(Y)));
              ((z = z[H]), G++);
            }
          }
      };
    return (W(this), J);
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
    for (let W of this.issues)
      if (W.path.length > 0) {
        let Q = W.path[0];
        ((X[Q] = X[Q] || []), X[Q].push($(W)));
      } else J.push($(W));
    return { formErrors: J, fieldErrors: X };
  }
  get formErrors() {
    return this.flatten();
  }
}
j6.create = ($) => {
  return new j6($);
};
var KC = ($, X) => {
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
  r4 = KC;
var VC = r4;
function _9() {
  return VC;
}
var _7 = ($) => {
  let { data: X, path: J, errorMaps: W, issueData: Q } = $,
    Y = [...J, ...(Q.path || [])],
    z = { ...Q, path: Y };
  if (Q.message !== void 0) return { ...Q, path: Y, message: Q.message };
  let G = "",
    H = W.filter((U) => !!U)
      .slice()
      .reverse();
  for (let U of H) G = U(z, { data: X, defaultError: G }).message;
  return { ...Q, path: Y, message: G };
};
function k($, X) {
  let J = _9(),
    W = _7({
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
  $.common.issues.push(W);
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
    for (let W of X) {
      if (W.status === "aborted") return c;
      if (W.status === "dirty") $.dirty();
      J.push(W.value);
    }
    return { status: $.value, value: J };
  }
  static async mergeObjectAsync($, X) {
    let J = [];
    for (let W of X) {
      let Q = await W.key,
        Y = await W.value;
      J.push({ key: Q, value: Y });
    }
    return i$.mergeObjectSync($, J);
  }
  static mergeObjectSync($, X) {
    let J = {};
    for (let W of X) {
      let { key: Q, value: Y } = W;
      if (Q.status === "aborted") return c;
      if (Y.status === "aborted") return c;
      if (Q.status === "dirty") $.dirty();
      if (Y.status === "dirty") $.dirty();
      if (Q.value !== "__proto__" && (typeof Y.value < "u" || W.alwaysSet))
        J[Q.value] = Y.value;
    }
    return { status: $.value, value: J };
  }
}
var c = Object.freeze({ status: "aborted" }),
  k0 = ($) => ({ status: "dirty", value: $ }),
  a$ = ($) => ({ status: "valid", value: $ }),
  W3 = ($) => $.status === "aborted",
  Y3 = ($) => $.status === "dirty",
  y1 = ($) => $.status === "valid",
  x9 = ($) => typeof Promise < "u" && $ instanceof Promise;
var y;
(function ($) {
  (($.errToObj = (X) => (typeof X === "string" ? { message: X } : X || {})),
    ($.toString = (X) => (typeof X === "string" ? X : X?.message)));
})(y || (y = {}));
class m6 {
  constructor($, X, J, W) {
    ((this._cachedPath = []),
      (this.parent = $),
      (this.data = X),
      (this._path = J),
      (this._key = W));
  }
  get path() {
    if (!this._cachedPath.length)
      if (Array.isArray(this._key))
        this._cachedPath.push(...this._path, ...this._key);
      else this._cachedPath.push(...this._path, this._key);
    return this._cachedPath;
  }
}
var _q = ($, X) => {
  if (y1(X)) return { success: !0, data: X.value };
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
    required_error: W,
    description: Q,
  } = $;
  if (X && (J || W))
    throw Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  if (X) return { errorMap: X, description: Q };
  return {
    errorMap: (z, G) => {
      let { message: H } = $;
      if (z.code === "invalid_enum_value")
        return { message: H ?? G.defaultError };
      if (typeof G.data > "u") return { message: H ?? W ?? G.defaultError };
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
    if (x9(X)) throw Error("Synchronous parse encountered promise.");
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
      W = this._parseSync({ data: $, path: J.path, parent: J });
    return _q(J, W);
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
        return y1(J) ? { value: J.value } : { issues: X.common.issues };
      } catch (J) {
        if (J?.message?.toLowerCase()?.includes("encountered"))
          this["~standard"].async = !0;
        X.common = { issues: [], async: !0 };
      }
    return this._parseAsync({ data: $, path: [], parent: X }).then((J) =>
      y1(J) ? { value: J.value } : { issues: X.common.issues },
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
      W = this._parse({ data: $, path: J.path, parent: J }),
      Q = await (x9(W) ? W : Promise.resolve(W));
    return _q(J, Q);
  }
  refine($, X) {
    let J = (W) => {
      if (typeof X === "string" || typeof X > "u") return { message: X };
      else if (typeof X === "function") return X(W);
      else return X;
    };
    return this._refinement((W, Q) => {
      let Y = $(W),
        z = () => Q.addIssue({ code: b.custom, ...J(W) });
      if (typeof Promise < "u" && Y instanceof Promise)
        return Y.then((G) => {
          if (!G) return (z(), !1);
          else return !0;
        });
      if (!Y) return (z(), !1);
      else return !0;
    });
  }
  refinement($, X) {
    return this._refinement((J, W) => {
      if (!$(J)) return (W.addIssue(typeof X === "function" ? X(J, W) : X), !1);
      else return !0;
    });
  }
  _refinement($) {
    return new J4({
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
    return R6.create(this, this._def);
  }
  nullable() {
    return o4.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return X4.create(this);
  }
  promise() {
    return y0.create(this, this._def);
  }
  or($) {
    return h9.create([this, $], this._def);
  }
  and($) {
    return u9.create(this, $, this._def);
  }
  transform($) {
    return new J4({
      ...o(this._def),
      schema: this,
      typeName: R.ZodEffects,
      effect: { type: "transform", transform: $ },
    });
  }
  default($) {
    let X = typeof $ === "function" ? $ : () => $;
    return new p9({
      ...o(this._def),
      innerType: this,
      defaultValue: X,
      typeName: R.ZodDefault,
    });
  }
  brand() {
    return new U3({ typeName: R.ZodBranded, type: this, ...o(this._def) });
  }
  catch($) {
    let X = typeof $ === "function" ? $ : () => $;
    return new d9({
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
    return m7.create(this, $);
  }
  readonly() {
    return i9.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
var NC = /^c[^\s-]{8,}$/i,
  OC = /^[0-9a-z]+$/,
  wC = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  BC =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  qC = /^[a-z0-9_-]{21}$/i,
  DC = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  FC =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  jC =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  LC = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
  z3,
  MC =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  AC =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  IC =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  ZC =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  bC = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  RC = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  xq =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  PC = new RegExp(`^${xq}$`);
function Tq($) {
  let X = "[0-5]\\d";
  if ($.precision) X = `${X}\\.\\d{${$.precision}}`;
  else if ($.precision == null) X = `${X}(\\.\\d+)?`;
  let J = $.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${X})${J}`;
}
function EC($) {
  return new RegExp(`^${Tq($)}$`);
}
function SC($) {
  let X = `${xq}T${Tq($)}`,
    J = [];
  if ((J.push($.local ? "Z?" : "Z"), $.offset)) J.push("([+-]\\d{2}:?\\d{2})");
  return ((X = `${X}(${J.join("|")})`), new RegExp(`^${X}$`));
}
function CC($, X) {
  if ((X === "v4" || !X) && MC.test($)) return !0;
  if ((X === "v6" || !X) && IC.test($)) return !0;
  return !1;
}
function vC($, X) {
  if (!DC.test($)) return !1;
  try {
    let [J] = $.split(".");
    if (!J) return !1;
    let W = J.replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(J.length + ((4 - (J.length % 4)) % 4), "="),
      Q = JSON.parse(atob(W));
    if (typeof Q !== "object" || Q === null) return !1;
    if ("typ" in Q && Q?.typ !== "JWT") return !1;
    if (!Q.alg) return !1;
    if (X && Q.alg !== X) return !1;
    return !0;
  } catch {
    return !1;
  }
}
function kC($, X) {
  if ((X === "v4" || !X) && AC.test($)) return !0;
  if ((X === "v6" || !X) && ZC.test($)) return !0;
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
      W = void 0;
    for (let Q of this._def.checks)
      if (Q.kind === "min") {
        if ($.data.length < Q.value)
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
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
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              code: b.too_big,
              maximum: Q.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "length") {
        let Y = $.data.length > Q.value,
          z = $.data.length < Q.value;
        if (Y || z) {
          if (((W = this._getOrReturnCtx($, W)), Y))
            k(W, {
              code: b.too_big,
              maximum: Q.value,
              type: "string",
              inclusive: !0,
              exact: !0,
              message: Q.message,
            });
          else if (z)
            k(W, {
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
        if (!jC.test($.data))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              validation: "email",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "emoji") {
        if (!z3) z3 = new RegExp(LC, "u");
        if (!z3.test($.data))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              validation: "emoji",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "uuid") {
        if (!BC.test($.data))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              validation: "uuid",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "nanoid") {
        if (!qC.test($.data))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              validation: "nanoid",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "cuid") {
        if (!NC.test($.data))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              validation: "cuid",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "cuid2") {
        if (!OC.test($.data))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              validation: "cuid2",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "ulid") {
        if (!wC.test($.data))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              validation: "ulid",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "url")
        try {
          new URL($.data);
        } catch {
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              validation: "url",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
        }
      else if (Q.kind === "regex") {
        if (((Q.regex.lastIndex = 0), !Q.regex.test($.data)))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              validation: "regex",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "trim") $.data = $.data.trim();
      else if (Q.kind === "includes") {
        if (!$.data.includes(Q.value, Q.position))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              code: b.invalid_string,
              validation: { includes: Q.value, position: Q.position },
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "toLowerCase") $.data = $.data.toLowerCase();
      else if (Q.kind === "toUpperCase") $.data = $.data.toUpperCase();
      else if (Q.kind === "startsWith") {
        if (!$.data.startsWith(Q.value))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              code: b.invalid_string,
              validation: { startsWith: Q.value },
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "endsWith") {
        if (!$.data.endsWith(Q.value))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              code: b.invalid_string,
              validation: { endsWith: Q.value },
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "datetime") {
        if (!SC(Q).test($.data))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              code: b.invalid_string,
              validation: "datetime",
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "date") {
        if (!PC.test($.data))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              code: b.invalid_string,
              validation: "date",
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "time") {
        if (!EC(Q).test($.data))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              code: b.invalid_string,
              validation: "time",
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "duration") {
        if (!FC.test($.data))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              validation: "duration",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "ip") {
        if (!CC($.data, Q.version))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              validation: "ip",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "jwt") {
        if (!vC($.data, Q.alg))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              validation: "jwt",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "cidr") {
        if (!kC($.data, Q.version))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              validation: "cidr",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "base64") {
        if (!bC.test($.data))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              validation: "base64",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else if (Q.kind === "base64url") {
        if (!RC.test($.data))
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
              validation: "base64url",
              code: b.invalid_string,
              message: Q.message,
            }),
            J.dirty());
      } else X$.assertNever(Q);
    return { status: J.value, value: $.data };
  }
  _regex($, X, J) {
    return this.refinement((W) => $.test(W), {
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
function _C($, X) {
  let J = ($.toString().split(".")[1] || "").length,
    W = (X.toString().split(".")[1] || "").length,
    Q = J > W ? J : W,
    Y = Number.parseInt($.toFixed(Q).replace(".", "")),
    z = Number.parseInt(X.toFixed(Q).replace(".", ""));
  return (Y % z) / 10 ** Q;
}
class x0 extends e {
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
      W = new i$();
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
            W.dirty());
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
            W.dirty());
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
            W.dirty());
      } else if (Q.kind === "multipleOf") {
        if (_C($.data, Q.value) !== 0)
          ((J = this._getOrReturnCtx($, J)),
            k(J, {
              code: b.not_multiple_of,
              multipleOf: Q.value,
              message: Q.message,
            }),
            W.dirty());
      } else if (Q.kind === "finite") {
        if (!Number.isFinite($.data))
          ((J = this._getOrReturnCtx($, J)),
            k(J, { code: b.not_finite, message: Q.message }),
            W.dirty());
      } else X$.assertNever(Q);
    return { status: W.value, value: $.data };
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
  setLimit($, X, J, W) {
    return new x0({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: $, value: X, inclusive: J, message: y.toString(W) },
      ],
    });
  }
  _addCheck($) {
    return new x0({ ...this._def, checks: [...this._def.checks, $] });
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
x0.create = ($) => {
  return new x0({
    checks: [],
    typeName: R.ZodNumber,
    coerce: $?.coerce || !1,
    ...o($),
  });
};
class T0 extends e {
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
      W = new i$();
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
            W.dirty());
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
            W.dirty());
      } else if (Q.kind === "multipleOf") {
        if ($.data % Q.value !== BigInt(0))
          ((J = this._getOrReturnCtx($, J)),
            k(J, {
              code: b.not_multiple_of,
              multipleOf: Q.value,
              message: Q.message,
            }),
            W.dirty());
      } else X$.assertNever(Q);
    return { status: W.value, value: $.data };
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
  setLimit($, X, J, W) {
    return new T0({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: $, value: X, inclusive: J, message: y.toString(W) },
      ],
    });
  }
  _addCheck($) {
    return new T0({ ...this._def, checks: [...this._def.checks, $] });
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
T0.create = ($) => {
  return new T0({
    checks: [],
    typeName: R.ZodBigInt,
    coerce: $?.coerce ?? !1,
    ...o($),
  });
};
class x7 extends e {
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
    return a$($.data);
  }
}
x7.create = ($) => {
  return new x7({ typeName: R.ZodBoolean, coerce: $?.coerce || !1, ...o($) });
};
class f9 extends e {
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
      W = void 0;
    for (let Q of this._def.checks)
      if (Q.kind === "min") {
        if ($.data.getTime() < Q.value)
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
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
          ((W = this._getOrReturnCtx($, W)),
            k(W, {
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
    return new f9({ ...this._def, checks: [...this._def.checks, $] });
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
f9.create = ($) => {
  return new f9({
    checks: [],
    coerce: $?.coerce || !1,
    typeName: R.ZodDate,
    ...o($),
  });
};
class T7 extends e {
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
    return a$($.data);
  }
}
T7.create = ($) => {
  return new T7({ typeName: R.ZodSymbol, ...o($) });
};
class y9 extends e {
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
    return a$($.data);
  }
}
y9.create = ($) => {
  return new y9({ typeName: R.ZodUndefined, ...o($) });
};
class g9 extends e {
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
    return a$($.data);
  }
}
g9.create = ($) => {
  return new g9({ typeName: R.ZodNull, ...o($) });
};
class f7 extends e {
  constructor() {
    super(...arguments);
    this._any = !0;
  }
  _parse($) {
    return a$($.data);
  }
}
f7.create = ($) => {
  return new f7({ typeName: R.ZodAny, ...o($) });
};
class g1 extends e {
  constructor() {
    super(...arguments);
    this._unknown = !0;
  }
  _parse($) {
    return a$($.data);
  }
}
g1.create = ($) => {
  return new g1({ typeName: R.ZodUnknown, ...o($) });
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
class y7 extends e {
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
    return a$($.data);
  }
}
y7.create = ($) => {
  return new y7({ typeName: R.ZodVoid, ...o($) });
};
class X4 extends e {
  _parse($) {
    let { ctx: X, status: J } = this._processInputParams($),
      W = this._def;
    if (X.parsedType !== S.array)
      return (
        k(X, {
          code: b.invalid_type,
          expected: S.array,
          received: X.parsedType,
        }),
        c
      );
    if (W.exactLength !== null) {
      let Y = X.data.length > W.exactLength.value,
        z = X.data.length < W.exactLength.value;
      if (Y || z)
        (k(X, {
          code: Y ? b.too_big : b.too_small,
          minimum: z ? W.exactLength.value : void 0,
          maximum: Y ? W.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: W.exactLength.message,
        }),
          J.dirty());
    }
    if (W.minLength !== null) {
      if (X.data.length < W.minLength.value)
        (k(X, {
          code: b.too_small,
          minimum: W.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: W.minLength.message,
        }),
          J.dirty());
    }
    if (W.maxLength !== null) {
      if (X.data.length > W.maxLength.value)
        (k(X, {
          code: b.too_big,
          maximum: W.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: W.maxLength.message,
        }),
          J.dirty());
    }
    if (X.common.async)
      return Promise.all(
        [...X.data].map((Y, z) => {
          return W.type._parseAsync(new m6(X, Y, X.path, z));
        }),
      ).then((Y) => {
        return i$.mergeArray(J, Y);
      });
    let Q = [...X.data].map((Y, z) => {
      return W.type._parseSync(new m6(X, Y, X.path, z));
    });
    return i$.mergeArray(J, Q);
  }
  get element() {
    return this._def.type;
  }
  min($, X) {
    return new X4({
      ...this._def,
      minLength: { value: $, message: y.toString(X) },
    });
  }
  max($, X) {
    return new X4({
      ...this._def,
      maxLength: { value: $, message: y.toString(X) },
    });
  }
  length($, X) {
    return new X4({
      ...this._def,
      exactLength: { value: $, message: y.toString(X) },
    });
  }
  nonempty($) {
    return this.min(1, $);
  }
}
X4.create = ($, X) => {
  return new X4({
    type: $,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: R.ZodArray,
    ...o(X),
  });
};
function _0($) {
  if ($ instanceof E$) {
    let X = {};
    for (let J in $.shape) {
      let W = $.shape[J];
      X[J] = R6.create(_0(W));
    }
    return new E$({ ...$._def, shape: () => X });
  } else if ($ instanceof X4) return new X4({ ...$._def, type: _0($.element) });
  else if ($ instanceof R6) return R6.create(_0($.unwrap()));
  else if ($ instanceof o4) return o4.create(_0($.unwrap()));
  else if ($ instanceof M4) return M4.create($.items.map((X) => _0(X)));
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
    let { status: J, ctx: W } = this._processInputParams($),
      { shape: Q, keys: Y } = this._getCached(),
      z = [];
    if (
      !(this._def.catchall instanceof L4 && this._def.unknownKeys === "strip")
    ) {
      for (let H in W.data) if (!Y.includes(H)) z.push(H);
    }
    let G = [];
    for (let H of Y) {
      let U = Q[H],
        K = W.data[H];
      G.push({
        key: { status: "valid", value: H },
        value: U._parse(new m6(W, K, W.path, H)),
        alwaysSet: H in W.data,
      });
    }
    if (this._def.catchall instanceof L4) {
      let H = this._def.unknownKeys;
      if (H === "passthrough")
        for (let U of z)
          G.push({
            key: { status: "valid", value: U },
            value: { status: "valid", value: W.data[U] },
          });
      else if (H === "strict") {
        if (z.length > 0)
          (k(W, { code: b.unrecognized_keys, keys: z }), J.dirty());
      } else if (H === "strip");
      else throw Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let H = this._def.catchall;
      for (let U of z) {
        let K = W.data[U];
        G.push({
          key: { status: "valid", value: U },
          value: H._parse(new m6(W, K, W.path, U)),
          alwaysSet: U in W.data,
        });
      }
    }
    if (W.common.async)
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
                let W = this._def.errorMap?.(X, J).message ?? J.defaultError;
                if (X.code === "unrecognized_keys")
                  return { message: y.errToObj($).message ?? W };
                return { message: W };
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
    return _0(this);
  }
  partial($) {
    let X = {};
    for (let J of X$.objectKeys(this.shape)) {
      let W = this.shape[J];
      if ($ && !$[J]) X[J] = W;
      else X[J] = W.optional();
    }
    return new E$({ ...this._def, shape: () => X });
  }
  required($) {
    let X = {};
    for (let J of X$.objectKeys(this.shape))
      if ($ && !$[J]) X[J] = this.shape[J];
      else {
        let Q = this.shape[J];
        while (Q instanceof R6) Q = Q._def.innerType;
        X[J] = Q;
      }
    return new E$({ ...this._def, shape: () => X });
  }
  keyof() {
    return fq(X$.objectKeys(this.shape));
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
class h9 extends e {
  _parse($) {
    let { ctx: X } = this._processInputParams($),
      J = this._def.options;
    function W(Q) {
      for (let z of Q) if (z.result.status === "valid") return z.result;
      for (let z of Q)
        if (z.result.status === "dirty")
          return (X.common.issues.push(...z.ctx.common.issues), z.result);
      let Y = Q.map((z) => new j6(z.ctx.common.issues));
      return (k(X, { code: b.invalid_union, unionErrors: Y }), c);
    }
    if (X.common.async)
      return Promise.all(
        J.map(async (Q) => {
          let Y = { ...X, common: { ...X.common, issues: [] }, parent: null };
          return {
            result: await Q._parseAsync({
              data: X.data,
              path: X.path,
              parent: Y,
            }),
            ctx: Y,
          };
        }),
      ).then(W);
    else {
      let Q = void 0,
        Y = [];
      for (let G of J) {
        let H = { ...X, common: { ...X.common, issues: [] }, parent: null },
          U = G._parseSync({ data: X.data, path: X.path, parent: H });
        if (U.status === "valid") return U;
        else if (U.status === "dirty" && !Q) Q = { result: U, ctx: H };
        if (H.common.issues.length) Y.push(H.common.issues);
      }
      if (Q) return (X.common.issues.push(...Q.ctx.common.issues), Q.result);
      let z = Y.map((G) => new j6(G));
      return (k(X, { code: b.invalid_union, unionErrors: z }), c);
    }
  }
  get options() {
    return this._def.options;
  }
}
h9.create = ($, X) => {
  return new h9({ options: $, typeName: R.ZodUnion, ...o(X) });
};
var F4 = ($) => {
  if ($ instanceof m9) return F4($.schema);
  else if ($ instanceof J4) return F4($.innerType());
  else if ($ instanceof l9) return [$.value];
  else if ($ instanceof h1) return $.options;
  else if ($ instanceof c9) return X$.objectValues($.enum);
  else if ($ instanceof p9) return F4($._def.innerType);
  else if ($ instanceof y9) return [void 0];
  else if ($ instanceof g9) return [null];
  else if ($ instanceof R6) return [void 0, ...F4($.unwrap())];
  else if ($ instanceof o4) return [null, ...F4($.unwrap())];
  else if ($ instanceof U3) return F4($.unwrap());
  else if ($ instanceof i9) return F4($.unwrap());
  else if ($ instanceof d9) return F4($._def.innerType);
  else return [];
};
class H3 extends e {
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
      W = X.data[J],
      Q = this.optionsMap.get(W);
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
    let W = new Map();
    for (let Q of X) {
      let Y = F4(Q.shape[$]);
      if (!Y.length)
        throw Error(
          `A discriminator value for key \`${$}\` could not be extracted from all schema options`,
        );
      for (let z of Y) {
        if (W.has(z))
          throw Error(
            `Discriminator property ${String($)} has duplicate value ${String(z)}`,
          );
        W.set(z, Q);
      }
    }
    return new H3({
      typeName: R.ZodDiscriminatedUnion,
      discriminator: $,
      options: X,
      optionsMap: W,
      ...o(J),
    });
  }
}
function G3($, X) {
  let J = D4($),
    W = D4(X);
  if ($ === X) return { valid: !0, data: $ };
  else if (J === S.object && W === S.object) {
    let Q = X$.objectKeys(X),
      Y = X$.objectKeys($).filter((G) => Q.indexOf(G) !== -1),
      z = { ...$, ...X };
    for (let G of Y) {
      let H = G3($[G], X[G]);
      if (!H.valid) return { valid: !1 };
      z[G] = H.data;
    }
    return { valid: !0, data: z };
  } else if (J === S.array && W === S.array) {
    if ($.length !== X.length) return { valid: !1 };
    let Q = [];
    for (let Y = 0; Y < $.length; Y++) {
      let z = $[Y],
        G = X[Y],
        H = G3(z, G);
      if (!H.valid) return { valid: !1 };
      Q.push(H.data);
    }
    return { valid: !0, data: Q };
  } else if (J === S.date && W === S.date && +$ === +X)
    return { valid: !0, data: $ };
  else return { valid: !1 };
}
class u9 extends e {
  _parse($) {
    let { status: X, ctx: J } = this._processInputParams($),
      W = (Q, Y) => {
        if (W3(Q) || W3(Y)) return c;
        let z = G3(Q.value, Y.value);
        if (!z.valid) return (k(J, { code: b.invalid_intersection_types }), c);
        if (Y3(Q) || Y3(Y)) X.dirty();
        return { status: X.value, value: z.data };
      };
    if (J.common.async)
      return Promise.all([
        this._def.left._parseAsync({ data: J.data, path: J.path, parent: J }),
        this._def.right._parseAsync({ data: J.data, path: J.path, parent: J }),
      ]).then(([Q, Y]) => W(Q, Y));
    else
      return W(
        this._def.left._parseSync({ data: J.data, path: J.path, parent: J }),
        this._def.right._parseSync({ data: J.data, path: J.path, parent: J }),
      );
  }
}
u9.create = ($, X, J) => {
  return new u9({ left: $, right: X, typeName: R.ZodIntersection, ...o(J) });
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
      .map((Y, z) => {
        let G = this._def.items[z] || this._def.rest;
        if (!G) return null;
        return G._parse(new m6(J, Y, J.path, z));
      })
      .filter((Y) => !!Y);
    if (J.common.async)
      return Promise.all(Q).then((Y) => {
        return i$.mergeArray(X, Y);
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
class g7 extends e {
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
    let W = [],
      Q = this._def.keyType,
      Y = this._def.valueType;
    for (let z in J.data)
      W.push({
        key: Q._parse(new m6(J, z, J.path, z)),
        value: Y._parse(new m6(J, J.data[z], J.path, z)),
        alwaysSet: z in J.data,
      });
    if (J.common.async) return i$.mergeObjectAsync(X, W);
    else return i$.mergeObjectSync(X, W);
  }
  get element() {
    return this._def.valueType;
  }
  static create($, X, J) {
    if (X instanceof e)
      return new g7({
        keyType: $,
        valueType: X,
        typeName: R.ZodRecord,
        ...o(J),
      });
    return new g7({
      keyType: j4.create(),
      valueType: $,
      typeName: R.ZodRecord,
      ...o(X),
    });
  }
}
class h7 extends e {
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
    let W = this._def.keyType,
      Q = this._def.valueType,
      Y = [...J.data.entries()].map(([z, G], H) => {
        return {
          key: W._parse(new m6(J, z, J.path, [H, "key"])),
          value: Q._parse(new m6(J, G, J.path, [H, "value"])),
        };
      });
    if (J.common.async) {
      let z = new Map();
      return Promise.resolve().then(async () => {
        for (let G of Y) {
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
      for (let G of Y) {
        let { key: H, value: U } = G;
        if (H.status === "aborted" || U.status === "aborted") return c;
        if (H.status === "dirty" || U.status === "dirty") X.dirty();
        z.set(H.value, U.value);
      }
      return { status: X.value, value: z };
    }
  }
}
h7.create = ($, X, J) => {
  return new h7({ valueType: X, keyType: $, typeName: R.ZodMap, ...o(J) });
};
class f0 extends e {
  _parse($) {
    let { status: X, ctx: J } = this._processInputParams($);
    if (J.parsedType !== S.set)
      return (
        k(J, { code: b.invalid_type, expected: S.set, received: J.parsedType }),
        c
      );
    let W = this._def;
    if (W.minSize !== null) {
      if (J.data.size < W.minSize.value)
        (k(J, {
          code: b.too_small,
          minimum: W.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: W.minSize.message,
        }),
          X.dirty());
    }
    if (W.maxSize !== null) {
      if (J.data.size > W.maxSize.value)
        (k(J, {
          code: b.too_big,
          maximum: W.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: W.maxSize.message,
        }),
          X.dirty());
    }
    let Q = this._def.valueType;
    function Y(G) {
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
    if (J.common.async) return Promise.all(z).then((G) => Y(G));
    else return Y(z);
  }
  min($, X) {
    return new f0({
      ...this._def,
      minSize: { value: $, message: y.toString(X) },
    });
  }
  max($, X) {
    return new f0({
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
f0.create = ($, X) => {
  return new f0({
    valueType: $,
    minSize: null,
    maxSize: null,
    typeName: R.ZodSet,
    ...o(X),
  });
};
class T9 extends e {
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
      return _7({
        data: z,
        path: X.path,
        errorMaps: [
          X.common.contextualErrorMap,
          X.schemaErrorMap,
          _9(),
          r4,
        ].filter((H) => !!H),
        issueData: { code: b.invalid_arguments, argumentsError: G },
      });
    }
    function W(z, G) {
      return _7({
        data: z,
        path: X.path,
        errorMaps: [
          X.common.contextualErrorMap,
          X.schemaErrorMap,
          _9(),
          r4,
        ].filter((H) => !!H),
        issueData: { code: b.invalid_return_type, returnTypeError: G },
      });
    }
    let Q = { errorMap: X.common.contextualErrorMap },
      Y = X.data;
    if (this._def.returns instanceof y0) {
      let z = this;
      return a$(async function (...G) {
        let H = new j6([]),
          U = await z._def.args.parseAsync(G, Q).catch((N) => {
            throw (H.addIssue(J(G, N)), H);
          }),
          K = await Reflect.apply(Y, this, U);
        return await z._def.returns._def.type.parseAsync(K, Q).catch((N) => {
          throw (H.addIssue(W(K, N)), H);
        });
      });
    } else {
      let z = this;
      return a$(function (...G) {
        let H = z._def.args.safeParse(G, Q);
        if (!H.success) throw new j6([J(G, H.error)]);
        let U = Reflect.apply(Y, this, H.data),
          K = z._def.returns.safeParse(U, Q);
        if (!K.success) throw new j6([W(U, K.error)]);
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
    return new T9({ ...this._def, args: M4.create($).rest(g1.create()) });
  }
  returns($) {
    return new T9({ ...this._def, returns: $ });
  }
  implement($) {
    return this.parse($);
  }
  strictImplement($) {
    return this.parse($);
  }
  static create($, X, J) {
    return new T9({
      args: $ ? $ : M4.create([]).rest(g1.create()),
      returns: X || g1.create(),
      typeName: R.ZodFunction,
      ...o(J),
    });
  }
}
class m9 extends e {
  get schema() {
    return this._def.getter();
  }
  _parse($) {
    let { ctx: X } = this._processInputParams($);
    return this._def.getter()._parse({ data: X.data, path: X.path, parent: X });
  }
}
m9.create = ($, X) => {
  return new m9({ getter: $, typeName: R.ZodLazy, ...o(X) });
};
class l9 extends e {
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
l9.create = ($, X) => {
  return new l9({ value: $, typeName: R.ZodLiteral, ...o(X) });
};
function fq($, X) {
  return new h1({ values: $, typeName: R.ZodEnum, ...o(X) });
}
class h1 extends e {
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
    return a$($.data);
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
    return h1.create($, { ...this._def, ...X });
  }
  exclude($, X = this._def) {
    return h1.create(
      this.options.filter((J) => !$.includes(J)),
      { ...this._def, ...X },
    );
  }
}
h1.create = fq;
class c9 extends e {
  _parse($) {
    let X = X$.getValidEnumValues(this._def.values),
      J = this._getOrReturnCtx($);
    if (J.parsedType !== S.string && J.parsedType !== S.number) {
      let W = X$.objectValues(X);
      return (
        k(J, {
          expected: X$.joinValues(W),
          received: J.parsedType,
          code: b.invalid_type,
        }),
        c
      );
    }
    if (!this._cache)
      this._cache = new Set(X$.getValidEnumValues(this._def.values));
    if (!this._cache.has($.data)) {
      let W = X$.objectValues(X);
      return (
        k(J, { received: J.data, code: b.invalid_enum_value, options: W }),
        c
      );
    }
    return a$($.data);
  }
  get enum() {
    return this._def.values;
  }
}
c9.create = ($, X) => {
  return new c9({ values: $, typeName: R.ZodNativeEnum, ...o(X) });
};
class y0 extends e {
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
    return a$(
      J.then((W) => {
        return this._def.type.parseAsync(W, {
          path: X.path,
          errorMap: X.common.contextualErrorMap,
        });
      }),
    );
  }
}
y0.create = ($, X) => {
  return new y0({ type: $, typeName: R.ZodPromise, ...o(X) });
};
class J4 extends e {
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
      W = this._def.effect || null,
      Q = {
        addIssue: (Y) => {
          if ((k(J, Y), Y.fatal)) X.abort();
          else X.dirty();
        },
        get path() {
          return J.path;
        },
      };
    if (((Q.addIssue = Q.addIssue.bind(Q)), W.type === "preprocess")) {
      let Y = W.transform(J.data, Q);
      if (J.common.async)
        return Promise.resolve(Y).then(async (z) => {
          if (X.value === "aborted") return c;
          let G = await this._def.schema._parseAsync({
            data: z,
            path: J.path,
            parent: J,
          });
          if (G.status === "aborted") return c;
          if (G.status === "dirty") return k0(G.value);
          if (X.value === "dirty") return k0(G.value);
          return G;
        });
      else {
        if (X.value === "aborted") return c;
        let z = this._def.schema._parseSync({
          data: Y,
          path: J.path,
          parent: J,
        });
        if (z.status === "aborted") return c;
        if (z.status === "dirty") return k0(z.value);
        if (X.value === "dirty") return k0(z.value);
        return z;
      }
    }
    if (W.type === "refinement") {
      let Y = (z) => {
        let G = W.refinement(z, Q);
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
        return (Y(z.value), { status: X.value, value: z.value });
      } else
        return this._def.schema
          ._parseAsync({ data: J.data, path: J.path, parent: J })
          .then((z) => {
            if (z.status === "aborted") return c;
            if (z.status === "dirty") X.dirty();
            return Y(z.value).then(() => {
              return { status: X.value, value: z.value };
            });
          });
    }
    if (W.type === "transform")
      if (J.common.async === !1) {
        let Y = this._def.schema._parseSync({
          data: J.data,
          path: J.path,
          parent: J,
        });
        if (!y1(Y)) return c;
        let z = W.transform(Y.value, Q);
        if (z instanceof Promise)
          throw Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return { status: X.value, value: z };
      } else
        return this._def.schema
          ._parseAsync({ data: J.data, path: J.path, parent: J })
          .then((Y) => {
            if (!y1(Y)) return c;
            return Promise.resolve(W.transform(Y.value, Q)).then((z) => ({
              status: X.value,
              value: z,
            }));
          });
    X$.assertNever(W);
  }
}
J4.create = ($, X, J) => {
  return new J4({ schema: $, typeName: R.ZodEffects, effect: X, ...o(J) });
};
J4.createWithPreprocess = ($, X, J) => {
  return new J4({
    schema: X,
    effect: { type: "preprocess", transform: $ },
    typeName: R.ZodEffects,
    ...o(J),
  });
};
class R6 extends e {
  _parse($) {
    if (this._getType($) === S.undefined) return a$(void 0);
    return this._def.innerType._parse($);
  }
  unwrap() {
    return this._def.innerType;
  }
}
R6.create = ($, X) => {
  return new R6({ innerType: $, typeName: R.ZodOptional, ...o(X) });
};
class o4 extends e {
  _parse($) {
    if (this._getType($) === S.null) return a$(null);
    return this._def.innerType._parse($);
  }
  unwrap() {
    return this._def.innerType;
  }
}
o4.create = ($, X) => {
  return new o4({ innerType: $, typeName: R.ZodNullable, ...o(X) });
};
class p9 extends e {
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
p9.create = ($, X) => {
  return new p9({
    innerType: $,
    typeName: R.ZodDefault,
    defaultValue: typeof X.default === "function" ? X.default : () => X.default,
    ...o(X),
  });
};
class d9 extends e {
  _parse($) {
    let { ctx: X } = this._processInputParams($),
      J = { ...X, common: { ...X.common, issues: [] } },
      W = this._def.innerType._parse({
        data: J.data,
        path: J.path,
        parent: { ...J },
      });
    if (x9(W))
      return W.then((Q) => {
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
          W.status === "valid"
            ? W.value
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
d9.create = ($, X) => {
  return new d9({
    innerType: $,
    typeName: R.ZodCatch,
    catchValue: typeof X.catch === "function" ? X.catch : () => X.catch,
    ...o(X),
  });
};
class u7 extends e {
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
u7.create = ($) => {
  return new u7({ typeName: R.ZodNaN, ...o($) });
};
var g$$ = Symbol("zod_brand");
class U3 extends e {
  _parse($) {
    let { ctx: X } = this._processInputParams($),
      J = X.data;
    return this._def.type._parse({ data: J, path: X.path, parent: X });
  }
  unwrap() {
    return this._def.type;
  }
}
class m7 extends e {
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
        if (Q.status === "dirty") return (X.dirty(), k0(Q.value));
        else
          return this._def.out._parseAsync({
            data: Q.value,
            path: J.path,
            parent: J,
          });
      })();
    else {
      let W = this._def.in._parseSync({
        data: J.data,
        path: J.path,
        parent: J,
      });
      if (W.status === "aborted") return c;
      if (W.status === "dirty")
        return (X.dirty(), { status: "dirty", value: W.value });
      else
        return this._def.out._parseSync({
          data: W.value,
          path: J.path,
          parent: J,
        });
    }
  }
  static create($, X) {
    return new m7({ in: $, out: X, typeName: R.ZodPipeline });
  }
}
class i9 extends e {
  _parse($) {
    let X = this._def.innerType._parse($),
      J = (W) => {
        if (y1(W)) W.value = Object.freeze(W.value);
        return W;
      };
    return x9(X) ? X.then((W) => J(W)) : J(X);
  }
  unwrap() {
    return this._def.innerType;
  }
}
i9.create = ($, X) => {
  return new i9({ innerType: $, typeName: R.ZodReadonly, ...o(X) });
};
var h$$ = { object: E$.lazycreate },
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
var u$$ = j4.create,
  m$$ = x0.create,
  l$$ = u7.create,
  c$$ = T0.create,
  p$$ = x7.create,
  d$$ = f9.create,
  i$$ = T7.create,
  n$$ = y9.create,
  r$$ = g9.create,
  o$$ = f7.create,
  t$$ = g1.create,
  a$$ = L4.create,
  s$$ = y7.create,
  e$$ = X4.create,
  yq = E$.create,
  $6$ = E$.strictCreate,
  X6$ = h9.create,
  J6$ = H3.create,
  Q6$ = u9.create,
  W6$ = M4.create,
  Y6$ = g7.create,
  z6$ = h7.create,
  G6$ = f0.create,
  H6$ = T9.create,
  U6$ = m9.create,
  K6$ = l9.create,
  V6$ = h1.create,
  N6$ = c9.create,
  O6$ = y0.create,
  w6$ = J4.create,
  B6$ = R6.create,
  q6$ = o4.create,
  D6$ = J4.createWithPreprocess,
  F6$ = m7.create;
var l6 = {};
F1(l6, {
  version: () => OG,
  util: () => E,
  treeifyError: () => d7,
  toJSONSchema: () => e0,
  toDotPath: () => uq,
  safeParseAsync: () => s4,
  safeParse: () => a4,
  registry: () => HX,
  regexes: () => e4,
  prettifyError: () => i7,
  parseAsync: () => c1,
  parse: () => l1,
  locales: () => r0,
  isValidJWT: () => WD,
  isValidBase64URL: () => QD,
  isValidBase64: () => jG,
  globalRegistry: () => G6,
  globalConfig: () => n9,
  function: () => R5,
  formatError: () => l0,
  flattenError: () => m0,
  config: () => C$,
  clone: () => n$,
  _xid: () => LX,
  _void: () => F5,
  _uuidv7: () => OX,
  _uuidv6: () => NX,
  _uuidv4: () => VX,
  _uuid: () => KX,
  _url: () => wX,
  _uppercase: () => _X,
  _unknown: () => i1,
  _union: () => av,
  _undefined: () => w5,
  _ulid: () => jX,
  _uint64: () => N5,
  _uint32: () => H5,
  _tuple: () => FH,
  _trim: () => hX,
  _transform: () => zk,
  _toUpperCase: () => mX,
  _toLowerCase: () => uX,
  _templateLiteral: () => Bk,
  _symbol: () => O5,
  _success: () => Vk,
  _stringbool: () => Z5,
  _stringFormat: () => b5,
  _string: () => X5,
  _startsWith: () => TX,
  _size: () => CX,
  _set: () => Jk,
  _safeParseAsync: () => t7,
  _safeParse: () => o7,
  _regex: () => vX,
  _refine: () => I5,
  _record: () => $k,
  _readonly: () => wk,
  _property: () => DH,
  _promise: () => Dk,
  _positive: () => OH,
  _pipe: () => Ok,
  _parseAsync: () => r7,
  _parse: () => n7,
  _overwrite: () => R4,
  _optional: () => Gk,
  _number: () => Q5,
  _nullable: () => Hk,
  _null: () => B5,
  _normalize: () => gX,
  _nonpositive: () => BH,
  _nonoptional: () => Kk,
  _nonnegative: () => qH,
  _never: () => D5,
  _negative: () => wH,
  _nativeEnum: () => Wk,
  _nanoid: () => qX,
  _nan: () => L5,
  _multipleOf: () => n1,
  _minSize: () => r1,
  _minLength: () => J1,
  _min: () => H6,
  _mime: () => yX,
  _maxSize: () => t0,
  _maxLength: () => a0,
  _max: () => P6,
  _map: () => Xk,
  _lte: () => P6,
  _lt: () => Z4,
  _lowercase: () => kX,
  _literal: () => Yk,
  _length: () => s0,
  _lazy: () => qk,
  _ksuid: () => MX,
  _jwt: () => SX,
  _isoTime: () => GH,
  _isoDuration: () => HH,
  _isoDateTime: () => YH,
  _isoDate: () => zH,
  _ipv6: () => IX,
  _ipv4: () => AX,
  _intersection: () => ev,
  _int64: () => V5,
  _int32: () => G5,
  _int: () => W5,
  _includes: () => xX,
  _guid: () => o0,
  _gte: () => H6,
  _gt: () => b4,
  _float64: () => z5,
  _float32: () => Y5,
  _file: () => M5,
  _enum: () => Qk,
  _endsWith: () => fX,
  _emoji: () => BX,
  _email: () => UX,
  _e164: () => EX,
  _discriminatedUnion: () => sv,
  _default: () => Uk,
  _date: () => j5,
  _custom: () => A5,
  _cuid2: () => FX,
  _cuid: () => DX,
  _coercedString: () => WH,
  _coercedNumber: () => UH,
  _coercedDate: () => NH,
  _coercedBoolean: () => KH,
  _coercedBigint: () => VH,
  _cidrv6: () => bX,
  _cidrv4: () => ZX,
  _catch: () => Nk,
  _boolean: () => U5,
  _bigint: () => K5,
  _base64url: () => PX,
  _base64: () => RX,
  _array: () => lX,
  _any: () => q5,
  TimePrecision: () => J5,
  NEVER: () => l7,
  JSONSchemaGenerator: () => P5,
  JSONSchema: () => HD,
  Doc: () => $Q,
  $output: () => eQ,
  $input: () => $5,
  $constructor: () => q,
  $brand: () => c7,
  $ZodXID: () => NQ,
  $ZodVoid: () => CQ,
  $ZodUnknown: () => d1,
  $ZodUnion: () => YX,
  $ZodUndefined: () => RQ,
  $ZodUUID: () => WQ,
  $ZodURL: () => zQ,
  $ZodULID: () => VQ,
  $ZodType: () => d,
  $ZodTuple: () => X1,
  $ZodTransform: () => i0,
  $ZodTemplateLiteral: () => oQ,
  $ZodSymbol: () => bQ,
  $ZodSuccess: () => dQ,
  $ZodStringFormat: () => K$,
  $ZodString: () => $1,
  $ZodSet: () => fQ,
  $ZodRegistry: () => GX,
  $ZodRecord: () => xQ,
  $ZodRealError: () => u0,
  $ZodReadonly: () => rQ,
  $ZodPromise: () => tQ,
  $ZodPrefault: () => cQ,
  $ZodPipe: () => n0,
  $ZodOptional: () => uQ,
  $ZodObject: () => WX,
  $ZodNumberFormat: () => IQ,
  $ZodNumber: () => JX,
  $ZodNullable: () => mQ,
  $ZodNull: () => PQ,
  $ZodNonOptional: () => pQ,
  $ZodNever: () => SQ,
  $ZodNanoID: () => HQ,
  $ZodNaN: () => nQ,
  $ZodMap: () => TQ,
  $ZodLiteral: () => gQ,
  $ZodLazy: () => aQ,
  $ZodKSUID: () => OQ,
  $ZodJWT: () => MQ,
  $ZodIntersection: () => _Q,
  $ZodISOTime: () => DG,
  $ZodISODuration: () => FG,
  $ZodISODateTime: () => BG,
  $ZodISODate: () => qG,
  $ZodIPv6: () => BQ,
  $ZodIPv4: () => wQ,
  $ZodGUID: () => QQ,
  $ZodFunction: () => jH,
  $ZodFile: () => hQ,
  $ZodError: () => XX,
  $ZodEnum: () => yQ,
  $ZodEmoji: () => GQ,
  $ZodEmail: () => YQ,
  $ZodE164: () => LQ,
  $ZodDiscriminatedUnion: () => kQ,
  $ZodDefault: () => lQ,
  $ZodDate: () => vQ,
  $ZodCustomStringFormat: () => AQ,
  $ZodCustom: () => sQ,
  $ZodCheckUpperCase: () => zG,
  $ZodCheckStringFormat: () => c0,
  $ZodCheckStartsWith: () => HG,
  $ZodCheckSizeEquals: () => $G,
  $ZodCheckRegex: () => WG,
  $ZodCheckProperty: () => KG,
  $ZodCheckOverwrite: () => NG,
  $ZodCheckNumberFormat: () => t3,
  $ZodCheckMultipleOf: () => o3,
  $ZodCheckMinSize: () => e3,
  $ZodCheckMinLength: () => JG,
  $ZodCheckMimeType: () => VG,
  $ZodCheckMaxSize: () => s3,
  $ZodCheckMaxLength: () => XG,
  $ZodCheckLowerCase: () => YG,
  $ZodCheckLessThan: () => s7,
  $ZodCheckLengthEquals: () => QG,
  $ZodCheckIncludes: () => GG,
  $ZodCheckGreaterThan: () => e7,
  $ZodCheckEndsWith: () => UG,
  $ZodCheckBigIntFormat: () => a3,
  $ZodCheck: () => I$,
  $ZodCatch: () => iQ,
  $ZodCUID2: () => KQ,
  $ZodCUID: () => UQ,
  $ZodCIDRv6: () => DQ,
  $ZodCIDRv4: () => qQ,
  $ZodBoolean: () => p0,
  $ZodBigIntFormat: () => ZQ,
  $ZodBigInt: () => QX,
  $ZodBase64URL: () => jQ,
  $ZodBase64: () => FQ,
  $ZodAsyncError: () => A4,
  $ZodArray: () => d0,
  $ZodAny: () => EQ,
});
var l7 = Object.freeze({ status: "aborted" });
function q($, X, J) {
  function W(G, H) {
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
  class Y extends Q {}
  Object.defineProperty(Y, "name", { value: $ });
  function z(G) {
    var H;
    let U = J?.Parent ? new Y() : this;
    (W(U, G), (H = U._zod).deferred ?? (H.deferred = []));
    for (let K of U._zod.deferred) K();
    return U;
  }
  return (
    Object.defineProperty(z, "init", { value: W }),
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
var c7 = Symbol("zod_brand");
class A4 extends Error {
  constructor() {
    super(
      "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
    );
  }
}
var n9 = {};
function C$($) {
  if ($) Object.assign(n9, $);
  return n9;
}
var E = {};
F1(E, {
  unwrapMessage: () => r9,
  stringifyPrimitive: () => C,
  required: () => tC,
  randomString: () => mC,
  propertyKeyTypes: () => s9,
  promiseAllObject: () => uC,
  primitiveTypes: () => B3,
  prefixIssues: () => z6,
  pick: () => dC,
  partial: () => oC,
  optionalKeys: () => q3,
  omit: () => iC,
  numKeys: () => lC,
  nullish: () => t4,
  normalizeParams: () => P,
  merge: () => rC,
  jsonStringifyReplacer: () => V3,
  joinValues: () => A,
  issue: () => j3,
  isPlainObject: () => h0,
  isObject: () => g0,
  getSizableOrigin: () => e9,
  getParsedType: () => cC,
  getLengthableOrigin: () => $X,
  getEnumValues: () => o9,
  getElementAtPath: () => hC,
  floatSafeRemainder: () => N3,
  finalizeIssue: () => L6,
  extend: () => nC,
  escapeRegex: () => I4,
  esc: () => u1,
  defineLazy: () => G$,
  createTransparentProxy: () => pC,
  clone: () => n$,
  cleanRegex: () => a9,
  cleanEnum: () => aC,
  captureStackTrace: () => p7,
  cached: () => t9,
  assignProp: () => O3,
  assertNotEqual: () => TC,
  assertNever: () => yC,
  assertIs: () => fC,
  assertEqual: () => xC,
  assert: () => gC,
  allowsEval: () => w3,
  aborted: () => m1,
  NUMBER_FORMAT_RANGES: () => D3,
  Class: () => gq,
  BIGINT_FORMAT_RANGES: () => F3,
});
function xC($) {
  return $;
}
function TC($) {
  return $;
}
function fC($) {}
function yC($) {
  throw Error();
}
function gC($) {}
function o9($) {
  let X = Object.values($).filter((W) => typeof W === "number");
  return Object.entries($)
    .filter(([W, Q]) => X.indexOf(+W) === -1)
    .map(([W, Q]) => Q);
}
function A($, X = "|") {
  return $.map((J) => C(J)).join(X);
}
function V3($, X) {
  if (typeof X === "bigint") return X.toString();
  return X;
}
function t9($) {
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
function a9($) {
  let X = $.startsWith("^") ? 1 : 0,
    J = $.endsWith("$") ? $.length - 1 : $.length;
  return $.slice(X, J);
}
function N3($, X) {
  let J = ($.toString().split(".")[1] || "").length,
    W = (X.toString().split(".")[1] || "").length,
    Q = J > W ? J : W,
    Y = Number.parseInt($.toFixed(Q).replace(".", "")),
    z = Number.parseInt(X.toFixed(Q).replace(".", ""));
  return (Y % z) / 10 ** Q;
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
function O3($, X, J) {
  Object.defineProperty($, X, {
    value: J,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function hC($, X) {
  if (!X) return $;
  return X.reduce((J, W) => J?.[W], $);
}
function uC($) {
  let X = Object.keys($),
    J = X.map((W) => $[W]);
  return Promise.all(J).then((W) => {
    let Q = {};
    for (let Y = 0; Y < X.length; Y++) Q[X[Y]] = W[Y];
    return Q;
  });
}
function mC($ = 10) {
  let J = "";
  for (let W = 0; W < $; W++)
    J += "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)];
  return J;
}
function u1($) {
  return JSON.stringify($);
}
var p7 = Error.captureStackTrace ? Error.captureStackTrace : (...$) => {};
function g0($) {
  return typeof $ === "object" && $ !== null && !Array.isArray($);
}
var w3 = t9(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    return (new Function(""), !0);
  } catch ($) {
    return !1;
  }
});
function h0($) {
  if (g0($) === !1) return !1;
  let X = $.constructor;
  if (X === void 0) return !0;
  let J = X.prototype;
  if (g0(J) === !1) return !1;
  if (Object.prototype.hasOwnProperty.call(J, "isPrototypeOf") === !1)
    return !1;
  return !0;
}
function lC($) {
  let X = 0;
  for (let J in $) if (Object.prototype.hasOwnProperty.call($, J)) X++;
  return X;
}
var cC = ($) => {
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
  s9 = new Set(["string", "number", "symbol"]),
  B3 = new Set([
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
  let W = new $._zod.constr(X ?? $._zod.def);
  if (!X || J?.parent) W._zod.parent = $;
  return W;
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
function pC($) {
  let X;
  return new Proxy(
    {},
    {
      get(J, W, Q) {
        return (X ?? (X = $()), Reflect.get(X, W, Q));
      },
      set(J, W, Q, Y) {
        return (X ?? (X = $()), Reflect.set(X, W, Q, Y));
      },
      has(J, W) {
        return (X ?? (X = $()), Reflect.has(X, W));
      },
      deleteProperty(J, W) {
        return (X ?? (X = $()), Reflect.deleteProperty(X, W));
      },
      ownKeys(J) {
        return (X ?? (X = $()), Reflect.ownKeys(X));
      },
      getOwnPropertyDescriptor(J, W) {
        return (X ?? (X = $()), Reflect.getOwnPropertyDescriptor(X, W));
      },
      defineProperty(J, W, Q) {
        return (X ?? (X = $()), Reflect.defineProperty(X, W, Q));
      },
    },
  );
}
function C($) {
  if (typeof $ === "bigint") return $.toString() + "n";
  if (typeof $ === "string") return `"${$}"`;
  return `${$}`;
}
function q3($) {
  return Object.keys($).filter((X) => {
    return $[X]._zod.optin === "optional" && $[X]._zod.optout === "optional";
  });
}
var D3 = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [
      -340282346638528860000000000000000000000,
      340282346638528860000000000000000000000,
    ],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  F3 = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")],
  };
function dC($, X) {
  let J = {},
    W = $._zod.def;
  for (let Q in X) {
    if (!(Q in W.shape)) throw Error(`Unrecognized key: "${Q}"`);
    if (!X[Q]) continue;
    J[Q] = W.shape[Q];
  }
  return n$($, { ...$._zod.def, shape: J, checks: [] });
}
function iC($, X) {
  let J = { ...$._zod.def.shape },
    W = $._zod.def;
  for (let Q in X) {
    if (!(Q in W.shape)) throw Error(`Unrecognized key: "${Q}"`);
    if (!X[Q]) continue;
    delete J[Q];
  }
  return n$($, { ...$._zod.def, shape: J, checks: [] });
}
function nC($, X) {
  if (!h0(X)) throw Error("Invalid input to extend: expected a plain object");
  let J = {
    ...$._zod.def,
    get shape() {
      let W = { ...$._zod.def.shape, ...X };
      return (O3(this, "shape", W), W);
    },
    checks: [],
  };
  return n$($, J);
}
function rC($, X) {
  return n$($, {
    ...$._zod.def,
    get shape() {
      let J = { ...$._zod.def.shape, ...X._zod.def.shape };
      return (O3(this, "shape", J), J);
    },
    catchall: X._zod.def.catchall,
    checks: [],
  });
}
function oC($, X, J) {
  let W = X._zod.def.shape,
    Q = { ...W };
  if (J)
    for (let Y in J) {
      if (!(Y in W)) throw Error(`Unrecognized key: "${Y}"`);
      if (!J[Y]) continue;
      Q[Y] = $ ? new $({ type: "optional", innerType: W[Y] }) : W[Y];
    }
  else
    for (let Y in W)
      Q[Y] = $ ? new $({ type: "optional", innerType: W[Y] }) : W[Y];
  return n$(X, { ...X._zod.def, shape: Q, checks: [] });
}
function tC($, X, J) {
  let W = X._zod.def.shape,
    Q = { ...W };
  if (J)
    for (let Y in J) {
      if (!(Y in Q)) throw Error(`Unrecognized key: "${Y}"`);
      if (!J[Y]) continue;
      Q[Y] = new $({ type: "nonoptional", innerType: W[Y] });
    }
  else for (let Y in W) Q[Y] = new $({ type: "nonoptional", innerType: W[Y] });
  return n$(X, { ...X._zod.def, shape: Q, checks: [] });
}
function m1($, X = 0) {
  for (let J = X; J < $.issues.length; J++)
    if ($.issues[J]?.continue !== !0) return !0;
  return !1;
}
function z6($, X) {
  return X.map((J) => {
    var W;
    return ((W = J).path ?? (W.path = []), J.path.unshift($), J);
  });
}
function r9($) {
  return typeof $ === "string" ? $ : $?.message;
}
function L6($, X, J) {
  let W = { ...$, path: $.path ?? [] };
  if (!$.message) {
    let Q =
      r9($.inst?._zod.def?.error?.($)) ??
      r9(X?.error?.($)) ??
      r9(J.customError?.($)) ??
      r9(J.localeError?.($)) ??
      "Invalid input";
    W.message = Q;
  }
  if ((delete W.inst, delete W.continue, !X?.reportInput)) delete W.input;
  return W;
}
function e9($) {
  if ($ instanceof Set) return "set";
  if ($ instanceof Map) return "map";
  if ($ instanceof File) return "file";
  return "unknown";
}
function $X($) {
  if (Array.isArray($)) return "array";
  if (typeof $ === "string") return "string";
  return "unknown";
}
function j3(...$) {
  let [X, J, W] = $;
  if (typeof X === "string")
    return { message: X, code: "custom", input: J, inst: W };
  return { ...X };
}
function aC($) {
  return Object.entries($)
    .filter(([X, J]) => {
      return Number.isNaN(Number.parseInt(X, 10));
    })
    .map((X) => X[1]);
}
class gq {
  constructor(...$) {}
}
var hq = ($, X) => {
    (($.name = "$ZodError"),
      Object.defineProperty($, "_zod", { value: $._zod, enumerable: !1 }),
      Object.defineProperty($, "issues", { value: X, enumerable: !1 }),
      Object.defineProperty($, "message", {
        get() {
          return JSON.stringify(X, V3, 2);
        },
        enumerable: !0,
      }));
  },
  XX = q("$ZodError", hq),
  u0 = q("$ZodError", hq, { Parent: Error });
function m0($, X = (J) => J.message) {
  let J = {},
    W = [];
  for (let Q of $.issues)
    if (Q.path.length > 0)
      ((J[Q.path[0]] = J[Q.path[0]] || []), J[Q.path[0]].push(X(Q)));
    else W.push(X(Q));
  return { formErrors: W, fieldErrors: J };
}
function l0($, X) {
  let J =
      X ||
      function (Y) {
        return Y.message;
      },
    W = { _errors: [] },
    Q = (Y) => {
      for (let z of Y.issues)
        if (z.code === "invalid_union" && z.errors.length)
          z.errors.map((G) => Q({ issues: G }));
        else if (z.code === "invalid_key") Q({ issues: z.issues });
        else if (z.code === "invalid_element") Q({ issues: z.issues });
        else if (z.path.length === 0) W._errors.push(J(z));
        else {
          let G = W,
            H = 0;
          while (H < z.path.length) {
            let U = z.path[H];
            if (H !== z.path.length - 1) G[U] = G[U] || { _errors: [] };
            else ((G[U] = G[U] || { _errors: [] }), G[U]._errors.push(J(z)));
            ((G = G[U]), H++);
          }
        }
    };
  return (Q($), W);
}
function d7($, X) {
  let J =
      X ||
      function (Y) {
        return Y.message;
      },
    W = { errors: [] },
    Q = (Y, z = []) => {
      var G, H;
      for (let U of Y.issues)
        if (U.code === "invalid_union" && U.errors.length)
          U.errors.map((K) => Q({ issues: K }, U.path));
        else if (U.code === "invalid_key") Q({ issues: U.issues }, U.path);
        else if (U.code === "invalid_element") Q({ issues: U.issues }, U.path);
        else {
          let K = [...z, ...U.path];
          if (K.length === 0) {
            W.errors.push(J(U));
            continue;
          }
          let V = W,
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
  return (Q($), W);
}
function uq($) {
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
function i7($) {
  let X = [],
    J = [...$.issues].sort((W, Q) => W.path.length - Q.path.length);
  for (let W of J)
    if ((X.push(`✖ ${W.message}`), W.path?.length))
      X.push(`  → at ${uq(W.path)}`);
  return X.join(`
`);
}
var n7 = ($) => (X, J, W, Q) => {
    let Y = W ? Object.assign(W, { async: !1 }) : { async: !1 },
      z = X._zod.run({ value: J, issues: [] }, Y);
    if (z instanceof Promise) throw new A4();
    if (z.issues.length) {
      let G = new (Q?.Err ?? $)(z.issues.map((H) => L6(H, Y, C$())));
      throw (p7(G, Q?.callee), G);
    }
    return z.value;
  },
  l1 = n7(u0),
  r7 = ($) => async (X, J, W, Q) => {
    let Y = W ? Object.assign(W, { async: !0 }) : { async: !0 },
      z = X._zod.run({ value: J, issues: [] }, Y);
    if (z instanceof Promise) z = await z;
    if (z.issues.length) {
      let G = new (Q?.Err ?? $)(z.issues.map((H) => L6(H, Y, C$())));
      throw (p7(G, Q?.callee), G);
    }
    return z.value;
  },
  c1 = r7(u0),
  o7 = ($) => (X, J, W) => {
    let Q = W ? { ...W, async: !1 } : { async: !1 },
      Y = X._zod.run({ value: J, issues: [] }, Q);
    if (Y instanceof Promise) throw new A4();
    return Y.issues.length
      ? {
          success: !1,
          error: new ($ ?? XX)(Y.issues.map((z) => L6(z, Q, C$()))),
        }
      : { success: !0, data: Y.value };
  },
  a4 = o7(u0),
  t7 = ($) => async (X, J, W) => {
    let Q = W ? Object.assign(W, { async: !0 }) : { async: !0 },
      Y = X._zod.run({ value: J, issues: [] }, Q);
    if (Y instanceof Promise) Y = await Y;
    return Y.issues.length
      ? { success: !1, error: new $(Y.issues.map((z) => L6(z, Q, C$()))) }
      : { success: !0, data: Y.value };
  },
  s4 = t7(u0);
var e4 = {};
F1(e4, {
  xid: () => I3,
  uuid7: () => Jv,
  uuid6: () => Xv,
  uuid4: () => $v,
  uuid: () => p1,
  uppercase: () => r3,
  unicodeEmail: () => Yv,
  undefined: () => i3,
  ulid: () => A3,
  time: () => g3,
  string: () => u3,
  rfc5322Email: () => Wv,
  number: () => c3,
  null: () => d3,
  nanoid: () => b3,
  lowercase: () => n3,
  ksuid: () => Z3,
  ipv6: () => v3,
  ipv4: () => C3,
  integer: () => l3,
  html5Email: () => Qv,
  hostname: () => T3,
  guid: () => P3,
  extendedDuration: () => eC,
  emoji: () => S3,
  email: () => E3,
  e164: () => f3,
  duration: () => R3,
  domain: () => Hv,
  datetime: () => h3,
  date: () => y3,
  cuid2: () => M3,
  cuid: () => L3,
  cidrv6: () => _3,
  cidrv4: () => k3,
  browserEmail: () => zv,
  boolean: () => p3,
  bigint: () => m3,
  base64url: () => a7,
  base64: () => x3,
  _emoji: () => Gv,
});
var L3 = /^[cC][^\s-]{8,}$/,
  M3 = /^[0-9a-z]+$/,
  A3 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  I3 = /^[0-9a-vA-V]{20}$/,
  Z3 = /^[A-Za-z0-9]{27}$/,
  b3 = /^[a-zA-Z0-9_-]{21}$/,
  R3 =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  eC =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  P3 =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  p1 = ($) => {
    if (!$)
      return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;
    return new RegExp(
      `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${$}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
    );
  },
  $v = p1(4),
  Xv = p1(6),
  Jv = p1(7),
  E3 =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  Qv =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  Wv =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  Yv = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
  zv =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  Gv = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function S3() {
  return new RegExp(
    "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
    "u",
  );
}
var C3 =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  v3 =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
  k3 =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  _3 =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  x3 =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  a7 = /^[A-Za-z0-9_-]*$/,
  T3 = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/,
  Hv = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
  f3 = /^\+(?:[0-9]){6,14}[0-9]$/,
  mq =
    "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
  y3 = new RegExp(`^${mq}$`);
function lq($) {
  return typeof $.precision === "number"
    ? $.precision === -1
      ? "(?:[01]\\d|2[0-3]):[0-5]\\d"
      : $.precision === 0
        ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d"
        : `(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${$.precision}}`
    : "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
}
function g3($) {
  return new RegExp(`^${lq($)}$`);
}
function h3($) {
  let X = lq({ precision: $.precision }),
    J = ["Z"];
  if ($.local) J.push("");
  if ($.offset) J.push("([+-]\\d{2}:\\d{2})");
  let W = `${X}(?:${J.join("|")})`;
  return new RegExp(`^${mq}T(?:${W})$`);
}
var u3 = ($) => {
    let X = $
      ? `[\\s\\S]{${$?.minimum ?? 0},${$?.maximum ?? ""}}`
      : "[\\s\\S]*";
    return new RegExp(`^${X}$`);
  },
  m3 = /^\d+n?$/,
  l3 = /^\d+$/,
  c3 = /^-?\d+(?:\.\d+)?/i,
  p3 = /true|false/i,
  d3 = /null/i;
var i3 = /undefined/i;
var n3 = /^[^A-Z]*$/,
  r3 = /^[^a-z]*$/;
var I$ = q("$ZodCheck", ($, X) => {
    var J;
    ($._zod ?? ($._zod = {}),
      ($._zod.def = X),
      (J = $._zod).onattach ?? (J.onattach = []));
  }),
  pq = { number: "number", bigint: "bigint", object: "date" },
  s7 = q("$ZodCheckLessThan", ($, X) => {
    I$.init($, X);
    let J = pq[typeof X.value];
    ($._zod.onattach.push((W) => {
      let Q = W._zod.bag,
        Y =
          (X.inclusive ? Q.maximum : Q.exclusiveMaximum) ??
          Number.POSITIVE_INFINITY;
      if (X.value < Y)
        if (X.inclusive) Q.maximum = X.value;
        else Q.exclusiveMaximum = X.value;
    }),
      ($._zod.check = (W) => {
        if (X.inclusive ? W.value <= X.value : W.value < X.value) return;
        W.issues.push({
          origin: J,
          code: "too_big",
          maximum: X.value,
          input: W.value,
          inclusive: X.inclusive,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  e7 = q("$ZodCheckGreaterThan", ($, X) => {
    I$.init($, X);
    let J = pq[typeof X.value];
    ($._zod.onattach.push((W) => {
      let Q = W._zod.bag,
        Y =
          (X.inclusive ? Q.minimum : Q.exclusiveMinimum) ??
          Number.NEGATIVE_INFINITY;
      if (X.value > Y)
        if (X.inclusive) Q.minimum = X.value;
        else Q.exclusiveMinimum = X.value;
    }),
      ($._zod.check = (W) => {
        if (X.inclusive ? W.value >= X.value : W.value > X.value) return;
        W.issues.push({
          origin: J,
          code: "too_small",
          minimum: X.value,
          input: W.value,
          inclusive: X.inclusive,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  o3 = q("$ZodCheckMultipleOf", ($, X) => {
    (I$.init($, X),
      $._zod.onattach.push((J) => {
        var W;
        (W = J._zod.bag).multipleOf ?? (W.multipleOf = X.value);
      }),
      ($._zod.check = (J) => {
        if (typeof J.value !== typeof X.value)
          throw Error("Cannot mix number and bigint in multiple_of check.");
        if (
          typeof J.value === "bigint"
            ? J.value % X.value === BigInt(0)
            : N3(J.value, X.value) === 0
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
  t3 = q("$ZodCheckNumberFormat", ($, X) => {
    (I$.init($, X), (X.format = X.format || "float64"));
    let J = X.format?.includes("int"),
      W = J ? "int" : "number",
      [Q, Y] = D3[X.format];
    ($._zod.onattach.push((z) => {
      let G = z._zod.bag;
      if (((G.format = X.format), (G.minimum = Q), (G.maximum = Y), J))
        G.pattern = l3;
    }),
      ($._zod.check = (z) => {
        let G = z.value;
        if (J) {
          if (!Number.isInteger(G)) {
            z.issues.push({
              expected: W,
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
                origin: W,
                continue: !X.abort,
              });
            else
              z.issues.push({
                input: G,
                code: "too_small",
                minimum: Number.MIN_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst: $,
                origin: W,
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
        if (G > Y)
          z.issues.push({
            origin: "number",
            input: G,
            code: "too_big",
            maximum: Y,
            inst: $,
          });
      }));
  }),
  a3 = q("$ZodCheckBigIntFormat", ($, X) => {
    I$.init($, X);
    let [J, W] = F3[X.format];
    ($._zod.onattach.push((Q) => {
      let Y = Q._zod.bag;
      ((Y.format = X.format), (Y.minimum = J), (Y.maximum = W));
    }),
      ($._zod.check = (Q) => {
        let Y = Q.value;
        if (Y < J)
          Q.issues.push({
            origin: "bigint",
            input: Y,
            code: "too_small",
            minimum: J,
            inclusive: !0,
            inst: $,
            continue: !X.abort,
          });
        if (Y > W)
          Q.issues.push({
            origin: "bigint",
            input: Y,
            code: "too_big",
            maximum: W,
            inst: $,
          });
      }));
  }),
  s3 = q("$ZodCheckMaxSize", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let W = J.value;
        return !t4(W) && W.size !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let W = J._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (X.maximum < W) J._zod.bag.maximum = X.maximum;
      }),
      ($._zod.check = (J) => {
        let W = J.value;
        if (W.size <= X.maximum) return;
        J.issues.push({
          origin: e9(W),
          code: "too_big",
          maximum: X.maximum,
          input: W,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  e3 = q("$ZodCheckMinSize", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let W = J.value;
        return !t4(W) && W.size !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let W = J._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (X.minimum > W) J._zod.bag.minimum = X.minimum;
      }),
      ($._zod.check = (J) => {
        let W = J.value;
        if (W.size >= X.minimum) return;
        J.issues.push({
          origin: e9(W),
          code: "too_small",
          minimum: X.minimum,
          input: W,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  $G = q("$ZodCheckSizeEquals", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let W = J.value;
        return !t4(W) && W.size !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let W = J._zod.bag;
        ((W.minimum = X.size), (W.maximum = X.size), (W.size = X.size));
      }),
      ($._zod.check = (J) => {
        let W = J.value,
          Q = W.size;
        if (Q === X.size) return;
        let Y = Q > X.size;
        J.issues.push({
          origin: e9(W),
          ...(Y
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
  XG = q("$ZodCheckMaxLength", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let W = J.value;
        return !t4(W) && W.length !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let W = J._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (X.maximum < W) J._zod.bag.maximum = X.maximum;
      }),
      ($._zod.check = (J) => {
        let W = J.value;
        if (W.length <= X.maximum) return;
        let Y = $X(W);
        J.issues.push({
          origin: Y,
          code: "too_big",
          maximum: X.maximum,
          inclusive: !0,
          input: W,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  JG = q("$ZodCheckMinLength", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let W = J.value;
        return !t4(W) && W.length !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let W = J._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (X.minimum > W) J._zod.bag.minimum = X.minimum;
      }),
      ($._zod.check = (J) => {
        let W = J.value;
        if (W.length >= X.minimum) return;
        let Y = $X(W);
        J.issues.push({
          origin: Y,
          code: "too_small",
          minimum: X.minimum,
          inclusive: !0,
          input: W,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  QG = q("$ZodCheckLengthEquals", ($, X) => {
    (I$.init($, X),
      ($._zod.when = (J) => {
        let W = J.value;
        return !t4(W) && W.length !== void 0;
      }),
      $._zod.onattach.push((J) => {
        let W = J._zod.bag;
        ((W.minimum = X.length), (W.maximum = X.length), (W.length = X.length));
      }),
      ($._zod.check = (J) => {
        let W = J.value,
          Q = W.length;
        if (Q === X.length) return;
        let Y = $X(W),
          z = Q > X.length;
        J.issues.push({
          origin: Y,
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
  c0 = q("$ZodCheckStringFormat", ($, X) => {
    var J, W;
    if (
      (I$.init($, X),
      $._zod.onattach.push((Q) => {
        let Y = Q._zod.bag;
        if (((Y.format = X.format), X.pattern))
          (Y.patterns ?? (Y.patterns = new Set()), Y.patterns.add(X.pattern));
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
    else (W = $._zod).check ?? (W.check = () => {});
  }),
  WG = q("$ZodCheckRegex", ($, X) => {
    (c0.init($, X),
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
  YG = q("$ZodCheckLowerCase", ($, X) => {
    (X.pattern ?? (X.pattern = n3), c0.init($, X));
  }),
  zG = q("$ZodCheckUpperCase", ($, X) => {
    (X.pattern ?? (X.pattern = r3), c0.init($, X));
  }),
  GG = q("$ZodCheckIncludes", ($, X) => {
    I$.init($, X);
    let J = I4(X.includes),
      W = new RegExp(
        typeof X.position === "number" ? `^.{${X.position}}${J}` : J,
      );
    ((X.pattern = W),
      $._zod.onattach.push((Q) => {
        let Y = Q._zod.bag;
        (Y.patterns ?? (Y.patterns = new Set()), Y.patterns.add(W));
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
  HG = q("$ZodCheckStartsWith", ($, X) => {
    I$.init($, X);
    let J = new RegExp(`^${I4(X.prefix)}.*`);
    (X.pattern ?? (X.pattern = J),
      $._zod.onattach.push((W) => {
        let Q = W._zod.bag;
        (Q.patterns ?? (Q.patterns = new Set()), Q.patterns.add(J));
      }),
      ($._zod.check = (W) => {
        if (W.value.startsWith(X.prefix)) return;
        W.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "starts_with",
          prefix: X.prefix,
          input: W.value,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  UG = q("$ZodCheckEndsWith", ($, X) => {
    I$.init($, X);
    let J = new RegExp(`.*${I4(X.suffix)}$`);
    (X.pattern ?? (X.pattern = J),
      $._zod.onattach.push((W) => {
        let Q = W._zod.bag;
        (Q.patterns ?? (Q.patterns = new Set()), Q.patterns.add(J));
      }),
      ($._zod.check = (W) => {
        if (W.value.endsWith(X.suffix)) return;
        W.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "ends_with",
          suffix: X.suffix,
          input: W.value,
          inst: $,
          continue: !X.abort,
        });
      }));
  });
function cq($, X, J) {
  if ($.issues.length) X.issues.push(...z6(J, $.issues));
}
var KG = q("$ZodCheckProperty", ($, X) => {
    (I$.init($, X),
      ($._zod.check = (J) => {
        let W = X.schema._zod.run(
          { value: J.value[X.property], issues: [] },
          {},
        );
        if (W instanceof Promise) return W.then((Q) => cq(Q, J, X.property));
        cq(W, J, X.property);
        return;
      }));
  }),
  VG = q("$ZodCheckMimeType", ($, X) => {
    I$.init($, X);
    let J = new Set(X.mime);
    ($._zod.onattach.push((W) => {
      W._zod.bag.mime = X.mime;
    }),
      ($._zod.check = (W) => {
        if (J.has(W.value.type)) return;
        W.issues.push({
          code: "invalid_value",
          values: X.mime,
          input: W.value.type,
          inst: $,
        });
      }));
  }),
  NG = q("$ZodCheckOverwrite", ($, X) => {
    (I$.init($, X),
      ($._zod.check = (J) => {
        J.value = X.tx(J.value);
      }));
  });
class $Q {
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
      ).filter((Y) => Y),
      W = Math.min(...J.map((Y) => Y.length - Y.trimStart().length)),
      Q = J.map((Y) => Y.slice(W)).map((Y) => " ".repeat(this.indent * 2) + Y);
    for (let Y of Q) this.content.push(Y);
  }
  compile() {
    let $ = Function,
      X = this?.args,
      W = [...(this?.content ?? [""]).map((Q) => `  ${Q}`)];
    return new $(
      ...X,
      W.join(`
`),
    );
  }
}
var OG = { major: 4, minor: 0, patch: 0 };
var d = q("$ZodType", ($, X) => {
    var J;
    ($ ?? ($ = {}),
      ($._zod.def = X),
      ($._zod.bag = $._zod.bag || {}),
      ($._zod.version = OG));
    let W = [...($._zod.def.checks ?? [])];
    if ($._zod.traits.has("$ZodCheck")) W.unshift($);
    for (let Q of W) for (let Y of Q._zod.onattach) Y($);
    if (W.length === 0)
      ((J = $._zod).deferred ?? (J.deferred = []),
        $._zod.deferred?.push(() => {
          $._zod.run = $._zod.parse;
        }));
    else {
      let Q = (Y, z, G) => {
        let H = m1(Y),
          U;
        for (let K of z) {
          if (K._zod.when) {
            if (!K._zod.when(Y)) continue;
          } else if (H) continue;
          let V = Y.issues.length,
            N = K._zod.check(Y);
          if (N instanceof Promise && G?.async === !1) throw new A4();
          if (U || N instanceof Promise)
            U = (U ?? Promise.resolve()).then(async () => {
              if ((await N, Y.issues.length === V)) return;
              if (!H) H = m1(Y, V);
            });
          else {
            if (Y.issues.length === V) continue;
            if (!H) H = m1(Y, V);
          }
        }
        if (U)
          return U.then(() => {
            return Y;
          });
        return Y;
      };
      $._zod.run = (Y, z) => {
        let G = $._zod.parse(Y, z);
        if (G instanceof Promise) {
          if (z.async === !1) throw new A4();
          return G.then((H) => Q(H, W, z));
        }
        return Q(G, W, z);
      };
    }
    $["~standard"] = {
      validate: (Q) => {
        try {
          let Y = a4($, Q);
          return Y.success ? { value: Y.data } : { issues: Y.error?.issues };
        } catch (Y) {
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
    (d.init($, X),
      ($._zod.pattern =
        [...($?._zod.bag?.patterns ?? [])].pop() ?? u3($._zod.bag)),
      ($._zod.parse = (J, W) => {
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
    (c0.init($, X), $1.init($, X));
  }),
  QQ = q("$ZodGUID", ($, X) => {
    (X.pattern ?? (X.pattern = P3), K$.init($, X));
  }),
  WQ = q("$ZodUUID", ($, X) => {
    if (X.version) {
      let W = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
        X.version
      ];
      if (W === void 0) throw Error(`Invalid UUID version: "${X.version}"`);
      X.pattern ?? (X.pattern = p1(W));
    } else X.pattern ?? (X.pattern = p1());
    K$.init($, X);
  }),
  YQ = q("$ZodEmail", ($, X) => {
    (X.pattern ?? (X.pattern = E3), K$.init($, X));
  }),
  zQ = q("$ZodURL", ($, X) => {
    (K$.init($, X),
      ($._zod.check = (J) => {
        try {
          let W = J.value,
            Q = new URL(W),
            Y = Q.href;
          if (X.hostname) {
            if (((X.hostname.lastIndex = 0), !X.hostname.test(Q.hostname)))
              J.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: T3.source,
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
          if (!W.endsWith("/") && Y.endsWith("/")) J.value = Y.slice(0, -1);
          else J.value = Y;
          return;
        } catch (W) {
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
  GQ = q("$ZodEmoji", ($, X) => {
    (X.pattern ?? (X.pattern = S3()), K$.init($, X));
  }),
  HQ = q("$ZodNanoID", ($, X) => {
    (X.pattern ?? (X.pattern = b3), K$.init($, X));
  }),
  UQ = q("$ZodCUID", ($, X) => {
    (X.pattern ?? (X.pattern = L3), K$.init($, X));
  }),
  KQ = q("$ZodCUID2", ($, X) => {
    (X.pattern ?? (X.pattern = M3), K$.init($, X));
  }),
  VQ = q("$ZodULID", ($, X) => {
    (X.pattern ?? (X.pattern = A3), K$.init($, X));
  }),
  NQ = q("$ZodXID", ($, X) => {
    (X.pattern ?? (X.pattern = I3), K$.init($, X));
  }),
  OQ = q("$ZodKSUID", ($, X) => {
    (X.pattern ?? (X.pattern = Z3), K$.init($, X));
  }),
  BG = q("$ZodISODateTime", ($, X) => {
    (X.pattern ?? (X.pattern = h3(X)), K$.init($, X));
  }),
  qG = q("$ZodISODate", ($, X) => {
    (X.pattern ?? (X.pattern = y3), K$.init($, X));
  }),
  DG = q("$ZodISOTime", ($, X) => {
    (X.pattern ?? (X.pattern = g3(X)), K$.init($, X));
  }),
  FG = q("$ZodISODuration", ($, X) => {
    (X.pattern ?? (X.pattern = R3), K$.init($, X));
  }),
  wQ = q("$ZodIPv4", ($, X) => {
    (X.pattern ?? (X.pattern = C3),
      K$.init($, X),
      $._zod.onattach.push((J) => {
        let W = J._zod.bag;
        W.format = "ipv4";
      }));
  }),
  BQ = q("$ZodIPv6", ($, X) => {
    (X.pattern ?? (X.pattern = v3),
      K$.init($, X),
      $._zod.onattach.push((J) => {
        let W = J._zod.bag;
        W.format = "ipv6";
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
  qQ = q("$ZodCIDRv4", ($, X) => {
    (X.pattern ?? (X.pattern = k3), K$.init($, X));
  }),
  DQ = q("$ZodCIDRv6", ($, X) => {
    (X.pattern ?? (X.pattern = _3),
      K$.init($, X),
      ($._zod.check = (J) => {
        let [W, Q] = J.value.split("/");
        try {
          if (!Q) throw Error();
          let Y = Number(Q);
          if (`${Y}` !== Q) throw Error();
          if (Y < 0 || Y > 128) throw Error();
          new URL(`http://[${W}]`);
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
function jG($) {
  if ($ === "") return !0;
  if ($.length % 4 !== 0) return !1;
  try {
    return (atob($), !0);
  } catch {
    return !1;
  }
}
var FQ = q("$ZodBase64", ($, X) => {
  (X.pattern ?? (X.pattern = x3),
    K$.init($, X),
    $._zod.onattach.push((J) => {
      J._zod.bag.contentEncoding = "base64";
    }),
    ($._zod.check = (J) => {
      if (jG(J.value)) return;
      J.issues.push({
        code: "invalid_format",
        format: "base64",
        input: J.value,
        inst: $,
        continue: !X.abort,
      });
    }));
});
function QD($) {
  if (!a7.test($)) return !1;
  let X = $.replace(/[-_]/g, (W) => (W === "-" ? "+" : "/")),
    J = X.padEnd(Math.ceil(X.length / 4) * 4, "=");
  return jG(J);
}
var jQ = q("$ZodBase64URL", ($, X) => {
    (X.pattern ?? (X.pattern = a7),
      K$.init($, X),
      $._zod.onattach.push((J) => {
        J._zod.bag.contentEncoding = "base64url";
      }),
      ($._zod.check = (J) => {
        if (QD(J.value)) return;
        J.issues.push({
          code: "invalid_format",
          format: "base64url",
          input: J.value,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  LQ = q("$ZodE164", ($, X) => {
    (X.pattern ?? (X.pattern = f3), K$.init($, X));
  });
function WD($, X = null) {
  try {
    let J = $.split(".");
    if (J.length !== 3) return !1;
    let [W] = J;
    if (!W) return !1;
    let Q = JSON.parse(atob(W));
    if ("typ" in Q && Q?.typ !== "JWT") return !1;
    if (!Q.alg) return !1;
    if (X && (!("alg" in Q) || Q.alg !== X)) return !1;
    return !0;
  } catch {
    return !1;
  }
}
var MQ = q("$ZodJWT", ($, X) => {
    (K$.init($, X),
      ($._zod.check = (J) => {
        if (WD(J.value, X.alg)) return;
        J.issues.push({
          code: "invalid_format",
          format: "jwt",
          input: J.value,
          inst: $,
          continue: !X.abort,
        });
      }));
  }),
  AQ = q("$ZodCustomStringFormat", ($, X) => {
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
  JX = q("$ZodNumber", ($, X) => {
    (d.init($, X),
      ($._zod.pattern = $._zod.bag.pattern ?? c3),
      ($._zod.parse = (J, W) => {
        if (X.coerce)
          try {
            J.value = Number(J.value);
          } catch (z) {}
        let Q = J.value;
        if (typeof Q === "number" && !Number.isNaN(Q) && Number.isFinite(Q))
          return J;
        let Y =
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
            ...(Y ? { received: Y } : {}),
          }),
          J
        );
      }));
  }),
  IQ = q("$ZodNumber", ($, X) => {
    (t3.init($, X), JX.init($, X));
  }),
  p0 = q("$ZodBoolean", ($, X) => {
    (d.init($, X),
      ($._zod.pattern = p3),
      ($._zod.parse = (J, W) => {
        if (X.coerce)
          try {
            J.value = Boolean(J.value);
          } catch (Y) {}
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
  QX = q("$ZodBigInt", ($, X) => {
    (d.init($, X),
      ($._zod.pattern = m3),
      ($._zod.parse = (J, W) => {
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
  ZQ = q("$ZodBigInt", ($, X) => {
    (a3.init($, X), QX.init($, X));
  }),
  bQ = q("$ZodSymbol", ($, X) => {
    (d.init($, X),
      ($._zod.parse = (J, W) => {
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
  RQ = q("$ZodUndefined", ($, X) => {
    (d.init($, X),
      ($._zod.pattern = i3),
      ($._zod.values = new Set([void 0])),
      ($._zod.optin = "optional"),
      ($._zod.optout = "optional"),
      ($._zod.parse = (J, W) => {
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
  PQ = q("$ZodNull", ($, X) => {
    (d.init($, X),
      ($._zod.pattern = d3),
      ($._zod.values = new Set([null])),
      ($._zod.parse = (J, W) => {
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
  EQ = q("$ZodAny", ($, X) => {
    (d.init($, X), ($._zod.parse = (J) => J));
  }),
  d1 = q("$ZodUnknown", ($, X) => {
    (d.init($, X), ($._zod.parse = (J) => J));
  }),
  SQ = q("$ZodNever", ($, X) => {
    (d.init($, X),
      ($._zod.parse = (J, W) => {
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
  CQ = q("$ZodVoid", ($, X) => {
    (d.init($, X),
      ($._zod.parse = (J, W) => {
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
  vQ = q("$ZodDate", ($, X) => {
    (d.init($, X),
      ($._zod.parse = (J, W) => {
        if (X.coerce)
          try {
            J.value = new Date(J.value);
          } catch (G) {}
        let Q = J.value,
          Y = Q instanceof Date;
        if (Y && !Number.isNaN(Q.getTime())) return J;
        return (
          J.issues.push({
            expected: "date",
            code: "invalid_type",
            input: Q,
            ...(Y ? { received: "Invalid Date" } : {}),
            inst: $,
          }),
          J
        );
      }));
  });
function iq($, X, J) {
  if ($.issues.length) X.issues.push(...z6(J, $.issues));
  X.value[J] = $.value;
}
var d0 = q("$ZodArray", ($, X) => {
  (d.init($, X),
    ($._zod.parse = (J, W) => {
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
      let Y = [];
      for (let z = 0; z < Q.length; z++) {
        let G = Q[z],
          H = X.element._zod.run({ value: G, issues: [] }, W);
        if (H instanceof Promise) Y.push(H.then((U) => iq(U, J, z)));
        else iq(H, J, z);
      }
      if (Y.length) return Promise.all(Y).then(() => J);
      return J;
    }));
});
function XQ($, X, J) {
  if ($.issues.length) X.issues.push(...z6(J, $.issues));
  X.value[J] = $.value;
}
function nq($, X, J, W) {
  if ($.issues.length)
    if (W[J] === void 0)
      if (J in W) X.value[J] = void 0;
      else X.value[J] = $.value;
    else X.issues.push(...z6(J, $.issues));
  else if ($.value === void 0) {
    if (J in W) X.value[J] = void 0;
  } else X.value[J] = $.value;
}
var WX = q("$ZodObject", ($, X) => {
  d.init($, X);
  let J = t9(() => {
    let V = Object.keys(X.shape);
    for (let O of V)
      if (!(X.shape[O] instanceof d))
        throw Error(`Invalid element at key "${O}": expected a Zod schema`);
    let N = q3(X.shape);
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
  let W = (V) => {
      let N = new $Q(["shape", "payload", "ctx"]),
        O = J.value,
        w = (I) => {
          let Z = u1(I);
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
          let _ = u1(I);
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
            path: iss.path ? [${u1(I)}, ...iss.path] : [${u1(I)}]
          })));`),
            N.write(`newResult[${u1(I)}] = ${Z}.value`));
        }
      (N.write("payload.value = newResult;"), N.write("return payload;"));
      let j = N.compile();
      return (I, Z) => j(V, I, Z);
    },
    Q,
    Y = g0,
    z = !n9.jitless,
    H = z && w3.value,
    U = X.catchall,
    K;
  $._zod.parse = (V, N) => {
    K ?? (K = J.value);
    let O = V.value;
    if (!Y(O))
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
      if (!Q) Q = W(X.shape);
      V = Q(V, N);
    } else {
      V.value = {};
      let Z = K.shape;
      for (let _ of K.keys) {
        let T = Z[_],
          O$ = T._zod.run({ value: O[_], issues: [] }, N),
          x$ = T._zod.optin === "optional" && T._zod.optout === "optional";
        if (O$ instanceof Promise)
          w.push(O$.then((O6) => (x$ ? nq(O6, V, _, O) : XQ(O6, V, _))));
        else if (x$) nq(O$, V, _, O);
        else XQ(O$, V, _);
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
      if (_ instanceof Promise) w.push(_.then((T) => XQ(T, V, Z)));
      else XQ(_, V, Z);
    }
    if (B.length)
      V.issues.push({ code: "unrecognized_keys", keys: B, input: O, inst: $ });
    if (!w.length) return V;
    return Promise.all(w).then(() => {
      return V;
    });
  };
});
function rq($, X, J, W) {
  for (let Q of $) if (Q.issues.length === 0) return ((X.value = Q.value), X);
  return (
    X.issues.push({
      code: "invalid_union",
      input: X.value,
      inst: J,
      errors: $.map((Q) => Q.issues.map((Y) => L6(Y, W, C$()))),
    }),
    X
  );
}
var YX = q("$ZodUnion", ($, X) => {
    (d.init($, X),
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
          let J = X.options.map((W) => W._zod.pattern);
          return new RegExp(`^(${J.map((W) => a9(W.source)).join("|")})$`);
        }
        return;
      }),
      ($._zod.parse = (J, W) => {
        let Q = !1,
          Y = [];
        for (let z of X.options) {
          let G = z._zod.run({ value: J.value, issues: [] }, W);
          if (G instanceof Promise) (Y.push(G), (Q = !0));
          else {
            if (G.issues.length === 0) return G;
            Y.push(G);
          }
        }
        if (!Q) return rq(Y, J, $, W);
        return Promise.all(Y).then((z) => {
          return rq(z, J, $, W);
        });
      }));
  }),
  kQ = q("$ZodDiscriminatedUnion", ($, X) => {
    YX.init($, X);
    let J = $._zod.parse;
    G$($._zod, "propValues", () => {
      let Q = {};
      for (let Y of X.options) {
        let z = Y._zod.propValues;
        if (!z || Object.keys(z).length === 0)
          throw Error(
            `Invalid discriminated union option at index "${X.options.indexOf(Y)}"`,
          );
        for (let [G, H] of Object.entries(z)) {
          if (!Q[G]) Q[G] = new Set();
          for (let U of H) Q[G].add(U);
        }
      }
      return Q;
    });
    let W = t9(() => {
      let Q = X.options,
        Y = new Map();
      for (let z of Q) {
        let G = z._zod.propValues[X.discriminator];
        if (!G || G.size === 0)
          throw Error(
            `Invalid discriminated union option at index "${X.options.indexOf(z)}"`,
          );
        for (let H of G) {
          if (Y.has(H))
            throw Error(`Duplicate discriminator value "${String(H)}"`);
          Y.set(H, z);
        }
      }
      return Y;
    });
    $._zod.parse = (Q, Y) => {
      let z = Q.value;
      if (!g0(z))
        return (
          Q.issues.push({
            code: "invalid_type",
            expected: "object",
            input: z,
            inst: $,
          }),
          Q
        );
      let G = W.value.get(z?.[X.discriminator]);
      if (G) return G._zod.run(Q, Y);
      if (X.unionFallback) return J(Q, Y);
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
  _Q = q("$ZodIntersection", ($, X) => {
    (d.init($, X),
      ($._zod.parse = (J, W) => {
        let Q = J.value,
          Y = X.left._zod.run({ value: Q, issues: [] }, W),
          z = X.right._zod.run({ value: Q, issues: [] }, W);
        if (Y instanceof Promise || z instanceof Promise)
          return Promise.all([Y, z]).then(([H, U]) => {
            return oq(J, H, U);
          });
        return oq(J, Y, z);
      }));
  });
function wG($, X) {
  if ($ === X) return { valid: !0, data: $ };
  if ($ instanceof Date && X instanceof Date && +$ === +X)
    return { valid: !0, data: $ };
  if (h0($) && h0(X)) {
    let J = Object.keys(X),
      W = Object.keys($).filter((Y) => J.indexOf(Y) !== -1),
      Q = { ...$, ...X };
    for (let Y of W) {
      let z = wG($[Y], X[Y]);
      if (!z.valid)
        return { valid: !1, mergeErrorPath: [Y, ...z.mergeErrorPath] };
      Q[Y] = z.data;
    }
    return { valid: !0, data: Q };
  }
  if (Array.isArray($) && Array.isArray(X)) {
    if ($.length !== X.length) return { valid: !1, mergeErrorPath: [] };
    let J = [];
    for (let W = 0; W < $.length; W++) {
      let Q = $[W],
        Y = X[W],
        z = wG(Q, Y);
      if (!z.valid)
        return { valid: !1, mergeErrorPath: [W, ...z.mergeErrorPath] };
      J.push(z.data);
    }
    return { valid: !0, data: J };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function oq($, X, J) {
  if (X.issues.length) $.issues.push(...X.issues);
  if (J.issues.length) $.issues.push(...J.issues);
  if (m1($)) return $;
  let W = wG(X.value, J.value);
  if (!W.valid)
    throw Error(
      `Unmergable intersection. Error path: ${JSON.stringify(W.mergeErrorPath)}`,
    );
  return (($.value = W.data), $);
}
var X1 = q("$ZodTuple", ($, X) => {
  d.init($, X);
  let J = X.items,
    W =
      J.length - [...J].reverse().findIndex((Q) => Q._zod.optin !== "optional");
  $._zod.parse = (Q, Y) => {
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
        K = z.length < W - 1;
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
        if (H >= W) continue;
      }
      let K = U._zod.run({ value: z[H], issues: [] }, Y);
      if (K instanceof Promise) G.push(K.then((V) => JQ(V, Q, H)));
      else JQ(K, Q, H);
    }
    if (X.rest) {
      let U = z.slice(J.length);
      for (let K of U) {
        H++;
        let V = X.rest._zod.run({ value: K, issues: [] }, Y);
        if (V instanceof Promise) G.push(V.then((N) => JQ(N, Q, H)));
        else JQ(V, Q, H);
      }
    }
    if (G.length) return Promise.all(G).then(() => Q);
    return Q;
  };
});
function JQ($, X, J) {
  if ($.issues.length) X.issues.push(...z6(J, $.issues));
  X.value[J] = $.value;
}
var xQ = q("$ZodRecord", ($, X) => {
    (d.init($, X),
      ($._zod.parse = (J, W) => {
        let Q = J.value;
        if (!h0(Q))
          return (
            J.issues.push({
              expected: "record",
              code: "invalid_type",
              input: Q,
              inst: $,
            }),
            J
          );
        let Y = [];
        if (X.keyType._zod.values) {
          let z = X.keyType._zod.values;
          J.value = {};
          for (let H of z)
            if (
              typeof H === "string" ||
              typeof H === "number" ||
              typeof H === "symbol"
            ) {
              let U = X.valueType._zod.run({ value: Q[H], issues: [] }, W);
              if (U instanceof Promise)
                Y.push(
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
            let G = X.keyType._zod.run({ value: z, issues: [] }, W);
            if (G instanceof Promise)
              throw Error(
                "Async schemas not supported in object keys currently",
              );
            if (G.issues.length) {
              (J.issues.push({
                origin: "record",
                code: "invalid_key",
                issues: G.issues.map((U) => L6(U, W, C$())),
                input: z,
                path: [z],
                inst: $,
              }),
                (J.value[G.value] = G.value));
              continue;
            }
            let H = X.valueType._zod.run({ value: Q[z], issues: [] }, W);
            if (H instanceof Promise)
              Y.push(
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
        if (Y.length) return Promise.all(Y).then(() => J);
        return J;
      }));
  }),
  TQ = q("$ZodMap", ($, X) => {
    (d.init($, X),
      ($._zod.parse = (J, W) => {
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
        let Y = [];
        J.value = new Map();
        for (let [z, G] of Q) {
          let H = X.keyType._zod.run({ value: z, issues: [] }, W),
            U = X.valueType._zod.run({ value: G, issues: [] }, W);
          if (H instanceof Promise || U instanceof Promise)
            Y.push(
              Promise.all([H, U]).then(([K, V]) => {
                tq(K, V, J, z, Q, $, W);
              }),
            );
          else tq(H, U, J, z, Q, $, W);
        }
        if (Y.length) return Promise.all(Y).then(() => J);
        return J;
      }));
  });
function tq($, X, J, W, Q, Y, z) {
  if ($.issues.length)
    if (s9.has(typeof W)) J.issues.push(...z6(W, $.issues));
    else
      J.issues.push({
        origin: "map",
        code: "invalid_key",
        input: Q,
        inst: Y,
        issues: $.issues.map((G) => L6(G, z, C$())),
      });
  if (X.issues.length)
    if (s9.has(typeof W)) J.issues.push(...z6(W, X.issues));
    else
      J.issues.push({
        origin: "map",
        code: "invalid_element",
        input: Q,
        inst: Y,
        key: W,
        issues: X.issues.map((G) => L6(G, z, C$())),
      });
  J.value.set($.value, X.value);
}
var fQ = q("$ZodSet", ($, X) => {
  (d.init($, X),
    ($._zod.parse = (J, W) => {
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
      let Y = [];
      J.value = new Set();
      for (let z of Q) {
        let G = X.valueType._zod.run({ value: z, issues: [] }, W);
        if (G instanceof Promise) Y.push(G.then((H) => aq(H, J)));
        else aq(G, J);
      }
      if (Y.length) return Promise.all(Y).then(() => J);
      return J;
    }));
});
function aq($, X) {
  if ($.issues.length) X.issues.push(...$.issues);
  X.value.add($.value);
}
var yQ = q("$ZodEnum", ($, X) => {
    d.init($, X);
    let J = o9(X.entries);
    (($._zod.values = new Set(J)),
      ($._zod.pattern = new RegExp(
        `^(${J.filter((W) => s9.has(typeof W))
          .map((W) => (typeof W === "string" ? I4(W) : W.toString()))
          .join("|")})$`,
      )),
      ($._zod.parse = (W, Q) => {
        let Y = W.value;
        if ($._zod.values.has(Y)) return W;
        return (
          W.issues.push({
            code: "invalid_value",
            values: J,
            input: Y,
            inst: $,
          }),
          W
        );
      }));
  }),
  gQ = q("$ZodLiteral", ($, X) => {
    (d.init($, X),
      ($._zod.values = new Set(X.values)),
      ($._zod.pattern = new RegExp(
        `^(${X.values.map((J) => (typeof J === "string" ? I4(J) : J ? J.toString() : String(J))).join("|")})$`,
      )),
      ($._zod.parse = (J, W) => {
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
  hQ = q("$ZodFile", ($, X) => {
    (d.init($, X),
      ($._zod.parse = (J, W) => {
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
  i0 = q("$ZodTransform", ($, X) => {
    (d.init($, X),
      ($._zod.parse = (J, W) => {
        let Q = X.transform(J.value, J);
        if (W.async)
          return (Q instanceof Promise ? Q : Promise.resolve(Q)).then((z) => {
            return ((J.value = z), J);
          });
        if (Q instanceof Promise) throw new A4();
        return ((J.value = Q), J);
      }));
  }),
  uQ = q("$ZodOptional", ($, X) => {
    (d.init($, X),
      ($._zod.optin = "optional"),
      ($._zod.optout = "optional"),
      G$($._zod, "values", () => {
        return X.innerType._zod.values
          ? new Set([...X.innerType._zod.values, void 0])
          : void 0;
      }),
      G$($._zod, "pattern", () => {
        let J = X.innerType._zod.pattern;
        return J ? new RegExp(`^(${a9(J.source)})?$`) : void 0;
      }),
      ($._zod.parse = (J, W) => {
        if (X.innerType._zod.optin === "optional")
          return X.innerType._zod.run(J, W);
        if (J.value === void 0) return J;
        return X.innerType._zod.run(J, W);
      }));
  }),
  mQ = q("$ZodNullable", ($, X) => {
    (d.init($, X),
      G$($._zod, "optin", () => X.innerType._zod.optin),
      G$($._zod, "optout", () => X.innerType._zod.optout),
      G$($._zod, "pattern", () => {
        let J = X.innerType._zod.pattern;
        return J ? new RegExp(`^(${a9(J.source)}|null)$`) : void 0;
      }),
      G$($._zod, "values", () => {
        return X.innerType._zod.values
          ? new Set([...X.innerType._zod.values, null])
          : void 0;
      }),
      ($._zod.parse = (J, W) => {
        if (J.value === null) return J;
        return X.innerType._zod.run(J, W);
      }));
  }),
  lQ = q("$ZodDefault", ($, X) => {
    (d.init($, X),
      ($._zod.optin = "optional"),
      G$($._zod, "values", () => X.innerType._zod.values),
      ($._zod.parse = (J, W) => {
        if (J.value === void 0) return ((J.value = X.defaultValue), J);
        let Q = X.innerType._zod.run(J, W);
        if (Q instanceof Promise) return Q.then((Y) => sq(Y, X));
        return sq(Q, X);
      }));
  });
function sq($, X) {
  if ($.value === void 0) $.value = X.defaultValue;
  return $;
}
var cQ = q("$ZodPrefault", ($, X) => {
    (d.init($, X),
      ($._zod.optin = "optional"),
      G$($._zod, "values", () => X.innerType._zod.values),
      ($._zod.parse = (J, W) => {
        if (J.value === void 0) J.value = X.defaultValue;
        return X.innerType._zod.run(J, W);
      }));
  }),
  pQ = q("$ZodNonOptional", ($, X) => {
    (d.init($, X),
      G$($._zod, "values", () => {
        let J = X.innerType._zod.values;
        return J ? new Set([...J].filter((W) => W !== void 0)) : void 0;
      }),
      ($._zod.parse = (J, W) => {
        let Q = X.innerType._zod.run(J, W);
        if (Q instanceof Promise) return Q.then((Y) => eq(Y, $));
        return eq(Q, $);
      }));
  });
function eq($, X) {
  if (!$.issues.length && $.value === void 0)
    $.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: $.value,
      inst: X,
    });
  return $;
}
var dQ = q("$ZodSuccess", ($, X) => {
    (d.init($, X),
      ($._zod.parse = (J, W) => {
        let Q = X.innerType._zod.run(J, W);
        if (Q instanceof Promise)
          return Q.then((Y) => {
            return ((J.value = Y.issues.length === 0), J);
          });
        return ((J.value = Q.issues.length === 0), J);
      }));
  }),
  iQ = q("$ZodCatch", ($, X) => {
    (d.init($, X),
      ($._zod.optin = "optional"),
      G$($._zod, "optout", () => X.innerType._zod.optout),
      G$($._zod, "values", () => X.innerType._zod.values),
      ($._zod.parse = (J, W) => {
        let Q = X.innerType._zod.run(J, W);
        if (Q instanceof Promise)
          return Q.then((Y) => {
            if (((J.value = Y.value), Y.issues.length))
              ((J.value = X.catchValue({
                ...J,
                error: { issues: Y.issues.map((z) => L6(z, W, C$())) },
                input: J.value,
              })),
                (J.issues = []));
            return J;
          });
        if (((J.value = Q.value), Q.issues.length))
          ((J.value = X.catchValue({
            ...J,
            error: { issues: Q.issues.map((Y) => L6(Y, W, C$())) },
            input: J.value,
          })),
            (J.issues = []));
        return J;
      }));
  }),
  nQ = q("$ZodNaN", ($, X) => {
    (d.init($, X),
      ($._zod.parse = (J, W) => {
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
  n0 = q("$ZodPipe", ($, X) => {
    (d.init($, X),
      G$($._zod, "values", () => X.in._zod.values),
      G$($._zod, "optin", () => X.in._zod.optin),
      G$($._zod, "optout", () => X.out._zod.optout),
      ($._zod.parse = (J, W) => {
        let Q = X.in._zod.run(J, W);
        if (Q instanceof Promise) return Q.then((Y) => $D(Y, X, W));
        return $D(Q, X, W);
      }));
  });
function $D($, X, J) {
  if (m1($)) return $;
  return X.out._zod.run({ value: $.value, issues: $.issues }, J);
}
var rQ = q("$ZodReadonly", ($, X) => {
  (d.init($, X),
    G$($._zod, "propValues", () => X.innerType._zod.propValues),
    G$($._zod, "values", () => X.innerType._zod.values),
    G$($._zod, "optin", () => X.innerType._zod.optin),
    G$($._zod, "optout", () => X.innerType._zod.optout),
    ($._zod.parse = (J, W) => {
      let Q = X.innerType._zod.run(J, W);
      if (Q instanceof Promise) return Q.then(XD);
      return XD(Q);
    }));
});
function XD($) {
  return (($.value = Object.freeze($.value)), $);
}
var oQ = q("$ZodTemplateLiteral", ($, X) => {
    d.init($, X);
    let J = [];
    for (let W of X.parts)
      if (W instanceof d) {
        if (!W._zod.pattern)
          throw Error(
            `Invalid template literal part, no pattern found: ${[...W._zod.traits].shift()}`,
          );
        let Q =
          W._zod.pattern instanceof RegExp
            ? W._zod.pattern.source
            : W._zod.pattern;
        if (!Q) throw Error(`Invalid template literal part: ${W._zod.traits}`);
        let Y = Q.startsWith("^") ? 1 : 0,
          z = Q.endsWith("$") ? Q.length - 1 : Q.length;
        J.push(Q.slice(Y, z));
      } else if (W === null || B3.has(typeof W)) J.push(I4(`${W}`));
      else throw Error(`Invalid template literal part: ${W}`);
    (($._zod.pattern = new RegExp(`^${J.join("")}$`)),
      ($._zod.parse = (W, Q) => {
        if (typeof W.value !== "string")
          return (
            W.issues.push({
              input: W.value,
              inst: $,
              expected: "template_literal",
              code: "invalid_type",
            }),
            W
          );
        if ((($._zod.pattern.lastIndex = 0), !$._zod.pattern.test(W.value)))
          return (
            W.issues.push({
              input: W.value,
              inst: $,
              code: "invalid_format",
              format: "template_literal",
              pattern: $._zod.pattern.source,
            }),
            W
          );
        return W;
      }));
  }),
  tQ = q("$ZodPromise", ($, X) => {
    (d.init($, X),
      ($._zod.parse = (J, W) => {
        return Promise.resolve(J.value).then((Q) =>
          X.innerType._zod.run({ value: Q, issues: [] }, W),
        );
      }));
  }),
  aQ = q("$ZodLazy", ($, X) => {
    (d.init($, X),
      G$($._zod, "innerType", () => X.getter()),
      G$($._zod, "pattern", () => $._zod.innerType._zod.pattern),
      G$($._zod, "propValues", () => $._zod.innerType._zod.propValues),
      G$($._zod, "optin", () => $._zod.innerType._zod.optin),
      G$($._zod, "optout", () => $._zod.innerType._zod.optout),
      ($._zod.parse = (J, W) => {
        return $._zod.innerType._zod.run(J, W);
      }));
  }),
  sQ = q("$ZodCustom", ($, X) => {
    (I$.init($, X),
      d.init($, X),
      ($._zod.parse = (J, W) => {
        return J;
      }),
      ($._zod.check = (J) => {
        let W = J.value,
          Q = X.fn(W);
        if (Q instanceof Promise) return Q.then((Y) => JD(Y, J, W, $));
        JD(Q, J, W, $);
        return;
      }));
  });
function JD($, X, J, W) {
  if (!$) {
    let Q = {
      code: "custom",
      input: J,
      inst: W,
      path: [...(W._zod.def.path ?? [])],
      continue: !W._zod.def.abort,
    };
    if (W._zod.def.params) Q.params = W._zod.def.params;
    X.issues.push(j3(Q));
  }
}
var r0 = {};
F1(r0, {
  zhTW: () => QH,
  zhCN: () => JH,
  vi: () => XH,
  ur: () => $H,
  ua: () => eG,
  tr: () => sG,
  th: () => aG,
  ta: () => tG,
  sv: () => oG,
  sl: () => rG,
  ru: () => nG,
  pt: () => iG,
  ps: () => pG,
  pl: () => dG,
  ota: () => cG,
  no: () => lG,
  nl: () => mG,
  ms: () => uG,
  mk: () => hG,
  ko: () => gG,
  kh: () => yG,
  ja: () => fG,
  it: () => TG,
  id: () => xG,
  hu: () => _G,
  he: () => kG,
  frCA: () => vG,
  fr: () => CG,
  fi: () => SG,
  fa: () => EG,
  es: () => PG,
  eo: () => RG,
  en: () => zX,
  de: () => bG,
  cs: () => ZG,
  ca: () => IG,
  be: () => AG,
  az: () => MG,
  ar: () => LG,
});
var Uv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `مدخلات غير مقبولة: يفترض إدخال ${C(Q.values[0])}`;
        return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return ` أكبر من اللازم: يفترض أن تكون ${Q.origin ?? "القيمة"} ${Y} ${Q.maximum.toString()} ${z.unit ?? "عنصر"}`;
        return `أكبر من اللازم: يفترض أن تكون ${Q.origin ?? "القيمة"} ${Y} ${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `أصغر من اللازم: يفترض لـ ${Q.origin} أن يكون ${Y} ${Q.minimum.toString()} ${z.unit}`;
        return `أصغر من اللازم: يفترض لـ ${Q.origin} أن يكون ${Y} ${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `نَص غير مقبول: يجب أن يبدأ بـ "${Q.prefix}"`;
        if (Y.format === "ends_with")
          return `نَص غير مقبول: يجب أن ينتهي بـ "${Y.suffix}"`;
        if (Y.format === "includes")
          return `نَص غير مقبول: يجب أن يتضمَّن "${Y.includes}"`;
        if (Y.format === "regex")
          return `نَص غير مقبول: يجب أن يطابق النمط ${Y.pattern}`;
        return `${W[Y.format] ?? Q.format} غير مقبول`;
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
function LG() {
  return { localeError: Uv() };
}
var Kv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Yanlış dəyər: gözlənilən ${C(Q.values[0])}`;
        return `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Çox böyük: gözlənilən ${Q.origin ?? "dəyər"} ${Y}${Q.maximum.toString()} ${z.unit ?? "element"}`;
        return `Çox böyük: gözlənilən ${Q.origin ?? "dəyər"} ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Çox kiçik: gözlənilən ${Q.origin} ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `Çox kiçik: gözlənilən ${Q.origin} ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Yanlış mətn: "${Y.prefix}" ilə başlamalıdır`;
        if (Y.format === "ends_with")
          return `Yanlış mətn: "${Y.suffix}" ilə bitməlidir`;
        if (Y.format === "includes")
          return `Yanlış mətn: "${Y.includes}" daxil olmalıdır`;
        if (Y.format === "regex")
          return `Yanlış mətn: ${Y.pattern} şablonuna uyğun olmalıdır`;
        return `Yanlış ${W[Y.format] ?? Q.format}`;
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
function MG() {
  return { localeError: Kv() };
}
function zD($, X, J, W) {
  let Q = Math.abs($),
    Y = Q % 10,
    z = Q % 100;
  if (z >= 11 && z <= 19) return W;
  if (Y === 1) return X;
  if (Y >= 2 && Y <= 4) return J;
  return W;
}
var Vv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "лік";
        case "object": {
          if (Array.isArray(Q)) return "масіў";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Няправільны ўвод: чакалася ${C(Q.values[0])}`;
        return `Няправільны варыянт: чакаўся адзін з ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z) {
          let G = Number(Q.maximum),
            H = zD(G, z.unit.one, z.unit.few, z.unit.many);
          return `Занадта вялікі: чакалася, што ${Q.origin ?? "значэнне"} павінна ${z.verb} ${Y}${Q.maximum.toString()} ${H}`;
        }
        return `Занадта вялікі: чакалася, што ${Q.origin ?? "значэнне"} павінна быць ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z) {
          let G = Number(Q.minimum),
            H = zD(G, z.unit.one, z.unit.few, z.unit.many);
          return `Занадта малы: чакалася, што ${Q.origin} павінна ${z.verb} ${Y}${Q.minimum.toString()} ${H}`;
        }
        return `Занадта малы: чакалася, што ${Q.origin} павінна быць ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Няправільны радок: павінен пачынацца з "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Няправільны радок: павінен заканчвацца на "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Няправільны радок: павінен змяшчаць "${Y.includes}"`;
        if (Y.format === "regex")
          return `Няправільны радок: павінен адпавядаць шаблону ${Y.pattern}`;
        return `Няправільны ${W[Y.format] ?? Q.format}`;
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
function AG() {
  return { localeError: Vv() };
}
var Nv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Valor invàlid: s'esperava ${C(Q.values[0])}`;
        return `Opció invàlida: s'esperava una de ${A(Q.values, " o ")}`;
      case "too_big": {
        let Y = Q.inclusive ? "com a màxim" : "menys de",
          z = X(Q.origin);
        if (z)
          return `Massa gran: s'esperava que ${Q.origin ?? "el valor"} contingués ${Y} ${Q.maximum.toString()} ${z.unit ?? "elements"}`;
        return `Massa gran: s'esperava que ${Q.origin ?? "el valor"} fos ${Y} ${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? "com a mínim" : "més de",
          z = X(Q.origin);
        if (z)
          return `Massa petit: s'esperava que ${Q.origin} contingués ${Y} ${Q.minimum.toString()} ${z.unit}`;
        return `Massa petit: s'esperava que ${Q.origin} fos ${Y} ${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Format invàlid: ha de començar amb "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Format invàlid: ha d'acabar amb "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Format invàlid: ha d'incloure "${Y.includes}"`;
        if (Y.format === "regex")
          return `Format invàlid: ha de coincidir amb el patró ${Y.pattern}`;
        return `Format invàlid per a ${W[Y.format] ?? Q.format}`;
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
function IG() {
  return { localeError: Nv() };
}
var Ov = () => {
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
      let Y = typeof Q;
      switch (Y) {
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
      return Y;
    },
    W = {
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
          return `Neplatný vstup: očekáváno ${C(Q.values[0])}`;
        return `Neplatná možnost: očekávána jedna z hodnot ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Hodnota je příliš velká: ${Q.origin ?? "hodnota"} musí mít ${Y}${Q.maximum.toString()} ${z.unit ?? "prvků"}`;
        return `Hodnota je příliš velká: ${Q.origin ?? "hodnota"} musí být ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Hodnota je příliš malá: ${Q.origin ?? "hodnota"} musí mít ${Y}${Q.minimum.toString()} ${z.unit ?? "prvků"}`;
        return `Hodnota je příliš malá: ${Q.origin ?? "hodnota"} musí být ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Neplatný řetězec: musí začínat na "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Neplatný řetězec: musí končit na "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Neplatný řetězec: musí obsahovat "${Y.includes}"`;
        if (Y.format === "regex")
          return `Neplatný řetězec: musí odpovídat vzoru ${Y.pattern}`;
        return `Neplatný formát ${W[Y.format] ?? Q.format}`;
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
function ZG() {
  return { localeError: Ov() };
}
var wv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "Zahl";
        case "object": {
          if (Array.isArray(Q)) return "Array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Ungültige Eingabe: erwartet ${C(Q.values[0])}`;
        return `Ungültige Option: erwartet eine von ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Zu groß: erwartet, dass ${Q.origin ?? "Wert"} ${Y}${Q.maximum.toString()} ${z.unit ?? "Elemente"} hat`;
        return `Zu groß: erwartet, dass ${Q.origin ?? "Wert"} ${Y}${Q.maximum.toString()} ist`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Zu klein: erwartet, dass ${Q.origin} ${Y}${Q.minimum.toString()} ${z.unit} hat`;
        return `Zu klein: erwartet, dass ${Q.origin} ${Y}${Q.minimum.toString()} ist`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Ungültiger String: muss mit "${Y.prefix}" beginnen`;
        if (Y.format === "ends_with")
          return `Ungültiger String: muss mit "${Y.suffix}" enden`;
        if (Y.format === "includes")
          return `Ungültiger String: muss "${Y.includes}" enthalten`;
        if (Y.format === "regex")
          return `Ungültiger String: muss dem Muster ${Y.pattern} entsprechen`;
        return `Ungültig: ${W[Y.format] ?? Q.format}`;
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
function bG() {
  return { localeError: wv() };
}
var Bv = ($) => {
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
  qv = () => {
    let $ = {
      string: { unit: "characters", verb: "to have" },
      file: { unit: "bytes", verb: "to have" },
      array: { unit: "items", verb: "to have" },
      set: { unit: "items", verb: "to have" },
    };
    function X(W) {
      return $[W] ?? null;
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
    return (W) => {
      switch (W.code) {
        case "invalid_type":
          return `Invalid input: expected ${W.expected}, received ${Bv(W.input)}`;
        case "invalid_value":
          if (W.values.length === 1)
            return `Invalid input: expected ${C(W.values[0])}`;
          return `Invalid option: expected one of ${A(W.values, "|")}`;
        case "too_big": {
          let Q = W.inclusive ? "<=" : "<",
            Y = X(W.origin);
          if (Y)
            return `Too big: expected ${W.origin ?? "value"} to have ${Q}${W.maximum.toString()} ${Y.unit ?? "elements"}`;
          return `Too big: expected ${W.origin ?? "value"} to be ${Q}${W.maximum.toString()}`;
        }
        case "too_small": {
          let Q = W.inclusive ? ">=" : ">",
            Y = X(W.origin);
          if (Y)
            return `Too small: expected ${W.origin} to have ${Q}${W.minimum.toString()} ${Y.unit}`;
          return `Too small: expected ${W.origin} to be ${Q}${W.minimum.toString()}`;
        }
        case "invalid_format": {
          let Q = W;
          if (Q.format === "starts_with")
            return `Invalid string: must start with "${Q.prefix}"`;
          if (Q.format === "ends_with")
            return `Invalid string: must end with "${Q.suffix}"`;
          if (Q.format === "includes")
            return `Invalid string: must include "${Q.includes}"`;
          if (Q.format === "regex")
            return `Invalid string: must match pattern ${Q.pattern}`;
          return `Invalid ${J[Q.format] ?? W.format}`;
        }
        case "not_multiple_of":
          return `Invalid number: must be a multiple of ${W.divisor}`;
        case "unrecognized_keys":
          return `Unrecognized key${W.keys.length > 1 ? "s" : ""}: ${A(W.keys, ", ")}`;
        case "invalid_key":
          return `Invalid key in ${W.origin}`;
        case "invalid_union":
          return "Invalid input";
        case "invalid_element":
          return `Invalid value in ${W.origin}`;
        default:
          return "Invalid input";
      }
    };
  };
function zX() {
  return { localeError: qv() };
}
var Dv = ($) => {
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
  Fv = () => {
    let $ = {
      string: { unit: "karaktrojn", verb: "havi" },
      file: { unit: "bajtojn", verb: "havi" },
      array: { unit: "elementojn", verb: "havi" },
      set: { unit: "elementojn", verb: "havi" },
    };
    function X(W) {
      return $[W] ?? null;
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
    return (W) => {
      switch (W.code) {
        case "invalid_type":
          return `Nevalida enigo: atendiĝis ${W.expected}, riceviĝis ${Dv(W.input)}`;
        case "invalid_value":
          if (W.values.length === 1)
            return `Nevalida enigo: atendiĝis ${C(W.values[0])}`;
          return `Nevalida opcio: atendiĝis unu el ${A(W.values, "|")}`;
        case "too_big": {
          let Q = W.inclusive ? "<=" : "<",
            Y = X(W.origin);
          if (Y)
            return `Tro granda: atendiĝis ke ${W.origin ?? "valoro"} havu ${Q}${W.maximum.toString()} ${Y.unit ?? "elementojn"}`;
          return `Tro granda: atendiĝis ke ${W.origin ?? "valoro"} havu ${Q}${W.maximum.toString()}`;
        }
        case "too_small": {
          let Q = W.inclusive ? ">=" : ">",
            Y = X(W.origin);
          if (Y)
            return `Tro malgranda: atendiĝis ke ${W.origin} havu ${Q}${W.minimum.toString()} ${Y.unit}`;
          return `Tro malgranda: atendiĝis ke ${W.origin} estu ${Q}${W.minimum.toString()}`;
        }
        case "invalid_format": {
          let Q = W;
          if (Q.format === "starts_with")
            return `Nevalida karaktraro: devas komenciĝi per "${Q.prefix}"`;
          if (Q.format === "ends_with")
            return `Nevalida karaktraro: devas finiĝi per "${Q.suffix}"`;
          if (Q.format === "includes")
            return `Nevalida karaktraro: devas inkluzivi "${Q.includes}"`;
          if (Q.format === "regex")
            return `Nevalida karaktraro: devas kongrui kun la modelo ${Q.pattern}`;
          return `Nevalida ${J[Q.format] ?? W.format}`;
        }
        case "not_multiple_of":
          return `Nevalida nombro: devas esti oblo de ${W.divisor}`;
        case "unrecognized_keys":
          return `Nekonata${W.keys.length > 1 ? "j" : ""} ŝlosilo${W.keys.length > 1 ? "j" : ""}: ${A(W.keys, ", ")}`;
        case "invalid_key":
          return `Nevalida ŝlosilo en ${W.origin}`;
        case "invalid_union":
          return "Nevalida enigo";
        case "invalid_element":
          return `Nevalida valoro en ${W.origin}`;
        default:
          return "Nevalida enigo";
      }
    };
  };
function RG() {
  return { localeError: Fv() };
}
var jv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "número";
        case "object": {
          if (Array.isArray(Q)) return "arreglo";
          if (Q === null) return "nulo";
          if (Object.getPrototypeOf(Q) !== Object.prototype)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Entrada inválida: se esperaba ${C(Q.values[0])}`;
        return `Opción inválida: se esperaba una de ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Demasiado grande: se esperaba que ${Q.origin ?? "valor"} tuviera ${Y}${Q.maximum.toString()} ${z.unit ?? "elementos"}`;
        return `Demasiado grande: se esperaba que ${Q.origin ?? "valor"} fuera ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Demasiado pequeño: se esperaba que ${Q.origin} tuviera ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `Demasiado pequeño: se esperaba que ${Q.origin} fuera ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Cadena inválida: debe comenzar con "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Cadena inválida: debe terminar en "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Cadena inválida: debe incluir "${Y.includes}"`;
        if (Y.format === "regex")
          return `Cadena inválida: debe coincidir con el patrón ${Y.pattern}`;
        return `Inválido ${W[Y.format] ?? Q.format}`;
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
function PG() {
  return { localeError: jv() };
}
var Lv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "عدد";
        case "object": {
          if (Array.isArray(Q)) return "آرایه";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `ورودی نامعتبر: می‌بایست ${C(Q.values[0])} می‌بود`;
        return `گزینه نامعتبر: می‌بایست یکی از ${A(Q.values, "|")} می‌بود`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `خیلی بزرگ: ${Q.origin ?? "مقدار"} باید ${Y}${Q.maximum.toString()} ${z.unit ?? "عنصر"} باشد`;
        return `خیلی بزرگ: ${Q.origin ?? "مقدار"} باید ${Y}${Q.maximum.toString()} باشد`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `خیلی کوچک: ${Q.origin} باید ${Y}${Q.minimum.toString()} ${z.unit} باشد`;
        return `خیلی کوچک: ${Q.origin} باید ${Y}${Q.minimum.toString()} باشد`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `رشته نامعتبر: باید با "${Y.prefix}" شروع شود`;
        if (Y.format === "ends_with")
          return `رشته نامعتبر: باید با "${Y.suffix}" تمام شود`;
        if (Y.format === "includes")
          return `رشته نامعتبر: باید شامل "${Y.includes}" باشد`;
        if (Y.format === "regex")
          return `رشته نامعتبر: باید با الگوی ${Y.pattern} مطابقت داشته باشد`;
        return `${W[Y.format] ?? Q.format} نامعتبر`;
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
function EG() {
  return { localeError: Lv() };
}
var Mv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Virheellinen syöte: täytyy olla ${C(Q.values[0])}`;
        return `Virheellinen valinta: täytyy olla yksi seuraavista: ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Liian suuri: ${z.subject} täytyy olla ${Y}${Q.maximum.toString()} ${z.unit}`.trim();
        return `Liian suuri: arvon täytyy olla ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Liian pieni: ${z.subject} täytyy olla ${Y}${Q.minimum.toString()} ${z.unit}`.trim();
        return `Liian pieni: arvon täytyy olla ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Virheellinen syöte: täytyy alkaa "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Virheellinen syöte: täytyy loppua "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Virheellinen syöte: täytyy sisältää "${Y.includes}"`;
        if (Y.format === "regex")
          return `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${Y.pattern}`;
        return `Virheellinen ${W[Y.format] ?? Q.format}`;
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
function SG() {
  return { localeError: Mv() };
}
var Av = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "nombre";
        case "object": {
          if (Array.isArray(Q)) return "tableau";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Entrée invalide : ${C(Q.values[0])} attendu`;
        return `Option invalide : une valeur parmi ${A(Q.values, "|")} attendue`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Trop grand : ${Q.origin ?? "valeur"} doit ${z.verb} ${Y}${Q.maximum.toString()} ${z.unit ?? "élément(s)"}`;
        return `Trop grand : ${Q.origin ?? "valeur"} doit être ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Trop petit : ${Q.origin} doit ${z.verb} ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `Trop petit : ${Q.origin} doit être ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Chaîne invalide : doit commencer par "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Chaîne invalide : doit se terminer par "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Chaîne invalide : doit inclure "${Y.includes}"`;
        if (Y.format === "regex")
          return `Chaîne invalide : doit correspondre au modèle ${Y.pattern}`;
        return `${W[Y.format] ?? Q.format} invalide`;
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
function CG() {
  return { localeError: Av() };
}
var Iv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Entrée invalide : attendu ${C(Q.values[0])}`;
        return `Option invalide : attendu l'une des valeurs suivantes ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "≤" : "<",
          z = X(Q.origin);
        if (z)
          return `Trop grand : attendu que ${Q.origin ?? "la valeur"} ait ${Y}${Q.maximum.toString()} ${z.unit}`;
        return `Trop grand : attendu que ${Q.origin ?? "la valeur"} soit ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? "≥" : ">",
          z = X(Q.origin);
        if (z)
          return `Trop petit : attendu que ${Q.origin} ait ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `Trop petit : attendu que ${Q.origin} soit ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Chaîne invalide : doit commencer par "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Chaîne invalide : doit se terminer par "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Chaîne invalide : doit inclure "${Y.includes}"`;
        if (Y.format === "regex")
          return `Chaîne invalide : doit correspondre au motif ${Y.pattern}`;
        return `${W[Y.format] ?? Q.format} invalide`;
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
function vG() {
  return { localeError: Iv() };
}
var Zv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
        if (Q.values.length === 1) return `קלט לא תקין: צריך ${C(Q.values[0])}`;
        return `קלט לא תקין: צריך אחת מהאפשרויות  ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `גדול מדי: ${Q.origin ?? "value"} צריך להיות ${Y}${Q.maximum.toString()} ${z.unit ?? "elements"}`;
        return `גדול מדי: ${Q.origin ?? "value"} צריך להיות ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `קטן מדי: ${Q.origin} צריך להיות ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `קטן מדי: ${Q.origin} צריך להיות ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `מחרוזת לא תקינה: חייבת להתחיל ב"${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `מחרוזת לא תקינה: חייבת להסתיים ב "${Y.suffix}"`;
        if (Y.format === "includes")
          return `מחרוזת לא תקינה: חייבת לכלול "${Y.includes}"`;
        if (Y.format === "regex")
          return `מחרוזת לא תקינה: חייבת להתאים לתבנית ${Y.pattern}`;
        return `${W[Y.format] ?? Q.format} לא תקין`;
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
function kG() {
  return { localeError: Zv() };
}
var bv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "szám";
        case "object": {
          if (Array.isArray(Q)) return "tömb";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Érvénytelen bemenet: a várt érték ${C(Q.values[0])}`;
        return `Érvénytelen opció: valamelyik érték várt ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Túl nagy: ${Q.origin ?? "érték"} mérete túl nagy ${Y}${Q.maximum.toString()} ${z.unit ?? "elem"}`;
        return `Túl nagy: a bemeneti érték ${Q.origin ?? "érték"} túl nagy: ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Túl kicsi: a bemeneti érték ${Q.origin} mérete túl kicsi ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `Túl kicsi: a bemeneti érték ${Q.origin} túl kicsi ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Érvénytelen string: "${Y.prefix}" értékkel kell kezdődnie`;
        if (Y.format === "ends_with")
          return `Érvénytelen string: "${Y.suffix}" értékkel kell végződnie`;
        if (Y.format === "includes")
          return `Érvénytelen string: "${Y.includes}" értéket kell tartalmaznia`;
        if (Y.format === "regex")
          return `Érvénytelen string: ${Y.pattern} mintának kell megfelelnie`;
        return `Érvénytelen ${W[Y.format] ?? Q.format}`;
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
function _G() {
  return { localeError: bv() };
}
var Rv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Input tidak valid: diharapkan ${C(Q.values[0])}`;
        return `Pilihan tidak valid: diharapkan salah satu dari ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Terlalu besar: diharapkan ${Q.origin ?? "value"} memiliki ${Y}${Q.maximum.toString()} ${z.unit ?? "elemen"}`;
        return `Terlalu besar: diharapkan ${Q.origin ?? "value"} menjadi ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Terlalu kecil: diharapkan ${Q.origin} memiliki ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `Terlalu kecil: diharapkan ${Q.origin} menjadi ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `String tidak valid: harus dimulai dengan "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `String tidak valid: harus berakhir dengan "${Y.suffix}"`;
        if (Y.format === "includes")
          return `String tidak valid: harus menyertakan "${Y.includes}"`;
        if (Y.format === "regex")
          return `String tidak valid: harus sesuai pola ${Y.pattern}`;
        return `${W[Y.format] ?? Q.format} tidak valid`;
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
function xG() {
  return { localeError: Rv() };
}
var Pv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "numero";
        case "object": {
          if (Array.isArray(Q)) return "vettore";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Input non valido: atteso ${C(Q.values[0])}`;
        return `Opzione non valida: atteso uno tra ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Troppo grande: ${Q.origin ?? "valore"} deve avere ${Y}${Q.maximum.toString()} ${z.unit ?? "elementi"}`;
        return `Troppo grande: ${Q.origin ?? "valore"} deve essere ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Troppo piccolo: ${Q.origin} deve avere ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `Troppo piccolo: ${Q.origin} deve essere ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Stringa non valida: deve iniziare con "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Stringa non valida: deve terminare con "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Stringa non valida: deve includere "${Y.includes}"`;
        if (Y.format === "regex")
          return `Stringa non valida: deve corrispondere al pattern ${Y.pattern}`;
        return `Invalid ${W[Y.format] ?? Q.format}`;
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
function TG() {
  return { localeError: Pv() };
}
var Ev = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "数値";
        case "object": {
          if (Array.isArray(Q)) return "配列";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `無効な入力: ${C(Q.values[0])}が期待されました`;
        return `無効な選択: ${A(Q.values, "、")}のいずれかである必要があります`;
      case "too_big": {
        let Y = Q.inclusive ? "以下である" : "より小さい",
          z = X(Q.origin);
        if (z)
          return `大きすぎる値: ${Q.origin ?? "値"}は${Q.maximum.toString()}${z.unit ?? "要素"}${Y}必要があります`;
        return `大きすぎる値: ${Q.origin ?? "値"}は${Q.maximum.toString()}${Y}必要があります`;
      }
      case "too_small": {
        let Y = Q.inclusive ? "以上である" : "より大きい",
          z = X(Q.origin);
        if (z)
          return `小さすぎる値: ${Q.origin}は${Q.minimum.toString()}${z.unit}${Y}必要があります`;
        return `小さすぎる値: ${Q.origin}は${Q.minimum.toString()}${Y}必要があります`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `無効な文字列: "${Y.prefix}"で始まる必要があります`;
        if (Y.format === "ends_with")
          return `無効な文字列: "${Y.suffix}"で終わる必要があります`;
        if (Y.format === "includes")
          return `無効な文字列: "${Y.includes}"を含む必要があります`;
        if (Y.format === "regex")
          return `無効な文字列: パターン${Y.pattern}に一致する必要があります`;
        return `無効な${W[Y.format] ?? Q.format}`;
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
function fG() {
  return { localeError: Ev() };
}
var Sv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "មិនមែនជាលេខ (NaN)" : "លេខ";
        case "object": {
          if (Array.isArray(Q)) return "អារេ (Array)";
          if (Q === null) return "គ្មានតម្លៃ (null)";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${C(Q.values[0])}`;
        return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `ធំពេក៖ ត្រូវការ ${Q.origin ?? "តម្លៃ"} ${Y} ${Q.maximum.toString()} ${z.unit ?? "ធាតុ"}`;
        return `ធំពេក៖ ត្រូវការ ${Q.origin ?? "តម្លៃ"} ${Y} ${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `តូចពេក៖ ត្រូវការ ${Q.origin} ${Y} ${Q.minimum.toString()} ${z.unit}`;
        return `តូចពេក៖ ត្រូវការ ${Q.origin} ${Y} ${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${Y.suffix}"`;
        if (Y.format === "includes")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${Y.includes}"`;
        if (Y.format === "regex")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${Y.pattern}`;
        return `មិនត្រឹមត្រូវ៖ ${W[Y.format] ?? Q.format}`;
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
function yG() {
  return { localeError: Sv() };
}
var Cv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `잘못된 입력: 값은 ${C(Q.values[0])} 이어야 합니다`;
        return `잘못된 옵션: ${A(Q.values, "또는 ")} 중 하나여야 합니다`;
      case "too_big": {
        let Y = Q.inclusive ? "이하" : "미만",
          z = Y === "미만" ? "이어야 합니다" : "여야 합니다",
          G = X(Q.origin),
          H = G?.unit ?? "요소";
        if (G)
          return `${Q.origin ?? "값"}이 너무 큽니다: ${Q.maximum.toString()}${H} ${Y}${z}`;
        return `${Q.origin ?? "값"}이 너무 큽니다: ${Q.maximum.toString()} ${Y}${z}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? "이상" : "초과",
          z = Y === "이상" ? "이어야 합니다" : "여야 합니다",
          G = X(Q.origin),
          H = G?.unit ?? "요소";
        if (G)
          return `${Q.origin ?? "값"}이 너무 작습니다: ${Q.minimum.toString()}${H} ${Y}${z}`;
        return `${Q.origin ?? "값"}이 너무 작습니다: ${Q.minimum.toString()} ${Y}${z}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `잘못된 문자열: "${Y.prefix}"(으)로 시작해야 합니다`;
        if (Y.format === "ends_with")
          return `잘못된 문자열: "${Y.suffix}"(으)로 끝나야 합니다`;
        if (Y.format === "includes")
          return `잘못된 문자열: "${Y.includes}"을(를) 포함해야 합니다`;
        if (Y.format === "regex")
          return `잘못된 문자열: 정규식 ${Y.pattern} 패턴과 일치해야 합니다`;
        return `잘못된 ${W[Y.format] ?? Q.format}`;
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
function gG() {
  return { localeError: Cv() };
}
var vv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "број";
        case "object": {
          if (Array.isArray(Q)) return "низа";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Invalid input: expected ${C(Q.values[0])}`;
        return `Грешана опција: се очекува една ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Премногу голем: се очекува ${Q.origin ?? "вредноста"} да има ${Y}${Q.maximum.toString()} ${z.unit ?? "елементи"}`;
        return `Премногу голем: се очекува ${Q.origin ?? "вредноста"} да биде ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Премногу мал: се очекува ${Q.origin} да има ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `Премногу мал: се очекува ${Q.origin} да биде ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Неважечка низа: мора да започнува со "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Неважечка низа: мора да завршува со "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Неважечка низа: мора да вклучува "${Y.includes}"`;
        if (Y.format === "regex")
          return `Неважечка низа: мора да одгоара на патернот ${Y.pattern}`;
        return `Invalid ${W[Y.format] ?? Q.format}`;
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
function hG() {
  return { localeError: vv() };
}
var kv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "nombor";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Input tidak sah: dijangka ${C(Q.values[0])}`;
        return `Pilihan tidak sah: dijangka salah satu daripada ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Terlalu besar: dijangka ${Q.origin ?? "nilai"} ${z.verb} ${Y}${Q.maximum.toString()} ${z.unit ?? "elemen"}`;
        return `Terlalu besar: dijangka ${Q.origin ?? "nilai"} adalah ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Terlalu kecil: dijangka ${Q.origin} ${z.verb} ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `Terlalu kecil: dijangka ${Q.origin} adalah ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `String tidak sah: mesti bermula dengan "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `String tidak sah: mesti berakhir dengan "${Y.suffix}"`;
        if (Y.format === "includes")
          return `String tidak sah: mesti mengandungi "${Y.includes}"`;
        if (Y.format === "regex")
          return `String tidak sah: mesti sepadan dengan corak ${Y.pattern}`;
        return `${W[Y.format] ?? Q.format} tidak sah`;
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
function uG() {
  return { localeError: kv() };
}
var _v = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "getal";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Ongeldige invoer: verwacht ${C(Q.values[0])}`;
        return `Ongeldige optie: verwacht één van ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Te lang: verwacht dat ${Q.origin ?? "waarde"} ${Y}${Q.maximum.toString()} ${z.unit ?? "elementen"} bevat`;
        return `Te lang: verwacht dat ${Q.origin ?? "waarde"} ${Y}${Q.maximum.toString()} is`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Te kort: verwacht dat ${Q.origin} ${Y}${Q.minimum.toString()} ${z.unit} bevat`;
        return `Te kort: verwacht dat ${Q.origin} ${Y}${Q.minimum.toString()} is`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Ongeldige tekst: moet met "${Y.prefix}" beginnen`;
        if (Y.format === "ends_with")
          return `Ongeldige tekst: moet op "${Y.suffix}" eindigen`;
        if (Y.format === "includes")
          return `Ongeldige tekst: moet "${Y.includes}" bevatten`;
        if (Y.format === "regex")
          return `Ongeldige tekst: moet overeenkomen met patroon ${Y.pattern}`;
        return `Ongeldig: ${W[Y.format] ?? Q.format}`;
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
function mG() {
  return { localeError: _v() };
}
var xv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "tall";
        case "object": {
          if (Array.isArray(Q)) return "liste";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Ugyldig verdi: forventet ${C(Q.values[0])}`;
        return `Ugyldig valg: forventet en av ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `For stor(t): forventet ${Q.origin ?? "value"} til å ha ${Y}${Q.maximum.toString()} ${z.unit ?? "elementer"}`;
        return `For stor(t): forventet ${Q.origin ?? "value"} til å ha ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `For lite(n): forventet ${Q.origin} til å ha ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `For lite(n): forventet ${Q.origin} til å ha ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Ugyldig streng: må starte med "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Ugyldig streng: må ende med "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Ugyldig streng: må inneholde "${Y.includes}"`;
        if (Y.format === "regex")
          return `Ugyldig streng: må matche mønsteret ${Y.pattern}`;
        return `Ugyldig ${W[Y.format] ?? Q.format}`;
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
function lG() {
  return { localeError: xv() };
}
var Tv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "numara";
        case "object": {
          if (Array.isArray(Q)) return "saf";
          if (Q === null) return "gayb";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Fâsit giren: umulan ${C(Q.values[0])}`;
        return `Fâsit tercih: mûteberler ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Fazla büyük: ${Q.origin ?? "value"}, ${Y}${Q.maximum.toString()} ${z.unit ?? "elements"} sahip olmalıydı.`;
        return `Fazla büyük: ${Q.origin ?? "value"}, ${Y}${Q.maximum.toString()} olmalıydı.`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Fazla küçük: ${Q.origin}, ${Y}${Q.minimum.toString()} ${z.unit} sahip olmalıydı.`;
        return `Fazla küçük: ${Q.origin}, ${Y}${Q.minimum.toString()} olmalıydı.`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Fâsit metin: "${Y.prefix}" ile başlamalı.`;
        if (Y.format === "ends_with")
          return `Fâsit metin: "${Y.suffix}" ile bitmeli.`;
        if (Y.format === "includes")
          return `Fâsit metin: "${Y.includes}" ihtivâ etmeli.`;
        if (Y.format === "regex")
          return `Fâsit metin: ${Y.pattern} nakşına uymalı.`;
        return `Fâsit ${W[Y.format] ?? Q.format}`;
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
function cG() {
  return { localeError: Tv() };
}
var fv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "عدد";
        case "object": {
          if (Array.isArray(Q)) return "ارې";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `ناسم ورودي: باید ${C(Q.values[0])} وای`;
        return `ناسم انتخاب: باید یو له ${A(Q.values, "|")} څخه وای`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `ډیر لوی: ${Q.origin ?? "ارزښت"} باید ${Y}${Q.maximum.toString()} ${z.unit ?? "عنصرونه"} ولري`;
        return `ډیر لوی: ${Q.origin ?? "ارزښت"} باید ${Y}${Q.maximum.toString()} وي`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `ډیر کوچنی: ${Q.origin} باید ${Y}${Q.minimum.toString()} ${z.unit} ولري`;
        return `ډیر کوچنی: ${Q.origin} باید ${Y}${Q.minimum.toString()} وي`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `ناسم متن: باید د "${Y.prefix}" سره پیل شي`;
        if (Y.format === "ends_with")
          return `ناسم متن: باید د "${Y.suffix}" سره پای ته ورسيږي`;
        if (Y.format === "includes")
          return `ناسم متن: باید "${Y.includes}" ولري`;
        if (Y.format === "regex")
          return `ناسم متن: باید د ${Y.pattern} سره مطابقت ولري`;
        return `${W[Y.format] ?? Q.format} ناسم دی`;
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
function pG() {
  return { localeError: fv() };
}
var yv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "liczba";
        case "object": {
          if (Array.isArray(Q)) return "tablica";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Nieprawidłowe dane wejściowe: oczekiwano ${C(Q.values[0])}`;
        return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Za duża wartość: oczekiwano, że ${Q.origin ?? "wartość"} będzie mieć ${Y}${Q.maximum.toString()} ${z.unit ?? "elementów"}`;
        return `Zbyt duż(y/a/e): oczekiwano, że ${Q.origin ?? "wartość"} będzie wynosić ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Za mała wartość: oczekiwano, że ${Q.origin ?? "wartość"} będzie mieć ${Y}${Q.minimum.toString()} ${z.unit ?? "elementów"}`;
        return `Zbyt mał(y/a/e): oczekiwano, że ${Q.origin ?? "wartość"} będzie wynosić ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Nieprawidłowy ciąg znaków: musi zaczynać się od "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Nieprawidłowy ciąg znaków: musi kończyć się na "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Nieprawidłowy ciąg znaków: musi zawierać "${Y.includes}"`;
        if (Y.format === "regex")
          return `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${Y.pattern}`;
        return `Nieprawidłow(y/a/e) ${W[Y.format] ?? Q.format}`;
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
function dG() {
  return { localeError: yv() };
}
var gv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "número";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "nulo";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Entrada inválida: esperado ${C(Q.values[0])}`;
        return `Opção inválida: esperada uma das ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Muito grande: esperado que ${Q.origin ?? "valor"} tivesse ${Y}${Q.maximum.toString()} ${z.unit ?? "elementos"}`;
        return `Muito grande: esperado que ${Q.origin ?? "valor"} fosse ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Muito pequeno: esperado que ${Q.origin} tivesse ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `Muito pequeno: esperado que ${Q.origin} fosse ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Texto inválido: deve começar com "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Texto inválido: deve terminar com "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Texto inválido: deve incluir "${Y.includes}"`;
        if (Y.format === "regex")
          return `Texto inválido: deve corresponder ao padrão ${Y.pattern}`;
        return `${W[Y.format] ?? Q.format} inválido`;
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
function iG() {
  return { localeError: gv() };
}
function GD($, X, J, W) {
  let Q = Math.abs($),
    Y = Q % 10,
    z = Q % 100;
  if (z >= 11 && z <= 19) return W;
  if (Y === 1) return X;
  if (Y >= 2 && Y <= 4) return J;
  return W;
}
var hv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "число";
        case "object": {
          if (Array.isArray(Q)) return "массив";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Неверный ввод: ожидалось ${C(Q.values[0])}`;
        return `Неверный вариант: ожидалось одно из ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z) {
          let G = Number(Q.maximum),
            H = GD(G, z.unit.one, z.unit.few, z.unit.many);
          return `Слишком большое значение: ожидалось, что ${Q.origin ?? "значение"} будет иметь ${Y}${Q.maximum.toString()} ${H}`;
        }
        return `Слишком большое значение: ожидалось, что ${Q.origin ?? "значение"} будет ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z) {
          let G = Number(Q.minimum),
            H = GD(G, z.unit.one, z.unit.few, z.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${Q.origin} будет иметь ${Y}${Q.minimum.toString()} ${H}`;
        }
        return `Слишком маленькое значение: ожидалось, что ${Q.origin} будет ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Неверная строка: должна начинаться с "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Неверная строка: должна заканчиваться на "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Неверная строка: должна содержать "${Y.includes}"`;
        if (Y.format === "regex")
          return `Неверная строка: должна соответствовать шаблону ${Y.pattern}`;
        return `Неверный ${W[Y.format] ?? Q.format}`;
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
function nG() {
  return { localeError: hv() };
}
var uv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "število";
        case "object": {
          if (Array.isArray(Q)) return "tabela";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Neveljaven vnos: pričakovano ${C(Q.values[0])}`;
        return `Neveljavna možnost: pričakovano eno izmed ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Preveliko: pričakovano, da bo ${Q.origin ?? "vrednost"} imelo ${Y}${Q.maximum.toString()} ${z.unit ?? "elementov"}`;
        return `Preveliko: pričakovano, da bo ${Q.origin ?? "vrednost"} ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Premajhno: pričakovano, da bo ${Q.origin} imelo ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `Premajhno: pričakovano, da bo ${Q.origin} ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Neveljaven niz: mora se začeti z "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Neveljaven niz: mora se končati z "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Neveljaven niz: mora vsebovati "${Y.includes}"`;
        if (Y.format === "regex")
          return `Neveljaven niz: mora ustrezati vzorcu ${Y.pattern}`;
        return `Neveljaven ${W[Y.format] ?? Q.format}`;
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
function rG() {
  return { localeError: uv() };
}
var mv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "antal";
        case "object": {
          if (Array.isArray(Q)) return "lista";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Ogiltig inmatning: förväntat ${C(Q.values[0])}`;
        return `Ogiltigt val: förväntade en av ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `För stor(t): förväntade ${Q.origin ?? "värdet"} att ha ${Y}${Q.maximum.toString()} ${z.unit ?? "element"}`;
        return `För stor(t): förväntat ${Q.origin ?? "värdet"} att ha ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `För lite(t): förväntade ${Q.origin ?? "värdet"} att ha ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `För lite(t): förväntade ${Q.origin ?? "värdet"} att ha ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Ogiltig sträng: måste börja med "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Ogiltig sträng: måste sluta med "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Ogiltig sträng: måste innehålla "${Y.includes}"`;
        if (Y.format === "regex")
          return `Ogiltig sträng: måste matcha mönstret "${Y.pattern}"`;
        return `Ogiltig(t) ${W[Y.format] ?? Q.format}`;
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
function oG() {
  return { localeError: mv() };
}
var lv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "எண் அல்லாதது" : "எண்";
        case "object": {
          if (Array.isArray(Q)) return "அணி";
          if (Q === null) return "வெறுமை";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${C(Q.values[0])}`;
        return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${A(Q.values, "|")} இல் ஒன்று`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${Q.origin ?? "மதிப்பு"} ${Y}${Q.maximum.toString()} ${z.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`;
        return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${Q.origin ?? "மதிப்பு"} ${Y}${Q.maximum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${Q.origin} ${Y}${Q.minimum.toString()} ${z.unit} ஆக இருக்க வேண்டும்`;
        return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${Q.origin} ${Y}${Q.minimum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `தவறான சரம்: "${Y.prefix}" இல் தொடங்க வேண்டும்`;
        if (Y.format === "ends_with")
          return `தவறான சரம்: "${Y.suffix}" இல் முடிவடைய வேண்டும்`;
        if (Y.format === "includes")
          return `தவறான சரம்: "${Y.includes}" ஐ உள்ளடக்க வேண்டும்`;
        if (Y.format === "regex")
          return `தவறான சரம்: ${Y.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
        return `தவறான ${W[Y.format] ?? Q.format}`;
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
function tG() {
  return { localeError: lv() };
}
var cv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "ไม่ใช่ตัวเลข (NaN)" : "ตัวเลข";
        case "object": {
          if (Array.isArray(Q)) return "อาร์เรย์ (Array)";
          if (Q === null) return "ไม่มีค่า (null)";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `ค่าไม่ถูกต้อง: ควรเป็น ${C(Q.values[0])}`;
        return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "ไม่เกิน" : "น้อยกว่า",
          z = X(Q.origin);
        if (z)
          return `เกินกำหนด: ${Q.origin ?? "ค่า"} ควรมี${Y} ${Q.maximum.toString()} ${z.unit ?? "รายการ"}`;
        return `เกินกำหนด: ${Q.origin ?? "ค่า"} ควรมี${Y} ${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? "อย่างน้อย" : "มากกว่า",
          z = X(Q.origin);
        if (z)
          return `น้อยกว่ากำหนด: ${Q.origin} ควรมี${Y} ${Q.minimum.toString()} ${z.unit}`;
        return `น้อยกว่ากำหนด: ${Q.origin} ควรมี${Y} ${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${Y.suffix}"`;
        if (Y.format === "includes")
          return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${Y.includes}" อยู่ในข้อความ`;
        if (Y.format === "regex")
          return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${Y.pattern}`;
        return `รูปแบบไม่ถูกต้อง: ${W[Y.format] ?? Q.format}`;
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
function aG() {
  return { localeError: cv() };
}
var pv = ($) => {
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
  dv = () => {
    let $ = {
      string: { unit: "karakter", verb: "olmalı" },
      file: { unit: "bayt", verb: "olmalı" },
      array: { unit: "öğe", verb: "olmalı" },
      set: { unit: "öğe", verb: "olmalı" },
    };
    function X(W) {
      return $[W] ?? null;
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
    return (W) => {
      switch (W.code) {
        case "invalid_type":
          return `Geçersiz değer: beklenen ${W.expected}, alınan ${pv(W.input)}`;
        case "invalid_value":
          if (W.values.length === 1)
            return `Geçersiz değer: beklenen ${C(W.values[0])}`;
          return `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${A(W.values, "|")}`;
        case "too_big": {
          let Q = W.inclusive ? "<=" : "<",
            Y = X(W.origin);
          if (Y)
            return `Çok büyük: beklenen ${W.origin ?? "değer"} ${Q}${W.maximum.toString()} ${Y.unit ?? "öğe"}`;
          return `Çok büyük: beklenen ${W.origin ?? "değer"} ${Q}${W.maximum.toString()}`;
        }
        case "too_small": {
          let Q = W.inclusive ? ">=" : ">",
            Y = X(W.origin);
          if (Y)
            return `Çok küçük: beklenen ${W.origin} ${Q}${W.minimum.toString()} ${Y.unit}`;
          return `Çok küçük: beklenen ${W.origin} ${Q}${W.minimum.toString()}`;
        }
        case "invalid_format": {
          let Q = W;
          if (Q.format === "starts_with")
            return `Geçersiz metin: "${Q.prefix}" ile başlamalı`;
          if (Q.format === "ends_with")
            return `Geçersiz metin: "${Q.suffix}" ile bitmeli`;
          if (Q.format === "includes")
            return `Geçersiz metin: "${Q.includes}" içermeli`;
          if (Q.format === "regex")
            return `Geçersiz metin: ${Q.pattern} desenine uymalı`;
          return `Geçersiz ${J[Q.format] ?? W.format}`;
        }
        case "not_multiple_of":
          return `Geçersiz sayı: ${W.divisor} ile tam bölünebilmeli`;
        case "unrecognized_keys":
          return `Tanınmayan anahtar${W.keys.length > 1 ? "lar" : ""}: ${A(W.keys, ", ")}`;
        case "invalid_key":
          return `${W.origin} içinde geçersiz anahtar`;
        case "invalid_union":
          return "Geçersiz değer";
        case "invalid_element":
          return `${W.origin} içinde geçersiz değer`;
        default:
          return "Geçersiz değer";
      }
    };
  };
function sG() {
  return { localeError: dv() };
}
var iv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "число";
        case "object": {
          if (Array.isArray(Q)) return "масив";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Неправильні вхідні дані: очікується ${C(Q.values[0])}`;
        return `Неправильна опція: очікується одне з ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Занадто велике: очікується, що ${Q.origin ?? "значення"} ${z.verb} ${Y}${Q.maximum.toString()} ${z.unit ?? "елементів"}`;
        return `Занадто велике: очікується, що ${Q.origin ?? "значення"} буде ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Занадто мале: очікується, що ${Q.origin} ${z.verb} ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `Занадто мале: очікується, що ${Q.origin} буде ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Неправильний рядок: повинен починатися з "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Неправильний рядок: повинен закінчуватися на "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Неправильний рядок: повинен містити "${Y.includes}"`;
        if (Y.format === "regex")
          return `Неправильний рядок: повинен відповідати шаблону ${Y.pattern}`;
        return `Неправильний ${W[Y.format] ?? Q.format}`;
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
function eG() {
  return { localeError: iv() };
}
var nv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "نمبر";
        case "object": {
          if (Array.isArray(Q)) return "آرے";
          if (Q === null) return "نل";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `غلط ان پٹ: ${C(Q.values[0])} متوقع تھا`;
        return `غلط آپشن: ${A(Q.values, "|")} میں سے ایک متوقع تھا`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `بہت بڑا: ${Q.origin ?? "ویلیو"} کے ${Y}${Q.maximum.toString()} ${z.unit ?? "عناصر"} ہونے متوقع تھے`;
        return `بہت بڑا: ${Q.origin ?? "ویلیو"} کا ${Y}${Q.maximum.toString()} ہونا متوقع تھا`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `بہت چھوٹا: ${Q.origin} کے ${Y}${Q.minimum.toString()} ${z.unit} ہونے متوقع تھے`;
        return `بہت چھوٹا: ${Q.origin} کا ${Y}${Q.minimum.toString()} ہونا متوقع تھا`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `غلط سٹرنگ: "${Y.prefix}" سے شروع ہونا چاہیے`;
        if (Y.format === "ends_with")
          return `غلط سٹرنگ: "${Y.suffix}" پر ختم ہونا چاہیے`;
        if (Y.format === "includes")
          return `غلط سٹرنگ: "${Y.includes}" شامل ہونا چاہیے`;
        if (Y.format === "regex")
          return `غلط سٹرنگ: پیٹرن ${Y.pattern} سے میچ ہونا چاہیے`;
        return `غلط ${W[Y.format] ?? Q.format}`;
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
function $H() {
  return { localeError: nv() };
}
var rv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "số";
        case "object": {
          if (Array.isArray(Q)) return "mảng";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `Đầu vào không hợp lệ: mong đợi ${C(Q.values[0])}`;
        return `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `Quá lớn: mong đợi ${Q.origin ?? "giá trị"} ${z.verb} ${Y}${Q.maximum.toString()} ${z.unit ?? "phần tử"}`;
        return `Quá lớn: mong đợi ${Q.origin ?? "giá trị"} ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `Quá nhỏ: mong đợi ${Q.origin} ${z.verb} ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `Quá nhỏ: mong đợi ${Q.origin} ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `Chuỗi không hợp lệ: phải bắt đầu bằng "${Y.prefix}"`;
        if (Y.format === "ends_with")
          return `Chuỗi không hợp lệ: phải kết thúc bằng "${Y.suffix}"`;
        if (Y.format === "includes")
          return `Chuỗi không hợp lệ: phải bao gồm "${Y.includes}"`;
        if (Y.format === "regex")
          return `Chuỗi không hợp lệ: phải khớp với mẫu ${Y.pattern}`;
        return `${W[Y.format] ?? Q.format} không hợp lệ`;
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
function XH() {
  return { localeError: rv() };
}
var ov = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "非数字(NaN)" : "数字";
        case "object": {
          if (Array.isArray(Q)) return "数组";
          if (Q === null) return "空值(null)";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
        if (Q.values.length === 1) return `无效输入：期望 ${C(Q.values[0])}`;
        return `无效选项：期望以下之一 ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `数值过大：期望 ${Q.origin ?? "值"} ${Y}${Q.maximum.toString()} ${z.unit ?? "个元素"}`;
        return `数值过大：期望 ${Q.origin ?? "值"} ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `数值过小：期望 ${Q.origin} ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `数值过小：期望 ${Q.origin} ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `无效字符串：必须以 "${Y.prefix}" 开头`;
        if (Y.format === "ends_with")
          return `无效字符串：必须以 "${Y.suffix}" 结尾`;
        if (Y.format === "includes")
          return `无效字符串：必须包含 "${Y.includes}"`;
        if (Y.format === "regex")
          return `无效字符串：必须满足正则表达式 ${Y.pattern}`;
        return `无效${W[Y.format] ?? Q.format}`;
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
function JH() {
  return { localeError: ov() };
}
var tv = () => {
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
      let Y = typeof Q;
      switch (Y) {
        case "number":
          return Number.isNaN(Q) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(Q)) return "array";
          if (Q === null) return "null";
          if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor)
            return Q.constructor.name;
        }
      }
      return Y;
    },
    W = {
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
          return `無效的輸入值：預期為 ${C(Q.values[0])}`;
        return `無效的選項：預期為以下其中之一 ${A(Q.values, "|")}`;
      case "too_big": {
        let Y = Q.inclusive ? "<=" : "<",
          z = X(Q.origin);
        if (z)
          return `數值過大：預期 ${Q.origin ?? "值"} 應為 ${Y}${Q.maximum.toString()} ${z.unit ?? "個元素"}`;
        return `數值過大：預期 ${Q.origin ?? "值"} 應為 ${Y}${Q.maximum.toString()}`;
      }
      case "too_small": {
        let Y = Q.inclusive ? ">=" : ">",
          z = X(Q.origin);
        if (z)
          return `數值過小：預期 ${Q.origin} 應為 ${Y}${Q.minimum.toString()} ${z.unit}`;
        return `數值過小：預期 ${Q.origin} 應為 ${Y}${Q.minimum.toString()}`;
      }
      case "invalid_format": {
        let Y = Q;
        if (Y.format === "starts_with")
          return `無效的字串：必須以 "${Y.prefix}" 開頭`;
        if (Y.format === "ends_with")
          return `無效的字串：必須以 "${Y.suffix}" 結尾`;
        if (Y.format === "includes")
          return `無效的字串：必須包含 "${Y.includes}"`;
        if (Y.format === "regex")
          return `無效的字串：必須符合格式 ${Y.pattern}`;
        return `無效的 ${W[Y.format] ?? Q.format}`;
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
function QH() {
  return { localeError: tv() };
}
var eQ = Symbol("ZodOutput"),
  $5 = Symbol("ZodInput");
class GX {
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
function HX() {
  return new GX();
}
var G6 = HX();
function X5($, X) {
  return new $({ type: "string", ...P(X) });
}
function WH($, X) {
  return new $({ type: "string", coerce: !0, ...P(X) });
}
function UX($, X) {
  return new $({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function o0($, X) {
  return new $({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function KX($, X) {
  return new $({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function VX($, X) {
  return new $({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...P(X),
  });
}
function NX($, X) {
  return new $({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...P(X),
  });
}
function OX($, X) {
  return new $({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...P(X),
  });
}
function wX($, X) {
  return new $({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function BX($, X) {
  return new $({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function qX($, X) {
  return new $({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function DX($, X) {
  return new $({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function FX($, X) {
  return new $({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function jX($, X) {
  return new $({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function LX($, X) {
  return new $({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function MX($, X) {
  return new $({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function AX($, X) {
  return new $({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function IX($, X) {
  return new $({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function ZX($, X) {
  return new $({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function bX($, X) {
  return new $({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function RX($, X) {
  return new $({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function PX($, X) {
  return new $({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function EX($, X) {
  return new $({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
function SX($, X) {
  return new $({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...P(X),
  });
}
var J5 = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
function YH($, X) {
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
function zH($, X) {
  return new $({
    type: "string",
    format: "date",
    check: "string_format",
    ...P(X),
  });
}
function GH($, X) {
  return new $({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...P(X),
  });
}
function HH($, X) {
  return new $({
    type: "string",
    format: "duration",
    check: "string_format",
    ...P(X),
  });
}
function Q5($, X) {
  return new $({ type: "number", checks: [], ...P(X) });
}
function UH($, X) {
  return new $({ type: "number", coerce: !0, checks: [], ...P(X) });
}
function W5($, X) {
  return new $({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...P(X),
  });
}
function Y5($, X) {
  return new $({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...P(X),
  });
}
function z5($, X) {
  return new $({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...P(X),
  });
}
function G5($, X) {
  return new $({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...P(X),
  });
}
function H5($, X) {
  return new $({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...P(X),
  });
}
function U5($, X) {
  return new $({ type: "boolean", ...P(X) });
}
function KH($, X) {
  return new $({ type: "boolean", coerce: !0, ...P(X) });
}
function K5($, X) {
  return new $({ type: "bigint", ...P(X) });
}
function VH($, X) {
  return new $({ type: "bigint", coerce: !0, ...P(X) });
}
function V5($, X) {
  return new $({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...P(X),
  });
}
function N5($, X) {
  return new $({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...P(X),
  });
}
function O5($, X) {
  return new $({ type: "symbol", ...P(X) });
}
function w5($, X) {
  return new $({ type: "undefined", ...P(X) });
}
function B5($, X) {
  return new $({ type: "null", ...P(X) });
}
function q5($) {
  return new $({ type: "any" });
}
function i1($) {
  return new $({ type: "unknown" });
}
function D5($, X) {
  return new $({ type: "never", ...P(X) });
}
function F5($, X) {
  return new $({ type: "void", ...P(X) });
}
function j5($, X) {
  return new $({ type: "date", ...P(X) });
}
function NH($, X) {
  return new $({ type: "date", coerce: !0, ...P(X) });
}
function L5($, X) {
  return new $({ type: "nan", ...P(X) });
}
function Z4($, X) {
  return new s7({ check: "less_than", ...P(X), value: $, inclusive: !1 });
}
function P6($, X) {
  return new s7({ check: "less_than", ...P(X), value: $, inclusive: !0 });
}
function b4($, X) {
  return new e7({ check: "greater_than", ...P(X), value: $, inclusive: !1 });
}
function H6($, X) {
  return new e7({ check: "greater_than", ...P(X), value: $, inclusive: !0 });
}
function OH($) {
  return b4(0, $);
}
function wH($) {
  return Z4(0, $);
}
function BH($) {
  return P6(0, $);
}
function qH($) {
  return H6(0, $);
}
function n1($, X) {
  return new o3({ check: "multiple_of", ...P(X), value: $ });
}
function t0($, X) {
  return new s3({ check: "max_size", ...P(X), maximum: $ });
}
function r1($, X) {
  return new e3({ check: "min_size", ...P(X), minimum: $ });
}
function CX($, X) {
  return new $G({ check: "size_equals", ...P(X), size: $ });
}
function a0($, X) {
  return new XG({ check: "max_length", ...P(X), maximum: $ });
}
function J1($, X) {
  return new JG({ check: "min_length", ...P(X), minimum: $ });
}
function s0($, X) {
  return new QG({ check: "length_equals", ...P(X), length: $ });
}
function vX($, X) {
  return new WG({
    check: "string_format",
    format: "regex",
    ...P(X),
    pattern: $,
  });
}
function kX($) {
  return new YG({ check: "string_format", format: "lowercase", ...P($) });
}
function _X($) {
  return new zG({ check: "string_format", format: "uppercase", ...P($) });
}
function xX($, X) {
  return new GG({
    check: "string_format",
    format: "includes",
    ...P(X),
    includes: $,
  });
}
function TX($, X) {
  return new HG({
    check: "string_format",
    format: "starts_with",
    ...P(X),
    prefix: $,
  });
}
function fX($, X) {
  return new UG({
    check: "string_format",
    format: "ends_with",
    ...P(X),
    suffix: $,
  });
}
function DH($, X, J) {
  return new KG({ check: "property", property: $, schema: X, ...P(J) });
}
function yX($, X) {
  return new VG({ check: "mime_type", mime: $, ...P(X) });
}
function R4($) {
  return new NG({ check: "overwrite", tx: $ });
}
function gX($) {
  return R4((X) => X.normalize($));
}
function hX() {
  return R4(($) => $.trim());
}
function uX() {
  return R4(($) => $.toLowerCase());
}
function mX() {
  return R4(($) => $.toUpperCase());
}
function lX($, X, J) {
  return new $({ type: "array", element: X, ...P(J) });
}
function av($, X, J) {
  return new $({ type: "union", options: X, ...P(J) });
}
function sv($, X, J, W) {
  return new $({ type: "union", options: J, discriminator: X, ...P(W) });
}
function ev($, X, J) {
  return new $({ type: "intersection", left: X, right: J });
}
function FH($, X, J, W) {
  let Q = J instanceof d;
  return new $({
    type: "tuple",
    items: X,
    rest: Q ? J : null,
    ...P(Q ? W : J),
  });
}
function $k($, X, J, W) {
  return new $({ type: "record", keyType: X, valueType: J, ...P(W) });
}
function Xk($, X, J, W) {
  return new $({ type: "map", keyType: X, valueType: J, ...P(W) });
}
function Jk($, X, J) {
  return new $({ type: "set", valueType: X, ...P(J) });
}
function Qk($, X, J) {
  let W = Array.isArray(X) ? Object.fromEntries(X.map((Q) => [Q, Q])) : X;
  return new $({ type: "enum", entries: W, ...P(J) });
}
function Wk($, X, J) {
  return new $({ type: "enum", entries: X, ...P(J) });
}
function Yk($, X, J) {
  return new $({
    type: "literal",
    values: Array.isArray(X) ? X : [X],
    ...P(J),
  });
}
function M5($, X) {
  return new $({ type: "file", ...P(X) });
}
function zk($, X) {
  return new $({ type: "transform", transform: X });
}
function Gk($, X) {
  return new $({ type: "optional", innerType: X });
}
function Hk($, X) {
  return new $({ type: "nullable", innerType: X });
}
function Uk($, X, J) {
  return new $({
    type: "default",
    innerType: X,
    get defaultValue() {
      return typeof J === "function" ? J() : J;
    },
  });
}
function Kk($, X, J) {
  return new $({ type: "nonoptional", innerType: X, ...P(J) });
}
function Vk($, X) {
  return new $({ type: "success", innerType: X });
}
function Nk($, X, J) {
  return new $({
    type: "catch",
    innerType: X,
    catchValue: typeof J === "function" ? J : () => J,
  });
}
function Ok($, X, J) {
  return new $({ type: "pipe", in: X, out: J });
}
function wk($, X) {
  return new $({ type: "readonly", innerType: X });
}
function Bk($, X, J) {
  return new $({ type: "template_literal", parts: X, ...P(J) });
}
function qk($, X) {
  return new $({ type: "lazy", getter: X });
}
function Dk($, X) {
  return new $({ type: "promise", innerType: X });
}
function A5($, X, J) {
  let W = P(J);
  return (
    W.abort ?? (W.abort = !0),
    new $({ type: "custom", check: "custom", fn: X, ...W })
  );
}
function I5($, X, J) {
  return new $({ type: "custom", check: "custom", fn: X, ...P(J) });
}
function Z5($, X) {
  let J = P(X),
    W = J.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
    Q = J.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  if (J.case !== "sensitive")
    ((W = W.map((w) => (typeof w === "string" ? w.toLowerCase() : w))),
      (Q = Q.map((w) => (typeof w === "string" ? w.toLowerCase() : w))));
  let Y = new Set(W),
    z = new Set(Q),
    G = $.Pipe ?? n0,
    H = $.Boolean ?? p0,
    U = $.String ?? $1,
    V = new ($.Transform ?? i0)({
      type: "transform",
      transform: (w, B) => {
        let F = w;
        if (J.case !== "sensitive") F = F.toLowerCase();
        if (Y.has(F)) return !0;
        else if (z.has(F)) return !1;
        else
          return (
            B.issues.push({
              code: "invalid_value",
              expected: "stringbool",
              values: [...Y, ...z],
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
function b5($, X, J, W = {}) {
  let Q = P(W),
    Y = {
      ...P(W),
      check: "string_format",
      type: "string",
      format: X,
      fn: typeof J === "function" ? J : (G) => J.test(G),
      ...Q,
    };
  if (J instanceof RegExp) Y.pattern = J;
  return new $(Y);
}
class jH {
  constructor($) {
    ((this._def = $), (this.def = $));
  }
  implement($) {
    if (typeof $ !== "function")
      throw Error("implement() must be called with a function");
    let X = (...J) => {
      let W = this._def.input
        ? l1(this._def.input, J, void 0, { callee: X })
        : J;
      if (!Array.isArray(W))
        throw Error("Invalid arguments schema: not an array or tuple schema.");
      let Q = $(...W);
      return this._def.output
        ? l1(this._def.output, Q, void 0, { callee: X })
        : Q;
    };
    return X;
  }
  implementAsync($) {
    if (typeof $ !== "function")
      throw Error("implement() must be called with a function");
    let X = async (...J) => {
      let W = this._def.input
        ? await c1(this._def.input, J, void 0, { callee: X })
        : J;
      if (!Array.isArray(W))
        throw Error("Invalid arguments schema: not an array or tuple schema.");
      let Q = await $(...W);
      return this._def.output
        ? c1(this._def.output, Q, void 0, { callee: X })
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
function R5($) {
  return new jH({
    type: "function",
    input: Array.isArray($?.input)
      ? FH(X1, $?.input)
      : ($?.input ?? lX(d0, i1(d1))),
    output: $?.output ?? i1(d1),
  });
}
class P5 {
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
    let W = $._zod.def,
      Q = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: "",
      },
      Y = this.seen.get($);
    if (Y) {
      if ((Y.count++, X.schemaPath.includes($))) Y.cycle = X.path;
      return Y.schema;
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
        switch (W.type) {
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
              (O.items = this.process(W.element, {
                ...K,
                path: [...K.path, "items"],
              })));
            break;
          }
          case "object": {
            let O = N;
            ((O.type = "object"), (O.properties = {}));
            let w = W.shape;
            for (let j in w)
              O.properties[j] = this.process(w[j], {
                ...K,
                path: [...K.path, "properties", j],
              });
            let B = new Set(Object.keys(w)),
              F = new Set(
                [...B].filter((j) => {
                  let I = W.shape[j]._zod;
                  if (this.io === "input") return I.optin === void 0;
                  else return I.optout === void 0;
                }),
              );
            if (F.size > 0) O.required = Array.from(F);
            if (W.catchall?._zod.def.type === "never")
              O.additionalProperties = !1;
            else if (!W.catchall) {
              if (this.io === "output") O.additionalProperties = !1;
            } else if (W.catchall)
              O.additionalProperties = this.process(W.catchall, {
                ...K,
                path: [...K.path, "additionalProperties"],
              });
            break;
          }
          case "union": {
            let O = N;
            O.anyOf = W.options.map((w, B) =>
              this.process(w, { ...K, path: [...K.path, "anyOf", B] }),
            );
            break;
          }
          case "intersection": {
            let O = N,
              w = this.process(W.left, { ...K, path: [...K.path, "allOf", 0] }),
              B = this.process(W.right, {
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
            let w = W.items.map((j, I) =>
              this.process(j, { ...K, path: [...K.path, "prefixItems", I] }),
            );
            if (this.target === "draft-2020-12") O.prefixItems = w;
            else O.items = w;
            if (W.rest) {
              let j = this.process(W.rest, {
                ...K,
                path: [...K.path, "items"],
              });
              if (this.target === "draft-2020-12") O.items = j;
              else O.additionalItems = j;
            }
            if (W.rest)
              O.items = this.process(W.rest, {
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
              (O.propertyNames = this.process(W.keyType, {
                ...K,
                path: [...K.path, "propertyNames"],
              })),
              (O.additionalProperties = this.process(W.valueType, {
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
              w = o9(W.entries);
            if (w.every((B) => typeof B === "number")) O.type = "number";
            if (w.every((B) => typeof B === "string")) O.type = "string";
            O.enum = w;
            break;
          }
          case "literal": {
            let O = N,
              w = [];
            for (let B of W.values)
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
            let O = this.process(W.innerType, K);
            N.anyOf = [O, { type: "null" }];
            break;
          }
          case "nonoptional": {
            (this.process(W.innerType, K), (z.ref = W.innerType));
            break;
          }
          case "success": {
            let O = N;
            O.type = "boolean";
            break;
          }
          case "default": {
            (this.process(W.innerType, K),
              (z.ref = W.innerType),
              (N.default = JSON.parse(JSON.stringify(W.defaultValue))));
            break;
          }
          case "prefault": {
            if (
              (this.process(W.innerType, K),
              (z.ref = W.innerType),
              this.io === "input")
            )
              N._prefault = JSON.parse(JSON.stringify(W.defaultValue));
            break;
          }
          case "catch": {
            (this.process(W.innerType, K), (z.ref = W.innerType));
            let O;
            try {
              O = W.catchValue(void 0);
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
                ? W.in._zod.def.type === "transform"
                  ? W.out
                  : W.in
                : W.out;
            (this.process(O, K), (z.ref = O));
            break;
          }
          case "readonly": {
            (this.process(W.innerType, K),
              (z.ref = W.innerType),
              (N.readOnly = !0));
            break;
          }
          case "promise": {
            (this.process(W.innerType, K), (z.ref = W.innerType));
            break;
          }
          case "optional": {
            (this.process(W.innerType, K), (z.ref = W.innerType));
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
      W = this.seen.get($);
    if (!W) throw Error("Unprocessed schema. This is a bug in Zod.");
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
        if (U[1] === W) return { ref: "#" };
        let N = `${"#"}/${K}/`,
          O = U[1].schema.id ?? `__schema${this.counter++}`;
        return { defId: O, ref: N + O };
      },
      Y = (U) => {
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
        Y(U);
        continue;
      }
      if (J.external) {
        let N = J.external.registry.get(U[0])?.id;
        if ($ !== U[0] && N) {
          Y(U);
          continue;
        }
      }
      if (this.metadataRegistry.get(U[0])?.id) {
        Y(U);
        continue;
      }
      if (K.cycle) {
        if (J.cycles === "throw")
          throw Error(`Cycle detected: #/${K.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        else if (J.cycles === "ref") Y(U);
        continue;
      }
      if (K.count > 1) {
        if (J.reused === "ref") {
          Y(U);
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
    Object.assign(G, W.def);
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
function e0($, X) {
  if ($ instanceof GX) {
    let W = new P5(X),
      Q = {};
    for (let G of $._idmap.entries()) {
      let [H, U] = G;
      W.process(U);
    }
    let Y = {},
      z = { registry: $, uri: X?.uri || ((G) => G), defs: Q };
    for (let G of $._idmap.entries()) {
      let [H, U] = G;
      Y[H] = W.emit(U, { ...X, external: z });
    }
    if (Object.keys(Q).length > 0) {
      let G = W.target === "draft-2020-12" ? "$defs" : "definitions";
      Y.__shared = { [G]: Q };
    }
    return { schemas: Y };
  }
  let J = new P5(X);
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
      for (let Y in Q.shape) if (y$(Q.shape[Y], J)) return !0;
      return !1;
    }
    case "union": {
      for (let Y of Q.options) if (y$(Y, J)) return !0;
      return !1;
    }
    case "intersection":
      return y$(Q.left, J) || y$(Q.right, J);
    case "tuple": {
      for (let Y of Q.items) if (y$(Y, J)) return !0;
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
var HD = {};
var jk = q("ZodMiniType", ($, X) => {
  if (!$._zod) throw Error("Uninitialized schema in ZodMiniType.");
  (d.init($, X),
    ($.def = X),
    ($.parse = (J, W) => l1($, J, W, { callee: $.parse })),
    ($.safeParse = (J, W) => a4($, J, W)),
    ($.parseAsync = async (J, W) => c1($, J, W, { callee: $.parseAsync })),
    ($.safeParseAsync = async (J, W) => s4($, J, W)),
    ($.check = (...J) => {
      return $.clone({
        ...X,
        checks: [
          ...(X.checks ?? []),
          ...J.map((W) =>
            typeof W === "function"
              ? { _zod: { check: W, def: { check: "custom" }, onattach: [] } }
              : W,
          ),
        ],
      });
    }),
    ($.clone = (J, W) => n$($, J, W)),
    ($.brand = () => $),
    ($.register = (J, W) => {
      return (J.add($, W), $);
    }));
});
var Lk = q("ZodMiniObject", ($, X) => {
  (WX.init($, X), jk.init($, X), E.defineLazy($, "shape", () => X.shape));
});
function LH($, X) {
  let J = {
    type: "object",
    get shape() {
      return (E.assignProp(this, "shape", { ...$ }), this.shape);
    },
    ...E.normalizeParams(X),
  };
  return new Lk(J);
}
function E6($) {
  return !!$._zod;
}
function o1($) {
  let X = Object.values($);
  if (X.length === 0) return LH({});
  let J = X.every(E6),
    W = X.every((Q) => !E6(Q));
  if (J) return LH($);
  if (W) return yq($);
  throw Error("Mixed Zod versions detected in object shape.");
}
function Q1($, X) {
  if (E6($)) return a4($, X);
  return $.safeParse(X);
}
async function E5($, X) {
  if (E6($)) return await s4($, X);
  return await $.safeParseAsync(X);
}
function W1($) {
  if (!$) return;
  let X;
  if (E6($)) X = $._zod?.def?.shape;
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
function $8($) {
  if (!$) return;
  if (typeof $ === "object") {
    let X = $,
      J = $;
    if (!X._def && !J._zod) {
      let W = Object.values($);
      if (
        W.length > 0 &&
        W.every(
          (Q) =>
            typeof Q === "object" &&
            Q !== null &&
            (Q._def !== void 0 ||
              Q._zod !== void 0 ||
              typeof Q.parse === "function"),
        )
      )
        return o1($);
    }
  }
  if (E6($)) {
    let J = $._zod?.def;
    if (J && (J.type === "object" || J.shape !== void 0)) return $;
  } else if ($.shape !== void 0) return $;
  return;
}
function S5($) {
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
function UD($) {
  return $.description;
}
function KD($) {
  if (E6($)) return $._zod?.def?.type === "optional";
  let X = $;
  if (typeof $.isOptional === "function") return $.isOptional();
  return X._def?.typeName === "ZodOptional";
}
function C5($) {
  if (E6($)) {
    let Y = $._zod?.def;
    if (Y) {
      if (Y.value !== void 0) return Y.value;
      if (Array.isArray(Y.values) && Y.values.length > 0) return Y.values[0];
    }
  }
  let J = $._def;
  if (J) {
    if (J.value !== void 0) return J.value;
    if (Array.isArray(J.values) && J.values.length > 0) return J.values[0];
  }
  let W = $.value;
  if (W !== void 0) return W;
  return;
}
var Y1 = {};
F1(Y1, {
  xid: () => yk,
  void: () => W_,
  uuidv7: () => Ck,
  uuidv6: () => Sk,
  uuidv4: () => Ek,
  uuid: () => Pk,
  url: () => vk,
  uppercase: () => _X,
  unknown: () => L$,
  union: () => V$,
  undefined: () => J_,
  ulid: () => fk,
  uint64: () => $_,
  uint32: () => ak,
  tuple: () => H_,
  trim: () => hX,
  treeifyError: () => d7,
  transform: () => sH,
  toUpperCase: () => mX,
  toLowerCase: () => uX,
  toJSONSchema: () => e0,
  templateLiteral: () => D_,
  symbol: () => X_,
  superRefine: () => nD,
  success: () => B_,
  stringbool: () => L_,
  stringFormat: () => nk,
  string: () => L,
  strictObject: () => G_,
  startsWith: () => TX,
  size: () => CX,
  setErrorMap: () => I_,
  set: () => V_,
  safeParseAsync: () => EH,
  safeParse: () => PH,
  registry: () => HX,
  regexes: () => e4,
  regex: () => vX,
  refine: () => iD,
  record: () => N$,
  readonly: () => uD,
  property: () => DH,
  promise: () => F_,
  prettifyError: () => i7,
  preprocess: () => p5,
  prefault: () => _D,
  positive: () => OH,
  pipe: () => y5,
  partialRecord: () => U_,
  parseAsync: () => RH,
  parse: () => bH,
  overwrite: () => R4,
  optional: () => j$,
  object: () => x,
  number: () => z$,
  nullish: () => w_,
  nullable: () => f5,
  null: () => g5,
  normalize: () => gX,
  nonpositive: () => BH,
  nonoptional: () => xD,
  nonnegative: () => qH,
  never: () => h5,
  negative: () => wH,
  nativeEnum: () => N_,
  nanoid: () => _k,
  nan: () => q_,
  multipleOf: () => n1,
  minSize: () => r1,
  minLength: () => J1,
  mime: () => yX,
  maxSize: () => t0,
  maxLength: () => a0,
  map: () => K_,
  lte: () => P6,
  lt: () => Z4,
  lowercase: () => kX,
  looseObject: () => r$,
  locales: () => r0,
  literal: () => g,
  length: () => s0,
  lazy: () => cD,
  ksuid: () => gk,
  keyof: () => z_,
  jwt: () => ik,
  json: () => M_,
  iso: () => X8,
  ipv6: () => uk,
  ipv4: () => hk,
  intersection: () => rX,
  int64: () => ek,
  int32: () => tk,
  int: () => SH,
  instanceof: () => j_,
  includes: () => xX,
  guid: () => Rk,
  gte: () => H6,
  gt: () => b4,
  globalRegistry: () => G6,
  getErrorMap: () => Z_,
  function: () => R5,
  formatError: () => l0,
  float64: () => ok,
  float32: () => rk,
  flattenError: () => m0,
  file: () => O_,
  enum: () => s$,
  endsWith: () => fX,
  emoji: () => kk,
  email: () => bk,
  e164: () => dk,
  discriminatedUnion: () => l5,
  date: () => Y_,
  custom: () => JU,
  cuid2: () => Tk,
  cuid: () => xk,
  core: () => l6,
  config: () => C$,
  coerce: () => QU,
  clone: () => n$,
  cidrv6: () => lk,
  cidrv4: () => mk,
  check: () => dD,
  catch: () => yD,
  boolean: () => _$,
  bigint: () => sk,
  base64url: () => pk,
  base64: () => ck,
  array: () => $$,
  any: () => Q_,
  _default: () => vD,
  _ZodString: () => CH,
  ZodXID: () => gH,
  ZodVoid: () => LD,
  ZodUnknown: () => FD,
  ZodUnion: () => oH,
  ZodUndefined: () => BD,
  ZodUUID: () => P4,
  ZodURL: () => kH,
  ZodULID: () => yH,
  ZodType: () => s,
  ZodTuple: () => ZD,
  ZodTransform: () => aH,
  ZodTemplateLiteral: () => mD,
  ZodSymbol: () => wD,
  ZodSuccess: () => TD,
  ZodStringFormat: () => F$,
  ZodString: () => pX,
  ZodSet: () => RD,
  ZodRecord: () => tH,
  ZodRealError: () => J8,
  ZodReadonly: () => hD,
  ZodPromise: () => pD,
  ZodPrefault: () => kD,
  ZodPipe: () => XU,
  ZodOptional: () => eH,
  ZodObject: () => m5,
  ZodNumberFormat: () => Q8,
  ZodNumber: () => dX,
  ZodNullable: () => SD,
  ZodNull: () => qD,
  ZodNonOptional: () => $U,
  ZodNever: () => jD,
  ZodNanoID: () => xH,
  ZodNaN: () => gD,
  ZodMap: () => bD,
  ZodLiteral: () => PD,
  ZodLazy: () => lD,
  ZodKSUID: () => hH,
  ZodJWT: () => nH,
  ZodIssueCode: () => A_,
  ZodIntersection: () => ID,
  ZodISOTime: () => _5,
  ZodISODuration: () => x5,
  ZodISODateTime: () => v5,
  ZodISODate: () => k5,
  ZodIPv6: () => mH,
  ZodIPv4: () => uH,
  ZodGUID: () => T5,
  ZodFile: () => ED,
  ZodError: () => Ik,
  ZodEnum: () => cX,
  ZodEmoji: () => _H,
  ZodEmail: () => vH,
  ZodE164: () => iH,
  ZodDiscriminatedUnion: () => AD,
  ZodDefault: () => CD,
  ZodDate: () => u5,
  ZodCustomStringFormat: () => OD,
  ZodCustom: () => c5,
  ZodCatch: () => fD,
  ZodCUID2: () => fH,
  ZodCUID: () => TH,
  ZodCIDRv6: () => cH,
  ZodCIDRv4: () => lH,
  ZodBoolean: () => iX,
  ZodBigIntFormat: () => rH,
  ZodBigInt: () => nX,
  ZodBase64URL: () => dH,
  ZodBase64: () => pH,
  ZodArray: () => MD,
  ZodAny: () => DD,
  TimePrecision: () => J5,
  NEVER: () => l7,
  $output: () => eQ,
  $input: () => $5,
  $brand: () => c7,
});
var X8 = {};
F1(X8, {
  time: () => IH,
  duration: () => ZH,
  datetime: () => MH,
  date: () => AH,
  ZodISOTime: () => _5,
  ZodISODuration: () => x5,
  ZodISODateTime: () => v5,
  ZodISODate: () => k5,
});
var v5 = q("ZodISODateTime", ($, X) => {
  (BG.init($, X), F$.init($, X));
});
function MH($) {
  return YH(v5, $);
}
var k5 = q("ZodISODate", ($, X) => {
  (qG.init($, X), F$.init($, X));
});
function AH($) {
  return zH(k5, $);
}
var _5 = q("ZodISOTime", ($, X) => {
  (DG.init($, X), F$.init($, X));
});
function IH($) {
  return GH(_5, $);
}
var x5 = q("ZodISODuration", ($, X) => {
  (FG.init($, X), F$.init($, X));
});
function ZH($) {
  return HH(x5, $);
}
var ND = ($, X) => {
    (XX.init($, X),
      ($.name = "ZodError"),
      Object.defineProperties($, {
        format: { value: (J) => l0($, J) },
        flatten: { value: (J) => m0($, J) },
        addIssue: { value: (J) => $.issues.push(J) },
        addIssues: { value: (J) => $.issues.push(...J) },
        isEmpty: {
          get() {
            return $.issues.length === 0;
          },
        },
      }));
  },
  Ik = q("ZodError", ND),
  J8 = q("ZodError", ND, { Parent: Error });
var bH = n7(J8),
  RH = r7(J8),
  PH = o7(J8),
  EH = t7(J8);
var s = q("ZodType", ($, X) => {
    return (
      d.init($, X),
      ($.def = X),
      Object.defineProperty($, "_def", { value: X }),
      ($.check = (...J) => {
        return $.clone({
          ...X,
          checks: [
            ...(X.checks ?? []),
            ...J.map((W) =>
              typeof W === "function"
                ? { _zod: { check: W, def: { check: "custom" }, onattach: [] } }
                : W,
            ),
          ],
        });
      }),
      ($.clone = (J, W) => n$($, J, W)),
      ($.brand = () => $),
      ($.register = (J, W) => {
        return (J.add($, W), $);
      }),
      ($.parse = (J, W) => bH($, J, W, { callee: $.parse })),
      ($.safeParse = (J, W) => PH($, J, W)),
      ($.parseAsync = async (J, W) => RH($, J, W, { callee: $.parseAsync })),
      ($.safeParseAsync = async (J, W) => EH($, J, W)),
      ($.spa = $.safeParseAsync),
      ($.refine = (J, W) => $.check(iD(J, W))),
      ($.superRefine = (J) => $.check(nD(J))),
      ($.overwrite = (J) => $.check(R4(J))),
      ($.optional = () => j$($)),
      ($.nullable = () => f5($)),
      ($.nullish = () => j$(f5($))),
      ($.nonoptional = (J) => xD($, J)),
      ($.array = () => $$($)),
      ($.or = (J) => V$([$, J])),
      ($.and = (J) => rX($, J)),
      ($.transform = (J) => y5($, sH(J))),
      ($.default = (J) => vD($, J)),
      ($.prefault = (J) => _D($, J)),
      ($.catch = (J) => yD($, J)),
      ($.pipe = (J) => y5($, J)),
      ($.readonly = () => uD($)),
      ($.describe = (J) => {
        let W = $.clone();
        return (G6.add(W, { description: J }), W);
      }),
      Object.defineProperty($, "description", {
        get() {
          return G6.get($)?.description;
        },
        configurable: !0,
      }),
      ($.meta = (...J) => {
        if (J.length === 0) return G6.get($);
        let W = $.clone();
        return (G6.add(W, J[0]), W);
      }),
      ($.isOptional = () => $.safeParse(void 0).success),
      ($.isNullable = () => $.safeParse(null).success),
      $
    );
  }),
  CH = q("_ZodString", ($, X) => {
    ($1.init($, X), s.init($, X));
    let J = $._zod.bag;
    (($.format = J.format ?? null),
      ($.minLength = J.minimum ?? null),
      ($.maxLength = J.maximum ?? null),
      ($.regex = (...W) => $.check(vX(...W))),
      ($.includes = (...W) => $.check(xX(...W))),
      ($.startsWith = (...W) => $.check(TX(...W))),
      ($.endsWith = (...W) => $.check(fX(...W))),
      ($.min = (...W) => $.check(J1(...W))),
      ($.max = (...W) => $.check(a0(...W))),
      ($.length = (...W) => $.check(s0(...W))),
      ($.nonempty = (...W) => $.check(J1(1, ...W))),
      ($.lowercase = (W) => $.check(kX(W))),
      ($.uppercase = (W) => $.check(_X(W))),
      ($.trim = () => $.check(hX())),
      ($.normalize = (...W) => $.check(gX(...W))),
      ($.toLowerCase = () => $.check(uX())),
      ($.toUpperCase = () => $.check(mX())));
  }),
  pX = q("ZodString", ($, X) => {
    ($1.init($, X),
      CH.init($, X),
      ($.email = (J) => $.check(UX(vH, J))),
      ($.url = (J) => $.check(wX(kH, J))),
      ($.jwt = (J) => $.check(SX(nH, J))),
      ($.emoji = (J) => $.check(BX(_H, J))),
      ($.guid = (J) => $.check(o0(T5, J))),
      ($.uuid = (J) => $.check(KX(P4, J))),
      ($.uuidv4 = (J) => $.check(VX(P4, J))),
      ($.uuidv6 = (J) => $.check(NX(P4, J))),
      ($.uuidv7 = (J) => $.check(OX(P4, J))),
      ($.nanoid = (J) => $.check(qX(xH, J))),
      ($.guid = (J) => $.check(o0(T5, J))),
      ($.cuid = (J) => $.check(DX(TH, J))),
      ($.cuid2 = (J) => $.check(FX(fH, J))),
      ($.ulid = (J) => $.check(jX(yH, J))),
      ($.base64 = (J) => $.check(RX(pH, J))),
      ($.base64url = (J) => $.check(PX(dH, J))),
      ($.xid = (J) => $.check(LX(gH, J))),
      ($.ksuid = (J) => $.check(MX(hH, J))),
      ($.ipv4 = (J) => $.check(AX(uH, J))),
      ($.ipv6 = (J) => $.check(IX(mH, J))),
      ($.cidrv4 = (J) => $.check(ZX(lH, J))),
      ($.cidrv6 = (J) => $.check(bX(cH, J))),
      ($.e164 = (J) => $.check(EX(iH, J))),
      ($.datetime = (J) => $.check(MH(J))),
      ($.date = (J) => $.check(AH(J))),
      ($.time = (J) => $.check(IH(J))),
      ($.duration = (J) => $.check(ZH(J))));
  });
function L($) {
  return X5(pX, $);
}
var F$ = q("ZodStringFormat", ($, X) => {
    (K$.init($, X), CH.init($, X));
  }),
  vH = q("ZodEmail", ($, X) => {
    (YQ.init($, X), F$.init($, X));
  });
function bk($) {
  return UX(vH, $);
}
var T5 = q("ZodGUID", ($, X) => {
  (QQ.init($, X), F$.init($, X));
});
function Rk($) {
  return o0(T5, $);
}
var P4 = q("ZodUUID", ($, X) => {
  (WQ.init($, X), F$.init($, X));
});
function Pk($) {
  return KX(P4, $);
}
function Ek($) {
  return VX(P4, $);
}
function Sk($) {
  return NX(P4, $);
}
function Ck($) {
  return OX(P4, $);
}
var kH = q("ZodURL", ($, X) => {
  (zQ.init($, X), F$.init($, X));
});
function vk($) {
  return wX(kH, $);
}
var _H = q("ZodEmoji", ($, X) => {
  (GQ.init($, X), F$.init($, X));
});
function kk($) {
  return BX(_H, $);
}
var xH = q("ZodNanoID", ($, X) => {
  (HQ.init($, X), F$.init($, X));
});
function _k($) {
  return qX(xH, $);
}
var TH = q("ZodCUID", ($, X) => {
  (UQ.init($, X), F$.init($, X));
});
function xk($) {
  return DX(TH, $);
}
var fH = q("ZodCUID2", ($, X) => {
  (KQ.init($, X), F$.init($, X));
});
function Tk($) {
  return FX(fH, $);
}
var yH = q("ZodULID", ($, X) => {
  (VQ.init($, X), F$.init($, X));
});
function fk($) {
  return jX(yH, $);
}
var gH = q("ZodXID", ($, X) => {
  (NQ.init($, X), F$.init($, X));
});
function yk($) {
  return LX(gH, $);
}
var hH = q("ZodKSUID", ($, X) => {
  (OQ.init($, X), F$.init($, X));
});
function gk($) {
  return MX(hH, $);
}
var uH = q("ZodIPv4", ($, X) => {
  (wQ.init($, X), F$.init($, X));
});
function hk($) {
  return AX(uH, $);
}
var mH = q("ZodIPv6", ($, X) => {
  (BQ.init($, X), F$.init($, X));
});
function uk($) {
  return IX(mH, $);
}
var lH = q("ZodCIDRv4", ($, X) => {
  (qQ.init($, X), F$.init($, X));
});
function mk($) {
  return ZX(lH, $);
}
var cH = q("ZodCIDRv6", ($, X) => {
  (DQ.init($, X), F$.init($, X));
});
function lk($) {
  return bX(cH, $);
}
var pH = q("ZodBase64", ($, X) => {
  (FQ.init($, X), F$.init($, X));
});
function ck($) {
  return RX(pH, $);
}
var dH = q("ZodBase64URL", ($, X) => {
  (jQ.init($, X), F$.init($, X));
});
function pk($) {
  return PX(dH, $);
}
var iH = q("ZodE164", ($, X) => {
  (LQ.init($, X), F$.init($, X));
});
function dk($) {
  return EX(iH, $);
}
var nH = q("ZodJWT", ($, X) => {
  (MQ.init($, X), F$.init($, X));
});
function ik($) {
  return SX(nH, $);
}
var OD = q("ZodCustomStringFormat", ($, X) => {
  (AQ.init($, X), F$.init($, X));
});
function nk($, X, J = {}) {
  return b5(OD, $, X, J);
}
var dX = q("ZodNumber", ($, X) => {
  (JX.init($, X),
    s.init($, X),
    ($.gt = (W, Q) => $.check(b4(W, Q))),
    ($.gte = (W, Q) => $.check(H6(W, Q))),
    ($.min = (W, Q) => $.check(H6(W, Q))),
    ($.lt = (W, Q) => $.check(Z4(W, Q))),
    ($.lte = (W, Q) => $.check(P6(W, Q))),
    ($.max = (W, Q) => $.check(P6(W, Q))),
    ($.int = (W) => $.check(SH(W))),
    ($.safe = (W) => $.check(SH(W))),
    ($.positive = (W) => $.check(b4(0, W))),
    ($.nonnegative = (W) => $.check(H6(0, W))),
    ($.negative = (W) => $.check(Z4(0, W))),
    ($.nonpositive = (W) => $.check(P6(0, W))),
    ($.multipleOf = (W, Q) => $.check(n1(W, Q))),
    ($.step = (W, Q) => $.check(n1(W, Q))),
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
  return Q5(dX, $);
}
var Q8 = q("ZodNumberFormat", ($, X) => {
  (IQ.init($, X), dX.init($, X));
});
function SH($) {
  return W5(Q8, $);
}
function rk($) {
  return Y5(Q8, $);
}
function ok($) {
  return z5(Q8, $);
}
function tk($) {
  return G5(Q8, $);
}
function ak($) {
  return H5(Q8, $);
}
var iX = q("ZodBoolean", ($, X) => {
  (p0.init($, X), s.init($, X));
});
function _$($) {
  return U5(iX, $);
}
var nX = q("ZodBigInt", ($, X) => {
  (QX.init($, X),
    s.init($, X),
    ($.gte = (W, Q) => $.check(H6(W, Q))),
    ($.min = (W, Q) => $.check(H6(W, Q))),
    ($.gt = (W, Q) => $.check(b4(W, Q))),
    ($.gte = (W, Q) => $.check(H6(W, Q))),
    ($.min = (W, Q) => $.check(H6(W, Q))),
    ($.lt = (W, Q) => $.check(Z4(W, Q))),
    ($.lte = (W, Q) => $.check(P6(W, Q))),
    ($.max = (W, Q) => $.check(P6(W, Q))),
    ($.positive = (W) => $.check(b4(BigInt(0), W))),
    ($.negative = (W) => $.check(Z4(BigInt(0), W))),
    ($.nonpositive = (W) => $.check(P6(BigInt(0), W))),
    ($.nonnegative = (W) => $.check(H6(BigInt(0), W))),
    ($.multipleOf = (W, Q) => $.check(n1(W, Q))));
  let J = $._zod.bag;
  (($.minValue = J.minimum ?? null),
    ($.maxValue = J.maximum ?? null),
    ($.format = J.format ?? null));
});
function sk($) {
  return K5(nX, $);
}
var rH = q("ZodBigIntFormat", ($, X) => {
  (ZQ.init($, X), nX.init($, X));
});
function ek($) {
  return V5(rH, $);
}
function $_($) {
  return N5(rH, $);
}
var wD = q("ZodSymbol", ($, X) => {
  (bQ.init($, X), s.init($, X));
});
function X_($) {
  return O5(wD, $);
}
var BD = q("ZodUndefined", ($, X) => {
  (RQ.init($, X), s.init($, X));
});
function J_($) {
  return w5(BD, $);
}
var qD = q("ZodNull", ($, X) => {
  (PQ.init($, X), s.init($, X));
});
function g5($) {
  return B5(qD, $);
}
var DD = q("ZodAny", ($, X) => {
  (EQ.init($, X), s.init($, X));
});
function Q_() {
  return q5(DD);
}
var FD = q("ZodUnknown", ($, X) => {
  (d1.init($, X), s.init($, X));
});
function L$() {
  return i1(FD);
}
var jD = q("ZodNever", ($, X) => {
  (SQ.init($, X), s.init($, X));
});
function h5($) {
  return D5(jD, $);
}
var LD = q("ZodVoid", ($, X) => {
  (CQ.init($, X), s.init($, X));
});
function W_($) {
  return F5(LD, $);
}
var u5 = q("ZodDate", ($, X) => {
  (vQ.init($, X),
    s.init($, X),
    ($.min = (W, Q) => $.check(H6(W, Q))),
    ($.max = (W, Q) => $.check(P6(W, Q))));
  let J = $._zod.bag;
  (($.minDate = J.minimum ? new Date(J.minimum) : null),
    ($.maxDate = J.maximum ? new Date(J.maximum) : null));
});
function Y_($) {
  return j5(u5, $);
}
var MD = q("ZodArray", ($, X) => {
  (d0.init($, X),
    s.init($, X),
    ($.element = X.element),
    ($.min = (J, W) => $.check(J1(J, W))),
    ($.nonempty = (J) => $.check(J1(1, J))),
    ($.max = (J, W) => $.check(a0(J, W))),
    ($.length = (J, W) => $.check(s0(J, W))),
    ($.unwrap = () => $.element));
});
function $$($, X) {
  return lX(MD, $, X);
}
function z_($) {
  let X = $._zod.def.shape;
  return g(Object.keys(X));
}
var m5 = q("ZodObject", ($, X) => {
  (WX.init($, X),
    s.init($, X),
    E.defineLazy($, "shape", () => X.shape),
    ($.keyof = () => s$(Object.keys($._zod.def.shape))),
    ($.catchall = (J) => $.clone({ ...$._zod.def, catchall: J })),
    ($.passthrough = () => $.clone({ ...$._zod.def, catchall: L$() })),
    ($.loose = () => $.clone({ ...$._zod.def, catchall: L$() })),
    ($.strict = () => $.clone({ ...$._zod.def, catchall: h5() })),
    ($.strip = () => $.clone({ ...$._zod.def, catchall: void 0 })),
    ($.extend = (J) => {
      return E.extend($, J);
    }),
    ($.merge = (J) => E.merge($, J)),
    ($.pick = (J) => E.pick($, J)),
    ($.omit = (J) => E.omit($, J)),
    ($.partial = (...J) => E.partial(eH, $, J[0])),
    ($.required = (...J) => E.required($U, $, J[0])));
});
function x($, X) {
  let J = {
    type: "object",
    get shape() {
      return (E.assignProp(this, "shape", { ...$ }), this.shape);
    },
    ...E.normalizeParams(X),
  };
  return new m5(J);
}
function G_($, X) {
  return new m5({
    type: "object",
    get shape() {
      return (E.assignProp(this, "shape", { ...$ }), this.shape);
    },
    catchall: h5(),
    ...E.normalizeParams(X),
  });
}
function r$($, X) {
  return new m5({
    type: "object",
    get shape() {
      return (E.assignProp(this, "shape", { ...$ }), this.shape);
    },
    catchall: L$(),
    ...E.normalizeParams(X),
  });
}
var oH = q("ZodUnion", ($, X) => {
  (YX.init($, X), s.init($, X), ($.options = X.options));
});
function V$($, X) {
  return new oH({ type: "union", options: $, ...E.normalizeParams(X) });
}
var AD = q("ZodDiscriminatedUnion", ($, X) => {
  (oH.init($, X), kQ.init($, X));
});
function l5($, X, J) {
  return new AD({
    type: "union",
    options: X,
    discriminator: $,
    ...E.normalizeParams(J),
  });
}
var ID = q("ZodIntersection", ($, X) => {
  (_Q.init($, X), s.init($, X));
});
function rX($, X) {
  return new ID({ type: "intersection", left: $, right: X });
}
var ZD = q("ZodTuple", ($, X) => {
  (X1.init($, X),
    s.init($, X),
    ($.rest = (J) => $.clone({ ...$._zod.def, rest: J })));
});
function H_($, X, J) {
  let W = X instanceof d,
    Q = W ? J : X;
  return new ZD({
    type: "tuple",
    items: $,
    rest: W ? X : null,
    ...E.normalizeParams(Q),
  });
}
var tH = q("ZodRecord", ($, X) => {
  (xQ.init($, X),
    s.init($, X),
    ($.keyType = X.keyType),
    ($.valueType = X.valueType));
});
function N$($, X, J) {
  return new tH({
    type: "record",
    keyType: $,
    valueType: X,
    ...E.normalizeParams(J),
  });
}
function U_($, X, J) {
  return new tH({
    type: "record",
    keyType: V$([$, h5()]),
    valueType: X,
    ...E.normalizeParams(J),
  });
}
var bD = q("ZodMap", ($, X) => {
  (TQ.init($, X),
    s.init($, X),
    ($.keyType = X.keyType),
    ($.valueType = X.valueType));
});
function K_($, X, J) {
  return new bD({
    type: "map",
    keyType: $,
    valueType: X,
    ...E.normalizeParams(J),
  });
}
var RD = q("ZodSet", ($, X) => {
  (fQ.init($, X),
    s.init($, X),
    ($.min = (...J) => $.check(r1(...J))),
    ($.nonempty = (J) => $.check(r1(1, J))),
    ($.max = (...J) => $.check(t0(...J))),
    ($.size = (...J) => $.check(CX(...J))));
});
function V_($, X) {
  return new RD({ type: "set", valueType: $, ...E.normalizeParams(X) });
}
var cX = q("ZodEnum", ($, X) => {
  (yQ.init($, X),
    s.init($, X),
    ($.enum = X.entries),
    ($.options = Object.values(X.entries)));
  let J = new Set(Object.keys(X.entries));
  (($.extract = (W, Q) => {
    let Y = {};
    for (let z of W)
      if (J.has(z)) Y[z] = X.entries[z];
      else throw Error(`Key ${z} not found in enum`);
    return new cX({ ...X, checks: [], ...E.normalizeParams(Q), entries: Y });
  }),
    ($.exclude = (W, Q) => {
      let Y = { ...X.entries };
      for (let z of W)
        if (J.has(z)) delete Y[z];
        else throw Error(`Key ${z} not found in enum`);
      return new cX({ ...X, checks: [], ...E.normalizeParams(Q), entries: Y });
    }));
});
function s$($, X) {
  let J = Array.isArray($) ? Object.fromEntries($.map((W) => [W, W])) : $;
  return new cX({ type: "enum", entries: J, ...E.normalizeParams(X) });
}
function N_($, X) {
  return new cX({ type: "enum", entries: $, ...E.normalizeParams(X) });
}
var PD = q("ZodLiteral", ($, X) => {
  (gQ.init($, X),
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
  return new PD({
    type: "literal",
    values: Array.isArray($) ? $ : [$],
    ...E.normalizeParams(X),
  });
}
var ED = q("ZodFile", ($, X) => {
  (hQ.init($, X),
    s.init($, X),
    ($.min = (J, W) => $.check(r1(J, W))),
    ($.max = (J, W) => $.check(t0(J, W))),
    ($.mime = (J, W) => $.check(yX(Array.isArray(J) ? J : [J], W))));
});
function O_($) {
  return M5(ED, $);
}
var aH = q("ZodTransform", ($, X) => {
  (i0.init($, X),
    s.init($, X),
    ($._zod.parse = (J, W) => {
      J.addIssue = (Y) => {
        if (typeof Y === "string") J.issues.push(E.issue(Y, J.value, X));
        else {
          let z = Y;
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
        return Q.then((Y) => {
          return ((J.value = Y), J);
        });
      return ((J.value = Q), J);
    }));
});
function sH($) {
  return new aH({ type: "transform", transform: $ });
}
var eH = q("ZodOptional", ($, X) => {
  (uQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function j$($) {
  return new eH({ type: "optional", innerType: $ });
}
var SD = q("ZodNullable", ($, X) => {
  (mQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function f5($) {
  return new SD({ type: "nullable", innerType: $ });
}
function w_($) {
  return j$(f5($));
}
var CD = q("ZodDefault", ($, X) => {
  (lQ.init($, X),
    s.init($, X),
    ($.unwrap = () => $._zod.def.innerType),
    ($.removeDefault = $.unwrap));
});
function vD($, X) {
  return new CD({
    type: "default",
    innerType: $,
    get defaultValue() {
      return typeof X === "function" ? X() : X;
    },
  });
}
var kD = q("ZodPrefault", ($, X) => {
  (cQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function _D($, X) {
  return new kD({
    type: "prefault",
    innerType: $,
    get defaultValue() {
      return typeof X === "function" ? X() : X;
    },
  });
}
var $U = q("ZodNonOptional", ($, X) => {
  (pQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function xD($, X) {
  return new $U({ type: "nonoptional", innerType: $, ...E.normalizeParams(X) });
}
var TD = q("ZodSuccess", ($, X) => {
  (dQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function B_($) {
  return new TD({ type: "success", innerType: $ });
}
var fD = q("ZodCatch", ($, X) => {
  (iQ.init($, X),
    s.init($, X),
    ($.unwrap = () => $._zod.def.innerType),
    ($.removeCatch = $.unwrap));
});
function yD($, X) {
  return new fD({
    type: "catch",
    innerType: $,
    catchValue: typeof X === "function" ? X : () => X,
  });
}
var gD = q("ZodNaN", ($, X) => {
  (nQ.init($, X), s.init($, X));
});
function q_($) {
  return L5(gD, $);
}
var XU = q("ZodPipe", ($, X) => {
  (n0.init($, X), s.init($, X), ($.in = X.in), ($.out = X.out));
});
function y5($, X) {
  return new XU({ type: "pipe", in: $, out: X });
}
var hD = q("ZodReadonly", ($, X) => {
  (rQ.init($, X), s.init($, X));
});
function uD($) {
  return new hD({ type: "readonly", innerType: $ });
}
var mD = q("ZodTemplateLiteral", ($, X) => {
  (oQ.init($, X), s.init($, X));
});
function D_($, X) {
  return new mD({
    type: "template_literal",
    parts: $,
    ...E.normalizeParams(X),
  });
}
var lD = q("ZodLazy", ($, X) => {
  (aQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.getter()));
});
function cD($) {
  return new lD({ type: "lazy", getter: $ });
}
var pD = q("ZodPromise", ($, X) => {
  (tQ.init($, X), s.init($, X), ($.unwrap = () => $._zod.def.innerType));
});
function F_($) {
  return new pD({ type: "promise", innerType: $ });
}
var c5 = q("ZodCustom", ($, X) => {
  (sQ.init($, X), s.init($, X));
});
function dD($, X) {
  let J = new I$({ check: "custom", ...E.normalizeParams(X) });
  return ((J._zod.check = $), J);
}
function JU($, X) {
  return A5(c5, $ ?? (() => !0), X);
}
function iD($, X = {}) {
  return I5(c5, $, X);
}
function nD($, X) {
  let J = dD((W) => {
    return (
      (W.addIssue = (Q) => {
        if (typeof Q === "string")
          W.issues.push(E.issue(Q, W.value, J._zod.def));
        else {
          let Y = Q;
          if (Y.fatal) Y.continue = !1;
          (Y.code ?? (Y.code = "custom"),
            Y.input ?? (Y.input = W.value),
            Y.inst ?? (Y.inst = J),
            Y.continue ?? (Y.continue = !J._zod.def.abort),
            W.issues.push(E.issue(Y)));
        }
      }),
      $(W.value, W)
    );
  }, X);
  return J;
}
function j_($, X = { error: `Input not instance of ${$.name}` }) {
  let J = new c5({
    type: "custom",
    check: "custom",
    fn: (W) => W instanceof $,
    abort: !0,
    ...E.normalizeParams(X),
  });
  return ((J._zod.bag.Class = $), J);
}
var L_ = (...$) =>
  Z5({ Pipe: XU, Boolean: iX, String: pX, Transform: aH }, ...$);
function M_($) {
  let X = cD(() => {
    return V$([L($), z$(), _$(), g5(), $$(X), N$(L(), X)]);
  });
  return X;
}
function p5($, X) {
  return y5(sH($), X);
}
var A_ = {
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
function I_($) {
  C$({ customError: $ });
}
function Z_() {
  return C$().customError;
}
var QU = {};
F1(QU, {
  string: () => b_,
  number: () => R_,
  date: () => S_,
  boolean: () => P_,
  bigint: () => E_,
});
function b_($) {
  return WH(pX, $);
}
function R_($) {
  return UH(dX, $);
}
function P_($) {
  return KH(iX, $);
}
function E_($) {
  return VH(nX, $);
}
function S_($) {
  return NH(u5, $);
}
C$(zX());
var WU = "2025-11-25";
var rD = [WU, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"],
  z1 = "io.modelcontextprotocol/related-task",
  i5 = "2.0",
  g$ = JU(
    ($) => $ !== null && (typeof $ === "object" || typeof $ === "function"),
  ),
  oD = V$([L(), z$().int()]),
  tD = L(),
  r1$ = r$({ ttl: z$().optional(), pollInterval: z$().optional() }),
  C_ = x({ ttl: z$().optional() }),
  v_ = x({ taskId: L() }),
  YU = r$({ progressToken: oD.optional(), [z1]: v_.optional() }),
  M6 = x({ _meta: YU.optional() }),
  oX = M6.extend({ task: C_.optional() }),
  aD = ($) => oX.safeParse($).success,
  c$ = x({ method: L(), params: M6.loose().optional() }),
  S6 = x({ _meta: YU.optional() }),
  C6 = x({ method: L(), params: S6.loose().optional() }),
  p$ = r$({ _meta: YU.optional() }),
  n5 = V$([L(), z$().int()]),
  sD = x({ jsonrpc: g(i5), id: n5, ...c$.shape }).strict(),
  zU = ($) => sD.safeParse($).success,
  eD = x({ jsonrpc: g(i5), ...C6.shape }).strict(),
  $F = ($) => eD.safeParse($).success,
  GU = x({ jsonrpc: g(i5), id: n5, result: p$ }).strict(),
  tX = ($) => GU.safeParse($).success;
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
var HU = x({
  jsonrpc: g(i5),
  id: n5.optional(),
  error: x({ code: z$().int(), message: L(), data: L$().optional() }),
}).strict();
var XF = ($) => HU.safeParse($).success;
var o1$ = V$([sD, eD, GU, HU]),
  t1$ = V$([GU, HU]),
  r5 = p$.strict(),
  k_ = S6.extend({ requestId: n5.optional(), reason: L().optional() }),
  o5 = C6.extend({ method: g("notifications/cancelled"), params: k_ }),
  __ = x({
    src: L(),
    mimeType: L().optional(),
    sizes: $$(L()).optional(),
    theme: s$(["light", "dark"]).optional(),
  }),
  aX = x({ icons: $$(__).optional() }),
  W8 = x({ name: L(), title: L().optional() }),
  JF = W8.extend({
    ...W8.shape,
    ...aX.shape,
    version: L(),
    websiteUrl: L().optional(),
    description: L().optional(),
  }),
  x_ = rX(x({ applyDefaults: _$().optional() }), N$(L(), L$())),
  T_ = p5(
    ($) => {
      if ($ && typeof $ === "object" && !Array.isArray($)) {
        if (Object.keys($).length === 0) return { form: {} };
      }
      return $;
    },
    rX(
      x({ form: x_.optional(), url: g$.optional() }),
      N$(L(), L$()).optional(),
    ),
  ),
  f_ = r$({
    list: g$.optional(),
    cancel: g$.optional(),
    requests: r$({
      sampling: r$({ createMessage: g$.optional() }).optional(),
      elicitation: r$({ create: g$.optional() }).optional(),
    }).optional(),
  }),
  y_ = r$({
    list: g$.optional(),
    cancel: g$.optional(),
    requests: r$({ tools: r$({ call: g$.optional() }).optional() }).optional(),
  }),
  g_ = x({
    experimental: N$(L(), g$).optional(),
    sampling: x({ context: g$.optional(), tools: g$.optional() }).optional(),
    elicitation: T_.optional(),
    roots: x({ listChanged: _$().optional() }).optional(),
    tasks: f_.optional(),
    extensions: N$(L(), g$).optional(),
  }),
  h_ = M6.extend({ protocolVersion: L(), capabilities: g_, clientInfo: JF }),
  UU = c$.extend({ method: g("initialize"), params: h_ });
var u_ = x({
    experimental: N$(L(), g$).optional(),
    logging: g$.optional(),
    completions: g$.optional(),
    prompts: x({ listChanged: _$().optional() }).optional(),
    resources: x({
      subscribe: _$().optional(),
      listChanged: _$().optional(),
    }).optional(),
    tools: x({ listChanged: _$().optional() }).optional(),
    tasks: y_.optional(),
    extensions: N$(L(), g$).optional(),
  }),
  m_ = p$.extend({
    protocolVersion: L(),
    capabilities: u_,
    serverInfo: JF,
    instructions: L().optional(),
  }),
  KU = C6.extend({
    method: g("notifications/initialized"),
    params: S6.optional(),
  });
var t5 = c$.extend({ method: g("ping"), params: M6.optional() }),
  l_ = x({ progress: z$(), total: j$(z$()), message: j$(L()) }),
  c_ = x({ ...S6.shape, ...l_.shape, progressToken: oD }),
  a5 = C6.extend({ method: g("notifications/progress"), params: c_ }),
  p_ = M6.extend({ cursor: tD.optional() }),
  sX = c$.extend({ params: p_.optional() }),
  eX = p$.extend({ nextCursor: tD.optional() }),
  d_ = s$(["working", "input_required", "completed", "failed", "cancelled"]),
  $J = x({
    taskId: L(),
    status: d_,
    ttl: V$([z$(), g5()]),
    createdAt: L(),
    lastUpdatedAt: L(),
    pollInterval: j$(z$()),
    statusMessage: j$(L()),
  }),
  Y8 = p$.extend({ task: $J }),
  i_ = S6.merge($J),
  XJ = C6.extend({ method: g("notifications/tasks/status"), params: i_ }),
  s5 = c$.extend({
    method: g("tasks/get"),
    params: M6.extend({ taskId: L() }),
  }),
  e5 = p$.merge($J),
  $W = c$.extend({
    method: g("tasks/result"),
    params: M6.extend({ taskId: L() }),
  }),
  a1$ = p$.loose(),
  XW = sX.extend({ method: g("tasks/list") }),
  JW = eX.extend({ tasks: $$($J) }),
  QW = c$.extend({
    method: g("tasks/cancel"),
    params: M6.extend({ taskId: L() }),
  }),
  QF = p$.merge($J),
  WF = x({ uri: L(), mimeType: j$(L()), _meta: N$(L(), L$()).optional() }),
  YF = WF.extend({ text: L() }),
  VU = L().refine(
    ($) => {
      try {
        return (atob($), !0);
      } catch {
        return !1;
      }
    },
    { message: "Invalid Base64 string" },
  ),
  zF = WF.extend({ blob: VU }),
  JJ = s$(["user", "assistant"]),
  z8 = x({
    audience: $$(JJ).optional(),
    priority: z$().min(0).max(1).optional(),
    lastModified: X8.datetime({ offset: !0 }).optional(),
  }),
  GF = x({
    ...W8.shape,
    ...aX.shape,
    uri: L(),
    description: j$(L()),
    mimeType: j$(L()),
    size: j$(z$()),
    annotations: z8.optional(),
    _meta: j$(r$({})),
  }),
  n_ = x({
    ...W8.shape,
    ...aX.shape,
    uriTemplate: L(),
    description: j$(L()),
    mimeType: j$(L()),
    annotations: z8.optional(),
    _meta: j$(r$({})),
  }),
  WW = sX.extend({ method: g("resources/list") }),
  r_ = eX.extend({ resources: $$(GF) }),
  YW = sX.extend({ method: g("resources/templates/list") }),
  o_ = eX.extend({ resourceTemplates: $$(n_) }),
  NU = M6.extend({ uri: L() }),
  t_ = NU,
  zW = c$.extend({ method: g("resources/read"), params: t_ }),
  a_ = p$.extend({ contents: $$(V$([YF, zF])) }),
  s_ = C6.extend({
    method: g("notifications/resources/list_changed"),
    params: S6.optional(),
  }),
  e_ = NU,
  $x = c$.extend({ method: g("resources/subscribe"), params: e_ }),
  Xx = NU,
  Jx = c$.extend({ method: g("resources/unsubscribe"), params: Xx }),
  Qx = S6.extend({ uri: L() }),
  Wx = C6.extend({ method: g("notifications/resources/updated"), params: Qx }),
  Yx = x({ name: L(), description: j$(L()), required: j$(_$()) }),
  zx = x({
    ...W8.shape,
    ...aX.shape,
    description: j$(L()),
    arguments: j$($$(Yx)),
    _meta: j$(r$({})),
  }),
  GW = sX.extend({ method: g("prompts/list") }),
  Gx = eX.extend({ prompts: $$(zx) }),
  Hx = M6.extend({ name: L(), arguments: N$(L(), L()).optional() }),
  HW = c$.extend({ method: g("prompts/get"), params: Hx }),
  OU = x({
    type: g("text"),
    text: L(),
    annotations: z8.optional(),
    _meta: N$(L(), L$()).optional(),
  }),
  wU = x({
    type: g("image"),
    data: VU,
    mimeType: L(),
    annotations: z8.optional(),
    _meta: N$(L(), L$()).optional(),
  }),
  BU = x({
    type: g("audio"),
    data: VU,
    mimeType: L(),
    annotations: z8.optional(),
    _meta: N$(L(), L$()).optional(),
  }),
  Ux = x({
    type: g("tool_use"),
    name: L(),
    id: L(),
    input: N$(L(), L$()),
    _meta: N$(L(), L$()).optional(),
  }),
  Kx = x({
    type: g("resource"),
    resource: V$([YF, zF]),
    annotations: z8.optional(),
    _meta: N$(L(), L$()).optional(),
  }),
  Vx = GF.extend({ type: g("resource_link") }),
  qU = V$([OU, wU, BU, Vx, Kx]),
  Nx = x({ role: JJ, content: qU }),
  Ox = p$.extend({ description: L().optional(), messages: $$(Nx) }),
  wx = C6.extend({
    method: g("notifications/prompts/list_changed"),
    params: S6.optional(),
  }),
  Bx = x({
    title: L().optional(),
    readOnlyHint: _$().optional(),
    destructiveHint: _$().optional(),
    idempotentHint: _$().optional(),
    openWorldHint: _$().optional(),
  }),
  qx = x({ taskSupport: s$(["required", "optional", "forbidden"]).optional() }),
  HF = x({
    ...W8.shape,
    ...aX.shape,
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
    annotations: Bx.optional(),
    execution: qx.optional(),
    _meta: N$(L(), L$()).optional(),
  }),
  UW = sX.extend({ method: g("tools/list") }),
  Dx = eX.extend({ tools: $$(HF) }),
  KW = p$.extend({
    content: $$(qU).default([]),
    structuredContent: N$(L(), L$()).optional(),
    isError: _$().optional(),
  }),
  s1$ = KW.or(p$.extend({ toolResult: L$() })),
  Fx = oX.extend({ name: L(), arguments: N$(L(), L$()).optional() }),
  G8 = c$.extend({ method: g("tools/call"), params: Fx }),
  jx = C6.extend({
    method: g("notifications/tools/list_changed"),
    params: S6.optional(),
  }),
  e1$ = x({
    autoRefresh: _$().default(!0),
    debounceMs: z$().int().nonnegative().default(300),
  }),
  QJ = s$([
    "debug",
    "info",
    "notice",
    "warning",
    "error",
    "critical",
    "alert",
    "emergency",
  ]),
  Lx = M6.extend({ level: QJ }),
  DU = c$.extend({ method: g("logging/setLevel"), params: Lx }),
  Mx = S6.extend({ level: QJ, logger: L().optional(), data: L$() }),
  Ax = C6.extend({ method: g("notifications/message"), params: Mx }),
  Ix = x({ name: L().optional() }),
  Zx = x({
    hints: $$(Ix).optional(),
    costPriority: z$().min(0).max(1).optional(),
    speedPriority: z$().min(0).max(1).optional(),
    intelligencePriority: z$().min(0).max(1).optional(),
  }),
  bx = x({ mode: s$(["auto", "required", "none"]).optional() }),
  Rx = x({
    type: g("tool_result"),
    toolUseId: L().describe(
      "The unique identifier for the corresponding tool call.",
    ),
    content: $$(qU).default([]),
    structuredContent: x({}).loose().optional(),
    isError: _$().optional(),
    _meta: N$(L(), L$()).optional(),
  }),
  Px = l5("type", [OU, wU, BU]),
  d5 = l5("type", [OU, wU, BU, Ux, Rx]),
  Ex = x({
    role: JJ,
    content: V$([d5, $$(d5)]),
    _meta: N$(L(), L$()).optional(),
  }),
  Sx = oX.extend({
    messages: $$(Ex),
    modelPreferences: Zx.optional(),
    systemPrompt: L().optional(),
    includeContext: s$(["none", "thisServer", "allServers"]).optional(),
    temperature: z$().optional(),
    maxTokens: z$().int(),
    stopSequences: $$(L()).optional(),
    metadata: g$.optional(),
    tools: $$(HF).optional(),
    toolChoice: bx.optional(),
  }),
  Cx = c$.extend({ method: g("sampling/createMessage"), params: Sx }),
  WJ = p$.extend({
    model: L(),
    stopReason: j$(s$(["endTurn", "stopSequence", "maxTokens"]).or(L())),
    role: JJ,
    content: Px,
  }),
  FU = p$.extend({
    model: L(),
    stopReason: j$(
      s$(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(L()),
    ),
    role: JJ,
    content: V$([d5, $$(d5)]),
  }),
  vx = x({
    type: g("boolean"),
    title: L().optional(),
    description: L().optional(),
    default: _$().optional(),
  }),
  kx = x({
    type: g("string"),
    title: L().optional(),
    description: L().optional(),
    minLength: z$().optional(),
    maxLength: z$().optional(),
    format: s$(["email", "uri", "date", "date-time"]).optional(),
    default: L().optional(),
  }),
  _x = x({
    type: s$(["number", "integer"]),
    title: L().optional(),
    description: L().optional(),
    minimum: z$().optional(),
    maximum: z$().optional(),
    default: z$().optional(),
  }),
  xx = x({
    type: g("string"),
    title: L().optional(),
    description: L().optional(),
    enum: $$(L()),
    default: L().optional(),
  }),
  Tx = x({
    type: g("string"),
    title: L().optional(),
    description: L().optional(),
    oneOf: $$(x({ const: L(), title: L() })),
    default: L().optional(),
  }),
  fx = x({
    type: g("string"),
    title: L().optional(),
    description: L().optional(),
    enum: $$(L()),
    enumNames: $$(L()).optional(),
    default: L().optional(),
  }),
  yx = V$([xx, Tx]),
  gx = x({
    type: g("array"),
    title: L().optional(),
    description: L().optional(),
    minItems: z$().optional(),
    maxItems: z$().optional(),
    items: x({ type: g("string"), enum: $$(L()) }),
    default: $$(L()).optional(),
  }),
  hx = x({
    type: g("array"),
    title: L().optional(),
    description: L().optional(),
    minItems: z$().optional(),
    maxItems: z$().optional(),
    items: x({ anyOf: $$(x({ const: L(), title: L() })) }),
    default: $$(L()).optional(),
  }),
  ux = V$([gx, hx]),
  mx = V$([fx, yx, ux]),
  lx = V$([mx, vx, kx, _x]),
  cx = oX.extend({
    mode: g("form").optional(),
    message: L(),
    requestedSchema: x({
      type: g("object"),
      properties: N$(L(), lx),
      required: $$(L()).optional(),
    }),
  }),
  px = oX.extend({
    mode: g("url"),
    message: L(),
    elicitationId: L(),
    url: L().url(),
  }),
  dx = V$([cx, px]),
  ix = c$.extend({ method: g("elicitation/create"), params: dx }),
  nx = S6.extend({ elicitationId: L() }),
  rx = C6.extend({
    method: g("notifications/elicitation/complete"),
    params: nx,
  }),
  H8 = p$.extend({
    action: s$(["accept", "decline", "cancel"]),
    content: p5(
      ($) => ($ === null ? void 0 : $),
      N$(L(), V$([L(), z$(), _$(), $$(L())])).optional(),
    ),
  }),
  ox = x({ type: g("ref/resource"), uri: L() });
var tx = x({ type: g("ref/prompt"), name: L() }),
  ax = M6.extend({
    ref: V$([tx, ox]),
    argument: x({ name: L(), value: L() }),
    context: x({ arguments: N$(L(), L()).optional() }).optional(),
  }),
  VW = c$.extend({ method: g("completion/complete"), params: ax });
function UF($) {
  if ($.params.ref.type !== "ref/prompt")
    throw TypeError(
      `Expected CompleteRequestPrompt, but got ${$.params.ref.type}`,
    );
}
function KF($) {
  if ($.params.ref.type !== "ref/resource")
    throw TypeError(
      `Expected CompleteRequestResourceTemplate, but got ${$.params.ref.type}`,
    );
}
var sx = p$.extend({
    completion: r$({
      values: $$(L()).max(100),
      total: j$(z$().int()),
      hasMore: j$(_$()),
    }),
  }),
  ex = x({
    uri: L().startsWith("file://"),
    name: L().optional(),
    _meta: N$(L(), L$()).optional(),
  }),
  $T = c$.extend({ method: g("roots/list"), params: M6.optional() }),
  jU = p$.extend({ roots: $$(ex) }),
  XT = C6.extend({
    method: g("notifications/roots/list_changed"),
    params: S6.optional(),
  }),
  $0$ = V$([
    t5,
    UU,
    VW,
    DU,
    HW,
    GW,
    WW,
    YW,
    zW,
    $x,
    Jx,
    G8,
    UW,
    s5,
    $W,
    XW,
    QW,
  ]),
  X0$ = V$([o5, a5, KU, XT, XJ]),
  J0$ = V$([r5, WJ, FU, H8, jU, e5, JW, Y8]),
  Q0$ = V$([t5, Cx, ix, $T, s5, $W, XW, QW]),
  W0$ = V$([o5, a5, Ax, Wx, s_, jx, wx, XJ, rx]),
  Y0$ = V$([r5, m_, sx, Ox, Gx, r_, o_, a_, KW, Dx, e5, JW, Y8]);
class h extends Error {
  constructor($, X, J) {
    super(`MCP error ${$}: ${X}`);
    ((this.code = $), (this.data = J), (this.name = "McpError"));
  }
  static fromError($, X, J) {
    if ($ === m.UrlElicitationRequired && J) {
      let W = J;
      if (W.elicitations) return new VF(W.elicitations, X);
    }
    return new h($, X, J);
  }
}
class VF extends h {
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
var OF = Symbol("Let zodToJsonSchema decide on which parser to use");
var NF = {
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
  wF = ($) => (typeof $ === "string" ? { ...NF, name: $ } : { ...NF, ...$ });
var BF = ($) => {
  let X = wF($),
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
      Object.entries(X.definitions).map(([W, Q]) => [
        Q._def,
        {
          def: Q._def,
          path: [...X.basePath, X.definitionPath, W],
          jsonSchema: void 0,
        },
      ]),
    ),
  };
};
function LU($, X, J, W) {
  if (!W?.errorMessages) return;
  if (J) $.errorMessage = { ...$.errorMessage, [X]: J };
}
function J$($, X, J, W, Q) {
  (($[X] = J), LU($, X, W, Q));
}
var NW = ($, X) => {
  let J = 0;
  for (; J < $.length && J < X.length; J++) if ($[J] !== X[J]) break;
  return [($.length - J).toString(), ...X.slice(J)].join("/");
};
function Z$($) {
  if ($.target !== "openAi") return {};
  let X = [...$.basePath, $.definitionPath, $.openAiAnyTypeName];
  return (
    ($.flags.hasReferencedOpenAiAnyType = !0),
    { $ref: $.$refStrategy === "relative" ? NW(X, $.currentPath) : X.join("/") }
  );
}
function qF($, X) {
  let J = { type: "array" };
  if ($.type?._def && $.type?._def?.typeName !== R.ZodAny)
    J.items = p($.type._def, {
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
function DF($, X) {
  let J = { type: "integer", format: "int64" };
  if (!$.checks) return J;
  for (let W of $.checks)
    switch (W.kind) {
      case "min":
        if (X.target === "jsonSchema7")
          if (W.inclusive) J$(J, "minimum", W.value, W.message, X);
          else J$(J, "exclusiveMinimum", W.value, W.message, X);
        else {
          if (!W.inclusive) J.exclusiveMinimum = !0;
          J$(J, "minimum", W.value, W.message, X);
        }
        break;
      case "max":
        if (X.target === "jsonSchema7")
          if (W.inclusive) J$(J, "maximum", W.value, W.message, X);
          else J$(J, "exclusiveMaximum", W.value, W.message, X);
        else {
          if (!W.inclusive) J.exclusiveMaximum = !0;
          J$(J, "maximum", W.value, W.message, X);
        }
        break;
      case "multipleOf":
        J$(J, "multipleOf", W.value, W.message, X);
        break;
    }
  return J;
}
function FF() {
  return { type: "boolean" };
}
function OW($, X) {
  return p($.type._def, X);
}
var jF = ($, X) => {
  return p($.innerType._def, X);
};
function MU($, X, J) {
  let W = J ?? X.dateStrategy;
  if (Array.isArray(W)) return { anyOf: W.map((Q, Y) => MU($, X, Q)) };
  switch (W) {
    case "string":
    case "format:date-time":
      return { type: "string", format: "date-time" };
    case "format:date":
      return { type: "string", format: "date" };
    case "integer":
      return JT($, X);
  }
}
var JT = ($, X) => {
  let J = { type: "integer", format: "unix-time" };
  if (X.target === "openApi3") return J;
  for (let W of $.checks)
    switch (W.kind) {
      case "min":
        J$(J, "minimum", W.value, W.message, X);
        break;
      case "max":
        J$(J, "maximum", W.value, W.message, X);
        break;
    }
  return J;
};
function LF($, X) {
  return { ...p($.innerType._def, X), default: $.defaultValue() };
}
function MF($, X) {
  return X.effectStrategy === "input" ? p($.schema._def, X) : Z$(X);
}
function AF($) {
  return { type: "string", enum: Array.from($.values) };
}
var QT = ($) => {
  if ("type" in $ && $.type === "string") return !1;
  return "allOf" in $;
};
function IF($, X) {
  let J = [
      p($.left._def, { ...X, currentPath: [...X.currentPath, "allOf", "0"] }),
      p($.right._def, { ...X, currentPath: [...X.currentPath, "allOf", "1"] }),
    ].filter((Y) => !!Y),
    W =
      X.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0,
    Q = [];
  return (
    J.forEach((Y) => {
      if (QT(Y)) {
        if ((Q.push(...Y.allOf), Y.unevaluatedProperties === void 0))
          W = void 0;
      } else {
        let z = Y;
        if ("additionalProperties" in Y && Y.additionalProperties === !1) {
          let { additionalProperties: G, ...H } = Y;
          z = H;
        } else W = void 0;
        Q.push(z);
      }
    }),
    Q.length ? { allOf: Q, ...W } : void 0
  );
}
function ZF($, X) {
  let J = typeof $.value;
  if (J !== "bigint" && J !== "number" && J !== "boolean" && J !== "string")
    return { type: Array.isArray($.value) ? "array" : "object" };
  if (X.target === "openApi3")
    return { type: J === "bigint" ? "integer" : J, enum: [$.value] };
  return { type: J === "bigint" ? "integer" : J, const: $.value };
}
var AU = void 0,
  c6 = {
    cuid: /^[cC][^\s-]{8,}$/,
    cuid2: /^[0-9a-z]+$/,
    ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
    email:
      /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
    emoji: () => {
      if (AU === void 0)
        AU = RegExp(
          "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
          "u",
        );
      return AU;
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
function wW($, X) {
  let J = { type: "string" };
  if ($.checks)
    for (let W of $.checks)
      switch (W.kind) {
        case "min":
          J$(
            J,
            "minLength",
            typeof J.minLength === "number"
              ? Math.max(J.minLength, W.value)
              : W.value,
            W.message,
            X,
          );
          break;
        case "max":
          J$(
            J,
            "maxLength",
            typeof J.maxLength === "number"
              ? Math.min(J.maxLength, W.value)
              : W.value,
            W.message,
            X,
          );
          break;
        case "email":
          switch (X.emailStrategy) {
            case "format:email":
              p6(J, "email", W.message, X);
              break;
            case "format:idn-email":
              p6(J, "idn-email", W.message, X);
              break;
            case "pattern:zod":
              e$(J, c6.email, W.message, X);
              break;
          }
          break;
        case "url":
          p6(J, "uri", W.message, X);
          break;
        case "uuid":
          p6(J, "uuid", W.message, X);
          break;
        case "regex":
          e$(J, W.regex, W.message, X);
          break;
        case "cuid":
          e$(J, c6.cuid, W.message, X);
          break;
        case "cuid2":
          e$(J, c6.cuid2, W.message, X);
          break;
        case "startsWith":
          e$(J, RegExp(`^${IU(W.value, X)}`), W.message, X);
          break;
        case "endsWith":
          e$(J, RegExp(`${IU(W.value, X)}$`), W.message, X);
          break;
        case "datetime":
          p6(J, "date-time", W.message, X);
          break;
        case "date":
          p6(J, "date", W.message, X);
          break;
        case "time":
          p6(J, "time", W.message, X);
          break;
        case "duration":
          p6(J, "duration", W.message, X);
          break;
        case "length":
          (J$(
            J,
            "minLength",
            typeof J.minLength === "number"
              ? Math.max(J.minLength, W.value)
              : W.value,
            W.message,
            X,
          ),
            J$(
              J,
              "maxLength",
              typeof J.maxLength === "number"
                ? Math.min(J.maxLength, W.value)
                : W.value,
              W.message,
              X,
            ));
          break;
        case "includes": {
          e$(J, RegExp(IU(W.value, X)), W.message, X);
          break;
        }
        case "ip": {
          if (W.version !== "v6") p6(J, "ipv4", W.message, X);
          if (W.version !== "v4") p6(J, "ipv6", W.message, X);
          break;
        }
        case "base64url":
          e$(J, c6.base64url, W.message, X);
          break;
        case "jwt":
          e$(J, c6.jwt, W.message, X);
          break;
        case "cidr": {
          if (W.version !== "v6") e$(J, c6.ipv4Cidr, W.message, X);
          if (W.version !== "v4") e$(J, c6.ipv6Cidr, W.message, X);
          break;
        }
        case "emoji":
          e$(J, c6.emoji(), W.message, X);
          break;
        case "ulid": {
          e$(J, c6.ulid, W.message, X);
          break;
        }
        case "base64": {
          switch (X.base64Strategy) {
            case "format:binary": {
              p6(J, "binary", W.message, X);
              break;
            }
            case "contentEncoding:base64": {
              J$(J, "contentEncoding", "base64", W.message, X);
              break;
            }
            case "pattern:zod": {
              e$(J, c6.base64, W.message, X);
              break;
            }
          }
          break;
        }
        case "nanoid":
          e$(J, c6.nanoid, W.message, X);
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
          ((Q) => {})(W);
      }
  return J;
}
function IU($, X) {
  return X.patternStrategy === "escape" ? YT($) : $;
}
var WT = new Set(
  "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789",
);
function YT($) {
  let X = "";
  for (let J = 0; J < $.length; J++) {
    if (!WT.has($[J])) X += "\\";
    X += $[J];
  }
  return X;
}
function p6($, X, J, W) {
  if ($.format || $.anyOf?.some((Q) => Q.format)) {
    if (!$.anyOf) $.anyOf = [];
    if ($.format) {
      if (
        ($.anyOf.push({
          format: $.format,
          ...($.errorMessage &&
            W.errorMessages && {
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
      ...(J && W.errorMessages && { errorMessage: { format: J } }),
    });
  } else J$($, "format", X, J, W);
}
function e$($, X, J, W) {
  if ($.pattern || $.allOf?.some((Q) => Q.pattern)) {
    if (!$.allOf) $.allOf = [];
    if ($.pattern) {
      if (
        ($.allOf.push({
          pattern: $.pattern,
          ...($.errorMessage &&
            W.errorMessages && {
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
      pattern: bF(X, W),
      ...(J && W.errorMessages && { errorMessage: { pattern: J } }),
    });
  } else J$($, "pattern", bF(X, W), J, W);
}
function bF($, X) {
  if (!X.applyRegexFlags || !$.flags) return $.source;
  let J = {
      i: $.flags.includes("i"),
      m: $.flags.includes("m"),
      s: $.flags.includes("s"),
    },
    W = J.i ? $.source.toLowerCase() : $.source,
    Q = "",
    Y = !1,
    z = !1,
    G = !1;
  for (let H = 0; H < W.length; H++) {
    if (Y) {
      ((Q += W[H]), (Y = !1));
      continue;
    }
    if (J.i) {
      if (z) {
        if (W[H].match(/[a-z]/)) {
          if (G)
            ((Q += W[H]), (Q += `${W[H - 2]}-${W[H]}`.toUpperCase()), (G = !1));
          else if (W[H + 1] === "-" && W[H + 2]?.match(/[a-z]/))
            ((Q += W[H]), (G = !0));
          else Q += `${W[H]}${W[H].toUpperCase()}`;
          continue;
        }
      } else if (W[H].match(/[a-z]/)) {
        Q += `[${W[H]}${W[H].toUpperCase()}]`;
        continue;
      }
    }
    if (J.m) {
      if (W[H] === "^") {
        Q += `(^|(?<=[\r
]))`;
        continue;
      } else if (W[H] === "$") {
        Q += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (J.s && W[H] === ".") {
      Q += z
        ? `${W[H]}\r
`
        : `[${W[H]}\r
]`;
      continue;
    }
    if (((Q += W[H]), W[H] === "\\")) Y = !0;
    else if (z && W[H] === "]") z = !1;
    else if (!z && W[H] === "[") z = !0;
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
function BW($, X) {
  if (X.target === "openAi")
    console.warn(
      "Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.",
    );
  if (X.target === "openApi3" && $.keyType?._def.typeName === R.ZodEnum)
    return {
      type: "object",
      required: $.keyType._def.values,
      properties: $.keyType._def.values.reduce(
        (W, Q) => ({
          ...W,
          [Q]:
            p($.valueType._def, {
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
      p($.valueType._def, {
        ...X,
        currentPath: [...X.currentPath, "additionalProperties"],
      }) ?? X.allowedAdditionalProperties,
  };
  if (X.target === "openApi3") return J;
  if (
    $.keyType?._def.typeName === R.ZodString &&
    $.keyType._def.checks?.length
  ) {
    let { type: W, ...Q } = wW($.keyType._def, X);
    return { ...J, propertyNames: Q };
  } else if ($.keyType?._def.typeName === R.ZodEnum)
    return { ...J, propertyNames: { enum: $.keyType._def.values } };
  else if (
    $.keyType?._def.typeName === R.ZodBranded &&
    $.keyType._def.type._def.typeName === R.ZodString &&
    $.keyType._def.type._def.checks?.length
  ) {
    let { type: W, ...Q } = OW($.keyType._def, X);
    return { ...J, propertyNames: Q };
  }
  return J;
}
function RF($, X) {
  if (X.mapStrategy === "record") return BW($, X);
  let J =
      p($.keyType._def, {
        ...X,
        currentPath: [...X.currentPath, "items", "items", "0"],
      }) || Z$(X),
    W =
      p($.valueType._def, {
        ...X,
        currentPath: [...X.currentPath, "items", "items", "1"],
      }) || Z$(X);
  return {
    type: "array",
    maxItems: 125,
    items: { type: "array", items: [J, W], minItems: 2, maxItems: 2 },
  };
}
function PF($) {
  let X = $.values,
    W = Object.keys($.values)
      .filter((Y) => {
        return typeof X[X[Y]] !== "number";
      })
      .map((Y) => X[Y]),
    Q = Array.from(new Set(W.map((Y) => typeof Y)));
  return {
    type:
      Q.length === 1
        ? Q[0] === "string"
          ? "string"
          : "number"
        : ["string", "number"],
    enum: W,
  };
}
function EF($) {
  return $.target === "openAi"
    ? void 0
    : { not: Z$({ ...$, currentPath: [...$.currentPath, "not"] }) };
}
function SF($) {
  return $.target === "openApi3"
    ? { enum: ["null"], nullable: !0 }
    : { type: "null" };
}
var YJ = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null",
};
function vF($, X) {
  if (X.target === "openApi3") return CF($, X);
  let J = $.options instanceof Map ? Array.from($.options.values()) : $.options;
  if (
    J.every(
      (W) => W._def.typeName in YJ && (!W._def.checks || !W._def.checks.length),
    )
  ) {
    let W = J.reduce((Q, Y) => {
      let z = YJ[Y._def.typeName];
      return z && !Q.includes(z) ? [...Q, z] : Q;
    }, []);
    return { type: W.length > 1 ? W : W[0] };
  } else if (
    J.every((W) => W._def.typeName === "ZodLiteral" && !W.description)
  ) {
    let W = J.reduce((Q, Y) => {
      let z = typeof Y._def.value;
      switch (z) {
        case "string":
        case "number":
        case "boolean":
          return [...Q, z];
        case "bigint":
          return [...Q, "integer"];
        case "object":
          if (Y._def.value === null) return [...Q, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return Q;
      }
    }, []);
    if (W.length === J.length) {
      let Q = W.filter((Y, z, G) => G.indexOf(Y) === z);
      return {
        type: Q.length > 1 ? Q : Q[0],
        enum: J.reduce((Y, z) => {
          return Y.includes(z._def.value) ? Y : [...Y, z._def.value];
        }, []),
      };
    }
  } else if (J.every((W) => W._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: J.reduce(
        (W, Q) => [...W, ...Q._def.values.filter((Y) => !W.includes(Y))],
        [],
      ),
    };
  return CF($, X);
}
var CF = ($, X) => {
  let J = (
    $.options instanceof Map ? Array.from($.options.values()) : $.options
  )
    .map((W, Q) =>
      p(W._def, { ...X, currentPath: [...X.currentPath, "anyOf", `${Q}`] }),
    )
    .filter(
      (W) =>
        !!W &&
        (!X.strictUnions ||
          (typeof W === "object" && Object.keys(W).length > 0)),
    );
  return J.length ? { anyOf: J } : void 0;
};
function kF($, X) {
  if (
    ["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(
      $.innerType._def.typeName,
    ) &&
    (!$.innerType._def.checks || !$.innerType._def.checks.length)
  ) {
    if (X.target === "openApi3")
      return { type: YJ[$.innerType._def.typeName], nullable: !0 };
    return { type: [YJ[$.innerType._def.typeName], "null"] };
  }
  if (X.target === "openApi3") {
    let W = p($.innerType._def, { ...X, currentPath: [...X.currentPath] });
    if (W && "$ref" in W) return { allOf: [W], nullable: !0 };
    return W && { ...W, nullable: !0 };
  }
  let J = p($.innerType._def, {
    ...X,
    currentPath: [...X.currentPath, "anyOf", "0"],
  });
  return J && { anyOf: [J, { type: "null" }] };
}
function _F($, X) {
  let J = { type: "number" };
  if (!$.checks) return J;
  for (let W of $.checks)
    switch (W.kind) {
      case "int":
        ((J.type = "integer"), LU(J, "type", W.message, X));
        break;
      case "min":
        if (X.target === "jsonSchema7")
          if (W.inclusive) J$(J, "minimum", W.value, W.message, X);
          else J$(J, "exclusiveMinimum", W.value, W.message, X);
        else {
          if (!W.inclusive) J.exclusiveMinimum = !0;
          J$(J, "minimum", W.value, W.message, X);
        }
        break;
      case "max":
        if (X.target === "jsonSchema7")
          if (W.inclusive) J$(J, "maximum", W.value, W.message, X);
          else J$(J, "exclusiveMaximum", W.value, W.message, X);
        else {
          if (!W.inclusive) J.exclusiveMaximum = !0;
          J$(J, "maximum", W.value, W.message, X);
        }
        break;
      case "multipleOf":
        J$(J, "multipleOf", W.value, W.message, X);
        break;
    }
  return J;
}
function xF($, X) {
  let J = X.target === "openAi",
    W = { type: "object", properties: {} },
    Q = [],
    Y = $.shape();
  for (let G in Y) {
    let H = Y[G];
    if (H === void 0 || H._def === void 0) continue;
    let U = GT(H);
    if (U && J) {
      if (H._def.typeName === "ZodOptional") H = H._def.innerType;
      if (!H.isNullable()) H = H.nullable();
      U = !1;
    }
    let K = p(H._def, {
      ...X,
      currentPath: [...X.currentPath, "properties", G],
      propertyPath: [...X.currentPath, "properties", G],
    });
    if (K === void 0) continue;
    if (((W.properties[G] = K), !U)) Q.push(G);
  }
  if (Q.length) W.required = Q;
  let z = zT($, X);
  if (z !== void 0) W.additionalProperties = z;
  return W;
}
function zT($, X) {
  if ($.catchall._def.typeName !== "ZodNever")
    return p($.catchall._def, {
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
function GT($) {
  try {
    return $.isOptional();
  } catch {
    return !0;
  }
}
var TF = ($, X) => {
  if (X.currentPath.toString() === X.propertyPath?.toString())
    return p($.innerType._def, X);
  let J = p($.innerType._def, {
    ...X,
    currentPath: [...X.currentPath, "anyOf", "1"],
  });
  return J ? { anyOf: [{ not: Z$(X) }, J] } : Z$(X);
};
var fF = ($, X) => {
  if (X.pipeStrategy === "input") return p($.in._def, X);
  else if (X.pipeStrategy === "output") return p($.out._def, X);
  let J = p($.in._def, { ...X, currentPath: [...X.currentPath, "allOf", "0"] }),
    W = p($.out._def, {
      ...X,
      currentPath: [...X.currentPath, "allOf", J ? "1" : "0"],
    });
  return { allOf: [J, W].filter((Q) => Q !== void 0) };
};
function yF($, X) {
  return p($.type._def, X);
}
function gF($, X) {
  let W = {
    type: "array",
    uniqueItems: !0,
    items: p($.valueType._def, {
      ...X,
      currentPath: [...X.currentPath, "items"],
    }),
  };
  if ($.minSize) J$(W, "minItems", $.minSize.value, $.minSize.message, X);
  if ($.maxSize) J$(W, "maxItems", $.maxSize.value, $.maxSize.message, X);
  return W;
}
function hF($, X) {
  if ($.rest)
    return {
      type: "array",
      minItems: $.items.length,
      items: $.items
        .map((J, W) =>
          p(J._def, { ...X, currentPath: [...X.currentPath, "items", `${W}`] }),
        )
        .reduce((J, W) => (W === void 0 ? J : [...J, W]), []),
      additionalItems: p($.rest._def, {
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
        .map((J, W) =>
          p(J._def, { ...X, currentPath: [...X.currentPath, "items", `${W}`] }),
        )
        .reduce((J, W) => (W === void 0 ? J : [...J, W]), []),
    };
}
function uF($) {
  return { not: Z$($) };
}
function mF($) {
  return Z$($);
}
var lF = ($, X) => {
  return p($.innerType._def, X);
};
var cF = ($, X, J) => {
  switch (X) {
    case R.ZodString:
      return wW($, J);
    case R.ZodNumber:
      return _F($, J);
    case R.ZodObject:
      return xF($, J);
    case R.ZodBigInt:
      return DF($, J);
    case R.ZodBoolean:
      return FF();
    case R.ZodDate:
      return MU($, J);
    case R.ZodUndefined:
      return uF(J);
    case R.ZodNull:
      return SF(J);
    case R.ZodArray:
      return qF($, J);
    case R.ZodUnion:
    case R.ZodDiscriminatedUnion:
      return vF($, J);
    case R.ZodIntersection:
      return IF($, J);
    case R.ZodTuple:
      return hF($, J);
    case R.ZodRecord:
      return BW($, J);
    case R.ZodLiteral:
      return ZF($, J);
    case R.ZodEnum:
      return AF($);
    case R.ZodNativeEnum:
      return PF($);
    case R.ZodNullable:
      return kF($, J);
    case R.ZodOptional:
      return TF($, J);
    case R.ZodMap:
      return RF($, J);
    case R.ZodSet:
      return gF($, J);
    case R.ZodLazy:
      return () => $.getter()._def;
    case R.ZodPromise:
      return yF($, J);
    case R.ZodNaN:
    case R.ZodNever:
      return EF(J);
    case R.ZodEffects:
      return MF($, J);
    case R.ZodAny:
      return Z$(J);
    case R.ZodUnknown:
      return mF(J);
    case R.ZodDefault:
      return LF($, J);
    case R.ZodBranded:
      return OW($, J);
    case R.ZodReadonly:
      return lF($, J);
    case R.ZodCatch:
      return jF($, J);
    case R.ZodPipeline:
      return fF($, J);
    case R.ZodFunction:
    case R.ZodVoid:
    case R.ZodSymbol:
      return;
    default:
      return ((W) => {
        return;
      })(X);
  }
};
function p($, X, J = !1) {
  let W = X.seen.get($);
  if (X.override) {
    let G = X.override?.($, X, W, J);
    if (G !== OF) return G;
  }
  if (W && !J) {
    let G = HT(W, X);
    if (G !== void 0) return G;
  }
  let Q = { def: $, path: X.currentPath, jsonSchema: void 0 };
  X.seen.set($, Q);
  let Y = cF($, $.typeName, X),
    z = typeof Y === "function" ? p(Y(), X) : Y;
  if (z) UT($, X, z);
  if (X.postProcess) {
    let G = X.postProcess(z, $, X);
    return ((Q.jsonSchema = z), G);
  }
  return ((Q.jsonSchema = z), z);
}
var HT = ($, X) => {
    switch (X.$refStrategy) {
      case "root":
        return { $ref: $.path.join("/") };
      case "relative":
        return { $ref: NW(X.currentPath, $.path) };
      case "none":
      case "seen": {
        if (
          $.path.length < X.currentPath.length &&
          $.path.every((J, W) => X.currentPath[W] === J)
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
  UT = ($, X, J) => {
    if ($.description) {
      if (((J.description = $.description), X.markdownDescription))
        J.markdownDescription = $.description;
    }
    return J;
  };
var ZU = ($, X) => {
  let J = BF(X),
    W =
      typeof X === "object" && X.definitions
        ? Object.entries(X.definitions).reduce(
            (H, [U, K]) => ({
              ...H,
              [U]:
                p(
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
    Y =
      p(
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
  if (z !== void 0) Y.title = z;
  if (J.flags.hasReferencedOpenAiAnyType) {
    if (!W) W = {};
    if (!W[J.openAiAnyTypeName])
      W[J.openAiAnyTypeName] = {
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
      ? W
        ? { ...Y, [J.definitionPath]: W }
        : Y
      : {
          $ref: [
            ...(J.$refStrategy === "relative" ? [] : J.basePath),
            J.definitionPath,
            Q,
          ].join("/"),
          [J.definitionPath]: { ...W, [Q]: Y },
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
function KT($) {
  if (!$) return "draft-7";
  if ($ === "jsonSchema7" || $ === "draft-7") return "draft-7";
  if ($ === "jsonSchema2019-09" || $ === "draft-2020-12")
    return "draft-2020-12";
  return "draft-7";
}
function bU($, X) {
  if (E6($))
    return e0($, { target: KT(X?.target), io: X?.pipeStrategy ?? "input" });
  return ZU($, {
    strictUnions: X?.strictUnions ?? !0,
    pipeStrategy: X?.pipeStrategy ?? "input",
  });
}
function RU($) {
  let J = W1($)?.method;
  if (!J) throw Error("Schema is missing a method literal");
  let W = C5(J);
  if (typeof W !== "string")
    throw Error("Schema method literal must be a string");
  return W;
}
function PU($, X) {
  let J = Q1($, X);
  if (!J.success) throw J.error;
  return J.data;
}
var VT = 60000;
class EU {
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
      this.setNotificationHandler(o5, (X) => {
        this._oncancel(X);
      }),
      this.setNotificationHandler(a5, (X) => {
        this._onprogress(X);
      }),
      this.setRequestHandler(t5, (X) => ({})),
      (this._taskStore = $?.taskStore),
      (this._taskMessageQueue = $?.taskMessageQueue),
      this._taskStore)
    )
      (this.setRequestHandler(s5, async (X, J) => {
        let W = await this._taskStore.getTask(X.params.taskId, J.sessionId);
        if (!W)
          throw new h(
            m.InvalidParams,
            "Failed to retrieve task: Task not found",
          );
        return { ...W };
      }),
        this.setRequestHandler($W, async (X, J) => {
          let W = async () => {
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
            let Y = await this._taskStore.getTask(Q, J.sessionId);
            if (!Y) throw new h(m.InvalidParams, `Task not found: ${Q}`);
            if (!G1(Y.status))
              return (await this._waitForTaskUpdate(Q, J.signal), await W());
            if (G1(Y.status)) {
              let z = await this._taskStore.getTaskResult(Q, J.sessionId);
              return (
                this._clearTaskQueue(Q),
                { ...z, _meta: { ...z._meta, [z1]: { taskId: Q } } }
              );
            }
            return await W();
          };
          return await W();
        }),
        this.setRequestHandler(XW, async (X, J) => {
          try {
            let { tasks: W, nextCursor: Q } = await this._taskStore.listTasks(
              X.params?.cursor,
              J.sessionId,
            );
            return { tasks: W, nextCursor: Q, _meta: {} };
          } catch (W) {
            throw new h(
              m.InvalidParams,
              `Failed to list tasks: ${W instanceof Error ? W.message : String(W)}`,
            );
          }
        }),
        this.setRequestHandler(QW, async (X, J) => {
          try {
            let W = await this._taskStore.getTask(X.params.taskId, J.sessionId);
            if (!W)
              throw new h(
                m.InvalidParams,
                `Task not found: ${X.params.taskId}`,
              );
            if (G1(W.status))
              throw new h(
                m.InvalidParams,
                `Cannot cancel task in terminal status: ${W.status}`,
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
          } catch (W) {
            if (W instanceof h) throw W;
            throw new h(
              m.InvalidRequest,
              `Failed to cancel task: ${W instanceof Error ? W.message : String(W)}`,
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
  _setupTimeout($, X, J, W, Q = !1) {
    this._timeoutInfo.set($, {
      timeoutId: setTimeout(W, X),
      startTime: Date.now(),
      timeout: X,
      maxTotalTimeout: J,
      resetTimeoutOnProgress: Q,
      onTimeout: W,
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
    let W = this._transport?.onmessage;
    ((this._transport.onmessage = (Q, Y) => {
      if ((W?.(Q, Y), tX(Q) || XF(Q))) this._onresponse(Q);
      else if (zU(Q)) this._onrequest(Q, Y);
      else if ($F(Q)) this._onnotification(Q);
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
      W = this._transport,
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
          W?.sessionId,
        ).catch((K) =>
          this._onerror(Error(`Failed to enqueue error response: ${K}`)),
        );
      else
        W?.send(U).catch((K) =>
          this._onerror(Error(`Failed to send an error response: ${K}`)),
        );
      return;
    }
    let Y = new AbortController();
    this._requestHandlerAbortControllers.set($.id, Y);
    let z = aD($.params) ? $.params.task : void 0,
      G = this._taskStore ? this.requestTaskStore($, W?.sessionId) : void 0,
      H = {
        signal: Y.signal,
        sessionId: W?.sessionId,
        _meta: $.params?._meta,
        sendNotification: async (U) => {
          if (Y.signal.aborted) return;
          let K = { relatedRequestId: $.id };
          if (Q) K.relatedTask = { taskId: Q };
          await this.notification(U, K);
        },
        sendRequest: async (U, K, V) => {
          if (Y.signal.aborted)
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
          if (Y.signal.aborted) return;
          let K = { result: U, jsonrpc: "2.0", id: $.id };
          if (Q && this._taskMessageQueue)
            await this._enqueueTaskMessage(
              Q,
              { type: "response", message: K, timestamp: Date.now() },
              W?.sessionId,
            );
          else await W?.send(K);
        },
        async (U) => {
          if (Y.signal.aborted) return;
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
              W?.sessionId,
            );
          else await W?.send(K);
        },
      )
      .catch((U) => this._onerror(Error(`Failed to send response: ${U}`)))
      .finally(() => {
        if (this._requestHandlerAbortControllers.get($.id) === Y)
          this._requestHandlerAbortControllers.delete($.id);
      });
  }
  _onprogress($) {
    let { progressToken: X, ...J } = $.params,
      W = Number(X),
      Q = this._progressHandlers.get(W);
    if (!Q) {
      this._onerror(
        Error(
          `Received a progress notification for an unknown token: ${JSON.stringify($)}`,
        ),
      );
      return;
    }
    let Y = this._responseHandlers.get(W),
      z = this._timeoutInfo.get(W);
    if (z && Y && z.resetTimeoutOnProgress)
      try {
        this._resetTimeout(W);
      } catch (G) {
        (this._responseHandlers.delete(W),
          this._progressHandlers.delete(W),
          this._cleanupTimeout(W),
          Y(G));
        return;
      }
    Q(J);
  }
  _onresponse($) {
    let X = Number($.id),
      J = this._requestResolvers.get(X);
    if (J) {
      if ((this._requestResolvers.delete(X), tX($))) J($);
      else {
        let Y = new h($.error.code, $.error.message, $.error.data);
        J(Y);
      }
      return;
    }
    let W = this._responseHandlers.get(X);
    if (W === void 0) {
      this._onerror(
        Error(
          `Received a response for an unknown message ID: ${JSON.stringify($)}`,
        ),
      );
      return;
    }
    (this._responseHandlers.delete(X), this._cleanupTimeout(X));
    let Q = !1;
    if (tX($) && $.result && typeof $.result === "object") {
      let Y = $.result;
      if (Y.task && typeof Y.task === "object") {
        let z = Y.task;
        if (typeof z.taskId === "string")
          ((Q = !0), this._taskProgressTokens.set(z.taskId, X));
      }
    }
    if (!Q) this._progressHandlers.delete(X);
    if (tX($)) W($);
    else {
      let Y = h.fromError($.error.code, $.error.message, $.error.data);
      W(Y);
    }
  }
  get transport() {
    return this._transport;
  }
  async close() {
    await this._transport?.close();
  }
  async *requestStream($, X, J) {
    let { task: W } = J ?? {};
    if (!W) {
      try {
        yield { type: "result", result: await this.request($, X, J) };
      } catch (Y) {
        yield {
          type: "error",
          error: Y instanceof h ? Y : new h(m.InternalError, String(Y)),
        };
      }
      return;
    }
    let Q;
    try {
      let Y = await this.request($, Y8, J);
      if (Y.task)
        ((Q = Y.task.taskId), yield { type: "taskCreated", task: Y.task });
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
    } catch (Y) {
      yield {
        type: "error",
        error: Y instanceof h ? Y : new h(m.InternalError, String(Y)),
      };
    }
  }
  request($, X, J) {
    let {
      relatedRequestId: W,
      resumptionToken: Q,
      onresumptiontoken: Y,
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
              { relatedRequestId: W, resumptionToken: Q, onresumptiontoken: Y },
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
      let w = J?.timeout ?? VT,
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
            relatedRequestId: W,
            resumptionToken: Q,
            onresumptiontoken: Y,
          })
          .catch((j) => {
            (this._cleanupTimeout(V), U(j));
          });
    });
  }
  async getTask($, X) {
    return this.request({ method: "tasks/get", params: $ }, e5, X);
  }
  async getTaskResult($, X, J) {
    return this.request({ method: "tasks/result", params: $ }, X, J);
  }
  async listTasks($, X) {
    return this.request({ method: "tasks/list", params: $ }, JW, X);
  }
  async cancelTask($, X) {
    return this.request({ method: "tasks/cancel", params: $ }, QF, X);
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
    let Y = { ...$, jsonrpc: "2.0" };
    if (X?.relatedTask)
      Y = {
        ...Y,
        params: {
          ...Y.params,
          _meta: { ...(Y.params?._meta || {}), [z1]: X.relatedTask },
        },
      };
    await this._transport.send(Y, X);
  }
  setRequestHandler($, X) {
    let J = RU($);
    (this.assertRequestHandlerCapability(J),
      this._requestHandlers.set(J, (W, Q) => {
        let Y = PU($, W);
        return Promise.resolve(X(Y, Q));
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
    let J = RU($);
    this._notificationHandlers.set(J, (W) => {
      let Q = PU($, W);
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
    let W = this._options?.maxTaskQueueSize;
    await this._taskMessageQueue.enqueue($, X, J, W);
  }
  async _clearTaskQueue($, X) {
    if (this._taskMessageQueue) {
      let J = await this._taskMessageQueue.dequeueAll($, X);
      for (let W of J)
        if (W.type === "request" && zU(W.message)) {
          let Q = W.message.id,
            Y = this._requestResolvers.get(Q);
          if (Y)
            (Y(new h(m.InternalError, "Task cancelled or completed")),
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
      let W = await this._taskStore?.getTask($);
      if (W?.pollInterval) J = W.pollInterval;
    } catch {}
    return new Promise((W, Q) => {
      if (X.aborted) {
        Q(new h(m.InvalidRequest, "Request cancelled"));
        return;
      }
      let Y = setTimeout(W, J);
      X.addEventListener(
        "abort",
        () => {
          (clearTimeout(Y), Q(new h(m.InvalidRequest, "Request cancelled")));
        },
        { once: !0 },
      );
    });
  }
  requestTaskStore($, X) {
    let J = this._taskStore;
    if (!J) throw Error("No task store configured");
    return {
      createTask: async (W) => {
        if (!$) throw Error("No request provided");
        return await J.createTask(
          W,
          $.id,
          { method: $.method, params: $.params },
          X,
        );
      },
      getTask: async (W) => {
        let Q = await J.getTask(W, X);
        if (!Q)
          throw new h(
            m.InvalidParams,
            "Failed to retrieve task: Task not found",
          );
        return Q;
      },
      storeTaskResult: async (W, Q, Y) => {
        await J.storeTaskResult(W, Q, Y, X);
        let z = await J.getTask(W, X);
        if (z) {
          let G = XJ.parse({ method: "notifications/tasks/status", params: z });
          if ((await this.notification(G), G1(z.status)))
            this._cleanupTaskProgressHandler(W);
        }
      },
      getTaskResult: (W) => {
        return J.getTaskResult(W, X);
      },
      updateTaskStatus: async (W, Q, Y) => {
        let z = await J.getTask(W, X);
        if (!z)
          throw new h(
            m.InvalidParams,
            `Task "${W}" not found - it may have been cleaned up`,
          );
        if (G1(z.status))
          throw new h(
            m.InvalidParams,
            `Cannot update task "${W}" from terminal status "${z.status}" to "${Q}". Terminal states (completed, failed, cancelled) cannot transition to other states.`,
          );
        await J.updateTaskStatus(W, Q, Y, X);
        let G = await J.getTask(W, X);
        if (G) {
          let H = XJ.parse({ method: "notifications/tasks/status", params: G });
          if ((await this.notification(H), G1(G.status)))
            this._cleanupTaskProgressHandler(W);
        }
      },
      listTasks: (W) => {
        return J.listTasks(W, X);
      },
    };
  }
}
function pF($) {
  return $ !== null && typeof $ === "object" && !Array.isArray($);
}
function dF($, X) {
  let J = { ...$ };
  for (let W in X) {
    let Q = W,
      Y = X[Q];
    if (Y === void 0) continue;
    let z = J[Q];
    if (pF(z) && pF(Y)) J[Q] = { ...z, ...Y };
    else J[Q] = Y;
  }
  return J;
}
var EA = kJ(MK(), 1),
  SA = kJ(PA(), 1);
function Mc() {
  let $ = new EA.default({
    strict: !1,
    validateFormats: !0,
    validateSchema: !1,
    allErrors: !0,
  });
  return (SA.default($), $);
}
class vK {
  constructor($) {
    this._ajv = $ ?? Mc();
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
class kK {
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
      let W = $.messages[$.messages.length - 1],
        Q = Array.isArray(W.content) ? W.content : [W.content],
        Y = Q.some((U) => U.type === "tool_result"),
        z = $.messages.length > 1 ? $.messages[$.messages.length - 2] : void 0,
        G = z ? (Array.isArray(z.content) ? z.content : [z.content]) : [],
        H = G.some((U) => U.type === "tool_use");
      if (Y) {
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
      WJ,
      X,
    );
  }
  elicitInputStream($, X) {
    let J = this._server.getClientCapabilities(),
      W = $.mode ?? "form";
    switch (W) {
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
    let Q = W === "form" && $.mode === void 0 ? { ...$, mode: "form" } : $;
    return this.requestStream(
      { method: "elicitation/create", params: Q },
      H8,
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
function CA($, X, J) {
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
function vA($, X, J) {
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
class _K extends EU {
  constructor($, X) {
    super(X);
    if (
      ((this._serverInfo = $),
      (this._loggingLevels = new Map()),
      (this.LOG_LEVEL_SEVERITY = new Map(QJ.options.map((J, W) => [J, W]))),
      (this.isMessageIgnored = (J, W) => {
        let Q = this._loggingLevels.get(W);
        return Q
          ? this.LOG_LEVEL_SEVERITY.get(J) < this.LOG_LEVEL_SEVERITY.get(Q)
          : !1;
      }),
      (this._capabilities = X?.capabilities ?? {}),
      (this._instructions = X?.instructions),
      (this._jsonSchemaValidator = X?.jsonSchemaValidator ?? new vK()),
      this.setRequestHandler(UU, (J) => this._oninitialize(J)),
      this.setNotificationHandler(KU, () => this.oninitialized?.()),
      this._capabilities.logging)
    )
      this.setRequestHandler(DU, async (J, W) => {
        let Q =
            W.sessionId || W.requestInfo?.headers["mcp-session-id"] || void 0,
          { level: Y } = J.params,
          z = QJ.safeParse(Y);
        if (z.success) this._loggingLevels.set(Q, z.data);
        return {};
      });
  }
  get experimental() {
    if (!this._experimental) this._experimental = { tasks: new kK(this) };
    return this._experimental;
  }
  registerCapabilities($) {
    if (this.transport)
      throw Error("Cannot register capabilities after connecting to transport");
    this._capabilities = dF(this._capabilities, $);
  }
  setRequestHandler($, X) {
    let W = W1($)?.method;
    if (!W) throw Error("Schema is missing a method literal");
    let Q;
    if (E6(W)) {
      let z = W;
      Q = z._zod?.def?.value ?? z.value;
    } else {
      let z = W;
      Q = z._def?.value ?? z.value;
    }
    if (typeof Q !== "string")
      throw Error("Schema method literal must be a string");
    if (Q === "tools/call") {
      let z = async (G, H) => {
        let U = Q1(G8, G);
        if (!U.success) {
          let O = U.error instanceof Error ? U.error.message : String(U.error);
          throw new h(m.InvalidParams, `Invalid tools/call request: ${O}`);
        }
        let { params: K } = U.data,
          V = await Promise.resolve(X(G, H));
        if (K.task) {
          let O = Q1(Y8, V);
          if (!O.success) {
            let w =
              O.error instanceof Error ? O.error.message : String(O.error);
            throw new h(m.InvalidParams, `Invalid task creation result: ${w}`);
          }
          return O.data;
        }
        let N = Q1(KW, V);
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
    vA(this._clientCapabilities?.tasks?.requests, $, "Client");
  }
  assertTaskHandlerCapability($) {
    if (!this._capabilities) return;
    CA(this._capabilities.tasks?.requests, $, "Server");
  }
  async _oninitialize($) {
    let X = $.params.protocolVersion;
    return (
      (this._clientCapabilities = $.params.capabilities),
      (this._clientVersion = $.params.clientInfo),
      {
        protocolVersion: rD.includes(X) ? X : WU,
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
    return this.request({ method: "ping" }, r5);
  }
  async createMessage($, X) {
    if ($.tools || $.toolChoice) {
      if (!this._clientCapabilities?.sampling?.tools)
        throw Error("Client does not support sampling tools capability.");
    }
    if ($.messages.length > 0) {
      let J = $.messages[$.messages.length - 1],
        W = Array.isArray(J.content) ? J.content : [J.content],
        Q = W.some((H) => H.type === "tool_result"),
        Y = $.messages.length > 1 ? $.messages[$.messages.length - 2] : void 0,
        z = Y ? (Array.isArray(Y.content) ? Y.content : [Y.content]) : [],
        G = z.some((H) => H.type === "tool_use");
      if (Q) {
        if (W.some((H) => H.type !== "tool_result"))
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
            W.filter((K) => K.type === "tool_result").map((K) => K.toolUseId),
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
        FU,
        X,
      );
    return this.request({ method: "sampling/createMessage", params: $ }, WJ, X);
  }
  async elicitInput($, X) {
    switch ($.mode ?? "form") {
      case "url": {
        if (!this._clientCapabilities?.elicitation?.url)
          throw Error("Client does not support url elicitation.");
        let W = $;
        return this.request({ method: "elicitation/create", params: W }, H8, X);
      }
      case "form": {
        if (!this._clientCapabilities?.elicitation?.form)
          throw Error("Client does not support form elicitation.");
        let W = $.mode === "form" ? $ : { ...$, mode: "form" },
          Q = await this.request(
            { method: "elicitation/create", params: W },
            H8,
            X,
          );
        if (Q.action === "accept" && Q.content && W.requestedSchema)
          try {
            let z = this._jsonSchemaValidator.getValidator(W.requestedSchema)(
              Q.content,
            );
            if (!z.valid)
              throw new h(
                m.InvalidParams,
                `Elicitation response content does not match requested schema: ${z.errorMessage}`,
              );
          } catch (Y) {
            if (Y instanceof h) throw Y;
            throw new h(
              m.InternalError,
              `Error validating elicitation response: ${Y instanceof Error ? Y.message : String(Y)}`,
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
    return this.request({ method: "roots/list", params: $ }, jU, X);
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
var _A = Symbol.for("mcp.completable");
function xK($) {
  return !!$ && typeof $ === "object" && _A in $;
}
function xA($) {
  return $[_A]?.complete;
}
var kA;
(function ($) {
  $.Completable = "McpCompletable";
})(kA || (kA = {}));
var Ac = /^[A-Za-z0-9._-]{1,128}$/;
function Ic($) {
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
  if (!Ac.test($)) {
    let J = $.split("")
      .filter((W) => !/[A-Za-z0-9._-]/.test(W))
      .filter((W, Q, Y) => Y.indexOf(W) === Q);
    return (
      X.push(
        `Tool name contains invalid characters: ${J.map((W) => `"${W}"`).join(", ")}`,
        "Allowed characters are: A-Z, a-z, 0-9, underscore (_), dash (-), and dot (.)",
      ),
      { isValid: !1, warnings: X }
    );
  }
  return { isValid: !0, warnings: X };
}
function Zc($, X) {
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
function TK($) {
  let X = Ic($);
  return (Zc($, X.warnings), X.isValid);
}
class fK {
  constructor($) {
    this._mcpServer = $;
  }
  registerToolTask($, X, J) {
    let W = { taskSupport: "required", ...X.execution };
    if (W.taskSupport === "forbidden")
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
      W,
      X._meta,
      J,
    );
  }
}
class gK {
  constructor($, X) {
    ((this._registeredResources = {}),
      (this._registeredResourceTemplates = {}),
      (this._registeredTools = {}),
      (this._registeredPrompts = {}),
      (this._toolHandlersInitialized = !1),
      (this._completionHandlerInitialized = !1),
      (this._resourceHandlersInitialized = !1),
      (this._promptHandlersInitialized = !1),
      (this.server = new _K($, X)));
  }
  get experimental() {
    if (!this._experimental) this._experimental = { tasks: new fK(this) };
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
    (this.server.assertCanSetRequestHandler(B1(UW)),
      this.server.assertCanSetRequestHandler(B1(G8)),
      this.server.registerCapabilities({ tools: { listChanged: !0 } }),
      this.server.setRequestHandler(UW, () => ({
        tools: Object.entries(this._registeredTools)
          .filter(([, $]) => $.enabled)
          .map(([$, X]) => {
            let J = {
              name: $,
              title: X.title,
              description: X.description,
              inputSchema: (() => {
                let W = $8(X.inputSchema);
                return W
                  ? bU(W, { strictUnions: !0, pipeStrategy: "input" })
                  : bc;
              })(),
              annotations: X.annotations,
              execution: X.execution,
              _meta: X._meta,
            };
            if (X.outputSchema) {
              let W = $8(X.outputSchema);
              if (W)
                J.outputSchema = bU(W, {
                  strictUnions: !0,
                  pipeStrategy: "output",
                });
            }
            return J;
          }),
      })),
      this.server.setRequestHandler(G8, async ($, X) => {
        try {
          let J = this._registeredTools[$.params.name];
          if (!J)
            throw new h(m.InvalidParams, `Tool ${$.params.name} not found`);
          if (!J.enabled)
            throw new h(m.InvalidParams, `Tool ${$.params.name} disabled`);
          let W = !!$.params.task,
            Q = J.execution?.taskSupport,
            Y = "createTask" in J.handler;
          if ((Q === "required" || Q === "optional") && !Y)
            throw new h(
              m.InternalError,
              `Tool ${$.params.name} has taskSupport '${Q}' but was not registered with registerToolTask`,
            );
          if (Q === "required" && !W)
            throw new h(
              m.MethodNotFound,
              `Tool ${$.params.name} requires task augmentation (taskSupport: 'required')`,
            );
          if (Q === "optional" && !W && Y)
            return await this.handleAutomaticTaskPolling(J, $, X);
          let z = await this.validateToolInput(
              J,
              $.params.arguments,
              $.params.name,
            ),
            G = await this.executeToolHandler(J, z, X);
          if (W) return G;
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
    let Q = $8($.inputSchema) ?? $.inputSchema,
      Y = await E5(Q, X);
    if (!Y.success) {
      let z = "error" in Y ? Y.error : "Unknown error",
        G = S5(z);
      throw new h(
        m.InvalidParams,
        `Input validation error: Invalid arguments for tool ${J}: ${G}`,
      );
    }
    return Y.data;
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
    let W = $8($.outputSchema),
      Q = await E5(W, X.structuredContent);
    if (!Q.success) {
      let Y = "error" in Q ? Q.error : "Unknown error",
        z = S5(Y);
      throw new h(
        m.InvalidParams,
        `Output validation error: Invalid structured content for tool ${J}: ${z}`,
      );
    }
  }
  async executeToolHandler($, X, J) {
    let W = $.handler;
    if ("createTask" in W) {
      if (!J.taskStore) throw Error("No task store provided.");
      let Y = { ...J, taskStore: J.taskStore };
      if ($.inputSchema) return await Promise.resolve(W.createTask(X, Y));
      else return await Promise.resolve(W.createTask(Y));
    }
    if ($.inputSchema) return await Promise.resolve(W(X, J));
    else return await Promise.resolve(W(J));
  }
  async handleAutomaticTaskPolling($, X, J) {
    if (!J.taskStore)
      throw Error("No task store provided for task-capable tool.");
    let W = await this.validateToolInput($, X.params.arguments, X.params.name),
      Q = $.handler,
      Y = { ...J, taskStore: J.taskStore },
      z = W
        ? await Promise.resolve(Q.createTask(W, Y))
        : await Promise.resolve(Q.createTask(Y)),
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
    (this.server.assertCanSetRequestHandler(B1(VW)),
      this.server.registerCapabilities({ completions: {} }),
      this.server.setRequestHandler(VW, async ($) => {
        switch ($.params.ref.type) {
          case "ref/prompt":
            return (UF($), this.handlePromptCompletion($, $.params.ref));
          case "ref/resource":
            return (KF($), this.handleResourceCompletion($, $.params.ref));
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
    if (!J.argsSchema) return SJ;
    let Q = W1(J.argsSchema)?.[$.params.argument.name];
    if (!xK(Q)) return SJ;
    let Y = xA(Q);
    if (!Y) return SJ;
    let z = await Y($.params.argument.value, $.params.context);
    return fA(z);
  }
  async handleResourceCompletion($, X) {
    let J = Object.values(this._registeredResourceTemplates).find(
      (Y) => Y.resourceTemplate.uriTemplate.toString() === X.uri,
    );
    if (!J) {
      if (this._registeredResources[X.uri]) return SJ;
      throw new h(
        m.InvalidParams,
        `Resource template ${$.params.ref.uri} not found`,
      );
    }
    let W = J.resourceTemplate.completeCallback($.params.argument.name);
    if (!W) return SJ;
    let Q = await W($.params.argument.value, $.params.context);
    return fA(Q);
  }
  setResourceRequestHandlers() {
    if (this._resourceHandlersInitialized) return;
    (this.server.assertCanSetRequestHandler(B1(WW)),
      this.server.assertCanSetRequestHandler(B1(YW)),
      this.server.assertCanSetRequestHandler(B1(zW)),
      this.server.registerCapabilities({ resources: { listChanged: !0 } }),
      this.server.setRequestHandler(WW, async ($, X) => {
        let J = Object.entries(this._registeredResources)
            .filter(([Q, Y]) => Y.enabled)
            .map(([Q, Y]) => ({ uri: Q, name: Y.name, ...Y.metadata })),
          W = [];
        for (let Q of Object.values(this._registeredResourceTemplates)) {
          if (!Q.resourceTemplate.listCallback) continue;
          let Y = await Q.resourceTemplate.listCallback(X);
          for (let z of Y.resources) W.push({ ...Q.metadata, ...z });
        }
        return { resources: [...J, ...W] };
      }),
      this.server.setRequestHandler(YW, async () => {
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
      this.server.setRequestHandler(zW, async ($, X) => {
        let J = new URL($.params.uri),
          W = this._registeredResources[J.toString()];
        if (W) {
          if (!W.enabled)
            throw new h(m.InvalidParams, `Resource ${J} disabled`);
          return W.readCallback(J, X);
        }
        for (let Q of Object.values(this._registeredResourceTemplates)) {
          let Y = Q.resourceTemplate.uriTemplate.match(J.toString());
          if (Y) return Q.readCallback(J, Y, X);
        }
        throw new h(m.InvalidParams, `Resource ${J} not found`);
      }),
      (this._resourceHandlersInitialized = !0));
  }
  setPromptRequestHandlers() {
    if (this._promptHandlersInitialized) return;
    (this.server.assertCanSetRequestHandler(B1(GW)),
      this.server.assertCanSetRequestHandler(B1(HW)),
      this.server.registerCapabilities({ prompts: { listChanged: !0 } }),
      this.server.setRequestHandler(GW, () => ({
        prompts: Object.entries(this._registeredPrompts)
          .filter(([, $]) => $.enabled)
          .map(([$, X]) => {
            return {
              name: $,
              title: X.title,
              description: X.description,
              arguments: X.argsSchema ? Rc(X.argsSchema) : void 0,
            };
          }),
      })),
      this.server.setRequestHandler(HW, async ($, X) => {
        let J = this._registeredPrompts[$.params.name];
        if (!J)
          throw new h(m.InvalidParams, `Prompt ${$.params.name} not found`);
        if (!J.enabled)
          throw new h(m.InvalidParams, `Prompt ${$.params.name} disabled`);
        if (J.argsSchema) {
          let W = $8(J.argsSchema),
            Q = await E5(W, $.params.arguments);
          if (!Q.success) {
            let G = "error" in Q ? Q.error : "Unknown error",
              H = S5(G);
            throw new h(
              m.InvalidParams,
              `Invalid arguments for prompt ${$.params.name}: ${H}`,
            );
          }
          let Y = Q.data,
            z = J.callback;
          return await Promise.resolve(z(Y, X));
        } else {
          let W = J.callback;
          return await Promise.resolve(W(X));
        }
      }),
      (this._promptHandlersInitialized = !0));
  }
  resource($, X, ...J) {
    let W;
    if (typeof J[0] === "object") W = J.shift();
    let Q = J[0];
    if (typeof X === "string") {
      if (this._registeredResources[X])
        throw Error(`Resource ${X} is already registered`);
      let Y = this._createRegisteredResource($, void 0, X, W, Q);
      return (
        this.setResourceRequestHandlers(),
        this.sendResourceListChanged(),
        Y
      );
    } else {
      if (this._registeredResourceTemplates[$])
        throw Error(`Resource template ${$} is already registered`);
      let Y = this._createRegisteredResourceTemplate($, void 0, X, W, Q);
      return (
        this.setResourceRequestHandlers(),
        this.sendResourceListChanged(),
        Y
      );
    }
  }
  registerResource($, X, J, W) {
    if (typeof X === "string") {
      if (this._registeredResources[X])
        throw Error(`Resource ${X} is already registered`);
      let Q = this._createRegisteredResource($, J.title, X, J, W);
      return (
        this.setResourceRequestHandlers(),
        this.sendResourceListChanged(),
        Q
      );
    } else {
      if (this._registeredResourceTemplates[$])
        throw Error(`Resource template ${$} is already registered`);
      let Q = this._createRegisteredResourceTemplate($, J.title, X, J, W);
      return (
        this.setResourceRequestHandlers(),
        this.sendResourceListChanged(),
        Q
      );
    }
  }
  _createRegisteredResource($, X, J, W, Q) {
    let Y = {
      name: $,
      title: X,
      metadata: W,
      readCallback: Q,
      enabled: !0,
      disable: () => Y.update({ enabled: !1 }),
      enable: () => Y.update({ enabled: !0 }),
      remove: () => Y.update({ uri: null }),
      update: (z) => {
        if (typeof z.uri < "u" && z.uri !== J) {
          if ((delete this._registeredResources[J], z.uri))
            this._registeredResources[z.uri] = Y;
        }
        if (typeof z.name < "u") Y.name = z.name;
        if (typeof z.title < "u") Y.title = z.title;
        if (typeof z.metadata < "u") Y.metadata = z.metadata;
        if (typeof z.callback < "u") Y.readCallback = z.callback;
        if (typeof z.enabled < "u") Y.enabled = z.enabled;
        this.sendResourceListChanged();
      },
    };
    return ((this._registeredResources[J] = Y), Y);
  }
  _createRegisteredResourceTemplate($, X, J, W, Q) {
    let Y = {
      resourceTemplate: J,
      title: X,
      metadata: W,
      readCallback: Q,
      enabled: !0,
      disable: () => Y.update({ enabled: !1 }),
      enable: () => Y.update({ enabled: !0 }),
      remove: () => Y.update({ name: null }),
      update: (H) => {
        if (typeof H.name < "u" && H.name !== $) {
          if ((delete this._registeredResourceTemplates[$], H.name))
            this._registeredResourceTemplates[H.name] = Y;
        }
        if (typeof H.title < "u") Y.title = H.title;
        if (typeof H.template < "u") Y.resourceTemplate = H.template;
        if (typeof H.metadata < "u") Y.metadata = H.metadata;
        if (typeof H.callback < "u") Y.readCallback = H.callback;
        if (typeof H.enabled < "u") Y.enabled = H.enabled;
        this.sendResourceListChanged();
      },
    };
    this._registeredResourceTemplates[$] = Y;
    let z = J.uriTemplate.variableNames;
    if (Array.isArray(z) && z.some((H) => !!J.completeCallback(H)))
      this.setCompletionRequestHandler();
    return Y;
  }
  _createRegisteredPrompt($, X, J, W, Q) {
    let Y = {
      title: X,
      description: J,
      argsSchema: W === void 0 ? void 0 : o1(W),
      callback: Q,
      enabled: !0,
      disable: () => Y.update({ enabled: !1 }),
      enable: () => Y.update({ enabled: !0 }),
      remove: () => Y.update({ name: null }),
      update: (z) => {
        if (typeof z.name < "u" && z.name !== $) {
          if ((delete this._registeredPrompts[$], z.name))
            this._registeredPrompts[z.name] = Y;
        }
        if (typeof z.title < "u") Y.title = z.title;
        if (typeof z.description < "u") Y.description = z.description;
        if (typeof z.argsSchema < "u") Y.argsSchema = o1(z.argsSchema);
        if (typeof z.callback < "u") Y.callback = z.callback;
        if (typeof z.enabled < "u") Y.enabled = z.enabled;
        this.sendPromptListChanged();
      },
    };
    if (((this._registeredPrompts[$] = Y), W)) {
      if (
        Object.values(W).some((G) => {
          let H = G instanceof R6 ? G._def?.innerType : G;
          return xK(H);
        })
      )
        this.setCompletionRequestHandler();
    }
    return Y;
  }
  _createRegisteredTool($, X, J, W, Q, Y, z, G, H) {
    TK($);
    let U = {
      title: X,
      description: J,
      inputSchema: TA(W),
      outputSchema: TA(Q),
      annotations: Y,
      execution: z,
      _meta: G,
      handler: H,
      enabled: !0,
      disable: () => U.update({ enabled: !1 }),
      enable: () => U.update({ enabled: !0 }),
      remove: () => U.update({ name: null }),
      update: (K) => {
        if (typeof K.name < "u" && K.name !== $) {
          if (typeof K.name === "string") TK(K.name);
          if ((delete this._registeredTools[$], K.name))
            this._registeredTools[K.name] = U;
        }
        if (typeof K.title < "u") U.title = K.title;
        if (typeof K.description < "u") U.description = K.description;
        if (typeof K.paramsSchema < "u") U.inputSchema = o1(K.paramsSchema);
        if (typeof K.outputSchema < "u") U.outputSchema = o1(K.outputSchema);
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
    let J, W, Q, Y;
    if (typeof X[0] === "string") J = X.shift();
    if (X.length > 1) {
      let G = X[0];
      if (yK(G)) {
        if (
          ((W = X.shift()),
          X.length > 1 &&
            typeof X[0] === "object" &&
            X[0] !== null &&
            !yK(X[0]))
        )
          Y = X.shift();
      } else if (typeof G === "object" && G !== null) {
        if (Object.values(G).some((H) => typeof H === "object" && H !== null))
          throw Error(
            `Tool ${$} expected a Zod schema or ToolAnnotations, but received an unrecognized object`,
          );
        Y = X.shift();
      }
    }
    let z = X[0];
    return this._createRegisteredTool(
      $,
      void 0,
      J,
      W,
      Q,
      Y,
      { taskSupport: "forbidden" },
      void 0,
      z,
    );
  }
  registerTool($, X, J) {
    if (this._registeredTools[$])
      throw Error(`Tool ${$} is already registered`);
    let {
      title: W,
      description: Q,
      inputSchema: Y,
      outputSchema: z,
      annotations: G,
      _meta: H,
    } = X;
    return this._createRegisteredTool(
      $,
      W,
      Q,
      Y,
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
    let W;
    if (X.length > 1) W = X.shift();
    let Q = X[0],
      Y = this._createRegisteredPrompt($, void 0, J, W, Q);
    return (this.setPromptRequestHandlers(), this.sendPromptListChanged(), Y);
  }
  registerPrompt($, X, J) {
    if (this._registeredPrompts[$])
      throw Error(`Prompt ${$} is already registered`);
    let { title: W, description: Q, argsSchema: Y } = X,
      z = this._createRegisteredPrompt($, W, Q, Y, J);
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
var bc = { type: "object", properties: {} };
function yA($) {
  return (
    $ !== null &&
    typeof $ === "object" &&
    "parse" in $ &&
    typeof $.parse === "function" &&
    "safeParse" in $ &&
    typeof $.safeParse === "function"
  );
}
function gA($) {
  return "_def" in $ || "_zod" in $ || yA($);
}
function yK($) {
  if (typeof $ !== "object" || $ === null) return !1;
  if (gA($)) return !1;
  if (Object.keys($).length === 0) return !0;
  return Object.values($).some(yA);
}
function TA($) {
  if (!$) return;
  if (yK($)) return o1($);
  if (!gA($))
    throw Error(
      "inputSchema must be a Zod schema or raw shape, received an unrecognized object",
    );
  return $;
}
function Rc($) {
  let X = W1($);
  if (!X) return [];
  return Object.entries(X).map(([J, W]) => {
    let Q = UD(W),
      Y = KD(W);
    return { name: J, description: Q, required: !Y };
  });
}
function B1($) {
  let J = W1($)?.method;
  if (!J) throw Error("Schema is missing a method literal");
  let W = C5(J);
  if (typeof W === "string") return W;
  throw Error("Schema method literal must be a string");
}
function fA($) {
  return {
    completion: {
      values: $.slice(0, 100),
      total: $.length,
      hasMore: $.length > 100,
    },
  };
}
var SJ = { completion: { values: [], hasMore: !1 } };
function Pc($, X, J, W, Q) {
  let Y = {};
  if (Q?.searchHint) Y["anthropic/searchHint"] = Q.searchHint;
  if (Q?.alwaysLoad) Y["anthropic/alwaysLoad"] = !0;
  return {
    name: $,
    description: X,
    inputSchema: J,
    handler: W,
    annotations: Q?.annotations,
    _meta: Object.keys(Y).length > 0 ? Y : void 0,
  };
}
function Ec($) {
  let X = new gK(
    { name: $.name, version: $.version ?? "1.0.0" },
    { capabilities: { tools: $.tools ? {} : void 0 } },
  );
  if ($.tools)
    $.tools.forEach((J) => {
      for (let W of Object.values(J.inputSchema)) {
        if (!Sc(W)) continue;
        let Q = W.description;
        if (Q && !G6.has(W)) G6.add(W, { description: Q });
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
function Sc($) {
  return typeof $ === "object" && $ !== null && "_zod" in $;
}
function hA($) {
  let X;
  return () => (X ??= $());
}
var uA = 15000,
  Cc = hA(() =>
    Y1.object({
      session_id: Y1.string(),
      ws_url: Y1.string(),
      work_dir: Y1.string().optional(),
      session_key: Y1.string().optional(),
    }),
  );
class a6 extends Error {
  code;
  constructor($, X) {
    super($);
    ((this.name = "DirectConnectError"), (this.code = X));
  }
}
class lA {
  options;
  ws;
  sessionId;
  workDir;
  abortController;
  readyState = !1;
  closed = !1;
  exitError;
  messages = new S1();
  readyPromise;
  readyResolve;
  readyReject;
  abortHandler;
  partialChunks = [];
  telemetryEmitted = !1;
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
      this.failInit(new t$("Connection aborted"));
      return;
    }
    ((this.abortHandler = () => {
      (this.close(), (this.exitError = new t$("Connection aborted by user")));
    }),
      this.abortController.signal.addEventListener("abort", this.abortHandler));
    let $;
    try {
      let Q = await kc(this.options);
      ((this.sessionId = Q.sessionId),
        (this.workDir = Q.workDir),
        ($ = Q.wsUrl));
    } catch (Q) {
      let Y = p4(Q);
      if (!(Y instanceof t$)) {
        let z = Y instanceof a6 && Y.code ? Y.code : "session_create_failed";
        this.emitTelemetry("bad", z);
      }
      this.failInit(Y);
      return;
    }
    if (this.closed) {
      if (this.options.deleteSessionOnClose && this.sessionId)
        mA(this.options.serverUrl, this.sessionId, this.options.authToken);
      return;
    }
    let X = {};
    if (this.options.authToken)
      X.authorization = `Bearer ${this.options.authToken}`;
    let J = new WebSocket($, { headers: X });
    this.ws = J;
    let W = setTimeout(
      (Q, Y) => {
        if (!Q.readyState) {
          Y.close();
          let z = new a6(`WebSocket connection timeout after ${uA}ms`);
          ((Q.exitError = z),
            Q.readyReject?.(z),
            Q.emitTelemetry("bad", "connect_timeout"));
        }
      },
      uA,
      this,
      J,
    );
    (J.addEventListener("open", () => {
      (clearTimeout(W),
        (this.readyState = !0),
        Q6(
          `[DirectConnectTransport] Connected to ${this.options.serverUrl}, session=${this.sessionId}`,
        ),
        this.readyResolve?.(),
        this.emitTelemetry("ok"));
    }),
      J.addEventListener("message", (Q) => {
        let Y = typeof Q.data === "string" ? Q.data : "";
        if (
          Y.indexOf(`
`) === -1
        ) {
          if (Y) this.partialChunks.push(Y);
          return;
        }
        let z = this.partialChunks.join("") + Y;
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
        clearTimeout(W);
        let Q = new a6("WebSocket connection error");
        if (
          ((this.exitError = Q),
          this.readyReject?.(Q),
          this.messages.done(),
          !this.readyState)
        )
          this.emitTelemetry("bad", "ws_error");
      }),
      J.addEventListener("close", (Q) => {
        let Y = this.readyState;
        ((this.readyState = !1), (this.closed = !0));
        let z = Q.code !== 1000 && Q.code !== 1001;
        if (z && !this.exitError)
          this.exitError = new a6(
            `WebSocket closed abnormally: ${Q.code} ${Q.reason}`,
          );
        if (
          (this.messages.done(), Y && z && !this.abortController.signal.aborted)
        )
          this.emitTelemetry("sad", "ws_closed_abnormally");
      }));
  }
  emitTelemetry($, X) {
    if (this.telemetryEmitted) return;
    if (((this.telemetryEmitted = !0), $ === "ok"))
      L9("transport_direct_connect");
    else if ($ === "bad") M9("transport_direct_connect", X ?? "unknown");
    else eN("transport_direct_connect", X ?? "unknown");
  }
  failInit($) {
    ((this.exitError = $),
      (this.closed = !0),
      this.readyReject?.($),
      this.messages.done());
  }
  async write($) {
    if (this.abortController.signal.aborted) throw new t$("Operation aborted");
    if (!this.readyState) await this.readyPromise;
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN)
      throw new a6("Transport is not ready for writing");
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
      mA(this.options.serverUrl, this.sessionId, this.options.authToken);
  }
  async *readMessages() {
    if ((yield* this.messages, this.exitError)) throw this.exitError;
  }
}
function vc($) {
  if ($.startsWith("cc://")) {
    let W = $.slice(5),
      Q = new URL(`http://${W}`),
      Y = Q.pathname.slice(1) || void 0;
    return { serverUrl: `http://${Q.host}`, authToken: Y };
  }
  if ($.startsWith("cc+unix://"))
    throw new a6(
      "Unix socket connect (cc+unix://) is not supported by the SDK transport",
    );
  let X = /^https?:\/\//i.test($) ? $ : `http://${$}`,
    J = new URL(X);
  return { serverUrl: `${J.protocol}//${J.host}`, authToken: void 0 };
}
async function kc($) {
  let X = { "content-type": "application/json" };
  if ($.authToken) X.authorization = `Bearer ${$.authToken}`;
  let J = {};
  if ($.cwd) J.cwd = $.cwd;
  if ($.sessionKey) J.session_key = $.sessionKey;
  if ($.permissionMode) J.permission_mode = $.permissionMode;
  let W;
  try {
    W = await fetch(`${$.serverUrl}/sessions`, {
      method: "POST",
      headers: X,
      body: w$(J),
    });
  } catch (Y) {
    throw new a6(
      `Failed to connect to server at ${$.serverUrl}: ${Y instanceof Error ? Y.message : String(Y)}`,
      "session_create_failed",
    );
  }
  if (!W.ok) {
    let Y = await W.text().catch(() => "");
    throw new a6(
      `Failed to create session: ${W.status} ${W.statusText}${Y ? ` — ${Y}` : ""}`,
      "session_create_failed",
    );
  }
  let Q = Cc().safeParse(await W.json());
  if (!Q.success)
    throw new a6(
      `Invalid session response: ${Q.error.message}`,
      "session_create_invalid_response",
    );
  return {
    sessionId: Q.data.session_id,
    wsUrl: Q.data.ws_url,
    workDir: Q.data.work_dir,
  };
}
async function mA($, X, J) {
  let W = {};
  if (J) W.authorization = `Bearer ${J}`;
  try {
    await fetch(`${$}/sessions/${X}`, { method: "DELETE", headers: W });
  } catch {}
}
async function cc($, X) {
  try {
    await fc($, X);
  } catch (J) {
    if (!d4(J)) throw J;
  }
}
async function pc($, X) {
  if (!$) return;
  let J = $;
  try {
    let W = l$($);
    if (W?.claudeAiOauth?.refreshToken)
      (delete W.claudeAiOauth.refreshToken, (J = w$(W)));
  } catch {}
  await oA(X, J, { mode: 384 });
}
function dc() {
  if (process.platform !== "darwin") return Promise.resolve(void 0);
  let $ = Cq(Sq);
  return new Promise((X) => {
    _c(
      "security",
      ["find-generic-password", "-a", vq(), "-w", "-s", $],
      { encoding: "utf-8", timeout: 5000 },
      (J, W) => X(J ? void 0 : W.trim() || void 0),
    );
  });
}
async function sA($, X, J, W, Q = 60000) {
  if (!U$(X)) return;
  let Y = _6(J),
    z = await H4(
      $.load({ projectKey: Y, sessionId: X }),
      Q,
      `SessionStore.load() timed out after ${Q}ms for session ${X}`,
    );
  if (!z || z.length === 0) return;
  let G = A6(uc(), `claude-resume-${cK()}`);
  try {
    let H = A6(G, "projects", Y);
    await hK(H, { recursive: !0 });
    let U = A6(H, `${X}.jsonl`);
    await v9(U, z);
    let K = W?.CLAUDE_CONFIG_DIR ?? process.env.CLAUDE_CONFIG_DIR,
      V = K ?? A6(uK(), ".claude"),
      N;
    try {
      N = await rA(A6(V, ".credentials.json"), "utf-8");
    } catch (O) {
      if (!d4(O)) throw O;
    }
    if (
      !K &&
      !(W ?? process.env).ANTHROPIC_API_KEY &&
      !(W ?? process.env).CLAUDE_CODE_OAUTH_TOKEN
    )
      N = (await dc()) ?? N;
    if (
      (await pc(N, A6(G, ".credentials.json")),
      await cc(A6(K ?? uK(), ".claude.json"), A6(G, ".claude.json")),
      $.listSubkeys)
    ) {
      let O = A6(H, X),
        w = await H4(
          $.listSubkeys({ projectKey: Y, sessionId: X }),
          Q,
          `SessionStore.listSubkeys() timed out after ${Q}ms for session ${X}`,
        );
      for (let B of w) {
        let F = CJ(O, B + ".jsonl");
        if (
          !B ||
          tA(B) ||
          B.split(/[\\/]/).includes("..") ||
          !F.startsWith(O + pK)
        ) {
          S$(`[SessionStore] skipping unsafe subpath from listSubkeys: ${B}`, {
            level: "warn",
          });
          continue;
        }
        let j = await H4(
          $.load({ projectKey: Y, sessionId: X, subpath: B }),
          Q,
          `SessionStore.load() timed out after ${Q}ms for session ${X} subpath ${B}`,
        );
        if (!j || j.length === 0) continue;
        let I = [],
          Z = [];
        for (let _ of j)
          if (XI(_)) I.push(_);
          else Z.push(_);
        if (Z.length > 0) (await hK(cA(F), { recursive: !0 }), await v9(F, Z));
        if (I.length > 0) {
          let _ = I.at(-1),
            T = CJ(O, B + ".meta.json");
          await hK(cA(T), { recursive: !0 });
          let { type: O$, ...x$ } = _;
          await oA(T, w$(x$), { mode: 384 });
        }
      }
    }
    return G;
  } catch (H) {
    throw (await sW(G), H);
  }
}
function mK($, X, J, W) {
  let {
      systemPrompt: Q,
      settings: Y,
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
    let w6 = lc(import.meta.url),
      I6 = hc(w6),
      D1 = B7((Y0) => I6.resolve(Y0));
    if (D1) O = D1;
    else
      try {
        O = I6.resolve("./cli.js");
      } catch {
        throw Error(
          `Native CLI binary for ${process.platform}-${process.arch} not found. Reinstall @anthropic-ai/claude-agent-sdk without --omit=optional, or set options.pathToClaudeCodeExecutable.`,
        );
      }
  }
  process.env.CLAUDE_AGENT_SDK_VERSION = "0.2.132";
  let {
    abortController: w = z0(),
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
    env: s6,
    executable: J0 = G0() ? "bun" : "node",
    executableArgs: _4 = [],
    extraArgs: Q0 = {},
    fallbackModel: q1,
    enableFileCheckpointing: l,
    toolConfig: M8,
    forkSession: $Y,
    hooks: W0,
    includeHookEvents: A8,
    includePartialMessages: I8,
    forwardSubagentText: vJ,
    onElicitation: k$,
    persistSession: x6,
    sessionStore: u$,
    sessionStoreFlush: WI,
    thinking: Z8,
    effort: YI,
    maxThinkingTokens: XY,
    maxTurns: zI,
    maxBudgetUsd: GI,
    taskBudget: HI,
    mcpServers: dK,
    model: UI,
    outputFormat: iK,
    permissionMode: KI = "default",
    allowDangerouslySkipPermissions: VI = !1,
    permissionPromptToolName: NI,
    plugins: OI,
    getOAuthToken: nK,
    workload: rK,
    resume: oK,
    resumeSessionAt: wI,
    sessionId: BI,
    skills: tK,
    stderr: qI,
    strictMcpConfig: DI,
  } = U;
  if (u$ && x6 === !1)
    throw Error(
      "sessionStore cannot be used with persistSession: false -- the storage adapter requires local writes to mirror from. Use CLAUDE_CONFIG_DIR=/tmp for ephemeral local writes with external mirroring.",
    );
  if (u$ && T && !oK && !u$.listSessions)
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
  let aK = iK?.type === "json_schema" ? iK.schema : void 0,
    T6 = s6 ? { ...s6 } : { ...process.env };
  if (!T6.CLAUDE_CODE_ENTRYPOINT) T6.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
  if (l) T6.CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING = "true";
  if (nK) T6.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH = "1";
  if (M8?.askUserQuestion?.previewFormat)
    T6.CLAUDE_CODE_QUESTION_PREVIEW_FORMAT = M8.askUserQuestion.previewFormat;
  let JY = {};
  if ((eW.propagation.inject(eW.context.active(), JY), "traceparent" in JY)) {
    for (let w6 of ["TRACEPARENT", "TRACESTATE"])
      if (!(w6 in (s6 ?? {}))) delete T6[w6];
  }
  for (let [w6, I6] of Object.entries(JY)) {
    let D1 = w6.toUpperCase();
    if (!(D1 in (s6 ?? {}))) T6[D1] = I6;
  }
  let sK = {},
    eK = new Map();
  if (dK)
    for (let [w6, I6] of Object.entries(dK))
      if (I6.type === "sdk" && I6.instance) eK.set(w6, I6.instance);
      else sK[w6] = I6;
  let b8;
  if (Z8)
    switch (Z8.type) {
      case "adaptive":
        b8 = { type: "adaptive", display: Z8.display };
        break;
      case "enabled":
        b8 = {
          type: "enabled",
          budgetTokens: Z8.budgetTokens,
          display: Z8.display,
        };
        break;
      case "disabled":
        b8 = { type: "disabled" };
        break;
    }
  else if (XY !== void 0)
    b8 =
      XY === 0 ? { type: "disabled" } : { type: "enabled", budgetTokens: XY };
  if (J) T6.CLAUDE_CONFIG_DIR = J;
  let $V = new j9({
      abortController: w,
      additionalDirectories: B,
      agent: F,
      betas: Z,
      cwd: O$,
      debug: x$,
      debugFile: O6,
      executable: J0,
      executableArgs: _4,
      extraArgs: rK ? { ...Q0, workload: rK } : Q0,
      pathToClaudeCodeExecutable: O,
      env: T6,
      forkSession: $Y,
      stderr: qI,
      thinkingConfig: b8,
      effort: YI,
      maxTurns: zI,
      maxBudgetUsd: GI,
      taskBudget: HI,
      model: UI,
      fallbackModel: q1,
      jsonSchema: aK,
      permissionMode: KI,
      allowDangerouslySkipPermissions: VI,
      permissionPromptToolName: NI,
      continueConversation: u$ ? void 0 : T,
      resume: oK,
      resumeSessionAt: wI,
      sessionId: BI,
      settings: typeof Y === "object" ? w$(Y) : Y,
      managedSettings: z ? w$(z) : void 0,
      settingSources: G,
      skills: tK,
      allowedTools: I,
      disallowedTools: z4,
      tools: G4,
      mcpServers: sK,
      strictMcpConfig: DI,
      canUseTool: !!_,
      hooks: !!W0,
      includeHookEvents: A8,
      includePartialMessages: I8,
      persistSession: x6,
      sessionMirror: !!u$,
      plugins: OI,
      sandbox: H,
      spawnClaudeCodeProcess: U.spawnClaudeCodeProcess,
      deferSpawn: W,
    }),
    FI = {
      systemPrompt: K,
      appendSystemPrompt: V,
      planModeInstructions: U.planModeInstructions,
      appendSubagentSystemPrompt: U.appendSubagentSystemPrompt,
      excludeDynamicSections: N,
      agents: j,
      title: U.title,
      skills: tK,
      webSearchIsolationExemptMcpServers: U.webSearchIsolationExemptMcpServers,
      promptSuggestions: U.promptSuggestions,
      agentProgressSummaries: U.agentProgressSummaries,
      forwardSubagentText: vJ,
    },
    QY = new A9($V, X, _, W0, w, eK, aK, FI, k$, nK);
  if (u$) {
    let w6 = () => A6(T6.CLAUDE_CONFIG_DIR ?? A6(uK(), ".claude"), "projects"),
      I6 = WI === "eager",
      D1 = new aY(
        async (Y0, WY) => {
          let R8 = nA(Y0, w6());
          if (R8) await u$.append(R8, WY);
          else
            S$(
              `[SessionStore] dropping mirror frame: filePath ${Y0} is not under ${w6()} -- subprocess CLAUDE_CONFIG_DIR likely differs from parent (custom spawnClaudeCodeProcess / container?)`,
              { level: "warn" },
            );
        },
        void 0,
        (Y0, WY) => {
          let R8 = nA(Y0, w6());
          if (R8) QY.reportMirrorError(R8, WY.message);
        },
        I6 ? 0 : D7,
        I6 ? 0 : F7,
      );
    QY.setTranscriptMirrorBatcher(D1);
  }
  return {
    queryInstance: QY,
    transport: $V,
    abortController: w,
    processEnv: T6,
  };
}
function lK($, X, J, W) {
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
  else $.streamInput(J).catch((Q) => W.abort(Q));
}
var ic = new Set(["EBUSY", "EMFILE", "ENFILE", "ENOTEMPTY", "EPERM"]);
async function sW($) {
  for (let X = 0; ; X++)
    try {
      return await gc($, { recursive: !0, force: !0 });
    } catch (J) {
      if (X >= 4 || !ic.has(g6(J) ?? "")) return;
      await _J((X + 1) * 100);
    }
}
function nc($, X) {
  $.waitForExit()
    .catch(() => {})
    .finally(() => sW(X));
}
function KQ$({ prompt: $, options: X }) {
  if ((X?.resume || X?.continue) && X?.sessionStore) {
    let {
        queryInstance: Y,
        transport: z,
        abortController: G,
        processEnv: H,
      } = mK({ ...X }, typeof $ === "string", void 0, !0),
      U = CJ(X.cwd ?? "."),
      K = X.sessionStore,
      V = X.loadTimeoutMs ?? 60000,
      N = X.resume;
    return (
      (async () => {
        if (!N)
          N = (
            await H4(
              K.listSessions(_6(U)),
              V,
              `SessionStore.listSessions() timed out after ${V}ms`,
            )
          )
            .slice()
            .sort((B, F) => F.mtime - B.mtime)[0]?.sessionId;
        if (!N) return;
        return sA(K, N, U, X.env, X.loadTimeoutMs);
      })()
        .then((w) => {
          if (w)
            (z.updateResume(N),
              z.updateEnv({ CLAUDE_CONFIG_DIR: w }),
              (H.CLAUDE_CONFIG_DIR = w),
              Y.addCleanupCallback(() => nc(z, w)));
          if (!Y.isClosed()) z.spawn();
        })
        .catch((w) => {
          let B = p4(w);
          (z.spawnAbort(B), Y.setError(B));
        }),
      lK(Y, z, $, G),
      Y
    );
  }
  let {
    queryInstance: J,
    transport: W,
    abortController: Q,
  } = mK(X, typeof $ === "string");
  return (lK(J, W, $, Q), J);
}
async function VQ$({ options: $, initializeTimeoutMs: X = 60000 } = {}) {
  let J,
    W = $?.resume;
  if ((W || $?.continue) && $?.sessionStore) {
    let G = CJ($.cwd ?? ".");
    if (!W) {
      if (!$.sessionStore.listSessions)
        throw Error(
          "Options.continue with sessionStore requires store.listSessions to be implemented",
        );
      let H = $.loadTimeoutMs ?? 60000;
      W = (
        await H4(
          $.sessionStore.listSessions(_6(G)),
          H,
          `SessionStore.listSessions() timed out after ${H}ms`,
        )
      )
        .slice()
        .sort((K, V) => V.mtime - K.mtime)[0]?.sessionId;
    }
    if (W) J = await sA($.sessionStore, W, G, $.env, $.loadTimeoutMs);
  }
  let Q, Y, z;
  try {
    let N = function () {
        if (V) return;
        ((V = !0), K.close());
      },
      G = mK(J && W && W !== $?.resume ? { ...$, resume: W } : $, !1, J);
    Q = G.queryInstance;
    let { transport: H, abortController: U } = G;
    Y = H;
    let K = G.queryInstance;
    if (J) {
      let O = J;
      K.addCleanupCallback(() => {
        z = H.waitForExit()
          .catch(() => {})
          .then(() => sW(O));
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
          lK(K, H, O, U);
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
      let H = Y;
      z = (H ? H.waitForExit().catch(() => {}) : Promise.resolve()).then(() =>
        sW(J),
      );
    }
    throw (await z, G);
  }
}
function NQ$($) {
  return nz($);
}
function OQ$($, X) {
  return oB($, X);
}
async function wQ$($, X) {
  let W = [];
  try {
    const J = q$(W, nz(X), 1);
    await J.send($);
    for await (let H of J.stream()) if (H.type === "result") return H;
    throw Error("Session ended without result message");
  } catch (Q) {
    var Y = Q,
      z = 1;
  } finally {
    var G = D$(W, Y, z);
    G && (await G);
  }
}
async function BQ$($, X) {
  if (X?.sessionStore) return ac(X.sessionStore, $, X);
  return zq($, X);
}
async function qQ$($) {
  if ($?.sessionStore) return oc($.sessionStore, $);
  return Hq($);
}
async function DQ$($, X) {
  if (X?.sessionStore) return sc(X.sessionStore, $, X);
  return Uq($, X);
}
async function FQ$($, X, J) {
  if (J?.sessionStore) return ec(J.sessionStore, $, X, J.dir);
  return Oq($, X, J);
}
async function jQ$($, X, J) {
  if (J?.sessionStore) return $p(J.sessionStore, $, X, J.dir);
  return wq($, X, J);
}
async function LQ$($, X) {
  if (!U$($)) throw Error(`Invalid sessionId: ${$}`);
  if (X?.sessionStore) {
    if (!X.sessionStore.delete) return;
    let J = _6(X.dir);
    await X.sessionStore.delete({ projectKey: J, sessionId: $ });
    return;
  }
  return Bq($, X);
}
async function MQ$($, X) {
  if (X?.sessionStore) return Xp(X.sessionStore, $, X);
  return Fq($, X);
}
async function AQ$($, X, J) {
  if (!U$($)) throw Error(`Invalid sessionId: ${$}`);
  let W = await n4($, J?.dir);
  if (!W) throw Error(`Session ${$} not found`);
  let Q = _6(J?.dir),
    Y = J?.batchSize && J.batchSize > 0 ? J.batchSize : D7;
  if (
    (await pA(W.filePath, { projectKey: Q, sessionId: $ }, X, Y),
    J?.includeSubagents === !1)
  )
    return;
  let z = W.filePath.replace(/\.jsonl$/, ""),
    G = A6(z, "subagents");
  for (let H of await rc(G)) {
    let U = aA(z, H).split(pK);
    U[U.length - 1] = U.at(-1).replace(/\.jsonl$/, "");
    let K = { projectKey: Q, sessionId: $, subpath: U.join("/") };
    await pA(H, K, X, Y);
    let V = H.replace(/\.jsonl$/, ".meta.json");
    try {
      let N = l$(await rA(V, "utf8"));
      await X.append(K, [{ type: "agent_metadata", ...N }]);
    } catch (N) {
      if (!d4(N)) throw N;
    }
  }
}
async function pA($, X, J, W) {
  let Q = mc({ input: xc($, { encoding: "utf8" }), crlfDelay: 1 / 0 }),
    Y = [],
    z = 0;
  for await (let G of Q) {
    if (!G) continue;
    if ((Y.push(l$(G)), (z += G.length), Y.length >= W || z >= F7))
      (await J.append(X, Y), (Y = []), (z = 0));
  }
  if (Y.length > 0) await J.append(X, Y);
}
async function rc($) {
  let X = [];
  async function J(W) {
    let Q;
    try {
      Q = await yc(W, { withFileTypes: !0 });
    } catch {
      return;
    }
    for (let Y of Q) {
      let z = A6(W, Y.name);
      if (Y.isDirectory()) await J(z);
      else if (Y.isFile() && Y.name.endsWith(".jsonl")) X.push(z);
    }
  }
  return (await J($), X);
}
async function IQ$($, X) {
  if (X?.sessionStore) return Jp(X.sessionStore, $, X.dir);
  return Iq($, X);
}
async function ZQ$($, X, J) {
  if (J?.sessionStore) return Qp(J.sessionStore, $, X, J);
  return Zq($, X, J);
}
function eA($) {
  let X = CJ($ ?? "."),
    J;
  try {
    J = Tc(X);
  } catch {
    J = X;
  }
  return J.normalize("NFC");
}
function _6($) {
  return f1(eA($));
}
function $I($) {
  return (
    $.map((X) => w$(X)).join(`
`) +
    `
`
  );
}
function dA($, X, J) {
  if (X !== void 0 && X > 0) return $.slice(J, J + X);
  if (J > 0) return $.slice(J);
  return $;
}
function XI($) {
  return (
    typeof $ === "object" &&
    $ !== null &&
    "type" in $ &&
    $.type === "agent_metadata"
  );
}
async function oc($, X) {
  let J = eA(X.dir),
    W = f1(J),
    Q = X.offset ?? 0,
    Y = X.limit;
  if ($.listSessionSummaries) {
    let U = await $.listSessionSummaries(W),
      K = $.listSessions
        ? new Map((await $.listSessions(W)).map((w) => [w.sessionId, w]))
        : void 0,
      V = [];
    for (let w of U) {
      let B = K?.get(w.sessionId);
      if (K && !B) continue;
      let F = B !== void 0 && w.mtime < B.mtime;
      V.push({
        sessionId: w.sessionId,
        mtime: F ? B.mtime : w.mtime,
        info: F ? void 0 : XV(w, J),
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
    let N = dA(V, Y, Q),
      O = N.filter((w) => w.info === void 0);
    if (O.length > 0) {
      let w = await iA($, O, X.dir, J),
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
  let G = (await $.listSessions(W)).slice().sort((U, K) => K.mtime - U.mtime),
    H = dA(G, Y, Q);
  return iA($, H, X.dir, J);
}
async function iA($, X, J, W) {
  return (
    await Promise.allSettled(
      X.map(async (Y) => {
        let z = await QI($, Y.sessionId, J);
        if (!z) return null;
        let G = C0(Y.sessionId, JI(z, Y.mtime), W);
        return G ? { ...G, lastModified: Y.mtime } : null;
      }),
    )
  ).flatMap((Y, z) => {
    let G = X[z];
    if (Y.status === "fulfilled") return Y.value ? [Y.value] : [];
    return [{ sessionId: G.sessionId, summary: "", lastModified: G.mtime }];
  });
}
function JI($, X) {
  let J = Buffer.from($, "utf-8"),
    W = J.length,
    Q = J.subarray(0, h6).toString("utf-8"),
    Y = W > h6 ? J.subarray(W - h6).toString("utf-8") : Q;
  return { mtime: X, size: W, head: Q, tail: Y };
}
function tc($) {
  let X = $.trimEnd(),
    J = X.slice(
      X.lastIndexOf(`
`) + 1,
    );
  try {
    let W = l$(J);
    if (
      typeof W === "object" &&
      W !== null &&
      "timestamp" in W &&
      typeof W.timestamp === "string"
    ) {
      let Q = Date.parse(W.timestamp);
      if (!Number.isNaN(Q)) return Q;
    }
  } catch {}
  return Date.now();
}
async function QI($, X, J) {
  let W = _6(J),
    Q = await $.load({ projectKey: W, sessionId: X });
  if (!Q || Q.length === 0) return null;
  return $I(Q);
}
async function ac($, X, J) {
  if (!U$(X)) return [];
  let W = _6(J.dir),
    Q = await $.load({ projectKey: W, sessionId: X });
  if (!Q || Q.length === 0) return [];
  return Wq(Q, {
    limit: J.limit,
    offset: J.offset,
    includeSystemMessages: J.includeSystemMessages,
  });
}
async function sc($, X, J) {
  if (!U$(X)) return;
  let W = await QI($, X, J.dir);
  if (!W) return;
  let Q = JI(W, tc(W));
  return C0(X, Q) ?? void 0;
}
async function ec($, X, J, W) {
  if (!U$(X)) throw Error(`Invalid sessionId: ${X}`);
  if (!J.trim()) throw Error("title must be non-empty");
  let Q = _6(W);
  await $.append({ projectKey: Q, sessionId: X }, [
    {
      type: "custom-title",
      customTitle: J.trim(),
      sessionId: X,
      uuid: cK(),
      timestamp: new Date().toISOString(),
    },
  ]);
}
async function $p($, X, J, W) {
  if (!U$(X)) throw Error(`Invalid sessionId: ${X}`);
  if (J !== null) {
    let Y = x1(J).trim();
    if (!Y) throw Error("tag must be non-empty (use null to clear)");
    J = Y;
  }
  let Q = _6(W);
  await $.append({ projectKey: Q, sessionId: X }, [
    {
      type: "tag",
      tag: J ?? "",
      sessionId: X,
      uuid: cK(),
      timestamp: new Date().toISOString(),
    },
  ]);
}
async function Xp($, X, J) {
  if (!U$(X)) throw Error(`Invalid sessionId: ${X}`);
  if (J.upToMessageId && !U$(J.upToMessageId))
    throw Error(`Invalid upToMessageId: ${J.upToMessageId}`);
  let W = _6(J.dir),
    Q = await $.load({ projectKey: W, sessionId: X });
  if (!Q || Q.length === 0) throw Error(`Session ${X} not found`);
  let { entries: Y, forkedSessionId: z } = jq(Q, X, J);
  return (await $.append({ projectKey: W, sessionId: z }, Y), { sessionId: z });
}
async function Jp($, X, J) {
  if (!U$(X)) return [];
  if (!$.listSubkeys)
    throw Error(
      "sessionStore.listSubkeys is not implemented -- cannot list subagents. Provide a store with a listSubkeys() method.",
    );
  let W = _6(J),
    Q = await $.listSubkeys({ projectKey: W, sessionId: X }),
    Y = new Set();
  for (let z of Q) {
    if (!z.startsWith("subagents/")) continue;
    let G = z.split("/").at(-1);
    if (G.startsWith("agent-")) Y.add(G.slice(6));
  }
  return [...Y];
}
async function Qp($, X, J, W) {
  if (!U$(X)) return [];
  if (!J) return [];
  let Q = _6(W.dir),
    Y = `subagents/agent-${J}`;
  if ($.listSubkeys) {
    let H = await $.listSubkeys({ projectKey: Q, sessionId: X }),
      U = `agent-${J}`,
      K = H.find(
        (V) => V.startsWith("subagents/") && V.split("/").at(-1) === U,
      );
    if (!K) return [];
    Y = K;
  }
  let z = await $.load({ projectKey: Q, sessionId: X, subpath: Y });
  if (!z || z.length === 0) return [];
  let G = z.filter((H) => !XI(H));
  if (G.length === 0) return [];
  return Q3(Buffer.from($I(G)), { limit: W.limit, offset: W.offset });
}
function nA($, X) {
  let J = aA(X, $),
    W = J.split(pK);
  if (W[0] === ".." || tA(J)) return null;
  if (W.length < 2) return null;
  let Q = W[0],
    Y = W[1];
  if (W.length === 2 && Y.endsWith(".jsonl"))
    return { projectKey: Q, sessionId: Y.replace(/\.jsonl$/, "") };
  if (W.length >= 4) {
    let z = W.slice(2),
      G = z.length - 1;
    return (
      (z[G] = z.at(-1).replace(/\.jsonl$/, "")),
      { projectKey: Q, sessionId: Y, subpath: z.join("/") }
    );
  }
  return null;
}
export {
  OQ$ as unstable_v2_resumeSession,
  wQ$ as unstable_v2_prompt,
  NQ$ as unstable_v2_createSession,
  Pc as tool,
  jQ$ as tagSession,
  VQ$ as startup,
  FQ$ as renameSession,
  KQ$ as query,
  vc as parseDirectConnectUrl,
  IQ$ as listSubagents,
  qQ$ as listSessions,
  AQ$ as importSessionToStore,
  ZQ$ as getSubagentMessages,
  BQ$ as getSessionMessages,
  DQ$ as getSessionInfo,
  MQ$ as forkSession,
  xJ as foldSessionSummary,
  LQ$ as deleteSession,
  Ec as createSdkMcpServer,
  TI as SYSTEM_PROMPT_DYNAMIC_BOUNDARY,
  zY as InMemorySessionStore,
  _I as HOOK_EVENTS,
  xI as EXIT_REASONS,
  lA as DirectConnectTransport,
  a6 as DirectConnectError,
  t$ as AbortError,
};
