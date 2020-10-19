import React from 'react';
import { graphql } from 'gatsby';
import { Badge } from 'react-bootstrap';
import Layout from '../components/layout/layout';

function Keynote(props) {
  const {
    data: { posts },
    location,
  } = props;

  return (
    <div>
      <Layout location={location}>
        <div className="article">
          <div className="container">
            <h1 className="page-title">Keynotes</h1>
            <hr />
            {posts.edges.map((edge) => {
              const frontmatter = edge?.node?.frontmatter;
              const authors = frontmatter?.authors.split(',');

              return (
                <div key={edge.node.id}>
                  <h2>{frontmatter.title}</h2>
                  <time className="keynote-time" dateTime={frontmatter?.date}>
                    {frontmatter?.date}
                  </time>
                  {authors.map((author) => (
                    <Badge className="keynote-badge" variant="secondary">
                      {author}
                    </Badge>
                  ))}
                  <div
                    className="keynote-content"
                    dangerouslySetInnerHTML={{
                      __html: edge.node.html || '',
                    }}
                  />
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Keynote;

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { type: { eq: "keynote" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            authors
          }
        }
      }
    }
  }
`;
