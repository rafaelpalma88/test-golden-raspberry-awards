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
import { useForm, type SubmitHandler } from 'react-hook-form'
import { type IMovie, type IMoviesWinnerInfo } from '@/types'
import { getWinnerByYearService } from '@/services/getWinnerByYearService'

interface Inputs {
  selectedYear: number
}

export function WinnerByYear(): JSX.Element {
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  )
  const [movieWinnersInfo, setMovieWinnersInfo] = useState<IMovie[]>(
    [] as IMovie[]
  )

  useEffect(() => {
    getData()
  }, [selectedYear])

  const { register, handleSubmit } = useForm<Inputs>()

  async function getData(): Promise<void> {
    try {
      const response = await getWinnerByYearService({ selectedYear })

      setMovieWinnersInfo(response)
    } catch (error) {
      console.error(error)
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
                <TableHead>Title</TableHead>
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
