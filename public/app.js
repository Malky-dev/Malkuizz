"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.getToken = function (name) {
        var nameLenPlus = (name.length + 1);
        return document.cookie
            .split(';')
            .map(function (c) {
            return c.trim();
        })
            .filter(function (cookie) {
            return cookie.substring(0, nameLenPlus) === "".concat(name, "=");
        })
            .map(function (cookie) {
            return decodeURIComponent(cookie.substring(nameLenPlus));
        })[0] || null;
    };
    App.prototype.render = function () {
        if (this.getToken("Malkuizz")) {
            return react_1.default.createElement("h1", null, "Token oui");
        }
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, "Hello!!"),
            react_1.default.createElement("h2", null, "Token non")));
    };
    return App;
}(react_1.default.Component));
exports.default = App;
