import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import PropTypes from 'prop-types';

const PAGES = {
  home: HomePage,
  about: AboutPage,
  // services: ServicesPage,
  contact: ContactPage,
};

const Pages = ({page}) => {
  const Handler = PAGES[page] || ContactPage;
  console.log(page);

  if (!Handler) {
    console.error(`Invalid page name: ${page}`);
    // Optionally, you can provide a default page component or render nothing
    // return <NotFoundPage />;
    return null; // Render nothing if page is invalid
  }

  return <Handler  />;
};

// PropTypes validation
Pages.propTypes = {
  page: PropTypes.oneOf(["home", "about", "contact"]).isRequired,
};

export default Pages;
