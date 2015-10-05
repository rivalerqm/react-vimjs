var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Vim = (function (_super) {
    __extends(Vim, _super);
    function Vim(props) {
        _super.call(this, props);
    }
    Vim.prototype.componentDidMount = function () {
        global.Module = {
            noInitialRun: false,
            noExitRuntime: true,
            arguments: ['/usr/local/share/vim/example.js'],
            preRun: [function () { vimjs.pre_run(); }],
            postRun: [],
            print: function () {
                console.group.apply(console, arguments);
                console.groupEnd();
            },
            printErr: function () {
                console.group.apply(console, arguments);
                console.groupEnd();
            },
        };
        global.__vimjs_memory_initializer = this.props.memPath;
        if (!document.getElementById('vimjs-source')) {
            var script = document.createElement('script');
            script.setAttribute('src', this.props.vimjsPath);
            script.id = "vimjs-source";
            document.body.appendChild(script);
        }
    };
    Vim.prototype.render = function () {
        return (React.createElement("div", {"className": "root"}, React.createElement("div", {"id": "vimjs-container", "className": "vimjs-container"}, React.createElement("canvas", {"id": "vimjs-canvas"}), React.createElement("div", {"style": { textAlign: "center" }}, React.createElement("div", {"className": "vimjs-loading-container"}, React.createElement("div", {"className": "vimjs-loading"}), React.createElement("div", {"id": "vimjs-loading-text"}, "loading...")))), React.createElement("audio", {"id": "vimjs-beep", "src": ""}), React.createElement("input", {"id": "vimjs-file", "className": "vimjs-invisible", "type": "file"}), React.createElement("div", {"id": "vimjs-font-test", "className": "vimjs-invisible"}), React.createElement("div", {"id": "vimjs-trigger-dialog", "className": "modal"}, React.createElement("div", {"className": "modal-dialog"}, React.createElement("div", {"className": "modal-content"}, React.createElement("div", {"className": "modal-header"}, React.createElement("h4", {"className": "modal-title"}, "Ugly workaround for Chrome")), React.createElement("div", {"className": "modal-body"}, React.createElement("button", {"id": "vimjs-trigger-button", "type": "button", "className": "btn btn-primary"}, "Click Me")))))));
    };
    return Vim;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Vim;
//# sourceMappingURL=main.js.map