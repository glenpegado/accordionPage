import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function SingleQuestion({ id, title, info, activeId, ToggleQuestion }) {
  //useState
  const [toggle, setToggle] = useState(false);
  let isActive = id == activeId;
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button
          onClick={() => setToggle(ToggleQuestion(id))}
          className='question-btn'
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{isActive && info}</p>
    </article>
  );
}
export default SingleQuestion;
