import React, { Component } from 'react';
import SearchMentionItem from './components/SearchMentionItem';
import searchServices from '../../services/search.services';
import queryString from 'query-string';

// const testData = [1, 2, 3, 4, 5];


class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTxt: '',
      searchTxtDisplay: '',
      resultList: [],
      isFocus: false,
      indexIsSelected: -1,
      isOpenSuggestion: false,
      isRedirectToResultPage: false,
    }
  }

  componentDidMount() {
    // console.log(this.props.location)
    const { location: { search } } = this.props;
    const searchObject = queryString.parse(search);
    if (searchObject.keyword) this.setState({
      searchTxt: searchObject.keyword,
      searchTxtDisplay: searchObject.keyword,
    });
  }

  async onChangeSearchTxtHandler(evt) {
    const { value } = evt.target;
    this.setState({
      searchTxtDisplay: value,
      searchTxt: value,
      isOpenSuggestion: true,
    });
    try {
      const { data } = await searchServices.getSuggestionSearch(value);
      this.setState({ resultList: data });
    } catch (error) {
      console.log(error);
      alert('Error when fetch data search suggestion');
    }
  }

  onBlurInputSearchTxtHandler(evt) {
    if (!evt.relatedTarget || evt.relatedTarget.tagName !== 'A') {
      this.setState({ isFocus: false });
    }
  }

  pressBtnHandler(evt) {
    const ESC_BUTTON = 27;
    const UP_BUTTON = 38;
    const DOWN_BUTTON = 40;
    const ENTER_BUTTON = 13;

    switch (evt.keyCode) {
      case ESC_BUTTON:
        this.pressEscBtnHandler();
        evt.preventDefault();
        break;

      case UP_BUTTON:
        this.pressUpBtnHandler();
        evt.preventDefault();
        break;

      case DOWN_BUTTON:
        this.pressDownBtnHandler();
        evt.preventDefault();
        break;

      case ENTER_BUTTON:
        this.pressEnterBtnHandler();
        evt.preventDefault();
        break;

      default:
        break;
    }
  }

  pressEnterBtnHandler() {
    const { searchTxtDisplay } = this.state;
    const { history } = this.props;
    // if (searchTxtDisplay) this.setState({ isRedirectToResultPage: true });
    this.setState({ searchTxt: searchTxtDisplay }, () => {
      this.inputTag.blur();
      history.push(`/result/news?page=1&keyword=${searchTxtDisplay}`);
    });
  }

  pressEscBtnHandler() {
    const { searchTxt } = this.state;
    this.setState({
      searchTxtDisplay: searchTxt,
      isOpenSuggestion: false,
      indexIsSelected: -1,
    });
  }

  pressUpBtnHandler() {
    const {
      resultList,
      indexIsSelected,
      searchTxt,
    } = this.state;
    const total = resultList.length;

    if (indexIsSelected <= -1) {
      this.setState({
        indexIsSelected: total - 1,
        searchTxtDisplay: resultList[total - 1].title,
      });
    } else {
      this.setState({
        indexIsSelected: indexIsSelected - 1,
        searchTxtDisplay: indexIsSelected - 1 <= -1 ? searchTxt : resultList[indexIsSelected - 1].title,
      });
    }
  }

  pressDownBtnHandler() {
    const {
      resultList,
      indexIsSelected,
      searchTxt,
    } = this.state;
    const total = resultList.length;

    if (indexIsSelected >= total - 1) {
      this.setState({
        indexIsSelected: -1,
        searchTxtDisplay: searchTxt,
      });
    } else {
      this.setState({
        indexIsSelected: indexIsSelected + 1,
        searchTxtDisplay: resultList[indexIsSelected + 1].title,
      });
    }
  }

  render() {
    const {
      searchTxtDisplay,
      resultList,
      indexIsSelected,
      isOpenSuggestion,
      isFocus,
      // isRedirectToResultPage,
    } = this.state;

    // if (isRedirectToResultPage) return <Redirect to={`/result/news?page=1&keyword=${searchTxtDisplay}`} />
    return (
      <div
        className={`w-100 input-search__content ${isOpenSuggestion && isFocus ? 'expanded' : 'collapsed'}`}
        id="autoComplete__content"
      >
        <input
          ref={input => { this.inputTag = input }}
          autoComplete="off"
          value={searchTxtDisplay}
          onKeyDown={(evt) => this.pressBtnHandler(evt)}
          onChange={(evt) => this.onChangeSearchTxtHandler(evt)}
          onFocus={() => this.setState({ isFocus: true })}
          onBlur={(evt) => this.onBlurInputSearchTxtHandler(evt)}
          name="searchTxt"
          className="form-control"
          id="autoComplete"
          type="text"
          placeholder="Search ..."
          tabIndex={1}
        />
        <ul id="autoComplete_results_list" style={{ display: `${isOpenSuggestion && isFocus ? 'block' : 'none'}` }}>
          {
            resultList.map((suggestion, index) =>
              <SearchMentionItem
                key={suggestion.rel_id}
                selectSuggestion={(text) => this.setState({
                  isFocus: false,
                  searchTxtDisplay: text,
                  searchTxt: text,
                })}
                suggestion={suggestion}
                isActive={indexIsSelected === index}
                index={index}
                setIndexIsSelected={(indexSuggestion) => this.setState({ indexIsSelected: indexSuggestion })}
              />)
          }
        </ul>
      </div>
    );
  }
}

export default SearchBar;
