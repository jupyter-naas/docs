import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';

function BlogPostItem({children, className}) {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {
    permalink,
    title,
    date,
    formattedDate,
    readingTime,
    frontMatter,
    tags,
    description,
    authors,
  } = metadata;

  const {
    image,
  } = frontMatter;

  const renderPostHeader = () => {
    return (
      <header>
        <div className={styles.blogPostItemContainer}>
          <div className={styles.blogPostItemContent}>
            <div className={styles.substackMeta}>
              {authors && authors.length > 0 && (
                <div className={styles.substackAuthor}>
                  {authors[0] && (
                    <div className={styles.substackAuthorName}>
                      {authors[0].imageURL && (
                        <img 
                          src={authors[0].imageURL} 
                          alt={authors[0].name} 
                          className={styles.substackAuthorAvatar} 
                        />
                      )}
                      <span>{authors[0].name}</span>
                    </div>
                  )}
                  {formattedDate && (
                    <div className={styles.substackDate}>
                      {formattedDate}
                      {readingTime && (
                        <> · {Math.ceil(readingTime)} min read</>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <h2 className={styles.substackTitle}>
              <Link to={permalink}>{title}</Link>
            </h2>
            
            {description && (
              <p className={styles.substackDescription}>{description}</p>
            )}
          </div>
          
          {image && (
            <div className={styles.substackImageContainer}>
              <Link to={permalink}>
                <img 
                  src={image} 
                  alt={title} 
                  className={styles.substackImage} 
                />
              </Link>
            </div>
          )}
        </div>
      </header>
    );
  };

  return (
    <article
      className={clsx(
        'margin-bottom--xl',
        styles.substackArticle,
        isBlogPostPage ? styles.substackFullPost : styles.substackListItem,
        className,
      )}>
      {renderPostHeader()}
      {isBlogPostPage ? (
        <div className={styles.substackPostContent}>{children}</div>
      ) : (
        <div className={styles.substackFooter}>
          <Link to={permalink} className={styles.substackReadMore}>
            Continue reading →
          </Link>
        </div>
      )}
    </article>
  );
}

export default BlogPostItem; 