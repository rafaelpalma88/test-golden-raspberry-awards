'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Card, CardContent } from '@/components/ui/card'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { type IMoviesWinnerInfo, type IMoviesResponse } from '@/types'
import { CustomPagination } from '@/components/CustomPagination'

interface Inputs {
  selectedYear: string
}

export default function List(): JSX.Element {
  const [selectedPage, setSelectedPage] = useState<number>(1)
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [movies, setMovies] = useState<IMoviesResponse>({} as IMoviesResponse)
  const [filteredYear, setFilteredYear] = useState<string | null>(null)
  const [isWinner, setIsWinner] = useState<boolean | null>(null)

  useEffect(() => {
    getData()
  }, [isWinner, filteredYear, selectedPage])

  const { register, handleSubmit } = useForm<Inputs>()

  async function getData(): Promise<void> {
    try {
      let url = `${process.env.NEXT_PUBLIC_API_BASE_URL}?page=${selectedPage}&size=15`

      if (isWinner !== null) {
        url += `&winner=${isWinner}`
      }

      if (filteredYear !== null) {
        url += `&year=${filteredYear}`
      }

      const result = await axios.get(url)

      const moviesData: IMoviesResponse = result.data
      setMovies(moviesData)
    } catch (error) {
      console.log(error)
    }
  }

  function handleNextPage(pageNumber: number): void {
    setSelectedPage(pageNumber)
  }

  function handleWinnerChange(isWinnerSelected: 'yes' | 'no'): void {
    if (isWinnerSelected === 'yes') {
      setIsWinner(true)
    } else if (isWinnerSelected === 'no') {
      setIsWinner(false)
    }
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { selectedYear } = data
    setFilteredYear(selectedYear)
  }

  return (
    <div>
      <div className="px-4 py-2">
        <div className="px-4 py-5">
          <h1 className="text-xl">Movies List</h1>
        </div>
        <div className="p-4">
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[140px]">ID</TableHead>
                    <TableHead className="w-[240px]">
                      <div className="py-2">Year</div>
                      <div className="pb-2">
                        <form
                          className="flex w-full max-w-sm items-center space-x-2 pb-5"
                          // eslint-disable-next-line @typescript-eslint/no-misused-promises
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          <Input
                            type="number"
                            placeholder="Filter by year"
                            defaultValue={new Date().getFullYear()}
                            {...register('selectedYear')}
                          />
                          <Button type="submit">Submit</Button>
                        </form>
                      </div>
                    </TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="w-[140px]">
                      <div className="py-2">Winner?</div>
                      <div className="pb-2">
                        <Select onValueChange={handleWinnerChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Yes/No" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {movies?.content?.length === 0 && (
                    <TableRow>
                      <TableCell> There is no data to show</TableCell>
                    </TableRow>
                  )}
                  {movies?.content?.map((item: IMoviesWinnerInfo) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.year}</TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.winner ? 'Yes' : 'No'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <div className="py-5">
              <CustomPagination
                movies={movies}
                selectedPage={selectedPage}
                handleNextPage={handleNextPage}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
