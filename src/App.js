import logo from './logo.svg';
import './App.css';
import Header from './componets/Header';
import Body from './componets/Body';
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './componets/MainContainer';
import WatchPage from './componets/WatchPage';

function App() {
  const router=createBrowserRouter([
    {
      path:"/video_streaming_app",
      element: <Body/>,
      children:[
        {
          path: "",
        element: <MainContainer/>
        },
        {
          path: "Watch",
        element: <WatchPage/>,
        }
      ],
    }
  ])
  return (
    <div className="App">
     
      <Provider basename="/video_streaming_app" store={AppStore}>

      <Header/>
      <RouterProvider router={router}>
      {/* <Body/> */}
      
   
      </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
