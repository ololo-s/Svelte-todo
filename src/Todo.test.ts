import Todo, {save, load} from "./Todo";
import {stringify} from "vitest";


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

it('loading from localStorage', () => {
    localStorage.setItem('todos', `[{"text":"Wash the dishes","completed":true}]`)
    const todos = load()
    expect(todos.length).eq(1)
    expect(todos[0].text).eq('Wash the dishes')
    expect(todos[0].completed).eq(true)
})

it('math works', () => {
    expect(2+2).eq(4)
})
