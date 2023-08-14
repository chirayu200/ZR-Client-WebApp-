import React, {useState} from "react";
import {Box, Container, Typography} from "@mui/material";

import {CustomButton, NotificationSection} from "../../Components/Common";

import Memberships from "./Memberships";
import TemplateList from "./TemplateList";
import ItemDetail from "./ItemDetail";
import Cart from "./Cart";
import PurchaseHistory from "./PurchaseHistory";
import {useNavigate} from "react-router-dom";

const backArrow = require("../../assets/images/orangeArrow.svg").default;
const addCard = require("../../assets/images/cart-outlined.svg").default;

export default function ShopMain() {
    const [active, setActive] = useState(0);
    const [selectedType, setSelectedType] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();
    const handleListScreen = (type) => {
        setActive(1)
        setSelectedType(type);
    }
    const handleDetailScreen = (item) => {
        setActive(2)

        setSelectedItem(item);
    }
    const childComponents = [{
        title: "Shop", component: <Memberships handleNext={handleListScreen}/>
    }, {
        title: `${selectedType}`, component: <TemplateList handleNext={handleDetailScreen} selected={selectedType}/>
    }, {
        title: `${selectedItem?.title}`, component: <ItemDetail
            handleNext={() => setActive(3)}
            selected={selectedItem}
            selectedType={selectedType}
            handleBack={() => setActive(0)}/>
    }, {
        title: "Cart", component: <Cart handleNext={() => setActive(4)}/>
    }, {
        title: "Purchase History", component: <PurchaseHistory handleNext={() => {
            setActive(2);
            setSelectedType('Item#01')
            setSelectedItem({title: "Item#01"})
        }}/>
    },]


    return (<Container className='appointment-container'>
            <Box className='appointment-header'>
                <Box className='top-header shop-header'>
                    <Box className='first-box'>
                        <CustomButton
                            className='arrow-btn'
                            color='#E35205'
                            icon={backArrow}
                            backgroundColor='#E7EFF9'
                            onClick={() => {
                                if (active === 0) {
                                    navigate('/')
                                } else {
                                    setActive(active - 1)
                                }
                            }}
                        />
                        <Typography className='header-text'>{childComponents[active].title}</Typography>
                    </Box>
                    {active === 0 ? <Box className='shop-cart'>
                        <img src={addCard} alt='cart'/>
                        <Typography>
                            Cart: 3 <span>items</span>
                        </Typography>
                    </Box> : null}

                </Box>

                <NotificationSection/>
            </Box>
            {childComponents[active].component}
        </Container>);
}
