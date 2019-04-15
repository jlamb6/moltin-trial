import Link from 'next/link';

const Navbar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 pt-0 pb-0">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand mr-5" href="#">
                <i className="fab fa-facebook" style={{fontSize: '3rem'}}></i>
            </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link  href="#"><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
                </li>
                <li className="nav-item">
                    <Link href="catalog"><a className="nav-link">Catalog</a></Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Collections</a>
                    <div className="dropdown-menu shadow-sm">
                        <Link href="collections"><a className="dropdown-item">All</a></Link>
                        <Link href="collections/carabiners"><a className="dropdown-item">Carabiners</a></Link>
                        <Link href="collections/ropes"><a className="dropdown-item">Ropes</a></Link>
                        <Link href="collections/harnesses"><a className="dropdown-item">Harnesses</a></Link>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
                    <div className="dropdown-menu shadow-sm">
                        <Link href="categories"><a className="dropdown-item">All</a></Link>
                        <Link href="categories/sport"><a className="dropdown-item">Sport</a></Link>
                        <Link href="categories/trad"><a className="dropdown-item">Trad</a></Link>
                        <Link href="categories/aid"><a className="dropdown-item">Aid</a></Link>
                    </div>
                </li>
            </ul>
            <a className="nav-link text-white cart right"><i className="fas fa-shopping-cart text-white" style={{fontSize: '1.5rem'}}></i></a>
        </div>
        <style jsx>{`
            .nav-item {
                display: flex;
                align-items: center;
                margin-right: 15px;
                height: 4rem;
                border-top: 2px solid transparent;
                border-bottom: 2px solid transparent;
            }
            .nav-item.active {
                border-bottom: 2px solid #efefef;
            }
            .dropdown-menu {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                margin-top: 0;
            }
        `}</style>
    </nav>
)

export default Navbar