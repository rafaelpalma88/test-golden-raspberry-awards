import { mockCityAPIResponse } from '../../__tests__/mocks/api/mockMaxMinWinIntervalForProducersAPIResponse'
import { getMaxMinWinIntervalForProducers } from './getMaxMinWinIntervalForProducers'

describe('API: getMaxMinWinIntervalForProducers', () => {
  it('should return maximun and minimun interval for producers', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockCityAPIResponse),
    })
    const response = await getMaxMinWinIntervalForProducers()
    expect(response).toEqual(mockCityAPIResponse)
  })

  it('should return API error', async () => {
    global.fetch = jest
      .fn()
      .mockRejectedValueOnce('An error occurred while fetching data')

    try {
      await getMaxMinWinIntervalForProducers()
    } catch (error: any) {
      expect(error.message).toBe('An error occurred while fetching data')
    }
  })
})
