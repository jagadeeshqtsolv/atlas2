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

export class ImplementationsPage {
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
    atlasInsightsImplementations: { strategy: 'text' as const, value: 'Atlas Insights · Implementations', actionKind: 'text' as const },
    wasThisHelpful: { strategy: 'text' as const, value: 'Was this helpful?', actionKind: 'text' as const },
    helpful: { strategy: 'role' as const, value: 'Helpful', role: 'button', actionKind: 'button' as const },
    notHelpful: { strategy: 'role' as const, value: 'Not helpful', role: 'button', actionKind: 'button' as const },
    input: { strategy: 'placeholder' as const, value: 'How can we help you today', actionKind: 'textbox' as const },
    sendMessage: { strategy: 'role' as const, value: 'Send message', role: 'button', actionKind: 'button' as const },
    askAtlas: { strategy: 'text' as const, value: 'Ask Atlas', actionKind: 'text' as const },
    atRiskProjects: { strategy: 'role' as const, value: 'At-risk projects', role: 'button', actionKind: 'button' as const },
    goLiveTimeline: { strategy: 'role' as const, value: 'Go-live timeline', role: 'button', actionKind: 'button' as const },
    productsInScope: { strategy: 'role' as const, value: 'Products in scope', role: 'button', actionKind: 'button' as const },
    implementationsOverview: { strategy: 'text' as const, value: 'Implementations overview', actionKind: 'text' as const },
    activeProjects: { strategy: 'text' as const, value: 'Active Projects', actionKind: 'text' as const },
    fixedPrice: { strategy: 'text' as const, value: 'Fixed Price', actionKind: 'text' as const },
    onTrack: { strategy: 'text' as const, value: 'On Track', actionKind: 'text' as const },
    element: { strategy: 'text' as const, value: '3/5', actionKind: 'text' as const },
    element2: { strategy: 'text' as const, value: '60%', actionKind: 'text' as const },
    atRisk: { strategy: 'text' as const, value: 'At Risk', actionKind: 'text' as const },
    pR0004503PR0004123: { strategy: 'text' as const, value: 'PR-0004503 · PR-0004123', actionKind: 'text' as const },
    Projects: { strategy: 'text' as const, value: '5 projects', actionKind: 'text' as const },
    searchProjects: { strategy: 'role' as const, value: 'Search projects', role: 'searchbox', actionKind: 'textbox' as const },
    filterByStatus: { strategy: 'role' as const, value: 'Filter by status', role: 'combobox', actionKind: 'combobox' as const },
    productCode: { strategy: 'text' as const, value: 'Product Code', actionKind: 'text' as const },
    productName: { strategy: 'text' as const, value: 'Product Name', actionKind: 'text' as const },
    startDate: { strategy: 'text' as const, value: 'Start Date', actionKind: 'text' as const },
    endDate: { strategy: 'text' as const, value: 'End Date', actionKind: 'text' as const },
    element3: { strategy: 'text' as const, value: '8603925-000', actionKind: 'text' as const },
    uKGReadyHR: { strategy: 'text' as const, value: 'UKG Ready HR', actionKind: 'text' as const },
    apr022026: { strategy: 'text' as const, value: 'Apr 02, 2026', actionKind: 'text' as const },
    oct172026: { strategy: 'text' as const, value: 'Oct 17, 2026', actionKind: 'text' as const },
    element4: { strategy: 'text' as const, value: '8603925-232', actionKind: 'text' as const },
    uKGReadyPerformance: { strategy: 'text' as const, value: 'UKG Ready Performance - Analytics', actionKind: 'text' as const },
    apr0220262: { strategy: 'text' as const, value: 'Apr 02, 2026', actionKind: 'text' as const },
    oct1720262: { strategy: 'text' as const, value: 'Oct 17, 2026', actionKind: 'text' as const },
    element5: { strategy: 'text' as const, value: '8603925-421', actionKind: 'text' as const },
    uKGReadyDimensionsCore: { strategy: 'text' as const, value: 'UKG Ready Dimensions Core', actionKind: 'text' as const },
    apr0220263: { strategy: 'text' as const, value: 'Apr 02, 2026', actionKind: 'text' as const },
    oct1720263: { strategy: 'text' as const, value: 'Oct 17, 2026', actionKind: 'text' as const },
    element6: { strategy: 'text' as const, value: '8603925-424', actionKind: 'text' as const },
    uKGReadyPerformance2: { strategy: 'text' as const, value: 'UKG Ready Performance — Build', actionKind: 'text' as const },
    apr0220264: { strategy: 'text' as const, value: 'Apr 02, 2026', actionKind: 'text' as const },
    oct1720264: { strategy: 'text' as const, value: 'Oct 17, 2026', actionKind: 'text' as const },
    criticalAlerts: { strategy: 'text' as const, value: 'Critical Alerts', actionKind: 'text' as const },
    pR0004503: { strategy: 'text' as const, value: 'PR-0004503', actionKind: 'text' as const },
    atRisk2: { strategy: 'text' as const, value: 'At Risk', actionKind: 'text' as const },
    allianceForChildrenSRights: { strategy: 'text' as const, value: 'Alliance for Children\'s Rights — Ready Fixed Fee', actionKind: 'text' as const },
    pR0004123: { strategy: 'text' as const, value: 'PR-0004123', actionKind: 'text' as const },
    atRisk3: { strategy: 'text' as const, value: 'At Risk', actionKind: 'text' as const },
    americanRenolitReady: { strategy: 'text' as const, value: 'American Renolit — Ready Fixed Fee Implementation', actionKind: 'text' as const },
    implementationSummary: { strategy: 'text' as const, value: 'Implementation Summary', actionKind: 'text' as const },
    totalProjects: { strategy: 'text' as const, value: 'Total Projects', actionKind: 'text' as const },
    onTrack2: { strategy: 'text' as const, value: 'On Track', actionKind: 'text' as const },
    atRisk4: { strategy: 'text' as const, value: 'At Risk', actionKind: 'text' as const },
    sendFeedback: { strategy: 'role' as const, value: 'Send feedback', role: 'button', actionKind: 'button' as const },
    rechartsMeasurementSpan: { strategy: 'css' as const, value: '#recharts_measurement_span', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAcmeCorporation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.acmeCorporation));
  }

  async expectAcmeCorporationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.acmeCorporation), expected, timeoutMs);
  }

  async expectAcmeCorporationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.acmeCorporation), substring, timeoutMs);
  }

  async scrollAcmeCorporationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.acmeCorporation));
  }

  async clickUKGAssist(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGAssist));
  }

  async doubleClickUKGAssist(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGAssist));
  }

  async expectUKGAssistVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.uKGAssist), expected, timeoutMs);
  }

  async expectUKGAssistContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.uKGAssist), substring, timeoutMs);
  }

  async scrollUKGAssistIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGAssist));
  }

  async clickSubscriptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.subscriptions));
  }

  async doubleClickSubscriptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.subscriptions));
  }

  async expectSubscriptionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.subscriptions), expected, timeoutMs);
  }

  async expectSubscriptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.subscriptions), substring, timeoutMs);
  }

  async scrollSubscriptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.subscriptions));
  }

  async clickImplementations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.implementations));
  }

  async doubleClickImplementations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.implementations));
  }

  async expectImplementationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.implementations), timeoutMs);
  }

  async expectImplementationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.implementations), timeoutMs);
  }

  async expectImplementationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.implementations), expected, timeoutMs);
  }

  async expectImplementationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.implementations), substring, timeoutMs);
  }

  async scrollImplementationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.implementations));
  }

  async clickBillings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.billings));
  }

  async doubleClickBillings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.billings));
  }

  async expectBillingsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.billings), timeoutMs);
  }

  async expectBillingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.billings), timeoutMs);
  }

  async expectBillingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.billings), expected, timeoutMs);
  }

  async expectBillingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.billings), substring, timeoutMs);
  }

  async scrollBillingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.billings));
  }

  async clickSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.support));
  }

  async doubleClickSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.support));
  }

  async expectSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.support), timeoutMs);
  }

  async expectSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.support), timeoutMs);
  }

  async expectSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.support), expected, timeoutMs);
  }

  async expectSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.support), substring, timeoutMs);
  }

  async scrollSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.support));
  }

  async clickAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.adoption));
  }

  async doubleClickAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.adoption));
  }

  async expectAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.adoption), timeoutMs);
  }

  async expectAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.adoption), timeoutMs);
  }

  async expectAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.adoption), expected, timeoutMs);
  }

  async expectAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.adoption), substring, timeoutMs);
  }

  async scrollAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.adoption));
  }

  async clickAdmin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.admin));
  }

  async doubleClickAdmin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.admin));
  }

  async expectAdminVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.admin), timeoutMs);
  }

  async expectAdminHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.admin), timeoutMs);
  }

  async expectAdminText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.admin), expected, timeoutMs);
  }

  async expectAdminContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.admin), substring, timeoutMs);
  }

  async scrollAdminIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.admin));
  }

  async clickAccountProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.accountProfile));
  }

  async doubleClickAccountProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.accountProfile));
  }

  async expectAccountProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.accountProfile), expected, timeoutMs);
  }

  async expectAccountProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.accountProfile), substring, timeoutMs);
  }

  async scrollAccountProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.accountProfile));
  }

  async clickEJEmmaJohnsonPortal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.eJEmmaJohnsonPortal));
  }

  async doubleClickEJEmmaJohnsonPortal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.eJEmmaJohnsonPortal), expected, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.eJEmmaJohnsonPortal), substring, timeoutMs);
  }

  async scrollEJEmmaJohnsonPortalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.eJEmmaJohnsonPortal));
  }

  async clickSignOut(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.signOut));
  }

  async doubleClickSignOut(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.signOut));
  }

  async expectSignOutVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.signOut), timeoutMs);
  }

  async expectSignOutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.signOut), timeoutMs);
  }

  async expectSignOutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.signOut), timeoutMs);
  }

  async expectSignOutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.signOut), timeoutMs);
  }

  async expectSignOutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.signOut), expected, timeoutMs);
  }

  async expectSignOutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.signOut), substring, timeoutMs);
  }

  async scrollSignOutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.signOut));
  }

  async clickCollapseSidebar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.collapseSidebar));
  }

  async doubleClickCollapseSidebar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.collapseSidebar));
  }

  async expectCollapseSidebarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.collapseSidebar), expected, timeoutMs);
  }

  async expectCollapseSidebarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.collapseSidebar), substring, timeoutMs);
  }

  async scrollCollapseSidebarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.collapseSidebar));
  }

  async getInnerTextAtlasInsightsImplementations(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.atlasInsightsImplementations));
  }

  async expectAtlasInsightsImplementationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.atlasInsightsImplementations), timeoutMs);
  }

  async expectAtlasInsightsImplementationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.atlasInsightsImplementations), timeoutMs);
  }

  async expectAtlasInsightsImplementationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.atlasInsightsImplementations), expected, timeoutMs);
  }

  async expectAtlasInsightsImplementationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.atlasInsightsImplementations), substring, timeoutMs);
  }

  async scrollAtlasInsightsImplementationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.atlasInsightsImplementations));
  }

  async getInnerTextWasThisHelpful(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.wasThisHelpful));
  }

  async expectWasThisHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.wasThisHelpful), expected, timeoutMs);
  }

  async expectWasThisHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.wasThisHelpful), substring, timeoutMs);
  }

  async scrollWasThisHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.wasThisHelpful));
  }

  async clickHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.helpful));
  }

  async doubleClickHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.helpful));
  }

  async expectHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.helpful), timeoutMs);
  }

  async expectHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.helpful), timeoutMs);
  }

  async expectHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.helpful), timeoutMs);
  }

  async expectHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.helpful), timeoutMs);
  }

  async expectHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.helpful), expected, timeoutMs);
  }

  async expectHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.helpful), substring, timeoutMs);
  }

  async scrollHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.helpful));
  }

  async clickNotHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.notHelpful));
  }

  async doubleClickNotHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.notHelpful));
  }

  async expectNotHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.notHelpful), expected, timeoutMs);
  }

  async expectNotHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.notHelpful), substring, timeoutMs);
  }

  async scrollNotHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.notHelpful));
  }

  async fillInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, ImplementationsPage.L.input), value);
  }

  async clearInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, ImplementationsPage.L.input));
  }

  async typeTextInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, ImplementationsPage.L.input), value);
  }

  async expectInputVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.input), timeoutMs);
  }

  async expectInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.input), timeoutMs);
  }

  async expectInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.input), timeoutMs);
  }

  async expectInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.input), timeoutMs);
  }

  async expectInputValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.input), expected, timeoutMs);
  }

  async expectInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.input), timeoutMs);
  }

  async scrollInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.input));
  }

  async clickSendMessage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.sendMessage));
  }

  async doubleClickSendMessage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.sendMessage));
  }

  async expectSendMessageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.sendMessage), expected, timeoutMs);
  }

  async expectSendMessageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.sendMessage), substring, timeoutMs);
  }

  async scrollSendMessageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.sendMessage));
  }

  async getInnerTextAskAtlas(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.askAtlas));
  }

  async expectAskAtlasVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.askAtlas), expected, timeoutMs);
  }

  async expectAskAtlasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.askAtlas), substring, timeoutMs);
  }

  async scrollAskAtlasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.askAtlas));
  }

  async clickAtRiskProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.atRiskProjects));
  }

  async doubleClickAtRiskProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.atRiskProjects));
  }

  async expectAtRiskProjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.atRiskProjects), timeoutMs);
  }

  async expectAtRiskProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.atRiskProjects), timeoutMs);
  }

  async expectAtRiskProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.atRiskProjects), timeoutMs);
  }

  async expectAtRiskProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.atRiskProjects), timeoutMs);
  }

  async expectAtRiskProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.atRiskProjects), expected, timeoutMs);
  }

  async expectAtRiskProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.atRiskProjects), substring, timeoutMs);
  }

  async scrollAtRiskProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.atRiskProjects));
  }

  async clickGoLiveTimeline(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.goLiveTimeline));
  }

  async doubleClickGoLiveTimeline(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.goLiveTimeline));
  }

  async expectGoLiveTimelineVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.goLiveTimeline), timeoutMs);
  }

  async expectGoLiveTimelineHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.goLiveTimeline), timeoutMs);
  }

  async expectGoLiveTimelineEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.goLiveTimeline), timeoutMs);
  }

  async expectGoLiveTimelineDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.goLiveTimeline), timeoutMs);
  }

  async expectGoLiveTimelineText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.goLiveTimeline), expected, timeoutMs);
  }

  async expectGoLiveTimelineContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.goLiveTimeline), substring, timeoutMs);
  }

  async scrollGoLiveTimelineIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.goLiveTimeline));
  }

  async clickProductsInScope(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.productsInScope));
  }

  async doubleClickProductsInScope(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.productsInScope));
  }

  async expectProductsInScopeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.productsInScope), timeoutMs);
  }

  async expectProductsInScopeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.productsInScope), timeoutMs);
  }

  async expectProductsInScopeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.productsInScope), timeoutMs);
  }

  async expectProductsInScopeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.productsInScope), timeoutMs);
  }

  async expectProductsInScopeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.productsInScope), expected, timeoutMs);
  }

  async expectProductsInScopeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.productsInScope), substring, timeoutMs);
  }

  async scrollProductsInScopeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.productsInScope));
  }

  async getInnerTextImplementationsOverview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.implementationsOverview));
  }

  async expectImplementationsOverviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.implementationsOverview), timeoutMs);
  }

  async expectImplementationsOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.implementationsOverview), timeoutMs);
  }

  async expectImplementationsOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.implementationsOverview), expected, timeoutMs);
  }

  async expectImplementationsOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.implementationsOverview), substring, timeoutMs);
  }

  async scrollImplementationsOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.implementationsOverview));
  }

  async getInnerTextActiveProjects(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.activeProjects));
  }

  async expectActiveProjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.activeProjects), timeoutMs);
  }

  async expectActiveProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.activeProjects), timeoutMs);
  }

  async expectActiveProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.activeProjects), expected, timeoutMs);
  }

  async expectActiveProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.activeProjects), substring, timeoutMs);
  }

  async scrollActiveProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.activeProjects));
  }

  async getInnerTextFixedPrice(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.fixedPrice));
  }

  async expectFixedPriceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.fixedPrice), timeoutMs);
  }

  async expectFixedPriceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.fixedPrice), timeoutMs);
  }

  async expectFixedPriceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.fixedPrice), expected, timeoutMs);
  }

  async expectFixedPriceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.fixedPrice), substring, timeoutMs);
  }

  async scrollFixedPriceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.fixedPrice));
  }

  async getInnerTextOnTrack(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.onTrack));
  }

  async expectOnTrackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.onTrack), timeoutMs);
  }

  async expectOnTrackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.onTrack), timeoutMs);
  }

  async expectOnTrackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.onTrack), expected, timeoutMs);
  }

  async expectOnTrackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.onTrack), substring, timeoutMs);
  }

  async scrollOnTrackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.onTrack));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.element));
  }

  async getInnerTextElement2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.element2));
  }

  async expectElement2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.element2), timeoutMs);
  }

  async expectElement2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.element2), timeoutMs);
  }

  async expectElement2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.element2), expected, timeoutMs);
  }

  async expectElement2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.element2), substring, timeoutMs);
  }

  async scrollElement2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.element2));
  }

  async getInnerTextAtRisk(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk));
  }

  async expectAtRiskVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.atRisk), timeoutMs);
  }

  async expectAtRiskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.atRisk), timeoutMs);
  }

  async expectAtRiskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.atRisk), expected, timeoutMs);
  }

  async expectAtRiskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.atRisk), substring, timeoutMs);
  }

  async scrollAtRiskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk));
  }

  async getInnerTextPR0004503PR0004123(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.pR0004503PR0004123));
  }

  async expectPR0004503PR0004123Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.pR0004503PR0004123), timeoutMs);
  }

  async expectPR0004503PR0004123Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.pR0004503PR0004123), timeoutMs);
  }

  async expectPR0004503PR0004123Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.pR0004503PR0004123), expected, timeoutMs);
  }

  async expectPR0004503PR0004123ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.pR0004503PR0004123), substring, timeoutMs);
  }

  async scrollPR0004503PR0004123IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.pR0004503PR0004123));
  }

  async getInnerTextProjects(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.Projects));
  }

  async expectProjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.Projects), timeoutMs);
  }

  async expectProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.Projects), timeoutMs);
  }

  async expectProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.Projects), expected, timeoutMs);
  }

  async expectProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.Projects), substring, timeoutMs);
  }

  async scrollProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.Projects));
  }

  async fillSearchProjects(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, ImplementationsPage.L.searchProjects), value);
  }

  async clearSearchProjects(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, ImplementationsPage.L.searchProjects));
  }

  async typeTextSearchProjects(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, ImplementationsPage.L.searchProjects), value);
  }

  async expectSearchProjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.searchProjects), timeoutMs);
  }

  async expectSearchProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.searchProjects), timeoutMs);
  }

  async expectSearchProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.searchProjects), timeoutMs);
  }

  async expectSearchProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.searchProjects), timeoutMs);
  }

  async expectSearchProjectsValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.searchProjects), expected, timeoutMs);
  }

  async expectSearchProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.searchProjects), timeoutMs);
  }

  async scrollSearchProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.searchProjects));
  }

  async selectFilterByStatus(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, ImplementationsPage.L.filterByStatus), value);
  }

  async expectFilterByStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.filterByStatus), timeoutMs);
  }

  async expectFilterByStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.filterByStatus), timeoutMs);
  }

  async expectFilterByStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.filterByStatus), timeoutMs);
  }

  async expectFilterByStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.filterByStatus), timeoutMs);
  }

  async expectFilterByStatusValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.filterByStatus), expected, timeoutMs);
  }

  async expectFilterByStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.filterByStatus), timeoutMs);
  }

  async scrollFilterByStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.filterByStatus));
  }

  async getInnerTextProductCode(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.productCode));
  }

  async expectProductCodeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.productCode), timeoutMs);
  }

  async expectProductCodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.productCode), timeoutMs);
  }

  async expectProductCodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.productCode), expected, timeoutMs);
  }

  async expectProductCodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.productCode), substring, timeoutMs);
  }

  async scrollProductCodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.productCode));
  }

  async getInnerTextProductName(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.productName));
  }

  async expectProductNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.productName), timeoutMs);
  }

  async expectProductNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.productName), timeoutMs);
  }

  async expectProductNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.productName), expected, timeoutMs);
  }

  async expectProductNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.productName), substring, timeoutMs);
  }

  async scrollProductNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.productName));
  }

  async getInnerTextStartDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.startDate));
  }

  async expectStartDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.startDate), timeoutMs);
  }

  async expectStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.startDate), timeoutMs);
  }

  async expectStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.startDate), expected, timeoutMs);
  }

  async expectStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.startDate), substring, timeoutMs);
  }

  async scrollStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.startDate));
  }

  async getInnerTextEndDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.endDate));
  }

  async expectEndDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.endDate), timeoutMs);
  }

  async expectEndDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.endDate), timeoutMs);
  }

  async expectEndDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.endDate), expected, timeoutMs);
  }

  async expectEndDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.endDate), substring, timeoutMs);
  }

  async scrollEndDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.endDate));
  }

  async getInnerTextElement3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.element3));
  }

  async expectElement3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.element3), timeoutMs);
  }

  async expectElement3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.element3), timeoutMs);
  }

  async expectElement3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.element3), expected, timeoutMs);
  }

  async expectElement3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.element3), substring, timeoutMs);
  }

  async scrollElement3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.element3));
  }

  async getInnerTextUKGReadyHR(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyHR));
  }

  async expectUKGReadyHRVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyHR), timeoutMs);
  }

  async expectUKGReadyHRHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.uKGReadyHR), timeoutMs);
  }

  async expectUKGReadyHRText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.uKGReadyHR), expected, timeoutMs);
  }

  async expectUKGReadyHRContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.uKGReadyHR), substring, timeoutMs);
  }

  async scrollUKGReadyHRIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyHR));
  }

  async getInnerTextApr022026(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.apr022026));
  }

  async expectApr022026Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.apr022026), timeoutMs);
  }

  async expectApr022026Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.apr022026), timeoutMs);
  }

  async expectApr022026Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.apr022026), expected, timeoutMs);
  }

  async expectApr022026ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.apr022026), substring, timeoutMs);
  }

  async scrollApr022026IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.apr022026));
  }

  async getInnerTextOct172026(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.oct172026));
  }

  async expectOct172026Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.oct172026), timeoutMs);
  }

  async expectOct172026Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.oct172026), timeoutMs);
  }

  async expectOct172026Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.oct172026), expected, timeoutMs);
  }

  async expectOct172026ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.oct172026), substring, timeoutMs);
  }

  async scrollOct172026IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.oct172026));
  }

  async getInnerTextElement4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.element4));
  }

  async expectElement4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.element4), timeoutMs);
  }

  async expectElement4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.element4), timeoutMs);
  }

  async expectElement4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.element4), expected, timeoutMs);
  }

  async expectElement4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.element4), substring, timeoutMs);
  }

  async scrollElement4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.element4));
  }

  async getInnerTextUKGReadyPerformance(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance));
  }

  async expectUKGReadyPerformanceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance), timeoutMs);
  }

  async expectUKGReadyPerformanceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance), timeoutMs);
  }

  async expectUKGReadyPerformanceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance), expected, timeoutMs);
  }

  async expectUKGReadyPerformanceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance), substring, timeoutMs);
  }

  async scrollUKGReadyPerformanceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance));
  }

  async getInnerTextApr0220262(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.apr0220262));
  }

  async expectApr0220262Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.apr0220262), timeoutMs);
  }

  async expectApr0220262Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.apr0220262), timeoutMs);
  }

  async expectApr0220262Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.apr0220262), expected, timeoutMs);
  }

  async expectApr0220262ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.apr0220262), substring, timeoutMs);
  }

  async scrollApr0220262IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.apr0220262));
  }

  async getInnerTextOct1720262(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.oct1720262));
  }

  async expectOct1720262Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.oct1720262), timeoutMs);
  }

  async expectOct1720262Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.oct1720262), timeoutMs);
  }

  async expectOct1720262Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.oct1720262), expected, timeoutMs);
  }

  async expectOct1720262ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.oct1720262), substring, timeoutMs);
  }

  async scrollOct1720262IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.oct1720262));
  }

  async getInnerTextElement5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.element5));
  }

  async expectElement5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.element5), timeoutMs);
  }

  async expectElement5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.element5), timeoutMs);
  }

  async expectElement5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.element5), expected, timeoutMs);
  }

  async expectElement5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.element5), substring, timeoutMs);
  }

  async scrollElement5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.element5));
  }

  async getInnerTextUKGReadyDimensionsCore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyDimensionsCore));
  }

  async expectUKGReadyDimensionsCoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyDimensionsCore), timeoutMs);
  }

  async expectUKGReadyDimensionsCoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.uKGReadyDimensionsCore), timeoutMs);
  }

  async expectUKGReadyDimensionsCoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.uKGReadyDimensionsCore), expected, timeoutMs);
  }

  async expectUKGReadyDimensionsCoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.uKGReadyDimensionsCore), substring, timeoutMs);
  }

  async scrollUKGReadyDimensionsCoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyDimensionsCore));
  }

  async getInnerTextApr0220263(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.apr0220263));
  }

  async expectApr0220263Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.apr0220263), timeoutMs);
  }

  async expectApr0220263Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.apr0220263), timeoutMs);
  }

  async expectApr0220263Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.apr0220263), expected, timeoutMs);
  }

  async expectApr0220263ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.apr0220263), substring, timeoutMs);
  }

  async scrollApr0220263IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.apr0220263));
  }

  async getInnerTextOct1720263(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.oct1720263));
  }

  async expectOct1720263Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.oct1720263), timeoutMs);
  }

  async expectOct1720263Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.oct1720263), timeoutMs);
  }

  async expectOct1720263Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.oct1720263), expected, timeoutMs);
  }

  async expectOct1720263ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.oct1720263), substring, timeoutMs);
  }

  async scrollOct1720263IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.oct1720263));
  }

  async getInnerTextElement6(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.element6));
  }

  async expectElement6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.element6), timeoutMs);
  }

  async expectElement6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.element6), timeoutMs);
  }

  async expectElement6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.element6), expected, timeoutMs);
  }

  async expectElement6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.element6), substring, timeoutMs);
  }

  async scrollElement6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.element6));
  }

  async getInnerTextUKGReadyPerformance2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance2));
  }

  async expectUKGReadyPerformance2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance2), timeoutMs);
  }

  async expectUKGReadyPerformance2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance2), timeoutMs);
  }

  async expectUKGReadyPerformance2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance2), expected, timeoutMs);
  }

  async expectUKGReadyPerformance2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance2), substring, timeoutMs);
  }

  async scrollUKGReadyPerformance2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance2));
  }

  async getInnerTextApr0220264(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.apr0220264));
  }

  async expectApr0220264Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.apr0220264), timeoutMs);
  }

  async expectApr0220264Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.apr0220264), timeoutMs);
  }

  async expectApr0220264Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.apr0220264), expected, timeoutMs);
  }

  async expectApr0220264ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.apr0220264), substring, timeoutMs);
  }

  async scrollApr0220264IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.apr0220264));
  }

  async getInnerTextOct1720264(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.oct1720264));
  }

  async expectOct1720264Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.oct1720264), timeoutMs);
  }

  async expectOct1720264Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.oct1720264), timeoutMs);
  }

  async expectOct1720264Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.oct1720264), expected, timeoutMs);
  }

  async expectOct1720264ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.oct1720264), substring, timeoutMs);
  }

  async scrollOct1720264IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.oct1720264));
  }

  async getInnerTextCriticalAlerts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.criticalAlerts));
  }

  async expectCriticalAlertsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.criticalAlerts), timeoutMs);
  }

  async expectCriticalAlertsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.criticalAlerts), timeoutMs);
  }

  async expectCriticalAlertsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.criticalAlerts), expected, timeoutMs);
  }

  async expectCriticalAlertsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.criticalAlerts), substring, timeoutMs);
  }

  async scrollCriticalAlertsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.criticalAlerts));
  }

  async getInnerTextPR0004503(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.pR0004503));
  }

  async expectPR0004503Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.pR0004503), timeoutMs);
  }

  async expectPR0004503Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.pR0004503), timeoutMs);
  }

  async expectPR0004503Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.pR0004503), expected, timeoutMs);
  }

  async expectPR0004503ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.pR0004503), substring, timeoutMs);
  }

  async scrollPR0004503IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.pR0004503));
  }

  async getInnerTextAtRisk2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk2));
  }

  async expectAtRisk2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.atRisk2), timeoutMs);
  }

  async expectAtRisk2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.atRisk2), timeoutMs);
  }

  async expectAtRisk2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.atRisk2), expected, timeoutMs);
  }

  async expectAtRisk2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.atRisk2), substring, timeoutMs);
  }

  async scrollAtRisk2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk2));
  }

  async getInnerTextAllianceForChildrenSRights(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.allianceForChildrenSRights));
  }

  async expectAllianceForChildrenSRightsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.allianceForChildrenSRights), timeoutMs);
  }

  async expectAllianceForChildrenSRightsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.allianceForChildrenSRights), timeoutMs);
  }

  async expectAllianceForChildrenSRightsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.allianceForChildrenSRights), expected, timeoutMs);
  }

  async expectAllianceForChildrenSRightsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.allianceForChildrenSRights), substring, timeoutMs);
  }

  async scrollAllianceForChildrenSRightsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.allianceForChildrenSRights));
  }

  async getInnerTextPR0004123(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.pR0004123));
  }

  async expectPR0004123Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.pR0004123), timeoutMs);
  }

  async expectPR0004123Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.pR0004123), timeoutMs);
  }

  async expectPR0004123Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.pR0004123), expected, timeoutMs);
  }

  async expectPR0004123ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.pR0004123), substring, timeoutMs);
  }

  async scrollPR0004123IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.pR0004123));
  }

  async getInnerTextAtRisk3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk3));
  }

  async expectAtRisk3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.atRisk3), timeoutMs);
  }

  async expectAtRisk3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.atRisk3), timeoutMs);
  }

  async expectAtRisk3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.atRisk3), expected, timeoutMs);
  }

  async expectAtRisk3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.atRisk3), substring, timeoutMs);
  }

  async scrollAtRisk3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk3));
  }

  async getInnerTextAmericanRenolitReady(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.americanRenolitReady));
  }

  async expectAmericanRenolitReadyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.americanRenolitReady), timeoutMs);
  }

  async expectAmericanRenolitReadyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.americanRenolitReady), timeoutMs);
  }

  async expectAmericanRenolitReadyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.americanRenolitReady), expected, timeoutMs);
  }

  async expectAmericanRenolitReadyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.americanRenolitReady), substring, timeoutMs);
  }

  async scrollAmericanRenolitReadyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.americanRenolitReady));
  }

  async getInnerTextImplementationSummary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.implementationSummary));
  }

  async expectImplementationSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.implementationSummary), timeoutMs);
  }

  async expectImplementationSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.implementationSummary), timeoutMs);
  }

  async expectImplementationSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.implementationSummary), expected, timeoutMs);
  }

  async expectImplementationSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.implementationSummary), substring, timeoutMs);
  }

  async scrollImplementationSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.implementationSummary));
  }

  async getInnerTextTotalProjects(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.totalProjects));
  }

  async expectTotalProjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.totalProjects), timeoutMs);
  }

  async expectTotalProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.totalProjects), timeoutMs);
  }

  async expectTotalProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.totalProjects), expected, timeoutMs);
  }

  async expectTotalProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.totalProjects), substring, timeoutMs);
  }

  async scrollTotalProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.totalProjects));
  }

  async getInnerTextOnTrack2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.onTrack2));
  }

  async expectOnTrack2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.onTrack2), timeoutMs);
  }

  async expectOnTrack2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.onTrack2), timeoutMs);
  }

  async expectOnTrack2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.onTrack2), expected, timeoutMs);
  }

  async expectOnTrack2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.onTrack2), substring, timeoutMs);
  }

  async scrollOnTrack2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.onTrack2));
  }

  async getInnerTextAtRisk4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk4));
  }

  async expectAtRisk4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.atRisk4), timeoutMs);
  }

  async expectAtRisk4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.atRisk4), timeoutMs);
  }

  async expectAtRisk4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.atRisk4), expected, timeoutMs);
  }

  async expectAtRisk4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.atRisk4), substring, timeoutMs);
  }

  async scrollAtRisk4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk4));
  }

  async clickSendFeedback(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.sendFeedback));
  }

  async doubleClickSendFeedback(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.sendFeedback));
  }

  async expectSendFeedbackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.sendFeedback), expected, timeoutMs);
  }

  async expectSendFeedbackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.sendFeedback), substring, timeoutMs);
  }

  async scrollSendFeedbackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.sendFeedback));
  }

  async getInnerTextRechartsMeasurementSpan(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ImplementationsPage.L.rechartsMeasurementSpan));
  }

  async expectRechartsMeasurementSpanVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ImplementationsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ImplementationsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.rechartsMeasurementSpan), expected, timeoutMs);
  }

  async expectRechartsMeasurementSpanContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.rechartsMeasurementSpan), substring, timeoutMs);
  }

  async scrollRechartsMeasurementSpanIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ImplementationsPage.L.rechartsMeasurementSpan));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async clickAcmeCorporation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.acmeCorporation));
  }

  async doubleClickAcmeCorporation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.acmeCorporation));
  }

  async longPressAcmeCorporation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.acmeCorporation));
  }

  async expectAcmeCorporationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.acmeCorporation), value, timeoutMs);
  }

  async expectAcmeCorporationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.acmeCorporation), count, timeoutMs);
  }

  async longPressUKGAssist(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGAssist));
  }

  async expectUKGAssistValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.uKGAssist), value, timeoutMs);
  }

  async expectUKGAssistEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.uKGAssist), count, timeoutMs);
  }

  async longPressSubscriptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.subscriptions));
  }

  async expectSubscriptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.subscriptions), value, timeoutMs);
  }

  async expectSubscriptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.subscriptions), count, timeoutMs);
  }

  async longPressImplementations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.implementations));
  }

  async expectImplementationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.implementations), value, timeoutMs);
  }

  async expectImplementationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.implementations), timeoutMs);
  }

  async expectImplementationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.implementations), timeoutMs);
  }

  async expectImplementationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.implementations), timeoutMs);
  }

  async expectImplementationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.implementations), timeoutMs);
  }

  async expectImplementationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.implementations), timeoutMs);
  }

  async expectImplementationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.implementations), count, timeoutMs);
  }

  async longPressBillings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.billings));
  }

  async expectBillingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.billings), value, timeoutMs);
  }

  async expectBillingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.billings), timeoutMs);
  }

  async expectBillingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.billings), timeoutMs);
  }

  async expectBillingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.billings), timeoutMs);
  }

  async expectBillingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.billings), timeoutMs);
  }

  async expectBillingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.billings), timeoutMs);
  }

  async expectBillingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.billings), count, timeoutMs);
  }

  async longPressSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.support));
  }

  async expectSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.support), value, timeoutMs);
  }

  async expectSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.support), timeoutMs);
  }

  async expectSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.support), timeoutMs);
  }

  async expectSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.support), timeoutMs);
  }

  async expectSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.support), timeoutMs);
  }

  async expectSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.support), timeoutMs);
  }

  async expectSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.support), count, timeoutMs);
  }

  async longPressAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.adoption));
  }

  async expectAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.adoption), value, timeoutMs);
  }

  async expectAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.adoption), timeoutMs);
  }

  async expectAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.adoption), timeoutMs);
  }

  async expectAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.adoption), timeoutMs);
  }

  async expectAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.adoption), timeoutMs);
  }

  async expectAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.adoption), timeoutMs);
  }

  async expectAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.adoption), count, timeoutMs);
  }

  async longPressAdmin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.admin));
  }

  async expectAdminValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.admin), value, timeoutMs);
  }

  async expectAdminEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.admin), timeoutMs);
  }

  async expectAdminDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.admin), timeoutMs);
  }

  async expectAdminChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.admin), timeoutMs);
  }

  async expectAdminUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.admin), timeoutMs);
  }

  async expectAdminFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.admin), timeoutMs);
  }

  async expectAdminCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.admin), count, timeoutMs);
  }

  async longPressAccountProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.accountProfile));
  }

  async expectAccountProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.accountProfile), value, timeoutMs);
  }

  async expectAccountProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.accountProfile), count, timeoutMs);
  }

  async longPressEJEmmaJohnsonPortal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.eJEmmaJohnsonPortal), value, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.eJEmmaJohnsonPortal), count, timeoutMs);
  }

  async longPressSignOut(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.signOut));
  }

  async expectSignOutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.signOut), value, timeoutMs);
  }

  async expectSignOutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.signOut), timeoutMs);
  }

  async expectSignOutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.signOut), timeoutMs);
  }

  async expectSignOutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.signOut), timeoutMs);
  }

  async expectSignOutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.signOut), count, timeoutMs);
  }

  async longPressCollapseSidebar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.collapseSidebar));
  }

  async expectCollapseSidebarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.collapseSidebar), value, timeoutMs);
  }

  async expectCollapseSidebarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.collapseSidebar), count, timeoutMs);
  }

  async clickAtlasInsightsImplementations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.atlasInsightsImplementations));
  }

  async doubleClickAtlasInsightsImplementations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.atlasInsightsImplementations));
  }

  async longPressAtlasInsightsImplementations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.atlasInsightsImplementations));
  }

  async expectAtlasInsightsImplementationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.atlasInsightsImplementations), value, timeoutMs);
  }

  async expectAtlasInsightsImplementationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.atlasInsightsImplementations), timeoutMs);
  }

  async expectAtlasInsightsImplementationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.atlasInsightsImplementations), timeoutMs);
  }

  async expectAtlasInsightsImplementationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.atlasInsightsImplementations), timeoutMs);
  }

  async expectAtlasInsightsImplementationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.atlasInsightsImplementations), timeoutMs);
  }

  async expectAtlasInsightsImplementationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.atlasInsightsImplementations), timeoutMs);
  }

  async expectAtlasInsightsImplementationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.atlasInsightsImplementations), count, timeoutMs);
  }

  async clickWasThisHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.wasThisHelpful));
  }

  async doubleClickWasThisHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.wasThisHelpful));
  }

  async longPressWasThisHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.wasThisHelpful));
  }

  async expectWasThisHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.wasThisHelpful), value, timeoutMs);
  }

  async expectWasThisHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.wasThisHelpful), count, timeoutMs);
  }

  async longPressHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.helpful));
  }

  async expectHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.helpful), value, timeoutMs);
  }

  async expectHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.helpful), timeoutMs);
  }

  async expectHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.helpful), timeoutMs);
  }

  async expectHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.helpful), timeoutMs);
  }

  async expectHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.helpful), count, timeoutMs);
  }

  async longPressNotHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.notHelpful));
  }

  async expectNotHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.notHelpful), value, timeoutMs);
  }

  async expectNotHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.notHelpful), count, timeoutMs);
  }

  async expectInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.input), expected, timeoutMs);
  }

  async expectInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.input), substring, timeoutMs);
  }

  async expectInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.input), timeoutMs);
  }

  async expectInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.input), timeoutMs);
  }

  async expectInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.input), count, timeoutMs);
  }

  async longPressSendMessage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.sendMessage));
  }

  async expectSendMessageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.sendMessage), value, timeoutMs);
  }

  async expectSendMessageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.sendMessage), count, timeoutMs);
  }

  async clickAskAtlas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.askAtlas));
  }

  async doubleClickAskAtlas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.askAtlas));
  }

  async longPressAskAtlas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.askAtlas));
  }

  async expectAskAtlasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.askAtlas), value, timeoutMs);
  }

  async expectAskAtlasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.askAtlas), count, timeoutMs);
  }

  async longPressAtRiskProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.atRiskProjects));
  }

  async expectAtRiskProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.atRiskProjects), value, timeoutMs);
  }

  async expectAtRiskProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.atRiskProjects), timeoutMs);
  }

  async expectAtRiskProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.atRiskProjects), timeoutMs);
  }

  async expectAtRiskProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.atRiskProjects), timeoutMs);
  }

  async expectAtRiskProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.atRiskProjects), count, timeoutMs);
  }

  async longPressGoLiveTimeline(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.goLiveTimeline));
  }

  async expectGoLiveTimelineValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.goLiveTimeline), value, timeoutMs);
  }

  async expectGoLiveTimelineChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.goLiveTimeline), timeoutMs);
  }

  async expectGoLiveTimelineUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.goLiveTimeline), timeoutMs);
  }

  async expectGoLiveTimelineFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.goLiveTimeline), timeoutMs);
  }

  async expectGoLiveTimelineCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.goLiveTimeline), count, timeoutMs);
  }

  async longPressProductsInScope(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.productsInScope));
  }

  async expectProductsInScopeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.productsInScope), value, timeoutMs);
  }

  async expectProductsInScopeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.productsInScope), timeoutMs);
  }

  async expectProductsInScopeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.productsInScope), timeoutMs);
  }

  async expectProductsInScopeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.productsInScope), timeoutMs);
  }

  async expectProductsInScopeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.productsInScope), count, timeoutMs);
  }

  async clickImplementationsOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.implementationsOverview));
  }

  async doubleClickImplementationsOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.implementationsOverview));
  }

  async longPressImplementationsOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.implementationsOverview));
  }

  async expectImplementationsOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.implementationsOverview), value, timeoutMs);
  }

  async expectImplementationsOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.implementationsOverview), timeoutMs);
  }

  async expectImplementationsOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.implementationsOverview), timeoutMs);
  }

  async expectImplementationsOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.implementationsOverview), timeoutMs);
  }

  async expectImplementationsOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.implementationsOverview), timeoutMs);
  }

  async expectImplementationsOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.implementationsOverview), timeoutMs);
  }

  async expectImplementationsOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.implementationsOverview), count, timeoutMs);
  }

  async clickActiveProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.activeProjects));
  }

  async doubleClickActiveProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.activeProjects));
  }

  async longPressActiveProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.activeProjects));
  }

  async expectActiveProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.activeProjects), value, timeoutMs);
  }

  async expectActiveProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.activeProjects), timeoutMs);
  }

  async expectActiveProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.activeProjects), timeoutMs);
  }

  async expectActiveProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.activeProjects), timeoutMs);
  }

  async expectActiveProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.activeProjects), timeoutMs);
  }

  async expectActiveProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.activeProjects), timeoutMs);
  }

  async expectActiveProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.activeProjects), count, timeoutMs);
  }

  async clickFixedPrice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.fixedPrice));
  }

  async doubleClickFixedPrice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.fixedPrice));
  }

  async longPressFixedPrice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.fixedPrice));
  }

  async expectFixedPriceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.fixedPrice), value, timeoutMs);
  }

  async expectFixedPriceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.fixedPrice), timeoutMs);
  }

  async expectFixedPriceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.fixedPrice), timeoutMs);
  }

  async expectFixedPriceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.fixedPrice), timeoutMs);
  }

  async expectFixedPriceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.fixedPrice), timeoutMs);
  }

  async expectFixedPriceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.fixedPrice), timeoutMs);
  }

  async expectFixedPriceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.fixedPrice), count, timeoutMs);
  }

  async clickOnTrack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.onTrack));
  }

  async doubleClickOnTrack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.onTrack));
  }

  async longPressOnTrack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.onTrack));
  }

  async expectOnTrackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.onTrack), value, timeoutMs);
  }

  async expectOnTrackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.onTrack), timeoutMs);
  }

  async expectOnTrackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.onTrack), timeoutMs);
  }

  async expectOnTrackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.onTrack), timeoutMs);
  }

  async expectOnTrackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.onTrack), timeoutMs);
  }

  async expectOnTrackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.onTrack), timeoutMs);
  }

  async expectOnTrackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.onTrack), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.element), count, timeoutMs);
  }

  async clickElement2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.element2));
  }

  async doubleClickElement2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.element2));
  }

  async longPressElement2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.element2));
  }

  async expectElement2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.element2), value, timeoutMs);
  }

  async expectElement2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.element2), timeoutMs);
  }

  async expectElement2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.element2), timeoutMs);
  }

  async expectElement2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.element2), timeoutMs);
  }

  async expectElement2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.element2), timeoutMs);
  }

  async expectElement2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.element2), timeoutMs);
  }

  async expectElement2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.element2), count, timeoutMs);
  }

  async clickAtRisk(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk));
  }

  async doubleClickAtRisk(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk));
  }

  async longPressAtRisk(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk));
  }

  async expectAtRiskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.atRisk), value, timeoutMs);
  }

  async expectAtRiskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.atRisk), timeoutMs);
  }

  async expectAtRiskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.atRisk), timeoutMs);
  }

  async expectAtRiskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.atRisk), timeoutMs);
  }

  async expectAtRiskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.atRisk), timeoutMs);
  }

  async expectAtRiskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.atRisk), timeoutMs);
  }

  async expectAtRiskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.atRisk), count, timeoutMs);
  }

  async clickPR0004503PR0004123(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.pR0004503PR0004123));
  }

  async doubleClickPR0004503PR0004123(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.pR0004503PR0004123));
  }

  async longPressPR0004503PR0004123(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.pR0004503PR0004123));
  }

  async expectPR0004503PR0004123Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.pR0004503PR0004123), value, timeoutMs);
  }

  async expectPR0004503PR0004123Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.pR0004503PR0004123), timeoutMs);
  }

  async expectPR0004503PR0004123Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.pR0004503PR0004123), timeoutMs);
  }

  async expectPR0004503PR0004123Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.pR0004503PR0004123), timeoutMs);
  }

  async expectPR0004503PR0004123Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.pR0004503PR0004123), timeoutMs);
  }

  async expectPR0004503PR0004123Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.pR0004503PR0004123), timeoutMs);
  }

  async expectPR0004503PR0004123Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.pR0004503PR0004123), count, timeoutMs);
  }

  async clickProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.Projects));
  }

  async doubleClickProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.Projects));
  }

  async longPressProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.Projects));
  }

  async expectProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.Projects), value, timeoutMs);
  }

  async expectProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.Projects), timeoutMs);
  }

  async expectProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.Projects), timeoutMs);
  }

  async expectProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.Projects), timeoutMs);
  }

  async expectProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.Projects), timeoutMs);
  }

  async expectProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.Projects), timeoutMs);
  }

  async expectProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.Projects), count, timeoutMs);
  }

  async expectSearchProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.searchProjects), expected, timeoutMs);
  }

  async expectSearchProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.searchProjects), substring, timeoutMs);
  }

  async expectSearchProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.searchProjects), timeoutMs);
  }

  async expectSearchProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.searchProjects), timeoutMs);
  }

  async expectSearchProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.searchProjects), count, timeoutMs);
  }

  async expectFilterByStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ImplementationsPage.L.filterByStatus), expected, timeoutMs);
  }

  async expectFilterByStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ImplementationsPage.L.filterByStatus), substring, timeoutMs);
  }

  async expectFilterByStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.filterByStatus), timeoutMs);
  }

  async expectFilterByStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.filterByStatus), timeoutMs);
  }

  async expectFilterByStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.filterByStatus), count, timeoutMs);
  }

  async clickProductCode(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.productCode));
  }

  async doubleClickProductCode(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.productCode));
  }

  async longPressProductCode(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.productCode));
  }

  async expectProductCodeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.productCode), value, timeoutMs);
  }

  async expectProductCodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.productCode), timeoutMs);
  }

  async expectProductCodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.productCode), timeoutMs);
  }

  async expectProductCodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.productCode), timeoutMs);
  }

  async expectProductCodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.productCode), timeoutMs);
  }

  async expectProductCodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.productCode), timeoutMs);
  }

  async expectProductCodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.productCode), count, timeoutMs);
  }

  async clickProductName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.productName));
  }

  async doubleClickProductName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.productName));
  }

  async longPressProductName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.productName));
  }

  async expectProductNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.productName), value, timeoutMs);
  }

  async expectProductNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.productName), timeoutMs);
  }

  async expectProductNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.productName), timeoutMs);
  }

  async expectProductNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.productName), timeoutMs);
  }

  async expectProductNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.productName), timeoutMs);
  }

  async expectProductNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.productName), timeoutMs);
  }

  async expectProductNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.productName), count, timeoutMs);
  }

  async clickStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.startDate));
  }

  async doubleClickStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.startDate));
  }

  async longPressStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.startDate));
  }

  async expectStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.startDate), value, timeoutMs);
  }

  async expectStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.startDate), timeoutMs);
  }

  async expectStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.startDate), timeoutMs);
  }

  async expectStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.startDate), timeoutMs);
  }

  async expectStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.startDate), timeoutMs);
  }

  async expectStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.startDate), timeoutMs);
  }

  async expectStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.startDate), count, timeoutMs);
  }

  async clickEndDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.endDate));
  }

  async doubleClickEndDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.endDate));
  }

  async longPressEndDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.endDate));
  }

  async expectEndDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.endDate), value, timeoutMs);
  }

  async expectEndDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.endDate), timeoutMs);
  }

  async expectEndDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.endDate), timeoutMs);
  }

  async expectEndDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.endDate), timeoutMs);
  }

  async expectEndDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.endDate), timeoutMs);
  }

  async expectEndDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.endDate), timeoutMs);
  }

  async expectEndDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.endDate), count, timeoutMs);
  }

  async clickElement3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.element3));
  }

  async doubleClickElement3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.element3));
  }

  async longPressElement3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.element3));
  }

  async expectElement3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.element3), value, timeoutMs);
  }

  async expectElement3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.element3), timeoutMs);
  }

  async expectElement3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.element3), timeoutMs);
  }

  async expectElement3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.element3), timeoutMs);
  }

  async expectElement3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.element3), timeoutMs);
  }

  async expectElement3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.element3), timeoutMs);
  }

  async expectElement3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.element3), count, timeoutMs);
  }

  async clickUKGReadyHR(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyHR));
  }

  async doubleClickUKGReadyHR(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyHR));
  }

  async longPressUKGReadyHR(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyHR));
  }

  async expectUKGReadyHRValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.uKGReadyHR), value, timeoutMs);
  }

  async expectUKGReadyHREnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.uKGReadyHR), timeoutMs);
  }

  async expectUKGReadyHRDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.uKGReadyHR), timeoutMs);
  }

  async expectUKGReadyHRChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.uKGReadyHR), timeoutMs);
  }

  async expectUKGReadyHRUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.uKGReadyHR), timeoutMs);
  }

  async expectUKGReadyHRFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.uKGReadyHR), timeoutMs);
  }

  async expectUKGReadyHRCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.uKGReadyHR), count, timeoutMs);
  }

  async clickApr022026(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.apr022026));
  }

  async doubleClickApr022026(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.apr022026));
  }

  async longPressApr022026(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.apr022026));
  }

  async expectApr022026Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.apr022026), value, timeoutMs);
  }

  async expectApr022026Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.apr022026), timeoutMs);
  }

  async expectApr022026Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.apr022026), timeoutMs);
  }

  async expectApr022026Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.apr022026), timeoutMs);
  }

  async expectApr022026Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.apr022026), timeoutMs);
  }

  async expectApr022026Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.apr022026), timeoutMs);
  }

  async expectApr022026Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.apr022026), count, timeoutMs);
  }

  async clickOct172026(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.oct172026));
  }

  async doubleClickOct172026(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.oct172026));
  }

  async longPressOct172026(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.oct172026));
  }

  async expectOct172026Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.oct172026), value, timeoutMs);
  }

  async expectOct172026Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.oct172026), timeoutMs);
  }

  async expectOct172026Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.oct172026), timeoutMs);
  }

  async expectOct172026Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.oct172026), timeoutMs);
  }

  async expectOct172026Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.oct172026), timeoutMs);
  }

  async expectOct172026Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.oct172026), timeoutMs);
  }

  async expectOct172026Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.oct172026), count, timeoutMs);
  }

  async clickElement4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.element4));
  }

  async doubleClickElement4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.element4));
  }

  async longPressElement4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.element4));
  }

  async expectElement4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.element4), value, timeoutMs);
  }

  async expectElement4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.element4), timeoutMs);
  }

  async expectElement4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.element4), timeoutMs);
  }

  async expectElement4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.element4), timeoutMs);
  }

  async expectElement4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.element4), timeoutMs);
  }

  async expectElement4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.element4), timeoutMs);
  }

  async expectElement4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.element4), count, timeoutMs);
  }

  async clickUKGReadyPerformance(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance));
  }

  async doubleClickUKGReadyPerformance(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance));
  }

  async longPressUKGReadyPerformance(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance));
  }

  async expectUKGReadyPerformanceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance), value, timeoutMs);
  }

  async expectUKGReadyPerformanceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance), timeoutMs);
  }

  async expectUKGReadyPerformanceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance), timeoutMs);
  }

  async expectUKGReadyPerformanceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance), timeoutMs);
  }

  async expectUKGReadyPerformanceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance), timeoutMs);
  }

  async expectUKGReadyPerformanceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance), timeoutMs);
  }

  async expectUKGReadyPerformanceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance), count, timeoutMs);
  }

  async clickApr0220262(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.apr0220262));
  }

  async doubleClickApr0220262(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.apr0220262));
  }

  async longPressApr0220262(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.apr0220262));
  }

  async expectApr0220262Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.apr0220262), value, timeoutMs);
  }

  async expectApr0220262Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.apr0220262), timeoutMs);
  }

  async expectApr0220262Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.apr0220262), timeoutMs);
  }

  async expectApr0220262Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.apr0220262), timeoutMs);
  }

  async expectApr0220262Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.apr0220262), timeoutMs);
  }

  async expectApr0220262Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.apr0220262), timeoutMs);
  }

  async expectApr0220262Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.apr0220262), count, timeoutMs);
  }

  async clickOct1720262(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.oct1720262));
  }

  async doubleClickOct1720262(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.oct1720262));
  }

  async longPressOct1720262(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.oct1720262));
  }

  async expectOct1720262Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.oct1720262), value, timeoutMs);
  }

  async expectOct1720262Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.oct1720262), timeoutMs);
  }

  async expectOct1720262Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.oct1720262), timeoutMs);
  }

  async expectOct1720262Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.oct1720262), timeoutMs);
  }

  async expectOct1720262Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.oct1720262), timeoutMs);
  }

  async expectOct1720262Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.oct1720262), timeoutMs);
  }

  async expectOct1720262Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.oct1720262), count, timeoutMs);
  }

  async clickElement5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.element5));
  }

  async doubleClickElement5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.element5));
  }

  async longPressElement5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.element5));
  }

  async expectElement5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.element5), value, timeoutMs);
  }

  async expectElement5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.element5), timeoutMs);
  }

  async expectElement5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.element5), timeoutMs);
  }

  async expectElement5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.element5), timeoutMs);
  }

  async expectElement5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.element5), timeoutMs);
  }

  async expectElement5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.element5), timeoutMs);
  }

  async expectElement5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.element5), count, timeoutMs);
  }

  async clickUKGReadyDimensionsCore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyDimensionsCore));
  }

  async doubleClickUKGReadyDimensionsCore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyDimensionsCore));
  }

  async longPressUKGReadyDimensionsCore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyDimensionsCore));
  }

  async expectUKGReadyDimensionsCoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.uKGReadyDimensionsCore), value, timeoutMs);
  }

  async expectUKGReadyDimensionsCoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.uKGReadyDimensionsCore), timeoutMs);
  }

  async expectUKGReadyDimensionsCoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.uKGReadyDimensionsCore), timeoutMs);
  }

  async expectUKGReadyDimensionsCoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.uKGReadyDimensionsCore), timeoutMs);
  }

  async expectUKGReadyDimensionsCoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.uKGReadyDimensionsCore), timeoutMs);
  }

  async expectUKGReadyDimensionsCoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.uKGReadyDimensionsCore), timeoutMs);
  }

  async expectUKGReadyDimensionsCoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.uKGReadyDimensionsCore), count, timeoutMs);
  }

  async clickApr0220263(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.apr0220263));
  }

  async doubleClickApr0220263(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.apr0220263));
  }

  async longPressApr0220263(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.apr0220263));
  }

  async expectApr0220263Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.apr0220263), value, timeoutMs);
  }

  async expectApr0220263Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.apr0220263), timeoutMs);
  }

  async expectApr0220263Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.apr0220263), timeoutMs);
  }

  async expectApr0220263Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.apr0220263), timeoutMs);
  }

  async expectApr0220263Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.apr0220263), timeoutMs);
  }

  async expectApr0220263Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.apr0220263), timeoutMs);
  }

  async expectApr0220263Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.apr0220263), count, timeoutMs);
  }

  async clickOct1720263(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.oct1720263));
  }

  async doubleClickOct1720263(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.oct1720263));
  }

  async longPressOct1720263(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.oct1720263));
  }

  async expectOct1720263Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.oct1720263), value, timeoutMs);
  }

  async expectOct1720263Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.oct1720263), timeoutMs);
  }

  async expectOct1720263Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.oct1720263), timeoutMs);
  }

  async expectOct1720263Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.oct1720263), timeoutMs);
  }

  async expectOct1720263Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.oct1720263), timeoutMs);
  }

  async expectOct1720263Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.oct1720263), timeoutMs);
  }

  async expectOct1720263Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.oct1720263), count, timeoutMs);
  }

  async clickElement6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.element6));
  }

  async doubleClickElement6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.element6));
  }

  async longPressElement6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.element6));
  }

  async expectElement6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.element6), value, timeoutMs);
  }

  async expectElement6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.element6), timeoutMs);
  }

  async expectElement6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.element6), timeoutMs);
  }

  async expectElement6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.element6), timeoutMs);
  }

  async expectElement6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.element6), timeoutMs);
  }

  async expectElement6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.element6), timeoutMs);
  }

  async expectElement6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.element6), count, timeoutMs);
  }

  async clickUKGReadyPerformance2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance2));
  }

  async doubleClickUKGReadyPerformance2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance2));
  }

  async longPressUKGReadyPerformance2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance2));
  }

  async expectUKGReadyPerformance2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance2), value, timeoutMs);
  }

  async expectUKGReadyPerformance2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance2), timeoutMs);
  }

  async expectUKGReadyPerformance2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance2), timeoutMs);
  }

  async expectUKGReadyPerformance2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance2), timeoutMs);
  }

  async expectUKGReadyPerformance2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance2), timeoutMs);
  }

  async expectUKGReadyPerformance2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance2), timeoutMs);
  }

  async expectUKGReadyPerformance2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.uKGReadyPerformance2), count, timeoutMs);
  }

  async clickApr0220264(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.apr0220264));
  }

  async doubleClickApr0220264(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.apr0220264));
  }

  async longPressApr0220264(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.apr0220264));
  }

  async expectApr0220264Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.apr0220264), value, timeoutMs);
  }

  async expectApr0220264Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.apr0220264), timeoutMs);
  }

  async expectApr0220264Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.apr0220264), timeoutMs);
  }

  async expectApr0220264Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.apr0220264), timeoutMs);
  }

  async expectApr0220264Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.apr0220264), timeoutMs);
  }

  async expectApr0220264Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.apr0220264), timeoutMs);
  }

  async expectApr0220264Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.apr0220264), count, timeoutMs);
  }

  async clickOct1720264(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.oct1720264));
  }

  async doubleClickOct1720264(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.oct1720264));
  }

  async longPressOct1720264(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.oct1720264));
  }

  async expectOct1720264Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.oct1720264), value, timeoutMs);
  }

  async expectOct1720264Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.oct1720264), timeoutMs);
  }

  async expectOct1720264Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.oct1720264), timeoutMs);
  }

  async expectOct1720264Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.oct1720264), timeoutMs);
  }

  async expectOct1720264Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.oct1720264), timeoutMs);
  }

  async expectOct1720264Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.oct1720264), timeoutMs);
  }

  async expectOct1720264Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.oct1720264), count, timeoutMs);
  }

  async clickCriticalAlerts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.criticalAlerts));
  }

  async doubleClickCriticalAlerts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.criticalAlerts));
  }

  async longPressCriticalAlerts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.criticalAlerts));
  }

  async expectCriticalAlertsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.criticalAlerts), value, timeoutMs);
  }

  async expectCriticalAlertsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.criticalAlerts), timeoutMs);
  }

  async expectCriticalAlertsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.criticalAlerts), timeoutMs);
  }

  async expectCriticalAlertsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.criticalAlerts), timeoutMs);
  }

  async expectCriticalAlertsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.criticalAlerts), timeoutMs);
  }

  async expectCriticalAlertsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.criticalAlerts), timeoutMs);
  }

  async expectCriticalAlertsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.criticalAlerts), count, timeoutMs);
  }

  async clickPR0004503(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.pR0004503));
  }

  async doubleClickPR0004503(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.pR0004503));
  }

  async longPressPR0004503(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.pR0004503));
  }

  async expectPR0004503Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.pR0004503), value, timeoutMs);
  }

  async expectPR0004503Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.pR0004503), timeoutMs);
  }

  async expectPR0004503Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.pR0004503), timeoutMs);
  }

  async expectPR0004503Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.pR0004503), timeoutMs);
  }

  async expectPR0004503Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.pR0004503), timeoutMs);
  }

  async expectPR0004503Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.pR0004503), timeoutMs);
  }

  async expectPR0004503Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.pR0004503), count, timeoutMs);
  }

  async clickAtRisk2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk2));
  }

  async doubleClickAtRisk2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk2));
  }

  async longPressAtRisk2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk2));
  }

  async expectAtRisk2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.atRisk2), value, timeoutMs);
  }

  async expectAtRisk2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.atRisk2), timeoutMs);
  }

  async expectAtRisk2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.atRisk2), timeoutMs);
  }

  async expectAtRisk2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.atRisk2), timeoutMs);
  }

  async expectAtRisk2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.atRisk2), timeoutMs);
  }

  async expectAtRisk2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.atRisk2), timeoutMs);
  }

  async expectAtRisk2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.atRisk2), count, timeoutMs);
  }

  async clickAllianceForChildrenSRights(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.allianceForChildrenSRights));
  }

  async doubleClickAllianceForChildrenSRights(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.allianceForChildrenSRights));
  }

  async longPressAllianceForChildrenSRights(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.allianceForChildrenSRights));
  }

  async expectAllianceForChildrenSRightsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.allianceForChildrenSRights), value, timeoutMs);
  }

  async expectAllianceForChildrenSRightsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.allianceForChildrenSRights), timeoutMs);
  }

  async expectAllianceForChildrenSRightsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.allianceForChildrenSRights), timeoutMs);
  }

  async expectAllianceForChildrenSRightsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.allianceForChildrenSRights), timeoutMs);
  }

  async expectAllianceForChildrenSRightsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.allianceForChildrenSRights), timeoutMs);
  }

  async expectAllianceForChildrenSRightsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.allianceForChildrenSRights), timeoutMs);
  }

  async expectAllianceForChildrenSRightsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.allianceForChildrenSRights), count, timeoutMs);
  }

  async clickPR0004123(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.pR0004123));
  }

  async doubleClickPR0004123(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.pR0004123));
  }

  async longPressPR0004123(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.pR0004123));
  }

  async expectPR0004123Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.pR0004123), value, timeoutMs);
  }

  async expectPR0004123Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.pR0004123), timeoutMs);
  }

  async expectPR0004123Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.pR0004123), timeoutMs);
  }

  async expectPR0004123Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.pR0004123), timeoutMs);
  }

  async expectPR0004123Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.pR0004123), timeoutMs);
  }

  async expectPR0004123Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.pR0004123), timeoutMs);
  }

  async expectPR0004123Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.pR0004123), count, timeoutMs);
  }

  async clickAtRisk3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk3));
  }

  async doubleClickAtRisk3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk3));
  }

  async longPressAtRisk3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk3));
  }

  async expectAtRisk3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.atRisk3), value, timeoutMs);
  }

  async expectAtRisk3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.atRisk3), timeoutMs);
  }

  async expectAtRisk3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.atRisk3), timeoutMs);
  }

  async expectAtRisk3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.atRisk3), timeoutMs);
  }

  async expectAtRisk3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.atRisk3), timeoutMs);
  }

  async expectAtRisk3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.atRisk3), timeoutMs);
  }

  async expectAtRisk3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.atRisk3), count, timeoutMs);
  }

  async clickAmericanRenolitReady(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.americanRenolitReady));
  }

  async doubleClickAmericanRenolitReady(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.americanRenolitReady));
  }

  async longPressAmericanRenolitReady(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.americanRenolitReady));
  }

  async expectAmericanRenolitReadyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.americanRenolitReady), value, timeoutMs);
  }

  async expectAmericanRenolitReadyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.americanRenolitReady), timeoutMs);
  }

  async expectAmericanRenolitReadyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.americanRenolitReady), timeoutMs);
  }

  async expectAmericanRenolitReadyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.americanRenolitReady), timeoutMs);
  }

  async expectAmericanRenolitReadyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.americanRenolitReady), timeoutMs);
  }

  async expectAmericanRenolitReadyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.americanRenolitReady), timeoutMs);
  }

  async expectAmericanRenolitReadyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.americanRenolitReady), count, timeoutMs);
  }

  async clickImplementationSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.implementationSummary));
  }

  async doubleClickImplementationSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.implementationSummary));
  }

  async longPressImplementationSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.implementationSummary));
  }

  async expectImplementationSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.implementationSummary), value, timeoutMs);
  }

  async expectImplementationSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.implementationSummary), timeoutMs);
  }

  async expectImplementationSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.implementationSummary), timeoutMs);
  }

  async expectImplementationSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.implementationSummary), timeoutMs);
  }

  async expectImplementationSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.implementationSummary), timeoutMs);
  }

  async expectImplementationSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.implementationSummary), timeoutMs);
  }

  async expectImplementationSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.implementationSummary), count, timeoutMs);
  }

  async clickTotalProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.totalProjects));
  }

  async doubleClickTotalProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.totalProjects));
  }

  async longPressTotalProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.totalProjects));
  }

  async expectTotalProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.totalProjects), value, timeoutMs);
  }

  async expectTotalProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.totalProjects), timeoutMs);
  }

  async expectTotalProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.totalProjects), timeoutMs);
  }

  async expectTotalProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.totalProjects), timeoutMs);
  }

  async expectTotalProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.totalProjects), timeoutMs);
  }

  async expectTotalProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.totalProjects), timeoutMs);
  }

  async expectTotalProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.totalProjects), count, timeoutMs);
  }

  async clickOnTrack2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.onTrack2));
  }

  async doubleClickOnTrack2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.onTrack2));
  }

  async longPressOnTrack2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.onTrack2));
  }

  async expectOnTrack2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.onTrack2), value, timeoutMs);
  }

  async expectOnTrack2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.onTrack2), timeoutMs);
  }

  async expectOnTrack2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.onTrack2), timeoutMs);
  }

  async expectOnTrack2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.onTrack2), timeoutMs);
  }

  async expectOnTrack2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.onTrack2), timeoutMs);
  }

  async expectOnTrack2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.onTrack2), timeoutMs);
  }

  async expectOnTrack2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.onTrack2), count, timeoutMs);
  }

  async clickAtRisk4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk4));
  }

  async doubleClickAtRisk4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk4));
  }

  async longPressAtRisk4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.atRisk4));
  }

  async expectAtRisk4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.atRisk4), value, timeoutMs);
  }

  async expectAtRisk4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.atRisk4), timeoutMs);
  }

  async expectAtRisk4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.atRisk4), timeoutMs);
  }

  async expectAtRisk4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.atRisk4), timeoutMs);
  }

  async expectAtRisk4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.atRisk4), timeoutMs);
  }

  async expectAtRisk4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.atRisk4), timeoutMs);
  }

  async expectAtRisk4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.atRisk4), count, timeoutMs);
  }

  async longPressSendFeedback(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.sendFeedback));
  }

  async expectSendFeedbackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.sendFeedback), value, timeoutMs);
  }

  async expectSendFeedbackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.sendFeedback), count, timeoutMs);
  }

  async clickRechartsMeasurementSpan(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ImplementationsPage.L.rechartsMeasurementSpan));
  }

  async doubleClickRechartsMeasurementSpan(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ImplementationsPage.L.rechartsMeasurementSpan));
  }

  async longPressRechartsMeasurementSpan(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ImplementationsPage.L.rechartsMeasurementSpan));
  }

  async expectRechartsMeasurementSpanValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ImplementationsPage.L.rechartsMeasurementSpan), value, timeoutMs);
  }

  async expectRechartsMeasurementSpanEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ImplementationsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ImplementationsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ImplementationsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ImplementationsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ImplementationsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ImplementationsPage.L.rechartsMeasurementSpan), count, timeoutMs);
  }

}
