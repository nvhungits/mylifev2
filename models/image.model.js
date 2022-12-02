import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const imageSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String
  },
  ApiKey: {
    type: String
  },
  tags: {
    type: String
  },
  keywords: {
    type: String
  },
  FacebookURL: {
    type: String
  },
  TwitterURL: {
    type: String
  },
  LinkedinURL: {
    type: String
  },
  InstagramURL: {
    type: String
  },
  mapLongitude: {
    type: String
  },
  mapLatitude: {
    type: String
  },
  city: {
    type: String
  },
  address: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  website: {
    type: String
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    default: 5
  },
  price: {
    type: Number,
    default: 1,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  description: {
    type: String,
    default: "More Information"
  },
  details: {
    type: String,
    default: "More Information"
  },
  images: {
    type: Array,
    default: [
      "/assets/images/products/clothes/1.png",
      "/assets/images/products/clothes/2.png",
      "/assets/images/products/clothes/3.png",
      "/assets/images/products/clothes/4.png"
    ]
  },
  thumbImage: {
    type: Array,
    default: [
      "/assets/images/products/clothes/1.png",
      "/assets/images/products/clothes/2.png"
    ]
  },
  backgroundImages: {
    type: Array,
    default: [
      "/assets/img/listing/img1.png",
      "/assets/images/products/clothes/2.png",
      "/assets/images/products/clothes/3.png",
      "/assets/images/products/clothes/4.png"
    ]
  },
  carouselImages: {
    type: Array,
    default: [
      "/assets/img/listing/img1.png",
      "/assets/images/products/clothes/2.png",
      "/assets/images/products/clothes/3.png",
      "/assets/images/products/clothes/4.png"
    ]
  },
  videoYoutube: {
    type: String
  },
  videoVimeo: {
    type: String
  },
  galleryThumbnails: {
    type: Array,
    default: [
      "/assets/img/listing/img1.png",
      "/assets/images/products/clothes/2.png",
      "/assets/images/products/clothes/3.png",
      "/assets/images/products/clothes/4.png"
    ]
  },
  sliderImages: {
    type: Array,
    default: [
      "/assets/img/listing/img1.png",
      "/assets/images/products/clothes/2.png",
      "/assets/images/products/clothes/3.png",
      "/assets/images/products/clothes/4.png"
    ]
  },
  promoVideoYoutube: {
    type: String
  },
  promoVideoVimeo: {
    type: String
  },
  element: {
    type: String, //Dark | Light | Water | Fire | Wind
    default: "Dark"
  },
  species: {
    type: String
  },
  type: {
    type: String, //Defense | Support | Attack | HP
    default: "Attack"
  },
  grade: {
    type: String,
    default: 5
  },
  leaderSkill: {
    type: String
  },
  skill1: {
    type: String
  },
  skill2: {
    type: String
  },
  skill3: {
    type: String
  },
  skill4: {
    type: String
  },
  image1: {
      data: Buffer,
      contentType: String
  },
  image2: {
    data: Buffer,
    contentType: String
  },
  image3: {
      data: Buffer,
      contentType: String
  },
  image4: {
      data: Buffer,
      contentType: String
  },
  thumbImage1: {
      data: Buffer,
      contentType: String
  },
  thumbImage2: {
      data: Buffer,
      contentType: String
  },
  user: {
    type: Object,
    default: {
      name: "Hung Nguyen",
      images: [
        "/assets/img/man1.png",
        "/assets/images/products/clothes/2.png",
        "/assets/images/products/clothes/3.png",
        "/assets/images/products/clothes/4.png"
      ]
    }
  },
  created: {
    type: Date
  },
  createdBy: {
    type: String,
    default: "Hung Nguyen"
  },
  modified: {
    type: Date
  },
  modifiedBy: {
    type: String,
    default: "Hung Nguyen"
  },
  status: {
    type: String,
    default: "Open"
  },
  active: {
    type: Boolean,
    default: true
  },
  FreeWiFi: {
    type: Boolean,
    default: true
  },
  Parking: {
    type: Boolean,
    default: true
  },
  FitnessCenter: {
    type: Boolean,
    default: true
  },
  NonSmokingRooms: {
    type: Boolean,
    default: true
  },
  AirportShuttle: {
    type: Boolean,
    default: true
  },
  AirConditioning: {
    type: Boolean,
    default: true
  },
  Events: {
    type: Boolean,
    default: true
  },
  FriendlyWorkspace: {
    type: Boolean,
    default: true
  },
  SidebarWidgetsBookingForm: {
    type: Boolean,
    default: true
  },
  SidebarWidgetsPriceRange: {
    type: Boolean,
    default: true
  },
  SidebarWidgetsInstagram: {
    type: Boolean,
    default: true
  },
});

export default mongoose.model('Image', imageSchema);