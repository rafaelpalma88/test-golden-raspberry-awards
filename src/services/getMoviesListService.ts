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

    const response = await api(url, {
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
