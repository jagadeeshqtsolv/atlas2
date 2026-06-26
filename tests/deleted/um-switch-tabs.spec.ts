// Archived from tests/admin-user-management.spec.ts (test case um-switch-tabs)
import { test, expect } from '../../support/fixtures';

test('Switch tabs: User Management to Roles & Access and back', { tag: ["@smoke","@regression","@P0","@um-switch-tabs"] }, async ({ page, loginPage, userManagementPage, rolesAndAccessPage }) => {
  await test.step('Open — Navigate to Admin page', async () => {
    await page.goto('/');
  });

  await test.step('Assert visible — Salesforce login button', async () => {
    await loginPage.expectLoginWithSalesforceVisible();
  });

  await test.step('Click — Click Salesforce login', async () => {
    await loginPage.clickLoginWithSalesforce();
  });

  await test.step('Assert visible — User Management tab active', async () => {
    await userManagementPage.expectAdminTabUsersVisible();
  });

  await test.step('Click — Click Roles & Access tab', async () => {
    await userManagementPage.clickAdminTabRbac();
  });

  await test.step('Assert visible — Roles & Access view visible', async () => {
    await rolesAndAccessPage.expectRolesDefinedInVisible();
  });

  await test.step('Click — Click User Management tab', async () => {
    await rolesAndAccessPage.clickAdminTabUsers();
  });

  await test.step('Assert visible — User table visible again', async () => {
    await userManagementPage.expectUserInformationVisible();
  });
});
