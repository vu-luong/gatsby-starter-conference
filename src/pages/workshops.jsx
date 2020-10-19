import React from 'react';
import { Container } from 'react-bootstrap';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';

function Workshops(props) {
  const {
    data: { post },
    location,
  } = props;

  return (
    <Layout location={location}>
      <Container>
        <h1 style={{ color: '#2c4f90' }}>Workshops</h1>
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

export default Workshops;

export const query = graphql`
  query {
    #    post: markdownRemark(frontmatter: {type: {eq: "workshops"}}) {
    post: markdownRemark(frontmatter: { type: { eq: "empty" } }) {
      id
      html
    }
  }
`;
