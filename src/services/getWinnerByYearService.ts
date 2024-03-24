import { type IMovie } from '@/types'

import { api } from './api'

interface WinnerByYearProps {
  selectedYear: number
}

export async function getWinnerByYearService({
  selectedYear = new Date().getFullYear(),
}: WinnerByYearProps): Promise<IMovie[]> {
  try {
    const response = await api(`?winner=true&year=${selectedYear}`, {
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
