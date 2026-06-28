"use client"

import { useAuthModal } from "@/store/useAuthModalStore"
import Modal from "./Modal"

export default function LoginModal() {
  const { openRegister, isLoginOpen, closeLogin } = useAuthModal()

  return (
    <Modal title="Login" onClose={closeLogin} isOpen={isLoginOpen}>
      <p>Login Modal</p>
    </Modal>
  )
}
