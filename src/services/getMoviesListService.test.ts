import { getMoviesListService } from './getMoviesListService'
import {
  mockMoviesListIsWinnerAPIResponse,
  mockMoviesListPage1APIResponse,
  mockMoviesListPage2APIResponse,
  mockMoviesListSelectedYearAPIResponse,
} from '../../__tests__/mocks/api/mockMoviesListAPIResponse'

describe('API: getMoviesListService', () => {
  it('should return movies list service with selectedPage 1', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMoviesListPage1APIResponse),
    })
    const response = await getMoviesListService({ selectedPage: 0 })
    expect(response).toEqual(mockMoviesListPage1APIResponse)
  })

  it('should return movies list service with selectedPage 2', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMoviesListPage2APIResponse),
    })
    const response = await getMoviesListService({ selectedPage: 1 })
    expect(response).toEqual(mockMoviesListPage2APIResponse)
  })

  it('should return movies list service with selectedPage 2 and isWinner is true', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMoviesListIsWinnerAPIResponse),
    })
    const response = await getMoviesListService({
      selectedPage: 2,
      isWinner: true,
    })
    expect(response).toEqual(mockMoviesListIsWinnerAPIResponse)
  })

  it('should return movies list service with selectedPage 2 and year is 1988', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMoviesListSelectedYearAPIResponse),
    })
    const response = await getMoviesListService({
      selectedPage: 1,
      filteredYear: '1988',
    })
    expect(response).toEqual(mockMoviesListSelectedYearAPIResponse)
  })

  it('should return API error', async () => {
    global.fetch = jest
      .fn()
      .mockRejectedValueOnce('An error occurred while fetching data')

    try {
      await getMoviesListService({
        selectedPage: 1,
        filteredYear: '1988',
      })
    } catch (error: any) {
      expect(error.message).toBe('An error occurred while fetching data')
    }
  })
})
