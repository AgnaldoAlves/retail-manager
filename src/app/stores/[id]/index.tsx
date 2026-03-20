import { View, Text, TouchableOpacity } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useLojaStore } from '../../../store/lojaStore'

export default function LojaDetailScreen() {
  const router = useRouter()

  const { id } = useLocalSearchParams()

  const { lojas } = useLojaStore()

  const loja = lojas.find((l) => l.id === id)

  if (!loja) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Loja não encontrada</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{loja.nome}</Text>

      <Text style={{ marginTop: 8 }}>Cidade: {loja.cidade}</Text>

      <Text>Estado: {loja.estado}</Text>

      <Text>Produtos cadastrados: {loja.totalProdutos ?? 0}</Text>

      <TouchableOpacity
        style={{
          marginTop: 24,
          backgroundColor: '#333',
          padding: 12,
          borderRadius: 6,
        }}
        onPress={() => router.push(`/lojas/${loja.id}/produtos`)}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>Ver Produtos</Text>
      </TouchableOpacity>
    </View>
  )
}
