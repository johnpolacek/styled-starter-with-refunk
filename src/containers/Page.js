import App from './App'

export default (props) => (
	<App children={props.children} prefix={props.prefix} name={props.name} count={0} />
)