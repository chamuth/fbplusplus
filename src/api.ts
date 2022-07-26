import { Profile } from "./db"

export default async function loadProfile(id: string): Promise<Profile> {
  const data = await (await fetch(process.env.API_ENDPOINT || id)).json()

  return {
    expires: new Date(),
    faction: data.faction,
  }
}
