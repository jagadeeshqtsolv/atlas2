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

export class SubscriptionsPage {
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
    uKGProExpiresIn: { strategy: 'text' as const, value: 'UKG Pro expires in 18 hours — service disruption', actionKind: 'text' as const },
    EmployeesWillLose: { strategy: 'text' as const, value: '73,600 employees will lose access to payroll,', actionKind: 'text' as const },
    contactUKGSupport: { strategy: 'role' as const, value: 'Contact UKG Support', role: 'button', actionKind: 'button' as const },
    element: { strategy: 'text' as const, value: '1/2', actionKind: 'text' as const },
    previousAlert: { strategy: 'role' as const, value: 'Previous alert', role: 'button', actionKind: 'button' as const },
    nextAlert: { strategy: 'role' as const, value: 'Next alert', role: 'button', actionKind: 'button' as const },
    closeAlerts: { strategy: 'role' as const, value: 'Close alerts', role: 'button', actionKind: 'button' as const },
    atlasInsightsSubscriptions: { strategy: 'text' as const, value: 'Atlas Insights · Subscriptions', actionKind: 'text' as const },
    wasThisHelpful: { strategy: 'text' as const, value: 'Was this helpful?', actionKind: 'text' as const },
    helpful: { strategy: 'role' as const, value: 'Helpful', role: 'button', actionKind: 'button' as const },
    notHelpful: { strategy: 'role' as const, value: 'Not helpful', role: 'button', actionKind: 'button' as const },
    input: { strategy: 'placeholder' as const, value: 'How can we help you today', actionKind: 'textbox' as const },
    sendMessage: { strategy: 'role' as const, value: 'Send message', role: 'button', actionKind: 'button' as const },
    askAtlas: { strategy: 'text' as const, value: 'Ask Atlas', actionKind: 'text' as const },
    seatAllocation: { strategy: 'role' as const, value: 'Seat allocation', role: 'button', actionKind: 'button' as const },
    upcomingRenewals: { strategy: 'role' as const, value: 'Upcoming renewals', role: 'button', actionKind: 'button' as const },
    costTrends: { strategy: 'role' as const, value: 'Cost trends', role: 'button', actionKind: 'button' as const },
    autoRenewStatus: { strategy: 'role' as const, value: 'Auto-renew status', role: 'button', actionKind: 'button' as const },
    subscriptionOverview: { strategy: 'text' as const, value: 'Subscription overview', actionKind: 'text' as const },
    licensedProducts: { strategy: 'text' as const, value: 'Licensed products', actionKind: 'text' as const },
    nextRenewal: { strategy: 'text' as const, value: 'Next renewal', actionKind: 'text' as const },
    in18h: { strategy: 'text' as const, value: 'In 18h', actionKind: 'text' as const },
    uKGProPayroll: { strategy: 'text' as const, value: 'UKG Pro Payroll', actionKind: 'text' as const },
    annualPortfolioApprox: { strategy: 'text' as const, value: 'Annual portfolio (approx.)', actionKind: 'text' as const },
    element2: { strategy: 'text' as const, value: '$1,734,500.00', actionKind: 'text' as const },
    allSubscription4: { strategy: 'role' as const, value: 'All Subscription (4)', role: 'button', actionKind: 'button' as const },
    expiryIn30Days: { strategy: 'role' as const, value: 'Expiry in 30 Days (2)', role: 'button', actionKind: 'button' as const },
    signedPending1: { strategy: 'role' as const, value: 'Signed Pending (1)', role: 'button', actionKind: 'button' as const },
    product: { strategy: 'text' as const, value: 'Product', actionKind: 'text' as const },
    contract: { strategy: 'text' as const, value: 'Contract', actionKind: 'text' as const },
    status: { strategy: 'text' as const, value: 'Status', actionKind: 'text' as const },
    contractValue: { strategy: 'text' as const, value: 'Contract value', actionKind: 'text' as const },
    startDate: { strategy: 'text' as const, value: 'Start date', actionKind: 'text' as const },
    endDate: { strategy: 'text' as const, value: 'End date', actionKind: 'text' as const },
    renewalDate: { strategy: 'text' as const, value: 'Renewal Date', actionKind: 'text' as const },
    uKGDimensions: { strategy: 'text' as const, value: 'UKG Dimensions', actionKind: 'text' as const },
    uKGDimensionsCore: { strategy: 'text' as const, value: 'UKG Dimensions Core', actionKind: 'text' as const },
    DLeft: { strategy: 'text' as const, value: '14D left', actionKind: 'text' as const },
    element3: { strategy: 'text' as const, value: '$280,000', actionKind: 'text' as const },
    jun172026: { strategy: 'text' as const, value: 'Jun 17, 2026', actionKind: 'text' as const },
    uKGDimensionsAnalytics: { strategy: 'text' as const, value: 'UKG Dimensions Analytics', actionKind: 'text' as const },
    DLeft2: { strategy: 'text' as const, value: '14D left', actionKind: 'text' as const },
    element4: { strategy: 'text' as const, value: '$210,000', actionKind: 'text' as const },
    jun1720262: { strategy: 'text' as const, value: 'Jun 17, 2026', actionKind: 'text' as const },
    uKGPro: { strategy: 'text' as const, value: 'UKG Pro', actionKind: 'text' as const },
    uKGProPayroll2: { strategy: 'text' as const, value: 'UKG Pro Payroll', actionKind: 'text' as const },
    DLeft3: { strategy: 'text' as const, value: '25D left', actionKind: 'text' as const },
    element5: { strategy: 'text' as const, value: '$14,000', actionKind: 'text' as const },
    licenseUtilizationTrend: { strategy: 'text' as const, value: 'License Utilization Trend', actionKind: 'text' as const },
    monthlyLicenseUtilizationSummary: { strategy: 'text' as const, value: 'Monthly license utilization summary (last 6', actionKind: 'text' as const },
    filterByProduct: { strategy: 'role' as const, value: 'Filter by product', role: 'button', actionKind: 'button' as const },
    totalUtilisedLicenses: { strategy: 'text' as const, value: 'Total Utilised Licenses', actionKind: 'text' as const },
    element6: { strategy: 'text' as const, value: '77,250', actionKind: 'text' as const },
    contractHealth: { strategy: 'text' as const, value: 'Contract Health', actionKind: 'text' as const },
    activeContracts: { strategy: 'text' as const, value: 'Active contracts', actionKind: 'text' as const },
    pendingSignature: { strategy: 'text' as const, value: 'Pending signature', actionKind: 'text' as const },
    expiringContracts: { strategy: 'text' as const, value: 'Expiring contracts', actionKind: 'text' as const },
    noteForUpdation: { strategy: 'text' as const, value: 'Note : For Updation or Renewals, Please contact', actionKind: 'text' as const },
    signedPending: { strategy: 'text' as const, value: 'Signed Pending', actionKind: 'text' as const },
    uKGProEmployeeVoice: { strategy: 'text' as const, value: 'UKG Pro Employee Voice', actionKind: 'text' as const },
    element7: { strategy: 'text' as const, value: '#00492988', actionKind: 'text' as const },
    sOLEMPLVOC001: { strategy: 'text' as const, value: 'SOL-EMPL-VOC-001', actionKind: 'text' as const },
    sendFeedback: { strategy: 'role' as const, value: 'Send feedback', role: 'button', actionKind: 'button' as const },
    rechartsMeasurementSpan: { strategy: 'css' as const, value: '#recharts_measurement_span', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAcmeCorporation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.acmeCorporation));
  }

  async expectAcmeCorporationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.acmeCorporation), expected, timeoutMs);
  }

  async expectAcmeCorporationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.acmeCorporation), substring, timeoutMs);
  }

  async scrollAcmeCorporationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.acmeCorporation));
  }

  async clickUKGAssist(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGAssist));
  }

  async doubleClickUKGAssist(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGAssist));
  }

  async expectUKGAssistVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.uKGAssist), expected, timeoutMs);
  }

  async expectUKGAssistContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.uKGAssist), substring, timeoutMs);
  }

  async scrollUKGAssistIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGAssist));
  }

  async clickSubscriptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.subscriptions));
  }

  async doubleClickSubscriptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.subscriptions));
  }

  async expectSubscriptionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.subscriptions), expected, timeoutMs);
  }

  async expectSubscriptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.subscriptions), substring, timeoutMs);
  }

  async scrollSubscriptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.subscriptions));
  }

  async clickImplementations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.implementations));
  }

  async doubleClickImplementations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.implementations));
  }

  async expectImplementationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.implementations), timeoutMs);
  }

  async expectImplementationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.implementations), timeoutMs);
  }

  async expectImplementationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.implementations), expected, timeoutMs);
  }

  async expectImplementationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.implementations), substring, timeoutMs);
  }

  async scrollImplementationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.implementations));
  }

  async clickBillings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.billings));
  }

  async doubleClickBillings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.billings));
  }

  async expectBillingsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.billings), timeoutMs);
  }

  async expectBillingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.billings), timeoutMs);
  }

  async expectBillingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.billings), expected, timeoutMs);
  }

  async expectBillingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.billings), substring, timeoutMs);
  }

  async scrollBillingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.billings));
  }

  async clickSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.support));
  }

  async doubleClickSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.support));
  }

  async expectSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.support), timeoutMs);
  }

  async expectSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.support), timeoutMs);
  }

  async expectSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.support), expected, timeoutMs);
  }

  async expectSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.support), substring, timeoutMs);
  }

  async scrollSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.support));
  }

  async clickAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.adoption));
  }

  async doubleClickAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.adoption));
  }

  async expectAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.adoption), timeoutMs);
  }

  async expectAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.adoption), timeoutMs);
  }

  async expectAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.adoption), expected, timeoutMs);
  }

  async expectAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.adoption), substring, timeoutMs);
  }

  async scrollAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.adoption));
  }

  async clickAdmin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.admin));
  }

  async doubleClickAdmin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.admin));
  }

  async expectAdminVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.admin), timeoutMs);
  }

  async expectAdminHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.admin), timeoutMs);
  }

  async expectAdminText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.admin), expected, timeoutMs);
  }

  async expectAdminContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.admin), substring, timeoutMs);
  }

  async scrollAdminIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.admin));
  }

  async clickAccountProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.accountProfile));
  }

  async doubleClickAccountProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.accountProfile));
  }

  async expectAccountProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.accountProfile), expected, timeoutMs);
  }

  async expectAccountProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.accountProfile), substring, timeoutMs);
  }

  async scrollAccountProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.accountProfile));
  }

  async clickEJEmmaJohnsonPortal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.eJEmmaJohnsonPortal));
  }

  async doubleClickEJEmmaJohnsonPortal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.eJEmmaJohnsonPortal), expected, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.eJEmmaJohnsonPortal), substring, timeoutMs);
  }

  async scrollEJEmmaJohnsonPortalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.eJEmmaJohnsonPortal));
  }

  async clickSignOut(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.signOut));
  }

  async doubleClickSignOut(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.signOut));
  }

  async expectSignOutVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.signOut), timeoutMs);
  }

  async expectSignOutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.signOut), timeoutMs);
  }

  async expectSignOutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.signOut), timeoutMs);
  }

  async expectSignOutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.signOut), timeoutMs);
  }

  async expectSignOutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.signOut), expected, timeoutMs);
  }

  async expectSignOutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.signOut), substring, timeoutMs);
  }

  async scrollSignOutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.signOut));
  }

  async clickCollapseSidebar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.collapseSidebar));
  }

  async doubleClickCollapseSidebar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.collapseSidebar));
  }

  async expectCollapseSidebarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.collapseSidebar), expected, timeoutMs);
  }

  async expectCollapseSidebarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.collapseSidebar), substring, timeoutMs);
  }

  async scrollCollapseSidebarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.collapseSidebar));
  }

  async getInnerTextUKGProExpiresIn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProExpiresIn));
  }

  async expectUKGProExpiresInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.uKGProExpiresIn), timeoutMs);
  }

  async expectUKGProExpiresInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.uKGProExpiresIn), timeoutMs);
  }

  async expectUKGProExpiresInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.uKGProExpiresIn), expected, timeoutMs);
  }

  async expectUKGProExpiresInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.uKGProExpiresIn), substring, timeoutMs);
  }

  async scrollUKGProExpiresInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProExpiresIn));
  }

  async getInnerTextEmployeesWillLose(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.EmployeesWillLose));
  }

  async expectEmployeesWillLoseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.EmployeesWillLose), timeoutMs);
  }

  async expectEmployeesWillLoseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.EmployeesWillLose), timeoutMs);
  }

  async expectEmployeesWillLoseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.EmployeesWillLose), expected, timeoutMs);
  }

  async expectEmployeesWillLoseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.EmployeesWillLose), substring, timeoutMs);
  }

  async scrollEmployeesWillLoseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.EmployeesWillLose));
  }

  async clickContactUKGSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.contactUKGSupport));
  }

  async doubleClickContactUKGSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.contactUKGSupport));
  }

  async expectContactUKGSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.contactUKGSupport), timeoutMs);
  }

  async expectContactUKGSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.contactUKGSupport), timeoutMs);
  }

  async expectContactUKGSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.contactUKGSupport), timeoutMs);
  }

  async expectContactUKGSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.contactUKGSupport), timeoutMs);
  }

  async expectContactUKGSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.contactUKGSupport), expected, timeoutMs);
  }

  async expectContactUKGSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.contactUKGSupport), substring, timeoutMs);
  }

  async scrollContactUKGSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.contactUKGSupport));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.element));
  }

  async clickPreviousAlert(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.previousAlert));
  }

  async doubleClickPreviousAlert(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.previousAlert));
  }

  async expectPreviousAlertVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.previousAlert), timeoutMs);
  }

  async expectPreviousAlertHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.previousAlert), timeoutMs);
  }

  async expectPreviousAlertEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.previousAlert), timeoutMs);
  }

  async expectPreviousAlertDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.previousAlert), timeoutMs);
  }

  async expectPreviousAlertText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.previousAlert), expected, timeoutMs);
  }

  async expectPreviousAlertContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.previousAlert), substring, timeoutMs);
  }

  async scrollPreviousAlertIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.previousAlert));
  }

  async clickNextAlert(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.nextAlert));
  }

  async doubleClickNextAlert(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.nextAlert));
  }

  async expectNextAlertVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.nextAlert), timeoutMs);
  }

  async expectNextAlertHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.nextAlert), timeoutMs);
  }

  async expectNextAlertEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.nextAlert), timeoutMs);
  }

  async expectNextAlertDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.nextAlert), timeoutMs);
  }

  async expectNextAlertText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.nextAlert), expected, timeoutMs);
  }

  async expectNextAlertContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.nextAlert), substring, timeoutMs);
  }

  async scrollNextAlertIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.nextAlert));
  }

  async clickCloseAlerts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.closeAlerts));
  }

  async doubleClickCloseAlerts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.closeAlerts));
  }

  async expectCloseAlertsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.closeAlerts), expected, timeoutMs);
  }

  async expectCloseAlertsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.closeAlerts), substring, timeoutMs);
  }

  async scrollCloseAlertsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.closeAlerts));
  }

  async getInnerTextAtlasInsightsSubscriptions(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions));
  }

  async expectAtlasInsightsSubscriptionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), expected, timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), substring, timeoutMs);
  }

  async scrollAtlasInsightsSubscriptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions));
  }

  async getInnerTextWasThisHelpful(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.wasThisHelpful));
  }

  async expectWasThisHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.wasThisHelpful), expected, timeoutMs);
  }

  async expectWasThisHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.wasThisHelpful), substring, timeoutMs);
  }

  async scrollWasThisHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.wasThisHelpful));
  }

  async clickHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.helpful));
  }

  async doubleClickHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.helpful));
  }

  async expectHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.helpful), timeoutMs);
  }

  async expectHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.helpful), timeoutMs);
  }

  async expectHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.helpful), timeoutMs);
  }

  async expectHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.helpful), timeoutMs);
  }

  async expectHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.helpful), expected, timeoutMs);
  }

  async expectHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.helpful), substring, timeoutMs);
  }

  async scrollHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.helpful));
  }

  async clickNotHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.notHelpful));
  }

  async doubleClickNotHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.notHelpful));
  }

  async expectNotHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.notHelpful), expected, timeoutMs);
  }

  async expectNotHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.notHelpful), substring, timeoutMs);
  }

  async scrollNotHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.notHelpful));
  }

  async fillInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, SubscriptionsPage.L.input), value);
  }

  async clearInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, SubscriptionsPage.L.input));
  }

  async typeTextInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.input), value);
  }

  async expectInputVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.input), timeoutMs);
  }

  async expectInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.input), timeoutMs);
  }

  async expectInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.input), timeoutMs);
  }

  async expectInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.input), timeoutMs);
  }

  async expectInputValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.input), expected, timeoutMs);
  }

  async expectInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.input), timeoutMs);
  }

  async scrollInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.input));
  }

  async clickSendMessage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.sendMessage));
  }

  async doubleClickSendMessage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.sendMessage));
  }

  async expectSendMessageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.sendMessage), expected, timeoutMs);
  }

  async expectSendMessageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.sendMessage), substring, timeoutMs);
  }

  async scrollSendMessageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.sendMessage));
  }

  async getInnerTextAskAtlas(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.askAtlas));
  }

  async expectAskAtlasVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.askAtlas), expected, timeoutMs);
  }

  async expectAskAtlasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.askAtlas), substring, timeoutMs);
  }

  async scrollAskAtlasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.askAtlas));
  }

  async clickSeatAllocation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.seatAllocation));
  }

  async doubleClickSeatAllocation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.seatAllocation));
  }

  async expectSeatAllocationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.seatAllocation), timeoutMs);
  }

  async expectSeatAllocationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.seatAllocation), timeoutMs);
  }

  async expectSeatAllocationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.seatAllocation), timeoutMs);
  }

  async expectSeatAllocationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.seatAllocation), timeoutMs);
  }

  async expectSeatAllocationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.seatAllocation), expected, timeoutMs);
  }

  async expectSeatAllocationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.seatAllocation), substring, timeoutMs);
  }

  async scrollSeatAllocationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.seatAllocation));
  }

  async clickUpcomingRenewals(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals));
  }

  async doubleClickUpcomingRenewals(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals));
  }

  async expectUpcomingRenewalsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), timeoutMs);
  }

  async expectUpcomingRenewalsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), timeoutMs);
  }

  async expectUpcomingRenewalsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), timeoutMs);
  }

  async expectUpcomingRenewalsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), timeoutMs);
  }

  async expectUpcomingRenewalsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), expected, timeoutMs);
  }

  async expectUpcomingRenewalsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), substring, timeoutMs);
  }

  async scrollUpcomingRenewalsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals));
  }

  async clickCostTrends(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.costTrends));
  }

  async doubleClickCostTrends(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.costTrends));
  }

  async expectCostTrendsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.costTrends), timeoutMs);
  }

  async expectCostTrendsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.costTrends), timeoutMs);
  }

  async expectCostTrendsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.costTrends), timeoutMs);
  }

  async expectCostTrendsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.costTrends), timeoutMs);
  }

  async expectCostTrendsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.costTrends), expected, timeoutMs);
  }

  async expectCostTrendsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.costTrends), substring, timeoutMs);
  }

  async scrollCostTrendsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.costTrends));
  }

  async clickAutoRenewStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus));
  }

  async doubleClickAutoRenewStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus));
  }

  async expectAutoRenewStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), timeoutMs);
  }

  async expectAutoRenewStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), timeoutMs);
  }

  async expectAutoRenewStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), timeoutMs);
  }

  async expectAutoRenewStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), timeoutMs);
  }

  async expectAutoRenewStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), expected, timeoutMs);
  }

  async expectAutoRenewStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), substring, timeoutMs);
  }

  async scrollAutoRenewStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus));
  }

  async getInnerTextSubscriptionOverview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview));
  }

  async expectSubscriptionOverviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), timeoutMs);
  }

  async expectSubscriptionOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), timeoutMs);
  }

  async expectSubscriptionOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), expected, timeoutMs);
  }

  async expectSubscriptionOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), substring, timeoutMs);
  }

  async scrollSubscriptionOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview));
  }

  async getInnerTextLicensedProducts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.licensedProducts));
  }

  async expectLicensedProductsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.licensedProducts), timeoutMs);
  }

  async expectLicensedProductsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.licensedProducts), timeoutMs);
  }

  async expectLicensedProductsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.licensedProducts), expected, timeoutMs);
  }

  async expectLicensedProductsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.licensedProducts), substring, timeoutMs);
  }

  async scrollLicensedProductsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.licensedProducts));
  }

  async getInnerTextNextRenewal(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.nextRenewal));
  }

  async expectNextRenewalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.nextRenewal), timeoutMs);
  }

  async expectNextRenewalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.nextRenewal), timeoutMs);
  }

  async expectNextRenewalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.nextRenewal), expected, timeoutMs);
  }

  async expectNextRenewalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.nextRenewal), substring, timeoutMs);
  }

  async scrollNextRenewalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.nextRenewal));
  }

  async getInnerTextIn18h(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.in18h));
  }

  async expectIn18hVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.in18h), timeoutMs);
  }

  async expectIn18hHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.in18h), timeoutMs);
  }

  async expectIn18hText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.in18h), expected, timeoutMs);
  }

  async expectIn18hContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.in18h), substring, timeoutMs);
  }

  async scrollIn18hIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.in18h));
  }

  async getInnerTextUKGProPayroll(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll));
  }

  async expectUKGProPayrollVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll), timeoutMs);
  }

  async expectUKGProPayrollHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll), timeoutMs);
  }

  async expectUKGProPayrollText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll), expected, timeoutMs);
  }

  async expectUKGProPayrollContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll), substring, timeoutMs);
  }

  async scrollUKGProPayrollIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll));
  }

  async getInnerTextAnnualPortfolioApprox(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox));
  }

  async expectAnnualPortfolioApproxVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), timeoutMs);
  }

  async expectAnnualPortfolioApproxHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), timeoutMs);
  }

  async expectAnnualPortfolioApproxText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), expected, timeoutMs);
  }

  async expectAnnualPortfolioApproxContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), substring, timeoutMs);
  }

  async scrollAnnualPortfolioApproxIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox));
  }

  async getInnerTextElement2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.element2));
  }

  async expectElement2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.element2), timeoutMs);
  }

  async expectElement2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.element2), timeoutMs);
  }

  async expectElement2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.element2), expected, timeoutMs);
  }

  async expectElement2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.element2), substring, timeoutMs);
  }

  async scrollElement2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.element2));
  }

  async clickAllSubscription4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.allSubscription4));
  }

  async doubleClickAllSubscription4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.allSubscription4));
  }

  async expectAllSubscription4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.allSubscription4), timeoutMs);
  }

  async expectAllSubscription4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.allSubscription4), timeoutMs);
  }

  async expectAllSubscription4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.allSubscription4), timeoutMs);
  }

  async expectAllSubscription4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.allSubscription4), timeoutMs);
  }

  async expectAllSubscription4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.allSubscription4), expected, timeoutMs);
  }

  async expectAllSubscription4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.allSubscription4), substring, timeoutMs);
  }

  async scrollAllSubscription4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.allSubscription4));
  }

  async clickExpiryIn30Days(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days));
  }

  async doubleClickExpiryIn30Days(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days));
  }

  async expectExpiryIn30DaysVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), timeoutMs);
  }

  async expectExpiryIn30DaysHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), timeoutMs);
  }

  async expectExpiryIn30DaysEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), timeoutMs);
  }

  async expectExpiryIn30DaysDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), timeoutMs);
  }

  async expectExpiryIn30DaysText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), expected, timeoutMs);
  }

  async expectExpiryIn30DaysContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), substring, timeoutMs);
  }

  async scrollExpiryIn30DaysIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days));
  }

  async clickSignedPending1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending1));
  }

  async doubleClickSignedPending1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending1));
  }

  async expectSignedPending1Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.signedPending1), timeoutMs);
  }

  async expectSignedPending1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.signedPending1), timeoutMs);
  }

  async expectSignedPending1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.signedPending1), timeoutMs);
  }

  async expectSignedPending1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.signedPending1), timeoutMs);
  }

  async expectSignedPending1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.signedPending1), expected, timeoutMs);
  }

  async expectSignedPending1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.signedPending1), substring, timeoutMs);
  }

  async scrollSignedPending1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending1));
  }

  async getInnerTextProduct(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.product));
  }

  async expectProductVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.product), timeoutMs);
  }

  async expectProductHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.product), timeoutMs);
  }

  async expectProductText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.product), expected, timeoutMs);
  }

  async expectProductContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.product), substring, timeoutMs);
  }

  async scrollProductIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.product));
  }

  async getInnerTextContract(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.contract));
  }

  async expectContractVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.contract), timeoutMs);
  }

  async expectContractHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.contract), timeoutMs);
  }

  async expectContractText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.contract), expected, timeoutMs);
  }

  async expectContractContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.contract), substring, timeoutMs);
  }

  async scrollContractIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.contract));
  }

  async getInnerTextStatus(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.status));
  }

  async expectStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.status), timeoutMs);
  }

  async expectStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.status), timeoutMs);
  }

  async expectStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.status), expected, timeoutMs);
  }

  async expectStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.status), substring, timeoutMs);
  }

  async scrollStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.status));
  }

  async getInnerTextContractValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.contractValue));
  }

  async expectContractValueVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.contractValue), timeoutMs);
  }

  async expectContractValueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.contractValue), timeoutMs);
  }

  async expectContractValueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.contractValue), expected, timeoutMs);
  }

  async expectContractValueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.contractValue), substring, timeoutMs);
  }

  async scrollContractValueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.contractValue));
  }

  async getInnerTextStartDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.startDate));
  }

  async expectStartDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.startDate), timeoutMs);
  }

  async expectStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.startDate), timeoutMs);
  }

  async expectStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.startDate), expected, timeoutMs);
  }

  async expectStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.startDate), substring, timeoutMs);
  }

  async scrollStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.startDate));
  }

  async getInnerTextEndDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.endDate));
  }

  async expectEndDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.endDate), timeoutMs);
  }

  async expectEndDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.endDate), timeoutMs);
  }

  async expectEndDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.endDate), expected, timeoutMs);
  }

  async expectEndDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.endDate), substring, timeoutMs);
  }

  async scrollEndDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.endDate));
  }

  async getInnerTextRenewalDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.renewalDate));
  }

  async expectRenewalDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.renewalDate), timeoutMs);
  }

  async expectRenewalDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.renewalDate), timeoutMs);
  }

  async expectRenewalDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.renewalDate), expected, timeoutMs);
  }

  async expectRenewalDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.renewalDate), substring, timeoutMs);
  }

  async scrollRenewalDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.renewalDate));
  }

  async getInnerTextUKGDimensions(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensions));
  }

  async expectUKGDimensionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensions), timeoutMs);
  }

  async expectUKGDimensionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.uKGDimensions), timeoutMs);
  }

  async expectUKGDimensionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.uKGDimensions), expected, timeoutMs);
  }

  async expectUKGDimensionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.uKGDimensions), substring, timeoutMs);
  }

  async scrollUKGDimensionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensions));
  }

  async getInnerTextUKGDimensionsCore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsCore));
  }

  async expectUKGDimensionsCoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsCore), timeoutMs);
  }

  async expectUKGDimensionsCoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsCore), timeoutMs);
  }

  async expectUKGDimensionsCoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsCore), expected, timeoutMs);
  }

  async expectUKGDimensionsCoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsCore), substring, timeoutMs);
  }

  async scrollUKGDimensionsCoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsCore));
  }

  async getInnerTextDLeft(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.DLeft));
  }

  async expectDLeftVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.DLeft), timeoutMs);
  }

  async expectDLeftHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.DLeft), timeoutMs);
  }

  async expectDLeftText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.DLeft), expected, timeoutMs);
  }

  async expectDLeftContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.DLeft), substring, timeoutMs);
  }

  async scrollDLeftIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.DLeft));
  }

  async getInnerTextElement3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.element3));
  }

  async expectElement3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.element3), timeoutMs);
  }

  async expectElement3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.element3), timeoutMs);
  }

  async expectElement3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.element3), expected, timeoutMs);
  }

  async expectElement3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.element3), substring, timeoutMs);
  }

  async scrollElement3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.element3));
  }

  async getInnerTextJun172026(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.jun172026));
  }

  async expectJun172026Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.jun172026), timeoutMs);
  }

  async expectJun172026Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.jun172026), timeoutMs);
  }

  async expectJun172026Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.jun172026), expected, timeoutMs);
  }

  async expectJun172026ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.jun172026), substring, timeoutMs);
  }

  async scrollJun172026IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.jun172026));
  }

  async getInnerTextUKGDimensionsAnalytics(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsAnalytics));
  }

  async expectUKGDimensionsAnalyticsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsAnalytics), timeoutMs);
  }

  async expectUKGDimensionsAnalyticsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsAnalytics), timeoutMs);
  }

  async expectUKGDimensionsAnalyticsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsAnalytics), expected, timeoutMs);
  }

  async expectUKGDimensionsAnalyticsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsAnalytics), substring, timeoutMs);
  }

  async scrollUKGDimensionsAnalyticsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsAnalytics));
  }

  async getInnerTextDLeft2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.DLeft2));
  }

  async expectDLeft2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.DLeft2), timeoutMs);
  }

  async expectDLeft2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.DLeft2), timeoutMs);
  }

  async expectDLeft2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.DLeft2), expected, timeoutMs);
  }

  async expectDLeft2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.DLeft2), substring, timeoutMs);
  }

  async scrollDLeft2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.DLeft2));
  }

  async getInnerTextElement4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.element4));
  }

  async expectElement4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.element4), timeoutMs);
  }

  async expectElement4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.element4), timeoutMs);
  }

  async expectElement4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.element4), expected, timeoutMs);
  }

  async expectElement4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.element4), substring, timeoutMs);
  }

  async scrollElement4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.element4));
  }

  async getInnerTextJun1720262(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.jun1720262));
  }

  async expectJun1720262Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.jun1720262), timeoutMs);
  }

  async expectJun1720262Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.jun1720262), timeoutMs);
  }

  async expectJun1720262Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.jun1720262), expected, timeoutMs);
  }

  async expectJun1720262ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.jun1720262), substring, timeoutMs);
  }

  async scrollJun1720262IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.jun1720262));
  }

  async getInnerTextUKGPro(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGPro));
  }

  async expectUKGProVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.uKGPro), timeoutMs);
  }

  async expectUKGProHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.uKGPro), timeoutMs);
  }

  async expectUKGProText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.uKGPro), expected, timeoutMs);
  }

  async expectUKGProContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.uKGPro), substring, timeoutMs);
  }

  async scrollUKGProIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGPro));
  }

  async getInnerTextUKGProPayroll2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll2));
  }

  async expectUKGProPayroll2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll2), timeoutMs);
  }

  async expectUKGProPayroll2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll2), timeoutMs);
  }

  async expectUKGProPayroll2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll2), expected, timeoutMs);
  }

  async expectUKGProPayroll2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll2), substring, timeoutMs);
  }

  async scrollUKGProPayroll2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll2));
  }

  async getInnerTextDLeft3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.DLeft3));
  }

  async expectDLeft3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.DLeft3), timeoutMs);
  }

  async expectDLeft3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.DLeft3), timeoutMs);
  }

  async expectDLeft3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.DLeft3), expected, timeoutMs);
  }

  async expectDLeft3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.DLeft3), substring, timeoutMs);
  }

  async scrollDLeft3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.DLeft3));
  }

  async getInnerTextElement5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.element5));
  }

  async expectElement5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.element5), timeoutMs);
  }

  async expectElement5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.element5), timeoutMs);
  }

  async expectElement5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.element5), expected, timeoutMs);
  }

  async expectElement5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.element5), substring, timeoutMs);
  }

  async scrollElement5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.element5));
  }

  async getInnerTextLicenseUtilizationTrend(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend));
  }

  async expectLicenseUtilizationTrendVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), timeoutMs);
  }

  async expectLicenseUtilizationTrendHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), timeoutMs);
  }

  async expectLicenseUtilizationTrendText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), expected, timeoutMs);
  }

  async expectLicenseUtilizationTrendContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), substring, timeoutMs);
  }

  async scrollLicenseUtilizationTrendIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend));
  }

  async getInnerTextMonthlyLicenseUtilizationSummary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary));
  }

  async expectMonthlyLicenseUtilizationSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), expected, timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), substring, timeoutMs);
  }

  async scrollMonthlyLicenseUtilizationSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary));
  }

  async clickFilterByProduct(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.filterByProduct));
  }

  async doubleClickFilterByProduct(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.filterByProduct));
  }

  async expectFilterByProductVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.filterByProduct), timeoutMs);
  }

  async expectFilterByProductHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.filterByProduct), timeoutMs);
  }

  async expectFilterByProductEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.filterByProduct), timeoutMs);
  }

  async expectFilterByProductDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.filterByProduct), timeoutMs);
  }

  async expectFilterByProductText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.filterByProduct), expected, timeoutMs);
  }

  async expectFilterByProductContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.filterByProduct), substring, timeoutMs);
  }

  async scrollFilterByProductIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.filterByProduct));
  }

  async getInnerTextTotalUtilisedLicenses(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses));
  }

  async expectTotalUtilisedLicensesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), timeoutMs);
  }

  async expectTotalUtilisedLicensesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), timeoutMs);
  }

  async expectTotalUtilisedLicensesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), expected, timeoutMs);
  }

  async expectTotalUtilisedLicensesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), substring, timeoutMs);
  }

  async scrollTotalUtilisedLicensesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses));
  }

  async getInnerTextElement6(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.element6));
  }

  async expectElement6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.element6), timeoutMs);
  }

  async expectElement6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.element6), timeoutMs);
  }

  async expectElement6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.element6), expected, timeoutMs);
  }

  async expectElement6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.element6), substring, timeoutMs);
  }

  async scrollElement6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.element6));
  }

  async getInnerTextContractHealth(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.contractHealth));
  }

  async expectContractHealthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.contractHealth), timeoutMs);
  }

  async expectContractHealthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.contractHealth), timeoutMs);
  }

  async expectContractHealthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.contractHealth), expected, timeoutMs);
  }

  async expectContractHealthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.contractHealth), substring, timeoutMs);
  }

  async scrollContractHealthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.contractHealth));
  }

  async getInnerTextActiveContracts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.activeContracts));
  }

  async expectActiveContractsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.activeContracts), timeoutMs);
  }

  async expectActiveContractsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.activeContracts), timeoutMs);
  }

  async expectActiveContractsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.activeContracts), expected, timeoutMs);
  }

  async expectActiveContractsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.activeContracts), substring, timeoutMs);
  }

  async scrollActiveContractsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.activeContracts));
  }

  async getInnerTextPendingSignature(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.pendingSignature));
  }

  async expectPendingSignatureVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.pendingSignature), timeoutMs);
  }

  async expectPendingSignatureHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.pendingSignature), timeoutMs);
  }

  async expectPendingSignatureText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.pendingSignature), expected, timeoutMs);
  }

  async expectPendingSignatureContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.pendingSignature), substring, timeoutMs);
  }

  async scrollPendingSignatureIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.pendingSignature));
  }

  async getInnerTextExpiringContracts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiringContracts));
  }

  async expectExpiringContractsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.expiringContracts), timeoutMs);
  }

  async expectExpiringContractsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.expiringContracts), timeoutMs);
  }

  async expectExpiringContractsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.expiringContracts), expected, timeoutMs);
  }

  async expectExpiringContractsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.expiringContracts), substring, timeoutMs);
  }

  async scrollExpiringContractsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiringContracts));
  }

  async getInnerTextNoteForUpdation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.noteForUpdation));
  }

  async expectNoteForUpdationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), timeoutMs);
  }

  async expectNoteForUpdationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), timeoutMs);
  }

  async expectNoteForUpdationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), expected, timeoutMs);
  }

  async expectNoteForUpdationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), substring, timeoutMs);
  }

  async scrollNoteForUpdationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.noteForUpdation));
  }

  async getInnerTextSignedPending(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending));
  }

  async expectSignedPendingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.signedPending), timeoutMs);
  }

  async expectSignedPendingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.signedPending), timeoutMs);
  }

  async expectSignedPendingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.signedPending), expected, timeoutMs);
  }

  async expectSignedPendingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.signedPending), substring, timeoutMs);
  }

  async scrollSignedPendingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending));
  }

  async getInnerTextUKGProEmployeeVoice(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProEmployeeVoice));
  }

  async expectUKGProEmployeeVoiceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.uKGProEmployeeVoice), timeoutMs);
  }

  async expectUKGProEmployeeVoiceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.uKGProEmployeeVoice), timeoutMs);
  }

  async expectUKGProEmployeeVoiceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.uKGProEmployeeVoice), expected, timeoutMs);
  }

  async expectUKGProEmployeeVoiceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.uKGProEmployeeVoice), substring, timeoutMs);
  }

  async scrollUKGProEmployeeVoiceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProEmployeeVoice));
  }

  async getInnerTextElement7(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.element7));
  }

  async expectElement7Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.element7), timeoutMs);
  }

  async expectElement7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.element7), timeoutMs);
  }

  async expectElement7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.element7), expected, timeoutMs);
  }

  async expectElement7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.element7), substring, timeoutMs);
  }

  async scrollElement7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.element7));
  }

  async getInnerTextSOLEMPLVOC001(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.sOLEMPLVOC001));
  }

  async expectSOLEMPLVOC001Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.sOLEMPLVOC001), timeoutMs);
  }

  async expectSOLEMPLVOC001Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.sOLEMPLVOC001), timeoutMs);
  }

  async expectSOLEMPLVOC001Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.sOLEMPLVOC001), expected, timeoutMs);
  }

  async expectSOLEMPLVOC001ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.sOLEMPLVOC001), substring, timeoutMs);
  }

  async scrollSOLEMPLVOC001IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.sOLEMPLVOC001));
  }

  async clickSendFeedback(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.sendFeedback));
  }

  async doubleClickSendFeedback(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.sendFeedback));
  }

  async expectSendFeedbackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.sendFeedback), expected, timeoutMs);
  }

  async expectSendFeedbackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.sendFeedback), substring, timeoutMs);
  }

  async scrollSendFeedbackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.sendFeedback));
  }

  async getInnerTextRechartsMeasurementSpan(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan));
  }

  async expectRechartsMeasurementSpanVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), expected, timeoutMs);
  }

  async expectRechartsMeasurementSpanContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), substring, timeoutMs);
  }

  async scrollRechartsMeasurementSpanIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async clickAcmeCorporation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.acmeCorporation));
  }

  async doubleClickAcmeCorporation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.acmeCorporation));
  }

  async longPressAcmeCorporation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.acmeCorporation));
  }

  async expectAcmeCorporationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.acmeCorporation), value, timeoutMs);
  }

  async expectAcmeCorporationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.acmeCorporation), count, timeoutMs);
  }

  async longPressUKGAssist(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGAssist));
  }

  async expectUKGAssistValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.uKGAssist), value, timeoutMs);
  }

  async expectUKGAssistEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.uKGAssist), count, timeoutMs);
  }

  async longPressSubscriptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.subscriptions));
  }

  async expectSubscriptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.subscriptions), value, timeoutMs);
  }

  async expectSubscriptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.subscriptions), count, timeoutMs);
  }

  async longPressImplementations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.implementations));
  }

  async expectImplementationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.implementations), value, timeoutMs);
  }

  async expectImplementationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.implementations), timeoutMs);
  }

  async expectImplementationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.implementations), timeoutMs);
  }

  async expectImplementationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.implementations), timeoutMs);
  }

  async expectImplementationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.implementations), timeoutMs);
  }

  async expectImplementationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.implementations), timeoutMs);
  }

  async expectImplementationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.implementations), count, timeoutMs);
  }

  async longPressBillings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.billings));
  }

  async expectBillingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.billings), value, timeoutMs);
  }

  async expectBillingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.billings), timeoutMs);
  }

  async expectBillingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.billings), timeoutMs);
  }

  async expectBillingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.billings), timeoutMs);
  }

  async expectBillingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.billings), timeoutMs);
  }

  async expectBillingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.billings), timeoutMs);
  }

  async expectBillingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.billings), count, timeoutMs);
  }

  async longPressSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.support));
  }

  async expectSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.support), value, timeoutMs);
  }

  async expectSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.support), timeoutMs);
  }

  async expectSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.support), timeoutMs);
  }

  async expectSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.support), timeoutMs);
  }

  async expectSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.support), timeoutMs);
  }

  async expectSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.support), timeoutMs);
  }

  async expectSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.support), count, timeoutMs);
  }

  async longPressAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.adoption));
  }

  async expectAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.adoption), value, timeoutMs);
  }

  async expectAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.adoption), timeoutMs);
  }

  async expectAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.adoption), timeoutMs);
  }

  async expectAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.adoption), timeoutMs);
  }

  async expectAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.adoption), timeoutMs);
  }

  async expectAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.adoption), timeoutMs);
  }

  async expectAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.adoption), count, timeoutMs);
  }

  async longPressAdmin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.admin));
  }

  async expectAdminValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.admin), value, timeoutMs);
  }

  async expectAdminEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.admin), timeoutMs);
  }

  async expectAdminDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.admin), timeoutMs);
  }

  async expectAdminChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.admin), timeoutMs);
  }

  async expectAdminUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.admin), timeoutMs);
  }

  async expectAdminFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.admin), timeoutMs);
  }

  async expectAdminCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.admin), count, timeoutMs);
  }

  async longPressAccountProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.accountProfile));
  }

  async expectAccountProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.accountProfile), value, timeoutMs);
  }

  async expectAccountProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.accountProfile), count, timeoutMs);
  }

  async longPressEJEmmaJohnsonPortal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.eJEmmaJohnsonPortal), value, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.eJEmmaJohnsonPortal), count, timeoutMs);
  }

  async longPressSignOut(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.signOut));
  }

  async expectSignOutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.signOut), value, timeoutMs);
  }

  async expectSignOutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.signOut), timeoutMs);
  }

  async expectSignOutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.signOut), timeoutMs);
  }

  async expectSignOutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.signOut), timeoutMs);
  }

  async expectSignOutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.signOut), count, timeoutMs);
  }

  async longPressCollapseSidebar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.collapseSidebar));
  }

  async expectCollapseSidebarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.collapseSidebar), value, timeoutMs);
  }

  async expectCollapseSidebarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.collapseSidebar), count, timeoutMs);
  }

  async clickUKGProExpiresIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProExpiresIn));
  }

  async doubleClickUKGProExpiresIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProExpiresIn));
  }

  async longPressUKGProExpiresIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProExpiresIn));
  }

  async expectUKGProExpiresInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.uKGProExpiresIn), value, timeoutMs);
  }

  async expectUKGProExpiresInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.uKGProExpiresIn), timeoutMs);
  }

  async expectUKGProExpiresInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.uKGProExpiresIn), timeoutMs);
  }

  async expectUKGProExpiresInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.uKGProExpiresIn), timeoutMs);
  }

  async expectUKGProExpiresInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.uKGProExpiresIn), timeoutMs);
  }

  async expectUKGProExpiresInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.uKGProExpiresIn), timeoutMs);
  }

  async expectUKGProExpiresInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.uKGProExpiresIn), count, timeoutMs);
  }

  async clickEmployeesWillLose(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.EmployeesWillLose));
  }

  async doubleClickEmployeesWillLose(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.EmployeesWillLose));
  }

  async longPressEmployeesWillLose(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.EmployeesWillLose));
  }

  async expectEmployeesWillLoseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.EmployeesWillLose), value, timeoutMs);
  }

  async expectEmployeesWillLoseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.EmployeesWillLose), timeoutMs);
  }

  async expectEmployeesWillLoseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.EmployeesWillLose), timeoutMs);
  }

  async expectEmployeesWillLoseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.EmployeesWillLose), timeoutMs);
  }

  async expectEmployeesWillLoseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.EmployeesWillLose), timeoutMs);
  }

  async expectEmployeesWillLoseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.EmployeesWillLose), timeoutMs);
  }

  async expectEmployeesWillLoseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.EmployeesWillLose), count, timeoutMs);
  }

  async longPressContactUKGSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.contactUKGSupport));
  }

  async expectContactUKGSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.contactUKGSupport), value, timeoutMs);
  }

  async expectContactUKGSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.contactUKGSupport), timeoutMs);
  }

  async expectContactUKGSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.contactUKGSupport), timeoutMs);
  }

  async expectContactUKGSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.contactUKGSupport), timeoutMs);
  }

  async expectContactUKGSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.contactUKGSupport), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.element), count, timeoutMs);
  }

  async longPressPreviousAlert(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.previousAlert));
  }

  async expectPreviousAlertValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.previousAlert), value, timeoutMs);
  }

  async expectPreviousAlertChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.previousAlert), timeoutMs);
  }

  async expectPreviousAlertUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.previousAlert), timeoutMs);
  }

  async expectPreviousAlertFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.previousAlert), timeoutMs);
  }

  async expectPreviousAlertCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.previousAlert), count, timeoutMs);
  }

  async longPressNextAlert(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.nextAlert));
  }

  async expectNextAlertValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.nextAlert), value, timeoutMs);
  }

  async expectNextAlertChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.nextAlert), timeoutMs);
  }

  async expectNextAlertUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.nextAlert), timeoutMs);
  }

  async expectNextAlertFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.nextAlert), timeoutMs);
  }

  async expectNextAlertCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.nextAlert), count, timeoutMs);
  }

  async longPressCloseAlerts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.closeAlerts));
  }

  async expectCloseAlertsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.closeAlerts), value, timeoutMs);
  }

  async expectCloseAlertsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.closeAlerts), count, timeoutMs);
  }

  async clickAtlasInsightsSubscriptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions));
  }

  async doubleClickAtlasInsightsSubscriptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions));
  }

  async longPressAtlasInsightsSubscriptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions));
  }

  async expectAtlasInsightsSubscriptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), value, timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), count, timeoutMs);
  }

  async clickWasThisHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.wasThisHelpful));
  }

  async doubleClickWasThisHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.wasThisHelpful));
  }

  async longPressWasThisHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.wasThisHelpful));
  }

  async expectWasThisHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.wasThisHelpful), value, timeoutMs);
  }

  async expectWasThisHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.wasThisHelpful), count, timeoutMs);
  }

  async longPressHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.helpful));
  }

  async expectHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.helpful), value, timeoutMs);
  }

  async expectHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.helpful), timeoutMs);
  }

  async expectHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.helpful), timeoutMs);
  }

  async expectHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.helpful), timeoutMs);
  }

  async expectHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.helpful), count, timeoutMs);
  }

  async longPressNotHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.notHelpful));
  }

  async expectNotHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.notHelpful), value, timeoutMs);
  }

  async expectNotHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.notHelpful), count, timeoutMs);
  }

  async expectInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.input), expected, timeoutMs);
  }

  async expectInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.input), substring, timeoutMs);
  }

  async expectInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.input), timeoutMs);
  }

  async expectInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.input), timeoutMs);
  }

  async expectInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.input), count, timeoutMs);
  }

  async longPressSendMessage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.sendMessage));
  }

  async expectSendMessageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.sendMessage), value, timeoutMs);
  }

  async expectSendMessageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.sendMessage), count, timeoutMs);
  }

  async clickAskAtlas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.askAtlas));
  }

  async doubleClickAskAtlas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.askAtlas));
  }

  async longPressAskAtlas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.askAtlas));
  }

  async expectAskAtlasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.askAtlas), value, timeoutMs);
  }

  async expectAskAtlasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.askAtlas), count, timeoutMs);
  }

  async longPressSeatAllocation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.seatAllocation));
  }

  async expectSeatAllocationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.seatAllocation), value, timeoutMs);
  }

  async expectSeatAllocationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.seatAllocation), timeoutMs);
  }

  async expectSeatAllocationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.seatAllocation), timeoutMs);
  }

  async expectSeatAllocationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.seatAllocation), timeoutMs);
  }

  async expectSeatAllocationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.seatAllocation), count, timeoutMs);
  }

  async longPressUpcomingRenewals(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals));
  }

  async expectUpcomingRenewalsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), value, timeoutMs);
  }

  async expectUpcomingRenewalsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), timeoutMs);
  }

  async expectUpcomingRenewalsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), timeoutMs);
  }

  async expectUpcomingRenewalsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), timeoutMs);
  }

  async expectUpcomingRenewalsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), count, timeoutMs);
  }

  async longPressCostTrends(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.costTrends));
  }

  async expectCostTrendsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.costTrends), value, timeoutMs);
  }

  async expectCostTrendsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.costTrends), timeoutMs);
  }

  async expectCostTrendsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.costTrends), timeoutMs);
  }

  async expectCostTrendsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.costTrends), timeoutMs);
  }

  async expectCostTrendsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.costTrends), count, timeoutMs);
  }

  async longPressAutoRenewStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus));
  }

  async expectAutoRenewStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), value, timeoutMs);
  }

  async expectAutoRenewStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), timeoutMs);
  }

  async expectAutoRenewStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), timeoutMs);
  }

  async expectAutoRenewStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), timeoutMs);
  }

  async expectAutoRenewStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), count, timeoutMs);
  }

  async clickSubscriptionOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview));
  }

  async doubleClickSubscriptionOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview));
  }

  async longPressSubscriptionOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview));
  }

  async expectSubscriptionOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), value, timeoutMs);
  }

  async expectSubscriptionOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), timeoutMs);
  }

  async expectSubscriptionOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), timeoutMs);
  }

  async expectSubscriptionOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), timeoutMs);
  }

  async expectSubscriptionOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), timeoutMs);
  }

  async expectSubscriptionOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), timeoutMs);
  }

  async expectSubscriptionOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), count, timeoutMs);
  }

  async clickLicensedProducts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.licensedProducts));
  }

  async doubleClickLicensedProducts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.licensedProducts));
  }

  async longPressLicensedProducts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.licensedProducts));
  }

  async expectLicensedProductsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.licensedProducts), value, timeoutMs);
  }

  async expectLicensedProductsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.licensedProducts), timeoutMs);
  }

  async expectLicensedProductsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.licensedProducts), timeoutMs);
  }

  async expectLicensedProductsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.licensedProducts), timeoutMs);
  }

  async expectLicensedProductsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.licensedProducts), timeoutMs);
  }

  async expectLicensedProductsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.licensedProducts), timeoutMs);
  }

  async expectLicensedProductsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.licensedProducts), count, timeoutMs);
  }

  async clickNextRenewal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.nextRenewal));
  }

  async doubleClickNextRenewal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.nextRenewal));
  }

  async longPressNextRenewal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.nextRenewal));
  }

  async expectNextRenewalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.nextRenewal), value, timeoutMs);
  }

  async expectNextRenewalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.nextRenewal), timeoutMs);
  }

  async expectNextRenewalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.nextRenewal), timeoutMs);
  }

  async expectNextRenewalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.nextRenewal), timeoutMs);
  }

  async expectNextRenewalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.nextRenewal), timeoutMs);
  }

  async expectNextRenewalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.nextRenewal), timeoutMs);
  }

  async expectNextRenewalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.nextRenewal), count, timeoutMs);
  }

  async clickIn18h(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.in18h));
  }

  async doubleClickIn18h(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.in18h));
  }

  async longPressIn18h(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.in18h));
  }

  async expectIn18hValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.in18h), value, timeoutMs);
  }

  async expectIn18hEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.in18h), timeoutMs);
  }

  async expectIn18hDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.in18h), timeoutMs);
  }

  async expectIn18hChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.in18h), timeoutMs);
  }

  async expectIn18hUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.in18h), timeoutMs);
  }

  async expectIn18hFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.in18h), timeoutMs);
  }

  async expectIn18hCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.in18h), count, timeoutMs);
  }

  async clickUKGProPayroll(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll));
  }

  async doubleClickUKGProPayroll(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll));
  }

  async longPressUKGProPayroll(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll));
  }

  async expectUKGProPayrollValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll), value, timeoutMs);
  }

  async expectUKGProPayrollEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll), timeoutMs);
  }

  async expectUKGProPayrollDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll), timeoutMs);
  }

  async expectUKGProPayrollChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll), timeoutMs);
  }

  async expectUKGProPayrollUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll), timeoutMs);
  }

  async expectUKGProPayrollFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll), timeoutMs);
  }

  async expectUKGProPayrollCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll), count, timeoutMs);
  }

  async clickAnnualPortfolioApprox(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox));
  }

  async doubleClickAnnualPortfolioApprox(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox));
  }

  async longPressAnnualPortfolioApprox(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox));
  }

  async expectAnnualPortfolioApproxValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), value, timeoutMs);
  }

  async expectAnnualPortfolioApproxEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), timeoutMs);
  }

  async expectAnnualPortfolioApproxDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), timeoutMs);
  }

  async expectAnnualPortfolioApproxChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), timeoutMs);
  }

  async expectAnnualPortfolioApproxUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), timeoutMs);
  }

  async expectAnnualPortfolioApproxFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), timeoutMs);
  }

  async expectAnnualPortfolioApproxCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), count, timeoutMs);
  }

  async clickElement2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element2));
  }

  async doubleClickElement2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element2));
  }

  async longPressElement2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.element2));
  }

  async expectElement2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.element2), value, timeoutMs);
  }

  async expectElement2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.element2), timeoutMs);
  }

  async expectElement2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.element2), timeoutMs);
  }

  async expectElement2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.element2), timeoutMs);
  }

  async expectElement2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.element2), timeoutMs);
  }

  async expectElement2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.element2), timeoutMs);
  }

  async expectElement2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.element2), count, timeoutMs);
  }

  async longPressAllSubscription4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.allSubscription4));
  }

  async expectAllSubscription4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.allSubscription4), value, timeoutMs);
  }

  async expectAllSubscription4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.allSubscription4), timeoutMs);
  }

  async expectAllSubscription4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.allSubscription4), timeoutMs);
  }

  async expectAllSubscription4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.allSubscription4), timeoutMs);
  }

  async expectAllSubscription4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.allSubscription4), count, timeoutMs);
  }

  async longPressExpiryIn30Days(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days));
  }

  async expectExpiryIn30DaysValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), value, timeoutMs);
  }

  async expectExpiryIn30DaysChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), timeoutMs);
  }

  async expectExpiryIn30DaysUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), timeoutMs);
  }

  async expectExpiryIn30DaysFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), timeoutMs);
  }

  async expectExpiryIn30DaysCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), count, timeoutMs);
  }

  async longPressSignedPending1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending1));
  }

  async expectSignedPending1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.signedPending1), value, timeoutMs);
  }

  async expectSignedPending1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.signedPending1), timeoutMs);
  }

  async expectSignedPending1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.signedPending1), timeoutMs);
  }

  async expectSignedPending1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.signedPending1), timeoutMs);
  }

  async expectSignedPending1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.signedPending1), count, timeoutMs);
  }

  async clickProduct(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.product));
  }

  async doubleClickProduct(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.product));
  }

  async longPressProduct(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.product));
  }

  async expectProductValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.product), value, timeoutMs);
  }

  async expectProductEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.product), timeoutMs);
  }

  async expectProductDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.product), timeoutMs);
  }

  async expectProductChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.product), timeoutMs);
  }

  async expectProductUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.product), timeoutMs);
  }

  async expectProductFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.product), timeoutMs);
  }

  async expectProductCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.product), count, timeoutMs);
  }

  async clickContract(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.contract));
  }

  async doubleClickContract(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.contract));
  }

  async longPressContract(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.contract));
  }

  async expectContractValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.contract), value, timeoutMs);
  }

  async expectContractEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.contract), timeoutMs);
  }

  async expectContractDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.contract), timeoutMs);
  }

  async expectContractChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.contract), timeoutMs);
  }

  async expectContractUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.contract), timeoutMs);
  }

  async expectContractFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.contract), timeoutMs);
  }

  async expectContractCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.contract), count, timeoutMs);
  }

  async clickStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.status));
  }

  async doubleClickStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.status));
  }

  async longPressStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.status));
  }

  async expectStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.status), value, timeoutMs);
  }

  async expectStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.status), timeoutMs);
  }

  async expectStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.status), timeoutMs);
  }

  async expectStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.status), timeoutMs);
  }

  async expectStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.status), timeoutMs);
  }

  async expectStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.status), timeoutMs);
  }

  async expectStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.status), count, timeoutMs);
  }

  async clickContractValue(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.contractValue));
  }

  async doubleClickContractValue(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.contractValue));
  }

  async longPressContractValue(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.contractValue));
  }

  async expectContractValueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.contractValue), value, timeoutMs);
  }

  async expectContractValueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.contractValue), timeoutMs);
  }

  async expectContractValueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.contractValue), timeoutMs);
  }

  async expectContractValueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.contractValue), timeoutMs);
  }

  async expectContractValueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.contractValue), timeoutMs);
  }

  async expectContractValueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.contractValue), timeoutMs);
  }

  async expectContractValueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.contractValue), count, timeoutMs);
  }

  async clickStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.startDate));
  }

  async doubleClickStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.startDate));
  }

  async longPressStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.startDate));
  }

  async expectStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.startDate), value, timeoutMs);
  }

  async expectStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.startDate), timeoutMs);
  }

  async expectStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.startDate), timeoutMs);
  }

  async expectStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.startDate), timeoutMs);
  }

  async expectStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.startDate), timeoutMs);
  }

  async expectStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.startDate), timeoutMs);
  }

  async expectStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.startDate), count, timeoutMs);
  }

  async clickEndDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.endDate));
  }

  async doubleClickEndDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.endDate));
  }

  async longPressEndDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.endDate));
  }

  async expectEndDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.endDate), value, timeoutMs);
  }

  async expectEndDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.endDate), timeoutMs);
  }

  async expectEndDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.endDate), timeoutMs);
  }

  async expectEndDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.endDate), timeoutMs);
  }

  async expectEndDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.endDate), timeoutMs);
  }

  async expectEndDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.endDate), timeoutMs);
  }

  async expectEndDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.endDate), count, timeoutMs);
  }

  async clickRenewalDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.renewalDate));
  }

  async doubleClickRenewalDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.renewalDate));
  }

  async longPressRenewalDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.renewalDate));
  }

  async expectRenewalDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.renewalDate), value, timeoutMs);
  }

  async expectRenewalDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.renewalDate), timeoutMs);
  }

  async expectRenewalDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.renewalDate), timeoutMs);
  }

  async expectRenewalDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.renewalDate), timeoutMs);
  }

  async expectRenewalDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.renewalDate), timeoutMs);
  }

  async expectRenewalDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.renewalDate), timeoutMs);
  }

  async expectRenewalDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.renewalDate), count, timeoutMs);
  }

  async clickUKGDimensions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensions));
  }

  async doubleClickUKGDimensions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensions));
  }

  async longPressUKGDimensions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensions));
  }

  async expectUKGDimensionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.uKGDimensions), value, timeoutMs);
  }

  async expectUKGDimensionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.uKGDimensions), timeoutMs);
  }

  async expectUKGDimensionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.uKGDimensions), timeoutMs);
  }

  async expectUKGDimensionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.uKGDimensions), timeoutMs);
  }

  async expectUKGDimensionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.uKGDimensions), timeoutMs);
  }

  async expectUKGDimensionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.uKGDimensions), timeoutMs);
  }

  async expectUKGDimensionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.uKGDimensions), count, timeoutMs);
  }

  async clickUKGDimensionsCore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsCore));
  }

  async doubleClickUKGDimensionsCore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsCore));
  }

  async longPressUKGDimensionsCore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsCore));
  }

  async expectUKGDimensionsCoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsCore), value, timeoutMs);
  }

  async expectUKGDimensionsCoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsCore), timeoutMs);
  }

  async expectUKGDimensionsCoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsCore), timeoutMs);
  }

  async expectUKGDimensionsCoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsCore), timeoutMs);
  }

  async expectUKGDimensionsCoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsCore), timeoutMs);
  }

  async expectUKGDimensionsCoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsCore), timeoutMs);
  }

  async expectUKGDimensionsCoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsCore), count, timeoutMs);
  }

  async clickDLeft(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.DLeft));
  }

  async doubleClickDLeft(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.DLeft));
  }

  async longPressDLeft(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.DLeft));
  }

  async expectDLeftValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.DLeft), value, timeoutMs);
  }

  async expectDLeftEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.DLeft), timeoutMs);
  }

  async expectDLeftDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.DLeft), timeoutMs);
  }

  async expectDLeftChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.DLeft), timeoutMs);
  }

  async expectDLeftUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.DLeft), timeoutMs);
  }

  async expectDLeftFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.DLeft), timeoutMs);
  }

  async expectDLeftCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.DLeft), count, timeoutMs);
  }

  async clickElement3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element3));
  }

  async doubleClickElement3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element3));
  }

  async longPressElement3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.element3));
  }

  async expectElement3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.element3), value, timeoutMs);
  }

  async expectElement3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.element3), timeoutMs);
  }

  async expectElement3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.element3), timeoutMs);
  }

  async expectElement3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.element3), timeoutMs);
  }

  async expectElement3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.element3), timeoutMs);
  }

  async expectElement3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.element3), timeoutMs);
  }

  async expectElement3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.element3), count, timeoutMs);
  }

  async clickJun172026(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.jun172026));
  }

  async doubleClickJun172026(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.jun172026));
  }

  async longPressJun172026(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.jun172026));
  }

  async expectJun172026Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.jun172026), value, timeoutMs);
  }

  async expectJun172026Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.jun172026), timeoutMs);
  }

  async expectJun172026Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.jun172026), timeoutMs);
  }

  async expectJun172026Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.jun172026), timeoutMs);
  }

  async expectJun172026Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.jun172026), timeoutMs);
  }

  async expectJun172026Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.jun172026), timeoutMs);
  }

  async expectJun172026Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.jun172026), count, timeoutMs);
  }

  async clickUKGDimensionsAnalytics(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsAnalytics));
  }

  async doubleClickUKGDimensionsAnalytics(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsAnalytics));
  }

  async longPressUKGDimensionsAnalytics(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsAnalytics));
  }

  async expectUKGDimensionsAnalyticsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsAnalytics), value, timeoutMs);
  }

  async expectUKGDimensionsAnalyticsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsAnalytics), timeoutMs);
  }

  async expectUKGDimensionsAnalyticsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsAnalytics), timeoutMs);
  }

  async expectUKGDimensionsAnalyticsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsAnalytics), timeoutMs);
  }

  async expectUKGDimensionsAnalyticsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsAnalytics), timeoutMs);
  }

  async expectUKGDimensionsAnalyticsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsAnalytics), timeoutMs);
  }

  async expectUKGDimensionsAnalyticsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.uKGDimensionsAnalytics), count, timeoutMs);
  }

  async clickDLeft2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.DLeft2));
  }

  async doubleClickDLeft2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.DLeft2));
  }

  async longPressDLeft2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.DLeft2));
  }

  async expectDLeft2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.DLeft2), value, timeoutMs);
  }

  async expectDLeft2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.DLeft2), timeoutMs);
  }

  async expectDLeft2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.DLeft2), timeoutMs);
  }

  async expectDLeft2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.DLeft2), timeoutMs);
  }

  async expectDLeft2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.DLeft2), timeoutMs);
  }

  async expectDLeft2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.DLeft2), timeoutMs);
  }

  async expectDLeft2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.DLeft2), count, timeoutMs);
  }

  async clickElement4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element4));
  }

  async doubleClickElement4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element4));
  }

  async longPressElement4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.element4));
  }

  async expectElement4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.element4), value, timeoutMs);
  }

  async expectElement4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.element4), timeoutMs);
  }

  async expectElement4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.element4), timeoutMs);
  }

  async expectElement4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.element4), timeoutMs);
  }

  async expectElement4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.element4), timeoutMs);
  }

  async expectElement4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.element4), timeoutMs);
  }

  async expectElement4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.element4), count, timeoutMs);
  }

  async clickJun1720262(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.jun1720262));
  }

  async doubleClickJun1720262(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.jun1720262));
  }

  async longPressJun1720262(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.jun1720262));
  }

  async expectJun1720262Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.jun1720262), value, timeoutMs);
  }

  async expectJun1720262Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.jun1720262), timeoutMs);
  }

  async expectJun1720262Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.jun1720262), timeoutMs);
  }

  async expectJun1720262Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.jun1720262), timeoutMs);
  }

  async expectJun1720262Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.jun1720262), timeoutMs);
  }

  async expectJun1720262Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.jun1720262), timeoutMs);
  }

  async expectJun1720262Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.jun1720262), count, timeoutMs);
  }

  async clickUKGPro(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGPro));
  }

  async doubleClickUKGPro(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGPro));
  }

  async longPressUKGPro(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGPro));
  }

  async expectUKGProValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.uKGPro), value, timeoutMs);
  }

  async expectUKGProEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.uKGPro), timeoutMs);
  }

  async expectUKGProDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.uKGPro), timeoutMs);
  }

  async expectUKGProChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.uKGPro), timeoutMs);
  }

  async expectUKGProUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.uKGPro), timeoutMs);
  }

  async expectUKGProFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.uKGPro), timeoutMs);
  }

  async expectUKGProCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.uKGPro), count, timeoutMs);
  }

  async clickUKGProPayroll2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll2));
  }

  async doubleClickUKGProPayroll2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll2));
  }

  async longPressUKGProPayroll2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll2));
  }

  async expectUKGProPayroll2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll2), value, timeoutMs);
  }

  async expectUKGProPayroll2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll2), timeoutMs);
  }

  async expectUKGProPayroll2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll2), timeoutMs);
  }

  async expectUKGProPayroll2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll2), timeoutMs);
  }

  async expectUKGProPayroll2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll2), timeoutMs);
  }

  async expectUKGProPayroll2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll2), timeoutMs);
  }

  async expectUKGProPayroll2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.uKGProPayroll2), count, timeoutMs);
  }

  async clickDLeft3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.DLeft3));
  }

  async doubleClickDLeft3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.DLeft3));
  }

  async longPressDLeft3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.DLeft3));
  }

  async expectDLeft3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.DLeft3), value, timeoutMs);
  }

  async expectDLeft3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.DLeft3), timeoutMs);
  }

  async expectDLeft3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.DLeft3), timeoutMs);
  }

  async expectDLeft3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.DLeft3), timeoutMs);
  }

  async expectDLeft3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.DLeft3), timeoutMs);
  }

  async expectDLeft3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.DLeft3), timeoutMs);
  }

  async expectDLeft3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.DLeft3), count, timeoutMs);
  }

  async clickElement5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element5));
  }

  async doubleClickElement5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element5));
  }

  async longPressElement5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.element5));
  }

  async expectElement5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.element5), value, timeoutMs);
  }

  async expectElement5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.element5), timeoutMs);
  }

  async expectElement5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.element5), timeoutMs);
  }

  async expectElement5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.element5), timeoutMs);
  }

  async expectElement5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.element5), timeoutMs);
  }

  async expectElement5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.element5), timeoutMs);
  }

  async expectElement5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.element5), count, timeoutMs);
  }

  async clickLicenseUtilizationTrend(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend));
  }

  async doubleClickLicenseUtilizationTrend(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend));
  }

  async longPressLicenseUtilizationTrend(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend));
  }

  async expectLicenseUtilizationTrendValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), value, timeoutMs);
  }

  async expectLicenseUtilizationTrendEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), timeoutMs);
  }

  async expectLicenseUtilizationTrendDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), timeoutMs);
  }

  async expectLicenseUtilizationTrendChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), timeoutMs);
  }

  async expectLicenseUtilizationTrendUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), timeoutMs);
  }

  async expectLicenseUtilizationTrendFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), timeoutMs);
  }

  async expectLicenseUtilizationTrendCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), count, timeoutMs);
  }

  async clickMonthlyLicenseUtilizationSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary));
  }

  async doubleClickMonthlyLicenseUtilizationSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary));
  }

  async longPressMonthlyLicenseUtilizationSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary));
  }

  async expectMonthlyLicenseUtilizationSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), value, timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), count, timeoutMs);
  }

  async longPressFilterByProduct(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.filterByProduct));
  }

  async expectFilterByProductValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.filterByProduct), value, timeoutMs);
  }

  async expectFilterByProductChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.filterByProduct), timeoutMs);
  }

  async expectFilterByProductUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.filterByProduct), timeoutMs);
  }

  async expectFilterByProductFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.filterByProduct), timeoutMs);
  }

  async expectFilterByProductCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.filterByProduct), count, timeoutMs);
  }

  async clickTotalUtilisedLicenses(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses));
  }

  async doubleClickTotalUtilisedLicenses(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses));
  }

  async longPressTotalUtilisedLicenses(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses));
  }

  async expectTotalUtilisedLicensesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), value, timeoutMs);
  }

  async expectTotalUtilisedLicensesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), timeoutMs);
  }

  async expectTotalUtilisedLicensesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), timeoutMs);
  }

  async expectTotalUtilisedLicensesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), timeoutMs);
  }

  async expectTotalUtilisedLicensesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), timeoutMs);
  }

  async expectTotalUtilisedLicensesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), timeoutMs);
  }

  async expectTotalUtilisedLicensesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), count, timeoutMs);
  }

  async clickElement6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element6));
  }

  async doubleClickElement6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element6));
  }

  async longPressElement6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.element6));
  }

  async expectElement6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.element6), value, timeoutMs);
  }

  async expectElement6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.element6), timeoutMs);
  }

  async expectElement6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.element6), timeoutMs);
  }

  async expectElement6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.element6), timeoutMs);
  }

  async expectElement6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.element6), timeoutMs);
  }

  async expectElement6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.element6), timeoutMs);
  }

  async expectElement6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.element6), count, timeoutMs);
  }

  async clickContractHealth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.contractHealth));
  }

  async doubleClickContractHealth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.contractHealth));
  }

  async longPressContractHealth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.contractHealth));
  }

  async expectContractHealthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.contractHealth), value, timeoutMs);
  }

  async expectContractHealthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.contractHealth), timeoutMs);
  }

  async expectContractHealthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.contractHealth), timeoutMs);
  }

  async expectContractHealthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.contractHealth), timeoutMs);
  }

  async expectContractHealthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.contractHealth), timeoutMs);
  }

  async expectContractHealthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.contractHealth), timeoutMs);
  }

  async expectContractHealthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.contractHealth), count, timeoutMs);
  }

  async clickActiveContracts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.activeContracts));
  }

  async doubleClickActiveContracts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.activeContracts));
  }

  async longPressActiveContracts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.activeContracts));
  }

  async expectActiveContractsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.activeContracts), value, timeoutMs);
  }

  async expectActiveContractsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.activeContracts), timeoutMs);
  }

  async expectActiveContractsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.activeContracts), timeoutMs);
  }

  async expectActiveContractsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.activeContracts), timeoutMs);
  }

  async expectActiveContractsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.activeContracts), timeoutMs);
  }

  async expectActiveContractsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.activeContracts), timeoutMs);
  }

  async expectActiveContractsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.activeContracts), count, timeoutMs);
  }

  async clickPendingSignature(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.pendingSignature));
  }

  async doubleClickPendingSignature(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.pendingSignature));
  }

  async longPressPendingSignature(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.pendingSignature));
  }

  async expectPendingSignatureValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.pendingSignature), value, timeoutMs);
  }

  async expectPendingSignatureEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.pendingSignature), timeoutMs);
  }

  async expectPendingSignatureDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.pendingSignature), timeoutMs);
  }

  async expectPendingSignatureChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.pendingSignature), timeoutMs);
  }

  async expectPendingSignatureUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.pendingSignature), timeoutMs);
  }

  async expectPendingSignatureFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.pendingSignature), timeoutMs);
  }

  async expectPendingSignatureCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.pendingSignature), count, timeoutMs);
  }

  async clickExpiringContracts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiringContracts));
  }

  async doubleClickExpiringContracts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiringContracts));
  }

  async longPressExpiringContracts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiringContracts));
  }

  async expectExpiringContractsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.expiringContracts), value, timeoutMs);
  }

  async expectExpiringContractsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.expiringContracts), timeoutMs);
  }

  async expectExpiringContractsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.expiringContracts), timeoutMs);
  }

  async expectExpiringContractsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.expiringContracts), timeoutMs);
  }

  async expectExpiringContractsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.expiringContracts), timeoutMs);
  }

  async expectExpiringContractsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.expiringContracts), timeoutMs);
  }

  async expectExpiringContractsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.expiringContracts), count, timeoutMs);
  }

  async clickNoteForUpdation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.noteForUpdation));
  }

  async doubleClickNoteForUpdation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.noteForUpdation));
  }

  async longPressNoteForUpdation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.noteForUpdation));
  }

  async expectNoteForUpdationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), value, timeoutMs);
  }

  async expectNoteForUpdationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), timeoutMs);
  }

  async expectNoteForUpdationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), timeoutMs);
  }

  async expectNoteForUpdationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), timeoutMs);
  }

  async expectNoteForUpdationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), timeoutMs);
  }

  async expectNoteForUpdationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), timeoutMs);
  }

  async expectNoteForUpdationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), count, timeoutMs);
  }

  async clickSignedPending(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending));
  }

  async doubleClickSignedPending(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending));
  }

  async longPressSignedPending(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending));
  }

  async expectSignedPendingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.signedPending), value, timeoutMs);
  }

  async expectSignedPendingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.signedPending), timeoutMs);
  }

  async expectSignedPendingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.signedPending), timeoutMs);
  }

  async expectSignedPendingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.signedPending), timeoutMs);
  }

  async expectSignedPendingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.signedPending), timeoutMs);
  }

  async expectSignedPendingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.signedPending), timeoutMs);
  }

  async expectSignedPendingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.signedPending), count, timeoutMs);
  }

  async clickUKGProEmployeeVoice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProEmployeeVoice));
  }

  async doubleClickUKGProEmployeeVoice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProEmployeeVoice));
  }

  async longPressUKGProEmployeeVoice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.uKGProEmployeeVoice));
  }

  async expectUKGProEmployeeVoiceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.uKGProEmployeeVoice), value, timeoutMs);
  }

  async expectUKGProEmployeeVoiceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.uKGProEmployeeVoice), timeoutMs);
  }

  async expectUKGProEmployeeVoiceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.uKGProEmployeeVoice), timeoutMs);
  }

  async expectUKGProEmployeeVoiceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.uKGProEmployeeVoice), timeoutMs);
  }

  async expectUKGProEmployeeVoiceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.uKGProEmployeeVoice), timeoutMs);
  }

  async expectUKGProEmployeeVoiceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.uKGProEmployeeVoice), timeoutMs);
  }

  async expectUKGProEmployeeVoiceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.uKGProEmployeeVoice), count, timeoutMs);
  }

  async clickElement7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element7));
  }

  async doubleClickElement7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element7));
  }

  async longPressElement7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.element7));
  }

  async expectElement7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.element7), value, timeoutMs);
  }

  async expectElement7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.element7), timeoutMs);
  }

  async expectElement7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.element7), timeoutMs);
  }

  async expectElement7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.element7), timeoutMs);
  }

  async expectElement7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.element7), timeoutMs);
  }

  async expectElement7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.element7), timeoutMs);
  }

  async expectElement7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.element7), count, timeoutMs);
  }

  async clickSOLEMPLVOC001(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.sOLEMPLVOC001));
  }

  async doubleClickSOLEMPLVOC001(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.sOLEMPLVOC001));
  }

  async longPressSOLEMPLVOC001(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.sOLEMPLVOC001));
  }

  async expectSOLEMPLVOC001Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.sOLEMPLVOC001), value, timeoutMs);
  }

  async expectSOLEMPLVOC001Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.sOLEMPLVOC001), timeoutMs);
  }

  async expectSOLEMPLVOC001Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.sOLEMPLVOC001), timeoutMs);
  }

  async expectSOLEMPLVOC001Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.sOLEMPLVOC001), timeoutMs);
  }

  async expectSOLEMPLVOC001Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.sOLEMPLVOC001), timeoutMs);
  }

  async expectSOLEMPLVOC001Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.sOLEMPLVOC001), timeoutMs);
  }

  async expectSOLEMPLVOC001Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.sOLEMPLVOC001), count, timeoutMs);
  }

  async longPressSendFeedback(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.sendFeedback));
  }

  async expectSendFeedbackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.sendFeedback), value, timeoutMs);
  }

  async expectSendFeedbackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.sendFeedback), count, timeoutMs);
  }

  async clickRechartsMeasurementSpan(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan));
  }

  async doubleClickRechartsMeasurementSpan(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan));
  }

  async longPressRechartsMeasurementSpan(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan));
  }

  async expectRechartsMeasurementSpanValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), value, timeoutMs);
  }

  async expectRechartsMeasurementSpanEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), count, timeoutMs);
  }

}
