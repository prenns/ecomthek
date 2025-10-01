const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "";

type Category = {
    name: string;
    description: string;
};

type CategoryWithSlug = Category & {
    slug: string;
};

// Post types based on GraphQL schema
export type PostCategory = {
    id: string;
    name: string;
    slug: string;
};

export type PostAuthor = {
    node: {
        firstName: string;
        lastName: string;
        avatar: {
            url: string;
        };
    };
};

export type PostFeaturedImage = {
    node: {
        sourceUrl: string;
        altText: string;
    };
};

export type BlogPost = {
    id: string;
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    content?: string;
    categories: {
        nodes: PostCategory[];
    };
    author: PostAuthor;
    featuredImage: PostFeaturedImage;
};

export async function getAllCategories() {
  const res = await fetch(cmsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          query: `
           query {
            categories {
              nodes {
                id
                name
                slug
                description
                 seo {
                  title
                  metaDesc
                }
              }
            }
          }

        `
      }),
      next: { revalidate: 60 },
  });

  const json = await res.json();
  const categories = json?.data?.categories?.nodes || [];
  return categories;
}

export async function getCategoryBySlug(slug: string) {
  const res = await fetch(cmsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          query: `
      query GetCategoryBySlug($slug: ID!) {
        category(id: $slug, idType: SLUG) {
          id
          name
          slug
          description
          seo {
              title
              metaDesc
           }
        }
      }
    `,
          variables: { slug },
      }),
      next: { revalidate: 60 },
  });

  const json = await res.json();
  if (json.errors) {
      console.error(json.errors);
      throw new Error('Fehler beim Abrufen der Kategorie');
  }
  return json.data.category;
}


export async function getAllPosts(): Promise<BlogPost[]> {
    const res = await fetch(cmsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query {
              posts {
                nodes {
                  id
                  title
                  slug
                  date
                  excerpt
                  categories {
                    nodes {
                      id
                      name
                      slug
                    }
                  }
                  author {
                    node {
                      firstName
                      lastName
                      avatar {
                        url
                      }
                    }
                  }
                  featuredImage {
                    node {
                        sourceUrl
                        altText
                    }
                  }
                }
              }
            }
          `
        }),
        next: { revalidate: 60 },
    });

    const json = await res.json();
    const posts = json?.data?.posts?.nodes || [];
    return posts;
}

export async function getLatestPosts(limit = 3) {
    const res = await fetch(cmsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
          query GetLatestPosts($limit: Int!) {
            posts(first: $limit, where: { orderby: { field: DATE, order: DESC } }) {
              nodes {
                id
                title
                slug
                date
                excerpt
                categories {
                    nodes {
                      id
                      name
                    }
                  }
                author {
                  node {
                    firstName
                    lastName
                    avatar {
                      url
                    }
                  }
                }
                featuredImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
              }
            }
          }
        `,
            variables: {
                limit,
            },
        }),
        next: { revalidate: 60 },
    });

    const json = await res.json();
    const posts = json?.data?.posts?.nodes || [];
    return posts;
}


export async function getPostsByCategory(category: CategoryWithSlug) {
    const res = await fetch(cmsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query GetPostsByCategory($slug: String!) {
                  posts(where: { categoryName: $slug }, first: 10) {
                    nodes {
                      id
                      title
                      slug
                      date
                      excerpt
                      categories {
                        nodes {
                            id
                            name
                        }
                      }
                      author {
                        node {
                            firstName
                            lastName
                            avatar {
                                url
                            }
                        }
                    }
                      featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                    }
                  }
                }
            `,
            variables: { slug: category.slug },
        }),
        next: { revalidate: 60 },
    });

    const json = await res.json();

    if (json.errors) {
        console.error(json.errors);
        throw new Error('Fehler beim Abrufen der Posts');
    }

    return json.data.posts.nodes;
}

export async function getPostBySlug(slug: string) {

    const res = await fetch(cmsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
        query GetPostBySlug($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            id
            title
            slug
            content
            date
            excerpt
            categories {
                    nodes {
                      id
                      name
                      slug
                    }
                  }
            author {
                node {
                    firstName
                    lastName
                    description
                    avatar {
                        url
                    }
                }
            }
            featuredImage {
                 node {
                     sourceUrl
                     altText
                }
            }
          }
        }
      `,
            variables: { slug },
        }),
        next: { revalidate: 60 },
    });

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error('Fehler beim Abrufen des Blogposts');
    }
    return json.data.post;
}

export async function getPostSEOBySlug(slug: string) {

    const res = await fetch(cmsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
        query GetPostBySlug($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            id
            seo {
                title
                metaDesc
            }
          }
        }
      `,
            variables: { slug },
        }),
        next: { revalidate: 60 },
    });

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error('Fehler beim Abrufen des Blogposts');
    }
    return json.data.post;
}