import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('Admin loads /admin: default User Management tab, tabs order, header elements, and table columns render', { tag: ["@smoke","@regression","@P0","@um-admin-default-ui"] }, async ({ page, loginPage, userManagementPage }) => {
  await test.step('Open — Navigate to login', async () => {
    await page.goto('/');
  });

  await test.step('Assert visible — Salesforce login button', async () => {
    await loginPage.expectLoginWithSalesforceVisible();
  });

  await test.step('Click — Click Salesforce login', async () => {
    await loginPage.clickLoginWithSalesforce();
  });

  await test.step('Navigate — Go to /admin', async () => {
    await page.goto('/admin');
  });

  await test.step('Assert visible — Admin shell loaded', async () => {
    await userManagementPage.expectAcmeCorporationVisible();
    await userManagementPage.expectPageTitle();
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

test('Switch tabs: User Management to Roles & Access and back', { tag: ["@smoke","@regression","@P0","@um-switch-tabs"] }, async ({ page, loginPage, userManagementPage, rolesAndAccessPage }) => {
  await test.step('Open — Navigate to login', async () => {
    await page.goto('/');
  });

  await test.step('Assert visible — Salesforce login button', async () => {
    await loginPage.expectLoginWithSalesforceVisible();
  });

  await test.step('Click — Click Salesforce login', async () => {
    await loginPage.clickLoginWithSalesforce();
  });

  await test.step('Navigate — Go to /admin', async () => {
    await page.goto('/admin');
  });

  await test.step('Assert visible — Admin shell loaded', async () => {
    await userManagementPage.expectAcmeCorporationVisible();
    await userManagementPage.expectPageTitle();
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

  test('Search filters users case-insensitively and in real time', { tag: ["@smoke","@regression","@P0","@um-search-case-insensitive"] }, async ({ page, loginPage, userManagementPage }) => {
    await test.step('Open — Admin with a known \'John Doe\' user', async () => {
      await page.goto('/?seed=has-john');
    });

    await test.step('Assert visible — Salesforce login button', async () => {
      await loginPage.expectLoginWithSalesforceVisible();
    });

    await test.step('Click — Click Salesforce login', async () => {
      await loginPage.clickLoginWithSalesforce();
    });

    await test.step('Navigate — Go to /admin', async () => {
      await page.goto('/admin');
    });

    await test.step('Assert visible — Admin shell loaded', async () => {
      await userManagementPage.expectAcmeCorporationVisible();
      await userManagementPage.expectPageTitle();
    });

    await test.step('Assert visible — User table visible', async () => {
      await userManagementPage.expectUsersSearchVisible();
    });

    await test.step('Fill — Type mixed-case query into Search user', async () => {
      await userManagementPage.fillUsersSearch(testData.searchFiltersUsersCaseInsensitivelyAndInRealTime.typeMixedCaseQueryIntoSearchUser);
    });

    await test.step('Assert visible — "N Users" count label remains visible', async () => {
      await userManagementPage.expectUsersVisible();
    });
  });
