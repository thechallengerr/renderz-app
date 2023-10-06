import './App.css';
import { GlobalStyles } from './Components/GlobalStyles.style';
import { RouterProvider } from 'react-router-dom';
import router from './router/index';
import { store } from './store/store'
import { Provider } from 'react-redux'
function App() {
  
  return (

    <div className="App">
      <Provider store={store}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
