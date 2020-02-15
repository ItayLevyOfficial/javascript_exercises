// kata link : https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1


function snail(array) {
  if (undefined === array[0] || array[0].length === 0) {
    return [];
  } else if (array[0].length === 1) {
    return array[0];
  } else {
    const first_row = array.shift();
    const last_row = array.pop();
    const first_collum = array.map(arr => arr.shift());
    const last_collum = array.map(arr => arr.pop());
    return first_row.concat(
      last_collum,
      last_row.reverse(),
      first_collum.reverse(),
      snail(array)
    );
  }
}
