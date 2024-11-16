import { useParams } from "react-router-dom"
import OrdersList from "../components/OrderList"

function Buy() {

  const { id } = useParams()

  return (
    <OrdersList id={id} type="buy" />
  )
}

export default Buy