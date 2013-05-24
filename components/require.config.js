var components = {
    "packages": [
        {
            "name": "highlightjs",
            "main": "highlightjs-built.js"
        },
        {
            "name": "revealjs",
            "main": "revealjs-built.js"
        },
        {
            "name": "drupalcon2013",
            "main": "drupalcon2013-built.js"
        }
    ],
    "shim": {
        "highlightjs": {
            "exports": "hljs"
        },
        "revealjs": {
            "exports": "Reveal"
        },
        "drupalcon2013": {
            "deps": [
                "revealjs",
                "highlightjs"
            ]
        }
    },
    "baseUrl": "components"
};
if (typeof require !== "undefined" && require.config) {
    require.config(components);
} else {
    var require = components;
}
if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = components;
}