import { api } from './api'
import { getMaxMinWinIntervalForProducers } from './getMaxMinWinIntervalForProducers'

describe('API: getMaxMinWinIntervalForProducers', () => {
  it('should return maximun and minimun interval for producers', async () => {
    const data = {
      min: [
        {
          producer: 'Joel Silver',
          interval: 1,
          previousWin: 1990,
          followingWin: 1991,
        },
      ],
      max: [
        {
          producer: 'Matthew Vaughn',
          interval: 13,
          previousWin: 2002,
          followingWin: 2015,
        },
      ],
    }

    jest.spyOn(api, 'get').mockResolvedValue({
      data,
    })
    const response = await getMaxMinWinIntervalForProducers()
    expect(response).toBe(data)
  })
})
