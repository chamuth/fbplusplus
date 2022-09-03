export function parseId(url: string) {
  if (url.includes("/groups/")) {
    const id = url.split("?")[0]
    const slashes = id.split("/")

    if (id.endsWith("/")) {
      return slashes[slashes.length - 2]
    }
  }

  // profile.php?id= method
  if (url.includes("profile.php")) {
    const urlSearchParams = new URLSearchParams(url)
    return urlSearchParams.get("https://www.facebook.com/profile.php?id")
  }

  // default method for slug owners
  const id = url.split("?")[0]
  const slashes = id.split("/")

  if (id.endsWith("/")) {
    return slashes[slashes.length - 2]
  }

  return slashes[slashes.length - 1]
}
