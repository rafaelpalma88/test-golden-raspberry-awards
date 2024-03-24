import { getWinnerByYearService } from './getWinnerByYearService'
import { mockWinnerByYearService } from '../../__tests__/mocks/api/mockWinnerByYearService'

describe('API: getWinnerByYearService', () => {
  it('should return maximun and minimun interval for producers', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockWinnerByYearService),
    })
    const response = await getWinnerByYearService({ selectedYear: 2016 })
    expect(response).toEqual(mockWinnerByYearService)
  })

  it('should return API error', async () => {
    global.fetch = jest
      .fn()
      .mockRejectedValueOnce('An error occurred while fetching data')

    try {
      await getWinnerByYearService({ selectedYear: 2016 })
    } catch (error: any) {
      expect(error.message).toBe('An error occurred while fetching data')
    }
  })
})
