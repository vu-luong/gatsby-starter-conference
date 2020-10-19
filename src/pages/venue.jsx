import React from 'react';
import { Container } from 'react-bootstrap';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';

function Venue(props) {
  const {
    data: { post },
    location,
  } = props;

  return (
    <Layout location={location}>
      <Container>
        <h1 style={{ color: '#2c4f90' }}>Venue</h1>
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

export default Venue;

export const query = graphql`
  query {
    post: markdownRemark(frontmatter: { type: { eq: "venue" } }) {
      #    post: markdownRemark(frontmatter: {type: {eq: "empty"}}) {
      id
      html
    }
  }
`;
