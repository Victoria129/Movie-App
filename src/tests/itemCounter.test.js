const getItem = require('../module/itemCounter.js');

describe('Add tests for Items counter', () => {
  it("Search with Search Query '1' - Output: 10", async () => {
    const itemsCount = await getItem(1); // Run the function
    expect(itemsCount.length).toEqual(10); // Make an assertion on the result
  });

  it("Search with Search Query '2'- Output: Undefined", async () => {
    const itemsCount = await getItem(2); // Run the function
    expect(itemsCount.length).not.toEqual(6); // Make an assertion on the result
  });

  it("Search with Search Query 'NOt Such Word' - Output: 0", async () => {
    const itemsCount = await getItem('an known word'); // Run the function
    expect(itemsCount.length).toEqual(0); // Make an assertion on the result
  });
});