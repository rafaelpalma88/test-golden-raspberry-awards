'use client'

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
import { type IYearData } from '@/types/interfaces'

export function YearsWithMultipleWinners(): JSX.Element {
  const [yearsWithMultipleWinners, setYearsWithMultipleWinners] = useState<
    IYearData[]
  >([] as IYearData[])

  useEffect(() => {
    getData()
  }, [])

  async function getData(): Promise<void> {
    try {
      // TODO: use environment variables proccess.env.API_URL
      const result = await axios.get(
        `https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners`
      )
      const yearsData: IYearData[] = result.data.years

      setYearsWithMultipleWinners(yearsData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>List years with multiple winners</CardTitle>
      </CardHeader>
      <CardContent>
        {yearsWithMultipleWinners.length > 0 && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead>Win Count</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {yearsWithMultipleWinners?.map((item: IYearData) => (
                <TableRow key={item.year}>
                  <TableCell>{item.year}</TableCell>
                  <TableCell>{item.winnerCount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  )
}
