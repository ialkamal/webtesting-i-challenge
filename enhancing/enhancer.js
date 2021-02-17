module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  let newEnhancement = item.enhancement;
  if (item.enhancement < 20 && item.enhancement >= 0) ++newEnhancement;
  return { ...item, enhancement: newEnhancement };
}

function fail(item) {
  let newDurability = item.durability;
  let newEnhancement = item.enhancement;
  if (item.enhancement < 15) {
    newDurability = item.durability - 5 >= 0 ? newDurability - 5 : 0;
  } else {
    newDurability -= 10;
    if (item.enhancement > 16) --newEnhancement;
  }

  return { ...item, enhancement: newEnhancement, durability: newDurability };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
