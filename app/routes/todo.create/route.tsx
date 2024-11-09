import { ActionFunctionArgs, json } from "@remix-run/node"
import { Form, useActionData, useNavigate } from "@remix-run/react"
import { useEffect } from "react";
import { addTodo } from "~/db"


export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData()
    console.log("アクションだよ")
    const todo = await addTodo(formData)
    return json({ success: true, todo })
}

export default function Todo() {
    const navigate = useNavigate();
    const actionData = useActionData<typeof action>();

    useEffect(() => {
        if (actionData?.success) {
            navigate("/todo")
        }
    }, [actionData])

    return (
        <>
            <button onClick={() => navigate(-1)}>←</button>

            <Form method="post">
                <input name="title" />
                <input name="text" />
                <input type="submit" value="送信" />
            </Form>

        </>

    )
}