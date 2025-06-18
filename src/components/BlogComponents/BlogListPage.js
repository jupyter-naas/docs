import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import SubscribeForm from './SubscribeForm';
import styles from './styles.module.css';

function BlogListPageMetadata(props) {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props) {
  const {metadata, items} = props;
  
  // Check if we have featured posts (those with frontMatter.featured = true)
  const featuredItems = items.filter(
    (item) => item.content.frontMatter.featured
  );
  
  // Regular posts (not featured)
  const regularItems = items.filter(
    (item) => !item.content.frontMatter.featured
  );

  return (
    <BlogLayout>
      <div className={styles.substackContainer}>
        <div className={styles.substackHeader}>
          <h1 className={styles.substackBlogTitle}>Naas Journal</h1>
          <p className={styles.substackBlogDescription}>
            Thoughts on ontology, AI, and the pursuit of intelligent systems.
          </p>
          
          <SubscribeForm />
        </div>
        
        {featuredItems.length > 0 && (
          <div className={styles.substackFeatured}>
            <h2 className={styles.substackSectionTitle}>Featured</h2>
            <div className={styles.substackFeaturedGrid}>
              <BlogPostItems items={featuredItems} />
            </div>
          </div>
        )}
        
        <div className={styles.substackLatest}>
          <h2 className={styles.substackSectionTitle}>Latest</h2>
          <BlogPostItems items={regularItems} />
        </div>
        
        <BlogListPaginator metadata={metadata} />
      </div>
    </BlogLayout>
  );
}

export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
} 