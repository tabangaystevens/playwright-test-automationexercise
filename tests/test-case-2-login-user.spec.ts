import { expect, test } from '@playwright/test';

test('Test Case 2: Login User with correct email and password', async ({ page }) => {
  const id = `${Date.now()}-${test.info().parallelIndex}`;
  const name = `Playwright Login User ${id}`;
  const email = `playwright.login.${id}@example.com`;
  const password = 'Password123!';

  // Precondition: create an isolated account so the test does not depend on shared credentials.
  await page.goto('/login');
  await page.locator('input[data-qa="signup-name"]').fill(name);
  await page.locator('input[data-qa="signup-email"]').fill(email);
  await page.locator('button[data-qa="signup-button"]').click();

  await page.locator('#id_gender1').check();
  await page.locator('#password').fill(password);
  await page.locator('#days').selectOption('10');
  await page.locator('#months').selectOption('5');
  await page.locator('#years').selectOption('1990');
  await page.locator('#first_name').fill('Playwright');
  await page.locator('#last_name').fill('User');
  await page.locator('#address1').fill('123 Test Street');
  await page.locator('#country').selectOption('United States');
  await page.locator('#state').fill('California');
  await page.locator('#city').fill('San Francisco');
  await page.locator('#zipcode').fill('94105');
  await page.locator('#mobile_number').fill('4155550100');
  await page.locator('button[data-qa="create-account"]').click();
  await expect(page.getByText('Account Created!', { exact: true })).toBeVisible();
  await page.locator('a[data-qa="continue-button"]').click();
  await page.getByRole('link', { name: /logout/i }).click();

  // Test Case 2: authenticate with the valid credentials.
  await page.goto('/');
  await expect(page.locator('body')).toContainText('Home');
  await page.getByRole('link', { name: /signup\s*\/\s*login/i }).click();
  await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();

  await page.locator('input[data-qa="login-email"]').fill(email);
  await page.locator('input[data-qa="login-password"]').fill(password);
  await page.locator('button[data-qa="login-button"]').click();
  await expect(page.getByText('Logged in as', { exact: false })).toContainText(name);

  await page.getByRole('link', { name: /delete account/i }).click();
  await expect(page.getByText('Account Deleted!', { exact: true })).toBeVisible();
  await page.locator('a[data-qa="continue-button"]').click();
});
