import { components } from "./components";
import type { ItemProps } from "./types";

export function ItemComponent({ item }: { item: ItemProps }) {
  const Component = components[item.type];
  if (!Component) {
    return null;
  }

  return <Component {...item} />;
}
