import { Star, StarHalf, Stars } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Bread",
    price: 100,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1678489828773-7d33b16c652f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    name: "Garri",
    price: 200,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1678489828773-7d33b16c652f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    name: "Skin",
    price: 300,
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1678489828773-7d33b16c652f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 4,
    name: "Hair",
    price: 400,
    rating: 2,
    image:
      "https://images.unsplash.com/photo-1678489828773-7d33b16c652f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

export const Content = () => {
  return (
    <section>
      <hgroup>
        <h1>Products</h1>
      </hgroup>
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <img src={product.image} alt={product.name} />
          </div>
          <div>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            {product.rating > 0 ? (
              <div>
                <Star />
                <Star />
                <Star />
                <Star />
                <Stars />
              </div>
            ) : (
              <div>
                <StarHalf />
                <StarHalf />
                <StarHalf />
                <StarHalf />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
