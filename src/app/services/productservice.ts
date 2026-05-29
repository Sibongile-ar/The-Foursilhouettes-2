import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Productservice {
  productList = [
    {
      "id": 1,
      "title": "Blue Floral Lace Lingerie Set",
      "price": 240.99,
      "description": "Elegant blue floral lace lingerie set with soft underwire and intricate embroidery.",
      "category": "lingerie",
      "image": "/bluefloral.jpeg",
    },
    {
      "id": 2,
      "title": "Pink Sheer Lingerie Piece",
      "price": 290.99,
      "description": "Flattering pink sheer one-piece lingerie with elegant lace trim and adjustable straps.",
      "category": "lingerie",
      "image": "/pinklingeriepiece.jpeg",
    },
    {
      "id": 3,
      "title": "Floral Black Lace Lingerie Set",
      "price": 340.99,
      "description": "Sophisticated black floral lace balconette bra and high-waist brief set.",
      "category": "lingerie",
      "image": "/floralblack.jpeg",
    },
    {
      "id": 4,
      "title": "Red Strappy Lingerie Set",
      "price": 390.99,
      "description": "Bold red strappy lingerie set with cage detailing, adjustable straps, and a plunging neckline.",
      "category": "lingerie",
      "image": "/rednumber.jpeg",
    },
    {
     "id": 5,
     "title": "Leopard Print Lingerie Thong Set",
     "price": 220.99,
     "description": "Alluring leopard print underwire bra and matching microfiber thong set.",
     "category": "lingerie",
     "image": "/leopardlingerie.jpeg"
    },

  {
    "id": 6,
    "title": "Green Sexy Strappy Lingerie Set",
    "price": 360.99,
    "description": "Striking emerald green strappy wrap-style bra and matching thong set.",
    "category": "lingerie",
    "image": "/Greensexylingerie.webp"
  },
  {
    "id": 7,
    "title": "Blue Lace Lingerie Piece",
    "price": 270.99,
    "description": "Royal blue lace one-piece babydoll with scalloped hem and matching thong.",
    "category": "lingerie",
    "image": "/Bluelingeriepiece.jpeg"
  },
  {
    "id": 8,
    "title": "Black Silk Satin Lingerie Set",
    "price": 440.99,
    "description": "Luxurious black silk satin slip dress and robe set with lace trim accents.",
    "category": "lingerie",
    "image": "/Blacksilkset.webp"
  },
  {
    "id": 9,
    "title": "Four-Pack Thong Set",
    "price": 180.99,
    "description": "Comfortable four-pack of colorful stretch-fabric thongs for everyday wear.",
    "category": "panties",
    "image": "/fourthongs.jpeg"
  },
  {
    "id": 10,
    "title": "Red Lace G-String",
    "price": 90.99,
    "description": "Seductive red floral lace G-string with a seamless, barely-there fit.",
    "category": "panties",
    "image": "/redgstring.jpeg"
  },
  {
    "id": 11,
    "title": "Two-Piece Lace Panty Set",
    "price": 140.99,
    "description": "Two-pack of elegant low-rise lace panties in neutral tones.",
    "category": "panties",
    "image": "/twolacepanties.jpeg"
  },
  {
    "id": 12,
    "title": "Five-Pack Mixed Panty Set",
    "price": 240.99,
    "description": "Five-pack assortment of everyday essential bikinis, briefs, and thongs.",
    "category": "panties",
    "image": "/fivepanties.jpeg"
  },
  {
    "id": 13,
    "title": "Three Pearl Embellished Panty Set",
    "price": 190.99,
    "description": "Glamorous three-piece sheer mesh panty set featuring delicate pearl embellishments.",
    "category": "panties",
    "image": "/threepearls.jpeg"
  },
  {
    "id": 14,
    "title": "Seven-Pack Seamless Panty Set",
    "price": 290.99,
    "description": "Seven-pack of laser-cut, no-show seamless panties in neutral tones.",
    "category": "panties",
    "image": "/sevenseamless.jpeg"
  },
  {
    "id": 15,
    "title": "Black & White Lace Bra Set",
    "price": 320.99,
    "description": "Classic contrast lace underwire plunge bra with matching lace details.",
    "category": "bras",
    "image": "/blackwhitebra.jpeg"
  },
  {
    "id": 16,
    "title": "Seamless Multicolor Bra Set",
    "price": 380.99,
    "description": "Four-pack of ultra-comfortable seamless wireless bras with light padding.",
    "category": "bras",
    "image": "/seamlessbraset.jpeg"
  },
  {
    "id": 17,
    "title": "Black Cross-Back Sports Bra",
    "price": 260.99,
    "description": "Medium-support black cross-back sports bra with removable padding.",
    "category": "bras",
    "image": "/blackcrossbra.webp"
  },
  {
    "id": 18,
    "title": "Pink Floral Lace Bra",
    "price": 280.99,
    "description": "Feminine pink floral lace underwire balconette bra with satin bow detail.",
    "category": "bras",
    "image": "/pinkbra.webp"
  },
  {
    "id": 19,
    "title": "Five-Pack Wireless T-Shirt Bras",
    "price": 440.99,
    "description": "Five-pack of lightly padded, invisible wireless t-shirt bras in basic tones.",
    "category": "bras",
    "image": "/fivepiece.jpeg"
  },
  {
    "id": 20,
    "title": "White Nightwear Robe & Bra Set",
    "price": 490.99,
    "description": "Elegant white satin nightwear set including a robe, bralette, and shorts.",
    "category": "lingerie",
    "image": "public/whiteNightwear.webp"
  }
  ]
     getProduct(){
    return this.productList;
  }
  }