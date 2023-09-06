import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { GetAllBundles, GetAllFeaturedItems, GetAllMemberships, GetOrderHistory } from "../../Services/APIs";


export default function TemplateList({ clientDetail, selected, handleNext }) {
    const [list, setList] = useState([])
    const [loader, setLoader] = useState(true)
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (selected === 'Featured Items') {
            GetAllFeaturedItems().then((response) => {

                setList(response.data.Items)
                setLoader(false)
            })
        } else if (selected === 'Bundle') {
            GetAllBundles().then((response) => {
                const data = response.data.Items.map(item => ({
                    title: item.bundleName
                    , description: item.bundleName,
                    ...item
                }))
                setList(data)
                setLoader(false)
            })
        }
        else if (selected === 'Purchase History') {
            console.log("clientDetail", clientDetail);
            if (clientDetail?.sortKey) {
                let clientId = clientDetail.sortKey

                GetOrderHistory(clientId).then((response) => {

                    const data = response.data.Items.map(item => {
                        if (item?.memberships?.length > 0) {

                            return { title: item.orderId, description: `${item.memberships[0].membershipName} $${item.memberships[0].price}` }
                        }
                        if (item?.contracts?.length > 0) {
                           
                            return { title: item.orderId, description: `${item.contracts[0].contractName} $${item.contracts[0].price}` }
                        }
                        if (item?.bundles?.length > 0) {
                           
                            return { title: item.orderId, description: `${item.bundles[0].bundleName} $${item.bundles[0].price}` }
                        }
                    })

                    console.log("orders", data);
                    setList(data);
                    setLoader(false)
                })

            }
        }
        else {
            GetAllMemberships().then((response) => {
                const data = response.data.Items.map(item => ({
                    description: item.label,
                    title: item.name,
                    ...item
                }))
                setList(data)
                setLoader(false)
            })
        }


    }, [selected])


    return (
        <>
            {loader ? <Box className='loader'> <CircularProgress size={60} /> </Box> :
                <Box className='template-list-main'>
                    <Typography className='heading'>List</Typography>
                    <Box className='list-section'>
                        {list && list.map((item, index) => (
                            <Box className='main-schedule-box' onClick={() => handleNext(item)} key={index}>
                                <Box className='class-section-box'>
                                    <Box className='class-section'>
                                        <Typography>{item.title}</Typography>
                                        <Typography>
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>}
        </>

    );
}
