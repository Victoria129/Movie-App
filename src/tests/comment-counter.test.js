
// import { expect } from 'code';
import { countComment }  from '../module/comment-counter.js';
// const commentCounter = require('../modules/comment-counter.js')

// describe('Count No of comments on the DOM', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//     document.body.innerHTML = `
//      <div class= "comment-display">
//      </div>
//      `;
//   });

//   // eslint-disable-next-line
//    const createCommentHtml = ({ creation_date, comment, username }) => {
//     // eslint-disable-next-line
//      const creationDate = creation_date;
//     const commentli = document.createElement('li');
//     commentli.className = 'comment-li';
//     commentli.innerHTML = `
//       <span>${username}<span><span>${comment}<span><span>${creationDate}<span>
//      `;
//     return commentli;
//   };

//   const item1Comments = [{
//     username: 'Jake',
//     comment: 'It tastes nice',
//     creationDate: '24/11/2022',
//   },
//   {
//     username: 'mike',
//     comment: 'It was nice',
//     creationDate: '22/11/2022',
//   },
//   {
//     username: 'Val',
//     comment: 'It was good',
//     creationDate: '1/11/2022',
//   },
//   ];

//   test('Get correct no of comments greater than 1', () => {
//     const displayComments = () => {
//       const cmtSection = document.querySelector('.comment-display');
//       item1Comments.forEach((comment) => {
//         cmtSection.append(createCommentHtml(comment));
//       });
//     };
//     displayComments();
//     const result = commentCounter();
//     expect(result).toBe(3);
//   });
// });

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