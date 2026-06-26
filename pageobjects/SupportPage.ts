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

export class SupportPage {
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
    highPriorityCase24094963: { strategy: 'text' as const, value: 'High priority case #24094963 awaiting response', actionKind: 'text' as const },
    wFCTimeClock: { strategy: 'text' as const, value: 'WFC - Time clock not powering on - open since Mar', actionKind: 'text' as const },
    viewCase: { strategy: 'role' as const, value: 'View case', role: 'button', actionKind: 'button' as const },
    closeAlerts: { strategy: 'role' as const, value: 'Close alerts', role: 'button', actionKind: 'button' as const },
    atlasInsightsSupport: { strategy: 'text' as const, value: 'Atlas Insights · Support', actionKind: 'text' as const },
    wasThisHelpful: { strategy: 'text' as const, value: 'Was this helpful?', actionKind: 'text' as const },
    helpful: { strategy: 'role' as const, value: 'Helpful', role: 'button', actionKind: 'button' as const },
    notHelpful: { strategy: 'role' as const, value: 'Not helpful', role: 'button', actionKind: 'button' as const },
    input: { strategy: 'placeholder' as const, value: 'How can we help you today', actionKind: 'textbox' as const },
    sendMessage: { strategy: 'role' as const, value: 'Send message', role: 'button', actionKind: 'button' as const },
    askAtlas: { strategy: 'text' as const, value: 'Ask Atlas', actionKind: 'text' as const },
    caseStatusOverview: { strategy: 'role' as const, value: 'Case status overview', role: 'button', actionKind: 'button' as const },
    highPriorityOpenCases: { strategy: 'role' as const, value: 'High priority open cases', role: 'button', actionKind: 'button' as const },
    resolvedCases: { strategy: 'role' as const, value: 'Resolved Cases', role: 'button', actionKind: 'button' as const },
    openNewCase: { strategy: 'role' as const, value: 'Open new case', role: 'button', actionKind: 'button' as const },
    supportOverview: { strategy: 'text' as const, value: 'Support overview', actionKind: 'text' as const },
    openCases: { strategy: 'text' as const, value: 'Open cases', actionKind: 'text' as const },
    awaitingResponse: { strategy: 'text' as const, value: 'Awaiting Response', actionKind: 'text' as const },
    casesResolvedIn30: { strategy: 'text' as const, value: 'Cases resolved in 30 days', actionKind: 'text' as const },
    element: { strategy: 'text' as const, value: '49', actionKind: 'text' as const },
    activeCases: { strategy: 'role' as const, value: 'Active cases', role: 'button', actionKind: 'button' as const },
    resolvedCasesButton: { strategy: 'role' as const, value: 'Resolved Cases', role: 'button', actionKind: 'button' as const },
    inputInput: { strategy: 'placeholder' as const, value: 'Search case or summary', actionKind: 'textbox' as const },
    allProduct: { strategy: 'role' as const, value: 'All product', role: 'button', actionKind: 'button' as const },
    allPriority: { strategy: 'role' as const, value: 'All priority', role: 'button', actionKind: 'button' as const },
    caseNo: { strategy: 'text' as const, value: 'Case no.', actionKind: 'text' as const },
    summary: { strategy: 'text' as const, value: 'Summary', actionKind: 'text' as const },
    priority: { strategy: 'text' as const, value: 'Priority', actionKind: 'text' as const },
    status: { strategy: 'text' as const, value: 'Status', actionKind: 'text' as const },
    lastModified: { strategy: 'text' as const, value: 'Last Modified', actionKind: 'text' as const },
    dateOpened: { strategy: 'text' as const, value: 'Date Opened', actionKind: 'text' as const },
    a: { strategy: 'role' as const, value: '#24196957', role: 'link', actionKind: 'link' as const },
    aLink: { strategy: 'role' as const, value: '#24196963', role: 'link', actionKind: 'link' as const },
    aLink2: { strategy: 'role' as const, value: '#24196943', role: 'link', actionKind: 'link' as const },
    aLink3: { strategy: 'role' as const, value: '#24196234', role: 'link', actionKind: 'link' as const },
    casesNeedingYourAttention: { strategy: 'text' as const, value: 'Cases Needing Your Attention', actionKind: 'text' as const },
    uKGProWfm: { strategy: 'text' as const, value: 'UKG Pro Wfm', actionKind: 'text' as const },
    element2: { strategy: 'text' as const, value: '24094963', actionKind: 'text' as const },
    dOpen: { strategy: 'text' as const, value: '78d open', actionKind: 'text' as const },
    wFCTimeClock2: { strategy: 'text' as const, value: 'WFC - Time clock not powering on', actionKind: 'text' as const },
    element3: { strategy: 'text' as const, value: '23761175', actionKind: 'text' as const },
    dOpen2: { strategy: 'text' as const, value: '46d open', actionKind: 'text' as const },
    autoSchedulerGenerationNo: { strategy: 'text' as const, value: 'Auto-scheduler generation — no demand shift', actionKind: 'text' as const },
    caseVolumeLast: { strategy: 'text' as const, value: 'Case Volume - Last 7 days', actionKind: 'text' as const },
    totalCases: { strategy: 'text' as const, value: 'Total cases', actionKind: 'text' as const },
    element4: { strategy: 'text' as const, value: '173', actionKind: 'text' as const },
    active: { strategy: 'text' as const, value: 'Active', actionKind: 'text' as const },
    closed: { strategy: 'text' as const, value: 'Closed', actionKind: 'text' as const },
    sendFeedback: { strategy: 'role' as const, value: 'Send feedback', role: 'button', actionKind: 'button' as const },
    rechartsMeasurementSpan: { strategy: 'css' as const, value: '#recharts_measurement_span', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAcmeCorporation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.acmeCorporation));
  }

  async expectAcmeCorporationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.acmeCorporation), expected, timeoutMs);
  }

  async expectAcmeCorporationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.acmeCorporation), substring, timeoutMs);
  }

  async scrollAcmeCorporationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.acmeCorporation));
  }

  async clickUKGAssist(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.uKGAssist));
  }

  async doubleClickUKGAssist(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.uKGAssist));
  }

  async expectUKGAssistVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.uKGAssist), expected, timeoutMs);
  }

  async expectUKGAssistContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.uKGAssist), substring, timeoutMs);
  }

  async scrollUKGAssistIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.uKGAssist));
  }

  async clickSubscriptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.subscriptions));
  }

  async doubleClickSubscriptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.subscriptions));
  }

  async expectSubscriptionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.subscriptions), expected, timeoutMs);
  }

  async expectSubscriptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.subscriptions), substring, timeoutMs);
  }

  async scrollSubscriptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.subscriptions));
  }

  async clickImplementations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.implementations));
  }

  async doubleClickImplementations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.implementations));
  }

  async expectImplementationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.implementations), timeoutMs);
  }

  async expectImplementationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.implementations), timeoutMs);
  }

  async expectImplementationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.implementations), expected, timeoutMs);
  }

  async expectImplementationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.implementations), substring, timeoutMs);
  }

  async scrollImplementationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.implementations));
  }

  async clickBillings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.billings));
  }

  async doubleClickBillings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.billings));
  }

  async expectBillingsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.billings), timeoutMs);
  }

  async expectBillingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.billings), timeoutMs);
  }

  async expectBillingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.billings), expected, timeoutMs);
  }

  async expectBillingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.billings), substring, timeoutMs);
  }

  async scrollBillingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.billings));
  }

  async clickSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.support));
  }

  async doubleClickSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.support));
  }

  async expectSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.support), timeoutMs);
  }

  async expectSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.support), timeoutMs);
  }

  async expectSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.support), expected, timeoutMs);
  }

  async expectSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.support), substring, timeoutMs);
  }

  async scrollSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.support));
  }

  async clickAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.adoption));
  }

  async doubleClickAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.adoption));
  }

  async expectAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.adoption), timeoutMs);
  }

  async expectAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.adoption), timeoutMs);
  }

  async expectAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.adoption), expected, timeoutMs);
  }

  async expectAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.adoption), substring, timeoutMs);
  }

  async scrollAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.adoption));
  }

  async clickAdmin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.admin));
  }

  async doubleClickAdmin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.admin));
  }

  async expectAdminVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.admin), timeoutMs);
  }

  async expectAdminHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.admin), timeoutMs);
  }

  async expectAdminText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.admin), expected, timeoutMs);
  }

  async expectAdminContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.admin), substring, timeoutMs);
  }

  async scrollAdminIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.admin));
  }

  async clickAccountProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.accountProfile));
  }

  async doubleClickAccountProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.accountProfile));
  }

  async expectAccountProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.accountProfile), expected, timeoutMs);
  }

  async expectAccountProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.accountProfile), substring, timeoutMs);
  }

  async scrollAccountProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.accountProfile));
  }

  async clickEJEmmaJohnsonPortal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.eJEmmaJohnsonPortal));
  }

  async doubleClickEJEmmaJohnsonPortal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.eJEmmaJohnsonPortal), expected, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.eJEmmaJohnsonPortal), substring, timeoutMs);
  }

  async scrollEJEmmaJohnsonPortalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.eJEmmaJohnsonPortal));
  }

  async clickSignOut(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.signOut));
  }

  async doubleClickSignOut(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.signOut));
  }

  async expectSignOutVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.signOut), timeoutMs);
  }

  async expectSignOutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.signOut), timeoutMs);
  }

  async expectSignOutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.signOut), timeoutMs);
  }

  async expectSignOutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.signOut), timeoutMs);
  }

  async expectSignOutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.signOut), expected, timeoutMs);
  }

  async expectSignOutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.signOut), substring, timeoutMs);
  }

  async scrollSignOutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.signOut));
  }

  async clickCollapseSidebar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.collapseSidebar));
  }

  async doubleClickCollapseSidebar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.collapseSidebar));
  }

  async expectCollapseSidebarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.collapseSidebar), expected, timeoutMs);
  }

  async expectCollapseSidebarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.collapseSidebar), substring, timeoutMs);
  }

  async scrollCollapseSidebarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.collapseSidebar));
  }

  async getInnerTextHighPriorityCase24094963(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.highPriorityCase24094963));
  }

  async expectHighPriorityCase24094963Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.highPriorityCase24094963), timeoutMs);
  }

  async expectHighPriorityCase24094963Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.highPriorityCase24094963), timeoutMs);
  }

  async expectHighPriorityCase24094963Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.highPriorityCase24094963), expected, timeoutMs);
  }

  async expectHighPriorityCase24094963ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.highPriorityCase24094963), substring, timeoutMs);
  }

  async scrollHighPriorityCase24094963IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.highPriorityCase24094963));
  }

  async getInnerTextWFCTimeClock(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.wFCTimeClock));
  }

  async expectWFCTimeClockVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.wFCTimeClock), timeoutMs);
  }

  async expectWFCTimeClockHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.wFCTimeClock), timeoutMs);
  }

  async expectWFCTimeClockText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.wFCTimeClock), expected, timeoutMs);
  }

  async expectWFCTimeClockContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.wFCTimeClock), substring, timeoutMs);
  }

  async scrollWFCTimeClockIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.wFCTimeClock));
  }

  async clickViewCase(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.viewCase));
  }

  async doubleClickViewCase(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.viewCase));
  }

  async expectViewCaseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.viewCase), timeoutMs);
  }

  async expectViewCaseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.viewCase), timeoutMs);
  }

  async expectViewCaseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.viewCase), timeoutMs);
  }

  async expectViewCaseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.viewCase), timeoutMs);
  }

  async expectViewCaseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.viewCase), expected, timeoutMs);
  }

  async expectViewCaseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.viewCase), substring, timeoutMs);
  }

  async scrollViewCaseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.viewCase));
  }

  async clickCloseAlerts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.closeAlerts));
  }

  async doubleClickCloseAlerts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.closeAlerts));
  }

  async expectCloseAlertsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.closeAlerts), expected, timeoutMs);
  }

  async expectCloseAlertsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.closeAlerts), substring, timeoutMs);
  }

  async scrollCloseAlertsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.closeAlerts));
  }

  async getInnerTextAtlasInsightsSupport(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.atlasInsightsSupport));
  }

  async expectAtlasInsightsSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.atlasInsightsSupport), timeoutMs);
  }

  async expectAtlasInsightsSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.atlasInsightsSupport), timeoutMs);
  }

  async expectAtlasInsightsSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.atlasInsightsSupport), expected, timeoutMs);
  }

  async expectAtlasInsightsSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.atlasInsightsSupport), substring, timeoutMs);
  }

  async scrollAtlasInsightsSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.atlasInsightsSupport));
  }

  async getInnerTextWasThisHelpful(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.wasThisHelpful));
  }

  async expectWasThisHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.wasThisHelpful), expected, timeoutMs);
  }

  async expectWasThisHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.wasThisHelpful), substring, timeoutMs);
  }

  async scrollWasThisHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.wasThisHelpful));
  }

  async clickHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.helpful));
  }

  async doubleClickHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.helpful));
  }

  async expectHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.helpful), timeoutMs);
  }

  async expectHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.helpful), timeoutMs);
  }

  async expectHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.helpful), timeoutMs);
  }

  async expectHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.helpful), timeoutMs);
  }

  async expectHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.helpful), expected, timeoutMs);
  }

  async expectHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.helpful), substring, timeoutMs);
  }

  async scrollHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.helpful));
  }

  async clickNotHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.notHelpful));
  }

  async doubleClickNotHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.notHelpful));
  }

  async expectNotHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.notHelpful), expected, timeoutMs);
  }

  async expectNotHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.notHelpful), substring, timeoutMs);
  }

  async scrollNotHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.notHelpful));
  }

  async fillInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, SupportPage.L.input), value);
  }

  async clearInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, SupportPage.L.input));
  }

  async typeTextInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, SupportPage.L.input), value);
  }

  async expectInputVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.input), timeoutMs);
  }

  async expectInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.input), timeoutMs);
  }

  async expectInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.input), timeoutMs);
  }

  async expectInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.input), timeoutMs);
  }

  async expectInputValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.input), expected, timeoutMs);
  }

  async expectInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.input), timeoutMs);
  }

  async scrollInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.input));
  }

  async clickSendMessage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.sendMessage));
  }

  async doubleClickSendMessage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.sendMessage));
  }

  async expectSendMessageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.sendMessage), expected, timeoutMs);
  }

  async expectSendMessageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.sendMessage), substring, timeoutMs);
  }

  async scrollSendMessageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.sendMessage));
  }

  async getInnerTextAskAtlas(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.askAtlas));
  }

  async expectAskAtlasVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.askAtlas), expected, timeoutMs);
  }

  async expectAskAtlasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.askAtlas), substring, timeoutMs);
  }

  async scrollAskAtlasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.askAtlas));
  }

  async clickCaseStatusOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.caseStatusOverview));
  }

  async doubleClickCaseStatusOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.caseStatusOverview));
  }

  async expectCaseStatusOverviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.caseStatusOverview), timeoutMs);
  }

  async expectCaseStatusOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.caseStatusOverview), timeoutMs);
  }

  async expectCaseStatusOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.caseStatusOverview), timeoutMs);
  }

  async expectCaseStatusOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.caseStatusOverview), timeoutMs);
  }

  async expectCaseStatusOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.caseStatusOverview), expected, timeoutMs);
  }

  async expectCaseStatusOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.caseStatusOverview), substring, timeoutMs);
  }

  async scrollCaseStatusOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.caseStatusOverview));
  }

  async clickHighPriorityOpenCases(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.highPriorityOpenCases));
  }

  async doubleClickHighPriorityOpenCases(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.highPriorityOpenCases));
  }

  async expectHighPriorityOpenCasesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.highPriorityOpenCases), timeoutMs);
  }

  async expectHighPriorityOpenCasesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.highPriorityOpenCases), timeoutMs);
  }

  async expectHighPriorityOpenCasesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.highPriorityOpenCases), timeoutMs);
  }

  async expectHighPriorityOpenCasesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.highPriorityOpenCases), timeoutMs);
  }

  async expectHighPriorityOpenCasesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.highPriorityOpenCases), expected, timeoutMs);
  }

  async expectHighPriorityOpenCasesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.highPriorityOpenCases), substring, timeoutMs);
  }

  async scrollHighPriorityOpenCasesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.highPriorityOpenCases));
  }

  async clickResolvedCases(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.resolvedCases));
  }

  async doubleClickResolvedCases(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.resolvedCases));
  }

  async expectResolvedCasesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.resolvedCases), timeoutMs);
  }

  async expectResolvedCasesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.resolvedCases), timeoutMs);
  }

  async expectResolvedCasesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.resolvedCases), timeoutMs);
  }

  async expectResolvedCasesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.resolvedCases), timeoutMs);
  }

  async expectResolvedCasesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.resolvedCases), expected, timeoutMs);
  }

  async expectResolvedCasesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.resolvedCases), substring, timeoutMs);
  }

  async scrollResolvedCasesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.resolvedCases));
  }

  async clickOpenNewCase(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.openNewCase));
  }

  async doubleClickOpenNewCase(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.openNewCase));
  }

  async expectOpenNewCaseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.openNewCase), timeoutMs);
  }

  async expectOpenNewCaseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.openNewCase), timeoutMs);
  }

  async expectOpenNewCaseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.openNewCase), timeoutMs);
  }

  async expectOpenNewCaseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.openNewCase), timeoutMs);
  }

  async expectOpenNewCaseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.openNewCase), expected, timeoutMs);
  }

  async expectOpenNewCaseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.openNewCase), substring, timeoutMs);
  }

  async scrollOpenNewCaseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.openNewCase));
  }

  async getInnerTextSupportOverview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.supportOverview));
  }

  async expectSupportOverviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.supportOverview), timeoutMs);
  }

  async expectSupportOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.supportOverview), timeoutMs);
  }

  async expectSupportOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.supportOverview), expected, timeoutMs);
  }

  async expectSupportOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.supportOverview), substring, timeoutMs);
  }

  async scrollSupportOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.supportOverview));
  }

  async getInnerTextOpenCases(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.openCases));
  }

  async expectOpenCasesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.openCases), timeoutMs);
  }

  async expectOpenCasesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.openCases), timeoutMs);
  }

  async expectOpenCasesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.openCases), expected, timeoutMs);
  }

  async expectOpenCasesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.openCases), substring, timeoutMs);
  }

  async scrollOpenCasesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.openCases));
  }

  async getInnerTextAwaitingResponse(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.awaitingResponse));
  }

  async expectAwaitingResponseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.awaitingResponse), timeoutMs);
  }

  async expectAwaitingResponseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.awaitingResponse), timeoutMs);
  }

  async expectAwaitingResponseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.awaitingResponse), expected, timeoutMs);
  }

  async expectAwaitingResponseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.awaitingResponse), substring, timeoutMs);
  }

  async scrollAwaitingResponseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.awaitingResponse));
  }

  async getInnerTextCasesResolvedIn30(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.casesResolvedIn30));
  }

  async expectCasesResolvedIn30Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.casesResolvedIn30), timeoutMs);
  }

  async expectCasesResolvedIn30Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.casesResolvedIn30), timeoutMs);
  }

  async expectCasesResolvedIn30Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.casesResolvedIn30), expected, timeoutMs);
  }

  async expectCasesResolvedIn30ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.casesResolvedIn30), substring, timeoutMs);
  }

  async scrollCasesResolvedIn30IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.casesResolvedIn30));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.element));
  }

  async clickActiveCases(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.activeCases));
  }

  async doubleClickActiveCases(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.activeCases));
  }

  async expectActiveCasesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.activeCases), timeoutMs);
  }

  async expectActiveCasesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.activeCases), timeoutMs);
  }

  async expectActiveCasesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.activeCases), timeoutMs);
  }

  async expectActiveCasesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.activeCases), timeoutMs);
  }

  async expectActiveCasesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.activeCases), expected, timeoutMs);
  }

  async expectActiveCasesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.activeCases), substring, timeoutMs);
  }

  async scrollActiveCasesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.activeCases));
  }

  async clickResolvedCasesButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.resolvedCasesButton));
  }

  async doubleClickResolvedCasesButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.resolvedCasesButton));
  }

  async expectResolvedCasesButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.resolvedCasesButton), timeoutMs);
  }

  async expectResolvedCasesButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.resolvedCasesButton), timeoutMs);
  }

  async expectResolvedCasesButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.resolvedCasesButton), timeoutMs);
  }

  async expectResolvedCasesButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.resolvedCasesButton), timeoutMs);
  }

  async expectResolvedCasesButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.resolvedCasesButton), expected, timeoutMs);
  }

  async expectResolvedCasesButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.resolvedCasesButton), substring, timeoutMs);
  }

  async scrollResolvedCasesButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.resolvedCasesButton));
  }

  async fillInputInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, SupportPage.L.inputInput), value);
  }

  async clearInputInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, SupportPage.L.inputInput));
  }

  async typeTextInputInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, SupportPage.L.inputInput), value);
  }

  async expectInputInputVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.inputInput), timeoutMs);
  }

  async expectInputInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.inputInput), timeoutMs);
  }

  async expectInputInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.inputInput), timeoutMs);
  }

  async expectInputInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.inputInput), timeoutMs);
  }

  async expectInputInputValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.inputInput), expected, timeoutMs);
  }

  async expectInputInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.inputInput), timeoutMs);
  }

  async scrollInputInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.inputInput));
  }

  async clickAllProduct(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.allProduct));
  }

  async doubleClickAllProduct(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.allProduct));
  }

  async expectAllProductVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.allProduct), timeoutMs);
  }

  async expectAllProductHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.allProduct), timeoutMs);
  }

  async expectAllProductEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.allProduct), timeoutMs);
  }

  async expectAllProductDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.allProduct), timeoutMs);
  }

  async expectAllProductText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.allProduct), expected, timeoutMs);
  }

  async expectAllProductContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.allProduct), substring, timeoutMs);
  }

  async scrollAllProductIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.allProduct));
  }

  async clickAllPriority(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.allPriority));
  }

  async doubleClickAllPriority(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.allPriority));
  }

  async expectAllPriorityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.allPriority), timeoutMs);
  }

  async expectAllPriorityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.allPriority), timeoutMs);
  }

  async expectAllPriorityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.allPriority), timeoutMs);
  }

  async expectAllPriorityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.allPriority), timeoutMs);
  }

  async expectAllPriorityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.allPriority), expected, timeoutMs);
  }

  async expectAllPriorityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.allPriority), substring, timeoutMs);
  }

  async scrollAllPriorityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.allPriority));
  }

  async getInnerTextCaseNo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.caseNo));
  }

  async expectCaseNoVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.caseNo), timeoutMs);
  }

  async expectCaseNoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.caseNo), timeoutMs);
  }

  async expectCaseNoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.caseNo), expected, timeoutMs);
  }

  async expectCaseNoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.caseNo), substring, timeoutMs);
  }

  async scrollCaseNoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.caseNo));
  }

  async getInnerTextSummary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.summary));
  }

  async expectSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.summary), timeoutMs);
  }

  async expectSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.summary), timeoutMs);
  }

  async expectSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.summary), expected, timeoutMs);
  }

  async expectSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.summary), substring, timeoutMs);
  }

  async scrollSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.summary));
  }

  async getInnerTextPriority(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.priority));
  }

  async expectPriorityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.priority), timeoutMs);
  }

  async expectPriorityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.priority), timeoutMs);
  }

  async expectPriorityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.priority), expected, timeoutMs);
  }

  async expectPriorityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.priority), substring, timeoutMs);
  }

  async scrollPriorityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.priority));
  }

  async getInnerTextStatus(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.status));
  }

  async expectStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.status), timeoutMs);
  }

  async expectStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.status), timeoutMs);
  }

  async expectStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.status), expected, timeoutMs);
  }

  async expectStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.status), substring, timeoutMs);
  }

  async scrollStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.status));
  }

  async getInnerTextLastModified(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.lastModified));
  }

  async expectLastModifiedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.lastModified), timeoutMs);
  }

  async expectLastModifiedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.lastModified), timeoutMs);
  }

  async expectLastModifiedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.lastModified), expected, timeoutMs);
  }

  async expectLastModifiedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.lastModified), substring, timeoutMs);
  }

  async scrollLastModifiedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.lastModified));
  }

  async getInnerTextDateOpened(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.dateOpened));
  }

  async expectDateOpenedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.dateOpened), timeoutMs);
  }

  async expectDateOpenedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.dateOpened), timeoutMs);
  }

  async expectDateOpenedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.dateOpened), expected, timeoutMs);
  }

  async expectDateOpenedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.dateOpened), substring, timeoutMs);
  }

  async scrollDateOpenedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.dateOpened));
  }

  async clickA(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.a));
  }

  async doubleClickA(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.a));
  }

  async expectAVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.a), timeoutMs);
  }

  async expectAHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.a), timeoutMs);
  }

  async expectAText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.a), expected, timeoutMs);
  }

  async expectAContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.a), substring, timeoutMs);
  }

  async scrollAIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.a));
  }

  async clickALink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.aLink));
  }

  async doubleClickALink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.aLink));
  }

  async expectALinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.aLink), timeoutMs);
  }

  async expectALinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.aLink), timeoutMs);
  }

  async expectALinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.aLink), expected, timeoutMs);
  }

  async expectALinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.aLink), substring, timeoutMs);
  }

  async scrollALinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.aLink));
  }

  async clickALink2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.aLink2));
  }

  async doubleClickALink2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.aLink2));
  }

  async expectALink2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.aLink2), timeoutMs);
  }

  async expectALink2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.aLink2), timeoutMs);
  }

  async expectALink2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.aLink2), expected, timeoutMs);
  }

  async expectALink2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.aLink2), substring, timeoutMs);
  }

  async scrollALink2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.aLink2));
  }

  async clickALink3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.aLink3));
  }

  async doubleClickALink3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.aLink3));
  }

  async expectALink3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.aLink3), timeoutMs);
  }

  async expectALink3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.aLink3), timeoutMs);
  }

  async expectALink3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.aLink3), expected, timeoutMs);
  }

  async expectALink3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.aLink3), substring, timeoutMs);
  }

  async scrollALink3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.aLink3));
  }

  async getInnerTextCasesNeedingYourAttention(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.casesNeedingYourAttention));
  }

  async expectCasesNeedingYourAttentionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), timeoutMs);
  }

  async expectCasesNeedingYourAttentionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), timeoutMs);
  }

  async expectCasesNeedingYourAttentionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), expected, timeoutMs);
  }

  async expectCasesNeedingYourAttentionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), substring, timeoutMs);
  }

  async scrollCasesNeedingYourAttentionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.casesNeedingYourAttention));
  }

  async getInnerTextUKGProWfm(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.uKGProWfm));
  }

  async expectUKGProWfmVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.uKGProWfm), timeoutMs);
  }

  async expectUKGProWfmHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.uKGProWfm), timeoutMs);
  }

  async expectUKGProWfmText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.uKGProWfm), expected, timeoutMs);
  }

  async expectUKGProWfmContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.uKGProWfm), substring, timeoutMs);
  }

  async scrollUKGProWfmIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.uKGProWfm));
  }

  async getInnerTextElement2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.element2));
  }

  async expectElement2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.element2), timeoutMs);
  }

  async expectElement2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.element2), timeoutMs);
  }

  async expectElement2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.element2), expected, timeoutMs);
  }

  async expectElement2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.element2), substring, timeoutMs);
  }

  async scrollElement2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.element2));
  }

  async getInnerTextDOpen(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.dOpen));
  }

  async expectDOpenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.dOpen), timeoutMs);
  }

  async expectDOpenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.dOpen), timeoutMs);
  }

  async expectDOpenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.dOpen), expected, timeoutMs);
  }

  async expectDOpenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.dOpen), substring, timeoutMs);
  }

  async scrollDOpenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.dOpen));
  }

  async getInnerTextWFCTimeClock2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.wFCTimeClock2));
  }

  async expectWFCTimeClock2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.wFCTimeClock2), timeoutMs);
  }

  async expectWFCTimeClock2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.wFCTimeClock2), timeoutMs);
  }

  async expectWFCTimeClock2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.wFCTimeClock2), expected, timeoutMs);
  }

  async expectWFCTimeClock2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.wFCTimeClock2), substring, timeoutMs);
  }

  async scrollWFCTimeClock2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.wFCTimeClock2));
  }

  async getInnerTextElement3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.element3));
  }

  async expectElement3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.element3), timeoutMs);
  }

  async expectElement3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.element3), timeoutMs);
  }

  async expectElement3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.element3), expected, timeoutMs);
  }

  async expectElement3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.element3), substring, timeoutMs);
  }

  async scrollElement3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.element3));
  }

  async getInnerTextDOpen2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.dOpen2));
  }

  async expectDOpen2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.dOpen2), timeoutMs);
  }

  async expectDOpen2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.dOpen2), timeoutMs);
  }

  async expectDOpen2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.dOpen2), expected, timeoutMs);
  }

  async expectDOpen2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.dOpen2), substring, timeoutMs);
  }

  async scrollDOpen2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.dOpen2));
  }

  async getInnerTextAutoSchedulerGenerationNo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo));
  }

  async expectAutoSchedulerGenerationNoVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), timeoutMs);
  }

  async expectAutoSchedulerGenerationNoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), timeoutMs);
  }

  async expectAutoSchedulerGenerationNoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), expected, timeoutMs);
  }

  async expectAutoSchedulerGenerationNoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), substring, timeoutMs);
  }

  async scrollAutoSchedulerGenerationNoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo));
  }

  async getInnerTextCaseVolumeLast(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.caseVolumeLast));
  }

  async expectCaseVolumeLastVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.caseVolumeLast), timeoutMs);
  }

  async expectCaseVolumeLastHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.caseVolumeLast), timeoutMs);
  }

  async expectCaseVolumeLastText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.caseVolumeLast), expected, timeoutMs);
  }

  async expectCaseVolumeLastContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.caseVolumeLast), substring, timeoutMs);
  }

  async scrollCaseVolumeLastIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.caseVolumeLast));
  }

  async getInnerTextTotalCases(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.totalCases));
  }

  async expectTotalCasesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.totalCases), timeoutMs);
  }

  async expectTotalCasesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.totalCases), timeoutMs);
  }

  async expectTotalCasesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.totalCases), expected, timeoutMs);
  }

  async expectTotalCasesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.totalCases), substring, timeoutMs);
  }

  async scrollTotalCasesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.totalCases));
  }

  async getInnerTextElement4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.element4));
  }

  async expectElement4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.element4), timeoutMs);
  }

  async expectElement4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.element4), timeoutMs);
  }

  async expectElement4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.element4), expected, timeoutMs);
  }

  async expectElement4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.element4), substring, timeoutMs);
  }

  async scrollElement4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.element4));
  }

  async getInnerTextActive(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.active));
  }

  async expectActiveVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.active), timeoutMs);
  }

  async expectActiveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.active), timeoutMs);
  }

  async expectActiveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.active), expected, timeoutMs);
  }

  async expectActiveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.active), substring, timeoutMs);
  }

  async scrollActiveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.active));
  }

  async getInnerTextClosed(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.closed));
  }

  async expectClosedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.closed), timeoutMs);
  }

  async expectClosedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.closed), timeoutMs);
  }

  async expectClosedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.closed), expected, timeoutMs);
  }

  async expectClosedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.closed), substring, timeoutMs);
  }

  async scrollClosedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.closed));
  }

  async clickSendFeedback(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.sendFeedback));
  }

  async doubleClickSendFeedback(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.sendFeedback));
  }

  async expectSendFeedbackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.sendFeedback), expected, timeoutMs);
  }

  async expectSendFeedbackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.sendFeedback), substring, timeoutMs);
  }

  async scrollSendFeedbackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.sendFeedback));
  }

  async getInnerTextRechartsMeasurementSpan(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.rechartsMeasurementSpan));
  }

  async expectRechartsMeasurementSpanVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.rechartsMeasurementSpan), expected, timeoutMs);
  }

  async expectRechartsMeasurementSpanContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.rechartsMeasurementSpan), substring, timeoutMs);
  }

  async scrollRechartsMeasurementSpanIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.rechartsMeasurementSpan));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async clickAcmeCorporation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.acmeCorporation));
  }

  async doubleClickAcmeCorporation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.acmeCorporation));
  }

  async longPressAcmeCorporation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.acmeCorporation));
  }

  async expectAcmeCorporationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.acmeCorporation), value, timeoutMs);
  }

  async expectAcmeCorporationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.acmeCorporation), count, timeoutMs);
  }

  async longPressUKGAssist(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.uKGAssist));
  }

  async expectUKGAssistValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.uKGAssist), value, timeoutMs);
  }

  async expectUKGAssistEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.uKGAssist), count, timeoutMs);
  }

  async longPressSubscriptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.subscriptions));
  }

  async expectSubscriptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.subscriptions), value, timeoutMs);
  }

  async expectSubscriptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.subscriptions), count, timeoutMs);
  }

  async longPressImplementations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.implementations));
  }

  async expectImplementationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.implementations), value, timeoutMs);
  }

  async expectImplementationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.implementations), timeoutMs);
  }

  async expectImplementationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.implementations), timeoutMs);
  }

  async expectImplementationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.implementations), timeoutMs);
  }

  async expectImplementationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.implementations), timeoutMs);
  }

  async expectImplementationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.implementations), timeoutMs);
  }

  async expectImplementationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.implementations), count, timeoutMs);
  }

  async longPressBillings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.billings));
  }

  async expectBillingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.billings), value, timeoutMs);
  }

  async expectBillingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.billings), timeoutMs);
  }

  async expectBillingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.billings), timeoutMs);
  }

  async expectBillingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.billings), timeoutMs);
  }

  async expectBillingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.billings), timeoutMs);
  }

  async expectBillingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.billings), timeoutMs);
  }

  async expectBillingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.billings), count, timeoutMs);
  }

  async longPressSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.support));
  }

  async expectSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.support), value, timeoutMs);
  }

  async expectSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.support), timeoutMs);
  }

  async expectSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.support), timeoutMs);
  }

  async expectSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.support), timeoutMs);
  }

  async expectSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.support), timeoutMs);
  }

  async expectSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.support), timeoutMs);
  }

  async expectSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.support), count, timeoutMs);
  }

  async longPressAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.adoption));
  }

  async expectAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.adoption), value, timeoutMs);
  }

  async expectAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.adoption), timeoutMs);
  }

  async expectAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.adoption), timeoutMs);
  }

  async expectAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.adoption), timeoutMs);
  }

  async expectAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.adoption), timeoutMs);
  }

  async expectAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.adoption), timeoutMs);
  }

  async expectAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.adoption), count, timeoutMs);
  }

  async longPressAdmin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.admin));
  }

  async expectAdminValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.admin), value, timeoutMs);
  }

  async expectAdminEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.admin), timeoutMs);
  }

  async expectAdminDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.admin), timeoutMs);
  }

  async expectAdminChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.admin), timeoutMs);
  }

  async expectAdminUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.admin), timeoutMs);
  }

  async expectAdminFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.admin), timeoutMs);
  }

  async expectAdminCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.admin), count, timeoutMs);
  }

  async longPressAccountProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.accountProfile));
  }

  async expectAccountProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.accountProfile), value, timeoutMs);
  }

  async expectAccountProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.accountProfile), count, timeoutMs);
  }

  async longPressEJEmmaJohnsonPortal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.eJEmmaJohnsonPortal), value, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.eJEmmaJohnsonPortal), count, timeoutMs);
  }

  async longPressSignOut(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.signOut));
  }

  async expectSignOutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.signOut), value, timeoutMs);
  }

  async expectSignOutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.signOut), timeoutMs);
  }

  async expectSignOutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.signOut), timeoutMs);
  }

  async expectSignOutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.signOut), timeoutMs);
  }

  async expectSignOutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.signOut), count, timeoutMs);
  }

  async longPressCollapseSidebar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.collapseSidebar));
  }

  async expectCollapseSidebarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.collapseSidebar), value, timeoutMs);
  }

  async expectCollapseSidebarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.collapseSidebar), count, timeoutMs);
  }

  async clickHighPriorityCase24094963(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.highPriorityCase24094963));
  }

  async doubleClickHighPriorityCase24094963(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.highPriorityCase24094963));
  }

  async longPressHighPriorityCase24094963(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.highPriorityCase24094963));
  }

  async expectHighPriorityCase24094963Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.highPriorityCase24094963), value, timeoutMs);
  }

  async expectHighPriorityCase24094963Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.highPriorityCase24094963), timeoutMs);
  }

  async expectHighPriorityCase24094963Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.highPriorityCase24094963), timeoutMs);
  }

  async expectHighPriorityCase24094963Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.highPriorityCase24094963), timeoutMs);
  }

  async expectHighPriorityCase24094963Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.highPriorityCase24094963), timeoutMs);
  }

  async expectHighPriorityCase24094963Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.highPriorityCase24094963), timeoutMs);
  }

  async expectHighPriorityCase24094963Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.highPriorityCase24094963), count, timeoutMs);
  }

  async clickWFCTimeClock(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.wFCTimeClock));
  }

  async doubleClickWFCTimeClock(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.wFCTimeClock));
  }

  async longPressWFCTimeClock(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.wFCTimeClock));
  }

  async expectWFCTimeClockValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.wFCTimeClock), value, timeoutMs);
  }

  async expectWFCTimeClockEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.wFCTimeClock), timeoutMs);
  }

  async expectWFCTimeClockDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.wFCTimeClock), timeoutMs);
  }

  async expectWFCTimeClockChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.wFCTimeClock), timeoutMs);
  }

  async expectWFCTimeClockUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.wFCTimeClock), timeoutMs);
  }

  async expectWFCTimeClockFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.wFCTimeClock), timeoutMs);
  }

  async expectWFCTimeClockCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.wFCTimeClock), count, timeoutMs);
  }

  async longPressViewCase(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.viewCase));
  }

  async expectViewCaseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.viewCase), value, timeoutMs);
  }

  async expectViewCaseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.viewCase), timeoutMs);
  }

  async expectViewCaseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.viewCase), timeoutMs);
  }

  async expectViewCaseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.viewCase), timeoutMs);
  }

  async expectViewCaseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.viewCase), count, timeoutMs);
  }

  async longPressCloseAlerts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.closeAlerts));
  }

  async expectCloseAlertsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.closeAlerts), value, timeoutMs);
  }

  async expectCloseAlertsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.closeAlerts), count, timeoutMs);
  }

  async clickAtlasInsightsSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.atlasInsightsSupport));
  }

  async doubleClickAtlasInsightsSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.atlasInsightsSupport));
  }

  async longPressAtlasInsightsSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.atlasInsightsSupport));
  }

  async expectAtlasInsightsSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.atlasInsightsSupport), value, timeoutMs);
  }

  async expectAtlasInsightsSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.atlasInsightsSupport), timeoutMs);
  }

  async expectAtlasInsightsSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.atlasInsightsSupport), timeoutMs);
  }

  async expectAtlasInsightsSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.atlasInsightsSupport), timeoutMs);
  }

  async expectAtlasInsightsSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.atlasInsightsSupport), timeoutMs);
  }

  async expectAtlasInsightsSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.atlasInsightsSupport), timeoutMs);
  }

  async expectAtlasInsightsSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.atlasInsightsSupport), count, timeoutMs);
  }

  async clickWasThisHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.wasThisHelpful));
  }

  async doubleClickWasThisHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.wasThisHelpful));
  }

  async longPressWasThisHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.wasThisHelpful));
  }

  async expectWasThisHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.wasThisHelpful), value, timeoutMs);
  }

  async expectWasThisHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.wasThisHelpful), count, timeoutMs);
  }

  async longPressHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.helpful));
  }

  async expectHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.helpful), value, timeoutMs);
  }

  async expectHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.helpful), timeoutMs);
  }

  async expectHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.helpful), timeoutMs);
  }

  async expectHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.helpful), timeoutMs);
  }

  async expectHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.helpful), count, timeoutMs);
  }

  async longPressNotHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.notHelpful));
  }

  async expectNotHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.notHelpful), value, timeoutMs);
  }

  async expectNotHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.notHelpful), count, timeoutMs);
  }

  async expectInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.input), expected, timeoutMs);
  }

  async expectInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.input), substring, timeoutMs);
  }

  async expectInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.input), timeoutMs);
  }

  async expectInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.input), timeoutMs);
  }

  async expectInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.input), count, timeoutMs);
  }

  async longPressSendMessage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.sendMessage));
  }

  async expectSendMessageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.sendMessage), value, timeoutMs);
  }

  async expectSendMessageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.sendMessage), count, timeoutMs);
  }

  async clickAskAtlas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.askAtlas));
  }

  async doubleClickAskAtlas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.askAtlas));
  }

  async longPressAskAtlas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.askAtlas));
  }

  async expectAskAtlasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.askAtlas), value, timeoutMs);
  }

  async expectAskAtlasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.askAtlas), count, timeoutMs);
  }

  async longPressCaseStatusOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.caseStatusOverview));
  }

  async expectCaseStatusOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.caseStatusOverview), value, timeoutMs);
  }

  async expectCaseStatusOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.caseStatusOverview), timeoutMs);
  }

  async expectCaseStatusOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.caseStatusOverview), timeoutMs);
  }

  async expectCaseStatusOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.caseStatusOverview), timeoutMs);
  }

  async expectCaseStatusOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.caseStatusOverview), count, timeoutMs);
  }

  async longPressHighPriorityOpenCases(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.highPriorityOpenCases));
  }

  async expectHighPriorityOpenCasesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.highPriorityOpenCases), value, timeoutMs);
  }

  async expectHighPriorityOpenCasesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.highPriorityOpenCases), timeoutMs);
  }

  async expectHighPriorityOpenCasesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.highPriorityOpenCases), timeoutMs);
  }

  async expectHighPriorityOpenCasesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.highPriorityOpenCases), timeoutMs);
  }

  async expectHighPriorityOpenCasesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.highPriorityOpenCases), count, timeoutMs);
  }

  async longPressResolvedCases(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.resolvedCases));
  }

  async expectResolvedCasesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.resolvedCases), value, timeoutMs);
  }

  async expectResolvedCasesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.resolvedCases), timeoutMs);
  }

  async expectResolvedCasesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.resolvedCases), timeoutMs);
  }

  async expectResolvedCasesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.resolvedCases), timeoutMs);
  }

  async expectResolvedCasesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.resolvedCases), count, timeoutMs);
  }

  async longPressOpenNewCase(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.openNewCase));
  }

  async expectOpenNewCaseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.openNewCase), value, timeoutMs);
  }

  async expectOpenNewCaseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.openNewCase), timeoutMs);
  }

  async expectOpenNewCaseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.openNewCase), timeoutMs);
  }

  async expectOpenNewCaseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.openNewCase), timeoutMs);
  }

  async expectOpenNewCaseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.openNewCase), count, timeoutMs);
  }

  async clickSupportOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.supportOverview));
  }

  async doubleClickSupportOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.supportOverview));
  }

  async longPressSupportOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.supportOverview));
  }

  async expectSupportOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.supportOverview), value, timeoutMs);
  }

  async expectSupportOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.supportOverview), timeoutMs);
  }

  async expectSupportOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.supportOverview), timeoutMs);
  }

  async expectSupportOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.supportOverview), timeoutMs);
  }

  async expectSupportOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.supportOverview), timeoutMs);
  }

  async expectSupportOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.supportOverview), timeoutMs);
  }

  async expectSupportOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.supportOverview), count, timeoutMs);
  }

  async clickOpenCases(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.openCases));
  }

  async doubleClickOpenCases(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.openCases));
  }

  async longPressOpenCases(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.openCases));
  }

  async expectOpenCasesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.openCases), value, timeoutMs);
  }

  async expectOpenCasesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.openCases), timeoutMs);
  }

  async expectOpenCasesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.openCases), timeoutMs);
  }

  async expectOpenCasesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.openCases), timeoutMs);
  }

  async expectOpenCasesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.openCases), timeoutMs);
  }

  async expectOpenCasesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.openCases), timeoutMs);
  }

  async expectOpenCasesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.openCases), count, timeoutMs);
  }

  async clickAwaitingResponse(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.awaitingResponse));
  }

  async doubleClickAwaitingResponse(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.awaitingResponse));
  }

  async longPressAwaitingResponse(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.awaitingResponse));
  }

  async expectAwaitingResponseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.awaitingResponse), value, timeoutMs);
  }

  async expectAwaitingResponseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.awaitingResponse), timeoutMs);
  }

  async expectAwaitingResponseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.awaitingResponse), timeoutMs);
  }

  async expectAwaitingResponseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.awaitingResponse), timeoutMs);
  }

  async expectAwaitingResponseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.awaitingResponse), timeoutMs);
  }

  async expectAwaitingResponseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.awaitingResponse), timeoutMs);
  }

  async expectAwaitingResponseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.awaitingResponse), count, timeoutMs);
  }

  async clickCasesResolvedIn30(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.casesResolvedIn30));
  }

  async doubleClickCasesResolvedIn30(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.casesResolvedIn30));
  }

  async longPressCasesResolvedIn30(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.casesResolvedIn30));
  }

  async expectCasesResolvedIn30Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.casesResolvedIn30), value, timeoutMs);
  }

  async expectCasesResolvedIn30Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.casesResolvedIn30), timeoutMs);
  }

  async expectCasesResolvedIn30Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.casesResolvedIn30), timeoutMs);
  }

  async expectCasesResolvedIn30Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.casesResolvedIn30), timeoutMs);
  }

  async expectCasesResolvedIn30Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.casesResolvedIn30), timeoutMs);
  }

  async expectCasesResolvedIn30Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.casesResolvedIn30), timeoutMs);
  }

  async expectCasesResolvedIn30Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.casesResolvedIn30), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.element), count, timeoutMs);
  }

  async longPressActiveCases(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.activeCases));
  }

  async expectActiveCasesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.activeCases), value, timeoutMs);
  }

  async expectActiveCasesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.activeCases), timeoutMs);
  }

  async expectActiveCasesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.activeCases), timeoutMs);
  }

  async expectActiveCasesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.activeCases), timeoutMs);
  }

  async expectActiveCasesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.activeCases), count, timeoutMs);
  }

  async longPressResolvedCasesButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.resolvedCasesButton));
  }

  async expectResolvedCasesButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.resolvedCasesButton), value, timeoutMs);
  }

  async expectResolvedCasesButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.resolvedCasesButton), timeoutMs);
  }

  async expectResolvedCasesButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.resolvedCasesButton), timeoutMs);
  }

  async expectResolvedCasesButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.resolvedCasesButton), timeoutMs);
  }

  async expectResolvedCasesButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.resolvedCasesButton), count, timeoutMs);
  }

  async expectInputInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.inputInput), expected, timeoutMs);
  }

  async expectInputInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.inputInput), substring, timeoutMs);
  }

  async expectInputInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.inputInput), timeoutMs);
  }

  async expectInputInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.inputInput), timeoutMs);
  }

  async expectInputInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.inputInput), count, timeoutMs);
  }

  async longPressAllProduct(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.allProduct));
  }

  async expectAllProductValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.allProduct), value, timeoutMs);
  }

  async expectAllProductChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.allProduct), timeoutMs);
  }

  async expectAllProductUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.allProduct), timeoutMs);
  }

  async expectAllProductFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.allProduct), timeoutMs);
  }

  async expectAllProductCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.allProduct), count, timeoutMs);
  }

  async longPressAllPriority(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.allPriority));
  }

  async expectAllPriorityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.allPriority), value, timeoutMs);
  }

  async expectAllPriorityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.allPriority), timeoutMs);
  }

  async expectAllPriorityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.allPriority), timeoutMs);
  }

  async expectAllPriorityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.allPriority), timeoutMs);
  }

  async expectAllPriorityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.allPriority), count, timeoutMs);
  }

  async clickCaseNo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.caseNo));
  }

  async doubleClickCaseNo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.caseNo));
  }

  async longPressCaseNo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.caseNo));
  }

  async expectCaseNoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.caseNo), value, timeoutMs);
  }

  async expectCaseNoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.caseNo), timeoutMs);
  }

  async expectCaseNoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.caseNo), timeoutMs);
  }

  async expectCaseNoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.caseNo), timeoutMs);
  }

  async expectCaseNoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.caseNo), timeoutMs);
  }

  async expectCaseNoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.caseNo), timeoutMs);
  }

  async expectCaseNoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.caseNo), count, timeoutMs);
  }

  async clickSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.summary));
  }

  async doubleClickSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.summary));
  }

  async longPressSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.summary));
  }

  async expectSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.summary), value, timeoutMs);
  }

  async expectSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.summary), timeoutMs);
  }

  async expectSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.summary), timeoutMs);
  }

  async expectSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.summary), timeoutMs);
  }

  async expectSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.summary), timeoutMs);
  }

  async expectSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.summary), timeoutMs);
  }

  async expectSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.summary), count, timeoutMs);
  }

  async clickPriority(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.priority));
  }

  async doubleClickPriority(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.priority));
  }

  async longPressPriority(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.priority));
  }

  async expectPriorityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.priority), value, timeoutMs);
  }

  async expectPriorityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.priority), timeoutMs);
  }

  async expectPriorityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.priority), timeoutMs);
  }

  async expectPriorityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.priority), timeoutMs);
  }

  async expectPriorityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.priority), timeoutMs);
  }

  async expectPriorityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.priority), timeoutMs);
  }

  async expectPriorityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.priority), count, timeoutMs);
  }

  async clickStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.status));
  }

  async doubleClickStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.status));
  }

  async longPressStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.status));
  }

  async expectStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.status), value, timeoutMs);
  }

  async expectStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.status), timeoutMs);
  }

  async expectStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.status), timeoutMs);
  }

  async expectStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.status), timeoutMs);
  }

  async expectStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.status), timeoutMs);
  }

  async expectStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.status), timeoutMs);
  }

  async expectStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.status), count, timeoutMs);
  }

  async clickLastModified(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.lastModified));
  }

  async doubleClickLastModified(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.lastModified));
  }

  async longPressLastModified(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.lastModified));
  }

  async expectLastModifiedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.lastModified), value, timeoutMs);
  }

  async expectLastModifiedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.lastModified), timeoutMs);
  }

  async expectLastModifiedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.lastModified), timeoutMs);
  }

  async expectLastModifiedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.lastModified), timeoutMs);
  }

  async expectLastModifiedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.lastModified), timeoutMs);
  }

  async expectLastModifiedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.lastModified), timeoutMs);
  }

  async expectLastModifiedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.lastModified), count, timeoutMs);
  }

  async clickDateOpened(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.dateOpened));
  }

  async doubleClickDateOpened(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.dateOpened));
  }

  async longPressDateOpened(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.dateOpened));
  }

  async expectDateOpenedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.dateOpened), value, timeoutMs);
  }

  async expectDateOpenedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.dateOpened), timeoutMs);
  }

  async expectDateOpenedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.dateOpened), timeoutMs);
  }

  async expectDateOpenedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.dateOpened), timeoutMs);
  }

  async expectDateOpenedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.dateOpened), timeoutMs);
  }

  async expectDateOpenedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.dateOpened), timeoutMs);
  }

  async expectDateOpenedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.dateOpened), count, timeoutMs);
  }

  async longPressA(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.a));
  }

  async expectAValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.a), value, timeoutMs);
  }

  async expectAEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.a), timeoutMs);
  }

  async expectADisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.a), timeoutMs);
  }

  async expectAChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.a), timeoutMs);
  }

  async expectAUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.a), timeoutMs);
  }

  async expectAFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.a), timeoutMs);
  }

  async expectACount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.a), count, timeoutMs);
  }

  async longPressALink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.aLink));
  }

  async expectALinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.aLink), value, timeoutMs);
  }

  async expectALinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.aLink), timeoutMs);
  }

  async expectALinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.aLink), timeoutMs);
  }

  async expectALinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.aLink), timeoutMs);
  }

  async expectALinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.aLink), timeoutMs);
  }

  async expectALinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.aLink), timeoutMs);
  }

  async expectALinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.aLink), count, timeoutMs);
  }

  async longPressALink2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.aLink2));
  }

  async expectALink2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.aLink2), value, timeoutMs);
  }

  async expectALink2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.aLink2), timeoutMs);
  }

  async expectALink2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.aLink2), timeoutMs);
  }

  async expectALink2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.aLink2), timeoutMs);
  }

  async expectALink2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.aLink2), timeoutMs);
  }

  async expectALink2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.aLink2), timeoutMs);
  }

  async expectALink2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.aLink2), count, timeoutMs);
  }

  async longPressALink3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.aLink3));
  }

  async expectALink3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.aLink3), value, timeoutMs);
  }

  async expectALink3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.aLink3), timeoutMs);
  }

  async expectALink3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.aLink3), timeoutMs);
  }

  async expectALink3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.aLink3), timeoutMs);
  }

  async expectALink3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.aLink3), timeoutMs);
  }

  async expectALink3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.aLink3), timeoutMs);
  }

  async expectALink3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.aLink3), count, timeoutMs);
  }

  async clickCasesNeedingYourAttention(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.casesNeedingYourAttention));
  }

  async doubleClickCasesNeedingYourAttention(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.casesNeedingYourAttention));
  }

  async longPressCasesNeedingYourAttention(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.casesNeedingYourAttention));
  }

  async expectCasesNeedingYourAttentionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), value, timeoutMs);
  }

  async expectCasesNeedingYourAttentionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), timeoutMs);
  }

  async expectCasesNeedingYourAttentionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), timeoutMs);
  }

  async expectCasesNeedingYourAttentionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), timeoutMs);
  }

  async expectCasesNeedingYourAttentionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), timeoutMs);
  }

  async expectCasesNeedingYourAttentionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), timeoutMs);
  }

  async expectCasesNeedingYourAttentionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), count, timeoutMs);
  }

  async clickUKGProWfm(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.uKGProWfm));
  }

  async doubleClickUKGProWfm(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.uKGProWfm));
  }

  async longPressUKGProWfm(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.uKGProWfm));
  }

  async expectUKGProWfmValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.uKGProWfm), value, timeoutMs);
  }

  async expectUKGProWfmEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.uKGProWfm), timeoutMs);
  }

  async expectUKGProWfmDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.uKGProWfm), timeoutMs);
  }

  async expectUKGProWfmChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.uKGProWfm), timeoutMs);
  }

  async expectUKGProWfmUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.uKGProWfm), timeoutMs);
  }

  async expectUKGProWfmFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.uKGProWfm), timeoutMs);
  }

  async expectUKGProWfmCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.uKGProWfm), count, timeoutMs);
  }

  async clickElement2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.element2));
  }

  async doubleClickElement2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.element2));
  }

  async longPressElement2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.element2));
  }

  async expectElement2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.element2), value, timeoutMs);
  }

  async expectElement2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.element2), timeoutMs);
  }

  async expectElement2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.element2), timeoutMs);
  }

  async expectElement2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.element2), timeoutMs);
  }

  async expectElement2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.element2), timeoutMs);
  }

  async expectElement2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.element2), timeoutMs);
  }

  async expectElement2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.element2), count, timeoutMs);
  }

  async clickDOpen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.dOpen));
  }

  async doubleClickDOpen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.dOpen));
  }

  async longPressDOpen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.dOpen));
  }

  async expectDOpenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.dOpen), value, timeoutMs);
  }

  async expectDOpenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.dOpen), timeoutMs);
  }

  async expectDOpenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.dOpen), timeoutMs);
  }

  async expectDOpenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.dOpen), timeoutMs);
  }

  async expectDOpenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.dOpen), timeoutMs);
  }

  async expectDOpenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.dOpen), timeoutMs);
  }

  async expectDOpenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.dOpen), count, timeoutMs);
  }

  async clickWFCTimeClock2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.wFCTimeClock2));
  }

  async doubleClickWFCTimeClock2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.wFCTimeClock2));
  }

  async longPressWFCTimeClock2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.wFCTimeClock2));
  }

  async expectWFCTimeClock2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.wFCTimeClock2), value, timeoutMs);
  }

  async expectWFCTimeClock2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.wFCTimeClock2), timeoutMs);
  }

  async expectWFCTimeClock2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.wFCTimeClock2), timeoutMs);
  }

  async expectWFCTimeClock2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.wFCTimeClock2), timeoutMs);
  }

  async expectWFCTimeClock2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.wFCTimeClock2), timeoutMs);
  }

  async expectWFCTimeClock2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.wFCTimeClock2), timeoutMs);
  }

  async expectWFCTimeClock2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.wFCTimeClock2), count, timeoutMs);
  }

  async clickElement3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.element3));
  }

  async doubleClickElement3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.element3));
  }

  async longPressElement3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.element3));
  }

  async expectElement3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.element3), value, timeoutMs);
  }

  async expectElement3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.element3), timeoutMs);
  }

  async expectElement3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.element3), timeoutMs);
  }

  async expectElement3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.element3), timeoutMs);
  }

  async expectElement3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.element3), timeoutMs);
  }

  async expectElement3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.element3), timeoutMs);
  }

  async expectElement3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.element3), count, timeoutMs);
  }

  async clickDOpen2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.dOpen2));
  }

  async doubleClickDOpen2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.dOpen2));
  }

  async longPressDOpen2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.dOpen2));
  }

  async expectDOpen2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.dOpen2), value, timeoutMs);
  }

  async expectDOpen2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.dOpen2), timeoutMs);
  }

  async expectDOpen2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.dOpen2), timeoutMs);
  }

  async expectDOpen2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.dOpen2), timeoutMs);
  }

  async expectDOpen2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.dOpen2), timeoutMs);
  }

  async expectDOpen2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.dOpen2), timeoutMs);
  }

  async expectDOpen2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.dOpen2), count, timeoutMs);
  }

  async clickAutoSchedulerGenerationNo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo));
  }

  async doubleClickAutoSchedulerGenerationNo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo));
  }

  async longPressAutoSchedulerGenerationNo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo));
  }

  async expectAutoSchedulerGenerationNoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), value, timeoutMs);
  }

  async expectAutoSchedulerGenerationNoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), timeoutMs);
  }

  async expectAutoSchedulerGenerationNoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), timeoutMs);
  }

  async expectAutoSchedulerGenerationNoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), timeoutMs);
  }

  async expectAutoSchedulerGenerationNoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), timeoutMs);
  }

  async expectAutoSchedulerGenerationNoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), timeoutMs);
  }

  async expectAutoSchedulerGenerationNoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), count, timeoutMs);
  }

  async clickCaseVolumeLast(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.caseVolumeLast));
  }

  async doubleClickCaseVolumeLast(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.caseVolumeLast));
  }

  async longPressCaseVolumeLast(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.caseVolumeLast));
  }

  async expectCaseVolumeLastValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.caseVolumeLast), value, timeoutMs);
  }

  async expectCaseVolumeLastEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.caseVolumeLast), timeoutMs);
  }

  async expectCaseVolumeLastDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.caseVolumeLast), timeoutMs);
  }

  async expectCaseVolumeLastChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.caseVolumeLast), timeoutMs);
  }

  async expectCaseVolumeLastUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.caseVolumeLast), timeoutMs);
  }

  async expectCaseVolumeLastFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.caseVolumeLast), timeoutMs);
  }

  async expectCaseVolumeLastCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.caseVolumeLast), count, timeoutMs);
  }

  async clickTotalCases(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.totalCases));
  }

  async doubleClickTotalCases(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.totalCases));
  }

  async longPressTotalCases(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.totalCases));
  }

  async expectTotalCasesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.totalCases), value, timeoutMs);
  }

  async expectTotalCasesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.totalCases), timeoutMs);
  }

  async expectTotalCasesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.totalCases), timeoutMs);
  }

  async expectTotalCasesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.totalCases), timeoutMs);
  }

  async expectTotalCasesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.totalCases), timeoutMs);
  }

  async expectTotalCasesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.totalCases), timeoutMs);
  }

  async expectTotalCasesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.totalCases), count, timeoutMs);
  }

  async clickElement4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.element4));
  }

  async doubleClickElement4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.element4));
  }

  async longPressElement4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.element4));
  }

  async expectElement4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.element4), value, timeoutMs);
  }

  async expectElement4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.element4), timeoutMs);
  }

  async expectElement4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.element4), timeoutMs);
  }

  async expectElement4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.element4), timeoutMs);
  }

  async expectElement4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.element4), timeoutMs);
  }

  async expectElement4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.element4), timeoutMs);
  }

  async expectElement4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.element4), count, timeoutMs);
  }

  async clickActive(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.active));
  }

  async doubleClickActive(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.active));
  }

  async longPressActive(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.active));
  }

  async expectActiveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.active), value, timeoutMs);
  }

  async expectActiveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.active), timeoutMs);
  }

  async expectActiveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.active), timeoutMs);
  }

  async expectActiveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.active), timeoutMs);
  }

  async expectActiveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.active), timeoutMs);
  }

  async expectActiveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.active), timeoutMs);
  }

  async expectActiveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.active), count, timeoutMs);
  }

  async clickClosed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.closed));
  }

  async doubleClickClosed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.closed));
  }

  async longPressClosed(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.closed));
  }

  async expectClosedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.closed), value, timeoutMs);
  }

  async expectClosedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.closed), timeoutMs);
  }

  async expectClosedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.closed), timeoutMs);
  }

  async expectClosedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.closed), timeoutMs);
  }

  async expectClosedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.closed), timeoutMs);
  }

  async expectClosedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.closed), timeoutMs);
  }

  async expectClosedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.closed), count, timeoutMs);
  }

  async longPressSendFeedback(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.sendFeedback));
  }

  async expectSendFeedbackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.sendFeedback), value, timeoutMs);
  }

  async expectSendFeedbackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.sendFeedback), count, timeoutMs);
  }

  async clickRechartsMeasurementSpan(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.rechartsMeasurementSpan));
  }

  async doubleClickRechartsMeasurementSpan(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.rechartsMeasurementSpan));
  }

  async longPressRechartsMeasurementSpan(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.rechartsMeasurementSpan));
  }

  async expectRechartsMeasurementSpanValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.rechartsMeasurementSpan), value, timeoutMs);
  }

  async expectRechartsMeasurementSpanEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.rechartsMeasurementSpan), count, timeoutMs);
  }

}
