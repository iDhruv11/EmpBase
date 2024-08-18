import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import { Wrapper } from "./Components/Wrapper";
import { Home } from "./Components/Home";
import { Create } from "./Components/Create";
import { Update } from "./Components/Update";
import { Read } from "./Components/Read";
import { Delete } from "./Components/Delete";
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
          caseSensitive: true
        },
        {
          path: 'update', 
          element: <Update />,
          caseSensitive: true
        },
        {
          path: 'read',
          element: <Read />,
          caseSensitive: true
        },
        {
          path: 'delete',
          element: <Delete />,
          caseSensitive: true
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
