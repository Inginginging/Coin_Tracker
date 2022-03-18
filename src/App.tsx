import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(""); //""로 초기화 하여 ts에서 알아서 value의 type을 string으로 인식
  //ts에서 event를 typing 하는 방법
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("typed", value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="text"
          value={value}
          onChange={onChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
