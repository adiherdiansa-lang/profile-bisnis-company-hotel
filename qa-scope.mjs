export default async function run(page, ui) {
  return await page.evaluate(() => {
    const out = {};
    // 1. Which realm owns onclick handlers? (classic inline handler => "function")
    out.handlerType = typeof document.querySelector('.nav-logo').onclick;

    // 2. Does a freshly-injected classic <script> see top-level const/let/function
    //    from script.js? If yes, the realm shares global lexical scope.
    const probe = document.createElement('script');
    probe.textContent =
      'window.__probe = { fn: typeof buildNavbar, wnd: typeof window.buildNavbar, wndGoTo: typeof window.goToSection };';
    document.body.appendChild(probe);
    out.freshScriptSeesScope = window.__probe;
    delete window.__probe;
    probe.remove();

    // 3. Two linguistic ways to reach the same value
    out.evalIndirect = (0, eval)('typeof buildNavbar');
    out.newFunction = (() => { try { return new Function('return typeof buildNavbar')(); }
                               catch (e) { return 'THROWS: ' + e.message; } })();

    // 4. Are the window.goToSection assignments real properties?
    out.hasOwnGoToSection = Object.prototype.hasOwnProperty.call(window, 'goToSection');
    return out;
  });
}