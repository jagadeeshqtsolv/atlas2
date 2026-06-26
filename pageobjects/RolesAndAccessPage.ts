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

export class RolesAndAccessPage {
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
    RolesDefinedIn: { strategy: 'text' as const, value: '4 Roles defined in your organization', actionKind: 'text' as const },
    clickARoleTo: { strategy: 'text' as const, value: 'Click a role to view permissions', actionKind: 'text' as const },
    roleCard1: { strategy: 'role' as const, value: 'Portal Administrator 93', role: 'button', actionKind: 'button' as const },
    roleCard2: { strategy: 'role' as const, value: 'Business Owner 73', role: 'button', actionKind: 'button' as const },
    roleCard3: { strategy: 'role' as const, value: 'Billing & Renewals User 61', role: 'button', actionKind: 'button' as const },
    roleCard4: { strategy: 'role' as const, value: 'Read Only Viewer 53', role: 'button', actionKind: 'button' as const },
    sendFeedback: { strategy: 'role' as const, value: 'Send feedback', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAcmeCorporation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RolesAndAccessPage.L.acmeCorporation));
  }

  async expectAcmeCorporationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.acmeCorporation), expected, timeoutMs);
  }

  async expectAcmeCorporationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.acmeCorporation), substring, timeoutMs);
  }

  async scrollAcmeCorporationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.acmeCorporation));
  }

  async clickUKGAssist(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.uKGAssist));
  }

  async doubleClickUKGAssist(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.uKGAssist));
  }

  async expectUKGAssistVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.uKGAssist), expected, timeoutMs);
  }

  async expectUKGAssistContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.uKGAssist), substring, timeoutMs);
  }

  async scrollUKGAssistIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.uKGAssist));
  }

  async clickSubscriptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.subscriptions));
  }

  async doubleClickSubscriptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.subscriptions));
  }

  async expectSubscriptionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.subscriptions), expected, timeoutMs);
  }

  async expectSubscriptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.subscriptions), substring, timeoutMs);
  }

  async scrollSubscriptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.subscriptions));
  }

  async clickImplementations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.implementations));
  }

  async doubleClickImplementations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.implementations));
  }

  async expectImplementationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.implementations), timeoutMs);
  }

  async expectImplementationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.implementations), timeoutMs);
  }

  async expectImplementationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.implementations), expected, timeoutMs);
  }

  async expectImplementationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.implementations), substring, timeoutMs);
  }

  async scrollImplementationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.implementations));
  }

  async clickBillings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.billings));
  }

  async doubleClickBillings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.billings));
  }

  async expectBillingsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.billings), timeoutMs);
  }

  async expectBillingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.billings), timeoutMs);
  }

  async expectBillingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.billings), expected, timeoutMs);
  }

  async expectBillingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.billings), substring, timeoutMs);
  }

  async scrollBillingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.billings));
  }

  async clickSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.support));
  }

  async doubleClickSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.support));
  }

  async expectSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.support), timeoutMs);
  }

  async expectSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.support), timeoutMs);
  }

  async expectSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.support), expected, timeoutMs);
  }

  async expectSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.support), substring, timeoutMs);
  }

  async scrollSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.support));
  }

  async clickAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.adoption));
  }

  async doubleClickAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.adoption));
  }

  async expectAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.adoption), timeoutMs);
  }

  async expectAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.adoption), timeoutMs);
  }

  async expectAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.adoption), expected, timeoutMs);
  }

  async expectAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.adoption), substring, timeoutMs);
  }

  async scrollAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.adoption));
  }

  async clickAdmin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.admin));
  }

  async doubleClickAdmin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.admin));
  }

  async expectAdminVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.admin), timeoutMs);
  }

  async expectAdminHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.admin), timeoutMs);
  }

  async expectAdminText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.admin), expected, timeoutMs);
  }

  async expectAdminContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.admin), substring, timeoutMs);
  }

  async scrollAdminIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.admin));
  }

  async clickAccountProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.accountProfile));
  }

  async doubleClickAccountProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.accountProfile));
  }

  async expectAccountProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.accountProfile), expected, timeoutMs);
  }

  async expectAccountProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.accountProfile), substring, timeoutMs);
  }

  async scrollAccountProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.accountProfile));
  }

  async clickEJEmmaJohnsonPortal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.eJEmmaJohnsonPortal));
  }

  async doubleClickEJEmmaJohnsonPortal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.eJEmmaJohnsonPortal), expected, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.eJEmmaJohnsonPortal), substring, timeoutMs);
  }

  async scrollEJEmmaJohnsonPortalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.eJEmmaJohnsonPortal));
  }

  async clickSignOut(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.signOut));
  }

  async doubleClickSignOut(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.signOut));
  }

  async expectSignOutVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.signOut), timeoutMs);
  }

  async expectSignOutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.signOut), timeoutMs);
  }

  async expectSignOutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.signOut), timeoutMs);
  }

  async expectSignOutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.signOut), timeoutMs);
  }

  async expectSignOutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.signOut), expected, timeoutMs);
  }

  async expectSignOutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.signOut), substring, timeoutMs);
  }

  async scrollSignOutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.signOut));
  }

  async clickCollapseSidebar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.collapseSidebar));
  }

  async doubleClickCollapseSidebar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.collapseSidebar));
  }

  async expectCollapseSidebarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.collapseSidebar), expected, timeoutMs);
  }

  async expectCollapseSidebarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.collapseSidebar), substring, timeoutMs);
  }

  async scrollCollapseSidebarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.collapseSidebar));
  }

  async clickAdminTabUsers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.adminTabUsers));
  }

  async doubleClickAdminTabUsers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.adminTabUsers));
  }

  async expectAdminTabUsersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.adminTabUsers), expected, timeoutMs);
  }

  async expectAdminTabUsersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.adminTabUsers), substring, timeoutMs);
  }

  async scrollAdminTabUsersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.adminTabUsers));
  }

  async clickAdminTabRbac(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.adminTabRbac));
  }

  async doubleClickAdminTabRbac(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.adminTabRbac));
  }

  async expectAdminTabRbacVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.adminTabRbac), expected, timeoutMs);
  }

  async expectAdminTabRbacContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.adminTabRbac), substring, timeoutMs);
  }

  async scrollAdminTabRbacIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.adminTabRbac));
  }

  async clickAdminTabAudit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.adminTabAudit));
  }

  async doubleClickAdminTabAudit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.adminTabAudit));
  }

  async expectAdminTabAuditVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.adminTabAudit), expected, timeoutMs);
  }

  async expectAdminTabAuditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.adminTabAudit), substring, timeoutMs);
  }

  async scrollAdminTabAuditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.adminTabAudit));
  }

  async getInnerTextRolesDefinedIn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RolesAndAccessPage.L.RolesDefinedIn));
  }

  async expectRolesDefinedInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.RolesDefinedIn), timeoutMs);
  }

  async expectRolesDefinedInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.RolesDefinedIn), timeoutMs);
  }

  async expectRolesDefinedInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.RolesDefinedIn), expected, timeoutMs);
  }

  async expectRolesDefinedInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.RolesDefinedIn), substring, timeoutMs);
  }

  async scrollRolesDefinedInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.RolesDefinedIn));
  }

  async getInnerTextClickARoleTo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo));
  }

  async expectClickARoleToVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), timeoutMs);
  }

  async expectClickARoleToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), timeoutMs);
  }

  async expectClickARoleToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), expected, timeoutMs);
  }

  async expectClickARoleToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), substring, timeoutMs);
  }

  async scrollClickARoleToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo));
  }

  async clickRoleCard1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard1));
  }

  async doubleClickRoleCard1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard1));
  }

  async expectRoleCard1Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard1), timeoutMs);
  }

  async expectRoleCard1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.roleCard1), timeoutMs);
  }

  async expectRoleCard1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.roleCard1), timeoutMs);
  }

  async expectRoleCard1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.roleCard1), timeoutMs);
  }

  async expectRoleCard1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.roleCard1), expected, timeoutMs);
  }

  async expectRoleCard1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.roleCard1), substring, timeoutMs);
  }

  async scrollRoleCard1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard1));
  }

  async clickRoleCard2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard2));
  }

  async doubleClickRoleCard2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard2));
  }

  async expectRoleCard2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard2), timeoutMs);
  }

  async expectRoleCard2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.roleCard2), timeoutMs);
  }

  async expectRoleCard2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.roleCard2), timeoutMs);
  }

  async expectRoleCard2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.roleCard2), timeoutMs);
  }

  async expectRoleCard2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.roleCard2), expected, timeoutMs);
  }

  async expectRoleCard2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.roleCard2), substring, timeoutMs);
  }

  async scrollRoleCard2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard2));
  }

  async clickRoleCard3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard3));
  }

  async doubleClickRoleCard3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard3));
  }

  async expectRoleCard3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard3), timeoutMs);
  }

  async expectRoleCard3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.roleCard3), timeoutMs);
  }

  async expectRoleCard3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.roleCard3), timeoutMs);
  }

  async expectRoleCard3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.roleCard3), timeoutMs);
  }

  async expectRoleCard3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.roleCard3), expected, timeoutMs);
  }

  async expectRoleCard3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.roleCard3), substring, timeoutMs);
  }

  async scrollRoleCard3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard3));
  }

  async clickRoleCard4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard4));
  }

  async doubleClickRoleCard4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard4));
  }

  async expectRoleCard4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard4), timeoutMs);
  }

  async expectRoleCard4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.roleCard4), timeoutMs);
  }

  async expectRoleCard4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.roleCard4), timeoutMs);
  }

  async expectRoleCard4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.roleCard4), timeoutMs);
  }

  async expectRoleCard4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.roleCard4), expected, timeoutMs);
  }

  async expectRoleCard4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.roleCard4), substring, timeoutMs);
  }

  async scrollRoleCard4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard4));
  }

  async clickSendFeedback(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.sendFeedback));
  }

  async doubleClickSendFeedback(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.sendFeedback));
  }

  async expectSendFeedbackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.sendFeedback), expected, timeoutMs);
  }

  async expectSendFeedbackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.sendFeedback), substring, timeoutMs);
  }

  async scrollSendFeedbackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.sendFeedback));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async clickAcmeCorporation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.acmeCorporation));
  }

  async doubleClickAcmeCorporation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.acmeCorporation));
  }

  async longPressAcmeCorporation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.acmeCorporation));
  }

  async expectAcmeCorporationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.acmeCorporation), value, timeoutMs);
  }

  async expectAcmeCorporationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.acmeCorporation), count, timeoutMs);
  }

  async longPressUKGAssist(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.uKGAssist));
  }

  async expectUKGAssistValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.uKGAssist), value, timeoutMs);
  }

  async expectUKGAssistEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.uKGAssist), count, timeoutMs);
  }

  async longPressSubscriptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.subscriptions));
  }

  async expectSubscriptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.subscriptions), value, timeoutMs);
  }

  async expectSubscriptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.subscriptions), count, timeoutMs);
  }

  async longPressImplementations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.implementations));
  }

  async expectImplementationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.implementations), value, timeoutMs);
  }

  async expectImplementationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.implementations), timeoutMs);
  }

  async expectImplementationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.implementations), timeoutMs);
  }

  async expectImplementationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.implementations), timeoutMs);
  }

  async expectImplementationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.implementations), timeoutMs);
  }

  async expectImplementationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.implementations), timeoutMs);
  }

  async expectImplementationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.implementations), count, timeoutMs);
  }

  async longPressBillings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.billings));
  }

  async expectBillingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.billings), value, timeoutMs);
  }

  async expectBillingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.billings), timeoutMs);
  }

  async expectBillingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.billings), timeoutMs);
  }

  async expectBillingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.billings), timeoutMs);
  }

  async expectBillingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.billings), timeoutMs);
  }

  async expectBillingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.billings), timeoutMs);
  }

  async expectBillingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.billings), count, timeoutMs);
  }

  async longPressSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.support));
  }

  async expectSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.support), value, timeoutMs);
  }

  async expectSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.support), timeoutMs);
  }

  async expectSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.support), timeoutMs);
  }

  async expectSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.support), timeoutMs);
  }

  async expectSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.support), timeoutMs);
  }

  async expectSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.support), timeoutMs);
  }

  async expectSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.support), count, timeoutMs);
  }

  async longPressAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.adoption));
  }

  async expectAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.adoption), value, timeoutMs);
  }

  async expectAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.adoption), timeoutMs);
  }

  async expectAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.adoption), timeoutMs);
  }

  async expectAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.adoption), timeoutMs);
  }

  async expectAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.adoption), timeoutMs);
  }

  async expectAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.adoption), timeoutMs);
  }

  async expectAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.adoption), count, timeoutMs);
  }

  async longPressAdmin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.admin));
  }

  async expectAdminValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.admin), value, timeoutMs);
  }

  async expectAdminEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.admin), timeoutMs);
  }

  async expectAdminDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.admin), timeoutMs);
  }

  async expectAdminChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.admin), timeoutMs);
  }

  async expectAdminUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.admin), timeoutMs);
  }

  async expectAdminFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.admin), timeoutMs);
  }

  async expectAdminCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.admin), count, timeoutMs);
  }

  async longPressAccountProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.accountProfile));
  }

  async expectAccountProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.accountProfile), value, timeoutMs);
  }

  async expectAccountProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.accountProfile), count, timeoutMs);
  }

  async longPressEJEmmaJohnsonPortal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.eJEmmaJohnsonPortal), value, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.eJEmmaJohnsonPortal), count, timeoutMs);
  }

  async longPressSignOut(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.signOut));
  }

  async expectSignOutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.signOut), value, timeoutMs);
  }

  async expectSignOutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.signOut), timeoutMs);
  }

  async expectSignOutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.signOut), timeoutMs);
  }

  async expectSignOutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.signOut), timeoutMs);
  }

  async expectSignOutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.signOut), count, timeoutMs);
  }

  async longPressCollapseSidebar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.collapseSidebar));
  }

  async expectCollapseSidebarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.collapseSidebar), value, timeoutMs);
  }

  async expectCollapseSidebarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.collapseSidebar), count, timeoutMs);
  }

  async longPressAdminTabUsers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.adminTabUsers));
  }

  async expectAdminTabUsersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.adminTabUsers), value, timeoutMs);
  }

  async expectAdminTabUsersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.adminTabUsers), count, timeoutMs);
  }

  async longPressAdminTabRbac(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.adminTabRbac));
  }

  async expectAdminTabRbacValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.adminTabRbac), value, timeoutMs);
  }

  async expectAdminTabRbacChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.adminTabRbac), count, timeoutMs);
  }

  async longPressAdminTabAudit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.adminTabAudit));
  }

  async expectAdminTabAuditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.adminTabAudit), value, timeoutMs);
  }

  async expectAdminTabAuditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.adminTabAudit), count, timeoutMs);
  }

  async clickRolesDefinedIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.RolesDefinedIn));
  }

  async doubleClickRolesDefinedIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.RolesDefinedIn));
  }

  async longPressRolesDefinedIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.RolesDefinedIn));
  }

  async expectRolesDefinedInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.RolesDefinedIn), value, timeoutMs);
  }

  async expectRolesDefinedInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.RolesDefinedIn), timeoutMs);
  }

  async expectRolesDefinedInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.RolesDefinedIn), timeoutMs);
  }

  async expectRolesDefinedInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.RolesDefinedIn), timeoutMs);
  }

  async expectRolesDefinedInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.RolesDefinedIn), timeoutMs);
  }

  async expectRolesDefinedInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.RolesDefinedIn), timeoutMs);
  }

  async expectRolesDefinedInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.RolesDefinedIn), count, timeoutMs);
  }

  async clickClickARoleTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo));
  }

  async doubleClickClickARoleTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo));
  }

  async longPressClickARoleTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo));
  }

  async expectClickARoleToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), value, timeoutMs);
  }

  async expectClickARoleToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), timeoutMs);
  }

  async expectClickARoleToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), timeoutMs);
  }

  async expectClickARoleToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), timeoutMs);
  }

  async expectClickARoleToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), timeoutMs);
  }

  async expectClickARoleToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), timeoutMs);
  }

  async expectClickARoleToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), count, timeoutMs);
  }

  async longPressRoleCard1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard1));
  }

  async expectRoleCard1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.roleCard1), value, timeoutMs);
  }

  async expectRoleCard1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.roleCard1), timeoutMs);
  }

  async expectRoleCard1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.roleCard1), timeoutMs);
  }

  async expectRoleCard1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.roleCard1), timeoutMs);
  }

  async expectRoleCard1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.roleCard1), count, timeoutMs);
  }

  async longPressRoleCard2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard2));
  }

  async expectRoleCard2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.roleCard2), value, timeoutMs);
  }

  async expectRoleCard2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.roleCard2), timeoutMs);
  }

  async expectRoleCard2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.roleCard2), timeoutMs);
  }

  async expectRoleCard2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.roleCard2), timeoutMs);
  }

  async expectRoleCard2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.roleCard2), count, timeoutMs);
  }

  async longPressRoleCard3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard3));
  }

  async expectRoleCard3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.roleCard3), value, timeoutMs);
  }

  async expectRoleCard3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.roleCard3), timeoutMs);
  }

  async expectRoleCard3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.roleCard3), timeoutMs);
  }

  async expectRoleCard3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.roleCard3), timeoutMs);
  }

  async expectRoleCard3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.roleCard3), count, timeoutMs);
  }

  async longPressRoleCard4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard4));
  }

  async expectRoleCard4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.roleCard4), value, timeoutMs);
  }

  async expectRoleCard4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.roleCard4), timeoutMs);
  }

  async expectRoleCard4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.roleCard4), timeoutMs);
  }

  async expectRoleCard4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.roleCard4), timeoutMs);
  }

  async expectRoleCard4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.roleCard4), count, timeoutMs);
  }

  async longPressSendFeedback(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.sendFeedback));
  }

  async expectSendFeedbackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.sendFeedback), value, timeoutMs);
  }

  async expectSendFeedbackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.sendFeedback), count, timeoutMs);
  }

}
