(function (React, ReactDOM, d3) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
    var d3__namespace = /*#__PURE__*/_interopNamespace(d3);

    var App = function App() {
      React__default["default"].useEffect(function () {
        var svg = d3__namespace.select("#root").append("svg").attr("width", 500).attr("height", 500);
        var data = [{
          x: 100,
          y: 100,
          r: 30,
          color: "red"
        }, {
          x: 200,
          y: 200,
          r: 40,
          color: "green"
        }, {
          x: 300,
          y: 150,
          r: 50,
          color: "blue"
        }];
        svg.selectAll("circle").data(data).enter().append("circle").attr("cx", function (d) {
          return d.x;
        }).attr("cy", function (d) {
          return d.y;
        }).attr("r", function (d) {
          return d.r;
        }).attr("fill", function (d) {
          return d.color;
        });
      }, []);
      return /*#__PURE__*/React__default["default"].createElement("div", null);
    };
    ReactDOM__default["default"].render(/*#__PURE__*/React__default["default"].createElement(App, null), document.getElementById('root'));

})(React, ReactDOM, d3);
//# sourceMappingURL=bundle.js.map
