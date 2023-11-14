export default function handler(request, response) {
  const blogId = request.params.id;

  response.status(200).json({
    blogId,
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}