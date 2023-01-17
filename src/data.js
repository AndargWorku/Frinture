import {
IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from "react-icons/io";
import feature1 from "./assets/img/feature1.png";
import feature2 from "./assets/img/feature2.png";
import Chair from "./assets/img/chair.png";
import bed from "./assets/img/bed.png";
import cupboard from "./assets/img/cupboard.png";
import light from "./assets/img/light.png";
import product1 from "./assets/img/product/product1.png";
import product2 from "./assets/img/product/product2.png";
import product3 from "./assets/img/product/product3.png";
import product4 from "./assets/img/product/product4.png";
import product5 from "./assets/img/product/product5.png";
import product6 from "./assets/img/product/product6.png";
import product7 from "./assets/img/product/product7.png";
import product8 from "./assets/img/product/product8.png";
import product9 from "./assets/img/product/product9.png";
import product10 from "./assets/img/product/product10.png";

export const navigation = [
  {
    name: "home",
    href: "/home",
  },
  {
    name: "features",
    href: "/features",
  },
  {
    name: "product",
    href: "/product",
  },
  {
    name: "contact",
    href: "/contact",
  },
];
export const hero = {
  title: "creative home simplify your furniture",
  subtitle:
    "Do i have consent to record this meeting gain location root-and-branch,review,nor game plan who the goto",
  buttonText: "Shop Now",
};
export const stores=[
  
  {
    image:<bed/>,
    name: "bed",
  },
  {
    image:<chair/>,
    name:'chair'
  },
  {
    image:<cupboard/>,
    name:'cupboard',
  },
  {
    image:<light/>,
    name:'light'
  },

];
export const stats = [
  {
    value: "7",
    text: "year of experience",
  },
  {
    value: "2",
    text: "opened in the country",
  },
  {
    value: "10k+",
    text: "furniture solid",
  },
  {
    value: "260+",
    text: "variant furniture",
  },
];
export const features = {
  image: <feature1 />,
  title: "we create your home more aesthetic",
  subtitle:
    "furniture power is a software as services for multipurpose business management system",
  buttonText: "Show Now",
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: "valuation services",
      subtitle: "sometimes features require a short description this can be detailed description",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Development furniture models",
      subtitle: "sometimes feature require a short description this can be detailed description",
    },
  ],
  feature2:{
    title:'The Bast Furniture Manufacturing of your choice',
    subtitle:'furniture power is a software as a service for multipurpose business management system specially for them who are running two or more business explore the future furniture power is software as a service',
    image:<feature2/>

  }
};
export const newInStore = {
  title: "New in store know",
  subtitle: "Get the latest items immediately with promo price",
  link: "Check all",
  icon: <IoIosArrowRoundForward />,
  
 
};

export const products={
    title:'All products',
    subtitle:'the product we provide only for you as our services selected from the bast product with number quality products in the world',
    pages:[
      {
        image:<chair/>,
        name:'chair ',
        oldPrice:'$345',
        price:'$245',


    },
    {
      image:<cupboard/>,
      name:'cupbord ',
      oldPrice:'$345',
      price:'$26',


  },
  {
    image:<chair/>,
    name:'char1 ',
    oldPrice:'$200',
    price:'$245',
    

},
{
  image:<feature1/>,
  name:'bufe ',
  oldPrice:'$205',
  price:'$247',
  

},
{
  image:<feature2/>,
  name:'sofa ',
  oldPrice:'$200',
  price:'$245',
  

},
{
  image:<product1/>,
  name:'table',
  oldPrice:'$220',
  price:'$245',
},
{
  image:<chair/>,
  name:'chair ',
  oldPrice:'$345',
  price:'$245',


},
{
image:<cupboard/>,
name:'cupbord ',
oldPrice:'$345',
price:'$26',


},
{
image:<chair/>,
name:'char1 ',
oldPrice:'$200',
price:'$245',


},
{
image:<feature1/>,
name:'bufe ',
oldPrice:'$205',
price:'$247',


},
{
image:<feature2/>,
name:'sofa ',
oldPrice:'$200',
price:'$245',


},
{
image:<product1/>,
name:'table',
oldPrice:'$220',
price:'$245',
}





    ]

};
export const testimonial={
    title:'What People saying about Us',
    image:<avatar3/>,

};
export const persons=[
  {
    avatar:'',
    name:'andy micas',
    occupation:'manager of the furniture',
    message:'they are touch the prefect something thing is professional interest and use full for the a lot of people',


  },
  {
    avatar:'',
    name:'adriew',
    occupation:'sale representative',
    massage:'to sale bast products for by bast cost to attract the people '
  },
  {
    avatar:'',
    name:'selamawit',
    occupation:'buyer',
    message:'to buy the bast product from the furniture product website'
  },
  {
    avatar:'',
    name:'dorxx',
    occupation:'connector',
    message:'to connect  customer to the furniture by using website application'
  }
];
export const newsletter={
    title:' Get more Discount off your order',
    subtitle:'join our mailing list',
    placeholder:'',
    buttonText:'shop now',
}
export const footer={
    social:{
        icon: [<IoLogoYoutube/>,<IoLogoFacebook/>,<IoLogoGithub/>,<IoLogoInstagram/>]
    }

}