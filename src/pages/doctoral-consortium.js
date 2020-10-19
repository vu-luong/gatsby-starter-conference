import React from "react"
import Layout from "../components/layout/layout"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"


class DoctoralConsortium extends React.Component {

  render() {

    const post = this.props.data.post
    console.log(post)

    return (
      <Layout location={this.props.location}>
        <Container>
          <h1 style={{ color: "#2c4f90" }}>Doctoral Consortium</h1>
          <hr />
          <div
            dangerouslySetInnerHTML={{
              __html: post.html || ""
            }}
          />
        </Container>

      </Layout>
    )
  }
}

export default DoctoralConsortium

export const query = graphql`
  query {
    #    post: markdownRemark(frontmatter: {type: {eq: "doctoral-consortium"}}) {
    post: markdownRemark(frontmatter: {type: {eq: "empty"}}) {
      id
      html
    }
  }
`