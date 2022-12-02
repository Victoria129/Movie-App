import { countComment }  from '../module/comment-counter.js';


describe('Add tests for comments counter', () => {
  it('Three Comments in a movie - Output: 3', async () => {
    const commentsNumber = await countComment(53881); // Run the function
    expect(commentsNumber.length).toEqual(3); // Make an assertion on the result
  });

  it('No Comments in a movie - Output: Undefined', async () => {
    const commentsNumber = await countComment(538851); // Run the function
    expect(commentsNumber.length).toEqual(undefined); // Make an assertion on the result
  });

  it('One Comments in a movie - Output: 1', async () => {
    const commentsNumber = await countComment(36306); // Run the function
    expect(commentsNumber.length).toEqual(undefined); // Make an assertion on the result

  });
});