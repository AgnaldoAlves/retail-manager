import { View, FlatList, TextInput } from 'react-native'
import { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useProdutoStore } from '../../../store/produtoStore'
import ProdutoItem from '../../../components/ProdutoItem'
import { Produto } from '../../../services/produtoService'
import { useRouter } from 'expo-router'
import { Button } from 'react-native'
import { useWindowDimensions } from 'react-native'

export default function ProdutosScreen() {
  const { id } = useLocalSearchParams()

  const { produtos, fetchProdutos, deleteProduto, loading } = useProdutoStore()
  const router = useRouter()
  const [search, setSearch] = useState('')

  const { width } = useWindowDimensions()

  const numColumns = width > 600 ? 2 : 1

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(search.toLowerCase()),
  )

  useEffect(() => {
    if (id) {
      fetchProdutos(String(id))
    }
  }, [id])

  const renderItem = ({ item }: { item: Produto }) => (
    <ProdutoItem
      produto={item}
      onDelete={() => deleteProduto(item.id)}
      onEdit={() => router.push(`/stores/${id}/produtos/${item.id}/edit`)}
    />
  )

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Adicionar Produto"
        onPress={() => router.push(`/stores/${id}/produtos/new`)}
      />
      <TextInput
        placeholder="Buscar produtos..."
        value={search}
        onChangeText={setSearch}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
          borderRadius: 6,
        }}
      />

      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => String(item.id)}
        key={numColumns}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <ProdutoItem
            produto={item}
            onDelete={() => deleteProduto(item.id)}
            onEdit={() => router.push(`/stores/${id}/produtos/${item.id}/edit`)}
          />
        )}
      />
    </View>
  )
}
