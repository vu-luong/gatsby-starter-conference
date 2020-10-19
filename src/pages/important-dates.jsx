import React from 'react';
import { Container } from 'react-bootstrap';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';

function ImportantDates(props) {
  const {
    data: { post },
    location,
  } = props;

  return (
    <Layout location={location}>
      <Container>
        <h1 style={{ color: '#2c4f90' }}>Important Dates</h1>

        <div
          dangerouslySetInnerHTML={{
            __html: post.html || '',
          }}
        />
      </Container>
    </Layout>
  );
}

export default ImportantDates;

export const query = graphql`
  query {
    #    post: markdownRemark(frontmatter: {type: {eq: "important-dates"}}) {
    post: markdownRemark(frontmatter: { type: { eq: "empty" } }) {
      id
      html
    }
  }
`;
