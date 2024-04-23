const navBar=()=>{
    return ` <nav class="navbar navbar-expand-lg uper  ">
    <div class="container-fluid">
      <a class="navbar-brand" href="">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/admin.html">Admin</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/product.html">product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/cart.html">cart</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/pages/login.html">login</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/pages/signup.html">sign-up</a>
      </li>
        </ul>
        <form class="d-flex " id="searchform">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search">
        <button class="btn dlt" type="submit">Search</button>
      </form>

      
   
      </div>
    </div>
  </nav>`
}




export default navBar