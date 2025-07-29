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
    await this.page.waitForTimeout(1000)

    await this.page.locator(PracticeLocators.saveButton).click();

    // Handle confirmation modal
     const modal = this.page.locator(PracticeLocators.saveConfirmationModal);
    // await expect(modal).toBeVisible({ timeout: 5000 });

    
    const confirmButton = this.page.locator(PracticeLocators.confirmSaveButton);

  if (await confirmButton.isVisible({ timeout: 3000 })) {
    await confirmButton.click();
   }



    await expect(this.page.locator(PracticeLocators.uploadedTitle(title))).toBeVisible();
  }

  async uploadCoverImage(imageFileName: string) {
    const uploadButton = this.page.locator(PracticeLocators.uploadCoverButton);
    await uploadButton.waitFor({ state: 'visible', timeout: 5000 }); // wait only 5s
    await uploadButton.click();
    
  
    const fileInputs = this.page.getByRole('dialog').locator('input[type="file"][data-test-id="addFile.input.file"]');
    const fileInput = fileInputs.nth(1); 
  
    const filePath = path.resolve(__dirname, `../utils/${imageFileName}`);
    await fileInput.setInputFiles(filePath);
  
    const confirmUploadBtn = this.page.locator(PracticeLocators.confirmUploadButton);
    await expect(confirmUploadBtn).toBeEnabled({ timeout: 5000 });
    await confirmUploadBtn.click();
    await this.page.waitForTimeout(2000)
    this.page.locator('button.sc-dibcMh QTiKB', { hasText: 'Save' })
    await this.page.click('body', { position: { x: 0, y: 0 } });
    await this.page.click('body', { position: { x: 0, y: 0 } });
   
  }
  
  
}
