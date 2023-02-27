import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/');
});

let testList = [

  'watering the flowers',
  'Vacuum the living room',
  'return books'

];



test('clear the input when new item is added', async ({ page }) => {

  let inputField = page.getByPlaceholder('What needs to be done?');

  await inputField.fill(testList[1]);
  await inputField.press('Enter');

  await expect(inputField).toBeEmpty();


});

test('check all checkboxes', async ({ page }) => {

  let inputField = page.getByPlaceholder('What needs to be done?');
  let checkboxes = await page.$$('input[type="checkbox"]');

  await inputField.fill(testList[0]);
  await inputField.press('Enter');
  await inputField.fill(testList[1]);
  await inputField.press('Enter');
  await inputField.fill(testList[2]);
  await inputField.press('Enter');

  await page.getByRole('button', { name: '🔽' }).click();

  await expect(checkboxes.)

  


});













