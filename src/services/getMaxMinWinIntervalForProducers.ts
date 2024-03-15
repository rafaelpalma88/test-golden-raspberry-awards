import { IIntervalList } from '@/types'
import { api } from './api'

export async function getMaxMinWinIntervalForProducers(): Promise<IIntervalList> {
  try {
    const response = await api(
      '?projection=max-min-win-interval-for-producers',
      {
        next: {
          revalidate: 10,
        },
      }
    )

    const data = await response.json()

    return data
  } catch (error) {
    throw new Error('An error occurred while fetching data')
  }
}
