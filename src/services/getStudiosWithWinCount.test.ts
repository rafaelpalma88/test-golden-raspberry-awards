import { mockStudiosWithCount } from '../../__tests__/mocks/api/mockStudiosWithCount'
import { getStudiosWithWinCount } from './getStudiosWithWinCount'

describe('API: getStudiosWithWinCount', () => {
  it('should return studios list with win count', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockStudiosWithCount),
    })
    const response = await getStudiosWithWinCount()
    expect(response).toEqual(mockStudiosWithCount)
  })

  it('should return API error', async () => {
    global.fetch = jest
      .fn()
      .mockRejectedValueOnce('An error occurred while fetching data')

    try {
      await getStudiosWithWinCount()
    } catch (error: any) {
      expect(error.message).toBe('An error occurred while fetching data')
    }
  })
})
