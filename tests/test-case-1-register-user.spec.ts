import { expect, test } from '@playwright/test';

test('Test Case 1: Register User', async ({ page }) => {
  const timestamp = Date.now();
  const name = `Playwright User ${timestamp}`;
  const email = `playwright.${timestamp}@example.com`;

  await page.goto('/');
  await expect(page.locator('body')).toContainText('Home');

  await page.getByRole('link', { name: /signup\s*\/\s*login/i }).click();
  await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();

  await page.locator('input[data-qa="signup-name"]').fill(name);
  await page.locator('input[data-qa="signup-email"]').fill(email);
  await page.locator('button[data-qa="signup-button"]').click();

  await expect(page.getByText('Enter Account Information', { exact: true })).toBeVisible();

  await page.locator('#id_gender1').check();
  await page.locator('#password').fill('Password123!');
  await page.locator('#days').selectOption('10');
  await page.locator('#months').selectOption('5');
  await page.locator('#years').selectOption('1990');
  await page.locator('#newsletter').check();
  await page.locator('#optin').check();
  await page.locator('#first_name').fill('Playwright');
  await page.locator('#last_name').fill('User');
  await page.locator('#company').fill('Automation Team');
  await page.locator('#address1').fill('123 Test Street');
  await page.locator('#address2').fill('Suite 100');
  await page.locator('#country').selectOption('United States');
  await page.locator('#state').fill('California');
  await page.locator('#city').fill('San Francisco');
  await page.locator('#zipcode').fill('94105');
  await page.locator('#mobile_number').fill('4155550100');
  await page.locator('button[data-qa="create-account"]').click();

  await expect(page.getByText('Account Created!', { exact: true })).toBeVisible();
  await page.locator('a[data-qa="continue-button"]').click();
  await expect(page.getByText('Logged in as', { exact: false })).toContainText(name);

  await page.getByRole('link', { name: /delete account/i }).click();
  await expect(page.getByText('Account Deleted!!!!', { exact: true })).toBeVisible();
  await page.locator('a[data-qa="continue-button"]').click();
});
