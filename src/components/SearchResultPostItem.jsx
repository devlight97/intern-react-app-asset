import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultPostItem = (props) => {
  // console.log(props.location)
  const { location, post } = props;

  const getDayPostPublished = () => {
    const time = (Date.now() - Date.parse(post.publish_date)) / (1000 * 3600 * 24);
    return Math.ceil(time);
  }

  return (
    <div className="rp-search-result-item">
      <div className="search-result__item-container d-flex"><img className="sr-item__modal" src="../../assets/img/icon-modal.png" alt="" />
        <div className="sr-item__poster">
          <div className="poster--avatar"><a href="###"><img src="../../../assets/img/1pcs-hot-kawaii-small-teddy-bears-plush-toys.png" alt="" /></a></div>
        </div>
        <div className="sr-item__details">
          <div className="item-details__container">
            <div className="item-details__title">
              <div className="ids-title__content">
                <div className="ids-title--header d-flex"><a className="title--name" href="###">Duc Le</a>
                  <div className="title--rate d-flex align-items-center"><span>[Chung cư </span><span className="title_rate--highlight"> 3,5+ </span><img src="../../assets/img/star.png" alt="" />]</div>
                </div>
                <p className="mb-0 ids-title--category">đã đăng một bài viết trong <a className="ids-title--category" href="/result/news?page=1">Thông tin</a></p>
                <p className="mb-0 ids-title--date-posted">{getDayPostPublished()} ngày trước</p>
              </div>
            </div>
            <div className="item-details__post">
              <div className="ids-post--title"><Link to={`${location.pathname + location.search}&post_detail=${post._id}`}>{post.name}</Link></div>
              <div className="ids-post--content"><span>{post.description}</span></div>
            </div>
            <div className="item-details__actions">
              <div className="action-buttons-bottom">
                <a href="###" className="btn -marked">
                  <span className="fa fa-star icon" /> 40
                  </a>
                <a href="###" className="btn -comment">
                  <span className="fa fa-comment-o icon" /> 40
                  </a>
                <a href="###" className="btn -liked">
                  <span className="-ap  icon-like2 icon" /> 40
                  </a>
                <a href="###" className="btn -share">
                  <span className="-ap  icon-share4 icon" /> 40
                  </a>
                <a href="###" className="btn -mail">
                  <span className="-ap  icon-mail6 icon" /> 10
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultPostItem;
