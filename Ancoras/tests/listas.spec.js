// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("listas.html", () => {
    // Configurações básicas de head e html
    test("deve ter o charset em UTF-8 no meta dentro do head", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/listas.html`);
        await expect(page.locator("meta[charset]")).toHaveAttribute("charset", "UTF-8");
    });

    test('deve ter um meta viewport com atributo content com "width=device-width, initial-scale=1.0" no head', async ({ page }) => {
        await page.goto(`file://${process.cwd()}/listas.html`);
        await expect(page.locator('meta[name="viewport"]')).toHaveAttribute("content", "width=device-width, initial-scale=1.0");
    });

    test("deve ter o lang em pt-br no html", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/listas.html`);
        await expect(page.locator("html")).toHaveAttribute("lang", "pt-br");
    });

    // Testes específicos de conteúdo
    test("deve ter o título com o padrão correto no head", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/listas.html`);
        // Usa expressão regular para aceitar qualquer texto após "Listas:"
        await expect(page).toHaveTitle(/DCC202 - Atividade 4 - Listas: .+$/);
    });

    test("deve ter um main com um h1 e um p", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/listas.html`);
        await expect(page.locator("main")).toBeVisible();
        await expect(page.locator("main > h1")).toBeVisible();
        await expect(page.locator("main > p")).toBeVisible();
    });

    test("deve ter o h1 com o padrão de texto correto", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/listas.html`);
        // Usa expressão regular para aceitar qualquer texto após "Listas:"
        await expect(page.locator("main > h1")).toHaveText(/DCC202 - Atividade 4 - Listas: .+$/);
    });

    test("deve ter o parágrafo com o texto correto e as âncoras para tabelas e página principal", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/listas.html`);
        const paragraphText = await page.locator("main > p").textContent();
        expect(paragraphText).toContain("Esta é a página sobre listas. Temos também a página sobre tabelas e a página principal.");

        const tabelasLink = page.locator("main > p > a").nth(0);
        await expect(tabelasLink).toHaveText("tabelas");
        await expect(tabelasLink).toHaveAttribute("href", "tabelas.html");

        const principalLink = page.locator("main > p > a").nth(1);
        await expect(principalLink).toHaveText("página principal");
        await expect(principalLink).toHaveAttribute("href", "index.html");
    });
});