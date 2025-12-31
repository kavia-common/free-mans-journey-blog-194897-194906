import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "../data/posts";

/**
 * Post detail page. Renders full article content.
 */

function renderBlocks(blocks) {
  return blocks.map((b, idx) => {
    if (b.type === "h2") return <h2 key={idx}>{b.text}</h2>;
    if (b.type === "p") return <p key={idx}>{b.text}</p>;
    if (b.type === "blockquote") return <blockquote key={idx}>{b.text}</blockquote>;
    if (b.type === "ul")
      return (
        <ul key={idx}>
          {b.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    if (b.type === "ol")
      return (
        <ol key={idx}>
          {b.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      );
    return null;
  });
}

// PUBLIC_INTERFACE
export function PostDetailPage() {
  /** Renders the post detail reader page for a given slug. */
  const { slug } = useParams();

  const post = useMemo(() => getPostBySlug(slug), [slug]);

  if (!post) {
    return (
      <main className="page">
        <section className="container section">
          <div className="emptyState" role="status" aria-live="polite">
            <div className="emptyTitle">Post not found</div>
            <div className="emptyHint">
              <Link className="textLink" to="/">
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="postHero">
        <div className="container postHeroInner">
          <Link className="backLink" to="/" aria-label="Back to home">
            ← Back
          </Link>

          <div className="postHeroCard">
            <div className="postHeroMeta">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })}
              </time>
              <span className="postMetaDot" aria-hidden="true">
                •
              </span>
              <span>{post.readTimeMinutes} min read</span>
            </div>

            <h1 className="postTitle">{post.title}</h1>

            <div className="tagRow" aria-label="Tags">
              {post.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="postHeroImageWrap" aria-hidden="true">
            <img className="postHeroImage" src={post.heroImage} alt="" />
          </div>
        </div>
      </section>

      <article className="container postBody" aria-label="Article content">
        {renderBlocks(post.content)}
      </article>
    </main>
  );
}
