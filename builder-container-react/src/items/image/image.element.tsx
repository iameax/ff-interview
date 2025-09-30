export type ImageProps = {
  id: string;
  type: 'image';
  config: {
    src: string;
  }
}

export function Image(props: ImageProps) {
  return (
    <img style={{ maxWidth: '300px' }} src={props.config.src} alt="" />
  );
}