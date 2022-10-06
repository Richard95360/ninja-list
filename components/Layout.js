import Footer from "./Footer";
import NavBar from '../components/NavBar'
import Header from "./Header";


const Layout = ({children}) => {
    return (
        <div className="content">
             <NavBar/>
             <Header/>
            {children}
            <Footer/>
        </div>
      );
}
 
export default Layout;