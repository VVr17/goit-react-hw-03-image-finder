import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };

  toggleModal = () => {
    this.setState(({ modalIsOpen }) => ({
      modalIsOpen: !modalIsOpen,
    }));
  };

  render() {
    const { previewImage, largeImage, tags } = this.props;
    const { modalIsOpen } = this.state;

    return (
      <>
        <li className={css.imageGalleryItem} onClick={this.toggleModal}>
          <img
            className={css.imageGalleryItemImage}
            src={previewImage}
            alt={tags}
          />
        </li>
        {modalIsOpen && (
          <Modal closeModal={this.toggleModal}>
            <img src={largeImage} alt={tags} />
            <p className={css.imageTitle}>{tags}</p>
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  previewImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
