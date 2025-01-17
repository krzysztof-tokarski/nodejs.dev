import React from 'react';
import { graphql } from 'gatsby';
import { Page } from '../types';
import Layout from '../components/Layout';
import Article from '../components/Article';
import '../styles/article-reader.scss';
import SideNavBar, { SideNavBarKeys } from '../components/SideNavBar';

const WorkingGroupsPage = ({ data }: Page): JSX.Element => {
  const { title, description } = data.page.frontmatter;
  const { body } = data.page;
  const { authors } = data.page.fields;
  return (
    <Layout title={title} description={description}>
      <main className="grid-container">
        <SideNavBar pageKey={SideNavBarKeys.workingGroups} />
        <Article
          title={title}
          body={body}
          authors={authors}
          editPath="content/about/working-groups.md"
        />
      </main>
    </Layout>
  );
};

export default WorkingGroupsPage;

export const query = graphql`
  query {
    page: mdx(fields: { slug: { eq: "working-groups" } }) {
      body
      tableOfContents
      frontmatter {
        title
        description
      }
      fields {
        authors
      }
    }
  }
`;
