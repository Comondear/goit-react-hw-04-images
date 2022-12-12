import Modal from 'react-modal';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const modalStyles = styled.div`
//   position: fixed;
//   top: 50;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1200;
// `;

// Modal.setAppElement('#root');

export const ModalImage = ({ selectImage, resetImage }) => {
  return (
    <Modal
      isOpen={Boolean(selectImage)}
      onRequestClose={resetImage}
      // style={modalStyles}
    >
      <img src={selectImage} alt="Large" />
    </Modal>
  );
};

Modal.propTypes = {
  selectImage: PropTypes.string,
  resetImage: PropTypes.func,
};
