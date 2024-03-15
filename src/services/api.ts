export async function api(path: string, init?: RequestInit): Promise<Response> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const url = new URL(path, baseUrl)

  return await fetch(url, init)
}
