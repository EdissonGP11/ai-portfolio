export default function ProjectCard({
  title,
  description,
  tags,
  link,
  repo,
}: {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 p-5 hover:border-white/30 transition">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-white/70 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        {link && (
          <a
            href={link}
            target={link.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl border border-white/20 hover:border-white/40"
          >
            View Project
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-xl border border-white/20 hover:border-white/40 text-sm"
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
}
