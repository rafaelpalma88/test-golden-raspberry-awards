import { type IMovie } from '@/types'
import { api } from './api'

interface WinnerByYearProps {
  selectedYear: number
}

export async function getWinnerByYearService({
  selectedYear = new Date().getFullYear(),
}: WinnerByYearProps): Promise<IMovie[]> {
  try {
    const { data } = await api.get<IMovie[]>(
      `?winner=true&year=${selectedYear}`
    )

    return data
  } catch (error) {
    throw new Error('An error occurred while fetching data')
  }
}
