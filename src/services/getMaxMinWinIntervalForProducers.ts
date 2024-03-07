import { type IIntervalList } from '@/types'
import { api } from './api'

export async function getMaxMinWinIntervalForProducers(): Promise<IIntervalList> {
  try {
    const { data } = await api.get<IIntervalList>(
      '?projection=max-min-win-interval-for-producers'
    )

    return data
  } catch (error) {
    throw new Error('An error occurred while fetching data')
  }
}
