import { Justify } from "react-bootstrap-icons"
function Header(props) {
    return (
        <div id="main">
            <header className="mb-1">
                <a onClick={() => changeXvalue()} href="#" className="burger-btn d-block d-xl-none ">
                    <Justify />
                </a>
            </header>

            <div class="page-heading">
                <p>HI Oriza Sativa !</p>
                <h3>What Will You Learn Today</h3>

            </div>


        </div>
    )
}
export default Header