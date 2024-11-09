type todo = {
    title: string,
    text: string
}

let todos: todo[] = [
    {
        title: '買い物',
        text: 'ワイズマートでトマトを買う'
    }
];

export const getTodos = () => {
    return todos
}

export const addTodo = (formData: FormData) => {
    const title = formData.get("title") as string
    const text = formData.get("text") as string

    if (title && text) {
        todos.push({
            title,
            text
        });
    } else {
        throw new Error("Title and text are required fields");
    }
    return todos;
};

export const getTodo = (todoId:number) => {
    return todos[todoId]
}