export const Routes = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About Us",
        path: "/about-us",
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Product",
        path: "/products",
        child: [
            {
                name: "Dairy Products",
                path: "/products",
            },
            {
                name: "Breed Development",
                path: "/",
            },
            {
                name: "Consultancy",
                path: "/",
            },
        ]
    },
    {
        name: "Contact Us",
        path: "/contact-us"
    },
]