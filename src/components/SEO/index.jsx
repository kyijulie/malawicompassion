import React from "react";
import Helmet from "react-helmet";
// import defaultImage from "../images/logo.png"

const SEO = ({
  lang,
  meta,
  title,
  // url,
  // keywords,
  //  seoDescription,
  //  image
}) => {
  // const img = defaultImage
  // const siteUrl = url

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        // {
        //   name: `description`,
        //   content: seoDescription,
        // },
        {
          property: `og:title`,
          content: title,
        },
        // {
        //   property: `og:url`,
        //   content: siteUrl,
        // },
        // {
        //   property: `og:description`,
        //   content: seoDescription,
        // },
        {
          property: `og:type`,
          content: `website`,
        },
        // {
        //   property: `og:image`,
        //   content: `${url}${img}`,
        // },
        // {
        //   name: `keywords`,
        //   content: keywords,
        // },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
export default SEO;
