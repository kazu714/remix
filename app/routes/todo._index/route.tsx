import { Form, json, Link, useLoaderData } from "@remix-run/react";
import { type ActionFunctionArgs } from "@remix-run/node";
import { getTodos, addTodo } from "../../db";

export const loader = async () => {
    const todos = await getTodos();
    return json({ todos });
}

export default function Todo() {
    const { todos } = useLoaderData<typeof loader>();
    return (
        <div>
            <Link to={'/todo/create'}>Todo新規作成</Link>
            {todos.map((todo, i) => {
                return (
                    <div>
                        <Link to={`/todo/${i}`}>
                            {todo.title}：{todo.text}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}