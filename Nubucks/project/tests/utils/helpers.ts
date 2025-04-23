import { Page } from '@playwright/test';
import { GAME_URL, GAME_PARAMS } from './constants';

export async function navigateToGame(page: Page) {
  try {
    const queryParams = new URLSearchParams(GAME_PARAMS as Record<string, string>);
    await page.goto(`${GAME_URL}?${queryParams.toString()}`, {
      waitUntil: 'networkidle',
      timeout: 60000
    });
  } catch (error) {
    console.error('Navigation failed:', error);
    throw error;
  }
}

export async function waitForGameLoad(page: Page) {
  try {
    // Wait for the game canvas to be visible with increased timeout
    await page.waitForSelector('canvas', { 
      state: 'visible', 
      timeout: 60000 
    });
    
    // Wait for network to be idle
    await page.waitForLoadState('networkidle', { timeout: 60000 });
    
    // Additional wait to ensure game is fully loaded
    await page.waitForTimeout(2000);
  } catch (error) {
    console.error('Game load failed:', error);
    throw error;
  }
}