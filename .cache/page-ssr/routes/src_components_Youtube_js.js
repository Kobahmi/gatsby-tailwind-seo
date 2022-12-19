exports.id = "src_components_Youtube_js";
exports.ids = ["src_components_Youtube_js"];
exports.modules = {

/***/ "./src/components/Youtube.js":
/*!***********************************!*\
  !*** ./src/components/Youtube.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lite-youtube-embed */ "./node_modules/react-lite-youtube-embed/dist/index.es.jsx");
/* harmony import */ var react_lite_youtube_embed_dist_LiteYouTubeEmbed_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lite-youtube-embed/dist/LiteYouTubeEmbed.css */ "./node_modules/react-lite-youtube-embed/dist/LiteYouTubeEmbed.css");
/* harmony import */ var react_lite_youtube_embed_dist_LiteYouTubeEmbed_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lite_youtube_embed_dist_LiteYouTubeEmbed_css__WEBPACK_IMPORTED_MODULE_2__);



const Youtube = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "flex flex-col justify-center gap-6 text-white bg-slate-900 h-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    "data-aos": "fade-zoom-in",
    "data-aos-easing": "ease-in-back",
    className: "text-lg font-bold text-center sm:text-4xl "
  }, "MUST WATCH!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-up",
    "data-aos-easing": "ease-in-back",
    "data-aos-delay": "200",
    className: "w-[680px] mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1__["default"], {
    poster: "maxresdefault",
    id: "Uo3cL4nrGOk",
    title: "Funny",
    webp: "true",
    cookie: "true"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Youtube);

/***/ }),

/***/ "./node_modules/react-lite-youtube-embed/dist/LiteYouTubeEmbed.css":
/*!*************************************************************************!*\
  !*** ./node_modules/react-lite-youtube-embed/dist/LiteYouTubeEmbed.css ***!
  \*************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-lite-youtube-embed/dist/index.es.jsx":
/*!*****************************************************************!*\
  !*** ./node_modules/react-lite-youtube-embed/dist/index.es.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LiteYouTubeEmbed)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
* react-lite-youtube-embed v2.3.52
*  https://github.com/ibrahimcesar/react-lite-youtube-embed.git
*
*  Copyright (c) Ibrahim Cesar < email@ibrahimcesar.com > and project contributors.
*
*  This source code is licensed under the MIT license found in the
*  LICENSE file in the root directory of this source tree.
*
*  Author site: https://ibrahimcesar.cloud
*/
    

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function LiteYouTubeEmbed(props) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(false), preconnected = _a[0], setPreconnected = _a[1];
    var _b = react__WEBPACK_IMPORTED_MODULE_0__.useState(false), iframe = _b[0], setIframe = _b[1];
    var videoId = encodeURIComponent(props.id);
    var videoPlaylisCovertId = typeof props.playlistCoverId === 'string' ? encodeURIComponent(props.playlistCoverId) : null;
    var videoTitle = props.title;
    var posterImp = props.poster || "hqdefault";
    var paramsImp = "&" + props.params || 0;
    var mutedImp = props.muted ? "&mute=1" : "";
    var announceWatch = props.announce || "Watch";
    var format = props.webp ? 'webp' : 'jpg';
    var vi = props.webp ? 'vi_webp' : 'vi';
    var posterUrl = props.thumbnail || (!props.playlist
        ? "https://i.ytimg.com/" + vi + "/" + videoId + "/" + posterImp + "." + format
        : "https://i.ytimg.com/" + vi + "/" + videoPlaylisCovertId + "/" + posterImp + "." + format);
    var ytUrl = props.noCookie
        ? "https://www.youtube-nocookie.com"
        : "https://www.youtube.com";
    ytUrl = props.cookie
        ? "https://www.youtube.com"
        : "https://www.youtube-nocookie.com";
    var iframeSrc = !props.playlist
        ? ytUrl + "/embed/" + videoId + "?autoplay=1&state=1" + mutedImp + paramsImp
        : ytUrl + "/embed/videoseries?autoplay=1" + mutedImp + "&list=" + videoId + paramsImp;
    var activatedClassImp = props.activatedClass || "lyt-activated";
    var adNetworkImp = props.adNetwork || false;
    var aspectHeight = props.aspectHeight || 9;
    var aspectWidth = props.aspectWidth || 16;
    var iframeClassImp = props.iframeClass || "";
    var playerClassImp = props.playerClass || "lty-playbtn";
    var wrapperClassImp = props.wrapperClass || "yt-lite";
    var onIframeAdded = props.onIframeAdded || function () { };
    var rel = props.rel ? 'prefetch' : 'preload';
    var warmConnections = function () {
        if (preconnected)
            return;
        setPreconnected(true);
    };
    var addIframe = function () {
        if (iframe)
            return;
        setIframe(true);
    };
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (iframe) {
            onIframeAdded();
        }
    }, [iframe]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", { rel: rel, href: posterUrl, as: "image" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, preconnected && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", { rel: "preconnect", href: ytUrl }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", { rel: "preconnect", href: "https://www.google.com" }),
            adNetworkImp && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", { rel: "preconnect", href: "https://static.doubleclick.net" }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", { rel: "preconnect", href: "https://googleads.g.doubleclick.net" })))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", { onPointerOver: warmConnections, onClick: addIframe, className: wrapperClassImp + " " + (iframe ? activatedClassImp : ""), "data-title": videoTitle, style: __assign({ backgroundImage: "url(" + posterUrl + ")" }, {
                '--aspect-ratio': (aspectHeight / aspectWidth) * 100 + "%",
            }) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: playerClassImp, "aria-label": announceWatch + " " + videoTitle }),
            iframe && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", { className: iframeClassImp, title: videoTitle, width: "560", height: "315", frameBorder: "0", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, src: iframeSrc })))));
}


//# sourceMappingURL=index.es.jsx.map


/***/ })

};
;
//# sourceMappingURL=src_components_Youtube_js.js.map