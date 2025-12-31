import React from "react";
import { Link } from "react-router-dom";

/**
 * Card preview for a blog post.
 */

// PUBLIC_INTERFACE
export function PostCard({ post }) {
  /** Renders a responsive, accessible card linking to the post detail page. */
  return (
    <article className="postCard">
      <Link to={`/post/${post.slug}`} className="postCardLink" aria-label={`Read: ${post.title}`}>
        <div className="postCardMedia" aria-hidden="true">
          <img className="postCardImg" src={post.heroImage} alt="" loading="lazy" />
        </div>

        <div className="postCardBody">
          <div className="postMetaRow">
            <time className="postMeta" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </time>
            <span className="postMetaDot" aria-hidden="true">
              •
            </span>
            <span className="postMeta">{post.readTimeMinutes} min read</span>
          </div>

          <h2 className="postCardTitle">{post.title}</h2>
          <p className="postCardExcerpt">{post.excerpt}</p>

          <div className="tagRow" aria-label="Tags">
            {post.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>

          <div className="postCardCta" aria-hidden="true">
            Read article <span className="arrow">→</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
