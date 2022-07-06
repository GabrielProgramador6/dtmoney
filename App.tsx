import styled from "styled-components"
import Modal, { setAppElement } from 'react-modal'
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import { useState, ReactNode, Children } from "react"
import { NewTransactionModal } from "./components/NewTransactionModal"
import { TransactionsProvider, useTransactions } from "./hooks/useTransactions"

Modal.setAppElement('#root')

export default function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider >
  )
}