import { CabinetScene } from "./scenes/cabinet";
import { HomeScene } from "./scenes/home";
import { ResourcesScene } from "./scenes/resources";

interface RouteDefinition {
  path: string;
  component: React.FC;
  label?: string;
}

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: HomeScene,
    label: "Home",
  },
  {
    path: "/resources",
    component: ResourcesScene,
    label: "Resources",
  },
  {
    path: "/cabinet",
    component: CabinetScene,
    label: "Cabinet",
  },
];
