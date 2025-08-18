import React from 'react'
import AppRouter from './AppRouter'
import { QueryClientProvider } from 'react-query'
import { queryClinetConfig } from '../../config/react-query'
import { Provider } from 'react-redux'
import { store } from '../../core/redux/store'

const AppProvider = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClinetConfig}>
        <AppRouter />
      </QueryClientProvider>
    </Provider>
  )
}

export default AppProvider
