import "./style.css";
import { apps } from "./apps";
import { createAppCard } from "./components/app-card";

function renderApps(): void {
  const grid = document.querySelector<HTMLDivElement>("#app-grid");
  if (!grid) return;
  apps.forEach((app) => grid.append(createAppCard(app)));
}

renderApps();
