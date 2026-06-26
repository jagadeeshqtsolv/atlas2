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

export class BillingPage {
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
    paymentOverdueService: { strategy: 'text' as const, value: 'Payment overdue – service interruption risk', actionKind: 'text' as const },
    yourUKGProInvoice: { strategy: 'text' as const, value: 'Your UKG Pro invoice no IO1100057620 is past due.', actionKind: 'text' as const },
    contactUKGSupport: { strategy: 'role' as const, value: 'Contact UKG Support', role: 'button', actionKind: 'button' as const },
    closeAlerts: { strategy: 'role' as const, value: 'Close alerts', role: 'button', actionKind: 'button' as const },
    atlasInsightsBilling: { strategy: 'text' as const, value: 'Atlas Insights · Billing', actionKind: 'text' as const },
    wasThisHelpful: { strategy: 'text' as const, value: 'Was this helpful?', actionKind: 'text' as const },
    helpful: { strategy: 'role' as const, value: 'Helpful', role: 'button', actionKind: 'button' as const },
    notHelpful: { strategy: 'role' as const, value: 'Not helpful', role: 'button', actionKind: 'button' as const },
    input: { strategy: 'placeholder' as const, value: 'How can we help you today', actionKind: 'textbox' as const },
    sendMessage: { strategy: 'role' as const, value: 'Send message', role: 'button', actionKind: 'button' as const },
    askAtlas: { strategy: 'text' as const, value: 'Ask Atlas', actionKind: 'text' as const },
    outstandingBalance: { strategy: 'role' as const, value: 'Outstanding balance', role: 'button', actionKind: 'button' as const },
    paymentTerms: { strategy: 'role' as const, value: 'Payment terms', role: 'button', actionKind: 'button' as const },
    billingHistory: { strategy: 'role' as const, value: 'Billing history', role: 'button', actionKind: 'button' as const },
    creditNotes: { strategy: 'role' as const, value: 'Credit notes', role: 'button', actionKind: 'button' as const },
    M: { strategy: 'text' as const, value: '$22.2M', actionKind: 'text' as const },
    OpenDue: { strategy: 'text' as const, value: '1 open · Due 14-Aug-2026', actionKind: 'text' as const },
    yTDPaid: { strategy: 'text' as const, value: 'YTD paid', actionKind: 'text' as const },
    M2: { strategy: 'text' as const, value: '$40.9M', actionKind: 'text' as const },
    InvoicesPaid: { strategy: 'text' as const, value: '2 invoices · Paid in full', actionKind: 'text' as const },
    nextCharge: { strategy: 'text' as const, value: 'Next charge', actionKind: 'text' as const },
    uS16400: { strategy: 'text' as const, value: 'US$16,400', actionKind: 'text' as const },
    VsLast: { strategy: 'text' as const, value: '↑ 8.4% vs last quarter', actionKind: 'text' as const },
    spendTrend12Months: { strategy: 'text' as const, value: 'Spend trend (12 months)', actionKind: 'text' as const },
    invoices: { strategy: 'role' as const, value: 'Invoices', role: 'button', actionKind: 'button' as const },
    paymentHistory: { strategy: 'role' as const, value: 'Payment history', role: 'button', actionKind: 'button' as const },
    spendBreakdown: { strategy: 'role' as const, value: 'Spend breakdown', role: 'button', actionKind: 'button' as const },
    inputInput: { strategy: 'placeholder' as const, value: 'Search invoices', actionKind: 'textbox' as const },
    status: { strategy: 'role' as const, value: 'Status', role: 'button', actionKind: 'button' as const },
    exportAsCSV: { strategy: 'role' as const, value: 'Export as CSV', role: 'button', actionKind: 'button' as const },
    invoice: { strategy: 'text' as const, value: 'Invoice', actionKind: 'text' as const },
    description: { strategy: 'text' as const, value: 'Description', actionKind: 'text' as const },
    issuedOn: { strategy: 'text' as const, value: 'Issued on', actionKind: 'text' as const },
    dueDate: { strategy: 'text' as const, value: 'Due Date', actionKind: 'text' as const },
    amount: { strategy: 'text' as const, value: 'Amount', actionKind: 'text' as const },
    downloadInvoiceIO1100195973: { strategy: 'role' as const, value: 'Download invoice IO1100195973', role: 'button', actionKind: 'button' as const },
    downloadInvoiceAMS202606: { strategy: 'role' as const, value: 'Download invoice AMS-2026-06', role: 'button', actionKind: 'button' as const },
    downloadInvoiceIO1100057620: { strategy: 'role' as const, value: 'Download invoice IO1100057620', role: 'button', actionKind: 'button' as const },
    downloadInvoiceIO1100028834: { strategy: 'role' as const, value: 'Download invoice IO1100028834', role: 'button', actionKind: 'button' as const },
    downloadInvoiceIO1100057620Button: { strategy: 'role' as const, value: 'Download invoice IO1100057620', role: 'button', actionKind: 'button' as const },
    downloadInvoiceIO1100028834Button: { strategy: 'role' as const, value: 'Download invoice IO1100028834', role: 'button', actionKind: 'button' as const },
    downloadInvoiceAMS202606Button: { strategy: 'role' as const, value: 'Download invoice AMS-2026-06', role: 'button', actionKind: 'button' as const },
    downloadInvoiceIO1100057620DownloadInvoiceIO1100057620: { strategy: 'role' as const, value: 'Download invoice IO1100057620', role: 'button', actionKind: 'button' as const },
    downloadInvoiceIO1100028834DownloadInvoiceIO1100028834: { strategy: 'role' as const, value: 'Download invoice IO1100028834', role: 'button', actionKind: 'button' as const },
    downloadInvoiceIO1100057620Button2: { strategy: 'role' as const, value: 'Download invoice IO1100057620', role: 'button', actionKind: 'button' as const },
    undefinedPrevious: { strategy: 'role' as const, value: 'Previous page', role: 'button', actionKind: 'button' as const },
    undefinedPage1: { strategy: 'role' as const, value: '1', role: 'button', actionKind: 'button' as const },
    undefinedPage2: { strategy: 'role' as const, value: '2', role: 'button', actionKind: 'button' as const },
    undefinedNext: { strategy: 'role' as const, value: 'Next page', role: 'button', actionKind: 'button' as const },
    billingEstimate: { strategy: 'text' as const, value: 'Billing estimate', actionKind: 'text' as const },
    amountsAreEstimatesBased: { strategy: 'text' as const, value: 'Amounts are estimates based on current usage and', actionKind: 'text' as const },
    uS1640032: { strategy: 'text' as const, value: 'US$16,400.32', actionKind: 'text' as const },
    estBillingDate: { strategy: 'text' as const, value: 'Est. billing date : Jun 30, 2026', actionKind: 'text' as const },
    solutions: { strategy: 'text' as const, value: 'Solutions', actionKind: 'text' as const },
    amount2: { strategy: 'text' as const, value: 'Amount', actionKind: 'text' as const },
    uKGProWFMEnterprise: { strategy: 'role' as const, value: 'UKG Pro WFM Enterprise $10,000.32', role: 'button', actionKind: 'button' as const },
    uKGReadyGrowth2500: { strategy: 'role' as const, value: 'UKG Ready Growth $2,500', role: 'button', actionKind: 'button' as const },
    premiumSuccess3000: { strategy: 'role' as const, value: 'Premium Success $3,000', role: 'button', actionKind: 'button' as const },
    uKGDimensions900: { strategy: 'role' as const, value: 'UKG Dimensions $900', role: 'button', actionKind: 'button' as const },
    upcomingPayments: { strategy: 'text' as const, value: 'Upcoming Payments', actionKind: 'text' as const },
    uKGProWorkforce: { strategy: 'text' as const, value: 'UKG Pro Workforce', actionKind: 'text' as const },
    uKGProCore: { strategy: 'text' as const, value: 'UKG Pro Core', actionKind: 'text' as const },
    element: { strategy: 'text' as const, value: '$128,400', actionKind: 'text' as const },
    dueDate2: { strategy: 'text' as const, value: 'Due Date :', actionKind: 'text' as const },
    jun152026: { strategy: 'text' as const, value: 'Jun 15, 2026', actionKind: 'text' as const },
    DLeft: { strategy: 'text' as const, value: '15D left', actionKind: 'text' as const },
    uKGReady: { strategy: 'text' as const, value: 'UKG Ready', actionKind: 'text' as const },
    uKGReadyHCM: { strategy: 'text' as const, value: 'UKG Ready HCM', actionKind: 'text' as const },
    element2: { strategy: 'text' as const, value: '$54,200', actionKind: 'text' as const },
    dueDate3: { strategy: 'text' as const, value: 'Due Date :', actionKind: 'text' as const },
    jun202026: { strategy: 'text' as const, value: 'Jun 20, 2026', actionKind: 'text' as const },
    DLeft2: { strategy: 'text' as const, value: '20D left', actionKind: 'text' as const },
    uKGReadyPro: { strategy: 'text' as const, value: 'UKG Ready Pro', actionKind: 'text' as const },
    element3: { strategy: 'text' as const, value: '$37,600', actionKind: 'text' as const },
    dueDate4: { strategy: 'text' as const, value: 'Due Date :', actionKind: 'text' as const },
    jun302026: { strategy: 'text' as const, value: 'Jun 30, 2026', actionKind: 'text' as const },
    DLeft3: { strategy: 'text' as const, value: '30D left', actionKind: 'text' as const },
    totalDueThisMonth: { strategy: 'text' as const, value: 'Total due this month', actionKind: 'text' as const },
    element4: { strategy: 'text' as const, value: '$220,200', actionKind: 'text' as const },
    invoiceSummary: { strategy: 'text' as const, value: 'Invoice summary', actionKind: 'text' as const },
    paidInvoices: { strategy: 'text' as const, value: 'Paid invoices', actionKind: 'text' as const },
    element5: { strategy: 'text' as const, value: '24', actionKind: 'text' as const },
    dueThisMonth: { strategy: 'text' as const, value: 'Due this month', actionKind: 'text' as const },
    overdue: { strategy: 'text' as const, value: 'Overdue', actionKind: 'text' as const },
    sendFeedback: { strategy: 'role' as const, value: 'Send feedback', role: 'button', actionKind: 'button' as const },
    rechartsMeasurementSpan: { strategy: 'css' as const, value: '#recharts_measurement_span', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAcmeCorporation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.acmeCorporation));
  }

  async expectAcmeCorporationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.acmeCorporation), expected, timeoutMs);
  }

  async expectAcmeCorporationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.acmeCorporation), substring, timeoutMs);
  }

  async scrollAcmeCorporationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.acmeCorporation));
  }

  async clickUKGAssist(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.uKGAssist));
  }

  async doubleClickUKGAssist(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.uKGAssist));
  }

  async expectUKGAssistVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.uKGAssist), expected, timeoutMs);
  }

  async expectUKGAssistContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.uKGAssist), substring, timeoutMs);
  }

  async scrollUKGAssistIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.uKGAssist));
  }

  async clickSubscriptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.subscriptions));
  }

  async doubleClickSubscriptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.subscriptions));
  }

  async expectSubscriptionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.subscriptions), expected, timeoutMs);
  }

  async expectSubscriptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.subscriptions), substring, timeoutMs);
  }

  async scrollSubscriptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.subscriptions));
  }

  async clickImplementations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.implementations));
  }

  async doubleClickImplementations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.implementations));
  }

  async expectImplementationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.implementations), timeoutMs);
  }

  async expectImplementationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.implementations), timeoutMs);
  }

  async expectImplementationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.implementations), expected, timeoutMs);
  }

  async expectImplementationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.implementations), substring, timeoutMs);
  }

  async scrollImplementationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.implementations));
  }

  async clickBillings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.billings));
  }

  async doubleClickBillings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.billings));
  }

  async expectBillingsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.billings), timeoutMs);
  }

  async expectBillingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.billings), timeoutMs);
  }

  async expectBillingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.billings), expected, timeoutMs);
  }

  async expectBillingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.billings), substring, timeoutMs);
  }

  async scrollBillingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.billings));
  }

  async clickSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.support));
  }

  async doubleClickSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.support));
  }

  async expectSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.support), timeoutMs);
  }

  async expectSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.support), timeoutMs);
  }

  async expectSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.support), expected, timeoutMs);
  }

  async expectSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.support), substring, timeoutMs);
  }

  async scrollSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.support));
  }

  async clickAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.adoption));
  }

  async doubleClickAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.adoption));
  }

  async expectAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.adoption), timeoutMs);
  }

  async expectAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.adoption), timeoutMs);
  }

  async expectAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.adoption), expected, timeoutMs);
  }

  async expectAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.adoption), substring, timeoutMs);
  }

  async scrollAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.adoption));
  }

  async clickAdmin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.admin));
  }

  async doubleClickAdmin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.admin));
  }

  async expectAdminVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.admin), timeoutMs);
  }

  async expectAdminHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.admin), timeoutMs);
  }

  async expectAdminText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.admin), expected, timeoutMs);
  }

  async expectAdminContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.admin), substring, timeoutMs);
  }

  async scrollAdminIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.admin));
  }

  async clickAccountProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.accountProfile));
  }

  async doubleClickAccountProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.accountProfile));
  }

  async expectAccountProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.accountProfile), expected, timeoutMs);
  }

  async expectAccountProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.accountProfile), substring, timeoutMs);
  }

  async scrollAccountProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.accountProfile));
  }

  async clickEJEmmaJohnsonPortal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.eJEmmaJohnsonPortal));
  }

  async doubleClickEJEmmaJohnsonPortal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.eJEmmaJohnsonPortal), expected, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.eJEmmaJohnsonPortal), substring, timeoutMs);
  }

  async scrollEJEmmaJohnsonPortalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.eJEmmaJohnsonPortal));
  }

  async clickSignOut(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.signOut));
  }

  async doubleClickSignOut(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.signOut));
  }

  async expectSignOutVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.signOut), timeoutMs);
  }

  async expectSignOutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.signOut), timeoutMs);
  }

  async expectSignOutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.signOut), timeoutMs);
  }

  async expectSignOutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.signOut), timeoutMs);
  }

  async expectSignOutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.signOut), expected, timeoutMs);
  }

  async expectSignOutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.signOut), substring, timeoutMs);
  }

  async scrollSignOutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.signOut));
  }

  async clickCollapseSidebar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.collapseSidebar));
  }

  async doubleClickCollapseSidebar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.collapseSidebar));
  }

  async expectCollapseSidebarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.collapseSidebar), expected, timeoutMs);
  }

  async expectCollapseSidebarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.collapseSidebar), substring, timeoutMs);
  }

  async scrollCollapseSidebarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.collapseSidebar));
  }

  async getInnerTextPaymentOverdueService(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.paymentOverdueService));
  }

  async expectPaymentOverdueServiceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.paymentOverdueService), timeoutMs);
  }

  async expectPaymentOverdueServiceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.paymentOverdueService), timeoutMs);
  }

  async expectPaymentOverdueServiceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.paymentOverdueService), expected, timeoutMs);
  }

  async expectPaymentOverdueServiceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.paymentOverdueService), substring, timeoutMs);
  }

  async scrollPaymentOverdueServiceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.paymentOverdueService));
  }

  async getInnerTextYourUKGProInvoice(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.yourUKGProInvoice));
  }

  async expectYourUKGProInvoiceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.yourUKGProInvoice), timeoutMs);
  }

  async expectYourUKGProInvoiceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.yourUKGProInvoice), timeoutMs);
  }

  async expectYourUKGProInvoiceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.yourUKGProInvoice), expected, timeoutMs);
  }

  async expectYourUKGProInvoiceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.yourUKGProInvoice), substring, timeoutMs);
  }

  async scrollYourUKGProInvoiceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.yourUKGProInvoice));
  }

  async clickContactUKGSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.contactUKGSupport));
  }

  async doubleClickContactUKGSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.contactUKGSupport));
  }

  async expectContactUKGSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.contactUKGSupport), timeoutMs);
  }

  async expectContactUKGSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.contactUKGSupport), timeoutMs);
  }

  async expectContactUKGSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.contactUKGSupport), timeoutMs);
  }

  async expectContactUKGSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.contactUKGSupport), timeoutMs);
  }

  async expectContactUKGSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.contactUKGSupport), expected, timeoutMs);
  }

  async expectContactUKGSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.contactUKGSupport), substring, timeoutMs);
  }

  async scrollContactUKGSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.contactUKGSupport));
  }

  async clickCloseAlerts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.closeAlerts));
  }

  async doubleClickCloseAlerts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.closeAlerts));
  }

  async expectCloseAlertsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.closeAlerts), expected, timeoutMs);
  }

  async expectCloseAlertsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.closeAlerts), substring, timeoutMs);
  }

  async scrollCloseAlertsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.closeAlerts));
  }

  async getInnerTextAtlasInsightsBilling(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.atlasInsightsBilling));
  }

  async expectAtlasInsightsBillingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.atlasInsightsBilling), timeoutMs);
  }

  async expectAtlasInsightsBillingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.atlasInsightsBilling), timeoutMs);
  }

  async expectAtlasInsightsBillingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.atlasInsightsBilling), expected, timeoutMs);
  }

  async expectAtlasInsightsBillingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.atlasInsightsBilling), substring, timeoutMs);
  }

  async scrollAtlasInsightsBillingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.atlasInsightsBilling));
  }

  async getInnerTextWasThisHelpful(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.wasThisHelpful));
  }

  async expectWasThisHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.wasThisHelpful), expected, timeoutMs);
  }

  async expectWasThisHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.wasThisHelpful), substring, timeoutMs);
  }

  async scrollWasThisHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.wasThisHelpful));
  }

  async clickHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.helpful));
  }

  async doubleClickHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.helpful));
  }

  async expectHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.helpful), timeoutMs);
  }

  async expectHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.helpful), timeoutMs);
  }

  async expectHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.helpful), timeoutMs);
  }

  async expectHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.helpful), timeoutMs);
  }

  async expectHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.helpful), expected, timeoutMs);
  }

  async expectHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.helpful), substring, timeoutMs);
  }

  async scrollHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.helpful));
  }

  async clickNotHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.notHelpful));
  }

  async doubleClickNotHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.notHelpful));
  }

  async expectNotHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.notHelpful), expected, timeoutMs);
  }

  async expectNotHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.notHelpful), substring, timeoutMs);
  }

  async scrollNotHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.notHelpful));
  }

  async fillInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, BillingPage.L.input), value);
  }

  async clearInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, BillingPage.L.input));
  }

  async typeTextInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, BillingPage.L.input), value);
  }

  async expectInputVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.input), timeoutMs);
  }

  async expectInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.input), timeoutMs);
  }

  async expectInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.input), timeoutMs);
  }

  async expectInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.input), timeoutMs);
  }

  async expectInputValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.input), expected, timeoutMs);
  }

  async expectInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.input), timeoutMs);
  }

  async scrollInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.input));
  }

  async clickSendMessage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.sendMessage));
  }

  async doubleClickSendMessage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.sendMessage));
  }

  async expectSendMessageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.sendMessage), expected, timeoutMs);
  }

  async expectSendMessageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.sendMessage), substring, timeoutMs);
  }

  async scrollSendMessageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.sendMessage));
  }

  async getInnerTextAskAtlas(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.askAtlas));
  }

  async expectAskAtlasVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.askAtlas), expected, timeoutMs);
  }

  async expectAskAtlasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.askAtlas), substring, timeoutMs);
  }

  async scrollAskAtlasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.askAtlas));
  }

  async clickOutstandingBalance(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.outstandingBalance));
  }

  async doubleClickOutstandingBalance(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.outstandingBalance));
  }

  async expectOutstandingBalanceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.outstandingBalance), timeoutMs);
  }

  async expectOutstandingBalanceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.outstandingBalance), timeoutMs);
  }

  async expectOutstandingBalanceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.outstandingBalance), timeoutMs);
  }

  async expectOutstandingBalanceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.outstandingBalance), timeoutMs);
  }

  async expectOutstandingBalanceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.outstandingBalance), expected, timeoutMs);
  }

  async expectOutstandingBalanceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.outstandingBalance), substring, timeoutMs);
  }

  async scrollOutstandingBalanceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.outstandingBalance));
  }

  async clickPaymentTerms(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.paymentTerms));
  }

  async doubleClickPaymentTerms(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.paymentTerms));
  }

  async expectPaymentTermsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.paymentTerms), timeoutMs);
  }

  async expectPaymentTermsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.paymentTerms), timeoutMs);
  }

  async expectPaymentTermsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.paymentTerms), timeoutMs);
  }

  async expectPaymentTermsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.paymentTerms), timeoutMs);
  }

  async expectPaymentTermsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.paymentTerms), expected, timeoutMs);
  }

  async expectPaymentTermsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.paymentTerms), substring, timeoutMs);
  }

  async scrollPaymentTermsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.paymentTerms));
  }

  async clickBillingHistory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.billingHistory));
  }

  async doubleClickBillingHistory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.billingHistory));
  }

  async expectBillingHistoryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.billingHistory), timeoutMs);
  }

  async expectBillingHistoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.billingHistory), timeoutMs);
  }

  async expectBillingHistoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.billingHistory), timeoutMs);
  }

  async expectBillingHistoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.billingHistory), timeoutMs);
  }

  async expectBillingHistoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.billingHistory), expected, timeoutMs);
  }

  async expectBillingHistoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.billingHistory), substring, timeoutMs);
  }

  async scrollBillingHistoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.billingHistory));
  }

  async clickCreditNotes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.creditNotes));
  }

  async doubleClickCreditNotes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.creditNotes));
  }

  async expectCreditNotesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.creditNotes), timeoutMs);
  }

  async expectCreditNotesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.creditNotes), timeoutMs);
  }

  async expectCreditNotesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.creditNotes), timeoutMs);
  }

  async expectCreditNotesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.creditNotes), timeoutMs);
  }

  async expectCreditNotesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.creditNotes), expected, timeoutMs);
  }

  async expectCreditNotesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.creditNotes), substring, timeoutMs);
  }

  async scrollCreditNotesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.creditNotes));
  }

  async getInnerTextM(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.M));
  }

  async expectMVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.M), timeoutMs);
  }

  async expectMHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.M), timeoutMs);
  }

  async expectMText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.M), expected, timeoutMs);
  }

  async expectMContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.M), substring, timeoutMs);
  }

  async scrollMIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.M));
  }

  async getInnerTextOpenDue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.OpenDue));
  }

  async expectOpenDueVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.OpenDue), timeoutMs);
  }

  async expectOpenDueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.OpenDue), timeoutMs);
  }

  async expectOpenDueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.OpenDue), expected, timeoutMs);
  }

  async expectOpenDueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.OpenDue), substring, timeoutMs);
  }

  async scrollOpenDueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.OpenDue));
  }

  async getInnerTextYTDPaid(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.yTDPaid));
  }

  async expectYTDPaidVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.yTDPaid), timeoutMs);
  }

  async expectYTDPaidHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.yTDPaid), timeoutMs);
  }

  async expectYTDPaidText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.yTDPaid), expected, timeoutMs);
  }

  async expectYTDPaidContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.yTDPaid), substring, timeoutMs);
  }

  async scrollYTDPaidIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.yTDPaid));
  }

  async getInnerTextM2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.M2));
  }

  async expectM2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.M2), timeoutMs);
  }

  async expectM2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.M2), timeoutMs);
  }

  async expectM2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.M2), expected, timeoutMs);
  }

  async expectM2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.M2), substring, timeoutMs);
  }

  async scrollM2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.M2));
  }

  async getInnerTextInvoicesPaid(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.InvoicesPaid));
  }

  async expectInvoicesPaidVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.InvoicesPaid), timeoutMs);
  }

  async expectInvoicesPaidHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.InvoicesPaid), timeoutMs);
  }

  async expectInvoicesPaidText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.InvoicesPaid), expected, timeoutMs);
  }

  async expectInvoicesPaidContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.InvoicesPaid), substring, timeoutMs);
  }

  async scrollInvoicesPaidIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.InvoicesPaid));
  }

  async getInnerTextNextCharge(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.nextCharge));
  }

  async expectNextChargeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.nextCharge), timeoutMs);
  }

  async expectNextChargeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.nextCharge), timeoutMs);
  }

  async expectNextChargeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.nextCharge), expected, timeoutMs);
  }

  async expectNextChargeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.nextCharge), substring, timeoutMs);
  }

  async scrollNextChargeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.nextCharge));
  }

  async getInnerTextUS16400(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.uS16400));
  }

  async expectUS16400Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.uS16400), timeoutMs);
  }

  async expectUS16400Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.uS16400), timeoutMs);
  }

  async expectUS16400Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.uS16400), expected, timeoutMs);
  }

  async expectUS16400ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.uS16400), substring, timeoutMs);
  }

  async scrollUS16400IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.uS16400));
  }

  async getInnerTextVsLast(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.VsLast));
  }

  async expectVsLastVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.VsLast), timeoutMs);
  }

  async expectVsLastHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.VsLast), timeoutMs);
  }

  async expectVsLastText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.VsLast), expected, timeoutMs);
  }

  async expectVsLastContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.VsLast), substring, timeoutMs);
  }

  async scrollVsLastIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.VsLast));
  }

  async getInnerTextSpendTrend12Months(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.spendTrend12Months));
  }

  async expectSpendTrend12MonthsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.spendTrend12Months), timeoutMs);
  }

  async expectSpendTrend12MonthsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.spendTrend12Months), timeoutMs);
  }

  async expectSpendTrend12MonthsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.spendTrend12Months), expected, timeoutMs);
  }

  async expectSpendTrend12MonthsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.spendTrend12Months), substring, timeoutMs);
  }

  async scrollSpendTrend12MonthsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.spendTrend12Months));
  }

  async clickInvoices(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.invoices));
  }

  async doubleClickInvoices(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.invoices));
  }

  async expectInvoicesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.invoices), timeoutMs);
  }

  async expectInvoicesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.invoices), timeoutMs);
  }

  async expectInvoicesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.invoices), timeoutMs);
  }

  async expectInvoicesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.invoices), timeoutMs);
  }

  async expectInvoicesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.invoices), expected, timeoutMs);
  }

  async expectInvoicesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.invoices), substring, timeoutMs);
  }

  async scrollInvoicesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.invoices));
  }

  async clickPaymentHistory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.paymentHistory));
  }

  async doubleClickPaymentHistory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.paymentHistory));
  }

  async expectPaymentHistoryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.paymentHistory), timeoutMs);
  }

  async expectPaymentHistoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.paymentHistory), timeoutMs);
  }

  async expectPaymentHistoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.paymentHistory), timeoutMs);
  }

  async expectPaymentHistoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.paymentHistory), timeoutMs);
  }

  async expectPaymentHistoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.paymentHistory), expected, timeoutMs);
  }

  async expectPaymentHistoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.paymentHistory), substring, timeoutMs);
  }

  async scrollPaymentHistoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.paymentHistory));
  }

  async clickSpendBreakdown(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.spendBreakdown));
  }

  async doubleClickSpendBreakdown(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.spendBreakdown));
  }

  async expectSpendBreakdownVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.spendBreakdown), timeoutMs);
  }

  async expectSpendBreakdownHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.spendBreakdown), timeoutMs);
  }

  async expectSpendBreakdownEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.spendBreakdown), timeoutMs);
  }

  async expectSpendBreakdownDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.spendBreakdown), timeoutMs);
  }

  async expectSpendBreakdownText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.spendBreakdown), expected, timeoutMs);
  }

  async expectSpendBreakdownContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.spendBreakdown), substring, timeoutMs);
  }

  async scrollSpendBreakdownIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.spendBreakdown));
  }

  async fillInputInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, BillingPage.L.inputInput), value);
  }

  async clearInputInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, BillingPage.L.inputInput));
  }

  async typeTextInputInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, BillingPage.L.inputInput), value);
  }

  async expectInputInputVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.inputInput), timeoutMs);
  }

  async expectInputInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.inputInput), timeoutMs);
  }

  async expectInputInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.inputInput), timeoutMs);
  }

  async expectInputInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.inputInput), timeoutMs);
  }

  async expectInputInputValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.inputInput), expected, timeoutMs);
  }

  async expectInputInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.inputInput), timeoutMs);
  }

  async scrollInputInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.inputInput));
  }

  async clickStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.status));
  }

  async doubleClickStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.status));
  }

  async expectStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.status), timeoutMs);
  }

  async expectStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.status), timeoutMs);
  }

  async expectStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.status), timeoutMs);
  }

  async expectStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.status), timeoutMs);
  }

  async expectStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.status), expected, timeoutMs);
  }

  async expectStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.status), substring, timeoutMs);
  }

  async scrollStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.status));
  }

  async clickExportAsCSV(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.exportAsCSV));
  }

  async doubleClickExportAsCSV(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.exportAsCSV));
  }

  async expectExportAsCSVVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.exportAsCSV), timeoutMs);
  }

  async expectExportAsCSVHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.exportAsCSV), timeoutMs);
  }

  async expectExportAsCSVEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.exportAsCSV), timeoutMs);
  }

  async expectExportAsCSVDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.exportAsCSV), timeoutMs);
  }

  async expectExportAsCSVText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.exportAsCSV), expected, timeoutMs);
  }

  async expectExportAsCSVContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.exportAsCSV), substring, timeoutMs);
  }

  async scrollExportAsCSVIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.exportAsCSV));
  }

  async getInnerTextInvoice(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.invoice));
  }

  async expectInvoiceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.invoice), timeoutMs);
  }

  async expectInvoiceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.invoice), timeoutMs);
  }

  async expectInvoiceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.invoice), expected, timeoutMs);
  }

  async expectInvoiceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.invoice), substring, timeoutMs);
  }

  async scrollInvoiceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.invoice));
  }

  async getInnerTextDescription(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.description));
  }

  async expectDescriptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.description), timeoutMs);
  }

  async expectDescriptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.description), timeoutMs);
  }

  async expectDescriptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.description), expected, timeoutMs);
  }

  async expectDescriptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.description), substring, timeoutMs);
  }

  async scrollDescriptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.description));
  }

  async getInnerTextIssuedOn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.issuedOn));
  }

  async expectIssuedOnVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.issuedOn), timeoutMs);
  }

  async expectIssuedOnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.issuedOn), timeoutMs);
  }

  async expectIssuedOnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.issuedOn), expected, timeoutMs);
  }

  async expectIssuedOnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.issuedOn), substring, timeoutMs);
  }

  async scrollIssuedOnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.issuedOn));
  }

  async getInnerTextDueDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.dueDate));
  }

  async expectDueDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.dueDate), timeoutMs);
  }

  async expectDueDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.dueDate), timeoutMs);
  }

  async expectDueDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.dueDate), expected, timeoutMs);
  }

  async expectDueDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.dueDate), substring, timeoutMs);
  }

  async scrollDueDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.dueDate));
  }

  async getInnerTextAmount(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.amount));
  }

  async expectAmountVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.amount), timeoutMs);
  }

  async expectAmountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.amount), timeoutMs);
  }

  async expectAmountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.amount), expected, timeoutMs);
  }

  async expectAmountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.amount), substring, timeoutMs);
  }

  async scrollAmountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.amount));
  }

  async clickDownloadInvoiceIO1100195973(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100195973));
  }

  async doubleClickDownloadInvoiceIO1100195973(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100195973));
  }

  async expectDownloadInvoiceIO1100195973Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100195973), timeoutMs);
  }

  async expectDownloadInvoiceIO1100195973Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100195973), timeoutMs);
  }

  async expectDownloadInvoiceIO1100195973Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100195973), timeoutMs);
  }

  async expectDownloadInvoiceIO1100195973Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100195973), timeoutMs);
  }

  async expectDownloadInvoiceIO1100195973Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100195973), expected, timeoutMs);
  }

  async expectDownloadInvoiceIO1100195973ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100195973), substring, timeoutMs);
  }

  async scrollDownloadInvoiceIO1100195973IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100195973));
  }

  async clickDownloadInvoiceAMS202606(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606));
  }

  async doubleClickDownloadInvoiceAMS202606(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606));
  }

  async expectDownloadInvoiceAMS202606Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606), timeoutMs);
  }

  async expectDownloadInvoiceAMS202606Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606), timeoutMs);
  }

  async expectDownloadInvoiceAMS202606Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606), timeoutMs);
  }

  async expectDownloadInvoiceAMS202606Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606), timeoutMs);
  }

  async expectDownloadInvoiceAMS202606Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606), expected, timeoutMs);
  }

  async expectDownloadInvoiceAMS202606ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606), substring, timeoutMs);
  }

  async scrollDownloadInvoiceAMS202606IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606));
  }

  async clickDownloadInvoiceIO1100057620(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620));
  }

  async doubleClickDownloadInvoiceIO1100057620(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620));
  }

  async expectDownloadInvoiceIO1100057620Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620), expected, timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620), substring, timeoutMs);
  }

  async scrollDownloadInvoiceIO1100057620IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620));
  }

  async clickDownloadInvoiceIO1100028834(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834));
  }

  async doubleClickDownloadInvoiceIO1100028834(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834));
  }

  async expectDownloadInvoiceIO1100028834Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834), expected, timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834), substring, timeoutMs);
  }

  async scrollDownloadInvoiceIO1100028834IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834));
  }

  async clickDownloadInvoiceIO1100057620Button(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button));
  }

  async doubleClickDownloadInvoiceIO1100057620Button(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button));
  }

  async expectDownloadInvoiceIO1100057620ButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620ButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620ButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620ButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620ButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button), expected, timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620ButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button), substring, timeoutMs);
  }

  async scrollDownloadInvoiceIO1100057620ButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button));
  }

  async clickDownloadInvoiceIO1100028834Button(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834Button));
  }

  async doubleClickDownloadInvoiceIO1100028834Button(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834Button));
  }

  async expectDownloadInvoiceIO1100028834ButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834Button), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834ButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834Button), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834ButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834Button), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834ButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834Button), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834ButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834Button), expected, timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834ButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834Button), substring, timeoutMs);
  }

  async scrollDownloadInvoiceIO1100028834ButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834Button));
  }

  async clickDownloadInvoiceAMS202606Button(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606Button));
  }

  async doubleClickDownloadInvoiceAMS202606Button(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606Button));
  }

  async expectDownloadInvoiceAMS202606ButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606Button), timeoutMs);
  }

  async expectDownloadInvoiceAMS202606ButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606Button), timeoutMs);
  }

  async expectDownloadInvoiceAMS202606ButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606Button), timeoutMs);
  }

  async expectDownloadInvoiceAMS202606ButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606Button), timeoutMs);
  }

  async expectDownloadInvoiceAMS202606ButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606Button), expected, timeoutMs);
  }

  async expectDownloadInvoiceAMS202606ButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606Button), substring, timeoutMs);
  }

  async scrollDownloadInvoiceAMS202606ButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606Button));
  }

  async clickDownloadInvoiceIO1100057620DownloadInvoiceIO1100057620(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620DownloadInvoiceIO1100057620));
  }

  async doubleClickDownloadInvoiceIO1100057620DownloadInvoiceIO1100057620(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620DownloadInvoiceIO1100057620));
  }

  async expectDownloadInvoiceIO1100057620DownloadInvoiceIO1100057620Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620DownloadInvoiceIO1100057620), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620DownloadInvoiceIO1100057620Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620DownloadInvoiceIO1100057620), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620DownloadInvoiceIO1100057620Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620DownloadInvoiceIO1100057620), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620DownloadInvoiceIO1100057620Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620DownloadInvoiceIO1100057620), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620DownloadInvoiceIO1100057620Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620DownloadInvoiceIO1100057620), expected, timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620DownloadInvoiceIO1100057620ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620DownloadInvoiceIO1100057620), substring, timeoutMs);
  }

  async scrollDownloadInvoiceIO1100057620DownloadInvoiceIO1100057620IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620DownloadInvoiceIO1100057620));
  }

  async clickDownloadInvoiceIO1100028834DownloadInvoiceIO1100028834(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834DownloadInvoiceIO1100028834));
  }

  async doubleClickDownloadInvoiceIO1100028834DownloadInvoiceIO1100028834(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834DownloadInvoiceIO1100028834));
  }

  async expectDownloadInvoiceIO1100028834DownloadInvoiceIO1100028834Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834DownloadInvoiceIO1100028834), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834DownloadInvoiceIO1100028834Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834DownloadInvoiceIO1100028834), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834DownloadInvoiceIO1100028834Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834DownloadInvoiceIO1100028834), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834DownloadInvoiceIO1100028834Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834DownloadInvoiceIO1100028834), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834DownloadInvoiceIO1100028834Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834DownloadInvoiceIO1100028834), expected, timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834DownloadInvoiceIO1100028834ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834DownloadInvoiceIO1100028834), substring, timeoutMs);
  }

  async scrollDownloadInvoiceIO1100028834DownloadInvoiceIO1100028834IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834DownloadInvoiceIO1100028834));
  }

  async clickDownloadInvoiceIO1100057620Button2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button2));
  }

  async doubleClickDownloadInvoiceIO1100057620Button2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button2));
  }

  async expectDownloadInvoiceIO1100057620Button2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button2), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Button2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button2), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Button2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button2), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Button2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button2), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Button2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button2), expected, timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Button2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button2), substring, timeoutMs);
  }

  async scrollDownloadInvoiceIO1100057620Button2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button2));
  }

  async clickUndefinedPrevious(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.undefinedPrevious));
  }

  async doubleClickUndefinedPrevious(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.undefinedPrevious));
  }

  async expectUndefinedPreviousVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.undefinedPrevious), timeoutMs);
  }

  async expectUndefinedPreviousHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.undefinedPrevious), timeoutMs);
  }

  async expectUndefinedPreviousEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.undefinedPrevious), timeoutMs);
  }

  async expectUndefinedPreviousDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.undefinedPrevious), timeoutMs);
  }

  async expectUndefinedPreviousText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.undefinedPrevious), expected, timeoutMs);
  }

  async expectUndefinedPreviousContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.undefinedPrevious), substring, timeoutMs);
  }

  async scrollUndefinedPreviousIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.undefinedPrevious));
  }

  async clickUndefinedPage1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.undefinedPage1));
  }

  async doubleClickUndefinedPage1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.undefinedPage1));
  }

  async expectUndefinedPage1Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.undefinedPage1), timeoutMs);
  }

  async expectUndefinedPage1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.undefinedPage1), timeoutMs);
  }

  async expectUndefinedPage1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.undefinedPage1), timeoutMs);
  }

  async expectUndefinedPage1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.undefinedPage1), timeoutMs);
  }

  async expectUndefinedPage1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.undefinedPage1), expected, timeoutMs);
  }

  async expectUndefinedPage1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.undefinedPage1), substring, timeoutMs);
  }

  async scrollUndefinedPage1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.undefinedPage1));
  }

  async clickUndefinedPage2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.undefinedPage2));
  }

  async doubleClickUndefinedPage2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.undefinedPage2));
  }

  async expectUndefinedPage2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.undefinedPage2), timeoutMs);
  }

  async expectUndefinedPage2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.undefinedPage2), timeoutMs);
  }

  async expectUndefinedPage2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.undefinedPage2), timeoutMs);
  }

  async expectUndefinedPage2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.undefinedPage2), timeoutMs);
  }

  async expectUndefinedPage2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.undefinedPage2), expected, timeoutMs);
  }

  async expectUndefinedPage2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.undefinedPage2), substring, timeoutMs);
  }

  async scrollUndefinedPage2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.undefinedPage2));
  }

  async clickUndefinedNext(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.undefinedNext));
  }

  async doubleClickUndefinedNext(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.undefinedNext));
  }

  async expectUndefinedNextVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.undefinedNext), timeoutMs);
  }

  async expectUndefinedNextHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.undefinedNext), timeoutMs);
  }

  async expectUndefinedNextEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.undefinedNext), timeoutMs);
  }

  async expectUndefinedNextDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.undefinedNext), timeoutMs);
  }

  async expectUndefinedNextText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.undefinedNext), expected, timeoutMs);
  }

  async expectUndefinedNextContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.undefinedNext), substring, timeoutMs);
  }

  async scrollUndefinedNextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.undefinedNext));
  }

  async getInnerTextBillingEstimate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.billingEstimate));
  }

  async expectBillingEstimateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.billingEstimate), timeoutMs);
  }

  async expectBillingEstimateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.billingEstimate), timeoutMs);
  }

  async expectBillingEstimateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.billingEstimate), expected, timeoutMs);
  }

  async expectBillingEstimateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.billingEstimate), substring, timeoutMs);
  }

  async scrollBillingEstimateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.billingEstimate));
  }

  async getInnerTextAmountsAreEstimatesBased(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased));
  }

  async expectAmountsAreEstimatesBasedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), timeoutMs);
  }

  async expectAmountsAreEstimatesBasedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), timeoutMs);
  }

  async expectAmountsAreEstimatesBasedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), expected, timeoutMs);
  }

  async expectAmountsAreEstimatesBasedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), substring, timeoutMs);
  }

  async scrollAmountsAreEstimatesBasedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased));
  }

  async getInnerTextUS1640032(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.uS1640032));
  }

  async expectUS1640032Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.uS1640032), timeoutMs);
  }

  async expectUS1640032Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.uS1640032), timeoutMs);
  }

  async expectUS1640032Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.uS1640032), expected, timeoutMs);
  }

  async expectUS1640032ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.uS1640032), substring, timeoutMs);
  }

  async scrollUS1640032IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.uS1640032));
  }

  async getInnerTextEstBillingDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.estBillingDate));
  }

  async expectEstBillingDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.estBillingDate), timeoutMs);
  }

  async expectEstBillingDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.estBillingDate), timeoutMs);
  }

  async expectEstBillingDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.estBillingDate), expected, timeoutMs);
  }

  async expectEstBillingDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.estBillingDate), substring, timeoutMs);
  }

  async scrollEstBillingDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.estBillingDate));
  }

  async getInnerTextSolutions(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.solutions));
  }

  async expectSolutionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.solutions), timeoutMs);
  }

  async expectSolutionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.solutions), timeoutMs);
  }

  async expectSolutionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.solutions), expected, timeoutMs);
  }

  async expectSolutionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.solutions), substring, timeoutMs);
  }

  async scrollSolutionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.solutions));
  }

  async getInnerTextAmount2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.amount2));
  }

  async expectAmount2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.amount2), timeoutMs);
  }

  async expectAmount2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.amount2), timeoutMs);
  }

  async expectAmount2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.amount2), expected, timeoutMs);
  }

  async expectAmount2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.amount2), substring, timeoutMs);
  }

  async scrollAmount2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.amount2));
  }

  async clickUKGProWFMEnterprise(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.uKGProWFMEnterprise));
  }

  async doubleClickUKGProWFMEnterprise(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.uKGProWFMEnterprise));
  }

  async expectUKGProWFMEnterpriseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.uKGProWFMEnterprise), timeoutMs);
  }

  async expectUKGProWFMEnterpriseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.uKGProWFMEnterprise), timeoutMs);
  }

  async expectUKGProWFMEnterpriseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.uKGProWFMEnterprise), timeoutMs);
  }

  async expectUKGProWFMEnterpriseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.uKGProWFMEnterprise), timeoutMs);
  }

  async expectUKGProWFMEnterpriseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.uKGProWFMEnterprise), expected, timeoutMs);
  }

  async expectUKGProWFMEnterpriseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.uKGProWFMEnterprise), substring, timeoutMs);
  }

  async scrollUKGProWFMEnterpriseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.uKGProWFMEnterprise));
  }

  async clickUKGReadyGrowth2500(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.uKGReadyGrowth2500));
  }

  async doubleClickUKGReadyGrowth2500(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.uKGReadyGrowth2500));
  }

  async expectUKGReadyGrowth2500Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.uKGReadyGrowth2500), timeoutMs);
  }

  async expectUKGReadyGrowth2500Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.uKGReadyGrowth2500), timeoutMs);
  }

  async expectUKGReadyGrowth2500Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.uKGReadyGrowth2500), timeoutMs);
  }

  async expectUKGReadyGrowth2500Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.uKGReadyGrowth2500), timeoutMs);
  }

  async expectUKGReadyGrowth2500Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.uKGReadyGrowth2500), expected, timeoutMs);
  }

  async expectUKGReadyGrowth2500ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.uKGReadyGrowth2500), substring, timeoutMs);
  }

  async scrollUKGReadyGrowth2500IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.uKGReadyGrowth2500));
  }

  async clickPremiumSuccess3000(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.premiumSuccess3000));
  }

  async doubleClickPremiumSuccess3000(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.premiumSuccess3000));
  }

  async expectPremiumSuccess3000Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.premiumSuccess3000), timeoutMs);
  }

  async expectPremiumSuccess3000Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.premiumSuccess3000), timeoutMs);
  }

  async expectPremiumSuccess3000Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.premiumSuccess3000), timeoutMs);
  }

  async expectPremiumSuccess3000Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.premiumSuccess3000), timeoutMs);
  }

  async expectPremiumSuccess3000Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.premiumSuccess3000), expected, timeoutMs);
  }

  async expectPremiumSuccess3000ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.premiumSuccess3000), substring, timeoutMs);
  }

  async scrollPremiumSuccess3000IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.premiumSuccess3000));
  }

  async clickUKGDimensions900(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.uKGDimensions900));
  }

  async doubleClickUKGDimensions900(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.uKGDimensions900));
  }

  async expectUKGDimensions900Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.uKGDimensions900), timeoutMs);
  }

  async expectUKGDimensions900Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.uKGDimensions900), timeoutMs);
  }

  async expectUKGDimensions900Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.uKGDimensions900), timeoutMs);
  }

  async expectUKGDimensions900Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.uKGDimensions900), timeoutMs);
  }

  async expectUKGDimensions900Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.uKGDimensions900), expected, timeoutMs);
  }

  async expectUKGDimensions900ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.uKGDimensions900), substring, timeoutMs);
  }

  async scrollUKGDimensions900IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.uKGDimensions900));
  }

  async getInnerTextUpcomingPayments(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.upcomingPayments));
  }

  async expectUpcomingPaymentsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.upcomingPayments), timeoutMs);
  }

  async expectUpcomingPaymentsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.upcomingPayments), timeoutMs);
  }

  async expectUpcomingPaymentsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.upcomingPayments), expected, timeoutMs);
  }

  async expectUpcomingPaymentsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.upcomingPayments), substring, timeoutMs);
  }

  async scrollUpcomingPaymentsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.upcomingPayments));
  }

  async getInnerTextUKGProWorkforce(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.uKGProWorkforce));
  }

  async expectUKGProWorkforceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.uKGProWorkforce), timeoutMs);
  }

  async expectUKGProWorkforceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.uKGProWorkforce), timeoutMs);
  }

  async expectUKGProWorkforceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.uKGProWorkforce), expected, timeoutMs);
  }

  async expectUKGProWorkforceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.uKGProWorkforce), substring, timeoutMs);
  }

  async scrollUKGProWorkforceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.uKGProWorkforce));
  }

  async getInnerTextUKGProCore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.uKGProCore));
  }

  async expectUKGProCoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.uKGProCore), timeoutMs);
  }

  async expectUKGProCoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.uKGProCore), timeoutMs);
  }

  async expectUKGProCoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.uKGProCore), expected, timeoutMs);
  }

  async expectUKGProCoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.uKGProCore), substring, timeoutMs);
  }

  async scrollUKGProCoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.uKGProCore));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.element));
  }

  async getInnerTextDueDate2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.dueDate2));
  }

  async expectDueDate2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.dueDate2), timeoutMs);
  }

  async expectDueDate2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.dueDate2), timeoutMs);
  }

  async expectDueDate2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.dueDate2), expected, timeoutMs);
  }

  async expectDueDate2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.dueDate2), substring, timeoutMs);
  }

  async scrollDueDate2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.dueDate2));
  }

  async getInnerTextJun152026(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.jun152026));
  }

  async expectJun152026Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.jun152026), timeoutMs);
  }

  async expectJun152026Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.jun152026), timeoutMs);
  }

  async expectJun152026Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.jun152026), expected, timeoutMs);
  }

  async expectJun152026ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.jun152026), substring, timeoutMs);
  }

  async scrollJun152026IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.jun152026));
  }

  async getInnerTextDLeft(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.DLeft));
  }

  async expectDLeftVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.DLeft), timeoutMs);
  }

  async expectDLeftHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.DLeft), timeoutMs);
  }

  async expectDLeftText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.DLeft), expected, timeoutMs);
  }

  async expectDLeftContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.DLeft), substring, timeoutMs);
  }

  async scrollDLeftIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.DLeft));
  }

  async getInnerTextUKGReady(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.uKGReady));
  }

  async expectUKGReadyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.uKGReady), timeoutMs);
  }

  async expectUKGReadyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.uKGReady), timeoutMs);
  }

  async expectUKGReadyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.uKGReady), expected, timeoutMs);
  }

  async expectUKGReadyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.uKGReady), substring, timeoutMs);
  }

  async scrollUKGReadyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.uKGReady));
  }

  async getInnerTextUKGReadyHCM(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.uKGReadyHCM));
  }

  async expectUKGReadyHCMVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.uKGReadyHCM), timeoutMs);
  }

  async expectUKGReadyHCMHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.uKGReadyHCM), timeoutMs);
  }

  async expectUKGReadyHCMText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.uKGReadyHCM), expected, timeoutMs);
  }

  async expectUKGReadyHCMContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.uKGReadyHCM), substring, timeoutMs);
  }

  async scrollUKGReadyHCMIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.uKGReadyHCM));
  }

  async getInnerTextElement2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.element2));
  }

  async expectElement2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.element2), timeoutMs);
  }

  async expectElement2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.element2), timeoutMs);
  }

  async expectElement2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.element2), expected, timeoutMs);
  }

  async expectElement2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.element2), substring, timeoutMs);
  }

  async scrollElement2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.element2));
  }

  async getInnerTextDueDate3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.dueDate3));
  }

  async expectDueDate3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.dueDate3), timeoutMs);
  }

  async expectDueDate3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.dueDate3), timeoutMs);
  }

  async expectDueDate3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.dueDate3), expected, timeoutMs);
  }

  async expectDueDate3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.dueDate3), substring, timeoutMs);
  }

  async scrollDueDate3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.dueDate3));
  }

  async getInnerTextJun202026(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.jun202026));
  }

  async expectJun202026Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.jun202026), timeoutMs);
  }

  async expectJun202026Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.jun202026), timeoutMs);
  }

  async expectJun202026Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.jun202026), expected, timeoutMs);
  }

  async expectJun202026ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.jun202026), substring, timeoutMs);
  }

  async scrollJun202026IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.jun202026));
  }

  async getInnerTextDLeft2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.DLeft2));
  }

  async expectDLeft2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.DLeft2), timeoutMs);
  }

  async expectDLeft2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.DLeft2), timeoutMs);
  }

  async expectDLeft2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.DLeft2), expected, timeoutMs);
  }

  async expectDLeft2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.DLeft2), substring, timeoutMs);
  }

  async scrollDLeft2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.DLeft2));
  }

  async getInnerTextUKGReadyPro(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.uKGReadyPro));
  }

  async expectUKGReadyProVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.uKGReadyPro), timeoutMs);
  }

  async expectUKGReadyProHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.uKGReadyPro), timeoutMs);
  }

  async expectUKGReadyProText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.uKGReadyPro), expected, timeoutMs);
  }

  async expectUKGReadyProContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.uKGReadyPro), substring, timeoutMs);
  }

  async scrollUKGReadyProIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.uKGReadyPro));
  }

  async getInnerTextElement3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.element3));
  }

  async expectElement3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.element3), timeoutMs);
  }

  async expectElement3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.element3), timeoutMs);
  }

  async expectElement3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.element3), expected, timeoutMs);
  }

  async expectElement3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.element3), substring, timeoutMs);
  }

  async scrollElement3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.element3));
  }

  async getInnerTextDueDate4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.dueDate4));
  }

  async expectDueDate4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.dueDate4), timeoutMs);
  }

  async expectDueDate4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.dueDate4), timeoutMs);
  }

  async expectDueDate4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.dueDate4), expected, timeoutMs);
  }

  async expectDueDate4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.dueDate4), substring, timeoutMs);
  }

  async scrollDueDate4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.dueDate4));
  }

  async getInnerTextJun302026(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.jun302026));
  }

  async expectJun302026Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.jun302026), timeoutMs);
  }

  async expectJun302026Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.jun302026), timeoutMs);
  }

  async expectJun302026Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.jun302026), expected, timeoutMs);
  }

  async expectJun302026ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.jun302026), substring, timeoutMs);
  }

  async scrollJun302026IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.jun302026));
  }

  async getInnerTextDLeft3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.DLeft3));
  }

  async expectDLeft3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.DLeft3), timeoutMs);
  }

  async expectDLeft3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.DLeft3), timeoutMs);
  }

  async expectDLeft3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.DLeft3), expected, timeoutMs);
  }

  async expectDLeft3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.DLeft3), substring, timeoutMs);
  }

  async scrollDLeft3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.DLeft3));
  }

  async getInnerTextTotalDueThisMonth(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.totalDueThisMonth));
  }

  async expectTotalDueThisMonthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.totalDueThisMonth), timeoutMs);
  }

  async expectTotalDueThisMonthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.totalDueThisMonth), timeoutMs);
  }

  async expectTotalDueThisMonthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.totalDueThisMonth), expected, timeoutMs);
  }

  async expectTotalDueThisMonthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.totalDueThisMonth), substring, timeoutMs);
  }

  async scrollTotalDueThisMonthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.totalDueThisMonth));
  }

  async getInnerTextElement4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.element4));
  }

  async expectElement4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.element4), timeoutMs);
  }

  async expectElement4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.element4), timeoutMs);
  }

  async expectElement4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.element4), expected, timeoutMs);
  }

  async expectElement4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.element4), substring, timeoutMs);
  }

  async scrollElement4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.element4));
  }

  async getInnerTextInvoiceSummary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.invoiceSummary));
  }

  async expectInvoiceSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.invoiceSummary), timeoutMs);
  }

  async expectInvoiceSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.invoiceSummary), timeoutMs);
  }

  async expectInvoiceSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.invoiceSummary), expected, timeoutMs);
  }

  async expectInvoiceSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.invoiceSummary), substring, timeoutMs);
  }

  async scrollInvoiceSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.invoiceSummary));
  }

  async getInnerTextPaidInvoices(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.paidInvoices));
  }

  async expectPaidInvoicesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.paidInvoices), timeoutMs);
  }

  async expectPaidInvoicesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.paidInvoices), timeoutMs);
  }

  async expectPaidInvoicesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.paidInvoices), expected, timeoutMs);
  }

  async expectPaidInvoicesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.paidInvoices), substring, timeoutMs);
  }

  async scrollPaidInvoicesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.paidInvoices));
  }

  async getInnerTextElement5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.element5));
  }

  async expectElement5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.element5), timeoutMs);
  }

  async expectElement5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.element5), timeoutMs);
  }

  async expectElement5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.element5), expected, timeoutMs);
  }

  async expectElement5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.element5), substring, timeoutMs);
  }

  async scrollElement5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.element5));
  }

  async getInnerTextDueThisMonth(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.dueThisMonth));
  }

  async expectDueThisMonthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.dueThisMonth), timeoutMs);
  }

  async expectDueThisMonthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.dueThisMonth), timeoutMs);
  }

  async expectDueThisMonthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.dueThisMonth), expected, timeoutMs);
  }

  async expectDueThisMonthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.dueThisMonth), substring, timeoutMs);
  }

  async scrollDueThisMonthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.dueThisMonth));
  }

  async getInnerTextOverdue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.overdue));
  }

  async expectOverdueVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.overdue), timeoutMs);
  }

  async expectOverdueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.overdue), timeoutMs);
  }

  async expectOverdueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.overdue), expected, timeoutMs);
  }

  async expectOverdueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.overdue), substring, timeoutMs);
  }

  async scrollOverdueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.overdue));
  }

  async clickSendFeedback(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.sendFeedback));
  }

  async doubleClickSendFeedback(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.sendFeedback));
  }

  async expectSendFeedbackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.sendFeedback), expected, timeoutMs);
  }

  async expectSendFeedbackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.sendFeedback), substring, timeoutMs);
  }

  async scrollSendFeedbackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.sendFeedback));
  }

  async getInnerTextRechartsMeasurementSpan(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.rechartsMeasurementSpan));
  }

  async expectRechartsMeasurementSpanVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.rechartsMeasurementSpan), expected, timeoutMs);
  }

  async expectRechartsMeasurementSpanContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.rechartsMeasurementSpan), substring, timeoutMs);
  }

  async scrollRechartsMeasurementSpanIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.rechartsMeasurementSpan));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async clickAcmeCorporation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.acmeCorporation));
  }

  async doubleClickAcmeCorporation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.acmeCorporation));
  }

  async longPressAcmeCorporation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.acmeCorporation));
  }

  async expectAcmeCorporationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.acmeCorporation), value, timeoutMs);
  }

  async expectAcmeCorporationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.acmeCorporation), count, timeoutMs);
  }

  async longPressUKGAssist(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.uKGAssist));
  }

  async expectUKGAssistValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.uKGAssist), value, timeoutMs);
  }

  async expectUKGAssistEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.uKGAssist), count, timeoutMs);
  }

  async longPressSubscriptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.subscriptions));
  }

  async expectSubscriptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.subscriptions), value, timeoutMs);
  }

  async expectSubscriptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.subscriptions), count, timeoutMs);
  }

  async longPressImplementations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.implementations));
  }

  async expectImplementationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.implementations), value, timeoutMs);
  }

  async expectImplementationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.implementations), timeoutMs);
  }

  async expectImplementationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.implementations), timeoutMs);
  }

  async expectImplementationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.implementations), timeoutMs);
  }

  async expectImplementationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.implementations), timeoutMs);
  }

  async expectImplementationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.implementations), timeoutMs);
  }

  async expectImplementationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.implementations), count, timeoutMs);
  }

  async longPressBillings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.billings));
  }

  async expectBillingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.billings), value, timeoutMs);
  }

  async expectBillingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.billings), timeoutMs);
  }

  async expectBillingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.billings), timeoutMs);
  }

  async expectBillingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.billings), timeoutMs);
  }

  async expectBillingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.billings), timeoutMs);
  }

  async expectBillingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.billings), timeoutMs);
  }

  async expectBillingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.billings), count, timeoutMs);
  }

  async longPressSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.support));
  }

  async expectSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.support), value, timeoutMs);
  }

  async expectSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.support), timeoutMs);
  }

  async expectSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.support), timeoutMs);
  }

  async expectSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.support), timeoutMs);
  }

  async expectSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.support), timeoutMs);
  }

  async expectSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.support), timeoutMs);
  }

  async expectSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.support), count, timeoutMs);
  }

  async longPressAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.adoption));
  }

  async expectAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.adoption), value, timeoutMs);
  }

  async expectAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.adoption), timeoutMs);
  }

  async expectAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.adoption), timeoutMs);
  }

  async expectAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.adoption), timeoutMs);
  }

  async expectAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.adoption), timeoutMs);
  }

  async expectAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.adoption), timeoutMs);
  }

  async expectAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.adoption), count, timeoutMs);
  }

  async longPressAdmin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.admin));
  }

  async expectAdminValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.admin), value, timeoutMs);
  }

  async expectAdminEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.admin), timeoutMs);
  }

  async expectAdminDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.admin), timeoutMs);
  }

  async expectAdminChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.admin), timeoutMs);
  }

  async expectAdminUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.admin), timeoutMs);
  }

  async expectAdminFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.admin), timeoutMs);
  }

  async expectAdminCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.admin), count, timeoutMs);
  }

  async longPressAccountProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.accountProfile));
  }

  async expectAccountProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.accountProfile), value, timeoutMs);
  }

  async expectAccountProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.accountProfile), count, timeoutMs);
  }

  async longPressEJEmmaJohnsonPortal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.eJEmmaJohnsonPortal), value, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.eJEmmaJohnsonPortal), count, timeoutMs);
  }

  async longPressSignOut(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.signOut));
  }

  async expectSignOutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.signOut), value, timeoutMs);
  }

  async expectSignOutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.signOut), timeoutMs);
  }

  async expectSignOutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.signOut), timeoutMs);
  }

  async expectSignOutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.signOut), timeoutMs);
  }

  async expectSignOutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.signOut), count, timeoutMs);
  }

  async longPressCollapseSidebar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.collapseSidebar));
  }

  async expectCollapseSidebarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.collapseSidebar), value, timeoutMs);
  }

  async expectCollapseSidebarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.collapseSidebar), count, timeoutMs);
  }

  async clickPaymentOverdueService(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.paymentOverdueService));
  }

  async doubleClickPaymentOverdueService(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.paymentOverdueService));
  }

  async longPressPaymentOverdueService(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.paymentOverdueService));
  }

  async expectPaymentOverdueServiceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.paymentOverdueService), value, timeoutMs);
  }

  async expectPaymentOverdueServiceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.paymentOverdueService), timeoutMs);
  }

  async expectPaymentOverdueServiceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.paymentOverdueService), timeoutMs);
  }

  async expectPaymentOverdueServiceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.paymentOverdueService), timeoutMs);
  }

  async expectPaymentOverdueServiceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.paymentOverdueService), timeoutMs);
  }

  async expectPaymentOverdueServiceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.paymentOverdueService), timeoutMs);
  }

  async expectPaymentOverdueServiceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.paymentOverdueService), count, timeoutMs);
  }

  async clickYourUKGProInvoice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.yourUKGProInvoice));
  }

  async doubleClickYourUKGProInvoice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.yourUKGProInvoice));
  }

  async longPressYourUKGProInvoice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.yourUKGProInvoice));
  }

  async expectYourUKGProInvoiceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.yourUKGProInvoice), value, timeoutMs);
  }

  async expectYourUKGProInvoiceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.yourUKGProInvoice), timeoutMs);
  }

  async expectYourUKGProInvoiceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.yourUKGProInvoice), timeoutMs);
  }

  async expectYourUKGProInvoiceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.yourUKGProInvoice), timeoutMs);
  }

  async expectYourUKGProInvoiceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.yourUKGProInvoice), timeoutMs);
  }

  async expectYourUKGProInvoiceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.yourUKGProInvoice), timeoutMs);
  }

  async expectYourUKGProInvoiceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.yourUKGProInvoice), count, timeoutMs);
  }

  async longPressContactUKGSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.contactUKGSupport));
  }

  async expectContactUKGSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.contactUKGSupport), value, timeoutMs);
  }

  async expectContactUKGSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.contactUKGSupport), timeoutMs);
  }

  async expectContactUKGSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.contactUKGSupport), timeoutMs);
  }

  async expectContactUKGSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.contactUKGSupport), timeoutMs);
  }

  async expectContactUKGSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.contactUKGSupport), count, timeoutMs);
  }

  async longPressCloseAlerts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.closeAlerts));
  }

  async expectCloseAlertsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.closeAlerts), value, timeoutMs);
  }

  async expectCloseAlertsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.closeAlerts), count, timeoutMs);
  }

  async clickAtlasInsightsBilling(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.atlasInsightsBilling));
  }

  async doubleClickAtlasInsightsBilling(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.atlasInsightsBilling));
  }

  async longPressAtlasInsightsBilling(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.atlasInsightsBilling));
  }

  async expectAtlasInsightsBillingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.atlasInsightsBilling), value, timeoutMs);
  }

  async expectAtlasInsightsBillingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.atlasInsightsBilling), timeoutMs);
  }

  async expectAtlasInsightsBillingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.atlasInsightsBilling), timeoutMs);
  }

  async expectAtlasInsightsBillingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.atlasInsightsBilling), timeoutMs);
  }

  async expectAtlasInsightsBillingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.atlasInsightsBilling), timeoutMs);
  }

  async expectAtlasInsightsBillingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.atlasInsightsBilling), timeoutMs);
  }

  async expectAtlasInsightsBillingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.atlasInsightsBilling), count, timeoutMs);
  }

  async clickWasThisHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.wasThisHelpful));
  }

  async doubleClickWasThisHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.wasThisHelpful));
  }

  async longPressWasThisHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.wasThisHelpful));
  }

  async expectWasThisHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.wasThisHelpful), value, timeoutMs);
  }

  async expectWasThisHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.wasThisHelpful), count, timeoutMs);
  }

  async longPressHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.helpful));
  }

  async expectHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.helpful), value, timeoutMs);
  }

  async expectHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.helpful), timeoutMs);
  }

  async expectHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.helpful), timeoutMs);
  }

  async expectHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.helpful), timeoutMs);
  }

  async expectHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.helpful), count, timeoutMs);
  }

  async longPressNotHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.notHelpful));
  }

  async expectNotHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.notHelpful), value, timeoutMs);
  }

  async expectNotHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.notHelpful), count, timeoutMs);
  }

  async expectInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.input), expected, timeoutMs);
  }

  async expectInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.input), substring, timeoutMs);
  }

  async expectInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.input), timeoutMs);
  }

  async expectInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.input), timeoutMs);
  }

  async expectInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.input), count, timeoutMs);
  }

  async longPressSendMessage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.sendMessage));
  }

  async expectSendMessageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.sendMessage), value, timeoutMs);
  }

  async expectSendMessageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.sendMessage), count, timeoutMs);
  }

  async clickAskAtlas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.askAtlas));
  }

  async doubleClickAskAtlas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.askAtlas));
  }

  async longPressAskAtlas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.askAtlas));
  }

  async expectAskAtlasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.askAtlas), value, timeoutMs);
  }

  async expectAskAtlasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.askAtlas), count, timeoutMs);
  }

  async longPressOutstandingBalance(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.outstandingBalance));
  }

  async expectOutstandingBalanceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.outstandingBalance), value, timeoutMs);
  }

  async expectOutstandingBalanceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.outstandingBalance), timeoutMs);
  }

  async expectOutstandingBalanceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.outstandingBalance), timeoutMs);
  }

  async expectOutstandingBalanceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.outstandingBalance), timeoutMs);
  }

  async expectOutstandingBalanceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.outstandingBalance), count, timeoutMs);
  }

  async longPressPaymentTerms(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.paymentTerms));
  }

  async expectPaymentTermsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.paymentTerms), value, timeoutMs);
  }

  async expectPaymentTermsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.paymentTerms), timeoutMs);
  }

  async expectPaymentTermsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.paymentTerms), timeoutMs);
  }

  async expectPaymentTermsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.paymentTerms), timeoutMs);
  }

  async expectPaymentTermsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.paymentTerms), count, timeoutMs);
  }

  async longPressBillingHistory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.billingHistory));
  }

  async expectBillingHistoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.billingHistory), value, timeoutMs);
  }

  async expectBillingHistoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.billingHistory), timeoutMs);
  }

  async expectBillingHistoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.billingHistory), timeoutMs);
  }

  async expectBillingHistoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.billingHistory), timeoutMs);
  }

  async expectBillingHistoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.billingHistory), count, timeoutMs);
  }

  async longPressCreditNotes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.creditNotes));
  }

  async expectCreditNotesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.creditNotes), value, timeoutMs);
  }

  async expectCreditNotesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.creditNotes), timeoutMs);
  }

  async expectCreditNotesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.creditNotes), timeoutMs);
  }

  async expectCreditNotesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.creditNotes), timeoutMs);
  }

  async expectCreditNotesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.creditNotes), count, timeoutMs);
  }

  async clickM(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.M));
  }

  async doubleClickM(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.M));
  }

  async longPressM(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.M));
  }

  async expectMValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.M), value, timeoutMs);
  }

  async expectMEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.M), timeoutMs);
  }

  async expectMDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.M), timeoutMs);
  }

  async expectMChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.M), timeoutMs);
  }

  async expectMUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.M), timeoutMs);
  }

  async expectMFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.M), timeoutMs);
  }

  async expectMCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.M), count, timeoutMs);
  }

  async clickOpenDue(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.OpenDue));
  }

  async doubleClickOpenDue(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.OpenDue));
  }

  async longPressOpenDue(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.OpenDue));
  }

  async expectOpenDueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.OpenDue), value, timeoutMs);
  }

  async expectOpenDueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.OpenDue), timeoutMs);
  }

  async expectOpenDueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.OpenDue), timeoutMs);
  }

  async expectOpenDueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.OpenDue), timeoutMs);
  }

  async expectOpenDueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.OpenDue), timeoutMs);
  }

  async expectOpenDueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.OpenDue), timeoutMs);
  }

  async expectOpenDueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.OpenDue), count, timeoutMs);
  }

  async clickYTDPaid(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.yTDPaid));
  }

  async doubleClickYTDPaid(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.yTDPaid));
  }

  async longPressYTDPaid(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.yTDPaid));
  }

  async expectYTDPaidValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.yTDPaid), value, timeoutMs);
  }

  async expectYTDPaidEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.yTDPaid), timeoutMs);
  }

  async expectYTDPaidDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.yTDPaid), timeoutMs);
  }

  async expectYTDPaidChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.yTDPaid), timeoutMs);
  }

  async expectYTDPaidUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.yTDPaid), timeoutMs);
  }

  async expectYTDPaidFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.yTDPaid), timeoutMs);
  }

  async expectYTDPaidCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.yTDPaid), count, timeoutMs);
  }

  async clickM2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.M2));
  }

  async doubleClickM2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.M2));
  }

  async longPressM2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.M2));
  }

  async expectM2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.M2), value, timeoutMs);
  }

  async expectM2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.M2), timeoutMs);
  }

  async expectM2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.M2), timeoutMs);
  }

  async expectM2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.M2), timeoutMs);
  }

  async expectM2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.M2), timeoutMs);
  }

  async expectM2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.M2), timeoutMs);
  }

  async expectM2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.M2), count, timeoutMs);
  }

  async clickInvoicesPaid(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.InvoicesPaid));
  }

  async doubleClickInvoicesPaid(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.InvoicesPaid));
  }

  async longPressInvoicesPaid(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.InvoicesPaid));
  }

  async expectInvoicesPaidValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.InvoicesPaid), value, timeoutMs);
  }

  async expectInvoicesPaidEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.InvoicesPaid), timeoutMs);
  }

  async expectInvoicesPaidDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.InvoicesPaid), timeoutMs);
  }

  async expectInvoicesPaidChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.InvoicesPaid), timeoutMs);
  }

  async expectInvoicesPaidUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.InvoicesPaid), timeoutMs);
  }

  async expectInvoicesPaidFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.InvoicesPaid), timeoutMs);
  }

  async expectInvoicesPaidCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.InvoicesPaid), count, timeoutMs);
  }

  async clickNextCharge(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.nextCharge));
  }

  async doubleClickNextCharge(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.nextCharge));
  }

  async longPressNextCharge(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.nextCharge));
  }

  async expectNextChargeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.nextCharge), value, timeoutMs);
  }

  async expectNextChargeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.nextCharge), timeoutMs);
  }

  async expectNextChargeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.nextCharge), timeoutMs);
  }

  async expectNextChargeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.nextCharge), timeoutMs);
  }

  async expectNextChargeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.nextCharge), timeoutMs);
  }

  async expectNextChargeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.nextCharge), timeoutMs);
  }

  async expectNextChargeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.nextCharge), count, timeoutMs);
  }

  async clickUS16400(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.uS16400));
  }

  async doubleClickUS16400(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.uS16400));
  }

  async longPressUS16400(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.uS16400));
  }

  async expectUS16400Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.uS16400), value, timeoutMs);
  }

  async expectUS16400Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.uS16400), timeoutMs);
  }

  async expectUS16400Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.uS16400), timeoutMs);
  }

  async expectUS16400Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.uS16400), timeoutMs);
  }

  async expectUS16400Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.uS16400), timeoutMs);
  }

  async expectUS16400Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.uS16400), timeoutMs);
  }

  async expectUS16400Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.uS16400), count, timeoutMs);
  }

  async clickVsLast(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.VsLast));
  }

  async doubleClickVsLast(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.VsLast));
  }

  async longPressVsLast(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.VsLast));
  }

  async expectVsLastValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.VsLast), value, timeoutMs);
  }

  async expectVsLastEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.VsLast), timeoutMs);
  }

  async expectVsLastDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.VsLast), timeoutMs);
  }

  async expectVsLastChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.VsLast), timeoutMs);
  }

  async expectVsLastUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.VsLast), timeoutMs);
  }

  async expectVsLastFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.VsLast), timeoutMs);
  }

  async expectVsLastCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.VsLast), count, timeoutMs);
  }

  async clickSpendTrend12Months(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.spendTrend12Months));
  }

  async doubleClickSpendTrend12Months(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.spendTrend12Months));
  }

  async longPressSpendTrend12Months(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.spendTrend12Months));
  }

  async expectSpendTrend12MonthsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.spendTrend12Months), value, timeoutMs);
  }

  async expectSpendTrend12MonthsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.spendTrend12Months), timeoutMs);
  }

  async expectSpendTrend12MonthsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.spendTrend12Months), timeoutMs);
  }

  async expectSpendTrend12MonthsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.spendTrend12Months), timeoutMs);
  }

  async expectSpendTrend12MonthsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.spendTrend12Months), timeoutMs);
  }

  async expectSpendTrend12MonthsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.spendTrend12Months), timeoutMs);
  }

  async expectSpendTrend12MonthsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.spendTrend12Months), count, timeoutMs);
  }

  async longPressInvoices(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.invoices));
  }

  async expectInvoicesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.invoices), value, timeoutMs);
  }

  async expectInvoicesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.invoices), timeoutMs);
  }

  async expectInvoicesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.invoices), timeoutMs);
  }

  async expectInvoicesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.invoices), timeoutMs);
  }

  async expectInvoicesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.invoices), count, timeoutMs);
  }

  async longPressPaymentHistory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.paymentHistory));
  }

  async expectPaymentHistoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.paymentHistory), value, timeoutMs);
  }

  async expectPaymentHistoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.paymentHistory), timeoutMs);
  }

  async expectPaymentHistoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.paymentHistory), timeoutMs);
  }

  async expectPaymentHistoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.paymentHistory), timeoutMs);
  }

  async expectPaymentHistoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.paymentHistory), count, timeoutMs);
  }

  async longPressSpendBreakdown(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.spendBreakdown));
  }

  async expectSpendBreakdownValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.spendBreakdown), value, timeoutMs);
  }

  async expectSpendBreakdownChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.spendBreakdown), timeoutMs);
  }

  async expectSpendBreakdownUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.spendBreakdown), timeoutMs);
  }

  async expectSpendBreakdownFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.spendBreakdown), timeoutMs);
  }

  async expectSpendBreakdownCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.spendBreakdown), count, timeoutMs);
  }

  async expectInputInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.inputInput), expected, timeoutMs);
  }

  async expectInputInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.inputInput), substring, timeoutMs);
  }

  async expectInputInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.inputInput), timeoutMs);
  }

  async expectInputInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.inputInput), timeoutMs);
  }

  async expectInputInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.inputInput), count, timeoutMs);
  }

  async longPressStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.status));
  }

  async expectStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.status), value, timeoutMs);
  }

  async expectStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.status), timeoutMs);
  }

  async expectStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.status), timeoutMs);
  }

  async expectStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.status), timeoutMs);
  }

  async expectStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.status), count, timeoutMs);
  }

  async longPressExportAsCSV(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.exportAsCSV));
  }

  async expectExportAsCSVValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.exportAsCSV), value, timeoutMs);
  }

  async expectExportAsCSVChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.exportAsCSV), timeoutMs);
  }

  async expectExportAsCSVUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.exportAsCSV), timeoutMs);
  }

  async expectExportAsCSVFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.exportAsCSV), timeoutMs);
  }

  async expectExportAsCSVCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.exportAsCSV), count, timeoutMs);
  }

  async clickInvoice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.invoice));
  }

  async doubleClickInvoice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.invoice));
  }

  async longPressInvoice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.invoice));
  }

  async expectInvoiceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.invoice), value, timeoutMs);
  }

  async expectInvoiceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.invoice), timeoutMs);
  }

  async expectInvoiceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.invoice), timeoutMs);
  }

  async expectInvoiceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.invoice), timeoutMs);
  }

  async expectInvoiceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.invoice), timeoutMs);
  }

  async expectInvoiceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.invoice), timeoutMs);
  }

  async expectInvoiceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.invoice), count, timeoutMs);
  }

  async clickDescription(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.description));
  }

  async doubleClickDescription(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.description));
  }

  async longPressDescription(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.description));
  }

  async expectDescriptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.description), value, timeoutMs);
  }

  async expectDescriptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.description), timeoutMs);
  }

  async expectDescriptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.description), timeoutMs);
  }

  async expectDescriptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.description), timeoutMs);
  }

  async expectDescriptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.description), timeoutMs);
  }

  async expectDescriptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.description), timeoutMs);
  }

  async expectDescriptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.description), count, timeoutMs);
  }

  async clickIssuedOn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.issuedOn));
  }

  async doubleClickIssuedOn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.issuedOn));
  }

  async longPressIssuedOn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.issuedOn));
  }

  async expectIssuedOnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.issuedOn), value, timeoutMs);
  }

  async expectIssuedOnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.issuedOn), timeoutMs);
  }

  async expectIssuedOnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.issuedOn), timeoutMs);
  }

  async expectIssuedOnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.issuedOn), timeoutMs);
  }

  async expectIssuedOnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.issuedOn), timeoutMs);
  }

  async expectIssuedOnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.issuedOn), timeoutMs);
  }

  async expectIssuedOnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.issuedOn), count, timeoutMs);
  }

  async clickDueDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.dueDate));
  }

  async doubleClickDueDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.dueDate));
  }

  async longPressDueDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.dueDate));
  }

  async expectDueDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.dueDate), value, timeoutMs);
  }

  async expectDueDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.dueDate), timeoutMs);
  }

  async expectDueDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.dueDate), timeoutMs);
  }

  async expectDueDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.dueDate), timeoutMs);
  }

  async expectDueDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.dueDate), timeoutMs);
  }

  async expectDueDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.dueDate), timeoutMs);
  }

  async expectDueDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.dueDate), count, timeoutMs);
  }

  async clickAmount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.amount));
  }

  async doubleClickAmount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.amount));
  }

  async longPressAmount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.amount));
  }

  async expectAmountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.amount), value, timeoutMs);
  }

  async expectAmountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.amount), timeoutMs);
  }

  async expectAmountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.amount), timeoutMs);
  }

  async expectAmountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.amount), timeoutMs);
  }

  async expectAmountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.amount), timeoutMs);
  }

  async expectAmountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.amount), timeoutMs);
  }

  async expectAmountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.amount), count, timeoutMs);
  }

  async longPressDownloadInvoiceIO1100195973(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100195973));
  }

  async expectDownloadInvoiceIO1100195973Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100195973), value, timeoutMs);
  }

  async expectDownloadInvoiceIO1100195973Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100195973), timeoutMs);
  }

  async expectDownloadInvoiceIO1100195973Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100195973), timeoutMs);
  }

  async expectDownloadInvoiceIO1100195973Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100195973), timeoutMs);
  }

  async expectDownloadInvoiceIO1100195973Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100195973), count, timeoutMs);
  }

  async longPressDownloadInvoiceAMS202606(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606));
  }

  async expectDownloadInvoiceAMS202606Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606), value, timeoutMs);
  }

  async expectDownloadInvoiceAMS202606Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606), timeoutMs);
  }

  async expectDownloadInvoiceAMS202606Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606), timeoutMs);
  }

  async expectDownloadInvoiceAMS202606Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606), timeoutMs);
  }

  async expectDownloadInvoiceAMS202606Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606), count, timeoutMs);
  }

  async longPressDownloadInvoiceIO1100057620(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620));
  }

  async expectDownloadInvoiceIO1100057620Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620), value, timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620), count, timeoutMs);
  }

  async longPressDownloadInvoiceIO1100028834(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834));
  }

  async expectDownloadInvoiceIO1100028834Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834), value, timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834), count, timeoutMs);
  }

  async longPressDownloadInvoiceIO1100057620Button(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button));
  }

  async expectDownloadInvoiceIO1100057620ButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button), value, timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620ButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620ButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620ButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620ButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button), count, timeoutMs);
  }

  async longPressDownloadInvoiceIO1100028834Button(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834Button));
  }

  async expectDownloadInvoiceIO1100028834ButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834Button), value, timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834ButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834Button), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834ButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834Button), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834ButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834Button), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834ButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834Button), count, timeoutMs);
  }

  async longPressDownloadInvoiceAMS202606Button(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606Button));
  }

  async expectDownloadInvoiceAMS202606ButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606Button), value, timeoutMs);
  }

  async expectDownloadInvoiceAMS202606ButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606Button), timeoutMs);
  }

  async expectDownloadInvoiceAMS202606ButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606Button), timeoutMs);
  }

  async expectDownloadInvoiceAMS202606ButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606Button), timeoutMs);
  }

  async expectDownloadInvoiceAMS202606ButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.downloadInvoiceAMS202606Button), count, timeoutMs);
  }

  async longPressDownloadInvoiceIO1100057620DownloadInvoiceIO1100057620(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620DownloadInvoiceIO1100057620));
  }

  async expectDownloadInvoiceIO1100057620DownloadInvoiceIO1100057620Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620DownloadInvoiceIO1100057620), value, timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620DownloadInvoiceIO1100057620Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620DownloadInvoiceIO1100057620), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620DownloadInvoiceIO1100057620Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620DownloadInvoiceIO1100057620), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620DownloadInvoiceIO1100057620Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620DownloadInvoiceIO1100057620), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620DownloadInvoiceIO1100057620Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620DownloadInvoiceIO1100057620), count, timeoutMs);
  }

  async longPressDownloadInvoiceIO1100028834DownloadInvoiceIO1100028834(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834DownloadInvoiceIO1100028834));
  }

  async expectDownloadInvoiceIO1100028834DownloadInvoiceIO1100028834Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834DownloadInvoiceIO1100028834), value, timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834DownloadInvoiceIO1100028834Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834DownloadInvoiceIO1100028834), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834DownloadInvoiceIO1100028834Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834DownloadInvoiceIO1100028834), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834DownloadInvoiceIO1100028834Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834DownloadInvoiceIO1100028834), timeoutMs);
  }

  async expectDownloadInvoiceIO1100028834DownloadInvoiceIO1100028834Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100028834DownloadInvoiceIO1100028834), count, timeoutMs);
  }

  async longPressDownloadInvoiceIO1100057620Button2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button2));
  }

  async expectDownloadInvoiceIO1100057620Button2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button2), value, timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Button2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button2), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Button2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button2), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Button2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button2), timeoutMs);
  }

  async expectDownloadInvoiceIO1100057620Button2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.downloadInvoiceIO1100057620Button2), count, timeoutMs);
  }

  async longPressUndefinedPrevious(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.undefinedPrevious));
  }

  async expectUndefinedPreviousValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.undefinedPrevious), value, timeoutMs);
  }

  async expectUndefinedPreviousChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.undefinedPrevious), timeoutMs);
  }

  async expectUndefinedPreviousUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.undefinedPrevious), timeoutMs);
  }

  async expectUndefinedPreviousFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.undefinedPrevious), timeoutMs);
  }

  async expectUndefinedPreviousCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.undefinedPrevious), count, timeoutMs);
  }

  async longPressUndefinedPage1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.undefinedPage1));
  }

  async expectUndefinedPage1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.undefinedPage1), value, timeoutMs);
  }

  async expectUndefinedPage1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.undefinedPage1), timeoutMs);
  }

  async expectUndefinedPage1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.undefinedPage1), timeoutMs);
  }

  async expectUndefinedPage1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.undefinedPage1), timeoutMs);
  }

  async expectUndefinedPage1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.undefinedPage1), count, timeoutMs);
  }

  async longPressUndefinedPage2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.undefinedPage2));
  }

  async expectUndefinedPage2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.undefinedPage2), value, timeoutMs);
  }

  async expectUndefinedPage2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.undefinedPage2), timeoutMs);
  }

  async expectUndefinedPage2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.undefinedPage2), timeoutMs);
  }

  async expectUndefinedPage2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.undefinedPage2), timeoutMs);
  }

  async expectUndefinedPage2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.undefinedPage2), count, timeoutMs);
  }

  async longPressUndefinedNext(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.undefinedNext));
  }

  async expectUndefinedNextValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.undefinedNext), value, timeoutMs);
  }

  async expectUndefinedNextChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.undefinedNext), timeoutMs);
  }

  async expectUndefinedNextUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.undefinedNext), timeoutMs);
  }

  async expectUndefinedNextFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.undefinedNext), timeoutMs);
  }

  async expectUndefinedNextCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.undefinedNext), count, timeoutMs);
  }

  async clickBillingEstimate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.billingEstimate));
  }

  async doubleClickBillingEstimate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.billingEstimate));
  }

  async longPressBillingEstimate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.billingEstimate));
  }

  async expectBillingEstimateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.billingEstimate), value, timeoutMs);
  }

  async expectBillingEstimateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.billingEstimate), timeoutMs);
  }

  async expectBillingEstimateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.billingEstimate), timeoutMs);
  }

  async expectBillingEstimateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.billingEstimate), timeoutMs);
  }

  async expectBillingEstimateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.billingEstimate), timeoutMs);
  }

  async expectBillingEstimateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.billingEstimate), timeoutMs);
  }

  async expectBillingEstimateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.billingEstimate), count, timeoutMs);
  }

  async clickAmountsAreEstimatesBased(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased));
  }

  async doubleClickAmountsAreEstimatesBased(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased));
  }

  async longPressAmountsAreEstimatesBased(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased));
  }

  async expectAmountsAreEstimatesBasedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), value, timeoutMs);
  }

  async expectAmountsAreEstimatesBasedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), timeoutMs);
  }

  async expectAmountsAreEstimatesBasedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), timeoutMs);
  }

  async expectAmountsAreEstimatesBasedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), timeoutMs);
  }

  async expectAmountsAreEstimatesBasedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), timeoutMs);
  }

  async expectAmountsAreEstimatesBasedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), timeoutMs);
  }

  async expectAmountsAreEstimatesBasedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), count, timeoutMs);
  }

  async clickUS1640032(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.uS1640032));
  }

  async doubleClickUS1640032(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.uS1640032));
  }

  async longPressUS1640032(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.uS1640032));
  }

  async expectUS1640032Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.uS1640032), value, timeoutMs);
  }

  async expectUS1640032Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.uS1640032), timeoutMs);
  }

  async expectUS1640032Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.uS1640032), timeoutMs);
  }

  async expectUS1640032Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.uS1640032), timeoutMs);
  }

  async expectUS1640032Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.uS1640032), timeoutMs);
  }

  async expectUS1640032Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.uS1640032), timeoutMs);
  }

  async expectUS1640032Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.uS1640032), count, timeoutMs);
  }

  async clickEstBillingDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.estBillingDate));
  }

  async doubleClickEstBillingDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.estBillingDate));
  }

  async longPressEstBillingDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.estBillingDate));
  }

  async expectEstBillingDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.estBillingDate), value, timeoutMs);
  }

  async expectEstBillingDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.estBillingDate), timeoutMs);
  }

  async expectEstBillingDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.estBillingDate), timeoutMs);
  }

  async expectEstBillingDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.estBillingDate), timeoutMs);
  }

  async expectEstBillingDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.estBillingDate), timeoutMs);
  }

  async expectEstBillingDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.estBillingDate), timeoutMs);
  }

  async expectEstBillingDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.estBillingDate), count, timeoutMs);
  }

  async clickSolutions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.solutions));
  }

  async doubleClickSolutions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.solutions));
  }

  async longPressSolutions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.solutions));
  }

  async expectSolutionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.solutions), value, timeoutMs);
  }

  async expectSolutionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.solutions), timeoutMs);
  }

  async expectSolutionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.solutions), timeoutMs);
  }

  async expectSolutionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.solutions), timeoutMs);
  }

  async expectSolutionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.solutions), timeoutMs);
  }

  async expectSolutionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.solutions), timeoutMs);
  }

  async expectSolutionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.solutions), count, timeoutMs);
  }

  async clickAmount2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.amount2));
  }

  async doubleClickAmount2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.amount2));
  }

  async longPressAmount2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.amount2));
  }

  async expectAmount2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.amount2), value, timeoutMs);
  }

  async expectAmount2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.amount2), timeoutMs);
  }

  async expectAmount2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.amount2), timeoutMs);
  }

  async expectAmount2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.amount2), timeoutMs);
  }

  async expectAmount2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.amount2), timeoutMs);
  }

  async expectAmount2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.amount2), timeoutMs);
  }

  async expectAmount2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.amount2), count, timeoutMs);
  }

  async longPressUKGProWFMEnterprise(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.uKGProWFMEnterprise));
  }

  async expectUKGProWFMEnterpriseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.uKGProWFMEnterprise), value, timeoutMs);
  }

  async expectUKGProWFMEnterpriseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.uKGProWFMEnterprise), timeoutMs);
  }

  async expectUKGProWFMEnterpriseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.uKGProWFMEnterprise), timeoutMs);
  }

  async expectUKGProWFMEnterpriseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.uKGProWFMEnterprise), timeoutMs);
  }

  async expectUKGProWFMEnterpriseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.uKGProWFMEnterprise), count, timeoutMs);
  }

  async longPressUKGReadyGrowth2500(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.uKGReadyGrowth2500));
  }

  async expectUKGReadyGrowth2500Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.uKGReadyGrowth2500), value, timeoutMs);
  }

  async expectUKGReadyGrowth2500Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.uKGReadyGrowth2500), timeoutMs);
  }

  async expectUKGReadyGrowth2500Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.uKGReadyGrowth2500), timeoutMs);
  }

  async expectUKGReadyGrowth2500Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.uKGReadyGrowth2500), timeoutMs);
  }

  async expectUKGReadyGrowth2500Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.uKGReadyGrowth2500), count, timeoutMs);
  }

  async longPressPremiumSuccess3000(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.premiumSuccess3000));
  }

  async expectPremiumSuccess3000Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.premiumSuccess3000), value, timeoutMs);
  }

  async expectPremiumSuccess3000Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.premiumSuccess3000), timeoutMs);
  }

  async expectPremiumSuccess3000Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.premiumSuccess3000), timeoutMs);
  }

  async expectPremiumSuccess3000Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.premiumSuccess3000), timeoutMs);
  }

  async expectPremiumSuccess3000Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.premiumSuccess3000), count, timeoutMs);
  }

  async longPressUKGDimensions900(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.uKGDimensions900));
  }

  async expectUKGDimensions900Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.uKGDimensions900), value, timeoutMs);
  }

  async expectUKGDimensions900Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.uKGDimensions900), timeoutMs);
  }

  async expectUKGDimensions900Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.uKGDimensions900), timeoutMs);
  }

  async expectUKGDimensions900Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.uKGDimensions900), timeoutMs);
  }

  async expectUKGDimensions900Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.uKGDimensions900), count, timeoutMs);
  }

  async clickUpcomingPayments(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.upcomingPayments));
  }

  async doubleClickUpcomingPayments(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.upcomingPayments));
  }

  async longPressUpcomingPayments(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.upcomingPayments));
  }

  async expectUpcomingPaymentsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.upcomingPayments), value, timeoutMs);
  }

  async expectUpcomingPaymentsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.upcomingPayments), timeoutMs);
  }

  async expectUpcomingPaymentsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.upcomingPayments), timeoutMs);
  }

  async expectUpcomingPaymentsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.upcomingPayments), timeoutMs);
  }

  async expectUpcomingPaymentsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.upcomingPayments), timeoutMs);
  }

  async expectUpcomingPaymentsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.upcomingPayments), timeoutMs);
  }

  async expectUpcomingPaymentsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.upcomingPayments), count, timeoutMs);
  }

  async clickUKGProWorkforce(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.uKGProWorkforce));
  }

  async doubleClickUKGProWorkforce(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.uKGProWorkforce));
  }

  async longPressUKGProWorkforce(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.uKGProWorkforce));
  }

  async expectUKGProWorkforceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.uKGProWorkforce), value, timeoutMs);
  }

  async expectUKGProWorkforceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.uKGProWorkforce), timeoutMs);
  }

  async expectUKGProWorkforceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.uKGProWorkforce), timeoutMs);
  }

  async expectUKGProWorkforceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.uKGProWorkforce), timeoutMs);
  }

  async expectUKGProWorkforceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.uKGProWorkforce), timeoutMs);
  }

  async expectUKGProWorkforceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.uKGProWorkforce), timeoutMs);
  }

  async expectUKGProWorkforceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.uKGProWorkforce), count, timeoutMs);
  }

  async clickUKGProCore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.uKGProCore));
  }

  async doubleClickUKGProCore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.uKGProCore));
  }

  async longPressUKGProCore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.uKGProCore));
  }

  async expectUKGProCoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.uKGProCore), value, timeoutMs);
  }

  async expectUKGProCoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.uKGProCore), timeoutMs);
  }

  async expectUKGProCoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.uKGProCore), timeoutMs);
  }

  async expectUKGProCoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.uKGProCore), timeoutMs);
  }

  async expectUKGProCoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.uKGProCore), timeoutMs);
  }

  async expectUKGProCoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.uKGProCore), timeoutMs);
  }

  async expectUKGProCoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.uKGProCore), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.element), count, timeoutMs);
  }

  async clickDueDate2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.dueDate2));
  }

  async doubleClickDueDate2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.dueDate2));
  }

  async longPressDueDate2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.dueDate2));
  }

  async expectDueDate2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.dueDate2), value, timeoutMs);
  }

  async expectDueDate2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.dueDate2), timeoutMs);
  }

  async expectDueDate2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.dueDate2), timeoutMs);
  }

  async expectDueDate2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.dueDate2), timeoutMs);
  }

  async expectDueDate2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.dueDate2), timeoutMs);
  }

  async expectDueDate2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.dueDate2), timeoutMs);
  }

  async expectDueDate2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.dueDate2), count, timeoutMs);
  }

  async clickJun152026(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.jun152026));
  }

  async doubleClickJun152026(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.jun152026));
  }

  async longPressJun152026(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.jun152026));
  }

  async expectJun152026Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.jun152026), value, timeoutMs);
  }

  async expectJun152026Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.jun152026), timeoutMs);
  }

  async expectJun152026Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.jun152026), timeoutMs);
  }

  async expectJun152026Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.jun152026), timeoutMs);
  }

  async expectJun152026Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.jun152026), timeoutMs);
  }

  async expectJun152026Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.jun152026), timeoutMs);
  }

  async expectJun152026Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.jun152026), count, timeoutMs);
  }

  async clickDLeft(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.DLeft));
  }

  async doubleClickDLeft(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.DLeft));
  }

  async longPressDLeft(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.DLeft));
  }

  async expectDLeftValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.DLeft), value, timeoutMs);
  }

  async expectDLeftEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.DLeft), timeoutMs);
  }

  async expectDLeftDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.DLeft), timeoutMs);
  }

  async expectDLeftChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.DLeft), timeoutMs);
  }

  async expectDLeftUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.DLeft), timeoutMs);
  }

  async expectDLeftFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.DLeft), timeoutMs);
  }

  async expectDLeftCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.DLeft), count, timeoutMs);
  }

  async clickUKGReady(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.uKGReady));
  }

  async doubleClickUKGReady(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.uKGReady));
  }

  async longPressUKGReady(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.uKGReady));
  }

  async expectUKGReadyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.uKGReady), value, timeoutMs);
  }

  async expectUKGReadyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.uKGReady), timeoutMs);
  }

  async expectUKGReadyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.uKGReady), timeoutMs);
  }

  async expectUKGReadyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.uKGReady), timeoutMs);
  }

  async expectUKGReadyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.uKGReady), timeoutMs);
  }

  async expectUKGReadyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.uKGReady), timeoutMs);
  }

  async expectUKGReadyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.uKGReady), count, timeoutMs);
  }

  async clickUKGReadyHCM(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.uKGReadyHCM));
  }

  async doubleClickUKGReadyHCM(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.uKGReadyHCM));
  }

  async longPressUKGReadyHCM(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.uKGReadyHCM));
  }

  async expectUKGReadyHCMValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.uKGReadyHCM), value, timeoutMs);
  }

  async expectUKGReadyHCMEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.uKGReadyHCM), timeoutMs);
  }

  async expectUKGReadyHCMDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.uKGReadyHCM), timeoutMs);
  }

  async expectUKGReadyHCMChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.uKGReadyHCM), timeoutMs);
  }

  async expectUKGReadyHCMUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.uKGReadyHCM), timeoutMs);
  }

  async expectUKGReadyHCMFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.uKGReadyHCM), timeoutMs);
  }

  async expectUKGReadyHCMCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.uKGReadyHCM), count, timeoutMs);
  }

  async clickElement2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.element2));
  }

  async doubleClickElement2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.element2));
  }

  async longPressElement2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.element2));
  }

  async expectElement2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.element2), value, timeoutMs);
  }

  async expectElement2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.element2), timeoutMs);
  }

  async expectElement2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.element2), timeoutMs);
  }

  async expectElement2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.element2), timeoutMs);
  }

  async expectElement2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.element2), timeoutMs);
  }

  async expectElement2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.element2), timeoutMs);
  }

  async expectElement2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.element2), count, timeoutMs);
  }

  async clickDueDate3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.dueDate3));
  }

  async doubleClickDueDate3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.dueDate3));
  }

  async longPressDueDate3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.dueDate3));
  }

  async expectDueDate3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.dueDate3), value, timeoutMs);
  }

  async expectDueDate3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.dueDate3), timeoutMs);
  }

  async expectDueDate3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.dueDate3), timeoutMs);
  }

  async expectDueDate3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.dueDate3), timeoutMs);
  }

  async expectDueDate3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.dueDate3), timeoutMs);
  }

  async expectDueDate3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.dueDate3), timeoutMs);
  }

  async expectDueDate3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.dueDate3), count, timeoutMs);
  }

  async clickJun202026(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.jun202026));
  }

  async doubleClickJun202026(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.jun202026));
  }

  async longPressJun202026(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.jun202026));
  }

  async expectJun202026Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.jun202026), value, timeoutMs);
  }

  async expectJun202026Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.jun202026), timeoutMs);
  }

  async expectJun202026Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.jun202026), timeoutMs);
  }

  async expectJun202026Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.jun202026), timeoutMs);
  }

  async expectJun202026Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.jun202026), timeoutMs);
  }

  async expectJun202026Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.jun202026), timeoutMs);
  }

  async expectJun202026Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.jun202026), count, timeoutMs);
  }

  async clickDLeft2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.DLeft2));
  }

  async doubleClickDLeft2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.DLeft2));
  }

  async longPressDLeft2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.DLeft2));
  }

  async expectDLeft2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.DLeft2), value, timeoutMs);
  }

  async expectDLeft2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.DLeft2), timeoutMs);
  }

  async expectDLeft2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.DLeft2), timeoutMs);
  }

  async expectDLeft2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.DLeft2), timeoutMs);
  }

  async expectDLeft2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.DLeft2), timeoutMs);
  }

  async expectDLeft2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.DLeft2), timeoutMs);
  }

  async expectDLeft2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.DLeft2), count, timeoutMs);
  }

  async clickUKGReadyPro(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.uKGReadyPro));
  }

  async doubleClickUKGReadyPro(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.uKGReadyPro));
  }

  async longPressUKGReadyPro(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.uKGReadyPro));
  }

  async expectUKGReadyProValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.uKGReadyPro), value, timeoutMs);
  }

  async expectUKGReadyProEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.uKGReadyPro), timeoutMs);
  }

  async expectUKGReadyProDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.uKGReadyPro), timeoutMs);
  }

  async expectUKGReadyProChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.uKGReadyPro), timeoutMs);
  }

  async expectUKGReadyProUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.uKGReadyPro), timeoutMs);
  }

  async expectUKGReadyProFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.uKGReadyPro), timeoutMs);
  }

  async expectUKGReadyProCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.uKGReadyPro), count, timeoutMs);
  }

  async clickElement3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.element3));
  }

  async doubleClickElement3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.element3));
  }

  async longPressElement3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.element3));
  }

  async expectElement3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.element3), value, timeoutMs);
  }

  async expectElement3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.element3), timeoutMs);
  }

  async expectElement3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.element3), timeoutMs);
  }

  async expectElement3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.element3), timeoutMs);
  }

  async expectElement3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.element3), timeoutMs);
  }

  async expectElement3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.element3), timeoutMs);
  }

  async expectElement3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.element3), count, timeoutMs);
  }

  async clickDueDate4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.dueDate4));
  }

  async doubleClickDueDate4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.dueDate4));
  }

  async longPressDueDate4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.dueDate4));
  }

  async expectDueDate4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.dueDate4), value, timeoutMs);
  }

  async expectDueDate4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.dueDate4), timeoutMs);
  }

  async expectDueDate4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.dueDate4), timeoutMs);
  }

  async expectDueDate4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.dueDate4), timeoutMs);
  }

  async expectDueDate4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.dueDate4), timeoutMs);
  }

  async expectDueDate4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.dueDate4), timeoutMs);
  }

  async expectDueDate4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.dueDate4), count, timeoutMs);
  }

  async clickJun302026(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.jun302026));
  }

  async doubleClickJun302026(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.jun302026));
  }

  async longPressJun302026(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.jun302026));
  }

  async expectJun302026Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.jun302026), value, timeoutMs);
  }

  async expectJun302026Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.jun302026), timeoutMs);
  }

  async expectJun302026Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.jun302026), timeoutMs);
  }

  async expectJun302026Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.jun302026), timeoutMs);
  }

  async expectJun302026Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.jun302026), timeoutMs);
  }

  async expectJun302026Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.jun302026), timeoutMs);
  }

  async expectJun302026Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.jun302026), count, timeoutMs);
  }

  async clickDLeft3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.DLeft3));
  }

  async doubleClickDLeft3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.DLeft3));
  }

  async longPressDLeft3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.DLeft3));
  }

  async expectDLeft3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.DLeft3), value, timeoutMs);
  }

  async expectDLeft3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.DLeft3), timeoutMs);
  }

  async expectDLeft3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.DLeft3), timeoutMs);
  }

  async expectDLeft3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.DLeft3), timeoutMs);
  }

  async expectDLeft3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.DLeft3), timeoutMs);
  }

  async expectDLeft3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.DLeft3), timeoutMs);
  }

  async expectDLeft3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.DLeft3), count, timeoutMs);
  }

  async clickTotalDueThisMonth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.totalDueThisMonth));
  }

  async doubleClickTotalDueThisMonth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.totalDueThisMonth));
  }

  async longPressTotalDueThisMonth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.totalDueThisMonth));
  }

  async expectTotalDueThisMonthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.totalDueThisMonth), value, timeoutMs);
  }

  async expectTotalDueThisMonthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.totalDueThisMonth), timeoutMs);
  }

  async expectTotalDueThisMonthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.totalDueThisMonth), timeoutMs);
  }

  async expectTotalDueThisMonthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.totalDueThisMonth), timeoutMs);
  }

  async expectTotalDueThisMonthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.totalDueThisMonth), timeoutMs);
  }

  async expectTotalDueThisMonthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.totalDueThisMonth), timeoutMs);
  }

  async expectTotalDueThisMonthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.totalDueThisMonth), count, timeoutMs);
  }

  async clickElement4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.element4));
  }

  async doubleClickElement4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.element4));
  }

  async longPressElement4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.element4));
  }

  async expectElement4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.element4), value, timeoutMs);
  }

  async expectElement4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.element4), timeoutMs);
  }

  async expectElement4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.element4), timeoutMs);
  }

  async expectElement4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.element4), timeoutMs);
  }

  async expectElement4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.element4), timeoutMs);
  }

  async expectElement4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.element4), timeoutMs);
  }

  async expectElement4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.element4), count, timeoutMs);
  }

  async clickInvoiceSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.invoiceSummary));
  }

  async doubleClickInvoiceSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.invoiceSummary));
  }

  async longPressInvoiceSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.invoiceSummary));
  }

  async expectInvoiceSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.invoiceSummary), value, timeoutMs);
  }

  async expectInvoiceSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.invoiceSummary), timeoutMs);
  }

  async expectInvoiceSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.invoiceSummary), timeoutMs);
  }

  async expectInvoiceSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.invoiceSummary), timeoutMs);
  }

  async expectInvoiceSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.invoiceSummary), timeoutMs);
  }

  async expectInvoiceSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.invoiceSummary), timeoutMs);
  }

  async expectInvoiceSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.invoiceSummary), count, timeoutMs);
  }

  async clickPaidInvoices(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.paidInvoices));
  }

  async doubleClickPaidInvoices(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.paidInvoices));
  }

  async longPressPaidInvoices(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.paidInvoices));
  }

  async expectPaidInvoicesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.paidInvoices), value, timeoutMs);
  }

  async expectPaidInvoicesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.paidInvoices), timeoutMs);
  }

  async expectPaidInvoicesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.paidInvoices), timeoutMs);
  }

  async expectPaidInvoicesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.paidInvoices), timeoutMs);
  }

  async expectPaidInvoicesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.paidInvoices), timeoutMs);
  }

  async expectPaidInvoicesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.paidInvoices), timeoutMs);
  }

  async expectPaidInvoicesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.paidInvoices), count, timeoutMs);
  }

  async clickElement5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.element5));
  }

  async doubleClickElement5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.element5));
  }

  async longPressElement5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.element5));
  }

  async expectElement5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.element5), value, timeoutMs);
  }

  async expectElement5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.element5), timeoutMs);
  }

  async expectElement5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.element5), timeoutMs);
  }

  async expectElement5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.element5), timeoutMs);
  }

  async expectElement5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.element5), timeoutMs);
  }

  async expectElement5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.element5), timeoutMs);
  }

  async expectElement5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.element5), count, timeoutMs);
  }

  async clickDueThisMonth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.dueThisMonth));
  }

  async doubleClickDueThisMonth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.dueThisMonth));
  }

  async longPressDueThisMonth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.dueThisMonth));
  }

  async expectDueThisMonthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.dueThisMonth), value, timeoutMs);
  }

  async expectDueThisMonthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.dueThisMonth), timeoutMs);
  }

  async expectDueThisMonthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.dueThisMonth), timeoutMs);
  }

  async expectDueThisMonthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.dueThisMonth), timeoutMs);
  }

  async expectDueThisMonthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.dueThisMonth), timeoutMs);
  }

  async expectDueThisMonthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.dueThisMonth), timeoutMs);
  }

  async expectDueThisMonthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.dueThisMonth), count, timeoutMs);
  }

  async clickOverdue(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.overdue));
  }

  async doubleClickOverdue(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.overdue));
  }

  async longPressOverdue(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.overdue));
  }

  async expectOverdueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.overdue), value, timeoutMs);
  }

  async expectOverdueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.overdue), timeoutMs);
  }

  async expectOverdueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.overdue), timeoutMs);
  }

  async expectOverdueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.overdue), timeoutMs);
  }

  async expectOverdueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.overdue), timeoutMs);
  }

  async expectOverdueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.overdue), timeoutMs);
  }

  async expectOverdueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.overdue), count, timeoutMs);
  }

  async longPressSendFeedback(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.sendFeedback));
  }

  async expectSendFeedbackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.sendFeedback), value, timeoutMs);
  }

  async expectSendFeedbackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.sendFeedback), count, timeoutMs);
  }

  async clickRechartsMeasurementSpan(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.rechartsMeasurementSpan));
  }

  async doubleClickRechartsMeasurementSpan(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.rechartsMeasurementSpan));
  }

  async longPressRechartsMeasurementSpan(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.rechartsMeasurementSpan));
  }

  async expectRechartsMeasurementSpanValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.rechartsMeasurementSpan), value, timeoutMs);
  }

  async expectRechartsMeasurementSpanEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.rechartsMeasurementSpan), count, timeoutMs);
  }

}
