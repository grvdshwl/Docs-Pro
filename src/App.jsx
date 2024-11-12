import RichTextEditor from "./components/RichTextEditor";
import NoteList from "./components/NoteList";
import { AppContainer, MainEditor, Sidebar } from "./components/UI/App";
import { useNotes } from "./context/useNotes";
import AddNote from "./components/AddNote";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { notes } = useNotes();
  return (
    <AppContainer>
      <ToastContainer />

      <Sidebar>
        <AddNote />
        {!!notes.length && <NoteList />}
      </Sidebar>
      <MainEditor>{!!notes.length && <RichTextEditor />}</MainEditor>
    </AppContainer>
  );
}

export default App;
