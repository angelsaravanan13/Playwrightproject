import { test } from '@playwright/test';
import { verifyUnauthenticatedRedirect } from '../utils/test.utils' 
test('check unauthenticated redirect', async ({ page }) => {
  await verifyUnauthenticatedRedirect(page);
});