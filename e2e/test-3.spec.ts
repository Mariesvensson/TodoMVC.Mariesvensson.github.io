import { test, expect } from '@playwright/test';


test('adding new todo item to list', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('Shopping');
  await page.keyboard.press('Enter');

  await page.waitForSelector('.text-content')
  let textContent = await page.$eval('.text-content', element => element.textContent)
  expect(textContent).toBe('Shopping');

});

test('check items left', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('Shopping');
  await page.keyboard.press('Enter');

  await page.waitForSelector('#show-items-left')
  let oneitemsleft = await page.$eval('#show-items-left', element => element.textContent)
  expect(oneitemsleft).toContain('1 item left');

  await page.locator('#checkbox').check();
  
  await page.waitForSelector('#show-items-left')
  let zeroItemsleft = await page.$eval('#show-items-left', element => element.textContent)
  expect(zeroItemsleft).toContain('0 items left');

});

test('Check one checkbox and inspect items left', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('Shopping');
  await page.keyboard.press('Enter');
  
  // await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('Shopping');
  await page.keyboard.press('Enter');

  await page.getByPlaceholder('What needs to be done?').fill('Shopping');
  await page.keyboard.press('Enter');

 await page.locator('#checkbox').first().check()

  await page.waitForSelector('#show-items-left')
  let oneitemsleft = await page.$eval('#show-items-left', element => element.textContent)
  expect(oneitemsleft).toContain('2 items left');

  

});















