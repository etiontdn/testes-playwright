// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("exercicio2.html", () => {
    // Configurações básicas de head e html
    test("deve ter o charset em UTF-8 no meta dentro do head", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("meta[charset]")).toHaveAttribute("charset", "UTF-8");
    });

    test('deve ter um meta viewport com atributo content com "width=device-width, initial-scale=1.0" no head', async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator('meta[name="viewport"]')).toHaveAttribute("content", "width=device-width, initial-scale=1.0");
    });

    test("deve ter o lang em pt-br no html", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("html")).toHaveAttribute("lang", "pt-br");
    });

    // Testes de título e cabeçalhos principais
    test("deve ter o título 'Listas de Definição' no head", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page).toHaveTitle("Listas de Definição");
    });

    test("deve ter um main com um h1", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("main")).toBeVisible();
        await expect(page.locator("main > h1")).toBeVisible();
    });

    test("deve ter o h1 com o texto 'Listas de Definição'", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("main > h1")).toHaveText("Listas de Definição");
    });

    // Testes para a Lista de Definição (Repartidos)
    test("deve ter o elemento <dl> visível dentro do main", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("main > dl")).toBeVisible();
    });

    test("deve ter 3 termos (dt) dentro da lista de definição (dl)", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("main > dl > dt")).toHaveCount(3);
    });

    test("deve ter 3 definições (dd) dentro da lista de definição (dl)", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("main > dl > dd")).toHaveCount(3);
    });

    test("deve ter o primeiro termo (dt) com o texto 'HTML'", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("main > dl > dt").nth(0)).toHaveText("HTML");
    });

    test("deve ter a primeira definição (dd) com o texto correto para HTML", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("main > dl > dd").nth(0)).toHaveText("Linguagem de Marcação de Hipertexto, usada para criar a estrutura de páginas web.");
    });

    test("deve ter o segundo termo (dt) com o texto 'CSS'", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("main > dl > dt").nth(1)).toHaveText("CSS");
    });

    test("deve ter a segunda definição (dd) com o texto correto para CSS", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("main > dl > dd").nth(1)).toHaveText("Folhas de Estilo em Cascata, usadas para estilizar o conteúdo HTML.");
    });

    test("deve ter o terceiro termo (dt) com o texto 'JavaScript'", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("main > dl > dt").nth(2)).toHaveText("JavaScript");
    });

    test("deve ter a terceira definição (dd) com o texto correto para JavaScript", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio2.html`);
        await expect(page.locator("main > dl > dd").nth(2)).toHaveText("Linguagem de programação que permite adicionar interatividade e dinamismo às páginas web.");
    });
});