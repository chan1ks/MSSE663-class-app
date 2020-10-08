import { BasePage } from './base.po';

export class AppPage extends BasePage {
  private navMenu = '.nav-tabs';

  async getAppNavMenu(): Promise<boolean> {
    return await this.isElementVisible(this.navMenu);
  }
}
