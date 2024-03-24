import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getStudiosWithWinCount } from '@/services/getStudiosWithWinCount'
import { type IStudio } from '@/types'

export async function StudiosWithWinCount(): Promise<JSX.Element> {
  const { studios } = await getStudiosWithWinCount()

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
            {studios.length > 0 &&
              studios?.slice(0, 3).map((item: IStudio) => (
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
