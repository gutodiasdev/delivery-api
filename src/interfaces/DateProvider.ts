export interface DateProvider {
  addDays: (days: number) => string
  isExpired: (tokenExpireDate: string) => boolean
}
