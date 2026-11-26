export default async function run(page, ui) {
  const info = await page.evaluate(async () => {
    const r = performance.getEntriesByType("resource").find(x => x.name.includes("script.js"));
    const txt = await (await fetch("script.js")).text();
    return {
      resource: r ? {name:r.name, transferSize:r.transferSize, duration:r.duration} : null,
      fetchedLength: txt.length,
      fetchedTail: txt.slice(-120),
      fetchedHasGoToSection: txt.includes("window.goToSection"),
      fetchedHasShowGalleryCat: txt.includes("window.showGalleryCategory"),
      liveGoToSection: typeof window.goToSection,
      scriptTags: [...document.querySelectorAll("script")].map(s => s.src)
    };
  });
  return info;
}