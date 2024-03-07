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

  it('should return API error', async () => {
    jest
      .spyOn(api, 'get')
      .mockRejectedValue(new Error('An error occurred while fetching data'))
    const response = await getYearsWithMultipleWinnersService()
    if (response instanceof Error) {
      expect(response.message).toContain(
        'An error occurred while fetching data'
      )
    }
  })
})
