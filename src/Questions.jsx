import SingleQuestion from './SingleQuestion';

function Questions({ question, activeId, ToggleQuestion }) {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {question.map((el) => {
        return (
          <SingleQuestion
            {...el}
            key={el.id}
            activeId={activeId}
            ToggleQuestion={ToggleQuestion}
          />
        );
      })}
    </section>
  );
}
export default Questions;
