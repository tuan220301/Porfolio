import { Box, useBreakpointValue } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { globalHistory } from '@reach/router';
import { DefaultSysterm } from '../Default';
const NavbarComponent = () => {
    const isMobile = useBreakpointValue({ base: true, sm: false });
    return (
        <Box
            style={{
                width: '100%',
                height: '56px',
                backgroundColor: DefaultSysterm.bgColorFill,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                justifyContent: 'space-between',
                position: 'absolute',
                zIndex: 99
            }}>
            <Box style={{
                width: '200px',
                height: '100%',
                display: isMobile ? 'none' : 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ fontSize: '20px' }}>Nguyen Minh Tuan</Text>
            </Box>
            <Box style={{
                width: 'fit-content',
                display: 'flex',
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center',
                paddingRight: 10
            }}>
                <Link to='/'>Home</Link>
                <Link to='/Work'>Work</Link>
                <Link to='/Contact'>Contact</Link>
            </Box>
        </Box>
    );
};
export default NavbarComponent; 