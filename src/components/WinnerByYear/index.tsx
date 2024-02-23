'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { type IMoviesWinnerInfo } from '@/types/interfaces'

interface Inputs {
  selectedYear: number
}

export function WinnerByYear(): JSX.Element {
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  )
  const [movieWinnersInfo, setMovieWinnersInfo] = useState<IMoviesWinnerInfo[]>(
    [] as IMoviesWinnerInfo[]
  )

  useEffect(() => {
    getData()
  }, [selectedYear])

  const { register, handleSubmit } = useForm<Inputs>()

  async function getData(): Promise<void> {
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}?winner=true&year=${selectedYear}`
      )

      const movieWinnersData: IMoviesWinnerInfo[] = result.data
      setMovieWinnersInfo(movieWinnersData)
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { selectedYear } = data
    setSelectedYear(selectedYear)
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>List movie winners by year</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="flex w-full max-w-sm items-center space-x-2 pb-5"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="number"
            placeholder="Email"
            defaultValue={new Date().getFullYear()}
            {...register('selectedYear')}
          />
          <Button type="submit">Submit</Button>
        </form>
        {movieWinnersInfo.length > 0 && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Win Count</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {movieWinnersInfo?.map((item: IMoviesWinnerInfo) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.year}</TableCell>
                  <TableCell>{item.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  )
}
