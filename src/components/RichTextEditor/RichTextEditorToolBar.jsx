import PropTypes from "prop-types";
import {
  RichTextEditorToolbar,
  RichTextEditorButton,
  RichTextEditorSelect,
} from "./RichTextEditor.styles";
import { textEditorFontSizeList } from "../../utils/helper";

const RichTextEditorToolBar = ({
  editorStyles,
  toggleStyle,
  handleAlignment,
  handleFontSizeChange,
  handleReset,
  highlightWords,
  handleEncryptNote,
  isHighlighted,
}) => (
  <RichTextEditorToolbar>
    <RichTextEditorButton
      onClick={() => toggleStyle("isBold")}
      active={editorStyles.isBold}
    >
      B
    </RichTextEditorButton>
    <RichTextEditorButton
      onClick={() => toggleStyle("isItalic")}
      active={editorStyles.isItalic}
    >
      I
    </RichTextEditorButton>
    <RichTextEditorButton
      onClick={() => toggleStyle("isUnderline")}
      active={editorStyles.isUnderline}
    >
      U
    </RichTextEditorButton>
    <RichTextEditorButton
      onClick={() => handleAlignment("left")}
      active={editorStyles.textAlign === "left"}
    >
      Left
    </RichTextEditorButton>
    <RichTextEditorButton
      onClick={() => handleAlignment("center")}
      active={editorStyles.textAlign === "center"}
    >
      Center
    </RichTextEditorButton>
    <RichTextEditorButton
      onClick={() => handleAlignment("right")}
      active={editorStyles.textAlign === "right"}
    >
      Right
    </RichTextEditorButton>
    <RichTextEditorSelect
      onChange={handleFontSizeChange}
      value={editorStyles.fontSize.replace("px", "")}
    >
      {textEditorFontSizeList.map((size) => (
        <option key={size} value={size}>
          {size}px
        </option>
      ))}
    </RichTextEditorSelect>
    <RichTextEditorButton onClick={handleReset}>Reset</RichTextEditorButton>
    <RichTextEditorButton onClick={highlightWords} active={isHighlighted}>
      Highlight Words
    </RichTextEditorButton>
    <RichTextEditorButton onClick={handleEncryptNote}>
      Encrypt Note
    </RichTextEditorButton>
  </RichTextEditorToolbar>
);

RichTextEditorToolBar.propTypes = {
  editorStyles: PropTypes.shape({
    isBold: PropTypes.bool,
    isItalic: PropTypes.bool,
    isUnderline: PropTypes.bool,
    textAlign: PropTypes.oneOf(["left", "center", "right"]),
    fontSize: PropTypes.string,
  }).isRequired,
  toggleStyle: PropTypes.func.isRequired,
  handleAlignment: PropTypes.func.isRequired,
  handleFontSizeChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  highlightWords: PropTypes.func.isRequired,
  handleEncryptNote: PropTypes.func.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
};

export default RichTextEditorToolBar;
