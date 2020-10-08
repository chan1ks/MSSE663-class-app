import { Given, Then } from 'cucumber';
import { AuthPage } from '../pages/auth.po';

const chaiAsExpected = require('chai').use(require('chai-as-promised'));
const expect = chaiAsExpected.expect;

const authPage: AuthPage = new AuthPage();

Given(/^I navigate to the login page$/, async () => {
  await authPage.naviagteToLogin();
});

// Thens

Then(/^I see the authenticated home page$/, async () => {
  expect(await authPage.isAuthHomePageDisplayed()).to.be.true;
});
