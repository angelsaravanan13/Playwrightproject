import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/spec',        
  fullyParallel: true,          
  retries: 1,                   
  use: {
    screenshot: 'only-on-failure',  
    video: 'retain-on-failure',     
    trace: 'on-first-retry',        
    headless: false,                
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]], 
});