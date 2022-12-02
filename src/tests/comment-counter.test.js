import { countComment } from '../module/comment-counter.js';

describe('Add tests for comments counter', () => {
  it('Two Comments in a movie - Output: 2', async () => {
    const commentsNumber = await countComment(49234);
    expect(commentsNumber.length).toEqual(2);
  });

  it('Six Comments in a movie - Output: 6', async () => {
    const commentsNumber = await countComment(6962);
    expect(commentsNumber.length).toEqual(6);
  });

  it('One Comments in a movie - Output: 1', async () => {
    const commentsNumber = await countComment(36306);
    expect(commentsNumber.length).toEqual(undefined);
  });
});