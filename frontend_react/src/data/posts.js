/**
 * Seed/mock content for the blog.
 * No backend required; this file is the single source of truth for posts.
 */

// PUBLIC_INTERFACE
export function getAllPosts() {
  /** Returns all posts sorted by date (newest first). */
  return [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
}

// PUBLIC_INTERFACE
export function getPostBySlug(slug) {
  /** Finds a post by slug. Returns undefined if not found. */
  return POSTS.find((p) => p.slug === slug);
}

// PUBLIC_INTERFACE
export function searchPosts(posts, query) {
  /**
   * Filters posts by title, excerpt, or tags (case-insensitive).
   * @param {Array} posts
   * @param {string} query
   * @returns {Array}
   */
  const q = (query || "").trim().toLowerCase();
  if (!q) return posts;

  return posts.filter((p) => {
    const inTitle = p.title.toLowerCase().includes(q);
    const inExcerpt = p.excerpt.toLowerCase().includes(q);
    const inTags = p.tags.some((t) => t.toLowerCase().includes(q));
    return inTitle || inExcerpt || inTags;
  });
}

const POSTS = [
  {
    id: "p1",
    slug: "the-day-i-stopped-waiting",
    title: "The Day I Stopped Waiting",
    date: "2025-01-05",
    readTimeMinutes: 6,
    tags: ["Mindset", "Freedom", "Habits"],
    excerpt:
      "A shift happened when I realized waiting for the “perfect time” was just fear wearing a calendar. Here’s what changed—and what I do now.",
    heroImage: "/assets/posts/post-1.jpg",
    content: [
      {
        type: "p",
        text: "There was a time I called it “planning.” The truth is: I was postponing the life I wanted because the unknown felt too expensive.",
      },
      {
        type: "p",
        text: "The turning point wasn’t dramatic. It was quiet—almost boring. One morning I caught myself saying, “After I… then I’ll…” and I finally heard it: a loop.",
      },
      { type: "h2", text: "The loop of later" },
      {
        type: "p",
        text: "Later is a safe place. It holds your dreams without asking you to risk anything. But it also charges interest: time, energy, and belief.",
      },
      {
        type: "blockquote",
        text: "If you keep a dream perfectly preserved, you also keep it perfectly unlived.",
      },
      { type: "h2", text: "A simple practice" },
      {
        type: "p",
        text: "I started using a rule: one small act of commitment per day. Something measurable. Something that ships.",
      },
      {
        type: "ul",
        items: [
          "Write 200 words, not “work on a chapter.”",
          "Walk 15 minutes, not “get in shape.”",
          "Send the email, not “prepare to reach out.”",
        ],
      },
      {
        type: "p",
        text: "Momentum doesn’t come from motivation. It comes from evidence—tiny proofs that you do what you say.",
      },
      { type: "p", text: "That was the day I stopped waiting." },
    ],
  },
  {
    id: "p2",
    slug: "walking-with-less",
    title: "Walking With Less",
    date: "2024-12-18",
    readTimeMinutes: 7,
    tags: ["Minimalism", "Travel", "Clarity"],
    excerpt:
      "I packed lighter, and unexpectedly my mind did too. The surprising benefits of reducing what you carry—physically and mentally.",
    heroImage: "/assets/posts/post-2.jpg",
    content: [
      {
        type: "p",
        text: "The first time I traveled with a single bag, I expected inconvenience. Instead I found quiet.",
      },
      { type: "h2", text: "Less friction, more presence" },
      {
        type: "p",
        text: "When you carry less, you move differently. You stop negotiating with your belongings and start noticing the street, the light, the people.",
      },
      {
        type: "p",
        text: "Minimalism isn’t about deprivation. It’s about choosing what matters so clearly that everything else becomes optional.",
      },
      { type: "h2", text: "A quick audit" },
      {
        type: "p",
        text: "Here’s a simple question I ask before adding anything to my load: “Will this multiply my freedom or my worry?”",
      },
      {
        type: "ul",
        items: [
          "Freedom: a journal, a reusable bottle, a comfortable layer.",
          "Worry: duplicates, “just in case” items, and anything fragile.",
        ],
      },
      {
        type: "p",
        text: "The goal is not emptiness. The goal is space.",
      },
    ],
  },
  {
    id: "p3",
    slug: "how-i-reset-after-a-bad-week",
    title: "How I Reset After a Bad Week",
    date: "2024-11-02",
    readTimeMinutes: 5,
    tags: ["Routines", "Wellbeing", "Reflection"],
    excerpt:
      "Bad weeks happen. Here’s the gentle reset routine I rely on—no grand reinvention, just small steps back to center.",
    heroImage: "/assets/posts/post-3.jpg",
    content: [
      {
        type: "p",
        text: "When a week unravels, my instinct is to fix everything at once. That only adds pressure.",
      },
      { type: "h2", text: "The 3-part reset" },
      {
        type: "ol",
        items: [
          "Restore basics: water, sleep, a decent meal.",
          "Reduce inputs: fewer tabs, fewer takes, fewer opinions.",
          "One win: a task that closes a loop and proves momentum.",
        ],
      },
      {
        type: "p",
        text: "I don’t ask myself to feel better immediately. I ask myself to do the next kind thing for future me.",
      },
      {
        type: "blockquote",
        text: "You don’t need a new life. You need a clean next step.",
      },
      { type: "p", text: "That’s the reset." },
    ],
  },
  {
    id: "p4",
    slug: "notes-from-the-early-morning",
    title: "Notes From the Early Morning",
    date: "2024-10-12",
    readTimeMinutes: 8,
    tags: ["Writing", "Solitude", "Practice"],
    excerpt:
      "Before the day gets loud, I collect a few quiet minutes. These are the notes—about attention, patience, and the craft of showing up.",
    heroImage: "/assets/posts/post-4.jpg",
    content: [
      {
        type: "p",
        text: "Early morning isn’t magic. It’s just less crowded. That’s why it works.",
      },
      { type: "h2", text: "The ritual" },
      {
        type: "p",
        text: "I make a cup of something warm and sit with a page. No goal except contact—pen to paper, breath to body.",
      },
      {
        type: "p",
        text: "If you’re trying to build a practice, lower the entry fee. Make it easy to start and hard to avoid.",
      },
      { type: "h2", text: "A small invitation" },
      {
        type: "p",
        text: "Tomorrow morning, try five minutes. Not productivity—presence. Write one sentence that feels true.",
      },
      {
        type: "p",
        text: "That sentence might not change your whole life. But it will change the next hour. And that’s enough to begin.",
      },
    ],
  },
];
