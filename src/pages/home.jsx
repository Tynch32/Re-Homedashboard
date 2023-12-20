import { CategoriesTotal } from "../components/home/CategoriesTotal"
import { UsersTotal } from "../components/home/UsersTotal"
import { ProductsTotal } from "../components/home/productsTotal"
import { LastProductInDb } from "../components/home/LastProductInDb"

export const Home = () => {
  return (
    <div className="row">
        <div className="col-lg-6">
          <LastProductInDb/>
        </div>
        
        <div className="col-lg-6">
          <UsersTotal/>
          <ProductsTotal/>
          <CategoriesTotal/>
        </div>
        
    </div>
  )
}
