import { Page } from '@playwright/test';
export function verifyUnauthenticatedRedirect(page: Page) {
  page.goto('/protected-page');
  page.waitForURL('/login');
}