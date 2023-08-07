
export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray:Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '64',
        price: 1000,
        image:"images/1.webp"

    },
    {
        id: 2,
        title: 'iPhone 15 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '64',
        price: 2000,
        image:"images/2.webp"
    },
    {
        id: 3,
        title: 'iPhone 16 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '64',
        price: 3000,
        image:"images/3.webp"
    },
    {
        id: 4,
        title: 'iPhone 17 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '64',
        price: 4000,
        image:"images/4.webp"
    },
    {
        id: 5,
        title: 'iPhone 18 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '64',
        price: 5000,
        image:"images/5.webp"
    },
    {
        id: 6,
        title: 'iPhone 19 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '64',
        price: 6000,
        image:"images/6.webp"
    },
]
export const getProductsObject = (array: Product[]) => array.reduce((object, product) => ({
    ...object,
    [product.id]:product
}), {})
// const test = getProductObject(productsArray);
// console.log(test)

export default productsArray