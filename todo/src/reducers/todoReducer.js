export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 1
    },
    {
        item: 'Struggle with reducers',
        completed: false,
        id: 2
    }
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return ([
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
            ]);

        case 'COMPLETED_TODO':
            return (
                state.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo, completed: !todo.completed
                        };
                    } else {
                        return todo;
                    }
                })
            );

        case 'CLEAR_COMPLETED':
            return (
                state.filter(todo => !todo.completed)
            )

        default:
            return state;
    }
}