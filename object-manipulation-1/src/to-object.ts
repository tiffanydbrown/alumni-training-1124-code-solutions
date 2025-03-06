/* exported toObject */
function toObject<Key extends string, Value>(
  keyValuePair: [Key, Value]
): Record<Key, Value> {
  const newKey: Key = keyValuePair[0];
  const newValue: Value = keyValuePair[1];

  const obj = { [newKey]: newValue } as Record<Key, Value>;

  return obj;
}
