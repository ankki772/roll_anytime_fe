export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export function totalsumCartPrice(arr){
  let result =arr.reduce(function (acc, obj) { return acc +Number(obj.product_pack[0].price) }, 0);
  return result;
}