import React, { Component } from 'react'
import { Box, H2, H3, Text, A } from 'styled-system-html'
import SiteFooter from '../components/SiteFooter'
import Counter from '../components/Counter'

export default (props) => (
	<Box>
		<Box p={6} mw="1200px" mx="auto" align="center">
			<H2 pt={5}>Styled Starter Basic</H2>
			<H3 pb={4}>with <A color="blue" href="https://github.com/jxnblk/refunk">Refunk</A></H3>
			<Counter />
			<Text py={5}>For more info, go to the <A color="green" href="https://johnpolacek.github.io/styled-starter/">Styled Starter Project</A></Text>
		</Box>
		<SiteFooter />
	</Box>
)
