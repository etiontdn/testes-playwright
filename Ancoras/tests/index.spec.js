// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("index.html", () => {
    // Configurações básicas de head e html
    test("deve ter o charset em UTF-8 no meta dentro do head", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/index.html`);
        await expect(page.locator("meta[charset]")).toHaveAttribute("charset", "UTF-8");
    });

    test('deve ter um meta viewport com atributo content com "width=device-width, initial-scale=1.0" no head', async ({ page }) => {
        await page.goto(`file://${process.cwd()}/index.html`);
        await expect(page.locator('meta[name="viewport"]')).toHaveAttribute("content", "width=device-width, initial-scale=1.0");
    });

    test("deve ter o lang em pt-br no html", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/index.html`);
        await expect(page.locator("html")).toHaveAttribute("lang", "pt-br");
    });

    // Testes específicos de conteúdo
    test("deve ter o título com o padrão correto no head", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/index.html`);
        // Usa expressão regular para aceitar qualquer texto após "Atividade 4:"
        await expect(page).toHaveTitle(/DCC202 - Atividade 4: .+$/);
    });

    test("deve ter um main com um h1 e um p", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/index.html`);
        await expect(page.locator("main")).toBeVisible();
        await expect(page.locator("main > h1")).toBeVisible();
        await expect(page.locator("main > p")).toBeVisible();
    });

    test("deve ter o h1 com o padrão de texto correto", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/index.html`);
        // Usa expressão regular para aceitar qualquer texto após "Atividade 4:"
        await expect(page.locator("main > h1")).toHaveText(/DCC202 - Atividade 4: .+$/);
    });

    test("deve ter o parágrafo com o texto correto e as âncoras para listas e tabelas", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/index.html`);
        // Verificando o texto do parágrafo, incluindo o texto das âncoras visíveis
        const paragraphText = await page.locator("main > p").textContent();
        expect(paragraphText).toContain("Esta é a página principal. Temos também a página sobre listas e tabelas.");

        // Verificando as âncoras individualmente
        const listasLink = page.locator("main > p > a").nth(0);
        await expect(listasLink).toHaveText("listas");
        await expect(listasLink).toHaveAttribute("href", "listas.html");

        const tabelasLink = page.locator("main > p > a").nth(1);
        await expect(tabelasLink).toHaveText("tabelas");
        await expect(tabelasLink).toHaveAttribute("href", "tabelas.html");
    });
});