export default function handler(request, response) {

  console.log(`/api/blog/${request.params?.id} in JS`);

  response.status(200).json({
    body: request.body,
    params: `Params in JS: ${request.params}`,
    query: `Query in JS: ${request.query}`,
    cookies: request.cookies,
  });
}
