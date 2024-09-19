// // const people = [
// //   'Creola Katherine Johnson: mathematician',
// //   'Mario José Molina-Pasquel Henríquez: chemist',
// //   'Mohammad Abdus Salam: physicist',
// //   'Percy Lavon Julian: chemist',
// //   'Subrahmanyan Chandrasekhar: astrophysicist'
// // ];
// // const people = [{
// //   id: 0,
// //   name: 'Creola Katherine Johnson',
// //   profession: 'mathematician',
// // }, {
// //   id: 1,
// //   name: 'Mario José Molina-Pasquel Henríquez',
// //   profession: 'chemist',
// // }, {
// //   id: 2,
// //   name: 'Mohammad Abdus Salam',
// //   profession: 'physicist',
// // }, {
// //   id: 3,
// //   name: 'Percy Lavon Julian',
// //   profession: 'chemist',  
// // }, {
// //   id: 4,
// //   name: 'Subrahmanyan Chandrasekhar',
// //   profession: 'astrophysicist',
// // }];

// // export default function List() {
// //   const listItems = people.map(person =>
// //     <li>{person}</li>
// //   );
// //   return <ul>{listItems}</ul>;
// // }

// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// export default function List() {
//   const listItems = people.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}</b>
//           {' ' + person.profession + ' '}
//           known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return <ul>{listItems}</ul>;
// }
import React from 'react';
import { products } from './productdata';

export default function Webrender() {
  return (
    <div className='container mx-auto'>
      <div className="bg-blue-500 text-white p-4 text-center text-lg font-bold">
  รายการสินค้า CS shop
</div>
      {products.map((product) => (
        <div key={product.id} className="product mt-4">
          <img src={product.img} alt={product.productName} />
          <h2>{product.productName}</h2>
          <p>{product.detail}</p>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
        </div>
      ))}
    </div>
  );
}