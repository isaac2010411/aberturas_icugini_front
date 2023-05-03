import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { SocketContextProvider } from './contexts/socketContext'
import axios from 'axios'
import store from './redux'
import App from './routes/index'
import ThemeConfig from './theme'
import reportWebVitals from './reportWebVitals'
import { AppContextProvider } from './contexts/AppContext'

axios.defaults.baseURL = process.env.REACT_APP_API

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <HelmetProvider>
    <ThemeConfig>
      <SocketContextProvider>
        <BrowserRouter>
          <Provider store={store}>
            <AppContextProvider>
              <App />
            </AppContextProvider>
          </Provider>
        </BrowserRouter>
      </SocketContextProvider>
    </ThemeConfig>
  </HelmetProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
