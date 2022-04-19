export default class Todo {
    constructor(
        public text = '',
        public completed = false
    ) {}
}

export function save(todos: Todo[]) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

export function load(): Todo[] | null {
    return JSON.parse(localStorage.getItem('todos'))
}


