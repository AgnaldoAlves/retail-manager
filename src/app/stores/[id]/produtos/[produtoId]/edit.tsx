import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useProdutoStore } from '../../../../../store/produtoStore'
import { useState, useEffect } from 'react'

export default function EditProduto() {
  const { produtoId } = useLocalSearchParams()
  const router = useRouter()

  const { produtos, updateProduto } = useProdutoStore()

  const produto = produtos.find((p) => p.id === produtoId)

  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')

  useEffect(() => {
    if (produto) {
      setNome(produto.nome)
      setPreco(String(produto.preco))
    }
  }, [produto])

  async function salvar() {
    await updateProduto(String(produtoId), {
      nome,
      preco: Number(preco),
    })

    router.back()
  }

  return (
    <View style={styles.container}>
      <TextInput value={nome} onChangeText={setNome} style={styles.input} />

      <TextInput
        value={preco}
        onChangeText={setPreco}
        style={styles.input}
        keyboardType="numeric"
      />

      <Button title="Salvar Alterações" onPress={salvar} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 6,
  },
})
