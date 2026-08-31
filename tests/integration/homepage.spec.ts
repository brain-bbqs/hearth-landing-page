import { test, expect } from "@playwright/test";

test.describe("HEARTH homepage", () => {
  test("renders the HEARTH header", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("img", { name: "HEARTH" })).toBeVisible();
  });

  test("links to the Upload app", async ({ page }) => {
    await page.goto("/");
    const uploadCard = page.getByRole("link", { name: /upload/i });
    await expect(uploadCard).toBeVisible();
    await expect(uploadCard).toHaveAttribute(
      "href",
      "https://upload.brain-bbqs.org",
    );
    await expect(uploadCard).toHaveAttribute("target", "_blank");
  });

  test("links to the Clip Extractor app", async ({ page }) => {
    await page.goto("/");
    const clipCard = page.getByRole("link", { name: /clip extractor/i });
    await expect(clipCard).toBeVisible();
    await expect(clipCard).toHaveAttribute(
      "href",
      "https://clip-extractor.brain-bbqs.org",
    );
    await expect(clipCard).toHaveAttribute("target", "_blank");
  });

  test("links to the Encoding Helper app", async ({ page }) => {
    await page.goto("/");
    const encodingCard = page.getByRole("link", { name: /encoding helper/i });
    await expect(encodingCard).toBeVisible();
    await expect(encodingCard).toHaveAttribute(
      "href",
      "https://encoding-helper.brain-bbqs.org",
    );
    await expect(encodingCard).toHaveAttribute("target", "_blank");
  });
});
