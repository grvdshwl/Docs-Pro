import { useState } from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import { useNotes } from "../../context/useNotes";
import NoteModal from "./AddNoteModal";
import CustomModal from "../CustomModal";
import { AddButton, ButtonText } from "./AddNote.styles";

function AddNote() {
  const { addNote } = useNotes();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newNoteName, setNewNoteName] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setNewNoteName("");
  };

  const handleChange = (e) => setNewNoteName(e.target.value);

  const handleSubmit = () => {
    if (newNoteName.trim()) {
      addNote({
        id: Date.now().toString(),
        title: newNoteName,
        content: "",
        editorStyles: {
          fontSize: "16px",
          textAlign: "left",
          isBold: false,
          isItalic: false,
          isUnderline: false,
        },
        isHighlighted: false,
        highlightedContent: "",
        password: null,
      });
      closeModal();
    }
  };

  return (
    <div>
      <AddButton onClick={openModal}>
        <FaPlus />
        <ButtonText>Add Note</ButtonText>
      </AddButton>
      <CustomModal isOpen={isModalOpen} onClose={closeModal}>
        <NoteModal
          isOpen={isModalOpen}
          onClose={closeModal}
          newNoteName={newNoteName}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </CustomModal>
    </div>
  );
}

AddNote.propTypes = {
  addNote: PropTypes.func,
};

export default AddNote;
