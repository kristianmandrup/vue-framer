export function isLayer(obj) {
  if (typeof obj !== 'object') return false
  if (obj.clazz === 'Layer') return true
  return obj instanceof LeafLayer
}
