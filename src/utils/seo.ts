/**
 * SEO utility functions for managing canonical URLs and meta tags
 */

const PREFERRED_DOMAIN = "https://www.isiololandmarkhotel.co.ke";

/**
 * Sets the canonical URL for a page
 * @param path - The page path (e.g., "/about", "/offers")
 */
export const setCanonicalUrl = (path: string) => {
  const canonicalUrl = `${PREFERRED_DOMAIN}${path}`;
  
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  
  if (canonicalLink) {
    canonicalLink.setAttribute("href", canonicalUrl);
  } else {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    canonicalLink.setAttribute("href", canonicalUrl);
    document.head.appendChild(canonicalLink);
  }
};

/**
 * Sets the page meta description
 * @param description - The meta description content
 */
export const setMetaDescription = (description: string) => {
  let metaDescription = document.querySelector('meta[name="description"]');
  
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  } else {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute("content", description);
    document.head.appendChild(metaDescription);
  }
};

/**
 * Sets the page keywords
 * @param keywords - Comma-separated keywords
 */
export const setMetaKeywords = (keywords: string) => {
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  
  if (metaKeywords) {
    metaKeywords.setAttribute("content", keywords);
  } else {
    metaKeywords = document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    metaKeywords.setAttribute("content", keywords);
    document.head.appendChild(metaKeywords);
  }
};

/**
 * Sets Open Graph URL
 * @param path - The page path
 */
export const setOgUrl = (path: string) => {
  const ogUrl = `${PREFERRED_DOMAIN}${path}`;
  
  let ogUrlMeta = document.querySelector('meta[property="og:url"]');
  
  if (ogUrlMeta) {
    ogUrlMeta.setAttribute("content", ogUrl);
  } else {
    ogUrlMeta = document.createElement("meta");
    ogUrlMeta.setAttribute("property", "og:url");
    ogUrlMeta.setAttribute("content", ogUrl);
    document.head.appendChild(ogUrlMeta);
  }
};

/**
 * Complete SEO setup for a page
 * @param options - SEO configuration options
 */
export const setupPageSEO = (options: {
  path: string;
  title: string;
  description: string;
  keywords?: string;
}) => {
  document.title = options.title;
  setCanonicalUrl(options.path);
  setMetaDescription(options.description);
  setOgUrl(options.path);
  
  if (options.keywords) {
    setMetaKeywords(options.keywords);
  }
};
