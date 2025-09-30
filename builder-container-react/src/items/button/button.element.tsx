export type ButtonProps = {
  id: string;
  type: 'button';
  config: {
    text: string;
  }
}

export function Button(props: ButtonProps) {
  return (
    <button>{props.config.text}</button>
  );
}