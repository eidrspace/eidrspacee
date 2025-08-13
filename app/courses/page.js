export default function CoursesPage() {
  const courses = [
    { id: "c1", title: "DL Systems 101", streak: 6, friends: ["Ada", "Lin"] },
    { id: "c2", title: "Probabilistic ML", streak: 2, friends: ["You"] },
  ];

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <div className="grid gap-3">
        {courses.map((c) => (
          <div
            key={c.id}
            className="rounded-2xl border border-white/15 p-4 bg-black/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{c.title}</p>
                <p className="text-sm text-white/60">
                  With: {c.friends.join(", ")}
                </p>
              </div>
              <div className="text-sm text-white/70">🔥 {c.streak}d</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
