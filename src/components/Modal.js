import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { FaArrowLeft, FaCheck, FaImage } from "react-icons/fa";

const EditModal = ({
  editedPost,
  setEditedPost,
  handleSaveEdit,
  handleCancelEdit,
}) => {
  const handleInputChange = (e, key) => {
    const value = e.target.value;
    setEditedPost((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditedPost((prevState) => ({
        ...prevState,
        image: imageUrl,
      }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/10 p-4 backdrop-blur-md">
      <div className="page-section w-full max-w-3xl">
        <div className="section-padding space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Update Post
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-800">Edit your content</h2>
            </div>
            <span className="ui-chip">Modal editor</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="edit-title" className="ui-label">
                Title
              </label>
              <input
                id="edit-title"
                type="text"
                value={editedPost.title}
                onChange={(e) => handleInputChange(e, "title")}
                className="ui-input"
              />
            </div>

            <div>
              <label htmlFor="edit-category" className="ui-label">
                Category
              </label>
              <input
                id="edit-category"
                type="text"
                value={editedPost.category}
                onChange={(e) => handleInputChange(e, "category")}
                className="ui-input"
              />
            </div>
          </div>

          <div>
            <label htmlFor="edit-image" className="ui-label">
              Image
            </label>
            <label
              htmlFor="edit-image"
              className="flex cursor-pointer items-center gap-3 rounded-3xl border border-dashed border-blue-200 bg-blue-50/55 px-5 py-4 text-sm text-slate-600 transition duration-200 hover:border-blue-300 hover:bg-blue-50"
            >
              <FaImage className="text-blue-700" />
              Upload a replacement image
            </label>
            <input
              id="edit-image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          <div>
            <label htmlFor="edit-context" className="ui-label">
              Content
            </label>
            <div className="markdown-shell overflow-hidden rounded-3xl border border-blue-100 bg-white/85 p-2">
              <MDEditor
                id="edit-context"
                value={editedPost.context}
                onChange={(value) =>
                  handleInputChange({ target: { value } }, "context")
                }
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-blue-100 pt-4 sm:flex-row sm:justify-end">
            <button onClick={handleCancelEdit} className="ui-button-secondary">
              <FaArrowLeft />
              Cancel
            </button>
            <button onClick={handleSaveEdit} className="ui-button-primary">
              <FaCheck />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
