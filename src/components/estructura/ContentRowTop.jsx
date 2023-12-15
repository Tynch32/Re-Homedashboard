import { Home } from "../../pages/home"
import { ContentRowProducts } from "./ContentRowProducts"
import { TableProducts } from "./TableProducts"

export const ContentRowTop = () => {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <TableProducts/>
        </div>
    )
}
