import React, { Component } from 'react';
import AutoCompleteResultItem from './components/AutoCompleteResultItem';
import homeServices from '../../services/home.services';

// const testData = [1, 2, 3, 4, 5];


class AutoCompleteResultList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTxt: '',
      resultList: [],
    }
  }
  
  async onChangeSearchTxt(evt) {
    const { name, value } = evt.target;
    const data = await homeServices.getAutoCompleteSearchData();
    this.setState({
      [name]: value,
      resultList: data,
    });
  }

  clickEscBtnHandler(evt) {
    // console.log(evt.which);
  }

  render() {
    const { searchTxt, resultList } = this.state;
    return (
      <div className="homepage--input-search">
        <div className="input-search__container d-flex justify-content-center">
          <div className={`w-100 input-search__content ${searchTxt ? 'expanded' : 'collapsed'}`} id="autoComplete__content">
            <input onKeyPress={(evt) => this.clickEscBtnHandler(evt)} value={searchTxt} name="searchTxt" onChange={(evt) => this.onChangeSearchTxt(evt)} className="form-control" id="autoComplete" type="text" placeholder="Search ..." tabIndex={1} />
            <ul id="autoComplete_results_list" style={{ display: `${searchTxt ? 'block' : 'none'}` }}>
              {resultList.map(num => <AutoCompleteResultItem key={num} />)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AutoCompleteResultList;
