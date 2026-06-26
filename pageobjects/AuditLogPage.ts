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

export class AuditLogPage {
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
    auditSearch: { strategy: 'testId' as const, value: 'audit-search-input', actionKind: 'textbox' as const },
    auditCategoryFilter: { strategy: 'testId' as const, value: 'audit-category-filter', actionKind: 'combobox' as const },
    auditStatusFilter: { strategy: 'testId' as const, value: 'audit-status-filter', actionKind: 'combobox' as const },
    auditExport: { strategy: 'role' as const, value: 'Export CSV', role: 'button', actionKind: 'button' as const },
    actor: { strategy: 'text' as const, value: 'Actor', actionKind: 'text' as const },
    category: { strategy: 'text' as const, value: 'Category', actionKind: 'text' as const },
    action: { strategy: 'text' as const, value: 'Action', actionKind: 'text' as const },
    timestamp: { strategy: 'text' as const, value: 'Timestamp', actionKind: 'text' as const },
    iP: { strategy: 'text' as const, value: 'IP', actionKind: 'text' as const },
    result: { strategy: 'text' as const, value: 'Result', actionKind: 'text' as const },
    auditPaginationPrevious: { strategy: 'role' as const, value: 'Previous page', role: 'button', actionKind: 'button' as const },
    auditPaginationPage1: { strategy: 'role' as const, value: '1', role: 'button', actionKind: 'button' as const },
    auditPaginationPage2: { strategy: 'role' as const, value: '2', role: 'button', actionKind: 'button' as const },
    auditPaginationPage14: { strategy: 'role' as const, value: '14', role: 'button', actionKind: 'button' as const },
    auditPaginationNext: { strategy: 'role' as const, value: 'Next page', role: 'button', actionKind: 'button' as const },
    sendFeedback: { strategy: 'role' as const, value: 'Send feedback', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAcmeCorporation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AuditLogPage.L.acmeCorporation));
  }

  async expectAcmeCorporationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.acmeCorporation), expected, timeoutMs);
  }

  async expectAcmeCorporationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.acmeCorporation), substring, timeoutMs);
  }

  async scrollAcmeCorporationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.acmeCorporation));
  }

  async clickUKGAssist(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.uKGAssist));
  }

  async doubleClickUKGAssist(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.uKGAssist));
  }

  async expectUKGAssistVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.uKGAssist), expected, timeoutMs);
  }

  async expectUKGAssistContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.uKGAssist), substring, timeoutMs);
  }

  async scrollUKGAssistIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.uKGAssist));
  }

  async clickSubscriptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.subscriptions));
  }

  async doubleClickSubscriptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.subscriptions));
  }

  async expectSubscriptionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.subscriptions), expected, timeoutMs);
  }

  async expectSubscriptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.subscriptions), substring, timeoutMs);
  }

  async scrollSubscriptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.subscriptions));
  }

  async clickImplementations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.implementations));
  }

  async doubleClickImplementations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.implementations));
  }

  async expectImplementationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.implementations), timeoutMs);
  }

  async expectImplementationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.implementations), timeoutMs);
  }

  async expectImplementationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.implementations), expected, timeoutMs);
  }

  async expectImplementationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.implementations), substring, timeoutMs);
  }

  async scrollImplementationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.implementations));
  }

  async clickBillings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.billings));
  }

  async doubleClickBillings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.billings));
  }

  async expectBillingsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.billings), timeoutMs);
  }

  async expectBillingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.billings), timeoutMs);
  }

  async expectBillingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.billings), expected, timeoutMs);
  }

  async expectBillingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.billings), substring, timeoutMs);
  }

  async scrollBillingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.billings));
  }

  async clickSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.support));
  }

  async doubleClickSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.support));
  }

  async expectSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.support), timeoutMs);
  }

  async expectSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.support), timeoutMs);
  }

  async expectSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.support), expected, timeoutMs);
  }

  async expectSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.support), substring, timeoutMs);
  }

  async scrollSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.support));
  }

  async clickAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.adoption));
  }

  async doubleClickAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.adoption));
  }

  async expectAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.adoption), timeoutMs);
  }

  async expectAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.adoption), timeoutMs);
  }

  async expectAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.adoption), expected, timeoutMs);
  }

  async expectAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.adoption), substring, timeoutMs);
  }

  async scrollAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.adoption));
  }

  async clickAdmin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.admin));
  }

  async doubleClickAdmin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.admin));
  }

  async expectAdminVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.admin), timeoutMs);
  }

  async expectAdminHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.admin), timeoutMs);
  }

  async expectAdminText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.admin), expected, timeoutMs);
  }

  async expectAdminContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.admin), substring, timeoutMs);
  }

  async scrollAdminIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.admin));
  }

  async clickAccountProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.accountProfile));
  }

  async doubleClickAccountProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.accountProfile));
  }

  async expectAccountProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.accountProfile), expected, timeoutMs);
  }

  async expectAccountProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.accountProfile), substring, timeoutMs);
  }

  async scrollAccountProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.accountProfile));
  }

  async clickEJEmmaJohnsonPortal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.eJEmmaJohnsonPortal));
  }

  async doubleClickEJEmmaJohnsonPortal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.eJEmmaJohnsonPortal), expected, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.eJEmmaJohnsonPortal), substring, timeoutMs);
  }

  async scrollEJEmmaJohnsonPortalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.eJEmmaJohnsonPortal));
  }

  async clickSignOut(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.signOut));
  }

  async doubleClickSignOut(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.signOut));
  }

  async expectSignOutVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.signOut), timeoutMs);
  }

  async expectSignOutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.signOut), timeoutMs);
  }

  async expectSignOutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.signOut), timeoutMs);
  }

  async expectSignOutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.signOut), timeoutMs);
  }

  async expectSignOutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.signOut), expected, timeoutMs);
  }

  async expectSignOutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.signOut), substring, timeoutMs);
  }

  async scrollSignOutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.signOut));
  }

  async clickCollapseSidebar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.collapseSidebar));
  }

  async doubleClickCollapseSidebar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.collapseSidebar));
  }

  async expectCollapseSidebarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.collapseSidebar), expected, timeoutMs);
  }

  async expectCollapseSidebarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.collapseSidebar), substring, timeoutMs);
  }

  async scrollCollapseSidebarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.collapseSidebar));
  }

  async clickAdminTabUsers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.adminTabUsers));
  }

  async doubleClickAdminTabUsers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.adminTabUsers));
  }

  async expectAdminTabUsersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.adminTabUsers), expected, timeoutMs);
  }

  async expectAdminTabUsersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.adminTabUsers), substring, timeoutMs);
  }

  async scrollAdminTabUsersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.adminTabUsers));
  }

  async clickAdminTabRbac(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.adminTabRbac));
  }

  async doubleClickAdminTabRbac(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.adminTabRbac));
  }

  async expectAdminTabRbacVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.adminTabRbac), expected, timeoutMs);
  }

  async expectAdminTabRbacContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.adminTabRbac), substring, timeoutMs);
  }

  async scrollAdminTabRbacIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.adminTabRbac));
  }

  async clickAdminTabAudit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.adminTabAudit));
  }

  async doubleClickAdminTabAudit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.adminTabAudit));
  }

  async expectAdminTabAuditVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.adminTabAudit), expected, timeoutMs);
  }

  async expectAdminTabAuditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.adminTabAudit), substring, timeoutMs);
  }

  async scrollAdminTabAuditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.adminTabAudit));
  }

  async fillAuditSearch(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, AuditLogPage.L.auditSearch), value);
  }

  async clearAuditSearch(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, AuditLogPage.L.auditSearch));
  }

  async typeTextAuditSearch(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, AuditLogPage.L.auditSearch), value);
  }

  async expectAuditSearchVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.auditSearch), expected, timeoutMs);
  }

  async expectAuditSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.auditSearch), timeoutMs);
  }

  async scrollAuditSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.auditSearch));
  }

  async selectAuditCategoryFilter(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), value);
  }

  async expectAuditCategoryFilterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), expected, timeoutMs);
  }

  async expectAuditCategoryFilterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async scrollAuditCategoryFilterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.auditCategoryFilter));
  }

  async selectAuditStatusFilter(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, AuditLogPage.L.auditStatusFilter), value);
  }

  async expectAuditStatusFilterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.auditStatusFilter), expected, timeoutMs);
  }

  async expectAuditStatusFilterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.auditStatusFilter), timeoutMs);
  }

  async scrollAuditStatusFilterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.auditStatusFilter));
  }

  async clickAuditExport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.auditExport));
  }

  async doubleClickAuditExport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.auditExport));
  }

  async expectAuditExportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.auditExport), expected, timeoutMs);
  }

  async expectAuditExportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.auditExport), substring, timeoutMs);
  }

  async scrollAuditExportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.auditExport));
  }

  async getInnerTextActor(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AuditLogPage.L.actor));
  }

  async expectActorVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.actor), timeoutMs);
  }

  async expectActorHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.actor), timeoutMs);
  }

  async expectActorText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.actor), expected, timeoutMs);
  }

  async expectActorContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.actor), substring, timeoutMs);
  }

  async scrollActorIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.actor));
  }

  async getInnerTextCategory(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AuditLogPage.L.category));
  }

  async expectCategoryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.category), timeoutMs);
  }

  async expectCategoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.category), timeoutMs);
  }

  async expectCategoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.category), expected, timeoutMs);
  }

  async expectCategoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.category), substring, timeoutMs);
  }

  async scrollCategoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.category));
  }

  async getInnerTextAction(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AuditLogPage.L.action));
  }

  async expectActionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.action), timeoutMs);
  }

  async expectActionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.action), timeoutMs);
  }

  async expectActionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.action), expected, timeoutMs);
  }

  async expectActionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.action), substring, timeoutMs);
  }

  async scrollActionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.action));
  }

  async getInnerTextTimestamp(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AuditLogPage.L.timestamp));
  }

  async expectTimestampVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.timestamp), timeoutMs);
  }

  async expectTimestampHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.timestamp), timeoutMs);
  }

  async expectTimestampText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.timestamp), expected, timeoutMs);
  }

  async expectTimestampContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.timestamp), substring, timeoutMs);
  }

  async scrollTimestampIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.timestamp));
  }

  async getInnerTextIP(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AuditLogPage.L.iP));
  }

  async expectIPVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.iP), timeoutMs);
  }

  async expectIPHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.iP), timeoutMs);
  }

  async expectIPText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.iP), expected, timeoutMs);
  }

  async expectIPContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.iP), substring, timeoutMs);
  }

  async scrollIPIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.iP));
  }

  async getInnerTextResult(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AuditLogPage.L.result));
  }

  async expectResultVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.result), timeoutMs);
  }

  async expectResultHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.result), timeoutMs);
  }

  async expectResultText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.result), expected, timeoutMs);
  }

  async expectResultContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.result), substring, timeoutMs);
  }

  async scrollResultIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.result));
  }

  async clickAuditPaginationPrevious(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPrevious));
  }

  async doubleClickAuditPaginationPrevious(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPrevious));
  }

  async expectAuditPaginationPreviousVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPrevious), timeoutMs);
  }

  async expectAuditPaginationPreviousHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.auditPaginationPrevious), timeoutMs);
  }

  async expectAuditPaginationPreviousEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.auditPaginationPrevious), timeoutMs);
  }

  async expectAuditPaginationPreviousDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.auditPaginationPrevious), timeoutMs);
  }

  async expectAuditPaginationPreviousText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.auditPaginationPrevious), expected, timeoutMs);
  }

  async expectAuditPaginationPreviousContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.auditPaginationPrevious), substring, timeoutMs);
  }

  async scrollAuditPaginationPreviousIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPrevious));
  }

  async clickAuditPaginationPage1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPage1));
  }

  async doubleClickAuditPaginationPage1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPage1));
  }

  async expectAuditPaginationPage1Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPage1), timeoutMs);
  }

  async expectAuditPaginationPage1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.auditPaginationPage1), timeoutMs);
  }

  async expectAuditPaginationPage1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.auditPaginationPage1), timeoutMs);
  }

  async expectAuditPaginationPage1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.auditPaginationPage1), timeoutMs);
  }

  async expectAuditPaginationPage1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.auditPaginationPage1), expected, timeoutMs);
  }

  async expectAuditPaginationPage1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.auditPaginationPage1), substring, timeoutMs);
  }

  async scrollAuditPaginationPage1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPage1));
  }

  async clickAuditPaginationPage2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPage2));
  }

  async doubleClickAuditPaginationPage2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPage2));
  }

  async expectAuditPaginationPage2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPage2), timeoutMs);
  }

  async expectAuditPaginationPage2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.auditPaginationPage2), timeoutMs);
  }

  async expectAuditPaginationPage2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.auditPaginationPage2), timeoutMs);
  }

  async expectAuditPaginationPage2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.auditPaginationPage2), timeoutMs);
  }

  async expectAuditPaginationPage2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.auditPaginationPage2), expected, timeoutMs);
  }

  async expectAuditPaginationPage2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.auditPaginationPage2), substring, timeoutMs);
  }

  async scrollAuditPaginationPage2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPage2));
  }

  async clickAuditPaginationPage14(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPage14));
  }

  async doubleClickAuditPaginationPage14(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPage14));
  }

  async expectAuditPaginationPage14Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPage14), timeoutMs);
  }

  async expectAuditPaginationPage14Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.auditPaginationPage14), timeoutMs);
  }

  async expectAuditPaginationPage14Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.auditPaginationPage14), timeoutMs);
  }

  async expectAuditPaginationPage14Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.auditPaginationPage14), timeoutMs);
  }

  async expectAuditPaginationPage14Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.auditPaginationPage14), expected, timeoutMs);
  }

  async expectAuditPaginationPage14ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.auditPaginationPage14), substring, timeoutMs);
  }

  async scrollAuditPaginationPage14IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPage14));
  }

  async clickAuditPaginationNext(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationNext));
  }

  async doubleClickAuditPaginationNext(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationNext));
  }

  async expectAuditPaginationNextVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.auditPaginationNext), timeoutMs);
  }

  async expectAuditPaginationNextHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.auditPaginationNext), timeoutMs);
  }

  async expectAuditPaginationNextEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.auditPaginationNext), timeoutMs);
  }

  async expectAuditPaginationNextDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.auditPaginationNext), timeoutMs);
  }

  async expectAuditPaginationNextText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.auditPaginationNext), expected, timeoutMs);
  }

  async expectAuditPaginationNextContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.auditPaginationNext), substring, timeoutMs);
  }

  async scrollAuditPaginationNextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationNext));
  }

  async clickSendFeedback(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.sendFeedback));
  }

  async doubleClickSendFeedback(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.sendFeedback));
  }

  async expectSendFeedbackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.sendFeedback), expected, timeoutMs);
  }

  async expectSendFeedbackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.sendFeedback), substring, timeoutMs);
  }

  async scrollSendFeedbackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.sendFeedback));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async clickAcmeCorporation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.acmeCorporation));
  }

  async doubleClickAcmeCorporation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.acmeCorporation));
  }

  async longPressAcmeCorporation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.acmeCorporation));
  }

  async expectAcmeCorporationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.acmeCorporation), value, timeoutMs);
  }

  async expectAcmeCorporationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.acmeCorporation), count, timeoutMs);
  }

  async longPressUKGAssist(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.uKGAssist));
  }

  async expectUKGAssistValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.uKGAssist), value, timeoutMs);
  }

  async expectUKGAssistEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.uKGAssist), count, timeoutMs);
  }

  async longPressSubscriptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.subscriptions));
  }

  async expectSubscriptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.subscriptions), value, timeoutMs);
  }

  async expectSubscriptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.subscriptions), count, timeoutMs);
  }

  async longPressImplementations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.implementations));
  }

  async expectImplementationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.implementations), value, timeoutMs);
  }

  async expectImplementationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.implementations), timeoutMs);
  }

  async expectImplementationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.implementations), timeoutMs);
  }

  async expectImplementationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.implementations), timeoutMs);
  }

  async expectImplementationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.implementations), timeoutMs);
  }

  async expectImplementationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.implementations), timeoutMs);
  }

  async expectImplementationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.implementations), count, timeoutMs);
  }

  async longPressBillings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.billings));
  }

  async expectBillingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.billings), value, timeoutMs);
  }

  async expectBillingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.billings), timeoutMs);
  }

  async expectBillingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.billings), timeoutMs);
  }

  async expectBillingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.billings), timeoutMs);
  }

  async expectBillingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.billings), timeoutMs);
  }

  async expectBillingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.billings), timeoutMs);
  }

  async expectBillingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.billings), count, timeoutMs);
  }

  async longPressSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.support));
  }

  async expectSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.support), value, timeoutMs);
  }

  async expectSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.support), timeoutMs);
  }

  async expectSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.support), timeoutMs);
  }

  async expectSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.support), timeoutMs);
  }

  async expectSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.support), timeoutMs);
  }

  async expectSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.support), timeoutMs);
  }

  async expectSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.support), count, timeoutMs);
  }

  async longPressAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.adoption));
  }

  async expectAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.adoption), value, timeoutMs);
  }

  async expectAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.adoption), timeoutMs);
  }

  async expectAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.adoption), timeoutMs);
  }

  async expectAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.adoption), timeoutMs);
  }

  async expectAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.adoption), timeoutMs);
  }

  async expectAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.adoption), timeoutMs);
  }

  async expectAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.adoption), count, timeoutMs);
  }

  async longPressAdmin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.admin));
  }

  async expectAdminValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.admin), value, timeoutMs);
  }

  async expectAdminEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.admin), timeoutMs);
  }

  async expectAdminDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.admin), timeoutMs);
  }

  async expectAdminChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.admin), timeoutMs);
  }

  async expectAdminUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.admin), timeoutMs);
  }

  async expectAdminFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.admin), timeoutMs);
  }

  async expectAdminCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.admin), count, timeoutMs);
  }

  async longPressAccountProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.accountProfile));
  }

  async expectAccountProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.accountProfile), value, timeoutMs);
  }

  async expectAccountProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.accountProfile), count, timeoutMs);
  }

  async longPressEJEmmaJohnsonPortal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.eJEmmaJohnsonPortal), value, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.eJEmmaJohnsonPortal), count, timeoutMs);
  }

  async longPressSignOut(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.signOut));
  }

  async expectSignOutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.signOut), value, timeoutMs);
  }

  async expectSignOutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.signOut), timeoutMs);
  }

  async expectSignOutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.signOut), timeoutMs);
  }

  async expectSignOutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.signOut), timeoutMs);
  }

  async expectSignOutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.signOut), count, timeoutMs);
  }

  async longPressCollapseSidebar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.collapseSidebar));
  }

  async expectCollapseSidebarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.collapseSidebar), value, timeoutMs);
  }

  async expectCollapseSidebarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.collapseSidebar), count, timeoutMs);
  }

  async longPressAdminTabUsers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.adminTabUsers));
  }

  async expectAdminTabUsersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.adminTabUsers), value, timeoutMs);
  }

  async expectAdminTabUsersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.adminTabUsers), count, timeoutMs);
  }

  async longPressAdminTabRbac(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.adminTabRbac));
  }

  async expectAdminTabRbacValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.adminTabRbac), value, timeoutMs);
  }

  async expectAdminTabRbacChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.adminTabRbac), count, timeoutMs);
  }

  async longPressAdminTabAudit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.adminTabAudit));
  }

  async expectAdminTabAuditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.adminTabAudit), value, timeoutMs);
  }

  async expectAdminTabAuditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.adminTabAudit), count, timeoutMs);
  }

  async expectAuditSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.auditSearch), expected, timeoutMs);
  }

  async expectAuditSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.auditSearch), substring, timeoutMs);
  }

  async expectAuditSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.auditSearch), count, timeoutMs);
  }

  async expectAuditCategoryFilterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), expected, timeoutMs);
  }

  async expectAuditCategoryFilterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), substring, timeoutMs);
  }

  async expectAuditCategoryFilterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), count, timeoutMs);
  }

  async expectAuditStatusFilterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.auditStatusFilter), expected, timeoutMs);
  }

  async expectAuditStatusFilterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.auditStatusFilter), substring, timeoutMs);
  }

  async expectAuditStatusFilterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.auditStatusFilter), count, timeoutMs);
  }

  async longPressAuditExport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.auditExport));
  }

  async expectAuditExportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.auditExport), value, timeoutMs);
  }

  async expectAuditExportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.auditExport), count, timeoutMs);
  }

  async clickActor(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.actor));
  }

  async doubleClickActor(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.actor));
  }

  async longPressActor(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.actor));
  }

  async expectActorValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.actor), value, timeoutMs);
  }

  async expectActorEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.actor), timeoutMs);
  }

  async expectActorDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.actor), timeoutMs);
  }

  async expectActorChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.actor), timeoutMs);
  }

  async expectActorUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.actor), timeoutMs);
  }

  async expectActorFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.actor), timeoutMs);
  }

  async expectActorCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.actor), count, timeoutMs);
  }

  async clickCategory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.category));
  }

  async doubleClickCategory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.category));
  }

  async longPressCategory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.category));
  }

  async expectCategoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.category), value, timeoutMs);
  }

  async expectCategoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.category), timeoutMs);
  }

  async expectCategoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.category), timeoutMs);
  }

  async expectCategoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.category), timeoutMs);
  }

  async expectCategoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.category), timeoutMs);
  }

  async expectCategoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.category), timeoutMs);
  }

  async expectCategoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.category), count, timeoutMs);
  }

  async clickAction(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.action));
  }

  async doubleClickAction(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.action));
  }

  async longPressAction(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.action));
  }

  async expectActionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.action), value, timeoutMs);
  }

  async expectActionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.action), timeoutMs);
  }

  async expectActionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.action), timeoutMs);
  }

  async expectActionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.action), timeoutMs);
  }

  async expectActionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.action), timeoutMs);
  }

  async expectActionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.action), timeoutMs);
  }

  async expectActionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.action), count, timeoutMs);
  }

  async clickTimestamp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.timestamp));
  }

  async doubleClickTimestamp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.timestamp));
  }

  async longPressTimestamp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.timestamp));
  }

  async expectTimestampValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.timestamp), value, timeoutMs);
  }

  async expectTimestampEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.timestamp), timeoutMs);
  }

  async expectTimestampDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.timestamp), timeoutMs);
  }

  async expectTimestampChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.timestamp), timeoutMs);
  }

  async expectTimestampUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.timestamp), timeoutMs);
  }

  async expectTimestampFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.timestamp), timeoutMs);
  }

  async expectTimestampCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.timestamp), count, timeoutMs);
  }

  async clickIP(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.iP));
  }

  async doubleClickIP(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.iP));
  }

  async longPressIP(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.iP));
  }

  async expectIPValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.iP), value, timeoutMs);
  }

  async expectIPEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.iP), timeoutMs);
  }

  async expectIPDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.iP), timeoutMs);
  }

  async expectIPChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.iP), timeoutMs);
  }

  async expectIPUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.iP), timeoutMs);
  }

  async expectIPFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.iP), timeoutMs);
  }

  async expectIPCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.iP), count, timeoutMs);
  }

  async clickResult(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.result));
  }

  async doubleClickResult(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.result));
  }

  async longPressResult(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.result));
  }

  async expectResultValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.result), value, timeoutMs);
  }

  async expectResultEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.result), timeoutMs);
  }

  async expectResultDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.result), timeoutMs);
  }

  async expectResultChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.result), timeoutMs);
  }

  async expectResultUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.result), timeoutMs);
  }

  async expectResultFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.result), timeoutMs);
  }

  async expectResultCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.result), count, timeoutMs);
  }

  async longPressAuditPaginationPrevious(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPrevious));
  }

  async expectAuditPaginationPreviousValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.auditPaginationPrevious), value, timeoutMs);
  }

  async expectAuditPaginationPreviousChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.auditPaginationPrevious), timeoutMs);
  }

  async expectAuditPaginationPreviousUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.auditPaginationPrevious), timeoutMs);
  }

  async expectAuditPaginationPreviousFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.auditPaginationPrevious), timeoutMs);
  }

  async expectAuditPaginationPreviousCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.auditPaginationPrevious), count, timeoutMs);
  }

  async longPressAuditPaginationPage1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPage1));
  }

  async expectAuditPaginationPage1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.auditPaginationPage1), value, timeoutMs);
  }

  async expectAuditPaginationPage1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.auditPaginationPage1), timeoutMs);
  }

  async expectAuditPaginationPage1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.auditPaginationPage1), timeoutMs);
  }

  async expectAuditPaginationPage1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.auditPaginationPage1), timeoutMs);
  }

  async expectAuditPaginationPage1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.auditPaginationPage1), count, timeoutMs);
  }

  async longPressAuditPaginationPage2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPage2));
  }

  async expectAuditPaginationPage2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.auditPaginationPage2), value, timeoutMs);
  }

  async expectAuditPaginationPage2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.auditPaginationPage2), timeoutMs);
  }

  async expectAuditPaginationPage2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.auditPaginationPage2), timeoutMs);
  }

  async expectAuditPaginationPage2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.auditPaginationPage2), timeoutMs);
  }

  async expectAuditPaginationPage2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.auditPaginationPage2), count, timeoutMs);
  }

  async longPressAuditPaginationPage14(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationPage14));
  }

  async expectAuditPaginationPage14Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.auditPaginationPage14), value, timeoutMs);
  }

  async expectAuditPaginationPage14Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.auditPaginationPage14), timeoutMs);
  }

  async expectAuditPaginationPage14Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.auditPaginationPage14), timeoutMs);
  }

  async expectAuditPaginationPage14Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.auditPaginationPage14), timeoutMs);
  }

  async expectAuditPaginationPage14Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.auditPaginationPage14), count, timeoutMs);
  }

  async longPressAuditPaginationNext(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.auditPaginationNext));
  }

  async expectAuditPaginationNextValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.auditPaginationNext), value, timeoutMs);
  }

  async expectAuditPaginationNextChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.auditPaginationNext), timeoutMs);
  }

  async expectAuditPaginationNextUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.auditPaginationNext), timeoutMs);
  }

  async expectAuditPaginationNextFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.auditPaginationNext), timeoutMs);
  }

  async expectAuditPaginationNextCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.auditPaginationNext), count, timeoutMs);
  }

  async longPressSendFeedback(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.sendFeedback));
  }

  async expectSendFeedbackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.sendFeedback), value, timeoutMs);
  }

  async expectSendFeedbackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.sendFeedback), count, timeoutMs);
  }

}
