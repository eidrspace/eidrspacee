export default function GroupsPage() {
  const groups = [
    { id: "g1", name: "Vision & Multimodal", members: 284 },
    { id: "g2", name: "AWS MLOps", members: 612 },
    { id: "g3", name: "Healthcare AI", members: 143 },
  ];

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Groups</h1>
      <div className="grid gap-3">
        {groups.map((g) => (
          <div
            key={g.id}
            className="flex items-center justify-between rounded-2xl border border-white/15 p-4 bg-black/30"
          >
            <span>{g.name}</span>
            <span className="text-sm text-white/60">{g.members} members</span>
          </div>
        ))}
      </div>
    </section>
  );
}
