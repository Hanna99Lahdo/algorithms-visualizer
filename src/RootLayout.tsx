import {Link, Outlet} from "react-router-dom";
  
// this is like the root layout of the application
export default function RootLayout(){
    return(
      <>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/sorting-algorithms'>Sorting Algorithms</Link>

        </div>
        {/* children routes */}
        <div>
          <Outlet />
        </div>
      </>
    );
  }
  