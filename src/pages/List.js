import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, editPost } from "../state/action-creators/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EditModal from "../components/Modal";
import { FaArrowRight, FaEdit, FaPlus, FaRegEye, FaTrash } from "react-icons/fa";
import MDEditor from "@uiw/react-md-editor";
import About from "./About";

const List = () => {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.blogReducer.posts);
  const dispatch = useDispatch();
  const [editedPost, setEditedPost] = useState({
    index: null,
    title: "",
    category: "",
    context: "",
    image: "",
  });
  const [selectedTag, setSelectedTag] = useState("all");
  const [showEditModal, setShowEditModal] = useState(false);

  const handleDeletePost = (index) => {
    dispatch(deletePost(index));
    toast.error("Post deleted successfully!", {
      className: "toast-error",
    });
  };

  const handleEditPost = (index) => {
    const post = posts[index];
    setEditedPost({
      index,
      title: post.title,
      category: post.category,
      context: post.context,
      image: post.image,
    });
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    const { index, title, category, context, image } = editedPost;

    dispatch(editPost(index, title, category, context, image));

    setEditedPost({
      index: null,
      title: "",
      category: "",
      context: "",
      image: "",
    });
    toast.success("Post updated successfully!", {
      className: "toast-success",
    });
    setShowEditModal(false);
  };

  const handleCancelEdit = () => {
    setEditedPost({
      index: null,
      title: "",
      category: "",
      context: "",
      image: "",
      tags: [],
    });
    setShowEditModal(false);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const allTags = posts.reduce((tags, post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        if (tag && !tags.includes(tag)) {
          tags.push(tag);
        }
      });
    }
    return tags;
  }, []);

  const filteredPosts =
    selectedTag === "all"
      ? posts
      : posts.filter((post) => post.tags && post.tags.includes(selectedTag));

  if (!filteredPosts || filteredPosts.length === 0) {
    return <About header={"No blog posts yet."} />;
  }

  return (
    <>
      <section className="page-section">
        <div className="section-padding space-y-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">
                Post Library
              </p>
              <h1 className="section-title">Manage and revisit your recent writing.</h1>
              <p className="section-copy max-w-3xl">
                Browse everything you have written, filter by tag, open the full post,
                or jump back into editing. The layout keeps controls visible without
                making the content feel crowded.
              </p>
            </div>

            <button className="ui-button-primary" onClick={() => navigate("/add-blogs")}>
              <FaPlus />
              Add New Blog
              <FaArrowRight />
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className={`tag ${selectedTag === "all" ? "tag-active" : ""}`}
              onClick={() => handleTagClick("all")}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                type="button"
                key={tag}
                className={`tag ${selectedTag === tag ? "tag-active" : ""}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {filteredPosts.map((post, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-[28px] border border-blue-100 bg-white/95 shadow-xl transition duration-300 hover:border-blue-200"
              >
                <div className="grid h-full gap-0 md:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[240px] overflow-hidden border-b border-blue-100 bg-blue-50/40 md:min-h-full md:border-b-0 md:border-r">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center p-6 text-center text-slate-500">
                        No image uploaded
                      </div>
                    )}
                    <div className="absolute left-4 top-4">
                      <span className="ui-chip">{post.category || "Uncategorized"}</span>
                    </div>
                  </div>

                  <div className="flex h-full flex-col p-5 sm:p-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {post.tags &&
                        post.tags
                          .filter(Boolean)
                          .map((tag) => (
                            <span key={`${tag}-${index}`} className="ui-chip">
                              {tag}
                            </span>
                          ))}
                    </div>

                    <h2 className="text-2xl font-extrabold leading-tight text-slate-800">
                      {post.title}
                    </h2>

                    <div className="markdown-shell mt-4 flex-1 rounded-3xl border border-blue-100 bg-slate-50/80 p-4">
                      <MDEditor.Markdown
                        source={
                          post.context.length > 140
                            ? `${post.context.slice(0, 140)} ...`
                            : post.context
                        }
                        data-color-mode="dark"
                      />
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <button
                        className="ui-button-secondary"
                        onClick={() => navigate(`/blogs/${index}`)}
                      >
                        <FaRegEye />
                        View
                      </button>
                      <button
                        className="ui-button-secondary"
                        onClick={() => handleEditPost(index)}
                      >
                        <FaEdit />
                        Edit
                      </button>
                      <button
                        className="ui-button-danger"
                        onClick={() => handleDeletePost(index)}
                      >
                        <FaTrash />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {showEditModal && (
        <EditModal
          editedPost={editedPost}
          setEditedPost={setEditedPost}
          handleSaveEdit={handleSaveEdit}
          handleCancelEdit={handleCancelEdit}
        />
      )}
    </>
  );
};

export default List;
