'use client'

import { useCallback, useEffect, useState } from 'react'

import { type SubmitHandler, useForm } from 'react-hook-form'

import { CustomPagination } from '@/components/CustomPagination'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
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
import { getMoviesListService } from '@/services/getMoviesListService'
import { type IMoviesResponse, type IMoviesWinnerInfo } from '@/types'

interface Inputs {
  selectedYear: string
}

export default function List(): JSX.Element {
  const [selectedPage, setSelectedPage] = useState<number>(0)
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [movies, setMovies] = useState<IMoviesResponse>({} as IMoviesResponse)
  const [filteredYear, setFilteredYear] = useState<string | null>(null)
  const [isWinner, setIsWinner] = useState<boolean | null>(null)

  const { register, handleSubmit } = useForm<Inputs>()

  const getData = useCallback(async () => {
    try {
      const response = await getMoviesListService({
        selectedPage,
        isWinner,
        filteredYear,
      })

      if (response instanceof Error) {
        console.error(
          response instanceof Error ? response.message : 'Unknown error'
        )
        return
      }

      setMovies(response)
    } catch (error) {
      console.error(error)
    }
  }, [isWinner, filteredYear, selectedPage])

  useEffect(() => {
    getData()
  }, [getData])

  function handleNextPage(pageNumber: number): void {
    setSelectedPage(pageNumber - 1)
  }

  function handleWinnerChange(isWinnerSelected: 'yes' | 'no' | 'all'): void {
    setSelectedPage(0)
    if (isWinnerSelected === 'yes') {
      setIsWinner(true)
    } else if (isWinnerSelected === 'no') {
      setIsWinner(false)
    } else if (isWinnerSelected === 'all') {
      setIsWinner(null)
    }
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setSelectedPage(0)
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
                          data-testid="filtered-year"
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
                        <Select
                          data-testid="select-iswinner"
                          onValueChange={handleWinnerChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Yes/No" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Yes/No</SelectItem>
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
