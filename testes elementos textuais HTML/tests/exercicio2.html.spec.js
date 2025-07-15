// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("exercicio2.html", () => {
    test("deve ter o charset em UTF-8 no meta dentro do head", async ({
        page,
    }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("meta[charset]")).toHaveAttribute(
            "charset",
            "UTF-8"
        );
    });

    test('deve ter um meta viewport com atributo content com "width=device-width, initial-scale=1.0" no head', async ({
        page,
    }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator('meta[name="viewport"]')).toHaveAttribute(
            "content",
            "width=device-width, initial-scale=1.0"
        );
    });

    test("deve ter o lang em pt no html", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("html")).toHaveAttribute("lang", "pt");
    });

    test("o parágrafo deve conter a tag <mark> com o texto 'O Hobbit'", async ({
        page,
    }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("p mark").nth(0)).toHaveText('"O Hobbit"');
    });

    test("o parágrafo deve conter a tag <em> com o texto 'J.R.R. Tolkien'", async ({
        page,
    }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("p em")).toHaveText("J.R.R. Tolkien");
    });

    test("o parágrafo deve conter a tag <strong> com o texto 'Smaug'", async ({
        page,
    }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("p strong")).toHaveText("Smaug");
    });

    test("o parágrafo deve conter a tag <mark> com o texto 'O Senhor dos Anéis'", async ({
        page,
    }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("p mark").nth(1)).toHaveText(
            '"O Senhor dos Anéis"'
        );
    });
});
