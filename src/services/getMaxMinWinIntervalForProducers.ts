import type { IIntervalList } from '@/types'

import { api } from './api'

interface CustomRequestInit extends RequestInit {
  next?: {
    revalidate: number
  }
}

const customRequestInit: CustomRequestInit = {
  next: {
    revalidate: 10,
  },
}

export async function getMaxMinWinIntervalForProducers(): Promise<IIntervalList> {
  try {
    const response = await api(
      '?projection=max-min-win-interval-for-producers',
      customRequestInit
    )

    const data = await response.json()

    return data
  } catch (error) {
    throw new Error('An error occurred while fetching data')
  }
}
