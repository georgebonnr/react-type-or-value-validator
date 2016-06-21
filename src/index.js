export default (values, types, isRequired) => (
    (props, propName, componentName) => {
        if (isRequired && !props[propName]) {
            throw new Error(`Required prop \`${propName}\` was not specified in \`${componentName}\`.`)
        }

        if (values.indexOf(props[propName]) > -1) return

        types.forEach((propType) => (
            propType(
                props,
                propName,
                componentName
            )
        ))
    }
)
