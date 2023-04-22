import { expect, test } from '@playwright/test';
import { AppPage } from './page-objects/app.po';
test.describe('demo app', () => {
  let appPage: AppPage;

  test.beforeEach(async ({ page }) => {
    appPage = new AppPage(page);

    await page.goto('/');
  });

  test('should have a header', async () => {
    await expect(appPage.header).toBeVisible();
  });
});
