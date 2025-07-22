export const DateContainer = ({ date }: { date: string }) => {
  return (
    <time dateTime={date}>
      {new Date(date).toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })}
    </time>
  );
};
