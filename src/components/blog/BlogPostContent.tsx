import type { BlogBlock } from "@/data/blog";

export default function BlogPostContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={`${block.content}-${index}`}
              className="text-xl font-bold text-[var(--text-primary)] pt-2"
            >
              {block.content}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={`list-${index}`} className="flex flex-col gap-2 pl-1" role="list">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[var(--text-secondary)] leading-relaxed"
                >
                  <span
                    className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] flex-shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={`${block.content.slice(0, 32)}-${index}`} className="text-[var(--text-secondary)] leading-relaxed">
            {block.content}
          </p>
        );
      })}
    </div>
  );
}
