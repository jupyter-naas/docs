import React from 'react';
import clsx from 'clsx';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {BlogPostProvider, useBlogPost} from '@docusaurus/theme-common/internal';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import BlogPostPageMetadata from './Metadata';
import TOC from '@theme/TOC';
import SubscribeForm from '../../components/BlogComponents/SubscribeForm';
import styles from '../../components/BlogComponents/styles.module.css';

function BlogPostPageContent({children, className}) {
  const {metadata, toc} = useBlogPost();
  const {nextItem, prevItem, frontMatter} = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
  } = frontMatter;

  return (
    <BlogLayout
      wrapperClassName={clsx(ThemeClassNames.wrapper.blogPages, className)}
      pageClassName={ThemeClassNames.page.blogPostPage}
      sidebar={!hideTableOfContents && toc.length > 0 ? <TOC toc={toc} /> : undefined}
      toc={!hideTableOfContents && toc.length > 0 ? <TOC toc={toc} /> : undefined}>
      <BlogPostItem>{children}</BlogPostItem>

      {(nextItem || prevItem) && (
        <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
      )}
      
      <div className={styles.substackPostFooter}>
        <div className={styles.substackPostSubscribe}>
          <h3>Subscribe to Naas Journal</h3>
          <p>Get the latest posts delivered right to your inbox</p>
          <SubscribeForm />
        </div>
      </div>
    </BlogLayout>
  );
}

export default function BlogPostPage(props) {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage,
        )}>
        <BlogPostPageMetadata />
        <BlogPostPageContent className="blog-post-page">
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
} 