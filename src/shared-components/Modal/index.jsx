/* eslint-disable react/prop-types */

import Backdrop from "./components/Backdrop"
import ModalOverlay from "./components/ModalOverlay"

function Modal({ children, onClose }) {
  return (
    <>
      <Backdrop onClose={onClose} />
      <ModalOverlay>{children}</ModalOverlay>
    </>
  )
}

export default Modal