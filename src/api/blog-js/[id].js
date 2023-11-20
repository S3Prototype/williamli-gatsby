export default function handler(request, response) {

  console.log(`/api/blog/${request.params?.id} in JS`);

  response.status(200).json({
    body: request.body,
    params: request.params,
    query: request.query,
    cookies: request.cookies,
  });
}
