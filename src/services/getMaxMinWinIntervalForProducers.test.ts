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
    const response = await getMaxMinWinIntervalForProducers()
    if (response instanceof Error) {
      expect(response.message).toContain(
        'An error occurred while fetching data'
      )
    }
  })
})
