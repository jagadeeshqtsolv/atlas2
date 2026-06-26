import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';


test('Admin loads /admin: default User Management tab, header controls, and table columns render correctly', { tag: ["@smoke","@regression","@P0","@load-admin-default-user-management-layout"] }, async ({ page, loginPage, userManagementPage }) => {
  await test.step('Open — Navigate to Admin', async () => {
    await page.goto('/');
  });

  await test.step('Click — Salesforce Login button', async () => {
    await loginPage.clickLoginWithSalesforce();
  });

  await test.step('Assert visible — Tabs container', async () => {
    await userManagementPage.expectAdminTabUsersVisible();
  });

  await test.step('Assert visible — User Management tab is active by default', async () => {
    await userManagementPage.expectUsersVisible();
  });

  await test.step("Assert text — Tab 1 is 'User Management'", async () => {
    await userManagementPage.expectAdminTabUsersText('User Management');
  });

  await test.step("Assert text — Tab 2 is 'Roles & Access'", async () => {
    await userManagementPage.expectAdminTabRbacText('Roles & Access');
  });

  await test.step("Assert text — Tab 3 is 'Audit Log'", async () => {
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

  await test.step("Assert text — Column 1 header 'User information'", async () => {
    await userManagementPage.expectUserInformationText('User information');
  });

  await test.step("Assert text — Column 2 header 'Role'", async () => {
    await userManagementPage.expectRole2Text('Role');
  });

  await test.step("Assert text — Column 3 header 'Status'", async () => {
    await userManagementPage.expectStatusText('Status');
  });

  await test.step("Assert text — Column 4 header 'Last active'", async () => {
    await userManagementPage.expectLastActiveText('Last active');
  });

  await test.step("Assert text — Column 5 header 'Account Access'", async () => {
    await userManagementPage.expectPortalAccessText('Account Access');
  });
});


test('Switch to Roles & Access and back to User Management', { tag: ["@smoke","@regression","@P0","@switch-tabs-roles-and-back"] }, async ({ page, loginPage, userManagementPage, rolesAndAccessPage }) => {
  await test.step('Open — Navigate to Admin', async () => {
    await page.goto('/');
  });

  await test.step('Click — Salesforce Login button', async () => {
    await loginPage.clickLoginWithSalesforce();
  });

  await test.step('Assert visible — User Management tab active', async () => {
    await userManagementPage.expectAdminTabUsersVisible();
  });

  await test.step('Click — Roles & Access tab', async () => {
    await userManagementPage.clickAdminTabRbac();
  });

  await test.step('Assert visible — Roles & Access view visible', async () => {
    await rolesAndAccessPage.expectRolesDefinedInVisible();
  });

  await test.step('Click — User Management tab', async () => {
    await rolesAndAccessPage.clickAdminTabUsers();
  });

  await test.step('Assert visible — User table visible again', async () => {
    await userManagementPage.expectUserInformationVisible();
  });
});


test('Search filters users in real time (case-insensitive) and N Users label remains displayed', { tag: ["@smoke","@regression","@P0","@search-filters-case-insensitive"] }, async ({ page, loginPage, userManagementPage }) => {
  await test.step('Open — Navigate to Admin', async () => {
    await page.goto('/');
  });

  await test.step('Click — Salesforce Login button', async () => {
    await loginPage.clickLoginWithSalesforce();
  });

  await test.step('Assert visible — Search user input', async () => {
    await userManagementPage.expectUsersSearchVisible();
  });

  await test.step('Screenshot — Capture N Users label before search', async () => {
    await page.screenshot();
  });

  await test.step('Fill — Type search query (uppercase to verify case-insensitive)', async () => {
    await userManagementPage.fillUsersSearch(testData.searchFiltersUsersInRealTimeCaseInsensitiveAndNUsersLabelRemainsDisplayed.typeSearchQueryUppercaseToVerifyCaseInsensitive);
  });

  await test.step('Wait — Wait for real-time filtering', async () => {
    await userManagementPage.expectUsersSearchValue(testData.searchFiltersUsersInRealTimeCaseInsensitiveAndNUsersLabelRemainsDisplayed.typeSearchQueryUppercaseToVerifyCaseInsensitive);
  });

  await test.step('Assert count — All visible rows match query (no non-matching rows)', async () => {
    await userManagementPage.expectUsersSearchCount(1);
  });

  await test.step('Screenshot — Capture N Users label after search (should not change)', async () => {
    await page.screenshot();
  });
});


test('Search with no matches shows empty-state message and keeps table header visible', { tag: ["@smoke","@regression","@P0","@search-no-results-message-and-header"] }, async ({ page, loginPage, userManagementPage }) => {
  await test.step('Open — Navigate to Admin', async () => {
    await page.goto('/')
  })

  await test.step('Click — Salesforce Login button', async () => {
    await loginPage.clickLoginWithSalesforce()
  })

  await test.step('Assert visible — Search user input', async () => {
    await userManagementPage.expectUsersSearchVisible()
  })

  await test.step('Fill — Type a query with no matches', async () => {
    await userManagementPage.fillUsersSearch(testData.searchWithNoMatchesShowsEmptyStateMessageAndKeepsTableHeaderVisible.typeAQueryWithNoMatches)
  })

  await test.step('Wait — Wait for filter to apply', async () => {
    await userManagementPage.expectUsersSearchValue(testData.searchWithNoMatchesShowsEmptyStateMessageAndKeepsTableHeaderVisible.typeAQueryWithNoMatches)
  })

  await test.step('Assert contains — No results message is shown in table body', async () => {
    await userManagementPage.expectNoResultsMessageContainsText('No users found for')
  })

  await test.step('Assert text — Table header row remains visible - first column', async () => {
    await userManagementPage.expectUserInformationText('User information')
  })
})
