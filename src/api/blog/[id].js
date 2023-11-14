export default function handler(request, response) {
  // const blogId = request.params.id;

  console.log('/api/[id]');

  response.status(200).json({
    params: request.params,
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}
