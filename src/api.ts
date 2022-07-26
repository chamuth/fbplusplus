export default async function loadProfile(id: string) {
  const data = (await fetch(process.env.API_ENDPOINT || "")).json()
}
