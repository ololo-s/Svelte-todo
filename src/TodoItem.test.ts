import TodoItem from "./TodoItem.svelte"
import {cleanup, fireEvent, getByDisplayValue, queryByAttribute, render, screen} from '@testing-library/svelte';
import Todo from "./Todo";

it('renders empty item', ()=> {
    const {container} = render(TodoItem, {todo: new Todo()})
    const text = container.querySelector('input[type=text]') as HTMLInputElement
    expect(text.value).eq('')
    const checkbox = container.querySelector('input[type=checkbox]') as HTMLInputElement
    expect(checkbox.checked).eq(false)
})

it('renders completed item', ()=> {
    const {container} = render(TodoItem, {todo: new Todo('Feed a dog', true)})
    const text = container.querySelector('input[type=text]') as HTMLInputElement
    expect(text.value).eq('Feed a dog')
    const checkbox = container.querySelector('input[type=checkbox]') as HTMLInputElement
    expect(checkbox.checked).eq(true)
})

it('renders delete', async ()=> {
    const {container, component} = render(TodoItem, {todo: new Todo()})
    const button = container.querySelector('button') as HTMLButtonElement
    expect(button).to.exist
    await fireEvent.click(button)
})
