import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import ProdutoItem from '../components/ProdutoItem'

const produtoMock = {
  id: '1',
  nome: 'Notebook',
  preco: 3500,
  lojaId: '1',
}

test('renderiza nome do produto', () => {
  const { getByText } = render(
    <ProdutoItem produto={produtoMock} onDelete={() => {}} onEdit={() => {}} />,
  )

  expect(getByText('Notebook')).toBeTruthy()
})

test('chama função remover ao clicar', () => {
  const onDeleteMock = jest.fn()

  const { getByText } = render(
    <ProdutoItem
      produto={produtoMock}
      onDelete={onDeleteMock}
      onEdit={() => {}}
    />,
  )

  fireEvent.press(getByText('Remover'))

  expect(onDeleteMock).toHaveBeenCalled()
})
