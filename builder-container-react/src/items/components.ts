import { Button } from './button/button.element';
import { Image } from './image/image.element';
import { Text } from './text/text.element';
import { ItemProps } from './types';

export const components: Record<ItemProps['type'], React.FC<any>> = {
  button: Button,
  image: Image,
  text: Text,
}