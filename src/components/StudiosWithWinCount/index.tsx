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
import { type IStudio } from '@/types'
import { getStudiosWithWinCount } from '@/services/getStudiosWithWinCount'

export function StudiosWithWinCount(): JSX.Element {
  const [studiosWithWinCount, setStudiosWithWinCount] = useState<IStudio[]>([])

  useEffect(() => {
    getData()
  }, [])

  async function getData(): Promise<void> {
    try {
      const response = await getStudiosWithWinCount()

      const { studios } = response

      setStudiosWithWinCount(studios)
    } catch (error) {
      console.error(error)
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
            {studiosWithWinCount.length > 0 &&
              studiosWithWinCount?.slice(0, 3).map((item: IStudio) => (
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
