type ContentsProps = { content: string };
type ColorProps = { color: string };
type TextProps = ContentsProps & ColorProps;

const Text = ({ content, color }: TextProps) => {
  return <p style={{ color }}>{content}</p>;
};

export default Text;
