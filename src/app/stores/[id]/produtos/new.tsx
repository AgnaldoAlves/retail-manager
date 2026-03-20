import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useProdutoStore } from '../../../../store/produtoStore'

export default function NovoProduto() {
  const router = useRouter()
  const { id } = useLocalSearchParams()

  const { addProduto } = useProdutoStore()

  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')

  async function salvar() {
    if (!nome || !preco) {
      alert('Preencha todos os campos')
      return
    }

    await addProduto({
      nome,
      preco: Number(preco),
      lojaId: String(id),
    })

    router.back()
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome do produto"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Preço"
        style={styles.input}
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />

      <Button title="Salvar Produto" onPress={salvar} />
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
