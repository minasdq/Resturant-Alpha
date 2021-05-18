import React from "react"
import './Form.scss'
export const Input = (props) => {
  return (
    <div className="form-control">
      <input {...props} />
    </div>
  )
}
export const Textarea = (props) => {
  return (
    <div className="form-control">
      <textarea {...props} ></textarea>
    </div>
  )
}
