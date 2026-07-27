import { test, expect } from "@playwright/test";

test.describe("HEARTH homepage", () => {
  test("renders the HEARTH header", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "HEARTH", level: 1 }),
    ).toBeVisible();
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
});
