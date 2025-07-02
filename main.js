Vue.createApp({
  data() {
    return {
      menu: [
        {
          id: 1,
          image: "pizza-1.png",
          name: "BISMARCK",
          price: 30,
          calories: "800 kcal",
          fats: "50 g",
        },
        {
          id: 2,
          image: "pizza-2.png",
          name: "FIORI DI ZUCCA",
          price: 50,
          calories: "800 kcal",
          fats: "50 g",
        },
        {
          id: 3,
          image: "pizza-3.png",
          name: "VALDOSTANA",
          price: 55,
          calories: "800 kcal",
          fats: "50 g",
        },
        {
          id: 4,
          image: "pizza-4.png",
          name: "PIZZA TARTUFATA",
          price: 45,
          calories: "800 kcal",
          fats: "50 g",
        },
        {
          id: 5,
          image: "pizza-5.png",
          name: "FRANCESCANA",
          price: 25,
          calories: "800 kcal",
          fats: "50 g",
        },
        {
          id: 6,
          image: "pizza-6.png",
          name: "BOSCAIOLA",
          price: 85,
          calories: "800 kcal",
          fats: "50 g",
        },
        {
          id: 7,
          image: "pizza-7.png",
          name: "MARE E MONTI",
          price: 65,
          calories: "800 kcal",
          fats: "50 g",
        },
        {
          id: 8,
          image: "pizza-8.png",
          name: "MARE E MONTI",
          price: 95,
          calories: "800 kcal",
          fats: "50 g",
        },
      ],
      cart: [
        // {
        //   id: 1,
        //   image: "pizza-1.png",
        //   name: "BISMARCK",
        //   price: 30,
        //   calories: "800 kcal",
        //   fats: "50 g",
        // },
      ],
    };
  },
  methods: {
    addItemToCart(item) {
      const index = this.cart.findIndex((pizze) => pizze.id == item.id);
      if (index !== -1) {
        this.cart[index].quantity++;
      } else {
        this.cart.push({ ...item, quantity: 1 });
      }
      console.log(item);
    },

    addQuantity(item) {
      const index = this.cart.findIndex((pizze) => pizze.id == item.id);
      if (index !== -1) {
        this.cart[index].quantity++;
      }
    },
    minQuantity(item) {
      const index = this.cart.findIndex((pizze) => pizze.id == item.id);
      if (index !== -1) {
        if(this.cart[index].quantity>1){
        this.cart[index].quantity--;
        } else {
          this.cart = this.cart.filter((pizze)=>(pizze.id !== item.id))
        }
      }
    },
    getTotalPrice() {
      let total = 0 
      this.cart.map((item)=>{
       total+= item.price * item.quantity
      })
      return total.toFixed(2)

    },
  },
}).mount("#pizza-restaurant");
