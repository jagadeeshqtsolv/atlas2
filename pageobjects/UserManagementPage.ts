import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class UserManagementPage {
  private static readonly L = {
    acmeCorporation: { strategy: 'text' as const, value: 'Acme Corporation', actionKind: 'text' as const },
    uKGAssist: { strategy: 'role' as const, value: 'UKG Assist', role: 'link', actionKind: 'link' as const },
    subscriptions: { strategy: 'role' as const, value: 'Subscriptions', role: 'link', actionKind: 'link' as const },
    implementations: { strategy: 'role' as const, value: 'Implementations', role: 'link', actionKind: 'link' as const },
    billings: { strategy: 'role' as const, value: 'Billings', role: 'link', actionKind: 'link' as const },
    support: { strategy: 'role' as const, value: 'Support', role: 'link', actionKind: 'link' as const },
    adoption: { strategy: 'role' as const, value: 'Adoption', role: 'link', actionKind: 'link' as const },
    admin: { strategy: 'role' as const, value: 'Admin', role: 'link', actionKind: 'link' as const },
    accountProfile: { strategy: 'role' as const, value: 'Account Profile', role: 'link', actionKind: 'link' as const },
    eJEmmaJohnsonPortal: { strategy: 'role' as const, value: 'EJ Emma Johnson Portal Administrator', role: 'link', actionKind: 'link' as const },
    signOut: { strategy: 'role' as const, value: 'Sign out', role: 'button', actionKind: 'button' as const },
    collapseSidebar: { strategy: 'role' as const, value: 'Collapse sidebar', role: 'button', actionKind: 'button' as const },
    adminTabUsers: { strategy: 'role' as const, value: 'User Management', role: 'button', actionKind: 'button' as const },
    adminTabRbac: { strategy: 'role' as const, value: 'Roles & Access', role: 'button', actionKind: 'button' as const },
    adminTabAudit: { strategy: 'role' as const, value: 'Audit Log', role: 'button', actionKind: 'button' as const },
    inviteModalClose: { strategy: 'role' as const, value: 'Close', role: 'button', actionKind: 'button' as const },
    emailAddress: { strategy: 'text' as const, value: 'Email address', actionKind: 'text' as const },
    inviteEmail: { strategy: 'testId' as const, value: 'invite-email-input', actionKind: 'textbox' as const },
    role: { strategy: 'text' as const, value: 'Role', actionKind: 'text' as const },
    inviteRoleSelect: { strategy: 'testId' as const, value: 'invite-role-select', actionKind: 'combobox' as const },
    inviteCancel: { strategy: 'role' as const, value: 'Cancel', role: 'button', actionKind: 'button' as const },
    inviteSend: { strategy: 'role' as const, value: 'Send', role: 'button', actionKind: 'button' as const },
    Users: { strategy: 'text' as const, value: '47 Users', actionKind: 'text' as const },
    usersSearch: { strategy: 'testId' as const, value: 'users-search-input', actionKind: 'textbox' as const },
    inviteUser: { strategy: 'role' as const, value: 'Invite user', role: 'button', actionKind: 'button' as const },
    userInformation: { strategy: 'text' as const, value: 'User information', actionKind: 'text' as const },
    role2: { strategy: 'text' as const, value: 'Role', actionKind: 'text' as const },
    status: { strategy: 'text' as const, value: 'Status', actionKind: 'text' as const },
    lastActive: { strategy: 'text' as const, value: 'Last active', actionKind: 'text' as const },
    portalAccess: { strategy: 'text' as const, value: 'Portal Access', actionKind: 'text' as const },
    usersPaginationPrevious: { strategy: 'role' as const, value: 'Previous page', role: 'button', actionKind: 'button' as const },
    usersPaginationPage1: { strategy: 'role' as const, value: '1', role: 'button', actionKind: 'button' as const },
    usersPaginationPage2: { strategy: 'role' as const, value: '2', role: 'button', actionKind: 'button' as const },
    usersPaginationPage3: { strategy: 'role' as const, value: '3', role: 'button', actionKind: 'button' as const },
    usersPaginationNext: { strategy: 'role' as const, value: 'Next page', role: 'button', actionKind: 'button' as const },
    sendFeedback: { strategy: 'role' as const, value: 'Send feedback', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAcmeCorporation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UserManagementPage.L.acmeCorporation));
  }

  async expectAcmeCorporationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.acmeCorporation), expected, timeoutMs);
  }

  async expectAcmeCorporationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.acmeCorporation), substring, timeoutMs);
  }

  async scrollAcmeCorporationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.acmeCorporation));
  }

  async clickUKGAssist(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.uKGAssist));
  }

  async doubleClickUKGAssist(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.uKGAssist));
  }

  async expectUKGAssistVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.uKGAssist), expected, timeoutMs);
  }

  async expectUKGAssistContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.uKGAssist), substring, timeoutMs);
  }

  async scrollUKGAssistIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.uKGAssist));
  }

  async clickSubscriptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.subscriptions));
  }

  async doubleClickSubscriptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.subscriptions));
  }

  async expectSubscriptionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.subscriptions), expected, timeoutMs);
  }

  async expectSubscriptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.subscriptions), substring, timeoutMs);
  }

  async scrollSubscriptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.subscriptions));
  }

  async clickImplementations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.implementations));
  }

  async doubleClickImplementations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.implementations));
  }

  async expectImplementationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.implementations), timeoutMs);
  }

  async expectImplementationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.implementations), timeoutMs);
  }

  async expectImplementationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.implementations), expected, timeoutMs);
  }

  async expectImplementationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.implementations), substring, timeoutMs);
  }

  async scrollImplementationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.implementations));
  }

  async clickBillings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.billings));
  }

  async doubleClickBillings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.billings));
  }

  async expectBillingsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.billings), timeoutMs);
  }

  async expectBillingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.billings), timeoutMs);
  }

  async expectBillingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.billings), expected, timeoutMs);
  }

  async expectBillingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.billings), substring, timeoutMs);
  }

  async scrollBillingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.billings));
  }

  async clickSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.support));
  }

  async doubleClickSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.support));
  }

  async expectSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.support), timeoutMs);
  }

  async expectSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.support), timeoutMs);
  }

  async expectSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.support), expected, timeoutMs);
  }

  async expectSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.support), substring, timeoutMs);
  }

  async scrollSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.support));
  }

  async clickAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.adoption));
  }

  async doubleClickAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.adoption));
  }

  async expectAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.adoption), timeoutMs);
  }

  async expectAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.adoption), timeoutMs);
  }

  async expectAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.adoption), expected, timeoutMs);
  }

  async expectAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.adoption), substring, timeoutMs);
  }

  async scrollAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.adoption));
  }

  async clickAdmin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.admin));
  }

  async doubleClickAdmin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.admin));
  }

  async expectAdminVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.admin), timeoutMs);
  }

  async expectAdminHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.admin), timeoutMs);
  }

  async expectAdminText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.admin), expected, timeoutMs);
  }

  async expectAdminContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.admin), substring, timeoutMs);
  }

  async scrollAdminIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.admin));
  }

  async clickAccountProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.accountProfile));
  }

  async doubleClickAccountProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.accountProfile));
  }

  async expectAccountProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.accountProfile), expected, timeoutMs);
  }

  async expectAccountProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.accountProfile), substring, timeoutMs);
  }

  async scrollAccountProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.accountProfile));
  }

  async clickEJEmmaJohnsonPortal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.eJEmmaJohnsonPortal));
  }

  async doubleClickEJEmmaJohnsonPortal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.eJEmmaJohnsonPortal), expected, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.eJEmmaJohnsonPortal), substring, timeoutMs);
  }

  async scrollEJEmmaJohnsonPortalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.eJEmmaJohnsonPortal));
  }

  async clickSignOut(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.signOut));
  }

  async doubleClickSignOut(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.signOut));
  }

  async expectSignOutVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.signOut), timeoutMs);
  }

  async expectSignOutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.signOut), timeoutMs);
  }

  async expectSignOutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.signOut), timeoutMs);
  }

  async expectSignOutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.signOut), timeoutMs);
  }

  async expectSignOutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.signOut), expected, timeoutMs);
  }

  async expectSignOutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.signOut), substring, timeoutMs);
  }

  async scrollSignOutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.signOut));
  }

  async clickCollapseSidebar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.collapseSidebar));
  }

  async doubleClickCollapseSidebar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.collapseSidebar));
  }

  async expectCollapseSidebarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.collapseSidebar), expected, timeoutMs);
  }

  async expectCollapseSidebarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.collapseSidebar), substring, timeoutMs);
  }

  async scrollCollapseSidebarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.collapseSidebar));
  }

  async clickAdminTabUsers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabUsers));
  }

  async doubleClickAdminTabUsers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabUsers));
  }

  async expectAdminTabUsersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.adminTabUsers), expected, timeoutMs);
  }

  async expectAdminTabUsersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.adminTabUsers), substring, timeoutMs);
  }

  async scrollAdminTabUsersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabUsers));
  }

  async clickAdminTabRbac(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabRbac));
  }

  async doubleClickAdminTabRbac(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabRbac));
  }

  async expectAdminTabRbacVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.adminTabRbac), expected, timeoutMs);
  }

  async expectAdminTabRbacContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.adminTabRbac), substring, timeoutMs);
  }

  async scrollAdminTabRbacIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabRbac));
  }

  async clickAdminTabAudit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabAudit));
  }

  async doubleClickAdminTabAudit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabAudit));
  }

  async expectAdminTabAuditVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.adminTabAudit), expected, timeoutMs);
  }

  async expectAdminTabAuditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.adminTabAudit), substring, timeoutMs);
  }

  async scrollAdminTabAuditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabAudit));
  }

  async clickInviteModalClose(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.inviteModalClose));
  }

  async doubleClickInviteModalClose(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.inviteModalClose));
  }

  async expectInviteModalCloseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.inviteModalClose), timeoutMs);
  }

  async expectInviteModalCloseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.inviteModalClose), timeoutMs);
  }

  async expectInviteModalCloseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.inviteModalClose), timeoutMs);
  }

  async expectInviteModalCloseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.inviteModalClose), timeoutMs);
  }

  async expectInviteModalCloseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.inviteModalClose), expected, timeoutMs);
  }

  async expectInviteModalCloseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.inviteModalClose), substring, timeoutMs);
  }

  async scrollInviteModalCloseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.inviteModalClose));
  }

  async getInnerTextEmailAddress(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UserManagementPage.L.emailAddress));
  }

  async expectEmailAddressVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.emailAddress), expected, timeoutMs);
  }

  async expectEmailAddressContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.emailAddress), substring, timeoutMs);
  }

  async scrollEmailAddressIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.emailAddress));
  }

  async fillInviteEmail(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, UserManagementPage.L.inviteEmail), value);
  }

  async clearInviteEmail(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, UserManagementPage.L.inviteEmail));
  }

  async typeTextInviteEmail(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, UserManagementPage.L.inviteEmail), value);
  }

  async expectInviteEmailVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.inviteEmail), timeoutMs);
  }

  async expectInviteEmailHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.inviteEmail), timeoutMs);
  }

  async expectInviteEmailEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.inviteEmail), timeoutMs);
  }

  async expectInviteEmailDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.inviteEmail), timeoutMs);
  }

  async expectInviteEmailValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.inviteEmail), expected, timeoutMs);
  }

  async expectInviteEmailFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.inviteEmail), timeoutMs);
  }

  async scrollInviteEmailIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.inviteEmail));
  }

  async getInnerTextRole(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UserManagementPage.L.role));
  }

  async expectRoleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.role), timeoutMs);
  }

  async expectRoleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.role), timeoutMs);
  }

  async expectRoleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.role), expected, timeoutMs);
  }

  async expectRoleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.role), substring, timeoutMs);
  }

  async scrollRoleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.role));
  }

  async selectInviteRoleSelect(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), value);
  }

  async expectInviteRoleSelectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), timeoutMs);
  }

  async expectInviteRoleSelectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), timeoutMs);
  }

  async expectInviteRoleSelectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), timeoutMs);
  }

  async expectInviteRoleSelectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), timeoutMs);
  }

  async expectInviteRoleSelectValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), expected, timeoutMs);
  }

  async expectInviteRoleSelectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), timeoutMs);
  }

  async scrollInviteRoleSelectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.inviteRoleSelect));
  }

  async clickInviteCancel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.inviteCancel));
  }

  async doubleClickInviteCancel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.inviteCancel));
  }

  async expectInviteCancelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.inviteCancel), timeoutMs);
  }

  async expectInviteCancelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.inviteCancel), timeoutMs);
  }

  async expectInviteCancelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.inviteCancel), timeoutMs);
  }

  async expectInviteCancelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.inviteCancel), timeoutMs);
  }

  async expectInviteCancelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.inviteCancel), expected, timeoutMs);
  }

  async expectInviteCancelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.inviteCancel), substring, timeoutMs);
  }

  async scrollInviteCancelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.inviteCancel));
  }

  async clickInviteSend(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.inviteSend));
  }

  async doubleClickInviteSend(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.inviteSend));
  }

  async expectInviteSendVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.inviteSend), timeoutMs);
  }

  async expectInviteSendHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.inviteSend), timeoutMs);
  }

  async expectInviteSendEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.inviteSend), timeoutMs);
  }

  async expectInviteSendDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.inviteSend), timeoutMs);
  }

  async expectInviteSendText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.inviteSend), expected, timeoutMs);
  }

  async expectInviteSendContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.inviteSend), substring, timeoutMs);
  }

  async scrollInviteSendIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.inviteSend));
  }

  async getInnerTextUsers(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UserManagementPage.L.Users));
  }

  async expectUsersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.Users), timeoutMs);
  }

  async expectUsersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.Users), timeoutMs);
  }

  async expectUsersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.Users), expected, timeoutMs);
  }

  async expectUsersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.Users), substring, timeoutMs);
  }

  async scrollUsersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.Users));
  }

  async fillUsersSearch(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, UserManagementPage.L.usersSearch), value);
  }

  async clearUsersSearch(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, UserManagementPage.L.usersSearch));
  }

  async typeTextUsersSearch(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, UserManagementPage.L.usersSearch), value);
  }

  async expectUsersSearchVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.usersSearch), timeoutMs);
  }

  async expectUsersSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.usersSearch), timeoutMs);
  }

  async expectUsersSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.usersSearch), timeoutMs);
  }

  async expectUsersSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.usersSearch), timeoutMs);
  }

  async expectUsersSearchValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.usersSearch), expected, timeoutMs);
  }

  async expectUsersSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.usersSearch), timeoutMs);
  }

  async scrollUsersSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.usersSearch));
  }

  async clickInviteUser(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.inviteUser));
  }

  async doubleClickInviteUser(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.inviteUser));
  }

  async expectInviteUserVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.inviteUser), timeoutMs);
  }

  async expectInviteUserHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.inviteUser), timeoutMs);
  }

  async expectInviteUserEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.inviteUser), timeoutMs);
  }

  async expectInviteUserDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.inviteUser), timeoutMs);
  }

  async expectInviteUserText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.inviteUser), expected, timeoutMs);
  }

  async expectInviteUserContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.inviteUser), substring, timeoutMs);
  }

  async scrollInviteUserIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.inviteUser));
  }

  async getInnerTextUserInformation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UserManagementPage.L.userInformation));
  }

  async expectUserInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.userInformation), timeoutMs);
  }

  async expectUserInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.userInformation), timeoutMs);
  }

  async expectUserInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.userInformation), expected, timeoutMs);
  }

  async expectUserInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.userInformation), substring, timeoutMs);
  }

  async scrollUserInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.userInformation));
  }

  async getInnerTextRole2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UserManagementPage.L.role2));
  }

  async expectRole2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.role2), timeoutMs);
  }

  async expectRole2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.role2), timeoutMs);
  }

  async expectRole2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.role2), expected, timeoutMs);
  }

  async expectRole2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.role2), substring, timeoutMs);
  }

  async scrollRole2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.role2));
  }

  async getInnerTextStatus(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UserManagementPage.L.status));
  }

  async expectStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.status), timeoutMs);
  }

  async expectStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.status), timeoutMs);
  }

  async expectStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.status), expected, timeoutMs);
  }

  async expectStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.status), substring, timeoutMs);
  }

  async scrollStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.status));
  }

  async getInnerTextLastActive(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UserManagementPage.L.lastActive));
  }

  async expectLastActiveVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.lastActive), timeoutMs);
  }

  async expectLastActiveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.lastActive), timeoutMs);
  }

  async expectLastActiveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.lastActive), expected, timeoutMs);
  }

  async expectLastActiveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.lastActive), substring, timeoutMs);
  }

  async scrollLastActiveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.lastActive));
  }

  async getInnerTextPortalAccess(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UserManagementPage.L.portalAccess));
  }

  async expectPortalAccessVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.portalAccess), timeoutMs);
  }

  async expectPortalAccessHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.portalAccess), timeoutMs);
  }

  async expectPortalAccessText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.portalAccess), expected, timeoutMs);
  }

  async expectPortalAccessContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.portalAccess), substring, timeoutMs);
  }

  async scrollPortalAccessIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.portalAccess));
  }

  async clickUsersPaginationPrevious(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious));
  }

  async doubleClickUsersPaginationPrevious(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious));
  }

  async expectUsersPaginationPreviousVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), timeoutMs);
  }

  async expectUsersPaginationPreviousHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), timeoutMs);
  }

  async expectUsersPaginationPreviousEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), timeoutMs);
  }

  async expectUsersPaginationPreviousDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), timeoutMs);
  }

  async expectUsersPaginationPreviousText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), expected, timeoutMs);
  }

  async expectUsersPaginationPreviousContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), substring, timeoutMs);
  }

  async scrollUsersPaginationPreviousIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious));
  }

  async clickUsersPaginationPage1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage1));
  }

  async doubleClickUsersPaginationPage1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage1));
  }

  async expectUsersPaginationPage1Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), timeoutMs);
  }

  async expectUsersPaginationPage1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), timeoutMs);
  }

  async expectUsersPaginationPage1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), timeoutMs);
  }

  async expectUsersPaginationPage1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), timeoutMs);
  }

  async expectUsersPaginationPage1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), expected, timeoutMs);
  }

  async expectUsersPaginationPage1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), substring, timeoutMs);
  }

  async scrollUsersPaginationPage1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage1));
  }

  async clickUsersPaginationPage2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage2));
  }

  async doubleClickUsersPaginationPage2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage2));
  }

  async expectUsersPaginationPage2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), timeoutMs);
  }

  async expectUsersPaginationPage2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), timeoutMs);
  }

  async expectUsersPaginationPage2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), timeoutMs);
  }

  async expectUsersPaginationPage2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), timeoutMs);
  }

  async expectUsersPaginationPage2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), expected, timeoutMs);
  }

  async expectUsersPaginationPage2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), substring, timeoutMs);
  }

  async scrollUsersPaginationPage2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage2));
  }

  async clickUsersPaginationPage3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage3));
  }

  async doubleClickUsersPaginationPage3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage3));
  }

  async expectUsersPaginationPage3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage3), timeoutMs);
  }

  async expectUsersPaginationPage3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.usersPaginationPage3), timeoutMs);
  }

  async expectUsersPaginationPage3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.usersPaginationPage3), timeoutMs);
  }

  async expectUsersPaginationPage3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.usersPaginationPage3), timeoutMs);
  }

  async expectUsersPaginationPage3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.usersPaginationPage3), expected, timeoutMs);
  }

  async expectUsersPaginationPage3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.usersPaginationPage3), substring, timeoutMs);
  }

  async scrollUsersPaginationPage3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage3));
  }

  async clickUsersPaginationNext(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationNext));
  }

  async doubleClickUsersPaginationNext(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationNext));
  }

  async expectUsersPaginationNextVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.usersPaginationNext), timeoutMs);
  }

  async expectUsersPaginationNextHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.usersPaginationNext), timeoutMs);
  }

  async expectUsersPaginationNextEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.usersPaginationNext), timeoutMs);
  }

  async expectUsersPaginationNextDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.usersPaginationNext), timeoutMs);
  }

  async expectUsersPaginationNextText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.usersPaginationNext), expected, timeoutMs);
  }

  async expectUsersPaginationNextContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.usersPaginationNext), substring, timeoutMs);
  }

  async scrollUsersPaginationNextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationNext));
  }

  async clickSendFeedback(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.sendFeedback));
  }

  async doubleClickSendFeedback(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.sendFeedback));
  }

  async expectSendFeedbackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.sendFeedback), expected, timeoutMs);
  }

  async expectSendFeedbackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.sendFeedback), substring, timeoutMs);
  }

  async scrollSendFeedbackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.sendFeedback));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }

  // ── Row-parameterized: userAccessToggle (row×20) ──
  async clickUserAccessToggle(row: number): Promise<void> {
    await clickWhenVisible(this.page.locator('[data-testid^="user-access-toggle-"]').nth(row - 1));
  }

  async doubleClickUserAccessToggle(row: number): Promise<void> {
    await doubleClickWhenVisible(this.page.locator('[data-testid^="user-access-toggle-"]').nth(row - 1));
  }

  async expectUserAccessToggleVisible(row: number, timeoutMs = 30_000): Promise<void> {
    await expectVisible(this.page.locator('[data-testid^="user-access-toggle-"]').nth(row - 1), timeoutMs);
  }

  async expectUserAccessToggleHidden(row: number, timeoutMs = 30_000): Promise<void> {
    await expectHidden(this.page.locator('[data-testid^="user-access-toggle-"]').nth(row - 1), timeoutMs);
  }

  async expectUserAccessToggleEnabled(row: number, timeoutMs = 30_000): Promise<void> {
    await expectEnabled(this.page.locator('[data-testid^="user-access-toggle-"]').nth(row - 1), timeoutMs);
  }

  async expectUserAccessToggleDisabled(row: number, timeoutMs = 30_000): Promise<void> {
    await expectDisabled(this.page.locator('[data-testid^="user-access-toggle-"]').nth(row - 1), timeoutMs);
  }


  async clickAcmeCorporation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.acmeCorporation));
  }

  async doubleClickAcmeCorporation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.acmeCorporation));
  }

  async longPressAcmeCorporation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.acmeCorporation));
  }

  async expectAcmeCorporationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.acmeCorporation), value, timeoutMs);
  }

  async expectAcmeCorporationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.acmeCorporation), count, timeoutMs);
  }

  async longPressUKGAssist(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.uKGAssist));
  }

  async expectUKGAssistValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.uKGAssist), value, timeoutMs);
  }

  async expectUKGAssistEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.uKGAssist), count, timeoutMs);
  }

  async longPressSubscriptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.subscriptions));
  }

  async expectSubscriptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.subscriptions), value, timeoutMs);
  }

  async expectSubscriptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.subscriptions), count, timeoutMs);
  }

  async longPressImplementations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.implementations));
  }

  async expectImplementationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.implementations), value, timeoutMs);
  }

  async expectImplementationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.implementations), timeoutMs);
  }

  async expectImplementationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.implementations), timeoutMs);
  }

  async expectImplementationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.implementations), timeoutMs);
  }

  async expectImplementationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.implementations), timeoutMs);
  }

  async expectImplementationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.implementations), timeoutMs);
  }

  async expectImplementationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.implementations), count, timeoutMs);
  }

  async longPressBillings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.billings));
  }

  async expectBillingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.billings), value, timeoutMs);
  }

  async expectBillingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.billings), timeoutMs);
  }

  async expectBillingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.billings), timeoutMs);
  }

  async expectBillingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.billings), timeoutMs);
  }

  async expectBillingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.billings), timeoutMs);
  }

  async expectBillingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.billings), timeoutMs);
  }

  async expectBillingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.billings), count, timeoutMs);
  }

  async longPressSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.support));
  }

  async expectSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.support), value, timeoutMs);
  }

  async expectSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.support), timeoutMs);
  }

  async expectSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.support), timeoutMs);
  }

  async expectSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.support), timeoutMs);
  }

  async expectSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.support), timeoutMs);
  }

  async expectSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.support), timeoutMs);
  }

  async expectSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.support), count, timeoutMs);
  }

  async longPressAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.adoption));
  }

  async expectAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.adoption), value, timeoutMs);
  }

  async expectAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.adoption), timeoutMs);
  }

  async expectAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.adoption), timeoutMs);
  }

  async expectAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.adoption), timeoutMs);
  }

  async expectAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.adoption), timeoutMs);
  }

  async expectAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.adoption), timeoutMs);
  }

  async expectAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.adoption), count, timeoutMs);
  }

  async longPressAdmin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.admin));
  }

  async expectAdminValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.admin), value, timeoutMs);
  }

  async expectAdminEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.admin), timeoutMs);
  }

  async expectAdminDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.admin), timeoutMs);
  }

  async expectAdminChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.admin), timeoutMs);
  }

  async expectAdminUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.admin), timeoutMs);
  }

  async expectAdminFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.admin), timeoutMs);
  }

  async expectAdminCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.admin), count, timeoutMs);
  }

  async longPressAccountProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.accountProfile));
  }

  async expectAccountProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.accountProfile), value, timeoutMs);
  }

  async expectAccountProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.accountProfile), count, timeoutMs);
  }

  async longPressEJEmmaJohnsonPortal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.eJEmmaJohnsonPortal), value, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.eJEmmaJohnsonPortal), count, timeoutMs);
  }

  async longPressSignOut(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.signOut));
  }

  async expectSignOutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.signOut), value, timeoutMs);
  }

  async expectSignOutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.signOut), timeoutMs);
  }

  async expectSignOutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.signOut), timeoutMs);
  }

  async expectSignOutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.signOut), timeoutMs);
  }

  async expectSignOutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.signOut), count, timeoutMs);
  }

  async longPressCollapseSidebar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.collapseSidebar));
  }

  async expectCollapseSidebarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.collapseSidebar), value, timeoutMs);
  }

  async expectCollapseSidebarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.collapseSidebar), count, timeoutMs);
  }

  async longPressAdminTabUsers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabUsers));
  }

  async expectAdminTabUsersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.adminTabUsers), value, timeoutMs);
  }

  async expectAdminTabUsersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.adminTabUsers), count, timeoutMs);
  }

  async longPressAdminTabRbac(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabRbac));
  }

  async expectAdminTabRbacValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.adminTabRbac), value, timeoutMs);
  }

  async expectAdminTabRbacChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.adminTabRbac), count, timeoutMs);
  }

  async longPressAdminTabAudit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabAudit));
  }

  async expectAdminTabAuditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.adminTabAudit), value, timeoutMs);
  }

  async expectAdminTabAuditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.adminTabAudit), count, timeoutMs);
  }

  async longPressInviteModalClose(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.inviteModalClose));
  }

  async expectInviteModalCloseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.inviteModalClose), value, timeoutMs);
  }

  async expectInviteModalCloseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.inviteModalClose), timeoutMs);
  }

  async expectInviteModalCloseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.inviteModalClose), timeoutMs);
  }

  async expectInviteModalCloseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.inviteModalClose), timeoutMs);
  }

  async expectInviteModalCloseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.inviteModalClose), count, timeoutMs);
  }

  async clickEmailAddress(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.emailAddress));
  }

  async doubleClickEmailAddress(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.emailAddress));
  }

  async longPressEmailAddress(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.emailAddress));
  }

  async expectEmailAddressValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.emailAddress), value, timeoutMs);
  }

  async expectEmailAddressEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.emailAddress), count, timeoutMs);
  }

  async expectInviteEmailText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.inviteEmail), expected, timeoutMs);
  }

  async expectInviteEmailContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.inviteEmail), substring, timeoutMs);
  }

  async expectInviteEmailChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.inviteEmail), timeoutMs);
  }

  async expectInviteEmailUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.inviteEmail), timeoutMs);
  }

  async expectInviteEmailCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.inviteEmail), count, timeoutMs);
  }

  async clickRole(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.role));
  }

  async doubleClickRole(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.role));
  }

  async longPressRole(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.role));
  }

  async expectRoleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.role), value, timeoutMs);
  }

  async expectRoleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.role), timeoutMs);
  }

  async expectRoleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.role), timeoutMs);
  }

  async expectRoleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.role), timeoutMs);
  }

  async expectRoleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.role), timeoutMs);
  }

  async expectRoleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.role), timeoutMs);
  }

  async expectRoleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.role), count, timeoutMs);
  }

  async expectInviteRoleSelectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), expected, timeoutMs);
  }

  async expectInviteRoleSelectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), substring, timeoutMs);
  }

  async expectInviteRoleSelectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), timeoutMs);
  }

  async expectInviteRoleSelectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), timeoutMs);
  }

  async expectInviteRoleSelectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), count, timeoutMs);
  }

  async longPressInviteCancel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.inviteCancel));
  }

  async expectInviteCancelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.inviteCancel), value, timeoutMs);
  }

  async expectInviteCancelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.inviteCancel), timeoutMs);
  }

  async expectInviteCancelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.inviteCancel), timeoutMs);
  }

  async expectInviteCancelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.inviteCancel), timeoutMs);
  }

  async expectInviteCancelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.inviteCancel), count, timeoutMs);
  }

  async longPressInviteSend(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.inviteSend));
  }

  async expectInviteSendValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.inviteSend), value, timeoutMs);
  }

  async expectInviteSendChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.inviteSend), timeoutMs);
  }

  async expectInviteSendUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.inviteSend), timeoutMs);
  }

  async expectInviteSendFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.inviteSend), timeoutMs);
  }

  async expectInviteSendCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.inviteSend), count, timeoutMs);
  }

  async clickUsers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.Users));
  }

  async doubleClickUsers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.Users));
  }

  async longPressUsers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.Users));
  }

  async expectUsersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.Users), value, timeoutMs);
  }

  async expectUsersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.Users), timeoutMs);
  }

  async expectUsersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.Users), timeoutMs);
  }

  async expectUsersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.Users), timeoutMs);
  }

  async expectUsersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.Users), timeoutMs);
  }

  async expectUsersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.Users), timeoutMs);
  }

  async expectUsersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.Users), count, timeoutMs);
  }

  async expectUsersSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.usersSearch), expected, timeoutMs);
  }

  async expectUsersSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.usersSearch), substring, timeoutMs);
  }

  async expectUsersSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.usersSearch), timeoutMs);
  }

  async expectUsersSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.usersSearch), timeoutMs);
  }

  async expectUsersSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.usersSearch), count, timeoutMs);
  }

  async longPressInviteUser(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.inviteUser));
  }

  async expectInviteUserValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.inviteUser), value, timeoutMs);
  }

  async expectInviteUserChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.inviteUser), timeoutMs);
  }

  async expectInviteUserUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.inviteUser), timeoutMs);
  }

  async expectInviteUserFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.inviteUser), timeoutMs);
  }

  async expectInviteUserCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.inviteUser), count, timeoutMs);
  }

  async clickUserInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.userInformation));
  }

  async doubleClickUserInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.userInformation));
  }

  async longPressUserInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.userInformation));
  }

  async expectUserInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.userInformation), value, timeoutMs);
  }

  async expectUserInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.userInformation), timeoutMs);
  }

  async expectUserInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.userInformation), timeoutMs);
  }

  async expectUserInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.userInformation), timeoutMs);
  }

  async expectUserInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.userInformation), timeoutMs);
  }

  async expectUserInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.userInformation), timeoutMs);
  }

  async expectUserInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.userInformation), count, timeoutMs);
  }

  async clickRole2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.role2));
  }

  async doubleClickRole2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.role2));
  }

  async longPressRole2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.role2));
  }

  async expectRole2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.role2), value, timeoutMs);
  }

  async expectRole2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.role2), timeoutMs);
  }

  async expectRole2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.role2), timeoutMs);
  }

  async expectRole2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.role2), timeoutMs);
  }

  async expectRole2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.role2), timeoutMs);
  }

  async expectRole2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.role2), timeoutMs);
  }

  async expectRole2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.role2), count, timeoutMs);
  }

  async clickStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.status));
  }

  async doubleClickStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.status));
  }

  async longPressStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.status));
  }

  async expectStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.status), value, timeoutMs);
  }

  async expectStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.status), timeoutMs);
  }

  async expectStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.status), timeoutMs);
  }

  async expectStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.status), timeoutMs);
  }

  async expectStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.status), timeoutMs);
  }

  async expectStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.status), timeoutMs);
  }

  async expectStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.status), count, timeoutMs);
  }

  async clickLastActive(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.lastActive));
  }

  async doubleClickLastActive(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.lastActive));
  }

  async longPressLastActive(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.lastActive));
  }

  async expectLastActiveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.lastActive), value, timeoutMs);
  }

  async expectLastActiveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.lastActive), timeoutMs);
  }

  async expectLastActiveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.lastActive), timeoutMs);
  }

  async expectLastActiveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.lastActive), timeoutMs);
  }

  async expectLastActiveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.lastActive), timeoutMs);
  }

  async expectLastActiveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.lastActive), timeoutMs);
  }

  async expectLastActiveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.lastActive), count, timeoutMs);
  }

  async clickPortalAccess(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.portalAccess));
  }

  async doubleClickPortalAccess(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.portalAccess));
  }

  async longPressPortalAccess(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.portalAccess));
  }

  async expectPortalAccessValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.portalAccess), value, timeoutMs);
  }

  async expectPortalAccessEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.portalAccess), timeoutMs);
  }

  async expectPortalAccessDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.portalAccess), timeoutMs);
  }

  async expectPortalAccessChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.portalAccess), timeoutMs);
  }

  async expectPortalAccessUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.portalAccess), timeoutMs);
  }

  async expectPortalAccessFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.portalAccess), timeoutMs);
  }

  async expectPortalAccessCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.portalAccess), count, timeoutMs);
  }

  async longPressUsersPaginationPrevious(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious));
  }

  async expectUsersPaginationPreviousValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), value, timeoutMs);
  }

  async expectUsersPaginationPreviousChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), timeoutMs);
  }

  async expectUsersPaginationPreviousUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), timeoutMs);
  }

  async expectUsersPaginationPreviousFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), timeoutMs);
  }

  async expectUsersPaginationPreviousCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), count, timeoutMs);
  }

  async longPressUsersPaginationPage1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage1));
  }

  async expectUsersPaginationPage1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), value, timeoutMs);
  }

  async expectUsersPaginationPage1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), timeoutMs);
  }

  async expectUsersPaginationPage1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), timeoutMs);
  }

  async expectUsersPaginationPage1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), timeoutMs);
  }

  async expectUsersPaginationPage1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), count, timeoutMs);
  }

  async longPressUsersPaginationPage2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage2));
  }

  async expectUsersPaginationPage2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), value, timeoutMs);
  }

  async expectUsersPaginationPage2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), timeoutMs);
  }

  async expectUsersPaginationPage2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), timeoutMs);
  }

  async expectUsersPaginationPage2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), timeoutMs);
  }

  async expectUsersPaginationPage2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), count, timeoutMs);
  }

  async longPressUsersPaginationPage3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage3));
  }

  async expectUsersPaginationPage3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.usersPaginationPage3), value, timeoutMs);
  }

  async expectUsersPaginationPage3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.usersPaginationPage3), timeoutMs);
  }

  async expectUsersPaginationPage3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.usersPaginationPage3), timeoutMs);
  }

  async expectUsersPaginationPage3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.usersPaginationPage3), timeoutMs);
  }

  async expectUsersPaginationPage3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.usersPaginationPage3), count, timeoutMs);
  }

  async longPressUsersPaginationNext(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationNext));
  }

  async expectUsersPaginationNextValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.usersPaginationNext), value, timeoutMs);
  }

  async expectUsersPaginationNextChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.usersPaginationNext), timeoutMs);
  }

  async expectUsersPaginationNextUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.usersPaginationNext), timeoutMs);
  }

  async expectUsersPaginationNextFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.usersPaginationNext), timeoutMs);
  }

  async expectUsersPaginationNextCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.usersPaginationNext), count, timeoutMs);
  }

  async longPressSendFeedback(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.sendFeedback));
  }

  async expectSendFeedbackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.sendFeedback), value, timeoutMs);
  }

  async expectSendFeedbackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.sendFeedback), count, timeoutMs);
  }

}
