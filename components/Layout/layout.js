import Navbar from "../navbar/navbar";

const Layout = ({children}) => { 
  return(
    <Navbar>
      {children}
    </Navbar>
  )
}

export default Layout;