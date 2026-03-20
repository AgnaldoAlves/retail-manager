import React from 'react'
import { render } from '@testing-library/react-native'
import LojaItem from '../components/LojaItem'

const lojaMock = {
  id: '1',
  nome: 'Loja Centro',
  cidade: 'Rio de Janeiro',
  estado: 'RJ',
  totalProdutos: 3,
}

test('renderiza nome da loja', () => {
  const { getByText } = render(<LojaItem loja={lojaMock} />)

  expect(getByText('Loja Centro')).toBeTruthy()
})
