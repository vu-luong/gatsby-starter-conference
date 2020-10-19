import React from 'react';
import Layout from '../components/layout/layout';

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <div className="article">
      <div className="container">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
