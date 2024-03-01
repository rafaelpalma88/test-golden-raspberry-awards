import { type IStudioWithCountResponse } from '@/types'
import { api } from './api'

export async function getStudiosWithWinCount(): Promise<IStudioWithCountResponse> {
  try {
    const { data } = await api.get<IStudioWithCountResponse>(
      '?projection=studios-with-win-count'
    )

    return data
  } catch (error) {
    console.error('error')
    throw error
  }
}
