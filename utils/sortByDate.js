export default function sortByDate(a, b) {
  return (
    new Date(b.frontmatter.publishedAt) - new Date(a.frontmatter.publishedAt)
  );
}
