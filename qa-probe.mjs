export default async function run(page, ui) {
  page.on("pageerror", e => console.error("PAGEERROR>>> " + e.message));
  page.on("console", m => console.error("CONSOLE[" + m.type() + "]>>> " + m.text()));
  await page.reload({ waitUntil: "load" });
  await page.waitForTimeout(1200);
  return await page.evaluate(() => ({
    readyState: document.readyState,
    scripts: [...document.querySelectorAll("script")].map(s => s.src),
    htmlClass: document.documentElement.className,
    navbarHTML: document.getElementById("navbar").innerHTML.length,
    heroHTML: document.getElementById("hero").innerHTML.length,
    galleryImgs: document.querySelectorAll("#gallery img").length,
    newsCards: document.querySelectorAll(".news-card").length,
    typeofGoToSection: typeof window.goToSection,
    typeofBuildNavbar: typeof window.buildNavbar,
    typeofCloseMenu: typeof window.closeMenu,
  }));
}