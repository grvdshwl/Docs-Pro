import { useState } from "react";
import PropTypes from "prop-types";
import { useNotes } from "../../context/useNotes";
import { RichTextEditorContainer } from "./RichTextEditor.styles";
import RichTextEditableParagraph from "./RichTextEditableParagraph";
import RichTextEditorToolBar from "./RichTextEditorToolBar";
import RichTextEditorPasswordModal from "./RichTextEditorPasswordModal";
import { Tooltip } from "react-tooltip";
import { useGenerateInfo } from "../../hooks/useGenerateInfo";
import {
  escapeRegExp,
  isEmptyObject,
  removeSpecialCharactersFromObject,
  replaceEncodedSpaces,
  showToast,
} from "../../utils/helper";

const RichTextEditor = () => {
  const {
    updateNote,
    selectedNote: currentNote,
    updateNoteStyles,
    updateNoteHighlighted,
    updateNotePassword,
  } = useNotes();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { generateInfo } = useGenerateInfo();

  if (!currentNote) return null;

  const toggleStyle = (style) =>
    updateNoteStyles(currentNote.id, {
      [style]: !currentNote.editorStyles[style],
    });
  const handleAlignment = (align) =>
    updateNoteStyles(currentNote.id, { textAlign: align });
  const handleFontSizeChange = (e) =>
    updateNoteStyles(currentNote.id, { fontSize: `${e.target.value}px` });
  const handleReset = () =>
    updateNoteStyles(currentNote.id, {
      fontSize: "16px",
      textAlign: "left",
      isBold: false,
      isItalic: false,
      isUnderline: false,
    });
  const handleEncryptNote = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const highlightWords = async () => {
    try {
      if (!currentNote || currentNote.isHighlighted) {
        updateNoteHighlighted(currentNote.id, "", false);
        return;
      }

      const editor = document.getElementById("editor-content");
      if (editor) {
        let content = editor.innerText.trim();
        let updatedContent = content;

        const result = await generateInfo(content);
        const finalResult = removeSpecialCharactersFromObject(result);
        if (isEmptyObject(finalResult)) {
          showToast("No result to highlight", "warning");
          return;
        }

        const wrappedWords = new Set();

        Object.keys(finalResult).forEach((key) => {
          const wordRegex = new RegExp(`\\b${escapeRegExp(key)}\\b`, "gi");
          const definition = finalResult[key];

          updatedContent = updatedContent.replace(wordRegex, (match) => {
            const lowerCaseMatch = match.toLowerCase();
            if (!wrappedWords.has(lowerCaseMatch)) {
              wrappedWords.add(lowerCaseMatch);
              const encodedDefinition = encodeURIComponent(definition);
              return `<span data-tooltip-place='top'
                            data-tooltip-id='my-tooltip'
                            data-tooltip-content='${encodedDefinition}'
                            style='background-color: yellow; transition: background-color 0.3s; cursor: pointer;'
                            onmouseover='this.style.backgroundColor="orange";'
                            onmouseout='this.style.backgroundColor="yellow";'>
                      ${match}
                    </span>`;
            }
            return match;
          });
        });

        updateNoteHighlighted(
          currentNote.id,
          replaceEncodedSpaces(updatedContent),
          true
        );
      }
    } catch (error) {
      console.error("Error highlighting words:", error);
    }
  };

  return (
    <RichTextEditorContainer>
      <Tooltip id="my-tooltip" place="top" type="dark" effect="solid" />
      <RichTextEditorToolBar
        editorStyles={currentNote.editorStyles}
        toggleStyle={toggleStyle}
        handleAlignment={handleAlignment}
        handleFontSizeChange={handleFontSizeChange}
        handleReset={handleReset}
        highlightWords={highlightWords}
        handleEncryptNote={handleEncryptNote}
        isHighlighted={currentNote.isHighlighted}
      />
      <RichTextEditableParagraph
        editorStyles={currentNote.editorStyles}
        content={currentNote.content}
        highlightedContent={currentNote.highlightedContent}
        isHighlighted={currentNote.isHighlighted}
        updateContent={(content) => updateNote(currentNote.id, content)}
        removeHighlightsOnFocus={() =>
          updateNoteHighlighted(currentNote.id, "", false)
        }
      />
      <RichTextEditorPasswordModal
        isOpen={isModalOpen}
        onClose={closeModal}
        updateNotePassword={updateNotePassword}
        noteId={currentNote.id}
      />
    </RichTextEditorContainer>
  );
};

RichTextEditor.propTypes = {
  updateNote: PropTypes.func,
  selectedNote: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    highlightedContent: PropTypes.string,
    isHighlighted: PropTypes.bool,
    editorStyles: PropTypes.shape({
      fontSize: PropTypes.string,
      textAlign: PropTypes.oneOf(["left", "center", "right"]),
      isBold: PropTypes.bool,
      isItalic: PropTypes.bool,
      isUnderline: PropTypes.bool,
    }).isRequired,
  }),
  updateNoteStyles: PropTypes.func,
  updateNoteHighlighted: PropTypes.func,
  updateNotePassword: PropTypes.func,
};

export default RichTextEditor;
