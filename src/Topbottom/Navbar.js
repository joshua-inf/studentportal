import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div>
                <div className="bg-light shadow-sm px-4 Nav" style={{height:'90px', lineHeight:'90px'}}>
                    <div className="d-flex justify-content-between">
                        <div>
                        <Link to='/'>
                            Home
                        </Link>
                        </div>
                        <div className="d-flex" style={{gap:'20px'}}>
                            <Link to='/Announcements'>
                                Announcements
                            </Link>
                            <Link to='/Assignemts'>
                                Assignments
                            </Link>
                            <Link to='/Profile'>
                                Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar