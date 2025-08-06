//decide how to split the bill
//each pay for its own consume
//inputs: array of consumed items, int with the index of item that Anna didnt eat, int with value payed by Anna
//if Anna needs refund, returns the value
//returns 'Bon Appetit' if bill is fair

export function bonAppetit(
  [numberOfOrderedItems, itemNotConsumedByAnnaIndex],
  billItems,
  valuePayedByAnna
) {
  function sumArray(array) {
    return array.reduce((item1, item2) => item1 + item2);
  }
  const totalCost = sumArray(billItems);

  const fairShare = (totalCost - billItems[itemNotConsumedByAnnaIndex]) / 2;

  if (fairShare === valuePayedByAnna) return 'Bon Appetit';

  const refund = valuePayedByAnna - fairShare;

  return refund;
}
