export const PracticeLocators = {
  dashboardText: '[data-test-id="dashboard.block.h1"]',
  editPracticeButton: 'button:has-text("Edit Practice")',
  titleInput: '[data-test-id="edit_coach_profile.input.name"]',
  descriptionInput: '[data-test-id="edit_coach_profile.input.description"]',
  categoryDropdown: '[data-test-id="practice.categories"]',
  saveButton: '[data-test-id="edit_coach_profile.button.save"]',
  saveConfirmationModal: '[data-test-id="Alert"]',
  confirmSaveButton: '[data-test-id="Alert"] button:has-text("Yes")',
  cancelSaveButton: '[data-test-id="Alert"] button:has-text("No")',
  uploadedTitle: (title: string) => `text=${title}`,

  // Upload cover
  uploadCoverButton: '[data-test-id="edit_coach_profile.button.add_cover"]',
  coverFileInput: '[data-test-id="addFile.input.file"]:visible >> nth=1',    
  confirmUploadButton: '[data-test-id="addFile.button.confirm"]'
  
};
