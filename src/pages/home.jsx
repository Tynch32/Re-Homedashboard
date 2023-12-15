import { CategoriesInDb } from "../components/home/CategoriesInDb"
import { LastProductInDb } from "../components/home/LastProductInDb"

export const Home = () => {
  return (
    <div className="row">
        <LastProductInDb/>
        <CategoriesInDb />
    </div>
  )
}
