import { test } from '@playwright/test'
import {ClickPage} from "../pages/click.page"
import {ClientSideDelayPage} from "../pages/clientSideDelay.page";
import {TextInputPage} from "../pages/textInput.page";

test.describe('Example tests with Playwright', () => {
    test('Should be able to click a button', async ({page}) => {
        const clickPage = new ClickPage(page)
        await clickPage.navigate()
        await clickPage.button.click()
        await clickPage.validateButtonClicked()
    })

    test("Button should change it's text after input", async ({page}) => {
        const textInput = new TextInputPage(page)
        await textInput.navigate()
        await textInput.enterName()
        await textInput.validateButtonNameChanged()
    })

    test('Should wait for an element to show', async ({page}) => {
        const clientDelay = new ClientSideDelayPage(page)
        await clientDelay.navigate()
        await clientDelay.triggerButton.click()
        await clientDelay.validateTextAppeared()
    })
})
