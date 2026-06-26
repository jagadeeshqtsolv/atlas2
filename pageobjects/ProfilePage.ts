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

export class ProfilePage {
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
    personalInformation: { strategy: 'text' as const, value: 'Personal information', actionKind: 'text' as const },
    yourNameContactDetails: { strategy: 'text' as const, value: 'Your name, contact details, and preferences.', actionKind: 'text' as const },
    displayName: { strategy: 'text' as const, value: 'Display name', actionKind: 'text' as const },
    emmaJohnson: { strategy: 'text' as const, value: 'Emma Johnson', actionKind: 'text' as const },
    emailAddress: { strategy: 'text' as const, value: 'Email address', actionKind: 'text' as const },
    user1AcmecorporationExampleCom: { strategy: 'text' as const, value: 'user1@acmecorporation.example.com', actionKind: 'text' as const },
    jobTitle: { strategy: 'text' as const, value: 'Job title', actionKind: 'text' as const },
    marketingManager: { strategy: 'text' as const, value: 'Marketing Manager', actionKind: 'text' as const },
    phoneNumber: { strategy: 'text' as const, value: 'Phone number', actionKind: 'text' as const },
    element: { strategy: 'text' as const, value: '+1-555-0001', actionKind: 'text' as const },
    timezone: { strategy: 'text' as const, value: 'Timezone', actionKind: 'text' as const },
    americaNewYork: { strategy: 'text' as const, value: 'America/New_York', actionKind: 'text' as const },
    language: { strategy: 'text' as const, value: 'Language', actionKind: 'text' as const },
    englishUS: { strategy: 'text' as const, value: 'English (US)', actionKind: 'text' as const },
    rolePermissions: { strategy: 'text' as const, value: 'Role & permissions', actionKind: 'text' as const },
    yourPortalAccessLevel: { strategy: 'text' as const, value: 'Your portal access level and granted scopes.', actionKind: 'text' as const },
    portalAdministrator: { strategy: 'text' as const, value: 'Portal Administrator', actionKind: 'text' as const },
    supportButton: { strategy: 'role' as const, value: 'Support', role: 'button', actionKind: 'button' as const },
    accessCommunityMyUKGLinks: { strategy: 'text' as const, value: 'Access Community/myUKG links', actionKind: 'text' as const },
    createSupportTickets: { strategy: 'text' as const, value: 'Create support tickets', actionKind: 'text' as const },
    searchSupportHistory: { strategy: 'text' as const, value: 'Search support history', actionKind: 'text' as const },
    searchSupportTickets: { strategy: 'text' as const, value: 'Search support tickets', actionKind: 'text' as const },
    viewAgingCaseSummary: { strategy: 'text' as const, value: 'View aging case summary', actionKind: 'text' as const },
    viewCaseTrends: { strategy: 'text' as const, value: 'View case trends', actionKind: 'text' as const },
    viewSLABreachAlerts: { strategy: 'text' as const, value: 'View SLA breach alerts', actionKind: 'text' as const },
    viewSLAComplianceCharts: { strategy: 'text' as const, value: 'View SLA compliance charts', actionKind: 'text' as const },
    viewSLACountdown: { strategy: 'text' as const, value: 'View SLA countdown', actionKind: 'text' as const },
    viewSLARiskPanel: { strategy: 'text' as const, value: 'View SLA risk panel', actionKind: 'text' as const },
    viewSupportAIInsights: { strategy: 'text' as const, value: 'View support AI insights', actionKind: 'text' as const },
    viewSupportModule: { strategy: 'text' as const, value: 'View support module', actionKind: 'text' as const },
    viewSupportOverview: { strategy: 'text' as const, value: 'View support overview', actionKind: 'text' as const },
    viewSupportSummary: { strategy: 'text' as const, value: 'View support summary', actionKind: 'text' as const },
    viewSupportTicketDetails: { strategy: 'text' as const, value: 'View support ticket details', actionKind: 'text' as const },
    viewSupportTicketHistory: { strategy: 'text' as const, value: 'View support ticket history', actionKind: 'text' as const },
    viewSupportTickets: { strategy: 'text' as const, value: 'View support tickets', actionKind: 'text' as const },
    viewTicketOverviewChart: { strategy: 'text' as const, value: 'View ticket overview chart', actionKind: 'text' as const },
    adminButton: { strategy: 'role' as const, value: 'Admin', role: 'button', actionKind: 'button' as const },
    billingPayments: { strategy: 'role' as const, value: 'Billing & Payments', role: 'button', actionKind: 'button' as const },
    subscriptionsRenewals: { strategy: 'role' as const, value: 'Subscriptions & Renewals', role: 'button', actionKind: 'button' as const },
    uKGAssistButton: { strategy: 'role' as const, value: 'UKG Assist', role: 'button', actionKind: 'button' as const },
    customerProfile: { strategy: 'role' as const, value: 'Customer Profile', role: 'button', actionKind: 'button' as const },
    userProfile: { strategy: 'role' as const, value: 'User Profile', role: 'button', actionKind: 'button' as const },
    activeSessions: { strategy: 'text' as const, value: 'Active sessions', actionKind: 'text' as const },
    devicesCurrentlySignedIn: { strategy: 'text' as const, value: 'Devices currently signed in to your account.', actionKind: 'text' as const },
    noActiveSessionsFound: { strategy: 'text' as const, value: 'No active sessions found.', actionKind: 'text' as const },
    activityLog: { strategy: 'text' as const, value: 'Activity log', actionKind: 'text' as const },
    accountActivityLogIn: { strategy: 'text' as const, value: 'Account activity log in your local timezone', actionKind: 'text' as const },
    auditLogWasExported: { strategy: 'text' as const, value: 'Audit log was exported by Admin', actionKind: 'text' as const },
    chrome: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    anAttemptToInvite: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:20', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite2: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    chrome2: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    anAttemptToInviteOption: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:19', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite3: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    chrome3: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    anAttemptToInviteAnAttemptToInviteUserWas: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:18', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite4: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    chrome4: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    anAttemptToInviteOption2: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:18', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite5: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    chrome5: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    anAttemptToInviteOption3: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:18', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite6: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    chrome6: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    anAttemptToInviteOption4: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:17', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite7: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    chrome7: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    anAttemptToInviteOption5: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:17', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite8: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    chrome8: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    anAttemptToInviteOption6: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:16', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite9: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    chrome9: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    anAttemptToInviteOption7: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:16', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite10: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    chrome10: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    anAttemptToInviteOption8: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:15', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite11: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    chrome11: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    anAttemptToInviteOption9: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:09', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite12: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    chrome12: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    aNewUserAccount: { strategy: 'role' as const, value: 'A new user account was created 26 Jun, 09:29', role: 'option', actionKind: 'generic' as const },
    aNewUserAccount2: { strategy: 'text' as const, value: 'A new user account was created', actionKind: 'text' as const },
    chrome13: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    auditLogWasExported2: { strategy: 'text' as const, value: 'Audit log was exported by Admin', actionKind: 'text' as const },
    chrome14: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    auditLogWasExported3: { strategy: 'text' as const, value: 'Audit log was exported by Admin', actionKind: 'text' as const },
    chrome15: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    auditLogWasExported4: { strategy: 'text' as const, value: 'Audit log was exported by Admin', actionKind: 'text' as const },
    chrome16: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    auditLogWasExported5: { strategy: 'text' as const, value: 'Audit log was exported by Admin', actionKind: 'text' as const },
    chrome17: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    auditLogWasExported6: { strategy: 'text' as const, value: 'Audit log was exported by Admin', actionKind: 'text' as const },
    chrome18: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    aNewUserAccountOption: { strategy: 'role' as const, value: 'A new user account was created 25 Jun, 12:23', role: 'option', actionKind: 'generic' as const },
    aNewUserAccount3: { strategy: 'text' as const, value: 'A new user account was created', actionKind: 'text' as const },
    chrome19: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    aNewUserAccountANewUserAccountWasCreated: { strategy: 'role' as const, value: 'A new user account was created 25 Jun, 12:09', role: 'option', actionKind: 'generic' as const },
    aNewUserAccount4: { strategy: 'text' as const, value: 'A new user account was created', actionKind: 'text' as const },
    chrome20: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    aNewUserAccountOption2: { strategy: 'role' as const, value: 'A new user account was created 25 Jun, 12:03', role: 'option', actionKind: 'generic' as const },
    aNewUserAccount5: { strategy: 'text' as const, value: 'A new user account was created', actionKind: 'text' as const },
    chrome21: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    aNewUserAccountOption3: { strategy: 'role' as const, value: 'A new user account was created 25 Jun, 12:03', role: 'option', actionKind: 'generic' as const },
    aNewUserAccount6: { strategy: 'text' as const, value: 'A new user account was created', actionKind: 'text' as const },
    chrome22: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    aNewUserAccountOption4: { strategy: 'role' as const, value: 'A new user account was created 25 Jun, 12:00', role: 'option', actionKind: 'generic' as const },
    aNewUserAccount7: { strategy: 'text' as const, value: 'A new user account was created', actionKind: 'text' as const },
    chrome23: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    anAttemptToInviteOption10: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 11:03', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite13: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    curl: { strategy: 'text' as const, value: 'curl', actionKind: 'text' as const },
    aNewUserAccountOption5: { strategy: 'role' as const, value: 'A new user account was created 25 Jun, 11:02', role: 'option', actionKind: 'generic' as const },
    aNewUserAccount8: { strategy: 'text' as const, value: 'A new user account was created', actionKind: 'text' as const },
    chrome24: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    anAttemptToInviteOption11: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 11:02', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite14: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    chrome25: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    aNewUserAccountOption6: { strategy: 'role' as const, value: 'A new user account was created 25 Jun, 10:58', role: 'option', actionKind: 'generic' as const },
    aNewUserAccount9: { strategy: 'text' as const, value: 'A new user account was created', actionKind: 'text' as const },
    chrome26: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    anAttemptToInviteOption12: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 10:58', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite15: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    chrome27: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    aUserShubhamraj234GmailComWas: { strategy: 'text' as const, value: 'A user \'shubhamraj234@gmail.com\' was deactivated', actionKind: 'text' as const },
    chrome28: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    anAttemptToInviteOption13: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 06:18', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite16: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient21011: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption14: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 05:32', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite17: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient210112: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption15: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 05:32', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite18: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient210113: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption16: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 04:46', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite19: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient210114: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption17: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 04:03', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite20: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient210115: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption18: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 04:02', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite21: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient210116: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption19: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 04:02', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite22: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient210117: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption20: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 14:46', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite23: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient210118: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption21: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 14:37', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite24: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient210119: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption22: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 14:15', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite25: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient2101110: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption23: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:58', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite26: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient2101111: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption24: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:47', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite27: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient2101112: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption25: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:46', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite28: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient2101113: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption26: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:45', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite29: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient2101114: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption27: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:35', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite30: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient2101115: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption28: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:34', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite31: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient2101116: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption29: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:34', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite32: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient2101117: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption30: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:33', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite33: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient2101118: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption31: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:32', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite34: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient2101119: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption32: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:32', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite35: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient2101120: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption33: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:31', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite36: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    javaHttpClient2101121: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    sendFeedback: { strategy: 'role' as const, value: 'Send feedback', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAcmeCorporation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.acmeCorporation));
  }

  async expectAcmeCorporationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.acmeCorporation), expected, timeoutMs);
  }

  async expectAcmeCorporationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.acmeCorporation), substring, timeoutMs);
  }

  async scrollAcmeCorporationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.acmeCorporation));
  }

  async clickUKGAssist(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.uKGAssist));
  }

  async doubleClickUKGAssist(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.uKGAssist));
  }

  async expectUKGAssistVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.uKGAssist), expected, timeoutMs);
  }

  async expectUKGAssistContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.uKGAssist), substring, timeoutMs);
  }

  async scrollUKGAssistIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.uKGAssist));
  }

  async clickSubscriptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.subscriptions));
  }

  async doubleClickSubscriptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.subscriptions));
  }

  async expectSubscriptionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.subscriptions), expected, timeoutMs);
  }

  async expectSubscriptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.subscriptions), substring, timeoutMs);
  }

  async scrollSubscriptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.subscriptions));
  }

  async clickImplementations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.implementations));
  }

  async doubleClickImplementations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.implementations));
  }

  async expectImplementationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.implementations), timeoutMs);
  }

  async expectImplementationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.implementations), timeoutMs);
  }

  async expectImplementationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.implementations), expected, timeoutMs);
  }

  async expectImplementationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.implementations), substring, timeoutMs);
  }

  async scrollImplementationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.implementations));
  }

  async clickBillings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.billings));
  }

  async doubleClickBillings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.billings));
  }

  async expectBillingsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.billings), timeoutMs);
  }

  async expectBillingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.billings), timeoutMs);
  }

  async expectBillingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.billings), expected, timeoutMs);
  }

  async expectBillingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.billings), substring, timeoutMs);
  }

  async scrollBillingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.billings));
  }

  async clickSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.support));
  }

  async doubleClickSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.support));
  }

  async expectSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.support), timeoutMs);
  }

  async expectSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.support), timeoutMs);
  }

  async expectSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.support), expected, timeoutMs);
  }

  async expectSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.support), substring, timeoutMs);
  }

  async scrollSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.support));
  }

  async clickAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.adoption));
  }

  async doubleClickAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.adoption));
  }

  async expectAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.adoption), timeoutMs);
  }

  async expectAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.adoption), timeoutMs);
  }

  async expectAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.adoption), expected, timeoutMs);
  }

  async expectAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.adoption), substring, timeoutMs);
  }

  async scrollAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.adoption));
  }

  async clickAdmin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.admin));
  }

  async doubleClickAdmin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.admin));
  }

  async expectAdminVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.admin), timeoutMs);
  }

  async expectAdminHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.admin), timeoutMs);
  }

  async expectAdminText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.admin), expected, timeoutMs);
  }

  async expectAdminContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.admin), substring, timeoutMs);
  }

  async scrollAdminIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.admin));
  }

  async clickAccountProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.accountProfile));
  }

  async doubleClickAccountProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.accountProfile));
  }

  async expectAccountProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.accountProfile), expected, timeoutMs);
  }

  async expectAccountProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.accountProfile), substring, timeoutMs);
  }

  async scrollAccountProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.accountProfile));
  }

  async clickEJEmmaJohnsonPortal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.eJEmmaJohnsonPortal));
  }

  async doubleClickEJEmmaJohnsonPortal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.eJEmmaJohnsonPortal), expected, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.eJEmmaJohnsonPortal), substring, timeoutMs);
  }

  async scrollEJEmmaJohnsonPortalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.eJEmmaJohnsonPortal));
  }

  async clickSignOut(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.signOut));
  }

  async doubleClickSignOut(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.signOut));
  }

  async expectSignOutVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.signOut), timeoutMs);
  }

  async expectSignOutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.signOut), timeoutMs);
  }

  async expectSignOutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.signOut), timeoutMs);
  }

  async expectSignOutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.signOut), timeoutMs);
  }

  async expectSignOutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.signOut), expected, timeoutMs);
  }

  async expectSignOutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.signOut), substring, timeoutMs);
  }

  async scrollSignOutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.signOut));
  }

  async clickCollapseSidebar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.collapseSidebar));
  }

  async doubleClickCollapseSidebar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.collapseSidebar));
  }

  async expectCollapseSidebarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.collapseSidebar), expected, timeoutMs);
  }

  async expectCollapseSidebarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.collapseSidebar), substring, timeoutMs);
  }

  async scrollCollapseSidebarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.collapseSidebar));
  }

  async getInnerTextPersonalInformation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.personalInformation));
  }

  async expectPersonalInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.personalInformation), timeoutMs);
  }

  async expectPersonalInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.personalInformation), timeoutMs);
  }

  async expectPersonalInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.personalInformation), expected, timeoutMs);
  }

  async expectPersonalInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.personalInformation), substring, timeoutMs);
  }

  async scrollPersonalInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.personalInformation));
  }

  async getInnerTextYourNameContactDetails(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.yourNameContactDetails));
  }

  async expectYourNameContactDetailsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.yourNameContactDetails), timeoutMs);
  }

  async expectYourNameContactDetailsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.yourNameContactDetails), timeoutMs);
  }

  async expectYourNameContactDetailsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.yourNameContactDetails), expected, timeoutMs);
  }

  async expectYourNameContactDetailsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.yourNameContactDetails), substring, timeoutMs);
  }

  async scrollYourNameContactDetailsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.yourNameContactDetails));
  }

  async getInnerTextDisplayName(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.displayName));
  }

  async expectDisplayNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.displayName), timeoutMs);
  }

  async expectDisplayNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.displayName), timeoutMs);
  }

  async expectDisplayNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.displayName), expected, timeoutMs);
  }

  async expectDisplayNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.displayName), substring, timeoutMs);
  }

  async scrollDisplayNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.displayName));
  }

  async getInnerTextEmmaJohnson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.emmaJohnson));
  }

  async expectEmmaJohnsonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.emmaJohnson), expected, timeoutMs);
  }

  async expectEmmaJohnsonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.emmaJohnson), substring, timeoutMs);
  }

  async scrollEmmaJohnsonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.emmaJohnson));
  }

  async getInnerTextEmailAddress(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.emailAddress));
  }

  async expectEmailAddressVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.emailAddress), expected, timeoutMs);
  }

  async expectEmailAddressContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.emailAddress), substring, timeoutMs);
  }

  async scrollEmailAddressIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.emailAddress));
  }

  async getInnerTextUser1AcmecorporationExampleCom(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom));
  }

  async expectUser1AcmecorporationExampleComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), expected, timeoutMs);
  }

  async expectUser1AcmecorporationExampleComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), substring, timeoutMs);
  }

  async scrollUser1AcmecorporationExampleComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom));
  }

  async getInnerTextJobTitle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.jobTitle));
  }

  async expectJobTitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.jobTitle), timeoutMs);
  }

  async expectJobTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.jobTitle), timeoutMs);
  }

  async expectJobTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.jobTitle), expected, timeoutMs);
  }

  async expectJobTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.jobTitle), substring, timeoutMs);
  }

  async scrollJobTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.jobTitle));
  }

  async getInnerTextMarketingManager(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.marketingManager));
  }

  async expectMarketingManagerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.marketingManager), timeoutMs);
  }

  async expectMarketingManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.marketingManager), timeoutMs);
  }

  async expectMarketingManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.marketingManager), expected, timeoutMs);
  }

  async expectMarketingManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.marketingManager), substring, timeoutMs);
  }

  async scrollMarketingManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.marketingManager));
  }

  async getInnerTextPhoneNumber(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.phoneNumber));
  }

  async expectPhoneNumberVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.phoneNumber), timeoutMs);
  }

  async expectPhoneNumberHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.phoneNumber), timeoutMs);
  }

  async expectPhoneNumberText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.phoneNumber), expected, timeoutMs);
  }

  async expectPhoneNumberContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.phoneNumber), substring, timeoutMs);
  }

  async scrollPhoneNumberIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.phoneNumber));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.element));
  }

  async getInnerTextTimezone(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.timezone));
  }

  async expectTimezoneVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.timezone), timeoutMs);
  }

  async expectTimezoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.timezone), timeoutMs);
  }

  async expectTimezoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.timezone), expected, timeoutMs);
  }

  async expectTimezoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.timezone), substring, timeoutMs);
  }

  async scrollTimezoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.timezone));
  }

  async getInnerTextAmericaNewYork(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.americaNewYork));
  }

  async expectAmericaNewYorkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.americaNewYork), timeoutMs);
  }

  async expectAmericaNewYorkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.americaNewYork), timeoutMs);
  }

  async expectAmericaNewYorkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.americaNewYork), expected, timeoutMs);
  }

  async expectAmericaNewYorkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.americaNewYork), substring, timeoutMs);
  }

  async scrollAmericaNewYorkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.americaNewYork));
  }

  async getInnerTextLanguage(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.language));
  }

  async expectLanguageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.language), timeoutMs);
  }

  async expectLanguageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.language), timeoutMs);
  }

  async expectLanguageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.language), expected, timeoutMs);
  }

  async expectLanguageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.language), substring, timeoutMs);
  }

  async scrollLanguageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.language));
  }

  async getInnerTextEnglishUS(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.englishUS));
  }

  async expectEnglishUSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.englishUS), timeoutMs);
  }

  async expectEnglishUSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.englishUS), timeoutMs);
  }

  async expectEnglishUSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.englishUS), expected, timeoutMs);
  }

  async expectEnglishUSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.englishUS), substring, timeoutMs);
  }

  async scrollEnglishUSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.englishUS));
  }

  async getInnerTextRolePermissions(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.rolePermissions));
  }

  async expectRolePermissionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.rolePermissions), timeoutMs);
  }

  async expectRolePermissionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.rolePermissions), timeoutMs);
  }

  async expectRolePermissionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.rolePermissions), expected, timeoutMs);
  }

  async expectRolePermissionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.rolePermissions), substring, timeoutMs);
  }

  async scrollRolePermissionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.rolePermissions));
  }

  async getInnerTextYourPortalAccessLevel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel));
  }

  async expectYourPortalAccessLevelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), timeoutMs);
  }

  async expectYourPortalAccessLevelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), timeoutMs);
  }

  async expectYourPortalAccessLevelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), expected, timeoutMs);
  }

  async expectYourPortalAccessLevelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), substring, timeoutMs);
  }

  async scrollYourPortalAccessLevelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel));
  }

  async getInnerTextPortalAdministrator(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.portalAdministrator));
  }

  async expectPortalAdministratorVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.portalAdministrator), expected, timeoutMs);
  }

  async expectPortalAdministratorContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.portalAdministrator), substring, timeoutMs);
  }

  async scrollPortalAdministratorIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.portalAdministrator));
  }

  async clickSupportButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.supportButton));
  }

  async doubleClickSupportButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.supportButton));
  }

  async expectSupportButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.supportButton), timeoutMs);
  }

  async expectSupportButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.supportButton), timeoutMs);
  }

  async expectSupportButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.supportButton), timeoutMs);
  }

  async expectSupportButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.supportButton), timeoutMs);
  }

  async expectSupportButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.supportButton), expected, timeoutMs);
  }

  async expectSupportButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.supportButton), substring, timeoutMs);
  }

  async scrollSupportButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.supportButton));
  }

  async getInnerTextAccessCommunityMyUKGLinks(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks));
  }

  async expectAccessCommunityMyUKGLinksVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), expected, timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), substring, timeoutMs);
  }

  async scrollAccessCommunityMyUKGLinksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks));
  }

  async getInnerTextCreateSupportTickets(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.createSupportTickets));
  }

  async expectCreateSupportTicketsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.createSupportTickets), timeoutMs);
  }

  async expectCreateSupportTicketsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.createSupportTickets), timeoutMs);
  }

  async expectCreateSupportTicketsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.createSupportTickets), expected, timeoutMs);
  }

  async expectCreateSupportTicketsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.createSupportTickets), substring, timeoutMs);
  }

  async scrollCreateSupportTicketsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.createSupportTickets));
  }

  async getInnerTextSearchSupportHistory(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportHistory));
  }

  async expectSearchSupportHistoryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.searchSupportHistory), timeoutMs);
  }

  async expectSearchSupportHistoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.searchSupportHistory), timeoutMs);
  }

  async expectSearchSupportHistoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.searchSupportHistory), expected, timeoutMs);
  }

  async expectSearchSupportHistoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.searchSupportHistory), substring, timeoutMs);
  }

  async scrollSearchSupportHistoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportHistory));
  }

  async getInnerTextSearchSupportTickets(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportTickets));
  }

  async expectSearchSupportTicketsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.searchSupportTickets), timeoutMs);
  }

  async expectSearchSupportTicketsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.searchSupportTickets), timeoutMs);
  }

  async expectSearchSupportTicketsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.searchSupportTickets), expected, timeoutMs);
  }

  async expectSearchSupportTicketsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.searchSupportTickets), substring, timeoutMs);
  }

  async scrollSearchSupportTicketsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportTickets));
  }

  async getInnerTextViewAgingCaseSummary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary));
  }

  async expectViewAgingCaseSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), timeoutMs);
  }

  async expectViewAgingCaseSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), timeoutMs);
  }

  async expectViewAgingCaseSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), expected, timeoutMs);
  }

  async expectViewAgingCaseSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), substring, timeoutMs);
  }

  async scrollViewAgingCaseSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary));
  }

  async getInnerTextViewCaseTrends(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewCaseTrends));
  }

  async expectViewCaseTrendsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewCaseTrends), timeoutMs);
  }

  async expectViewCaseTrendsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewCaseTrends), timeoutMs);
  }

  async expectViewCaseTrendsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewCaseTrends), expected, timeoutMs);
  }

  async expectViewCaseTrendsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewCaseTrends), substring, timeoutMs);
  }

  async scrollViewCaseTrendsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewCaseTrends));
  }

  async getInnerTextViewSLABreachAlerts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSLABreachAlerts));
  }

  async expectViewSLABreachAlertsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSLABreachAlerts), timeoutMs);
  }

  async expectViewSLABreachAlertsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSLABreachAlerts), timeoutMs);
  }

  async expectViewSLABreachAlertsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSLABreachAlerts), expected, timeoutMs);
  }

  async expectViewSLABreachAlertsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSLABreachAlerts), substring, timeoutMs);
  }

  async scrollViewSLABreachAlertsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSLABreachAlerts));
  }

  async getInnerTextViewSLAComplianceCharts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSLAComplianceCharts));
  }

  async expectViewSLAComplianceChartsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSLAComplianceCharts), timeoutMs);
  }

  async expectViewSLAComplianceChartsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSLAComplianceCharts), timeoutMs);
  }

  async expectViewSLAComplianceChartsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSLAComplianceCharts), expected, timeoutMs);
  }

  async expectViewSLAComplianceChartsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSLAComplianceCharts), substring, timeoutMs);
  }

  async scrollViewSLAComplianceChartsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSLAComplianceCharts));
  }

  async getInnerTextViewSLACountdown(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSLACountdown));
  }

  async expectViewSLACountdownVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSLACountdown), timeoutMs);
  }

  async expectViewSLACountdownHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSLACountdown), timeoutMs);
  }

  async expectViewSLACountdownText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSLACountdown), expected, timeoutMs);
  }

  async expectViewSLACountdownContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSLACountdown), substring, timeoutMs);
  }

  async scrollViewSLACountdownIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSLACountdown));
  }

  async getInnerTextViewSLARiskPanel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSLARiskPanel));
  }

  async expectViewSLARiskPanelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSLARiskPanel), timeoutMs);
  }

  async expectViewSLARiskPanelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSLARiskPanel), timeoutMs);
  }

  async expectViewSLARiskPanelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSLARiskPanel), expected, timeoutMs);
  }

  async expectViewSLARiskPanelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSLARiskPanel), substring, timeoutMs);
  }

  async scrollViewSLARiskPanelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSLARiskPanel));
  }

  async getInnerTextViewSupportAIInsights(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportAIInsights));
  }

  async expectViewSupportAIInsightsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSupportAIInsights), timeoutMs);
  }

  async expectViewSupportAIInsightsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSupportAIInsights), timeoutMs);
  }

  async expectViewSupportAIInsightsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSupportAIInsights), expected, timeoutMs);
  }

  async expectViewSupportAIInsightsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSupportAIInsights), substring, timeoutMs);
  }

  async scrollViewSupportAIInsightsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportAIInsights));
  }

  async getInnerTextViewSupportModule(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportModule));
  }

  async expectViewSupportModuleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSupportModule), timeoutMs);
  }

  async expectViewSupportModuleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSupportModule), timeoutMs);
  }

  async expectViewSupportModuleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSupportModule), expected, timeoutMs);
  }

  async expectViewSupportModuleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSupportModule), substring, timeoutMs);
  }

  async scrollViewSupportModuleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportModule));
  }

  async getInnerTextViewSupportOverview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportOverview));
  }

  async expectViewSupportOverviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSupportOverview), timeoutMs);
  }

  async expectViewSupportOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSupportOverview), timeoutMs);
  }

  async expectViewSupportOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSupportOverview), expected, timeoutMs);
  }

  async expectViewSupportOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSupportOverview), substring, timeoutMs);
  }

  async scrollViewSupportOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportOverview));
  }

  async getInnerTextViewSupportSummary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportSummary));
  }

  async expectViewSupportSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSupportSummary), timeoutMs);
  }

  async expectViewSupportSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSupportSummary), timeoutMs);
  }

  async expectViewSupportSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSupportSummary), expected, timeoutMs);
  }

  async expectViewSupportSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSupportSummary), substring, timeoutMs);
  }

  async scrollViewSupportSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportSummary));
  }

  async getInnerTextViewSupportTicketDetails(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails));
  }

  async expectViewSupportTicketDetailsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), timeoutMs);
  }

  async expectViewSupportTicketDetailsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), timeoutMs);
  }

  async expectViewSupportTicketDetailsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), expected, timeoutMs);
  }

  async expectViewSupportTicketDetailsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), substring, timeoutMs);
  }

  async scrollViewSupportTicketDetailsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails));
  }

  async getInnerTextViewSupportTicketHistory(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory));
  }

  async expectViewSupportTicketHistoryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), timeoutMs);
  }

  async expectViewSupportTicketHistoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), timeoutMs);
  }

  async expectViewSupportTicketHistoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), expected, timeoutMs);
  }

  async expectViewSupportTicketHistoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), substring, timeoutMs);
  }

  async scrollViewSupportTicketHistoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory));
  }

  async getInnerTextViewSupportTickets(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTickets));
  }

  async expectViewSupportTicketsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSupportTickets), timeoutMs);
  }

  async expectViewSupportTicketsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSupportTickets), timeoutMs);
  }

  async expectViewSupportTicketsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSupportTickets), expected, timeoutMs);
  }

  async expectViewSupportTicketsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSupportTickets), substring, timeoutMs);
  }

  async scrollViewSupportTicketsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTickets));
  }

  async getInnerTextViewTicketOverviewChart(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart));
  }

  async expectViewTicketOverviewChartVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), timeoutMs);
  }

  async expectViewTicketOverviewChartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), timeoutMs);
  }

  async expectViewTicketOverviewChartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), expected, timeoutMs);
  }

  async expectViewTicketOverviewChartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), substring, timeoutMs);
  }

  async scrollViewTicketOverviewChartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart));
  }

  async clickAdminButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.adminButton));
  }

  async doubleClickAdminButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.adminButton));
  }

  async expectAdminButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.adminButton), timeoutMs);
  }

  async expectAdminButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.adminButton), timeoutMs);
  }

  async expectAdminButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.adminButton), timeoutMs);
  }

  async expectAdminButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.adminButton), timeoutMs);
  }

  async expectAdminButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.adminButton), expected, timeoutMs);
  }

  async expectAdminButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.adminButton), substring, timeoutMs);
  }

  async scrollAdminButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.adminButton));
  }

  async clickBillingPayments(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.billingPayments));
  }

  async doubleClickBillingPayments(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.billingPayments));
  }

  async expectBillingPaymentsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.billingPayments), timeoutMs);
  }

  async expectBillingPaymentsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.billingPayments), timeoutMs);
  }

  async expectBillingPaymentsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.billingPayments), timeoutMs);
  }

  async expectBillingPaymentsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.billingPayments), timeoutMs);
  }

  async expectBillingPaymentsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.billingPayments), expected, timeoutMs);
  }

  async expectBillingPaymentsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.billingPayments), substring, timeoutMs);
  }

  async scrollBillingPaymentsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.billingPayments));
  }

  async clickSubscriptionsRenewals(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.subscriptionsRenewals));
  }

  async doubleClickSubscriptionsRenewals(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.subscriptionsRenewals));
  }

  async expectSubscriptionsRenewalsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), timeoutMs);
  }

  async expectSubscriptionsRenewalsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), timeoutMs);
  }

  async expectSubscriptionsRenewalsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), timeoutMs);
  }

  async expectSubscriptionsRenewalsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), timeoutMs);
  }

  async expectSubscriptionsRenewalsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), expected, timeoutMs);
  }

  async expectSubscriptionsRenewalsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), substring, timeoutMs);
  }

  async scrollSubscriptionsRenewalsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.subscriptionsRenewals));
  }

  async clickUKGAssistButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.uKGAssistButton));
  }

  async doubleClickUKGAssistButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.uKGAssistButton));
  }

  async expectUKGAssistButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.uKGAssistButton), timeoutMs);
  }

  async expectUKGAssistButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.uKGAssistButton), timeoutMs);
  }

  async expectUKGAssistButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.uKGAssistButton), timeoutMs);
  }

  async expectUKGAssistButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.uKGAssistButton), timeoutMs);
  }

  async expectUKGAssistButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.uKGAssistButton), expected, timeoutMs);
  }

  async expectUKGAssistButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.uKGAssistButton), substring, timeoutMs);
  }

  async scrollUKGAssistButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.uKGAssistButton));
  }

  async clickCustomerProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.customerProfile));
  }

  async doubleClickCustomerProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.customerProfile));
  }

  async expectCustomerProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.customerProfile), timeoutMs);
  }

  async expectCustomerProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.customerProfile), timeoutMs);
  }

  async expectCustomerProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.customerProfile), timeoutMs);
  }

  async expectCustomerProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.customerProfile), timeoutMs);
  }

  async expectCustomerProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.customerProfile), expected, timeoutMs);
  }

  async expectCustomerProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.customerProfile), substring, timeoutMs);
  }

  async scrollCustomerProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.customerProfile));
  }

  async clickUserProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.userProfile));
  }

  async doubleClickUserProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.userProfile));
  }

  async expectUserProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.userProfile), timeoutMs);
  }

  async expectUserProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.userProfile), timeoutMs);
  }

  async expectUserProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.userProfile), timeoutMs);
  }

  async expectUserProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.userProfile), timeoutMs);
  }

  async expectUserProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.userProfile), expected, timeoutMs);
  }

  async expectUserProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.userProfile), substring, timeoutMs);
  }

  async scrollUserProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.userProfile));
  }

  async getInnerTextActiveSessions(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.activeSessions));
  }

  async expectActiveSessionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.activeSessions), timeoutMs);
  }

  async expectActiveSessionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.activeSessions), timeoutMs);
  }

  async expectActiveSessionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.activeSessions), expected, timeoutMs);
  }

  async expectActiveSessionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.activeSessions), substring, timeoutMs);
  }

  async scrollActiveSessionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.activeSessions));
  }

  async getInnerTextDevicesCurrentlySignedIn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn));
  }

  async expectDevicesCurrentlySignedInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), timeoutMs);
  }

  async expectDevicesCurrentlySignedInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), timeoutMs);
  }

  async expectDevicesCurrentlySignedInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), expected, timeoutMs);
  }

  async expectDevicesCurrentlySignedInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), substring, timeoutMs);
  }

  async scrollDevicesCurrentlySignedInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn));
  }

  async getInnerTextNoActiveSessionsFound(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.noActiveSessionsFound));
  }

  async expectNoActiveSessionsFoundVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.noActiveSessionsFound), timeoutMs);
  }

  async expectNoActiveSessionsFoundHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.noActiveSessionsFound), timeoutMs);
  }

  async expectNoActiveSessionsFoundText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.noActiveSessionsFound), expected, timeoutMs);
  }

  async expectNoActiveSessionsFoundContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.noActiveSessionsFound), substring, timeoutMs);
  }

  async scrollNoActiveSessionsFoundIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.noActiveSessionsFound));
  }

  async getInnerTextActivityLog(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.activityLog));
  }

  async expectActivityLogVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.activityLog), timeoutMs);
  }

  async expectActivityLogHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.activityLog), timeoutMs);
  }

  async expectActivityLogText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.activityLog), expected, timeoutMs);
  }

  async expectActivityLogContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.activityLog), substring, timeoutMs);
  }

  async scrollActivityLogIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.activityLog));
  }

  async getInnerTextAccountActivityLogIn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.accountActivityLogIn));
  }

  async expectAccountActivityLogInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.accountActivityLogIn), timeoutMs);
  }

  async expectAccountActivityLogInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.accountActivityLogIn), timeoutMs);
  }

  async expectAccountActivityLogInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.accountActivityLogIn), expected, timeoutMs);
  }

  async expectAccountActivityLogInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.accountActivityLogIn), substring, timeoutMs);
  }

  async scrollAccountActivityLogInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.accountActivityLogIn));
  }

  async getInnerTextAuditLogWasExported(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported));
  }

  async expectAuditLogWasExportedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported), timeoutMs);
  }

  async expectAuditLogWasExportedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.auditLogWasExported), timeoutMs);
  }

  async expectAuditLogWasExportedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.auditLogWasExported), expected, timeoutMs);
  }

  async expectAuditLogWasExportedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.auditLogWasExported), substring, timeoutMs);
  }

  async scrollAuditLogWasExportedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported));
  }

  async getInnerTextChrome(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome));
  }

  async expectChromeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome), timeoutMs);
  }

  async expectChromeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome), timeoutMs);
  }

  async expectChromeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome), expected, timeoutMs);
  }

  async expectChromeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome), substring, timeoutMs);
  }

  async scrollChromeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome));
  }

  async clickAnAttemptToInvite(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite));
  }

  async doubleClickAnAttemptToInvite(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite));
  }

  async expectAnAttemptToInviteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite), timeoutMs);
  }

  async expectAnAttemptToInviteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite), timeoutMs);
  }

  async expectAnAttemptToInviteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite), timeoutMs);
  }

  async expectAnAttemptToInviteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite), timeoutMs);
  }

  async expectAnAttemptToInviteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite), expected, timeoutMs);
  }

  async expectAnAttemptToInviteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite));
  }

  async getInnerTextAnAttemptToInvite2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite2));
  }

  async expectAnAttemptToInvite2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), timeoutMs);
  }

  async expectAnAttemptToInvite2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), timeoutMs);
  }

  async expectAnAttemptToInvite2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), expected, timeoutMs);
  }

  async expectAnAttemptToInvite2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite2));
  }

  async getInnerTextChrome2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome2));
  }

  async expectChrome2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome2), timeoutMs);
  }

  async expectChrome2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome2), timeoutMs);
  }

  async expectChrome2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome2), expected, timeoutMs);
  }

  async expectChrome2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome2), substring, timeoutMs);
  }

  async scrollChrome2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome2));
  }

  async clickAnAttemptToInviteOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption));
  }

  async doubleClickAnAttemptToInviteOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption));
  }

  async expectAnAttemptToInviteOptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), timeoutMs);
  }

  async expectAnAttemptToInviteOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), timeoutMs);
  }

  async expectAnAttemptToInviteOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), timeoutMs);
  }

  async expectAnAttemptToInviteOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), timeoutMs);
  }

  async expectAnAttemptToInviteOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption));
  }

  async getInnerTextAnAttemptToInvite3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite3));
  }

  async expectAnAttemptToInvite3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite3), timeoutMs);
  }

  async expectAnAttemptToInvite3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite3), timeoutMs);
  }

  async expectAnAttemptToInvite3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite3), expected, timeoutMs);
  }

  async expectAnAttemptToInvite3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite3), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite3));
  }

  async getInnerTextChrome3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome3));
  }

  async expectChrome3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome3), timeoutMs);
  }

  async expectChrome3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome3), timeoutMs);
  }

  async expectChrome3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome3), expected, timeoutMs);
  }

  async expectChrome3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome3), substring, timeoutMs);
  }

  async scrollChrome3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome3));
  }

  async clickAnAttemptToInviteAnAttemptToInviteUserWas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas));
  }

  async doubleClickAnAttemptToInviteAnAttemptToInviteUserWas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas));
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), expected, timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteAnAttemptToInviteUserWasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas));
  }

  async getInnerTextAnAttemptToInvite4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite4));
  }

  async expectAnAttemptToInvite4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite4), timeoutMs);
  }

  async expectAnAttemptToInvite4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite4), timeoutMs);
  }

  async expectAnAttemptToInvite4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite4), expected, timeoutMs);
  }

  async expectAnAttemptToInvite4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite4), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite4));
  }

  async getInnerTextChrome4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome4));
  }

  async expectChrome4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome4), timeoutMs);
  }

  async expectChrome4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome4), timeoutMs);
  }

  async expectChrome4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome4), expected, timeoutMs);
  }

  async expectChrome4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome4), substring, timeoutMs);
  }

  async scrollChrome4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome4));
  }

  async clickAnAttemptToInviteOption2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption2));
  }

  async doubleClickAnAttemptToInviteOption2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption2));
  }

  async expectAnAttemptToInviteOption2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption2), timeoutMs);
  }

  async expectAnAttemptToInviteOption2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption2), timeoutMs);
  }

  async expectAnAttemptToInviteOption2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption2), timeoutMs);
  }

  async expectAnAttemptToInviteOption2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption2), timeoutMs);
  }

  async expectAnAttemptToInviteOption2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption2), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption2), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption2));
  }

  async getInnerTextAnAttemptToInvite5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite5));
  }

  async expectAnAttemptToInvite5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite5), timeoutMs);
  }

  async expectAnAttemptToInvite5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite5), timeoutMs);
  }

  async expectAnAttemptToInvite5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite5), expected, timeoutMs);
  }

  async expectAnAttemptToInvite5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite5), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite5));
  }

  async getInnerTextChrome5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome5));
  }

  async expectChrome5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome5), timeoutMs);
  }

  async expectChrome5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome5), timeoutMs);
  }

  async expectChrome5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome5), expected, timeoutMs);
  }

  async expectChrome5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome5), substring, timeoutMs);
  }

  async scrollChrome5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome5));
  }

  async clickAnAttemptToInviteOption3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption3));
  }

  async doubleClickAnAttemptToInviteOption3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption3));
  }

  async expectAnAttemptToInviteOption3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption3), timeoutMs);
  }

  async expectAnAttemptToInviteOption3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption3), timeoutMs);
  }

  async expectAnAttemptToInviteOption3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption3), timeoutMs);
  }

  async expectAnAttemptToInviteOption3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption3), timeoutMs);
  }

  async expectAnAttemptToInviteOption3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption3), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption3), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption3));
  }

  async getInnerTextAnAttemptToInvite6(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite6));
  }

  async expectAnAttemptToInvite6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite6), timeoutMs);
  }

  async expectAnAttemptToInvite6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite6), timeoutMs);
  }

  async expectAnAttemptToInvite6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite6), expected, timeoutMs);
  }

  async expectAnAttemptToInvite6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite6), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite6));
  }

  async getInnerTextChrome6(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome6));
  }

  async expectChrome6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome6), timeoutMs);
  }

  async expectChrome6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome6), timeoutMs);
  }

  async expectChrome6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome6), expected, timeoutMs);
  }

  async expectChrome6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome6), substring, timeoutMs);
  }

  async scrollChrome6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome6));
  }

  async clickAnAttemptToInviteOption4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4));
  }

  async doubleClickAnAttemptToInviteOption4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4));
  }

  async expectAnAttemptToInviteOption4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), timeoutMs);
  }

  async expectAnAttemptToInviteOption4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), timeoutMs);
  }

  async expectAnAttemptToInviteOption4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), timeoutMs);
  }

  async expectAnAttemptToInviteOption4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), timeoutMs);
  }

  async expectAnAttemptToInviteOption4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4));
  }

  async getInnerTextAnAttemptToInvite7(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite7));
  }

  async expectAnAttemptToInvite7Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite7), timeoutMs);
  }

  async expectAnAttemptToInvite7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite7), timeoutMs);
  }

  async expectAnAttemptToInvite7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite7), expected, timeoutMs);
  }

  async expectAnAttemptToInvite7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite7), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite7));
  }

  async getInnerTextChrome7(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome7));
  }

  async expectChrome7Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome7), timeoutMs);
  }

  async expectChrome7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome7), timeoutMs);
  }

  async expectChrome7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome7), expected, timeoutMs);
  }

  async expectChrome7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome7), substring, timeoutMs);
  }

  async scrollChrome7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome7));
  }

  async clickAnAttemptToInviteOption5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption5));
  }

  async doubleClickAnAttemptToInviteOption5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption5));
  }

  async expectAnAttemptToInviteOption5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption5), timeoutMs);
  }

  async expectAnAttemptToInviteOption5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption5), timeoutMs);
  }

  async expectAnAttemptToInviteOption5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption5), timeoutMs);
  }

  async expectAnAttemptToInviteOption5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption5), timeoutMs);
  }

  async expectAnAttemptToInviteOption5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption5), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption5), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption5));
  }

  async getInnerTextAnAttemptToInvite8(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite8));
  }

  async expectAnAttemptToInvite8Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite8), timeoutMs);
  }

  async expectAnAttemptToInvite8Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite8), timeoutMs);
  }

  async expectAnAttemptToInvite8Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite8), expected, timeoutMs);
  }

  async expectAnAttemptToInvite8ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite8), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite8IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite8));
  }

  async getInnerTextChrome8(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome8));
  }

  async expectChrome8Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome8), timeoutMs);
  }

  async expectChrome8Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome8), timeoutMs);
  }

  async expectChrome8Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome8), expected, timeoutMs);
  }

  async expectChrome8ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome8), substring, timeoutMs);
  }

  async scrollChrome8IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome8));
  }

  async clickAnAttemptToInviteOption6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6));
  }

  async doubleClickAnAttemptToInviteOption6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6));
  }

  async expectAnAttemptToInviteOption6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), timeoutMs);
  }

  async expectAnAttemptToInviteOption6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), timeoutMs);
  }

  async expectAnAttemptToInviteOption6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), timeoutMs);
  }

  async expectAnAttemptToInviteOption6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), timeoutMs);
  }

  async expectAnAttemptToInviteOption6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6));
  }

  async getInnerTextAnAttemptToInvite9(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite9));
  }

  async expectAnAttemptToInvite9Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite9), timeoutMs);
  }

  async expectAnAttemptToInvite9Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite9), timeoutMs);
  }

  async expectAnAttemptToInvite9Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite9), expected, timeoutMs);
  }

  async expectAnAttemptToInvite9ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite9), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite9IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite9));
  }

  async getInnerTextChrome9(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome9));
  }

  async expectChrome9Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome9), timeoutMs);
  }

  async expectChrome9Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome9), timeoutMs);
  }

  async expectChrome9Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome9), expected, timeoutMs);
  }

  async expectChrome9ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome9), substring, timeoutMs);
  }

  async scrollChrome9IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome9));
  }

  async clickAnAttemptToInviteOption7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption7));
  }

  async doubleClickAnAttemptToInviteOption7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption7));
  }

  async expectAnAttemptToInviteOption7Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption7), timeoutMs);
  }

  async expectAnAttemptToInviteOption7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption7), timeoutMs);
  }

  async expectAnAttemptToInviteOption7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption7), timeoutMs);
  }

  async expectAnAttemptToInviteOption7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption7), timeoutMs);
  }

  async expectAnAttemptToInviteOption7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption7), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption7), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption7));
  }

  async getInnerTextAnAttemptToInvite10(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite10));
  }

  async expectAnAttemptToInvite10Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite10), timeoutMs);
  }

  async expectAnAttemptToInvite10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite10), timeoutMs);
  }

  async expectAnAttemptToInvite10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite10), expected, timeoutMs);
  }

  async expectAnAttemptToInvite10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite10), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite10));
  }

  async getInnerTextChrome10(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome10));
  }

  async expectChrome10Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome10), timeoutMs);
  }

  async expectChrome10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome10), timeoutMs);
  }

  async expectChrome10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome10), expected, timeoutMs);
  }

  async expectChrome10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome10), substring, timeoutMs);
  }

  async scrollChrome10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome10));
  }

  async clickAnAttemptToInviteOption8(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8));
  }

  async doubleClickAnAttemptToInviteOption8(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8));
  }

  async expectAnAttemptToInviteOption8Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), timeoutMs);
  }

  async expectAnAttemptToInviteOption8Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), timeoutMs);
  }

  async expectAnAttemptToInviteOption8Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), timeoutMs);
  }

  async expectAnAttemptToInviteOption8Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), timeoutMs);
  }

  async expectAnAttemptToInviteOption8Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption8ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption8IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8));
  }

  async getInnerTextAnAttemptToInvite11(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite11));
  }

  async expectAnAttemptToInvite11Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite11), timeoutMs);
  }

  async expectAnAttemptToInvite11Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite11), timeoutMs);
  }

  async expectAnAttemptToInvite11Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite11), expected, timeoutMs);
  }

  async expectAnAttemptToInvite11ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite11), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite11IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite11));
  }

  async getInnerTextChrome11(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome11));
  }

  async expectChrome11Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome11), timeoutMs);
  }

  async expectChrome11Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome11), timeoutMs);
  }

  async expectChrome11Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome11), expected, timeoutMs);
  }

  async expectChrome11ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome11), substring, timeoutMs);
  }

  async scrollChrome11IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome11));
  }

  async clickAnAttemptToInviteOption9(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9));
  }

  async doubleClickAnAttemptToInviteOption9(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9));
  }

  async expectAnAttemptToInviteOption9Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), timeoutMs);
  }

  async expectAnAttemptToInviteOption9Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), timeoutMs);
  }

  async expectAnAttemptToInviteOption9Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), timeoutMs);
  }

  async expectAnAttemptToInviteOption9Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), timeoutMs);
  }

  async expectAnAttemptToInviteOption9Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption9ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption9IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9));
  }

  async getInnerTextAnAttemptToInvite12(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite12));
  }

  async expectAnAttemptToInvite12Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite12), timeoutMs);
  }

  async expectAnAttemptToInvite12Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite12), timeoutMs);
  }

  async expectAnAttemptToInvite12Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite12), expected, timeoutMs);
  }

  async expectAnAttemptToInvite12ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite12), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite12IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite12));
  }

  async getInnerTextChrome12(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome12));
  }

  async expectChrome12Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome12), timeoutMs);
  }

  async expectChrome12Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome12), timeoutMs);
  }

  async expectChrome12Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome12), expected, timeoutMs);
  }

  async expectChrome12ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome12), substring, timeoutMs);
  }

  async scrollChrome12IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome12));
  }

  async clickANewUserAccount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount));
  }

  async doubleClickANewUserAccount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount));
  }

  async expectANewUserAccountVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount), timeoutMs);
  }

  async expectANewUserAccountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccount), timeoutMs);
  }

  async expectANewUserAccountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccount), timeoutMs);
  }

  async expectANewUserAccountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccount), timeoutMs);
  }

  async expectANewUserAccountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccount), expected, timeoutMs);
  }

  async expectANewUserAccountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccount), substring, timeoutMs);
  }

  async scrollANewUserAccountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount));
  }

  async getInnerTextANewUserAccount2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount2));
  }

  async expectANewUserAccount2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount2), timeoutMs);
  }

  async expectANewUserAccount2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccount2), timeoutMs);
  }

  async expectANewUserAccount2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccount2), expected, timeoutMs);
  }

  async expectANewUserAccount2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccount2), substring, timeoutMs);
  }

  async scrollANewUserAccount2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount2));
  }

  async getInnerTextChrome13(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome13));
  }

  async expectChrome13Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome13), timeoutMs);
  }

  async expectChrome13Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome13), timeoutMs);
  }

  async expectChrome13Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome13), expected, timeoutMs);
  }

  async expectChrome13ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome13), substring, timeoutMs);
  }

  async scrollChrome13IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome13));
  }

  async getInnerTextAuditLogWasExported2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported2));
  }

  async expectAuditLogWasExported2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported2), timeoutMs);
  }

  async expectAuditLogWasExported2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.auditLogWasExported2), timeoutMs);
  }

  async expectAuditLogWasExported2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.auditLogWasExported2), expected, timeoutMs);
  }

  async expectAuditLogWasExported2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.auditLogWasExported2), substring, timeoutMs);
  }

  async scrollAuditLogWasExported2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported2));
  }

  async getInnerTextChrome14(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome14));
  }

  async expectChrome14Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome14), timeoutMs);
  }

  async expectChrome14Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome14), timeoutMs);
  }

  async expectChrome14Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome14), expected, timeoutMs);
  }

  async expectChrome14ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome14), substring, timeoutMs);
  }

  async scrollChrome14IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome14));
  }

  async getInnerTextAuditLogWasExported3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported3));
  }

  async expectAuditLogWasExported3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported3), timeoutMs);
  }

  async expectAuditLogWasExported3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.auditLogWasExported3), timeoutMs);
  }

  async expectAuditLogWasExported3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.auditLogWasExported3), expected, timeoutMs);
  }

  async expectAuditLogWasExported3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.auditLogWasExported3), substring, timeoutMs);
  }

  async scrollAuditLogWasExported3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported3));
  }

  async getInnerTextChrome15(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome15));
  }

  async expectChrome15Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome15), timeoutMs);
  }

  async expectChrome15Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome15), timeoutMs);
  }

  async expectChrome15Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome15), expected, timeoutMs);
  }

  async expectChrome15ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome15), substring, timeoutMs);
  }

  async scrollChrome15IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome15));
  }

  async getInnerTextAuditLogWasExported4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported4));
  }

  async expectAuditLogWasExported4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported4), timeoutMs);
  }

  async expectAuditLogWasExported4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.auditLogWasExported4), timeoutMs);
  }

  async expectAuditLogWasExported4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.auditLogWasExported4), expected, timeoutMs);
  }

  async expectAuditLogWasExported4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.auditLogWasExported4), substring, timeoutMs);
  }

  async scrollAuditLogWasExported4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported4));
  }

  async getInnerTextChrome16(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome16));
  }

  async expectChrome16Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome16), timeoutMs);
  }

  async expectChrome16Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome16), timeoutMs);
  }

  async expectChrome16Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome16), expected, timeoutMs);
  }

  async expectChrome16ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome16), substring, timeoutMs);
  }

  async scrollChrome16IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome16));
  }

  async getInnerTextAuditLogWasExported5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported5));
  }

  async expectAuditLogWasExported5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported5), timeoutMs);
  }

  async expectAuditLogWasExported5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.auditLogWasExported5), timeoutMs);
  }

  async expectAuditLogWasExported5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.auditLogWasExported5), expected, timeoutMs);
  }

  async expectAuditLogWasExported5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.auditLogWasExported5), substring, timeoutMs);
  }

  async scrollAuditLogWasExported5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported5));
  }

  async getInnerTextChrome17(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome17));
  }

  async expectChrome17Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome17), timeoutMs);
  }

  async expectChrome17Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome17), timeoutMs);
  }

  async expectChrome17Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome17), expected, timeoutMs);
  }

  async expectChrome17ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome17), substring, timeoutMs);
  }

  async scrollChrome17IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome17));
  }

  async getInnerTextAuditLogWasExported6(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported6));
  }

  async expectAuditLogWasExported6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported6), timeoutMs);
  }

  async expectAuditLogWasExported6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.auditLogWasExported6), timeoutMs);
  }

  async expectAuditLogWasExported6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.auditLogWasExported6), expected, timeoutMs);
  }

  async expectAuditLogWasExported6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.auditLogWasExported6), substring, timeoutMs);
  }

  async scrollAuditLogWasExported6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported6));
  }

  async getInnerTextChrome18(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome18));
  }

  async expectChrome18Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome18), timeoutMs);
  }

  async expectChrome18Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome18), timeoutMs);
  }

  async expectChrome18Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome18), expected, timeoutMs);
  }

  async expectChrome18ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome18), substring, timeoutMs);
  }

  async scrollChrome18IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome18));
  }

  async clickANewUserAccountOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption));
  }

  async doubleClickANewUserAccountOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption));
  }

  async expectANewUserAccountOptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), timeoutMs);
  }

  async expectANewUserAccountOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), timeoutMs);
  }

  async expectANewUserAccountOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), timeoutMs);
  }

  async expectANewUserAccountOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), timeoutMs);
  }

  async expectANewUserAccountOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), expected, timeoutMs);
  }

  async expectANewUserAccountOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), substring, timeoutMs);
  }

  async scrollANewUserAccountOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption));
  }

  async getInnerTextANewUserAccount3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount3));
  }

  async expectANewUserAccount3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount3), timeoutMs);
  }

  async expectANewUserAccount3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccount3), timeoutMs);
  }

  async expectANewUserAccount3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccount3), expected, timeoutMs);
  }

  async expectANewUserAccount3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccount3), substring, timeoutMs);
  }

  async scrollANewUserAccount3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount3));
  }

  async getInnerTextChrome19(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome19));
  }

  async expectChrome19Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome19), timeoutMs);
  }

  async expectChrome19Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome19), timeoutMs);
  }

  async expectChrome19Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome19), expected, timeoutMs);
  }

  async expectChrome19ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome19), substring, timeoutMs);
  }

  async scrollChrome19IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome19));
  }

  async clickANewUserAccountANewUserAccountWasCreated(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated));
  }

  async doubleClickANewUserAccountANewUserAccountWasCreated(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated));
  }

  async expectANewUserAccountANewUserAccountWasCreatedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), expected, timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), substring, timeoutMs);
  }

  async scrollANewUserAccountANewUserAccountWasCreatedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated));
  }

  async getInnerTextANewUserAccount4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount4));
  }

  async expectANewUserAccount4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount4), timeoutMs);
  }

  async expectANewUserAccount4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccount4), timeoutMs);
  }

  async expectANewUserAccount4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccount4), expected, timeoutMs);
  }

  async expectANewUserAccount4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccount4), substring, timeoutMs);
  }

  async scrollANewUserAccount4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount4));
  }

  async getInnerTextChrome20(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome20));
  }

  async expectChrome20Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome20), timeoutMs);
  }

  async expectChrome20Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome20), timeoutMs);
  }

  async expectChrome20Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome20), expected, timeoutMs);
  }

  async expectChrome20ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome20), substring, timeoutMs);
  }

  async scrollChrome20IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome20));
  }

  async clickANewUserAccountOption2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2));
  }

  async doubleClickANewUserAccountOption2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2));
  }

  async expectANewUserAccountOption2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), timeoutMs);
  }

  async expectANewUserAccountOption2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), timeoutMs);
  }

  async expectANewUserAccountOption2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), timeoutMs);
  }

  async expectANewUserAccountOption2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), timeoutMs);
  }

  async expectANewUserAccountOption2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), expected, timeoutMs);
  }

  async expectANewUserAccountOption2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), substring, timeoutMs);
  }

  async scrollANewUserAccountOption2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2));
  }

  async getInnerTextANewUserAccount5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount5));
  }

  async expectANewUserAccount5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount5), timeoutMs);
  }

  async expectANewUserAccount5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccount5), timeoutMs);
  }

  async expectANewUserAccount5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccount5), expected, timeoutMs);
  }

  async expectANewUserAccount5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccount5), substring, timeoutMs);
  }

  async scrollANewUserAccount5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount5));
  }

  async getInnerTextChrome21(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome21));
  }

  async expectChrome21Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome21), timeoutMs);
  }

  async expectChrome21Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome21), timeoutMs);
  }

  async expectChrome21Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome21), expected, timeoutMs);
  }

  async expectChrome21ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome21), substring, timeoutMs);
  }

  async scrollChrome21IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome21));
  }

  async clickANewUserAccountOption3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption3));
  }

  async doubleClickANewUserAccountOption3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption3));
  }

  async expectANewUserAccountOption3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption3), timeoutMs);
  }

  async expectANewUserAccountOption3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccountOption3), timeoutMs);
  }

  async expectANewUserAccountOption3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption3), timeoutMs);
  }

  async expectANewUserAccountOption3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption3), timeoutMs);
  }

  async expectANewUserAccountOption3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption3), expected, timeoutMs);
  }

  async expectANewUserAccountOption3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption3), substring, timeoutMs);
  }

  async scrollANewUserAccountOption3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption3));
  }

  async getInnerTextANewUserAccount6(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount6));
  }

  async expectANewUserAccount6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount6), timeoutMs);
  }

  async expectANewUserAccount6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccount6), timeoutMs);
  }

  async expectANewUserAccount6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccount6), expected, timeoutMs);
  }

  async expectANewUserAccount6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccount6), substring, timeoutMs);
  }

  async scrollANewUserAccount6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount6));
  }

  async getInnerTextChrome22(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome22));
  }

  async expectChrome22Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome22), timeoutMs);
  }

  async expectChrome22Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome22), timeoutMs);
  }

  async expectChrome22Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome22), expected, timeoutMs);
  }

  async expectChrome22ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome22), substring, timeoutMs);
  }

  async scrollChrome22IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome22));
  }

  async clickANewUserAccountOption4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4));
  }

  async doubleClickANewUserAccountOption4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4));
  }

  async expectANewUserAccountOption4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), timeoutMs);
  }

  async expectANewUserAccountOption4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), timeoutMs);
  }

  async expectANewUserAccountOption4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), timeoutMs);
  }

  async expectANewUserAccountOption4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), timeoutMs);
  }

  async expectANewUserAccountOption4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), expected, timeoutMs);
  }

  async expectANewUserAccountOption4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), substring, timeoutMs);
  }

  async scrollANewUserAccountOption4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4));
  }

  async getInnerTextANewUserAccount7(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount7));
  }

  async expectANewUserAccount7Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount7), timeoutMs);
  }

  async expectANewUserAccount7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccount7), timeoutMs);
  }

  async expectANewUserAccount7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccount7), expected, timeoutMs);
  }

  async expectANewUserAccount7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccount7), substring, timeoutMs);
  }

  async scrollANewUserAccount7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount7));
  }

  async getInnerTextChrome23(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome23));
  }

  async expectChrome23Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome23), timeoutMs);
  }

  async expectChrome23Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome23), timeoutMs);
  }

  async expectChrome23Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome23), expected, timeoutMs);
  }

  async expectChrome23ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome23), substring, timeoutMs);
  }

  async scrollChrome23IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome23));
  }

  async clickAnAttemptToInviteOption10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10));
  }

  async doubleClickAnAttemptToInviteOption10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10));
  }

  async expectAnAttemptToInviteOption10Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), timeoutMs);
  }

  async expectAnAttemptToInviteOption10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), timeoutMs);
  }

  async expectAnAttemptToInviteOption10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), timeoutMs);
  }

  async expectAnAttemptToInviteOption10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), timeoutMs);
  }

  async expectAnAttemptToInviteOption10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10));
  }

  async getInnerTextAnAttemptToInvite13(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite13));
  }

  async expectAnAttemptToInvite13Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite13), timeoutMs);
  }

  async expectAnAttemptToInvite13Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite13), timeoutMs);
  }

  async expectAnAttemptToInvite13Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite13), expected, timeoutMs);
  }

  async expectAnAttemptToInvite13ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite13), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite13IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite13));
  }

  async getInnerTextCurl(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.curl));
  }

  async expectCurlVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.curl), timeoutMs);
  }

  async expectCurlHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.curl), timeoutMs);
  }

  async expectCurlText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.curl), expected, timeoutMs);
  }

  async expectCurlContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.curl), substring, timeoutMs);
  }

  async scrollCurlIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.curl));
  }

  async clickANewUserAccountOption5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5));
  }

  async doubleClickANewUserAccountOption5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5));
  }

  async expectANewUserAccountOption5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), timeoutMs);
  }

  async expectANewUserAccountOption5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), timeoutMs);
  }

  async expectANewUserAccountOption5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), timeoutMs);
  }

  async expectANewUserAccountOption5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), timeoutMs);
  }

  async expectANewUserAccountOption5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), expected, timeoutMs);
  }

  async expectANewUserAccountOption5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), substring, timeoutMs);
  }

  async scrollANewUserAccountOption5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5));
  }

  async getInnerTextANewUserAccount8(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount8));
  }

  async expectANewUserAccount8Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount8), timeoutMs);
  }

  async expectANewUserAccount8Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccount8), timeoutMs);
  }

  async expectANewUserAccount8Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccount8), expected, timeoutMs);
  }

  async expectANewUserAccount8ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccount8), substring, timeoutMs);
  }

  async scrollANewUserAccount8IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount8));
  }

  async getInnerTextChrome24(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome24));
  }

  async expectChrome24Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome24), timeoutMs);
  }

  async expectChrome24Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome24), timeoutMs);
  }

  async expectChrome24Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome24), expected, timeoutMs);
  }

  async expectChrome24ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome24), substring, timeoutMs);
  }

  async scrollChrome24IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome24));
  }

  async clickAnAttemptToInviteOption11(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11));
  }

  async doubleClickAnAttemptToInviteOption11(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11));
  }

  async expectAnAttemptToInviteOption11Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), timeoutMs);
  }

  async expectAnAttemptToInviteOption11Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), timeoutMs);
  }

  async expectAnAttemptToInviteOption11Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), timeoutMs);
  }

  async expectAnAttemptToInviteOption11Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), timeoutMs);
  }

  async expectAnAttemptToInviteOption11Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption11ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption11IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11));
  }

  async getInnerTextAnAttemptToInvite14(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite14));
  }

  async expectAnAttemptToInvite14Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite14), timeoutMs);
  }

  async expectAnAttemptToInvite14Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite14), timeoutMs);
  }

  async expectAnAttemptToInvite14Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite14), expected, timeoutMs);
  }

  async expectAnAttemptToInvite14ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite14), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite14IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite14));
  }

  async getInnerTextChrome25(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome25));
  }

  async expectChrome25Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome25), timeoutMs);
  }

  async expectChrome25Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome25), timeoutMs);
  }

  async expectChrome25Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome25), expected, timeoutMs);
  }

  async expectChrome25ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome25), substring, timeoutMs);
  }

  async scrollChrome25IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome25));
  }

  async clickANewUserAccountOption6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6));
  }

  async doubleClickANewUserAccountOption6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6));
  }

  async expectANewUserAccountOption6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), timeoutMs);
  }

  async expectANewUserAccountOption6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), timeoutMs);
  }

  async expectANewUserAccountOption6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), timeoutMs);
  }

  async expectANewUserAccountOption6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), timeoutMs);
  }

  async expectANewUserAccountOption6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), expected, timeoutMs);
  }

  async expectANewUserAccountOption6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), substring, timeoutMs);
  }

  async scrollANewUserAccountOption6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6));
  }

  async getInnerTextANewUserAccount9(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount9));
  }

  async expectANewUserAccount9Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount9), timeoutMs);
  }

  async expectANewUserAccount9Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccount9), timeoutMs);
  }

  async expectANewUserAccount9Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccount9), expected, timeoutMs);
  }

  async expectANewUserAccount9ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccount9), substring, timeoutMs);
  }

  async scrollANewUserAccount9IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount9));
  }

  async getInnerTextChrome26(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome26));
  }

  async expectChrome26Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome26), timeoutMs);
  }

  async expectChrome26Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome26), timeoutMs);
  }

  async expectChrome26Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome26), expected, timeoutMs);
  }

  async expectChrome26ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome26), substring, timeoutMs);
  }

  async scrollChrome26IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome26));
  }

  async clickAnAttemptToInviteOption12(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12));
  }

  async doubleClickAnAttemptToInviteOption12(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12));
  }

  async expectAnAttemptToInviteOption12Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), timeoutMs);
  }

  async expectAnAttemptToInviteOption12Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), timeoutMs);
  }

  async expectAnAttemptToInviteOption12Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), timeoutMs);
  }

  async expectAnAttemptToInviteOption12Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), timeoutMs);
  }

  async expectAnAttemptToInviteOption12Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption12ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption12IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12));
  }

  async getInnerTextAnAttemptToInvite15(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite15));
  }

  async expectAnAttemptToInvite15Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite15), timeoutMs);
  }

  async expectAnAttemptToInvite15Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite15), timeoutMs);
  }

  async expectAnAttemptToInvite15Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite15), expected, timeoutMs);
  }

  async expectAnAttemptToInvite15ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite15), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite15IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite15));
  }

  async getInnerTextChrome27(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome27));
  }

  async expectChrome27Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome27), timeoutMs);
  }

  async expectChrome27Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome27), timeoutMs);
  }

  async expectChrome27Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome27), expected, timeoutMs);
  }

  async expectChrome27ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome27), substring, timeoutMs);
  }

  async scrollChrome27IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome27));
  }

  async getInnerTextAUserShubhamraj234GmailComWas(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas));
  }

  async expectAUserShubhamraj234GmailComWasVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas), timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas), timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas), expected, timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas), substring, timeoutMs);
  }

  async scrollAUserShubhamraj234GmailComWasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas));
  }

  async getInnerTextChrome28(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome28));
  }

  async expectChrome28Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome28), timeoutMs);
  }

  async expectChrome28Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome28), timeoutMs);
  }

  async expectChrome28Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome28), expected, timeoutMs);
  }

  async expectChrome28ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome28), substring, timeoutMs);
  }

  async scrollChrome28IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome28));
  }

  async clickAnAttemptToInviteOption13(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13));
  }

  async doubleClickAnAttemptToInviteOption13(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13));
  }

  async expectAnAttemptToInviteOption13Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), timeoutMs);
  }

  async expectAnAttemptToInviteOption13Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), timeoutMs);
  }

  async expectAnAttemptToInviteOption13Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), timeoutMs);
  }

  async expectAnAttemptToInviteOption13Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), timeoutMs);
  }

  async expectAnAttemptToInviteOption13Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption13ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption13IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13));
  }

  async getInnerTextAnAttemptToInvite16(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite16));
  }

  async expectAnAttemptToInvite16Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite16), timeoutMs);
  }

  async expectAnAttemptToInvite16Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite16), timeoutMs);
  }

  async expectAnAttemptToInvite16Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite16), expected, timeoutMs);
  }

  async expectAnAttemptToInvite16ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite16), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite16IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite16));
  }

  async getInnerTextJavaHttpClient21011(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient21011));
  }

  async expectJavaHttpClient21011Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient21011), timeoutMs);
  }

  async expectJavaHttpClient21011Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient21011), timeoutMs);
  }

  async expectJavaHttpClient21011Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient21011), expected, timeoutMs);
  }

  async expectJavaHttpClient21011ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient21011), substring, timeoutMs);
  }

  async scrollJavaHttpClient21011IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient21011));
  }

  async clickAnAttemptToInviteOption14(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14));
  }

  async doubleClickAnAttemptToInviteOption14(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14));
  }

  async expectAnAttemptToInviteOption14Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), timeoutMs);
  }

  async expectAnAttemptToInviteOption14Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), timeoutMs);
  }

  async expectAnAttemptToInviteOption14Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), timeoutMs);
  }

  async expectAnAttemptToInviteOption14Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), timeoutMs);
  }

  async expectAnAttemptToInviteOption14Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption14ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption14IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14));
  }

  async getInnerTextAnAttemptToInvite17(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite17));
  }

  async expectAnAttemptToInvite17Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite17), timeoutMs);
  }

  async expectAnAttemptToInvite17Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite17), timeoutMs);
  }

  async expectAnAttemptToInvite17Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite17), expected, timeoutMs);
  }

  async expectAnAttemptToInvite17ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite17), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite17IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite17));
  }

  async getInnerTextJavaHttpClient210112(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210112));
  }

  async expectJavaHttpClient210112Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210112), timeoutMs);
  }

  async expectJavaHttpClient210112Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient210112), timeoutMs);
  }

  async expectJavaHttpClient210112Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient210112), expected, timeoutMs);
  }

  async expectJavaHttpClient210112ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient210112), substring, timeoutMs);
  }

  async scrollJavaHttpClient210112IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210112));
  }

  async clickAnAttemptToInviteOption15(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption15));
  }

  async doubleClickAnAttemptToInviteOption15(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption15));
  }

  async expectAnAttemptToInviteOption15Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption15), timeoutMs);
  }

  async expectAnAttemptToInviteOption15Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption15), timeoutMs);
  }

  async expectAnAttemptToInviteOption15Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption15), timeoutMs);
  }

  async expectAnAttemptToInviteOption15Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption15), timeoutMs);
  }

  async expectAnAttemptToInviteOption15Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption15), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption15ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption15), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption15IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption15));
  }

  async getInnerTextAnAttemptToInvite18(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite18));
  }

  async expectAnAttemptToInvite18Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite18), timeoutMs);
  }

  async expectAnAttemptToInvite18Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite18), timeoutMs);
  }

  async expectAnAttemptToInvite18Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite18), expected, timeoutMs);
  }

  async expectAnAttemptToInvite18ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite18), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite18IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite18));
  }

  async getInnerTextJavaHttpClient210113(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210113));
  }

  async expectJavaHttpClient210113Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210113), timeoutMs);
  }

  async expectJavaHttpClient210113Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient210113), timeoutMs);
  }

  async expectJavaHttpClient210113Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient210113), expected, timeoutMs);
  }

  async expectJavaHttpClient210113ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient210113), substring, timeoutMs);
  }

  async scrollJavaHttpClient210113IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210113));
  }

  async clickAnAttemptToInviteOption16(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16));
  }

  async doubleClickAnAttemptToInviteOption16(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16));
  }

  async expectAnAttemptToInviteOption16Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), timeoutMs);
  }

  async expectAnAttemptToInviteOption16Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), timeoutMs);
  }

  async expectAnAttemptToInviteOption16Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), timeoutMs);
  }

  async expectAnAttemptToInviteOption16Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), timeoutMs);
  }

  async expectAnAttemptToInviteOption16Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption16ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption16IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16));
  }

  async getInnerTextAnAttemptToInvite19(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite19));
  }

  async expectAnAttemptToInvite19Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite19), timeoutMs);
  }

  async expectAnAttemptToInvite19Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite19), timeoutMs);
  }

  async expectAnAttemptToInvite19Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite19), expected, timeoutMs);
  }

  async expectAnAttemptToInvite19ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite19), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite19IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite19));
  }

  async getInnerTextJavaHttpClient210114(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210114));
  }

  async expectJavaHttpClient210114Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210114), timeoutMs);
  }

  async expectJavaHttpClient210114Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient210114), timeoutMs);
  }

  async expectJavaHttpClient210114Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient210114), expected, timeoutMs);
  }

  async expectJavaHttpClient210114ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient210114), substring, timeoutMs);
  }

  async scrollJavaHttpClient210114IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210114));
  }

  async clickAnAttemptToInviteOption17(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17));
  }

  async doubleClickAnAttemptToInviteOption17(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17));
  }

  async expectAnAttemptToInviteOption17Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), timeoutMs);
  }

  async expectAnAttemptToInviteOption17Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), timeoutMs);
  }

  async expectAnAttemptToInviteOption17Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), timeoutMs);
  }

  async expectAnAttemptToInviteOption17Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), timeoutMs);
  }

  async expectAnAttemptToInviteOption17Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption17ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption17IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17));
  }

  async getInnerTextAnAttemptToInvite20(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite20));
  }

  async expectAnAttemptToInvite20Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite20), timeoutMs);
  }

  async expectAnAttemptToInvite20Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite20), timeoutMs);
  }

  async expectAnAttemptToInvite20Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite20), expected, timeoutMs);
  }

  async expectAnAttemptToInvite20ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite20), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite20IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite20));
  }

  async getInnerTextJavaHttpClient210115(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210115));
  }

  async expectJavaHttpClient210115Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210115), timeoutMs);
  }

  async expectJavaHttpClient210115Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient210115), timeoutMs);
  }

  async expectJavaHttpClient210115Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient210115), expected, timeoutMs);
  }

  async expectJavaHttpClient210115ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient210115), substring, timeoutMs);
  }

  async scrollJavaHttpClient210115IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210115));
  }

  async clickAnAttemptToInviteOption18(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18));
  }

  async doubleClickAnAttemptToInviteOption18(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18));
  }

  async expectAnAttemptToInviteOption18Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), timeoutMs);
  }

  async expectAnAttemptToInviteOption18Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), timeoutMs);
  }

  async expectAnAttemptToInviteOption18Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), timeoutMs);
  }

  async expectAnAttemptToInviteOption18Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), timeoutMs);
  }

  async expectAnAttemptToInviteOption18Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption18ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption18IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18));
  }

  async getInnerTextAnAttemptToInvite21(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite21));
  }

  async expectAnAttemptToInvite21Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite21), timeoutMs);
  }

  async expectAnAttemptToInvite21Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite21), timeoutMs);
  }

  async expectAnAttemptToInvite21Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite21), expected, timeoutMs);
  }

  async expectAnAttemptToInvite21ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite21), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite21IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite21));
  }

  async getInnerTextJavaHttpClient210116(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210116));
  }

  async expectJavaHttpClient210116Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210116), timeoutMs);
  }

  async expectJavaHttpClient210116Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient210116), timeoutMs);
  }

  async expectJavaHttpClient210116Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient210116), expected, timeoutMs);
  }

  async expectJavaHttpClient210116ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient210116), substring, timeoutMs);
  }

  async scrollJavaHttpClient210116IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210116));
  }

  async clickAnAttemptToInviteOption19(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption19));
  }

  async doubleClickAnAttemptToInviteOption19(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption19));
  }

  async expectAnAttemptToInviteOption19Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption19), timeoutMs);
  }

  async expectAnAttemptToInviteOption19Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption19), timeoutMs);
  }

  async expectAnAttemptToInviteOption19Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption19), timeoutMs);
  }

  async expectAnAttemptToInviteOption19Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption19), timeoutMs);
  }

  async expectAnAttemptToInviteOption19Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption19), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption19ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption19), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption19IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption19));
  }

  async getInnerTextAnAttemptToInvite22(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite22));
  }

  async expectAnAttemptToInvite22Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite22), timeoutMs);
  }

  async expectAnAttemptToInvite22Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite22), timeoutMs);
  }

  async expectAnAttemptToInvite22Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite22), expected, timeoutMs);
  }

  async expectAnAttemptToInvite22ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite22), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite22IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite22));
  }

  async getInnerTextJavaHttpClient210117(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210117));
  }

  async expectJavaHttpClient210117Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210117), timeoutMs);
  }

  async expectJavaHttpClient210117Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient210117), timeoutMs);
  }

  async expectJavaHttpClient210117Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient210117), expected, timeoutMs);
  }

  async expectJavaHttpClient210117ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient210117), substring, timeoutMs);
  }

  async scrollJavaHttpClient210117IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210117));
  }

  async clickAnAttemptToInviteOption20(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20));
  }

  async doubleClickAnAttemptToInviteOption20(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20));
  }

  async expectAnAttemptToInviteOption20Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), timeoutMs);
  }

  async expectAnAttemptToInviteOption20Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), timeoutMs);
  }

  async expectAnAttemptToInviteOption20Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), timeoutMs);
  }

  async expectAnAttemptToInviteOption20Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), timeoutMs);
  }

  async expectAnAttemptToInviteOption20Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption20ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption20IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20));
  }

  async getInnerTextAnAttemptToInvite23(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite23));
  }

  async expectAnAttemptToInvite23Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite23), timeoutMs);
  }

  async expectAnAttemptToInvite23Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite23), timeoutMs);
  }

  async expectAnAttemptToInvite23Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite23), expected, timeoutMs);
  }

  async expectAnAttemptToInvite23ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite23), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite23IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite23));
  }

  async getInnerTextJavaHttpClient210118(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210118));
  }

  async expectJavaHttpClient210118Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210118), timeoutMs);
  }

  async expectJavaHttpClient210118Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient210118), timeoutMs);
  }

  async expectJavaHttpClient210118Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient210118), expected, timeoutMs);
  }

  async expectJavaHttpClient210118ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient210118), substring, timeoutMs);
  }

  async scrollJavaHttpClient210118IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210118));
  }

  async clickAnAttemptToInviteOption21(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21));
  }

  async doubleClickAnAttemptToInviteOption21(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21));
  }

  async expectAnAttemptToInviteOption21Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), timeoutMs);
  }

  async expectAnAttemptToInviteOption21Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), timeoutMs);
  }

  async expectAnAttemptToInviteOption21Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), timeoutMs);
  }

  async expectAnAttemptToInviteOption21Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), timeoutMs);
  }

  async expectAnAttemptToInviteOption21Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption21ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption21IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21));
  }

  async getInnerTextAnAttemptToInvite24(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite24));
  }

  async expectAnAttemptToInvite24Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite24), timeoutMs);
  }

  async expectAnAttemptToInvite24Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite24), timeoutMs);
  }

  async expectAnAttemptToInvite24Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite24), expected, timeoutMs);
  }

  async expectAnAttemptToInvite24ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite24), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite24IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite24));
  }

  async getInnerTextJavaHttpClient210119(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210119));
  }

  async expectJavaHttpClient210119Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210119), timeoutMs);
  }

  async expectJavaHttpClient210119Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient210119), timeoutMs);
  }

  async expectJavaHttpClient210119Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient210119), expected, timeoutMs);
  }

  async expectJavaHttpClient210119ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient210119), substring, timeoutMs);
  }

  async scrollJavaHttpClient210119IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210119));
  }

  async clickAnAttemptToInviteOption22(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22));
  }

  async doubleClickAnAttemptToInviteOption22(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22));
  }

  async expectAnAttemptToInviteOption22Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), timeoutMs);
  }

  async expectAnAttemptToInviteOption22Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), timeoutMs);
  }

  async expectAnAttemptToInviteOption22Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), timeoutMs);
  }

  async expectAnAttemptToInviteOption22Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), timeoutMs);
  }

  async expectAnAttemptToInviteOption22Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption22ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption22IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22));
  }

  async getInnerTextAnAttemptToInvite25(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite25));
  }

  async expectAnAttemptToInvite25Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite25), timeoutMs);
  }

  async expectAnAttemptToInvite25Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite25), timeoutMs);
  }

  async expectAnAttemptToInvite25Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite25), expected, timeoutMs);
  }

  async expectAnAttemptToInvite25ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite25), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite25IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite25));
  }

  async getInnerTextJavaHttpClient2101110(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101110));
  }

  async expectJavaHttpClient2101110Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101110), timeoutMs);
  }

  async expectJavaHttpClient2101110Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient2101110), timeoutMs);
  }

  async expectJavaHttpClient2101110Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient2101110), expected, timeoutMs);
  }

  async expectJavaHttpClient2101110ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient2101110), substring, timeoutMs);
  }

  async scrollJavaHttpClient2101110IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101110));
  }

  async clickAnAttemptToInviteOption23(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23));
  }

  async doubleClickAnAttemptToInviteOption23(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23));
  }

  async expectAnAttemptToInviteOption23Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), timeoutMs);
  }

  async expectAnAttemptToInviteOption23Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), timeoutMs);
  }

  async expectAnAttemptToInviteOption23Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), timeoutMs);
  }

  async expectAnAttemptToInviteOption23Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), timeoutMs);
  }

  async expectAnAttemptToInviteOption23Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption23ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption23IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23));
  }

  async getInnerTextAnAttemptToInvite26(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite26));
  }

  async expectAnAttemptToInvite26Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite26), timeoutMs);
  }

  async expectAnAttemptToInvite26Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite26), timeoutMs);
  }

  async expectAnAttemptToInvite26Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite26), expected, timeoutMs);
  }

  async expectAnAttemptToInvite26ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite26), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite26IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite26));
  }

  async getInnerTextJavaHttpClient2101111(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101111));
  }

  async expectJavaHttpClient2101111Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101111), timeoutMs);
  }

  async expectJavaHttpClient2101111Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient2101111), timeoutMs);
  }

  async expectJavaHttpClient2101111Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient2101111), expected, timeoutMs);
  }

  async expectJavaHttpClient2101111ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient2101111), substring, timeoutMs);
  }

  async scrollJavaHttpClient2101111IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101111));
  }

  async clickAnAttemptToInviteOption24(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24));
  }

  async doubleClickAnAttemptToInviteOption24(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24));
  }

  async expectAnAttemptToInviteOption24Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), timeoutMs);
  }

  async expectAnAttemptToInviteOption24Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), timeoutMs);
  }

  async expectAnAttemptToInviteOption24Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), timeoutMs);
  }

  async expectAnAttemptToInviteOption24Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), timeoutMs);
  }

  async expectAnAttemptToInviteOption24Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption24ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption24IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24));
  }

  async getInnerTextAnAttemptToInvite27(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite27));
  }

  async expectAnAttemptToInvite27Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite27), timeoutMs);
  }

  async expectAnAttemptToInvite27Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite27), timeoutMs);
  }

  async expectAnAttemptToInvite27Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite27), expected, timeoutMs);
  }

  async expectAnAttemptToInvite27ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite27), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite27IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite27));
  }

  async getInnerTextJavaHttpClient2101112(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101112));
  }

  async expectJavaHttpClient2101112Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101112), timeoutMs);
  }

  async expectJavaHttpClient2101112Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient2101112), timeoutMs);
  }

  async expectJavaHttpClient2101112Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient2101112), expected, timeoutMs);
  }

  async expectJavaHttpClient2101112ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient2101112), substring, timeoutMs);
  }

  async scrollJavaHttpClient2101112IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101112));
  }

  async clickAnAttemptToInviteOption25(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25));
  }

  async doubleClickAnAttemptToInviteOption25(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25));
  }

  async expectAnAttemptToInviteOption25Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), timeoutMs);
  }

  async expectAnAttemptToInviteOption25Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), timeoutMs);
  }

  async expectAnAttemptToInviteOption25Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), timeoutMs);
  }

  async expectAnAttemptToInviteOption25Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), timeoutMs);
  }

  async expectAnAttemptToInviteOption25Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption25ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption25IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25));
  }

  async getInnerTextAnAttemptToInvite28(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite28));
  }

  async expectAnAttemptToInvite28Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite28), timeoutMs);
  }

  async expectAnAttemptToInvite28Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite28), timeoutMs);
  }

  async expectAnAttemptToInvite28Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite28), expected, timeoutMs);
  }

  async expectAnAttemptToInvite28ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite28), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite28IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite28));
  }

  async getInnerTextJavaHttpClient2101113(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101113));
  }

  async expectJavaHttpClient2101113Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101113), timeoutMs);
  }

  async expectJavaHttpClient2101113Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient2101113), timeoutMs);
  }

  async expectJavaHttpClient2101113Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient2101113), expected, timeoutMs);
  }

  async expectJavaHttpClient2101113ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient2101113), substring, timeoutMs);
  }

  async scrollJavaHttpClient2101113IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101113));
  }

  async clickAnAttemptToInviteOption26(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26));
  }

  async doubleClickAnAttemptToInviteOption26(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26));
  }

  async expectAnAttemptToInviteOption26Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), timeoutMs);
  }

  async expectAnAttemptToInviteOption26Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), timeoutMs);
  }

  async expectAnAttemptToInviteOption26Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), timeoutMs);
  }

  async expectAnAttemptToInviteOption26Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), timeoutMs);
  }

  async expectAnAttemptToInviteOption26Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption26ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption26IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26));
  }

  async getInnerTextAnAttemptToInvite29(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite29));
  }

  async expectAnAttemptToInvite29Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite29), timeoutMs);
  }

  async expectAnAttemptToInvite29Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite29), timeoutMs);
  }

  async expectAnAttemptToInvite29Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite29), expected, timeoutMs);
  }

  async expectAnAttemptToInvite29ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite29), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite29IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite29));
  }

  async getInnerTextJavaHttpClient2101114(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101114));
  }

  async expectJavaHttpClient2101114Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101114), timeoutMs);
  }

  async expectJavaHttpClient2101114Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient2101114), timeoutMs);
  }

  async expectJavaHttpClient2101114Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient2101114), expected, timeoutMs);
  }

  async expectJavaHttpClient2101114ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient2101114), substring, timeoutMs);
  }

  async scrollJavaHttpClient2101114IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101114));
  }

  async clickAnAttemptToInviteOption27(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27));
  }

  async doubleClickAnAttemptToInviteOption27(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27));
  }

  async expectAnAttemptToInviteOption27Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), timeoutMs);
  }

  async expectAnAttemptToInviteOption27Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), timeoutMs);
  }

  async expectAnAttemptToInviteOption27Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), timeoutMs);
  }

  async expectAnAttemptToInviteOption27Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), timeoutMs);
  }

  async expectAnAttemptToInviteOption27Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption27ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption27IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27));
  }

  async getInnerTextAnAttemptToInvite30(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite30));
  }

  async expectAnAttemptToInvite30Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite30), timeoutMs);
  }

  async expectAnAttemptToInvite30Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite30), timeoutMs);
  }

  async expectAnAttemptToInvite30Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite30), expected, timeoutMs);
  }

  async expectAnAttemptToInvite30ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite30), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite30IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite30));
  }

  async getInnerTextJavaHttpClient2101115(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101115));
  }

  async expectJavaHttpClient2101115Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101115), timeoutMs);
  }

  async expectJavaHttpClient2101115Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient2101115), timeoutMs);
  }

  async expectJavaHttpClient2101115Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient2101115), expected, timeoutMs);
  }

  async expectJavaHttpClient2101115ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient2101115), substring, timeoutMs);
  }

  async scrollJavaHttpClient2101115IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101115));
  }

  async clickAnAttemptToInviteOption28(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28));
  }

  async doubleClickAnAttemptToInviteOption28(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28));
  }

  async expectAnAttemptToInviteOption28Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), timeoutMs);
  }

  async expectAnAttemptToInviteOption28Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), timeoutMs);
  }

  async expectAnAttemptToInviteOption28Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), timeoutMs);
  }

  async expectAnAttemptToInviteOption28Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), timeoutMs);
  }

  async expectAnAttemptToInviteOption28Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption28ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption28IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28));
  }

  async getInnerTextAnAttemptToInvite31(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite31));
  }

  async expectAnAttemptToInvite31Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite31), timeoutMs);
  }

  async expectAnAttemptToInvite31Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite31), timeoutMs);
  }

  async expectAnAttemptToInvite31Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite31), expected, timeoutMs);
  }

  async expectAnAttemptToInvite31ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite31), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite31IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite31));
  }

  async getInnerTextJavaHttpClient2101116(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101116));
  }

  async expectJavaHttpClient2101116Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101116), timeoutMs);
  }

  async expectJavaHttpClient2101116Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient2101116), timeoutMs);
  }

  async expectJavaHttpClient2101116Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient2101116), expected, timeoutMs);
  }

  async expectJavaHttpClient2101116ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient2101116), substring, timeoutMs);
  }

  async scrollJavaHttpClient2101116IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101116));
  }

  async clickAnAttemptToInviteOption29(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption29));
  }

  async doubleClickAnAttemptToInviteOption29(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption29));
  }

  async expectAnAttemptToInviteOption29Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption29), timeoutMs);
  }

  async expectAnAttemptToInviteOption29Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption29), timeoutMs);
  }

  async expectAnAttemptToInviteOption29Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption29), timeoutMs);
  }

  async expectAnAttemptToInviteOption29Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption29), timeoutMs);
  }

  async expectAnAttemptToInviteOption29Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption29), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption29ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption29), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption29IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption29));
  }

  async getInnerTextAnAttemptToInvite32(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite32));
  }

  async expectAnAttemptToInvite32Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite32), timeoutMs);
  }

  async expectAnAttemptToInvite32Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite32), timeoutMs);
  }

  async expectAnAttemptToInvite32Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite32), expected, timeoutMs);
  }

  async expectAnAttemptToInvite32ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite32), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite32IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite32));
  }

  async getInnerTextJavaHttpClient2101117(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101117));
  }

  async expectJavaHttpClient2101117Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101117), timeoutMs);
  }

  async expectJavaHttpClient2101117Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient2101117), timeoutMs);
  }

  async expectJavaHttpClient2101117Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient2101117), expected, timeoutMs);
  }

  async expectJavaHttpClient2101117ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient2101117), substring, timeoutMs);
  }

  async scrollJavaHttpClient2101117IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101117));
  }

  async clickAnAttemptToInviteOption30(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30));
  }

  async doubleClickAnAttemptToInviteOption30(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30));
  }

  async expectAnAttemptToInviteOption30Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), timeoutMs);
  }

  async expectAnAttemptToInviteOption30Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), timeoutMs);
  }

  async expectAnAttemptToInviteOption30Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), timeoutMs);
  }

  async expectAnAttemptToInviteOption30Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), timeoutMs);
  }

  async expectAnAttemptToInviteOption30Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption30ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption30IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30));
  }

  async getInnerTextAnAttemptToInvite33(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite33));
  }

  async expectAnAttemptToInvite33Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite33), timeoutMs);
  }

  async expectAnAttemptToInvite33Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite33), timeoutMs);
  }

  async expectAnAttemptToInvite33Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite33), expected, timeoutMs);
  }

  async expectAnAttemptToInvite33ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite33), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite33IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite33));
  }

  async getInnerTextJavaHttpClient2101118(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101118));
  }

  async expectJavaHttpClient2101118Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101118), timeoutMs);
  }

  async expectJavaHttpClient2101118Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient2101118), timeoutMs);
  }

  async expectJavaHttpClient2101118Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient2101118), expected, timeoutMs);
  }

  async expectJavaHttpClient2101118ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient2101118), substring, timeoutMs);
  }

  async scrollJavaHttpClient2101118IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101118));
  }

  async clickAnAttemptToInviteOption31(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31));
  }

  async doubleClickAnAttemptToInviteOption31(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31));
  }

  async expectAnAttemptToInviteOption31Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), timeoutMs);
  }

  async expectAnAttemptToInviteOption31Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), timeoutMs);
  }

  async expectAnAttemptToInviteOption31Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), timeoutMs);
  }

  async expectAnAttemptToInviteOption31Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), timeoutMs);
  }

  async expectAnAttemptToInviteOption31Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption31ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption31IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31));
  }

  async getInnerTextAnAttemptToInvite34(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite34));
  }

  async expectAnAttemptToInvite34Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite34), timeoutMs);
  }

  async expectAnAttemptToInvite34Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite34), timeoutMs);
  }

  async expectAnAttemptToInvite34Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite34), expected, timeoutMs);
  }

  async expectAnAttemptToInvite34ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite34), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite34IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite34));
  }

  async getInnerTextJavaHttpClient2101119(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101119));
  }

  async expectJavaHttpClient2101119Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101119), timeoutMs);
  }

  async expectJavaHttpClient2101119Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient2101119), timeoutMs);
  }

  async expectJavaHttpClient2101119Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient2101119), expected, timeoutMs);
  }

  async expectJavaHttpClient2101119ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient2101119), substring, timeoutMs);
  }

  async scrollJavaHttpClient2101119IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101119));
  }

  async clickAnAttemptToInviteOption32(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption32));
  }

  async doubleClickAnAttemptToInviteOption32(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption32));
  }

  async expectAnAttemptToInviteOption32Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption32), timeoutMs);
  }

  async expectAnAttemptToInviteOption32Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption32), timeoutMs);
  }

  async expectAnAttemptToInviteOption32Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption32), timeoutMs);
  }

  async expectAnAttemptToInviteOption32Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption32), timeoutMs);
  }

  async expectAnAttemptToInviteOption32Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption32), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption32ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption32), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption32IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption32));
  }

  async getInnerTextAnAttemptToInvite35(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite35));
  }

  async expectAnAttemptToInvite35Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite35), timeoutMs);
  }

  async expectAnAttemptToInvite35Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite35), timeoutMs);
  }

  async expectAnAttemptToInvite35Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite35), expected, timeoutMs);
  }

  async expectAnAttemptToInvite35ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite35), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite35IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite35));
  }

  async getInnerTextJavaHttpClient2101120(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101120));
  }

  async expectJavaHttpClient2101120Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101120), timeoutMs);
  }

  async expectJavaHttpClient2101120Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient2101120), timeoutMs);
  }

  async expectJavaHttpClient2101120Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient2101120), expected, timeoutMs);
  }

  async expectJavaHttpClient2101120ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient2101120), substring, timeoutMs);
  }

  async scrollJavaHttpClient2101120IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101120));
  }

  async clickAnAttemptToInviteOption33(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33));
  }

  async doubleClickAnAttemptToInviteOption33(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33));
  }

  async expectAnAttemptToInviteOption33Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), timeoutMs);
  }

  async expectAnAttemptToInviteOption33Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), timeoutMs);
  }

  async expectAnAttemptToInviteOption33Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), timeoutMs);
  }

  async expectAnAttemptToInviteOption33Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), timeoutMs);
  }

  async expectAnAttemptToInviteOption33Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption33ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption33IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33));
  }

  async getInnerTextAnAttemptToInvite36(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite36));
  }

  async expectAnAttemptToInvite36Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite36), timeoutMs);
  }

  async expectAnAttemptToInvite36Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite36), timeoutMs);
  }

  async expectAnAttemptToInvite36Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite36), expected, timeoutMs);
  }

  async expectAnAttemptToInvite36ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite36), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite36IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite36));
  }

  async getInnerTextJavaHttpClient2101121(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101121));
  }

  async expectJavaHttpClient2101121Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101121), timeoutMs);
  }

  async expectJavaHttpClient2101121Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient2101121), timeoutMs);
  }

  async expectJavaHttpClient2101121Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient2101121), expected, timeoutMs);
  }

  async expectJavaHttpClient2101121ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient2101121), substring, timeoutMs);
  }

  async scrollJavaHttpClient2101121IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101121));
  }

  async clickSendFeedback(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.sendFeedback));
  }

  async doubleClickSendFeedback(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.sendFeedback));
  }

  async expectSendFeedbackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.sendFeedback), expected, timeoutMs);
  }

  async expectSendFeedbackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.sendFeedback), substring, timeoutMs);
  }

  async scrollSendFeedbackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.sendFeedback));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async clickAcmeCorporation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.acmeCorporation));
  }

  async doubleClickAcmeCorporation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.acmeCorporation));
  }

  async longPressAcmeCorporation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.acmeCorporation));
  }

  async expectAcmeCorporationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.acmeCorporation), value, timeoutMs);
  }

  async expectAcmeCorporationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.acmeCorporation), count, timeoutMs);
  }

  async longPressUKGAssist(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.uKGAssist));
  }

  async expectUKGAssistValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.uKGAssist), value, timeoutMs);
  }

  async expectUKGAssistEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.uKGAssist), timeoutMs);
  }

  async expectUKGAssistCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.uKGAssist), count, timeoutMs);
  }

  async longPressSubscriptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.subscriptions));
  }

  async expectSubscriptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.subscriptions), value, timeoutMs);
  }

  async expectSubscriptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.subscriptions), count, timeoutMs);
  }

  async longPressImplementations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.implementations));
  }

  async expectImplementationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.implementations), value, timeoutMs);
  }

  async expectImplementationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.implementations), timeoutMs);
  }

  async expectImplementationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.implementations), timeoutMs);
  }

  async expectImplementationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.implementations), timeoutMs);
  }

  async expectImplementationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.implementations), timeoutMs);
  }

  async expectImplementationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.implementations), timeoutMs);
  }

  async expectImplementationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.implementations), count, timeoutMs);
  }

  async longPressBillings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.billings));
  }

  async expectBillingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.billings), value, timeoutMs);
  }

  async expectBillingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.billings), timeoutMs);
  }

  async expectBillingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.billings), timeoutMs);
  }

  async expectBillingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.billings), timeoutMs);
  }

  async expectBillingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.billings), timeoutMs);
  }

  async expectBillingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.billings), timeoutMs);
  }

  async expectBillingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.billings), count, timeoutMs);
  }

  async longPressSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.support));
  }

  async expectSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.support), value, timeoutMs);
  }

  async expectSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.support), timeoutMs);
  }

  async expectSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.support), timeoutMs);
  }

  async expectSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.support), timeoutMs);
  }

  async expectSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.support), timeoutMs);
  }

  async expectSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.support), timeoutMs);
  }

  async expectSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.support), count, timeoutMs);
  }

  async longPressAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.adoption));
  }

  async expectAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.adoption), value, timeoutMs);
  }

  async expectAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.adoption), timeoutMs);
  }

  async expectAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.adoption), timeoutMs);
  }

  async expectAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.adoption), timeoutMs);
  }

  async expectAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.adoption), timeoutMs);
  }

  async expectAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.adoption), timeoutMs);
  }

  async expectAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.adoption), count, timeoutMs);
  }

  async longPressAdmin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.admin));
  }

  async expectAdminValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.admin), value, timeoutMs);
  }

  async expectAdminEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.admin), timeoutMs);
  }

  async expectAdminDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.admin), timeoutMs);
  }

  async expectAdminChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.admin), timeoutMs);
  }

  async expectAdminUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.admin), timeoutMs);
  }

  async expectAdminFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.admin), timeoutMs);
  }

  async expectAdminCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.admin), count, timeoutMs);
  }

  async longPressAccountProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.accountProfile));
  }

  async expectAccountProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.accountProfile), value, timeoutMs);
  }

  async expectAccountProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.accountProfile), count, timeoutMs);
  }

  async longPressEJEmmaJohnsonPortal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.eJEmmaJohnsonPortal));
  }

  async expectEJEmmaJohnsonPortalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.eJEmmaJohnsonPortal), value, timeoutMs);
  }

  async expectEJEmmaJohnsonPortalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.eJEmmaJohnsonPortal), timeoutMs);
  }

  async expectEJEmmaJohnsonPortalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.eJEmmaJohnsonPortal), count, timeoutMs);
  }

  async longPressSignOut(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.signOut));
  }

  async expectSignOutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.signOut), value, timeoutMs);
  }

  async expectSignOutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.signOut), timeoutMs);
  }

  async expectSignOutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.signOut), timeoutMs);
  }

  async expectSignOutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.signOut), timeoutMs);
  }

  async expectSignOutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.signOut), count, timeoutMs);
  }

  async longPressCollapseSidebar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.collapseSidebar));
  }

  async expectCollapseSidebarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.collapseSidebar), value, timeoutMs);
  }

  async expectCollapseSidebarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.collapseSidebar), count, timeoutMs);
  }

  async clickPersonalInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.personalInformation));
  }

  async doubleClickPersonalInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.personalInformation));
  }

  async longPressPersonalInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.personalInformation));
  }

  async expectPersonalInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.personalInformation), value, timeoutMs);
  }

  async expectPersonalInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.personalInformation), timeoutMs);
  }

  async expectPersonalInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.personalInformation), timeoutMs);
  }

  async expectPersonalInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.personalInformation), timeoutMs);
  }

  async expectPersonalInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.personalInformation), timeoutMs);
  }

  async expectPersonalInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.personalInformation), timeoutMs);
  }

  async expectPersonalInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.personalInformation), count, timeoutMs);
  }

  async clickYourNameContactDetails(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.yourNameContactDetails));
  }

  async doubleClickYourNameContactDetails(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.yourNameContactDetails));
  }

  async longPressYourNameContactDetails(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.yourNameContactDetails));
  }

  async expectYourNameContactDetailsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.yourNameContactDetails), value, timeoutMs);
  }

  async expectYourNameContactDetailsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.yourNameContactDetails), timeoutMs);
  }

  async expectYourNameContactDetailsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.yourNameContactDetails), timeoutMs);
  }

  async expectYourNameContactDetailsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.yourNameContactDetails), timeoutMs);
  }

  async expectYourNameContactDetailsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.yourNameContactDetails), timeoutMs);
  }

  async expectYourNameContactDetailsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.yourNameContactDetails), timeoutMs);
  }

  async expectYourNameContactDetailsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.yourNameContactDetails), count, timeoutMs);
  }

  async clickDisplayName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.displayName));
  }

  async doubleClickDisplayName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.displayName));
  }

  async longPressDisplayName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.displayName));
  }

  async expectDisplayNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.displayName), value, timeoutMs);
  }

  async expectDisplayNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.displayName), timeoutMs);
  }

  async expectDisplayNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.displayName), timeoutMs);
  }

  async expectDisplayNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.displayName), timeoutMs);
  }

  async expectDisplayNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.displayName), timeoutMs);
  }

  async expectDisplayNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.displayName), timeoutMs);
  }

  async expectDisplayNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.displayName), count, timeoutMs);
  }

  async clickEmmaJohnson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.emmaJohnson));
  }

  async doubleClickEmmaJohnson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.emmaJohnson));
  }

  async longPressEmmaJohnson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.emmaJohnson));
  }

  async expectEmmaJohnsonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.emmaJohnson), value, timeoutMs);
  }

  async expectEmmaJohnsonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.emmaJohnson), count, timeoutMs);
  }

  async clickEmailAddress(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.emailAddress));
  }

  async doubleClickEmailAddress(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.emailAddress));
  }

  async longPressEmailAddress(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.emailAddress));
  }

  async expectEmailAddressValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.emailAddress), value, timeoutMs);
  }

  async expectEmailAddressEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.emailAddress), count, timeoutMs);
  }

  async clickUser1AcmecorporationExampleCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom));
  }

  async doubleClickUser1AcmecorporationExampleCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom));
  }

  async longPressUser1AcmecorporationExampleCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom));
  }

  async expectUser1AcmecorporationExampleComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), value, timeoutMs);
  }

  async expectUser1AcmecorporationExampleComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), count, timeoutMs);
  }

  async clickJobTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.jobTitle));
  }

  async doubleClickJobTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.jobTitle));
  }

  async longPressJobTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.jobTitle));
  }

  async expectJobTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.jobTitle), value, timeoutMs);
  }

  async expectJobTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.jobTitle), timeoutMs);
  }

  async expectJobTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.jobTitle), timeoutMs);
  }

  async expectJobTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.jobTitle), timeoutMs);
  }

  async expectJobTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.jobTitle), timeoutMs);
  }

  async expectJobTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.jobTitle), timeoutMs);
  }

  async expectJobTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.jobTitle), count, timeoutMs);
  }

  async clickMarketingManager(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.marketingManager));
  }

  async doubleClickMarketingManager(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.marketingManager));
  }

  async longPressMarketingManager(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.marketingManager));
  }

  async expectMarketingManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.marketingManager), value, timeoutMs);
  }

  async expectMarketingManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.marketingManager), timeoutMs);
  }

  async expectMarketingManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.marketingManager), timeoutMs);
  }

  async expectMarketingManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.marketingManager), timeoutMs);
  }

  async expectMarketingManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.marketingManager), timeoutMs);
  }

  async expectMarketingManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.marketingManager), timeoutMs);
  }

  async expectMarketingManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.marketingManager), count, timeoutMs);
  }

  async clickPhoneNumber(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.phoneNumber));
  }

  async doubleClickPhoneNumber(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.phoneNumber));
  }

  async longPressPhoneNumber(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.phoneNumber));
  }

  async expectPhoneNumberValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.phoneNumber), value, timeoutMs);
  }

  async expectPhoneNumberEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.phoneNumber), timeoutMs);
  }

  async expectPhoneNumberDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.phoneNumber), timeoutMs);
  }

  async expectPhoneNumberChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.phoneNumber), timeoutMs);
  }

  async expectPhoneNumberUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.phoneNumber), timeoutMs);
  }

  async expectPhoneNumberFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.phoneNumber), timeoutMs);
  }

  async expectPhoneNumberCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.phoneNumber), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.element), count, timeoutMs);
  }

  async clickTimezone(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.timezone));
  }

  async doubleClickTimezone(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.timezone));
  }

  async longPressTimezone(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.timezone));
  }

  async expectTimezoneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.timezone), value, timeoutMs);
  }

  async expectTimezoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.timezone), timeoutMs);
  }

  async expectTimezoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.timezone), timeoutMs);
  }

  async expectTimezoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.timezone), timeoutMs);
  }

  async expectTimezoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.timezone), timeoutMs);
  }

  async expectTimezoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.timezone), timeoutMs);
  }

  async expectTimezoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.timezone), count, timeoutMs);
  }

  async clickAmericaNewYork(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.americaNewYork));
  }

  async doubleClickAmericaNewYork(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.americaNewYork));
  }

  async longPressAmericaNewYork(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.americaNewYork));
  }

  async expectAmericaNewYorkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.americaNewYork), value, timeoutMs);
  }

  async expectAmericaNewYorkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.americaNewYork), timeoutMs);
  }

  async expectAmericaNewYorkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.americaNewYork), timeoutMs);
  }

  async expectAmericaNewYorkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.americaNewYork), timeoutMs);
  }

  async expectAmericaNewYorkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.americaNewYork), timeoutMs);
  }

  async expectAmericaNewYorkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.americaNewYork), timeoutMs);
  }

  async expectAmericaNewYorkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.americaNewYork), count, timeoutMs);
  }

  async clickLanguage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.language));
  }

  async doubleClickLanguage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.language));
  }

  async longPressLanguage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.language));
  }

  async expectLanguageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.language), value, timeoutMs);
  }

  async expectLanguageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.language), timeoutMs);
  }

  async expectLanguageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.language), timeoutMs);
  }

  async expectLanguageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.language), timeoutMs);
  }

  async expectLanguageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.language), timeoutMs);
  }

  async expectLanguageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.language), timeoutMs);
  }

  async expectLanguageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.language), count, timeoutMs);
  }

  async clickEnglishUS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.englishUS));
  }

  async doubleClickEnglishUS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.englishUS));
  }

  async longPressEnglishUS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.englishUS));
  }

  async expectEnglishUSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.englishUS), value, timeoutMs);
  }

  async expectEnglishUSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.englishUS), timeoutMs);
  }

  async expectEnglishUSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.englishUS), timeoutMs);
  }

  async expectEnglishUSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.englishUS), timeoutMs);
  }

  async expectEnglishUSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.englishUS), timeoutMs);
  }

  async expectEnglishUSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.englishUS), timeoutMs);
  }

  async expectEnglishUSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.englishUS), count, timeoutMs);
  }

  async clickRolePermissions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.rolePermissions));
  }

  async doubleClickRolePermissions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.rolePermissions));
  }

  async longPressRolePermissions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.rolePermissions));
  }

  async expectRolePermissionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.rolePermissions), value, timeoutMs);
  }

  async expectRolePermissionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.rolePermissions), timeoutMs);
  }

  async expectRolePermissionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.rolePermissions), timeoutMs);
  }

  async expectRolePermissionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.rolePermissions), timeoutMs);
  }

  async expectRolePermissionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.rolePermissions), timeoutMs);
  }

  async expectRolePermissionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.rolePermissions), timeoutMs);
  }

  async expectRolePermissionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.rolePermissions), count, timeoutMs);
  }

  async clickYourPortalAccessLevel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel));
  }

  async doubleClickYourPortalAccessLevel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel));
  }

  async longPressYourPortalAccessLevel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel));
  }

  async expectYourPortalAccessLevelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), value, timeoutMs);
  }

  async expectYourPortalAccessLevelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), timeoutMs);
  }

  async expectYourPortalAccessLevelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), timeoutMs);
  }

  async expectYourPortalAccessLevelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), timeoutMs);
  }

  async expectYourPortalAccessLevelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), timeoutMs);
  }

  async expectYourPortalAccessLevelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), timeoutMs);
  }

  async expectYourPortalAccessLevelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), count, timeoutMs);
  }

  async clickPortalAdministrator(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.portalAdministrator));
  }

  async doubleClickPortalAdministrator(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.portalAdministrator));
  }

  async longPressPortalAdministrator(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.portalAdministrator));
  }

  async expectPortalAdministratorValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.portalAdministrator), value, timeoutMs);
  }

  async expectPortalAdministratorEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.portalAdministrator), count, timeoutMs);
  }

  async longPressSupportButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.supportButton));
  }

  async expectSupportButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.supportButton), value, timeoutMs);
  }

  async expectSupportButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.supportButton), timeoutMs);
  }

  async expectSupportButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.supportButton), timeoutMs);
  }

  async expectSupportButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.supportButton), timeoutMs);
  }

  async expectSupportButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.supportButton), count, timeoutMs);
  }

  async clickAccessCommunityMyUKGLinks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks));
  }

  async doubleClickAccessCommunityMyUKGLinks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks));
  }

  async longPressAccessCommunityMyUKGLinks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks));
  }

  async expectAccessCommunityMyUKGLinksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), value, timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), count, timeoutMs);
  }

  async clickCreateSupportTickets(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.createSupportTickets));
  }

  async doubleClickCreateSupportTickets(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.createSupportTickets));
  }

  async longPressCreateSupportTickets(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.createSupportTickets));
  }

  async expectCreateSupportTicketsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.createSupportTickets), value, timeoutMs);
  }

  async expectCreateSupportTicketsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.createSupportTickets), timeoutMs);
  }

  async expectCreateSupportTicketsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.createSupportTickets), timeoutMs);
  }

  async expectCreateSupportTicketsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.createSupportTickets), timeoutMs);
  }

  async expectCreateSupportTicketsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.createSupportTickets), timeoutMs);
  }

  async expectCreateSupportTicketsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.createSupportTickets), timeoutMs);
  }

  async expectCreateSupportTicketsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.createSupportTickets), count, timeoutMs);
  }

  async clickSearchSupportHistory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportHistory));
  }

  async doubleClickSearchSupportHistory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportHistory));
  }

  async longPressSearchSupportHistory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportHistory));
  }

  async expectSearchSupportHistoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.searchSupportHistory), value, timeoutMs);
  }

  async expectSearchSupportHistoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.searchSupportHistory), timeoutMs);
  }

  async expectSearchSupportHistoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.searchSupportHistory), timeoutMs);
  }

  async expectSearchSupportHistoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.searchSupportHistory), timeoutMs);
  }

  async expectSearchSupportHistoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.searchSupportHistory), timeoutMs);
  }

  async expectSearchSupportHistoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.searchSupportHistory), timeoutMs);
  }

  async expectSearchSupportHistoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.searchSupportHistory), count, timeoutMs);
  }

  async clickSearchSupportTickets(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportTickets));
  }

  async doubleClickSearchSupportTickets(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportTickets));
  }

  async longPressSearchSupportTickets(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportTickets));
  }

  async expectSearchSupportTicketsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.searchSupportTickets), value, timeoutMs);
  }

  async expectSearchSupportTicketsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.searchSupportTickets), timeoutMs);
  }

  async expectSearchSupportTicketsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.searchSupportTickets), timeoutMs);
  }

  async expectSearchSupportTicketsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.searchSupportTickets), timeoutMs);
  }

  async expectSearchSupportTicketsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.searchSupportTickets), timeoutMs);
  }

  async expectSearchSupportTicketsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.searchSupportTickets), timeoutMs);
  }

  async expectSearchSupportTicketsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.searchSupportTickets), count, timeoutMs);
  }

  async clickViewAgingCaseSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary));
  }

  async doubleClickViewAgingCaseSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary));
  }

  async longPressViewAgingCaseSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary));
  }

  async expectViewAgingCaseSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), value, timeoutMs);
  }

  async expectViewAgingCaseSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), timeoutMs);
  }

  async expectViewAgingCaseSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), timeoutMs);
  }

  async expectViewAgingCaseSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), timeoutMs);
  }

  async expectViewAgingCaseSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), timeoutMs);
  }

  async expectViewAgingCaseSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), timeoutMs);
  }

  async expectViewAgingCaseSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), count, timeoutMs);
  }

  async clickViewCaseTrends(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewCaseTrends));
  }

  async doubleClickViewCaseTrends(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewCaseTrends));
  }

  async longPressViewCaseTrends(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewCaseTrends));
  }

  async expectViewCaseTrendsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewCaseTrends), value, timeoutMs);
  }

  async expectViewCaseTrendsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewCaseTrends), timeoutMs);
  }

  async expectViewCaseTrendsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewCaseTrends), timeoutMs);
  }

  async expectViewCaseTrendsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewCaseTrends), timeoutMs);
  }

  async expectViewCaseTrendsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewCaseTrends), timeoutMs);
  }

  async expectViewCaseTrendsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewCaseTrends), timeoutMs);
  }

  async expectViewCaseTrendsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewCaseTrends), count, timeoutMs);
  }

  async clickViewSLABreachAlerts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSLABreachAlerts));
  }

  async doubleClickViewSLABreachAlerts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSLABreachAlerts));
  }

  async longPressViewSLABreachAlerts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSLABreachAlerts));
  }

  async expectViewSLABreachAlertsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSLABreachAlerts), value, timeoutMs);
  }

  async expectViewSLABreachAlertsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSLABreachAlerts), timeoutMs);
  }

  async expectViewSLABreachAlertsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSLABreachAlerts), timeoutMs);
  }

  async expectViewSLABreachAlertsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSLABreachAlerts), timeoutMs);
  }

  async expectViewSLABreachAlertsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSLABreachAlerts), timeoutMs);
  }

  async expectViewSLABreachAlertsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSLABreachAlerts), timeoutMs);
  }

  async expectViewSLABreachAlertsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSLABreachAlerts), count, timeoutMs);
  }

  async clickViewSLAComplianceCharts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSLAComplianceCharts));
  }

  async doubleClickViewSLAComplianceCharts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSLAComplianceCharts));
  }

  async longPressViewSLAComplianceCharts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSLAComplianceCharts));
  }

  async expectViewSLAComplianceChartsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSLAComplianceCharts), value, timeoutMs);
  }

  async expectViewSLAComplianceChartsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSLAComplianceCharts), timeoutMs);
  }

  async expectViewSLAComplianceChartsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSLAComplianceCharts), timeoutMs);
  }

  async expectViewSLAComplianceChartsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSLAComplianceCharts), timeoutMs);
  }

  async expectViewSLAComplianceChartsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSLAComplianceCharts), timeoutMs);
  }

  async expectViewSLAComplianceChartsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSLAComplianceCharts), timeoutMs);
  }

  async expectViewSLAComplianceChartsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSLAComplianceCharts), count, timeoutMs);
  }

  async clickViewSLACountdown(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSLACountdown));
  }

  async doubleClickViewSLACountdown(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSLACountdown));
  }

  async longPressViewSLACountdown(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSLACountdown));
  }

  async expectViewSLACountdownValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSLACountdown), value, timeoutMs);
  }

  async expectViewSLACountdownEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSLACountdown), timeoutMs);
  }

  async expectViewSLACountdownDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSLACountdown), timeoutMs);
  }

  async expectViewSLACountdownChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSLACountdown), timeoutMs);
  }

  async expectViewSLACountdownUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSLACountdown), timeoutMs);
  }

  async expectViewSLACountdownFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSLACountdown), timeoutMs);
  }

  async expectViewSLACountdownCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSLACountdown), count, timeoutMs);
  }

  async clickViewSLARiskPanel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSLARiskPanel));
  }

  async doubleClickViewSLARiskPanel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSLARiskPanel));
  }

  async longPressViewSLARiskPanel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSLARiskPanel));
  }

  async expectViewSLARiskPanelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSLARiskPanel), value, timeoutMs);
  }

  async expectViewSLARiskPanelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSLARiskPanel), timeoutMs);
  }

  async expectViewSLARiskPanelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSLARiskPanel), timeoutMs);
  }

  async expectViewSLARiskPanelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSLARiskPanel), timeoutMs);
  }

  async expectViewSLARiskPanelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSLARiskPanel), timeoutMs);
  }

  async expectViewSLARiskPanelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSLARiskPanel), timeoutMs);
  }

  async expectViewSLARiskPanelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSLARiskPanel), count, timeoutMs);
  }

  async clickViewSupportAIInsights(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportAIInsights));
  }

  async doubleClickViewSupportAIInsights(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportAIInsights));
  }

  async longPressViewSupportAIInsights(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportAIInsights));
  }

  async expectViewSupportAIInsightsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSupportAIInsights), value, timeoutMs);
  }

  async expectViewSupportAIInsightsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSupportAIInsights), timeoutMs);
  }

  async expectViewSupportAIInsightsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSupportAIInsights), timeoutMs);
  }

  async expectViewSupportAIInsightsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSupportAIInsights), timeoutMs);
  }

  async expectViewSupportAIInsightsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSupportAIInsights), timeoutMs);
  }

  async expectViewSupportAIInsightsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSupportAIInsights), timeoutMs);
  }

  async expectViewSupportAIInsightsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSupportAIInsights), count, timeoutMs);
  }

  async clickViewSupportModule(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportModule));
  }

  async doubleClickViewSupportModule(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportModule));
  }

  async longPressViewSupportModule(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportModule));
  }

  async expectViewSupportModuleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSupportModule), value, timeoutMs);
  }

  async expectViewSupportModuleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSupportModule), timeoutMs);
  }

  async expectViewSupportModuleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSupportModule), timeoutMs);
  }

  async expectViewSupportModuleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSupportModule), timeoutMs);
  }

  async expectViewSupportModuleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSupportModule), timeoutMs);
  }

  async expectViewSupportModuleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSupportModule), timeoutMs);
  }

  async expectViewSupportModuleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSupportModule), count, timeoutMs);
  }

  async clickViewSupportOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportOverview));
  }

  async doubleClickViewSupportOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportOverview));
  }

  async longPressViewSupportOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportOverview));
  }

  async expectViewSupportOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSupportOverview), value, timeoutMs);
  }

  async expectViewSupportOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSupportOverview), timeoutMs);
  }

  async expectViewSupportOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSupportOverview), timeoutMs);
  }

  async expectViewSupportOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSupportOverview), timeoutMs);
  }

  async expectViewSupportOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSupportOverview), timeoutMs);
  }

  async expectViewSupportOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSupportOverview), timeoutMs);
  }

  async expectViewSupportOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSupportOverview), count, timeoutMs);
  }

  async clickViewSupportSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportSummary));
  }

  async doubleClickViewSupportSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportSummary));
  }

  async longPressViewSupportSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportSummary));
  }

  async expectViewSupportSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSupportSummary), value, timeoutMs);
  }

  async expectViewSupportSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSupportSummary), timeoutMs);
  }

  async expectViewSupportSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSupportSummary), timeoutMs);
  }

  async expectViewSupportSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSupportSummary), timeoutMs);
  }

  async expectViewSupportSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSupportSummary), timeoutMs);
  }

  async expectViewSupportSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSupportSummary), timeoutMs);
  }

  async expectViewSupportSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSupportSummary), count, timeoutMs);
  }

  async clickViewSupportTicketDetails(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails));
  }

  async doubleClickViewSupportTicketDetails(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails));
  }

  async longPressViewSupportTicketDetails(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails));
  }

  async expectViewSupportTicketDetailsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), value, timeoutMs);
  }

  async expectViewSupportTicketDetailsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), timeoutMs);
  }

  async expectViewSupportTicketDetailsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), timeoutMs);
  }

  async expectViewSupportTicketDetailsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), timeoutMs);
  }

  async expectViewSupportTicketDetailsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), timeoutMs);
  }

  async expectViewSupportTicketDetailsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), timeoutMs);
  }

  async expectViewSupportTicketDetailsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), count, timeoutMs);
  }

  async clickViewSupportTicketHistory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory));
  }

  async doubleClickViewSupportTicketHistory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory));
  }

  async longPressViewSupportTicketHistory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory));
  }

  async expectViewSupportTicketHistoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), value, timeoutMs);
  }

  async expectViewSupportTicketHistoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), timeoutMs);
  }

  async expectViewSupportTicketHistoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), timeoutMs);
  }

  async expectViewSupportTicketHistoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), timeoutMs);
  }

  async expectViewSupportTicketHistoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), timeoutMs);
  }

  async expectViewSupportTicketHistoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), timeoutMs);
  }

  async expectViewSupportTicketHistoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), count, timeoutMs);
  }

  async clickViewSupportTickets(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTickets));
  }

  async doubleClickViewSupportTickets(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTickets));
  }

  async longPressViewSupportTickets(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTickets));
  }

  async expectViewSupportTicketsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSupportTickets), value, timeoutMs);
  }

  async expectViewSupportTicketsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSupportTickets), timeoutMs);
  }

  async expectViewSupportTicketsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSupportTickets), timeoutMs);
  }

  async expectViewSupportTicketsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSupportTickets), timeoutMs);
  }

  async expectViewSupportTicketsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSupportTickets), timeoutMs);
  }

  async expectViewSupportTicketsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSupportTickets), timeoutMs);
  }

  async expectViewSupportTicketsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSupportTickets), count, timeoutMs);
  }

  async clickViewTicketOverviewChart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart));
  }

  async doubleClickViewTicketOverviewChart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart));
  }

  async longPressViewTicketOverviewChart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart));
  }

  async expectViewTicketOverviewChartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), value, timeoutMs);
  }

  async expectViewTicketOverviewChartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), timeoutMs);
  }

  async expectViewTicketOverviewChartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), timeoutMs);
  }

  async expectViewTicketOverviewChartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), timeoutMs);
  }

  async expectViewTicketOverviewChartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), timeoutMs);
  }

  async expectViewTicketOverviewChartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), timeoutMs);
  }

  async expectViewTicketOverviewChartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), count, timeoutMs);
  }

  async longPressAdminButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.adminButton));
  }

  async expectAdminButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.adminButton), value, timeoutMs);
  }

  async expectAdminButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.adminButton), timeoutMs);
  }

  async expectAdminButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.adminButton), timeoutMs);
  }

  async expectAdminButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.adminButton), timeoutMs);
  }

  async expectAdminButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.adminButton), count, timeoutMs);
  }

  async longPressBillingPayments(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.billingPayments));
  }

  async expectBillingPaymentsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.billingPayments), value, timeoutMs);
  }

  async expectBillingPaymentsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.billingPayments), timeoutMs);
  }

  async expectBillingPaymentsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.billingPayments), timeoutMs);
  }

  async expectBillingPaymentsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.billingPayments), timeoutMs);
  }

  async expectBillingPaymentsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.billingPayments), count, timeoutMs);
  }

  async longPressSubscriptionsRenewals(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.subscriptionsRenewals));
  }

  async expectSubscriptionsRenewalsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), value, timeoutMs);
  }

  async expectSubscriptionsRenewalsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), timeoutMs);
  }

  async expectSubscriptionsRenewalsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), timeoutMs);
  }

  async expectSubscriptionsRenewalsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), timeoutMs);
  }

  async expectSubscriptionsRenewalsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), count, timeoutMs);
  }

  async longPressUKGAssistButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.uKGAssistButton));
  }

  async expectUKGAssistButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.uKGAssistButton), value, timeoutMs);
  }

  async expectUKGAssistButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.uKGAssistButton), timeoutMs);
  }

  async expectUKGAssistButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.uKGAssistButton), timeoutMs);
  }

  async expectUKGAssistButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.uKGAssistButton), timeoutMs);
  }

  async expectUKGAssistButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.uKGAssistButton), count, timeoutMs);
  }

  async longPressCustomerProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.customerProfile));
  }

  async expectCustomerProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.customerProfile), value, timeoutMs);
  }

  async expectCustomerProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.customerProfile), timeoutMs);
  }

  async expectCustomerProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.customerProfile), timeoutMs);
  }

  async expectCustomerProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.customerProfile), timeoutMs);
  }

  async expectCustomerProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.customerProfile), count, timeoutMs);
  }

  async longPressUserProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.userProfile));
  }

  async expectUserProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.userProfile), value, timeoutMs);
  }

  async expectUserProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.userProfile), timeoutMs);
  }

  async expectUserProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.userProfile), timeoutMs);
  }

  async expectUserProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.userProfile), timeoutMs);
  }

  async expectUserProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.userProfile), count, timeoutMs);
  }

  async clickActiveSessions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.activeSessions));
  }

  async doubleClickActiveSessions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.activeSessions));
  }

  async longPressActiveSessions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.activeSessions));
  }

  async expectActiveSessionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.activeSessions), value, timeoutMs);
  }

  async expectActiveSessionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.activeSessions), timeoutMs);
  }

  async expectActiveSessionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.activeSessions), timeoutMs);
  }

  async expectActiveSessionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.activeSessions), timeoutMs);
  }

  async expectActiveSessionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.activeSessions), timeoutMs);
  }

  async expectActiveSessionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.activeSessions), timeoutMs);
  }

  async expectActiveSessionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.activeSessions), count, timeoutMs);
  }

  async clickDevicesCurrentlySignedIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn));
  }

  async doubleClickDevicesCurrentlySignedIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn));
  }

  async longPressDevicesCurrentlySignedIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn));
  }

  async expectDevicesCurrentlySignedInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), value, timeoutMs);
  }

  async expectDevicesCurrentlySignedInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), timeoutMs);
  }

  async expectDevicesCurrentlySignedInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), timeoutMs);
  }

  async expectDevicesCurrentlySignedInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), timeoutMs);
  }

  async expectDevicesCurrentlySignedInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), timeoutMs);
  }

  async expectDevicesCurrentlySignedInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), timeoutMs);
  }

  async expectDevicesCurrentlySignedInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), count, timeoutMs);
  }

  async clickNoActiveSessionsFound(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.noActiveSessionsFound));
  }

  async doubleClickNoActiveSessionsFound(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.noActiveSessionsFound));
  }

  async longPressNoActiveSessionsFound(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.noActiveSessionsFound));
  }

  async expectNoActiveSessionsFoundValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.noActiveSessionsFound), value, timeoutMs);
  }

  async expectNoActiveSessionsFoundEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.noActiveSessionsFound), timeoutMs);
  }

  async expectNoActiveSessionsFoundDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.noActiveSessionsFound), timeoutMs);
  }

  async expectNoActiveSessionsFoundChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.noActiveSessionsFound), timeoutMs);
  }

  async expectNoActiveSessionsFoundUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.noActiveSessionsFound), timeoutMs);
  }

  async expectNoActiveSessionsFoundFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.noActiveSessionsFound), timeoutMs);
  }

  async expectNoActiveSessionsFoundCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.noActiveSessionsFound), count, timeoutMs);
  }

  async clickActivityLog(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.activityLog));
  }

  async doubleClickActivityLog(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.activityLog));
  }

  async longPressActivityLog(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.activityLog));
  }

  async expectActivityLogValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.activityLog), value, timeoutMs);
  }

  async expectActivityLogEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.activityLog), timeoutMs);
  }

  async expectActivityLogDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.activityLog), timeoutMs);
  }

  async expectActivityLogChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.activityLog), timeoutMs);
  }

  async expectActivityLogUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.activityLog), timeoutMs);
  }

  async expectActivityLogFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.activityLog), timeoutMs);
  }

  async expectActivityLogCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.activityLog), count, timeoutMs);
  }

  async clickAccountActivityLogIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.accountActivityLogIn));
  }

  async doubleClickAccountActivityLogIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.accountActivityLogIn));
  }

  async longPressAccountActivityLogIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.accountActivityLogIn));
  }

  async expectAccountActivityLogInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.accountActivityLogIn), value, timeoutMs);
  }

  async expectAccountActivityLogInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.accountActivityLogIn), timeoutMs);
  }

  async expectAccountActivityLogInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.accountActivityLogIn), timeoutMs);
  }

  async expectAccountActivityLogInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.accountActivityLogIn), timeoutMs);
  }

  async expectAccountActivityLogInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.accountActivityLogIn), timeoutMs);
  }

  async expectAccountActivityLogInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.accountActivityLogIn), timeoutMs);
  }

  async expectAccountActivityLogInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.accountActivityLogIn), count, timeoutMs);
  }

  async clickAuditLogWasExported(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported));
  }

  async doubleClickAuditLogWasExported(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported));
  }

  async longPressAuditLogWasExported(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported));
  }

  async expectAuditLogWasExportedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.auditLogWasExported), value, timeoutMs);
  }

  async expectAuditLogWasExportedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.auditLogWasExported), timeoutMs);
  }

  async expectAuditLogWasExportedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.auditLogWasExported), timeoutMs);
  }

  async expectAuditLogWasExportedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.auditLogWasExported), timeoutMs);
  }

  async expectAuditLogWasExportedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.auditLogWasExported), timeoutMs);
  }

  async expectAuditLogWasExportedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.auditLogWasExported), timeoutMs);
  }

  async expectAuditLogWasExportedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.auditLogWasExported), count, timeoutMs);
  }

  async clickChrome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome));
  }

  async doubleClickChrome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome));
  }

  async longPressChrome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome));
  }

  async expectChromeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome), value, timeoutMs);
  }

  async expectChromeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome), timeoutMs);
  }

  async expectChromeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome), timeoutMs);
  }

  async expectChromeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome), timeoutMs);
  }

  async expectChromeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome), timeoutMs);
  }

  async expectChromeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome), timeoutMs);
  }

  async expectChromeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome), count, timeoutMs);
  }

  async longPressAnAttemptToInvite(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite));
  }

  async expectAnAttemptToInviteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite), value, timeoutMs);
  }

  async expectAnAttemptToInviteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite), timeoutMs);
  }

  async expectAnAttemptToInviteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite), timeoutMs);
  }

  async expectAnAttemptToInviteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite), timeoutMs);
  }

  async expectAnAttemptToInviteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite), count, timeoutMs);
  }

  async clickAnAttemptToInvite2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite2));
  }

  async doubleClickAnAttemptToInvite2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite2));
  }

  async longPressAnAttemptToInvite2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite2));
  }

  async expectAnAttemptToInvite2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), value, timeoutMs);
  }

  async expectAnAttemptToInvite2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), timeoutMs);
  }

  async expectAnAttemptToInvite2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), timeoutMs);
  }

  async expectAnAttemptToInvite2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), timeoutMs);
  }

  async expectAnAttemptToInvite2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), timeoutMs);
  }

  async expectAnAttemptToInvite2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), timeoutMs);
  }

  async expectAnAttemptToInvite2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), count, timeoutMs);
  }

  async clickChrome2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome2));
  }

  async doubleClickChrome2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome2));
  }

  async longPressChrome2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome2));
  }

  async expectChrome2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome2), value, timeoutMs);
  }

  async expectChrome2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome2), timeoutMs);
  }

  async expectChrome2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome2), timeoutMs);
  }

  async expectChrome2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome2), timeoutMs);
  }

  async expectChrome2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome2), timeoutMs);
  }

  async expectChrome2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome2), timeoutMs);
  }

  async expectChrome2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome2), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption));
  }

  async expectAnAttemptToInviteOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), value, timeoutMs);
  }

  async expectAnAttemptToInviteOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), timeoutMs);
  }

  async expectAnAttemptToInviteOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), timeoutMs);
  }

  async expectAnAttemptToInviteOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), timeoutMs);
  }

  async expectAnAttemptToInviteOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), count, timeoutMs);
  }

  async clickAnAttemptToInvite3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite3));
  }

  async doubleClickAnAttemptToInvite3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite3));
  }

  async longPressAnAttemptToInvite3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite3));
  }

  async expectAnAttemptToInvite3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite3), value, timeoutMs);
  }

  async expectAnAttemptToInvite3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite3), timeoutMs);
  }

  async expectAnAttemptToInvite3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite3), timeoutMs);
  }

  async expectAnAttemptToInvite3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite3), timeoutMs);
  }

  async expectAnAttemptToInvite3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite3), timeoutMs);
  }

  async expectAnAttemptToInvite3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite3), timeoutMs);
  }

  async expectAnAttemptToInvite3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite3), count, timeoutMs);
  }

  async clickChrome3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome3));
  }

  async doubleClickChrome3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome3));
  }

  async longPressChrome3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome3));
  }

  async expectChrome3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome3), value, timeoutMs);
  }

  async expectChrome3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome3), timeoutMs);
  }

  async expectChrome3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome3), timeoutMs);
  }

  async expectChrome3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome3), timeoutMs);
  }

  async expectChrome3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome3), timeoutMs);
  }

  async expectChrome3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome3), timeoutMs);
  }

  async expectChrome3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome3), count, timeoutMs);
  }

  async longPressAnAttemptToInviteAnAttemptToInviteUserWas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas));
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), value, timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), count, timeoutMs);
  }

  async clickAnAttemptToInvite4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite4));
  }

  async doubleClickAnAttemptToInvite4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite4));
  }

  async longPressAnAttemptToInvite4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite4));
  }

  async expectAnAttemptToInvite4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite4), value, timeoutMs);
  }

  async expectAnAttemptToInvite4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite4), timeoutMs);
  }

  async expectAnAttemptToInvite4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite4), timeoutMs);
  }

  async expectAnAttemptToInvite4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite4), timeoutMs);
  }

  async expectAnAttemptToInvite4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite4), timeoutMs);
  }

  async expectAnAttemptToInvite4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite4), timeoutMs);
  }

  async expectAnAttemptToInvite4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite4), count, timeoutMs);
  }

  async clickChrome4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome4));
  }

  async doubleClickChrome4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome4));
  }

  async longPressChrome4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome4));
  }

  async expectChrome4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome4), value, timeoutMs);
  }

  async expectChrome4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome4), timeoutMs);
  }

  async expectChrome4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome4), timeoutMs);
  }

  async expectChrome4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome4), timeoutMs);
  }

  async expectChrome4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome4), timeoutMs);
  }

  async expectChrome4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome4), timeoutMs);
  }

  async expectChrome4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome4), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption2));
  }

  async expectAnAttemptToInviteOption2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption2), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption2), timeoutMs);
  }

  async expectAnAttemptToInviteOption2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption2), timeoutMs);
  }

  async expectAnAttemptToInviteOption2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption2), timeoutMs);
  }

  async expectAnAttemptToInviteOption2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption2), count, timeoutMs);
  }

  async clickAnAttemptToInvite5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite5));
  }

  async doubleClickAnAttemptToInvite5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite5));
  }

  async longPressAnAttemptToInvite5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite5));
  }

  async expectAnAttemptToInvite5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite5), value, timeoutMs);
  }

  async expectAnAttemptToInvite5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite5), timeoutMs);
  }

  async expectAnAttemptToInvite5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite5), timeoutMs);
  }

  async expectAnAttemptToInvite5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite5), timeoutMs);
  }

  async expectAnAttemptToInvite5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite5), timeoutMs);
  }

  async expectAnAttemptToInvite5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite5), timeoutMs);
  }

  async expectAnAttemptToInvite5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite5), count, timeoutMs);
  }

  async clickChrome5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome5));
  }

  async doubleClickChrome5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome5));
  }

  async longPressChrome5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome5));
  }

  async expectChrome5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome5), value, timeoutMs);
  }

  async expectChrome5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome5), timeoutMs);
  }

  async expectChrome5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome5), timeoutMs);
  }

  async expectChrome5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome5), timeoutMs);
  }

  async expectChrome5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome5), timeoutMs);
  }

  async expectChrome5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome5), timeoutMs);
  }

  async expectChrome5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome5), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption3));
  }

  async expectAnAttemptToInviteOption3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption3), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption3), timeoutMs);
  }

  async expectAnAttemptToInviteOption3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption3), timeoutMs);
  }

  async expectAnAttemptToInviteOption3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption3), timeoutMs);
  }

  async expectAnAttemptToInviteOption3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption3), count, timeoutMs);
  }

  async clickAnAttemptToInvite6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite6));
  }

  async doubleClickAnAttemptToInvite6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite6));
  }

  async longPressAnAttemptToInvite6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite6));
  }

  async expectAnAttemptToInvite6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite6), value, timeoutMs);
  }

  async expectAnAttemptToInvite6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite6), timeoutMs);
  }

  async expectAnAttemptToInvite6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite6), timeoutMs);
  }

  async expectAnAttemptToInvite6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite6), timeoutMs);
  }

  async expectAnAttemptToInvite6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite6), timeoutMs);
  }

  async expectAnAttemptToInvite6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite6), timeoutMs);
  }

  async expectAnAttemptToInvite6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite6), count, timeoutMs);
  }

  async clickChrome6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome6));
  }

  async doubleClickChrome6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome6));
  }

  async longPressChrome6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome6));
  }

  async expectChrome6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome6), value, timeoutMs);
  }

  async expectChrome6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome6), timeoutMs);
  }

  async expectChrome6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome6), timeoutMs);
  }

  async expectChrome6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome6), timeoutMs);
  }

  async expectChrome6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome6), timeoutMs);
  }

  async expectChrome6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome6), timeoutMs);
  }

  async expectChrome6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome6), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4));
  }

  async expectAnAttemptToInviteOption4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), timeoutMs);
  }

  async expectAnAttemptToInviteOption4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), timeoutMs);
  }

  async expectAnAttemptToInviteOption4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), timeoutMs);
  }

  async expectAnAttemptToInviteOption4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), count, timeoutMs);
  }

  async clickAnAttemptToInvite7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite7));
  }

  async doubleClickAnAttemptToInvite7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite7));
  }

  async longPressAnAttemptToInvite7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite7));
  }

  async expectAnAttemptToInvite7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite7), value, timeoutMs);
  }

  async expectAnAttemptToInvite7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite7), timeoutMs);
  }

  async expectAnAttemptToInvite7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite7), timeoutMs);
  }

  async expectAnAttemptToInvite7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite7), timeoutMs);
  }

  async expectAnAttemptToInvite7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite7), timeoutMs);
  }

  async expectAnAttemptToInvite7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite7), timeoutMs);
  }

  async expectAnAttemptToInvite7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite7), count, timeoutMs);
  }

  async clickChrome7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome7));
  }

  async doubleClickChrome7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome7));
  }

  async longPressChrome7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome7));
  }

  async expectChrome7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome7), value, timeoutMs);
  }

  async expectChrome7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome7), timeoutMs);
  }

  async expectChrome7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome7), timeoutMs);
  }

  async expectChrome7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome7), timeoutMs);
  }

  async expectChrome7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome7), timeoutMs);
  }

  async expectChrome7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome7), timeoutMs);
  }

  async expectChrome7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome7), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption5));
  }

  async expectAnAttemptToInviteOption5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption5), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption5), timeoutMs);
  }

  async expectAnAttemptToInviteOption5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption5), timeoutMs);
  }

  async expectAnAttemptToInviteOption5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption5), timeoutMs);
  }

  async expectAnAttemptToInviteOption5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption5), count, timeoutMs);
  }

  async clickAnAttemptToInvite8(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite8));
  }

  async doubleClickAnAttemptToInvite8(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite8));
  }

  async longPressAnAttemptToInvite8(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite8));
  }

  async expectAnAttemptToInvite8Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite8), value, timeoutMs);
  }

  async expectAnAttemptToInvite8Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite8), timeoutMs);
  }

  async expectAnAttemptToInvite8Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite8), timeoutMs);
  }

  async expectAnAttemptToInvite8Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite8), timeoutMs);
  }

  async expectAnAttemptToInvite8Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite8), timeoutMs);
  }

  async expectAnAttemptToInvite8Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite8), timeoutMs);
  }

  async expectAnAttemptToInvite8Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite8), count, timeoutMs);
  }

  async clickChrome8(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome8));
  }

  async doubleClickChrome8(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome8));
  }

  async longPressChrome8(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome8));
  }

  async expectChrome8Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome8), value, timeoutMs);
  }

  async expectChrome8Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome8), timeoutMs);
  }

  async expectChrome8Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome8), timeoutMs);
  }

  async expectChrome8Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome8), timeoutMs);
  }

  async expectChrome8Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome8), timeoutMs);
  }

  async expectChrome8Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome8), timeoutMs);
  }

  async expectChrome8Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome8), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6));
  }

  async expectAnAttemptToInviteOption6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), timeoutMs);
  }

  async expectAnAttemptToInviteOption6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), timeoutMs);
  }

  async expectAnAttemptToInviteOption6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), timeoutMs);
  }

  async expectAnAttemptToInviteOption6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), count, timeoutMs);
  }

  async clickAnAttemptToInvite9(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite9));
  }

  async doubleClickAnAttemptToInvite9(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite9));
  }

  async longPressAnAttemptToInvite9(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite9));
  }

  async expectAnAttemptToInvite9Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite9), value, timeoutMs);
  }

  async expectAnAttemptToInvite9Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite9), timeoutMs);
  }

  async expectAnAttemptToInvite9Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite9), timeoutMs);
  }

  async expectAnAttemptToInvite9Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite9), timeoutMs);
  }

  async expectAnAttemptToInvite9Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite9), timeoutMs);
  }

  async expectAnAttemptToInvite9Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite9), timeoutMs);
  }

  async expectAnAttemptToInvite9Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite9), count, timeoutMs);
  }

  async clickChrome9(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome9));
  }

  async doubleClickChrome9(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome9));
  }

  async longPressChrome9(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome9));
  }

  async expectChrome9Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome9), value, timeoutMs);
  }

  async expectChrome9Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome9), timeoutMs);
  }

  async expectChrome9Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome9), timeoutMs);
  }

  async expectChrome9Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome9), timeoutMs);
  }

  async expectChrome9Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome9), timeoutMs);
  }

  async expectChrome9Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome9), timeoutMs);
  }

  async expectChrome9Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome9), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption7));
  }

  async expectAnAttemptToInviteOption7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption7), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption7), timeoutMs);
  }

  async expectAnAttemptToInviteOption7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption7), timeoutMs);
  }

  async expectAnAttemptToInviteOption7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption7), timeoutMs);
  }

  async expectAnAttemptToInviteOption7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption7), count, timeoutMs);
  }

  async clickAnAttemptToInvite10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite10));
  }

  async doubleClickAnAttemptToInvite10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite10));
  }

  async longPressAnAttemptToInvite10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite10));
  }

  async expectAnAttemptToInvite10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite10), value, timeoutMs);
  }

  async expectAnAttemptToInvite10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite10), timeoutMs);
  }

  async expectAnAttemptToInvite10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite10), timeoutMs);
  }

  async expectAnAttemptToInvite10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite10), timeoutMs);
  }

  async expectAnAttemptToInvite10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite10), timeoutMs);
  }

  async expectAnAttemptToInvite10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite10), timeoutMs);
  }

  async expectAnAttemptToInvite10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite10), count, timeoutMs);
  }

  async clickChrome10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome10));
  }

  async doubleClickChrome10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome10));
  }

  async longPressChrome10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome10));
  }

  async expectChrome10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome10), value, timeoutMs);
  }

  async expectChrome10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome10), timeoutMs);
  }

  async expectChrome10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome10), timeoutMs);
  }

  async expectChrome10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome10), timeoutMs);
  }

  async expectChrome10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome10), timeoutMs);
  }

  async expectChrome10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome10), timeoutMs);
  }

  async expectChrome10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome10), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption8(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8));
  }

  async expectAnAttemptToInviteOption8Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption8Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), timeoutMs);
  }

  async expectAnAttemptToInviteOption8Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), timeoutMs);
  }

  async expectAnAttemptToInviteOption8Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), timeoutMs);
  }

  async expectAnAttemptToInviteOption8Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), count, timeoutMs);
  }

  async clickAnAttemptToInvite11(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite11));
  }

  async doubleClickAnAttemptToInvite11(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite11));
  }

  async longPressAnAttemptToInvite11(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite11));
  }

  async expectAnAttemptToInvite11Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite11), value, timeoutMs);
  }

  async expectAnAttemptToInvite11Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite11), timeoutMs);
  }

  async expectAnAttemptToInvite11Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite11), timeoutMs);
  }

  async expectAnAttemptToInvite11Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite11), timeoutMs);
  }

  async expectAnAttemptToInvite11Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite11), timeoutMs);
  }

  async expectAnAttemptToInvite11Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite11), timeoutMs);
  }

  async expectAnAttemptToInvite11Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite11), count, timeoutMs);
  }

  async clickChrome11(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome11));
  }

  async doubleClickChrome11(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome11));
  }

  async longPressChrome11(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome11));
  }

  async expectChrome11Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome11), value, timeoutMs);
  }

  async expectChrome11Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome11), timeoutMs);
  }

  async expectChrome11Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome11), timeoutMs);
  }

  async expectChrome11Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome11), timeoutMs);
  }

  async expectChrome11Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome11), timeoutMs);
  }

  async expectChrome11Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome11), timeoutMs);
  }

  async expectChrome11Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome11), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption9(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9));
  }

  async expectAnAttemptToInviteOption9Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption9Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), timeoutMs);
  }

  async expectAnAttemptToInviteOption9Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), timeoutMs);
  }

  async expectAnAttemptToInviteOption9Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), timeoutMs);
  }

  async expectAnAttemptToInviteOption9Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), count, timeoutMs);
  }

  async clickAnAttemptToInvite12(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite12));
  }

  async doubleClickAnAttemptToInvite12(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite12));
  }

  async longPressAnAttemptToInvite12(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite12));
  }

  async expectAnAttemptToInvite12Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite12), value, timeoutMs);
  }

  async expectAnAttemptToInvite12Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite12), timeoutMs);
  }

  async expectAnAttemptToInvite12Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite12), timeoutMs);
  }

  async expectAnAttemptToInvite12Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite12), timeoutMs);
  }

  async expectAnAttemptToInvite12Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite12), timeoutMs);
  }

  async expectAnAttemptToInvite12Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite12), timeoutMs);
  }

  async expectAnAttemptToInvite12Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite12), count, timeoutMs);
  }

  async clickChrome12(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome12));
  }

  async doubleClickChrome12(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome12));
  }

  async longPressChrome12(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome12));
  }

  async expectChrome12Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome12), value, timeoutMs);
  }

  async expectChrome12Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome12), timeoutMs);
  }

  async expectChrome12Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome12), timeoutMs);
  }

  async expectChrome12Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome12), timeoutMs);
  }

  async expectChrome12Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome12), timeoutMs);
  }

  async expectChrome12Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome12), timeoutMs);
  }

  async expectChrome12Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome12), count, timeoutMs);
  }

  async longPressANewUserAccount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount));
  }

  async expectANewUserAccountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccount), value, timeoutMs);
  }

  async expectANewUserAccountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccount), timeoutMs);
  }

  async expectANewUserAccountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccount), timeoutMs);
  }

  async expectANewUserAccountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccount), timeoutMs);
  }

  async expectANewUserAccountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccount), count, timeoutMs);
  }

  async clickANewUserAccount2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount2));
  }

  async doubleClickANewUserAccount2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount2));
  }

  async longPressANewUserAccount2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount2));
  }

  async expectANewUserAccount2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccount2), value, timeoutMs);
  }

  async expectANewUserAccount2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccount2), timeoutMs);
  }

  async expectANewUserAccount2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccount2), timeoutMs);
  }

  async expectANewUserAccount2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccount2), timeoutMs);
  }

  async expectANewUserAccount2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccount2), timeoutMs);
  }

  async expectANewUserAccount2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccount2), timeoutMs);
  }

  async expectANewUserAccount2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccount2), count, timeoutMs);
  }

  async clickChrome13(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome13));
  }

  async doubleClickChrome13(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome13));
  }

  async longPressChrome13(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome13));
  }

  async expectChrome13Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome13), value, timeoutMs);
  }

  async expectChrome13Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome13), timeoutMs);
  }

  async expectChrome13Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome13), timeoutMs);
  }

  async expectChrome13Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome13), timeoutMs);
  }

  async expectChrome13Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome13), timeoutMs);
  }

  async expectChrome13Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome13), timeoutMs);
  }

  async expectChrome13Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome13), count, timeoutMs);
  }

  async clickAuditLogWasExported2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported2));
  }

  async doubleClickAuditLogWasExported2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported2));
  }

  async longPressAuditLogWasExported2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported2));
  }

  async expectAuditLogWasExported2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.auditLogWasExported2), value, timeoutMs);
  }

  async expectAuditLogWasExported2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.auditLogWasExported2), timeoutMs);
  }

  async expectAuditLogWasExported2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.auditLogWasExported2), timeoutMs);
  }

  async expectAuditLogWasExported2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.auditLogWasExported2), timeoutMs);
  }

  async expectAuditLogWasExported2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.auditLogWasExported2), timeoutMs);
  }

  async expectAuditLogWasExported2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.auditLogWasExported2), timeoutMs);
  }

  async expectAuditLogWasExported2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.auditLogWasExported2), count, timeoutMs);
  }

  async clickChrome14(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome14));
  }

  async doubleClickChrome14(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome14));
  }

  async longPressChrome14(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome14));
  }

  async expectChrome14Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome14), value, timeoutMs);
  }

  async expectChrome14Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome14), timeoutMs);
  }

  async expectChrome14Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome14), timeoutMs);
  }

  async expectChrome14Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome14), timeoutMs);
  }

  async expectChrome14Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome14), timeoutMs);
  }

  async expectChrome14Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome14), timeoutMs);
  }

  async expectChrome14Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome14), count, timeoutMs);
  }

  async clickAuditLogWasExported3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported3));
  }

  async doubleClickAuditLogWasExported3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported3));
  }

  async longPressAuditLogWasExported3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported3));
  }

  async expectAuditLogWasExported3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.auditLogWasExported3), value, timeoutMs);
  }

  async expectAuditLogWasExported3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.auditLogWasExported3), timeoutMs);
  }

  async expectAuditLogWasExported3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.auditLogWasExported3), timeoutMs);
  }

  async expectAuditLogWasExported3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.auditLogWasExported3), timeoutMs);
  }

  async expectAuditLogWasExported3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.auditLogWasExported3), timeoutMs);
  }

  async expectAuditLogWasExported3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.auditLogWasExported3), timeoutMs);
  }

  async expectAuditLogWasExported3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.auditLogWasExported3), count, timeoutMs);
  }

  async clickChrome15(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome15));
  }

  async doubleClickChrome15(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome15));
  }

  async longPressChrome15(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome15));
  }

  async expectChrome15Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome15), value, timeoutMs);
  }

  async expectChrome15Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome15), timeoutMs);
  }

  async expectChrome15Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome15), timeoutMs);
  }

  async expectChrome15Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome15), timeoutMs);
  }

  async expectChrome15Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome15), timeoutMs);
  }

  async expectChrome15Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome15), timeoutMs);
  }

  async expectChrome15Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome15), count, timeoutMs);
  }

  async clickAuditLogWasExported4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported4));
  }

  async doubleClickAuditLogWasExported4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported4));
  }

  async longPressAuditLogWasExported4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported4));
  }

  async expectAuditLogWasExported4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.auditLogWasExported4), value, timeoutMs);
  }

  async expectAuditLogWasExported4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.auditLogWasExported4), timeoutMs);
  }

  async expectAuditLogWasExported4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.auditLogWasExported4), timeoutMs);
  }

  async expectAuditLogWasExported4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.auditLogWasExported4), timeoutMs);
  }

  async expectAuditLogWasExported4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.auditLogWasExported4), timeoutMs);
  }

  async expectAuditLogWasExported4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.auditLogWasExported4), timeoutMs);
  }

  async expectAuditLogWasExported4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.auditLogWasExported4), count, timeoutMs);
  }

  async clickChrome16(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome16));
  }

  async doubleClickChrome16(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome16));
  }

  async longPressChrome16(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome16));
  }

  async expectChrome16Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome16), value, timeoutMs);
  }

  async expectChrome16Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome16), timeoutMs);
  }

  async expectChrome16Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome16), timeoutMs);
  }

  async expectChrome16Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome16), timeoutMs);
  }

  async expectChrome16Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome16), timeoutMs);
  }

  async expectChrome16Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome16), timeoutMs);
  }

  async expectChrome16Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome16), count, timeoutMs);
  }

  async clickAuditLogWasExported5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported5));
  }

  async doubleClickAuditLogWasExported5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported5));
  }

  async longPressAuditLogWasExported5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported5));
  }

  async expectAuditLogWasExported5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.auditLogWasExported5), value, timeoutMs);
  }

  async expectAuditLogWasExported5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.auditLogWasExported5), timeoutMs);
  }

  async expectAuditLogWasExported5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.auditLogWasExported5), timeoutMs);
  }

  async expectAuditLogWasExported5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.auditLogWasExported5), timeoutMs);
  }

  async expectAuditLogWasExported5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.auditLogWasExported5), timeoutMs);
  }

  async expectAuditLogWasExported5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.auditLogWasExported5), timeoutMs);
  }

  async expectAuditLogWasExported5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.auditLogWasExported5), count, timeoutMs);
  }

  async clickChrome17(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome17));
  }

  async doubleClickChrome17(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome17));
  }

  async longPressChrome17(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome17));
  }

  async expectChrome17Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome17), value, timeoutMs);
  }

  async expectChrome17Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome17), timeoutMs);
  }

  async expectChrome17Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome17), timeoutMs);
  }

  async expectChrome17Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome17), timeoutMs);
  }

  async expectChrome17Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome17), timeoutMs);
  }

  async expectChrome17Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome17), timeoutMs);
  }

  async expectChrome17Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome17), count, timeoutMs);
  }

  async clickAuditLogWasExported6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported6));
  }

  async doubleClickAuditLogWasExported6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported6));
  }

  async longPressAuditLogWasExported6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported6));
  }

  async expectAuditLogWasExported6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.auditLogWasExported6), value, timeoutMs);
  }

  async expectAuditLogWasExported6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.auditLogWasExported6), timeoutMs);
  }

  async expectAuditLogWasExported6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.auditLogWasExported6), timeoutMs);
  }

  async expectAuditLogWasExported6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.auditLogWasExported6), timeoutMs);
  }

  async expectAuditLogWasExported6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.auditLogWasExported6), timeoutMs);
  }

  async expectAuditLogWasExported6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.auditLogWasExported6), timeoutMs);
  }

  async expectAuditLogWasExported6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.auditLogWasExported6), count, timeoutMs);
  }

  async clickChrome18(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome18));
  }

  async doubleClickChrome18(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome18));
  }

  async longPressChrome18(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome18));
  }

  async expectChrome18Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome18), value, timeoutMs);
  }

  async expectChrome18Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome18), timeoutMs);
  }

  async expectChrome18Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome18), timeoutMs);
  }

  async expectChrome18Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome18), timeoutMs);
  }

  async expectChrome18Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome18), timeoutMs);
  }

  async expectChrome18Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome18), timeoutMs);
  }

  async expectChrome18Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome18), count, timeoutMs);
  }

  async longPressANewUserAccountOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption));
  }

  async expectANewUserAccountOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), value, timeoutMs);
  }

  async expectANewUserAccountOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), timeoutMs);
  }

  async expectANewUserAccountOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), timeoutMs);
  }

  async expectANewUserAccountOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), timeoutMs);
  }

  async expectANewUserAccountOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), count, timeoutMs);
  }

  async clickANewUserAccount3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount3));
  }

  async doubleClickANewUserAccount3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount3));
  }

  async longPressANewUserAccount3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount3));
  }

  async expectANewUserAccount3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccount3), value, timeoutMs);
  }

  async expectANewUserAccount3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccount3), timeoutMs);
  }

  async expectANewUserAccount3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccount3), timeoutMs);
  }

  async expectANewUserAccount3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccount3), timeoutMs);
  }

  async expectANewUserAccount3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccount3), timeoutMs);
  }

  async expectANewUserAccount3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccount3), timeoutMs);
  }

  async expectANewUserAccount3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccount3), count, timeoutMs);
  }

  async clickChrome19(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome19));
  }

  async doubleClickChrome19(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome19));
  }

  async longPressChrome19(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome19));
  }

  async expectChrome19Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome19), value, timeoutMs);
  }

  async expectChrome19Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome19), timeoutMs);
  }

  async expectChrome19Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome19), timeoutMs);
  }

  async expectChrome19Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome19), timeoutMs);
  }

  async expectChrome19Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome19), timeoutMs);
  }

  async expectChrome19Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome19), timeoutMs);
  }

  async expectChrome19Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome19), count, timeoutMs);
  }

  async longPressANewUserAccountANewUserAccountWasCreated(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated));
  }

  async expectANewUserAccountANewUserAccountWasCreatedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), value, timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), count, timeoutMs);
  }

  async clickANewUserAccount4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount4));
  }

  async doubleClickANewUserAccount4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount4));
  }

  async longPressANewUserAccount4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount4));
  }

  async expectANewUserAccount4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccount4), value, timeoutMs);
  }

  async expectANewUserAccount4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccount4), timeoutMs);
  }

  async expectANewUserAccount4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccount4), timeoutMs);
  }

  async expectANewUserAccount4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccount4), timeoutMs);
  }

  async expectANewUserAccount4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccount4), timeoutMs);
  }

  async expectANewUserAccount4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccount4), timeoutMs);
  }

  async expectANewUserAccount4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccount4), count, timeoutMs);
  }

  async clickChrome20(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome20));
  }

  async doubleClickChrome20(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome20));
  }

  async longPressChrome20(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome20));
  }

  async expectChrome20Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome20), value, timeoutMs);
  }

  async expectChrome20Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome20), timeoutMs);
  }

  async expectChrome20Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome20), timeoutMs);
  }

  async expectChrome20Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome20), timeoutMs);
  }

  async expectChrome20Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome20), timeoutMs);
  }

  async expectChrome20Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome20), timeoutMs);
  }

  async expectChrome20Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome20), count, timeoutMs);
  }

  async longPressANewUserAccountOption2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2));
  }

  async expectANewUserAccountOption2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), value, timeoutMs);
  }

  async expectANewUserAccountOption2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), timeoutMs);
  }

  async expectANewUserAccountOption2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), timeoutMs);
  }

  async expectANewUserAccountOption2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), timeoutMs);
  }

  async expectANewUserAccountOption2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), count, timeoutMs);
  }

  async clickANewUserAccount5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount5));
  }

  async doubleClickANewUserAccount5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount5));
  }

  async longPressANewUserAccount5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount5));
  }

  async expectANewUserAccount5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccount5), value, timeoutMs);
  }

  async expectANewUserAccount5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccount5), timeoutMs);
  }

  async expectANewUserAccount5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccount5), timeoutMs);
  }

  async expectANewUserAccount5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccount5), timeoutMs);
  }

  async expectANewUserAccount5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccount5), timeoutMs);
  }

  async expectANewUserAccount5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccount5), timeoutMs);
  }

  async expectANewUserAccount5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccount5), count, timeoutMs);
  }

  async clickChrome21(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome21));
  }

  async doubleClickChrome21(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome21));
  }

  async longPressChrome21(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome21));
  }

  async expectChrome21Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome21), value, timeoutMs);
  }

  async expectChrome21Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome21), timeoutMs);
  }

  async expectChrome21Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome21), timeoutMs);
  }

  async expectChrome21Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome21), timeoutMs);
  }

  async expectChrome21Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome21), timeoutMs);
  }

  async expectChrome21Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome21), timeoutMs);
  }

  async expectChrome21Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome21), count, timeoutMs);
  }

  async longPressANewUserAccountOption3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption3));
  }

  async expectANewUserAccountOption3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccountOption3), value, timeoutMs);
  }

  async expectANewUserAccountOption3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption3), timeoutMs);
  }

  async expectANewUserAccountOption3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption3), timeoutMs);
  }

  async expectANewUserAccountOption3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccountOption3), timeoutMs);
  }

  async expectANewUserAccountOption3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccountOption3), count, timeoutMs);
  }

  async clickANewUserAccount6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount6));
  }

  async doubleClickANewUserAccount6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount6));
  }

  async longPressANewUserAccount6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount6));
  }

  async expectANewUserAccount6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccount6), value, timeoutMs);
  }

  async expectANewUserAccount6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccount6), timeoutMs);
  }

  async expectANewUserAccount6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccount6), timeoutMs);
  }

  async expectANewUserAccount6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccount6), timeoutMs);
  }

  async expectANewUserAccount6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccount6), timeoutMs);
  }

  async expectANewUserAccount6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccount6), timeoutMs);
  }

  async expectANewUserAccount6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccount6), count, timeoutMs);
  }

  async clickChrome22(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome22));
  }

  async doubleClickChrome22(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome22));
  }

  async longPressChrome22(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome22));
  }

  async expectChrome22Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome22), value, timeoutMs);
  }

  async expectChrome22Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome22), timeoutMs);
  }

  async expectChrome22Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome22), timeoutMs);
  }

  async expectChrome22Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome22), timeoutMs);
  }

  async expectChrome22Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome22), timeoutMs);
  }

  async expectChrome22Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome22), timeoutMs);
  }

  async expectChrome22Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome22), count, timeoutMs);
  }

  async longPressANewUserAccountOption4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4));
  }

  async expectANewUserAccountOption4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), value, timeoutMs);
  }

  async expectANewUserAccountOption4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), timeoutMs);
  }

  async expectANewUserAccountOption4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), timeoutMs);
  }

  async expectANewUserAccountOption4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), timeoutMs);
  }

  async expectANewUserAccountOption4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), count, timeoutMs);
  }

  async clickANewUserAccount7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount7));
  }

  async doubleClickANewUserAccount7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount7));
  }

  async longPressANewUserAccount7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount7));
  }

  async expectANewUserAccount7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccount7), value, timeoutMs);
  }

  async expectANewUserAccount7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccount7), timeoutMs);
  }

  async expectANewUserAccount7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccount7), timeoutMs);
  }

  async expectANewUserAccount7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccount7), timeoutMs);
  }

  async expectANewUserAccount7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccount7), timeoutMs);
  }

  async expectANewUserAccount7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccount7), timeoutMs);
  }

  async expectANewUserAccount7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccount7), count, timeoutMs);
  }

  async clickChrome23(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome23));
  }

  async doubleClickChrome23(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome23));
  }

  async longPressChrome23(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome23));
  }

  async expectChrome23Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome23), value, timeoutMs);
  }

  async expectChrome23Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome23), timeoutMs);
  }

  async expectChrome23Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome23), timeoutMs);
  }

  async expectChrome23Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome23), timeoutMs);
  }

  async expectChrome23Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome23), timeoutMs);
  }

  async expectChrome23Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome23), timeoutMs);
  }

  async expectChrome23Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome23), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10));
  }

  async expectAnAttemptToInviteOption10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), timeoutMs);
  }

  async expectAnAttemptToInviteOption10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), timeoutMs);
  }

  async expectAnAttemptToInviteOption10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), timeoutMs);
  }

  async expectAnAttemptToInviteOption10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), count, timeoutMs);
  }

  async clickAnAttemptToInvite13(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite13));
  }

  async doubleClickAnAttemptToInvite13(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite13));
  }

  async longPressAnAttemptToInvite13(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite13));
  }

  async expectAnAttemptToInvite13Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite13), value, timeoutMs);
  }

  async expectAnAttemptToInvite13Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite13), timeoutMs);
  }

  async expectAnAttemptToInvite13Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite13), timeoutMs);
  }

  async expectAnAttemptToInvite13Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite13), timeoutMs);
  }

  async expectAnAttemptToInvite13Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite13), timeoutMs);
  }

  async expectAnAttemptToInvite13Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite13), timeoutMs);
  }

  async expectAnAttemptToInvite13Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite13), count, timeoutMs);
  }

  async clickCurl(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.curl));
  }

  async doubleClickCurl(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.curl));
  }

  async longPressCurl(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.curl));
  }

  async expectCurlValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.curl), value, timeoutMs);
  }

  async expectCurlEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.curl), timeoutMs);
  }

  async expectCurlDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.curl), timeoutMs);
  }

  async expectCurlChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.curl), timeoutMs);
  }

  async expectCurlUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.curl), timeoutMs);
  }

  async expectCurlFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.curl), timeoutMs);
  }

  async expectCurlCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.curl), count, timeoutMs);
  }

  async longPressANewUserAccountOption5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5));
  }

  async expectANewUserAccountOption5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), value, timeoutMs);
  }

  async expectANewUserAccountOption5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), timeoutMs);
  }

  async expectANewUserAccountOption5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), timeoutMs);
  }

  async expectANewUserAccountOption5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), timeoutMs);
  }

  async expectANewUserAccountOption5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), count, timeoutMs);
  }

  async clickANewUserAccount8(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount8));
  }

  async doubleClickANewUserAccount8(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount8));
  }

  async longPressANewUserAccount8(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount8));
  }

  async expectANewUserAccount8Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccount8), value, timeoutMs);
  }

  async expectANewUserAccount8Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccount8), timeoutMs);
  }

  async expectANewUserAccount8Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccount8), timeoutMs);
  }

  async expectANewUserAccount8Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccount8), timeoutMs);
  }

  async expectANewUserAccount8Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccount8), timeoutMs);
  }

  async expectANewUserAccount8Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccount8), timeoutMs);
  }

  async expectANewUserAccount8Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccount8), count, timeoutMs);
  }

  async clickChrome24(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome24));
  }

  async doubleClickChrome24(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome24));
  }

  async longPressChrome24(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome24));
  }

  async expectChrome24Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome24), value, timeoutMs);
  }

  async expectChrome24Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome24), timeoutMs);
  }

  async expectChrome24Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome24), timeoutMs);
  }

  async expectChrome24Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome24), timeoutMs);
  }

  async expectChrome24Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome24), timeoutMs);
  }

  async expectChrome24Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome24), timeoutMs);
  }

  async expectChrome24Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome24), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption11(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11));
  }

  async expectAnAttemptToInviteOption11Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption11Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), timeoutMs);
  }

  async expectAnAttemptToInviteOption11Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), timeoutMs);
  }

  async expectAnAttemptToInviteOption11Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), timeoutMs);
  }

  async expectAnAttemptToInviteOption11Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), count, timeoutMs);
  }

  async clickAnAttemptToInvite14(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite14));
  }

  async doubleClickAnAttemptToInvite14(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite14));
  }

  async longPressAnAttemptToInvite14(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite14));
  }

  async expectAnAttemptToInvite14Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite14), value, timeoutMs);
  }

  async expectAnAttemptToInvite14Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite14), timeoutMs);
  }

  async expectAnAttemptToInvite14Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite14), timeoutMs);
  }

  async expectAnAttemptToInvite14Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite14), timeoutMs);
  }

  async expectAnAttemptToInvite14Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite14), timeoutMs);
  }

  async expectAnAttemptToInvite14Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite14), timeoutMs);
  }

  async expectAnAttemptToInvite14Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite14), count, timeoutMs);
  }

  async clickChrome25(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome25));
  }

  async doubleClickChrome25(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome25));
  }

  async longPressChrome25(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome25));
  }

  async expectChrome25Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome25), value, timeoutMs);
  }

  async expectChrome25Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome25), timeoutMs);
  }

  async expectChrome25Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome25), timeoutMs);
  }

  async expectChrome25Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome25), timeoutMs);
  }

  async expectChrome25Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome25), timeoutMs);
  }

  async expectChrome25Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome25), timeoutMs);
  }

  async expectChrome25Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome25), count, timeoutMs);
  }

  async longPressANewUserAccountOption6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6));
  }

  async expectANewUserAccountOption6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), value, timeoutMs);
  }

  async expectANewUserAccountOption6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), timeoutMs);
  }

  async expectANewUserAccountOption6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), timeoutMs);
  }

  async expectANewUserAccountOption6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), timeoutMs);
  }

  async expectANewUserAccountOption6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), count, timeoutMs);
  }

  async clickANewUserAccount9(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount9));
  }

  async doubleClickANewUserAccount9(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount9));
  }

  async longPressANewUserAccount9(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount9));
  }

  async expectANewUserAccount9Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccount9), value, timeoutMs);
  }

  async expectANewUserAccount9Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccount9), timeoutMs);
  }

  async expectANewUserAccount9Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccount9), timeoutMs);
  }

  async expectANewUserAccount9Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccount9), timeoutMs);
  }

  async expectANewUserAccount9Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccount9), timeoutMs);
  }

  async expectANewUserAccount9Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccount9), timeoutMs);
  }

  async expectANewUserAccount9Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccount9), count, timeoutMs);
  }

  async clickChrome26(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome26));
  }

  async doubleClickChrome26(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome26));
  }

  async longPressChrome26(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome26));
  }

  async expectChrome26Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome26), value, timeoutMs);
  }

  async expectChrome26Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome26), timeoutMs);
  }

  async expectChrome26Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome26), timeoutMs);
  }

  async expectChrome26Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome26), timeoutMs);
  }

  async expectChrome26Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome26), timeoutMs);
  }

  async expectChrome26Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome26), timeoutMs);
  }

  async expectChrome26Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome26), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption12(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12));
  }

  async expectAnAttemptToInviteOption12Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption12Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), timeoutMs);
  }

  async expectAnAttemptToInviteOption12Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), timeoutMs);
  }

  async expectAnAttemptToInviteOption12Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), timeoutMs);
  }

  async expectAnAttemptToInviteOption12Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), count, timeoutMs);
  }

  async clickAnAttemptToInvite15(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite15));
  }

  async doubleClickAnAttemptToInvite15(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite15));
  }

  async longPressAnAttemptToInvite15(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite15));
  }

  async expectAnAttemptToInvite15Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite15), value, timeoutMs);
  }

  async expectAnAttemptToInvite15Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite15), timeoutMs);
  }

  async expectAnAttemptToInvite15Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite15), timeoutMs);
  }

  async expectAnAttemptToInvite15Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite15), timeoutMs);
  }

  async expectAnAttemptToInvite15Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite15), timeoutMs);
  }

  async expectAnAttemptToInvite15Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite15), timeoutMs);
  }

  async expectAnAttemptToInvite15Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite15), count, timeoutMs);
  }

  async clickChrome27(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome27));
  }

  async doubleClickChrome27(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome27));
  }

  async longPressChrome27(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome27));
  }

  async expectChrome27Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome27), value, timeoutMs);
  }

  async expectChrome27Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome27), timeoutMs);
  }

  async expectChrome27Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome27), timeoutMs);
  }

  async expectChrome27Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome27), timeoutMs);
  }

  async expectChrome27Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome27), timeoutMs);
  }

  async expectChrome27Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome27), timeoutMs);
  }

  async expectChrome27Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome27), count, timeoutMs);
  }

  async clickAUserShubhamraj234GmailComWas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas));
  }

  async doubleClickAUserShubhamraj234GmailComWas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas));
  }

  async longPressAUserShubhamraj234GmailComWas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas));
  }

  async expectAUserShubhamraj234GmailComWasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas), value, timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas), timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas), timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas), timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas), timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas), timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas), count, timeoutMs);
  }

  async clickChrome28(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome28));
  }

  async doubleClickChrome28(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome28));
  }

  async longPressChrome28(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome28));
  }

  async expectChrome28Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome28), value, timeoutMs);
  }

  async expectChrome28Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome28), timeoutMs);
  }

  async expectChrome28Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome28), timeoutMs);
  }

  async expectChrome28Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome28), timeoutMs);
  }

  async expectChrome28Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome28), timeoutMs);
  }

  async expectChrome28Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome28), timeoutMs);
  }

  async expectChrome28Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome28), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption13(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13));
  }

  async expectAnAttemptToInviteOption13Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption13Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), timeoutMs);
  }

  async expectAnAttemptToInviteOption13Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), timeoutMs);
  }

  async expectAnAttemptToInviteOption13Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), timeoutMs);
  }

  async expectAnAttemptToInviteOption13Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), count, timeoutMs);
  }

  async clickAnAttemptToInvite16(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite16));
  }

  async doubleClickAnAttemptToInvite16(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite16));
  }

  async longPressAnAttemptToInvite16(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite16));
  }

  async expectAnAttemptToInvite16Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite16), value, timeoutMs);
  }

  async expectAnAttemptToInvite16Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite16), timeoutMs);
  }

  async expectAnAttemptToInvite16Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite16), timeoutMs);
  }

  async expectAnAttemptToInvite16Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite16), timeoutMs);
  }

  async expectAnAttemptToInvite16Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite16), timeoutMs);
  }

  async expectAnAttemptToInvite16Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite16), timeoutMs);
  }

  async expectAnAttemptToInvite16Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite16), count, timeoutMs);
  }

  async clickJavaHttpClient21011(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient21011));
  }

  async doubleClickJavaHttpClient21011(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient21011));
  }

  async longPressJavaHttpClient21011(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient21011));
  }

  async expectJavaHttpClient21011Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient21011), value, timeoutMs);
  }

  async expectJavaHttpClient21011Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient21011), timeoutMs);
  }

  async expectJavaHttpClient21011Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient21011), timeoutMs);
  }

  async expectJavaHttpClient21011Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient21011), timeoutMs);
  }

  async expectJavaHttpClient21011Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient21011), timeoutMs);
  }

  async expectJavaHttpClient21011Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient21011), timeoutMs);
  }

  async expectJavaHttpClient21011Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient21011), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption14(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14));
  }

  async expectAnAttemptToInviteOption14Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption14Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), timeoutMs);
  }

  async expectAnAttemptToInviteOption14Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), timeoutMs);
  }

  async expectAnAttemptToInviteOption14Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), timeoutMs);
  }

  async expectAnAttemptToInviteOption14Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), count, timeoutMs);
  }

  async clickAnAttemptToInvite17(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite17));
  }

  async doubleClickAnAttemptToInvite17(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite17));
  }

  async longPressAnAttemptToInvite17(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite17));
  }

  async expectAnAttemptToInvite17Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite17), value, timeoutMs);
  }

  async expectAnAttemptToInvite17Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite17), timeoutMs);
  }

  async expectAnAttemptToInvite17Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite17), timeoutMs);
  }

  async expectAnAttemptToInvite17Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite17), timeoutMs);
  }

  async expectAnAttemptToInvite17Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite17), timeoutMs);
  }

  async expectAnAttemptToInvite17Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite17), timeoutMs);
  }

  async expectAnAttemptToInvite17Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite17), count, timeoutMs);
  }

  async clickJavaHttpClient210112(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210112));
  }

  async doubleClickJavaHttpClient210112(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210112));
  }

  async longPressJavaHttpClient210112(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210112));
  }

  async expectJavaHttpClient210112Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient210112), value, timeoutMs);
  }

  async expectJavaHttpClient210112Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient210112), timeoutMs);
  }

  async expectJavaHttpClient210112Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient210112), timeoutMs);
  }

  async expectJavaHttpClient210112Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient210112), timeoutMs);
  }

  async expectJavaHttpClient210112Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient210112), timeoutMs);
  }

  async expectJavaHttpClient210112Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient210112), timeoutMs);
  }

  async expectJavaHttpClient210112Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient210112), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption15(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption15));
  }

  async expectAnAttemptToInviteOption15Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption15), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption15Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption15), timeoutMs);
  }

  async expectAnAttemptToInviteOption15Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption15), timeoutMs);
  }

  async expectAnAttemptToInviteOption15Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption15), timeoutMs);
  }

  async expectAnAttemptToInviteOption15Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption15), count, timeoutMs);
  }

  async clickAnAttemptToInvite18(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite18));
  }

  async doubleClickAnAttemptToInvite18(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite18));
  }

  async longPressAnAttemptToInvite18(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite18));
  }

  async expectAnAttemptToInvite18Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite18), value, timeoutMs);
  }

  async expectAnAttemptToInvite18Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite18), timeoutMs);
  }

  async expectAnAttemptToInvite18Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite18), timeoutMs);
  }

  async expectAnAttemptToInvite18Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite18), timeoutMs);
  }

  async expectAnAttemptToInvite18Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite18), timeoutMs);
  }

  async expectAnAttemptToInvite18Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite18), timeoutMs);
  }

  async expectAnAttemptToInvite18Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite18), count, timeoutMs);
  }

  async clickJavaHttpClient210113(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210113));
  }

  async doubleClickJavaHttpClient210113(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210113));
  }

  async longPressJavaHttpClient210113(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210113));
  }

  async expectJavaHttpClient210113Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient210113), value, timeoutMs);
  }

  async expectJavaHttpClient210113Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient210113), timeoutMs);
  }

  async expectJavaHttpClient210113Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient210113), timeoutMs);
  }

  async expectJavaHttpClient210113Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient210113), timeoutMs);
  }

  async expectJavaHttpClient210113Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient210113), timeoutMs);
  }

  async expectJavaHttpClient210113Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient210113), timeoutMs);
  }

  async expectJavaHttpClient210113Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient210113), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption16(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16));
  }

  async expectAnAttemptToInviteOption16Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption16Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), timeoutMs);
  }

  async expectAnAttemptToInviteOption16Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), timeoutMs);
  }

  async expectAnAttemptToInviteOption16Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), timeoutMs);
  }

  async expectAnAttemptToInviteOption16Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), count, timeoutMs);
  }

  async clickAnAttemptToInvite19(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite19));
  }

  async doubleClickAnAttemptToInvite19(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite19));
  }

  async longPressAnAttemptToInvite19(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite19));
  }

  async expectAnAttemptToInvite19Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite19), value, timeoutMs);
  }

  async expectAnAttemptToInvite19Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite19), timeoutMs);
  }

  async expectAnAttemptToInvite19Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite19), timeoutMs);
  }

  async expectAnAttemptToInvite19Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite19), timeoutMs);
  }

  async expectAnAttemptToInvite19Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite19), timeoutMs);
  }

  async expectAnAttemptToInvite19Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite19), timeoutMs);
  }

  async expectAnAttemptToInvite19Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite19), count, timeoutMs);
  }

  async clickJavaHttpClient210114(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210114));
  }

  async doubleClickJavaHttpClient210114(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210114));
  }

  async longPressJavaHttpClient210114(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210114));
  }

  async expectJavaHttpClient210114Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient210114), value, timeoutMs);
  }

  async expectJavaHttpClient210114Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient210114), timeoutMs);
  }

  async expectJavaHttpClient210114Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient210114), timeoutMs);
  }

  async expectJavaHttpClient210114Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient210114), timeoutMs);
  }

  async expectJavaHttpClient210114Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient210114), timeoutMs);
  }

  async expectJavaHttpClient210114Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient210114), timeoutMs);
  }

  async expectJavaHttpClient210114Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient210114), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption17(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17));
  }

  async expectAnAttemptToInviteOption17Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption17Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), timeoutMs);
  }

  async expectAnAttemptToInviteOption17Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), timeoutMs);
  }

  async expectAnAttemptToInviteOption17Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), timeoutMs);
  }

  async expectAnAttemptToInviteOption17Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), count, timeoutMs);
  }

  async clickAnAttemptToInvite20(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite20));
  }

  async doubleClickAnAttemptToInvite20(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite20));
  }

  async longPressAnAttemptToInvite20(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite20));
  }

  async expectAnAttemptToInvite20Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite20), value, timeoutMs);
  }

  async expectAnAttemptToInvite20Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite20), timeoutMs);
  }

  async expectAnAttemptToInvite20Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite20), timeoutMs);
  }

  async expectAnAttemptToInvite20Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite20), timeoutMs);
  }

  async expectAnAttemptToInvite20Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite20), timeoutMs);
  }

  async expectAnAttemptToInvite20Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite20), timeoutMs);
  }

  async expectAnAttemptToInvite20Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite20), count, timeoutMs);
  }

  async clickJavaHttpClient210115(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210115));
  }

  async doubleClickJavaHttpClient210115(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210115));
  }

  async longPressJavaHttpClient210115(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210115));
  }

  async expectJavaHttpClient210115Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient210115), value, timeoutMs);
  }

  async expectJavaHttpClient210115Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient210115), timeoutMs);
  }

  async expectJavaHttpClient210115Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient210115), timeoutMs);
  }

  async expectJavaHttpClient210115Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient210115), timeoutMs);
  }

  async expectJavaHttpClient210115Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient210115), timeoutMs);
  }

  async expectJavaHttpClient210115Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient210115), timeoutMs);
  }

  async expectJavaHttpClient210115Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient210115), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption18(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18));
  }

  async expectAnAttemptToInviteOption18Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption18Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), timeoutMs);
  }

  async expectAnAttemptToInviteOption18Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), timeoutMs);
  }

  async expectAnAttemptToInviteOption18Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), timeoutMs);
  }

  async expectAnAttemptToInviteOption18Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), count, timeoutMs);
  }

  async clickAnAttemptToInvite21(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite21));
  }

  async doubleClickAnAttemptToInvite21(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite21));
  }

  async longPressAnAttemptToInvite21(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite21));
  }

  async expectAnAttemptToInvite21Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite21), value, timeoutMs);
  }

  async expectAnAttemptToInvite21Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite21), timeoutMs);
  }

  async expectAnAttemptToInvite21Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite21), timeoutMs);
  }

  async expectAnAttemptToInvite21Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite21), timeoutMs);
  }

  async expectAnAttemptToInvite21Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite21), timeoutMs);
  }

  async expectAnAttemptToInvite21Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite21), timeoutMs);
  }

  async expectAnAttemptToInvite21Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite21), count, timeoutMs);
  }

  async clickJavaHttpClient210116(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210116));
  }

  async doubleClickJavaHttpClient210116(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210116));
  }

  async longPressJavaHttpClient210116(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210116));
  }

  async expectJavaHttpClient210116Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient210116), value, timeoutMs);
  }

  async expectJavaHttpClient210116Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient210116), timeoutMs);
  }

  async expectJavaHttpClient210116Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient210116), timeoutMs);
  }

  async expectJavaHttpClient210116Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient210116), timeoutMs);
  }

  async expectJavaHttpClient210116Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient210116), timeoutMs);
  }

  async expectJavaHttpClient210116Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient210116), timeoutMs);
  }

  async expectJavaHttpClient210116Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient210116), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption19(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption19));
  }

  async expectAnAttemptToInviteOption19Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption19), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption19Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption19), timeoutMs);
  }

  async expectAnAttemptToInviteOption19Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption19), timeoutMs);
  }

  async expectAnAttemptToInviteOption19Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption19), timeoutMs);
  }

  async expectAnAttemptToInviteOption19Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption19), count, timeoutMs);
  }

  async clickAnAttemptToInvite22(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite22));
  }

  async doubleClickAnAttemptToInvite22(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite22));
  }

  async longPressAnAttemptToInvite22(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite22));
  }

  async expectAnAttemptToInvite22Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite22), value, timeoutMs);
  }

  async expectAnAttemptToInvite22Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite22), timeoutMs);
  }

  async expectAnAttemptToInvite22Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite22), timeoutMs);
  }

  async expectAnAttemptToInvite22Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite22), timeoutMs);
  }

  async expectAnAttemptToInvite22Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite22), timeoutMs);
  }

  async expectAnAttemptToInvite22Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite22), timeoutMs);
  }

  async expectAnAttemptToInvite22Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite22), count, timeoutMs);
  }

  async clickJavaHttpClient210117(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210117));
  }

  async doubleClickJavaHttpClient210117(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210117));
  }

  async longPressJavaHttpClient210117(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210117));
  }

  async expectJavaHttpClient210117Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient210117), value, timeoutMs);
  }

  async expectJavaHttpClient210117Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient210117), timeoutMs);
  }

  async expectJavaHttpClient210117Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient210117), timeoutMs);
  }

  async expectJavaHttpClient210117Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient210117), timeoutMs);
  }

  async expectJavaHttpClient210117Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient210117), timeoutMs);
  }

  async expectJavaHttpClient210117Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient210117), timeoutMs);
  }

  async expectJavaHttpClient210117Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient210117), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption20(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20));
  }

  async expectAnAttemptToInviteOption20Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption20Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), timeoutMs);
  }

  async expectAnAttemptToInviteOption20Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), timeoutMs);
  }

  async expectAnAttemptToInviteOption20Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), timeoutMs);
  }

  async expectAnAttemptToInviteOption20Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), count, timeoutMs);
  }

  async clickAnAttemptToInvite23(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite23));
  }

  async doubleClickAnAttemptToInvite23(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite23));
  }

  async longPressAnAttemptToInvite23(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite23));
  }

  async expectAnAttemptToInvite23Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite23), value, timeoutMs);
  }

  async expectAnAttemptToInvite23Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite23), timeoutMs);
  }

  async expectAnAttemptToInvite23Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite23), timeoutMs);
  }

  async expectAnAttemptToInvite23Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite23), timeoutMs);
  }

  async expectAnAttemptToInvite23Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite23), timeoutMs);
  }

  async expectAnAttemptToInvite23Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite23), timeoutMs);
  }

  async expectAnAttemptToInvite23Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite23), count, timeoutMs);
  }

  async clickJavaHttpClient210118(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210118));
  }

  async doubleClickJavaHttpClient210118(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210118));
  }

  async longPressJavaHttpClient210118(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210118));
  }

  async expectJavaHttpClient210118Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient210118), value, timeoutMs);
  }

  async expectJavaHttpClient210118Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient210118), timeoutMs);
  }

  async expectJavaHttpClient210118Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient210118), timeoutMs);
  }

  async expectJavaHttpClient210118Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient210118), timeoutMs);
  }

  async expectJavaHttpClient210118Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient210118), timeoutMs);
  }

  async expectJavaHttpClient210118Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient210118), timeoutMs);
  }

  async expectJavaHttpClient210118Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient210118), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption21(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21));
  }

  async expectAnAttemptToInviteOption21Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption21Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), timeoutMs);
  }

  async expectAnAttemptToInviteOption21Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), timeoutMs);
  }

  async expectAnAttemptToInviteOption21Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), timeoutMs);
  }

  async expectAnAttemptToInviteOption21Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), count, timeoutMs);
  }

  async clickAnAttemptToInvite24(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite24));
  }

  async doubleClickAnAttemptToInvite24(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite24));
  }

  async longPressAnAttemptToInvite24(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite24));
  }

  async expectAnAttemptToInvite24Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite24), value, timeoutMs);
  }

  async expectAnAttemptToInvite24Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite24), timeoutMs);
  }

  async expectAnAttemptToInvite24Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite24), timeoutMs);
  }

  async expectAnAttemptToInvite24Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite24), timeoutMs);
  }

  async expectAnAttemptToInvite24Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite24), timeoutMs);
  }

  async expectAnAttemptToInvite24Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite24), timeoutMs);
  }

  async expectAnAttemptToInvite24Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite24), count, timeoutMs);
  }

  async clickJavaHttpClient210119(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210119));
  }

  async doubleClickJavaHttpClient210119(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210119));
  }

  async longPressJavaHttpClient210119(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient210119));
  }

  async expectJavaHttpClient210119Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient210119), value, timeoutMs);
  }

  async expectJavaHttpClient210119Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient210119), timeoutMs);
  }

  async expectJavaHttpClient210119Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient210119), timeoutMs);
  }

  async expectJavaHttpClient210119Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient210119), timeoutMs);
  }

  async expectJavaHttpClient210119Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient210119), timeoutMs);
  }

  async expectJavaHttpClient210119Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient210119), timeoutMs);
  }

  async expectJavaHttpClient210119Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient210119), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption22(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22));
  }

  async expectAnAttemptToInviteOption22Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption22Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), timeoutMs);
  }

  async expectAnAttemptToInviteOption22Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), timeoutMs);
  }

  async expectAnAttemptToInviteOption22Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), timeoutMs);
  }

  async expectAnAttemptToInviteOption22Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), count, timeoutMs);
  }

  async clickAnAttemptToInvite25(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite25));
  }

  async doubleClickAnAttemptToInvite25(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite25));
  }

  async longPressAnAttemptToInvite25(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite25));
  }

  async expectAnAttemptToInvite25Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite25), value, timeoutMs);
  }

  async expectAnAttemptToInvite25Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite25), timeoutMs);
  }

  async expectAnAttemptToInvite25Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite25), timeoutMs);
  }

  async expectAnAttemptToInvite25Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite25), timeoutMs);
  }

  async expectAnAttemptToInvite25Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite25), timeoutMs);
  }

  async expectAnAttemptToInvite25Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite25), timeoutMs);
  }

  async expectAnAttemptToInvite25Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite25), count, timeoutMs);
  }

  async clickJavaHttpClient2101110(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101110));
  }

  async doubleClickJavaHttpClient2101110(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101110));
  }

  async longPressJavaHttpClient2101110(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101110));
  }

  async expectJavaHttpClient2101110Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient2101110), value, timeoutMs);
  }

  async expectJavaHttpClient2101110Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101110), timeoutMs);
  }

  async expectJavaHttpClient2101110Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101110), timeoutMs);
  }

  async expectJavaHttpClient2101110Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101110), timeoutMs);
  }

  async expectJavaHttpClient2101110Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101110), timeoutMs);
  }

  async expectJavaHttpClient2101110Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient2101110), timeoutMs);
  }

  async expectJavaHttpClient2101110Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient2101110), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption23(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23));
  }

  async expectAnAttemptToInviteOption23Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption23Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), timeoutMs);
  }

  async expectAnAttemptToInviteOption23Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), timeoutMs);
  }

  async expectAnAttemptToInviteOption23Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), timeoutMs);
  }

  async expectAnAttemptToInviteOption23Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), count, timeoutMs);
  }

  async clickAnAttemptToInvite26(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite26));
  }

  async doubleClickAnAttemptToInvite26(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite26));
  }

  async longPressAnAttemptToInvite26(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite26));
  }

  async expectAnAttemptToInvite26Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite26), value, timeoutMs);
  }

  async expectAnAttemptToInvite26Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite26), timeoutMs);
  }

  async expectAnAttemptToInvite26Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite26), timeoutMs);
  }

  async expectAnAttemptToInvite26Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite26), timeoutMs);
  }

  async expectAnAttemptToInvite26Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite26), timeoutMs);
  }

  async expectAnAttemptToInvite26Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite26), timeoutMs);
  }

  async expectAnAttemptToInvite26Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite26), count, timeoutMs);
  }

  async clickJavaHttpClient2101111(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101111));
  }

  async doubleClickJavaHttpClient2101111(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101111));
  }

  async longPressJavaHttpClient2101111(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101111));
  }

  async expectJavaHttpClient2101111Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient2101111), value, timeoutMs);
  }

  async expectJavaHttpClient2101111Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101111), timeoutMs);
  }

  async expectJavaHttpClient2101111Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101111), timeoutMs);
  }

  async expectJavaHttpClient2101111Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101111), timeoutMs);
  }

  async expectJavaHttpClient2101111Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101111), timeoutMs);
  }

  async expectJavaHttpClient2101111Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient2101111), timeoutMs);
  }

  async expectJavaHttpClient2101111Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient2101111), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption24(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24));
  }

  async expectAnAttemptToInviteOption24Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption24Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), timeoutMs);
  }

  async expectAnAttemptToInviteOption24Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), timeoutMs);
  }

  async expectAnAttemptToInviteOption24Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), timeoutMs);
  }

  async expectAnAttemptToInviteOption24Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), count, timeoutMs);
  }

  async clickAnAttemptToInvite27(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite27));
  }

  async doubleClickAnAttemptToInvite27(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite27));
  }

  async longPressAnAttemptToInvite27(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite27));
  }

  async expectAnAttemptToInvite27Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite27), value, timeoutMs);
  }

  async expectAnAttemptToInvite27Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite27), timeoutMs);
  }

  async expectAnAttemptToInvite27Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite27), timeoutMs);
  }

  async expectAnAttemptToInvite27Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite27), timeoutMs);
  }

  async expectAnAttemptToInvite27Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite27), timeoutMs);
  }

  async expectAnAttemptToInvite27Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite27), timeoutMs);
  }

  async expectAnAttemptToInvite27Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite27), count, timeoutMs);
  }

  async clickJavaHttpClient2101112(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101112));
  }

  async doubleClickJavaHttpClient2101112(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101112));
  }

  async longPressJavaHttpClient2101112(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101112));
  }

  async expectJavaHttpClient2101112Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient2101112), value, timeoutMs);
  }

  async expectJavaHttpClient2101112Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101112), timeoutMs);
  }

  async expectJavaHttpClient2101112Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101112), timeoutMs);
  }

  async expectJavaHttpClient2101112Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101112), timeoutMs);
  }

  async expectJavaHttpClient2101112Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101112), timeoutMs);
  }

  async expectJavaHttpClient2101112Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient2101112), timeoutMs);
  }

  async expectJavaHttpClient2101112Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient2101112), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption25(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25));
  }

  async expectAnAttemptToInviteOption25Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption25Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), timeoutMs);
  }

  async expectAnAttemptToInviteOption25Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), timeoutMs);
  }

  async expectAnAttemptToInviteOption25Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), timeoutMs);
  }

  async expectAnAttemptToInviteOption25Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), count, timeoutMs);
  }

  async clickAnAttemptToInvite28(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite28));
  }

  async doubleClickAnAttemptToInvite28(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite28));
  }

  async longPressAnAttemptToInvite28(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite28));
  }

  async expectAnAttemptToInvite28Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite28), value, timeoutMs);
  }

  async expectAnAttemptToInvite28Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite28), timeoutMs);
  }

  async expectAnAttemptToInvite28Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite28), timeoutMs);
  }

  async expectAnAttemptToInvite28Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite28), timeoutMs);
  }

  async expectAnAttemptToInvite28Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite28), timeoutMs);
  }

  async expectAnAttemptToInvite28Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite28), timeoutMs);
  }

  async expectAnAttemptToInvite28Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite28), count, timeoutMs);
  }

  async clickJavaHttpClient2101113(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101113));
  }

  async doubleClickJavaHttpClient2101113(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101113));
  }

  async longPressJavaHttpClient2101113(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101113));
  }

  async expectJavaHttpClient2101113Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient2101113), value, timeoutMs);
  }

  async expectJavaHttpClient2101113Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101113), timeoutMs);
  }

  async expectJavaHttpClient2101113Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101113), timeoutMs);
  }

  async expectJavaHttpClient2101113Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101113), timeoutMs);
  }

  async expectJavaHttpClient2101113Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101113), timeoutMs);
  }

  async expectJavaHttpClient2101113Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient2101113), timeoutMs);
  }

  async expectJavaHttpClient2101113Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient2101113), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption26(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26));
  }

  async expectAnAttemptToInviteOption26Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption26Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), timeoutMs);
  }

  async expectAnAttemptToInviteOption26Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), timeoutMs);
  }

  async expectAnAttemptToInviteOption26Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), timeoutMs);
  }

  async expectAnAttemptToInviteOption26Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), count, timeoutMs);
  }

  async clickAnAttemptToInvite29(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite29));
  }

  async doubleClickAnAttemptToInvite29(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite29));
  }

  async longPressAnAttemptToInvite29(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite29));
  }

  async expectAnAttemptToInvite29Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite29), value, timeoutMs);
  }

  async expectAnAttemptToInvite29Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite29), timeoutMs);
  }

  async expectAnAttemptToInvite29Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite29), timeoutMs);
  }

  async expectAnAttemptToInvite29Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite29), timeoutMs);
  }

  async expectAnAttemptToInvite29Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite29), timeoutMs);
  }

  async expectAnAttemptToInvite29Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite29), timeoutMs);
  }

  async expectAnAttemptToInvite29Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite29), count, timeoutMs);
  }

  async clickJavaHttpClient2101114(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101114));
  }

  async doubleClickJavaHttpClient2101114(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101114));
  }

  async longPressJavaHttpClient2101114(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101114));
  }

  async expectJavaHttpClient2101114Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient2101114), value, timeoutMs);
  }

  async expectJavaHttpClient2101114Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101114), timeoutMs);
  }

  async expectJavaHttpClient2101114Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101114), timeoutMs);
  }

  async expectJavaHttpClient2101114Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101114), timeoutMs);
  }

  async expectJavaHttpClient2101114Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101114), timeoutMs);
  }

  async expectJavaHttpClient2101114Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient2101114), timeoutMs);
  }

  async expectJavaHttpClient2101114Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient2101114), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption27(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27));
  }

  async expectAnAttemptToInviteOption27Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption27Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), timeoutMs);
  }

  async expectAnAttemptToInviteOption27Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), timeoutMs);
  }

  async expectAnAttemptToInviteOption27Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), timeoutMs);
  }

  async expectAnAttemptToInviteOption27Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), count, timeoutMs);
  }

  async clickAnAttemptToInvite30(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite30));
  }

  async doubleClickAnAttemptToInvite30(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite30));
  }

  async longPressAnAttemptToInvite30(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite30));
  }

  async expectAnAttemptToInvite30Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite30), value, timeoutMs);
  }

  async expectAnAttemptToInvite30Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite30), timeoutMs);
  }

  async expectAnAttemptToInvite30Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite30), timeoutMs);
  }

  async expectAnAttemptToInvite30Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite30), timeoutMs);
  }

  async expectAnAttemptToInvite30Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite30), timeoutMs);
  }

  async expectAnAttemptToInvite30Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite30), timeoutMs);
  }

  async expectAnAttemptToInvite30Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite30), count, timeoutMs);
  }

  async clickJavaHttpClient2101115(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101115));
  }

  async doubleClickJavaHttpClient2101115(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101115));
  }

  async longPressJavaHttpClient2101115(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101115));
  }

  async expectJavaHttpClient2101115Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient2101115), value, timeoutMs);
  }

  async expectJavaHttpClient2101115Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101115), timeoutMs);
  }

  async expectJavaHttpClient2101115Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101115), timeoutMs);
  }

  async expectJavaHttpClient2101115Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101115), timeoutMs);
  }

  async expectJavaHttpClient2101115Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101115), timeoutMs);
  }

  async expectJavaHttpClient2101115Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient2101115), timeoutMs);
  }

  async expectJavaHttpClient2101115Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient2101115), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption28(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28));
  }

  async expectAnAttemptToInviteOption28Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption28Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), timeoutMs);
  }

  async expectAnAttemptToInviteOption28Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), timeoutMs);
  }

  async expectAnAttemptToInviteOption28Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), timeoutMs);
  }

  async expectAnAttemptToInviteOption28Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), count, timeoutMs);
  }

  async clickAnAttemptToInvite31(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite31));
  }

  async doubleClickAnAttemptToInvite31(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite31));
  }

  async longPressAnAttemptToInvite31(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite31));
  }

  async expectAnAttemptToInvite31Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite31), value, timeoutMs);
  }

  async expectAnAttemptToInvite31Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite31), timeoutMs);
  }

  async expectAnAttemptToInvite31Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite31), timeoutMs);
  }

  async expectAnAttemptToInvite31Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite31), timeoutMs);
  }

  async expectAnAttemptToInvite31Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite31), timeoutMs);
  }

  async expectAnAttemptToInvite31Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite31), timeoutMs);
  }

  async expectAnAttemptToInvite31Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite31), count, timeoutMs);
  }

  async clickJavaHttpClient2101116(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101116));
  }

  async doubleClickJavaHttpClient2101116(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101116));
  }

  async longPressJavaHttpClient2101116(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101116));
  }

  async expectJavaHttpClient2101116Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient2101116), value, timeoutMs);
  }

  async expectJavaHttpClient2101116Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101116), timeoutMs);
  }

  async expectJavaHttpClient2101116Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101116), timeoutMs);
  }

  async expectJavaHttpClient2101116Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101116), timeoutMs);
  }

  async expectJavaHttpClient2101116Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101116), timeoutMs);
  }

  async expectJavaHttpClient2101116Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient2101116), timeoutMs);
  }

  async expectJavaHttpClient2101116Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient2101116), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption29(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption29));
  }

  async expectAnAttemptToInviteOption29Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption29), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption29Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption29), timeoutMs);
  }

  async expectAnAttemptToInviteOption29Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption29), timeoutMs);
  }

  async expectAnAttemptToInviteOption29Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption29), timeoutMs);
  }

  async expectAnAttemptToInviteOption29Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption29), count, timeoutMs);
  }

  async clickAnAttemptToInvite32(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite32));
  }

  async doubleClickAnAttemptToInvite32(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite32));
  }

  async longPressAnAttemptToInvite32(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite32));
  }

  async expectAnAttemptToInvite32Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite32), value, timeoutMs);
  }

  async expectAnAttemptToInvite32Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite32), timeoutMs);
  }

  async expectAnAttemptToInvite32Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite32), timeoutMs);
  }

  async expectAnAttemptToInvite32Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite32), timeoutMs);
  }

  async expectAnAttemptToInvite32Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite32), timeoutMs);
  }

  async expectAnAttemptToInvite32Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite32), timeoutMs);
  }

  async expectAnAttemptToInvite32Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite32), count, timeoutMs);
  }

  async clickJavaHttpClient2101117(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101117));
  }

  async doubleClickJavaHttpClient2101117(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101117));
  }

  async longPressJavaHttpClient2101117(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101117));
  }

  async expectJavaHttpClient2101117Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient2101117), value, timeoutMs);
  }

  async expectJavaHttpClient2101117Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101117), timeoutMs);
  }

  async expectJavaHttpClient2101117Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101117), timeoutMs);
  }

  async expectJavaHttpClient2101117Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101117), timeoutMs);
  }

  async expectJavaHttpClient2101117Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101117), timeoutMs);
  }

  async expectJavaHttpClient2101117Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient2101117), timeoutMs);
  }

  async expectJavaHttpClient2101117Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient2101117), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption30(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30));
  }

  async expectAnAttemptToInviteOption30Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption30Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), timeoutMs);
  }

  async expectAnAttemptToInviteOption30Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), timeoutMs);
  }

  async expectAnAttemptToInviteOption30Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), timeoutMs);
  }

  async expectAnAttemptToInviteOption30Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), count, timeoutMs);
  }

  async clickAnAttemptToInvite33(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite33));
  }

  async doubleClickAnAttemptToInvite33(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite33));
  }

  async longPressAnAttemptToInvite33(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite33));
  }

  async expectAnAttemptToInvite33Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite33), value, timeoutMs);
  }

  async expectAnAttemptToInvite33Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite33), timeoutMs);
  }

  async expectAnAttemptToInvite33Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite33), timeoutMs);
  }

  async expectAnAttemptToInvite33Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite33), timeoutMs);
  }

  async expectAnAttemptToInvite33Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite33), timeoutMs);
  }

  async expectAnAttemptToInvite33Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite33), timeoutMs);
  }

  async expectAnAttemptToInvite33Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite33), count, timeoutMs);
  }

  async clickJavaHttpClient2101118(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101118));
  }

  async doubleClickJavaHttpClient2101118(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101118));
  }

  async longPressJavaHttpClient2101118(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101118));
  }

  async expectJavaHttpClient2101118Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient2101118), value, timeoutMs);
  }

  async expectJavaHttpClient2101118Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101118), timeoutMs);
  }

  async expectJavaHttpClient2101118Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101118), timeoutMs);
  }

  async expectJavaHttpClient2101118Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101118), timeoutMs);
  }

  async expectJavaHttpClient2101118Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101118), timeoutMs);
  }

  async expectJavaHttpClient2101118Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient2101118), timeoutMs);
  }

  async expectJavaHttpClient2101118Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient2101118), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption31(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31));
  }

  async expectAnAttemptToInviteOption31Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption31Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), timeoutMs);
  }

  async expectAnAttemptToInviteOption31Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), timeoutMs);
  }

  async expectAnAttemptToInviteOption31Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), timeoutMs);
  }

  async expectAnAttemptToInviteOption31Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), count, timeoutMs);
  }

  async clickAnAttemptToInvite34(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite34));
  }

  async doubleClickAnAttemptToInvite34(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite34));
  }

  async longPressAnAttemptToInvite34(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite34));
  }

  async expectAnAttemptToInvite34Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite34), value, timeoutMs);
  }

  async expectAnAttemptToInvite34Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite34), timeoutMs);
  }

  async expectAnAttemptToInvite34Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite34), timeoutMs);
  }

  async expectAnAttemptToInvite34Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite34), timeoutMs);
  }

  async expectAnAttemptToInvite34Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite34), timeoutMs);
  }

  async expectAnAttemptToInvite34Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite34), timeoutMs);
  }

  async expectAnAttemptToInvite34Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite34), count, timeoutMs);
  }

  async clickJavaHttpClient2101119(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101119));
  }

  async doubleClickJavaHttpClient2101119(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101119));
  }

  async longPressJavaHttpClient2101119(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101119));
  }

  async expectJavaHttpClient2101119Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient2101119), value, timeoutMs);
  }

  async expectJavaHttpClient2101119Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101119), timeoutMs);
  }

  async expectJavaHttpClient2101119Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101119), timeoutMs);
  }

  async expectJavaHttpClient2101119Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101119), timeoutMs);
  }

  async expectJavaHttpClient2101119Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101119), timeoutMs);
  }

  async expectJavaHttpClient2101119Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient2101119), timeoutMs);
  }

  async expectJavaHttpClient2101119Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient2101119), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption32(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption32));
  }

  async expectAnAttemptToInviteOption32Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption32), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption32Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption32), timeoutMs);
  }

  async expectAnAttemptToInviteOption32Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption32), timeoutMs);
  }

  async expectAnAttemptToInviteOption32Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption32), timeoutMs);
  }

  async expectAnAttemptToInviteOption32Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption32), count, timeoutMs);
  }

  async clickAnAttemptToInvite35(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite35));
  }

  async doubleClickAnAttemptToInvite35(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite35));
  }

  async longPressAnAttemptToInvite35(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite35));
  }

  async expectAnAttemptToInvite35Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite35), value, timeoutMs);
  }

  async expectAnAttemptToInvite35Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite35), timeoutMs);
  }

  async expectAnAttemptToInvite35Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite35), timeoutMs);
  }

  async expectAnAttemptToInvite35Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite35), timeoutMs);
  }

  async expectAnAttemptToInvite35Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite35), timeoutMs);
  }

  async expectAnAttemptToInvite35Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite35), timeoutMs);
  }

  async expectAnAttemptToInvite35Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite35), count, timeoutMs);
  }

  async clickJavaHttpClient2101120(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101120));
  }

  async doubleClickJavaHttpClient2101120(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101120));
  }

  async longPressJavaHttpClient2101120(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101120));
  }

  async expectJavaHttpClient2101120Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient2101120), value, timeoutMs);
  }

  async expectJavaHttpClient2101120Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101120), timeoutMs);
  }

  async expectJavaHttpClient2101120Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101120), timeoutMs);
  }

  async expectJavaHttpClient2101120Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101120), timeoutMs);
  }

  async expectJavaHttpClient2101120Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101120), timeoutMs);
  }

  async expectJavaHttpClient2101120Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient2101120), timeoutMs);
  }

  async expectJavaHttpClient2101120Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient2101120), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption33(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33));
  }

  async expectAnAttemptToInviteOption33Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption33Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), timeoutMs);
  }

  async expectAnAttemptToInviteOption33Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), timeoutMs);
  }

  async expectAnAttemptToInviteOption33Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), timeoutMs);
  }

  async expectAnAttemptToInviteOption33Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), count, timeoutMs);
  }

  async clickAnAttemptToInvite36(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite36));
  }

  async doubleClickAnAttemptToInvite36(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite36));
  }

  async longPressAnAttemptToInvite36(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite36));
  }

  async expectAnAttemptToInvite36Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite36), value, timeoutMs);
  }

  async expectAnAttemptToInvite36Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite36), timeoutMs);
  }

  async expectAnAttemptToInvite36Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite36), timeoutMs);
  }

  async expectAnAttemptToInvite36Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite36), timeoutMs);
  }

  async expectAnAttemptToInvite36Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite36), timeoutMs);
  }

  async expectAnAttemptToInvite36Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite36), timeoutMs);
  }

  async expectAnAttemptToInvite36Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite36), count, timeoutMs);
  }

  async clickJavaHttpClient2101121(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101121));
  }

  async doubleClickJavaHttpClient2101121(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101121));
  }

  async longPressJavaHttpClient2101121(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient2101121));
  }

  async expectJavaHttpClient2101121Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient2101121), value, timeoutMs);
  }

  async expectJavaHttpClient2101121Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101121), timeoutMs);
  }

  async expectJavaHttpClient2101121Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient2101121), timeoutMs);
  }

  async expectJavaHttpClient2101121Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101121), timeoutMs);
  }

  async expectJavaHttpClient2101121Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient2101121), timeoutMs);
  }

  async expectJavaHttpClient2101121Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient2101121), timeoutMs);
  }

  async expectJavaHttpClient2101121Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient2101121), count, timeoutMs);
  }

  async longPressSendFeedback(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.sendFeedback));
  }

  async expectSendFeedbackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.sendFeedback), value, timeoutMs);
  }

  async expectSendFeedbackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.sendFeedback), count, timeoutMs);
  }

}
