import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"

class IndexPage extends React.Component {
  render() {
    const { posts } = this.props.data

    return (
      <Layout location={this.props.location}>
        <div className="article">
          <div className="container">
            <h1 style={{ color: "#2c4f90" }}>CONF2021</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: posts.edges[0].node.html || ""
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}


export default IndexPage

export const query = graphql`
  query {
    posts: allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {frontmatter: {type: {eq: "post"}}}
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`