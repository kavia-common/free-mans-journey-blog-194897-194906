import React, { useMemo, useState } from "react";
import { getAllPosts, searchPosts } from "../data/posts";
import { PostCard } from "../components/PostCard";

/**
 * Homepage with search and post listing.
 */

// PUBLIC_INTERFACE
export function HomePage() {
  /** Renders the homepage list/grid of blog posts with search/filter. */
  const [query, setQuery] = useState("");

  const posts = useMemo(() => getAllPosts(), []);
  const filtered = useMemo(() => searchPosts(posts, query), [posts, query]);

  return (
    <main className="page">
      <section className="hero">
        <div className="container heroInner">
          <div className="heroCopy">
            <h1 className="heroTitle">A modern journal for a freer life.</h1>
            <p className="heroSubtitle">
              Short essays on mindset, movement, minimalism, and building habits that
              make room to breathe.
            </p>
          </div>

          <div className="heroPanel" aria-label="Search posts">
            <label className="fieldLabel" htmlFor="search">
              Search by title or tag
            </label>
            <div className="searchRow">
              <input
                id="search"
                className="input"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try: freedom, writing, habits…"
                aria-describedby="searchHelp"
              />
              <button
                className="btn"
                type="button"
                onClick={() => setQuery("")}
                disabled={!query.trim()}
              >
                Clear
              </button>
            </div>
            <div id="searchHelp" className="helpText">
              Showing <strong>{filtered.length}</strong> of {posts.length} posts
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="grid" role="list" aria-label="Blog posts">
          {filtered.map((p) => (
            <div role="listitem" key={p.id}>
              <PostCard post={p} />
            </div>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="emptyState" role="status" aria-live="polite">
            <div className="emptyTitle">No posts match your search.</div>
            <div className="emptyHint">Try a different title or tag.</div>
          </div>
        ) : null}
      </section>
    </main>
  );
}
