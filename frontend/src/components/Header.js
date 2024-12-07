

export default function Header(){
    return(
        <header>
            <nav className="navbar row "> 
            <div className="navbar-brand col-12 col-md-3 d-flex align-items-center">
                <img src="/images/prasanth1.jpg" alt="prasanth" width="200px" height="150px" />
            </div>
            <div className="col-12 col-md-3 text-white d-flex justify-content-start align-items-center ">
                <h1>Prasanth</h1>
            </div>
            <div className="col-12 col-md-3 text-white">
                <address>Lalgudi</address>
                <h6>Mob.No. 8072175827</h6>
                <p className="fa fa-home text-white"> Home</p>
                </div>
                
        </nav>
        </header>
        
    )
}