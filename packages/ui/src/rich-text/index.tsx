type Props = {
  richText: any;
};

export function RichText(props: Props) {
  const { richText } = props;
  console.log(richText);

  return (
    <>
      <h2>Rich text!</h2>
      {JSON.stringify(richText, null, 2)}
    </>
  );
}
