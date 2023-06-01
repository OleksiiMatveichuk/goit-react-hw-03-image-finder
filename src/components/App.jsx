import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from './Loader';
import { Button } from './Button';
import { Modal } from './Modal';
import { getImages } from 'service/imageAPI';

export class App extends Component {
  state = {
    queri: '',
    page: 1,
    photos: [],
  };

  async componentDidUpdate(_, prevState) {
    const { queri, page } = this.state;
    if (prevState.queri !== queri || prevState.page !== page) {
      try {
        const { hits } = await getImages(queri, page);
        this.setState({ photos: hits });
      } catch (err) {
        console.log('err.message :>> ', err.message);
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.query;
    this.setState({ queri: value });
  };

  handleClick = () => {};

  render() {
    console.log('this.state :>> ', this.state);
    const { photos } = this.state;
    return (
      <div
      // style={{
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <Searchbar submit={this.handleSubmit} />
        {photos.length && (
          <ImageGallery>
            <ImageGalleryItem photos={photos} />
          </ImageGallery>
        )}
        {<Button />}
      </div>
    );
  }
}
