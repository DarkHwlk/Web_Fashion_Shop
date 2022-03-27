import ContainerProducts from "../components/ContainerProducts";

const routes_categorys = [
    {
        to: "man",
        main: () => <ContainerProducts />
    },
    {
        to: "woman",
        main: () => <ContainerProducts />
    },
    {
        to: "/girl",
        main: () => <ContainerProducts />
    },
    {
        to: "/boy",
        main: () => <ContainerProducts />
    },
    {
        to: "/new",
        main: () => <ContainerProducts />
    },
    {
        to: "/sale",
        main: () => <ContainerProducts />

    }
];

export default routes_categorys