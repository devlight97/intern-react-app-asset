import React, { Component } from 'react';
import SearchResultItem from '../../components/SearchResultItem';

const testData = [1,2,3,4,5];

class News extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="result-pages__body">
          <div className="result-pages__body-container container">
            <div className="result-pages__search-result">
              <div className="rp-search-result__header">
                <div className="text-result">Khoảng <strong>1.782</strong> kết quả</div>
                <div className="search-result__header-map">
                  <div className="header-map__container">
                    <div className="header-map__main">
                      <div className="header-map--map">
                        <div className="header-map__map-group"><img src="../../assets/img/result-map.jpg" alt="" /></div>
                      </div>
                    </div>
                    <div className="header-map__details">
                      <div className="map-details--name"><span>Lý Chính Thắng</span></div>
                      <div className="map-details--address"><span>Quận 3, Tp Hồ Chí Minh</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rp-search-result__items">
                {testData.map(number => <SearchResultItem key={number} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
