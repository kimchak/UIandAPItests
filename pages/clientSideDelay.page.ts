import {Page, Locator, expect} from '@playwright/test'

export class ClientSideDelayPage {
    readonly page: Page
    public readonly triggerButton: Locator
    public readonly disappearingText: Locator

    constructor(page: Page) {
        this.page = page
        this.triggerButton = this.page.locator('#ajaxButton')
        this.disappearingText = this.page.locator('#content')
    }

    async navigate() {
        await this.page.goto('/clientdelay')
    }

    async validateTextAppeared() {
        await expect(this.disappearingText).toBeVisible({timeout: 17000})
        await expect(this.disappearingText).toContainText(/Data calculated/)
    }
}
