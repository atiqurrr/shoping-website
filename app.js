const  wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");


const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./images/air.png",
        },
        {
          code: "darkblue",
          img: "./images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./images/jordan.png",
        },
        {
          code: "green",
          img: "./images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./images/blazer.png",
        },
        {
          code: "green",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./images/crater.png",
        },
        {
          code: "lightgray",
          img: "./images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./images/hippie.png",
        },
        {
          code: "black",
          img: "./images/hippie2.png",
        },
      ],
    },
  ];
 
  let choosenProduct = products[0];
 // console.log(choosenProduct)

const currentProductImage = document.getElementById("pdImage");

const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");

 menuItems.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        // change the choosen product 

        choosenProduct = products[index]
        console.log(choosenProduct)

        // change texts of current products 

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$"  + choosenProduct.price;
      
        currentProductImage.src=choosenProduct.colors[0].img;
        console.log(currentProductImage.src)
       
      // color change 

      currentProductColor.forEach((color, index)=>{
         color.style.backgroundColor = choosenProduct.colors[index].code;
      })


        
    })
})


currentProductColor.forEach((color, i)=>{
  color.addEventListener("click", ()=>{
    currentProductImage.src=choosenProduct.colors[i].img;
  })
})


currentProductSize.forEach((size, index)=>{
  size.addEventListener("click",()=>{
    currentProductSize.forEach((size, index)=>{
      size.style.backgroundColor = "white"
      size.style.color = "black"
    })
    size.style.backgroundColor = "black"
    size.style.color = "white"
  })
})

const productBtn = document.querySelector(".productButton")

const payment = document.querySelector(".payment")
const closeWindow = document.querySelector(".close")


productBtn.addEventListener("click", ()=>{
  payment.style.display = "flex"
})

closeWindow.addEventListener("click", ()=>{
  payment.style.display = "none"
})



