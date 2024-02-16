export const DateContainer = ({ date }: { date: Date }) => {
  return (
    <p>
      {date.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'Europe/Madrid'
      })}
    </p>
  );
};
