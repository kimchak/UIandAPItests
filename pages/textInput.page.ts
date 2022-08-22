import {Page, Locator, expect} from '@playwright/test'

export class TextInputPage {
    readonly page: Page
    public readonly inputField: Locator
    public readonly button: Locator

    readonly newName: string  = 'newName'

    constructor(page: Page) {
        this.page = page
        this.inputField = this.page.locator('#newButtonName')
        this.button = this.page.locator('#updatingButton')
    }

    async navigate() {
        await this.page.goto('/textinput')
    }

    async enterName() {
        await this.inputField.fill(this.newName)
        await this.button.click()
    }

    async validateButtonNameChanged() {
        await expect(this.button).toContainText(this.newName)
    }
}
