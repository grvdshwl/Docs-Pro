import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
import { CloseButton, Content, Overlay } from "./CustomModal.styles";

const ModalOverlay = ({ onClose, children }) => {
  return <Overlay onClick={onClose}>{children}</Overlay>;
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const ModalContent = ({ onClose, children }) => {
  return (
    <Content onClick={(e) => e.stopPropagation()}>
      <CloseButton onClick={onClose}>
        <IoClose size={24} />
      </CloseButton>
      {children}
    </Content>
  );
};

ModalContent.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <ModalContent onClose={onClose}>{children}</ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root")
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default CustomModal;
