(function (compId) {
    var _ = null, y = true, n = false, x12 = 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', x9 = 'rgba(255,255,255,0.00)', x2 = '5.0.0', x4 = 'rgba(0,0,0,0)', lf = 'left', x1 = '5.0.1', g = 'image', e14 = '${stairway}', cl = 'clip', e10 = '${arrow-up}', tp = 'top', e11 = '${professional}', o = 'opacity', e13 = '${height}', x3 = '5.0.1.386', i = 'none';
    var g5 = 'stairway.png', g6 = 'professional.svg', g8 = 'arrow-up.png', g7 = 'height.svg';
    var im = 'public/edge/stairway/', aud = 'media/', vid = 'media/', js = 'js/', fonts = {}, opts = {
        'gAudioPreloadPreference': 'auto',
        'gVideoPreloadPreference': 'auto'
    }, resources = [], scripts = [], symbols = {
        "stage": {
            v: x1,
            mv: x2,
            b: x3,
            stf: i,
            cg: i,
            rI: n,
            cn: {
                dom: [{
                    id: 'stairway',
                    t: g,
                    r: ['193px', '180px', '326px', '446px', 'auto', 'auto'],
                    cl: 'rect(492.0107421875px -80px 446px 0px)',
                    f: [x4, im + g5, '0px', '0px']
                }, {
                    id: 'professional',
                    t: g,
                    r: ['219px', '180px', '24px', '300px', 'auto', 'auto'],
                    cl: 'rect(322.671875px 24px 300px 0px)',
                    f: [x4, im + g6, '0px', '0px']
                }, {
                    id: 'height',
                    t: g,
                    r: ['534px', '521px', '18px', '68px', 'auto', 'auto'],
                    cl: 'rect(97.4375px 18px 68px 0px)',
                    f: [x4, im + g7, '0px', '0px']
                }, {
                    id: 'arrow-up',
                    t: g,
                    r: ['540px', '425px', '23px', '70px', 'auto', 'auto'],
                    o: '0',
                    f: [x4, im + g8, '0px', '0px']
                }],
                style: {
                    '${Stage}': {
                        isStage: true,
                        r: ['null', 'null', '1336px', '720px', 'auto', 'auto'],
                        overflow: 'hidden',
                        f: [x9]
                    }
                }
            },
            tt: {
                d: 10000,
                a: y,
                data: [["eid17", tp, 2500, 750, "linear", e10, '425px', '349px'], ["eid24", tp, 3250, 750, "linear", e10, '349px', '430px'], ["eid25", tp, 4000, 750, "linear", e10, '430px', '283px'], ["eid26", tp, 4750, 500, "linear", e10, '283px', '304px'], ["eid27", tp, 5250, 750, "linear", e10, '304px', '180px'], ["eid28", tp, 6000, 1734, "linear", e10, '180px', '428px'], ["eid30", cl, 676, 1324, "linear", e11, [322.671875, 24, 300, 0], [-10.5, 24, 300, 0], {vt: x12}], ["eid16", lf, 10000, 0, "linear", e10, '540px', '540px'], ["eid14", o, 2250, 250, "linear", e10, '0.000000', '1'], ["eid12", cl, 1750, 500, "linear", e13, [97.4375, 18, 68, 0], [-10.38671875, 18, 68, 0], {vt: x12}], ["eid5", cl, 0, 1000, "linear", e14, [492.0107421875, -80, 446, 0], [-11.9375, 332.8388671875, 446, 0], {vt: x12}]]
            }
        }
    };
    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);
})("EDGE-9038984");
(function ($, Edge, compId) {
    var Composition = Edge.Composition, Symbol = Edge.Symbol;
    Edge.registerEventBinding(compId, function ($) {
//Edge symbol: 'stage'
        (function (symbolName) {
            Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function (sym, e) {
                sym.play("start");
            });
//Edge binding end
        })("stage");
//Edge symbol end:'stage'
    })
})(AdobeEdge.$, AdobeEdge, "EDGE-9038984");