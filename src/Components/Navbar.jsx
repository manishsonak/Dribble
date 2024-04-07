import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
   <>

<nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home"><span style={{color:"rgb(245, 137, 155)"}}>dribbble </span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="mb-2 navbar-nav me-auto mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Inspiration</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/home">Find Work</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/home">Learn Design</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/home">Go Pro</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/home">Hire Designer</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
    
        <input className=" form-control me-2" type="search" placeholder="Search" aria-label="Search"/>

       <i className="mx-2 fa-solid fa-briefcase fs-2 position-relative" style={{color:"gray"}}>
       <i className="fa-solid fa-circle-xmark position-absolute fs-6" style={{bottom:"1px", right:"-1px", color:"black"}}></i>
       </i>
      <Link to="/profile"> <img  className="mx-2" style={{width:"40px", height:"40px", borderRadius:"50%", objectFit:"cover"}} src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..."></img></Link>
        <button className="btn btn-outline-success" type="submit">Search</button>
       <div>
       </div>
      </form>
    </div>
  </div>
</nav>

   </>
  )
}

export default Navbar
