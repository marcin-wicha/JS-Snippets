// Gets the transform matrix from CSS transform property.
const getTransformMatrix = (node) => {
  const transformString = window
    .getComputedStyle(node)
    .getPropertyValue('transform');
  const regex = new RegExp(/-?\d+/, 'g');
  return regex.test(transformString)
    ? transformString.match(regex).map((e) => Number(e))
    : [1, 0, 0, 1, 0, 0];
};
