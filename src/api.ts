import { Profile } from "./db"

interface IAPIResult {
  faction: string
}

/**
 * Loads profile information from a remote server
 * @param id profile id
 * @returns Profile
 */
export default async function loadProfile(id: string): Promise<Profile> {
  const data = (await (
    await fetch(process.env.API_ENDPOINT + id, {
      mode: "cors",
    })
  ).json()) as IAPIResult

  return {
    expires: new Date(),
    faction: data.faction,
  }
}
