import { ItemComponent } from './items/ItemComponent';
import { ItemProps } from './items/types';

export function Page({ items }: { items: ItemProps[] }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} style={{ margin: '10px 0' }}>
          <ItemComponent item={item} />
        </div>
      ))}
    </div>
  );
}