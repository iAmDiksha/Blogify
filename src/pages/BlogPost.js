import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { FaArrowLeft } from "react-icons/fa";

const BlogPost = () => {
  const { index } = useParams();
  const posts = useSelector((state) => state.blogReducer.posts);
  const post = posts[index];

  const navigate = useNavigate();

  if (!post) {
    return (
      <section className="page-section">
        <div className="section-padding">
          <p className="text-sm text-slate-500">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section overflow-hidden">
      <div className="section-padding space-y-8">
        <button
          onClick={() => navigate("/list")}
          className="ui-button-secondary"
        >
          <FaArrowLeft />
          Back to posts
        </button>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <article className="space-y-6">
            <div className="space-y-4">
              <span className="ui-chip">{post.category || "Uncategorized"}</span>
              <h1 className="hero-title !text-4xl sm:!text-5xl">{post.title}</h1>
              <div className="flex flex-wrap gap-2">
                {post.tags &&
                  post.tags.filter(Boolean).map((tag, tagIndex) => (
                    <span key={`${tag}-${tagIndex}`} className="ui-chip">
                      {tag}
                    </span>
                  ))}
              </div>
            </div>

            <div className="markdown-shell rounded-[28px] border border-blue-100 bg-white/85 p-5 sm:p-8">
              <MDEditor.Markdown
                source={post.context}
                data-color-mode="dark"
              />
            </div>
          </article>

          <aside className="space-y-5">
            <div className="overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-xl">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full max-h-[420px] w-full object-cover"
                />
              ) : (
                <div className="flex min-h-[320px] items-center justify-center p-6 text-center text-slate-500">
                  No image attached to this post
                </div>
              )}
            </div>

            <div className="ui-card">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Reading View
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-800">
                Focused layout for long-form content
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                This page keeps the visual emphasis on the article while still showing
                the category, tags, and image cleanly beside it on larger screens.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
