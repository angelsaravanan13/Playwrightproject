import { Page, expect } from '@playwright/test';
import { TCredentials } from '../types/TCredentials.ts'; 
export class LoginPage {
  private readonly usernameInput;
  private readonly passwordInput;
  private readonly loginButton;
  private readonly errorMessage;
  constructor(private readonly page: Page) {
    this.usernameInput = this.page.locator('[data-test="username"]');
    this.passwordInput = this.page.locator('[data-test="password"]');
    this.loginButton = this.page.locator('[data-test="login-button"]');
    this.errorMessage = this.page.locator('[data-test="error"]');
  }
  async login(creds: TCredentials) {
    await this.usernameInput.fill(creds.username);
    await this.passwordInput.fill(creds.password);
    await this.loginButton.click();
  }
  async verifyErrorMessageIsShown(message: string) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(message);
  }
}
