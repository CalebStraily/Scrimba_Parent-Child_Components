function Navbar()
{
    return(
        <nav>
            <div className="row pt-3">
                <div className="col-12">
                    <ul className="list-group list-group-horizontal justify-content-center">
                        <li className="list-group-item">Home</li>
                        <li className="list-group-item">Playlists</li>
                        <li className="list-group-item">Subscriptions</li>
                        <li className="list-group-item">Profile</li>
                        <li className="list-group-item">Settings</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;