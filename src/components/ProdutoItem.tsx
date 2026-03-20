import { View, Text, TouchableOpacity } from 'react-native'
import { Produto } from '../services/produtoService'
import { formatCurrency } from '../utils/formatCurrency'

interface Props {
  produto: Produto
  onDelete: () => void
  onEdit?: () => void
}

/**
 * componente de item da lista de produtos
 */
export default function ProdutoItem({ produto, onDelete, onEdit }: Props) {
  return (
    <View
      style={{
        flex: 1,
        margin: 8,
        padding: 16,
        borderBottomWidth: 1,
        borderColor: '#eee',
      }}
    >
      <Text style={{ fontSize: 18 }}>{produto.nome}</Text>

      <Text>{formatCurrency(produto.preco)}</Text>

      <TouchableOpacity
        style={{
          marginTop: 8,
          backgroundColor: '#2980b9',
          padding: 8,
          borderRadius: 4,
        }}
        onPress={onEdit}
      >
        <Text style={{ color: '#fff' }}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginTop: 8,
          backgroundColor: '#c0392b',
          padding: 8,
          borderRadius: 4,
        }}
        onPress={onDelete}
      >
        <Text style={{ color: '#fff' }}>Remover</Text>
      </TouchableOpacity>
    </View>
  )
}
