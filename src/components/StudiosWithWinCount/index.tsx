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
import { IStudio } from '@/types/interfaces'

export function StudiosWithWinCount(): JSX.Element {
  const [studiosWithWinCount, setStudiosWithWinCount] = useState<IStudio[]>()

  useEffect(() => {
    getData()
  }, [])

  async function getData(): Promise<void> {
    try {
      const result = await axios.get(
        `https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count`
      )

      const { studios } = result.data
      setStudiosWithWinCount(studios)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 3 studios with winners</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Win Count</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {studiosWithWinCount
              ?.sort((a: IStudio, b: IStudio) => b.winCount - a.winCount)
              .slice(0, 3)
              .map((item: IStudio) => (
                <TableRow key={item.name}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.winCount}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
