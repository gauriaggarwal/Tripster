import React from 'react'
import {
    Box,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Text,
    CheckboxGroup,
    Checkbox,
    Button,
    Link,
    Slider,
    SliderThumb,
    SliderTrack,
    SliderFilledTrack
} from "@chakra-ui/react";

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Routes
} from "react-router-dom";
import HotelList from '../../AdminDashboard/HotelList/Hotellist';
const Interests = () => {
    const [checkedItems, setCheckedItems] = React.useState([false, false])
    const allChecked = checkedItems.every(Boolean)

    const [value, setValue] = React.useState(0)
    const handleChange = (value) => setValue(value)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked
    return (
        <div>
            <Text fontWeight="bold" fontSize="30px" align="center">Choose Your Interests</Text>
            <br />
            <Routes>
                <Route path="/interests/hotels" element={HotelList} />
            </Routes>
            <CheckboxGroup colorScheme="green" variant="circular">
                <Stack spacing={[1, 5]} direction={['column', 'row']} justifyContent="center">
                    <Button><Checkbox variant="circular" size="xl">Clubbing</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">malls</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Monuments</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Trekking</Checkbox></Button>
                </Stack>
                <br />
                <Stack spacing={[1, 5]} direction={['column', 'row']} justifyContent="center">
                    <Button><Checkbox variant="circular" size="xl">Local Cuisines</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Shopping</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Forts</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Temples</Checkbox></Button>
                </Stack>
                <br />
                <Stack spacing={[1, 5]} direction={['column', 'row']} justifyContent="center">
                    <Button><Checkbox variant="circular" size="xl">Art</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Watersports</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Farmhouses</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Museums</Checkbox></Button>
                </Stack>
                <br />
                <Stack spacing={[1, 5]} direction={['column', 'row']} justifyContent="center">
                    <Button><Checkbox variant="circular" size="xl">Art</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Watersports</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Farmhouses</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Museums</Checkbox></Button>
                </Stack>
                <br />
                <Stack spacing={[1, 5]} direction={['column', 'row']} justifyContent="center">
                    <Button><Checkbox variant="circular" size="xl">Art</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Watersports</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Farmhouses</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Museums</Checkbox></Button>
                </Stack>
                <br />
                <Stack spacing={[1, 5]} direction={['column', 'row']} justifyContent="center">
                    <Button><Checkbox variant="circular" size="xl">Art</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Watersports</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Farmhouses</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Museums</Checkbox></Button>
                </Stack>
                <br />
                <Stack spacing={[1, 5]} direction={['column', 'row']} justifyContent="center">
                    <Button><Checkbox variant="circular" size="xl">Art</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Watersports</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Farmhouses</Checkbox></Button>
                    <Button><Checkbox variant="circular" size="xl">Museums</Checkbox></Button>
                </Stack>
                <br />
            </CheckboxGroup>
            <Text fontSize='xl' fontWeight='bold' padding="0 0 0 25%">Number of People</Text><br />
            <Flex justifyContent="center">
                <NumberInput maxW='100px' mr='2rem' value={value} onChange={handleChange}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Slider
                    flex='1'
                    focusThumbOnChange={false}
                    value={value}
                    defaultValue={4}
                    min={1}
                    max={25}
                    maxW='700px'
                    onChange={handleChange}
                >
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb fontSize='sm' boxSize='32px' children={value} />
                </Slider>
                <br />
            </Flex>
            <br />

            <Text fontSize='xl' fontWeight='bold' padding="0 0 0 25%">Budget</Text><br />
            <Flex justifyContent="center">
                <NumberInput size='lg' width='800px' defaultValue={15000} min={10000}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <br />
            </Flex>

            <br />
            <Flex justifyContent="center">
                <Box borderRadius={10}
                    color={"black"}
                    zIndex={100}
                    className="advancedSearch" bg="lightgreen" w="max-content" align="center" padding="5px 15px">
                    <Link to="/interests/hotels"><Text fontWeight={"bold"}> Advanced Search </Text></Link></Box>
            </Flex>
            <br />
        </div>
    )
}
export default Interests;