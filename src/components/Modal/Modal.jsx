import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  modalClose = () => {
    this.props.onClose();
  };

  render() {
    return (
      <div className={'overlay'} onClick={this.modalClose}>
        <div className={'modal'}>
          <img src={this.props.src} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
