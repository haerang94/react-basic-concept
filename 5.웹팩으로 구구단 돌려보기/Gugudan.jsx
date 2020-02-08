const React = require("react");

const Gugudan = () => {
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");
  //ref도 useRef를 이용한다
  const inputRef = React.useRef(null);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult(`${first} * ${second} =
                  ${first * second} 정답`);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
    } else {
      setResult(`${first} * ${second} =
                  ${first * second}가 정답임. 틀렸음`);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
    }
    inputRef.current.focus();
  };

  return (
    <>
      <div>
        {first} * {second} = ?
      </div>
      <form onSubmit={onSubmit}>
        <input type="number" value={value} onChange={onChange} ref={inputRef} />
        <button>입력</button>
        <div>{result}</div>
      </form>
    </>
  );
};

module.exports = Gugudan;
