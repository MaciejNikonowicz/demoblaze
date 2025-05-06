import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly loginLink: Locator;
    readonly signUpLink: Locator;
    readonly cartLink: Locator;
    readonly categories: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.locator('#login2');
        this.signUpLink = page.locator('#signin2');
        this.cartLink = page.locator('#cartur');
        this.categories = page.locator('.list-group a');
    }

    async navigate(): Promise<void> {
        await this.page.goto('/index.html');
    }

    async selectCategory(name: string): Promise<void> {
        await this.categories.filter({ hasText: name }).click();
    }

    async openProduct(productName: string) {
        await this.page.locator('.card-title a', { hasText: productName }).click();
    }
}