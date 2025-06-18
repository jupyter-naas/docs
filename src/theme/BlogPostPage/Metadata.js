import React from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import {useBlogPost} from '@docusaurus/theme-common/internal';

export default function BlogPostPageMetadata() {
  const {metadata} = useBlogPost();
  const {title, description, date, tags, authors, frontMatter} = metadata;
  const {keywords} = frontMatter;
  return (
    <PageMetadata
      title={title}
      description={description}
      keywords={keywords}
      image={frontMatter.image}>
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content={date} />
      {/* If there is an author */}
      {authors.some((author) => author.url) && (
        <meta
          property="article:author"
          content={authors
            .filter((author) => author.url)
            .map((author) => author.url)
            .join(',')}
        />
      )}
      {tags.length > 0 && (
        <meta
          property="article:tag"
          content={tags.map((tag) => tag.label).join(',')}
        />
      )}
    </PageMetadata>
  );
} 