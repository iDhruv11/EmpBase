import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Wrapper } from "./Components/Wrapper";
import { Home } from "./Components/Home";
import { Create } from "./Components/Create";
import { Update } from "./Components/Update";
import { Read } from "./Components/Read";
import { Delete } from "./Components/Delete";
import { UpdateCard } from "./Components/UpdateCard";
import { Provider } from "react-redux";
import { EmpStore } from "./Utils/EmpStore";
function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Wrapper />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'create',
          element: <Create />,
        },
        {
          path: 'update',
          element: <Update />,
          children: [ 
            {
              path: ':userId',
              element: <UpdateCard />
            }
          ]
        },
        {
          path: 'read',
          element: <Read />,
        },
        {
          path: 'delete',
          element: <Delete />,
        }, 
      ]
    }
  ])
  return (
    <Provider store={EmpStore} >
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
