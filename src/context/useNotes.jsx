import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(notes[0]?.id || null);
  useEffect(() => {
    if (notes.length) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    if (selectedNote?.id === noteId) {
      setSelectedNote(null);
    }
  };

  const updateNote = (noteId, updatedContent) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, content: updatedContent } : note
      )
    );
    if (selectedNote?.id === noteId) {
      setSelectedNote((prev) => ({ ...prev, content: updatedContent }));
    }
  };

  const updateNoteHighlighted = (noteId, highlightedContent, isHighlighted) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId
          ? { ...note, highlightedContent, isHighlighted }
          : note
      )
    );
    if (selectedNote?.id === noteId) {
      setSelectedNote((prev) => ({
        ...prev,
        highlightedContent,
        isHighlighted,
      }));
    }
  };

  const updateNoteStyles = (noteId, updatedStyles) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId
          ? {
              ...note,
              editorStyles: { ...note.editorStyles, ...updatedStyles },
            }
          : note
      )
    );
    if (selectedNote?.id === noteId) {
      setSelectedNote((prev) => ({
        ...prev,
        editorStyles: { ...prev.editorStyles, ...updatedStyles },
      }));
    }
  };

  const updateNotePassword = (noteId, updatedPassword) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId
          ? {
              ...note,
              password: updatedPassword,
            }
          : note
      )
    );

    if (selectedNote?.id === noteId) {
      setSelectedNote((prev) => ({
        ...prev,
        password: updatedPassword,
      }));
    }
  };

  const selectNote = (noteId) => {
    const noteToSelect = notes.find((note) => note.id === noteId);
    setSelectedNote(noteToSelect || null);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        selectedNote,
        addNote,
        deleteNote,
        updateNote,
        selectNote,
        updateNoteStyles,
        updateNoteHighlighted,
        updateNotePassword,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

NotesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};
