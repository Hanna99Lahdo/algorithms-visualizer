import RootLayout from './RootLayout';
import { HomePage, NotFoundPage, SortingAlgorithms } from './pages';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";


const router = createBrowserRouter(
  // [{
  //   path: "/",
  //   element: <HomePage />,
  //   errorElement: <NotFoundPage />
  // }],
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>} errorElement={<NotFoundPage/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/sorting-algorithms'  element={<SortingAlgorithms/>}/>
    </Route>
  ),
);

function App() {

  return (
    <div className='bg-slate-400'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
