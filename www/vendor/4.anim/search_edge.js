/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
$(function() {
    console.log( "ready!" );
});
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'world',
                            type: 'image',
                            rect: ['255px', '180px', '36px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"world.png",'0px','0px']
                        },
                        {
                            id: 'search',
                            type: 'image',
                            rect: ['287px', '170px', '32px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"search.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2035,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "location",
                            0,
                            500,
                            "linear",
                            "${search}",
                            [[302.67, 186.3, 0, 0, 0, 0,0],[291.98, 174.05, -21.18, -11.36, -18.66, -10.01,16.44],[273.12, 170.73, 0, 0, 0, 0,35.75]]
                        ],
                        [
                            "eid2",
                            "location",
                            500,
                            500,
                            "linear",
                            "${search}",
                            [[273.12, 170.73, 0, 0, 0, 0,0],[255.02, 179.58, -20.84, 20.2, -22.42, 21.74,20.4],[247.12, 200, 0, 0, 0, 0,42.65]]
                        ],
                        [
                            "eid3",
                            "location",
                            1000,
                            500,
                            "linear",
                            "${search}",
                            [[247.12, 200, 0, 0, 0, 0,0],[253.98, 219, 21.69, 24.21, 19.89, 22.2,20.52],[274.89, 231, 0, 0, 0, 0,44.86]]
                        ],
                        [
                            "eid4",
                            "location",
                            1500,
                            535,
                            "linear",
                            "${search}",
                            [[274.89, 231, 0, 0, 0, 0,0],[298.1, 222.03, 25.17, -24.2, 23.1, -22.21,25.21],[307.13, 200, 0, 0, 0, 0,49.46]]
                        ]
                    ]
                }
            }
        };
    console.log('adobe');
    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("search_edgeActions.js");
})("EDGE-4631667");
