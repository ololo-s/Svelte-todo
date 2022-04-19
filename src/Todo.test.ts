import Todo, {save} from "./Todo";

it('is empty by default', () => {
    const todo = new Todo()
    expect(todo.text).eq('')
    expect(todo.completed).eq(false)
})

it('saves to localStorage', () => {
    const todo = new Todo('Wash the dishes')
    save([todo])
    expect(localStorage.getItem('todos')).eq(`[{"text":"Wash the dishes","completed":false}]`)
})

it('math works', () => {
    expect(2+2).eq(4)
})
