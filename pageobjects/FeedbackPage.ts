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

export class FeedbackPage {
  private static readonly L = {
    howSYourExperience: { strategy: 'text' as const, value: 'How\'s your experience?', actionKind: 'text' as const },
    closeFeedback: { strategy: 'role' as const, value: 'Close feedback', role: 'button', actionKind: 'button' as const },
    rate1OutOf: { strategy: 'role' as const, value: 'Rate 1 out of 5', role: 'button', actionKind: 'button' as const },
    rate2OutOf: { strategy: 'role' as const, value: 'Rate 2 out of 5', role: 'button', actionKind: 'button' as const },
    rate3OutOf: { strategy: 'role' as const, value: 'Rate 3 out of 5', role: 'button', actionKind: 'button' as const },
    rate4OutOf: { strategy: 'role' as const, value: 'Rate 4 out of 5', role: 'button', actionKind: 'button' as const },
    rate5OutOf: { strategy: 'role' as const, value: 'Rate 5 out of 5', role: 'button', actionKind: 'button' as const },
    optional: { strategy: 'text' as const, value: '(optional)', actionKind: 'text' as const },
    fbComment: { strategy: 'css' as const, value: '#fb-comment[placeholder="What can we improve?"]', actionKind: 'textbox' as const },
    submitFeedback: { strategy: 'role' as const, value: 'Submit feedback', role: 'button', actionKind: 'button' as const },
    closeFeedbackButton: { strategy: 'role' as const, value: 'Close feedback', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextHowSYourExperience(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FeedbackPage.L.howSYourExperience));
  }

