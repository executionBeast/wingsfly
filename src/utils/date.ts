export default function formatDate(dateString) {
  const dateObj = new Date(dateString);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('default', { month: 'long' });
  return `${day} ${month}`;
}

// Example
console.log(formatDate("2025-07-01")); // Output: 1 July
