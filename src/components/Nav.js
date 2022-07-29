import React from 'react'

export default function Nav(props) {
  return (
    <>
    <nav id="NvB"className="navbar navbar-expand-lg mb-5" style={{background:"white"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src='https://vouchdigital.africa/wp-content/uploads/2021/02/cropped-positive.png.webp' style={{height:"3.6rem"}}></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.abt}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <ul class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </ul>
          {/* <ul className='nav-item'>
            <button type="button" class="btn btn-success">Start Free Trial</button>
          </ul>
          <ul className='nav-item'>
          <button type="button" class="btn btn-warning">Login</button>
          </ul> */}

          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
    </>
  )
}
