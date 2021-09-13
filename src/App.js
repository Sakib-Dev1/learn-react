import FoodDish from "./components/FoodDish";

function App() {
  const recepieDetails = [
    {
      id: "r1",
      img: "https://recipesbylucelle.files.wordpress.com/2020/04/kimchi-lucelle.jpg?w=1200",
      recepieName: "Delicious Kimchi",
      price: 25,
    },
    {
      id: "r2",
      img: "https://www.saveur.com/uploads/2019/12/09/OB7S7ZQJAVDRFGVXYHMD3FUS2Y.jpg?width=1440",
      recepieName: "Spicy Noodles",
      price: 35,
    },
    {
      id: "r3",
      img: "https://thebusybaker.ca/wp-content/uploads/2018/04/easy-korean-beef-rice-bowls-fbig2.jpg",
      recepieName: "Beef Rice-bowl",
      price: 45,
    },
  ];
  return (
    <div>
      <h2>Learn React</h2>
      <FoodDish
        recepieImg={recepieDetails[0].img}
        recepieTitle={recepieDetails[0].recepieName}
        recepiePrice={recepieDetails[0].price}
      />
      <FoodDish
        recepieImg={recepieDetails[1].img}
        recepieTitle={recepieDetails[1].recepieName}
        recepiePrice={recepieDetails[1].price}
      />
      <FoodDish
        recepieImg={recepieDetails[2].img}
        recepieTitle={recepieDetails[2].recepieName}
        recepiePrice={recepieDetails[2].price}
      />
    </div>
  );
}

export default App;
