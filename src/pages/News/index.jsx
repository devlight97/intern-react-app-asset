import React, { Component } from 'react';
import SearchResultPostItem from '../../components/SearchResultPostItem';
// import newsServices from '../../services/post.services';
import PaginationBar from '../../components/PaginationBar';
import queryString from 'query-string';

import { connect } from 'react-redux';
import {
  loadPostListData,
  countPostTotal,
} from '../../actions/news.action';

import PostDetail from '../PostDetail';

// const testData = [1,2,3,4,5];
const hiddenStyle = {
  overflow: 'hidden',
};

class News extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const search = queryString.parse(nextProps.location.search);
    let { page, keyword } = search;
    keyword = keyword || '';
    if (page !== nextProps.page || (keyword !== nextProps.keyword)) {
      // console.log('page: ', page)
      // console.log('nextProps.page: ', nextProps.page)
      // console.log(parseInt(page) !== nextProps.page)
      // console.log('keyword: ', keyword)
      // console.log('nextProps.keyword: ', nextProps.keyword)
      // console.log((keyword !== nextProps.keyword))
      nextProps.countPostTotal(keyword);
      nextProps.loadPostListData(page, keyword);
    }
    if (search.post_detail) {
      return {
        isHidden: true,
      }
    }
    return {
      isHidden: false,
    };
  }

  constructor(props) {
    super(props)

    this.state = {
      isHidden: false,
      postTotal: 0,
      isFetching: false,
      page: 1,
      keyword: '',
    }
  }

  async componentDidMount() {
    // const { location } = this.props;
    // this.setState({ isFetching: true });
    // try {
    //   const { data: postTotal } = await newsServices.getCountAllPost();
    //   const { page } = queryString.parse(location.search);
    //   const { data } = await newsServices.getAllPost(page || 1, '');
    //   this.setState({
    //     postTotal,
    //     postList: data,
    //     isFetching: false,
    //   });
    // } catch (error) {
    //   alert('Error when fetching post data');
    //   this.setState({ isFetching: false });
    // }
  }

  render() {
    const {
      isHidden,
      isFetching,
    } = this.state;
    const {
      location,
      posts,
      postTotal,
    } = this.props;

    if (isHidden) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'scroll';

    return (
      <div className="result-pages__body" style={isHidden ? hiddenStyle : {}}>
        <div className="result-pages__body-container container">
          <div className="result-pages__search-result">
            <div className="rp-search-result__header">
              <div className="text-result">Khoảng <strong>{postTotal}</strong> kết quả</div>
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

            <div className="rp-search-result__items" style={{ display: 'flex', flexDirection: 'column' }}>
              <PostDetail
                location={location}
              />
              {
                isFetching ? <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt=""/> : null
              }
              {
                posts
                .map(post =>
                  <SearchResultPostItem
                    key={post._id}
                    post={post}
                    location={location}
                  />)
              }
            </div>
            <PaginationBar location={location} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.news.isFetching,
    posts: state.news.posts,
    page: state.news.page,
    keyword: state.news.keyword,
    postTotal: state.news.postTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPostListData: (page, keyword) => dispatch(loadPostListData(page, keyword)),
    countPostTotal: (keyword) => dispatch(countPostTotal(keyword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
