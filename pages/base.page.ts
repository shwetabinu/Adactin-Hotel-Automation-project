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
}