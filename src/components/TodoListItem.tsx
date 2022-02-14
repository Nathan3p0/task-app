import React from "react";
import Todo from "../interfaces/Todo";
import { TodoListItemProps } from "../interfaces/TodoListItemProps";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

export const TodoListItem = ({ todo, todos, setTodos }: TodoListItemProps) => {
	return (
		<form className="todos__single">
			<span className="todos__single--text">{todo.todo}</span>
			<div>
				<span className="icon">
					<AiFillEdit />
				</span>
				<span className="icon">
					<AiFillDelete />
				</span>
				<span className="icon">
					<MdDone />
				</span>
			</div>
		</form>
	);
};
