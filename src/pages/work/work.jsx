import { Col, Container, Row } from 'react-bootstrap';

const Work = () => {
    return (
        <Container className={"insideContainer"}>
           <Row>

            <Col>
                <h3 className='workTitle'>Crypto App</h3>
                <p>
                    One of the features of this app is the ability to calculate Dollar Cost Averaging (DCA) levels.
                    It helps you calculate quickly at which levels you want to buy again and what the size the buy needs to be.
                </p>
                <p>
                    There is also a crypto news section where you can read the latest news from different crypto news agencies.

                </p>
                <p>                    In the app you can also keep track of current prices and statistics of cryptocurrencies. 
                    Additionally you have the flexibility to add your favorite cryptocurrencies to a personlized watchlist.</p>
                <p></p>
                <p> Made with Typescript & Angular</p>
            </Col>
            <Col className='text-center'><a href="https://github.com/popong1987/mobieleApplicatiesProject" target="_blank"><img src="https://i.ibb.co/djWW2GL/Screenshot-20230529-154404-crypto-App.jpg" alt="Screenshot-20230529-154404-crypto-App" border="0"/></a></Col>

           </Row>
           <Row className='workRow'>
           <Col className='text-center'>
            <a href="https://github.com/popong1987/NFTMarketplace_opnieuw" target="_blank"><img src="https://i.ibb.co/GkYYHLG/nftmarketplace.png" alt="nftmarketplace" border="0"/></a>
            </Col>
            <Col>
                <h3 className='workTitle'>NFT Marketplace</h3>
                <p>This is a school project where we had to use asp.net. Because I am very enthusiast about cryptocurrencies and NFTs, I chose to focus my project on NFTs.
                    It doesn't incorporate blockchain technology, it serves as an interactive webshop that emulates the experience of exploring and purchasing NFTs.
                    You can search through collections and galleries.
                </p>
                <p></p>

            </Col>
           </Row>
        </Container>
    )
}

export default Work;