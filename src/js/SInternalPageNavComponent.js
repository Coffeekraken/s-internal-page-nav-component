import SWebComponent from "coffeekraken-sugar/js/core/SWebComponent";
import __scrollTop from "coffeekraken-sugar/js/dom/scrollTop";
import __offset from "coffeekraken-sugar/js/dom/offset";
import __throttle from "coffeekraken-sugar/js/utils/functions/throttle";

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
export default class Component extends SWebComponent {
  /**
   * Default props
   * @definition    SWebComponent.defaultProps
   * @protected
   */
  static get defaultProps() {
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

  /**
   * Css
   * @protected
   */
  static defaultCss(componentName, componentNameDash) {
    return `
      ${componentNameDash} {
        display : block;
      }
    `;
  }

  /**
   * Mount component
   * @definition    SWebComponent.componentMount
   * @protected
   */
  componentMount() {
    super.componentMount();

    // internal variables
    this._targets = this._getTargets();
    this._onScrollFn = __throttle(this._onScroll.bind(this));

    // listen for scroll to check
    // the targets
    document.addEventListener("scroll", this._onScrollFn);

    // observe for new links
    this._newLinkObserver = new MutationObserver(mutationsList => {
      // update the targets
      this._targets = this._getTargets();
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
  componentUnmount() {
    super.componentUnmount();

    // remoce some event listeners
    document.removeEventListener("scroll", this._onScrollFn);

    // stop listeneing for new links
    this._newLinkObserver.disconnect();
  }

  /**
   * On scroll
   * @param    {Event}    e    The scroll event
   */
  _onScroll(e) {
    // check targets
    this._checkTargets();
  }

  /**
   * Get the targets
   * @return    {Array}    An array of objects with
   */
  _getTargets() {
    const navTargets = [];
    // loop on each links inside the internal page nav component
    [].forEach.call(this.querySelectorAll('a[href*="#"]'), linkElm => {
      // process the href for links like my-link#my-hash
      const href = linkElm.getAttribute("href");
      const pathname = href.split("#")[0];
      const hash = href.split("#")[1];
      // check if the current link belongs to the current page by
      // checking the pathname property
      if (
        this.props.checkPathname &&
        pathname &&
        pathname !== document.location.pathname &&
        `/${pathname}` !== document.location.pathname
      ) {
        return;
      }
      // get the destination element using the hash
      const destElm = document.querySelector(`#${hash}`);
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
  _checkTargets() {
    // loop on each dest elements backward to start from bottom to top
    let destElmFound = false;
    for (let i = this._targets.length - 1; i >= 0; i--) {
      const target = this._targets[i];

      if (destElmFound) {
        target.linkElm.classList.remove("active");
      } else {
        const offset = __offset(target.destElm);
        const destTop = offset.top - __scrollTop();
        const destBottom = destTop + target.destElm.offsetHeight;

        if (
          destTop <= window.innerHeight * this.props.activeYPercent &&
          (destBottom >= window.innerHeight * this.props.activeYPercent ||
            !this.props.checkBottomBoundary)
        ) {
          target.linkElm.classList.add("active");
          destElmFound = true;
        } else {
          target.linkElm.classList.remove("active");
        }
      }
    }
  }
}
