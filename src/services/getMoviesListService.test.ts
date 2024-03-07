import {
  mockMoviesListIsWinnerAPIResponse,
  mockMoviesListPage1APIResponse,
  mockMoviesListPage2APIResponse,
  mockMoviesListSelectedYearAPIResponse,
} from '../../__tests__/mocks/api/mockMoviesListAPIResponse'
import { api } from './api'
import { getMoviesListService } from './getMoviesListService'

describe('API: getMoviesListService', () => {
  it('should return movies list service with selectedPage 1', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({
      data: mockMoviesListPage1APIResponse,
    })
    const response = await getMoviesListService({ selectedPage: 1 })
    expect(response).toBe(mockMoviesListPage1APIResponse)
  })

  it('should return movies list service with selectedPage 2', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({
      data: mockMoviesListPage2APIResponse,
    })
    const response = await getMoviesListService({ selectedPage: 2 })
    expect(response).toBe(mockMoviesListPage2APIResponse)
  })

  it('should return movies list service with selectedPage 2 and isWinner is true', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({
      data: mockMoviesListIsWinnerAPIResponse,
    })
    const response = await getMoviesListService({
      selectedPage: 2,
      isWinner: true,
    })
    expect(response).toBe(mockMoviesListIsWinnerAPIResponse)
  })

  it('should return movies list service with selectedPage 2 and year is 1988', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({
      data: mockMoviesListSelectedYearAPIResponse,
    })
    const response = await getMoviesListService({
      selectedPage: 1,
      filteredYear: '1988',
    })
    expect(response).toBe(mockMoviesListSelectedYearAPIResponse)
  })

  it('should return API error', async () => {
    jest
      .spyOn(api, 'get')
      .mockRejectedValue(new Error('An error occurred while fetching data'))

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
