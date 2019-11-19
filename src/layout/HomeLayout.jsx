import React, { Component } from 'react';
import Footer from '../components/Footer';
import HomePageHeader from '../components/HomePageHeader';
import HomePageHeaderMobile from '../components/HomePageHeaderMobile';

class HomeLayout extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { children } = this.props;
    return (
      <div className="section-homepage">
        <div className="container-fluid homepage__container">
          <HomePageHeader />
          <HomePageHeaderMobile />
          {children}
          <Footer />
        </div>
      </div>
    )
  }
}

export default HomeLayout
