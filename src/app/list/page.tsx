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
import { IMoviesWinnerInfo, type IMoviesResponse } from '@/types/interfaces'
import { CustomPagination } from '@/components/CustomPagination'

interface Inputs {
  selectedYear: string
}


export default function List(): JSX.Element {
  const [selectedPage, setSelectedPage] = useState<number>(1)
  const [movies, setMovies] = useState<IMoviesResponse>({} as IMoviesResponse)
  const [filteredYear, setFilteredYear] = useState<string | null>(null)
  const [isWinner, setIsWinner] = useState<boolean | null>(null)

  useEffect(() => {
    getData()
  }, [isWinner, filteredYear, selectedPage])

  const { register, handleSubmit } = useForm<Inputs>()

  async function getData(): Promise<void> {
    try {
      let url = `https://tools.texoit.com/backend-java/api/movies?page=${selectedPage}&size=15`

      if (isWinner !== null) {
        url += `&winner=${isWinner}`
      }

      if (filteredYear !== null) {
        url += `&year=${filteredYear}`
      }

      const result = await axios.get(url)

      const { data } = result
      setMovies(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleNextPage = (pageNumber: any) => {
    setSelectedPage(pageNumber)
  };


  function handleWinnerChange(teste: 'yes' | 'no'): void {
    if (teste === 'yes') {
      setIsWinner(true)
    } else if (teste === 'no') {
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
                    <TableHead>ID</TableHead>
                    <TableHead>
                      <div className="py-2">
                        <p>Year</p>
                      </div>
                      <div className="pb-2">
                        <form
                          className="flex w-full max-w-sm items-center space-x-2 pb-5"
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
                    <TableHead>
                      <div className="py-2">
                        <p>Winner?</p>
                      </div>
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
                    <p>There is no data to show</p>
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
              {movies && (
                <CustomPagination movies={movies} selectedPage={selectedPage} handleNextPage={handleNextPage} />
              )}
              
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
