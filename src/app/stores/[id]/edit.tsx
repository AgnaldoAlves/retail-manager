import { View, Text, TextInput, Button } from 'react-native'
import { useState } from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { Picker } from '@react-native-picker/picker'

import { useLojaStore } from '../../../store/lojaStore'
import { ESTADOS_BRASIL } from '../../../constants/estados'
import { styles } from '../../../css/new.styles'

export default function EditStore() {
  const router = useRouter()
  const { id } = useLocalSearchParams()

  const { lojas, updateLoja } = useLojaStore()

  const loja = lojas.find((l) => l.id === id)

  const [nome, setNome] = useState(loja?.nome ?? '')
  const [cidade, setCidade] = useState(loja?.cidade ?? '')
  const [estado, setEstado] = useState(loja?.estado ?? '')

  if (!loja) {
    return <Text>Loja não encontrada</Text>
  }

  async function handleUpdate() {
    if (!nome.trim()) {
      alert('Nome da loja é obrigatório')
      return
    }

    await updateLoja(String(id), {
      nome,
      cidade,
      estado,
    })

    router.replace('/stores')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Loja</Text>

      <View style={styles.field}>
        <Text style={styles.label}>Nome da Loja *</Text>

        <TextInput style={styles.input} value={nome} onChangeText={setNome} />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Cidade *</Text>

        <TextInput
          style={styles.input}
          value={cidade}
          onChangeText={setCidade}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Estado *</Text>

        <Picker
          selectedValue={estado}
          onValueChange={(value) => setEstado(value)}
        >
          {ESTADOS_BRASIL.map((estado) => (
            <Picker.Item
              key={estado.uf}
              label={`${estado.nome} (${estado.uf})`}
              value={estado.uf}
            />
          ))}
        </Picker>
      </View>

      <View style={styles.button}>
        <Button title="Salvar Alterações" onPress={handleUpdate} />
      </View>
    </View>
  )
}
