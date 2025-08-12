export default function Button({ as:Comp='a', href='#', children, className='', ...props }) {
    const classes = `btn-gradient ${className}`
    return (
      <Comp href={href} className={classes} {...props}>
        <span>{children}</span>
      </Comp>
    )
  }