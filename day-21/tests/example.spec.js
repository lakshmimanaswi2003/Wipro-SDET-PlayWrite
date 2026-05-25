// @ts-check
import { test, expect } from '@playwright/test';
import { log } from 'node:console';

test.describe('jio mart test', () => {
  test.use({ storageState: 'auth.json' });
  test.skip('search for fruits', async ({ page }) => {
    await page.goto('https://www.jiomart.com/sections/low-price-andhra-pradesh');

    // Click on the search input and type "fruits"
    const input = page.locator('//*[@id="app"]/div/div[3]/header/div[1]/div/div[2]/div[1]/div/div[2]/input');
    await input.click();
    await input.fill('fruits');
    await input.press('Enter');
    await expect(page.getByText('fruits').first()).toBeVisible();
  });
/*
  test('profile', async ({ page }) => {
    await page.goto('https://www.jiomart.com/profile');
     await page.waitForLoadState('networkidle');
    
    const profileName = page.locator('//*[@id="app"]/div/div[4]/div/div/div[1]/div/div[1]/div[2]/div/label');
    await expect(profileName).toBeVisible();
   
    //console.log(await profileName.textContent());
    await expect(profileName).toHaveText("Lakshmi");
  });
*/
});
