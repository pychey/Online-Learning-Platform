'use client';

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getSlugFromPathname } from "@/utils";
import { deleteContent } from "@/lib/content";
import { deleteLesson } from "@/lib/lesson";
import { deleteCourse } from "@/lib/course";
import { deleteProgram } from "@/lib/program";

const Menu = ({ model, data }) => {
  const [ menuOpen, setMenuOpen] = useState(false);
  const [ confirmOpen, setConfirmOpen] = useState(false);
  const menuRef = useRef(null);
  const modalRef = useRef(null);

  const pathname = usePathname();
  const slug = getSlugFromPathname(pathname);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }

      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setConfirmOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDelete = async () => {
    console.log(pathname);
    setConfirmOpen(false)
    const returnPath = pathname.split('/').slice(0, -1).join('/');
    // try {
    //   await deleteProgram(slug);
    //   router.push("/admin/programs");
    // } catch (err) {

    // }
    try {
      if (model === "Program") await deleteProgram(data.slug)    
      if (model === "Course") await deleteCourse(data.slug)
      if (model === "Chapter") await deleteContent(data.slug)
      if (model === "Lesson") await deleteLesson(data.slug)

      router.push(returnPath)
    } catch (err) {
      alert("Failed to delete " + model + " .");
      console.error(err);
    }  
  };

  return (
    <>
      <div className="relative" ref={menuRef}>
        <button
          className="p-2 hover:bg-admin-border rounded-full cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 25 24"
            className="rotate-90 h-5 w-5"
          >
            <path
              fill="currentColor"
              d="M6.313 13.756a1.75 1.75 0 0 1-1.75-1.75v-.01a1.75 1.75 0 0 1 3.5 0v.01a1.75 1.75 0 0 1-1.75 1.75m12 0a1.75 1.75 0 0 1-1.75-1.75v-.01a1.75 1.75 0 0 1 3.5 0v.01a1.75 1.75 0 0 1-1.75 1.75m-7.75-1.75a1.75 1.75 0 1 0 3.5 0v-.01a1.75 1.75 0 0 0-3.5 0z"
            />
          </svg>
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow z-10">
            <button
              onClick={() => {
                setMenuOpen(false);
                setConfirmOpen(true);
              }}
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
            >
              Delete {model}
            </button>
          </div>
        )}
      </div>

      {confirmOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded shadow-lg max-w-sm w-full space-y-4"
          >
            <h2 className="text-lg font-semibold text-red-500">Delete {model}?</h2>
            <p className="text-sm text-gray-700">
              Are you sure you want to delete <strong>{data.program_title || data.title}</strong>? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setConfirmOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete()}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
