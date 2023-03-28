import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import './styles.css';

import { toast } from 'react-toastify';
import { getPosts } from './Server/server';

export default class App extends Component {
  state = {
    hits: [],
    isLoading: false,
    isError: false,
    search: '',
    page: 1,
    imageModal: '',
  };

  heandleSearch = async search => {
    this.setState({ search, page: 1, hits: [] });
  };

  async componentDidUpdate(_, prevStete) {
    if (
      prevStete.page !== this.state.page ||
      prevStete.search !== this.state.search
    ) {
      try {
        this.setState({ isLoading: true });
        const response = await getPosts(this.state.search, this.state.page);
        this.setState(prev => ({
          hits: [...prev.hits, ...response.hits],
          isLoading: false,
        }));
      } catch (error) {
        this.setState({ isLoading: false, isError: true });
        toast.error(error.message);
      }
    }
  }

  handleChangePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  modalClose = () => {
    this.setState({ imageModal: '' });
  };

  openModal = url => {
    this.setState({ imageModal: url });
  };

  render() {
    const { hits, isLoading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.heandleSearch} />
        {this.state.imageModal && (
          <Modal src={this.state.imageModal} onClose={this.modalClose} />
        )}
        {isLoading && <Loader />}
        <ImageGallery hits={hits} openModal={this.openModal} />;
        <Button onClick={() => this.handleChangePage()} />
      </div>
    );
  }
}
