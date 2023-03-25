
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import New_Auther from "./component/Authors/New_Athor";
import Search1 from "./component/Authors/Search";
import Show_Auther from "./component/Authors/Show_Ather";
import Update_Author from "./component/Authors/Update_Author";
import { Card1 } from "./component/Card";
import Create_User from "./component/Create_User";
import { Error404 } from "./component/Error404";
import { Footer } from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import { Nav1 } from "./component/Navba";
import Show_users from "./component/Show_users";



 function App() {
const router= createBrowserRouter([
   {path:'/',element: <Main/>},
   {path:'/add_Auther',element: <New_Auther/> },
   {path:'/get_AllAuther',element: <Show_Auther/> },
   {path:'/search_AllAuther',element: <Search1/> },
   {path:'/Add_User',element: <Create_User/> },
   {path:'/get_Allusers',element: <Show_users/> },
   {path:'/show_card',element: <Card1 no="2" title="get your first job" 
                                      startTime="Tody"
                                      desc='thangk you hesham to join our team' img='3.jpg'/> },
                                      
   {path:'/header',element: <Header/>},
   {path:'/Update_Author/:id',element:<Update_Author page="UPDATE PAGE" fName="firstName" lName="lastName" nationality="nationality"/>},
  
   {path:'*',element:<Error404/>},
 ])

 return (
<>
 <Nav1/> 
 
  <RouterProvider router={router}/>



<Footer/>
 </>

 );
}

export default App;
