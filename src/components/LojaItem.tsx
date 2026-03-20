import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { useRouter } from 'expo-router'
import { Loja } from '../services/lojaService'
import { useLojaStore } from '../store/lojaStore'
import { styles } from '../css/new.styles'

interface Props {
  loja: Loja
}

export default function LojaItem({ loja }: Props) {
  const router = useRouter()
  const { deleteLoja } = useLojaStore()

  // abre loja
  function openLoja() {
    router.push(`/stores/${loja.id}/produtos`)
  }
  // editar loja
  function editLoja() {
    router.push(`/stores/${loja.id}/edit`)
  }

  // excluir loja
  function handleDelete() {
    const confirmDelete = confirm('Tem certeza que deseja excluir esta loja?')

    if (confirmDelete) {
      deleteLoja(loja.id)
    }
  }

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={openLoja}>
        <Text style={styles.nome}>{loja.nome}</Text>

        <Text style={styles.cidade}>
          {loja.cidade} - {loja.estado}
        </Text>

        <Text style={styles.totalProdutos}>
          Produtos cadastrados: {loja.totalProdutos ?? 0}
        </Text>
      </TouchableOpacity>

      <View style={styles.actions}>
        <TouchableOpacity onPress={editLoja}>
          <Text style={styles.edit}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDelete}>
          <Text style={styles.delete}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
