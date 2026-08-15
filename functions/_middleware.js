// Redirect the *.pages.dev host to the canonical domain.
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === "lavenderrainz.pages.dev") {
    url.hostname = "lavenderainz.com";
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
