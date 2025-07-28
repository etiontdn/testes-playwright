// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("exercicio1.html", () => {
    // Configurações básicas de head e html
    test("deve ter o charset em UTF-8 no meta dentro do head", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`); // Arquivo alvo
        await expect(page.locator("meta[charset]")).toHaveAttribute("charset", "UTF-8");
    });

    test('deve ter um meta viewport com atributo content com "width=device-width, initial-scale=1.0" no head', async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`); // Arquivo alvo
        await expect(page.locator('meta[name="viewport"]')).toHaveAttribute("content", "width=device-width, initial-scale=1.0");
    });

    test("deve ter o lang em pt-br no html", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`); // Arquivo alvo
        await expect(page.locator("html")).toHaveAttribute("lang", "pt-br");
    });

    // Testes de título e cabeçalhos principais
    test("deve ter o título correto no head", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`); // Arquivo alvo
        await expect(page).toHaveTitle("Exemplo de Listas HTML Corretas");
    });

    test("deve ter um main com um h1", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`); // Arquivo alvo
        await expect(page.locator("main")).toBeVisible();
        await expect(page.locator("main > h1")).toBeVisible();
    });

    test("deve ter o h1 com o texto correto", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`); // Arquivo alvo
        await expect(page.locator("main > h1")).toHaveText("Listas HTML Estruturadas Corretamente");
    });

    // Testes para a Lista Não Ordenada
    test("deve ter o h2 'Lista Não Ordenada' e a lista não ordenada correta", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`); // Arquivo alvo
        await expect(page.locator("main > h2").nth(0)).toHaveText("Lista Não Ordenada");

        const ul = page.locator("main > ul").nth(0);
        await expect(ul).toBeVisible();
        await expect(ul.locator("li")).toHaveCount(3);
        await expect(ul.locator("li").nth(0)).toHaveText("Maçã");
        await expect(ul.locator("li").nth(1)).toHaveText("Banana");
        await expect(ul.locator("li").nth(2)).toHaveText("Laranja");
    });

    // Testes para a Lista Ordenada
    test("deve ter o h2 'Lista Ordenada' e a lista ordenada correta", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`); // Arquivo alvo
        await expect(page.locator("main > h2").nth(1)).toHaveText("Lista Ordenada");

        const ol = page.locator("main > ol").nth(0);
        await expect(ol).toBeVisible();
        await expect(ol.locator("li")).toHaveCount(3);
        await expect(ol.locator("li").nth(0)).toHaveText("Arroz");
        await expect(ol.locator("li").nth(1)).toHaveText("Feijão");
        await expect(ol.locator("li").nth(2)).toHaveText("Carne");
    });

    // Testes para a Lista Aninhada
    test("deve ter o h2 'Lista Aninhada' e a estrutura de lista aninhada correta", async ({ page }) => {
        await page.goto(`file://${process.cwd()}/exercicio1.html`); // Arquivo alvo
        await expect(page.locator("main > h2").nth(2)).toHaveText("Lista Aninhada");

        const outerUl = page.locator("main > ul").nth(1); // A segunda <ul> na página
        await expect(outerUl).toBeVisible();
        await expect(outerUl.locator("> li")).toHaveCount(2); // Duas <li>s no nível principal

        // Primeiro item: Bebidas (com ol e ul aninhadas)
        const bebidasLi = outerUl.locator("> li").nth(0);
        await expect( bebidasLi ).toContainText("Bebidas");
        const bebidasOl = bebidasLi.locator("ol").nth(0);
        await expect(bebidasOl).toBeVisible();
        await expect(bebidasOl.locator("> li")).toHaveCount(2);
        await expect(bebidasOl.locator("> li").nth(0)).toHaveText("Água");
        
        const sucoLi = bebidasOl.locator("> li").nth(1);
        await expect(sucoLi).toContainText("Suco");
        const sucoUl = sucoLi.locator("ul").nth(0);
        await expect(sucoUl).toBeVisible();
        await expect(sucoUl.locator("li")).toHaveCount(2);
        await expect(sucoUl.locator("li").nth(0)).toHaveText("Laranja");
        await expect(sucoUl.locator("li").nth(1)).toHaveText("Uva");


        // Segundo item: Comidas (com ol aninhada)
        const comidasLi = outerUl.locator("> li").nth(1);
        await expect( comidasLi ).toContainText("Comidas");
        const comidasOl = comidasLi.locator("ol").nth(0);
        await expect(comidasOl).toBeVisible();
        await expect(comidasOl.locator("> li")).toHaveCount(2);
        await expect(comidasOl.locator("> li").nth(0)).toHaveText("Pizza");
        await expect(comidasOl.locator("> li").nth(1)).toHaveText("Sanduíche");
    });
});