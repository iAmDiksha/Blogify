import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaFeatherAlt, FaLayerGroup, FaRegStar } from "react-icons/fa";

const highlights = [
  {
    icon: <FaFeatherAlt />,
    title: "Write freely",
    description: "Capture ideas in a clean markdown workflow with image support.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Stay organized",
    description: "Sort your writing with categories and tags that keep your posts discoverable.",
  },
  {
    icon: <FaRegStar />,
    title: "Keep it polished",
    description: "Review, edit, and manage every draft from one focused dashboard.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="page-section overflow-hidden">
      <div className="section-padding grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
            Built For Your Own Voice
          </div>

          <div className="space-y-5">
            <h1 className="hero-title max-w-3xl">
              Turn quick thoughts into a professional blog collection.
            </h1>
            <p className="section-copy max-w-2xl">
              Blogify is a focused personal publishing space for drafting posts,
              organizing ideas, and presenting your writing in a cleaner way across
              desktop and mobile.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              className="ui-button-primary"
              onClick={() => navigate("/add-blogs")}
            >
              Start Writing
              <FaArrowRight />
            </button>
            <Link to="/list" className="ui-button-secondary">
              Explore Your Posts
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="ui-card space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  {item.icon}
                </div>
                <h2 className="text-lg font-bold text-slate-800">{item.title}</h2>
                <p className="text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-blue-200/60 blur-3xl" />
          <div className="absolute -bottom-2 right-4 h-28 w-28 rounded-full bg-sky-200/60 blur-3xl" />

          <div className="ui-card relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Editorial Preview
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-800">Your next story</p>
                </div>
                <span className="ui-chip">Responsive</span>
              </div>

              <div className="rounded-[24px] border border-blue-100 bg-blue-50/60 p-5">
                <p className="text-sm uppercase tracking-[0.22em] text-blue-700">
                  Featured Draft
                </p>
                <h3 className="mt-3 text-3xl font-extrabold text-slate-800">
                  Build a writing habit that feels structured.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Create rich markdown posts, attach a visual, and manage your
                  library from one interface that feels deliberate instead of basic.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                    Workflow
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-800">Draft to publish</p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                    Experience
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-800">Clean on every screen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
