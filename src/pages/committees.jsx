import React from 'react';
import { Container } from 'react-bootstrap';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';

function CallPaper(props) {
  const {
    data: { post },
    location,
  } = props;

  return (
    <Layout location={location}>
      <Container>
        <h1 className="page-title">Committees</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: post.html || '',
          }}
        />
      </Container>
    </Layout>
  );
}

export default CallPaper;

export const query = graphql`
  query {
    post: markdownRemark(frontmatter: { type: { eq: "committees" } }) {
      id
      html
    }
  }
`;
