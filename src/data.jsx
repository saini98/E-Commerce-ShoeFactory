const initialState ={
    products: [
        {
            id:1,
            image: 'https://thumbs.dreamstime.com/b/nike-air-jordan-retro-og-white-red-black-sneaker-vienna-austria-june-background-135128437.jpg',
            title : 'Jordan X1132',
            price: '6499',
            quantity:1,
            ratings: ' ★ ★ ★ ★ ★ ',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
            size:[7,8,9,10],
            tax: '500',
            discount:'BOOTCAMP2021'
        },
        {
            id:2,
            image: 'https://i.pinimg.com/originals/51/2b/4b/512b4b870390fac58da5206e88d228d6.png',
            title : 'Nike Runner ',
            price: '5499',
            quantity:1,
            ratings: '★ ★ ★ ★ ☆',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
            size:[7,8,9,10],
            tax: '500',
            discount:'BOOTCAMP2021'
        },
        {
            id:3,
            image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/306196/01/sv01/fnd/IND/fmt/png',
            title : 'Puma Stripe',
            price: '7499',
            quantity:1,
            ratings: '★ ★ ★ ★ ★',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
            size:[7,8,9,10],
            tax: '500',
            discount:'BOOTCAMP2021'
        },
        {
            id:4,
            image: 'https://n3.sdlcdn.com/imgs/j/n/j/Campus-NORTH-Yellow-Running-Shoes-SDL325397566-3-d6f03.jpg',
            title : 'Campus Air Capsule',
            price: '3499',
            quantity:1,
            ratings: '★ ★ ★ ★ ☆ ',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
            size:[8,9,10],
            tax: '500',
            discount:'BOOTCAMP2021'
        },
        {
            id:5,
            image: 'https://n4.sdlcdn.com/imgs/h/y/l/large/Nike-Jordan-Jumpman-Pro-White-SDL617455427-1-21799.jpg',
            title : 'Jordan SX11',
            price: '8499',
            quantity:1,
            ratings: '★ ★ ★ ★ ☆',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
            size:[7,8,9,10],
            tax: '500',
            discount:'BOOTCAMP2021'
        },
        {
            id:6,
            image: 'http://cdn.shopify.com/s/files/1/0049/9112/products/75f794c3ba3ae25c5e9ccb07b1de62a8_1200x.jpg?v=1613144465',
            title : 'Adidas Marathon',
            price: '4499',
            quantity:1,
            ratings: '★ ★ ★ ★ ☆',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
            size:[7,8,9,10],
            tax: '500',
            discount:'BOOTCAMP2021'
        },
        {
            id:7,
            image: 'https://4.imimg.com/data4/MA/JM/MY-2483971/designer-formal-shoes-500x500.jpeg',
            title : 'Office Casual ',
            price: '2499',
            quantity:1,
            ratings: '★ ★ ★ ☆ ☆',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
            size:[7,8,9,10],
            tax: '500',
            discount:'BOOTCAMP2021'
        },
        {
            id:8,
            image: 'https://images-na.ssl-images-amazon.com/images/I/61RZB3iuqjL._UY500_.jpg',
            title : 'Adidas Slipper',
            price: '1499',
            quantity:1,
            ratings: '★ ★ ★ ★ ☆',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
            size:[7,8,9,10],
            tax: '500',
            discount:'BOOTCAMP2021'
        },
        {
            
            id:9,
            image: 'https://5.imimg.com/data5/PC/XF/MY-55879412/woodland-leather-shoe-500x500.jpg',
            title : 'Woodland Gold',
            price: '8999',
            quantity:1,
            ratings: '★ ★ ★ ☆ ☆',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
            size:[7,8,9,10],
            tax: '500',
            discount:'BOOTCAMP2021'
        },
        {
            id:10,
            image: 'https://m.media-amazon.com/images/I/61DHN87upML._AC_UL320_.jpg',
            title : 'Kitten Heels ',
            price: '1599',
            quantity:1,
            ratings: '★ ★ ★ ★ ☆',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
            size:[7,8,9,10],
            tax: '500',
            discount:'BOOTCAMP2021'
        },
        {
            
            id:11,
            image: 'https://rukminim1.flixcart.com/image/332/398/k6mibgw0/shoe/q/g/y/formal-shoes-for-men-f5001-brown-9-englewood-brown-original-imafpyxwkjrz8qzn.jpeg?q=50',
            title : 'Gold Bottom ',
            price: '1999',
            quantity:1,
            ratings: '★ ★ ★ ☆ ☆',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
            size:[7,8,9,10],
            tax: '500',
            discount:'BOOTCAMP2021'
        },
        {
            id:12,
            image: 'https://keeshoes.com/a/ale/galeries_image/image_413721.s2000/adidas-originals-adilette-m-280647-slippers-white-black-1-2000x2000.jpeg?_=1583746567.5403512111111111',
            title : 'Adidas Adilette ',
            price: '500',
            quantity:1,
            ratings: '★ ★ ★ ★ ★',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
            size:[6,7,8,9,10],
            tax: '999',
            discount:'BOOTCAMP2021'
        }
    ],
    product:{ }
}

export default initialState;