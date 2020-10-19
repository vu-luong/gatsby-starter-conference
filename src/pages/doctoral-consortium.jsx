import React from 'react';
import { Container } from 'react-bootstrap';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';

function DoctoralConsortium(props) {
  const {
    data: { post },
    location,
  } = props;

  return (
    <Layout location={location}>
      <Container>
        <h1 className="page-title">Doctoral Consortium</h1>
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

export default DoctoralConsortium;

export const query = graphql`
  query {
    #    post: markdownRemark(frontmatter: {type: {eq: "doctoral-consortium"}}) {
    post: markdownRemark(frontmatter: { type: { eq: "empty" } }) {
      id
      html
    }
  }
`;
