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

export class AccountProfilePage {
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
    customerSinceJan2022: { strategy: 'text' as const, value: 'Customer since Jan 2022', actionKind: 'text' as const },
    acmeCorporation2: { strategy: 'text' as const, value: 'Acme Corporation', actionKind: 'text' as const },
    solutionIDSOL2001: { strategy: 'text' as const, value: 'Solution ID: SOL2001', actionKind: 'text' as const },
    solutionID: { strategy: 'text' as const, value: 'Solution ID:', actionKind: 'text' as const },
    sOL2001: { strategy: 'text' as const, value: 'SOL2001', actionKind: 'text' as const },
    billTo: { strategy: 'text' as const, value: 'Bill to', actionKind: 'text' as const },
    MainStNew: { strategy: 'text' as const, value: '100 Main St, New York, NY 10001, USA', actionKind: 'text' as const },
    yourUKGTeam: { strategy: 'text' as const, value: 'Your UKG team', actionKind: 'text' as const },
    johnSmith: { strategy: 'text' as const, value: 'John Smith', actionKind: 'text' as const },
    customerSuccessManager: { strategy: 'text' as const, value: 'Customer Success Manager', actionKind: 'text' as const },
    johnSmithAcmecorporationCom: { strategy: 'role' as const, value: 'john.smith@acmecorporation.com', role: 'link', actionKind: 'link' as const },
    a: { strategy: 'role' as const, value: '+1-555-1001', role: 'link', actionKind: 'link' as const },
    sarahJohnson: { strategy: 'text' as const, value: 'Sarah Johnson', actionKind: 'text' as const },
    accountExecutive: { strategy: 'text' as const, value: 'Account Executive', actionKind: 'text' as const },
    sarahJohnsonAcmecorporationCom: { strategy: 'role' as const, value: 'sarah.johnson@acmecorporation.com', role: 'link', actionKind: 'link' as const },
    aLink: { strategy: 'role' as const, value: '+1-555-1002', role: 'link', actionKind: 'link' as const },
    mikeBrown: { strategy: 'text' as const, value: 'Mike Brown', actionKind: 'text' as const },
    technicalAccountManager: { strategy: 'text' as const, value: 'Technical Account Manager', actionKind: 'text' as const },
    mikeBrownAcmecorporationCom: { strategy: 'role' as const, value: 'mike.brown@acmecorporation.com', role: 'link', actionKind: 'link' as const },
    aLink2: { strategy: 'role' as const, value: '+1-555-1003', role: 'link', actionKind: 'link' as const },
    uKGSupport: { strategy: 'text' as const, value: 'UKG Support', actionKind: 'text' as const },
    GlobalSupport: { strategy: 'text' as const, value: '24/7 Global Support', actionKind: 'text' as const },
    supportUkgCom: { strategy: 'role' as const, value: 'support@ukg.com', role: 'link', actionKind: 'link' as const },
    aLink3: { strategy: 'role' as const, value: '1-800-432-1729', role: 'link', actionKind: 'link' as const },
    resources: { strategy: 'text' as const, value: 'Resources', actionKind: 'text' as const },
    usefulLinksPortalsAnd: { strategy: 'text' as const, value: 'Useful links, portals, and learning resources for', actionKind: 'text' as const },
    communityConnectWith50000: { strategy: 'role' as const, value: 'Community Connect with 50,000+ UKG customers &', role: 'link', actionKind: 'link' as const },
    uKGLearnHubAccess: { strategy: 'text' as const, value: 'UKG Learn Hub Access training courses, certifications, and learning paths', actionKind: 'link' as const },
    uKGPROSignIn: { strategy: 'role' as const, value: 'UKG PRO Sign in to your UKG Pro HCM and payroll', role: 'link', actionKind: 'link' as const },
    uKGProWFMWorkforce: { strategy: 'role' as const, value: 'UKG Pro WFM Workforce management and scheduling', role: 'link', actionKind: 'link' as const },
    uKGSupportSubmitTickets: { strategy: 'text' as const, value: 'UKG Support Submit tickets, access the knowledge base, and get help', actionKind: 'link' as const },
    trustCenterAccessSecurity: { strategy: 'text' as const, value: 'Trust Center Access security, compliance, privacy, and trust resources.', actionKind: 'link' as const },
    companyContacts: { strategy: 'text' as const, value: 'Company Contacts', actionKind: 'text' as const },
    michaelSmith: { strategy: 'text' as const, value: 'Michael Smith', actionKind: 'text' as const },
    portalAdministrator: { strategy: 'text' as const, value: 'Portal Administrator', actionKind: 'text' as const },
    user2AcmecorporationExampleCom: { strategy: 'role' as const, value: 'user2@acmecorporation.example.com', role: 'link', actionKind: 'link' as const },
    emmaJohnson: { strategy: 'text' as const, value: 'Emma Johnson', actionKind: 'text' as const },
    portalAdministrator2: { strategy: 'text' as const, value: 'Portal Administrator', actionKind: 'text' as const },
    user1AcmecorporationExampleCom: { strategy: 'role' as const, value: 'user1@acmecorporation.example.com', role: 'link', actionKind: 'link' as const },
    danielHall: { strategy: 'text' as const, value: 'Daniel Hall', actionKind: 'text' as const },
    billingRenewalsUser: { strategy: 'text' as const, value: 'Billing & Renewals User', actionKind: 'text' as const },
    user18AcmecorporationExampleCom: { strategy: 'role' as const, value: 'user18@acmecorporation.example.com', role: 'link', actionKind: 'link' as const },
    harperAllen: { strategy: 'text' as const, value: 'Harper Allen', actionKind: 'text' as const },
    billingRenewalsUser2: { strategy: 'text' as const, value: 'Billing & Renewals User', actionKind: 'text' as const },
    user19AcmecorporationExampleCom: { strategy: 'role' as const, value: 'user19@acmecorporation.example.com', role: 'link', actionKind: 'link' as const },
    sendFeedback: { strategy: 'role' as const, value: 'Send feedback', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAcmeCorporation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.acmeCorporation));
  }

  async expectAcmeCorporationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.acmeCorporation), expected, timeoutMs);
  }

  async expectAcmeCorporationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.acmeCorporation), substring, timeoutMs);
  }

  async scrollAcmeCorporationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.acmeCorporation));
  }

  async clickUKGAssist(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGAssist));
  }

  async doubleClickUKGAssist(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGAssist));
  }

  async expectUKGAssistVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.uKGAssist), expected, timeoutMs);
  }

  async expectUKGAssistContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.uKGAssist), substring, timeoutMs);
  }

  async scrollUKGAssistIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGAssist));
  }

  async clickSubscriptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.subscriptions));
  }

  async doubleClickSubscriptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.subscriptions));
  }

  async expectSubscriptionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.subscriptions), expected, timeoutMs);
  }

  async expectSubscriptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.subscriptions), substring, timeoutMs);
  }

  async scrollSubscriptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.subscriptions));
  }

  async clickImplementations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.implementations));
  }

  async doubleClickImplementations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.implementations));
  }

  async expectImplementationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.implementations), timeoutMs);
  }

  async expectImplementationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.implementations), timeoutMs);
  }

  async expectImplementationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.implementations), expected, timeoutMs);
  }

  async expectImplementationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.implementations), substring, timeoutMs);
  }

  async scrollImplementationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.implementations));
  }

  async clickBillings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.billings));
  }

  async doubleClickBillings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.billings));
  }

  async expectBillingsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.billings), timeoutMs);
  }

  async expectBillingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.billings), timeoutMs);
  }

  async expectBillingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.billings), expected, timeoutMs);
  }

  async expectBillingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.billings), substring, timeoutMs);
  }

  async scrollBillingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.billings));
  }

  async clickSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.support));
  }

  async doubleClickSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.support));
  }

  async expectSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.support), timeoutMs);
  }

  async expectSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.support), timeoutMs);
  }

  async expectSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.support), expected, timeoutMs);
  }

  async expectSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.support), substring, timeoutMs);
  }

  async scrollSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.support));
  }

  async clickAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.adoption));
  }

  async doubleClickAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.adoption));
  }

  async expectAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.adoption), timeoutMs);
  }

  async expectAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.adoption), timeoutMs);
  }

  async expectAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.adoption), expected, timeoutMs);
  }

  async expectAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.adoption), substring, timeoutMs);
  }

  async scrollAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.adoption));
  }

  async clickAdmin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.admin));
  }

  async doubleClickAdmin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.admin));
  }

  async expectAdminVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.admin), timeoutMs);
  }

  async expectAdminHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.admin), timeoutMs);
  }

  async expectAdminText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.admin), expected, timeoutMs);
  }

  async expectAdminContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.admin), substring, timeoutMs);
  }

  async scrollAdminIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.admin));
  }

  async clickAccountProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.accountProfile));
  }

  async doubleClickAccountProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.accountProfile));
  }

  async expectAccountProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.accountProfile), expected, timeoutMs);
  }

  async expectAccountProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.accountProfile), substring, timeoutMs);
  }

  async scrollAccountProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.accountProfile));
  }

  async clickEJEmmaJohnsonPortal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.eJEmmaJohnsonPortal));
  }

  async doubleClickEJEmmaJohnsonPortal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.eJEmmaJohnsonPortal), expected, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.eJEmmaJohnsonPortal), substring, timeoutMs);
  }

  async scrollEJEmmaJohnsonPortalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.eJEmmaJohnsonPortal));
  }

  async clickSignOut(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.signOut));
  }

  async doubleClickSignOut(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.signOut));
  }

  async expectSignOutVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.signOut), timeoutMs);
  }

  async expectSignOutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.signOut), timeoutMs);
  }

  async expectSignOutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.signOut), timeoutMs);
  }

  async expectSignOutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.signOut), timeoutMs);
  }

  async expectSignOutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.signOut), expected, timeoutMs);
  }

  async expectSignOutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.signOut), substring, timeoutMs);
  }

  async scrollSignOutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.signOut));
  }

  async clickCollapseSidebar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.collapseSidebar));
  }

  async doubleClickCollapseSidebar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.collapseSidebar));
  }

  async expectCollapseSidebarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.collapseSidebar), expected, timeoutMs);
  }

  async expectCollapseSidebarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.collapseSidebar), substring, timeoutMs);
  }

  async scrollCollapseSidebarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.collapseSidebar));
  }

  async getInnerTextCustomerSinceJan2022(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.customerSinceJan2022));
  }

  async expectCustomerSinceJan2022Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.customerSinceJan2022), timeoutMs);
  }

  async expectCustomerSinceJan2022Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.customerSinceJan2022), timeoutMs);
  }

  async expectCustomerSinceJan2022Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.customerSinceJan2022), expected, timeoutMs);
  }

  async expectCustomerSinceJan2022ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.customerSinceJan2022), substring, timeoutMs);
  }

  async scrollCustomerSinceJan2022IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.customerSinceJan2022));
  }

  async getInnerTextAcmeCorporation2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.acmeCorporation2));
  }

  async expectAcmeCorporation2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.acmeCorporation2), timeoutMs);
  }

  async expectAcmeCorporation2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.acmeCorporation2), timeoutMs);
  }

  async expectAcmeCorporation2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.acmeCorporation2), expected, timeoutMs);
  }

  async expectAcmeCorporation2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.acmeCorporation2), substring, timeoutMs);
  }

  async scrollAcmeCorporation2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.acmeCorporation2));
  }

  async getInnerTextSolutionIDSOL2001(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.solutionIDSOL2001));
  }

  async expectSolutionIDSOL2001Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.solutionIDSOL2001), timeoutMs);
  }

  async expectSolutionIDSOL2001Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.solutionIDSOL2001), timeoutMs);
  }

  async expectSolutionIDSOL2001Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.solutionIDSOL2001), expected, timeoutMs);
  }

  async expectSolutionIDSOL2001ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.solutionIDSOL2001), substring, timeoutMs);
  }

  async scrollSolutionIDSOL2001IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.solutionIDSOL2001));
  }

  async getInnerTextSolutionID(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.solutionID));
  }

  async expectSolutionIDVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.solutionID), timeoutMs);
  }

  async expectSolutionIDHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.solutionID), timeoutMs);
  }

  async expectSolutionIDText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.solutionID), expected, timeoutMs);
  }

  async expectSolutionIDContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.solutionID), substring, timeoutMs);
  }

  async scrollSolutionIDIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.solutionID));
  }

  async getInnerTextSOL2001(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.sOL2001));
  }

  async expectSOL2001Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.sOL2001), timeoutMs);
  }

  async expectSOL2001Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.sOL2001), timeoutMs);
  }

  async expectSOL2001Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.sOL2001), expected, timeoutMs);
  }

  async expectSOL2001ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.sOL2001), substring, timeoutMs);
  }

  async scrollSOL2001IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.sOL2001));
  }

  async getInnerTextBillTo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.billTo));
  }

  async expectBillToVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.billTo), timeoutMs);
  }

  async expectBillToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.billTo), timeoutMs);
  }

  async expectBillToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.billTo), expected, timeoutMs);
  }

  async expectBillToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.billTo), substring, timeoutMs);
  }

  async scrollBillToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.billTo));
  }

  async getInnerTextMainStNew(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.MainStNew));
  }

  async expectMainStNewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.MainStNew), timeoutMs);
  }

  async expectMainStNewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.MainStNew), timeoutMs);
  }

  async expectMainStNewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.MainStNew), expected, timeoutMs);
  }

  async expectMainStNewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.MainStNew), substring, timeoutMs);
  }

  async scrollMainStNewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.MainStNew));
  }

  async getInnerTextYourUKGTeam(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.yourUKGTeam));
  }

  async expectYourUKGTeamVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.yourUKGTeam), timeoutMs);
  }

  async expectYourUKGTeamHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.yourUKGTeam), timeoutMs);
  }

  async expectYourUKGTeamText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.yourUKGTeam), expected, timeoutMs);
  }

  async expectYourUKGTeamContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.yourUKGTeam), substring, timeoutMs);
  }

  async scrollYourUKGTeamIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.yourUKGTeam));
  }

  async getInnerTextJohnSmith(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.johnSmith));
  }

  async expectJohnSmithVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.johnSmith), timeoutMs);
  }

  async expectJohnSmithHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.johnSmith), timeoutMs);
  }

  async expectJohnSmithText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.johnSmith), expected, timeoutMs);
  }

  async expectJohnSmithContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.johnSmith), substring, timeoutMs);
  }

  async scrollJohnSmithIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.johnSmith));
  }

  async getInnerTextCustomerSuccessManager(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.customerSuccessManager));
  }

  async expectCustomerSuccessManagerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.customerSuccessManager), expected, timeoutMs);
  }

  async expectCustomerSuccessManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.customerSuccessManager), substring, timeoutMs);
  }

  async scrollCustomerSuccessManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.customerSuccessManager));
  }

  async clickJohnSmithAcmecorporationCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.johnSmithAcmecorporationCom));
  }

  async doubleClickJohnSmithAcmecorporationCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.johnSmithAcmecorporationCom));
  }

  async expectJohnSmithAcmecorporationComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.johnSmithAcmecorporationCom), timeoutMs);
  }

  async expectJohnSmithAcmecorporationComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.johnSmithAcmecorporationCom), timeoutMs);
  }

  async expectJohnSmithAcmecorporationComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.johnSmithAcmecorporationCom), expected, timeoutMs);
  }

  async expectJohnSmithAcmecorporationComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.johnSmithAcmecorporationCom), substring, timeoutMs);
  }

  async scrollJohnSmithAcmecorporationComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.johnSmithAcmecorporationCom));
  }

  async clickA(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.a));
  }

  async doubleClickA(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.a));
  }

  async expectAVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.a), timeoutMs);
  }

  async expectAHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.a), timeoutMs);
  }

  async expectAText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.a), expected, timeoutMs);
  }

  async expectAContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.a), substring, timeoutMs);
  }

  async scrollAIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.a));
  }

  async getInnerTextSarahJohnson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.sarahJohnson));
  }

  async expectSarahJohnsonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.sarahJohnson), timeoutMs);
  }

  async expectSarahJohnsonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.sarahJohnson), timeoutMs);
  }

  async expectSarahJohnsonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.sarahJohnson), expected, timeoutMs);
  }

  async expectSarahJohnsonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.sarahJohnson), substring, timeoutMs);
  }

  async scrollSarahJohnsonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.sarahJohnson));
  }

  async getInnerTextAccountExecutive(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.accountExecutive));
  }

  async expectAccountExecutiveVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.accountExecutive), timeoutMs);
  }

  async expectAccountExecutiveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.accountExecutive), timeoutMs);
  }

  async expectAccountExecutiveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.accountExecutive), expected, timeoutMs);
  }

  async expectAccountExecutiveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.accountExecutive), substring, timeoutMs);
  }

  async scrollAccountExecutiveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.accountExecutive));
  }

  async clickSarahJohnsonAcmecorporationCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.sarahJohnsonAcmecorporationCom));
  }

  async doubleClickSarahJohnsonAcmecorporationCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.sarahJohnsonAcmecorporationCom));
  }

  async expectSarahJohnsonAcmecorporationComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.sarahJohnsonAcmecorporationCom), timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.sarahJohnsonAcmecorporationCom), timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.sarahJohnsonAcmecorporationCom), expected, timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.sarahJohnsonAcmecorporationCom), substring, timeoutMs);
  }

  async scrollSarahJohnsonAcmecorporationComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.sarahJohnsonAcmecorporationCom));
  }

  async clickALink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.aLink));
  }

  async doubleClickALink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.aLink));
  }

  async expectALinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.aLink), timeoutMs);
  }

  async expectALinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.aLink), timeoutMs);
  }

  async expectALinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.aLink), expected, timeoutMs);
  }

  async expectALinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.aLink), substring, timeoutMs);
  }

  async scrollALinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.aLink));
  }

  async getInnerTextMikeBrown(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.mikeBrown));
  }

  async expectMikeBrownVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.mikeBrown), timeoutMs);
  }

  async expectMikeBrownHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.mikeBrown), timeoutMs);
  }

  async expectMikeBrownText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.mikeBrown), expected, timeoutMs);
  }

  async expectMikeBrownContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.mikeBrown), substring, timeoutMs);
  }

  async scrollMikeBrownIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.mikeBrown));
  }

  async getInnerTextTechnicalAccountManager(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.technicalAccountManager));
  }

  async expectTechnicalAccountManagerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.technicalAccountManager), timeoutMs);
  }

  async expectTechnicalAccountManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.technicalAccountManager), timeoutMs);
  }

  async expectTechnicalAccountManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.technicalAccountManager), expected, timeoutMs);
  }

  async expectTechnicalAccountManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.technicalAccountManager), substring, timeoutMs);
  }

  async scrollTechnicalAccountManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.technicalAccountManager));
  }

  async clickMikeBrownAcmecorporationCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.mikeBrownAcmecorporationCom));
  }

  async doubleClickMikeBrownAcmecorporationCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.mikeBrownAcmecorporationCom));
  }

  async expectMikeBrownAcmecorporationComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.mikeBrownAcmecorporationCom), timeoutMs);
  }

  async expectMikeBrownAcmecorporationComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.mikeBrownAcmecorporationCom), timeoutMs);
  }

  async expectMikeBrownAcmecorporationComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.mikeBrownAcmecorporationCom), expected, timeoutMs);
  }

  async expectMikeBrownAcmecorporationComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.mikeBrownAcmecorporationCom), substring, timeoutMs);
  }

  async scrollMikeBrownAcmecorporationComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.mikeBrownAcmecorporationCom));
  }

  async clickALink2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.aLink2));
  }

  async doubleClickALink2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.aLink2));
  }

  async expectALink2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.aLink2), timeoutMs);
  }

  async expectALink2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.aLink2), timeoutMs);
  }

  async expectALink2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.aLink2), expected, timeoutMs);
  }

  async expectALink2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.aLink2), substring, timeoutMs);
  }

  async scrollALink2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.aLink2));
  }

  async getInnerTextUKGSupport(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGSupport));
  }

  async expectUKGSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.uKGSupport), timeoutMs);
  }

  async expectUKGSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.uKGSupport), timeoutMs);
  }

  async expectUKGSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.uKGSupport), expected, timeoutMs);
  }

  async expectUKGSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.uKGSupport), substring, timeoutMs);
  }

  async scrollUKGSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGSupport));
  }

  async getInnerTextGlobalSupport(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.GlobalSupport));
  }

  async expectGlobalSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.GlobalSupport), timeoutMs);
  }

  async expectGlobalSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.GlobalSupport), timeoutMs);
  }

  async expectGlobalSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.GlobalSupport), expected, timeoutMs);
  }

  async expectGlobalSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.GlobalSupport), substring, timeoutMs);
  }

  async scrollGlobalSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.GlobalSupport));
  }

  async clickSupportUkgCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.supportUkgCom));
  }

  async doubleClickSupportUkgCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.supportUkgCom));
  }

  async expectSupportUkgComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.supportUkgCom), timeoutMs);
  }

  async expectSupportUkgComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.supportUkgCom), timeoutMs);
  }

  async expectSupportUkgComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.supportUkgCom), expected, timeoutMs);
  }

  async expectSupportUkgComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.supportUkgCom), substring, timeoutMs);
  }

  async scrollSupportUkgComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.supportUkgCom));
  }

  async clickALink3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.aLink3));
  }

  async doubleClickALink3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.aLink3));
  }

  async expectALink3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.aLink3), timeoutMs);
  }

  async expectALink3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.aLink3), timeoutMs);
  }

  async expectALink3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.aLink3), expected, timeoutMs);
  }

  async expectALink3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.aLink3), substring, timeoutMs);
  }

  async scrollALink3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.aLink3));
  }

  async getInnerTextResources(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.resources));
  }

  async expectResourcesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.resources), timeoutMs);
  }

  async expectResourcesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.resources), timeoutMs);
  }

  async expectResourcesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.resources), expected, timeoutMs);
  }

  async expectResourcesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.resources), substring, timeoutMs);
  }

  async scrollResourcesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.resources));
  }

  async getInnerTextUsefulLinksPortalsAnd(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.usefulLinksPortalsAnd));
  }

  async expectUsefulLinksPortalsAndVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.usefulLinksPortalsAnd), timeoutMs);
  }

  async expectUsefulLinksPortalsAndHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.usefulLinksPortalsAnd), timeoutMs);
  }

  async expectUsefulLinksPortalsAndText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.usefulLinksPortalsAnd), expected, timeoutMs);
  }

  async expectUsefulLinksPortalsAndContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.usefulLinksPortalsAnd), substring, timeoutMs);
  }

  async scrollUsefulLinksPortalsAndIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.usefulLinksPortalsAnd));
  }

  async clickCommunityConnectWith50000(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.communityConnectWith50000));
  }

  async doubleClickCommunityConnectWith50000(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.communityConnectWith50000));
  }

  async expectCommunityConnectWith50000Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.communityConnectWith50000), timeoutMs);
  }

  async expectCommunityConnectWith50000Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.communityConnectWith50000), timeoutMs);
  }

  async expectCommunityConnectWith50000Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.communityConnectWith50000), expected, timeoutMs);
  }

  async expectCommunityConnectWith50000ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.communityConnectWith50000), substring, timeoutMs);
  }

  async scrollCommunityConnectWith50000IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.communityConnectWith50000));
  }

  async clickUKGLearnHubAccess(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGLearnHubAccess));
  }

  async doubleClickUKGLearnHubAccess(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGLearnHubAccess));
  }

  async expectUKGLearnHubAccessVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.uKGLearnHubAccess), timeoutMs);
  }

  async expectUKGLearnHubAccessHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.uKGLearnHubAccess), timeoutMs);
  }

  async expectUKGLearnHubAccessText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.uKGLearnHubAccess), expected, timeoutMs);
  }

  async expectUKGLearnHubAccessContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.uKGLearnHubAccess), substring, timeoutMs);
  }

  async scrollUKGLearnHubAccessIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGLearnHubAccess));
  }

  async clickUKGPROSignIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGPROSignIn));
  }

  async doubleClickUKGPROSignIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGPROSignIn));
  }

  async expectUKGPROSignInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.uKGPROSignIn), timeoutMs);
  }

  async expectUKGPROSignInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.uKGPROSignIn), timeoutMs);
  }

  async expectUKGPROSignInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.uKGPROSignIn), expected, timeoutMs);
  }

  async expectUKGPROSignInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.uKGPROSignIn), substring, timeoutMs);
  }

  async scrollUKGPROSignInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGPROSignIn));
  }

  async clickUKGProWFMWorkforce(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGProWFMWorkforce));
  }

  async doubleClickUKGProWFMWorkforce(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGProWFMWorkforce));
  }

  async expectUKGProWFMWorkforceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.uKGProWFMWorkforce), timeoutMs);
  }

  async expectUKGProWFMWorkforceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.uKGProWFMWorkforce), timeoutMs);
  }

  async expectUKGProWFMWorkforceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.uKGProWFMWorkforce), expected, timeoutMs);
  }

  async expectUKGProWFMWorkforceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.uKGProWFMWorkforce), substring, timeoutMs);
  }

  async scrollUKGProWFMWorkforceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGProWFMWorkforce));
  }

  async clickUKGSupportSubmitTickets(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGSupportSubmitTickets));
  }

  async doubleClickUKGSupportSubmitTickets(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGSupportSubmitTickets));
  }

  async expectUKGSupportSubmitTicketsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.uKGSupportSubmitTickets), timeoutMs);
  }

  async expectUKGSupportSubmitTicketsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.uKGSupportSubmitTickets), timeoutMs);
  }

  async expectUKGSupportSubmitTicketsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.uKGSupportSubmitTickets), expected, timeoutMs);
  }

  async expectUKGSupportSubmitTicketsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.uKGSupportSubmitTickets), substring, timeoutMs);
  }

  async scrollUKGSupportSubmitTicketsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGSupportSubmitTickets));
  }

  async clickTrustCenterAccessSecurity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.trustCenterAccessSecurity));
  }

  async doubleClickTrustCenterAccessSecurity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.trustCenterAccessSecurity));
  }

  async expectTrustCenterAccessSecurityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.trustCenterAccessSecurity), timeoutMs);
  }

  async expectTrustCenterAccessSecurityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.trustCenterAccessSecurity), timeoutMs);
  }

  async expectTrustCenterAccessSecurityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.trustCenterAccessSecurity), expected, timeoutMs);
  }

  async expectTrustCenterAccessSecurityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.trustCenterAccessSecurity), substring, timeoutMs);
  }

  async scrollTrustCenterAccessSecurityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.trustCenterAccessSecurity));
  }

  async getInnerTextCompanyContacts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.companyContacts));
  }

  async expectCompanyContactsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.companyContacts), timeoutMs);
  }

  async expectCompanyContactsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.companyContacts), timeoutMs);
  }

  async expectCompanyContactsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.companyContacts), expected, timeoutMs);
  }

  async expectCompanyContactsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.companyContacts), substring, timeoutMs);
  }

  async scrollCompanyContactsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.companyContacts));
  }

  async getInnerTextMichaelSmith(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.michaelSmith));
  }

  async expectMichaelSmithVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.michaelSmith), timeoutMs);
  }

  async expectMichaelSmithHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.michaelSmith), timeoutMs);
  }

  async expectMichaelSmithText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.michaelSmith), expected, timeoutMs);
  }

  async expectMichaelSmithContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.michaelSmith), substring, timeoutMs);
  }

  async scrollMichaelSmithIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.michaelSmith));
  }

  async getInnerTextPortalAdministrator(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.portalAdministrator));
  }

  async expectPortalAdministratorVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.portalAdministrator), expected, timeoutMs);
  }

  async expectPortalAdministratorContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.portalAdministrator), substring, timeoutMs);
  }

  async scrollPortalAdministratorIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.portalAdministrator));
  }

  async clickUser2AcmecorporationExampleCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.user2AcmecorporationExampleCom));
  }

  async doubleClickUser2AcmecorporationExampleCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.user2AcmecorporationExampleCom));
  }

  async expectUser2AcmecorporationExampleComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.user2AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser2AcmecorporationExampleComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.user2AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser2AcmecorporationExampleComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.user2AcmecorporationExampleCom), expected, timeoutMs);
  }

  async expectUser2AcmecorporationExampleComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.user2AcmecorporationExampleCom), substring, timeoutMs);
  }

  async scrollUser2AcmecorporationExampleComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.user2AcmecorporationExampleCom));
  }

  async getInnerTextEmmaJohnson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.emmaJohnson));
  }

  async expectEmmaJohnsonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.emmaJohnson), expected, timeoutMs);
  }

  async expectEmmaJohnsonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.emmaJohnson), substring, timeoutMs);
  }

  async scrollEmmaJohnsonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.emmaJohnson));
  }

  async getInnerTextPortalAdministrator2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.portalAdministrator2));
  }

  async expectPortalAdministrator2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.portalAdministrator2), timeoutMs);
  }

  async expectPortalAdministrator2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.portalAdministrator2), timeoutMs);
  }

  async expectPortalAdministrator2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.portalAdministrator2), expected, timeoutMs);
  }

  async expectPortalAdministrator2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.portalAdministrator2), substring, timeoutMs);
  }

  async scrollPortalAdministrator2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.portalAdministrator2));
  }

  async clickUser1AcmecorporationExampleCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.user1AcmecorporationExampleCom));
  }

  async doubleClickUser1AcmecorporationExampleCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.user1AcmecorporationExampleCom));
  }

  async expectUser1AcmecorporationExampleComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.user1AcmecorporationExampleCom), expected, timeoutMs);
  }

  async expectUser1AcmecorporationExampleComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.user1AcmecorporationExampleCom), substring, timeoutMs);
  }

  async scrollUser1AcmecorporationExampleComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.user1AcmecorporationExampleCom));
  }

  async getInnerTextDanielHall(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.danielHall));
  }

  async expectDanielHallVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.danielHall), timeoutMs);
  }

  async expectDanielHallHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.danielHall), timeoutMs);
  }

  async expectDanielHallText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.danielHall), expected, timeoutMs);
  }

  async expectDanielHallContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.danielHall), substring, timeoutMs);
  }

  async scrollDanielHallIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.danielHall));
  }

  async getInnerTextBillingRenewalsUser(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser));
  }

  async expectBillingRenewalsUserVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser), timeoutMs);
  }

  async expectBillingRenewalsUserHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser), timeoutMs);
  }

  async expectBillingRenewalsUserText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser), expected, timeoutMs);
  }

  async expectBillingRenewalsUserContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser), substring, timeoutMs);
  }

  async scrollBillingRenewalsUserIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser));
  }

  async clickUser18AcmecorporationExampleCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.user18AcmecorporationExampleCom));
  }

  async doubleClickUser18AcmecorporationExampleCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.user18AcmecorporationExampleCom));
  }

  async expectUser18AcmecorporationExampleComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.user18AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser18AcmecorporationExampleComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.user18AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser18AcmecorporationExampleComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.user18AcmecorporationExampleCom), expected, timeoutMs);
  }

  async expectUser18AcmecorporationExampleComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.user18AcmecorporationExampleCom), substring, timeoutMs);
  }

  async scrollUser18AcmecorporationExampleComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.user18AcmecorporationExampleCom));
  }

  async getInnerTextHarperAllen(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.harperAllen));
  }

  async expectHarperAllenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.harperAllen), timeoutMs);
  }

  async expectHarperAllenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.harperAllen), timeoutMs);
  }

  async expectHarperAllenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.harperAllen), expected, timeoutMs);
  }

  async expectHarperAllenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.harperAllen), substring, timeoutMs);
  }

  async scrollHarperAllenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.harperAllen));
  }

  async getInnerTextBillingRenewalsUser2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser2));
  }

  async expectBillingRenewalsUser2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser2), timeoutMs);
  }

  async expectBillingRenewalsUser2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser2), timeoutMs);
  }

  async expectBillingRenewalsUser2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser2), expected, timeoutMs);
  }

  async expectBillingRenewalsUser2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser2), substring, timeoutMs);
  }

  async scrollBillingRenewalsUser2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser2));
  }

  async clickUser19AcmecorporationExampleCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.user19AcmecorporationExampleCom));
  }

  async doubleClickUser19AcmecorporationExampleCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.user19AcmecorporationExampleCom));
  }

  async expectUser19AcmecorporationExampleComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.user19AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser19AcmecorporationExampleComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.user19AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser19AcmecorporationExampleComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.user19AcmecorporationExampleCom), expected, timeoutMs);
  }

  async expectUser19AcmecorporationExampleComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.user19AcmecorporationExampleCom), substring, timeoutMs);
  }

  async scrollUser19AcmecorporationExampleComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.user19AcmecorporationExampleCom));
  }

  async clickSendFeedback(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.sendFeedback));
  }

  async doubleClickSendFeedback(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.sendFeedback));
  }

  async expectSendFeedbackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AccountProfilePage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AccountProfilePage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AccountProfilePage.L.sendFeedback), expected, timeoutMs);
  }

  async expectSendFeedbackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AccountProfilePage.L.sendFeedback), substring, timeoutMs);
  }

  async scrollSendFeedbackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AccountProfilePage.L.sendFeedback));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async clickAcmeCorporation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.acmeCorporation));
  }

  async doubleClickAcmeCorporation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.acmeCorporation));
  }

  async longPressAcmeCorporation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.acmeCorporation));
  }

  async expectAcmeCorporationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.acmeCorporation), value, timeoutMs);
  }

  async expectAcmeCorporationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.acmeCorporation), count, timeoutMs);
  }

  async longPressUKGAssist(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGAssist));
  }

  async expectUKGAssistValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.uKGAssist), value, timeoutMs);
  }

  async expectUKGAssistEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.uKGAssist), count, timeoutMs);
  }

  async longPressSubscriptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.subscriptions));
  }

  async expectSubscriptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.subscriptions), value, timeoutMs);
  }

  async expectSubscriptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.subscriptions), count, timeoutMs);
  }

  async longPressImplementations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.implementations));
  }

  async expectImplementationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.implementations), value, timeoutMs);
  }

  async expectImplementationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.implementations), timeoutMs);
  }

  async expectImplementationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.implementations), timeoutMs);
  }

  async expectImplementationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.implementations), timeoutMs);
  }

  async expectImplementationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.implementations), timeoutMs);
  }

  async expectImplementationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.implementations), timeoutMs);
  }

  async expectImplementationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.implementations), count, timeoutMs);
  }

  async longPressBillings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.billings));
  }

  async expectBillingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.billings), value, timeoutMs);
  }

  async expectBillingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.billings), timeoutMs);
  }

  async expectBillingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.billings), timeoutMs);
  }

  async expectBillingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.billings), timeoutMs);
  }

  async expectBillingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.billings), timeoutMs);
  }

  async expectBillingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.billings), timeoutMs);
  }

  async expectBillingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.billings), count, timeoutMs);
  }

  async longPressSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.support));
  }

  async expectSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.support), value, timeoutMs);
  }

  async expectSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.support), timeoutMs);
  }

  async expectSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.support), timeoutMs);
  }

  async expectSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.support), timeoutMs);
  }

  async expectSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.support), timeoutMs);
  }

  async expectSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.support), timeoutMs);
  }

  async expectSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.support), count, timeoutMs);
  }

  async longPressAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.adoption));
  }

  async expectAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.adoption), value, timeoutMs);
  }

  async expectAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.adoption), timeoutMs);
  }

  async expectAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.adoption), timeoutMs);
  }

  async expectAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.adoption), timeoutMs);
  }

  async expectAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.adoption), timeoutMs);
  }

  async expectAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.adoption), timeoutMs);
  }

  async expectAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.adoption), count, timeoutMs);
  }

  async longPressAdmin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.admin));
  }

  async expectAdminValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.admin), value, timeoutMs);
  }

  async expectAdminEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.admin), timeoutMs);
  }

  async expectAdminDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.admin), timeoutMs);
  }

  async expectAdminChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.admin), timeoutMs);
  }

  async expectAdminUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.admin), timeoutMs);
  }

  async expectAdminFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.admin), timeoutMs);
  }

  async expectAdminCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.admin), count, timeoutMs);
  }

  async longPressAccountProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.accountProfile));
  }

  async expectAccountProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.accountProfile), value, timeoutMs);
  }

  async expectAccountProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.accountProfile), count, timeoutMs);
  }

  async longPressEJEmmaJohnsonPortal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.eJEmmaJohnsonPortal), value, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.eJEmmaJohnsonPortal), count, timeoutMs);
  }

  async longPressSignOut(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.signOut));
  }

  async expectSignOutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.signOut), value, timeoutMs);
  }

  async expectSignOutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.signOut), timeoutMs);
  }

  async expectSignOutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.signOut), timeoutMs);
  }

  async expectSignOutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.signOut), timeoutMs);
  }

  async expectSignOutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.signOut), count, timeoutMs);
  }

  async longPressCollapseSidebar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.collapseSidebar));
  }

  async expectCollapseSidebarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.collapseSidebar), value, timeoutMs);
  }

  async expectCollapseSidebarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.collapseSidebar), count, timeoutMs);
  }

  async clickCustomerSinceJan2022(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.customerSinceJan2022));
  }

  async doubleClickCustomerSinceJan2022(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.customerSinceJan2022));
  }

  async longPressCustomerSinceJan2022(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.customerSinceJan2022));
  }

  async expectCustomerSinceJan2022Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.customerSinceJan2022), value, timeoutMs);
  }

  async expectCustomerSinceJan2022Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.customerSinceJan2022), timeoutMs);
  }

  async expectCustomerSinceJan2022Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.customerSinceJan2022), timeoutMs);
  }

  async expectCustomerSinceJan2022Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.customerSinceJan2022), timeoutMs);
  }

  async expectCustomerSinceJan2022Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.customerSinceJan2022), timeoutMs);
  }

  async expectCustomerSinceJan2022Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.customerSinceJan2022), timeoutMs);
  }

  async expectCustomerSinceJan2022Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.customerSinceJan2022), count, timeoutMs);
  }

  async clickAcmeCorporation2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.acmeCorporation2));
  }

  async doubleClickAcmeCorporation2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.acmeCorporation2));
  }

  async longPressAcmeCorporation2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.acmeCorporation2));
  }

  async expectAcmeCorporation2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.acmeCorporation2), value, timeoutMs);
  }

  async expectAcmeCorporation2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.acmeCorporation2), timeoutMs);
  }

  async expectAcmeCorporation2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.acmeCorporation2), timeoutMs);
  }

  async expectAcmeCorporation2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.acmeCorporation2), timeoutMs);
  }

  async expectAcmeCorporation2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.acmeCorporation2), timeoutMs);
  }

  async expectAcmeCorporation2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.acmeCorporation2), timeoutMs);
  }

  async expectAcmeCorporation2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.acmeCorporation2), count, timeoutMs);
  }

  async clickSolutionIDSOL2001(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.solutionIDSOL2001));
  }

  async doubleClickSolutionIDSOL2001(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.solutionIDSOL2001));
  }

  async longPressSolutionIDSOL2001(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.solutionIDSOL2001));
  }

  async expectSolutionIDSOL2001Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.solutionIDSOL2001), value, timeoutMs);
  }

  async expectSolutionIDSOL2001Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.solutionIDSOL2001), timeoutMs);
  }

  async expectSolutionIDSOL2001Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.solutionIDSOL2001), timeoutMs);
  }

  async expectSolutionIDSOL2001Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.solutionIDSOL2001), timeoutMs);
  }

  async expectSolutionIDSOL2001Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.solutionIDSOL2001), timeoutMs);
  }

  async expectSolutionIDSOL2001Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.solutionIDSOL2001), timeoutMs);
  }

  async expectSolutionIDSOL2001Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.solutionIDSOL2001), count, timeoutMs);
  }

  async clickSolutionID(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.solutionID));
  }

  async doubleClickSolutionID(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.solutionID));
  }

  async longPressSolutionID(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.solutionID));
  }

  async expectSolutionIDValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.solutionID), value, timeoutMs);
  }

  async expectSolutionIDEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.solutionID), timeoutMs);
  }

  async expectSolutionIDDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.solutionID), timeoutMs);
  }

  async expectSolutionIDChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.solutionID), timeoutMs);
  }

  async expectSolutionIDUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.solutionID), timeoutMs);
  }

  async expectSolutionIDFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.solutionID), timeoutMs);
  }

  async expectSolutionIDCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.solutionID), count, timeoutMs);
  }

  async clickSOL2001(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.sOL2001));
  }

  async doubleClickSOL2001(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.sOL2001));
  }

  async longPressSOL2001(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.sOL2001));
  }

  async expectSOL2001Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.sOL2001), value, timeoutMs);
  }

  async expectSOL2001Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.sOL2001), timeoutMs);
  }

  async expectSOL2001Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.sOL2001), timeoutMs);
  }

  async expectSOL2001Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.sOL2001), timeoutMs);
  }

  async expectSOL2001Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.sOL2001), timeoutMs);
  }

  async expectSOL2001Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.sOL2001), timeoutMs);
  }

  async expectSOL2001Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.sOL2001), count, timeoutMs);
  }

  async clickBillTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.billTo));
  }

  async doubleClickBillTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.billTo));
  }

  async longPressBillTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.billTo));
  }

  async expectBillToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.billTo), value, timeoutMs);
  }

  async expectBillToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.billTo), timeoutMs);
  }

  async expectBillToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.billTo), timeoutMs);
  }

  async expectBillToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.billTo), timeoutMs);
  }

  async expectBillToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.billTo), timeoutMs);
  }

  async expectBillToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.billTo), timeoutMs);
  }

  async expectBillToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.billTo), count, timeoutMs);
  }

  async clickMainStNew(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.MainStNew));
  }

  async doubleClickMainStNew(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.MainStNew));
  }

  async longPressMainStNew(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.MainStNew));
  }

  async expectMainStNewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.MainStNew), value, timeoutMs);
  }

  async expectMainStNewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.MainStNew), timeoutMs);
  }

  async expectMainStNewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.MainStNew), timeoutMs);
  }

  async expectMainStNewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.MainStNew), timeoutMs);
  }

  async expectMainStNewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.MainStNew), timeoutMs);
  }

  async expectMainStNewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.MainStNew), timeoutMs);
  }

  async expectMainStNewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.MainStNew), count, timeoutMs);
  }

  async clickYourUKGTeam(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.yourUKGTeam));
  }

  async doubleClickYourUKGTeam(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.yourUKGTeam));
  }

  async longPressYourUKGTeam(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.yourUKGTeam));
  }

  async expectYourUKGTeamValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.yourUKGTeam), value, timeoutMs);
  }

  async expectYourUKGTeamEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.yourUKGTeam), timeoutMs);
  }

  async expectYourUKGTeamDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.yourUKGTeam), timeoutMs);
  }

  async expectYourUKGTeamChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.yourUKGTeam), timeoutMs);
  }

  async expectYourUKGTeamUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.yourUKGTeam), timeoutMs);
  }

  async expectYourUKGTeamFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.yourUKGTeam), timeoutMs);
  }

  async expectYourUKGTeamCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.yourUKGTeam), count, timeoutMs);
  }

  async clickJohnSmith(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.johnSmith));
  }

  async doubleClickJohnSmith(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.johnSmith));
  }

  async longPressJohnSmith(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.johnSmith));
  }

  async expectJohnSmithValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.johnSmith), value, timeoutMs);
  }

  async expectJohnSmithEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.johnSmith), timeoutMs);
  }

  async expectJohnSmithDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.johnSmith), timeoutMs);
  }

  async expectJohnSmithChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.johnSmith), timeoutMs);
  }

  async expectJohnSmithUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.johnSmith), timeoutMs);
  }

  async expectJohnSmithFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.johnSmith), timeoutMs);
  }

  async expectJohnSmithCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.johnSmith), count, timeoutMs);
  }

  async clickCustomerSuccessManager(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.customerSuccessManager));
  }

  async doubleClickCustomerSuccessManager(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.customerSuccessManager));
  }

  async longPressCustomerSuccessManager(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.customerSuccessManager));
  }

  async expectCustomerSuccessManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.customerSuccessManager), value, timeoutMs);
  }

  async expectCustomerSuccessManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.customerSuccessManager), count, timeoutMs);
  }

  async longPressJohnSmithAcmecorporationCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.johnSmithAcmecorporationCom));
  }

  async expectJohnSmithAcmecorporationComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.johnSmithAcmecorporationCom), value, timeoutMs);
  }

  async expectJohnSmithAcmecorporationComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.johnSmithAcmecorporationCom), timeoutMs);
  }

  async expectJohnSmithAcmecorporationComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.johnSmithAcmecorporationCom), timeoutMs);
  }

  async expectJohnSmithAcmecorporationComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.johnSmithAcmecorporationCom), timeoutMs);
  }

  async expectJohnSmithAcmecorporationComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.johnSmithAcmecorporationCom), timeoutMs);
  }

  async expectJohnSmithAcmecorporationComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.johnSmithAcmecorporationCom), timeoutMs);
  }

  async expectJohnSmithAcmecorporationComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.johnSmithAcmecorporationCom), count, timeoutMs);
  }

  async longPressA(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.a));
  }

  async expectAValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.a), value, timeoutMs);
  }

  async expectAEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.a), timeoutMs);
  }

  async expectADisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.a), timeoutMs);
  }

  async expectAChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.a), timeoutMs);
  }

  async expectAUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.a), timeoutMs);
  }

  async expectAFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.a), timeoutMs);
  }

  async expectACount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.a), count, timeoutMs);
  }

  async clickSarahJohnson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.sarahJohnson));
  }

  async doubleClickSarahJohnson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.sarahJohnson));
  }

  async longPressSarahJohnson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.sarahJohnson));
  }

  async expectSarahJohnsonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.sarahJohnson), value, timeoutMs);
  }

  async expectSarahJohnsonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.sarahJohnson), timeoutMs);
  }

  async expectSarahJohnsonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.sarahJohnson), timeoutMs);
  }

  async expectSarahJohnsonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.sarahJohnson), timeoutMs);
  }

  async expectSarahJohnsonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.sarahJohnson), timeoutMs);
  }

  async expectSarahJohnsonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.sarahJohnson), timeoutMs);
  }

  async expectSarahJohnsonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.sarahJohnson), count, timeoutMs);
  }

  async clickAccountExecutive(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.accountExecutive));
  }

  async doubleClickAccountExecutive(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.accountExecutive));
  }

  async longPressAccountExecutive(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.accountExecutive));
  }

  async expectAccountExecutiveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.accountExecutive), value, timeoutMs);
  }

  async expectAccountExecutiveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.accountExecutive), timeoutMs);
  }

  async expectAccountExecutiveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.accountExecutive), timeoutMs);
  }

  async expectAccountExecutiveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.accountExecutive), timeoutMs);
  }

  async expectAccountExecutiveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.accountExecutive), timeoutMs);
  }

  async expectAccountExecutiveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.accountExecutive), timeoutMs);
  }

  async expectAccountExecutiveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.accountExecutive), count, timeoutMs);
  }

  async longPressSarahJohnsonAcmecorporationCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.sarahJohnsonAcmecorporationCom));
  }

  async expectSarahJohnsonAcmecorporationComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.sarahJohnsonAcmecorporationCom), value, timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.sarahJohnsonAcmecorporationCom), timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.sarahJohnsonAcmecorporationCom), timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.sarahJohnsonAcmecorporationCom), timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.sarahJohnsonAcmecorporationCom), timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.sarahJohnsonAcmecorporationCom), timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.sarahJohnsonAcmecorporationCom), count, timeoutMs);
  }

  async longPressALink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.aLink));
  }

  async expectALinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.aLink), value, timeoutMs);
  }

  async expectALinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.aLink), timeoutMs);
  }

  async expectALinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.aLink), timeoutMs);
  }

  async expectALinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.aLink), timeoutMs);
  }

  async expectALinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.aLink), timeoutMs);
  }

  async expectALinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.aLink), timeoutMs);
  }

  async expectALinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.aLink), count, timeoutMs);
  }

  async clickMikeBrown(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.mikeBrown));
  }

  async doubleClickMikeBrown(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.mikeBrown));
  }

  async longPressMikeBrown(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.mikeBrown));
  }

  async expectMikeBrownValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.mikeBrown), value, timeoutMs);
  }

  async expectMikeBrownEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.mikeBrown), timeoutMs);
  }

  async expectMikeBrownDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.mikeBrown), timeoutMs);
  }

  async expectMikeBrownChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.mikeBrown), timeoutMs);
  }

  async expectMikeBrownUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.mikeBrown), timeoutMs);
  }

  async expectMikeBrownFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.mikeBrown), timeoutMs);
  }

  async expectMikeBrownCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.mikeBrown), count, timeoutMs);
  }

  async clickTechnicalAccountManager(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.technicalAccountManager));
  }

  async doubleClickTechnicalAccountManager(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.technicalAccountManager));
  }

  async longPressTechnicalAccountManager(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.technicalAccountManager));
  }

  async expectTechnicalAccountManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.technicalAccountManager), value, timeoutMs);
  }

  async expectTechnicalAccountManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.technicalAccountManager), timeoutMs);
  }

  async expectTechnicalAccountManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.technicalAccountManager), timeoutMs);
  }

  async expectTechnicalAccountManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.technicalAccountManager), timeoutMs);
  }

  async expectTechnicalAccountManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.technicalAccountManager), timeoutMs);
  }

  async expectTechnicalAccountManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.technicalAccountManager), timeoutMs);
  }

  async expectTechnicalAccountManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.technicalAccountManager), count, timeoutMs);
  }

  async longPressMikeBrownAcmecorporationCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.mikeBrownAcmecorporationCom));
  }

  async expectMikeBrownAcmecorporationComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.mikeBrownAcmecorporationCom), value, timeoutMs);
  }

  async expectMikeBrownAcmecorporationComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.mikeBrownAcmecorporationCom), timeoutMs);
  }

  async expectMikeBrownAcmecorporationComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.mikeBrownAcmecorporationCom), timeoutMs);
  }

  async expectMikeBrownAcmecorporationComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.mikeBrownAcmecorporationCom), timeoutMs);
  }

  async expectMikeBrownAcmecorporationComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.mikeBrownAcmecorporationCom), timeoutMs);
  }

  async expectMikeBrownAcmecorporationComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.mikeBrownAcmecorporationCom), timeoutMs);
  }

  async expectMikeBrownAcmecorporationComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.mikeBrownAcmecorporationCom), count, timeoutMs);
  }

  async longPressALink2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.aLink2));
  }

  async expectALink2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.aLink2), value, timeoutMs);
  }

  async expectALink2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.aLink2), timeoutMs);
  }

  async expectALink2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.aLink2), timeoutMs);
  }

  async expectALink2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.aLink2), timeoutMs);
  }

  async expectALink2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.aLink2), timeoutMs);
  }

  async expectALink2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.aLink2), timeoutMs);
  }

  async expectALink2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.aLink2), count, timeoutMs);
  }

  async clickUKGSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGSupport));
  }

  async doubleClickUKGSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGSupport));
  }

  async longPressUKGSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGSupport));
  }

  async expectUKGSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.uKGSupport), value, timeoutMs);
  }

  async expectUKGSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.uKGSupport), timeoutMs);
  }

  async expectUKGSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.uKGSupport), timeoutMs);
  }

  async expectUKGSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.uKGSupport), timeoutMs);
  }

  async expectUKGSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.uKGSupport), timeoutMs);
  }

  async expectUKGSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.uKGSupport), timeoutMs);
  }

  async expectUKGSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.uKGSupport), count, timeoutMs);
  }

  async clickGlobalSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.GlobalSupport));
  }

  async doubleClickGlobalSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.GlobalSupport));
  }

  async longPressGlobalSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.GlobalSupport));
  }

  async expectGlobalSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.GlobalSupport), value, timeoutMs);
  }

  async expectGlobalSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.GlobalSupport), timeoutMs);
  }

  async expectGlobalSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.GlobalSupport), timeoutMs);
  }

  async expectGlobalSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.GlobalSupport), timeoutMs);
  }

  async expectGlobalSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.GlobalSupport), timeoutMs);
  }

  async expectGlobalSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.GlobalSupport), timeoutMs);
  }

  async expectGlobalSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.GlobalSupport), count, timeoutMs);
  }

  async longPressSupportUkgCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.supportUkgCom));
  }

  async expectSupportUkgComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.supportUkgCom), value, timeoutMs);
  }

  async expectSupportUkgComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.supportUkgCom), timeoutMs);
  }

  async expectSupportUkgComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.supportUkgCom), timeoutMs);
  }

  async expectSupportUkgComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.supportUkgCom), timeoutMs);
  }

  async expectSupportUkgComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.supportUkgCom), timeoutMs);
  }

  async expectSupportUkgComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.supportUkgCom), timeoutMs);
  }

  async expectSupportUkgComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.supportUkgCom), count, timeoutMs);
  }

  async longPressALink3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.aLink3));
  }

  async expectALink3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.aLink3), value, timeoutMs);
  }

  async expectALink3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.aLink3), timeoutMs);
  }

  async expectALink3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.aLink3), timeoutMs);
  }

  async expectALink3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.aLink3), timeoutMs);
  }

  async expectALink3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.aLink3), timeoutMs);
  }

  async expectALink3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.aLink3), timeoutMs);
  }

  async expectALink3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.aLink3), count, timeoutMs);
  }

  async clickResources(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.resources));
  }

  async doubleClickResources(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.resources));
  }

  async longPressResources(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.resources));
  }

  async expectResourcesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.resources), value, timeoutMs);
  }

  async expectResourcesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.resources), timeoutMs);
  }

  async expectResourcesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.resources), timeoutMs);
  }

  async expectResourcesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.resources), timeoutMs);
  }

  async expectResourcesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.resources), timeoutMs);
  }

  async expectResourcesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.resources), timeoutMs);
  }

  async expectResourcesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.resources), count, timeoutMs);
  }

  async clickUsefulLinksPortalsAnd(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.usefulLinksPortalsAnd));
  }

  async doubleClickUsefulLinksPortalsAnd(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.usefulLinksPortalsAnd));
  }

  async longPressUsefulLinksPortalsAnd(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.usefulLinksPortalsAnd));
  }

  async expectUsefulLinksPortalsAndValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.usefulLinksPortalsAnd), value, timeoutMs);
  }

  async expectUsefulLinksPortalsAndEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.usefulLinksPortalsAnd), timeoutMs);
  }

  async expectUsefulLinksPortalsAndDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.usefulLinksPortalsAnd), timeoutMs);
  }

  async expectUsefulLinksPortalsAndChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.usefulLinksPortalsAnd), timeoutMs);
  }

  async expectUsefulLinksPortalsAndUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.usefulLinksPortalsAnd), timeoutMs);
  }

  async expectUsefulLinksPortalsAndFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.usefulLinksPortalsAnd), timeoutMs);
  }

  async expectUsefulLinksPortalsAndCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.usefulLinksPortalsAnd), count, timeoutMs);
  }

  async longPressCommunityConnectWith50000(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.communityConnectWith50000));
  }

  async expectCommunityConnectWith50000Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.communityConnectWith50000), value, timeoutMs);
  }

  async expectCommunityConnectWith50000Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.communityConnectWith50000), timeoutMs);
  }

  async expectCommunityConnectWith50000Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.communityConnectWith50000), timeoutMs);
  }

  async expectCommunityConnectWith50000Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.communityConnectWith50000), timeoutMs);
  }

  async expectCommunityConnectWith50000Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.communityConnectWith50000), timeoutMs);
  }

  async expectCommunityConnectWith50000Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.communityConnectWith50000), timeoutMs);
  }

  async expectCommunityConnectWith50000Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.communityConnectWith50000), count, timeoutMs);
  }

  async longPressUKGLearnHubAccess(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGLearnHubAccess));
  }

  async expectUKGLearnHubAccessValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.uKGLearnHubAccess), value, timeoutMs);
  }

  async expectUKGLearnHubAccessEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.uKGLearnHubAccess), timeoutMs);
  }

  async expectUKGLearnHubAccessDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.uKGLearnHubAccess), timeoutMs);
  }

  async expectUKGLearnHubAccessChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.uKGLearnHubAccess), timeoutMs);
  }

  async expectUKGLearnHubAccessUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.uKGLearnHubAccess), timeoutMs);
  }

  async expectUKGLearnHubAccessFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.uKGLearnHubAccess), timeoutMs);
  }

  async expectUKGLearnHubAccessCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.uKGLearnHubAccess), count, timeoutMs);
  }

  async longPressUKGPROSignIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGPROSignIn));
  }

  async expectUKGPROSignInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.uKGPROSignIn), value, timeoutMs);
  }

  async expectUKGPROSignInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.uKGPROSignIn), timeoutMs);
  }

  async expectUKGPROSignInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.uKGPROSignIn), timeoutMs);
  }

  async expectUKGPROSignInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.uKGPROSignIn), timeoutMs);
  }

  async expectUKGPROSignInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.uKGPROSignIn), timeoutMs);
  }

  async expectUKGPROSignInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.uKGPROSignIn), timeoutMs);
  }

  async expectUKGPROSignInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.uKGPROSignIn), count, timeoutMs);
  }

  async longPressUKGProWFMWorkforce(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGProWFMWorkforce));
  }

  async expectUKGProWFMWorkforceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.uKGProWFMWorkforce), value, timeoutMs);
  }

  async expectUKGProWFMWorkforceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.uKGProWFMWorkforce), timeoutMs);
  }

  async expectUKGProWFMWorkforceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.uKGProWFMWorkforce), timeoutMs);
  }

  async expectUKGProWFMWorkforceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.uKGProWFMWorkforce), timeoutMs);
  }

  async expectUKGProWFMWorkforceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.uKGProWFMWorkforce), timeoutMs);
  }

  async expectUKGProWFMWorkforceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.uKGProWFMWorkforce), timeoutMs);
  }

  async expectUKGProWFMWorkforceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.uKGProWFMWorkforce), count, timeoutMs);
  }

  async longPressUKGSupportSubmitTickets(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.uKGSupportSubmitTickets));
  }

  async expectUKGSupportSubmitTicketsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.uKGSupportSubmitTickets), value, timeoutMs);
  }

  async expectUKGSupportSubmitTicketsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.uKGSupportSubmitTickets), timeoutMs);
  }

  async expectUKGSupportSubmitTicketsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.uKGSupportSubmitTickets), timeoutMs);
  }

  async expectUKGSupportSubmitTicketsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.uKGSupportSubmitTickets), timeoutMs);
  }

  async expectUKGSupportSubmitTicketsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.uKGSupportSubmitTickets), timeoutMs);
  }

  async expectUKGSupportSubmitTicketsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.uKGSupportSubmitTickets), timeoutMs);
  }

  async expectUKGSupportSubmitTicketsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.uKGSupportSubmitTickets), count, timeoutMs);
  }

  async longPressTrustCenterAccessSecurity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.trustCenterAccessSecurity));
  }

  async expectTrustCenterAccessSecurityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.trustCenterAccessSecurity), value, timeoutMs);
  }

  async expectTrustCenterAccessSecurityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.trustCenterAccessSecurity), timeoutMs);
  }

  async expectTrustCenterAccessSecurityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.trustCenterAccessSecurity), timeoutMs);
  }

  async expectTrustCenterAccessSecurityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.trustCenterAccessSecurity), timeoutMs);
  }

  async expectTrustCenterAccessSecurityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.trustCenterAccessSecurity), timeoutMs);
  }

  async expectTrustCenterAccessSecurityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.trustCenterAccessSecurity), timeoutMs);
  }

  async expectTrustCenterAccessSecurityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.trustCenterAccessSecurity), count, timeoutMs);
  }

  async clickCompanyContacts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.companyContacts));
  }

  async doubleClickCompanyContacts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.companyContacts));
  }

  async longPressCompanyContacts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.companyContacts));
  }

  async expectCompanyContactsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.companyContacts), value, timeoutMs);
  }

  async expectCompanyContactsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.companyContacts), timeoutMs);
  }

  async expectCompanyContactsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.companyContacts), timeoutMs);
  }

  async expectCompanyContactsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.companyContacts), timeoutMs);
  }

  async expectCompanyContactsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.companyContacts), timeoutMs);
  }

  async expectCompanyContactsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.companyContacts), timeoutMs);
  }

  async expectCompanyContactsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.companyContacts), count, timeoutMs);
  }

  async clickMichaelSmith(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.michaelSmith));
  }

  async doubleClickMichaelSmith(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.michaelSmith));
  }

  async longPressMichaelSmith(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.michaelSmith));
  }

  async expectMichaelSmithValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.michaelSmith), value, timeoutMs);
  }

  async expectMichaelSmithEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.michaelSmith), timeoutMs);
  }

  async expectMichaelSmithDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.michaelSmith), timeoutMs);
  }

  async expectMichaelSmithChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.michaelSmith), timeoutMs);
  }

  async expectMichaelSmithUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.michaelSmith), timeoutMs);
  }

  async expectMichaelSmithFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.michaelSmith), timeoutMs);
  }

  async expectMichaelSmithCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.michaelSmith), count, timeoutMs);
  }

  async clickPortalAdministrator(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.portalAdministrator));
  }

  async doubleClickPortalAdministrator(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.portalAdministrator));
  }

  async longPressPortalAdministrator(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.portalAdministrator));
  }

  async expectPortalAdministratorValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.portalAdministrator), value, timeoutMs);
  }

  async expectPortalAdministratorEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.portalAdministrator), count, timeoutMs);
  }

  async longPressUser2AcmecorporationExampleCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.user2AcmecorporationExampleCom));
  }

  async expectUser2AcmecorporationExampleComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.user2AcmecorporationExampleCom), value, timeoutMs);
  }

  async expectUser2AcmecorporationExampleComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.user2AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser2AcmecorporationExampleComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.user2AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser2AcmecorporationExampleComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.user2AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser2AcmecorporationExampleComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.user2AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser2AcmecorporationExampleComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.user2AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser2AcmecorporationExampleComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.user2AcmecorporationExampleCom), count, timeoutMs);
  }

  async clickEmmaJohnson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.emmaJohnson));
  }

  async doubleClickEmmaJohnson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.emmaJohnson));
  }

  async longPressEmmaJohnson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.emmaJohnson));
  }

  async expectEmmaJohnsonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.emmaJohnson), value, timeoutMs);
  }

  async expectEmmaJohnsonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.emmaJohnson), count, timeoutMs);
  }

  async clickPortalAdministrator2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.portalAdministrator2));
  }

  async doubleClickPortalAdministrator2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.portalAdministrator2));
  }

  async longPressPortalAdministrator2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.portalAdministrator2));
  }

  async expectPortalAdministrator2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.portalAdministrator2), value, timeoutMs);
  }

  async expectPortalAdministrator2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.portalAdministrator2), timeoutMs);
  }

  async expectPortalAdministrator2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.portalAdministrator2), timeoutMs);
  }

  async expectPortalAdministrator2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.portalAdministrator2), timeoutMs);
  }

  async expectPortalAdministrator2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.portalAdministrator2), timeoutMs);
  }

  async expectPortalAdministrator2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.portalAdministrator2), timeoutMs);
  }

  async expectPortalAdministrator2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.portalAdministrator2), count, timeoutMs);
  }

  async longPressUser1AcmecorporationExampleCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.user1AcmecorporationExampleCom));
  }

  async expectUser1AcmecorporationExampleComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.user1AcmecorporationExampleCom), value, timeoutMs);
  }

  async expectUser1AcmecorporationExampleComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.user1AcmecorporationExampleCom), count, timeoutMs);
  }

  async clickDanielHall(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.danielHall));
  }

  async doubleClickDanielHall(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.danielHall));
  }

  async longPressDanielHall(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.danielHall));
  }

  async expectDanielHallValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.danielHall), value, timeoutMs);
  }

  async expectDanielHallEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.danielHall), timeoutMs);
  }

  async expectDanielHallDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.danielHall), timeoutMs);
  }

  async expectDanielHallChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.danielHall), timeoutMs);
  }

  async expectDanielHallUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.danielHall), timeoutMs);
  }

  async expectDanielHallFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.danielHall), timeoutMs);
  }

  async expectDanielHallCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.danielHall), count, timeoutMs);
  }

  async clickBillingRenewalsUser(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser));
  }

  async doubleClickBillingRenewalsUser(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser));
  }

  async longPressBillingRenewalsUser(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser));
  }

  async expectBillingRenewalsUserValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser), value, timeoutMs);
  }

  async expectBillingRenewalsUserEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser), timeoutMs);
  }

  async expectBillingRenewalsUserDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser), timeoutMs);
  }

  async expectBillingRenewalsUserChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser), timeoutMs);
  }

  async expectBillingRenewalsUserUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser), timeoutMs);
  }

  async expectBillingRenewalsUserFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser), timeoutMs);
  }

  async expectBillingRenewalsUserCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser), count, timeoutMs);
  }

  async longPressUser18AcmecorporationExampleCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.user18AcmecorporationExampleCom));
  }

  async expectUser18AcmecorporationExampleComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.user18AcmecorporationExampleCom), value, timeoutMs);
  }

  async expectUser18AcmecorporationExampleComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.user18AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser18AcmecorporationExampleComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.user18AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser18AcmecorporationExampleComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.user18AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser18AcmecorporationExampleComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.user18AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser18AcmecorporationExampleComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.user18AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser18AcmecorporationExampleComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.user18AcmecorporationExampleCom), count, timeoutMs);
  }

  async clickHarperAllen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.harperAllen));
  }

  async doubleClickHarperAllen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.harperAllen));
  }

  async longPressHarperAllen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.harperAllen));
  }

  async expectHarperAllenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.harperAllen), value, timeoutMs);
  }

  async expectHarperAllenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.harperAllen), timeoutMs);
  }

  async expectHarperAllenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.harperAllen), timeoutMs);
  }

  async expectHarperAllenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.harperAllen), timeoutMs);
  }

  async expectHarperAllenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.harperAllen), timeoutMs);
  }

  async expectHarperAllenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.harperAllen), timeoutMs);
  }

  async expectHarperAllenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.harperAllen), count, timeoutMs);
  }

  async clickBillingRenewalsUser2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser2));
  }

  async doubleClickBillingRenewalsUser2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser2));
  }

  async longPressBillingRenewalsUser2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser2));
  }

  async expectBillingRenewalsUser2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser2), value, timeoutMs);
  }

  async expectBillingRenewalsUser2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser2), timeoutMs);
  }

  async expectBillingRenewalsUser2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser2), timeoutMs);
  }

  async expectBillingRenewalsUser2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser2), timeoutMs);
  }

  async expectBillingRenewalsUser2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser2), timeoutMs);
  }

  async expectBillingRenewalsUser2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser2), timeoutMs);
  }

  async expectBillingRenewalsUser2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.billingRenewalsUser2), count, timeoutMs);
  }

  async longPressUser19AcmecorporationExampleCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.user19AcmecorporationExampleCom));
  }

  async expectUser19AcmecorporationExampleComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.user19AcmecorporationExampleCom), value, timeoutMs);
  }

  async expectUser19AcmecorporationExampleComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AccountProfilePage.L.user19AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser19AcmecorporationExampleComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AccountProfilePage.L.user19AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser19AcmecorporationExampleComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.user19AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser19AcmecorporationExampleComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.user19AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser19AcmecorporationExampleComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.user19AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser19AcmecorporationExampleComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.user19AcmecorporationExampleCom), count, timeoutMs);
  }

  async longPressSendFeedback(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AccountProfilePage.L.sendFeedback));
  }

  async expectSendFeedbackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AccountProfilePage.L.sendFeedback), value, timeoutMs);
  }

  async expectSendFeedbackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AccountProfilePage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AccountProfilePage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AccountProfilePage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AccountProfilePage.L.sendFeedback), count, timeoutMs);
  }

}
