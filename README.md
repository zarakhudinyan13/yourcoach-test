## Task Overview

Automated UI test to validate that a coach user can:
- Log into the platform
- Navigate to the "Your Practice" section
- Edit the practice profile (name, description, and image)
- Submit the changes
- Verify updated data is visible on screen

---

## Tech Stack
- [Playwright](https://playwright.dev/)
- TypeScript

---

##  Credentials & URL

- **Test Environment**: https://app.stage1.yourcoach.health/login
- **Coach Login**: coach10@example.com  
- **Password**: 123456

---

##  Task 1: Test Planning

### 1. Manual Testing Coverage
- UI rendering of the Edit Practice modal
- Visual feedback after save (toast, changes applied)
- Image upload success and preview behavior
- File validation: format, size (optional)

### 2. Prioritized Automation
- Login
- Edit practice flow (title, description, image)
- Image upload and Save
- Final state verification

### 3. Test Case Structure
- Spec organized using Playwright's test runner
- Selectors scoped using roles and `data-test-id`
- File upload using `setInputFiles()`
- Page organized in logical sections for clarity

---

## Task 2: Automation

### Scenario:
- Log in as a coach
- Navigate to the "Your Practice" section
- Click "Edit" and fill out name, description, and upload a new cover image
- Save the changes and confirm they appear on screen

### Run the Test

```bash
npx playwright test
# YourCoach QA Automation Task 

## 👩 Task Overview

Automated UI test to validate that a coach user can:
- Log into the platform
- Navigate to the "Your Practice" section
- Edit the practice profile (name, description, and image)
- Submit the changes
- Verify updated data is visible on screen

---

##  Tech Stack
- [Playwright](https://playwright.dev/)
- TypeScript

---

## 🔐Credentials & URL

- **Test Environment**: https://app.stage1.yourcoach.health/login
- **Coach Login**: coach10@example.com  
- **Password**: 123456

---

##  Task 1: Test Planning

### 1. Manual Testing Coverage
- UI rendering of the Edit Practice modal
- Visual feedback after save (toast, changes applied)
- Image upload success and preview behavior
- File validation: format, size (optional)

### 2. Prioritized Automation
- Login
- Edit practice flow (title, description, image)
- Image upload and Save
- Final state verification

### 3. Test Case Structure
- Spec organized using Playwright's test runner
- Selectors scoped using roles and `data-test-id`
- File upload using `setInputFiles()`
- Page organized in logical sections for clarity

---

##  Task 2: Automation

### Scenario:
- Log in as a coach
- Navigate to the "Your Practice" section
- Click "Edit" and fill out name, description, and upload a new cover image
- Save the changes and confirm they appear on screen

### Run the Test

```bash
npx playwright test
