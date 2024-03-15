import { type IStudioWithCountResponse } from '@/types'
import { api } from './api'

export async function getStudiosWithWinCount(): Promise<IStudioWithCountResponse> {
  try {
    const response = await api('?projection=studios-with-win-count', {
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
