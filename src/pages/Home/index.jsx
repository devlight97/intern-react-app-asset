import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="homepage-body">
        <div className="homepage-body__container">
          <div className="homepage-body__content">
            <div className="center d-flex justify-content-center align-items-center">
              <div className="center-content d-flex flex-column justify-content-center">
                <div className="homepage--logo">
                  <div className="logo--container d-flex justify-content-center"><img src="../../assets/img/asset-logo.png" alt="" /></div>
                </div>
                <div className="homepage--description">
                  <div className="description--container d-flex flex-column align-items-center"><span className="description-line line-1">Thị trường bất động sản Việt Nam</span></div>
                </div>
                <div className="homepage--input-search">
                  <div className="input-search__container d-flex justify-content-center">
                    <SearchBar {...this.props} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
