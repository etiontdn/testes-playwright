// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("exercicio1.html", () => {
    test("deve ter o charset em UTF-8 no meta dentro do head", async ({
        page,
    }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`);
        await expect(page.locator("meta[charset]")).toHaveAttribute(
            "charset",
            "UTF-8"
        );
    });

    test('deve ter um meta viewport com atributo content com "width=device-width, initial-scale=1.0" no head', async ({
        page,
    }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`);
        await expect(page.locator('meta[name="viewport"]')).toHaveAttribute(
            "content",
            "width=device-width, initial-scale=1.0"
        );
    });

    test("deve ter o lang em pt no html", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`);
        await expect(page.locator("html")).toHaveAttribute("lang", "pt");
    });

    // Novos testes para verificar os headings no body
    test("deve ter o h1 com o texto correto", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`);
        await expect(page.locator("body > h1")).toHaveText(
            "O Hobbit: Uma Jornada Inesperada"
        );
    });

    test("deve ter o primeiro h2 com o texto correto", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`);
        await expect(page.locator("body > h2").nth(0)).toHaveText("Parte 1:");
    });

    test("deve ter o primeiro h3 com o texto correto", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`);
        await expect(page.locator("body > h3").nth(0)).toHaveText(
            "Um Convite Inesperado"
        );
    });

    test("deve ter o segundo h3 com o texto correto", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`);
        await expect(page.locator("body > h3").nth(1)).toHaveText(
            "Os Anões Chegam"
        );
    });

    test("deve ter o segundo h2 com o texto correto", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`);
        await expect(page.locator("body > h2").nth(1)).toHaveText("Parte 2:");
    });

    test("deve ter o terceiro h3 com o texto correto", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`);
        await expect(page.locator("body > h3").nth(2)).toHaveText(
            "Através das Colinas Verdes"
        );
    });
});
