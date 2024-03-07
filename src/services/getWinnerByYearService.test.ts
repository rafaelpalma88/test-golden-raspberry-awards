import { api } from './api'
import { getWinnerByYearService } from './getWinnerByYearService'

describe('API: getWinnerByYearService', () => {
  it('should return maximun and minimun interval for producers', async () => {
    const data = [
      {
        id: 186,
        year: 2016,
        title: "Hillary's America: The Secret History of the Democratic Party",
        studios: ['Quality Flix'],
        producers: ['Gerald R. Molen'],
        winner: true,
      },
    ]

    jest.spyOn(api, 'get').mockResolvedValue({
      data,
    })
    const response = await getWinnerByYearService({ selectedYear: 2016 })
    expect(response).toBe(data)
  })

  it('should return API error', async () => {
    jest
      .spyOn(api, 'get')
      .mockRejectedValue(new Error('An error occurred while fetching data'))

    try {
      await getWinnerByYearService({ selectedYear: 2016 })
    } catch (error: any) {
      expect(error.message).toBe('An error occurred while fetching data')
    }
  })
})
