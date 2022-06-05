/**
 *
 * @param {*} cents
 * @returns
 */
export function formatPrice(cents) {
  return (cents / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

export function validStore(store) {
  if (store === '' || store === 'default') return `is not a valid store`;
}

export function getID() {
  return Date.now();
}
