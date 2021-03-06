import React, { useRef } from "react";
import InputFieldProps from "../interfaces/InputFieldProps";
import "./styles.css";

const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form
			className="input"
			onSubmit={(e) => {
				handleAdd(e);
				inputRef.current?.blur();
			}}
		>
			<input ref={inputRef} type="text" placeholder="Enter a task" className="input__box" value={todo} onChange={(e) => setTodo(e.target.value)} />
			<button className="input__submit" type="submit">
				Go
			</button>
		</form>
	);
};

export default InputField;
