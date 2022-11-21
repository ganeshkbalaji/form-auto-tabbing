type InputField = {
    value: string,
    label: any,
    name: string,
    placeholder: string,
    type: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    length: any,
    ref: React.RefObject<HTMLInputElement>
}

function InputField({
    value,
    label,
    name,
    placeholder,
    type,
    onChange,
    length,
    ref
  }: InputField) {
    return (
      <div className="form-group">
        {label && (
          <label className="form-label" htmlFor="input-field">
            {label}
          </label>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          label={label}
          maxLength={length}
          onChange={onChange}
          ref={ref}
        ></input>
      </div>
    );
  }
  
  export default InputField;
  