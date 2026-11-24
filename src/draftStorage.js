export function readDraft(key, fields) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Object.fromEntries(fields.map(field => [field,
      value && typeof value[field] === "string" ? value[field] : ""]));
  } catch {
    return Object.fromEntries(fields.map(field => [field, ""]));
  }
}

export function saveDraft(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}
