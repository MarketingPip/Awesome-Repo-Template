!(function t(e, s, n) {
    function i(o, a) {
        if (!s[o]) {
            if (!e[o]) {
                var u = "function" == typeof require && require;
                if (!a && u) return u(o, !0);
                if (r) return r(o, !0);
                var c = new Error("Cannot find module '" + o + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
            }
            var l = (s[o] = { exports: {} });
            e[o][0].call(
                l.exports,
                function (t) {
                    return i(e[o][1][t] || t);
                },
                l,
                l.exports,
                t,
                e,
                s,
                n
            );
        }
        return s[o].exports;
    }
    for (var r = "function" == typeof require && require, o = 0; o < n.length; o++) i(n[o]);
    return i;
})(
    {
        1: [
            function (t, e, s) {
                const n = t("@nlpjs/core"),
                    i = t("@nlpjs/nlp"),
                    r = t("@nlpjs/lang-en-min"),
                    o = t("@nlpjs/request-rn");
                window.nlpjs = { ...n, ...i, ...r, ...o };
            },
            { "@nlpjs/core": 12, "@nlpjs/lang-en-min": 23, "@nlpjs/nlp": 51, "@nlpjs/request-rn": 60 },
        ],
        2: [
            function (t, e, s) {
                e.exports = class {
                    constructor(t, e, s, n, i) {
                        (this.s_size = t.length), (this.s = t), (this.substring_i = e), (this.result = s), (this.method = n), (this.instance = i);
                    }
                };
            },
            {},
        ],
        3: [
            function (t, e, s) {
                const { defaultContainer: n } = t("./container");
                class i {
                    constructor(t = n) {
                        (this.container = t.container || t), (this.name = "arrToObj");
                    }
                    static arrToObj(t) {
                        const e = {};
                        for (let s = 0; s < t.length; s += 1) e[t[s]] = 1;
                        return e;
                    }
                    run(t) {
                        return Array.isArray(t) ? i.arrToObj(t) : ((t.tokens = i.arrToObj(t.tokens)), t);
                    }
                }
                e.exports = i;
            },
            { "./container": 7 },
        ],
        4: [
            function (t, e, s) {
                const { defaultContainer: n } = t("./container"),
                    i = t("./tokenizer");
                e.exports = class {
                    constructor(t = n, e) {
                        (this.container = t.container || t), (this.cache = {}), this.setCurrent(""), (this.dictionary = e || { before: {}, after: {} });
                    }
                    setCurrent(t) {
                        (this.current = t), (this.cursor = 0), (this.limit = this.current.length), (this.limit_backward = 0), (this.bra = this.cursor), (this.ket = this.limit);
                    }
                    getCurrent() {
                        return this.current;
                    }
                    bc(t, e) {
                        return 0 == (t[e >>> 3] & (1 << (7 & e)));
                    }
                    in_grouping(t, e, s) {
                        if (this.cursor >= this.limit) return !1;
                        let n = this.current.charCodeAt(this.cursor);
                        return !(n > s || n < e) && ((n -= e), !this.bc(t, n) && (this.cursor++, !0));
                    }
                    in_grouping_b(t, e, s) {
                        if (this.cursor <= this.limit_backward) return !1;
                        let n = this.current.charCodeAt(this.cursor - 1);
                        return !(n > s || n < e) && ((n -= e), !this.bc(t, n) && (this.cursor--, !0));
                    }
                    out_grouping(t, e, s) {
                        if (this.cursor >= this.limit) return !1;
                        let n = this.current.charCodeAt(this.cursor);
                        return n > s || n < e ? (this.cursor++, !0) : ((n -= e), !!this.bc(t, n) && (this.cursor++, !0));
                    }
                    out_grouping_b(t, e, s) {
                        if (this.cursor <= this.limit_backward) return !1;
                        let n = this.current.charCodeAt(this.cursor - 1);
                        return n > s || n < e ? (this.cursor--, !0) : ((n -= e), !!this.bc(t, n) && (this.cursor--, !0));
                    }
                    eq_s(t, e) {
                        return "string" == typeof t && (t = (e = t).length), !(this.limit - this.cursor < t || this.current.slice(this.cursor, this.cursor + t) != e) && ((this.cursor += t), !0);
                    }
                    eq_s_b(t, e) {
                        return "string" == typeof t && (t = (e = t).length), !(this.cursor - this.limit_backward < t || this.current.slice(this.cursor - t, this.cursor) != e) && ((this.cursor -= t), !0);
                    }
                    find_among(t, e) {
                        let s = 0,
                            n = e || t.length;
                        const i = this.cursor,
                            r = this.limit;
                        let o = 0,
                            a = 0,
                            u = !1;
                        for (;;) {
                            const e = s + ((n - s) >>> 1);
                            let h = 0,
                                g = o < a ? o : a;
                            var c,
                                l = t[e];
                            for (c = g; c < l.s_size; c++) {
                                if (i + g == r) {
                                    h = -1;
                                    break;
                                }
                                if (((h = this.current.charCodeAt(i + g) - l.s.charCodeAt(c)), 0 != h)) break;
                                g++;
                            }
                            if ((h < 0 ? ((n = e), (a = g)) : ((s = e), (o = g)), n - s <= 1)) {
                                if (s > 0) break;
                                if (n == s) break;
                                if (u) break;
                                u = !0;
                            }
                        }
                        for (;;) {
                            if (o >= (l = t[s]).s_size) {
                                if (((this.cursor = i + l.s_size), null == l.method)) return l.result;
                                const t = l.method(l.instance);
                                if (((this.cursor = i + l.s_size), t)) return l.result;
                            }
                            if (((s = l.substring_i), s < 0)) return 0;
                        }
                        return -1;
                    }
                    find_among_b(t, e) {
                        let s = 0,
                            n = e || t.length;
                        const i = this.cursor,
                            r = this.limit_backward;
                        let o = 0,
                            a = 0,
                            u = !1;
                        for (;;) {
                            const e = s + ((n - s) >> 1);
                            let h = 0,
                                g = o < a ? o : a;
                            var c;
                            for (c = (l = t[e]).s_size - 1 - g; c >= 0; c--) {
                                if (i - g == r) {
                                    h = -1;
                                    break;
                                }
                                if (((h = this.current.charCodeAt(i - 1 - g) - l.s.charCodeAt(c)), 0 != h)) break;
                                g++;
                            }
                            if ((h < 0 ? ((n = e), (a = g)) : ((s = e), (o = g)), n - s <= 1)) {
                                if (s > 0) break;
                                if (n == s) break;
                                if (u) break;
                                u = !0;
                            }
                        }
                        for (;;) {
                            var l;
                            if (o >= (l = t[s]).s_size) {
                                if (((this.cursor = i - l.s_size), null == l.method)) return l.result;
                                const t = l.method(this);
                                if (((this.cursor = i - l.s_size), t)) return l.result;
                            }
                            if (((s = l.substring_i), s < 0)) return 0;
                        }
                        return -1;
                    }
                    replace_s(t, e, s) {
                        const n = s.length - (e - t);
                        return (this.current = this.current.slice(0, t) + s + this.current.slice(e)), (this.limit += n), this.cursor >= e ? (this.cursor += n) : this.cursor > t && (this.cursor = t), n;
                    }
                    slice_check() {
                        return !(this.bra < 0 || this.bra > this.ket || this.ket > this.limit || this.limit > this.current.length);
                    }
                    slice_from(t) {
                        return !!this.slice_check() && (this.replace_s(this.bra, this.ket, t), !0);
                    }
                    slice_del() {
                        return this.slice_from("");
                    }
                    insert(t, e, s) {
                        const n = this.replace_s(t, e, s);
                        t <= this.bra && (this.bra += n), t <= this.ket && (this.ket += n);
                    }
                    slice_to(t) {
                        let e = "";
                        return this.slice_check() && (e = this.current.slice(this.bra, this.ket)), e;
                    }
                    stemWord(t) {
                        let e = this.cache["." + t];
                        return (
                            null == e &&
                                (this.dictionary.before[t] ? (e = this.dictionary.before[t]) : (this.setCurrent(t), this.innerStem(), (e = this.getCurrent()), this.dictionary.after[e] && (e = this.dictionary.after[e])),
                                (this.cache["." + t] = e)),
                            e
                        );
                    }
                    stemWords(t) {
                        const e = [];
                        for (let s = 0; s < t.length; s++) {
                            const n = this.stemWord(t[s]).trim();
                            n && e.push(n);
                        }
                        return e;
                    }
                    stem(t) {
                        return this.stemWords(t);
                    }
                    getTokenizer() {
                        return this.tokenizer || (this.tokenizer = this.container.get("tokenizer-" + this.name.slice(-2)) || new i()), this.tokenizer;
                    }
                    getStopwords() {
                        return this.stopwords || (this.stopwords = this.container.get("tokenizer-" + this.name.slice(-2))), this.stopwords;
                    }
                    tokenizeAndStem(t, e = !0) {
                        let s = this.getTokenizer().tokenize(t, !0);
                        if (!e) {
                            const t = this.getStopwords();
                            t && (s = t.removeStopwords(s));
                        }
                        return this.stemWords(s);
                    }
                };
            },
            { "./container": 7, "./tokenizer": 21 },
        ],
        5: [
            function (t, e, s) {
                const { defaultContainer: n } = t("./container");
                e.exports = class {
                    constructor(t = {}, e = n) {
                        (this.container = t.container || e), this.applySettings(this, t);
                    }
                    get logger() {
                        return this.container.get("logger");
                    }
                    applySettings(t, e = {}) {
                        const s = t || {};
                        return (
                            Object.keys(e).forEach((t) => {
                                void 0 === s[t] && (s[t] = e[t]);
                            }),
                            s
                        );
                    }
                    toJSON() {
                        const t = this.jsonExport || {},
                            e = {},
                            s = Object.keys(this);
                        for (let n = 0; n < s.length; n += 1) {
                            const i = s[n];
                            if ("jsonExport" !== i && "jsonImport" !== i && "container" !== i && !i.startsWith("pipeline")) {
                                const s = void 0 === t[i] || t[i];
                                if ("function" == typeof s) {
                                    const t = s.bind(this)(e, this, i, this[i]);
                                    t && (e[i] = t);
                                } else "boolean" == typeof s ? s && ((e[i] = this[i]), "settings" === i && delete e[i].container) : "string" == typeof s && (e[s] = this[i]);
                            }
                        }
                        return e;
                    }
                    fromJSON(t) {
                        const e = this.jsonImport || {},
                            s = Object.keys(t);
                        for (let n = 0; n < s.length; n += 1) {
                            const i = s[n],
                                r = void 0 === e[i] || e[i];
                            if ("function" == typeof r) {
                                const e = r.bind(this)(this, t, i, t[i]);
                                e && (this[i] = e);
                            } else "boolean" == typeof r ? r && (this[i] = t[i]) : "string" == typeof r && (this[r] = t[i]);
                        }
                    }
                    objToValues(t, e) {
                        const s = e || Object.keys(t),
                            n = [];
                        for (let e = 0; e < s.length; e += 1) n.push(t[s[e]]);
                        return n;
                    }
                    valuesToObj(t, e) {
                        const s = {};
                        for (let n = 0; n < t.length; n += 1) s[e[n]] = t[n];
                        return s;
                    }
                    getPipeline(t) {
                        return this.container.getPipeline(t);
                    }
                    async runPipeline(t, e) {
                        return this.container.runPipeline(e || this.pipeline, t, this);
                    }
                    use(t) {
                        this.container.use(t);
                    }
                };
            },
            { "./container": 7 },
        ],
        6: [
            function (t, e, s) {
                (function (s) {
                    (function () {
                        const n = t("./arr-to-obj"),
                            { Container: i } = t("./container"),
                            r = t("./normalizer"),
                            o = t("./obj-to-arr"),
                            { loadEnvFromJson: a } = t("./helper"),
                            u = t("./stemmer"),
                            c = t("./stopwords"),
                            l = t("./tokenizer"),
                            h = t("./timer"),
                            g = t("./logger"),
                            f = t("./memory-storage"),
                            p = t("./mock-fs");
                        function d(t, e) {
                            if ("string" == typeof t) return t.startsWith("$") ? s.env[`${e}${t.slice(1)}`] || s.env[t.slice(1)] : t;
                            if (Array.isArray(t)) return t.map((t) => d(t, e));
                            if ("object" == typeof t) {
                                const s = Object.keys(t),
                                    n = {};
                                for (let i = 0; i < s.length; i += 1) n[s[i]] = d(t[s[i]], e);
                                return n;
                            }
                            return t;
                        }
                        e.exports = function (t, e, s, m, y, w) {
                            const b = t || {},
                                x = s || new i(m);
                            (x.parent = w), m || (x.register("fs", p), x.use(n), x.use(r), x.use(o), x.use(u), x.use(c), x.use(l), x.use(h), x.use(g), x.use(f));
                            const D = b;
                            let k;
                            if ((b.env && a(m, b.env), (k = D), (k = d(k, m ? m + "_" : "")), k.settings)) {
                                const t = Object.keys(k.settings);
                                for (let e = 0; e < t.length; e += 1) x.registerConfiguration(t[e], k.settings[t[e]], !0);
                            }
                            if (k.use)
                                for (let t = 0; t < k.use.length; t += 1) {
                                    const e = k.use[t];
                                    Array.isArray(e) ? x.register(e[0], e[1]) : x.use(e);
                                }
                            if (k.terraform)
                                for (let t = 0; t < k.terraform.length; t += 1) {
                                    const e = k.terraform[t],
                                        s = x.get(e.className);
                                    x.register(e.name, s, !0);
                                }
                            if ((k.childs && (x.childs = k.childs), y))
                                for (let t = 0; t < y.length; t += 1) {
                                    const e = y[t];
                                    x.registerPipeline(e.tag, e.pipeline, e.overwrite);
                                }
                            return (
                                k.pipelines &&
                                    (function (t, e) {
                                        t.loadPipelinesFromString(e);
                                    })(x, k.pipelines),
                                x
                            );
                        };
                    }.call(this));
                }.call(this, t("_process")));
            },
            {
                "./arr-to-obj": 3,
                "./container": 7,
                "./helper": 11,
                "./logger": 13,
                "./memory-storage": 14,
                "./mock-fs": 15,
                "./normalizer": 16,
                "./obj-to-arr": 17,
                "./stemmer": 18,
                "./stopwords": 19,
                "./timer": 20,
                "./tokenizer": 21,
                _process: 97,
            },
        ],
        7: [
            function (t, e, s) {
                const { compareWildcars: n } = t("./helper"),
                    i = t("./default-compiler"),
                    r = t("./logger");
                class o {
                    constructor(t = !1) {
                        (this.classes = {}), (this.factory = {}), (this.pipelines = {}), (this.configurations = {}), (this.compilers = {}), (this.cache = { bestKeys: {}, pipelines: {} }), this.registerCompiler(i), t || this.use(r);
                    }
                    registerCompiler(t, e) {
                        const s = new t(this);
                        this.compilers[e || s.name] = s;
                    }
                    addClass(t, e) {
                        this.classes[e || t.name] = t;
                    }
                    toJSON(t) {
                        const e = t.toJSON ? t.toJSON() : { ...t };
                        return (e.className = t.constructor.name), e;
                    }
                    fromJSON(t, e) {
                        const s = this.classes[t.className];
                        let n;
                        return s ? ((n = new s(e)), n.fromJSON ? n.fromJSON(t) : Object.assign(n, t)) : (n = { ...t }), delete n.className, n;
                    }
                    register(t, e, s = !0) {
                        this.cache.bestKeys = {};
                        const n = "function" == typeof e,
                            i = { name: t, isSingleton: s };
                        (i.instance = s ? (n ? new e() : e) : n ? e : e.constructor), (this.factory[t] = i);
                    }
                    getBestKey(t) {
                        if (void 0 !== this.cache.bestKeys[t]) return this.cache.bestKeys[t];
                        const e = Object.keys(this.factory);
                        for (let s = 0; s < e.length; s += 1) if (n(t, e[s])) return (this.cache.bestKeys[t] = e[s]), e[s];
                        this.cache.bestKeys[t] = null;
                    }
                    get(t, e) {
                        let s = this.factory[t];
                        if (!s) {
                            if (this.parent) return this.parent.get(t, e);
                            const n = this.getBestKey(t);
                            if ((n && (s = this.factory[n]), !s)) return;
                        }
                        if (s.isSingleton) return s.instance && s.instance.applySettings && s.instance.applySettings(s.instance.settings, e), s.instance;
                        return new (0, s.instance)(e, this);
                    }
                    buildLiteral(t, e, s, n) {
                        return { type: "literal", subtype: t, src: e, value: s, context: n, container: this };
                    }
                    resolvePathWithType(t, e, s, n) {
                        const i = t.split(".");
                        let r = i[0].trim();
                        r || (r = t.startsWith(".") ? "this" : "context");
                        if (/^\d+$/.test(r)) return this.buildLiteral("number", t, parseFloat(r), e);
                        if (r.startsWith('"')) return this.buildLiteral("string", t, r.replace(/^"(.+(?="$))"$/, "$1"), e);
                        if (r.startsWith("'")) return this.buildLiteral("string", t, r.replace(/^'(.+(?='$))'$/, "$1"), e);
                        if ("true" === r) return this.buildLiteral("boolean", t, !0, e);
                        if ("false" === r) return this.buildLiteral("boolean", t, !1, e);
                        let o = e;
                        "input" === r || "output" === r ? (o = s) : r && "context" !== r && "this" !== r ? (o = this.get(r) || o[r]) : "this" === r && (o = n);
                        for (let e = 1; e < i.length; e += 1) {
                            const s = i[e];
                            if ((!o || !o[s]) && e < i.length - 1) throw Error(`Path not found in pipeline "${t}"`);
                            const n = o;
                            (o = o[s]), "function" == typeof o && (o = o.bind(n));
                        }
                        return "function" == typeof o ? { type: "function", src: t, value: o, context: e, container: this } : { type: "reference", src: t, value: o, context: e, container: this };
                    }
                    resolvePath(t, e, s, n) {
                        const i = this.resolvePathWithType(t, e, s, n);
                        return i ? i.value : i;
                    }
                    setValue(t, e, s, n, i) {
                        const r = this.resolvePath(e, s, n, i),
                            o = t.split("."),
                            a = o.slice(0, -1).join(".");
                        this.resolvePath(a, s, n, i)[o[o.length - 1]] = r;
                    }
                    incValue(t, e, s, n, i) {
                        const r = this.resolvePath(e, s, n, i),
                            o = t.split(".");
                        t.startsWith(".") && o.push("this");
                        const a = o.slice(0, -1).join(".");
                        this.resolvePath(a, s, n, i)[o[o.length - 1]] += r;
                    }
                    decValue(t, e, s, n, i) {
                        const r = this.resolvePath(e, s, n, i),
                            o = t.split("."),
                            a = o.slice(0, -1).join(".");
                        this.resolvePath(a, s, n, i)[o[o.length - 1]] -= r;
                    }
                    eqValue(t, e, s, n, i) {
                        const r = s,
                            o = this.resolvePath(t, r, n, i),
                            a = this.resolvePath(e, r, n, i);
                        r.floating = o === a;
                    }
                    neqValue(t, e, s, n, i) {
                        const r = s,
                            o = this.resolvePath(t, r, n, i),
                            a = this.resolvePath(e, r, n, i);
                        r.floating = o !== a;
                    }
                    gtValue(t, e, s, n, i) {
                        const r = s,
                            o = this.resolvePath(t, r, n, i),
                            a = this.resolvePath(e, r, n, i);
                        r.floating = o > a;
                    }
                    geValue(t, e, s, n, i) {
                        const r = s,
                            o = this.resolvePath(t, r, n, i),
                            a = this.resolvePath(e, r, n, i);
                        r.floating = o >= a;
                    }
                    ltValue(t, e, s, n, i) {
                        const r = s,
                            o = this.resolvePath(t, r, n, i),
                            a = this.resolvePath(e, r, n, i);
                        r.floating = o < a;
                    }
                    leValue(t, e, s, n, i) {
                        const r = s,
                            o = this.resolvePath(t, r, n, i),
                            a = this.resolvePath(e, r, n, i);
                        r.floating = o <= a;
                    }
                    deleteValue(t, e, s, n) {
                        const i = t.split("."),
                            r = i.slice(0, -1).join(".");
                        delete this.resolvePath(r, e, s, n)[i[i.length - 1]];
                    }
                    getValue(t, e, s, n) {
                        const i = (t || "floating").split("."),
                            r = i.slice(0, -1).join(".");
                        return this.resolvePath(r, e, s, n)[i[i.length - 1]];
                    }
                    async runPipeline(t, e, s, n = 0) {
                        if (n > 10) throw new Error("Pipeline depth is too high: perhaps you are using recursive pipelines?");
                        const i = "string" == typeof t ? this.getPipeline(t) : t;
                        if (!i) throw new Error("Pipeline not found " + t);
                        if (!i.compiler) {
                            const t = JSON.stringify(i);
                            this.registerPipeline(t, i, !1);
                            const r = this.getPipeline(t);
                            return r.compiler.execute(r.compiled, e, s, n);
                        }
                        return i.compiler.execute(i.compiled, e, s, n);
                    }
                    use(t, e, s, n = !1) {
                        let i;
                        if ("function" == typeof t) {
                            if (t.name.endsWith("Compiler")) return this.registerCompiler(t), t.name;
                            i = new t({ container: this });
                        } else i = t;
                        i.register && i.register(this);
                        const r = i.settings ? i.settings.tag : void 0,
                            o = e || i.name || r || t.name || i.constructor.name;
                        return (n && this.get(o)) || this.register(o, i, s), o;
                    }
                    getCompiler(t) {
                        const e = this.compilers[t];
                        return e || (this.parent ? this.parent.getCompiler(t) : this.compilers.default);
                    }
                    buildPipeline(t, e = []) {
                        const s = [];
                        if (t && t.length > 0)
                            for (let n = 0; n < t.length; n += 1) {
                                const i = t[n];
                                if ("$super" === i.trim())
                                    for (let t = 0; t < e.length; t += 1) {
                                        e[t].trim().startsWith("->") || s.push(e[t]);
                                    }
                                else s.push(i);
                            }
                        const n = s.length && s[0].startsWith("// compiler=") ? s[0].slice(12) : "default",
                            i = this.getCompiler(n),
                            r = i.compile(s);
                        return { pipeline: s, compiler: i, compiled: r };
                    }
                    registerPipeline(t, e, s = !0) {
                        if (s || !this.pipelines[t]) {
                            this.cache.pipelines = {};
                            const s = this.getPipeline(t);
                            this.pipelines[t] = this.buildPipeline(e, s ? s.pipeline : []);
                        }
                    }
                    registerPipelineForChilds(t, e, s, n = !0) {
                        this.childPipelines || (this.childPipelines = {}), this.childPipelines[t] || (this.childPipelines[t] = []), this.childPipelines[t].push({ tag: e, pipeline: s, overwrite: n });
                    }
                    getPipeline(t) {
                        if (this.pipelines[t]) return this.pipelines[t];
                        if (void 0 !== this.cache.pipelines[t]) return this.cache.pipelines[t] || void 0;
                        const e = Object.keys(this.pipelines);
                        for (let s = 0; s < e.length; s += 1) if (n(t, e[s])) return (this.cache.pipelines[t] = this.pipelines[e[s]]), this.pipelines[e[s]];
                        this.cache.pipelines[t] = null;
                    }
                    registerConfiguration(t, e, s = !0) {
                        (!s && this.configurations[t]) || (this.configurations[t] = e);
                    }
                    getConfiguration(t) {
                        if (this.configurations[t]) return this.configurations[t];
                        const e = Object.keys(this.configurations);
                        for (let s = 0; s < e.length; s += 1) if (n(t, e[s])) return this.configurations[e[s]];
                    }
                    loadPipelinesFromString(t = "") {
                        const e = t.split(/\n|\r|\r\n/);
                        let s = "",
                            n = [],
                            i = "";
                        for (let t = 0; t < e.length; t += 1) {
                            const r = e[t];
                            "" !== r &&
                                (r.startsWith("# ")
                                    ? (s && (i && !["default", "pipelines"].includes(i.toLowerCase()) ? this.registerPipelineForChilds(i, s, n) : this.registerPipeline(s, n)), (i = r.slice(1).trim()), (s = ""), (n = []))
                                    : r.startsWith("## ")
                                    ? (s && (i && !["default", "pipelines"].includes(i.toLowerCase()) ? this.registerPipelineForChilds(i, s, n) : this.registerPipeline(s, n)), (s = r.slice(2).trim()), (n = []))
                                    : s && n.push(r));
                        }
                        s && (i && !["default", "pipelines"].includes(i.toLowerCase()) ? this.registerPipelineForChilds(i, s, n) : this.registerPipeline(s, n));
                    }
                    async start(t = "main") {
                        const e = Object.keys(this.factory);
                        for (let t = 0; t < e.length; t += 1) {
                            const s = this.factory[e[t]];
                            s.isSingleton && s.instance && s.instance.start && (await s.instance.start());
                        }
                        this.getPipeline(t) && (await this.runPipeline(t, {}, this));
                    }
                }
                const a = new o();
                e.exports = { Container: o, defaultContainer: a };
            },
            { "./default-compiler": 9, "./helper": 11, "./logger": 13 },
        ],
        8: [
            function (t, e, s) {
                const { defaultContainer: n } = t("./container"),
                    i = t("./clonable");
                e.exports = class extends i {
                    constructor(t = {}, e) {
                        super({ settings: {}, container: t.container || e || n }, e),
                            this.applySettings(this.settings, t),
                            this.settings.tag || (this.settings.tag = "context"),
                            this.applySettings(this.settings, this.container.getConfiguration(this.settings.tag));
                    }
                    getStorage() {
                        const t = this.container.get(this.settings.storageName || "storage");
                        if (!t) throw new Error("Storage not found");
                        return t;
                    }
                    getContext(t) {
                        return this.getStorage().read(`${this.settings.tag}-${t}`);
                    }
                    setContext(t, e) {
                        const s = { [t]: e };
                        return this.getStorage().write(s);
                    }
                    async getContextValue(t, e) {
                        const s = await this.getContext(t);
                        return s ? s[e] : void 0;
                    }
                    async setContextValue(t, e, s) {
                        let n = await this.getContext(t);
                        return n || (n = {}), (n[e] = s), this.setContext(t, n);
                    }
                };
            },
            { "./clonable": 5, "./container": 7 },
        ],
        9: [
            function (t, e, s) {
                e.exports = class {
                    constructor(t) {
                        (this.container = t.container || t), (this.name = "default");
                    }
                    getTokenFromWord(t) {
                        return t.startsWith("//")
                            ? { type: "comment", value: t }
                            : ["set", "delete", "get", "inc", "dec", "eq", "neq", "gt", "ge", "lt", "le", "label", "goto", "jne", "je"].includes(t)
                            ? { type: t, arguments: [] }
                            : t.startsWith("$")
                            ? { type: "call", value: t.slice(1) }
                            : { type: "reference", value: t };
                    }
                    compile(t) {
                        const e = [];
                        for (let s = 0; s < t.length; s += 1) {
                            const n = t[s].trim().split(" "),
                                i = [];
                            let r,
                                o = "";
                            for (let t = 0; t < n.length; t += 1) {
                                const e = n[t];
                                let s = !1;
                                r
                                    ? ((o = `${o} ${e}`), (s = !0), e.endsWith(r) && ((r = void 0), i.push(this.getTokenFromWord(o))))
                                    : e.startsWith('"')
                                    ? ((o = e), (s = !0), (r = '"'), e.endsWith('"') && ((r = void 0), i.push(this.getTokenFromWord(o))))
                                    : e.startsWith("'") && ((o = e), (s = !0), (r = "'"), e.endsWith("'") && ((r = void 0), i.push(this.getTokenFromWord(o)))),
                                    s || i.push(this.getTokenFromWord(e));
                            }
                            e.push(i);
                        }
                        return e;
                    }
                    executeCall(t, e, s, n, i) {
                        const r = this.container.getPipeline(t.value);
                        if (!r) throw new Error(`Pipeline $${t.value} not found.`);
                        return this.container.runPipeline(r, s, n, i + 1);
                    }
                    executeReference(t, e, s, n, i) {
                        const r = this.container.resolvePath(e.value, s, n, i),
                            o = [];
                        for (let e = 1; e < t.length; e += 1) o.push(this.container.resolvePathWithType(t[e].value, s, n, i));
                        if (!r) throw new Error("Method not found for step " + JSON.stringify(t));
                        const a = r.run || r;
                        return "function" == typeof a ? ("function" == typeof r ? a(n, ...o) : a.bind(r)(n, ...o)) : a;
                    }
                    doGoto(t, e) {
                        const s = e,
                            n = s.labels[t];
                        s.cursor = n;
                    }
                    async executeAction(t, e, s, n, i) {
                        let r = t[0];
                        if (r && r.value && r.value.startsWith("->")) {
                            if (i > 0) return s;
                            (r = { ...r }), (r.value = r.value.slice(2));
                        }
                        switch (r.type) {
                            case "set":
                                this.container.setValue(t[1].value, t[2] ? t[2].value : void 0, e, s, n);
                                break;
                            case "delete":
                                this.container.deleteValue(t[1].value, e, s, n);
                                break;
                            case "get":
                                return this.container.getValue(t[1] ? t[1].value : void 0, e, s, n);
                            case "inc":
                                this.container.incValue(t[1] ? t[1].value : void 0, t[2] ? t[2].value : "1", e, s, n);
                                break;
                            case "dec":
                                this.container.decValue(t[1] ? t[1].value : void 0, t[2] ? t[2].value : "1", e, s, n);
                                break;
                            case "eq":
                                this.container.eqValue(t[1] ? t[1].value : void 0, t[2] ? t[2].value : void 0, e, s, n);
                                break;
                            case "neq":
                                this.container.neqValue(t[1] ? t[1].value : void 0, t[2] ? t[2].value : void 0, e, s, n);
                                break;
                            case "gt":
                                this.container.gtValue(t[1] ? t[1].value : void 0, t[2] ? t[2].value : void 0, e, s, n);
                                break;
                            case "ge":
                                this.container.geValue(t[1] ? t[1].value : void 0, t[2] ? t[2].value : void 0, e, s, n);
                                break;
                            case "lt":
                                this.container.ltValue(t[1] ? t[1].value : void 0, t[2] ? t[2].value : void 0, e, s, n);
                                break;
                            case "le":
                                this.container.leValue(t[1] ? t[1].value : void 0, t[2] ? t[2].value : void 0, e, s, n);
                                break;
                            case "goto":
                                this.doGoto(t[1].value, e);
                                break;
                            case "jne":
                                e.floating || this.doGoto(t[1].value, e);
                                break;
                            case "je":
                                e.floating && this.doGoto(t[1].value, e);
                                break;
                            case "call":
                                return this.executeCall(r, e, s, n, i);
                            case "reference":
                                return this.executeReference(t, r, e, s, n);
                        }
                        return s;
                    }
                    findLabels(t, e) {
                        const s = e;
                        for (let e = 0; e < t.length; e += 1) {
                            const n = t[e];
                            "label" === n[0].type && (s[n[1].value] = e);
                        }
                    }
                    async execute(t, e, s, n) {
                        let i = e;
                        const r = { cursor: 0, labels: {} };
                        for (this.findLabels(t, r.labels); r.cursor < t.length; ) (i = await this.executeAction(t[r.cursor], r, i, s, n)), (r.cursor += 1);
                        return i;
                    }
                };
            },
            {},
        ],
        10: [
            function (t, e, s) {
                const n = t("./container-bootstrap");
                const i = new (class {
                    constructor() {
                        this.containers = {};
                    }
                    getContainer(t) {
                        return this.containers[t || "default"];
                    }
                    async createContainer(t, e, s, i, r, o) {
                        const a = void 0 === s || s;
                        if (("string" != typeof t && ((e = t), (t = "")), e || ("default" !== t && "" !== t) || (e = "conf.json"), !this.containers[t])) {
                            const s = n(e, a, void 0, i, o);
                            (s.name = t), (this.containers[t] = s), (s.dock = this), (s.parent = r), await s.start(), s.childs && (await this.buildChilds(s));
                        }
                        return this.containers[t];
                    }
                    async buildChilds(t) {
                        if (t && t.childs) {
                            const e = Object.keys(t.childs),
                                s = {};
                            for (let n = 0; n < e.length; n += 1) {
                                const i = t.childs[e[n]];
                                (i.isChild = !0), i.pathPipeline || (i.pathPipeline = e[n] + "_pipeline.md"), (s[e[n]] = await this.createContainer(e[n], i, !1, e[n], t, t.childPipelines ? t.childPipelines[e[n]] : void 0));
                            }
                            t.childs = s;
                        }
                    }
                    async terraform(t, e = !0) {
                        return await this.createContainer("default", t, e, "");
                    }
                    start(t, e = !0) {
                        return this.terraform(t, e);
                    }
                })();
                e.exports = i;
            },
            { "./container-bootstrap": 6 },
        ],
        11: [
            function (t, e, s) {
                (function (t) {
                    (function () {
                        const s = "\\ud800-\\udfff",
                            n = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff",
                            i = "\\ufe0e\\ufe0f",
                            r = "[\\ud800-\\udfff]",
                            o = `[${n}]`,
                            a = "\\ud83c[\\udffb-\\udfff]",
                            u = "[^\\ud800-\\udfff]",
                            c = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                            l = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                            h = "\\u200d",
                            g = `(?:${o}|${a})` + "?",
                            f = "[\\ufe0e\\ufe0f]?",
                            p = f + g + `(?:\\u200d(?:${[u, c, l].join("|")})${f + g})*`,
                            d = `(?:${[`${u}${o}?`, o, c, l, r].join("|")})`,
                            m = RegExp(`[${h + s + n + i}]`),
                            y = RegExp(`${a}(?=${a})|${d + p}`, "g"),
                            w = (t) => m.test(t),
                            b = (t) => t.match(y) || [],
                            x = (t) => t.split("");
                        e.exports = {
                            hasUnicode: w,
                            unicodeToArray: b,
                            asciiToArray: x,
                            stringToArray: (t) => (w(t) ? b(t) : x(t)),
                            compareWildcars: function (t, e) {
                                const s = `^${e
                                    .split("*")
                                    .map((t) => t.replace(/([.*+^=!:${}()|[\]/\\])/g, "\\$1"))
                                    .join(".*")}$`.replace(/\?/g, ".");
                                return new RegExp(s).test(t);
                            },
                            loadEnvFromJson: function (e, s = {}) {
                                const n = Object.keys(s);
                                e = e ? e + "_" : "";
                                for (let i = 0; i < n.length; i += 1) {
                                    const r = `${e}${n[i]}`;
                                    t.env[r] = s[n[i]];
                                }
                            },
                        };
                    }.call(this));
                }.call(this, t("_process")));
            },
            { _process: 97 },
        ],
        12: [
            function (t, e, s) {
                const n = t("./among"),
                    i = t("./arr-to-obj"),
                    r = t("./base-stemmer"),
                    o = t("./container-bootstrap"),
                    a = t("./clonable"),
                    { Container: u, defaultContainer: c } = t("./container"),
                    l = t("./normalizer"),
                    h = t("./obj-to-arr"),
                    g = t("./stemmer"),
                    f = t("./stopwords"),
                    p = t("./tokenizer"),
                    d = t("./timer"),
                    m = t("./logger"),
                    { hasUnicode: y, unicodeToArray: w, asciiToArray: b, stringToArray: x, compareWildcars: D, loadEnv: k } = t("./helper"),
                    C = t("./memory-storage"),
                    v = t("./uuid"),
                    A = t("./dock"),
                    F = t("./context");
                e.exports = {
                    Among: n,
                    ArrToObj: i,
                    BaseStemmer: r,
                    containerBootstrap: o,
                    Clonable: a,
                    Container: u,
                    defaultContainer: c,
                    hasUnicode: y,
                    unicodeToArray: w,
                    asciiToArray: b,
                    stringToArray: x,
                    compareWildcars: D,
                    loadEnv: k,
                    Normalizer: l,
                    ObjToArr: h,
                    Stemmer: g,
                    Stopwords: f,
                    Tokenizer: p,
                    Timer: d,
                    logger: m,
                    MemoryStorage: C,
                    uuid: v,
                    dock: A,
                    Context: F,
                    dockStart: async function (t, e) {
                        return await A.start(t, e), A;
                    },
                };
            },
            {
                "./among": 2,
                "./arr-to-obj": 3,
                "./base-stemmer": 4,
                "./clonable": 5,
                "./container": 7,
                "./container-bootstrap": 6,
                "./context": 8,
                "./dock": 10,
                "./helper": 11,
                "./logger": 13,
                "./memory-storage": 14,
                "./normalizer": 16,
                "./obj-to-arr": 17,
                "./stemmer": 18,
                "./stopwords": 19,
                "./timer": 20,
                "./tokenizer": 21,
                "./uuid": 22,
            },
        ],
        13: [
            function (t, e, s) {
                const n = new (class {
                    constructor() {
                        this.name = "logger";
                    }
                    debug(...t) {
                        console.debug(...t);
                    }
                    info(...t) {
                        console.info(...t);
                    }
                    warn(...t) {
                        console.warn(...t);
                    }
                    error(...t) {
                        console.error(...t);
                    }
                    log(...t) {
                        console.log(...t);
                    }
                    trace(...t) {
                        console.trace(...t);
                    }
                    fatal(...t) {
                        console.error(...t);
                    }
                })();
                e.exports = n;
            },
            {},
        ],
        14: [
            function (t, e, s) {
                const { defaultContainer: n } = t("./container"),
                    i = t("./clonable");
                e.exports = class extends i {
                    constructor(t = {}, e) {
                        super({ settings: {}, container: t.container || e || n }, e),
                            this.applySettings(this.settings, t),
                            this.applySettings(this.settings, { etag: 1, memory: {} }),
                            this.settings.tag || (this.settings.tag = "storage"),
                            this.applySettings(this.settings, this.container.getConfiguration(this.settings.tag));
                    }
                    read(t) {
                        return new Promise((e) => {
                            const s = {};
                            Array.isArray(t) || (t = [t]),
                                t.forEach((t) => {
                                    const e = this.settings.memory[t];
                                    e && (s[t] = JSON.parse(e));
                                }),
                                e(s);
                        });
                    }
                    saveItem(t, e) {
                        const s = { ...e };
                        return (s.eTag = this.settings.etag.toString()), (this.settings.etag += 1), (this.settings.memory[t] = JSON.stringify(s)), s;
                    }
                    write(t) {
                        return new Promise((e, s) => {
                            Object.keys(t).forEach((n) => {
                                const i = t[n],
                                    r = this.settings.memory[n];
                                if (!r || "*" === i.eTag) return e(this.saveItem(n, i));
                                const o = JSON.parse(r);
                                return i.eTag !== o.eTag ? s(new Error(`Error writing "${n}" due to eTag conflict.`)) : e(this.saveItem(n, i));
                            });
                        });
                    }
                    delete(t) {
                        return new Promise((e) => {
                            t.forEach((t) => delete this.settings.memory[t]), e();
                        });
                    }
                };
            },
            { "./clonable": 5, "./container": 7 },
        ],
        15: [
            function (t, e, s) {
                e.exports = {
                    readFile: function () {
                        return new Promise((t) => {
                            t(void 0);
                        });
                    },
                    writeFile: function () {
                        return new Promise((t, e) => {
                            e(new Error("File cannot be written in web"));
                        });
                    },
                    existsSync: function () {
                        return !1;
                    },
                    lstatSync: function () {},
                    readFileSync: function () {},
                    name: "fs",
                };
            },
            {},
        ],
        16: [
            function (t, e, s) {
                const { defaultContainer: n } = t("./container");
                e.exports = class {
                    constructor(t = n) {
                        (this.container = t.container || t), (this.name = "normalize");
                    }
                    normalize(t) {
                        return t
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .toLowerCase();
                    }
                    run(t) {
                        const e = t,
                            s = e.locale || "en",
                            n = this.container.get("normalizer-" + s) || this;
                        return (e.text = n.normalize(e.text, e)), e;
                    }
                };
            },
            { "./container": 7 },
        ],
        17: [
            function (t, e, s) {
                const { defaultContainer: n } = t("./container");
                class i {
                    constructor(t = n) {
                        (this.container = t.container || t), (this.name = "objToArr");
                    }
                    static objToArr(t) {
                        return Object.keys(t);
                    }
                    run(t) {
                        return t.tokens ? ((t.tokens = i.objToArr(t.tokens)), t) : i.objToArr(t);
                    }
                }
                e.exports = i;
            },
            { "./container": 7 },
        ],
        18: [
            function (t, e, s) {
                const { defaultContainer: n } = t("./container");
                e.exports = class {
                    constructor(t = n) {
                        (this.container = t.container || t), (this.name = "stem");
                    }
                    stem(t) {
                        return t;
                    }
                    getStemmer(t) {
                        const e = t,
                            s = ((e.locale || e.settings) && e.settings.locale) || "en";
                        let n = this.container.get("stemmer-" + s);
                        if (!n) {
                            const t = this.container.get("stemmer-bert");
                            n = t && t.activeFor(s) ? t : this;
                        }
                        return n;
                    }
                    async addForTraining(t) {
                        const e = this.getStemmer(t);
                        return e.addUtterance && (await e.addUtterance(t.utterance, t.intent)), t;
                    }
                    async train(t) {
                        const e = this.getStemmer(t);
                        return e.innerTrain && (await e.innerTrain()), t;
                    }
                    async run(t) {
                        const e = t,
                            s = this.getStemmer(e);
                        return (e.tokens = await s.stem(e.tokens, e)), e;
                    }
                };
            },
            { "./container": 7 },
        ],
        19: [
            function (t, e, s) {
                const { defaultContainer: n } = t("./container");
                e.exports = class {
                    constructor(t = n) {
                        (this.container = t.container || t), (this.name = "removeStopwords"), (this.dictionary = {});
                    }
                    build(t) {
                        for (let e = 0; e < t.length; e += 1) this.dictionary[t[e]] = !0;
                    }
                    isNotStopword(t) {
                        return !this.dictionary[t];
                    }
                    isStopword(t) {
                        return !!this.dictionary[t];
                    }
                    removeStopwords(t) {
                        return t.filter((t) => this.isNotStopword(t));
                    }
                    run(t) {
                        if (t.settings && !1 === t.settings.keepStopwords) {
                            const e = t,
                                s = e.locale || "en",
                                n = this.container.get("stopwords-" + s) || this;
                            return (e.tokens = n.removeStopwords(e.tokens, e).filter((t) => t)), e;
                        }
                        return t;
                    }
                };
            },
            { "./container": 7 },
        ],
        20: [
            function (t, e, s) {
                const { defaultContainer: n } = t("./container");
                e.exports = class {
                    constructor(t = n) {
                        (this.container = t.container || t), (this.name = "timer");
                    }
                    start(t) {
                        return t && (t.hrstart = new Date()), t;
                    }
                    stop(t) {
                        const e = t;
                        if (e && e.hrstart) {
                            const t = new Date();
                            (e.elapsed = t.getTime() - e.hrstart.getTime()), delete e.hrstart;
                        }
                        return e;
                    }
                    run(t) {
                        this.start(t);
                    }
                };
            },
            { "./container": 7 },
        ],
        21: [
            function (t, e, s) {
                const { defaultContainer: n } = t("./container"),
                    i = t("./normalizer");
                e.exports = class {
                    constructor(t = n, e = !1) {
                        (this.container = t.container || t), (this.name = "tokenize"), (this.shouldNormalize = e);
                    }
                    getNormalizer() {
                        return this.normalizer || (this.normalizer = this.container.get("normalizer-" + this.name.slice(-2)) || new i()), this.normalizer;
                    }
                    normalize(t, e) {
                        if ((void 0 === e && this.shouldNormalize) || !0 === e) {
                            return this.getNormalizer().normalize(t);
                        }
                        return t;
                    }
                    innerTokenize(t) {
                        return t.split(/[\s,.!?;:([\]'"¡¿)/]+/).filter((t) => t);
                    }
                    tokenize(t, e) {
                        let s;
                        if (this.cache) {
                            const t = new Date();
                            Math.abs(t.getTime() - this.cache.created) / 36e5 > 1 && (this.cache = void 0);
                        }
                        if (this.cache) {
                            if (((s = e ? this.cache.normalized[t] : this.cache.nonNormalized[t]), s)) return s;
                        } else this.cache = { created: new Date().getTime(), normalized: {}, nonNormalized: {} };
                        return (s = this.innerTokenize(this.normalize(t, e), e)), e ? (this.cache.normalized[t] = s) : (this.cache.nonNormalized[t] = s), s;
                    }
                    async run(t) {
                        const e = t,
                            s = e.locale || "en";
                        let n = this.container.get("tokenizer-" + s);
                        if (!n) {
                            const t = this.container.get("tokenizer-bert");
                            n = t && t.activeFor(s) ? t : this;
                        }
                        const i = await n.tokenize(e.text, e);
                        return (e.tokens = i.filter((t) => t)), e;
                    }
                };
            },
            { "./container": 7, "./normalizer": 16 },
        ],
        22: [
            function (t, e, s) {
                e.exports = function () {
                    function t() {
                        return Math.floor(65536 * (1 + Math.random()))
                            .toString(16)
                            .substring(1);
                    }
                    return `${t() + t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`;
                };
            },
            {},
        ],
        23: [
            function (t, e, s) {
                const n = t("./lang-en"),
                    i = t("./tokenizer-en"),
                    r = t("./stemmer-en"),
                    o = t("./stopwords-en"),
                    a = t("./normalizer-en"),
                    u = t("./sentiment/sentiment_en"),
                    c = t("./trigrams");
                e.exports = { LangEn: n, StemmerEn: r, StopwordsEn: o, TokenizerEn: i, NormalizerEn: a, SentimentEn: u, registerTrigrams: c };
            },
            { "./lang-en": 24, "./normalizer-en": 25, "./sentiment/sentiment_en": 26, "./stemmer-en": 27, "./stopwords-en": 28, "./tokenizer-en": 29, "./trigrams": 30 },
        ],
        24: [
            function (t, e, s) {
                const n = t("./tokenizer-en"),
                    i = t("./stemmer-en"),
                    r = t("./stopwords-en"),
                    o = t("./normalizer-en"),
                    a = t("./sentiment/sentiment_en"),
                    u = t("./trigrams");
                e.exports = class {
                    register(t) {
                        t.use(n), t.use(i), t.use(r), t.use(o), t.register("sentiment-en", a), u(t);
                    }
                };
            },
            { "./normalizer-en": 25, "./sentiment/sentiment_en": 26, "./stemmer-en": 27, "./stopwords-en": 28, "./tokenizer-en": 29, "./trigrams": 30 },
        ],
        25: [
            function (t, e, s) {
                const { Normalizer: n } = t("@nlpjs/core");
                e.exports = class extends n {
                    constructor(t) {
                        super(t), (this.name = "normalizer-en");
                    }
                    normalize(t) {
                        return t
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .toLowerCase();
                    }
                    run(t) {
                        const e = t;
                        return (e.text = this.normalize(e.text, e)), e;
                    }
                };
            },
            { "@nlpjs/core": 12 },
        ],
        26: [
            function (t, e, s) {
                e.exports = { senticon: void 0, afinn: void 0, pattern: void 0, negations: { words: [] } };
            },
            {},
        ],
        27: [
            function (t, e, s) {
                const { Among: n, BaseStemmer: i } = t("@nlpjs/core");
                class r extends i {
                    constructor(t) {
                        super(t), (this.name = "stemmer-en"), (this.B_Y_found = !1), (this.I_p2 = 0), (this.I_p1 = 0);
                    }
                    r_prelude() {
                        let t, e, s, n, i;
                        (this.B_Y_found = !1), (t = this.cursor);
                        let o = !0;
                        for (; 1 == o && ((o = !1), (this.bra = this.cursor), this.eq_s("'")); ) if (((this.ket = this.cursor), !this.slice_del())) return !1;
                        (this.cursor = t), (e = this.cursor);
                        let a = !0;
                        for (; 1 == a && ((a = !1), (this.bra = this.cursor), this.eq_s("y")); ) {
                            if (((this.ket = this.cursor), !this.slice_from("Y"))) return !1;
                            this.B_Y_found = !0;
                        }
                        (this.cursor = e), (s = this.cursor);
                        let u = !0;
                        for (; 1 == u; ) {
                            u = !1;
                            t: for (;;) {
                                n = this.cursor;
                                let t = !0;
                                e: for (; 1 == t; ) {
                                    t = !1;
                                    s: for (;;) {
                                        i = this.cursor;
                                        let t = !0;
                                        for (; 1 == t && ((t = !1), this.in_grouping(r.g_v, 97, 121)) && ((this.bra = this.cursor), this.eq_s("y")); ) {
                                            (this.ket = this.cursor), (this.cursor = i);
                                            break s;
                                        }
                                        if (((this.cursor = i), this.cursor >= this.limit)) break e;
                                        this.cursor++;
                                    }
                                    if (!this.slice_from("Y")) return !1;
                                    this.B_Y_found = !0;
                                    continue t;
                                }
                                this.cursor = n;
                                break;
                            }
                        }
                        return (this.cursor = s), !0;
                    }
                    r_mark_regions() {
                        let t, e;
                        (this.I_p1 = this.limit), (this.I_p2 = this.limit), (t = this.cursor);
                        let s = !0;
                        t: for (; 1 == s; ) {
                            s = !1;
                            let t = !0;
                            e: for (; 1 == t; ) {
                                (t = !1), (e = this.cursor);
                                let s = !0;
                                for (; 1 == s && ((s = !1), 0 != this.find_among(r.a_0, 3)); ) break e;
                                this.cursor = e;
                                s: for (;;) {
                                    let t = !0;
                                    for (; 1 == t && ((t = !1), this.in_grouping(r.g_v, 97, 121)); ) break s;
                                    if (this.cursor >= this.limit) break t;
                                    this.cursor++;
                                }
                                s: for (;;) {
                                    let t = !0;
                                    for (; 1 == t && ((t = !1), this.out_grouping(r.g_v, 97, 121)); ) break s;
                                    if (this.cursor >= this.limit) break t;
                                    this.cursor++;
                                }
                            }
                            this.I_p1 = this.cursor;
                            e: for (;;) {
                                let t = !0;
                                for (; 1 == t && ((t = !1), this.in_grouping(r.g_v, 97, 121)); ) break e;
                                if (this.cursor >= this.limit) break t;
                                this.cursor++;
                            }
                            e: for (;;) {
                                let t = !0;
                                for (; 1 == t && ((t = !1), this.out_grouping(r.g_v, 97, 121)); ) break e;
                                if (this.cursor >= this.limit) break t;
                                this.cursor++;
                            }
                            this.I_p2 = this.cursor;
                        }
                        return (this.cursor = t), !0;
                    }
                    r_shortv() {
                        let t,
                            e = !0;
                        t: for (; 1 == e; ) {
                            (e = !1), (t = this.limit - this.cursor);
                            let s = !0;
                            for (; 1 == s && ((s = !1), this.out_grouping_b(r.g_v_WXY, 89, 121)) && this.in_grouping_b(r.g_v, 97, 121) && this.out_grouping_b(r.g_v, 97, 121); ) break t;
                            if (((this.cursor = this.limit - t), !this.out_grouping_b(r.g_v, 97, 121))) return !1;
                            if (!this.in_grouping_b(r.g_v, 97, 121)) return !1;
                            if (this.cursor > this.limit_backward) return !1;
                        }
                        return !0;
                    }
                    r_R1() {
                        return this.I_p1 <= this.cursor;
                    }
                    r_R2() {
                        return this.I_p2 <= this.cursor;
                    }
                    r_Step_1a() {
                        let t, e, s;
                        e = this.limit - this.cursor;
                        let n = !0;
                        t: for (; 1 == n; ) {
                            if (((n = !1), (this.ket = this.cursor), (t = this.find_among_b(r.a_1, 3)), 0 == t)) {
                                this.cursor = this.limit - e;
                                break;
                            }
                            switch (((this.bra = this.cursor), t)) {
                                case 0:
                                    this.cursor = this.limit - e;
                                    break t;
                                case 1:
                                    if (!this.slice_del()) return !1;
                            }
                        }
                        if (((this.ket = this.cursor), (t = this.find_among_b(r.a_2, 6)), 0 == t)) return !1;
                        switch (((this.bra = this.cursor), t)) {
                            case 0:
                                return !1;
                            case 1:
                                if (!this.slice_from("ss")) return !1;
                                break;
                            case 2:
                                var i = !0;
                                t: for (; 1 == i; ) {
                                    (i = !1), (s = this.limit - this.cursor);
                                    let t = !0;
                                    for (; 1 == t; ) {
                                        t = !1;
                                        {
                                            const t = this.cursor - 2;
                                            if (this.limit_backward > t || t > this.limit) break;
                                            this.cursor = t;
                                        }
                                        if (!this.slice_from("i")) return !1;
                                        break t;
                                    }
                                    if (((this.cursor = this.limit - s), !this.slice_from("ie"))) return !1;
                                }
                                break;
                            case 3:
                                if (this.cursor <= this.limit_backward) return !1;
                                this.cursor--;
                                t: for (;;) {
                                    let t = !0;
                                    for (; 1 == t && ((t = !1), this.in_grouping_b(r.g_v, 97, 121)); ) break t;
                                    if (this.cursor <= this.limit_backward) return !1;
                                    this.cursor--;
                                }
                                if (!this.slice_del()) return !1;
                        }
                        return !0;
                    }
                    r_Step_1b() {
                        let t, e, s, n;
                        if (((this.ket = this.cursor), (t = this.find_among_b(r.a_4, 6)), 0 == t)) return !1;
                        switch (((this.bra = this.cursor), t)) {
                            case 0:
                                return !1;
                            case 1:
                                if (!this.r_R1()) return !1;
                                if (!this.slice_from("ee")) return !1;
                                break;
                            case 2:
                                e = this.limit - this.cursor;
                                t: for (;;) {
                                    let t = !0;
                                    for (; 1 == t && ((t = !1), this.in_grouping_b(r.g_v, 97, 121)); ) break t;
                                    if (this.cursor <= this.limit_backward) return !1;
                                    this.cursor--;
                                }
                                if (((this.cursor = this.limit - e), !this.slice_del())) return !1;
                                if (((s = this.limit - this.cursor), (t = this.find_among_b(r.a_3, 13)), 0 == t)) return !1;
                                switch (((this.cursor = this.limit - s), t)) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        var i = this.cursor;
                                        this.insert(this.cursor, this.cursor, "e"), (this.cursor = i);
                                        break;
                                    case 2:
                                        if (((this.ket = this.cursor), this.cursor <= this.limit_backward)) return !1;
                                        if ((this.cursor--, (this.bra = this.cursor), !this.slice_del())) return !1;
                                        break;
                                    case 3:
                                        if (this.cursor != this.I_p1) return !1;
                                        if (((n = this.limit - this.cursor), !this.r_shortv())) return !1;
                                        this.cursor = this.limit - n;
                                        i = this.cursor;
                                        this.insert(this.cursor, this.cursor, "e"), (this.cursor = i);
                                }
                        }
                        return !0;
                    }
                    r_Step_1c() {
                        let t, e;
                        this.ket = this.cursor;
                        let s = !0;
                        t: for (; 1 == s; ) {
                            (s = !1), (t = this.limit - this.cursor);
                            let e = !0;
                            for (; 1 == e && ((e = !1), this.eq_s_b("y")); ) break t;
                            if (((this.cursor = this.limit - t), !this.eq_s_b("Y"))) return !1;
                        }
                        if (((this.bra = this.cursor), !this.out_grouping_b(r.g_v, 97, 121))) return !1;
                        {
                            e = this.limit - this.cursor;
                            let t = !0;
                            for (; 1 == t && ((t = !1), !(this.cursor > this.limit_backward)); ) return !1;
                            this.cursor = this.limit - e;
                        }
                        return !!this.slice_from("i");
                    }
                    r_Step_2() {
                        let t;
                        if (((this.ket = this.cursor), (t = this.find_among_b(r.a_5, 24)), 0 == t)) return !1;
                        if (((this.bra = this.cursor), !this.r_R1())) return !1;
                        switch (t) {
                            case 0:
                                return !1;
                            case 1:
                                if (!this.slice_from("tion")) return !1;
                                break;
                            case 2:
                                if (!this.slice_from("ence")) return !1;
                                break;
                            case 3:
                                if (!this.slice_from("ance")) return !1;
                                break;
                            case 4:
                                if (!this.slice_from("able")) return !1;
                                break;
                            case 5:
                                if (!this.slice_from("ent")) return !1;
                                break;
                            case 6:
                                if (!this.slice_from("ize")) return !1;
                                break;
                            case 7:
                                if (!this.slice_from("ate")) return !1;
                                break;
                            case 8:
                                if (!this.slice_from("al")) return !1;
                                break;
                            case 9:
                                if (!this.slice_from("ful")) return !1;
                                break;
                            case 10:
                                if (!this.slice_from("ous")) return !1;
                                break;
                            case 11:
                                if (!this.slice_from("ive")) return !1;
                                break;
                            case 12:
                                if (!this.slice_from("ble")) return !1;
                                break;
                            case 13:
                                if (!this.eq_s_b("l")) return !1;
                                if (!this.slice_from("og")) return !1;
                                break;
                            case 14:
                                if (!this.slice_from("ful")) return !1;
                                break;
                            case 15:
                                if (!this.slice_from("less")) return !1;
                                break;
                            case 16:
                                if (!this.in_grouping_b(r.g_valid_LI, 99, 116)) return !1;
                                if (!this.slice_del()) return !1;
                        }
                        return !0;
                    }
                    r_Step_3() {
                        let t;
                        if (((this.ket = this.cursor), (t = this.find_among_b(r.a_6, 9)), 0 == t)) return !1;
                        if (((this.bra = this.cursor), !this.r_R1())) return !1;
                        switch (t) {
                            case 0:
                                return !1;
                            case 1:
                                if (!this.slice_from("tion")) return !1;
                                break;
                            case 2:
                                if (!this.slice_from("ate")) return !1;
                                break;
                            case 3:
                                if (!this.slice_from("al")) return !1;
                                break;
                            case 4:
                                if (!this.slice_from("ic")) return !1;
                                break;
                            case 5:
                                if (!this.slice_del()) return !1;
                                break;
                            case 6:
                                if (!this.r_R2()) return !1;
                                if (!this.slice_del()) return !1;
                        }
                        return !0;
                    }
                    r_Step_4() {
                        let t, e;
                        if (((this.ket = this.cursor), (t = this.find_among_b(r.a_7, 18)), 0 == t)) return !1;
                        if (((this.bra = this.cursor), !this.r_R2())) return !1;
                        switch (t) {
                            case 0:
                                return !1;
                            case 1:
                                if (!this.slice_del()) return !1;
                                break;
                            case 2:
                                var s = !0;
                                t: for (; 1 == s; ) {
                                    (s = !1), (e = this.limit - this.cursor);
                                    let t = !0;
                                    for (; 1 == t && ((t = !1), this.eq_s_b("s")); ) break t;
                                    if (((this.cursor = this.limit - e), !this.eq_s_b("t"))) return !1;
                                }
                                if (!this.slice_del()) return !1;
                        }
                        return !0;
                    }
                    r_Step_5() {
                        let t, e, s;
                        if (((this.ket = this.cursor), (t = this.find_among_b(r.a_8, 2)), 0 == t)) return !1;
                        switch (((this.bra = this.cursor), t)) {
                            case 0:
                                return !1;
                            case 1:
                                var n = !0;
                                t: for (; 1 == n; ) {
                                    (n = !1), (e = this.limit - this.cursor);
                                    let t = !0;
                                    for (; 1 == t && ((t = !1), this.r_R2()); ) break t;
                                    if (((this.cursor = this.limit - e), !this.r_R1())) return !1;
                                    {
                                        s = this.limit - this.cursor;
                                        let t = !0;
                                        for (; 1 == t && ((t = !1), this.r_shortv()); ) return !1;
                                        this.cursor = this.limit - s;
                                    }
                                }
                                if (!this.slice_del()) return !1;
                                break;
                            case 2:
                                if (!this.r_R2()) return !1;
                                if (!this.eq_s_b("l")) return !1;
                                if (!this.slice_del()) return !1;
                        }
                        return !0;
                    }
                    r_exception2() {
                        return (this.ket = this.cursor), 0 != this.find_among_b(r.a_9, 8) && ((this.bra = this.cursor), !(this.cursor > this.limit_backward));
                    }
                    r_exception1() {
                        let t;
                        if (((this.bra = this.cursor), (t = this.find_among(r.a_10, 18)), 0 == t)) return !1;
                        if (((this.ket = this.cursor), this.cursor < this.limit)) return !1;
                        switch (t) {
                            case 0:
                                return !1;
                            case 1:
                                if (!this.slice_from("ski")) return !1;
                                break;
                            case 2:
                                if (!this.slice_from("sky")) return !1;
                                break;
                            case 3:
                                if (!this.slice_from("die")) return !1;
                                break;
                            case 4:
                                if (!this.slice_from("lie")) return !1;
                                break;
                            case 5:
                                if (!this.slice_from("tie")) return !1;
                                break;
                            case 6:
                                if (!this.slice_from("idl")) return !1;
                                break;
                            case 7:
                                if (!this.slice_from("gentl")) return !1;
                                break;
                            case 8:
                                if (!this.slice_from("ugli")) return !1;
                                break;
                            case 9:
                                if (!this.slice_from("earli")) return !1;
                                break;
                            case 10:
                                if (!this.slice_from("onli")) return !1;
                                break;
                            case 11:
                                if (!this.slice_from("singl")) return !1;
                        }
                        return !0;
                    }
                    r_postlude() {
                        let t, e;
                        if (!this.B_Y_found) return !1;
                        t: for (;;) {
                            t = this.cursor;
                            let s = !0;
                            e: for (; 1 == s; ) {
                                s = !1;
                                s: for (;;) {
                                    e = this.cursor;
                                    let t = !0;
                                    for (; 1 == t && ((t = !1), (this.bra = this.cursor), this.eq_s("Y")); ) {
                                        (this.ket = this.cursor), (this.cursor = e);
                                        break s;
                                    }
                                    if (((this.cursor = e), this.cursor >= this.limit)) break e;
                                    this.cursor++;
                                }
                                if (!this.slice_from("y")) return !1;
                                continue t;
                            }
                            this.cursor = t;
                            break;
                        }
                        return !0;
                    }
                    innerStem() {
                        let t,
                            e,
                            s,
                            n,
                            i,
                            r,
                            o,
                            a,
                            u,
                            c,
                            l,
                            h,
                            g,
                            f = !0;
                        t: for (; 1 == f; ) {
                            (f = !1), (t = this.cursor);
                            let p = !0;
                            for (; 1 == p && ((p = !1), this.r_exception1()); ) break t;
                            this.cursor = t;
                            let d = !0;
                            e: for (; 1 == d; ) {
                                d = !1;
                                {
                                    e = this.cursor;
                                    let t = !0;
                                    for (; 1 == t; ) {
                                        t = !1;
                                        {
                                            const t = this.cursor + 3;
                                            if (t < 0 || t > this.limit) break;
                                            this.cursor = t;
                                        }
                                        break e;
                                    }
                                    this.cursor = e;
                                }
                                break t;
                            }
                            (this.cursor = t), (s = this.cursor);
                            let m = !0;
                            for (; 1 == m && ((m = !1), this.r_prelude()); );
                            (this.cursor = s), (n = this.cursor);
                            let y = !0;
                            for (; 1 == y && ((y = !1), this.r_mark_regions()); );
                            (this.cursor = n), (this.limit_backward = this.cursor), (this.cursor = this.limit), (i = this.limit - this.cursor);
                            let w = !0;
                            for (; 1 == w && ((w = !1), this.r_Step_1a()); );
                            this.cursor = this.limit - i;
                            let b = !0;
                            e: for (; 1 == b; ) {
                                (b = !1), (r = this.limit - this.cursor);
                                let t = !0;
                                for (; 1 == t && ((t = !1), this.r_exception2()); ) break e;
                                (this.cursor = this.limit - r), (o = this.limit - this.cursor);
                                let e = !0;
                                for (; 1 == e && ((e = !1), this.r_Step_1b()); );
                                (this.cursor = this.limit - o), (a = this.limit - this.cursor);
                                let s = !0;
                                for (; 1 == s && ((s = !1), this.r_Step_1c()); );
                                (this.cursor = this.limit - a), (u = this.limit - this.cursor);
                                let n = !0;
                                for (; 1 == n && ((n = !1), this.r_Step_2()); );
                                (this.cursor = this.limit - u), (c = this.limit - this.cursor);
                                let i = !0;
                                for (; 1 == i && ((i = !1), this.r_Step_3()); );
                                (this.cursor = this.limit - c), (l = this.limit - this.cursor);
                                let g = !0;
                                for (; 1 == g && ((g = !1), this.r_Step_4()); );
                                (this.cursor = this.limit - l), (h = this.limit - this.cursor);
                                let f = !0;
                                for (; 1 == f && ((f = !1), this.r_Step_5()); );
                                this.cursor = this.limit - h;
                            }
                            (this.cursor = this.limit_backward), (g = this.cursor);
                            let x = !0;
                            for (; 1 == x && ((x = !1), this.r_postlude()); );
                            this.cursor = g;
                        }
                        return !0;
                    }
                }
                (r.methodObject = new r()),
                    (r.a_0 = [new n("arsen", -1, -1), new n("commun", -1, -1), new n("gener", -1, -1)]),
                    (r.a_1 = [new n("'", -1, 1), new n("'s'", 0, 1), new n("'s", -1, 1)]),
                    (r.a_2 = [new n("ied", -1, 2), new n("s", -1, 3), new n("ies", 1, 2), new n("sses", 1, 1), new n("ss", 1, -1), new n("us", 1, -1)]),
                    (r.a_3 = [
                        new n("", -1, 3),
                        new n("bb", 0, 2),
                        new n("dd", 0, 2),
                        new n("ff", 0, 2),
                        new n("gg", 0, 2),
                        new n("bl", 0, 1),
                        new n("mm", 0, 2),
                        new n("nn", 0, 2),
                        new n("pp", 0, 2),
                        new n("rr", 0, 2),
                        new n("at", 0, 1),
                        new n("tt", 0, 2),
                        new n("iz", 0, 1),
                    ]),
                    (r.a_4 = [new n("ed", -1, 2), new n("eed", 0, 1), new n("ing", -1, 2), new n("edly", -1, 2), new n("eedly", 3, 1), new n("ingly", -1, 2)]),
                    (r.a_5 = [
                        new n("anci", -1, 3),
                        new n("enci", -1, 2),
                        new n("ogi", -1, 13),
                        new n("li", -1, 16),
                        new n("bli", 3, 12),
                        new n("abli", 4, 4),
                        new n("alli", 3, 8),
                        new n("fulli", 3, 14),
                        new n("lessli", 3, 15),
                        new n("ousli", 3, 10),
                        new n("entli", 3, 5),
                        new n("aliti", -1, 8),
                        new n("biliti", -1, 12),
                        new n("iviti", -1, 11),
                        new n("tional", -1, 1),
                        new n("ational", 14, 7),
                        new n("alism", -1, 8),
                        new n("ation", -1, 7),
                        new n("ization", 17, 6),
                        new n("izer", -1, 6),
                        new n("ator", -1, 7),
                        new n("iveness", -1, 11),
                        new n("fulness", -1, 9),
                        new n("ousness", -1, 10),
                    ]),
                    (r.a_6 = [new n("icate", -1, 4), new n("ative", -1, 6), new n("alize", -1, 3), new n("iciti", -1, 4), new n("ical", -1, 4), new n("tional", -1, 1), new n("ational", 5, 2), new n("ful", -1, 5), new n("ness", -1, 5)]),
                    (r.a_7 = [
                        new n("ic", -1, 1),
                        new n("ance", -1, 1),
                        new n("ence", -1, 1),
                        new n("able", -1, 1),
                        new n("ible", -1, 1),
                        new n("ate", -1, 1),
                        new n("ive", -1, 1),
                        new n("ize", -1, 1),
                        new n("iti", -1, 1),
                        new n("al", -1, 1),
                        new n("ism", -1, 1),
                        new n("ion", -1, 2),
                        new n("er", -1, 1),
                        new n("ous", -1, 1),
                        new n("ant", -1, 1),
                        new n("ent", -1, 1),
                        new n("ment", 15, 1),
                        new n("ement", 16, 1),
                    ]),
                    (r.a_8 = [new n("e", -1, 1), new n("l", -1, 2)]),
                    (r.a_9 = [new n("succeed", -1, -1), new n("proceed", -1, -1), new n("exceed", -1, -1), new n("canning", -1, -1), new n("inning", -1, -1), new n("earring", -1, -1), new n("herring", -1, -1), new n("outing", -1, -1)]),
                    (r.a_10 = [
                        new n("andes", -1, -1),
                        new n("atlas", -1, -1),
                        new n("bias", -1, -1),
                        new n("cosmos", -1, -1),
                        new n("dying", -1, 3),
                        new n("early", -1, 9),
                        new n("gently", -1, 7),
                        new n("howe", -1, -1),
                        new n("idly", -1, 6),
                        new n("lying", -1, 4),
                        new n("news", -1, -1),
                        new n("only", -1, 10),
                        new n("singly", -1, 11),
                        new n("skies", -1, 2),
                        new n("skis", -1, 1),
                        new n("sky", -1, -1),
                        new n("tying", -1, 5),
                        new n("ugly", -1, 8),
                    ]),
                    (r.g_v = [17, 65, 16, 1]),
                    (r.g_v_WXY = [1, 17, 65, 208, 1]),
                    (r.g_valid_LI = [55, 141, 2]),
                    (e.exports = r);
            },
            { "@nlpjs/core": 12 },
        ],
        28: [
            function (t, e, s) {
                const { Stopwords: n } = t("@nlpjs/core");
                e.exports = class extends n {
                    constructor(t, e) {
                        super(t), (this.name = "stopwords-en"), (this.dictionary = {});
                        const s = e || [
                            "about",
                            "above",
                            "after",
                            "again",
                            "all",
                            "also",
                            "am",
                            "an",
                            "and",
                            "another",
                            "any",
                            "are",
                            "as",
                            "at",
                            "be",
                            "because",
                            "been",
                            "before",
                            "being",
                            "below",
                            "between",
                            "both",
                            "but",
                            "by",
                            "came",
                            "can",
                            "cannot",
                            "come",
                            "could",
                            "did",
                            "do",
                            "does",
                            "doing",
                            "during",
                            "each",
                            "few",
                            "for",
                            "from",
                            "further",
                            "get",
                            "got",
                            "has",
                            "had",
                            "he",
                            "have",
                            "her",
                            "here",
                            "him",
                            "himself",
                            "his",
                            "how",
                            "if",
                            "in",
                            "into",
                            "is",
                            "it",
                            "its",
                            "itself",
                            "like",
                            "make",
                            "many",
                            "me",
                            "might",
                            "more",
                            "most",
                            "much",
                            "must",
                            "my",
                            "myself",
                            "never",
                            "now",
                            "of",
                            "on",
                            "only",
                            "or",
                            "other",
                            "our",
                            "ours",
                            "ourselves",
                            "out",
                            "over",
                            "own",
                            "said",
                            "same",
                            "see",
                            "should",
                            "since",
                            "so",
                            "some",
                            "still",
                            "such",
                            "take",
                            "than",
                            "that",
                            "the",
                            "their",
                            "theirs",
                            "them",
                            "themselves",
                            "then",
                            "there",
                            "these",
                            "they",
                            "this",
                            "those",
                            "through",
                            "to",
                            "too",
                            "under",
                            "until",
                            "up",
                            "very",
                            "was",
                            "way",
                            "we",
                            "well",
                            "were",
                            "what",
                            "where",
                            "when",
                            "which",
                            "while",
                            "who",
                            "whom",
                            "with",
                            "would",
                            "why",
                            "you",
                            "your",
                            "yours",
                            "yourself",
                            "a",
                            "b",
                            "c",
                            "d",
                            "e",
                            "f",
                            "g",
                            "h",
                            "i",
                            "j",
                            "k",
                            "l",
                            "m",
                            "n",
                            "o",
                            "p",
                            "q",
                            "r",
                            "s",
                            "t",
                            "u",
                            "v",
                            "w",
                            "x",
                            "y",
                            "z",
                            "$",
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "0",
                            "_",
                        ];
                        this.build(s);
                    }
                };
            },
            { "@nlpjs/core": 12 },
        ],
        29: [
            function (t, e, s) {
                const { Tokenizer: n } = t("@nlpjs/core");
                e.exports = class extends n {
                    constructor(t, e) {
                        super(t, e), (this.name = "tokenizer-en");
                    }
                    replace(t) {
                        let e = t.replace(/n't([ ,:;.!?]|$)/gi, " not ");
                        return (
                            (e = e.replace(/can't([ ,:;.!?]|$)/gi, "can not ")),
                            (e = e.replace(/'ll([ ,:;.!?]|$)/gi, " will ")),
                            (e = e.replace(/'s([ ,:;.!?]|$)/gi, " is ")),
                            (e = e.replace(/'re([ ,:;.!?]|$)/gi, " are ")),
                            (e = e.replace(/'ve([ ,:;.!?]|$)/gi, " have ")),
                            (e = e.replace(/'m([ ,:;.!?]|$)/gi, " am ")),
                            (e = e.replace(/'d([ ,:;.!?]|$)/gi, " had ")),
                            e
                        );
                    }
                    replaceContractions(t) {
                        const e = { cannot: ["can", "not"], gonna: ["going", "to"], wanna: ["want", "to"] },
                            s = [];
                        return (
                            t.forEach((t) => {
                                const n = t.toLowerCase();
                                e[n] ? s.push(...e[n]) : s.push(t);
                            }),
                            s
                        );
                    }
                    innerTokenize(t) {
                        const e = this.replace(t)
                            .split(/[\s,.!?;:([\]'"¡¿)/]+/)
                            .filter((t) => t);
                        return this.replaceContractions(e, t);
                    }
                };
            },
            { "@nlpjs/core": 12 },
        ],
        30: [
            function (t, e, s) {
                e.exports = function (t) {
                    const e = t.get("Language");
                    e &&
                        e.addModel(
                            "Latin",
                            "eng",
                            " ththe anhe nd andion ofof tio toto on  inal atiighghtrig rior entas ed is ll in  bee rne oneveralls tevet t frs a ha rety ery ord t prht  co eve he ang ts hisingbe yon shce reefreryon thermennatshapronaly ahases for hihalf tn an ont  pes o fod inceer onsrese sectityly l bry e eerse ian e o dectidomedoeedhtsteronare  no wh a  und f asny l ae pere en na winitnted aanyted dins stath perithe tst e cy tom soc arch t od ontis eequve ociman fuoteothess al acwitial mauni serea so onlitintr ty oencthiualt a eqtatquaive stalie wl oaref hconte led isundciae fle  lay iumaby  byhumf aic  huavege r a woo ams com meeass dtec lin een rattitplewheateo ts rt frot chciedisagearyo oancelino  fa susonincat ndahouwort inderomoms otg temetleitignis witlducd wwhiacthicaw law heichminimiorto sse e bntrtraeduountane dnstl pd nld ntas iblen p pun s atilyrththofulssidero ecatucauntien edo ph aeraindpensecn wommr s"
                        );
                };
            },
            {},
        ],
        31: [
            function (t, e, s) {
                e.exports = {
                    Latin: { spa: "", eng: "", por: "", ind: "", fra: "", deu: "", ita: "", tur: "", nld: "", tgl: "", hun: "", ces: "", swe: "", fin: "", dan: "", cat: "", glg: "", slv: "" },
                    Cyrillic: { rus: "", ukr: "" },
                    Arabic: { arb: "", fas: "" },
                    Devanagari: { hin: "" },
                    Ethiopic: {},
                    Hebrew: {},
                };
            },
            {},
        ],
        32: [
            function (t, e, s) {
                const n = t("./language");
                e.exports = { Language: n };
            },
            { "./language": 33 },
        ],
        33: [
            function (t, e, s) {
                const n = t("./languages.json"),
                    i = t("./data.json"),
                    r = {
                        cmn: /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FCC\uF900-\uFA6D\uFA70-\uFAD9]|[\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/g,
                        Latin: /[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]/g,
                        Cyrillic: /[\u0400-\u0484\u0487-\u052F\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69D\uA69F]/g,
                        Arabic: /[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061E\u0620-\u063F\u0641-\u064A\u0656-\u065F\u066A-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u08A0-\u08B2\u08E4-\u08FF\uFB50-\uFBC1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFD\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g,
                        ben: /[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FB]/g,
                        Devanagari: /[\u0900-\u0950\u0953-\u0963\u0966-\u097F\uA8E0-\uA8FB]/g,
                        jpn: /[\u3041-\u3096\u309D-\u309F]|\uD82C\uDC01|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82C\uDC00/g,
                        kor: /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,
                        tel: /[\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7F]/g,
                        tam: /[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]/g,
                        guj: /[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1]/g,
                        kan: /[\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2]/g,
                        mal: /[\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D75\u0D79-\u0D7F]/g,
                        Myanmar: /[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g,
                        ori: /[\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B77]/g,
                        pan: /[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75]/g,
                        Ethiopic: /[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]/g,
                        tha: /[\u0E01-\u0E3A\u0E40-\u0E5B]/g,
                        sin: /[\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g,
                        ell: /[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8C\uDDA0]|\uD834[\uDE00-\uDE45]/g,
                        khm: /[\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF]/g,
                        hye: /[\u0531-\u0556\u0559-\u055F\u0561-\u0587\u058A\u058D-\u058F\uFB13-\uFB17]/g,
                        sat: /[\u1C50-\u1C7F]/g,
                        bod: /[\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA]/g,
                        Hebrew: /[\u0591-\u05C7\u05D0-\u05EA\u05F0-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F]/g,
                        kat: /[\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u10FF\u2D00-\u2D25\u2D27\u2D2D]/g,
                        lao: /[\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF]/g,
                        zgh: /[\u2D30-\u2D67\u2D6F\u2D70\u2D7F]/g,
                        iii: /[\uA000-\uA48C\uA490-\uA4C6]/g,
                        aii: /[\u0700-\u070D\u070F-\u074A\u074D-\u074F]/g,
                    },
                    o = Object.keys(r);
                class a {
                    constructor() {
                        (this.languagesAlpha3 = {}), (this.languagesAlpha2 = {}), (this.extraSentences = []), this.buildData();
                    }
                    static getTrigrams(t) {
                        const e = [],
                            s = t
                                ? ` ${String(t)
                                      .replace(/[\u0021-\u0040]+/g, " ")
                                      .replace(/\s+/g, " ")
                                      .trim()
                                      .toLowerCase()} `
                                : "";
                        if (!s || s.length < 3) return e;
                        for (let t = 0, n = s.length - 2; t < n; t += 1) e[t] = s.substr(t, 3);
                        return e;
                    }
                    static asTuples(t) {
                        const e = a.getTrigrams(t).reduce((t, e) => {
                                const s = t;
                                return (s[e] = (s[e] || 0) + 1), s;
                            }, {}),
                            s = [];
                        return (
                            Object.keys(e).forEach((t) => {
                                s.push([t, e[t]]);
                            }),
                            s.sort((t, e) => t[1] - e[1]),
                            s
                        );
                    }
                    static getDistance(t, e) {
                        let s = 0;
                        return (
                            t.forEach((t) => {
                                s += t[0] in e ? Math.abs(t[1] - e[t[0]] - 1) : 300;
                            }),
                            s
                        );
                    }
                    static getOccurrence(t, e) {
                        const s = t.match(e);
                        return (s ? s.length : 0) / t.length || 0;
                    }
                    static isLatin(t) {
                        let e = 0;
                        const s = t.length / 2;
                        for (let n = 0; n < t.length; n += 1) {
                            const i = t.charCodeAt(n);
                            if (i >= 32 && i <= 126 && ((e += 1), e > s)) return !0;
                        }
                        return e > s;
                    }
                    static getTopScript(t) {
                        if (a.isLatin(t)) return ["Latin", 1];
                        let e,
                            s = -1;
                        for (let n = 0; n < o.length; n += 1) {
                            const i = o[n],
                                u = a.getOccurrence(t, r[i]);
                            if (u > s && ((s = u), (e = i), 1 === s)) return [e, s];
                        }
                        return [e, s];
                    }
                    static filterLanguages(t, e, s) {
                        if (0 === e.length && 0 === s.length) return t;
                        const n = {};
                        return (
                            Object.keys(t).forEach((i) => {
                                (0 === e.length || e.indexOf(i) > -1) && -1 === s.indexOf(i) && (n[i] = t[i]);
                            }),
                            n
                        );
                    }
                    static getDistances(t, e, s) {
                        const n = [],
                            i = s.allowList || [],
                            r = s.denyList || [],
                            o = a.filterLanguages(e, i, r);
                        return o
                            ? (Object.keys(o).forEach((e) => {
                                  n.push([e, a.getDistance(t, o[e])]);
                              }),
                              n.sort((t, e) => t[1] - e[1]))
                            : [["und", 1]];
                    }
                    static detectAll(t, e = {}) {
                        const s = e.minLength || 10;
                        if (!t || t.length < s) return [["und", 1]];
                        const n = t.substr(0, 2048),
                            r = a.getTopScript(n);
                        if (!(r[0] in i) && r[1] > 0.5) {
                            if (!e.allowList) return [[r[0], 1]];
                            if (e.allowList.includes(r[0])) return [[r[0], 1]];
                            if ("cmn" === r[0] && e.allowList.includes("jpn")) return [["jpn", 1]];
                        }
                        if (i[r[0]]) {
                            const t = a.getDistances(a.asTuples(n), i[r[0]], e);
                            if ("und" === t[0][0]) return [[r[0], 1]];
                            const s = t[0][1],
                                o = 300 * n.length - s;
                            return t.map((t) => [t[0], 1 - (t[1] - s) / o || 0]);
                        }
                        return [[r[0], 1]];
                    }
                    buildData() {
                        for (let t = 0; t < n.length; t += 1) {
                            const e = { alpha2: n[t][0], alpha3: n[t][1], name: n[t][2] };
                            (this.languagesAlpha3[e.alpha3] = e), (this.languagesAlpha2[e.alpha2] = e);
                        }
                    }
                    transformAllowList(t) {
                        const e = [];
                        for (let s = 0; s < t.length; s += 1)
                            if (3 === t[s].length) e.push(t[s]);
                            else {
                                const n = this.languagesAlpha2[t[s]];
                                n && e.push(n.alpha3);
                            }
                        return e;
                    }
                    guess(t, e, s) {
                        const n = {};
                        t.length < 10 && (n.minLength = t.length), e && e.length && e.length > 0 && (n.allowList = this.transformAllowList(e));
                        const i = a.detectAll(t, n),
                            r = [];
                        for (let t = 0; t < i.length; t += 1) {
                            const e = this.languagesAlpha3[i[t][0]];
                            if (e && (r.push({ alpha3: e.alpha3, alpha2: e.alpha2, language: e.name, score: i[t][1] }), s && r.length >= s)) break;
                        }
                        return r;
                    }
                    guessBest(t, e) {
                        return this.guess(t, e, 1)[0];
                    }
                    addTrigrams(t, e) {
                        const s = this.languagesAlpha2[t],
                            n = s ? s.alpha3 : t,
                            r = a.getTopScript(e)[0],
                            o = a.getTrigrams(e);
                        i[r] &&
                            (i[r][n] || (i[r][n] = {}),
                            o.forEach((t) => {
                                i[r][n][t] = 1;
                            }));
                    }
                    addExtraSentence(t, e) {
                        this.extraSentences.push([t, e]), this.addTrigrams(t, e);
                    }
                    processExtraSentences() {
                        this.extraSentences.forEach((t) => {
                            this.addTrigrams(t[0], t[1]);
                        });
                    }
                    static lansplit(t) {
                        if (t.includes("|")) return t.split("|");
                        const e = [];
                        for (let s = 0; s < t.length; s += 3) e.push(t.substr(s, 3));
                        return e;
                    }
                    static addModel(t, e, s) {
                        const n = i[t],
                            r = a.lansplit(s);
                        let o = r.length;
                        const u = {};
                        for (; o > 0; ) (o -= 1), (u[r[o]] = o);
                        n[e] = u;
                    }
                    addModel(t, e, s) {
                        a.addModel(t, e, s);
                    }
                    static buildModel() {
                        Object.keys(i).forEach((t) => {
                            const e = i[t];
                            Object.keys(e).forEach((s) => {
                                a.addModel(t, s, e[s]);
                            });
                        });
                    }
                }
                a.buildModel(), (e.exports = a);
            },
            { "./data.json": 31, "./languages.json": 34 },
        ],
        34: [
            function (t, e, s) {
                e.exports = [
                    ["ar", "arb", "Arabic"],
                    ["bn", "ben", "Bengali"],
                    ["ca", "cat", "Catalan"],
                    ["cs", "ces", "Czech"],
                    ["da", "dan", "Danish"],
                    ["de", "deu", "German"],
                    ["el", "ell", "Greek"],
                    ["en", "eng", "English"],
                    ["eu", "eus", "Basque"],
                    ["fa", "fas", "Persian"],
                    ["fi", "fin", "Finnish"],
                    ["fr", "fra", "French"],
                    ["ga", "gle", "Irish"],
                    ["gl", "glg", "Galician"],
                    ["hi", "hin", "Hindi"],
                    ["hu", "hun", "Hungarian"],
                    ["hy", "hye", "Armenian"],
                    ["id", "ind", "Indonesian"],
                    ["it", "ita", "Italian"],
                    ["ja", "jpn", "Japanese"],
                    ["ko", "kor", "Korean"],
                    ["lt", "lit", "Lithuanian"],
                    ["ne", "nep", "Nepali"],
                    ["nl", "nld", "Dutch"],
                    ["no", "nor", "Norwegian"],
                    ["pl", "pol", "Polish"],
                    ["pt", "por", "Portuguese"],
                    ["ro", "ron", "Romanian"],
                    ["ru", "rus", "Russian"],
                    ["sr", "srp", "Serbian"],
                    ["sl", "slv", "Slovenian"],
                    ["es", "spa", "Spanish"],
                    ["sv", "swe", "Swedish"],
                    ["ta", "tam", "Tamil"],
                    ["tl", "tgl", "Tagalog"],
                    ["th", "tha", "Thai"],
                    ["tr", "tur", "Turkish"],
                    ["uk", "ukr", "Ukrainian"],
                    ["zh", "cmn", "Chinese"],
                ];
            },
            {},
        ],
        35: [
            function (t, e, s) {
                const { defaultContainer: n } = t("@nlpjs/core"),
                    i = t("./reduce-edges");
                e.exports = class {
                    constructor(t = n) {
                        (this.container = t.container || t), (this.name = "extract-builtin");
                    }
                    extract(t) {
                        return t;
                    }
                    async run(t) {
                        const e = t,
                            s = e.locale || "en",
                            n = this.container.get("extract-builtin-" + s) || this,
                            r = await n.extract({ text: e.text || e.utterance, locale: e.locale });
                        if (((e.edges = e.edges || []), r.edges)) for (let t = 0; t < r.edges.length; t += 1) e.edges.push(r.edges[t]);
                        if (((e.edges = i(e.edges, !1)), (e.sourceEntities = e.sourceEntities || []), r.sourceEntities)) for (let t = 0; t < r.sourceEntities.length; t += 1) e.sourceEntities.push(r.sourceEntities[t]);
                        return e;
                    }
                };
            },
            { "./reduce-edges": 41, "@nlpjs/core": 12 },
        ],
        36: [
            function (t, e, s) {
                const { defaultContainer: n } = t("@nlpjs/core"),
                    { Language: i } = t("@nlpjs/language-min"),
                    { similarity: r } = t("@nlpjs/similarity"),
                    o = t("./reduce-edges");
                e.exports = class {
                    constructor(t = n) {
                        (this.container = t.container || t), (this.name = "extract-enum");
                    }
                    getScripts(t) {
                        const e = [],
                            s = t.split("");
                        for (let t = 0; t < s.length; t += 1) e.push(i.getTopScript(s[t]));
                        return e;
                    }
                    isAlphanumeric(t) {
                        return /[\u00C0-\u1FFF\u2C00-\uD7FF\w]/.test(t) && "_" !== t;
                    }
                    getWordPositions(t) {
                        const e = this.getScripts(t);
                        let s = !0,
                            n = 0,
                            i = 0;
                        const r = t.length,
                            o = [];
                        for (; i < r; )
                            this.isAlphanumeric(t.charAt(i)) ? s && ("cmn" === e[i][0] ? (o.push({ start: i, end: i, len: 1 }), (n = i)) : ((n = i), (s = !1))) : s || (o.push({ start: n, end: i - 1, len: i - n }), (s = !0)), (i += 1);
                        return s || o.push({ start: n, end: i - 1, len: i - n }), o;
                    }
                    getBestSubstring(t, e, s) {
                        const n = t.length,
                            i = e.length;
                        if (n <= i) {
                            const s = { start: 0, end: n - 1, len: n, levenshtein: r(t, e, !0) };
                            return (s.accuracy = (i - s.levenshtein) / i), s;
                        }
                        const o = s || this.getWordPositions(t),
                            a = o.length,
                            u = { start: 0, end: 0, len: 0, levenshtein: void 0, accuracy: 0 };
                        for (let s = 0; s < a; s += 1)
                            for (let n = s; n < a; n += 1) {
                                const i = t.substring(o[s].start, o[n].end + 1),
                                    a = r(i, e, !0);
                                (void 0 === u.levenshtein || a < u.levenshtein) && ((u.levenshtein = a), (u.start = o[s].start), (u.end = o[n].end), (u.len = u.end - u.start + 1));
                            }
                        return (u.accuracy = (i - u.levenshtein) / i), u;
                    }
                    getBestSubstringList(t, e, s, n = 1) {
                        const i = t.length,
                            o = e.length,
                            a = [];
                        if (i <= o) {
                            const s = r(t, e, !0),
                                u = (o - s) / o;
                            return u >= n && a.push({ start: 0, end: i - 1, len: i, levenshtein: s, accuracy: u }), a;
                        }
                        const u = o * (1 - n),
                            c = s || this.getWordPositions(t),
                            l = c.length;
                        for (let s = 0; s < l; s += 1)
                            for (let i = s; i < l; i += 1) {
                                const l = t.substring(c[s].start, c[i].end + 1),
                                    h = r(l, e, !0),
                                    g = (o - h) / o;
                                if ((g >= n && a.push({ start: c[s].start, end: c[i].end, len: c[i].end - c[s].start + 1, levenshtein: h, accuracy: g }), l.length - c[0].len >= e.length + u)) break;
                            }
                        return a;
                    }
                    getRules(t) {
                        const e = t.nerRules;
                        return e ? e.filter((t) => "enum" === t.type) : [];
                    }
                    normalize(t) {
                        return t
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .toLowerCase();
                    }
                    buildRuleDict(t) {
                        const e = {},
                            s = {};
                        for (let n = 0; n < t.rules.length; n += 1) {
                            const i = t.rules[n];
                            for (let t = 0; t < i.texts.length; t += 1) {
                                const n = i.texts[t],
                                    r = this.normalize(i.texts[t]);
                                e[r] || (e[r] = []), e[r].push(i), (s[r] = n);
                            }
                        }
                        (t.dict = e), (t.inverseDict = s);
                    }
                    getBestExact(t, e, s) {
                        const n = this.normalize(t),
                            i = e || this.getWordPositions(n),
                            r = i.length,
                            o = [];
                        for (let e = 0; e < r; e += 1)
                            for (let a = e; a < r; a += 1) {
                                const r = n.substring(i[e].start, i[a].end + 1);
                                if (s.dict[r]) {
                                    const n = s.dict[r];
                                    for (let u = 0; u < n.length; u += 1)
                                        o.push({
                                            accuracy: 1,
                                            start: i[e].start,
                                            end: i[a].end,
                                            len: i[a].end - i[e].start + 1,
                                            levenshtein: 0,
                                            entity: s.name,
                                            type: s.type,
                                            option: n[u].option,
                                            sourceText: s.inverseDict[r],
                                            utteranceText: t.substring(i[e].start, i[a].end + 1),
                                        });
                                }
                            }
                        return o;
                    }
                    extractFromRule(t, e, s, n) {
                        const i = [];
                        if (n >= 1) {
                            e.dict || this.buildRuleDict(e);
                            const n = this.getBestExact(t, s, e);
                            for (let t = 0; t < n.length; t += 1) i.push(n[t]);
                        } else
                            for (let r = 0; r < e.rules.length; r += 1) {
                                const o = e.rules[r];
                                for (let a = 0; a < o.texts.length; a += 1) {
                                    const u = this.getBestSubstringList(t, o.texts[a], s, o.threshold || n);
                                    for (let s = 0; s < u.length; s += 1) i.push({ ...u[s], entity: e.name, type: e.type, option: e.rules[r].option, sourceText: o.texts[a], utteranceText: t.substring(u[s].start, u[s].end + 1) });
                                }
                            }
                        return i;
                    }
                    extract(t) {
                        const e = t,
                            s = this.getWordPositions(e.text || e.utterance),
                            n = this.getRules(e),
                            i = e.edges || [];
                        for (let t = 0; t < n.length; t += 1) {
                            const r = this.extractFromRule(e.text || e.utterance, n[t], s, e.threshold || 0.8);
                            for (let t = 0; t < r.length; t += 1) i.push(r[t]);
                        }
                        return i.sort((t, e) => t.start - e.start), (e.edges = o(i, !1)), e;
                    }
                    run(t) {
                        const e = t,
                            s = e.locale || "en";
                        return (this.container.get("extract-enum-" + s) || this).extract(e);
                    }
                };
            },
            { "./reduce-edges": 41, "@nlpjs/core": 12, "@nlpjs/language-min": 32, "@nlpjs/similarity": 65 },
        ],
        37: [
            function (t, e, s) {
                const { defaultContainer: n } = t("@nlpjs/core"),
                    i = t("./reduce-edges");
                e.exports = class {
                    constructor(t = n) {
                        (this.container = t.container || t), (this.name = "extract-regex");
                    }
                    getRules(t) {
                        const e = t.nerRules;
                        return e ? e.filter((t) => "regex" === t.type) : [];
                    }
                    getMatchs(t, e) {
                        const s = [];
                        let n;
                        do {
                            const i = e.exec(t);
                            i ? (s.push({ start: i.index, end: e.lastIndex - 1, accuracy: 1, sourceText: i[0] }), (n = !0)) : (n = !1);
                        } while (n);
                        return s;
                    }
                    extractFromRule(t, e) {
                        const s = [];
                        for (let n = 0; n < e.rules.length; n += 1) {
                            const i = this.getMatchs(t, e.rules[n]);
                            for (let n = 0; n < i.length; n += 1) {
                                const r = i[n];
                                (r.entity = e.name), (r.type = e.type), (r.utteranceText = t.substring(r.start, r.end + 1)), (r.len = r.utteranceText.length), s.push(r);
                            }
                        }
                        return s;
                    }
                    extract(t) {
                        const e = t,
                            s = this.getRules(e),
                            n = e.edges || [];
                        for (let t = 0; t < s.length; t += 1) {
                            const i = this.extractFromRule(e.text || e.utterance, s[t]);
                            for (let t = 0; t < i.length; t += 1) n.push(i[t]);
                        }
                        return n.sort((t, e) => t.start - e.start), (e.edges = i(n, !1)), e;
                    }
                    run(t) {
                        const e = t,
                            s = e.locale || "en";
                        return (this.container.get("extract-regex-" + s) || this).extract(e);
                    }
                };
            },
            { "./reduce-edges": 41, "@nlpjs/core": 12 },
        ],
        38: [
            function (t, e, s) {
                const { defaultContainer: n } = t("@nlpjs/core"),
                    i = t("./reduce-edges"),
                    { TrimType: r } = t("./trim-types");
                e.exports = class {
                    constructor(t = n) {
                        (this.container = t.container || t), (this.name = "extract-trim");
                    }
                    mustSkip(t, e) {
                        if (e.options && e.options.skip && e.options.skip.length > 0)
                            for (let s = 0; s < e.options.skip.length; s += 1) {
                                const n = e.options.skip[s];
                                if (e.options.caseSensitive) {
                                    if (n === t) return !0;
                                } else if (n.toLowerCase() === t.toLowerCase()) return !0;
                            }
                        return !1;
                    }
                    matchBetween(t, e, s) {
                        const n = [];
                        let i;
                        do {
                            const o = e.regex.exec(` ${t} `);
                            o ? (n.push({ type: "trim", subtype: r.Between, start: o.index - 1, end: e.regex.lastIndex - 2, len: o[0].length, accuracy: 1, sourceText: o[0], utteranceText: o[0], entity: s }), (i = !0)) : (i = !1);
                        } while (i);
                        const o = [];
                        for (let t = 0; t < n.length; t += 1) this.mustSkip(n[t].utteranceText, e) || o.push(n[t]);
                        return o;
                    }
                    findWord(t, e, s = !1, n = !1) {
                        const i = [];
                        let r;
                        const o = new RegExp(n ? e : ` ${e} | ${e}|${e} `, s ? "g" : "ig");
                        do {
                            const e = o.exec(t);
                            e ? (i.push({ start: e.index, end: o.lastIndex }), (r = !0)) : (r = !1);
                        } while (r);
                        return i;
                    }
                    getBeforeResults(t, e, s) {
                        const n = [];
                        let i = 0,
                            o = 0;
                        for (let a = 0; a < e.length; a += 1) {
                            o = e[a].start;
                            const u = t.substring(i, o);
                            n.push({ type: "trim", subtype: r.Before, start: i, end: o - 1, len: u.length, accuracy: 0.99, sourceText: u, utteranceText: u, entity: s }), (i = e[a].end);
                        }
                        return n;
                    }
                    getBeforeFirstResults(t, e, s) {
                        const n = [],
                            i = e[0].start,
                            o = t.substring(0, i);
                        return n.push({ type: "trim", subtype: r.BeforeFirst, start: 0, end: i - 1, len: o.length, accuracy: 0.99, sourceText: o, utteranceText: o, entity: s }), n;
                    }
                    getBeforeLastResults(t, e, s) {
                        const n = [],
                            i = e[e.length - 1].start,
                            o = t.substring(0, i);
                        return n.push({ type: "trim", subtype: r.BeforeLast, start: 0, end: i - 1, len: o.length, accuracy: 0.99, sourceText: o, utteranceText: o, entity: s }), n;
                    }
                    getAfterResults(t, e, s) {
                        const n = [];
                        let i = 0,
                            o = t.length;
                        for (let a = e.length - 1; a >= 0; a -= 1) {
                            i = e[a].end;
                            const u = t.substring(i, o);
                            n.unshift({ type: "trim", subtype: r.After, start: i, end: o - 1, len: u.length, accuracy: 0.99, sourceText: u, utteranceText: u, entity: s }), (o = e[a].start);
                        }
                        return n;
                    }
                    getAfterFirstResults(t, e, s) {
                        const n = [],
                            i = e[0].end,
                            o = t.length,
                            a = t.substring(i, o);
                        return n.push({ type: "trim", subtype: r.AfterFirst, start: i, end: o - 1, len: a.length, accuracy: 0.99, sourceText: a, utteranceText: a, entity: s }), n;
                    }
                    getAfterLastResults(t, e, s) {
                        const n = [],
                            i = e[e.length - 1].end,
                            o = t.length,
                            a = t.substring(i, o);
                        return n.push({ type: "trim", subtype: r.AfterLast, start: i, end: o - 1, len: a.length, accuracy: 0.99, sourceText: a, utteranceText: a, entity: s }), n;
                    }
                    getResults(t, e, s, n) {
                        switch (s) {
                            case r.Before:
                                return this.getBeforeResults(t, e, n);
                            case r.BeforeFirst:
                                return this.getBeforeFirstResults(t, e, n);
                            case r.BeforeLast:
                                return this.getBeforeLastResults(t, e, n);
                            case r.After:
                                return this.getAfterResults(t, e, n);
                            case r.AfterFirst:
                                return this.getAfterFirstResults(t, e, n);
                            case r.AfterLast:
                                return this.getAfterLastResults(t, e, n);
                            default:
                                return [];
                        }
                    }
                    match(t, e, s, n) {
                        const i = [];
                        for (let r = 0; r < e.words.length; r += 1) {
                            const o = e.options.noSpaces ? e.words[r] : " " + e.words[r],
                                a = this.findWord(t, o);
                            if (!e.options.noSpaces) {
                                const s = this.findWord(t, e.words[r]);
                                s.length > 0 && 0 === s[0].start && a.unshift(s[0]);
                            }
                            a.length > 0 && i.push(...this.getResults(t, a, s, n));
                        }
                        const r = [];
                        for (let t = 0; t < i.length; t += 1) this.mustSkip(i[t].utteranceText, e) || r.push(i[t]);
                        return r;
                    }
                    getRules(t) {
                        const e = t.nerRules;
                        return e ? e.filter((t) => "trim" === t.type) : [];
                    }
                    extractFromRule(t, e) {
                        const s = [];
                        for (let n = 0; n < e.rules.length; n += 1) {
                            const i = e.rules[n];
                            i.type === r.Between ? s.push(...this.matchBetween(t, i, e.name)) : s.push(...this.match(t, i, i.type, e.name));
                        }
                        return s;
                    }
                    extract(t) {
                        const e = t,
                            s = this.getRules(e),
                            n = e.edges || [];
                        for (let t = 0; t < s.length; t += 1) {
                            const i = this.extractFromRule(e.text || e.utterance, s[t]);
                            for (let t = 0; t < i.length; t += 1) n.push(i[t]);
                        }
                        return n.sort((t, e) => t.start - e.start), (e.edges = i(n, !1)), e;
                    }
                    run(t) {
                        const e = t,
                            s = e.locale || "en";
                        return (this.container.get("extract-trim-" + s) || this).extract(e);
                    }
                };
            },
            { "./reduce-edges": 41, "./trim-types": 42, "@nlpjs/core": 12 },
        ],
        39: [
            function (t, e, s) {
                const n = t("./ner"),
                    i = t("./extractor-enum"),
                    r = t("./extractor-regex"),
                    o = t("./extractor-trim"),
                    a = t("./extractor-builtin");
                e.exports = { Ner: n, ExtractorEnum: i, ExtractorRegex: r, ExtractorTrim: o, ExtractorBuiltin: a };
            },
            { "./extractor-builtin": 35, "./extractor-enum": 36, "./extractor-regex": 37, "./extractor-trim": 38, "./ner": 40 },
        ],
        40: [
            function (t, e, s) {
                const { Clonable: n } = t("@nlpjs/core"),
                    i = t("./extractor-enum"),
                    r = t("./extractor-regex"),
                    o = t("./extractor-trim"),
                    a = t("./extractor-builtin"),
                    { TrimType: u } = t("./trim-types");
                class c extends n {
                    constructor(t = {}, e) {
                        super({ settings: {}, container: t.container || e }, e),
                            this.applySettings(this.settings, t),
                            this.applySettings(this.settings),
                            this.settings.tag || (this.settings.tag = "ner"),
                            this.registerDefault(),
                            this.applySettings(this.settings, this.container.getConfiguration(this.settings.tag)),
                            (this.rules = {}),
                            this.applySettings(this, { pipelineProcess: this.getPipeline(this.settings.tag + "-process") });
                    }
                    registerDefault() {}
                    getRulesByName(t = "*", e = "", s = !1) {
                        if (!this.rules[t]) {
                            if (!s) return;
                            this.rules[t] = {};
                        }
                        if (!this.rules[t][e]) {
                            if (!s) return;
                            this.rules[t][e] = { name: e, type: "enum", rules: [] };
                        }
                        return this.rules[t][e];
                    }
                    addRule(t = "*", e, s, n) {
                        if (Array.isArray(t)) for (let i = 0; i < t.length; i += 1) this.addRule(t[i], e, s, n);
                        else this.rules[t] || (this.rules[t] = {}), this.rules[t][e] || (this.rules[t][e] = { name: e, type: s, rules: [] }), this.rules[t][e].rules.push(n);
                    }
                    asString(t) {
                        return t && t.toString ? t.toString() : JSON.stringify(t);
                    }
                    findRule(t, e) {
                        const s = this.asString(e);
                        for (let e = 0; e < t.length; e += 1) if (this.asString(t[e]) === s) return e;
                        return -1;
                    }
                    removeRule(t = "*", e, s) {
                        if (this.rules[t] && this.rules[t][e])
                            if (s) {
                                const n = this.findRule(this.rules[t][e].rules, s);
                                n > -1 && this.rules[t][e].rules.splice(n, 1);
                            } else delete this.rules[t][e];
                    }
                    getRules(t = "*") {
                        const e = [];
                        if (this.rules[t]) {
                            const s = Object.keys(this.rules[t]);
                            for (let n = 0; n < s.length; n += 1) e.push(this.rules[t][s[n]]);
                        }
                        if ("*" !== t && this.rules["*"]) {
                            const t = Object.keys(this.rules["*"]);
                            for (let s = 0; s < t.length; s += 1) e.push(this.rules["*"][t[s]]);
                        }
                        return e;
                    }
                    decideRules(t) {
                        const e = t;
                        return (e.nerRules = this.getRules(e.locale || "en")), e;
                    }
                    getRuleOption(t, e) {
                        for (let s = 0; s < t.length; s += 1) if (t[s].option === e) return t[s];
                    }
                    addRuleOptionTexts(t, e, s, n) {
                        if (Array.isArray(t)) for (let i = 0; i < t.length; i += 1) this.addRuleOptionTexts(t[i], e, s, n);
                        else {
                            let i = n || s;
                            Array.isArray(i) || (i = [i]);
                            const r = this.getRulesByName(t, e, !0);
                            let o = this.getRuleOption(r.rules, s);
                            if (o) {
                                const t = {};
                                for (let e = 0; e < o.texts.length; e += 1) t[o.texts[e]] = 1;
                                for (let e = 0; e < i.length; e += 1) t[i[e]] = 1;
                                o.texts = Object.keys(t);
                            } else (o = { option: s, texts: i }), r.rules.push(o);
                        }
                    }
                    removeRuleOptionTexts(t, e, s, n) {
                        if (Array.isArray(t)) for (let i = 0; i < t.length; i += 1) this.removeRuleOptionTexts(t[i], e, s, n);
                        else {
                            let i = n || s;
                            Array.isArray(i) || (i = [i]);
                            const r = this.getRulesByName(t, e, !1);
                            if (r) {
                                const t = this.getRuleOption(r.rules, s);
                                if (t) {
                                    const e = {};
                                    for (let s = 0; s < t.texts.length; s += 1) e[t.texts[s]] = 1;
                                    for (let t = 0; t < i.length; t += 1) delete e[i[t]];
                                    t.texts = Object.keys(e);
                                }
                            }
                        }
                    }
                    static str2regex(t) {
                        const e = t.lastIndexOf("/");
                        return new RegExp(t.slice(1, e), t.slice(e + 1));
                    }
                    static regex2str(t) {
                        return t.toString();
                    }
                    addRegexRule(t, e, s) {
                        const n = "string" == typeof s ? c.str2regex(s) : s,
                            i = n.flags.includes("g") ? n : new RegExp(n.source, n.flags + "g");
                        this.addRule(t, e, "regex", i);
                    }
                    addBetweenCondition(t, e, s, n, i) {
                        const r = i || {},
                            o = Array.isArray(s) ? s : [s],
                            a = Array.isArray(n) ? n : [n],
                            u = [];
                        for (let t = 0; t < o.length; t += 1)
                            for (let e = 0; e < a.length; e += 1) {
                                const s = !0 === r.noSpaces ? o[t] : ` ${o[t]} `,
                                    n = !0 === r.noSpaces ? a[e] : ` ${a[e]} `;
                                u.push(`(?<=${s})(.*)(?=${n})`);
                            }
                        let l = `/${u.join("|")}/g`;
                        !0 !== r.caseSensitive && (l += "i");
                        const h = { type: "between", leftWords: o, rightWords: a, regex: c.str2regex(l), options: r };
                        this.addRule(t, e, "trim", h);
                    }
                    addPositionCondition(t, e, s, n, i) {
                        const r = i || {},
                            o = { type: s, words: Array.isArray(n) ? n : [n], options: r };
                        this.addRule(t, e, "trim", o);
                    }
                    addAfterCondition(t, e, s, n) {
                        this.addPositionCondition(t, e, u.After, s, n);
                    }
                    addAfterFirstCondition(t, e, s, n) {
                        this.addPositionCondition(t, e, u.AfterFirst, s, n);
                    }
                    addAfterLastCondition(t, e, s, n) {
                        this.addPositionCondition(t, e, u.AfterLast, s, n);
                    }
                    addBeforeCondition(t, e, s, n) {
                        this.addPositionCondition(t, e, u.Before, s, n);
                    }
                    addBeforeFirstCondition(t, e, s, n) {
                        this.addPositionCondition(t, e, u.BeforeFirst, s, n);
                    }
                    addBeforeLastCondition(t, e, s, n) {
                        this.addPositionCondition(t, e, u.BeforeLast, s, n);
                    }
                    reduceEdges(t) {
                        return (t.entities = t.edges), delete t.edges, delete t.nerRules, t;
                    }
                    async defaultPipelineProcess(t) {
                        this.cache ||
                            ((this.cache = {
                                extractEnum: this.container.get("extract-enum"),
                                extractRegex: this.container.get("extract-regex"),
                                extractTrim: this.container.get("extract-trim"),
                                extractBuiltin: this.container.get("extract-builtin"),
                            }),
                            this.cache.extractEnum || (this.container.use(i), (this.cache.extractEnum = this.container.get("extract-enum"))),
                            this.cache.extractRegex || (this.container.use(r), (this.cache.extractRegex = this.container.get("extract-regex"))),
                            this.cache.extractTrim || (this.container.use(o), (this.cache.extractTrim = this.container.get("extract-trim"))),
                            this.cache.extractBuiltin || (this.container.use(a), (this.cache.extractBuiltin = this.container.get("extract-builtin"))));
                        let e = await this.decideRules(t);
                        return (
                            this.cache.extractEnum && (e = await this.cache.extractEnum.run(e)),
                            this.cache.extractRegex && (e = await this.cache.extractRegex.run(e)),
                            this.cache.extractTrim && (e = await this.cache.extractTrim.run(e)),
                            this.cache.extractBuiltin && (e = await this.cache.extractBuiltin.run(e)),
                            (e = await this.reduceEdges(e)),
                            e
                        );
                    }
                    async process(t) {
                        const e = { threshold: this.settings.threshold || 0.8, ...t };
                        let s;
                        if (e.locale) {
                            const t = this.container.getPipeline(`${this.settings.tag}-${e.locale}-process`);
                            t && (s = await this.runPipeline(e, t));
                        } else this.pipelineProcess && (s = await this.runPipeline(e, this.pipelineProcess));
                        return s || (s = await this.defaultPipelineProcess(e)), delete s.threshold, s;
                    }
                    nameToEntity(t) {
                        return `${void 0 === this.settings.entityPreffix ? "@" : this.settings.entityPreffix}${t}${void 0 === this.settings.entitySuffix ? "" : this.settings.entitySuffix}`;
                    }
                    entityToName(t) {
                        if (!t) return t;
                        let e = t;
                        const s = void 0 === this.settings.entityPreffix ? "@" : this.settings.entityPreffix,
                            n = void 0 === this.settings.entitySuffix ? "" : this.settings.entitySuffix;
                        if (s) {
                            if (!e.startsWith(s)) return t;
                            e = e.slice(s.length);
                        }
                        if (n) {
                            if (!e.endsWith(n)) return t;
                            e = e.slice(0, -n.length);
                        }
                        return e;
                    }
                    isEntity(t) {
                        return this.entityToName(t) !== t;
                    }
                    getEntitiesFromUtterance(t, e) {
                        e || ((e = t), (t = "es"));
                        const s = e.split(/[\s,.!?;:([\]'"¡¿)/]+/).filter((t) => t),
                            n = [];
                        for (let t = 0; t < s.length; t += 1) {
                            const e = s[t];
                            this.isEntity(e) && n.push(this.entityToName(e));
                        }
                        return n;
                    }
                    async generateEntityUtterance(t, e) {
                        let s = { locale: t, utterance: e };
                        s = await this.process(s);
                        const { entities: n } = s;
                        if (!n || !n.length) return e;
                        n.sort((t, e) => t.start - e.start);
                        let i = 0,
                            r = "";
                        for (let t = 0; t < n.length; t += 1) {
                            const s = n[t],
                                o = e.slice(i, s.start);
                            (i = s.end + 1), (r += o), (r += this.nameToEntity(s.entity));
                        }
                        return (r += e.slice(n[n.length - 1].end + 1)), r;
                    }
                    toJSON() {
                        RegExp.prototype.toJSON = RegExp.prototype.toString;
                        const t = { settings: { ...this.settings }, rules: { ...this.rules } };
                        return delete t.settings.container, t;
                    }
                    fromJSON(t) {
                        this.applySettings(this.settings, t.settings);
                        Object.keys(t.rules).forEach((e) => {
                            Object.keys(t.rules[e]).forEach((s) => {
                                "regex" === t.rules[e][s].type && (t.rules[e][s].rules = t.rules[e][s].rules.map((t) => c.str2regex(t)));
                            });
                        }),
                            (this.rules = t.rules);
                    }
                }
                e.exports = c;
            },
            { "./extractor-builtin": 35, "./extractor-enum": 36, "./extractor-regex": 37, "./extractor-trim": 38, "./trim-types": 42, "@nlpjs/core": 12 },
        ],
        41: [
            function (t, e, s) {
                function n(t, e, s) {
                    let n, i;
                    t.accuracy > e.accuracy || (t.accuracy === e.accuracy && t.length > e.length) ? ((n = t), (i = e)) : ((n = e), (i = t)),
                        i.start <= n.end &&
                            i.end >= n.start &&
                            (i.accuracy < n.accuracy
                                ? (i.discarded = !0)
                                : (s || i.entity === n.entity || "number" === i.entity) && i.len <= n.len
                                ? i.start === n.start && i.end === n.end && i.type === n.type && i.entity === n.entity && i.option === n.option && (i.discarded = !0)
                                : (s || i.entity === n.entity || "number" === n.entity) && i.len > n.len
                                ? (n.discarded = !0)
                                : "enum" === n.type &&
                                  "enum" === i.type &&
                                  (n.len <= i.len && i.utteranceText.includes(n.utteranceText) ? (n.discarded = !0) : n.len > i.len && n.utteranceText.includes(i.utteranceText) && (i.discarded = !0)));
                }
                e.exports = function (t, e = !0) {
                    const s = t.length;
                    for (let i = 0; i < s; i += 1) {
                        const r = t[i];
                        if (!r.discarded)
                            for (let o = i + 1; o < s; o += 1) {
                                const s = t[o];
                                s.discarded || n(r, s, e);
                            }
                    }
                    return t.filter((t) => !t.discarded);
                };
            },
            {},
        ],
        42: [
            function (t, e, s) {
                const n = { Between: "between", After: "after", AfterLast: "afterLast", AfterFirst: "afterFirst", Before: "before", BeforeFirst: "beforeFirst", BeforeLast: "beforeLast" },
                    i = Object.values(n);
                e.exports = { TrimType: n, TrimTypesList: i };
            },
            {},
        ],
        43: [
            function (t, e, s) {
                const n = t("./lookup");
                e.exports = class {
                    constructor(t, e) {
                        if (t) {
                            (this.inputLookup = new n()), (this.outputLookup = new n());
                            for (let e = 0; e < t.length; e += 1) this.inputLookup.add(t[e]);
                            for (let t = 0; t < e.length; t += 1) this.outputLookup.add(e[t]);
                            (this.numInputs = this.inputLookup.items.length), (this.numOutputs = this.outputLookup.items.length);
                        }
                    }
                    build(t) {
                        (this.inputLookup = new n(t, "input")), (this.outputLookup = new n(t, "output")), (this.numInputs = this.inputLookup.items.length), (this.numOutputs = this.outputLookup.items.length);
                        const e = [];
                        for (let s = 0; s < t.length; s += 1) {
                            const { input: n, output: i } = t[s];
                            e.push({ input: this.inputLookup.prepare(n), output: this.outputLookup.prepare(i) });
                        }
                        return e;
                    }
                    transformInput(t) {
                        return this.inputLookup.prepare(t);
                    }
                };
            },
            { "./lookup": 45 },
        ],
        44: [
            function (t, e, s) {
                const n = t("./neural-network");
                e.exports = { NeuralNetwork: n };
            },
            { "./neural-network": 46 },
        ],
        45: [
            function (t, e, s) {
                e.exports = class {
                    constructor(t, e = "input") {
                        (this.dict = {}), (this.items = []), t && this.buildFromData(t, e);
                    }
                    add(t) {
                        void 0 === this.dict[t] && ((this.dict[t] = this.items.length), this.items.push(t));
                    }
                    buildFromData(t, e) {
                        for (let s = 0; s < t.length; s += 1) {
                            const n = t[s][e],
                                i = Object.keys(n);
                            for (let t = 0; t < i.length; t += 1) this.add(i[t]);
                        }
                    }
                    prepare(t) {
                        const e = Object.keys(t),
                            s = [],
                            n = {};
                        for (let i = 0; i < e.length; i += 1) {
                            const r = e[i];
                            void 0 !== this.dict[r] && (s.push(this.dict[r]), (n[this.dict[r]] = t[r]));
                        }
                        return { keys: s, data: n };
                    }
                };
            },
            {},
        ],
        46: [
            function (t, e, s) {
                const n = t("./corpus-lookup"),
                    i = { iterations: 2e4, errorThresh: 5e-5, deltaErrorThresh: 1e-6, learningRate: 0.6, momentum: 0.5, alpha: 0.07, log: !1 };
                e.exports = class {
                    constructor(t = {}) {
                        (this.settings = t),
                            this.applySettings(this.settings, i),
                            !0 === this.settings.log ? (this.logFn = (t, e) => console.log(`Epoch ${t.iterations} loss ${t.error} time ${e}ms`)) : "function" == typeof this.settings.log && (this.logFn = this.settings.log);
                    }
                    applySettings(t = {}, e = {}) {
                        return (
                            Object.keys(e).forEach((s) => {
                                void 0 === t[s] && (t[s] = e[s]);
                            }),
                            t
                        );
                    }
                    initialize(t, e) {
                        (this.perceptronsByName = {}), (this.perceptrons = []), (this.outputs = {}), (this.numPerceptrons = e.length);
                        for (let s = 0; s < e.length; s += 1) {
                            const n = e[s];
                            this.outputs[n] = 0;
                            const i = { name: n, id: s, weights: new Float32Array(t), changes: new Float32Array(t), bias: 0 };
                            this.perceptrons.push(i), (this.perceptronsByName[n] = i);
                        }
                    }
                    runInputPerceptron(t, e) {
                        const s = e.keys.reduce((s, n) => s + e.data[n] * t.weights[n], t.bias);
                        return s <= 0 ? 0 : this.settings.alpha * s;
                    }
                    runInput(t) {
                        for (let e = 0; e < this.numPerceptrons; e += 1) this.outputs[this.perceptrons[e].name] = this.runInputPerceptron(this.perceptrons[e], t);
                        return this.outputs;
                    }
                    get isRunnable() {
                        return !!this.numPerceptrons;
                    }
                    run(t) {
                        return this.numPerceptrons ? this.runInput(this.lookup.transformInput(t)) : void 0;
                    }
                    prepareCorpus(t) {
                        return (this.lookup = new n()), this.lookup.build(t);
                    }
                    verifyIsInitialized() {
                        this.perceptrons || this.initialize(this.lookup.numInputs, this.lookup.outputLookup.items);
                    }
                    trainPerceptron(t, e) {
                        const { alpha: s, momentum: n } = this.settings,
                            { changes: i, weights: r } = t;
                        let o = 0;
                        for (let a = 0; a < e.length; a += 1) {
                            const { input: u, output: c } = e[a],
                                l = this.runInputPerceptron(t, u),
                                h = (c.data[t.id] || 0) - l;
                            if (h) {
                                o += h ** 2;
                                const e = (l > 0 ? 1 : s) * h * this.decayLearningRate;
                                for (let t = 0; t < u.keys.length; t += 1) {
                                    const s = u.keys[t],
                                        o = e * u.data[s] + n * i[s];
                                    (i[s] = o), (r[s] += o);
                                }
                                t.bias += e;
                            }
                        }
                        return o;
                    }
                    train(t) {
                        if (!t || !t.length) return {};
                        if (void 0 !== t[t.length - 1].input.nonefeature) {
                            const e = {};
                            for (let s = 0; s < t.length - 1; s += 1) {
                                const n = Object.keys(t[s].output);
                                for (let t = 0; t < n.length; t += 1) e[n[t]] || (e[n[t]] = 1);
                            }
                            const s = t[t.length - 1],
                                n = Object.keys(e);
                            for (let t = 0; t < n.length; t += 1) s.output[n[t]] = 1e-7;
                        }
                        const e = this.prepareCorpus(t);
                        this.status || (this.status = { error: 1 / 0, deltaError: 1 / 0, iterations: 0 }), this.verifyIsInitialized();
                        const s = this.settings.errorThresh,
                            n = this.settings.deltaErrorThresh;
                        for (; this.status.iterations < this.settings.iterations && this.status.error > s && this.status.deltaError > n; ) {
                            const t = new Date();
                            (this.status.iterations += 1), (this.decayLearningRate = this.settings.learningRate / (1 + 0.001 * this.status.iterations));
                            const s = this.status.error;
                            this.status.error = 0;
                            for (let t = 0; t < this.numPerceptrons; t += 1) this.status.error += this.trainPerceptron(this.perceptrons[t], e);
                            (this.status.error /= this.numPerceptrons * e.length), (this.status.deltaError = Math.abs(this.status.error - s));
                            const n = new Date();
                            this.logFn && this.logFn(this.status, n.getTime() - t.getTime());
                        }
                        return this.status;
                    }
                    explain(t, e) {
                        const s = this.lookup.transformInput(t),
                            n = {},
                            i = this.lookup.outputLookup.dict[e];
                        if (void 0 === i) return {};
                        for (let t = 0; t < s.keys.length; t += 1) {
                            const e = s.keys[t];
                            n[this.lookup.inputLookup.items[e]] = this.perceptrons[i].weights[e];
                        }
                        return { weights: n, bias: this.perceptrons[i].bias };
                    }
                    toJSON() {
                        const t = {},
                            e = Object.keys(this.settings);
                        for (let s = 0; s < e.length; s += 1) {
                            const n = e[s];
                            this.settings[n] !== i[n] && (t[n] = this.settings[n]);
                        }
                        if (!this.lookup) return { settings: t };
                        const s = this.lookup.inputLookup.items,
                            n = this.lookup.outputLookup.items,
                            r = [];
                        for (let t = 0; t < this.perceptrons.length; t += 1) {
                            const e = this.perceptrons[t],
                                s = [...e.weights, e.bias];
                            r.push(s);
                        }
                        return { settings: t, features: s, intents: n, perceptrons: r };
                    }
                    fromJSON(t) {
                        if (((this.settings = this.applySettings({ ...i, ...t.settings })), t.features)) {
                            (this.lookup = new n(t.features, t.intents)), this.initialize(t.features.length, t.intents);
                            for (let e = 0; e < this.perceptrons.length; e += 1) {
                                const s = this.perceptrons[e],
                                    n = t.perceptrons[e];
                                s.bias = n[n.length - 1];
                                for (let e = 0; e < t.features.length; e += 1) s.weights[e] = n[e];
                            }
                        }
                    }
                };
            },
            { "./corpus-lookup": 43 },
        ],
        47: [
            function (t, e, s) {
                const { Clonable: n } = t("@nlpjs/core");
                e.exports = class extends n {
                    constructor(t = {}, e) {
                        super({ settings: {}, container: t.container || e }, e),
                            this.applySettings(this.settings, t),
                            this.settings.tag || (this.settings.tag = "action-manager"),
                            this.registerDefault(),
                            this.applySettings(this.settings, this.container.getConfiguration(this.settings.tag)),
                            (this.actions = {}),
                            (this.actionsMap = {}),
                            this.applySettings(this, { pipelineFind: this.getPipeline(this.settings.tag + "-find") });
                    }
                    registerDefault() {}
                    posAction(t, e, s) {
                        if (!this.actions[t]) return -1;
                        const n = this.actions[t];
                        for (let t = 0; t < n.length; t += 1) if (n[t].action === e && n[t].parameters.toString() === s.toString()) return t;
                        return -1;
                    }
                    findActions(t) {
                        return (this.actions[t] || []).map((t) => ({ ...t, fn: this.actionsMap[t.action] }));
                    }
                    async processActions(t, e) {
                        const s = this.findActions(t);
                        "object" == typeof e && (e.actions = s.map((t) => ({ action: t.action, parameters: t.parameters })));
                        let n = e;
                        for (const { fn: t, parameters: e } of s)
                            if (t) {
                                const s = await t(n, ...(e || []));
                                s && ("object" == typeof n ? ("object" == typeof s ? (n = s) : (n.answer = s)) : (n = s));
                            }
                        return n;
                    }
                    addAction(t, e, s, n) {
                        -1 === this.posAction(t, e, s) && (this.actions[t] || (this.actions[t] = []), this.actions[t].push({ action: e, parameters: s }), n && (this.actionsMap[e] = n));
                    }
                    removeAction(t, e, s) {
                        const n = this.posAction(t, e, s);
                        n > -1 && this.actions[t].splice(n, 1);
                    }
                    removeActions(t) {
                        delete this.actions[t];
                    }
                    removeActionFromMap(t) {
                        delete this.actionsMap[t];
                    }
                    run(t, e) {
                        const s = t;
                        return (s.settings = s.settings || e || this.settings), this.processActions(t.intent, s);
                    }
                    toJSON() {
                        const t = { settings: { ...this.settings }, actions: this.actions };
                        return delete t.settings.container, t;
                    }
                    fromJSON(t) {
                        this.applySettings(this.settings, t.settings), (this.actions = t.actions);
                    }
                };
            },
            { "@nlpjs/core": 12 },
        ],
        48: [
            function (t, e, s) {
                const n = t("./nlg-manager"),
                    i = t("./action-manager");
                e.exports = { NlgManager: n, ActionManager: i };
            },
            { "./action-manager": 47, "./nlg-manager": 49 },
        ],
        49: [
            function (t, e, s) {
                const { Clonable: n } = t("@nlpjs/core");
                e.exports = class extends n {
                    constructor(t = {}, e) {
                        super({ settings: {}, container: t.container || e }, e),
                            this.applySettings(this.settings, t),
                            this.settings.tag || (this.settings.tag = "nlg-manager"),
                            this.registerDefault(),
                            this.applySettings(this.settings, this.container.getConfiguration(this.settings.tag)),
                            (this.responses = {}),
                            this.applySettings(this, { pipelineFind: this.getPipeline(this.settings.tag + "-find") });
                    }
                    registerDefault() {
                        this.container.registerConfiguration("nlg-manager", {}, !1);
                    }
                    findAllAnswers(t) {
                        const e = t;
                        return this.responses[e.locale] ? (e.answers = this.responses[e.locale][e.intent] || []) : (e.answers = []), e;
                    }
                    filterAnswers(t) {
                        const e = t,
                            { answers: s } = e;
                        if (s && s.length) {
                            const t = this.container.get("Evaluator");
                            if (t) {
                                const n = e.context || {},
                                    i = [];
                                for (let e = 0; e < s.length; e += 1) {
                                    const r = s[e];
                                    if (r.opts) {
                                        const e = "string" == typeof r.opts ? r.opts : r.opts.condition;
                                        e ? !0 === t.evaluate(e, n) && i.push(r) : i.push(r);
                                    } else i.push(r);
                                }
                                e.answers = i;
                            }
                        }
                        return e;
                    }
                    chooseRandom(t) {
                        const e = t,
                            { answers: s } = e;
                        return s && s.length && (e.answer = s[Math.floor(Math.random() * s.length)].answer), e;
                    }
                    renderText(t, e) {
                        if (!t) return t;
                        let s,
                            n = t.answer || t;
                        do {
                            const t = /\((?:[^()]+)\|(?:[^()]+)\)/g.exec(n);
                            if (t) {
                                for (let e = 0; e < t.length; e += 1) {
                                    const s = t[e],
                                        i = s.substring(1, s.length - 1).split("|");
                                    n = n.replace(s, i[Math.floor(Math.random() * i.length)]);
                                }
                                s = !0;
                            } else s = !1;
                        } while (s);
                        const i = this.container.get("Template");
                        return i && e ? i.compile(t, e) : t.answer ? ((t.answer = n), t) : n;
                    }
                    renderRandom(t) {
                        const e = t,
                            { answers: s, context: n } = e;
                        for (let t = 0; t < s.length; t += 1) s[t] = this.renderText(s[t], n);
                        return e;
                    }
                    indexOfAnswer(t, e, s, n) {
                        if (!this.responses[t]) return -1;
                        if (!this.responses[t][e]) return -1;
                        const i = this.responses[t][e];
                        for (let t = 0; t < i.length; t += 1) {
                            const e = i[t];
                            if (e.answer === s && JSON.stringify(e.opts) === JSON.stringify(n)) return t;
                        }
                        return -1;
                    }
                    add(t, e, s, n) {
                        const i = this.indexOfAnswer(t, e, s, n);
                        if (-1 !== i) return this.responses[t][e][i];
                        this.responses[t] || (this.responses[t] = {}), this.responses[t][e] || (this.responses[t][e] = []);
                        const r = { answer: s, opts: n };
                        return this.responses[t][e].push(r), r;
                    }
                    remove(t, e, s, n) {
                        const i = this.indexOfAnswer(t, e, s, n);
                        -1 !== i && this.responses[t][e].splice(i, 1);
                    }
                    defaultPipelineFind(t) {
                        let e = this.findAllAnswers(t);
                        return (e = this.filterAnswers(e)), (e = this.renderRandom(e)), (e = this.chooseRandom(e)), e;
                    }
                    find(t, e, s, n) {
                        const i = { locale: t, intent: e, context: s, settings: n || this.settings };
                        return this.pipelineFind ? this.runPipeline(i, this.pipelineFind) : this.defaultPipelineFind(i);
                    }
                    run(t, e) {
                        return this.find(t.locale, t.intent, t.context, e);
                    }
                    toJSON() {
                        const t = { settings: { ...this.settings }, responses: this.responses };
                        return delete t.settings.container, t;
                    }
                    fromJSON(t) {
                        this.applySettings(this.settings, t.settings), (this.responses = t.responses);
                    }
                };
            },
            { "@nlpjs/core": 12 },
        ],
        50: [
            function (t, e, s) {
                const { Clonable: n } = t("@nlpjs/core");
                e.exports = class extends n {
                    constructor(t = {}, e) {
                        super({ settings: {}, container: t.container || e }, e),
                            this.applySettings(this.settings, t),
                            this.settings.tag || (this.settings.tag = "context-manager"),
                            this.registerDefault(),
                            this.applySettings(this.settings, this.container.getConfiguration(this.settings.tag)),
                            (this.contextDictionary = {}),
                            (this.defaultData = {});
                    }
                    registerDefault() {
                        this.container.registerConfiguration("context-manager", { tableName: "context" });
                    }
                    async getInputContextId(t) {
                        let e;
                        return this.onGetInputContextId && (e = await this.onGetInputContextId(t)), !e && t && t.activity && t.activity.address && t.activity.address.conversation && (e = t.activity.address.conversation.id), e;
                    }
                    async getContext(t) {
                        const e = await this.getInputContextId(t);
                        let s;
                        if (e) {
                            if (this.settings.tableName) {
                                const t = this.container ? this.container.get("database") : void 0;
                                t && (s = (await t.findOne(this.settings.tableName, { conversationId: e })) || { id: e });
                            }
                            s || (s = this.contextDictionary[e] || { conversationId: e });
                        } else s = {};
                        return (s._data = this.defaultData), s;
                    }
                    async setContext(t, e) {
                        const s = await this.getInputContextId(t);
                        if (s) {
                            const t = Object.keys(e),
                                n = { conversationId: s };
                            for (let s = 0; s < t.length; s += 1) {
                                const i = t[s];
                                i.startsWith("_") || (n[i] = e[i]);
                            }
                            if (this.settings.tableName) {
                                const t = this.container ? this.container.get("database") : void 0;
                                t ? await t.save(this.settings.tableName, n) : (this.contextDictionary[s] = n);
                            } else this.contextDictionary[s] = n;
                        }
                    }
                };
            },
            { "@nlpjs/core": 12 },
        ],
        51: [
            function (t, e, s) {
                const n = t("./nlp"),
                    i = t("./context-manager");
                e.exports = { Nlp: n, ContextManager: i };
            },
            { "./context-manager": 50, "./nlp": 52 },
        ],
        52: [
            function (t, e, s) {
                const { Clonable: n, containerBootstrap: i } = t("@nlpjs/core"),
                    { NluManager: r, NluNeural: o } = t("@nlpjs/nlu"),
                    { Ner: a, ExtractorEnum: u, ExtractorRegex: c, ExtractorTrim: l, ExtractorBuiltin: h } = t("@nlpjs/ner"),
                    { ActionManager: g, NlgManager: f } = t("@nlpjs/nlg"),
                    { SentimentAnalyzer: p } = t("@nlpjs/sentiment"),
                    { SlotManager: d } = t("@nlpjs/slot"),
                    m = t("./context-manager");
                e.exports = class extends n {
                    constructor(t = {}, e) {
                        super({ settings: {}, container: t.container || e || i() }, e),
                            this.applySettings(this.settings, t),
                            this.settings.tag || (this.settings.tag = "nlp"),
                            this.registerDefault(),
                            this.applySettings(this.settings, this.container.getConfiguration(this.settings.tag)),
                            (this.nluManager = this.container.get("nlu-manager", this.settings.nlu)),
                            (this.ner = this.container.get("ner", this.settings.ner)),
                            (this.nlgManager = this.container.get("nlg-manager", this.settings.nlg)),
                            (this.actionManager = this.container.get("action-manager", this.settings.action)),
                            (this.sentiment = this.container.get("sentiment-analyzer", this.settings.sentiment)),
                            (this.slotManager = this.container.get("SlotManager", this.settings.slot)),
                            (this.contextManager = this.container.get("context-manager", this.settings.context)),
                            (this.forceNER = this.settings.forceNER),
                            void 0 === this.forceNER && (this.forceNER = !1),
                            this.initialize();
                    }
                    registerDefault() {
                        this.container.registerConfiguration("nlp", { threshold: 0.5, autoLoad: !0, autoSave: !0, modelFileName: "model.nlp" }, !1),
                            this.use(r),
                            this.use(a),
                            this.use(u),
                            this.use(c),
                            this.use(l),
                            this.use(h),
                            this.use(f),
                            this.use(g),
                            this.use(o),
                            this.use(p),
                            this.use(m),
                            this.container.register("SlotManager", d, !1);
                    }
                    initialize() {
                        if (this.settings.nlu) {
                            const t = Object.keys(this.settings.nlu);
                            for (let e = 0; e < t.length; e += 1) {
                                const s = t[e],
                                    n = Object.keys(this.settings.nlu[s]);
                                for (let t = 0; t < n.length; t += 1) {
                                    const e = n[t],
                                        i = this.settings.nlu[s][e],
                                        { className: r } = i;
                                    delete i.className, this.useNlu(r, s, e, i);
                                }
                            }
                        }
                        this.settings.languages && this.addLanguage(this.settings.languages),
                            this.settings.locales && this.addLanguage(this.settings.locales),
                            void 0 === this.settings.calculateSentiment && (this.settings.calculateSentiment = !0);
                    }
                    async start() {
                        this.settings.corpora && (await this.addCorpora(this.settings.corpora));
                    }
                    async loadOrTrain() {
                        let t = !1;
                        this.settings.autoLoad && (t = await this.load(this.settings.modelFileName)), t || (await this.train());
                    }
                    useNlu(t, e, s, n) {
                        if ((e || (e = "??"), Array.isArray(e))) for (let i = 0; i < e.length; i += 1) this.useNlu(t, e[i], s, n);
                        else {
                            const i = "string" == typeof t ? t : this.container.use(t);
                            let r = this.container.getConfiguration("domain-manager-" + e);
                            r || ((r = {}), this.container.registerConfiguration("domain-manager-" + e, r)), r.nluByDomain || (r.nluByDomain = {});
                            const o = s && "*" !== s ? s : "default";
                            r.nluByDomain[o] || (r.nluByDomain[o] = {}), (r.nluByDomain[o].className = i), (r.nluByDomain[o].settings = n);
                        }
                    }
                    guessLanguage(t) {
                        return this.nluManager.guessLanguage(t);
                    }
                    addLanguage(t) {
                        return this.nluManager.addLanguage(t);
                    }
                    removeLanguage(t) {
                        return this.nluManager.removeLanguage(t);
                    }
                    addDocument(t, e, s) {
                        const n = this.ner.getEntitiesFromUtterance(e);
                        return this.slotManager.addBatch(s, n), this.nluManager.add(t, e, s);
                    }
                    removeDocument(t, e, s) {
                        return this.nluManager.remove(t, e, s);
                    }
                    getRulesByName(t, e) {
                        return this.ner.getRulesByName(t, e);
                    }
                    addNerRule(t, e, s, n) {
                        return this.ner.addRule(t, e, s, n);
                    }
                    removeNerRule(t, e, s) {
                        return this.ner.removeRule(t, e, s);
                    }
                    addNerRuleOptionTexts(t, e, s, n) {
                        return this.ner.addRuleOptionTexts(t, e, s, n);
                    }
                    removeNerRuleOptionTexts(t, e, s, n) {
                        return this.ner.removeRuleOptionTexts(t, e, s, n);
                    }
                    addNerRegexRule(t, e, s) {
                        return this.ner.addRegexRule(t, e, s);
                    }
                    addNerBetweenCondition(t, e, s, n, i) {
                        return this.ner.addBetweenCondition(t, e, s, n, i);
                    }
                    addNerPositionCondition(t, e, s, n, i) {
                        return this.ner.addPositionCondition(t, e, s, n, i);
                    }
                    addNerAfterCondition(t, e, s, n) {
                        return this.ner.addAfterCondition(t, e, s, n);
                    }
                    addNerAfterFirstCondition(t, e, s, n) {
                        return this.ner.addAfterFirstCondition(t, e, s, n);
                    }
                    addNerAfterLastCondition(t, e, s, n) {
                        return this.ner.addAfterLastCondition(t, e, s, n);
                    }
                    addNerBeforeCondition(t, e, s, n) {
                        return this.ner.addBeforeCondition(t, e, s, n);
                    }
                    addNerBeforeFirstCondition(t, e, s, n) {
                        return this.ner.addBeforeFirstCondition(t, e, s, n);
                    }
                    addNerBeforeLastCondition(t, e, s, n) {
                        return this.ner.addBeforeLastCondition(t, e, s, n);
                    }
                    assignDomain(t, e, s) {
                        return this.nluManager.assignDomain(t, e, s);
                    }
                    getIntentDomain(t, e) {
                        return this.nluManager.getIntentDomain(t, e);
                    }
                    getDomains() {
                        return this.nluManager.getDomains();
                    }
                    addAction(t, e, s, n) {
                        return this.actionManager.addAction(t, e, s, n);
                    }
                    getActions(t) {
                        return this.actionManager.findActions(t);
                    }
                    removeAction(t, e, s) {
                        return this.actionManager.removeAction(t, e, s);
                    }
                    removeActions(t) {
                        return this.actionManager.removeActions(t);
                    }
                    addAnswer(t, e, s, n) {
                        return this.nlgManager.add(t, e, s, n);
                    }
                    removeAnswer(t, e, s, n) {
                        return this.nlgManager.remove(t, e, s, n);
                    }
                    findAllAnswers(t, e) {
                        return this.nlgManager.findAllAnswers({ locale: t, intent: e }).answers;
                    }
                    async addCorpora(t) {
                        if (t)
                            if (Array.isArray(t)) for (let e = 0; e < t.length; e += 1) await this.addCorpus(t[e]);
                            else await this.addCorpus(t);
                    }
                    async addImported(t) {
                        let e;
                        if (t.content) e = t.content;
                        else {
                            if (!t.filename) throw new Error("Corpus information without content or file name");
                            {
                                const s = this.container.get("fs");
                                if (((e = await s.readFile(t.filename)), !e)) throw new Error(`Corpus not found "${t.filename}"`);
                            }
                        }
                        let s = this.container.get(t.importer);
                        if ((s || (s = this.container.get(t.importer + "-importer")), !s)) throw new Error("Corpus importer not found: " + t.importer);
                        const n = s.transform(e, t);
                        for (let t = 0; t < n.length; t += 1) this.addCorpus(n[t]);
                    }
                    addEntities(t, e) {
                        const s = Object.keys(t);
                        for (let n = 0; n < s.length; n += 1) {
                            const i = s[n];
                            let r = t[i];
                            "string" == typeof r && (r = { regex: r }), r.type || (r.type = r.regex ? "regex" : "text");
                            let o = r.locale;
                            if ((o || (o = e || "en"), "string" == typeof o && (o = o.slice(0, 2)), "text" === r.type)) {
                                const t = r.options || {},
                                    e = Object.keys(t);
                                for (let s = 0; s < e.length; s += 1) this.addNerRuleOptionTexts(o, i, e[s], t[e[s]]);
                            } else "regex" === r.type && this.addNerRegexRule(o, i, r.regex);
                        }
                    }
                    addData(t, e, s) {
                        for (let n = 0; n < t.length; n += 1) {
                            const i = t[n],
                                { intent: r, utterances: o, answers: a } = i;
                            for (let t = 0; t < o.length; t += 1) s && this.assignDomain(e, r, s.name), this.addDocument(e, o[t], r);
                            if (a)
                                for (let t = 0; t < a.length; t += 1) {
                                    const s = a[t];
                                    "string" == typeof s ? this.addAnswer(e, r, s) : this.addAnswer(e, r, s.answer, s.opts);
                                }
                        }
                    }
                    async addCorpus(t) {
                        if (t.importer) await this.addImported(t);
                        else {
                            let e = t;
                            const s = this.container.get("fs");
                            if ("string" == typeof t) {
                                const n = await s.readFile(t);
                                if (!n) throw new Error(`Corpus not found "${t}"`);
                                e = "string" == typeof n ? JSON.parse(n) : n;
                            }
                            if (e.contextData) {
                                let { contextData: t } = e;
                                "string" == typeof e.contextData && (t = JSON.parse(await s.readFile(e.contextData)));
                                const n = this.container.get("context-manager"),
                                    i = Object.keys(t);
                                for (let e = 0; e < i.length; e += 1) n.defaultData[i[e]] = t[i[e]];
                            }
                            if (e.domains) {
                                e.entities && this.addEntities(e.entities);
                                for (let t = 0; t < e.domains.length; t += 1) {
                                    const s = e.domains[t],
                                        { data: n, entities: i } = s,
                                        r = s.locale.slice(0, 2);
                                    this.addLanguage(r), i && this.addEntities(i, r), this.addData(n, r, s);
                                }
                            } else {
                                const t = e.locale.slice(0, 2);
                                this.addLanguage(t);
                                const { data: s, entities: n } = e;
                                n && this.addEntities(n, t), this.addData(s, t);
                            }
                        }
                    }
                    getSentiment(t, e) {
                        return "object" == typeof t ? this.sentiment.process(t) : (e || ((e = t), (t = this.guessLanguage(e))), this.sentiment.process({ utterance: e, locale: t }));
                    }
                    describeLanguage(t, e) {
                        this.nluManager.describeLanguage(t, e);
                    }
                    async train() {
                        this.nluManager.addLanguage(this.settings.languages);
                        const t = await this.nluManager.train();
                        return this.settings.autoSave && (await this.save(this.settings.modelFileName, !0)), t;
                    }
                    async classify(t, e, s) {
                        return this.nluManager.process(t, e, s || this.settings.nlu);
                    }
                    async extractEntities(t, e, s, n) {
                        if ("object" == typeof t) return this.ner.process(t);
                        e || ((e = t), (t = void 0)), t || (t = this.guessLanguage(e));
                        return await this.ner.process({ locale: t, utterance: e, context: s, settings: this.applySettings(n, this.settings.ner) });
                    }
                    organizeEntities(t) {
                        const e = {};
                        for (let s = 0; s < t.length; s += 1) {
                            const n = t[s];
                            e[n.entity] || (e[n.entity] = []), e[n.entity].push(n);
                        }
                        const s = [];
                        return (
                            Object.keys(e).forEach((t) => {
                                const n = e[t];
                                if (1 === n.length) s.push(n[0]);
                                else {
                                    for (let e = 0; e < n.length; e += 1) n[e].alias = `${t}_${e}`;
                                    s.push({ entity: t, isList: !0, items: n });
                                }
                            }),
                            s
                        );
                    }
                    async process(t, e, s, n) {
                        let i,
                            r = s;
                        "object" == typeof t && ("object" == typeof e && e.value ? ((t = void 0), (e = e.value)) : (i = t)),
                            i && ((t = i.locale), (e = i.utterance || i.message || i.text), r || (r = await this.contextManager.getContext(i)), (r.channel = i.channel), (r.app = i.app), (r.from = i.from || null)),
                            r || (r = {}),
                            e || ((e = t), (t = void 0)),
                            t || (t = this.guessLanguage(e));
                        const o = { locale: t, utterance: e, context: r, settings: this.applySettings(n, this.settings.nlu) };
                        let a = await this.nluManager.process(o);
                        if (this.forceNER || !this.slotManager.isEmpty) {
                            const s = await this.ner.generateEntityUtterance(t, e);
                            if (s && s !== e) {
                                const i = { locale: t, utterance: s, context: r, settings: this.applySettings(n, this.settings.nlu) },
                                    o = await this.nluManager.process(i);
                                o && (o.score > a.score || "None" === a.intent) && ((a = o), (a.utterance = e), (a.optionalUtterance = s));
                            }
                        }
                        a.score < this.settings.threshold && ((a.score = 1), (a.intent = "None")),
                            (a.context = r),
                            this.forceNER || !this.slotManager.isEmpty ? (a = await this.ner.process({ ...a })) : ((a.entities = []), (a.sourceEntities = []));
                        const u = this.container.get("stemmer-" + a.locale);
                        u && u.lastFill && u.lastFill(a);
                        const c = this.organizeEntities(a.entities);
                        a.context.entities || (a.context.entities = {});
                        for (let t = 0; t < c.length; t += 1) {
                            const e = c[t];
                            if (((a.context.entities[e.entity] = e), e.isList)) for (let t = 0; t < e.items.length; t += 1) a.context[e.items[t].alias] = e.items[t].sourceText;
                            a.context[e.entity] = e.isList ? e.items[0].sourceText : e.sourceText;
                        }
                        const l = await this.nlgManager.run({ ...a });
                        if (((a.answers = l.answers), (a.answer = l.answer), (a = await this.actionManager.run({ ...a })), this.settings.calculateSentiment)) {
                            const s = await this.getSentiment(t, e);
                            a.sentiment = s ? s.sentiment : void 0;
                        }
                        (!this.forceNER && this.slotManager.isEmpty) ||
                            (this.slotManager.process(a, r) &&
                                a.entities.forEach((t) => {
                                    r[t.entity] = t.option || t.utteranceText;
                                }),
                            (r.slotFill = a.slotFill)),
                            await this.contextManager.setContext(i, r),
                            delete a.context,
                            delete a.settings;
                        const h = i ? this.applySettings(i, a) : a;
                        if ("None" === h.intent && !h.answer) {
                            const t = this.container.get("open-question");
                            if (t) {
                                const e = await t.getAnswer(h.locale, h.utterance);
                                e && e.answer && e.answer.length > 0 && ((h.answer = e.answer), (h.isOpenQuestionAnswer = !0), (h.openQuestionFirstCharacter = e.position), (h.openQuestionScore = e.score));
                            }
                        }
                        if (this.onIntent) await this.onIntent(this, h);
                        else {
                            const t = `onIntent(${h.intent})`,
                                e = this.container.getPipeline(t);
                            e && (await this.container.runPipeline(e, h, this));
                        }
                        return h;
                    }
                    toJSON() {
                        const t = {
                            settings: { ...this.settings },
                            nluManager: this.nluManager.toJSON(),
                            ner: this.ner.toJSON(),
                            nlgManager: this.nlgManager.toJSON(),
                            actionManager: this.actionManager.toJSON(),
                            slotManager: this.slotManager.save(),
                        };
                        return delete t.settings.container, t;
                    }
                    fromJSON(t) {
                        this.applySettings(this.settings, t.settings),
                            this.nluManager.fromJSON(t.nluManager),
                            this.ner.fromJSON(t.ner),
                            this.nlgManager.fromJSON(t.nlgManager),
                            this.actionManager.fromJSON(t.actionManager),
                            this.slotManager.load(t.slotManager);
                    }
                    export(t = !1) {
                        const e = this.toJSON();
                        return t ? JSON.stringify(e) : JSON.stringify(e, null, 2);
                    }
                    import(t) {
                        const e = "string" == typeof t ? JSON.parse(t) : t;
                        this.fromJSON(e);
                    }
                    async save(t, e = !1) {
                        const s = this.container.get("fs"),
                            n = t || "model.nlp";
                        await s.writeFile(n, this.export(e));
                    }
                    async load(t) {
                        const e = this.container.get("fs"),
                            s = t || "model.nlp",
                            n = await e.readFile(s);
                        return !!n && (this.import(n), !0);
                    }
                };
            },
            { "./context-manager": 50, "@nlpjs/core": 12, "@nlpjs/ner": 39, "@nlpjs/nlg": 48, "@nlpjs/nlu": 54, "@nlpjs/sentiment": 62, "@nlpjs/slot": 69 },
        ],
        53: [
            function (t, e, s) {
                const { Clonable: n } = t("@nlpjs/core"),
                    i = "master_domain";
                e.exports = class extends n {
                    constructor(t = {}, e) {
                        super({ settings: {}, container: t.container || e }, e),
                            this.applySettings(this.settings, t),
                            this.applySettings(this.settings, { locale: "en" }),
                            this.settings.tag || (this.settings.tag = "domain-manager-" + this.settings.locale),
                            this.registerDefault(),
                            this.applySettings(this.settings, this.container.getConfiguration(this.settings.tag)),
                            (this.domains = {}),
                            this.addDomain(i),
                            (this.stemDict = {}),
                            (this.intentDict = {}),
                            (this.sentences = []),
                            this.applySettings(this, { pipelineTrain: this.getPipeline(this.settings.tag + "-train"), pipelineProcess: this.getPipeline(this.settings.tag + "-process") });
                    }
                    registerDefault() {
                        this.container.registerConfiguration("domain-manager-??", { nluByDomain: { default: { className: "NeuralNlu", settings: {} } }, trainByDomain: !1, useStemDict: !0 }, !1),
                            this.container.registerPipeline("domain-manager-??-train", [".trainStemmer", ".generateCorpus", ".fillStemDict", ".innerTrain", "output.status"], !1);
                    }
                    getDomainInstance(t) {
                        this.settings.nluByDomain || (this.settings.nluByDomain = {});
                        const e = this.settings.nluByDomain[t] || this.settings.nluByDomain.default || { className: "NeuralNlu", settings: {} };
                        return this.container.get(e.className || "NeuralNlu", this.applySettings({ locale: this.settings.locale }, e.settings || {}));
                    }
                    addDomain(t) {
                        return this.domains[t] || (this.domains[t] = this.getDomainInstance(t)), this.domains[t];
                    }
                    removeDomain(t) {
                        delete this.domains[t];
                    }
                    async generateStemKey(t) {
                        let e;
                        if ("string" != typeof t) e = t;
                        else {
                            const s = await this.prepare({ utterance: t });
                            e = await s.stems;
                        }
                        return Array.isArray(e) || (e = Object.keys(e)), e.slice().sort().join();
                    }
                    add(t, e, s) {
                        s ? this.sentences.push({ domain: t, utterance: e, intent: s }) : this.sentences.push({ domain: i, utterance: t, intent: e });
                    }
                    remove(t, e, s) {
                        const n = s ? t : i,
                            r = s ? e : t,
                            o = s || e;
                        for (let t = 0; t < this.sentences.length; t += 1) {
                            const e = this.sentences[t];
                            if (e.domain === n && e.utterance === r && e.intent === o) return this.sentences.splice(t, 1), !0;
                        }
                        return !1;
                    }
                    async trainStemmer(t) {
                        const e = t;
                        this.cache || (this.cache = { stem: this.container.get("stem") });
                        for (let t = 0; t < this.sentences.length; t += 1) {
                            const s = { ...this.sentences[t], ...e };
                            await this.cache.stem.addForTraining(s);
                        }
                        return await this.cache.stem.train(e), e;
                    }
                    innerGenerateCorpus(t) {
                        this.intentDict = {};
                        const e = { master_domain: [] };
                        for (let s = 0; s < this.sentences.length; s += 1) {
                            const n = this.sentences[s];
                            this.intentDict[n.intent] = n.domain;
                            const i = t || n.domain;
                            e[i] || (e[i] = []);
                            e[i].push({ utterance: n.utterance, intent: n.intent }), t || e.master_domain.push({ utterance: n.utterance, intent: n.domain });
                        }
                        return e;
                    }
                    async generateCorpus(t) {
                        const e = t;
                        return (e.corpus = this.innerGenerateCorpus(this.settings.trainByDomain ? void 0 : i)), e;
                    }
                    async prepare(t) {
                        const e = t,
                            s = "string" == typeof e,
                            n = s ? e : e.utterance,
                            r = this.addDomain(i).prepare(n);
                        return s ? r : ((e.stems = r), e);
                    }
                    async fillStemDict(t) {
                        this.stemDict = {};
                        for (let t = 0; t < this.sentences.length; t += 1) {
                            const e = await this.generateStemKey(this.sentences[t].utterance);
                            this.stemDict[e] = { intent: this.sentences[t].intent, domain: this.sentences[t].domain };
                        }
                        return t;
                    }
                    async innerTrain(t) {
                        const e = t,
                            { corpus: s } = e,
                            n = Object.keys(s),
                            i = {};
                        for (let e = 0; e < n.length; e += 1) {
                            const r = this.addDomain(n[e]),
                                o = { useNoneFeature: this.settings.useNoneFeature };
                            t.settings && void 0 !== t.settings.log && (o.log = t.settings.log);
                            const a = await r.train(s[n[e]], o);
                            i[n[e]] = a.status;
                        }
                        return (e.status = i), e;
                    }
                    async train(t) {
                        const e = { domainManager: this, settings: t || this.settings };
                        return this.runPipeline(e, this.pipelineTrain);
                    }
                    async classifyByStemDict(t, e) {
                        const s = await this.generateStemKey(t),
                            n = this.stemDict[s];
                        if (n && (!e || n.domain === e)) {
                            const t = [];
                            t.push({ intent: n.intent, score: 1 });
                            const e = Object.keys(this.intentDict);
                            for (let s = 0; s < e.length; s += 1) e[s] !== n.intent && t.push({ intent: e[s], score: 0 });
                            return { domain: n.domain, classifications: t };
                        }
                    }
                    isAllowed(t, e) {
                        return !e || (Array.isArray(e) ? e.includes(t) : !!e[t]);
                    }
                    async innerClassify(t, e) {
                        const s = t,
                            n = this.applySettings({ ...s.settings }, this.settings);
                        if (n.useStemDict) {
                            const t = await this.classifyByStemDict(s.utterance, e);
                            if (t && this.isAllowed(t.classifications[0] ? t.classifications[0].intent : void 0, n.allowList)) return (s.classification = t), (s.explanation = [{ token: "", stem: "##exact", weight: 1 }]), s;
                        }
                        if (e) {
                            const t = this.domains[e];
                            if (!t) return (s.classification = { domain: "default", classifications: [{ intent: "None", score: 1 }] }), s;
                            const n = await t.process(s.utterance, s.settings || this.settings);
                            let r, o;
                            return Array.isArray(n) ? (r = n) : ((r = n.classifications), (s.nluAnswer = n)), (o = e === i ? (r && r.length ? this.intentDict[r[0].intent] : i) : e), (s.classification = { domain: o, classifications: r }), s;
                        }
                        let r = i;
                        if ((void 0 === s.settings.trainByDomain && this.settings.trainByDomain) || s.settings.trainByDomain) {
                            const t = this.domains.master_domain;
                            let e = await t.process(s.utterance);
                            if ((e.classifications && (e = e.classifications), 1 === Object.keys(this.domains).length)) return (s.classification = { domain: "default", classifications: e }), s;
                            if (((r = e[0].intent), "None" === r)) return (s.classification = { domain: "default", classifications: [{ intent: "None", score: 1 }] }), s;
                        }
                        return this.innerClassify(s, r);
                    }
                    async defaultPipelineProcess(t) {
                        return (await this.innerClassify(t)).classification;
                    }
                    async process(t, e) {
                        const s = "string" == typeof t ? { utterance: t, settings: e || this.settings } : t;
                        return this.pipelineProcess ? this.runPipeline(s, this.pipelineProcess) : this.defaultPipelineProcess(s);
                    }
                    toJSON() {
                        const t = { settings: this.settings, stemDict: this.stemDict, intentDict: this.intentDict, sentences: this.sentences, domains: {} };
                        delete t.settings.container;
                        const e = Object.keys(this.domains);
                        for (let s = 0; s < e.length; s += 1) t.domains[e[s]] = this.domains[e[s]].toJSON();
                        return t;
                    }
                    fromJSON(t) {
                        this.applySettings(this.settings, t.settings), (this.stemDict = t.stemDict), (this.intentDict = t.intentDict), (this.sentences = t.sentences);
                        const e = Object.keys(t.domains);
                        for (let s = 0; s < e.length; s += 1) {
                            this.addDomain(e[s]).fromJSON(t.domains[e[s]]);
                        }
                    }
                };
            },
            { "@nlpjs/core": 12 },
        ],
        54: [
            function (t, e, s) {
                const n = t("./nlu"),
                    i = t("./nlu-neural"),
                    r = t("./domain-manager"),
                    o = t("./nlu-manager");
                e.exports = { Nlu: n, NluNeural: i, DomainManager: r, NluManager: o };
            },
            { "./domain-manager": 53, "./nlu": 57, "./nlu-manager": 55, "./nlu-neural": 56 },
        ],
        55: [
            function (t, e, s) {
                const { Clonable: n } = t("@nlpjs/core"),
                    { Language: i } = t("@nlpjs/language-min"),
                    r = t("./domain-manager");
                e.exports = class extends n {
                    constructor(t = {}, e) {
                        super({ settings: {}, container: t.container || e }, e),
                            this.applySettings(this.settings, t),
                            this.settings.tag || (this.settings.tag = "nlu-manager"),
                            this.registerDefault(),
                            this.applySettings(this.settings, this.container.getConfiguration(this.settings.tag)),
                            this.container.get("Language") || this.container.register("Language", i, !1),
                            (this.guesser = this.container.get("Language")),
                            (this.locales = []),
                            (this.languageNames = {}),
                            (this.domainManagers = {}),
                            (this.intentDomains = {}),
                            this.settings.locales && this.addLanguage(this.settings.locales),
                            this.applySettings(this, { pipelineTrain: this.getPipeline(this.settings.tag + "-train"), pipelineProcess: this.getPipeline(this.settings.tag + "-process") });
                    }
                    registerDefault() {
                        this.container.registerConfiguration("nlu-manager", {}, !1), this.container.registerPipeline("nlu-manager-train", [".innerTrain"], !1);
                    }
                    describeLanguage(t, e) {
                        this.languageNames[t] = { locale: t, name: e };
                    }
                    addLanguage(t) {
                        if (t) {
                            const e = Array.isArray(t) ? t : [t];
                            for (let t = 0; t < e.length; t += 1) {
                                const s = e[t].substr(0, 2).toLowerCase();
                                this.locales.includes(s) || this.locales.push(s),
                                    this.domainManagers[s] ||
                                        (this.domainManagers[s] = new r({ locale: s, ...this.settings.domain, useNoneFeature: this.settings.useNoneFeature, trainByDomain: this.settings.trainByDomain }, this.container));
                            }
                        }
                    }
                    removeLanguage(t) {
                        if (Array.isArray(t)) t.forEach((t) => this.removeLanguage(t));
                        else {
                            delete this.domainManagers[t];
                            const e = this.locales.indexOf(t);
                            -1 !== e && this.locales.splice(e, 1);
                        }
                    }
                    guessLanguage(t) {
                        const e = t,
                            s = "string" == typeof e;
                        if (1 === this.locales.length) return s ? this.locales[0] : (([e.locale] = this.locales), e);
                        if (!e) return s ? void 0 : e;
                        if (!s && e.locale) return e;
                        const n = s ? e : e.utterance;
                        if (1 === this.locales.length) {
                            if (s) return this.locales[0];
                            [e.locale] = this.locales;
                        }
                        const i = this.guesser.guess(n, this.locales, 1),
                            r = i && i.length > 0 ? i[0].alpha2 : void 0;
                        return s ? r : ((e.locale = r), e);
                    }
                    assignDomain(t, e, s) {
                        const n = s ? t.substr(0, 2).toLowerCase() : void 0,
                            i = s ? e : t,
                            r = s || e;
                        if (n) this.intentDomains[n] || (this.intentDomains[n] = {}), (this.intentDomains[n][i] = r);
                        else for (let t = 0; t < this.locales.length; t += 1) this.assignDomain(this.locales[t], i, r);
                    }
                    getIntentDomain(t, e) {
                        const s = t.substr(0, 2).toLowerCase();
                        return (this.intentDomains[s] && this.intentDomains[s][e]) || "default";
                    }
                    getDomains() {
                        const t = {},
                            e = Object.keys(this.intentDomains);
                        for (let s = 0; s < e.length; s += 1) {
                            const n = e[s];
                            t[n] = {};
                            const i = Object.keys(this.intentDomains[n]);
                            for (let e = 0; e < i.length; e += 1) {
                                const s = i[e],
                                    r = this.intentDomains[n][s];
                                t[n][r] || (t[n][r] = []), t[n][r].push(s);
                            }
                        }
                        return t;
                    }
                    consolidateLocale(t, e) {
                        const s = t ? t.substr(0, 2).toLowerCase() : this.guessLanguage(e);
                        if (!s) throw new Error("Locale must be defined");
                        return s;
                    }
                    consolidateManager(t) {
                        const e = this.domainManagers[t];
                        if (!e) throw new Error("Domain Manager not found for locale " + t);
                        return e;
                    }
                    add(t, e, s) {
                        const n = this.consolidateLocale(t, e),
                            i = this.consolidateManager(n),
                            r = this.getIntentDomain(n, s);
                        this.guesser.addExtraSentence(n, e), i.add(r, e, s);
                    }
                    remove(t, e, s) {
                        const n = this.consolidateLocale(t, e),
                            i = this.consolidateManager(n),
                            r = this.getIntentDomain(n, s);
                        i.remove(r, e, s);
                    }
                    async innerTrain(t) {
                        let e = t.locales || this.locales;
                        Array.isArray(e) || (e = [e]);
                        const s = e.filter((t) => this.domainManagers[t]).map((e) => this.domainManagers[e].train(t.settings));
                        return Promise.all(s);
                    }
                    async train(t) {
                        const e = { nluManager: this, settings: this.applySettings(t, this.settings) };
                        return delete e.settings.tag, this.runPipeline(e, this.pipelineTrain);
                    }
                    fillLanguage(t) {
                        const e = t;
                        return (
                            (e.languageGuessed = !1),
                            e.locale || ((e.locale = this.guessLanguage(e.utterance)), (e.languageGuessed = !0)),
                            e.locale && ((e.localeIso2 = e.locale.substr(0, 2).toLowerCase()), (e.language = (this.languageNames[e.localeIso2] || this.guesser.languagesAlpha2[e.localeIso2] || {}).name)),
                            e
                        );
                    }
                    classificationsIsNone(t) {
                        return 1 !== t.length && (0 === t.length || 0 === t[0].score || t[0].score === t[1].score);
                    }
                    checkIfIsNone(t) {
                        const e = t;
                        return this.classificationsIsNone(e.classifications) && ((e.intent = "None"), (e.score = 1)), e;
                    }
                    async innerClassify(t) {
                        const e = t,
                            s = this.domainManagers[e.localeIso2];
                        if (!s) return (e.classifications = []), (e.domain = void 0), (e.intent = void 0), (e.score = void 0), e;
                        const n = await s.process(t);
                        return (
                            (e.classifications = n.classifications.sort((t, e) => e.score - t.score)),
                            0 === e.classifications.length && e.classifications.push({ intent: "None", score: 1 }),
                            (e.intent = e.classifications[0].intent),
                            (e.score = e.classifications[0].score),
                            "None" === e.intent ? (n.domain = "default") : "default" === n.domain ? (e.domain = this.getIntentDomain(e.locale, e.intent)) : (e.domain = n.domain),
                            e
                        );
                    }
                    async defaultPipelineProcess(t) {
                        let e = await this.fillLanguage(t);
                        return (e = await this.innerClassify(e)), (e = await this.checkIfIsNone(e)), delete e.settings, delete e.classification, e;
                    }
                    process(t, e, s, n) {
                        const i = "object" == typeof t ? t : { locale: void 0 === e ? void 0 : t, utterance: void 0 === e ? t : e, domain: s, settings: n || this.settings };
                        return this.pipelineProcess ? this.runPipeline(i, this.pipelineProcess) : this.defaultPipelineProcess(i);
                    }
                    toJSON() {
                        const t = { settings: this.settings, locales: this.locales, languageNames: this.languageNames, domainManagers: {}, intentDomains: this.intentDomains, extraSentences: this.guesser.extraSentences.slice(0) };
                        delete t.settings.container;
                        const e = Object.keys(this.domainManagers);
                        for (let s = 0; s < e.length; s += 1) {
                            const n = e[s];
                            t.domainManagers[n] = this.domainManagers[n].toJSON();
                        }
                        return t;
                    }
                    fromJSON(t) {
                        this.applySettings(this.settings, t.settings);
                        for (let e = 0; e < t.locales.length; e += 1) this.addLanguage(t.locales[e]);
                        (this.languageNames = t.languageNames), (this.intentDomains = t.intentDomains);
                        const e = Object.keys(t.domainManagers);
                        for (let s = 0; s < e.length; s += 1) {
                            const n = e[s];
                            this.domainManagers[n].fromJSON(t.domainManagers[n]);
                        }
                        for (let e = 0; e < t.extraSentences.length; e += 1) {
                            const s = t.extraSentences[e];
                            this.guesser.addExtraSentence(s[0], s[1]);
                        }
                    }
                };
            },
            { "./domain-manager": 53, "@nlpjs/core": 12, "@nlpjs/language-min": 32 },
        ],
        56: [
            function (t, e, s) {
                const { NeuralNetwork: n } = t("@nlpjs/neural"),
                    i = t("./nlu");
                class r extends i {
                    async innerTrain(t) {
                        const e = t;
                        return (this.neuralNetwork = new n(e.settings, this.container)), (e.status = await this.neuralNetwork.train(e.corpus)), e;
                    }
                    innerProcess(t) {
                        const e = t;
                        (e.classifications = this.neuralNetwork ? this.neuralNetwork.run(e.tokens) : { None: 1 }), this.convertToArray(e);
                        const { intent: s } = e.classifications[0];
                        return e.settings && e.settings.returnExplanation && s && this.neuralNetwork && "None" !== s && (e.explanation = this.neuralNetwork.explain(e.tokens, s)), e;
                    }
                    registerDefault() {
                        super.registerDefault(), this.container.register("NeuralNlu", r, !1);
                    }
                    toJSON() {
                        const t = super.toJSON();
                        return (t.neuralNetwork = this.neuralNetwork ? this.neuralNetwork.toJSON() : void 0), t;
                    }
                    fromJSON(t) {
                        super.fromJSON(t), t.neuralNetwork && ((this.neuralNetwork = new n()), this.neuralNetwork.fromJSON(t.neuralNetwork));
                    }
                }
                e.exports = r;
            },
            { "./nlu": 57, "@nlpjs/neural": 44 },
        ],
        57: [
            function (t, e, s) {
                const { Clonable: n } = t("@nlpjs/core"),
                    { SpellCheck: i } = t("@nlpjs/similarity"),
                    r = t("./none-languages");
                e.exports = class extends n {
                    constructor(t = {}, e) {
                        super({ settings: {}, container: t.container || e }, e),
                            this.applySettings(this.settings, t),
                            this.applySettings(this.settings, { locale: "en" }),
                            this.settings.tag || (this.settings.tag = "nlu-" + this.settings.locale),
                            this.registerDefault(),
                            this.applySettings(this.settings, this.container.getConfiguration(this.settings.tag)),
                            this.applySettings(this, {
                                pipelinePrepare: this.getPipeline(this.settings.tag + "-prepare"),
                                pipelineTrain: this.getPipeline(this.settings.tag + "-train"),
                                pipelineProcess: this.getPipeline(this.settings.tag + "-process"),
                            }),
                            (this.spellCheck = new i());
                    }
                    registerDefault() {
                        this.container.registerConfiguration("nlu-??", { keepStopwords: !0, nonefeatureValue: 1, nonedeltaMultiplier: 1.2, spellCheck: !1, spellCheckDistance: 1, filterZeros: !0, log: !0 }, !1),
                            this.container.registerPipeline("nlu-??-train", [".prepareCorpus", ".addNoneFeature", ".innerTrain"], !1);
                    }
                    async defaultPipelinePrepare(t) {
                        let e;
                        if (this.cache) {
                            const t = new Date();
                            Math.abs(t.getTime() - this.cache.created) / 36e5 > 1 && ((this.cache.results = {}), (this.cache.created = new Date().getTime()));
                        }
                        if (this.cache) {
                            if (this.cache.results[t.settings.locale] && ((e = this.cache.results[t.settings.locale][t.text || t.utterance]), e)) return e;
                        } else
                            this.cache = {
                                created: new Date().getTime(),
                                results: {},
                                normalize: this.container.get("normalize"),
                                tokenize: this.container.get("tokenize"),
                                removeStopwords: this.container.get("removeStopwords"),
                                stem: this.container.get("stem"),
                                arrToObj: this.container.get("arrToObj"),
                            };
                        let s = t;
                        return (
                            (s = this.cache.normalize.run(s)),
                            (s = await this.cache.tokenize.run(s)),
                            (s = this.cache.removeStopwords.run(s)),
                            (s = await this.cache.stem.run(s)),
                            (s = this.cache.arrToObj.run(s)),
                            (e = s.tokens),
                            this.cache.results[t.settings.locale] || (this.cache.results[t.settings.locale] = {}),
                            (this.cache.results[t.settings.locale][t.text || t.utterance] = e),
                            e
                        );
                    }
                    async defaultPipelineProcess(t) {
                        let e = await this.prepare(t);
                        return (e = await this.doSpellCheck(e)), (e = await this.textToFeatures(e)), (e = await this.innerProcess(e)), (e = await this.filterNonActivated(e)), (e = await this.normalizeClassifications(e)), e;
                    }
                    async prepare(t, e) {
                        const s = e || this.settings;
                        if ("string" == typeof t) {
                            const e = { locale: this.settings.locale, text: t, settings: s };
                            return this.pipelinePrepare ? this.runPipeline(e, this.pipelinePrepare) : this.defaultPipelinePrepare(e);
                        }
                        if ("object" == typeof t) {
                            if (Array.isArray(t)) {
                                const e = [];
                                for (let n = 0; n < t.length; n += 1) e.push(await this.prepare(t[n], s));
                                return e;
                            }
                            const e = s.fieldNameSrc ? t[s.fieldNameSrc] : t.text || t.utterance || t.texts || t.utterances;
                            if (e) {
                                const n = await this.prepare(e, s);
                                return { [s.fieldNameTgt || "tokens"]: n, ...t };
                            }
                        }
                        throw new Error("Error at nlu.prepare: expected a text but received " + t);
                    }
                    async doSpellCheck(t, e) {
                        const s = this.applySettings(e || {}, this.settings);
                        let n = void 0 === t.settings.spellCheck ? void 0 : t.settings.spellCheck,
                            i = void 0 === t.settings.spellCheckDistance ? void 0 : t.settings.spellCheckDistance;
                        if ((void 0 === n && (n = void 0 === s.spellCheck ? void 0 : s.spellCheck), void 0 === i && (i = void 0 === s.spellCheckDistance ? 1 : s.spellCheckDistance), n)) {
                            const e = this.spellCheck.check(t.tokens, i);
                            t.tokens = e;
                        }
                        return t;
                    }
                    async prepareCorpus(t) {
                        (this.features = {}), (this.intents = {}), (this.intentFeatures = {});
                        const e = t,
                            { corpus: s } = e,
                            n = [];
                        for (let t = 0; t < s.length; t += 1) {
                            const { intent: i } = s[t],
                                r = { input: await this.prepare(s[t].utterance, e.settings), output: { [i]: 1 } },
                                o = Object.keys(r.input);
                            this.intentFeatures[i] || (this.intentFeatures[i] = {});
                            for (let t = 0; t < o.length; t += 1) (this.features[o[t]] = 1), (this.intentFeatures[i][o[t]] = 1);
                            (this.intents[i] = 1), n.push(r);
                        }
                        const i = Object.keys(this.intentFeatures);
                        this.featuresToIntent = {};
                        for (let t = 0; t < i.length; t += 1) {
                            const e = i[t],
                                s = Object.keys(this.intentFeatures[e]);
                            for (let t = 0; t < s.length; t += 1) {
                                const n = s[t];
                                this.featuresToIntent[n] || (this.featuresToIntent[n] = []), this.featuresToIntent[n].push(e);
                            }
                        }
                        return this.spellCheck.setFeatures(this.features), (this.numFeatures = Object.keys(this.features).length), (this.numIntents = Object.keys(this.intents).length), (e.corpus = n), e;
                    }
                    addNoneFeature(t) {
                        const { corpus: e } = t,
                            s = t.locale || this.settings.locale;
                        return ((t.settings && t.settings.useNoneFeature) || ((!t.settings || void 0 === t.settings.useNoneFeature) && r[s])) && e.push({ input: { nonefeature: 1 }, output: { None: 1 } }), t;
                    }
                    convertToArray(t) {
                        const e = t,
                            { classifications: s } = e;
                        if (s) {
                            this.intentsArr || (this.intents ? ((this.intentsArr = Object.keys(this.intents)), this.intents.None || this.intentsArr.push("None")) : (this.intentsArr = Object.keys(s)));
                            const t = this.intentsArr,
                                n = [];
                            for (let i = 0; i < t.length; i += 1) {
                                const r = t[i],
                                    o = s[r];
                                void 0 !== o && (o > 0 || !e.settings.filterZeros) && n.push({ intent: r, score: o });
                            }
                            e.classifications = n.sort((t, e) => e.score - t.score);
                        }
                        return e;
                    }
                    someSimilar(t, e) {
                        for (let s = 0; s < e.length; s += 1) if (t[e[s]]) return !0;
                        return !1;
                    }
                    intentIsActivated(t, e, s) {
                        if (s)
                            if (Array.isArray(s)) {
                                if (!s.includes(t)) return !1;
                            } else if (!s[t]) return !1;
                        const n = this.intentFeatures[t];
                        if (!n) return !1;
                        const i = Object.keys(e);
                        for (let t = 0; t < i.length; t += 1) if (n[i[t]]) return !0;
                        return !1;
                    }
                    filterNonActivated(t) {
                        if (this.intentFeatures && t.classifications) {
                            const e = t.classifications.map((t) => t.intent);
                            let s = !1;
                            for (let n = 0; n < e.length; n += 1) {
                                const i = e[n];
                                "None" !== i && (this.intentIsActivated(i, t.tokens, t.settings.allowList) || ((t.classifications[n].score = 0), (s = !0)));
                            }
                            s && t.classifications.sort((t, e) => e.score - t.score);
                        }
                        return t;
                    }
                    normalizeClassifications(t) {
                        const e = t,
                            { classifications: s } = e;
                        if (s) {
                            let t = 0;
                            for (let e = 0; e < s.length; e += 1) (s[e].score **= 2), (t += s[e].score);
                            if (t > 0) for (let e = 0; e < s.length; e += 1) s[e].score /= t;
                        } else e.classifications = e.nluAnswer;
                        return e;
                    }
                    textToFeatures(t) {
                        const e = t.locale || this.settings.locale,
                            s = t,
                            { tokens: n } = s,
                            i = Object.keys(n);
                        let o = 0;
                        const a = {};
                        for (let t = 0; t < i.length; t += 1) {
                            const e = i[t];
                            "nonefeature" === e ? (n[e] = this.nonefeatureValue) : this.features && this.features[e] ? (a[e] = n[e]) : (o += 1);
                        }
                        let u = void 0 === s.settings.nonedeltaValue ? this.numIntents / this.numFeatures : this.settings.nonedeltaValue,
                            c = 0;
                        for (let t = 0; t < o; t += 1) (c += u), (u *= this.settings.nonedeltaMultiplier);
                        return (s.settings || s.settings.useNoneFeature || ((s.settings || void 0 === s.settings.useNoneFeature) && r[e])) && c && (a.nonefeature = c), (s.tokens = a), s;
                    }
                    async innerTrain() {
                        throw new Error("This method should be implemented by child classes");
                    }
                    async train(t, e) {
                        const s = { corpus: t, settings: this.applySettings(e, this.settings) };
                        return this.runPipeline(s, this.pipelineTrain);
                    }
                    async getExplanation(t, e) {
                        if (!e) return;
                        const s = await this.container.get("normalize").run(t),
                            n = await this.container.get("tokenize").run(s),
                            { tokens: i } = n,
                            r = (await this.container.get("stem").run(n)).tokens,
                            o = [];
                        o.push({ token: "", stem: "##bias", weight: e.bias });
                        for (let t = 0; t < i.length; t += 1) {
                            const s = r[t];
                            o.push({ token: i[t], stem: s, weight: e.weights[s] });
                        }
                        return o;
                    }
                    async process(t, e) {
                        const s = { text: t, settings: this.applySettings(e || {}, this.settings) };
                        let n;
                        if (((n = this.pipelineProcess ? await this.runPipeline(s, this.pipelineProcess) : await this.defaultPipelineProcess(s)), Array.isArray(n.classifications))) {
                            const t = s.settings.returnExplanation ? await this.getExplanation(s, n.explanation) : void 0;
                            return { classifications: n.classifications, entities: void 0, explanation: t };
                        }
                        return n.intents && ((n.classifications = n.intents), delete n.intents), n;
                    }
                    toJSON() {
                        const t = { settings: { ...this.settings }, features: this.features, intents: this.intents, intentFeatures: this.intentFeatures, featuresToIntent: this.featuresToIntent };
                        return delete t.settings.container, t;
                    }
                    fromJSON(t) {
                        this.applySettings(this.settings, t.settings),
                            (this.features = t.features || {}),
                            (this.intents = t.intents || {}),
                            (this.featuresToIntent = t.featuresToIntent || {}),
                            (this.intentFeatures = t.intentFeatures || {}),
                            this.spellCheck.setFeatures(this.features),
                            (this.numFeatures = Object.keys(this.features).length),
                            (this.numIntents = Object.keys(this.intents).length);
                    }
                };
            },
            { "./none-languages": 58, "@nlpjs/core": 12, "@nlpjs/similarity": 65 },
        ],
        58: [
            function (t, e, s) {
                e.exports = {
                    bn: !1,
                    el: !0,
                    en: !0,
                    hi: !1,
                    fa: !1,
                    fr: !0,
                    ru: !0,
                    es: !0,
                    gl: !0,
                    it: !0,
                    nl: !0,
                    no: !0,
                    pt: !0,
                    pl: !0,
                    sv: !0,
                    tl: !0,
                    id: !0,
                    ja: !1,
                    ar: !1,
                    hy: !1,
                    eu: !0,
                    ca: !0,
                    cs: !0,
                    da: !0,
                    fi: !0,
                    de: !0,
                    hu: !0,
                    ga: !0,
                    ro: !0,
                    sl: !0,
                    ta: !1,
                    th: !1,
                    tr: !0,
                    zh: !1,
                };
            },
            {},
        ],
        59: [
            function (t, e, s) {
                const n = t("./request");
                e.exports = {
                    readFile: function (t) {
                        return new Promise((e) => {
                            var s;
                            (s = t).startsWith("https:") || s.startsWith("http:")
                                ? n(t)
                                      .then((t) => e(t))
                                      .catch(() => e(void 0))
                                : e(void 0);
                        });
                    },
                    writeFile: function () {
                        return new Promise((t, e) => {
                            e(new Error("File cannot be written in web"));
                        });
                    },
                    existsSync: function () {
                        return !1;
                    },
                    lstatSync: function () {},
                    readFileSync: function () {},
                    name: "fs",
                };
            },
            { "./request": 61 },
        ],
        60: [
            function (t, e, s) {
                const n = t("./request"),
                    i = t("./fs");
                e.exports = { request: n, fs: i };
            },
            { "./fs": 59, "./request": 61 },
        ],
        61: [
            function (t, e, s) {
                const n = t("axios");
                e.exports = async function (t) {
                    "string" == typeof t && (t = { url: t }), t.method || (t.method = "get");
                    const e = await n(t);
                    if (e) return e.data;
                };
            },
            { axios: 71 },
        ],
        62: [
            function (t, e, s) {
                const n = t("./sentiment-analyzer");
                e.exports = { SentimentAnalyzer: n };
            },
            { "./sentiment-analyzer": 63 },
        ],
        63: [
            function (t, e, s) {
                const { Clonable: n } = t("@nlpjs/core");
                e.exports = class extends n {
                    constructor(t = {}, e) {
                        super({ settings: {}, container: t.container || e }, e),
                            this.applySettings(this.settings, t),
                            this.settings.tag || (this.settings.tag = "sentiment-analyzer"),
                            this.registerDefault(),
                            this.applySettings(this.settings, this.container.getConfiguration(this.settings.tag)),
                            this.applySettings(this, { pipelinePrepare: this.getPipeline(this.settings.tag + "-prepare"), pipelineProcess: this.getPipeline(this.settings.tag + "-process") });
                    }
                    registerDefault() {
                        this.container.registerConfiguration("sentiment-analyzer", {}, !1);
                    }
                    prepare(t, e, s, n) {
                        const i = this.getPipeline(this.settings.tag + "-prepare");
                        if (i) {
                            const n = { text: e, locale: t, settings: s || this.settings };
                            return this.runPipeline(n, i);
                        }
                        if (n) {
                            const s = this.container.get("stemmer-" + t) || this.container.get("stemmer-en");
                            if (s) return s.tokenizeAndStem(e);
                        }
                        const r = this.container.get("tokenizer-" + t) || this.container.get("tokenizer-en");
                        if (r) return r.tokenize(e, !0);
                        return e
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .toLowerCase()
                            .split(/[\s,.!?;:([\]'"¡¿)/]+/)
                            .filter((t) => t);
                    }
                    async getDictionary(t) {
                        const e = t,
                            s = this.container.get("sentiment-" + e.locale);
                        let n;
                        return (
                            s && (s.senticon ? (n = "senticon") : s.pattern ? (n = "pattern") : s.afinn && (n = "afinn")),
                            n
                                ? ((e.sentimentDictionary = { type: n, dictionary: s[n], negations: s.negations.words, stemmed: void 0 !== s.stemmed && s.stemmed }), e)
                                : ((e.sentimentDictionary = { type: n, dictionary: void 0, negations: [], stemmed: !1 }), e)
                        );
                    }
                    async getTokens(t) {
                        const e = t;
                        return !e.tokens && e.sentimentDictionary.type && (e.tokens = await this.prepare(e.locale, e.utterance || e.text, e.settings, e.sentimentDictionary.stemmed)), e;
                    }
                    calculate(t) {
                        const e = t;
                        if (e.sentimentDictionary.type) {
                            const t = Array.isArray(e.tokens) ? e.tokens : Object.keys(e.tokens);
                            if (e.sentimentDictionary.dictionary) {
                                const { dictionary: s } = e.sentimentDictionary,
                                    { negations: n } = e.sentimentDictionary;
                                let i = 0,
                                    r = 1,
                                    o = 0;
                                for (let e = 0; e < t.length; e += 1) {
                                    const a = t[e].toLowerCase();
                                    -1 !== n.indexOf(a) ? ((r = -1), (o += 1)) : void 0 !== s[a] && ((i += r * s[a]), (o += 1));
                                }
                                e.sentiment = { score: i, numWords: t.length, numHits: o, average: i / t.length, type: e.sentimentDictionary.type, locale: e.locale };
                            } else e.sentiment = { score: 0, numWords: t.length, numHits: 0, average: 0, type: e.sentimentDictionary.type, locale: e.locale };
                        } else e.sentiment = { score: 0, numWords: 0, numHits: 0, average: 0, type: e.sentimentDictionary.type, locale: e.locale };
                        return e.sentiment.score > 0 ? (e.sentiment.vote = "positive") : e.sentiment.score < 0 ? (e.sentiment.vote = "negative") : (e.sentiment.vote = "neutral"), e;
                    }
                    async defaultPipelineProcess(t) {
                        let e = await this.getDictionary(t);
                        return (e = await this.getTokens(e)), (e = await this.calculate(e)), delete e.sentimentDictionary, e;
                    }
                    process(t, e) {
                        const s = t;
                        return (s.settings = s.settings || e || this.settings), this.pipelineProcess ? this.runPipeline(s, this.pipelineProcess) : this.defaultPipelineProcess(s);
                    }
                };
            },
            { "@nlpjs/core": 12 },
        ],
        64: [
            function (t, e, s) {
                e.exports = class {
                    constructor(t) {
                        this.container = t;
                    }
                    getTokens(t, e = "en") {
                        if ("string" == typeof t) {
                            const s = this.container && this.container.get("tokenizer-" + e);
                            return s ? s.tokenize(t, !0) : t.split(" ");
                        }
                        return t;
                    }
                    termFreqMap(t, e) {
                        const s = this.getTokens(t, e),
                            n = {};
                        return (
                            s.forEach((t) => {
                                n[t] = (n[t] || 0) + 1;
                            }),
                            n
                        );
                    }
                    addKeysToDict(t, e) {
                        Object.keys(t).forEach((t) => {
                            e[t] = !0;
                        });
                    }
                    termFreqMapToVector(t, e) {
                        const s = [];
                        return (
                            Object.keys(e).forEach((e) => {
                                s.push(t[e] || 0);
                            }),
                            s
                        );
                    }
                    vecDotProduct(t, e) {
                        let s = 0;
                        for (let n = 0; n < t.length; n += 1) s += t[n] * e[n];
                        return s;
                    }
                    vecMagnitude(t) {
                        let e = 0;
                        for (let s = 0; s < t.length; s += 1) e += t[s] * t[s];
                        return Math.sqrt(e);
                    }
                    cosineSimilarity(t, e) {
                        return this.vecDotProduct(t, e) / (this.vecMagnitude(t) * this.vecMagnitude(e));
                    }
                    similarity(t, e, s) {
                        if (t === e) return 1;
                        const n = this.termFreqMap(t, s),
                            i = this.termFreqMap(e, s);
                        if (!Object.keys(n).length || !Object.keys(i).length) return 0;
                        const r = {};
                        this.addKeysToDict(n, r), this.addKeysToDict(i, r);
                        const o = this.termFreqMapToVector(n, r),
                            a = this.termFreqMapToVector(i, r);
                        return this.cosineSimilarity(o, a);
                    }
                };
            },
            {},
        ],
        65: [
            function (t, e, s) {
                const n = t("./leven"),
                    i = t("./similarity"),
                    r = t("./cosine-similarity"),
                    o = t("./spell-check");
                e.exports = { leven: n, CosineSimilarity: r, similarity: i, SpellCheck: o };
            },
            { "./cosine-similarity": 64, "./leven": 66, "./similarity": 67, "./spell-check": 68 },
        ],
        66: [
            function (t, e, s) {
                const n = [],
                    i = [];
                e.exports = function (t, e) {
                    t.length > e.length && ([t, e] = [e, t]);
                    let s = t.length - 1,
                        r = e.length - 1;
                    for (; s > 0 && t.charCodeAt(s) === e.charCodeAt(r); ) (s -= 1), (r -= 1);
                    (s += 1), (r += 1);
                    let o,
                        a,
                        u,
                        c,
                        l = 0;
                    for (; l < s && t.charCodeAt(l) === e.charCodeAt(l); ) l += 1;
                    if (((s -= l), (r -= l), 0 === s)) return r;
                    for (let e = 0; e < s; e += 1) (i[e] = t.charCodeAt(l + e)), (n[e] = e + 1);
                    let h = 0;
                    for (; h < r; ) {
                        (o = e.charCodeAt(l + h)), (u = h), (h += 1), (a = h);
                        for (let t = 0; t < s; t += 1) (c = (u + (o !== i[t])) | 0), (u = n[t]), (n[t] = u > a ? (c > a ? a + 1 : c) : c > u ? u + 1 : c), (a = n[t]);
                    }
                    return a;
                };
            },
            {},
        ],
        67: [
            function (t, e, s) {
                const n = t("./leven");
                e.exports = function (t, e, s = !1) {
                    return (
                        s &&
                            ((t = t
                                .normalize("NFD")
                                .replace(/[\u0300-\u036f]/g, "")
                                .toLowerCase()),
                            (e = e
                                .normalize("NFD")
                                .replace(/[\u0300-\u036f]/g, "")
                                .toLowerCase())),
                        t === e ? 0 : n(t, e)
                    );
                };
            },
            { "./leven": 66 },
        ],
        68: [
            function (t, e, s) {
                const n = t("./similarity");
                e.exports = class {
                    constructor(t) {
                        (this.settings = t || {}), (this.minLength = this.settings.minLength || 4), this.settings.features ? this.setFeatures(this.settings.features) : ((this.features = {}), (this.featuresByLength = {}));
                    }
                    setFeatures(t) {
                        (this.features = t), (this.featuresByLength = {}), (this.featuresList = Object.keys(this.features));
                        for (let t = 0; t < this.featuresList.length; t += 1) {
                            const e = this.featuresList[t],
                                { length: s } = e;
                            this.featuresByLength[s] || (this.featuresByLength[s] = []), this.featuresByLength[s].push(e);
                        }
                    }
                    checkToken(t, e) {
                        if (this.features[t]) return t;
                        if (t.length < this.minLength) return t;
                        let s,
                            i = 1 / 0;
                        for (let r = t.length - e - 1; r < t.length + e; r += 1) {
                            const o = this.featuresByLength[r + 1];
                            if (o)
                                for (let r = 0; r < o.length; r += 1) {
                                    const a = o[r],
                                        u = n(t, a);
                                    if (u <= e)
                                        if (u < i) (s = a), (i = u);
                                        else if (u === i && s) {
                                            const e = Math.abs(s.length - t.length),
                                                n = Math.abs(a.length - t.length);
                                            (e > n || (e === n && this.features[a] > this.features[s])) && ((s = a), (i = u));
                                        }
                                }
                        }
                        return s || t;
                    }
                    check(t, e = 1) {
                        if (!Array.isArray(t)) {
                            const s = Object.keys(t),
                                n = this.check(s, e),
                                i = {};
                            for (let e = 0; e < n.length; e += 1) i[n[e]] = t[s[e]];
                            return i;
                        }
                        const s = [];
                        for (let n = 0; n < t.length; n += 1) s.push(this.checkToken(t[n], e));
                        return s;
                    }
                };
            },
            { "./similarity": 67 },
        ],
        69: [
            function (t, e, s) {
                const n = t("./slot-manager");
                e.exports = { SlotManager: n };
            },
            { "./slot-manager": 70 },
        ],
        70: [
            function (t, e, s) {
                e.exports = class {
                    constructor() {
                        (this.intents = {}), (this.isEmpty = !0);
                    }
                    getSlot(t, e) {
                        if (this.intents[t]) return this.intents[t][e];
                    }
                    existsSlot(t, e) {
                        return void 0 !== this.getSlot(t, e);
                    }
                    addSlot(t, e, s = !1, n) {
                        return (this.isEmpty = !1), this.intents[t] || (this.intents[t] = {}), (this.intents[t][e] = { intent: t, entity: e, mandatory: s, locales: n || {} }), this.intents[t][e];
                    }
                    removeSlot(t, e) {
                        this.intents[t] && delete this.intents[t][e];
                    }
                    addBatch(t, e) {
                        const s = [];
                        return (
                            e &&
                                e.length > 0 &&
                                e.forEach((e) => {
                                    let n = this.getSlot(t, e);
                                    n || (n = this.addSlot(t, e)), s.push(n);
                                }),
                            s
                        );
                    }
                    getIntentEntityNames(t) {
                        if (this.intents[t]) return Object.keys(this.intents[t]);
                    }
                    clear() {
                        this.intents = {};
                    }
                    load(t) {
                        this.intents = t || {};
                    }
                    save() {
                        return this.intents;
                    }
                    getMandatorySlots(t) {
                        const e = {},
                            s = this.intents[t];
                        if (s) {
                            const t = Object.keys(s);
                            for (let n = 0, i = t.length; n < i; n += 1) {
                                const i = s[t[n]];
                                i.mandatory && (e[i.entity] = i);
                            }
                        }
                        return e;
                    }
                    cleanContextEntities(t, e) {
                        const s = e;
                        if (s.slotFill) return;
                        const n = this.getMandatorySlots(t),
                            i = Object.keys(n);
                        0 !== i.length &&
                            i.forEach((t) => {
                                delete s[t];
                            });
                    }
                    process(t, e) {
                        const s = t,
                            n = e;
                        if ((this.cleanContextEntities(s.intent, n), n.slotFill && ((s.intent = n.slotFill.intent), (s.answer = n.slotFill.answer), (s.srcAnswer = n.slotFill.srcAnswer)), !s.intent || "None" === s.intent)) return !1;
                        n.slotFill && n.slotFill.intent === s.intent && (s.entities = [...n.slotFill.entities, ...s.entities]);
                        const i = this.getMandatorySlots(s.intent);
                        let r = Object.keys(i);
                        if (0 === r.length) return !1;
                        n.slotFill && s.entities.push({ entity: n.slotFill.currentSlot, utteranceText: s.utterance, sourceText: s.utterance, accuracy: 0.95, start: 0, end: s.utterance.length - 1, len: s.utterance.length });
                        for (let t = 0, e = s.entities.length; t < e; t += 1) delete i[s.entities[t].entity];
                        if (((r = Object.keys(i)), !r || 0 === r.length)) return !0;
                        n.slotFill && n.slotFill.intent === s.intent && (s.localeIso2 = n.slotFill.localeIso2), (s.slotFill = { localeIso2: s.localeIso2, intent: s.intent, entities: s.entities, answer: s.answer, srcAnswer: s.srcAnswer });
                        const o = i[r[0]];
                        return (s.slotFill.currentSlot = o.entity), (s.srcAnswer = o.locales[s.localeIso2]), (n.slotFill = s.slotFill), !0;
                    }
                };
            },
            {},
        ],
        71: [
            function (t, e, s) {
                e.exports = t("./lib/axios");
            },
            { "./lib/axios": 73 },
        ],
        72: [
            function (t, e, s) {
                "use strict";
                var n = t("./../utils"),
                    i = t("./../core/settle"),
                    r = t("./../helpers/cookies"),
                    o = t("./../helpers/buildURL"),
                    a = t("../core/buildFullPath"),
                    u = t("./../helpers/parseHeaders"),
                    c = t("./../helpers/isURLSameOrigin"),
                    l = t("../core/createError");
                e.exports = function (t) {
                    return new Promise(function (e, s) {
                        var h = t.data,
                            g = t.headers;
                        n.isFormData(h) && delete g["Content-Type"];
                        var f = new XMLHttpRequest();
                        if (t.auth) {
                            var p = t.auth.username || "",
                                d = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                            g.Authorization = "Basic " + btoa(p + ":" + d);
                        }
                        var m = a(t.baseURL, t.url);
                        if (
                            (f.open(t.method.toUpperCase(), o(m, t.params, t.paramsSerializer), !0),
                            (f.timeout = t.timeout),
                            (f.onreadystatechange = function () {
                                if (f && 4 === f.readyState && (0 !== f.status || (f.responseURL && 0 === f.responseURL.indexOf("file:")))) {
                                    var n = "getAllResponseHeaders" in f ? u(f.getAllResponseHeaders()) : null,
                                        r = { data: t.responseType && "text" !== t.responseType ? f.response : f.responseText, status: f.status, statusText: f.statusText, headers: n, config: t, request: f };
                                    i(e, s, r), (f = null);
                                }
                            }),
                            (f.onabort = function () {
                                f && (s(l("Request aborted", t, "ECONNABORTED", f)), (f = null));
                            }),
                            (f.onerror = function () {
                                s(l("Network Error", t, null, f)), (f = null);
                            }),
                            (f.ontimeout = function () {
                                var e = "timeout of " + t.timeout + "ms exceeded";
                                t.timeoutErrorMessage && (e = t.timeoutErrorMessage), s(l(e, t, "ECONNABORTED", f)), (f = null);
                            }),
                            n.isStandardBrowserEnv())
                        ) {
                            var y = (t.withCredentials || c(m)) && t.xsrfCookieName ? r.read(t.xsrfCookieName) : void 0;
                            y && (g[t.xsrfHeaderName] = y);
                        }
                        if (
                            ("setRequestHeader" in f &&
                                n.forEach(g, function (t, e) {
                                    void 0 === h && "content-type" === e.toLowerCase() ? delete g[e] : f.setRequestHeader(e, t);
                                }),
                            n.isUndefined(t.withCredentials) || (f.withCredentials = !!t.withCredentials),
                            t.responseType)
                        )
                            try {
                                f.responseType = t.responseType;
                            } catch (e) {
                                if ("json" !== t.responseType) throw e;
                            }
                        "function" == typeof t.onDownloadProgress && f.addEventListener("progress", t.onDownloadProgress),
                            "function" == typeof t.onUploadProgress && f.upload && f.upload.addEventListener("progress", t.onUploadProgress),
                            t.cancelToken &&
                                t.cancelToken.promise.then(function (t) {
                                    f && (f.abort(), s(t), (f = null));
                                }),
                            h || (h = null),
                            f.send(h);
                    });
                };
            },
            { "../core/buildFullPath": 79, "../core/createError": 80, "./../core/settle": 84, "./../helpers/buildURL": 88, "./../helpers/cookies": 90, "./../helpers/isURLSameOrigin": 92, "./../helpers/parseHeaders": 94, "./../utils": 96 },
        ],
        73: [
            function (t, e, s) {
                "use strict";
                var n = t("./utils"),
                    i = t("./helpers/bind"),
                    r = t("./core/Axios"),
                    o = t("./core/mergeConfig");
                function a(t) {
                    var e = new r(t),
                        s = i(r.prototype.request, e);
                    return n.extend(s, r.prototype, e), n.extend(s, e), s;
                }
                var u = a(t("./defaults"));
                (u.Axios = r),
                    (u.create = function (t) {
                        return a(o(u.defaults, t));
                    }),
                    (u.Cancel = t("./cancel/Cancel")),
                    (u.CancelToken = t("./cancel/CancelToken")),
                    (u.isCancel = t("./cancel/isCancel")),
                    (u.all = function (t) {
                        return Promise.all(t);
                    }),
                    (u.spread = t("./helpers/spread")),
                    (e.exports = u),
                    (e.exports.default = u);
            },
            { "./cancel/Cancel": 74, "./cancel/CancelToken": 75, "./cancel/isCancel": 76, "./core/Axios": 77, "./core/mergeConfig": 83, "./defaults": 86, "./helpers/bind": 87, "./helpers/spread": 95, "./utils": 96 },
        ],
        74: [
            function (t, e, s) {
                "use strict";
                function n(t) {
                    this.message = t;
                }
                (n.prototype.toString = function () {
                    return "Cancel" + (this.message ? ": " + this.message : "");
                }),
                    (n.prototype.__CANCEL__ = !0),
                    (e.exports = n);
            },
            {},
        ],
        75: [
            function (t, e, s) {
                "use strict";
                var n = t("./Cancel");
                function i(t) {
                    if ("function" != typeof t) throw new TypeError("executor must be a function.");
                    var e;
                    this.promise = new Promise(function (t) {
                        e = t;
                    });
                    var s = this;
                    t(function (t) {
                        s.reason || ((s.reason = new n(t)), e(s.reason));
                    });
                }
                (i.prototype.throwIfRequested = function () {
                    if (this.reason) throw this.reason;
                }),
                    (i.source = function () {
                        var t;
                        return {
                            token: new i(function (e) {
                                t = e;
                            }),
                            cancel: t,
                        };
                    }),
                    (e.exports = i);
            },
            { "./Cancel": 74 },
        ],
        76: [
            function (t, e, s) {
                "use strict";
                e.exports = function (t) {
                    return !(!t || !t.__CANCEL__);
                };
            },
            {},
        ],
        77: [
            function (t, e, s) {
                "use strict";
                var n = t("./../utils"),
                    i = t("../helpers/buildURL"),
                    r = t("./InterceptorManager"),
                    o = t("./dispatchRequest"),
                    a = t("./mergeConfig");
                function u(t) {
                    (this.defaults = t), (this.interceptors = { request: new r(), response: new r() });
                }
                (u.prototype.request = function (t) {
                    "string" == typeof t ? ((t = arguments[1] || {}).url = arguments[0]) : (t = t || {}),
                        (t = a(this.defaults, t)).method ? (t.method = t.method.toLowerCase()) : this.defaults.method ? (t.method = this.defaults.method.toLowerCase()) : (t.method = "get");
                    var e = [o, void 0],
                        s = Promise.resolve(t);
                    for (
                        this.interceptors.request.forEach(function (t) {
                            e.unshift(t.fulfilled, t.rejected);
                        }),
                            this.interceptors.response.forEach(function (t) {
                                e.push(t.fulfilled, t.rejected);
                            });
                        e.length;

                    )
                        s = s.then(e.shift(), e.shift());
                    return s;
                }),
                    (u.prototype.getUri = function (t) {
                        return (t = a(this.defaults, t)), i(t.url, t.params, t.paramsSerializer).replace(/^\?/, "");
                    }),
                    n.forEach(["delete", "get", "head", "options"], function (t) {
                        u.prototype[t] = function (e, s) {
                            return this.request(a(s || {}, { method: t, url: e, data: (s || {}).data }));
                        };
                    }),
                    n.forEach(["post", "put", "patch"], function (t) {
                        u.prototype[t] = function (e, s, n) {
                            return this.request(a(n || {}, { method: t, url: e, data: s }));
                        };
                    }),
                    (e.exports = u);
            },
            { "../helpers/buildURL": 88, "./../utils": 96, "./InterceptorManager": 78, "./dispatchRequest": 81, "./mergeConfig": 83 },
        ],
        78: [
            function (t, e, s) {
                "use strict";
                var n = t("./../utils");
                function i() {
                    this.handlers = [];
                }
                (i.prototype.use = function (t, e) {
                    return this.handlers.push({ fulfilled: t, rejected: e }), this.handlers.length - 1;
                }),
                    (i.prototype.eject = function (t) {
                        this.handlers[t] && (this.handlers[t] = null);
                    }),
                    (i.prototype.forEach = function (t) {
                        n.forEach(this.handlers, function (e) {
                            null !== e && t(e);
                        });
                    }),
                    (e.exports = i);
            },
            { "./../utils": 96 },
        ],
        79: [
            function (t, e, s) {
                "use strict";
                var n = t("../helpers/isAbsoluteURL"),
                    i = t("../helpers/combineURLs");
                e.exports = function (t, e) {
                    return t && !n(e) ? i(t, e) : e;
                };
            },
            { "../helpers/combineURLs": 89, "../helpers/isAbsoluteURL": 91 },
        ],
        80: [
            function (t, e, s) {
                "use strict";
                var n = t("./enhanceError");
                e.exports = function (t, e, s, i, r) {
                    var o = new Error(t);
                    return n(o, e, s, i, r);
                };
            },
            { "./enhanceError": 82 },
        ],
        81: [
            function (t, e, s) {
                "use strict";
                var n = t("./../utils"),
                    i = t("./transformData"),
                    r = t("../cancel/isCancel"),
                    o = t("../defaults");
                function a(t) {
                    t.cancelToken && t.cancelToken.throwIfRequested();
                }
                e.exports = function (t) {
                    return (
                        a(t),
                        (t.headers = t.headers || {}),
                        (t.data = i(t.data, t.headers, t.transformRequest)),
                        (t.headers = n.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers)),
                        n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (e) {
                            delete t.headers[e];
                        }),
                        (t.adapter || o.adapter)(t).then(
                            function (e) {
                                return a(t), (e.data = i(e.data, e.headers, t.transformResponse)), e;
                            },
                            function (e) {
                                return r(e) || (a(t), e && e.response && (e.response.data = i(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e);
                            }
                        )
                    );
                };
            },
            { "../cancel/isCancel": 76, "../defaults": 86, "./../utils": 96, "./transformData": 85 },
        ],
        82: [
            function (t, e, s) {
                "use strict";
                e.exports = function (t, e, s, n, i) {
                    return (
                        (t.config = e),
                        s && (t.code = s),
                        (t.request = n),
                        (t.response = i),
                        (t.isAxiosError = !0),
                        (t.toJSON = function () {
                            return {
                                message: this.message,
                                name: this.name,
                                description: this.description,
                                number: this.number,
                                fileName: this.fileName,
                                lineNumber: this.lineNumber,
                                columnNumber: this.columnNumber,
                                stack: this.stack,
                                config: this.config,
                                code: this.code,
                            };
                        }),
                        t
                    );
                };
            },
            {},
        ],
        83: [
            function (t, e, s) {
                "use strict";
                var n = t("../utils");
                e.exports = function (t, e) {
                    e = e || {};
                    var s = {},
                        i = ["url", "method", "data"],
                        r = ["headers", "auth", "proxy", "params"],
                        o = [
                            "baseURL",
                            "transformRequest",
                            "transformResponse",
                            "paramsSerializer",
                            "timeout",
                            "timeoutMessage",
                            "withCredentials",
                            "adapter",
                            "responseType",
                            "xsrfCookieName",
                            "xsrfHeaderName",
                            "onUploadProgress",
                            "onDownloadProgress",
                            "decompress",
                            "maxContentLength",
                            "maxBodyLength",
                            "maxRedirects",
                            "transport",
                            "httpAgent",
                            "httpsAgent",
                            "cancelToken",
                            "socketPath",
                            "responseEncoding",
                        ],
                        a = ["validateStatus"];
                    function u(t, e) {
                        return n.isPlainObject(t) && n.isPlainObject(e) ? n.merge(t, e) : n.isPlainObject(e) ? n.merge({}, e) : n.isArray(e) ? e.slice() : e;
                    }
                    function c(i) {
                        n.isUndefined(e[i]) ? n.isUndefined(t[i]) || (s[i] = u(void 0, t[i])) : (s[i] = u(t[i], e[i]));
                    }
                    n.forEach(i, function (t) {
                        n.isUndefined(e[t]) || (s[t] = u(void 0, e[t]));
                    }),
                        n.forEach(r, c),
                        n.forEach(o, function (i) {
                            n.isUndefined(e[i]) ? n.isUndefined(t[i]) || (s[i] = u(void 0, t[i])) : (s[i] = u(void 0, e[i]));
                        }),
                        n.forEach(a, function (n) {
                            n in e ? (s[n] = u(t[n], e[n])) : n in t && (s[n] = u(void 0, t[n]));
                        });
                    var l = i.concat(r).concat(o).concat(a),
                        h = Object.keys(t)
                            .concat(Object.keys(e))
                            .filter(function (t) {
                                return -1 === l.indexOf(t);
                            });
                    return n.forEach(h, c), s;
                };
            },
            { "../utils": 96 },
        ],
        84: [
            function (t, e, s) {
                "use strict";
                var n = t("./createError");
                e.exports = function (t, e, s) {
                    var i = s.config.validateStatus;
                    s.status && i && !i(s.status) ? e(n("Request failed with status code " + s.status, s.config, null, s.request, s)) : t(s);
                };
            },
            { "./createError": 80 },
        ],
        85: [
            function (t, e, s) {
                "use strict";
                var n = t("./../utils");
                e.exports = function (t, e, s) {
                    return (
                        n.forEach(s, function (s) {
                            t = s(t, e);
                        }),
                        t
                    );
                };
            },
            { "./../utils": 96 },
        ],
        86: [
            function (t, e, s) {
                (function (s) {
                    (function () {
                        "use strict";
                        var n = t("./utils"),
                            i = t("./helpers/normalizeHeaderName"),
                            r = { "Content-Type": "application/x-www-form-urlencoded" };
                        function o(t, e) {
                            !n.isUndefined(t) && n.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e);
                        }
                        var a,
                            u = {
                                adapter: ("undefined" != typeof XMLHttpRequest ? (a = t("./adapters/xhr")) : void 0 !== s && "[object process]" === Object.prototype.toString.call(s) && (a = t("./adapters/http")), a),
                                transformRequest: [
                                    function (t, e) {
                                        return (
                                            i(e, "Accept"),
                                            i(e, "Content-Type"),
                                            n.isFormData(t) || n.isArrayBuffer(t) || n.isBuffer(t) || n.isStream(t) || n.isFile(t) || n.isBlob(t)
                                                ? t
                                                : n.isArrayBufferView(t)
                                                ? t.buffer
                                                : n.isURLSearchParams(t)
                                                ? (o(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString())
                                                : n.isObject(t)
                                                ? (o(e, "application/json;charset=utf-8"), JSON.stringify(t))
                                                : t
                                        );
                                    },
                                ],
                                transformResponse: [
                                    function (t) {
                                        if ("string" == typeof t)
                                            try {
                                                t = JSON.parse(t);
                                            } catch (t) {}
                                        return t;
                                    },
                                ],
                                timeout: 0,
                                xsrfCookieName: "XSRF-TOKEN",
                                xsrfHeaderName: "X-XSRF-TOKEN",
                                maxContentLength: -1,
                                maxBodyLength: -1,
                                validateStatus: function (t) {
                                    return t >= 200 && t < 300;
                                },
                            };
                        (u.headers = { common: { Accept: "application/json, text/plain, */*" } }),
                            n.forEach(["delete", "get", "head"], function (t) {
                                u.headers[t] = {};
                            }),
                            n.forEach(["post", "put", "patch"], function (t) {
                                u.headers[t] = n.merge(r);
                            }),
                            (e.exports = u);
                    }.call(this));
                }.call(this, t("_process")));
            },
            { "./adapters/http": 72, "./adapters/xhr": 72, "./helpers/normalizeHeaderName": 93, "./utils": 96, _process: 97 },
        ],
        87: [
            function (t, e, s) {
                "use strict";
                e.exports = function (t, e) {
                    return function () {
                        for (var s = new Array(arguments.length), n = 0; n < s.length; n++) s[n] = arguments[n];
                        return t.apply(e, s);
                    };
                };
            },
            {},
        ],
        88: [
            function (t, e, s) {
                "use strict";
                var n = t("./../utils");
                function i(t) {
                    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
                }
                e.exports = function (t, e, s) {
                    if (!e) return t;
                    var r;
                    if (s) r = s(e);
                    else if (n.isURLSearchParams(e)) r = e.toString();
                    else {
                        var o = [];
                        n.forEach(e, function (t, e) {
                            null != t &&
                                (n.isArray(t) ? (e += "[]") : (t = [t]),
                                n.forEach(t, function (t) {
                                    n.isDate(t) ? (t = t.toISOString()) : n.isObject(t) && (t = JSON.stringify(t)), o.push(i(e) + "=" + i(t));
                                }));
                        }),
                            (r = o.join("&"));
                    }
                    if (r) {
                        var a = t.indexOf("#");
                        -1 !== a && (t = t.slice(0, a)), (t += (-1 === t.indexOf("?") ? "?" : "&") + r);
                    }
                    return t;
                };
            },
            { "./../utils": 96 },
        ],
        89: [
            function (t, e, s) {
                "use strict";
                e.exports = function (t, e) {
                    return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
                };
            },
            {},
        ],
        90: [
            function (t, e, s) {
                "use strict";
                var n = t("./../utils");
                e.exports = n.isStandardBrowserEnv()
                    ? {
                          write: function (t, e, s, i, r, o) {
                              var a = [];
                              a.push(t + "=" + encodeURIComponent(e)),
                                  n.isNumber(s) && a.push("expires=" + new Date(s).toGMTString()),
                                  n.isString(i) && a.push("path=" + i),
                                  n.isString(r) && a.push("domain=" + r),
                                  !0 === o && a.push("secure"),
                                  (document.cookie = a.join("; "));
                          },
                          read: function (t) {
                              var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                              return e ? decodeURIComponent(e[3]) : null;
                          },
                          remove: function (t) {
                              this.write(t, "", Date.now() - 864e5);
                          },
                      }
                    : {
                          write: function () {},
                          read: function () {
                              return null;
                          },
                          remove: function () {},
                      };
            },
            { "./../utils": 96 },
        ],
        91: [
            function (t, e, s) {
                "use strict";
                e.exports = function (t) {
                    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
                };
            },
            {},
        ],
        92: [
            function (t, e, s) {
                "use strict";
                var n = t("./../utils");
                e.exports = n.isStandardBrowserEnv()
                    ? (function () {
                          var t,
                              e = /(msie|trident)/i.test(navigator.userAgent),
                              s = document.createElement("a");
                          function i(t) {
                              var n = t;
                              return (
                                  e && (s.setAttribute("href", n), (n = s.href)),
                                  s.setAttribute("href", n),
                                  {
                                      href: s.href,
                                      protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
                                      host: s.host,
                                      search: s.search ? s.search.replace(/^\?/, "") : "",
                                      hash: s.hash ? s.hash.replace(/^#/, "") : "",
                                      hostname: s.hostname,
                                      port: s.port,
                                      pathname: "/" === s.pathname.charAt(0) ? s.pathname : "/" + s.pathname,
                                  }
                              );
                          }
                          return (
                              (t = i(window.location.href)),
                              function (e) {
                                  var s = n.isString(e) ? i(e) : e;
                                  return s.protocol === t.protocol && s.host === t.host;
                              }
                          );
                      })()
                    : function () {
                          return !0;
                      };
            },
            { "./../utils": 96 },
        ],
        93: [
            function (t, e, s) {
                "use strict";
                var n = t("../utils");
                e.exports = function (t, e) {
                    n.forEach(t, function (s, n) {
                        n !== e && n.toUpperCase() === e.toUpperCase() && ((t[e] = s), delete t[n]);
                    });
                };
            },
            { "../utils": 96 },
        ],
        94: [
            function (t, e, s) {
                "use strict";
                var n = t("./../utils"),
                    i = [
                        "age",
                        "authorization",
                        "content-length",
                        "content-type",
                        "etag",
                        "expires",
                        "from",
                        "host",
                        "if-modified-since",
                        "if-unmodified-since",
                        "last-modified",
                        "location",
                        "max-forwards",
                        "proxy-authorization",
                        "referer",
                        "retry-after",
                        "user-agent",
                    ];
                e.exports = function (t) {
                    var e,
                        s,
                        r,
                        o = {};
                    return t
                        ? (n.forEach(t.split("\n"), function (t) {
                              if (((r = t.indexOf(":")), (e = n.trim(t.substr(0, r)).toLowerCase()), (s = n.trim(t.substr(r + 1))), e)) {
                                  if (o[e] && i.indexOf(e) >= 0) return;
                                  o[e] = "set-cookie" === e ? (o[e] ? o[e] : []).concat([s]) : o[e] ? o[e] + ", " + s : s;
                              }
                          }),
                          o)
                        : o;
                };
            },
            { "./../utils": 96 },
        ],
        95: [
            function (t, e, s) {
                "use strict";
                e.exports = function (t) {
                    return function (e) {
                        return t.apply(null, e);
                    };
                };
            },
            {},
        ],
        96: [
            function (t, e, s) {
                "use strict";
                var n = t("./helpers/bind"),
                    i = Object.prototype.toString;
                function r(t) {
                    return "[object Array]" === i.call(t);
                }
                function o(t) {
                    return void 0 === t;
                }
                function a(t) {
                    return null !== t && "object" == typeof t;
                }
                function u(t) {
                    if ("[object Object]" !== i.call(t)) return !1;
                    var e = Object.getPrototypeOf(t);
                    return null === e || e === Object.prototype;
                }
                function c(t) {
                    return "[object Function]" === i.call(t);
                }
                function l(t, e) {
                    if (null != t)
                        if (("object" != typeof t && (t = [t]), r(t))) for (var s = 0, n = t.length; s < n; s++) e.call(null, t[s], s, t);
                        else for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t);
                }
                e.exports = {
                    isArray: r,
                    isArrayBuffer: function (t) {
                        return "[object ArrayBuffer]" === i.call(t);
                    },
                    isBuffer: function (t) {
                        return null !== t && !o(t) && null !== t.constructor && !o(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
                    },
                    isFormData: function (t) {
                        return "undefined" != typeof FormData && t instanceof FormData;
                    },
                    isArrayBufferView: function (t) {
                        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer;
                    },
                    isString: function (t) {
                        return "string" == typeof t;
                    },
                    isNumber: function (t) {
                        return "number" == typeof t;
                    },
                    isObject: a,
                    isPlainObject: u,
                    isUndefined: o,
                    isDate: function (t) {
                        return "[object Date]" === i.call(t);
                    },
                    isFile: function (t) {
                        return "[object File]" === i.call(t);
                    },
                    isBlob: function (t) {
                        return "[object Blob]" === i.call(t);
                    },
                    isFunction: c,
                    isStream: function (t) {
                        return a(t) && c(t.pipe);
                    },
                    isURLSearchParams: function (t) {
                        return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams;
                    },
                    isStandardBrowserEnv: function () {
                        return (
                            ("undefined" == typeof navigator || ("ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product)) && "undefined" != typeof window && "undefined" != typeof document
                        );
                    },
                    forEach: l,
                    merge: function t() {
                        var e = {};
                        function s(s, n) {
                            u(e[n]) && u(s) ? (e[n] = t(e[n], s)) : u(s) ? (e[n] = t({}, s)) : r(s) ? (e[n] = s.slice()) : (e[n] = s);
                        }
                        for (var n = 0, i = arguments.length; n < i; n++) l(arguments[n], s);
                        return e;
                    },
                    extend: function (t, e, s) {
                        return (
                            l(e, function (e, i) {
                                t[i] = s && "function" == typeof e ? n(e, s) : e;
                            }),
                            t
                        );
                    },
                    trim: function (t) {
                        return t.replace(/^\s*/, "").replace(/\s*$/, "");
                    },
                    stripBOM: function (t) {
                        return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t;
                    },
                };
            },
            { "./helpers/bind": 87 },
        ],
        97: [
            function (t, e, s) {
                var n,
                    i,
                    r = (e.exports = {});
                function o() {
                    throw new Error("setTimeout has not been defined");
                }
                function a() {
                    throw new Error("clearTimeout has not been defined");
                }
                function u(t) {
                    if (n === setTimeout) return setTimeout(t, 0);
                    if ((n === o || !n) && setTimeout) return (n = setTimeout), setTimeout(t, 0);
                    try {
                        return n(t, 0);
                    } catch (e) {
                        try {
                            return n.call(null, t, 0);
                        } catch (e) {
                            return n.call(this, t, 0);
                        }
                    }
                }
                !(function () {
                    try {
                        n = "function" == typeof setTimeout ? setTimeout : o;
                    } catch (t) {
                        n = o;
                    }
                    try {
                        i = "function" == typeof clearTimeout ? clearTimeout : a;
                    } catch (t) {
                        i = a;
                    }
                })();
                var c,
                    l = [],
                    h = !1,
                    g = -1;
                function f() {
                    h && c && ((h = !1), c.length ? (l = c.concat(l)) : (g = -1), l.length && p());
                }
                function p() {
                    if (!h) {
                        var t = u(f);
                        h = !0;
                        for (var e = l.length; e; ) {
                            for (c = l, l = []; ++g < e; ) c && c[g].run();
                            (g = -1), (e = l.length);
                        }
                        (c = null),
                            (h = !1),
                            (function (t) {
                                if (i === clearTimeout) return clearTimeout(t);
                                if ((i === a || !i) && clearTimeout) return (i = clearTimeout), clearTimeout(t);
                                try {
                                    i(t);
                                } catch (e) {
                                    try {
                                        return i.call(null, t);
                                    } catch (e) {
                                        return i.call(this, t);
                                    }
                                }
                            })(t);
                    }
                }
                function d(t, e) {
                    (this.fun = t), (this.array = e);
                }
                function m() {}
                (r.nextTick = function (t) {
                    var e = new Array(arguments.length - 1);
                    if (arguments.length > 1) for (var s = 1; s < arguments.length; s++) e[s - 1] = arguments[s];
                    l.push(new d(t, e)), 1 !== l.length || h || u(p);
                }),
                    (d.prototype.run = function () {
                        this.fun.apply(null, this.array);
                    }),
                    (r.title = "browser"),
                    (r.browser = !0),
                    (r.env = {}),
                    (r.argv = []),
                    (r.version = ""),
                    (r.versions = {}),
                    (r.on = m),
                    (r.addListener = m),
                    (r.once = m),
                    (r.off = m),
                    (r.removeListener = m),
                    (r.removeAllListeners = m),
                    (r.emit = m),
                    (r.prependListener = m),
                    (r.prependOnceListener = m),
                    (r.listeners = function (t) {
                        return [];
                    }),
                    (r.binding = function (t) {
                        throw new Error("process.binding is not supported");
                    }),
                    (r.cwd = function () {
                        return "/";
                    }),
                    (r.chdir = function (t) {
                        throw new Error("process.chdir is not supported");
                    }),
                    (r.umask = function () {
                        return 0;
                    });
            },
            {},
        ],
    },
    {},
    [1]
);
