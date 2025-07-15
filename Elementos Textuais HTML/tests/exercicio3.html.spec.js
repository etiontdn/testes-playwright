// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("exercicio3.html", () => {
  test("deve ter o charset em UTF-8 no meta dentro do head", async ({
    page,
  }) => {
    await page.goto(`file://${process.cwd()}/exercicio3.html`);
    await expect(page.locator("meta[charset]")).toHaveAttribute(
      "charset",
      "UTF-8"
    );
  });

  test('deve ter um meta viewport com atributo content com "width=device-width, initial-scale=1.0" no head', async ({
    page,
  }) => {
    await page.goto(`file://${process.cwd()}/exercicio3.html`);
    await expect(page.locator('meta[name="viewport"]')).toHaveAttribute(
      "content",
      "width=device-width, initial-scale=1.0"
    );
  });

  test("deve ter o lang em pt no html", async ({ page }) => {
    await page.goto(`file://${process.cwd()}/exercicio3.html`);
    await expect(page.locator("html")).toHaveAttribute("lang", "pt");
  });

  // Novos testes para verificar o conteúdo e a estrutura do parágrafo dentro do main
  test("deve ter um elemento main", async ({ page }) => {
    await page.goto(`file://${process.cwd()}/exercicio3.html`);
    await expect(page.locator("main")).toBeVisible();
  });

  test("o h1 dentro do main deve ter o texto correto", async ({ page }) => {
    await page.goto(`file://${process.cwd()}/exercicio3.html`);
    await expect(page.locator("main > h1")).toHaveText("Os Companheiros do Anel: Frodo e Sam");
  });

  test("deve ter duas seções dentro do main", async ({ page }) => {
    await page.goto(`file://${process.cwd()}/exercicio3.html`);
    await expect(page.locator("main > section")).toHaveCount(2);
  });

  test("a primeira seção deve ter um h2 com o texto 'Frodo Bolseiro: O Portador'", async ({ page }) => {
    await page.goto(`file://${process.cwd()}/exercicio3.html`);
    await expect(page.locator("main > section").nth(0).locator("h2")).toHaveText("Frodo Bolseiro: O Portador");
  });

  test("a primeira seção deve ter um parágrafo com o conteúdo de Frodo", async ({ page }) => {
    await page.goto(`file://${process.cwd()}/exercicio3.html`);
    const expectedText = "Frodo Bolseiro, um hobbit de temperamento gentil e coração puro do Condado, foi o escolhido para a árdua tarefa de levar o Um Anel até a Montanha da Perdição. Embora relutante no início, sua coragem e senso de dever o impulsionaram através de perigos incalculáveis. O fardo do Anel o consumia lentamente, testando seus limites físicos e mentais.";
    await expect(page.locator("main > section").nth(0).locator("p")).toHaveText(expectedText);
  });

  test("a segunda seção deve ter um h2 com o texto 'Samwise Gamgee: O Leal Amigo'", async ({ page }) => {
    await page.goto(`file://${process.cwd()}/exercicio3.html`);
    await expect(page.locator("main > section").nth(1).locator("h2")).toHaveText("Samwise Gamgee: O Leal Amigo");
  });

  test("a segunda seção deve ter um parágrafo com o conteúdo de Sam", async ({ page }) => {
    await page.goto(`file://${process.cwd()}/exercicio3.html`);
    const expectedText = "Samwise Gamgee, o jardineiro de Frodo, é a epítome da lealdade e devoção. Sem seu apoio inabalável, Frodo jamais teria completado sua missão. Sam enfrentou trolls, orcs, aranhas gigantes e a desolação de Mordor, sempre ao lado de seu mestre, oferecendo força, esperança e a simples bondade hobbit nos momentos mais sombrios da jornada.";
    await expect(page.locator("main > section").nth(1).locator("p")).toHaveText(expectedText);
  });
});