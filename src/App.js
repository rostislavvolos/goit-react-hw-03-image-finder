import './styles/App.css';
import Searchbar from './components/Searchbar/Searchbar';
import { Component } from 'react';
import { productsApi } from './services/searchApi';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from "./components/Modal/Modal"

class App extends Component {
  state = {
    pictures: [],
    page: 1,
    query: '',
    imgTags: '',
    largeImage: '',
    error: null,
    showModal: false,
    loading: false,
    finish: false
  }

  componentDidUpdate (prevProps, prevState) {
    const {query, loading, page} = this.state
    if (prevState.query !== query || (loading && prevState.page < page)) {
      this.fetchProducts()
    }
  }


  
  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  bigImage = (largeImage = '') => {
    this.setState({ largeImage });

    this.toggleModal();
  };


  searchQuery = ({query}) => {
    this.setState({query, page: 1, pictures: [], error: null})
  }

  async fetchProducts () {
    const {page, query} = this.state

    this.setState({loading: true})
    try {
      const {data} = await productsApi.searchPictures(page, query)
      this.setState(({pictures, page}) => {
        const newState = {
          pictures: [...pictures, ...data.hits],
          loading: false,
          error: null,
        }
        if (data.hits.length < 11) {
          newState.finish = true
        }
        if (data.hits.length === 0) {
          newState.error = true
        }
        return newState;
      })
    }
    catch (error) {
      this.setState({loading: false, error})
    }
  }


  loadMore = () => {
    this.setState(({page})=> ({
      loading: true,
      page: page + 1
    }))
  }

  render() {
    const {pictures, error, finish, loading, showModal, largeImage, imgTags} = this.state
    return (
      <div className="App">
      <Searchbar onSubmit={this.searchQuery}/>
      {error && <h1 className='error-title'>ну я хз, ниче нету, попробуй другое</h1>}
      <ImageGallery pictures={pictures} onClick={this.bigImage}/>
      {loading && <Loader />}
      {!finish && pictures.length > 11 && !loading && (<Button onClick={this.loadMore}/>)}
      {showModal && (<Modal showModal={this.bigImage}>
            <img src={largeImage} alt={imgTags} />
          </Modal>)}
    </div>
    )
  }
}

export default App;



