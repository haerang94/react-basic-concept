const React = require("react");
const { useRef, useState } = React;

const WordRelay = () => {
  const [word, setWord] = useState("사과");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onRefInput = useRef(null);

  const onSubmitForm = e => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setResult("Correct");
      setValue("");
    } else {
      setWord(value);
      setResult("InCorrect");
      setValue("");
    }
    onRefInput.current.focus();
  };

  const onChangeInput = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={onRefInput} value={value} onChange={onChangeInput} />

        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
