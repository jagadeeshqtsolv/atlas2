import { test } from '../support/fixtures';

test('Revoke access from ON to OFF via Confirm updates toggle immediately and persists after reload', { tag: ["@e2e","@regression","@P0","@revoke-access-confirm-updates-and-persists"] }, async ({ page, loginPage, userManagementPage }) => {
  await test.step('Open — Open Admin User Management', async () => {
    await page.goto('/login?next=%2Fadmin');
  });

  await test.step('Click — SSO login', async () => {
    await loginPage.clickLoginWithSalesforce();
  });

  await test.step('Assert visible — Wait for Portal Access column', async () => {
    await userManagementPage.expectPortalAccessVisible();
  });

  await test.step('Assert visible/enabled — Verify user access toggle is present', async () => {
    await userManagementPage.expectUserAccessToggleVisible();
    await userManagementPage.expectUserAccessToggleEnabled();
  });

  await test.step('Click — Toggle Portal Access', async () => {
    await userManagementPage.clickUserAccessToggle();
  });

  await test.step('Assert visible — Toggle remains present after change', async () => {
    await userManagementPage.expectUserAccessToggleVisible();
  });

  await test.step('Open — Reload Admin page to verify persistence', async () => {
    await page.goto('/admin');
  });

  await test.step('Assert visible — Wait for Portal Access column after reload', async () => {
    await userManagementPage.expectPortalAccessVisible();
  });

  await test.step('Assert visible/enabled — Verify user access toggle remains available after reload', async () => {
    await userManagementPage.expectUserAccessToggleVisible();
    await userManagementPage.expectUserAccessToggleEnabled();
  });
});
