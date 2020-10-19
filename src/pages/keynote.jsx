import React from 'react';
import { graphql } from 'gatsby';
import { Badge } from 'react-bootstrap';
import uuid from 'react-uuid';
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
            <h1 style={{ color: '#2c4f90' }}>Keynotes</h1>
            <hr />
            {posts.edges.map((edge) => {
              const frontmatter = edge?.node?.frontmatter;
              const authors = frontmatter?.authors.split(',');

              return (
                <div
                  key={edge.node.id}
                  // className="content text-justify"
                >
                  <h2>{frontmatter.title}</h2>
                  <time
                    style={{ marginRight: 10 }}
                    dateTime={frontmatter?.date}
                  >
                    {frontmatter?.date}
                  </time>
                  {authors.map((author) => (
                    <Badge
                      style={{ marginRight: 4 }}
                      variant="secondary"
                      key={uuid()}
                    >
                      {author}
                    </Badge>
                  ))}
                  <div style={{ marginTop: 8 }} />
                  <div
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
      sort: { fields: [frontmatter___date], order: DESC }
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
