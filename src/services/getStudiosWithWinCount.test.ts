import { api } from './api'
import { getStudiosWithWinCount } from './getStudiosWithWinCount'

describe('API: getStudiosWithWinCount', () => {
  it('should return studios list with win count', async () => {
    const data = {
      studios: [
        { name: 'Columbia Pictures', winCount: 7 },
        { name: 'Paramount Pictures', winCount: 6 },
        { name: 'Warner Bros.', winCount: 5 },
        { name: '20th Century Fox', winCount: 4 },
        { name: 'MGM', winCount: 3 },
        { name: 'Universal Studios', winCount: 2 },
        { name: 'Universal Pictures', winCount: 2 },
        { name: 'Hollywood Pictures', winCount: 2 },
        { name: 'Nickelodeon Movies', winCount: 1 },
        { name: 'C2 Pictures', winCount: 1 },
        { name: 'Summit Entertainment', winCount: 1 },
        { name: 'Hasbro', winCount: 1 },
        { name: 'Associated Film Distribution', winCount: 1 },
        { name: 'Revolution Studios', winCount: 1 },
        { name: 'First Look Pictures', winCount: 1 },
        { name: 'Focus Features', winCount: 1 },
        { name: 'Cannon Films', winCount: 1 },
        { name: 'United Artists', winCount: 1 },
        { name: 'Touchstone Pictures', winCount: 1 },
        { name: 'Samuel Goldwyn Films', winCount: 1 },
        { name: 'Quality Flix', winCount: 1 },
        { name: 'TriStar Pictures', winCount: 1 },
        { name: 'Franchise Pictures', winCount: 1 },
        { name: 'Relativity Media', winCount: 1 },
        { name: 'Castle Rock Entertainment', winCount: 1 },
        { name: 'Screen Gems', winCount: 1 },
        { name: 'Triumph Releasing', winCount: 1 },
        { name: 'DreamWorks', winCount: 1 },
      ],
    }

    jest.spyOn(api, 'get').mockResolvedValue({
      data,
    })
    const response = await getStudiosWithWinCount()
    expect(response).toBe(data)
  })

  it('should return API error', async () => {
    jest
      .spyOn(api, 'get')
      .mockRejectedValue(new Error('An error occurred while fetching data'))

    try {
      await getStudiosWithWinCount()
    } catch (error: any) {
      expect(error.message).toBe('An error occurred while fetching data')
    }
  })
})
