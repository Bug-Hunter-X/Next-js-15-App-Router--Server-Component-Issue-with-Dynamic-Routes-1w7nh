```javascript
// app/product/[id]/page.js

import { getServerSideProps } from 'next/server';

export default function ProductPage({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://api.example.com/products/${id}`);
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
}
```