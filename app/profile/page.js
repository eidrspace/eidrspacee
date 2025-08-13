export default function ProfilePage() {
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="rounded-2xl border border-white/15 p-4 bg-black/30">
        <p className="text-white/80 mb-2">Name: Jay</p>
        <p className="text-white/60 text-sm">Posts: 23 • Friends: 118 • Streak: 6</p>
      </div>
    </section>
  );
}
