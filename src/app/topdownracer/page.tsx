export default function TopDownRacerPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Top-Down Racer (Canvas)</h1>
      <p className="text-white/70 mt-2 text-sm">
        Arrow keys/WASD to steer · Shift for Nitro · P to pause.
      </p>
      <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-black/30">
        <iframe
          src="/topdownracer/index.html"
          className="w-full aspect-[4/5] min-h-[720px]"
          title="Top-Down Racer"
        />
      </div>
    </div>
  );
}
