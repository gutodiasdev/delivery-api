import dayjs from 'dayjs'

export interface DateProvider {
  addDays: (days: number) => string
}

export class DateProviderImpl implements DateProvider {
  addDays(days: number): string {
    return dayjs().add(days, 'days').toString()
  }
}
