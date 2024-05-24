export const DateContainer = ({ date }: { date: string }) => {
  return (
    <p>
      {new Date(date).toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })}
    </p>
  );
};
