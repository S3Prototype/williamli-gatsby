import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(request: VercelRequest & { params: { id: string}}, response: VercelResponse
  ) {
  // const blogId = request.params.id;

  console.log(`/api/blog/${request.params?.id} in TS`);

  response.status(200).json({
    body: request.body,
    params: `Params in TS: ${JSON.stringify(request.params)}`,
    query: `Query in TS: ${JSON.stringify(request.query)}`,
    cookies: request.cookies,
  });
}
