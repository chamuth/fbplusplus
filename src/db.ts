import loadProfile from "./api"

export type Profile = {
  faction: string
  expires: Date
}

class database {
  static async getProfile(id: string) {
    const data = await chrome.storage.local.get(id)

    if (data[id]) {
      return data[id] as Profile
    }
  }

  static async setProfile(id: string, data: Profile) {
    await chrome.storage.local.set({
      [id]: data,
    })
    console.log("SAVED ", data)
  }
}

export default database
