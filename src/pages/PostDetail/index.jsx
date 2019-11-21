import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import newsService from '../../services/news.services';
import { loadPostData } from './actions';
// import {} from 'history';

const activeStyle = {
  display: 'block',
  overflow: 'scroll',
};

class PostDetail extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { isFetching, post, failReason } = nextProps;
    const { post_detail } = queryString.parse(nextProps.location.search);
    if (post_detail) {
      if (post._id !== post_detail) nextProps.loadPostData(post_detail);
      return {
        isActive: true,
        isFetching,
        failReason,
        post
      }
    }
    return {
      isActive: false,
      isFetching,
      failReason,
      post
    };
  }

  constructor(props) {
    super(props)

    this.state = {
      isActive: false,
      post: {},
      isFetching: false,
      failReason: null,
    };
  }

  getLinkClosedPostDetail() {
    const { location: { pathname, search } } = this.props;
    const searchObject = queryString.parse(search);
    searchObject.post_detail = undefined;
    return `${pathname}?${queryString.stringify(searchObject)}`;
  }

  getDayPostPublished() {
    const { post } = this.props;
    if (!post.publish_date) return null;
    const time = (Date.now() - Date.parse(post.publish_date)) / (1000 * 3600 * 24);
    return Math.ceil(time);
  }

  render() {
    const {
      isActive,
      isFetching,
      failReason,
      post,
    } = this.state;
    // console.log(this.props);
    if (isFetching) return (
      <img
        src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        alt=""
      />
    );
    else if (failReason) {
      alert(failReason);
      window.history.back();
      return null;
    }
    return (
      <div className="modal news-details__modal" style={isActive ? activeStyle : {}} id="newsDetailsModal">
        <div className="ndt-modal__container">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <Link className="close close-button" to={this.getLinkClosedPostDetail()}>
                <button
                  type="button"
                  className="close close-button"
                  data-dismiss="modal"
                >×</button>
              </Link>
              <div className="clearfix" />
            </div>
            {/* Modal body */}
            <div className="modal-body" style={isFetching ? { display: 'none' } : {}}>
              <div className="modal-body__container container">
                <div className="news-details__content-top">
                  <div className="news-details__header d-flex">
                    <div className="nd-header__logo">
                      <img className="nd-header--logo" src="../../assets/img/avatar-user.png" alt="" />
                    </div>
                    <div className="nd-header__title">
                      <div className="header-title__container">
                        <a href="###" className="header-title-name">Nam Anh</a>
                        <div className="header-title__content">[
                          <span className="small-text">Chuyên gia</span>
                          <span className="content-1">
                            3,5+
                            <img className="edit-star" src="../../assets/img/SVG/star.svg" alt="" />
                          </span>
                          ]</div>
                        <span className="header-title--time-post">{this.getDayPostPublished()} ngày trước</span>
                      </div>
                    </div>
                  </div>
                  <div className="nd-header__title-text">{post.name}</div>
                  {/* <img className="edit-picture" src={"../../assets/img/phong_detail.png"} alt="" /> */}
                  <div className="nd-content__texts">
                    {/* {post.content} */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    <div>
                      <div className="edit-tags__content d-flex flex-wrap">
                        <span style={{ marginTop: '10px', fontSize: '16px', fontWeight: 500, color: '#3b63a1' }}>Tags:</span>
                        <div className="nav-item edit-tags">
                          <a className="tag-item  text-2" href="###">
                            BatDongSan
                          </a>
                        </div>
                        <div className="nav-item edit-tags">
                          <a className="tag-item text-2 tag-item-3" href="###">
                            Laisuatnganhang
                          </a>
                        </div>
                        <div className="nav-item edit-tags">
                          <a className="tag-item  text-2" href="###">
                            BatDongSan
                          </a>
                        </div>
                        <div className="nav-item edit-tags">
                          <a className="tag-item  text-2" href="###">
                            BatDongSan
                          </a>
                        </div>
                        <div className="nav-item edit-tags">
                          <a className="tag-item  text-2" href="###">
                            BatDongSan
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="info-fix">
                  <div className="name">Nam Anh</div>
                  <div className="post-time">03 ngày trước</div>
                  <a className="btn btn-follow" href="###">Theo giõi</a>
                  <div className="actions">
                    <div>
                      <a href="###" className="btn">
                        <span className="-ap  icon-like2 icon" /> 40
                      </a>
                    </div>
                    <div>
                      <a href="###" className="btn">
                        <span className="-ap  icon-share4 icon" /> 40
                      </a>
                    </div>
                    <div>
                      <a href="###" className="btn">
                        <span className="-ap  icon-bookmark_outline icon" /> 40
                      </a>
                    </div>
                  </div>
                </div>
                {/*--------- Content-bottom -------*/}
                <div className="divider-gray" />
                <div className="news-details__content-bottom">
                  <div className="box-comments" style={{ paddingTop: '20px' }}>
                    <h2 className="title-main">Bình luận</h2>
                    <div className="comments">
                      <div className="item">
                        <div className="avatar" style={{ backgroundImage: 'url(https://www.bitgab.com/uploads/profile/files/default.png)' }}>
                        </div>
                        <div className="username">Lâm Thy Văn Tần <span className="datetime">12:09 - 18/10/2019</span></div>
                        <div className="comment-content">Đầu tư an toàn, bảo toàn dòng vốn. Cam kết lợi nhuận 10%/năm. Hỗ trợ lãi suất
                          0%/tháng. Bảo đảm chất lượng với đơn vị vận hành quốc tế. Giá trị bất động sản tăng theo hàng năm. Cho vay
                          lên tới 65% Cơ hội du lịch miễn phí. Vốn đầu tư từ 600 triệu. Tặng 15 đêm nghỉ dưỡng.</div>
                        <div className="action-buttons-bottom">
                          <a href="###" className="btn">
                            Trả lời
                          </a>
                          <a href="###" className="btn -comment">
                            <span className="fa fa-comment-o icon" /> 40
                          </a>
                          <a href="###" className="btn">
                            <span className="-ap  icon-like2 icon" /> 40
                          </a>
                          <a href="###" className="btn -share">
                            <span className="-ap  icon-share4 icon" /> 40
                          </a>
                        </div>
                      </div>
                      <div className="item">
                        <div className="avatar" style={{ backgroundImage: 'url(https://www.bitgab.com/uploads/profile/files/default.png)' }}>
                        </div>
                        <div className="username">Lâm Thy Văn Tần <span className="datetime">12:09 - 18/10/2019</span></div>
                        <div className="comment-content">Đầu tư an toàn, bảo toàn dòng vốn. Cam kết lợi nhuận 10%/năm. Hỗ trợ lãi suất
                          0%/tháng. Bảo đảm chất lượng với đơn vị vận hành quốc tế. Giá trị bất động sản tăng theo hàng năm. Cho vay
                          lên tới 65% Cơ hội du lịch miễn phí. Vốn đầu tư từ 600 triệu. Tặng 15 đêm nghỉ dưỡng.</div>
                        <div className="action-buttons-bottom">
                          <a href="###" className="btn">
                            Trả lời
                          </a>
                          <a href="###" className="btn -comment">
                            <span className="fa fa-comment-o icon" /> 40
                          </a>
                          <a href="###" className="btn">
                            <span className="-ap  icon-like2 icon" /> 40
                          </a>
                          <a href="###" className="btn -share">
                            <span className="-ap  icon-share4 icon" /> 40
                          </a>
                        </div>
                        <div className="comments">
                          <div className="item">
                            <div className="avatar" style={{ backgroundImage: 'url(https://www.bitgab.com/uploads/profile/files/default.png)' }} />
                            <div className="username">Lâm Thy Văn Tần <span className="datetime">12:09 - 18/10/2019</span></div>
                            <div className="comment-content">Đầu tư an toàn, bảo toàn dòng vốn. Cam kết lợi nhuận 10%/năm. Hỗ trợ lãi suất
                              0%/tháng. Bảo đảm chất lượng với đơn vị vận hành quốc tế. Giá trị bất động sản tăng theo hàng năm. Cho
                              vay lên tới 65% Cơ hội du lịch miễn phí. Vốn đầu tư từ 600 triệu. Tặng 15 đêm nghỉ dưỡng.</div>
                            <div className="action-buttons-bottom">
                              <a href="###" className="btn">
                                Trả lời
                              </a>
                              <a href="###" className="btn -comment">
                                <span className="fa fa-comment-o icon" /> 40
                              </a>
                              <a href="###" className="btn">
                                <span className="-ap  icon-like2 icon" /> 40
                              </a>
                              <a href="###" className="btn -share">
                                <span className="-ap  icon-share4 icon" /> 40
                              </a>
                            </div>
                          </div>
                          <div className="item">
                            <div className="avatar" style={{ backgroundImage: 'url(https://www.bitgab.com/uploads/profile/files/default.png)' }} />
                            <div className="username">Lâm Thy Văn Tần <span className="datetime">12:09 - 18/10/2019</span></div>
                            <div className="comment-content">Đầu tư an toàn, bảo toàn dòng vốn. Cam kết lợi nhuận 10%/năm. Hỗ trợ lãi suất
                              0%/tháng. Bảo đảm chất lượng với đơn vị vận hành quốc tế. Giá trị bất động sản tăng theo hàng năm. Cho
                              vay lên tới 65% Cơ hội du lịch miễn phí. Vốn đầu tư từ 600 triệu. Tặng 15 đêm nghỉ dưỡng.</div>
                            <div className="action-buttons-bottom">
                              <a href="###" className="btn">
                                Trả lời
                              </a>
                              <a href="###" className="btn -comment">
                                <span className="fa fa-comment-o icon" /> 40
                              </a>
                              <a href="###" className="btn">
                                <span className="-ap  icon-like2 icon" /> 40
                              </a>
                              <a href="###" className="btn -share">
                                <span className="-ap  icon-share4 icon" /> 40
                              </a>
                            </div>
                          </div>
                          <div className="item -input">
                            <div className="avatar" style={{ backgroundImage: 'url(https://www.bitgab.com/uploads/profile/files/default.png)' }} />
                            <input className="form-control comment-input" placeholder="Viết bình luận" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider-gray">
                </div>
                <div className="bottom-related-news">
                  <div className="title-main">Các bài viết liên quan</div>
                  <div className="list-news">
                    <div className="item">
                      <div className="wrap">
                        <a href="###" className="post-image" style={{ backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)' }}>
                          <img src="../../assets/img/204x102.jpg" alt="" />
                        </a>
                        <h3 className="post-title">
                          <a href="###">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                        </h3>
                        <div className="post-time">
                          12:09 - 18/10/2019
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrap">
                        <a href="###" className="post-image" style={{ backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)' }}>
                          <img src="../../assets/img/204x102.jpg" alt="" />
                        </a>
                        <h3 className="post-title">
                          <a href="###">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                        </h3>
                        <div className="post-time">
                          12:09 - 18/10/2019
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrap">
                        <a href="###" className="post-image" style={{ backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)' }}>
                          <img src="../../assets/img/204x102.jpg" alt="" />
                        </a>
                        <h3 className="post-title">
                          <a href="###">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                        </h3>
                        <div className="post-time">
                          12:09 - 18/10/2019
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrap">
                        <a href="###" className="post-image" style={{ backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)' }}>
                          <img src="../../assets/img/204x102.jpg" alt="" />
                        </a>
                        <h3 className="post-title">
                          <a href="###">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                        </h3>
                        <div className="post-time">
                          12:09 - 18/10/2019
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrap">
                        <a href="###" className="post-image" style={{ backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)' }}>
                          <img src="../../assets/img/204x102.jpg" alt="" />
                        </a>
                        <h3 className="post-title">
                          <a href="###">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                        </h3>
                        <div className="post-time">
                          12:09 - 18/10/2019
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrap">
                        <a href="###" className="post-image" style={{ backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)' }}>
                          <img src="../../assets/img/204x102.jpg" alt="" />
                        </a>
                        <h3 className="post-title">
                          <a href="###">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                        </h3>
                        <div className="post-time">
                          12:09 - 18/10/2019
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrap">
                        <a href="###" className="post-image" style={{ backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)' }}>
                          <img src="../../assets/img/204x102.jpg" alt="" />
                        </a>
                        <h3 className="post-title">
                          <a href="###">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                        </h3>
                        <div className="post-time">
                          12:09 - 18/10/2019
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrap">
                        <a href="###" className="post-image" style={{ backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)' }}>
                          <img src="../../assets/img/204x102.jpg" alt="" />
                        </a>
                        <h3 className="post-title">
                          <a href="###">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                        </h3>
                        <div className="post-time">
                          12:09 - 18/10/2019
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.postDetail.post,
    isFetching: state.postDetail.isFetching,
    failReason: state.postDetail.failReason,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPostData: postId => dispatch(loadPostData(postId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
