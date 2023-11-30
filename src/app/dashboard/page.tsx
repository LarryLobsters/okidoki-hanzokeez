import { Flex, Stack } from '@chakra-ui/react'

import React from 'react'

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className=''>
        <Flex width='100vw' height='100vh' align='center' justify='center' direction='column'>
          <Stack width='100%' maxWidth='360px' align='center' spacing='10'>
            <Flex
              as='form'
              width='100%'
              maxWidth='360px'
              bg='gray.800'
              padding='8'
              borderRadius='8'
              flexDir='column'
              // onSubmit={handleSignIn}
            ></Flex>
          </Stack>
          <h1 className='text-4xl font-bold'>Welcome to your dashboard</h1>
          <p className='text-lg'>This is your dashboard, you can do whatever you want here</p>
        </Flex>
      </div>
    </div>
  )
}

export default DashboardPage
