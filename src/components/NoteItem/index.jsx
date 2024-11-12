import PropTypes from "prop-types";
import {
  NoteItemContainer,
  DeleteIcon,
  NoteItemTitleContainer,
} from "./NoteItem.styles";

const NoteItem = ({ note, onSelect, onDelete, isOpen }) => {
  const handleSelect = () => onSelect(note);
  const handleOnDelete = (e) => {
    e.stopPropagation();
    onDelete(note);
  };
  return (
    <NoteItemContainer onClick={handleSelect} isOpen={isOpen}>
      <NoteItemTitleContainer>{note.title}</NoteItemTitleContainer>
      <DeleteIcon onClick={handleOnDelete} />
    </NoteItemContainer>
  );
};

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default NoteItem;
