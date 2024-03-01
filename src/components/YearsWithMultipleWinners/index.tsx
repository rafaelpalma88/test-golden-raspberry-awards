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
import { type IYearData } from '@/types'
import { getYearsWithMultipleWinnersService } from '@/services/getYearsWithMultipleWinnersService'

export function YearsWithMultipleWinners(): JSX.Element {
  const [yearsWithMultipleWinners, setYearsWithMultipleWinners] = useState<
    IYearData[]
  >([] as IYearData[])

  useEffect(() => {
    getData()
  }, [])

  async function getData(): Promise<void> {
    try {
      const response = await getYearsWithMultipleWinnersService()

      setYearsWithMultipleWinners(response?.years)
    } catch (error) {
      console.error(error)
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
