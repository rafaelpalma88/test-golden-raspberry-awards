import { type IYearsWithWinnerCount } from '@/types'
import { api } from './api'

export async function getYearsWithMultipleWinnersService(): Promise<IYearsWithWinnerCount> {
  try {
    const { data } = await api.get<IYearsWithWinnerCount>(
      '?projection=years-with-multiple-winners'
    )

    return data
  } catch (error) {
    throw new Error('An error occurred while fetching data')
  }
}
