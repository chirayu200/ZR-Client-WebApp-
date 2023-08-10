import {Box, CircularProgress, Typography} from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {CustomButton} from '../../Components/Common'
import {useEffect, useState} from "react";
import {GetBundleDetail, GetFeaturedItemDetail, GetMembershipDetail} from "../../Services/APIs";


export default function ItemDetail({handleNext, selected, selectedType,handleBack}) {
    console.log(selected, "selected")
    const [detail, setDetail] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        if (selectedType === 'Featured Items') {
            console.log(selected, "Featured")
            GetFeaturedItemDetail(selected).then((response) => {

                const modifiedData = response.data.Items.map(item => ({
                    list: item.itemValue,
                    ...item
                }))

                setDetail(modifiedData[0])

                setLoader(false)
            })
        } else if (selectedType === 'Bundle') {

            console.log(selected, "Bundle")
            GetBundleDetail(selected).then((response) => {

                const modifiedData = response.data.Items.map(item => ({
                    list: item.items,
                    ...item
                }))
                setDetail(modifiedData[0])
                setLoader(false)
            })
        } else {

            GetMembershipDetail(selected).then((response) => {

                const modifiedData = response.data.Items.map(item => ({
                    list: item.benefits,
                    ...item
                }))
                setDetail(modifiedData[0])
                setLoader(false)
            })
        }


    }, [selectedType,selected])
    return (
        <>
            {loader?<Box className='loader'> <CircularProgress size={60}/> </Box>:
        <Box className='item-detail-wrap'>
            <Box className='top-section'>
                <Typography className='heading'>Description</Typography>
                <Typography>
                    {detail?.description || 'Lorem Ipsum'}
                </Typography>
            </Box>
            <Box className='top-section'>
                <Typography className='heading'>{detail?.title || 'Purchase Detail'}</Typography>
                <Box className='mid-section'>
                    {detail && detail?.list?.map((item, index) => (

                        <Box className='mid-item' key={index}>
                            <Typography
                                className=''>{item?.name ? item.name : item?.serviceName ? item.serviceName : item.itemValue.name || 'Item#01'}</Typography>
                            <Typography
                                className=''>${item?.price ? item.price : item?.discount ? item.discount : item.itemValue.price || '22 session'}</Typography>
                            <Typography className=''>$123</Typography>
                        </Box>

                    ))}
                    <Box className='mid-item'>
                        <Typography className='' >Puppy Class </Typography>
                        <Typography className=''>22 session</Typography>
                        <Typography className='' >$123</Typography>
                    </Box>
                    <Box className='mid-item'>
                        <Typography className='' sx={{fontWeight: '700'}}>Total </Typography>
                        {/*<Typography className=''>$456</Typography>*/}
                        <Typography className='' sx={{fontWeight: '700'}}>$123</Typography>
                    </Box>
                </Box>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat
                    ipsum ac felis tristique consectetur. Etiam a sapien dignissim,
                    vehicula ipsum quis, consequat elit
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat
                    ipsum ac felis tristique consectetur. Etiam a sapien dignissim,
                    vehicula ipsum quis, consequat elit
                </Typography>
            </Box>
            <Box className='footer-section'>
                <CustomButton
                    className='book-btn item-detail-btn'
                    title={"Back to shopping"}
                    // backgroundColor='#fff'
                    color='#32B2AC'
                    iconJsx={<ChevronRightIcon/>}
                    fullWidth
                    onClick={handleBack}
                />
                {selectedType === 'Item#01' ? <Box sx={{width:'100%'}}></Box> : <CustomButton
                    className='book-btn'
                    title={"Add to Cart"}
                    color='#fff'
                    backgroundColor='#32B2AC'
                    iconJsx={<ChevronRightIcon/>}
                    fullWidth
                    onClick={handleNext}

                />}


            </Box>

        </Box>
            }
        </>
    );
}
