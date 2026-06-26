import { test as base, expect } from "@playwright/test";
import { AccountProfilePage } from "../pageobjects/AccountProfilePage";
import { AdoptionPage } from "../pageobjects/AdoptionPage";
import { AuditLogPage } from "../pageobjects/AuditLogPage";
import { BillingPage } from "../pageobjects/BillingPage";
import { FeedbackPage } from "../pageobjects/FeedbackPage";
import { ImplementationsPage } from "../pageobjects/ImplementationsPage";
import { LoginPage } from "../pageobjects/LoginPage";
import { ProfilePage } from "../pageobjects/ProfilePage";
import { RolesAndAccessPage } from "../pageobjects/RolesAndAccessPage";
import { SubscriptionsPage } from "../pageobjects/SubscriptionsPage";
import { SupportPage } from "../pageobjects/SupportPage";
import { UserManagementPage } from "../pageobjects/UserManagementPage";

type AppFixtures = {
  accountProfilePage: AccountProfilePage;
  adoptionPage: AdoptionPage;
  auditLogPage: AuditLogPage;
  billingPage: BillingPage;
  feedbackPage: FeedbackPage;
  implementationsPage: ImplementationsPage;
  loginPage: LoginPage;
  profilePage: ProfilePage;
  rolesAndAccessPage: RolesAndAccessPage;
  subscriptionsPage: SubscriptionsPage;
  supportPage: SupportPage;
  userManagementPage: UserManagementPage;
};

export const test = base.extend<AppFixtures>({
  accountProfilePage: async ({ page }, use) => {
    await use(new AccountProfilePage(page));
  },
  adoptionPage: async ({ page }, use) => {
    await use(new AdoptionPage(page));
  },
  auditLogPage: async ({ page }, use) => {
    await use(new AuditLogPage(page));
  },
  billingPage: async ({ page }, use) => {
    await use(new BillingPage(page));
  },
  feedbackPage: async ({ page }, use) => {
    await use(new FeedbackPage(page));
  },
  implementationsPage: async ({ page }, use) => {
    await use(new ImplementationsPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  profilePage: async ({ page }, use) => {
    await use(new ProfilePage(page));
  },
  rolesAndAccessPage: async ({ page }, use) => {
    await use(new RolesAndAccessPage(page));
  },
  subscriptionsPage: async ({ page }, use) => {
    await use(new SubscriptionsPage(page));
  },
  supportPage: async ({ page }, use) => {
    await use(new SupportPage(page));
  },
  userManagementPage: async ({ page }, use) => {
    await use(new UserManagementPage(page));
  },
});

export { expect };
