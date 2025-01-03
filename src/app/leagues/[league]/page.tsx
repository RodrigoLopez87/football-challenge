export default function LeaguePage({params} : {params: {league: string}}) {
  
  if (!params.league) return <p>Loading...</p>;

  const formattedLeagueName = params.league
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div>
      <h1>League: {formattedLeagueName}</h1>
    </div>
  );
};