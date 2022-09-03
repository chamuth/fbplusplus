import { describe, expect, it } from "@jest/globals"
import { parseId } from "./url-parser"

describe("URL Parser", () => {
  it("Group member comment", () => {
    const url =
      "https://www.facebook.com/groups/1029235461193733/user/69420/?__cft__"
    expect(parseId(url)).toBe("69420")
  })

  it("Slugged user", () => {
    const url = "https://www.facebook.com/person1"
    expect(parseId(url)).toBe("person1")
  })

  it("Non-slugged user", () => {
    const url = "https://www.facebook.com/profile.php?id=69420"
    expect(parseId(url)).toBe("69420")
  })
})
