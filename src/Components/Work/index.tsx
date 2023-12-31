import { Box, Grid, GridItem, Text, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import ShippingBusComponent from "../Base/Shipping_bus";
import TruckComponent from "../Base/Truck";
import HanbiroComponent from "../Base/Hanbiro";
import NoteComponent from "../Base/Note";
import ComputerComponent from "../Base/Computer";
import SkillComponent from "./skill";

const WorkComponent = () => {
    // console.log('workpage');
    const gridColumnTemplate = useBreakpointValue({ base: '1fr', md: '1fr 1fr', xl: '1fr 1fr 1fr' });
    const gridRowTemplate = useBreakpointValue({ base: '1fr', md: '1fr 1fr', xl: '1fr 1fr ' });
    const textStyle = {
        fontSize: 18,
        fontFamily: 'mono',
        fontWeight: 'bold'
    };
    const [is1200pxOrLess] = useMediaQuery('(max-width: 1250px)');
    return (
        <Box style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            height: is1200pxOrLess ? '100%' : 'fit-content',
            paddingTop: '56px',
            background: 'linear-gradient(180deg, rgba(255, 231, 205, 1) 0%, #121120 100%)',
            border: '1px solid black',
        }}>
            <Box width={'97%'} padding={5} height={'100%'}
            // border={'1px solid black'}
            >
                {!is1200pxOrLess && <SkillComponent />}
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: '24px',
                    textAlign: 'center',
                    marginTop: is1200pxOrLess ? 0 : 10,
                    marginBottom: 10
                }}>My Projects</Text>
                <Grid
                    templateColumns={gridColumnTemplate}
                    templateRows={gridRowTemplate}
                    gap={6}
                    height={'100%'}
                >
                    {/* Place your grid items here */}
                    <GridItem bg={'rgba(130, 129, 146, 0.2)'}
                        width={'500px'}
                        height={'400px'}
                        display={"flex"}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={4}
                        borderRadius={'lg'}
                        _hover={{
                            background: 'linear-gradient(180deg, #FECDED 20%, #FE9CA1 100%)'
                        }}
                    >
                        <Box style={{
                            width: '450px',
                            height: '300px',
                            // border: '1px solid black'
                        }}>
                            <ShippingBusComponent />
                        </Box>
                        <Text style={textStyle}>Logistic Application</Text>
                    </GridItem>
                    <GridItem bg={'rgba(130, 129, 146, 0.2)'}
                        width={'500px'}
                        height={'400px'}
                        display={"flex"}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={4}
                        borderRadius={'lg'}
                        _hover={{
                            background: 'linear-gradient(180deg, #FECDED 20%, #FE9CA1 100%)'
                        }}
                    >
                        <Box style={{
                            width: '450px',
                            height: '300px',
                            // border: '1px solid black'
                        }}>
                            <TruckComponent />
                        </Box>
                        <Text style={textStyle}>Part time at Logisoft</Text>
                    </GridItem>
                    <GridItem bg={'rgba(130, 129, 146, 0.2)'}
                        width={'500px'}
                        height={'400px'}
                        display={"flex"}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={4}
                        borderRadius={'lg'}
                        _hover={{
                            background: 'linear-gradient(180deg, #FECDED 20%, #FE9CA1 100%)'
                        }}
                    >
                        <Box style={{
                            width: '450px',
                            height: '300px',
                            // border: '1px solid black'
                        }}>
                            <HanbiroComponent />
                        </Box>
                        <Text style={textStyle}>Intern at Hanbiro</Text>
                    </GridItem>
                    <GridItem bg={'rgba(130, 129, 146, 0.2)'}
                        width={'500px'}
                        height={'400px'}
                        display={"flex"}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={4}
                        borderRadius={'lg'}
                        _hover={{
                            background: 'linear-gradient(180deg, #FECDED 20%, #FE9CA1 100%)'
                        }}
                    >
                        <Box style={{
                            width: '450px',
                            height: '300px',
                            // border: '1px solid black'
                        }}>
                            <NoteComponent />
                        </Box>
                        <Text style={textStyle}>Todo List with React and Mongoose</Text>
                    </GridItem>
                    <GridItem bg={'rgba(130, 129, 146, 0.2)'}
                        width={'500px'}
                        height={'400px'}
                        display={"flex"}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={4}
                        borderRadius={'lg'}
                        _hover={{
                            background: 'linear-gradient(180deg, #FECDED 20%, #FE9CA1 100%)'
                        }}
                    >
                        <Box style={{
                            width: '450px',
                            height: '300px',
                            // border: '1px solid black'
                        }}>
                            <NoteComponent />
                        </Box>
                        <Text style={textStyle}>Todo List with Xamarin and SQLite</Text>
                    </GridItem>
                    <GridItem bg={'rgba(130, 129, 146, 0.2)'}
                        width={'500px'}
                        height={'400px'}
                        display={"flex"}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={4}
                        borderRadius={'lg'}
                        _hover={{
                            background: 'linear-gradient(180deg, #FECDED 20%, #FE9CA1 100%)'
                        }}
                    >
                        <Box style={{
                            width: '450px',
                            height: '300px',
                            // border: '1px solid black'
                        }}>
                            <ComputerComponent />
                        </Box>
                        <Text style={textStyle}>WITU social with Near and React</Text>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
};
export default WorkComponent;