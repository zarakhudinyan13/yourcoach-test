import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PracticePage } from '../pages/PracticePage';
import { practiceData } from '../utils/testData';
import { PracticeLocators } from '../Locators/PracticeLocators';

test.describe('Practice Profile Update Flow', () => {
  let loginPage: LoginPage;
  let practicePage: PracticePage;

  test.beforeEach(async ({ page }) => {
    await page.goto('https://app.stage1.yourcoach.health/login');
    loginPage = new LoginPage(page);
    practicePage = new PracticePage(page);
  });

  test('Coach can log in successfully', async ({ page }) => {
    await loginPage.startLogin();
    await loginPage.loginWithCode(practiceData.email, practiceData.password);
    await expect(page.locator(PracticeLocators.dashboardText)).toBeVisible();
  });

  test('Coach can update practice profile with new info and cover image', async ({ page }) => {
    await loginPage.startLogin();
    await loginPage.loginWithCode(practiceData.email, practiceData.password);
    await expect(page.locator(PracticeLocators.dashboardText)).toBeVisible();

    await practicePage.updatePractice(
      practiceData.title,
      practiceData.description,
      practiceData.categories
    );
  });

  test('Updated practice title is visible on dashboard', async ({ page }) => {
    await loginPage.startLogin();
    await loginPage.loginWithCode(practiceData.email, practiceData.password);

    await practicePage.updatePractice(
      practiceData.title,
      practiceData.description,
      practiceData.categories
    );

    await expect(page.locator(`text=${practiceData.title}`)).toBeVisible({ timeout: 5000 });
  });

  test('Uploaded image is visible after saving practice changes', async ({ page }) => {
    await loginPage.startLogin();
    await loginPage.loginWithCode(practiceData.email, practiceData.password);

    await practicePage.updatePractice(
      practiceData.title,
      practiceData.description,
      practiceData.categories
    );

    await expect(page.locator('img.sc-hsXxFb[src^="blob:"]').first()).toBeVisible({ timeout: 10000 });

  });
});
