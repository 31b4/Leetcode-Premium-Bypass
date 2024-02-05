async function waitForStableHTML() {
    return new Promise(resolve => {
        let isDOMStable = false;
        let iterationCount = 0;
        const maxIterations = 30;

        // Callback function to be executed when mutations are observed
        const mutationCallback = () => {
            // Set isDOMStable to false, indicating that there has been a change
            isDOMStable = false;
        };

        // Create a new MutationObserver with the callback function
        const observer = new MutationObserver(mutationCallback);

        // Start observing mutations in the document
        observer.observe(document, { childList: true, subtree: true });

        // Polling function to check for stability
        const pollForStability = () => {
            iterationCount++;

            if (isDOMStable || iterationCount >= maxIterations) {
                // If stable or reached max iterations, disconnect the observer and resolve the promise
                observer.disconnect();
                resolve();
            } else {
                // If not stable, continue polling after a short delay
                setTimeout(pollForStability, 100); // Adjust the delay as needed
            }
        };

        // Start the polling mechanism
        pollForStability();
    });
}

async function waitAndContinue() {
    console.log("Waiting for stable HTML");
    await waitForStableHTML();
    console.log("End");
}

(async () => {
    console.log("Start");
    await waitAndContinue()
    var e = {
            856: function(e) {     
                e.exports = function() {
                    "use strict";
                    const {
                        entries: e,
                        setPrototypeOf: t,
                        isFrozen: n,
                        getPrototypeOf: i,
                        getOwnPropertyDescriptor: a
                    } = Object;
                    let {
                        freeze: r,
                        seal: o,
                        create: l
                    } = Object, {
                        apply: s,
                        construct: c
                    } = "undefined" != typeof Reflect && Reflect;
                    s || (s = function(e, t, n) {
                        return e.apply(t, n)
                    }), r || (r = function(e) {
                        return e
                    }), o || (o = function(e) {
                        return e
                    }), c || (c = function(e, t) {
                        return new e(...t)
                    });
                    const d = w(Array.prototype.forEach),
                        h = w(Array.prototype.pop),
                        m = w(Array.prototype.push),
                        u = w(String.prototype.toLowerCase),
                        p = w(String.prototype.toString),
                        g = w(String.prototype.match),
                        f = w(String.prototype.replace),
                        b = w(String.prototype.indexOf),
                        y = w(String.prototype.trim),
                        E = w(RegExp.prototype.test),
                        T = (C = TypeError, function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return c(C, t)
                        });
                    var C;

                    function w(e) {
                        return function(t) {
                            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                            return s(e, t, i)
                        }
                    }

                    function v(e, i, a) {
                        var r;
                        a = null !== (r = a) && void 0 !== r ? r : u, t && t(e, null);
                        let o = i.length;
                        for (; o--;) {
                            let t = i[o];
                            if ("string" == typeof t) {
                                const e = a(t);
                                e !== t && (n(i) || (i[o] = e), t = e)
                            }
                            e[t] = !0
                        }
                        return e
                    }

                    function D(t) {
                        const n = l(null);
                        for (const [i, a] of e(t)) n[i] = a;
                        return n
                    }

                    function M(e, t) {
                        for (; null !== e;) {
                            const n = a(e, t);
                            if (n) {
                                if (n.get) return w(n.get);
                                if ("function" == typeof n.value) return w(n.value)
                            }
                            e = i(e)
                        }
                        return function(e) {
                            return console.warn("fallback value for", e), null
                        }
                    }
                    const A = r(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                        N = r(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                        k = r(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                        L = r(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                        S = r(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
                        _ = r(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                        R = r(["#text"]),
                        P = r(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
                        x = r(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                        O = r(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                        I = r(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                        B = o(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
                        F = o(/<%[\w\W]*|[\w\W]*%>/gm),
                        U = o(/\${[\w\W]*}/gm),
                        H = o(/^data-[\-\w.\u00B7-\uFFFF]/),
                        j = o(/^aria-[\-\w]+$/),
                        z = o(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                        q = o(/^(?:\w+script|data):/i),
                        G = o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                        $ = o(/^html$/i);
                    var W = Object.freeze({

                        __proto__: null,
                        MUSTACHE_EXPRESSION: B,
                        ERB_EXPRESSION: F,
                        TEMPLATE_LITERAL_EXPRESSION: U,
                        DATA_ATTRIBUTE: H,
                        ARIA_ATTRIBUTE: j,
                        IS_ALLOWED_URI: z,
                        IS_SCRIPT_OR_DATA: q,
                        ATTRIBUTE_WHITESPACE: G,
                        DOCTYPE_NAME: $
                       
                    });
                    const Y = () => "undefined" == typeof window ? null : window;
                    return function t() {
                        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y();
                        const i = e => t(e);
                        if (i.version = "3.0.3", i.removed = [], !n || !n.document || 9 !== n.document.nodeType) return i.isSupported = !1, i;
                        const a = n.document,
                            o = a.currentScript;
                        let {
                            document: l
                        } = n;
                        const {
                            DocumentFragment: s,
                            HTMLTemplateElement: c,
                            Node: C,
                            Element: w,
                            NodeFilter: B,
                            NamedNodeMap: F = n.NamedNodeMap || n.MozNamedAttrMap,
                            HTMLFormElement: U,
                            DOMParser: H,
                            trustedTypes: j
                        } = n, q = w.prototype, G = M(q, "cloneNode"), K = M(q, "nextSibling"), V = M(q, "childNodes"), X = M(q, "parentNode");
                        if ("function" == typeof c) {
                            const e = l.createElement("template");
                            e.content && e.content.ownerDocument && (l = e.content.ownerDocument)
                        }
                        let J, Q = "";
                        const {
                            implementation: Z,
                            createNodeIterator: ee,
                            createDocumentFragment: te,
                            getElementsByTagName: ne
                        } = l, {
                            importNode: ie
                        } = a;
                        let ae = {};
                        i.isSupported = "function" == typeof e && "function" == typeof X && Z && void 0 !== Z.createHTMLDocument;
                        const {

                            
                            MUSTACHE_EXPRESSION: re,
                            ERB_EXPRESSION: oe,
                            TEMPLATE_LITERAL_EXPRESSION: le,
                            DATA_ATTRIBUTE: se,
                            ARIA_ATTRIBUTE: ce,
                            IS_SCRIPT_OR_DATA: de,
                            ATTRIBUTE_WHITESPACE: he
                        } = W;
                        let {
                            IS_ALLOWED_URI: me
                        } = W, ue = null;
                        const pe = v({}, [...A, ...N, ...k, ...S, ...R]);
                        let ge = null;
                        const fe = v({}, [...P, ...x, ...O, ...I]);
                        let be = Object.seal(Object.create(null, {
                                tagNameCheck: {
                                    writable: !0,
                                    configurable: !1,
                                    enumerable: !0,
                                    value: null
                                },
                                attributeNameCheck: {
                                    writable: !0,
                                    configurable: !1,
                                    enumerable: !0,
                                    value: null
                                },
                                allowCustomizedBuiltInElements: {
                                    writable: !0,
                                    configurable: !1,
                                    enumerable: !0,
                                    value: !1
                                }
                            })),
                            ye = null,
                            Ee = null,
                            Te = !0,
                            Ce = !0,
                            we = !1,
                            ve = !0,
                            De = !1,
                            Me = !1,
                            Ae = !1,
                            Ne = !1,
                            ke = !1,
                            Le = !1,
                            Se = !1,
                            _e = !0,
                            Re = !1,
                            Pe = !0,
                            xe = !1,
                            Oe = {},
                            Ie = null;
                        const Be = v({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
                        let Fe = null;
                        const Ue = v({}, ["audio", "video", "img", "source", "image", "track"]);
                        let He = null;
                        const je = v({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                            ze = "http://www.w3.org/1998/Math/MathML",
                            qe = "http://www.w3.org/2000/svg",
                            Ge = "http://www.w3.org/1999/xhtml";
                        let $e = Ge,
                            We = !1,
                            Ye = null;
                        const Ke = v({}, [ze, qe, Ge], p);
                        let Ve;
                        const Xe = ["application/xhtml+xml", "text/html"];
                        let Je, Qe = null;
                        const Ze = l.createElement("form"),
                            et = function(e) {
                                return e instanceof RegExp || e instanceof Function
                            },
                            tt = function(e) {
                                if (!Qe || Qe !== e) {
                                    if (e && "object" == typeof e || (e = {}), e = D(e), Ve = Ve = -1 === Xe.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE, Je = "application/xhtml+xml" === Ve ? p : u, ue = "ALLOWED_TAGS" in e ? v({}, e.ALLOWED_TAGS, Je) : pe, ge = "ALLOWED_ATTR" in e ? v({}, e.ALLOWED_ATTR, Je) : fe, Ye = "ALLOWED_NAMESPACES" in e ? v({}, e.ALLOWED_NAMESPACES, p) : Ke, He = "ADD_URI_SAFE_ATTR" in e ? v(D(je), e.ADD_URI_SAFE_ATTR, Je) : je, Fe = "ADD_DATA_URI_TAGS" in e ? v(D(Ue), e.ADD_DATA_URI_TAGS, Je) : Ue, Ie = "FORBID_CONTENTS" in e ? v({}, e.FORBID_CONTENTS, Je) : Be, ye = "FORBID_TAGS" in e ? v({}, e.FORBID_TAGS, Je) : {}, Ee = "FORBID_ATTR" in e ? v({}, e.FORBID_ATTR, Je) : {}, Oe = "USE_PROFILES" in e && e.USE_PROFILES, Te = !1 !== e.ALLOW_ARIA_ATTR, Ce = !1 !== e.ALLOW_DATA_ATTR, we = e.ALLOW_UNKNOWN_PROTOCOLS || !1, ve = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, De = e.SAFE_FOR_TEMPLATES || !1, Me = e.WHOLE_DOCUMENT || !1, ke = e.RETURN_DOM || !1, Le = e.RETURN_DOM_FRAGMENT || !1, Se = e.RETURN_TRUSTED_TYPE || !1, Ne = e.FORCE_BODY || !1, _e = !1 !== e.SANITIZE_DOM, Re = e.SANITIZE_NAMED_PROPS || !1, Pe = !1 !== e.KEEP_CONTENT, xe = e.IN_PLACE || !1, me = e.ALLOWED_URI_REGEXP || z, $e = e.NAMESPACE || Ge, be = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && et(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (be.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && et(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (be.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (be.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), De && (Ce = !1), Le && (ke = !0), Oe && (ue = v({}, [...R]), ge = [], !0 === Oe.html && (v(ue, A), v(ge, P)), !0 === Oe.svg && (v(ue, N), v(ge, x), v(ge, I)), !0 === Oe.svgFilters && (v(ue, k), v(ge, x), v(ge, I)), !0 === Oe.mathMl && (v(ue, S), v(ge, O), v(ge, I))), e.ADD_TAGS && (ue === pe && (ue = D(ue)), v(ue, e.ADD_TAGS, Je)), e.ADD_ATTR && (ge === fe && (ge = D(ge)), v(ge, e.ADD_ATTR, Je)), e.ADD_URI_SAFE_ATTR && v(He, e.ADD_URI_SAFE_ATTR, Je), e.FORBID_CONTENTS && (Ie === Be && (Ie = D(Ie)), v(Ie, e.FORBID_CONTENTS, Je)), Pe && (ue["#text"] = !0), Me && v(ue, ["html", "head", "body"]), ue.table && (v(ue, ["tbody"]), delete ye.tbody), e.TRUSTED_TYPES_POLICY) {
                                        if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML) throw T('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                                        if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL) throw T('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                                        J = e.TRUSTED_TYPES_POLICY, Q = J.createHTML("")
                                    } else void 0 === J && (J = function(e, t) {
                                        if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
                                        let n = null;
                                        const i = "data-tt-policy-suffix";
                                        t && t.hasAttribute(i) && (n = t.getAttribute(i));
                                        const a = "dompurify" + (n ? "#" + n : "");
                                        try {
                                            return e.createPolicy(a, {
                                                createHTML: e => e,
                                                createScriptURL: e => e
                                            })
                                        } catch (e) {
                                            return console.warn("TrustedTypes policy " + a + " could not be created."), null
                                        }
                                    }(j, o)), null !== J && "string" == typeof Q && (Q = J.createHTML(""));
                                    r && r(e), Qe = e
                                }
                            },
                            nt = v({}, ["mi", "mo", "mn", "ms", "mtext"]),
                            it = v({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                            at = v({}, ["title", "style", "font", "a", "script"]),
                            rt = v({}, N);
                        v(rt, k), v(rt, L);
                        const ot = v({}, S);
                        v(ot, _);
                        const lt = function(e) {
                                m(i.removed, {
                                    element: e
                                });
                                try {
                                    e.parentNode.removeChild(e)
                                } catch (t) {
                                    e.remove()
                                }
                            },
                            st = function(e, t) {
                                try {
                                    m(i.removed, {
                                        attribute: t.getAttributeNode(e),
                                        from: t
                                    })
                                } catch (e) {
                                    m(i.removed, {
                                        attribute: null,
                                        from: t
                                    })
                                }
                                if (t.removeAttribute(e), "is" === e && !ge[e])
                                    if (ke || Le) try {
                                        lt(t)
                                    } catch (e) {} else try {
                                        t.setAttribute(e, "")
                                    } catch (e) {}
                            },
                            ct = function(e) {
                                let t, n;
                                if (Ne) e = "<remove></remove>" + e;
                                else {
                                    const t = g(e, /^[\r\n\t ]+/);
                                    n = t && t[0]
                                }
                                "application/xhtml+xml" === Ve && $e === Ge && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                                const i = J ? J.createHTML(e) : e;
                                if ($e === Ge) try {
                                    t = (new H).parseFromString(i, Ve)
                                } catch (e) {}
                                if (!t || !t.documentElement) {
                                    t = Z.createDocument($e, "template", null);
                                    try {
                                        t.documentElement.innerHTML = We ? Q : i
                                    } catch (e) {}
                                }
                                const a = t.body || t.documentElement;
                                return e && n && a.insertBefore(l.createTextNode(n), a.childNodes[0] || null), $e === Ge ? ne.call(t, Me ? "html" : "body")[0] : Me ? t.documentElement : a
                            },
                            dt = function(e) {
                                return ee.call(e.ownerDocument || e, e, B.SHOW_ELEMENT | B.SHOW_COMMENT | B.SHOW_TEXT, null, !1)
                            },
                            ht = function(e) {
                                return "object" == typeof C ? e instanceof C : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
                            },
                            mt = function(e, t, n) {
                                ae[e] && d(ae[e], (e => {
                                    e.call(i, t, n, Qe)
                                }))
                            },
                            ut = function(e) {
                                let t;
                                if (mt("beforeSanitizeElements", e, null), (n = e) instanceof U && ("string" != typeof n.nodeName || "string" != typeof n.textContent || "function" != typeof n.removeChild || !(n.attributes instanceof F) || "function" != typeof n.removeAttribute || "function" != typeof n.setAttribute || "string" != typeof n.namespaceURI || "function" != typeof n.insertBefore || "function" != typeof n.hasChildNodes)) return lt(e), !0;
                                var n;
                                const a = Je(e.nodeName);
                                if (mt("uponSanitizeElement", e, {
                                        tagName: a,
                                        allowedTags: ue
                                    }), e.hasChildNodes() && !ht(e.firstElementChild) && (!ht(e.content) || !ht(e.content.firstElementChild)) && E(/<[/\w]/g, e.innerHTML) && E(/<[/\w]/g, e.textContent)) return lt(e), !0;
                                if (!ue[a] || ye[a]) {
                                    if (!ye[a] && gt(a)) {
                                        if (be.tagNameCheck instanceof RegExp && E(be.tagNameCheck, a)) return !1;
                                        if (be.tagNameCheck instanceof Function && be.tagNameCheck(a)) return !1
                                    }
                                    if (Pe && !Ie[a]) {
                                        const t = X(e) || e.parentNode,
                                            n = V(e) || e.childNodes;
                                        if (n && t)
                                            for (let i = n.length - 1; i >= 0; --i) t.insertBefore(G(n[i], !0), K(e))
                                    }
                                    return lt(e), !0
                                }
                                return e instanceof w && ! function(e) {
                                    let t = X(e);
                                    t && t.tagName || (t = {
                                        namespaceURI: $e,
                                        tagName: "template"
                                    });
                                    const n = u(e.tagName),
                                        i = u(t.tagName);
                                    return !!Ye[e.namespaceURI] && (e.namespaceURI === qe ? t.namespaceURI === Ge ? "svg" === n : t.namespaceURI === ze ? "svg" === n && ("annotation-xml" === i || nt[i]) : Boolean(rt[n]) : e.namespaceURI === ze ? t.namespaceURI === Ge ? "math" === n : t.namespaceURI === qe ? "math" === n && it[i] : Boolean(ot[n]) : e.namespaceURI === Ge ? !(t.namespaceURI === qe && !it[i]) && !(t.namespaceURI === ze && !nt[i]) && !ot[n] && (at[n] || !rt[n]) : !("application/xhtml+xml" !== Ve || !Ye[e.namespaceURI]))
                                }(e) ? (lt(e), !0) : "noscript" !== a && "noembed" !== a || !E(/<\/no(script|embed)/i, e.innerHTML) ? (De && 3 === e.nodeType && (t = e.textContent, t = f(t, re, " "), t = f(t, oe, " "), t = f(t, le, " "), e.textContent !== t && (m(i.removed, {
                                    element: e.cloneNode()
                                }), e.textContent = t)), mt("afterSanitizeElements", e, null), !1) : (lt(e), !0)
                            },
                            pt = function(e, t, n) {
                                if (_e && ("id" === t || "name" === t) && (n in l || n in Ze)) return !1;
                                if (Ce && !Ee[t] && E(se, t));
                                else if (Te && E(ce, t));
                                else if (!ge[t] || Ee[t]) {
                                    if (!(gt(e) && (be.tagNameCheck instanceof RegExp && E(be.tagNameCheck, e) || be.tagNameCheck instanceof Function && be.tagNameCheck(e)) && (be.attributeNameCheck instanceof RegExp && E(be.attributeNameCheck, t) || be.attributeNameCheck instanceof Function && be.attributeNameCheck(t)) || "is" === t && be.allowCustomizedBuiltInElements && (be.tagNameCheck instanceof RegExp && E(be.tagNameCheck, n) || be.tagNameCheck instanceof Function && be.tagNameCheck(n)))) return !1
                                } else if (He[t]);
                                else if (E(me, f(n, he, "")));
                                else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== b(n, "data:") || !Fe[e])
                                    if (we && !E(de, f(n, he, "")));
                                    else if (n) return !1;
                                return !0
                            },
                            gt = function(e) {
                                return e.indexOf("-") > 0
                            },
                            ft = function(e) {
                                let t, n, a, r;
                                mt("beforeSanitizeAttributes", e, null);
                                const {
                                    attributes: o
                                } = e;
                                if (!o) return;
                                const l = {
                                    attrName: "",
                                    attrValue: "",
                                    keepAttr: !0,
                                    allowedAttributes: ge
                                };
                                for (r = o.length; r--;) {
                                    t = o[r];
                                    const {
                                        name: s,
                                        namespaceURI: c
                                    } = t;
                                    if (n = "value" === s ? t.value : y(t.value), a = Je(s), l.attrName = a, l.attrValue = n, l.keepAttr = !0, l.forceKeepAttr = void 0, mt("uponSanitizeAttribute", e, l), n = l.attrValue, l.forceKeepAttr) continue;
                                    if (st(s, e), !l.keepAttr) continue;
                                    if (!ve && E(/\/>/i, n)) {
                                        st(s, e);
                                        continue
                                    }
                                    De && (n = f(n, re, " "), n = f(n, oe, " "), n = f(n, le, " "));
                                    const d = Je(e.nodeName);
                                    if (pt(d, a, n)) {
                                        if (!Re || "id" !== a && "name" !== a || (st(s, e), n = "user-content-" + n), J && "object" == typeof j && "function" == typeof j.getAttributeType)
                                            if (c);
                                            else switch (j.getAttributeType(d, a)) {
                                                case "TrustedHTML":
                                                    n = J.createHTML(n);
                                                    break;
                                                case "TrustedScriptURL":
                                                    n = J.createScriptURL(n)
                                            }
                                        try {
                                            c ? e.setAttributeNS(c, s, n) : e.setAttribute(s, n), h(i.removed)
                                        } catch (e) {}
                                    }
                                }
                                mt("afterSanitizeAttributes", e, null)
                            },
                            bt = function e(t) {
                                let n;
                                const i = dt(t);
                                for (mt("beforeSanitizeShadowDOM", t, null); n = i.nextNode();) mt("uponSanitizeShadowNode", n, null), ut(n) || (n.content instanceof s && e(n.content), ft(n));
                                mt("afterSanitizeShadowDOM", t, null)
                            };
                        return i.sanitize = function(e) {
                            let t, n, r, o, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (We = !e, We && (e = "\x3c!--\x3e"), "string" != typeof e && !ht(e)) {
                                if ("function" != typeof e.toString) throw T("toString is not a function");
                                if ("string" != typeof(e = e.toString())) throw T("dirty is not a string, aborting")
                            }
                            if (!i.isSupported) return e;
                            if (Ae || tt(l), i.removed = [], "string" == typeof e && (xe = !1), xe) {
                                if (e.nodeName) {
                                    const t = Je(e.nodeName);
                                    if (!ue[t] || ye[t]) throw T("root node is forbidden and cannot be sanitized in-place")
                                }
                            } else if (e instanceof C) t = ct("\x3c!----\x3e"), n = t.ownerDocument.importNode(e, !0), 1 === n.nodeType && "BODY" === n.nodeName || "HTML" === n.nodeName ? t = n : t.appendChild(n);
                            else {
                                if (!ke && !De && !Me && -1 === e.indexOf("<")) return J && Se ? J.createHTML(e) : e;
                                if (t = ct(e), !t) return ke ? null : Se ? Q : ""
                            }
                            t && Ne && lt(t.firstChild);
                            const c = dt(xe ? e : t);
                            for (; r = c.nextNode();) ut(r) || (r.content instanceof s && bt(r.content), ft(r));
                            if (xe) return e;
                            if (ke) {
                                if (Le)
                                    for (o = te.call(t.ownerDocument); t.firstChild;) o.appendChild(t.firstChild);
                                else o = t;
                                return (ge.shadowroot || ge.shadowrootmod) && (o = ie.call(a, o, !0)), o
                            }
                            let d = Me ? t.outerHTML : t.innerHTML;
                            return Me && ue["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && E($, t.ownerDocument.doctype.name) && (d = "<!DOCTYPE " + t.ownerDocument.doctype.name + ">\n" + d), De && (d = f(d, re, " "), d = f(d, oe, " "), d = f(d, le, " ")), J && Se ? J.createHTML(d) : d
                        }, i.setConfig = function(e) {
                            tt(e), Ae = !0
                        }, i.clearConfig = function() {
                            Qe = null, Ae = !1
                        }, i.isValidAttribute = function(e, t, n) {
                            Qe || tt({});
                            const i = Je(e),
                                a = Je(t);
                            return pt(i, a, n)
                        }, i.addHook = function(e, t) {
                            "function" == typeof t && (ae[e] = ae[e] || [], m(ae[e], t))
                        }, i.removeHook = function(e) {
                            if (ae[e]) return h(ae[e])
                        }, i.removeHooks = function(e) {
                            ae[e] && (ae[e] = [])
                        }, i.removeAllHooks = function() {
                            ae = {}
                        }, i
                    }()
                }()
            }
        },
        t = {};

    function n(i) {
        var a = t[i];
        if (void 0 !== a) return a.exports;
        var r = t[i] = {
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.exports
    }(() => {
        "use strict";
        class e {
            constructor(e, t, n, i, a, r) {
                this.frequency = e, this.id = t, this.difficulty = n, this.problemUrl = i, this.problemName = a, this.acceptance = r
            }
        }
        class t extends e {
            constructor(e, t, n, i, a, r, o, l) {
                super(e, t, n, i, a, r), this.companyName = o, this.duration = l
            }
        }
        class i {
            constructor(e, t, n) {
                this.url = n, this.duration = e, this.company = t
            }
        }
        class a {
            constructor() {
                this.data = {}
            }
            getKeys() {
                return Object.keys(this.data)
            }
            getList(e) {
                if (null == e) throw new Error("Key cannot be undefined");
                return e in this.data ? this.data[e] : []
            }
        }
        class r extends a {
            push(e, t) {
                if (null == e || null == t) throw new Error("Key/Value error");
                if (e in this.data) return void this.data[e].push(t);
                let n = [];
                n.push(t), this.data[e] = n
            }
        }
        class o extends a {
            push(e, t) {
                if (e in this.data) return void this.data[e].push(t);
                let n = new l;
                n.push(t), this.data[e] = n
            }
        }
        class l extends Array {
            sort(e, t = !1) {
                (new e).sort(this, t)
            }
        }
        class s {
            static getContainerBackgroundColor() { // ui darkmode
                const htmlElement = document.querySelector('html');
                console.log(htmlElement.classList.contains('dark'))
                switch (htmlElement.classList.contains('dark')) {
                    case !0:
                        return "#151515";
                    case !1:
                        return "#f3f3f3"
                }
            }
            static getComplementaryColor() {
                const htmlElement = document.querySelector('html');
                switch (htmlElement.classList.contains('dark')) {
                    case !0:
                        return "#282828";
                    case !1:
                        return "#dcdcdc"
                }
            }
            static COLOR_ACCENT = "#62C555";
            static BACKGROUND_CONTAINER_COLOR = "#101010";
            static SUB_BACKGROUND_CONTAINER_COLOR = "#282828";
            static TEXT_COLOR = "#dcdcdc";
            static TEXT_COLOR_SELECTED = "#7d7d7d"
        }
        class c {
            constructor() {
                this.elementModifier = []
            }
            injectFunctionToTargetElement(e) {
                this.elementModifier.push(e)
            }
            modifyElement() {
                this.modifyActiveElement(), this.addObserverToCompaniesSection()
            }
            isSwiperLoading() {
                return null == document.getElementsByClassName("swiper-autoheight")[1]
            }
            modifyActiveElement() {
                if (this.isSwiperLoading()) return void window.setTimeout((() => {
                    this.modifyActiveElement.bind(this)()
                }), 100);
                let e = document.getElementsByClassName("swiper-autoheight")[1].getElementsByClassName("swiper-slide-active"),
                    t = e[e.length - 1].getElementsByTagName("a");
                for (let e = 0; e <= t.length - 1; e++) {
                    let n = t[e].href.split("/"),
                        i = n[n.length - 1],
                        a = t[e];
                    null == a.getAttribute("company-name") && a.setAttribute("company-name", i), a.href = "javascript:void(0)";
                    for (let e = 0; e <= this.elementModifier.length - 1; e++) this.elementModifier[e](a);
                    this.onModifyElementSuccess(a)
                }
            }
            onModifyElementSuccess(e) {
                let t = e.getElementsByTagName("span");
                t[t.length - 1].style.backgroundColor = s.COLOR_ACCENT
            }
            addObserverToCompaniesSection() {
                if (this.isSwiperLoading()) return void window.setTimeout((() => {
                    this.addObserverToCompaniesSection.bind(this)()
                }), 100);
                let e = document.getElementsByClassName("swiper-autoheight")[1].parentNode.parentNode;
                const t = new MutationObserver((() => {
                    this.modifyActiveElement()
                }));
                e ? t.observe(e, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    attributeFilter: ["class"]
                }) : window.setTimeout((() => {
                    this.addObserverToCompaniesSection()
                }), 100)
            }
        }
        class d {
            getValue(e, t) {
                return e[t]
            }
            doSwap(e, t) {
                return e > t
            }
            swap(e, t, n) {
                let i = e[t];
                e[t] = e[n], e[n] = i
            }
            partition(e, t, n, i) {
                let a = this.getValue(e, n),
                    r = t - 1;
                for (let o = t; o <= n - 1; o++) {
                    let t = this.getValue(e, o),
                        n = this.doSwap(t, a);
                    i && (n = !n), n && (r++, this.swap(e, r, o))
                }
                return this.swap(e, r + 1, n), r + 1
            }
            sort(e, t = !1) {
                this.quickSort(e, 0, e.length - 1, t)
            }
            quickSort(e, t, n, i) {
                if (null == n && null == t && (n = e.length - 1, t = 0), t < n) {
                    let a = this.partition(e, t, n, i);
                    this.quickSort(e, t, a - 1, i), this.quickSort(e, a + 1, n, i)
                }
            }
        }
        class h extends d {
            getValue(e, t) {
                return e[t].acceptance
            }
        }
        class m extends d {
            getValue(e, t) {
                return e[t].difficulty
            }
            doSwap(e, t) {
                let n = ["Easy", "Medium", "Hard"];
                return n.indexOf(e) < n.indexOf(t)
            }
        }
        class u extends d {
            getValue(e, t) {
                return parseInt(e[t].id)
            }
        }
        class p extends d {
            getValue(e, t) {
                return e[t].problemName
            }
            doSwap(e, t) {
                let n = "abcdefghijklmnopqrstuvwxyz0123456789",
                    i = e[0].toLowerCase(),
                    a = t[0].toLowerCase();
                return n.indexOf(i) < n.indexOf(a)
            }
        }
        class g extends d {
            getValue(e, t) {
                return e[t].frequency
            }
        }
        class f {
            static generateTextElement(e) {
                let t = document.createElement("div"),
                    n = document.createElement("h3");
                return n.textContent = e, n.style = "\n        text-align: center;\n        ", t.appendChild(n), t
            }
            static generateProblemIdElement(e) {
                let t = f.generateTextElement(e);
                return t.style = "\n       width: 5%\n       ", t
            }
            static generateProblemFrequencyElement(e) {
                let t = document.createElement("div");
                t.setAttribute("title", String(Math.round(100 * e)) + "%"), t.style = `\n        display: flex;\n        height: 1rem;\n        overflow: hidden;\n        font-size: .75rem;\n        background-color: ${s.getComplementaryColor()}; \n        border-radius: 0.5rem;\n        margin-top: auto;\n        margin-bottom: auto;\n        width:10%; \n        `;
                let n = document.createElement("div");
                return n.style = `\n        border-radius: 0.5rem;\n        height:100%; \n        width:${100*e}%; \n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        overflow: hidden;\n        color: #fff;\n        background-color: ${s.COLOR_ACCENT};\n        `, t.appendChild(n), t
            }
            static generateProblemNameElement(e, t) {
                let n = document.createElement("div"),
                    i = document.createElement("a");
                return i.href = t, i.textContent = e, n.appendChild(i), n.style = "\n        width: 50%\n        ", n
            }
            static generateProblemDifficultyElement(e) {
                let t = f.generateTextElement(e);
                switch (t.style = "\n        width: 12%\n        ", e) {
                    case "Hard":
                        t.children[0].style.color = "red";
                        break;
                    case "Medium":
                        t.children[0].style.color = "orange";
                        break;
                    case "Easy":
                        t.children[0].style.color = "green"
                }
                return t
            }
            static generateProblemAcceptanceElement(e) {
                let t = f.generateTextElement(e);
                return t.style = "\n        width: 10%\n        ", t
            }
            static generateRowElement() {
                let e = document.createElement("div");
                return e.style = `\n        display:flex;\n        border-top: solid 1px ${s.getComplementaryColor()};\n        `, e
            }
            static generateTableContentElement(e) {
                let t = document.createElement("div");
                for (let n = 0; n <= e.length - 1; n++) {
                    let i = f.generateRowElement(),
                        a = e[n].frequency,
                        r = e[n].id,
                        o = e[n].difficulty,
                        l = e[n].problemUrl,
                        s = e[n].problemName,
                        c = String(Math.round(100 * e[n].acceptance)) + "%";
                    i.appendChild(f.generateProblemIdElement(r)), i.appendChild(f.generateProblemNameElement(s, l)), i.appendChild(f.generateProblemAcceptanceElement(c)), i.appendChild(f.generateProblemDifficultyElement(o)), i.appendChild(f.generateProblemFrequencyElement(a)), t.append(i)
                }
                return t.id = "table-content", t
            }
            static generateDurationElement(e) {
                let t = document.createElement("button");
                return t.innerText = e, t.style = " \n        width:auto; \n        margin-right: 2%; \n        ", t.setAttribute("duration", e), t.addEventListener("select", (() => {
                    t.classList.add("selected-duration-button"), t.classList.remove("unselected-duration-button")
                })), t.addEventListener("unselect", (() => {
                    t.classList.add("unselected-duration-button"), t.classList.remove("selected-duration-button")
                })), t.classList.add("unselected-duration-button"), t
            }
            static generateTitleElement(e) {
                let t = document.createElement("h2");
                return t.innerText = e, t.style = "\n        font-size:1.5em;", t
            }
        }

        function b() {
            let e = document.createElement("span");
            e.innerHTML = '<h3>\n    please consider leaving a ⭐️ on my repostory <a href = "https://github.com/31b4/Leetcode-Premium-Bypass">here</a>. \n    </h3>\n    ';
            let t = e.getElementsByTagName("a");
            for (let e = 0; e <= t.length - 1; e++) t[e].classList.add("clickable");
            return e
        }
        class y {
            constructor() {
                this.tableId = "table-content", this.shownData = [], this.currentlySortedBy = "", this.isReverseSorted = !1, this.parentDiv = document.createElement("div"), this.durationData = {}, this.currentlySelectedDuration = void 0
            }
            setShownData(e) {
                return this.shownData = e, this
            }
            buildRateUsRow() {
                let e = f.generateRowElement();
                return e.style.justifyContent = "center", e.appendChild(b()), this.parentDiv.appendChild(e), this
            }
            buildTitleRow(e) {
                let t = f.generateRowElement();
                return t.style.justifyContent = "center", t.appendChild(f.generateTitleElement(e)), this.parentDiv.appendChild(t), this
            }
            addDurationData(e, t) {
                this.durationData[e] = t
            }
            buildDurationsRow() {
                let e = f.generateRowElement();
                for (let t in this.durationData) {
                    let n = f.generateDurationElement(t);
                    if (n.classList.add("clickable"), n.addEventListener("click", this.onDurationButtonClicked), e.appendChild(n), null == this.currentlySelectedDuration) {
                        this.currentlySelectedDuration = n;
                        let e = new Event("select");
                        this.currentlySelectedDuration.dispatchEvent(e)
                    }
                }
                return this.parentDiv.appendChild(e), this
            }
            buildHeaderRow() {
                let e = f.generateRowElement(),
                    t = f.generateProblemIdElement("#"),
                    n = f.generateProblemNameElement("Title", "javascript:void(0)"),
                    i = f.generateProblemAcceptanceElement("Acceptance"),
                    a = f.generateProblemDifficultyElement("Difficulty"),
                    r = f.generateProblemAcceptanceElement("Frequency");
                return t.firstChild.classList.add("clickable"), n.firstChild.classList.add("clickable"), i.firstChild.classList.add("clickable"), a.firstChild.classList.add("clickable"), r.firstChild.classList.add("clickable"), t.firstChild.classList.add("default-text-color"), n.firstChild.classList.add("default-text-color"), i.firstChild.classList.add("default-text-color"), a.firstChild.classList.add("default-text-color"), r.firstChild.classList.add("default-text-color"), t.addEventListener("click", this.getOnHeaderClickedFunction(u).bind(this)), n.addEventListener("click", this.getOnHeaderClickedFunction(p).bind(this)), i.addEventListener("click", this.getOnHeaderClickedFunction(h).bind(this)), a.addEventListener("click", this.getOnHeaderClickedFunction(m).bind(this)), r.addEventListener("click", this.getOnHeaderClickedFunction(g).bind(this)), e.appendChild(t), e.appendChild(n), e.appendChild(i), e.appendChild(a), e.appendChild(r), this.parentDiv.appendChild(e), this
            }
            buildTable(e = p) {
                this.shownData.sort(e), this.currentlySortedBy = e.name, this.isReverseSorted = !1;
                let t = f.generateTableContentElement(this.shownData);
                return this.parentDiv.appendChild(t), this
            }
            getResult() {
                return this.parentDiv
            }
            onDurationButtonClicked = e => {
                let t = new Event("select");
                e.currentTarget.dispatchEvent(t);
                let n = new Event("unselect");
                this.currentlySelectedDuration.dispatchEvent(n), this.currentlySelectedDuration = e.currentTarget, this.shownData = this.durationData[e.currentTarget.getAttribute("duration")], this.swapContentTableElement(this.shownData)
            };
            getOnHeaderClickedFunction(e) {
                return () => {
                    e.name == this.currentlySortedBy ? (this.shownData.sort(e, !this.isReverseSorted), this.isReverseSorted = !this.isReverseSorted) : (this.shownData.sort(e), this.currentlySortedBy = e.name, this.isReverseSorted = !1), this.swapContentTableElement(this.shownData)
                }
            }
            swapContentTableElement = e => {
                null != document.getElementById(this.tableId) && document.getElementById(this.tableId).remove();
                let t = f.generateTableContentElement(e);
                this.parentDiv.appendChild(t)
            }
        }
        class E {
            constructor() {
                if (E._instance) throw new Error("Modal Manager Have been instantiated");
                E._instance = this, this.modal = this.createModal(), this.modalContentBox = this.createModalContentBox(), this.appendToModal(this.modalContentBox), this.appendModal(document.body)
            }
            createModalContentBox() {
                let e = document.createElement("div");
                return e.style = `\n        background-color: ${s.getContainerBackgroundColor()};\n        margin-top:1%; \n        margin-left: auto;\n        margin-right: auto;\n        padding: 20px;\n        max-width: 80%;\n        min-width: 60%\n        mid-height: 15%; \n        border-radius:15px; \n        `, e
            }
            getModalContentBox() {
                return this.modalContentBox
            }
            appendModal(e) {
                e.appendChild(this.modal)
            }
            appendToModal(e) {
                this.modal.appendChild(e)
            }
            appendToContainer(e) {
                this.modalContentBox.appendChild(e)
            }
            showLoadingIcon() {
                let e = document.createElement("div");
                e.classList.add("loading-logo"), this.modalContentBox.appendChild(e)
            }
            createCloseButton() {
                let e = document.createElement("span");
                return e.style = " \n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n        cursor: pointer;\n        ", e.innerText = "x", e.addEventListener("click", resetModal), e
            }
            createModal() {
                let e = document.createElement("div");
                return e.style = " \n        display: none; \n        position: fixed; \n        z-index: 32;\n        left: 0;\n        top: 0;\n        width: 100%; \n        height: 100%; \n        overflow: auto; \n        ", window.addEventListener("click", this.onModalClicked), e.id = "CompanyModal", e
            }
            openModal() {
                this.modal.style.display = ""
            }
            closeModal() {
                this.modal.style.display = "none"
            }
            clearModalContent() {
                for (; null != this.modalContentBox.firstChild;) this.modalContentBox.firstChild.remove()
            }
            onModalClicked = e => {
                e.target == this.modal && this.resetModal()
            };
            resetModal = () => {
                this.closeModal(), this.clearModalContent()
            }
        }
        let T = new E;
        class C {
            static API_KEY = "";// Extension no longer maintained
            static SHEETS_ID = "";
            static TESTING_SHEETS_ID = "";
            static getUrl(e) {
                return `https://sheets.googleapis.com/v4/spreadsheets/${C.SHEETS_ID}/values/${e}?key=${C.API_KEY}`
            }
        }
        class w {
            constructor() {
                this.cachedData = {}
            }
            fetchData() {
                return this.fetchProblemFrequencyData()
            }
            async fetchProblemFrequencyData() {
                let e = C.getUrl("Problem!A:B"),
                    t = await fetch(e),
                    n = await t.json();
                return this.parseProblemFrequencyData(n.values)
            }
            parseProblemFrequencyData(e) {
                let t = {};
                for (let n = 0; n <= e.length - 1; n++) {
                    let i = e[n][0],
                        a = e[n][1];
                    t[i] = a, this.cachedData[i] = n + 1
                }
                return t
            }
            fetchPremiumProblem(e) {
                return this.fetchProblemData(e)
            }
            async fetchProblemData(e) {
                if (e in this.cachedData == 0) return new Promise(((e, t) => e("<h1>No data</h1>")));
                let t = "Problem!K" + this.cachedData[e],
                    n = C.getUrl(t),
                    i = await fetch(n);
                return (await i.json()).values[0]
            }
            static async fetchProblemDataByRow(e) {
                let t = "Problem!K" + e,
                    n = C.getUrl(t),
                    i = await fetch(n);
                return (await i.json()).values[0][0]
            }
        }
        class v {
            constructor() {
                this.companyPageTableData = {}, this.cachedData = {}, this.tableDataFetched = !1
            }
            fetchData(e) {
                return 0 == this.tableDataFetched ? this.fetchCompanyPageTable().then((t => this.fetchCompanyProblemData(e))) : this.fetchCompanyProblemData(e)
            }
            fetchCompanyPageTable() {
                let e = C.getUrl("CompaniesProblem_Map!A:C");
                return fetch(e).then((e => e.json())).then((e => {
                    this.parseCompanyPageTableData(e.values)
                })).then(this.tableDataFetched = !0)
            }
            fetchCompanyProblemData(e) {
                if (e in this.cachedData) return new Promise(((t, n) => t(this.cachedData[e])));
                if (e in this.companyPageTableData == 0) return new Promise(((e, t) => e(new o)));
                let t = `CompaniesProblem!A${this.companyPageTableData[e][0]}:I${this.companyPageTableData[e][1]}`,
                    n = C.getUrl(t);
                return fetch(n).then((e => e.json())).then((t => this.parseCompanyProblemData(e, t.values)))
            }
            parseCompanyPageTableData(e) {
                for (let t = 1; t <= e.length - 1; t++) {
                    let n = e[t][0],
                        i = e[t][1],
                        a = e[t][2];
                    this.companyPageTableData[n] = [i, a]
                }
                return this.companyPageTableData
            }
            parseCompanyProblemData(e, n) {
                let i = new o;
                for (let e = 0; e <= n.length - 1; e++) {
                    let a = n[e][2],
                        r = n[e][1],
                        o = n[e][7],
                        l = n[e][6],
                        s = n[e][4],
                        c = n[e][5],
                        d = n[e][0],
                        h = n[e][3],
                        m = new t(a, r, o, l, s, c, d, h);
                    i.push(h, m)
                }
                return this.cachedData[e] = i, i
            }
        }
        class D {
            fetchData(e) {
                let t = `${e}!A2:F`,
                    n = C.getUrl(t);
                return fetch(n).then((e => e.json())).then((e => this.parseTopQuestionData(e.values)))
            }
            parseTopQuestionData(t) {
                let n = new l;
                for (let i = 0; i <= t.length - 1; i++) {
                    let a = t[i][0],
                        r = t[i][1],
                        o = t[i][2],
                        l = t[i][3],
                        s = t[i][4],
                        c = t[i][5],
                        d = new e(r, a, c, s, o, l);
                    n.push(d)
                }
                return n
            }
        }
        class M {
            constructor() {
                this.map = {}, this.mapFetched = !1
            }
            fetchData(e) {
                return this.mapFetched ? this.fetchProblemTag(e) : this.fetchtProblemTagsMap().then((t => this.fetchProblemTag(e)))
            }
            fetchProblemTag(e) {
                if (!(e in this.map)) return new Promise(((e, t) => e(new r)));
                let t = `ProblemCompaniesTags!A${this.map[e][0]}:C${this.map[e][1]}`,
                    n = C.getUrl(t);
                return fetch(n).then((e => e.json())).then((e => this.parseProblemTagData(e.values)))
            }
            parseProblemTagData(e) {
                let t = new r;
                for (let n = 0; n <= e.length - 1; n++) {
                    let a = e[n][0],
                        r = e[n][1],
                        o = e[n][2],
                        l = new i;
                    l.duration = r, l.company = o, l.url = a, t.push(r, l)
                }
                return this.cachedData = t, t
            }
            fetchtProblemTagsMap() {
                let e = C.getUrl("ProblemCompaniesTags_Map!A:C");
                return fetch(e).then((e => e.json())).then((e => this.setProblemTagMap(e.values)))
            }
            setProblemTagMap(e) {
                for (let t = 0; t <= e.length - 1; t++) {
                    let n = e[t][0],
                        i = e[t][1],
                        a = e[t][2];
                    this.map[n] = [i, a]
                }
                this.mapFetched = !0
            }
        }
        class A {
            static async fetchEditorialDataByRow(e) {
                let t = "Problem!L" + e,
                    n = C.getUrl(t),
                    i = await fetch(n),
                    a = (await i.json()).values;
                return null == a ? "<h1>No data</h1>" : a[0][0]
            }
        }
        class N {
            constructor() {
                if (N._instance) throw new Error("Firebase Analytics Manager Have been instantiated");
                this.GA_ENDPOINT = "https://www.google-analytics.com/mp/collect", this.MEASUREMENT_ID = "G-9B493T8583", this.API_SECRET = "Q-G1HeKRTtGyXkBh9aKL7Q", this.SESSION_EXPIRATION_IN_MIN = 30, this.enableAnalytics = !1
            }
            async getOrCreateClientId() {
                if (!this.enableAnalytics) return;
                let e = (await chrome.storage.local.get("clientId")).clientId;
                return e || (e = self.crypto.randomUUID(), await chrome.storage.local.set({
                    clientId: e
                })), e
            }
            async fireModifiedButtonClickedEvent(e, t, n) {
                this.enableAnalytics && fetch(`${this.GA_ENDPOINT}?measurement_id=${this.MEASUREMENT_ID}&api_secret=${this.API_SECRET}`, {
                    method: "POST",
                    body: JSON.stringify({
                        client_id: await this.getOrCreateClientId(),
                        events: [{
                            name: "button_clicked",
                            params: {
                                id: e,
                                type: t,
                                name: n
                            }
                        }]
                    })
                })
            }
            async fireUnlockedDataEvent(e) {
                this.enableAnalytics && fetch(`${this.GA_ENDPOINT}?measurement_id=${this.MEASUREMENT_ID}&api_secret=${this.API_SECRET}`, {
                    method: "POST",
                    body: JSON.stringify({
                        client_id: await this.getOrCreateClientId(),
                        events: [{
                            name: "data_unlocked",
                            params: {
                                type: e
                            }
                        }]
                    })
                })
            }
            async fireErrorEvent(e, t, n) {
                this.enableAnalytics && fetch(`${this.GA_ENDPOINT}?measurement_id=${this.MEASUREMENT_ID}&api_secret=${this.API_SECRET}`, {
                    method: "POST",
                    body: JSON.stringify({
                        client_id: await this.getOrCreateClientId(),
                        events: [{
                            name: "unlock_error",
                            params: {
                                error_type: t,
                                url: e,
                                unlocker_name: n
                            }
                        }]
                    })
                })
            }
        }
        let k = new N;
        class L {
            constructor() {
                this.elementModifier = []
            }
            modifyElement() {
                this.observer = new MutationObserver((() => {
                    this.modifyActiveElement()
                })), this.modifyActiveElement(), this.addObserverToProblemTable()
            }
            injectFunctionToTargetElement(e) {
                this.elementModifier.push(e)
            }
            isTableLoading() {
                return "" == document.querySelectorAll('[role="rowgroup"]')[1].querySelectorAll('[role="row"]')[0].querySelectorAll('[role="cell"]')[1].textContent
            }
            modifyActiveElement = () => {
                if (this.isTableLoading()) return void window.setTimeout((() => {
                    this.modifyActiveElement.bind(this)()
                }), 100);
                this.disconnectObserverToProblemTable();
                let e = document.querySelectorAll('[role="rowgroup"]')[1].querySelectorAll('[role="row"]');
                for (let t = 0; t <= e.length - 1; t++) {
                    let n = e[t].querySelectorAll('[role="cell"]')[1].textContent.split(".")[0];
                    e[t].setAttribute("problem-id", String(n));
                    let i = e[t].getElementsByTagName("rect").length > 0;
                    e[t].setAttribute("is-premium", i);
                    for (let n = 0; n <= this.elementModifier.length - 1; n++) this.elementModifier[n](e[t])
                }
                this.addObserverToProblemTable()
            };
            disconnectObserverToProblemTable() {
                this.observer.disconnect()
            }
            addObserverToProblemTable() {
                let e = document.querySelector('[role="table"]');
                this.observer.observe(e, {
                    childList: !0,
                    subtree: !0
                })
            }
        }
        var S = n(856);
        class _ {
            constructor() {
                this.cachedData = {}, this.browser = "undefined" == typeof browser ? chrome : browser
            }
            refreshTableData() {
                let e = {
                    FetchDate: Date.now()
                };
                return (new w).fetchData().then((t => e.data = t)).then((t => this.onDataFetched(e)))
            }
            onDataFetched(e) {
                let t = this.parseRowOffsetData(e.data);
                this.browser.storage.local.set({
                    rowOffset: t
                }), this.browser.storage.local.set({
                    TableFrequencyData: e
                })
            }
            getRowOffsetData() {
                return this.browser.storage.local.get("rowOffset")
            }
            parseRowOffsetData(e) {
                let t = {},
                    n = 2;
                for (let i in e) t[i] = n, n += 1;
                return t
            }
            getBufferedData(e) {
                return this.browser.storage.local.get(e)
            }
        }
        class R {
            constructor() {
                this.bufferManager = new _, this.dataTTL = 12096e5
            }
            fetchData() {
                return this.bufferManager.getBufferedData("TableFrequencyData").then((e => this.onDataFetched(e)))
            }
            onDataFetched(e) {
                return 0 == Object.keys(e).length || null == e ? this.bufferManager.refreshTableData().then((e => this.bufferManager.getBufferedData("TableFrequencyData"))).then((e => e.TableFrequencyData.data)) : (Date.now() > e.TableFrequencyData.FetchDate + this.dataTTL && this.bufferManager.refreshTableData(), e.TableFrequencyData.data)
            }
            fetchPremiumProblem(e) {
                return this.fetchProblemData(e)
            }
            fetchProblemData(e) {
                return this.bufferManager.getRowOffsetData().then((t => this.onPremiumProblemDataFetched(e, t)))
            }
            onPremiumProblemDataFetched(e, t) {
                if (e in (t = t.rowOffset) == 0) return "<h1>No data</h1>";
                {
                    let n = t[e];
                    return w.fetchProblemDataByRow(n)
                }
            }
        }
        class P {
            fetchData(e) {
                return (new _).getRowOffsetData().then((t => this.onPremiumProblemDataFetched(e, t)))
            }
            onPremiumProblemDataFetched(e, t) {
                if (e in (t = t.rowOffset) == 0) return "<h1>No data</h1>";
                {
                    let n = t[e];
                    return A.fetchEditorialDataByRow(n)
                }
            }
        }
        class x {
            constructor() {
                this.elementModifier = new L, this.dataFetcher = new R, this.containerManager = T, this.isFetching = !1, this.premiumProblemButtonId = 2, this.analyticsManager = k, this.name = "ProblemTableUnlocker"
            }
            onFetchSuccess() {
                this.elementModifier.injectFunctionToTargetElement(x.removeProgressbarUnlockButton), this.elementModifier.injectFunctionToTargetElement(this.insertInnerProgressbar), this.elementModifier.injectFunctionToTargetElement(this.modifyPremiumProblemHref), this.elementModifier.modifyElement()
            }
            modifyPremiumProblemHref = e => {
                if ("true" == e.getAttribute("is-premium")) {
                    this.removePremiumIcons(e);
                    let t = e.getAttribute("problem-id"),
                        n = e.getElementsByTagName("a")[0];
                    n.href = "javascript:void(0)", n.style.color = s.COLOR_ACCENT, n.addEventListener("click", (() => {
                        this.onPremiumProblemClicked(t)
                    }))
                }
            };
            unlock() {
                this.dataFetcher.fetchData().then((e => {
                    this.problemData = e
                })).then(this.onFetchSuccess.bind(this)).then(this.analyticsManager.fireUnlockedDataEvent(this.name)).catch((e => console.log(this, e)))
            }
            onPremiumProblemClicked = e => {
                this.isFetching || (this.analyticsManager.fireModifiedButtonClickedEvent(this.premiumProblemButtonId, "PremiumProblem", e), this.isFetching = !0, this.containerManager.clearModalContent(), this.containerManager.openModal(), this.containerManager.showLoadingIcon(), this.dataFetcher.fetchPremiumProblem(parseInt(e)).then((e => this.onProblemFetchSuccess(e))).then(this.isFetching = !1))
            };
            onProblemFetchSuccess(e) {
                let t = this.containerManager.getModalContentBox();
                this.containerManager.clearModalContent();
                let n = String(e).replaceAll("<strong>", "<br><strong>");
                t.innerHTML = S.sanitize(n);
                let i = t.getElementsByTagName("pre");
                for (let e = 0; e <= i.length - 1; e++) i[e].style = "\n            border-radius: 0.5rem;\n            font-family: Menlo,sans-serif;\n            font-size: .875rem;\n            line-height: 1.25rem;\n            margin-bottom: 1rem;\n            margin-top: 1rem;\n            padding: 1rem;\n    "
            }
            removePremiumIcons(e) {
                let t = e.querySelectorAll('[role="cell"]'),
                    n = t[0].getElementsByTagName("svg")[0],
                    i = t[1].getElementsByTagName("svg")[0];
                null != n && (n.style.opacity = 0), null != i && (i.style.opacity = 0)
            }
            insertInnerProgressbar = e => {
                let t = e.querySelectorAll('[role="cell"]'),
                    n = t[t.length - 1],
                    i = e.getAttribute("problem-id"),
                    a = this.problemData[i];
                null == a && (a = 100), a *= 100;
                let r, o = "inner-progressbar",
                    l = n.getElementsByClassName(o),
                    c = n.getElementsByClassName("rounded-l-lg")[0];
                l.length > 0 && l[0].remove(), i in this.problemData ? (r = function(e) {
                    let t = document.createElement("div");
                    return t.style = `\n    background-color: ${s.COLOR_ACCENT};\n    width: ${e}%;\n    height: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n    border-top-left-radius: 0.5rem;\n    `, t
                }(a), c.setAttribute("title", `${Math.round(a)}%`)) : (r = function(e) {
                    let t = document.createElement("div");
                    return t.style = `\n    background-color: red;\n    width: ${e}%;\n    height: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n    border-top-left-radius: 0.5rem;\n    `, t
                }(a), c.setAttribute("title", "No Data")), r.classList.add(o), c.appendChild(r)
            };
            static removeProgressbarUnlockButton(e) {
                let t = e.querySelectorAll('[role="cell"]'),
                    n = t[t.length - 1],
                    i = n.getElementsByTagName("svg")[0],
                    a = n.getElementsByClassName("rounded-r-lg")[0],
                    r = n.getElementsByClassName("rounded-l-lg")[0];
                null != i && i.remove(), null != a && a.remove(), null != r && (r.style = "\n            border-bottom-right-radius: 0.5rem;\n            overflow: hidden; \n            border-top-right-radius: 0.5rem\n            ")
            }
        }
        class O {
            constructor() {
                this.elementModifier = []
            }
            injectFunctionToTargetElement(e) {
                this.elementModifier.push(e)
            }
            modifyElement() {
                this.isloading() ? window.setTimeout((() => {
                    this.modifyElement()
                }), 100) : (this.observer = new MutationObserver((() => {
                    this.modifyLockedElement()
                })), this.modifyLockedElement(), this.addObsersverToFoldout())
            }
            isloading() {
                return null == document.getElementsByClassName("space-y-1.5")[0]
            }
            addObsersverToFoldout() {
                let e = document.getElementsByClassName("space-y-1.5")[0];
                this.observer.observe(e, {
                    childList: !0,
                    subtree: !0
                })
            }
            modifyLockedElement = () => {
                let e = document.getElementsByClassName("space-y-1.5")[0];
                if (!e) return void window.setTimeout((() => {
                    this.modifyLockedElement.bind(this)()
                }), 100);
                let t = e.children;
                for (let e = 0; e <= t.length - 2; e++) {
                    let n = t[e].getElementsByTagName("svg");
                    if (n.length > 0) {
                        t[e].getElementsByTagName("a")[0].href = "javascript:void(0)";
                        let i = t[e].textContent.replaceAll(" ", "");
                        t[e].setAttribute("item", i), t[e].style.color = s.COLOR_ACCENT, n[0].remove();
                        for (let n = 0; n <= this.elementModifier.length - 1; n++) this.elementModifier[n](t[e])
                    }
                }
            };
            disconnectObserverToFoldout() {
                this.observer.disconnect()
            }
        }
        class I {
            constructor() {
                this.elementModifier = new O, this.dataFetcher = new D, this.containerManager = T, this.isFetching = !1, this.topProblemButtonId = 4, this.analyticsManager = k, this.name = "TopProblemUnlocker"
            }   
            unlock() {
                this.elementModifier.injectFunctionToTargetElement(this.getFunctionToBeInjected()), this.elementModifier.modifyElement(), this.analyticsManager.fireUnlockedDataEvent(this.name)
            }
            onTopProblemClicked = e => {
                if (this.isFetching) return;
                this.isFetching = !0;
                let t = e.currentTarget.getAttribute("item"),
                    n = e.currentTarget.getElementsByClassName("font-medium")[0].textContent;
                this.analyticsManager.fireModifiedButtonClickedEvent(this.topProblemButtonId, "TopProblem", n), this.containerManager.clearModalContent(), this.containerManager.openModal(), this.containerManager.showLoadingIcon(), this.dataFetcher.fetchData(t).then((e => this.onFetchSuccess(e, n))).then((e => {
                    this.isFetching = !1
                })).catch((e => {
                    console.log(this, "Fetch Error" + e), this.isFetching = !1
                })), e.stopImmediatePropagation()
            };
            onFetchSuccess(e, t) {
                let n = new y;
                n.setShownData(e), n.buildTitleRow(t), n.buildHeaderRow(), n.buildTable();
                let i = n.getResult();
                this.containerManager.clearModalContent(), this.containerManager.getModalContentBox().appendChild(i)
            }
            getFunctionToBeInjected() {
                return e => {
                    e.addEventListener("click", this.onTopProblemClicked)
                }
            }
        }
        class B {
            constructor() {
                this.tagButtonListener = []
            }
            getTabMenu() {
                let e = document.getElementsByClassName("gap-8")[1];
                return null == e && (e = document.getElementsByClassName("flexlayout__tab_button")[0]), e
            }
            modifyElement() {
                // return//not working
                let e = this.getTabMenu();
                null != e && 0 != e.children[0].children.length ? (this.isDescriptionTabActive() && this.modifyCompaniesTagButton(), this.addObserverToLeftTab()) : window.setTimeout((() => {
                    this.modifyElement()
                }), 100)
            }
            addObserverToLeftTab() {
                let e = this.getTabMenu();
                null != e ? new MutationObserver((() => {
                    this.isDescriptionTabActive() && this.modifyCompaniesTagButton()
                })).observe(e, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    attributeFilter: ["class"]
                }) : window.setTimeout((() => {
                    this.addObserverToLeftTab()
                }), 100)
            }
            isDescriptionTabActive() {
                return 2 == this.getTabMenu().children[0].children[0].childElementCount
            }
            modifyCompaniesTagButton() { //companies tag
                let e=document.querySelector("#qd-content > div.h-full.flex-col.ssg__qd-splitter-primary-w > div > div > div > div.flex.h-full.w-full.overflow-y-auto.rounded-b > div > div > div.px-5.pt-3 > div > div > div");
                if(e==null){
                    //dynamic ui
                    e=document.querySelector("div > div.flex.w-full.flex-1.flex-col.gap-4.overflow-y-auto.px-4.py-5 > div.flex.gap-1 > div:nth-child(3)")
                }
                if (!e) return void window.setTimeout((() => {
                    this.modifyCompaniesTagButton.bind(this)()
                }), 100);
                let t = e.getElementsByTagName("svg")[0];
                if (null == t) return;
                let n = t.parentElement;
                t.remove();
                let i = n.cloneNode(!0);
                n.parentElement.replaceChild(i, n), i.style.backgroundColor = s.COLOR_ACCENT, i.style.color = "black";
                for (let e = 0; e <= this.tagButtonListener.length - 1; e++) i.addEventListener("click", this.tagButtonListener[e])
            }
            addTagButtonOnClickListener(e) {
                this.tagButtonListener.push(e)
            }
        }
        class F {
            static generateHeader(e) {
                let t = document.createElement("h3");
                return t.classList.add("default-text-color"), t.textContent = e, t
            }
            static generateTag(e) {
                let t = document.createElement("div");
                return t.style = "\n        min-width:7%;\n        margin-right: 3%;\n        margin-bottom: 1%;\n        max-width:15%; \n        text-align:center; \n        border-radius: 21px;\n        ", t.classList.add("sub-title-text-color"), t.textContent = e, t
            }
            static generateRow() {
                let e = document.createElement("div");
                return e.style = "\n        display:flex;\n        flex-wrap: wrap;\n        border-top: solid 1px darkgrey;\n\n        ", e
            }
        }
        class U {
            constructor() {
                this.parentDiv = document.createElement("div")
            }
            buildHeader(e) {
                let t = F.generateRow();
                return t.style.justifyContent = "center", t.appendChild(F.generateHeader(e)), this.parentDiv.appendChild(t), this
            }
            getResult() {
                return this.parentDiv
            }
            buildTagsBox(e) {
                let t = F.generateRow();
                for (let n = 0; n <= e.length - 1; n++) {
                    let i = F.generateTag(e[n].company);
                    t.appendChild(i)
                }
                return this.parentDiv.appendChild(t), this
            }
            buildRateUsText() {
                let e = F.generateRow();
                return e.style.justifyContent = "center", e.appendChild(b()), this.parentDiv.appendChild(e), this
            }
        }
        class H {
            constructor() {
                this.elementModifier = [], this.checkCount = 0
            }
            injectFunctionToTargetElement(e) {
                this.elementModifier.push(e)
            }
            getTabMenu() {
                let e = document.getElementsByClassName("gap-8")[1];
                return null == e && (e = document.getElementsByClassName("flexlayout__tab_button")[0]), e
            }
            modifyElement() {
                // return // not working
                null != this.getTabMenu() ? this.addEventListenerToEditorialButton() : window.setTimeout((() => {
                    this.modifyElement()
                }), 100)
            }
            addEventListenerToEditorialButton() {
                let e = this.getEditorialButton();                
                null != e ? (e.parentElement.parentElement.addEventListener("click", (t => {
                    for (let t = 0; t <= this.elementModifier.length - 1; t++) this.elementModifier[t](e);
                    null != e.getAttribute("problem-id") && t.stopImmediatePropagation()
                })), this.disableEditorialRedirect(), this.removeEditorialLockLogo()) : window.setTimeout((() => {
                    this.addEventListenerToEditorialButton()
                }), 50)
            }

            findElementByTagNameAndInnerHTML(tagName, html, rootNode = document) {
                const elements = rootNode.getElementsByTagName(tagName);
            
                for (let i = 0; i < elements.length; i++) {
                    if (elements[i].innerHTML.includes(html)) {
                        return elements[i];
                    }
                }
                
                return null;
            }
            getEditorialButton() { // the div inside a of editorial
                let sv = this.findElementByTagNameAndInnerHTML("span","Editorial")

                if (sv == null){
                    const style = 'background-color: darkblue; color: white; font-style: italic; border: 5px solid hotpink; font-size: 2em;' 
                    console.log("%cTurn off dynamic ui, for editorial to work, https://github.com/31b4/Leetcode-Premium-Bypass/issues/14", style);
                    //dynamic ui
                    return document.querySelector("div > div.flex.w-full.flex-1.flex-col.gap-4.overflow-y-auto.px-4.py-5 > div.flex.gap-1 > div:nth-child(4)")
                    return sv.parentNode
                }
                return this.findElementByTagNameAndInnerHTML("span","Editorial").parentNode;
            }
            disableEditorialRedirect() { // a tag of editorial
                this.findElementByTagNameAndInnerHTML("span","Editorial").parentNode.parentNode.href = "javascript:void(0)"
            }
            removeEditorialLockLogo() {
                let e = this.getEditorialButton();

                if (null == e) return void window.setTimeout((() => {
                    this.removeEditorialLockLogo()
                }), 50);
                    // free editorial
                    let t= document.querySelector("#qd-content > div.h-full.flex-col.ssg__qd-splitter-primary-w > div > div > div > div:nth-child(1) > div > div > a:nth-child(2) > div > span > div > div:nth-child(1) > div > svg")
                    
                    // All screen sizes
                    // let t=this.findElementByTagNameAndInnerHTML("span","Editorial").getElementsByTagName('svg')[0]
                if (null == t) {
                    if (this.checkCount > 5) return;
                    return window.setTimeout((() => {
                        this.removeEditorialLockLogo()
                    }), 150), void(this.checkCount += 1)
                }
                t.style.opacity = 0, e.setAttribute("problem-name", document.URL.split("/")[4]), e.setAttribute("problem-id", this.getProblemId()), this.addUnlockedIndicator()
            }
            addUnlockedIndicator() {
                this.getTabMenu().children[1].getElementsByTagName("span")[0].style.color = s.COLOR_ACCENT
            }
            getProblemId() {
                return document.getElementsByClassName("text-lg")[0].textContent.split(".")[0]
            }
        }
        class j {
            constructor() {
                this.parentDiv = document.createElement("div")
            }
            buildContent(e) {
                let t = document.createElement("div");
                return t.style.justifyContent = "center", t.innerHTML = e, this.parentDiv.appendChild(t), this
            }
            getResult() {
                return this.parentDiv
            }
            buildRateUsText() {
                let e = F.generateRow();
                return e.style.justifyContent = "center", e.appendChild(b()), this.parentDiv.appendChild(e), this
            }
        }! function(e) {
            for (const t in e)
                if (window.location.href.includes(t)) {
                    let n = e[t];
                    for (let e = 0; e <= n.length - 1; e++) {
                        let i = new n[e];
                        try {
                            i.unlock()
                        } catch (e) {
                            k.fireErrorEvent(t, e.message, i.name), console.log(i.name + " Error " + e)
                        }
                    }
                    break
                }
        }({
            "https://leetcode.com/problemset": [x, class {
                constructor() {
                    this.elementModifier = new c, this.dataFetcher = new v, this.containerManager = T, this.isFetching = !1, this.analyticsManager = k, this.companyProblemButtonId = 1, this.name = "CompaniesProblemUnlocker"
                }
                unlock() {
                    this.elementModifier.injectFunctionToTargetElement(this.getFunctionToBeInjected()), this.elementModifier.modifyElement(), this.analyticsManager.fireUnlockedDataEvent(this.name)
                }
                getFunctionToBeInjected() {
                    return e => {
                        e.addEventListener("click", this.onCompanyButtonClick)
                    }
                }
                onCompanyButtonClick = e => {
                    if (this.isFetching) return;
                    this.isFetching = !0;
                    let t = e.currentTarget.getAttribute("company-name");
                    this.analyticsManager.fireModifiedButtonClickedEvent(this.companyProblemButtonId, "CompanyButton", t);
                    let n = e.currentTarget.getElementsByClassName("text-label-2")[0].textContent;
                    this.containerManager.clearModalContent(), this.containerManager.openModal(), this.containerManager.showLoadingIcon(), this.dataFetcher.fetchData(t).then((e => this.onFetchSuccess(e, n))).then((e => {
                        this.isFetching = !1
                    })).catch((e => {
                        this.isFetching = !1
                    }))
                };
                onFetchSuccess(e, t) {
                    let n = this.containerManager.getModalContentBox(),
                        i = new y(e),
                        a = e.getKeys();
                    for (let t = 0; t <= a.length - 1; t++) i.addDurationData(a[t], e.getList(a[t]));
                    i.buildRateUsRow(), i.buildTitleRow(t), i.buildDurationsRow(), i.setShownData(e.getList(a[0])), i.buildHeaderRow(), i.buildTable(), this.containerManager.clearModalContent(), n.appendChild(i.getResult())
                }
            }, I],
            "https://leetcode.com/problem-list": [x, I],
            "https://leetcode.com/problems": [class {
                constructor() {
                    this.elementModifier = new B, this.dataFetcher = new M, this.containerManager = T, this.isFetching = !1, this.problemTagButtonId = 3, this.analyticsManager = k, this.name = "ProblemTagsUnlocker"
                }
                onTagButtonClicked = () => {
                    if (this.isFetching) return;
                    this.isFetching = !0;
                    let e = document.URL.split("/")[4];
                    this.analyticsManager.fireModifiedButtonClickedEvent(this.problemTagButtonId, "ProblemTagButton", e), this.containerManager.clearModalContent(), this.containerManager.openModal(), this.containerManager.showLoadingIcon(), this.dataFetcher.fetchData(e).then((e => this.onFetchSucces(e))).then((e => {
                        this.isFetching = !1
                    })).catch((e => {
                        console.log(this, e), this.isFetching = !1
                    }))
                };
                unlock() {
                    this.elementModifier.addTagButtonOnClickListener(this.onTagButtonClicked), this.elementModifier.modifyElement(), this.analyticsManager.fireUnlockedDataEvent(this.name)
                }
                onFetchSucces = e => {
                    let t = e.getKeys(),
                        n = new U;
                    for (let i = 0; i <= t.length - 1; i++) n.buildHeader(t[i]), n.buildTagsBox(e.getList(t[i]));
                    n.buildRateUsText();
                    let i = this.containerManager.getModalContentBox();
                    this.containerManager.clearModalContent(), i.appendChild(n.getResult())
                }
            }, class {
                constructor() {
                    this.name = "EditorialUnlocker", this.elementModifier = new H, this.dataFetcher = new P, this.containerManager = T
                }
                unlock() {
                    this.elementModifier.injectFunctionToTargetElement(this.onEditorialTabClicked), this.elementModifier.modifyElement()
                }
                onEditorialTabClicked = e => {
                    let t = e.getAttribute("problem-id");
                    null != t && (this.containerManager.clearModalContent(), this.containerManager.openModal(), this.containerManager.showLoadingIcon(), this.dataFetcher.fetchData(t).then((e => this.onDataFetched(e))))
                };
                onDataFetched(e) {
                    let t = new j;
                    t.buildRateUsText(), t.buildContent(e);
                    let n = this.containerManager.getModalContentBox();
                    this.containerManager.clearModalContent(), n.appendChild(t.getResult())
                }
            }],
            "https://leetcode.com/study-plan": [I]
        })
    })()
})();