  async expectHowSYourExperienceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FeedbackPage.L.howSYourExperience), timeoutMs);
  }

  async expectHowSYourExperienceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FeedbackPage.L.howSYourExperience), timeoutMs);
  }

  async expectHowSYourExperienceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FeedbackPage.L.howSYourExperience), expected, timeoutMs);
  }

  async expectHowSYourExperienceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FeedbackPage.L.howSYourExperience), substring, timeoutMs);
  }

  async scrollHowSYourExperienceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FeedbackPage.L.howSYourExperience));
  }

  async clickCloseFeedback(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FeedbackPage.L.closeFeedback));
  }

  async doubleClickCloseFeedback(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FeedbackPage.L.closeFeedback));
  }

  async expectCloseFeedbackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FeedbackPage.L.closeFeedback), timeoutMs);
  }

  async expectCloseFeedbackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FeedbackPage.L.closeFeedback), timeoutMs);
  }

  async expectCloseFeedbackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FeedbackPage.L.closeFeedback), timeoutMs);
  }

  async expectCloseFeedbackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FeedbackPage.L.closeFeedback), timeoutMs);
  }

  async expectCloseFeedbackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FeedbackPage.L.closeFeedback), expected, timeoutMs);
  }

  async expectCloseFeedbackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FeedbackPage.L.closeFeedback), substring, timeoutMs);
  }

  async scrollCloseFeedbackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FeedbackPage.L.closeFeedback));
  }

  async clickRate1OutOf(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FeedbackPage.L.rate1OutOf));
  }

  async doubleClickRate1OutOf(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FeedbackPage.L.rate1OutOf));
  }

  async expectRate1OutOfVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FeedbackPage.L.rate1OutOf), timeoutMs);
  }

  async expectRate1OutOfHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FeedbackPage.L.rate1OutOf), timeoutMs);
  }

  async expectRate1OutOfEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FeedbackPage.L.rate1OutOf), timeoutMs);
  }

  async expectRate1OutOfDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FeedbackPage.L.rate1OutOf), timeoutMs);
  }

  async expectRate1OutOfText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FeedbackPage.L.rate1OutOf), expected, timeoutMs);
  }

  async expectRate1OutOfContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FeedbackPage.L.rate1OutOf), substring, timeoutMs);
  }

  async scrollRate1OutOfIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FeedbackPage.L.rate1OutOf));
  }

  async clickRate2OutOf(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FeedbackPage.L.rate2OutOf));
  }

  async doubleClickRate2OutOf(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FeedbackPage.L.rate2OutOf));
  }

  async expectRate2OutOfVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FeedbackPage.L.rate2OutOf), timeoutMs);
  }

  async expectRate2OutOfHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FeedbackPage.L.rate2OutOf), timeoutMs);
  }

  async expectRate2OutOfEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FeedbackPage.L.rate2OutOf), timeoutMs);
  }

  async expectRate2OutOfDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FeedbackPage.L.rate2OutOf), timeoutMs);
  }

  async expectRate2OutOfText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FeedbackPage.L.rate2OutOf), expected, timeoutMs);
  }

  async expectRate2OutOfContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FeedbackPage.L.rate2OutOf), substring, timeoutMs);
  }

  async scrollRate2OutOfIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FeedbackPage.L.rate2OutOf));
  }

  async clickRate3OutOf(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FeedbackPage.L.rate3OutOf));
  }

  async doubleClickRate3OutOf(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FeedbackPage.L.rate3OutOf));
  }

  async expectRate3OutOfVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FeedbackPage.L.rate3OutOf), timeoutMs);
  }

  async expectRate3OutOfHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FeedbackPage.L.rate3OutOf), timeoutMs);
  }

  async expectRate3OutOfEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FeedbackPage.L.rate3OutOf), timeoutMs);
  }

  async expectRate3OutOfDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FeedbackPage.L.rate3OutOf), timeoutMs);
  }

  async expectRate3OutOfText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FeedbackPage.L.rate3OutOf), expected, timeoutMs);
  }

  async expectRate3OutOfContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FeedbackPage.L.rate3OutOf), substring, timeoutMs);
  }

  async scrollRate3OutOfIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FeedbackPage.L.rate3OutOf));
  }

  async clickRate4OutOf(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FeedbackPage.L.rate4OutOf));
  }

  async doubleClickRate4OutOf(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FeedbackPage.L.rate4OutOf));
  }

  async expectRate4OutOfVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FeedbackPage.L.rate4OutOf), timeoutMs);
  }

  async expectRate4OutOfHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FeedbackPage.L.rate4OutOf), timeoutMs);
  }

  async expectRate4OutOfEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FeedbackPage.L.rate4OutOf), timeoutMs);
  }

  async expectRate4OutOfDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FeedbackPage.L.rate4OutOf), timeoutMs);
  }

  async expectRate4OutOfText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FeedbackPage.L.rate4OutOf), expected, timeoutMs);
  }

  async expectRate4OutOfContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FeedbackPage.L.rate4OutOf), substring, timeoutMs);
  }

  async scrollRate4OutOfIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FeedbackPage.L.rate4OutOf));
  }

  async clickRate5OutOf(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FeedbackPage.L.rate5OutOf));
  }

  async doubleClickRate5OutOf(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FeedbackPage.L.rate5OutOf));
  }

  async expectRate5OutOfVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FeedbackPage.L.rate5OutOf), timeoutMs);
  }

  async expectRate5OutOfHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FeedbackPage.L.rate5OutOf), timeoutMs);
  }

  async expectRate5OutOfEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FeedbackPage.L.rate5OutOf), timeoutMs);
  }

  async expectRate5OutOfDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FeedbackPage.L.rate5OutOf), timeoutMs);
  }

  async expectRate5OutOfText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FeedbackPage.L.rate5OutOf), expected, timeoutMs);
  }

  async expectRate5OutOfContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FeedbackPage.L.rate5OutOf), substring, timeoutMs);
  }

  async scrollRate5OutOfIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FeedbackPage.L.rate5OutOf));
  }

  async getInnerTextOptional(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FeedbackPage.L.optional));
  }

  async expectOptionalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FeedbackPage.L.optional), timeoutMs);
  }

  async expectOptionalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FeedbackPage.L.optional), timeoutMs);
  }

  async expectOptionalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FeedbackPage.L.optional), expected, timeoutMs);
  }

  async expectOptionalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FeedbackPage.L.optional), substring, timeoutMs);
  }

  async scrollOptionalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FeedbackPage.L.optional));
  }

  async fillFbComment(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, FeedbackPage.L.fbComment), value);
  }

  async clearFbComment(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, FeedbackPage.L.fbComment));
  }

  async typeTextFbComment(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, FeedbackPage.L.fbComment), value);
  }

  async expectFbCommentVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FeedbackPage.L.fbComment), timeoutMs);
  }

  async expectFbCommentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FeedbackPage.L.fbComment), timeoutMs);
  }

  async expectFbCommentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FeedbackPage.L.fbComment), timeoutMs);
  }

  async expectFbCommentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FeedbackPage.L.fbComment), timeoutMs);
  }

  async expectFbCommentValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FeedbackPage.L.fbComment), expected, timeoutMs);
  }

  async expectFbCommentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FeedbackPage.L.fbComment), timeoutMs);
  }

  async scrollFbCommentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FeedbackPage.L.fbComment));
  }

  async clickSubmitFeedback(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FeedbackPage.L.submitFeedback));
  }

  async doubleClickSubmitFeedback(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FeedbackPage.L.submitFeedback));
  }

  async expectSubmitFeedbackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FeedbackPage.L.submitFeedback), timeoutMs);
  }

  async expectSubmitFeedbackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FeedbackPage.L.submitFeedback), timeoutMs);
  }

  async expectSubmitFeedbackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FeedbackPage.L.submitFeedback), timeoutMs);
  }

  async expectSubmitFeedbackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FeedbackPage.L.submitFeedback), timeoutMs);
  }

  async expectSubmitFeedbackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FeedbackPage.L.submitFeedback), expected, timeoutMs);
  }

  async expectSubmitFeedbackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FeedbackPage.L.submitFeedback), substring, timeoutMs);
  }

  async scrollSubmitFeedbackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FeedbackPage.L.submitFeedback));
  }

  async clickCloseFeedbackButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FeedbackPage.L.closeFeedbackButton));
  }

  async doubleClickCloseFeedbackButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FeedbackPage.L.closeFeedbackButton));
  }

  async expectCloseFeedbackButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FeedbackPage.L.closeFeedbackButton), timeoutMs);
  }

  async expectCloseFeedbackButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FeedbackPage.L.closeFeedbackButton), timeoutMs);
  }

  async expectCloseFeedbackButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FeedbackPage.L.closeFeedbackButton), timeoutMs);
  }

  async expectCloseFeedbackButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FeedbackPage.L.closeFeedbackButton), timeoutMs);
  }

  async expectCloseFeedbackButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FeedbackPage.L.closeFeedbackButton), expected, timeoutMs);
  }

  async expectCloseFeedbackButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FeedbackPage.L.closeFeedbackButton), substring, timeoutMs);
  }

  async scrollCloseFeedbackButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FeedbackPage.L.closeFeedbackButton));
  }


  async clickHowSYourExperience(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FeedbackPage.L.howSYourExperience));
  }

  async doubleClickHowSYourExperience(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FeedbackPage.L.howSYourExperience));
  }

  async longPressHowSYourExperience(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FeedbackPage.L.howSYourExperience));
  }

  async expectHowSYourExperienceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FeedbackPage.L.howSYourExperience), value, timeoutMs);
  }

  async expectHowSYourExperienceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FeedbackPage.L.howSYourExperience), timeoutMs);
  }

  async expectHowSYourExperienceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FeedbackPage.L.howSYourExperience), timeoutMs);
  }

  async expectHowSYourExperienceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FeedbackPage.L.howSYourExperience), timeoutMs);
  }

  async expectHowSYourExperienceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FeedbackPage.L.howSYourExperience), timeoutMs);
  }

  async expectHowSYourExperienceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FeedbackPage.L.howSYourExperience), timeoutMs);
  }

  async expectHowSYourExperienceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FeedbackPage.L.howSYourExperience), count, timeoutMs);
  }

  async longPressCloseFeedback(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FeedbackPage.L.closeFeedback));
  }

  async expectCloseFeedbackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FeedbackPage.L.closeFeedback), value, timeoutMs);
  }

  async expectCloseFeedbackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FeedbackPage.L.closeFeedback), timeoutMs);
  }

  async expectCloseFeedbackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FeedbackPage.L.closeFeedback), timeoutMs);
  }

  async expectCloseFeedbackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FeedbackPage.L.closeFeedback), timeoutMs);
  }

  async expectCloseFeedbackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FeedbackPage.L.closeFeedback), count, timeoutMs);
  }

  async longPressRate1OutOf(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FeedbackPage.L.rate1OutOf));
  }

  async expectRate1OutOfValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FeedbackPage.L.rate1OutOf), value, timeoutMs);
  }

  async expectRate1OutOfChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FeedbackPage.L.rate1OutOf), timeoutMs);
  }

  async expectRate1OutOfUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FeedbackPage.L.rate1OutOf), timeoutMs);
  }

  async expectRate1OutOfFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FeedbackPage.L.rate1OutOf), timeoutMs);
  }

  async expectRate1OutOfCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FeedbackPage.L.rate1OutOf), count, timeoutMs);
  }

  async longPressRate2OutOf(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FeedbackPage.L.rate2OutOf));
  }

  async expectRate2OutOfValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FeedbackPage.L.rate2OutOf), value, timeoutMs);
  }

  async expectRate2OutOfChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FeedbackPage.L.rate2OutOf), timeoutMs);
  }

  async expectRate2OutOfUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FeedbackPage.L.rate2OutOf), timeoutMs);
  }

  async expectRate2OutOfFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FeedbackPage.L.rate2OutOf), timeoutMs);
  }

  async expectRate2OutOfCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FeedbackPage.L.rate2OutOf), count, timeoutMs);
  }

  async longPressRate3OutOf(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FeedbackPage.L.rate3OutOf));
  }

  async expectRate3OutOfValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FeedbackPage.L.rate3OutOf), value, timeoutMs);
  }

  async expectRate3OutOfChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FeedbackPage.L.rate3OutOf), timeoutMs);
  }

  async expectRate3OutOfUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FeedbackPage.L.rate3OutOf), timeoutMs);
  }

  async expectRate3OutOfFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FeedbackPage.L.rate3OutOf), timeoutMs);
  }

  async expectRate3OutOfCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FeedbackPage.L.rate3OutOf), count, timeoutMs);
  }

  async longPressRate4OutOf(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FeedbackPage.L.rate4OutOf));
  }

  async expectRate4OutOfValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FeedbackPage.L.rate4OutOf), value, timeoutMs);
  }

  async expectRate4OutOfChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FeedbackPage.L.rate4OutOf), timeoutMs);
  }

  async expectRate4OutOfUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FeedbackPage.L.rate4OutOf), timeoutMs);
  }

  async expectRate4OutOfFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FeedbackPage.L.rate4OutOf), timeoutMs);
  }

  async expectRate4OutOfCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FeedbackPage.L.rate4OutOf), count, timeoutMs);
  }

  async longPressRate5OutOf(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FeedbackPage.L.rate5OutOf));
  }

  async expectRate5OutOfValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FeedbackPage.L.rate5OutOf), value, timeoutMs);
  }

  async expectRate5OutOfChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FeedbackPage.L.rate5OutOf), timeoutMs);
  }

  async expectRate5OutOfUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FeedbackPage.L.rate5OutOf), timeoutMs);
  }

  async expectRate5OutOfFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FeedbackPage.L.rate5OutOf), timeoutMs);
  }

  async expectRate5OutOfCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FeedbackPage.L.rate5OutOf), count, timeoutMs);
  }

  async clickOptional(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FeedbackPage.L.optional));
  }

  async doubleClickOptional(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FeedbackPage.L.optional));
  }

  async longPressOptional(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FeedbackPage.L.optional));
  }

  async expectOptionalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FeedbackPage.L.optional), value, timeoutMs);
  }

  async expectOptionalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FeedbackPage.L.optional), timeoutMs);
  }

  async expectOptionalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FeedbackPage.L.optional), timeoutMs);
  }

  async expectOptionalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FeedbackPage.L.optional), timeoutMs);
  }

  async expectOptionalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FeedbackPage.L.optional), timeoutMs);
  }

  async expectOptionalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FeedbackPage.L.optional), timeoutMs);
  }

  async expectOptionalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FeedbackPage.L.optional), count, timeoutMs);
  }

  async expectFbCommentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FeedbackPage.L.fbComment), expected, timeoutMs);
  }

  async expectFbCommentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FeedbackPage.L.fbComment), substring, timeoutMs);
  }

  async expectFbCommentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FeedbackPage.L.fbComment), timeoutMs);
  }

  async expectFbCommentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FeedbackPage.L.fbComment), timeoutMs);
  }

  async expectFbCommentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FeedbackPage.L.fbComment), count, timeoutMs);
  }

  async longPressSubmitFeedback(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FeedbackPage.L.submitFeedback));
  }

  async expectSubmitFeedbackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FeedbackPage.L.submitFeedback), value, timeoutMs);
  }

  async expectSubmitFeedbackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FeedbackPage.L.submitFeedback), timeoutMs);
  }

  async expectSubmitFeedbackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FeedbackPage.L.submitFeedback), timeoutMs);
  }

  async expectSubmitFeedbackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FeedbackPage.L.submitFeedback), timeoutMs);
  }

  async expectSubmitFeedbackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FeedbackPage.L.submitFeedback), count, timeoutMs);
  }

  async longPressCloseFeedbackButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FeedbackPage.L.closeFeedbackButton));
  }

  async expectCloseFeedbackButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FeedbackPage.L.closeFeedbackButton), value, timeoutMs);
  }

  async expectCloseFeedbackButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FeedbackPage.L.closeFeedbackButton), timeoutMs);
  }

  async expectCloseFeedbackButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FeedbackPage.L.closeFeedbackButton), timeoutMs);
  }

  async expectCloseFeedbackButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FeedbackPage.L.closeFeedbackButton), timeoutMs);
  }

  async expectCloseFeedbackButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FeedbackPage.L.closeFeedbackButton), count, timeoutMs);
  }

}
