import { CategoriesInDb } from "../components/CategoriesInDb"
import { LastProductInDb } from "../components/LastProductInDb"

export const Home = () => {
  return (
    <div className="row">
        <LastProductInDb/>
        <CategoriesInDb />
    </div>
  )
}
