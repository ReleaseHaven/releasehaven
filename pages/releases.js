export default function Releases() {
  const releases = [
    { id: 1, title: "Echoes of Time", artist: "The Soundwaves" },
    { id: 2, title: "Midnight Journey", artist: "Luna Vibes" },
    { id: 3, title: "Neon Dreams", artist: "City Lights" },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>ReleaseHaven - Releases</h1>
      <ul>
        {releases.map((release) => (
          <li key={release.id}>
            <strong>{release.title}</strong> by {release.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}
