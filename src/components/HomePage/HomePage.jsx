import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeFooter from "../Footer/HomeFooter";
import HomeHeader from "../Headers/HomeHeader";

function HomePage() {
    const [products, setProducts] = useState([]);
    const [idProducts, setIdProducts] = useState([]);

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, []);

    function getProducts() {
        const promise = axios.get(`https://fast-closet.herokuapp.com/products`);
        promise
            .then((res) => {
                const data = shuffleArray(res.data);
                setIdProducts(data.map((item) => (item._id)))
                setProducts(data.map((product) => (product.product)));
            })

            .catch(err => {
                alert(err.response.data);
            })
    }

    function shuffleArray(arr) {

        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        return arr;
    }


    return (
        <Content>
            <HomeHeader></HomeHeader>
            <Products>
                {products.map((product, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/produto/${idProducts[index]}`}>
                                <Image>
                                    {product.images.map((image, i) => {
                                        return (
                                            <img src={image} alt="" key={i} />
                                        )
                                    })}
                                </Image>
                            </Link>
                            <SubTitle>
                                <p>{product.title}</p>
                                <h1>R${product.value}</h1>
                            </SubTitle>
                            <hr />
                        </div>
                    )
                })}
            </Products>
            <HomeFooter></HomeFooter>
        </Content>
    )
}

const SubTitle = styled.div`
    height: fit-content;

    p{
        margin-top: 3px;
        width: 100vw;
        max-width: 1200px;
        text-align: center;
    }

    h1 {
        font-weight: 700;
        text-align: center;
    }
`

const Image = styled.div`
    display: flex;
    overflow-x: scroll;

    img{
        width: 100vw;
        max-width: 600px;
    }
`

const Products = styled.div`
    padding: 70px 0 80px 0;
    font-size: 17px;
    width: 100vw;
    max-width: 1200px;

    hr{
        width: 90vw;
        max-width: 1200px;
    }

`

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100vh;
    max-width: 100vw;
    box-sizing: border-box;

`

export default HomePage;