import GhostContentAPI from "@tryghost/content-api";
const api = new GhostContentAPI({
  url: "http://localhost:2368",
  key: "b8296f22cdbd1aaf69d2ba9bcc",
  version: "v3"
});
export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    include: "tags,authors"
    })
    .catch(err => {
      console.error(err);
    });
}
export async function getPostsByLimit(limit) {
  return await api.posts
    .browse({
      limit: 5,
      include: "tags,authors"
    })
    .catch(err => {
      console.error(err);
    });
}
export async function getPostBySlug(slug) {
  return await api.posts
    .read({
      slug
    })
    .catch(err => {
      console.error(err);
    });
}
export async function getPostById(id) {
  return await api.posts
    .read({
      id
    })
    .catch(err => {
      console.error(err);
    });
}