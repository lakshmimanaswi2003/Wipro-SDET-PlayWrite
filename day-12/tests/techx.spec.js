/*
import { test, expect } from "@playwright/test";

test('check title', async ({ page }) => {
    await page.goto("https://www.techxincorporation.com/");

    // const texhXHeading = page.locator('//*[@id="root"]/header/div/a[1]/span[1]');
    // console.log(texhXHeading);

    // const exporeBtn = page.getByRole("link", { name: /Explore/ });
    // await exporeBtn.click();
    // expect(page.url()).toBe("https://www.techxincorporation.com/training");
    const consultBtn = page.getByRole("link", { name: /Request/ }).nth(1); 
    // [top bar result, main page result] --> [0, 1] --> 1
    await consultBtn.click();
    expect(page.url()).toBe("https://www.techxincorporation.com/contact");
});
*/


import {test,expect} from "@playwright/test";

test("check",async({page})=>{
    await page.goto("https://www.techxincorporation.com/");

    await page.locator('//*[@id="root"]/header/div/a[2]').click();

    expect(page.url()).toBe('https://www.techxincorporation.com/contact');

    await page.locator('//*[@id="root"]/div/section[2]/div/div[2]/form/div[1]/input').type("lakshmi",{delay:200});

    await page.locator('//*[@id="root"]/div/section[2]/div/div[2]/form/div[2]/input').type("123@gmail.com",{delay:200});

    await page.locator('//*[@id="root"]/div/section[2]/div/div[2]/form/div[3]/input').type("wipro",{delay:200});

    await page.locator('//*[@id="root"]/div/section[2]/div/div[2]/form/div[4]/select').click("Corporate Training");

    await page.locator('//*[@id="root"]/div/section[2]/div/div[2]/form/div[5]/textarea').type("---");

    await page.getByText("Submit Request").click();

})