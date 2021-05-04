
type RootState = ReturnType<typeof import('.').default.getState>

type PayloadAction<T = any> = { type: string, payload: T };

type AppDispatch = typeof import('.').default.dispatch;
