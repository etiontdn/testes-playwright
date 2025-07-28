// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("exercicio3.html", () => {
    // Configurações básicas de head e html
    test("deve ter o charset em UTF-8 no meta dentro do head", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio3.html`);
        await expect(page.locator("meta[charset]")).toHaveAttribute("charset", "UTF-8");
    });

    test('deve ter um meta viewport com atributo content com "width=device-width, initial-scale=1.0" no head', async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio3.html`);
        await expect(page.locator('meta[name="viewport"]')).toHaveAttribute("content", "width=device-width, initial-scale=1.0");
    });

    test("deve ter o lang em pt-br no html", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio3.html`);
        await expect(page.locator("html")).toHaveAttribute("lang", "pt-br");
    });

    // Testes de título e cabeçalhos principais
    test("deve ter o título 'Tabelas' no head", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio3.html`);
        await expect(page).toHaveTitle("Tabelas");
    });

    test("deve ter um main com um h1", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio3.html`);
        await expect(page.locator("main")).toBeVisible();
        await expect(page.locator("main > h1")).toBeVisible();
    });

    test("deve ter o h1 com o texto 'Tabelas'", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio3.html`);
        await expect(page.locator("main > h1")).toHaveText("Tabelas");
    });

    // Testes para a Tabela (Repartidos)
    test("deve ter o elemento <table> visível dentro do main", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio3.html`);
        await expect(page.locator("main > table")).toBeVisible();
    });

    test("deve ter o elemento <thead> visível dentro da tabela", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio3.html`);
        await expect(page.locator("main > table > thead")).toBeVisible();
    });

    test("deve ter o elemento <tbody> visível dentro da tabela", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio3.html`);
        await expect(page.locator("main > table > tbody")).toBeVisible();
    });

    test("deve ter uma linha de cabeçalho (tr) no thead", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio3.html`);
        await expect(page.locator("main > table > thead > tr")).toHaveCount(1);
    });

    test("deve ter os três cabeçalhos (th) corretos na linha de cabeçalho", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio3.html`);
        const ths = page.locator("main > table > thead > tr > th");
        await expect(ths).toHaveCount(3);
        await expect(ths.nth(0)).toHaveText("Aluno");
        await expect(ths.nth(1)).toHaveText("Nota 1");
        await expect(ths.nth(2)).toHaveText("Nota 2");
    });

    test("deve ter 3 linhas de dados (tr) no tbody", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio3.html`);
        await expect(page.locator("main > table > tbody > tr")).toHaveCount(3);
    });

    // Testes para a primeira linha de dados (João)
    test("deve ter os dados corretos na primeira linha (João)", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio3.html`);
        const row1Cells = page.locator("main > table > tbody > tr").nth(0).locator("td");
        await expect(row1Cells).toHaveCount(3);
        await expect(row1Cells.nth(0)).toHaveText("João");
        await expect(row1Cells.nth(1)).toHaveText("8.5");
        await expect(row1Cells.nth(2)).toHaveText("7.0");
    });

    // Testes para a segunda linha de dados (Maria)
    test("deve ter os dados corretos na segunda linha (Maria)", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio3.html`);
        const row2Cells = page.locator("main > table > tbody > tr").nth(1).locator("td");
        await expect(row2Cells).toHaveCount(3);
        await expect(row2Cells.nth(0)).toHaveText("Maria");
        await expect(row2Cells.nth(1)).toHaveText("9.0");
        await expect(row2Cells.nth(2)).toHaveText("9.5");
    });

    // Testes para a terceira linha de dados (Pedro)
    test("deve ter os dados corretos na terceira linha (Pedro)", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio3.html`);
        const row3Cells = page.locator("main > table > tbody > tr").nth(2).locator("td");
        await expect(row3Cells).toHaveCount(3);
        await expect(row3Cells.nth(0)).toHaveText("Pedro");
        await expect(row3Cells.nth(1)).toHaveText("6.0");
        await expect(row3Cells.nth(2)).toHaveText("7.5");
    });
});