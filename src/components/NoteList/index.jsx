import PropTypes from "prop-types";
import { useState } from "react";
import { useNotes } from "../../context/useNotes";
import CustomModal from "../CustomModal";
import { comparePassword } from "../../utils/encryption";
import { showToast } from "../../utils/helper";
import CheckPasswordModal from "../CheckPasswordModal";
import { ListContainer } from "./NoteList.styles";
import NoteItem from "../NoteItem";

const NoteList = () => {
  const { notes, selectNote, deleteNote, selectedNote } = useNotes();
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [currentNote, setCurrentNote] = useState(null);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const openPasswordModal = (note, deleteMode = false) => {
    setCurrentNote(note);
    setIsDeleteMode(deleteMode);
    setIsPasswordModalOpen(true);
  };

  const handleDelete = (note) => {
    if (selectedNote && selectedNote.id === note.id && selectNote.password) {
      return;
    }
    note.password ? openPasswordModal(note, true) : deleteNote(note.id);
  };

  const handleSelectNote = (note) => {
    if (selectedNote && selectedNote.id === note.id) return;

    note.password ? openPasswordModal(note) : selectNote(note.id);
  };

  const handlePasswordSubmit = async () => {
    const isCorrectPassword = await comparePassword(
      password,
      currentNote.password
    );

    if (isCorrectPassword) {
      isDeleteMode ? deleteNote(currentNote.id) : selectNote(currentNote.id);
    } else {
      showToast("Incorrect password. Please try again.", "error");
    }

    closePasswordModal();
  };

  const closePasswordModal = () => {
    setIsPasswordModalOpen(false);
    setPassword("");
    setCurrentNote(null);
  };
  const passwordModalTitle = isDeleteMode
    ? `Enter Password to delete :- ${currentNote?.title}`
    : `Enter Password to open :- ${currentNote?.title}`;
  return (
    <ListContainer>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onSelect={handleSelectNote}
          onDelete={handleDelete}
          isOpen={selectedNote?.id === note.id}
        />
      ))}
      <CustomModal isOpen={isPasswordModalOpen} onClose={closePasswordModal}>
        <CheckPasswordModal
          isOpen={isPasswordModalOpen}
          onClose={closePasswordModal}
          password={password}
          setPassword={setPassword}
          handleSubmit={handlePasswordSubmit}
          title={passwordModalTitle}
        />
      </CustomModal>
    </ListContainer>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      password: PropTypes.string,
    })
  ),
  selectNote: PropTypes.func,
  deleteNote: PropTypes.func,
};

export default NoteList;
