import React, { useRef } from 'react';

type TextFieldProps = {
  filterText: string,
  setFilterText: (value: string) => void,
}

export default function TextField({
  filterText, setFilterText,
}: TextFieldProps) {
  const textFieldId = useRef(`input-${Math.random()}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  return (
    <div className="search">
      <label
        htmlFor={textFieldId.current}
        style={{
          paddingRight: '1rem',
        }}
      >
        검색
      </label>
      <input id={textFieldId.current} type="text" placeholder="식당 이름 입력..." value={filterText} onChange={handleChange} />
    </div>
  );
}
