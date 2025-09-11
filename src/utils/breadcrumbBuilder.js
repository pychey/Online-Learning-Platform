
export const buildLessonBreadcrumbs = (program, course, chapter, lesson) => ([
  { label: "Admin", url: "/admin" },
  { label: "Program", url: "/admin/program" },
  { label: program.program_title, url: `/admin/program/${program.slug}` },
  { label: course.title, url: `/admin/program/${program.slug}/${course.slug}` },
  { label: chapter.title, url: `/admin/program/${program.slug}/${course.slug}/${chapter.slug}` },
  { label: lesson.title, url: `/admin/program/${program.slug}/${course.slug}/${chapter.slug}/${lesson.slug}` }
])

export const buildChapterBreadcrumbs = (program, course, chapter) => ([
  { label: "Admin", url: "/admin" },
  { label: "Program", url: "/admin/program" },
  { label: program.program_title, url: `/admin/program/${program.slug}` },
  { label: course.title, url: `/admin/program/${program.slug}/${course.slug}` },
  { label: chapter.title, url: `/admin/program/${program.slug}/${course.slug}/${chapter.slug}` }
])

export const buildCourseBreadcrumbs = (program, course) => ([
  { label: "Admin", url: "/admin" },
  { label: "Program", url: "/admin/program" },
  { label: program.program_title, url: `/admin/program/${program.slug}` },
  { label: course.title, url: `/admin/program/${program.slug}/${course.slug}` }
])

export const buildProgramBreadcrumbs = (program) => ([
  { label: "Admin", url: "/admin" },
  { label: "Program", url: "/admin/program" },
  { label: program.program_title, url: `/admin/program/${program.slug}` }
])
