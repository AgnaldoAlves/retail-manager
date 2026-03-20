import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f6f6f6',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  field: {
    marginBottom: 16,
  },

  label: {
    marginBottom: 6,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
  },

  button: {
    marginTop: 20,
  },

  inputError: {
    borderColor: '#ff4d4f',
  },

  errorText: {
    color: '#ff4d4f',
    marginTop: 4,
    fontSize: 12,
  },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  cidade: {
    marginTop: 4,
    color: '#666',
  },

  totalProdutos: {
    marginTop: 8,
    color: '#333',
  },

  actions: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 16,
  },

  edit: {
    color: '#1677ff',
    fontWeight: '500',
  },

  delete: {
    color: '#ff4d4f',
    fontWeight: '500',
  },
})
