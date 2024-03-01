import { api } from './api'
import { getYearsWithMultipleWinnersService } from './getYearsWithMultipleWinnersService'

describe('API: getYearsWithMultipleWinnersService', () => {
  it('should return maximun and minimun interval for producers', async () => {
    const data = [
      { year: 1986, winnerCount: 2 },
      { year: 1990, winnerCount: 2 },
      { year: 2015, winnerCount: 2 },
    ]

    jest.spyOn(api, 'get').mockResolvedValue({
      data,
    })
    const response = await getYearsWithMultipleWinnersService()
    expect(response).toBe(data)
  })
})
