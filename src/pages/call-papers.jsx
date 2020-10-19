import React from 'react';
import { Container } from 'react-bootstrap';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';

function CallPapers(props) {
  const {
    data: { post },
    location,
  } = props;

  return (
    <Layout location={location}>
      <Container>
        <h1 className="page-title">Call for Papers</h1>
        <hr />
        <div
          dangerouslySetInnerHTML={{
            __html: post.html || '',
          }}
        />
      </Container>
    </Layout>
  );
}

export default CallPapers;

export const query = graphql`
  query {
    #    post: markdownRemark(frontmatter: {type: {eq: "call-papers"}}) {
    post: markdownRemark(frontmatter: { type: { eq: "empty" } }) {
      id
      html
    }
  }
`;
