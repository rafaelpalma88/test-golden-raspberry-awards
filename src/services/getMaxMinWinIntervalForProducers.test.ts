import { mockCityAPIResponse } from '../../__tests__/mocks/api/mockMaxMinWinIntervalForProducersAPIResponse'
import { api } from './api'
import { getMaxMinWinIntervalForProducers } from './getMaxMinWinIntervalForProducers'

describe('API: getMaxMinWinIntervalForProducers', () => {
  it('should return maximun and minimun interval for producers', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({
      data: mockCityAPIResponse,
    })
    const response = await getMaxMinWinIntervalForProducers()
    expect(response).toBe(mockCityAPIResponse)
  })

  it('should return API error', async () => {
    jest
      .spyOn(api, 'get')
      .mockRejectedValue(new Error('An error occurred while fetching data'))
    try {
      await getMaxMinWinIntervalForProducers()
    } catch (error: any) {
      expect(error.message).toBe('An error occurred while fetching data')
    }
  })
})
