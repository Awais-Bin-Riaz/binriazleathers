import React from "react";
import Helmet from "react-helmet";

const MetaData = ({ title, name, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name={name}
        content={description != null ? description.slice(0, 100) : description}
      />
    </Helmet>
  );
};

export default MetaData;
