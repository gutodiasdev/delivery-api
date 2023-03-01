import dayjs from 'dayjs'

import { DateProvider } from '@/domain/interfaces'

export class DateProviderImpl implements DateProvider {
  addDays(days: number): string {
    return dayjs().add(days, 'days').toString()
  }

  isExpired(tokenExpireDate: string): boolean {
    return dayjs().isAfter(tokenExpireDate)
  }
}
