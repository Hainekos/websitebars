
const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const product = path.resolve(`src/templates/product.js`);
  const result = await graphql(`
    query {
      allStrapiProduct {
        edges {
          node {
            category{
              slug
            }
            id
            slug
          }
        }
      }
    }
  `);

  result.data.allStrapiProduct.edges.forEach((edge) => {

    createPage({
      path: `/product/${edge.node.slug}`,
      component: product,
      context: {        
        slug: edge.node.slug,
        parent: edge.node.category.slug,
      },
    });
  });
};




