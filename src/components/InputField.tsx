import React from "react";
import InputFieldProps from "../interfaces/InputFieldProps";
import "./styles.css";

const InputField = ({ todo, setTodo }: InputFieldProps) => {
	return (
		<form className="input">
			<input type="text" placeholder="Enter a task" className="input__box" value={todo} onChange={(e) => setTodo(e.target.value)} />
			<button className="input__submit" type="submit">
				Go
			</button>
		</form>
	);
};

export default InputField;
