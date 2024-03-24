import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getYearsWithMultipleWinnersService } from '@/services/getYearsWithMultipleWinnersService'
import { type IYearData } from '@/types'

export async function YearsWithMultipleWinners(): Promise<JSX.Element> {
  const yearsWithMultipleWinners = await getYearsWithMultipleWinnersService()

  return (
    <Card>
      <CardHeader>
        <CardTitle>List years with multiple winners</CardTitle>
      </CardHeader>
      <CardContent>
        {yearsWithMultipleWinners?.years?.length > 0 && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead>Win Count</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {yearsWithMultipleWinners?.years?.map((item: IYearData) => (
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
