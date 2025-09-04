
export const getSlugFromPathname = (pathname) => {
  const paths = pathname.split('/').filter(Boolean)
  return paths[paths.length - 1]
}