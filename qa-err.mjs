export default async function run(page, ui) {
  const errs = [];
  page.on("pageerror", e => errs.push("PAGEERROR: " + e.message));
  page.on("console", m => { if (m.type() === "error") errs.push("CONSOLE: " + m.text()); });
  await page.reload({ waitUntil: "load" });
  await page.waitForTimeout(1500);
  const keys = await page.evaluate(() => ({
    goToSection: typeof window.goToSection,
    showGalleryCategory: typeof window.showGalleryCategory,
    showRoomsBranch: typeof window.showRoomsBranch,
    showAboutBranch: typeof window.showAboutBranch,
    bookRoom: typeof window.bookRoom,
    showInfo: typeof window.showInfo,
    galleryChildren: document.querySelectorAll("#gallery img").length,
    newsCards: document.querySelectorAll(".news-card").length,
    teamCards: document.querySelectorAll(".team-card").length
  }));
  return { errs, keys };
}
