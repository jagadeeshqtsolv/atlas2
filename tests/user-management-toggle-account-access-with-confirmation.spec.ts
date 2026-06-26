import testData from '../testdata/test-data.json';
import { test, expect } from '../support/fixtures';

test('Revoke access from ON to OFF via Confirm updates toggle immediately and persists after reload', { tag: ["@e2e","@regression","@P0","@revoke-access-confirm-updates-and-persists"] }, async ({ page, loginPage, userManagementPage }) => {
  await test.step('Open — Open Admin User Management', async () => {
    await page.goto('/admin');
  });

  await test.step('Click — SSO login', async () => {
    await loginPage.clickLoginWithSalesforce();
  });

  await test.step('Assert visible — Wait for Account Access column', async () => {
    await userManagementPage.expectAccountAccessHeaderVisible();
  });

  await test.step('Assert checked — Verify target user is ON', async () => {
    await userManagementPage.expectAccountAccessToggleUserOnExampleComChecked();
  });

  await test.step('Click — Click ON toggle', async () => {
    await userManagementPage.clickAccountAccessToggleUserOnExampleCom();
  });

  await test.step('Assert visible — Wait for confirmation modal', async () => {
    await userManagementPage.expectAccountAccessConfirmModalVisible();
  });

  await test.step('Click — Confirm change', async () => {
    await userManagementPage.clickAccountAccessConfirmConfirm();
  });

  await test.step('Assert hidden — Wait for modal to close', async () => {
    await userManagementPage.expectAccountAccessConfirmModalHidden();
  });

  await test.step('Assert unchecked — Verify toggle changed to OFF', async () => {
    await userManagementPage.expectAccountAccessToggleUserOnExampleComUnchecked();
  });

  await test.step('Open — Reload Admin page to verify persistence', async () => {
    await page.goto('/admin');
  });

  await test.step('Assert visible — Wait for Account Access column', async () => {
    await userManagementPage.expectAccountAccessHeaderVisible();
  });

  await test.step('Assert unchecked — Verify toggle remains OFF after reload', async () => {
    await userManagementPage.expectAccountAccessToggleUserOnExampleComUnchecked();
  });
});
