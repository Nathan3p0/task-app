import React from "react";

interface InputFieldProps {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}

export default InputFieldProps;
