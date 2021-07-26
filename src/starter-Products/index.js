//if user doesnt have any data in local storage this data will load to his local storage and will be used afterwards

export default function StarterProducts() {
  return [
    {
      id: 1,
      imageUrl: `url('/images/products/nike-1.jpg')`,
      name: "Nike 1",
      disc: "Product discription",
      count: 2,
      size: {
        width: 200,
        height: 200,
      },
      weight: "200g",
      comments: [
        {
          id: 1,
          productId: 1,
          description: "some text here",
          date: "14:00 22.08.2021",
        },
        {
          id: 2,
          productId: 1,
          description: "some text here",
          date: "14:00 22.08.2021",
        },
      ],
    },
    {
      id: 2,
      imageUrl: `url('/images/products/nike-2.jpg')`,
      name: "Nike 2",
      disc: "New nikes",
      count: 4,
      size: {
        width: 200,
        height: 200,
      },
      weight: "200g",
      comments: [
        {
          id: 1,
          productId: 2,
          description: "some text here",
          date: "14:00 22.08.2021",
        },
        {
          id: 2,
          productId: 2,
          description: "some text here",
          date: "14:00 22.08.2021",
        },
      ],
    },
  ];
}
