import PropTypes from "prop-types";
import { EditableParagraph } from "./RichTextEditor.styles";

const RichTextEditableParagraph = ({
  editorStyles,
  content,
  highlightedContent,
  isHighlighted,
  updateContent,
  removeHighlightsOnFocus,
}) => (
  <EditableParagraph
    id="editor-content"
    contentEditable
    fontSize={editorStyles.fontSize}
    textAlign={editorStyles.textAlign}
    isBold={editorStyles.isBold}
    isItalic={editorStyles.isItalic}
    isUnderline={editorStyles.isUnderline}
    onChange={(e) => updateContent(e.target.value)}
    html={!isHighlighted ? content : highlightedContent}
    onFocus={isHighlighted ? removeHighlightsOnFocus : undefined}
    tagName="div"
  />
);

RichTextEditableParagraph.propTypes = {
  editorStyles: PropTypes.shape({
    fontSize: PropTypes.string,
    textAlign: PropTypes.oneOf(["left", "center", "right"]),
    isBold: PropTypes.bool,
    isItalic: PropTypes.bool,
    isUnderline: PropTypes.bool,
  }).isRequired,
  content: PropTypes.string.isRequired,
  highlightedContent: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
  updateContent: PropTypes.func.isRequired,
  removeHighlightsOnFocus: PropTypes.func,
};

export default RichTextEditableParagraph;
