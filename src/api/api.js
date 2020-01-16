import GhostContentAPI from "@tryghost/content-api";
// const api = new GhostContentAPI({
//   url: "http://localhost:2368",
//   key: "b8296f22cdbd1aaf69d2ba9bcc",
//   version: "v3"
// });
const api = new GhostContentAPI({
  url: "https://thevolume.herokuapp.com",
  key: "fe1e8b673ceb37a6c5b100be5a",
  version: "v3"
});

// Browsing posts returns Promise([Post...]);
// The resolved array will have a meta property
// api.posts.browse({ limit: 2, include: 'tags,authors' });
// api.posts.browse();

// // Reading posts returns Promise(Post);
// api.posts.read({ id: 'abcd1234' });
// api.posts.read({ slug: 'something' }, { formats: ['html', 'plaintext'] });

// // Browsing authors returns Promise([Author...])
// // The resolved array will have a meta property
// api.authors.browse({ page: 2 });
// api.authors.browse();

// // Reading authors returns Promise(Author);
// api.authors.read({ id: 'abcd1234' });
// api.authors.read({ slug: 'something' }, { include: 'count.posts' }); // include can be array for any of these

// // Browsing tags returns Promise([Tag...])
// // The resolved array will have a meta property
// api.tags.browse({ order: 'slug ASC' });
// api.tags.browse();

// // Reading tags returns Promise(Tag);
// api.tags.read({ id: 'abcd1234' });
// api.tags.read({ slug: 'something' }, { include: 'count.posts' });

// // Browsing pages returns Promise([Page...])
// // The resolved array will have a meta property
// api.pages.browse({ limit: 2 });
// api.pages.browse();

// // Reading pages returns Promise(Page);
// api.pages.read({ id: 'abcd1234' });
// api.pages.read({ slug: 'something' }, { fields: ['title'] });

// // Browsing settings returns Promise(Settings...)
// // The resolved object has each setting as a key value pair
// api.settings.browse();
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
      limit: limit,
      include: "tags,authors"
    })
    .catch(err => {
      console.error(err);
    });
}
// export async function getPostsByTag(tag) {
//   return await api.tags
//     .browse({
//       filter:'tag:tale-city'
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }
export async function getPostBySlug(slug) {
  return await api.posts
    .read({
      slug,
      include: "tags,authors"
    })
    .catch(err => {
      console.error(err);
    });
}
export async function getPostById(id) {
  return await api.posts
    .read({
      id,
      include: "tags,authors"
    })
    .catch(err => {
      console.error(err);
    });
}
