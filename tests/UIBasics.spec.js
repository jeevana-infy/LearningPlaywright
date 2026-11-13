import { test, expect } from '@playwright/test';

test('first context test', async ({ browser }) => {
  // Create a new browser context and wait for it to resolve
  const context = await browser.newContext();
  
  // Create a new page inside that context
  const page = await context.newPage();
  
  // Navigate to the website
  await page.goto("https://www.facebook.com/");
  
  // Log the title to the console
  console.log(await page.title());
  
  // Use the correct Playwright assertion method (case-sensitive)
  // Note: Playwright asserts the exact title or uses a RegEx. Facebook's title usually has a capital 'F'.
  await expect(page).toHaveTitle(/Facebook/);
  await page.getByTestId("#_R_c9l6neappb6amH1_").fill("jeevana")

await page.pause(); 
page.locator('.subnav-search.')
});


test('first playwright test', async ({ page }) => {
  // 1. Fixed the URL syntax (added the missing forward slash)
  await page.goto("https://google.com");
  
  // Log the title to the console
  console.log(await page.title());
  
  // 2. Fixed the casing of the method name
  // 3. Added the mandatory 'await' for the locator assertion
  // 4. Corrected the spelling from "Googlr" to "Google"
  await expect(page).toHaveTitle("Google");
});