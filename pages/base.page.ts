import { Page, Locator } from '@playwright/test';
import { NavigationBar } from '../components/nav-bar.component';
import { SideBar } from '../components/side-bar.component';

export abstract class BasePage {
  readonly navBar: NavigationBar;
  readonly sideBar: SideBar;

  constructor(protected readonly page: Page) {
    this.navBar = new NavigationBar(page);
    this.sideBar = new SideBar(page);
  }

  abstract readonly path: string; // e.g. '/SearchHotel.php'

    async goto(): Promise<void> {
    await this.page.goto(this.path);
    await this.waitForLoad();
  }

  async waitForLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async isLoaded(): Promise<boolean> {
    return this.page.url().includes(this.path);
  }

  async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }
}