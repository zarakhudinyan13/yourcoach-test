// tests/yourcoach.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const credentials = {
  email: 'coach10@example.com',
  password: '123456',
};

test('Coach can login', async ({ page }) => {
  await page.goto('https://app.stage1.yourcoach.health/login');

  const loginPage = new LoginPage(page);
  await loginPage.login(credentials.email, credentials.password);

  await expect(page.getByText('YourSpace')).toBeVisible();
});
