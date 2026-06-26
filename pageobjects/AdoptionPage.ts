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

export class AdoptionPage {
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
    atlasInsightsAdoption: { strategy: 'text' as const, value: 'Atlas Insights · Adoption', actionKind: 'text' as const },
    wasThisHelpful: { strategy: 'text' as const, value: 'Was this helpful?', actionKind: 'text' as const },
    helpful: { strategy: 'role' as const, value: 'Helpful', role: 'button', actionKind: 'button' as const },
    notHelpful: { strategy: 'role' as const, value: 'Not helpful', role: 'button', actionKind: 'button' as const },
    input: { strategy: 'placeholder' as const, value: 'How can we help you today', actionKind: 'textbox' as const },
    sendMessage: { strategy: 'role' as const, value: 'Send message', role: 'button', actionKind: 'button' as const },
    askAtlas: { strategy: 'text' as const, value: 'Ask Atlas', actionKind: 'text' as const },
    vsUKGBenchmarks: { strategy: 'role' as const, value: 'vs UKG benchmarks', role: 'button', actionKind: 'button' as const },
    perProductAdoption: { strategy: 'role' as const, value: 'Per-product adoption', role: 'button', actionKind: 'button' as const },
    distinctUsersTrend: { strategy: 'role' as const, value: 'Distinct users trend', role: 'button', actionKind: 'button' as const },
    adoptionOpportunities: { strategy: 'role' as const, value: 'Adoption opportunities', role: 'button', actionKind: 'button' as const },
    adoptionOverview: { strategy: 'text' as const, value: 'Adoption overview', actionKind: 'text' as const },
    fY26AccountAdoption: { strategy: 'text' as const, value: 'FY26 Account Adoption', actionKind: 'text' as const },
    element: { strategy: 'text' as const, value: '88%', actionKind: 'text' as const },
    YoY: { strategy: 'text' as const, value: '↑ 25.7% YoY', actionKind: 'text' as const },
    activeProductModules: { strategy: 'text' as const, value: 'Active Product Modules', actionKind: 'text' as const },
    productsActiveInFY26: { strategy: 'text' as const, value: 'Products active in FY26', actionKind: 'text' as const },
    avgMonthlyUsers: { strategy: 'text' as const, value: 'Avg Monthly Users', actionKind: 'text' as const },
    element2: { strategy: 'text' as const, value: '28,450', actionKind: 'text' as const },
    acrossAllProducts: { strategy: 'text' as const, value: 'Across all products · FY26', actionKind: 'text' as const },
    yoYAdoptionGrowth: { strategy: 'text' as const, value: 'YoY Adoption Growth', actionKind: 'text' as const },
    element3: { strategy: 'text' as const, value: '+25.7%', actionKind: 'text' as const },
    uKGAvg257: { strategy: 'text' as const, value: 'UKG avg ↑ 25.7%', actionKind: 'text' as const },
    adoptionMetrics: { strategy: 'role' as const, value: 'Adoption Metrics', role: 'button', actionKind: 'button' as const },
    userEngagement: { strategy: 'role' as const, value: 'User Engagement', role: 'button', actionKind: 'button' as const },
    uKGBenchmarkVsAccount: { strategy: 'text' as const, value: 'UKG Benchmark vs Account Adoption — FY25 & FY26', actionKind: 'text' as const },
    uKGBenchmark: { strategy: 'text' as const, value: 'UKG Benchmark', actionKind: 'text' as const },
    fY25Adoption: { strategy: 'text' as const, value: 'FY25 Adoption', actionKind: 'text' as const },
    fY26Adoption: { strategy: 'text' as const, value: 'FY26 Adoption', actionKind: 'text' as const },
    product: { strategy: 'text' as const, value: 'Product', actionKind: 'text' as const },
    element4: { strategy: 'text' as const, value: '0%', actionKind: 'text' as const },
    element5: { strategy: 'text' as const, value: '25%', actionKind: 'text' as const },
    element6: { strategy: 'text' as const, value: '50%', actionKind: 'text' as const },
    element7: { strategy: 'text' as const, value: '75%', actionKind: 'text' as const },
    element8: { strategy: 'text' as const, value: '100%', actionKind: 'text' as const },
    fY26Adoption2: { strategy: 'text' as const, value: 'FY26 Adoption', actionKind: 'text' as const },
    uKGDimensionsCoreAnalytics: { strategy: 'text' as const, value: 'UKG Dimensions Core Analytics', actionKind: 'text' as const },
    uKGDimensions: { strategy: 'text' as const, value: 'UKG Dimensions', actionKind: 'text' as const },
    element9: { strategy: 'text' as const, value: '60%', actionKind: 'text' as const },
    element10: { strategy: 'text' as const, value: '90%', actionKind: 'text' as const },
    element11: { strategy: 'text' as const, value: '100%', actionKind: 'text' as const },
    element12: { strategy: 'text' as const, value: '100%', actionKind: 'text' as const },
    uKGDimensionsScheduling: { strategy: 'text' as const, value: 'UKG Dimensions Scheduling', actionKind: 'text' as const },
    uKGDimensions2: { strategy: 'text' as const, value: 'UKG Dimensions', actionKind: 'text' as const },
    element13: { strategy: 'text' as const, value: '36%', actionKind: 'text' as const },
    element14: { strategy: 'text' as const, value: '90%', actionKind: 'text' as const },
    element15: { strategy: 'text' as const, value: '20%', actionKind: 'text' as const },
    element16: { strategy: 'text' as const, value: '20%', actionKind: 'text' as const },
    uKGDimensionsCompliance: { strategy: 'text' as const, value: 'UKG Dimensions Compliance', actionKind: 'text' as const },
    uKGDimensions3: { strategy: 'text' as const, value: 'UKG Dimensions', actionKind: 'text' as const },
    element17: { strategy: 'text' as const, value: '77%', actionKind: 'text' as const },
    element18: { strategy: 'text' as const, value: '79%', actionKind: 'text' as const },
    element19: { strategy: 'text' as const, value: '75%', actionKind: 'text' as const },
    element20: { strategy: 'text' as const, value: '75%', actionKind: 'text' as const },
    uKGReadyHR: { strategy: 'text' as const, value: 'UKG Ready HR', actionKind: 'text' as const },
    uKGReady: { strategy: 'text' as const, value: 'UKG Ready', actionKind: 'text' as const },
    element21: { strategy: 'text' as const, value: '60%', actionKind: 'text' as const },
    element22: { strategy: 'text' as const, value: '90%', actionKind: 'text' as const },
    element23: { strategy: 'text' as const, value: '100%', actionKind: 'text' as const },
    element24: { strategy: 'text' as const, value: '100%', actionKind: 'text' as const },
    uKGReadyPayrollBenefits: { strategy: 'text' as const, value: 'UKG Ready Payroll Benefits', actionKind: 'text' as const },
    uKGReady2: { strategy: 'text' as const, value: 'UKG Ready', actionKind: 'text' as const },
    element25: { strategy: 'text' as const, value: '36%', actionKind: 'text' as const },
    element26: { strategy: 'text' as const, value: '90%', actionKind: 'text' as const },
    element27: { strategy: 'text' as const, value: '20%', actionKind: 'text' as const },
    element28: { strategy: 'text' as const, value: '20%', actionKind: 'text' as const },
    uKGReadyTime: { strategy: 'text' as const, value: 'UKG Ready Time', actionKind: 'text' as const },
    uKGReady3: { strategy: 'text' as const, value: 'UKG Ready', actionKind: 'text' as const },
    element29: { strategy: 'text' as const, value: '77%', actionKind: 'text' as const },
    element30: { strategy: 'text' as const, value: '79%', actionKind: 'text' as const },
    element31: { strategy: 'text' as const, value: '75%', actionKind: 'text' as const },
    element32: { strategy: 'text' as const, value: '75%', actionKind: 'text' as const },
    coreProductAdoptionTrend: { strategy: 'text' as const, value: 'Core Product Adoption Trend - Monthly', actionKind: 'text' as const },
    fY25Adoption2: { strategy: 'text' as const, value: 'FY25 Adoption', actionKind: 'text' as const },
    fY26Adoption3: { strategy: 'text' as const, value: 'FY26 Adoption', actionKind: 'text' as const },
    productAdoptionFY25: { strategy: 'text' as const, value: 'Product Adoption — FY25 & FY26 vs UKG Benchmark', actionKind: 'text' as const },
    product2: { strategy: 'text' as const, value: 'Product', actionKind: 'text' as const },
    uKGBenchmark2: { strategy: 'text' as const, value: 'UKG Benchmark', actionKind: 'text' as const },
    fY25Adoption3: { strategy: 'text' as const, value: 'FY25 Adoption', actionKind: 'text' as const },
    fY26Adoption4: { strategy: 'text' as const, value: 'FY26 Adoption', actionKind: 'text' as const },
    licenses: { strategy: 'text' as const, value: 'Licenses', actionKind: 'text' as const },
    avgMonthlyUsers2: { strategy: 'text' as const, value: 'Avg monthly users', actionKind: 'text' as const },
    billedQuantityByMonth: { strategy: 'text' as const, value: 'Billed Quantity by Month', actionKind: 'text' as const },
    minQuantity: { strategy: 'text' as const, value: 'Min Quantity', actionKind: 'text' as const },
    billedQuantity: { strategy: 'text' as const, value: 'Billed Quantity', actionKind: 'text' as const },
    peerComparison: { strategy: 'text' as const, value: 'Peer Comparison', actionKind: 'text' as const },
    overallRanking: { strategy: 'text' as const, value: 'Overall Ranking', actionKind: 'text' as const },
    top20: { strategy: 'text' as const, value: 'Top 20%', actionKind: 'text' as const },
    enterprisePeersIndustry: { strategy: 'text' as const, value: 'Enterprise peers · Industry + Size', actionKind: 'text' as const },
    productsVsPeerAvg: { strategy: 'text' as const, value: 'Products vs Peer Avg', actionKind: 'text' as const },
    top10: { strategy: 'text' as const, value: 'Top 10%', actionKind: 'text' as const },
    uKGDimensionsCoreAnalytics2: { strategy: 'text' as const, value: 'UKG Dimensions Core Analytics', actionKind: 'text' as const },
    Pts: { strategy: 'text' as const, value: '↑ 10% pts', actionKind: 'text' as const },
    uKGDimensionsScheduling2: { strategy: 'text' as const, value: 'UKG Dimensions Scheduling', actionKind: 'text' as const },
    Pts2: { strategy: 'text' as const, value: '↑ 10% pts', actionKind: 'text' as const },
    uKGReadyHR2: { strategy: 'text' as const, value: 'UKG Ready HR', actionKind: 'text' as const },
    Pts3: { strategy: 'text' as const, value: '↑ 10% pts', actionKind: 'text' as const },
    top25: { strategy: 'text' as const, value: 'Top 25%', actionKind: 'text' as const },
    uKGDimensionsCompliance2: { strategy: 'text' as const, value: 'UKG Dimensions Compliance', actionKind: 'text' as const },
    Pts4: { strategy: 'text' as const, value: '↓ 2% pts', actionKind: 'text' as const },
    bottom25: { strategy: 'text' as const, value: 'Bottom 25%', actionKind: 'text' as const },
    uKGReadyTime2: { strategy: 'text' as const, value: 'UKG Ready Time', actionKind: 'text' as const },
    Pts5: { strategy: 'text' as const, value: '↓ 13% pts', actionKind: 'text' as const },
    adoptionSummary: { strategy: 'text' as const, value: 'Adoption Summary', actionKind: 'text' as const },
    fY26Adoption5: { strategy: 'text' as const, value: 'FY26 Adoption', actionKind: 'text' as const },
    element33: { strategy: 'text' as const, value: '88%', actionKind: 'text' as const },
    fY25Adoption4: { strategy: 'text' as const, value: 'FY25 Adoption', actionKind: 'text' as const },
    element34: { strategy: 'text' as const, value: '70%', actionKind: 'text' as const },
    yoYGrowth: { strategy: 'text' as const, value: 'YoY Growth', actionKind: 'text' as const },
    element35: { strategy: 'text' as const, value: '+25.7%', actionKind: 'text' as const },
    activeProducts: { strategy: 'text' as const, value: 'Active Products', actionKind: 'text' as const },
    element36: { strategy: 'text' as const, value: '6/6', actionKind: 'text' as const },
    avgMonthlyUsers3: { strategy: 'text' as const, value: 'Avg Monthly Users', actionKind: 'text' as const },
    element37: { strategy: 'text' as const, value: '28,450', actionKind: 'text' as const },
    topDriver: { strategy: 'text' as const, value: 'Top Driver', actionKind: 'text' as const },
    dimensionCore: { strategy: 'text' as const, value: 'Dimension Core', actionKind: 'text' as const },
    desktopMobile: { strategy: 'text' as const, value: 'Desktop / Mobile', actionKind: 'text' as const },
    element38: { strategy: 'text' as const, value: '68% / 32%', actionKind: 'text' as const },
    billedQty: { strategy: 'text' as const, value: 'Billed Qty', actionKind: 'text' as const },
    element39: { strategy: 'text' as const, value: '32,500', actionKind: 'text' as const },
    minContracted: { strategy: 'text' as const, value: 'Min Contracted', actionKind: 'text' as const },
    element40: { strategy: 'text' as const, value: '30,000', actionKind: 'text' as const },
    sendFeedback: { strategy: 'role' as const, value: 'Send feedback', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAcmeCorporation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.acmeCorporation));
  }

  async expectAcmeCorporationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.acmeCorporation), expected, timeoutMs);
  }

  async expectAcmeCorporationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.acmeCorporation), substring, timeoutMs);
  }

  async scrollAcmeCorporationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.acmeCorporation));
  }

  async clickUKGAssist(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGAssist));
  }

  async doubleClickUKGAssist(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGAssist));
  }

  async expectUKGAssistVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGAssist), expected, timeoutMs);
  }

  async expectUKGAssistContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGAssist), substring, timeoutMs);
  }

  async scrollUKGAssistIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGAssist));
  }

  async clickSubscriptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.subscriptions));
  }

  async doubleClickSubscriptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.subscriptions));
  }

  async expectSubscriptionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.subscriptions), expected, timeoutMs);
  }

  async expectSubscriptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.subscriptions), substring, timeoutMs);
  }

  async scrollSubscriptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.subscriptions));
  }

  async clickImplementations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.implementations));
  }

  async doubleClickImplementations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.implementations));
  }

  async expectImplementationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.implementations), timeoutMs);
  }

  async expectImplementationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.implementations), timeoutMs);
  }

  async expectImplementationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.implementations), expected, timeoutMs);
  }

  async expectImplementationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.implementations), substring, timeoutMs);
  }

  async scrollImplementationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.implementations));
  }

  async clickBillings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.billings));
  }

  async doubleClickBillings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.billings));
  }

  async expectBillingsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.billings), timeoutMs);
  }

  async expectBillingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.billings), timeoutMs);
  }

  async expectBillingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.billings), expected, timeoutMs);
  }

  async expectBillingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.billings), substring, timeoutMs);
  }

  async scrollBillingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.billings));
  }

  async clickSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.support));
  }

  async doubleClickSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.support));
  }

  async expectSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.support), timeoutMs);
  }

  async expectSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.support), timeoutMs);
  }

  async expectSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.support), expected, timeoutMs);
  }

  async expectSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.support), substring, timeoutMs);
  }

  async scrollSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.support));
  }

  async clickAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.adoption));
  }

  async doubleClickAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.adoption));
  }

  async expectAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.adoption), timeoutMs);
  }

  async expectAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.adoption), timeoutMs);
  }

  async expectAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.adoption), expected, timeoutMs);
  }

  async expectAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.adoption), substring, timeoutMs);
  }

  async scrollAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.adoption));
  }

  async clickAdmin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.admin));
  }

  async doubleClickAdmin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.admin));
  }

  async expectAdminVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.admin), timeoutMs);
  }

  async expectAdminHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.admin), timeoutMs);
  }

  async expectAdminText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.admin), expected, timeoutMs);
  }

  async expectAdminContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.admin), substring, timeoutMs);
  }

  async scrollAdminIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.admin));
  }

  async clickAccountProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.accountProfile));
  }

  async doubleClickAccountProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.accountProfile));
  }

  async expectAccountProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.accountProfile), expected, timeoutMs);
  }

  async expectAccountProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.accountProfile), substring, timeoutMs);
  }

  async scrollAccountProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.accountProfile));
  }

  async clickEJEmmaJohnsonPortal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.eJEmmaJohnsonPortal));
  }

  async doubleClickEJEmmaJohnsonPortal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.eJEmmaJohnsonPortal), expected, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.eJEmmaJohnsonPortal), substring, timeoutMs);
  }

  async scrollEJEmmaJohnsonPortalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.eJEmmaJohnsonPortal));
  }

  async clickSignOut(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.signOut));
  }

  async doubleClickSignOut(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.signOut));
  }

  async expectSignOutVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.signOut), timeoutMs);
  }

  async expectSignOutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.signOut), timeoutMs);
  }

  async expectSignOutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.signOut), timeoutMs);
  }

  async expectSignOutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.signOut), timeoutMs);
  }

  async expectSignOutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.signOut), expected, timeoutMs);
  }

  async expectSignOutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.signOut), substring, timeoutMs);
  }

  async scrollSignOutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.signOut));
  }

  async clickCollapseSidebar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.collapseSidebar));
  }

  async doubleClickCollapseSidebar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.collapseSidebar));
  }

  async expectCollapseSidebarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.collapseSidebar), expected, timeoutMs);
  }

  async expectCollapseSidebarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.collapseSidebar), substring, timeoutMs);
  }

  async scrollCollapseSidebarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.collapseSidebar));
  }

  async getInnerTextAtlasInsightsAdoption(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption));
  }

  async expectAtlasInsightsAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), timeoutMs);
  }

  async expectAtlasInsightsAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), timeoutMs);
  }

  async expectAtlasInsightsAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), expected, timeoutMs);
  }

  async expectAtlasInsightsAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), substring, timeoutMs);
  }

  async scrollAtlasInsightsAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption));
  }

  async getInnerTextWasThisHelpful(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.wasThisHelpful));
  }

  async expectWasThisHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.wasThisHelpful), expected, timeoutMs);
  }

  async expectWasThisHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.wasThisHelpful), substring, timeoutMs);
  }

  async scrollWasThisHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.wasThisHelpful));
  }

  async clickHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.helpful));
  }

  async doubleClickHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.helpful));
  }

  async expectHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.helpful), timeoutMs);
  }

  async expectHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.helpful), timeoutMs);
  }

  async expectHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.helpful), timeoutMs);
  }

  async expectHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.helpful), timeoutMs);
  }

  async expectHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.helpful), expected, timeoutMs);
  }

  async expectHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.helpful), substring, timeoutMs);
  }

  async scrollHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.helpful));
  }

  async clickNotHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.notHelpful));
  }

  async doubleClickNotHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.notHelpful));
  }

  async expectNotHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.notHelpful), expected, timeoutMs);
  }

  async expectNotHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.notHelpful), substring, timeoutMs);
  }

  async scrollNotHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.notHelpful));
  }

  async fillInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, AdoptionPage.L.input), value);
  }

  async clearInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, AdoptionPage.L.input));
  }

  async typeTextInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, AdoptionPage.L.input), value);
  }

  async expectInputVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.input), timeoutMs);
  }

  async expectInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.input), timeoutMs);
  }

  async expectInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.input), timeoutMs);
  }

  async expectInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.input), timeoutMs);
  }

  async expectInputValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.input), expected, timeoutMs);
  }

  async expectInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.input), timeoutMs);
  }

  async scrollInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.input));
  }

  async clickSendMessage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.sendMessage));
  }

  async doubleClickSendMessage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.sendMessage));
  }

  async expectSendMessageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.sendMessage), expected, timeoutMs);
  }

  async expectSendMessageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.sendMessage), substring, timeoutMs);
  }

  async scrollSendMessageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.sendMessage));
  }

  async getInnerTextAskAtlas(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.askAtlas));
  }

  async expectAskAtlasVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.askAtlas), expected, timeoutMs);
  }

  async expectAskAtlasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.askAtlas), substring, timeoutMs);
  }

  async scrollAskAtlasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.askAtlas));
  }

  async clickVsUKGBenchmarks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.vsUKGBenchmarks));
  }

  async doubleClickVsUKGBenchmarks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.vsUKGBenchmarks));
  }

  async expectVsUKGBenchmarksVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.vsUKGBenchmarks), timeoutMs);
  }

  async expectVsUKGBenchmarksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.vsUKGBenchmarks), timeoutMs);
  }

  async expectVsUKGBenchmarksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.vsUKGBenchmarks), timeoutMs);
  }

  async expectVsUKGBenchmarksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.vsUKGBenchmarks), timeoutMs);
  }

  async expectVsUKGBenchmarksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.vsUKGBenchmarks), expected, timeoutMs);
  }

  async expectVsUKGBenchmarksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.vsUKGBenchmarks), substring, timeoutMs);
  }

  async scrollVsUKGBenchmarksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.vsUKGBenchmarks));
  }

  async clickPerProductAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.perProductAdoption));
  }

  async doubleClickPerProductAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.perProductAdoption));
  }

  async expectPerProductAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.perProductAdoption), timeoutMs);
  }

  async expectPerProductAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.perProductAdoption), timeoutMs);
  }

  async expectPerProductAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.perProductAdoption), timeoutMs);
  }

  async expectPerProductAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.perProductAdoption), timeoutMs);
  }

  async expectPerProductAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.perProductAdoption), expected, timeoutMs);
  }

  async expectPerProductAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.perProductAdoption), substring, timeoutMs);
  }

  async scrollPerProductAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.perProductAdoption));
  }

  async clickDistinctUsersTrend(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.distinctUsersTrend));
  }

  async doubleClickDistinctUsersTrend(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.distinctUsersTrend));
  }

  async expectDistinctUsersTrendVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), timeoutMs);
  }

  async expectDistinctUsersTrendHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), timeoutMs);
  }

  async expectDistinctUsersTrendEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), timeoutMs);
  }

  async expectDistinctUsersTrendDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), timeoutMs);
  }

  async expectDistinctUsersTrendText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), expected, timeoutMs);
  }

  async expectDistinctUsersTrendContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), substring, timeoutMs);
  }

  async scrollDistinctUsersTrendIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.distinctUsersTrend));
  }

  async clickAdoptionOpportunities(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOpportunities));
  }

  async doubleClickAdoptionOpportunities(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOpportunities));
  }

  async expectAdoptionOpportunitiesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), timeoutMs);
  }

  async expectAdoptionOpportunitiesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), timeoutMs);
  }

  async expectAdoptionOpportunitiesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), timeoutMs);
  }

  async expectAdoptionOpportunitiesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), timeoutMs);
  }

  async expectAdoptionOpportunitiesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), expected, timeoutMs);
  }

  async expectAdoptionOpportunitiesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), substring, timeoutMs);
  }

  async scrollAdoptionOpportunitiesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOpportunities));
  }

  async getInnerTextAdoptionOverview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOverview));
  }

  async expectAdoptionOverviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.adoptionOverview), timeoutMs);
  }

  async expectAdoptionOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.adoptionOverview), timeoutMs);
  }

  async expectAdoptionOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.adoptionOverview), expected, timeoutMs);
  }

  async expectAdoptionOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.adoptionOverview), substring, timeoutMs);
  }

  async scrollAdoptionOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOverview));
  }

  async getInnerTextFY26AccountAdoption(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption));
  }

  async expectFY26AccountAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), timeoutMs);
  }

  async expectFY26AccountAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), timeoutMs);
  }

  async expectFY26AccountAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), expected, timeoutMs);
  }

  async expectFY26AccountAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), substring, timeoutMs);
  }

  async scrollFY26AccountAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element));
  }

  async getInnerTextYoY(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.YoY));
  }

  async expectYoYVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.YoY), timeoutMs);
  }

  async expectYoYHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.YoY), timeoutMs);
  }

  async expectYoYText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.YoY), expected, timeoutMs);
  }

  async expectYoYContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.YoY), substring, timeoutMs);
  }

  async scrollYoYIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.YoY));
  }

  async getInnerTextActiveProductModules(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.activeProductModules));
  }

  async expectActiveProductModulesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.activeProductModules), timeoutMs);
  }

  async expectActiveProductModulesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.activeProductModules), timeoutMs);
  }

  async expectActiveProductModulesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.activeProductModules), expected, timeoutMs);
  }

  async expectActiveProductModulesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.activeProductModules), substring, timeoutMs);
  }

  async scrollActiveProductModulesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.activeProductModules));
  }

  async getInnerTextProductsActiveInFY26(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.productsActiveInFY26));
  }

  async expectProductsActiveInFY26Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), timeoutMs);
  }

  async expectProductsActiveInFY26Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), timeoutMs);
  }

  async expectProductsActiveInFY26Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), expected, timeoutMs);
  }

  async expectProductsActiveInFY26ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), substring, timeoutMs);
  }

  async scrollProductsActiveInFY26IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.productsActiveInFY26));
  }

  async getInnerTextAvgMonthlyUsers(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers));
  }

  async expectAvgMonthlyUsersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), timeoutMs);
  }

  async expectAvgMonthlyUsersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), timeoutMs);
  }

  async expectAvgMonthlyUsersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), expected, timeoutMs);
  }

  async expectAvgMonthlyUsersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), substring, timeoutMs);
  }

  async scrollAvgMonthlyUsersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers));
  }

  async getInnerTextElement2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element2));
  }

  async expectElement2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element2), timeoutMs);
  }

  async expectElement2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element2), timeoutMs);
  }

  async expectElement2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element2), expected, timeoutMs);
  }

  async expectElement2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element2), substring, timeoutMs);
  }

  async scrollElement2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element2));
  }

  async getInnerTextAcrossAllProducts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.acrossAllProducts));
  }

  async expectAcrossAllProductsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.acrossAllProducts), timeoutMs);
  }

  async expectAcrossAllProductsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.acrossAllProducts), timeoutMs);
  }

  async expectAcrossAllProductsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.acrossAllProducts), expected, timeoutMs);
  }

  async expectAcrossAllProductsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.acrossAllProducts), substring, timeoutMs);
  }

  async scrollAcrossAllProductsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.acrossAllProducts));
  }

  async getInnerTextYoYAdoptionGrowth(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth));
  }

  async expectYoYAdoptionGrowthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), timeoutMs);
  }

  async expectYoYAdoptionGrowthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), timeoutMs);
  }

  async expectYoYAdoptionGrowthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), expected, timeoutMs);
  }

  async expectYoYAdoptionGrowthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), substring, timeoutMs);
  }

  async scrollYoYAdoptionGrowthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth));
  }

  async getInnerTextElement3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element3));
  }

  async expectElement3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element3), timeoutMs);
  }

  async expectElement3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element3), timeoutMs);
  }

  async expectElement3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element3), expected, timeoutMs);
  }

  async expectElement3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element3), substring, timeoutMs);
  }

  async scrollElement3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element3));
  }

  async getInnerTextUKGAvg257(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGAvg257));
  }

  async expectUKGAvg257Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGAvg257), timeoutMs);
  }

  async expectUKGAvg257Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGAvg257), timeoutMs);
  }

  async expectUKGAvg257Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGAvg257), expected, timeoutMs);
  }

  async expectUKGAvg257ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGAvg257), substring, timeoutMs);
  }

  async scrollUKGAvg257IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGAvg257));
  }

  async clickAdoptionMetrics(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionMetrics));
  }

  async doubleClickAdoptionMetrics(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionMetrics));
  }

  async expectAdoptionMetricsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.adoptionMetrics), timeoutMs);
  }

  async expectAdoptionMetricsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.adoptionMetrics), timeoutMs);
  }

  async expectAdoptionMetricsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.adoptionMetrics), timeoutMs);
  }

  async expectAdoptionMetricsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.adoptionMetrics), timeoutMs);
  }

  async expectAdoptionMetricsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.adoptionMetrics), expected, timeoutMs);
  }

  async expectAdoptionMetricsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.adoptionMetrics), substring, timeoutMs);
  }

  async scrollAdoptionMetricsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionMetrics));
  }

  async clickUserEngagement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.userEngagement));
  }

  async doubleClickUserEngagement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.userEngagement));
  }

  async expectUserEngagementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.userEngagement), timeoutMs);
  }

  async expectUserEngagementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.userEngagement), timeoutMs);
  }

  async expectUserEngagementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.userEngagement), timeoutMs);
  }

  async expectUserEngagementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.userEngagement), timeoutMs);
  }

  async expectUserEngagementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.userEngagement), expected, timeoutMs);
  }

  async expectUserEngagementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.userEngagement), substring, timeoutMs);
  }

  async scrollUserEngagementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.userEngagement));
  }

  async getInnerTextUKGBenchmarkVsAccount(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmarkVsAccount));
  }

  async expectUKGBenchmarkVsAccountVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmarkVsAccount), timeoutMs);
  }

  async expectUKGBenchmarkVsAccountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGBenchmarkVsAccount), timeoutMs);
  }

  async expectUKGBenchmarkVsAccountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGBenchmarkVsAccount), expected, timeoutMs);
  }

  async expectUKGBenchmarkVsAccountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGBenchmarkVsAccount), substring, timeoutMs);
  }

  async scrollUKGBenchmarkVsAccountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmarkVsAccount));
  }

  async getInnerTextUKGBenchmark(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmark));
  }

  async expectUKGBenchmarkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmark), timeoutMs);
  }

  async expectUKGBenchmarkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGBenchmark), timeoutMs);
  }

  async expectUKGBenchmarkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGBenchmark), expected, timeoutMs);
  }

  async expectUKGBenchmarkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGBenchmark), substring, timeoutMs);
  }

  async scrollUKGBenchmarkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmark));
  }

  async getInnerTextFY25Adoption(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption));
  }

  async expectFY25AdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption), timeoutMs);
  }

  async expectFY25AdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.fY25Adoption), timeoutMs);
  }

  async expectFY25AdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.fY25Adoption), expected, timeoutMs);
  }

  async expectFY25AdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.fY25Adoption), substring, timeoutMs);
  }

  async scrollFY25AdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption));
  }

  async getInnerTextFY26Adoption(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption));
  }

  async expectFY26AdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption), timeoutMs);
  }

  async expectFY26AdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.fY26Adoption), timeoutMs);
  }

  async expectFY26AdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.fY26Adoption), expected, timeoutMs);
  }

  async expectFY26AdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.fY26Adoption), substring, timeoutMs);
  }

  async scrollFY26AdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption));
  }

  async getInnerTextProduct(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.product));
  }

  async expectProductVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.product), timeoutMs);
  }

  async expectProductHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.product), timeoutMs);
  }

  async expectProductText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.product), expected, timeoutMs);
  }

  async expectProductContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.product), substring, timeoutMs);
  }

  async scrollProductIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.product));
  }

  async getInnerTextElement4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element4));
  }

  async expectElement4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element4), timeoutMs);
  }

  async expectElement4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element4), timeoutMs);
  }

  async expectElement4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element4), expected, timeoutMs);
  }

  async expectElement4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element4), substring, timeoutMs);
  }

  async scrollElement4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element4));
  }

  async getInnerTextElement5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element5));
  }

  async expectElement5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element5), timeoutMs);
  }

  async expectElement5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element5), timeoutMs);
  }

  async expectElement5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element5), expected, timeoutMs);
  }

  async expectElement5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element5), substring, timeoutMs);
  }

  async scrollElement5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element5));
  }

  async getInnerTextElement6(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element6));
  }

  async expectElement6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element6), timeoutMs);
  }

  async expectElement6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element6), timeoutMs);
  }

  async expectElement6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element6), expected, timeoutMs);
  }

  async expectElement6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element6), substring, timeoutMs);
  }

  async scrollElement6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element6));
  }

  async getInnerTextElement7(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element7));
  }

  async expectElement7Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element7), timeoutMs);
  }

  async expectElement7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element7), timeoutMs);
  }

  async expectElement7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element7), expected, timeoutMs);
  }

  async expectElement7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element7), substring, timeoutMs);
  }

  async scrollElement7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element7));
  }

  async getInnerTextElement8(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element8));
  }

  async expectElement8Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element8), timeoutMs);
  }

  async expectElement8Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element8), timeoutMs);
  }

  async expectElement8Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element8), expected, timeoutMs);
  }

  async expectElement8ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element8), substring, timeoutMs);
  }

  async scrollElement8IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element8));
  }

  async getInnerTextFY26Adoption2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption2));
  }

  async expectFY26Adoption2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption2), timeoutMs);
  }

  async expectFY26Adoption2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.fY26Adoption2), timeoutMs);
  }

  async expectFY26Adoption2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.fY26Adoption2), expected, timeoutMs);
  }

  async expectFY26Adoption2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.fY26Adoption2), substring, timeoutMs);
  }

  async scrollFY26Adoption2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption2));
  }

  async getInnerTextUKGDimensionsCoreAnalytics(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics));
  }

  async expectUKGDimensionsCoreAnalyticsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics), timeoutMs);
  }

  async expectUKGDimensionsCoreAnalyticsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics), timeoutMs);
  }

  async expectUKGDimensionsCoreAnalyticsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics), expected, timeoutMs);
  }

  async expectUKGDimensionsCoreAnalyticsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics), substring, timeoutMs);
  }

  async scrollUKGDimensionsCoreAnalyticsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics));
  }

  async getInnerTextUKGDimensions(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions));
  }

  async expectUKGDimensionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions), timeoutMs);
  }

  async expectUKGDimensionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGDimensions), timeoutMs);
  }

  async expectUKGDimensionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGDimensions), expected, timeoutMs);
  }

  async expectUKGDimensionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGDimensions), substring, timeoutMs);
  }

  async scrollUKGDimensionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions));
  }

  async getInnerTextElement9(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element9));
  }

  async expectElement9Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element9), timeoutMs);
  }

  async expectElement9Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element9), timeoutMs);
  }

  async expectElement9Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element9), expected, timeoutMs);
  }

  async expectElement9ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element9), substring, timeoutMs);
  }

  async scrollElement9IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element9));
  }

  async getInnerTextElement10(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element10));
  }

  async expectElement10Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element10), timeoutMs);
  }

  async expectElement10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element10), timeoutMs);
  }

  async expectElement10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element10), expected, timeoutMs);
  }

  async expectElement10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element10), substring, timeoutMs);
  }

  async scrollElement10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element10));
  }

  async getInnerTextElement11(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element11));
  }

  async expectElement11Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element11), timeoutMs);
  }

  async expectElement11Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element11), timeoutMs);
  }

  async expectElement11Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element11), expected, timeoutMs);
  }

  async expectElement11ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element11), substring, timeoutMs);
  }

  async scrollElement11IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element11));
  }

  async getInnerTextElement12(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element12));
  }

  async expectElement12Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element12), timeoutMs);
  }

  async expectElement12Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element12), timeoutMs);
  }

  async expectElement12Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element12), expected, timeoutMs);
  }

  async expectElement12ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element12), substring, timeoutMs);
  }

  async scrollElement12IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element12));
  }

  async getInnerTextUKGDimensionsScheduling(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling));
  }

  async expectUKGDimensionsSchedulingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling), timeoutMs);
  }

  async expectUKGDimensionsSchedulingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling), timeoutMs);
  }

  async expectUKGDimensionsSchedulingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling), expected, timeoutMs);
  }

  async expectUKGDimensionsSchedulingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling), substring, timeoutMs);
  }

  async scrollUKGDimensionsSchedulingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling));
  }

  async getInnerTextUKGDimensions2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions2));
  }

  async expectUKGDimensions2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions2), timeoutMs);
  }

  async expectUKGDimensions2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGDimensions2), timeoutMs);
  }

  async expectUKGDimensions2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGDimensions2), expected, timeoutMs);
  }

  async expectUKGDimensions2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGDimensions2), substring, timeoutMs);
  }

  async scrollUKGDimensions2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions2));
  }

  async getInnerTextElement13(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element13));
  }

  async expectElement13Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element13), timeoutMs);
  }

  async expectElement13Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element13), timeoutMs);
  }

  async expectElement13Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element13), expected, timeoutMs);
  }

  async expectElement13ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element13), substring, timeoutMs);
  }

  async scrollElement13IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element13));
  }

  async getInnerTextElement14(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element14));
  }

  async expectElement14Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element14), timeoutMs);
  }

  async expectElement14Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element14), timeoutMs);
  }

  async expectElement14Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element14), expected, timeoutMs);
  }

  async expectElement14ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element14), substring, timeoutMs);
  }

  async scrollElement14IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element14));
  }

  async getInnerTextElement15(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element15));
  }

  async expectElement15Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element15), timeoutMs);
  }

  async expectElement15Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element15), timeoutMs);
  }

  async expectElement15Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element15), expected, timeoutMs);
  }

  async expectElement15ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element15), substring, timeoutMs);
  }

  async scrollElement15IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element15));
  }

  async getInnerTextElement16(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element16));
  }

  async expectElement16Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element16), timeoutMs);
  }

  async expectElement16Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element16), timeoutMs);
  }

  async expectElement16Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element16), expected, timeoutMs);
  }

  async expectElement16ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element16), substring, timeoutMs);
  }

  async scrollElement16IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element16));
  }

  async getInnerTextUKGDimensionsCompliance(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance));
  }

  async expectUKGDimensionsComplianceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance), timeoutMs);
  }

  async expectUKGDimensionsComplianceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance), timeoutMs);
  }

  async expectUKGDimensionsComplianceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance), expected, timeoutMs);
  }

  async expectUKGDimensionsComplianceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance), substring, timeoutMs);
  }

  async scrollUKGDimensionsComplianceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance));
  }

  async getInnerTextUKGDimensions3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions3));
  }

  async expectUKGDimensions3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions3), timeoutMs);
  }

  async expectUKGDimensions3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGDimensions3), timeoutMs);
  }

  async expectUKGDimensions3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGDimensions3), expected, timeoutMs);
  }

  async expectUKGDimensions3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGDimensions3), substring, timeoutMs);
  }

  async scrollUKGDimensions3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions3));
  }

  async getInnerTextElement17(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element17));
  }

  async expectElement17Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element17), timeoutMs);
  }

  async expectElement17Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element17), timeoutMs);
  }

  async expectElement17Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element17), expected, timeoutMs);
  }

  async expectElement17ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element17), substring, timeoutMs);
  }

  async scrollElement17IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element17));
  }

  async getInnerTextElement18(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element18));
  }

  async expectElement18Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element18), timeoutMs);
  }

  async expectElement18Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element18), timeoutMs);
  }

  async expectElement18Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element18), expected, timeoutMs);
  }

  async expectElement18ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element18), substring, timeoutMs);
  }

  async scrollElement18IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element18));
  }

  async getInnerTextElement19(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element19));
  }

  async expectElement19Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element19), timeoutMs);
  }

  async expectElement19Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element19), timeoutMs);
  }

  async expectElement19Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element19), expected, timeoutMs);
  }

  async expectElement19ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element19), substring, timeoutMs);
  }

  async scrollElement19IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element19));
  }

  async getInnerTextElement20(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element20));
  }

  async expectElement20Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element20), timeoutMs);
  }

  async expectElement20Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element20), timeoutMs);
  }

  async expectElement20Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element20), expected, timeoutMs);
  }

  async expectElement20ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element20), substring, timeoutMs);
  }

  async scrollElement20IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element20));
  }

  async getInnerTextUKGReadyHR(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyHR));
  }

  async expectUKGReadyHRVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGReadyHR), timeoutMs);
  }

  async expectUKGReadyHRHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGReadyHR), timeoutMs);
  }

  async expectUKGReadyHRText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGReadyHR), expected, timeoutMs);
  }

  async expectUKGReadyHRContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGReadyHR), substring, timeoutMs);
  }

  async scrollUKGReadyHRIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyHR));
  }

  async getInnerTextUKGReady(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReady));
  }

  async expectUKGReadyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGReady), timeoutMs);
  }

  async expectUKGReadyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGReady), timeoutMs);
  }

  async expectUKGReadyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGReady), expected, timeoutMs);
  }

  async expectUKGReadyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGReady), substring, timeoutMs);
  }

  async scrollUKGReadyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReady));
  }

  async getInnerTextElement21(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element21));
  }

  async expectElement21Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element21), timeoutMs);
  }

  async expectElement21Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element21), timeoutMs);
  }

  async expectElement21Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element21), expected, timeoutMs);
  }

  async expectElement21ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element21), substring, timeoutMs);
  }

  async scrollElement21IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element21));
  }

  async getInnerTextElement22(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element22));
  }

  async expectElement22Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element22), timeoutMs);
  }

  async expectElement22Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element22), timeoutMs);
  }

  async expectElement22Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element22), expected, timeoutMs);
  }

  async expectElement22ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element22), substring, timeoutMs);
  }

  async scrollElement22IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element22));
  }

  async getInnerTextElement23(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element23));
  }

  async expectElement23Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element23), timeoutMs);
  }

  async expectElement23Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element23), timeoutMs);
  }

  async expectElement23Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element23), expected, timeoutMs);
  }

  async expectElement23ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element23), substring, timeoutMs);
  }

  async scrollElement23IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element23));
  }

  async getInnerTextElement24(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element24));
  }

  async expectElement24Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element24), timeoutMs);
  }

  async expectElement24Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element24), timeoutMs);
  }

  async expectElement24Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element24), expected, timeoutMs);
  }

  async expectElement24ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element24), substring, timeoutMs);
  }

  async scrollElement24IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element24));
  }

  async getInnerTextUKGReadyPayrollBenefits(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyPayrollBenefits));
  }

  async expectUKGReadyPayrollBenefitsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGReadyPayrollBenefits), timeoutMs);
  }

  async expectUKGReadyPayrollBenefitsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGReadyPayrollBenefits), timeoutMs);
  }

  async expectUKGReadyPayrollBenefitsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGReadyPayrollBenefits), expected, timeoutMs);
  }

  async expectUKGReadyPayrollBenefitsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGReadyPayrollBenefits), substring, timeoutMs);
  }

  async scrollUKGReadyPayrollBenefitsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyPayrollBenefits));
  }

  async getInnerTextUKGReady2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReady2));
  }

  async expectUKGReady2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGReady2), timeoutMs);
  }

  async expectUKGReady2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGReady2), timeoutMs);
  }

  async expectUKGReady2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGReady2), expected, timeoutMs);
  }

  async expectUKGReady2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGReady2), substring, timeoutMs);
  }

  async scrollUKGReady2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReady2));
  }

  async getInnerTextElement25(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element25));
  }

  async expectElement25Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element25), timeoutMs);
  }

  async expectElement25Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element25), timeoutMs);
  }

  async expectElement25Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element25), expected, timeoutMs);
  }

  async expectElement25ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element25), substring, timeoutMs);
  }

  async scrollElement25IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element25));
  }

  async getInnerTextElement26(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element26));
  }

  async expectElement26Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element26), timeoutMs);
  }

  async expectElement26Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element26), timeoutMs);
  }

  async expectElement26Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element26), expected, timeoutMs);
  }

  async expectElement26ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element26), substring, timeoutMs);
  }

  async scrollElement26IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element26));
  }

  async getInnerTextElement27(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element27));
  }

  async expectElement27Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element27), timeoutMs);
  }

  async expectElement27Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element27), timeoutMs);
  }

  async expectElement27Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element27), expected, timeoutMs);
  }

  async expectElement27ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element27), substring, timeoutMs);
  }

  async scrollElement27IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element27));
  }

  async getInnerTextElement28(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element28));
  }

  async expectElement28Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element28), timeoutMs);
  }

  async expectElement28Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element28), timeoutMs);
  }

  async expectElement28Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element28), expected, timeoutMs);
  }

  async expectElement28ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element28), substring, timeoutMs);
  }

  async scrollElement28IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element28));
  }

  async getInnerTextUKGReadyTime(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyTime));
  }

  async expectUKGReadyTimeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGReadyTime), timeoutMs);
  }

  async expectUKGReadyTimeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGReadyTime), timeoutMs);
  }

  async expectUKGReadyTimeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGReadyTime), expected, timeoutMs);
  }

  async expectUKGReadyTimeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGReadyTime), substring, timeoutMs);
  }

  async scrollUKGReadyTimeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyTime));
  }

  async getInnerTextUKGReady3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReady3));
  }

  async expectUKGReady3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGReady3), timeoutMs);
  }

  async expectUKGReady3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGReady3), timeoutMs);
  }

  async expectUKGReady3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGReady3), expected, timeoutMs);
  }

  async expectUKGReady3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGReady3), substring, timeoutMs);
  }

  async scrollUKGReady3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReady3));
  }

  async getInnerTextElement29(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element29));
  }

  async expectElement29Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element29), timeoutMs);
  }

  async expectElement29Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element29), timeoutMs);
  }

  async expectElement29Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element29), expected, timeoutMs);
  }

  async expectElement29ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element29), substring, timeoutMs);
  }

  async scrollElement29IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element29));
  }

  async getInnerTextElement30(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element30));
  }

  async expectElement30Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element30), timeoutMs);
  }

  async expectElement30Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element30), timeoutMs);
  }

  async expectElement30Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element30), expected, timeoutMs);
  }

  async expectElement30ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element30), substring, timeoutMs);
  }

  async scrollElement30IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element30));
  }

  async getInnerTextElement31(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element31));
  }

  async expectElement31Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element31), timeoutMs);
  }

  async expectElement31Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element31), timeoutMs);
  }

  async expectElement31Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element31), expected, timeoutMs);
  }

  async expectElement31ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element31), substring, timeoutMs);
  }

  async scrollElement31IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element31));
  }

  async getInnerTextElement32(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element32));
  }

  async expectElement32Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element32), timeoutMs);
  }

  async expectElement32Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element32), timeoutMs);
  }

  async expectElement32Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element32), expected, timeoutMs);
  }

  async expectElement32ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element32), substring, timeoutMs);
  }

  async scrollElement32IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element32));
  }

  async getInnerTextCoreProductAdoptionTrend(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend));
  }

  async expectCoreProductAdoptionTrendVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), timeoutMs);
  }

  async expectCoreProductAdoptionTrendHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), timeoutMs);
  }

  async expectCoreProductAdoptionTrendText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), expected, timeoutMs);
  }

  async expectCoreProductAdoptionTrendContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), substring, timeoutMs);
  }

  async scrollCoreProductAdoptionTrendIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend));
  }

  async getInnerTextFY25Adoption2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption2));
  }

  async expectFY25Adoption2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption2), timeoutMs);
  }

  async expectFY25Adoption2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.fY25Adoption2), timeoutMs);
  }

  async expectFY25Adoption2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.fY25Adoption2), expected, timeoutMs);
  }

  async expectFY25Adoption2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.fY25Adoption2), substring, timeoutMs);
  }

  async scrollFY25Adoption2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption2));
  }

  async getInnerTextFY26Adoption3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption3));
  }

  async expectFY26Adoption3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption3), timeoutMs);
  }

  async expectFY26Adoption3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.fY26Adoption3), timeoutMs);
  }

  async expectFY26Adoption3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.fY26Adoption3), expected, timeoutMs);
  }

  async expectFY26Adoption3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.fY26Adoption3), substring, timeoutMs);
  }

  async scrollFY26Adoption3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption3));
  }

  async getInnerTextProductAdoptionFY25(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.productAdoptionFY25));
  }

  async expectProductAdoptionFY25Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), timeoutMs);
  }

  async expectProductAdoptionFY25Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), timeoutMs);
  }

  async expectProductAdoptionFY25Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), expected, timeoutMs);
  }

  async expectProductAdoptionFY25ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), substring, timeoutMs);
  }

  async scrollProductAdoptionFY25IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.productAdoptionFY25));
  }

  async getInnerTextProduct2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.product2));
  }

  async expectProduct2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.product2), timeoutMs);
  }

  async expectProduct2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.product2), timeoutMs);
  }

  async expectProduct2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.product2), expected, timeoutMs);
  }

  async expectProduct2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.product2), substring, timeoutMs);
  }

  async scrollProduct2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.product2));
  }

  async getInnerTextUKGBenchmark2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmark2));
  }

  async expectUKGBenchmark2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmark2), timeoutMs);
  }

  async expectUKGBenchmark2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGBenchmark2), timeoutMs);
  }

  async expectUKGBenchmark2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGBenchmark2), expected, timeoutMs);
  }

  async expectUKGBenchmark2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGBenchmark2), substring, timeoutMs);
  }

  async scrollUKGBenchmark2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmark2));
  }

  async getInnerTextFY25Adoption3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption3));
  }

  async expectFY25Adoption3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption3), timeoutMs);
  }

  async expectFY25Adoption3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.fY25Adoption3), timeoutMs);
  }

  async expectFY25Adoption3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.fY25Adoption3), expected, timeoutMs);
  }

  async expectFY25Adoption3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.fY25Adoption3), substring, timeoutMs);
  }

  async scrollFY25Adoption3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption3));
  }

  async getInnerTextFY26Adoption4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption4));
  }

  async expectFY26Adoption4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption4), timeoutMs);
  }

  async expectFY26Adoption4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.fY26Adoption4), timeoutMs);
  }

  async expectFY26Adoption4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.fY26Adoption4), expected, timeoutMs);
  }

  async expectFY26Adoption4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.fY26Adoption4), substring, timeoutMs);
  }

  async scrollFY26Adoption4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption4));
  }

  async getInnerTextLicenses(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.licenses));
  }

  async expectLicensesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.licenses), timeoutMs);
  }

  async expectLicensesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.licenses), timeoutMs);
  }

  async expectLicensesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.licenses), expected, timeoutMs);
  }

  async expectLicensesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.licenses), substring, timeoutMs);
  }

  async scrollLicensesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.licenses));
  }

  async getInnerTextAvgMonthlyUsers2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers2));
  }

  async expectAvgMonthlyUsers2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers2), timeoutMs);
  }

  async expectAvgMonthlyUsers2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers2), timeoutMs);
  }

  async expectAvgMonthlyUsers2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers2), expected, timeoutMs);
  }

  async expectAvgMonthlyUsers2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers2), substring, timeoutMs);
  }

  async scrollAvgMonthlyUsers2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers2));
  }

  async getInnerTextBilledQuantityByMonth(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth));
  }

  async expectBilledQuantityByMonthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), timeoutMs);
  }

  async expectBilledQuantityByMonthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), timeoutMs);
  }

  async expectBilledQuantityByMonthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), expected, timeoutMs);
  }

  async expectBilledQuantityByMonthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), substring, timeoutMs);
  }

  async scrollBilledQuantityByMonthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth));
  }

  async getInnerTextMinQuantity(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.minQuantity));
  }

  async expectMinQuantityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.minQuantity), timeoutMs);
  }

  async expectMinQuantityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.minQuantity), timeoutMs);
  }

  async expectMinQuantityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.minQuantity), expected, timeoutMs);
  }

  async expectMinQuantityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.minQuantity), substring, timeoutMs);
  }

  async scrollMinQuantityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.minQuantity));
  }

  async getInnerTextBilledQuantity(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantity));
  }

  async expectBilledQuantityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.billedQuantity), timeoutMs);
  }

  async expectBilledQuantityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.billedQuantity), timeoutMs);
  }

  async expectBilledQuantityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.billedQuantity), expected, timeoutMs);
  }

  async expectBilledQuantityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.billedQuantity), substring, timeoutMs);
  }

  async scrollBilledQuantityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantity));
  }

  async getInnerTextPeerComparison(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.peerComparison));
  }

  async expectPeerComparisonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.peerComparison), timeoutMs);
  }

  async expectPeerComparisonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.peerComparison), timeoutMs);
  }

  async expectPeerComparisonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.peerComparison), expected, timeoutMs);
  }

  async expectPeerComparisonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.peerComparison), substring, timeoutMs);
  }

  async scrollPeerComparisonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.peerComparison));
  }

  async getInnerTextOverallRanking(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.overallRanking));
  }

  async expectOverallRankingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.overallRanking), timeoutMs);
  }

  async expectOverallRankingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.overallRanking), timeoutMs);
  }

  async expectOverallRankingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.overallRanking), expected, timeoutMs);
  }

  async expectOverallRankingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.overallRanking), substring, timeoutMs);
  }

  async scrollOverallRankingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.overallRanking));
  }

  async getInnerTextTop20(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.top20));
  }

  async expectTop20Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.top20), timeoutMs);
  }

  async expectTop20Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.top20), timeoutMs);
  }

  async expectTop20Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.top20), expected, timeoutMs);
  }

  async expectTop20ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.top20), substring, timeoutMs);
  }

  async scrollTop20IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.top20));
  }

  async getInnerTextEnterprisePeersIndustry(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry));
  }

  async expectEnterprisePeersIndustryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), timeoutMs);
  }

  async expectEnterprisePeersIndustryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), timeoutMs);
  }

  async expectEnterprisePeersIndustryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), expected, timeoutMs);
  }

  async expectEnterprisePeersIndustryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), substring, timeoutMs);
  }

  async scrollEnterprisePeersIndustryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry));
  }

  async getInnerTextProductsVsPeerAvg(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg));
  }

  async expectProductsVsPeerAvgVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), timeoutMs);
  }

  async expectProductsVsPeerAvgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), timeoutMs);
  }

  async expectProductsVsPeerAvgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), expected, timeoutMs);
  }

  async expectProductsVsPeerAvgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), substring, timeoutMs);
  }

  async scrollProductsVsPeerAvgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg));
  }

  async getInnerTextTop10(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.top10));
  }

  async expectTop10Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.top10), timeoutMs);
  }

  async expectTop10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.top10), timeoutMs);
  }

  async expectTop10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.top10), expected, timeoutMs);
  }

  async expectTop10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.top10), substring, timeoutMs);
  }

  async scrollTop10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.top10));
  }

  async getInnerTextUKGDimensionsCoreAnalytics2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics2));
  }

  async expectUKGDimensionsCoreAnalytics2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics2), timeoutMs);
  }

  async expectUKGDimensionsCoreAnalytics2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics2), timeoutMs);
  }

  async expectUKGDimensionsCoreAnalytics2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics2), expected, timeoutMs);
  }

  async expectUKGDimensionsCoreAnalytics2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics2), substring, timeoutMs);
  }

  async scrollUKGDimensionsCoreAnalytics2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics2));
  }

  async getInnerTextPts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.Pts));
  }

  async expectPtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.Pts), timeoutMs);
  }

  async expectPtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.Pts), timeoutMs);
  }

  async expectPtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.Pts), expected, timeoutMs);
  }

  async expectPtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.Pts), substring, timeoutMs);
  }

  async scrollPtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.Pts));
  }

  async getInnerTextUKGDimensionsScheduling2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling2));
  }

  async expectUKGDimensionsScheduling2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling2), timeoutMs);
  }

  async expectUKGDimensionsScheduling2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling2), timeoutMs);
  }

  async expectUKGDimensionsScheduling2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling2), expected, timeoutMs);
  }

  async expectUKGDimensionsScheduling2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling2), substring, timeoutMs);
  }

  async scrollUKGDimensionsScheduling2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling2));
  }

  async getInnerTextPts2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.Pts2));
  }

  async expectPts2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.Pts2), timeoutMs);
  }

  async expectPts2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.Pts2), timeoutMs);
  }

  async expectPts2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.Pts2), expected, timeoutMs);
  }

  async expectPts2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.Pts2), substring, timeoutMs);
  }

  async scrollPts2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.Pts2));
  }

  async getInnerTextUKGReadyHR2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyHR2));
  }

  async expectUKGReadyHR2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGReadyHR2), timeoutMs);
  }

  async expectUKGReadyHR2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGReadyHR2), timeoutMs);
  }

  async expectUKGReadyHR2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGReadyHR2), expected, timeoutMs);
  }

  async expectUKGReadyHR2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGReadyHR2), substring, timeoutMs);
  }

  async scrollUKGReadyHR2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyHR2));
  }

  async getInnerTextPts3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.Pts3));
  }

  async expectPts3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.Pts3), timeoutMs);
  }

  async expectPts3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.Pts3), timeoutMs);
  }

  async expectPts3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.Pts3), expected, timeoutMs);
  }

  async expectPts3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.Pts3), substring, timeoutMs);
  }

  async scrollPts3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.Pts3));
  }

  async getInnerTextTop25(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.top25));
  }

  async expectTop25Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.top25), timeoutMs);
  }

  async expectTop25Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.top25), timeoutMs);
  }

  async expectTop25Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.top25), expected, timeoutMs);
  }

  async expectTop25ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.top25), substring, timeoutMs);
  }

  async scrollTop25IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.top25));
  }

  async getInnerTextUKGDimensionsCompliance2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance2));
  }

  async expectUKGDimensionsCompliance2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance2), timeoutMs);
  }

  async expectUKGDimensionsCompliance2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance2), timeoutMs);
  }

  async expectUKGDimensionsCompliance2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance2), expected, timeoutMs);
  }

  async expectUKGDimensionsCompliance2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance2), substring, timeoutMs);
  }

  async scrollUKGDimensionsCompliance2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance2));
  }

  async getInnerTextPts4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.Pts4));
  }

  async expectPts4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.Pts4), timeoutMs);
  }

  async expectPts4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.Pts4), timeoutMs);
  }

  async expectPts4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.Pts4), expected, timeoutMs);
  }

  async expectPts4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.Pts4), substring, timeoutMs);
  }

  async scrollPts4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.Pts4));
  }

  async getInnerTextBottom25(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.bottom25));
  }

  async expectBottom25Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.bottom25), timeoutMs);
  }

  async expectBottom25Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.bottom25), timeoutMs);
  }

  async expectBottom25Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.bottom25), expected, timeoutMs);
  }

  async expectBottom25ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.bottom25), substring, timeoutMs);
  }

  async scrollBottom25IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.bottom25));
  }

  async getInnerTextUKGReadyTime2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyTime2));
  }

  async expectUKGReadyTime2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.uKGReadyTime2), timeoutMs);
  }

  async expectUKGReadyTime2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.uKGReadyTime2), timeoutMs);
  }

  async expectUKGReadyTime2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.uKGReadyTime2), expected, timeoutMs);
  }

  async expectUKGReadyTime2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.uKGReadyTime2), substring, timeoutMs);
  }

  async scrollUKGReadyTime2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyTime2));
  }

  async getInnerTextPts5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.Pts5));
  }

  async expectPts5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.Pts5), timeoutMs);
  }

  async expectPts5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.Pts5), timeoutMs);
  }

  async expectPts5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.Pts5), expected, timeoutMs);
  }

  async expectPts5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.Pts5), substring, timeoutMs);
  }

  async scrollPts5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.Pts5));
  }

  async getInnerTextAdoptionSummary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionSummary));
  }

  async expectAdoptionSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.adoptionSummary), timeoutMs);
  }

  async expectAdoptionSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.adoptionSummary), timeoutMs);
  }

  async expectAdoptionSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.adoptionSummary), expected, timeoutMs);
  }

  async expectAdoptionSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.adoptionSummary), substring, timeoutMs);
  }

  async scrollAdoptionSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionSummary));
  }

  async getInnerTextFY26Adoption5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption5));
  }

  async expectFY26Adoption5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption5), timeoutMs);
  }

  async expectFY26Adoption5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.fY26Adoption5), timeoutMs);
  }

  async expectFY26Adoption5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.fY26Adoption5), expected, timeoutMs);
  }

  async expectFY26Adoption5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.fY26Adoption5), substring, timeoutMs);
  }

  async scrollFY26Adoption5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption5));
  }

  async getInnerTextElement33(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element33));
  }

  async expectElement33Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element33), timeoutMs);
  }

  async expectElement33Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element33), timeoutMs);
  }

  async expectElement33Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element33), expected, timeoutMs);
  }

  async expectElement33ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element33), substring, timeoutMs);
  }

  async scrollElement33IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element33));
  }

  async getInnerTextFY25Adoption4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption4));
  }

  async expectFY25Adoption4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption4), timeoutMs);
  }

  async expectFY25Adoption4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.fY25Adoption4), timeoutMs);
  }

  async expectFY25Adoption4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.fY25Adoption4), expected, timeoutMs);
  }

  async expectFY25Adoption4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.fY25Adoption4), substring, timeoutMs);
  }

  async scrollFY25Adoption4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption4));
  }

  async getInnerTextElement34(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element34));
  }

  async expectElement34Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element34), timeoutMs);
  }

  async expectElement34Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element34), timeoutMs);
  }

  async expectElement34Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element34), expected, timeoutMs);
  }

  async expectElement34ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element34), substring, timeoutMs);
  }

  async scrollElement34IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element34));
  }

  async getInnerTextYoYGrowth(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.yoYGrowth));
  }

  async expectYoYGrowthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.yoYGrowth), timeoutMs);
  }

  async expectYoYGrowthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.yoYGrowth), timeoutMs);
  }

  async expectYoYGrowthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.yoYGrowth), expected, timeoutMs);
  }

  async expectYoYGrowthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.yoYGrowth), substring, timeoutMs);
  }

  async scrollYoYGrowthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.yoYGrowth));
  }

  async getInnerTextElement35(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element35));
  }

  async expectElement35Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element35), timeoutMs);
  }

  async expectElement35Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element35), timeoutMs);
  }

  async expectElement35Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element35), expected, timeoutMs);
  }

  async expectElement35ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element35), substring, timeoutMs);
  }

  async scrollElement35IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element35));
  }

  async getInnerTextActiveProducts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.activeProducts));
  }

  async expectActiveProductsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.activeProducts), timeoutMs);
  }

  async expectActiveProductsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.activeProducts), timeoutMs);
  }

  async expectActiveProductsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.activeProducts), expected, timeoutMs);
  }

  async expectActiveProductsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.activeProducts), substring, timeoutMs);
  }

  async scrollActiveProductsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.activeProducts));
  }

  async getInnerTextElement36(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element36));
  }

  async expectElement36Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element36), timeoutMs);
  }

  async expectElement36Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element36), timeoutMs);
  }

  async expectElement36Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element36), expected, timeoutMs);
  }

  async expectElement36ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element36), substring, timeoutMs);
  }

  async scrollElement36IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element36));
  }

  async getInnerTextAvgMonthlyUsers3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers3));
  }

  async expectAvgMonthlyUsers3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers3), timeoutMs);
  }

  async expectAvgMonthlyUsers3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers3), timeoutMs);
  }

  async expectAvgMonthlyUsers3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers3), expected, timeoutMs);
  }

  async expectAvgMonthlyUsers3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers3), substring, timeoutMs);
  }

  async scrollAvgMonthlyUsers3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers3));
  }

  async getInnerTextElement37(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element37));
  }

  async expectElement37Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element37), timeoutMs);
  }

  async expectElement37Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element37), timeoutMs);
  }

  async expectElement37Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element37), expected, timeoutMs);
  }

  async expectElement37ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element37), substring, timeoutMs);
  }

  async scrollElement37IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element37));
  }

  async getInnerTextTopDriver(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.topDriver));
  }

  async expectTopDriverVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.topDriver), timeoutMs);
  }

  async expectTopDriverHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.topDriver), timeoutMs);
  }

  async expectTopDriverText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.topDriver), expected, timeoutMs);
  }

  async expectTopDriverContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.topDriver), substring, timeoutMs);
  }

  async scrollTopDriverIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.topDriver));
  }

  async getInnerTextDimensionCore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.dimensionCore));
  }

  async expectDimensionCoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.dimensionCore), timeoutMs);
  }

  async expectDimensionCoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.dimensionCore), timeoutMs);
  }

  async expectDimensionCoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.dimensionCore), expected, timeoutMs);
  }

  async expectDimensionCoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.dimensionCore), substring, timeoutMs);
  }

  async scrollDimensionCoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.dimensionCore));
  }

  async getInnerTextDesktopMobile(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.desktopMobile));
  }

  async expectDesktopMobileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.desktopMobile), timeoutMs);
  }

  async expectDesktopMobileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.desktopMobile), timeoutMs);
  }

  async expectDesktopMobileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.desktopMobile), expected, timeoutMs);
  }

  async expectDesktopMobileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.desktopMobile), substring, timeoutMs);
  }

  async scrollDesktopMobileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.desktopMobile));
  }

  async getInnerTextElement38(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element38));
  }

  async expectElement38Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element38), timeoutMs);
  }

  async expectElement38Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element38), timeoutMs);
  }

  async expectElement38Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element38), expected, timeoutMs);
  }

  async expectElement38ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element38), substring, timeoutMs);
  }

  async scrollElement38IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element38));
  }

  async getInnerTextBilledQty(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.billedQty));
  }

  async expectBilledQtyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.billedQty), timeoutMs);
  }

  async expectBilledQtyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.billedQty), timeoutMs);
  }

  async expectBilledQtyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.billedQty), expected, timeoutMs);
  }

  async expectBilledQtyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.billedQty), substring, timeoutMs);
  }

  async scrollBilledQtyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.billedQty));
  }

  async getInnerTextElement39(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element39));
  }

  async expectElement39Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element39), timeoutMs);
  }

  async expectElement39Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element39), timeoutMs);
  }

  async expectElement39Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element39), expected, timeoutMs);
  }

  async expectElement39ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element39), substring, timeoutMs);
  }

  async scrollElement39IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element39));
  }

  async getInnerTextMinContracted(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.minContracted));
  }

  async expectMinContractedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.minContracted), timeoutMs);
  }

  async expectMinContractedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.minContracted), timeoutMs);
  }

  async expectMinContractedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.minContracted), expected, timeoutMs);
  }

  async expectMinContractedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.minContracted), substring, timeoutMs);
  }

  async scrollMinContractedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.minContracted));
  }

  async getInnerTextElement40(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element40));
  }

  async expectElement40Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element40), timeoutMs);
  }

  async expectElement40Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element40), timeoutMs);
  }

  async expectElement40Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element40), expected, timeoutMs);
  }

  async expectElement40ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element40), substring, timeoutMs);
  }

  async scrollElement40IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element40));
  }

  async clickSendFeedback(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.sendFeedback));
  }

  async doubleClickSendFeedback(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.sendFeedback));
  }

  async expectSendFeedbackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.sendFeedback), expected, timeoutMs);
  }

  async expectSendFeedbackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.sendFeedback), substring, timeoutMs);
  }

  async scrollSendFeedbackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.sendFeedback));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async clickAcmeCorporation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.acmeCorporation));
  }

  async doubleClickAcmeCorporation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.acmeCorporation));
  }

  async longPressAcmeCorporation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.acmeCorporation));
  }

  async expectAcmeCorporationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.acmeCorporation), value, timeoutMs);
  }

  async expectAcmeCorporationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.acmeCorporation), count, timeoutMs);
  }

  async longPressUKGAssist(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGAssist));
  }

  async expectUKGAssistValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGAssist), value, timeoutMs);
  }

  async expectUKGAssistEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGAssist), count, timeoutMs);
  }

  async longPressSubscriptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.subscriptions));
  }

  async expectSubscriptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.subscriptions), value, timeoutMs);
  }

  async expectSubscriptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.subscriptions), count, timeoutMs);
  }

  async longPressImplementations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.implementations));
  }

  async expectImplementationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.implementations), value, timeoutMs);
  }

  async expectImplementationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.implementations), timeoutMs);
  }

  async expectImplementationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.implementations), timeoutMs);
  }

  async expectImplementationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.implementations), timeoutMs);
  }

  async expectImplementationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.implementations), timeoutMs);
  }

  async expectImplementationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.implementations), timeoutMs);
  }

  async expectImplementationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.implementations), count, timeoutMs);
  }

  async longPressBillings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.billings));
  }

  async expectBillingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.billings), value, timeoutMs);
  }

  async expectBillingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.billings), timeoutMs);
  }

  async expectBillingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.billings), timeoutMs);
  }

  async expectBillingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.billings), timeoutMs);
  }

  async expectBillingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.billings), timeoutMs);
  }

  async expectBillingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.billings), timeoutMs);
  }

  async expectBillingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.billings), count, timeoutMs);
  }

  async longPressSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.support));
  }

  async expectSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.support), value, timeoutMs);
  }

  async expectSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.support), timeoutMs);
  }

  async expectSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.support), timeoutMs);
  }

  async expectSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.support), timeoutMs);
  }

  async expectSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.support), timeoutMs);
  }

  async expectSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.support), timeoutMs);
  }

  async expectSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.support), count, timeoutMs);
  }

  async longPressAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.adoption));
  }

  async expectAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.adoption), value, timeoutMs);
  }

  async expectAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.adoption), timeoutMs);
  }

  async expectAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.adoption), timeoutMs);
  }

  async expectAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.adoption), timeoutMs);
  }

  async expectAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.adoption), timeoutMs);
  }

  async expectAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.adoption), timeoutMs);
  }

  async expectAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.adoption), count, timeoutMs);
  }

  async longPressAdmin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.admin));
  }

  async expectAdminValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.admin), value, timeoutMs);
  }

  async expectAdminEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.admin), timeoutMs);
  }

  async expectAdminDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.admin), timeoutMs);
  }

  async expectAdminChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.admin), timeoutMs);
  }

  async expectAdminUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.admin), timeoutMs);
  }

  async expectAdminFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.admin), timeoutMs);
  }

  async expectAdminCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.admin), count, timeoutMs);
  }

  async longPressAccountProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.accountProfile));
  }

  async expectAccountProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.accountProfile), value, timeoutMs);
  }

  async expectAccountProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.accountProfile), count, timeoutMs);
  }

  async longPressEJEmmaJohnsonPortal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.eJEmmaJohnsonPortal), value, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.eJEmmaJohnsonPortal), count, timeoutMs);
  }

  async longPressSignOut(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.signOut));
  }

  async expectSignOutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.signOut), value, timeoutMs);
  }

  async expectSignOutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.signOut), timeoutMs);
  }

  async expectSignOutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.signOut), timeoutMs);
  }

  async expectSignOutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.signOut), timeoutMs);
  }

  async expectSignOutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.signOut), count, timeoutMs);
  }

  async longPressCollapseSidebar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.collapseSidebar));
  }

  async expectCollapseSidebarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.collapseSidebar), value, timeoutMs);
  }

  async expectCollapseSidebarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.collapseSidebar), count, timeoutMs);
  }

  async clickAtlasInsightsAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption));
  }

  async doubleClickAtlasInsightsAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption));
  }

  async longPressAtlasInsightsAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption));
  }

  async expectAtlasInsightsAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), value, timeoutMs);
  }

  async expectAtlasInsightsAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), timeoutMs);
  }

  async expectAtlasInsightsAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), timeoutMs);
  }

  async expectAtlasInsightsAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), timeoutMs);
  }

  async expectAtlasInsightsAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), timeoutMs);
  }

  async expectAtlasInsightsAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), timeoutMs);
  }

  async expectAtlasInsightsAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), count, timeoutMs);
  }

  async clickWasThisHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.wasThisHelpful));
  }

  async doubleClickWasThisHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.wasThisHelpful));
  }

  async longPressWasThisHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.wasThisHelpful));
  }

  async expectWasThisHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.wasThisHelpful), value, timeoutMs);
  }

  async expectWasThisHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.wasThisHelpful), count, timeoutMs);
  }

  async longPressHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.helpful));
  }

  async expectHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.helpful), value, timeoutMs);
  }

  async expectHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.helpful), timeoutMs);
  }

  async expectHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.helpful), timeoutMs);
  }

  async expectHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.helpful), timeoutMs);
  }

  async expectHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.helpful), count, timeoutMs);
  }

  async longPressNotHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.notHelpful));
  }

  async expectNotHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.notHelpful), value, timeoutMs);
  }

  async expectNotHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.notHelpful), count, timeoutMs);
  }

  async expectInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.input), expected, timeoutMs);
  }

  async expectInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.input), substring, timeoutMs);
  }

  async expectInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.input), timeoutMs);
  }

  async expectInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.input), timeoutMs);
  }

  async expectInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.input), count, timeoutMs);
  }

  async longPressSendMessage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.sendMessage));
  }

  async expectSendMessageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.sendMessage), value, timeoutMs);
  }

  async expectSendMessageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.sendMessage), count, timeoutMs);
  }

  async clickAskAtlas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.askAtlas));
  }

  async doubleClickAskAtlas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.askAtlas));
  }

  async longPressAskAtlas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.askAtlas));
  }

  async expectAskAtlasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.askAtlas), value, timeoutMs);
  }

  async expectAskAtlasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.askAtlas), count, timeoutMs);
  }

  async longPressVsUKGBenchmarks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.vsUKGBenchmarks));
  }

  async expectVsUKGBenchmarksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.vsUKGBenchmarks), value, timeoutMs);
  }

  async expectVsUKGBenchmarksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.vsUKGBenchmarks), timeoutMs);
  }

  async expectVsUKGBenchmarksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.vsUKGBenchmarks), timeoutMs);
  }

  async expectVsUKGBenchmarksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.vsUKGBenchmarks), timeoutMs);
  }

  async expectVsUKGBenchmarksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.vsUKGBenchmarks), count, timeoutMs);
  }

  async longPressPerProductAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.perProductAdoption));
  }

  async expectPerProductAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.perProductAdoption), value, timeoutMs);
  }

  async expectPerProductAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.perProductAdoption), timeoutMs);
  }

  async expectPerProductAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.perProductAdoption), timeoutMs);
  }

  async expectPerProductAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.perProductAdoption), timeoutMs);
  }

  async expectPerProductAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.perProductAdoption), count, timeoutMs);
  }

  async longPressDistinctUsersTrend(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.distinctUsersTrend));
  }

  async expectDistinctUsersTrendValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), value, timeoutMs);
  }

  async expectDistinctUsersTrendChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), timeoutMs);
  }

  async expectDistinctUsersTrendUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), timeoutMs);
  }

  async expectDistinctUsersTrendFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), timeoutMs);
  }

  async expectDistinctUsersTrendCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), count, timeoutMs);
  }

  async longPressAdoptionOpportunities(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOpportunities));
  }

  async expectAdoptionOpportunitiesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), value, timeoutMs);
  }

  async expectAdoptionOpportunitiesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), timeoutMs);
  }

  async expectAdoptionOpportunitiesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), timeoutMs);
  }

  async expectAdoptionOpportunitiesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), timeoutMs);
  }

  async expectAdoptionOpportunitiesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), count, timeoutMs);
  }

  async clickAdoptionOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOverview));
  }

  async doubleClickAdoptionOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOverview));
  }

  async longPressAdoptionOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOverview));
  }

  async expectAdoptionOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.adoptionOverview), value, timeoutMs);
  }

  async expectAdoptionOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.adoptionOverview), timeoutMs);
  }

  async expectAdoptionOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.adoptionOverview), timeoutMs);
  }

  async expectAdoptionOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.adoptionOverview), timeoutMs);
  }

  async expectAdoptionOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.adoptionOverview), timeoutMs);
  }

  async expectAdoptionOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.adoptionOverview), timeoutMs);
  }

  async expectAdoptionOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.adoptionOverview), count, timeoutMs);
  }

  async clickFY26AccountAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption));
  }

  async doubleClickFY26AccountAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption));
  }

  async longPressFY26AccountAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption));
  }

  async expectFY26AccountAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), value, timeoutMs);
  }

  async expectFY26AccountAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), timeoutMs);
  }

  async expectFY26AccountAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), timeoutMs);
  }

  async expectFY26AccountAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), timeoutMs);
  }

  async expectFY26AccountAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), timeoutMs);
  }

  async expectFY26AccountAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), timeoutMs);
  }

  async expectFY26AccountAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element), count, timeoutMs);
  }

  async clickYoY(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.YoY));
  }

  async doubleClickYoY(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.YoY));
  }

  async longPressYoY(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.YoY));
  }

  async expectYoYValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.YoY), value, timeoutMs);
  }

  async expectYoYEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.YoY), timeoutMs);
  }

  async expectYoYDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.YoY), timeoutMs);
  }

  async expectYoYChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.YoY), timeoutMs);
  }

  async expectYoYUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.YoY), timeoutMs);
  }

  async expectYoYFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.YoY), timeoutMs);
  }

  async expectYoYCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.YoY), count, timeoutMs);
  }

  async clickActiveProductModules(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.activeProductModules));
  }

  async doubleClickActiveProductModules(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.activeProductModules));
  }

  async longPressActiveProductModules(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.activeProductModules));
  }

  async expectActiveProductModulesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.activeProductModules), value, timeoutMs);
  }

  async expectActiveProductModulesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.activeProductModules), timeoutMs);
  }

  async expectActiveProductModulesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.activeProductModules), timeoutMs);
  }

  async expectActiveProductModulesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.activeProductModules), timeoutMs);
  }

  async expectActiveProductModulesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.activeProductModules), timeoutMs);
  }

  async expectActiveProductModulesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.activeProductModules), timeoutMs);
  }

  async expectActiveProductModulesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.activeProductModules), count, timeoutMs);
  }

  async clickProductsActiveInFY26(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.productsActiveInFY26));
  }

  async doubleClickProductsActiveInFY26(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.productsActiveInFY26));
  }

  async longPressProductsActiveInFY26(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.productsActiveInFY26));
  }

  async expectProductsActiveInFY26Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), value, timeoutMs);
  }

  async expectProductsActiveInFY26Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), timeoutMs);
  }

  async expectProductsActiveInFY26Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), timeoutMs);
  }

  async expectProductsActiveInFY26Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), timeoutMs);
  }

  async expectProductsActiveInFY26Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), timeoutMs);
  }

  async expectProductsActiveInFY26Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), timeoutMs);
  }

  async expectProductsActiveInFY26Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), count, timeoutMs);
  }

  async clickAvgMonthlyUsers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers));
  }

  async doubleClickAvgMonthlyUsers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers));
  }

  async longPressAvgMonthlyUsers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers));
  }

  async expectAvgMonthlyUsersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), value, timeoutMs);
  }

  async expectAvgMonthlyUsersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), timeoutMs);
  }

  async expectAvgMonthlyUsersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), timeoutMs);
  }

  async expectAvgMonthlyUsersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), timeoutMs);
  }

  async expectAvgMonthlyUsersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), timeoutMs);
  }

  async expectAvgMonthlyUsersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), timeoutMs);
  }

  async expectAvgMonthlyUsersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), count, timeoutMs);
  }

  async clickElement2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element2));
  }

  async doubleClickElement2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element2));
  }

  async longPressElement2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element2));
  }

  async expectElement2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element2), value, timeoutMs);
  }

  async expectElement2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element2), timeoutMs);
  }

  async expectElement2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element2), timeoutMs);
  }

  async expectElement2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element2), timeoutMs);
  }

  async expectElement2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element2), timeoutMs);
  }

  async expectElement2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element2), timeoutMs);
  }

  async expectElement2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element2), count, timeoutMs);
  }

  async clickAcrossAllProducts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.acrossAllProducts));
  }

  async doubleClickAcrossAllProducts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.acrossAllProducts));
  }

  async longPressAcrossAllProducts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.acrossAllProducts));
  }

  async expectAcrossAllProductsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.acrossAllProducts), value, timeoutMs);
  }

  async expectAcrossAllProductsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.acrossAllProducts), timeoutMs);
  }

  async expectAcrossAllProductsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.acrossAllProducts), timeoutMs);
  }

  async expectAcrossAllProductsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.acrossAllProducts), timeoutMs);
  }

  async expectAcrossAllProductsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.acrossAllProducts), timeoutMs);
  }

  async expectAcrossAllProductsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.acrossAllProducts), timeoutMs);
  }

  async expectAcrossAllProductsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.acrossAllProducts), count, timeoutMs);
  }

  async clickYoYAdoptionGrowth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth));
  }

  async doubleClickYoYAdoptionGrowth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth));
  }

  async longPressYoYAdoptionGrowth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth));
  }

  async expectYoYAdoptionGrowthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), value, timeoutMs);
  }

  async expectYoYAdoptionGrowthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), timeoutMs);
  }

  async expectYoYAdoptionGrowthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), timeoutMs);
  }

  async expectYoYAdoptionGrowthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), timeoutMs);
  }

  async expectYoYAdoptionGrowthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), timeoutMs);
  }

  async expectYoYAdoptionGrowthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), timeoutMs);
  }

  async expectYoYAdoptionGrowthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), count, timeoutMs);
  }

  async clickElement3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element3));
  }

  async doubleClickElement3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element3));
  }

  async longPressElement3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element3));
  }

  async expectElement3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element3), value, timeoutMs);
  }

  async expectElement3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element3), timeoutMs);
  }

  async expectElement3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element3), timeoutMs);
  }

  async expectElement3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element3), timeoutMs);
  }

  async expectElement3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element3), timeoutMs);
  }

  async expectElement3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element3), timeoutMs);
  }

  async expectElement3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element3), count, timeoutMs);
  }

  async clickUKGAvg257(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGAvg257));
  }

  async doubleClickUKGAvg257(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGAvg257));
  }

  async longPressUKGAvg257(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGAvg257));
  }

  async expectUKGAvg257Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGAvg257), value, timeoutMs);
  }

  async expectUKGAvg257Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGAvg257), timeoutMs);
  }

  async expectUKGAvg257Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGAvg257), timeoutMs);
  }

  async expectUKGAvg257Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGAvg257), timeoutMs);
  }

  async expectUKGAvg257Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGAvg257), timeoutMs);
  }

  async expectUKGAvg257Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGAvg257), timeoutMs);
  }

  async expectUKGAvg257Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGAvg257), count, timeoutMs);
  }

  async longPressAdoptionMetrics(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionMetrics));
  }

  async expectAdoptionMetricsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.adoptionMetrics), value, timeoutMs);
  }

  async expectAdoptionMetricsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.adoptionMetrics), timeoutMs);
  }

  async expectAdoptionMetricsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.adoptionMetrics), timeoutMs);
  }

  async expectAdoptionMetricsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.adoptionMetrics), timeoutMs);
  }

  async expectAdoptionMetricsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.adoptionMetrics), count, timeoutMs);
  }

  async longPressUserEngagement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.userEngagement));
  }

  async expectUserEngagementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.userEngagement), value, timeoutMs);
  }

  async expectUserEngagementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.userEngagement), timeoutMs);
  }

  async expectUserEngagementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.userEngagement), timeoutMs);
  }

  async expectUserEngagementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.userEngagement), timeoutMs);
  }

  async expectUserEngagementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.userEngagement), count, timeoutMs);
  }

  async clickUKGBenchmarkVsAccount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmarkVsAccount));
  }

  async doubleClickUKGBenchmarkVsAccount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmarkVsAccount));
  }

  async longPressUKGBenchmarkVsAccount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmarkVsAccount));
  }

  async expectUKGBenchmarkVsAccountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGBenchmarkVsAccount), value, timeoutMs);
  }

  async expectUKGBenchmarkVsAccountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGBenchmarkVsAccount), timeoutMs);
  }

  async expectUKGBenchmarkVsAccountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGBenchmarkVsAccount), timeoutMs);
  }

  async expectUKGBenchmarkVsAccountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGBenchmarkVsAccount), timeoutMs);
  }

  async expectUKGBenchmarkVsAccountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGBenchmarkVsAccount), timeoutMs);
  }

  async expectUKGBenchmarkVsAccountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGBenchmarkVsAccount), timeoutMs);
  }

  async expectUKGBenchmarkVsAccountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGBenchmarkVsAccount), count, timeoutMs);
  }

  async clickUKGBenchmark(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmark));
  }

  async doubleClickUKGBenchmark(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmark));
  }

  async longPressUKGBenchmark(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmark));
  }

  async expectUKGBenchmarkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGBenchmark), value, timeoutMs);
  }

  async expectUKGBenchmarkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGBenchmark), timeoutMs);
  }

  async expectUKGBenchmarkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGBenchmark), timeoutMs);
  }

  async expectUKGBenchmarkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGBenchmark), timeoutMs);
  }

  async expectUKGBenchmarkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGBenchmark), timeoutMs);
  }

  async expectUKGBenchmarkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGBenchmark), timeoutMs);
  }

  async expectUKGBenchmarkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGBenchmark), count, timeoutMs);
  }

  async clickFY25Adoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption));
  }

  async doubleClickFY25Adoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption));
  }

  async longPressFY25Adoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption));
  }

  async expectFY25AdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.fY25Adoption), value, timeoutMs);
  }

  async expectFY25AdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.fY25Adoption), timeoutMs);
  }

  async expectFY25AdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.fY25Adoption), timeoutMs);
  }

  async expectFY25AdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.fY25Adoption), timeoutMs);
  }

  async expectFY25AdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.fY25Adoption), timeoutMs);
  }

  async expectFY25AdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.fY25Adoption), timeoutMs);
  }

  async expectFY25AdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.fY25Adoption), count, timeoutMs);
  }

  async clickFY26Adoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption));
  }

  async doubleClickFY26Adoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption));
  }

  async longPressFY26Adoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption));
  }

  async expectFY26AdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.fY26Adoption), value, timeoutMs);
  }

  async expectFY26AdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.fY26Adoption), timeoutMs);
  }

  async expectFY26AdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.fY26Adoption), timeoutMs);
  }

  async expectFY26AdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.fY26Adoption), timeoutMs);
  }

  async expectFY26AdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.fY26Adoption), timeoutMs);
  }

  async expectFY26AdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.fY26Adoption), timeoutMs);
  }

  async expectFY26AdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.fY26Adoption), count, timeoutMs);
  }

  async clickProduct(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.product));
  }

  async doubleClickProduct(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.product));
  }

  async longPressProduct(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.product));
  }

  async expectProductValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.product), value, timeoutMs);
  }

  async expectProductEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.product), timeoutMs);
  }

  async expectProductDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.product), timeoutMs);
  }

  async expectProductChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.product), timeoutMs);
  }

  async expectProductUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.product), timeoutMs);
  }

  async expectProductFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.product), timeoutMs);
  }

  async expectProductCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.product), count, timeoutMs);
  }

  async clickElement4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element4));
  }

  async doubleClickElement4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element4));
  }

  async longPressElement4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element4));
  }

  async expectElement4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element4), value, timeoutMs);
  }

  async expectElement4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element4), timeoutMs);
  }

  async expectElement4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element4), timeoutMs);
  }

  async expectElement4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element4), timeoutMs);
  }

  async expectElement4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element4), timeoutMs);
  }

  async expectElement4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element4), timeoutMs);
  }

  async expectElement4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element4), count, timeoutMs);
  }

  async clickElement5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element5));
  }

  async doubleClickElement5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element5));
  }

  async longPressElement5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element5));
  }

  async expectElement5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element5), value, timeoutMs);
  }

  async expectElement5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element5), timeoutMs);
  }

  async expectElement5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element5), timeoutMs);
  }

  async expectElement5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element5), timeoutMs);
  }

  async expectElement5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element5), timeoutMs);
  }

  async expectElement5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element5), timeoutMs);
  }

  async expectElement5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element5), count, timeoutMs);
  }

  async clickElement6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element6));
  }

  async doubleClickElement6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element6));
  }

  async longPressElement6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element6));
  }

  async expectElement6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element6), value, timeoutMs);
  }

  async expectElement6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element6), timeoutMs);
  }

  async expectElement6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element6), timeoutMs);
  }

  async expectElement6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element6), timeoutMs);
  }

  async expectElement6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element6), timeoutMs);
  }

  async expectElement6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element6), timeoutMs);
  }

  async expectElement6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element6), count, timeoutMs);
  }

  async clickElement7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element7));
  }

  async doubleClickElement7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element7));
  }

  async longPressElement7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element7));
  }

  async expectElement7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element7), value, timeoutMs);
  }

  async expectElement7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element7), timeoutMs);
  }

  async expectElement7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element7), timeoutMs);
  }

  async expectElement7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element7), timeoutMs);
  }

  async expectElement7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element7), timeoutMs);
  }

  async expectElement7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element7), timeoutMs);
  }

  async expectElement7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element7), count, timeoutMs);
  }

  async clickElement8(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element8));
  }

  async doubleClickElement8(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element8));
  }

  async longPressElement8(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element8));
  }

  async expectElement8Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element8), value, timeoutMs);
  }

  async expectElement8Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element8), timeoutMs);
  }

  async expectElement8Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element8), timeoutMs);
  }

  async expectElement8Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element8), timeoutMs);
  }

  async expectElement8Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element8), timeoutMs);
  }

  async expectElement8Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element8), timeoutMs);
  }

  async expectElement8Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element8), count, timeoutMs);
  }

  async clickFY26Adoption2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption2));
  }

  async doubleClickFY26Adoption2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption2));
  }

  async longPressFY26Adoption2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption2));
  }

  async expectFY26Adoption2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.fY26Adoption2), value, timeoutMs);
  }

  async expectFY26Adoption2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.fY26Adoption2), timeoutMs);
  }

  async expectFY26Adoption2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.fY26Adoption2), timeoutMs);
  }

  async expectFY26Adoption2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.fY26Adoption2), timeoutMs);
  }

  async expectFY26Adoption2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.fY26Adoption2), timeoutMs);
  }

  async expectFY26Adoption2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.fY26Adoption2), timeoutMs);
  }

  async expectFY26Adoption2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.fY26Adoption2), count, timeoutMs);
  }

  async clickUKGDimensionsCoreAnalytics(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics));
  }

  async doubleClickUKGDimensionsCoreAnalytics(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics));
  }

  async longPressUKGDimensionsCoreAnalytics(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics));
  }

  async expectUKGDimensionsCoreAnalyticsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics), value, timeoutMs);
  }

  async expectUKGDimensionsCoreAnalyticsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics), timeoutMs);
  }

  async expectUKGDimensionsCoreAnalyticsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics), timeoutMs);
  }

  async expectUKGDimensionsCoreAnalyticsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics), timeoutMs);
  }

  async expectUKGDimensionsCoreAnalyticsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics), timeoutMs);
  }

  async expectUKGDimensionsCoreAnalyticsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics), timeoutMs);
  }

  async expectUKGDimensionsCoreAnalyticsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics), count, timeoutMs);
  }

  async clickUKGDimensions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions));
  }

  async doubleClickUKGDimensions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions));
  }

  async longPressUKGDimensions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions));
  }

  async expectUKGDimensionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGDimensions), value, timeoutMs);
  }

  async expectUKGDimensionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGDimensions), timeoutMs);
  }

  async expectUKGDimensionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGDimensions), timeoutMs);
  }

  async expectUKGDimensionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGDimensions), timeoutMs);
  }

  async expectUKGDimensionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGDimensions), timeoutMs);
  }

  async expectUKGDimensionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGDimensions), timeoutMs);
  }

  async expectUKGDimensionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGDimensions), count, timeoutMs);
  }

  async clickElement9(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element9));
  }

  async doubleClickElement9(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element9));
  }

  async longPressElement9(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element9));
  }

  async expectElement9Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element9), value, timeoutMs);
  }

  async expectElement9Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element9), timeoutMs);
  }

  async expectElement9Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element9), timeoutMs);
  }

  async expectElement9Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element9), timeoutMs);
  }

  async expectElement9Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element9), timeoutMs);
  }

  async expectElement9Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element9), timeoutMs);
  }

  async expectElement9Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element9), count, timeoutMs);
  }

  async clickElement10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element10));
  }

  async doubleClickElement10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element10));
  }

  async longPressElement10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element10));
  }

  async expectElement10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element10), value, timeoutMs);
  }

  async expectElement10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element10), timeoutMs);
  }

  async expectElement10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element10), timeoutMs);
  }

  async expectElement10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element10), timeoutMs);
  }

  async expectElement10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element10), timeoutMs);
  }

  async expectElement10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element10), timeoutMs);
  }

  async expectElement10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element10), count, timeoutMs);
  }

  async clickElement11(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element11));
  }

  async doubleClickElement11(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element11));
  }

  async longPressElement11(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element11));
  }

  async expectElement11Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element11), value, timeoutMs);
  }

  async expectElement11Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element11), timeoutMs);
  }

  async expectElement11Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element11), timeoutMs);
  }

  async expectElement11Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element11), timeoutMs);
  }

  async expectElement11Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element11), timeoutMs);
  }

  async expectElement11Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element11), timeoutMs);
  }

  async expectElement11Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element11), count, timeoutMs);
  }

  async clickElement12(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element12));
  }

  async doubleClickElement12(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element12));
  }

  async longPressElement12(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element12));
  }

  async expectElement12Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element12), value, timeoutMs);
  }

  async expectElement12Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element12), timeoutMs);
  }

  async expectElement12Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element12), timeoutMs);
  }

  async expectElement12Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element12), timeoutMs);
  }

  async expectElement12Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element12), timeoutMs);
  }

  async expectElement12Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element12), timeoutMs);
  }

  async expectElement12Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element12), count, timeoutMs);
  }

  async clickUKGDimensionsScheduling(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling));
  }

  async doubleClickUKGDimensionsScheduling(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling));
  }

  async longPressUKGDimensionsScheduling(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling));
  }

  async expectUKGDimensionsSchedulingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling), value, timeoutMs);
  }

  async expectUKGDimensionsSchedulingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling), timeoutMs);
  }

  async expectUKGDimensionsSchedulingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling), timeoutMs);
  }

  async expectUKGDimensionsSchedulingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling), timeoutMs);
  }

  async expectUKGDimensionsSchedulingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling), timeoutMs);
  }

  async expectUKGDimensionsSchedulingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling), timeoutMs);
  }

  async expectUKGDimensionsSchedulingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling), count, timeoutMs);
  }

  async clickUKGDimensions2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions2));
  }

  async doubleClickUKGDimensions2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions2));
  }

  async longPressUKGDimensions2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions2));
  }

  async expectUKGDimensions2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGDimensions2), value, timeoutMs);
  }

  async expectUKGDimensions2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGDimensions2), timeoutMs);
  }

  async expectUKGDimensions2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGDimensions2), timeoutMs);
  }

  async expectUKGDimensions2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGDimensions2), timeoutMs);
  }

  async expectUKGDimensions2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGDimensions2), timeoutMs);
  }

  async expectUKGDimensions2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGDimensions2), timeoutMs);
  }

  async expectUKGDimensions2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGDimensions2), count, timeoutMs);
  }

  async clickElement13(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element13));
  }

  async doubleClickElement13(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element13));
  }

  async longPressElement13(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element13));
  }

  async expectElement13Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element13), value, timeoutMs);
  }

  async expectElement13Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element13), timeoutMs);
  }

  async expectElement13Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element13), timeoutMs);
  }

  async expectElement13Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element13), timeoutMs);
  }

  async expectElement13Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element13), timeoutMs);
  }

  async expectElement13Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element13), timeoutMs);
  }

  async expectElement13Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element13), count, timeoutMs);
  }

  async clickElement14(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element14));
  }

  async doubleClickElement14(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element14));
  }

  async longPressElement14(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element14));
  }

  async expectElement14Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element14), value, timeoutMs);
  }

  async expectElement14Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element14), timeoutMs);
  }

  async expectElement14Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element14), timeoutMs);
  }

  async expectElement14Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element14), timeoutMs);
  }

  async expectElement14Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element14), timeoutMs);
  }

  async expectElement14Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element14), timeoutMs);
  }

  async expectElement14Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element14), count, timeoutMs);
  }

  async clickElement15(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element15));
  }

  async doubleClickElement15(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element15));
  }

  async longPressElement15(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element15));
  }

  async expectElement15Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element15), value, timeoutMs);
  }

  async expectElement15Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element15), timeoutMs);
  }

  async expectElement15Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element15), timeoutMs);
  }

  async expectElement15Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element15), timeoutMs);
  }

  async expectElement15Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element15), timeoutMs);
  }

  async expectElement15Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element15), timeoutMs);
  }

  async expectElement15Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element15), count, timeoutMs);
  }

  async clickElement16(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element16));
  }

  async doubleClickElement16(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element16));
  }

  async longPressElement16(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element16));
  }

  async expectElement16Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element16), value, timeoutMs);
  }

  async expectElement16Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element16), timeoutMs);
  }

  async expectElement16Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element16), timeoutMs);
  }

  async expectElement16Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element16), timeoutMs);
  }

  async expectElement16Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element16), timeoutMs);
  }

  async expectElement16Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element16), timeoutMs);
  }

  async expectElement16Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element16), count, timeoutMs);
  }

  async clickUKGDimensionsCompliance(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance));
  }

  async doubleClickUKGDimensionsCompliance(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance));
  }

  async longPressUKGDimensionsCompliance(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance));
  }

  async expectUKGDimensionsComplianceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance), value, timeoutMs);
  }

  async expectUKGDimensionsComplianceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance), timeoutMs);
  }

  async expectUKGDimensionsComplianceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance), timeoutMs);
  }

  async expectUKGDimensionsComplianceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance), timeoutMs);
  }

  async expectUKGDimensionsComplianceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance), timeoutMs);
  }

  async expectUKGDimensionsComplianceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance), timeoutMs);
  }

  async expectUKGDimensionsComplianceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance), count, timeoutMs);
  }

  async clickUKGDimensions3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions3));
  }

  async doubleClickUKGDimensions3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions3));
  }

  async longPressUKGDimensions3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensions3));
  }

  async expectUKGDimensions3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGDimensions3), value, timeoutMs);
  }

  async expectUKGDimensions3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGDimensions3), timeoutMs);
  }

  async expectUKGDimensions3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGDimensions3), timeoutMs);
  }

  async expectUKGDimensions3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGDimensions3), timeoutMs);
  }

  async expectUKGDimensions3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGDimensions3), timeoutMs);
  }

  async expectUKGDimensions3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGDimensions3), timeoutMs);
  }

  async expectUKGDimensions3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGDimensions3), count, timeoutMs);
  }

  async clickElement17(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element17));
  }

  async doubleClickElement17(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element17));
  }

  async longPressElement17(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element17));
  }

  async expectElement17Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element17), value, timeoutMs);
  }

  async expectElement17Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element17), timeoutMs);
  }

  async expectElement17Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element17), timeoutMs);
  }

  async expectElement17Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element17), timeoutMs);
  }

  async expectElement17Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element17), timeoutMs);
  }

  async expectElement17Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element17), timeoutMs);
  }

  async expectElement17Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element17), count, timeoutMs);
  }

  async clickElement18(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element18));
  }

  async doubleClickElement18(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element18));
  }

  async longPressElement18(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element18));
  }

  async expectElement18Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element18), value, timeoutMs);
  }

  async expectElement18Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element18), timeoutMs);
  }

  async expectElement18Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element18), timeoutMs);
  }

  async expectElement18Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element18), timeoutMs);
  }

  async expectElement18Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element18), timeoutMs);
  }

  async expectElement18Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element18), timeoutMs);
  }

  async expectElement18Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element18), count, timeoutMs);
  }

  async clickElement19(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element19));
  }

  async doubleClickElement19(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element19));
  }

  async longPressElement19(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element19));
  }

  async expectElement19Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element19), value, timeoutMs);
  }

  async expectElement19Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element19), timeoutMs);
  }

  async expectElement19Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element19), timeoutMs);
  }

  async expectElement19Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element19), timeoutMs);
  }

  async expectElement19Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element19), timeoutMs);
  }

  async expectElement19Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element19), timeoutMs);
  }

  async expectElement19Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element19), count, timeoutMs);
  }

  async clickElement20(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element20));
  }

  async doubleClickElement20(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element20));
  }

  async longPressElement20(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element20));
  }

  async expectElement20Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element20), value, timeoutMs);
  }

  async expectElement20Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element20), timeoutMs);
  }

  async expectElement20Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element20), timeoutMs);
  }

  async expectElement20Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element20), timeoutMs);
  }

  async expectElement20Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element20), timeoutMs);
  }

  async expectElement20Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element20), timeoutMs);
  }

  async expectElement20Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element20), count, timeoutMs);
  }

  async clickUKGReadyHR(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyHR));
  }

  async doubleClickUKGReadyHR(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyHR));
  }

  async longPressUKGReadyHR(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyHR));
  }

  async expectUKGReadyHRValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGReadyHR), value, timeoutMs);
  }

  async expectUKGReadyHREnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGReadyHR), timeoutMs);
  }

  async expectUKGReadyHRDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGReadyHR), timeoutMs);
  }

  async expectUKGReadyHRChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGReadyHR), timeoutMs);
  }

  async expectUKGReadyHRUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGReadyHR), timeoutMs);
  }

  async expectUKGReadyHRFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGReadyHR), timeoutMs);
  }

  async expectUKGReadyHRCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGReadyHR), count, timeoutMs);
  }

  async clickUKGReady(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReady));
  }

  async doubleClickUKGReady(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReady));
  }

  async longPressUKGReady(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReady));
  }

  async expectUKGReadyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGReady), value, timeoutMs);
  }

  async expectUKGReadyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGReady), timeoutMs);
  }

  async expectUKGReadyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGReady), timeoutMs);
  }

  async expectUKGReadyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGReady), timeoutMs);
  }

  async expectUKGReadyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGReady), timeoutMs);
  }

  async expectUKGReadyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGReady), timeoutMs);
  }

  async expectUKGReadyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGReady), count, timeoutMs);
  }

  async clickElement21(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element21));
  }

  async doubleClickElement21(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element21));
  }

  async longPressElement21(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element21));
  }

  async expectElement21Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element21), value, timeoutMs);
  }

  async expectElement21Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element21), timeoutMs);
  }

  async expectElement21Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element21), timeoutMs);
  }

  async expectElement21Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element21), timeoutMs);
  }

  async expectElement21Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element21), timeoutMs);
  }

  async expectElement21Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element21), timeoutMs);
  }

  async expectElement21Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element21), count, timeoutMs);
  }

  async clickElement22(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element22));
  }

  async doubleClickElement22(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element22));
  }

  async longPressElement22(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element22));
  }

  async expectElement22Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element22), value, timeoutMs);
  }

  async expectElement22Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element22), timeoutMs);
  }

  async expectElement22Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element22), timeoutMs);
  }

  async expectElement22Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element22), timeoutMs);
  }

  async expectElement22Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element22), timeoutMs);
  }

  async expectElement22Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element22), timeoutMs);
  }

  async expectElement22Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element22), count, timeoutMs);
  }

  async clickElement23(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element23));
  }

  async doubleClickElement23(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element23));
  }

  async longPressElement23(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element23));
  }

  async expectElement23Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element23), value, timeoutMs);
  }

  async expectElement23Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element23), timeoutMs);
  }

  async expectElement23Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element23), timeoutMs);
  }

  async expectElement23Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element23), timeoutMs);
  }

  async expectElement23Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element23), timeoutMs);
  }

  async expectElement23Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element23), timeoutMs);
  }

  async expectElement23Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element23), count, timeoutMs);
  }

  async clickElement24(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element24));
  }

  async doubleClickElement24(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element24));
  }

  async longPressElement24(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element24));
  }

  async expectElement24Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element24), value, timeoutMs);
  }

  async expectElement24Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element24), timeoutMs);
  }

  async expectElement24Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element24), timeoutMs);
  }

  async expectElement24Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element24), timeoutMs);
  }

  async expectElement24Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element24), timeoutMs);
  }

  async expectElement24Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element24), timeoutMs);
  }

  async expectElement24Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element24), count, timeoutMs);
  }

  async clickUKGReadyPayrollBenefits(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyPayrollBenefits));
  }

  async doubleClickUKGReadyPayrollBenefits(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyPayrollBenefits));
  }

  async longPressUKGReadyPayrollBenefits(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyPayrollBenefits));
  }

  async expectUKGReadyPayrollBenefitsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGReadyPayrollBenefits), value, timeoutMs);
  }

  async expectUKGReadyPayrollBenefitsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGReadyPayrollBenefits), timeoutMs);
  }

  async expectUKGReadyPayrollBenefitsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGReadyPayrollBenefits), timeoutMs);
  }

  async expectUKGReadyPayrollBenefitsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGReadyPayrollBenefits), timeoutMs);
  }

  async expectUKGReadyPayrollBenefitsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGReadyPayrollBenefits), timeoutMs);
  }

  async expectUKGReadyPayrollBenefitsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGReadyPayrollBenefits), timeoutMs);
  }

  async expectUKGReadyPayrollBenefitsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGReadyPayrollBenefits), count, timeoutMs);
  }

  async clickUKGReady2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReady2));
  }

  async doubleClickUKGReady2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReady2));
  }

  async longPressUKGReady2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReady2));
  }

  async expectUKGReady2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGReady2), value, timeoutMs);
  }

  async expectUKGReady2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGReady2), timeoutMs);
  }

  async expectUKGReady2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGReady2), timeoutMs);
  }

  async expectUKGReady2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGReady2), timeoutMs);
  }

  async expectUKGReady2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGReady2), timeoutMs);
  }

  async expectUKGReady2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGReady2), timeoutMs);
  }

  async expectUKGReady2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGReady2), count, timeoutMs);
  }

  async clickElement25(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element25));
  }

  async doubleClickElement25(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element25));
  }

  async longPressElement25(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element25));
  }

  async expectElement25Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element25), value, timeoutMs);
  }

  async expectElement25Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element25), timeoutMs);
  }

  async expectElement25Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element25), timeoutMs);
  }

  async expectElement25Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element25), timeoutMs);
  }

  async expectElement25Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element25), timeoutMs);
  }

  async expectElement25Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element25), timeoutMs);
  }

  async expectElement25Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element25), count, timeoutMs);
  }

  async clickElement26(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element26));
  }

  async doubleClickElement26(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element26));
  }

  async longPressElement26(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element26));
  }

  async expectElement26Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element26), value, timeoutMs);
  }

  async expectElement26Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element26), timeoutMs);
  }

  async expectElement26Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element26), timeoutMs);
  }

  async expectElement26Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element26), timeoutMs);
  }

  async expectElement26Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element26), timeoutMs);
  }

  async expectElement26Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element26), timeoutMs);
  }

  async expectElement26Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element26), count, timeoutMs);
  }

  async clickElement27(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element27));
  }

  async doubleClickElement27(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element27));
  }

  async longPressElement27(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element27));
  }

  async expectElement27Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element27), value, timeoutMs);
  }

  async expectElement27Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element27), timeoutMs);
  }

  async expectElement27Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element27), timeoutMs);
  }

  async expectElement27Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element27), timeoutMs);
  }

  async expectElement27Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element27), timeoutMs);
  }

  async expectElement27Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element27), timeoutMs);
  }

  async expectElement27Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element27), count, timeoutMs);
  }

  async clickElement28(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element28));
  }

  async doubleClickElement28(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element28));
  }

  async longPressElement28(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element28));
  }

  async expectElement28Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element28), value, timeoutMs);
  }

  async expectElement28Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element28), timeoutMs);
  }

  async expectElement28Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element28), timeoutMs);
  }

  async expectElement28Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element28), timeoutMs);
  }

  async expectElement28Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element28), timeoutMs);
  }

  async expectElement28Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element28), timeoutMs);
  }

  async expectElement28Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element28), count, timeoutMs);
  }

  async clickUKGReadyTime(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyTime));
  }

  async doubleClickUKGReadyTime(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyTime));
  }

  async longPressUKGReadyTime(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyTime));
  }

  async expectUKGReadyTimeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGReadyTime), value, timeoutMs);
  }

  async expectUKGReadyTimeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGReadyTime), timeoutMs);
  }

  async expectUKGReadyTimeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGReadyTime), timeoutMs);
  }

  async expectUKGReadyTimeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGReadyTime), timeoutMs);
  }

  async expectUKGReadyTimeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGReadyTime), timeoutMs);
  }

  async expectUKGReadyTimeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGReadyTime), timeoutMs);
  }

  async expectUKGReadyTimeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGReadyTime), count, timeoutMs);
  }

  async clickUKGReady3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReady3));
  }

  async doubleClickUKGReady3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReady3));
  }

  async longPressUKGReady3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReady3));
  }

  async expectUKGReady3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGReady3), value, timeoutMs);
  }

  async expectUKGReady3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGReady3), timeoutMs);
  }

  async expectUKGReady3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGReady3), timeoutMs);
  }

  async expectUKGReady3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGReady3), timeoutMs);
  }

  async expectUKGReady3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGReady3), timeoutMs);
  }

  async expectUKGReady3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGReady3), timeoutMs);
  }

  async expectUKGReady3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGReady3), count, timeoutMs);
  }

  async clickElement29(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element29));
  }

  async doubleClickElement29(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element29));
  }

  async longPressElement29(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element29));
  }

  async expectElement29Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element29), value, timeoutMs);
  }

  async expectElement29Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element29), timeoutMs);
  }

  async expectElement29Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element29), timeoutMs);
  }

  async expectElement29Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element29), timeoutMs);
  }

  async expectElement29Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element29), timeoutMs);
  }

  async expectElement29Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element29), timeoutMs);
  }

  async expectElement29Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element29), count, timeoutMs);
  }

  async clickElement30(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element30));
  }

  async doubleClickElement30(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element30));
  }

  async longPressElement30(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element30));
  }

  async expectElement30Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element30), value, timeoutMs);
  }

  async expectElement30Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element30), timeoutMs);
  }

  async expectElement30Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element30), timeoutMs);
  }

  async expectElement30Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element30), timeoutMs);
  }

  async expectElement30Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element30), timeoutMs);
  }

  async expectElement30Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element30), timeoutMs);
  }

  async expectElement30Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element30), count, timeoutMs);
  }

  async clickElement31(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element31));
  }

  async doubleClickElement31(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element31));
  }

  async longPressElement31(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element31));
  }

  async expectElement31Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element31), value, timeoutMs);
  }

  async expectElement31Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element31), timeoutMs);
  }

  async expectElement31Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element31), timeoutMs);
  }

  async expectElement31Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element31), timeoutMs);
  }

  async expectElement31Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element31), timeoutMs);
  }

  async expectElement31Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element31), timeoutMs);
  }

  async expectElement31Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element31), count, timeoutMs);
  }

  async clickElement32(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element32));
  }

  async doubleClickElement32(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element32));
  }

  async longPressElement32(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element32));
  }

  async expectElement32Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element32), value, timeoutMs);
  }

  async expectElement32Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element32), timeoutMs);
  }

  async expectElement32Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element32), timeoutMs);
  }

  async expectElement32Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element32), timeoutMs);
  }

  async expectElement32Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element32), timeoutMs);
  }

  async expectElement32Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element32), timeoutMs);
  }

  async expectElement32Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element32), count, timeoutMs);
  }

  async clickCoreProductAdoptionTrend(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend));
  }

  async doubleClickCoreProductAdoptionTrend(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend));
  }

  async longPressCoreProductAdoptionTrend(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend));
  }

  async expectCoreProductAdoptionTrendValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), value, timeoutMs);
  }

  async expectCoreProductAdoptionTrendEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), timeoutMs);
  }

  async expectCoreProductAdoptionTrendDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), timeoutMs);
  }

  async expectCoreProductAdoptionTrendChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), timeoutMs);
  }

  async expectCoreProductAdoptionTrendUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), timeoutMs);
  }

  async expectCoreProductAdoptionTrendFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), timeoutMs);
  }

  async expectCoreProductAdoptionTrendCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), count, timeoutMs);
  }

  async clickFY25Adoption2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption2));
  }

  async doubleClickFY25Adoption2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption2));
  }

  async longPressFY25Adoption2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption2));
  }

  async expectFY25Adoption2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.fY25Adoption2), value, timeoutMs);
  }

  async expectFY25Adoption2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.fY25Adoption2), timeoutMs);
  }

  async expectFY25Adoption2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.fY25Adoption2), timeoutMs);
  }

  async expectFY25Adoption2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.fY25Adoption2), timeoutMs);
  }

  async expectFY25Adoption2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.fY25Adoption2), timeoutMs);
  }

  async expectFY25Adoption2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.fY25Adoption2), timeoutMs);
  }

  async expectFY25Adoption2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.fY25Adoption2), count, timeoutMs);
  }

  async clickFY26Adoption3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption3));
  }

  async doubleClickFY26Adoption3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption3));
  }

  async longPressFY26Adoption3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption3));
  }

  async expectFY26Adoption3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.fY26Adoption3), value, timeoutMs);
  }

  async expectFY26Adoption3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.fY26Adoption3), timeoutMs);
  }

  async expectFY26Adoption3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.fY26Adoption3), timeoutMs);
  }

  async expectFY26Adoption3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.fY26Adoption3), timeoutMs);
  }

  async expectFY26Adoption3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.fY26Adoption3), timeoutMs);
  }

  async expectFY26Adoption3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.fY26Adoption3), timeoutMs);
  }

  async expectFY26Adoption3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.fY26Adoption3), count, timeoutMs);
  }

  async clickProductAdoptionFY25(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.productAdoptionFY25));
  }

  async doubleClickProductAdoptionFY25(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.productAdoptionFY25));
  }

  async longPressProductAdoptionFY25(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.productAdoptionFY25));
  }

  async expectProductAdoptionFY25Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), value, timeoutMs);
  }

  async expectProductAdoptionFY25Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), timeoutMs);
  }

  async expectProductAdoptionFY25Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), timeoutMs);
  }

  async expectProductAdoptionFY25Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), timeoutMs);
  }

  async expectProductAdoptionFY25Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), timeoutMs);
  }

  async expectProductAdoptionFY25Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), timeoutMs);
  }

  async expectProductAdoptionFY25Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), count, timeoutMs);
  }

  async clickProduct2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.product2));
  }

  async doubleClickProduct2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.product2));
  }

  async longPressProduct2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.product2));
  }

  async expectProduct2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.product2), value, timeoutMs);
  }

  async expectProduct2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.product2), timeoutMs);
  }

  async expectProduct2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.product2), timeoutMs);
  }

  async expectProduct2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.product2), timeoutMs);
  }

  async expectProduct2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.product2), timeoutMs);
  }

  async expectProduct2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.product2), timeoutMs);
  }

  async expectProduct2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.product2), count, timeoutMs);
  }

  async clickUKGBenchmark2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmark2));
  }

  async doubleClickUKGBenchmark2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmark2));
  }

  async longPressUKGBenchmark2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGBenchmark2));
  }

  async expectUKGBenchmark2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGBenchmark2), value, timeoutMs);
  }

  async expectUKGBenchmark2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGBenchmark2), timeoutMs);
  }

  async expectUKGBenchmark2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGBenchmark2), timeoutMs);
  }

  async expectUKGBenchmark2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGBenchmark2), timeoutMs);
  }

  async expectUKGBenchmark2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGBenchmark2), timeoutMs);
  }

  async expectUKGBenchmark2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGBenchmark2), timeoutMs);
  }

  async expectUKGBenchmark2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGBenchmark2), count, timeoutMs);
  }

  async clickFY25Adoption3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption3));
  }

  async doubleClickFY25Adoption3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption3));
  }

  async longPressFY25Adoption3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption3));
  }

  async expectFY25Adoption3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.fY25Adoption3), value, timeoutMs);
  }

  async expectFY25Adoption3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.fY25Adoption3), timeoutMs);
  }

  async expectFY25Adoption3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.fY25Adoption3), timeoutMs);
  }

  async expectFY25Adoption3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.fY25Adoption3), timeoutMs);
  }

  async expectFY25Adoption3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.fY25Adoption3), timeoutMs);
  }

  async expectFY25Adoption3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.fY25Adoption3), timeoutMs);
  }

  async expectFY25Adoption3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.fY25Adoption3), count, timeoutMs);
  }

  async clickFY26Adoption4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption4));
  }

  async doubleClickFY26Adoption4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption4));
  }

  async longPressFY26Adoption4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption4));
  }

  async expectFY26Adoption4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.fY26Adoption4), value, timeoutMs);
  }

  async expectFY26Adoption4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.fY26Adoption4), timeoutMs);
  }

  async expectFY26Adoption4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.fY26Adoption4), timeoutMs);
  }

  async expectFY26Adoption4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.fY26Adoption4), timeoutMs);
  }

  async expectFY26Adoption4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.fY26Adoption4), timeoutMs);
  }

  async expectFY26Adoption4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.fY26Adoption4), timeoutMs);
  }

  async expectFY26Adoption4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.fY26Adoption4), count, timeoutMs);
  }

  async clickLicenses(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.licenses));
  }

  async doubleClickLicenses(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.licenses));
  }

  async longPressLicenses(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.licenses));
  }

  async expectLicensesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.licenses), value, timeoutMs);
  }

  async expectLicensesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.licenses), timeoutMs);
  }

  async expectLicensesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.licenses), timeoutMs);
  }

  async expectLicensesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.licenses), timeoutMs);
  }

  async expectLicensesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.licenses), timeoutMs);
  }

  async expectLicensesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.licenses), timeoutMs);
  }

  async expectLicensesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.licenses), count, timeoutMs);
  }

  async clickAvgMonthlyUsers2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers2));
  }

  async doubleClickAvgMonthlyUsers2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers2));
  }

  async longPressAvgMonthlyUsers2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers2));
  }

  async expectAvgMonthlyUsers2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers2), value, timeoutMs);
  }

  async expectAvgMonthlyUsers2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers2), timeoutMs);
  }

  async expectAvgMonthlyUsers2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers2), timeoutMs);
  }

  async expectAvgMonthlyUsers2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers2), timeoutMs);
  }

  async expectAvgMonthlyUsers2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers2), timeoutMs);
  }

  async expectAvgMonthlyUsers2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers2), timeoutMs);
  }

  async expectAvgMonthlyUsers2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers2), count, timeoutMs);
  }

  async clickBilledQuantityByMonth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth));
  }

  async doubleClickBilledQuantityByMonth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth));
  }

  async longPressBilledQuantityByMonth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth));
  }

  async expectBilledQuantityByMonthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), value, timeoutMs);
  }

  async expectBilledQuantityByMonthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), timeoutMs);
  }

  async expectBilledQuantityByMonthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), timeoutMs);
  }

  async expectBilledQuantityByMonthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), timeoutMs);
  }

  async expectBilledQuantityByMonthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), timeoutMs);
  }

  async expectBilledQuantityByMonthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), timeoutMs);
  }

  async expectBilledQuantityByMonthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), count, timeoutMs);
  }

  async clickMinQuantity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.minQuantity));
  }

  async doubleClickMinQuantity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.minQuantity));
  }

  async longPressMinQuantity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.minQuantity));
  }

  async expectMinQuantityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.minQuantity), value, timeoutMs);
  }

  async expectMinQuantityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.minQuantity), timeoutMs);
  }

  async expectMinQuantityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.minQuantity), timeoutMs);
  }

  async expectMinQuantityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.minQuantity), timeoutMs);
  }

  async expectMinQuantityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.minQuantity), timeoutMs);
  }

  async expectMinQuantityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.minQuantity), timeoutMs);
  }

  async expectMinQuantityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.minQuantity), count, timeoutMs);
  }

  async clickBilledQuantity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantity));
  }

  async doubleClickBilledQuantity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantity));
  }

  async longPressBilledQuantity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantity));
  }

  async expectBilledQuantityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.billedQuantity), value, timeoutMs);
  }

  async expectBilledQuantityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.billedQuantity), timeoutMs);
  }

  async expectBilledQuantityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.billedQuantity), timeoutMs);
  }

  async expectBilledQuantityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.billedQuantity), timeoutMs);
  }

  async expectBilledQuantityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.billedQuantity), timeoutMs);
  }

  async expectBilledQuantityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.billedQuantity), timeoutMs);
  }

  async expectBilledQuantityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.billedQuantity), count, timeoutMs);
  }

  async clickPeerComparison(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.peerComparison));
  }

  async doubleClickPeerComparison(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.peerComparison));
  }

  async longPressPeerComparison(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.peerComparison));
  }

  async expectPeerComparisonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.peerComparison), value, timeoutMs);
  }

  async expectPeerComparisonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.peerComparison), timeoutMs);
  }

  async expectPeerComparisonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.peerComparison), timeoutMs);
  }

  async expectPeerComparisonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.peerComparison), timeoutMs);
  }

  async expectPeerComparisonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.peerComparison), timeoutMs);
  }

  async expectPeerComparisonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.peerComparison), timeoutMs);
  }

  async expectPeerComparisonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.peerComparison), count, timeoutMs);
  }

  async clickOverallRanking(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.overallRanking));
  }

  async doubleClickOverallRanking(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.overallRanking));
  }

  async longPressOverallRanking(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.overallRanking));
  }

  async expectOverallRankingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.overallRanking), value, timeoutMs);
  }

  async expectOverallRankingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.overallRanking), timeoutMs);
  }

  async expectOverallRankingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.overallRanking), timeoutMs);
  }

  async expectOverallRankingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.overallRanking), timeoutMs);
  }

  async expectOverallRankingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.overallRanking), timeoutMs);
  }

  async expectOverallRankingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.overallRanking), timeoutMs);
  }

  async expectOverallRankingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.overallRanking), count, timeoutMs);
  }

  async clickTop20(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.top20));
  }

  async doubleClickTop20(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.top20));
  }

  async longPressTop20(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.top20));
  }

  async expectTop20Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.top20), value, timeoutMs);
  }

  async expectTop20Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.top20), timeoutMs);
  }

  async expectTop20Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.top20), timeoutMs);
  }

  async expectTop20Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.top20), timeoutMs);
  }

  async expectTop20Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.top20), timeoutMs);
  }

  async expectTop20Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.top20), timeoutMs);
  }

  async expectTop20Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.top20), count, timeoutMs);
  }

  async clickEnterprisePeersIndustry(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry));
  }

  async doubleClickEnterprisePeersIndustry(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry));
  }

  async longPressEnterprisePeersIndustry(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry));
  }

  async expectEnterprisePeersIndustryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), value, timeoutMs);
  }

  async expectEnterprisePeersIndustryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), timeoutMs);
  }

  async expectEnterprisePeersIndustryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), timeoutMs);
  }

  async expectEnterprisePeersIndustryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), timeoutMs);
  }

  async expectEnterprisePeersIndustryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), timeoutMs);
  }

  async expectEnterprisePeersIndustryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), timeoutMs);
  }

  async expectEnterprisePeersIndustryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), count, timeoutMs);
  }

  async clickProductsVsPeerAvg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg));
  }

  async doubleClickProductsVsPeerAvg(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg));
  }

  async longPressProductsVsPeerAvg(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg));
  }

  async expectProductsVsPeerAvgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), value, timeoutMs);
  }

  async expectProductsVsPeerAvgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), timeoutMs);
  }

  async expectProductsVsPeerAvgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), timeoutMs);
  }

  async expectProductsVsPeerAvgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), timeoutMs);
  }

  async expectProductsVsPeerAvgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), timeoutMs);
  }

  async expectProductsVsPeerAvgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), timeoutMs);
  }

  async expectProductsVsPeerAvgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), count, timeoutMs);
  }

  async clickTop10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.top10));
  }

  async doubleClickTop10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.top10));
  }

  async longPressTop10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.top10));
  }

  async expectTop10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.top10), value, timeoutMs);
  }

  async expectTop10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.top10), timeoutMs);
  }

  async expectTop10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.top10), timeoutMs);
  }

  async expectTop10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.top10), timeoutMs);
  }

  async expectTop10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.top10), timeoutMs);
  }

  async expectTop10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.top10), timeoutMs);
  }

  async expectTop10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.top10), count, timeoutMs);
  }

  async clickUKGDimensionsCoreAnalytics2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics2));
  }

  async doubleClickUKGDimensionsCoreAnalytics2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics2));
  }

  async longPressUKGDimensionsCoreAnalytics2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics2));
  }

  async expectUKGDimensionsCoreAnalytics2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics2), value, timeoutMs);
  }

  async expectUKGDimensionsCoreAnalytics2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics2), timeoutMs);
  }

  async expectUKGDimensionsCoreAnalytics2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics2), timeoutMs);
  }

  async expectUKGDimensionsCoreAnalytics2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics2), timeoutMs);
  }

  async expectUKGDimensionsCoreAnalytics2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics2), timeoutMs);
  }

  async expectUKGDimensionsCoreAnalytics2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics2), timeoutMs);
  }

  async expectUKGDimensionsCoreAnalytics2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGDimensionsCoreAnalytics2), count, timeoutMs);
  }

  async clickPts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.Pts));
  }

  async doubleClickPts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.Pts));
  }

  async longPressPts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.Pts));
  }

  async expectPtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.Pts), value, timeoutMs);
  }

  async expectPtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.Pts), timeoutMs);
  }

  async expectPtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.Pts), timeoutMs);
  }

  async expectPtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.Pts), timeoutMs);
  }

  async expectPtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.Pts), timeoutMs);
  }

  async expectPtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.Pts), timeoutMs);
  }

  async expectPtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.Pts), count, timeoutMs);
  }

  async clickUKGDimensionsScheduling2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling2));
  }

  async doubleClickUKGDimensionsScheduling2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling2));
  }

  async longPressUKGDimensionsScheduling2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling2));
  }

  async expectUKGDimensionsScheduling2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling2), value, timeoutMs);
  }

  async expectUKGDimensionsScheduling2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling2), timeoutMs);
  }

  async expectUKGDimensionsScheduling2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling2), timeoutMs);
  }

  async expectUKGDimensionsScheduling2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling2), timeoutMs);
  }

  async expectUKGDimensionsScheduling2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling2), timeoutMs);
  }

  async expectUKGDimensionsScheduling2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling2), timeoutMs);
  }

  async expectUKGDimensionsScheduling2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGDimensionsScheduling2), count, timeoutMs);
  }

  async clickPts2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.Pts2));
  }

  async doubleClickPts2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.Pts2));
  }

  async longPressPts2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.Pts2));
  }

  async expectPts2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.Pts2), value, timeoutMs);
  }

  async expectPts2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.Pts2), timeoutMs);
  }

  async expectPts2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.Pts2), timeoutMs);
  }

  async expectPts2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.Pts2), timeoutMs);
  }

  async expectPts2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.Pts2), timeoutMs);
  }

  async expectPts2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.Pts2), timeoutMs);
  }

  async expectPts2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.Pts2), count, timeoutMs);
  }

  async clickUKGReadyHR2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyHR2));
  }

  async doubleClickUKGReadyHR2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyHR2));
  }

  async longPressUKGReadyHR2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyHR2));
  }

  async expectUKGReadyHR2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGReadyHR2), value, timeoutMs);
  }

  async expectUKGReadyHR2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGReadyHR2), timeoutMs);
  }

  async expectUKGReadyHR2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGReadyHR2), timeoutMs);
  }

  async expectUKGReadyHR2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGReadyHR2), timeoutMs);
  }

  async expectUKGReadyHR2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGReadyHR2), timeoutMs);
  }

  async expectUKGReadyHR2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGReadyHR2), timeoutMs);
  }

  async expectUKGReadyHR2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGReadyHR2), count, timeoutMs);
  }

  async clickPts3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.Pts3));
  }

  async doubleClickPts3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.Pts3));
  }

  async longPressPts3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.Pts3));
  }

  async expectPts3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.Pts3), value, timeoutMs);
  }

  async expectPts3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.Pts3), timeoutMs);
  }

  async expectPts3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.Pts3), timeoutMs);
  }

  async expectPts3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.Pts3), timeoutMs);
  }

  async expectPts3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.Pts3), timeoutMs);
  }

  async expectPts3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.Pts3), timeoutMs);
  }

  async expectPts3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.Pts3), count, timeoutMs);
  }

  async clickTop25(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.top25));
  }

  async doubleClickTop25(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.top25));
  }

  async longPressTop25(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.top25));
  }

  async expectTop25Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.top25), value, timeoutMs);
  }

  async expectTop25Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.top25), timeoutMs);
  }

  async expectTop25Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.top25), timeoutMs);
  }

  async expectTop25Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.top25), timeoutMs);
  }

  async expectTop25Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.top25), timeoutMs);
  }

  async expectTop25Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.top25), timeoutMs);
  }

  async expectTop25Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.top25), count, timeoutMs);
  }

  async clickUKGDimensionsCompliance2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance2));
  }

  async doubleClickUKGDimensionsCompliance2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance2));
  }

  async longPressUKGDimensionsCompliance2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance2));
  }

  async expectUKGDimensionsCompliance2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance2), value, timeoutMs);
  }

  async expectUKGDimensionsCompliance2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance2), timeoutMs);
  }

  async expectUKGDimensionsCompliance2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance2), timeoutMs);
  }

  async expectUKGDimensionsCompliance2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance2), timeoutMs);
  }

  async expectUKGDimensionsCompliance2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance2), timeoutMs);
  }

  async expectUKGDimensionsCompliance2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance2), timeoutMs);
  }

  async expectUKGDimensionsCompliance2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGDimensionsCompliance2), count, timeoutMs);
  }

  async clickPts4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.Pts4));
  }

  async doubleClickPts4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.Pts4));
  }

  async longPressPts4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.Pts4));
  }

  async expectPts4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.Pts4), value, timeoutMs);
  }

  async expectPts4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.Pts4), timeoutMs);
  }

  async expectPts4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.Pts4), timeoutMs);
  }

  async expectPts4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.Pts4), timeoutMs);
  }

  async expectPts4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.Pts4), timeoutMs);
  }

  async expectPts4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.Pts4), timeoutMs);
  }

  async expectPts4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.Pts4), count, timeoutMs);
  }

  async clickBottom25(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.bottom25));
  }

  async doubleClickBottom25(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.bottom25));
  }

  async longPressBottom25(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.bottom25));
  }

  async expectBottom25Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.bottom25), value, timeoutMs);
  }

  async expectBottom25Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.bottom25), timeoutMs);
  }

  async expectBottom25Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.bottom25), timeoutMs);
  }

  async expectBottom25Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.bottom25), timeoutMs);
  }

  async expectBottom25Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.bottom25), timeoutMs);
  }

  async expectBottom25Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.bottom25), timeoutMs);
  }

  async expectBottom25Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.bottom25), count, timeoutMs);
  }

  async clickUKGReadyTime2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyTime2));
  }

  async doubleClickUKGReadyTime2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyTime2));
  }

  async longPressUKGReadyTime2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.uKGReadyTime2));
  }

  async expectUKGReadyTime2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.uKGReadyTime2), value, timeoutMs);
  }

  async expectUKGReadyTime2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.uKGReadyTime2), timeoutMs);
  }

  async expectUKGReadyTime2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.uKGReadyTime2), timeoutMs);
  }

  async expectUKGReadyTime2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.uKGReadyTime2), timeoutMs);
  }

  async expectUKGReadyTime2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.uKGReadyTime2), timeoutMs);
  }

  async expectUKGReadyTime2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.uKGReadyTime2), timeoutMs);
  }

  async expectUKGReadyTime2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.uKGReadyTime2), count, timeoutMs);
  }

  async clickPts5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.Pts5));
  }

  async doubleClickPts5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.Pts5));
  }

  async longPressPts5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.Pts5));
  }

  async expectPts5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.Pts5), value, timeoutMs);
  }

  async expectPts5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.Pts5), timeoutMs);
  }

  async expectPts5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.Pts5), timeoutMs);
  }

  async expectPts5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.Pts5), timeoutMs);
  }

  async expectPts5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.Pts5), timeoutMs);
  }

  async expectPts5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.Pts5), timeoutMs);
  }

  async expectPts5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.Pts5), count, timeoutMs);
  }

  async clickAdoptionSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionSummary));
  }

  async doubleClickAdoptionSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionSummary));
  }

  async longPressAdoptionSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionSummary));
  }

  async expectAdoptionSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.adoptionSummary), value, timeoutMs);
  }

  async expectAdoptionSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.adoptionSummary), timeoutMs);
  }

  async expectAdoptionSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.adoptionSummary), timeoutMs);
  }

  async expectAdoptionSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.adoptionSummary), timeoutMs);
  }

  async expectAdoptionSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.adoptionSummary), timeoutMs);
  }

  async expectAdoptionSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.adoptionSummary), timeoutMs);
  }

  async expectAdoptionSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.adoptionSummary), count, timeoutMs);
  }

  async clickFY26Adoption5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption5));
  }

  async doubleClickFY26Adoption5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption5));
  }

  async longPressFY26Adoption5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption5));
  }

  async expectFY26Adoption5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.fY26Adoption5), value, timeoutMs);
  }

  async expectFY26Adoption5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.fY26Adoption5), timeoutMs);
  }

  async expectFY26Adoption5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.fY26Adoption5), timeoutMs);
  }

  async expectFY26Adoption5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.fY26Adoption5), timeoutMs);
  }

  async expectFY26Adoption5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.fY26Adoption5), timeoutMs);
  }

  async expectFY26Adoption5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.fY26Adoption5), timeoutMs);
  }

  async expectFY26Adoption5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.fY26Adoption5), count, timeoutMs);
  }

  async clickElement33(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element33));
  }

  async doubleClickElement33(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element33));
  }

  async longPressElement33(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element33));
  }

  async expectElement33Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element33), value, timeoutMs);
  }

  async expectElement33Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element33), timeoutMs);
  }

  async expectElement33Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element33), timeoutMs);
  }

  async expectElement33Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element33), timeoutMs);
  }

  async expectElement33Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element33), timeoutMs);
  }

  async expectElement33Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element33), timeoutMs);
  }

  async expectElement33Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element33), count, timeoutMs);
  }

  async clickFY25Adoption4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption4));
  }

  async doubleClickFY25Adoption4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption4));
  }

  async longPressFY25Adoption4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption4));
  }

  async expectFY25Adoption4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.fY25Adoption4), value, timeoutMs);
  }

  async expectFY25Adoption4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.fY25Adoption4), timeoutMs);
  }

  async expectFY25Adoption4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.fY25Adoption4), timeoutMs);
  }

  async expectFY25Adoption4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.fY25Adoption4), timeoutMs);
  }

  async expectFY25Adoption4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.fY25Adoption4), timeoutMs);
  }

  async expectFY25Adoption4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.fY25Adoption4), timeoutMs);
  }

  async expectFY25Adoption4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.fY25Adoption4), count, timeoutMs);
  }

  async clickElement34(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element34));
  }

  async doubleClickElement34(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element34));
  }

  async longPressElement34(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element34));
  }

  async expectElement34Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element34), value, timeoutMs);
  }

  async expectElement34Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element34), timeoutMs);
  }

  async expectElement34Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element34), timeoutMs);
  }

  async expectElement34Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element34), timeoutMs);
  }

  async expectElement34Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element34), timeoutMs);
  }

  async expectElement34Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element34), timeoutMs);
  }

  async expectElement34Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element34), count, timeoutMs);
  }

  async clickYoYGrowth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.yoYGrowth));
  }

  async doubleClickYoYGrowth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.yoYGrowth));
  }

  async longPressYoYGrowth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.yoYGrowth));
  }

  async expectYoYGrowthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.yoYGrowth), value, timeoutMs);
  }

  async expectYoYGrowthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.yoYGrowth), timeoutMs);
  }

  async expectYoYGrowthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.yoYGrowth), timeoutMs);
  }

  async expectYoYGrowthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.yoYGrowth), timeoutMs);
  }

  async expectYoYGrowthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.yoYGrowth), timeoutMs);
  }

  async expectYoYGrowthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.yoYGrowth), timeoutMs);
  }

  async expectYoYGrowthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.yoYGrowth), count, timeoutMs);
  }

  async clickElement35(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element35));
  }

  async doubleClickElement35(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element35));
  }

  async longPressElement35(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element35));
  }

  async expectElement35Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element35), value, timeoutMs);
  }

  async expectElement35Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element35), timeoutMs);
  }

  async expectElement35Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element35), timeoutMs);
  }

  async expectElement35Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element35), timeoutMs);
  }

  async expectElement35Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element35), timeoutMs);
  }

  async expectElement35Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element35), timeoutMs);
  }

  async expectElement35Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element35), count, timeoutMs);
  }

  async clickActiveProducts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.activeProducts));
  }

  async doubleClickActiveProducts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.activeProducts));
  }

  async longPressActiveProducts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.activeProducts));
  }

  async expectActiveProductsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.activeProducts), value, timeoutMs);
  }

  async expectActiveProductsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.activeProducts), timeoutMs);
  }

  async expectActiveProductsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.activeProducts), timeoutMs);
  }

  async expectActiveProductsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.activeProducts), timeoutMs);
  }

  async expectActiveProductsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.activeProducts), timeoutMs);
  }

  async expectActiveProductsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.activeProducts), timeoutMs);
  }

  async expectActiveProductsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.activeProducts), count, timeoutMs);
  }

  async clickElement36(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element36));
  }

  async doubleClickElement36(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element36));
  }

  async longPressElement36(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element36));
  }

  async expectElement36Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element36), value, timeoutMs);
  }

  async expectElement36Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element36), timeoutMs);
  }

  async expectElement36Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element36), timeoutMs);
  }

  async expectElement36Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element36), timeoutMs);
  }

  async expectElement36Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element36), timeoutMs);
  }

  async expectElement36Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element36), timeoutMs);
  }

  async expectElement36Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element36), count, timeoutMs);
  }

  async clickAvgMonthlyUsers3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers3));
  }

  async doubleClickAvgMonthlyUsers3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers3));
  }

  async longPressAvgMonthlyUsers3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers3));
  }

  async expectAvgMonthlyUsers3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers3), value, timeoutMs);
  }

  async expectAvgMonthlyUsers3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers3), timeoutMs);
  }

  async expectAvgMonthlyUsers3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers3), timeoutMs);
  }

  async expectAvgMonthlyUsers3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers3), timeoutMs);
  }

  async expectAvgMonthlyUsers3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers3), timeoutMs);
  }

  async expectAvgMonthlyUsers3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers3), timeoutMs);
  }

  async expectAvgMonthlyUsers3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers3), count, timeoutMs);
  }

  async clickElement37(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element37));
  }

  async doubleClickElement37(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element37));
  }

  async longPressElement37(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element37));
  }

  async expectElement37Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element37), value, timeoutMs);
  }

  async expectElement37Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element37), timeoutMs);
  }

  async expectElement37Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element37), timeoutMs);
  }

  async expectElement37Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element37), timeoutMs);
  }

  async expectElement37Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element37), timeoutMs);
  }

  async expectElement37Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element37), timeoutMs);
  }

  async expectElement37Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element37), count, timeoutMs);
  }

  async clickTopDriver(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.topDriver));
  }

  async doubleClickTopDriver(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.topDriver));
  }

  async longPressTopDriver(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.topDriver));
  }

  async expectTopDriverValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.topDriver), value, timeoutMs);
  }

  async expectTopDriverEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.topDriver), timeoutMs);
  }

  async expectTopDriverDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.topDriver), timeoutMs);
  }

  async expectTopDriverChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.topDriver), timeoutMs);
  }

  async expectTopDriverUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.topDriver), timeoutMs);
  }

  async expectTopDriverFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.topDriver), timeoutMs);
  }

  async expectTopDriverCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.topDriver), count, timeoutMs);
  }

  async clickDimensionCore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.dimensionCore));
  }

  async doubleClickDimensionCore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.dimensionCore));
  }

  async longPressDimensionCore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.dimensionCore));
  }

  async expectDimensionCoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.dimensionCore), value, timeoutMs);
  }

  async expectDimensionCoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.dimensionCore), timeoutMs);
  }

  async expectDimensionCoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.dimensionCore), timeoutMs);
  }

  async expectDimensionCoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.dimensionCore), timeoutMs);
  }

  async expectDimensionCoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.dimensionCore), timeoutMs);
  }

  async expectDimensionCoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.dimensionCore), timeoutMs);
  }

  async expectDimensionCoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.dimensionCore), count, timeoutMs);
  }

  async clickDesktopMobile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.desktopMobile));
  }

  async doubleClickDesktopMobile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.desktopMobile));
  }

  async longPressDesktopMobile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.desktopMobile));
  }

  async expectDesktopMobileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.desktopMobile), value, timeoutMs);
  }

  async expectDesktopMobileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.desktopMobile), timeoutMs);
  }

  async expectDesktopMobileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.desktopMobile), timeoutMs);
  }

  async expectDesktopMobileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.desktopMobile), timeoutMs);
  }

  async expectDesktopMobileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.desktopMobile), timeoutMs);
  }

  async expectDesktopMobileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.desktopMobile), timeoutMs);
  }

  async expectDesktopMobileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.desktopMobile), count, timeoutMs);
  }

  async clickElement38(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element38));
  }

  async doubleClickElement38(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element38));
  }

  async longPressElement38(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element38));
  }

  async expectElement38Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element38), value, timeoutMs);
  }

  async expectElement38Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element38), timeoutMs);
  }

  async expectElement38Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element38), timeoutMs);
  }

  async expectElement38Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element38), timeoutMs);
  }

  async expectElement38Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element38), timeoutMs);
  }

  async expectElement38Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element38), timeoutMs);
  }

  async expectElement38Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element38), count, timeoutMs);
  }

  async clickBilledQty(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.billedQty));
  }

  async doubleClickBilledQty(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.billedQty));
  }

  async longPressBilledQty(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.billedQty));
  }

  async expectBilledQtyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.billedQty), value, timeoutMs);
  }

  async expectBilledQtyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.billedQty), timeoutMs);
  }

  async expectBilledQtyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.billedQty), timeoutMs);
  }

  async expectBilledQtyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.billedQty), timeoutMs);
  }

  async expectBilledQtyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.billedQty), timeoutMs);
  }

  async expectBilledQtyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.billedQty), timeoutMs);
  }

  async expectBilledQtyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.billedQty), count, timeoutMs);
  }

  async clickElement39(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element39));
  }

  async doubleClickElement39(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element39));
  }

  async longPressElement39(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element39));
  }

  async expectElement39Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element39), value, timeoutMs);
  }

  async expectElement39Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element39), timeoutMs);
  }

  async expectElement39Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element39), timeoutMs);
  }

  async expectElement39Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element39), timeoutMs);
  }

  async expectElement39Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element39), timeoutMs);
  }

  async expectElement39Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element39), timeoutMs);
  }

  async expectElement39Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element39), count, timeoutMs);
  }

  async clickMinContracted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.minContracted));
  }

  async doubleClickMinContracted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.minContracted));
  }

  async longPressMinContracted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.minContracted));
  }

  async expectMinContractedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.minContracted), value, timeoutMs);
  }

  async expectMinContractedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.minContracted), timeoutMs);
  }

  async expectMinContractedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.minContracted), timeoutMs);
  }

  async expectMinContractedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.minContracted), timeoutMs);
  }

  async expectMinContractedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.minContracted), timeoutMs);
  }

  async expectMinContractedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.minContracted), timeoutMs);
  }

  async expectMinContractedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.minContracted), count, timeoutMs);
  }

  async clickElement40(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element40));
  }

  async doubleClickElement40(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element40));
  }

  async longPressElement40(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element40));
  }

  async expectElement40Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element40), value, timeoutMs);
  }

  async expectElement40Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element40), timeoutMs);
  }

  async expectElement40Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element40), timeoutMs);
  }

  async expectElement40Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element40), timeoutMs);
  }

  async expectElement40Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element40), timeoutMs);
  }

  async expectElement40Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element40), timeoutMs);
  }

  async expectElement40Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element40), count, timeoutMs);
  }

  async longPressSendFeedback(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.sendFeedback));
  }

  async expectSendFeedbackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.sendFeedback), value, timeoutMs);
  }

  async expectSendFeedbackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.sendFeedback), count, timeoutMs);
  }

}
