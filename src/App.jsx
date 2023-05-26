import { useState } from 'react';
import data from './data';
import Questions from './Questions';

function App() {
  //useState
  const [question, setQuestion] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const ToggleQuestion = (id) => {
    let newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  //RETURN
  return (
    <main>
      <Questions
        question={question}
        activeId={activeId}
        ToggleQuestion={ToggleQuestion}
      />
    </main>
  );
}
export default App;
