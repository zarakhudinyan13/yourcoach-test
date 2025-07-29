import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PracticePage } from '../pages/PracticePage';
import { practiceData } from '../utils/testData';
import { PracticeLocators } from '../Locators/PracticeLocators';

test('Coach can login and update practice profile', async ({ page }) => {
  await page.goto('https://app.stage1.yourcoach.health/login');

  const loginPage = new LoginPage(page);
  const practicePage = new PracticePage(page);

  await loginPage.startLogin();
  await loginPage.loginWithCode(practiceData.email, practiceData.password);

  await expect(page.locator(PracticeLocators.dashboardText)).toBeVisible();

  await practicePage.updatePractice(
    practiceData.title,
    practiceData.description,
    practiceData.categories
  );
});

