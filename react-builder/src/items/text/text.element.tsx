export type TextProps = {
  id: string;
  type: 'text';
  config: {
    text: string;
  }
}

export function Text(props: TextProps) {
  return (
    <div>{props.config.text}</div>
  );
}