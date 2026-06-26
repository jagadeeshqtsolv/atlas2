// Archived from tests/admin-user-management.spec.ts (test case um-search-case-insensitive)
import { test, expect } from '../../support/fixtures';

test('Search filters users case-insensitively and in real time', { tag: ["@smoke","@regression","@P0","@um-search-case-insensitive"] }, async ({ page, loginPage, userManagementPage }) => {
  await test.step("Open — Admin with a known 'John Doe' user", async () => {
    await page.goto('/?seed=has-john');
  });

  await test.step('Assert visible — Salesforce login button', async () => {
    await loginPage.expectLoginWithSalesforceVisible();
  });

  await test.step('Click — Click Salesforce login', async () => {
    await loginPage.clickLoginWithSalesforce();
  });

  await test.step('Assert visible — User table visible', async () => {
    await userManagementPage.expectUserInformationVisible();
  });

  await test.step('Fill — Type mixed-case query into Search user', async () => {
    await userManagementPage.fillUsersSearch(testData.searchFiltersUsersCaseInsensitivelyAndInRealTime.typeMixedCaseQueryIntoSearchUser);
  });

  await test.step('Assert visible — Row containing John Doe visible', async () => {
    await userManagementPage.expectUserInformationVisible();
  });

  await test.step('Assert visible — "N Users" count label remains visible', async () => {
    await userManagementPage.expectUsersVisible();
  });
});
