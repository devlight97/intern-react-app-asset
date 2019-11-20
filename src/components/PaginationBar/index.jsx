import React, { Component } from 'react';
import PaginationButton from './components/PaginationButton';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

const pageTotal = 5;

const hiddenStyle = {
  pointerEvents: 'none',
  color: 'gainsboro',
}


export default class PaginationBar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      pageSelected: 1, 
    };
  }

  setPageSelected(page) {
    this.setState({ pageSelected: page });
  }
  

  getPageSelected() {
    const { location } = this.props;
    const pageSelected = queryString.parse(location.search).page;
    if (!pageSelected) return 1;
    return parseInt(pageSelected);
  }
  
  renderPaginationBar() {
    const { location } = this.props;
    const { pageSelected } = this.state;
    const paginationBtnList = [];
    let pageCount = 1;
    while (pageTotal - pageCount >= 0) {
      paginationBtnList.push(pageCount);
      pageCount++;
    }
    
    return paginationBtnList.map(num =>
      <PaginationButton
      key={num}
      pageNum={num}
      location={location}
      isActive={num === pageSelected}
      setPageSelected={(page) => this.setPageSelected(page)}
      />)
    }

    componentDidMount() {
      this.setState({ pageSelected: this.getPageSelected() });
    }
    
    render() {
      const { location } = this.props;
      const { pageSelected } = this.state;
      return (
      <div className="rp-search-result__pagination">
        <div className="search-result__pagination-container container" style={{ paddingLeft: '20rem' }}>
          <div className="search-result__pagination-content d-flex align-items-center justify-content-center justify-content-sm-end">
            <div className="sr-pagination__items d-flex align-items-center">
              <Link
                className="sr-pagination--btn sr-pagination--previous"
                to={`${location.pathname}?page=${pageSelected - 1}`}
                style={(pageSelected <= 1 ? hiddenStyle : {})}
                onClick={() => this.setState({ pageSelected: pageSelected - 1 })}
              >Trước</Link>
              {
                this.renderPaginationBar()
              }
              <Link
                className="sr-pagination--btn sr-pagination--next"
                to={`${location.pathname}?page=${pageSelected + 1}`}
                style={(pageSelected >= pageTotal ? hiddenStyle : {})}
                onClick={() => this.setState({ pageSelected: pageSelected + 1 })}
              >Tiếp</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
