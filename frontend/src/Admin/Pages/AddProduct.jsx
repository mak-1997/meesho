import { Box } from '@chakra-ui/react'
import React from 'react'
import AdminSidebar from '../Components/AdminSidebar'

const AddProduct = () => {
  return (
    <AdminSidebar>
      <Box w="100%" h="2000px" border={"1px solid red"}>
        <h1>Add Products</h1>
      </Box>
    </AdminSidebar>
  )
}

export default AddProduct