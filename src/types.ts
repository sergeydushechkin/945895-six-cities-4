enum CardType  {
  MAIN = `MAIN`,
  PROPERTY = `PROPERTY`,
  FAVORITES = `FAVORITES`,
}

enum Type {
  apartment = `apartment`,
  room = `room`,
  house = `house`,
  hotel = `hotel`,
}

enum SortTypes {
  POPULAR = `popular`,
  PRICE_LOW_HIGH = `priceLowHigh`,
  PRICE_HIGH_LOW = `priceHighLow`,
  TOP_RATED_FIRST = `topRatedFirst`
}

enum FavoritesImageSize {
  WIDTH = `150`,
  HEIGHT = `110`,
};

enum OthersImageSize {
  WIDTH = `260`,
  HEIGHT = `200`,
}

interface Offer {
  city: {
    name: string,
    coordinates: [number, number],
    zoom: number,
  }
  id: number,
  title: string,
  previewImage: string,
  price: number,
  type: Type,
  rating: number,
  isPremium: boolean,
  isFavorite: boolean,
  pictures: Array<string>,
  bedrooms: number,
  description: string,
  guests: number,
  features: Array<string>,
  host: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
  },
  location: {
    coordinates: [number, number],
    zoom: number,
  },
}

interface Comment {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
  },
}

interface AuthInfo {
  avatarUrl: string,
  email: string,
  id: number,
  isPro: boolean,
  name: string,
}

export {CardType, SortTypes, Type, Offer, Comment, AuthInfo, FavoritesImageSize, OthersImageSize};
