import Link from "next/link";

export default function Home() {
  
  const leagues = [
    { name: 'Premier League', slug: 'premier-league' },
    { name: 'La Liga', slug: 'la-liga' },
  ];
  
  return (
    <div>
      <p>hola 2</p>
      <ul>
        {leagues.map((league) => (
          <li key={league.slug}>
            <Link href={`/leagues/${league.slug}`}>
              {league.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
