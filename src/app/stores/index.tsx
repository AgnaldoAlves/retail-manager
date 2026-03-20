import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native'
import { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { useLojaStore } from '../../store/lojaStore'
import LojaItem from '../../components/LojaItem'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import { useWindowDimensions } from 'react-native'

export default function Lojas() {
  const { lojas, fetchLojas } = useLojaStore()
  const router = useRouter()
  const [search, setSearch] = useState('')
  const { width } = useWindowDimensions()

  const numColumns = width > 600 ? 2 : 1

  const lojasFiltradas = lojas.filter((loja) =>
    loja.nome.toLowerCase().includes(search.toLowerCase()),
  )

  useFocusEffect(
    useCallback(() => {
      fetchLojas()
    }, []),
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lojas da Rede</Text>

      <Button
        title="Adicionar Loja"
        onPress={() => router.push('/stores/new')}
      />

      <TextInput
        placeholder="Digite aqui para buscar loja..."
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
        data={lojasFiltradas}
        key={numColumns}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LojaItem loja={item} />}
        refreshing={false}
        onRefresh={fetchLojas}
        numColumns={numColumns}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f6f6f6',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
})
