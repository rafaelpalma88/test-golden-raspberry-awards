import { type IMoviesResponse } from '@/types'
import { api } from './api'

export interface MoviesListProps {
  selectedPage: number
  isWinner?: boolean | null
  filteredYear?: string | null
}

export async function getMoviesListService({
  selectedPage = 1,
  isWinner,
  filteredYear,
}: MoviesListProps): Promise<IMoviesResponse> {
  try {
    let url = `?page=${selectedPage}&size=15`

    if (isWinner !== null) {
      url += `&winner=${isWinner}`
    }

    if (filteredYear !== null) {
      url += `&year=${filteredYear}`
    }

    const { data } = await api.get<IMoviesResponse>(url)

    return data
  } catch (error) {
    console.error('error')
    throw error
  }
}
