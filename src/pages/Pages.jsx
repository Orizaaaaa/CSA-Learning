import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import PageContent from "../components/PageContent"

function Pages() {
    return (
        <>
            <div id="app">
                <Sidebar />
            </div>

            <div id="main" >
                <Header />
                <PageContent />
            </div>


        </>
    )
}

export default Pages