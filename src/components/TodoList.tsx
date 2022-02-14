import React from "react";
import { TodoListProps } from "../interfaces/TodoListProps";
import "./styles.css";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, setTodos }: TodoListProps) => {
	return (
		<div className="todos">
			{todos.map((todo) => (
				<TodoListItem key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />
			))}
		</div>
	);
};
