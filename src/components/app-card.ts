import type { AppInfo } from "../apps";

export function createAppCard(app: AppInfo): HTMLElement {
  const isLive = app.status === "live";

  const card = document.createElement("a");
  card.className = "app-card";
  card.dataset.appId = app.id;

  if (isLive) {
    card.href = app.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
  } else {
    card.classList.add("app-card--disabled");
    card.setAttribute("aria-disabled", "true");
    card.removeAttribute("href");
  }

  const logo = document.createElement("img");
  logo.className = "app-card__logo";
  logo.src = app.logo;
  logo.alt = "";
  logo.loading = "lazy";

  const body = document.createElement("div");
  body.className = "app-card__body";

  const name = document.createElement("h2");
  name.className = "app-card__name";
  name.textContent = app.name;

  const description = document.createElement("p");
  description.className = "app-card__description";
  description.textContent = app.description;

  body.append(name, description);

  if (!isLive) {
    const badge = document.createElement("span");
    badge.className = "app-card__badge";
    badge.textContent = "Coming soon";
    body.append(badge);
  }

  card.append(logo, body);
  return card;
}
