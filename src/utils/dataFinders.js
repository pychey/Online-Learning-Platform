// THIS WILL BE REPLACED WHEN BACKEND IS INTEGRATED

import { COURSE_DATA, PROGRAM_DATA, CHAPTER_DATA, LESSON_DATA } from "@/data/admin"

export const findLessonBySlug = (slug) => {
  return LESSON_DATA.find(lesson => lesson.slug === slug)
}

export const findChapterBySlug = (slug) => {
  return CHAPTER_DATA.find(chapter => chapter.slug === slug)
}

export const findCourseBySlug = (slug) => {
  return COURSE_DATA.find(course => course.slug === slug)
}

export const findProgramBySlug = (slug) => {
  return PROGRAM_DATA.find(program => program.slug === slug)
}

export const findChapterById = (id) => {
  return CHAPTER_DATA.find(chapter => chapter.id === id)
}

export const findCourseById = (id) => {
  return COURSE_DATA.find(course => course.id === id)
}

export const findProgramById = (id) => {
  return PROGRAM_DATA.find(program => program.id === id)
}

export const findCoursesByProgramId = (programId) => {
  return COURSE_DATA.filter(course => course.program_id === programId)
}

export const findChaptersByCourseId = (courseId) => {
  return CHAPTER_DATA.filter(chapter => chapter.course_id === courseId)
}

export const findLessonsByChapterId = (chapterId) => {
  return LESSON_DATA.filter(lesson => lesson.chapter_id === chapterId)
}