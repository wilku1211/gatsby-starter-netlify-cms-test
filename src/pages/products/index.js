import React from "react";
import Helmet from "react-helmet";
import Layout from "../../components/Layout";

const TagsPage = props => (
  <Layout>
    <section className="section">
      <Helmet title={`Tags `} />
      <div className="container content">
        <div className="columns">
          {console.log(props)}
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: "6rem" }}
          >
            <h1 className="title is-size-2 is-bold-light">Tagsssss</h1>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TagsPage;
