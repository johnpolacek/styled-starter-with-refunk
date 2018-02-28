import connect from 'refunk';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Box, Text, H3 } from 'styled-system-html';
import theme 	from '../_Theme';
import Head		from './Head'
import SiteNav from '../components/SiteNav'

const App = (props) => {
	return (
		<Box>
		    <Head prefix={props.prefix} />
		    <ThemeProvider theme={theme}>
		    	<Box>
		    		<SiteNav current={props.name} />
					<Box>
						{props.children}
					</Box>
				</Box>
	    	</ThemeProvider>
	  	</Box>
	  )
}


export default connect(App);
