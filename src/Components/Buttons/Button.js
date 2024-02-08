import React from 'react';
import {  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,  useDisclosure } from '@chakra-ui/react';
import swiggyLogo from "../../images/swiggy.png";
import zomato from "../../images/zomato.png";

const BasicUsage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOrderNow = () => {
        console.log('order now clicked');
        onOpen(); // Open the modal when "Order Now" is clicked
    };

    return (
        <>
            <button type='button' className='bg-primary w-22 p-1 rounded-md text-sm text-background px-4 py-2 hover:bg-secondary hover:text-text font-semibold' onClick={handleOrderNow}>
                Order Now
            </button>

            <Modal isOpen={isOpen} onClose={onClose} size="2xl">
                <ModalOverlay />
                <ModalContent>
                <ModalHeader className='text-center'><span className='text-3xl font-design font-bold text-primary'>Order Now</span> </ModalHeader>
                <ModalCloseButton />
                <ModalBody >
                    {/* Replace with your modal content */}
                    {/* For example, you can use your own content or Chakra UI components */}
                    {/* <Lorem count={2} /> */}
                    <div >
                        <div className='float-left'>
                            <span className=''>
                                <a href="https://www.swiggy.com/restaurants/the-karaikudi-kitchen-laxmi-nagar-extension-karapakkam-chennai-739890" target="_blank">
                                    <img src={swiggyLogo} width={80} className='ml-10 mt-10 hover:scale-105 transition-transform duration-300' alt="" />
                                    <h2 className='text-[#E76B08] ml-6 mb-10 '>Swiggy Delivery</h2>
                                </a>
                            </span>
                            <span className='my-8'>
                                <a href="https://www.zomato.com/chennai/the-karaikudi-kitchen-karapakkam" target="_blank">
                                    <img  src={zomato} className='ml-10 mt-10 hover:scale-105 transition-transform duration-300' width={80} alt="" />
                                    <h2 className='text-[#E23744] ml-6 mb-10'>Zomato Delivery</h2>
                                </a>
                            </span>
                        </div>
                        <div className='float-right '>
                            <div className='mr-10 text-center'>
                                <h1 className='font-body text-3xl text-primary font-bold my-5 mb-10'> Home Delivery</h1>
                                <h2 className='font-medium text-xl font-body my-5'><b>Timing:</b>Lunch 12.00 pm to 4.00 pm</h2>
                                <h2 className='font-medium text-xl font-body my-5'><b>Dinner:</b>7.00 pm to 10.00 pm</h2>

                                <h1 className='font-medium text-xl font-body '><b>044 4260 7475 / 07299909494</b></h1>

                                <p className='font-medium text-xl font-body my-5'>Delivery charges applicable.</p>

                            </div>
                        </div>
                    </div>
                </ModalBody>

                {/* <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter> */}
                </ModalContent>
            </Modal>
        </>
    );
};

export default BasicUsage;
