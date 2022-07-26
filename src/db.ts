import loadProfile from "./api"

export type Profile = {
  faction: string
  expires: Date
}

class database {
  static async getProfile(id: string): Promise<Profile | null> {
    const data = await chrome.storage.local.get(id)

    if (data[id]) {
      if (
        Math.ceil(new Date().getTime() - data[id].expires.getTime()) /
          (1000 * 3600 * 24) <
        2
      ) {
        // If data is not older than 2 days
        return data[id] as Profile
      }
    }

    // load data from API
    const profile = await loadProfile(id)

    if (profile) {
      this.setProfile(id, profile)
      return profile
    }

    return null
  }

  static async setProfile(id: string, data: Profile): Promise<void> {
    await chrome.storage.local.set({
      [id]: data,
    })
    console.log("SAVED ", data)
  }
}

export default database
