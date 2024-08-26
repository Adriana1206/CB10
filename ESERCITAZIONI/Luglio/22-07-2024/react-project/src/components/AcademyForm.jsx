import { useState } from "react";

function AcademyForm({ value, onSubmit }) {
  const initialState = {
    title: value?.title || "",
    category: value?.category || "",
    instructor: value?.instructor || "",
    duration: value?.duration || "",
    author: value?.author || "",
    genre: value?.genre || "",
    description: value?.description || "",
  };

  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const titleValidation = !form.title.length;
  const categoryValidation = !form.category.length;
  const instructorValidation = !form.instructor.length;
  const durationValidation = !form.duration.length;
  const genreValidation = !form.genre.length;
  const descriptionValidation = !form.description.length;

  const formValidation =
    titleValidation ||
    categoryValidation ||
    instructorValidation ||
    durationValidation ||
    genreValidation ||
    descriptionValidation;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setIsLoading(true);
          await onSubmit(form);
          setIsLoading(false);
        }}
        action="#"
        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <div>
          <label className="sr-only">Title</label>
          <div className="relative">
            <input
              name="title"
              onChange={handleChange}
              type="text"
              value={form.title}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter title"
            />
          </div>
        </div>

        <div>
          <label className="sr-only">Category</label>
          <div className="relative">
            <input
              name="category"
              onChange={handleChange}
              type="text"
              value={form.category}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter category"
            />
          </div>
        </div>

        <div>
          <label className="sr-only">Instructor</label>
          <div className="relative">
            <input
              name="instructor"
              onChange={handleChange}
              type="text"
              value={form.instructor}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter instructor"
            />
          </div>
        </div>

        <div>
          <label className="sr-only">Duration</label>
          <div className="relative">
            <input
              name="duration"
              onChange={handleChange}
              type="text"
              value={form.duration}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter duration"
            />
          </div>
        </div>

        <div>
          <label className="sr-only">Genre</label>
          <div className="relative">
            <input
              name="genre"
              onChange={handleChange}
              type="text"
              value={form.genre}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter genre"
            />
          </div>
        </div>

        <div>
          <label className="sr-only">Description</label>
          <div className="relative">
            <input
              name="description"
              onChange={handleChange}
              type="text"
              value={form.description}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter description"
            />
          </div>
        </div>

        {!isLoading ? (
          <button
            disabled={formValidation}
            type="submit"
            className={`block w-full rounded-lg bg-indigo-600 ${
              formValidation ? "bg-slate-400" : ""
            } px-5 py-3 text-sm font-medium text-white`}
          >
            Submit
          </button>
        ) : (
          <button disabled className="block w-full rounded-lg bg-slate-400 px-5 py-3 text-sm font-medium text-white">
            Is Loading...
          </button>
        )}
      </form>
    </div>
  );
}

export default AcademyForm;
