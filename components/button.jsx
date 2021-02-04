import React from 'react'

export default function Button(props) {
    return (
        <button className={"is-clickable is-size-5 has-text-weight-semibold " + props.className} onClick={props.onClick}  style={{minWidth:'70%',border:'none',color: props.textColor ?? '#10012B', borderRadius: '40px', padding: '12px 50px', backgroundColor: props.color ?? '#40FF6C'}}>
            {props.text}
        </button>
    )
}
