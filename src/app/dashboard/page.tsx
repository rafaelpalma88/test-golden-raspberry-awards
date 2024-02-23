import { MaxMinWinIntervalForProducers } from '@/components/MaxMinWinIntervalForProducers'
import { YearsWithMultipleWinners } from '@/components/YearsWithMultipleWinners'
import { StudiosWithWinCount } from '@/components/StudiosWithWinCount'
import { WinnerByYear } from '@/components/WinnerByYear'

export default function Dashboard(): JSX.Element {
  return (
    <div>
      <div className="px-4 py-2">
        <div className="px-4 py-5">
          <h1 className="text-xl">Dashboard</h1>
        </div>
        <div className="flex justify-center">
          <div className="w-1/2 p-4">
            <YearsWithMultipleWinners />
          </div>
          <div className="w-1/2 p-4">
            <StudiosWithWinCount />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-1/2 p-4">
            <MaxMinWinIntervalForProducers />
          </div>
          <div className="w-1/2 p-4">
            <WinnerByYear />
          </div>
        </div>
      </div>
    </div>
  )
}
