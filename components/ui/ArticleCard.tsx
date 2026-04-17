import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  href: string;
  image?: string;
}

export default function ArticleCard({
  title,
  excerpt,
  date,
  readTime,
  category,
  href,
}: ArticleCardProps) {
  return (
    <article className="card overflow-hidden group">
      <div className="h-48 bg-gradient-to-br from-brand-green/10 to-brand-gold/10 flex items-center justify-center">
        <span className="text-4xl opacity-30">📰</span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="badge-green">{category}</span>
          <span className="flex items-center gap-1 text-xs text-text-muted">
            <Clock className="w-3 h-3" />
            {readTime}
          </span>
        </div>
        <h3 className="text-lg font-body font-bold text-text-primary mb-2 line-clamp-2 group-hover:text-brand-green transition-colors">
          <Link href={href}>{title}</Link>
        </h3>
        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          <time className="text-xs text-text-muted">
            {new Date(date).toLocaleDateString("en-CA", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <Link
            href={href}
            className="flex items-center gap-1 text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
