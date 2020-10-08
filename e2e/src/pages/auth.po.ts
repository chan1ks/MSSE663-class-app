import { BasePage } from './base.po';

export class AuthPage extends BasePage {
  private baseUrl = 'http://localhost:4200';
  private homePageEl = '#budget';
  private logoutEl = '#logout';

  async naviagteToLogin(): Promise<void> {
    await this.navigateToUrl(this.baseUrl);
  }

  async isAuthHomePageDisplayed(): Promise<boolean> {
    return (
      (await this.isElementVisible(this.homePageEl)) &&
      (await this.isElementVisible(this.logoutEl))
    );
  }
}
