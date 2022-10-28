export type User = {
  id: String,
  name: String,
  email: String,
  phone: String,
  address: Address,
  birthdate: Date,
  trainer: Contact,
  vet: Contact,
  pets: {
    dogs: Dog[],
    other: Animal[] // will probably have to be a union of other animal types (cat, etc.)
  },                // but all I can think of are cats at the moment...
  vendor: {
    triggers: Triggers[],
    reviews: Review[]
  }
}

export type Address = {
  street: String,
  city: String,
  state: String,
  zipcode: String,
  country: String
}

export type Contact = {
  name: String,
  email: String,
  phone: String
}

export type Animal = {
  id: String,
  name: String,
  birthdate: Date,
  weight: Number,
  helper: Boolean,
  medicalInformation: String,
  description: String,
  // pictures
}

export interface Dog extends Animal {
  breeds: String[],
  triggers: Triggers[],
  biteHistory: Boolean
}

export type Triggers =
  "Dogs" |
  "Cats" |
  "Strangers" |
  "Bikes" |
  "Cars" |
  "Doorbells"
;

export type Review = {
  rating: Number,
  comment: String
}

export type Appointment = {
  id: String,
  date: Date, 
  duration: Number,
  client: String,
  vendor: String,
  dog: String,
  description: String,
  price: Number,
  location: Address
}

export type Service = {
  id: String,
  user: String,
  price: Number,
  description: String
}