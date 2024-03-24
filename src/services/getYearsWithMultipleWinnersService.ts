import { type IYearsWithWinnerCount } from '@/types'

import { api } from './api'

export async function getYearsWithMultipleWinnersService(): Promise<IYearsWithWinnerCount> {
  try {
    const response = await api('?projection=years-with-multiple-winners', {
      next: {
        revalidate: 10,
      },
    })

    const data = await response.json()

    return data
  } catch (error) {
    throw new Error('An error occurred while fetching data')
  }
}
