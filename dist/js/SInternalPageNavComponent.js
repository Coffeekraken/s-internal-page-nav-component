"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SWebComponent2 = require("coffeekraken-sugar/js/core/SWebComponent");

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _scrollTop = require("coffeekraken-sugar/js/dom/scrollTop");

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _offset = require("coffeekraken-sugar/js/dom/offset");

var _offset2 = _interopRequireDefault(_offset);

var _throttle = require("coffeekraken-sugar/js/utils/functions/throttle");

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Provide a simple way to create a nice internal page navigation that automaticaly activate the good link depending on the displayed section.
 * @example    html
 * <s-internal-page-nav>
 *   <a href="my-cool-section-1" title="...">...</a>
 *   <a href="my-cool-section-2" title="...">...</a>
 *   <a href="my-cool-section-3" title="...">...</a>
 * </s-internal-page-nav>
 * <section id="my-cool-section-1">
 *   <!-- content... -->
 * </section>
 * <section id="my-cool-section-2">
 *   <!-- content... -->
 * </section>
 * <section id="my-cool-section-3">
 *   <!-- content... -->
 * </section>
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
var Component = function (_SWebComponent) {
  _inherits(Component, _SWebComponent);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, [{
    key: "componentMount",


    /**
     * Mount component
     * @definition    SWebComponent.componentMount
     * @protected
     */
    value: function componentMount() {
      var _this2 = this;

      _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), "componentMount", this).call(this);

      // internal variables
      this._targets = this._getTargets();
      this._onScrollFn = (0, _throttle2.default)(this._onScroll.bind(this));

      // listen for scroll to check
      // the targets
      document.addEventListener("scroll", this._onScrollFn);

      // observe for new links
      this._newLinkObserver = new MutationObserver(function (mutationsList) {
        // update the targets
        _this2._targets = _this2._getTargets();
      });
      this._newLinkObserver.observe(this, {
        childList: true,
        subtree: true
      });

      // first check
      this._checkTargets();
    }

    /**
     * Component unmount
     * @definition    SWebComponent.componentUnmount
     * @protected
     */

  }, {
    key: "componentUnmount",
    value: function componentUnmount() {
      _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), "componentUnmount", this).call(this);

      // remoce some event listeners
      document.removeEventListener("scroll", this._onScrollFn);

      // stop listeneing for new links
      this._newLinkObserver.disconnect();
    }

    /**
     * On scroll
     * @param    {Event}    e    The scroll event
     */

  }, {
    key: "_onScroll",
    value: function _onScroll(e) {
      // check targets
      this._checkTargets();
    }

    /**
     * Get the targets
     * @return    {Array}    An array of objects with
     */

  }, {
    key: "_getTargets",
    value: function _getTargets() {
      var _this3 = this;

      var navTargets = [];
      // loop on each links inside the internal page nav component
      [].forEach.call(this.querySelectorAll('a[href*="#"]'), function (linkElm) {
        // process the href for links like my-link#my-hash
        var href = linkElm.getAttribute("href");
        var pathname = href.split("#")[0];
        var hash = href.split("#")[1];
        // check if the current link belongs to the current page by
        // checking the pathname property
        if (_this3.props.checkPathname && pathname && pathname !== document.location.pathname && "/" + pathname !== document.location.pathname) {
          return;
        }
        // get the destination element using the hash
        var destElm = document.querySelector("#" + hash);
        // if no destination element, we do not process the link
        if (!destElm) return;
        // add the target object inside the stack
        navTargets.push({
          linkElm: linkElm,
          destElm: destElm
        });
      });
      // return the targets
      return navTargets;
    }

    /**
     * Check targets
     */

  }, {
    key: "_checkTargets",
    value: function _checkTargets() {
      // loop on each dest elements backward to start from bottom to top
      var destElmFound = false;
      for (var i = this._targets.length - 1; i >= 0; i--) {
        var target = this._targets[i];

        if (destElmFound) {
          target.linkElm.classList.remove("active");
        } else {
          var offset = (0, _offset2.default)(target.destElm);
          var destTop = offset.top - (0, _scrollTop2.default)();
          var destBottom = destTop + target.destElm.offsetHeight;

          if (destTop <= window.innerHeight * this.props.activeYPercent && (destBottom >= window.innerHeight * this.props.activeYPercent || !this.props.checkBottomBoundary)) {
            target.linkElm.classList.add("active");
            destElmFound = true;
          } else {
            target.linkElm.classList.remove("active");
          }
        }
      }
    }
  }], [{
    key: "defaultCss",


    /**
     * Css
     * @protected
     */
    value: function defaultCss(componentName, componentNameDash) {
      return "\n      " + componentNameDash + " {\n        display : block;\n      }\n    ";
    }
  }, {
    key: "defaultProps",

    /**
     * Default props
     * @definition    SWebComponent.defaultProps
     * @protected
     */
    get: function get() {
      return {
        /**
         * Specify the y "percentage" of the screen from which the items are considered as active
         * By default, it's the half of the screen, so 0.5
         * @prop
         * @type    {Number}
         */
        activeYPercent: 0.5,

        /**
         * Specify if need to check the bottom boundary or not
         * @prop
         * @type    {Boolean}
         */
        checkBottomBoundary: true,

        /**
         * Check or not the pathname of the link. If the pathname of the link does not correspond
         * to the pathname of the current page, the link if excluded from the internal page navigation
         * @prop
         * @type    {Boolean}
         */
        checkPathname: true
      };
    }
  }]);

  return Component;
}(_SWebComponent3.default);

exports.default = Component;