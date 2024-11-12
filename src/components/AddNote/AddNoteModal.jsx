import PropTypes from "prop-types";
import { Button, InputField, ModalContent } from "../UI/UI";
import { AddNoteModalContainer, AddNoteModalTitle } from "./AddNote.styles";

const NoteModal = ({ isOpen, newNoteName, handleChange, handleSubmit }) => {
  if (!isOpen) return null;

  return (
    <ModalContent>
      <AddNoteModalContainer>
        <AddNoteModalTitle>Create Note</AddNoteModalTitle>
        <InputField
          type="text"
          value={newNoteName}
          onChange={handleChange}
          placeholder="Enter note name..."
        />
        <Button onClick={handleSubmit}>Save</Button>
      </AddNoteModalContainer>
    </ModalContent>
  );
};

NoteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  newNoteName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default NoteModal;
