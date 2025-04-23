import { test, expect } from '@playwright/test';
import { navigateToGame, waitForGameLoad } from './utils/helpers';

test.describe('Buck Bucks Bagawk Game Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Set default timeout for the entire test
    test.setTimeout(120000);
  });

  test('should load the game successfully', async ({ page }) => {
    await navigateToGame(page);
    await waitForGameLoad(page);
    
    // Verify game canvas is present
    const canvas = await page.locator('canvas');
    await expect(canvas).toBeVisible();
  });

  test('should handle orientation change', async ({ page }) => {
    await navigateToGame(page);
    await waitForGameLoad(page);

    // Test landscape orientation
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.waitForTimeout(2000); // Allow time for orientation change
    await expect(page.locator('canvas')).toBeVisible();

    // Test portrait orientation
    await page.setViewportSize({ width: 720, height: 1280 });
    await page.waitForTimeout(2000); // Allow time for orientation change
    await expect(page.locator('canvas')).toBeVisible();
  });

  test('should maintain game state during resize', async ({ page }) => {
    await navigateToGame(page);
    await waitForGameLoad(page);

    // Initial viewport
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.waitForTimeout(2000);
    await expect(page.locator('canvas')).toBeVisible();

    // Resize viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(2000);
    await expect(page.locator('canvas')).toBeVisible();

    // Verify game is still responsive
    const canvas = await page.locator('canvas');
    await expect(canvas).toBeVisible();
  });
});