import React from 'react';

const SearchResultItem = () => {
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
                <p className="mb-0 ids-title--category">đã đăng một bài viết trong <a className="ids-title--category" href="/ket-qua/thong-tin">Thông tin</a></p>
                <p className="mb-0 ids-title--date-posted">10 ngày trước</p>
              </div>
            </div>
            <div className="item-details__post">
              <div className="ids-post--title"><a href="###">Lý Chính Thắng khu đô thị tương lai đang trong giai đoạn hoàn thiện</a></div>
              <div className="ids-post--content"><span>
                Ngày 10-12/05: Có 123 thông báo kế hoạch lựa chọn nhà thầu chậm .... 1527/QĐ-UBND ngày
                14/02/2019; KHLCNT của Ban Quản lý dự án đầu tư xây .... KHLCNT của Sở Tài chính tỉnh Hưng
                …. cho dự án “Mua sắm thiết bị định .... Hạng mục: Xóm Ao Vàng, Cổ Rùa, Gò Chè, Phúc Lộc,
                    Quyết Thắng, Tân ...</span></div>
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

export default SearchResultItem;
