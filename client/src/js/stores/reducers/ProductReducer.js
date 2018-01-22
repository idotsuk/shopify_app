import macLogo from "../../../img/macbook.png";
import ipadLogo from "../../../img/ipad.png";
import galaxyLogo from "../../../img/galaxy.png";
import math from "mathjs";
let itemIndex;

const reducer = (
  state = {
    explore: [],
    favorite: [],
    adding: false,
  },
  action
) => {
  //console.log(action.type);
  switch (action.type) {
    case "ADD_FAVORITE":
      itemIndex = state.explore.findIndex(product => {
        return product.id === action.id;
      });
      console.log("item index to add is " + itemIndex);
      if (
        itemIndex != -1 &&
        state.favorite.findIndex(product => {
          return product.id === action.id;
        }) === -1
      ) {
        state = {
          ...state,
          explore: state.explore.map((product, index) => {
            if (product.id === action.id) {
              return { ...product, chosen: true };
            }
            return product;
          }),
          favorite: state.favorite.concat({
            ...state.explore[itemIndex],
            chosen: true
          })
        };
      }
      break;

    case "REMOVE_FAVORITE":
      itemIndex = state.favorite.findIndex(product => {
        return product.id === action.id;
      });
      if (itemIndex != -1) {
          console.log('working up to here')
        state = {
          ...state,

          explore: state.explore.map(product => {
            if (product.id === action.id) return { ...product, chosen: false };
            return product;}),

          favorite: [].concat(state.favorite.slice(0, itemIndex),state.favorite.slice(itemIndex + 1, state.favorite.length))
        };
      }

      break;

    case "IMPORT_PRODUCTS":
      let products = {
        titles: ['Macbook Pro 15"', 'iPad Pro 10"', "Galaxy S8"],
        prices: ["$99.99", "$69.99", "$58.99"],
        suppliers: ["Apple", "Apple", "Samsung"]
      };
      for (let id = 0; id <= 100; id++) {
        let index = math.randomInt(0, products.titles.length);
        state.explore = state.explore.concat({
          id: math.randomInt(11111, 99999),
          title: products.titles[index],
          price: products.prices[index],
          supplier: products.suppliers[index],
          chosen: false,
          img: (() => {
            switch (products.titles[index]) {
              case 'Macbook Pro 15"':
                return macLogo;
                break;
              case "Galaxy S8":
                return galaxyLogo;
                break;
              case 'iPad Pro 10"':
                return ipadLogo;
                break;
            }
          })()
        });
      }
      break;

      case 'ADD_FAVORITES_PENDING':

        state = {...state, adding : true}
        
      break
      case 'ADD_FAVORITES_DONE':

      state = {...state, adding : false}
      
      break
  }
  console.log(state);
  return state;
};
export default reducer;
