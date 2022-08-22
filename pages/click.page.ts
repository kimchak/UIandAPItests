import {Page, Locator, expect} from '@playwright/test'

export class ClickPage {
    readonly page: Page
    public readonly button: Locator

    constructor(page: Page) {
        this.page = page
        this.button = this.page.locator('#badButton')
    }

    async navigate() {
        await this.page.goto('/click')
    }

    async validateButtonClicked(){
        await expect(this.button).toHaveClass(/btn-success/)
    }
}
