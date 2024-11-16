import { useParams } from "react-router-dom"
import OrdersList from "../components/OrderList"

function Sell() {

  const { id } = useParams()

  return (
    <OrdersList id={id} type="sell" />
  )

}

export default Sell