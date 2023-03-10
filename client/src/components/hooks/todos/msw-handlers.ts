import { rest } from 'msw';
import { ITodo } from 'todo-list';

const URI = process.env.NEXT_PUBLIC_BACKEND_URL;

export const todos = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
    isImportant: true,
    isDone: false,
    dueDate: '2023-01-01',
  },
  {
    id: 2,
    title: 'Title 2',
    description: null,
    isImportant: false,
    isDone: false,
    dueDate: null,
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Description 3',
    isImportant: true,
    isDone: true,
    dueDate: '2023-01-03',
  },
];

export const todo = todos[0];

export const emptyTodos: ITodo[] = [];

export const error = { message: 'Test error' };

export const getEmpty = rest.get(`${URI}/todos`, (_req, res, ctx) => {
  return res(ctx.delay(100), ctx.status(200), ctx.json(emptyTodos));
});

export const getSuccessStub: ITodo[] = [];

export const getSuccess = rest.get(`${URI}/todos`, (_req, res, ctx) => {
  return res(ctx.delay(100), ctx.status(200), ctx.json(todos));
});

export const getError = rest.get(`${URI}/todos`, (_req, res, ctx) => {
  return res(ctx.delay(100), ctx.status(500), ctx.json(error));
});

export const postSuccess = rest.post(`${URI}/todos`, (_req, res, ctx) => {
  return res(ctx.delay(100), ctx.status(201), ctx.json(todo));
});

export const postError = rest.post(`${URI}/todos`, (_req, res, ctx) => {
  return res(ctx.delay(100), ctx.status(500), ctx.json(error));
});

export const patchSuccess = rest.patch(`${URI}/todos/:id`, (_req, res, ctx) => {
  return res(ctx.delay(100), ctx.status(200), ctx.json(todo));
});

export const patchError = rest.patch(`${URI}/todos/:id`, (_req, res, ctx) => {
  return res(ctx.delay(100), ctx.status(500), ctx.json(error));
});

export const deleteSuccess = rest.delete(
  `${URI}/todos/:id`,
  (_req, res, ctx) => {
    return res(ctx.delay(100), ctx.status(200), ctx.json(todo));
  },
);

export const deleteError = rest.delete(`${URI}/todos/:id`, (_req, res, ctx) => {
  return res(ctx.delay(100), ctx.status(500), ctx.json(error));
});
