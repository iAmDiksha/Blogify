import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../state/action-creators/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MDEditor from "@uiw/react-md-editor";
import { FaArrowRight, FaEye, FaImage, FaPlus } from "react-icons/fa";

const Blogs = () => {
  const [post, setPost] = useState({
    title: "",
    category: "",
    context: "",
    tags: [],
    image: null,
  });

  const [blogContext, setBlogContext] = useState("");

  const handleBlogContextChange = (e) => {
    setBlogContext(e);
    setPost((prevState) => ({
      ...prevState,
      context: blogContext,
    }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      post.title.trim() === "" ||
      post.category.trim() === "" ||
      post.context.trim() === ""
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    dispatch(
      addPost(post.title, post.category, post.context, post.tags, post.image)
    );

    setPost({ title: "", category: "", context: "", tags: [], image: null });
    setBlogContext("");
    toast.success("Blog successfully added!");
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPost((prevState) => ({
          ...prevState,
          image: reader.result,
        }));
      };
      if (files[0]) {
        reader.readAsDataURL(files[0]);
      } else {
        setPost((prevState) => ({
          ...prevState,
          image: null,
        }));
      }
    } else if (name === "tags") {
      const tagArray = value.split(",").map((tag) => tag.trim());
      setPost((prevState) => ({
        ...prevState,
        tags: tagArray,
      }));
    } else {
      setPost((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const { title, category, tags, image } = post;

  return (
    <>
      <section className="page-section overflow-hidden">
        <div className="section-padding space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100">
              Create A Post
            </p>
            <h1 className="section-title">Write with a calmer, cleaner workspace.</h1>
          </div>

          <form onSubmit={handleSubmit} className="ui-card space-y-6 p-5 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  Editor
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">New blog draft</h2>
              </div>
              <span className="ui-chip">Responsive form</span>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="title" className="ui-label">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  className="ui-input"
                  placeholder="A concise, clear headline"
                />
              </div>

              <div>
                <label htmlFor="category" className="ui-label">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={category}
                  onChange={handleChange}
                  className="ui-input"
                  placeholder="Design, Tech, Notes..."
                />
              </div>
            </div>

            <div>
              <label htmlFor="tags" className="ui-label">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                placeholder="Separate tags with commas"
                value={tags.join(", ")}
                onChange={handleChange}
                className="ui-input"
              />
            </div>

            <div>
              <label htmlFor="context" className="ui-label">
                Content
              </label>
              <div className="markdown-shell overflow-hidden rounded-3xl border border-white/10 bg-slate-950/35 p-2">
                <MDEditor
                  data-color-mode="dark"
                  id="context"
                  name="context"
                  value={blogContext}
                  onChange={handleBlogContextChange}
                  height={520}
                />
              </div>
            </div>

            <div>
              <label htmlFor="image" className="ui-label">
                Cover Image
              </label>
              <label
                htmlFor="image"
                className="flex cursor-pointer flex-col gap-3 rounded-3xl border border-dashed border-white/15 bg-white/5 px-5 py-6 text-slate-300 transition duration-200 hover:border-cyan-300/30 hover:bg-cyan-300/5"
              >
                <span className="flex items-center gap-3 text-base font-semibold text-white">
                  <FaImage className="text-cyan-100" />
                  Upload an image for this post
                </span>
                <span className="text-sm text-slate-400">
                  {image ? "Image selected and ready to use." : "PNG, JPG, or any image format supported by the browser."}
                </span>
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:justify-end">
              <button type="button" className="ui-button-secondary" onClick={() => navigate("/list")}>
                <FaEye />
                View Blogs
              </button>
              <button type="submit" className="ui-button-primary">
                <FaPlus />
                Publish Draft
                <FaArrowRight />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Blogs;
