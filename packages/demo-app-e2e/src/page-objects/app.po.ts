import { Locator, Page } from '@playwright/test';

export class AppPage {
  readonly page: Page;
  header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator('h1', { hasText: 'Welcome demo-app' });
  }
}
