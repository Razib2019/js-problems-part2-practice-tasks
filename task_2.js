/**
 Find the friend with the smallest name.
 const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

function smallestName(items) {
  let smallestName = items[0];
  for (const item of items) {
    if (item.length < smallestName.length) {
      smallestName = item;
    }
  }
  return smallestName;
}

const result = smallestName(heights2);
console.log(result);
