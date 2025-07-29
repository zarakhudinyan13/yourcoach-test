import { Page, expect } from '@playwright/test';
import { LoginLocators } from '../Locators/LoginLocators';

export class LoginPage {
  constructor(private page: Page) {}

  async startLogin() {
    await this.page.locator(LoginLocators.signInButton).click();
    await this.page.waitForTimeout(5000)
    await expect(this.page.locator(LoginLocators.welcomeMessage)).toBeVisible();
    await expect(this.page.locator(LoginLocators.emailLabel)).toBeVisible();
    await expect(this.page.locator(LoginLocators.helperText)).toBeVisible();
  }

  async loginWithCode(email: string, code: string) {
    await this.page.locator(LoginLocators.emailInput).fill(email);
    await this.page.locator(LoginLocators.sendCodeButton).click();
    const codeInput = this.page.locator('[data-test-id="auth.input.code"] input');
    await expect(codeInput).toBeVisible();

    await codeInput.fill(code);
   // await this.page.locator(LoginLocators.submitBtn).click();
  }
}
