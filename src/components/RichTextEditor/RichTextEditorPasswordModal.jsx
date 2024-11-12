import PropTypes from "prop-types";

import CustomModal from "../CustomModal";
import { hashPassword } from "../../utils/encryption";
import { useState } from "react";
import {
  Button,
  ButtonWrapper,
  InputField,
  InputWrapper,
  Label,
  ModalContainer,
  ModalHeader,
} from "../UI/UI";

const RichTextEditorPasswordModal = ({
  isOpen,
  onClose,
  updateNotePassword,
  noteId,
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    if (password === confirmPassword) {
      const hashedPassword = await hashPassword(password);
      updateNotePassword(noteId, hashedPassword);
      handleClose();
    } else {
      alert("Passwords do not match!");
    }
  };

  const handleClose = () => {
    setConfirmPassword("");
    setPassword("");
    onClose();
  };

  return (
    <CustomModal isOpen={isOpen} onClose={handleClose}>
      <ModalContainer>
        <ModalHeader>Encrypt Note</ModalHeader>
        <InputWrapper>
          <Label>Password</Label>
          <InputField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Confirm Password</Label>
          <InputField
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button cancel onClick={handleClose}>
            Cancel
          </Button>
        </ButtonWrapper>
      </ModalContainer>
    </CustomModal>
  );
};

RichTextEditorPasswordModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  updateNotePassword: PropTypes.func.isRequired,
  noteId: PropTypes.string.isRequired,
};

export default RichTextEditorPasswordModal;
