import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { Picker } from '@react-native-picker/picker'
import { ESTADOS_BRASIL } from '../../constants/estados'
import { styles } from '../../css/new.styles'

import { useLojaStore } from '../../store/lojaStore'

const UFS = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
]

export default function NewStore() {
  const router = useRouter()

  const { addLoja } = useLojaStore()

  const [nome, setNome] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('SP')

  const [errors, setErrors] = useState({
    nome: '',
    cidade: '',
    estado: '',
  })

  async function handleCreate() {
    const valido = validarCampos()

    if (!validarCampos()) {
      return
    }

    await addLoja({
      nome,
      cidade,
      estado,
    })

    router.push('/stores')
  }

  function validarCampos() {
    const novosErros = {
      nome: '',
      cidade: '',
      estado: '',
    }

    if (!nome.trim()) {
      novosErros.nome = 'Nome da loja é obrigatório'
    }

    if (!cidade.trim()) {
      novosErros.cidade = 'Cidade é obrigatória'
    }

    if (!estado) {
      novosErros.estado = 'Selecione um estado'
    }

    setErrors(novosErros)

    return !novosErros.nome && !novosErros.cidade && !novosErros.estado
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Loja</Text>

      <View style={styles.field}>
        <Text style={styles.label}>Nome da Loja</Text>

        <TextInput
          style={[styles.input, errors.nome && styles.inputError]}
          value={nome}
          onChangeText={setNome}
          placeholder="Ex: Loja do Bairro"
        />

        {errors.nome ? (
          <Text style={styles.errorText}>{errors.nome}</Text>
        ) : null}
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Cidade</Text>

        <TextInput
          style={[styles.input, errors.cidade && styles.inputError]}
          value={cidade}
          onChangeText={setCidade}
          placeholder="Ex: Rio de Janeiro"
        />
        {errors.cidade ? (
          <Text style={styles.errorText}>{errors.cidade}</Text>
        ) : null}
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Estado</Text>

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
        <Button title="Salvar Loja" onPress={handleCreate} />
      </View>
    </View>
  )
}
