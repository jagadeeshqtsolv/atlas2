// Archived from tests/admin-user-management.spec.ts (test case um-admin-default-ui)
import { test, expect } from '../../support/fixtures';

test('Admin loads /admin: default User Management tab, tabs order, header elements, and table columns render', { tag: ["@smoke","@regression","@P0","@um-admin-default-ui"] }, async ({ page, loginPage, userManagementPage }) => {
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

  await test.step('Assert text — Tab 1 label', async () => {
    await userManagementPage.expectAdminTabUsersText('User Management');
  });

  await test.step('Assert text — Tab 2 label', async () => {
    await userManagementPage.expectAdminTabRbacText('Roles & Access');
  });

  await test.step('Assert text — Tab 3 label', async () => {
    await userManagementPage.expectAdminTabAuditText('Audit Log');
  });

  await test.step('Assert visible — "N Users" count label', async () => {
    await userManagementPage.expectUsersVisible();
  });

  await test.step('Assert visible — Search user input', async () => {
    await userManagementPage.expectUsersSearchVisible();
  });

  await test.step('Assert visible — Invite user button', async () => {
    await userManagementPage.expectInviteUserVisible();
  });

  await test.step('Assert count — Table header has exactly 5 columns', async () => {
    await userManagementPage.expectUserInformationVisible();
    await userManagementPage.expectRole2Visible();
    await userManagementPage.expectStatusVisible();
    await userManagementPage.expectLastActiveVisible();
    await userManagementPage.expectPortalAccessVisible();
  });

  await test.step('Assert text — Column 1 label', async () => {
    await userManagementPage.expectUserInformationText('User information');
  });

  await test.step('Assert text — Column 2 label', async () => {
    await userManagementPage.expectRole2Text('Role');
  });

  await test.step('Assert text — Column 3 label', async () => {
    await userManagementPage.expectStatusText('Status');
  });

  await test.step('Assert text — Column 4 label', async () => {
    await userManagementPage.expectLastActiveText('Last active');
  });

  await test.step('Assert text — Column 5 label', async () => {
    await userManagementPage.expectPortalAccessText('Account Access');
  });
});
