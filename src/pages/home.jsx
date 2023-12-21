import { CategoriesTotal } from "../components/home/CategoriesTotal"
import { UsersTotal } from "../components/home/UsersTotal"
import { ProductsTotal } from "../components/home/productsTotal"
import { VentasTotal } from "../components/home/VentasTotal"
import { LastProductInDb } from "../components/home/LastProductInDb"

export const Home = () => {
  return (
    <div className="home_section">
      <div className="seccion1">
        <LastProductInDb />
      </div>
      <div className="seccion2">
          <VentasTotal />
          <UsersTotal />
          <ProductsTotal />
          <CategoriesTotal />
      </div>
  </div>
  )
}
