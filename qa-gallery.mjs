export default async function run(page, ui) {
  const grab = sel => page.evaluate(s => [...document.querySelectorAll(s)].map(i => ({src:i.getAttribute("src"), ok:i.naturalWidth>0})), sel);
  const out = {};
  const init = await grab("img");
  out.initialBroken = init.filter(i=>!i.ok).map(i=>i.src);
  await page.evaluate(() => window.showGalleryCategory("restoran"));
  await page.waitForTimeout(700);
  const r = await grab("#gallery img");
  out.restoran = {total:r.length, broken:r.filter(i=>!i.ok).map(i=>i.src)};
  await page.evaluate(() => window.showGalleryCategory("front-office"));
  await page.waitForTimeout(700);
  const fo = await grab("#gallery img");
  out.frontOffice = {total:fo.length, broken:fo.filter(i=>!i.ok).map(i=>i.src)};
  await page.evaluate(() => window.showGalleryCategory("view"));
  await page.waitForTimeout(700);
  const v = await grab("#gallery img");
  out.view = {total:v.length, broken:v.filter(i=>!i.ok).map(i=>i.src)};
  await page.evaluate(() => window.showGalleryCategory("kedai-kayu-manis"));
  await page.waitForTimeout(700);
  const k = await grab("#gallery img");
  out.kedai = {total:k.length, broken:k.filter(i=>!i.ok).map(i=>i.src)};
  await page.evaluate(() => window.showRoomsBranch("branch2"));
  await page.waitForTimeout(900);
  const b2 = await grab("#rooms img");
  out.branch2 = {total:b2.length, broken:b2.filter(i=>!i.ok).map(i=>i.src)};
  return out;
}
