var components = {
    "packages": [
        {
            "name": "highlightjs",
            "main": "highlightjs-build.js"
        },
        {
            "name": "revealjs",
            "main": "revealjs-build.js"
        },
        {
            "name": "drupalcon2013",
            "main": "drupalcon2013-build.js"
        }
    ],
    "shim": {
        "highlightjs": {
            "exports": "hljs"
        },
        "revealjs": {
            "exports": "Reveal"
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