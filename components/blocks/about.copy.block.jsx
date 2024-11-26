import Icon from '../utils/icon.util'

export default function CopyBlock({ containerClass, containerStyle, iconClass, icon, title, copyStyle, copy }) {
	return <div className={ containerClass } style={ containerStyle }><span className={ iconClass }><Icon icon={ icon } /></span><h3>{ title }</h3><p style={ copyStyle }>{ copy }</p></div>
}