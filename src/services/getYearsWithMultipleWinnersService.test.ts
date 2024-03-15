import { mockYearsWithMultipleWinnersService } from '../../__tests__/mocks/api/mockYearsWithMultipleWinnersService'
import { getYearsWithMultipleWinnersService } from './getYearsWithMultipleWinnersService'

describe('API: getYearsWithMultipleWinnersService', () => {
  it('should return maximun and minimun interval for producers', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockYearsWithMultipleWinnersService),
    })
    const response = await getYearsWithMultipleWinnersService()
    expect(response).toEqual(mockYearsWithMultipleWinnersService)
  })

  it('should return API error', async () => {
    global.fetch = jest
      .fn()
      .mockRejectedValueOnce('An error occurred while fetching data')

    try {
      await getYearsWithMultipleWinnersService()
    } catch (error: any) {
      expect(error.message).toBe('An error occurred while fetching data')
    }
  })
})
