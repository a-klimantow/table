import { useLocalObservable } from 'mobx-react-lite'

export const useField = (
  value = '',
  type: 'text' | 'password' = 'text',
  validate = new RegExp('')
) =>
  useLocalObservable(() => ({
    value,
    type,
    error: false,
    helperText: '',

    changeValue(value: string): void {
      this.value = value
      this.error = false
      this.helperText = ''
    },

    get isValueHidden(): boolean {
      return this.type === 'password'
    },

    toggleType(): void {
      this.type = this.isValueHidden ? 'text' : 'password'
    },

    get currentValue(): string {
      return this.value.trim()
    },

    setError(text = ''): void {
      this.helperText = text
      this.error = true
    },

    get isValid(): boolean {
      return validate.test(this.currentValue)
    },

    onBlur(text = ''): void {
      if (!this.isValid) {
        this.error = true
        this.helperText = text
      }
    },
  }))
