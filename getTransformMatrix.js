// Gets the transform matrix from CSS transform property on passed DOM Node.
// Returns null if no transform property is defined on the element.
const getTransformMatrix = (node) => {
  const transformString = window
    .getComputedStyle(node)
    .getPropertyValue('transform');
  const regex = new RegExp(/-?\d+/, 'g');
  return regex.test(transformString)
    ? transformString.match(regex).map((e) => Number(e))
    : null;
};
