import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaBookOpen, FaMobileAlt, FaPenFancy } from "react-icons/fa";

const About = ({ header }) => {
  const navigate = useNavigate();

  return (
    <section className="page-section overflow-hidden">
      <div className="section-padding grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100">
            About Blogify
          </p>
          <h1 className="section-title">{header}</h1>
          <p className="section-copy max-w-2xl">
            Blogify gives you a simple place to draft posts, keep them organized,
            and read them back in a cleaner interface. The refreshed layout focuses on
            clarity, responsive spacing, and a more polished publishing feel.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="ui-card space-y-3">
              <FaPenFancy className="text-xl text-cyan-100" />
              <p className="text-lg font-semibold text-white">Write</p>
              <p className="text-sm leading-6 text-slate-400">
                Draft posts in markdown with a more focused editor surface.
              </p>
            </div>
            <div className="ui-card space-y-3">
              <FaBookOpen className="text-xl text-cyan-100" />
              <p className="text-lg font-semibold text-white">Organize</p>
              <p className="text-sm leading-6 text-slate-400">
                Group entries using categories and tags that stay easy to browse.
              </p>
            </div>
            <div className="ui-card space-y-3">
              <FaMobileAlt className="text-xl text-cyan-100" />
              <p className="text-lg font-semibold text-white">Respond</p>
              <p className="text-sm leading-6 text-slate-400">
                Use the same interface comfortably on phones, tablets, and larger screens.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[32px] border border-cyan-300/10 bg-cyan-300/5" />
          <div className="ui-card relative p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.26em] text-slate-500">
              Quick Access
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-white">
              Ready to create the next post?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Jump straight into the editor and start building your library. This page
              also doubles as the empty state when there are no posts yet.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="ui-button-primary" onClick={() => navigate("/add-blogs")}>
                Create Blog
                <FaArrowRight />
              </button>
              <button className="ui-button-secondary" onClick={() => navigate("/")}>
                Back Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
