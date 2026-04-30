export default function getFormattedDiscount(labelPrice, productPrice){
    if (!labelPrice || labelPrice <= productPrice) {
      return 0;
    }

    return Math.round(((labelPrice - productPrice) / labelPrice) * 100);
}