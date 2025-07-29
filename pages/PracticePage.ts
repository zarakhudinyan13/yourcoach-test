import { Page, expect } from '@playwright/test';
import { PracticeLocators } from '../Locators/PracticeLocators';
import path from 'path';

export class PracticePage {
  constructor(private page: Page) {}

  async updatePractice(title: string, description: string, categories: string[]) {
    await this.page.locator(PracticeLocators.editPracticeButton).click();

    await this.page.locator(PracticeLocators.titleInput).fill(title);
    await this.page.locator(PracticeLocators.descriptionInput).fill(description);

    for (const category of categories) {
      const categoryLocator = this.page
        .locator('div.sc-REhVe:visible', { hasText: category })
        .first();
      await expect(categoryLocator).toBeVisible({ timeout: 5000 });
      await categoryLocator.click();
    }

    // Upload cover image
    await this.uploadCoverImage('cover.png');
    await this.page.waitForTimeout(5000)

    await this.page.locator(PracticeLocators.saveButton).click();

    // Handle confirmation modal
    const modal = this.page.locator(PracticeLocators.saveConfirmationModal);
    await expect(modal).toBeVisible({ timeout: 5000 });

    await this.page.locator(PracticeLocators.confirmSaveButton).click();
    await modal.waitFor({ state: 'detached', timeout: 10000 });

    await expect(this.page.locator(PracticeLocators.uploadedTitle(title))).toBeVisible();
  }

  async uploadCoverImage(imageFileName: string) {
   
    await this.page.locator(PracticeLocators.uploadCoverButton).click();
    await this.page.waitForTimeout(2000);
    // Step 2: Wait for the file input to appear
    const fileInput = this.page.locator(PracticeLocators.coverFileInput);
    //await expect(fileInput).toBeVisible({ timeout: 5000 });


    const filePath = path.resolve(__dirname, `../utils/${imageFileName}`);
    await fileInput.setInputFiles(filePath);


    const confirmUploadBtn = this.page.locator(PracticeLocators.confirmUploadButton);
    await expect(confirmUploadBtn).toBeEnabled({ timeout: 5000 });
    await confirmUploadBtn.click();
  }
}
