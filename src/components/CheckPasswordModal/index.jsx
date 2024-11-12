import PropTypes from "prop-types";
import {
  Button,
  ButtonWrapper,
  InputField,
  InputWrapper,
  Label,
  ModalContainer,
  ModalHeader,
} from "../UI/UI";

const CheckPasswordModal = ({
  isOpen,
  onClose,
  password,
  setPassword,
  handleSubmit,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalHeader>{title}</ModalHeader>
      <InputWrapper>
        <Label>Password</Label>
        <InputField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button cancel onClick={onClose}>
          Cancel
        </Button>
      </ButtonWrapper>
    </ModalContainer>
  );
};

CheckPasswordModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default CheckPasswordModal;
