import { useParams } from "react-router-dom"

import OrderList from "../OrderList"

function Sell() {

  const { id } = useParams()

  return (
    <OrderList id={id} type="sell" />
  )

}

export default Sell