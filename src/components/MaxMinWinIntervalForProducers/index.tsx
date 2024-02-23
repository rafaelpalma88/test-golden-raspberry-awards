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
import { type IInterval, type IIntervalList } from '@/types/interfaces'

export function MaxMinWinIntervalForProducers(): JSX.Element {
  const [maxMinWinIntervalForProducers, setMaxMinWinIntervalForProducers] =
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    useState<IIntervalList>({} as IIntervalList)

  useEffect(() => {
    getData()
  }, [])

  async function getData(): Promise<void> {
    try {
      const result = await axios.get(
        `https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers`
      )

      const maxMinIntervalData: IIntervalList = result.data
      setMaxMinWinIntervalForProducers(maxMinIntervalData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Producers with longest and shortest interval between wins
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="pb-5">
          <h1 className="text-xl font-semibold text-black">Maximum</h1>

          <Table className="pb-2">
            <TableHeader>
              <TableRow>
                <TableHead>Producer</TableHead>
                <TableHead>Interval</TableHead>
                <TableHead>Previous Year</TableHead>
                <TableHead>Following year</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {maxMinWinIntervalForProducers?.max?.map((item: IInterval) => (
                <TableRow key={item.producer}>
                  <TableCell>{item.producer}</TableCell>
                  <TableCell>{item.interval}</TableCell>
                  <TableCell>{item.previousWin}</TableCell>
                  <TableCell>{item.followingWin}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="pb-5">
          <h1 className="text-xl font-semibold text-black">Minimum</h1>

          <Table className="pb-2">
            <TableHeader>
              <TableRow>
                <TableHead>Producer</TableHead>
                <TableHead>Interval</TableHead>
                <TableHead>Previous Year</TableHead>
                <TableHead>Following year</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {maxMinWinIntervalForProducers?.min?.map((item: IInterval) => (
                <TableRow key={item.producer}>
                  <TableCell>{item.producer}</TableCell>
                  <TableCell>{item.interval}</TableCell>
                  <TableCell>{item.previousWin}</TableCell>
                  <TableCell>{item.followingWin}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
