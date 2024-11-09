import { json, LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData, useNavigate } from "@remix-run/react"
import { getTodo } from "~/db"



export const loader = ({ params }: LoaderFunctionArgs) => {
    const todoId = Number(params.id)
    const todo = getTodo(todoId)
    return json({ todo })
}

export default function Detail() {
    const {todo} = useLoaderData<typeof loader>();
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(-1)}>←</button>
           「{todo.title}」の詳細画面
           <p>{todo.text}</p>
        </div>
    )
}