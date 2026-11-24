import { readDraft, saveDraft } from "./draftStorage";
afterEach(() => { localStorage.clear(); jest.restoreAllMocks(); });
test.each(["{", "null", "[]", '{"displayName":42}'])("recovers invalid draft %s", raw => {
  localStorage.setItem("flow-one", raw);
  expect(readDraft("flow-one", ["displayName"])).toEqual({displayName: ""});
});
test("preserves legacy strings", () => {
  expect(saveDraft("flow-one", {displayName: "Ada"})).toBe(true);
  expect(readDraft("flow-one", ["displayName"])).toEqual({displayName: "Ada"});
});
test("reports storage write failure", () => {
  jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("blocked"); });
  expect(saveDraft("flow-one", {})).toBe(false);
});
