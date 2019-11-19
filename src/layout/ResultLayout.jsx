import React from 'react';
import NewsPageHeader from '../components/NewsPageHeader';
import Footer from '../components/Footer';

// CSS

const ResultLayout = (props) => {
  return (
    <section className="section__result-pages">
      <div className="container-fluid result-pages__container">
        <NewsPageHeader />
        {props.children}
        <Footer />
      </div>
    </section>
  );
};

export default ResultLayout;
